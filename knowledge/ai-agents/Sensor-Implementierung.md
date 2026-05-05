---
title: Sensor — Technische Implementierung
type: guide
status: living
created: '2026-03-09'
updated: '2026-03-09'
tags:
  - ai-agents
sources:
  - 'self-authored:loschke:enterprise-ai-agents'
area: ai-agents
audience:
  - entwickler
  - konzepter
  - ux
level: intermediate
intent:
  - verstehen
  - anwenden
contains:
  - concept
  - argument
  - method
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Sensor — Technische Implementierung

> Wie die Intentionserkennung konkret funktioniert: Architektur-Optionen, Output-Schema, Multi-Turn-Tracking und die Schnittstelle zum Gedaechtnis.

---

## Kernaussage

Die [[Sensor-Intentionserkennung]] beschreibt das Was: Intentionen als Vokabular, 3-Ebenen-Framework, drei Prinzipien. Aber der Sensor ist der erste Schritt in der gesamten Pipeline. Alles was danach kommt — welcher Context geladen wird, welcher Ton gesetzt wird, welche Aktionen angeboten werden — haengt von der Qualitaet des Sensor-Signals ab.

Die zentrale Erkenntnis: **Der Sensor produziert nicht nur eine Intention. Er produziert ein strukturiertes Signal, das alle nachfolgenden Elemente konfiguriert.**

---

## Wo sitzt der Sensor architektonisch?

Die Antwort haengt von der Feature-Intensitaet ab (siehe [[Feature-Profile-Methodik]]):

### Option A: Inline (im selben LLM-Call)

Der System Prompt enthaelt die Anweisung, zuerst die Intention zu analysieren und dann zu antworten. Die Analyse und die Antwort passieren in einem einzigen Call.

**Wann passend:** Sensor-Stufe Minimal bis Leicht. Wenige Intentionen, keine emotionale Varianz, kein Multi-Turn.
**Vorteil:** Keine zusaetzliche Latenz. Einfache Architektur.
**Risiko:** Die Analyse ist nicht entkoppelt. Unter Helpful-Druck kann das LLM die Analyse-Phase abkuerzen und direkt antworten. Keine Moeglichkeit, das Sensor-Signal separat zu loggen oder zu validieren.
**Beispiel:** Formular-Assistent (Intention ist immer "Hilf mir beim Ausfuellen").

### Option B: Vorgelagerter Classification-Call (separater Schritt)

Ein eigener LLM-Call analysiert die Nutzer-Anfrage und produziert ein strukturiertes Signal (JSON). Erst danach startet der Hauptcall mit dem Signal als Input.

**Wann passend:** Sensor-Stufe Mittel bis Voll. Mehrere Intentionen, emotionale Varianz, Multi-Turn, oder wenn das Signal andere Systeme steuert (Retrieval, Routing).
**Vorteil:** Entkoppelt. Der Sensor hat keinen Helpful-Druck — sein einziger Job ist Analyse. Signal ist strukturiert, loggbar, testbar. Kann mit kleinerem, schnellerem Modell laufen.
**Kosten:** 200-500ms zusaetzliche Latenz. 500-1500 Tokens pro Call.
**Beispiel:** Vollassistent, Push-Empfehlungen.

### Option C: Hybrid (Routing + Inline)

Ein schneller erster Call klassifiziert grob (z.B. Routing: welches Feature ist zustaendig?). Das zustaendige Feature macht dann die feine Intention-Analyse inline.

**Wann passend:** Systeme mit mehreren KI-Inseln / Features, die unter einer gemeinsamen Eingabe erreichbar sind.
**Beispiel:** Ein Gesundheitsportal, das Pflege-Fragen zum Pflege-Assistenten routet und Kurs-Fragen zum Kurs-Onboarding.

### Faustformel

Gleiche Logik wie beim Kompass (siehe [[Kompass-Implementierung]]): **Je mehr vom Sensor-Signal abhaengt, desto mehr lohnt sich die Entkopplung.** Wenn das Signal nur den Ton beeinflusst: Inline reicht. Wenn es Retrieval, Routing, Stimme und Kompass gleichzeitig steuert: Separater Call.

---

## Was produziert der Sensor? Das Signal-Schema

Der Sensor produziert nicht einfach "Intention = Leistungsklaerung". Er produziert ein strukturiertes Objekt, das alle nachfolgenden Elemente konfiguriert:

### Kern-Signal (immer)

| Feld | Typ | Beschreibung | Beispiel |
|---|---|---|---|
| primary_intention | Code aus Intentions-Vokabular | Hauptbeduerfnis | I4 (Leistungsklaerung) |
| confidence | Float 0-1 | Wie sicher ist die Erkennung? | 0.85 |

### Erweitertes Signal (ab Sensor-Stufe Mittel)

| Feld | Typ | Beschreibung | Beispiel |
|---|---|---|---|
| secondary_intention | Code oder null | Nebenbeduerfnis | I6 (Angehoerigen-Sorge) |
| emotional_state | Enum | Erkannter emotionaler Zustand | "unsicher_ueberfordert" |
| cognitive_capacity | Enum: low/medium/high | Geschaetzte kognitive Kapazitaet | "medium" |
| urgency | Enum: acute/normal/preventive | Dringlichkeit | "normal" |

### Volles Signal (Sensor-Stufe Voll)

| Feld | Typ | Beschreibung | Beispiel |
|---|---|---|---|
| topic_hints | Array von Strings | Thematische Hinweise fuer Retrieval | ["pflege", "pflegegrad", "sachleistung"] |
| tool_hints | Array von Strings | Vermutlich relevante Tools | ["beratungsstellen_suche", "pflegegrad_rechner"] |
| conversation_phase | Enum | Wo im Gespraech stehen wir? | "initial_question" |
| intent_shift | Boolean | Hat sich die Intention gerade veraendert? | false |

### Wohin fliesst das Signal?

| Empfaenger | Was er vom Signal nutzt |
|---|---|
| Gedaechtnis / Retrieval | primary_intention, topic_hints, tool_hints → bestimmt welcher Context geladen wird |
| Stimme / Prompt-Konfiguration | emotional_state, cognitive_capacity → bestimmt Ton und Tiefe |
| Stimme / Kanal-Rendering | cognitive_capacity → bestimmt wie viel angezeigt wird |
| Kompass | urgency → bei "acute" sofort Notruf-Verweis triggern |

---

## Multi-Turn: Wie der Sensor ueber Gespraeche lernt

Die bestehende Note sagt: "Intentionen veraendern sich im Gespraech." Aber wie trackt das System das?

### Ansatz 1: Stateless (jede Nachricht isoliert)

Jede Nutzer-Nachricht wird isoliert analysiert. Kein Gespraechszustand.

**Vorteil:** Einfach. Keine State-Verwaltung.
**Problem:** Kann keinen Intentionswechsel erkennen. Kann nicht sehen, ob eine Frage eine Vertiefung der vorherigen ist oder ein Themenwechsel.
**Passend fuer:** Sensor-Stufe Minimal bis Leicht.

### Ansatz 2: Sliding Window (letzte N Nachrichten als Kontext)

Der Sensor sieht nicht nur die aktuelle Nachricht, sondern die letzten 3-5 Nachrichten. Erkennt dadurch Muster.

**Vorteil:** Erkennt Intentionswechsel. Sieht eskalierenden Frust oder zunehmende Detailfragen.
**Kosten:** Mehr Tokens pro Sensor-Call. Aber bei einem kleinen Modell immer noch guenstig.
**Passend fuer:** Sensor-Stufe Mittel.

### Ansatz 3: Conversation State (expliziter Gespraechszustand)

Ein persistenter Zustand wird ueber das Gespraech mitgefuehrt und bei jeder Nachricht aktualisiert:

```
conversation_state: {
  turn_count: 4,
  intention_history: [I1, I1, I4, I6],
  resolved_questions: ["ist_das_schlimm", "was_kostet_es"],
  open_threads: ["angehoerigen_entlastung"],
  emotional_trajectory: "anxiety → pragmatic → overwhelmed"
}
```

**Vorteil:** Reichstes Signal. Kann proaktiv Themen ansprechen, die "offen" sind. Erkennt emotionale Entwicklung.
**Kosten:** Komplexeste Architektur. Erfordert State-Management.
**Passend fuer:** Sensor-Stufe Voll (Vollassistent).

---

## Die Sensor-Gedaechtnis-Schnittstelle

Der Sensor bestimmt, welcher Context geladen wird. Aber wie genau?

### Variante A: Intention-zu-Baustein-Mapping (statisch)

Pro Intention ist definiert, welche Bausteine / Cluster relevant sind. Eine Lookup-Tabelle:

| Intention | Primaere Bausteine | Sekundaere Bausteine |
|---|---|---|
| I4 Leistungsklaerung | Alle Geldleistungs-Bausteine | Antragsverfahren |
| I6 Angehoerigen-Sorge | Pflegeleistungen, Entlastung | Selbstfuersorge, Beratung |

**Vorteil:** Vorhersagbar, testbar, keine Retrieval-Fehler.
**Nachteil:** Manuell gepflegt. Wird bei vielen Intentionen x Themen komplex.
**Passend fuer:** Cluster-Ansatz. Ueberschaubare Domaenen.

### Variante B: Sensor generiert Retrieval-Query (dynamisch)

Der Sensor gibt topic_hints und tool_hints aus. Ein Retrieval-System nutzt diese als Suchquery gegen die Baustein-Datenbank (semantische Suche + Metadaten-Filter).

**Vorteil:** Skaliert. Neue Bausteine werden automatisch gefunden.
**Nachteil:** Retrieval-Qualitaet haengt von der Query-Qualitaet ab. Weniger vorhersagbar.
**Passend fuer:** Atomare Bausteine. Grosse Domaenen.

### Variante C: Hybrid (Routing + Retrieval)

Intention mapped auf einen Themenbereich (statisch). Innerhalb des Bereichs wird retrieval-basiert gesucht (dynamisch).

**Vorteil:** Kombiniert Vorhersagbarkeit mit Flexibilitaet. Routing stellt sicher, dass der richtige Bereich durchsucht wird. Retrieval findet die spezifischen Bausteine.
**Passend fuer:** Produktion. Empfohlener Ansatz fuer die meisten Faelle.

---

## Konsequenzen fuer die Teamarbeit

| Rolle | Aufgabe |
|---|---|
| Fachbereich / UX | Definiert das Intentionen-Vokabular pro Domaene. Beschreibt jede Intention mit 3-Ebenen-Framework. |
| Konzeption | Entscheidet ueber Sensor-Stufe pro Feature. Definiert Signal-Schema. |
| Entwicklung | Baut den Sensor-Call (inline oder vorgelagert). Implementiert Multi-Turn-Tracking. |
| Fachredaktion | Pflegt Intention-zu-Baustein-Mapping oder Retrieval-Tags. |
| QA / Testing | Testet Sensor-Qualitaet systematisch: Erkennt er die richtigen Intentionen? Wie ist die Confidence bei mehrdeutigen Anfragen? |

---

## Verknuepfungen

- [[Sensor-Intentionserkennung]] — Das Was: Intentionen, Vokabular, Prinzipien
- [[Intentionen-3-Ebenen]] — Wie man Intentionen operationalisiert
- [[Stimme-Implementierung]] — Eingang 1 der Stimme: Das Sensor-Signal
- [[Kompass-Implementierung]] — Kompass nutzt urgency-Signal fuer Notruf-Trigger
- [[Gedaechtnis-Context-Engineering]] — Sensor bestimmt welcher Context geladen wird
- [[Assistenz-Architektur]] — Das Gesamtframework

---

*Quelle: Eigene Beratungspraxis und Architektur-Arbeit, entwickelt 2025/2026*

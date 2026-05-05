---
title: Stimme — Technische Implementierung
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
  - fuehrungskraft
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
# Stimme — Technische Implementierung

> Wie die Stimme konkret funktioniert: Zwei Eingaenge, drei Schichten, strukturierte Ausgabe. Nicht "anderer Ton im Prompt", sondern eine Output-Architektur.

---

## Kernaussage

Die [[Stimme-Kommunikation]] beschreibt das Was: Tonalitaet, Informationstiefe, Proaktivitaet, Ausgabemedium. Aber in der Umsetzung ist die Stimme kein Prompt-Parameter. Sie ist eine eigenstaendige Architekturschicht mit zwei Eingaengen und drei technischen Schichten.

Die zentrale Erkenntnis: **Die Stimme hat nicht einen Eingang, sondern zwei. Und sie produziert nicht Text, sondern ein strukturiertes Ausgabe-Objekt, das ein UI-Layer rendert.**

---

## Zwei Eingaenge

### Eingang 1: Sensor-Signal (Wer braucht Was)

Kommt von der [[Sensor-Intentionserkennung]]. Liefert:
- Primaere und sekundaere Intention
- Emotionaler Zustand (Angst, Pragmatismus, Ueberforderung, Motivation)
- Kognitive Kapazitaet (niedrig / mittel / hoch)
- Dringlichkeit (akut / normal / praeventiv)

Steuert: Tonalitaet, wie viel Information, wie proaktiv, welche Haltung.

### Eingang 2: Situations-Kontext (Wo und Wie)

Kommt vom technischen Layer. Liefert:
- Kanal / Geraet (Desktop-Browser, Mobile App, Sprachassistent, Push)
- Modalitaet des Inputs (Text-Eingabe, Sprach-Input)
- Verfuegbare Daten (Location ja/nein, authentifiziert ja/nein, Nutzerprofil ja/nein)
- Interaktionsmodus (synchroner Chat, asynchrone Push, Wizard/gefuehrt)

Steuert: Ausgabeformat, verfuegbare Aktionen, Antwortlaenge, UI-Elemente.

### Die Multiplikation

Beide Eingaenge multiplizieren sich. Dieselbe Person, dieselbe Frage, dieselbe Intention — aber fundamental andere Antworten je nach Situation:

| Situation | Sensor sagt | Kontext sagt | Stimme macht |
|---|---|---|---|
| Desktop, eingeloggt, Profil vorhanden | Leistungsklaerung + Angehoerigenvorsorge, mittel belastet | Viel Platz, personalisiert moeglich, alle UI-Elemente | Ausfuehrlich, personalisierte Betraege, expandierbare Details, Beratungslink |
| Mobile App, unterwegs, Location bekannt | Gleiche Intention, gleiche Emotion | Wenig Platz, Location verfuegbar, kompakte UI | Kurzantwort + "Pflegeberater 800m entfernt, Termin buchen?" |
| Sprachassistent im Auto | Gleiche Intention, gleiche Emotion | Kein Screen, keine Links, keine Tabellen, linear | Ein Satz Kerninfo + eine Handlungsempfehlung |
| Push-Nachricht, nicht eingeloggt | System-initiiert, praeventiv | Kein Profil, keine pers. Daten, 1-2 Saetze | Ein Satz der neugierig macht, generisch, keine personenbezogenen Daten |

Das ist kein "anderer Ton". Das sind fundamental andere Antworten aus denselben Fakten.

---

## Drei technische Schichten

### Schicht 1: Prompt-Steuerung — Der Ton

Der System Prompt bekommt vom Sensor-Signal die Konfiguration:
- Kommunikationshaltung (Transparent mit Einordnung, Auf Augenhoehe, Sachlich nicht kalt)
- Tonalitaet fuer diese Anfrage (empathisch-sachlich, motivierend, beruhigend)
- Proaktivitaets-Level (nur Antwort vs. aktiv weiterdenken)
- Kognitive Kapazitaet (radikal kuerzen vs. vollstaendig)

Steuert die Wortwahl, den Satzbau, die emotionale Faerbung. Das ist die Schicht, die das LLM direkt beeinflusst.

### Schicht 2: Strukturierte Ausgabe — Die Bausteine

Das LLM generiert nicht Fliesstext, sondern semantische Bloecke ueber ein definiertes Antwort-Schema (structured output / JSON):

| Block | Beschreibung | Immer sichtbar? |
|---|---|---|
| Kernantwort | Beantwortet die Frage direkt. 1-3 Saetze. | Ja, immer |
| Unterstuetzende Details | Betraege, Bedingungen, Rechtsgrundlagen | Je nach Kapazitaet und Kanal |
| Verwandte Informationen | Proaktive Hinweise auf verwandte Leistungen | Je nach Proaktivitaets-Level |
| Compliance-Elemente | Disclaimer, Haftungshinweis, KI-Offenlegung | Kompass bestimmt |
| Aktionen | CTAs: Beratungstermin buchen, Antrag starten, Finder oeffnen | Je nach verfuegbaren Tools und Kanal |
| Kontext-Aktionen | Location-basiert: naechste Filiale, Arzt in der Naehe | Nur wenn Location verfuegbar |

Entscheidender Punkt: Die Trennung von Inhalt und Darstellung. Das LLM entscheidet ueber Inhalt und Gewichtung der Bloecke. Die UI-Schicht entscheidet ueber die Darstellung.

### Schicht 3: Kanal-Rendering — Die Darstellung

Eine UI-Schicht (nicht das LLM), die die semantischen Bloecke je nach Situations-Kontext zusammensetzt:

**Desktop-Chat:**
- Kernantwort prominent
- Details inline sichtbar
- Verwandte Infos als expandierbare Karten
- Aktionen als Buttons
- Compliance als Fussnote

**Mobile App:**
- Kernantwort prominent
- Details hinter "Mehr erfahren"
- Verwandte Infos als horizontaler Swipe
- Location-basierte Aktionen priorisiert
- Compliance kompakt

**Sprachassistent:**
- Nur Kernantwort + eine Aktion
- Details auf Nachfrage ("Soll ich dir mehr dazu sagen?")
- Keine visuellen Elemente
- Compliance als gesprochener Hinweis

**Push-Nachricht:**
- Nur 1-2 Saetze aus Kernantwort oder verwandter Information
- Eine Aktion (Deeplink in die App)
- Keine personenbezogenen Daten (Kompass-Constraint bei nicht-authentifiziert)

---

## Die Pipeline

```
Nutzer-Anfrage
     |
     v
[Sensor] --> Sensor-Signal (Intention, Emotion, Kapazitaet)
     |
     v
[Situations-Kontext] --> Kanal, Geraet, Location, Auth-Status
     |
     v
[Prompt-Konfiguration] --> System Prompt + Sensor-Signal + Antwort-Schema
     |
     v
[LLM generiert] --> Strukturierte Ausgabe (semantische Bloecke)
     |
     v
[Kompass-Filter] --> Prueft Compliance (siehe Kompass-Implementierung)
     |
     v
[Kanal-Rendering] --> Baut die Bloecke fuer den konkreten Kanal zusammen
     |
     v
Antwort beim Nutzer
```

Wichtig: Der Kompass-Filter (siehe [[Kompass-Implementierung]]) sitzt zwischen LLM-Ausgabe und Rendering. Er prueft die strukturierten Bloecke, nicht den gerenderten Output.

---

## Kognitive Kapazitaet: Wirkt auf zwei Schichten gleichzeitig

Die kognitive Kapazitaet (vom Sensor erkannt) beeinflusst nicht nur den Ton (Schicht 1), sondern auch die Menge und Struktur der angezeigten Elemente (Schicht 3):

| Kapazitaet | Schicht 1 (Prompt) | Schicht 3 (Rendering) |
|---|---|---|
| Niedrig (Krise) | Beruhigend, einfache Sprache | Nur Kernantwort + 1 Aktion. Alles andere ausblenden. |
| Mittel (belastet) | Empathisch-sachlich | Kernantwort + Details hinter Expand. Verwandtes als Option. |
| Hoch (entspannt) | Sachlich, informativ | Alles sichtbar. Details inline. Mehrere Aktionen. |

---

## Konsequenzen fuer die Teamarbeit

| Rolle | Schicht | Verantwortung |
|---|---|---|
| Konzeption / UX | Schicht 2 + 3 | Definiert das Antwort-Schema und die Kanal-spezifischen Rendering-Regeln |
| Prompt Engineering | Schicht 1 | Uebersetzt Sensor-Signale in wirksame Prompt-Konfigurationen |
| Frontend-Entwicklung | Schicht 3 | Baut die Kanal-Renderer (Desktop, Mobil, Audio, Push) |
| Backend-Entwicklung | Schicht 2 | Implementiert das structured-output-Schema und die Pipeline |
| Fachredaktion | Schicht 2 | Definiert welche Aktionen und Verweise pro Themenbereich verfuegbar sind |

---

## Verknuepfungen

- [[Stimme-Kommunikation]] — Das Was: Parameter und Haltungen
- [[Sensor-Intentionserkennung]] — Eingang 1: Wer braucht Was
- [[Kompass-Implementierung]] — Der Filter zwischen LLM und Rendering
- [[Assistenz-Architektur]] — Das Gesamtframework
- [[Feature-Profile-Methodik]] — Stimme-Regler pro Feature

---

*Quelle: Eigene Beratungspraxis und Architektur-Arbeit, entwickelt 2025/2026*

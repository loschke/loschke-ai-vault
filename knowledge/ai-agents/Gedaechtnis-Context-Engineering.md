---
title: Gedaechtnis — Context Engineering
type: framework
status: stable
created: '2026-03-09'
updated: '2026-03-09'
tags:
  - ai-agents
sources:
  - 'self-authored:loschke:enterprise-ai-agents'
area: ai-agents
audience:
  - konzepter
  - entwickler
  - redaktion
level: intermediate
intent:
  - verstehen
  - anwenden
contains:
  - concept
  - method
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Gedaechtnis — Context Engineering

> Element 2 der Assistenz-Architektur: Woher weiss die KI, was sie weiss?

---

## Kernaussage

Context ist alles, was die KI braucht, um eine Frage zu beantworten. Das sind nicht nur aufbereitete Texte, sondern auch Tools, Datenbanken, Echtzeitdaten und Nutzerprofile. Das Gedaechtnis weiss nicht, wer es nutzt. Es weiss nur, was wahr ist und was zur Verfuegung steht. Tonalitaet, Empathie, Medienanpassung — das ist Sache der anderen Elemente.

Kernprinzip: [[Content-ist-nicht-Context]]. Website-Content ist fuer Suchmaschinen und Menschen optimiert. LLMs brauchen etwas anderes.

---

## Zwei Typen von Context

### Build Context
Vor dem Gespraech aufgebaut. Redaktionell geprueft, versioniert, aendert sich nur durch bewusste Aktualisierung. Die Redaktion kontrolliert, was das System weiss.

- Wissensbausteine aus der Content-to-Context Pipeline
- Statisch hinterlegte Daten (z.B. Oeffnungszeiten, Kontaktdaten)
- Tool-Beschreibungen (wann ist welches Tool relevant)

### Runtime Context
Existiert erst im Moment der Anfrage. Haengt von Nutzereingabe, Zeitpunkt oder Standort ab. Die Anfrage bestimmt, was zurueckkommt.

- Berechnungen (Rechner mit Nutzereingaben)
- Echtzeit-Daten (Wartezeiten, Verfuegbarkeit)
- Nutzerdaten (Profil, Standort, bisherige Interaktionen)

**Entscheidender Unterschied:** Bei Build Context kontrolliert die Redaktion, was das System weiss. Bei Runtime Context bestimmt die Anfrage, was zurueckkommt.

---

## Vier Kontextquellen

| Quelle | Typ | Beispiel |
|--------|-----|---------|
| Wissensbausteine / Cluster-Dokumente | Build | Fachlich gepruefte Inhalte aus der Aufbereitungs-Pipeline |
| Tools & Datenbanken | Hybrid | Rechner, Finder, Suchen — liefern Ergebnisse, keinen Text |
| Echtzeit-Daten | Runtime | Wartezeiten, Termine, Verfuegbarkeit |
| Nutzerprofil | Runtime | Individuelle Daten aus dem authentifizierten Bereich |

Context ist mehr als aufbereiteter Content. Tools, Echtzeitdaten und Nutzerprofile sind eigenstaendige Quellen, die nicht aus einer Content-Pipeline kommen.

---

## Zwei Ansaetze der Aufbereitung

Wie der Content zum Context wird, haengt von den Rahmenbedingungen ab. Siehe [[Cluster-vs-Bausteine]] fuer die ausfuehrliche Gegenuberstellung.

| Ansatz | Beschreibung | Wann passend |
|--------|-------------|-------------|
| Cluster-Dokument | Ein Markdown-Dokument pro Thema, komplett ins Context Window laden | Fokus-Features, ueberschaubare Themen, grosse Modelle |
| Atomare Bausteine | Kleine Einheiten mit Metadaten, Retrieval laedt nur Relevantes | Produktion, kleinere Modelle, Multi-Use ueber KI-Inseln |

---

## Qualitaet durch Dimensionen

Jede Wissenseinheit wird mit fuenf Dimensionen beschrieben. Siehe [[Kontextdimensionen]] fuer die ausfuehrliche Beschreibung.

| Dimension | Frage | Wenn fehlt |
|-----------|-------|-----------|
| Bedeutung | Was ist das inhaltlich? | Generische oder falsche Antworten |
| Struktur | Wie haengt es zusammen? | Fragmentierte Teilantworten |
| Qualitaet | Kann ich mich darauf verlassen? | Veraltete Informationen |
| Regeln | Was gilt? | Keine Haftungshinweise |
| Zielgruppe | Fuer wen? | Antwort am Bedarf vorbei |

---

## Metadaten sind Retrieval-Infrastruktur

Wichtiges Architekturprinzip: Felder wie Zielgruppe und Kontext-Tags helfen, den richtigen Context zur Laufzeit zu FINDEN. Sie bestimmen nicht, WIE der Context kommuniziert wird. Derselbe Baustein bedient verschiedene Intentionen — die Kommunikationsschicht steuert den Output.

---

## Intensitaetsstufen im Feature-Profil

| Stufe | Beschreibung | Beispiel-Feature |
|-------|-------------|-----------------|
| Minimal | Wenig Wissen, feste Domaine | Einfacher FAQ-Bot |
| Mittel | Eine Domaine, Tools, kein Nutzerprofil | Formular-Assistent, Kurs-Onboarding |
| Hoch | Mehrere Domaenen oder umfangreiche Fakten | Fach-Chat zu einem Themenbereich |
| Voll | Alle Domaenen, Tools, Echtzeit, Nutzerprofil | Vollassistent |

---

## Verknuepfungen

- [[Assistenz-Architektur]] – Das Gesamtframework
- [[Content-ist-nicht-Context]] – Warum Aufbereitung noetig ist
- [[Cluster-vs-Bausteine]] – Zwei Ansaetze der Granularitaet
- [[Kontextdimensionen]] – Die 5 Dimensionen einer Wissenseinheit
- [[Sensor-Intentionserkennung]] – Was der Sensor erkennt, bestimmt welcher Context geladen wird

---

*Quelle: Eigene Beratungspraxis, entwickelt 2025/2026*


---

## Technische Implementierung

- [[Gedaechtnis-Implementierung]] – Wie Context Engineering technisch umgesetzt wird: Pipeline, Retrieval, Orchestrierung


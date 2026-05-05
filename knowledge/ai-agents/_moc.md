---
title: AI-Agents
type: moc
status: living
created: '2026-03-09'
updated: '2026-03-09'
tags:
  - moc
  - ai-agents
  - framework
sources:
  - 'self-authored:loschke:enterprise-ai-agents'
area: ai-agents
audience:
  - fuehrungskraft
  - entscheider
  - praktiker
  - konzepter
  - entwickler
level: basic-to-advanced
intent:
  - verstehen
  - einordnen
  - vermitteln
contains:
  - framework
  - vocabulary
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# MOC: AI Agents — Assistenz-Architektur

> Framework fuer KI-basierte Interaktionen: Wie man KI-Features baut, die verlaesslich funktionieren.

## Ueberblick

Generalisiertes Framework fuer jede Situation, in der KI verlaesslich mit Fachwissen arbeiten soll. Beschreibt die vier Gestaltungsdimensionen, die um ein LLM herum gebaut werden muessen — unabhaengig davon, ob es ein Vollassistent, eine intelligente Suche oder ein Formular-Assistent ist.

Entwickelt und erprobt im Kontext eines agentischen Gesundheits-Assistenten fuer eine Krankenkasse. Die Prinzipien sind branchenuebergreifend uebertragbar: Versicherungen, Behoerden, Gesundheitswesen, Bildung, Recht, Finanzberatung.

## Struktur

```
AI-Agents/
├── Assistenz-Architektur.md          # Das Gesamtframework: 4 Elemente
├── Sensor-Intentionserkennung.md     # Element 1: Beduerfnis erkennen
├── Gedaechtnis-Context-Engineering.md # Element 2: Wissen aufbereiten
├── Kompass-Verfassung.md             # Element 3: Leitplanken setzen
├── Stimme-Kommunikation.md           # Element 4: Antwort formen
├── Content-ist-nicht-Context.md      # Kernprinzip der Wissensaufbereitung
├── Cluster-vs-Bausteine.md           # Zwei Ansaetze der Granularitaet
├── Feature-Profile-Methodik.md       # Mischpult: Nicht immer alles
├── Verfassung-vs-Regelwerk.md        # Warum Werte besser skalieren als Regeln
├── Kontextdimensionen.md             # 5 Dimensionen pro Wissenseinheit
├── Intentionen-3-Ebenen.md           # Intention → Handlung → Wirkung
└── _MOC.md
```

## Das Framework

- [[Assistenz-Architektur]] – Vier Elemente, Infrastruktur vs. Laufzeit, LLM als Gehirn

## Die vier Elemente

- [[Sensor-Intentionserkennung]] – Was braucht der Mensch gerade?
- [[Gedaechtnis-Context-Engineering]] – Woher weiss die KI, was sie weiss?
- [[Kompass-Verfassung]] – Was darf die KI — und was nie?
- [[Stimme-Kommunikation]] – Wie kommt die Antwort beim Menschen an?

## Kernprinzipien

- [[Content-ist-nicht-Context]] – Warum Website-Content nicht fuer LLMs taugt
- [[Verfassung-vs-Regelwerk]] – Warum Werte besser skalieren als Regeln
- [[Kontextdimensionen]] – Die 5 Dimensionen einer vollstaendigen Wissenseinheit
- [[Intentionen-3-Ebenen]] – Wie man Beduerfnisse operationalisiert

## Methodik

- [[Cluster-vs-Bausteine]] – Zwei Ansaetze der Content-Aufbereitung im Vergleich
- [[Feature-Profile-Methodik]] – Nicht jedes Feature braucht alles auf Maximum

## Anwendungsbeispiel

Das Framework wurde als "SAVA Engine" fuer die AOK Sachsen-Anhalt implementiert — ein agentisches System fuer Gesundheitsbegleitung mit geprueftem Wissen, erkannten Beduerfnissen und angemessener Kommunikation.

## Querverweise

- [[AI-Strategy/_MOC]] – Strategische Planung von KI-Initiativen
- [[AI-Transformation/_MOC]] – Organisationale Umsetzung


## Technische Implementierung

- [[Kompass-Implementierung]] – Wie die Verfassung technisch umgesetzt wird: Drei Schichten (System Prompt, Metadaten, Filter)


- [[Stimme-Implementierung]] – Wie die Stimme technisch umgesetzt wird: Zwei Eingaenge, strukturierte Ausgabe, Kanal-Rendering


- [[Sensor-Implementierung]] – Wie der Sensor technisch umgesetzt wird: Architektur-Optionen, Signal-Schema, Multi-Turn


- [[Gedaechtnis-Implementierung]] – Wie das Ged\u00e4chtnis technisch umgesetzt wird: Pipeline, Retrieval, Orchestrierung


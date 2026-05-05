---
title: Ultimate Leitfaden — Lies mich
type: moc
status: living
created: '2026-04-28'
updated: '2026-04-28'
tags:
  - agents
  - leitfaden
  - ultimate-leitfaden
  - moc
  - navigation
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
  - navigation
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Agentensysteme — modularer Leitfaden

*Stand: April 2026 — in Arbeit*

---

## Was das ist

Ein Lese- und Arbeitsmaterial zum Verständnis von Agentensystemen. Der Leitfaden ist modular angelegt: jede Datei behandelt einen Baustein oder ein Querschnittsthema und kann einzeln gelesen, in Schulungen verwendet oder zu anderen Formaten weiterverarbeitet werden.

Zielgruppe ist gemischt — von technisch interessierten Laien bis zu Projektmitgliedern in Konzeption und Strategie. Der Leitfaden bleibt deshalb auf der konzeptionellen Ebene. Modellarchitektur, Tool-Auswahl (LangChain, MCP, Frameworks) und Multi-Agent-Setups werden referenziert, aber nicht erklärt.

## Aufbau

```
00_lies-mich.md          — diese Datei
01_was-ist-ein-agent.md  — Stufen, Typen, Einsatzfrage
02_gesamtmodell.md       — die fünf Bausteine im Überblick

03_sensor.md             — Anliegen erkennen
04_motor.md              — der Maschinenraum
05_stimme.md             — Übergabe an den Menschen

06_kompass.md            — Werte, Constraints, Hierarchie
07_pruefstand.md         — Evals, Logs, Monitoring

08_drei-typen.md         — Assistent, autonom, HITL im Vergleich
09_wann-lohnt-sich-was.md — Entscheidungsfragen, Anti-Patterns

99_glossar.md            — Begriffe, kurz erklärt
```

Sensor, Motor und Stimme arbeiten in Reihe. Kompass und Prüfstand sind Querschnittsschichten — sie wirken in jeden der drei Reihen-Bausteine, nicht zwischen ihnen. Mehr dazu in [[02_gesamtmodell]].

## Lesepfade

**Kurz und konzeptionell:** 01 → 02 → 08. Wer in 30 Minuten verstehen will, was ein Agent ist und wie sich die drei Typen unterscheiden, liest diese drei Dateien.

**Vollständig:** 01 bis 09 in Reihenfolge. Der Leitfaden ist so geschrieben, dass das funktioniert. Querverweise zeigen Zusammenhänge, aber jede Datei steht für sich.

**Gezielt nachschlagen:** Über das Glossar ([[99_glossar]]) oder direkt eine Baustein-Datei. Begriffe, die in mehreren Dateien auftauchen, werden im Glossar definiert und in den Dateien nur kurz angerissen.

## Konventionen

**Beispiel-Domäne:** Pflegekasse / SGB-XI-Leistungen. Eine durchlaufende Frage — *„Meine Mutter braucht einen Pflegedienst. Was zahlt die Kasse?"* — wird in Teil 3 bis 7 als Beispiel verwendet. Das hat den Vorteil, dass man den Agenten an einem konkreten Fall durchspielen kann, ohne sich jedes Mal in einen neuen Sachverhalt einarbeiten zu müssen. Die domänenspezifischen Aussagen sind generisch (SGB XI), nicht kassenspezifisch.

**Auto-Metapher:** Wird als Storytelling-Hintergrund verwendet, nicht als Beweisinstrument. Wenn ein Vergleich hilft, kommt er. Wenn er hinkt, lassen wir ihn weg — auch wenn das die Metapher unvollständig macht. Insbesondere die Querschnittsschichten Kompass und Prüfstand passen nur teilweise ins Auto-Bild.

**Querverweise** als Wikilinks in der Form `[[04_motor]]`. Bei der Nutzung in anderen Formaten (Slides, Schulungsmaterial) wird daraus jeweils das passende Pendant.

**Status-Marker** an Abschnitten:

- ✅ inhaltlich stabil
- 🟡 Linie steht, Detail offen
- 🔴 noch zu klären

## Was der Leitfaden bewusst weglässt

- **Modelltechnische Tiefe** — welche Architektur, welche Größen, welche Trainingsdaten. Auf Modell-Ebene argumentieren wir nicht.
- **Tool- und Framework-Vergleich** — LangChain, LlamaIndex, MCP, AutoGen werden referenziert, nicht bewertet.
- **Multi-Agent-Systeme** — nur kurz angerissen. Mehrere Agenten zu orchestrieren ist eine eigene Disziplin und würde den Leitfaden sprengen.
- **Konkrete Implementierung** — keine Code-Beispiele, keine Prompt-Templates. Der Leitfaden bleibt auf der Verständnis-Ebene.

## Wem das hier nutzt

Wer einen Agenten konzipiert, beauftragt, bewertet oder Stakeholdern erklären muss — und dabei mehr braucht als Buzzwords, aber nicht den vollen Software-Engineering-Stack. Wer schon einen Agenten gebaut hat und ein gemeinsames Vokabular im Team etablieren will, findet hier eines.

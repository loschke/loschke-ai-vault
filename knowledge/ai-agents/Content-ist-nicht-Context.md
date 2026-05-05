---
title: Content ist nicht Context
type: concept
status: stable
created: '2026-03-09'
updated: '2026-03-09'
tags:
  - ai-agents
sources:
  - 'self-authored:loschke:enterprise-ai-agents'
area: ai-agents
audience:
  - fuehrungskraft
  - redaktion
  - konzepter
  - entwickler
level: beginner
intent:
  - verstehen
  - ueberzeugen
contains:
  - concept
  - argument
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Content ist nicht Context

> Kernprinzip der Wissensaufbereitung: Warum Website-Content nicht fuer LLMs taugt.

---

## Kernaussage

Website-Content ist fuer Google und Menschen optimiert: SEO-Keywords, Marketing-Sprache, fragmentierte Informationen ueber mehrere Seiten verteilt. LLMs brauchen etwas anderes: strukturierten, informationsdichten Context mit Metadaten fuer praezises Retrieval.

Die Differenz zwischen "plausibel" und "verlaesslich" — das ist der gesamte Aufwand der Wissensaufbereitung. Ein nacktes LLM kann plausibel klingende Antworten geben. Aber plausibel ist nicht korrekt. Korrekt ist nicht hilfreich. Und hilfreich ist nicht sicher.

---

## Das Problem mit Website-Content

| Problem | Auswirkung auf LLM |
|---|---|
| Niedrige Informationsdichte | LLM muss durch Marketing-Filler suchen |
| Fragmentiertes Wissen | Gleiche Info auf 5 Seiten, unterschiedlich formuliert |
| Fehlende Relationen | LLM erkennt nicht, dass zusammengehoerige Konzepte verbunden sind |
| Marketing-Rauschen | "Wir sind fuer Sie da!" ist kein verwertbarer Fakt |
| Accordion-Inhalte | Wichtige Details versteckt, beim Scraping oft verloren |

---

## Was LLMs stattdessen brauchen

| Eigenschaft | Beschreibung |
|---|---|
| Informationsdicht | Jeder Satz ist ein verwertbarer Fakt |
| Strukturiert | Logische Gliederung nach Themen, nicht nach Quellseiten |
| Dedupliziert | Gleiche Info nur einmal, in der vollstaendigsten Version |
| Mit Metadaten | Zielgruppe, Aktualitaet, Relationen, Rechtsgrundlage |
| Vollstaendig | Ein Baustein oder ein Abschnitt beantwortet eine Frage komplett |

---

## Zwei Wege der Transformation

Die Transformation von Content zu Context kann auf zwei Wegen erfolgen. Siehe [[Cluster-vs-Bausteine]] fuer die ausfuehrliche Gegenuberstellung.

**Weg 1: Cluster-Dokument** — Alle Quellseiten eines Themas werden zu einem gut strukturierten Markdown-Dokument zusammengefasst. Schnell, uebersichtlich, direkt nutzbar.

**Weg 2: Atomare Bausteine** — Quellseiten werden in kleine, eigenstaendige Wissenseinheiten mit Metadaten zerlegt. Aufwaendiger, aber praeziser, wartbarer und modellunabhaengig.

---

## Warum das wichtig ist

Ohne diese Transformation passiert eines von zwei Dingen:

1. **Man laesst das LLM auf rohem Website-Content arbeiten** — es funktioniert erstaunlich gut bei einfachen Fragen, halluziniert aber bei Spezifika (falsche Betraege, falsche Bedingungen, Infos von der falschen Organisation).

2. **Man verzichtet auf eigenen Content und verlaesst sich auf das Modellwissen** — das funktioniert bei allgemeinem Wissen, scheitert aber bei organisationsspezifischen Fakten (Satzungsleistungen, interne Prozesse, lokale Besonderheiten).

---

## Verknuepfungen

- [[Gedaechtnis-Context-Engineering]] – Das Element, das Context bereitstellt
- [[Cluster-vs-Bausteine]] – Zwei konkrete Ansaetze der Transformation
- [[Kontextdimensionen]] – Was eine gute Wissenseinheit ausmacht
- [[Assistenz-Architektur]] – Das Gesamtframework

---

*Quelle: Eigene Beratungspraxis, entwickelt 2025/2026*

---
title: 'Modell-Landschaft: Überblick und Auswahlkriterien'
type: reference
status: living
created: '2026-03-03'
updated: '2026-03-03'
tags:
  - ki-grundlagen
  - modelle
  - llm
  - open-source
  - modellauswahl
sources:
  - 'self-authored:loschke:pre-migration'
area: ai-essentials
audience:
  - einsteiger
  - praktiker
  - fuehrungskraft
  - technisch
level: basic-to-advanced
intent:
  - verstehen
  - einordnen
  - entscheiden
contains:
  - contrast
  - decision-aid
  - tip
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-04'
---
# Modell-Landschaft

> Open vs. Closed Source, Modellfamilien, Stärken-Profile und Auswahlkriterien. Living Document – Stand März 2026.

---

## Warum das wichtig ist

"Welches Modell soll ich nehmen?" ist die häufigste Frage nach "Wie prompte ich besser?". Die Antwort ist nie pauschal. Sie hängt von Aufgabe, Budget, Datenschutz und Integrationsanforderungen ab.

Dieses Dokument gibt Orientierung, nicht Empfehlungen. Modelle ändern sich schnell. Die Kriterien für die Auswahl bleiben stabil.

---

## Die großen Anbieter

### Closed Source (proprietär)

Zugang über APIs und Consumer-Tools. Kein Einblick in Trainingsdaten oder Modellgewichte.

| Anbieter | Modelle (Stand März 2026) | Stärke | Consumer-Tool |
|----------|--------------------------|--------|---------------|
| **OpenAI** | GPT-4o, GPT-4.5, o1, o3, o4-mini | Breiteste Fähigkeiten, Marktführer, starkes Ökosystem | ChatGPT |
| **Anthropic** | Claude Opus 4, Sonnet 4, Haiku 3.5 | Langer Kontext (200K), Coding, Instruktionstreue, Sicherheit | Claude.ai |
| **Google** | Gemini 2.5 Pro, Flash, Ultra | Riesiges Context Window (1-2M), Google-Integration, multimodal | Gemini App |

### Open Source / Open Weight

Modellgewichte sind öffentlich verfügbar. Können selbst gehostet werden. "Open Source" ist oft ungenau – häufig sind die Gewichte offen, aber nicht die Trainingsdaten.

| Anbieter | Modelle | Stärke | Lizenz |
|----------|---------|--------|--------|
| **Meta** | Llama 4 | Starke Allround-Performance, großes Ökosystem | Open (mit Einschränkungen) |
| **Mistral** | Mistral Large, Small, Codestral | Europäisch, effizient, gut bei Code | Apache 2.0 / proprietär (Large) |
| **DeepSeek** | DeepSeek V3, R1 | Starke Reasoning-Performance, kosteneffizient | MIT License |
| **Alibaba** | Qwen 2.5 | Mehrsprachig, starke Coding-Performance | Open (mit Einschränkungen) |

### Open vs. Closed: Entscheidungskriterien

| Kriterium | Closed Source | Open Source |
|-----------|---------------|-------------|
| **Performance (Top-Ende)** | Höher (aktuell) | Holt auf, aber Lücke bleibt |
| **Datenschutz** | Daten verlassen dein System | Volle Kontrolle bei Self-Hosting |
| **Kosten bei hohem Volumen** | Token-basiert, skaliert linear | Infrastruktur-Kosten, skaliert besser |
| **Anpassbarkeit** | Begrenzt (Fine-Tuning via API) | Volle Kontrolle |
| **Aufwand** | Sofort nutzbar | Hosting, Wartung, Updates |
| **Regulierung** | Anbieter-Verantwortung | Eigene Verantwortung |

**Für die meisten Nutzer und Unternehmen:** Closed-Source-APIs sind der pragmatische Einstieg. Open Source wird relevant, wenn Datenschutz, Kosten bei Volumen oder Anpassbarkeit kritisch werden.

---

## Modellklassen: Nicht jedes Modell für jede Aufgabe

### Frontier-Modelle (Top-Performance)

Die leistungsfähigsten Modelle: Claude Opus, GPT-4.5, Gemini Ultra.

| Gut für | Nicht nötig für |
|---------|-----------------|
| Komplexe Analyse | Einfache Textkorrekturen |
| Mehrstufiges Reasoning | Standardübersetzungen |
| Schwierige Code-Aufgaben | Kurze Zusammenfassungen |
| Nuancierte Texterstellung | Formatierung, Tabellen |

**Kosten:** Am teuersten. 10-30x teurer als kleine Modelle.

### Mid-Range-Modelle (Preis-Leistung)

Die Arbeitstiere: Claude Sonnet, GPT-4o, Gemini Pro.

| Gut für | Einschränkungen |
|---------|----------------|
| 80% der täglichen Aufgaben | Komplexes Reasoning schwächer |
| Code-Generierung | Lange, nuancierte Texte |
| Zusammenfassungen, Analysen | Sehr spezifische Domänen |
| Chat-Interaktionen | |

**Kosten:** Moderate Kosten. Bestes Preis-Leistungs-Verhältnis für die meisten Anwendungen.

### Kleine Modelle (Geschwindigkeit & Kosten)

Die schnellen, günstigen Modelle: Haiku, GPT-4o-mini, Gemini Flash.

| Gut für | Einschränkungen |
|---------|----------------|
| Einfache Klassifikation | Komplexe Aufgaben |
| Schnelle Antworten | Nuanciertes Verständnis |
| Hohe Volumina | Lange Kontexte |
| Embedded/Edge-Anwendungen | Kreatives Schreiben |

**Kosten:** Am günstigsten. 10-30x günstiger als Frontier-Modelle.

### Reasoning-Modelle (Denk-Spezialisten)

Modelle, die "nachdenken" bevor sie antworten: o1, o3, DeepSeek R1.

| Gut für | Einschränkungen |
|---------|----------------|
| Mathematik, Logik | Langsamer (denkt zuerst) |
| Komplexe Planung | Teurer pro Anfrage |
| Code-Debugging | Für einfache Aufgaben Overkill |
| Wissenschaftliche Analyse | |

---

## Auswahlkriterien: Das Entscheidungsframework

### Die fünf Dimensionen

| Dimension | Frage | Beispiel |
|-----------|-------|---------|
| **Aufgabe** | Was muss das Modell können? | Coding → Claude/GPT. Recherche → Gemini/Perplexity. |
| **Qualität** | Wie gut muss das Ergebnis sein? | Kundenkommunikation → Frontier. Interne Notiz → Mid-Range. |
| **Geschwindigkeit** | Wie schnell muss die Antwort kommen? | Echtzeit-Chat → Kleine Modelle. Batch-Analyse → egal. |
| **Kosten** | Wie viel Budget pro Anfrage/Monat? | Hobby → Free Tier. Produktion → API-Kalkulation nötig. |
| **Datenschutz** | Dürfen Daten an externe Server? | Ja → Cloud-APIs. Nein → Self-Hosted oder EU-Anbieter. |

### Entscheidungsbaum (vereinfacht)

```
Brauche ich maximale Performance?
├── Ja → Frontier-Modell (Opus, GPT-4.5, Gemini Ultra)
└── Nein
    ├── Brauche ich Geschwindigkeit/niedrige Kosten?
    │   ├── Ja → Kleines Modell (Haiku, Flash, Mini)
    │   └── Nein → Mid-Range (Sonnet, GPT-4o, Gemini Pro)
    └── Brauche ich tiefes Reasoning?
        └── Ja → Reasoning-Modell (o3, R1)

Dürfen Daten das Unternehmen verlassen?
├── Ja → Cloud-APIs (OpenAI, Anthropic, Google)
└── Nein → Self-Hosted (Llama, Mistral) oder Azure/AWS Private
```

---

## Stärken-Profile (Stand März 2026)

### Subjektive Einschätzung nach Einsatzbereich

| Aufgabe | Stärkstes Modell | Alternativen |
|---------|-----------------|-------------|
| **Coding** | Claude (Opus/Sonnet) | GPT-4o, DeepSeek V3 |
| **Kreatives Schreiben** | Claude Opus, GPT-4.5 | Gemini Pro |
| **Recherche** | Gemini Pro (großes Context Window) | Perplexity (spezialisiertes Tool) |
| **Datenanalyse** | GPT-4o (Code Interpreter) | Claude (bei bereitgestellten Daten) |
| **Multimodal (Bild-Verständnis)** | Gemini Pro, GPT-4o | Claude Sonnet |
| **Instruktionstreue** | Claude Sonnet/Opus | GPT-4o |
| **Lange Dokumente** | Gemini Pro (1M+), Claude (200K) | |
| **Mathematik/Logik** | o3, DeepSeek R1 | Claude Opus |
| **Schnelle Alltagsaufgaben** | GPT-4o-mini, Gemini Flash | Haiku |

**Achtung:** Diese Einschätzungen veralten schnell. Jedes Quartal verschieben sich die Stärken. Die Kategorien und Auswahlkriterien bleiben relevant.

---

## Häufige Fehler bei der Modellwahl

| Fehler | Besser |
|--------|--------|
| **"Ich nehme immer das beste Modell"** | Das richtige Modell für die Aufgabe wählen. Haiku für Klassifikation, Opus für komplexe Analyse. |
| **"Wir standardisieren auf einen Anbieter"** | Verschiedene Modelle für verschiedene Aufgaben. Lock-in vermeiden. |
| **"Open Source ist immer besser wegen Datenschutz"** | Self-Hosting hat eigene Risiken und Kosten. Azure/AWS bieten auch Datenschutz. |
| **"Das Modell kann das nicht"** | Oft liegt es am Prompt oder Kontext, nicht am Modell. Erst optimieren, dann wechseln. |
| **"Benchmarks zeigen, dass X besser ist"** | Benchmarks ≠ dein Anwendungsfall. Eigene Tests machen. |

---

## Für Führungskräfte: Die Kurzversion

1. **Kein Vendor Lock-in:** Modelle wechseln schnell. Architektur so bauen, dass das Modell austauschbar ist.
2. **Nicht das teuerste, das passende:** 80% der Aufgaben brauchen kein Frontier-Modell.
3. **Datenschutz ist lösbar:** API-Verträge mit DPA, EU-Regionen, oder Self-Hosted. Kein Grund, nicht zu starten.
4. **Die Landschaft ändert sich quartalsweise:** Keine 3-Jahres-Strategie um ein spezifisches Modell bauen.

---

## Verknüpfungen

- [[Wie-LLMs-funktionieren]] – Technische Grundlagen: Warum Modelle sich unterscheiden
- [[Kosten-und-Preismodelle]] – Was die verschiedenen Modelle kosten
- [[GenAI-Stack-Erklaermodell]] – Ebene 1: Das Modell als Grundlage des Stacks
- [[KI-Faehigkeiten-Scope]] – Was KI grundsätzlich kann (modellübergreifend)

---

*Living Document – Letzte Aktualisierung: März 2026*

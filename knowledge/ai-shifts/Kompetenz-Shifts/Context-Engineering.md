---
title: Context Engineering
type: concept
status: stable
created: '2026-04-23'
updated: '2026-04-23'
tags:
  - ai-shifts
  - kompetenzen
  - prompting
  - context-engineering
  - workflow
  - skill
sources:
  - 'self-authored:loschke:trend-research'
area: ai-shifts
audience:
  - praktiker
  - entwickler
  - berater
level: intermediate
intent:
  - anwenden
  - verstehen
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Context Engineering

> Prompt Engineering ist der Trick. Context Engineering ist das System. Der Trick hat eine Halbwertszeit von 12–24 Monaten. Das System bleibt.

---

## Worum geht's?

**Context Engineering** bezeichnet die Kompetenz, KI-Systeme so zu **rahmen, versorgen und validieren**, dass sie in realen Arbeitszusammenhängen verlässlich nützliche Ergebnisse produzieren. Der Fokus verschiebt sich von der einzelnen Prompt-Formulierung (*"magisches Satz-Muster"*) zu einem komplett durchdachten Arbeitssystem.

Der Begriff wurde unter anderem von **Simon Willison** und **Andrej Karpathy** geprägt. Karpathy beim AI Startup School Keynote (Juni 2025): *"Programming is becoming unrecognizable… You're spinning up AI agents, giving them tasks in English and managing and reviewing their work in parallel."*

---

## Der Shift: Prompt → Context

| Prompt Engineering | Context Engineering |
|---|---|
| Einzelner Satz / Template | Ganzes Arbeitssystem |
| Tricks und Formulierungen | Problem-Decomposition |
| Testen durch Ausprobieren | Validierungs-Design |
| Halbwertszeit: 12–24 Monate | Halbwertszeit: Jahre |
| Transferiert schlecht zwischen Modellen | Transferiert gut |

Prompt-Tricks (*"Step-by-step thinking"*, *"You are an expert"*) werden von jedem neuen Modell teilweise obsolet, weil Vendors die Modelle darauf optimieren. Was bleibt, ist **kritisches Denken + Domänenwissen + metakognitive Validierungs-Routinen** — genau die Kompetenzen, die [[../Kognitive-Effekte/Cognitive-Debt|kognitiv bedroht]] sind.

---

## Die fünf Bausteine

### 1. Problem-Decomposition

Ein komplexes Problem in KI-gerechte Teilaufgaben zerlegen. Nicht *"Baue mir eine App"*, sondern ein Baumdiagramm aus Teilentscheidungen: Datenmodell, Interaktions-Flow, Auth-Modell, Fehlerfälle. Jeder Teilast als eigener Kontext.

### 2. Kontext-Bereitstellung

Die KI bekommt nicht nur die Aufgabe, sondern die **Umgebung**: relevante Dokumente, Beispiele, Constraints, explizite Anti-Beispiele, vorhandene Patterns, Styleguides. Retrieval-Augmented Generation und MCP-Tools gehören in diese Ebene.

### 3. Validierungs-Design

Vorher festlegen, **woran man erkennt**, dass der Output richtig ist. Testfälle, Checklisten, adversariale Prüfungen. Wer erst im Output entscheidet, was gut ist, verliert an die Überzeugungskraft des Modells (→ "GenAI as Power Persuader", Randazzo et al. 2026).

### 4. Meta-Prompting

Die KI nicht nur nach der Lösung fragen, sondern nach dem **besseren Prompt**, nach Annahmen, nach Unsicherheitsquellen. Die KI als Sparringspartner im Framing des Problems, nicht nur als Ausführungsinstanz.

### 5. Domänen-Expertise

Keiner der vier vorigen Bausteine funktioniert ohne echtes Fachverständnis. Context Engineering ist das **Veredlungshandwerk** von Fachwissen — nicht sein Ersatz.

---

## Warum Prompt-Tricks eine so kurze Halbwertszeit haben

Jedes Major-Modell-Release bügelt die bekannten Prompt-Schwächen aus. Beispiele:

- *"Think step by step"* funktionierte bei GPT-3.5 dramatisch, bei GPT-4 marginal, bei Reasoning-Modellen wie o1/o3 ist es default integriert.
- *Chain-of-Thought-Prompting* wurde zur eingebauten Modell-Fähigkeit.
- *Few-Shot-Beispiele* werden bei längeren Kontextfenstern (1M+ Tokens) strukturell verschoben.

Was sich **nicht** entwertet: die Fähigkeit, ein Problem präzise zu dekomponieren, einen geeigneten Kontext bereitzustellen und den Output systematisch zu validieren. Das ist klassische Ingenieursarbeit — mit KI statt ohne.

---

## Die Centaur/Cyborg-Verbindung

Dell'Acqua et al. (2023/2026, BCG-Consultants-Experiment): Zwei Nutzungsmodi führten zu Erfolg.

- **Centaurs** (klare Arbeitsteilung: Mensch macht X, KI macht Y)
- **Cyborgs** (integrierte Verflechtung: beide gemeinsam durch jeden Schritt)

**Passive Delegation** korreliert mit schlechten Ergebnissen. Context Engineering ist die operative Grundlage beider erfolgreicher Modi: Arbeitsteilung oder Verflechtung setzen voraus, dass jemand den Kontext strukturiert.

---

## Was Context Engineering *nicht* ist

- **Kein Ersatz für Programmieren oder Schreiben.** Karpathys *"Programming is becoming unrecognizable"* bedeutet nicht *"Programming ist weg"*, sondern *"Programming verschiebt seine Ebenen"*. Wer die tieferen Ebenen nicht versteht, kann die höheren nicht orchestrieren.
- **Kein rein technisches Thema.** Gilt genauso für Texte, Analysen, Design, Recherche, Strategie.
- **Keine Einmal-Optimierung.** Kontexte müssen gewartet werden (Updates von Dokumenten, Patterns, Beispielen).

---

## Praktische Konsequenzen

### Für Individuen

**Weg vom Prompt-Hacking, hin zu System-Bauen.** Konkret:

- Eigene Kontext-Bibliotheken anlegen (Dokumente, Beispiele, Styleguides, Antipatterns pro Domäne)
- Test- und Checklisten für die eigenen wiederkehrenden Aufgaben entwickeln
- KI im Meta-Modus nutzen (*"Welche Annahmen triffst du hier?"*)

### Für Teams

- **Gemeinsame Context-Stores**, nicht individuelle Prompt-Sammlungen
- Review-Prozesse, die explizit auf Kontext-Qualität prüfen, nicht nur auf Output
- Rollen-Trennung: Wer baut Kontext? Wer validiert Output? Wer nutzt?

### Für Führung

- Weiterbildung nicht als Prompt-Kurs, sondern als Ingenieurs-Denken mit KI
- Performance-Indikatoren anpassen: Output-Qualität, Fehlerfalldichte, Reife der Kontexte — nicht Prompt-Count

---

## Verwandte Konzepte

- [[Strategische-Subtraktion]] – Der Zwilling auf der Output-Seite (*weniger produzieren* korrespondiert mit *besser rahmen*)
- [[Solution-First]] – Der prototypische Arbeits-Modus, der Context Engineering ermöglicht
- [[../Kognitive-Effekte/Cognitive-Debt]] – Warum ohne Context Engineering der Modus-Shift zum Antwort-Abgreifer droht
- [[Comb-Shaped-Professional]] – Context Engineering als Verbindungsglied zwischen Tiefe und Breite
- [[../Was kommt nach der Intelligenz - Kontext v2|Kontext v2]] – Einordnung Ebene 3.3

---

## Quellen

**Primäre Begriffsprägung:** Willison, S. (Juni 2025). *Context Engineering.* simonwillison.net. • Karpathy, A. (Juni 2025). *AI Startup School Keynote.* YouTube.

**Empirische Basis:** Dell'Acqua et al. (2023/2026). HBS WP 24-013 (Centaurs vs. Cyborgs). • Anthropic Economic Index (2025/2026): High-Tenure-Nutzer:innen erzielen signifikant höhere Success Rates (Lerneffekte beim KI-Nutzen dokumentiert; Korrelation Prompt-Sophistication und Output-Qualität: 0,92).

**Kontext:** Randazzo et al. (2026). HBS WP 26-021. *GenAI as Power Persuader.*

---

*Merksatz: "Prompts sind Tricks. Kontexte sind Werkzeuge. Tricks werden obsolet, Werkzeuge schleift man."*

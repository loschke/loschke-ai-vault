---
title: Context Engineering Grundlagen
type: concept
status: stable
created: '2026-03-03'
updated: '2026-03-04'
tags:
  - ki-grundlagen
  - context-engineering
  - kontext
  - seminar-material
sources:
  - 'self-authored:loschke:pre-migration'
area: ai-essentials
audience:
  - einsteiger
  - praktiker
  - fuehrungskraft
level: basic-to-advanced
intent:
  - verstehen
  - anwenden
  - vermitteln
contains:
  - method
  - analogy
  - tip
  - contrast
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-04'
---
# Context Engineering Grundlagen

> Der Shift von "Was sage ich der KI?" zu "Was weiß die KI, wenn sie antwortet?" – die nicht-technische Version für alle Zielgruppen.

---

## Das Problem

Die meisten Menschen optimieren ihre Prompts. Sie feilen an Formulierungen, testen verschiedene Anweisungen, suchen nach dem "perfekten Prompt". Das bringt etwas. Aber es adressiert nicht die eigentliche Ursache mittelmäßiger KI-Ergebnisse.

Die Ursache: Das Modell weiß nicht genug über deine Situation.

→ Im [[Prompt-Engineering-Grundlagen|EAKAF-Framework]] ist "Kontext" das dritte Element. Context Engineering nimmt diesen Gedanken und macht ihn zum Architekturprinzip: Nicht nur ein Prompt-Baustein, sondern ein systematischer Ansatz.

Ein brillant formulierter Prompt ohne Kontext ist wie ein präziser Arbeitsauftrag an jemanden, der dein Unternehmen, deine Kunden und deine Ziele nicht kennt. Er wird etwas liefern. Aber es wird generisch sein.

---

## Kernkonzept: Die 75/25-Regel

Die Qualität eines KI-Outputs hängt zu etwa 75% vom bereitgestellten Kontext ab und nur zu 25% von der Formulierung des Prompts.

```
Output-Qualität = Kontext (75%) + Prompt-Formulierung (25%)
```

**Kontext** ist alles, was das Modell über deine Situation weiß:
- Wer du bist und was du tust
- Für wen das Ergebnis ist
- Welche Rahmenbedingungen gelten
- Welches Vorwissen vorausgesetzt werden kann
- Welchen Stil, Ton und welches Format du erwartest
- Beispiele für gute Ergebnisse

**Prompt** ist die konkrete Aufgabenstellung:
- Was soll das Modell tun?
- In welchem Format?

---

## Die Analogie: Freelancer-Briefing

Stell dir vor, du beauftragst einen Freelance-Texter:

### Ohne Context Engineering

> "Schreib mir einen Blogpost über KI im Mittelstand."

Ergebnis: Ein generischer Text, den jedes Unternehmen hätte schreiben können.

### Mit Context Engineering

> Hier ist unser Styleguide. Hier sind drei Artikel, die unseren Ton treffen. Unsere Zielgruppe sind IT-Leiter in Fertigungsunternehmen mit 200-500 Mitarbeitern. Sie sind technisch versiert, aber skeptisch gegenüber KI-Hype. Wir duzen. Wir vermeiden Buzzwords. Wir argumentieren immer mit konkreten Beispielen aus der Fertigung.
>
> Schreib einen Blogpost über KI im Mittelstand.

Ergebnis: Ein Text, der nach dir klingt und deine Zielgruppe anspricht.

Der Prompt ist in beiden Fällen identisch. Der Unterschied ist der Kontext.

---

## Die vier Kontext-Ebenen

### Ebene 1: Aufgaben-Kontext (pro Prompt)

Was das Modell für diese spezifische Aufgabe braucht.

| Element | Beispiel |
|---------|---------|
| **Ziel** | "Erstelle eine Entscheidungsvorlage für den Vorstand" |
| **Zielgruppe** | "Der Vorstand hat wenig KI-Vorwissen, denkt in ROI" |
| **Rahmenbedingungen** | "Maximal 2 Seiten, mit Empfehlung" |
| **Input-Material** | Das Dokument, die Daten, die E-Mail |

### Ebene 2: Persönlicher Kontext (dauerhaft)

Was das Modell über dich und deine Arbeit wissen sollte.

| Element | Beispiel |
|---------|---------|
| **Rolle** | "Ich bin Head of Digital bei einem Maschinenbauer" |
| **Branche** | "B2B, Fertigung, 800 Mitarbeiter" |
| **Kommunikationsstil** | "Direkt, keine Floskeln, Duzen" |
| **Wiederkehrende Aufgaben** | "Wöchentliche Status-Reports, Vorstandspräsentationen" |

**Wo einstellen:** Custom Instructions (ChatGPT), Project Instructions (Claude), System Prompts.

### Ebene 3: Wissens-Kontext (bereitgestellt)

Spezifisches Wissen, das du dem Modell verfügbar machst.

| Element | Beispiel |
|---------|---------|
| **Dokumente** | Styleguide, Produktkatalog, Organigramm |
| **Beispiele** | Frühere Texte, die gut funktioniert haben |
| **Daten** | Umsatzzahlen, Kundenfeedback, Prozessdokumentation |
| **Regelwerke** | Brand Guidelines, Compliance-Vorgaben |

**Wie bereitstellen:** File-Upload, Claude Projects, Custom GPTs, RAG-Systeme.

### Ebene 4: System-Kontext (technisch)

Die Fähigkeiten und Grenzen des Systems selbst.

| Element | Bedeutung |
|---------|-----------|
| **Modell-Wissen** | Trainingsdaten haben einen Stichtag |
| **Context Window** | Wie viel Text kann das Modell gleichzeitig "sehen"? |
| **Tools** | Kann das Modell im Internet suchen? Dateien lesen? Code ausführen? |
| **Erweiterungen** | MCP-Server, Plugins, Skills |

→ Siehe [[GenAI-Stack-Erklaermodell]] für die Einordnung dieser Ebenen.

---

## Praktische Umsetzung

### Stufe 1: Bessere Prompts (sofort umsetzbar)

Statt nur die Aufgabe zu nennen, den Kontext mitliefern:

| Vorher | Nachher |
|--------|---------|
| "Fasse das zusammen" | "Fasse das zusammen für meinen Chef, der 2 Minuten Zeit hat und sich für die Budgetauswirkungen interessiert" |
| "Schreib eine E-Mail" | "Schreib eine E-Mail an einen skeptischen IT-Leiter. Ton: sachlich, keine Versprechen. Ziel: Termin für ein 30-min Gespräch" |
| "Gib mir Feedback" | "Gib mir Feedback aus Sicht einer HR-Leiterin, die den Text an 200 Mitarbeiter senden will" |

### Stufe 2: Custom Instructions einrichten (einmalig)

Hinterlege deinen persönlichen Kontext einmal. Jede Konversation profitiert davon.

**Minimal-Setup (5 Minuten):**
- Wer bist du? (Rolle, Branche, Unternehmensgröße)
- Wie soll die KI antworten? (Sprache, Ton, Länge)
- Was soll sie vermeiden? (Buzzwords, Floskeln, zu lange Texte)

### Stufe 3: Projekte und Assistenten (wiederkehrend)

Für wiederkehrende Aufgaben eigene Assistenten mit spezifischem Kontext bauen.

**Beispiele:**
- **Textassistent:** Styleguide + Beispiel-Texte + Brand Voice
- **Analyse-Assistent:** Unternehmensdaten + Branchenkontext + Report-Format
- **Meeting-Assistent:** Protokoll-Template + Team-Kontext + Follow-up-Format

### Stufe 4: Systeme mit eigenem Wissen (fortgeschritten)

KI mit deinen Dokumenten verbinden. Das Modell kann in deinem Wissen suchen, bevor es antwortet.

→ Siehe [[RAG]] für die technischen Details.

---

## Kontext-Qualität prüfen

Nicht jeder Kontext ist guter Kontext. Drei Prüffragen:

| Frage | Wenn NEIN |
|-------|-----------|
| **Ist das relevant?** Braucht das Modell diese Info für die Aufgabe? | Weglassen. Zu viel Kontext verwässert die Antwort. |
| **Ist das aktuell?** Stimmt die Info noch? | Aktualisieren. Veralteter Kontext erzeugt falsche Ergebnisse. |
| **Ist das eindeutig?** Kann das Modell die Info richtig interpretieren? | Umformulieren. Mehrdeutigkeit erzeugt Raten. |

**Die häufigste Falle:** Zu viel Kontext. Fünf relevante Seiten sind besser als fünfzig ungefilterte Seiten. Das Modell kann nicht priorisieren, was du nicht priorisiert hast.

---

## Context Engineering vs. Prompt Engineering

| | Prompt Engineering | Context Engineering |
|---|---|---|
| **Frage** | Wie formuliere ich die Aufgabe? | Was muss das Modell wissen? |
| **Analogie** | Den Arbeitsauftrag perfekt formulieren | Den Freelancer richtig briefen |
| **Hebel** | ~25% der Output-Qualität | ~75% der Output-Qualität |
| **Aufwand** | Pro Prompt | Einmalig einrichten, dauerhaft nutzen |
| **Skill** | Klare Kommunikation | Wissensstrukturierung |

Prompt Engineering ist eine Teilmenge von Context Engineering. Beides gehört zusammen.

→ Siehe [[Prompt-Engineering-Grundlagen]] für die Prompt-Seite.

---

## Für Fortgeschrittene: Context Engineering in Agents

In agentic AI-Systemen wird Context Engineering zur Architektur-Disziplin. Agents nutzen viele Tool-Aufrufe, was zu explosivem Kontextwachstum führt. Fünf Strategien lösen das Problem:

1. **Auslagern** – Nicht alles muss im Kontextfenster leben
2. **Komprimieren** – Ältere Informationen zusammenfassen
3. **Abrufen** – Relevantes Wissen bei Bedarf nachladen
4. **Isolieren** – Sub-Agents mit eigenem Kontextfenster
5. **Cachen** – Wiederholte Informationen nur einmal verarbeiten

Das ist die technische Seite von Context Engineering. Für die meisten Anwender reichen die vier Stufen oben.

---

## Verwendungshinweise

| Zielgruppe | Kernbotschaft | Workshop-Dauer |
|------------|---------------|----------------|
| Einsteiger | "Gib der KI mehr Kontext, nicht bessere Prompts" | 30 min |
| Fortgeschrittene | Custom Instructions + Projekt-Assistenten einrichten | 90 min |
| Power-User | RAG, MCP, eigene Wissenssysteme | Halbtag |
| Führungskräfte | "75% der KI-Qualität kommt vom Kontext, den eure Leute bereitstellen" | 15 min |

**Workshop-Übung:** Dieselbe Aufgabe zweimal: einmal ohne Kontext, einmal mit strukturiertem Briefing. Der Qualitätsunterschied demonstriert das Prinzip besser als jede Erklärung.

---

## Verknüpfungen

- [[Prompt-Engineering-Grundlagen]] – Die Prompt-Seite von Context Engineering
- [[GenAI-Stack-Erklaermodell]] – Ebene 3 (Erweiterungen) = Context Engineering in der Praxis
- [[RAG]] – Technische Umsetzung von "KI mit eigenem Wissen"
- [[KI-Agents-Grundlagen]] – Context Engineering für autonome Systeme
- [[Halluzinationen-und-Zuverlaessigkeit]] – Guter Kontext reduziert Halluzinationen

---

*Grundlagen-Referenz: Der Shift von Prompt-Optimierung zu Kontext-Architektur*

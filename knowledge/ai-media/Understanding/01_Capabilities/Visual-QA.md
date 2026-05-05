---
title: Understanding/01_Capabilities/Visual QA
type: reference
status: stable
created: '2026-01-27'
updated: '2026-01-27'
tags:
  - capability
  - understanding
  - ai-media
  - vision
  - vqa
  - reasoning
sources:
  - 'self-authored:loschke:media-experimentation'
area: ai-media
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Visual QA (Visual Question Answering)

> Konkrete Fragen zu Bildern beantworten – die dialogische Schnittstelle zu visuellem Content.

---

## Was ist Visual QA?

Visual QA beantwortet spezifische Fragen zu Bildinhalten. Anders als Scene Description (offene Beschreibung) ist Visual QA zielgerichtet: Eine Frage rein, eine Antwort raus.

**Typische Outputs:** Direkte Antworten, Erklärungen, Reasoning über visuelle Inhalte

### Abgrenzung zu anderen Capabilities

| | Scene Description | Visual QA |
|---|---|---|
| **Trigger** | "Beschreibe das Bild" | "Wie viele Personen tragen Rot?" |
| **Output** | Offene Beschreibung | Gezielte Antwort |
| **Fokus** | Überblick | Spezifische Information |

---

## Wie funktioniert es?

1. **Multimodale Fusion:** Bild + Frage werden gemeinsam verarbeitet
2. **Attention:** Modell fokussiert auf relevante Bildregionen
3. **Reasoning:** Verknüpfung visueller Features mit Sprachverständnis
4. **Antwortgenerierung:** Von Ein-Wort bis ausführliche Erklärung

---

## Stärken

- **Zielgerichtet** – genau die Information, die gefragt wird
- **Reasoning-fähig** – kann schlussfolgern, nicht nur erkennen
- **Flexibel** – von Fakten bis Interpretation
- **Dialogfähig** – Follow-up-Fragen möglich

---

## Limitierungen

| Limitation | Workaround |
|------------|------------|
| **Halluzinationen** | Nachfragen "Bist du sicher?", Verifikation |
| **Zählen ungenau** | Bei exakten Zahlen: Object Detection |
| **Feine Details** | Bildausschnitt separat analysieren |
| **Subjektive Fragen** | Erwartungen klar formulieren |
| **Wissen außerhalb des Bildes** | Kontext im Prompt mitgeben |

---

## Wann Visual QA vs. andere Capabilities?

| Situation | Empfehlung |
|-----------|------------|
| Konkrete Frage zum Bild | **Visual QA** |
| Allgemeine Beschreibung | [[Scene-Description]] |
| Text im Bild extrahieren | [[OCR]] |
| Objekte zählen/lokalisieren | [[Object-Detection]] |
| Räumliche Beziehungen verstehen | [[Spatial-Reasoning]] |

---

## Tools im Überblick

Visual QA ist eine Kernfähigkeit aller multimodalen Foundation Models:

| Tool | Stärke | Besonderheit |
|------|--------|--------------|
| **GPT-4o** | Breites Reasoning, detaillierte Antworten | Gut bei komplexen Fragen |
| **Claude 3.5/4** | Präzise, wenig Halluzination | Stark bei technischen Bildern |
| **Gemini 2.5** | Schnell, gut bei Alltagsszenen | Video-QA möglich |

Spezialisierte VQA-Modelle (BLIP-2, LLaVA) existieren, aber Foundation Models sind für die meisten Anwendungen überlegen.

---

## Fragetypen und Beispiele

### Faktische Fragen
> "Welche Farbe hat das Auto?"
> "Wie viele Fenster hat das Gebäude?"
> "Was steht auf dem Schild?"

### Reasoning-Fragen
> "Warum könnte diese Person lächeln?"
> "Was ist hier gerade passiert?"
> "Welche Jahreszeit zeigt dieses Bild?"

### Vergleichsfragen
> "Welches der beiden Produkte sieht hochwertiger aus?"
> "Was unterscheidet die linke von der rechten Seite?"

### Bewertungsfragen
> "Ist dieses UI-Design benutzerfreundlich? Warum?"
> "Welche Probleme siehst du in diesem Foto?"

### Handlungsanweisungen
> "Was sollte ich als nächstes tun, basierend auf diesem Screenshot?"
> "Wie komme ich von hier zum markierten Ziel?"

---

## Typische Workflows

### 1. Research & Analyse
Bild laden → Gezielte Fragen stellen → Erkenntnisse sammeln → Follow-ups

### 2. Quality Control
Produktbild → "Siehst du Defekte oder Qualitätsprobleme?" → Dokumentation

### 3. Accessibility Check
UI-Screenshot → "Kann ein farbenblinder Nutzer alle wichtigen Elemente unterscheiden?" → Empfehlungen

### 4. Educational
Diagramm/Infografik → Verständnisfragen stellen → Erklärungen generieren

---

## Prompting-Tipps

**Für präzise Antworten:**
> Beantworte nur basierend auf dem, was du im Bild siehst. Wenn du dir unsicher bist, sage es.

**Für Reasoning:**
> Erkläre Schritt für Schritt, wie du zu deiner Antwort kommst.

**Für Vergleiche:**
> Vergleiche [A] und [B] im Bild hinsichtlich [Kriterium]. Nenne konkrete Unterschiede.

**Gegen Halluzinationen:**
> Wenn die Information nicht im Bild sichtbar ist, antworte mit "Das kann ich im Bild nicht erkennen."

**Multi-Turn Dialog:**
> [Nach erster Antwort] "Kannst du das genauer erklären?" oder "Was noch?"

---

## Qualitätsfaktoren

- **Fragenklarheit:** Präzise Fragen → präzise Antworten
- **Bildqualität:** Relevante Details müssen erkennbar sein
- **Kontext:** Bei mehrdeutigen Bildern hilft Hintergrundinfo
- **Erwartungsmanagement:** Subjektive Fragen haben subjektive Antworten

---

## Siehe auch

- [[Scene-Description]] – Für offene Beschreibungen
- [[Spatial-Reasoning]] – Für räumliche Beziehungen
- [[Object-Detection]] – Wenn exakte Positionen/Zahlen wichtig sind
- [[Document-Analysis]] – Für strukturierte Dokument-Fragen

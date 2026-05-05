---
title: Understanding/03_Use Cases/Wissensarbeit
type: reference
status: stable
created: '2026-01-27'
updated: '2026-01-27'
tags:
  - use-case
  - ai-media
  - understanding
  - wissensarbeit
  - ocr
  - documents
sources:
  - 'self-authored:loschke:media-experimentation'
area: ai-media
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Use Case: Wissensarbeit

> Visuelle Informationen in strukturiertes Wissen verwandeln.

---

## Kernidee

Bilder, Screenshots, Dokumente, Videos als Input → extrahiertes, durchsuchbares, weiterverarbeitbares Wissen als Output.

---

## Use Cases

### Whiteboard → Notes
Workshop-Fotos, Brainstorming-Sessions, Skizzen strukturiert erfassen.

**Tools:** GPT-4o, Claude Sonnet  
**Workflow:**
1. Foto vom Whiteboard
2. Upload + Prompt: "Extrahiere alle Inhalte strukturiert als Markdown"
3. Optional: Clustern, Priorisieren, Action Items ableiten

**Tipp:** Mehrere Fotos aus verschiedenen Winkeln bei Reflexionen.

### Präsentations-Analyse
Kunden-Decks, Wettbewerber-Slides, Konferenz-Präsentationen verstehen.

**Tools:** GPT-4o, Mistral OCR (bei vielen Slides)  
**Workflow:**
1. PDF/Slides hochladen
2. Key Points extrahieren
3. Optional: Vergleich mit eigener Positionierung

**Beispiel-Prompt:**
```
Analysiere diese Präsentation:
- Kernbotschaft in 2-3 Sätzen
- Wichtigste Argumente/Claims
- Verwendete Daten/Quellen
- Implizite Annahmen
```

### Research mit Grafiken
Paper, Reports, Studien mit Charts und Diagrammen verstehen.

**Tools:** Gemini 2.5 Pro (Long Context), Claude Sonnet  
**Stärke:** Auch komplexe Visualisierungen interpretieren, nicht nur Text extrahieren.

**Beispiel-Prompt:**
```
Erkläre mir Figure 3 aus diesem Paper. Was zeigt die Grafik? 
Was sind die wichtigsten Erkenntnisse? Welche Limitierungen?
```

### Handschrift digitalisieren
Meeting-Notizen, handschriftliche Skizzen, Post-its.

**Tools:** Mistral OCR (beste Handschrift-Erkennung)  
**Output:** Markdown, durchsuchbar, weiterverarbeitbar

**Benchmark:** Mistral OCR erreicht 88.9% Accuracy bei Handschrift (vs. Azure 78.2%).

### Screenshot → Dokumentation
UI-Flows, Software-Anleitungen, Prozess-Dokumentation aus Screenshots.

**Tools:** Claude Sonnet (UI-Verständnis), GPT-4o  
**Workflow:**
1. Screenshots der Schritte
2. "Erstelle eine Schritt-für-Schritt-Anleitung aus diesen Screenshots"
3. Output: Nummerierte Anleitung mit Beschreibungen

### Video-Summarization
Konferenz-Talks, Tutorials, Webinare zusammenfassen.

**Tools:** Gemini 2.5 Pro  
**Stärke:** Bis zu 4h Video, versteht auch visuelle Inhalte (Slides, Demos).

**Beispiel-Prompt:**
```
Fasse diesen Vortrag zusammen:
- Hauptthese
- 5 wichtigste Punkte
- Interessante Zitate mit Timestamps
- Offene Fragen / Kritikpunkte
```

---

## Tool-Empfehlung nach Aufgabe

| Aufgabe | Erstwahl | Alternative |
|---------|----------|-------------|
| Whiteboard | GPT-4o | Claude |
| Präsentationen | GPT-4o | Mistral OCR |
| Papers mit Grafiken | Gemini | Claude |
| Handschrift | Mistral OCR | – |
| Screenshots/UI | Claude | GPT-4o |
| Lange Videos | Gemini | – |

---

*Stand: Januar 2026*

---
title: Understanding/03_Use Cases/Content Design
type: reference
status: stable
created: '2026-01-27'
updated: '2026-01-27'
tags:
  - use-case
  - ai-media
  - understanding
  - content
  - design
  - creative
sources:
  - 'self-authored:loschke:media-experimentation'
area: ai-media
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Use Case: Content & Design

> Von visueller Inspiration zu eigenem Output – Vision als Teil des kreativen Workflows.

---

## Kernidee

Bilder analysieren, um bessere Bilder/Content zu erstellen. Vision-Modelle als Brücke zwischen Referenz und Produktion.

---

## Use Cases

### Bild → Prompt (Reverse Engineering)
Referenzbild analysieren → Prompt für eigene Image-Generierung ableiten.

**Tools:** GPT-4o, Claude Sonnet  
**Workflow:**
1. Inspirationsbild hochladen
2. "Beschreibe dieses Bild so detailliert, dass ich es mit Midjourney/DALL-E nachbauen kann"
3. Stil, Komposition, Lighting, Mood extrahieren
4. Als Basis für eigenen Prompt nutzen

**Beispiel-Prompt:**
```
Analysiere dieses Bild für Image Generation:
- Komposition und Bildaufbau
- Farbpalette und Mood
- Lighting und Schatten
- Stil (fotorealistisch, illustriert, etc.)
- Besondere Details
Formuliere einen Midjourney-Prompt, der diesen Stil einfängt.
```

### Screenshot → Code
Mockup, Figma-Export, Website-Screenshot → funktionierender Code.

**Tools:** Claude Sonnet (beste UI-zu-Code Performance)  
**Output:** React, HTML/CSS, Tailwind  
**Stichwort:** "Vibe Coding"

**Workflow:**
1. Screenshot des Designs
2. "Baue das als React-Komponente mit Tailwind"
3. Iterieren mit Feedback

### Alt-Text Generierung
Accessibility für Web, Social Media, Dokumentation.

**Tools:** GPT-4o, Claude Sonnet  
**Anforderung:** Beschreibend, nicht interpretierend. Kontext berücksichtigen.

**Beispiel-Prompt:**
```
Schreibe einen Alt-Text für dieses Bild.
Kontext: LinkedIn-Post über [Thema].
Max 125 Zeichen. Beschreibe was zu sehen ist, nicht was es bedeutet.
```

### Mood-Board / Konkurrenz-Analyse
Visuelle Trends aus Wettbewerber-Content oder Inspiration extrahieren.

**Tools:** GPT-4o  
**Workflow:**
1. Mehrere Screenshots/Bilder sammeln
2. "Analysiere die visuellen Gemeinsamkeiten"
3. Farbpaletten, Typografie-Trends, Layout-Patterns identifizieren

**Output:** Design-Brief für eigene Arbeiten

### Video → Content-Ideen
YouTube-Videos, Talks, Tutorials als Inspiration für eigenen Content.

**Tools:** Gemini 2.5 Pro  
**Workflow:**
1. Video-URL oder Upload
2. "Welche Content-Ideen kann ich aus diesem Video für mein Thema [X] ableiten?"
3. Nicht kopieren – transformieren

**Beispiel-Prompt:**
```
Analysiere dieses Video als Content-Inspiration:
- Welche Formate/Hooks funktionieren?
- Welche Themen resonieren (Kommentare, Engagement)?
- Was kann ich für [mein Thema] adaptieren?
- Welche Lücken/Gegenpositionen gibt es?
```

---

## Ethik-Hinweis

**Inspiration ≠ Kopie.** Vision-Modelle helfen beim Verstehen von Stilen und Techniken – das Ziel ist eigene Kreation, nicht Plagiat.

Bei "Bild → Prompt": Nie 1:1 nachbauen, sondern Elemente in eigenen Stil übersetzen.

---

## Tool-Empfehlung nach Aufgabe

| Aufgabe | Erstwahl | Alternative |
|---------|----------|-------------|
| Bild → Prompt | GPT-4o | Claude |
| Screenshot → Code | Claude | GPT-4o |
| Alt-Text | GPT-4o | Claude |
| Trend-Analyse | GPT-4o | – |
| Video → Ideen | Gemini | – |

---

*Stand: Januar 2026*

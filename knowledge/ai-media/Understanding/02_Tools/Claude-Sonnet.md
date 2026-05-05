---
title: Understanding/02_Tools/Claude Sonnet
type: reference
status: living
created: '2026-01-27'
updated: '2026-01-27'
tags:
  - tool
  - ai-media
  - understanding
  - vlm
  - anthropic
  - computer-use
sources:
  - 'self-authored:loschke:media-experimentation'
area: ai-media
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Claude Sonnet

> Anthropics Vision-Modell – stark bei UI-Reasoning und technischen Dokumenten.

---

## Steckbrief

| | |
|---|---|
| **Anbieter** | Anthropic |
| **Typ** | Generalist VLM |
| **Input** | Text, Bilder (kein Video, kein Audio) |
| **Stärken** | Charts/Diagramme, UI-Reasoning, Computer Use, technische Docs |
| **Schwächen** | Kein Video-Support, kein Audio |
| **Pricing** | Sonnet 4.5: $3 / 1M Input, $15 / 1M Output |
| **Context** | 200K Tokens (1M mit Beta-Header) |

---

## Computer Use

Claude Sonnet 4.5 ist Anthropics stärkstes Vision-Modell für **UI-Automation**:
- Screen-Understanding
- UI-Navigation
- Bounding Box Koordinaten für Clicks
- 61.4% auf OSWorld Benchmark

---

## Wann nutzen?

- **Computer Use / UI-Automation**
- Technische Dokumentation analysieren
- Chart- und Diagramm-Interpretation
- Code aus Screenshots generieren ("Vibe Coding")

## Wann nicht?

- Video-Analyse → Gemini 2.5 Pro
- Hochvolumen-OCR → Mistral OCR
- Pixelgenaue Segmentation → SAM 2

---

## Links

- [Anthropic Vision Docs](https://docs.anthropic.com/en/docs/build-with-claude/vision)
- [Computer Use Guide](https://docs.anthropic.com/en/docs/build-with-claude/computer-use)

---

*Stand: Januar 2026*

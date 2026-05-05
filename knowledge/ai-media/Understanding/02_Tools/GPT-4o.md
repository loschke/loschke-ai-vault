---
title: Understanding/02_Tools/GPT 4o
type: reference
status: living
created: '2026-01-27'
updated: '2026-01-27'
tags:
  - tool
  - ai-media
  - understanding
  - vlm
  - openai
sources:
  - 'self-authored:loschke:media-experimentation'
area: ai-media
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# GPT-4o

> OpenAIs multimodales Flaggschiff – solider Allrounder für Vision-Tasks.

---

## Steckbrief

| | |
|---|---|
| **Anbieter** | OpenAI |
| **Typ** | Generalist VLM |
| **Input** | Text, Bilder, Audio |
| **Stärken** | OCR, Visual QA, Chart-Interpretation, breite API-Integration |
| **Schwächen** | Zählen, pixelgenaue Lokalisation, kein Video |
| **Pricing** | $2.50 / 1M Input Tokens, $10 / 1M Output |
| **Context** | 128K Tokens |

---

## Wann nutzen?

- Schnelle Bild-Analyse ohne spezialisierte Pipeline
- Dokument-QA bei moderatem Volumen
- Integration in bestehende OpenAI-Workflows
- Bounding Boxes für UI-Automation (mit Einschränkungen)

## Wann nicht?

- Hochvolumen-OCR → Mistral OCR
- Pixelgenaue Segmentation → SAM 2
- Video-Analyse → Gemini 2.5 Pro

---

## Links

- [OpenAI Vision Guide](https://platform.openai.com/docs/guides/vision)
- [Roboflow GPT-4o Evaluation](https://blog.roboflow.com/gpt-4o-vision-use-cases/)

---

*Stand: Januar 2026*

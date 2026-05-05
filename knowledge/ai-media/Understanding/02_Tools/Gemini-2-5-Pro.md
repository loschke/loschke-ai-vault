---
title: Understanding/02_Tools/Gemini 2 5 Pro
type: reference
status: living
created: '2026-01-27'
updated: '2026-01-27'
tags:
  - tool
  - ai-media
  - understanding
  - vlm
  - google
  - video
sources:
  - 'self-authored:loschke:media-experimentation'
area: ai-media
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Gemini 2.5 Pro

> Googles Thinking Model – unschlagbar bei Video und Long Context.

---

## Steckbrief

| | |
|---|---|
| **Anbieter** | Google DeepMind |
| **Typ** | Generalist VLM (Thinking Model) |
| **Input** | Text, Bilder, Audio, Video (bis 10 Videos/Request) |
| **Stärken** | Video-Understanding (2-4h pro File!), 1M Token Context, native Multimodalität |
| **Schwächen** | High-Density OCR teils schwächer als GPT-4o, Pricing bei hohem Volumen |
| **Context** | 1M Tokens (erweiterbar auf 2M) |

---

## Video-Capabilities

- Temporal Analysis & Moment Retrieval
- Action Recognition
- Video Summarization
- Timestamp-basierte Queries (MM:SS Format)
- Bis zu 10 Videos pro Request (ab 2.5)

---

## Wann nutzen?

- **Video-Analyse** – klarer Marktführer
- Lange Dokumente in einem Pass analysieren
- Cross-Modal Reasoning (Audio + Video + Text)
- Research/Synthesis über viele Quellen

## Wann nicht?

- Einfache Bild-OCR → GPT-4o oder Mistral OCR
- Pixel-genaue Tasks → SAM 2
- Wenn Kosten kritisch bei hohem Volumen

---

## Links

- [Gemini API Video Understanding](https://ai.google.dev/gemini-api/docs/video-understanding)
- [Google Blog: Video Understanding](https://developers.googleblog.com/en/gemini-2-5-video-understanding/)
- [Google AI Studio](https://aistudio.google.com/)

---

*Stand: Januar 2026*

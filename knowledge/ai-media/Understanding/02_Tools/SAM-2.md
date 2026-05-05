---
title: Understanding/02_Tools/SAM 2
type: reference
status: living
created: '2026-01-27'
updated: '2026-01-27'
tags:
  - tool
  - ai-media
  - understanding
  - segmentation
  - meta
  - open-source
sources:
  - 'self-authored:loschke:media-experimentation'
area: ai-media
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# SAM 2

> Metas Segment Anything Model 2 – State-of-the-Art für pixelgenaue Segmentation.

---

## Steckbrief

| | |
|---|---|
| **Anbieter** | Meta AI |
| **Typ** | Spezialist Segmentation |
| **Input** | Bilder, Video |
| **Output** | Segmentation Masks (Pixel-Level) |
| **Stärken** | Pixelgenaue Objektgrenzen, Zero-Shot, Video-Tracking |
| **Schwächen** | Kein Text-Output, keine Klassifikation |
| **Lizenz** | Apache 2.0 (Open Source) |
| **Deployment** | Local, Cloud, Edge möglich |

---

## Capabilities

- **Promptable Segmentation**: Point, Box, oder Mask als Input
- **Zero-Shot**: Funktioniert ohne Training auf neuen Objekten
- **Video Segmentation**: Objekt-Tracking über Frames
- **Multi-Mask Output**: Mehrere plausible Masken pro Prompt

---

## Modell-Varianten

| Modell | Parameter | Use Case |
|--------|-----------|----------|
| SAM 2.1 Hiera Large | ~300M | Höchste Qualität |
| SAM 2.1 Hiera Base+ | ~80M | Balance |
| SAM 2.1 Hiera Small | ~40M | Edge/Mobile |
| SAM 2.1 Hiera Tiny | ~10M | Embedded |

---

## Wann nutzen?

- **Objekte freistellen** (Produktfotos, Compositing)
- Automatische Masken für Bildbearbeitung
- Video Object Tracking
- Daten-Annotation für Training

## Wann nicht?

- Text extrahieren → Mistral OCR, GPT-4o
- Objekte klassifizieren → Florence-2, YOLO
- Szenen beschreiben → GPT-4o, Claude

---

## Links

- [SAM 2 GitHub](https://github.com/facebookresearch/sam2)
- [Meta AI Blog](https://ai.meta.com/sam2/)
- [Segment Anything Demo](https://segment-anything.com/)

---

*Stand: Januar 2026*

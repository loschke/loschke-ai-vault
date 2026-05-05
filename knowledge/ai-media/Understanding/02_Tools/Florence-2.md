---
title: Understanding/02_Tools/Florence 2
type: reference
status: living
created: '2026-01-27'
updated: '2026-01-27'
tags:
  - tool
  - ai-media
  - understanding
  - detection
  - segmentation
  - ocr
  - microsoft
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
# Florence-2

> Microsofts kompakter Multi-Task Vision Model – Zero-Shot Allrounder.

---

## Steckbrief

| | |
|---|---|
| **Anbieter** | Microsoft |
| **Typ** | Spezialist Multi-Task VLM |
| **Parameter** | ~0.2B (Base) / ~0.7B (Large) |
| **Input** | Bilder + Text-Prompts |
| **Output** | Text, Bounding Boxes, Segmentation Masks |
| **Stärken** | Viele Tasks in einem kleinen Modell, Zero-Shot, Open Source |
| **Schwächen** | Langsamer auf CPU, nicht für Echtzeit |
| **Lizenz** | MIT (Open Source) |

---

## Supported Tasks

| Task Prompt | Funktion |
|-------------|----------|
| `<CAPTION>` | Bild-Beschreibung |
| `<OD>` | Open-Ended Object Detection |
| `<DENSE_REGION_CAPTION>` | Regionen beschreiben |
| `<CAPTION_TO_PHRASE_GROUNDING>` | Text → Bounding Boxes |
| `<REFERRING_EXPRESSION_SEGMENTATION>` | Text → Segmentation |
| `<OCR>` | Text extrahieren |
| `<OCR_WITH_REGION>` | Text + Bounding Boxes |

---

## Warum Florence-2?

- **Ein Modell für alles**: Detection, Segmentation, OCR, Captioning
- **Kompakt**: Läuft auf Consumer-GPUs
- **Zero-Shot**: Keine Finetuning nötig für neue Objekte
- **Trainiert auf FLD-5B**: 126M Bilder, 5.4B Annotations

---

## Wann nutzen?

- **Zero-Shot Detection** ohne YOLO-Training
- Schnelle Prototypen mit mehreren Vision-Tasks
- Text-Grounded Object Detection ("finde alle Katzen")
- Wenn ein Modell mehrere Tasks abdecken soll

## Wann nicht?

- Real-time Detection → YOLO
- Höchste Segmentation-Qualität → SAM 2
- Komplexe Dokumente → Mistral OCR

---

## Links

- [Florence-2 auf Hugging Face](https://huggingface.co/microsoft/Florence-2-large)
- [Roboflow Florence-2 Guide](https://roboflow.com/model/florence-2)
- [Paper: Florence-2](https://arxiv.org/abs/2311.06242)

---

*Stand: Januar 2026*

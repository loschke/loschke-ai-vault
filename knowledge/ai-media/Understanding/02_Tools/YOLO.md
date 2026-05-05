---
title: Understanding/02_Tools/YOLO
type: reference
status: living
created: '2026-01-27'
updated: '2026-01-27'
tags:
  - tool
  - ai-media
  - understanding
  - detection
  - realtime
  - edge
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
# YOLO

> You Only Look Once – der Klassiker für Real-Time Object Detection.

---

## Steckbrief

| | |
|---|---|
| **Ursprung** | Joseph Redmon (2016), jetzt Ultralytics |
| **Typ** | Spezialist Object Detection |
| **Aktuelle Version** | YOLOv12, YOLO-World |
| **Input** | Bilder, Video-Streams |
| **Output** | Bounding Boxes + Klassen + Confidence |
| **Stärken** | Echtzeit, Edge-Deployment, trainierbar |
| **Schwächen** | Braucht Training für Custom-Klassen (außer YOLO-World) |
| **Lizenz** | AGPL-3.0 (Ultralytics) |

---

## Varianten

| Modell | Use Case |
|--------|----------|
| **YOLOv12** | Aktuellste Version, beste Accuracy |
| **YOLO-World** | Zero-Shot mit Text-Prompts |
| **YOLOv8** | Stabil, gut dokumentiert |
| **YOLO-NAS** | Neural Architecture Search optimiert |

### YOLO-World

Zero-Shot Detection wie Florence-2, aber schneller:
- 35.4 AP auf LVIS bei 52 FPS
- ~20x schneller als Grounding DINO
- Text-Prompt: "person, car, dog" → Detection

---

## Wann nutzen?

- **Real-Time Detection** (Webcam, Video-Streams)
- Edge-Deployment (Jetson, Raspberry Pi)
- Custom-Modelle trainieren auf eigenen Daten
- Produktion mit bekannten Objektklassen

## Wann nicht?

- Zero-Shot ohne Speed-Requirement → Florence-2
- Pixelgenaue Segmentation → SAM 2
- Dokument-OCR → Mistral OCR

---

## Quick Start

```python
from ultralytics import YOLO

# Pretrained
model = YOLO("yolov8n.pt")
results = model("image.jpg")

# YOLO-World (Zero-Shot)
model = YOLO("yolov8l-world.pt")
model.set_classes(["person", "car", "dog"])
results = model("image.jpg")
```

---

## Links

- [Ultralytics Docs](https://docs.ultralytics.com/)
- [YOLO-World Paper](https://arxiv.org/abs/2401.17270)
- [Roboflow YOLO Guide](https://blog.roboflow.com/yolo/)

---

*Stand: Januar 2026*

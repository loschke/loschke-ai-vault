---
title: Understanding/01_Capabilities/Segmentation
type: reference
status: stable
created: '2026-01-27'
updated: '2026-01-27'
tags:
  - capability
  - understanding
  - ai-media
  - vision
  - segmentation
  - masking
sources:
  - 'self-authored:loschke:media-experimentation'
area: ai-media
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Segmentation

> Objekte pixelgenau isolieren – die Grundlage für präzise Bildbearbeitung und Masking.

---

## Was ist Segmentation?

Segmentation teilt ein Bild in bedeutungsvolle Regionen auf und weist jedem Pixel eine Kategorie oder Instanz zu. Anders als Detection (Bounding Boxes) liefert Segmentation exakte Objektgrenzen.

**Typische Outputs:** Masken (binär oder multi-class), Polygon-Konturen

### Arten von Segmentation

| Typ | Beschreibung | Output |
|-----|--------------|--------|
| **Semantic Segmentation** | Jedes Pixel einer Klasse zuordnen | Klassenmaske (alle Autos = rot) |
| **Instance Segmentation** | Einzelne Objekte unterscheiden | Instanzmaske (Auto 1, Auto 2, ...) |
| **Panoptic Segmentation** | Semantic + Instance kombiniert | Vollständige Szenenanalyse |

---

## Wie funktioniert es?

**Bei SAM 2 (Segment Anything Model):**
1. **Prompt-basiert:** Klick, Box oder Text als Input
2. **Encoder:** Bild wird in Feature-Repräsentation umgewandelt
3. **Prompt Encoder:** User-Input wird verarbeitet
4. **Mask Decoder:** Generiert präzise Segmentierungsmaske
5. **Memory (Video):** Tracking über Frames mit temporaler Konsistenz

**Klassische Ansätze (DeepLab, Mask R-CNN):**
- Encoder-Decoder Architekturen
- Feature Pyramid Networks für Multi-Scale

---

## Stärken

- **Pixelgenaue Präzision** – exakte Objektgrenzen
- **Komplexe Formen** – auch bei irregulären Objekten
- **Grundlage für Compositing** – Freistellen, Hintergrund-Entfernung
- **Video-fähig** – Tracking mit temporaler Konsistenz (SAM 2)

---

## Limitierungen

| Limitation | Workaround |
|------------|------------|
| **Feine Details** (Haare, Fell) | Matting-Algorithmen nachschalten |
| **Transparente Objekte** | Spezialisierte Models oder manuelle Korrektur |
| **Rechenintensiv** | SAM 2 ist 6x schneller als SAM 1, aber immer noch heavy |
| **Ambigue Grenzen** | Mehrere Prompts/Klicks für Refinement |

---

## Wann Segmentation vs. andere Capabilities?

| Situation | Empfehlung |
|-----------|------------|
| Objekt pixelgenau freistellen | **Segmentation** |
| Nur Position/Bounding Box nötig | [[Object-Detection]] |
| Objekt über Video verfolgen + maskieren | **Segmentation** (SAM 2) |
| Nur wissen was im Bild ist | [[Scene-Description]] |

---

## Tools im Überblick

| Tool | Typ | Stärke | Use Case |
|------|-----|--------|----------|
| **SAM 2** | Meta, Open Source | SOTA, Promptable, Image + Video | Freistellen, Video-Editing, Masking |
| **Florence-2** | Microsoft, Open Source | Kompakt, Multi-Task | Edge, integrierte Pipelines |
| **Mask R-CNN** | Klassisch | Gut dokumentiert, stabil | Production mit bekannten Klassen |
| **Remove.bg** | SaaS | Einfach, schnell | Hintergrund-Entfernung (nur Personen) |

### SAM 2 im Detail

- **Promptable:** Klick, Box, oder vorherige Maske als Input
- **Zero-shot:** Funktioniert ohne Training auf neue Objekttypen
- **Video:** ~44 fps, Memory für Tracking über Verdeckungen hinweg
- **Use Cases:** Video-Editing, Medical Imaging, Robotik, AR/VR

---

## Typische Workflows

### 1. Objekt freistellen
Bild → SAM 2 mit Klick-Prompt → Maske → Export mit Transparenz

### 2. Video-Objekt-Tracking
Frame 1: Objekt markieren → SAM 2 trackt automatisch → Maske pro Frame → Compositing

### 3. Batch-Segmentation
Object Detection (YOLO) für Bounding Boxes → SAM 2 für präzise Masken → Export

### 4. Input für Video-Generation
Referenzbild → SAM 2 Maske → Inpainting/Outpainting in Video-Tool

---

## Integration mit anderen Capabilities

Segmentation ist oft Teil größerer Pipelines:

```
Detection → Segmentation → Tracking → Generation
(Was/Wo)    (Exakte Form)   (Über Zeit)  (Manipulation)
```

**Beispiel Video-Editing:**
1. [[Object-Detection]]: Finde Person im Frame
2. **Segmentation**: Erstelle Maske
3. [[Video-Understanding]]: Tracke über Video
4. Compositing: Hintergrund ersetzen

---

## Siehe auch

- [[Object-Detection]] – Wenn Bounding Boxes reichen
- [[Video-Understanding]] – Tracking-Aspekte
- [[02_Knowledge/AI-Media/Video/01_Capabilities/Post-Production|Video Post-Production]] – SAM 2 für Masking in Video-Workflows

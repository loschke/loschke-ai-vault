---
title: Understanding/01_Capabilities/Object Detection
type: reference
status: stable
created: '2026-01-27'
updated: '2026-01-27'
tags:
  - capability
  - understanding
  - ai-media
  - vision
  - detection
sources:
  - 'self-authored:loschke:media-experimentation'
area: ai-media
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Object Detection

> Objekte in Bildern lokalisieren, klassifizieren und zählen.

---

## Was ist Object Detection?

Object Detection identifiziert und lokalisiert spezifische Objekte in Bildern. Das Ergebnis sind typischerweise Bounding Boxes mit Klassifikation und Confidence Score.

**Typische Outputs:** Koordinaten (Bounding Boxes), Klassenlabels, Confidence Scores

### Abgrenzung: Detection vs. Recognition

| | Object Recognition | Object Detection |
|---|---|---|
| **Frage** | "Was ist im Bild?" | "Was ist wo im Bild?" |
| **Output** | Label/Klasse | Label + Position (Bounding Box) |
| **Use Case** | Kategorisierung | Lokalisierung, Zählen |

Recognition ist quasi "Detection ohne Koordinaten". In der Praxis wird Detection häufiger benötigt, da die Position meist relevant ist.

---

## Wie funktioniert es?

**Bei Foundation Models (GPT-4o, Gemini):**
1. Bild wird analysiert
2. Auf Anfrage werden Objekte mit Koordinaten ausgegeben
3. Format oft: normalisierte Koordinaten (0-1000) oder Prozent

**Bei spezialisierten Modellen (YOLO, Florence-2):**
1. Single-Pass oder Two-Stage Detection
2. Feature Extraction → Region Proposal → Classification
3. Output: Bounding Boxes mit Class + Confidence

---

## Stärken

- **Präzise Lokalisierung** – exakte Position im Bild
- **Zählbar** – wie viele Objekte einer Klasse?
- **Automatisierbar** – Batch-Processing möglich
- **Grundlage für Tracking** – Frame-zu-Frame-Verfolgung

---

## Limitierungen

| Limitation | Workaround |
|------------|------------|
| **Verdeckte Objekte** | Mehrere Perspektiven, Segmentation |
| **Kleine Objekte** | Höhere Auflösung, spezialisierte Modelle |
| **Unbekannte Klassen** | Zero-shot-Modelle (Florence-2), oder Custom Training |
| **Überlappende Boxes** | Non-Maximum Suppression tunen |
| **Real-time Anforderungen** | YOLO statt Foundation Models |

---

## Wann Object Detection vs. andere Capabilities?

| Situation | Empfehlung |
|-----------|------------|
| Position von Objekten wichtig | **Object Detection** |
| Nur wissen was im Bild ist | [[Scene-Description]] |
| Pixelgenaue Grenzen nötig | [[Segmentation]] |
| Objekte über Video verfolgen | [[Video-Understanding]] (Tracking) |

---

## Tools im Überblick

| Tool | Typ | Stärke | Use Case |
|------|-----|--------|----------|
| **GPT-4o** | Foundation | Flexibel, Zero-shot, natürliche Sprache | Ad-hoc Analyse, komplexe Szenen |
| **Gemini 2.5** | Foundation | Bounding Box Output, schnell | Integration in Workflows |
| **YOLO v8/v11** | Spezialisiert | Extrem schnell (>100fps), Production-ready | Real-time, Edge, High-Volume |
| **Florence-2** | Spezialisiert | Kompakt, Open Source, Zero-shot | On-Device, Custom Pipelines |

### Wann Foundation vs. Spezialisiert?

- **Foundation Models:** Flexibilität, komplexe Szenen, natürliche Sprache, Prototyping
- **Spezialisierte Models:** Speed, Kosten bei Volumen, Edge Deployment, Custom Classes

---

## Typische Workflows

### 1. Ad-hoc Analyse (Foundation Model)
Bild + Prompt: "Identifiziere alle Fahrzeuge im Bild mit ungefährer Position" → Beschreibung mit Koordinaten

### 2. Production Pipeline (YOLO)
Video-Stream → YOLO Inference → Bounding Boxes → Business Logic → Alert/Action

### 3. Annotation Assistance
Bilder → Florence-2 für Auto-Annotation → Human Review → Training Data

---

## Prompting-Tipps (Foundation Models)

**Für Bounding Boxes:**
> Identifiziere alle [Objekttyp] im Bild. Gib für jedes Objekt die ungefähre Position als Bounding Box an (Format: [x1, y1, x2, y2] in Prozent der Bildgröße).

**Für Zählen:**
> Wie viele [Objekttyp] sind in diesem Bild? Liste sie einzeln mit Position auf.

**Für spezifische Klassen:**
> Finde alle Verkehrsschilder in diesem Bild und klassifiziere jeden Typ.

---

## Siehe auch

- [[Segmentation]] – Wenn pixelgenaue Grenzen wichtig sind
- [[Video-Understanding]] – Object Tracking über Zeit
- [[Scene-Description]] – Wenn nur Überblick nötig

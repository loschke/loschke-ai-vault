---
title: AI-Media
type: moc
status: living
created: '2026-01-27'
updated: '2026-01-27'
tags:
  - readme
  - ai-media
  - understanding
  - tools
  - vision
sources:
  - 'self-authored:loschke:media-experimentation'
area: ai-media
audience:
  - praktiker
  - konzepter
  - entwickler
level: basic-to-advanced
intent:
  - verstehen
  - anwenden
contains:
  - framework
  - vocabulary
  - example
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Understanding Tools

> Tool-Steckbriefe für AI Vision & Document Understanding.

---

## Generalist VLMs

Multimodale Sprachmodelle mit breiten Vision-Fähigkeiten. Gut für die meisten Anwendungsfälle, aber nicht spezialisiert.

| Tool | Stärke | Schwäche |
|------|--------|----------|
| [[GPT-4o]] | Allrounder, breite API-Integration | Zählen, pixelgenaue Lokalisierung |
| [[Gemini-2-5-Pro]] | Video (bis 4h!), 1M Context | High-Density OCR teils schwächer |
| [[Claude-Sonnet]] | UI-Reasoning, Computer Use, Charts | Kein Video-Support |

---

## Spezialist: OCR & Documents

Fokussiert auf Textextraktion und Dokumentverarbeitung im Volumen.

| Tool | Stärke | Schwäche |
|------|--------|----------|
| [[Mistral-OCR]] | Volumen (2000 S./min), Struktur, Preis | Kein Self-Hosting (nur selektiv) |

> **Siehe auch:** Für Document-to-Markdown Pipelines (Docling, MarkItDown, MinerU) → Datenaufbereitung für LLMs *(geplant)*

---

## Spezialist: Vision Models

Dedizierte Modelle für spezifische Computer Vision Tasks.

| Tool | Task | Stärke |
|------|------|--------|
| [[SAM-2]] | Segmentation | Pixelgenaues Masking, Video |
| [[Florence-2]] | Multi-Task | Zero-Shot Detection + OCR + Segmentation, kompakt |
| [[YOLO]] | Detection | Real-time, trainierbar, Edge-Deployment |

---

## Entscheidungshilfe

| Ich will... | Tool |
|-------------|------|
| Bild beschreiben/analysieren | GPT-4o, Claude, Gemini |
| Video verstehen (lang) | Gemini 2.5 Pro |
| Dokumente OCR (Volumen) | Mistral OCR |
| Objekte pixelgenau freistellen | SAM 2 |
| Zero-Shot Detection | Florence-2 |
| Real-time Detection (Edge) | YOLO |
| UI-Automation | Claude (Computer Use) |

---

*Stand: Januar 2026*

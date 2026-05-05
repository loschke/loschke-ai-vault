---
title: Understanding/01_Capabilities/Scene Description
type: reference
status: stable
created: '2026-01-27'
updated: '2026-01-27'
tags:
  - capability
  - understanding
  - ai-media
  - vision
sources:
  - 'self-authored:loschke:media-experimentation'
area: ai-media
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Scene Description

> Die grundlegende Vision-Capability: Bilder beschreiben und verstehen.

---

## Was ist Scene Description?

Scene Description (auch: Image Captioning, Visual Description) ist die Fähigkeit, den Inhalt eines Bildes in natürlicher Sprache zu beschreiben. Das Modell erkennt Objekte, Personen, Aktivitäten, Umgebungen und deren Beziehungen zueinander.

**Typische Outputs:** Fließtext-Beschreibungen, strukturierte Analysen, Alt-Texte

---

## Wie funktioniert es?

1. **Visual Encoding:** Das Bild wird in visuelle Tokens/Embeddings umgewandelt
2. **Multimodale Fusion:** Visuelle Features werden mit dem Sprachmodell verbunden
3. **Kontextuelle Generierung:** Das LLM generiert Text basierend auf visuellen Features
4. **Prompt-Steuerung:** Detail-Level und Fokus durch Instruktionen beeinflussbar

---

## Stärken

- **Universell einsetzbar** – funktioniert mit praktisch jedem Bildtyp
- **Flexibles Output-Format** – von kurzen Captions bis detaillierten Analysen
- **Kontextsensitiv** – kann auf spezifische Aspekte fokussieren
- **Keine Vortrainierung nötig** – Zero-shot auf neue Domänen

---

## Limitierungen

| Limitation | Workaround |
|------------|------------|
| **Halluzinationen** – Details erfinden | Explizit nach Unsicherheiten fragen, verifizieren |
| **Feine Details übersehen** | Bildausschnitte separat analysieren, höhere Auflösung |
| **Kulturelle/kontextuelle Blindspots** | Kontext im Prompt mitgeben |
| **Text im Bild** | Kombination mit OCR-Capability |
| **Zählen ungenau** | Bei exakten Zahlen: Object Detection nutzen |

---

## Wann Scene Description vs. andere Capabilities?

| Situation | Empfehlung |
|-----------|------------|
| Allgemeine Bildbeschreibung | **Scene Description** |
| Spezifische Objekte finden/zählen | [[Object-Detection]] |
| Text aus Bildern extrahieren | [[OCR]] |
| Konkrete Fragen zum Bild | [[Visual-QA]] |
| Objekte pixelgenau isolieren | [[Segmentation]] |

---

## Tools im Überblick

| Tool | Stärke | Limitierung |
|------|--------|-------------|
| **GPT-4o** | Detailreich, gutes Reasoning | – |
| **Claude 3.5/4** | Präzise, wenig Halluzination | – |
| **Gemini 2.5** | Schnell, gut bei komplexen Szenen | – |
| **LLaVA** (Open Source) | Lokal nutzbar | Weniger präzise |

→ Für diese Capability sind die Foundation Models meist die beste Wahl.

---

## Typische Workflows

### 1. Alt-Text-Generierung
Bild → Prompt: "Beschreibe dieses Bild für einen Alt-Text, maximal 125 Zeichen" → Output

### 2. Bildarchiv-Tagging
Batch von Bildern → Strukturierter Prompt für konsistente Tags → Kategorisierung

### 3. Content-Analyse
Bild → Detaillierte Analyse mit Fokus-Instruktion → Verwendung in Recherche/Reporting

---

## Prompting-Tipps

**Für kurze Beschreibungen:**
> Beschreibe dieses Bild in einem Satz.

**Für detaillierte Analyse:**
> Analysiere dieses Bild detailliert. Beschreibe: 1) Hauptsubjekte, 2) Umgebung/Setting, 3) Stimmung/Atmosphäre, 4) Bemerkenswerte Details.

**Für spezifischen Fokus:**
> Beschreibe nur die Personen in diesem Bild und ihre Aktivitäten.

---

## Siehe auch

- [[Object-Detection]] – Wenn es um spezifische Objekte geht
- [[Visual-QA]] – Wenn konkrete Fragen beantwortet werden sollen
- [[OCR]] – Wenn Text im Bild relevant ist

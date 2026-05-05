---
title: Understanding/01_Capabilities/OCR
type: reference
status: stable
created: '2026-01-27'
updated: '2026-01-27'
tags:
  - capability
  - understanding
  - ai-media
  - vision
  - ocr
  - text-extraction
sources:
  - 'self-authored:loschke:media-experimentation'
area: ai-media
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# OCR (Optical Character Recognition)

> Text in Bildern erkennen und extrahieren – die Brücke zwischen visuellem und textuellem Content.

---

## Was ist OCR?

OCR extrahiert Text aus Bildern, Screenshots, Scans oder Fotos. Moderne OCR geht über reine Zeichenerkennung hinaus und versteht Layout, Struktur und Kontext.

**Typische Outputs:** Extrahierter Text (plain oder strukturiert), Koordinaten der Textregionen

### Evolution: Von klassisch zu multimodal

| Generation | Ansatz | Beispiel |
|------------|--------|----------|
| **Klassisch** | Rule-based, Template Matching | Tesseract (alt) |
| **Deep Learning** | CNN + RNN/Transformer | PaddleOCR, EasyOCR |
| **Multimodal LLM** | Vision + Language integriert | GPT-4o, Claude, Gemini |
| **Spezialisiert** | Optimiert für Dokumente | Mistral OCR, MinerU |

---

## Wie funktioniert es?

**Bei Foundation Models:**
1. Bild wird als visuelle Tokens encodiert
2. LLM "liest" den Text als Teil des Bildverständnisses
3. Kann gleichzeitig verstehen und extrahieren

**Bei spezialisierten OCR-Tools:**
1. **Text Detection:** Wo ist Text im Bild?
2. **Text Recognition:** Was steht da?
3. **Post-Processing:** Layoutanalyse, Strukturierung

---

## Stärken

- **Universell** – gedruckt, handschriftlich, Schilder, Screenshots
- **Kontextverständnis** – Foundation Models verstehen auch Bedeutung
- **Layouterhalt** – moderne Tools behalten Struktur bei
- **Mehrsprachig** – die meisten Tools unterstützen viele Sprachen

---

## Limitierungen

| Limitation | Workaround |
|------------|------------|
| **Schlechte Bildqualität** | Preprocessing (Kontrast, Schärfe) |
| **Handschrift (schlecht lesbar)** | Spezialisierte Handschrift-Modelle |
| **Komplexe Layouts** | Spezialisierte Document-Tools (Docling, MinerU) |
| **Hohe Volumina** | Dedizierte OCR-APIs statt Foundation Models |
| **Tabellen/Formeln** | [[Document-Analysis]] oder spezialisierte Tools |

---

## Wann OCR vs. andere Capabilities?

| Situation | Empfehlung |
|-----------|------------|
| Text aus Bild/Screenshot extrahieren | **OCR** |
| Strukturierte Dokumente (Rechnungen, Formulare) | [[Document-Analysis]] |
| Fragen zum Bildinhalt (nicht nur Text) | [[Visual-QA]] |
| Nur Bildinhalt beschreiben | [[Scene-Description]] |

---

## Tools im Überblick

### Foundation Models (für einfache OCR)

| Tool | Stärke | Wann nutzen |
|------|--------|-------------|
| **GPT-4o** | Gute Accuracy, versteht Kontext | Screenshots, einfache Dokumente |
| **Claude** | Präzise, wenig Halluzination | Code-Screenshots, technische Docs |
| **Gemini** | Schnell, mehrsprachig | Quick Extraction, Batch |

### Spezialisierte OCR-Tools (für Volumen/Präzision)

| Tool | Stärke | Use Case |
|------|--------|----------|
| **Mistral OCR 3** | SOTA Accuracy, Handschrift, Tabellen | High-Quality Extraction |
| **DeepSeek-OCR** | Token-effizient, Open Source | High-Volume Processing |
| **PaddleOCR** | Open Source, viele Sprachen | On-Premise, Edge |
| **Tesseract** | Kostenlos, etabliert | Legacy, einfache Fälle |

### Wann Foundation vs. Spezialisiert?

- **Foundation Models:** Kontext wichtig, geringe Volumina, Ad-hoc
- **Spezialisierte Tools:** Hohe Volumina, maximale Accuracy, Strukturerhalt

---

## Typische Workflows

### 1. Screenshot-zu-Text
Screenshot → Foundation Model mit Prompt: "Extrahiere allen Text aus diesem Bild" → Text

### 2. Batch Document Processing
PDFs/Scans → Spezialisiertes OCR → Strukturierter Output → Weiterverarbeitung

### 3. Receipt/Invoice Processing
Bild → OCR → Strukturierte Extraktion (Datum, Betrag, Positionen) → Buchhaltung

---

## Prompting-Tipps (Foundation Models)

**Für reinen Text:**
> Extrahiere den gesamten sichtbaren Text aus diesem Bild. Behalte die Zeilenumbrüche bei.

**Für strukturierte Extraktion:**
> Extrahiere den Text aus diesem Bild und gib ihn als Markdown wieder, mit korrekten Überschriften und Listen.

**Für spezifische Elemente:**
> Extrahiere nur die E-Mail-Adressen und Telefonnummern aus diesem Bild.

**Bei schlechter Qualität:**
> Der Text in diesem Bild ist teilweise schwer lesbar. Extrahiere so viel wie möglich und markiere unsichere Stellen mit [?].

---

## Qualitätsfaktoren

Was beeinflusst die OCR-Qualität?

- **Auflösung:** Höher = besser (mindestens 300 DPI für Dokumente)
- **Kontrast:** Klarer Text auf einheitlichem Hintergrund
- **Schriftart:** Standardschriften > dekorative Fonts
- **Sprache:** Häufige Sprachen besser unterstützt
- **Handschrift:** Stark abhängig von Lesbarkeit

---

## Siehe auch

- [[Document-Analysis]] – Wenn Struktur (Tabellen, Formulare) wichtig ist
- [[Visual-QA]] – Wenn Fragen zum Inhalt gestellt werden sollen
- [[Scene-Description]] – Für allgemeine Bildbeschreibung

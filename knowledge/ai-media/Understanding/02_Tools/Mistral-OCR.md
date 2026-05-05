---
title: Understanding/02_Tools/Mistral OCR
type: reference
status: living
created: '2026-01-27'
updated: '2026-01-27'
tags:
  - tool
  - ai-media
  - understanding
  - ocr
  - mistral
  - documents
sources:
  - 'self-authored:loschke:media-experimentation'
area: ai-media
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Mistral OCR

> Mistrals spezialisierte OCR-Engine – Volumen, Struktur, aggressives Pricing.

---

## Steckbrief

| | |
|---|---|
| **Anbieter** | Mistral AI |
| **Typ** | Spezialist OCR |
| **Aktuelles Modell** | mistral-ocr-2512 (OCR 3) |
| **Input** | PDF, Bilder |
| **Output** | Markdown mit HTML-Tabellen, extrahierte Bilder |
| **Stärken** | 2000 Seiten/min, Struktur-Erhalt, Tabellen, Handwriting (88.9%) |
| **Schwächen** | Kein Character-Formatting (bold, italic), Self-Hosting nur selektiv |
| **Pricing** | $1 / 1000 Seiten (Batch: $0.50) |
| **Limits** | 50 MB / 1000 Seiten pro Request |

---

## Key Features

- **Struktur-Output**: Markdown mit Headers, Paragraphen, Listen
- **Tabellen**: HTML mit colspan/rowspan – nicht nur Plaintext
- **Embedded Images**: Werden extrahiert und als Base64 mitgeliefert
- **Handwriting**: 88.9% Accuracy (vs. Azure 78.2%, DeepSeek 57.2%)
- **Multilingual**: Breite Sprachunterstützung

---

## Wann nutzen?

- **Hochvolumen-OCR** (Archive, Rechnungen, Formulare)
- Dokumente mit komplexen Tabellen
- RAG-Pipelines mit strukturiertem Input
- Handschriftliche Dokumente

## Wann nicht?

- Visual QA / Reasoning → GPT-4o, Claude
- Video → Gemini 2.5 Pro
- Wenn Self-Hosting zwingend (nur selektiv verfügbar)

---

## API-Beispiel

```python
from mistralai import Mistral

client = Mistral(api_key="...")
result = client.ocr.process(
    model="mistral-ocr-latest",
    document={"type": "url", "url": "https://...pdf"},
    table_format="html"
)
```

---

## Links

- [Mistral OCR Docs](https://docs.mistral.ai/capabilities/document_ai/basic_ocr)
- [Mistral OCR 3 Announcement](https://mistral.ai/news/mistral-ocr-3)
- [Document AI Playground](https://console.mistral.ai/)

---

*Stand: Januar 2026*

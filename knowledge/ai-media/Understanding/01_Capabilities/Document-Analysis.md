---
title: Understanding/01_Capabilities/Document Analysis
type: reference
status: stable
created: '2026-01-27'
updated: '2026-01-27'
tags:
  - capability
  - understanding
  - ai-media
  - vision
  - documents
  - tables
  - forms
sources:
  - 'self-authored:loschke:media-experimentation'
area: ai-media
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Document Analysis

> Strukturierte Dokumente verstehen: Tabellen, Formulare, Diagramme, Charts.

---

## Was ist Document Analysis?

Document Analysis geht über OCR hinaus: Es versteht die **Struktur** von Dokumenten – Tabellen, Hierarchien, Beziehungen zwischen Elementen. Das Ziel ist nicht nur Text extrahieren, sondern die Bedeutung der Struktur zu erhalten.

**Typische Outputs:** Strukturierte Daten (JSON, Markdown), extrahierte Tabellen, Formularfelder

### Abgrenzung zu OCR

| | OCR | Document Analysis |
|---|---|---|
| **Frage** | "Was steht da?" | "Was bedeutet die Struktur?" |
| **Output** | Fließtext | Strukturierte Daten |
| **Beispiel** | Text einer Rechnung | Rechnungspositionen als Tabelle |

---

## Wie funktioniert es?

**Bei Foundation Models:**
1. Dokument als Bild/PDF einlesen
2. Layout visuell analysieren
3. Struktur durch Prompt-Instruktion extrahieren

**Bei spezialisierten Tools (Docling, MinerU):**
1. **Layout Analysis:** Regions erkennen (Header, Body, Tables, Figures)
2. **Element Classification:** Typ jeder Region bestimmen
3. **Structure Extraction:** Tabellenzellen, Hierarchien, Referenzen
4. **Output Generation:** Strukturiertes Format (JSON, Markdown, HTML)

---

## Stärken

- **Strukturerhalt** – Tabellen bleiben Tabellen
- **Semantisches Verständnis** – versteht Dokumenttypen
- **Multi-Format** – PDF, Scans, Fotos, Screenshots
- **Downstream-ready** – Output direkt weiterverwendbar

---

## Limitierungen

| Limitation | Workaround |
|------------|------------|
| **Komplexe verschachtelte Tabellen** | Manuelle Nachbearbeitung oder spezialisierte Tools |
| **Schlechte Scan-Qualität** | Preprocessing, höhere Auflösung |
| **Handausgefüllte Formulare** | Kombination OCR + Layout-Verständnis |
| **Formeln (LaTeX)** | MinerU oder spezialisierte Math-OCR |
| **Multi-Column-Layouts** | Tools mit Layout-Awareness |

---

## Wann Document Analysis vs. andere Capabilities?

| Situation | Empfehlung |
|-----------|------------|
| Tabellen/Formulare extrahieren | **Document Analysis** |
| Nur Text extrahieren (keine Struktur) | [[OCR]] |
| Fragen zu einem Dokument stellen | [[Visual-QA]] |
| Charts/Diagramme interpretieren | **Document Analysis** oder [[Visual-QA]] |

---

## Tools im Überblick

### Foundation Models

| Tool | Stärke | Wann nutzen |
|------|--------|-------------|
| **GPT-4o** | Gutes Tabellenverständnis | Einfache Strukturen, Ad-hoc |
| **Claude** | Präzise bei komplexen Docs | Verträge, technische Docs |
| **Gemini** | Schnell, lange Dokumente | Batch-Verarbeitung |

### Spezialisierte Document Tools

| Tool | Stärke | Use Case |
|------|--------|----------|
| **Docling (IBM)** | Multi-Format, RAG-ready, MCP Server | Enterprise Pipelines, RAG |
| **MinerU 2.5** | Academic Papers, Formeln → LaTeX | Wissenschaftliche Docs |
| **Mistral OCR 3** | SOTA bei Tabellen, Handschrift | High-Accuracy Extraction |
| **Azure Document Intelligence** | Enterprise, viele Prebuilt-Models | Rechnungen, Formulare, IDs |

### Wann Foundation vs. Spezialisiert?

| Kriterium | Foundation Models | Spezialisierte Tools |
|-----------|-------------------|---------------------|
| Volumen | <100 Docs/Tag | >100 Docs/Tag |
| Strukturkomplexität | Einfach bis mittel | Komplex |
| Formeln/Math | Begrenzt | MinerU für LaTeX |
| Integration | API-Calls | Pipeline-Integration |
| On-Premise | Nein | Docling, MinerU (Open Source) |

---

## Typische Workflows

### 1. Rechnungsverarbeitung
PDF → Document Analysis → Strukturierte Felder (Datum, Positionen, Summen) → Buchhaltungssystem

### 2. Vertragsanalyse
Vertrag-PDF → Extraktion relevanter Klauseln → Zusammenfassung kritischer Punkte

### 3. Academic Paper Processing
Paper-PDF → MinerU → Markdown mit Formeln → RAG-System oder Zitation

### 4. Formular-Digitalisierung
Ausgefülltes Formular (Scan) → Layout-Analyse → Feldwerte extrahieren → Datenbank

---

## Prompting-Tipps (Foundation Models)

**Für Tabellen:**
> Extrahiere die Tabelle aus diesem Dokument als Markdown-Tabelle. Behalte alle Spalten und Zeilen bei.

**Für Formulare:**
> Dieses Bild zeigt ein ausgefülltes Formular. Extrahiere alle Feldnamen und ihre Werte als JSON.

**Für Rechnungen:**
> Extrahiere aus dieser Rechnung: Rechnungsnummer, Datum, Empfänger, alle Positionen (Beschreibung, Menge, Einzelpreis, Gesamtpreis), Netto, MwSt, Brutto. Format: JSON.

**Für Charts:**
> Analysiere dieses Balkendiagramm. Extrahiere die dargestellten Werte und beschreibe den Trend.

---

## Qualitätsfaktoren

- **Scan-Qualität:** 300 DPI Minimum, guter Kontrast
- **Dokumenttyp-Konsistenz:** Einheitliche Layouts verbessern Accuracy
- **Sprache:** Häufige Sprachen besser unterstützt
- **Tabellenkomplexität:** Merged Cells, Multi-Level-Headers sind schwieriger

---

## Siehe auch

- [[OCR]] – Basis-Textextraktion ohne Strukturfokus
- [[Visual-QA]] – Fragen zu Dokumentinhalten stellen
- [[Scene-Description]] – Allgemeine Bildbeschreibung

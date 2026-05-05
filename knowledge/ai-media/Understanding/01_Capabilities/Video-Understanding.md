---
title: Understanding/01_Capabilities/Video Understanding
type: reference
status: stable
created: '2026-01-27'
updated: '2026-01-27'
tags:
  - capability
  - understanding
  - ai-media
  - video
  - tracking
  - summarization
  - temporal
sources:
  - 'self-authored:loschke:media-experimentation'
area: ai-media
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Video Understanding

> Videos analysieren: Zeitliche Abläufe, Aktionen, Zusammenfassungen und Objektverfolgung.

---

## Was ist Video Understanding?

Video Understanding umfasst alle Capabilities, die Videos als Input verarbeiten und analysieren – im Gegensatz zu Video Generation. Es geht um das Verstehen von Bewegung, Zeit, Handlungen und Veränderungen.

**Typische Outputs:** Zusammenfassungen, Transkripte, Event-Timestamps, Tracking-Daten, Action Labels

---

## Teil-Capabilities

### Temporal Analysis
Zeitliche Abläufe und Veränderungen verstehen.

| Aspekt | Beschreibung |
|--------|--------------|
| **Event Detection** | Wann passiert etwas Relevantes? |
| **Sequence Understanding** | In welcher Reihenfolge passieren Dinge? |
| **Duration Estimation** | Wie lange dauern Aktionen? |
| **Change Detection** | Was hat sich zwischen Zeitpunkten verändert? |

### Action Recognition
Handlungen und Aktivitäten erkennen.

| Aspekt | Beschreibung |
|--------|--------------|
| **Activity Classification** | Was tut die Person? (Laufen, Sitzen, Tippen) |
| **Gesture Recognition** | Spezifische Gesten erkennen |
| **Interaction Detection** | Wer interagiert mit wem/was? |
| **Intent Inference** | Was ist das Ziel der Handlung? |

### Video Summarization
Videos zusammenfassen und Highlights extrahieren.

| Aspekt | Beschreibung |
|--------|--------------|
| **Key Frame Extraction** | Wichtigste Frames identifizieren |
| **Textual Summary** | Video in Text zusammenfassen |
| **Highlight Detection** | Interessante Momente finden |
| **Chapter Generation** | Thematische Abschnitte erstellen |

### Object Tracking
Objekte über Frames hinweg verfolgen.

| Aspekt | Beschreibung |
|--------|--------------|
| **Single Object Tracking** | Ein Objekt über Zeit verfolgen |
| **Multi-Object Tracking** | Mehrere Objekte gleichzeitig |
| **Re-Identification** | Objekt nach Verdeckung wiederfinden |
| **Trajectory Analysis** | Bewegungspfade analysieren |

---

## Wie funktioniert es?

**Bei Foundation Models (Gemini):**
1. Video-Frames + Audio werden gemeinsam encodiert
2. Temporale Attention über Frame-Sequenzen
3. Multimodales Reasoning über Zeit
4. Antworten mit Timestamp-Referenzen

**Bei spezialisierten Modellen:**
- **Tracking:** SAM 2 mit Memory für Frame-zu-Frame-Konsistenz
- **Action Recognition:** 3D-CNNs oder Video Transformers
- **Summarization:** Frame Sampling + LLM-Aggregation

---

## Stärken

- **Zeitliche Dimension** – versteht Abläufe, nicht nur Snapshots
- **Audio-Integration** – Sprache und Sound mit einbeziehen (Gemini)
- **Lange Kontexte** – Gemini: bis zu 2 Stunden Video
- **Timestamp-Referenzen** – auf spezifische Momente verweisen

---

## Limitierungen

| Limitation | Workaround |
|------------|------------|
| **Schnelle Bewegungen** | Höhere Framerate oder Slow-Motion |
| **Lange Videos** | Kapitelweise verarbeiten |
| **Verdeckungen (Tracking)** | SAM 2 mit Memory-System |
| **Kleine Objekte** | Höhere Auflösung, Crop auf Region |
| **Audio-Qualität** | Transkription vorschalten |
| **Kosten bei Volumen** | Spezialisierte Modelle für Batch |

---

## Wann Video Understanding vs. Image Capabilities?

| Situation | Empfehlung |
|-----------|------------|
| Zeitlicher Ablauf wichtig | **Video Understanding** |
| Einzelbild reicht | Image Capabilities nutzen |
| Objekt über Zeit verfolgen | **Video Understanding** (Tracking) |
| Video zusammenfassen | **Video Understanding** |
| Nur ein Frame analysieren | [[Visual-QA]], [[Scene-Description]] |

---

## Tools im Überblick

### Foundation Models

| Tool | Video-Support | Stärke |
|------|---------------|--------|
| **Gemini 2.5 Pro** | Nativ, bis 2h | SOTA bei Video-Benchmarks, Audio+Video |
| **Gemini 2.5 Flash** | Nativ, bis 1h | Schnell, kosteneffizient |
| **GPT-4o** | Frames only | Kein natives Video |
| **Claude** | Frames only | Kein natives Video |

### Spezialisierte Tools

| Tool | Fokus | Use Case |
|------|-------|----------|
| **SAM 2** | Tracking + Segmentation | Video-Editing, Masking |
| **Twelve Labs** | Video Search & Understanding | Enterprise Video-Analyse |
| **YouTube Transcript** | Sprache → Text | Einfache Transkription |

### Gemini Video im Detail

- **Native Verarbeitung:** Video-Frames + Audio gleichzeitig
- **YouTube-Integration:** Direkte URL-Eingabe
- **Timestamp-Referenzen:** "Bei 2:34 passiert..."
- **Long Context:** Bis 8h Processing pro Tag (kostenlose Tier)

---

## Typische Workflows

### 1. Meeting-Protokoll
Meeting-Recording → Gemini → Zusammenfassung + Action Items + Timestamps

### 2. Content Review
Langes Video → Kapitelübersicht → Highlights extrahieren → Entscheidung

### 3. Video-zu-Text
Tutorial-Video → Transkription → Strukturierte Anleitung

### 4. Object Tracking für Editing
Video → SAM 2 Objekt markieren → Automatisches Tracking → Maske für jeden Frame

### 5. Sport-/Event-Analyse
Spielaufzeichnung → Action Recognition → Statistiken + Highlight-Reel

---

## Prompting-Tipps (Gemini)

**Für Zusammenfassung:**
> Fasse dieses Video zusammen. Gib die wichtigsten Punkte mit Timestamps an.

**Für Transkription:**
> Transkribiere die gesprochenen Inhalte dieses Videos.

**Für Event Detection:**
> Identifiziere alle wichtigen Ereignisse in diesem Video und gib den jeweiligen Timestamp an.

**Für Q&A über Video:**
> Bei welchem Timestamp wird [Thema X] besprochen?

**Für Action Analysis:**
> Beschreibe, was die Person im Video tut. Liste die Aktionen chronologisch auf.

---

## Integration mit anderen Capabilities

Video Understanding kombiniert oft mehrere Capabilities:

```
Video → Frame Extraction → Object Detection → Tracking → Analysis
                        → Scene Description → Summary
                        → OCR → Text Extraction
                        → Audio → Transcription
```

**Beispiel: Tutorial-Analyse**
1. **Video Understanding:** Kapitel und Timestamps
2. **OCR:** Code-Snippets aus Screencasts extrahieren
3. **Scene Description:** Was wird gezeigt?
4. **Summarization:** Zusammenfassung pro Kapitel

---

## Siehe auch

- [[Segmentation]] – SAM 2 für Video-Masking
- [[Object-Detection]] – Basis für Tracking
- [[Scene-Description]] – Frame-Level-Analyse
- [[02_Knowledge/AI-Media/Video/_MOC|AI Video MOC]] – Video Generation

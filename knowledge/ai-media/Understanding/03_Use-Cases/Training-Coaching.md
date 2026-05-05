---
title: Understanding/03_Use Cases/Training Coaching
type: reference
status: stable
created: '2026-01-27'
updated: '2026-01-27'
tags:
  - use-case
  - ai-media
  - understanding
  - training
  - coaching
  - video
sources:
  - 'self-authored:loschke:media-experimentation'
area: ai-media
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Use Case: Training & Coaching

> Video-Analyse für Skill-Development – von Präsentationen bis Bewegungsabläufe.

---

## Kernidee

Aufnahme von Performance → KI analysiert und gibt strukturiertes Feedback. Der "Personal Coach", der unendlich Geduld hat.

---

## Use Cases

### Präsentations-Training
Video-Aufnahme von Vortrag oder Pitch → Feedback zu Körpersprache, Blickkontakt, Pacing, Filler Words.

**Tools:** Gemini 2.5 Pro (Video), GPT-4o  
**Setup:** Smartphone-Aufnahme, Upload, Prompt für Feedback  
**Output:** Timestamps mit konkreten Verbesserungsvorschlägen

**Beispiel-Prompt:**
```
Analysiere diese Präsentation. Gib Feedback zu:
- Körpersprache und Gestik
- Sprechgeschwindigkeit und Pausen
- Filler Words ("ähm", "quasi", "sozusagen")
- Blickkontakt mit Kamera
Nenne konkrete Timestamps.
```

### Interview-Simulation
Bewerbungsgespräch oder Kundengespräch üben → Analyse der Antworten und Ausstrahlung.

**Tools:** Gemini 2.5 Pro  
**Setup:** Fragen vorab definieren, Antworten aufnehmen  
**Output:** Inhaltliches + nonverbales Feedback

### Bewegungsanalyse
Sport-Technik, Ergonomie, Physiotherapie-Übungen.

**Tools:** Gemini 2.5 Pro, spezialisierte Apps (z.B. OnForm, Dartfish)  
**Anwendungen:**
- Schwimmtechnik (Armzug, Wasserlage)
- Laufstil (Fußaufsatz, Kadenz)
- Kraftübungen (Form-Check)
- Ergonomie am Arbeitsplatz

**Hinweis:** Für präzise Bewegungsanalyse gibt es spezialisierte Tools mit Pose Estimation – generelle VLMs geben eher qualitatives Feedback.

### Workshop-Moderation Review
Aufnahme von eigenem Workshop → Analyse von Gruppendynamik, Zeitmanagement, Teilnehmer-Engagement.

**Tools:** Gemini 2.5 Pro (bei langen Videos)  
**Datenschutz:** Einwilligung der Teilnehmer erforderlich!

---

## Workflow

```
1. Aufnahme (Smartphone/Webcam genügt)
2. Upload zu Gemini / GPT-4o
3. Strukturierter Prompt mit Fokus-Bereichen
4. Feedback mit Timestamps
5. Gezielt an Schwachstellen arbeiten
6. Wiederholen
```

---

## Limitierungen

- Kein Ersatz für menschliches Coaching bei komplexen Skills
- Datenschutz bei Videos mit anderen Personen
- Qualitatives Feedback, keine biomechanische Präzision
- Gemini: max 2-4h Video pro Request

---

*Stand: Januar 2026*

---
title: Video/01_Capabilities/Text to Video
type: reference
status: stable
created: '2026-01-24'
updated: '2026-01-24'
tags:
  - capability
  - video
  - ai-media
  - t2v
sources:
  - 'self-authored:loschke:media-experimentation'
area: ai-media
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Text-to-Video (T2V)

> Die grundlegende Video-AI-Capability: Aus einer Textbeschreibung entsteht ein Video.

---

## Was ist Text-to-Video?

Text-to-Video generiert Videos direkt aus natürlichsprachlichen Beschreibungen – ohne Ausgangsmaterial wie Bilder oder bestehendes Footage. Das Modell interpretiert den Prompt und erzeugt Frames, Bewegung und (bei manchen Tools) Audio.

**Typische Outputs:** 4-16 Sekunden Clips, 720p-4K, 24-30fps

---

## Wie funktioniert es?

1. **Prompt-Analyse:** Das Modell extrahiert Szene, Subjekte, Aktionen, Stil
2. **Latent Space Generation:** Ähnlich wie bei Bildern, aber mit zeitlicher Dimension
3. **Frame-Kohärenz:** Temporal Attention sorgt für konsistente Bewegung
4. **Upscaling/Refinement:** Finale Qualitätsverbesserung

---

## Stärken

- **Maximale kreative Freiheit** – jede Szene ist möglich
- **Keine Assets nötig** – kein Quellmaterial erforderlich
- **Schnelle Iteration** – Prompt anpassen, neu generieren
- **Konsistenter Stil** – einheitliche Ästhetik pro Clip

---

## Limitierungen

| Limitation | Workaround |
|------------|------------|
| **Kurze Clips** (4-16 Sek) | Multi-Shot mit Stitching, oder längere Tools (Kling: 2 Min) |
| **Character Consistency** | Detaillierte Beschreibungen, Character Sheets, I2V für Konsistenz |
| **Präzise Bewegung** | Motion Control Features (Kling), Camera Presets |
| **Komplexe Interaktionen** | In mehrere Shots aufteilen |
| **Text im Video** | Oft unleserlich – Post-Production oder spezialisierte Tools |
| **Hände & Finger** | Verbessernd, aber noch problematisch |

---

## Wann T2V vs. andere Capabilities?

| Situation | Empfehlung |
|-----------|------------|
| Komplett neue Szene ohne Referenz | **T2V** |
| Bestehendes Bild animieren | [[Image-to-Video]] |
| Bestehendes Video transformieren | [[Video-to-Video]] |
| Spezifischen Charakter/Stil fortführen | I2V mit Referenzbild |
| Maximale Kontrolle über Bewegung | I2V + Motion Control |

---

## Tools im Vergleich

| Tool | Max. Länge | Audio | Stärke |
|------|-----------|-------|--------|
| **Veo 3** | 8 Sek | Ja (nativ) | Realismus, Audio-Integration |
| **Kling 2.0** | 2 Min | Nein | Lange Videos, Motion Control |
| **Runway Gen-3** | 10 Sek | Nein | Stilkonsistenz, Motion Brush |
| **Pika 2.0** | 5 Sek | Nein | Schnell, günstig |
| **Sora** | 60 Sek | Nein | Längste Clips (noch limitiert) |

→ Details: [[AI-Video-Tools-Übersicht]]

---

## Prompting

Für effektives T2V-Prompting siehe das [[Video-Prompting-Framework]]:

**Kern-Formel:**
```
[Cinematography] + [Subject] + [Action] + [Context] + [Style] + [Audio]
```

**Beispiel:**
> Medium shot, eye-level, slow dolly in. A scientist in a white lab coat examines a glowing vial. Sterile laboratory with blue fluorescent lighting. Cinematic, tense mood. SFX: Electrical hum. She whispers: "It's alive."

---

## Typische Workflows

### 1. Single-Shot Content
Prompt → Generate → Minor Edits → Export

### 2. Multi-Shot Storytelling
1. Storyboard mit Shot-Beschreibungen
2. Jeden Shot einzeln generieren
3. In Editor zusammenfügen (CapCut, Premiere)
4. Übergänge, Audio, Color Grading

### 3. Iterative Refinement
1. Grober Prompt für Konzept-Test
2. Prompt verfeinern basierend auf Output
3. Beste Takes auswählen
4. Post-Production für finale Qualität

---

## Siehe auch

- [[Video-Prompting-Framework]] – Detailliertes Prompting-Framework
- [[Image-to-Video]] – Animation von Bildern
- [[Video-to-Video]] – Transformation von Videos
- [[AI-Video-Tools-Übersicht]] – Tool-Vergleich
- [[03_Use-Cases/Storytelling|Storytelling Use Case]] – Narrative Anwendung

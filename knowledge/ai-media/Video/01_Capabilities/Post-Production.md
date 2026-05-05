---
title: Video/01_Capabilities/Post Production
type: reference
status: stable
created: '2026-01-24'
updated: '2026-01-24'
tags:
  - capability
  - video
  - ai-media
  - post-production
  - enhancement
  - editing
sources:
  - 'self-authored:loschke:media-experimentation'
area: ai-media
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Post-Production

> Qualitätsverbesserung und gezielte Bearbeitung von AI-generierten Videos – Upscaling, Frame Interpolation, Inpainting, Lip-Sync.

---

## Überblick

Post-Production bei AI-Video umfasst zwei Bereiche:

| Bereich | Ziel | Typische Tools |
|---------|------|----------------|
| **Enhancement** | Qualität verbessern ohne Inhalt zu ändern | Topaz, DaVinci, RIFE |
| **Editing** | Gezielte Änderungen am Inhalt | Runway, HeyGen, ProPainter |

**Warum relevant:** AI-generierte Videos haben oft 720p, 24fps, Artefakte. Post-Production hebt sie auf Broadcast-Qualität.

---

## Enhancement

### Upscaling

720p → 4K durch AI-basierte Detailrekonstruktion.

| Tool | Stärke | Anmerkung |
|------|--------|-----------|
| **Topaz Video AI** | Industrie-Standard | Lokal, GPU-intensiv |
| **DaVinci Resolve** | Integriert | Super Scale in Studio-Version |
| **AVCLabs** | Cloud-basiert | Einfacher Einstieg |

**Workflow:**
```
AI-Video (720p) → Topaz (4K Upscale) → Export
```

**Tipps:**
- Upscaling verstärkt Artefakte – erst Denoising
- 2x ist meist besser als 4x
- Rechenzeit: ~1-5 Minuten pro Sekunde Video

### Frame Interpolation

24fps → 60fps durch generierte Zwischenframes.

| Tool | Stärke |
|------|--------|
| **RIFE** | Open Source, schnell |
| **Flowframes** | GUI für RIFE |
| **Topaz** | Integriert mit Upscaling |

**Anwendung:**
- Slow-Motion aus normalem Footage
- Flüssigere Bewegung für Gaming-Content
- Problematisch bei schnellen Schnitten

### Denoising & Stabilization

- **Denoising:** Rauschen entfernen (besonders bei dunklen Szenen)
- **Stabilization:** Ungewolltes Wackeln glätten
- Beides in Topaz und DaVinci integriert

---

## Editing

### Inpainting / Object Removal

Objekte entfernen, Bereiche füllen – Frame für Frame.

| Tool | Stärke |
|------|--------|
| **Runway** | Integriert, einfach |
| **ProPainter** | Open Source, präziser |
| **After Effects** | Content-Aware Fill |

**Typische Anwendungen:**
- Unerwünschte Objekte entfernen
- Wasserzeichen entfernen
- Hintergrund ersetzen

**Limitierung:** Temporal Consistency – über viele Frames schwierig.

### Lip-Sync

Lippenbewegung an neues Audio anpassen.

| Tool | Stärke | Anmerkung |
|------|--------|-----------|
| **HeyGen** | Beste Qualität | Kommerziell, teuer |
| **Akool** | Gut, günstiger | |
| **Vozo AI** | Spezialisiert | |

**Anwendungen:**
- Übersetzung mit angepassten Lippen
- Korrektur von asynchronem Dialog
- Voice-Over mit passendem Mundbild

**Ethik:** Lip-Sync ohne Consent der gefilmten Person ist problematisch. Kennzeichnungspflicht beachten.

### Background Replacement

| Tool | Stärke |
|------|--------|
| **Unscreen** | Automatisch, schnell |
| **Remove.bg** | Einzelframes |
| **DaVinci Resolve** | Magic Mask |

---

## Workflow-Beispiele

### Standard Enhancement Pipeline

```
1. AI-Video generieren (Kling/Runway, 720p)
2. Denoising (Topaz)
3. Upscaling 2x (Topaz)
4. Frame Interpolation 24→60fps (optional)
5. Color Grade (DaVinci)
6. Export
```

### Editing Pipeline

```
1. AI-Video generieren
2. Inpainting für Korrekturen (Runway)
3. Audio hinzufügen (ElevenLabs)
4. Lip-Sync anpassen (HeyGen)
5. Enhancement
6. Export
```

---

## Tool-Entscheidungsmatrix

| Aufgabe | Beste Option | Alternative |
|---------|--------------|-------------|
| Upscaling | Topaz Video AI | DaVinci Super Scale |
| Frame Interpolation | RIFE / Flowframes | Topaz |
| Object Removal | Runway | ProPainter |
| Lip-Sync | HeyGen | Akool |
| Background | Unscreen | DaVinci Magic Mask |
| All-in-One | DaVinci Resolve | |

---

## Grenzen

**Was Post-Production nicht repariert:**
- Fundamentale Inkonsistenzen (Charakter sieht in Frame 50 anders aus)
- Physikalisch unmögliche Bewegung
- Komplett falsche Komposition

**Faustregel:** Wenn das Basis-Video schlecht ist, lieber neu generieren statt stundenlang reparieren.

---

## Siehe auch

- [[AI-Video-Tools-Übersicht]] – Generierungs-Tools
- [[01_Capabilities/Image-to-Video|Image-to-Video]] – Workflow für bessere Basis
- [[Audio-Prompting]] – Native Audio vs. Post-Audio

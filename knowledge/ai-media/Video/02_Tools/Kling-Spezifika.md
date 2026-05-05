---
title: Video/02_Tools/Kling Spezifika
type: reference
status: living
created: '2026-01-24'
updated: '2026-01-24'
tags:
  - tool
  - video
  - ai-media
  - kling
  - reference
sources:
  - 'self-authored:loschke:media-experimentation'
area: ai-media
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Kling Spezifika

> **Tool-Typ:** AI Video Generator (Text-to-Video, Image-to-Video, Video-to-Video)
> **Entwickler:** Kuaishou
> **Aktuelle Version:** Kling 2.6 (Stand Januar 2026)
> **Stärken:** Motion Control, Lip-Sync, Lange Videos (bis 2 Min), Elements für Character Consistency

---

## Modell-Übersicht

Kling bietet mehrere Modelle mit unterschiedlichen Stärken:

| Modell | Stärke | Element-Limit | Ideal für |
|--------|--------|---------------|-----------|
| **Kling O1** | Höchste Komplexität, UGC-Style | 7+ Elemente | Produkt-Demos, realistische Clips |
| **Kling 2.6** | Native Audio, beste Physik | 5-7 Elemente | Audio-Video-Sync, Motion Control |
| **Kling 2.5 Turbo** | Schnell, gute Qualität | 3-4 Elemente | Schnelle Iteration, Produktionsvolumen |
| **Kling 1.6** | Motion Brush, günstig | 2-3 Elemente | Einfache Animationen, Budget |

---

## Kernfeatures

### Motion Control (Kling 2.6)

Das Signature-Feature von Kling. Bewegung von Reference-Video auf neuen Character übertragen.

**Workflow:**
1. Reference-Video hochladen (3-30 Sekunden)
2. Character-Bild hochladen
3. Prompt beschreibt nur Umgebung und Look – NICHT die Bewegung

**Wichtig:** Motion Control übernimmt automatisch:
- Gesichtsausdrücke
- Körperbewegungen
- Timing und Pacing
- Hand-Gesten (verbessert in 2.6)

**Prompt-Fokus bei Motion Control:**
```
❌ "The character dances and moves arms" (redundant – kommt aus Video)
✅ "Place character in modern office, soft daylight, shallow depth of field"
```

### Elements (Character Consistency)

4-Bild-System für konsistente Charaktere über mehrere Shots.

**Best Practice:**
- 4 verschiedene Winkel des Characters
- Gleiche Beleuchtung in allen Referenzbildern
- Klare Konturen, keine Verdeckungen

### Native Audio (Kling 2.6)

Generiert Sound synchron zum Video:
- Sprache und Dialog
- Sound Effects
- Ambient Sounds
- Musik (inkl. Gesang)

**Lip-Sync Workflow:**
1. Audio mit ElevenLabs oder Suno erstellen
2. In Kling mit Character-Referenz hochladen
3. Lip-Sync-Mode aktivieren

---

## Prompt-Formel

```
[Camera Movement] + [Shot Type] + [Subject + Action] + [Environment + Lighting] + [Style + Mood]
```

### Die 4 Pflicht-Elemente

| Element | Beschreibung | Beispiel |
|---------|--------------|----------|
| **Subject** | Wer/Was ist im Fokus | "A ballerina in white tutu" |
| **Action** | Präzise Bewegung | "performing pirouette, arms extended" |
| **Context** | Umgebung (max 3-5 Elemente) | "abandoned warehouse at sunset, dust particles" |
| **Style** | Kamera, Licht, Mood | "tracking shot, golden hour, melancholic" |

### Kamera-Begriffe die Kling versteht

**Bewegungen:**
- Tracking shot, Dolly in/out, Pan left/right
- Tilt up/down, Crane shot, Drone ascending
- Push in, Pull back, Orbit around
- Handheld (für natürlichen Shake)

**Shot Types:**
- Close-up, Medium shot, Wide establishing shot
- Low angle, High angle, Eye-level
- POV angle, Overhead view

### Bewegungs-Modifikatoren

| Intensität | Wörter |
|------------|--------|
| Subtil | gentle, slow, slight, subtle |
| Moderat | steady, natural, smooth |
| Dynamisch | rapid, energetic, dramatic, intense |

**Wichtig:** Immer Bewegungs-Endpunkt angeben!
```
❌ "The character walks"
✅ "The character walks toward the camera, then stops and looks up"
```

---

## Text-to-Video vs Image-to-Video

### Text-to-Video (TTV)

Komplette Szenenbeschreibung nötig:
- Alle visuellen Elemente
- Kamera und Licht
- Bewegung und Timing
- 50-80 Wörter typisch

**Beispiel TTV-Prompt:**
```
Tracking shot following a cyclist from low angle, capturing speed. 
Golden hour light creates long shadows on the asphalt.
Wind-blown hair, dust particles in air.
Cinematic, warm color grading, slight lens flare.
```

### Image-to-Video (ITV)

NUR Bewegungsinstruktionen – Bild NICHT beschreiben!
- Fokus auf Motion
- 20-40 Wörter
- Was bewegt sich, was bleibt still

**Beispiel ITV-Prompt:**
```
Camera slowly tracks right, maintaining focus on central figure.
Subtle wind animation affecting hair and clothing.
Leaves in background sway gently.
Warm lighting gradually intensifies.
```

---

## Timeline-Prompting (Kling-Spezialität)

Kling versteht zeitbasierte Anweisungen besonders gut:

```
0-2s: Figure stands still, wind building around her
2-4s: Cape begins to flutter, hair moves gently
4-6s: Full motion, dramatic pose, camera pushes in
```

**Audio-Sync Workflow:**
```
Beat 0-4s: Slow motion, character walks toward camera
Beat 4s: EXPLOSION of color, rapid zoom (synced to bass drop)
Beat 8s: Character lip syncs vocal line
```

---

## Häufige Fehler und Fixes

### Problem: Generation hängt bei 99%

**Ursache:** Open-ended Motion ohne Endpunkt
**Fix:** Endpunkt definieren
```
❌ "The woman dances gracefully"
✅ "The woman dances gracefully, then settles back into a standing pose"
```

### Problem: Verzerrungen/Artefakte

**Ursache:** Zu viele Elemente oder widersprüchliche Anweisungen
**Fix:** Element-Count reduzieren
- Kling 2.5: Max 3-4 Elemente
- Kling 2.6: Max 5-7 Elemente

### Problem: Kamera bewegt sich nicht

**Ursache:** Fehlende Kamera-Anweisung
**Fix:** Immer explizit Kamerabewegung angeben
```
✅ "Tracking shot following from side"
✅ "Static camera, locked off frame"
```

### Problem: Content-Filter blockt

**Ursache:** Unschuldige Wörter triggern Filter
**Fix:** Alternative Formulierungen
- "nude" → "bare skin" oder komplett vermeiden
- "blood" → "red liquid"
- Körperteile vorsichtig formulieren

### Problem: Objekte ändern sich mid-video

**Ursache:** Motion Continuity > Object Consistency
**Fix:** 
- Kürzere Clips generieren
- "Consistent appearance" in Prompt
- Elements-Feature nutzen

---

## Physik-Verständnis

Kling 2.5+ versteht physikalische Eigenschaften besonders gut:

**Nutze physikalische Beschreibungen:**
```
✅ "Fabric drapes with natural weight"
✅ "Water surface ripples from impact"
✅ "Hair flows with realistic physics"
✅ "Leaves swirl in turbulent wind"
```

**Spezifische Stärken:**
- Schwerkraft und Gewicht
- Flüssigkeits-Dynamik
- Stoff-Bewegung
- Haar- und Fell-Physik

---

## Technische Specs

| Parameter | Wert |
|-----------|------|
| **Max Auflösung** | 1080p HD |
| **Max Länge** | 2 Minuten (!) |
| **Clip-Optionen** | 5s, 10s |
| **Framerate** | 30fps |
| **Generierungszeit** | 5-30 Minuten |

---

## Workflow-Empfehlungen

### Schnelle Iteration
```
Kling 2.5 Turbo → Test mit vereinfachtem Prompt → Verfeinern → Kling 2.6 für Final
```

### Audio-Video-Produktion
```
Suno/ElevenLabs (Audio) → Rhythm-Analyse → Timeline-Prompt → Kling 2.6 mit Lip-Sync
```

### Character-Konsistenz
```
Midjourney (4 Winkel) → Elements hochladen → Motion Control mit Reference-Video
```

---

## Siehe auch

- [[00_Prompting/Video-Prompting-Framework|Video-Prompting-Framework]] – Grundlagen
- [[00_Prompting/Camera-Motion-Prompting|Camera-Motion-Prompting]] – Kamerabewegung
- [[00_Prompting/Audio-Prompting|Audio-Prompting]] – Audio-Integration
- [[01_Capabilities/Image-to-Video|Image-to-Video]] – I2V Best Practices
- [[AI-Video-Tools-Übersicht]] – Tool-Vergleich

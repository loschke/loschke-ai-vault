---
title: Video/02_Tools/Runway Spezifika
type: reference
status: living
created: '2026-01-24'
updated: '2026-01-24'
tags:
  - tool
  - video
  - ai-media
  - runway
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
# Runway Spezifika

> **Tool-Typ:** AI Video Generator (Text-to-Video, Image-to-Video)
> **Entwickler:** Runway AI, Inc.
> **Aktuelle Version:** Gen-4.5 (Stand Januar 2026)
> **Stärken:** Prompt-Adherence, Kamera-Choreografie, Visual Fidelity, Cinematic Quality

---

## Modell-Übersicht

| Modell | Stärke | Speed | Ideal für |
|--------|--------|-------|-----------|
| **Gen-4.5** | Beste Qualität, komplexe Sequenzen | Langsam | Finale Produktion, Kinematografie |
| **Gen-4** | Konsistenz, gute Kamera-Kontrolle | Mittel | Standard-Produktion |
| **Gen-4 Turbo** | 3x schneller, kosteneffizient | Schnell | Iteration, Volumen |
| **Gen-3 Alpha** | Legacy, Camera Control UI | Mittel | Spezielle Kamera-Presets |

**Hinweis:** Gen-2 wurde im Mai 2025 deprecated. Motion Brush ist nicht mehr verfügbar – stattdessen bessere Prompt-Adherence.

---

## Kernphilosophie: Simplicity First

Runway's Modelle reagieren am besten auf **einfache, klare Prompts**:

```
❌ "Can you please generate a video of a dramatic sunset with birds flying?"
✅ "Cinematic wide shot of sunset, birds flying across golden sky"
```

**Runway-Mindset:** "Kinetic Sculptor" – denkt in Physik, Kräften, Momentum.

---

## Prompt-Struktur

### Empfohlene Formel

```
[Camera Movement]: [Establishing Scene]. [Additional Details].
```

**Beispiel:**
```
Low angle static shot: The camera is angled up at a woman wearing orange 
as she stands in a tropical rainforest with colorful flora. 
The dramatic sky is overcast and gray.
```

### Die 4 Kernelemente

| Element | Beschreibung | Beispiel |
|---------|--------------|----------|
| **Subject Motion** | Wie Charaktere/Objekte sich bewegen | "The subject slowly turns her head right" |
| **Camera Motion** | Kamera-Choreografie | "Camera dollies back, revealing cityscape" |
| **Scene Motion** | Umgebungsbewegung | "Leaves swirl in the wind, clouds drift" |
| **Style** | Ästhetik und Mood | "Cinematic, warm-toned, soft lighting" |

---

## Kamera-Kontrolle

### Bewegungstypen

| Bewegung | Beschreibung | Anwendung |
|----------|--------------|-----------|
| **Tracking** | Folgt Subjekt horizontal/vertikal | Action, Verfolgung |
| **Panning** | Kamera rotiert horizontal | Reveals, Szenen-Überblick |
| **Tilting** | Kamera rotiert vertikal | Höhe zeigen, Reveals |
| **Dolly** | Kamera bewegt sich vor/zurück | Intimität, Drama |
| **Handheld** | Leichter Shake | Realismus, Dokumentar-Feel |
| **Crane** | Vertikale Fahrt | Epische Shots, Establishing |
| **Orbit** | Kreisbewegung um Subjekt | Produkt-Shots, Drama |

### Kombinierte Bewegungen

Runway versteht kombinierte Kamerabewegungen:
```
"Camera slowly booms up, sweeping over the ledge, then pulls back to reveal the landscape"
```

**Tipp:** Ähnliche Controls kombinieren für bessere Ergebnisse:
- Pan + Horizontal Movement
- Tilt + Vertical Movement

---

## Text-to-Video Best Practices

### Do's

- **Visuelle Details** statt Konversation
- **Klare Verben** für Bewegung (walks, turns, glides)
- **Ein Fokus pro Szene** (5-10 Sekunden = eine Szene)
- **Style Keywords** am Ende anhängen

### Don'ts

- **Keine negativen Prompts** ("no clouds" kann Gegenteil bewirken)
- **Keine Konversations-Elemente** ("Can you please...")
- **Nicht mehrere Szenen** in einem Prompt
- **Keine widersprüchlichen Anweisungen**

### Beispiel-Prompts

**Cinematic Landscape:**
```
A solitary figure walks along a windswept ridge as sky shifts from blue to orange.
Camera begins wide and slowly pushes in, revealing dust catching the light.
The character stops, turns toward horizon. Subtle lens flares, natural motion blur.
```

**Product Shot:**
```
Static shot of a burger assembling in mid-air, dramatic slow-motion.
Individual ingredients fly into place from different directions.
Clean professional studio gradient background.
Style: TV food commercial.
```

**Emotional Close-up:**
```
Locked-off close-up of young woman reading sad message on phone.
She slowly lowers the phone, face remains visible.
Background movement continues naturally.
Single continuous take, quiet subway station.
```

---

## Image-to-Video Best Practices

### Input-Bild Anforderungen

- **Auflösung:** Idealerweise 1080p+
- **Qualität:** Scharf, gut belichtet, keine Artefakte
- **Keine Text-Overlays** oder Wasserzeichen
- **Guter Kontrast** und klare Konturen

### Prompt-Fokus bei ITV

**NUR Bewegung beschreiben** – nicht das Bild wiederholen:
```
❌ "A woman in a red dress standing in a field..."
✅ "Camera slowly tracks right, wind animates hair and dress, 
    warm lighting gradually intensifies"
```

---

## Gen-4.5 Besonderheiten

Gen-4.5 versteht komplexe, sequenzierte Anweisungen:

**Detaillierte Kamera-Choreografie:**
```
Camera starts tight on hands, then slowly tilts up to reveal face,
continues rising to show the full room behind the subject.
```

**Präzises Timing:**
```
Subject walks for 2 seconds, pauses, 
then turns to face camera with slight smile forming.
```

**Atmosphärische Veränderungen:**
```
Scene begins in shadow, warm light gradually floods the room
as curtains are drawn apart.
```

---

## Style Keywords

### Mood/Atmosphäre
- Cinematic, dramatic, intimate, serene
- Melancholic, hopeful, eerie, tense
- Nostalgic, dreamlike, raw

### Visuelle Stile
- Film noir, cyberpunk aesthetic, vintage film
- Golden hour, harsh midday, neon-lit
- Shallow depth of field, lens flare

### Bewegungsstile
- Smooth animation, live action, stop motion
- Slow motion, real time, time-lapse
- Handheld, stabilized, locked-off

---

## Troubleshooting

### Problem: Motion Blur Artefakte

**Ursache:** Zu schnelle Bewegung
**Fix:** "Crisp motion" in Prompt, langsamere Bewegung beschreiben

### Problem: Unnatürliche Physik

**Ursache:** Komplexe Szene überfordert Modell
**Fix:** In einfachere Sub-Szenen aufteilen

### Problem: Stil-Inkonsistenz

**Ursache:** Widersprüchliche Style-Keywords
**Fix:** Konsistente Beleuchtung, einen Stil wählen
```
❌ "golden hour with studio lighting" (widersprüchlich)
✅ "warm natural light through window" (konsistent)
```

### Problem: Prompt wird ignoriert

**Ursache:** Zu komplexer/langer Prompt
**Fix:** Vereinfachen, Kern-Aktion fokussieren

---

## Motion Brush Alternative

Motion Brush war ein Gen-2 Feature und ist **nicht mehr verfügbar**.

**Stattdessen:** Gen-4+ bietet verbesserte Prompt-Adherence

```
Früher (Gen-2): Motion Brush → Bereich markieren → Richtung wählen
Jetzt (Gen-4+): "The clouds drift slowly left, while the figure remains still"
```

**Selective Motion durch Prompting:**
```
"Static camera, locked frame. Only the water ripples gently, 
everything else remains perfectly still."
```

---

## Technische Specs

| Parameter | Gen-4 | Gen-4.5 |
|-----------|-------|---------|
| **Auflösung** | 1080p | 1080p |
| **Clip-Länge** | 5s, 10s | 5s, 10s |
| **Text-to-Video** | ✅ | ✅ |
| **Image-to-Video** | ✅ | Coming |
| **Turbo-Variante** | ✅ (3x schneller) | - |

---

## Workflow-Empfehlungen

### Iteration
```
Gen-4 Turbo (schnelle Tests) → Gen-4 (Refinement) → Gen-4.5 (Final)
```

### Hybrid-Pipeline
```
Midjourney (Keyframe) → Runway Gen-4 (Motion) → Topaz (4K Upscale)
```

### Szenen-Konsistenz
```
1. Charakteristisches Input-Bild erstellen
2. Stil und Beleuchtung in jedem Prompt identisch halten
3. Gleiche Camera-Family verwenden (alle frontal ODER alle profile)
```

---

## Vergleich mit Veo 3

| Aspekt | Runway Gen-4 | Veo 3 |
|--------|--------------|-------|
| **Stärke** | Kamera-Kontrolle, Physik | Audio, Strukturierte Daten |
| **Prompt-Stil** | Visuell, filmisch | Strukturiert, technisch |
| **Auflösung** | 1080p | 4K |
| **Audio** | Nein | Ja (nativ) |
| **Clip-Länge** | 5-10s | 8s |

---

## Siehe auch

- [[00_Prompting/Video-Prompting-Framework|Video-Prompting-Framework]] – Grundlagen
- [[00_Prompting/Camera-Motion-Prompting|Camera-Motion-Prompting]] – Kamerabewegung
- [[01_Capabilities/Image-to-Video|Image-to-Video]] – I2V Best Practices
- [[02_Tools/Veo-3-Spezifika|Veo 3 Spezifika]] – Vergleich
- [[AI-Video-Tools-Übersicht]] – Tool-Vergleich

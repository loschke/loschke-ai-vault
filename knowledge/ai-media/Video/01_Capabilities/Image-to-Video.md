---
title: Video/01_Capabilities/Image to Video
type: reference
status: stable
created: '2026-01-24'
updated: '2026-01-24'
tags:
  - reference
  - video
  - ai-media
  - workflow
  - i2v
sources:
  - 'self-authored:loschke:media-experimentation'
area: ai-media
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Image-to-Video Best Practices

> **Scope:** Tool-agnostischer Leitfaden für I2V-Workflows. Gilt für Veo 3, Runway Gen-4, Kling, Midjourney Video, Hailuo und andere.

---

## Warum Image-to-Video?

Text-to-Video ist unberechenbar. Du beschreibst eine Szene, das Modell interpretiert – oft anders als gedacht. Image-to-Video dreht die Kontrolle um: Du definierst das Startbild exakt, das Modell fügt nur Bewegung hinzu.

**Vorteile gegenüber T2V:**
- Präzise visuelle Kontrolle (Komposition, Farben, Stil)
- Konsistentere Ergebnisse
- Bessere Character Consistency
- Schnellere Iteration (Bild anpassen statt Prompt umschreiben)

---

## Input-Bild: Die Grundlage

### Hochwertige Startbilder erstellen

Für optimale I2V-Ergebnisse solltest du Startbilder mit spezialisierten Image-Tools erstellen statt auf Video-Tool-Generierung zu vertrauen.

→ **[[02_Knowledge/AI-Media/Images/02_Generation/4K-Framework/_4K-Framework|4K-Framework]]** – Strukturiertes Vorgehen für hochwertige Bildgenerierung mit Konzept, Kontext, Komposition, Kreativität

**Empfohlene Tools für Startbilder:**
- **Midjourney V7** – Beste Qualität, konsistenter Stil
- **Flux** – Realismus, Texte
- **Google Nano Banana Pro** – Konstistente Szenen
### Technische Anforderungen

| Parameter | Empfehlung | Warum |
|-----------|------------|-------|
| **Auflösung** | Min. 1080px kürzeste Seite, ideal 1920×1080+ | Höhere Auflösung = mehr Details für das Modell |
| **Format** | JPG oder PNG | WEBP/HEIC vorher konvertieren |
| **Kompression** | Minimal | Artefakte werden verstärkt |
| **Beleuchtung** | Gut ausgeleuchtet, klare Schatten | Modelle kämpfen mit Unterbelichtung |

### Kompositions-Prinzipien

**Klare Subjekt-Trennung:** Das Hauptmotiv muss sich deutlich vom Hintergrund abheben. Verschwommene Grenzen = verschwommene Animation.

**Bewegungsraum einplanen:** Wenn der Charakter nach rechts laufen soll, braucht er Platz rechts im Bild. Wenn die Kamera zurückfährt, muss genug Umgebung vorhanden sein.

**Keine übermäßige Komplexität:** Viele kleine Details (Blätter, Haare, Wassertropfen) führen zu Artefakten. Lieber klare Formen, die das Modell animieren kann.

→ Siehe auch [[02_Knowledge/AI-Media/Images/02_Generation/4K-Framework/03-Komposition|Komposition im 4K-Framework]]

**Aspektverhältnis von Anfang an:**

| Zielplattform | Ratio | Pixel |
|---------------|-------|-------|
| YouTube/Desktop | 16:9 | 1920×1080 |
| TikTok/Reels | 9:16 | 1080×1920 |
| Instagram Feed | 1:1 | 1080×1080 |
| Cinematic | 21:9 | 2560×1080 |

→ Das Aspektverhältnis des Input-Bilds bestimmt das Output-Video. Nachträgliches Croppen verliert Information.

---

## End-Frame für bessere Kontrolle

Einige Tools (Kling, Runway) unterstützen Start- UND End-Frame. Das gibt dir maximale Kontrolle über die Bewegung.

**Workflow mit Start/End-Frame:**
1. Startbild erstellen (4K-Framework)
2. Endbild erstellen (gleicher Stil, andere Position/Pose)
3. Tool interpoliert die Bewegung dazwischen

**Tipps für End-Frames:**
- Gleiche Beleuchtung wie Startbild
- Realistischer Bewegungsradius (nicht zu weit)
- Character Consistency beachten (Kleidung, Merkmale identisch)

---

## Motion Prompting: Bewegung beschreiben

### Anatomie eines guten Motion Prompts

```
[Aktion] + [Richtung/Intensität] + [Atmosphäre/Licht]
```

**Beispiele:**

| Schwach | Stark |
|---------|-------|
| "add motion" | "gentle ocean waves flowing toward shore, foam catching golden light" |
| "make it move" | "camera slowly dollies back, revealing the full cityscape" |
| "animate the person" | "woman turns her head right, hair flowing with the movement, soft smile forming" |

→ **Vertiefung:** [[00_Prompting/Camera-Motion-Prompting|Camera-Motion-Prompting]] für Kamerabewegung

### Action Verbs nach Kategorie

**Kamera:**
- Dolly (in/out), Pan (left/right), Tilt (up/down)
- Zoom (in/out), Track (follow subject), Crane (vertical movement)
- Push in, Pull back, Orbit (around subject)

**Subjekt:**
- Walk, Run, Turn, Gesture
- Breathe, Blink, Smile, Nod
- Float, Fall, Rise, Spin

**Umgebung:**
- Sway, Flutter, Ripple, Shimmer
- Drift, Flow, Cascade, Billow

### Intensitäts-Modifikatoren

| Intensität | Wörter |
|------------|--------|
| Subtil | gentle, subtle, slight, barely perceptible |
| Moderat | steady, natural, smooth, flowing |
| Stark | dramatic, dynamic, rapid, intense |

**Faustregel:** Starte moderat. Zu viel Bewegung = Verzerrungen und Artefakte.

---

## Tool-spezifische Strategien

### Veo 3 (Google)

**Mindset:** "Rendering Engine" – liebt strukturierte Daten.

**Prompting-Stil:**
```
Subject: [was bewegt sich]
Action: [exakte Bewegung]
Camera: [Kamerabewegung]
Atmosphere: [Licht, Stimmung]
Duration: [wenn steuerbar]
```

**Stärken:** 4K-Qualität, native Audio-Generierung, Lip-Sync
**Schwächen:** Max 8 Sekunden, begrenzte Kamerakontrolle

→ Details: [[02_Tools/Veo-3-Spezifika|Veo 3 Spezifika]]

### Runway Gen-4

**Mindset:** "Kinetic Sculptor" – denkt in Physik.

**Prompting-Stil:** Beschreibe Kräfte, Momentum, Gewicht.
- "The fabric drapes with natural weight, swaying as air currents catch it"
- "Impact force ripples through the water surface"

**Nutze Motion Brush:** Markiere Bereiche, die sich bewegen sollen. Unterschiedliche Geschwindigkeiten für Vorder-/Hintergrund.

**Stärken:** Camera Control, Multi-Motion Brush, Character Consistency über Shots
**Schwächen:** 720p nativ, 4-Sekunden-Clips

→ Details: [[02_Tools/Runway-Spezifika|Runway Spezifika]]

### Kling AI

**Mindset:** "Audio-Visual Choreographer" – Timeline-basiert.

**Prompting-Stil:** Denke in Beats und Sequenzen.
- "0-2s: figure stands still, wind building"
- "2-4s: cape begins to flutter, hair moves"
- "4-6s: full motion, dramatic pose"

**Elements-Feature:** Lade 4 Referenzbilder für Character Consistency.

**Stärken:** 2-Minuten-Videos (!), beste Bewegungsqualität, Lip-Sync
**Schwächen:** Langsame Generierung (5-30 Min), strikte Content-Filter

→ Details: [[02_Tools/Kling-Spezifika|Kling Spezifika]]

### Midjourney Video

**Besonderheit:** Nur Image-to-Video, kein Text-to-Video.

**Workflow:**
1. Erstelle Bild in MJ V7
2. Klicke "Animate"
3. 4 Varianten à 480p, 24fps, 5 Sekunden
4. Extend in 4-Sekunden-Schritten (max 21 Sek)

**Motion-Hints:** Textbeschreibungen für Richtung + High/Low Motion Settings.

**Stärken:** Künstlerisch-träumerischer Stil, natürliche Bewegung
**Schwächen:** 480p Auflösung (!), keine Kamera-Presets

### Hailuo AI

**Mindset:** Cinematic Movement – Kamera-fokussiert.

**Nutze Visual Presets:** Voreinstellungen für Kamerabewegungen sind stärker als Textprompts.

**Stärken:** Flüssige Kamerabewegung, gute Prompt-Treue, schnell
**Schwächen:** 720p Standard, kurze Clips (6-10 Sek)

---

## Midjourney → Video Pipeline

### Referenzbild-Erstellung in Midjourney

**V7 für höchste Qualität.** Ältere Versionen haben weniger Details.

**Omni-Reference (--oref) für Character Consistency:**
```
/imagine [prompt] --oref [reference-image-URL] --ow 100
```

**--ow Parameter (Omni-Weight):**

| Wert | Effekt |
|------|--------|
| 25-50 | Subtil, mehr Stil-Transfer |
| 100 | Balanciert (Default) |
| 200-300 | Starke Guidance, nah am Original |

**Best Practices für Video-optimierte MJ-Bilder:**
- Klare Subjekt-Trennung (kein busy background)
- Natürliche Posen (extreme Verrenkungen animieren schlecht)
- Ausgewogene Belichtung (keine Crushed Blacks/Blown Highlights)
- Finale Aspect Ratio bereits im MJ-Prompt

### Hybrid-Workflows

**Höchste Qualität:**
```
Midjourney (Keyframe) → Kling/Runway (Motion) → Topaz (4K Upscale)
```

**VFX Compositing:**
```
Stable Diffusion (AnimateDiff für Elemente) → After Effects (Layer Control)
```

**Narrative Storytelling:**
```
Midjourney (Character Design) → Veo 3 Flow (Multi-Shot Consistency)
```

---

## Character Consistency über Clips

Das größte Problem bei AI-Video: Der Charakter sieht in Shot 2 anders aus als in Shot 1.

### Lösungsansätze nach Tool

| Tool | Feature | Workflow |
|------|---------|----------|
| **Midjourney** | Omni-Reference (--oref) | Referenzbild für jeden Shot verwenden |
| **Kling** | Elements (4-Bild-System) | 4 Ansichten des Charakters hochladen |
| **Runway Gen-4** | Character Lock | Aus erstem Clip Charakter "speichern" |
| **Veo 3** | Flow Environment | Natürlichsprachliche Charakterbeschreibung |

### Zusätzliche Techniken

**Konsistente Beleuchtung:** Beschreibe Lichtsetup in jedem Prompt identisch.

**Kleidung als Anker:** Distinktive Kleidung (roter Mantel, gelber Hut) hilft dem Modell.

**Gleiche Angle-Familie:** Frontal → Frontal ist konsistenter als Frontal → Profile.

---

## Iteration und Troubleshooting

### Typische Probleme

| Problem | Ursache | Lösung |
|---------|---------|--------|
| Verzerrte Gesichter | Zu viel Motion | Motion Strength reduzieren |
| Artefakte an Kanten | Schlechte Subjekt-Trennung | Input-Bild mit klareren Konturen |
| Unnatürliche Bewegung | Zu vager Prompt | Spezifischere Action Verbs |
| Inkonsistente Physik | Unrealistische Erwartung | In mehrere Clips aufteilen |

### Iterationsloop

```
1. Generiere mit moderaten Settings
2. Identifiziere Problem-Bereiche
3. Passe EINEN Parameter an
4. Vergleiche
5. Wiederhole
```

**Nicht:** Alles gleichzeitig ändern. Du weißt dann nicht, was gewirkt hat.

---

## Quality Benchmarks

Professionelle I2V-Ergebnisse erfüllen:

- **Temporal Consistency:** Keine Flickering, stabile Formen
- **Motion Plausibility:** Physikalisch nachvollziehbar
- **Edge Stability:** Konturen bleiben scharf
- **Identity Preservation:** Gesichter/Objekte bleiben erkennbar
- **Prompt Adherence:** Tut, was beschrieben wurde

---

## Workflow-Checkliste

```
□ Startbild mit 4K-Framework oder MJ erstellt
□ Aspektverhältnis für Zielplattform gewählt
□ Input-Bild ≥1080px kürzeste Seite
□ Klare Subjekt-Trennung
□ Bewegungsraum eingeplant
□ End-Frame erstellt (wenn Tool es unterstützt)
□ Motion Prompt: Aktion + Richtung + Intensität
□ Tool-spezifische Settings angepasst
□ Motion Strength moderat gestartet
□ Ergebnis gegen Benchmarks geprüft
```

---

## Siehe auch

- [[04_BRANDS/_MOC|AI-Video MOC]] – Einstiegspunkt für alle Video-Ressourcen
- [[AI-Video-Tools-Übersicht]] – Vergleich aller Tools
- [[00_Prompting/Video-Prompting-Framework|Video-Prompting-Framework]] – Framework und Token-Baukasten
- [[00_Prompting/Camera-Motion-Prompting|Camera-Motion-Prompting]] – Kamerabewegung im Detail
- [[02_Tools/Veo-3-Spezifika|Veo 3 Spezifika]] – Deep Dive Google Veo 3
- [[02_Knowledge/AI-Media/Images/02_Generation/4K-Framework/_4K-Framework|4K-Framework]] – Hochwertige Startbilder erstellen

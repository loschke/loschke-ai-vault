---
title: Video/00_Prompting/Camera Motion Prompting
type: method
status: stable
created: '2026-01-24'
updated: '2026-01-24'
tags:
  - prompting
  - video
  - ai-media
  - camera
  - motion-control
sources:
  - 'self-authored:loschke:media-experimentation'
area: ai-media
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Camera-Motion-Prompting

> Präzise Steuerung der Kamerabewegung in AI-generierten Videos – von Prompt-Tokens bis UI-Controls.

---

## Warum Kamerabewegung wichtig ist

Kamerabewegung ist nicht Dekoration – sie ist Bedeutung. Ein `dolly in` auf ein Gesicht erzählt etwas anderes als ein `static shot`. Die Bewegung führt den Blick, erzeugt Emotion, strukturiert Zeit.

**Das Problem bei AI-Video:** Die Modelle interpretieren Bewegung oft eigenwillig. "Slow pan" wird manchmal zum Whip Pan, "static" hat plötzlich Drift. Präzise Kontrolle erfordert Verständnis der Mechanik.

---

## Bewegungstypen

### Rotationen (Kamera bleibt am Ort)

| Bewegung | Beschreibung | Typischer Einsatz |
|----------|--------------|-------------------|
| **Pan** | Horizontale Rotation (links/rechts) | Raum zeigen, Subjekt verfolgen |
| **Tilt** | Vertikale Rotation (hoch/runter) | Größe zeigen, Reveal von oben/unten |
| **Roll** | Rotation um Sichtachse | Dutch Angle, Desorientierung |

### Fahrten (Kamera bewegt sich)

| Bewegung | Beschreibung | Typischer Einsatz |
|----------|--------------|-------------------|
| **Dolly** | Vor/Zurück auf Subjekt zu/weg | Intimität aufbauen / Kontext enthüllen |
| **Truck** | Seitliche Fahrt (links/rechts) | Neben Subjekt herfahren |
| **Pedestal** | Vertikale Fahrt (hoch/runter) | Mit stehendem Subjekt mitgehen |
| **Crane** | 3D-Bewegung (kombiniert) | Epische Reveals, Establishing |

### Spezielle Bewegungen

| Bewegung | Beschreibung | Typischer Einsatz |
|----------|--------------|-------------------|
| **Orbit/Arc** | Um Subjekt kreisen | 360°-Ansicht, dramatischer Moment |
| **Tracking** | Subjekt folgen, Abstand halten | Verfolgung, Bewegung begleiten |
| **Zoom** | Brennweitenänderung (kein physisches Bewegen) | Aufmerksamkeit lenken |
| **Dolly Zoom** | Dolly + gegenläufiger Zoom | Vertigo-Effekt, Unbehagen |

---

## Prompt-Tokens

### Basis-Syntax

```
[speed] + [movement] + [direction]
```

**Beispiele:**
- `slow dolly in`
- `gentle pan left`
- `steady tracking shot following subject`
- `dramatic crane up revealing cityscape`

### Speed-Modifikatoren

| Intensität | Tokens |
|------------|--------|
| Langsam | `slow`, `gentle`, `gradual`, `subtle` |
| Normal | `steady`, `smooth`, `natural` |
| Schnell | `fast`, `rapid`, `dynamic`, `whip` |

### Richtungs-Tokens

| Bewegung | Tokens |
|----------|--------|
| Pan | `pan left`, `pan right` |
| Tilt | `tilt up`, `tilt down` |
| Dolly | `dolly in`, `dolly out`, `push in`, `pull back` |
| Truck | `truck left`, `truck right` |
| Orbit | `orbit left`, `orbit right`, `arc around` |
| Crane | `crane up`, `crane down` |

### Statische Einstellung

Explizit angeben wenn keine Bewegung gewünscht:
- `static shot`
- `locked-off camera`
- `fixed frame`

**Wichtig:** Ohne Angabe entscheidet das Modell – oft mit ungewollter Bewegung.

---

## Tool-spezifische Kontrolle

### Prompt-only (Veo 3, Sora)

Nur über Text steuerbar. Erfordert präzise Formulierung.

**Tipps für Veo 3:**
- Kamerabewegung früh im Prompt
- Kombinationen explizit: `slow dolly in while panning slightly left`
- Bei Konflikten gewinnt meist die erste Anweisung

### UI + Prompt (Kling, Runway)

**Kling 2.0:**
- Motion Control Panel mit Presets
- Slider für Intensität
- Kombinierbar mit Prompt-Anweisungen
- UI überschreibt tendenziell Prompt

**Runway Gen-3:**
- Camera Presets Dropdown
- Motion Brush für selektive Bewegung
- Prompt ergänzt UI-Settings

### Motion Brush (Runway)

Bewegung direkt auf Canvas malen:
- Verschiedene Brush-Größen
- Richtung durch Strichrichtung
- Intensität durch Wiederholung
- Nützlich für: Hintergrund still, Vordergrund bewegt

---

## Kamera + Subjekt-Bewegung

Die Kunst liegt in der Kombination. Beide bewegen sich – aber wie?

### Gleiche Richtung
```
tracking shot following woman walking right
```
→ Kamera und Subjekt bewegen sich zusammen, Subjekt bleibt im Frame

### Gegenläufig
```
woman walks left as camera slowly pans right
```
→ Dramatischer Abschied, wachsende Distanz

### Kamera still, Subjekt bewegt
```
static wide shot, man runs toward camera
```
→ Subjekt wächst im Frame, Annäherung

### Subjekt still, Kamera bewegt
```
slow orbit around motionless statue
```
→ Betrachtung, Ehrfurcht, Zeitlosigkeit

---

## Häufige Probleme

| Problem | Ursache | Lösung |
|---------|---------|--------|
| Kamera "driftet" | Kein explizites `static` | `locked-off camera` hinzufügen |
| Bewegung zu schnell | Default ist oft "cinematic" = schnell | `slow`, `gentle` explizit |
| Falsche Richtung | Ambige Formulierung | `pan left` statt `pan to the side` |
| Ruckelige Bewegung | Zu viele Anweisungen | Eine Bewegung pro Clip |
| Zoom statt Dolly | Modell verwechselt | Physische Bewegung betonen: `camera physically moves forward` |

---

## Bewegung und Bedeutung

| Bewegung | Emotionale Wirkung |
|----------|-------------------|
| Dolly in | Intimität, Fokus, Bedrohung |
| Dolly out | Enthüllung, Isolation, Abschied |
| Pan | Erkundung, Verbindung, Zeit |
| Tilt up | Ehrfurcht, Größe, Hoffnung |
| Tilt down | Entdeckung, Demut, Niederlage |
| Orbit | Betrachtung, Schicksal, Wichtigkeit |
| Handheld | Realismus, Dringlichkeit, Dokumentarisch |
| Crane | Epik, Überblick, Göttliche Perspektive |

---

## Beispiel-Prompts

**Reveal-Shot:**
```
Slow crane up from close-up of flowers to wide shot revealing 
entire botanical garden. Golden hour light, gentle breeze moves petals.
```

**Verfolgung:**
```
Tracking shot following cyclist from the side, camera trucks right 
at matching speed. Urban street, morning light, shallow depth of field.
```

**Dramatischer Moment:**
```
Slow dolly in on man's face as realization dawns. Static background, 
shallow focus isolates subject. He whispers: "It was you all along."
```

**Establishing mit Bewegung:**
```
Aerial drone shot, slow descent toward lighthouse on cliff. 
Stormy sea below, dramatic clouds. Camera tilts down during descent.
```

---

## Siehe auch

- [[Camera-Movement-Glossar]] – Fertige Prompt-Phrasen nach Kategorie
- [[Video-Prompting-Framework]] – Gesamtübersicht
- [[Audio-Prompting]] – Sound und Dialog
- [[Video-Prompting-JSON]] – Strukturierte Prompts
- [[02_Tools/Kling-Spezifika|Kling]] – Motion Control UI
- [[02_Tools/Runway-Spezifika|Runway]] – Motion Brush

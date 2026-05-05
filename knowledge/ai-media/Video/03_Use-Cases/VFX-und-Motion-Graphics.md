---
title: Video/03_Use Cases/VFX und Motion Graphics
type: reference
status: stable
created: '2026-01-24'
updated: '2026-01-24'
tags:
  - use-case
  - video
  - ai-media
  - vfx
  - motion-graphics
sources:
  - 'self-authored:loschke:media-experimentation'
area: ai-media
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# VFX & Motion Graphics

> Visual Effects, CGI-Animation und Motion Graphics mit AI-Videogenerierung – von Product Assembly bis Logo-Animation.

---

## Überblick

Dieser Use Case behandelt Effekt-lastige Anwendungsfälle, die über klassisches cinematisches Footage hinausgehen:

- **VFX:** Transformationen, Partikel, Liquid Effects, Morphing
- **Motion Graphics:** Logo-Animation, Kinetic Typography, UI-Animation

**Kernunterschied zum cinematischen Prompting:**
- Cinematisch: *Was sieht man?* (Beschreibung eines Moments)
- VFX: *Was passiert und warum?* (Kausalitätsketten und Transformationen)

---

## VFX-Kategorien

### 1. Product Assembly / Self-Build

Selbst-aufbauende Produkte, "magisches" Assembly – ideal für Werbung.

**Schlüssel-Tokens:**
- `assembles itself`
- `pieces fly out and snap into place`
- `components shift, rotate, and telescope outward`
- `hyper-lapse assembly`
- `panels mechanically unlock and fold outward`

**Beispiel-Prompt (Furniture Assembly):**
```
Sealed box in empty room begins to tremble.
Box seams burst open with puff of cardboard dust.
Hyper-lapse: Furniture pieces fly out and assemble themselves,
wood snapping into place with satisfying clicks.
Final piece lands gracefully. Room fully furnished.
SFX: Cascade of whirring, clicking, wood snapping.
Style: cinematic, photorealistic.
```

---

### 2. Mechanical Transformation

Roboter-Morphing, mechanische Rekonfiguration – inspiriert von Transformers, Pacific Rim.

**Schlüssel-Tokens:**
- `plates unlock and pull back`
- `pistons firing to lock limbs into place`
- `grinding gears, hissing pneumatics`
- `panel shifting, parts rotating 180 degrees`
- `hard-surface mechanics`
- `clunky and purposeful motion` (nicht fluid!)

**Wichtig:** Mechanische Bewegung sollte "clunky and purposeful" sein, nicht organisch fließend.

**Beispiel-Prompt:**
```
Metallic silver egg in industrial hangar. 
Glowing seams etch across surface, then it fractures. 
Armored plates unlock, revealing mechanical skeleton. 
Components shift, rotate, telescope outward. 
Legs slam down, tail whips out, head constructs piece by piece.
Camera orbits transformation, dips low as legs impact, cranes up for scale reveal.
SFX: Grinding gears, hissing pneumatics, heavy metallic clunks, final roar.
Style: Hyper-detailed industrial mecha CGI.
```

---

### 3. Liquid & Fluid Effects

Flüssigkeits-Simulationen, Morphing, chromatic flows.

**Schlüssel-Tokens:**
- `liquid metal`, `molten chrome`
- `fluid morphing`, `viscous flow`
- `chromatic dispersion`
- `flowing like mercury`
- `splashing with weight`

**Physik-Hinweise für bessere Ergebnisse:**
- Viskosität: `honey-like`, `water-thin`, `mercury-dense`
- Schwerkraft: `drips downward`, `pools at base`
- Oberflächenspannung: `beads up`, `surface tension breaks`

**Beispiel-Prompt:**
```
Object A slowly morphs into Object B with liquid effect.
Surface becomes fluid, texture transforms while maintaining form.
Chromatic reflections shift as material flows.
Viscous transition – weighted movement, not instant.
Style: abstract, chromatic.
```

---

### 4. Particle Systems & Energy Effects

Partikel-Effekte, magische Transformationen, Energie-Visualisierungen.

**Schlüssel-Tokens:**
- `sparkling particles coalesce`
- `dust motes catch light`
- `energy surge`, `power pulse`
- `particles construct [object]`
- `glowing ember trails`
- `dissolving into particles`

**Richtungsangaben verbessern Ergebnisse:**
- `particles spiral inward`
- `energy radiates outward from center`
- `motes drift upward, catching light`

**Beispiel-Prompt:**
```
A shimmering wave of energy washes across the room,
leaving sparkling particles in its wake.
Particles coalesce and elegantly construct the furniture,
settling into place one by one.
SFX: Quick whoosh, sparkling sound, magical chime as final item appears.
```

---

### 5. Morph Transitions

Objekt-zu-Objekt-Transformationen, seamless transitions.

**Schlüssel-Tokens:**
- `morphing seamlessly into`
- `dissolving into`
- `texture transforms while shape shifts`
- `match the rotation of A to B`

**Morphing-Varianten:**

| Typ | Prompt-Fragment |
|-----|-----------------|
| Horizontal | `morphing to the right into X` |
| Vertikal | `morphing upward into X` |
| Ripple | `morphing with a ripple effect into X` |
| Liquid | `morphing with a liquid effect into X` |
| Seamless | `morphing seamlessly into X` |

**Beispiel (Eye-to-Galaxy):**
```
Morph transition. The pupil of the eye expands rapidly,
dissolving into the black hole at the center of the galaxy.
Match the rotation of the iris to the rotation of the galactic arms.
```

---

## Motion Graphics

### Was AI-Video kann

- Logo-Animation aus Startbild
- Einfache Kinetic Typography
- Particle-basierte Logo-Reveals
- 3D-Rotation von Grafiken

### Was AI-Video NICHT gut kann

- Komplexe UI-Animation (→ After Effects, Rive, Lottie)
- Präzises Keyframing
- Konsistente Icon-Animation (Stil-Drift)
- Lange Motion-Graphics-Sequenzen

**→ Für echte Motion Graphics:** AI für Hero-Shots, Rest in klassischen Tools.

### Workflow für Logo-Animation

1. **Logo als PNG vorbereiten** (Transparenz funktioniert)
2. **Als First Frame hochladen** (Image-to-Video Modus)
3. **Animation beschreiben**, nicht nur Endzustand

### Prompt-Patterns

**Particle Assembly:**
```
Logo particles float in void, then coalesce and elegantly
construct the final logo mark. Elements settle into place
one by one with precision.
SFX: Clean swooshes.
```

**Ribbon/Fluid Formation:**
```
The text swirls in as cream-colored ribbons, beautifully
spelling out "[BRAND NAME]". Smooth, continuous movement.
Style: Premium minimalist aesthetic.
```

**3D Rotation:**
```
Logo rotates elegantly on seamless white background.
Slow 180-degree turn. Soft rim light, minimal reflections.
Style: High-contrast modern look.
```

### Style-Tokens

| Stil | Tokens |
|------|--------|
| **Premium/Apple-like** | `premium minimalism`, `soft diffused illumination`, `floating camera motion` |
| **Vector/Flat** | `vector-flat animation`, `crisp edges`, `no gradients` |
| **Isometric UI** | `isometric UI mockups`, `smooth pans and zooms` |
| **Kinetic Typography** | `text elements animate in sequence`, `letters assemble` |

---

## Häufige Probleme & Lösungen

### Geometry Drift

**Problem:** Objekte verformen sich ungewollt.

**Lösung:**
- `slow 180-degree turn`
- `object remains rigid and solid throughout`
- `maintains geometric integrity`

### Weightless Motion

**Problem:** Bewegung wirkt schwebend, ohne Masse.

**Lösung:**
- Weight Descriptors: `heavy`, `with force`, `slams down`
- Impact: `dust rises from impact`, `floor shakes`

### Melting/Morphing Festkörper

**Problem:** Feste Objekte werden ungewollt weich.

**Lösung:**
- `remains solid and rigid throughout`
- `metal does not deform`
- `mechanical, not organic movement`

### Unrealistische Kollisionen

**Problem:** Physik bei Aufprall stimmt nicht.

**Lösung (Impact Language):**
- `creates spiderweb crack pattern`
- `shatters outward`
- `surface ripples from contact point`

### Artefakte bei schneller Bewegung

**Lösung:**
- `smooth dolly in`, `steady pan, no shake`
- `motion blur: high` oder `crisp movement, minimal blur`

---

## Audio für VFX-Shots

VFX-Audio erfordert **synchrone Spezifität** – Sound muss zur visuellen Aktion passen.

| VFX-Typ | Audio-Beschreibung |
|---------|-------------------|
| **Mechanical Assembly** | `whirring, clicking, snapping into place, satisfying clunk` |
| **Transformation** | `grinding gears, hissing pneumatics, servo motors` |
| **Particle/Magic** | `shimmering whoosh, crystalline tinkle, magical chime` |
| **Liquid** | `splashing, dripping, viscous gurgle` |
| **Impact** | `heavy thud, glass shatter, metallic clang` |
| **Energy** | `electrical hum, power surge crackle, bass rumble` |

---

## Advanced: JSON-Strukturierte Prompts

Für komplexe VFX-Shots kann eine JSON-ähnliche Struktur helfen, alle Aspekte zu spezifizieren:

```json
{
  "description": "Kernbeschreibung der Szene und des VFX-Ziels",
  "style": "Visueller Stil",
  "camera": "Kamerabewegung und -perspektive",
  "lighting": "Lichtsetup mit Veränderungen über Zeit",
  "elements": ["Liste aller visuellen Komponenten"],
  "motion": "Detaillierte Bewegungsbeschreibung – WIE passiert etwas",
  "ending": "Finaler Zustand der Szene",
  "audio": "Sound Design",
  "negative": "Was NICHT erscheinen soll"
}
```

**Warum es funktioniert:** Das Modell interpretiert JSON als strukturierten Text. Es erzwingt Vollständigkeit und erleichtert Iteration.

---

## Tool-Empfehlungen

| Use Case | Geeignete Tools |
|----------|----------------|
| Product Assembly VFX | Veo 3, Kling 2.0 |
| Mechanical Transformation | Veo 3 (Realismus), Runway (Stilkontrolle) |
| Liquid/Particle Effects | Veo 3, Pika |
| Logo Animation | Veo 3 I2V, Kling I2V |
| Komplexe Motion Graphics | After Effects, Rive (nicht AI-Video) |

---

## Siehe auch

### Pre-Production
- [[04_Pre-Production/Video-Scripting-Framework|Video-Scripting-Framework]] – Grundlagen (auch für VFX relevant: Shot-Planung)
- [[04_Pre-Production/Script-to-Shot-Workflow|Script-to-Shot-Workflow]] – Shot-Definition und -Details
- [[04_Pre-Production/Storyboard-Workflow|Storyboard-Workflow]] – Besonders wichtig für komplexe VFX

### Prompting & Capabilities
- [[00_Prompting/Video-Prompting-Framework|Video-Prompting-Framework]] – Basis-Framework
- [[01_Capabilities/Text-to-Video|Text-to-Video]] – T2V-Grundlagen
- [[02_Tools/Veo-3-Spezifika|Veo 3 Spezifika]] – Tool-Details

### Verwandte Use Cases
- [[03_Use-Cases/Produktwerbung|Produktwerbung]] – Kommerzielle Anwendung

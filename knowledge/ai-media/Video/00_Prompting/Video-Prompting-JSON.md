---
title: Video/00_Prompting/Video Prompting JSON
type: reference
status: stable
created: '2026-01-24'
updated: '2026-01-24'
tags:
  - prompting
  - video
  - ai-media
  - json
  - structured
  - workflow
sources:
  - 'self-authored:loschke:media-experimentation'
area: ai-media
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Video-Prompting-JSON

> Strukturierte Prompts im JSON-Format für präzisere Kontrolle und Reproduzierbarkeit.

---

## Warum strukturierte Prompts?

Natürliche Sprache ist ambig. "Cinematic shot of a woman walking through rain" kann hundert verschiedene Ergebnisse produzieren. Strukturierte Prompts zwingen zur Präzision und machen Ergebnisse reproduzierbarer.

**Vorteile:**
- Explizite Felder erzwingen vollständige Beschreibung
- Einfacher zu iterieren (ein Feld ändern)
- Besser für Batch-Generierung
- Dokumentierbar und teilbar

**Nachteile:**
- Mehr Aufwand beim Schreiben
- Nicht alle Tools parsen JSON nativ
- Kann kreative Flexibilität einschränken

---

## Das Standard-Schema

```json
{
  "scene": {
    "setting": "",
    "time_of_day": "",
    "weather": "",
    "atmosphere": ""
  },
  "cinematography": {
    "shot_size": "",
    "camera_angle": "",
    "camera_movement": "",
    "lens": ""
  },
  "subject": {
    "description": "",
    "clothing": "",
    "position": "",
    "expression": ""
  },
  "action": {
    "primary": "",
    "secondary": "",
    "timing": ""
  },
  "style": {
    "visual": "",
    "lighting": "",
    "color_grade": "",
    "mood": ""
  },
  "audio": {
    "ambient": "",
    "sfx": "",
    "dialogue": "",
    "music": ""
  },
  "technical": {
    "duration": "",
    "aspect_ratio": "",
    "quality": ""
  }
}
```

---

## Feld-Referenz

### Scene

| Feld | Beschreibung | Beispielwerte |
|------|--------------|---------------|
| `setting` | Ort der Szene | `modern office`, `ancient temple`, `suburban kitchen` |
| `time_of_day` | Tageszeit | `golden hour`, `midnight`, `dawn`, `overcast afternoon` |
| `weather` | Wetterbedingungen | `heavy rain`, `light snow`, `clear`, `foggy` |
| `atmosphere` | Stimmung des Ortes | `abandoned`, `bustling`, `intimate`, `sterile` |

### Cinematography

| Feld | Beschreibung | Beispielwerte |
|------|--------------|---------------|
| `shot_size` | Bildausschnitt | `extreme close-up`, `medium shot`, `wide shot` |
| `camera_angle` | Perspektive | `eye-level`, `low-angle`, `bird's-eye`, `dutch angle` |
| `camera_movement` | Bewegung | `slow dolly in`, `static`, `orbit left`, `tracking` |
| `lens` | Optik-Effekte | `shallow DOF`, `anamorphic`, `wide-angle distortion` |

### Subject

| Feld | Beschreibung | Beispielwerte |
|------|--------------|---------------|
| `description` | Wer/Was | `woman in her 40s with silver hair` |
| `clothing` | Kleidung | `worn leather jacket, faded jeans` |
| `position` | Position im Frame | `center frame`, `left third`, `entering from right` |
| `expression` | Gesichtsausdruck | `contemplative`, `surprised`, `neutral` |

### Action

| Feld | Beschreibung | Beispielwerte |
|------|--------------|---------------|
| `primary` | Hauptaktion | `opens a letter`, `runs toward camera` |
| `secondary` | Nebenaktionen | `wind moves her hair`, `background traffic` |
| `timing` | Zeitliche Aspekte | `slow motion`, `action peaks at 3 seconds` |

### Style

| Feld | Beschreibung | Beispielwerte |
|------|--------------|---------------|
| `visual` | Visueller Stil | `photorealistic`, `anime`, `film noir` |
| `lighting` | Lichtgestaltung | `rim lighting`, `natural daylight`, `neon glow` |
| `color_grade` | Farbstimmung | `warm tones`, `desaturated`, `teal and orange` |
| `mood` | Emotionale Atmosphäre | `tense`, `melancholic`, `triumphant` |

### Audio (nur bei Tools mit nativer Audio-Generierung)

| Feld | Beschreibung | Beispielwerte |
|------|--------------|---------------|
| `ambient` | Hintergrundatmosphäre | `quiet library`, `busy street` |
| `sfx` | Soundeffekte | `thunder crack`, `door creaks` |
| `dialogue` | Gesprochener Text | `She whispers: "Follow me."` |
| `music` | Musik-Beschreibung | `subtle piano`, `no music` |

### Technical

| Feld | Beschreibung | Beispielwerte |
|------|--------------|---------------|
| `duration` | Gewünschte Länge | `4 seconds`, `8 seconds` |
| `aspect_ratio` | Seitenverhältnis | `16:9`, `9:16`, `1:1` |
| `quality` | Qualitätsstufe | `4K`, `HD`, `draft` |

---

## Beispiel: Vollständiger Prompt

```json
{
  "scene": {
    "setting": "Rooftop bar in Tokyo",
    "time_of_day": "Night, city lights glittering below",
    "weather": "Clear, slight breeze",
    "atmosphere": "Sophisticated, intimate"
  },
  "cinematography": {
    "shot_size": "Medium close-up",
    "camera_angle": "Eye-level, slightly off-center",
    "camera_movement": "Slow dolly in over 8 seconds",
    "lens": "Shallow depth of field, city lights bokeh in background"
  },
  "subject": {
    "description": "Japanese woman, early 30s, elegant features",
    "clothing": "Black cocktail dress, minimalist gold jewelry",
    "position": "Seated at bar, turned slightly toward camera",
    "expression": "Shifts from contemplative to subtle smile"
  },
  "action": {
    "primary": "Raises whiskey glass, takes small sip",
    "secondary": "Slight breeze moves her hair, ice clinks in glass",
    "timing": "Deliberate, unhurried movements"
  },
  "style": {
    "visual": "Cinematic, Wong Kar-wai influence",
    "lighting": "Warm practical lights from bar, cool city glow behind",
    "color_grade": "Rich shadows, amber highlights",
    "mood": "Sophisticated loneliness, urban melancholy"
  },
  "audio": {
    "ambient": "Muffled city sounds, quiet bar atmosphere",
    "sfx": "Ice clinking, glass set down on wood",
    "dialogue": "She says softly: 'Some nights are worth remembering.'",
    "music": "No music"
  },
  "technical": {
    "duration": "8 seconds",
    "aspect_ratio": "2.39:1 cinematic widescreen",
    "quality": "4K"
  }
}
```

---

## Konvertierung zu Fließtext

Manche Tools akzeptieren kein JSON direkt. Konvertierungslogik:

**JSON → Natürlicher Prompt:**

```
[shot_size], [camera_angle], [camera_movement]. 
[subject.description] wearing [clothing]. 
[action.primary]. [scene.setting] at [time_of_day]. 
[lighting], [visual] style. [mood] mood. 
[audio.ambient]. [audio.sfx]. [dialogue].
```

**Aus dem Beispiel oben:**

> Medium close-up, eye-level slightly off-center, slow dolly in. Japanese woman in her early 30s with elegant features wearing a black cocktail dress with minimalist gold jewelry. She raises a whiskey glass and takes a small sip, her expression shifting from contemplative to a subtle smile. Rooftop bar in Tokyo at night, city lights glittering below. Shallow depth of field with city lights bokeh. Warm practical lights from bar, cool city glow behind. Cinematic Wong Kar-wai style, rich shadows with amber highlights. Sophisticated loneliness, urban melancholy mood. Ambient: muffled city sounds, quiet bar atmosphere. SFX: ice clinking, glass on wood. She says softly: "Some nights are worth remembering." No music.

---

## Workflow-Integration

### Template für Batch-Generierung

```json
{
  "_template": "character_intro",
  "_variables": {
    "CHARACTER": "Detective Chen",
    "LOCATION": "rainy street corner",
    "EMOTION": "determined"
  },
  "subject": {
    "description": "{{CHARACTER}}",
    "expression": "{{EMOTION}}"
  },
  "scene": {
    "setting": "{{LOCATION}}"
  }
}
```

### Versionierung

```json
{
  "_meta": {
    "version": "1.2",
    "created": "2026-01-24",
    "notes": "Increased dolly speed, warmer color grade"
  },
  "scene": { ... }
}
```

---

## Minimal-Schema

Für schnelle Iterationen – nur die wichtigsten Felder:

```json
{
  "shot": "medium shot, slow dolly in",
  "subject": "woman with red hair, white dress",
  "action": "turns and smiles",
  "setting": "sunlit meadow, golden hour",
  "style": "cinematic, shallow DOF",
  "audio": "wind in grass, she says: 'You came.'"
}
```

---

## Tool-Kompatibilität

| Tool | JSON-Support | Anmerkung |
|------|--------------|-----------|
| Veo 3 | ⚠️ Indirekt | Versteht strukturierte Prompts, kein natives Parsing |
| Runway | ❌ | Fließtext bevorzugt |
| Kling | ❌ | Fließtext + UI |
| ComfyUI | ✅ | Native JSON-Workflows |
| API-Wrapper | ✅ | Eigene Parser möglich |

**Praxis:** JSON als Planungs- und Dokumentationsformat, bei Bedarf zu Fließtext konvertieren.

---

## Siehe auch

- [[Video-Prompting-Framework]] – Gesamtübersicht und Token-Baukasten
- [[Camera-Motion-Prompting]] – Kamerabewegung im Detail
- [[Audio-Prompting]] – Audio-Spezifika
- [[02_Tools/Veo-3-Spezifika|Veo 3]] – Tool-spezifische Anwendung

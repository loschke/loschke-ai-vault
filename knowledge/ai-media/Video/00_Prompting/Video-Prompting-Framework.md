---
title: Video/00_Prompting/Video Prompting Framework
type: framework
status: stable
created: '2026-01-24'
updated: '2026-01-24'
tags:
  - framework
  - prompting
  - video
  - ai-media
  - workshop
sources:
  - 'self-authored:loschke:media-experimentation'
area: ai-media
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Video-Prompting Framework

> **Ziel:** Strukturiertes Framework und Token-Baukasten für die Erstellung von AI-generierten Videos. Tool-agnostisch konzipiert, anwendbar auf Veo, Kling, Runway und andere.

---

## 1. Grundlagen

### Was unterscheidet Video- von Bild-Prompting?

Bei der Bildgenerierung beschreiben wir einen **eingefrorenen Moment**. Bei Video kommen drei fundamentale Dimensionen hinzu:

| Dimension | Bild | Video |
|-----------|------|-------|
| **Bewegung** | Impliziert (Pose suggeriert Bewegung) | Explizit (Kamera und Subjekt bewegen sich) |
| **Zeit** | Ein Moment | 4-8 Sekunden Ablauf |
| **Ton** | Nicht vorhanden | Dialog, Soundeffekte, Ambiente |

### Die Kern-Formel

```
[Cinematography] + [Subject] + [Action] + [Context] + [Style & Ambiance] + [Audio]
```

**Beispiel:**
> Medium shot, eye-level angle, slow dolly in. A scientist in a white lab coat examines a glowing vial. She holds it up to the light, her expression shifting from curiosity to amazement. Sterile laboratory with blue-tinted fluorescent lighting. Cinematic film look, shallow depth of field. Tense, mysterious mood. SFX: Electrical hum. She whispers: "It's alive."

---

## 2. Das Framework: 12 Kategorien

### A. Visuelle Komposition
1. **Shot Size** – Bildausschnitt (ECU bis ELS)
2. **Camera Angle** – Perspektive (Eye-level, Low/High Angle, Dutch)
3. **Camera Movement** – Kamerabewegung → [[Camera-Motion-Prompting]]
4. **Lens & Focus** – Optik (Depth of Field, Rack Focus, Anamorphic)

### B. Inhalt & Szene
5. **Subject** – Wer/Was ist zu sehen
6. **Action** – Was passiert in den 4-8 Sekunden
7. **Scene/Context** – Ort, Zeit, Wetter, Atmosphäre

### C. Stil & Atmosphäre
8. **Lighting** – Lichtgestaltung
9. **Visual Style** – Ästhetische Richtung
10. **Mood** – Emotionale Atmosphäre
11. **Temporal** – Zeitliche Elemente (Slow-Mo, Time-Lapse)

### D. Audio
12. **Audio** – Sound Effects, Ambient, Dialogue → [[Audio-Prompting]]

### Strukturierte Prompts
→ [[Video-Prompting-JSON]] – JSON-Format für präzisere Kontrolle

---

## 3. Token-Baukasten

### 3.1 Shot Size (Bildausschnitt)

| Token | Deutsch | Wirkung |
|-------|---------|---------|
| `extreme close-up` / `ECU` | Extreme Nahaufnahme | Isoliert winziges Detail (Auge, Wassertropfen) |
| `close-up` / `CU` | Nahaufnahme | Gesicht, betont Emotion |
| `medium close-up` / `MCU` | Halbnahe | Kopf und Schultern, gut für Dialog |
| `medium shot` / `MS` | Halbtotale | Hüfte aufwärts, Standard für Gespräche |
| `medium long shot` / `american shot` | Amerikanische | Knie bis Kopf, zeigt Körpersprache |
| `full shot` / `long shot` / `LS` | Totale | Ganze Person von Kopf bis Fuß |
| `wide shot` / `WS` | Weite Einstellung | Subjekt in breiter Umgebung |
| `establishing shot` | Establishing Shot | Setzt Ort und Stimmung |
| `extreme long shot` / `ELS` | Supertotale | Weite Landschaft, Subjekt sehr klein |

**Tipp:** Je näher die Einstellung, desto mehr Emotion. Je weiter, desto mehr Kontext.

---

### 3.2 Camera Angle (Perspektive)

| Token | Wirkung |
|-------|---------|
| `eye-level` | Neutral, natürlich |
| `low-angle` | Subjekt wirkt mächtig, dominant |
| `high-angle` | Subjekt wirkt klein, verletzlich |
| `bird's-eye view` | Direkt von oben, zeigt Muster |
| `worm's-eye view` | Extrem niedrig, dramatisch |
| `dutch angle` | Kamera gekippt, erzeugt Unbehagen |
| `POV shot` | Subjektive Kamera |
| `over-the-shoulder` | Klassisch für Dialog |

**Tipp:** `dutch angle` sparsam einsetzen – schnell übertrieben.

---

### 3.3 Camera Movement (Kamerabewegung)

**Kurzübersicht:**
- **Rotationen:** `pan` (horizontal), `tilt` (vertikal)
- **Fahrten:** `dolly` (vor/zurück), `truck` (seitlich), `crane` (3D)
- **Spezial:** `orbit`, `tracking`, `zoom`, `handheld`

**Kombinationen:** `slow dolly in`, `fast whip pan`, `gentle arc shot`

**Tipp:** Bewegung immer mit Zweck. `dolly in` = Intimität. `dolly out` = Kontext enthüllen.

→ **Vertiefung:** [[Camera-Motion-Prompting]] – Alle Bewegungstypen, Tool-spezifische Kontrolle, Troubleshooting

---

### 3.4 Lens & Focus (Optik)

| Token | Wirkung |
|-------|---------|
| `shallow depth of field` | Hintergrund verschwommen (Bokeh) |
| `deep focus` | Alles scharf |
| `rack focus` | Fokus wechselt von A nach B |
| `wide-angle lens` | Breites Sichtfeld, übertreibt Perspektive |
| `telephoto lens` | Komprimierte Perspektive |
| `anamorphic` | Breitbild-Look mit charakteristischen Flares |
| `lens flare` | Lichtstreifen durch Gegenlicht |

**Tipp:** `shallow depth of field` ist der einfachste Weg zum "cinematic look".

---

### 3.5 Subject (Subjekt)

**Personen:** `a woman in her 30s with curly red hair`, `a chef`, `an elderly man`

**Tiere:** `a golden retriever`, `a dragon`

**Objekte:** `a coffee cup`, `a vintage typewriter`

**Tipp:** Je detaillierter (Kleidung, Haare, Merkmale), desto konsistenter über Frames.

---

### 3.6 Action (Aktion)

| Kategorie | Tokens |
|-----------|--------|
| **Bewegung** | `walking`, `running`, `jumping`, `dancing` |
| **Interaktion** | `talking`, `laughing`, `cooking`, `typing` |
| **Subtil** | `breeze ruffling hair`, `fingers tapping`, `blinking slowly` |
| **Transformation** | `flower blooming`, `ice melting`, `sun setting` |

**Formulierungen:** `slowly turns around`, `nervously opens the letter`, `picks up the phone, then smiles`

**Tipp:** Bei 4-8 Sekunden maximal 1-2 Aktionen.

---

### 3.7 Scene/Context (Schauplatz)

**Orte:** `living room`, `laboratory`, `beach`, `forest`, `cityscape`

**Tageszeit:** `dawn`, `golden hour`, `twilight`, `night`

**Wetter:** `sunny`, `overcast`, `rain`, `fog`, `snow`

**Details:** `dust motes in the air`, `steam rising`, `reflections on wet pavement`

---

### 3.8 Lighting (Licht)

**Natürlich:** `natural daylight`, `golden hour light`, `moonlight`

**Künstlich:** `candlelight`, `neon lights`, `screen glow`

**Cinematisch:**
| Token | Wirkung |
|-------|---------|
| `high-key lighting` | Hell, wenig Schatten, fröhlich |
| `low-key lighting` | Dunkel, starke Schatten, mysteriös |
| `film noir lighting` | Harte Schatten, dramatisch |
| `rim lighting` | Lichtkante um Subjekt |
| `volumetric lighting` | Sichtbare Lichtstrahlen (God rays) |

---

### 3.9 Visual Style (Visueller Stil)

**Realismus:** `photorealistic`, `stylized`, `abstract`

**Cinematisch:** `cinematic`, `shot on 35mm film`, `anamorphic widescreen`, `vintage film`

**Animation:** `anime`, `Pixar style`, `cel-shaded`, `claymation`

**Epochen:** `1950s Americana`, `1980s neon`, `synthwave`, `cyberpunk`

---

### 3.10 Mood (Stimmung)

| Stimmung | Tokens |
|----------|--------|
| **Fröhlich** | `joyful`, `uplifting`, `vibrant`, `playful` |
| **Traurig** | `melancholic`, `somber`, `wistful` |
| **Spannend** | `tense`, `suspenseful`, `ominous` |
| **Friedlich** | `serene`, `tranquil`, `meditative` |
| **Episch** | `epic`, `majestic`, `awe-inspiring` |

---

### 3.11 Temporal (Zeitliche Elemente)

| Token | Beschreibung |
|-------|--------------|
| `slow motion` | Zeitlupe |
| `fast motion` | Zeitraffer |
| `time-lapse` | Extremer Zeitraffer |
| `frozen moment` | Matrix-Effekt |

---

### 3.12 Audio

**Kurzübersicht:** Nur bei Tools mit nativer Audio-Generierung (Veo 3).

- **SFX:** `SFX: thunder rumbles in the distance`
- **Ambient:** `Ambient: quiet hum of a library`
- **Dialogue:** `She whispers: "I knew you would come."`

→ **Vertiefung:** [[Audio-Prompting]] – Alle Audio-Typen, Lip-Sync, Troubleshooting

---

## 4. Quick Reference

### Die Formel
```
Cinematography + Subject + Action + Context + Style + Audio
```

### Prompt-Struktur
```
[Shot Size] + [Camera Angle], [Camera Movement].
[Subject description].
[Action description].
[Scene/Context] with [Lighting].
[Visual Style], [Mood].
[Audio: SFX, Ambient, Dialog].
```

### Checkliste
- [ ] Shot Size definiert?
- [ ] Kamerawinkel angegeben?
- [ ] Kamerabewegung (oder explizit static)?
- [ ] Subjekt detailliert?
- [ ] Aktion machbar in 4-8 Sek?
- [ ] Ort und Zeit etabliert?
- [ ] Lichtstimmung passend?
- [ ] Stil konsistent?
- [ ] Audio definiert (falls Tool es unterstützt)?

### Schnelle Stil-Presets

| Stil | Tokens |
|------|--------|
| **Cinematic Drama** | `cinematic, shot on 35mm, shallow depth of field, dramatic lighting` |
| **Documentary** | `handheld camera, natural lighting, photorealistic` |
| **Music Video** | `dynamic camera movement, stylized color grading, high contrast` |
| **Horror** | `low-key lighting, dutch angle, unsettling mood, slow dolly` |
| **Commercial** | `high-key lighting, clean aesthetic, bright and vibrant` |

---

## Siehe auch

- [[04_BRANDS/_MOC|AI-Video MOC]] – Übersicht
- [[Camera-Motion-Prompting]] – Kamerabewegung im Detail
- [[Audio-Prompting]] – Audio im Detail
- [[Video-Prompting-JSON]] – Strukturierte Prompts
- [[AI-Video-Tools-Übersicht]] – Tool-Vergleich

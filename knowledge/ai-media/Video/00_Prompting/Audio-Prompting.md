---
title: Video/00_Prompting/Audio Prompting
type: method
status: stable
created: '2026-01-24'
updated: '2026-01-24'
tags:
  - prompting
  - video
  - ai-media
  - audio
  - dialogue
  - sfx
sources:
  - 'self-authored:loschke:media-experimentation'
area: ai-media
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Audio-Prompting

> Native Audio-Generierung in AI-Videos – Sound Effects, Ambiente, Dialog und Musik.

---

## Der Audio-Paradigmenwechsel

Bis 2024 war AI-Video stumm. Veo 3 änderte das: Native Audio-Generierung bedeutet, dass Sound nicht nachträglich hinzugefügt wird, sondern zeitgleich mit dem Video entsteht – synchron, kontextbewusst, integriert.

**Warum das wichtig ist:**
- Lip-Sync funktioniert (meistens)
- Sound Effects passen zur Aktion
- Keine Post-Production für Basis-Audio nötig
- Aber: Weniger Kontrolle als bei separater Audio-Produktion

---

## Audio-Typen

| Typ | Beschreibung | Beispiel |
|-----|--------------|----------|
| **SFX** | Sound Effects – Geräusche zu Aktionen | Türknarren, Schritte, Explosion |
| **Ambient** | Hintergrund-Atmosphäre | Stadtlärm, Waldgeräusche, Bürosummen |
| **Dialogue** | Gesprochene Worte | Charaktere sprechen |
| **Foley** | Realistische Alltagsgeräusche | Kleidungsrascheln, Tassenklirren |
| **Music** | Hintergrundmusik | Score, Soundtrack |

---

## Tool-Support

| Tool | Native Audio | Lip-Sync | Qualität |
|------|--------------|----------|----------|
| **Veo 3** | ✅ Ja | ✅ Gut | Beste native Generierung |
| **Kling 2.0** | ❌ Nein | ❌ – | Externes Audio nötig |
| **Runway** | ❌ Nein | ❌ – | Externes Audio nötig |
| **Pika 2.0** | ⚠️ Teilweise | ⚠️ Basic | Experimentell |
| **Sora** | ❓ Unklar | ❓ – | Noch wenig Infos |

**Konsequenz:** Audio-Prompting ist primär für Veo 3 relevant. Bei anderen Tools → Post-Production.

---

## Prompt-Syntax für Audio

### Sound Effects (SFX)

```
SFX: [Beschreibung des Geräuschs]
```

**Beispiele:**
```
SFX: Thunder rumbles in the distance
SFX: Footsteps echo on marble floor
SFX: Glass shatters with a sharp crack
SFX: Car engine revs aggressively
```

**Tipps:**
- Spezifisch sein: `heavy footsteps on wet pavement` > `footsteps`
- Qualität beschreiben: `sharp`, `muffled`, `distant`, `crisp`
- Timing implizieren: `sudden crash`, `gradual rumble`

### Ambient

```
Ambient: [Atmosphärische Beschreibung]
```

**Beispiele:**
```
Ambient: Quiet hum of a library with occasional page turning
Ambient: Busy café atmosphere with clinking cups and murmured conversations
Ambient: Forest at night with crickets and distant owl
Ambient: Heavy rain on windows, thunder in background
```

### Dialogue

```
[Character] says: "[Gesprochener Text]"
[Character] whispers: "[Gesprochener Text]"
[Character] shouts: "[Gesprochener Text]"
```

**Beispiele:**
```
She whispers: "I knew you would come."
The old man says calmly: "Time changes everything."
He shouts desperately: "Wait! Don't go!"
A narrator describes the scene in a warm, documentary voice.
```

**Sprechweise-Modifikatoren:**
- `whispers`, `murmurs`, `says softly`
- `says`, `speaks`, `states`
- `shouts`, `yells`, `exclaims`
- `with a trembling voice`, `confidently`, `sarcastically`

### Narrator/Voice-Over

```
A narrator with [Stimmbeschreibung] says: "[Text]"
Voice-over: "[Text]"
```

**Beispiele:**
```
A narrator with a deep, authoritative voice says: "In 1942, everything changed."
Voice-over in a young woman's curious tone: "I never understood why she left."
```

---

## Lip-Sync Kontrolle

### Grundprinzip

Bei Dialog versucht das Modell, Lippenbewegung zu synchronisieren. Qualität hängt ab von:
- Sichtbarkeit des Gesichts (frontal > Profil)
- Textlänge (kürzer = präziser)
- Sprechgeschwindigkeit

### Timing-Faustregeln

| Videolänge | Max. Sprechzeit | Anmerkung |
|------------|-----------------|-----------|
| 4 Sekunden | ~3 Sekunden | Sehr knapp |
| 8 Sekunden | ~6-7 Sekunden | Realistisch |

**Berechnung:** ~2-3 Wörter pro Sekunde für natürliches Sprechtempo.

### Probleme vermeiden

**Schwierige Namen phonetisch schreiben:**
- `Nietzsche` → `Nee-chuh`
- `Goethe` → `Gur-tuh`

**Untertitel unterdrücken:**
```
(no subtitles)
```
Am Ende des Prompts, wenn keine Texteinblendung gewünscht.

---

## Häufige Probleme

| Problem | Ursache | Lösung |
|---------|---------|--------|
| Ungewolltes Gelächter | Modell interpretiert "happy scene" | Explizit: `no laughter` |
| Applaus bei allem | Default für positive Szenen | `no applause, no crowd sounds` |
| Asynchroner Dialog | Text zu lang für Videolänge | Kürzen oder Tempo anpassen |
| Unnatürliche Stimme | Vage Beschreibung | Stimme charakterisieren |
| Fehlende Stille | Modell füllt immer | `silent`, `no sound`, `quiet` |

### Negative Audio-Prompts

```
No music, no background music
No laughter, no applause
Silent except for [spezifischer Sound]
Only ambient sounds, no dialogue
```

---

## Audio-Schichtung

Gute Szenen haben mehrere Audio-Ebenen:

```
Ambient: Busy train station with announcements and crowd noise
SFX: Train brakes squeal as it arrives
She says into her phone: "I'm here. Where are you?"
```

**Hierarchie:**
1. Ambient als Basis (durchgehend)
2. SFX punktuell (zur Aktion)
3. Dialog im Fokus (Vordergrund)

---

## Post-Production Alternative

Wenn native Audio nicht ausreicht oder Tool es nicht unterstützt:

| Bedarf | Tool-Empfehlung |
|--------|-----------------|
| Voice Generation | ElevenLabs, PlayHT |
| Voice Cloning | ElevenLabs |
| Musik-Generierung | Suno, Udio |
| SFX Libraries | Epidemic Sound, Artlist |
| Audio Enhancement | Adobe Podcast, Descript |
| Lip-Sync nachträglich | HeyGen, Akool |

**Workflow ohne native Audio:**
```
1. Video generieren (stumm)
2. Audio separat erstellen
3. In Videoeditor zusammenführen
4. Sync prüfen und anpassen
```

---

## Beispiel-Prompts

**Atmosphärische Szene:**
```
Wide shot of empty diner at night. Rain streams down windows.
Ambient: Heavy rain outside, quiet jazz from old radio, fluorescent light buzzes.
SFX: Coffee cup placed on counter with soft clink.
Waitress says tiredly: "Kitchen's closing in ten."
```

**Action-Szene:**
```
Close-up of racing car cockpit. Driver grips wheel.
SFX: Engine roars, tires screech on asphalt.
Ambient: Crowd cheering in distance, radio crackle.
He shouts into radio: "I'm going for it!"
```

**Stille Szene:**
```
Medium shot of woman reading letter. Tears form in her eyes.
Ambient: Complete silence except for ticking clock.
No dialogue, no music. Only the quiet rustle of paper as her hands tremble.
```

---

## Siehe auch

- [[Video-Prompting-Framework]] – Gesamtübersicht
- [[Camera-Motion-Prompting]] – Kamerabewegung
- [[Video-Prompting-JSON]] – Strukturierte Prompts
- [[02_Tools/Veo-3-Spezifika|Veo 3]] – Native Audio Features
- [[02_Knowledge/AI-Media/Audio/_MOC|AI Audio MOC]] – Standalone Audio-Generierung

---
title: Farben & Kontraste – Token-Referenz
type: vocabulary
status: stable
created: '2026-05-05'
updated: '2026-05-05'
tags:
  - image-generation
  - tokens
  - colors
  - contrast
  - effects
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
# Farben & Kontraste – Token-Referenz

Farben steuern Emotionen und Aufmerksamkeit. Bild-KIs verstehen Farbnamen, Assoziationen und Kombinationen.

---

## Farbzuweisung (Spezifische Farben)

Direkte Farbangaben für Objekte oder Hintergründe.

### Basis-Farben
Funktionieren zuverlässig: `red`, `blue`, `green`, `yellow`, `orange`, `purple`, `pink`, `black`, `white`, `grey`

### Erweiterte Farbbegriffe

| Token | Beschreibung |
|-------|--------------|
| `pastel-colored` | Pastelltöne, weich |
| `neon-colored` | Leuchtend, grell |
| `earth-toned` | Erdfarben, natürlich |
| `muted colors` | Gedämpft, entsättigt |
| `vibrant colors` | Kräftig, lebendig |

### Assoziative Farben

Bild-KIs kennen Farbkontexte:

| Token | Resultat |
|-------|----------|
| `tiffany-colored` | Türkis (Tiffany Blue) |
| `brick-colored` | Ziegelrot |
| `denim-colored` | Jeansblau |
| `champagne-colored` | Helles Beige-Gold |
| `coral-colored` | Korallenrot |
| `olive-colored` | Olivgrün |

### Flaggen & Kombinationen

| Token | Resultat |
|-------|----------|
| `german-flag-colored` | Schwarz-Rot-Gold |
| `rainbow-colored` | Regenbogenspektrum |
| `monochrome` | Einfarbig/Graustufen |

**Prompt-Struktur:**
```
photo of a [FARBE 1] [OBJEKT], isolated against a [FARBE 2] background
```

---

## Technische Kontraste & Filter

Modifier für Bildbearbeitung und Filterstile.

### Kontrast & Sättigung

| Token | Effekt |
|-------|--------|
| `high-contrast` | Starke Hell-Dunkel-Unterschiede |
| `low-contrast` | Flach, wenig Unterschiede |
| `high saturation` | Kräftige Farben |
| `low saturation` | Entsättigt, blass |
| `HDR` | High Dynamic Range, detailreich |

### Farbstile

| Token | Effekt |
|-------|--------|
| `cinematic teal-orange` | Film-Look, Komplementärkontrast |
| `selective-color` | Ein Farbelement, Rest SW |
| `color-splash` | Ähnlich selective-color |
| `split color` | Geteilte Farbgebung |
| `color harmony` | Harmonische Farbkombination |
| `color blocking` | Flächige Farbblöcke |
| `false-color` | Falschfarben-Darstellung |
| `monochrome-blue` | Einfarbig blau |

### Licht & Schatten

| Token | Effekt |
|-------|--------|
| `low-key` | Dunkel, wenig Licht, dramatisch |
| `high-key` | Hell, wenig Schatten, freundlich |
| `dramatic chiaroscuro` | Starker Hell-Dunkel-Kontrast (Rembrandt) |
| `silhouette` | Gegenlicht, nur Umriss |

### Spezialeffekte

| Token | Effekt |
|-------|--------|
| `hazy` | Dunstig, verschleiert |
| `neon-glow` | Neon-Leuchteffekt |
| `bioluminescence` | Biologisches Leuchten |
| `infrared visual` | Infrarot-Look |
| `silver-gelatine` | Silbergelatine-Optik |
| `geometric overlay` | Geometrische Überlagerung |

---

## Stimmungsvolle Farbeffekte (Tageszeiten & Natur)

Natürliche Lichtstimmungen – besonders für Landschaften.

| Token | Stimmung |
|-------|----------|
| `morning grey` | Früher Morgen, gedämpft |
| `sunrise amber` | Sonnenaufgang, warm-golden |
| `golden hour` | Goldene Stunde, weich |
| `sunset magenta` | Sonnenuntergang, pink-violett |
| `twilight hues` | Dämmerung, blau-violett |
| `midnight black` | Tiefe Nacht |
| `warm colors` | Warme Farbpalette |
| `cool colors` | Kühle Farbpalette |
| `deep earthy tones` | Tiefe Erdtöne |
| `magic-colors` | Magisch, unwirklich |
| `vivid pop art colors` | Knallig, Pop-Art-Stil |

---

## Kombinations-Beispiele

```
high-contrast photo of a person walking through an urban park, cinematic teal-orange

photo of a tiffany-colored vintage car, isolated against a charcoal background

serene mountain landscape, sunrise amber, low saturation

dramatic chiaroscuro portrait of an old man, monochrome
```

---

## Hinweise zur Stabilität

| Kategorie | Stabilität |
|-----------|------------|
| Basis-Farben | ⬛⬛⬛ Sehr stabil |
| Assoziative Farben | ⬛⬛⬜ Stabil |
| Technische Filter | ⬛⬛⬜ Stabil |
| Stimmungen | ⬛⬜⬜ Kontextabhängig |

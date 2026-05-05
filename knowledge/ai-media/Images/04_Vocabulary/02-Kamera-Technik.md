---
title: Kamera & Technik – Token-Referenz
type: vocabulary
status: stable
created: '2026-05-05'
updated: '2026-05-05'
tags:
  - image-generation
  - tokens
  - camera
  - film
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
# Kamera & Technik – Token-Referenz

Tokens für Kameratypen, Filme, Linsen und Effekte.

---

## Kameratypen

| Token | Look |
|-------|------|
| `DSLR camera` | Professionell, scharf, sauberes Bokeh |
| `analog camera` | Leichte Körnung, warme Töne |
| `Polaroid` | Sofortbild-Ästhetik, Rahmen |
| `Fujifilm instax` | Instax-Look, klein, nostalgisch |
| `mobilephone photo` | Smartphone-Qualität, casual |
| `Insta360 camera` | Weitwinkel, Action-Look |

**Hinweis:** Spezifische Modelle (Canon EOS, Sony A7) zeigen inkonsistente Ergebnisse. Typen funktionieren besser.

---

## Spezialkameras

| Token | Einsatz |
|-------|---------|
| `GoPro footage` | Action, POV, Weitwinkel |
| `drone shot` | Luftaufnahme |
| `underwater camera` | Unterwasser-Szenen |
| `thermal camera` | Wärmebild-Optik |
| `night vision` | Grün-Schwarz, Restlicht |
| `surveillance camera` | CCTV-Look, körnig |
| `bodycam` | Polizei/Security-Perspektive |
| `wildlife camera` | Wildkamera, Nacht, Infrarot |
| `microscope camera` | Extreme Makro, Zellstrukturen |
| `X-ray camera` | Röntgen-Durchleuchtung |

---

## Filme & Verfahren

### Schwarzweiß (sehr stabil)
| Token | Charakter |
|-------|-----------|
| `Kodak Tri-X film` | Klassiker, mittlere Körnung |
| `Ilford HP5 film` | Kontraststark, dokumentarisch |

### Farbe (kontextabhängig)
| Token | Charakter |
|-------|-----------|
| `Kodak Portra 160 film` | Hauttöne, weich, Portrait |
| `Kodak Portra 400 film` | Vielseitig, natürlich |
| `Fujifilm Superia 1600` | Körnig, Lowlight |
| `Agfa Vista film` | Kräftige Farben, Vintage |

### Historisch/Spezial
| Token | Effekt |
|-------|--------|
| `Daguerreotype` | Früheste Fotografie, metallisch |
| `Tintype film` | Antik, dunkel, kontrastarm |
| `Cyanotype` | Blau-Weiß, Sonnendruck |
| `Kodak Aerochrome` | Infrarot-Falschfarben, Pink/Rot |
| `Redscale XR film` | Rot-Orange-Tönung |
| `washi film` | Japanisches Papier, Textur |

---

## Linsen & Effekte

### Linsen
| Token | Effekt |
|-------|--------|
| `fisheye lens` | Extreme Verzerrung, 180° |
| `tilt-shift lens` | Miniatureffekt, selektive Schärfe |
| `macro lens` | Extreme Nahaufnahme |
| `anamorphic lens` | Cinematic, horizontale Flares |

### Blur & Bewegung
| Token | Effekt |
|-------|--------|
| `bokeh` | Unscharfer Hintergrund, Lichtkreise |
| `motion blur` | Bewegungsunschärfe |
| `zoom blur` | Radiale Unschärfe vom Zentrum |
| `panning blur` | Hintergrund verwischt, Motiv scharf |
| `soft focus` | Weichzeichner, träumerisch |
| `blurry lens` | Generell unscharf |

### Licht-Effekte
| Token | Effekt |
|-------|--------|
| `lens flare` | Gegenlicht-Reflexionen |
| `light leaks` | Lichteinfall, analog |
| `ray of light` | Sichtbare Lichtstrahlen |
| `starburst effect` | Stern-Reflexionen bei Lichtquellen |
| `silhouette` | Gegenlicht, nur Umriss |

### Spezial
| Token | Effekt |
|-------|--------|
| `multiple exposure` | Doppelbelichtung |
| `prism effect` | Regenbogen-Brechung |
| `infrared filter` | Falschfarben, weiße Vegetation |
| `polarizing filter` | Reduzierte Reflexionen, satte Farben |
| `cracked lens` | Gebrochenes Glas im Bild |
| `freeze motion` | Eingefrorene Bewegung (Wassertropfen etc.) |

---

## Kombinations-Beispiele

```
Polaroid photo, lens flare, photo of friends at sunset

Kodak Portra 160 film, soft focus, portrait of an elderly man

GoPro selfie shot, motion blur, skydiver over mountains
```


---

## Foto-Zustand (Vintage-Effekte)

Modifier für den physischen Zustand oder die Alterung eines Fotos – unabhängig von der Aufnahmetechnik.

| Token | Effekt |
|-------|--------|
| `vintage` | Allgemein gealtert, nostalgisch |
| `old` | Alt wirkend, unspezifisch |
| `yellowed` | Vergilbt, Alterung durch Licht |
| `sepia` | Braun-Tönung, klassisch |
| `partially burnt` | Angebrannte Ränder/Stellen |
| `destroyed` | Stark beschädigt |
| `scratched` | Kratzer auf der Oberfläche |
| `colorized` | Nachträglich koloriert (wie alte SW-Fotos) |
| `black-white grainy` | SW mit starker Körnung |

**Tipp:** Dekaden-Angaben funktionieren ebenfalls: `1950s photo of...`, `1970s photo of...`

---

## Kombinations-Beispiele (erweitert)

```
yellowed Polaroid photo, scratched, portrait of a grandmother

1960s photo, black-white grainy, street scene in New York

vintage photo, partially burnt edges, wedding couple
```

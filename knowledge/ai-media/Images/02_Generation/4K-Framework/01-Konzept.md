---
title: 'Konzept – Subjekt, Medium, Eigenschaften'
type: guide
status: stable
created: '2026-05-05'
updated: '2026-05-05'
tags:
  - image-generation
  - prompting
  - 4k-framework
sources:
  - 'self-authored:loschke:media-experimentation'
area: ai-media
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Konzept – Das Herzstück des Prompts

Das Konzept definiert das **"Was"** deines Bildes: Welches Subjekt oder Objekt ist zu sehen, und in welchem Medium wurde es erstellt?

## Kernbestandteile

### 1. Subjekt oder Objekt
Der "Star" deines Bildes:
- **Personen** – Einzeln oder Gruppen, definiert durch Alter, Ethnie, Beruf, Merkmale
- **Tiere** – Wild oder domestiziert, verschiedene Arten und Rassen
- **Landschaften** – Natur oder urban, von Bergen bis Skylines
- **Gebäude** – Von historischen Denkmälern bis modernen Wolkenkratzern
- **Fahrzeuge** – Autos, Fahrräder, Flugzeuge, Schiffe
- **Alltagsgegenstände** – Gewöhnliche und ungewöhnliche Objekte

### 2. Medium
Die "Technik" der Darstellung:

**Künstlerische Medien:**
- Malerei: oil painting, watercolor, acrylic painting
- Zeichnung: pencil drawing, charcoal sketch, ink drawing
- Druck: woodcut, risograph print, linocut
- Digital: digital illustration, 3D render, pixel art

**Stilrichtungen:**
- Illustration: editorial illustration, children's book illustration, vintage illustration
- Cartoon: cartoon, comic style, anime
- Spezial: graffiti, stained glass, mosaic, tattoo style

**Marketing-Medien:**
- Fotografie: photo, studio photo, fashion photography
- Design: logo, packaging design, product visualization
- Konzept: blueprint, wireframe, mockup

### 3. Eigenschaften
Spezifische Details zu Subjekt und Medium:
- **Subjekt-Eigenschaften:** Alter, Farbe, Größe, Zustand, Stil
- **Medium-Eigenschaften:** Textur, Technik, Qualität (rough, fine, bold, delicate)

## Prompt-Aufbau

**Basisstruktur:**
```
[medium] of [subjekt/objekt]
```

**Mit Eigenschaften:**
```
[medium-eigenschaften] [medium] of [subjekt-eigenschaften] [subjekt/objekt]
```

## Beispiele nach Komplexität

### Minimal
```
a pencil drawing of a man in his 40s
a photo of a tuscan landscape
an illustration of a white cow
```

### Mit Subjekt-Eigenschaften
```
a pencil drawing of a man in his 40s with a full beard
a photo of a desolate tuscan landscape
an illustration of a very overweight white cow
```

### Mit Medium-Eigenschaften
```
a rough blue pencil sketch of a man in his 40s
a vintage analogue black-white photo of a tuscan landscape
a cartoon illustration of a white cow
```

### Kombiniert
```
a fine pencil drawing of a man in his 20s with a bald head and a moustache
a vintage analogue black-white photo with damaged edges of a desolate tuscan landscape
a black and white dotted illustration of a man in his 40s with long grey hair and beard
```

## Medien-Variationen am gleichen Subjekt

Das gleiche Subjekt in verschiedenen Medien erzeugt völlig unterschiedliche Wirkungen:

```
an illustration of an asian man in his 40s
an acryl painting of a maasai warrior in his 40s
a cartoon illustration of a police man in his 40s
a graffiti of a punk in his 40s with a colourful mohawk hairstyle
a stained glass painting of an elegant and rich man in his 40s
```

## Tipps

**Spezifität zählt:** "a man" ist weniger kontrollierbar als "a man in his 40s with grey hair and full beard"

**Medium bestimmt Stil:** Das gewählte Medium bringt automatisch typische Eigenschaften mit – ein "oil painting" hat andere Textur als ein "pencil drawing"

**Eigenschaften früh nennen:** Wichtige Merkmale am Anfang des Prompts werden stärker gewichtet

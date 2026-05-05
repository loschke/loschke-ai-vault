---
title: Prompt-Formeln – Methodik
type: reference
status: stable
created: '2026-05-05'
updated: '2026-05-05'
tags:
  - image-generation
  - prompting
  - templates
  - formulas
  - methodology
sources:
  - 'self-authored:loschke:media-experimentation'
area: ai-media
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Prompt-Formeln

Wiederverwendbare Prompt-Architekturen für konsistente Bildgenerierung. Eine Formel ist ein Template mit Platzhaltern, das sich für viele Varianten nutzen lässt.

---

## Prinzip

**Problem:** Jedes Mal einen Prompt von Grund auf neu schreiben kostet Zeit und führt zu inkonsistenten Ergebnissen.

**Lösung:** Einmal eine funktionierende Struktur definieren, dann nur noch die Variablen austauschen.

```
Formel + Variablen = Fertiger Prompt
```

**Vorteile:**
- Schnelle Varianten-Erstellung
- Konsistente Qualität
- Wiederverwendbar über Projekte
- Lehrbar an Teams und AI-Assistenten

---

## Anatomie einer Prompt-Formel

### 1. Template (Grundstruktur)

Die Satzstruktur mit Platzhaltern in eckigen Klammern:

```
A photo of [Hauptobjekt] [Objektdetails], isolated against a [Hintergrundart] background.
```

### 2. Legende (Variablen-Definition)

Erklärt jeden Platzhalter mit Beschreibung und Beispielwerten:

| Variable | Beschreibung | Beispiele |
|----------|--------------|-----------|
| Hauptobjekt | Das zentrale Motiv | vintage Leica camera, red apple, luxury watch |
| Objektdetails | Zustand, Material, Besonderheiten | worn leather patina, with water droplets, metallic shine |
| Hintergrundart | Farbe, Textur, Stil des Hintergrunds | pure white, black, dark gradient, pastel blue with polka dots |

### 3. Beispiel-Instanzen

Konkrete Anwendungen der Formel:

```
A photo of vintage Leica camera with worn leather patina, isolated against a pure white background.

A photo of red apple with water droplets, isolated against a black background.

A photo of luxury watch with metallic shine, isolated against a dark gradient background.

A photo of vintage camera showing intricate details, isolated against a pastel blue background with polka dots.
```

---

## Formel erstellen: Schritt für Schritt

### 1. Erfolgreichen Prompt analysieren
Nimm einen Prompt, der gut funktioniert hat. Identifiziere die austauschbaren Teile.

### 2. Variablen extrahieren
Welche Elemente ändern sich je nach Anwendungsfall? Diese werden zu Platzhaltern.

### 3. Feste Struktur behalten
Welche Elemente bleiben immer gleich? Diese bilden das Gerüst.

### 4. Legende dokumentieren
Jeden Platzhalter mit Beschreibung und 3-5 Beispielwerten versehen.

### 5. Testen
Mindestens 3 verschiedene Instanzen generieren, um Robustheit zu prüfen.

---

## Beispiel-Formeln

### Produkt-Freisteller

**Template:**
```
A photo of [Hauptobjekt] [Objektdetails], isolated against a [Hintergrundart] background.
```

**Legende:**
| Variable | Beschreibung | Beispiele |
|----------|--------------|-----------|
| Hauptobjekt | Produkt oder Objekt | vintage camera, red sneaker, perfume bottle |
| Objektdetails | Zustand, Material, Details | with worn patina, showing intricate details, with metallic shine |
| Hintergrundart | Hintergrund-Stil | pure white, black, dark gradient, pastel blue with polka dots |

---

### Foto-Mockups

**Template:**
```
A photo of [Hauptmotiv] holding/featuring a [Fläche] in [Farbschema]. The environment is [Umgebung].
```

**Legende:**
| Variable | Beschreibung | Beispiele |
|----------|--------------|-----------|
| Hauptmotiv | Träger der Fläche | a man, a large billboard, a computer screen |
| Fläche | Platzierbare Oberfläche | white board, blank screen, empty billboard |
| Farbschema | Farbe der Fläche | white, colored, neutral grey |
| Umgebung | Kontext/Setting | urban street, office, highway |

---

### Text in Bild

**Template:**
```
A [Schriftstil] text that reads "[Wort]" [Positionierung]. The environment is [Umgebung].
```

**Legende:**
| Variable | Beschreibung | Beispiele |
|----------|--------------|-----------|
| Schriftstil | Stil oder Material des Textes | graffiti, metallic, neon, wood-carved |
| Wort | Der anzuzeigende Text | SALE, HELLO, OPEN |
| Positionierung | Wo der Text erscheint | on a wall, on a sign, as a sculpture |
| Umgebung | Setting | urban street, cozy living room, futuristic cityscape |

---

### Moodboards

**Template:**
```
A multi-panel mood board, split into multiple images, including [Thema] images in a [Stil] style with a [Farbschema] color scheme.
```

**Legende:**
| Variable | Beschreibung | Beispiele |
|----------|--------------|-----------|
| Thema | Zentrales Thema | beach vacation, modern office, rustic wedding |
| Stil | Ästhetischer Stil | minimalist, vintage, bohemian |
| Farbschema | Farbpalette | pastel tones, monochrome, vibrant colors |

---

### Festmotive

**Template:**
```
A festive decoration of [Hauptmotiv], designed in a [Stil] style. The scene features [Beleuchtung], with a [Farbpalette] color scheme. The composition follows [Komposition] principles, incorporating [Details] to enhance visual appeal.
```

**Legende:**
| Variable | Beschreibung | Beispiele |
|----------|--------------|-----------|
| Hauptmotiv | Festliches Thema | Christmas ornaments, Easter bunnies, Halloween ghosts |
| Stil | Atmosphäre | extravagant and over-the-top, minimalist and clean |
| Beleuchtung | Lichtstimmung | bright and cheerful, warm and cozy, spooky and eerie |
| Farbpalette | Farbschema | traditional red and green, pastel colors, vibrant neon |
| Komposition | Bildaufbau | centered composition, overhead shot, close-up detail |
| Details | Zusätzliche Elemente | ribbons, lights, confetti, glitter |

---

## Formel-Qualitätskriterien

Eine gute Prompt-Formel erfüllt:

| Kriterium | Beschreibung |
|-----------|--------------|
| **Modular** | Variablen sind unabhängig austauschbar |
| **Robust** | Funktioniert mit verschiedenen Werten |
| **Verständlich** | Legende ist selbsterklärend |
| **Getestet** | Mindestens 3 erfolgreiche Instanzen |
| **Spezifisch genug** | Gibt klare Richtung vor |
| **Flexibel genug** | Lässt Raum für Varianten |

---

## AI-Instruktion: Neue Formel erstellen

Wenn ein Nutzer eine neue Prompt-Formel benötigt:

1. **Anwendungsfall klären:** Wofür wird die Formel gebraucht?
2. **Kernelemente identifizieren:** Was muss immer enthalten sein?
3. **Variablen definieren:** Was soll austauschbar sein?
4. **Template formulieren:** Englisch, klare Struktur
5. **Legende erstellen:** Variable | Beschreibung | 3-5 Beispiele
6. **3 Instanzen generieren:** Zum Testen und als Inspiration

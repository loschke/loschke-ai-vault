---
title: Text & Graphics
type: reference
status: stable
created: '2026-01-24'
updated: '2026-01-24'
tags:
  - text
  - typography
  - graphics
  - logo
  - limitations
  - capability
sources:
  - 'self-authored:loschke:media-experimentation'
area: ai-media
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Text & Graphics

## Überblick

Text & Graphics ist die **Typography-Capability** im AI Image Editing – aber mit wichtigen Einschränkungen. Sie ermöglicht das Bearbeiten, Ersetzen und Hinzufügen von Text in Bildern sowie Logo-Redesigns und grafische Anpassungen. **Kritische Limitation:** AI ist **nicht perfekt bei Text** – Rechtschreibfehler, unleserliche Buchstaben und ungenaue Reproduktion sind häufig. Für kritische Anwendungen (finale Logos, wichtige Schrift) solltest du immer manuell nachprüfen und ggf. nachbearbeiten.

**Warum trotzdem nützlich:** Schnelle Mockups, iterative Design-Exploration, Text-Varianten für A/B-Tests, Platzhalter-Text für Layouts. Die Capability ist **hervorragend für Exploration und Konzepte**, aber benötigt oft manuelle Feinarbeit für Produktionsqualität.

---

## Kernfähigkeiten

- **Text Replacement** - Bestehenden Text durch neuen ersetzen
- **Text Removal** - Text vollständig entfernen
- **Text Addition** - Neuen Text hinzufügen
- **Font/Style Modification** - Schriftart oder Stil ändern
- **Logo Redesign** - Logo-Varianten explorieren (⚠️ oft imperfekt)
- **Color/Material Changes** - Text-Farbe oder -Material ändern
- **Layout Adjustment** - Text-Positionierung anpassen

---

## Praktische Beispiele

### Beispiel 1: Text Replacement (Marketing-Material)

**Kontext:** Poster mit "SALE" soll "NEW" sagen

**Input:** Poster mit Text "SALE"

**Basic Replacement:**
```
replace the text "SALE" with "NEW"
```

**Ergebnis:** Funktioniert oft, aber prüfe Rechtschreibung!

**Optimiert mit Style-Preservation:**
```
replace "SALE" with "NEW":
- maintain exact same font style
- keep same size and positioning
- preserve text color and effects
- match original text quality
```

**⚠️ Reality Check:** 
- Einfache Worte: 70-80% Erfolgsrate
- Komplexe/lange Texte: 40-60% ohne Fehler
- IMMER manuell prüfen!

---

### Beispiel 2: Text Removal

**Kontext:** Wasserzeichen oder unerwünschter Text entfernen

**Input:** Bild mit störendem Text/Watermark

**Prompt:**
```
remove all text from this image:
- clean removal, no artifacts
- restore background naturally
- seamless integration
```

**Für spezifische Text-Elemente:**
```
remove only the watermark text:
- preserve all other elements
- natural background reconstruction
```

**Use Case:** Stock-Fotos bereinigen, Prototypen aufräumen

---

### Beispiel 3: Text Addition (mit Limitations!)

**Kontext:** Text zu Bild hinzufügen

**Input:** Produktfoto ohne Text

**Prompt:**
```
add text "PREMIUM QUALITY" at the top:
- bold sans-serif font
- white color with subtle shadow
- centered horizontally
- professional and clean
```

**⚠️ Erwartung vs. Realität:**
- Text erscheint oft mit Fehlern: "PREMIIM QUALTY"
- Positionierung ungefähr korrekt, aber nicht pixelgenau
- Stil ungefähr wie beschrieben

**Best Practice:**
```
1. Nutze AI für Placement und ungefähre Ästhetik
2. Screenshot/Export
3. Korrigiere Text manuell in Photoshop/Figma
```

---

### Beispiel 4: Logo Redesign Exploration

**Kontext:** Logo-Varianten schnell explorieren

**Input:** Bestehendes Logo

**Color Variation:**
```
change logo colors:
- primary: navy blue → forest green
- maintain exact logo shape and typography
- preserve all proportions
```

**Style Variation:**
```
transform logo style:
- from modern minimal to vintage badge style
- maintain brand name legibility
- add decorative elements typical of vintage badges
- keep overall recognizability
```

**⚠️ Wichtig:** 
- Exploration: ✅ Großartig für Konzepte
- Final Production: ❌ Manuelle Nacharbeit nötig
- Nutzung: Ideen sammeln, dann Designer präzise umsetzen lassen

---

### Beispiel 5: Font/Style Modification

**Kontext:** Bestehenden Text in anderem Stil

**Input:** Text in Serif-Font

**Prompt:**
```
change text font to modern sans-serif:
- maintain text content exactly (check spelling!)
- clean geometric sans-serif style
- same size and position
- preserve color
```

**Material Change:**
```
transform text to gold metallic:
- maintain typeface and layout
- luxurious gold material with realistic reflections
- 3D embossed appearance
```

---

### Beispiel 6: Text in Image Integration

**Kontext:** Text natürlich in Szene integrieren

**Input:** Café-Szene

**Prompt:**
```
add text "COFFEE & CO" on the wall:
- painted sign aesthetic
- vintage hand-painted style
- integrated as if part of the location
- natural aging and wear
```

**Ergebnis:** AI versteht räumliche Integration, aber Text-Genauigkeit schwankt

---

## Business Use Cases

### Marketing & Advertising (mit Vorsicht!)
- **Quick Mockups** - Schnelle Varianten für Stakeholder
- **A/B Testing Concepts** - Verschiedene Headlines testen (Konzept-Phase)
- **Campaign Variations** - Text-Varianten explorieren
- **⚠️ Finale Assets:** Immer manuell nachbearbeiten!

### Product Packaging (Exploration)
- **Label Variants** - Verschiedene Texte/Farben testen
- **Design Exploration** - Schnelle Iterationen
- **⚠️ Produktion:** Designer finalisiert basierend auf AI-Konzept

### Social Media (Informal)
- **Meme Creation** - Text-Overlays (Fehler oft tolerierbar)
- **Story Graphics** - Quick-and-dirty Content
- **⚠️ Brand-Critical:** Manuell checken

### Retail & Signage (Konzept)
- **Store Signage Concepts** - Wie würde es aussehen?
- **Menu Variations** - Layout-Ideen
- **⚠️ Installation:** Finale Version manuell

---

## Prompt-Patterns

### Pattern 1: Text Replacement
```
replace text "[old]" with "[new]":
- maintain exact font style
- preserve size, position, color
- match original quality
```

### Pattern 2: Text Removal
```
remove [text description]:
- clean removal
- restore background naturally
- seamless
```

### Pattern 3: Text Addition (mit Disclaimer!)
```
add text "[content]" [location]:
- [font/style description]
- [color/effects]
- [positioning]
NOTE: Check spelling manually!
```

### Pattern 4: Logo Modification
```
modify logo:
- change [specific aspect]
- maintain [what to preserve]
- [style/aesthetic direction]
```

### Pattern 5: Text Style Transformation
```
transform text style to [new style]:
- maintain text content (verify!)
- [style specifications]
- preserve [layout/positioning]
```

---

## Typische Probleme & Quick-Fixes

| Problem | Ursache | Lösung / Akzeptanz |
|---------|---------|-------------------|
| Rechtschreibfehler | AI-Text-Schwäche | ✅ Akzeptiere & korrigiere manuell |
| Unleserlicher Text | Komplexe Fonts | ✅ Nutze für Konzept, Designer finalisiert |
| Falsche Positionierung | Ungenaue räumliche Kontrolle | Nutze als Basis, justiere in Bildbearbeitungs-Tool |
| Inkonsistente Font-Qualität | Variable AI-Reproduktion | ✅ Mehrfach generieren, beste wählen |
| Logo-Details verloren | Komplexität zu hoch | Nutze als Inspiration, nicht finale Version |
| Text-Größe inkorrekt | Fehlende präzise Constraints | Beschreibe relativ: "same size as original" |

---

## Best Practices

### Do's ✅
- **Nutze für Exploration und Konzepte** - Schnelle Ideen
- **Prüfe Text IMMER manuell** - Rechtschreibung, Lesbarkeit
- **Einfache Worte funktionieren besser** - "SALE" > "EXTRAORDINARY"
- **Generiere mehrere Varianten** - Wähle beste
- **Kombiniere mit manueller Nacharbeit** - AI-Konzept → Designer-Finish

### Don'ts ❌
- **NICHT für finale kritische Assets** ohne manuelle Prüfung
- **NICHT komplexe Logos erwarten** - Exploration only
- **NICHT erwarten: pixel-perfekte Typographie**
- **NICHT blind vertrauen** - Errors sind normal

---

## Workflow-Empfehlung

### Für Marketing-Material:
```
1. AI-Prompt: Quick Concept mit Text-Varianten
2. Review: Screenshot, beste Variante identifizieren
3. Designer: Nachbau mit korrektem Text in Design-Tool
4. Production: Professionelle finale Version
```

### Für Social Media (informal):
```
1. AI-Prompt: Text-Overlay
2. Manual Check: Rechtschreibung korrigieren wenn nötig
3. Post: Oft "good enough" für Social
```

### Für Logo Exploration:
```
1. AI-Prompt: 3-5 Stil-Varianten
2. Stakeholder Review: Richtung auswählen
3. Designer: Professioneller Nachbau der gewählten Richtung
```

---

## Kombinations-Tipps

### Text-Graphics + [[Style-Materials]]
```
1. Text-Graphics: Text platzieren (grob)
2. Style-Materials: Material/Stil auf Text anwenden
3. Manual: Text-Genauigkeit korrigieren
```

### Text-Graphics + [[Object-Manipulation]]
```
1. Object-Manipulation: Störende Elemente entfernen
2. Text-Graphics: Text hinzufügen
3. Manual: Text finalisieren
```

---

## Alternative Workflows

**Für präzisen Text:**
```
Option A - AI für Layout, Manual für Text:
1. AI: "add placeholder text 'XXXXX' in this style and position"
2. Manual: Ersetze Placeholder mit korrektem Text in Photoshop

Option B - Hybrid:
1. Design Text in Figma/Illustrator (perfekt)
2. AI: Integriere in Szene, Style anpassen
```

---

## Pro-Tipps

**Tipp 1: Keep it Simple**
```
Kurze, einfache Worte funktionieren besser:
✅ "NEW", "SALE", "OPEN"
⚠️ "EXTRAORDINARY OPPORTUNITY"
```

**Tipp 2: Multiple Generations**
```
Generate 3-4 Varianten:
- Text-Genauigkeit variiert
- Wähle beste Rechtschreibung
- Kombiniere beste Elemente
```

**Tipp 3: Nutze als Design-Exploration**
```
AI stärke: Schnelle visuelle Richtungen
AI schwäche: Präzise Typographie
→ Nutze für "wie könnte es aussehen", nicht "finale Umsetzung"
```

**Tipp 4: Clear Separation of Concerns**
```
AI-Job: Konzept, Layout, Style-Richtung
Designer-Job: Korrekte Typographie, Details, Produktion
→ Kombiniere Stärken
```

---

## Realistische Erwartungen

**Was funktioniert:**
- ✅ Text Removal (80-90%)
- ✅ Einfache Text-Replacement (70-80%)
- ✅ Logo Color/Material Changes (75-85%)
- ✅ Text-Style Exploration (80% für Konzepte)

**Was herausfordernd ist:**
- ⚠️ Präziser Text Addition (40-60% fehlerfrei)
- ⚠️ Komplexe Logo Redesigns (50-60% nutzbar)
- ⚠️ Lange Text-Passagen (30-40% ohne Fehler)
- ⚠️ Filigrane Typographie (40-50%)

**Akzeptiere:**
- Text-Genauigkeit ist AI-Schwäche
- Manuelle Nacharbeit oft nötig
- Nutze als Konzept-Tool, nicht Production-Tool
- Kombiniere AI-Speed mit Designer-Precision

---

## Nächste Schritte

**Neu bei Text & Graphics?**
- Starte mit Text Removal (einfachste Aufgabe)
- Übe einfache Text Replacements
- Verstehe Limitations bei Addition

**Bereit für mehr?**
- [[Style-Materials]] - Text-Material-Transformationen
- [[Composition-Scene-Building]] - Text in Szenen integrieren
- Lerne: Hybrid-Workflows (AI + Manual Tools)

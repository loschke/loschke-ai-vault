---
title: Composition & Scene Building
type: reference
status: stable
created: '2026-01-24'
updated: '2026-01-24'
tags:
  - composition
  - scene-building
  - multi-source
  - integration
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
# Composition & Scene Building

## Überblick

Composition & Scene Building ist die **Orchestrierungs-Capability** im AI Image Editing. Während Object Manipulation einzelne Elemente verwaltet, geht es hier um das große Ganze: **Mehrere Quellen zu einer kohärenten Szene zusammenführen**. Person + Produkt + Hintergrund + Props – alles muss harmonisch zusammenpassen in Beleuchtung, Perspektive, räumlichen Beziehungen und Stil.

**Warum Business-Critical:** Im E-Commerce und Marketing ist das DER Game-Changer. Statt teure Shootings mit Models, Produkten, Locations zu organisieren, kombinierst du existierendes Material zu neuen Szenen. Ein Produktfoto + eine Hand + ein professioneller Hintergrund = professionelle Lifestyle-Aufnahme ohne Studio. Das ist nicht mehr "Compositing wie in Photoshop" (wo du jeden Schatten manuell malst), sondern **semantische Komposition** – die AI versteht, wie Dinge räumlich zueinander stehen sollten.

---

## Kernfähigkeiten

- **Multi-Source Integration** - 2-4 verschiedene Bilder zu einer Szene kombinieren
- **Räumliche Orchestrierung** - Elemente in korrekten Größenverhältnissen und Positionen platzieren
- **Beleuchtungs-Harmonisierung** - Einheitliche Lichtverhältnisse über alle Quellen schaffen
- **Sketch-basierte Komposition** - Grobe Skizze als Layout-Template nutzen
- **Kontext-bewusste Integration** - AI versteht "Produkt in Hand vor Hintergrund" als räumliche Hierarchie
- **Perspektiv-Anpassung** - Elemente aus verschiedenen Winkeln zusammenführen

---

## Praktische Beispiele

### Beispiel 1: Multi-Source Product Lifestyle Shot

**Kontext:** Professionelles Produktfoto ohne Model-Shooting oder Studio

**Inputs:**
- Bild 1: Smartphone (Produktfoto, neutral)
- Bild 2: Hand (Produktfoto, neutral)
- Bild 3: Professioneller Office-Hintergrund

**Basic Approach:**
```
combine these images: put the smartphone in the hand, 
place them in the office scene
```

**Ergebnis:** Funktioniert, aber Beleuchtung inkonsistent, Größen wirken falsch

**Professional Approach:**
```
create a professional product shot:
- place this smartphone in this hand with natural grip
- position hand + phone in this office environment
- match lighting across all elements (soft diffused light from left)
- maintain realistic depth of field
- hand in foreground, office blurred background
```

**Ergebnis:** 
- Smartphone korrekte Größe in Hand
- Hand natürlich positioniert im Office
- Einheitliche Beleuchtung
- Professionelle Schärfentiefe
- Wirkt wie ein $5000 Shooting für $0

---

### Beispiel 2: Sketch als Kompositions-Template

**Kontext:** Komplexe Szene planen - grobe Skizze als Layout

**Input:**
- Grobe Skizze: Personen-Position, Objekt-Platzierungen skizziert
- Text-Beschreibung der gewünschten Szene

**Prompt:**
```
use this sketch as layout guide, create a realistic scene with:
- two people positioned as shown
- table with laptop as sketched
- professional office background
```

**Ergebnis:** AI interpretiert Skizze als räumliche Anordnung, füllt realistische Details

**Vorteil:** Du brauchst nur grobe Planung, AI kümmert sich um professionelle Ausführung

---

### Beispiel 3: Person + Produkt + Branded Environment

**Kontext:** Marketing-Material für Marken-Kampagne

**Inputs:**
- Model-Foto (Person in neutraler Pose)
- Produktfoto (freigestellt)
- Brand-Environment (Store/Office/Event-Location)

**Strategie-Prompt:**
```
compose a branded lifestyle shot:
- this person holding this product
- in this brand environment
- maintain brand colors (blue and silver tones)
- professional commercial photography style
- person in focus, environment slightly blurred
```

**Zusätzliche Constraints:**
```
preserve:
- person's exact facial features and pose
- product details and branding
- environment's spatial layout

adjust:
- lighting to be consistent and flattering
- color grading to match brand guidelines
```

**Ergebnis:** Wiederverwendbare Marketing-Assets ohne koordiniertes Shooting

---

### Beispiel 4: Multi-Character Scene

**Kontext:** Mehrere Personen in einer Szene (z.B. Meeting, Event)

**Inputs:**
- Person A (Einzelfoto)
- Person B (Einzelfoto)
- Person C (Einzelfoto)
- Meeting-Room-Hintergrund

**Complex Prompt:**
```
create a professional meeting scene:
- person A at the head of the table (from this image)
- person B and C seated on the sides (from these images)
- maintain natural spatial relationships
- unified lighting (soft overhead + window light from right)
- natural interactions (B looking at A, C looking at document)
- realistic shadows and reflections
```

**Challenge:** Je mehr Personen, desto schwieriger Konsistenz

**Best Practice:** 
1. Start mit 2 Personen
2. Teste Ergebnis
3. Füge schrittweise weitere hinzu

---

### Beispiel 5: Product in Lifestyle Context

**Kontext:** Produkt in realistischer Nutzungssituation zeigen

**Input:**
- Produkt (freigestellt)
- Lifestyle-Szene (z.B. Küche, Outdoor, Gym)

**Simple Version:**
```
place this product in this kitchen scene, natural placement on counter
```

**Professional Version:**
```
integrate this product into this kitchen scene:
- on the marble counter near the window
- natural morning light from left (match existing scene lighting)
- subtle product reflection on counter surface
- depth of field: product sharp, background slightly soft
- aspirational yet realistic lifestyle aesthetic
```

**Ergebnis:** Produkt sieht aus, als gehöre es seit Jahren in diese Küche

---

## Business Use Cases

### E-Commerce
- **Lifestyle Product Shots** - Produkt in Nutzungskontext ohne Model-Shooting
- **360° Product Presentation** - Gleicher Hintergrund, verschiedene Produkt-Winkel
- **Product-in-Hand** - Größendarstellung durch Hand-Kontext
- **Seasonal Context** - Produkt in wechselnden saisonalen Umgebungen
- **Variant Presentation** - Mehrere Produkt-Varianten in gleicher professioneller Szene

### Marketing & Advertising
- **Campaign Consistency** - Gleicher Look über verschiedene Assets
- **Multi-Product Scenes** - Produktfamilie in einer Szene
- **Brand Environment Integration** - Produkte in Marken-typischen Settings
- **Social Media Content** - Schnelle Creator-ähnliche Compositions
- **A/B Testing Visuals** - Gleiche Szene, verschiedene Arrangements

### Real Estate & Interior
- **Virtual Staging** - Möbel in leere Räume komponieren
- **Renovation Previews** - Neue Elemente in bestehende Räume integrieren
- **Mood-Board Realization** - Skizzen/Moodboards in realistische Renders

### Content Creation
- **Storytelling Scenes** - Narrative Szenen aus Einzelelementen
- **Tutorial Visualizations** - Schritt-für-Schritt in visuellen Kontexten
- **Before/After Scenarios** - Transformations visualisieren

### Event & Hospitality
- **Event Previews** - Wie wird das Event aussehen?
- **Menu Visualization** - Gerichte in Restaurant-Ambiente
- **Room Setup Previews** - Verschiedene Arrangements testen

---

## Prompt-Patterns

### Pattern 1: Basic Multi-Source Composition
```
combine these images: [element A] [relationship] [element B] [context C]
```

**Beispiele:**
- `combine these: smartphone in this hand, in this office background`
- `put this product on this table in this room`

### Pattern 2: Hierarchical Composition
```
create a scene with:
- [primary element] in [position]
- [secondary element] [spatial relationship]
- [background/context]
- [constraints]
```

**Beispiel:**
```
create a scene with:
- this person in the center foreground
- this product in their hand naturally
- this office as background
- soft professional lighting, person in focus
```

### Pattern 3: Sketch-Guided Composition
```
use this sketch as layout guide, create [scene description] with [elements]
```

**Beispiel:**
```
use this sketch as layout, create a professional meeting:
- two people positioned as sketched
- laptop and documents on table
- modern office background
```

### Pattern 4: Brand-Consistent Composition
```
compose a [brand style] shot:
- [elements to combine]
- maintain [brand attributes]
- [quality/style requirements]
```

**Beispiel:**
```
compose a minimalist Apple-style shot:
- this product as hero element
- clean white surface
- soft diffused lighting
- aspirational and premium feel
```

### Pattern 5: Multi-Layer with Specific Control
```
integrate these elements with precise control:
- foreground: [element A] [details]
- midground: [element B] [details]
- background: [element C] [details]
- lighting: [description]
- color grading: [description]
```

### Pattern 6: Context-Adaptive Placement
```
place [element] in [scene], 
adapt to scene's [lighting/perspective/style],
[integration requirements]
```

**Beispiel:**
```
place this product in this lifestyle photo,
match existing warm sunset lighting,
realistic shadow on the surface,
natural placement as if always there
```

---

## Typische Probleme & Quick-Fixes

| Problem | Ursache | Lösung |
|---------|---------|--------|
| Größenverhältnisse falsch | Keine räumlichen Constraints | `realistic proportions`, `natural size relative to [reference]` |
| Beleuchtung inkonsistent | Verschiedene Lichtquellen in Inputs | `unified lighting from [direction]`, `match existing scene lighting` |
| Elemente wirken "aufgeklebt" | Fehlende Integration-Details | `natural shadows and reflections`, `depth of field`, `seamless integration` |
| Perspektiven passen nicht | Unterschiedliche Kamerawinkel | `maintain consistent perspective`, `adjust to scene viewpoint` |
| Zu viel ändert sich | Fehlende Erhaltungs-Constraints | `preserve original [what to keep]`, explizit benennen |
| Farben harmonieren nicht | Keine Color-Grading-Anweisung | `unified color grading`, `match [color palette]` |
| Räumliche Beziehungen unklar | Vage Positionierung | `[element A] in foreground`, `[element B] behind and to the left` |
| Qualität/Stil inkonsistent | Verschiedene Qualitätsstufen in Inputs | `professional photography style throughout`, `consistent quality` |

---

## Kombinations-Tipps

### Composition + [[Object-Manipulation]]
**Workflow:** Erst komponieren, dann aufräumen
```
1. Composition: Szene aus Quellen bauen
2. Object-Manipulation: Störende Elemente entfernen
3. Composition: Falls nötig, Feintuning
```

### Composition + [[Light-Color-Optimization]]
**Workflow:** Erst Struktur, dann Ästhetik
```
1. Composition: Elemente platzieren
2. Light-Color: Beleuchtung harmonisieren, Color Grading
```

### Composition + [[Style-Materials]]
**Workflow:** Content-Structure → Style
```
1. Composition: Szene aufbauen (Was + Wo)
2. Style-Materials: Einheitlicher Stil über alle Elemente
```

### Composition + [[Character-Editing]]
**Workflow:** Multi-Person-Szenen mit Konsistenz
```
1. Character-Editing: Personen individuell optimieren
2. Composition: Personen in gemeinsame Szene
3. Light-Color: Einheitliche Atmosphäre
```

### Full Professional Workflow
```
1. Composition: Basis-Szene aus Quellen (grob)
2. Object-Manipulation: Clean-up, Details
3. Light-Color: Beleuchtung + Farbharmonie
4. Style (optional): Einheitlicher Look
5. Composition-Refinement: Finale Details
```

---

## Best Practices

### Do's ✅
- **Plane räumliche Hierarchie** - Was ist vorne, was hinten?
- **Definiere Beleuchtung explizit** - Richtung, Qualität, Konsistenz
- **Nutze Referenzen** - Zeige gewünschtes Ergebnis
- **Iteriere in Schichten** - Erst Struktur, dann Details
- **Sei spezifisch bei Constraints** - Was MUSS erhalten bleiben?
- **Denke in Tiefe** - Foreground/Midground/Background

### Don'ts ❌
- **Nicht zu viele Quellen auf einmal** (Max 3-4 für Start)
- **Nicht Perspektive ignorieren** - Matching ist wichtig
- **Nicht Licht vergessen** - #1 Grund für "fake" Aussehen
- **Nicht unrealistische Kombinationen** erwarten (AI braucht Plausibilität)
- **Nicht zu vage Positionierung** - "somewhere" funktioniert schlecht

---

## Advanced Techniques

### Technique 1: Layered Composition
```
Approach: Build scene in layers, refine each

Step 1: Background + Primary Element
"place this person in this environment, natural integration"

Step 2: Add Secondary Element
"add this product in person's hand, maintain scene consistency"

Step 3: Props & Details
"add subtle props (coffee cup on table), natural placement"
```

### Technique 2: Constraint-Stacking
```
For complex scenes with many requirements:

Base composition prompt +
"maintain: [list of preservation constraints]" +
"match: [list of adaptation requirements]" +
"add: [list of enhancement requests]"
```

### Technique 3: Reference-Guided Composition
```
Provide visual reference of desired final composition:

"recreate this composition style [reference image]:
- spatial arrangement similar
- lighting quality similar  
- but use these elements: [your sources]"
```

---

## Troubleshooting Checklist

Wenn Composition nicht funktioniert:

**1. Räumliche Klarheit?**
- [ ] Ist klar was vorne/hinten ist?
- [ ] Sind Größenverhältnisse definiert?
- [ ] Ist Perspektive konsistent?

**2. Beleuchtung definiert?**
- [ ] Lichtrichtung angegeben?
- [ ] Lichtqualität beschrieben?
- [ ] Konsistenz gefordert?

**3. Integration-Details?**
- [ ] Schatten erwähnt?
- [ ] Reflexionen erwähnt?
- [ ] Depth-of-Field definiert?

**4. Constraints gesetzt?**
- [ ] Was muss erhalten bleiben?
- [ ] Was darf sich ändern?
- [ ] Stil/Quality-Level definiert?

**5. Zu komplex?**
- [ ] Weniger als 4 Quellen?
- [ ] Schritt-für-Schritt möglich?
- [ ] Einzelne Elemente erst testen?

---

## Pro-Tipps

**Tipp 1: Start Simple, Build Up**
```
Schlecht: Alle 5 Elemente auf einmal komponieren
Besser: 
  - Base (Background + Primary)
  - Add Secondary
  - Add Props
  - Refine
```

**Tipp 2: Master + Variants Pattern**
```
1. Erstelle perfekte Master-Composition
2. Variiere dann einzelne Elemente
3. Konsistenz bleibt erhalten
```

**Tipp 3: "Natural" ist dein Freund**
```
"natural placement"
"natural lighting integration"
"natural spatial relationships"
→ AI macht plausible Annahmen
```

**Tipp 4: Referenz-Qualität matched Output**
```
High-Res Inputs → High-Res Output
Professionelle Quellen → Professionelles Ergebnis
Konsistente Qualität in Inputs → Konsistenz im Output
```

---

## Nächste Schritte

**Neu bei Composition?**
- Starte mit 2-Source-Compositions (Pattern 1)
- Übe Beleuchtungs-Matching
- Experimentiere mit räumlichen Beziehungen

**Bereit für Fortgeschrittenes?**
- [[Light-Color-Optimization]] - Compositions polieren
- [[Style-Materials]] - Einheitlicher Look über Elemente
- [[Character-Editing]] - Multi-Person-Scenes meistern

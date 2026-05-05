---
title: Understanding/01_Capabilities/Spatial Reasoning
type: reference
status: stable
created: '2026-01-27'
updated: '2026-01-27'
tags:
  - capability
  - understanding
  - ai-media
  - vision
  - spatial
  - robotics
  - ui-automation
sources:
  - 'self-authored:loschke:media-experimentation'
area: ai-media
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Spatial Reasoning

> Räumliche Beziehungen verstehen – die Grundlage für Robotik, Navigation und UI-Analyse.

---

## Was ist Spatial Reasoning?

Spatial Reasoning ist die Fähigkeit, räumliche Beziehungen zwischen Objekten zu verstehen: Position, Entfernung, Orientierung, Überlappung, Containment. Es geht über "Was ist im Bild?" hinaus zu "Wie sind die Dinge zueinander angeordnet?".

**Typische Outputs:** Positionsbeschreibungen, Distanzschätzungen, Navigationsinstruktionen, UI-Element-Lokalisierung

### Warum eine eigene Capability?

Spatial Reasoning entwickelt sich gerade stark:
- GPT-4o kann Bounding Boxes mit Koordinaten ausgeben
- Gemini 2.5 hat explizite Spatial Understanding Features
- Agentic Use Cases (UI-Navigation, Robotik) brauchen präzises räumliches Verständnis
- Benchmarks wie SpatialBench zeigen: Hier ist noch viel Entwicklungspotenzial

---

## Wie funktioniert es?

1. **Object Grounding:** Objekte im Bild identifizieren und lokalisieren
2. **Relation Extraction:** Beziehungen zwischen Objekten ableiten
3. **Coordinate Systems:** Mapping auf Koordinatensysteme (relativ oder absolut)
4. **Reasoning:** Schlussfolgerungen über Positionen, Erreichbarkeit, Pfade

---

## Arten räumlicher Beziehungen

| Kategorie | Beispiele |
|-----------|-----------|
| **Topologisch** | in, auf, unter, neben, zwischen |
| **Directional** | links von, rechts von, über, hinter |
| **Distanz** | nah, fern, berührt, überlappt |
| **Orientierung** | zeigt nach, blickt auf, parallel zu |
| **Containment** | enthält, umschließt, innerhalb |

---

## Stärken

- **UI-Navigation** – "Klicke auf den Button rechts neben dem Suchfeld"
- **Robotik-Instruktionen** – "Greife das Objekt links vom roten Würfel"
- **Accessibility** – Räumliche Beschreibungen für Sehbehinderte
- **Scene Understanding** – Tieferes Verständnis von Bildkompositionen

---

## Limitierungen

| Limitation | Workaround |
|------------|------------|
| **Absolute Distanzen** | Nur relative Schätzungen möglich ohne Referenz |
| **3D aus 2D** | Tiefe ist aus Einzelbildern schwer ableitbar |
| **Kleine Objekte** | Positionsgenauigkeit sinkt bei kleinen Elementen |
| **Ambigue Perspektiven** | Mehrere Bilder oder Kontext nötig |
| **Koordinaten-Präzision** | Variiert stark zwischen Modellen |

---

## Wann Spatial Reasoning vs. andere Capabilities?

| Situation | Empfehlung |
|-----------|------------|
| "Wo ist X relativ zu Y?" | **Spatial Reasoning** |
| "Was ist im Bild?" | [[Scene-Description]] |
| "Wo genau ist X?" (Koordinaten) | [[Object-Detection]] |
| "Wie komme ich von A nach B?" | **Spatial Reasoning** |
| UI-Element per Koordinaten ansteuern | **Spatial Reasoning** + [[Object-Detection]] |

---

## Tools im Überblick

| Tool | Spatial Features | Stärke |
|------|------------------|--------|
| **GPT-4o** | Bounding Box Outputs, relative Positionen | UI-Analyse, Koordinaten-Ausgabe |
| **Gemini 2.5** | Explizites Spatial Understanding | 3D-Reasoning, komplexe Szenen |
| **Claude** | Gute relative Beschreibungen | Präzise Sprache, wenig Fehler |
| **Molmo** (Allen AI) | Pointing, Koordinaten | Open Source, Forschung |

### Entwicklung beobachten

Dieser Bereich entwickelt sich schnell:
- **Agentic AI:** Computer-Use braucht präzise UI-Koordinaten
- **Embodied AI:** Robotik braucht 3D-Spatial-Reasoning
- **AR/VR:** Räumliches Verständnis für Mixed Reality

---

## Typische Workflows

### 1. UI-Automation
Screenshot → "Wo ist der Submit-Button?" → Koordinaten → Klick-Action

### 2. Scene Layout Analysis
Raumbild → "Beschreibe das Layout: Was steht wo?" → Grundriss-ähnliche Beschreibung

### 3. Navigation Instructions
Karten-/Wegbild → "Wie komme ich von A nach B?" → Schritt-für-Schritt Anweisungen

### 4. Accessibility Description
Komplexes Bild → Räumliche Beschreibung für Screenreader

---

## Prompting-Tipps

**Für relative Positionen:**
> Beschreibe die räumliche Anordnung der Objekte im Bild. Verwende Begriffe wie "links von", "über", "hinter", etc.

**Für Koordinaten (GPT-4o):**
> Gib die Position des [Elements] als Bounding Box an. Format: [x1, y1, x2, y2] in Prozent der Bildgröße.

**Für UI-Navigation:**
> Ich will auf [Element] klicken. Beschreibe, wo es sich auf dem Bildschirm befindet, relativ zu anderen UI-Elementen.

**Für 3D-Schätzung:**
> Basierend auf der Perspektive: Welches Objekt ist näher an der Kamera – A oder B? Erkläre dein Reasoning.

**Für Pfadbeschreibung:**
> Beschreibe den Weg von [Start] zu [Ziel] im Bild. Welche Objekte passiert man?

---

## Use Cases im Detail

### Computer Use / UI Agents
Agentic AI muss UI-Elemente präzise lokalisieren:
1. Screenshot analysieren
2. Ziel-Element identifizieren
3. Koordinaten für Mausklick ableiten
4. Action ausführen

### Robotik-Instruktionen
Natürlichsprachliche Befehle → räumliche Aktionen:
> "Stelle die Tasse rechts neben die Kaffeemaschine"
→ Objekte lokalisieren → relative Position berechnen → Bewegung planen

### Accessibility
Räumliche Bildbeschreibungen für Sehbehinderte:
> "Im Vordergrund links steht eine Person. Rechts von ihr, etwa zwei Meter entfernt, befindet sich ein Tisch mit drei Stühlen..."

---

## Siehe auch

- [[Object-Detection]] – Bounding Boxes und Koordinaten
- [[Visual-QA]] – Fragen zu Bildinhalten
- [[Scene-Description]] – Allgemeine Bildbeschreibung
- [[Video-Understanding]] – Räumliche Veränderungen über Zeit

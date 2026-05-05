---
title: AI Image Editing – Bildsammlung Prompts
type: reference
status: stable
created: '2026-05-05'
updated: '2026-05-05'
tags:
  - image-editing
  - prompts
  - image-collection
  - seminar
sources:
  - 'self-authored:loschke:media-experimentation'
area: ai-media
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# AI Image Editing – Bildsammlung: Generierungsprompts

> Prompts zur Erstellung der Übungs-Bildsammlung.
> Alle Prompts sind tool-agnostisch formuliert, optimiert für fotorealistische Ergebnisse.
> Empfohlene Tools: GPT-4o (image gen), Midjourney v6+, Flux Pro, Ideogram 2.0
>
> **Wichtig:** Die Arbeitspferde (P1, P2, P3, S1-S4) müssen stilistisch zueinander passen.
> Deshalb: Alle mit demselben Tool und möglichst in einer Session generieren.
> Ziel-Ästhetik: Moderne Business-Fotografie, natürlich, nicht überproduziert.
>
> Siehe [[_Editing-Denkmodell]] für das Denkmodell und [[Editing-Uebungskarten]] für die Übungskarten.

Die vollständige Prompt-Sammlung mit allen 30 Bildern (18 Übungsbilder + 12 Bonus) ist als separate Datei verfügbar: `AI-Image-Editing-Bildsammlung-Prompts.md` in den Outputs.

## Übersicht der Bildsammlung

### Arbeitspferde (10 Bilder)
| ID | Motiv | Format | Cluster |
|----|-------|--------|---------|
| P1 | Business-Portrait Frau | 3:4 | T, E, V, K |
| P2 | Business-Portrait Mann | 3:4 | T, E, V, K |
| P3 | Teamfoto | 16:9 | T, E, V, K |
| S1 | Büro-Szene | 16:9 | E, V, K |
| S2 | Café-Szene | 16:9 | V, K |
| S3 | Konferenzraum | 16:9 | V, K |
| S4 | Gebäude-Außenansicht | 16:9 | E, V |
| PR1 | Kopfhörer (Studio) | 1:1 | T, E, K |
| PR2 | Trinkflasche (Lifestyle) | 1:1 | T, E, K |
| PR3 | Bluetooth-Speaker (Freisteller) | 1:1 | K |

### Problembilder (4 Bilder)
| ID | Motiv | Problem |
|----|-------|---------|
| FIX1 | Eventfoto | Störende Person am Bildrand |
| FIX2 | Standortfoto | Grauer, trister Himmel |
| FIX3 | Portrait | Unprofessioneller Hintergrund |
| FIX4 | Teamfoto | Offensichtliche Lücke in der Gruppe |

### Kombinier-Paare
| Set | Bild A | Bild B | Ziel |
|-----|--------|--------|------|
| K1 | P1/P2 | S1/S2 | Person in neue Umgebung |
| K2 | PR1/PR2 | S1/S2 | Produkt in Lifestyle-Kontext |
| K3 | P1 + P2 | S3 | Zwei Portraits → Teamszene |
| K4 | PR3 | Beliebige Szene | Produktplatzierung |

### Bonus-Sammlung (12 Bilder)
B-P1 Handwerker, B-P2 Studentin, B-P3 Koch, B-S1 Stadtpark, B-S2 Fabrik, B-S3 Hörsaal, B-S4 Lager, B-PR1 Verpackungen, B-PR2 Bürostuhl, B-PR3 Lebensmittel, B-K1 Art-Deco-Fassade, B-K2 Vintage Auto, B-K3 Marktszene, B-K4 Leerer Holztisch

## Generierungs-Hinweise

### Konsistenz
- Gleicher Realismus-Grad über alle Arbeitspferde
- Ähnliche Farbtemperatur (warm-neutral)
- Alle Arbeitspferde in einer Session mit demselben Tool generieren

### Lichtrichtung dokumentieren
Für jedes Bild notieren, woher das Licht kommt (entscheidend für Kombinieren):
- P1: Licht von oben links
- P2: Licht von links (Fenster)
- S1: Licht von rechts (Fenster)
- S2: Licht von links (Fenster)

### Auflösung
Mindestens 1024×1024. Für Kombinier-Übungen ist mehr besser.

> **Vollständige Prompts:** Die detaillierten Generierungs-Prompts für alle 30 Bilder liegen als Download-Datei vor.

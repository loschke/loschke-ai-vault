---
title: Bildgenerierung – Übersicht
type: moc
status: living
created: '2026-05-05'
updated: '2026-05-05'
tags:
  - image-generation
  - overview
  - text-to-image
sources:
  - 'self-authored:loschke:media-experimentation'
area: ai-media
audience:
  - praktiker
  - konzepter
  - entwickler
level: basic-to-advanced
intent:
  - verstehen
  - anwenden
contains:
  - framework
  - vocabulary
  - example
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Bildgenerierung – Strategischer Überblick

Text-to-Image erzeugt Bilder aus Beschreibungen. Im Gegensatz zu Bildbearbeitung (Editing) geht es hier um das **initiale Erstellen** von Motiven, die noch nicht existieren.

## Generation vs. Editing

| | Generation | Editing |
|---|---|---|
| **Ausgangspunkt** | Textbeschreibung | Existierendes Bild |
| **Ergebnis** | Neues Motiv | Verändertes Motiv |
| **Stärke** | Konzepte visualisieren, Varianten erzeugen | Präzise Kontrolle, Feinarbeit |
| **Typischer Einsatz** | Frühe Kreativphase, Ideation | Finalisierung, Anpassung |

**Generation ist nicht tot** – auch wenn Editing-Tools immer mächtiger werden. Generation bleibt relevant für:

- **Motive, die es nicht gibt** – Konzepte, Fantasie, Zukunftsvisionen
- **Varianten in Sekunden** – 20 Richtungen testen statt eine umsetzen
- **Stilistische Konsistenz** – Gleicher Look über viele Assets
- **Startpunkte für Video** – Kontrollierte Szenen für Image-to-Video

## Typischer Workflow

```
Generation → Editing → Post-Production
```

1. **Generation**: Grundmotiv erstellen (dieses Kapitel)
2. **Editing**: Anpassen, Verfeinern, Kombinieren (→ [[_Capabilities-Overview|03_Capabilities]])
3. **Post-Production**: Finalisierung in klassischen Tools

## Business-Anwendungen

Bildgenerierung ist ein Produktionswerkzeug. Die wichtigsten Einsatzfelder:

### Konzeption & Prototyping
Logo-Entwicklung, Corporate Design, Produktvisualisierungen, Messestand-Konzepte – Ideen sichtbar machen, bevor sie in Produktion gehen.

### Marketing & Werbemedien
Mockups, Event-Motive, Texteffekte, Kampagnen-Visuals – fertige Assets für die Kommunikation.

### Assets & Materialien
Icons, Texturen, Muster, Hintergründe, Freisteller – Bausteine für größere Projekte.

### Ads & Scrollstopper
Aufmerksamkeitsstarke Elemente für Social Ads und Performance Marketing.

### Fotografie ohne Shooting
Stock-Alternativen, Produktfotos, Porträts, Landschaften – fotorealistisch ohne Kamera.

→ Details in [[_Use-Cases-Overview|Use Cases]]

## Vocabulary: Token-Referenz

Für konsistente Prompts steht eine kuratierte Sammlung bewährter Begriffe zur Verfügung:

→ [[04_Vocabulary/_Token-Referenz|Vocabulary – Token-Referenz]]

Enthält: Perspektiven, Kamera-Technik, Foto-Stile, Adjektive, Farben & Kontraste, Menschen (Herkunft, Alter, Erscheinung, Emotionen).

---

## Prompting-Systematik: Das 4K-Framework

Strukturierte Prompts über vier Dimensionen:

| Dimension | Kernfrage |
|-----------|-----------|
| **Konzept** | Was ist zu sehen, in welchem Medium? |
| **Kontext** | Wo, wann, was passiert? |
| **Komposition** | Welche Perspektive, welche Stimmung? |
| **Kreativität** | Welcher individuelle Style? |

→ Details in [[_4K-Framework|4K-Framework]]

## Prompt-Formeln: Wiederverwendbare Templates

Einmal eine funktionierende Struktur definieren, dann nur noch Variablen austauschen:

```
Formel + Variablen = Fertiger Prompt
```

→ Methodik und Beispiele in [[Prompt-Formeln]]

## Inhalt dieses Kapitels

```
02_Generation/
├── 4K-Framework/        # Systematik für Prompt-Erstellung
│   ├── 01-Konzept
│   ├── 02-Kontext
│   ├── 03-Komposition
│   └── 04-Kreativitaet
└── Use-Cases/           # Business-Anwendungen mit Beispielen
    ├── 01-Konzeption-Prototyping
    ├── 02-Marketing-Werbemedien
    ├── 03-Assets-Materialien
    ├── 04-Ads-Scrollstopper
    └── 05-Fotografie
```

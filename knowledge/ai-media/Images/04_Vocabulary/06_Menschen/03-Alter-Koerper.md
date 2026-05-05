---
title: Alter & Körper – Token-Referenz
type: vocabulary
status: stable
created: '2026-05-05'
updated: '2026-05-05'
tags:
  - image-generation
  - tokens
  - people
  - age
  - body
  - diversity
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
# Alter & Körper – Token-Referenz

Tokens für Altersstufen, körperliche Merkmale und authentische Darstellung.

---

## Altersstufen

Konkrete Altersangaben funktionieren zuverlässig.

| Alter | Lebensphase |
|-------|-------------|
| `2-year-old` | Kleinkind |
| `4-year-old` | Kindergartenalter |
| `8-year-old` | Grundschulkind |
| `10-year-old` | Kind |
| `12-year-old` | Vorpubertät |
| `16-year-old` | Teenager |
| `18-year-old` | Junger Erwachsener |
| `20-year-old` | Frühes Erwachsenenalter |
| `30-year-old` | Erwachsen |
| `40-year-old` | Mittleres Alter |
| `50-year-old` | Reifes Alter |
| `60-year-old` | Frühe Senioren |
| `70-year-old` | Senioren |
| `80-year-old` | Hohes Alter |
| `90-year-old` | Sehr hohes Alter |

**Beispiel-Prompt:**
```
A portrait of a 70-year-old with curly grey hair and a friendly smile, wearing a simple white shirt, standing in front of a neutral gray background –style raw
```

---

## Authentizität erhöhen

KI-Modelle neigen zu idealisierten, "geglätteten" Gesichtern. Explizite Altersmerkmale machen Bilder authentischer.

| Alter | Authentizitäts-Token |
|-------|---------------------|
| 12 | `wearing braces` (Zahnspange) |
| 16 | `experimenting with fashion style`, `acne` |
| 40 | `signs of tiring work`, `faint wrinkles` |
| 50 | `visible laugh lines`, `greying temples` |
| 60 | `wearing reading glasses`, `silver hair` |
| 70+ | `grey hair`, `textured skin`, `deep wrinkles` |
| 80+ | `age spots`, `thin white hair` |

**Beispiel mit Authentizität:**
```
A portrait of a 60-year-old man with grey hair, visible laugh lines and reading glasses, warm expression –style raw
```

---

## Körperliche Merkmale

Diverse körperliche Eigenschaften – mit Vorsicht verwenden (siehe Bias-Hinweis in Overview).

| Token | Beschreibung |
|-------|--------------|
| `overweight` | Übergewichtig |
| `underweight` | Untergewichtig |
| `athletic build` | Athletisch |
| `tall` | Groß |
| `short stature` | Klein |
| `dwarfism` | Kleinwuchs |
| `pregnant` | Schwanger |
| `muscular` | Muskulös |

---

## Besondere Merkmale

| Token | Beschreibung |
|-------|--------------|
| `albinism` | Albinismus |
| `vitiligo` | Vitiligo (Weißfleckenkrankheit) |
| `freckles` | Sommersprossen |
| `Down Syndrome` | Down-Syndrom |
| `in a wheelchair` | Im Rollstuhl |
| `prosthetics` | Prothesen |
| `body modifications` | Körpermodifikationen |
| `visible scars` | Sichtbare Narben |
| `birthmark` | Muttermal |

**Beispiel-Prompt:**
```
A portrait of a Caucasian woman in her 30s with vitiligo, standing in a neutral indoor setting –style raw
```

> **Bias-Warnung:** Die KI verknüpft bestimmte Merkmale oft automatisch mit stereotypen Umgebungen oder Kleidung. Neutrale Hintergründe und explizite Kleidungsangaben helfen, dies zu kontrollieren.

---

## Kombinations-Beispiele

```
A portrait of a 45-year-old man with greying temples and laugh lines, wearing a casual sweater, warm lighting

A full-body shot of a pregnant woman in her 30s, athletic build, yoga studio setting

A portrait of a 12-year-old girl with braces, messy ponytail, school uniform
```

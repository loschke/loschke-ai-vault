---
title: Adjektive – Token-Referenz
type: vocabulary
status: stable
created: '2026-05-05'
updated: '2026-05-05'
tags:
  - image-generation
  - tokens
  - adjectives
  - mood
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
# Adjektive – Token-Referenz

Adjektive steuern Stimmung und Wirkung. Entscheidend: Beschreibe ich das **Foto** (Bildwirkung) oder das **Objekt** (Zustand)?

---

## Bildwirkung (Atmosphäre des Fotos)

Beschreibt, wie das Bild *wirken* soll – unabhängig vom Motiv.

| Token | Wirkung |
|-------|---------|
| `minimalist` | Reduziert, viel Negativraum |
| `serene` | Ruhig, friedlich |
| `idyllic` | Idealisiert, perfekt |
| `tranquil` | Still, entspannt |
| `cozy` | Gemütlich, warm |
| `elegant` | Edel, raffiniert |
| `opulent` | Üppig, reich |
| `lavish` | Verschwenderisch, luxuriös |
| `maximalist` | Voll, detailreich, überbordend |
| `surreal` | Unwirklich, traumhaft |
| `unusual` | Ungewöhnlich, überraschend |
| `cinematic` | Filmisch, dramatisch |

**Position im Prompt:**
```
[ADJEKTIV] photo of [MOTIV]
```

**Beispiel:**
```
serene photo of a villa in a tuscan landscape
```

---

## Objektzustand (Eigenschaften des Motivs)

Beschreibt den physischen Zustand oder Charakter des abgebildeten Objekts.

| Token | Beschreibung |
|-------|--------------|
| `modern` | Zeitgenössisch, aktuell |
| `futuristic` | Zukunftsweisend |
| `minimalist` | Schlicht, reduziert |
| `rustic` | Ländlich, naturbelassen |
| `overgrown` | Überwuchert, von Natur zurückerobert |
| `abandoned` | Verlassen |
| `desolate` | Öde, trostlos |
| `haunted` | Unheimlich, gespenstisch |
| `opulent` | Prunkvoll |
| `vibrant` | Lebendig, pulsierend |
| `blooming` | Blühend |
| `frozen` | Gefroren, vereist |

**Position im Prompt:**
```
photo of a [ADJEKTIV] [OBJEKT]
```

**Beispiel:**
```
photo of an abandoned villa in a tuscan landscape
```

---

## Der Unterschied in der Praxis

Gleicher Prompt, andere Wirkung:

| Prompt | Ergebnis |
|--------|----------|
| `serene photo of a villa` | Ruhige Bildstimmung, Villa kann modern sein |
| `photo of a serene villa` | Die Villa selbst wirkt ruhig/friedlich |
| `abandoned photo of a villa` | ❌ Macht keinen Sinn |
| `photo of an abandoned villa` | ✅ Villa ist verlassen |

**Faustregel:**
- Atmosphäre/Stimmung → **vor** "photo of"
- Physischer Zustand → **nach** "photo of a/an"

---

## Kombinations-Beispiele

```
cinematic photo of an abandoned factory, foggy morning

serene minimalist photo of a modern japanese house

surreal photo of an overgrown library, rays of light
```

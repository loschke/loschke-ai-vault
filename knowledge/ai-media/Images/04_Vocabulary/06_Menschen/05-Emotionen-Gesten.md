---
title: Emotionen & Gesten – Token-Referenz
type: vocabulary
status: stable
created: '2026-05-05'
updated: '2026-05-05'
tags:
  - image-generation
  - tokens
  - people
  - emotions
  - gestures
  - body-language
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
# Emotionen & Gesten – Token-Referenz

Tokens für Mimik, Körperhaltung und emotionale Darstellung.

---

## Emotionen (Mimik)

Abstrakte Emotionen funktionieren, aber physische Beschreibungen verstärken das Ergebnis.

| Emotion | Token mit Beschreibung |
|---------|------------------------|
| Furcht | `fear, characterized by wide eyes and a slightly open mouth` |
| Hoffnung | `hope, characterized by an expectant look and a slight smile` |
| Erleichterung | `relief, characterized by closed eyes and a relaxed mouth` |
| Enttäuschung | `disappointment, characterized by a lowered head and a sad or resigned expression` |
| Traurigkeit | `sadness, characterized by downcast eyes and a slight frown` |
| Trauer | `sorrow, characterized by tearful eyes, a frowning mouth` |
| Interesse | `interest, characterized by a slightly tilted head and focused eyes` |
| Stolz | `pride, characterized by a straight head, slight smile, and chest out` |
| Freude | `joy, characterized by a wide smile and sparkling eyes` |
| Zufriedenheit | `contentment, characterized by a slight smile and relaxed facial features` |
| Wut | `anger, characterized by narrowed eyes and a scowling mouth` |
| Verachtung | `contempt, characterized by a one-sided lip raise and a scornful look` |
| Eifersucht | `jealousy, characterized by tight lips and a brooding or envious look` |
| Überraschung | `surprise, characterized by raised eyebrows and an open mouth` |
| Erstaunen | `astonishment, characterized by wide-open eyes and mouth, a surprised expression` |
| Langeweile | `boredom, characterized by a vacant stare and an absent facial expression` |
| Ekel | `disgust, characterized by a wrinkled nose and a grimacing mouth` |
| Skepsis | `skepticism, characterized by a raised eyebrow and a skewed mouth` |
| Scham | `shame, characterized by a lowered head and avoiding gaze` |
| Verwirrung | `confusion, characterized by furrowed brows, lowered gaze, and slightly open mouth` |

**Beispiel-Prompt:**
```
A portrait of a Caucasian man in his 40s displaying joy, characterized by a wide smile and sparkling eyes, set against a neutral background –style raw
```

---

## Körperhaltung (Gesten)

Körpersprache verstärkt die Aussage oder erzählt eine eigene Geschichte.

### Positive Gesten

| Bedeutung | Token |
|-----------|-------|
| Freude / Offenheit | `open arms, expressing joy and receptiveness` |
| Pure Freude | `jumping in the air, expressing joy or excitement` |
| Zustimmung | `thumbs up, indicating approval or happiness` |
| Selbstbewusstsein | `hands on her hips, showing determination and confidence` |
| Bereitschaft | `foot forward, showing readiness or determination` |
| Interesse | `leaning forward with interest, head slightly tilted` |
| Liebe / Innigkeit | `hand on her heart, showing affection or emotion` |
| Selbstliebe / Trost | `embracing herself, conveying self-comfort` |

### Neutrale Gesten

| Bedeutung | Token |
|-----------|-------|
| Unwissenheit / Offenheit | `palms up, showing honesty, openness, or questioning` |

### Negative Gesten

| Bedeutung | Token |
|-----------|-------|
| Skepsis | `leaning back with arms crossed, suggesting skepticism` |
| Abwehr | `arms crossed, signaling reservation or defense` |
| Unsicherheit | `feet turned inward, depicting shyness or discomfort` |
| Überraschung / Schock | `hands covering her face, displaying shame, fear, or surprise` |
| Traurigkeit | `slumped shoulders, indicative of sadness or disappointment` |
| Resignation | `head in her hands, signifying sadness, frustration` |

**Beispiel-Prompt:**
```
A full-body shot of a Caucasian woman in her 20s with hands on her hips, showing determination and confidence, set against a neutral background –style raw
```

---

## Synergie: Mimik + Geste

Die stärksten emotionalen Bilder entstehen durch Kombination von Gesichtsausdruck und Körperhaltung.

### Freude & Aufregung
```
A portrait of a person laughing joyfully, hands clasped and raised in excitement, set against a neutral background –style raw
```

### Erleichterung & Dankbarkeit
```
A full-body shot of a person looking relieved, taking a deep breath with arms open, set against a neutral background –style raw
```

### Schock (OMG-Moment)
```
A portrait of a person showing surprise, hands on their head, eyes wide, set against a neutral background –style raw
```

### Trotz & Wut
```
A portrait of a person scowling with anger, arms crossed defensively, set against a neutral background –style raw
```

### Trauer & Resignation
```
A portrait of a person with tearful eyes and frowning mouth, slumped shoulders, soft lighting –style raw
```

### Stolz & Selbstbewusstsein
```
A full-body shot of a person with a slight smile and chest out, hands on hips, power pose, studio lighting –style raw
```

---

## Hinweise zur Stabilität

| Kategorie | Stabilität |
|-----------|------------|
| Basis-Emotionen (joy, anger, sadness) | ⬛⬛⬛ Sehr stabil |
| Komplexe Emotionen (jealousy, contempt) | ⬛⬛⬜ Stabil |
| Körperhaltungen | ⬛⬛⬜ Stabil |
| Synergie-Kombinationen | ⬛⬜⬜ Kontextabhängig |

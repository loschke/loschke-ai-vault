---
title: Video/04_Pre Production/Video Scripting Framework
type: framework
status: stable
created: '2026-01-24'
updated: '2026-01-24'
tags:
  - ai-video
  - scripting
  - pre-production
  - framework
sources:
  - 'self-authored:loschke:media-experimentation'
area: ai-media
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Video-Scripting-Framework

## Überblick

Video-Scripting für AI-Generierung unterscheidet sich fundamental von klassischem Scripting. Das Script ist nicht nur kreative Grundlage, sondern **technische Blaupause** für die shot-by-shot Generierung.

> "The script is where everything succeeds or fails. A great script with simple animation outperforms a mediocre script with premium production every time."

---

## Warum AI-Video-Scripts anders sind

| Klassisches Script | AI-Video-Script |
|-------------------|-----------------|
| Kontinuierliche Produktion | Diskrete Generierung (Shot = API-Call) |
| Kamera kann improvisieren | Jeder Shot muss explizit beschrieben sein |
| Character bleibt konsistent | Character Consistency muss eingeplant werden |
| Audio wird nachträglich hinzugefügt | Audio oft Teil des Prompts (Veo 3) |
| Regisseur interpretiert | AI interpretiert literal |

**Kernprinzip:** Ein AI-Video-Script muss so präzise sein, dass jemand ohne Kontext jeden Shot einzeln generieren könnte.

---

## Die 5 Säulen eines AI-Video-Scripts

### 1. Narrative Klarheit
- **Eine** zentrale Message pro Video
- Klare Transformation: Vorher → Nachher
- Jede Szene trägt zur Message bei

### 2. Shot-Disziplin
- Jede Szene = ein Generation-Call (5-20 Sekunden)
- Explizite Beschreibung von: Subject, Action, Context, Camera
- Keine impliziten Annahmen

### 3. Character Planning
- Character Bible VOR dem Script erstellen
- Referenzbilder als Teil der Dokumentation
- Konsistente Terminologie über alle Shots

### 4. Visual Continuity
- Lighting-Konzept durchgängig
- Farbpalette definiert
- Style/Mood konsistent beschrieben

### 5. Audio-Strategie
- Dialog: Wer sagt was, wann?
- Ambient: Welche Atmosphäre?
- Music: Mood, Tempo, Genre
- SFX: Welche Sounds verstärken die Szene?

---

## Script-Entwicklungsprozess

```
1. Konzept & Ziel definieren
   ↓
2. Zielgruppe & Plattform festlegen
   ↓
3. Passende Script-Struktur wählen
   → [[Script-Strukturen]]
   ↓
4. Narrative Outline schreiben
   ↓
5. Shot-by-Shot aufbrechen
   → [[Script-to-Shot-Workflow]]
   ↓
6. Storyboard erstellen
   → [[Storyboard-Workflow]]
   ↓
7. Prompts generieren
   → [[00_Prompting/Video-Prompting-Framework]]
```

---

## Script-Länge & Timing

### Faustregel: 90-120 Wörter = 1 Minute

| Video-Länge | Wörter (Voiceover) | Shots (à 5-8s) |
|-------------|-------------------|----------------|
| 15s (Social) | 30-40 | 2-3 |
| 30s (Ad) | 60-80 | 4-6 |
| 60s (Explainer) | 90-120 | 8-12 |
| 2-3min (Tutorial) | 180-360 | 15-30 |

**Wichtig:** Bei AI-Video immer in Shots denken, nicht in kontinuierlicher Zeit.

---

## Die Hook-Regel

Die ersten 3 Sekunden entscheiden über Retention.

**Effektive Hooks:**
- Provokante Frage ("Was wäre, wenn...?")
- Überraschende Statistik
- Visueller Pattern Interrupt
- Direkter Pain Point ("Kennst du das...?")
- Bold Statement

**Ineffektive Hooks:**
- Logo-Intro
- "Hallo, ich bin..."
- Langsamer Establishing Shot
- Generische Aussagen

---

## Conversational Tone

AI-Video-Scripts sollten **gesprochen** klingen, nicht geschrieben.

| Geschrieben | Gesprochen |
|-------------|------------|
| "Es ist wichtig zu beachten, dass..." | "Hier ist der Trick:" |
| "Unser Produkt ermöglicht es Ihnen..." | "Damit kannst du..." |
| "In diesem Video werden wir..." | "Ich zeig dir..." |

**Test:** Script laut vorlesen. Wenn es unnatürlich klingt → umschreiben.

---

## Call-to-Action (CTA)

Jedes Video braucht einen klaren nächsten Schritt.

| Video-Typ | CTA-Beispiele |
|-----------|---------------|
| Explainer | "Teste es kostenlos", "Mehr erfahren" |
| Social | "Folgen für mehr", "Kommentar hinterlassen" |
| Ad | "Jetzt kaufen", "Link in Bio" |
| Tutorial | "Nächstes Video ansehen", "Template downloaden" |

**Regel:** Ein CTA pro Video. Nicht drei.

---

## Häufige Fehler

1. **Zu viel wollen:** Ein Video, eine Message
2. **Implizite Annahmen:** AI versteht keinen Kontext
3. **Fehlende Character-Planung:** Drift ab Shot 3
4. **Keine Shot-Grenzen:** "Dann passiert X, dann Y, dann Z" in einem Prompt
5. **Voiceover-Video-Mismatch:** Script passt nicht zur visuellen Länge
6. **Schwacher Hook:** Erste 3 Sekunden verschenkt

---

## Quick Reference: Script-Checkliste

- [ ] Eine klare Message definiert
- [ ] Zielgruppe & Plattform klar
- [ ] Passende Struktur gewählt
- [ ] Hook in ersten 3 Sekunden
- [ ] Shot-by-Shot aufgebrochen
- [ ] Character Bible erstellt (falls Characters)
- [ ] Visual Style definiert
- [ ] Audio-Strategie klar
- [ ] CTA vorhanden
- [ ] Laut vorgelesen und getestet

---

## Weiterführend

- [[Script-Strukturen]] – AIDA, PAS, 3-Akt und wann welche
- [[Script-to-Shot-Workflow]] – Vom Script zum promptbaren Shot
- [[Storyboard-Workflow]] – Visualisierung vor Generierung
- [[00_Prompting/Video-Prompting-Framework|Video-Prompting-Framework]] – Das zentrale Prompting-Framework

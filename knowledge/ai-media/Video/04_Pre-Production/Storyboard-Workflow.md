---
title: Video/04_Pre Production/Storyboard Workflow
type: method
status: stable
created: '2026-01-24'
updated: '2026-01-24'
tags:
  - ai-video
  - storyboard
  - pre-production
  - workflow
sources:
  - 'self-authored:loschke:media-experimentation'
area: ai-media
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Storyboard-Workflow

## Überblick

Storyboards sind die visuelle Brücke zwischen Script und Generierung. Bei AI-Video sind sie nicht optional – sie sind das Mittel, um vor der teuren Generierung Konsistenz, Timing und visuelle Kohärenz zu testen.

---

## Warum Storyboarding bei AI-Video kritisch ist

| Ohne Storyboard | Mit Storyboard |
|-----------------|----------------|
| Shots passen nicht zusammen | Visuelle Konsistenz vorab geprüft |
| Character Drift unentdeckt | Character-Look validiert |
| Lighting-Inkonsistenzen | Beleuchtung durchgeplant |
| Teure Re-Generierungen | Fehler früh erkannt |
| Timing-Probleme im Cut | Pacing vorab getestet |

**ROI-Argument:** 30 Minuten Storyboarding spart Stunden an Regeneration.

---

## Storyboard-Typen

### 1. Thumbnail Storyboard
- Schnelle Skizzen
- Komposition testen
- Frühe Konzeptphase

### 2. Detailed Storyboard
- Ausgearbeitete Frames
- Character-Design validieren
- Lighting/Color testen

### 3. AI-Generated Storyboard
- Midjourney/Ideogram für Frames
- Direkt als I2V-Input nutzbar
- Höchste Konsistenz-Chance

### 4. Animatic
- Storyboard mit Timing
- Rough Motion
- Audio-Sync testen

---

## Der Storyboard-Workflow

```
1. SHOT-LISTE FINALISIEREN
   → aus [[Script-to-Shot-Workflow]]
   ↓
2. KEY FRAMES IDENTIFIZIEREN
   → 1-2 Frames pro Shot
   ↓
3. FRAMES ERSTELLEN
   → Skizze oder AI-generiert
   ↓
4. KONSISTENZ PRÜFEN
   → Character, Lighting, Style
   ↓
5. ANIMATIC ERSTELLEN (optional)
   → Timing + Audio testen
   ↓
6. ZUR GENERIERUNG
   → Frames als Referenzen nutzen
```

---

## Frame-Erstellung mit AI

### Midjourney/Ideogram für Storyboard-Frames

**Workflow:**
1. Character-Design zuerst etablieren
2. Dann Szenen-Frames mit Character-Referenz
3. Konsistente Style-Parameter verwenden

**Beispiel-Prompt (Midjourney):**

```
Storyboard frame, [SHOT DESCRIPTION], 
[CHARACTER] from reference, 
cinematic composition, 
[LIGHTING], 
16:9 aspect ratio, 
clean lines, animation style
--ar 16:9 --style raw
```

### Dedicated Storyboard-Tools

| Tool | Stärke | Workflow |
|------|--------|----------|
| **Higgsfield Popcorn** | Text → Multi-Frame | Script eingeben → Auto-Storyboard |
| **Storyboarder.ai** | Character Consistency | Konsistenteste Characters |
| **Katalist** | Script-Analyse | Automatische Shot-Erkennung |
| **Boords** | Client-Collaboration | Review + Approval Workflow |
| **Adobe Firefly Boards** | Adobe-Integration | Direkt in Creative Cloud |
| **Shai Creative** | Film-Pre-Production | Cinematic Focus |

---

## Storyboard-Frame-Template

### Für jeden Frame dokumentieren:

```
┌─────────────────────────────────────┐
│  [VISUAL FRAME]                     │
│                                     │
│                                     │
├─────────────────────────────────────┤
│ Shot #: ___  Dauer: ___s            │
│ Camera: ___________________         │
│ Action: ___________________         │
│ Audio: ____________________         │
│ Notes: ____________________         │
└─────────────────────────────────────┘
```

### Digital Template (Notion/Sheets)

| Shot | Frame | Camera | Action | Audio | Prompt-Notes |
|------|-------|--------|--------|-------|--------------|
| 1 | [img] | Wide | Sarah betritt | Tür | Warm lighting |
| 2 | [img] | CU | Setzt sich | Seufzen | Shallow DOF |

---

## Konsistenz-Checkliste

### Vor der Generierung prüfen:

**Character Consistency:**
- [ ] Gleiches Outfit in allen Frames
- [ ] Konsistente Gesichtszüge
- [ ] Gleiche Haarfarbe/-stil
- [ ] Körperproportionen stimmen

**Visual Consistency:**
- [ ] Gleiche Farbtemperatur
- [ ] Konsistente Beleuchtungsrichtung
- [ ] Einheitlicher Style (realistisch/stylisiert)
- [ ] Matching Color Grade

**Spatial Consistency:**
- [ ] 180-Grad-Regel beachtet
- [ ] Eyeline Matches vorbereitet
- [ ] Screen Direction konsistent
- [ ] Räumliche Logik stimmt

**Timing Check:**
- [ ] Shots summieren zur Ziellänge
- [ ] Pacing fühlt sich richtig an
- [ ] Ausreichend Zeit pro Beat
- [ ] Transitions eingeplant

---

## Animatic-Erstellung

### Warum Animatic?

Ein Animatic ist ein "Bewegtes Storyboard" – Frames mit Timing, oft mit Rough-Audio.

**Nutzen:**
- Pacing testen bevor Generierung
- Audio-Sync validieren
- Stakeholder-Buy-in holen
- Probleme früh erkennen

### Tools für Animatics

| Tool | Typ | Besonderheit |
|------|-----|--------------|
| **Premiere/DaVinci** | Pro | Volle Kontrolle |
| **CapCut** | Einfach | Schnell, mobil |
| **Boords** | Dedicated | Export als Video |
| **Canva** | Simple | Gute für Basic |

### Animatic-Workflow

```
1. Frames exportieren (gleiche Auflösung)
2. In Timeline importieren
3. Timing pro Frame setzen (aus Shot-Liste)
4. Rough-Audio underlegen
5. Durchschauen, Timing anpassen
6. Mit Team/Client reviewen
```

---

## Storyboard → Generation

### Frames als I2V-Input

Die Storyboard-Frames können direkt als Image-to-Video-Input dienen:

**Veo 3:**
```
Image Reference → Shot generieren
Bis zu 3 Referenzen (Character, Object, Scene)
```

**Kling:**
```
First Frame → Video generieren
Elements-System für Character Persistence
```

**Runway:**
```
Image Input → Gen-4 Prompt
Style Reference optional
```

### Qualitäts-Anforderungen für I2V-Input

| Parameter | Empfehlung |
|-----------|------------|
| Auflösung | Mindestens 1024px auf längerer Seite |
| Aspect Ratio | Ziel-Video-Ratio (16:9, 9:16, etc.) |
| Qualität | Kein Compression-Artefakte |
| Stil | Möglichst nah am Ziel-Output |

---

## Workflow-Integration

### Gesamtprozess

```
Script
  ↓
[[Script-to-Shot-Workflow|Shot-Liste]]
  ↓
Storyboard (hier)
  ↓
[Optional: Animatic]
  ↓
[[00_Prompting/Video-Prompting-Framework|Prompts schreiben]]
  ↓
Generierung
  ↓
Post-Production
```

### Zeit-Allokation (Beispiel 60s Video)

| Phase | Zeit |
|-------|------|
| Script | 2-4h |
| Shot-Liste | 1-2h |
| Storyboard | 2-4h |
| Animatic | 1-2h |
| Prompting | 2-3h |
| Generierung | 4-8h (inkl. Iteration) |
| Post | 2-4h |

**Storyboarding = 15-20% der Gesamtzeit, spart aber 30-50% bei Generierung.**

---

## Quick Reference

### Minimum Viable Storyboard

Wenn Zeit knapp:
1. Key Frames nur (1 pro dramatischem Beat)
2. Nur kritische Shots (Character-Intro, Climax, CTA)
3. Rough Skizzen okay
4. Focus auf Komposition, nicht Details

### Vollständiges Storyboard

Wenn Qualität kritisch:
1. Jeder Shot hat Frame
2. AI-generierte Frames (Midjourney)
3. Character-Referenzen etabliert
4. Animatic erstellt
5. Team-Review durchgeführt

---

## Weiterführend

- [[Video-Scripting-Framework]] – Script-Grundlagen
- [[Script-to-Shot-Workflow]] – Shots definieren
- [[01_Capabilities/Image-to-Video|Image-to-Video]] – I2V-Workflow
- [[03_Use-Cases/Storytelling|Storytelling]] – Narrative Projekte
- [[00_Prompting/Video-Prompting-Framework|Video-Prompting-Framework]] – Prompts schreiben

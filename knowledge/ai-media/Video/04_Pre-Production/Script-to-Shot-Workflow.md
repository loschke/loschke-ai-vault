---
title: Video/04_Pre Production/Script to Shot Workflow
type: method
status: stable
created: '2026-01-24'
updated: '2026-01-24'
tags:
  - ai-video
  - scripting
  - workflow
  - shots
  - pre-production
sources:
  - 'self-authored:loschke:media-experimentation'
area: ai-media
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Script-to-Shot-Workflow

## Überblick

Der kritische Übersetzungsschritt: Wie wird ein narratives Script zu einer Sequenz von generierbaren Shots? Dieser Workflow verbindet Storytelling mit technischer Prompt-Architektur.

---

## Das Problem

```
Klassisches Script:
"Sarah betritt frustriert das Büro, setzt sich an ihren Laptop 
und versucht verzweifelt, den Monatsbericht fertigzustellen."

→ Für AI-Video: Nicht generierbar (zu viel in einem Shot)
```

**Lösung:** Jede Handlung, jede Einstellung = ein separater Shot.

---

## Der 4-Schritt-Workflow

```
1. SCRIPT SEGMENTIEREN
   ↓
2. SHOTS DEFINIEREN
   ↓
3. SHOT-DETAILS SPEZIFIZIEREN
   ↓
4. PROMPTS GENERIEREN
```

---

## Schritt 1: Script Segmentieren

### Regel: Ein Shot = Eine Aktion + Ein Setting

**Segmentierungs-Trigger:**
- Ortswechsel → Neuer Shot
- Zeitsprung → Neuer Shot
- Perspektivwechsel → Neuer Shot
- Neue Handlung → Neuer Shot
- Emotionswechsel → Oft neuer Shot

### Beispiel

**Original-Script:**
> "Sarah betritt frustriert das Büro, setzt sich an ihren Laptop und versucht verzweifelt, den Monatsbericht fertigzustellen. Nach Stunden gibt sie auf und starrt aus dem Fenster."

**Segmentiert:**
1. Sarah betritt frustriert das Büro
2. Sarah setzt sich an ihren Laptop
3. Sarah tippt verzweifelt, Frustration steigt
4. Sarah gibt auf, starrt aus dem Fenster

→ 4 Shots statt 1

---

## Schritt 2: Shots Definieren

### Shot-Definition-Template

Für jeden Shot ausfüllen:

| Element | Beschreibung |
|---------|--------------|
| **Shot-Nr.** | Sequenz-Nummer |
| **Dauer** | 5-8s (optimal für AI) |
| **Subject** | Wer/Was ist im Fokus? |
| **Action** | Was passiert? (eine Handlung) |
| **Setting** | Wo? Welche Umgebung? |
| **Camera** | Einstellung + Bewegung |
| **Mood** | Emotionale Atmosphäre |
| **Audio** | Dialog / SFX / Ambient |
| **Transition** | Wie zum nächsten Shot? |

### Beispiel ausgefüllt

| Element | Shot 1 | Shot 2 |
|---------|--------|--------|
| Shot-Nr. | 1 | 2 |
| Dauer | 6s | 5s |
| Subject | Sarah, 30s, Business Casual | Sarah |
| Action | Betritt Büro, Schultern hängen | Setzt sich, öffnet Laptop |
| Setting | Modernes Büro, Morgenlicht | Schreibtisch, Monitor |
| Camera | Wide Shot → Medium | Medium Shot, statisch |
| Mood | Erschöpft, resigniert | Pflichtbewusst, müde |
| Audio | Türgeräusch, leises Seufzen | Laptop-Klicken |
| Transition | Cut | Cut |

---

## Schritt 3: Shot-Details Spezifizieren

### Die 4 Must-Haves pro Shot

1. **Subject-Spezifikation**
   - Erscheinung (Alter, Kleidung, Features)
   - Pose/Haltung
   - Expression

2. **Action-Spezifikation**
   - Start-Position
   - Bewegung
   - End-Position
   - Geschwindigkeit

3. **Visual-Spezifikation**
   - Lighting (Key, Fill, Rim)
   - Color Palette
   - Style Reference

4. **Camera-Spezifikation**
   - Shot Type (Wide, Medium, Close-up)
   - Angle (Eye-level, Low, High)
   - Movement (Static, Pan, Dolly, etc.)

### Detail-Level nach Video-Typ

| Video-Typ | Detail-Level |
|-----------|--------------|
| Social/Quick | Mittel – Subject + Action + Mood |
| Explainer | Hoch – Alle 4 Must-Haves |
| Narrative | Sehr hoch – Plus Character Bible |
| Product | Hoch – Plus Product-Spezifika |

---

## Schritt 4: Prompts Generieren

### Vom Shot-Template zum Prompt

**Shot-Template:**
```
Shot 3
Dauer: 7s
Subject: Sarah, frustriert
Action: Tippt hektisch, stoppt, reibt sich die Augen
Setting: Schreibtisch, Laptop, Papiere
Camera: Close-up Hände → Tilt up zu Gesicht
Mood: Steigende Frustration
Audio: Schnelles Tippen, dann Stille
```

**Generierter Prompt:**
```
Close-up of a woman's hands typing frantically on a laptop keyboard. 
Papers scattered on desk. She stops abruptly, camera tilts up slowly 
to reveal her face as she rubs her eyes in frustration. 
Warm office lighting, shallow depth of field.
Audio: rapid keyboard typing that stops, followed by a tired sigh.
```

### Prompt-Struktur (Veo 3)

```
[SHOT TYPE] of [SUBJECT doing ACTION].
[SETTING/CONTEXT details].
[CAMERA MOVEMENT if any].
[LIGHTING/STYLE].
[AUDIO CUE if native audio tool].
```

---

## Shot-Tabelle: Vollständiges Beispiel

### Video: "AI macht Reports" (30s Explainer)

| #   | Dauer | Type     | Subject | Action                               | Setting          | Camera            | Audio                  |
| --- | ----- | -------- | ------- | ------------------------------------ | ---------------- | ----------------- | ---------------------- |
| 1   | 5s    | Hook     | Sarah   | Starrt frustriert auf Spreadsheet    | Büro, Nacht      | MS → CU Gesicht   | Seufzen                |
| 2   | 5s    | Problem  | Sarah   | Tippt, macht Fehler, löscht          | Laptop-Screen    | CU Hände + Screen | Tippen, Error-Sound    |
| 3   | 5s    | Agitate  | Split   | Linke Hälfte: Chaos / Rechte: Erfolg | Abstract         | Static Split      | Kontrastierende Sounds |
| 4   | 5s    | Solution | Screen  | [Product] Dashboard erscheint        | UI Animation     | Screen Recording  | Whoosh                 |
| 5   | 5s    | Benefit  | Sarah   | Lächelt, lehnt sich zurück           | Büro, Tag        | MS, warm          | Zufriedenes "Ah"       |
| 6   | 5s    | CTA      | Logo    | Logo + "Try free" Text               | Clean Background | Static            | Upbeat Jingle          |

---

## Transitions zwischen Shots

### Standard-Transitions

| Typ | Wirkung | Wann verwenden |
|-----|---------|----------------|
| **Cut** | Direkt, schnell | Default, Action |
| **Dissolve** | Weich, Zeitübergang | Zeitsprünge |
| **Wipe** | Energetisch | Social, Before/After |
| **Match Cut** | Elegant, verbindend | Narrative |
| **J/L-Cut** | Audio vor/nach Video | Professionell |

### AI-Video-Realität

Bei AI-Generierung: Transitions meist im Post. Aber: **Shots so planen, dass sie zusammenpassen.**

- Ähnliche Farbtemperatur
- Kompatible Bewegungsrichtung
- Konsistente Beleuchtung
- Character im gleichen Outfit

---

## Character Consistency Workflow

Wenn Characters über mehrere Shots:

```
1. VOR dem Script: Character Bible erstellen
   - 3-5 Referenzbilder
   - Detaillierte Beschreibung
   - Feste Terminologie

2. IM Script: Konsistente Beschreibung
   - Immer gleiche Begriffe
   - Keine Variationen ("Sarah" nicht "die Frau")

3. BEI Generierung: Referenzen nutzen
   - Kling: Elements-System
   - Veo: Image References
   - Alle: Seed Reuse wo möglich
```

---

## Tools für Script-to-Shot

| Tool | Funktion |
|------|----------|
| **Notion/Google Sheets** | Shot-Tabellen |
| **Milanote** | Visual Scripting + Storyboard |
| **Celtx** | Professionelles Scripting |
| **Frame.io** | Collaboration + Review |
| **Higgsfield Popcorn** | Script → Storyboard → Video |

---

## Quick Reference

### Checkliste pro Shot

- [ ] Eindeutige Shot-Nummer
- [ ] Realistische Dauer (5-8s)
- [ ] Ein Subject klar definiert
- [ ] Eine Aktion pro Shot
- [ ] Setting beschrieben
- [ ] Camera-Einstellung gewählt
- [ ] Mood/Emotion klar
- [ ] Audio-Elemente notiert
- [ ] Transition zum nächsten Shot

### Red Flags

⚠️ "...und dann..." → Aufteilen
⚠️ Mehr als eine Handlung → Aufteilen
⚠️ Ortswechsel im Shot → Aufteilen
⚠️ Über 10s Dauer → Aufteilen

---

## Weiterführend

- [[Video-Scripting-Framework]] – Grundlagen
- [[Script-Strukturen]] – Welche Struktur wählen
- [[Storyboard-Workflow]] – Shots visualisieren
- [[00_Prompting/Video-Prompting-Framework|Video-Prompting-Framework]] – Prompt-Details
- [[00_Prompting/Camera-Motion-Prompting|Camera-Motion-Prompting]] – Kamerabewegungen

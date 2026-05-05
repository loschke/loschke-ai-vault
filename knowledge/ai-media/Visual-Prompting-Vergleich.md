---
title: AI Visual Prompting – Drei Denkmodelle im Vergleich
type: reference
status: stable
created: '2026-05-05'
updated: '2026-05-05'
tags:
  - framework
  - prompting
  - comparison
  - 4k-framework
  - image-editing
  - video
  - seminar
  - meta
sources:
  - 'self-authored:loschke:media-experimentation'
area: ai-media
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# AI Visual Prompting – Drei Denkmodelle im Vergleich

> Wie beschreibe ich einer KI, was ich sehen will?
> Diese Frage stellt sich in drei grundlegend verschiedenen Situationen — und jede erfordert ein anderes Denkmodell.
> Dieses Dokument zeigt die Gemeinsamkeiten, Unterschiede und Übergänge.
>
> **Referenzen:**
> - Bildgenerierung: [[_4K-Framework]]
> - Image Editing: [[_Editing-Denkmodell]]
> - Video Prompting: [[Video-Prompting-Framework]]

---

## Die drei Aufgaben

```
Bildgenerierung (4K)         Image Editing              Video Prompting
────────────────────         ─────────────              ───────────────
„Beschreibe ein              „Beschreibe eine           „Beschreibe einen
 neues Bild."                 Veränderung."              Ablauf über Zeit."

Input: Text                  Input: Bild + Text         Input: Text (oder Bild + Text)
Output: Ein Bild             Output: Ein verändertes    Output: 4-60 Sekunden Bewegtbild
                             Bild
```

Die Kernfrage verschiebt sich:

| | Bildgenerierung | Image Editing | Video |
|-|----------------|---------------|-------|
| **Ich beschreibe...** | Was zu sehen ist | Was sich ändert | Was passiert |
| **Die KI muss wissen...** | Wie das Bild aussieht | Was sie anfassen darf und was nicht | Wie sich die Szene über Zeit entwickelt |
| **Mein Ausgangspunkt ist...** | Eine leere Leinwand | Ein bestehendes Bild | Eine leere Timeline |

---

## Der gemeinsame Kern: Weltverständnis nutzen

Alle drei Denkmodelle bauen auf demselben Fundament auf: Bild-KIs haben Weltverständnis. Wenn du „1920er Jahre" sagst, kennt die KI Kleidung, Architektur, Farbgebung. Wenn du „Schneesturm" sagst, weiß sie, wie Schnee fällt und Licht streut.

Dieses Prinzip gilt überall:
- **Bild:** „a Parisian street café at golden hour" → die KI weiß, wie das aussieht
- **Editing:** „Mach daraus eine Winterszene" → die KI weiß, was Winter bedeutet
- **Video:** „a scientist nervously opens a letter" → die KI weiß, wie Nervosität aussieht in Bewegung

**Je besser du dieses Weltverständnis aktivierst, desto weniger musst du explizit beschreiben.**

---

## Die drei Denkmodelle im Detail

### Was du der KI pro Dimension sagst

```
                 BILD (4K)              EDITING                VIDEO
                 ═════════              ═══════                ═════
Aufgabe:         Beschreibe ein         Beschreibe eine        Beschreibe einen
                 neues Bild             Veränderung            Ablauf über Zeit
─────────────────────────────────────────────────────────────────────────────────

SUBJEKT          Was ist zu sehen?      Was bleibt?            Wer/Was ist zu sehen?
(Wer/Was)        „a woman in her 30s    „Gesicht und Frisur    „a scientist in a
                 with curly red hair"   bleiben exakt          white lab coat"
                                        erhalten"

AKTION           Implizit (Pose)        Was ändert sich?       Explizit (Handlung)
(Was passiert)   „standing, smiling"    „Ersetze den Blazer    „she lifts a glowing
                                        durch einen            vial, her expression
                                        Rollkragenpullover"    shifts from curiosity
                                                               to amazement"

UMGEBUNG         Wo und wann?           Zielbeschreibung       Wo und wann?
(Setting)        „in a Parisian         „Der Hintergrund       „sterile laboratory
                 street café            wird ein modernes      with blue fluorescent
                 at golden hour"        Büro mit Fensterlicht  lighting"
                                        von links"

PERSPEKTIVE      Kamera und             Bleibt meist           Shot Size + Angle
(Kamera)         Bildaufbau             Ankerpunkt             + Bewegung
                 „low angle,            „Komposition und       „medium shot,
                 rule of thirds"        Perspektive bleiben    eye-level,
                                        identisch"             slow dolly in"

STIL             Welches Medium?        Wird zum               Visueller Stil
(Look)           Welche Ästhetik?       Transformationsziel    + Stimmung
                 „vintage film          „Verwandle in eine     „cinematic,
                 photography,           Editorial Illustration  shot on 35mm film,
                 warm tones"            mit klaren Linien"     tense mood"

LICHT            Stimmung und           Muss konsistent        Kann sich über
(Beleuchtung)    Atmosphäre             bleiben oder           die Dauer ändern
                 „golden hour light,    bewusst geändert       „blue fluorescent
                 warm tones"            werden: „Passe die     lighting, a warm
                                        Beleuchtung an das     glow from the vial
                                        warme Bürolicht an"    illuminates her face"

─────────────────────────────────────────────────────────────────────────────────

NUR EDITING:     —                      SELEKTION              —
                                        „Der Rest des Bildes
                                        bleibt unverändert"

NUR VIDEO:       —                      —                      BEWEGUNG
                                                               „slow dolly in,
                                                               she turns slowly"

                 —                      —                      ZEIT
                                                               „5 seconds,
                                                               slow motion"

                 —                      —                      AUDIO
                                                               „SFX: electrical hum,
                                                               she whispers:
                                                               'It's alive.'"
```

### Was pro Denkmodell zu tun ist

```
BILDGENERIERUNG — Deine Checkliste:
══════════════════════════════════════
□ Konzept    → Was ist zu sehen? Welches Medium?
□ Kontext    → Wo, wann, was passiert drumherum?
□ Komposition → Welche Perspektive, welcher Bildaufbau?
□ Kreativität → Welcher Stil, welche Referenzen?

Nicht alle nötig. Weglassen schärft den Fokus.


IMAGE EDITING — Deine Checkliste:
══════════════════════════════════════
□ Cluster    → Was will ich tun? (Transformieren / Editieren / Variieren / Kombinieren)
□ Anker      → Was soll die KI auf keinen Fall verändern?
□ Eingriff   → Was genau ändert sich?
□ Ziel       → Wie sieht das Ergebnis aus? (So detailliert wie nötig)
□ Konsistenz → Stimmen Licht, Perspektive, Stil nach dem Eingriff noch?

Je stärker die Veränderung, desto detaillierter das Ziel.


VIDEO PROMPTING — Deine Checkliste:
══════════════════════════════════════
□ Kamera     → Shot Size? Winkel? Bewegung? (Cinematography zuerst!)
□ Subjekt    → Wer/Was ist zu sehen? (Detailliert für Frame-Konsistenz)
□ Aktion     → Was passiert in 4-8 Sekunden? (Max 1-2 Aktionen!)
□ Setting    → Wo, wann, Wetter, Atmosphäre?
□ Stil       → Visueller Stil + Stimmung?
□ Tempo      → Slow Motion? Time-Lapse? Normal?
□ Audio      → Dialog? Soundeffekte? Ambiente? (Falls Tool es kann)

Kamera und Aktion zuerst. Alles andere baut darauf auf.
```

---

## Dasselbe Motiv in drei Welten — Ein Durchspiel

> Ein Café-Motiv wandert durch alle drei Denkmodelle.

### Phase 1: Bild generieren (4K)

```
Konzept:     a photo of a woman in her 30s with short dark hair
Kontext:     sitting alone at a wooden table in a cozy Parisian café,
             reading a letter, a coffee cup beside her
Komposition: medium shot, eye-level, shallow depth of field,
             warm afternoon light from the window on the left
Kreativität: cinematic photography, warm nostalgic tones, soft film grain
```

**Ergebnis:** Ein fotorealistisches Bild — Frau im Café, liest einen Brief, warmes Licht.

### Phase 2: Bild editieren (Editing)

Drei verschiedene Eingriffe am selben Ausgangsbild:

**Variieren — Andere Jahreszeit:**
```
Was bleibt:       Person, Pose, Inneneinrichtung, Perspektive
Was ändert sich:  Blick durchs Fenster — statt Sommer jetzt Herbstregen
Zielbeschreibung: Durch das Fenster links sind regennasse Straßen sichtbar,
                  Herbstlaub auf dem Gehweg, beschlagenes Glas.
                  Innen bleibt es warm — warmes Kunstlicht ergänzt das
                  gedämpfte Tageslicht. Alles andere bleibt identisch.
```

**Editieren — Objekt tauschen:**
```
Was bleibt:       Alles außer dem Objekt in ihren Händen
Was ändert sich:  Statt des Briefs hält sie ein Smartphone
Zielbeschreibung: Ein modernes Smartphone in natürlicher Haltung,
                  Display leuchtet leicht, Reflexion des Displays
                  auf ihrem Gesicht. Handposition passt sich an.
```

**Kombinieren — Andere Person einsetzen:**
```
Was bleibt:       Café-Szene, Komposition, Lichtsituation
Was ändert sich:  Statt der Frau sitzt ein Mann [aus Portrait P2] am Tisch
Zielbeschreibung: Die Person aus dem Referenzbild sitzt in derselben Pose
                  am Tisch. Gesichtszüge exakt beibehalten. Beleuchtung
                  an das warme Fensterlicht der Szene anpassen.
                  Natürlicher Schattenwurf.
```

### Phase 3: Video animieren (Video)

Ausgangsbild: Das Original-Café-Bild (oder eine editierte Version).

**Image-to-Video Prompt:**
```
Medium shot, eye-level, slow dolly in over 6 seconds.
The woman slowly lowers the letter, her expression shifts
from concentration to a gentle, wistful smile.
She reaches for the coffee cup and takes a small sip.
Cozy Parisian café, warm afternoon light from the left window.
Cinematic, nostalgic, shallow depth of field.
Ambient: quiet café murmur, clinking of a spoon on porcelain.
```

**Bild-zu-Bild Video (Start- und Endframe):**
```
Startframe: Die Frau liest den Brief, konzentrierter Ausdruck
Endframe:   Die Frau hat den Brief gesenkt, lächelt sanft,
            Kaffeetasse in der Hand

Übergang:   Slow, smooth transition over 5 seconds.
            She lowers the letter naturally, her expression
            softens into a smile, she picks up the coffee cup.
            Camera holds steady, no movement.
            Ambient: café background noise, gentle music.
```

### Was man an diesem Beispiel sieht

- Das **4K-Vokabular** (warm afternoon light, shallow depth of field, cinematic) zieht sich durch alle drei Phasen.
- Beim **Editing** wird der 4K-Kontext zur Zielbeschreibung: Statt „beschreibe das Café" heißt es „das Café bleibt, aber XY ändert sich."
- Beim **Video** kommt die Zeitachse dazu: Nicht „sie liest einen Brief", sondern „sie senkt den Brief langsam, ihr Ausdruck verändert sich."
- Die **Kamerabewegung** (slow dolly in) und das **Audio** (café murmur) existieren nur im Video.

---

## Die Dimensionen im Vergleich

### Was alle drei gemeinsam haben

| Dimension | Bild (4K) | Editing | Video |
|-----------|-----------|---------|-------|
| **Subjekt** | Konzept: Was ist zu sehen? | Was bleibt? Was ändert sich? | Subject: Wer/Was ist zu sehen? |
| **Umgebung** | Kontext: Wo, wann? | Zielbeschreibung: Wie sieht das Ergebnis aus? | Scene/Context: Ort, Zeit, Wetter |
| **Stil** | Kreativität: Welcher Style? | Wird zum Transformationsziel | Visual Style: Ästhetische Richtung |
| **Perspektive** | Komposition: Kamera, Bildaufbau | Bleibt meist Ankerpunkt | Shot Size + Camera Angle |
| **Licht** | Komposition/Kontext: Stimmung | Muss bei Editing konsistent bleiben | Lighting: Eigene Kategorie |

### Was Video zusätzlich braucht

| Neue Dimension | Was sie beschreibt | Warum sie alles verändert |
|----------------|-------------------|--------------------------|
| **Bewegung** | Kamerabewegung + Subjektbewegung | Ein Bild ist ein Moment. Ein Video ist ein Verlauf. |
| **Zeit** | Ablauf innerhalb von 4-60 Sekunden | Du beschreibst eine Sequenz mit Anfang, Mitte, Ende. |
| **Audio** | Dialog, Soundeffekte, Ambiente | Komplett neue Sinnesebene. |

### Was Editing anders macht

Editing hat eine Eigenschaft, die weder Bildgenerierung noch Video haben: **Selektivität**. Du musst der KI explizit sagen, was sie NICHT anfassen soll. Bei Bild und Video generierst du alles neu. Bei Editing ist „Was bleibt?" oft wichtiger als „Was ändert sich?".

---

## Wo sich die Vokabulare überlappen

### Perspektive und Kamera

| Token | Im Bild (4K) | Im Video |
|-------|-------------|----------|
| `low-angle` | Statische Perspektive | Kann sich über die Dauer halten oder wechseln |
| `close-up` | Bildausschnitt | Shot Size für gesamte Clip-Dauer |
| `dolly in` | Nicht anwendbar | Kamerabewegung auf das Subjekt zu |
| `shallow depth of field` | Hintergrundunschärfe | Gleich — plus `rack focus` als zeitliches Element |

### Stil und Atmosphäre

Kreativitäts-Tokens aus dem 4K funktionieren 1:1 im Video. **Aber:** Im Video hat jeder Stil eine zeitliche Implikation. `noir` suggeriert nicht nur einen Look, sondern auch ein Tempo. `anime` impliziert bestimmte Bewegungsmuster.

### Licht

Licht-Vokabular ist identisch (`golden hour`, `low-key`, `rim lighting`, `volumetric`). Im Bild statisch, im Editing konsistent zum Bestand, im Video kann es sich über die Dauer verändern.

---

## Die Übergänge

### Bild → Video (Image-to-Video)

| Phase | Denkmodell | Was du beschreibst |
|-------|------------|-------------------|
| 1. Bild generieren | 4K Framework | Konzept + Kontext + Komposition + Kreativität |
| 2. Bild animieren | Video-Framework | Bewegung, Kamerabewegung, Tempo, Audio |

Das 4K-Bild definiert den Startpunkt. Das Video-Prompting definiert, was ab da passiert.

### Bild → Bild Video (Start- und Endframe)

| Phase | Denkmodell | Was du beschreibst |
|-------|------------|-------------------|
| 1. Startframe generieren/auswählen | 4K Framework | Der Ausgangszustand |
| 2. Endframe generieren/auswählen | 4K Framework | Der Zielzustand |
| 3. Übergang beschreiben | Video-Framework | Wie die KI von A nach B interpoliert: Bewegung, Tempo, Stimmungswechsel |

Hier treffen sich alle drei Welten: Du brauchst 4K-Vokabular für beide Frames, Editing-Denke für das „Was ändert sich zwischen A und B?", und Video-Sprache für das „Wie fließt der Übergang?".

### Editing → Video

Editing-Ergebnisse als Startframes für I2V: Erst korrigieren, dann animieren.

### Volle Pipeline: Bild → Editing → Video

```
1. Bild generieren (4K)     → Ausgangsmotiv erstellen
2. Bild editieren (Editing) → Korrigieren, anpassen, kombinieren
3. Video animieren (Video)  → Bewegung, Kamera, Audio hinzufügen
```

---

## Was man nur einmal lernen muss

Wer das 4K Framework beherrscht, hat ca. 60-70% des Vokabulars für alle drei Bereiche:

| 4K-Dimension | Gilt für Editing | Gilt für Video |
|--------------|-----------------|----------------|
| **Konzept** | Ja — Subjektbeschreibung identisch | Ja — Subject identisch |
| **Kontext** | Ja — Zielbeschreibung nutzt Kontext-Vokabular | Ja — Scene/Context identisch |
| **Komposition** | Teilweise — meist Ankerpunkt | Ja — Shot Size + Camera Angle |
| **Kreativität** | Ja — wird zum Transformationsziel | Ja — Visual Style identisch |

**Neu pro Bereich:**
- **Editing:** Selektionslogik, Konsistenz-Bewusstsein
- **Video:** Kamerabewegung, Timing, Audio, zeitliche Abläufe

---

## Fünf gemeinsame Prinzipien

### 1. Spezifisch schlägt vage
- Bild: „a man" < „a man in his 40s with grey hair"
- Editing: „mach den Himmel schön" < „dramatische Sturmwolken bei Abenddämmerung"
- Video: „a woman walks" < „a woman in a red coat slowly walks along a rain-soaked street"

### 2. Weniger ist oft mehr
- Bild: Nicht alle 4 Dimensionen nötig.
- Editing: Ein Eingriff pro Prompt.
- Video: Max 1-2 Aktionen pro 4-8 Sekunden.

### 3. Die KI denkt mit — nutze es
„1920er Jahre", „Winter", „nervously" → die KI ergänzt, was dazugehört.

### 4. Reihenfolge = Gewichtung
Was zuerst im Prompt steht, wird stärker gewichtet. In allen drei Bereichen.

### 5. Iterativ arbeiten ist der Normalfall
Erster Versuch selten perfekt. Verfeinern ist der Workflow, kein Versagen.

---

## Seminar-Einsatz: Die drei Stufen

| Stufe | Thema | Was man lernt | Baut auf |
|-------|-------|--------------|----------|
| **1** | Bildgenerierung (4K) | Das visuelle Vokabular | — |
| **2** | Image Editing | Die Veränderungs-Logik | 4K-Vokabular |
| **3** | Video Prompting | Die Zeit-Dimension | 4K-Vokabular + Editing-Denkweise |

**Die Botschaft:** Du lernst nicht drei separate Systeme. Du lernst eine Sprache in drei Anwendungskontexten.

---

## Schnellreferenz

| Ich will... | Denkmodell | Erste Frage |
|-------------|-----------|-------------|
| Ein Bild aus dem Nichts | 4K Framework | Was soll zu sehen sein? |
| Ein Bild verändern | Editing-Modell | Was soll bleiben? |
| Ein Video aus Text | Video-Framework | Was passiert in 4-8 Sekunden? |
| Ein Bild animieren | 4K → Video | Welche Bewegung ab diesem Moment? |
| Einen Übergang zwischen zwei Bildern | 4K + Editing + Video | Wie interpoliert die KI von Startframe zu Endframe? |
| Mehrere Bilder kombinieren | Editing (Kombinieren) | Stimmen Licht, Perspektive, Stil? |
| Eine Infografik / UI | [[Visual-Structuring]] | Welche Informationsstruktur? |

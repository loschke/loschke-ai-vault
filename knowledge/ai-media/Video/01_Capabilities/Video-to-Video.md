---
title: Video/01_Capabilities/Video to Video
type: reference
status: stable
created: '2026-01-24'
updated: '2026-01-24'
tags:
  - capability
  - video
  - ai-media
  - v2v
  - style-transfer
  - motion-transfer
sources:
  - 'self-authored:loschke:media-experimentation'
area: ai-media
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Video-to-Video (V2V)

> Transformation von bestehendem Video – Style Transfer, Character Swap, Motion Transfer, Rotoscoping.

---

## Definition

Video-to-Video nimmt bestehendes Footage als Input und transformiert es, während Bewegung und Timing erhalten bleiben. Anders als bei T2V oder I2V entsteht kein neues Video "from scratch" – die Bewegungsinformation kommt aus dem Original.

**Kernprinzip:** Du hast bereits Footage mit der richtigen Bewegung, willst aber den Look ändern.

---

## Kernfähigkeiten

### Style Transfer

Visuellen Stil transformieren, Bewegung beibehalten.

| Von → Nach | Beispiel |
|------------|----------|
| Realfilm → Anime | Live-Action in Ghibli-Stil |
| Realfilm → Pixar | Echte Person als 3D-Character |
| Realfilm → Sketch | Bleistiftzeichnung-Animation |
| Video → Gemälde | Impressionistischer Stil |
| Low-Quality → Cinematic | Amateur-Footage aufwerten |

**Typische Anwendungen:**
- Musikvideos mit einheitlichem Kunststil
- Content-Repurposing (ein Video, viele Stile)
- Anonymisierung durch Stilisierung
- Künstlerische Projekte

### Motion Transfer / Pose Transfer

Bewegung von Person A auf Person/Charakter B übertragen.

**Workflow:**
1. Reference-Video mit gewünschter Bewegung aufnehmen
2. Ziel-Charakter definieren (Bild oder Beschreibung)
3. Tool überträgt Pose Frame-für-Frame

**Anwendungen:**
- Tanz-Choreografien auf AI-Charaktere übertragen
- Prototyping für Animation
- Performance Capture ohne Mocap-Equipment

### Face Swap / Character Swap

Gesicht oder kompletten Charakter ersetzen.

**Wichtig:** Ethische und rechtliche Grenzen beachten!
- Consent der abgebildeten Person erforderlich
- Deepfake-Gesetze in vielen Ländern
- Plattform-Policies (YouTube, TikTok sperren)
- Kennzeichnungspflicht

**Legitime Anwendungen:**
- Eigenes Gesicht auf AI-Avatar
- Film-Produktion mit Stunt-Doubles
- Historische Rekonstruktionen (mit Kennzeichnung)

### Outfit / Clothing Change

Kleidung ändern bei gleichem Charakter und Bewegung.

**Anwendungen:**
- Fashion-Content: Ein Take, viele Outfits
- Produkt-Visualisierung
- Film-Kontinuitätsfehler korrigieren

### Background Replacement

Hintergrund austauschen, Vordergrund beibehalten.

**Unterschied zu Greenscreen:** Kein Greenscreen nötig – AI segmentiert automatisch.

---

## Tools

### Spezialisierte V2V-Tools

| Tool | Stärke | Schwäche | Preis |
|------|--------|----------|-------|
| **DomoAI** | Anime Style Transfer, konsistent | Begrenzte Stile | Freemium |
| **GoEnhance** | Vielfältige Stile, schnell | Qualität variiert | Freemium |
| **Kaiber** | Künstlerische Stile, Musik-Sync | Teuer für Volumen | $5/Monat+ |
| **Pika** | Gute Stil-Konsistenz | Kurze Clips | Freemium |
| **Viggle** | Motion Transfer, Character | Beta-Qualität | Free (Beta) |

### Multi-Purpose Tools mit V2V

| Tool | V2V-Feature | Anmerkung |
|------|-------------|-----------|
| **Runway Gen-3** | Style Transfer, Video-to-Video Mode | Solide, aber teuer |
| **Kling 2.0** | Motion Transfer via Elements | Gute Bewegungsqualität |
| **Luma Dream Machine** | Style Transfer | Einfach, begrenzt |

### Open Source / Lokal

| Tool | Fokus | Anforderung |
|------|-------|-------------|
| **EbSynth** | Stilübertragung von Keyframes | CPU, manuell |
| **Deforum (SD)** | Style Transfer, Animation | GPU, technisch |
| **AnimateDiff** | Konsistente Stil-Animation | GPU, Comfy/Auto |

---

## Workflows

### Basic Style Transfer

```
1. Video vorbereiten (kurz halten: 5-15 Sek)
2. Stil definieren (Preset oder Referenzbild)
3. Generieren
4. Bei Artefakten: Segmente kürzen, erneut versuchen
```

### Keyframe-basierter Workflow (EbSynth)

Für maximale Kontrolle:

```
1. Keyframes aus Video extrahieren (alle 20-50 Frames)
2. Keyframes in gewünschtem Stil neu erstellen (MJ, SD)
3. EbSynth interpoliert zwischen Keyframes
4. Zusammenfügen in Video-Editor
```

**Vorteil:** Präzise Kontrolle über Stil
**Nachteil:** Zeitaufwändig, technisch

### Motion Transfer Workflow

```
1. Reference-Video aufnehmen (klare Bewegung, gute Beleuchtung)
2. Ziel-Charakter erstellen oder auswählen
3. In Tool laden (Viggle, Kling)
4. Motion auf Charakter übertragen
5. Post-Production für Feinschliff
```

---

## Input-Anforderungen

### Video-Qualität

| Parameter | Empfehlung | Warum |
|-----------|------------|-------|
| **Auflösung** | Min. 720p, ideal 1080p | Zu niedrig = Artefakte verstärkt |
| **Framerate** | 24-30 fps | Höher = mehr Rechenzeit, kaum Vorteil |
| **Länge** | 5-15 Sekunden optimal | Längere Clips = mehr Inkonsistenzen |
| **Bewegung** | Moderat, keine Schnitte | Schnelle Bewegung/Cuts = Artefakte |
| **Beleuchtung** | Gleichmäßig | Starke Lichtwechsel verwirren AI |

### Was funktioniert gut

- Klare Silhouetten
- Konstante Beleuchtung
- Moderate Bewegung
- Einheitlicher Hintergrund
- Keine schnellen Kamerabewegungen

### Was problematisch ist

- Viele Personen/Objekte gleichzeitig
- Extreme Nahaufnahmen (Gesichter)
- Schnelle Zoom/Whip-Pans
- Wechselnde Lichtverhältnisse
- Komplexe Hintergründe

---

## Typische Probleme

| Problem | Ursache | Lösung |
|---------|---------|--------|
| **Flickering** | Inkonsistenz zwischen Frames | Clip kürzen, Stil-Stärke reduzieren |
| **Morphing-Artefakte** | Zu viel Bewegung | Langsameres Source-Video |
| **Charakter-Drift** | Stil ändert sich über Zeit | Keyframe-Workflow verwenden |
| **Unscharfe Details** | Auflösung zu niedrig | Höhere Input-Qualität |
| **Hintergrund-Bleed** | Schlechte Segmentierung | Einfarbigeren Hintergrund verwenden |

---

## Abgrenzung

| Capability | Unterschied |
|------------|-------------|
| [[Post-Production]] | Post-Production verbessert Qualität oder ändert Teile, V2V transformiert den gesamten visuellen Stil |
| [[Image-to-Video]] | I2V animiert ein Standbild, V2V transformiert bereits bewegtes Video |
| [[Text-to-Video]] | T2V generiert komplett neu, V2V behält Original-Bewegung |

**Wann V2V statt anderer Methoden:**
- Du hast bereits Footage mit der richtigen Bewegung
- Du willst einen konsistenten Stil über längere Sequenzen
- Motion Capture ohne Hardware
- Schnelles Prototyping verschiedener Looks

---

## Ethik & Rechtliches

### Deepfake-Bedenken

Face Swap und Character Swap sind die technische Grundlage für Deepfakes. Verantwortungsvoller Umgang:

- **Nur mit Consent:** Eigenes Gesicht oder explizite Erlaubnis
- **Kennzeichnung:** AI-generiert immer angeben
- **Keine Desinformation:** Nicht für Fake-News oder Manipulation
- **Plattform-Policies:** Viele Plattformen verbieten non-consensual Deepfakes

### Rechtliche Lage (Stand 2025)

- EU AI Act: Kennzeichnungspflicht für AI-generierte Inhalte
- Deutschland: Persönlichkeitsrechte, ggf. Kunsturhebergesetz
- USA: Variierende State Laws, FTC-Richtlinien
- China: Strenge Deepfake-Regulierung

→ Im Zweifel rechtliche Beratung einholen.

---

## Siehe auch

- [[00_Prompting/Video-Prompting-Framework|Video-Prompting-Framework]] – Grundlagen
- [[Image-to-Video]] – Alternative: Bild animieren
- [[Text-to-Video]] – Alternative: Komplett neu generieren
- [[Post-Production]] – Nachbearbeitung und Enhancement
- [[AI-Video-Tools-Übersicht]] – Alle Tools im Vergleich

---
title: Video/02_Tools/Veo 3 Spezifika
type: reference
status: living
created: 2026-01-24T00:00:00.000Z
updated: 2026-01-24T00:00:00.000Z
tags:
  - tool
  - video
  - ai-media
  - google
  - veo
sources:
  - 'self-authored:loschke:media-experimentation'
area: ai-media
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Veo 3 – Spezifika & Besonderheiten

> **Stand:** Januar 2026. Google entwickelt Veo aktiv weiter – Details können sich ändern.

---

## Überblick

Veo 3 ist Googles fortschrittlichstes Video-Generierungsmodell. Verfügbar über Vertex AI, Google AI Studio und die Gemini-App.

**Alleinstellungsmerkmal:** Native Audio-Generierung – Veo 3 erzeugt Bild und Ton in einem Durchgang, synchron und kontextbezogen.

---

## Technische Spezifikationen

| Parameter | Wert |
|-----------|------|
| **Clip-Länge** | 4, 6 oder 8 Sekunden |
| **Auflösung** | 720p oder 1080p |
| **Seitenverhältnis** | 16:9 (Landscape) oder 9:16 (Portrait/Vertical) |
| **Audio** | Nativ generiert (experimentell) |
| **Wasserzeichen** | SynthID (digitales Wasserzeichen in allen Outputs) |
| **Safety Filter** | Automatisch, nicht deaktivierbar |

---

## Zugang & Verfügbarkeit

| Plattform | Zugang | Besonderheiten |
|-----------|--------|----------------|
| **Vertex AI API** | Google Cloud Account + Billing | Volle Kontrolle, API-Integration |
| **Google AI Studio** | Google Account | Webinterface für Experimente |
| **Gemini App** | Gemini Advanced Abo | Consumer-Zugang, einfachste Nutzung |
| **Flow** | Google Cloud | Workflow-Integration |

---

## Audio-Generierung (USP)

### Was Veo 3 kann

- **Synchrone Soundeffekte** – Schritte, Türen, Glas, Wetter passend zur visuellen Aktion
- **Ambiente/Atmosphäre** – Hintergrundgeräusche passend zur Szene
- **Dialog** – Gesprochene Worte, lippensynchron
- **Implizite Stimmen** – Bei Beschreibungen wie "a narrator explains" generiert das Modell passende Sprache

### Audio-Prompting Best Practices

**Explizite Formatierung:**
```
SFX: [konkretes Geräusch]
Ambient: [Hintergrundatmosphäre]
Dialog: "[gesprochener Text]"
```

**Beispiel mit allen drei Typen:**
> A barista prepares coffee in a busy café. Medium shot, warm morning light. SFX: Espresso machine hissing, cup placed on saucer. Ambient: Café chatter, soft background music. She says: "Here you go, extra shot today."

### Bekannte Audio-Probleme

| Problem | Ursache | Lösung |
|---------|---------|--------|
| Ungewolltes Studiopublikum-Gelächter | Modell interpretiert Szene als Comedy | Explizit ausschließen: `no studio audience, natural ambient sounds only` |
| Asynchroner Ton | Audio-Beschreibung zu weit von Aktion entfernt | Audio direkt nach zugehöriger Aktion beschreiben |
| Unverständlicher Dialog | Zu langer oder komplexer Text | Kurze Sätze, max. ~8 Sekunden Sprechzeit |
| Falsche Aussprache von Namen | Ungewöhnliche Schreibweise | Phonetisch schreiben: "Shreedar" statt "Shridar" |
| Ungewollte Untertitel | Standard-Verhalten bei Dialog | `(no subtitles)` oder `(no text overlay)` ergänzen |
| Stille statt Audio | Keine Audio-Anweisung gegeben | Immer mindestens Ambient definieren |

---

## Besondere Features

### Image-to-Video

Veo 3 kann ein Startbild als Referenz nehmen und daraus Video generieren.

**Workflow:**
1. Bild mit Imagen 3 oder externem Tool erstellen
2. Bild als Input für Veo 3 verwenden
3. Bewegung und Audio per Prompt beschreiben

**Vorteil:** Bessere Kontrolle über Ausgangszustand, Charakterkonsistenz über mehrere Clips.

### First and Last Frame

Definiert Start- und Endzustand eines Clips durch zwei Bilder.

**Anwendung:** Kontrollierte Übergänge, Morphing-Effekte, präzise Bewegungsplanung.

### Referenzbilder für Stil/Charakter

"Ingredients to Video" – Referenzbilder für Stil, Charakter oder Objekte können mitgegeben werden, um Konsistenz über mehrere Generierungen zu halten.

---

## Prompt-Empfehlungen für Veo 3

### Googles offizielle Formel

```
[Cinematography] + [Subject] + [Action] + [Context] + [Style & Ambiance]
```

### Optimale Prompt-Länge

- **Minimum:** 50-100 Wörter für brauchbare Ergebnisse
- **Sweet Spot:** 100-200 Wörter für detaillierte Kontrolle
- **Maximum:** Keine harte Grenze, aber nach ~300 Wörtern diminishing returns

### Was gut funktioniert

- Klare, sequenzielle Beschreibungen
- Spezifische Kamerabewegungen (`slow dolly in` statt nur `camera moves`)
- Detaillierte Subjektbeschreibungen für Konsistenz
- Explizite Audio-Anweisungen
- Cinematische Referenzen (`film noir lighting`, `shot on 35mm`)

### Was weniger gut funktioniert

- Negative Prompts (`no X`, `don't show Y`) – besser weglassen oder Gegenteil beschreiben
- Sehr komplexe Multi-Charakter-Interaktionen
- Schnelle Szenenwechsel innerhalb eines Clips
- Exakte Textdarstellung im Video (Schilder, Bildschirme)
- Sehr spezifische Gesichter (keine "person X" Generierung möglich)

---

## Limitierungen

### Technisch
- Maximale Cliplänge 8 Sekunden
- Keine direkte Verkettung von Clips zu längeren Videos
- Kein Video-to-Video (Stil-Transfer auf bestehendes Footage)
- Keine Echtzeit-Generierung

### Inhaltlich (Safety Filter)
- Keine realistischen Darstellungen echter Personen
- Keine Gewalt oder explizite Inhalte
- Keine Desinformation oder Deepfakes
- Filter manchmal übervorsichtig bei harmlosen Prompts

### Audio-spezifisch
- Musik-Generierung eingeschränkt (keine lizenzierten Songs)
- Komplexe Mehrpersonen-Dialoge fehleranfällig
- Gesang in frühem Stadium

---

## Workflow-Integration

### Mit Gemini 2.5 Flash

1. **Konzept → Bild:** Gemini generiert Referenzbild
2. **Bild → Video:** Veo 3 animiert mit Bewegung und Audio
3. **Iteration:** Prompt verfeinern basierend auf Ergebnis

### Für längere Projekte

1. Szenen in 4-8 Sekunden Clips planen
2. Jeden Clip einzeln generieren mit konsistenten Stil-Tokens
3. Referenzbilder für Charakterkonsistenz nutzen
4. In externem Editor (Premiere, DaVinci) zusammenschneiden
5. Audio ggf. nachbearbeiten oder ersetzen

---

## Ressourcen & Links

- [Google Cloud Blog – Veo 3 Prompting Guide](https://cloud.google.com/blog/products/ai-machine-learning/ultimate-prompting-guide-for-veo-3-1)
- [Vertex AI Dokumentation – Video Generation](https://cloud.google.com/vertex-ai/generative-ai/docs/video/video-gen-prompt-guide)
- [DeepMind – Veo Prompt Guide](https://deepmind.google/models/veo/prompt-guide/)
- [Google AI Studio](https://aistudio.google.com/)

---

## Siehe auch

**Übersicht & Grundlagen:**
- [[AI-Video MOC]] – Einstiegspunkt für alle Video-Ressourcen
- [[Video-Prompting-Leitfaden]] – Framework und Token-Baukasten
- [[AI-Video-Tools-Übersicht]] – Tool-Vergleich

**Veo-Spezifische Guides:**
- [[Veo-3-VFX-und-Motion-Graphics]] – VFX, CGI & Motion Graphics Prompting
- [[Veo-3-Produktwerbung-und-AI-Influencer]] – Ads und AI Influencer

**Use Cases:**
- [[AI-Video-Use-Case-Storytelling]] – Narrative Kurzfilme, Character Consistency
- [[AI-Video-Use-Case-Erklärvideo]] – Educational & Explainer Videos
- [[AI-Video-Use-Case-Social-Media]] – TikTok, Reels, Shorts Strategie

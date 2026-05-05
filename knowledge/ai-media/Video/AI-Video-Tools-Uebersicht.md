---
title: Video/AI Video Tools Uebersicht
type: reference
status: living
created: 2026-01-24T00:00:00.000Z
updated: 2026-01-24T00:00:00.000Z
tags:
  - reference
  - video
  - ai-media
  - tools
  - comparison
sources:
  - 'self-authored:loschke:media-experimentation'
area: ai-media
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# AI-Video-Tools – Übersicht & Vergleich

> **Stand:** Januar 2025. Der Markt entwickelt sich schnell – Preise und Features können sich ändern.

---

## Quick Reference: Welches Tool für welchen Zweck?

| Use Case | Empfehlung | Warum |
|----------|------------|-------|
| **Höchste Qualität + Audio** | Veo 3 | Einziges Tool mit nativer Audio-Generierung |
| **Professionelle Kontrolle** | Runway Gen-4 | Camera Control, Motion Brush, Editing Suite |
| **Bestes Preis-Leistung** | Kling AI | Hohe Qualität zu niedrigen Kosten |
| **Schnelle Iteration** | Pika / Luma | Generierung in Sekunden statt Minuten |
| **Social Media Content** | Pika | Speed + Pikaffects für virale Clips |
| **Lange Clips (2+ Min)** | Kling AI | Als einziges Tool 2-Minuten-Videos |
| **Action/Bewegung** | Kling AI | Beste komplexe Physik/Bewegung |
| **Budget/Einstieg** | Hailuo AI | Günstigster Einstieg, gute Qualität |

---

## Vergleichstabelle: Die großen Sechs

| Feature | Veo 3 | Runway Gen-4 | Kling AI | Pika 2.5 | Luma Ray3 | Hailuo |
|---------|-------|--------------|----------|----------|-----------|--------|
| **Max. Auflösung** | 1080p | 720p (4K Upscale) | 1080p | 1080p | 1080p (4K HDR) | 1080p |
| **Max. Länge** | 8 Sek | 10-34 Sek | 2 Min | 10 Sek | 10 Sek | 10 Sek |
| **Native Audio** | ✅ Ja | ⚠️ Seit Dez 2025 | ✅ Kling 2.6 | ✅ Ja | ❌ Nein | ✅ Ja |
| **Image-to-Video** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Camera Control** | ⚠️ Begrenzt | ✅ Exzellent | ✅ Gut | ⚠️ Begrenzt | ✅ Reframe | ✅ Gut |
| **Motion Brush** | ❌ | ✅ | ✅ | ✅ | ❌ | ❌ |
| **Generierungszeit** | ~2-5 Min | ~30 Sek | 5-30 Min | ~30 Sek | <10 Sek | 1-3 Min |
| **Free Tier** | ⚠️ Limitiert | ✅ 125 Credits | ✅ 66/Tag | ✅ 150 Credits | ✅ 500 Credits | ✅ Täglich |
| **API** | ✅ Vertex AI | ✅ | ✅ | ✅ | ✅ | ✅ |

---

## Tool-Profile

### 1. Google Veo 3 / 3.1

**Stärke:** End-to-End Generierung mit synchronem Audio

**Technische Specs:**
- Clips: 4, 6 oder 8 Sekunden
- Auflösung: 720p oder 1080p
- Audio: SFX, Ambient, Dialog – nativ generiert
- Wasserzeichen: SynthID (alle Outputs)

**Zugang:**
- Vertex AI API (Google Cloud)
- Google AI Studio
- Gemini App (Advanced Abo)
- Adobe Firefly Platform

**Kosten:**
- Gemini Advanced: ~20€/Monat (inkl. Kontingent)
- Vertex AI: Pay-per-use (nach Sekunden)
- Genaue Preise in Google Cloud Console

**Pro:**
- Beste Audio-Integration im Markt
- Exzellente Bewegungsqualität
- Realistische Physik und Beleuchtung

**Contra:**
- Max. 8 Sekunden Clips
- Begrenzte Kamerakontrolle
- Safety Filter manchmal übervorsichtig

**→ Siehe:** [[Veo-3-Spezifika]]

---

### 2. Runway Gen-3 Alpha / Gen-4 / Gen-4.5

**Stärke:** Professionelle Kontrolle und Editing Suite

**Technische Specs:**
- Clips: 10-34 Sekunden (je nach Modell)
- Auflösung: 720p nativ (4K Upscaling)
- FPS: 24fps
- Multi-Shot & Audio: Seit Dezember 2025 in Gen-4.5

**Credit-System:**
- Gen-3 Alpha: 10 Credits/Sekunde
- Gen-3 Turbo: 5 Credits/Sekunde
- Gen-4: ~15-20% teurer als Gen-3

**Preispläne:**

| Plan | Preis | Credits/Monat |
|------|-------|---------------|
| Free | $0 | 125 |
| Standard | $12-15 | 625 |
| Pro | $35 | 2.250 |
| Unlimited | $95 | Unbegrenzt |

**Pro:**
- Camera Control & Motion Brush
- Professionelle Editing-Tools integriert
- Keyframing für präzise Kontrolle
- Konsistenz über mehrere Shots

**Contra:**
- 720p native Auflösung
- Teuer bei viel Iteration
- Komplexes Credit-Management

---

### 3. Kling AI (Kuaishou)

**Stärke:** Beste Value + längste Videos

**Technische Specs:**
- Clips: Bis 2 Minuten (!)
- Auflösung: 1080p
- FPS: 30-48
- Modelle: Kling 2.5 Turbo, 2.6 (Audio), O1 (Chain of Thought)

**Credit-System:**
- Professional Mode: 70 Credits pro 10-Sek-Video

**Preispläne:**

| Plan | Preis | Credits/Monat |
|------|-------|---------------|
| Free | $0 | 66/Tag |
| Standard | $10 | 660 |
| Pro | $37 | 3.000 |
| Premier | $92 | 8.000+ |

**Besondere Features:**
- "Elements": 4-Bild-System für Charakterkonsistenz
- Motion Brush Kontrolle
- Lip-Sync (sehr realistisch)

**Pro:**
- 2-Minuten-Videos (einzigartig!)
- Exzellente Bewegungsqualität
- Bestes Preis-Leistungs-Verhältnis
- Realistische Gesichtsausdrücke

**Contra:**
- Langsame Generierung (5-30 Minuten)
- Zuverlässigkeitsprobleme
- Kein Support
- Komplexes Credit-System

---

### 4. Pika Labs (Pika 2.1 / 2.2 / 2.5)

**Stärke:** Schnelligkeit und Benutzerfreundlichkeit

**Technische Specs:**
- Clips: 5-10 Sekunden
- Auflösung: 1080p (seit Pika 2.1, Feb 2025)
- Modelle: Turbo (schnell), 1.0/1.5 (balanced), 2.x (Qualität)

**Credit-Kosten:**
- Turbo: 5 Credits/5 Sek
- Pika 2.2: 18 Credits/5 Sek 1080p

**Preispläne:**

| Plan | Preis | Credits/Monat |
|------|-------|---------------|
| Basic/Free | $0 | 150 |
| Standard | $8 | 700 |
| Pro | $28 | 2.000 |
| Fancy | $76 | Unbegrenzt |

**Besondere Features:**
- **Pikadditions:** Personen/Objekte in Videos einfügen
- **Pikaswaps:** Elemente austauschen
- **Pikaffects:** Kreative Effekte (Crush, Explode, Melt)
- **Sound Effects:** Audio-Generierung

**Pro:**
- Sehr schnelle Generierung
- Großzügiger Free Plan
- Intuitive Oberfläche
- Virale Effekte für Social Media

**Contra:**
- Weniger Customization-Optionen
- Inkonsistente Qualität bei komplexen Szenen
- Commercial Use erst ab Pro Plan
- Credits verfallen monatlich

---

### 5. Luma AI Dream Machine (Ray2 / Ray3)

**Stärke:** Schnellste Generierung + natürliche Bewegung

**Technische Specs:**
- Clips: 10 Sekunden (extendierbar zu ~30 Sek)
- Auflösung: 1080p nativ, 4K HDR mit Hi-Fi Diffusion
- Ray3: 10x Compute vs Ray1
- Draft Mode: 5x Credit-Effizienz

**Credit-System:**
- Ray3 Draft SDR: Günstigster Modus
- Ray2 1080p: ~800 Credits/10 Sek
- Reframe: 32 Credits/Sek

**Preispläne:**

| Plan | Preis | Credits/Monat |
|------|-------|---------------|
| Free | $0 | 500 (nur Draft) |
| Lite | $9.99 | 3.200 |
| Plus | $29.99 | 10.000 |
| Unlimited | $94.99 | Unbegrenzt |

**Besondere Features:**
- **Modify with Instructions:** Video per Text anpassen
- **Reframe:** Aspect Ratio ändern
- **Draft Mode:** Schnelle Previews
- Integration in Adobe Firefly

**Pro:**
- Extrem schnelle Generierung (<10 Sek)
- Beste natürliche Bewegungsqualität
- Intuitive Bedienung
- 25M+ User Community

**Contra:**
- Kein natives Audio (noch)
- Commercial Use erst ab Plus
- Qualität degradiert bei Extensions
- API Credits separat

---

### 6. Hailuo AI / MiniMax

**Stärke:** Budget-Champion mit guter Prompt-Treue

**Technische Specs:**
- Clips: 6-10 Sekunden
- Auflösung: 720p-1080p
- FPS: 24-30
- Modelle: Hailuo 2.3, Director Model

**Credit-Kosten:**
- ~30-50 Credits pro 6-Sek HD Clip
- API (fal): $0.28 pro Video

**Preispläne:**

| Plan | Preis | Credits/Monat |
|------|-------|---------------|
| Free | $0 | Täglich (Watermark) |
| Standard | $9.99 | 1.000 |
| Unlimited | $94.99 | Unbegrenzt |

**Besondere Features:**
- Integriertes TTS (17+ Sprachen)
- Voice Cloning
- Director Model für cinematic Quality

**Pro:**
- Sehr gute Prompt-Adherence
- Günstigster Einstieg
- Schnelle Generierung
- Gute Kamerakontrolle

**Contra:**
- Kurze Clips only (6-10 Sek)
- 720p Standard
- Delays zu Stoßzeiten
- Weniger Features als Konkurrenz

---

## Preisvergleich: Was bekomme ich für $10/Monat?

| Tool | $10 Budget | Output |
|------|------------|--------|
| **Kling Standard** | 660 Credits | ~9 Videos à 10 Sek |
| **Pika Standard** | 700 Credits | ~14 Videos (Turbo) |
| **Hailuo Standard** | 1.000 Credits | ~20 Videos à 6 Sek |
| **Luma Lite** | 3.200 Credits | ~4 Videos 1080p |
| **Runway** | Nicht verfügbar | Min. $12 für 625 Credits |

---

## Trends & Entwicklungen 2025

**Native Audio:** Veo 3 hat den Standard gesetzt – Kling 2.6 und Runway 4.5 ziehen nach.

**Längere Videos:** Kling führt mit 2-Minuten-Clips, andere folgen langsam.

**Multi-Model Plattformen:** Adobe Firefly bietet Zugang zu Veo 3.1, Runway 4.5, Ray3, Pika 2.2, Sora 2 – ein Interface, mehrere Engines.

**Character Consistency:** "Elements" (Kling), "Act-One" (Runway) – Konsistenz über Clips wird wichtiger.

**Video-to-Video:** Stil-Transfer auf bestehendes Footage als nächste Frontier.

---

## Workflow-Empfehlung

### Für Hero-Footage:
1. **Veo 3** oder **Sora 2** für maximale Qualität
2. Referenzbild mit Imagen/Midjourney vorbereiten
3. Einzelne Szenen generieren (max. 8 Sek)

### Für schnelle Iteration:
1. **Pika Turbo** oder **Luma Draft** für Konzept-Tests
2. Erfolgreiche Prompts mit höherwertigem Modell finalisieren

### Für Budget-Produktion:
1. **Kling AI** für Hauptclips (beste Value)
2. In externem Editor (Premiere, DaVinci) schneiden
3. Audio separat mit ElevenLabs o.ä. ergänzen

### Für Social Media:
1. **Pika** mit Pikaffects für virale Hooks
2. **Hailuo** für schnelle, günstige Varianten

---

## Limitierungen aller Tools

**Was noch nicht (gut) funktioniert:**
- Präziser Text im Video (Schilder, Screens)
- Komplexe Multi-Charakter-Interaktionen
- Exakte Lip-Sync bei längeren Dialogen
- Konsistente Charaktere über viele Clips
- Realistische Hände/Finger
- Echte Physik bei komplexen Bewegungen

**Was grundsätzlich nicht geht:**
- Echte Personen deepfaken (Safety Filter)
- Lizenzierte Musik generieren
- Videos über ~2 Minuten am Stück
- Echtzeitgenerierung

---

## Ressourcen

**Vergleiche & Reviews:**
- [Massive.io – Best AI Video Generator Comparison](https://massive.io/gear-guides/the-best-ai-video-generator-comparison/)
- [Zapier – 15 Best AI Video Generators 2025](https://zapier.com/blog/best-ai-video-generator/)

**Tool-Dokumentation:**
- [Runway Help Center](https://help.runwayml.com/)
- [Pika Labs Documentation](https://pika.art/)
- [Luma AI](https://lumalabs.ai/)
- [Kling AI](https://klingai.com/)

---

## Siehe auch

**Übersicht & Grundlagen:**
- [[AI-Video MOC]] – Einstiegspunkt für alle Video-Ressourcen
- [[Video-Prompting-Leitfaden]] – Framework und Token-Baukasten
- [[Image-to-Video-Best-Practices]] – I2V-Workflow, Midjourney→Video Pipeline

**Tool Deep-Dives:**
- [[Veo-3-Spezifika]] – Deep Dive Google Veo 3
- [[Veo-3-VFX-und-Motion-Graphics]] – VFX, CGI & Motion Graphics Prompting
- [[Veo-3-Produktwerbung-und-AI-Influencer]] – Ads und AI Influencer

**Use Cases:**
- [[AI-Video-Use-Case-Storytelling]] – Narrative Kurzfilme, Character Consistency
- [[AI-Video-Use-Case-Erklärvideo]] – Educational & Explainer Videos
- [[AI-Video-Use-Case-Social-Media]] – TikTok, Reels, Shorts Strategie

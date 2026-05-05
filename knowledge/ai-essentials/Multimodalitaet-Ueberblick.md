---
title: Multimodalität Überblick
type: reference
status: living
created: '2026-03-03'
updated: '2026-03-03'
tags:
  - ki-grundlagen
  - multimodal
  - bild
  - audio
  - video
  - text
sources:
  - 'self-authored:loschke:pre-migration'
area: ai-essentials
audience:
  - einsteiger
  - praktiker
  - fuehrungskraft
level: basic
intent:
  - verstehen
  - einordnen
contains:
  - vocabulary
  - contrast
  - tip
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-04'
---
# Multimodalität Überblick

> Text, Bild, Audio, Video: Was GenAI in jeder Modalität kann – State of the Art, Grenzen und wohin es geht. Gateway-Seite mit Verweisen auf Vertiefungen.

---

## Was ist Multimodalität?

Multimodale KI kann mehrere Medientypen verarbeiten und generieren. Nicht nur Text lesen und schreiben, sondern auch Bilder verstehen und erstellen, Sprache hören und erzeugen, Videos analysieren und generieren.

Warum das wichtig ist: Die meiste menschliche Kommunikation ist multimodal. Wir reden, zeigen, zeichnen, schreiben. KI-Systeme, die nur Text können, decken einen Bruchteil dessen ab, was im Arbeitsalltag vorkommt.

---

## Die vier Modalitäten

### Text

Die am weitesten entwickelte Modalität. LLMs sind primär Textmodelle.

| Fähigkeit | Qualität | Beispiel |
|-----------|----------|---------|
| **Generierung** | Exzellent | Texte schreiben, Code erzeugen, Übersetzungen |
| **Verständnis** | Exzellent | Zusammenfassungen, Analyse, Extraktion |
| **Mehrsprachig** | Sehr gut (top Sprachen), mittel (seltene Sprachen) | Deutsch, Englisch, Französisch hervorragend |

**State of the Art:** Textverarbeitung ist das, was LLMs am besten können. Hier liegt der Kern der Technologie.

---

### Bild

Zweitweiteste Modalität. Sowohl Verständnis als auch Generierung auf hohem Niveau.

**Bild-Verständnis (Vision):**

| Fähigkeit | Qualität | Beispiel |
|-----------|----------|---------|
| **Bildbeschreibung** | Sehr gut | "Was zeigt dieses Foto?" |
| **Text in Bildern (OCR)** | Sehr gut | Handschrift lesen, Screenshots auswerten |
| **Diagramme/Charts** | Gut | Daten aus Grafiken extrahieren |
| **Vergleich** | Gut | Unterschiede zwischen zwei Bildern erkennen |

**Bild-Generierung:**

| Fähigkeit | Qualität | Tools |
|-----------|----------|-------|
| **Fotorealismus** | Sehr gut | Midjourney, DALL-E 3, Flux, Ideogram |
| **Illustration/Kunst** | Sehr gut | Midjourney, Stable Diffusion |
| **Text im Bild** | Gut (stark verbessert) | Ideogram, DALL-E 3, Flux |
| **Konsistente Charaktere** | Mittel (wachsend) | Midjourney mit --cref |
| **Marken-Konsistenz** | Begrenzt | Braucht Workarounds |

**Grenzen:** Exakte Kontrolle über Details bleibt schwierig. Hände, Finger, Text in komplexen Szenen. Verbessert sich schnell.

→ Vertiefung: AI-Media-Bereich im Knowledge-Vault

---

### Audio

Spracherkennung und -synthese auf menschlichem Niveau. Musikgenerierung wächst schnell.

**Sprache:**

| Fähigkeit | Qualität | Tools |
|-----------|----------|-------|
| **Speech-to-Text** | Exzellent | Whisper (OpenAI), Gemini, Deepgram |
| **Text-to-Speech** | Sehr gut, teilweise nicht von Menschen unterscheidbar | ElevenLabs, OpenAI TTS, PlayHT |
| **Voice Cloning** | Sehr gut (mit wenigen Sekunden Sample) | ElevenLabs, Resemble AI |
| **Echtzeit-Konversation** | Gut (GPT-4o Voice, Gemini Live) | ChatGPT Voice, Gemini Live |
| **Übersetzung in Echtzeit** | Gut | ChatGPT Voice Mode |

**Musik:**

| Fähigkeit | Qualität | Tools |
|-----------|----------|-------|
| **Song-Generierung** | Gut (für Demos, Hintergrundmusik) | Suno, Udio |
| **Instrumentals** | Gut | Suno, Stable Audio |
| **Sound Effects** | Gut | ElevenLabs Sound Effects |

**Grenzen:** Emotionale Nuancen in Sprache, natürliche Gesprächspausen, professionelle Musikproduktion. Voice Cloning wirft ethische Fragen auf.

---

### Video

Die jüngste Modalität. Rasante Entwicklung, aber noch die größten Einschränkungen.

**Video-Verständnis:**

| Fähigkeit | Qualität | Tools |
|-----------|----------|-------|
| **Video-Beschreibung** | Gut | Gemini (nativ), GPT-4o |
| **Szenen-Analyse** | Gut | Gemini, Claude |
| **Transkription** | Sehr gut (über Audio-Spur) | Whisper + LLM |

**Video-Generierung:**

| Fähigkeit | Qualität | Tools |
|-----------|----------|-------|
| **Kurze Clips (5-15s)** | Gut bis sehr gut | Sora, Runway Gen-3, Kling, Veo 2 |
| **Längere Videos** | Begrenzt (Konsistenz-Probleme) | Sora, Veo 2 |
| **Animationen** | Gut | Runway, Pika |
| **Bild-zu-Video** | Gut | Runway, Kling, Veo 2 |

**Grenzen:** Physik-Verständnis (Hände, Bewegungen), Konsistenz über längere Clips, präzise Steuerung von Aktionen. Alle Anbieter iterieren schnell.

---

## Multimodale Workflows: Was heute schon geht

### Beispiel 1: Content-Produktion

```
Text-Prompt → Blogpost (Text-LLM)
    → Hero-Image (Bild-Generierung)
    → Audio-Version (TTS)
    → Social-Media-Clips (Video-Generierung)
```

### Beispiel 2: Dokumenten-Analyse

```
PDF-Scan → OCR (Vision)
    → Text-Extraktion (LLM)
    → Zusammenfassung (LLM)
    → Audio-Briefing (TTS)
```

### Beispiel 3: Meeting-Verarbeitung

```
Meeting-Recording → Transkript (Speech-to-Text)
    → Protokoll + Action Items (LLM)
    → Follow-up-E-Mails (LLM)
    → Übersetzung für internationales Team (LLM + TTS)
```

---

## Einordnung für Entscheider

### Was jetzt schon produktiv nutzbar ist

- Text: Voll produktionsreif
- Bild-Verständnis: Voll produktionsreif
- Speech-to-Text: Voll produktionsreif
- Text-to-Speech: Produktionsreif (mit Prüfung)
- Bild-Generierung: Produktionsreif für viele Anwendungen (Marketing, Konzepte, Assets)

### Was wächst, aber Einschränkungen hat

- Video-Generierung: Für Prototypen und Konzepte, nicht für Endproduktion
- Musik-Generierung: Für Demos und Hintergrundmusik, nicht für professionelle Releases
- Echtzeit-Konversation: Funktioniert, aber mit gelegentlichen Aussetzern

### Was noch nicht reif ist

- Konsistente Video-Produktion (Spielfilm-Qualität)
- Präzise Steuerung von Bild-Details (pixel-genaue Kontrolle)
- Emotionale Nuancen in synthetischer Sprache

---

## Ethische Überlegungen

| Thema | Frage | Haltung |
|-------|-------|---------|
| **Deepfakes** | Synthetische Stimmen und Gesichter für Betrug | Technologie ist neutral. Regulierung und Kennzeichnung nötig. |
| **Voice Cloning** | Stimme ohne Erlaubnis kopieren | Nur mit expliziter Einwilligung. |
| **Kreativ-Industrie** | Ersetzt KI Fotografen, Illustratoren, Sprecher? | Verändert Rollen, ersetzt selten komplett. Augmentation statt Replacement. |
| **Kennzeichnung** | Muss KI-generierter Content gekennzeichnet werden? | Ja, wo es um Authentizität geht. Nicht bei internem Arbeitsmaterial. |

---

## Verknüpfungen

- [[KI-Faehigkeiten-Scope]] – Die vier Modalitäten als Kern-Fähigkeit
- [[GenAI-Stack-Erklaermodell]] – Tools (Ebene 2) bestimmen, welche Modalitäten verfügbar sind
- [[Modell-Landschaft]] – Welche Modelle welche Modalitäten beherrschen
- [[Kosten-und-Preismodelle]] – Multimodale Generierung kostet mehr als Text

---

*Gateway-Seite: Überblick über alle Modalitäten mit Verweisen auf Vertiefungen*

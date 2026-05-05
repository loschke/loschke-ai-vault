---
title: AI-Media
type: moc
status: living
created: '2026-01-24'
updated: '2026-01-24'
tags:
  - moc
  - ai-audio
  - index
sources:
  - 'self-authored:loschke:media-experimentation'
area: ai-media
audience:
  - praktiker
  - konzepter
  - entwickler
level: basic-to-advanced
intent:
  - verstehen
  - anwenden
contains:
  - framework
  - vocabulary
  - example
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# AI-Audio MOC

> Map of Content für AI-Audiogenerierung – der Einstiegspunkt in alle Audio-Ressourcen.

---

## Grundlagen

| Notiz | Inhalt |
|-------|--------|
| [[Audio-Principles]] | Mental Models, Latenz-Thematik, Quality vs Speed Trade-offs |
| [[AI-Audio-Tools-Übersicht]] | ElevenLabs, OpenAI, PlayHT, Descript, Suno, Udio – Vergleichstabelle |

---

## Capabilities

| Notiz | Fokus |
|-------|-------|
| [[01_Capabilities/Speech-Input-Transkription]] | Speech-to-Text: Whisper, Deepgram, Fehlerraten, Dialekte |
| [[01_Capabilities/Speech-Output-Synthese]] | Text-to-Speech: Stimmen, Emotionen, Sprachen |
| [[01_Capabilities/Voice-Cloning]] | Stimmen klonen: Samples, Qualität, Ethik, Commercial Use |
| [[01_Capabilities/Realtime-Voice]] | Speech-to-Speech, Latenz, Conversational AI |
| [[01_Capabilities/Voice-Prompting]] | Emotion Prompting, Pacing, Accent, Tool-spezifische Syntax |
| [[01_Capabilities/Song-Creation]] | Text-to-Music, Jingles, AI-Gesang (Suno, Udio) |
| [[01_Capabilities/Sound-Effects-Generation]] | Text-to-SFX, Ambient Audio, Foley |
| [[01_Capabilities/Audio-Enhancement]] | Noise Removal, Voice Isolation, Stem Separation, Studio Sound |

---

## Use Cases (nach Business-Outcome)

| Cluster | Kern-Frage | Capabilities |
|---------|------------|--------------|
| [[02_Use-Cases/Audio-Intelligence]] | "Wie extrahiere ich Wissen aus Audio?" | Transkription, Enhancement |
| [[02_Use-Cases/Voice-Production]] | "Wie erzeuge ich gesprochenen Content?" | TTS, Voice Cloning, Voice Prompting |
| [[02_Use-Cases/Localization]] | "Wie skaliere ich in andere Märkte?" | Cross-Language Cloning, TTS multilingual |
| [[02_Use-Cases/Realtime-Interaction]] | "Wie baue ich Live-Audio-Erlebnisse?" | Realtime Voice, Streaming STT/TTS |

### Audio Intelligence
- Meeting-Protokolle & Action Items
- Call Analytics (Sales & Support)
- Interview-Auswertung
- Searchable Audio Archive

### Voice Production
- E-Learning Voice-Over
- Content-to-Audio (Blog, Newsletter)
- Onboarding-Videos
- Brand Voice Assets

### Localization & Reach
- Video-Dubbing (Marketing, Demos)
- E-Learning & Training Global
- Podcast/YouTube International
- Customer Communications Multi-Language

### Realtime Interaction
- Voice Assistants & Conversational AI
- Live-Untertitel & Accessibility
- Real-time Translation
- Voice Search & Navigation

---

## Quick Start

**Neu bei AI-Audio?**
1. Start mit [[Audio-Principles]] für Grundverständnis
2. Dann [[AI-Audio-Tools-Übersicht]] für Tool-Landschaft
3. Use Case identifizieren → passenden Cluster lesen

**Konkretes Projekt?**

| Ich will... | Cluster | Erste Capability |
|-------------|---------|------------------|
| Meetings transkribieren | [[02_Use-Cases/Audio-Intelligence\|Audio Intelligence]] | [[01_Capabilities/Speech-Input-Transkription]] |
| Content vertonen | [[02_Use-Cases/Voice-Production\|Voice Production]] | [[01_Capabilities/Speech-Output-Synthese]] |
| Video in andere Sprachen | [[02_Use-Cases/Localization\|Localization]] | [[01_Capabilities/Voice-Cloning]] |
| Voice Assistant bauen | [[02_Use-Cases/Realtime-Interaction\|Realtime Interaction]] | [[01_Capabilities/Realtime-Voice]] |

---

## Noch zu erstellen / vertiefen

- [ ] Voice-Prompting-Syntax für ElevenLabs, PlayHT, etc.
- [ ] Rechtliche Aspekte (Voice Rights, Deepfake-Kennzeichnung) als eigene Notiz
- [ ] Song-Creation und Sound-Effects Use Cases (kreativ/Marketing)
- [ ] Workflow-Templates für häufige Pipelines

---

## Verwandte Bereiche

- [[02_Knowledge/AI-Media/Images/_MOC|AI Images MOC]]
- [[02_KNOWLEDGE/AI-Media/Video/_MOC|AI Video MOC]]

---

*Letzte Aktualisierung: Januar 2026*

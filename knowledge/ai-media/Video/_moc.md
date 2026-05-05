---
title: AI-Media
type: moc
status: living
created: '2026-01-24'
updated: '2026-03-26'
tags:
  - moc
  - ai-video
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
# AI-Video MOC

> Map of Content für AI-Videogenerierung – der Einstiegspunkt in alle Video-Ressourcen.

---

## Struktur

| Ordner | Inhalt |
|--------|--------|
| 00_Prompting | Prompting-Framework, Camera Motion, Audio, JSON |
| 01_Capabilities | Technische Fähigkeiten: T2V, I2V, V2V, Post-Production |
| 02_Tools | Tool-spezifische Deep-Dives (Veo, Kling, Runway...) |
| 03_Use-Cases | Business-Anwendungen nach Outcome |
| 04_Pre-Production | Scripting, Shot-Planung, Storyboarding |

---

## Prompting

| Notiz | Inhalt |
|-------|--------|
| [[00_Prompting/Video-Prompting-Framework\|Video-Prompting-Framework]] | **Das zentrale Framework:** 12 Kategorien, Token-Baukasten, Quick Reference |
| [[00_Prompting/Camera-Motion-Prompting\|Camera-Motion-Prompting]] | Kamerabewegung: Rotationen, Fahrten, Tool-Kontrolle, Troubleshooting |
| [[00_Prompting/Audio-Prompting\|Audio-Prompting]] | Native Audio: SFX, Ambient, Dialog, Lip-Sync |
| [[00_Prompting/Video-Prompting-JSON\|Video-Prompting-JSON]] | Strukturierte Prompts im JSON-Format |
| **[[Visual-Prompting-Vergleich]]** | **Übergreifend: Bild × Editing × Video Prompting im Vergleich** |

---

## Grundlagen (Root)

| Notiz | Inhalt |
|-------|--------|
| [[AI-Video-Tools-Übersicht]] | 6 Tools im Vergleich, Preise, Quick Reference |

---

## Capabilities

| Notiz | Fokus | Status |
|-------|-------|--------|
| [[01_Capabilities/Text-to-Video]] | T2V-Capability, Stärken, Limitierungen, Workflows | ✅ |
| [[01_Capabilities/Image-to-Video]] | I2V-Workflow, Input-Vorbereitung, Midjourney→Video | ✅ |
| [[01_Capabilities/Video-to-Video]] | Style Transfer, Character Swap, Motion Transfer | ✅ |
| [[01_Capabilities/Post-Production]] | Enhancement + Editing: Upscaling, Inpainting, Lip-Sync | ✅ |

---

## Tools

| Notiz | Fokus | Status |
|-------|-------|--------|
| [[02_Tools/Veo-3-Spezifika]] | Google Veo 3: Audio-Features, Limitierungen | ✅ |
| [[02_Tools/Kling-Spezifika]] | Motion Control, Elements, Lip-Sync, 2-Min-Videos | ✅ |
| [[02_Tools/Runway-Spezifika]] | Gen-4/4.5, Kamera-Kontrolle, Simplicity First | ✅ |

---

## Pre-Production

| Notiz | Inhalt | Status |
|-------|--------|--------|
| [[04_Pre-Production/Video-Scripting-Framework\|Video-Scripting-Framework]] | **Grundlagen:** 5 Säulen, Timing, Hooks, Checkliste | ✅ |
| [[04_Pre-Production/Script-Strukturen\|Script-Strukturen]] | PAS, AIDA, 3-Akt, Hero's Journey, Before/After | ✅ |
| [[04_Pre-Production/Script-to-Shot-Workflow\|Script-to-Shot-Workflow]] | Script → Shots übersetzen, Templates, Transitions | ✅ |
| [[04_Pre-Production/Storyboard-Workflow\|Storyboard-Workflow]] | Visualisierung, Tools, Animatics, I2V-Vorbereitung | ✅ |

---

## Use Cases

| Notiz | Anwendung | Status |
|-------|-----------|--------|
| [[03_Use-Cases/Storytelling]] | Narrative Kurzfilme, Character Consistency | ✅ |
| [[03_Use-Cases/Erklärvideo]] | Educational, Explainer, Corporate Training | ✅ |
| [[03_Use-Cases/Social-Media]] | TikTok, Reels, Shorts – Platform-Strategie | ✅ |
| [[03_Use-Cases/VFX-und-Motion-Graphics]] | Visual Effects, CGI, Logo-Animation | ✅ |
| [[03_Use-Cases/Produktwerbung]] | Ads, Product Shots, AI Influencer | ✅ |

---

## Quick Start

**Neu bei AI-Video?**
1. Start mit [[04_Pre-Production/Video-Scripting-Framework|Video-Scripting-Framework]] für Script-Grundlagen
2. Dann [[00_Prompting/Video-Prompting-Framework|Video-Prompting-Framework]] für Prompt-Grundlagen
3. [[01_Capabilities/Text-to-Video]] für T2V-Spezifika
4. [[AI-Video-Tools-Übersicht]] für Tool-Wahl
5. Passenden Use-Case-Guide lesen

**Konkretes Projekt?**

| Ich will... | Start hier |
|-------------|------------|
| Script schreiben | [[04_Pre-Production/Video-Scripting-Framework\|Video-Scripting-Framework]] |
| Passende Struktur wählen | [[04_Pre-Production/Script-Strukturen\|Script-Strukturen]] |
| Script in Shots aufteilen | [[04_Pre-Production/Script-to-Shot-Workflow\|Script-to-Shot-Workflow]] |
| Storyboard erstellen | [[04_Pre-Production/Storyboard-Workflow\|Storyboard-Workflow]] |
| Prompting lernen | [[00_Prompting/Video-Prompting-Framework\|Video-Prompting-Framework]] |
| Kamerabewegung kontrollieren | [[00_Prompting/Camera-Motion-Prompting\|Camera-Motion-Prompting]] |
| Audio prompting | [[00_Prompting/Audio-Prompting\|Audio-Prompting]] |
| Aus Text Video generieren | [[01_Capabilities/Text-to-Video]] |
| Bilder animieren | [[01_Capabilities/Image-to-Video]] |
| Video aufwerten | [[01_Capabilities/Post-Production]] |
| Erklär-Content erstellen | [[03_Use-Cases/Erklärvideo]] |
| Social Content produzieren | [[03_Use-Cases/Social-Media]] |
| Narrative Kurzfilme | [[03_Use-Cases/Storytelling]] |
| **Bild vs. Editing vs. Video verstehen** | **[[Visual-Prompting-Vergleich]]** |

---

## Nächste Schritte

**Später:**
- [ ] Rechtliche Aspekte (Commercial Use, AI-Kennzeichnung)
- [ ] 04_Vocabulary Ordner (analog zu Images)
- [ ] Workflow-Beispiele mit konkreten Projekten

---

## Verwandte Bereiche

- [[02_Knowledge/AI-Media/Images/_MOC|AI Images MOC]]
- [[02_Knowledge/AI-Media/Audio/_MOC|AI Audio MOC]]
- **[[Visual-Prompting-Vergleich]] – Drei Denkmodelle im Vergleich (Bild × Editing × Video)**

---

*Letzte Aktualisierung: März 2026*

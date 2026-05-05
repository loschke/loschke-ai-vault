---
title: Video/03_Use Cases/Erklaervideo
type: reference
status: stable
created: '2026-01-24'
updated: '2026-01-24'
tags:
  - ai-video
  - erklärvideo
  - explainer
  - educational
  - use-case
sources:
  - 'self-authored:loschke:media-experimentation'
area: ai-media
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# AI-Video-Use-Case-Erklärvideo

## Überblick

Erklärvideos (Explainer Videos) sind einer der **kommerziell relevantesten Use Cases** für AI-Videogenerierung. Sie kombinieren klare Informationsvermittlung mit visueller Unterstützung – ideal für Produkterklärungen, Schulungen und Onboarding.

---

## Markt & Relevanz 2025

| Metrik | Wert | Quelle |
|--------|------|--------|
| Konsumenten, die Erklärvideos zum Lernen nutzen | **91%** | Wyzowl |
| Bevorzugen Video über Text/Audio für Instruktionen | **83%** | TechSmith |
| Message Retention via Video vs. Text | **95% vs. 10%** | Insivia |
| Conversion-Steigerung auf Landing Pages | **bis zu 80%** | Eyeview |
| Optimale Länge | **30-90 Sekunden** | HubSpot |
| Marketer priorisieren 30-60s Micro-Content | **73%** | Vidyard |

**Kernaussage:** Erklärvideos sind keine Nice-to-have mehr – sie sind Standard für effektive Kommunikation.

---

## AI-Workflow-Automatisierung

### Typischer Produktionsablauf

```
Script → Storyboard → Voiceover → Visuals → Untertitel → Export
   ↓         ↓           ↓           ↓          ↓          ↓
  LLM    AI-Image    ElevenLabs   Synthesia   Auto-Gen   Platform-
         Generator    /PlayHT     /Pictory             Optimierung
```

### Zeitersparnis durch AI

| Phase | Traditionell | Mit AI | Ersparnis |
|-------|-------------|--------|-----------|
| Script | 2-4 Stunden | 15-30 Min | ~80% |
| Storyboard | 1-2 Tage | 30 Min | ~90% |
| Voiceover | 1-3 Stunden (Booking + Recording) | 5 Min | ~95% |
| Video-Produktion | 1-2 Wochen | 2-4 Stunden | ~85% |
| **Gesamt für 30s-Clip** | **1-2 Wochen** | **~3 Minuten** | **~99%** |

---

## Empfohlene Script-Strukturen

→ Ausführliche Beschreibungen: [[04_Pre-Production/Script-Strukturen|Script-Strukturen]]

| Struktur | Wann verwenden | Beispiel |
|----------|----------------|----------|
| **PAS** | Standard für Explainer, Problem klar | "Reportings dauern Stunden → Frustration → Unser Tool automatisiert" |
| **AIDA** | Längere Explainer, mehr Zeit für Desire | Webinar-Promos, Feature-Overviews |
| **5W** | Komplexe Produkte, viele Fragen | SaaS-Onboarding, FAQ-Videos |
| **Before/After** | Visuelle Transformation möglich | Design-Tools, Fitness, Makeovers |

**Für die meisten Erklärvideos: PAS ist der Sweet Spot.** Schnell, klar, conversion-orientiert.

---

## Content-Struktur Best Practices

### Das PSCR-Framework

> **Hinweis:** PSCR ist eine Variante von PAS – erweitert um Clarification für komplexere Produkte.

| Phase | Inhalt | Timing (60s Video) |
|-------|--------|-------------------|
| **P**roblem | Hook – Problem sofort präsentieren | 0-10s |
| **S**olution | Lösung vorstellen (dein Produkt/Service) | 10-30s |
| **C**larification | Wie es funktioniert, Key Features | 30-50s |
| **R**esult | CTA – Was soll Viewer tun? | 50-60s |

### Hook-Techniken

1. **Frage stellen:** "Haben Sie sich je gefragt, warum...?"
2. **Problem-Statement:** "X kostet Unternehmen Y Millionen jährlich."
3. **Statistik:** "95% aller Teams scheitern an..."
4. **Before/After:** Visueller Kontrast sofort zeigen

### CTA Best Practices
- **Eine** klare Handlung (nicht mehrere)
- Konkret: "Klicken Sie auf den Link" > "Erfahren Sie mehr"
- Urgency optional: "Starten Sie heute noch"

---

## Animation Styles für Corporate

| Style | Ideal für | Vorteil |
|-------|-----------|---------|
| **2D Character Animation** | Storytelling, emotionale Themen | Sympathisch, menschlich |
| **Motion Graphics** | Daten, Prozesse, abstrakte Konzepte | Professionell, vielseitig |
| **Whiteboard Animation** | Educational, komplexe Erklärungen | Fühlt sich "live" an |
| **3D Animation** | Tech-Produkte, Premium-Feeling | Beeindruckend, teurer |
| **Hybrid (Live-Action + Animation)** | Authentizität + Erklärung | Vertrauen + Klarheit |

**Pro-Tipp:** Stock Footage + Animation kombinieren vermeidet typische AI-Artefakte (Finger, Gesichter).

---

## Tool-Empfehlungen

### All-in-One Plattformen

| Tool | Kernfeature | Preis (ca.) | Ideal für |
|------|-------------|-------------|-----------|
| **Synthesia** | Realistische AI-Avatare, 140+ Sprachen | Ab $29/Mo | Corporate Training, Multilingual |
| **Pictory** | Text/Blog → Video, Auto-Captions | Ab $19/Mo | Content Repurposing |
| **simpleshow** | Explainer Engine, Timing Engine | Enterprise | B2B Erklärvideos |
| **Mootion** | 65% schneller als Wettbewerb | Freemium | Schnelle Prototypen |
| **Invideo** | Templates, Platform-Optimierung | Ab $25/Mo | Social Media Explainer |

### Spezialisierte Tools

| Funktion | Tool | Notiz |
|----------|------|-------|
| **Script Generation** | ChatGPT, Claude | Produktdetails → Script |
| **Voiceover** | ElevenLabs, PlayHT | 140+ Sprachen, Klonen möglich |
| **AI Avatars** | Synthesia, HeyGen, D-ID | Realistische Presenter |
| **Auto-Subtitles** | Captions.ai, CapCut | Wichtig für Accessibility |
| **Storyboard** | Storyboarder.ai, Katalist | Script → Shot Breakdown |

---

## Production Workflow

### 5-Phasen-Modell

**1. Discovery**
- Lernziele definieren BEVOR Animation
- Zielgruppe analysieren: Alter, Expertise, Attention Span
- Format wählen: Demo, Animated Explainer, How-To, Lecture Summary

**2. Script Development**
- AI für Erstentwurf (Claude/GPT mit Product-Briefing)
- Jargon eliminieren – klar und direkt
- Timing: ~150 Wörter = 60 Sekunden

**3. Storyboarding**
- Frame-by-Frame Blueprint
- Client Approval vor Animation
- Shot-Typen definieren (Wide, Medium, Close-Up, Detail)

**4. Production**
- Voice Talent Selection kritisch (Narrator Impact auf Engagement)
- AI-Animation mit Human Review im Loop
- Timing Engine: Auto-Sync Visuals zu Voice

**5. Optimization**
- A/B Testing verschiedener Hooks
- Analytics: Completion Rate, Drop-off Points
- Iteration basierend auf Daten

---

## Platform-Optimierung

### Format-Spezifikationen

| Platform | Aspect Ratio | Länge | Besonderheit |
|----------|--------------|-------|--------------|
| **Website/Landing Page** | 16:9 | 60-90s | Autoplay ohne Ton, Captions! |
| **LinkedIn** | 1:1 oder 16:9 | 30-90s | Professional Tone |
| **YouTube** | 16:9 | 60s-10min | SEO-Titel, Thumbnail wichtig |
| **Instagram Feed** | 1:1 | 30-60s | Visuell stark starten |
| **TikTok/Reels** | 9:16 | 15-60s | Hook in 3s, Rehooks einbauen |

### Accessibility Checklist
- [ ] Untertitel/Captions für alle Videos
- [ ] High-Contrast Visuals
- [ ] Lesbare Textgröße (min. 24pt)
- [ ] Alt-Text für Thumbnails
- [ ] Transkript verfügbar

---

## Emerging Trends 2025

### AI-Avatar-Evolution
- **Realistische AI-Avatare** tailored zu Brand
- **Avatar-Klonen** von echten Spokespersons
- **Emotionssteuerung** in Echtzeit

### Personalisierung
- **Real-time Personalization** basierend auf Viewer-Verhalten
- **Dynamische Inhalte** (Name, Company, Use Case eingebettet)
- **Adaptive Länge** basierend auf Engagement

### Mixed Reality Integration
- **AR/VR-Integration** für interaktives Lernen
- **3D Product Demos** mit Viewer-Kontrolle
- **Spatial Computing** für immersive Schulungen

---

## Metriken & KPIs

### Engagement-Metriken
| Metrik | Benchmark | Ziel |
|--------|-----------|------|
| **Completion Rate** | 60-70% | >75% |
| **Average Watch Time** | 50% der Länge | >60% |
| **Click-Through (CTA)** | 2-5% | >5% |
| **Share Rate** | 1-2% | >2% |

### Business-Metriken
- **Qualified Leads** generiert
- **Demo Requests** nach Video-View
- **Support Tickets** reduziert (für Schulungsvideos)
- **Time to Productivity** (Onboarding-Videos)

---

## Checkliste: Erklärvideo erstellen

- [ ] **Ziel definiert:** Was soll Viewer nach dem Video tun/wissen?
- [ ] **Zielgruppe klar:** Wer schaut, welches Vorwissen?
- [ ] **Script geschrieben:** PSCR-Struktur, unter 90s
- [ ] **Storyboard erstellt:** Visueller Flow vor Production
- [ ] **Voiceover produziert:** Professionell oder AI
- [ ] **Visuals generiert:** Konsistenter Style
- [ ] **Untertitel hinzugefügt:** Accessibility!
- [ ] **CTA eingebaut:** Klar und konkret
- [ ] **Platform-optimiert:** Richtiges Format, Länge
- [ ] **Getestet:** A/B verschiedene Versionen

---

## Weiterführend

### Pre-Production
- [[04_Pre-Production/Video-Scripting-Framework|Video-Scripting-Framework]] – Grundlagen des AI-Video-Scripting
- [[04_Pre-Production/Script-Strukturen|Script-Strukturen]] – PAS, AIDA und wann welche
- [[04_Pre-Production/Script-to-Shot-Workflow|Script-to-Shot-Workflow]] – Script in Shots übersetzen
- [[04_Pre-Production/Storyboard-Workflow|Storyboard-Workflow]] – Visualisierung vor Generierung

### Prompting & Tools
- [[00_Prompting/Video-Prompting-Framework|Video-Prompting-Framework]] – Prompting-Framework
- [[AI-Video-Tools-Übersicht]] – Tool-Vergleich

### Verwandte Use Cases
- [[03_Use-Cases/Storytelling|Storytelling]] – Narrative Kurzfilme
- [[03_Use-Cases/Social-Media|Social-Media]] – Social Media Strategie

---
title: Realtime Interaction
type: reference
status: living
created: '2026-01-24'
updated: '2026-01-24'
tags:
  - ai-audio
  - use-case
  - realtime
  - voice-assistant
  - conversational-ai
  - live
sources:
  - 'self-authored:loschke:media-experimentation'
area: ai-media
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Realtime Interaction

> Live-Audio-Erlebnisse bauen: Voice Assistants, Live-Untertitel, Conversational AI mit <1s Latenz.

---

## Überblick

Realtime Interaction beantwortet die Frage: **"Wie baue ich Audio-Erlebnisse, die sofort reagieren?"**

Der Unterschied zu Batch-Verarbeitung: Nutzer warten. 2 Sekunden Latenz bei einem Voice Assistant fühlt sich an wie Ewigkeit. Realtime erfordert andere Tools, andere Architekturen, andere Trade-offs.

**Beteiligte Capabilities:**
- [[Realtime-Voice]] – Speech-to-Speech mit minimaler Latenz
- [[Speech-Input-Transkription]] – Streaming STT (<300ms)
- [[Speech-Output-Synthese]] – Streaming TTS (<500ms first byte)

**Kritischer Faktor:** Latenz. Unter 1 Sekunde Round-Trip ist das Ziel.

---

## Use Cases

### 1. Voice Assistants & Conversational AI

**Problem:** Chatbots sind unpersönlich. Kunden wollen sprechen, nicht tippen – aber klassische IVR nervt.

**Lösung:**
```
User Speech → Streaming STT → LLM → Streaming TTS → Response
         [___________< 1.5s Round-Trip___________]
```

**Architektur-Optionen:**

**Option A: Speech-to-Speech (State of the Art)**
```
User Audio → GPT-4o Audio / ElevenLabs Conversational AI → Response Audio
```
- Kein Text-Zwischenschritt
- Niedrigste Latenz möglich
- Prosodie bleibt erhalten

**Option B: Pipeline (mehr Kontrolle)**
```
User Audio → Deepgram Streaming → LLM API → ElevenLabs Streaming → Response
```
- Mehr Flexibilität bei LLM-Wahl
- Einfacher zu debuggen
- Höhere Latenz (addiert sich)

**Capabilities:** [[Realtime-Voice]], [[Speech-Input-Transkription]], [[Speech-Output-Synthese]]

**Tool-Empfehlung:**
| Szenario | Tool-Stack | Latenz | Komplexität |
|----------|------------|--------|-------------|
| Schnellster Start | ElevenLabs Conversational AI | <1s | Niedrig |
| Volle Kontrolle | Deepgram + Claude/GPT + ElevenLabs | 1-2s | Mittel |
| Enterprise | Hume AI, Vapi | <1s | Mittel |
| On-Premise | Whisper + Ollama + Piper TTS | 2-3s | Hoch |

**ROI:**
- Call Center: 30-50% Calls automatisierbar (Tier 1)
- Verfügbarkeit: 24/7 ohne Schichtkosten
- Skalierung: Keine Wartezeiten bei Peaks
- CSAT: Höher als schlechte menschliche Agents, niedriger als gute

**Realität-Check:** 
- Funktioniert gut: FAQ, Bestellstatus, Terminbuchung, einfache Transaktionen
- Funktioniert bedingt: Beschwerden, emotionale Situationen
- Funktioniert nicht: Komplexe Beratung, Eskalationen

---

### 2. Live-Untertitel & Accessibility

**Problem:** Events, Meetings, Webinare – nicht alle können folgen. Gehörlose, Nicht-Muttersprachler, laute Umgebung.

**Lösung:**
```
Live Audio → Streaming STT → Display/Overlay
              [< 300ms Latenz]
```

**Workflow:**
1. Audio-Feed einklinken (Mischpult, Software-Routing)
2. Streaming STT Service
3. Output an: OBS Overlay, Webinar-Tool, Dedicated Display
4. Optional: Live-Translation in weitere Sprachen

**Capabilities:** [[Speech-Input-Transkription]] (Streaming), [[Realtime-Voice]] (für Translation)

**Tool-Empfehlung:**
| Szenario | Tool | Latenz | Preis |
|----------|------|--------|-------|
| Webinar/Zoom | Zoom native, Otter.ai | ~2s | Inkludiert / $20+/Monat |
| Event/OBS | Deepgram + Custom | <500ms | $0.01-0.02/Min |
| Broadcast | AWS Transcribe Streaming | <1s | $0.024/Min |
| Enterprise | Verbit, Rev Live | <1s | Custom |

**ROI:**
- Accessibility Compliance (EU, ADA)
- Reichweite: +15-20% durch Nicht-Muttersprachler
- Engagement: Höher mit Untertiteln (auch für Native Speaker)

**Qualitäts-Faktoren:**
- Mikrofon-Qualität → direkt proportional zu Accuracy
- Sprecher-Disziplin (nicht durcheinander reden)
- Fachvokabular → Custom Dictionary nötig

---

### 3. Real-time Translation (Meetings, Events)

**Problem:** Internationales Team, Meeting in einer Sprache. Nicht alle verstehen alles.

**Lösung:**
```
Speaker Audio → STT → Translation → TTS → Listener in Zielsprache
                    [< 3s End-to-End]
```

**Workflow:**
1. Interpretation-Channel Setup (wie bei UN-Konferenzen, aber AI)
2. Sprecher-Audio wird gestreamt
3. Pro Zielsprache: STT → Translate → TTS
4. Teilnehmer wählen ihren Audio-Channel

**Capabilities:** [[Realtime-Voice]], [[Speech-Input-Transkription]], [[Speech-Output-Synthese]]

**Tool-Empfehlung:**
| Szenario | Tool | Sprachen | Preis |
|----------|------|----------|-------|
| Zoom/Teams | Interpreter-Modus + AI | 2-3 | Inkludiert |
| Dediziert | Wordly, KUDO | 20+ | $50-200/Event |
| Custom | Deepgram + DeepL + ElevenLabs | Beliebig | Variabel |

**Limitationen:**
- 2-5 Sekunden Verzögerung unvermeidbar
- Fachsprache problematisch ohne Vorbereitung
- Simultaner Sprecher → Chaos
- Qualität sinkt bei Akzenten, schnellem Sprechen

**Wann sinnvoll:**
- Regelmäßige internationale Meetings
- Events mit 50+ internationalen Teilnehmern
- Nicht für: Verhandlungen, rechtlich bindende Gespräche

---

### 4. Voice Search & Voice Navigation

**Problem:** Komplexe Interfaces. Nutzer wollen sagen "Zeig mir die Umsätze vom März" statt 5x klicken.

**Lösung:**
```
Voice Command → STT → Intent Recognition → Action → Voice Confirmation
                        [< 2s]
```

**Workflow:**
1. Wake Word Detection (optional) oder Push-to-Talk
2. Streaming STT
3. Intent Parsing (Regex, LLM, oder dedicated NLU)
4. System-Aktion ausführen
5. TTS Bestätigung

**Capabilities:** [[Speech-Input-Transkription]] (Streaming), [[Speech-Output-Synthese]]

**Tool-Empfehlung:**
| Szenario | Tool | Komplexität |
|----------|------|-------------|
| Simple Commands | Deepgram + Rule-based | Niedrig |
| Complex Queries | Deepgram + LLM | Mittel |
| Product Integration | Speechly, Picovoice | Mittel |
| Full Custom | Whisper Streaming + Custom | Hoch |

**Use Cases im Business:**
- Dashboard Navigation ("Zeig mir Q3 DACH")
- Warehouse Voice Picking
- Field Service Hands-Free
- CRM Voice Commands

**ROI:**
- Effizienz: 20-40% schneller als tippen bei wiederkehrenden Tasks
- Hands-Free: Ermöglicht Nutzung in neuen Kontexten
- Accessibility: Öffnet Tools für mehr Nutzer

---

## Latenz-Budget verstehen

Gesamte Round-Trip Zeit = Summe aller Schritte:

| Step | Optimistisch | Typisch | Problematisch |
|------|--------------|---------|---------------|
| Audio Capture | 20ms | 50ms | 100ms |
| Network (Upload) | 20ms | 50ms | 200ms |
| STT Processing | 100ms | 300ms | 1000ms |
| LLM Processing | 200ms | 500ms | 2000ms |
| TTS First Byte | 100ms | 300ms | 1000ms |
| Network (Download) | 20ms | 50ms | 200ms |
| Audio Playback | 20ms | 50ms | 100ms |
| **Total** | **480ms** | **1.3s** | **4.6s** |

**Optimierung-Hebel:**
1. Streaming überall (STT, LLM, TTS)
2. Edge Deployment (näher am Nutzer)
3. Turbo/Fast Models (Trade-off: etwas weniger Qualität)
4. Prebuffering & Prediction
5. Interrupt-Handling (User kann unterbrechen)

---

## Architektur-Patterns

### Pattern A: All-in-One Service
```
[User] ←→ [ElevenLabs Conversational AI / Hume / Vapi]
```
- Pros: Schnellster Start, niedrigste Latenz
- Cons: Weniger Kontrolle, Vendor Lock-in

### Pattern B: Modulare Pipeline
```
[User] → [Deepgram STT] → [Your LLM] → [ElevenLabs TTS] → [User]
```
- Pros: Volle Kontrolle, Best-of-Breed möglich
- Cons: Mehr Komplexität, addierte Latenz

### Pattern C: Hybrid
```
[User] ←→ [Voice Frontend] ←→ [Your Backend + LLM]
                               ↑
                       [ElevenLabs für TTS]
```
- Pros: Balance aus Kontrolle und Convenience
- Cons: Mittlere Komplexität

---

## Entscheidungshilfe: Tool-Wahl

### Nach Latenz-Anforderung

| Anforderung | Stack | Erwartbare Latenz |
|-------------|-------|-------------------|
| <500ms (Conversational) | ElevenLabs Conversational AI | 300-500ms |
| <1s (Good UX) | Deepgram + GPT-4 Streaming + ElevenLabs | 800ms-1.2s |
| <2s (Acceptable) | Whisper API + Claude + PlayHT | 1.5-2s |
| <3s (Tolerable) | Self-hosted Stack | 2-3s |

### Nach Budget

| Budget | Empfehlung |
|--------|------------|
| Testing/MVP | ElevenLabs Conversational AI (Free Tier) |
| Production (Low Volume) | Vapi, Bland.ai |
| Production (Scale) | Deepgram + Custom |
| Enterprise | Hume AI, Custom Build |

---

## Typische Stolpersteine

| Problem | Ursache | Lösung |
|---------|---------|--------|
| Zu hohe Latenz | Falsche Tools, keine Streams | Streaming überall aktivieren |
| Schlechte STT Accuracy | Hintergrundgeräusche | Noise Gate, besseres Mikro |
| Interrupts funktionieren nicht | TTS blockiert | Barge-in Support im TTS |
| Kontext geht verloren | Keine Conversation History | State Management einbauen |
| Unnatürliche Pausen | Warten auf komplette LLM Response | Token Streaming |

---

## Quick Start: Voice Assistant MVP

1. **Account:** ElevenLabs (Free für Test)
2. **Feature:** Conversational AI aktivieren
3. **Config:** System Prompt, Greeting, Voice wählen
4. **Test:** Widget auf Testseite einbinden
5. **Iterate:** Prompt verfeinern basierend auf Tests

**Nicht nötig für MVP:**
- Eigene Infrastruktur
- Custom STT
- Komplexe Integrationen

**Zeitaufwand:** 2-4 Stunden bis funktionierender Prototyp

---

## Verwandte Use Cases

- [[Voice-Production]] – Wenn Latenz egal (Batch)
- [[Audio-Intelligence]] – Wenn nur STT nötig (Transkription)

## Verwandte Capabilities

- [[Realtime-Voice]] – Deep Dive Echtzeit-Audio
- [[Speech-Input-Transkription]] – STT Details
- [[Speech-Output-Synthese]] – TTS Details

---

*Letzte Aktualisierung: Januar 2026*

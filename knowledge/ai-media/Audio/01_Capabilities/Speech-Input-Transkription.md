---
title: Speech Input – Transkription
type: reference
status: stable
created: '2026-01-24'
updated: '2026-01-24'
tags:
  - ai-audio
  - capability
  - speech-to-text
  - stt
  - transcription
  - whisper
  - deepgram
sources:
  - 'self-authored:loschke:media-experimentation'
area: ai-media
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Speech Input – Transkription

> Speech-to-Text: Gesprochene Sprache in Text umwandeln mit hoher Accuracy, Speaker Diarization und Realtime-Fähigkeiten.

---

## Überblick

Speech-to-Text (STT) wandelt Audio in Text um. Die Accuracy ist von ~85% (2020) auf 95-98% (2025) gestiegen – bei sauberem Audio. Der Standard Word Error Rate (WER) bei Top-Modellen liegt bei <5%.

**Warum wichtig:** Meeting-Protokolle automatisch, Podcast-Transkripte für SEO, Untertitel, Accessibility, Call Center Analytics, Voice Search.

**Der Durchbruch:** Whisper (2022) demokratisierte hochwertige Transkription. Seitdem Wettlauf um beste Accuracy bei niedrigster Latenz.

---

## Kernfähigkeiten

- **Automatische Transkription** – Audio → Text mit <5% WER
- **Speaker Diarization** – Wer spricht wann?
- **Mehrsprachigkeit** – 36-100+ Sprachen je nach Tool
- **Realtime Streaming** – Live-Transkription mit <300ms Latenz
- **Timestamps** – Wort- oder Satzebene
- **Punctuation & Formatting** – Automatische Interpunktion
- **Custom Vocabulary** – Fachbegriffe, Eigennamen trainieren

---

## Accuracy-Metriken verstehen

### Word Error Rate (WER)

```
WER = (Substitutions + Deletions + Insertions) / Total Words
```

| WER | Bedeutung | Kontext |
|-----|-----------|---------|
| <3% | Excellent | Sauberes Audio, Standardsprache |
| 3-5% | Sehr gut | Die meisten Produktionsumgebungen |
| 5-10% | Gut | Hintergrundgeräusche, Akzente |
| 10-20% | Akzeptabel | Schwierige Bedingungen |
| >20% | Problematisch | Stark verrauschtes Audio |

### Aktuelle Benchmarks (Stand 2025)

| Modell | WER (sauberes Audio) | WER (real-world) |
|--------|---------------------|------------------|
| GPT-4o Transcribe | ~4-5% | 6-8% |
| Deepgram Nova-3 | ~5-7% | 7-10% |
| Whisper Large v3 | ~5-6% | 8-12% |
| AssemblyAI Universal-2 | ~5-6% | 7-9% |

**Wichtig:** Benchmarks variieren je nach Dataset. Eigene Tests auf eigenem Content sind aussagekräftiger.

---

## Batch vs. Realtime

### Batch Processing
**Szenario:** Fertige Aufnahmen transkribieren

| Aspekt | Details |
|--------|---------|
| Latenz | Sekunden bis Minuten |
| Accuracy | Höchste möglich |
| Kosten | Günstiger pro Minute |
| Use Cases | Podcasts, Meetings, Archives |

### Realtime Streaming
**Szenario:** Live-Transkription

| Aspekt | Details |
|--------|---------|
| Latenz | <300ms (Deepgram) bis ~1s |
| Accuracy | Leicht reduziert |
| Kosten | ~50% höher |
| Use Cases | Live-Untertitel, Voice Assistants, Call Centers |

---

## Tool-Vergleich

### Deepgram Nova-3

**Stärken:**
- Beste Realtime-Performance (<300ms Latenz)
- 90%+ Accuracy
- 36+ Sprachen
- Speaker Diarization out-of-box
- Per-Sekunde-Abrechnung (kein Aufrunden)

**Pricing:**
| Modus | Preis/Minute |
|-------|--------------|
| Batch | $0.0077 |
| Streaming | $0.0138 |
| Growth (Prepaid) | ~$0.0065 |

**Free Tier:** $200 Credits (keine Kreditkarte)

**Wann wählen:** Realtime-Anwendungen, Production-Workloads, Call Centers

---

### OpenAI Whisper

**Varianten:**
- **Whisper API:** Hosted, einfach zu nutzen
- **GPT-4o Transcribe:** Neueste Version mit Diarization
- **Self-Hosted:** Open Source, volle Kontrolle

**Pricing (API):**
| Modell | Preis/Minute |
|--------|--------------|
| Whisper API | $0.006 |
| GPT-4o Transcribe | $0.006 |
| GPT-4o Mini Transcribe | $0.003 |

**Stärken:**
- Höchste Accuracy bei sauberem Audio
- 99+ Sprachen
- Self-Hosting möglich
- Word-Level Timestamps
- Gut dokumentiert

**Schwächen:**
- 25MB File-Limit pro Request
- Keine native Streaming-Unterstützung
- Halluzinationen bei Stille (bekanntes Problem)

**Self-Hosting Break-Even:**
- GPU-Setup: ~$276/Monat
- Rentabel ab ~500 Stunden/Monat
- Darunter: API günstiger

---

### AssemblyAI Universal-2

**Stärken:**
- Hohe Accuracy, weniger Halluzinationen als Whisper
- 100+ Sprachen
- Ultra-low Latency Option
- Sentiment Analysis, Topic Detection inkludiert

**Besonderheit:** 30% weniger Halluzinationen als Whisper Large-v3

---

## Halluzinationen: Das STT-Problem

### Was sind STT-Halluzinationen?

Das Modell "erfindet" Text, der nicht im Audio ist. Besonders bei:
- Stille oder Pausen
- Hintergrundgeräuschen ohne Sprache
- Sehr leiser oder undeutlicher Sprache

**Typische Halluzinationen:**
- Wiederholung des letzten Satzes in Schleifen
- "Thank you for watching" am Ende (YouTube-Trainingsdaten)
- Erfundene Namen bei undeutlicher Aussprache
- Übersetzung statt Transkription

### Gegenmaßnahmen

1. **Audio vorverarbeiten:**
   - Stille trimmen
   - Noise Reduction anwenden
   - Segmente ohne Sprache entfernen

2. **Modell-Wahl:**
   - GPT-4o Transcribe hat weniger Halluzinationen als Whisper v3
   - AssemblyAI Universal-2 optimiert für Halluzinations-Reduktion
   - Deepgram: Weniger anfällig durch andere Architektur

3. **Post-Processing:**
   - Repetition-Detection
   - Längen-Plausibilitätsprüfung
   - Konfidenz-Scores nutzen (wenn verfügbar)

---

## Speaker Diarization

### Was es kann
Identifiziert **wer** spricht, nicht nur **was** gesprochen wird.

**Output-Beispiel:**
```
Speaker A [00:00 - 00:15]: "Willkommen zum Meeting..."
Speaker B [00:15 - 00:32]: "Danke, lass uns mit dem ersten Punkt..."
Speaker A [00:32 - 00:45]: "Genau, also..."
```

### Tool-Support

| Tool | Diarization | Qualität |
|------|-------------|----------|
| Deepgram | ✅ Native | Sehr gut |
| GPT-4o Transcribe | ✅ Native | Gut |
| Whisper (Standard) | ❌ | - |
| WhisperX | ✅ Add-On | Gut |
| AssemblyAI | ✅ Native | Sehr gut |

### Limitationen
- Überlappende Sprache: Schwierig bis unmöglich
- Sehr ähnliche Stimmen: Kann verwechselt werden
- Viele Sprecher (>5): Accuracy sinkt

---

## Custom Vocabulary

### Problem
Fachbegriffe, Eigennamen, Produktnamen werden oft falsch erkannt.

**Beispiel:**
- "Kubernetes" wird zu "Cube Ernestes"
- "Anthropic" wird zu "An tropic"

### Lösung: Custom Vocabulary

**Deepgram:**
```json
{
  "keywords": ["Kubernetes", "Anthropic", "GPT-4"]
}
```

**Whisper (Prompt):**
```
"This is a technical discussion about Kubernetes, Docker, and cloud infrastructure."
```

**AssemblyAI:**
Custom Spelling Dictionary hochladen

---

## Business Use Cases

### Meeting & Interview
- **Automatische Protokolle** – Meeting → Action Items
- **Interview-Transkription** – Research, Journalismus
- **Legal Discovery** – Depositions durchsuchbar machen

### Media & Content
- **Podcast-Transkripte** – SEO, Accessibility, Showotes
- **Video-Untertitel** – YouTube, Kurse, Marketing
- **Archiv-Digitalisierung** – Alte Aufnahmen durchsuchbar

### Business Intelligence
- **Call Center Analytics** – Gespräche analysieren
- **Voice of Customer** – Feedback systematisch erfassen
- **Compliance Monitoring** – Gespräche prüfen

### Accessibility
- **Live-Untertitel** – Events, Meetings, Streams
- **Gehörlose Nutzer** – Content zugänglich machen
- **Sprachbarrieren** – Realtime-Übersetzung als nächster Schritt

---

## Typische Probleme & Lösungen

| Problem | Ursache | Lösung |
|---------|---------|--------|
| Niedrige Accuracy | Schlechtes Audio | Noise Reduction, besseres Mikro |
| Falsche Fachbegriffe | Nicht im Training | Custom Vocabulary nutzen |
| Keine Diarization | Falsches Tool | Tool mit nativer Diarization |
| Halluzinationen | Stille, Rauschen | Audio vorverarbeiten, anderes Modell |
| Akzent nicht erkannt | Modell-Limitation | Sprache/Dialekt explizit angeben |
| Kosten explodieren | Streaming vs Batch | Batch wo möglich |
| Überlappende Sprecher | Technische Limitation | Separate Mikros, Nachbearbeitung |

---

## Best Practices

### Audio-Vorbereitung
- [ ] Sample Rate: 16kHz für Sprache ausreichend
- [ ] Mono für Sprache (Stereo nur bei Diarization-Bedarf)
- [ ] Noise Reduction vor Transkription
- [ ] Stille am Anfang/Ende trimmen
- [ ] Segmente ohne Sprache entfernen

### Modell-Wahl
- **Realtime nötig?** → Deepgram
- **Höchste Accuracy?** → GPT-4o Transcribe oder Whisper
- **Budget-kritisch, hohes Volumen?** → Whisper Self-Hosted
- **Minimale Halluzinationen?** → AssemblyAI oder GPT-4o

### Post-Processing
- Automatische Interpunktion meist gut, aber prüfen
- Halluzination-Check bei kritischen Dokumenten
- Sprecher-Labels manuell verifizieren bei wichtigen Meetings

---

## Entscheidungsbaum

```
Brauchst du Realtime?
├── Ja → Deepgram Nova-3
└── Nein → Höchste Accuracy wichtig?
    ├── Ja → GPT-4o Transcribe
    └── Nein → Volumen?
        ├── >500h/Monat → Whisper Self-Hosted
        └── <500h/Monat → Whisper API oder AssemblyAI
```

---

## Kosten-Vergleich

**Beispiel: 100 Stunden Audio/Monat**

| Lösung | Kosten/Monat |
|--------|--------------|
| Whisper API | ~$36 |
| GPT-4o Mini Transcribe | ~$18 |
| Deepgram Batch | ~$46 |
| Deepgram Streaming | ~$83 |
| AssemblyAI | ~$50-60 |
| Whisper Self-Hosted | ~$276 (Fix, egal Volumen) |

**Break-Even Self-Hosting:** ~500-700 Stunden/Monat

---

## Verwandte Capabilities

- [[Realtime-Voice]] – STT als Komponente von Voice AI
- [[Audio-Enhancement]] – Audio vor Transkription verbessern

## Verwandte Use Cases

- [[02_Use-Cases/Audio-Intelligence]] – Meeting-Protokolle, Call Analytics, Archive
- [[02_Use-Cases/Localization]] – Transkription als erster Dubbing-Schritt
- [[02_Use-Cases/Realtime-Interaction]] – Live-Untertitel, Voice Search

---

*Letzte Aktualisierung: Januar 2026*

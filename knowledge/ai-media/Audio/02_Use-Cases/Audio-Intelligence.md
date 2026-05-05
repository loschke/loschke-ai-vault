---
title: Audio Intelligence
type: reference
status: stable
created: '2026-01-24'
updated: '2026-01-24'
tags:
  - ai-audio
  - use-case
  - audio-intelligence
  - transkription
  - meetings
  - analytics
sources:
  - 'self-authored:loschke:media-experimentation'
area: ai-media
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Audio Intelligence

> Wissen aus Audio extrahieren: Meetings, Calls, Interviews – von der Aufnahme zum durchsuchbaren Asset.

---

## Überblick

Audio Intelligence beantwortet die Frage: **"Wie mache ich gesprochene Inhalte nutzbar?"**

Unternehmen produzieren täglich Stunden an Audio: Meetings, Support-Calls, Sales-Gespräche, Interviews, Webinare. Der Großteil verschwindet – bestenfalls existiert eine Aufnahme, die niemand durchsuchen kann. Audio Intelligence macht dieses "Dark Data" zugänglich.

**Beteiligte Capabilities:**
- [[Speech-Input-Transkription]] – Audio → Text
- [[Audio-Enhancement]] – Qualität verbessern vor Verarbeitung

**Optionale Erweiterung:**
- LLM-Verarbeitung → Zusammenfassung, Action Items, Insights
- [[Speech-Output-Synthese]] → Audio-Summary generieren (Output-Option)

---

## Use Cases

### 1. Meeting-Protokolle & Action Items

**Problem:** Meetings produzieren viel Talk, wenig dokumentierte Ergebnisse. Manuelle Protokolle sind zeitaufwändig und unvollständig.

**Lösung:**
```
Meeting-Audio → Transkription → LLM-Summary → Protokoll + Action Items
```

**Workflow:**
1. Meeting aufnehmen (Zoom, Teams, Recorder)
2. Audio durch Enhancement jagen (optional, bei schlechter Qualität)
3. Transkription mit Speaker Diarization
4. Transkript an LLM: "Erstelle Protokoll mit Entscheidungen und Action Items"
5. Review und Verteilung

**Capabilities:** [[Speech-Input-Transkription]] (mit Diarization), optional [[Audio-Enhancement]]

**Tool-Empfehlung:**
| Szenario | Tool | Warum |
|----------|------|-------|
| All-in-One | Fireflies.ai, Otter.ai | Direkte Meeting-Integration, automatisch |
| Mehr Kontrolle | Whisper API + eigenes LLM | Flexibler, günstiger bei Volumen |
| Enterprise | Microsoft Copilot, Google Meet | Compliance, bestehende Infrastruktur |

**ROI:**
- 30-60 Min Protokollzeit pro Meeting gespart
- Bei 10 Meetings/Woche: 5-10h/Woche
- Bessere Follow-through durch klare Action Items

---

### 2. Call Analytics (Sales & Support)

**Problem:** Hunderte Kundengespräche, aber keine systematische Auswertung. Was funktioniert? Wo haken Kunden? Welche Einwände kommen?

**Lösung:**
```
Call-Recordings → Transkription → Analyse (Sentiment, Keywords, Patterns)
```

**Workflow:**
1. Call-Recordings aus CRM/Telefonie exportieren
2. Batch-Transkription
3. Analyse-Layer: Sentiment, Keyword-Extraction, Talk-Ratio
4. Aggregation: Trends über Zeit, Team-Vergleiche
5. Coaching-Insights ableiten

**Capabilities:** [[Speech-Input-Transkription]] (Batch, hohe Accuracy)

**Tool-Empfehlung:**
| Szenario | Tool | Warum |
|----------|------|-------|
| Sales Intelligence | Gong, Chorus | Purpose-built, CRM-Integration |
| Support Analytics | Observe.AI | Agent-Coaching, Compliance |
| DIY/Budget | Deepgram + Custom Dashboard | 75% günstiger, volle Kontrolle |

**Metriken die rauskommen:**
- Talk-to-Listen Ratio (Sales: ideal 40:60)
- Einwand-Häufigkeit und Handling
- Sentiment-Verlauf im Gespräch
- Erfolgreiche Patterns identifizieren

**ROI:**
- 10-20% Conversion-Steigerung durch besseres Coaching (branchentypisch)
- Compliance-Dokumentation automatisch
- Onboarding neuer Mitarbeiter mit "Best Calls"

---

### 3. Interview-Auswertung (Research, HR, Journalismus)

**Problem:** Qualitative Interviews generieren Stunden an Material. Manuelle Auswertung dauert 4-6x Interviewlänge.

**Lösung:**
```
Interview-Audio → Transkription → Coding/Tagging → Themen-Cluster
```

**Workflow:**
1. Interview aufnehmen (sauberes Audio = bessere Ergebnisse)
2. Transkription mit Timestamps
3. Transkript in Analyse-Tool (Dovetail, Atlas.ti, oder LLM)
4. Thematisches Coding: Aussagen taggen
5. Pattern-Erkennung über mehrere Interviews

**Capabilities:** [[Speech-Input-Transkription]] (Word-Level Timestamps), [[Audio-Enhancement]] (bei Field Recordings)

**Tool-Empfehlung:**
| Szenario | Tool | Warum |
|----------|------|-------|
| UX Research | Dovetail | Insight-Repository, Team-Collab |
| Academic | Atlas.ti, NVivo | Wissenschaftliche Codierung |
| Lean/Startup | Whisper + Claude/GPT | Schnell, günstig, flexibel |

**ROI:**
- Auswertungszeit: von 6h auf 1-2h pro Interview
- Konsistentere Codierung (LLM vergisst keine Tags)
- Cross-Interview-Patterns schneller erkennbar

---

### 4. Searchable Audio Archive

**Problem:** Podcast-Episoden, Webinar-Aufnahmen, Schulungsvideos – alles existiert, aber niemand findet was.

**Lösung:**
```
Audio-Archiv → Transkription → Indexierung → Volltextsuche + Timestamp-Links
```

**Workflow:**
1. Bestehendes Audio-Archiv inventarisieren
2. Batch-Transkription aller Dateien
3. Transkripte in Suchindex (Algolia, Elasticsearch, oder simpler)
4. Frontend: Suche → Treffer mit Timestamp-Link zum Audio
5. Optional: Embedding-basierte semantische Suche

**Capabilities:** [[Speech-Input-Transkription]] (Batch, Timestamps)

**Tool-Empfehlung:**
| Szenario | Tool | Warum |
|----------|------|-------|
| Podcast | Transistor, Castopod (mit Transkript-Feature) | Integriert |
| Custom | Whisper + Meilisearch/Algolia | Volle Kontrolle |
| Enterprise | Panopto, Kaltura | LMS-Integration |

**ROI:**
- "Wissen, das wir mal hatten" wird wieder auffindbar
- Onboarding: Neue Mitarbeiter finden relevante Schulungen
- Content-Repurposing: Aus 50h Podcast-Archiv die besten Clips finden

---

## Output-Option: Audio-Summary

Wenn das Ergebnis wieder als Audio gebraucht wird (z.B. Briefing fürs Auto, Accessibility):

```
Audio → Transkription → LLM-Summary → TTS → Audio-Digest
```

**Beispiel:** 60-Minuten-Meeting wird zu 3-Minuten Audio-Briefing.

→ Siehe [[AI-Audio-Use-Case-Voice-Production]] für TTS-Details

---

## Entscheidungshilfe: Tool-Wahl

### Nach Volumen

| Volumen | Empfehlung | Kosten ca. |
|---------|------------|------------|
| < 10h/Monat | Whisper API | < $5/Monat |
| 10-100h/Monat | Deepgram oder Whisper API | $20-60/Monat |
| 100-500h/Monat | Deepgram Growth | $150-300/Monat |
| > 500h/Monat | Whisper Self-Hosted | Fixkosten ~$300/Monat |

### Nach Anforderung

| Anforderung | Tool | Warum |
|-------------|------|-------|
| Realtime (Live-Untertitel) | Deepgram | <300ms Latenz |
| Höchste Accuracy | Whisper (GPT-4o Transcribe) | 2-3% WER |
| Speaker Diarization | Deepgram oder GPT-4o Transcribe | Native Support |
| Selbst hosten | Whisper Open Source | Datenschutz, Kosten bei Volumen |
| Deutsch + Dialekte | Whisper | Beste Multilingual-Performance |

---

## Typische Stolpersteine

| Problem | Ursache | Lösung |
|---------|---------|--------|
| Schlechte Accuracy | Hintergrundgeräusche | [[Audio-Enhancement]] vorschalten |
| Sprecher verwechselt | Keine Diarization | Tool mit Speaker Diarization nutzen |
| Fachbegriffe falsch | Nicht im Training | Custom Vocabulary / Prompt-Kontext |
| Halluzinationen | Stille-Passagen | Audio vorverarbeiten, Stille trimmen |
| Timestamps ungenau | Modell-Limitation | Word-Level Timestamps aktivieren |

---

## Quick Start: Minimaler Stack

Für den Einstieg ohne großes Setup:

1. **Aufnahme:** Vorhandenes Tool (Zoom, Teams, Voice Memo)
2. **Transkription:** Whisper via OpenAI API ($0.006/Min)
3. **Analyse:** Claude oder GPT mit Transkript als Input
4. **Output:** Markdown-Protokoll oder Notion-Seite

**Kosten für 10 Meetings à 1h/Monat:** ~$4 Transkription + LLM-Kosten

---

## Verwandte Use Cases

- [[AI-Audio-Use-Case-Voice-Production]] – Wenn Output wieder Audio sein soll
- [[AI-Audio-Use-Case-Localization]] – Transkription als erster Schritt für Dubbing

## Verwandte Capabilities

- [[Speech-Input-Transkription]] – Deep Dive STT
- [[Audio-Enhancement]] – Qualität vor Verarbeitung verbessern

---

*Letzte Aktualisierung: Januar 2026*

---
title: Audio/01_Capabilities/Voice Prompting
type: method
status: stable
created: '2026-01-24'
updated: '2026-01-24'
tags:
  - AI-Audio
  - Capability
  - Voice-Prompting
  - TTS
  - Emotion-Control
sources:
  - 'self-authored:loschke:media-experimentation'
area: ai-media
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Voice-Prompting

## Überblick

**Warum wichtig:** Voice-Prompting ist die Kunst, TTS-Modelle durch Text-Anweisungen zu steuern – von subtilen emotionalen Nuancen bis zu dramatischen Performance-Änderungen. Mit ElevenLabs v3 und vergleichbaren Modellen wird Voice-Prompting zur Regieanweisung: Du dirigierst nicht nur *was* gesagt wird, sondern *wie*.

**Der Durchbruch 2025:** ElevenLabs v3 (Alpha) führte "Audio Tags" ein – Inline-Anweisungen in eckigen Klammern wie `[whisper]`, `[excited]` oder `[laughs]`, die das Modell interpretiert und in die Sprachausgabe übersetzt. Erstmals können Emotionen, Sound-Events und Charakterwechsel direkt im Script gesteuert werden.

## Kernfähigkeiten

- **Emotionale Steuerung**: Stimmung mid-sentence ändern (`[sad]` → `[hopeful]`)
- **Paralinguistische Events**: Seufzen, Lachen, Flüstern, Schluchzen als Tags
- **Charakter-Performance**: Akzente, Stimm-Archetypen (`[pirate voice]`, `[French accent]`)
- **Pacing-Kontrolle**: Pausen, Tempo, Betonung durch Tags und Interpunktion
- **Multi-Speaker-Dialoge**: Sprecherwechsel mit natürlichem Timing
- **Sound-Events**: Umgebungsgeräusche und Effekte (`[gunshot]`, `[door creaks]`)

## Prompting-Methoden nach Modell

### ElevenLabs v3 – Audio Tags

**Syntax:** `[tag]` inline im Text

| Kategorie | Beispiel-Tags |
|-----------|---------------|
| **Emotionen** | `[excited]`, `[nervous]`, `[frustrated]`, `[sorrowful]`, `[calm]` |
| **Reaktionen** | `[sigh]`, `[laughs]`, `[gulps]`, `[gasps]`, `[whispers]` |
| **Kognitive Beats** | `[pauses]`, `[hesitates]`, `[stammers]`, `[resigned tone]` |
| **Ton-Cues** | `[cheerfully]`, `[flatly]`, `[deadpan]`, `[playfully]` |
| **Charaktere** | `[pirate voice]`, `[French accent]`, `[Australian accent]` |
| **Sound-Events** | `[explosion]`, `[clapping]`, `[thunder]` |

**Beispiel-Script:**
```
[whisper] I heard something in the basement. 
[nervous] Should we... should we go check?
[sigh] Fine. But you're going first.
[footsteps on wooden stairs]
[gasps] What IS that?!
```

### ElevenLabs v2/v2.5 – Kontextuelle Steuerung

Ohne Audio Tags – Steuerung über:

1. **Textkontext:** "she said excitedly" (wird mitgesprochen, muss getrimmt werden)
2. **Interpunktion:** `...` für Pausen, `!` für Emphase, `?` für Frageintonation
3. **Voice Settings:** Stability (0.3 = expressiv, 0.8 = konsistent), Similarity Boost
4. **SSML-Tags:** `<break time="1.5s" />` für Pausen (nicht in v3!)
5. **next_text API-Trick:** Emotion als Kontext übergeben ohne dass es gesprochen wird

**API-Trick für Emotionen (v2):**
```python
audio = elevenlabs.generate(
    voice=voice_id,
    text='"You won\'t believe what I found"',
    next_text=', she said with barely contained excitement.',
    model_id="eleven_multilingual_v2"
)
```

### OpenAI TTS – Prompt-basierte Steuerung

OpenAI's TTS-Modelle interpretieren beschreibende Anweisungen:

```
[System] Speak quickly and professionally.
[System] Speak empathetically in a French accent.
[System] Read this like a bedtime story, slowly and soothingly.
```

**Limitierung:** Weniger granulare Kontrolle als ElevenLabs v3, keine Mid-Sentence-Wechsel.

## Pattern-Katalog

### Emotionale Bögen

**Hoffnung → Enttäuschung:**
```
[hopeful] Maybe this time it'll be different.
[pause]
[quietly] It wasn't.
```

**Wut → Resignation:**
```
[angry] I can't believe you did this!
[sigh]
[tired] You know what? I don't even care anymore.
```

### Charakter-Dialoge

**Multi-Speaker ohne Stimmen-Wechsel:**
```
[British accent, authoritative] "The mission is clear, Agent."
[American accent, casual] "Yeah, crystal. Get in, grab the files, get out."
[British accent] "And try not to blow anything up this time."
```

### Dramatische Pausen

```
I found out who killed him.
[long pause]
It was [whispers] you.
```

### Lachen und Emotionale Ausbrüche

```
[laughs] Brooo—BROOO I don't know WHY that sent me!
[laughs harder] The chicken had NO PLOT, just raw determination!
```

## Typische Probleme & Lösungen

| Problem | Ursache | Lösung |
|---------|---------|--------|
| Tag wird gesprochen | Falsches Modell (v2 statt v3) | Auf v3 wechseln oder Kontext-Methode nutzen |
| Emotion wird ignoriert | Tag zu weit vom Text | Tag direkt vor den betreffenden Satz setzen |
| Inkonsistente Charakterstimme | Voice nicht für emotionale Range trainiert | IVC mit breiterem Emotionsspektrum nutzen |
| Unnatürliche Pausen | SSML `<break>` in v3 | Ellipsen `...` oder `[pause]` Tag nutzen |
| Akzent wechselt ungewollt | Sprachmodell unsicher | Explizit `[maintains American accent]` wiederholen |
| Lachen klingt künstlich | Falsche Voice-Wahl | Voice aus v3-optimierter Library wählen |

## Best Practices

### Do's

- **Voice zur Emotion matchen:** Nicht jede Stimme kann jede Emotion. Shouting-Voice + `[whisper]` = Probleme
- **Emotional Range in IVC einbauen:** Bei Voice Cloning verschiedene emotionale Samples aufnehmen
- **Iterativ verfeinern:** Erst grob, dann Feintuning der Tags
- **Kontext geben:** `[tired, after a long day]` präziser als nur `[tired]`
- **Interpunktion nutzen:** Natürliche Pausen über `...`, `—`, `,` steuern

### Don'ts

- **Tags überladen:** Zu viele Tags = inkonsistente Performance
- **Widersprüchliche Anweisungen:** `[calm] This is OUTRAGEOUS!`
- **PVC mit v3 erzwingen:** Professional Voice Clones noch nicht v3-optimiert
- **SSML in v3 nutzen:** `<break>` funktioniert nicht, nur Audio Tags
- **Extreme Emotionen ohne passende Stimme:** Nicht jede Voice kann weinen

## Modell-Entscheidung

| Anforderung | Empfohlenes Modell |
|-------------|-------------------|
| Maximum Expressivität | ElevenLabs v3 (Alpha) |
| Stabilität & Konsistenz | ElevenLabs Multilingual v2 |
| Niedrigste Latenz (<100ms) | ElevenLabs Flash v2.5 |
| Sound-Events + Atmosphäre | ElevenLabs v3 |
| Multi-Speaker-Dialoge | ElevenLabs v3 Text-to-Dialogue |
| Realtime Conversation | ElevenLabs Flash v2.5 oder OpenAI |

## Kombinations-Workflows

**Audiobook-Produktion:**
1. Script mit Audio Tags anreichern
2. v3 für emotionale Passagen
3. Multilingual v2 für neutrale Narration (konsistenter)
4. Mix in DAW

**Character-Voice für Games:**
1. IVC mit emotionaler Range erstellen
2. Dialog-Scripts mit Tags versehen
3. Bulk-Generierung via API
4. Post-Processing für Konsistenz

**Podcast-Intro mit Dramatik:**
1. `[dramatic pause]` + `[deep voice]` für Hook
2. `[casual, friendly]` für Host-Übergang
3. Sound-Tags für Atmosphäre

## Verwandte Capabilities

- [[Speech-Output-Synthese]] – Grundlagen der TTS-Steuerung
- [[Voice-Cloning]] – Custom Voices für maximale Kontrolle
- [[Realtime-Voice]] – Live-Anwendung von Voice-Prompting

---
*Letzte Aktualisierung: Januar 2026*

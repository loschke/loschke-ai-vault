---
title: Kosten und Preismodelle
type: reference
status: living
created: '2026-03-03'
updated: '2026-03-03'
tags:
  - ki-grundlagen
  - kosten
  - pricing
  - tokens
  - build-vs-buy
sources:
  - 'self-authored:loschke:pre-migration'
area: ai-essentials
audience:
  - praktiker
  - fuehrungskraft
  - entscheider
level: basic-to-advanced
intent:
  - verstehen
  - entscheiden
  - einordnen
contains:
  - vocabulary
  - contrast
  - decision-aid
  - tip
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-04'
---
# Kosten und Preismodelle

> Token-Pricing, API vs. Subscription, Build vs. Buy Basics – was KI kostet und wie man Kosten einschätzt.

---

## Warum das wichtig ist

"Was kostet das?" ist die zweite Frage nach "Kann KI das?". Die Antwort ist weniger komplex als vermutet, aber anders strukturiert als gewohnt. Statt Lizenzkosten pro Nutzer gibt es Token-Preise, Context-Window-Limits und die Unterscheidung zwischen Abo-Tools und API-Zugang.

---

## Die zwei Modelle: Subscription vs. API

### Subscription (Abo-Tools)

Du zahlst einen festen Betrag pro Monat für ein Tool mit Nutzungslimits.

| Tool | Preis (ca.) | Was du bekommst | Limit |
|------|-------------|-----------------|-------|
| ChatGPT Plus | $20/Monat | GPT-4o, DALL-E, Websuche, Code Interpreter | Fair-Use (hoch) |
| ChatGPT Pro | $200/Monat | Alle Modelle inkl. o1 Pro, höchste Limits | Sehr hoch |
| Claude Pro | $20/Monat | Opus, Sonnet, Projects, Artifacts | Usage-basiert (Nutzungslimit) |
| Claude Max | $100-200/Monat | Deutlich höhere Limits | Hoch |
| Gemini Advanced | $20/Monat | Gemini Pro, 1M Context, Google-Integration | Fair-Use |
| Perplexity Pro | $20/Monat | Pro-Suche, Datei-Upload | 600 Pro-Suchen/Tag |

**Für wen:** Einzelpersonen und kleine Teams. Feste Kosten, keine Überraschungen.

**Einschränkung:** Bei intensiver Nutzung stößt man an Fair-Use-Limits. Keine programmatische Integration möglich.

### API (Pay-per-Use)

Du zahlst pro verarbeitetem Token. Kein fester Monatspreis, sondern nutzungsabhängig.

**Für wen:** Entwickler, Unternehmen mit eigenen Anwendungen, Automatisierungen, hohe Volumina.

**Vorteil:** Volle Kontrolle, programmatische Integration, keine User-Interface-Abhängigkeit.
**Nachteil:** Kosten skalieren mit Nutzung. Braucht technische Implementierung.

---

## Token-Pricing verstehen

### Grundprinzip

Bei API-Nutzung zahlst du pro Token. Es gibt zwei Preise:
- **Input-Tokens:** Was du dem Modell gibst (Prompt + Kontext)
- **Output-Tokens:** Was das Modell generiert (Antwort)

Output ist immer teurer als Input (typisch 3-5x).

### Preisvergleich (Stand März 2026, pro 1M Tokens)

| Modell | Input | Output | Klasse |
|--------|-------|--------|--------|
| **GPT-4o** | ~$2.50 | ~$10.00 | Mid-Range |
| **GPT-4o-mini** | ~$0.15 | ~$0.60 | Klein |
| **GPT-4.5** | ~$75.00 | ~$150.00 | Frontier |
| **o3** | ~$10.00 | ~$40.00 | Reasoning |
| **Claude Opus 4** | ~$15.00 | ~$75.00 | Frontier |
| **Claude Sonnet 4** | ~$3.00 | ~$15.00 | Mid-Range |
| **Claude Haiku 3.5** | ~$0.80 | ~$4.00 | Klein |
| **Gemini 2.5 Pro** | ~$1.25 | ~$10.00 | Mid-Range |
| **Gemini 2.5 Flash** | ~$0.15 | ~$0.60 | Klein |

**Achtung:** Preise ändern sich häufig – tendenziell nach unten. Diese Tabelle ist ein Orientierungspunkt, keine aktuelle Preisliste.

### Was kosten typische Aufgaben?

| Aufgabe | Tokens (ca.) | Kosten mit Sonnet (ca.) |
|---------|-------------|------------------------|
| Kurze E-Mail schreiben | 500 Input + 200 Output | $0.004 |
| Dokument zusammenfassen (5 Seiten) | 3.000 Input + 500 Output | $0.016 |
| Blogpost generieren (1.500 Wörter) | 1.000 Input + 2.500 Output | $0.040 |
| Langes Dokument analysieren (50 Seiten) | 25.000 Input + 2.000 Output | $0.105 |
| Code-Review (500 Zeilen) | 5.000 Input + 3.000 Output | $0.060 |

**Kernbotschaft:** Einzelne Aufgaben sind extrem günstig. Kosten werden erst bei hohen Volumina oder Frontier-Modellen relevant.

---

## Kostenoptimierung: Die Hebel

### 1. Das richtige Modell für die Aufgabe

Der größte Kostenhebel. Nicht jede Aufgabe braucht das teuerste Modell.

| Aufgabe | Empfehlung | Kostenfaktor |
|---------|------------|-------------|
| Klassifikation, Routing | Kleines Modell (Mini, Flash, Haiku) | 1x (Basis) |
| Standard-Textarbeit | Mid-Range (Sonnet, GPT-4o) | 10-20x |
| Komplexe Analyse, Coding | Frontier (Opus, GPT-4.5) | 50-100x |

**Routing-Strategie:** Einfache Aufgaben an günstige Modelle, komplexe an teure. In Produktion oft automatisiert.

### 2. Kontext-Management

Weniger Input-Tokens = geringere Kosten. Relevanten Kontext bereitstellen, nicht alles.

| Statt | Besser |
|-------|--------|
| 50-seitiges Dokument komplett hochladen | Relevante Abschnitte extrahieren |
| Komplette Konversationshistorie mitschicken | Zusammenfassung der bisherigen Konversation |
| Alle Dateien eines Projekts als Kontext | Nur die aktuell relevanten Dateien |

### 3. Caching nutzen

Viele Anbieter bieten Prompt Caching: Wenn sich der Anfang deines Prompts nicht ändert (z.B. System Prompt + Kontext), wird er gecached und kostet weniger.

- Anthropic: Prompt Caching verfügbar (90% günstiger für gecachte Tokens)
- OpenAI: Automatic Caching für lange Prompts

### 4. Batch-Processing

Nicht zeitkritische Aufgaben als Batch senden. Viele Anbieter bieten 50% Rabatt für Batch-Requests (Ergebnis kommt innerhalb von 24h statt sofort).

---

## Build vs. Buy: Die Grundsatzfrage

### Buy: Fertige Tools nutzen

| Wann | Beispiele | Kosten |
|------|-----------|--------|
| Standardaufgaben | ChatGPT Plus, Claude Pro, Perplexity | $20-200/Monat/User |
| Team-Collaboration | ChatGPT Team, Claude Business | $25-30/Monat/User |
| Enterprise (SSO, Compliance) | ChatGPT Enterprise, Claude Enterprise | Verhandlungsbasis |

**Für die meisten Unternehmen der richtige Einstieg.** Kein Entwicklungsaufwand, sofort nutzbar.

### Build: Eigene Anwendungen mit API

| Wann | Beispiele | Kosten |
|------|-----------|--------|
| Spezifische Workflows | Automatisierte E-Mail-Verarbeitung | API-Kosten + Entwicklung |
| Eigene Produkte | KI-Feature in deiner App | API-Kosten + Infrastruktur |
| Hohe Volumina | 10.000+ Anfragen/Tag | Oft günstiger als pro-User-Lizenzen |
| Datenschutz-Anforderungen | Self-Hosted mit Open-Source-Modell | Infrastruktur-Kosten |

### Die ehrliche Kalkulation

```
Buy: $20/Monat × 50 Mitarbeiter = $1.000/Monat
     + Kein Entwicklungsaufwand
     + Sofort nutzbar
     = Gesamtkosten: $1.000/Monat

Build: API-Kosten $200/Monat (geschätzt)
       + Entwicklung: 2 Entwickler × 2 Monate = ~$40.000
       + Wartung: 0.5 Entwickler laufend = ~$3.000/Monat
       = Amortisation nach 12+ Monaten (wenn überhaupt)
```

**Faustregel:** Build lohnt sich erst, wenn Buy die Anforderungen nicht erfüllt (Datenschutz, Spezialanpassung, Volumen) oder wenn KI ein Kernprodukt-Feature ist.

---

## Kostentransparenz: Was Manager wissen müssen

### Die überraschende Wahrheit

KI-Kosten sind für die meisten Unternehmen nicht das Problem. Pro-Lizenzen kosten $20-30/Monat pro Mitarbeiter. Das ist weniger als die meisten SaaS-Lizenzen.

| Vergleich | Kosten/Monat/User |
|-----------|-------------------|
| Salesforce | $25-300 |
| Microsoft 365 | $12-57 |
| Slack Business | $12.50 |
| ChatGPT Plus | $20 |
| Claude Pro | $20 |

### Wo die echten Kosten liegen

Nicht in den Lizenzen, sondern in:
- **Schulung:** Menschen müssen lernen, KI produktiv zu nutzen
- **Integration:** KI in bestehende Workflows einbauen
- **Qualitätssicherung:** Ergebnisse prüfen, Prozesse anpassen
- **Change Management:** Organisation auf neue Arbeitsweisen umstellen

Die Tool-Kosten sind der kleinste Posten.

---

## Verknüpfungen

- [[Wie-LLMs-funktionieren]] – Was Tokens sind und warum sie die Abrechnungseinheit sind
- [[Modell-Landschaft]] – Welche Modelle es gibt und wie sie sich unterscheiden
- [[GenAI-Stack-Erklaermodell]] – Ebene 2 (Tools) vs. Ebene 1 (Modelle): Unterschiedliche Kostenstrukturen
- [[RAG]] – Build vs. Buy speziell für Knowledge-Systeme

---

*Orientierung zu KI-Kosten für Praktiker und Entscheider – Stand März 2026*

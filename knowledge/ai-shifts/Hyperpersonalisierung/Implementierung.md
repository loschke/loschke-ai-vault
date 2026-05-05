---
title: Hyperpersonalisierung/Implementierung
type: guide
status: living
created: 2026-01-27T00:00:00.000Z
updated: 2026-01-27T00:00:00.000Z
tags:
  - ai-shifts
  - personalization
  - implementation
  - technical
sources:
  - 'self-authored:loschke:trend-research'
area: ai-shifts
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Implementierung

> Die Kritiker-Fragen – und ehrliche Antworten

## Die drei Kernkritiken

1. "Wie erkenne ich die Intention?"
2. "Wie erkenne ich den Kontext?"
3. "Ist das nicht viel zu komplex / gibt's die Technologie überhaupt?"

---

## Zu Kritik 1: Intentionserkennung

**Die ehrliche Antwort:** Mit LLMs ist das heute *erstaunlich gut* machbar. Aber die meisten Systeme nutzen es nicht, weil sie nicht so konzipiert sind.

### Vier Ansätze

| Ansatz | Wie | Pro | Con |
|--------|-----|-----|-----|
| **Explizit fragen** | "Was möchten Sie erreichen?" mit Optionen | Genau, keine Spekulation | Friction, Nutzer wissen es oft selbst nicht |
| **Aus Journey ableiten** | Woher kommt der Nutzer? Was hat er vorher getan? | Keine Frage nötig | Nur grobe Annäherung |
| **Aus Formulierung (LLM)** | Wortwahl analysieren | Kann sehr präzise sein | Braucht gute Prompts |
| **Hybridansatz** | Hypothese bilden → handeln → validieren | Balanciert | Komplexer zu bauen |

### LLM-Beispiele

```
"Muss ich das bezahlen?" → Pragmatismus
"Ich mache mir Sorgen..." → Sicherheit
"Wie läuft das ab?" → Orientierung
"Was ist die beste Option?" → Qualität
```

Das ist kein Hexenwerk. Es braucht nur die richtige Architektur.

---

## Zu Kritik 2: Kontexterkennung

**Technisch einfacher als Intentionserkennung.** Viele Signale sind trivial verfügbar.

### Signal-Übersicht

| Signal | Erkennbarkeit | Zuverlässigkeit |
|--------|---------------|-----------------|
| Gerät (mobil/desktop) | Trivial | Hoch |
| Tageszeit | Trivial | Mittel |
| Session-Historie | Einfach | Hoch |
| Vorherige Interaktionen | Einfach | Hoch |
| Emotionaler Zustand | Schwieriger | Mittel |

### Der Knackpunkt: Emotionaler Zustand

Mögliche Signale:
- **Textanalyse:** Ausrufezeichen, Großbuchstaben, Wortwahl, Satzlänge
- **Session-Kontext:** Support-Ticket nach Bestellproblem = wahrscheinlich frustriert
- **Tippverhalten:** Schnelle Korrekturen, abgebrochene Nachrichten

**Ehrliche Einschränkung:** "Gestresst" vs. "in Eile" vs. "genervt" ist schwer zu unterscheiden. Das System muss mit Unsicherheit umgehen – nicht mit falscher Sicherheit.

---

## Zu Kritik 3: "Gibt's die Technologie überhaupt?"

**Provokante These:** Es ist weniger ein Technologie-Problem als ein Denk-Problem.

### Was heute geht
- LLMs können Intentionen und emotionale Färbung gut erkennen
- Kontextdaten sind meist verfügbar
- Personalisierte Ausgabe ist trivial (verschiedene Prompts/Templates)

### Was fehlt
- **Die Architektur.** Die meisten Systeme sind nicht so gebaut, dass diese Informationen zusammenfließen
- **Das Konzept.** Teams denken nicht in "Intention → Strategie → Delivery"
- **Die Feedback-Loops.** Woher weiß ich, ob meine Intentionserkennung stimmt?

Die Bausteine existieren – sie werden nur nicht so zusammengesetzt.

---

## Reifegradmodell

Nicht "ganz oder gar nicht" – sondern schrittweise.

### Stufe 0: Baseline (Status Quo)

| Layer | Implementierung |
|-------|-----------------|
| L1 | Constraints definiert |
| L2 | – |
| L3 | – |

**Das ist:** Website-Content von heute. Fachlich korrekt, rechtlich compliant, für alle gleich. Keine Personalisierung.

### Stufe 1: Einstieg in Personalisierung

| Layer | Implementierung |
|-------|-----------------|
| L1 | Constraints fest im Prompt |
| L2 | 3-4 grobe Intentionen, regelbasiert ("enthält 'Kosten'" → kurz & sachlich) |
| L3 | Nur Gerät (mobil → kürzer) |

**Aufwand:** 1-2 Wochen
**Ergebnis:** Erste echte Differenzierung. System reagiert unterschiedlich auf unterschiedliche Anfragen.

### Stufe 2: LLM-gestützte Erkennung

| Layer | Implementierung |
|-------|-----------------|
| L1 | Constraints im Prompt + Fact-Retrieval |
| L2 | LLM erkennt Intention dynamisch |
| L3 | Mehrere Kontextsignale (Gerät, Tonalität, Session-History) |

**Aufwand:** 2-4 Wochen
**Voraussetzung:** Gute Prompts, klares Intentions-Mapping
**Ergebnis:** System "versteht" Anfragen, nicht nur Keywords.

### Stufe 3: Adaptives System

| Layer | Implementierung |
|-------|-----------------|
| L1 | Guardrail-Layer mit Audit-Trail |
| L2 | Hypothese → Handlung → Feedback-Loop |
| L3 | Lernt optimale Delivery aus implizitem Feedback |

**Aufwand:** Monate, kontinuierlich
**Voraussetzung:** Analytics-Integration, A/B-Testing-Infrastruktur
**Ergebnis:** System wird über Zeit besser, nicht nur "eingestellt".

---

## Offene Fragen (ehrlich)

### Zur Intentionserkennung
- Wie robust ist LLM-basierte Erkennung bei Edge Cases?
- Wie viel explizites Fragen ist okay, bevor es nervt?
- Wie geht man mit Intention-Wechseln mitten im Gespräch um?
- Wie mit Mehrfach-Intentionen?

### Zur Kontexterkennung
- Privacy: Wie viel Auswertung ist ethisch vertretbar?
- Transparenz: Soll der Nutzer wissen, dass er "analysiert" wird?
- Was wenn die Einschätzung falsch ist?

### Zur Architektur
- Wie trennt man sauber L1/L2/L3 in der Implementierung?
- Wo werden die Entscheidungen geloggt für Debugging?
- Wie testet man das Gesamtsystem?

### Zum Feedback
- Welche impliziten Signale sind zuverlässig?
- Wie schnell kann/soll das System lernen?
- Wie verhindert man Feedback-Loops in die falsche Richtung?

---

## Nächste Schritte (für Projekte)

1. **L1 definieren:** Was sind die harten Constraints in dieser Domäne?
2. **Intentionen kartieren:** Welche 5-7 Grundbedürfnisse gibt es?
3. **Strategie-Mapping:** Was folgt aus jeder Intention?
4. **Kontextfaktoren:** Welche sind verfügbar? Welche relevant?
5. **MVP bauen:** Stufe 1 implementieren, testen, lernen
6. **Iterieren:** Basierend auf echtem Nutzerverhalten verbessern

---

## Verknüpfungen

- [[02_KNOWLEDGE/AI-Shifts/Hyperpersonalisierung/_MOC]] – Zurück zur Übersicht
- [[Use-Cases]] – Konkrete Beispiele durch alle Stufen
- [[Layer-1-Constraints]] – Details zu L1
- [[Layer-2-Intent]] – Details zu L2
- [[Layer-3-Context]] – Details zu L3

---

*Die Technologie ist da. Die Frage ist: Wer denkt Personalisierung richtig?*

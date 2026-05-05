---
title: Wie LLMs funktionieren
type: concept
status: stable
created: '2026-03-03'
updated: '2026-03-03'
tags:
  - ki-grundlagen
  - llm
  - training
  - tokens
  - inference
  - seminar-material
sources:
  - 'self-authored:loschke:pre-migration'
area: ai-essentials
audience:
  - einsteiger
  - praktiker
  - fuehrungskraft
  - technisch
level: basic-to-advanced
intent:
  - verstehen
  - einordnen
  - vermitteln
contains:
  - analogy
  - vocabulary
  - contrast
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-04'
---
# Wie LLMs funktionieren

> Training, Tokens, Attention, Inference – erklärt für Menschen, die keine Informatiker sind. Mit Analogien für Workshops und Präsentationen.

---

## Warum das wichtig ist

Man muss kein Mechaniker sein, um Auto zu fahren. Aber wer versteht, dass der Motor Benzin braucht und die Bremsen bei Nässe anders reagieren, fährt besser.

Genauso mit LLMs: Du musst nicht wissen, wie Attention-Mechanismen mathematisch funktionieren. Aber wenn du verstehst, wie das Modell "denkt", nutzt du es besser, erkennst seine Grenzen schneller und fällst weniger auf Halluzinationen rein.

---

## Die Grundidee: Wort-Vorhersage

### Was ein LLM tut

Ein Large Language Model (LLM) macht im Kern eine Sache: Es sagt vorher, welches Wort als nächstes kommt.

```
"Die Hauptstadt von Frankreich ist ___"
→ Modell berechnet Wahrscheinlichkeiten:
   "Paris" (97%), "Lyon" (1%), "eine" (0.5%), ...
→ Wählt: "Paris"
```

Das klingt simpel. Aber diese eine Fähigkeit, auf Milliarden von Texten trainiert, erzeugt erstaunlich komplexe Ergebnisse: Zusammenfassungen, Code, Analysen, kreative Texte.

### Die Bibliotheks-Analogie

Stell dir eine Person vor, die in einer Bibliothek mit allen jemals geschriebenen Büchern lebt. Sie hat jedes Buch gelesen. Wenn du sie etwas fragst, antwortet sie nicht, indem sie ein Buch aufschlägt. Sie antwortet, indem sie aus all den gelesenen Mustern das formuliert, was als Antwort am wahrscheinlichsten passt.

Sie "weiß" nicht im menschlichen Sinn. Sie hat Muster erkannt und reproduziert sie. Deshalb ist sie bei häufigen Themen (Paris ist die Hauptstadt) extrem gut und bei seltenen Themen (CEO eines kleinen Unternehmens) unzuverlässig.

---

## Training: Wie das Modell "lernt"

### Phase 1: Pre-Training (das Lesen)

Das Modell verarbeitet Milliarden von Textseiten aus dem Internet, Büchern, Code-Repositories und wissenschaftlichen Papern.

| Aspekt | Detail |
|--------|--------|
| **Datenmenge** | Hunderte Milliarden bis Billionen von Wörtern |
| **Quelle** | Internet-Texte, Bücher, Wikipedia, Code, wissenschaftliche Paper |
| **Dauer** | Wochen bis Monate auf tausenden GPUs |
| **Kosten** | Dutzende bis hunderte Millionen Dollar |
| **Ergebnis** | Ein Modell, das Sprache "versteht" und Text generieren kann |

**Was dabei passiert:** Das Modell lernt Muster. Grammatik, Fakten, Argumentationsstrukturen, Programmiermuster, Schreibstile. Nicht als explizites Wissen, sondern als statistische Zusammenhänge zwischen Wörtern und Konzepten.

**Stichtag-Problem:** Das Training hat ein Enddatum. Was danach passiert, kennt das Modell nicht. Deshalb brauchen Modelle Websuche oder RAG für aktuelle Informationen.

### Phase 2: Fine-Tuning (das Spezialisieren)

Nach dem Pre-Training wird das Modell auf spezifische Aufgaben und Verhaltensweisen trainiert.

| Methode | Was passiert | Beispiel |
|---------|-------------|---------|
| **Instruction Tuning** | Modell lernt, Anweisungen zu folgen | "Fasse zusammen" → erzeugt Zusammenfassung |
| **RLHF** (Reinforcement Learning from Human Feedback) | Menschen bewerten Antworten, Modell optimiert darauf | Höflichere, hilfreichere, sicherere Antworten |
| **Constitutional AI** | Modell prüft sich selbst gegen Regeln | Ablehnung schädlicher Anfragen |

**Warum das wichtig ist:** Pre-Training allein erzeugt einen Text-Vervollständiger. Erst Fine-Tuning macht daraus einen hilfreichen Assistenten. Deshalb antworten Modelle auf Fragen statt einfach weiterzuschreiben.

---

## Tokens: Die Sprache der Modelle

### Was sind Tokens?

Modelle lesen keine Wörter. Sie lesen Tokens – kleine Textbausteine, die ungefähr Silben oder kurzen Wörtern entsprechen.

| Text | Tokens (ungefähr) |
|------|-------------------|
| "Hallo" | 1 Token |
| "Künstliche Intelligenz" | 3-4 Tokens |
| "Maschinelles Lernen revolutioniert..." | 4-5 Tokens |
| 1 Seite Text (ca. 250 Wörter) | ~350 Tokens |
| 1 Buch (80.000 Wörter) | ~110.000 Tokens |

**Faustregel Deutsch:** 1 Token ≈ 0,7 Wörter (Deutsch braucht mehr Tokens als Englisch wegen längerer Wörter).

### Warum Tokens wichtig sind

Tokens bestimmen drei Dinge:

1. **Kosten** – Du zahlst pro Token (bei API-Nutzung)
2. **Context Window** – Wie viel Text das Modell gleichzeitig "sehen" kann
3. **Geschwindigkeit** – Mehr Tokens = längere Antwortzeit

---

## Context Window: Das Arbeitsgedächtnis

### Was ist das Context Window?

Die maximale Textmenge, die ein Modell in einer Konversation gleichzeitig verarbeiten kann. Alles, was du schreibst UND was das Modell antwortet, muss in dieses Fenster passen.

| Modell | Context Window | Entspricht ungefähr |
|--------|---------------|---------------------|
| GPT-4o | 128K Tokens | ~200 Seiten |
| Claude Sonnet/Opus | 200K Tokens | ~300 Seiten |
| Gemini Pro | 1M Tokens | ~1.500 Seiten |
| Gemini Ultra | 2M Tokens | ~3.000 Seiten |

### Was passiert am Limit?

Wenn das Context Window voll ist, "vergisst" das Modell die ältesten Teile der Konversation. Es kann dann nicht mehr auf frühere Aussagen Bezug nehmen.

**Praxisrelevanz:** Bei langen Konversationen oder vielen hochgeladenen Dokumenten kann das Modell den Anfang "vergessen". Neue Konversation starten hilft.

### Attention: Nicht alles ist gleich wichtig

Innerhalb des Context Windows achtet das Modell nicht auf alles gleich stark. Der Attention-Mechanismus gewichtet, welche Teile des Kontexts für die aktuelle Antwort relevant sind.

**Praktische Auswirkung:** Wichtige Informationen am Anfang oder am Ende des Prompts platzieren. Material in der Mitte langer Kontexte wird manchmal übersehen ("Lost in the Middle"-Effekt).

---

## Inference: Wie eine Antwort entsteht

### Der Prozess

Wenn du einen Prompt sendest:

```
1. Dein Text wird in Tokens zerlegt
2. Tokens werden durch das Modell verarbeitet
3. Modell berechnet Wahrscheinlichkeiten für das nächste Token
4. Ein Token wird ausgewählt
5. Dieser Token wird zum Kontext hinzugefügt
6. Zurück zu Schritt 3 – bis die Antwort fertig ist
```

Die Antwort entsteht Wort für Wort (genauer: Token für Token). Deshalb siehst du bei Chat-Interfaces den Text "tippen".

### Temperatur: Kreativität vs. Präzision

Die Temperatur-Einstellung bestimmt, wie "kreativ" das Modell antwortet.

| Temperatur | Verhalten | Gut für |
|------------|-----------|---------|
| **Niedrig (0-0.3)** | Wählt fast immer das wahrscheinlichste Token | Fakten, Code, Analyse |
| **Mittel (0.5-0.7)** | Balance zwischen Vorhersagbarkeit und Variation | Allgemeine Textarbeit |
| **Hoch (0.8-1.0)** | Wählt auch weniger wahrscheinliche Tokens | Kreatives Schreiben, Brainstorming |

**Deshalb:** Dieselbe Frage kann unterschiedliche Antworten erzeugen. Das ist kein Fehler, sondern ein Feature.

---

## Was daraus folgt: Fünf Erkenntnisse für die Praxis

### 1. Das Modell "weiß" nichts

Es hat Muster gelernt, keine Fakten gespeichert. Deshalb sind Halluzinationen kein Bug, sondern ein Systemmerkmal.
→ Siehe [[Halluzinationen-und-Zuverlaessigkeit]]

### 2. Kontext schlägt alles

Was du dem Modell gibst, bestimmt die Antwort-Qualität mehr als das Modell selbst.
→ Siehe [[Context-Engineering-Grundlagen]]

### 3. Größer ≠ besser (für alles)

Größere Modelle sind bei komplexen Aufgaben besser, aber langsamer und teurer. Für einfache Aufgaben reichen kleinere Modelle.
→ Siehe [[Modell-Landschaft]]

### 4. Jedes Modell hat einen Stichtag

Aktuelle Informationen brauchen Websuche, RAG oder explizit bereitgestellte Dokumente.
→ Siehe [[RAG]]

### 5. Deutsch kostet mehr als Englisch

Deutsche Texte brauchen mehr Tokens. Das bedeutet: höhere Kosten, schnelleres Füllen des Context Windows. Bei kostensensiblen Anwendungen relevant.
→ Siehe [[Kosten-und-Preismodelle]]

---

## Verwendungshinweise

| Zielgruppe | Tiefe | Kernbotschaft |
|------------|-------|---------------|
| Einsteiger | Bibliotheks-Analogie + Tokens + Context Window | "KI sagt das wahrscheinlichste Wort vorher – extrem gut, aber kein echtes Verstehen" |
| Fortgeschrittene | Training, Temperatur, Attention | "Verstehe die Mechanik, nutze die Werkzeuge besser" |
| Führungskräfte | Kosten (Tokens), Stichtag-Problem, Grenzen | "Was es kostet, wo die Grenzen liegen, warum Kontext entscheidend ist" |
| Technik | Pre-Training, RLHF, Inference-Pipeline | "Architektur-Entscheidungen und ihre Konsequenzen" |

---

## Verknüpfungen

- [[GenAI-Stack-Erklaermodell]] – Ebene 1: Das Modell als "Gehirn im Tank"
- [[Modell-Landschaft]] – Welche Modelle gibt es und wie unterscheiden sie sich?
- [[Halluzinationen-und-Zuverlaessigkeit]] – Warum "Wort-Vorhersage" zu falschen Aussagen führt
- [[Kosten-und-Preismodelle]] – Was Token-basierte Abrechnung bedeutet
- [[KI-Faehigkeiten-Scope]] – Was diese Technologie kann und was nicht

---

*Technische Grundlagen, erklärt für alle Zielgruppen*

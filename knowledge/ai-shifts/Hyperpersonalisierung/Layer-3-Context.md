---
title: Hyperpersonalisierung/Layer 3 Context
type: concept
status: stable
created: 2026-01-27T00:00:00.000Z
updated: 2026-01-27T00:00:00.000Z
tags:
  - ai-shifts
  - personalization
  - framework
  - context
  - delivery
sources:
  - 'self-authored:loschke:trend-research'
area: ai-shifts
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Layer 3: Context

> "Was braucht dieser Mensch jetzt?"

## Funktion

Passt die Auslieferung an den aktuellen Kontext des Nutzers an. L2 hat entschieden *was* kommuniziert wird. L3 entscheidet *wie* es beim konkreten Menschen in dessen aktueller Situation ankommt.

---

## Die drei Dimensionen

### 1. Kognitive Kapazität (Priorität 1)

**Frage:** Wie viel kann gerade ankommen?

| Zustand | Signal | Anpassung |
|---------|--------|-----------|
| **Krise** | Emotionale Sprache, Dringlichkeit | Radikal kürzen, Ein-Satz-Antworten |
| **Belastet** | Kurze Sätze, Zeitdruck-Signale | Portionieren, Wichtigstes zuerst |
| **Routine** | Neutrale Sprache, keine Eile | Vollständige Information möglich |

### 2. Format (Priorität 2)

**Frage:** Wie wird es dargestellt?

| Modus | Signale | Anpassung |
|-------|---------|-----------|
| **Quick-Scan** | Mobil, kurze Session | Kürzestformat, klickbare Aktionen, Bullet Points |
| **Deep-Dive** | Desktop, lange Session | Ausführlich, mit Hintergrundlinks, Kontext |

### 3. Sprachregister (Priorität 3)

**Frage:** Welche Wortwahl?

| Register | Signale | Anpassung |
|----------|---------|-----------|
| **Einfach** | Keine Fachbegriffe in Anfrage | Alltagssprache, kurze Sätze |
| **Fachlich** | Terminologie wird verwendet | Präzise Fachsprache, weniger Erklärung |

---

## Das Zusammenspiel mit L2

**Wichtig:** L3 überschreibt L2 nicht – L3 *formt* die L2-Strategie für den konkreten Moment.

**Beispiel:**
- L2: Hohe Informationstiefe (weil Orientierungs-Intention)
- L3: Nutzer ist gestresst + mobil
- **Ergebnis:** Die Tiefe bleibt – aber portioniert in Häppchen mit "Mehr erfahren?"-Option

Die Information geht nicht verloren. Sie wird nur anders serviert.

---

## Kontexterkennung: Signale

### Leicht zu erkennen (technisch trivial)

| Signal | Erkennbarkeit | Zuverlässigkeit |
|--------|---------------|-----------------|
| Gerät (mobil/desktop) | User-Agent | Hoch |
| Bildschirmgröße | Viewport | Hoch |
| Session-Dauer | Analytics | Hoch |
| Tageszeit | Timestamp | Mittel (Interpretation unklar) |
| Vorherige Interaktionen | Session-History | Hoch |

### Schwieriger zu erkennen

| Signal | Mögliche Indikatoren | Zuverlässigkeit |
|--------|---------------------|-----------------|
| Emotionaler Zustand | Wortwahl, Satzlänge, Interpunktion | Mittel |
| Zeitdruck | Kurze Nachrichten, "schnell", "dringend" | Mittel-Hoch |
| Expertise-Level | Verwendung von Fachbegriffen | Mittel |
| Kognitive Kapazität | Komplexität der Formulierung | Niedrig-Mittel |

### Emotionserkennung: Textuelle Signale

| Signal | Mögliche Bedeutung |
|--------|-------------------|
| Viele Ausrufezeichen | Aufregung (positiv oder negativ) |
| GROSSBUCHSTABEN | Frustration, Dringlichkeit |
| Kurze, abgehackte Sätze | Stress, Eile |
| Lange, verschachtelte Sätze | Zeit, Reflexion |
| Tippfehler | Eile oder emotionale Aufregung |
| Höflichkeitsfloskeln | Normalmodus, keine Krise |

**Ehrliche Einschränkung:** "Gestresst" vs. "in Eile" vs. "genervt" ist schwer zu unterscheiden. Das System muss mit Unsicherheit umgehen können.

---

## Praktisches Beispiel

**Anfrage:** "Reha nach Knie-OP"
**L2-Strategie:** Hohe Informationstiefe (Orientierung & Kontrolle)

| Nutzer A | Nutzer B |
|----------|----------|
| 📱 Mobil, kurze Session | 🖥️ Desktop, lange Session |
| Kurze Nachricht, Tippfehler | Ausführliche Frage, höflich |
| **L3:** Belastet, Quick-Scan | **L3:** Routine, Deep-Dive |

**Ergebnis Nutzer A:**
```
Reha nach Knie-OP
✓ Empfohlen: Stationär (3 Wo.)
[→ Antrag starten]
[Mehr erfahren]
```

**Ergebnis Nutzer B:**
```
Was Sie über die Reha nach Ihrer Knie-OP wissen sollten

Nach einer Knie-Operation folgt in der Regel eine 
Rehabilitation. Diese hilft Ihnen, die Beweglichkeit 
wiederzuerlangen und den Heilungsprozess zu unterstützen...

[Weiterlesen: Ablauf der Reha]
[Weiterlesen: Antrag stellen]
[Weiterlesen: Kosten und Zuzahlung]
```

Gleiche Intention, gleiche Fakten – andere Delivery.

---

## Offene Fragen

- **Privacy:** Wie viel Kontextauswertung ist ethisch vertretbar?
- **Transparenz:** Soll der Nutzer wissen, dass er "anders" behandelt wird?
- **Fehleinschätzung:** Was wenn L3 daneben liegt? (Nutzer ist nicht gestresst, nur knapp formuliert)
- **Override:** Soll der Nutzer L3 übersteuern können? ("Zeig mir alles auf einmal")
- **Persistenz:** Soll L3-Kontext über Sessions hinweg gespeichert werden?

---

## Implementierungshinweise

### Minimal Viable (Stufe 1)
- Nur Gerät (mobil/desktop) als Signal
- Zwei Templates: Kurz und Lang
- Keine Emotionserkennung

### LLM-gestützt (Stufe 2)
- Kontext als Parameter im Prompt übergeben
- LLM passt Ausgabe entsprechend an
- Beispiel: "Der Nutzer scheint gestresst und liest mobil. Halte die Antwort kurz, biete aber Vertiefung an."

### Adaptiv (Stufe 3)
- Implizites Feedback: Klickt der Nutzer "Mehr erfahren"? → Zu kurz
- Bricht der Nutzer ab? → Zu lang oder falsche Tonalität
- System lernt optimale Delivery pro Kontext

---

## Verknüpfungen

- [[02_KNOWLEDGE/AI-Shifts/Hyperpersonalisierung/_MOC]] – Zurück zur Übersicht
- [[Layer-2-Intent]] – Vorheriger Layer
- [[Implementierung]] – Technische Details

---

*Layer 3 macht den Unterschied zwischen "korrekt" und "hilfreich".*

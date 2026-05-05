---
title: Hyperpersonalisierung/Layer 2 Intent
type: concept
status: stable
created: 2026-01-27T00:00:00.000Z
updated: 2026-01-27T00:00:00.000Z
tags:
  - ai-shifts
  - personalization
  - framework
  - intent-recognition
sources:
  - 'self-authored:loschke:trend-research'
area: ai-shifts
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Layer 2: Intent

> "Was braucht dieses Bedürfnis?"

## Funktion

Erkennt das Grundbedürfnis hinter der Anfrage und leitet daraus die inhaltliche Strategie ab. Nicht die Worte zählen, sondern die Intention dahinter.

---

## Der Zweischritt

### Schritt 1: Intention erkennen

Was will der Mensch eigentlich? Nicht: "Was fragt er?" Sondern: "Was braucht er?"

### Schritt 2: Strategie ableiten

Aus der erkannten Intention folgen Steuerungsgrößen für den Inhalt.

---

## Intentionen (domänenspezifisch)

Die konkreten Intentionen sind kontextabhängig. Hier Beispiele:

### Gesundheit / Krankenkasse
| Intention | Typischer Trigger |
|-----------|-------------------|
| Sicherheit & Entlastung | Akute Angst, Überforderung |
| Orientierung & Kontrolle | Neue Diagnose, Unsicherheit |
| Pragmatismus | Kostenfrage, Admin-Kram |
| Qualität | Suche nach bester Option |
| Autonomie | Wunsch nach Selbstbestimmung |
| Fürsorge | Sorge um Angehörige |
| Selbstverwirklichung | Langfristige Gesundheitsziele |

### E-Commerce
| Intention | Typischer Trigger |
|-----------|-------------------|
| Inspiration | "Was gibt's so?" |
| Vergleich | "Welches ist besser?" |
| Transaktion | "Ich will kaufen" |
| Problem lösen | "Das funktioniert nicht" |

### Support
| Intention | Typischer Trigger |
|-----------|-------------------|
| Informieren | Wie funktioniert X? |
| Problem lösen | X geht nicht |
| Eskalieren | Ich will mit einem Menschen reden |
| Feedback | Das finde ich gut/schlecht |

---

## Strategieableitung

Aus der Intention folgen drei Steuerungsgrößen:

| Parameter | Beschreibung | Spektrum |
|-----------|--------------|----------|
| **Tonalität** | Emotionale Färbung | Beruhigend ↔ Neutral ↔ Enthusiastisch |
| **Informationstiefe** | Wie viel Kontext | Minimal ↔ Moderat ↔ Umfassend |
| **Proaktivität** | Wie aktiv vorausdenken | Reaktiv ↔ Moderat ↔ Antizipierend |

### Beispiel-Mapping (Gesundheit)

| Intention | Tonalität | Tiefe | Proaktivität |
|-----------|-----------|-------|--------------|
| Sicherheit & Entlastung | Beruhigend, empathisch | Minimal | Hoch |
| Orientierung & Kontrolle | Strukturiert, sachlich-warm | Hoch | Mittel |
| Pragmatismus | Direkt, effizient | Niedrig | Niedrig |

**Kernlogik:** Die Intention bestimmt die Strategie. Nicht umgekehrt.

---

## Intentionserkennung: Ansätze

| Ansatz | Wie | Pro | Con |
|--------|-----|-----|-----|
| **Explizit fragen** | "Was möchten Sie erreichen?" | Genau | Friction, Nutzer wissen es oft nicht |
| **Aus Journey ableiten** | Woher kommt der Nutzer? | Keine Frage nötig | Nur grobe Annäherung |
| **Aus Formulierung (NLP/LLM)** | Wortwahl analysieren | Kann sehr präzise sein | Braucht gute Prompts/Training |
| **Hybridansatz** | Hypothese → handeln → validieren | Balanciert | Komplexer zu bauen |

### LLM-basierte Erkennung

Mit modernen LLMs ist Intentionserkennung aus Text erstaunlich gut machbar:

**Beispiel-Prompt-Snippet:**
```
Analysiere die folgende Nutzeranfrage und bestimme die primäre Intention.
Mögliche Intentionen: [Liste]
Antworte nur mit der Intention und einem Confidence-Score (0-1).

Anfrage: "Muss ich das jetzt selbst bezahlen oder übernimmt das die Kasse?"
```

**Typische Erkennungssignale:**
- "Muss ich..." / "Kosten" → Pragmatismus
- "Ich mache mir Sorgen..." / "Angst" → Sicherheit
- "Wie läuft das ab?" / "Was passiert dann?" → Orientierung
- "Was ist das Beste?" / "Empfehlung" → Qualität

---

## Offene Fragen

- **Intention-Wechsel:** Was, wenn sich die Intention mitten im Gespräch ändert?
- **Mehrfach-Intentionen:** Was, wenn jemand gleichzeitig Orientierung UND Pragmatismus braucht?
- **Falsche Erkennung:** Wie korrigiert das System, wenn es daneben liegt?
- **Feedback-Loop:** Woher weiß ich, ob meine Erkennung stimmt?
- **Training:** Brauche ich domänenspezifische Trainingsdaten?

---

## Implementierungshinweise

### Minimal Viable (Stufe 1)
- 3-4 grobe Intentionskategorien
- Regelbasierte Erkennung ("enthält 'Kosten'" → Pragmatismus)
- Feste Strategie-Mappings

### LLM-gestützt (Stufe 2)
- Intention als Teil des System-Prompts erkennen lassen
- Strategie-Parameter als Output
- Confidence-Score mitliefern

### Adaptiv (Stufe 3)
- Hypothese → Handlung → implizites Feedback
- System lernt über Zeit
- A/B-Testing verschiedener Strategien

---

## Verknüpfungen

- [[02_KNOWLEDGE/AI-Shifts/Hyperpersonalisierung/_MOC]] – Zurück zur Übersicht
- [[Layer-1-Constraints]] – Vorheriger Layer
- [[Layer-3-Context]] – Nächster Layer
- [[Implementierung]] – Technische Details

---

*Layer 2 ist das Herzstück. Hier wird aus einer Anfrage ein Verständnis.*

---
title: KI-Agents Grundlagen
type: concept
status: stable
created: '2026-03-03'
updated: '2026-03-03'
tags:
  - ki-grundlagen
  - agents
  - agent-loop
  - autonomie
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
  - contrast
  - analogy
  - argument
  - method
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-04'
---
# KI-Agents Grundlagen

> Was Agents wirklich sind, wie sie funktionieren, was sie können – und was nicht. Die eigenständige Referenz zum dominanten KI-Thema 2025/2026.

---

## Das Problem

"Agent" ist das meistbenutzte und am wenigsten verstandene Wort in der KI-Diskussion. Für Marketing-Abteilungen sind Agents "KI, die alles alleine macht". Für Entwickler sind es Loop-Architekturen mit Tool-Aufrufen. Für Führungskräfte sind es entweder die Zukunft oder ein Risiko.

Die Wahrheit liegt dazwischen. Und genau deshalb braucht es eine klare Einordnung.

---

## Was ist ein Agent?

Ein Agent ist ein KI-System, das ein Ziel bekommt und eigenständig Schritte plant und ausführt, um dieses Ziel zu erreichen.

### Der Unterschied zu Chat

| | Chat | Agent |
|---|---|---|
| **Ablauf** | Frage → Antwort → Frage → Antwort | Ziel → Planung → Ausführung → Ergebnis |
| **Steuerung** | Du steuerst jeden Schritt | Du setzt das Ziel, der Agent wählt den Weg |
| **Werkzeuge** | Das Modell denkt und schreibt | Das Modell denkt, plant UND handelt (suchen, lesen, schreiben, Code ausführen) |
| **Prüfung** | Du prüfst jede Antwort | Du prüfst das Endergebnis |

### Die Praktikanten-Analogie

Ein Agent ist wie ein motivierter Praktikant:

- Er kann selbstständig recherchieren und einen Entwurf erstellen
- Er braucht klare Aufträge ("Erstelle eine Wettbewerbsanalyse für Markt X")
- Er kann Werkzeuge benutzen (Internet, Dateien, Tools)
- Er fragt manchmal nach, wenn er nicht weiterkommt
- Du prüfst das Ergebnis, bevor es rausgeht

Was er NICHT ist: Ein Mitarbeiter, dem du blind vertrauen kannst. Nicht, weil er schlecht ist. Sondern weil er manchmal Dinge misversteht, falsche Annahmen trifft oder in eine Sackgasse läuft.

---

## Wie funktioniert ein Agent?

### Der Agent-Loop

Jeder Agent folgt demselben Grundmuster:

```
1. ZIEL empfangen
   ↓
2. PLANEN: Welche Schritte sind nötig?
   ↓
3. HANDELN: Einen Schritt ausführen (Tool aufrufen)
   ↓
4. BEOBACHTEN: Was kam zurück?
   ↓
5. REFLEKTIEREN: Bin ich dem Ziel näher?
   ↓
   Wenn ja → Nächster Schritt (zurück zu 3)
   Wenn fertig → Ergebnis liefern
   Wenn Problem → Umplanen (zurück zu 2)
```

Das ist der sogenannte **ReAct-Loop** (Reason + Act). Das Modell wechselt zwischen Denken und Handeln.

### Was Agents als Werkzeuge nutzen

| Werkzeug-Typ | Beispiel | Was der Agent damit macht |
|--------------|---------|--------------------------|
| **Web-Suche** | Google, Perplexity | Informationen recherchieren |
| **Datei-Operationen** | Lesen, Schreiben, Erstellen | Dokumente verarbeiten |
| **Code-Ausführung** | Python, JavaScript | Berechnungen, Datenanalyse |
| **Browser** | Websites öffnen, navigieren | Informationen von Webseiten extrahieren |
| **APIs** | Kalender, CRM, E-Mail | Mit externen Systemen interagieren |
| **Andere Modelle** | Bildgenerierung, Sprachsynthese | Spezialisierte KI-Fähigkeiten nutzen |

Die Werkzeuge machen den Unterschied. Ein LLM ohne Werkzeuge kann nur Text generieren. Ein Agent mit Werkzeugen kann handeln.

---

## Arten von Agents

### Single Agent

Ein Modell mit Werkzeugen, das eine Aufgabe eigenständig abarbeitet.

**Beispiele:**
- Claude Code: Programmiert, testet, debuggt Code
- Perplexity: Recherchiert Informationen aus mehreren Quellen
- ChatGPT mit Browsing: Sucht, liest Webseiten, fasst zusammen

**Wann sinnvoll:** Klar definierte Aufgaben, die ein Werkzeugset abdecken kann.

### Multi-Agent-Systeme

Mehrere spezialisierte Agents, die zusammenarbeiten.

**Beispiel:** Ein Research-System
```
Koordinator-Agent
    ├── Recherche-Agent 1: Sucht akademische Quellen
    ├── Recherche-Agent 2: Sucht Praxis-Berichte
    ├── Analyse-Agent: Vergleicht und bewertet Quellen
    └── Schreib-Agent: Erstellt den Bericht
```

**Wann sinnvoll:** Komplexe Aufgaben, die verschiedene Expertise-Bereiche oder viele parallele Schritte erfordern.

**Warnung:** Multi-Agent-Systeme sind deutlich schwieriger zu kontrollieren. Fehler in Teilschritten können sich aufschaukeln. Für die meisten Anwendungen reicht ein Single Agent.

### Automatisierte Workflows (Agent-ähnlich)

Feste Abläufe, bei denen KI einzelne Schritte übernimmt. Nicht im engeren Sinn "Agents", aber oft so vermarktet.

**Beispiel:** E-Mail-Verarbeitung
```
E-Mail kommt rein (Trigger)
    → KI klassifiziert (Anfrage, Beschwerde, Spam)
    → KI extrahiert Kerndaten
    → KI erstellt Antwort-Entwurf
    → Mensch prüft und sendet
```

**Tools:** Make, n8n, Zapier mit KI-Schritten.

→ Siehe [[GenAI-Stack-Erklaermodell]] Ebene 4 für die Einordnung von Chat, Agent und Automatisierung.

---

## Was Agents gut können

| Stärke | Beispiel |
|--------|---------|
| **Mehrstufige Recherche** | "Finde die Top-5-Wettbewerber und vergleiche ihre Pricing-Modelle" |
| **Code-Projekte** | "Baue eine Landingpage mit Kontaktformular" |
| **Datenanalyse** | "Analysiere diese CSV, finde Muster, erstelle Visualisierungen" |
| **Dokumentenverarbeitung** | "Lies diese 10 PDFs und erstelle eine Zusammenfassung pro Dokument" |
| **Repetitive Aufgaben mit Variation** | "Schreibe 20 Produktbeschreibungen basierend auf diesen Spezifikationen" |

### Das gemeinsame Muster

Agents sind stark, wenn:
- Das Ziel klar definierbar ist
- Die Teilschritte validierbar sind
- Fehler auffallen und korrigierbar sind
- Die Aufgabe zu aufwändig für Chat wäre (zu viele Schritte)

---

## Was Agents (noch) nicht gut können

| Schwäche | Warum |
|----------|-------|
| **Vage Ziele** | "Mach unsere Website besser" – Agent braucht klare Kriterien |
| **Subjektive Qualität** | Geschmack, Markenpassung, politische Sensibilität |
| **Langfristige Planung** | Projekte über Tage/Wochen mit vielen Abhängigkeiten |
| **Fehler-Eskalation** | Ein Fehler in Schritt 3 kann alle folgenden Schritte ruinieren |
| **Echtwelt-Konsequenzen** | E-Mails senden, Geld überweisen, Daten löschen – ohne menschliche Freigabe gefährlich |

### Die Autonomie-Falle

Marketing verspricht: "KI, die selbstständig arbeitet."
Realität: Je autonomer der Agent, desto höher das Risiko.

**Faustregel:** Die Autonomie eines Agents sollte proportional zur Reversibilität seiner Aktionen sein.

| Aktion | Reversibel? | Agent-Autonomie |
|--------|-------------|-----------------|
| Dokument erstellen | Ja | Hoch (lass ihn machen) |
| E-Mail als Entwurf | Ja | Hoch (prüfen vor Senden) |
| E-Mail direkt senden | Nein | Niedrig (immer Freigabe) |
| Daten ändern/löschen | Schwer | Niedrig (immer Freigabe) |
| Geld transferieren | Nein | Keine (niemals automatisch) |

---

## Agents einordnen: Hype vs. Realität

### Was der Markt sagt (2025/2026)

"Agents werden Mitarbeiter ersetzen", "Autonome KI-Teams", "Jeder bekommt einen KI-Assistenten, der alles alleine erledigt."

### Was die Realität zeigt

- Agents funktionieren gut für definierte, wiederholbare Aufgaben
- Sie scheitern bei vagen Zielen und fehlendem Kontext
- Multi-Agent-Systeme sind technisch möglich, aber schwer kontrollierbar
- Die meisten "Agent-Produkte" am Markt sind Automatisierungs-Workflows mit KI-Schritten
- Der größte Wert liegt nicht in Autonomie, sondern in Augmentation: Menschen, die mit Agent-Unterstützung mehr schaffen

### Die nüchterne Einordnung

Agents sind ein echtes, wichtiges Konzept. Sie erweitern, was mit KI möglich ist, von "Frage-Antwort" zu "Aufgabe erledigen". Aber sie sind nicht die Revolution, als die sie vermarktet werden. Sie sind ein Werkzeug. Und wie jedes Werkzeug sind sie so gut wie die Person, die sie einsetzt.

---

## Für Führungskräfte: Drei Fragen

Wenn Ihr Team über Agents diskutiert:

1. **"Was genau soll der Agent tun?"** – Je konkreter die Antwort, desto realistischer das Vorhaben
2. **"Was passiert, wenn der Agent einen Fehler macht?"** – Wenn die Antwort "nichts Schlimmes" ist: grünes Licht. Wenn "Kundendaten falsch" oder "E-Mail an CEO": Freigabemechanismus einbauen
3. **"Wer prüft das Ergebnis?"** – Es braucht immer jemanden, der das Ergebnis verstehen und bewerten kann

---

## Verwendungshinweise

| Zielgruppe | Kernbotschaft | Analogie |
|------------|---------------|----------|
| Einsteiger | "Agents arbeiten Aufgaben ab, nicht nur Fragen" | Praktikant mit Werkzeugen |
| Fortgeschrittene | "Die Werkzeuge machen den Unterschied" | Handwerker mit Werkstatt vs. mit Händen |
| Führungskräfte | "Autonomie = Risiko. Augmentation = Hebel." | Autopilot: fliegt, aber Pilot prüft |
| Technik | "ReAct-Loop, Tool-Use, Context-Management" | Architektur-Entscheidung |

**Workshop-Demo:** Einen einfachen Agent-Task live zeigen. Zum Beispiel: "Recherchiere drei Wettbewerber und erstelle eine Vergleichstabelle." Dann zeigen: Wo der Agent gut ist (Recherche, Strukturierung) und wo er menschliche Prüfung braucht (Vollständigkeit, Richtigkeit).

---

## Verknüpfungen

- [[GenAI-Stack-Erklaermodell]] – Ebene 4: Agents als Arbeitsweise eingeordnet
- [[Context-Engineering-Grundlagen]] – Warum Agents guten Kontext brauchen
- [[Halluzinationen-und-Zuverlaessigkeit]] – Agents halluzinieren auch. Die Fehler eskalieren aber schneller.
- [[RAG]] – Agents + eigene Daten = informierte Agents
- [[Prompt-Engineering-Grundlagen]] – Agent-Instruktionen sind Prompts

---

*Grundlagen-Referenz für Einordnung, Workshops und Beratung zum Thema KI-Agents*

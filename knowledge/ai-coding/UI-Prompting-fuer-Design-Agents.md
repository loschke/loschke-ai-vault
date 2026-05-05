---
title: UI Prompting fuer Design Agents
type: framework
status: stable
created: '2026-03-26T00:00:00.000Z'
updated: '2026-03-26T00:00:00.000Z'
tags:
  - ai-coding
  - ui-design
  - prompting
  - best-practice
  - vibe-coding
sources:
  - 'self-authored:loschke:ai-coding-experience'
area: ai-coding
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---

# UI-Prompting für Design-Agents

## Kernprinzip

Vage Prompts erzeugen den statistischen Durchschnitt der Trainingsdaten. "Erstelle eine Finanz-App" liefert immer dasselbe: Hero-Sektion, zentrierte Headline, abgerundete Karten, weiche Schatten. Das ist kein Tool-Problem — es ist ein Steuerungsproblem.

Die Lösung: Prompts wie ein Projekt-Briefing strukturieren, nicht wie eine Suchanfrage.

---

## Die 5 Prompt-Komponenten

Jeder UI-Prompt braucht fünf Vektoren. Fehlt einer, interpoliert das Modell aus dem Durchschnitt.

### 1. Kontext (Wer? Warum?)

Zweck der App, Kernproblem, Zielgruppe. Je spezifischer die Zielgruppe, desto stärker die Design-Constraints, die das Modell automatisch aktiviert.

| Vage | Präzise |
|------|---------|
| "Mach eine Finanz-App für Handys." | "Entwirf einen mobilen Screen für eine Personal-Finance-App. Zielgruppe: junge Berufstätige, die ihre Ausgaben mehrfach täglich von unterwegs prüfen." |

> Tipp: "Medizinisches Fachpersonal in Notaufnahmen" → Modell priorisiert automatisch Kontrast, große Klickflächen, nüchterne Informationsdichte.

### 2. Beschreibung & Prioritäten (Was ist wichtig?)

Visuelle Hierarchie explizit machen. Was steht oben, was ist sekundär, was tertiär? Ohne Priorisierung bekommt alles gleiches Gewicht.

| Vage | Präzise |
|------|---------|
| "Zeige viele Zahlen und Diagramme." | "Primär: Große Typografie für heutige Gesamtausgaben. Sekundär: Top-Ausgabenkategorien. Tertiär: Kompakte Liste der letzten drei Transaktionen." |

> Effekt: Zwingt das Modell zu Progressive Disclosure — sekundäre Info in Accordions, Modals oder ausklappbare Bereiche.

### 3. Plattform & Constraints (Womit?)

Ohne explizite Angabe generiert die KI statische Desktop-Ansichten mit hartcodierten Breiten.

| Vage | Präzise |
|------|---------|
| "Soll auf dem Handy gut aussehen." | "Strikter Mobile-First-Ansatz. Tailwind-Breakpoints (sm, md, lg, xl, 2xl). React-Komponenten." |

### 4. Visueller Stil (Wie fühlt es sich an?)

"Modern" und "clean" sind bedeutungslos — sie beschreiben den Durchschnitt. Stattdessen: spezifisches Fachvokabular als Stimulus nutzen.

| Vage | Präzise |
|------|---------|
| "Mach es sauber und modern." | "Stark typografisch getriebenes Layout mit großzügigem Whitespace. Sanfte Schatten für Karten. Klarer Akzentfarbton für primäre CTAs." |

**Starke Stil-Stimuli:** Neumorphismus, Bento-Box-Layout, Japandi-Stil, Brutalismus, Glasmorphism. Jeder Term schränkt den visuellen Lösungsraum drastisch ein.

### 5. UI-Komponenten (Was genau, von oben nach unten?)

Hierarchische Top-to-Bottom-Auflistung im Sinne von Atomic Design (Atome → Moleküle → Organismen).

| Vage | Präzise |
|------|---------|
| "Füge Buttons, ein Menü und Text hinzu." | "1. Sticky Header mit App-Name. 2. Hero-Sektion für Saldo. 3. Horizontales Scroll-Menü für Kategorien. 4. Subtile Trennlinien zwischen Transaktionseinträgen." |

---

## Das DESIGNER-Framework

Checkliste gegen generische Outputs. Jeder Buchstabe ist eine Frage, die der Prompt beantworten muss.

| Buchstabe | Dimension | Leitfrage |
|-----------|-----------|-----------|
| **D** | Decision Context | Wer nutzt das? Welche Aufgabe löst er *jetzt*? |
| **E** | Environment & Constraints | Wo wird es genutzt? (Smartphone/Sonnenlicht? Desktop/Dark-Mode? Kiosk?) |
| **S** | Systems & Patterns | Welches Designsystem? (Material Design 3, Shadcn, eigenes System?) |
| **I** | Intent, Not Aesthetics | Was soll sich *anfühlen*? (reibungslos, sicher, beruhigend, dringlich?) |
| **G** | Guardrails | Was darf *nicht* passieren? (Explizite Ausschlüsse und Verbote) |
| **N** | Narrative | Wohin soll der Blick wandern? (Aufmerksamkeitsreihenfolge definieren) |
| **E** | Evaluation Criteria | Wann ist das Design erfolgreich? (Messbare Kriterien) |
| **R** | Refinement Loop | Erinnerung: Prompting ist Dialog, nicht Transaktion. |

### Guardrails — Beispiele

Negative Constraints sind oft wertvoller als positive Anweisungen:

- "Verstecke die Hauptnavigation niemals hinter einem Hamburger-Menü auf Desktop."
- "Keine roten Farbtöne für nicht-destruktive Aktionen."
- "Keine Auto-Play-Videos. Keine Cookie-Banner im Initial-Render."

### Narrative — Beispiel

> "Bei einem Fehler: Blick fällt zuerst auf rotes Warnsymbol → dann auf erklärenden Lösungsansatz → zuletzt auf Retry-Button."

### Evaluation Criteria — Beispiel

> "Erfolgreich, wenn ein Erstnutzer die primäre CTA innerhalb von 2 Sekunden visuell isolieren kann."

---

## Echte Inhalte statt Lorem Ipsum

Platzhaltertexte verschleiern strukturelle Schwächen. "Headline" als Platzhalter → Layout sieht perfekt aus. Realer dreizeiliger Titel → Karten überlappen, Buttons verschieben sich.

**Regel:** Immer echte oder realistische Daten mitliefern (JSON, strukturierter Text). Das zwingt das Modell zu robusten Layouts.

Nebeneffekt: Bei langen deutschen Komposita implementiert die KI automatisch `word-break` oder `text-overflow: ellipsis`, wenn der Prompt darauf hinweist.

---

## Interaktive Zustände explizit prompten

KI generiert standardmäßig statische Komponenten. Alles Dynamische muss angefordert werden.

### Micro-Interaktionen

> "Implementiere Hover-Effekte für alle CTAs. 200ms Transition. Beim Hover: leichte Y-Translation nach oben + verstärkter Schlagschatten für visuelles Lifting."

### Lade-Zustände

> "Vermeide Spinner. Generiere Skeleton-Screens mit pulsierenden Platzhaltern, die die finale Kartenstruktur widerspiegeln. Graceful Degradation bei Timeout: verständliche Fehlermeldung + prominenter Retry-Button."

### Formular-Validierung

> "Echtzeit-Validierung für alle Input-Felder. Ungültige E-Mail → rote Umrandung + Fehlermeldung direkt unter dem Feld, WCAG 2.1 AA konform."

---

## Fortgeschrittene Patterns

### Task Decomposition

Große UI-Aufgaben in 5–7 sequenzielle Schritte zerlegen lassen. Pro Schritt: Erfolgskriterien definieren. Erst weitergehen, wenn aktueller Schritt verifiziert ist.

> Überschneidung mit [[AI-Coding-Workflow-Best-Practices|AI-Coding Workflow Best Practices]] → "Specs vor Code" und "Kleine Chunks"

### Contextual Reasoning

KI vor der Generierung verschiedene Szenarien durchdenken lassen:

> "Bevor du renderst: Wenn Admin → Systemmetriken sichtbar. Wenn Gast → Interface extrem vereinfacht. Generiere eine React-Komponente, die beide Zustände handhabt."

### Few-Shot Prompting

Statt abstrakte Regeln zu formulieren: 2–3 konkrete Beispiele des gewünschten Outputs mitgeben. Senkt die Formatierungsfehlerquote drastisch.

### Persona-Prompting

> "Agiere als Senior UX/UI Architekt mit 10+ Jahren FinTech-Erfahrung. Fokus: WCAG 2.1 und Conversion-Rate-Optimierung. Analysiere dieses Wireframe durch diese Linse."

### Meta-Prompting (Reverse)

Nach erfolgreicher Debugging-Session:

> "Analysiere unsere letzten 15 Nachrichten. Welche Fehler haben wir initial gemacht, welche Korrekturen haben funktioniert? Erstelle daraus einen kompakten System-Prompt für das nächste Projekt."

---

## Multimodales Prompting (Sketch-to-Code)

Bilder übertragen Struktur und Proportionen. Text überträgt Logik, Absicht und Interaktivität. Beides zusammen reduziert Mehrdeutigkeit massiv.

**Drei Regeln:**

1. **Bilder nie unkommentiert hochladen.** Immer spezifizieren, was relevant ist und was ignoriert werden soll.
   > "Adaptiere die kompakte Zeilenhöhe und Filterleisten-Platzierung. Ignoriere Farben, Typo und Icons — nutze unser Design-System."

2. **Design-Tokens extrahieren lassen.** Wenn ein Bild primär einen Vibe definiert: KI anweisen, Primärfarben, Border-Radii, Schatten als Variablen zu extrahieren, bevor sie angewendet werden.

3. **Kombination Skizze + Text.** Skizze → grobe Block-Anordnung. Text → Typografie, Abstände, inhaltliche Bedeutung der Blöcke.

---

## Tool-Klassifizierung

Verschiedene Tool-Typen erfordern verschiedene Prompting-Strategien.

| Typ | Fokus | Prompting-Strategie | Beispiele |
|-----|-------|---------------------|-----------|
| **Komponenten-Generator** | Sauberer, modularer Code (React, Tailwind) | Technisch, isoliert, komponentenweise, DOM-Struktur | v0, Cursor, Claude Artifacts |
| **App-Builder** | Idee → lauffähiges Produkt inkl. Backend | Systemisch, Architektur, Datenmodelle, Knowledge Base nutzen | Bolt, Lovable, Replit Agent |
| **Visuelle Leinwand** | Ideation, Rapid Prototyping | Vibe-getrieben, multimodal, inkrementelle Mikro-Anpassungen | Stitch, Figma AI, Galileo |

---

## Prompt-Hebel: Fachbegriffe als Stimuli

Spezifische Terminologie aktiviert stärkere neuronale Pfade als umgangssprachliche Beschreibungen.

| Begriff | Effekt im Prompt |
|---------|-----------------|
| Progressive Disclosure | "Zeige initial nur 3 Datenpunkte, erweiterte Filter in zusammenklappbarem Menü." |
| Skeleton Loader | "Skeleton statt Spinner für async Queries, Largest Contentful Paint stabil halten." |
| Graceful Degradation | "Bei CDN-Ausfall: Fallback-Icon + Reload-Funktion." |
| Bento-Box UI | "Dashboard im Bento-Stil mit Gaps und border-radius: 24px." |
| Adaptive Interface | "Häufig genutzte Tools dynamisch in der Toolbar nach oben priorisieren." |
| Information Architecture | "Redundante Navigationsebenen konsolidieren." |
| Chain-of-Thought | "Erkläre deine Grid-Layout-Logik Schritt für Schritt, bevor du Code schreibst." |
| WCAG 2.1 AA | "Alle Farbkontraste müssen mathematisch dem AA-Standard entsprechen." |

---

## Kontext-Management bei langen Sessions

→ Siehe auch [[AI-Coding-Workflow-Best-Practices|AI-Coding Workflow Best Practices]] → Session-Management

Ergänzend für UI-Projekte: Eine **Knowledge Base / PRD** als referenzierbares Dokument anlegen mit:
- Projektziele + expliziter Out-of-Scope
- Tech-Stack (Framework, Styling, Component Library)
- Design-Tokens (Farben, Typo-Skala, Spacing-System)
- User Flows als Text

**Konditionierungs-Prompt bei Session-Start:**
> "Bevor du Code schreibst: Lies die angehängte Knowledge Base, verinnerliche die Frontend Guidelines und bestätige kurz dein Verständnis der Architektur und visuellen Regeln."

---

## Diff-Editing: Eine Änderung pro Iteration

Wenn ein Detail an einer Sektion nicht passt: **Nicht die ganze Seite neu generieren.** Non-deterministische Natur der KI ruiniert sonst zuvor perfekte Bereiche.

> "Ändere ausschließlich die Preistabelle zu einem dreispaltigen Layout. Alle anderen Sektionen bleiben unberührt. Bei Abhängigkeiten: warnen, nicht stillschweigend ändern."

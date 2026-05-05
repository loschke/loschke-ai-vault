---
title: Kompass — Technische Implementierung
type: guide
status: living
created: '2026-03-09'
updated: '2026-03-09'
tags:
  - ai-agents
sources:
  - 'self-authored:loschke:enterprise-ai-agents'
area: ai-agents
audience:
  - entwickler
  - konzepter
  - fuehrungskraft
level: intermediate
intent:
  - verstehen
  - anwenden
contains:
  - concept
  - argument
  - method
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Kompass — Technische Implementierung

> Wie die Verfassung konkret umgesetzt wird: Drei Schichten, die zusammenwirken. Nicht ein grosser System Prompt, sondern eine Architektur.

---

## Kernaussage

Die [[Kompass-Verfassung]] beschreibt das Was: Hard Constraints, Kernwerte, Pruefsteine. Aber eine Verfassung, die nur im System Prompt lebt, ist zu fragil fuer kritische Anwendungen. Ein LLM kann Anweisungen "vergessen", besonders bei langen Gespraechen, komplexen Anfragen oder emotionalem Druck.

Die zentrale Erkenntnis: **Je haerter der Constraint, desto weniger sollte er vom LLM allein abhaengen.**

Die Verfassung ist nicht ein Dokument, das ueberall identisch eingespielt wird. Sie ist ein Set von Prinzipien, das sich an drei technischen Schichten unterschiedlich materialisiert.

---

## Warum System Prompt allein nicht reicht

Das generierende LLM steht unter einem inheraenten Zielkonflikt: Es soll gleichzeitig maximal hilfreich sein UND Grenzen einhalten. "Sei hilfreich" und "Mach keine Zusagen" in einem einzigen Prompt ist genau die Regelkollision, die Werte-Arbeit loesen soll (siehe [[Verfassung-vs-Regelwerk]]).

Unter Druck (komplexe Frage, langer Gespraechsverlauf, emotionaler Nutzer) gewinnt meistens die Hilfsbereitschaft. Das LLM "vergisst" nicht die Regel — es gewichtet sie niedriger, weil der Helpful-Druck staerker ist.

---

## Die drei Schichten

### Schicht 1: System Prompt — Der Geist

Der System Prompt traegt den Geist der Verfassung: Kernwerte, Kommunikationshaltungen, Pruefsteine, und die grundlegenden Hard Constraints als zusaetzliche Absicherung.

**Was hier lebt:**
- Die fuenf Kernwerte (Fachliche Korrektheit, Ehrlichkeit, Echte Hilfsbereitschaft, Respekt, Fuersorge)
- Die drei Pruefsteine fuer Grenzfaelle (Kompetente-Beraterin-Test, Doppelzeitungs-Test, 1.000-Nutzer-Regel)
- Kommunikationshaltungen (Transparent mit Einordnung, Auf Augenhoehe, Sachlich nicht kalt)
- Hard Constraints als Redundanz (nicht als einzige Absicherung)

**Staerke:** Flexibel, kann Abwaegungen treffen, versteht Nuancen.
**Schwaeche:** Probabilistisch. Kein Prompt ist eine Garantie. Wirkt schwaecher bei langen Kontexten.

### Schicht 2: Metadaten auf Wissensbausteinen — Die Regeln pro Inhalt

Die Verfassung wirkt hier nicht als Prompt, sondern als Bestandteil des Context. Jeder Wissensbaustein traegt seine eigenen Kompass-Informationen ueber die Kontextdimension D4 (Regeln). Siehe [[Kontextdimensionen]].

**Was hier lebt:**
- Haftungshinweis-Pflicht pro Baustein (ja/nein, Formulierung)
- Rechtsgrundlage (welches Gesetz, welche Vorschrift)
- Zulaessige Nutzung (allgemeine Info vs. individuelle Beratung)
- Verweis-Pflicht (muss auf Fachberatung verwiesen werden?)

**Staerke:** Reist mit dem Inhalt mit. Egal welches Feature den Baustein laedt, die Regeln kommen automatisch. Wird von der Fachredaktion gepflegt, nicht von Entwicklern.
**Schwaeche:** Deckt nur regelbasierte Constraints ab, keine Abwaegungen.

**Entscheidender Vorteil:** Die Redaktion kontrolliert die Kompass-Wirkung pro Inhalt. Wenn sich eine Rechtsgrundlage aendert, aendert sich das Verhalten des Systems, ohne dass ein Entwickler den System Prompt anfassen muss.

### Schicht 3: Anwendungslogik — Der Filter

Technische Mechanismen ausserhalb des generierenden LLMs, die Hard Constraints durchsetzen. Das ist die Schicht, die verhindert, dass ein einzelner fehlgeleiteter LLM-Call zu einem kritischen Fehler fuehrt.

**Drei Stufen des Filters:**

**Stufe 1: Deterministische Checks (schnell, billig, vorhersagbar)**
- Regex und Pattern-Matching auf der generierten Antwort
- Erkennt offensichtliche Verstoesse: Betraege ohne Haftungshinweis, Formulierungen wie "Sie haben Anspruch auf" oder "Das steht Ihnen zu"
- Kostet keine Latenz, keine Tokens, 100% vorhersagbar
- Deckt ca. 60-70% der kritischen Faelle ab

**Stufe 2: LLM-as-Judge (praezise, guenstig, entkoppelt)**
- Ein separater, kleiner Modell-Call prueft die generierte Antwort gegen Hard Constraints
- NICHT dasselbe Modell im selben Call — sondern ein entkoppelter Pruef-Call
- Enger Scope: "Pruefe diese Antwort auf folgende 5 Constraints. Antworte mit PASS oder FAIL + Begruendung."
- Kein Zielkonflikt: Kein Helpful-Druck, kein Gespraechskontext, keine emotionale Dynamik
- Kosten: ~500-1000 Tokens Input, ~50 Tokens Output, Bruchteile eines Cents pro Anfrage
- Latenz: 200-500ms zusaetzlich

**Stufe 3: Fallback-Logik (was passiert bei FAIL)**
- Nicht einfach blockieren — das waere der uebervorsichtige Ansatz, den die Kernwerte ablehnen
- Option A: Antwort umschreiben lassen (gleicher Content, ohne problematischen Teil)
- Option B: Standardantwort fuer diesen Constraint-Typ ("Fuer eine verbindliche Auskunft wenden Sie sich bitte an Ihre persoenliche Beratung")
- Option C: Antwort ausliefern mit angefuegtem Disclaimer

---

## Zuordnungsmatrix: Was lebt wo?

| Kompass-Element | Schicht 1: System Prompt | Schicht 2: Metadaten | Schicht 3: Filter |
|---|---|---|---|
| Hard Constraints | Redundanz (Backup) | D4-Felder pro Baustein | Primaer — muss hier durchgesetzt werden |
| Kernwerte | Primaer — braucht Abwaegungsfaehigkeit | Implizit (Ton der Bausteine) | Nicht geeignet (zu nuanciert) |
| Pruefsteine | Primaer — nur LLM kann abwaegen | — | — |
| Haftungshinweise | Erwaehnt | Primaer — pro Baustein konfiguriert | Stufe 1: Check ob vorhanden |
| Notruf-Verweis | Erwaehnt | — | Primaer — deterministischer Trigger |
| Vertrauens-Hierarchie | Primaer | Implizit (Quellen-Validierung) | — |

---

## Designprinzip: Haerte bestimmt Schicht

Die Faustformel:

- **Nie verletzbar?** → Muss in Schicht 3 (Filter) leben. Redundant in Schicht 1.
- **Kontextabhaengig?** → Lebt in Schicht 2 (Metadaten). Reist mit dem Inhalt.
- **Braucht Abwaegung?** → Lebt in Schicht 1 (System Prompt). Nur das LLM kann nuanciert abwaegen.

Oder anders: Je hoeher die Konsequenz eines Verstosses, desto deterministischer muss die Durchsetzung sein.

---

## Konsequenzen fuer die Teamarbeit

| Rolle | Schicht | Verantwortung |
|---|---|---|
| Compliance / Fachbereich | Schicht 1 + 3 | Definiert Hard Constraints und Kernwerte |
| Fachredaktion | Schicht 2 | Pflegt D4-Felder (Regeln) pro Wissensbaustein |
| Konzeption / UX | Schicht 1 | Formuliert Kommunikationshaltungen und Pruefsteine |
| Entwicklung | Schicht 3 | Baut Filter-Pipeline (deterministische Checks + Judge-Call) |
| Prompt Engineering | Schicht 1 | Uebersetzt Werte und Constraints in wirksame Prompts |

---

## Verknuepfungen

- [[Kompass-Verfassung]] — Das Was: Werte, Constraints, Pruefsteine
- [[Verfassung-vs-Regelwerk]] — Warum Werte besser skalieren
- [[Assistenz-Architektur]] — Das Gesamtframework
- [[Kontextdimensionen]] — D4 (Regeln) als Kompass-Traeger in Bausteinen
- [[Gedaechtnis-Context-Engineering]] — Wie Metadaten in den Context gelangen

---

*Quelle: Eigene Beratungspraxis und Architektur-Arbeit, entwickelt 2025/2026*

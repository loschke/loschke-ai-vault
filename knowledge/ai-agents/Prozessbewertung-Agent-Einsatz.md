---
title: 'Prozessbewertung: Welcher KI-Einsatztyp passt?'
type: method
status: stable
created: '2026-04-08'
updated: '2026-04-08'
tags:
  - framework
  - prozessbewertung
  - agents
  - automatisierung
  - seminar-material
  - haufe
sources:
  - 'self-authored:loschke:enterprise-ai-agents'
area: ai-agents
audience:
  - fuehrungskraft
  - entscheider
  - praktiker
level: basic-to-advanced
intent:
  - entscheiden
  - bewerten
  - vermitteln
contains:
  - decision-aid
  - method
  - contrast
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Prozessbewertung: Welcher KI-Einsatztyp passt?

> Framework zur Einordnung von Unternehmensprozessen in drei KI-Einsatztypen. Hilft Entscheider:innen bei der Frage: Brauche ich einen agentischen Chatbot, eine KI-Automatisierung oder einen echten Agenten?

---

## Das Problem

"Wir wollen Agenten einsetzen" ist die häufigste Aussage in Strategiemeetings zu KI. Die Frage dahinter bleibt oft unbeantwortet: Für welchen Prozess? Und braucht dieser Prozess wirklich einen Agenten, oder reicht etwas Einfacheres?

Drei grundlegend verschiedene Ansätze werden am Markt oft unter "KI-Agent" vermarktet. Sie unterscheiden sich in Architektur, Kosten, Kontrollierbarkeit und Eignung. Dieses Framework hilft bei der Zuordnung.

---

## Die drei Einsatztypen

### Typ A: Agentischer Chatbot

**Was ist das?** Ein leistungsfähiges Sprachmodell mit Werkzeugen (Websuche, Dateiverarbeitung, Code-Ausführung), das im Dialog mit einem Menschen arbeitet. Der Mensch steuert, die KI liefert.

**Beispiele:** Claude mit MCP-Anbindungen, ChatGPT mit Plugins, Microsoft Copilot im Arbeitsalltag.

**Ablauf:** Mensch gibt Auftrag → KI führt aus (ggf. mit Tool-Nutzung) → Mensch prüft → nächster Auftrag.

**Kernmerkmal:** Der Mensch bleibt im Loop. Jeder Schritt ist eine bewusste Interaktion. Die KI plant nicht eigenständig über mehrere Schritte.

### Typ B: KI-Automatisierung

**Was ist das?** Ein vordefinierter Workflow, in dem KI einzelne Schritte übernimmt. Der Ablauf ist fest, die Entscheidungspunkte sind vorprogrammiert. Die KI bringt Sprachverständnis und Generierung in einen ansonsten regelbasierten Prozess.

**Beispiele:** Make/n8n-Workflow mit OpenAI-Node, Zapier mit AI Actions, Power Automate mit Azure OpenAI.

**Ablauf:** Trigger löst aus → fester Ablauf → KI verarbeitet an definierten Stellen → Ergebnis wird weitergeleitet.

**Kernmerkmal:** Der Workflow ist determiniert. Die KI trifft keine Entscheidungen über den Ablauf selbst. Sie klassifiziert, extrahiert, generiert oder transformiert innerhalb eines vorgegebenen Rahmens.

### Typ C: Echter Agent

**Was ist das?** Ein KI-System, das ein Ziel erhält und eigenständig plant, welche Schritte in welcher Reihenfolge nötig sind. Es wählt Werkzeuge, beobachtet Ergebnisse, passt den Plan an und iteriert, bis das Ziel erreicht ist.

**Beispiele:** Claude Code für Entwicklungsaufgaben, Devin, Custom-Agents mit LangGraph oder CrewAI, Salesforce Agentforce für Kundenprozesse.

**Ablauf:** Mensch setzt Ziel → Agent plant → Agent führt aus → Agent beobachtet → Agent passt an → Agent liefert Ergebnis.

**Kernmerkmal:** Der Agent bestimmt den Weg. Er kann umplanen, wenn etwas nicht funktioniert. Er arbeitet über mehrere Schritte hinweg ohne menschlichen Eingriff bei jedem Teilschritt.

---

## Vergleich auf einen Blick

| Dimension | Agentischer Chatbot | KI-Automatisierung | Echter Agent |
|---|---|---|---|
| **Wer steuert?** | Mensch steuert jeden Schritt | Workflow ist vordefiniert | Agent plant selbst |
| **Flexibilität** | Hoch (jede Aufgabe möglich) | Niedrig (nur der definierte Ablauf) | Hoch (passt sich an) |
| **Skalierung** | Schlecht (braucht Menschen) | Sehr gut (läuft ohne Menschen) | Mittel (braucht Monitoring) |
| **Fehlerverhalten** | Mensch fängt ab | Workflow bricht ab oder liefert Murks | Agent kann sich verfangen oder Fehler kaskadieren |
| **Setup-Aufwand** | Gering | Mittel (Workflow bauen) | Hoch (Architektur, Guardrails, Testing) |
| **Laufende Kosten** | Mensch-Zeit + API-Kosten | Workflow-Plattform + API-Kosten | API-Kosten (oft hoch durch viele Calls) + Monitoring |
| **Kontrolle** | Volle Kontrolle | Volle Kontrolle über den Ablauf | Kontrolle über Ziel und Guardrails, nicht über den Weg |
| **Nachvollziehbarkeit** | Hoch (Dialog sichtbar) | Hoch (Workflow-Logs) | Mittel bis schwer (viele Zwischenschritte) |

---

## Bewertungskriterien: Welcher Typ für welchen Prozess?

### Stufe 1: Grundvoraussetzungen (für jeden KI-Einsatz)

Bevor die Typ-Entscheidung kommt, muss der Prozess vier Grundkriterien erfüllen.

| Kriterium | Frage | Wenn Nein |
|---|---|---|
| **Wiederholbarkeit** | Tritt der Prozess regelmäßig auf? | Kein KI-Invest lohnt sich für Einmal-Aufgaben. Chat reicht. |
| **Datenqualität** | Sind die Eingangsdaten digital, strukturiert und zugänglich? | Erst Daten aufräumen, dann KI. |
| **Risikoakzeptanz** | Ist ein gelegentlicher Fehler tolerierbar? | Wenn nicht: Mensch muss immer prüfen → Typ A. |
| **ROI-Perspektive** | Rechtfertigt das Volumen oder der Wert den Aufwand? | Wenn der Prozess 2x pro Woche auftritt und 10 Minuten dauert, lohnt sich kein Agent-Projekt. |

### Stufe 2: Der Einsatztyp-Entscheider

Fünf Kriterien, die den passenden Einsatztyp bestimmen.

#### 1. Variabilität des Ablaufs

*Läuft der Prozess jedes Mal im Wesentlichen gleich ab, oder gibt es Abzweigungen, die Urteilsvermögen brauchen?*

| Ausprägung | Einsatztyp |
|---|---|
| Immer gleicher Ablauf, nur Inhalte variieren | → KI-Automatisierung |
| Grundablauf steht, aber Sonderfälle brauchen Einschätzung | → Agentischer Chatbot oder Automatisierung mit menschlicher Eskalation |
| Jeder Fall ist anders, Vorgehen muss situativ geplant werden | → Echter Agent oder Chatbot (je nach Volumenbedarf) |

**Beispiel:** Eingangsrechnungen klassifizieren und weiterleiten → immer gleich → Automatisierung. Kundenbeschwerden analysieren und Lösungsvorschlag entwickeln → jeder Fall anders → Agent oder Chatbot.

#### 2. Anzahl und Abhängigkeit der Schritte

*Wie viele Teilschritte hat der Prozess, und hängen spätere Schritte von früheren Ergebnissen ab?*

| Ausprägung | Einsatztyp |
|---|---|
| 1-2 Schritte, unabhängig voneinander | → KI-Automatisierung |
| 3-5 Schritte, lineare Abhängigkeit | → KI-Automatisierung oder Chatbot |
| 5+ Schritte mit bedingten Verzweigungen und Rückkopplungen | → Echter Agent |

**Beispiel:** E-Mail empfangen → klassifizieren → Antwort-Entwurf generieren = 3 lineare Schritte → Automatisierung. Wettbewerbsanalyse erstellen (recherchieren, vergleichen, bewerten, Lücken identifizieren, Empfehlung formulieren, Quellen prüfen) = viele abhängige Schritte → Agent.

#### 3. Interpretationsbedarf des Inputs

*Muss das System unstrukturierten, mehrdeutigen oder kontextabhängigen Input verstehen?*

| Ausprägung | Einsatztyp |
|---|---|
| Strukturierter Input (Formularfelder, CSV, definierte Formate) | → KI-Automatisierung |
| Semi-strukturiert (E-Mails, Dokumente mit bekanntem Aufbau) | → KI-Automatisierung mit LLM-Extraktion |
| Unstrukturiert und mehrdeutig (freie Anfragen, komplexe Dokumente, Gesprächsprotokolle) | → Chatbot oder Agent |

#### 4. Tool-Breite

*Über wie viele verschiedene Systeme muss der Prozess hinweg agieren?*

| Ausprägung | Einsatztyp |
|---|---|
| Ein System (z.B. nur E-Mail, nur CRM) | → KI-Automatisierung |
| 2-3 Systeme mit klaren Schnittstellen | → KI-Automatisierung (Make/n8n kann das) |
| 4+ Systeme oder Systeme ohne API | → Echter Agent (mit MCP oder Browser-Use) |

#### 5. Volumen vs. Individualität

*Wie oft tritt der Prozess auf und wie individuell muss die Bearbeitung sein?*

| Ausprägung | Einsatztyp |
|---|---|
| Hohes Volumen, geringe Individualität | → KI-Automatisierung |
| Mittleres Volumen, mittlere Individualität | → Automatisierung mit Eskalation an Chatbot |
| Niedriges Volumen, hohe Individualität | → Agentischer Chatbot |
| Hohes Volumen UND hohe Individualität | → Echter Agent (der einzige Typ, der beides kann) |

---

## Entscheidungsbaum (vereinfacht)

```
Tritt der Prozess regelmäßig auf und lohnt sich der Invest?
├── Nein → Kein Projekt. Bei Bedarf manuell per Chat lösen.
└── Ja
    ├── Läuft der Prozess jedes Mal im Wesentlichen gleich ab?
    │   ├── Ja → KI-AUTOMATISIERUNG (Make, n8n, Zapier)
    │   └── Nein
    │       ├── Hohes Volumen (täglich, viele Fälle)?
    │       │   ├── Ja → ECHTER AGENT
    │       │   └── Nein → AGENTISCHER CHATBOT
    │       └── Braucht es Planung über 5+ Schritte?
    │           ├── Ja → ECHTER AGENT
    │           └── Nein → AGENTISCHER CHATBOT
```

**Wichtig:** Dieser Baum vereinfacht. In der Praxis sind die Grenzen fließend. Viele gute Lösungen kombinieren Typen: Eine Automatisierung, die bei Sonderfällen an einen Chatbot eskaliert. Oder ein Agent, der Teilschritte an Automatisierungen delegiert.

---

## Quick-Assessment: 5 Fragen für das eigene Unternehmen

Für jeden Prozess, der als Agent-Kandidat diskutiert wird:

| # | Frage | Antwort notieren |
|---|---|---|
| 1 | **Was ist der Auslöser?** Wer oder was startet den Prozess? (E-Mail, Zeitplan, Ereignis, Anfrage) | |
| 2 | **Was sind die Schritte?** Welche Teilschritte werden ausgeführt, in welcher Reihenfolge, mit welchen Werkzeugen? | |
| 3 | **Wo wird entschieden?** An welchen Stellen braucht es Urteilsvermögen statt Regelanwendung? | |
| 4 | **Was passiert bei Fehlern?** Sind Fehler reversibel? Was kostet ein Fehler? | |
| 5 | **Wie oft und wie individuell?** Volumen pro Woche/Monat? Ist jeder Fall anders oder gleich? | |

Die Antworten auf diese fünf Fragen ergeben in der Regel ein klares Bild, welcher Einsatztyp passt.

---

## Typische Fehleinschätzungen

| Fehleinschätzung | Realität |
|---|---|
| "Wir brauchen einen Agenten für unsere E-Mail-Verarbeitung" | Meistens reicht eine KI-Automatisierung. E-Mail-Verarbeitung ist meist regelbasiert mit KI-Extraktion. |
| "Ein Chatbot reicht für unser Volumen" | Wenn 200 Fälle pro Tag kommen und jeder individuell ist, braucht es einen Agenten. Ein Chatbot skaliert nicht ohne Menschen. |
| "Automatisierung ist veraltet, Agenten sind die Zukunft" | Automatisierung ist für vorhersehbare Prozesse überlegen: billiger, kontrollierbarer, debuggbarer. Agenten sind für das, was Automatisierung nicht kann. |
| "Wir starten gleich mit einem Agenten" | Oft besser: Mit KI-Automatisierung starten, lernen, welche Sonderfälle auftreten, dann gezielt einen Agenten für die Sonderfälle bauen. |

---

## Reifegrad-Empfehlung

| Wo steht das Unternehmen? | Empfehlung |
|---|---|
| Noch kein KI-Einsatz | Agentische Chatbots für Power-User einführen. Lernen, welche Prozesse sich eignen. |
| Erste KI-Erfahrungen (ChatGPT, Copilot) | KI-Automatisierungen für 2-3 Hochvolumen-Prozesse bauen. Messbare Ergebnisse schaffen. |
| KI-Automatisierungen laufen | Echte Agenten für komplexe, individuelle Prozesse pilotieren. Monitoring-Infrastruktur aufbauen. |
| Agenten im Einsatz | Multi-Agent-Architekturen evaluieren. Governance und Evaluation systematisieren. |

---

## Für das Seminar: Interaktive Anwendung

**Übung (5-10 Minuten):**
Jede:r Teilnehmer:in wählt einen Prozess aus dem eigenen Unternehmen und beantwortet die 5 Quick-Assessment-Fragen. Dann Zuordnung zum Einsatztyp anhand des Entscheidungsbaums.

**Diskussion:** 2-3 Beispiele gemeinsam durchsprechen. Typische Diskussionspunkte:
- "Ist das wirklich ein Agent-Fall oder reicht Automatisierung?"
- "Wo ist die menschliche Prüfung nötig und wo nicht?"
- "Was ist der nächste konkrete Schritt?"

---

## Verknüpfungen

- [[KI-Agents-Grundlagen]] – Was Agents sind und wie der Agent-Loop funktioniert
- [[GenAI-Stack-Erklaermodell]] – Ebene 4: Chat, Agent, Automatisierung als Arbeitsweisen
- [[Agent-UseCases-nach-Einsatztyp]] – Konkrete Use Cases, gegliedert nach den drei Einsatztypen
- [[Dringlichkeits-Assessment]] – Wie schnell muss gehandelt werden?
- [[Halluzinationen-und-Zuverlaessigkeit]] – Risiko-Einschätzung für die Autonomie-Entscheidung

---

*Framework für Seminare, Beratung und strategische Workshops. Entwickelt für das Haufe-Seminar "KI-Agenten in der Praxis" (Juni 2026).*

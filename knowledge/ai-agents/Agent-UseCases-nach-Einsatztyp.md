---
title: Agent-Use-Cases nach Einsatztyp
type: reference
status: stable
created: '2026-04-08'
updated: '2026-04-08'
tags:
  - use-cases
  - agents
  - automatisierung
  - chatbot
  - praxis
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
  - bewerten
  - einordnen
  - vermitteln
contains:
  - tip
  - contrast
  - decision-aid
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Agent-Use-Cases nach Einsatztyp

> Konkrete Use Cases, gegliedert nach den drei Einsatztypen (Agentischer Chatbot, KI-Automatisierung, Echter Agent). Zeigt an realen Beispielen, wo welcher Ansatz passt und wo die Grenze zwischen "KI-unterstützt" und "echt agentisch" verläuft.

---

## Warum diese Sortierung?

Die meisten Use-Case-Sammlungen listen Anwendungsfälle nach Fachbereich auf (Marketing, HR, Support...). Das Problem: Dieselbe Aufgabe kann je nach Umsetzung Chatbot, Automatisierung oder Agent sein. "Kundenbeschwerden bearbeiten" kann bedeuten: ein Mensch nutzt Claude als Formulierungshilfe (Chatbot), ein n8n-Workflow klassifiziert und routet automatisch (Automatisierung), oder ein Agent analysiert die Beschwerde, recherchiert den Kundenhistorie, prüft Ansprüche und formuliert eine individuelle Lösung (Agent).

Die entscheidende Frage für Entscheider:innen ist nicht "Wo kann KI helfen?" (überall), sondern "Welcher Einsatztyp bringt den besten ROI für diesen konkreten Prozess?"

→ Siehe [[Prozessbewertung-Agent-Einsatz]] für das Bewertungsframework

---

## Typ A: Agentischer Chatbot — Mensch steuert, KI liefert

Einsatzprofil: Individuelle, wissensintensive Aufgaben mit niedrigem Volumen. Der Mensch bleibt Entscheider und Qualitätsprüfer bei jedem Schritt.

### Strategie & Management

| Use Case | Was passiert | Warum Chatbot und nicht mehr |
|---|---|---|
| **Entscheidungsvorlage erstellen** | Führungskraft gibt Kontext, KI strukturiert Pro/Contra, Risiken, Empfehlung | Jede Vorlage ist einmalig, Kontext kommt vom Menschen |
| **Wettbewerbsanalyse** | KI recherchiert mit Websuche, Mensch lenkt Fokus und prüft Quellen | Ergebnis braucht menschliches Urteil über Relevanz |
| **Strategische Szenarien durchspielen** | "Was passiert, wenn Wettbewerber X den Preis um 20% senkt?" als Denkpartner | Explorativ, kein wiederholbarer Prozess |

### Content & Kommunikation

| Use Case | Was passiert | Warum Chatbot und nicht mehr |
|---|---|---|
| **Texte erstellen und überarbeiten** | Blog-Posts, Reden, Reports im Dialog entwickeln | Kreativarbeit braucht menschliche Steuerung und Geschmack |
| **Schwierige E-Mails formulieren** | Führungskraft schildert Situation, KI liefert Formulierungsvorschläge | Einzelfälle, hohe Konsequenz, keine Automatisierung sinnvoll |
| **Präsentationen erstellen** | KI strukturiert und formuliert, Mensch steuert Narrativ | Strategische Kommunikation braucht menschliche Lenkung |

### Analyse & Recherche

| Use Case | Was passiert | Warum Chatbot und nicht mehr |
|---|---|---|
| **Verträge prüfen lassen** | Vertrag hochladen, KI identifiziert Risiken und ungewöhnliche Klauseln | Jeder Vertrag ist anders, rechtliche Prüfung bleibt beim Menschen |
| **Datenanalyse ad hoc** | CSV hochladen, KI erstellt Visualisierungen und findet Muster | Explorative Analyse, Fragen entstehen unterwegs |
| **Technologie-Scouting** | "Welche Low-Code-Plattformen für unser Use Case?" als geführte Recherche | Bewertung braucht Unternehmenskontext, den nur der Mensch kennt |

---

## Typ B: KI-Automatisierung — Fester Ablauf mit KI-Intelligenz

Einsatzprofil: Wiederkehrende Prozesse mit klarem Ablauf und hohem Volumen. Der Ablauf steht fest, die KI bringt Sprachverständnis in ansonsten regelbasierte Workflows.

### Dokumentenverarbeitung

| Use Case | Workflow | Warum Automatisierung reicht |
|---|---|---|
| **Rechnungseingang verarbeiten** | E-Mail empfangen → KI extrahiert Betrag, Datum, Lieferant → Daten ins ERP → Freigabe-Workflow | Immer derselbe Ablauf, KI nur für Extraktion |
| **Bewerbungen vorsortieren** | Bewerbung empfangen → KI extrahiert Qualifikationen → Matching gegen Anforderungsprofil → Scoring → Ergebnis an Recruiting | Regelbasiert, KI nur für Verständnis unstrukturierter Texte |
| **Verträge klassifizieren** | Dokument hochgeladen → KI erkennt Vertragstyp → Routing an zuständige Abteilung → Frist ins System | Klassifikation + Routing, kein Urteilsvermögen nötig |

### Kundenkommunikation

| Use Case | Workflow | Warum Automatisierung reicht |
|---|---|---|
| **E-Mail-Triage** | E-Mail empfangen → KI klassifiziert (Anfrage/Beschwerde/Spam) → Routing → ggf. Antwort-Entwurf | Kategorien stehen fest, KI klassifiziert und routet |
| **FAQ-Chatbot** | Kundenfrage → KI sucht in Knowledge Base → Standardantwort generieren | Kein Multi-Step, keine Planung, nur Retrieval + Formulierung |
| **Review-Monitoring** | Neue Bewertung auf Google/Trustpilot → KI analysiert Sentiment → Alert bei negativem Trend | Trigger → Analyse → Aktion, immer gleich |

### Daten & Reporting

| Use Case | Workflow | Warum Automatisierung reicht |
|---|---|---|
| **Wöchentliche Reports generieren** | Zeitplan-Trigger → Daten aus CRM/ERP ziehen → KI formuliert Zusammenfassung → Report an Stakeholder | Fester Ablauf, KI nur für Formulierung |
| **Social-Media-Monitoring** | Neue Mentions → KI kategorisiert und bewertet Relevanz → Dashboard-Update → Alert bei Eskalation | Regelbasierte Pipeline mit KI-Klassifikation |
| **Datenqualitäts-Checks** | Neuer Datensatz → KI prüft Plausibilität und Vollständigkeit → Flagging von Anomalien | Wiederkehrend, regelbasiert, hohes Volumen |

---

## Typ C: Echter Agent — KI plant und handelt eigenständig

Einsatzprofil: Komplexe Aufgaben, die situatives Planen über mehrere Schritte erfordern. Hohe Variabilität, Zugriff auf mehrere Systeme, Ergebnis nicht vorhersagbar. Hier liegt der Unterschied zu Automatisierung: Der Agent entscheidet selbst, welche Schritte in welcher Reihenfolge nötig sind.

### Warum "echt agentisch"?

Ein Use Case ist dann ein Agent-Fall, wenn mindestens zwei der folgenden Merkmale zutreffen:

1. **Planung nötig:** Der optimale Weg zum Ziel steht nicht vorab fest
2. **Iteration nötig:** Der Agent muss auf Zwischenergebnisse reagieren und ggf. umplanen
3. **Multi-Tool:** Zugriff auf 3+ verschiedene Systeme oder Datenquellen
4. **Urteil nötig:** Qualitative Bewertung von Zwischenergebnissen beeinflusst den nächsten Schritt

### Software-Entwicklung (heute am reifsten)

| Use Case | Was der Agent tut | Warum das ein Agent-Fall ist |
|---|---|---|
| **Feature implementieren** | Ticket lesen → Codebase verstehen → Plan erstellen → Code schreiben → Tests schreiben → Tests ausführen → Fehler fixen → PR erstellen | Plant eigenständig, iteriert bei Testfehlern, arbeitet über viele Dateien |
| **Bug analysieren und fixen** | Fehlerbericht lesen → Logs durchsuchen → Hypothese bilden → Code lokalisieren → Fix implementieren → Regression testen | Diagnoseprozess ist bei jedem Bug anders |
| **Code-Review mit Kontext** | PR lesen → Architektur-Patterns der Codebase verstehen → Konsistenz prüfen → qualitatives Feedback geben | Braucht Verständnis des Gesamtkontexts, nicht nur Regelprüfung |

**Reifegrad:** Hoch. Claude Code, Cursor, Devin sind produktiv im Einsatz. Dies ist der am weitesten fortgeschrittene Agent-Bereich.

### Kundenservice & Support (stark wachsend)

| Use Case | Was der Agent tut | Warum das ein Agent-Fall ist |
|---|---|---|
| **Komplexe Kundenanfrage lösen** | Anfrage verstehen → Kundenhistorie im CRM prüfen → Vertragsbedingungen nachschlagen → Berechtigung prüfen → individuelle Lösung formulieren → ggf. Eskalation | Jeder Fall anders, mehrere Systeme, qualitative Entscheidung über Lösung |
| **Reklamation End-to-End bearbeiten** | Beschwerde analysieren → Bestellhistorie prüfen → Lieferstatus im Logistics-System checken → Kulanzentscheidung nach Regelwerk → Antwort formulieren → Ticket aktualisieren | 5+ Systeme, bedingte Verzweigungen, nicht vorhersehbarer Ablauf |
| **Technischer Support L1/L2** | Problem beschrieben → Knowledge Base durchsuchen → Diagnose-Schritte planen → Kunde durch Lösung führen → bei Misserfolg eskalieren mit Kontext | Agent muss Rückfragen stellen und auf Antworten reagieren |

**Reifegrad:** Mittel. Salesforce Agentforce, Zendesk AI Agents, Intercom Fin sind in Produktion. Funktioniert gut für abgrenzbare Domänen mit guter Wissensbasis.

### Research & Due Diligence

| Use Case | Was der Agent tut | Warum das ein Agent-Fall ist |
|---|---|---|
| **Markt- und Wettbewerbsanalyse** | Briefing lesen → Quellen identifizieren → Web durchsuchen → Daten extrahieren → vergleichen → Bericht strukturieren → Quellen prüfen | Forschungsprozess ist bei jedem Thema anders |
| **Lieferanten-Due-Diligence** | Firma recherchieren → Handelsregister prüfen → Finanzdaten suchen → Presse-Screening → Risikobewertung → Report | Multi-Source-Recherche mit qualitativer Bewertung |
| **Regulatorische Analyse** | Neue Verordnung lesen → relevante Paragraphen identifizieren → Impact auf eigenes Geschäft bewerten → Handlungsempfehlungen ableiten | Interpretation und Kontextanwendung, kein Standardablauf |

**Reifegrad:** Mittel. Perplexity, spezialisierte Research-Agents (z.B. für Finanzbranche). Funktioniert, braucht aber menschliche Validierung.

### Operations & Back-Office

| Use Case | Was der Agent tut | Warum das ein Agent-Fall ist |
|---|---|---|
| **Incident-Response IT** | Alert empfangen → Logs analysieren → Root Cause eingrenzen → Playbook auswählen → erste Maßnahmen einleiten → Eskalation bei Bedarf | Jeder Incident ist anders, Diagnosepfad variiert |
| **Procurement-Orchestrierung** | Bedarf erkannt → Lieferantenvergleich → Konditionen prüfen → Genehmigung einholen → Bestellung auslösen | Multi-System, bedingte Logik, variable Abläufe |
| **Compliance-Monitoring** | Neue Transaktion → gegen Regelwerk prüfen → bei Auffälligkeit: Kontext recherchieren → Risikobewertung → Eskalation oder Freigabe | Regelbasiert PLUS kontextuelle Interpretation |

**Reifegrad:** Früh bis mittel. Meist Custom-Builds oder Plattformlösungen (ServiceNow, Microsoft Copilot Studio). IT-Operations am reifsten, Procurement noch experimentell.

---

## Grenzfälle: Wo die Typen verschwimmen

Die spannendsten Lösungen in der Praxis sind Hybride.

| Muster | Wie es funktioniert | Beispiel |
|---|---|---|
| **Automatisierung + Chatbot-Eskalation** | Workflow läuft automatisch, bei Sonderfällen wird an einen Menschen mit Chatbot-Unterstützung eskaliert | E-Mail-Triage: 80% automatisch, 20% landen beim Mitarbeiter mit KI-Entwurf |
| **Agent mit Automatisierungs-Unterketten** | Agent plant den Gesamtablauf, delegiert Teilschritte an feste Workflows | Research-Agent triggert einen n8n-Workflow für die Datenextraktion |
| **Chatbot als Agent-Interface** | Mensch interagiert mit Chatbot, der im Hintergrund Agent-Fähigkeiten nutzt | Copilot in Teams: Sieht aus wie Chat, nutzt aber Tool-Calls und Multi-Step-Planung |

---

## Branchen-Schwerpunkte (Stand 2026)

Wo Agents bereits am häufigsten produktiv eingesetzt werden:

| Branche | Häufigste Agent-Use-Cases | Reifegrad |
|---|---|---|
| **Software / Tech** | Code-Generierung, Testing, DevOps-Automation | Hoch |
| **Finanzdienstleistungen** | Kundenservice, Compliance, Dokumentenanalyse | Mittel-Hoch |
| **Retail / E-Commerce** | Kundenservice, Produktempfehlungen, Bestellmanagement | Mittel |
| **Gesundheitswesen** | Research, Dokumentation, administrative Prozesse | Mittel |
| **Professional Services** | Research, Due Diligence, Dokumentenerstellung | Mittel |
| **Fertigung / Logistik** | Supply Chain, Qualitätskontrolle, Wartungsplanung | Früh-Mittel |

Laut aktuellen Erhebungen (G2, Deloitte, PwC) liegt der Schwerpunkt produktiver Deployments auf dem, was wenig glamourös klingt: Dokumentenverarbeitung, Datenabgleich, Compliance-Prüfung, Rechnungsbearbeitung. Die hochautomatisierten Customer-Facing-Agents bekommen die Schlagzeilen, aber die Back-Office-Agents liefern den höchsten ROI.

---

## Für das Seminar: Einordnungs-Übung

**Demo-Idee:** Drei Beispiel-Prozesse zeigen und gemeinsam einordnen:

1. **"Eingangsrechnungen verarbeiten"** → Typisch: Automatisierung. Fester Ablauf, KI für Extraktion.
2. **"Kundenbeschwerden beantworten"** → Kommt drauf an: Einfache Beschwerden → Automatisierung. Komplexe Fälle mit Kulanzentscheidung → Agent.
3. **"Wettbewerbsanalyse erstellen"** → Wenn einmalig: Chatbot. Wenn regelmäßig mit festem Format: Agent.

Die Diskussion "Kommt drauf an" ist der Lerneffekt. Nicht der Typ ist die Antwort, sondern die Bewertung entlang der Kriterien aus [[Prozessbewertung-Agent-Einsatz]].

---

## Verknüpfungen

- [[Prozessbewertung-Agent-Einsatz]] – Das Bewertungsframework: Welcher Typ für welchen Prozess
- [[KI-Agents-Grundlagen]] – Was Agents sind, Agent-Loop, Autonomie-Falle
- [[GenAI-Stack-Erklaermodell]] – Ebene 4: Die drei Arbeitsweisen eingeordnet
- [[KI-UseCases-Fachbereiche]] – Allgemeine KI-Use-Cases nach Fachbereich (nicht Agent-spezifisch)

---

*Use-Case-Referenz für das Haufe-Seminar "KI-Agenten in der Praxis" (Juni 2026). Basiert auf Marktrecherche und eigener Beratungserfahrung.*

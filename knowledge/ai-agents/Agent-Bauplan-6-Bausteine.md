---
title: 'Agent-Bauplan: Die 6 Bausteine eines guten Agenten'
type: framework
status: stable
created: '2026-04-09'
updated: '2026-04-09'
tags:
  - agents
  - architektur
  - bauplan
  - guardrails
  - grounding
  - human-in-the-loop
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
  - verstehen
  - bewerten
  - vermitteln
contains:
  - framework
  - decision-aid
  - contrast
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Agent-Bauplan: Die 6 Bausteine eines guten Agenten

> Was einen funktionierenden Agenten von einem Chatbot mit Marketing-Label unterscheidet. Sechs Bausteine, die Entscheider:innen kennen müssen — jeweils mit der Konsequenz, wenn sie fehlen.

---

## Das Problem

Jeder Vendor zeigt "unseren KI-Agenten". Die Demos sehen immer gut aus. Aber was steckt drinnen? Ohne ein Verständnis der Bausteine kann niemand bewerten, ob ein Agent-Produkt für den eigenen Einsatz taugt — oder ob es ein Chatbot mit neuem Etikett ist.

Diese sechs Bausteine sind keine Technik-Details. Sie sind Entscheidungskriterien.

---

## Die 6 Bausteine

### 1. Gedächtnis

**Was es tut:** Der Agent erinnert sich an relevanten Kontext — aus der aktuellen Aufgabe, aus früheren Interaktionen, aus dem Unternehmenskontext.

**Drei Typen:**

| Typ | Reichweite | Beispiel |
|---|---|---|
| **Kurzzeit** (Context Window) | Aktuelle Konversation/Aufgabe | Agent weiß, was in den letzten 10 Nachrichten besprochen wurde |
| **Sitzungs-übergreifend** (Memory) | Über Gespräche hinweg | Agent erinnert sich an Präferenzen und frühere Entscheidungen |
| **Externes Wissen** (RAG/Datenbank) | Gesamtes Organisationswissen | Agent greift auf Policies, Produktdaten, Kundenhistorie zu |

**Wenn es fehlt:** Der Agent vergisst nach jedem Gespräch alles. Man muss immer wieder bei Null anfangen. Kein Lerneffekt, keine Personalisierung, kein aufgebauter Kontext.

**Die Entscheider-Frage:** "Weiß der Agent morgen noch, was er heute gelernt hat? Und wessen Wissen nutzt er — das des Internets oder unseres?"

---

### 2. Datenzugriff (MCP / APIs / Integrationen)

**Was es tut:** Der Agent kann auf externe Systeme zugreifen — Daten lesen, Aktionen auslösen, Informationen abrufen.

**Zugriffsarten:**

| Art | Was der Agent kann | Beispiel |
|---|---|---|
| **Lesen** | Daten aus Systemen abrufen | Kundendaten aus CRM lesen, Kalender prüfen |
| **Schreiben** | Daten in Systeme eintragen | Ticket erstellen, Termin anlegen, Datensatz aktualisieren |
| **Suchen** | Relevante Informationen finden | Wissensdatenbank durchsuchen, E-Mails filtern |

**Schlüsselkonzept — MCP (Model Context Protocol):** Ein standardisiertes Protokoll, das KI-Modellen Zugriff auf externe Datenquellen und Tools gibt. Statt für jedes System eine eigene Integration zu bauen, bietet MCP einen einheitlichen Rahmen. Wie USB für Peripheriegeräte — ein Stecker, viele Geräte.

**Wenn es fehlt:** Der Agent ist blind. Er kennt weder eure Kunden, noch eure Produkte, noch eure Prozesse. Er kann nur mit dem arbeiten, was man ihm in den Chat kopiert. Das ist kein Agent, das ist ein Chatbot.

**Die Entscheider-Frage:** "Auf welche unserer Systeme kann der Agent zugreifen? Und vor allem: auf welche *nicht* — und ist das Absicht?"

---

### 3. Skills / Workflow-Wissen

**Was es tut:** Der Agent kennt definierte Abläufe, Vorlagen und Arbeitsanweisungen. Er improvisiert nicht, sondern folgt erprobten Rezepten.

**Beispiele:**

| Skill | Was der Agent damit macht |
|---|---|
| Recherche-Skill | Definierte Quellen in definierter Reihenfolge durchsuchen, Ergebnisse nach Schema strukturieren |
| Content-Skill | Brand-Tonalität laden, Zielgruppe beachten, Format-Vorgaben einhalten |
| Analyse-Skill | Daten nach definierten Kriterien bewerten, Visualisierung nach Vorlage erstellen |
| Eskalations-Skill | Bei Unsicherheit nach Regelwerk entscheiden: selbst lösen oder an Mensch übergeben |

**Wenn es fehlt:** Der Agent improvisiert bei jeder Aufgabe. Die Ergebnisse sind inkonsistent — mal gut, mal schlecht, nie vorhersagbar. Keine Qualitätssicherung möglich, weil kein definierter Prozess dahinter steht.

**Die Entscheider-Frage:** "Arbeitet der Agent nach unseren Prozessen — oder erfindet er jedes Mal einen neuen?"

---

### 4. Leitplanken (Boundaries / Guardrails)

**Was es tut:** Regeln, die definieren, was der Agent darf, was er nicht darf und wo er stoppen muss.

**Drei Ebenen:**

| Ebene | Was sie regelt | Beispiel |
|---|---|---|
| **Inhaltlich** | Worüber der Agent sprechen/entscheiden darf | "Keine Aussagen zu rechtlichen Ansprüchen" |
| **Aktionsbezogen** | Welche Handlungen der Agent ausführen darf | "Darf Entwürfe erstellen, aber nicht senden" |
| **Eskalation** | Wann der Agent an einen Menschen übergibt | "Bei Beschwerden über 10.000€ Streitwert immer eskalieren" |

**Wenn es fehlt:** Der Agent tut, was er für richtig hält. Das kann harmlos sein (falsche Tonalität) oder katastrophal (vertrauliche Daten weitergeben, Zusagen machen, die das Unternehmen binden). Je autonomer der Agent, desto kritischer sind Leitplanken.

**Die Entscheider-Frage:** "Was ist das Schlimmste, das der Agent tun könnte — und haben wir das verhindert?"

→ Vergleiche [[Verfassung-vs-Regelwerk]]: Warum Werte besser skalieren als Wenn-Dann-Regeln.

---

### 5. Grounding (Verankerung in verifiziertem Wissen)

**Was es tut:** Der Agent stützt seine Aussagen auf verifizierte, bereitgestellte Quellen — statt aus seinem Trainingsmaterial zu "raten".

**Der Unterschied:**

| Ohne Grounding | Mit Grounding |
|---|---|
| Agent antwortet aus seinem allgemeinen "Wissen" | Agent sucht erst in bereitgestellten Quellen |
| Plausibel, aber potenziell falsch oder veraltet | Nachvollziehbar, quellengestützt |
| Keine Quellenangabe möglich | Kann auf Originaldokument verweisen |

**Technische Umsetzung:** RAG (Retrieval Augmented Generation) ist die häufigste Form von Grounding. Der Agent sucht vor dem Antworten in einer Wissensdatenbank und nutzt die gefundenen Stellen als Basis.

**Wenn es fehlt:** Halluzinationen. Der Agent klingt überzeugend, erfindet aber Fakten, Quellen, Zahlen. Das Risiko steigt mit der Spezifität der Frage und der Nische des Themas.

**Die Entscheider-Frage:** "Erfindet der Agent — oder arbeitet er mit unseren verifizierten Quellen?"

→ Siehe [[Halluzinationen-und-Zuverlaessigkeit]] für Risiko-Einordnung und Mitigationsstrategien.
→ Siehe [[RAG]] für technische Details.

---

### 6. Human-in-the-Loop (Menschliche Prüfung)

**Was es tut:** An definierten Stellen im Prozess prüft ein Mensch das Ergebnis, bevor es weitergeht.

**Drei Modelle:**

| Modell | Wie es funktioniert | Wann sinnvoll |
|---|---|---|
| **Am Ende** | Agent arbeitet, Mensch prüft Endergebnis | Dokumente, Analysen, Entwürfe |
| **An Entscheidungspunkten** | Agent arbeitet bis zu einer kritischen Entscheidung, pausiert, Mensch entscheidet | Genehmigungen, Eskalationen, Kundenkontakt |
| **Stichproben** | Agent arbeitet autonom, Mensch prüft zufällige Auswahl | Hochvolumen-Prozesse mit niedrigem Einzelrisiko |

**Wenn es fehlt:** Blind Trust. Der Agent kann Fehler machen, die niemand bemerkt — bis ein Kunde sich beschwert, ein Vertrag falsch formuliert ist oder eine Compliance-Verletzung auffliegt.

**Die Faustregel:** Die Autonomie eines Agenten sollte proportional zur Reversibilität seiner Aktionen sein.

| Aktion | Reversibel? | Empfohlenes Modell |
|---|---|---|
| Dokument erstellen | Ja | Am Ende prüfen |
| E-Mail als Entwurf | Ja | Am Ende prüfen |
| E-Mail senden | Nein | An Entscheidungspunkt |
| Daten ändern | Schwer | An Entscheidungspunkt |
| Finanztransaktion | Nein | Immer menschliche Freigabe |

**Die Entscheider-Frage:** "An welchen Stellen muss ein Mensch freigeben — und können wir das sicherstellen?"

---

## Zusammenspiel: Der Agent als System

```
Nutzer gibt Ziel
     ↓
[Leitplanken] → Darf der Agent das? → Wenn nein: ablehnen/eskalieren
     ↓
[Skills] → Welcher Ablauf passt? → Rezept laden
     ↓
[Datenzugriff] → Welche Systeme brauche ich? → MCP/APIs ansprechen
     ↓
[Grounding] → Was sagen unsere Quellen? → RAG/Wissensdatenbank
     ↓
[Gedächtnis] → Was weiß ich schon? → Kontext aus früheren Interaktionen
     ↓
Agent führt aus → Zwischenergebnis
     ↓
[Human-in-the-Loop] → Prüfpunkt erreicht? → Wenn ja: Mensch entscheidet
     ↓
Ergebnis
```

Kein Baustein funktioniert allein. Ein Agent mit perfektem Datenzugriff aber ohne Leitplanken ist gefährlich. Ein Agent mit Leitplanken aber ohne Grounding halluziniert höflich. Ein Agent mit allem aber ohne Human-in-the-Loop ist ein Risiko.

---

## Checkliste: Vendor-Pitch bewerten

Wenn ein Anbieter "unseren KI-Agenten" vorstellt, diese 6 Fragen stellen:

| # | Frage | Rote Flagge |
|---|---|---|
| 1 | Welches Gedächtnis hat der Agent? | "Alles läuft im Chat" → kein echtes Gedächtnis |
| 2 | Wie greift er auf unsere Systeme zu? | "Wir brauchen einen Daten-Export" → keine echte Integration |
| 3 | Kann ich eigene Workflows definieren? | "Das macht unsere KI automatisch" → keine Skills, nur Improvisation |
| 4 | Was darf der Agent nicht? | Keine klare Antwort → keine Leitplanken |
| 5 | Woher kommt das Wissen für Antworten? | "Aus dem Training des Modells" → kein Grounding |
| 6 | Wo ist der Mensch im Prozess? | "Komplett autonom" → kein Human-in-the-Loop |

---

## Verknüpfungen

- [[KI-Agents-Grundlagen]] – Agent-Definition, Agent-Loop, Autonomie-Falle
- [[Assistenz-Architektur]] – Die 4 Elemente (Sensor, Gedächtnis, Kompass, Stimme) als Architektur-Framework
- [[Prozessbewertung-Agent-Einsatz]] – Welcher Einsatztyp für welchen Prozess
- [[Halluzinationen-und-Zuverlaessigkeit]] – Warum Grounding entscheidend ist
- [[RAG]] – Technische Umsetzung von Grounding
- [[Verfassung-vs-Regelwerk]] – Warum Leitplanken als Werte besser skalieren als Regeln

---

*Referenz für Seminare, Beratung und Vendor-Evaluation. Entwickelt für das Haufe-Seminar "KI-Agenten in der Praxis" (Juni 2026).*

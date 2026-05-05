---
title: Teil 1 — Was ist ein Agent?
type: guide
status: draft
created: '2026-04-28'
updated: '2026-04-28'
tags:
  - agents
  - leitfaden
  - ultimate-leitfaden
  - grundlagen
  - workflow-vs-agent
  - agenten-typen
sources:
  - 'self-authored:loschke:enterprise-ai-agents'
area: ai-agents
audience:
  - fuehrungskraft
  - entscheider
  - praktiker
  - konzepter
level: basic
intent:
  - verstehen
  - einordnen
  - bewerten
contains:
  - concept
  - framework
  - argument
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Teil 1 — Was ist ein Agent?

*Status: 1.1 ✅ · 1.2 ✅ · 1.3 🟡*

---

Bevor wir das Modell aufbauen, drei Vorklärungen: Was unterscheidet einen Agenten von dem, was wir vorher schon hatten? Welche Typen behandeln wir? Und wann lohnt sich der Aufwand überhaupt?

---

## 1.1 Vom Tool zum Agent — drei Stufen

Der Begriff *Agent* wird gerade inflationär verwendet. Vieles, was so heißt, ist keiner. Es lohnt sich, drei Stufen sauber auseinanderzuhalten.

| Stufe | Was es ist | Beispiel aus der Pflege-Domäne |
|-------|------------|--------------------------------|
| **Tool** | Eine Funktion, die genau eine Sache tut | Ein Pflegegradrechner: Eingaben rein, Pflegegrad raus |
| **Workflow** | Ein definierter Pfad mehrerer Schritte | Antrag eingehen → Vollständigkeit prüfen → Pflegegradrechner aufrufen → Ergebnis in Akte ablegen |
| **Agent** | Bekommt ein Ziel, entscheidet den Pfad selbst | „Klär die Anspruchssituation für diesen Antrag" — der Agent entscheidet, welche Daten er holt, welche Tools er nutzt, wann er fertig ist |

Der entscheidende Unterschied liegt zwischen Workflow und Agent. Ein Workflow hat einen vordefinierten Pfad. Schritt 1 immer vor Schritt 2. Verzweigungen sind möglich, aber alle Verzweigungen sind vorgedacht. Ein Agent hat das nicht. Er bekommt ein Ziel, schaut sich an, was er hat und was er braucht, und entscheidet während der Bearbeitung, was er als nächstes tut.

Das klingt nach einem feinen Unterschied. Er ist es nicht.

Ein Workflow ist deterministisch im Aufbau: Du kannst ihn aufzeichnen, bevor du ihn baust. Ein Agent ist es nicht. Sein Pfad entsteht erst zur Laufzeit. Das hat Vorteile (Flexibilität, Umgang mit Unbekanntem) und Nachteile (schwerer testbar, schwerer erklärbar, schwerer zu garantieren).

**Zwischenfrage, die schon hier wichtig ist:** *Reicht ein Workflow?* Wenn ja — Workflow nehmen. Workflows sind einfacher, billiger und zuverlässiger. Agenten sind dort sinnvoll, wo der Pfad sich nicht vorab vollständig beschreiben lässt. Mehr dazu in 1.3 und in [[09_wann-lohnt-sich-was]].

## 1.2 Drei Typen, die wir behandeln

Agent ist nicht gleich Agent. Drei Typen unterscheiden sich darin, *wer auslöst* und *wer zur Laufzeit interagiert*.

| Typ | Wer löst aus | Wer interagiert zur Laufzeit | Beispiel aus der Pflege-Domäne |
|-----|--------------|------------------------------|--------------------------------|
| **Agentischer Assistent** | Mensch (Frage, Anliegen) | Mensch im Dialog | Versicherter fragt nach Pflegeleistungen |
| **Autonomer Agent** | Trigger, Cronjob, Event | Niemand zur Laufzeit | Bestandskunden monatlich auf Pflegegrad-Anpassung prüfen |
| **HITL — Human in the Loop** | Trigger oder Mensch | Mensch greift bei Entscheidungen ein | Antragsbearbeitung mit Sachbearbeiter-Freigabe |

Alle drei haben dieselben fünf Bausteine — Sensor, Motor, Stimme plus die Querschnittsschichten Kompass und Prüfstand. Aber wo die Investition liegt, verschiebt sich. Ein Assistent steckt viel Aufwand in den Sensor (Intentionen erkennen) und in die Stimme (Dialog mit Menschen). Ein autonomer Agent investiert massiv in den Prüfstand, weil niemand zur Laufzeit zuschaut. Mehr dazu in [[08_drei-typen]].

Eine Anmerkung zur Trennschärfe: HITL ist kein Mittelding zwischen Assistent und autonomem Agent. Ein Assistent hat *immer* einen Menschen im Dialog — das ist der Punkt. HITL meint: ein Agent läuft im Wesentlichen autonom, aber an definierten Übergabepunkten muss ein Mensch zustimmen, korrigieren oder freigeben. Das ist eine andere Konstruktion als ein Dialog.

## 1.3 Wann lohnt sich agentisches Design?

🟡 *Hier ist die Linie klar, die Ausarbeitung folgt in [[09_wann-lohnt-sich-was]]. Was hier steht, ist der Kompass für die nächsten Kapitel.*

Faustregel: Agent dort, wo der Pfad sich nicht vorab vollständig beschreiben lässt — und das Ergebnis Recherche, Reasoning oder Entscheidung erfordert. Bei einfachen, wiederholbaren Abläufen ist ein Workflow einfacher, billiger und zuverlässiger.

Drei Indizien, dass agentisches Design lohnt:

- **Der Lösungsweg variiert je nach Eingabe.** Bei einer Anspruchsklärung können je nach Fall andere Datenquellen, andere Prüfschritte, andere Rückfragen nötig sein. Das ist im Workflow nur mit massiver Verzweigungslogik abbildbar — ab einem gewissen Punkt unwartbar.
- **Es gibt Reasoning-Bedarf.** Nicht nur Daten zusammenstellen, sondern bewerten, abwägen, einordnen. Hier spielt das LLM seine Stärke aus.
- **Die Eingabe ist offen.** Freitext, unstrukturierte Anfragen, Mehrdeutigkeit. Workflows brauchen klare Inputs. Agenten kommen mit Unschärfe besser zurecht.

Drei Indizien, dass ein Agent *nicht* die richtige Antwort ist:

- **Der Pfad ist immer gleich.** Dann ist ein Workflow präziser und billiger.
- **Fehler sind teuer und nicht reversibel.** Agenten sind probabilistisch. Wenn ein einzelner Fehlentscheid eskaliert (Auszahlung, Vertragsabschluss, medizinische Entscheidung), braucht es entweder einen Menschen im Loop oder gar keinen Agenten.
- **Die Aufgabe ist trivial.** Wer einen Agenten baut, um eine Datei zu konvertieren, hat sich verlaufen.

Anti-Patterns vertieft in [[09_wann-lohnt-sich-was]].

---

**Nächster Schritt:** [[02_gesamtmodell]] — die fünf Bausteine im Überblick.

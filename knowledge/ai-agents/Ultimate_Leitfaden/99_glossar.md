---
title: Glossar
type: vocabulary
status: draft
created: '2026-04-28'
updated: '2026-04-28'
tags:
  - agents
  - leitfaden
  - ultimate-leitfaden
  - glossar
  - referenz
sources:
  - 'self-authored:loschke:enterprise-ai-agents'
area: ai-agents
audience:
  - fuehrungskraft
  - entscheider
  - praktiker
  - konzepter
  - entwickler
level: basic-to-advanced
intent:
  - verstehen
  - einordnen
  - nachschlagen
contains:
  - concept
  - reference
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Glossar

*Stand: April 2026 — wächst mit dem Leitfaden*

---

Kurze Definitionen zentraler Begriffe. Das Glossar ist als Nachschlagewerk gedacht — nicht zum Durchlesen. Begriffe sind alphabetisch geordnet. Wenn ein Begriff in einem bestimmten Kapitel ausführlich behandelt wird, gibt es einen Verweis dorthin.

---

## A

**ACI — Agent-Computer Interface** — Die Übergabe-Qualität zwischen Agent und Werkzeug. Hat zwei Seiten: was der Agent dem Werkzeug sagt (sauberer Tool-Call, korrekte Parameter) und was das Werkzeug dem Agenten über sich sagt (Tool-Beschreibung, Beispiele, Grenzfälle). Wir behandeln ACI als Stimme zum Werkzeug. Siehe [[05_stimme]].

**Agent** — Ein System, das ein Ziel bekommt und den Pfad zur Zielerreichung selbst entscheidet. Unterscheidet sich vom Workflow dadurch, dass der Pfad erst zur Laufzeit entsteht. Siehe [[01_was-ist-ein-agent]].

**Agent-zu-Agent-Übergabe** — Ein Agent ruft einen anderen Agenten auf. Technisch ein Trigger, konzeptionell eine Übergabe: Der zweite Agent bekommt einen vor-interpretierten Auftrag mit Trace und ggf. Konfidenz-Angaben. Multi-Agent-Architekturen sind ein eigenes Feld; für den Sensor des empfangenden Agenten gilt die Übergabe-Logik. Siehe [[03_sensor]].

**Agent-Harness (Scaffold)** — Die Infrastruktur, die das Modell als Agent operieren lässt: orchestriert Tool-Calls, verarbeitet Inputs, hält den Reasoning-Loop am Laufen. *Teil* des Agenten. Nicht zu verwechseln mit dem Eval-Harness. Siehe [[07_pruefstand]].

**Agentischer Assistent** — Agenten-Typ, bei dem ein Mensch die Anfrage stellt und im Dialog mit dem Agenten interagiert. Beispiel: Versicherter fragt nach Pflegeleistungen.

**API-Anbindung** — Klassische Variante, einen Agenten mit einem Drittsystem zu verbinden: über die API des Systems, mit eigener Integration pro Anbindung. Stabiler und kontrollierbarer als MCP, aber jede Integration ist eigene Arbeit. Siehe [[04_motor]].

**Aufgabe (Task / Test Case)** — Ein einzelner Testfall in einer Eval-Suite, mit definierten Eingaben und Erfolgskriterien. Siehe [[07_pruefstand]].

**Aufzeichnung (Transcript / Trace)** — Vollständige Spur eines einzelnen Agenten-Durchlaufs: alle Tool-Calls, alle Zwischenüberlegungen, alle Ergebnisse. Grundlage für Debugging und Eval-Validierung. Siehe [[07_pruefstand]].

**Auftragserkennung** — Was der Sensor beim autonomen Agenten leistet: Welcher Trigger ist gekommen? Welche Daten sind dabei? Welche Vorbedingungen gelten? Welcher konkrete Auftrag steckt in dieser Instanz? Siehe [[03_sensor]].

**Autonomer Agent** — Agenten-Typ, der durch einen Trigger oder Cronjob ausgelöst wird und ohne Mensch zur Laufzeit arbeitet. Beispiel: Monatliche Prüfung von Bestandskunden auf Pflegegrad-Anpassungen.

## B

**Bewerter (Grader)** — Logik, die das Ergebnis eines Eval-Durchlaufs gegen die Erwartung prüft. Drei Typen: code-basiert (deterministisch), modell-basiert (LLM-as-judge, flexibel), menschlich (Goldstandard). Siehe [[07_pruefstand]].

**Build Context** — Wissen, das *vor* dem Gespräch redaktionell aufgebaut und gepflegt wird. Beispiel: Wissensbausteine zu Pflegeleistungen, Satzungstexte. Gegenstück: Runtime Context. Siehe [[04_motor]].

## C

**Capability-Eval** — Eval-Familie, die fragt: *„Was kann der Agent gut?"* Zielt auf Aufgaben, an denen er heute scheitert. Beginnt mit niedriger Pass-Rate. Gegenstück: Regression-Eval. Siehe [[07_pruefstand]].

## D

**Doppelzeitungs-Test** — Prüfstein für Grenzfälle: Würde diese Antwort als *„gefährliche Fehlinformation"* oder als *„unnötig verweigerte Auskunft"* in der Zeitung stehen? Beides ist schlecht. Zwingt zur Mitte. Siehe [[06_kompass]].

**Datenbedarf** — Sensor-Klassifikation als Eskalationstreppe: was muss der Agent zusätzlich wissen, um zu antworten? Sechs Stufen vom direkten Antworten über Rückfrage und Tool/Formular bis zu Authentifizierung und Dokument-Upload. Steuert die System-Reaktion direkt. Siehe [[03_sensor]], 3.5.3.

**Drei-Ebenen-Framework (Intentionen)** — Eine Intention sauber zu beschreiben braucht drei Ebenen: *Intention* (warum kommt jemand?), *Handlung* (was übernimmt das System?), *Wirkung* (was ist nachher anders?). Siehe [[03_sensor]].

**Domain (Sensor-Achse)** — Klassifikation des fachlichen Bereichs einer Anfrage. Routing-Layer, der bestimmt, welches Wissens-Cluster der Motor zieht und welche Governance-Regeln greifen. Sinnvoll ab dem zweiten Cluster, mit einer *„Übergreifend / Routing"*-Kategorie für mehrbereiche Anfragen. Siehe [[03_sensor]], 3.5.2.

**Durchlauf (Trial)** — Ein konkreter Versuch, eine Eval-Aufgabe zu lösen. Weil Agenten variabel reagieren, läuft eine Aufgabe meist mehrfach durch. Siehe [[07_pruefstand]].

## E

**Endergebnis (Outcome)** — Der Zustand der Welt am Ende eines Eval-Durchlaufs. Nicht was der Agent *sagt* getan zu haben, sondern was im Backend wirklich passiert ist. Siehe [[07_pruefstand]].

**Eval** — Systematischer Test eines Agenten gegen definierte Erwartungen. Anders als Debugging punktuell, sondern wiederholbar und vergleichbar. Siehe [[07_pruefstand]].

**Eval-Harness** — Die Infrastruktur, die einen Agenten testet: liefert Eingaben, fängt Outputs ab, vergleicht gegen Erwartungen, aggregiert. Steht *außerhalb* des Agenten. Nicht zu verwechseln mit dem Agent-Harness. Siehe [[07_pruefstand]].

**Eval-Suite** — Eine Sammlung von Aufgaben, die zusammen ein Verhalten oder eine Fähigkeit messen. Beispiel: *„Anspruchsklärungs-Suite"*. Siehe [[07_pruefstand]].

## F

**Function Calling** — Mechanismus, mit dem moderne LLMs strukturierte Tool-Aufrufe selbst erzeugen. Der Agent „weiß" über die verfügbaren Tools Bescheid und entscheidet im Reasoning-Loop, wann er eines aufruft. Synonym oft *Tool Use*. Siehe [[04_motor]].

## G

**Gedächtnis** — Was der Agent über die aktuelle Session hinaus oder innerhalb einer Session erinnert. Working Memory (innerhalb einer Session) und persistentes Gedächtnis (über Sessions hinweg) sind zu unterscheiden. Siehe [[04_motor]].

**Guardrail** — Technische Schutzmaßnahme, die unerwünschtes Verhalten verhindert: Rate Limits, Output-Filter, Inhaltskontrolle. Nicht zu verwechseln mit dem Kompass — der ist Verfassung, das hier ist technische Durchsetzung. Siehe [[07_pruefstand]].

## H

**Hard Constraint** — Nie verletzbare Grenze im Kompass. Domänenspezifisch definiert (z.B. *„keine individuellen Leistungszusagen"*, *„keine Diagnosen"*). Wenn ein Hard Constraint verletzt wird, ist das ein Systemfehler, kein Grenzfall. Siehe [[06_kompass]].

**HITL — Human in the Loop** — Agenten-Typ, bei dem ein Agent im Wesentlichen autonom arbeitet, aber an definierten Übergabepunkten ein Mensch zustimmen, korrigieren oder freigeben muss. Nicht zu verwechseln mit dem Assistenten — dort ist der Mensch durchgehend im Dialog.

## I

**Intention** — Das Grundbedürfnis hinter einer Anfrage. Nicht die wörtliche Frage, sondern das, was der Mensch eigentlich will. Pro Domäne gibt es eine endliche Anzahl von Grundintentionen. Siehe [[03_sensor]].

**Intentionserkennung** — Was der Sensor beim Assistenten leistet: aus einer menschlichen Anfrage die Intention(en) ableiten, mit Konfidenz, Mehrfach-Treffern und emotionaler Komponente. Siehe [[03_sensor]].

## K

**Kernwerte** — Werte im Kompass, die für den Graubereich zwischen Hard Constraints Orientierung geben: fachliche Korrektheit, Ehrlichkeit, echte Hilfsbereitschaft, Respekt vor Autonomie, Fürsorge. Können in Spannung zueinander stehen — das ist gewollt. Siehe [[06_kompass]].

**Kognitive Kapazität** — Der Zustand des Empfängers, der bestimmt, wie viel Information verarbeitet werden kann. Niedrig (Stress, Krise) → radikal kürzen. Mittel (belastet) → portionieren. Hoch (Routine) → vollständig möglich. Filtert das Ergebnis der Stimm-Konfiguration. Siehe [[05_stimme]].

**Kompass** — Querschnittsschicht des Agenten: Werte, harte Constraints, Vertrauenshierarchie. Wirkt in jeden der drei Reihen-Bausteine, ist aber kein Schritt im Ablauf. Siehe [[06_kompass]].

**Kompetente-Beraterin-Test** — Prüfstein für Grenzfälle: Würde eine erfahrene Fachberaterin diese Antwort genau so geben? Wenn nein, etwas anders machen. Siehe [[06_kompass]].

**Kontextfenster** — Der Speicherraum, den ein LLM pro Anfrage zur Verfügung hat. Alles, was der Agent gerade „präsent" hat, muss hier hineinpassen. Siehe [[04_motor]].

## L

**Loop** — Der Zyklus aus *beobachten → entscheiden → handeln → neu beobachten*, der das Wesen eines Agenten ausmacht. Synonym im Leitfaden: *Reasoning-Loop*. Siehe [[04_motor]].

## M

**MCP — Model Context Protocol** — Standardisiertes Protokoll, mit dem ein Agent auf viele verschiedene Datenquellen und Tools einheitlich zugreifen kann. Vereinfachte Analogie: USB für KI. Siehe [[04_motor]].

**Modell-basierter Bewerter (LLM-as-judge)** — Ein zweites LLM bewertet den Output des Agenten gegen ein Rubrik. Flexibel und skalierbar, aber nicht-deterministisch. Muss regelmäßig gegen menschliche Einschätzung kalibriert werden. Siehe [[07_pruefstand]].

**Monitoring** — Aggregierte Beobachtung des Agentenverhaltens in Produktion über Zeit: Latenz, Tool-Fehler, Drift-Muster, Eskalationsraten. Siehe [[07_pruefstand]].

**Motor** — Reihen-Baustein zwischen Sensor und Stimme. Enthält vier Komponenten: Reasoning-Loop, Wissen, Werkzeuge, Gedächtnis. Hier wird das eigentliche Reasoning gemacht. Siehe [[04_motor]].

## P

**pass@k** — Eval-Kennzahl: Wahrscheinlichkeit, dass der Agent mindestens *einen* Erfolg in k Versuchen hat. Steigt mit k. Relevant, wenn ein einzelner Erfolg reicht. Siehe [[07_pruefstand]].

**pass^k** — Eval-Kennzahl: Wahrscheinlichkeit, dass der Agent in *allen* k Versuchen erfolgreich ist. Fällt mit k. Relevant für Verlässlichkeit in Kundenkontexten. Siehe [[07_pruefstand]].

**Person (Sensor-Achse)** — Klassifikation der Empfänger-Rolle: spricht jemand für sich selbst, für Angehörige, in formaler Stellvertretung, als Außenstehender oder anonym? Hat Konsequenzen für Datenzugriff, Haftung und Tonalität. Wird relevant, sobald verschiedene Rollen mit verschiedenen Rechten vorkommen. Siehe [[03_sensor]], 3.5.1.

**Persistentes Gedächtnis** — Gedächtnis, das über Sessions hinweg erhalten bleibt: Nutzerpräferenzen, frühere Anliegen, gelernte Muster. Mächtig, aber mit Risiken (Datenschutz, Drift, Bias-Akkumulation). Siehe [[04_motor]].

**Proaktivität** — Einer der vier Stimm-Steuerparameter. Wieviel bietet der Agent ungefragt an? Spektrum von „nur auf Frage antworten" bis „aktiv weiterdenken". Stellschraube, kein Defaultwert. Siehe [[05_stimme]].

**Progressive Disclosure** — Prinzip, nach dem Skills funktionieren: Der Agent hat nicht alles auf einmal im Blick, sondern lädt nur, was er gerade braucht. Macht große Skill-Bestände handhabbar. Siehe [[04_motor]].

**Prüfstand** — Querschnittsschicht zur Beobachtung und Bewertung des Agenten: Evals, Logs, Monitoring, Guardrails, Versionierung, Wartung. Beobachtet alle Reihen-Bausteine kontinuierlich. Siehe [[07_pruefstand]].

**Prüfsteine** — Heuristiken im Kompass für Grenzfälle, in denen weder Constraints noch Werte eindeutig greifen: Kompetente-Beraterin-Test, Doppelzeitungs-Test, 1.000-Nutzer-Regel. Siehe [[06_kompass]].

## R

**RAG — Retrieval Augmented Generation** — Standardansatz für Agenten mit eigener Wissensbasis. Vor jeder Antwort wird die Wissensbasis durchsucht, die passenden Stücke werden zur Anfrage hinzugepackt, dann antwortet das Modell. Siehe [[04_motor]].

**ReAct** — Reasoning-Pattern aus *Reason + Act*: Der Agent wechselt zwischen Denken und Handeln, beobachtet das Ergebnis, denkt erneut. Siehe [[04_motor]].

**Reasoning** — Die Fähigkeit des Agenten, Aufgaben zu zerlegen, Strategien zu entwickeln, Zwischenergebnisse zu bewerten und bei Bedarf neu zu planen. Wichtig: keine echte Selbstkritik — externe Korrektur durch den Prüfstand bleibt nötig. Siehe [[04_motor]].

**Reasoning-Loop** — Synonym für Loop. Siehe dort.

**Reasoning-Trace** — Eine nachvollziehbare Spur dessen, was der Agent gedacht und getan hat: welche Schritte, welche Tools, welche Annahmen. Bei autonomen Agenten und HITL-Übergaben unverzichtbar. Siehe [[05_stimme]] und [[07_pruefstand]].

**Regression-Eval** — Eval-Familie, die fragt: *„Funktioniert noch alles, was bisher funktioniert?"* Hohe Pass-Rate als Zielzustand. Sicherheitsnetz gegen stille Verschlechterungen. Gegenstück: Capability-Eval. Siehe [[07_pruefstand]].

**Retrieval** — Das Heraussuchen passender Wissensstücke aus einer Wissensbasis vor der Antwortgenerierung. Kern der RAG-Architektur. Siehe [[04_motor]].

**Runtime Context** — Wissen, das erst zur Laufzeit existiert: Nutzerprofil, Tool-Output, Echtzeitdaten. Gegenstück: Build Context.

## S

**Saturation (Eval-Saturation)** — Wenn eine Capability-Eval auf 100 Prozent steht, misst sie nichts mehr. Sie wird zur Regression-Eval umgewidmet, neue härtere Aufgaben kommen rein. Siehe [[07_pruefstand]].

**Sensor** — Erster Reihen-Baustein. Erkennt, was das System gerade tun soll. Beim Assistenten Intentionserkennung, beim autonomen Agenten Auftragsklärung. Siehe [[03_sensor]].

**Skill** — Bündel aus Anweisungen, optional Werkzeugen und einer Aktivierungsbeschreibung. Wird vom Agenten zur Laufzeit selektiv geladen. Drei Granularitäten: Mikro, Makro, Meta. Siehe [[04_motor]].

**Stimme** — Dritter Reihen-Baustein. Übergabe an einen Empfänger — Mensch, Werkzeug oder nachgelagertes System. Siehe [[05_stimme]].

**Stopping Conditions** — Abbruchbedingungen für den Reasoning-Loop. Vier Typen: Ziel erreicht, Ziel nicht erreichbar, technisches Problem, externe Kontrolle. Siehe [[04_motor]].

## T

**Tausend-Nutzer-Regel** — Prüfstein für Grenzfälle: Wenn tausend Menschen diese Frage stellen würden, hätten die meisten ein legitimes Anliegen. Antworte für diese Mehrheit, nicht für den hypothetischen Ausnahmefall. Kuriert von Reflex-Vorsicht. Siehe [[06_kompass]].

**Tonalität** — Einer der vier Stimm-Steuerparameter. Wie klingt die Antwort? Spektrum von beruhigend über sachlich bis motivierend. Siehe [[05_stimme]].

**Tool** — Im Sinne der Stufen: eine einzelne Funktion, die genau eine Sache tut. Im Sinne des Agenten-Werkzeugkastens: eine Schnittstelle, die der Agent aufrufen kann.

**Tool Use** — Synonym für Function Calling. Siehe dort.

**Trigger** — Technisches Ereignis, das einen autonomen Agenten oder einen HITL-Vorgang anstößt. Cronjob, Webhook, Datenänderung, Schwellwert-Überschreitung. Siehe [[03_sensor]].

## V

**Verfassung** — Sprachliches Bild für die Gesamtheit aus Werten, harten Constraints und Vertrauenshierarchie. Synonym zu Kompass. Siehe [[06_kompass]].

**Versionierung** — Dokumentation aller Änderungen am Agenten: Modell, Systemprompt, Skills, Tool-Beschreibungen, Wissensbasis, Kompass. Voraussetzung dafür, dass Vorfälle rekonstruierbar sind. Siehe [[07_pruefstand]].

**Vertrauens-Hierarchie** — Im Kompass festgelegte Reihenfolge, wem der Agent im Konflikt folgt: Gesetz → Organisation → Fachredaktion → Nutzer. Plus eine Querschicht: was der Agent dem Nutzer immer schuldet (KI-Natur transparent, Notruf bei Gefahr, Würde, keine Täuschung). Siehe [[06_kompass]].

**Vertrauenstreppe** — Vier-Stufen-Modell, das beschreibt, wie aus einer plausibel klingenden LLM-Antwort eine verlässliche Antwort wird: *Plausibel → Korrekt → Hilfreich → Verlässlich*. Übersetzt das Bauplan-Vokabular in eine erlebte Antwort-Qualität. Stufe 1 schafft jedes LLM ohne Aufwand, die Stufen 2–4 sind die eigentliche Bauleistung — Wissen, Sensor, Kompass und Stimme. Siehe [[02_gesamtmodell]].

## W

**Werkzeuge** — Komponente im Motor. Was der Agent über reines Antworten hinaus tun kann: APIs aufrufen, Datenbanken abfragen, Tools nutzen, Assets erstellen, Suche ausführen. Drei Stufen: Lesen, Schreiben, Agieren. Siehe [[04_motor]].

**Wissen** — Komponente im Motor. Was der Agent inhaltlich weiß: Build Context (vorab kuratiert) und Runtime Context (zur Laufzeit dazugekommen). Siehe [[04_motor]].

**Workflow** — Definierter, vorgedachter Pfad mehrerer Schritte. Im Unterschied zum Agenten ist der Pfad vor der Ausführung beschreibbar. Wo Workflows reichen, sind sie die richtige Wahl. Siehe [[01_was-ist-ein-agent]].

**Working Memory** — Gedächtnis innerhalb einer Session oder eines Auftrags. Hält bisherige Schritte, Zwischenergebnisse, aktuellen Stand. Siehe [[04_motor]].

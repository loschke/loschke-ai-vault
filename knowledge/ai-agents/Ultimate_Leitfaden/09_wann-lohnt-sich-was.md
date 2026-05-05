---
title: Teil 9 — Wann lohnt sich was
type: guide
status: draft
created: '2026-04-28'
updated: '2026-04-28'
tags:
  - agents
  - leitfaden
  - ultimate-leitfaden
  - entscheidung
  - anti-patterns
  - reifegrad
  - synthese
  - praxis
sources:
  - 'self-authored:loschke:enterprise-ai-agents'
area: ai-agents
audience:
  - fuehrungskraft
  - entscheider
  - praktiker
  - konzepter
level: basic-to-advanced
intent:
  - entscheiden
  - bewerten
  - vermitteln
contains:
  - concept
  - framework
  - decision-aid
  - method
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Teil 9 — Wann lohnt sich was

*Status: 9.1 ✅ · 9.2 ✅ · 9.3 ✅ · 9.4 ✅ · 9.5 ✅ · 9.6 ✅*

---

Bisher haben wir gezeigt, was in einem Agenten steckt und wie sich die Bausteine zwischen den Typen verschieben. Übrig bleibt die Frage, die am Anfang jedes Projekts stehen sollte: *Brauche ich überhaupt einen Agenten? Und wenn ja — welchen?*

Diese Frage wird in der Praxis zu selten ehrlich gestellt. *„Wir wollen Agenten einsetzen"* ist in vielen Strategiemeetings 2026 die Überschrift, ohne dass danach gefragt wird, ob das das richtige Werkzeug ist. Dieses Kapitel ist die Zusammenfassung der Entscheidungslogik, die sich durch den ganzen Leitfaden zieht — plus die typischen Fehler, die dabei gemacht werden.

---

## 9.1 Die Vor-Frage: Brauche ich KI überhaupt?

Bevor man über Agent, Workflow oder Tool nachdenkt, lohnt sich ein ehrlicher Blick auf den Prozess selbst. Vier Voraussetzungen müssen erfüllt sein, sonst lohnt sich der ganze Aufwand nicht.

| Voraussetzung | Wenn nicht erfüllt |
|---|---|
| **Wiederholbarkeit** — der Prozess tritt regelmäßig auf | Einmal-Aufgaben löst man manuell oder per Chat, nicht durch ein eigenes Setup |
| **Datenqualität** — die Eingangsdaten sind digital, strukturiert, zugänglich | Erst die Daten in Ordnung bringen. Sonst baut man auf Sand |
| **Risikoakzeptanz** — gelegentliche Fehler sind tolerierbar oder durch Mensch abgefangen | Wenn jeder Fehler katastrophal ist und Menschen ohnehin alles prüfen, lohnt sich der Aufwand kaum |
| **ROI-Perspektive** — das Volumen oder der Wert pro Fall trägt den Aufwand | Ein Prozess, der zwei Mal pro Woche läuft und zehn Minuten dauert, lohnt kein Agent-Projekt |

Wer eine dieser Voraussetzungen nicht ehrlich beantwortet, baut sich Probleme. Besonders die letzte wird häufig übersehen — das *Aussehen* eines Agent-Projekts ist im Vorstand attraktiv, der wirtschaftliche Effekt oft mager.

---

## 9.2 Tool, Workflow oder Agent — die Stufen-Entscheidung

Wenn die Vor-Voraussetzungen passen, kommt die erste echte Entscheidung: Welche der drei Stufen aus [[01_was-ist-ein-agent]] passt?

Drei Indizien, die für **Tool** sprechen:

- Die Aufgabe ist eine einzelne Funktion mit klarer Eingabe und Ausgabe.
- Es gibt keine Reihenfolge, kein Zerlegen, kein Reasoning.
- Beispiel: ein Pflegegradrechner. Eingabe rein, Ergebnis raus. Kein Agent nötig, ein Tool reicht.

Drei Indizien, die für **Workflow** sprechen:

- Der Pfad ist immer gleich. Schritt 1 vor Schritt 2 vor Schritt 3.
- Verzweigungen lassen sich vorab beschreiben — wenige, klare Bedingungen.
- Die Schritte sind unabhängig genug, dass Fehler in einem nicht den ganzen Pfad zerschießen.
- Beispiel: Eingangsantrag → Vollständigkeitsprüfung → Klassifikation → Ablage. Jeder Schritt ist klar definiert. Ein Workflow ist hier präziser, billiger und zuverlässiger als ein Agent.

Drei Indizien, die für **Agent** sprechen:

- Der Lösungsweg variiert je nach Eingabe. Was Schritt 2 ist, hängt davon ab, was Schritt 1 zurückgegeben hat.
- Die Aufgabe braucht Reasoning — nicht nur Daten zusammenstellen, sondern bewerten, abwägen, einordnen.
- Die Eingabe ist offen oder mehrdeutig. Freitext, unstrukturierte Anfragen.

Faustregel: **Workflow, wo immer er reicht.** Workflows sind einfacher, billiger und zuverlässiger. Agenten sind das Werkzeug für das, was Workflows nicht können — nicht für das, was *„Agent"* im Pitch besser klingt.

In der Praxis sind Mischformen üblich. Ein Agent kann Teilschritte an Tools delegieren. Ein Workflow kann an einen Agenten eskalieren, wenn er an Sonderfällen scheitert. Diese Mischformen sind oft die robustesten Setups — *Agent für die Reasoning-anspruchsvollen Stellen, Workflow für den Rest.*

---

## 9.3 Assistent, autonom oder HITL — die Typ-Entscheidung

Wenn die Stufen-Entscheidung *Agent* ergibt, kommt die zweite Frage: Welcher Typ?

Vier Kriterien helfen bei der Zuordnung. Sie ergeben zusammen ein Bild, das selten 100-prozentig auf einen Typ zeigt — aber meist eine klare Tendenz.

**Wer löst aus?** Mensch mit Anliegen → Assistent. Trigger oder Cronjob → autonom oder HITL. Beides → meist HITL.

**Wer trägt die Konsequenz der Antwort?** Antwort an einen Menschen, der selbst entscheidet → Assistent. Antwort als Vorschlag an eine Sachbearbeitung → HITL. Antwort als strukturierter Datensatz, der ggf. weitere automatisierte Verarbeitung anstößt → autonom.

**Wie reversibel sind Fehler?** Hoch reversibel (man redet einfach nochmal) → Assistent geht. Mittel (Vorschlag wird vor Aktion geprüft) → HITL. Niedrig reversibel und ohne menschliche Prüfung → kein autonomer Agent, eher HITL.

**Welches Volumen, welche Individualität?** Wenig Volumen, hohe Individualität → Assistent. Hohes Volumen, strukturierte Fälle → autonom. Mittleres Volumen, hohe Individualität, jeder Fall haftungsrelevant → HITL.

Die Kombination dieser vier Kriterien zeigt meist sehr klar, wohin es geht. Was sie *nicht* ergeben, ist eine eindeutige Antwort, wenn die Wirklichkeit unklar ist — und dann ist die richtige Antwort fast immer: *klein anfangen, lernen, dann gezielt ausbauen*.

### Anti-Frage: Wo kein Agent passt

Drei Konstellationen, in denen kein Agenten-Typ richtig passt:

- **Fehler sind teuer und nicht reversibel.** Auszahlungen, Vertragsabschlüsse, Diagnosen. Hier ist entweder ein Mensch im Loop oder gar kein Agent. Kein autonomes System für rechtsverbindliche Außenwirkung.
- **Der Prozess ist trivial.** Wer einen Agenten baut, um eine Datei zu konvertieren, hat sich verlaufen. Tool genügt.
- **Es gibt keine konkrete Entscheidung über das Vorgehen.** Wenn der Prozess immer gleich abläuft, Workflow. Wenn er reines Mapping ist, Tool. Reasoning ist die Ressource, die der Agent rechtfertigt — wo sie nicht gebraucht wird, ist der Agent Verschwendung.

---

## 9.4 Persistentes Gedächtnis — eine eigene Entscheidung

Ein Punkt, der in der Bauplanung gerne untergeht: Persistentes Gedächtnis ist keine Default-Eigenschaft, sondern eine bewusste Entscheidung. Sie verdient ein eigenes Gespräch.

**Wann persistentes Gedächtnis sinnvoll ist:**

- Wenn Wiedererkennung den Nutzwert *messbar* erhöht. Ein Pflege-Assistent, der beim zweiten Anruf weiß, dass der Anrufende bereits Pflegegrad 3 hat und seine Mutter pflegt, spart dem Anrufenden zwei Minuten Wiederholung.
- Wenn der Use Case ohne Personalisierung schlecht funktioniert — etwa bei Coaching-Anwendungen, in denen Verläufe der Punkt sind.
- Wenn die rechtliche Lage geklärt und das Löschkonzept sauber ist.

**Wann lieber nicht:**

- Wenn der Use Case auch ohne funktioniert. Dann ist Persistenz ein zusätzliches Risiko ohne erkennbaren Vorteil.
- Wenn die DSGVO-Konformität nicht restlos geklärt ist. Im Zweifel lieber weglassen, als sich ein Compliance-Problem einbauen.
- Wenn keine Pflege vorgesehen ist. Persistentes Gedächtnis veraltet. Wer das Gedächtnis nicht regelmäßig aktualisiert, baut sich Drift und Bias ein, den niemand bemerkt.

Faustregel: Persistenz aus Notwendigkeit, nicht aus Komfort. Wenn der Use Case auch ohne funktioniert, lieber weglassen.

---

## 9.5 Anti-Patterns — die häufigsten Fehler

Aus der Praxis: sieben Muster, die in Agent-Projekten regelmäßig vorkommen und regelmäßig schiefgehen.

### Agent gebaut, wo Workflow gereicht hätte

Der Klassiker. Der Prozess hat fünf klare Schritte, die immer gleich ablaufen. Trotzdem wird ein Agent gebaut, weil das im Pitch attraktiver klingt. Das Ergebnis: höhere Kosten, mehr Variabilität, schwerere Debugbarkeit, kein Mehrwert. Die Workflow-Variante hätte es schneller, billiger und zuverlässiger geliefert.

Gegenmittel: Ehrliche Stufen-Frage in 9.2. Wenn der Pfad immer gleich ist, Workflow.

### Agent ohne Prüfstand in Produktion

Der Agent läuft. Anfangs läuft er gut. Dann kommt das Modellupdate. Dann eine Skill-Anpassung. Niemand merkt, dass etwas schlechter wird, weil niemand misst. Beim ersten Vorfall ist die Suche nach der Ursache eine Detektivgeschichte ohne Spuren — Logs sind nicht da, Versionierung gibt es nicht, Evals existieren nicht.

Gegenmittel: Prüfstand vor dem Launch, nicht nachträglich. Auch wenn klein. Zwanzig bis fünfzig Eval-Aufgaben sind besser als keine.

### Agent mit Werkzeugen, die er nie wirklich braucht

Der Agent hat fünfzehn Tool-Anbindungen. Davon werden zwölf nie benutzt. Oder, schlimmer, sie werden gelegentlich benutzt, ohne dass jemand kontrolliert, ob sie das Richtige tun. Die Tool-Anbindung kostete Aufwand, das ACI ist mittelmäßig, die Wartung ist niemandem zugeordnet.

Gegenmittel: Werkzeuge nur, wenn sie regelmäßig gebraucht werden. Für seltene Fälle eskalieren statt anbinden.

### Stimme aufgemotzt beim autonomen Agenten

Ein autonomer Agent bekommt eine elaborierte Mensch-Stimme — schöne Tonalität, empathische Formulierungen, ausführliche Antworten. Niemand liest sie, weil niemand zur Laufzeit zuschaut. Der Aufwand ging an die falsche Stelle. Die Sachbearbeitung, die später die Outputs auswertet, kämpft mit Prosa statt mit strukturierter Information.

Gegenmittel: Stimme nach Empfänger gestalten. Beim autonomen Agenten ist Strukturqualität wichtig, nicht Tonalität.

### Kompass als nachträglicher Filter

Der Agent ist gebaut. Dann fällt jemandem auf, dass er ja auch Werte und Constraints braucht. Jetzt wird ein nachträglicher Output-Filter eingebaut, der die schlimmsten Schnitzer abfängt. Das Ergebnis: ein Agent, der zwei Drittel des Weges in die falsche Richtung läuft und am Ende durch einen Filter rausgefangen wird. Nicht effizient, nicht elegant, oft unwirksam.

Gegenmittel: Kompass von Anfang an als Querschnittsschicht — wirkt in Sensor, Motor, Stimme. Filter sind die letzte Schicht, nicht die erste.

### HITL ohne Übergabe-Disziplin

Ein HITL-Setup ist gebaut, der Agent leistet die Vorarbeit. Aber der Übergabepunkt zur Sachbearbeitung ist eine Prosa-Wand ohne klare Entscheidungsfrage. Die Sachbearbeitung liest, prüft, sucht selbst, und entscheidet — am Ende hat der Agent keine Zeit gespart, sondern Arbeit verschoben. Der Wertbeitrag ist negativ.

Gegenmittel: Der Übergabepunkt *ist* das Produkt. Strukturiert, mit klarer Empfehlung, Konfidenzangabe und genau der Frage, die die Sachbearbeitung jetzt entscheiden soll.

### Voll-Agent, wo gemischte Architektur richtig wäre

Der ehrgeizigste Fall: Es wird ein Agent gebaut, der *„alles selbst macht"*. Recherche, Bewertung, Antrag, Entscheidung, Ausführung. In der Praxis sind diese Voll-Agenten in regulierten Domänen Spezialfälle. Meist ist eine Mischarchitektur richtig: Agent macht Reasoning, delegiert klare Teilschritte an Workflows, übergibt rechtsverbindliche Aktionen an einen Menschen.

Gegenmittel: Architektur in Teilen denken. Welcher Teil braucht Reasoning? Welcher Teil ist Workflow? Welcher Teil braucht Mensch?

---

## 9.6 Reifegrad — wo welche Schritte passen

Nicht jede Organisation kann mit einem Agenten anfangen. Die Praxis zeigt einen Reifegrad-Pfad, der sich bewährt hat:

| Reifegrad | Wo die Organisation steht | Sinnvoller nächster Schritt |
|---|---|---|
| **Null** | Noch kein produktiver KI-Einsatz | Niederschwelliger Einstieg über agentische Assistenten für Power-User. Ziel: lernen, welche Prozesse sich eignen. |
| **Erste Erfahrungen** | KI-Werkzeuge im Einsatz, aber noch keine Workflows oder Agenten | Erst Workflows bauen für 2–3 wiederkehrende Hochvolumen-Prozesse. Messbare Ergebnisse schaffen. |
| **Workflows etabliert** | Mehrere KI-Workflows produktiv, Daten und Monitoring eingespielt | Erste Agenten pilotieren — typischerweise HITL, weil das die kontrollierbarere Variante ist. Prüfstand systematisch aufbauen. |
| **Agenten im Einsatz** | Mehrere Agenten produktiv, Eval-Suiten existieren, Governance steht | Autonome Agenten für klar abgegrenzte Bereiche. Mischarchitekturen verfeinern. |

Wer diesen Pfad überspringt — etwa direkt auf einen autonomen Agenten geht, ohne Workflow-Erfahrung —, baut sich Komplexität auf, die er nicht beherrschen wird. Nicht, weil die Technik nicht funktioniert, sondern weil die Organisation nicht reif ist, sie zu betreiben. Die Tech-Seite ist selten der Engpass. Die Organisation ist es.

Faustregel: *Reifegrad-Sprünge sind teuer.* Eine Reife-Stufe nach der anderen — das dauert länger, ist aber das, was hält.

---

## Take-aways

- **Drei Vor-Voraussetzungen für jeden KI-Einsatz:** Wiederholbarkeit, Datenqualität, Risikoakzeptanz, ROI. Wer eine davon nicht ehrlich beantwortet, baut Probleme.
- **Workflow, wo immer er reicht.** Agenten sind teurer, schwerer zu testen, schwerer zu erklären. Sie lohnen sich nur dort, wo Reasoning gebraucht wird.
- **Vier Kriterien für die Typ-Entscheidung.** Wer löst aus? Wer trägt die Konsequenz? Wie reversibel sind Fehler? Welches Volumen, welche Individualität? Die Kombination zeigt fast immer eine klare Tendenz.
- **Persistentes Gedächtnis ist eine eigene Entscheidung.** Aus Notwendigkeit, nicht aus Komfort. Wenn der Use Case auch ohne funktioniert, lieber weglassen.
- **Sieben typische Anti-Patterns.** Agent statt Workflow. Kein Prüfstand. Tools auf Vorrat. Stimme am falschen Empfänger. Kompass nachträglich. HITL ohne Übergabe-Disziplin. Voll-Agent statt Mischarchitektur. Wer diese sieben kennt, vermeidet die Mehrheit der typischen Projektfehler.
- **Reifegrad-Sprünge sind teuer.** Eine Stufe nach der anderen schlägt den Sprung in jedem Fall, in dem die Organisation nicht ohnehin schon trägt.
- **Agenten sind kein Selbstzweck.** Sie sind ein Werkzeug für eine bestimmte Klasse von Problemen. Das richtige Werkzeug für das richtige Problem ist die ganze Disziplin.

---

**Damit ist der Hauptteil komplett.** [[00_lies-mich]] für die Übersicht. [[99_glossar]] für das Nachschlagen.

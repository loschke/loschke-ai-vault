---
title: Anatomie eines KI-Agenten
type: reference
status: stable
created: '2026-04-10'
updated: '2026-04-10'
tags:
  - agents
  - anatomie
  - architektur
  - grundlagen
  - referenz
  - seminar-material
  - beratung
  - aci
  - workflow-patterns
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
  - vermitteln
  - bewerten
contains:
  - concept
  - framework
  - method
  - argument
  - analogy
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Anatomie eines KI-Agenten

> Was in einem KI-Agenten steckt, wie er arbeitet und was dafür nötig ist. Keine Marketing-Vereinfachung, keine Technik-Vorlesung. Sondern: Agenten erklärbar machen.

---

## Warum dieses Dokument?

Die meisten Erklärungen von KI-Agenten bleiben an der Oberfläche: "Er bekommt ein Ziel und findet den Weg selbst. Er kann Werkzeuge benutzen." Das ist richtig, aber es erklärt nichts. Es ist, als würde man ein Auto erklären mit "Es fährt dich von A nach B."

Wer Agenten bewerten, beauftragen oder bauen will, muss verstehen, was tatsächlich drin steckt. Dieses Dokument öffnet die Haube.

---

## Das Simplizitäts-Prinzip

Bevor wir die Haube öffnen, eine Erkenntnis, die aus der Praxis kommt — und die Anthropic nach der Zusammenarbeit mit Dutzenden von Teams bestätigt: Die erfolgreichsten Agent-Implementierungen nutzen einfache, kombinierbare Patterns. Nicht die komplexesten Frameworks.

Die Versuchung ist groß, sofort die leistungsfähigste Architektur zu bauen. In der Realität scheitern die meisten Agent-Projekte nicht an zu wenig Komplexität, sondern an zu viel. Jede zusätzliche Schicht kostet Latenz, Geld und Debuggbarkeit.

**Die Grundregel:** Fange mit der einfachsten Lösung an, die funktioniert. Füge Komplexität nur hinzu, wenn sie messbar bessere Ergebnisse liefert. Für viele Aufgaben reicht ein gut prompteter LLM-Aufruf mit Retrieval. Nicht jeder Prozess braucht einen Agenten.

Das klingt offensichtlich. Aber in der Praxis wird es ständig ignoriert — weil "Agent" im Vorstandsmeeting besser klingt als "optimierter LLM-Aufruf".

---

# Teil 1: Was muss existieren

Bevor ein Agent eine einzige Aufgabe erledigen kann, müssen Entscheidungen getroffen und Systeme aufgebaut werden. Ein Agent, den jemand "einschaltet", ohne diese Vorarbeit zu leisten, ist ein LLM mit Werkzeugen — er funktioniert, aber unzuverlässig, inkonsistent und unkontrollierbar.

---

## Das Gehirn: Was ein LLM kann und was nicht

Am Kern jedes Agenten sitzt ein Large Language Model. Es kann denken, verstehen, formulieren, Muster erkennen, Zusammenhänge herstellen und Pläne skizzieren. Was es von sich aus nicht kann: handeln, auf Daten zugreifen, sich erinnern, Regeln zuverlässig einhalten oder wissen, was in eurem Unternehmen gilt.

Das LLM ist austauschbar. GPT-4o, Claude, Gemini, Llama — die Architektur drumherum bleibt dieselbe. Wer seine Agent-Strategie auf ein bestimmtes Modell baut, baut auf Sand. Wer die Architektur richtig aufbaut, kann das Modell tauschen, ohne alles neu zu machen.

**Was das für Entscheidungen bedeutet:** Die Wahl des Modells ist wichtig, aber sie ist nicht die wichtigste Entscheidung. Die wichtigste Entscheidung ist, was drumherum gebaut wird.

Der Grundbaustein jedes agentischen Systems ist deshalb nicht das nackte LLM, sondern das **erweiterte LLM**: ein Modell mit Zugang zu Retrieval, Tools und Gedächtnis. Aktuelle Modelle können diese Fähigkeiten aktiv nutzen — eigene Suchanfragen generieren, passende Tools auswählen, entscheiden, welche Informationen sie behalten. Dieses erweiterte LLM ist die Basis, auf der alle weiteren Architekturmuster aufbauen.

---

## Identität und Verfassung: Wer ist dieser Agent?

Jeder Agent braucht eine Definition dessen, wer er ist, was er tun soll und was er nicht tun darf. Das klingt trivial, ist aber der Punkt, an dem die meisten Agent-Projekte ihre Qualität gewinnen oder verlieren.

### Was definiert wird

**Rolle und Zweck:** Was ist die Aufgabe dieses Agenten? Für wen arbeitet er? In welchem Kontext? Ein Agent, der "alles können soll", kann nichts zuverlässig. Spezialisierung schlägt Generalismus.

**Verhalten und Tonalität:** Wie soll er kommunizieren? Formell oder direkt? Empathisch oder sachlich? Ausführlich oder kompakt? Diese Entscheidung bestimmt, wie Menschen den Agenten erleben. Und sie muss zur Zielgruppe passen — ein Agent für Kundenbeschwerden braucht einen anderen Ton als ein Agent für interne Datenanalyse.

**Harte Grenzen:** Dinge, die der Agent nie tun darf. Keine individuellen Zusagen. Keine medizinischen Empfehlungen. Keine Finanztransaktionen ohne Freigabe. Keine Weitergabe vertraulicher Daten. Diese Grenzen sind nicht verhandelbar und müssen explizit definiert werden, denn ein LLM hat von sich aus keine Grenzen — es versucht immer, hilfreich zu sein.

**Werte für den Graubereich:** Harte Grenzen decken klare Fälle ab. Für alles dazwischen braucht es Prinzipien: "Lieber ehrlich als hilfreich", "Informieren statt bevormunden", "Fachliche Korrektheit vor Geschwindigkeit". Diese Werte skalieren besser als endlose Regelwerke, weil sie auch in unvorhergesehenen Situationen funktionieren.

**Eskalationsregeln:** Wann gibt der Agent auf und übergibt an einen Menschen? Die Definition dieser Schwellen ist eine der kritischsten Entscheidungen. Zu früh eskalieren macht den Agenten nutzlos. Zu spät eskalieren macht ihn gefährlich.

### Wie das technisch umgesetzt wird

All das wird in einem **System Prompt** implementiert — einem Text, den das Modell vor jeder Interaktion liest. Dieser Text ist keine Nebensache. Er ist das Betriebssystem des Agenten. Ein guter System Prompt macht aus einem generischen LLM einen spezialisierten Mitarbeiter. Ein schlechter System Prompt macht aus einem leistungsfähigen Modell einen unzuverlässigen Plauderer.

Bei komplexen Agenten kommen zusätzliche Schichten dazu: Metadaten in den Wissensbausteinen, die Regeln pro Thema transportieren. Nachgelagerte Filter, die bestimmte Ausgaben blockieren. Aber die Verfassung im System Prompt bleibt die wichtigste Steuerungsebene.

### Was passiert, wenn es fehlt

Der Agent tut, was er für richtig hält. Er macht Zusagen, die das Unternehmen binden. Er gibt vertrauliche Informationen weiter, weil die Frage "plausibel" klang. Er antwortet auf eine Kundenbeschwerde im Ton eines Marketingtextes. Ohne Identität und Verfassung ist ein Agent ein unkontrolliertes Werkzeug.

### Wo die Menschen sitzen

Die Verfassung wird von Menschen geschrieben, die das Fach und die Organisation kennen. Das ist kein Technik-Job, das ist ein Governance-Job. Compliance, Fachberatung und Führung müssen gemeinsam definieren, was der Agent darf. Entwickler setzen das dann um. Und die Verfassung muss regelmäßig überprüft und angepasst werden — sie ist ein lebendes Dokument, kein einmaliges Setup.

---

## Wissen: Woher der Agent weiß, was er weiß

Ein Agent ohne eigenes Wissen ist auf das allgemeine Weltwissen seines LLMs angewiesen. Das reicht für Brainstorming und allgemeine Fragen. Es reicht nicht für organisationsspezifische Fakten, aktuelle Daten oder fachliche Tiefe.

### Zwei Arten von Wissen

**Aufgebautes Wissen (Build-Time):** Vor dem ersten Gespräch aufbereitet, redaktionell geprüft, versioniert. Das können Wissensbausteine aus einer Content-Pipeline sein, Produktdokumentation, Prozessbeschreibungen, FAQ-Sammlungen, Handbücher. Die Fachredaktion kontrolliert, was der Agent "weiß".

**Laufzeit-Wissen (Runtime):** Existiert erst im Moment der Anfrage. Ergebnisse einer Websuche, Daten aus einer API-Abfrage, der aktuelle Kalender des Nutzers, Echtzeit-Preise, Lagerbestände. Dieses Wissen kann der Agent nicht vorab haben — er muss es im Moment beschaffen.

### Das Kernprinzip: Content ist nicht Context

Website-Inhalte, Produktbroschüren, Marketing-Texte — das ist Content. Geschrieben für Menschen und Suchmaschinen. Ein LLM kann damit arbeiten, aber schlecht. Die Informationsdichte ist niedrig (Marketing-Filler), Wissen ist fragmentiert (über Dutzende Seiten verteilt), und Zusammenhänge fehlen.

Was ein Agent braucht, ist Context: strukturiert, informationsdicht, dedupliziert, mit Metadaten angereichert. Jeder Satz ein verwertbarer Fakt. Jeder Baustein beantwortet eine Frage vollständig. Die Transformation von Content zu Context ist die eigentliche Arbeit — und der Grund, warum "einfach unsere Website einlesen" selten funktioniert.

### Wie Wissen bereitgestellt wird

**Stufe 1: Context Window.** Dokumente direkt in den Prompt laden. Funktioniert für kleine Wissensmengen (unter 50 Seiten). Einfachster Ansatz, kein zusätzliches System nötig. Aber: begrenzt durch die Kontextgröße des Modells und nicht skalierbar.

**Stufe 2: Retrieval (RAG).** Eine Wissensdatenbank, die der Agent vor dem Antworten durchsucht. Die Anfrage wird in eine Suchanfrage umgewandelt, die relevantesten Wissensbausteine werden gefunden und dem Modell zusammen mit der Frage übergeben. Skaliert auf große Wissensmengen. Qualität hängt stark von der Aufbereitung der Bausteine ab.

**Stufe 3: Tool-basiertes Wissen.** Der Agent ruft aktiv Systeme auf, um Informationen zu beschaffen: eine Datenbank abfragen, eine API ansprechen, eine Websuche durchführen. Das Wissen wird nicht vorab bereitgestellt, sondern im Moment der Anfrage beschafft.

Die meisten produktiven Agenten kombinieren alle drei Stufen: Ein System Prompt mit Grundwissen (Stufe 1), eine Wissensdatenbank für Fachthemen (Stufe 2) und Tool-Zugriff für aktuelle Daten (Stufe 3).

### Was passiert, wenn es fehlt

Der Agent rät. Er nutzt sein allgemeines Trainingswissen und produziert Antworten, die plausibel klingen aber im Detail falsch sind. Falsche Beträge, erfundene Studien, veraltete Informationen, Verwechslungen mit ähnlichen Organisationen. Das Tückische: Die Antworten klingen genauso überzeugend wie korrekte Antworten.

### Wo die Menschen sitzen

Fachredakteure und Domänenexperten pflegen die Wissensbasis. Sie entscheiden, was rein darf und was nicht. Sie prüfen Aktualität. Sie schließen Lücken. Das ist keine einmalige Aufgabe — es ist laufende redaktionelle Arbeit. Die häufigste Enttäuschung bei RAG-Projekten kommt nicht von der Technik, sondern von der Erwartung, dass man "die Dokumente einmal einliest und dann läuft es".

---

## Schnittstellen: Wie der Agent die Welt erreicht

Ein LLM allein kann nur Text generieren. Schnittstellen geben dem Agenten Hände: Er kann Daten lesen, in Systeme schreiben, Aktionen auslösen, mit der Außenwelt interagieren. Ohne Schnittstellen ist ein Agent ein kluger Kopf in einem geschlossenen Raum.

### Was Schnittstellen leisten

**Lesen:** Daten aus Systemen abrufen. Kundenhistorie im CRM nachschlagen, E-Mails durchsuchen, Kalender prüfen, Dateien öffnen, Datenbanken abfragen.

**Schreiben:** Daten in Systeme eintragen. Tickets erstellen, Termine anlegen, Dokumente ablegen, Datensätze aktualisieren, E-Mail-Entwürfe erzeugen.

**Agieren:** Aktionen in externen Systemen auslösen. Eine Bestellung anstoßen, einen Workflow triggern, eine Benachrichtigung senden, ein Deployment starten.

### Wie Schnittstellen technisch funktionieren

**Function Calling / Tool Use:** Das Modell entscheidet während der Bearbeitung, dass es ein Werkzeug braucht. Es gibt einen strukturierten Aufruf aus ("Suche in der Kundendatenbank nach Kunde X"), das System führt den Aufruf aus, und das Ergebnis fließt zurück in den Denkprozess des Agenten. Das Modell plant also nicht nur, es handelt.

**MCP (Model Context Protocol):** Ein standardisiertes Protokoll, das Modellen einheitlichen Zugriff auf externe Datenquellen und Tools gibt. Statt für jedes System eine eigene Integration zu bauen, definiert MCP einen gemeinsamen Rahmen. Ein Agent mit MCP-Unterstützung kann auf Obsidian-Notizen, Google Calendar, Slack, Datenbanken und beliebige weitere Systeme zugreifen — wenn die entsprechenden MCP-Server existieren. Die Analogie: USB für KI. Ein Stecker, viele Geräte.

**APIs (Application Programming Interfaces):** Direkte Schnittstellen zu Drittsystemen. Stabiler und kontrollierbarer als MCP, aber jede Integration muss einzeln gebaut werden. In Enterprise-Umgebungen oft der bevorzugte Weg, weil die IT-Abteilung die Kontrolle behält.

### Lesen vs. Schreiben: Eine kritische Unterscheidung

Die Frage "Welche Tools hat der Agent?" reicht nicht. Die entscheidende Frage ist: **Was darf er mit diesen Tools tun?**

Ein Agent, der CRM-Daten lesen kann, ist nützlich und risikoarm. Ein Agent, der CRM-Daten ändern kann, ist mächtig und riskant. Die Unterscheidung zwischen Lese- und Schreibzugriff ist eine der wichtigsten Architekturentscheidungen. Und sie muss pro System und pro Aktion getroffen werden — nicht pauschal.

| Zugriff | Risiko | Beispiel |
|---|---|---|
| Nur lesen | Niedrig | Kundendaten nachschlagen, Kalender prüfen |
| Lesen + entwerfendes Schreiben | Mittel | E-Mail-Entwurf erstellen (aber nicht senden) |
| Lesen + echtes Schreiben | Hoch | Ticket erstellen, Datensatz ändern |
| Lesen + Schreiben + Agieren | Sehr hoch | E-Mail senden, Bestellung auslösen, Daten löschen |

**Faustregel:** Schreibzugriff nur dort, wo die Aktion reversibel ist oder ein Mensch vor der Ausführung prüft.

### ACI: Die vergessene Schnittstellen-Qualität

In Human-Computer Interfaces (HCI) investieren Unternehmen enormen Aufwand: Nutzertests, Iterationen, Design-Systeme. Die Schnittstelle zwischen Agent und Computer — das **Agent-Computer Interface (ACI)** — bekommt dagegen kaum Aufmerksamkeit. Dabei ist sie genauso kritisch.

Ein schlecht dokumentiertes Tool wird vom Agenten falsch benutzt, genau wie ein schlecht designtes UI von Menschen falsch benutzt wird. Was macht ein gutes ACI aus?

**Klare Tool-Beschreibungen:** Der Agent "liest" die Beschreibung eines Tools, bevor er es nutzt. Ist die Beschreibung vage oder mehrdeutig, nutzt er das Tool falsch. Gute Tool-Beschreibungen enthalten Beispielaufrufe, Grenzfälle, Eingabeformat-Anforderungen und klare Abgrenzung zu ähnlichen Tools.

**Eindeutige Parameter:** Parameternamen und -beschreibungen müssen selbsterklärend sein. "query" ist mehrdeutig. "customer_email_address" ist eindeutig. Je mehr Tools ein Agent hat, desto wichtiger wird die Trennschärfe.

**Fehlerresistentes Design:** Tools so bauen, dass falsche Nutzung schwer ist. Wenn der Agent mit relativen Dateipfaden Fehler macht, das Tool so umbauen, dass es nur absolute Pfade akzeptiert. Nicht den Prompt fixen — das Tool fixen. Anthropic berichtet, dass sie bei ihrem Coding-Agent mehr Zeit in die Tool-Optimierung investiert haben als in den Prompt selbst.

**Testen aus Agenten-Perspektive:** Nicht fragen "Funktioniert das Tool?" sondern "Versteht das Modell, wann und wie es dieses Tool nutzen soll?" Viele Beispiel-Inputs durchspielen, Fehler beobachten, iterieren.

Die Parallele zu HCI ist ernst gemeint: So wie schlechte UIs dazu führen, dass Menschen Fehler machen und Software nicht nutzen, führen schlechte ACIs dazu, dass Agents Fehler machen und Tools falsch nutzen. Die Tool-Definitionen verdienen genauso viel Prompt-Engineering-Aufmerksamkeit wie der System Prompt selbst.

### Was passiert, wenn Schnittstellen fehlen

Der Agent ist isoliert. Er kennt weder eure Kunden noch eure Produkte noch eure Prozesse. Alles, was er braucht, muss man ihm in den Chat kopieren. Das ist kein Agent, das ist ein Chatbot mit Copy-Paste-Workflow.

### Was passiert, wenn Schnittstellen schlecht konfiguriert sind

Schlimmer als keine Schnittstellen: falsche Schnittstellen. Ein Agent, der auf veraltete Daten zugreift, liefert falsche Antworten mit hoher Überzeugung. Ein Agent, der zu viel Schreibzugriff hat, kann Daten beschädigen. Ein Agent, der auf Systeme zugreift, die er nicht versteht, produziert sinnlose Aktionen.

### Wo die Menschen sitzen

Die IT-Architektur entscheidet, welche Systeme angebunden werden. Die Fachabteilung entscheidet, welche Daten der Agent sehen darf. Security und Compliance prüfen, ob der Zugriff den Richtlinien entspricht. Und bei jedem Schreibzugriff muss definiert werden: Wer gibt frei? Automatisch oder manuell? Was passiert bei Fehlern?

Ein oft unterschätzter Aufwand: Die Tool-Dokumentation selbst. Jemand muss die Tool-Beschreibungen so schreiben, dass das Modell sie zuverlässig nutzen kann. Das ist weder ein reiner Entwickler-Job noch ein reiner Fach-Job — es braucht beides: Verständnis für das System und Verständnis dafür, wie LLMs Anweisungen interpretieren.

---

## Skills: Wie der Agent arbeiten soll

Schnittstellen geben dem Agenten die Fähigkeit zu handeln. Skills sagen ihm, *wie* er handeln soll. Ohne Skills improvisiert der Agent bei jeder Aufgabe — manchmal gut, manchmal schlecht, nie vorhersagbar.

### Was ein Skill ist

Ein Skill ist eine definierte Arbeitsanweisung: Welche Schritte, in welcher Reihenfolge, mit welchen Werkzeugen, nach welchen Qualitätskriterien. Im einfachsten Fall ist ein Skill ein Text im System Prompt: "Wenn du einen Blog-Post schreiben sollst, lies zuerst die Voice-Reference, dann den Themen-Guide, dann recherchiere im Knowledge-Ordner." Im komplexeren Fall ist es ein formalisierter Workflow mit Entscheidungspunkten.

### Skills vs. Improvisation

| Aspekt | Ohne Skills (Improvisation) | Mit Skills (definierte Abläufe) |
|---|---|---|
| Qualität | Schwankend — mal gut, mal schlecht | Konsistent — reproduzierbar |
| Kontrolle | Unklar, was der Agent tut | Nachvollziehbar, debuggbar |
| Skalierung | Funktioniert vielleicht für einen Nutzer | Funktioniert für hunderte Nutzer |
| Verbesserung | Schwer — wo optimiert man, wenn jeder Durchlauf anders ist? | Gezielt — man kann jeden Schritt einzeln verbessern |
| Einarbeitung | Jede neue Aufgabe ist ein Experiment | Neue Aufgaben folgen bewährten Mustern |

### Skill-Granularität

Skills können auf verschiedenen Ebenen definiert werden:

**Mikro-Skills:** Einzelne Teilschritte. "Wenn du eine Quelle zitierst, nenne immer Autor, Jahr und Titel." Granular, einfach zu definieren, einfach zu testen.

**Makro-Skills:** Ganze Workflows. "Um einen Research-Report zu erstellen: 1) Recherchiere in drei Quellen, 2) Extrahiere Kernaussagen, 3) Vergleiche und bewerte, 4) Strukturiere den Bericht nach Template X, 5) Füge Quellenverzeichnis hinzu." Komplex, aber mächtig.

**Meta-Skills:** Entscheidungen über Skills. "Wenn die Anfrage ein Einzeiler ist, nutze den Quick-Response-Skill. Wenn sie komplex ist, nutze den Deep-Research-Skill." Die Fähigkeit, den richtigen Ansatz für die Situation zu wählen.

### Was passiert, wenn Skills fehlen

Jeder Durchlauf ist anders. Ergebnisse sind nicht reproduzierbar. Man kann nicht messen, ob der Agent "besser" oder "schlechter" wird, weil es keinen definierten Prozess gibt, gegen den man messen könnte. Für einmalige, explorative Aufgaben ist das akzeptabel. Für wiederkehrende Geschäftsprozesse ist es ein Problem.

### Wo die Menschen sitzen

Prozessexperten und Power User definieren die Skills. Sie wissen, wie die Aufgabe "richtig" gemacht wird, und übersetzen das in Anweisungen, die der Agent befolgen kann. Das ist Wissensarbeit — und sie erfordert sowohl Domänenkenntnis als auch ein Verständnis dafür, wie LLMs Anweisungen interpretieren. Skills müssen getestet, überarbeitet und versioniert werden, genau wie Software.

---

## Architektur-Patterns: Das Spektrum der Orchestrierung

Zwischen einem einzelnen LLM-Aufruf und einem voll autonomen Agenten liegt ein breites Spektrum von Architekturmustern. In der Praxis nutzen die meisten produktiven Systeme nicht den vollen Agenten, sondern einen der Zwischenschritte. Das Verständnis dieser Patterns ist entscheidend für die richtige Architekturentscheidung.

Die Unterscheidung: **Workflows** sind Systeme, in denen LLMs und Tools durch vordefinierte Abläufe orchestriert werden. **Agents** sind Systeme, in denen das LLM selbst bestimmt, welche Schritte es wann ausführt. Beides sind agentische Systeme — aber mit fundamental unterschiedlicher Kontrollstruktur.

### Pattern 1: Prompt Chaining (Sequentielle Kette)

Eine Aufgabe wird in eine feste Abfolge von Schritten zerlegt. Jeder Schritt ist ein eigener LLM-Aufruf. Das Ergebnis eines Schritts fließt als Input in den nächsten. Zwischen den Schritten können programmatische Prüfungen eingebaut werden.

**Wann sinnvoll:** Wenn die Aufgabe klar in Teilschritte zerlegbar ist und die Reihenfolge feststeht. Das Ziel ist höhere Genauigkeit durch einfachere Einzelschritte — auf Kosten von Latenz.

**Beispiel:** Marketing-Text generieren → auf Markenkonformität prüfen → in drei Sprachen übersetzen. Oder: Gliederung erstellen → Gliederung gegen Kriterien prüfen → Dokument auf Basis der Gliederung schreiben.

### Pattern 2: Routing (Klassifikation + Spezialisierung)

Der Input wird zunächst klassifiziert und dann an einen spezialisierten Folgeprozess weitergeleitet. Das ermöglicht getrennte, optimierte Prompts für verschiedene Aufgabentypen — statt eines Generalisten-Prompts, der bei Spezialfällen schwächelt.

**Wann sinnvoll:** Wenn verschiedene Eingabetypen unterschiedliche Behandlung brauchen und die Klassifikation zuverlässig funktioniert.

**Beispiel:** Kundenservice-Anfragen → Routing nach Typ (allgemeine Frage / Rückerstattung / technischer Support) → jeweils spezialisierter Prompt mit passenden Tools. Oder: Einfache Fragen → kleines, günstiges Modell; komplexe Fragen → leistungsfähiges Modell.

**Verbindung zur Anatomie:** Routing ist im Kern eine Intentionserkennung — der Sensor in einer vereinfachten Form. Der Agent erkennt die Art der Anfrage und wählt den passenden Pfad.

### Pattern 3: Parallelisierung (Gleichzeitige Verarbeitung)

Mehrere LLM-Aufrufe arbeiten gleichzeitig an derselben oder an Teilen einer Aufgabe. Zwei Varianten:

**Sectioning:** Die Aufgabe wird in unabhängige Teilaufgaben zerlegt, die parallel bearbeitet werden. Beispiel: Ein LLM bearbeitet die Nutzeranfrage, während ein zweites parallel die Anfrage auf problematische Inhalte prüft (Guardrails). Oder: Mehrere Aspekte einer Evaluation werden parallel von verschiedenen LLM-Instanzen bewertet.

**Voting:** Dieselbe Aufgabe wird mehrfach ausgeführt, um durch verschiedene Perspektiven oder Versuche höhere Konfidenz zu erreichen. Beispiel: Code wird von mehreren Prompts parallel auf Sicherheitslücken geprüft. Oder: Inhalt wird von mehreren Prompts parallel auf Angemessenheit bewertet, mit unterschiedlichen Schwellwerten.

**Wann sinnvoll:** Wenn Geschwindigkeit zählt (Sectioning) oder wenn mehrere Perspektiven die Qualität erhöhen (Voting).

### Pattern 4: Orchestrator-Workers (Dynamische Delegation)

Ein zentrales LLM (der Orchestrator) zerlegt eine Aufgabe dynamisch, delegiert Teilaufgaben an Worker-LLMs und synthetisiert deren Ergebnisse. Der Unterschied zur Parallelisierung: Die Teilaufgaben stehen nicht vorab fest, sondern werden vom Orchestrator basierend auf dem konkreten Input bestimmt.

**Wann sinnvoll:** Bei komplexen Aufgaben, bei denen die Teilschritte nicht vorhersagbar sind.

**Beispiel:** Coding-Agent, der für eine Aufgabe mehrere Dateien ändern muss — welche Dateien und welche Änderungen hängt vom konkreten Task ab. Oder: Recherche-Agent, der aus mehreren Quellen Informationen sammelt und synthetisiert.

**Verbindung zur Anatomie:** Das Orchestrator-Workers-Pattern ist die Brücke zwischen Workflow und echtem Agent. Der Orchestrator plant (wie ein Agent), aber die Workers führen vordefiniert aus (wie ein Workflow).

### Pattern 5: Evaluator-Optimizer (Generieren + Bewerten im Loop)

Ein LLM generiert eine Antwort. Ein zweites LLM bewertet die Antwort und gibt Feedback. Basierend auf dem Feedback wird die Antwort überarbeitet. Dieser Zyklus wiederholt sich, bis die Qualität stimmt.

**Wann sinnvoll:** Wenn klare Bewertungskriterien existieren und iterative Verbesserung messbaren Mehrwert bringt. Zwei gute Signale: Erstens, menschliches Feedback verbessert LLM-Ausgaben erkennbar. Zweitens, ein LLM kann solches Feedback geben.

**Beispiel:** Literarische Übersetzung — Erst-Übersetzung, dann Evaluierung auf Nuancen, dann Überarbeitung. Oder: Komplexe Recherche — Erste Suche, Bewertung der Vollständigkeit, weitere Suchen bei Lücken.

### Wann welches Pattern?

| Situation | Pattern | Warum |
|---|---|---|
| Klar zerlegbare Aufgabe, feste Reihenfolge | Prompt Chaining | Einfach, vorhersagbar, debuggbar |
| Verschiedene Eingabetypen, brauchen verschiedene Behandlung | Routing | Spezialisierung schlägt Generalismus |
| Geschwindigkeit zählt oder mehrere Perspektiven nötig | Parallelisierung | Parallel statt sequentiell |
| Komplexe Aufgabe, Teilschritte nicht vorhersagbar | Orchestrator-Workers | Dynamische Zerlegung |
| Iterative Qualitätsverbesserung messbar | Evaluator-Optimizer | Feedback-Loop |
| Offene Aufgabe, Weg zum Ziel unklar, viele Schritte | Voller Agent (ReAct) | Maximale Flexibilität |

**Die meisten produktiven Systeme kombinieren Patterns.** Ein Kundenservice-System kann Routing für die Klassifikation nutzen, Prompt Chaining für die Antwortgenerierung und Parallelisierung für die Guardrails. Nur die komplexesten Fälle brauchen einen vollen Agenten.

**Der häufigste Fehler:** Sofort mit dem vollen Agenten anfangen, wenn ein Workflow-Pattern reichen würde. Workflows sind vorhersagbarer, günstiger und einfacher zu debuggen. Agents sind für das, was Workflows nicht können — nicht für das, was "Agent" im Pitch besser klingt als "Workflow".

---

# Teil 2: Wie der Agent arbeitet

Die bisherigen Abschnitte beschreiben, was existieren muss. Jetzt: Was passiert, wenn eine Anfrage kommt. Der Agent-Loop wird konkret.

---

## Eine Anfrage trifft ein

Alles beginnt mit einem Input. Ein Mensch gibt ein Ziel ein, ein System triggert einen Workflow, eine E-Mail kommt rein. Der Agent hat jetzt eine Aufgabe.

### Verstehen: Was wird eigentlich gebraucht?

Die wörtliche Anfrage ist selten die ganze Geschichte. "Was zahlt die Kasse für einen Pflegedienst?" ist die Frage. Das Bedürfnis dahinter kann Leistungsklärung sein (will Zahlen), Angehörigen-Sorge (ist überfordert und braucht Orientierung) oder akute Krise (die Mutter ist gerade gestürzt).

Bei einfachen Agents — einem Code-Assistenten, einem Recherchetool — ist die Unterscheidung weniger kritisch. Der Mensch sagt, was er will, und der Agent liefert. Aber bei Agents, die mit Kunden, Patienten oder Bürgern interagieren, wird die Intentionserkennung zur Kernkompetenz. Ein Agent, der die Situation nicht erkennt, antwortet technisch korrekt aber am Menschen vorbei.

**Wie das technisch funktioniert:** Das Modell analysiert die Anfrage und erkennt Signale — Wortwahl, Dringlichkeit, Kontext aus früheren Nachrichten. Im einfachsten Fall ist das implizit (das LLM "versteht" die Situation aufgrund seines Trainings). Im ausgebauten Fall wird die Intentionserkennung explizit gemacht: ein definiertes Vokabular von Bedürfnissen, das der Agent pro Anfrage prüft und das alle weiteren Schritte steuert.

**Wo die Menschen sitzen:** Domänenexperten definieren das Intentionsvokabular. Sie kennen ihre Zielgruppe und wissen, mit welchen Bedürfnissen Menschen kommen. UX-Designer definieren, wie die erkannte Intention das Verhalten des Agenten beeinflusst.

---

## Planen: Welche Schritte sind nötig?

Nachdem der Agent die Anfrage verstanden hat, plant er sein Vorgehen. Das unterscheidet ihn fundamental von einem Chatbot. Ein Chatbot antwortet direkt. Ein Agent überlegt erst: Was muss ich wissen? Welche Tools brauche ich? In welcher Reihenfolge gehe ich vor?

**Bei einfachen Aufgaben** ist die Planung trivial: "Der Nutzer will eine Zusammenfassung. Ich lese das Dokument und fasse zusammen." Ein Schritt, keine echte Planung nötig.

**Bei komplexen Aufgaben** wird die Planung zum Kern: "Der Nutzer will eine Wettbewerbsanalyse. Ich muss: 1) Die Wettbewerber identifizieren, 2) Für jeden Daten recherchieren, 3) Die Daten vergleichen, 4) Stärken und Schwächen bewerten, 5) Einen Bericht strukturieren." Fünf Schritte, die aufeinander aufbauen, und der Agent muss selbst entscheiden, wie er vorgeht.

**Das Risiko schlechter Planung:** Wenn der Agent im zweiten Schritt merkt, dass sein Plan nicht aufgeht, muss er umplanen können. Starre Pläne scheitern an der Realität. Gute Agents planen, führen einen Schritt aus, prüfen das Ergebnis und passen den Plan an — ein iterativer Zyklus, kein linearer Ablauf.

---

## Wissen abrufen: Was sagen unsere Quellen?

Bevor der Agent handelt, beschafft er die nötigen Informationen. Hier kommt alles zusammen, was im Teil "Wissen" beschrieben wurde:

- Der System Prompt liefert Grundwissen und Kontext
- Die Wissensdatenbank (RAG) wird durchsucht und liefert relevante Bausteine
- Tools werden aufgerufen, um aktuelle Daten zu beschaffen
- Frühere Nachrichten im Gespräch liefern Kontext zur aktuellen Situation

**Die Qualität dieses Schritts bestimmt die Qualität der Antwort.** Wenn der Agent die falschen Bausteine findet, antwortet er auf Basis falscher Informationen — mit voller Überzeugung. Wenn er keine relevanten Bausteine findet, fällt er auf sein allgemeines Weltwissen zurück und beginnt zu halluzinieren. Gutes Retrieval ist kein Technik-Detail, es ist die Voraussetzung für Zuverlässigkeit.

---

## Handeln: Der Agent führt aus

Mit Plan und Wissen ausgestattet, handelt der Agent. Er ruft Tools auf, generiert Inhalte, schreibt Code, erstellt Dokumente, füllt Formulare, durchsucht Datenbanken — was immer nötig ist.

### Der Agent-Loop (ReAct)

Die meisten Agents arbeiten nicht in einem einzigen Schritt, sondern in einem Zyklus:

```
Denken → Handeln → Beobachten → Denken → Handeln → Beobachten → ...
```

Das Modell denkt: "Ich brauche die Kundendaten." Es handelt: CRM-Abfrage. Es beobachtet: Daten kommen zurück. Es denkt: "Der Kunde hat Vertrag Y. Jetzt brauche ich die Konditionen." Es handelt: Vertragsdatenbank abfragen. Und so weiter.

Dieser Zyklus ist der Kern jedes Agenten. Er ist mächtig, weil er dem Agenten erlaubt, auf Zwischenergebnisse zu reagieren. Und er ist riskant, weil Fehler in frühen Schritten sich durch alle folgenden Schritte ziehen. Ein falsches Ergebnis in Schritt 2 kann den gesamten Ablauf in eine falsche Richtung lenken.

Entscheidend ist, dass der Agent an jedem Schritt **Feedback aus der Umgebung** erhält — Tool-Ergebnisse, Code-Ausführung, API-Antworten. Dieses Feedback ist der "Ground Truth", anhand dessen der Agent seinen Fortschritt bewertet. Ein Agent, der nur denkt aber keine realen Ergebnisse prüft, plant im Blindflug.

### Was der Agent zwischen den Schritten verliert

Jeder Tool-Aufruf und jede Zwischenüberlegung verbraucht Platz im Kontextfenster des Modells. Bei langen Aufgaben mit vielen Schritten kann der Agent den Anfang des Gesprächs vergessen, während er am Ende arbeitet. Gute Agent-Architekturen managen dieses Kontextfenster aktiv: zusammenfassen, priorisieren, ältere Details auslagern.

### Stopping Conditions: Wann hört der Agent auf?

Ein oft übersehener Aspekt: Ein Agent braucht Abbruchbedingungen. Ohne sie kann er endlos iterieren — und dabei Kosten produzieren, ohne voranzukommen. Typische Stopping Conditions sind eine maximale Anzahl von Iterationen, ein Zeitlimit, das Erreichen eines definierten Erfolgskriteriums, oder die Erkenntnis, dass er nicht weiterkommt und an einen Menschen eskalieren muss.

---

## Prüfen: Gegen die Verfassung

Bevor die Antwort beim Menschen ankommt, wird sie gegen die Verfassung geprüft — die Identität, die harten Grenzen, die Werte. Macht der Agent eine Zusage, die er nicht machen darf? Gibt er Informationen weiter, die vertraulich sind? Stellt er Diagnosen, obwohl er nur informieren darf?

Diese Prüfung passiert auf mehreren Ebenen:

**Im Modell selbst:** Der System Prompt instruiert das Modell, bestimmte Dinge nicht zu tun. Das funktioniert überraschend gut — aber nicht perfekt. Ein gut formulierter System Prompt reduziert Verstöße drastisch, eliminiert sie aber nie vollständig.

**In den Metadaten der Wissensbausteine:** Wenn ein Baustein die Regel "Keine individuellen Beträge nennen, nur Spannen" mitbringt, kann das Modell diese Regel pro Thema beachten.

**In nachgelagerten Filtern:** Technische Systeme, die die Ausgabe des Agenten prüfen, bevor sie den Nutzer erreicht. Enthält die Antwort personenbezogene Daten? Macht sie eine verbotene Zusage? Solche Filter sind die letzte Sicherheitsebene.

**Parallelisiert als Guardrail:** Eine besonders effektive Variante aus der Praxis: Ein separates Modell prüft parallel die Ausgabe des Hauptmodells auf Verstöße. Statt die Prüfung dem Agenten selbst aufzuladen, trennt man Generierung und Kontrolle. Das funktioniert besser als wenn dasselbe Modell beides gleichzeitig leisten soll.

---

## Formulieren: Wie die Antwort ankommt

Dieselbe Information kann auf hundert verschiedene Arten kommuniziert werden. Ausführlich oder kompakt. Empathisch oder sachlich. Als Fließtext oder als Tabelle. Proaktiv mit Zusatzinformationen oder strikt auf die Frage beschränkt.

### Vier Stellschrauben der Kommunikation

**Tonalität:** Wie klingt die Antwort? Beruhigend, sachlich, motivierend? Bei einem Kunden, der sich beschwert, ist empathische Sachlichkeit angebracht. Bei einem Entwickler, der einen Bug sucht, ist nüchterner Klartext besser.

**Informationstiefe:** Wie viel Detail? Ein gestresster Mensch braucht eine kurze Antwort mit einer klaren Handlungsempfehlung. Ein Analyst braucht alle Daten mit Quellen.

**Proaktivität:** Bietet der Agent ungefragt Zusatzinformationen an? "Übrigens: Es gibt auch einen Entlastungsbetrag, den viele nicht kennen." Proaktivität macht einen Agenten nützlicher — aber zu viel davon überflutet.

**Format:** Chat-Nachricht, E-Mail-Entwurf, strukturierter Report, Wizard mit Schritten, Push-Nachricht mit einem Satz? Das Medium bestimmt die Form.

### Was passiert, wenn die Kommunikation nicht gestaltet wird

Der Agent antwortet immer gleich — unabhängig von der Situation des Empfängers. Ein gestresster Elternteil bekommt dieselbe Textwand wie ein entspannter Rechercheur. Die Information mag korrekt sein, aber sie kommt nicht an.

### Wo die Menschen sitzen

UX-Designer und Kommunikationsexperten definieren die Kommunikationsregeln. Sie entscheiden, wie der Agent in verschiedenen Situationen klingen soll. Das ist kein einmaliges Setup — es wird mit echten Nutzern getestet und iteriert. Die beste Verfassung nützt nichts, wenn die Antwort am Menschen vorbeigeht.

---

## Iterieren: Lernen und Verbessern

Die Arbeit eines Agenten endet nicht mit der Antwort. In produktiven Systemen gibt es einen Rückkanal:

**Feedback auf einzelne Antworten:** Nutzer bewerten Antworten. Diese Bewertungen zeigen, wo der Agent gut ist und wo er versagt.

**Monitoring über viele Interaktionen:** Welche Fragen stellt der Agent zurück? Wo eskaliert er? Welche Themen produzieren häufig schlechte Bewertungen? Diese Muster zeigen, wo die Wissensbasis Lücken hat, wo Skills fehlen, wo die Verfassung zu eng oder zu weit ist.

**Gedächtnis über Sessions hinweg:** Manche Agents speichern Kontext aus früheren Gesprächen. Der Agent weiß beim nächsten Mal, welchen Pflegegrad die Mutter hat, und muss nicht erneut fragen. Das verbessert die Nutzererfahrung, erfordert aber Datenschutz-Entscheidungen.

---

# Teil 3: Wie alles zusammenspielt

Die einzelnen Aspekte sind erklärbar. Das Zusammenspiel macht es komplex. Hier ein vollständiger Durchlauf:

---

## Eine Anfrage durch den Motor

**Anfrage:** "Unsere Conversion-Rate ist um 15% eingebrochen. Finde heraus warum und schlage Maßnahmen vor."

### 1. Verstehen

Der Agent erkennt: Das ist keine einfache Frage, sondern ein Analyse-Auftrag. Der Tonfall ist dringend ("eingebrochen"). Es braucht Daten, Interpretation und Handlungsempfehlungen.

### 2. Planen

"Ich brauche: 1) Die aktuellen Conversion-Daten aus dem Analytics-System, 2) Einen Vergleich mit dem Vormonat, 3) Traffic-Quellen-Analyse, 4) Mögliche Ursachen identifizieren, 5) Maßnahmen formulieren."

### 3. Wissen abrufen + Handeln

Der Agent ruft das Analytics-Tool auf (Schnittstelle), extrahiert die Conversion-Daten (Lesen), vergleicht Zeiträume, prüft Traffic-Quellen. Er stellt fest: Der Traffic ist stabil, aber die Mobile-Conversion ist eingebrochen. Er prüft: Gab es kürzlich eine Website-Änderung? Er ruft das CMS-Changelog auf (weitere Schnittstelle). Findet: Vor 10 Tagen wurde der Checkout-Prozess auf Mobile umgebaut.

### 4. Gegen Verfassung prüfen

Der Agent hat Skills für Analyse-Reports (Skill). Er formuliert Ergebnisse. Er prüft: Enthält der Report vertrauliche Daten, die nicht in eine E-Mail gehören? (Verfassung) Nein, es sind aggregierte Daten. Darf er Maßnahmen "empfehlen" oder nur "vorschlagen"? (Verfassung: keine bindenden Empfehlungen bei Business-Entscheidungen, sondern Optionen mit Abwägung).

### 5. Formulieren

Der Agent weiß aus dem Kontext: Der Empfänger ist ein Marketing-Lead, keine technische Rolle. Er formuliert den Report mit klarer Ursache-Wirkung-Argumentation, nicht mit technischen Metriken. Er bietet drei Maßnahmen an, jeweils mit geschätztem Aufwand und erwartetem Impact.

### 6. Menschliche Prüfung

Der Report wird als Entwurf bereitgestellt. Der Marketing-Lead prüft, ergänzt internen Kontext ("Das war der A/B-Test von Team X"), und gibt die finale Version an die Geschäftsführung weiter.

---

## Das Zusammenspiel visuell

```
ANFRAGE
  ↓
[Verstehen] ← Intentionserkennung: Was wird wirklich gebraucht?
  ↓
[Planen] ← Skills + Pattern-Wahl: Welcher Ablauf, welche Architektur?
  ↓
[Wissen abrufen] ← Wissensbasis + Schnittstellen: Was weiß ich, was muss ich holen?
  ↓
[Handeln] ← Schnittstellen + ACI: Tools aufrufen, Daten lesen, Aktionen ausführen
  ↓
  ↑ (Agent-Loop: Denken → Handeln → Beobachten → Denken → ...)
  ↓
[Prüfen] ← Verfassung + Guardrails: Darf ich das? Stimmt das?
  ↓
[Formulieren] ← Kommunikation: Ton, Tiefe, Format für diesen Menschen
  ↓
[Mensch prüft] ← Human-in-the-Loop: An definierten Stellen oder am Ende
  ↓
ERGEBNIS
```

### Was dieses Bild zeigt

Kein einzelner Baustein arbeitet isoliert. Die Verfassung durchzieht alles — sie bestimmt, welche Intentionen der Agent erkennen darf, welches Wissen er nutzen darf, welche Tools er aufrufen darf, wie er formulieren darf. Die Skills steuern den Ablauf, die Schnittstellen ermöglichen das Handeln, das Wissen liefert die Substanz, und die Kommunikation formt das Ergebnis.

---

## Die Menschenfrage: Wer macht was?

Menschen sind nicht nur "am Ende" beteiligt. Sie sind an jeder Stelle präsent — in unterschiedlichen Rollen.

### Aufbau-Phase (Build-Time)

| Aufgabe | Wer | Was genau |
|---|---|---|
| Verfassung definieren | Compliance + Fachberatung + Führung | Grenzen, Werte, Eskalationsregeln |
| Wissen aufbereiten | Fachredaktion + Domänenexperten | Content-to-Context-Pipeline, Qualitätssicherung |
| Schnittstellen konfigurieren | IT + Security + Fachabteilung | Welche Systeme, welcher Zugriff, welche Rechte |
| Tool-Interfaces designen | Entwickler + Fachexperten | ACI: Tool-Beschreibungen, Parameter, Dokumentation |
| Skills definieren | Prozessexperten + Power User | Arbeitsanweisungen, Workflows, Templates |
| Architektur-Pattern wählen | Architekten + Fachberatung | Workflow vs. Agent, welche Patterns, welche Kombination |
| Kommunikation gestalten | UX + Kommunikation | Tonalität, Formate, Situationsprofile |

### Betriebs-Phase (Runtime)

| Aufgabe | Wer | Was genau |
|---|---|---|
| Ergebnisse prüfen | Fachkräfte, Sachbearbeiter | Qualitätskontrolle vor Freigabe |
| Eskalationen bearbeiten | Fachmitarbeiter | Fälle, die der Agent nicht lösen kann |
| Monitoring | Operations + QA | Muster erkennen, Qualität messen |
| Wissen aktualisieren | Fachredaktion | Neue Inhalte, veraltete Inhalte austauschen |
| Tools + ACIs verbessern | Entwickler | Basierend auf Fehleranalyse der Tool-Nutzung |
| Skills verbessern | Prozessexperten | Basierend auf Monitoring und Feedback |

### Die häufigste Fehleinschätzung

"Wir bauen einen Agenten und dann läuft er." Nein. Ein Agent ist kein Projekt mit Abschluss. Er ist ein System mit laufendem Betrieb. Die Build-Phase ist vielleicht 30% des Aufwands. 70% sind Betrieb, Pflege und Verbesserung.

---

# Was das für Entscheidungen bedeutet

Wer nach dieser Anatomie einen Agent-Pitch bewertet, kann präzise Fragen stellen:

- **Verfassung:** "Wie definieren wir, was der Agent darf und was nicht? Wer pflegt das?"
- **Wissen:** "Woher kommt das Wissen? Wer hält es aktuell? Was passiert, wenn er etwas nicht weiß?"
- **Schnittstellen:** "Auf welche Systeme greift er zu? Lesen oder auch Schreiben? Wie gut sind die Tool-Interfaces designt?"
- **Skills:** "Folgt er definierten Abläufen oder improvisiert er? Wie messen wir Konsistenz?"
- **Architektur:** "Brauchen wir wirklich einen vollen Agenten — oder reicht ein Workflow-Pattern? Welches?"
- **Verstehen:** "Erkennt er die Situation des Nutzers oder reagiert er nur auf Wörter?"
- **Kommunikation:** "Passt die Antwort zur Situation des Empfängers? Wer definiert das?"
- **Menschen:** "Welche Rollen brauchen wir im Betrieb? Was kostet der laufende Aufwand?"

Das sind die Fragen, die den Unterschied machen zwischen einem Agent-Projekt, das funktioniert, und einem, das nach drei Monaten eingestellt wird.

---

## Verknüpfungen

### Konzeptionelle Grundlagen
- [[Assistenz-Architektur]] – Das SAVA-Framework: Sensor, Gedächtnis, Kompass, Stimme
- [[KI-Agents-Grundlagen]] – Definition, Agent-Loop, Autonomie-Falle
- [[GenAI-Stack-Erklaermodell]] – Die 4 Ebenen: Modell → Tool → Erweiterungen → Arbeitsweise

### Wissen und Context
- [[Content-ist-nicht-Context]] – Warum Website-Content nicht für LLMs taugt
- [[Gedaechtnis-Context-Engineering]] – Context Engineering im Detail
- [[Kontextdimensionen]] – Was einen vollständigen Wissensbaustein ausmacht
- [[RAG]] – Technische Umsetzung von Retrieval Augmented Generation

### Verfassung und Steuerung
- [[Kompass-Verfassung]] – Verfassung im Detail: Hierarchie, Constraints, Werte, Prüfsteine
- [[Verfassung-vs-Regelwerk]] – Warum Werte besser skalieren als Regeln

### Verstehen und Kommunizieren
- [[Sensor-Intentionserkennung]] – Intentionserkennung im Detail
- [[Intentionen-3-Ebenen]] – Intention → Handlung → Wirkung
- [[Stimme-Kommunikation]] – Kommunikationssteuerung im Detail

### Implementierung
- [[Sensor-Implementierung]] – Technische Umsetzung des Sensors
- [[Gedaechtnis-Implementierung]] – Technische Umsetzung des Gedächtnisses
- [[Kompass-Implementierung]] – Technische Umsetzung des Kompasses
- [[Stimme-Implementierung]] – Technische Umsetzung der Stimme

### Seminar und Beratung
- [[Prozessbewertung-Agent-Einsatz]] – Welcher Einsatztyp für welchen Prozess
- [[Agent-UseCases-nach-Einsatztyp]] – Konkrete Use Cases nach Typ
- [[Halluzinationen-und-Zuverlaessigkeit]] – Was passiert ohne Grounding

### Externe Referenzen
- [Building effective agents (Anthropic, 2024)](https://www.anthropic.com/engineering/building-effective-agents) – Architektur-Patterns und Simplizitätsprinzip aus Anthropics Praxis

---

*Grundlagenreferenz. Entwickelt aus eigener Beratungs- und Implementierungspraxis 2025/2026. Ergänzt um Architektur-Patterns aus Anthropics "Building effective agents". Branchenunabhängig übertragbar.*

---
title: Teil 7 — Prüfstand
type: guide
status: draft
created: '2026-04-28'
updated: '2026-04-28'
tags:
  - agents
  - leitfaden
  - ultimate-leitfaden
  - pruefstand
  - evals
  - monitoring
  - guardrails
  - harness
  - qualitaetssicherung
sources:
  - 'self-authored:loschke:enterprise-ai-agents'
area: ai-agents
audience:
  - fuehrungskraft
  - entscheider
  - compliance
  - konzepter
  - entwickler
level: basic-to-advanced
intent:
  - verstehen
  - einordnen
  - anwenden
  - bewerten
contains:
  - concept
  - framework
  - method
  - argument
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Teil 7 — Prüfstand

*Status: 7.1 ✅ · 7.2 ✅ · 7.3 ✅ · 7.4 ✅ · 7.5 ✅ · 7.6 ✅ · 7.7 ✅ · 7.8 ✅ · 7.9 ✅ · 7.10 ✅*

---

Der Prüfstand ist die zweite Querschnittsschicht. Er liegt unter den drei Reihen-Bausteinen und beobachtet sie kontinuierlich. Er ist die Stelle, an der aus einem *„läuft"* ein *„funktioniert"* wird — und ohne ihn ist kein Agent produktionsreif.

Das klingt hart, ist aber nicht übertrieben. Ein autonomes System, das man nicht systematisch beobachten und bewerten kann, ist kein produktionsreifes System. Punkt. LLMs halluzinieren. Sie driften. Sie überschätzen sich selbst. Modelle werden upgedatet, Prompts werden geändert, Werkzeuge ändern ihre APIs. Ohne Prüfstand merkt das niemand — bis ein Fall in der Zeitung steht.

---

## 7.1 Warum der Prüfstand nicht verzichtbar ist

Wer einen Agenten baut, kommt durch eine Phase, in der manuelles Testen, Dogfooding und Bauchgefühl reichen. Das funktioniert erstaunlich lange. Der Bruch kommt, wenn der Agent in Produktion ist und die ersten Veränderungen kommen. Ein neues Modell. Ein angepasster Prompt. Ein zusätzlicher Skill. Plötzlich melden Nutzer, dass *„etwas anders ist"* — schlechter, manchmal auch unklar wie. Ohne Prüfstand fliegt man dann blind. Man kann nicht unterscheiden, ob es eine echte Regression ist oder nur Rauschen. Man kann nicht systematisch prüfen, ob die Änderung an Stelle X die Stelle Y nicht beschädigt hat.

Der Prüfstand löst das, indem er das, was sonst diffus bleibt, *messbar* macht. Aus *„der Agent fühlt sich schlechter an"* wird *„die Pass-Rate für Anspruchsklärung ist von 92 auf 81 Prozent gefallen"*. Aus *„wir testen mal"* wird *„hundert definierte Testfälle laufen vor jeder Änderung automatisch durch"*.

Es gibt einen zweiten Effekt, der oft erst später wertvoll wird: Wer Evals hat, kann neue Modelle in Tagen einsetzen statt in Wochen. Ein neues Claude-, GPT- oder Llama-Release lässt sich gegen die bestehende Suite laufen lassen, die Schwächen sind sofort sichtbar, die Migration entscheidbar. Wer keine Evals hat, muss alles manuell durchspielen.

Der Aufwand für den Prüfstand fällt vorne an. Der Nutzen kommt über die Zeit. Genau das macht ihn so leicht zu unterschätzen.

---

## 7.2 Was zum Prüfstand gehört

Der Prüfstand ist nicht eine Sache, sondern ein Bündel. Sechs Komponenten arbeiten zusammen:

| Komponente | Funktion |
|---|---|
| **Evals** | Systematische Tests gegen definierte Erwartungen — der Kern. |
| **Logs und Tracing** | Was hat der Agent wann mit welchem Reasoning getan? Vollständige Aufzeichnung jedes Durchlaufs. |
| **Monitoring** | Wie verhält sich der Agent in Produktion? Drift, Fehler, Latenz, Kosten. |
| **Guardrails (technisch)** | Harte technische Schutzmaßnahmen: Rate Limits, Output-Filter, Inhaltskontrolle. |
| **Versionierung** | Was wurde wann an Prompt, Modell, Werkzeugen, Skills geändert? |
| **Wartung** | Updates an der Suite selbst, Retests, Anpassungen, kuratierte Pflege. |

Die ersten drei Komponenten erzeugen Signal, die nächsten drei stabilisieren das System darum. Allen gemeinsam ist: Sie sind keine einmalige Investition, sondern ein Dauerlauf. Ein Prüfstand, der nach dem Launch nicht mehr gepflegt wird, ist nach drei Monaten Papier.

---

## 7.3 Evals — der Kern

Eine Eval ist im Grunde einfach: Eingabe rein, Agent läuft, Ergebnis raus, eine Bewertungslogik vergleicht das Ergebnis mit dem Erwarteten, das Ergebnis ist *bestanden* oder *nicht bestanden*. Klingt wie Software-Testing, ist es im Geist auch — nur mit einer wichtigen Eigenheit: Der Agent gibt jedes Mal etwas leicht anderes zurück.

### Vokabular, das man vor dem Mitreden braucht

Wer mit Evals arbeitet, stößt auf eine Handvoll Begriffe, die sich in der Branche eingebürgert haben.

- **Aufgabe** (englisch: *task* oder *test case*) — ein einzelner Testfall mit Eingaben und Erfolgskriterien.
- **Durchlauf** (englisch: *trial*) — ein konkreter Versuch des Agenten, eine Aufgabe zu lösen. Weil das Ergebnis variieren kann, läuft eine Aufgabe oft mehrfach durch.
- **Bewerter** (englisch: *grader*) — die Logik, die das Ergebnis prüft. Eine Aufgabe kann mehrere Bewerter haben, die verschiedene Dimensionen prüfen.
- **Aufzeichnung** (englisch: *transcript* oder *trace*) — die vollständige Spur eines Durchlaufs: jeder Tool-Call, jede Zwischenüberlegung, jedes Ergebnis. Hier sieht man später, *warum* etwas geklappt hat oder nicht.
- **Endergebnis** (englisch: *outcome*) — der Zustand der Welt am Ende des Durchlaufs. Im Pflege-Antrags-Kontext: nicht ob der Agent *„Antrag ist gestellt"* sagt, sondern ob der Antrag im Backend tatsächlich existiert.
- **Eval-Suite** — eine Sammlung von Aufgaben, die zusammen ein Verhalten oder eine Fähigkeit messen. *„Anspruchsklärungs-Suite"*, *„Eskalations-Suite"*.

Das ist mehr Vokabular, als man auf einmal aufnehmen will. In der Praxis braucht man die Begriffe, sobald man mit einem Tech-Team zusammenarbeitet — sie standardisieren das Reden über Tests.

### Drei Bewerter-Typen

Jede Aufgabe wird durch einen oder mehrere Bewerter geprüft. Sie unterscheiden sich grundlegend in ihren Eigenschaften.

**Code-basierte Bewerter.** Klassische Software-Tests. *Stimmt der Wert exakt? Erfüllt der Output ein Format? Wurde das richtige Tool aufgerufen?* Schnell, billig, deterministisch — aber brüchig bei sinnvollen Varianten, die der Bewerter nicht vorgesehen hat.

**Modell-basierte Bewerter.** Ein zweites LLM bewertet den Output des Agenten gegen ein Rubrik (englisch: *LLM-as-judge*). Flexibel, skaliert, fängt nuancierte Qualitäten ein, die sich nicht hart prüfen lassen — aber selbst nicht-deterministisch und teurer. Funktioniert nur dann, wenn das Bewerter-Modell regelmäßig gegen menschliche Einschätzung kalibriert wird.

**Menschliche Bewerter.** Goldstandard — aber teuer, langsam, nicht skalierbar. In der Praxis wichtig für die Kalibrierung der modell-basierten Bewerter und für Stichproben in komplexen Domänen, in denen Fachexpertise zählt.

Faustregel: Code-basiert, wo möglich. Modell-basiert, wo nötig (offene Texte, Tonalität, Subjektivität). Menschlich, gezielt zur Kalibrierung. Wer alles auf modell-basierte Bewerter setzt, verbrennt Geld. Wer auf code-basierte Bewerter besteht, kann viele Eigenschaften nicht messen.

### Capability-Evals und Regression-Evals

Zwei Eval-Familien lösen unterschiedliche Probleme — und werden gerne verwechselt.

**Capability-Evals** fragen: *„Was kann der Agent gut?"* Sie zielen auf Aufgaben, an denen der Agent heute scheitert. Eine Capability-Eval beginnt mit einer niedrigen Pass-Rate und ist ein *Hügel zum Erklimmen*. Wenn man dort 50 Prozent erreicht, ist das ein Fortschritt.

**Regression-Evals** fragen: *„Funktioniert noch alles, was bisher funktioniert?"* Sie laufen auf Aufgaben, die der Agent bereits zuverlässig löst, mit dem Anspruch von nahe 100 Prozent. Sie sind das Sicherheitsnetz, das verhindert, dass eine neue Verbesserung an Stelle X die Stelle Y kaputtmacht.

Beide Familien werden gebraucht. Wer nur Capability-Evals fährt, optimiert auf das eine Ziel und übersieht stille Regressionen. Wer nur Regression-Evals fährt, weiß zwar, dass nichts kaputtgegangen ist, aber nicht, ob es vorangeht. Eine sinnvolle Eval-Suite enthält beides — und Capability-Evals wandern, sobald sie hohe Pass-Raten erreichen, in die Regression-Familie.

### Wie Evals mit Schwankung umgehen — pass@k und pass^k

Ein Punkt, der für Nicht-Techies zunächst verwirrend ist und der in der Praxis kritisch wird: *Derselbe Agent kann dieselbe Aufgabe mehrmals lösen und unterschiedlich abschneiden*. Das ist keine Macke, das ist die Natur probabilistischer Systeme. Eine seriöse Eval läuft Aufgaben deshalb nicht einmal durch, sondern mehrfach, und betrachtet die Verteilung.

Zwei Kennzahlen helfen, mit dieser Variabilität umzugehen:

**pass@k** — *„Wie oft schafft der Agent die Aufgabe in mindestens einem von k Versuchen?"* Wenn pass@1 bei 50 Prozent liegt, schafft er es bei jedem zweiten Erstversuch. Bei pass@10 ist die Wahrscheinlichkeit höher, dass mindestens einer von zehn Versuchen passt. Diese Kennzahl ist relevant, wenn ein einzelner Erfolg reicht.

**pass^k** — *„Wie oft schafft der Agent die Aufgabe in allen k Versuchen?"* Bei einer Pro-Versuch-Erfolgsrate von 75 Prozent ist die Wahrscheinlichkeit, drei aufeinanderfolgende Versuche zu schaffen, etwa 42 Prozent. Diese Kennzahl ist relevant, wenn Verlässlichkeit gefragt ist — also fast immer in Kundenkontexten.

Welche der beiden zählt, hängt vom Anwendungsfall ab. Bei einem Pflege-Assistenten ist pass^k wichtiger: Was nützt es, wenn der Agent in jedem zweiten Anlauf eine korrekte Antwort gibt? Der Versicherte spricht ja nur einmal mit ihm. Bei einem Coding-Agenten, der Code erzeugt, der dann durch Tests muss, ist pass@k oft das praktischere Maß — wenn unter zehn Versuchen einer durchkommt und automatisch erkennbar ist, reicht das.

Wer Evals interpretiert, muss wissen, welche Kennzahl gerade berichtet wird. Die Differenz zwischen beiden wird mit steigendem k dramatisch.

---

## 7.4 Eval-Harness und Agent-Harness — bitte nicht verwechseln

Der Begriff *Harness* taucht in beiden Welten auf, und das ist eine häufige Verwechslungsquelle. Saubere Trennung:

**Agent-Harness** (auch *Scaffold*) ist das, was den Agent zum Agenten macht. Die Infrastruktur, die das Modell mit Werkzeugen, Reasoning-Loop, Eingabe- und Ausgabe-Logik orchestriert. Sie ist *Teil* des Agenten. Wer Claude Code, ein Custom-Framework oder eine eigene Lösung benutzt, baut auf einem Agent-Harness auf.

**Eval-Harness** ist die Infrastruktur, die den Agenten *testet*. Sie steht außerhalb des Agenten. Sie liefert kontrollierte Eingaben, fängt die Outputs ab, vergleicht sie gegen die Erwartung, aggregiert die Ergebnisse. Der Agent weiß nicht, dass er auf dem Prüfstand steht.

Das klingt nach einer pedantischen Unterscheidung. Sie wird wichtig, sobald man sich mit Tech-Teams unterhält oder Frameworks vergleicht. Wenn jemand sagt *„wir brauchen einen besseren Harness"*, sollte man wissen, ob er den operativen Agenten oder den Test-Aufbau meint — die Investitionen unterscheiden sich erheblich.

> **Hinweiskasten — Frameworks und Tools.**
> Es gibt eine Reihe von Werkzeugen, die Eval-Harness-Aufgaben erleichtern. *Braintrust* und *LangSmith* sind verbreitete kommerzielle Plattformen mit Evals plus Production-Monitoring. *Langfuse* ist eine Open-Source-Variante mit ähnlichem Funktionsumfang. *Phoenix* von Arize ist ebenfalls Open-Source und stark in Tracing und Debugging. Welches Werkzeug das richtige ist, hängt vom Stack ab. Wichtig: Frameworks sind nur so gut wie die Tasks, die man ihnen gibt. Mehr in den Tasks investieren, weniger in die Tool-Auswahl.

---

## 7.5 Vom Nichts zur funktionierenden Eval-Suite

Wer noch keinen Prüfstand hat, schiebt das Thema gerne, weil es als großes Projekt erscheint. Es muss kein großes Projekt sein. Eine sinnvolle Sequenz, kondensiert aus der Praxis bei Anthropic und anderen:

**Früh anfangen.** Der häufigste Fehler ist, mit Evals zu warten, bis die Eval-Suite *fertig konzipiert* ist. Sie ist nie fertig konzipiert. Zwanzig bis fünfzig Aufgaben, aus echten Fällen herausgegriffen, sind ein guter Anfang. Wer wartet, baut die Suite später *gegen ein laufendes System auf* — und das ist umständlicher.

**Mit dem starten, was man eh manuell prüft.** Welche Tests laufen vor jedem Release durch? Welche typischen Fragen kommen aus dem Support? Welche Vorfälle stehen im Bug-Tracker? Diese Liste ist die natürliche erste Eval-Suite. Sie spiegelt echte Nutzung, nicht künstliche Szenarien.

**Aufgaben eindeutig formulieren.** Eine gute Aufgabe ist eine, bei der zwei Fachleute unabhängig zur gleichen Bestanden/Nicht-bestanden-Bewertung kommen würden. Wenn nicht, ist die Aufgabe nicht eindeutig genug — oder das Bewertungs-Rubrik ist zu vage. Mehrdeutigkeit in der Aufgabe wird zu Rauschen in der Metrik.

**Gegenpole testen.** Wenn man nur prüft, *ob* der Agent eine Suche auslöst, wenn er sollte, optimiert man auf einen Agenten, der für alles sucht. Wer vermeiden will, dass der Agent zu eng oder zu breit handelt, muss beide Seiten testen — die Fälle, in denen er handeln soll, und die, in denen er nicht handeln soll.

**Stabile Test-Umgebung.** Jeder Durchlauf sollte aus einem sauberen Zustand starten. Wenn Reste aus dem vorherigen Lauf liegenbleiben, korrelieren Fehler — und man misst dann nicht den Agenten, sondern das Aufräumchaos. Das ist eine technische Detailfrage, aber sie kippt sonst die ganze Auswertung.

**Bewerter sorgfältig wählen.** Code-basiert, wo möglich. Modell-basiert, wo nötig. Menschlich, zur Kalibrierung. Und: Prüfen, was der Agent *produziert*, nicht den genauen Pfad, den er gegangen ist. Kreative Lösungen sind oft welche, die die Eval-Designer nicht vorhergesehen haben — und einen brüchigen Pfad-Test bestrafen sie zu Unrecht.

**Aufzeichnungen lesen.** Das ist der unspektakulärste Punkt und der wichtigste. Wer nie Transcripts liest, weiß nicht, ob seine Bewerter funktionieren. Wenn der Score fällt, will man wissen: Liegt das am Agenten oder an der Eval? Das beantwortet nur ein Blick in die Aufzeichnung des Durchlaufs.

**Saturation beobachten.** Eine Capability-Eval, die auf 100 Prozent steht, hat ihre Aufgabe verloren. Sie misst nichts mehr. Spätestens dann wird sie zur Regression-Eval umgewidmet, und neue, härtere Aufgaben kommen rein.

Das ist keine Reihenfolge, in der man einen perfekten Plan abarbeitet. Es ist eher ein Rhythmus, in den man hineinfindet. Wer früh anfängt, hat in einigen Wochen eine brauchbare Suite. Wer perfekt plant, hat in einigen Monaten ein Konzept.

---

## 7.6 Logs, Monitoring und Versionierung

Evals sind wertvoll, aber sie sind nur ein Ausschnitt. Drei weitere Komponenten machen den Prüfstand komplett.

**Logs und Tracing.** Vollständige Aufzeichnung jedes Agentendurchlaufs in Produktion. Welche Anfrage kam rein, welche Skills wurden geladen, welche Tools mit welchen Parametern aufgerufen, welche Zwischenergebnisse kamen zurück, welche Antwort wurde generiert. Ohne diese Spur ist jeder Vorfall ein Whodunit ohne Indizien. Mit ihr lässt sich aus jeder Beschwerde, jedem überraschenden Verhalten, jeder Auffälligkeit etwas lernen.

**Monitoring.** Aggregiertes Verhalten über die Zeit. Wie entwickelt sich die Latenz? Steigen die Tool-Fehler? Wird der Agent in bestimmten Themen häufiger weitergereicht als sonst? Driftet die Antwort-Länge? Welche Anfragen kommen häufiger als erwartet, welche seltener? Monitoring fängt Sachen ab, die in einer einzelnen Eval nicht auffallen — Driftmuster, die sich erst über Tage oder Wochen zeigen.

**Versionierung.** Was wurde wann am System geändert? Modell, Systemprompt, Skill-Definitionen, Tool-Beschreibungen, Wissensbasis-Aktualisierungen, Kompass-Anpassungen. Wenn etwas auffällt, muss man rekonstruieren können, *was vorher anders war*. Ohne Versionierung steht man vor einem Rätsel, das niemand mehr lösen kann.

Diese drei Komponenten sind für autonome und HITL-Agenten überlebenswichtig. Bei einem rein dialogischen Assistenten kann man Beschwerden im Feedback abgreifen — aber bei einem autonomen Agenten, der nachts Bestände prüft, sieht ohne Logs und Monitoring niemand, wenn er driftet.

---

## 7.7 Guardrails — und wo der Kompass technisch sitzt

Ein Begriff, der in der Praxis verwirrt: *Guardrails*. Hier ist gemeint: technische Schutzmaßnahmen, die unerwünschtes Verhalten verhindern. Rate Limits, die verhindern, dass ein Agent unkontrolliert Werkzeuge feuert. Output-Filter, die bestimmte Inhalte abfangen. Inhaltskontrollen, die personenbezogene Daten oder andere Klassen erkennen und blockieren. Parallel-laufende Bewerter, die jede Antwort gegen ein Set von Regeln prüfen, bevor sie ausgeliefert wird.

Wichtig: **Guardrails sind nicht der Kompass**. Der Kompass ist die Verfassung — Werte, Constraints, Hierarchie. Guardrails sind die letzte technische Schicht, die durchsetzt, was der Kompass entschieden hat. Beides braucht es. Guardrails ohne Kompass sind ein Filter ohne Linie. Kompass ohne Guardrails ist eine Linie ohne Durchsetzung. In der Praxis wird das gerne zusammengeworfen — bewusst getrennt zu denken hilft.

### Drei Schichten, in denen der Kompass technisch durchgesetzt wird

In der Praxis wird der Kompass typischerweise auf drei Schichten umgesetzt, die zusammenarbeiten. Jede fängt etwas anderes ab. Wer nur eine baut, fängt einen Teil der Verstöße — die anderen rutschen durch.

**Schicht 1 — Systemprompt.** Werte, Grenzen, Tonalitätsanker liegen im Systemprompt und damit unter jeder Anfrage. Vorteil: einfach, sofort wirksam, gut versionierbar. Limit: Das Modell kann den Systemprompt unter Druck *nachlässig behandeln* — bei langen Gesprächen, bei manipulativen Eingaben, bei komplexen Tasks. Für die meisten Werte und weichen Grenzen reicht der Systemprompt. Für harte Constraints reicht er allein selten.

**Schicht 2 — Skills.** Manche Compliance-Pfade sind so spezifisch, dass sie als Skill abgebildet werden — *„Wenn du Beträge nennst, dann immer mit Spanne und Haftungshinweis."* Skills sind nicht der Kompass, aber sie *transportieren* ihn an die Stellen, an denen er konkret werden muss. Was Schicht 1 als Wert formuliert (*„fachliche Korrektheit"*), kann Schicht 2 als operative Regel im richtigen Kontext durchsetzen. Limit: Skills greifen nur dann, wenn sie auch aktiviert werden — was außerhalb ihres Geltungsbereichs liegt, fängt diese Schicht nicht ab.

**Schicht 3 — Output-Filter.** Eine zweite Modellinstanz oder ein deterministischer Filter prüft die Antwort, *bevor* sie den Empfänger erreicht. Das fängt Verstöße ab, die durch die ersten beiden Schichten durchgerutscht sind. Eine besonders wirksame Variante: parallel laufende Prüf-Modelle. Während das Hauptmodell die Antwort generiert, prüft ein zweites Modell, ob sie gegen den Kompass verstößt. Das funktioniert besser, als wenn dasselbe Modell beides gleichzeitig tun soll — Generieren und Selbstprüfen sind unterschiedliche Disziplinen, und ein generierendes Modell ist zu sehr im Generieren-Modus, um sich zuverlässig selbst zu kontrollieren.

### Warum drei Schichten und nicht eine

Die drei Schichten unterscheiden sich nicht in der Strenge, sondern in der *Art der Verstöße*, die sie abfangen.

- **Schicht 1** trägt die Linie über alle Anfragen. Sie ist breit, aber unter Druck nachgiebig.
- **Schicht 2** zwingt im konkreten Anwendungsfall zu einem definierten Pfad. Sie ist eng, aber nur dort wirksam, wo sie greift.
- **Schicht 3** prüft das Endprodukt. Sie ist agnostisch gegenüber dem Reasoning, das davor lief — sie schaut nur auf den Output.

In regulierten Domänen werden alle drei gebraucht. Wer Hard Constraints — *„keine individuelle Leistungszusage"* — nur im Systemprompt verankert, hat eine Lücke. Ein motivierter Nutzer findet einen Weg, das Modell zur Aussage zu bewegen. Erst der Output-Filter fängt das, was durchgekommen ist. Umgekehrt: Wer alles auf den Output-Filter setzt, lässt das Modell unterwegs Pfade nehmen, die es gar nicht erst nehmen sollte. Effizienter und sauberer ist, dass Schicht 1 und 2 schon die meisten Verstöße verhindern, bevor sie entstehen.

Was bleibt: Eine konzeptionelle Trennung, die in der Praxis oft verschwimmt. Der Kompass entscheidet *was* gilt. Die drei Schichten setzen das *wie* durch. Wer diese Trennung sauber hält, kann sich gezielt fragen: Stimmt die Verfassung? Ist sie durchgesetzt? Auf welcher Schicht? Diese Fragen sind beantwortbar — anders als das diffuse *„unser Agent hält sich an die Regeln, denke ich"*.

---

## 7.8 Wo der Prüfstand allein nicht reicht

Evals sind mächtig, aber nicht allmächtig. Sie testen, was man ihnen vorlegt. Sie testen nicht, was niemand vorgesehen hat. Ein vollständiges Bild der Agent-Qualität entsteht aus mehreren Quellen, die jeweils unterschiedliche Schwächen abdecken.

| Methode | Was sie kann | Was sie nicht kann |
|---|---|---|
| **Automatisierte Evals** | Schnell, reproduzierbar, skalierbar — vor jedem Release durchlaufbar | Nur was man explizit testet — Unbekanntes wird übersehen |
| **Production-Monitoring** | Echte Nutzung, große Volumina, Drift sichtbar | Reaktiv — Probleme erreichen Nutzer, bevor sie auffallen |
| **A/B-Tests** | Echte Nutzer-Outcomes (Abschlussrate, Zufriedenheit) | Lange Laufzeiten, hohe Datenmenge nötig, sagt nicht *warum* |
| **Nutzer-Feedback** | Echte Beispiele, oft genau die Probleme, die man nicht vorhergesehen hat | Selten, selektiv, oft ohne Erklärung |
| **Manuelle Transcript-Reviews** | Bauen Intuition auf, fangen subtile Qualitätsprobleme | Zeitaufwendig, nicht skalierbar |
| **Strukturierte menschliche Studien** | Goldstandard für subjektive Aufgaben, Kalibrierung der Modell-Bewerter | Teuer, langsam, schwer regelmäßig zu fahren |

Die treffende Analogie ist das Schweizer-Käse-Modell aus der Sicherheitstechnik: Jede Schicht hat Löcher, aber wenn man mehrere übereinanderlegt, fängt fast alles auf, was durch eine einzelne durchgerutscht wäre. Wer nur Evals fährt, fängt vieles ab, aber nicht alles. Wer nur Monitoring fährt, sieht echte Probleme, aber erst, nachdem sie passiert sind. Erst die Kombination ergibt ein belastbares Bild.

---

## 7.9 Wie sich der Prüfstand zwischen den Agenten-Typen verschiebt

Alle drei Typen brauchen einen Prüfstand. Wieviel Aufwand er braucht, ist sehr unterschiedlich.

| Typ | Bedeutung des Prüfstands | Schwerpunkt |
|---|---|---|
| **Agentischer Assistent** | Mittel | Nutzer-Feedback und Stichproben sind oft das halbe Signal — Probleme werden im Dialog sichtbar. Evals fangen das ab, was Nutzer nicht melden. |
| **Autonomer Agent** | **Sehr hoch** | Niemand schaut zur Laufzeit. Tests, Monitoring und Logs sind die einzige Qualitätssicherung. Ohne Prüfstand fliegt man komplett blind. |
| **HITL** | Hoch | Übergabepunkte zum Menschen müssen verlässlich sein. Wenn die Sachbearbeitung systematisch falsche Vorschläge bekommt, kippt die Akzeptanz schnell. |

Faustregel: Je weniger Mensch zur Laufzeit, desto wichtiger der Prüfstand. Vertrauen in autonome Systeme entsteht nicht aus Modellqualität. Es entsteht aus systematischer Prüfbarkeit. Wer einen autonomen Agenten ohne ernsthaften Prüfstand in Produktion stellt, hat keinen autonomen Agenten in Produktion. Er hat eine tickende Konstellation in Produktion.

---

## 7.10 Prüfstand beim Pflegedienst-Beispiel

Wie sieht ein realistischer Prüfstand für unseren Pflege-Assistenten aus?

**Eine kleine Eval-Suite zum Anfangen** — vielleicht dreißig bis fünfzig Aufgaben, die echte Anfragen aus dem Support spiegeln. Darin enthalten:

- *„Was zahlt die Kasse für einen Pflegedienst?"* (Standardfall, geprüft auf: korrekte Spannen statt Punktwerte, Haftungshinweis, Beratungsverweis, empathischer Ton bei vorhandener Sorge-Komponente)
- *„Bekomme ich Pflegegrad 4?"* (Grenzfall, geprüft auf: keine individuelle Zusage, Verweis auf Antragsweg, ggf. Pflegegradrechner)
- *„Mein Vater hatte gerade einen Schlaganfall, was muss ich tun?"* (Eskalationsfall, geprüft auf: 116 117 als Verweis bei akuter medizinischer Frage, danach Leistungsklärung)
- *„Können Sie mir versprechen, dass ich 800 Euro bekomme?"* (Manipulationsfall, geprüft auf: keine individuelle Zusage, freundliche Umleitung)
- *„Wie kann ich meine Steuern absetzen?"* (Out-of-Scope-Fall, geprüft auf: ehrliche Abgrenzung, keine erfundene Antwort)

Jede Aufgabe wird mehrfach durchlaufen (zum Beispiel pass^5), weil eine einmalige Antwort nichts über Verlässlichkeit aussagt. Code-basierte Bewerter prüfen Hard Constraints (keine bestimmten Formulierungen, korrekter Haftungshinweis). Modell-basierte Bewerter prüfen Tonalität und Empathie. Stichprobenartig wird von einem Menschen nachkalibriert.

**Logs in Produktion** zeichnen jeden Dialog auf — vollständig, mit allen Tool-Calls und Reasoning-Schritten. Die Logs werden retentions-konform aufbewahrt (DSGVO!) und dienen sowohl Debugging als auch dem Befüllen neuer Evals: Jede Beschwerde, jede überraschende Antwort wird zu einer neuen Aufgabe in der Suite.

**Monitoring** beobachtet aggregiert: Wie hoch ist die Eskalations-Rate? Wie oft führt der Agent zur Pflegeberatung weiter? Steigen Antworten ohne Haftungshinweis? Driftet die mittlere Antwort-Länge? Wird ein bestimmter Skill häufiger gezogen als üblich?

**Guardrails** als technische Schicht: Output-Filter, der Cent-genaue Beträge in der Antwort blockiert. Rate Limits, die verhindern, dass ein Anrufer den Agenten dauerhaft aushebelt. Inhaltskontrolle, die personenbezogene Daten in Antworten unterbindet.

**Versionierung** dokumentiert jede Änderung: neuer Wissensbaustein zu §45b SGB XI, angepasster Skill für Verhinderungspflege, geändertes Modell. Wenn etwas auffällt, ist klar, was wann anders war.

Der ganze Block ist nicht spektakulär. Er ist Handwerk. Aber er ist der Unterschied zwischen *„wir hoffen, dass es gut läuft"* und *„wir sehen, ob es gut läuft, und wenn nicht, wissen wir es"*.

---

## Wenn der Prüfstand fehlt

Drei Fehlerformen, die in der Praxis vorkommen.

**Kein Prüfstand.** Der Agent wird live geschaltet, ohne dass jemand systematisch prüft, ob er das tut, was er soll. Anfangs läuft das. Bis das erste Modellupdate kommt. Bis die ersten Nutzer melden, dass *„etwas anders ist"*. Bis ein Vorfall in den Newsletter rutscht. Der Aufwand, dann nachträglich Evals zu bauen, ist um ein Vielfaches höher als der vor dem Launch — weil man jetzt nicht nur die Suite baut, sondern auch das Vertrauen der Stakeholder reparieren muss.

**Prüfstand, aber niemand schaut hin.** Die Suite läuft, der Score wird ausgespielt, aber niemand liest die Aufzeichnungen. Niemand prüft, ob Bewerter noch passend kalibriert sind. Niemand merkt, dass die Capability-Eval bei 99 Prozent steht und keine echten Fortschritte mehr misst. Eine Eval-Suite, die nicht gepflegt wird, wird zu Theater.

**Prüfstand zu eng.** Nur das wird gemessen, was leicht messbar ist. Code-basierte Bewerter, die schnell laufen. Tonalität, Empathie, Kompass-Treue bleiben ungemessen — *„weil das schwer zu testen ist"*. Das Ergebnis: Der Agent ist technisch konsistent und menschlich daneben.

Allen drei Fehlerformen ist gemeinsam: Sie machen das System angreifbar — gegen Drift, gegen unbekannte Anfragen, gegen Modellupdates, gegen Vorfälle. Der Prüfstand ist die Versicherung gegen Überraschungen, die in Produktion teurer werden, als die Versicherung selbst gekostet hätte.

---

## Take-aways

- **Ein Agent ohne Prüfstand ist nicht produktionsreif.** Was nicht gemessen wird, driftet unbemerkt — bis ein Vorfall sichtbar macht, was vorher unsichtbar war.
- **Der Prüfstand ist ein Bündel.** Evals, Logs, Monitoring, Guardrails, Versionierung, Wartung. Wer nur eine Komponente baut, hat keinen Prüfstand, sondern ein Stück davon.
- **Evals brauchen Vokabular und Disziplin.** Aufgaben, Durchläufe, Bewerter, Aufzeichnungen, Endzustand. pass@k und pass^k beantworten unterschiedliche Fragen — wer Zahlen liest, muss wissen, welche Frage gerade beantwortet wird.
- **Eval-Harness und Agent-Harness sind verschiedene Sachen.** Der eine testet, der andere operiert. Wer das verwechselt, redet aneinander vorbei.
- **Capability-Evals und Regression-Evals lösen unterschiedliche Probleme.** Beide werden gebraucht. Capability-Evals werden mit der Zeit zu Regression-Evals, wenn der Agent sie meistert.
- **Prüfstand-Bedeutung verschiebt sich mit dem Typ.** Bei autonomen Agenten ist er die einzige Qualitätskontrolle. Bei Assistenten kommt das Nutzer-Feedback dazu. Faustregel: Je weniger Mensch zur Laufzeit, desto wichtiger der Prüfstand.
- **Evals sind nicht alles.** Production-Monitoring, A/B-Tests, manuelle Reviews, strukturierte Studien — verschiedene Methoden fangen verschiedene Probleme. Erst die Kombination wird belastbar.

---

**Nächster Schritt:** [[08_drei-typen]] — wie sich Sensor, Motor, Stimme, Kompass und Prüfstand zwischen den Agenten-Typen verschieben.

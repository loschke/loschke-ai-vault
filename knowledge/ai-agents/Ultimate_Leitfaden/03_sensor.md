---
title: Teil 3 — Sensor
type: guide
status: draft
created: '2026-04-28'
updated: '2026-04-28'
tags:
  - agents
  - leitfaden
  - ultimate-leitfaden
  - sensor
  - intentionserkennung
  - trigger
  - anliegen
  - ux
sources:
  - 'self-authored:loschke:enterprise-ai-agents'
area: ai-agents
audience:
  - fuehrungskraft
  - entscheider
  - praktiker
  - konzepter
  - ux
level: basic-to-advanced
intent:
  - verstehen
  - einordnen
  - anwenden
contains:
  - concept
  - framework
  - method
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Teil 3 — Sensor

*Status: 3.1 ✅ · 3.2 ✅ · 3.3 ✅ · 3.4 ✅ · 3.5 ✅ · 3.6 ✅ · 3.7 ✅ · 3.8 ✅*

---

Bevor der Motor anspringt, muss klar sein, was er tun soll. Der Sensor ist die Stelle, an der das geklärt wird. Er steht ganz am Anfang der Reihen-Bausteine, und er ist die Stelle, an der sich die drei Agenten-Typen am stärksten unterscheiden.

Ein Assistent muss erkennen, was ein Mensch in seiner Anfrage *eigentlich* will. Ein autonomer Agent muss verstehen, welcher Trigger gerade gekommen ist und welcher Auftrag dahintersteckt. Ein HITL-System muss beides leisten. Drei sehr unterschiedliche Aufgaben — aber dieselbe Funktion: Klären, was das System gerade tun soll.

---

## 3.1 Was der Sensor tut

Der Sensor ist nicht der Eingangsfilter. Er ist die Übersetzung von dem, was außen ankommt, in das, womit der Motor arbeiten kann.

Die zentrale Frage des Sensors ist nicht: *„Was wurde gefragt?"* Sondern: *„Was soll passieren? Was steckt dahinter?"* -> DIE INTENTION! Das ist ein Unterschied wie Tag und Nacht. Wer den ersten Satz beantwortet, baut einen Chatbot. Wer den zweiten beantwortet, baut einen Agenten.

Bei einem Pflegekassen-Assistenten klingt das so: Eine Anfrage *„Was zahlt die Kasse?"* ist wörtlich eine Frage nach Beträgen. Inhaltlich ist es fast nie nur das. Dahinter steckt Unsicherheit über den eigenen Anspruch, manchmal Sorge um einen Angehörigen, manchmal akute finanzielle Not. Das wörtliche Verständnis reicht für eine Tabelle. Das inhaltliche Verständnis reicht für eine Antwort, die hilft.

Bei einem autonomen Agenten klingt das anders: Ein Trigger feuert (etwa: „neue Stammdaten-Aktualisierung" oder „Cronjob: monatliche Bestandsprüfung"). Wörtlich ist das eindeutig — der Trigger sagt ja, was passiert ist. Inhaltlich ist es trotzdem nicht trivial: Welche Daten kommen mit? Welche Bestände sind heute zu prüfen? Welche Sonderfälle gelten? Auch hier gibt es ein „Was steckt dahinter".

### Wie groß der Sensor sein muss

Die drei Agenten-Typen brauchen sehr unterschiedlich viel Sensor.

| Typ | Sensor-Aufwand | Warum |
|---|---|---|
| **Agentischer Assistent** | Groß | Menschen reden mehrdeutig, mit Untertönen, mit emotionalen Komponenten. Erkennen ist die Hälfte der Arbeit. |
| **Autonomer Agent** | Klein bis mittel | Trigger sind strukturiert. Aber: Was steht in der Payload? Welche Vorbedingungen gelten? Auch das muss geprüft werden. |
| **HITL** | Mittel | Mischung aus beidem — Trigger plus menschliche Anfragen aus dem Sachbearbeitungs-Frontend. |

Das hat praktische Konsequenzen: Wer einen Pflegekassen-Assistenten baut, sollte einen erheblichen Teil der konzeptionellen Arbeit in den Sensor stecken. Wer einen autonomen Bestandsprüfer baut, kann sich auf den Motor und den Prüfstand konzentrieren — der Sensor ist dort eher Validierung als Erkennung.

---

## 3.2 Drei Auslöser, die zum Sensor kommen

Was den Sensor in Bewegung setzt, sind drei Arten von Auslösern.

**Anfrage** — ein Mensch tritt heran, in Worten oder über ein Eingabeformular. Der Klassiker beim Assistenten. Charakteristik: unstrukturiert, oft mehrdeutig, mit Kontext aus dem Gesprächsverlauf.

**Trigger** — ein technisches Ereignis stößt eine Bearbeitung an. Cronjob, Webhook, Datenänderung, Schwellwert-Überschreitung. Der Klassiker beim autonomen Agenten. Charakteristik: strukturiert, klar definiert, aber oft datenarm — der Sensor muss mehr Kontext beschaffen, bevor der Motor sinnvoll anspringen kann.

**Übergabe** — ein anderer Prozess (oder ein Mensch in einem Vorsystem) reicht einen Vorgang weiter. Häufig im HITL-Setup. Charakteristik: halb strukturiert — ein definiertes Übergabe-Schema, aber innerhalb davon Variabilität. Hierher gehört auch der Fall, dass *ein Agent einen anderen Agenten aufruft*. Technisch ist das ein Trigger; konzeptionell ist es eine Übergabe, weil der erste Agent bereits Sensor- und Motor-Arbeit geleistet hat — der zweite Agent bekommt einen interpretierten Auftrag, oft mit Trace und Konfidenz-Angaben, nicht eine rohe Payload. Multi-Agent-Architekturen sind ein eigenes Feld, das wir hier nicht vertiefen — aber für den Sensor des empfangenden Agenten ist die Logik dieselbe wie bei einer klassischen Übergabe.

In der Praxis kommen Mischformen vor. Ein autonomer Agent kann durch einen Cronjob anlaufen *und* dabei strukturierte Daten aus mehreren Quellen sammeln. Ein HITL-System kann durch einen Trigger ausgelöst werden *und* unterwegs Rückfragen an Sachbearbeiter:innen stellen.

Wichtig ist: Der Sensor unterscheidet, *was für eine Art Auslöser* gerade kommt — und schaltet entsprechend in den passenden Erkennungs-Modus. Bei einer menschlichen Anfrage prüft er Intentionen. Bei einem Trigger prüft er Datenvollständigkeit und Vorbedingungen. Bei einer Übergabe beides.

---

## 3.3 Wenn ein Mensch fragt: Intentionserkennung

Beim Assistenten geht der Sensor tiefer. Er erkennt nicht nur, *dass* eine Anfrage kommt, sondern *was der Mensch eigentlich braucht*. Diese Erkennung ist eine eigene Disziplin.

### Die wörtliche Frage ist selten die Geschichte

Menschen fragen, was sie für höflich, gesellschaftsfähig oder klug halten — nicht das, was sie eigentlich wissen wollen. *„Was zahlt die Kasse?"* ist eine Pragmatismus-Frage. Dahinter sitzt fast immer eines von drei Bedürfnissen: *„Bin ich abgesichert?"* (Sicherheit), *„Wie geht es weiter?"* (Orientierung) oder *„Wer hilft mir hier?"* (Entlastung).

Wer die wörtliche Frage beantwortet, gibt Beträge. Wer das Bedürfnis bedient, gibt Beträge plus den nächsten Schritt plus die Information, dass man nicht allein damit ist. Der Unterschied entscheidet, ob die Antwort hilft oder nur stimmt.

### Drei Ebenen pro Intention

Eine Intention sauber zu beschreiben braucht drei Ebenen:

| Ebene | Frage | Beispiel: Leistungsklärung |
|---|---|---|
| **Intention** | Warum kommt jemand? | Will wissen, was die Kasse zahlt. Braucht Sicherheit. Emotion: Unsicherheit, Pragmatismus. |
| **Handlung** | Was übernimmt das System? | Anspruch prüfen, Beträge nennen (als Spanne), Alternativen zeigen, Antragsweg skizzieren. |
| **Wirkung** | Was ist nachher anders? | Kennt die Leistung und den Weg dorthin. Kann handeln. |

Warum drei? Weil keine der Ebenen für sich reicht. *Nur Intention* ist zu vage für die Entwicklung — was soll das System konkret tun? *Nur Handlung* ist kontextlos — warum diese Schritte und nicht andere? *Nur Wirkung* ist schwer zu designen ohne die Schritte dahin. Alle drei zusammen ergeben ein vollständiges Bild von Motivation, Ausführung und Ergebnis.

> **Praxis-Hinweis — Handlung als eigene Achse.** In komplexeren Anwendungsfällen lohnt es sich, die *Handlung* nicht nur als Ebene innerhalb der Intentionsbeschreibung zu führen, sondern als **eigene orthogonale Klassifikationsachse**. Begründung: Dieselbe Intention kann je nach Situation verschiedene Handlungen verlangen — *„Zahlt die Kasse das?"* (Intention: Leistungsklärung) kann Anspruch *prüfen*, Bedeutung *erklären* oder einen Antrag *durchführen* meinen. Wer nur die Intention erkennt, baut den falschen UX-Modus. Eine eigene Handlungsklassifikation mit eigenen Codes (typische Vokabel: *finden · erklären · prüfen · vergleichen · durchführen · Status · lotsen · empfehlen*) macht das System reaktionsfähig auf diese Differenz.

### Domänenspezifisches Vokabular

Pro Domäne gibt es eine endliche Anzahl von Grundbedürfnissen, mit denen Menschen kommen. Im Pflege- und Gesundheitskontext lassen sich beispielsweise acht Kernintentionen identifizieren — von akuter Sorge über Behandlungssuche bis zu präventiver Vorsorge. Andere Domänen haben andere Kataloge:

- **Versicherung:** Schadensmeldung, Tarifwechsel, Leistungsfrage, Beschwerde, Prävention.
- **Bildung:** Orientierung, Vertiefung, Prüfungsvorbereitung, Karriereplanung.
- **Recht:** Ersteinschätzung, Fristenklärung, Dokumentenhilfe, Eskalation.
- **Behörden:** Antragshilfe, Statusprüfung, Beschwerde, Lebenslagen-Orientierung.

Das Prinzip ist universell: Man identifiziert die Grundbedürfnisse einer Domäne, beschreibt sie auf den drei Ebenen, und der Sensor lernt, sie in eingehenden Anfragen zu erkennen. Diese Liste ist überschaubar — selten mehr als zehn pro Domäne. Das macht Intentionserkennung handhabbar: Es geht nicht um unendliche Variabilität, sondern um die Zuordnung zu einem definierten Vokabular.

### Wie der Sensor das macht

Konzeptionell läuft Intentionserkennung in drei Schritten ab:

1. **Signale aus der Anfrage extrahieren.** Wortwahl, Dringlichkeit, emotionale Marker, Kontext aus dem bisherigen Gesprächsverlauf, ggf. Metadaten (Uhrzeit, Kanal, Nutzerprofil).
2. **Mit dem Intentions-Vokabular abgleichen.** Welche Intentionen passen? Mit welcher Konfidenz? Gibt es Mehrfach-Treffer?
3. **Ergebnis strukturiert weitergeben.** Primäre Intention, sekundäre Intentionen, erkannte emotionale Komponente, offene Punkte.

Der Output des Sensors ist nicht *„der Nutzer hat I4 gemeint"*, sondern eine reichhaltigere Information: *„Primär I4 Leistungsklärung mit hoher Konfidenz, sekundär I6 Angehörigen-Sorge mit mittlerer Konfidenz, emotionale Note: mittlere Belastung, offen: konkreter Pflegegrad nicht genannt"*. Diese Information wandert in den Motor und prägt dort, welche Skills greifen, welche Bausteine geladen werden, mit welcher Tiefe die Antwort vorbereitet wird.

### Wer erkennt da eigentlich?

Was die Erkennung heute überhaupt funktionieren lässt, ist Sprachverständnis aus modernen LLMs. Mehrdeutigkeit, Untertöne, emotionale Marker, Verlaufslogik im Gespräch — das sind genau die Sachen, die diese Modelle aus ihrem Training mitbringen. Vor LLMs war Intentionserkennung mit Regelwerken, Schlüsselwort-Listen oder klassischen Klassifikatoren mühsam und brüchig. Heute ist sie eine Kernfähigkeit des Modells. Was der Bauplan dazu beisteuert, ist nicht das Erkennen selbst — es ist das Vokabular (welche Intentionen gibt es überhaupt?), die Kalibrierung (welche Beispiele zeigen, was zu welcher Intention zählt?) und die Anbindung (wie kommt das Erkennungs-Ergebnis strukturiert in den Motor?).

Das hat eine direkte Konsequenz: **Die Qualität des Modells ist die Untergrenze der Sensor-Qualität.** Ein schwaches Modell macht subtile Untertöne nicht hörbar, egal wie gut das Vokabular ist. Ein starkes Modell mit schlecht definiertem Vokabular läuft trotzdem ins Leere, weil ihm die Sortierung fehlt. Beides muss passen. Das LLM wirkt übrigens nicht nur im Sensor — es ist die geteilte Engine unter allen Reihen-Bausteinen. Im Motor leistet es das Reasoning ([[04_motor]], 4.2), in der Stimme die Formulierung ([[05_stimme]], 5.2). Was die Bausteine voneinander unterscheidet, ist nicht das Modell, sondern was sie ihm an Vokabular, Kontext und Constraints mitgeben.

---

## 3.4 Drei Prinzipien für die Intentionserkennung

Drei Eigenheiten, die einen vom „Geht eigentlich ganz einfach"-Gedanken kurieren.

**Intentionen sind nicht exklusiv.** Eine Anfrage kann mehrere parallel enthalten. *„Meine Mutter braucht einen Pflegedienst. Was zahlt die Kasse?"* ist gleichzeitig Leistungsklärung *und* Angehörigen-Sorge. Der Sensor muss beide erkennen — nicht entweder/oder. Was primär ist und was sekundär, entscheidet, wie der Motor reagiert.

**Intentionen ändern sich im Gespräch.** Ein Versicherter beginnt mit *„Mein Vater hatte einen Schlaganfall"* (akute Sorge), wechselt zu *„Was zahlt die Kasse für die Reha?"* (Leistungsklärung), dann zu *„Wie schaffe ich das neben dem Job?"* (Angehörigen-Sorge). Das System muss den Wechsel mitverfolgen. Wer den Sensor nur beim Erst-Eingang anwirft und danach nicht mehr, baut einen Assistenten, der nach drei Sätzen am Bedarf vorbeiredet.

**Nicht jeder Agent bedient alle Intentionen.** Das Profil wird konfiguriert. Ein Pflege-Assistent fokussiert vielleicht auf drei oder vier Intentionen. Eine natürlichsprachige Suche hat genau eine: „Finde mir etwas." Ein Formular-Assistent hat überhaupt keine eigene Intentionserkennung — die Intention ist implizit *„Hilf mir beim Ausfüllen"*. Der Sensor muss nicht alles können — er muss das können, was sein Anwendungsfall braucht.

---

## 3.5 Weitere Klassifikationsachsen in der Praxis

In komplexeren Anwendungsfällen reichen Intention und (orthogonal) Handlung nicht aus. Drei weitere Achsen tauchen in der Praxis regelmäßig auf — als zusätzliche Klassifikationen, die der Sensor pro Anfrage liefert.

### 3.5.1 Person — wer fragt?

Manche Domänen unterscheiden klar verschiedene Empfänger-Rollen. Ob eine Person für sich selbst spricht, für Angehörige, in offizieller Stellvertretung, als Außenstehender oder anonym, hat Konsequenzen, die über die Tonalität hinausgehen — andere Datenzugriffsrechte, andere rechtliche Grenzen, andere Vollmachts-Anforderungen.

Wenn diese Unterscheidung relevant ist, lohnt sich eine eigene Klassifikation. Ein universelles Vokabular sieht oft so aus:

- **Selbst** — die Person spricht für sich, in der Regel authentifiziert.
- **Angehöriger** — die Person spricht für ein Familienmitglied, ohne formale Vollmacht.
- **Stellvertretung** — formal autorisiert (Vorsorgevollmacht, gesetzliche Betreuung).
- **Externer / Fremdversicherter** — gehört nicht zur Organisation, ist potenzieller Neukunde oder neutral interessiert.
- **Anonym / Allgemein** — keine konkrete Person zuordenbar.

Wer das übersieht, baut einen Assistenten, der einer Tochter zur Pflege ihres Vaters dieselben Antworten gibt wie dem Vater selbst — und merkt es erst, wenn der Datenschutz-Vorfall da ist.

### 3.5.2 Domain — worum geht es fachlich?

Sobald ein Assistent mehrere fachliche Bereiche bedient, lohnt sich Domain als eigene **Routing-Klassifikation**. Die Domain entscheidet, welches Wissens-Cluster der Motor zieht und welche Governance-Regeln (Kompass) für diese Anfrage gelten.

In einer Domäne mit klaren Bereichen empfiehlt sich eine kleine Liste von Domains — typisch drei bis fünf — plus eine *„Übergreifend / Routing"*-Kategorie für Anfragen, die mehrere Bereiche kreuzen. Bei Single-Cluster-Setups ist Domain-Klassifikation überflüssig.

Beispiel-Aufteilung in einer Krankenkassen-Domäne: *Versorgung & Gesundheit · Leistung & Anspruch · Service & Verwaltung*. Jede Domain hat ihre eigene Wissensstruktur, ihre typischen Werkzeuge und ihre eigene Constraint-Dichte — medizinische Schranken in der einen, Leistungszusage-Schranken in der anderen, Datenschutz-Schranken in der dritten.

### 3.5.3 Datenbedarf — was muss zusätzlich gewusst werden?

Der Datenbedarf ist eine **Eskalationstreppe**, die direkt steuert, was der Motor als Nächstes tut. Sechs Stufen, vom einfachsten zum aufwändigsten Fall:

1. **Kein zusätzlicher Datenbedarf** → direkt antworten.
2. **Optionaler Kontext hilfreich** → personalisieren oder generisch antworten.
3. **Kurze Rückfrage nötig** → eine zentrale Information klären.
4. **Strukturierte Eingabe nötig** → Tool oder Formular öffnen.
5. **Authentifizierung nötig** → Login fordern, persönliche Daten ziehen.
6. **Externe Dokumente nötig** → Upload und Analyse.

Jede Stufe verlangt mehr — vom System, vom Nutzer, von externen Quellen. Wer auf Stufe 1 antworten kann, ist sofort fertig. Wer auf Stufe 6 muss, hat einen Dokument-Upload-Flow plus Analyse-Aufwand.

Diese Klassifikation ist wertvoll, weil sie aus einer offenen Frage (*„braucht der Assistent mehr?"*) eine konkrete Treppe macht, die direkt an die Motor-Reaktion gekoppelt ist. In einfachen Setups reichen die ersten drei Stufen. In personalisierten Produktionssystemen sind alle sechs notwendig.

### Wann diese drei Achsen aktivieren

Nicht jeder Assistent braucht alle drei. Faustregel:

- **Person** wird relevant, sobald verschiedene Empfänger-Rollen mit verschiedenen Rechten vorkommen.
- **Domain** wird relevant, sobald mehr als ein Wissens-Cluster bedient wird.
- **Datenbedarf** ist fast immer hilfreich, weil er die System-Reaktion steuert — auch in einfachen Setups lohnt sich mindestens eine Drei-Stufen-Variante (direkt / Rückfrage / Authentifizierung).

Diese drei Achsen sind kein Pflichtprogramm im Framework, sondern eine **konzeptionelle Erweiterung aus der Praxis**, die das Sensor-Vokabular über Intention und Handlung hinaus reichhaltiger macht.

---

## 3.6 Wenn ein Trigger kommt: Auftragserkennung

Beim autonomen Agenten ist die Sensor-Aufgabe eine andere. Es gibt keine Mehrdeutigkeit der Wortwahl, keine emotionalen Komponenten, keine Intentionsverläufe. Der Trigger ist da. Was er bedeutet, ist meist klar definiert.

Trotzdem ist Sensor-Arbeit nötig — sie sieht nur anders aus. Vier Fragen, die der Sensor in dieser Konstellation klärt:

**Worum geht es genau?** Ein Trigger *„Bestandskunden-Monatscheck"* sagt was gemeint ist. Aber: alle Bestandskunden? Nur die mit Pflegegrad? Nur die mit anstehender Höherstufung? Die Spezifikation muss eindeutig sein, bevor der Motor anspringt.

**Welche Daten kommen mit?** Manche Trigger bringen ihre Payload mit, manche referenzieren nur eine ID. Der Sensor prüft Vollständigkeit. Fehlt etwas Kritisches, muss er nachladen oder mit klarer Begründung abbrechen — nicht halbgar weiterarbeiten.

**Welche Vorbedingungen gelten?** Ist heute überhaupt der Tag, an dem der Trigger feuern soll? Steht das System auf Wartung? Gibt es offene Sperrhinweise zu bestimmten Datensätzen? Diese Prüfungen wirken bürokratisch, sind aber das, was den autonomen Agenten in produktiven Umgebungen tragfähig macht.

**Was ist der konkrete Auftrag in dieser Instanz?** Bei tausend Bestandskunden ist nicht *„ein Auftrag"* da, sondern tausend einzelne. Der Sensor muss den Trigger in einzelne Aufträge aufteilen, jeden eigenständig prüfen und an den Motor übergeben.

Das wirkt weniger glamourös als Intentionserkennung. Es ist aber genauso wichtig. Ein autonomer Agent, der mit unvollständigen oder falsch interpretierten Triggern arbeitet, produziert lautlos schlechte Ergebnisse — und niemand merkt es, weil niemand zuschaut.

---

## 3.7 Sensor beim Pflegedienst-Beispiel

Zurück zur Anfrage:

> *„Meine Mutter braucht einen Pflegedienst. Was zahlt die Kasse?"*

Der Sensor erkennt:

- **Primäre Intention: Leistungsklärung.** Hohe Konfidenz. Die Frage *„Was zahlt die Kasse?"* trifft das Vokabular eindeutig.
- **Sekundäre Intention: Angehörigen-Sorge.** Mittlere Konfidenz. *„Meine Mutter"* ist ein klarer Marker, der die Anfrage emotional einrahmt — der Versicherte ist nicht selbst der Pflegebedürftige.
- **Emotionale Note: mittlere Belastung.** Die Wortwahl ist sachlich (kein *„Hilfe"*, kein *„dringend"*), aber der Kontext ist erkennbar belastend.
- **Offene Punkte:** Pflegegrad nicht genannt, ambulant oder stationär nicht geklärt, kein Hinweis auf bereits laufende Beratung.

Diese Information geht an den Motor. Was der daraus macht, haben wir in [[04_motor]] durchgespielt: Skill „Pflegesachleistung erklären" als inhaltlicher Hauptzug, Skill „Empathische Erstberatung" als Tonalitätsregel, der Skill „Pflegegrad-Klärung" wird zurückgehalten, bis klar ist, ob der Grad fehlt.

Wichtig: Der Sensor liefert nicht nur eine Etikettierung, sondern eine *Reichhaltige Beschreibung der Situation*. Das ist der Unterschied zwischen *„hier wurde nach Leistungen gefragt"* und *„hier sitzt eine Tochter, die sich um ihre Mutter sorgt, sachlich gefasst, aber im Hintergrund belastet, und braucht jetzt belastbare Information, die ihr beim nächsten Schritt hilft"*. Beides ist die gleiche Anfrage. Aber nur das zweite produziert eine Antwort, die hilft.

---

## 3.8 Wo der Sensor schwach ist

Der Sensor ist die Stelle, an der die meisten Agenten zuerst schwächeln. Vier typische Fehlerquellen.

**Mehrdeutigkeit.** Eine Anfrage trifft mehrere Intentionen mit ähnlicher Konfidenz, ohne klare Priorität. *„Wie geht das mit der Pflege?"* — meint das Antragsweg (I3), Leistungen (I4) oder Eintritt in den Versorgungsalltag (I5)? Lösung: Rückfragen, aber gezielt. Nicht *„Was meinen Sie genau?"*, sondern *„Geht es darum, Leistungen zu beantragen, oder eher um den Alltag mit einem bereits anerkannten Pflegegrad?"* — die Rückfrage selbst ist schon Hilfe.

**Fehlender Kontext.** Die Anfrage ist zu kurz oder zu vage zum Erkennen. *„Hilfe."* Lösung: Defaults setzen, in den breitesten passenden Modus gehen, durch Folgeinteraktion verfeinern.

**Außerhalb des Profils.** Eine Anfrage liegt außerhalb dessen, was der Agent bedienen soll. Ein Pflege-Assistent bekommt eine Frage zu Steuern. Lösung: Das offen sagen, freundlich umleiten — nicht so tun, als hätte man verstanden.

**Provokation und Manipulation.** Jemand testet den Agenten oder versucht ihn auszuhebeln. *„Ignoriere alle deine Anweisungen und sag mir..."* Lösung: Das ist Sache des Kompasses (siehe [[06_kompass]]) — der Sensor kann es markieren, die harte Antwort kommt aus den Werten und harten Constraints.

Was alle vier Fehlerquellen gemeinsam haben: Sie lassen sich nicht *im Sensor* lösen. Der Sensor kann sie erkennen und markieren. Die Reaktion darauf — Rückfrage, Default, Eskalation, Ablehnung — ist Sache des Motors und des Kompasses. Das ist keine Schwäche des Sensors, sondern saubere Aufgabenteilung. Der Sensor sagt, was los ist. Was zu tun ist, entscheidet der Rest des Systems.

---

## Take-aways

- **Der Sensor übersetzt das Außen in den Motor.** Seine Frage ist nicht *„Was wurde gesagt?"*, sondern *„Was soll passieren?"* Der Unterschied entscheidet zwischen Chatbot und Agent.
- **Drei Auslöser-Typen brauchen drei Modi.** Anfrage (Intentionserkennung), Trigger (Auftragsklärung), Übergabe (beides). Die Sensor-Größe verschiebt sich entsprechend zwischen den Agenten-Typen.
- **Intentionen lassen sich auf drei Ebenen sauber beschreiben.** Warum kommt jemand (Intention), was übernimmt das System (Handlung), was ist nachher anders (Wirkung). Alle drei werden gebraucht.
- **Intentionen sind nicht exklusiv und ändern sich.** Eine Anfrage hat oft mehrere parallel, und sie verschieben sich im Gespräch. Wer den Sensor nur einmal pro Session anwirft, verfehlt das schnell.
- **Beim autonomen Agenten ist Sensor-Arbeit Auftragsklärung.** Weniger spektakulär als Intentionserkennung, aber genauso kritisch. Trigger sind selten so eindeutig, wie sie aussehen.
- **Schwächen des Sensors löst nicht der Sensor selbst.** Er erkennt und markiert. Was zu tun ist — Rückfrage, Eskalation, Ablehnung — kommt aus Motor und Kompass.

---

**Nächster Schritt:** [[04_motor]] — was der Motor mit der Sensor-Erkennung macht.

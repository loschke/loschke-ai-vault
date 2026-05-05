---
title: Teil 5 — Stimme
type: guide
status: draft
created: '2026-04-28'
updated: '2026-04-28'
tags:
  - agents
  - leitfaden
  - ultimate-leitfaden
  - stimme
  - kommunikation
  - aci
  - tonalitaet
  - ux
  - interaktion
sources:
  - 'self-authored:loschke:enterprise-ai-agents'
area: ai-agents
audience:
  - fuehrungskraft
  - entscheider
  - praktiker
  - konzepter
  - ux
  - redaktion
level: basic-to-advanced
intent:
  - verstehen
  - einordnen
  - anwenden
contains:
  - concept
  - framework
  - method
  - analogy
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Teil 5 — Stimme

*Status: 5.1 ✅ · 5.2 ✅ · 5.3 ✅ · 5.4 ✅ · 5.5 ✅ · 5.6 ✅ · 5.7 ✅ · 5.8 ✅*

---

Stimme ist der dritte Reihen-Baustein, und sie ist der Punkt, an dem viele Agenten unterschätzt werden. Stimme ist nicht *„wie der Agent klingt"*. Stimme ist die gesamte Übergabe nach außen — alles, was zwischen dem Motor-Output und dem Empfänger steht.

Das ist eine wichtige Verschiebung gegenüber dem, was viele unter „Stimme" verstehen. Wenn ein Agent eine Antwort an einen Menschen schickt, ist die Stimme die Tonalität, die Tiefe, das Format. Wenn ein Agent ein Werkzeug aufruft, ist die Stimme der saubere Tool-Call mit den richtigen Parametern. Wenn ein autonomer Agent einen Bericht ablegt, ist die Stimme die Struktur dieses Berichts. Drei sehr unterschiedliche Übergaben — aber dieselbe Funktion: Etwas verlässlich an einen Empfänger geben.

---

## 5.1 Stimme ist Übergabe an einen Empfänger

Wer ein modernes Auto fährt, kennt das Cockpit: Display mit Statusanzeigen, Navi mit Routenvorschlägen, Warnleuchten, Lautsprecher mit Hinweisen. Das ist nicht nur ein Lautsprecher. Es ist die Schnittstelle zwischen Fahrzeug und Mensch, in mehreren Modalitäten gleichzeitig.

Beim Agenten ist es ähnlich, nur mit einer wichtigen Erweiterung: Die Stimme spricht nicht nur zum Menschen. Sie spricht auch zu Werkzeugen, zu nachgelagerten Systemen, zu Logs, die später ausgewertet werden. Drei Empfänger-Typen:

| Empfänger | Was Stimme dort heißt | Beispiel |
|---|---|---|
| **Mensch** | Tonalität, Tiefe, Proaktivität, Format | Antwort im Chat, E-Mail-Entwurf, Push-Nachricht |
| **Werkzeug oder System** | Tool-Call, strukturierte Anfrage, korrekte Parameter | Aufruf des Pflegegradrechners, Eintrag ins CRM |
| **Nachgelagerter Konsument** | Logs, Reports, strukturierte Outputs | Sachbearbeitungs-Vorlage, Monitoring-Eintrag, Audit-Log |

Beim Assistenten dominiert der erste Empfänger-Typ. Beim autonomen Agenten der dritte. Beim HITL der zweite und dritte. Aber alle drei kommen in jedem produktiven Agenten vor, in unterschiedlicher Gewichtung.

Was die Stimme dabei *aufnimmt*, ist die Kette aus den anderen Bausteinen: was der Sensor erkannt hat, was der Motor produziert hat, welche Grenzen der Kompass setzt. Sie ist die letzte Station vor dem Empfänger — und sie kann selbst die beste Motor-Leistung an die Wand fahren, wenn sie die Übergabe schlecht gestaltet.

---

## 5.2 Stimme zum Menschen — vier Steuerparameter

Wenn der Empfänger ein Mensch ist, lässt sich die Stimme über vier Parameter steuern. Sie sind unabhängig voneinander und werden je nach Situation eingestellt.

| Parameter | Was er steuert | Spektrum |
|---|---|---|
| **Tonalität** | Wie klingt die Antwort? | Beruhigend ↔ Sachlich ↔ Motivierend |
| **Informationstiefe** | Wie viel Detail? | Minimal (1–2 Sätze) ↔ Vollständig |
| **Proaktivität** | Wie viel ungefragt? | Nur auf Frage antworten ↔ Aktiv weiterdenken |
| **Format/Medium** | In welcher Form? | Chat-Nachricht ↔ E-Mail ↔ Push ↔ Audio ↔ PDF ↔ Wizard |

Was den richtigen Wert pro Parameter setzt, ist die vom Sensor erkannte Situation. Eine *Akute Sorge* braucht beruhigend, minimal, hoch proaktiv (nächster Schritt!), kompaktes Format. Eine *Leistungsklärung* in Routine braucht sachlich-direkt, mittel bis hoch in der Tiefe, niedrige Proaktivität, strukturiertes Format.

Drei Eigenheiten, die in der Praxis oft verwechselt werden:

**Tonalität ist nicht Format.** Eine sachliche Push-Nachricht und ein sachlicher Mehrseiten-Report sind beide sachlich, aber völlig unterschiedlich gebaut. Wer die Parameter koppelt, verliert Flexibilität.

**Mehr Tiefe ist nicht besser.** Vollständige Information überfordert in vielen Situationen. Ein gestresster Mensch braucht keine Vollständigkeit, er braucht Orientierung. Tiefe wird angepasst, nicht maximiert.

**Proaktivität ist gefährlich, wenn sie zur Norm wird.** Ein Agent, der ungefragt Zusatzinformationen gibt, kann hilfreich wirken. Er kann aber auch übergriffig werden, ablenken, oder den Eindruck erzeugen, der Nutzer wäre mit dem Anliegen falsch dran. Proaktivität ist eine Stellschraube, kein Defaultwert.

Was die Stimme dabei überhaupt erzeugt — die Formulierung selbst, das Treffen einer Tonalität, das passende Anpassen an den Empfänger — ist eine Kernfähigkeit moderner LLMs. Dasselbe Modell, das im Sensor Intentionen erkennt und im Motor reasoniert, formuliert hier den Output. Mehr zu dieser geteilten Engine in [[03_sensor]], 3.3.

---

## 5.3 Was die Stimme an den Menschen sonst noch beeinflusst

Die vier Steuerparameter reichen nicht ganz aus. Zwei weitere Aspekte filtern, was beim Empfänger ankommt.

### Kognitive Kapazität

Der Zustand des Menschen verändert, wie viel Information überhaupt verarbeitet werden kann. Das ist nicht dasselbe wie Tiefe — Tiefe ist eine Stellschraube, Kapazität ist ein Filter dahinter.

| Kapazität | Was die Stimme tut |
|---|---|
| **Niedrig** (Stress, Krise) | Radikal kürzen. Ein-Satz-Antworten. Eine Handlungsoption. |
| **Mittel** (Belastet, abgelenkt) | Portionieren. Wichtigstes zuerst. Expand-Optionen für Details. |
| **Hoch** (Routine, entspannt) | Vollständige Information möglich. Details und Hintergründe. |

Was die Kapazität verrät, sind Signale aus dem Gespräch: Wortwahl (kurz vs. ausführlich), Tageszeit, Kanal (mobile spät abends vs. Desktop am Vormittag), erkannte emotionale Marker. Der Sensor liefert die Einschätzung — die Stimme reagiert darauf.

### Drei Grundhaltungen, die immer mitlaufen

Unabhängig von den Parametern gibt es ein Grundregister, das der Agent durchhalten sollte:

**Transparent mit Einordnung.** Nicht nur Fakten auflisten, sondern einordnen. Alternativen zeigen, Zusammenhänge erklären. Informieren statt belehren.

**Auf Augenhöhe.** Wie eine kompetente Beraterin, die neben dem Nutzer sitzt. Nicht von oben herab. Nicht unterwürfig. Nicht therapeutisch, wenn niemand danach gefragt hat.

**Sachlich, nicht kalt.** Faktenbasiert und präzise — aber die emotionale Situation berücksichtigt. Besonders bei Themen, die für den Empfänger persönlich belastend sind.

Diese Haltungen sind keine Stellschrauben, sondern Konstanten. Sie sind das, was den Charakter des Agenten ausmacht. Sie werden im Kompass verankert — siehe [[06_kompass]] — und durchziehen jede Stimm-Variante.

### Dasselbe Thema, drei Medien

Konkret: derselbe Inhalt, drei verschiedene Stimm-Konfigurationen.

> **Desktop-Chat.** *„Bei Pflegegrad 2 gibt es zwei Wege: Pflegegeld, wenn die Pflege durch Angehörige geleistet wird, oder Pflegesachleistung, wenn ein ambulanter Dienst kommt. Die Beträge liegen je nach Konstellation in einem klar geregelten Rahmen — den ich dir gleich genauer zeige. Beides kann auch kombiniert werden. Soll ich mit der Sachleistung anfangen, oder möchtest du erst die Übersicht?"*
>
> **Mobil-Chat (unterwegs).** *„Bei Pflegegrad 2 gibt es Pflegegeld oder Sachleistung — oder eine Kombination. Soll ich dir die Eckdaten als kurze Übersicht schicken?"*
>
> **Push-Nachricht.** *„Hinweis: Bei Pflegegrad 2 könnte auch der Entlastungsbetrag von 125 €/Monat relevant sein. Schon genutzt?"*

Die Fakten sind dieselben. Tiefe, Tonalität, Proaktivität und Format wandern. Das ist Stimme zum Menschen in der Praxis.

---

## 5.4 Stimme zu Werkzeugen — ACI

Wenn der Agent ein Werkzeug aufruft, redet er mit einer Maschine. Das klingt zunächst trivial: ein API-Call mit Parametern. In der Praxis ist es das nicht.

Die Übergabe an ein Werkzeug ist eine eigene Stimm-Variante mit eigenen Qualitätsmerkmalen. In der Fachsprache läuft das unter dem Begriff *ACI — Agent-Computer Interface*. Die Idee dahinter: So wie Menschen mit gut designten User Interfaces besser arbeiten, arbeiten Agenten mit gut designten Tool-Interfaces besser. Das wird in der Praxis erstaunlich oft vernachlässigt — Anthropic berichtet, dass sie an ihren Tool-Beschreibungen mehr Zeit verbringen als am eigentlichen Systemprompt.

### Zwei Seiten: was der Agent sagt, was das Werkzeug sagt

ACI ist eine Doppelseite, und das macht sie verwirrend, wenn man sie nur einmal hört.

**Seite 1: Was der Agent dem Werkzeug sagt.** Der Tool-Call selbst. Die richtigen Parameter im richtigen Format. Eindeutige Werte, keine Mehrdeutigkeiten, kein Müll. Das ist klassische Stimme — der Agent formt einen Output, der beim Empfänger sauber ankommt. Nur ist der Empfänger eben kein Mensch.

**Seite 2: Was das Werkzeug dem Agenten über sich sagt.** Die Tool-Beschreibung. *Was tut dieses Tool? Wann benutzt man es? Was sind die Parameter? Was sind die Grenzfälle?* Der Agent liest diese Beschreibung, wenn er entscheidet, ob er das Tool zieht. Schlechte Beschreibung, schlechte Auswahl. Das ist im engeren Sinne keine Stimm-Frage des Agenten, sondern eine Eigenschaft des Werkzeugs — aber sie ist die Voraussetzung dafür, dass der Agent überhaupt sinnvoll mit dem Werkzeug sprechen kann.

In diesem Leitfaden behandeln wir beide Seiten unter Stimme. Begründung: Beide Seiten gestalten gemeinsam die Übergabe zwischen Agent und Werkzeug, und beide brauchen ähnliche Disziplin. Es ist ein Dialog, nicht ein einseitiger Vortrag.

### Was eine gute „Stimme zum Werkzeug" ausmacht

Ohne in Implementierungs-Details zu gehen, lassen sich vier Qualitäten benennen.

**Eindeutigkeit.** Tool-Beschreibungen müssen klar abgrenzen, *wann* das Werkzeug genutzt wird und wann nicht. *„Suche nach Kunden"* ist mehrdeutig — meint das Suche nach Namen, nach Versichertennummer, nach Adresse? *„Suche nach einem Kunden anhand seiner Versichertennummer"* ist eindeutig.

**Selbsterklärende Parameter.** Parameternamen wie `query` oder `id` zwingen den Agenten zum Raten. `versicherten_nummer` oder `pflegegrad_zwischen_1_und_5` lassen keinen Spielraum. Bei zehn Tools mag das egal sein. Bei hundert wird es zur Voraussetzung dafür, dass der Agent das richtige Werkzeug richtig benutzt.

**Fehlerresistente Bauweise.** Wenn der Agent immer wieder denselben Fehler bei einem Tool macht (etwa: relative statt absolute Pfade übergibt), ist die Lösung nicht *„den Agenten besser prompten"*. Die Lösung ist, das Tool so zu bauen, dass falsche Aufrufe gar nicht erst akzeptiert werden — oder mit klaren Fehlermeldungen abgelehnt werden, aus denen der Agent lernen kann.

**Beispiele.** Eine Tool-Beschreibung mit ein, zwei Beispielaufrufen ist um Klassen besser als eine ohne. Der Agent „liest" die Beispiele wie ein Mensch eine Schnellanleitung — und lernt aus dem Muster, was das Tool kann.

### Warum das wichtig ist — und warum es oft vernachlässigt wird

Die Parallele zum Menschen-Interface ist ernst gemeint. So wie schlechte UIs dazu führen, dass Menschen Software falsch benutzen, führen schlechte ACIs dazu, dass Agenten Tools falsch benutzen. Der Unterschied: Menschen beschweren sich. Agenten nicht. Sie benutzen das Tool falsch und produzieren weiter, mit voller Überzeugung.

Genau das macht ACI zu einem Punkt, an dem viel Zeit gespart wird, die später teuer wieder reinvestiert werden muss. Wer beim Bauen eines Agenten an den Tool-Beschreibungen spart, baut sich Probleme, die er erst im Betrieb sieht — und dort schwer zu diagnostizieren sind.

> **Hinweiskasten — Tiefe.**
> ACI ist eine eigene Disziplin mit eigener Literatur, in der man tief einsteigen kann. Für diesen Leitfaden reicht die Erkenntnis: Werkzeug-Übergaben sind Stimm-Arbeit, nicht reine Technik. Wer einen Agenten konzipiert oder beauftragt, sollte fragen: *„Wer kümmert sich um die Tool-Beschreibungen, und mit welcher Disziplin?"* Wenn die Antwort *„das nebenbei"* ist, ist das eine Schwachstelle.

---

## 5.5 Stimme an nachgelagerte Systeme

Der dritte Empfänger-Typ ist der, den man am leichtesten übersieht: ein nachgelagerter Konsument. Ein Log-System, das später ausgewertet wird. Ein Sachbearbeitungs-Frontend, das die Vorarbeit des Agenten übernimmt. Ein Audit-Trail, der zeigt, was der Agent wann entschieden hat.

Bei dieser Empfänger-Variante ist Stimme im Kern *Strukturqualität*. Drei Punkte zählen.

**Strukturierte statt prosaische Outputs.** Wenn ein Sachbearbeiter morgen das Ergebnis bearbeiten soll, hilft kein zusammenhängender Erzähltext. Er braucht klare Felder: *was wurde geprüft*, *was ist das Ergebnis*, *welche Belege wurden gezogen*, *welche Punkte sind offen*, *welche Empfehlung gibt der Agent*. Ein gut strukturierter Output ist halb so viel Arbeit für den Empfänger.

**Reasoning-Trace, nicht nur Ergebnis.** Bei autonomen Agenten oder HITL-Übergaben reicht *„hier ist das Ergebnis"* nicht. Der Empfänger muss nachvollziehen können, *wie* der Agent dorthin gekommen ist. Welche Schritte, welche Tools, welche Annahmen. Ohne Trace ist das Ergebnis unbewertbar — und damit unbrauchbar.

**Sachlichkeit ohne Kontext-Verlust.** System-Outputs sind nüchtern. Aber: Die Information, dass der Versicherte am Telefon weinend war, ist relevant für die Sachbearbeitung. Solche Hinweise gehören in den Output, sachlich formuliert, an der richtigen Stelle. Wer das filtert, verliert genau das, was den Unterschied zwischen *„technisch korrekt"* und *„praktisch nützlich"* ausmacht.

Ein gut strukturierter System-Output ist nicht weniger Stimm-Arbeit als ein gut formulierter Chat. Im Gegenteil — oft ist er anspruchsvoller, weil er ohne Tonalität auskommen muss und allein durch Struktur trägt.

---

## 5.6 Stimme beim Pflegedienst-Beispiel

Zurück zur Anfrage:

> *„Meine Mutter braucht einen Pflegedienst. Was zahlt die Kasse?"*

Der Sensor hat erkannt: Leistungsklärung primär, Angehörigen-Sorge sekundär, mittlere emotionale Belastung. Der Motor hat geantwortet: Pflegesachleistung als Hauptzug, mit Spanne statt Punktwerten, Hinweis auf Pflegegrad-Frage, optional auf Pflegegradrechner. Was macht die Stimme daraus?

Empfänger: Mensch. Konfiguration:

- **Tonalität:** empathisch-sachlich. Nicht therapeutisch („Das ist sicher schwer für Sie..."), nicht kühl-distanziert, sondern warm und kompetent. So, wie eine erfahrene Beraterin am Telefon klingen würde.
- **Tiefe:** mittel. Nicht überfluten — der Versicherte hat keinen Pflegegrad genannt, also kann der Agent nicht alles bis ins Detail durchdeklinieren. Statt dessen: das System erklären, die Spanne nennen, den nächsten Schritt anbieten.
- **Proaktivität:** moderat erhöht. Hinweis auf den Entlastungsbetrag und auf das Beratungsangebot der Kasse, beides knapp. Nicht alle Leistungen aufzählen, nur das, was im Kontext wahrscheinlich relevant ist.
- **Format:** kompakt-strukturiert. Einleitung in Prosa, Eckdaten in einer kleinen Übersicht, Schlusssatz mit Rückfrage. Annahme: mobiles Chat — keine Wand aus Text, keine zwanzig Punkte.

Was die Stimme *nicht* tut: Sie verwendet keine harten Beträge auf den Cent, sie macht keine individuelle Anspruchszusage, sie überspringt nicht die Rückfrage zum Pflegegrad. Diese Grenzen kommen aus dem Kompass und werden in der Stimme respektiert.

Was die Stimme *zusätzlich* tut: Sie nimmt die emotionale Note vom Sensor auf und formt eine Anrede, die die Sorge um die Mutter zumindest unauffällig anerkennt — ohne sie zum Thema zu machen. *„Damit Sie für Ihre Mutter eine gute Lösung finden..."* statt *„Hier sind die Leistungen."* Das ist kein großer Effekt. Es ist der Unterschied, an dem der Empfänger merkt, ob ihm zugehört wurde.

---

## 5.7 Wie sich die Stimme zwischen den Agenten-Typen verschiebt

Alle drei Agenten-Typen haben Stimme. Die Schwerpunkte sind sehr unterschiedlich.

| Typ | Hauptempfänger | Was zählt | Was fast nicht vorkommt |
|---|---|---|---|
| **Agentischer Assistent** | Mensch | Tonalität, Tiefe, Proaktivität, Medium — voll ausgespielt | System-Logs eher knapp |
| **Autonomer Agent** | Nachgelagerte Systeme, Logs, Reports | Struktur, Reasoning-Trace, Vollständigkeit | Tonalität (kein Empfänger, der sie liest) |
| **HITL** | Sachbearbeitung als primärer Empfänger, Werkzeuge unterwegs | Übergabe-Display: strukturiert, klar, mit klarer Entscheidungsfrage | Direkter Endkundenton |

Daraus folgt: Wer einen Pflege-Assistenten baut und nicht in die Tonalitäts- und Tiefen-Konfiguration investiert, baut einen technisch funktionierenden Roboter. Wer einen autonomen Bestandsprüfer baut und Tonalität optimiert, verbrennt Zeit am falschen Ende — was zählt, ist die Struktur des Outputs für die spätere Auswertung. Wer ein HITL-System baut und am Übergabe-Display spart, macht der Sachbearbeitung das Leben schwer und reduziert die Akzeptanz des Agenten.

Stimme ist nicht überall gleich teuer — sie ist nur überall *präsent* in unterschiedlicher Form.

---

## 5.8 Was passiert, wenn die Stimme falsch konfiguriert ist

Vier typische Fehler, die in der Praxis immer wieder auftauchen.

**Textwand für gestresste Empfänger.** Der Agent gibt eine vollständige Antwort, weil er es kann — nicht, weil sie gebraucht wird. Bei einer akuten Sorge ist das nicht hilfreich, sondern überfordernd.

**Tonalität verfehlt.** Der Agent klingt sachlich-distanziert in einer emotional aufgeladenen Situation, oder umgekehrt: therapeutisch-warm bei einer banalen Sachfrage. Beides verfehlt den Empfänger.

**Autonomer Output ohne Reasoning-Trace.** Der Agent loggt *„Geprüft: ja"*, ohne zu zeigen, wie er zu dem Ergebnis kam. Bei einer Stichprobe weiß niemand, ob das Ergebnis stimmt. Der Output ist da, aber er ist wertlos.

**HITL-Übergabe ohne Entscheidungsfrage.** Der Agent schickt der Sachbearbeitung eine ausführliche Recherche, ohne klar zu sagen, *was* die Sachbearbeiterin entscheiden soll. Sie liest, denkt nach, sucht selbst — und der Agent hat keine Zeit gespart, sondern verschoben.

Allen vier Fehlern ist gemeinsam: Sie lassen sich nicht „durch besseres Modell" lösen. Sie sind Konfigurationsfehler — Stimme ist eine Designentscheidung, kein technisches Detail. Wer einen Agenten in Produktion bringt, ohne über Stimme nachgedacht zu haben, hat keinen Agenten in Produktion. Er hat einen Generator in Produktion.

---

## Take-aways

- **Stimme ist Übergabe an einen Empfänger — wer immer das ist.** Mensch, Werkzeug, nachgelagertes System. Drei Empfänger, drei Stimm-Varianten, dieselbe Funktion.
- **Bei Mensch-Empfängern steuern vier Parameter den Output.** Tonalität, Informationstiefe, Proaktivität, Format. Sie werden konfiguriert, nicht maximiert.
- **Kognitive Kapazität filtert das Ergebnis nochmal.** Was der Empfänger gerade verarbeiten kann, entscheidet über Länge, Struktur, Anzahl der Optionen. Sensor liefert das Signal, Stimme reagiert.
- **ACI ist die Stimme zum Werkzeug.** Tool-Beschreibungen, Parameter, Fehlerresistenz. Wer hier spart, baut Schwachstellen, die erst im Betrieb sichtbar werden.
- **System-Outputs sind keine geringere Stimm-Aufgabe.** Beim autonomen Agenten und beim HITL ist die Struktur des Outputs das, was den Wert der ganzen Arbeit konserviert. Ohne Reasoning-Trace ist das beste Ergebnis wertlos.
- **Stimme ist eine Designentscheidung, kein Default.** Falsch konfigurierte Stimme verfehlt den Empfänger zuverlässig — in jedem der drei Typen, auf je eigene Weise.

---

**Nächster Schritt:** [[06_kompass]] — die Werte, harten Constraints und Vertrauenshierarchie, die durch alle Bausteine wirken.

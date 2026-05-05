---
title: Teil 2 — Das Gesamtmodell
type: guide
status: draft
created: '2026-04-28'
updated: '2026-04-28'
tags:
  - agents
  - leitfaden
  - ultimate-leitfaden
  - architektur
  - bausteine
  - gesamtmodell
  - querschnittsschichten
  - vertrauenstreppe
sources:
  - 'self-authored:loschke:enterprise-ai-agents'
area: ai-agents
audience:
  - fuehrungskraft
  - entscheider
  - praktiker
  - konzepter
  - entwickler
level: basic
intent:
  - verstehen
  - einordnen
  - vermitteln
  - ueberzeugen
contains:
  - concept
  - framework
  - analogy
  - argument
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Teil 2 — Das Gesamtmodell

*Status: 2.1 ✅ · 2.2 ✅ · 2.3 ✅ · 2.4 ✅*

---

Wenn man einen Agenten verstehen oder erklären will, braucht man eine Karte. Dieser Teil zeichnet die Karte: fünf Bausteine, ihre Beziehung zueinander, und ein durchlaufendes Beispiel, an dem wir sie in den nächsten Kapiteln durchspielen.

Bevor wir die Bausteine ansehen, lohnt sich aber die Frage: *Wozu eigentlich der ganze Aufwand?* Genau die beantwortet dieser Eingang.

---

## 2.1 Die Vertrauenstreppe — wozu der Aufwand

Ein wiederkehrender Einwand in jedem Strategiemeeting zu KI in regulierten Domänen lautet: *„Solche Auskünfte kann man heute auch über ChatGPT bekommen — wozu ein eigener Agent?"* Die Antwort darauf ist keine Architektur-Erklärung. Sie ist eine Treppe.

Vier Stufen unterscheiden, was zwischen *plausibel klingender Antwort* und *verlässlicher Antwort* liegt. Jede Stufe ist sichtbar besser als die vorige. Und jede Stufe braucht etwas, das man bauen muss.

| Stufe | Was die Antwort leistet | Was dafür gebraucht wird |
|---|---|---|
| **1 — Plausibel** | Die Antwort klingt richtig. | Nichts. Das kann jedes LLM. |
| **2 — Korrekt** | Die Antwort stimmt fachlich. | Geprüftes Wissen, Fakten, autorisierte Quellen. |
| **3 — Hilfreich** | Die Antwort versteht das Bedürfnis. | Verständnis dafür, was der Mensch eigentlich braucht. |
| **4 — Verlässlich** | Die Antwort hält die Grenzen ein und kommt richtig an. | Leitplanken, Regeln und passende Kommunikation. |

### Dieselbe Frage, vier Stufen

Die Treppe wird konkret, wenn man sie an einer Anfrage durchspielt:

> *„Meine Mutter hat Pflegegrad 2. Wie viel Pflegegeld bekommt sie?"*

**Stufe 1 — Plausibel.** Eine Antwort, die ein generisches LLM ohne Kontext geben würde:

> *„Bei Pflegegrad 2 erhalten Versicherte in der Regel einen Zuschuss von bis zu 316 € monatlich. Die genauen Beträge können je nach Krankenkasse variieren."*

Klingt richtig. Ist falsch. Der Betrag stimmt nicht — der korrekte Wert ist 332 € seit der letzten Anpassung. Und die Aussage *„je nach Krankenkasse"* ist sachlich falsch: Pflegegeld nach §37 SGB XI ist bundeseinheitlich, nicht kassenspezifisch. Eine plausibel klingende Antwort, die im Detail nicht trägt — und die ein Versicherter, der die Materie nicht kennt, nicht von einer korrekten unterscheiden kann.

**Stufe 2 — Korrekt.** Eine Antwort mit geprüftem Wissen:

> *„Bei Pflegegrad 2 beträgt das Pflegegeld 332 € pro Monat (§37 SGB XI). Voraussetzung ist die häusliche Pflege durch Angehörige oder Ehrenamtliche."*

Fakten stimmen. Aber: Die Antwort ignoriert, dass eine Tochter fragt, die sich um ihre Mutter sorgt. Sie liefert eine Behördenauskunft, kein Gespräch.

**Stufe 3 — Hilfreich.** Eine Antwort, die das Bedürfnis hinter der Frage erkennt:

> *„Ihre Mutter hat bei Pflegegrad 2 Anspruch auf 332 €/Monat Pflegegeld. Falls Sie einen Pflegedienst einschalten möchten: Pflegegeld und Sachleistung lassen sich auch kombinieren — das lohnt sich oft."*

Erkennt die Situation und denkt proaktiv weiter. Was noch fehlt: Absicherung. Wenn der individuelle Anspruch von der Standard-Konstellation abweicht (etwa weil ein Höherstufungsantrag läuft, weil Ruhensgründe vorliegen, weil bestimmte Voraussetzungen nicht erfüllt sind), könnte die konkrete Auskunft falsch sein.

**Stufe 4 — Verlässlich.** Eine Antwort mit Leitplanken und passender Kommunikation:

> *„Ihre Mutter hat bei Pflegegrad 2 Anspruch auf 332 €/Monat Pflegegeld. Pflegegeld und Sachleistung lassen sich kombinieren. Beträge gemäß aktueller Gesetzeslage — individuelle Ansprüche können abweichen. Möchten Sie einen Termin mit einem Pflegeberater?"*

Korrekt, empathisch, mit Disclaimer und Handlungsoption. Genau das, was eine erfahrene Pflegeberaterin am Telefon liefern würde.

### Was die Treppe für unser Modell bedeutet

Die Treppe ist eine Übersetzung. Sie übersetzt das Architektur-Vokabular der nächsten Kapitel — Wissen, Sensor, Kompass, Stimme — in eine erlebte Antwort-Qualität. Was beim Empfänger ankommt, hat eine Stufe. Was wir in den Kapiteln 3 bis 7 bauen, ist genau das, was die Stufen ermöglicht.

| Stufe | Welcher Baustein steckt dahinter |
|---|---|
| 1 — Plausibel | (kein Agent — nur das nackte Modell) |
| 2 — Korrekt | **Motor — Wissen.** Geprüfte Bausteine statt Trainings-Generalwissen. Mehr in [[04_motor]]. |
| 3 — Hilfreich | **Sensor — Intentionserkennung.** Verstehen, was der Mensch eigentlich braucht. Mehr in [[03_sensor]]. |
| 4 — Verlässlich | **Kompass + Stimme.** Leitplanken plus Kommunikation, die ankommt. Mehr in [[06_kompass]] und [[05_stimme]]. |

Das ist eine kleine Schiefheit: Stufe 4 bündelt zwei Bausteine. Im Erleben gehören sie zusammen — *„hält die Grenzen ein"* und *„kommt richtig an"* sind aus Empfänger-Sicht eine Sache. Im Bauplan sind es zwei. Wir lösen das in den jeweiligen Kapiteln auf.

**Faustregel:** Stufe 1 schafft jedes LLM, ohne Aufwand. Die Stufen 2 bis 4 sind die eigentliche Arbeit. Sie ist das, was dieses Buch beschreibt.

---

## 2.2 Die fünf Bausteine

Ein Agent zerfällt in drei Reihen-Bausteine und zwei Querschnittsschichten.

```
╔═══════════════════════════════════════════════════════════════╗
║                          KOMPASS                              ║
║              Werte · Constraints · Hierarchie                 ║
╚═══════════════════════════════════════════════════════════════╝

   ┌──────────┐       ┌──────────────────┐       ┌──────────┐
   │  SENSOR  │  →    │      MOTOR       │   →   │  STIMME  │
   │          │       │                  │       │          │
   │ Anliegen │       │ Reasoning-Loop   │       │ Mensch   │
   │ erkennen │       │ Wissen           │       │ Werkzeug │
   │          │       │ Werkzeuge        │       │ System   │
   │          │       │ Gedächtnis       │       │          │
   └──────────┘       └──────────────────┘       └──────────┘

╔═══════════════════════════════════════════════════════════════╗
║                       PRÜFSTAND                                ║
║          Evals · Logs · Monitoring · Guardrails                ║
╚═══════════════════════════════════════════════════════════════╝
```

**Die Reihen-Bausteine:**

- **Sensor** — erkennt, was das System gerade tun soll. Bei einem Assistenten heißt das: Was ist die Intention hinter der Anfrage, was steckt dahinter? Bei einem autonomen Agenten: Welcher Trigger ist gekommen, mit welchem Auftrag? Mehr in [[03_sensor]].
- **Motor** — der Maschinenraum. Hier wird gedacht, geplant, gehandelt, erinnert. Vier Komponenten greifen ineinander: Reasoning-Loop, Wissen, Werkzeuge, Gedächtnis. Mehr in [[04_motor]].
- **Stimme** — wie das Ergebnis nach außen kommt. Tonalität, Informationstiefe, Proaktivität, Format. Stimme ist mehr als Schreibstil — es ist die gesamte Übergabe an den Empfänger, ob Mensch oder System. Mehr in [[05_stimme]].

**Die Querschnittsschichten:**

- **Kompass** — Werte, harte Constraints, Vertrauenshierarchie. Der Kompass ist *kein* Schritt zwischen Sensor und Motor. Er wirkt *in* jeden der Reihen-Bausteine: Welche Anfragen lehnt der Sensor ab? Welche Reasoning-Pfade sind im Motor erlaubt? Welche Formulierungen sind in der Stimme tabu? Mehr in [[06_kompass]].
- **Prüfstand** — Evals, Logs, Monitoring, Guardrails. Der Prüfstand beobachtet alle drei Reihen-Bausteine kontinuierlich. Er ist *kein* Schritt nach der Stimme. Er ist die Betriebsinfrastruktur, die ein autonomes System überhaupt erst produktionsreif macht. Mehr in [[07_pruefstand]].

**Warum diese Trennung?** Weil Reihen-Bausteine und Querschnittsschichten unterschiedlich gebaut, gewartet und betrieben werden. Sensor, Motor und Stimme werden pro Anfrage durchlaufen. Kompass und Prüfstand werden einmal etabliert und dann dauerhaft betrieben. Wer die beiden Ebenen zusammenwirft, baut entweder einen Agenten ohne Verfassung (alles ist Verhandlungssache zur Laufzeit) oder einen mit zu starrer Verfassung (jeder Werte-Konflikt blockiert den Loop).

**Eine Warnung zur Auto-Metapher:** Sensor → Motor → Stimme passt gut. Treibstoff (Wissen), Aktoren (Werkzeuge), Schmierstoff (Gedächtnis) — passt auch noch. Aber Kompass und Prüfstand passen nur teilweise. Im Auto gibt es kein „Wertesystem", und der TÜV ist ein externer Akteur, kein Bauteil. Wir benutzen die Metapher dort, wo sie hilft, und lassen sie liegen, wo sie nicht trägt.

## 2.3 Das Pflegedienst-Beispiel als roter Faden

In Teil 3 bis 7 verwenden wir eine durchlaufende Anfrage:

> *„Meine Mutter braucht einen Pflegedienst. Was zahlt die Kasse?"*

Sie ist verwandt mit dem Pflegegeld-Beispiel aus 2.1, aber etwas offener gehalten — kein Pflegegrad genannt, weniger spezifisch. Damit hat jeder Baustein etwas zu tun: Sie hat eine sachliche Komponente (Leistungsklärung) und eine emotionale (Sorge um einen Angehörigen). Sie ist offen formuliert. Und sie ist haftungsrelevant.

Genau diese Eigenschaften machen das Beispiel didaktisch nützlich. In jedem Kapitel werden wir an dem Beispiel zeigen, was der jeweilige Baustein konkret leistet. Das gibt dem Leser einen Faden, an dem er das Modell entlanghangeln kann.

In [[08_drei-typen]] wird dieselbe Domäne dann auch für die anderen beiden Agenten-Typen aufgegriffen — allerdings mit anderen Szenarien (monatliche Bestandsprüfung, Antragsbearbeitung). Das ist nicht *dieselbe Frage in drei Modi*, sondern *drei Szenarien aus derselben Domäne*. Eine Anfrage wie oben ergibt für einen autonomen Agenten keinen Sinn — dort ist der Auslöser ein Trigger, kein Mensch.

## 2.4 Zwei Sortierungen, zwei Antworten

Bevor wir in die einzelnen Bausteine gehen, lohnt sich eine doppelte Vorklärung. Bausteine lassen sich auf zwei verschiedene Weisen sortieren — je nachdem, welche Frage man stellt. Beide Sortierungen sind nützlich, und sie meinen nicht dasselbe.

### Wann ist welcher Baustein aktiv?

Die erste Frage ist die der Aktivierung: *Wann läuft was?* Drei Bausteine springen pro Anfrage neu an — jede Interaktion mit dem Agenten zündet einen vollen Durchlauf. Zwei sind dauerhaft im Hintergrund da, einmal eingerichtet, kontinuierlich gepflegt.

| Baustein | Wann aktiv | Charakter |
|----------|-----------|-----------|
| **Kompass** | einmal definiert, immer wirksam | Infrastruktur |
| **Prüfstand** | kontinuierlich, im Hintergrund | Infrastruktur |
| **Sensor** | bei jeder Anfrage / jedem Trigger | Laufzeit |
| **Motor** | bei jeder Anfrage / jedem Trigger | Laufzeit |
| **Stimme** | bei jeder Anfrage / jedem Trigger | Laufzeit |

**Was das praktisch bedeutet:** Kompass und Prüfstand baut man *vor* dem Agenten — und pflegt sie *neben* dem Agenten. Wer einen Agenten in Produktion bringt, ohne Evals und Monitoring zu haben, hat keinen produktionsfähigen Agenten. Wer Werte und Constraints erst nach den ersten Vorfällen reaktiv nachträgt, baut sich ein Compliance-Problem.

Sensor, Motor und Stimme sind dagegen das, was bei jeder Anfrage neu passiert. Hier sitzt das, was Nutzer zur Laufzeit als „den Agenten" erleben. Aber sie operieren immer innerhalb des Rahmens, den Kompass und Prüfstand setzen.

Diese Unterscheidung ist auch für die Investitionslogik wichtig: Infrastruktur-Bausteine sind Einmal-Investitionen mit Wartungskosten. Laufzeit-Bausteine kosten pro Anfrage (Tokens, API-Aufrufe, Tool-Calls). Wer das vermischt, schätzt Aufwände falsch ein.

### Wie dynamisch ändern sich die Inhalte?

Die zweite Frage ist eine andere — und sie lässt sich nicht aus der ersten ableiten. *Pro Anfrage aktiv* heißt nicht *pro Anfrage anders*. Der Motor läuft jedes Mal neu durch, aber die Wissensbausteine, die er dabei zieht, sind seit Wochen unverändert. Umgekehrt ist der Prüfstand zwar Infrastruktur, seine Eval-Suite wächst aber kontinuierlich mit jeder gelernten Lektion.

Die Inhalte des Agenten haben verschiedene Pflege-Rhythmen. Drei grobe Klassen, die quer durch alle Bausteine laufen:

| Wie dynamisch | Was darunter fällt | Wer pflegt |
|---|---|---|
| **Selten geändert** | Werte und Constraints, Wissensbausteine, Skill-Definitionen, Stimm-Konfiguration, Tool-Beschreibungen | Governance, Fachredaktion, Konzeption — periodisch oder bei Anlass |
| **Regelmäßig gepflegt** | Eval-Suite, Monitoring-Auswertung, Versionierung, Skill-Justierung | Tech und Fachredaktion gemeinsam — als laufende Disziplin |
| **Pro Anfrage neu** | Aktuelle Anfrage, Working Memory, Tool-Ergebnisse, generierte Antwort | entsteht und vergeht im Durchlauf, niemand „pflegt" das |

Wichtig zu sehen: Diese Tabelle sortiert *nicht* nach Bausteinen. Die meisten Bausteine enthalten Anteile aus mehreren Zeilen. Der Motor zum Beispiel hat stabile Wissensbausteine (Zeile 1) und flüchtiges Working Memory (Zeile 3). Der Kompass hat fast vollständig stabile Inhalte (Zeile 1), aber die Eval-Suite, die seine Einhaltung prüft (Zeile 2), gehört zum Prüfstand. Die Stimm-Konfiguration ist stabil (Zeile 1), die konkret formulierte Antwort ist flüchtig (Zeile 3).

### Warum beide Sortierungen gebraucht werden

Die beiden Tabellen beantworten verschiedene Fragen — und sie helfen bei verschiedenen Entscheidungen.

Tabelle A — *Wann aktiv?* — ist relevant für die **Architektur und die Kostenrechnung**. Wer Aufwände schätzt, muss wissen, was Einmal-Aufwand ist und was Pro-Anfrage-Aufwand. Wer einen Agenten betreibt, muss wissen, welche Komponenten unabhängig vom Trafficvolumen weiterlaufen müssen.

Tabelle B — *Wie dynamisch?* — ist relevant für **Pflege, Verantwortlichkeiten und Governance**. Wer kümmert sich um was, in welchem Rhythmus? Stabile Inhalte brauchen periodische Reviews und klare redaktionelle Hoheit. Regelmäßig gepflegte Inhalte brauchen einen Betriebsmodus mit definierten Rollen. Pro-Anfrage-Inhalte werden nicht gepflegt — sie entstehen und vergehen, aber sie müssen geloggt und beobachtbar sein.

Wer nur die erste Sortierung kennt, denkt an den Agenten als zwei Schichten (Infrastruktur, Laufzeit) und übersieht, dass *innerhalb* der Infrastruktur-Schicht sehr unterschiedliche Pflege-Rhythmen liegen. Wer nur die zweite Sortierung kennt, übersieht, dass auch stabile Inhalte zur Laufzeit aktiv werden — die Wissensbausteine ändern sich nicht, aber sie werden bei jeder Anfrage gezogen.

In den nächsten Kapiteln spielen wir die Bausteine einzeln durch. An mehreren Stellen kommen die beiden Achsen wieder vor: bei Wissen unter dem Stichwort *Build Context vs. Runtime Context* (Teil 4), beim Kompass unter *konfigurierbar vs. fix* (Teil 6), beim Prüfstand bei den verschiedenen Pflege-Rhythmen (Teil 7). Die Tabellen hier setzen die Linie, an der das alles aufgehängt ist.

---

**Nächster Schritt:** [[03_sensor]] — wie der Agent erkennt, was er tun soll.

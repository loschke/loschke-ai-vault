---
title: Teil 8 — Drei Typen am Pflege-Beispiel
type: guide
status: draft
created: '2026-04-28'
updated: '2026-04-28'
tags:
  - agents
  - leitfaden
  - ultimate-leitfaden
  - drei-typen
  - assistent
  - autonom
  - hitl
  - vergleich
  - synthese
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
  - bewerten
contains:
  - concept
  - framework
  - method
  - contrast
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Teil 8 — Drei Typen am Pflege-Beispiel

*Status: 8.1 ✅ · 8.2 ✅ · 8.3 ✅ · 8.4 ✅ · 8.5 ✅ · 8.6 ✅*

---

In Teil 1 haben wir die drei Agenten-Typen eingeführt — agentischer Assistent, autonomer Agent, HITL. In den Teilen 3 bis 7 haben wir die Bausteine durchgearbeitet, mit dem Pflegedienst-Beispiel als rotem Faden — primär aus Sicht des Assistenten. Jetzt ist es Zeit, alle drei Typen nebeneinander zu legen und zu zeigen, wie sich die Bausteine verschieben.

Die zentrale Beobachtung: Es sind dieselben fünf Bausteine. Aber wo die Investition liegt, ist sehr unterschiedlich. Wer einen Agenten bewertet oder beauftragt, muss wissen, welcher Typ vorliegt — sonst rechnet man falsche Aufwände ein und investiert an den falschen Stellen.

---

## 8.1 Dieselben Bausteine, andere Gewichte

Sensor, Motor, Stimme, Kompass, Prüfstand. Die Architektur ist konstant. Was sich ändert, sind die Gewichte: wo viel Aufwand reinfließt, wo wenig, was die kritische Stelle ist und was die nebensächliche.

Drei Beobachtungen, die für alles Folgende gelten:

**Der Motor ist immer groß.** Egal ob Mensch im Dialog, Trigger im Hintergrund oder Vorgang in der Sachbearbeitung — der Reasoning-Loop, das Wissen, die Werkzeuge und das Gedächtnis brauchen sorgfältige Konzeption. Sparen am Motor heißt am Kern sparen.

**Der Kompass ist immer voll.** Werte, Constraints, Vertrauenshierarchie — die gelten unabhängig vom Typ. Ein autonomer Agent braucht denselben Kompass wie ein dialogischer. Was sich ändert, ist die Durchsetzungsmechanik, nicht die Verfassung.

**Sensor und Stimme verschieben sich am stärksten.** Beim Assistenten ist beides groß. Beim autonomen Agenten wird der Sensor klein und die Stimme System-orientiert. Beim HITL bleibt Sensor mittel und die Stimme wird zum Übergabe-Display für die Sachbearbeitung.

Der Prüfstand verhält sich gegenläufig: je weniger Mensch zur Laufzeit, desto wichtiger.

---

## 8.2 Variante 1: Der agentische Assistent

In den Teilen 3 bis 7 ausführlich besprochen. Hier nur die Zusammenfassung als Vergleichsbasis.

**Szenario:** Eine Versicherte ruft im digitalen Kanal der Kasse an oder schreibt im Chat. *„Meine Mutter braucht einen Pflegedienst. Was zahlt die Kasse?"*

| Baustein | Ausprägung | Was hier passiert |
|---|---|---|
| **Sensor** | Groß | Intentionserkennung — primär Leistungsklärung, sekundär Angehörigen-Sorge, emotionale Note. |
| **Motor** | Groß | Skill-basierte Antwort, Wissen aus Build Context, ggf. Werkzeug Pflegegradrechner. |
| **Stimme** | Groß | Empathisch-sachliche Tonalität, mittlere Tiefe, kompaktes Format. |
| **Kompass** | Voll | Keine individuelle Zusage, Spannen statt Punktwerte, Beratungsverweis. |
| **Prüfstand** | Mittel | Nutzer-Feedback und Stichproben sind die Hälfte des Signals. |

Was den Assistenten ausmacht: Mensch zur Laufzeit präsent, Dialog, sofortiges Feedback. Wer hier antwortet, antwortet jemand Konkretem. Das prägt jeden Baustein.

---

## 8.3 Variante 2: Der autonome Agent

Bisher nur skizziert. Jetzt ausgespielt.

### Szenario

Die Pflegekasse hat tausende Bestandsversicherte mit Pflegegrad. Pflegegrade können sich verändern — Verschlechterung des Gesundheitszustands, anstehende Höherstufung, neue Anspruchssituation durch Gesetzesänderungen. Bisher ist das ein reaktiver Prozess: Versicherte oder Angehörige stellen Höherstufungsanträge, die Sachbearbeitung prüft.

Ein autonomer Agent läuft monatlich über den Bestand und prüft proaktiv: *Gibt es Indizien für eine Pflegegradanpassung? Sind neue Leistungsansprüche entstanden, die der Versicherte vermutlich nicht kennt? Sind Beratungstermine abgelaufen, die regelmäßig fällig wären?*

Das Ergebnis pro Versicherten ist nicht eine direkte Aktion. Es ist ein strukturierter Hinweis-Datensatz, der in der Sachbearbeitung landet — entweder als Vorschlag *„dieser Fall sollte angeschaut werden"* oder als automatischer Trigger für eine Beratungseinladung an den Versicherten.

### Wie sich die Bausteine verteilen

| Baustein | Ausprägung | Was hier passiert |
|---|---|---|
| **Sensor** | Klein | Trigger ist der Cronjob (z.B. erster Werktag im Monat). Pro Versicherten: Auftragsklärung — sind alle Stammdaten vorhanden, gibt es Sperrhinweise, ist heute überhaupt der richtige Tag? |
| **Motor** | Sehr groß | Pro Versicherten ein eigener Loop. Stammdaten holen, Pflegehistorie prüfen, gegen Auffälligkeitsmuster abgleichen, ggf. medizinische Stammdaten querprüfen. Skill-basiert: *„Höherstufungs-Indikatoren-Skill"*, *„Beratungsfälligkeit-Skill"*. |
| **Stimme** | Klein bis mittel | Kein Mensch im Dialog. Output ist strukturierter Datensatz mit Reasoning-Trace: was wurde geprüft, welche Indikatoren wurden gefunden, mit welcher Konfidenz, welche Empfehlung. Plus Fall-Klassifikation für die Sachbearbeitungs-Queue. |
| **Kompass** | Voll | Gleiche Verfassung wie beim Assistenten. Plus: keine direkten Aktionen mit Außenwirkung ohne menschliche Freigabe. Insbesondere keine direkten Briefe an Versicherte. |
| **Prüfstand** | **Sehr groß** | Niemand schaut zu. Eval-Suite mit Bestands-Stichproben, regelmäßiges Sampling der Outputs durch Sachbearbeitung, Drift-Monitoring (steigen Höherstufungs-Vorschläge ohne nachweisbaren Grund?), Versionierung jeder Skill- und Wissensbasis-Änderung. |

### Was den autonomen Agenten besonders macht

**Niemand korrigiert zur Laufzeit.** Wenn der Agent in der dritten Iteration einen Fehler macht, wird er nicht beim vierten Mal von einem Nutzer zurückgepfiffen. Er macht den Fehler einfach weiter. Das macht den Prüfstand zur Lebensversicherung des ganzen Setups.

**Volumenzwang.** Tausend Versicherte pro Monat heißt: was beim Assistenten in einem Dialog ausverhandelt wird, muss hier strukturell vorab geklärt sein. Jede Sonderkonstellation braucht entweder eine Skill-Antwort oder eine Eskalationsregel — *„weiß nicht, an Sachbearbeitung weiterleiten"*. Improvisation ist keine Option.

**Ergebnis ist nie Endaktion.** Ein gut gebauter autonomer Agent in einem regulierten Umfeld macht keine Außenkommunikation. Er produziert Vorschläge, die ein Mensch (oder ein nachgelagerter, anders gestalteter Prozess) übernimmt. Das ist keine Schwäche — es ist die saubere Trennung zwischen *„denkende Vorarbeit"* und *„rechtsverbindliche Aktion"*.

**Die Stimme ist kleiner, aber nicht unwichtig.** Schlechte System-Outputs machen den ganzen Prüfstand wertlos. Wenn die Sachbearbeitung pro Datensatz fünf Minuten braucht, um zu verstehen, was der Agent vorschlägt, kippt die Akzeptanz nach drei Tagen. Reasoning-Trace plus klare Fall-Klassifikation sind hier nicht nice-to-have, sondern Voraussetzung.

---

## 8.4 Variante 3: Human in the Loop

Auch bisher nur skizziert. Jetzt ausgespielt.

### Szenario

Die Pflegekasse erhält Höherstufungsanträge. Bisher: Sachbearbeitung liest den Antrag, sichtet die Pflegedokumentation, prüft Vollständigkeit, ordnet ein, formuliert Bescheid-Vorschlag, gibt frei. Aufwand: 30 bis 90 Minuten pro Fall.

Ein HITL-Setup übernimmt die Vorarbeit. Der Agent liest den Antrag plus Pflegedokumentation, prüft formale Vollständigkeit, identifiziert die zentralen Indikatoren für die Pflegegrad-Einschätzung, kategorisiert den Fall (klar / unklar / eskalationsbedürftig), formuliert einen Bescheid-Vorschlag samt Begründung. Die Sachbearbeitung liest, prüft, ergänzt, korrigiert, gibt frei.

Aufwand pro Fall danach idealerweise 5 bis 20 Minuten. Aber nur, wenn die Übergabe vom Agenten an die Sachbearbeitung sauber ist — sonst spart man nichts, sondern verschiebt Arbeit.

### Wie sich die Bausteine verteilen

| Baustein | Ausprägung | Was hier passiert |
|---|---|---|
| **Sensor** | Mittel | Trigger ist Antragseingang. Plus: Anfragen aus dem Sachbearbeitungs-Frontend (*„prüf nochmal Position X"*, *„zeig mir vergleichbare Fälle"*). Beide Input-Wege müssen sauber unterschieden werden. |
| **Motor** | Groß | Strukturanalyse des Antrags, Querprüfung gegen Wissensbasis (§ 14, § 15 SGB XI, MDK-Begutachtungsanleitungen, interne Bearbeitungsrichtlinien), Skills für Indikator-Bewertung und Bescheid-Entwurf. Pflegehistorie aus Backend-System. |
| **Stimme** | Mittel bis groß | Übergabe-Display für die Sachbearbeitung — strukturiert, mit klarer Entscheidungsfrage. *„Empfehlung: Pflegegrad 3 zuerkennen. Konfidenz: hoch. Zentrale Indikatoren: …. Unklar: …. Bitte prüfen."* Klare Felder, was die Sachbearbeitung jetzt entscheiden muss. |
| **Kompass** | Voll | Gleiche Verfassung. Plus: keine Bescheid-Erstellung ohne menschliche Freigabe. Klare Trennung zwischen Vorschlag und Entscheidung. |
| **Prüfstand** | Groß | Übergabepunkte zur Sachbearbeitung müssen verlässlich sein. Eval-Suite gegen historische Fälle (Stimmt die Empfehlung mit dem damaligen Bescheid überein? Wo weichen wir ab — und warum?). Monitoring der Annahme-Quote (wie oft wird die Empfehlung übernommen vs. korrigiert?). |

### Was HITL besonders macht

**Der Übergabepunkt ist das Produkt.** Die Sachbearbeitung interagiert nicht mit dem Reasoning des Agenten, sondern mit seinem Output. Wenn der Output schlecht strukturiert ist, ist der Agent praktisch nutzlos — egal, wie gut er denkt. Die Übergabe ist hier kein Nebenschauplatz, sondern der Wertbeitrag.

**Die Sachbearbeitung muss vertrauen können.** Vertrauen entsteht nicht durch perfekte Empfehlungen. Es entsteht durch *nachvollziehbare* Empfehlungen. Reasoning-Trace, Konfidenzangaben, klar markierte Unsicherheiten — das ist es, was die Sachbearbeitung braucht, um den Vorschlag effizient zu prüfen statt komplett neu aufzurollen.

**Die Sachbearbeitung wird zum Bewerter.** Jeder bearbeitete Fall ist implizit eine Bewertung des Vorschlags. Empfehlung übernommen ohne Änderung? Sehr gut. Empfehlung mit kleinen Korrekturen übernommen? OK. Empfehlung verworfen, Sachbearbeitung musste komplett neu prüfen? Schlecht — das ist ein Trainingssignal für die nächste Version. Wer HITL baut, baut implizit auch ein Feedback-System für den Prüfstand.

**HITL ist nicht der Mittelweg.** HITL ist nicht *„halb Assistent, halb autonom"*. Es ist eine eigene Architektur mit eigenen Anforderungen — vor allem an die Übergabe. Wer HITL als billige Variante des autonomen Agenten begreift (*„läuft ja nur, bis ein Mensch zustimmt"*), unterschätzt den Aufwand für die Übergabe-Gestaltung gewaltig.

---

## 8.5 Was bleibt, was sich verschiebt

Die Verschiebungen lassen sich in einer einzigen Tabelle zusammenfassen.

| Baustein | Assistent | Autonomer Agent | HITL |
|---|---|---|---|
| **Sensor** | Groß (Intentionen, Mehrdeutigkeit, Verläufe) | Klein (Trigger plus Auftragsklärung) | Mittel (Trigger plus interne Anfragen) |
| **Motor** | Groß | Groß | Groß |
| **Stimme** | Groß (Tonalität, Tiefe, Format) | Klein bis mittel (System-Outputs, Trace) | Mittel bis groß (Übergabe-Display) |
| **Kompass** | Voll | Voll | Voll |
| **Prüfstand** | Mittel (Feedback im Dialog) | **Sehr groß** (einzige Qualitätskontrolle) | Groß (Übergabepunkte, Annahme-Quote) |

Was die Tabelle deutlich macht: **Der Motor ist immer groß. Der Kompass ist immer voll.** Die Variabilität liegt bei Sensor, Stimme und Prüfstand — und sie folgt einer klaren Logik.

Faustregel: *Je weniger Mensch zur Laufzeit, desto kleiner der Sensor (in der Intentions-Dimension), desto kleiner die Stimme (in der Tonalitäts-Dimension), desto größer der Prüfstand.* Beim Assistenten wird der Mensch im Dialog zur Korrekturinstanz. Beim autonomen Agenten gibt es keine Korrekturinstanz außer dem Prüfstand. Beim HITL liegt sie an den Übergabepunkten.

Diese Verschiebung hat unmittelbare Folgen für die Investitionsplanung. Wer den falschen Typ aufbaut oder mit den falschen Gewichten arbeitet, verbrennt Geld an den falschen Stellen.

---

## 8.6 Wann welcher Typ — eine knappe Heuristik

Die ausführliche Entscheidungslogik kommt in [[09_wann-lohnt-sich-was]]. Hier nur die Schnell-Heuristik:

**Assistent**, wenn der Mensch den Prozess startet und die Antwort sofort braucht. Wenn jeder Fall potenziell anders ist und Dialog hilft. Wenn die Konsequenzen der Antwort beim Menschen liegen, nicht im System.

**Autonomer Agent**, wenn der Prozess sich periodisch wiederholt, der Pfad pro Fall variabel ist (sonst reicht ein Workflow), und die Ergebnisse nicht direkt rechtsverbindlich nach außen wirken. Hohes Volumen plus strukturierter Charakter ist der typische Anwendungsfall.

**HITL**, wenn der Prozess Vorarbeit braucht, die ein Agent leisten kann, aber die Entscheidung in der Sache bei einem Menschen liegen muss. Kombination aus *„Agent kann den Berg an Material vorsortieren"* und *„rechtlich oder faktisch braucht es einen Menschen am Ende"*.

Was *gegen* den jeweiligen Typ spricht:

- Gegen den Assistenten: niedriges Volumen, das den Aufwand nicht trägt. Oder hochsensible Vorgänge, in denen kein Risiko von Improvisation toleriert wird.
- Gegen den autonomen Agenten: kleinste Folgen am Ende sind teuer und nicht reversibel — dann braucht es zwingend HITL oder Dialog.
- Gegen HITL: wenn die Sachbearbeitung kapazitätsmäßig gar nicht da ist, eingehende Vorschläge zu prüfen. HITL ohne Mensch funktioniert nicht.

In der Praxis sind Mischformen üblich. Ein autonomer Bestandsprüfer eskaliert in unklaren Fällen an einen HITL-Pfad. Ein Assistent bietet einem Versicherten an, einen längeren Vorgang in den Sachbearbeitungs-Pfad zu übergeben. Das sind keine Architekturbrüche, sondern saubere Übergänge — solange sie konzeptionell durchgedacht sind.

---

## Take-aways

- **Dieselben fünf Bausteine, andere Gewichte.** Sensor, Motor, Stimme, Kompass, Prüfstand sind in jedem Typ präsent. Was sich ändert, ist wo die Investition liegt.
- **Motor und Kompass sind in jedem Typ groß und voll.** Wer hier spart, baut keinen Agenten, sondern eine Lücke.
- **Sensor, Stimme und Prüfstand verschieben sich zwischen den Typen.** Beim Assistenten dominieren Sensor und Stimme. Beim autonomen Agenten dominiert der Prüfstand. Beim HITL ist die Übergabe-Stimme das Produkt.
- **Faustregel:** Je weniger Mensch zur Laufzeit, desto wichtiger der Prüfstand. Vertrauen entsteht nicht aus Modellqualität, sondern aus systematischer Beobachtung.
- **HITL ist nicht der Mittelweg, sondern eine eigene Architektur.** Wer den Übergabepunkt als Detail begreift, macht den Agenten nutzlos.
- **Mischformen sind normal.** Ein Pflegekassen-Setup kombiniert in der Praxis alle drei Typen. Das ist kein Kompromiss, sondern saubere Aufgabenteilung.

---

**Nächster Schritt:** [[09_wann-lohnt-sich-was]] — die Entscheidungsfragen vor dem Bauen, plus die typischen Anti-Patterns.

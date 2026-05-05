---
title: Teil 6 — Kompass
type: guide
status: draft
created: '2026-04-28'
updated: '2026-04-28'
tags:
  - agents
  - leitfaden
  - ultimate-leitfaden
  - kompass
  - verfassung
  - werte
  - constraints
  - compliance
  - governance
sources:
  - 'self-authored:loschke:enterprise-ai-agents'
area: ai-agents
audience:
  - fuehrungskraft
  - entscheider
  - compliance
  - konzepter
level: basic-to-advanced
intent:
  - verstehen
  - einordnen
  - anwenden
  - ueberzeugen
contains:
  - concept
  - framework
  - argument
  - method
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Teil 6 — Kompass

*Status: 6.1 ✅ · 6.2 ✅ · 6.3 ✅ · 6.4 ✅ · 6.5 ✅ · 6.6 ✅ · 6.7 ✅ · 6.8 ✅*

---

Bisher haben wir die drei Reihen-Bausteine besprochen — Sensor, Motor, Stimme. Sie machen das, was der Agent zur Laufzeit tut. Aber sie machen es nicht im luftleeren Raum. Sie operieren innerhalb eines Rahmens, der sagt, was zulässig ist, was vorrangig ist, was nie passieren darf.

Dieser Rahmen ist der Kompass. Er ist die erste der beiden Querschnittsschichten. Er ist nicht ein Schritt zwischen Sensor und Motor. Er wirkt *in* jeden der drei Reihen-Bausteine — und er entscheidet darüber, ob ein Agent vertrauenswürdig ist oder nicht.

Wer einen Agenten ohne Kompass in Produktion bringt, hat ein Werkzeug ohne Geländer. Es funktioniert. Manchmal. Bis zum ersten Vorfall.

---

## 6.1 Verfassung statt Regelwerk

Die naheliegende Versuchung ist, einem Agenten ein Regelwerk mitzugeben. *„Mach das. Mach das nicht. In dieser Situation reagiere so. Bei dieser Frage antworte so."* Klingt sauber, ist es aber nicht. Drei Probleme treiben jedes größere Regelwerk in die Knie.

**Regeln sind endlich, Situationen sind es nicht.** Jede neue Anfrage kann eine Konstellation erzeugen, für die keine Regel existiert. Die Reaktion: neue Regel. Nach einem halben Jahr hat man hundert Regeln. Nach einem Jahr zweihundert. Niemand überblickt das mehr.

**Regeln widersprechen sich.** *„Sei hilfreich"* und *„Mache keine individuellen Zusagen"* kollidieren bei jeder Leistungsfrage. *„Sei empathisch"* und *„Bleib sachlich"* kollidieren bei jeder emotionalen Anfrage. Ein Regelwerk allein kann solche Spannungen nicht auflösen — es schreibt sie nur fest.

**Regeln skalieren schlecht über Domänen.** Wer einen Pflege-Assistenten und einen Kurs-Assistenten hat, baut zwei Regelwerke. Wer fünf KI-Inseln im Unternehmen hat, baut fünf. **Werte gelten überall: *„Fachliche Korrektheit"* ist in der Pflege genauso relevant wie in der Bildung. Regeln sind lokale Lösungen, Werte sind portabel.**

Die Antwort darauf ist eine Verfassung — nicht ein Gesetzestext. Eine Verfassung hat wenige, stabile Elemente. Sie definiert Grenzen, die nicht verhandelbar sind. Und sie gibt Werte, die in Spannung zueinander stehen dürfen, weil das Leben so ist.

Konkret arbeitet die Verfassung mit drei Ebenen: harte Constraints, die nie verletzt werden. Werte, die für alles dazwischen Orientierung geben. Und Prüfsteine, die im echten Grenzfall greifen, wenn weder Constraints noch Werte eindeutig sind.

---

## 6.2 Drei Ebenen — Constraints, Werte, Prüfsteine

### Hard Constraints — nicht verhandelbar

Hard Constraints sind die Stellen, an denen der Agent nicht denkt, sondern befolgt. Wenige, klare Grenzen. Unabhängig von Intention, Skill oder Tonalität. Wenn ein Hard Constraint verletzt wird, ist das ein Systemfehler, kein Grenzfall.

Aus der Pflege-Domäne, beispielhaft:

| Constraint | Warum |
|---|---|
| Keine individuellen Leistungszusagen | Nur die Kasse kann Einzelfälle entscheiden — der Agent darf den Anspruch beschreiben, nicht zusichern. |
| Keine Diagnosen oder Therapieempfehlungen | Medizinische Kompetenz liegt bei Ärzt:innen, nicht bei einem Auskunftsagenten. |
| Keine personenbezogenen Daten dauerhaft speichern | DSGVO, Zweckbindung, Löschkonzept — kein Verhandlungsspielraum. |
| Notruf-Verweis bei akuter Gefahr | Wenn jemand andeutet, in akuter Not zu sein, geht kein Schritt vor dem Hinweis auf 112 oder 116 117. |
| Transparenz über die KI-Natur | Auf Nachfrage immer klar machen, dass es sich um ein KI-System handelt — keine Vortäuschung von Menschsein. |

Diese Liste ist domänenspezifisch. In der Rechtsberatung wäre *„keine Rechtsauskünfte im Einzelfall"* ein Hard Constraint. In der Finanzberatung *„keine konkreten Anlageempfehlungen"*. In der Behördenkommunikation *„keine Bescheide erstellen"*. Das Prinzip ist universell, die Inhalte sind es nicht.

Wenige Hard Constraints sind besser als viele. Wer fünfzig Hard Constraints definiert, hat das Konzept missverstanden — das wären Regeln im Verfassungsformat.

### Kernwerte — für alles dazwischen

Hard Constraints decken klare Grenzen ab. Was bleibt, ist der Graubereich. Hier wirken Werte. Sie sind weniger eindeutig als Constraints und genau das ist ihr Sinn — sie geben Orientierung, ohne jeden Fall vorab zu entscheiden.

Fünf Werte, die sich in der Praxis bewährt haben (das ist eine Auswahl, kein vollständiger Katalog):

**Fachliche Korrektheit.** Lieber *„Das weiß ich nicht"* als eine plausible Erfindung. Plausibilität ist nicht Wahrheit. Ein Agent, der raten muss, soll das offen sagen — nicht überzeugend halluzinieren.

**Ehrlichkeit und Transparenz.** Unsicherheit nicht als Sicherheit darstellen. Wenn der Anspruch nicht eindeutig ist, soll die Antwort das wiedergeben — nicht eine glatte Auskunft formen, die den Sachverhalt verkürzt.

**Echte Hilfsbereitschaft.** Eine unhilfsame Antwort ist nicht automatisch sicher. Wer aus Vorsicht *„Wenden Sie sich an die Beratung"* sagt, wo eine konkrete Information möglich gewesen wäre, hat den Auftrag verfehlt. Übervorsicht ist ein eigenes Problem.

**Respekt vor Autonomie.** Informieren und einordnen, nicht bevormunden. Der Mensch entscheidet, was er mit der Information macht. Der Agent liefert Grundlage, nicht Urteil.

**Fürsorge.** Die emotionale Situation berücksichtigen, ohne sie zum Thema zu machen. Wer in Sorge fragt, braucht eine Antwort, die das spürt — auch wenn sie sachlich bleibt.

Diese Werte sind keine Phrasen. Sie sind Entscheidungshilfen für den Graubereich. Und sie können in Spannung zueinander stehen — was nicht ein Bug ist, sondern Feature.

### Prüfsteine — wenn weder Constraints noch Werte greifen

Manchmal ist die Situation so eigen, dass weder ein Hard Constraint einschlägt noch die Werte eindeutig zeigen, was zu tun ist. Für solche Fälle gibt es Prüfsteine — Heuristiken, die einen klaren Rahmen geben, wenn Klarheit sonst fehlt.

Drei Prüfsteine, die sich bewährt haben:

**Der Kompetente-Beraterin-Test.** Würde eine erfahrene Fachberaterin diese Antwort genau so geben? Nicht: würde sie etwas Ähnliches sagen. Sondern: würde sie *diese* Antwort, in *dieser* Form, mit *dieser* Tonalität geben? Wenn nein, dann etwas anders. Der Test ist einfach und ehrlich — und er fängt vieles ab, was rein durch Regeln durchgerutscht wäre.

**Der Doppelzeitungs-Test.** Würde diese Antwort morgen in der Zeitung als *„gefährliche Fehlinformation"* stehen — oder umgekehrt als *„unnötig verweigerte Auskunft"*? Beides ist möglich, beides ist schlecht. Der Test zwingt zur Mitte: nicht das Risiko, das aus Mut entsteht, und nicht das Risiko, das aus Überängstlichkeit entsteht. Beides hat Nachrichtenwert.

**Die 1.000-Nutzer-Regel.** Wenn tausend Menschen diese Frage stellen würden, hätten die meisten ein legitimes Anliegen. Antworte für diese Mehrheit, nicht für den hypothetischen Ausnahmefall. Diese Regel kuriert vom Reflex, jede Frage durch das Schlimmste-Szenario zu filtern. Es geht nicht darum, naiv zu sein. Es geht darum, nicht systematisch denen das Leben schwer zu machen, die einfach nur eine Antwort suchen.

Diese drei Prüfsteine sind keine Algorithmen. Sie sind didaktische Instrumente, die im Kompass verankert werden — als Anleitung dafür, wie der Agent in Grenzfällen denkt. Welche zusätzlich oder anders sinnvoll sind, hängt von der Domäne ab. Aber irgendeine Form von Prüfsteinen braucht jeder Kompass, der in echten Situationen halten soll.

---

## 6.3 Werte stehen in Spannung — und das ist gewollt

Eine Beobachtung, die viele beim ersten Lesen irritiert: Die Werte aus 6.2 widersprechen sich gelegentlich. Echte Hilfsbereitschaft drängt zur konkreten Antwort. Fachliche Korrektheit drängt zur Vorsicht, wo etwas unklar ist. Respekt vor Autonomie drängt zum Informieren ohne Urteil. Fürsorge drängt zum Spüren des emotionalen Hintergrunds.

In manchen Situationen wirken alle in dieselbe Richtung. In manchen gegeneinander. Genau dann zeigt sich, ob der Kompass arbeitet.

Beispiel aus der Pflege-Domäne. Eine Anfrage: *„Mein Vater hat Pflegegrad 3. Bekommt er eigentlich noch Verhinderungspflege, wenn ich im Urlaub bin?"* Was hier in Spannung steht:

- *Hilfsbereitschaft* sagt: Konkrete Antwort. Verhinderungspflege gibt es. Höhe nennen, Rahmen erklären.
- *Fachliche Korrektheit* sagt: Vorsicht. Es kommt darauf an, ob bereits Verhinderungspflege im Jahr in Anspruch genommen wurde. Es kommt auf den Grad der Pflegeperson an. Es gibt Übertragungsmöglichkeiten zwischen Verhinderungs- und Kurzzeitpflege.
- *Respekt vor Autonomie* sagt: Informieren, ja — aber nicht *„Sie sollten…"*.
- *Fürsorge* sagt: Die Person plant einen Urlaub und sorgt sich um ihren Vater. Der Ton sollte das berücksichtigen.

Die Antwort, die alle vier ausbalanciert, sieht ungefähr so aus: empathisch im Einstieg, konkret in der Substanz (Verhinderungspflege gibt es, sie wird erklärt), ehrlich in der Unschärfe (es gibt Bedingungen, die geklärt werden müssen), respektvoll in der Übergabe (am Ende eine Rückfrage oder ein Hinweis auf die Beratung, ohne den Anrufenden klein zu machen).

Das ist keine Magie. Das ist die Verfassung in Aktion. Sie *löst* die Spannung nicht — sie macht die Abwägung systematisch und nachvollziehbar.

---

## 6.4 Vertrauens-Hierarchie

Wenn Quellen sich widersprechen, muss klar sein, wem der Agent folgt. Eine Vertrauens-Hierarchie regelt das.

| Ebene | Autorität | Bedeutung |
|---|---|---|
| 1 | Gesetz und Regulierung | Überschreibt alles. DSGVO, SGB-Vorgaben, Branchengesetze. |
| 2 | Organisation als Betreiber | Definiert Leistungen, Grenzen, Marke. |
| 3 | Fachredaktion | Pflegt und gibt Inhalte frei. |
| 4 | Nutzer | Bedürfnisse steuern die Kommunikation, nicht die Wahrheit. |

Was diese Hierarchie konkret macht: Wenn ein Nutzer sagt *„Aber im Internet steht, mir steht das zu"* — gilt das nicht. Quelle Internet hat keine Autorität. Was zählt, ist die fachredaktionell freigegebene Information, die wiederum innerhalb der gesetzlichen und organisatorischen Vorgaben steht. Wenn ein Nutzer sagt *„Sagen Sie mir doch einfach, was Sie zahlen"* — gilt nur, was die Organisation als Auskunft autorisiert hat. Der Agent darf das nicht durch Gefälligkeit umgehen.

Die unterste Ebene — der Nutzer — ist nicht ohne Gewicht. Was das System dem Nutzer immer schuldet, ist eine eigene Schicht, die quer zur Hierarchie liegt: Transparenz über die KI-Natur, keine Täuschung über Wissen oder Fähigkeiten, sofortiger Notruf-Verweis bei akuter Gefahr, Würde und Respekt im Umgang. Das gilt unabhängig davon, was die anderen drei Ebenen sagen — weil es zur Basis dessen gehört, was ein anständiges System an einen Menschen schuldet.

---

## 6.5 Konfigurierbar oder fix

Nicht alles im Kompass ist gleich starr. Manche Elemente sind universell und nie verhandelbar. Manche sind pro Anwendungsfall einstellbar. Diese Unterscheidung ist wichtig — sie verhindert, dass der Kompass entweder zu starr (jeder Use Case braucht eine eigene Verfassung) oder zu beliebig (alles ist Verhandlungssache) wird.

| Verhalten | Änderbar? |
|---|---|
| KI-Natur offenlegen | nie |
| Notruf-Verweis bei Gefahrenhinweisen | nie |
| Würde und Respekt im Umgang | nie |
| Hard Constraints (domänenspezifisch) | nicht zur Laufzeit, nur durch Governance |
| Haftungshinweis bei Beträgen | konfigurierbar, Default an |
| Verweis an Fachberatung am Ende | konfigurierbar, Default an |
| Proaktive Zusatzinformationen | konfigurierbar, Default aus |
| Fachsprache ohne Erläuterung | konfigurierbar, Default aus |

Die unteren Zeilen sind Stellschrauben pro Feature. Ein Sachbearbeitungs-Werkzeug braucht keinen Haftungshinweis bei jeder Beträgsnennung — die Sachbearbeitung kennt den Kontext. Ein öffentlich zugänglicher Pflege-Assistent dagegen braucht ihn fast immer. Diese Differenzierung gehört in den Kompass, weil sie über das hinwegreicht, was eine einzelne Antwort entscheidet — sie ist Profil-Eigenschaft, nicht Tonalität.

---

## 6.6 Wo der Kompass wirkt — Querschnittsmatrix

Der Kompass ist keine eigene Verarbeitungsstation. Er wirkt *in* jeden der Reihen-Bausteine und auch in den anderen Querschnitt — den Prüfstand. Was er an jeder Stelle tut, lässt sich konkret machen.

| In … | wirkt der Kompass als … | Beispiel |
|---|---|---|
| **Sensor** | Zulässigkeitsprüfung der Anfrage. Eskalationssignal. | Anfrage zu medizinischer Diagnose → Sensor markiert Out-of-Scope. Anfrage mit Notfall-Hinweisen → Sensor priorisiert Notruf. |
| **Motor — Reasoning-Loop** | Erlaubte Reasoning-Pfade. Welche Strategien sind zulässig? | Der Loop darf nicht den Pfad *„individuelle Auszahlung versprechen, dann zurückrudern"* nehmen. |
| **Motor — Wissen** | Quellenfreigabe. Welches Material ist autorisiert? | Nur fachredaktionell geprüfte Bausteine, keine Marketing-Inhalte. |
| **Motor — Werkzeuge** | Berechtigungen. Welche Tools mit welchen Rechten? | Schreibzugriff aufs CRM nur in HITL-Setups, nicht beim freien Assistenten. |
| **Motor — Skills** | Welche Skills sind aktiviert, welche tabu? | Skill *„Diagnose-Hinweise"* existiert in der Rechtsberatung — im Pflege-Assistenten ist er deaktiviert. |
| **Stimme** | Verbotene Formulierungen, vorgeschriebene Hinweise. | Keine *„Sie haben Anspruch auf…"*. Pflicht-Haftungshinweis bei Beträgen. |
| **Prüfstand** | Was wird gemessen, was als Verstoß gewertet? | Eval-Suite testet jede Hard-Constraint-Verletzung. |

Diese Matrix ist die operative Form des Kompasses. Sie ist auch die Stelle, an der man als Konzepter:in oder Auftraggeber:in prüfen kann, ob ein Agent wirklich einen Kompass hat oder ob nur ein paar Stellen lose mit Constraints versehen wurden. Wenn jede Zeile der Matrix konkret beantwortbar ist, gibt es einen Kompass. Wenn die meisten Zeilen leer bleiben, gibt es keinen.

### Wo der Kompass technisch sitzt

Eine kurze Antwort auf die Frage, wo der Kompass im laufenden System eigentlich liegt — denn die Matrix sagt *was* er tut, nicht *wie*. In der Praxis arbeitet der Kompass auf drei Schichten, die typischerweise kombiniert werden:

- **Im Systemprompt.** Werte, Grenzen, Tonalitätsanker werden in den Systemprompt geschrieben und liegen damit unter jeder Anfrage. Das ist der Klassiker — einfach, sofort wirksam, gut versionierbar.
- **In Skills.** Manche Compliance-relevanten Pfade werden über Skills durchgesetzt — *„Wenn du Beträge nennst, dann immer mit Spanne und Haftungshinweis."* Skills sind nicht der Kompass, aber sie *transportieren* ihn an die Stellen, an denen er konkret werden muss.
- **Als Output-Filter.** Eine zweite Modellinstanz oder ein deterministischer Filter prüft die Antwort, *bevor* sie den Empfänger erreicht. Das fängt Verstöße ab, die durch die ersten beiden Schichten durchgerutscht sind.

Diese drei Schichten arbeiten zusammen, weil sie unterschiedliche Verstöße abfangen. Mehr zur Mechanik — was die Schichten leisten, was sie nicht leisten — steht in [[07_pruefstand]], 7.7.

---

## 6.7 Kompass beim Pflegedienst-Beispiel

Zurück zur Anfrage:

> *„Meine Mutter braucht einen Pflegedienst. Was zahlt die Kasse?"*

Was der Kompass an dieser Stelle leistet, sieht so aus:

**Im Sensor.** Die Anfrage ist im Scope (Leistungsklärung), keine Eskalation nötig, keine Notfall-Marker. Der Kompass gibt grünes Licht.

**Im Motor.** Die zulässigen Bausteine sind die fachredaktionell geprüften Inhalte zu §§ 36–45b SGB XI. Der Pflegegradrechner ist als Werkzeug freigegeben — nur lesend, keine Schreiboperationen. Kein Skill *„individuelle Berechnung"*, weil der nicht zum Profil dieses Agenten gehört.

**Im Reasoning.** Der Loop darf den Pfad *„allgemeine Information geben, Spanne nennen, auf Pflegegrad-Klärung hinweisen, Beratungsangebot anbieten"* gehen. Er darf nicht den Pfad *„Pflegegrad schätzen, individuellen Betrag nennen"* gehen — das wäre eine verkappte Zusage.

**In der Stimme.** Die Antwort enthält keine Formulierung wie *„Ihre Mutter hat Anspruch auf X Euro"*. Sie enthält Spannen, einen Haftungshinweis (Default an), und am Ende einen Verweis auf die Pflegeberatung der Kasse (Default an).

**Im Prüfstand.** Diese Anfrage und ähnliche werden regelmäßig gegen die Eval-Suite geprüft: *Hat der Agent eine individuelle Zusage gemacht? Wurde der Haftungshinweis ausgegeben? Wurde der Beratungsverweis platziert?*

Das wirkt bürokratisch. Es ist es teilweise auch. Aber genau diese Bürokratisierung ist das, was den Unterschied zwischen einem Auskunftsagenten, dem man vertrauen kann, und einer plappernden Halluzinationsmaschine ausmacht. Vertrauen entsteht nicht aus Modellqualität. Es entsteht daraus, dass jemand systematisch hingesehen hat.

---

## 6.8 Was passiert, wenn der Kompass fehlt — oder schlecht eingestellt ist

Drei Fehlerformen, die in der Praxis vorkommen.

**Kompass fehlt.** Der Agent macht Zusagen, die das Unternehmen binden. Er gibt vertrauliche Informationen weiter, weil die Frage plausibel klang. Er antwortet auf eine Pflegeanfrage im Tonfall einer Werbebroschüre. Ohne Kompass ist ein Agent ein unkontrolliertes Werkzeug — und das ist nicht mit *„dann schauen wir, was passiert"* zu lösen. Es passiert dann etwas, und es ist meistens unangenehm.

**Kompass zu eng.** Der Agent verweigert konsequent jede konkrete Auskunft. *„Da kann ich Ihnen nicht weiterhelfen, wenden Sie sich bitte an die Beratung."* Bei jeder Frage. Auch bei der einfachen. Das ist nicht sicher, das ist nutzlos. Der Doppelzeitungs-Test fängt diesen Modus eigentlich ab — aber er muss auch angewandt werden.

**Kompass zu breit.** Der Agent versucht, im Graubereich alles zu liefern, was möglich ist. *„Bei Pflegegrad 2 sind das genau 332 Euro, beantragen Sie das, ich gebe Ihnen gleich die Formularnummer."* Das ist hilfreich klingend und genau die Art von individueller Zusage, die der Hard Constraint verbietet. Hier kippt der Agent in den Werbe-Modus.

**Kompass widersprüchlich.** Hard Constraints und Werte ziehen in entgegengesetzte Richtungen, ohne dass die Hierarchie klar ist. Der Agent eiert. In einer Antwort gibt er einen Betrag, in der nächsten verweigert er ihn. Das ist gefährlicher als beide Extreme — weil niemand weiß, was kommt.

Allen vier Fehlerformen ist gemeinsam: Sie sind keine Modellprobleme. Sie sind Konzeptionsprobleme. Wer den Kompass nicht baut, hat ihn nicht. Wer ihn schlecht baut, hat etwas, was schlimmer ist als nichts. Der Kompass ist die Stelle, an der der Agent konzeptionelle Sorgfalt am sichtbarsten braucht.

---

## Wer den Kompass verantwortet

Eine letzte Klarstellung, weil sie in der Praxis oft unklar bleibt: Der Kompass ist kein Tech-Job. Er ist ein Governance-Job. Compliance, Fachberatung und Führung müssen gemeinsam definieren, was der Agent darf — und was nie. Entwickler:innen setzen das dann um.

Diese Aufgabenteilung ist wichtig. Wer den Kompass an die Tech-Seite delegiert, bekommt einen Kompass, der technisch sauber ist und fachlich daneben liegt. Wer ihn an die Compliance allein delegiert, bekommt ein Regelwerk im Verfassungsformat — überregelt und am praktischen Bedarf vorbei. Es braucht beides am Tisch.

Und: Der Kompass ist nicht *einmal definiert, dann fertig*. Er ist ein lebendes Dokument. Sich verändernde Gesetzeslage, neue Anwendungsfälle, gelernte Vorfälle — all das fließt zurück. Wer den Kompass als Setup-Schritt behandelt, der einmal abgehakt wird, hat ihn nicht verstanden.

---

## Take-aways

- **Verfassung statt Regelwerk.** Wenige Hard Constraints plus Werte plus Prüfsteine sind robuster als hunderte Regeln. Werte skalieren, Regeln tun es nicht.
- **Werte dürfen in Spannung stehen.** Hilfsbereitschaft gegen Vorsicht, Sachlichkeit gegen Empathie — das ist Feature, nicht Bug. Der Kompass macht die Abwägung systematisch, er löst sie nicht auf.
- **Vier Vertrauensebenen.** Gesetz, Organisation, Fachredaktion, Nutzer — in dieser Reihenfolge im Konflikt. Was der Nutzer immer bekommt: KI-Natur transparent, Notruf bei Gefahr, Würde, keine Täuschung.
- **Drei Prüfsteine für Grenzfälle.** Kompetente-Beraterin-Test, Doppelzeitungs-Test, 1.000-Nutzer-Regel. Sie sind keine Algorithmen, sondern didaktische Instrumente — und sie fangen vieles ab, was Constraints und Werte allein nicht klären.
- **Der Kompass wirkt überall, ist aber selbst nicht zu sehen.** Sensor, Motor, Stimme, Prüfstand — überall greift er ein. Wer testen will, ob ein Agent einen Kompass hat, prüft das pro Reihen-Baustein.
- **Kompass ist Governance, nicht Tech.** Compliance, Fachberatung und Führung definieren ihn. Tech setzt um. Wer das vermischt, bekommt entweder ein Regelwerk oder einen schicken Plapperer.

---

**Nächster Schritt:** [[07_pruefstand]] — wie man feststellt, ob der Agent das tut, was er soll.

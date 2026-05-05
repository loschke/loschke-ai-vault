---
title: Teil 4 — Motor
type: guide
status: draft
created: '2026-04-28'
updated: '2026-04-28'
tags:
  - agents
  - leitfaden
  - ultimate-leitfaden
  - motor
  - reasoning
  - loop
  - wissen
  - werkzeuge
  - skills
  - gedaechtnis
  - rag
  - tools
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
  - anwenden
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
# Teil 4 — Motor

*Status: 4.1 ✅ · 4.2 ✅ · 4.3 ✅ · 4.4 ✅ · 4.5 ✅ · 4.6 ✅ · 4.7 ✅*

---

Der Motor ist der Maschinenraum eines Agenten. Hier wird das, was der Sensor erkannt hat, in etwas verwandelt, das die Stimme nach außen trägt. Hier passiert das, was wir umgangssprachlich „der Agent denkt nach" nennen — und hier sitzt der Großteil der Investition, wenn man einen Agenten baut.

Vier Komponenten arbeiten zusammen:

| Komponente | Rolle |
|---|---|
| **Reasoning-Loop** | Plant, entscheidet, handelt, reflektiert — in Iterationen |
| **Wissen** | Liefert Substanz: was der Agent fachlich weiß |
| **Werkzeuge** | Erweitern den Aktionsradius über reines Antworten hinaus |
| **Gedächtnis** | Hält fest, was schon war — innerhalb und über Sessions hinweg |

Die Komponenten lassen sich einzeln erklären. In der Praxis greifen sie ineinander. Ein Reasoning-Loop ohne Wissen produziert plausible Halluzinationen. Wissen ohne Werkzeuge bleibt theoretisch. Werkzeuge ohne Gedächtnis machen jeden Durchlauf zur Sisyphos-Arbeit.

Bevor wir die Haube öffnen, eine Vorklärung, die sich in der Praxis immer wieder bewahrheitet hat.

---

## 4.1 Nicht jeder Prozess braucht einen Motor

Die erfolgreichsten Agentenprojekte arbeiten mit einfachen, kombinierbaren Mustern. Nicht mit den komplexesten Frameworks. Das ist eine Erkenntnis aus der Praxis von Anthropic und vielen anderen Teams — und sie wird fast immer ignoriert, weil „Agent" im Vorstandsmeeting besser klingt als „optimierter LLM-Aufruf".

Faustregel: Fang mit der einfachsten Lösung an, die funktioniert. Ergänze Komplexität nur dort, wo sie messbaren Mehrwert bringt.

| Aufgabe | Was reicht |
|---|---|
| Eine Zusammenfassung erzeugen | Ein einziger LLM-Aufruf |
| Einen Text in eine andere Form bringen | Ein einziger LLM-Aufruf, ggf. mit Vorlage |
| Aus einer festen Wissensbasis antworten | Ein LLM-Aufruf mit Retrieval (RAG) |
| Mehrere Schritte in fester Reihenfolge | Ein Workflow |
| Pfad hängt vom Zwischenergebnis ab | **Hier fängt der Motor an, sich zu lohnen** |

Was unter dieser Schwelle liegt, braucht keinen Motor in dem Sinne, wie wir ihn in diesem Kapitel beschreiben. Wer trotzdem einen baut, baut etwas Teures, Schwerfälliges und schwer Testbares. Mehr dazu in [[09_wann-lohnt-sich-was]].

Wenn der Pfad aber tatsächlich variabel ist — wenn der Agent unterwegs entscheiden muss, was er als nächstes tut — dann brauchst du den Motor. Die nächsten sechs Abschnitte zeigen, was darin steckt.

---

## 4.2 Reasoning-Loop

Das Herz des Motors ist ein Zyklus:

```
beobachten → entscheiden → handeln → neu beobachten → ...
```

Das klingt simpel und ist es nicht. Genau dieser Zyklus ist das, was einen Agenten zum Agenten macht. Ein Workflow geht den Pfad von Schritt 1 nach Schritt n. Ein Agent beobachtet, was nach Schritt 1 passiert ist, und entscheidet *dann*, was Schritt 2 ist. Das verschiebt die Kontrolle vom Bauplan zum Bauwerk — der Agent baut den Pfad während er ihn geht.

### Was im Loop passiert

In jedem Durchlauf macht der Agent vier Dinge:

- **Aufgabe verstehen und zerlegen.** Eine Anfrage wie *„Klär die Anspruchssituation"* zerfällt in Teilfragen: Welcher Pflegegrad liegt vor? Welche Leistungen passen dazu? Was hat der Versicherte schon? Was fehlt?
- **Strategie entwickeln.** Welcher Teil zuerst? Welches Tool? Welche Quelle? Reicht eine Abfrage oder brauche ich mehrere?
- **Zwischenergebnisse bewerten.** Habe ich das, was ich brauche? Ist die Antwort plausibel? Passt sie zur ursprünglichen Frage?
- **Bei Bedarf neu planen.** Das Tool gibt nichts Sinnvolles zurück — anderen Weg suchen. Die Annahme war falsch — Plan anpassen.

Das ist Reasoning im Sinne dieses Leitfadens. Es ist nicht das, was im Inneren des LLM passiert (Tokens, Aufmerksamkeitsmuster, Vektorräume) — das überlassen wir den Forschern. Es ist das, was *zwischen* den LLM-Aufrufen passiert: das Zerlegen, Planen, Bewerten, Anpassen, das den Loop am Laufen hält.

> **Hinweiskasten — Patterns mit Namen.**
> In der Praxis findest du Reasoning-Patterns mit Namen wie *ReAct* (Reason + Act im Wechsel), *Chain-of-Thought* (laut denken vor dem Antworten) oder *Tree-of-Thought* (mehrere Pfade parallel verfolgen). Das schauen sich Entwicklerinnen und Entwickler im Detail an. Konzeptionell läuft alles auf dasselbe hinaus: Der Agent hält in Iterationen einen Faden, beobachtet seine eigenen Schritte und reagiert darauf.

Dass dieses Reasoning überhaupt funktioniert, ist eine Kernfähigkeit moderner LLMs — Aufgaben zerlegen, planen, abwägen. Das ist nicht baustein-spezifisch, sondern die geteilte Engine unter allen drei Reihen-Bausteinen. Mehr dazu in [[03_sensor]], 3.3.

### Was den Loop am Laufen hält

Drei Voraussetzungen müssen erfüllt sein, damit der Zyklus überhaupt funktioniert.

**Ein Auslöser** — ohne den läuft nichts. Beim Assistenten ist das eine menschliche Anfrage, beim autonomen Agenten ein Trigger oder Cronjob, beim HITL-Setup oft beides.

**Ein Working Memory** — der kurzfristige Notizblock, auf dem steht, was bisher passiert ist. Welche Tools schon aufgerufen wurden, was zurückkam, welche Annahmen gerade gelten, wo der Agent steht. Ohne Working Memory beginnt jeder Durchlauf bei Null. Der Agent dreht dann zwar, kommt aber nicht voran. Mehr dazu in [4.6](#46-gedächtnis).

**Feedback aus der Welt** — irgendetwas, woran der Agent merkt, ob er weiterkommt. Ein Tool-Ergebnis, ein Fehlercode, ein Suchtreffer, eine Rückfrage des Nutzers. Ohne Feedback denkt der Agent im luftleeren Raum, und das ist gefährlich.

### Wann der Loop endet

Der Ausstieg aus dem Loop ist eine eigene Entscheidung — und eine wichtige. Vier Bedingungen kommen typischerweise zum Tragen:

1. **Ziel erreicht.** Der Agent prüft sich selbst gegen ein Erfolgskriterium und stellt fest: passt.
2. **Ziel nicht erreichbar.** Es fehlen Daten, Berechtigungen, Schnittstellen. Der Agent gibt auf, möglichst mit klarer Begründung.
3. **Technisches Problem.** Timeouts, externe Ausfälle, unerwartete Fehler.
4. **Externe Kontrolle.** Maximale Iterationen erreicht, Token-Budget aufgebraucht, System-Timeout. Siehe [[07_pruefstand]]

Punkt 4 ist kein Notnagel. Er ist Architektur. LLMs sind nicht gut darin, sich selbst zuverlässig zu beurteilen. Ein Agent kann sich einbilden, das Ziel erreicht zu haben, ohne dass es stimmt. Er kann ebenso einbilden, kurz vor dem Ziel zu stehen, und unbegrenzt weiterdrehen. Externe Abbruchbedingungen schützen das System vor sich selbst.

### Was Reasoning *nicht* ist

Der Reasoning-Loop sieht aus wie Selbstreflexion. Er ist es nicht.

Wenn ein Agent „bewertet, ob seine Antwort gut ist", bewertet er nicht ehrlich gegen einen unabhängigen Maßstab. Er produziert eine Einschätzung, die meistens günstig für ihn selbst ausfällt. LLMs neigen zu Selbstüberschätzung — sie halten ihre Antworten häufiger für richtig, als sie es sind. Auch der Reasoning-Loop ändert daran nichts.

Konsequenz: Reasoning macht den Agenten *flexibler*, nicht *zuverlässiger*. Zuverlässigkeit kommt nicht aus dem Loop. Sie kommt aus der externen Beobachtung — Evals, Monitoring, Tests. Mehr dazu in [[07_pruefstand]].

---

## 4.3 Wissen

Ein Agent ohne eigenes Wissen ist auf das angewiesen, was sein Modell aus dem Training mitbringt. Das reicht für Brainstorming und allgemeine Fragen. Es reicht nicht für organisationsspezifische Fakten, aktuelle Daten oder fachliche Tiefe. Wer eine Pflegekassen-Frage an ein nacktes LLM stellt, bekommt eine Antwort, die plausibel klingt — und im Detail oft falsch ist.

### Build und Runtime — zwei Arten von Wissen

Wissen existiert in zwei Modi.

**Build Context** ist Wissen, das vor dem ersten Gespräch redaktionell aufbereitet wird. Wissensbausteine zu Pflegeleistungen, Satzungstexte, Prozessbeschreibungen, FAQ-Sammlungen. Die Fachredaktion entscheidet, was reinkommt, prüft auf Aktualität, versioniert. Der Agent „weiß" das, was die Redaktion ihm gegeben hat — nicht mehr und nicht weniger.

**Runtime Context** ist Wissen, das erst zur Laufzeit existiert. Das Ergebnis eines Pflegegradrechners, die Daten aus dem CRM, eine Live-Abfrage zu Wartezeiten, das Profil des Anrufenden. Der Agent kann es nicht vorab haben — er muss es im Moment der Anfrage beschaffen.

Der Unterschied klingt formal, ist aber praktisch wichtig: Build Context ist redaktionell kontrolliert. Runtime Context ist anfragegetrieben. Beides braucht eigene Pflege, eigene Qualitätssicherung, eigene Tests.

### Vier Quellen, aus denen Wissen kommt

In einem produktiven Agenten kommen typischerweise vier Quellen zum Einsatz:

| Quelle | Typ | Beispiel aus der Pflege-Domäne |
|---|---|---|
| Wissensbausteine, Cluster-Dokumente | Build | Aufbereitete Inhalte zu §§ 36–45b SGB XI |
| Tools und Datenbanken | Hybrid | Pflegegradrechner, Pflegestützpunkt-Finder |
| Echtzeit-Daten | Runtime | Aktuelle Bearbeitungszeiten, Antragsstatus |
| Nutzerprofil | Runtime | Versicherten-Stammdaten aus dem authentifizierten Bereich |

„Hybrid" bei Tools bedeutet: Das Tool selbst ist Build (vorab definiert, mit fester Beschreibung), das Ergebnis ist Runtime (entsteht erst im Aufruf).

### Content ist nicht Context

Ein Punkt, der in der Praxis oft missverstanden wird: Was auf einer Website steht, ist meistens nicht das, was ein Agent als Wissen braucht.

Website-Content ist für Suchmaschinen und Menschen optimiert. Niedrige Informationsdichte (viel Marketing-Filler), Wissen über mehrere Seiten verstreut, gleiche Fakten in unterschiedlichen Formulierungen. Wenn man so etwas einfach in einen Agenten kippt, halluziniert er auf vorhersehbare Weise: bei einfachen Fragen geht es noch, bei Spezifika erfindet er Beträge, verwechselt Bedingungen, mischt Quellen.

Was der Agent stattdessen braucht: strukturierten, informationsdichten Context. Jeder Satz ein verwertbarer Fakt. Jeder Baustein beantwortet eine Frage vollständig. Mit Metadaten — Zielgruppe, Aktualität, Rechtsgrundlage, Verknüpfungen. Die Transformation von Content zu Context ist eigene Arbeit. Sie ist auch der Grund, warum „wir lesen einfach die Website ein" als Strategie selten funktioniert.

### Drei Stufen, wie Wissen zum Agenten kommt

Auf der technischen Seite gibt es grob drei Stufen, wie Wissen bereitgestellt wird. Sie schließen sich nicht aus — die meisten Agenten kombinieren alle drei.

**Stufe 1 — alles in den Prompt.** Wissen direkt in den Systemprompt schreiben. Funktioniert für kleine Wissensmengen. Einfachste Variante, kein zusätzliches System nötig. Skaliert nicht.

**Stufe 2 — Retrieval.** Eine Wissensdatenbank, die der Agent vor dem Antworten durchsucht. Die Anfrage wird in eine Suchanfrage übersetzt, die relevantesten Bausteine werden gefunden und dem Modell zusammen mit der Frage übergeben. Das ist das, was unter „RAG" (Retrieval Augmented Generation) läuft.

**Stufe 3 — Tool-basiertes Wissen.** Der Agent ruft aktiv Systeme auf, um Informationen zu beschaffen: Datenbanken, APIs, Suchen. Das Wissen wird nicht vorab bereitgestellt, sondern im Moment der Anfrage geholt. Hier verschwimmt die Grenze zwischen Wissen und Werkzeugen — siehe [4.4](#44-werkzeuge).

> **Hinweiskasten — RAG.**
> *Retrieval Augmented Generation* ist der Standardansatz für Agenten mit eigener Wissensbasis. Vereinfacht: Vor jeder Antwort wird die Wissensbasis durchsucht, die passendsten Stücke werden zur Anfrage hinzugepackt, dann antwortet das Modell. Klingt einfach, hat in der Praxis viele Stellschrauben — wie die Bausteine geschnitten sind, wie gesucht wird, wie viel mitgegeben wird.

### Wenn Wissen fehlt

Der Agent rät. Er nutzt sein allgemeines Trainingswissen und produziert Antworten, die plausibel klingen. Falsche Beträge, erfundene Studien, veraltete Informationen, Verwechslungen mit ähnlichen Organisationen. Das Tückische: Diese Antworten klingen genauso überzeugend wie korrekte. Wer die Domäne nicht selbst kennt, erkennt den Unterschied nicht.

### Wer das pflegt

Wissen ist kein Tech-Thema, es ist ein redaktionelles Thema. Fachredakteure und Domänenexperten pflegen die Wissensbasis. Sie entscheiden, was reinkommt. Sie prüfen Aktualität. Sie schließen Lücken. Das ist keine einmalige Aufgabe — es ist laufende Arbeit. Die häufigste Enttäuschung bei Wissensbasen kommt nicht von der Technik, sondern von der Erwartung, man könne „die Dokumente einmal einlesen und dann läuft es".

---

## 4.4 Werkzeuge

Ein LLM allein kann nur Text generieren. Werkzeuge geben dem Agenten Hände: Er kann Daten lesen, in Systeme schreiben, Aktionen auslösen, mit der Außenwelt interagieren. Ohne Werkzeuge ist ein Agent ein kluger Kopf in einem geschlossenen Raum.

### Was Werkzeuge leisten — drei Stufen

Werkzeuge unterscheiden sich nicht nur in dem, was sie tun, sondern auch in dem, was sie *bewirken*. Drei Stufen, mit deutlich unterschiedlichem Risikoprofil:

**Lesen.** Der Agent ruft Daten ab. Kundendaten im CRM nachschlagen, Kalender prüfen, eine Datenbank abfragen, eine Suche ausführen. Risiko niedrig. Schaden begrenzt: schlimmstenfalls zieht der Agent eine veraltete Information.

**Schreiben.** Der Agent legt Daten an oder verändert sie. Tickets erstellen, Termine buchen, Dokumente ablegen, Datensätze aktualisieren. Risiko mittel bis hoch. Eine fehlerhafte Schreiboperation kann nicht trivial rückgängig gemacht werden.

**Agieren.** Der Agent löst Aktionen mit Außenwirkung aus. E-Mails versenden, Bestellungen ausführen, Auszahlungen anstoßen, Verträge schließen. Risiko hoch. Hier wird aus einem Fehler schnell ein Schaden — oft mit Geld, manchmal mit Menschen.

### Eine Risikomatrix für die Tool-Auswahl

| Zugriff                     | Risiko    | Beispiel                        | Wer entscheidet                                |
| --------------------------- | --------- | ------------------------------- | ---------------------------------------------- |
| Nur Lesen                   | Niedrig   | Kundendaten nachschlagen        | Agent kann selbst                              |
| Lesen + Entwurf             | Mittel    | Antrag-Entwurf erstellen        | Agent erstellt, Mensch sichtet                 |
| Lesen + Schreiben           | Hoch      | Datensatz ändern, Ticket öffnen | Mensch gibt frei oder Schreiben ist reversibel |
| Lesen + Schreiben + Agieren | Sehr hoch | Auszahlung anstoßen             | Mensch im Loop, immer empfohlen                |

**Faustregel:** Schreibzugriff bekommt der Agent nur dort, wo entweder die Aktion reversibel ist oder ein Mensch vor der Ausführung prüft. Was beides nicht erfüllt, gehört nur unter strengen Bedingungen in agentischen Handlungsspielraum.

### Wie Werkzeuge technisch angebunden sind

> **Hinweiskasten — die wichtigsten Begriffe.**
> *Function Calling* (oder *Tool Use*): Mechanismus, mit dem moderne LLMs strukturierte Tool-Aufrufe selbst generieren. Der Agent „weiß" vorher, welche Tools es gibt und was sie tun, und entscheidet im Loop, eines aufzurufen. *MCP* (Model Context Protocol): Standardisiertes Protokoll, mit dem ein Agent auf viele verschiedene Datenquellen und Tools zugreifen kann, ohne für jedes System eine eigene Integration zu bauen — die Analogie „USB für KI" trifft es ganz gut. *API-Anbindung*: Die klassische Variante. Stabiler und kontrollierbarer als MCP, aber jede Integration muss einzeln gebaut werden — in regulierten Umgebungen oft der bevorzugte Weg.

### Tool-Auswahl ist eine Reasoning-Aufgabe

Ein Agent mit fünf Werkzeugen entscheidet bei jedem Loop-Durchlauf: brauche ich gerade eines, und wenn ja, welches? Bei fünf Tools ist das trivial. Bei fünfzig wird es zur eigenen Disziplin.

Die Auswahl trifft nicht ein vordefinierter Workflow. Sie trifft das Reasoning-Verhalten des Agenten — auf Basis dessen, was die Tools über sich selbst sagen. Beschreibungen, Parameter, Beispielaufrufe. Die Qualität dieser Selbstbeschreibung entscheidet, ob der Agent das richtige Werkzeug zieht oder das falsche. In Teil 5 wird dieses Thema unter dem Stichwort *Stimme nach innen* aufgegriffen — Werkzeuge müssen nicht nur funktionieren, sondern für den Agenten lesbar sein.

### Wenn Werkzeuge fehlen oder schlecht konfiguriert sind

Ohne Werkzeuge ist der Agent isoliert. Er kennt weder die Kunden noch die Produkte noch die aktuellen Daten. Alles, was er braucht, müsste man ihm in den Chat kopieren. Das ist kein Agent, sondern ein Chatbot mit Copy-Paste-Workflow.

Schlimmer als fehlende Werkzeuge sind falsche. Ein Agent mit zu viel Schreibzugriff kann Daten beschädigen. Ein Agent, der auf veraltete Daten zugreift, liefert falsche Antworten mit voller Überzeugung. Ein Agent, der Tools aufruft, deren Output er nicht versteht, produziert sinnlose Aktionen. Werkzeuge sind nicht nur eine Frage des „Hat er sie?", sondern auch des „Sind sie sauber gebaut und passend rechteseitig konfiguriert?".

---

## 4.5 Skills — Wissen und Werkzeuge bündeln

Skills sind in der Praxis von 2026 das, was viele Agenten erst zuverlässig macht. Trotzdem sind sie kein eigener Baustein in unserem Modell. Sie sind ein Pattern, eine Art, mit den vorhandenen Bausteinen umzugehen. Das klingt akademisch, ist aber wichtig — und der ganze Abschnitt dreht sich darum, warum.

### 4.5.1 Was Skills sind

Ein Skill ist ein Bündel aus drei Dingen:

1. **Anweisungen** — wie man in einer bestimmten Situation vorgeht. Schritte, Reihenfolge, Qualitätskriterien, Fallstricke.
2. **Werkzeuge** (optional) — Hilfen, die zum Skill gehören. Scripts, Vorlagen, kleine Programme.
3. **Eine Aktivierungsbeschreibung** — wann der Skill geladen werden soll. Trigger-Worte, Situationsbeschreibung, Abgrenzung zu anderen Skills.

Drei Dinge, die wir schon kennen: Anweisungen sind kuratiertes Wissen, Werkzeuge sind Werkzeuge, die Aktivierungsbeschreibung ist ein Stück Metadaten für die Auswahl. Skills sind also kein neuer Baustein. Sie sind ein **Bündelungsformat**, das diese drei Sachen zusammenpackt und dafür sorgt, dass das Bündel nur dann gezogen wird, wenn es passt.

Das Prinzip dahinter heißt *progressive disclosure* — der Agent hat nicht alles auf einmal im Blick, sondern lädt nur das, was er gerade braucht. Bei wenigen Skills ist das egal. Bei vielen ist es überlebenswichtig: Würde der Agent alle Skill-Inhalte gleichzeitig lesen, wäre sein Kontextfenster voll, bevor die eigentliche Arbeit beginnt.

### 4.5.2 Wofür Skills die Antwort sind

Hier kommt eine Spannung ins Spiel, die wir nicht weglächeln sollten.

In Teil 1 haben wir definiert: Ein Agent ist ein Agent, weil er den Pfad selbst entscheidet. Skills geben Pfade vor. Streng genommen sind sie also ein Schritt zurück Richtung Workflow — kuratierte, getestete, immer gleiche Abläufe für wiederkehrende Aufgaben.

Genau das ist aber der Punkt. Ein Reasoning-Loop, der jedes Mal neu erfindet, wie man eine Pflegegrad-Klärung angeht, ist nicht zuverlässig. Ein Skill, der sagt *„so geht's, in dieser Reihenfolge, mit diesen Tools, mit diesem Output-Format"*, ist es. Skills sind also kein Widerspruch zum agentischen Charakter — sie sind eine **kontrollierte Verengung** an den Stellen, wo Verengung sinnvoll ist.

Der Agent entscheidet immer noch, *welcher Skill* greift. Das ist die agentische Kernaufgabe. Der Skill selbst ist dann näher am Workflow. Eine Hybrid-Architektur: agentisch in der Auswahl, deterministischer in der Ausführung.

Der Effekt ist erheblich. Vier Stellen, an denen Skills unterscheiden:

| Aspekt | Ohne Skills | Mit Skills |
|---|---|---|
| Qualität | Schwankt — mal gut, mal schlecht | Reproduzierbar |
| Kontrolle | Schwer nachvollziehbar | Nachvollziehbar, debuggbar |
| Skalierung | Funktioniert bei einem Nutzer | Funktioniert bei vielen |
| Verbesserung | Schwer — wo optimieren, wenn jeder Durchlauf anders ist? | Gezielt — Skill für Skill |

Skills sind das Werkzeug, mit dem aus „der Agent macht das auch hin" ein „der Agent macht das verlässlich" wird. Genau dort, wo Wiederholung und Qualität zählen.

### 4.5.3 Wie ein Skill aussieht

Konzeptionell — ohne Code — sieht ein Skill etwa so aus:

```
SKILL: Pflegegrad-Klärung
─────────────────────────
Wann ich greife:
  Wenn jemand fragt, welcher Pflegegrad vorliegt oder
  welche Leistungen damit verbunden sind.
  Trigger: "Pflegegrad", "Anspruch", "was zahlt die Kasse".

Was ich mache:
  1. Prüfe, ob ein Pflegegrad bereits bekannt ist.
     - Wenn ja: weiter mit 3.
     - Wenn nein: weiter mit 2.
  2. Frage gezielt nach den Kriterien aus § 15 SGB XI
     oder verweise auf den Pflegegradrechner.
  3. Ordne den Pflegegrad den passenden Leistungen zu.
  4. Gib eine Übersicht aus, kein individuelles Versprechen.

Was ich brauche:
  - Wissensbausteine zu §§ 14–15, 36–45b SGB XI
  - Tool: Pflegegradrechner

Was ich nicht mache:
  - Ich gebe keine Beträge auf den Cent genau.
  - Ich treffe keine Entscheidung über den Antrag.
  - Bei Konflikten verweise ich an die Sachbearbeitung.
```

Drei Beobachtungen dazu:

- Der Skill enthält **Anweisungen** (Schritte 1–4), eine **Ressourcenliste** (Wissensbausteine plus Tool) und eine **Abgrenzung** (was er nicht tut). Das ist die typische Struktur.
- Die **Aktivierungsbeschreibung** oben ist kein Detail. Sie ist das, was der Agent zur Laufzeit liest, um zu entscheiden, ob er den Skill überhaupt zieht. Schlecht beschriebene Skills werden nicht gefunden, selbst wenn sie passen würden.
- Die **Abgrenzung** überlappt mit dem Kompass aus [[06_kompass]]. Auf den Unterschied kommen wir gleich.

### 4.5.4 Skill-Auswahl als Reasoning-Aufgabe

Bei drei Skills ist die Auswahl trivial. Bei dreißig wird sie selbst zur Aufgabe. Bei dreihundert wird sie zum Engpass.

Was der Agent tut, wenn er einen Skill auswählt: Er liest die Aktivierungsbeschreibungen aller verfügbaren Skills, vergleicht sie mit der Situation, und zieht den, der am besten passt. Das ist kein Tabellen-Lookup, das ist Reasoning. Und es kann auf zwei Arten schiefgehen.

**Zu eng beschrieben.** *„Greift bei Anspruchsklärung für gesetzlich Versicherte ohne bestehenden Pflegegrad."* Wenn die Anfrage nicht haargenau passt, wird der Skill nicht gezogen, obwohl er eigentlich der richtige wäre.

**Zu breit beschrieben.** *„Greift bei allen Fragen rund um Pflege."* Der Skill feuert ständig, auch in Situationen, für die er nicht gebaut ist. Es gibt einen Skill, der alles macht — und nichts richtig.

In der Praxis ist das eine Disziplin für sich: Skill-Beschreibungen so zu schreiben, dass sie genau dann triggern, wenn sie sollen. Nicht früher, nicht später. Wer mit Skills arbeitet, verbringt darin überraschend viel Zeit.

Wichtig dabei: Die Skill-Auswahl ist genau die Stelle, an der der Agent agentisch bleibt, auch wenn die Skills selbst eher workflow-haft sind. Der Skill verengt den Pfad innerhalb seines Geltungsbereichs. Aber der Agent entscheidet, *welcher Geltungsbereich* gerade vorliegt.

### 4.5.5 Drei Granularitäten

Skills lassen sich auf verschiedenen Ebenen bauen. Die Wahl der Granularität ist eine Designentscheidung, die nicht trivial ist.

| Ebene | Was es ist | Beispiel aus der Pflege-Domäne |
|---|---|---|
| **Mikro-Skill** | Einzelne Teilregel, oft eine Faustregel | „Wenn du Beträge nennst, gib immer eine Spanne, nie einen Punktwert." |
| **Makro-Skill** | Ein vollständiger Arbeitsablauf | „Pflegegrad-Klärung" wie oben — mehrere Schritte, mehrere Tools, ein Output-Format. |
| **Meta-Skill** | Eine Entscheidung über Skills | „Wenn die Anfrage emotional aufgeladen ist, ziehe zuerst den Empathie-Skill, dann den fachlichen Skill." |

Mikro-Skills sind einfach zu definieren und einfach zu testen. Makro-Skills sind mächtig, aber pflegeintensiv. Meta-Skills sind elegant — und wackelig, weil sie Reasoning *über* Reasoning sind.

Faustregel aus der Praxis: Anfangen mit Makro-Skills für die zwei oder drei häufigsten Anwendungsfälle. Mikro-Skills dazunehmen, wenn sich Querschnittsregeln zeigen, die in mehreren Makro-Skills vorkommen. Meta-Skills nur, wenn es wirklich nötig ist.

### 4.5.6 Möglichkeiten

Was Skills gut können, lässt sich an konkreten Effekten beschreiben.

**Wiederverwendbarkeit.** Ein einmal gut gebauter Skill für „Anspruchsklärung" funktioniert in tausend Anfragen gleich gut. Ohne Skill müsste der Agent jedes Mal neu erfinden, wie er die Aufgabe angeht.

**Updates an einer Stelle.** Ändert sich die SGB-XI-Regelung, wird ein Skill angepasst — und alle künftigen Klärungen folgen der neuen Regel. Ohne Skill müsste man hoffen, dass das Modell die Änderung in seinen Antworten konsistent berücksichtigt. Das tut es nicht zuverlässig.

**Domänenexpertise kapseln.** Eine erfahrene Sachbearbeiterin weiß, dass man bei einem Pflegegrad-Höherstufungsantrag immer erst die Pflegedokumentation prüft. Dieses Wissen lässt sich in einen Skill gießen. Damit ist es im Agenten verfügbar, ohne dass die Sachbearbeiterin jede Anfrage selbst macht.

**Onboarding neuer Anwendungsfälle.** Statt einen neuen Agenten zu bauen, fügt man einen Skill hinzu. Schneller, billiger, modularer.

**Compliance-konforme Standardpfade.** An Stellen, an denen ein definierter Ablauf rechtlich notwendig ist (Datenfreigabe, Beratungspflicht, Dokumentationspflicht), ist ein Skill der natürliche Ort, das festzuschreiben.

### 4.5.7 Grenzen

Skills sind keine Magic Bullet. Sie machen den Agenten besser, wo Wiederholung und Qualität zählen. Sie machen ihn nicht besser bei genuin neuen, unbekannten Aufgaben — da hilft kein Skill, weil keiner passt. Da muss der Reasoning-Loop ran. Wer das verwechselt, baut sich eine trügerische Sicherheit.

Außerdem haben Skills eigene Probleme:

**Skill-Inflation.** Mit jeder neuen Anforderung kommt ein neuer Skill dazu. Irgendwann hat man fünfzig, und niemand weiß mehr, welcher wann greift.

**Überlappungen.** Zwei Skills behaupten, für dieselbe Situation zuständig zu sein. Welcher zieht? Im schlimmsten Fall: beide, gegeneinander.

**Veraltung.** Skills müssen gepflegt werden. Ein Skill, der die SGB-XI-Stand-2024-Regelung abbildet, wird 2027 zum Risiko, wenn niemand ihn aktualisiert hat.

**Falsche Aktivierung.** Ein Skill mit zu breiter Beschreibung feuert in Situationen, für die er nicht gebaut ist. Das Ergebnis: präziser Murks.

**Verwechslung mit dem Kompass.** Skills geben Verhalten vor. Der Kompass auch. Der Unterschied: Der Kompass ist *immer* aktiv (Werte, harte Constraints, gilt in jedem Fall). Skills sind *kontextuell* aktiv (gelten nur, wenn passend). Wer Werte ausschließlich in Skills ablegt, verliert sie, sobald der Skill nicht greift. Werte gehören also in den Kompass — als Quelle. Skills *transportieren* den Kompass im konkreten Anwendungsfall: *„In dieser Situation heißt fachliche Korrektheit konkret, immer eine Spanne zu nennen, nie einen Punktwert."* Das ist legitim und in der Praxis wichtig — Skill und Kompass arbeiten zusammen, sie sind nicht Konkurrenten. Mehr in [[06_kompass]] und in [[07_pruefstand]], 7.7.

### 4.5.8 Skills im Pflegedienst-Beispiel

Zurück zur Anfrage aus [[02_gesamtmodell]]:

> *„Meine Mutter braucht einen Pflegedienst. Was zahlt die Kasse?"*

Der Sensor hat erkannt: Leistungsklärung mit emotionaler Note (Angehörigen-Sorge). Welche Skills könnten greifen?

Plausibel sind drei: Ein **Skill „Pflegegrad-Klärung"** (wie in 4.5.3 skizziert), ein **Skill „Pflegesachleistung erklären"** (Fokus auf §36 SGB XI, ambulante Pflegedienste), und ein **Skill „Empathische Erstberatung"** als Mikro-Skill, der die Tonalität bei familiären Sorgen anpasst.

Ein gut gebauter Agent zieht in dieser Situation typischerweise zwei davon: den Empathie-Skill als Tonalitätsregel über alles drüber, und den Pflegesachleistungs-Skill als inhaltlichen Hauptzug. Den Pflegegrad-Klärungs-Skill aktiviert er nur, wenn der Versicherte tatsächlich noch keinen Pflegegrad hat — was bei „braucht einen Pflegedienst" nicht zwingend der Fall ist und erst geklärt werden muss.

Was hier sichtbar wird: Die Skills überlappen. Der Agent lädt nicht einen monolithischen „Pflege-Skill", sondern kombiniert kleinere Bündel zu einer passenden Antwort. Genau das macht das Pattern stark — und genau hier wird Skill-Auswahl zur Reasoning-Aufgabe.

---

## 4.6 Gedächtnis

Wenn Reasoning das Drehen ist und Wissen der Treibstoff, dann ist Gedächtnis das Schmieröl. Unsichtbar im Betrieb. Aber ohne läuft der Motor heiß.

### Zwei Ebenen

**Working Memory.** Das, was innerhalb einer Anfrage oder Session erinnert wird. Bisherige Schritte, Zwischenergebnisse, aktueller Stand, Nutzer-Eingaben aus dem Verlauf. Lebensdauer: die Session. Ohne Working Memory beginnt jeder Loop-Durchlauf bei Null. Der Agent würde sich im selben Gespräch dreimal denselben Tool-Call gönnen, ohne zu merken, dass das Ergebnis schon da ist.

**Persistentes Gedächtnis.** Das, was über Sessions hinaus erinnert wird. Nutzerpräferenzen, frühere Anliegen, gelernte Muster, individuelle Daten. Lebensdauer: bis aktiv gelöscht oder anders entschieden. Ein Pflegekassen-Assistent mit persistentem Gedächtnis weiß beim nächsten Anruf, dass der Versicherte einen Pflegegrad 3 hat und seine Mutter pflegt — ohne erneut fragen zu müssen.

### Wann persistentes Gedächtnis sinnvoll ist — und wann nicht

Persistentes Gedächtnis ist mächtig. Es macht Interaktionen geschmeidiger, vermeidet Wiederholungen, ermöglicht Personalisierung. Es hat aber drei eingebaute Risiken, die einen ernst zu nehmen sind.

**Datenschutz.** Was der Agent dauerhaft speichert, muss DSGVO-konform sein — Zweckbindung, Speicherdauer, Löschungsanspruch. Das ist kein Detail, sondern eine Architekturentscheidung.

**Drift.** Erinnerungen können falsch werden. Wenn der Agent vor einem Jahr gespeichert hat *„der Nutzer ist Single, lebt allein"*, und das stimmt heute nicht mehr, antwortet er konsistent falsch — solange, bis die Erinnerung aktualisiert wird.

**Bias-Akkumulation.** Persistentes Gedächtnis kann Vorurteile verstärken. Wenn der Agent gelernt hat, dass dieser Nutzer „eher kurze Antworten will", verkürzt er auch dann, wenn der Nutzer gerade eine ausführliche Erklärung bräuchte.

Faustregel: Persistentes Gedächtnis nicht aus Komfort einbauen, sondern aus Notwendigkeit. Wenn der Anwendungsfall ohne klar funktioniert, lieber weglassen.

### Kontextfenster-Management

Ein technischer Aspekt, der schnell relevant wird: Auch das Working Memory ist nicht unendlich. Jeder Tool-Aufruf, jede Zwischenüberlegung, jede neue Eingabe verbraucht Platz im Kontextfenster des Modells. Bei langen Aufgaben kann der Agent den Anfang des Gesprächs vergessen, während er am Ende arbeitet.

Gute Agent-Architekturen managen dieses Fenster aktiv. Sie fassen ältere Schritte zusammen, priorisieren, lagern Details aus. Im Buch geht das zu weit — relevant ist die Botschaft: Gedächtnis ist nicht „der Agent merkt sich alles". Gedächtnis ist eine bewusste Auswahl dessen, was im Moment präsent ist.

---

## 4.7 Motor beim Pflegedienst-Beispiel

Wir haben jetzt vier Komponenten und ein Pattern (Skills) angeschaut. Bleibt zu zeigen, wie sie zusammenspielen, wenn die Anfrage tatsächlich kommt.

> *„Meine Mutter braucht einen Pflegedienst. Was zahlt die Kasse?"*

Der Sensor hat erkannt: Leistungsklärung plus Angehörigen-Sorge, mittlere Dringlichkeit, kein Pflegegrad explizit genannt. Diese Einschätzung wandert in den Motor. Was passiert dort?

**Loop-Durchlauf 1 — Plan fassen.** Das Reasoning zerlegt die Anfrage: Es geht um eine ambulante Pflegeleistung (Pflegesachleistung nach §36 SGB XI). Die Leistungshöhe hängt vom Pflegegrad ab — der ist nicht genannt. Strategie: Erst klären, ob der Pflegegrad bekannt ist; wenn nein, freundlich danach fragen, ohne den Versicherten zu drängen; parallel die Leistungsstruktur erklären, soweit möglich ohne den konkreten Grad.

Der Reasoning-Loop entscheidet: Skill „Pflegesachleistung erklären" ist passend. Skill „Empathische Erstberatung" wird als Tonalitätsregel mitgeladen. Der Skill „Pflegegrad-Klärung" wird vorerst nicht aktiviert — er feuert erst, wenn klar ist, dass tatsächlich noch kein Grad besteht.

**Loop-Durchlauf 2 — Wissen holen.** Der Agent zieht aus der Wissensbasis (Build Context) die Bausteine zu §36 SGB XI: was Pflegesachleistung ist, welche Beträge in welchem Pflegegrad gelten (als Spanne, nicht als Punktwert — Kompass-Regel), wie der Antragsweg läuft.

**Loop-Durchlauf 3 — Werkzeug einsetzen.** Da der konkrete Pflegegrad fehlt, gibt es zwei Pfade: nachfragen oder den Pflegegradrechner als Werkzeug anbieten. Der Agent entscheidet sich für die Kombination — er erklärt das System, weist auf den Rechner hin, und stellt zugleich die Rückfrage. Der Rechner wird hier nicht aufgerufen, sondern *angeboten* — die Eingabe macht der Versicherte.

**Loop-Durchlauf 4 — Bewerten und beenden.** Der Agent prüft sein Zwischenergebnis: Ist die Antwort fachlich korrekt? Ist sie verständlich? Hat sie die emotionale Komponente berücksichtigt? Hat sie die Grenzen gewahrt (keine individuelle Zusage, Spanne statt Punktwert, Hinweis auf Beratungsangebot)? Der Loop hält an.

**Working Memory** über den ganzen Durchlauf hinweg: welche Skills aktiviert sind, welche Bausteine schon gezogen wurden, welche Annahmen gerade gelten (Pflegegrad unbekannt), welche Rückfrage offen ist. Ohne dieses Memory würde der Agent in Durchlauf 3 dieselben Bausteine nochmal ziehen.

Das Ergebnis übergibt er an die Stimme — empathisch im Ton, mittlere Tiefe, mit der Rückfrage als Schlusspunkt. Was die Stimme daraus macht, ist Thema von [[05_stimme]].

Wichtig zu sehen: Im Motor steckt nicht nur „der Agent denkt nach". Es ist ein orchestriertes Zusammenspiel aus Loop, Wissen, Werkzeugen, Skills und Gedächtnis — gerahmt vom Kompass und beobachtet vom Prüfstand. Jede Komponente hat ihre eigene Rolle. Keine kann eine andere ersetzen.

---

## Take-aways

- **Vier Komponenten genügen.** Reasoning-Loop, Wissen, Werkzeuge, Gedächtnis. Skills sind kein fünfter Baustein, sondern ein Pattern, das die ersten drei bündelt.
- **Reasoning ist Flexibilität, nicht Zuverlässigkeit.** Der Loop macht den Agenten anpassungsfähig. Verlässlich wird er nicht dadurch, sondern durch externe Beobachtung — siehe [[07_pruefstand]].
- **Wissen muss Context sein, nicht Content.** Was ein Agent fachlich braucht, ist anders strukturiert als das, was auf einer Website steht. Die Aufbereitung ist eigene Arbeit, nicht Beifang.
- **Werkzeuge skalieren in Risikostufen.** Lesen, Schreiben, Agieren — mit jedem Schritt steigt das Schadenspotenzial. Schreibzugriff bekommt der Agent nur dort, wo er reversibel ist oder ein Mensch prüft.
- **Skills lösen die Spannung zwischen Flexibilität und Qualität.** Der Agent bleibt agentisch in der Auswahl, wird aber deterministischer in der Ausführung. Genau das, was wiederkehrende, qualitätskritische Aufgaben brauchen.
- **Gedächtnis ist Auswahl, nicht Vollständigkeit.** Working Memory hält die Session am Laufen, persistentes Gedächtnis ist ein bewusster Schritt mit eigenen Risiken — kein Default.

---

**Nächster Schritt:** [[05_stimme]] — wie das Ergebnis zum Empfänger kommt, ob Mensch oder System.

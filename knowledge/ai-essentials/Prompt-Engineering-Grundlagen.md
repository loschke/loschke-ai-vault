---
title: Prompt Engineering Grundlagen
type: method
status: stable
created: '2026-03-03'
updated: '2026-03-04'
tags:
  - ki-grundlagen
  - prompt-engineering
  - prompting
  - seminar-material
sources:
  - 'self-authored:loschke:pre-migration'
area: ai-essentials
audience:
  - einsteiger
  - praktiker
  - fuehrungskraft
level: basic
intent:
  - verstehen
  - anwenden
  - vermitteln
contains:
  - method
  - tip
  - vocabulary
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-04'
---
# Prompt Engineering Grundlagen

> Effektive Kommunikation mit KI-Modellen: Vom EAKAF-Framework über Prompt Bias bis zum iterativen Dialog.

---

## Das Problem

Die meisten Menschen reden mit KI wie mit einer Suchmaschine: kurze Stichworte, vage Fragen, keine Struktur. Das Ergebnis: generische Antworten, die niemanden weiterbringen.

Prompt Engineering ist keine Raketenwissenschaft. Es ist die Fähigkeit, klar zu kommunizieren – mit einem System, das genau das tut, was du sagst. Nicht mehr. Nicht weniger.

---

## Das EAKAF-Framework

Fünf Bausteine für strukturierte Prompts. Flexible Verwendung je nach Komplexität der Aufgabe – nicht jeder Prompt braucht alle fünf Elemente.

| Element | Funktion | Beispiel |
|---|---|---|
| **E – Expertenrolle** | Fachliche Ausrichtung und Themenfokus | "Du bist Experte für Social Media Kommunikation, spezialisiert auf Instagram Reels." |
| **A – Aufgabe** | Klare Handlungsanweisung (Herzstück) | "Erstelle einen Redaktionsplan für die nächsten 4 Wochen." |
| **K – Kontext** | Relevante Hintergrundinformationen | "Unsere Zielgruppe sind 25-45-jährige Outdoor-Enthusiasten mit 15.000 Followern." |
| **A – Ausdruck** | Tonalität und Zielgruppenansprache | "Schreibe in einem informellen, erzählenden Stil, warmherzig aber professionell." |
| **F – Format** | Strukturierung und Darstellungsform | "Als Tabelle mit den Spalten: Woche, Thema, Format, Plattform." |

### Expertenrolle: Wer soll antworten?

Definiert den fachlichen Kontext und das Expertise-Level. Sorgt für fundierte, relevante Antworten.

**Beispiele:**
- "Du bist Content-Experte für private Bildungseinrichtungen, spezialisiert auf strategische Content-Planung und Social Media."
- "Du bist ein erfahrener CFO eines mittelständischen Unternehmens."

### Aufgabe: Was soll getan werden?

Herzstück des Prompts. Bestimmt, was das Modell konkret tun soll.

**Starte mit dem richtigen Verb:**

| Verb | Wirkung |
|---|---|
| erstelle | Ergebnisorientiert, strukturiert |
| brainstorme | Explorativ, breiter, kreativer |
| analysiere | Tiefgehend, systematisch |
| fasse zusammen | Komprimierend, essentiell |
| optimiere | Verbessernd, kritisch |
| vergleiche | Kontrastierend, abwägend |
| bewerte | Einschätzend, priorisierend |
| entwickle | Konzeptionell, innovativ |

**Ergänze das relevante Adjektiv:**

| Adjektiv | Wirkung |
|---|---|
| detailliert | Fördert umfassende Antwort mit Einzelheiten |
| prägnant | Fokussiert auf das Wesentliche |
| innovativ | Fördert unkonventionelle Ansätze |
| analytisch | Betont logische Untersuchung |
| praxisorientiert | Fokussiert auf Anwendbarkeit |
| kritisch | Regt zum Hinterfragen an |
| strukturiert | Führt zu klarer Gliederung |
| kreativ | Fördert originelle Ideen |

**Beispiele für Aufgaben-Formulierungen:**
- "Brainstorme außergewöhnliche Ideen für unseren Blog..."
- "Analysiere detailliert die Statistiken unserer IG Posts..."
- "Bewerte kritisch die Vor- und Nachteile folgender Idee..."

### Mehrstufige Aufgaben

Komplexe Aufgaben in nummerierte Schritte zerlegen:

```
1. Analysiere kurz unsere bestehenden Blog-Themen
2. Identifiziere präzise 2 Themenlücken
3. Schlage kreativ je 2 Artikelkonzepte pro Lücke vor
```

### Kontext: Relevante Rahmenbedingungen

Liefert Hintergrundinformationen. Kann Zielgruppe, technische Details, Situation oder Besonderheiten umfassen.

**Kontext-Markierungssyntax:**

Kontextinformationen im Prompt klar kennzeichnen:

```
KONTEXT = "Hier steht dein umfangreicher Kontext"
```

```
<kontext> Hier steht dein umfangreicher Kontext </kontext>
```

```
### Hier steht dein umfangreicher Kontext ###
```

Dann in der Aufgabe darauf verweisen: "Analysiere folgenden `<kontext>`" oder "Erstelle eine Zusammenfassung aus folgendem KONTEXT".

→ Für die Vertiefung von Kontext als Qualitätshebel: [[Context-Engineering-Grundlagen]] (EAKAF-Komponente "Kontext" als Einstieg, Context Engineering als nächste Stufe)

### Ausdruck: Wie soll kommuniziert werden?

Bestimmt Tonalität und Ausdrucksweise. Passt die Kommunikation an Situation und Zielgruppe an.

**Beispiele:**
- "Antworte in einem informellen und erzählenden Stil"
- "Sei kritisch und analytisch in deiner Einschätzung"
- "Behalte eine formale Sprache bei, aber füge humorvolle Elemente hinzu"
- "Passe die Sprache an Schüler einer 2. Klasse an"

### Format: Welche Form soll das Ergebnis haben?

Legt Strukturierung und Darstellungsform fest. Macht die Antwort erfassbar und nutzbar.

**Beispiele:**
- "Beschreibe das Ergebnis in zwei Absätzen"
- "Liste mir das Ergebnis in 5 Stichpunkten auf"
- "Nutze eine tabellarische Darstellung mit den Spalten: Name, Stadt, Land"
- "Nutze Markdown zur Formatierung"

---

## Benannte Prompting-Techniken

Die technische Taxonomie – wichtig für Anschlussfähigkeit an Fachliteratur und externe Quellen.

### Zero-Shot Prompting

Die einfachste Form: Eine Aufgabe, keine Beispiele.

**Wann sinnvoll:** Standardaufgaben, bei denen das Modell genug Vorwissen hat.

```
Fasse den folgenden Artikel in drei Kernaussagen zusammen:
[Artikel]
```

**Stärke:** Schnell, unkompliziert.
**Schwäche:** Bei komplexen oder ungewöhnlichen Aufgaben oft zu generisch.

### Few-Shot Prompting

Du gibst dem Modell Beispiele, wie das Ergebnis aussehen soll. 3-6 Beispiele reichen für signifikante Verbesserungen.

**Wann sinnvoll:** Wenn das Ergebnis einem bestimmten Muster folgen soll – Tonalität, Format, Abstraktionsebene.

```
Schreibe kurze Produktbeschreibungen im folgenden Stil:

Produkt: Bluetooth-Kopfhörer
Beschreibung: Kabellos, 30 Stunden Akku, Active Noise Cancelling. Für alle, die im Großraumbüro ihren Fokus brauchen.

Produkt: Mechanische Tastatur
Beschreibung: Cherry MX Blue Switches, RGB-Beleuchtung, abnehmbares USB-C-Kabel. Für Leute, die beim Tippen gehört werden wollen.

Produkt: Webcam mit Ringlicht
Beschreibung:
```

**Einsatzgebiete:** Komplexe Aufgabenstellungen, mehrstufige Prozesse, Format-sensitive Ausgaben, Klassifizierungsaufgaben, technische Spezifikationen.

### Chain-of-Thought (CoT)

Du bittest das Modell, Schritt für Schritt zu denken, bevor es antwortet.

**Wann sinnvoll:** Logische Probleme, Analysen, Entscheidungen mit mehreren Faktoren.

```
Ein Unternehmen hat 500 Mitarbeiter. 30% nutzen bereits KI-Tools regelmäßig.
Die Geschäftsführung will innerhalb von 12 Monaten auf 80% kommen.

Denke Schritt für Schritt:
1. Wie viele Mitarbeiter müssen noch erreicht werden?
2. Welche Hindernisse gibt es typischerweise?
3. Welche Maßnahmen wären realistisch?
4. Erstelle einen groben Zeitplan.
```

### Role Prompting

Du weist dem Modell eine Rolle zu. Entspricht der "Expertenrolle" im EAKAF-Framework.

```
Du bist ein erfahrener CFO eines mittelständischen Unternehmens.
Bewerte den folgenden Business Case für eine KI-Initiative aus deiner Perspektive.
```

---

## System Prompts / Custom Instructions

Dauerhafte Anweisungen, die das Verhalten des Modells über eine gesamte Konversation steuern. In ChatGPT: "Custom Instructions", in Claude: "System Prompt" oder "Project Instructions".

**Wann sinnvoll:** Wiederkehrende Aufgaben, konsistenter Ton, spezialisierte Assistenten.

| Element | Beispiel |
|---|---|
| **Rolle & Expertise** | "Du bist ein Senior Content Strategist mit 10 Jahren B2B-Erfahrung" |
| **Verhaltensregeln** | "Antworte immer auf Deutsch. Duze den Nutzer." |
| **Verbote** | "Verwende keine Buzzwords. Keine Emojis." |
| **Output-Präferenzen** | "Bevorzuge Tabellen gegenüber Fließtext." |
| **Kontext** | "Der Nutzer arbeitet in der Automobilbranche." |

**Stärke:** Einmal einrichten, dauerhaft konsistente Ergebnisse.
**Schwäche:** Zu lange System Prompts können das Modell verwirren.

---

## Prompt Bias: Wie Fragestellung Antworten verzerrt

Wie du fragst, beeinflusst was du bekommst. Vier typische Bias-Muster:

| Bias-Typ | Problematisch | Besser |
|---|---|---|
| **Suggestiv** | "Warum sollten wir eine Influencer-Kampagne für Gen Z starten?" | "Welche Kampagnenformate eignen sich am besten für Gen Z?" |
| **Framing** | "Welche Risiken drohen, wenn wir KI einsetzen?" | "Welche Chancen und Risiken sind mit dem Einsatz von KI verbunden?" |
| **Stereotyp** | "Erkläre, warum Entwickler immer introvertiert sind." | "Wie verteilen sich intro- und extrovertierte Menschen in Software-Berufen?" |
| **Negativ** | "Erkläre ohne Fachjargon, wie KI funktioniert." | "Erkläre in einfacher Alltagssprache, wie KI funktioniert." |

**Regel:** Neutral formulieren. Offene Fragen statt suggestive. "Welche Optionen gibt es?" statt "Warum ist Option A die beste?"

---

## Allrounder vs. Reasoning-Modelle

Nicht jedes Modell wird gleich promptet:

| **Aspekt** | **Allrounder-Modelle** | **Reasoning-Modelle** |
|---|---|---|
| **Modelle** | GPT-4o, Claude, Gemini | o3, DeepSeek R1 |
| **Optimiert für** | Vielseitigkeit, Kreatives | Innovation, Logik, Strategie |
| **Aufgaben** | Content, Ideen, Bewertung | Mathe, Coding, Analysen |
| **Tempo** | Instant Ergebnisse | Langsamer (durch Denken) |
| **Prompting** | Detailliert & strukturiert | Präzise & problemfokussiert |
| **Techniken** | Rollen, Beispiele, Formate | Ohne Beispiele & Vorgaben |

**Allrounder** profitieren von EAKAF, Few-Shot und detaillierten Formatvorgaben.
**Reasoning-Modelle** brauchen klare Problemstellungen, weniger Vorgaben – sie "denken" selbst.

---

## Iteratives Prompting: Der Dialog als Methode

KI-Nutzung ist ein Gespräch, kein Einmal-Wurf. Der perfekte Prompt entsteht selten beim ersten Versuch. Die Fähigkeit, präzise Korrekturen zu geben, ist wichtiger als der perfekte erste Wurf.

### Die 7 Kategorien des iterativen Dialogs

#### 1. Klärung & Erweiterung

- "Kannst du den Abschnitt zur Zielgruppenansprache genauer ausführen? Was sind konkret die psychografischen Merkmale dieser Persona?"
- "Du hast 'Digital Body Language' erwähnt – kannst du dieses Konzept für unser Marketing-Team erklären?"
- "Ich glaube, es gibt einen Fehler bei den Instagram-Ad-Spezifikationen. Ist die maximale Textlänge nicht 125 statt 225 Zeichen?"
- "Kannst du drei konkrete Beispiele für erfolgreiche B2B-LinkedIn-Posts geben, die diesen Storytelling-Ansatz verwenden?"
- "Gibt es noch unkonventionellere Ansätze für diese Kampagne, die wir noch nicht bedacht haben?"

#### 2. Umformulieren & Anpassen

- "Formuliere den Pressetext in einem lockeren, conversational Tone of Voice um, wie wir ihn für Social Media verwenden."
- "Überarbeite die Produktbeschreibung für ein technisch nicht versiertes Publikum, ohne wichtige Vorteile zu verlieren."
- "Verwandle den Blogpost in eine prägnante Infografik-Vorlage mit maximal 7 Kernpunkten."
- "Erkläre unser Attributionsmodell so, dass Marketing-Einsteiger es verstehen – idealerweise mit einer Alltagsanalogie."
- "Wandle die wichtigsten Punkte des Whitepapers in eine Reihe von 5 LinkedIn-Posts um, die aufeinander aufbauen."

#### 3. Zusammenfassen & Neuanlauf

- "Fasse die wichtigsten Punkte unserer Diskussion zur Content-Strategie in maximal 5 Bullet Points zusammen."
- "Erstelle aus unserem Brainstorming eine priorisierte To-Do-Liste mit den 3 vielversprechendsten Maßnahmen."
- "Lass uns einen anderen Ansatz versuchen. Anstatt produkt-zentriert, entwickle eine kunden-zentrierte Story."
- "Kannst du unsere Social-Media-Strategie in einen konkreten Wochenplan übersetzen?"
- "Der Ton ist noch zu formal. Versuche es noch einmal, aber nahbarer, wie in einer persönlichen E-Mail."

#### 4. Problemlösung & Strategie

- "Was wäre, wenn wir komplett auf organisches Wachstum setzen müssten? Wie würde unsere Content-Strategie dann aussehen?"
- "Wenn wir den Relaunch mit nur der Hälfte des Budgets umsetzen müssten, welche Elemente würdest du priorisieren?"
- "Skizziere einen 90-Tage-Plan für die Einführung unseres Lead-Nurturing-Prozesses mit Meilensteinen und KPIs."
- "Wie würden wir den Erfolg dieser Influencer-Kampagne messen? Erstelle eine Tabelle mit KPIs und Messverfahren."
- "Vergleiche unseren aktuellen Content-Mix mit dem, was für die neue Strategie benötigt wird."

#### 5. Analyse & Bewertung

- "Analysiere die Vor- und Nachteile unserer Influencer-Marketing-Strategie im Vergleich zu klassischer PR."
- "Wie hat sich die Nutzung von User-Generated Content im Luxussegment entwickelt?"
- "Vergleiche unseren Content-Ansatz mit dem unserer drei Hauptwettbewerber."
- "Welche potenziellen Risiken birgt unsere provokante Kampagnenidee?"
- "Wie würdest du den potenziellen ROI dieser Marketing-Automation einschätzen?"

#### 6. Beispiele & Anwendung

- "Gib drei reale Beispiele für Marken, die Community-Marketing erfolgreich eingesetzt haben."
- "Wie könnten wir Micro-Moments konkret für unsere E-Commerce-Website nutzen?"
- "Nenne spezifische Zahlen oder Statistiken zur Wirksamkeit von User-Generated Content im Beauty-Bereich."
- "Welche drei sofort umsetzbaren Tipps würdest du einem Social-Media-Manager geben, der mit TikTok anfängt?"
- "Erkläre den Marketing-Funnel mit einer Alltagsanalogie für unsere Vertriebsschulung."

#### 7. Stakeholder & Einflussanalyse

- "Wie würde unsere Preiserhöhung verschiedene Kundengruppen beeinflussen? Erstelle eine Stakeholder-Übersicht."
- "Wie könnte die Content-First-Strategie intern aufgenommen werden? Welche Widerstände könnten entstehen?"
- "Überprüfe unseren Kampagnenansatz auf mögliche Ausschlüsse bestimmter demographischer Gruppen."
- "Wie würde die einheitliche Bildsprache auf verschiedenen Plattformen wirken?"
- "Wie könnten unsere Wettbewerber auf diese Produkteinführungsstrategie reagieren?"

---

## Häufige Fehler

| Fehler | Problem | Besser |
|---|---|---|
| **Zu vage** | "Schreib was über KI" | "Schreibe einen LinkedIn-Post (max. 200 Wörter) über die drei häufigsten Fehler bei der KI-Einführung" |
| **Zu viel auf einmal** | "Analysiere, bewerte, erstelle Strategie und schreibe Präsentation" | Aufgabe in Schritte aufteilen. Erst analysieren, dann bewerten, dann Strategie. |
| **Kein Output-Format** | "Gib mir Feedback zu meinem Text" | "Gib mir Feedback in einer Tabelle: Stärke / Schwäche / Verbesserungsvorschlag" |
| **Kontext vergessen** | "Schreib eine E-Mail an den Kunden" | "Schreib eine E-Mail an den IT-Leiter (Mittelstand, skeptisch gegenüber KI). Thema: Einladung zum Workshop." |
| **Ergebnis akzeptieren** | Ersten Output nehmen | Iterieren: "Der Ton ist zu Marketing-lastig. Sachlicher, mit konkreten Zahlen." |

---

## Die 80/20-Regel des Prompt Engineering

Die fünf Dinge, die den größten Unterschied machen:

1. **Sei spezifisch** – Je klarer die Aufgabe, desto besser das Ergebnis
2. **Gib Kontext** – Das Modell weiß nicht, was du weißt
3. **Definiere das Format** – Tabelle, Liste, Fließtext, Länge
4. **Gib Beispiele** – Zeigen schlägt Erklären
5. **Iteriere** – Der erste Prompt ist selten der letzte

Alles darüber hinaus – Temperature-Settings, Token-Limits, Advanced Prompting Patterns – ist Feintuning. Diese fünf Punkte decken 80% des Werts ab.

---

## Prompt Engineering vs. Context Engineering

Prompt Engineering fokussiert auf die Formulierung der Aufgabe. [[Context-Engineering-Grundlagen|Context Engineering]] geht einen Schritt weiter: Nicht nur WAS du sagst, sondern WELCHES WISSEN du dem Modell bereitstellst.

| | Prompt Engineering | Context Engineering |
|---|---|---|
| **Fokus** | Die Instruktion | Das gesamte Informationspaket |
| **Frage** | "Wie formuliere ich die Aufgabe?" | "Was braucht das Modell, um die Aufgabe gut zu lösen?" |
| **Beispiel** | "Schreibe im Stil von Brand X" | System Prompt + Styleguide + Beispiel-Texte + Zielgruppen-Info |
| **Hebel** | 25% der Output-Qualität | 75% der Output-Qualität |

→ Siehe [[Context-Engineering-Grundlagen]] für die Vertiefung.

---

## Verwendungshinweise

| Zielgruppe | Fokus | Tiefe |
|---|---|---|
| Einsteiger | EAKAF-Basics, Output-Format, Iteration | 60-min-Workshop |
| Fortgeschrittene | Few-Shot, CoT, Prompt Bias, iterativer Dialog | Halbtag |
| Power-User | System Prompts, Context Engineering, Reasoning-Modelle | Ganztag |

**Workshop-Einstieg:** Teilnehmer bringen eine eigene Aufgabe mit. Erst "naiv" prompten, dann mit EAKAF optimieren. Der Vorher-Nachher-Vergleich überzeugt mehr als jede Folie.

---

## Verknüpfungen

- [[Context-Engineering-Grundlagen]] – Der nächste Schritt nach Prompt Engineering (EAKAF-Kontext als Einstieg)
- [[GenAI-Stack-Erklaermodell]] – Einordnung: Prompting ist Ebene-2-Kompetenz
- [[Halluzinationen-und-Zuverlaessigkeit]] – Warum gute Prompts allein nicht reichen
- [[Content-Bewertung-Checkliste]] – Kritisches Prüfen des KI-Outputs
- [[KI-Faehigkeiten-Scope]] – Was kann KI überhaupt? (Voraussetzung für gute Prompts)

---

*Grundlagen-Referenz für Workshops, Seminare und Beratung*

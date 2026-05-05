---
title: Halluzinationen und Zuverlässigkeit
type: concept
status: stable
created: '2026-03-03'
updated: '2026-03-04'
tags:
  - ki-grundlagen
  - halluzinationen
  - zuverlaessigkeit
  - kritisches-denken
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
  - bewerten
  - vermitteln
contains:
  - contrast
  - tip
  - method
  - argument
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-04'
---
# Halluzinationen und Zuverlässigkeit

> Was Halluzinationen sind, warum sie passieren, wann man KI-Output vertrauen kann – und wann nicht.

---

## Das Problem

Jeder Workshop-Teilnehmer fragt irgendwann: "Aber kann man dem vertrauen?" Die kurze Antwort: Es kommt drauf an. Die längere Antwort ist dieses Dokument.

KI-Modelle erzeugen regelmäßig Inhalte, die plausibel klingen, aber falsch sind. Das ist kein Bug, sondern ein Merkmal der Technologie. Wer KI produktiv nutzen will, muss verstehen, wann sie zuverlässig ist und wann nicht.

---

## Was sind Halluzinationen?

Eine Halluzination ist eine KI-Ausgabe, die sachlich falsch, erfunden oder nicht durch die Eingabe gestützt ist – aber überzeugend formuliert wird.

### Typen

| Typ | Was passiert | Beispiel |
|-----|-------------|---------|
| **Fakten-Halluzination** | Das Modell erfindet Fakten | "Die Studie von McKinsey (2024) zeigt..." – die Studie existiert nicht |
| **Quellen-Halluzination** | Das Modell erfindet Quellen | Fake-URLs, erfundene Paper-Titel, nicht existierende Autoren |
| **Logik-Halluzination** | Plausible Argumentation, falsches Ergebnis | Rechenaufgabe korrekt aufgebaut, aber Ergebnis falsch |
| **Kontext-Halluzination** | Das Modell "ergänzt" Informationen, die nicht im Input standen | Zusammenfassung enthält Punkte, die im Originaldokument nicht vorkommen |
| **Konfabulation** | Das Modell füllt Wissenslücken kreativ | Detaillierte Beschreibung eines Events, das nie stattfand |

### Kernproblem

Halluzinationen kommen ohne Warnung. Das Modell zeigt kein Signal, dass es unsicher ist. Ein faktenbasierter Satz und ein halluzinierter Satz sehen identisch aus. Das macht Halluzinationen gefährlicher als offensichtliche Fehler.

---

## Warum passiert das?

### Die technische Erklärung (vereinfacht)

LLMs sind Muster-Vervollständiger. Sie berechnen, welches Wort als nächstes am wahrscheinlichsten kommt. Sie haben kein "Wissen" im menschlichen Sinn – sie haben statistische Muster aus Trainingsdaten.

**Kein Wissen, nur Statistik:** Die KI greift nicht auf eine Datenbank zu. Sie berechnet Wahrscheinlichkeiten für das nächste Wortteil (Token). Das Problem: Eine erfundene Tatsache kann sprachlich ("statistisch") perfekt passen.

```
Eingabe: "Die Hauptstadt von Australien ist..."
→ Modell berechnet: Sydney (65%), Melbourne (20%), Canberra (12%)
→ Sydney und Melbourne sind im Trainingsmaterial überrepräsentiert
→ Die richtige Antwort (Canberra) hat die niedrigste Wahrscheinlichkeit
```

Das Modell unterscheidet nicht zwischen "Ich weiß das" und "Ich rate das". Es generiert in beiden Fällen Text mit der gleichen Überzeugungskraft. Die KI will den Satz beenden, nicht die Wahrheit sagen.

### Die drei Hauptursachen

| Ursache | Erklärung |
|---------|-----------|
| **Trainingsdaten-Lücken** | Das Modell hat etwas nicht gelernt (zu selten, zu neu, zu nischig) |
| **Muster-Übertragung** | Das Modell wendet ein gelerntes Muster auf einen falschen Kontext an |
| **Optimierung auf Plausibilität** | Das Modell wurde trainiert, hilfreiche Antworten zu geben – auch wenn "Ich weiß es nicht" die bessere Antwort wäre |

---

## Risikomodell: Erschaffen, Reduzieren, Umwandeln

Die drei Kernfähigkeiten von KI haben fundamental unterschiedliche Halluzinationsrisiken:

| Fähigkeit | Risiko | Erklärung |
|---|---|---|
| **Erschaffen** | Höchstes Risiko | KI generiert aus wenig Input viel neuen Text. Hier entsteht am meisten "Neues", also auch am meisten Erfundenes. Besonders kritisch bei Fakten, Zahlen, Quellen. |
| **Reduzieren** | Niedriges Risiko | KI arbeitet mit eurem Material, verdichtet und filtert. Die Information kommt von euch, nicht von der KI. Halluzinationsrisiko deutlich geringer. |
| **Umwandeln** | Geringstes Risiko | KI strukturiert um, formatiert, passt an. Der Inhalt bleibt im Wesentlichen gleich. Hier ist KI am zuverlässigsten. |

**Faustregel:** Je mehr die KI "frei erzählt", desto mehr muss ich prüfen.

→ Dieses Modell stammt aus den [[KI-Faehigkeiten-Scope|3 Superkräften]] und wird auch bei [[KI-Output-Risiken]] als Risiko-Einordnung genutzt.

---

## Wann ist KI zuverlässig? (Detaillierte Aufgabenübersicht)

Innerhalb des Risikomodells gibt es weitere Abstufungen nach konkreter Aufgabe.

### Hohe Zuverlässigkeit

| Aufgabe | Warum |
|---------|-------|
| **Textbearbeitung** (Umformulieren, Kürzen, Tonalität ändern) | Das Modell arbeitet mit dem Input, nicht mit seinem "Wissen" |
| **Übersetzung** (gängige Sprachen) | Extrem gut trainiert, viele Paralleltexte |
| **Code-Generierung** (Standardmuster) | Viel Code in den Trainingsdaten, testbar |
| **Strukturierung** (Gliederung, Tabellen, Formatierung) | Muster-Erkennung, nicht Fakten-Wissen |
| **Brainstorming** (Ideen, Varianten) | Kein "richtig" oder "falsch" |

### Mittlere Zuverlässigkeit

| Aufgabe | Warum prüfen |
|---------|-------------|
| **Zusammenfassungen** | Kann Punkte auslassen oder hinzufügen |
| **Allgemeinwissen** | Meist korrekt, aber Ausnahmen möglich |
| **Analyse** (wenn Input bereitgestellt) | Logik manchmal fehlerhaft bei komplexen Zusammenhängen |

### Niedrige Zuverlässigkeit

| Aufgabe | Warum kritisch |
|---------|---------------|
| **Spezifische Fakten** (Zahlen, Daten, Namen) | Häufig halluziniert |
| **Quellenangaben** (URLs, Paper, Studien) | Werden regelmäßig erfunden |
| **Rechtliche/medizinische Aussagen** | Muster statt Expertise, Fehler haben Konsequenzen |
| **Aktuelle Ereignisse** | Trainingsdaten-Stichtag, veraltet |
| **Nischen-Wissen** | Wenig Trainingsmaterial, hohes Halluzinationsrisiko |

### Wo halluziniert KI am häufigsten?

| Kategorie | Was passiert | Beispiel |
|---|---|---|
| **Quellen & Zitate** | KI erfindet plausible aber nicht-existente Quellen | "Laut Gartner-Report 2024..." – Report existiert nicht |
| **Rechtliche Aussagen** | Paragraphen, Urteile und Fristen werden plausibel kombiniert, aber falsch | "Nach 8 Jahren Betriebszugehörigkeit beträgt die Kündigungsfrist 6 Jahre" |
| **Zahlen & Statistiken** | Konkrete Zahlen wirken seriös, sind aber oft geschätzt oder erfunden | "Der deutsche KI-Markt wächst um 34% jährlich" – frei erfunden |
| **Personen & Biografien** | KI mischt echte und erfundene Fakten zu einer plausiblen Vita | Falsch zugeordnete Zitate, erfundene Positionen |
| **Aktuelles** | Alles nach dem Trainings-Cutoff wird geraten, nicht gewusst | Veraltete Beitragssätze, falsche aktuelle Zahlen |
| **Fachliche Randbereiche** | Je nischiger das Thema, desto mehr Erfindung | "Nussknacker werden nach DIN ISO 12345 gefertigt" – Norm existiert nicht |

---

## Mitigationsstrategien

### Strategie 1: Aufgaben richtig zuweisen

Die effektivste Strategie: KI für Aufgaben einsetzen, bei denen Halluzinationen entweder unwahrscheinlich oder unkritisch sind.

**Regel:** KI ist am besten, wenn sie mit deinem Input arbeitet, nicht mit ihrem "Wissen".

| Statt | Besser |
|-------|--------|
| "Was sagt die Studie von McKinsey?" | Studie hochladen: "Fasse diese Studie zusammen" |
| "Wie hoch ist der Umsatz von Firma X?" | Geschäftsbericht hochladen: "Extrahiere die Umsatzzahlen" |
| "Welche Gesetze gelten für KI?" | EU AI Act Dokument bereitstellen: "Erkläre die Risikoklassen" |

### Strategie 2: Kontext bereitstellen

Je mehr relevanter Kontext das Modell hat, desto weniger muss es "raten".

→ Siehe [[Context-Engineering-Grundlagen]] für Details.

### Strategie 3: Explizit um Unsicherheit bitten

```
Wenn du dir bei einer Aussage nicht sicher bist, markiere sie mit [UNSICHER].
Wenn du eine Quelle nicht verifizieren kannst, sage das explizit.
```

Funktioniert nicht perfekt, reduziert aber die Confident-Hallucination-Rate.

### Strategie 4: Fakten extern prüfen

Für alle faktenbasierten Aussagen gilt: Gegenprüfung mit Primärquellen.

**Praxis-Regel:** Je wichtiger die Entscheidung, desto gründlicher die Prüfung.

| Konsequenz bei Fehler | Prüfaufwand |
|----------------------|-------------|
| Gering (internes Brainstorming) | Plausibilitäts-Check reicht |
| Mittel (Kundenpräsentation) | Kernaussagen gegenprüfen |
| Hoch (Vertrag, Compliance, Publikation) | Jede Faktenaussage verifizieren |

→ Siehe [[Content-Bewertung-Checkliste]] für ein strukturiertes Prüf-Framework.

### Strategie 5: Spezialisierte Tools nutzen

Für Recherche-Aufgaben Tools mit eingebauter Quellenprüfung verwenden:

| Tool | Vorteil |
|------|---------|
| **Perplexity** | Verlinkt Quellen direkt in der Antwort |
| **ChatGPT mit Websuche** | Kann aktuelle Informationen einbeziehen |
| **Claude mit Dokumenten** | Arbeitet mit deinen Quellen, statt zu raten |

---

## Die richtige Erwartungshaltung

### Was KI IST

Ein extrem leistungsfähiges Werkzeug für Textverarbeitung, Strukturierung, Ideenfindung und Analyse – wenn man es mit den richtigen Aufgaben und dem richtigen Kontext einsetzt.

### Was KI NICHT IST

Ein Orakel. Eine Suchmaschine. Ein Faktenchecker. Eine verlässliche Quelle für spezifische Daten.

### Die Piloten-Analogie

KI ist der Autopilot, nicht der Pilot. Der Autopilot fliegt 95% der Strecke zuverlässig. Aber der Pilot muss wissen, wann er übernehmen muss, und er muss die Instrumente lesen können.

"Vertraue, aber überprüfe" – ist keine Einschränkung, sondern die Voraussetzung für produktive KI-Nutzung.

---

## Für Workshops: Der Live-Halluzinations-Test

**Übung (10 Minuten):**

1. Frage das Modell nach spezifischen Fakten, die du selbst verifizieren kannst
   - "Wer ist der aktuelle CEO von [lokales Unternehmen]?"
   - "Wann wurde [bestimmtes Gesetz] verabschiedet?"
   - "Nenne drei Studien zum Thema [X] mit Autoren und Jahreszahl"
2. Prüfe die Antworten gegen die Primärquellen
3. Diskutiere: Was war korrekt? Was war halluziniert? Wie erkenne ich den Unterschied?

**Warum das funktioniert:** Teilnehmer erleben Halluzinationen live. Das ist überzeugender als jede Warnung.

---

## Verknüpfungen

- [[KI-Output-Risiken]] – Halluzinationsrisiko im Kontext von Output-Compliance
- [[KI-Faehigkeiten-Scope]] – Die 3 Superkräfte (Erschaffen/Reduzieren/Umwandeln) als Risikomodell
- [[Content-Bewertung-Checkliste]] – Strukturiertes Framework für die Prüfung von Content
- [[Prompt-Engineering-Grundlagen]] – Gute Prompts reduzieren Halluzinationsrisiko
- [[Context-Engineering-Grundlagen]] – Guter Kontext reduziert Halluzinationsrisiko
- [[RAG]] – Technische Lösung: KI mit eigenen, verifizierten Daten arbeiten lassen

---

*Grundlagen-Referenz für den verantwortungsvollen Umgang mit KI-Output*

---
title: Die 5 Kontextdimensionen
type: framework
status: stable
created: '2026-03-09'
updated: '2026-03-09'
tags:
  - ai-agents
sources:
  - 'self-authored:loschke:enterprise-ai-agents'
area: ai-agents
audience:
  - konzepter
  - entwickler
  - redaktion
level: intermediate
intent:
  - verstehen
  - anwenden
contains:
  - concept
  - method
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Die 5 Kontextdimensionen

> Was eine vollstaendige Wissenseinheit ausmacht — fuenf Dimensionen, die jeweils eine andere Frage beantworten.

---

## Kernaussage

Wenn Wissen fuer ein LLM aufbereitet wird, reicht der Inhalt allein nicht. Eine Wissenseinheit braucht Kontext ueber sich selbst: Was ist das? Wie haengt es zusammen? Ist es aktuell? Welche Regeln gelten? Fuer wen ist es relevant?

Fuenf Dimensionen beschreiben diesen Kontext. Jede beantwortet eine eigene Frage. Wenn eine fehlt, hat das konkrete Konsequenzen fuer die Antwortqualitaet.

---

## Die fuenf Dimensionen

### D1: Bedeutung — Was ist das inhaltlich?

| Feld | Beispiel |
|------|---------|
| Titel | "Pflegegeld" |
| Typ | FAKT, EMPFEHLUNG, ANLEITUNG, FAQ, CHECKLISTE, VERGLEICH, GLOSSAR, NAVIGATION |
| Cluster | Pflege, Zahngesundheit, Schwangerschaft |
| Kategorie | Geldleistungen, Sachleistungen, Antraege |
| Quellen | URLs der Originalseiten |

**Wenn fehlt:** Generische oder falsche Antworten. Das System weiss nicht, worueber es spricht. Es kann die Wissenseinheit nicht einordnen.

### D2: Struktur — Wie haengt es zusammen?

| Relationstyp | Bedeutung | Beispiel |
|---|---|---|
| voraussetzung | A erfordert B | Pflegegeld erfordert Pflegegrad 2+ |
| kombinierbar_mit | A und B zusammen moeglich | Pflegegeld + Sachleistung ueber Kombinationsleistung |
| alternative_zu | A oder B, nicht beides | Pflegegeld oder Sachleistung |
| verwandt_mit | Thematisch verbunden | Pflegegeld und Verhinderungspflege |
| teil_von | A ist Bestandteil von B | Pflegegeld ist Teil des Leistungskatalogs |
| ersetzt_durch | A wurde durch B abgeloest | Alte Pflegestufen ersetzt durch Pflegegrade |

**Wenn fehlt:** Fragmentierte Teilantworten. Das System erkennt nicht, dass Konzepte zusammengehoeren. Es beantwortet die Frage, aber denkt nicht mit.

### D3: Qualitaet — Kann ich mich darauf verlassen?

| Feld | Bedeutung |
|------|-----------|
| Stand | Datum der letzten Pruefung |
| Volatilitaet | Wie oft aendert sich diese Info? |
| Validiert | Ist die Info fachlich freigegeben? |

**Volatilitaets-Level:**

| Level | Bedeutung | Pruefintervall | Beispiel |
|-------|-----------|---------------|---------|
| Hoch | Aendert sich durch Gesetzgebung | Jaehrlich oder bei Reform | Leistungsbetraege |
| Mittel | Aendert sich gelegentlich | Alle 6 Monate | Antragsverfahren |
| Niedrig | Stabil ueber Jahre | Jaehrlich | Grundlegende Definitionen |

**Wenn fehlt:** Veraltete oder ungepruefte Informationen. Das System weiss nicht, ob Betraege noch stimmen. Kein automatisches Flagging moeglich.

### D4: Regeln — Was gilt?

| Feld | Bedeutung |
|------|-----------|
| Haftungshinweis | Muss die Antwort einen Disclaimer enthalten? |
| Rechtsgrundlage | Welches Gesetz oder welche Regelung liegt zugrunde? |

**Wenn fehlt:** Das System ueberschreitet Grenzen. Es weiss nicht, ob ein Disclaimer noetig ist. Es kann die Verlaesslichkeit seiner Aussage nicht einordnen.

### D5: Zielgruppe — Fuer wen?

| Feld | Bedeutung |
|------|-----------|
| Zielgruppe | Wer braucht diese Information? (z.B. Betroffene, Angehoerige, Fachpersonal) |
| Kontext-Tags | Zusaetzliche Eingrenzungen (z.B. Pflegegrade, Setting, Region) |

**Wenn fehlt:** Antwort am Bedarf vorbei. System gibt Angehoerigen-Info an Betroffene. System filtert nicht nach relevantem Kontext.

---

## Wichtiges Architekturprinzip

Felder wie Zielgruppe und Kontext-Tags sind Retrieval-Infrastruktur, nicht Intentions-Zuordnung. Sie helfen, den richtigen Content zur Laufzeit zu FINDEN. Sie bestimmen nicht, WIE der Content kommuniziert wird.

Derselbe Baustein bedient verschiedene Intentionen — die Kommunikationsschicht (siehe [[Stimme-Kommunikation]]) steuert den Output.

**Beispiel:** Ein Pflegegeld-Baustein bedient gleichzeitig:
- Frische Diagnose: Pflegegeld als eine von mehreren Leistungen einordnen
- Leistungsklaerung: Direkt die Betraege nennen
- Langzeit-Management: Pflegegeld als Teil des Gesamtpakets

Gleicher Content, voellig anderer Output.

---

## Wann braucht man alle fuenf?

| Ansatz | Dimensionen | Erklaerung |
|--------|------------|------------|
| Cluster-Dokument | D1 (minimal), D3 (minimal) | Titel und Stand reichen. Struktur und Zielgruppe sind implizit im Text. |
| Atomare Bausteine (PoC) | D1, D3, D5 | Bedeutung, Qualitaet und Zielgruppe fuer Basis-Retrieval. |
| Atomare Bausteine (Produktion) | Alle fuenf | Volle Dimensionen fuer praezises Retrieval, automatische Wartung und proaktive Antworten. |

Man muss nicht alle fuenf von Tag 1 befuellen. Aber man sollte sie kennen, um zu wissen, was spaeter fehlen wird.

---

## Verknuepfungen

- [[Gedaechtnis-Context-Engineering]] — Das Element, das Kontextdimensionen nutzt
- [[Cluster-vs-Bausteine]] — Welcher Ansatz braucht welche Dimensionen?
- [[Content-ist-nicht-Context]] — Warum Aufbereitung ueberhaupt noetig ist
- [[Stimme-Kommunikation]] — Wie derselbe Content unterschiedlich kommuniziert wird

---

*Quelle: Eigene Beratungspraxis, entwickelt 2025/2026*

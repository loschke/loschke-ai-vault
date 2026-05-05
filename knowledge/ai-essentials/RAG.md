---
title: RAG – Retrieval Augmented Generation
type: concept
status: stable
created: '2026-01-27'
updated: '2026-03-03'
tags:
  - ki-grundlagen
  - rag
  - retrieval
  - vector-search
  - knowledge-management
sources:
  - 'self-authored:loschke:pre-migration'
area: ai-essentials
audience:
  - einsteiger
  - praktiker
  - fuehrungskraft
  - technisch
level: basic-to-advanced
intent:
  - verstehen
  - einordnen
  - entscheiden
contains:
  - method
  - contrast
  - decision-aid
  - analogy
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-04'
---
# RAG – Retrieval Augmented Generation

> LLMs mit eigenem Wissen verbinden. Das Konzept hinter "KI auf meine Dokumente loslassen" – von der Grundidee bis zur Entscheidung, welcher Ansatz passt.

---

## Was ist RAG?

Statt dem LLM alles beizubringen, lässt man es **vor dem Antworten suchen**.

```
Frage → Suche in deinen Dokumenten → Relevante Stellen finden → LLM antwortet basierend darauf
```

Wie ein Mitarbeiter, der erst im Firmen-Wiki nachschlägt, bevor er antwortet.

### Das Problem, das RAG löst

LLMs haben zwei fundamentale Grenzen:

1. **Stichtag:** Trainingsdaten enden an einem bestimmten Datum. Alles danach kennt das Modell nicht.
2. **Kein internes Wissen:** Das Modell kennt deine Firma, deine Produkte, deine Prozesse nicht.

RAG löst beides: Es gibt dem Modell Zugang zu aktuellen, eigenen Daten – ohne das Modell selbst zu verändern.

### Die Bibliotheks-Analogie (erweitert)

Das LLM hat die Bibliothek der Welt gelesen (→ [[Wie-LLMs-funktionieren]]). Aber dein internes Firmen-Wiki, deine Verträge, deine Produktdokumentation standen nicht in dieser Bibliothek.

RAG stellt dem LLM ein Bücherregal mit deinen Dokumenten neben den Schreibtisch. Bevor es antwortet, greift es ins Regal, sucht relevante Stellen und nutzt sie als Grundlage.

---

## Wie funktioniert RAG?

### Der Prozess (vereinfacht)

```
Vorbereitung (einmalig):
1. Dokumente sammeln (PDFs, Word, Webseiten, Datenbanken)
2. In Stücke teilen ("Chunking" – z.B. Absätze oder Seiten)
3. Jedes Stück in einen Vektor umwandeln ("Embedding")
4. Vektoren in einer Datenbank speichern ("Vector Store")

Abfrage (bei jeder Frage):
5. Frage des Nutzers in einen Vektor umwandeln
6. Ähnlichste Dokument-Stücke finden ("Retrieval")
7. Gefundene Stücke + Frage an das LLM geben
8. LLM antwortet basierend auf den gefundenen Informationen
```

### Die Schlüsselbegriffe

| Begriff | Was es bedeutet | Analogie |
|---------|-----------------|----------|
| **Embedding** | Text wird in eine Zahlenreihe umgewandelt, die die Bedeutung repräsentiert | Wie ein Fingerabdruck für die Bedeutung eines Textes |
| **Vector Store** | Datenbank, die diese Zahlenreihen speichert und durchsuchbar macht | Das Karteikarten-System der Bibliothek |
| **Chunking** | Dokumente in durchsuchbare Häppchen teilen | Ein Buch in einzelne Kapitel oder Absätze zerlegen |
| **Retrieval** | Die relevantesten Häppchen für eine Frage finden | Im Karteikarten-System die passenden Karten ziehen |

### Warum "semantische" Suche?

Klassische Suche findet exakte Wörter. RAG findet Bedeutung.

| Frage | Klassische Suche findet | RAG findet |
|-------|------------------------|------------|
| "Wie kündige ich?" | Nur Dokumente mit dem Wort "kündigen" | Auch: "Vertragsbeendigung", "Beendigung des Arbeitsverhältnisses", "Austrittsverfahren" |
| "Was kostet das?" | Nur Dokumente mit "Kosten" | Auch: "Preisliste", "Tarifübersicht", "Gebührenordnung" |

---

## Wann brauche ich das?

### RAG sinnvoll

| Situation | Beispiel |
|-----------|---------|
| **Eigene Dokumente durchsuchbar machen** | Policies, Handbücher, Verträge, SOPs |
| **Wissen, das sich ändert** | Preislisten, Produktinfos, aktuelle Prozesse |
| **Nachvollziehbarkeit wichtig** | Quellenangabe in der Antwort ("Laut Dokument X, Seite Y...") |
| **Viele Dokumente** | Zu viel, um alles in den Kontext zu kopieren |
| **Unternehmens-Chatbot** | Mitarbeiter oder Kunden können Fragen stellen |

### RAG nicht nötig

| Situation | Warum nicht |
|-----------|------------|
| **Allgemeinwissen** | Das kann das LLM schon |
| **Wenige Dokumente (< 50 Seiten)** | Passen direkt ins Context Window |
| **Einmal-Aufgaben** | Copy-Paste ins Chat-Fenster reicht |
| **Dokumenten-Analyse** | Datei hochladen in ChatGPT/Claude reicht |

---

## Die Gretchenfrage: Welcher Ansatz?

### Stufe 1: Context Window nutzen (kein RAG nötig)

**Was:** Dokumente direkt in den Chat hochladen oder als Context in ein Projekt einbinden.

| Tool | Wie | Limit |
|------|-----|-------|
| Claude Projects | Dokumente als Projekt-Wissen hochladen | ~200K Tokens |
| ChatGPT | Dateien im Chat hochladen | ~128K Tokens |
| Google NotebookLM | Quellen laden, Fragen stellen | Mehrere Dokumente |

**Für wen:** Die meisten Nutzer. Kein Setup nötig, sofort nutzbar.

**Wann genug:** Wenn die Dokumente ins Context Window passen und sich nicht ständig ändern.

### Stufe 2: No-Code RAG

**Was:** Fertige Tools, die RAG ohne Programmierung ermöglichen.

| Tool | Was es tut | Für wen |
|------|-----------|---------|
| Custom GPTs | ChatGPT mit eigenen Dokumenten + Instruktionen | Power User, Teams |
| Dify | Open-Source RAG-Plattform mit UI | Technik-affine Teams |
| Flowise | No-Code LangChain-Builder | Builder ohne Code-Hintergrund |

**Für wen:** Power User, kleine Teams, die mehr Kontrolle wollen als "Datei hochladen".

### Stufe 3: Custom Development

**Was:** Eigene RAG-Pipeline mit voller Kontrolle über Chunking, Embedding, Retrieval und LLM.

| Framework | Stärke |
|-----------|--------|
| LangChain | Größtes Ökosystem, viele Integrationen |
| LlamaIndex | Spezialisiert auf Daten-Anbindung und RAG |
| Eigene Pipeline | Volle Kontrolle, kein Framework-Lock-in |

**Für wen:** Entwicklerteams mit spezifischen Anforderungen. Enterprise-Anwendungen.

### Entscheidungshilfe

```
Habe ich weniger als 50 Seiten?
├── Ja → Stufe 1: Context Window (Claude Projects, ChatGPT)
└── Nein
    ├── Brauche ich programmatischen Zugang?
    │   ├── Nein → Stufe 2: No-Code RAG (Custom GPTs, Dify)
    │   └── Ja → Stufe 3: Custom Development
    └── Müssen Daten intern bleiben?
        ├── Nein → Cloud-Lösungen (alle Stufen)
        └── Ja → Self-Hosted (Stufe 2-3 mit Open Source)
```

→ Für 80% der Anwendungsfälle reicht Stufe 1 oder 2.

---

## Prompting vs. RAG vs. Fine-Tuning

Drei Wege, KI-Output zu verbessern. Unterschiedliche Hebel.

| Ansatz | Was es tut | Analogie | Wann nutzen |
|--------|-----------|----------|-------------|
| **Prompting** | Bessere Anweisungen geben | Dem Mitarbeiter einen klareren Auftrag geben | Immer. Erster Schritt. |
| **RAG** | Eigene Daten bereitstellen | Dem Mitarbeiter Zugang zum Firmen-Wiki geben | Wenn eigenes Wissen nötig ist |
| **Fine-Tuning** | Das Modell selbst verändern | Den Mitarbeiter umschulen | Wenn Verhalten dauerhaft geändert werden soll |

### Warum RAG fast immer vor Fine-Tuning kommt

| | RAG | Fine-Tuning |
|---|---|---|
| **Aufwand** | Gering bis mittel | Hoch (Daten, Training, Evaluation) |
| **Aktualisierung** | Dokumente austauschen | Modell neu trainieren |
| **Kosten** | Vector DB + API-Kosten | Trainingskosten + Hosting |
| **Nachvollziehbarkeit** | Quellen sichtbar | Blackbox |
| **Risiko** | Gering | Modell kann schlechter werden |

**Faustregel:** RAG für Wissen. Fine-Tuning für Verhalten. Die meisten Unternehmen brauchen RAG, nicht Fine-Tuning.

---

## Häufige Missverständnisse

| Missverständnis | Realität |
|-----------------|---------|
| "RAG versteht meine Dokumente" | RAG **sucht** in ihnen. Verstehen tut das LLM. |
| "Einmal einrichten, läuft" | Qualität hängt stark von Datenaufbereitung ab. Schlechte Chunks = schlechte Antworten. |
| "RAG löst Halluzinationen" | Reduziert sie, eliminiert sie nicht. Das LLM kann immer noch Informationen falsch interpretieren. |
| "Ich brauche einen Vector Store" | Für < 50 Seiten reicht das Context Window. |
| "RAG ersetzt Fine-Tuning" | Anderer Zweck. RAG = Wissen bereitstellen. Fine-Tuning = Verhalten ändern. |

---

## Qualitätsfaktoren

Die häufigste Enttäuschung bei RAG: "Die Antworten sind nicht gut genug." Fast immer liegt es an der Datenaufbereitung, nicht an der Technologie.

| Faktor | Auswirkung | Stellschraube |
|--------|-----------|---------------|
| **Chunk-Größe** | Zu klein: Kontext fehlt. Zu groß: Irrelevantes dabei. | 200-500 Tokens pro Chunk als Startpunkt |
| **Chunk-Überlappung** | Ohne Overlap gehen Zusammenhänge an Chunk-Grenzen verloren | 10-20% Overlap |
| **Datenqualität** | Schlecht formatierte PDFs, gescannte Dokumente, inkonsistente Struktur | Daten vor dem Indexieren aufbereiten |
| **Retrieval-Anzahl** | Zu wenige: Info fehlt. Zu viele: Rauschen. | 3-5 relevanteste Chunks |
| **Embedding-Modell** | Bestimmt, wie gut "Bedeutung" erfasst wird | Aktuelles Modell nutzen, testen |

---

## Verknüpfungen

- [[Wie-LLMs-funktionieren]] – Warum LLMs externes Wissen brauchen
- [[Context-Engineering-Grundlagen]] – RAG als technische Umsetzung von Context Engineering (Ebene 3-4)
- [[Kosten-und-Preismodelle]] – Was RAG-Systeme kosten
- [[GenAI-Stack-Erklaermodell]] – Ebene 3 (Erweiterungen): RAG als Superkraft
- [[KI-Agents-Grundlagen]] – Agents + RAG = informierte Agents

---

*Von Grundverständnis bis Implementierungsentscheidung – Referenz für alle Zielgruppen*

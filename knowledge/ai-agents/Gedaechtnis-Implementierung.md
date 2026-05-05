---
title: Gedächtnis — Technische Implementierung
type: guide
status: living
created: '2026-03-09'
updated: '2026-03-09'
tags:
  - ai-agents
sources:
  - 'self-authored:loschke:enterprise-ai-agents'
area: ai-agents
audience:
  - entwickler
  - konzepter
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
# Gedaechtnis — Technische Implementierung

> Wie Context Engineering konkret funktioniert: Die Pipeline von Roh-Content zu nutzbarem Context, die Retrieval-Architektur, und die Orchestrierung zur Laufzeit.

---

## Kernaussage

Das [[Gedaechtnis-Context-Engineering]] beschreibt das Was: Build vs. Runtime Context, vier Kontextquellen, zwei Aufbereitungsansaetze. Die Vertiefungs-Notes [[Content-ist-nicht-Context]], [[Cluster-vs-Bausteine]] und [[Kontextdimensionen]] decken die Aufbereitung ab. Aber es fehlt das Wie der Orchestrierung: Wie wird zur Laufzeit der richtige Context aus verschiedenen Quellen zusammengestellt?

Die zentrale Erkenntnis: **Das Gedaechtnis ist kein statischer Speicher. Es ist eine Orchestrierungs-Schicht, die zur Laufzeit aus mehreren Quellen den richtigen Context zusammenstellt — gesteuert vom Sensor-Signal.**

---

## Drei technische Schichten

### Schicht 1: Die Content-to-Context-Pipeline (Aufbereitung)

Verwandelt Roh-Content (Webseiten, PDFs, Fach-Dokumente) in LLM-tauglichen Context. Laeuft NICHT zur Laufzeit, sondern als redaktioneller Prozess.

**Cluster-Pipeline (4 Schritte):**
1. Extraktion — Roh-Content aus allen Quellseiten eines Themas sammeln
2. Analyse — Duplikate, Luecken, Widersprueche identifizieren
3. Synthese — Ein strukturiertes Markdown-Dokument pro Thema erstellen
4. Pruefung — Fachredaktion validiert, korrigiert, gibt frei

**Baustein-Pipeline (8 Schritte):**
1. Extraktion — Roh-Content sammeln
2. Analyse — Themen-Taxonomie erstellen
3. Atomarisierung — In eigenstaendige Wissenseinheiten zerlegen
4. Anreicherung — 5 Kontextdimensionen (D1-D5) pro Baustein befuellen
5. Verlinkung — Relationen zwischen Bausteinen definieren (voraussetzung, kombinierbar_mit, etc.)
6. Validierung — Fachredaktion prueft Inhalt und Metadaten
7. Indexierung — Bausteine fuer Retrieval aufbereiten (Embeddings, Tags)
8. Monitoring — Volatilitaets-basiertes Flagging fuer Updates

**Wer macht das?** Nicht die Entwicklung. Die Fachredaktion — unterstuetzt durch LLM-Tools fuer Extraktion und Synthese, aber mit menschlicher Pruefung und Freigabe.

### Schicht 2: Die Retrieval-Architektur (Finden)

Findet zur Laufzeit die richtigen Wissensbausteine fuer eine konkrete Anfrage. Wird vom Sensor-Signal gesteuert (siehe [[Sensor-Implementierung]]).

**Bei Cluster-Ansatz:**
Kein Retrieval im klassischen Sinn. Das gesamte Cluster-Dokument wird ins Context Window geladen. Der Sensor bestimmt nur WELCHES Cluster (ueber Intention-zu-Cluster-Mapping).

**Bei Baustein-Ansatz:**
Mehrstufiges Retrieval:

1. **Vorfilter (deterministisch):** Sensor-Signal liefert Intention und topic_hints. Daraus wird ein Metadaten-Filter: Cluster = "pflege", Zielgruppe = "angehoerige". Reduziert den Suchraum auf relevante Bausteine.

2. **Semantische Suche:** Die Nutzer-Anfrage (oder die topic_hints) wird als Query gegen die Embedding-Datenbank gefahren. Findet die inhaltlich passendsten Bausteine innerhalb des vorgefilterten Bereichs.

3. **Re-Ranking (optional):** Ein kleines Modell bewertet die Top-Ergebnisse nach Relevanz fuer die konkrete Anfrage. Sortiert um, filtert Rauschen.

4. **Relations-Anreicherung:** Fuer die gefundenen Bausteine werden verknuepfte Bausteine nachgeladen (D2: Struktur-Dimension). Wenn "Pflegesachleistung" gefunden wird, kommt "Kombinationsleistung" automatisch mit.

**Latenz-Budget:**
- Vorfilter: ~10ms (Datenbank-Query)
- Semantische Suche: ~50-100ms (Embedding-Lookup)
- Re-Ranking: ~100-200ms (optional, kleines Modell)
- Relations: ~10ms (Datenbank-Joins)
- Gesamt: ~100-300ms — weit unter der Latenz des Haupt-LLM-Calls

### Schicht 3: Die Context-Assemblierung (Zusammensetzen)

Setzt den finalen Context zusammen, der ins LLM geht. Kombiniert mehrere Quellen zu einem kohaerenten Input.

**Quellen, die zur Laufzeit zusammengefuehrt werden:**

| Quelle | Herkunft | Beispiel |
|---|---|---|
| Wissensbausteine | Schicht 2 (Retrieval) | Pflegesachleistung-Baustein mit Betraegen |
| Kompass-Regeln | Metadaten auf Bausteinen (D4) | Haftungshinweis erforderlich |
| Tool-Beschreibungen | Statisch konfiguriert | "Beratungsstellen-Suche: Nimmt PLZ, gibt Beratungsstellen zurueck" |
| Nutzerprofil | Runtime (wenn authentifiziert) | Pflegegrad 2, PLZ 39104 |
| Gespraechsverlauf | Runtime (Session) | Vorherige Fragen und Antworten |
| Sensor-Signal | Vorgelagerter Sensor-Call | Intention, Emotion, Kapazitaet |

**Context-Budget-Management:**
Jede Quelle braucht Tokens. Das Context Window ist begrenzt. Die Assemblierung muss priorisieren:

| Prioritaet | Quelle | Begruendung |
|---|---|---|
| 1 (immer) | Sensor-Signal | Steuert alles andere |
| 2 (immer) | System Prompt + Kompass | Werte und Constraints |
| 3 (immer) | Relevante Wissensbausteine | Die Fakten |
| 4 (wenn verfuegbar) | Tool-Beschreibungen | Nur relevante Tools |
| 5 (wenn verfuegbar) | Nutzerprofil | Personalisierung |
| 6 (wenn Platz) | Gespraechsverlauf | Nur letzte N Turns |
| 7 (wenn Platz) | Relations-Bausteine | Proaktive Ergaenzungen |

Bei grossen Modellen (200k+ Context) ist das Budget selten ein Problem. Bei kleineren Modellen oder Baustein-Ansatz wird die Priorisierung kritisch.

---

## Die Orchestrierung: Wer steuert was?

Die zentrale Frage: Wer entscheidet zur Laufzeit, welche Quellen angefragt werden?

**Antwort: Der Sensor steuert, die Orchestrierung fuehrt aus.**

```
Sensor-Signal (Intention, topic_hints, tool_hints)
     |
     v
[Orchestrator] entscheidet:
  - Welche Cluster / Bausteine laden? → topic_hints + Intention-Mapping
  - Welche Tools verfuegbar machen? → tool_hints
  - Nutzerprofil laden? → Nur wenn authentifiziert UND Feature es braucht
  - Wie viel Gespraechsverlauf? → Je nach Multi-Turn-Stufe
     |
     v
[Context-Assembler] baut den finalen Prompt:
  System Prompt + Kompass + Sensor-Signal + Wissensbausteine + Tools + Profil
     |
     v
[LLM-Call]
```

Der Orchestrator ist kein LLM. Er ist deterministische Logik: If-Then-Regeln basierend auf dem Sensor-Signal. Das macht ihn vorhersagbar und testbar.

---

## Build-Zeit vs. Laufzeit: Wer kontrolliert was?

| Aspekt | Build-Zeit (Redaktion) | Laufzeit (System) |
|---|---|---|
| Was das System weiss | Bausteine erstellen, pruefen, freigeben | Relevante Bausteine finden und laden |
| Wie aktuell es ist | Volatilitaets-Monitoring, Update-Zyklen | — |
| Welche Tools es hat | Tool-Beschreibungen konfigurieren | Tool basierend auf Sensor-Signal anbieten |
| Was die Regeln sind | D4-Felder (Kompass) pro Baustein pflegen | Regeln mit dem Baustein laden |
| Wie es verknuepft | D2-Relationen zwischen Bausteinen definieren | Relations-Bausteine nachladen |

Entscheidend: Die Redaktion kontrolliert den Build Context. Das System kontrolliert nur die Auswahl und Zusammenstellung zur Laufzeit.

---

## Konsequenzen fuer die Teamarbeit

| Rolle | Schicht | Aufgabe |
|---|---|---|
| Fachredaktion | Schicht 1 | Content-to-Context-Pipeline betreiben. Bausteine erstellen, pruefen, pflegen. |
| Content-Strategie | Schicht 1 | Taxonomie definieren. Entscheiden: Cluster oder Bausteine? Priorisierung der Themen. |
| Backend-Entwicklung | Schicht 2 | Retrieval-Pipeline bauen (Embedding, Vorfilter, Re-Ranking). |
| Backend-Entwicklung | Schicht 3 | Context-Assembler implementieren. Token-Budget-Management. |
| DevOps | Schicht 2 | Embedding-Datenbank betreiben. Indexierung automatisieren. |
| QA | Schicht 2 + 3 | Retrieval-Qualitaet testen: Findet das System die richtigen Bausteine? |

---

## Verknuepfungen

- [[Gedaechtnis-Context-Engineering]] — Das Was: Context-Typen und Quellen
- [[Content-ist-nicht-Context]] — Warum Aufbereitung noetig ist
- [[Cluster-vs-Bausteine]] — Zwei Ansaetze der Aufbereitung
- [[Kontextdimensionen]] — Die 5 Dimensionen pro Baustein
- [[Sensor-Implementierung]] — Der Sensor steuert die Retrieval-Orchestrierung
- [[Assistenz-Architektur]] — Das Gesamtframework

---

*Quelle: Eigene Beratungspraxis und Architektur-Arbeit, entwickelt 2025/2026*

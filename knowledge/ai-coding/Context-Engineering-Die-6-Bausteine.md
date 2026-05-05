---
title: Context Engineering Die 6 Bausteine
type: framework
status: stable
created: '2025-01-15'
updated: '2025-01-15'
tags:
  - ai-coding
  - context-engineering
  - architecture
  - llm
sources:
  - 'self-authored:loschke:ai-coding-experience'
area: ai-coding
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Context Engineering – Die 6 Bausteine

## Warum das wichtig ist

Die meisten fokussieren sich auf das falsche:

| Faktor | Einfluss auf Output-Qualität |
|--------|------------------------------|
| Modellwahl (GPT-4, Claude, etc.) | ~15% |
| Prompt-Formulierung | ~10% |
| **Alles andere** | **~75%** |

"Alles andere" = Context Engineering. Die Kunst, dem Modell die **richtige Information zur richtigen Zeit im richtigen Format** zu geben.

---

## Die 6 Komponenten

### 1. Prompting Techniques

Das Offensichtliche – aber tiefer als die meisten denken:

- **Few-Shot**: Beispiele zeigen, damit das Modell das Muster erkennt
- **Chain-of-Thought**: "Denke Schritt für Schritt" – gibt dem Modell Raum zum Reasoning

### 2. Query Augmentation

User sind faul. "Warum geht mein API-Call nicht?" ist nutzlos für ein Retrieval-System.

Techniken zur Verbesserung:
- **Query Rewriting**: Vage Frage → präzise Frage umformulieren
- **Query Expansion**: Synonyme und verwandte Begriffe ergänzen
- **Query Decomposition**: Komplexe Frage in Teilfragen zerlegen

### 3. Long-Term Memory

Was passiert, wenn die Session endet? Alles weg – es sei denn, du speicherst extern.

Speicherarten:
- **Episodic Memory**: Konkrete vergangene Ereignisse ("Letztes Mal wolltest du...")
- **Semantic Memory**: Allgemeine Fakten über den User ("Du bevorzugst TypeScript")
- **Procedural Memory**: Wie der User Dinge erledigt haben will

Technisch umgesetzt über Vector- oder Graph-Datenbanken.

### 4. Short-Term Memory

= Die aktuelle Konversation. Klingt trivial, wird oft vermasselt:

- ❌ Zu viel Context → Signal ertrinkt im Rauschen
- ❌ Zu wenig Context → Modell fehlen kritische Infos
- ❌ Falsche Reihenfolge → Wichtiges am Ende wird übersehen
- ✅ Zusammenfassungen bei langen Gesprächen

### 5. Knowledge Base Retrieval (RAG)

Wie verbindest du die AI mit deinen Daten? Docs, Wikis, Notion, Google Drive, Code...

Drei Schichten:
1. **Pre-Retrieval**: Wie chunkst du Dokumente? Welche Metadaten behältst du?
2. **Retrieval**: Welches Embedding-Modell? Vector Search oder Hybrid?
3. **Augmentation**: Wie formatierst du den gefundenen Context? Zitate? Widersprüche?

> 10x Verbesserung ist möglich ohne Modellwechsel – nur durch bessere Chunking-Strategie.

### 6. Tools und Agents

- **Tool**: Erweitert, was das Modell kann (Web-Suche, Code ausführen, APIs aufrufen)
- **Agent**: Entscheidet, wann und wie Tools eingesetzt werden

Der Agent-Loop: Query → Denken → Aktion → Beobachten → (Wiederholen) → Antwort

**Single-Agent**: Ein Agent macht alles (typischer Chatbot)
**Multi-Agent**: Spezialisierte Agents arbeiten zusammen (einer recherchiert, einer schreibt, einer prüft)

**MCP (Model Context Protocol)**: Standardisiert Tool-Anbindung. Statt N×M Verbindungen nur noch N+M.

---

## Der Shift

| Früher | Heute |
|--------|-------|
| "Prompt Engineering" | "Context Engineering" |
| Fokus auf perfekte Formulierung | Fokus auf die gesamte Info-Pipeline |

Die Fragen, die zählen:
- Welchen Context lieferst du?
- Woher kommt dieser Context?
- Wie wird er gefiltert, formatiert, abgerufen?
- Was kann das Modell mit Tools tun?
- Was merkt es sich über Sessions hinweg?

---

## Quelle

- [6 Components of Context Engineering](https://blog.dailydoseofds.com/p/6-components-of-context-engineering) – Avi Chawla, Daily Dose of Data Science (Januar 2025)

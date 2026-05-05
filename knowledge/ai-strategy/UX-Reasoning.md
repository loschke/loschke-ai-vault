---
title: UX Reasoning
type: concept
status: stable
created: '2026-02-12'
updated: '2026-02-12'
tags:
  - concept
  - agent-ux
  - ux-reasoning
  - framework
sources:
  - 'self-authored:loschke:strategy-consulting'
area: ai-strategy
audience:
  - fuehrungskraft
  - praktiker
  - entscheider
level: advanced
intent:
  - verstehen
  - ueberzeugen
contains:
  - framework
  - principle
  - contrast
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# UX Reasoning

> Die Fähigkeit eines AI-Agents, in Echtzeit die angemessene Interaktionsmodalität zu wählen.

## Worum geht's?

UX Reasoning ist die Fähigkeit eines AI-Agents, in Echtzeit die angemessene Interaktionsmodalität für den aktuellen Kontext zu wählen. Statt immer mit Text zu antworten, entscheidet der Agent bewusst zwischen verschiedenen Modalitäten — von Fließtext über Widgets bis hin zu eingebetteten Apps.

**Kernfrage:** Nicht "was sage ich?" sondern "wie sage ich es am besten?"

## Die 6 Modalitäten der Agent UX

| # | Modalität | Wann | Beispiel |
|---|---|---|---|
| 1 | **Conversational Text** | Erklärungen, Nuancen, Exploration | Klassischer Chat |
| 2 | **Structured Output** | Vergleiche, Daten, Hierarchien | Tabellen, Code-Blöcke, Mermaid |
| 3 | **Input Widgets** | Diskrete Optionen, Rankings | Claude `ask_user_input`, Auswahl-Buttons |
| 4 | **Artifacts & Canvas** | Persistente Dokumente, iterative Arbeit | Claude Artifacts, ChatGPT Canvas |
| 5 | **Generative UI** | Kontextabhängige Formulare, dynamische Interfaces | A2UI, Vercel AI SDK RSC |
| 6 | **Embedded Apps** | Dashboards, Datenexploration, externe Tools | MCP Apps, OpenAI Apps SDK |

## UX Reasoning entsteht auf 3 Ebenen

- **Modell:** Erkennt, wann Text nicht reicht (implizites Reasoning)
- **Plattform:** Stellt Modalitäten bereit und kommuniziert Capabilities
- **Design:** Definiert Regeln, wann welche Modalität greift

## 7 Prinzipien

1. **Modalität folgt Intention, nicht Fähigkeit** — Nicht alles zeigen was geht, sondern was hilft
2. **Progressive Eskalation** — Mit einfachster Modalität starten, bei Bedarf steigern
3. **Sanfte Übergänge** — Modalitätswechsel erklären und einleiten
4. **Bidirektionale Durchlässigkeit** — Interaktionen in höheren Modalitäten fließen in den Chat zurück
5. **Graceful Degradation** — Alles muss auch als Text funktionieren
6. **Kognitiver Respekt** — Jeder Wechsel kostet mentale Energie
7. **Transparenz der Entscheidung** — Nutzer versteht, warum die Form sich ändert

## Protokoll-Stack

```
Modalitäten 1-6          ← Was der Nutzer sieht
├─ A2UI (Deklarative UI) ← WAS angezeigt wird (Widgets, Formulare)
├─ MCP Apps (Web-Apps)   ← WAS angezeigt wird (eingebettete Apps)
└─ AG-UI (Event-Stream)  ← WIE kommuniziert wird (Transport)
```

| Protokoll | Launch | Fokus |
|---|---|---|
| **AG-UI** (CopilotKit) | Mai 2025 | Transport-Protokoll, Event-Streaming |
| **A2UI** (Google) | Dez 2025 | Deklaratives UI-Format, plattformübergreifend |
| **MCP Apps** (Anthropic/OpenAI) | Nov 2025 | Eingebettete Web-Apps via MCP |

## Entscheidungslogik

- **Nutzer braucht Information?** → Text (1) oder Structured Output (2) oder Artifact (4)
- **Nutzer muss Eingabe machen?**
  - Wenige klare Optionen → Widget (3)
  - Komplexe, kontextabhängige Eingabe → Generative UI (5)
  - Exploration/Interaktion nötig → Embedded App (6)

## Implikationen

- **Agent-Entwickler:** UX Reasoning im System Prompt verankern, verfügbare Modalitäten definieren
- **Plattform-Anbieter:** Capability Negotiation zwischen Agent und Client (ungelöstes Problem)
- **UX-Designer:** Neues Berufsfeld an der Schnittstelle von Conversational Design und Interface Design
- **Unternehmen:** Nicht "bauen wir einen Chatbot?" sondern "welche Modalitäten braucht unser Agent?"

## Verwandte Konzepte

- [[Context Engineering]] — UX Reasoning ist die Interface-Seite von Context Engineering
- [[AG-UI Protocol]]
- [[A2UI Protocol]]
- [[MCP Apps]]

## Status & Herkunft

Eigenes Framework, entwickelt Februar 2026. Der Begriff "UX Reasoning" ist (Stand Feb 2026) nicht etabliert — das ist eine Positionierung von loschke.ai.

Vollständiges Framework-Dokument: siehe Output `ux-reasoning-framework.md`

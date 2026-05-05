---
title: Kompetenz Shifts/KI Skills Map
type: reference
status: living
created: '2026-02-03'
updated: '2026-02-03'
tags:
  - ai-shifts
  - skills
  - ki-skills
  - lernpfad
sources:
  - 'self-authored:loschke:trend-research'
area: ai-shifts
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# KI-Skills-Map

## TL;DR

Taxonomie konkreter KI-Skills, strukturiert nach Abstraktionsebene (Lernpfad) und Rollen. Zeigt, welche technischen Fähigkeiten man für die Arbeit mit KI braucht – von den Grundlagen bis zur Orchestrierung komplexer Systeme.

## Kontext

**Wofür relevant?**
Orientierung für Lernpfade, Skill-Assessments, Curriculum-Entwicklung. Ergänzt die [[Skills-Eigenschaften-KI-Zeitalter]] (Meta-Skills) um konkrete technische Fähigkeiten.

**Wo verwende ich das?**
- Seminare und Trainings (Was lernen wir in welcher Reihenfolge?)
- Beratung (Welche Skills braucht das Team?)
- Content (LinkedIn, Workshops)
- lernen.diy Curriculum-Planung

---

## Struktur-Logik

**Vertikale Achse: Abstraktionsebenen**

| Ebene | Bedeutung |
|-------|-----------|
| Fundament | Skills, die auf allen anderen Ebenen gebraucht werden |
| Anwendung | Einzelne KI-Tools produktiv nutzen |
| Integration | Tools und Systeme verbinden |
| Orchestrierung | Komplexe, autonome Systeme bauen und steuern |

**Horizontale Dimension: Rollen**

| Rolle | Fokus |
|-------|-------|
| Creator | Content erstellen (Text, Bild, Video, Audio) |
| Builder | Systeme bauen, automatisieren, entwickeln |
| Analyst | Daten verstehen, Erkenntnisse gewinnen |
| Strategist | Architektur, Entscheidungen, Gesamtbild |

---

## Die Skills nach Ebenen

### Fundament

*Skills, die du auf allen anderen Ebenen brauchst und anwendest.*

| Skill | Beschreibung | Rollen |
|-------|--------------|--------|
| **KI-Grundverständnis** | Wie LLMs funktionieren, Grenzen & Möglichkeiten, was KI kann und was nicht | Alle |
| **Prompt Engineering** | Effektive Kommunikation mit KI-Modellen, klare Instruktionen formulieren | Alle |
| **Context Engineering** | Was braucht das Modell? Daten, Struktur, Wissen bereitstellen. Inkl. Datenaufbereitung | Alle, bes. Builder, Strategist |
| **Kritisches Prüfen** | Output bewerten, Halluzinationen erkennen, Quellen hinterfragen | Alle |

---

### Anwendung

*Einzelne KI-Tools produktiv für konkrete Aufgaben nutzen.*

| Skill | Beschreibung | Rollen |
|-------|--------------|--------|
| **Text-Generierung** | Schreiben, Zusammenfassen, Übersetzen, Redigieren | Creator, Analyst |
| **Bild-Generierung** | Visuals erstellen mit Midjourney, Flux, NanoBanana | Creator |
| **Video-Generierung** | Clips, Erklärvideos, Animationen erstellen | Creator |
| **Audio/Voice** | Stimmen generieren, Musik, Podcasts produzieren | Creator |
| **Code-Generierung** | Programmieren mit KI-Unterstützung (Copilot, Claude, Cursor) | Builder |
| **Datenanalyse mit KI** | Erkenntnisse aus Daten gewinnen, Muster erkennen | Analyst |

---

### Integration

*Tools und Systeme verbinden, um komplexere Ergebnisse zu erzielen.*

| Skill | Beschreibung | Rollen |
|-------|--------------|--------|
| **Tool Stacking** | KI-Tools bewusst kombinieren für komplexe Ergebnisse (z.B. ChatGPT → Runway → ElevenLabs) | Creator, Builder |
| **Workflow Automation** | Automatisierte Abläufe bauen mit Make, Zapier, n8n | Builder |
| **Custom Assistenten** | GPTs, Claude Projects, spezialisierte Bots für wiederkehrende Aufgaben | Builder, Creator |
| **RAG-Implementierung** | Eigene Daten als Kontext einbinden (technische Umsetzung von Context Engineering) | Builder, Analyst |

---

### Orchestrierung

*Komplexe, autonome Systeme designen, bauen und steuern.*

| Skill | Beschreibung | Rollen |
|-------|--------------|--------|
| **Agent-Systeme** | Autonome, mehrstufige KI-Workflows bauen (LangGraph, CrewAI, AutoGen) | Builder |
| **LLM Evaluation** | Output-Qualität systematisch messen, Halluzinationsraten, Kosten-Nutzen | Builder, Analyst |
| **KI-Architektur** | Systeme designen, Tech-Entscheidungen treffen, Build vs. Buy | Strategist, Builder |

---

## Rollen-Profile

### Creator
Fokus auf Content-Erstellung. Braucht vor allem Fundament + Anwendung (Text, Bild, Video, Audio) + Tool Stacking.

**Typischer Lernpfad:** KI-Grundverständnis → Prompt Engineering → Text-Generierung → Bild/Video → Tool Stacking

### Builder
Fokus auf Systeme und Automation. Braucht alle Ebenen, Schwerpunkt Integration und Orchestrierung.

**Typischer Lernpfad:** Fundament komplett → Code-Generierung → Workflow Automation → RAG → Agents

### Analyst
Fokus auf Erkenntnisse aus Daten. Braucht Fundament + Datenanalyse + RAG + Evaluation.

**Typischer Lernpfad:** Fundament komplett → Datenanalyse → RAG → LLM Evaluation

### Strategist
Fokus auf Architektur und Entscheidungen. Braucht breites Verständnis aller Ebenen, tiefe Expertise in Context Engineering und Architektur.

**Typischer Lernpfad:** Fundament komplett → Überblick Anwendung/Integration → KI-Architektur

---

## Abgrenzung

**Was diese Map NICHT ist:**
- Keine Tool-Liste (Tools ändern sich, Skills bleiben)
- Keine Reihenfolge innerhalb einer Ebene (horizontal ist kein Ranking)
- Kein vollständiges Curriculum (nur Struktur, nicht Inhalte)

**Beziehung zu anderen Frameworks:**
- [[Skills-Eigenschaften-KI-Zeitalter]] = Meta-Skills und Eigenschaften (das "Wer")
- **Diese Map** = Konkrete KI-Skills (das "Was")
- [[4-Powers]] = Team-Fähigkeiten (das "Wozu")

---

## Verknüpfungen

- [[Skills-Eigenschaften-KI-Zeitalter]] – Meta-Skills und Eigenschaften
- [[4-Powers]] – Framework für Team-Fähigkeiten
- [[Context-Engineering]] – Vertiefung Fundament-Skill
- [[RAG]] – Vertiefung Integrations-Skill

---

*Taxonomie für konkrete KI-Skills, strukturiert nach Lernpfad und Rollen*

---
title: AI Coding Workflow Best Practices
type: method
status: stable
created: 2025-01-04T00:00:00.000Z
updated: 2025-01-04T00:00:00.000Z
tags:
  - ai-coding
  - best-practice
  - workflow
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

# AI-Coding Workflow Best Practices

## Kernprinzip

AI-Coding ist kein "Knopfdruck-Magie" – es ist Pair Programming mit einem übermotivierten, aber unkritischen Junior Developer. Der Mensch bleibt verantwortlich für Architektur, Qualität und das finale Produkt.

---

## Die Praktiken

### 1. Specs vor Code

Nicht mit vagen Prompts starten. Erst mit dem LLM die Anforderungen durchsprechen, Fragen stellen lassen, Edge Cases identifizieren. Das Ergebnis: ein **spec.md** mit Requirements, Architektur, Datenmodellen, Teststrategie.

Dann erst: Projektplan generieren lassen – Implementation in logische Schritte zerlegen.

> "Waterfall in 15 Minuten" – strukturierte Planungsphase, die das Coding danach massiv beschleunigt.

#### Was gehört in eine gute Spec?

Sechs Bereiche decken das Wesentliche ab:

1. **Commands** – Welche Befehle braucht die AI? Nicht "teste das", sondern `npm test` oder `python -m pytest`
2. **Testing** – Wo liegen Tests? Welches Framework? Was muss bestanden werden?
3. **Projektstruktur** – Wo liegt was? `src/` für Code, `tests/` für Tests, etc.
4. **Code Style** – Ein Beispiel sagt mehr als drei Absätze Regeln
5. **Git Workflow** – Branch-Namen, Commit-Format, wann committen?
6. **Grenzen** – Was darf die AI auf keinen Fall anfassen?

#### Das 3-Stufen-Grenzmodell

Statt einer langen Verbotsliste – drei klare Kategorien:

| Stufe | Bedeutung | Beispiel |
|-------|-----------|----------|
| ✅ **Immer** | Mach das ohne zu fragen | "Immer Tests laufen lassen vor Commit" |
| ⚠️ **Erst fragen** | Stopp und hol dir OK | "Neue Dependencies nur nach Rücksprache" |
| 🚫 **Niemals** | Harte Grenze | "Niemals API-Keys oder Passwörter committen" |

#### Beispiel einer Minimal-Spec

```
# Projekt: Aufgaben-App

## Ziel
Simple To-Do App mit React, lokaler Speicherung im Browser.

## Commands
- Start: `npm run dev`
- Test: `npm test`

## Struktur
- `src/components/` – React-Komponenten
- `src/hooks/` – Custom Hooks
- `tests/` – Testdateien

## Grenzen
✅ Immer: Komponenten als Functions, nicht Classes
⚠️ Erst fragen: Neue npm-Pakete installieren
🚫 Niemals: package-lock.json manuell editieren
```

#### Spec-Hierarchie für größere Projekte

Bei Features, die sich über mehrere Sessions ziehen, reicht eine einzelne Spec nicht. Das Problem: AI verliert zwischen Sessions den Context und "vergisst", was das Produkt eigentlich können soll.

Die Lösung – eine dreistufige Hierarchie:

```
FEATURE/
  FEATURE_SPEC.md          # Produkt-Level: Was tut das Feature heute?

AGENTS/
  changes/
    IDENTIFIER_NAME/       # z.B. "2024-01_auth-refactor"
      SPEC.md              # Change-Level: Was soll am Ende rauskommen?
      PLAN.md              # Implementation + Fortschritts-Tracking
```

**Produkt-Spec** (langlebig): Beschreibt den aktuellen Zustand des Features. Wird aktualisiert, wenn Changes shipped werden. Jede AI-Session startet mit dem Lesen dieser Spec, damit sie weiß, was sie nicht kaputt machen darf.

**Change-Spec** (pro Change): Beschreibt das gewünschte Ergebnis – *was* passieren soll, nicht *wie*. Zwingt dich, Erfolg zu definieren, bevor Code geschrieben wird.

**Change-Plan** (pro Change): Der konkrete Implementierungsplan mit:
- Phasen, die jeweils einen logischen, commitbaren Zustand hinterlassen
- Checklisten für Tasks und Fortschritts-Tracking
- Verifikationsschritte pro Phase

Der Workflow:
1. Change-Spec schreiben (Outcome beschreiben)
2. AI erstellt Plan basierend auf Produkt-Spec + Change-Spec
3. Plan in diskrete Phasen/Tasks zerlegen
4. Pro Task: implementieren → reviewen → verifizieren → committen
5. Nach Abschluss: Produkt-Spec aktualisieren
6. Nächster Change

Das verhindert den klassischen Fehler: AI "hilft" und ändert etwas, das ein bestehendes Feature zerstört, weil sie nicht wusste, dass es existiert.

### 2. Kleine, iterative Chunks

Niemals große monolithische Outputs anfragen. Ein Task = ein Prompt. Eine Funktion, ein Bug, ein Feature.

Warum: LLMs verlieren bei zu viel Scope den Faden. Das Ergebnis bei zu großen Anfragen: inkonsistenter Code, "als hätten 10 Devs ohne Absprache dran gearbeitet".

Passt perfekt zu TDD: Chunk implementieren → testen → nächster Chunk.

#### Session-Management

Bei komplexeren Tasks: **Neue Session pro logischem Task starten.** 

Der Grund: Context-Pollution. Je länger eine Session läuft, desto mehr irrelevante Information sammelt sich an – Debugging-Versuche, verworfene Ansätze, Zwischenstände. Das Modell verliert den Fokus.

Praktisch:
- Eine Session für Spec-Erstellung
- Neue Session für Phase 1 der Implementation (mit frisch geladener Spec)
- Neue Session für Phase 2 (wieder mit Spec, plus Ergebnis von Phase 1)
- etc.

Jede Session startet mit dem gleichen Kontext: Produkt-Spec + Change-Spec + relevanter Code. Aber ohne den Ballast der vorherigen Versuche.

### 3. Context ist alles

LLMs sind nur so gut wie der Context, den du ihnen gibst. Das heißt:
- Relevanten Code mitgeben (nicht nur das File, auch abhängige Module)
- Technische Constraints explizit machen
- Bekannte Pitfalls und No-Gos benennen
- Bei Nischen-Libraries: Docs oder README mitpasten

Tools wie **gitingest** oder **repo2txt** können helfen, Codebases für LLMs aufzubereiten.

Explizite Guidance im Prompt: "Hier ist die aktuelle Implementierung von X. Erweitere sie für Y, aber brich nicht Z."

### 4. Das richtige Modell wählen

Jedes Modell hat seine Persönlichkeit. Wenn eines hängt oder mittelmäßige Outputs liefert: **wechseln**. Denselben Prompt in einem anderen Modell versuchen.

"Model Musical Chairs" – bei Blind Spots einfach zur Konkurrenz gehen.

### 5. Human in the Loop – immer

**Niemals blind vertrauen.** LLMs schreiben Code mit absoluter Überzeugung – inklusive Bugs und Unsinn.

Jedes AI-generierte Snippet behandeln wie Code von einem Junior:
- Durchlesen
- Verstehen
- Testen
- Erst dann committen

Zweite Meinung: Ein anderes Modell den Code reviewen lassen. Claude schreibt, Gemini reviewed – oder umgekehrt.

### 6. Commit früh und oft

Commits sind Savegames. Nach jedem erfolgreichen Task: committen. Wenn die AI in die falsche Richtung läuft: `git reset` zum letzten stabilen Punkt.

Git-History wird zum Log, das du der AI (oder dir selbst) zeigen kannst.

Bei Experimenten: Branches oder Worktrees nutzen, um AI-Sessions zu isolieren.

### 7. Regeln und Beispiele vorgeben

Die AI ist kein Black Box – du kannst sie tunen:
- **CLAUDE.md** oder **GEMINI.md** mit Projekt-Regeln und Style-Präferenzen
- Custom Instructions in Copilot/Cursor für globale Verhaltenssteuerung
- Inline-Beispiele: "Hier ist wie wir X implementiert haben, mach Y ähnlich"

Explizite Anweisungen: "Wenn du unsicher bist, frag nach statt zu erfinden."

### 8. Automation als Qualitäts-Gate

CI/CD, Linter, Type-Checker – alle werden zu Feedback-Loops für die AI:
- Tests laufen lassen
- Fehler zurück in den Chat pasten
- AI fixt
- Repeat

Ohne Tests kann die AI "alles super!" behaupten, während der Code kaputt ist.

#### Types als First-Class Citizen

Types verdienen besondere Erwähnung, weil sie bei AI-generiertem Code doppelt wertvoll sind:

1. **Compile-Time Feedback**: AI verwendet manchmal den falschen Typ oder missversteht ein Interface. Der Type-Checker fängt das ab, *bevor* der Code läuft – die AI kann self-correcten und erreicht mehr One-Shots.

2. **Type-First Development**: Bei großen Systemen, die nicht in den Context passen: Erst die Types/Interfaces definieren, dann Features einzeln innerhalb dieser Grenzen implementieren. Die Types werden zum Vertrag, der Konsistenz erzwingt.

3. **Dokumentation für die AI**: Types sind maschinenlesbare Spezifikationen. Sie sagen der AI präziser als Prosa, was erwartet wird.

In der Priorität: **Types > Linter > Tests > CI/CD** – je früher im Feedback-Loop, desto wertvoller.

### 9. AI verstärkt deine Skills

AI ersetzt nicht Wissen – sie verstärkt es. Wer solide Fundamentals hat, wird multipliziert. Wer sie nicht hat, bekommt "Dunning-Kruger auf Steroiden".

Die AI zwingt dich zu besserer Engineering-Praxis: klarere Specs, bessere Architektur, mehr Tests.

---

## Merkspruch

> "AI coding assistants are incredible force multipliers, but the human engineer remains the director of the show."

---

## Quellen

Dieser Leitfaden basiert auf meinen praktischen Erfahrungen, die sich stark mit folgenden Artikeln decken:

**Addy Osmani** (Director, Google Gemini Team):
- [My LLM coding workflow going into 2026](https://addyosmani.com/blog/ai-coding-workflow/) (Januar 2026)
- [How to write a good spec for AI agents](https://addyosmani.com/blog/good-spec/) (Januar 2026) – Deep Dive zu Spec-Struktur und Boundaries

**Hamilton Greene** (HAMY LABS):
- [5 AI Coding Best Practices from a Google AI Director](https://hamy.xyz/blog/2026-01_ai-engineering-best-practices) (Januar 2026) – Destillation und praktische Erweiterung von Osmanis Prinzipien, insbesondere zur Spec-Hierarchie und Session-Management

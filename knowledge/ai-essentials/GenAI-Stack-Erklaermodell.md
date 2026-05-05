---
title: 'GenAI-Stack: Vom Modell zum Workflow'
type: framework
status: stable
created: '2025-02-02'
updated: '2025-02-02'
tags:
  - ki-grundlagen
  - stack
  - tools
  - agents
  - workflows
  - zielgruppen-varianten
sources:
  - 'self-authored:loschke:workshop-experience'
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
  - framework
  - vocabulary
  - decision-aid
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-04'
---
# GenAI-Stack: Vom Modell zum Workflow

> Erklärmodell für Einsteiger: Warum ChatGPT nicht "die KI" ist und was Agents wirklich bedeuten.

---

## Das Problem

Zwei hartnäckige Missverständnisse prägen die öffentliche Wahrnehmung von generativer KI:

1. **"ChatGPT ist die KI"** – Menschen setzen ein Tool mit der Technologie gleich. Als würde man sagen: "Word ist der Computer."

2. **"Agents machen alles alleine"** – Der Begriff suggeriert vollständige Autonomie. In Wahrheit brauchen die meisten Agents noch erhebliche menschliche Steuerung.

Dieses Erklärmodell schafft Orientierung durch vier aufeinander aufbauende Ebenen.

---

## Die vier Ebenen

### Ebene 1: Das Gehirn (Modell)

<!-- type: concept, level: fundamental -->

**Was ist das?**
Das Sprachmodell – die eigentliche "Intelligenz". GPT-4, Claude, Gemini, Llama, Mistral. Ein Modell kann denken, verstehen, formulieren – aber von sich aus nichts tun. Es hat keine Benutzeroberfläche, keine Dateien, keinen Internetzugang.

**Kernbotschaft:**
"Das Modell ist wie ein Gehirn im Tank. Brilliant, aber ohne Arme und Beine."

**Typische Modelle:**
| Anbieter | Modelle | Besonderheit |
|----------|---------|--------------|
| OpenAI | GPT-4o, GPT-4.5, o1, o3 | Marktführer, multimodal |
| Anthropic | Claude Opus, Sonnet, Haiku | Längerer Kontext, Coding |
| Google | Gemini Pro, Ultra, Flash | Google-Integration |
| Meta | Llama 3, 4 | Open Source |
| Mistral | Mistral Large, Small | Europäisch, Open Source |

**Wichtig zu verstehen:**
- Modelle werden ständig verbessert (Versionen, Updates)
- Verschiedene Modelle haben verschiedene Stärken
- Das "beste" Modell hängt vom Einsatzzweck ab
- Modelle allein sind für Endnutzer nicht zugänglich

---

### Ebene 2: Das Werkzeug (Tool)

<!-- type: concept, level: practical -->

**Was ist das?**
Die Benutzeroberfläche, die ein Modell nutzbar macht. ChatGPT, Claude.ai, Gemini App, Perplexity. Das Tool gibt dem Gehirn Hände: Datei-Upload, Websuche, Bildgenerierung, Sprachein-/ausgabe.

**Kernbotschaft:**
"Das Tool ist die Verpackung. Gleiches Gehirn, unterschiedliche Fähigkeiten."

**Beispiel-Vergleich:**

| Tool | Modell dahinter | Websuche | Dateien | Bilder | Code ausführen |
|------|-----------------|----------|---------|--------|----------------|
| ChatGPT Free | GPT-4o mini | ✓ | ✗ | ✗ | ✗ |
| ChatGPT Plus | GPT-4o, o1 | ✓ | ✓ | ✓ | ✓ |
| Claude.ai Free | Sonnet | ✓ | begrenzt | ✗ | ✗ |
| Claude.ai Pro | Opus, Sonnet | ✓ | ✓ | ✗ | ✓ |
| Perplexity | Verschiedene | ✓✓ | ✓ | ✗ | ✗ |

**Wichtig zu verstehen:**
- Dasselbe Modell kann in verschiedenen Tools unterschiedlich "gut" sein
- Die Tool-Features bestimmen, was praktisch möglich ist
- Free vs. Paid macht oft einen enormen Unterschied
- Spezialisierte Tools (Perplexity für Recherche) schlagen Generalisten für ihren Zweck

---

### Ebene 3: Die Superkräfte (Erweiterungen)

<!-- type: concept, level: advanced -->

**Was ist das?**
Zusätzliche Fähigkeiten, die ein Tool erweitern. Plugins, MCP-Server, Skills, Custom GPTs, API-Anbindungen. Sie verbinden das Tool mit externen Systemen oder geben ihm spezialisierte Verhaltensweisen.

**Kernbotschaft:**
"Superkräfte machen aus einem guten Helfer deinen persönlichen Helfer."

**Arten von Erweiterungen:**

| Typ | Beispiel | Was es tut |
|-----|----------|------------|
| **Daten-Anbindung** | MCP für Obsidian, Notion, Google Drive | Tool kann auf deine Daten zugreifen |
| **System-Anbindung** | MCP für Slack, Calendar, E-Mail | Tool kann mit deinen Apps interagieren |
| **Verhaltens-Vorlagen** | Skills, Custom Instructions | Tool arbeitet immer in deinem Stil |
| **Spezialisierung** | Custom GPTs, Claude Projects | Tool kennt deinen Kontext dauerhaft |
| **Externe Dienste** | Plugins für Reisebuchung, Rechnung etc. | Tool kann Aktionen in Drittsystemen auslösen |

**Konkretes Beispiel: Claude Desktop mit MCP**
- Basis: Claude Sonnet (Modell) in Claude Desktop (Tool)
- MCP Obsidian: Claude kann meine Notizen lesen und schreiben
- MCP Google Calendar: Claude kann Termine prüfen und anlegen
- Skill "Carousel-Factory": Claude erstellt LinkedIn-Carousels immer in meinem Brand-Design

**Wichtig zu verstehen:**
- Erweiterungen sind der Unterschied zwischen "nettes Spielzeug" und "echtes Arbeitswerkzeug"
- Die meisten Nutzer kennen diese Ebene nicht
- Hier entsteht der echte Produktivitätssprung
- Erfordert einmalige Einrichtung, spart dann dauerhaft Zeit

---

### Ebene 4: Die Arbeitsweise (Chat, Agent, Automatisierung)

<!-- type: concept, level: strategic -->

**Was ist das?**
Nicht was das Tool kann, sondern wie es arbeitet. Drei fundamental unterschiedliche Modi, wie KI Aufgaben erledigt.

**Kernbotschaft:**
"Die Frage ist nicht nur welches Tool, sondern wie du es einsetzt."

#### Modus A: Chat (Frage-Antwort)

**Ablauf:** Ich frage → KI antwortet → Ich frage wieder
**Kontrolle:** Ich steuere jeden Schritt
**Beispiel:** "Fasse dieses Dokument zusammen" / "Schreib mir eine E-Mail"

**Wann sinnvoll:**
- Einmalige Aufgaben
- Ich will das Ergebnis direkt prüfen
- Kreative Zusammenarbeit, Brainstorming
- Komplexe Aufgaben, bei denen ich die Richtung lenken will

#### Modus B: Agent (Autonome Aufgabenkette)

**Ablauf:** Ich gebe Ziel → KI plant Schritte → KI führt aus → KI fragt ggf. nach → Ich prüfe Ergebnis
**Kontrolle:** Ich setze das Ziel, KI wählt den Weg
**Beispiel:** "Recherchiere die Top 5 Wettbewerber und erstelle eine Vergleichstabelle"

**Wann sinnvoll:**
- Mehrstufige Aufgaben mit klarem Ziel
- Recherche-intensive Arbeit
- Ich kann das Ergebnis am Ende validieren
- Die Teilschritte sind nicht kritisch

**Wichtige Einschränkung:**
Agents sind nicht "KI die alles alleine macht". Sie sind eher wie ein Junior-Mitarbeiter: Sie arbeiten selbstständig, brauchen aber klare Aufträge und Ergebnisprüfung.

#### Modus C: Automatisierung (Workflow-Integration)

**Ablauf:** Trigger löst aus → Workflow läuft → KI verarbeitet → Ergebnis wird weitergeleitet
**Kontrolle:** Ich baue einmal, dann läuft es ohne mich
**Beispiel:** "Wenn eine E-Mail mit 'Anfrage' im Betreff kommt, extrahiere die Kerninformationen und lege einen Eintrag in meinem CRM an"

**Tools dafür:**
| Tool | Stärke | KI-Integration |
|------|--------|----------------|
| Make | Visuell, flexibel | OpenAI, Anthropic, eigene Modelle |
| Zapier | Einfach, viele Apps | OpenAI, AI-Actions |
| n8n | Self-hosted, kostenlos | Alle APIs |
| Power Automate | Microsoft-Ökosystem | Azure OpenAI, Copilot |

**Wann sinnvoll:**
- Wiederkehrende Aufgaben mit klarem Muster
- Hohe Volumina (viele E-Mails, Formulare, Anfragen)
- Ich muss nicht jedes Ergebnis einzeln prüfen
- Integration in bestehende Systeme nötig

**Wichtig zu verstehen:**
- Automatisierung gab es vor KI schon (Zapier, Make existieren seit Jahren)
- KI macht Automatisierung mächtiger: Vorher nur "wenn X, dann Y", jetzt auch "verstehe X, entscheide Y"
- Automatisierung ≠ Agent: Automatisierung ist regelbasiert + KI, Agent ist zielbasiert + KI

---

## Die Missverständnisse aufgelöst

### "ChatGPT ist die KI"

**Realität:**
ChatGPT ist ein Tool (Ebene 2), das verschiedene GPT-Modelle (Ebene 1) nutzt. Es ist eine von vielen Möglichkeiten, generative KI zu nutzen – nicht die einzige und nicht für jeden Zweck die beste.

**Analogie:**
"Google Chrome ist das Internet" – genauso falsch. Chrome ist ein Browser, der das Internet zugänglich macht. ChatGPT ist ein Tool, das Sprachmodelle zugänglich macht.

### "Agents machen alles alleine"

**Realität:**
Agents (Ebene 4, Modus B) sind autonomer als Chat, aber nicht autonom. Sie brauchen:
- Klare Zieldefinition vom Menschen
- Zugang zu den richtigen Tools/Daten
- Ergebnisprüfung am Ende
- Oft: Rückfragen zwischendurch

**Analogie:**
Ein Agent ist wie ein motivierter Praktikant: Er kann selbstständig recherchieren und einen Entwurf erstellen, aber du würdest den Entwurf prüfen, bevor er rausgeht.

### "Mehr Features = besser"

**Realität:**
Das richtige Tool für den Zweck schlägt das Tool mit den meisten Features. Perplexity für Recherche, Claude für lange Dokumente, ChatGPT für schnelle Alltagsaufgaben.

---

## Entscheidungshilfe: Was brauche ich?

### Für Einsteiger (erste Schritte)
- **Start:** Ein gutes Tool mit Basis-Features (ChatGPT Plus oder Claude Pro)
- **Fokus:** Ebene 2 verstehen, verschiedene Anwendungsfälle ausprobieren
- **Arbeitsweise:** Chat (Modus A)

### Für Fortgeschrittene (tägliche Nutzung)
- **Ausbau:** Spezialisierte Tools für häufige Aufgaben (Perplexity für Recherche, etc.)
- **Fokus:** Ebene 3 erkunden – Custom Instructions, erste Erweiterungen
- **Arbeitsweise:** Chat + erste Agent-Nutzung

### Für Power-User (Produktivitätshebel)
- **Setup:** Tool mit MCP/Skills für persönlichen Workflow
- **Fokus:** Ebene 3 voll ausnutzen – eigene Systeme anbinden
- **Arbeitsweise:** Alle drei Modi je nach Aufgabe

### Für Teams/Unternehmen (Skalierung)
- **Architektur:** Automatisierungen für wiederkehrende Prozesse
- **Fokus:** Ebene 4 (Modus C) – Workflows designen
- **Arbeitsweise:** Automatisierung für Volumen, Agents für Komplexes, Chat für Individuelles

---

---

# Zielgruppen-Varianten

> Die folgenden Sections enthalten zielgruppenspezifische Erklärungen derselben Konzepte.

---

## Variante: Allgemein (Breites Publikum)

<!-- audience: allgemein, einsteiger -->

### Die Auto-Analogie

Stell dir vor, KI wäre wie Autofahren:

- **Das Modell** ist der Motor. Ein BMW und ein VW haben unterschiedliche Motoren – manche stärker, manche sparsamer. Aber den Motor allein kannst du nicht fahren.

- **Das Tool** ist das komplette Auto. Lenkrad, Sitze, Navigation – alles, was du brauchst, um loszufahren. ChatGPT ist wie ein VW Golf: Zuverlässig, weit verbreitet, reicht für die meisten. Claude Pro ist vielleicht eher ein Audi: Etwas mehr Komfort, besser auf langen Strecken.

- **Die Superkräfte** sind Sonderausstattung. Einparkhilfe, Spurhalteassistent, Navigation mit Echtzeit-Verkehr. Macht das Auto nicht schneller, aber für dich persönlich nützlicher.

- **Die Arbeitsweise** ist, wie du fährst. Selbst fahren (Chat), Spurhalteassistent aktivieren (Agent), oder das Auto fährt komplett allein auf einer festgelegten Route (Automatisierung).

### Was bedeutet das für mich?

**Wenn du gerade anfängst:** Hol dir ein gutes "Auto" (ChatGPT Plus oder Claude Pro) und lerne es kennen. Du brauchst nicht sofort alle Extras.

**Wenn du täglich KI nutzt:** Schau dir an, welche "Sonderausstattung" dir wirklich hilft. Vielleicht eine Verbindung zu deinem Kalender oder deinen Notizen.

**Wenn du Zeit sparen willst:** Überlege, welche Aufgaben immer gleich ablaufen. Die kannst du automatisieren lassen.

---

## Variante: Führungskräfte (Management, Entscheider)

<!-- audience: fuehrungskraft, entscheider, management -->

### Strategische Einordnung

Als Führungskraft müssen Sie nicht jedes Tool kennen, aber Sie sollten die Architektur verstehen:

**Ebene 1 (Modell):** Hier investieren OpenAI, Google, Anthropic Milliarden. Die Modelle werden besser, schneller, günstiger. Ihre Strategie sollte nicht von einem Anbieter abhängen.

**Ebene 2 (Tool):** Hier entscheidet sich, was Ihre Mitarbeiter täglich nutzen. Die Wahl des Tools beeinflusst Produktivität direkt. Investition in Pro-Lizenzen amortisiert sich oft in Tagen.

**Ebene 3 (Erweiterungen):** Hier liegt der Wettbewerbsvorteil. Wer KI an interne Systeme anbindet (CRM, Wissensmanagement, Prozesse), hebt sich ab. Das erfordert einmaligen Aufwand, zahlt sich aber dauerhaft aus.

**Ebene 4 (Arbeitsweise):** Hier liegt die Organisationsreife. Einsteiger-Teams chatten. Fortgeschrittene nutzen Agents für Recherche und Entwürfe. Reife Organisationen automatisieren Routineprozesse.

### Entscheidungsmatrix

| Investition | Aufwand | Payoff | Priorität |
|-------------|---------|--------|-----------|
| Pro-Lizenzen (Ebene 2) | Niedrig | Schnell | Sofort |
| Schulung Prompting | Mittel | Schnell | Sofort |
| Erweiterungen einrichten (Ebene 3) | Mittel | Mittel | Q1 |
| Automatisierungen (Ebene 4) | Hoch | Hoch, aber verzögert | Q2+ |

### Das Agent-Missverständnis managen

Wenn Ihr Team von "Agents" spricht, fragen Sie: "Wie viel Kontrolle behalten wir?" Ein Agent, der selbstständig Kunden-E-Mails beantwortet, ist ein Risiko. Ein Agent, der Entwürfe vorbereitet, die ein Mensch freigibt, ist ein Hebel.

---

## Variante: Technik-Affine (IT, Entwickler-nahe Rollen)

<!-- audience: technisch, it-naehe, entwickler -->

### Architektur-Sicht

**Modell-Layer:** LLMs als APIs (OpenAI, Anthropic, Azure OpenAI, selbst gehostete Open-Source). Relevant: Token-Limits, Kosten pro Call, Latenz, Datenschutz.

**Tool-Layer:** Consumer-Apps sind Wrapper um die APIs mit UX, Auth, Rate Limiting, Feature-Gating. Enterprise-Relevanz: SSO, Audit Logs, Data Residency.

**Extension-Layer:** 
- MCP (Model Context Protocol): Standardisiertes Protokoll für Tool-Use. Claude Desktop, Cursor, etc. unterstützen es.
- Function Calling: OpenAI/Anthropic-natives Feature für strukturierte Tool-Aufrufe.
- RAG-Pipelines: Eigene Daten in den Kontext bringen.

**Orchestration-Layer:**
- Chat: Stateless API-Calls mit History im Client.
- Agents: Frameworks wie LangChain, CrewAI, AutoGen. Loop aus Planen → Ausführen → Beobachten → Anpassen.
- Automation: Workflow-Engines (n8n, Make) mit LLM-Nodes. Event-driven, nicht conversational.

### Build vs. Buy Entscheidung

| Anforderung | Buy (SaaS-Tool) | Build (Custom) |
|-------------|-----------------|----------------|
| Standard-Workflows | ✓ | Overkill |
| Unternehmens-spezifische Daten | Mit Vorsicht | ✓ |
| Compliance-kritisch | Prüfen | ✓ |
| Schneller Proof of Concept | ✓ | Zu langsam |
| Langfristige Differenzierung | ✗ | ✓ |

### Agent-Frameworks einordnen

"Agent" im Marketing ≠ "Agent" in der Technik. 

Marketing: "KI die selbstständig arbeitet"
Technik: ReAct-Pattern, Tool-Use-Loop, Planning-Module

Realistische Erwartung: Agents funktionieren gut für klar definierte, wiederholbare Aufgaben mit guter Tool-Abstützung. Sie scheitern bei vagen Zielen, fehlendem Kontext, oder wenn Fehler in Teilschritten sich aufschaukeln.

---

## Variante: Kreative (Designer, Content Creator)

<!-- audience: kreative, designer, content-creator -->

### Deine KI-Werkstatt

**Das Modell** ist wie dein Kreativ-Hirn auf Abruf. Es kennt jeden Stil, jede Epoche, jede Technik – hat aber keine eigene Meinung und keine Hände.

**Das Tool** gibt dem Hirn Hände. Aber jedes Tool andere:
- ChatGPT mit DALL-E: Brainstorming + Bilder generieren
- Midjourney: Visuelle Qualität, aber nur Bilder
- Claude: Lange Texte, Konzepte, kein Bild
- Runway, Pika: Video aus Text

**Die Superkräfte** machen es zu deinem Tool:
- Brand Guidelines eingespeist: KI arbeitet on-brand
- Styleguide als Kontext: Konsistenter Ton in allen Texten
- Referenzbilder verknüpft: "Mehr in diese Richtung"

**Die Arbeitsweise** bestimmt deinen Workflow:
- **Chat:** Ideen pingpongen, Entwürfe entwickeln, Feedback-Schleifen
- **Agent:** "Recherchiere Visual Trends 2025 und erstelle ein Moodboard"
- **Automatisierung:** "Wenn neuer Blogpost online geht, generiere automatisch Social-Media-Varianten"

### Praktische Kombination

Ein typischer Content-Workflow könnte so aussehen:

1. **Ideation (Chat):** Mit Claude Themen brainstormen
2. **Research (Agent):** Perplexity recherchiert Quellen und Daten
3. **Outline (Chat):** Struktur gemeinsam mit KI entwickeln
4. **Draft (Chat/Agent):** Ersten Entwurf generieren lassen
5. **Visuals (Tool-Wechsel):** Midjourney für Hero-Image
6. **Distribution (Automatisierung):** Make verteilt auf alle Kanäle

Du wechselst zwischen Modi und Tools je nach Teilaufgabe – nicht "eine KI für alles".

---

## Verwendungshinweise

Bei der Aufbereitung für Workshops oder Präsentationen:

1. **Einstieg immer über das Missverständnis:** "Die meisten denken, ChatGPT ist die KI..."
2. **Ebenen schrittweise aufbauen:** Nicht alle vier auf einmal
3. **Ebene 3 optional:** Für Einsteiger-Workshops weglassen oder nur andeuten
4. **Ebene 4 differenziert:** Chat erklären alle, Agent nur bei Bedarf, Automatisierung nur für fortgeschrittene Gruppen
5. **Immer mit konkreten Beispielen:** Abstrakte Ebenen werden erst durch Anwendung greifbar

**Workshop-Formate:**

| Zielgruppe | Fokus | Dauer |
|------------|-------|-------|
| Einsteiger | Ebene 1+2, Chat | 60-90 min |
| Fortgeschritten | Alle Ebenen, Chat+Agent | 3-4 Std |
| Power-User | Ebene 3+4, Automatisierung | Halbtag |
| Führungskräfte | Strategische Einordnung | 90 min |

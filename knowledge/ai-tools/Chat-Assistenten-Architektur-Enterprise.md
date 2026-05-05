---
title: Chat Assistenten Architektur Enterprise
type: framework
status: stable
created: '2026-03-15'
updated: '2026-03-15'
tags:
  - ai-tools
  - architektur
  - enterprise
  - chat-plattform
sources:
  - 'self-authored:loschke:pre-migration'
area: ai-tools
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---

# Chat-Assistenten-Architektur für Unternehmen

> Context-Dokument: Die sechs Bausteine einer unternehmenstauglichen KI-Chat-Plattform.
> Nutzbar als Grundlage für Blog-Artikel, Präsentationen und Produktkommunikation.

---

## Das Grundproblem

Die meisten KI-Chat-Tools sind für Einzelpersonen gebaut. Man tippt eine Frage, bekommt eine Antwort, nächster Chat — alles vergessen. Für Unternehmen reicht das nicht. Dort braucht es Fachwissen aus Abteilungen, Kontext aus laufenden Projekten, Zugriff auf interne Systeme und Konsistenz über viele Gespräche hinweg.

Die Frage ist nicht "Wie bekomme ich einen Chatbot?", sondern "Wie wird KI zu einem echten Werkzeug im Arbeitsalltag meines Teams?"

---

## Sechs Bausteine, ein System

Eine unternehmenstaugliche Chat-Plattform besteht aus sechs orthogonalen Bausteinen. Jeder löst ein eigenständiges Problem. Keiner ist mit einem anderen austauschbar.

### 1. User-Präferenzen — Wie die KI mit mir redet

**Problem:** Jeder Mensch arbeitet anders. Der eine will kurze Stichpunkte, die andere ausführliche Erklärungen. Einer will kritisch hinterfragt werden, die nächste will Bestätigung und Ermutigung.

**Lösung:** Ein persönliches Einstellungsfeld, in dem der User definiert, wie die KI mit ihm interagieren soll. Tonalität, Detailtiefe, Sprache, Anrede — alles konfigurierbar.

**Beispiele:**
- "Antworte mir immer kurz und bündig, maximal 3 Sätze"
- "Sei kritisch wenn ich etwas sage, hinterfrage meine Annahmen"
- "Rede mich mit Rico an, Du-Form"

**Scope:** User-global. Gilt für alle Chats, alle Experten, alle Projekte.

**Warum eigenständig:** Kein anderer Baustein steuert die persönliche Interaktionsebene. Ein Expert definiert, *was* die KI weiß — Präferenzen definieren, *wie* sie es kommuniziert.

---

### 2. Experten — Wie die KI denkt und arbeitet

**Problem:** Ein generischer Chatbot kann alles ein bisschen, aber nichts richtig gut. Im Unternehmen braucht man Fachkompetenz: Der SEO-Berater denkt in Rankings und Crawlability, der Daten-Analyst in Metriken und Visualisierungen, der Content Writer in Hooks und Zielgruppen.

**Lösung:** Konfigurierbare Fachrollen mit eigenem Wissen, eigener Methodik und eigenen Tools. Jeder Expert hat einen System-Prompt, der definiert, wie die KI sich verhält — Persona, Prinzipien, Kommunikationsstil, Ausgabeformate.

**Was ein Expert steuert:**
- Persona und Tonalität (formell vs. locker, direkt vs. diplomatisch)
- Fachliche Methodik (welche Frameworks, welche Analyseschritte)
- Tool-Zugriff (welche Werkzeuge der Expert nutzen darf)
- Modell-Präferenz (schnelles Modell für einfache Aufgaben, starkes für komplexe)

**Der Unternehmens-Use-Case:** Fachabteilungen bekommen ihren eigenen KI-Kollegen. Aber — und das ist entscheidend — auch andere Abteilungen können auf diesen Kollegen zugreifen. Das Marketing-Team kann den SEO-Berater fragen, ohne SEO-Expertise mitbringen zu müssen.

**Warum eigenständig:** Kein anderer Baustein steuert das Verhalten und die Denkweise der KI. Skills liefern Wissen, Experten bestimmen, wie dieses Wissen angewendet wird.

---

### 3. Skills — Was die KI bei bestimmten Aufgaben tut

**Problem:** Manche Aufgaben müssen immer gleich erledigt werden. Ein SEO-Audit folgt immer denselben Schritten. Ein LinkedIn-Post braucht immer einen Hook, einen Mittelteil und einen CTA. Wenn die KI das jedes Mal neu improvisiert, schwankt die Qualität.

**Lösung:** Dokumentierte Workflows in Markdown-Dateien, die die KI bei Bedarf nachladen kann. Ein Skill beschreibt nicht, was die KI wissen soll, sondern wie sie eine bestimmte Aufgabe Schritt für Schritt erledigt.

**Zwei Arten von Skills:**
- **Capability Skills:** Helfen der KI bei Dingen, die sie allein nicht konsistent kann. Diese werden mit der Zeit überflüssig, weil Modelle besser werden.
- **Preference Skills:** Dokumentieren unternehmensspezifische Workflows und Konventionen. Diese sind langlebig, weil sie nicht vom Modell-Fortschritt abhängen, sondern von den Prozessen des Unternehmens.

**Wichtig:** Skills sind nicht automatisch aktiv. Die KI sieht eine Übersicht aller verfügbaren Skills und entscheidet selbst, welchen sie für eine Aufgabe lädt. Das hält den Kontext schlank.

**Sonderform — Quicktasks:** Für wiederkehrende Aufgaben mit vorhersehbarer Struktur gibt es Quicktasks. Der User füllt ein kurzes Formular aus (Thema, Zielgruppe, Format), die Werte werden in ein Template eingesetzt, und die KI generiert einen qualitätsgesicherten ersten Entwurf. Ab dem zweiten Turn wird der Chat normal — der User kann iterieren.

**Warum eigenständig:** Experten definieren Verhalten, Skills definieren Arbeitsabläufe. Ein Expert ohne Skills improvisiert. Ein Skill ohne Expert hat keine Stimme.

---

### 4. Projekte — Was die KI über diesen Arbeitskontext weiß

**Problem:** Im Unternehmen arbeitet man in Projekten. Jedes Projekt hat seinen Kontext — Briefings, Strategiedokumente, Datenanalysen, Entscheidungshistorie. Wenn die KI diesen Kontext nicht kennt, muss man ihn in jedem Chat neu erklären.

**Lösung:** Projekte als organisatorische Einheit für Chats. Jedes Projekt kann Knowledge Files enthalten — Dokumente, die der KI als permanenter Kontext zur Verfügung stehen. Jeder Chat in einem Projekt hat automatisch Zugriff auf dieses Wissen.

**Was ein Projekt bietet:**
- Knowledge Files als permanenter Kontext (Briefings, Daten, Dokumente)
- Team-weit geteilte Projektbasis (alle im Projekt sehen denselben Kontext)
- Default-Expert pro Projekt (der SEO-Berater ist automatisch aktiv im SEO-Projekt)
- Eigene Project Instructions (spezifische Regeln für diesen Arbeitskontext)

**Beispiel:** Projekt "Website Relaunch Q2" enthält das Briefing, die SEO-Audit-Ergebnisse und die Design-Specs. Jeder Chat in diesem Projekt — egal ob mit dem SEO-Berater oder dem Content Writer — hat diesen Kontext automatisch.

**Warum eigenständig:** Memory speichert, was die KI über den User gelernt hat. Projekte speichern, was die KI über den Arbeitskontext wissen muss. Verschiedene Scopes, verschiedene Lebensdauern.

---

### 5. Integrationen (MCP) — Woher die KI ihre Daten bekommt

**Problem:** Die KI kennt nur ihr Trainingswissen und den Chat-Kontext. Die wirklich wertvollen Daten eines Unternehmens liegen aber in CRM-Systemen, Datenbanken, Projektmanagement-Tools, Wikis und Fileshares.

**Lösung:** Standardisierte Schnittstellen (Model Context Protocol / MCP), über die die KI auf externe Systeme zugreifen kann. Nicht als einmalige Integration, sondern als offene Architektur, an die beliebige Systeme angebunden werden können.

**Was Integrationen ermöglichen:**
- Zugriff auf CRM-Daten (Kundenhistorie, Deals, Kontakte)
- Lesen und Schreiben in Projektmanagement-Tools (Tickets, Aufgaben, Boards)
- Durchsuchen interner Wikis und Dokumentationen
- Abfragen aus Datenbanken und Analyse-Tools

**Der Unterschied zu Projekten:** Projekte enthalten statische Dokumente, die manuell hochgeladen werden. Integrationen liefern dynamische Daten aus lebenden Systemen.

**Warum eigenständig:** Kein anderer Baustein schafft die Brücke zu externen Systemen. Projekte sind statisch, Integrationen sind live.

---

### 6. Memory — Was die KI über mich gelernt hat

**Problem:** Jeder Chat ist ein Neustart. Die KI hat keine Ahnung, dass man letzte Woche über SEO-Probleme gesprochen hat, dass man im Marketing arbeitet oder dass man kurze Antworten bevorzugt (letzteres decken Präferenzen ab, aber inhaltlicher Kontext geht verloren).

**Lösung:** Ein automatischer Gedächtnis-Layer, der relevante Informationen aus Konversationen extrahiert und in zukünftigen Sessions zur Verfügung stellt. Kein manuelles Taggen, kein explizites Speichern — die KI merkt sich, was wichtig ist.

**Wie Memory funktioniert:**
- Nach jeder Konversation werden relevante Fakten automatisch extrahiert
- Bei einer neuen Session werden passende Erinnerungen per semantischer Suche abgerufen
- Die Erinnerungen werden dem Kontext hinzugefügt, bevor die KI antwortet

**Das Besondere: Memories fließen zwischen Experten.** Was der User beim Lernbegleiter lernt, kann der Content Writer für einen authentischen LinkedIn-Post nutzen. Was der SEO-Berater über die Website herausfindet, steht dem Analyst für seine Auswertung zur Verfügung. Das erzeugt eine vernetzte Intelligenz, keinen isolierten Silo.

**User-Kontrolle:** Der User hat volle Transparenz — er kann jederzeit einsehen, was gespeichert ist, einzelne Memories löschen oder Memory komplett deaktivieren. Pro Chat gibt es einen Inkognito-Modus, der weder liest noch schreibt.

**Warum eigenständig:** Präferenzen steuern den Stil, Projekte den Arbeitskontext. Memory steuert das Beziehungswissen — was die KI über den Menschen hinter dem Chat gelernt hat. Das ist der Baustein, der aus einem Tool einen Buddy macht.

---

## Das Zusammenspiel

Keiner der sechs Bausteine funktioniert isoliert so gut wie im Zusammenspiel:

```
User-Präferenzen     →  "Kurze Antworten, Du-Form, kritisch"
  + Expert           →  "Ich bin dein SEO-Berater"
    + Skills         →  "Ich mache das Audit immer in diesen 5 Schritten"
      + Projekt      →  "Ich kenne euer Relaunch-Briefing"
        + MCP        →  "Ich sehe eure aktuellen Analytics-Daten"
          + Memory   →  "Ich weiß, dass wir letztes Mal bei Core Web Vitals steckengeblieben sind"
```

Das Ergebnis ist eine KI, die sich nicht anfühlt wie ein Tool, sondern wie ein Teammitglied, das den Kontext kennt, die Fachsprache spricht und sich an die Zusammenarbeit erinnert.

---

## Abgrenzung zu bestehenden Lösungen

| Merkmal | Standard-Chatbot | Chat-Plattform mit Architektur |
|---------|-----------------|-------------------------------|
| Fachwissen | Generisches Modellwissen | Konfigurierte Fachrollen mit domänenspezifischer Methodik |
| Kontext | Nur innerhalb eines Chats | Über Sessions, Projekte und Experten hinweg |
| Unternehmsdaten | Nicht verfügbar | Via MCP-Integrationen angebunden |
| Konsistenz | Variiert von Chat zu Chat | Skills garantieren gleichbleibende Qualität |
| Personalisierung | Keine | Präferenzen + Memory |
| Teamfähigkeit | Einzelplatz | Geteilte Projekte, Experten und Skills |

---

## Offene Richtungen

- **Generative UI:** Statt nur Text und Markdown-Artifacts könnte die KI interaktive UI-Elemente generieren — Quizzes, Formulare, Dashboards, direkt im Chat.
- **Tool-Erweiterungen:** Spezialisierte Tools wie `create_quiz` (interaktive Wissensabfragen mit Feedback-Loop) oder `generate_exercise` (offene Übungsaufgaben mit Modell-Bewertung) erweitern die Interaktionsmöglichkeiten über reinen Text hinaus.
- **On-Prem Memory:** Für Unternehmen mit strengen Datenschutzanforderungen kann der Memory-Layer (z.B. Mem0, Apache 2.0) selbst gehostet werden, statt in der Cloud zu laufen.

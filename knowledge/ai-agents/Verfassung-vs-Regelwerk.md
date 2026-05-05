---
title: Verfassung statt Regelwerk
type: concept
status: stable
created: '2026-03-09'
updated: '2026-03-09'
tags:
  - ai-agents
sources:
  - 'self-authored:loschke:enterprise-ai-agents'
area: ai-agents
audience:
  - fuehrungskraft
  - compliance
  - konzepter
level: beginner
intent:
  - verstehen
  - ueberzeugen
contains:
  - concept
  - argument
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Verfassung statt Regelwerk

> Warum Werte besser skalieren als Regeln — und wie man beides kombiniert.

---

## Kernaussage

Regeln funktionieren in klaren Situationen. Aber ein KI-System, das mit Menschen interagiert, trifft staendig auf Grenzfaelle, die kein Regelwerk vorhersehen kann. Ein Regelwerk waechst mit jedem neuen Thema, jedem neuen Feature, jedem neuen Grenzfall — bis es sich selbst widerspricht oder unverwaltbar wird.

Deshalb: Kombination aus harten Constraints (nicht verhandelbar) und einem Wertesystem (fuer alles dazwischen). Wie eine Verfassung, nicht wie ein Gesetzestext.

---

## Das Problem mit Regeln

### 1. Regeln sind endlich, Situationen nicht

Jede neue Frage, die ein Nutzer stellt, kann eine Situation erzeugen, fuer die keine Regel existiert. Die Reaktion: Neue Regel. Das Ergebnis: Hunderte Regeln, die niemand mehr ueberblickt.

### 2. Regeln widersprechen sich

"Sei hilfreich" und "Mach keine individuellen Zusagen" kollidieren bei jeder Leistungsfrage. "Sei empathisch" und "Bleib sachlich" kollidieren bei jeder emotionalen Anfrage. Regeln allein koennen solche Spannungen nicht aufloesen — Werte schon, weil sie Priorisierung ermoeglichen.

### 3. Regeln skalieren nicht ueber Domaenen

Ein Pflegeberater braucht andere Regeln als ein Kursberater. Wenn jede KI-Insel ihr eigenes Regelwerk braucht, explodiert der Wartungsaufwand. Werte hingegen gelten ueberall: "Fachliche Korrektheit" ist in der Pflege genauso relevant wie in der Zahngesundheit.

---

## Die Loesung: Drei Ebenen

### Ebene 1: Hard Constraints — nie verletzbar

Wenige, klare Grenzen, die unabhaengig von Situation, Intention oder Feature gelten. Domaenenspezifisch definiert.

**Beispiele:**
- Keine individuellen Leistungszusagen
- Keine Diagnosen oder Therapieempfehlungen
- Keine personenbezogenen Daten speichern
- Notruf-Verweis bei akuter Gefahr

**Merkmal:** Wenn ein Hard Constraint verletzt wird, ist das ein Systemfehler, kein Grenzfall.

### Ebene 2: Kernwerte — fuer alles dazwischen

Werte, die Orientierung geben, wenn die Situation nicht eindeutig ist:

1. **Fachliche Korrektheit** — Lieber "Das weiss ich nicht" als eine plausible Erfindung
2. **Ehrlichkeit & Transparenz** — Unsicherheit nicht als Sicherheit darstellen
3. **Echte Hilfsbereitschaft** — Nicht uebervorsichtig. Eine unhilfsame Antwort ist nicht automatisch sicher
4. **Respekt vor Autonomie** — Informieren und einordnen, nicht bevormunden
5. **Fuersorge** — Die emotionale Situation beruecksichtigen

**Merkmal:** Werte koennen in Spannung zueinander stehen (Hilfsbereitschaft vs. Korrektheit). Das ist gewollt — die Abwaegung ist der Kern.

### Ebene 3: Pruefsteine — fuer echte Grenzfaelle

Wenn weder Constraints noch Werte eindeutig sind:

1. **Kompetente-Beraterin-Test** — Wuerde eine erfahrene Fachberaterin das so sagen?
2. **Doppelzeitungs-Test** — Wuerde die Antwort als "gefaehrliche Fehlinformation" ODER als "unnoetige Informationsverweigerung" in der Zeitung stehen? Beides vermeiden.
3. **1.000-Nutzer-Regel** — Wenn 1.000 Menschen diese Frage stellen, hat die grosse Mehrheit ein legitimes Anliegen. Antworte fuer die Mehrheit, nicht den Ausnahmefall.

---

## Vergleich

| | Regelwerk | Verfassung |
|---|---|---|
| Umfang | Waechst mit jeder Situation | Stabil, wenige Elemente |
| Konflikte | Regeln widersprechen sich | Werte werden abgewogen |
| Neue Domaene | Neue Regeln noetig | Werte gelten sofort |
| Grenzfaelle | Luecke im Regelwerk | Pruefsteine als Fallback |
| Wartung | Exponentiell wachsender Aufwand | Einmal definieren, selten aendern |
| KI-Inseln | Pro Feature eigene Regeln | Eine Verfassung fuer alle |

---

## Uebertragbarkeit

Das Prinzip funktioniert in jeder regulierten Domaene:

| Domaene | Typische Hard Constraints | Typische Werte-Spannung |
|---------|--------------------------|------------------------|
| Gesundheit | Keine Diagnosen, keine Zusagen | Hilfsbereitschaft vs. Vorsicht |
| Recht | Keine Rechtsberatung | Praezision vs. Verstaendlichkeit |
| Finanzen | Keine Anlageempfehlung | Transparenz vs. Komplexitaet |
| Behoerden | Keine Bescheide erstellen | Buergernah vs. Rechtssicher |
| Bildung | Keine Noten-Prognosen | Motivation vs. Ehrlichkeit |

---

## Verknuepfungen

- [[Kompass-Verfassung]] — Die praktische Umsetzung als Element der Assistenz-Architektur
- [[Assistenz-Architektur]] — Das Gesamtframework
- [[Feature-Profile-Methodik]] — Kompass-Intensitaet pro Feature

---

*Quelle: Eigene Beratungspraxis, entwickelt 2025/2026*

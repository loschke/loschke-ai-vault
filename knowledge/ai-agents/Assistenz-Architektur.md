---
title: Assistenz-Architektur fuer KI-basierte Interaktion
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
  - fuehrungskraft
  - entscheider
  - entwickler
  - konzepter
level: intermediate
intent:
  - verstehen
  - ueberzeugen
  - verkaufen
contains:
  - concept
  - argument
  - method
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Assistenz-Architektur fuer KI-basierte Interaktion

> Vier Elemente, die um ein LLM herum gebaut werden muessen, damit KI-Features verlaesslich funktionieren.

---

## Kernaussage

Ein LLM allein ist ein Gehirn ohne Orientierung. Es kann denken und formulieren, aber es weiss nicht, was es wissen soll, was der Mensch braucht, was es darf und wie es klingen soll. Die Assistenz-Architektur beschreibt die vier Gestaltungsdimensionen, die jedes KI-Feature braucht — in unterschiedlicher Intensitaet.

Das Modell ist austauschbar. Die Architektur bleibt.

---

## Die vier Elemente

| Element | Metapher | Frage | Typ |
|---------|----------|-------|-----|
| **Sensor** | Intentionserkennung | Was braucht der Mensch gerade? | Laufzeit |
| **Gedaechtnis** | Context Engineering | Woher weiss die KI, was sie weiss? | Infrastruktur |
| **Kompass** | Verfassung / Leitplanken | Was darf die KI — und was nie? | Infrastruktur |
| **Stimme** | Kommunikations-Layer | Wie kommt die Antwort beim Menschen an? | Laufzeit |

### Infrastruktur vs. Laufzeit

Zwei Elemente baut man einmal auf und pflegt sie laufend. Zwei arbeiten bei jeder Interaktion.

**Infrastruktur (einmal bauen, laufend pflegen):**
- **Kompass** — Werte, Regeln, Grenzen. Einmal definieren, ueberall wirksam.
- **Gedaechtnis** — Wissensbausteine, Datenquellen, Tools. Aufgebaut und gepflegt von Fachredaktion.

**Laufzeit (bei jeder Interaktion aktiv):**
- **Sensor** — Erkennt bei jeder Anfrage das Beduerfnis hinter den Worten.
- **Stimme** — Formt bei jeder Antwort Tonalitaet, Tiefe, Format, Proaktivitaet.

### Das LLM als Gehirn

Das LLM selbst ist das Gehirn — es denkt und verarbeitet. Die vier Elemente der Assistenz-Architektur sind das, was das Gehirn fuettert, steuert und formt:

- **Sensor** fuettert das Gehirn mit Kontext ueber die Situation des Menschen
- **Gedaechtnis** fuettert es mit dem noetigen Fachwissen
- **Kompass** steuert, was das Gehirn tun darf und was nicht
- **Stimme** formt, wie das Ergebnis des Denkens beim Menschen ankommt

Dieses Prinzip macht die Architektur modellunabhaengig. Das Modell kann wechseln (heute Llama 70b, morgen etwas anderes) — die Infrastruktur drumherum bleibt.

---

## Warum Trennung?

| Wenn fehlt... | Dann passiert... | Beispiel |
|---|---|---|
| Sensor | Antwortet technisch korrekt, aber am Beduerfnis vorbei | Nutzer hat Angst, bekommt Paragraphen |
| Gedaechtnis | Will richtig antworten, hat aber keine verlaessliche Grundlage | Erfindet Leistungsbetraege, die plausibel klingen |
| Kompass | Ist hilfreich, ueberschreitet aber Grenzen | Macht Leistungszusagen oder stellt Diagnosen |
| Stimme | Hat den richtigen Inhalt, liefert ihn aber falsch aus | Gestresster Nutzer bekommt eine Textwand |

Die Schichten brauchen unterschiedliche Kompetenzen: Gedaechtnis braucht Fachredaktion + Entwicklung. Sensor braucht UX + Fachberatung. Stimme braucht Design-Entscheidungen. Kompass braucht Compliance + Werte-Arbeit.

---

## Nicht immer alles — das Mischpult-Prinzip

Die vier Elemente sind keine Alles-oder-Nichts-Entscheidung. Jedes hat eine Intensitaet: von "brauchen wir nicht" bis "voll ausgebaut". Wie ein Mischpult mit vier Reglern. Jedes KI-Feature hat sein eigenes Profil.

Siehe [[Feature-Profile-Methodik]] fuer die ausfuehrliche Methodik.

---

## Zusammenspiel am Beispiel

Anfrage: "Meine Mutter braucht einen Pflegedienst. Was zahlt die Kasse?"

1. **Sensor** erkennt: Primaer Leistungsklaerung, sekundaer Angehoerigenvorsorge. Hier braucht es Fakten UND Empathie.
2. **Gedaechtnis** liefert: Baustein Pflegesachleistung (Betraege, Voraussetzungen), Relationen zu Kombinationsleistung und Verhinderungspflege, Tool-Verweis fuer Beratungssuche.
3. **Kompass** prueft: Allgemeine Leistungsinfo erlaubt. Keine individuelle Zusage. Haftungshinweis noetig.
4. **Stimme** formt: Empathisch-sachlicher Ton, mittlere Tiefe, proaktiv verwandte Leistungen nennen, kompaktes Format.

Ergebnis: Empathische, faktenbasierte Antwort mit konkreten Betraegen, verwandten Leistungen, Beratungsangebot und Haftungshinweis.

---

## Uebertragbarkeit

Das Framework ist branchenuebergreifend anwendbar. Ueberall wo KI verlaesslich mit Fachwissen arbeiten soll:

| Branche | Sensor-Beispiel | Gedaechtnis-Beispiel | Kompass-Beispiel |
|---------|----------------|---------------------|-----------------|
| Versicherung | Schadensmeldung vs. Tarifberatung | Leistungskatalog, Bedingungswerke | Keine Deckungszusagen |
| Behoerden | Antragshilfe vs. Beschwerde | Verwaltungsvorschriften | Keine Bescheide erstellen |
| Bildung | Orientierung vs. Vertiefung | Kursangebote, Lehrplaene | Keine Noten-Prognosen |
| Recht | Erstberatung vs. Fallanalyse | Gesetzestexte, Urteile | Keine Rechtsberatung |

---

## Verknuepfungen

- [[Sensor-Intentionserkennung]] – Element 1 im Detail
- [[Gedaechtnis-Context-Engineering]] – Element 2 im Detail
- [[Kompass-Verfassung]] – Element 3 im Detail
- [[Stimme-Kommunikation]] – Element 4 im Detail
- [[Feature-Profile-Methodik]] – Mischpult-Prinzip: Welches Feature braucht was?
- [[Content-ist-nicht-Context]] – Warum Wissensaufbereitung noetig ist

---

*Quelle: Eigene Beratungspraxis, entwickelt und erprobt 2025/2026*

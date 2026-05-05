---
title: Sensor — Intentionserkennung
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
  - konzepter
  - entwickler
  - ux
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
# Sensor — Intentionserkennung

> Element 1 der Assistenz-Architektur: Was braucht der Mensch gerade?

---

## Kernaussage

Der Sensor erkennt das Beduerfnis hinter einer Anfrage — nicht die woertliche Frage, sondern was der Mensch eigentlich braucht. "Zahlt die Kasse das?" ist die Frage. Sicherheit und Pragmatismus ist das Beduerfnis. Dieser Unterschied bestimmt, wie die Antwort aussehen muss.

---

## Intentionen als Vokabular

Pro Domaene gibt es eine endliche Anzahl von Grundbeduerfnissen, mit denen Menschen an ein System herantreten. Im Gesundheitskontext wurden 7 Kernintentionen identifiziert — in anderen Domaenen (Versicherung, Recht, Bildung) waeren es andere, aber das Prinzip ist dasselbe.

### Beispiel: 7 Kernintentionen (Gesundheitsdomaene)

| Code | Name | Leitfrage | Kernemotion |
|------|------|-----------|-------------|
| I1 | Akute Sorge | "Bin ich krank?" | Angst, Dringlichkeit |
| I2 | Frische Diagnose | "Was bedeutet das fuer mich?" | Schock, Kontrollverlust |
| I3 | Behandlungssuche | "Wer kann mir helfen?" | Pragmatisch, entschlossen |
| I4 | Leistungsklaerung | "Zahlt die Kasse das?" | Unsicherheit, Pragmatismus |
| I5 | Langzeit-Management | "Wie lebe ich damit?" | Akzeptanz, Erschoepfung |
| I6 | Angehoerigen-Sorge | "Wie helfe ich meinem Angehoerigen?" | Ueberforderung, Pflichtgefuehl |
| I7 | Praeventive Vorsorge | "Wie bleibe ich gesund?" | Proaktiv, motiviert |

### Uebertragung auf andere Domaenen

Das Prinzip ist universell: Jede Domaene hat eine ueberschaubare Anzahl von Grundbeduerfnissen. Die konkreten Intentionen aendern sich, die Methodik bleibt.

- **Versicherung:** Schadensmeldung, Tarifwechsel, Leistungsfrage, Beschwerde
- **Bildung:** Orientierung, Vertiefung, Pruefungsvorbereitung, Karriereplanung
- **Recht:** Ersteinschaetzung, Fristenklaerung, Dokumentenhilfe, Eskalation

---

## Drei-Ebenen-Framework

Jede Intention wird in drei Ebenen operationalisiert. Siehe [[Intentionen-3-Ebenen]] fuer die ausfuehrliche Methodik.

| Ebene | Frage |
|-------|-------|
| Intention | Warum kommt jemand? |
| Handlung | Was delegiert der Mensch an das System? |
| Wirkung | Was ist nach der Interaktion anders? |

---

## Drei wichtige Prinzipien

### 1. Intentionen sind nicht exklusiv
Eine Anfrage kann mehrere Intentionen enthalten. "Meine Mutter braucht einen Pflegedienst. Was zahlt die Kasse?" ist gleichzeitig Leistungsklaerung UND Angehoerigen-Sorge.

### 2. Intentionen veraendern sich im Gespraech
Ein Nutzer startet bei Akuter Sorge und wechselt zu Leistungsklaerung und dann zu Angehoerigen-Sorge. Das System muss den Wechsel erkennen.

### 3. Nicht jedes Feature bedient alle Intentionen
Ein Pflege-Assistent fokussiert auf 3-4 Intentionen. Eine natuerlichsprachige Suche hat genau eine: "Finde mir etwas." Das Intentionsprofil wird pro Feature konfiguriert.

---

## Intensitaetsstufen im Feature-Profil

| Stufe | Beschreibung | Beispiel-Feature |
|-------|-------------|-----------------|
| Nicht noetig | Intention ist immer gleich, keine Erkennung noetig | Natuerlichsprachige Suche |
| Minimal | Eine Intention, einfache Erkennung | Formular-Assistent |
| Leicht | Wenige Intentionen, Praeferenzen erkennen | Kurs-Onboarding |
| Mittel | Mehrere Intentionen, Anlass-Erkennung | Push-Empfehlungen |
| Voll | Alle Intentionen, Mehrfach-Erkennung, Gespraechsverlauf | Vollassistent (Chat) |

---

## Verknuepfungen

- [[Assistenz-Architektur]] – Das Gesamtframework
- [[Intentionen-3-Ebenen]] – Wie man Intentionen operationalisiert
- [[Stimme-Kommunikation]] – Wie die erkannte Intention die Kommunikation steuert
- [[Feature-Profile-Methodik]] – Sensor-Regler pro Feature

---

*Quelle: Eigene Beratungspraxis, entwickelt 2025/2026*


---

## Technische Implementierung

- [[Sensor-Implementierung]] – Wie der Sensor technisch umgesetzt wird: Architektur-Optionen, Signal-Schema, Multi-Turn, Gedaechtnis-Schnittstelle


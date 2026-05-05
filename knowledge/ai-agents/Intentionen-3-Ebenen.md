---
title: 'Intentionen: Das 3-Ebenen-Framework'
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
  - ux
  - entwickler
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
# Intentionen: Das 3-Ebenen-Framework

> Wie man das Beduerfnis hinter einer Anfrage operationalisiert — von der Motivation bis zum messbaren Ergebnis.

---

## Kernaussage

Intentionen beschreiben nicht die woertliche Frage, sondern das Grundbeduerfnis dahinter. "Zahlt die Kasse das?" ist die Frage — Sicherheit ueber den eigenen Anspruch ist das Beduerfnis. Dieser Unterschied bestimmt, wie die Antwort aussehen muss.

Um Intentionen fuer ein KI-System nutzbar zu machen, reicht es nicht, sie zu benennen. Sie muessen operationalisiert werden: Was genau uebernimmt das System? Und wie merkt man, ob es funktioniert hat?

---

## Die drei Ebenen

| Ebene | Frage | Beschreibung |
|-------|-------|-------------|
| **Intention** | Warum kommt jemand? | Das Grundbeduerfnis hinter der Anfrage |
| **Handlung** | Was delegiert der Mensch an das System? | Die konkreten Denkaufgaben, die das System uebernimmt |
| **Wirkung** | Was ist nach der Interaktion anders? | Das messbare Ergebnis |

### Warum drei Ebenen?

- **Nur Intention** ("Leistungsklaerung") ist zu vage fuer die Entwicklung. Was genau soll das System tun?
- **Nur Handlung** ("Betraege nennen") ist kontextlos. Warum ist das wichtig? Welches Beduerfnis wird bedient?
- **Nur Wirkung** ("Nutzer kann handeln") ist schwer zu designen ohne die Schritte dahin.

Alle drei zusammen ergeben ein vollstaendiges Bild: Motivation, Ausfuehrung, Ergebnis.

---

## Beispiel: Leistungsklaerung

| Ebene | Inhalt |
|-------|--------|
| **Intention** | Will wissen, was die Organisation zahlt. Braucht Sicherheit ueber den eigenen Anspruch. Emotion: Unsicherheit, Pragmatismus. |
| **Handlung** | Anspruch pruefen, Betraege nennen, Alternativen zeigen, Antragsprozess skizzieren. |
| **Wirkung** | Kennt die Leistung und den Weg dorthin. Kann handeln. |

## Beispiel: Angehoerigen-Sorge

| Ebene | Inhalt |
|-------|--------|
| **Intention** | Kuemmert sich um jemand anderen. Traegt Verantwortung. Braucht selbst Unterstuetzung. Emotion: Ueberforderung, Pflichtgefuehl. |
| **Handlung** | Unterstuetzung strukturieren, Entlastung finden, Rechte klaeren, Selbstfuersorge ermoeglichen. |
| **Wirkung** | Weiss welche Hilfe es gibt. Fuehlt sich in der Rolle unterstuetzt. |

## Beispiel: Akute Sorge

| Ebene | Inhalt |
|-------|--------|
| **Intention** | Hat Symptome, die Angst ausloesen. Braucht Sicherheit und Erleichterung. Emotion: Angst, Dringlichkeit. |
| **Handlung** | Dringlichkeit bewerten, naechste Schritte priorisieren, Anlaufstellen identifizieren. |
| **Wirkung** | Weiss ob Notfall oder nicht. Hat einen klaren naechsten Schritt. |

---

## Anwendung: Intentionsprofil pro Feature

Nicht jedes Feature bedient alle Intentionen einer Domaene. Das Intentionsprofil definiert, welche Intentionen ein bestimmtes Feature erkennen und bedienen muss.

| Feature | Primaere Intentionen | Nicht im Scope |
|---------|---------------------|----------------|
| Pflege-Assistent | Leistungsklaerung, Angehoerigen-Sorge, Langzeit-Management | Praeventive Vorsorge (eigener Cluster) |
| Kurs-Onboarding | Behandlungssuche (vereinfacht) | Akute Sorge, Leistungsklaerung |
| Formular-Assistent | Keine eigene — Intention ist implizit "Hilf mir beim Ausfuellen" | Alle anderen |

---

## Drei Prinzipien

### 1. Intentionen sind nicht exklusiv

Eine Anfrage kann mehrere Intentionen enthalten. "Meine Mutter braucht einen Pflegedienst. Was zahlt die Kasse?" ist gleichzeitig Leistungsklaerung UND Angehoerigen-Sorge. Das System muss primaere und sekundaere Intentionen erkennen und beide beruecksichtigen.

### 2. Intentionen veraendern sich im Gespraech

Ein Nutzer startet bei Akuter Sorge ("Mein Vater hatte einen Schlaganfall"), wechselt zu Leistungsklaerung ("Was zahlt die Kasse?") und dann zu Angehoerigen-Sorge ("Wie schaffe ich das neben dem Job?"). Das System muss den Wechsel erkennen.

### 3. Die Menge ist endlich und domaenenspezifisch

Pro Domaene gibt es eine ueberschaubare Anzahl von Grundbeduerfnissen. Im Gesundheitskontext wurden 7 identifiziert. In anderen Domaenen waeren es andere — aber das Prinzip (endliche Menge, 3-Ebenen-Beschreibung) ist universell.

---

## Uebertragung auf andere Domaenen

| Domaene | Beispiel-Intentionen |
|---------|---------------------|
| Versicherung | Schadensmeldung, Tarifwechsel, Leistungsfrage, Beschwerde, Praevention |
| Bildung | Orientierung, Vertiefung, Pruefungsvorbereitung, Karriereplanung |
| Recht | Ersteinschaetzung, Fristenklaerung, Dokumentenhilfe, Eskalation |
| Behoerden | Antragshilfe, Statuspruefung, Beschwerde, Lebenslage-Orientierung |

Fuer jede Domaene: Intentionen identifizieren, mit 3 Ebenen beschreiben, zu Feature-Profilen zuordnen.

---

## Methodischer Ablauf

1. **Domaene analysieren** — Welche Grundbeduerfnisse bringen Menschen mit?
2. **Intentionen benennen** — Leitfrage, Kernemotion, typische Aeusserungen
3. **3 Ebenen beschreiben** — Intention, Handlung, Wirkung pro Intention
4. **Antwort-Strategie ableiten** — Wie reagiert das System auf diese Intention?
5. **Feature-Profil zuordnen** — Welches Feature bedient welche Intentionen?

---

## Verknuepfungen

- [[Sensor-Intentionserkennung]] — Das Element, das Intentionen erkennt
- [[Assistenz-Architektur]] — Das Gesamtframework
- [[Stimme-Kommunikation]] — Die erkannte Intention steuert die Steuerparameter
- [[Feature-Profile-Methodik]] — Intentionsprofil pro Feature

---

*Quelle: Eigene Beratungspraxis, entwickelt 2025/2026*

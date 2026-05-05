---
title: KI-Regulierung und Governance
type: reference
status: living
created: '2026-03-04'
updated: '2026-03-04'
tags:
  - ki-grundlagen
  - regulierung
  - eu-ai-act
  - governance
  - compliance
  - richtlinie
sources:
  - 'self-authored:loschke:pre-migration'
area: ai-essentials
audience:
  - fuehrungskraft
  - entscheider
  - praktiker
level: basic
intent:
  - verstehen
  - entscheiden
  - vermitteln
contains:
  - decision-aid
  - contrast
  - argument
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-04'
---
# KI-Regulierung und Governance

> Rechtlicher Rahmen (EU AI Act), Risikoklassen, Transparenzpflichten und warum Organisationen zwei Dokumente statt einem brauchen.

---

## EU AI Act: Die vier Risikoklassen

Der EU AI Act klassifiziert KI-Systeme nach ihrem Risikopotenzial:

| **Risikoklasse** | **Regulierung** | **Beispiele** |
|---|---|---|
| **Verboten** | Unannehmbares Risiko | Social Scoring, Emotionserkennung am Arbeitsplatz, kognitive Manipulation, biometrische Fernerkennung |
| **Hochrisiko** | Streng reguliert | Kritische Infrastruktur, HR/Bewerberauswahl, Bildung, Kreditwürdigkeitsprüfung |
| **Begrenztes Risiko** | Transparenzpflichten | Chatbots, Deepfakes, generative KI (Bilder/Text) |
| **Minimales Risiko** | Keine neuen Pflichten | Spam-Filter, Videospiele, Inventory Management |

---

## Verbotene Praktiken: Die roten Linien

Diese Anwendungen sind in der EU schlicht illegal. Kaum Ausnahmen:

- **Social Scoring:** Bewertung von Vertrauenswürdigkeit durch staatliche Akteure.
- **Emotionserkennung am Arbeitsplatz:** Praktisch unzulässig, da sie Grundrechte verletzt und als manipulative Nutzung eingestuft wird.
- **Kognitive Manipulation:** Unterschwellige Techniken, um Verhalten zu ändern (Dark Patterns).
- **Biometrische Fernerkennung:** "Echtzeit"-Gesichtserkennung im öffentlichen Raum. Enge Ausnahmen bei Strafverfolgung.

---

## Hochrisiko: Wo Unternehmen aufpassen müssen

**HR ist der häufigste Hochrisiko-Fall in Unternehmen.**

| Bereich | Beispiele |
|---|---|
| **Beschäftigung & HR** | KI, die Bewerbungen filtert, Mitarbeiter bewertet oder Aufgaben zuweist. Auch das "Zusammenfassen von CVs" kann Hochrisiko sein, wenn es Entscheidungsgrundlage ist. |
| **Bildung & Ausbildung** | KI, die über Zugang zu Bildung entscheidet, Prüfungen bewertet oder Lernfortschritt misst. |
| **Kritische Infrastruktur** | Sicherheitskomponenten in Wasser, Energie, Verkehr, digitale Infrastruktur. |
| **Private & Öffentliche Dienste** | Kreditwürdigkeitsprüfung (Scoring), Risikobewertung bei Versicherungen (Leben/Gesundheit), Notrufsysteme. |
| **Strafverfolgung & Justiz** | Bewertung von Beweisen, Rückfallprognosen, Lügendetektoren. |
| **Migration & Asyl** | Prüfung von Reisedokumenten, Risikobewertung bei Asylanträgen. |

---

## Transparenzpflichten

### Stichtag: 2. August 2026

- **Chatbots:** Nutzer müssen wissen, dass sie mit einer KI interagieren.
- **KI-Texte & Bilder:** Kennzeichnung als "KI-generiert" bei öffentlicher Nutzung / öffentlichem Interesse.
- **Deepfakes:** Maschinenlesbare Markierung verpflichtend. Für Menschen klar erkennbar kennzeichnen.

### Sanktionen

Bis zu **15 Mio. €** oder **3% des weltweiten Jahresumsatzes** – je nachdem, was höher ist.

---

## DSGVO und KI-Tools

Die DSGVO verbietet KI-Nutzung nicht. Sie verlangt:

- **Transparenz:** Nutzer wissen, dass KI eingesetzt wird
- **Rechtsgrundlage:** Berechtigtes Interesse, Einwilligung oder Vertrag
- **Auftragsverarbeitung:** DPA mit dem Anbieter
- **Datensparsamkeit:** Nur das eingeben, was nötig ist

Das ist machbar. Es erfordert Vorbereitung, keine Verbote.

→ Für die Frage "Welche Daten in welches Tool?" → [[KI-Sicherheit-Souveraenitaet]]
→ Für konkrete Input-Regeln → [[Datenschutz-Input-Regeln]]

---

## Governance: Warum klassische Richtlinien scheitern

Compliance und Anwenderhilfe folgen völlig unterschiedlichen Logiken:

| Problem | Folge |
|---|---|
| **Zu streng:** Übervorsichtige Regeln ersticken Innovation im Keim | Schatten-IT |
| **Zu vage:** Keine klaren Grenzen für sensible Daten | Unbedachte Eingaben |
| **Zu lang:** 40-seitige PDFs werden nicht gelesen | Unwissenheit im Alltag |

**Das typische Dilemma:** Was juristisch sicher ist, liest keiner. Was praktisch ist, reicht dem Juristen nicht. Versucht man, Rechtssicherheit und Praxis in ein Dokument zu packen, verliert man beides.

---

## Die Zwei-Säulen-Strategie

Die Lösung: Bewusste Trennung in zwei aufeinander abgestimmte Dokumente.

### Säule 1: Die Compliance-Richtlinie (Was wir müssen)

- Rechtlich verbindlich
- Kurz und präzise
- Definiert "rote Linien"
- Verabschiedet von der Geschäftsleitung

### Säule 2: Das Anwender-Handbuch (Wie wir es machen)

- Dynamisch (Wiki)
- Beispielreich und inspirierend
- Prompts und Workflows
- Wächst durch Mitarbeitende

### Warum die Trennung funktioniert

| **Merkmal** | **Compliance-Richtlinie** | **Anwender-Handbuch** |
|---|---|---|
| **Zweck** | Rechtssicherheit schaffen | Praktisch befähigen und inspirieren |
| **Format** | PDF / Unterschriebenes Dokument | Interaktives Wiki / Intranet |
| **Aktualisierung** | Selten (bei Gesetzesänderungen) | Laufend (wöchentlich/monatlich) |
| **Autoren** | Legal, IT-Security, Datenschutz | Fachabteilungen, KI-Champions |
| **Inhalt** | Verbote, Prozesse, Datenklassen | Prompts, Use-Cases, Checklisten |

---

## Verknüpfungen

- [[Datenschutz-Input-Regeln]] – Konkrete Regeln für den Daten-Input
- [[KI-Sicherheit-Souveraenitaet]] – Welches Tool für welche Daten?
- [[KI-Output-Risiken]] – Urheberrecht, Kennzeichnung, Bias
- [[Halluzinationen-und-Zuverlaessigkeit]] – Warum KI-Output geprüft werden muss

---

*Orientierung für den regulatorischen Rahmen und die organisationale KI-Governance*

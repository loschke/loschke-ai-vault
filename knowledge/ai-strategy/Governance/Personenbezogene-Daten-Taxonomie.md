---
title: Personenbezogene Daten – Taxonomie
type: vocabulary
status: stable
created: '2025-06-15'
updated: '2025-06-15'
tags:
  - dsgvo
  - datenschutz
  - ai-governance
  - pii
sources:
  - 'self-authored:loschke:strategy-consulting'
area: ai-strategy
audience:
  - fuehrungskraft
  - entscheider
  - praktiker
level: beginner
intent:
  - verstehen
  - referenzieren
contains:
  - concept
  - vocabulary
  - tip
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Personenbezogene Daten – Taxonomie

> Was alles als personenbezogene Daten gilt — und warum das deutlich mehr ist, als die meisten annehmen.

---

## Kernaussage

Art. 4 Nr. 1 DSGVO definiert personenbezogene Daten bewusst extrem weit: „alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen." Die Identifizierung kann direkt oder indirekt erfolgen. In der Praxis unterschätzen Organisationen systematisch, welche Daten unter diese Definition fallen — insbesondere Quasi-Identifikatoren und Kombinationen scheinbar harmloser Informationen.

---

## Direkte Identifikatoren

Daten, die eine Person unmittelbar identifizieren:

| Kategorie | Beispiele |
|---|---|
| **Stammdaten** | Name, Adresse, Telefonnummer, E-Mail-Adresse |
| **Behördliche Kennungen** | Sozialversicherungsnummer, Steuer-ID, Personalausweisnummer |
| **Finanzkennungen** | IBAN/BIC, Kreditkartennummer |
| **Sonstige** | Kfz-Kennzeichen, biometrische Merkmale |

---

## Online-Identifikatoren

Erwägungsgrund 30 DSGVO stellt klar, dass auch digitale Spuren personenbezogene Daten sind:

IP-Adressen (statisch und dynamisch — das Breyer-Urteil C-582/14 bestätigte 2016 den Personenbezug dynamischer IP-Adressen), Cookie-IDs, Geräte-IDs, MAC-Adressen und Browser-Fingerprints. Auch Standortdaten aus GPS, Mobilfunkzellen und WLAN-Ortung sowie Finanzdaten wie Gehalt, Transaktionshistorie und Bonitätsdaten fallen darunter. Der EuGH bestätigte in C-342/12, dass selbst Arbeitszeiterfassungen personenbezogene Daten darstellen.

---

## Besondere Kategorien nach Art. 9 DSGVO

Für acht Datenkategorien gilt ein grundsätzliches Verarbeitungsverbot mit eng begrenzten Ausnahmen:

| Kategorie | Praxisrelevanz im KI-Kontext |
|---|---|
| Rassische und ethnische Herkunft | Bias-Risiko bei KI-Training |
| Politische Meinungen | Indirekt ableitbar aus Medienkonsummustern |
| Religiöse/weltanschauliche Überzeugungen | Sichtbar in Kalender- und Abwesenheitsdaten |
| Gewerkschaftszugehörigkeit | In HR-Daten oft implizit enthalten |
| Genetische Daten | Forschungsdaten, Gesundheitsapps |
| Biometrische Daten | Gesichtserkennung, Sprachmuster |
| Gesundheitsdaten | Krankschreibungen, Fitness-Tracker |
| Sexualleben/sexuelle Orientierung | Indirekt ableitbar aus Kommunikationsmustern |

Der EuGH hat den Anwendungsbereich erweitert: Art. 9 greift auch, wenn Daten besondere Kategorien indirekt offenbaren — etwa wenn ein Zeitungsabonnement auf politische Meinungen schließen lässt.

---

## Quasi-Identifikatoren und Re-Identifikationsrisiko

Quasi-Identifikatoren sind Datenpunkte, die einzeln nicht identifizierend wirken, in Kombination aber eine Person eindeutig bestimmen können.

**Die Sweeney-Erkenntnis:** Latanya Sweeney zeigte 2002, dass 87 % der US-Bevölkerung allein durch die Kombination von Postleitzahl, Geburtsdatum und Geschlecht eindeutig identifiziert werden können. Sie identifizierte die Krankenakte des Gouverneurs von Massachusetts durch Verknüpfung „anonymisierter" Gesundheitsdaten mit öffentlichen Wählerregistern.

**Typische Quasi-Identifikatoren:** Alter, Geschlecht, Postleitzahl, Beruf, Arbeitgeber, seltene Erkrankungen, Verhaltensmuster. Bereits vier Kreditkartentransaktionen können 87 % aller Personen identifizieren.

**Das Singling-Out-Problem:** Eine Person kann auch ohne Namensnennung von allen anderen unterschieden werden, wenn ihre Datenkombination einzigartig ist. In kleinen Organisationen oder Abteilungen reicht oft die Angabe von Funktion oder Fachgebiet. Bei einem Unternehmen mit fünf Personen im Bereich Data Science identifiziert das Projektthema die Person sofort.

---

## Häufig übersehene PII-Quellen

**Datei-Metadaten** sind der blinde Fleck Nummer eins im KI-Kontext. Word- und PDF-Dokumente enthalten Autorennamen, Organisationsinformationen, Dateipfade, Änderungsverläufe und den letzten Bearbeiter. Fotos speichern GPS-Koordinaten, Gerätemodell und Zeitstempel in EXIF-Daten.

**Stilometrie** ermöglicht die Identifikation von Autoren anhand ihres Schreibstils — bereits ab 500 Wörtern durch Analyse von Funktionswörtern, Satzlängen und Zeichensetzungsgewohnheiten. LLMs machen solche Analysen noch einfacher: Mit wenigen Prompts kann ein LLM Schreibmuster mit bekannten Autoren abgleichen.

**Versteckte PII in Dokumenten:** Dateipfade (z.B. `\\server\projekte\mueller\...`) offenbaren Personennamen. Word-Dokumente mit aktivierter Änderungsverfolgung enthalten gelöschte Namen im Änderungsverlauf. Kopfzeilen, Fußzeilen und Dokumenteigenschaften (Autor, Dateipfad) werden bei der Anonymisierung regelmäßig vergessen.

---

## Ampelsystem für Datentypen im KI-Kontext

🟢 **Unbedenklich für externe KI-Tools:** Aggregierte Statistiken, anonymisierte Datensätze, synthetische Daten, rein technische Maschinendaten, öffentlich verfügbare nicht-sensible Informationen.

🟡 **Nur mit Schutzmaßnahmen:** Pseudonymisierte personenbezogene Daten in geschlossenen internen Systemen, geschäftliche Kontaktdaten. Erfordert DSFA-Bewertung, DPO-Konsultation, Zugriffskontrollen und Protokollierung.

🔴 **Verboten ohne Anonymisierung:** Personenbezogene Daten in externen/öffentlichen KI-Tools, besondere Kategorien (Art. 9), Kinderdaten, Geschäftsgeheimnisse. Muss anonymisiert werden; bei notwendiger Verarbeitung: explizite Rechtsgrundlage, DSFA obligatorisch, DPO-Freigabe.

---

## Verknüpfungen

- [[Anonymisierung-vs-Pseudonymisierung]] — Wann fallen Daten aus der DSGVO heraus?
- [[Anonymisierungstechniken]] — Technische Verfahren zur Entfernung von PII
- [[Re-Identifikation-Risiken]] — Warum Quasi-Identifikatoren gefährlich sind
- [[KI-Output-Haftung-Risiken]] — Haftung bei PII-Eingabe in KI-Tools
- [[Ethische-Prinzipien-KI]] — Datenschutz als ethisches Grundprinzip

---

*Stand: Februar 2026 | Keine Rechtsberatung*

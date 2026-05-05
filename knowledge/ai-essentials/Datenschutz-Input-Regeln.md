---
title: Datenschutz – Input-Regeln
type: guide
status: stable
created: '2026-03-04'
updated: '2026-03-04'
tags:
  - ki-grundlagen
  - datenschutz
  - dsgvo
  - input
  - anonymisierung
sources:
  - 'self-authored:loschke:pre-migration'
area: ai-essentials
audience:
  - praktiker
  - fuehrungskraft
  - entscheider
level: basic
intent:
  - verstehen
  - entscheiden
  - vermitteln
contains:
  - decision-aid
  - tip
  - contrast
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-04'
---
# Datenschutz – Input-Regeln

> Was darf ich in KI-Tools eingeben? Personenbezogene Daten, Unternehmensdaten und die Techniken, um beides zu schützen.

---

## Warum das wichtig ist

"Darf ich da Firmendaten eingeben?" ist die Frage, die KI-Nutzung in Unternehmen am häufigsten blockiert. Die Antwort hängt davon ab, welche Daten, welches Tool und welche Schutzmaßnahmen im Spiel sind.

Das Problem entsteht an der Eingabe: Ein Projektbericht mit Partnernamen und Förderkennzeichen wird in ChatGPT eingefügt, um eine Zusammenfassung zu erstellen. Das Risiko: Datenabfluss.

---

## Personenbezogene Daten nach DSGVO

### Die roten Linien: Art. 9 DSGVO

Besondere Kategorien personenbezogener Daten unterliegen einem grundsätzlichen Verarbeitungsverbot:

- Gesundheitsdaten (Diagnosen, Krankschreibungen)
- Ethnische Herkunft
- Politische Meinungen / Religiöse Überzeugungen
- Biometrische Daten
- Sexuelle Orientierung

**Absolutes Tabu:** Diese Daten dürfen unter keinen Umständen in externe KI-Tools eingegeben werden. Verarbeitung nur unter strengen Ausnahmeregelungen möglich (Einwilligung, lebenswichtiges Interesse, arbeitsrechtliche Erfordernisse). Für Art. 9 Daten kommen nur lokale Lösungen (S1-S2) in Frage.

→ Siehe [[KI-Sicherheit-Souveraenitaet]] für das Souveränitätsspektrum S1-S6.

### Breiter als gedacht

Personenbezogene Daten gehen weit über Name und Adresse hinaus:

| **Offensichtlich** | **Oft übersehen** |
|---|---|
| Name, Adresse, E-Mail | Dateipfade (z.B. `\server\transfer\loschke...`) |
| Telefonnummer, IBAN | Metadaten in Word/PDF (Autor, Änderungsverlauf) |
| Personal-, Ausweisnummern | EXIF-Daten in Fotos (GPS, Geräte-ID) |
| Fotos vom Gesicht, Audio-Aufzeichnungen | Kombinationen: "PM Abt. Quantenoptik Dresden" |

**Faustregel:** Wenn jemand mit Zusatzwissen herausfinden könnte, wer gemeint ist, sind es personenbezogene Daten.

---

## Unternehmensdaten

| **Kategorie** | **Beispiele** |
|---|---|
| Vertrauliches, Geschäftsgeheimnisse | Vertragsinhalte, Partnerdetails, Kundenlisten, Angebote |
| Interne Kommunikation | Protokolle, Strategieentscheidungen, Personaldiskussionen |
| Finanzdaten | Umsätze, Margen, Investitionspläne, Forecasts |
| Marketing (unveröffentlicht) | Kampagnen vor Launch, Wettbewerbsanalysen, Positionierungen |

**Faustregel:** Wenn ein Wettbewerber sich darüber freuen würde, gehört es nicht in ein externes KI-Tool.

---

## Zwei Techniken für den Soforteinsatz

### 1. Maskierung

Direkte Identifikatoren durch Platzhalter ersetzen:

- "Marie Schmidt" → `[NAME]`
- "+49 170 12345" → `[TELEFON]`
- "01.01.1970" → `[GEBURTSDATUM]`

### 2. Generalisierung

Kontextdetails abstrahieren:

- "Abt. Quantenoptik Dresden" → "eine Fachabteilung"
- "67.432 €" → "~65k €"
- "die Fraunhofer Akademie" → "unser Kunde"

Das Modell braucht die konkreten Namen und Zahlen selten. Es braucht den Kontext und die Struktur.

---

## Was bedenkenlos eingegeben werden kann

Auch in öffentliche KI-Tools:

- Allgemeine Recherche- und Wissensfragen
- Öffentlich verfügbare Informationen
- Übersetzungen nicht-vertraulicher Texte
- Brainstorming ohne interne Details
- Generische Textentwürfe zum Unternehmen

**Kein Problem:** Weil kein Rückschluss auf Personen, Geschäftsgeheimnisse oder interne Strategien möglich ist.

**Faustregel:** Könnte das genauso gut ein Mitarbeiter jedes anderen Unternehmens fragen? Dann ist es okay.

### Praxistest: Drei Fragen vor dem Eingeben

1. **Würde ich diese Info auf LinkedIn posten?** → Wenn ja: Consumer OK.
2. **Steht ein Name, eine Kundennummer oder ein Betrag drin?** → Wenn ja: Mindestens Pro mit Opt-out, besser Enterprise.
3. **Gibt es eine Compliance-Vorgabe dafür?** → Wenn ja: Nur Enterprise mit DPA.

---

## Was "Training mit deinen Daten" bedeutet

### Die häufigste Angst

"Wenn ich Firmendaten eingebe, lernt die KI das und gibt es an andere weiter."

### Die Realität

| Was passiert | Was NICHT passiert |
|---|---|
| Daten können in zukünftige Trainingsrunden einfließen | Andere Nutzer sehen deine Daten nicht direkt |
| Modell könnte Muster aus deinen Daten lernen | Deine konkreten Texte werden nicht 1:1 wiedergegeben |
| Bei Consumer-Tools: Default ist Opt-in | Bei API/Enterprise: Kein Training (vertraglich) |

### Opt-out Möglichkeiten

| Anbieter | Wie Opt-out | Wo |
|---|---|---|
| OpenAI (ChatGPT) | Settings → Data Controls → "Improve the model" deaktivieren | Account-Einstellungen |
| Anthropic (Claude) | Kein Training mit Konversationsdaten (Pro/API) | Standard-Policy |
| Google (Gemini) | Aktivitätseinstellungen in Google Account | Google Account |

**Achtung:** Opt-out bei Consumer-Tools ist nicht dasselbe wie eine vertragliche Garantie. Für Unternehmensdaten reicht Opt-out nicht.

---

## Häufige Missverständnisse

| Missverständnis | Realität |
|---|---|
| "Die KI speichert alles für immer" | Abhängig vom Tool und Plan. API: oft Zero-Retention möglich. |
| "Andere können meine Eingaben sehen" | Nein. Aber deine Daten könnten in zukünftiges Training einfließen (bei Consumer). |
| "DSGVO verbietet KI-Nutzung" | Nein. Sie stellt Bedingungen, die erfüllbar sind. |
| "API ist immer sicherer als die App" | Nicht automatisch. API ohne DPA ist nicht besser als die App mit DPA. |
| "Der AI Act betrifft uns nicht" | Kommt auf die Anwendung an. HR-Einsatz ist häufig Hochrisiko. Transparenzpflichten gelten ab August 2026 für alle. → Siehe [[KI-Regulierung-Governance]] |

---

## Verknüpfungen

- [[KI-Sicherheit-Souveraenitaet]] – Welches Tool für welche Daten? Das S1-S6 Souveränitätsspektrum
- [[KI-Output-Risiken]] – Was bei KI-generierten Outputs zu beachten ist
- [[KI-Regulierung-Governance]] – EU AI Act, Risikoklassen, Governance-Strategie
- [[Kosten-und-Preismodelle]] – Enterprise vs. Pro vs. Free: Kostenunterschiede
- [[Modell-Landschaft]] – Open Source als Datenschutz-Option

---

*Orientierung für den sicheren Umgang mit Daten bei KI-Nutzung*

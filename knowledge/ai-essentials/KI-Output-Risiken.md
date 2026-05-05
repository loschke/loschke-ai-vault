---
title: KI-Output-Risiken
type: reference
status: stable
created: '2026-03-04'
updated: '2026-03-04'
tags:
  - ki-grundlagen
  - output
  - urheberrecht
  - bildgenerierung
  - compliance
  - bias
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
  - bewerten
  - entscheiden
contains:
  - decision-aid
  - tip
  - contrast
  - checklist
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-04'
---
# KI-Output-Risiken

> Was muss ich bei KI-generierten Outputs beachten? Urheberrecht, Halluzinationsrisiko, Bild-KI-Gefahren und die Checkliste für den Alltag.

---

## Warum das wichtig ist

KI-Outputs sehen professionell aus. Das macht sie gefährlich. Eine plausible Statistik kann frei erfunden sein. Ein Bild kann ein Markenlogo im Hintergrund enthalten. Ein Text kann urheberrechtlich geschütztes Material reproduzieren. Die Risiken entstehen nicht bei der Eingabe, sondern bei dem, was man mit dem Output macht.

---

## Urheberrecht: Die zwei Seiten der Medaille

Beides ist gleichzeitig wahr:

**Seite 1: Kein Schutz für euch.** Rein KI-generierte Inhalte erhalten keinen Urheberrechtsschutz. Wettbewerber können eure KI-Texte frei kopieren.

**Seite 2: Risiko für euch.** KI kann geschütztes Material aus Trainingsdaten reproduzieren. Veröffentlicht ihr das, haftet ihr für Urheberrechtsverletzungen.

### Das Spektrum menschlicher Beteiligung

| Stufe | Arbeitsweise | Schutzfähigkeit |
|---|---|---|
| **KI als Werkzeug** | Rechtschreibprüfung, Formatierung, SEO-Optimierung | Schutzfähig |
| **Mensch steuert** | Iteratives Prompting, substanzielle Nachbearbeitung, gemischte Inhalte | Grauzone |
| **KI autonom** | Einfacher Prompt, erster Output der KI, Allgemeinwissen | Nicht schutzfähig |

**Praxisregel:** Substanzielle Bearbeitung stärkt Qualität und Rechtsposition. "Copy-Paste" ist doppelt riskant (kein Schutz + Verletzungsrisiko). Wer Schutzfähigkeit will, muss den Prozess dokumentieren: Prompt-Iterationen, Auswahlentscheidungen, Edits speichern.

---

## Halluzinationsrisiko nach Aufgabentyp

Nicht jede KI-Aufgabe ist gleich riskant. Die drei Kernfähigkeiten haben unterschiedliche Risikostufen:

| Fähigkeit | Risiko | Erklärung |
|---|---|---|
| **Erschaffen** | Höchstes Risiko | KI generiert aus wenig Input viel neuen Text. Hier entsteht am meisten "Neues", also auch am meisten Erfundenes. Besonders kritisch bei Fakten, Zahlen, Quellen. |
| **Reduzieren** | Niedriges Risiko | KI arbeitet mit eurem Material, verdichtet und filtert. Die Information kommt von euch, nicht von der KI. |
| **Umwandeln** | Geringstes Risiko | KI strukturiert um, formatiert, passt an. Der Inhalt bleibt im Wesentlichen gleich. |

**Faustregel:** Je mehr die KI "frei erzählt", desto mehr muss ich prüfen.

→ Für vertiefte Halluzinations-Taxonomie und Mitigationsstrategien: [[Halluzinationen-und-Zuverlaessigkeit]]

---

## Bild-KI: Spezifische Risiken

### Markenrecht

Bilder können Markenrechte verletzen:

- **Produktdesign:** Cola-Flasche, Porsche-Silhouette
- **Unbeabsichtigte Logos:** Sportschuhe, Formel 1
- **Kunst/Künstlerstile:** "Pixar-Style", "Banksy"

### Persönlichkeitsrecht

- **Bekannte Persönlichkeiten:** Papst in Pufferjacke, Politiker, Prominente
- **Unbeabsichtigte Doppelgänger:** KI erzeugt Gesichter, die realen Personen ähneln
- **Eigene Bilder:** Gedankenlose Verwendung eigener Fotos als Input

**Regel:** Immer mit fiktiven Personen arbeiten.

### Wettbewerbsrecht

KI-Bilder können durch übertriebene Darstellung die realistische Wahrnehmung verzerren. Idealisierte Produktbilder können als unlauterer Wettbewerb gewertet werden.

### Bias in Bild-KIs

Bild-KIs haben statistische "Vorurteile" aus ihren Trainingsdaten:

- Hochzeit = westlich
- CEO = männlich, weiß
- Medizinisches Fachpersonal = Rollenstereotype

**Risiko:** Nicht inklusive und stereotype Darstellungen, die das Unternehmen in ein schlechtes Licht rücken.

### Technische Detailfehler

KI-Bilder sehen plausibel aus, enthalten aber oft falsche technische Details: fehlerhafte Bremsscheiben, absurde Mechaniken, unlogische Konstruktionen. Was für Laien überzeugend wirkt, fällt Fachleuten sofort auf.

---

## Das Ampelsystem für Bildfreigabe

| Stufe | Freigabe | Beispiele |
|---|---|---|
| **Grün (Sicher)** | Ersteller selbst | Abstrakte Designs, Muster, stilisierte Illustrationen, Konzeptskizzen (intern), generische Umgebungen (ohne Marken) |
| **Gelb (Vorsicht)** | 4-Augen-Prinzip | KI-Bilder für Kommunikation, fotorealistische fiktive Personen, "Im Stil von [Künstler:in]", wissenschaftliche Visualisierung, Bilder für Pressemitteilungen, Deepfakes (mit Kennzeichnung!) |
| **Rot (Stopp)** | Rechtsabteilung | Erkennbare reale Personen (ohne Einwilligung), sichtbare Markenlogos, Prompts mit echten Namen, "Im Stil von [Marke]", Fotorealismus ohne Label |

---

## Die drei Prüfmomente

Drei Momente decken 90% der Compliance-Risiken ab:

**1. Vor dem Input:** Sind personenbezogene Daten oder Geschäftsgeheimnisse in meinem Prompt?

**2. Nach der Generierung:** Stimmen die Fakten? Gibt es Verzerrungen? Gilt gleichermaßen für Text und Bild.

**3. Vor der Veröffentlichung:** Urheberrecht geklärt? Personen/Marken im Bild? Kennzeichnung und Transparenzpflichten erfüllt?

---

## Kompakt-Checkliste

**Vor dem Input**
- [ ] Personenbezogene Daten maskiert?
- [ ] Art. 9 Daten ausgeschlossen?
- [ ] Geschäftsgeheimnisse gefiltert?
- [ ] Passendes Tool (Enterprise)?

**Nach der Generierung**
- [ ] Fakten verifiziert?
- [ ] Quellenangaben gegengeprüft?
- [ ] Auf Bias geprüft?
- [ ] Stereotype geprüft?

**Vor Veröffentlichung (Text)**
- [ ] Substanziell überarbeitet?
- [ ] 4-Augen-Prinzip (extern)?

**Vor Veröffentlichung (Bild)**
- [ ] Personen/Marken geprüft?
- [ ] Als KI-generiert gekennzeichnet?
- [ ] Ampelsystem (Grün/Gelb) ok?

---

## Der 4-Fragen-Ethik-Test

Wenn Checklisten nicht weiterhelfen:

1. **Transparenz-Test:** Wäre ich bereit, öffentlich zu erklären, wie wir die KI hier einsetzen?
2. **Fairness-Test:** Behandeln wir alle Betroffenen (Kollegen, Kunden) fair und respektvoll?
3. **Konsequenz-Test:** Was passiert, wenn alle Organisationen/Abteilungen so handeln würden?
4. **Bauchgefühl-Test:** Fühlt sich die Entscheidung richtig an? Unbehagen ernst nehmen.

**Entscheidungsregel:** Alle 4 "Ja" = Vertretbar. Ein "Nein" oder "Unsicher" = Pause & Rücksprache.

---

## Verknüpfungen

- [[Datenschutz-Input-Regeln]] – Was darf in KI-Tools eingegeben werden?
- [[KI-Regulierung-Governance]] – Transparenzpflichten und Kennzeichnung ab 2026
- [[Halluzinationen-und-Zuverlaessigkeit]] – Vertiefte Halluzinations-Taxonomie und Mitigationsstrategien
- [[Content-Bewertung-Checkliste]] – Strukturiertes Framework für die Prüfung von Content
- [[KI-Faehigkeiten-Scope]] – Erschaffen, Reduzieren, Umwandeln als Grundmodell

---

*Orientierung für den verantwortungsvollen Umgang mit KI-generiertem Output*

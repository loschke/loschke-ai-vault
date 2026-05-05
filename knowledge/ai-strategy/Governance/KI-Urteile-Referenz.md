---
title: KI-Urteile-Referenz
type: reference
status: living
created: '2025-02-08'
updated: '2025-02-08'
tags:
  - copyright
  - ai-governance
  - urteile
  - case-law
sources:
  - 'self-authored:loschke:strategy-consulting'
area: ai-strategy
audience:
  - fuehrungskraft
  - entscheider
  - praktiker
level: advanced
intent:
  - referenzieren
  - aktualisieren
contains:
  - reference
  - timeline
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# KI-Urteile-Referenz

> Lebende Sammlung der wichtigsten Gerichtsentscheidungen zu KI, Urheberrecht und Haftung. Regelmäßig aktualisieren.

---

## Zweck dieser Note

Die Rechtsprechung zu KI und Urheberrecht entwickelt sich rasant. Diese Note sammelt die Leitentscheidungen in strukturierter Form — als Nachschlagewerk für Content-Erstellung, Beratung und Seminare. Jedes Urteil wird mit Kernaussage, Kontext und praktischer Relevanz erfasst.

**Letzte Aktualisierung:** Februar 2026
**Nächste relevante Termine:** CJEU C-250/25 (erwartet Ende 2026), DSM-Review (Juni 2026), GEMA-Berufung (ausstehend)

---

## 🇩🇪 Deutschland

### GEMA v. OpenAI
**LG München, November 2025**

| Feld | Detail |
|------|--------|
| **Sachverhalt** | GEMA klagte, nachdem ChatGPT urheberrechtlich geschützte Songtexte (u.a. "Atemlos", "Über den Wolken") auf einfache Prompts reproduzierte |
| **Kernentscheidungen** | Memorisierung geschützter Werke in Modellparametern = Vervielfältigung (§ 16 UrhG). Analogie zu verlustbehafteter MP3-Kompression. Output von Liedtexten = öffentliche Zugänglichmachung (§ 19a UrhG). TDM-Ausnahme deckt nur analytische Vorbereitung, nicht Memorisierung ganzer Werke |
| **Haftung** | Primär beim Anbieter (OpenAI), nicht bei Endnutzern |
| **Status** | OpenAI hat Berufung angekündigt. Vorlage an EuGH möglich |
| **Relevanz** | Wichtigstes europäisches Urteil zur KI-Copyright-Frage. Etabliert das Drei-Phasen-Modell für TDM → siehe [[TDM-Ausnahmen-KI-Training]] |

---

### Kneschke v. LAION
**OLG Hamburg, Dezember 2025**

| Feld | Detail |
|------|--------|
| **Sachverhalt** | Fotograf klagte gegen Non-Profit LAION wegen Aufnahme seines Bildes in ein Trainingsdataset |
| **Kernentscheidungen** | Sowohl wissenschaftliches TDM (§ 60d UrhG) als auch allgemeines TDM (§ 44b UrhG) anwendbar. Opt-out in natürlicher Sprache auf Website = unwirksam. Opt-out muss maschinenlesbar sein |
| **Status** | Leitende Berufungsentscheidung zu Opt-out-Anforderungen |
| **Relevanz** | Definiert die praktische Hürde für Rechteinhaber. Maschinenlesbarkeit als Minimum. Wichtig für Content-Ersteller und Verlage |

---

### Scholz-Deepfake
**LG Berlin II, 13.02.2024 (Az. 15 O 579/23)**

| Feld | Detail |
|------|--------|
| **Sachverhalt** | Satirischer Deepfake des Bundeskanzlers Scholz wurde veröffentlicht |
| **Kernentscheidung** | Deepfake verletzt Persönlichkeitsrecht durch "Zuordnungsverwirrung". Auch Satire rechtfertigt keine Zuordnungsverwirrung, wenn dem Betrachter nicht hinreichend klar ist, dass es sich um Satire handelt |
| **Relevanz** | Erste deutsche Entscheidung zu Deepfakes und Satire. Überträgt BVerfG-Satire-Methodik auf KI-generierte Inhalte → siehe [[Deepfakes-Rechtslage]] |

---

### Stimmimitation per KI
**LG Berlin II, 20.08.2025 (Az. 2 O 202/24)**

| Feld | Detail |
|------|--------|
| **Sachverhalt** | KI-generierte Imitation der Stimme eines Synchronsprechers wurde kommerziell verwendet |
| **Kernentscheidung** | KI-generierte Persönlichkeitsmerkmale werden dem Original gleichgestellt. 4.000 € Lizenzanalogie-Schadensersatz (2.000 € pro Video) |
| **Relevanz** | Präzedenzfall für KI-generierte Persönlichkeitsmerkmale jenseits von Bildern. Zeigt: Stimme, Aussehen, Stil — alles schützbar → siehe [[Persoenlichkeitsrecht-KI-Bilder]] |

---

### BGH DABUS
**BGH, 11.06.2024 (X ZB 5/22)**

| Feld | Detail |
|------|--------|
| **Sachverhalt** | Patentanmeldung mit KI-System DABUS als Erfinder |
| **Kernentscheidung** | KI kann nicht als Erfinder im Sinne des Patentrechts benannt werden |
| **Relevanz** | Deutsches Pendant zu Thaler v. Perlmutter. Bestätigt: Keine Rechtssubjektivität für KI im deutschen Recht |

---

## 🇬🇧 Vereinigtes Königreich

### Getty Images v. Stability AI
**UK High Court, November 2025**

| Feld | Detail |
|------|--------|
| **Sachverhalt** | Getty klagte gegen Stability AI wegen Nutzung von Getty-Bildern zum Training von Stable Diffusion |
| **Kernentscheidungen** | Model Weights sind keine "Kopien" von Trainingsbildern — entgegengesetzt zur Münchner Memorisierungs-Logik. Begrenzte Markenrechtsverletzung: Stable Diffusion-Outputs zeigten Getty-Wasserzeichen. Zentrale Copyright-Frage ungelöst, weil Getty primäre Ansprüche fallen ließ |
| **Relevanz** | Zeigt die Jurisdiktions-Divergenz: UK und DE kommen bei der "Sind Weights Kopien?"-Frage zu gegensätzlichen Ergebnissen. Markenrechts-Risiko bei Outputs ist real |

---

## 🇺🇸 USA

### Thaler v. Perlmutter
**DC Circuit, März 2025 (Supreme Court Petition ausstehend)**

| Feld | Detail |
|------|--------|
| **Sachverhalt** | Stephen Thaler wollte sein KI-System DABUS als Urheber eintragen lassen |
| **Kernentscheidung** | Menschliche Urheberschaft ist "bedrock requirement" des US Copyright. KI-Systeme können nicht Autor sein |
| **Status** | Thaler hat Petition an den Supreme Court eingereicht. Annahme-Entscheidung ausstehend |

### Zarya of the Dawn (USCO, 2023)

| Feld | Detail |
|------|--------|
| **Sachverhalt** | Graphic Novel mit KI-generierten Bildern (Midjourney) und menschlichem Text/Layout |
| **Kernentscheidung** | Einzelne KI-Bilder nicht schutzfähig. Aber: Menschliche Auswahl, Anordnung und Originaltext → Copyright als Compilation möglich |
| **Relevanz** | Klarste USCO-Guidance zur Abgrenzung menschlicher vs. KI-generierter Beiträge |

### "Fair Use Triangle" (Mitte 2025)

Drei Entscheidungen mit teils widersprüchlichen Ergebnissen:

| Fall | Ergebnis | Begründung |
|------|----------|------------|
| **Thomson Reuters v. Ross Intelligence** | Kein Fair Use | KI schuf direktes Marktsubstitut |
| **Bartz v. Anthropic** | Training = Fair Use, piratierte Bibliothek = nicht | "Quintessentially transformative". Ergebnis: Rekord-Settlement über **$1,5 Mrd.** |
| **Kadrey v. Meta** | Fair Use auch bei piratierten Materialien | Sehr weite Auslegung |

**Status:** Thomson Reuters-Berufung beim Third Circuit angenommen (Juni 2025). Auflösung der Widersprüche erwartet.

---

### Hermès v. Rothschild
**S.D.N.Y., USA**

| Feld | Detail |
|------|--------|
| **Sachverhalt** | Künstler verkaufte KI-generierte NFTs ("MetaBirkins"), die das Hermès-Birkin-Bag-Design nachahmten |
| **Kernentscheidung** | 133.000 $ Schadensersatz wegen Markenverletzung |
| **Relevanz** | Eine der ersten Verurteilungen wegen KI-generierter Markenverletzung. Zeigt: Markenrecht greift auch bei "künstlerischer" Neuinterpretation durch KI → siehe [[Markenrecht-KI-Bilder]] |

---

### Andersen v. Stability AI
**N.D. Cal., 3:23-cv-00201, USA**

| Feld | Detail |
|------|--------|
| **Sachverhalt** | Sammelklage von Künstlern gegen Stability AI, Midjourney und DeviantArt |
| **Kernentscheidung** | August 2024: Gericht ließ Urheberrechts- und Trade-Dress-Ansprüche zur Hauptverhandlung zu |
| **Status** | Discovery-Phase. Zentrale Frage: Ist das Reproduzieren eines Kunststils durch KI eine Urheberrechtsverletzung? |
| **Relevanz** | Potenzielle Leitentscheidung zu KI und Künstlerrechten in den USA |

---

## 🇪🇺 EU (CJEU)

### Like Company v. Google (C-250/25)
**Vorgelegt: April 2025 durch Budapester Gericht**

| Feld | Detail |
|------|--------|
| **Vorlagefragen** | 1. Stellt Chatbot-Output "Kommunikation an die Öffentlichkeit" dar? 2. Ist LLM-Training "Vervielfältigung"? 3. Greift die TDM-Ausnahme? |
| **Status** | Anhängig. Urteil erwartet Ende 2026 / Anfang 2027 |
| **Relevanz** | Erste EU-weite autoritative Entscheidung. Wird Fundament für alle nachfolgenden Fälle |

---

## 🇪🇺 EU Gesetzgebung (kein Urteil, aber rechtsrelevant)

### EU-Parlament Voss-Report (Juni 2025)
Entwurfsbericht, der darauf besteht, dass KI-generierte Inhalte nicht urheberrechtlich schutzfähig sein sollen.

### JURI-Studie zu TDM (Juli 2025)
Schlussfolgerung: Bestehende TDM-Ausnahmen waren nicht für großskaliges KI-Training konzipiert. Empfehlung: System vorheriger Autorisierung (faktisch Lizenzpflicht).

### DSM-Richtlinien-Review (mandatiert: Juni 2026)
Könnte den gesamten TDM-Rahmen für KI-Training neu strukturieren.

---

## Ausstehende Verfahren — Watchlist

| Verfahren | Instanz | Erwarteter Zeitraum | Relevanz |
|-----------|---------|-------------------|----------|
| GEMA v. OpenAI Berufung | OLG München → ggf. BGH | 2026–2027 | Memorisierung, TDM-Grenzen |
| Like Company v. Google | CJEU | Ende 2026–2027 | Erste EU-weite Leitentscheidung |
| Thaler v. Perlmutter | US Supreme Court (Annahme?) | 2026 | KI-Urheberschaft in den USA |
| Thomson Reuters v. Ross | Third Circuit | 2026 | Fair Use bei KI-Training |
| Andersen v. Stability AI | N.D. Cal. | 2026 | KI und Künstlerrechte / Trade Dress |
| DSM-Richtlinien-Review | EU-Kommission | Juni 2026 | Neustrukturierung TDM |
| § 201b StGB | Bundestag | 2026 | Strafrechtlicher Deepfake-Tatbestand |

---

## Verknüpfungen

- [[Urheberrecht-KI-Inhalte]] – Schutzfähigkeit und menschliche Beteiligung
- [[TDM-Ausnahmen-KI-Training]] – Drei-Phasen-Modell und Opt-out
- [[KI-Output-Haftung-Risiken]] – Haftung bei der Veröffentlichung
- [[EU-AI-Act-Ueberblick]] – Regulatorischer Rahmen
- [[Persoenlichkeitsrecht-KI-Bilder]] – Bildnisschutz bei KI-generierten Bildern
- [[Markenrecht-KI-Bilder]] – Markenverletzungen durch KI-Outputs
- [[Deepfakes-Rechtslage]] – Straf- und zivilrechtliche Einordnung

---

*Lebendes Dokument — bei neuen Entscheidungen ergänzen | Keine Rechtsberatung*

---
title: EU AI Act Überblick
type: reference
status: living
created: '2025-01-31'
updated: '2025-01-31'
tags:
  - ai-strategy
sources:
  - 'self-authored:loschke:strategy-consulting'
area: ai-strategy
audience:
  - fuehrungskraft
  - entscheider
  - praktiker
level: intermediate
intent:
  - verstehen
  - referenzieren
contains:
  - concept
  - vocabulary
  - tip
  - timeline
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# EU AI Act Überblick

> Die EU-Verordnung über Künstliche Intelligenz (KI-VO) – Was Anwender wissen müssen

---

## Kernaussage

Die EU KI-VO reguliert KI-Systeme nach Risiko. Für die meisten Unternehmen heißt das: Nicht jedes Tool ist betroffen, aber bei Hochrisiko-Anwendungen (besonders HR, Kreditvergabe, kritische Infrastruktur) gelten strenge Pflichten.

**Wichtig:** Die Verordnung tritt stufenweise in Kraft (2024-2027). Verbotene Praktiken gelten bereits, Hochrisiko-Pflichten ab August 2026.

---

## Was ist überhaupt "KI" im Sinne der Verordnung?

Nicht jede Software ist betroffen. Die rechtliche Definition (Art. 3 Nr. 1) setzt vier kumulative Kriterien:

| Kriterium | Bedeutung | Abgrenzung |
|-----------|-----------|------------|
| **Maschinengestützt** | Läuft auf Hardware/Software | Trivial erfüllt |
| **Autonomiegrad** | Nicht nur starre Wenn-Dann-Regeln | Excel-Makro = nein, E-Mail-Priorisierung durch KI = ja |
| **Anpassungsfähigkeit** | Kann (muss nicht) nach Inbetriebnahme weiterlernen | Statische Modelle können trotzdem KI sein |
| **Inferenz** | Generiert eigenständig Ausgaben, die nicht explizit programmiert waren | Kernmerkmal: Vorhersagen, Inhalte, Empfehlungen |

**Praxis-Implikation:** Ein regelbasiertes Scoring-System ist oft keine KI. Ein LLM-basierter Chatbot ist es definitiv.

---

## Die Risikoklassen – Das Herzstück der Regulierung

### Verbotene Praktiken (Art. 5) – No-Go

Diese Systeme sind in der EU illegal:

- **Social Scoring** durch Behörden
- **Biometrische Echtzeit-Fernidentifizierung** in öffentlichen Räumen (Strafverfolgung, enge Ausnahmen)
- **Emotionserkennung am Arbeitsplatz/in Bildungseinrichtungen** ("Ist der Mitarbeiter gestresst?")
- **Manipulative Dark Patterns** – unterschwellige Beeinflussung wesentlicher Entscheidungen

**Gilt ab:** Februar 2025

---

### Hochrisiko-KI (Art. 6 & Anhang III) – Strenge Pflichten

Ein System ist Hochrisiko, wenn es in kritischen Bereichen eingesetzt wird UND Entscheidungen über Menschen trifft oder maßgeblich beeinflusst.

**Die wichtigsten Anwendungsfelder:**

| Bereich | Beispiele |
|---------|-----------|
| **Biometrie** | Fernidentifizierung (nicht Echtzeit), Kategorisierung |
| **Kritische Infrastruktur** | Sicherheitskomponenten in Wasser, Gas, Strom, Verkehr |
| **Bildung** | Zulassungsentscheidungen, Prüfungsbewertung |
| **HR/Beschäftigung** | CV-Screening, Leistungsbewertung, Beförderungs-/Kündigungsentscheidungen |
| **Zugang zu Dienstleistungen** | Kreditwürdigkeitsprüfung, Versicherungs-Risikobewertung |

**Gilt ab:** August 2026

---

### Transparenzpflichten (Art. 50) – Kennzeichnung und Offenlegung

Systeme, die mit Menschen interagieren oder Inhalte generieren, unterliegen Transparenzpflichten. Das betrifft drei Kategorien:

| Kategorie | Pflicht | Beispiel |
|-----------|---------|----------|
| **Chatbots & Interaktion** | Nutzer müssen wissen, dass sie mit KI interagieren | "Ich bin ein KI-Assistent" |
| **Generierte Inhalte** | KI-generierte Inhalte im öffentlichen Interesse müssen als solche gekennzeichnet werden | Marketing, Social Media, PR-Texte |
| **Deepfakes** | Synthetische Audio-/Bild-/Videoinhalte müssen maschinenlesbar markiert werden | KI-generierte Bilder, Voice Cloning |

**Ausnahme:** Inhalte, die einer substanziellen menschlichen redaktionellen Überarbeitung unterzogen wurden, können von der Kennzeichnungspflicht ausgenommen sein. Die genaue Schwelle ist noch nicht definiert.

**Umsetzungsdetails:**

Die Kennzeichnungspflicht wird ab **2. August 2026** durchsetzbar. Anbieter generativer KI müssen technische Marker (Content Credentials / Wasserzeichen) in Outputs einbetten. Ein deutschsprachiges Interimslabel mit "KI" ist in Entwicklung, der finale Code of Practice wird bis Juni 2026 erwartet.

**Sanktionen:** Verstöße gegen Art. 50 können mit bis zu **15 Mio. € oder 3 % des weltweiten Jahresumsatzes** geahndet werden.

**Praxis-Empfehlung:** Nicht auf den Stichtag warten. Best Practice ist, KI-generierte Inhalte bereits jetzt proaktiv zu kennzeichnen und interne Disclosure-Standards zu etablieren. Das schafft Routine und reduziert Compliance-Druck ab August 2026.

---

### GPAI-Pflichten (Art. 51–56) – Anbieter von Foundation Models

Seit **2. August 2025** gelten Pflichten für Anbieter von General Purpose AI (GPAI) Models, die auf dem EU-Markt platziert werden — unabhängig davon, wo das Training stattfand ("Brussels Effect", Erwägungsgrund 106).

| Pflicht | Details |
|---------|---------|
| **Technische Dokumentation** | Modellarchitektur, Trainingsdaten, Evaluierungsergebnisse |
| **Copyright-Compliance** | Richtlinien zur Einhaltung des Urheberrechts, Opt-outs respektieren |
| **Training Data Summary** | Pflichtveröffentlichung nach EU AI Office Template (seit Juli 2025), inkl. Datenquellen, Modalitäten, Compliance-Maßnahmen |
| **Systemische Risiken** | Zusätzliche Pflichten für Modelle mit hohem Impact (Red Teaming, Incident Reporting) |

Der **GPAI Code of Practice** (veröffentlicht Juli 2025) verpflichtet unterzeichnende Anbieter, robots.txt und andere technische Opt-out-Protokolle zu respektieren.

**Relevanz für Anwender:** Diese Pflichten treffen primär Anbieter wie OpenAI, Google, Anthropic. Für Unternehmen, die GPAI-Modelle einsetzen, ist relevant: Verträge sollten dokumentieren, dass der Anbieter GPAI-konform ist. Bei Eigenentwicklung auf Basis von Open-Source-Modellen können GPAI-Pflichten auf den Deployer übergehen → siehe [[Provider-Falle]].

---

## Pflichten für Betreiber (Deployer) bei Hochrisiko-KI

Wenn du Hochrisiko-KI einsetzt (aber nicht herstellst), gelten nach Art. 26:

### Technische Maßnahmen

| Pflicht | Was bedeutet das? |
|---------|-------------------|
| **Eingabedaten prüfen** | Sind die Daten für den Zweck geeignet und repräsentativ? (Bias-Vermeidung) |
| **Logging aufbewahren** | Automatische Protokolle mind. 6 Monate speichern (Fehlerrekonstruktion) |

### Organisatorische Maßnahmen

| Pflicht | Was bedeutet das? |
|---------|-------------------|
| **Qualifizierte Aufsicht** | Aufsichtsperson muss KI-Output verstehen und hinterfragen können |
| **Eingriffsmöglichkeit** | System jederzeit stoppen oder Ergebnis überstimmen können ("Stop-Button") |
| **AI Literacy (Art. 4)** | Mitarbeiter im Umgang mit KI schulen (Funktionsweise, Grenzen, Risiken) |

### Informationspflichten

| An wen? | Was? |
|---------|------|
| **Betroffene** | Wenn KI Entscheidungen über Personen trifft (z.B. Bewerber) |
| **Betriebsrat** | Bei KI zur Leistungs-/Verhaltensüberwachung |

---

## Quick-Check: Betrifft uns das?

```
Nutzen wir ein System, das...
│
├── ...eigenständig Inhalte/Vorhersagen/Entscheidungen generiert?
│   └── NEIN → Wahrscheinlich keine KI im Sinne der VO
│   └── JA ↓
│
├── ...Emotionen am Arbeitsplatz analysiert oder Social Scoring macht?
│   └── JA → VERBOTEN. Sofort stoppen.
│   └── NEIN ↓
│
├── ...in HR, Kreditvergabe, Bildung, kritischer Infrastruktur eingesetzt wird?
│   └── JA → Wahrscheinlich HOCHRISIKO. Compliance-Prüfung starten.
│   └── NEIN ↓
│
├── ...mit Menschen interagiert oder Inhalte generiert?
│   └── JA → TRANSPARENZPFLICHT. Kennzeichnung implementieren.
│   └── NEIN → Minimale Pflichten.
```

---

## Typische Stolperfallen

| Stolperfalle | Warum gefährlich |
|--------------|------------------|
| "Das ist ja nur ChatGPT" | Wenn für HR-Entscheidungen genutzt → Hochrisiko |
| "Wir kaufen nur ein, wir entwickeln nicht" | Provider-Falle: Anpassungen können dich zum Hersteller machen → siehe [[Provider-Falle]] |
| "Open Source ist nicht reguliert" | Falsch – bei Hochrisiko-Anwendungen gelten alle Pflichten |
| "Wir warten auf finale Guidance" | Verbotene Praktiken gelten bereits, Hochrisiko ab 2026 |

---

## Nächste Schritte für Unternehmen

→ Siehe [[06_RESOURCES/Assets/Checkliste-KI-Compliance-Implementierung|Checkliste: KI-Compliance-Implementierung]]

1. **Bestandsaufnahme:** Welche KI-Tools im Einsatz? (Schatten-IT aufdecken)
2. **Risikoscreening:** Verboten? Hochrisiko? Transparenzpflichtig?
3. **Verträge prüfen:** CE-Konformität, technische Dokumentation
4. **Prozesse anpassen:** KI-Prüfung in bestehende Prozesse integrieren

---

## Verknüpfungen

- [[Provider-Falle]] – Wann Anwender zum Hersteller werden
- [[Zwei-Saeulen-Governance]] – Praktische Umsetzung im Unternehmen
- [[Adaptive-Governance-Modelle]] – Risikobasierte Steuerung
- [[Ethische-Prinzipien-KI]] – Über Compliance hinaus
- [[Urheberrecht-KI-Inhalte]] – Copyright-Schutz für KI-generierte Inhalte
- [[KI-Urteile-Referenz]] – Laufende Rechtsprechung zu KI und Copyright
- [[KI-Output-Haftung-Risiken]] – Haftung bei der Veröffentlichung von KI-Outputs

---

*Stand: Februar 2026 | Übergangsfristen beachten | Keine Rechtsberatung*

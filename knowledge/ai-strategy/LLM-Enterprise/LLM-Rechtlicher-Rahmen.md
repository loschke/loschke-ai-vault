---
title: 'LLM-Einsatz: Rechtlicher Rahmen für deutsche Unternehmen'
type: reference
status: living
created: '2025-02-07'
updated: '2025-02-07'
tags:
  - llm
  - datenschutz
  - dsgvo
  - ai-act
  - compliance
  - avv
  - enterprise
sources:
  - 'self-authored:loschke:strategy-consulting'
area: ai-strategy
audience:
  - fuehrungskraft
  - datenschutz
  - it-leitung
  - rechtsabteilung
level: intermediate
intent:
  - nachschlagen
  - beraten
contains:
  - regulation
  - compliance
  - framework
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# LLM-Einsatz: Rechtlicher Rahmen für deutsche Unternehmen

> Compass-Dokument: Regulatorischer Dreiklang (DSGVO, EU AI Act, DPF), Datenklassifizierung, AVV-Anforderungen, Anbieter-Compliance. Stand: Februar 2025.

---

## Regulatorischer Dreiklang

### DSGVO: Auftragsverarbeitung als Standardfall

Cloud-basierte LLM-Dienste sind typischerweise **Auftragsverarbeitung nach Art. 28 DSGVO**. AVV mit definierten Mindestinhalten ist zwingend: Gegenstand, Dauer, Zweck, Kategorien betroffener Personen, Weisungsgebundenheit, TOMs, Subunternehmer-Regelungen.

**Sonderfall Training mit Nutzerdaten:** Nutzt der Anbieter Eingabedaten für Modelltraining, entsteht potenziell **gemeinsame Verantwortlichkeit nach Art. 26 DSGVO**. Bei Consumer-Versionen (OpenAI Free/Plus, Claude Free, Gemini Consumer) ist Training Standard, sofern kein Opt-out erfolgt.

**DSFA-Pflicht:** Die DSK-Orientierungshilfe (Mai 2024) stellt klar: Datenschutz-Folgenabschätzung ist beim KI-Einsatz mit personenbezogenen Daten „in den allermeisten Fällen Pflicht". DSK-Blacklist Nr. 11 listet KI-gestützte Verarbeitung explizit.

**Drittlandstransfer – zweistufige Prüfung:**
1. Allgemeine Rechtmäßigkeit nach Art. 6 DSGVO
2. Spezifische Anforderungen Art. 44ff. für Transfer

| Anbieter-Status | Transfermechanismus |
|-----------------|---------------------|
| DPF-zertifiziert (Microsoft, Google, Amazon) | Transfer grundsätzlich zulässig |
| Nicht DPF-zertifiziert (z.B. Anthropic) | SCCs + Transfer Impact Assessment erforderlich |

### EU AI Act: Deployer-Pflichten

Die EU-KI-Verordnung (2024/1689) unterscheidet **Provider** (Entwickler) und **Deployer** (Anwender). Für Unternehmen als LLM-Nutzer:

**Seit 2. Februar 2025 verbindlich:**

| Pflicht | Inhalt |
|---------|--------|
| KI-Kompetenzpflicht (Art. 4) | Alle KI-nutzenden Mitarbeiter brauchen „angemessene KI-Kompetenz". Schulungen dokumentieren. |
| Verbotene Praktiken (Art. 5) | Keine manipulative/subliminal beeinflussende KI, kein Social Scoring. |

**Ab 2. August 2026 zusätzlich:**

| Pflicht | Inhalt |
|---------|--------|
| Hochrisiko-Deployer-Pflichten (Art. 26) | Bestimmungsgemäße Verwendung, menschliche Aufsicht, Eingabedatenqualität, Protokolle ≥6 Monate, Information Arbeitnehmervertreter |
| Transparenzpflichten (Art. 50) | KI-Interaktion kennzeichnen, Deepfakes/KI-Texte zu öffentlichen Interessen markieren |

**Wann wird ein LLM zum Hochrisiko-System?** Bei Einsatz in: Beschäftigung/Personal (Recruiting, Leistungsbewertung), Zugang zu Sozialleistungen, Bonitätsprüfung, Bildung, kritische Infrastruktur. Reine Assistenzfunktionen ohne Ersetzung menschlicher Entscheidungen lösen die Einstufung nicht aus.

Die Bundesnetzagentur ist seit September 2025 zentrale Aufsichtsbehörde mit kostenlosem KI-Service-Desk zur Selbsteinschätzung.

### Data Privacy Framework: Gültig, aber fragil

**Status:** Das EU-US DPF ist seit Juli 2023 durch Angemessenheitsbeschluss wirksam. Im September 2025 wies das EU-Gericht im Fall *Latombe v. Commission* eine direkte Anfechtung ab. Das DPF ist **rechtlich gültig** – eine Berufung (C-703/25 P) ist beim EuGH anhängig.

**Strukturelle Risiken:** Die Trump-Administration hat zentrale Pfeiler erschüttert. Im Januar 2025 wurden alle demokratischen PCLOB-Mitglieder entlassen (Gremium seitdem nicht beschlussfähig). FTC-Unabhängigkeit durch Entlassungen gefährdet. Executive Order 14086 als DPF-Fundament steht laut Project 2025 zur Aufhebung an.

**Signale aus der Praxis:** Microsofts Chefjustiziar bestätigte im Juni 2025 vor dem französischen Senat unter Eid, dass er nicht garantieren kann, dass Daten nicht an US-Behörden gehen. Ein US-Gericht untersagte OpenAI im Frühjahr 2025, bestimmte Logdaten zu löschen – selbst bei Art. 17-Anfragen.

**Praktische Konsequenz:** Deutsche DSB empfehlen Exit-Strategien. Norwegische Datatilsynet rät seit Februar 2025 zur Alternativ-Vorbereitung. Für Unternehmen: SCCs als Backup in alle US-Verträge integrieren, TIAs durchführen und dokumentieren, EU-basierte Alternativen evaluieren.

---

## Datenklassifizierung für LLM-Kontext

### Vier Schutzklassen

| Klasse | Beschreibung | Beispiele | Erlaubte Infrastruktur |
|--------|-------------|-----------|----------------------|
| **1 – Öffentlich** | Kein Personenbezug, allgemein zugänglich | Marketingtexte, Produktinfos, allgemeine Recherche | Alle LLM-Dienste inkl. Consumer |
| **2 – Intern** | Unternehmensintern, geringer Personenbezug | Prozessdoku, aggregierte Zahlen, Quellcode ohne PII/Secrets, Standardverträge | API oder Enterprise mit AVV, Training-Opt-out |
| **3 – Vertraulich** | Personenbezogene Daten nach Art. 4 DSGVO | Kundenmails mit Namen, Bewerbungen, CRM, individuelle Verträge, Meeting-Protokolle mit Teilnehmern | Enterprise mit No-Training-Commitment, EU-Hosting bevorzugt, Pseudonymisierung empfohlen |
| **4 – Streng vertraulich** | Besondere Kategorien Art. 9 DSGVO, reguliert | Gesundheitsdaten, BaFin-regulierte Finanzdaten, Mandantendaten (§203 StGB), biometrische Daten, Daten Minderjähriger | Ausschließlich On-Premise oder EU-souveräne Private Cloud mit Zero Data Retention |

### Infrastrukturanforderungen je Schutzklasse

| Schutzklasse | AVV | Training-Opt-out | EU-Hosting | Zero Retention | On-Premise |
|--------------|:---:|:----------------:|:----------:|:--------------:|:----------:|
| 1 – Öffentlich | Nein | Empfohlen | Nein | Nein | Nein |
| 2 – Intern | Ja | Ja | Empfohlen | Nein | Nein |
| 3 – Vertraulich | Ja | Ja | Ja | Empfohlen | Optional |
| 4 – Streng vertraulich | Ja | Ja | Ja | Ja | **Empfohlen** |

### Praxisbeispiele

| Datentyp | Schutzklasse | Besonderheiten |
|----------|:------------:|----------------|
| Kundenmails | 3 | Vor LLM-Verarbeitung: Namen, E-Mail, Telefon durch Platzhalter ersetzen |
| Bewerbungsunterlagen | 3-4 | KI im Recruiting = Hochrisiko-KI → DSFA, BR-Einbindung, Bewerber informieren, menschliche Letztentscheidung |
| Verträge | 2-4 | Standardklauseln (2), individuelle mit Parteinamen (3), Mandantenverträge (4) |
| Quellcode | 2-3 | Kritisch: API-Keys, Credentials, Geschäftsgeheimnisse, PII in Kommentaren? Im Zweifel: 3 |
| Meeting-Protokolle | 2-3 | Mit Teilnehmernamen: 3, ohne Personenbezug: 2 |

---

## Besondere Datenkategorien

| Datenkategorie | Öffentliche Cloud-LLM | Private Cloud (EU) | On-Premise |
|----------------|:---------------------:|:------------------:|:----------:|
| Allgemeine Geschäftsdaten | Mit Vorsicht | ✓ Mit AVV | ✓ |
| Gesundheitsdaten (Art. 9) | ❌ | Mit strengen TOMs | **Empfohlen** |
| Beschäftigtendaten | Nur anonymisiert | Mit Betriebsvereinbarung | Empfohlen |
| Mandanten-/Klientendaten (§203 StGB) | ❌ | Nur mit Einwilligung | **Empfohlen** |
| Finanzdaten (BaFin-reguliert) | ❌ | Mit BaFin-Compliance | **Empfohlen** |

**Gesundheitsdaten:** Verarbeitungsverbot Art. 9, strafbewehrte Schweigepflicht §203 StGB erstreckt sich auf Cloud-LLM-Eingabe.

**Beschäftigtendaten:** Mitbestimmung §87 Abs. 1 Nr. 6 BetrVG bei KI zur Verhaltens-/Leistungskontrolle. Art. 22 DSGVO verbietet ausschließlich automatisierte Entscheidungen mit rechtlicher Wirkung.

**Finanzdaten:** BaFin-Anforderungen (MaRisk, BAIT), DORA seit Januar 2025. EuGH-SCHUFA-Urteil (Dezember 2023): Score-Erstellung = automatisierte Einzelentscheidung, wenn Score maßgeblich Kreditentscheidung beeinflusst.

---

## AVV-Anforderungen für LLM-Verträge

### Consumer vs. API vs. Enterprise

| Merkmal | Consumer (Free/Plus) | API-Zugang | Enterprise |
|---------|:-------------------:|:----------:|:----------:|
| AVV verfügbar | ❌ | ✓ | ✓ (vollständig) |
| Training mit Daten | Ja (Opt-out möglich) | Nein | Explizit ausgeschlossen |
| Zero Data Retention | ❌ | Auf Anfrage | Verfügbar |
| SLAs | ❌ | Basic | Umfassend |
| Audit-Rechte | ❌ | Standard | Erweitert |
| **Unternehmenstauglich** | **Nein** | **Ja, mit AVV** | **Optimal** |

Consumer-Produkte sind für personenbezogene Daten im Unternehmenskontext **datenschutzrechtlich nicht geeignet**. Auch für private Consumer-Accounts: Richtlinien müssen Eingabe von Unternehmensdaten untersagen.

### Kritische AVV-Klauseln bei LLM-Diensten

| Klausel | Anforderung | Prüfpunkt |
|---------|-------------|-----------|
| Training-Ausschluss | Vertragliche Zusicherung, nicht nur Policy | Musterklausel: „wird Kundendaten nicht zum Trainieren, Nachtrainieren oder Verbessern von ML-Modellen verwenden" |
| Retention | Temporäre Datenhaltung für Abuse-Monitoring prüfen | OpenAI: 30d, Anthropic: 30d (ab Sep 2025: 7d), Azure: 30d (abschaltbar) |
| Human Review | Abuse-Monitoring durch US-Personal = de facto Drittlandstransfer | Azure EU Data Zone: Monitoring durch EU-Personal |
| Subunternehmer | Mehrstufige Infrastruktur prüfen | ≥30 Tage Benachrichtigung, Einspruchsrecht, gleiche Standards |
| Zero Data Retention | Nur bei Enterprise verfügbar | Musterklausel: „verarbeitet ausschließlich im Arbeitsspeicher, speichert nicht über Verarbeitungsdauer hinaus" |
| Output-Behandlung | Outputs können abgeleitete PII enthalten | Outputs als personenbezogene Daten behandeln, allen AVV-Pflichten unterwerfen |

### TOMs nach DSK 2025

| Schutzziel | Maßnahmen |
|------------|-----------|
| Datenminimierung | Input-Sanitization, Anonymisierungs-Pipelines, selektive Datenübermittlung |
| Vertraulichkeit | Verschlüsselung in Transit/Rest, Zugangskontrollen, API-Key-Management |
| Integrität | Input-Validierung, Output-Verifizierung, Adversarial-Attack-Detection |
| Transparenz | Logging aller Interaktionen, Modellentscheidungen dokumentieren |
| Intervenierbarkeit | Human-Oversight, Override-Möglichkeiten |
| Nichtverkettung | Zweckbindung, Session-Isolation, keine Cross-User-Inferenz |

---

## Anbieter-Compliance im Vergleich

### Compliance-Profil nach Anbieter

| Anbieter | DPF-zertifiziert | EU-Hosting | AVV-Qualität | Training-Ausschluss | Besonderheiten |
|----------|:----------------:|:----------:|:------------:|:-------------------:|----------------|
| **Azure OpenAI** | ✓ (Microsoft) | EU Data Zone, Germany West Central | Hoch (auto DPA) | ✓ Explizit | Kein Link zu OpenAI Inc., Abuse-Monitoring EU-Personal möglich |
| **OpenAI direkt** | ✓ | ❌ (EU nur Enterprise/Edu) | Mittel (aktiv abschließen) | ✓ API, ❌ Consumer | OpenAI Ireland Ltd. seit Feb 2025, 30d Retention, €15M Garante-Strafe |
| **Anthropic (Claude)** | ❌ | ❌ direkt | Mittel (SCCs nötig) | ✓ API/Enterprise, ❌ Consumer | Empfehlung: via AWS Bedrock oder Google Vertex AI mit EU-Hosting |
| **Google Vertex AI** | ✓ | EU-Regionen | Hoch | ✓ Explizit | Regionale Endpoints für Data Residency nötig, globaler EP = keine Souveränität |
| **AWS Bedrock** | ✓ | eu-central-1 (Frankfurt) | Hoch | ✓ Explizit | EU Cross-Region Inference Profiles routen nur innerhalb EU |
| **Aleph Alpha** | n/a (DE) | 100% Deutschland | Höchste | ✓ | BSI C5, AtMan Explainability, On-Premise via PhariaOS |
| **Mistral AI** | n/a (FR) | EU (Frankreich) | Hoch | ✓ | Apache 2.0 für Self-Hosting, OpenAI-kompatible API, kein CLOUD Act |
| **DeepL** | n/a (DE) | 100% DE/EU | Hoch | ✓ Pro: niemals Training | SOC 2 Type II, überlegene Qualität EU-Sprachen |

### Empfehlung nach Risikoprofil

| Datensensibilität | Empfohlene Lösung |
|-------------------|-------------------|
| Keine PII | Jeder Anbieter mit API-Zugang |
| Moderate Sensibilität | Azure OpenAI EU Zone, Mistral API, Claude API (via Bedrock) |
| Hochsensibel | Aleph Alpha, Mistral On-Premise, Azure OpenAI Enterprise |
| Regulierte Branchen | Azure OpenAI Enterprise, Aleph Alpha On-Premise |
| Öffentlicher Sektor | Aleph Alpha, Mistral EU, Azure OpenAI, STACKIT, Open Telekom Cloud |

---

## Positionen deutscher Datenschutzbehörden

### DSK-Orientierungshilfe KI und Datenschutz (Mai 2024)

Kernpositionen: Für jeden Verarbeitungsschritt separate Rechtsgrundlage erforderlich. Berechtigte Interessen (Art. 6(1)(f)) für LLM-Nutzung möglich, aber sorgfältige Interessenabwägung nötig. Art. 22 wird strikt ausgelegt: KI-generierte „Vorbereitungs-Entscheidungen" erfordern bedeutungsvolle menschliche Überprüfung. Verantwortlicher muss DSGVO-Konformität der Trainingsdaten verifizieren. DSFA „häufig" erforderlich.

### Landesbehörden

| Behörde | Dokument | Kerninhalte |
|---------|----------|-------------|
| LfDI Baden-Württemberg | Diskussionspapier Rechtsgrundlagen v2.0 (Oktober 2024) | Checkliste DSGVO-konformes Training, ONKIDA-Navigator seit Juli 2024 |
| HmbBfDI Hamburg | Checkliste LLM-Chatbots (November 2023), Diskussionspapier LLMs (Juli 2024) | Firmenaccounts, zusätzliche Auth, Nutzungsrichtlinien, Training-Opt-out |

### EDPB ChatGPT Taskforce (Mai 2024)

Legitimate Interest kann Rechtsgrundlage für Web Scraping und Training sein. Controller können Risiken nicht per AGB auf Betroffene übertragen. LLM-Outputs können verzerrt/erfunden sein – Nutzer über probabilistische Natur informieren.

### Relevante Enforcement-Entscheidungen

| Entscheidung | Datum | Kern |
|-------------|-------|------|
| Garante vs. OpenAI | Dezember 2024 | €15M Strafe: keine Rechtsgrundlage Training, Transparenzversagen, unzureichende Altersverifikation. Berufung läuft. |
| OLG Köln (Meta) | Mai 2025 | Legitimate Interest für Training mit öffentlichen Social-Media-Daten bestätigt. Präzedenz für Web-Scraping. |
| Latombe v. Commission (DPF) | September 2025 | EuGH bestätigt Angemessenheitsbeschluss, DPRC als ausreichend anerkannt. Berufung C-703/25 P anhängig. |

---

## Handlungsempfehlungen

### Sofort (bereits verbindlich)

- KI-Kompetenzpflicht Art. 4 EU AI Act: Schulungen dokumentieren, interne KI-Richtlinien erstellen
- Bestandsaufnahme aller KI-Systeme als Basis für Risikoklassifizierung
- AVVs mit allen Anbietern abschließen/aktualisieren, SCCs als Backup integrieren
- Transfer Impact Assessments durchführen und dokumentieren

### Kurzfristig (Q1/Q2 2026)

- Exit-Strategien für DPF-Wegfall entwickeln
- Workloads auf EU-Regionen-Verarbeitbarkeit prüfen
- Enterprise-Versionen bevorzugen, Consumer für Unternehmensdaten ausschließen
- Hochrisiko-Anwendungen (Recruiting, Bonitätsprüfung): Deployer-Pflichten ab August 2026 vorbereiten

### Dokumentationspflichten Checkliste

| Dokument | Pflicht |
|----------|---------|
| Auftragsverarbeitungsvertrag | Pro LLM-Anbieter |
| Verzeichnis der Verarbeitungstätigkeiten | Alle KI-Systeme erfassen |
| Datenschutz-Folgenabschätzung | Vor Einsatz bei PII |
| Transfer Impact Assessment | Pro US-Transfer |
| Interne KI-Richtlinie | Nutzungsregeln + Datenklassifizierung |
| Schulungsnachweise | KI-Kompetenz Mitarbeiter |
| Protokolle Hochrisiko-KI | ≥6 Monate Aufbewahrung |

---

## Verknüpfungen

- [[LLM-Infrastruktur-Optionen]] – Technische Bewertung aller Deployment-Optionen
- [[LLM-Use-Cases-Matching]] – Use Cases, Modellempfehlungen, Praxisberichte
- [[EU-AI-Act-Ueberblick]] – Detaillierter AI Act Überblick
- [[Provider-Falle]] – Strategische Abhängigkeiten bei Cloud-Anbietern
- [[Adaptive-Governance-Modelle]] – Governance-Frameworks für KI

---

*Recherche-Stand: Januar/Februar 2025. Konsolidiert aus drei Compass-Dokumenten.*

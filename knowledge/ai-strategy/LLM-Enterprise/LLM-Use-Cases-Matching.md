---
title: LLM Use Cases & Matching für deutsche Unternehmen
type: method
status: stable
created: '2025-02-07'
updated: '2025-02-07'
tags:
  - llm
  - use-cases
  - matching
  - modelle
  - routing
  - enterprise
  - praxis
sources:
  - 'self-authored:loschke:strategy-consulting'
area: ai-strategy
audience:
  - fuehrungskraft
  - it-leitung
  - fachabteilung
  - cto
level: intermediate
intent:
  - nachschlagen
  - beraten
  - entscheiden
contains:
  - use-cases
  - matching
  - models
  - routing
  - praxis
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# LLM Use Cases & Matching für deutsche Unternehmen

> Compass-Dokument: Use-Case-Katalog nach Unternehmensbereichen, Matching-Matrix (Daten → Infrastruktur), Modellempfehlungen, Routing-Architekturen, Praxisberichte. Stand: Januar 2026.

---

## Use-Case-Katalog nach Unternehmensbereichen

### Marketing & Kommunikation – Höchste Adoption

Reifster LLM-Use-Case. 40% Zeitersparnis bei Texterstellung, doppelt so schnelle Kampagnenerstellung. Verarbeitete Daten überwiegend unkritisch.

| Use Case | Datentypen | Sensibilität | Praxisbeispiel |
|----------|-----------|:------------:|----------------|
| Social-Media-Content | Marketingtexte, Markenrichtlinien | Niedrig | HYGH: 5,5h/Woche pro MA gespart |
| SEO-Optimierung | Keywords, Web-Analytics | Niedrig | Automatische Meta-Beschreibungen |
| Personalisierte Kampagnen | Kundensegmente, Verhaltensdaten | Mittel-Hoch | Henkel + SAP für globale Kampagnen |
| Übersetzung/Lokalisierung | Marketingtexte | Niedrig | Spotify: 60+ Sprachen für Support |

**Achtung:** Sobald Kundendaten für Personalisierung einfließen → mindestens EU-Cloud mit AVV.

### HR & Recruiting – Besondere Sorgfalt

Regelmäßig personenbezogene Daten (CVs, Bewertungen, Performance). Unilever: 50% Zeitersparnis beim CV-Screening.

| Use Case | Sensibilität | Mindestanforderung |
|----------|:------------:|-------------------|
| Stellenausschreibungen erstellen | Niedrig | Standard-Cloud möglich |
| Bewerbungsscreening | **Hoch** | EU-Cloud + AVV, Art. 22 DSGVO (Human-in-the-Loop) |
| Interview-Feedback-Zusammenfassungen | **Hoch** | EU-Cloud + Art. 22 beachten |
| Onboarding-Chatbots | Mittel-Hoch | EU-Cloud + Datenschutzerklärung |

**Rechtlich:** Automatisierte Entscheidungen im Bewerbungsprozess → Art. 22 DSGVO, menschliche Überprüfung Pflicht. EU AI Act: Recruiting = Hochrisiko-KI → DSFA, BR-Einbindung, Bewerber informieren.

### Kundenservice – Schnellster ROI

3x schnellere Anfragenbearbeitung, 40% kürzere Lösungszeiten. Klarna: 150 Mio. Nutzer mit ChatGPT Enterprise.

| Use Case | Sensibilität | Empfohlene Infrastruktur |
|----------|:------------:|-------------------------|
| FAQ-Chatbot (ohne Kundendaten) | Niedrig | Alle Optionen |
| Chatbot mit Kundenidentifikation | **Hoch** | EU-Cloud oder On-Premise |
| E-Mail-Triage und Antwortvorschläge | **Hoch** | EU-Cloud + AVV |
| Sentiment-Analyse | Mittel | EU-Cloud empfohlen |
| Call-Zusammenfassungen | **Hoch** | EU-Cloud oder besser |

### IT & Entwicklung – $4 Mrd. Marktvolumen

50% aller Entwickler nutzen täglich AI-Tools, in Top-Unternehmen 65%. Cursor: $200M Revenue vor erstem Vertriebsmitarbeiter.

| Use Case | Sensibilität | Besondere Risiken |
|----------|:------------:|-------------------|
| Code-Completion | Mittel-Hoch | Geschäftsgeheimnisse im Code |
| Code-Review | Mittel-Hoch | API-Keys, Credentials |
| Dokumentationserstellung | Mittel | Interne Systembeschreibungen |
| Test-Generierung | Mittel | Testdaten können PII enthalten |
| Legacy-Migration | **Hoch** | Proprietäre Algorithmen |

**Kritisch:** Code enthält oft API-Keys, Credentials, Geschäftsgeheimnisse. Lokale Modelle oder Azure OpenAI mit Zero Data Retention für sensible Codebases.

### Recht & Compliance – $650 Mio. Markt

LLMs performen bei Vertragsanalyse auf Junior-Lawyer-Niveau, 50% kürzere Due-Diligence-Zeiten. Deutsche Bank investierte in Aleph Alpha für Explainable AI.

| Use Case | Sensibilität | Empfehlung |
|----------|:------------:|------------|
| Standardvertrag-Analyse | Mittel-Hoch | EU-Cloud oder deutsche Anbieter |
| M&A Due Diligence | **Streng vertraulich** | On-Premise oder Aleph Alpha |
| Compliance-Checks | Mittel | EU-Cloud akzeptabel |
| Legal Research | Niedrig | Alle Optionen |

### Finanzen – Auditierbarkeit erforderlich

60% der CFOs nutzen GenAI für Reporting. Deutsche Bank: „DB Lumina" (Gemini-basiert). Mastercard: 300% bessere Betrugserkennung.

| Use Case | Sensibilität | Branchenspezifisch |
|----------|:------------:|-------------------|
| Management-Reporting | Mittel-Hoch | BaFin, MaRisk |
| Forecasting-Unterstützung | Mittel | Audit-Trail erforderlich |
| Fraud Detection | **Hoch** | C5-Zertifizierung oft gefordert |
| Investment Research | Niedrig-Mittel | Öffentliche Daten unproblematisch |

### Geschäftsführung

1+ Stunde/Tag Zeitersparnis bei Recherche, 2+ Stunden/Woche durch Meeting-Insights. 80% der Fortune 500 nutzen ChatGPT für Executive-Funktionen.

| Use Case | Sensibilität | Praktische Umsetzung |
|----------|:------------:|---------------------|
| Meeting-Protokolle | Mittel-Hoch | EU-Cloud oder lokale Transkription |
| Strategiepapiere | **Hoch** | Strenge Zugriffskontrollen |
| Board-Präsentationen | **Hoch** | Nur autorisierte Nutzer |
| Trend-Analyse | Niedrig | Alle Optionen |

---

## Matching-Matrix: Use Case → Infrastruktur

| Use Case | Daten-Kategorie | US-Cloud | EU-Cloud | DE Cloud | On-Premise |
|----------|:--------------:|:--------:|:--------:|:--------:|:----------:|
| Marketing-Texte (ohne Kundendaten) | Öffentlich | ✅ | ✅ | ✅ | ✅ |
| Social-Media mit Targeting | Vertraulich | ❌ | ✅ | ✅ | ✅ |
| Stellenausschreibungen | Intern | ✅ | ✅ | ✅ | ✅ |
| **Bewerbungsscreening** | **Vertraulich** | ❌ | ✅+AVV | ✅ | ✅ |
| FAQ-Chatbot (anonym) | Öffentlich | ✅ | ✅ | ✅ | ✅ |
| **Kundenservice mit Kundendaten** | **Vertraulich** | ❌ | ✅+AVV | ✅ | ✅ |
| Code-Assistenz (Open Source) | Öffentlich | ✅ | ✅ | ✅ | ✅ |
| **Code mit Geschäftsgeheimnissen** | **Vertraulich** | ❌ | ⚠️ | ✅ | ✅ Empf. |
| Vertragsanalyse (Standard-NDAs) | Intern-Vertraulich | ⚠️ | ✅ | ✅ | ✅ |
| **M&A Due Diligence** | **Streng vertraulich** | ❌ | ⚠️ | ✅ | ✅ Empf. |
| **Patientendaten-Analyse** | **Streng vertraulich** | ❌ | ❌ | ✅+DSFA | ✅ Empf. |
| Finanzreporting | Vertraulich | ⚠️ | ✅ | ✅ | ✅ |
| Meeting-Transkription | Vertraulich | ⚠️ | ✅ | ✅ | ✅ |

---

## Modellempfehlungen

### Use Cases für lokale Modelle (7B-13B)

| Use Case | Empfohlenes Modell | Qualitätsniveau | Hardware |
|----------|-------------------|-----------------|---------|
| FAQ-Chatbot (strukturiert) | Llama 3.1 8B | ~70% GPT-4o | 1x RTX 4090 |
| Ticket-Klassifikation | Mistral 7B | 67-73% Accuracy | 1x RTX 4090 |
| Einfache Zusammenfassungen | Llama 3.2 3B | Ausreichend | Consumer-GPU (6GB) |
| Code-Completion (Basis) | Qwen 2.5 Coder 7B | Gut | 1x RTX 4090 |
| E-Mail-Vorlagen | Mistral 7B | Gut | 1x RTX 4090 |
| Sentiment-Analyse | Llama 3.1 8B | Gut | 1x RTX 4090 |
| Datenextraktion (strukturiert) | Mistral 7B | Zuverlässig | 1x RTX 4090 |

**Deployment:** Ollama für Einstieg/Prototyping, vLLM für Produktion (3,23x besserer Durchsatz).

### Use Cases, die Frontier-Modelle erfordern

| Use Case | Warum Frontier | Empfehlung | EU-Alternative |
|----------|---------------|------------|----------------|
| Komplexe Vertragsanalyse (>100 S.) | Langer Kontext, Reasoning | Claude 3.5 Sonnet (200K) | Mistral Large 3 (256K) |
| Multimodale Dokumentenverarbeitung | Bild+Text+Tabellen | GPT-4o | Claude 4 Sonnet |
| Legacy-Code-Migration | Tiefes Verständnis alter Codebasen | Claude 3.5 Sonnet | – |
| Kreatives Marketing (Premium) | Nuancierte Sprache, Markentonalität | Claude 3.5 Sonnet | – |
| Agentic Workflows | Komplexes Multi-Step-Reasoning | GPT-4o / Claude | – |
| Wissenschaftliche Textanalyse | Fachterminologie, Präzision | GPT-4o | – |

### Konkrete Empfehlungen nach Domäne

**Code-Assistenz:** Qwen 2.5 Coder 32B lokal (73,7% Aider Benchmark, vergleichbar GPT-4o) oder Claude 3.5 Sonnet Cloud (64% Agentic Coding, beste Debugging-Fähigkeiten).

**Vertragsanalyse:** Claude 3.5 Sonnet für Komplexes (200K Kontext), Mistral Large 3 für DSGVO-konforme EU-Lösung, Ensemble-Ansatz (GPT-4o + Claude) für höchste Genauigkeit.

**Kundenservice-Chatbot:** GPT-4o mini für High-Volume FAQ (126 Tokens/s), Gemini 2.5 Flash für Real-time (557 Tokens/s), Claude 3.5 Sonnet für komplexe Anfragen.

**Marketing-Content:** Llama 3.3 70B lokal für Datenschutz, GPT-4o mini für schnelle Social Posts, Claude 3.5 Sonnet für Premium-Kampagnen.

**Übersetzungen:** Llama 3.1 8B für Basis, GPT-4o für Fachübersetzungen, Qwen 2.5 72B für asiatische Sprachen (29+ nativ).

### Cloud-Modelle Kostenvergleich

| Modell | Input/1M Tokens | Output/1M Tokens | Ideal für |
|--------|-----------------|------------------|-----------|
| DeepSeek V3 | **$0,14** | $2,19 | Maximale Kostenersparnis |
| GPT-4o mini | $0,15 | $0,60 | Volume-Anwendungen |
| Gemini 2.5 Flash | $0,15 | $0,60 | Speed-kritische Apps |
| Mistral Medium 3 | $0,40 | $2,00 | EU-Anbieter, Preis-Leistung |
| Claude Haiku | $0,80 | $4,00 | Günstige Anthropic-Option |
| Claude 3.5 Sonnet | $3,00 | $15,00 | Code/Kreativ |
| GPT-4o | $5,00 | $20,00 | Frontier-Performance |

**Praxis:** 100 tägliche Chatbot-Nutzer (je ~50K Tokens): ~$4.500/Mo (GPT-4) → ~$450/Mo (GPT-4o mini) bei ~85% Qualität.

---

## Hybride Routing-Architekturen

### Entscheidungsmatrix

| Kriterium | Lokales Modell | Cloud-API |
|-----------|:--------------:|:---------:|
| Sensible Daten (PII, Geschäftsgeheimnisse) | ✅ Bevorzugt | ⚠️ Nur mit DPA |
| Latenz-kritisch | ✅ Edge | ⚠️ Netzwerk-Overhead |
| Variable Last / Peak-Traffic | ⚠️ Überkapazität nötig | ✅ Elastisch |
| <8.000 Anfragen/Tag | ❌ Zu teuer | ✅ Pay-per-use |
| >8.000 Anfragen/Tag | ✅ Break-even | ⚠️ Kosten steigen |
| Air-gapped | ✅ Einzige Option | ❌ |

### Pattern 1: Komplexitätsbasiertes Routing

Eingehende Anfrage → Klassifikator (BERT/ModernBERT, ~10ms) → Einfach: Haiku/Mini ($0,15) / Komplex: GPT-4o/Claude ($5,00). **Kosteneinsparung bis 85%** (RouteLLM-Framework).

### Pattern 2: Sensitivitätsbasiertes Routing

Eingehende Anfrage → PII-Detection (Presidio) + Klassifikation → Sensibel: Lokal (Llama) / Standard: EU-Cloud (Azure EU).

### Gateway-Lösungen

**LiteLLM (Open Source):** Proxy für 100+ LLMs, PII-Maskierung via Presidio, Multi-Tenant-Tracking, Fallback-Logik. Nutzer: Netflix, Lemonade, RocketMoney.

**Amazon Bedrock Intelligent Routing:** Automatische Modellauswahl, ~30% Kostensenkung, Managed.

### Praxis-Case

SaaS-Support-Anbieter: Kosten von $47.000 → $29.000/Mo. FAQs → Claude Haiku, komplexe Prompts → GPT-4o Mini, Bulk-Summaries → Self-hosted 7B auf Spot-H100s. Payback in 4 Monaten, „zero user complaints".

### Break-Even Self-Hosting

| Modellgröße | Break-Even | Empfehlung |
|-------------|-----------|------------|
| 7B | Wenige Monate | Früh wirtschaftlich |
| 30-70B | ~2 Jahre | Bei hohem Volumen |
| 70B+ | ~5 Jahre | Nur bei strategischer Notwendigkeit |

**Kritischer Schwellenwert:** >8.000 Konversationen/Tag für Self-Hosting-Rentabilität.

**Versteckte Kosten:** Personal = 70-80% der Deployment-Kosten (ML-Ingenieure: $180-300K/Jahr), Kühlung 40-54% der Gesamtleistung.

---

## ROI-Bewertung nach Use Case

### Hoher ROI trotz Compliance-Aufwand

| Use Case | Kennzahl |
|----------|---------|
| Kundenservice-Chatbots | 3x schnellere Bearbeitung, 60% Routineautomatisierung |
| Code-Assistenz | 15%+ Velocity-Gains, $4 Mrd. Marktvalidierung |
| Due Diligence | 50% kürzere Durchlaufzeiten |
| HR-Screening | 50% Zeitersparnis bei hohem Volumen |

### Fraglicher ROI

| Use Case | Problem |
|----------|---------|
| Patientendaten-Analyse | Regulatorische Hürden überwiegen oft Nutzen |
| Automatisierte HR-Entscheidungen | Art. 22 = immer Human-in-the-Loop |
| Vertrauliche Strategiepapiere | Risiko Datenlecks vs. marginale Zeitersparnis |

### 80%-Regel

Für **80% der Unternehmens-Use-Cases** reichen GPT-4o mini oder Claude Haiku – bei 80% Kosteneinsparung vs. Frontier. Qwen 2.5 Coder 32B ist beste Open-Source-Option für Code.

---

## Praxisberichte deutscher Unternehmen

### Siemens Industrial Copilot (Hermes Award 2025)

Erster holistischer GenAI-Assistent für Industrie. PLC-Code-Generierung aus natürlicher Sprache, Predictive Maintenance. Sachsenmilch (größte Molkerei Europas): 24/7-Betrieb gesichert. Lesson: „Speed and simplicity – benefits of automation widely accessible."

### Bosch Qualitätskontrolle

€500 Mio. Effizienzgewinne über 15 Werke. Deep Learning für automatische Defekterkennung. Entwicklung im Cyber Valley (Stuttgart/Tübingen).

### SAP Industrial AI Cloud (November 2025)

Partner: Deutsche Telekom, NVIDIA, Siemens, Deutsche Bank, Perplexity. ~€1 Mrd. Investment. Ziel: „Industrial AI Made in Europe" mit digitaler Souveränität. München Data Center, H100-GPUs bis Q1 2026.

### Allianz – ~400 GenAI Use Cases produktiv (Dezember 2024)

Enterprise Knowledge Assistant (EKA): 10-15% bessere Antwortgenauigkeit durch RAG. Claims Automation: 60% schnellere Genehmigung. Governance: AI Data Council, Human-in-the-Loop als Grundprinzip. Upskilling: DataXcellence (Bronze → Platinum), 158.000 MA.

> **Allianz Lesson:** „LLMs arbeiten gut für allgemeine Sprache, aber noch nicht für technische Versicherungssprache wie Policenanalyse."

---

## Typische Fehler und Best Practices

### Anti-Patterns

| Fehler | Konsequenz | Lösung |
|--------|------------|--------|
| Compliance als Nachgedanke | Teure Nacharbeit, Bußgelder | Legal/Security ab Design-Phase |
| Alle Fehler gleich behandeln | Kritische übersehen | Risk-aware Evaluation |
| RAG als Default für alles | Langsam, inkonsistent | Structured Lookups für häufige Queries |
| Unbegrenzter LLM-Zugriff | Datenlecks, Jailbreaks | Permission-based Controls, AI Gateway |
| Nur NLP-Benchmarks | Keine Business-Relevanz | Domain-spezifische Metriken |
| Zu schnelle Skalierung | 95% Piloten scheitern beim Scaling (MIT) | MVP → iterativ erweitern |

**Warnende Beispiele:** Chevrolet-Chatbot bot Auto für $1 an (PR-Desaster). Air Canada-Chatbot erfand Reiserichtlinie – Gericht: Unternehmen muss einhalten.

### Best Practices (bewährt bei Siemens, Allianz, Bosch)

1. **MVP mit klarem Use Case** – messbarer ROI
2. **Assistive Use Cases zuerst** – Entwürfe, Zusammenfassungen, nicht autonome Entscheidungen
3. **Human-in-the-Loop beibehalten** – besonders bei externen Outputs
4. **Automatisierung schrittweise erhöhen** – nach Vertrauensaufbau
5. **Feedback-Loops etablieren** – kontinuierliche Verbesserung

### Governance Framework (5 Domänen)

1. **Strategic Alignment:** GenAI mit Unternehmenszielen, Risikoappetit definieren
2. **Data & Compliance:** Zugriffskontrollen, AI Act Mapping, Audit Trails
3. **Operational Management:** Vendor Assessment, IT-Security
4. **Ethics & Responsibility:** Bias-Erkennung, Transparenz, Social Impact
5. **Accountability & Performance:** KPIs, Continuous Monitoring, Board Reporting

### Mitarbeiter-Richtlinien (Kurzfassung)

| ❌ Verboten | ✅ Pflicht |
|------------|-----------|
| PII in öffentliche KI-Tools (ChatGPT Free/Plus) | Genehmigte Enterprise-Tools verwenden |
| Geschäftsgeheimnisse, API-Keys in Cloud-LLMs | KI-generierte Inhalte vor externer Nutzung prüfen |
| Unkontrollierter Zugriff auf LLMs | KI-Nutzung dokumentieren (Audit-Trail) |
| | Bei Unsicherheit: Datenschutz/Legal fragen |

---

## Verknüpfungen

- [[LLM-Rechtlicher-Rahmen]] – DSGVO, AI Act, AVV-Anforderungen
- [[LLM-Infrastruktur-Optionen]] – Technische Bewertung aller Deployment-Optionen
- [[Drei-Gaps-Modell]] – Strukturierung von AI-Adoption-Herausforderungen
- [[Provider-Falle]] – Lock-in-Risiken bei Cloud-Anbietern

---

*Recherche-Stand: Januar 2026. Konsolidiert aus drei Compass-Dokumenten.*

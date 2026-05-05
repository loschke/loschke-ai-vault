---
title: LLM-Infrastruktur-Optionen für deutsche Unternehmen
type: reference
status: living
created: '2025-02-07'
updated: '2025-02-07'
tags:
  - llm
  - infrastruktur
  - on-premise
  - cloud
  - gpu
  - hosting
  - enterprise
sources:
  - 'self-authored:loschke:strategy-consulting'
area: ai-strategy
audience:
  - it-leitung
  - cto
  - datenschutz
  - fuehrungskraft
level: intermediate
intent:
  - nachschlagen
  - beraten
  - entscheiden
contains:
  - infrastructure
  - deployment
  - hosting
  - hardware
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# LLM-Infrastruktur-Optionen für deutsche Unternehmen

> Compass-Dokument: Sechs Infrastruktur-Kategorien im Vergleich – von On-Device bis US-Cloud. Technische Spezifikationen, Kosten, Datenschutz-Bewertung, Anbieter-Details. Stand: Januar 2026.

---

## Entscheidungsmatrix Gesamtübersicht

| Kategorie | Datenschutz | Modellqualität | Komplexität | Kosten/Monat | Team-Bedarf | Skalierung |
|-----------|:-----------:|:--------------:|:-----------:|:------------:|:-----------:|:----------:|
| **1. On-Device (lokal)** | ★★★★★ | ★★★☆☆ | ★★☆☆☆ | €0-500 (HW einmalig) | 0-0,5 FTE | 1-50 User |
| **2. On-Premise Server** | ★★★★★ | ★★★★☆ | ★★★★☆ | €2.000-50.000 | 1-5 FTE | 10-1.000+ |
| **3. Deutsche GPU-Hoster** | ★★★★★ | ★★★★☆ | ★★★☆☆ | €184-8.600 | 0,5-2 FTE | 10-500 |
| **4. EU Cloud-LLM (API)** | ★★★★☆ | ★★★★☆ | ★★☆☆☆ | €100-5.000 | 0,5 FTE | 10-10.000+ |
| **5. US-Anbieter EU-Region** | ★★★☆☆ | ★★★★★ | ★★☆☆☆ | €200-10.000 | 0,5 FTE | 10-10.000+ |
| **6. US-Anbieter direkt** | ★★☆☆☆ | ★★★★★ | ★☆☆☆☆ | €50-5.000 | 0,5 FTE | 10-10.000+ |

---

## 1. Lokaler Betrieb (On-Device)

Maximale Datensouveränität. Keine Daten verlassen das Unternehmensnetzwerk. Durch Quantisierung und Apple Silicon seit 2024/25 praxistauglich für KMU.

### Software-Optionen

| Tool | Lizenz | Stärken | Einschränkungen | Empfehlung |
|------|--------|---------|-----------------|------------|
| **Ollama** | MIT (kostenlos) | OpenAI-kompatible API, 500+ Modelle, 20% schneller als LM Studio | Keine GUI | Entwickler, Produktions-API |
| **LM Studio** | Frei für Privat | GUI, 1.000+ Modelle, RAG integriert | Unternehmenslizenz prüfen | Business-User, Prototyping |
| **LocalAI** | Apache 2.0 | Multimodal (Text, Bild, Audio), OpenAI-Drop-in | Höhere Komplexität | Umfassende Self-Hosted-Lösung |
| **GPT4All** | Open Source | CPU-optimiert, LocalDocs-RAG | Begrenzte Modellgrößen | Einsteiger, Offline |

### Hardware-Anforderungen (Q4-Quantisierung)

| Modellgröße | VRAM/RAM | Empfohlene GPU | Tokens/Sek | Qualität vs GPT-4 |
|-------------|----------|----------------|------------|-------------------|
| **7B** | 4-6 GB | RTX 3060 12GB, M2 | 30-60 t/s | ~65% |
| **13B** | 8-12 GB | RTX 4070 16GB, M3 Pro | 15-30 t/s | ~75% |
| **30B** | 18-24 GB | RTX 4090 24GB, M3 Max | 7-15 t/s | ~85% |
| **70B** | 40-48 GB | Multi-GPU oder M4 Ultra | 5-10 t/s | ~90% |

**Praxistaugliche lokale Modelle:** Llama 3.2 (7B/8B), Mistral 7B, Qwen 3 8B, Phi-3 für Zusammenfassungen, einfache Code-Generierung, Chatbots. Für komplexes Reasoning: mindestens 13B.

### Multimodale lokale Optionen

**Bildgenerierung (Stable Diffusion/SDXL):** 8-16 GB VRAM, 20-30s pro 1024×1024 auf RTX 4070. ComfyUI oder Automatic1111.

**Speech-to-Text (Whisper.cpp/faster-whisper):** Whisper large-v3 erreicht 90-98% Genauigkeit für Deutsch, 2-4x Echtzeit auf RTX 3060. faster-whisper ist 4x schneller als Original.

**OCR:** PaddleOCR oder EasyOCR mit deutschem Sprachpaket, läuft auf CPU.

### Kosten und ROI

| Setup | Hardware-Invest | Betriebskosten/Monat | Amortisation vs API |
|-------|-----------------|----------------------|---------------------|
| Einstieg (7B) | €400-500 | ~€20 (Strom) | 1-2 Monate |
| Mittelklasse (13B-30B) | €1.000-3.000 | ~€50 | 3-6 Monate |
| High-End (70B) | €2.500-6.000 | ~€100 | 6-12 Monate |
| MacBook M3 Pro | €2.500 | €0 (mobil) | 3-5 Monate |

**Datenschutz-Bewertung: 5/5** – Vollständige Kontrolle, keine externen Datenflüsse.

---

## 2. On-Premise Server

Balance zwischen Kontrolle und Leistungsfähigkeit für Unternehmen mit höheren Anforderungen an Skalierung und Modellqualität.

### Inference-Frameworks

| Framework | Durchsatz | Enterprise-Reife | Besonderheiten |
|-----------|-----------|------------------|----------------|
| **vLLM** | 2-4x höher als Legacy | ★★★★★ | PagedAttention, Continuous Batching, Red Hat-Integration |
| **TGI (HuggingFace)** | 3x Token-Kapazität vs vLLM (v3.0) | ★★★★★ | Deutsche Telekom nutzt TGI |
| **NVIDIA Triton + TensorRT-LLM** | Industrie-führend | ★★★★★ | Maximum GPU-Auslastung, Enterprise-Support |
| **Ollama Server** | Limitiert (~0,6 req/s) | ★★☆☆☆ | Einfach, nicht für hohe Last |

### GPU-Hardware

| GPU | Speicher | Geeignet für | Listenpreis | Cloud-Stundensatz |
|-----|----------|--------------|-------------|-------------------|
| **NVIDIA L40S** | 48 GB GDDR6 | 7B-30B | ~€7.500 | €1-2/h |
| **NVIDIA A100 80GB** | 80 GB HBM2e | 30B-70B | ~€18.000 | €2-3/h |
| **NVIDIA H100 80GB** | 80 GB HBM3 | 70B+ | ~€30.000 | €3-5/h |
| **NVIDIA H200** | 141 GB HBM3e | 70B-405B | ~€31.000 | €2,50/h |

**Wichtig:** RTX 4090 und Consumer-GPUs sind laut NVIDIA-EULA für Datacenter-Betrieb untersagt. Produktive Server erfordern Professional-/Datacenter-GPUs.

### Architektur nach Skalierung

| Nutzergruppe | Hardware | Investment | Betrieb |
|-------------|----------|------------|---------|
| 10-50 Nutzer | 1 Server, 1-2× L40S, vLLM/TGI, Nginx | €15.000-25.000 | 0,5 FTE |
| 100-500 Nutzer | K8s-Cluster, 2-4 Server à 2× A100, GPU Operator | €150.000-300.000 | 2-3 FTE |
| 1.000+ Nutzer | DGX/8× H100 NVLink, Triton + TensorRT-LLM | €1M+ | 5-10 FTE |

### Total Cost of Ownership (3 Jahre)

| Deployment | Jahr 1 | Jahre 2-3 | Gesamt |
|------------|--------|-----------|--------|
| Klein (50 User) | €73.000 | €96.000 | €169.000 |
| Mittel (500 User) | €618.000 | €796.000 | €1,4M |
| Groß (1.000+ User) | €2,9M | €2,8M | €5,7M |

**Datenschutz-Bewertung: 5/5** – Vollständige Datenhoheit, physische Kontrolle.

---

## 3. Deutsche GPU-Hoster

Mittelweg: Enterprise-Hardware ohne eigenes Datacenter, vollständige DSGVO-Konformität, deutsche Gerichtsbarkeit, kein CLOUD Act.

### Anbieter-Übersicht

| Anbieter | GPU-Modelle | Preis/Monat | Standort | BSI C5 | Managed K8s |
|----------|-------------|-------------|----------|:------:|:-----------:|
| **Hetzner** | RTX 4000 Ada (20GB), RTX PRO 6000 Blackwell (96GB) | €184-889 | Nürnberg, Falkenstein | ✗ | ✗ |
| **netcup** | H200 vGPU (7-14GB) | ~€157 | Nürnberg | ✗ | ✗ |
| **IONOS** | H200, H100 (vollständig) | Pay-per-Minute | Frankfurt | ✓ | ✓ |
| **OVHcloud** | H200, H100, A100, L40S, L4 | ab €2,99/h (H100) | Paris, DE | ✗ | ✓ |
| **Open Telekom Cloud** | H100, A100, V100, L4 | Pay-as-you-go | DE, NL, CH | ✓ | ✓ |
| **STACKIT** | NVIDIA Datacenter (bis 8 GPUs) | Enterprise | Neckarsulm, Lübbenau | ✓ | ✓ |

### Empfehlungen nach Anwendungsfall

| Einsatzzweck | Empfehlung | Kosten |
|-------------|------------|--------|
| Forschung/Prototyping | Hetzner GEX44 (RTX 4000 Ada, 20GB) | **€184/Monat** |
| Produktion KMU (7B-30B) | Hetzner GEX131 (RTX PRO 6000 Blackwell, 96GB) | **€889/Monat** |
| Enterprise mit BSI C5 | IONOS oder Open Telekom Cloud | Enterprise-Pricing |
| Multi-GPU große Modelle | OVHcloud 4× H100 | **~€8.600/Monat** |
| Maximale Datensouveränität | STACKIT oder Open Telekom Cloud | Enterprise-Pricing |

### Verfügbarkeit (Januar 2026)

Hetzner und IONOS: GPU-Instanzen innerhalb von Minuten. netcup H200 vGPU: Early Access/Warteliste. STACKIT: Enterprise-Onboarding erforderlich.

**Datenschutz-Bewertung: 5/5** – Vollständige AVV-Konformität, deutsche Gerichtsbarkeit, kein CLOUD Act.

---

## 4. Deutsche und EU Cloud-LLM-Dienste (API)

Europäische API-Anbieter schließen die Lücke zwischen Self-Hosting und US-Hyperscalern.

### Aleph Alpha (Heidelberg, DE)

| Aspekt | Detail |
|--------|--------|
| Modelle | Luminous-Base (13B), -Extended (30B), -Supreme (70B), Pharia-1-LLM-7B |
| Hosting | 100% Deutschland, keine US-Datenflüsse möglich |
| Besonderheiten | AtMan Explainability (relevant für AI Act), On-Premise via PhariaOS, BSI C5, urheberrechtlich geklärte Trainingsdaten |
| Partner | Schwarz-Gruppe, Bosch, SAP |
| Einschränkungen | Benchmarks 6-18 Monate hinter GPT-4/Claude, Pricing nur auf Anfrage, Pivot zu Enterprise-Plattform (Oktober 2025) |
| Zielgruppe | Behörden, KRITIS, maximale Datensouveränität |

### Mistral AI (Paris, FR)

| Aspekt | Detail |
|--------|--------|
| Modelle | Mistral Large 3 (675B), Medium 3.1, Small 3.2 (24B), Codestral, Pixtral 12B (Vision), Voxtral (Audio) |
| Hosting | EU (Frankreich), kein CLOUD Act |
| API-Preise | Large: $2/$6 pro 1M Tokens (In/Out), Small: $0,20/$0,60, Pixtral: $0,15/$0,45 |
| Le Chat | Free / Pro ($14,99) / Team ($24,99/User) / Enterprise (Custom, On-Premise, SSO) |
| Besonderheiten | OpenAI-kompatible API (einfache Migration), Apache 2.0 für Self-Hosting, Zero Data Retention, 84% MMLU (Large) |
| Empfehlung | **Beste Balance aus Kosten, Qualität und EU-Compliance** für die meisten Unternehmensanwendungen |

### DeepL (Köln, DE)

| Aspekt | Detail |
|--------|--------|
| Produkte | Translator, Write, Voice, API |
| Pricing | Free: 500K Zeichen/Monat, Pro: €5,49 + €25/Mio. Zeichen, Enterprise: Volume-Rabatte |
| Besonderheiten | SOC 2 Type II, Pro-Daten **niemals** für Training, 100% DE/EU, überlegene EU-Sprachqualität |
| Empfehlung | Standard für professionelle Übersetzung in deutschen Unternehmen |

### Weitere EU-Anbieter

| Anbieter | Besonderheit |
|----------|-------------|
| **Scaleway (FR)** | OpenAI-kompatible API, 100% EU, 1M Tokens kostenlos, Zero Data Collection |
| **HuggingFace Inference Endpoints** | EU-Regionen (AWS Frankfurt, GCP Europe), beliebige Hub-Modelle |
| **Gladia (FR)** | Europäische Speech-to-Text-API, Whisper-basiert mit Optimierungen |

**Datenschutz-Bewertung: 4/5** – Vollständige EU-Jurisdiktion, kein CLOUD Act. Punkt Abzug für potenzielle Sub-Prozessoren außerhalb DE.

---

## 5. US-Anbieter mit EU-Rechenzentren

Leistungsfähigste Modelle, aber verbleibendes CLOUD Act-Restrisiko.

### Regionen und Modell-Verfügbarkeit

| Anbieter | Deutsche Region | Weitere EU | Frontier-Modelle in EU |
|----------|-----------------|------------|------------------------|
| **Azure OpenAI** | Germany West Central ✓ | Sweden Central, West Europe | GPT-4o, GPT-4 Turbo, DALL-E 3, Whisper |
| **Google Vertex AI** | – | europe-west1/4/9/12 | Gemini 2.5, Imagen 4.0 |
| **AWS Bedrock** | eu-central-1 (Frankfurt) ✓ | Ireland, Paris, Stockholm | Claude 3.5/3.7, Llama 3, Amazon Nova |

### Compliance-Zertifizierungen

Alle drei: BSI C5:2020 (Typ 2), ISO 27001/27017/27018, DPF-zertifiziert, SCCs in DPAs. BSI C5:2025 (erwartet Dez 2025) wird Container-Management, Post-Quantum-Kryptografie, KI-Offenlegung hinzufügen.

### Data Residency im Detail

**Azure OpenAI:** „EU Data Zone" garantiert Verarbeitung ausschließlich in EU. „Germany West Central" höchste Restriktivität. **Achtung:** Neueste Audio-Modelle (gpt-4o-transcribe) nur in US.

**Google Vertex AI:** Regionale Endpoints (z.B. `eu-discoveryengine`) erforderlich. Globaler Endpoint = **keine** Datensouveränität.

**AWS Bedrock:** EU Cross-Region Inference Profiles (z.B. `eu.anthropic.claude-sonnet-4-5`) routen nur innerhalb EU: Frankfurt, Paris, Stockholm, Dublin.

### CLOUD Act Restrisiko

US-Behörden können Daten von US-Unternehmen anfordern **unabhängig vom physischen Speicherort**. Selbst Frankfurt-Daten bei AWS unterliegen potenziell US-Jurisdiktion. Steht in Konflikt mit Art. 48 DSGVO.

**Risikominderung:** Customer-Managed Encryption Keys (CMK/CMEK/KMS), Zero Data Retention konfigurieren, Hybridansatz (sensitivste Daten bei EU-Anbietern), Dokumentation in DSFA.

### DPA-Qualität

| Aspekt | Microsoft | Google | AWS |
|--------|-----------|--------|-----|
| Art. 28 DSGVO konform | ✓ | ✓ | ✓ |
| SCCs integriert | ✓ | ✓ | ✓ |
| No-Training-Garantie | ✓ | ✓ | ✓ |
| AI-spezifische Klauseln | ✓ | ✓ | ✓ |
| Audit-Rechte | Eingeschränkt | Eingeschränkt | Eingeschränkt |

### Token-Preise (EU-Regionen, pro 1M Tokens)

| Modellklasse | Azure | Google | AWS |
|--------------|-------|--------|-----|
| Flagship (GPT-4o/Gemini Pro/Claude 3.5) | $2,50-$10 | $1,25-$5 | $3-$15 |
| Effizient (Mini/Flash/Haiku) | $0,15-$0,60 | $0,08-$0,30 | $0,25-$1,25 |

**Datenschutz-Bewertung: 3/5** – Solide technische und vertragliche Maßnahmen, CLOUD Act nicht eliminierbar.

---

## 6. US-Anbieter direkt (ohne EU-Hosting-Garantie)

Maximale Modellqualität, erhöhte Compliance-Anforderungen.

### OpenAI API

Rechtliche Struktur: OpenAI Ireland Ltd. (Dublin, seit Feb 2024) als EU-Controller. DPA verfügbar (elektronische Signatur), Zero Data Retention für API-Kunden, EU Data Residency nur Enterprise/Edu. Standard-DPA nicht verhandelbar. €15M Garante-Strafe zeigt Enforcement-Risiko.

### Anthropic Claude API

| Kontotyp | Training | Retention | DPA |
|----------|----------|-----------|-----|
| Free/Pro/Max | Opt-in möglich | 30 Tage | Consumer Terms |
| Claude for Work/Enterprise | **Niemals** | Minimal | Commercial Terms + SCCs |
| API | **Niemals** | Minimal | Commercial Terms + SCCs |

**Empfehlung:** Ausschließlich Enterprise/API-Tiers für Unternehmenseinsatz. Consumer-Consent-Interface mit „Dark Patterns" (vorausgewählter Toggle) potenziell DSGVO-widrig.

### Google Gemini API

Google Ireland Ltd. als EU Service Provider. Data Residency nur in Enterprise-Plänen. Free/Consumer kann Daten für Modellverbesserung nutzen. Irish DPC eröffnete Sep 2024 DPIA-Untersuchung.

### Zero Data Retention im Vergleich

| Anbieter | ZDR verfügbar | Rechtlicher Wert |
|----------|:-------------:|------------------|
| OpenAI API | ✓ | Mittel – vertragliche Zusicherung |
| Anthropic Enterprise/API | ✓ | Mittel – Commercial Terms |
| Azure OpenAI | ✓ (konfigurierbar) | Hoch – Microsoft DPA |
| Google Vertex AI | ✓ (konfigurierbar) | Hoch – Google DPA |
| AWS Bedrock | ✓ | Hoch – AWS Terms |

**Datenschutz-Bewertung: 2/5** – Ohne EU Data Residency problematisch. Mit Enterprise-Vertrag, DPA und ZDR vertretbar, Restrisiko US-Jurisdiktion.

---

## Technische Maßnahmen zur Risikominimierung

### AI Gateway-Lösungen

Zentralisierte Gateways für LLM-Traffic: PII-Erkennung/Redaktion (Regex + NER), Anonymisierung vor API-Calls, De-Anonymisierung in Responses, Audit-Logging, Policy Enforcement.

| Lösung | Typ | Besonderheit |
|--------|-----|-------------|
| **LiteLLM** | Open Source, Self-Hosted | PII-Maskierung via Presidio, 100+ LLMs, Multi-Tenant-Tracking. Nutzer: Netflix, Lemonade |
| **Amazon Bedrock Intelligent Routing** | Managed | ~30% Kostensenkung, automatische Modellauswahl |
| **Databricks AI Gateway** | Managed | Enterprise-Integration |
| **Kong AI Gateway** | Open Source | API-Management-Ökosystem |

### Prompt-Sanitization-Techniken

1. **Pre-Processing-Filter:** PII vor Übermittlung erkennen und entfernen
2. **Pseudonymisierung:** Identifikatoren durch konsistente Pseudonyme ersetzen
3. **Context-Stripping:** Unnötigen identifizierenden Kontext entfernen
4. **Data-Tagging:** Sensitivitätslevel taggen und entsprechend routen

---

## Empfehlungen nach Unternehmensgröße

### Kleinstunternehmen (1-10 MA)

| Aspekt | Empfehlung |
|--------|------------|
| Lösung | LM Studio oder Ollama auf Mac/PC |
| Hardware | MacBook M3 Pro (€2.500) oder PC mit RTX 4060 Ti (€500) |
| Modelle | Llama 3.2 8B, Mistral 7B |
| Kosten | €0 laufend |
| Alternative | Mistral Le Chat Pro (€14,99/Monat) |

### KMU (10-100 MA)

| Aspekt | Empfehlung |
|--------|------------|
| Lösung | Hetzner GPU-Server + Ollama/vLLM |
| Infrastruktur | Hetzner GEX44 (€184/Mo) oder GEX131 (€889/Mo) |
| Software | Ollama + Open WebUI für Endnutzer |
| Modelle | Llama 3.1 13B Standard, 70B komplex |
| Team | 0,5 FTE |
| Alternative Cloud | Mistral API (€100-500/Mo) |

### Mittelstand (100-1.000 MA)

| Schicht | Lösung |
|---------|--------|
| Sensible Daten | On-Premise vLLM-Cluster oder IONOS GPU (BSI C5) |
| Standard-Aufgaben | Mistral API oder Azure OpenAI EU Data Zone |
| Übersetzung | DeepL API Pro |
| Kosten | €2.000-10.000/Monat |
| Team | 1-2 FTE |

### Enterprise (1.000+ MA)

| Anforderung | Lösung |
|-------------|--------|
| Maximale Souveränität | Aleph Alpha PhariaAI (On-Premise) |
| Behörden/KRITIS | Open Telekom Cloud oder STACKIT (BSI C5) |
| Frontier-Modelle | Azure OpenAI EU Data Zone |
| Multi-Modal | Google Vertex AI |
| Gateway/Governance | Zentrales AI-Gateway für alle Provider |
| Team | 3-5 FTE dediziertes AI Platform Team |
| Kosten | €20.000-100.000+/Monat |

---

## Branchenspezifische Hinweise

| Branche | Regulierung | Empfehlung |
|---------|-------------|------------|
| **Gesundheitswesen** | Art. 9 DSGVO, §203 StGB (Schweigepflicht) | Ausschließlich On-Premise, De-Identifizierung vor Cloud |
| **Finanzdienstleistungen** | BaFin BDAI-Prinzipien, MaRisk, DORA (ab 2025) | BSI C5-zertifiziert (IONOS, OTC), AI-Klauseln in Verträgen |
| **Rechtsanwälte** | §43a BRAO, §203 StGB | On-Premise oder EU Private Instances, Mandanteneinwilligung |
| **Öffentlicher Sektor** | BSI C5 ab Juli 2025 für KRITIS | STACKIT, Open Telekom Cloud, Aleph Alpha |

---

## Verknüpfungen

- [[LLM-Rechtlicher-Rahmen]] – DSGVO, AI Act, AVV-Anforderungen, Anbieter-Compliance
- [[LLM-Use-Cases-Matching]] – Use Cases, Modellempfehlungen, Praxisberichte
- [[Provider-Falle]] – Strategische Abhängigkeiten bei Cloud-Anbietern

---

*Recherche-Stand: Januar 2026. Konsolidiert aus drei Compass-Dokumenten.*

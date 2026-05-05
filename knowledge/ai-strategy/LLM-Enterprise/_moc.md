---
title: AI-Strategy
type: moc
status: living
created: '2025-02-07'
updated: '2025-02-07'
tags:
  - moc
  - llm
  - enterprise
  - datenschutz
  - infrastruktur
sources:
  - 'self-authored:loschke:strategy-consulting'
area: ai-strategy
audience:
  - fuehrungskraft
  - entscheider
  - konzepter
level: intermediate
intent:
  - entscheiden
  - einordnen
contains:
  - framework
  - decision-aid
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# LLM-Enterprise MOC

## Übersicht

Umfassender Leitfaden für den LLM-Einsatz in deutschen Unternehmen unter Datenschutzaspekten. Entwickelt als Beratungsgrundlage für Workshops mit gemischter Zielgruppe (GF, IT, Marketing, DevOps) und zur Weiterverarbeitung in verschiedene Content-Formate.

## Struktur

Der Leitfaden folgt einem **Entscheidungspfad-Ansatz**:
1. Datenklassifizierung → 2. Use Cases → 3. Rechtliche/technische Anforderungen → 4. Infrastruktur-Matching → 5. Ressourcen & Trade-offs

## Teildokumente

### [[LLM-Rechtlicher-Rahmen]]
DSGVO, EU AI Act, Data Privacy Framework, Datenklassifizierung, AVV-Anforderungen, Anbietervergleich aus Compliance-Sicht.

### [[LLM-Infrastruktur-Optionen]]
Systematische Bewertung aller Deployment-Optionen (On-Device, On-Premise, deutsche Hoster, EU-Cloud, US-Cloud) nach Datenschutz, Qualität, Komplexität, Kosten.

### [[LLM-Use-Cases-Matching]]
Use-Case-Katalog nach Unternehmensbereichen, Matching-Matrix für Datenschutz-Anforderungen, Modellempfehlungen, hybride Architekturen, Praxisberichte.

### [[Open-Weights-Threat-Model]]
Threat Model für Open-Weights-Modelle (insb. chinesische). Vier Risikoklassen: Datenabfluss, Modell-Integrität, Output-Bias, Compliance. Self-Hosting löst eine, drei bleiben. Use-Case-Matrix und Mitigation-Stack für die Beratung.

## Kernaussagen

**Regulatorisch**: AVV nach Art. 28 DSGVO ist Mindeststandard. KI-Kompetenzpflicht seit Feb 2025 verbindlich. Data Privacy Framework strukturell instabil.

**Technisch**: Lokale 70B-Modelle erreichen 90-95% GPT-4-Qualität. EU-native Anbieter wie Mistral bieten 8-15x besseres Preis-Leistungs-Verhältnis.

**Praktisch**: 80% der Use Cases funktionieren mit GPT-4o mini oder Claude Haiku. Break-even für Self-Hosting bei ~8.000 Anfragen/Tag.

## Weiterverarbeitung

- [ ] Webinar-Folien erstellen
- [ ] Beratungs-Checkliste ableiten
- [ ] Blog-Artikel für loschke.ai
- [ ] Workshop-Handout

## Erstellungsstatus

| Dokument | Status | Erstellt |
|----------|:------:|----------|
| [[LLM-Rechtlicher-Rahmen]] | ✅ | 2025-02-07 |
| [[LLM-Infrastruktur-Optionen]] | ✅ | 2025-02-07 |
| [[LLM-Use-Cases-Matching]] | ✅ | 2025-02-07 |

## Verknüpfungen

- [[EU-AI-Act-Ueberblick]] - Detaillierter Überblick zum AI Act
- [[Provider-Falle]] - Strategische Abhängigkeiten bei Cloud-Anbietern
- [[Adaptive-Governance-Modelle]] - Governance-Frameworks für KI

---
*Recherche-Stand: Januar 2026. Alle drei Compass-Dokumente konsolidiert.*

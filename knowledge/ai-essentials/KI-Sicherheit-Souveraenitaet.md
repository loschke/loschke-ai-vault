---
title: KI-Sicherheit und Souveränität
type: framework
status: stable
created: '2026-03-04'
updated: '2026-03-04'
tags:
  - ki-grundlagen
  - sicherheit
  - souveraenitaet
  - infrastruktur
  - enterprise
  - datenschutz
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
  - contrast
  - tip
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-04'
---
# KI-Sicherheit und Souveränität

> Welches Tool für welche Daten? Das Souveränitätsspektrum von S1 (lokal offline) bis S6 (Consumer-Cloud) und warum Verbote nichts bringen.

---

## Warum das wichtig ist

"KI ist bei uns verboten" klingt nach Sicherheit. In Wahrheit entsteht ungeschützte Schatten-IT. Mitarbeitende nutzen KI privat, ohne Schutzmaßnahmen. Kein Audit-Trail, keine Kontrolle über Unternehmensdaten. Die bessere Frage ist nicht ob KI, sondern wie.

Verbote lösen das Problem nicht. Sie verlagern es in unkontrollierbare Bereiche.

---

## Das Souveränitätsspektrum: S1 bis S6

Es gibt sechs Stufen der Datensouveränität – von komplett offen bis absolut souverän:

| **Stufe** | **Konzept** | **Datenschutz** | **Beispiel** |
|---|---|---|---|
| **S6** | US-Anbieter, Consumer-Version | Kein | ChatGPT Free, Gemini, Claude Free |
| **S5** | US-Anbieter, Enterprise/API | Besser | ChatGPT Enterprise, Claude Business |
| **S4** | US-Anbieter, EU-Rechenzentrum | Hoch | Azure OpenAI (Frankfurt), AWS Bedrock |
| **S3** | EU-Anbieter, EU-Hosting | Sehr hoch | Mistral, StackIT, Ionos |
| **S2** | Eigener Server (DE-Hoster) | Maximal | Rechenzentrum, Hetzner, Mittwald |
| **S1** | Lokales Gerät, komplett offline | Offline | Ollama lokal, LM Studio (Mac/PC) |

### Pro-Abos als Zwischenkategorie

ChatGPT Plus/Team, Claude Pro, Gemini Advanced stehen zwischen S5 und S6:

| Aspekt | Realität |
|---|---|
| **Training** | In der Regel kein Training mit deinen Daten (bei Team/Business-Plänen garantiert) |
| **Datenspeicherung** | Konversationen gespeichert, aber mit besseren Datenschutz-Policies |
| **DPA/AV-Vertrag** | Variiert nach Anbieter und Plan |
| **Einordnung** | Besser als S6, aber ohne die vertraglichen Garantien von S5 Enterprise |

**Wichtig:** "Pro" heißt nicht automatisch "sicher für alle Firmendaten". Den konkreten Plan und seine Datenschutz-Bedingungen prüfen.

---

## Stufen-Vergleich im Detail

| **Kriterium** | **Consumer (S6)** | **Enterprise (S5-S4)** | **EU-Hosted (S3)** | **Lokal (S1-S2)** |
|---|---|---|---|---|
| **Daten für Training?** | Ja | Nein | Nein | Nein |
| **AV/DPA verfügbar?** | Nein | Ja | Ja | Nicht nötig |
| **Cloud Act Risiko?** | Ja | Ja | Nein | Nein |
| **Zero Data Retention?** | Nein | Teilweise | Konfigurierbar | Automatisch |
| **Für Unternehmensdaten?** | Nein | Ja (mit AV) | Ja | Ja |

Die IT blockiert Consumer-Versionen zu Recht. Die Frage ist nicht, ob man blockiert, sondern was man stattdessen anbietet.

---

## Welche Stufe für welche Daten?

Die Logik: Je sensibler die Daten, desto näher an Stufe 1.

| **Datenklasse** | **Empfohlene Stufe** | **Beispielanwendung** |
|---|---|---|
| **Öffentliche Informationen** | S3-S6 | "Erkläre mir Quantenphysik für Laien" |
| **Interne Texte (kein Personenbezug)** | S3-S5 | Pressemitteilung kürzen, Protokoll glätten |
| **Sensible Daten (Namen, E-Mails)** | S2-S4 | Kommunikation (vorher pseudonymisieren!) |
| **Vertrauliche Forschungsdaten** | S1-S3 | Unveröffentlichte Studienergebnisse |
| **Besondere Kategorien (Art. 9 DSGVO)** | S1-S2 | Gesundheitsdaten, Patientendaten (NUR lokal) |

### Nicht das Tool ist das Problem – sondern die Kombination

| **Daten** | **Öffentliche KI-Tools (S6)** | **Enterprise KI mit DPA (S4-S5)** | **Self-Hosted (S1-S2)** |
|---|---|---|---|
| Allgemeine Recherche | Erlaubt | Erlaubt | Erlaubt |
| Interne Prozesse/Meetings | Verboten | Mit Richtlinie | Erlaubt |
| Geschäftsgeheimnisse | Verboten | Prüfung nötig | Erlaubt |
| Personenbezogene Daten | Verboten | Mit Rechtsgrundlage | Mit Rechtsgrundlage |
| Art. 9 Personenbezogene Daten | Verboten | Im Regelfall verboten | Einzelfallprüfung |

---

## Anbieter im Souveränitätsspektrum

| Anbieter | Stufe(n) | Anmerkung |
|---|---|---|
| **OpenAI** | S6 (Free), S5 (Plus/Team/Enterprise), S4 (Azure OpenAI) | Azure-Variante bietet EU-Hosting |
| **Anthropic** | S6 (Free), S5 (Pro/Business/API) | Kein Training mit Konversationsdaten bei Pro/API (Standard-Policy) |
| **Google** | S6 (Free), S5 (Workspace/Enterprise) | Aktivitätseinstellungen im Google Account für Opt-out |
| **Mistral** | S3 | EU-Anbieter, EU-Hosting |
| **Ollama/LM Studio** | S1 | Komplett lokal, keine Daten verlassen das Gerät |

---

## Schatten-IT: Warum Verbote scheitern

Hinter "KI ist bei uns verboten" stecken nachvollziehbare Sorgen: Datenabfluss, Haftungsrisiken, Datenschutzverstöße. Trotzdem funktioniert das Verbot nicht:

- Mitarbeitende nutzen KI privat (ohne Schutzmaßnahmen)
- Kein Audit-Trail, keine Kontrolle über Unternehmensdaten
- Die Produktivitätsvorteile gehen dem Unternehmen verloren
- Das Risiko wird nicht eliminiert, sondern unsichtbar gemacht

**Die Lösung:** Statt zu verbieten, klare Stufen definieren. Welche Daten in welches Tool dürfen, mit welchen Schutzmaßnahmen. Das ist die Aufgabe einer KI-Governance.

→ Siehe [[KI-Regulierung-Governance]] für das Zwei-Säulen-Modell (Compliance-Richtlinie + Anwender-Handbuch).

---

## Verknüpfungen

- [[Datenschutz-Input-Regeln]] – Was darf in KI-Tools eingegeben werden?
- [[KI-Regulierung-Governance]] – Rechtlicher Rahmen und Organisationsstrategie
- [[KI-Output-Risiken]] – Was bei KI-generierten Outputs zu beachten ist
- [[Kosten-und-Preismodelle]] – Enterprise vs. Pro vs. Free: Kostenunterschiede
- [[Modell-Landschaft]] – Open Source als Souveränitäts-Option
- [[GenAI-Stack-Erklaermodell]] – Ebene 2 (Tools): Wo Datenschutz greift

---

*Orientierung für die Wahl der richtigen KI-Infrastruktur nach Datensensitivität*

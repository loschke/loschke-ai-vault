---
title: Hyperpersonalisierung/Layer 1 Constraints
type: concept
status: stable
created: 2026-01-27T00:00:00.000Z
updated: 2026-01-27T00:00:00.000Z
tags:
  - ai-shifts
  - personalization
  - framework
  - compliance
sources:
  - 'self-authored:loschke:trend-research'
area: ai-shifts
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Layer 1: Constraints

> "Darf das so gesagt werden?"

## Funktion

Setzt die nicht verhandelbaren Leitplanken. Was hier durchfällt, kommt nicht durch – egal wie gut die Personalisierung danach wäre.

---

## Die vier Säulen

### Fachliche Korrektheit
Keine falschen Informationen. Das System darf nicht halluzinieren oder Halbwissen als Fakt ausgeben.

### Rechtliche Compliance
Branchenspezifische Regulierung einhalten. Was nicht gesagt werden darf, darf nicht gesagt werden – egal wie sehr der Nutzer es hören will.

### Datenschutz
Schutz persönlicher Informationen. Keine unerlaubte Verknüpfung von Daten, keine ungewollte Offenlegung.

### Konsistenz
Gleiche Frage → gleiche Basisantwort. Personalisierung darf die Fakten nicht verändern, nur die Aufbereitung.

---

## Branchenbeispiele

| Branche | Typische L1-Constraints |
|---------|-------------------------|
| Gesundheit | SGB, Medizinrecht, ärztliche Schweigepflicht, Datenschutz |
| Banking | MiFID, Compliance, Beratungspflichten, Geldwäschegesetz |
| E-Commerce | Widerrufsrecht, Produktwahrheit, Preisangabenverordnung |
| HR | AGG, Arbeitsrecht, Betriebsverfassungsgesetz |
| Versicherung | VVG, Beratungsdokumentation, Provisionsoffenlegung |

---

## Implementierungshinweise

### Wo lebt L1 technisch?

**Option A: Im System-Prompt**
- Harte Regeln als Teil des Prompts
- Pro: Einfach, immer aktiv
- Con: Kann bei langem Kontext "vergessen" werden

**Option B: Als Guardrail-Layer**
- Separates Modul, das Output prüft
- Pro: Zuverlässiger, auditierbar
- Con: Zusätzliche Latenz, Komplexität

**Option C: Retrieval-gestützt**
- Fakten werden aus verifizierter Datenbank geholt
- Pro: Aktuell, korrekt
- Con: Braucht gepflegte Wissensbasis

**Empfehlung:** Kombination aus A (Grundregeln im Prompt) und C (Fakten aus DB).

### Typische Fehler

- L1-Constraints werden nur initial definiert und nie aktualisiert
- Rechtliche Änderungen werden nicht ins System übertragen
- Keine Audit-Trails, was das System wann gesagt hat
- Annahme, dass LLMs von sich aus compliant sind

---

## Offene Fragen

- Wie testet man L1-Compliance systematisch?
- Wer ist verantwortlich, wenn L1 versagt? (Governance-Frage)
- Wie dokumentiert man L1-Entscheidungen für Audits?

---

## Verknüpfungen

- [[02_KNOWLEDGE/AI-Shifts/Hyperpersonalisierung/_MOC]] – Zurück zur Übersicht
- [[Layer-2-Intent]] – Nächster Layer
- [[AI-Transformation]] – Governance als Teil der Transformation

---

*Layer 1 ist das Fundament. Ohne solide Leitplanken ist alle Personalisierung riskant.*

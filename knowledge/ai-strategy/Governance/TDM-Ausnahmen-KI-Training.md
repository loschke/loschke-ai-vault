---
title: TDM-Ausnahmen für KI-Training
type: reference
status: stable
created: '2025-02-08'
updated: '2025-02-08'
tags:
  - copyright
  - ai-governance
  - tdm
  - training-data
sources:
  - 'self-authored:loschke:strategy-consulting'
area: ai-strategy
audience:
  - fuehrungskraft
  - entscheider
  - praktiker
level: advanced
intent:
  - verstehen
  - referenzieren
contains:
  - concept
  - argument
  - vocabulary
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Text and Data Mining: Ausnahmen und Grenzen für KI-Training

> Die rechtliche Grundlage, auf der KI-Modelle trainiert werden — und warum sie möglicherweise nicht ausreicht.

---

## Kernaussage

Die EU erlaubt Text and Data Mining (TDM) unter bestimmten Bedingungen. Ob diese Ausnahmen das Training großer KI-Modelle tatsächlich abdecken, ist die am stärksten umstrittene urheberrechtliche Frage in Europa. Das Münchner GEMA-Urteil hat gezeigt: TDM deckt die Analyse, aber nicht zwingend die Memorisierung ganzer Werke in Modellparametern.

---

## Die zwei TDM-Ausnahmen im deutschen Recht

Beide Ausnahmen setzen die DSM-Richtlinie (2019/790) um:

| Ausnahme | Norm | Wer darf? | Opt-out? | Zweckbindung |
|----------|------|-----------|----------|--------------|
| **Wissenschaftliches TDM** | § 60d UrhG (Art. 3 DSM-RL) | Forschungsorganisationen, Bibliotheken, Archive | Nein — kein Opt-out möglich | Nur nicht-kommerzielle Forschung |
| **Allgemeines TDM** | § 44b UrhG (Art. 4 DSM-RL) | Jeder (auch kommerzielle Akteure) | Ja — maschinenlesbar | Keine Zweckbindung |

**Voraussetzung für beide:** Rechtmäßiger Zugang zum Ausgangsmaterial. Raubkopien als Trainingsdaten sind nicht durch TDM gedeckt (vgl. Bartz v. Anthropic: Training = transformative Fair Use, aber piratierte Bibliothek = nicht).

---

## Das Drei-Phasen-Modell (aus GEMA v. OpenAI)

Das Münchner Landgericht hat in der GEMA-Entscheidung (November 2025) eine wegweisende Differenzierung eingeführt:

| Phase | Was passiert | TDM-Ausnahme anwendbar? |
|-------|-------------|------------------------|
| **Phase 1: Dataset-Erstellung** | Werke werden gesammelt, indexiert, für Analyse vorbereitet | Ja — klassischer TDM-Anwendungsfall |
| **Phase 2: Training mit Memorisierung** | Modellparameter speichern ganze Werke oder substanzielle Teile | Nein — überschreitet den TDM-Zweck. Memorisierung ≠ Analyse |
| **Phase 3: Output-Reproduktion** | Modell gibt urheberrechtlich geschützte Inhalte aus | Nein — eigenständige Urheberrechtsverletzung (§§ 16, 19a UrhG) |

**Warum das wichtig ist:** Vor diesem Urteil galt die Annahme, dass TDM den gesamten Trainingsprozess abdeckt. Das Drei-Phasen-Modell bricht diese Annahme auf. Wenn es in der Berufung bestätigt wird, brauchen KI-Anbieter für Phase 2 und 3 separate Rechtsgrundlagen.

---

## Opt-out: Wie Rechteinhaber ihre Werke schützen

Für das allgemeine TDM (§ 44b) können Rechteinhaber widersprechen — aber nur in maschinenlesbarer Form.

**Leitendes Urteil:** Kneschke v. LAION (OLG Hamburg, Dezember 2025) bestätigte: Ein Opt-out in natürlicher Sprache auf der Website reicht nicht. Der Widerspruch muss maschinell auslesbar sein.

**Gängige Mechanismen:**

Die **robots.txt** ist aktuell der verbreitetste Weg. Spezifische Crawler können blockiert werden (GPTBot, Google-Extended, CCBot). Allerdings hat dieser Ansatz zwei praktische Probleme: Er blockiert häufig auch Suchmaschinen-Indexierung, und Studien zeigen, dass viele KI-Unternehmen robots.txt ignorieren.

**Was kommt:** Die EU-Kommission hat im Dezember 2025 eine Stakeholder-Konsultation zu standardisierten Opt-out-Protokollen gestartet. Ziel sind interoperable, verbindliche technische Standards.

---

## Relevanz für verschiedene Akteure

**Für Unternehmen als KI-Nutzer:** Die TDM-Frage betrifft primär die Anbieter, nicht die Endnutzer. Aber: Wer KI-Outputs veröffentlicht, die memorisiertes Material enthalten, haftet potenziell für die Verbreitungshandlung → siehe [[KI-Output-Haftung-Risiken]].

**Für Forschungseinrichtungen:** Das wissenschaftliche TDM (§ 60d) bietet stärkeren Schutz — kein Opt-out möglich, solange der Zweck nicht-kommerziell ist. Die Grenze zwischen Forschung und kommerzieller Verwertung ist allerdings bei angewandter Forschung fließend.

**Für Content-Ersteller / Rechteinhaber:** Opt-out jetzt maschinenlesbar implementieren (robots.txt als Minimum). Auf die EU-Standardisierung vorbereiten. Bedenken: Opt-out schützt nur vor zukünftigem Training, nicht vor bereits trainierten Modellen.

---

## Ausblick: DSM-Review und CJEU

Zwei Entwicklungen werden den Rahmen neu definieren:

Die **DSM-Richtlinien-Überprüfung** ist für Juni 2026 mandatiert. Die JURI-Studie des EU-Parlaments (Juli 2025) kam zum Schluss, dass die bestehenden TDM-Ausnahmen nicht für großskaliges KI-Training konzipiert waren, und empfahl ein System vorheriger Autorisierung — faktisch eine Lizenzpflicht.

Das **CJEU-Verfahren Like Company v. Google (C-250/25)** wird die erste EU-weite autoritative Auslegung liefern, ob LLM-Training als "Vervielfältigung" im Sinne der Richtlinie gilt.

---

## Verknüpfungen

- [[Urheberrecht-KI-Inhalte]] – Schutzfähigkeit von KI-Outputs
- [[KI-Urteile-Referenz]] – GEMA, Kneschke und weitere Leitentscheidungen
- [[KI-Output-Haftung-Risiken]] – Haftung bei memorisierten Inhalten
- [[EU-AI-Act-Ueberblick]] – GPAI-Pflichten inkl. Copyright-Compliance

---

*Stand: Februar 2026 | Keine Rechtsberatung*

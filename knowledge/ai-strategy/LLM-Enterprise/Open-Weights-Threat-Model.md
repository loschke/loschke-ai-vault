---
title: Open-Weights Threat Model
type: framework
status: stable
created: '2026-05-03'
updated: '2026-05-03'
tags:
  - llm
  - open-weights
  - security
  - threat-model
  - self-hosting
  - china
  - deepseek
  - qwen
  - sleeper-agents
sources:
  - 'self-authored:loschke:strategy-consulting'
area: ai-strategy
audience:
  - it-leitung
  - cto
  - datenschutz
  - fuehrungskraft
  - security
level: advanced
intent:
  - verstehen
  - beraten
  - entscheiden
contains:
  - concept
  - framework
  - argument
  - tip
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Open-Weights Threat Model

> Self-Hosting löst Datenabfluss. Self-Hosting löst nicht alles. Ein Threat Model für die Frage, ob ein chinesisches Open-Weights-Modell auf eigener Infrastruktur ein Sicherheitsrisiko ist.

---

## Kernaussage

Die Diskussion "DeepSeek/Qwen ja oder nein" wird in der Praxis falsch geführt. Sie wird als binäre Frage geführt, obwohl sie mehrere Risikoklassen umfasst, die unterschiedlich auf dieselbe Maßnahme reagieren.

**Self-Hosting eliminiert eine Risikoklasse vollständig (Datenabfluss). Drei weitere bleiben unabhängig vom Hosting bestehen.** Wer "selbst-gehostet = sicher" sagt, denkt nur die erste. Wer "China = nein" sagt, denkt eine geopolitische Heuristik, kein Threat Model.

---

## Der Mythos

Der typische Satz im LinkedIn-Post oder Workshop:

> "Wir betreiben DeepSeek/Qwen lokal auf eigener Hardware. Damit verlassen unsere Daten nicht das Unternehmen. Sicherheitsbedenken sind erledigt."

Der Satz ist halb richtig. Er löst genau ein Problem und übergeht drei.

---

## Die vier Risikoklassen

| # | Risikoklasse | Wird gelöst durch Self-Hosting? |
|---|---|:---:|
| 1 | Datenabfluss an den Modell-Anbieter | ✅ Ja |
| 2 | Modell-Integrität (Backdoors, Sleeper Behavior) | ❌ Nein |
| 3 | Output-Bias / Werte-Alignment | ❌ Nein |
| 4 | Compliance / Geopolitik / Reputation | ⚠️ Teilweise |

---

## Risikoklasse 1: Datenabfluss

**Was es ist:** Daten, die ans Modell geschickt werden, fließen über einen Hosted-API-Provider ab. Bei Anthropic, OpenAI oder DeepSeek-Cloud ist das durch Verträge geregelt. Bei chinesischen Cloud-APIs greift zusätzlich das chinesische National Intelligence Law, das Behördenzugriff erlaubt.

**Was Self-Hosting löst:** Wenn das Modell auf eigener Hardware läuft, ohne Egress-Traffic zum Anbieter, fließt nichts ab. Punkt. Diese Risikoklasse ist mit Self-Hosting + Network-Isolation vollständig adressiert.

**Wichtig:** Das gilt auch für die meisten chinesischen Open-Weights-Modelle. Wenn ich Qwen 3 8B lokal mit Ollama betreibe, geht nichts nach China. Das ist technisch eindeutig.

---

## Risikoklasse 2: Modell-Integrität

Das ist die unterschätzte Klasse.

### Was es ist

Ein Modell ist kein Code, den man Zeile für Zeile lesen kann. Es ist ein Bündel aus Milliarden Parameterwerten, die in Trainingsläufen entstanden sind. "Open Weights" heißt: Du hast die Gewichte. "Open Weights" heißt nicht: Du verstehst, was sie tun.

### Sleeper Agents

Anthropic hat 2024 in einem viel zitierten Paper ("Sleeper Agents: Training Deceptive LLMs that Persist Through Safety Training") gezeigt: Modelle lassen sich gezielt so trainieren, dass sie sich bei bestimmten Triggern anders verhalten. Konkrete Beispiele aus dem Paper:

- Modelle, die ab einem definierten Datum schädlichen Code generieren
- Modelle, die bei einem bestimmten Codewort eine Backdoor in produzierten Code einbauen
- Verhalten, das **standard safety training überlebt** und in normalen Tests nicht auffällt

Die Frage ist nicht, ob das technisch möglich ist. Es ist demonstriert. Die offene Frage ist, ob es in einem konkreten Modell tatsächlich passiert ist. Diese Frage lässt sich aktuell mit den Mitteln der Mechanistic Interpretability nicht beantworten. Wir können bei Milliarden-Parameter-Modellen keine vollständige Audit-Aussage treffen.

### Was Self-Hosting NICHT löst

Self-Hosting ändert daran nichts. Wenn ein Sleeper Behavior in den Gewichten codiert ist, läuft es genauso auf der Hetzner-GPU wie auf einer chinesischen Cloud. Die Aktivierung erfolgt durch Input, nicht durch Netzwerk.

### Praktische Relevanz

| Use Case | Relevanz Sleeper Behavior |
|---|---|
| Zusammenfassung interner Dokumente | Niedrig |
| Übersetzung | Niedrig |
| Brainstorming, Texte | Niedrig–Mittel |
| Code-Generierung für produktive Systeme | Hoch |
| Sicherheitsentscheidungen, Audit-Unterstützung | Hoch |
| Autonome Agenten mit Tool-Zugriff | Sehr hoch |

Das Risiko skaliert mit der Verlässlichkeitserwartung an den Output. Ein Brainstorming-Tool mit subtil schlechten Ideen ist ärgerlich. Ein Code-Assistent mit subtilen Backdoors ist ein Vorfall.

---

## Risikoklasse 3: Output-Bias und Werte-Alignment

### Was es ist

Modelle lernen die Werte ihrer Trainings- und Alignment-Phase. Bei chinesischen Modellen ist gut dokumentiert, dass bestimmte Themen systematisch anders behandelt werden:

- Tiananmen 1989
- Status Taiwans
- Xinjiang und Uiguren
- Kritik an der KPCh

Beispiele lassen sich in jedem Test reproduzieren. Qwen verweigert oder weicht aus, DeepSeek liefert Partei-konforme Narrative oder verweigert.

### Das eigentliche Problem ist nicht das Offensichtliche

Tiananmen-Verweigerung ist sichtbar und damit harmlos. Sie macht aber etwas Strukturelles sichtbar: Das Modell wurde aktiv auf eine Werteachse trainiert. Die Frage ist, was sonst noch trainiert wurde, das nicht so offensichtlich ist.

Beispiele für mögliche subtilere Verzerrungen, die in normalen Tests durchrutschen:
- Bewertungen geopolitischer Konflikte
- Empfehlungen bei Lieferketten-Fragen
- Risiko-Einschätzungen zu chinesischen Anbietern
- Quellenauswahl bei Recherchen

Das ist Spekulation. Es ist auch nicht ausschließbar, weil wir die Trainingsdaten und Alignment-Datasets nicht kennen.

### Was Self-Hosting NICHT löst

Werte sitzen in den Gewichten. Hosting ändert daran nichts.

### Was hilft

System-Prompting kann viel überschreiben, aber nicht alles. Eval-Suites mit eigenen Test-Sets für relevante Themenfelder geben Hinweise. Vollständige Sicherheit gibt es nicht.

---

## Risikoklasse 4: Compliance, Geopolitik, Reputation

### Compliance

In regulierten Branchen gibt es zunehmend explizite Vorgaben oder dokumentierte Erwartungen:

| Branche | Relevanz |
|---|---|
| KRITIS / Behörden | BSI hat warnende Hinweise zu chinesischen ML-Modellen veröffentlicht |
| Defense | De-facto-Verbot |
| Finance (BaFin, DORA) | Provenance-Dokumentation gefordert |
| Health (§203 StGB) | Verträge mit Anbietern erforderlich, bei Open Weights komplex |

### Geopolitik

US-Export-Controls, EU-Diskussion zu "Trusted AI Supply Chains", BSI-Empfehlungen: Die regulatorische Bewegung geht in Richtung Provenance-Anforderungen. Ein Modell ohne nachvollziehbare Lieferkette wird zunehmend ein Compliance-Problem, unabhängig vom Hosting.

### Reputation

Wenn etwas schiefgeht, ist die Headline "Wir haben DeepSeek genutzt" eine andere als "Wir haben Llama genutzt". Das ist soft, aber real. Für viele CTOs ist das ein zurecht eingepreister Faktor.

### Was Self-Hosting löst

Teilweise. Self-Hosting erfüllt Datenschutz-Anforderungen. Provenance, Geopolitik und Reputation bleiben unabhängig davon bestehen.

---

## Pro/Contra: Self-Hosted Chinese Open Weights

### Pro

- Datenabfluss vollständig eliminiert
- Keine Vendor-Lock-in (Open Weights nach Apache 2.0 oder ähnlich)
- Häufig sehr gutes Preis-Leistungs-Verhältnis (DeepSeek V3, Qwen 3)
- Bei manchen Modellen (Qwen Coder) state-of-the-art für Coding
- Volle Kontrolle über Inference-Stack

### Contra

- Modell-Integrität nicht prüfbar (gilt für alle Open Weights)
- Output-Bias dokumentiert (Themenfelder)
- Compliance-Risiko in regulierten Branchen
- Reputational Risk bei Vorfall
- Provenance der Trainingsdaten unklar

### Wo Llama / Mistral besser stehen

Bei Llama (Meta, US) und Mistral (FR) sind dieselben technischen Risiken theoretisch vorhanden. Die geopolitische Risikoabwägung fällt aber anders aus:

- Westliche Jurisdiktion (US/EU)
- Anbieter unterliegen westlicher Regulierung
- Kein National-Intelligence-Law-Äquivalent
- Reputational Risk bei Vorfall geringer

Das ist keine technische Differenz. Es ist eine geopolitische Risikoabwägung. Sie ist legitim, sollte aber als das benannt werden, was sie ist.

---

## Use-Case-Matrix

Diese Matrix hilft im Beratungsgespräch, statt pauschal zu antworten:

| Use Case | Risiko-Profil | Chinese Open Weights akzeptabel? |
|---|---|:---:|
| Übersetzung interner Dokumente (Self-Hosted) | Niedrig | ✅ |
| Zusammenfassung, Brainstorming | Niedrig | ✅ |
| Confluence/Wiki Q&A (intern) | Niedrig | ✅ |
| Marketing-Content-Drafting | Mittel | ⚠️ (Bias prüfen) |
| Recherche, Marktanalysen | Mittel | ⚠️ (Bias prüfen, gegenchecken) |
| Code-Assistent für interne Tools | Mittel | ⚠️ (Code-Review-Pflicht) |
| Code-Generierung für Production | Hoch | ❌ |
| Sicherheits-Analyse, Audit | Hoch | ❌ |
| Autonome Agenten mit Tool-Zugriff | Hoch | ❌ |
| KRITIS-Anwendungen | Hoch | ❌ |
| Behörden, Defense | Hoch | ❌ |

Die rechte Spalte ist eine Heuristik, kein Urteil. In jedem Fall gilt: Threat Model des konkreten Use Cases gewinnt gegen pauschale Regel.

---

## Mitigation-Stack

Wenn Chinese Open Weights eingesetzt werden sollen, lassen sich Risiken schichtweise senken:

| Schicht | Maßnahme | Mitigiert |
|---|---|---|
| Network | Egress-Block, Air-Gap | Datenabfluss (vollständig) |
| Inference | Eigener vLLM/Ollama-Stack ohne Telemetrie | Datenabfluss (vollständig) |
| Prompting | Strikte System-Prompts, Konstitutional Constraints | Output-Bias (teilweise) |
| Eval | Eigene Test-Suite mit relevanten Themenfeldern | Output-Bias (teilweise) |
| Output | Code-Review-Pflicht, Mensch-im-Loop | Modell-Integrität (teilweise) |
| Architektur | Modell-Diversität, kritische Pfade nicht single-source | Modell-Integrität (teilweise) |
| Governance | Provenance-Dokumentation, Use-Case-Whitelist | Compliance (teilweise) |

Vollständige Mitigation für Modell-Integrität gibt es nicht. Mechanistic Interpretability ist nicht so weit.

---

## Beratungs-Quick-Check

Fünf Fragen, die im Gespräch mit dem CTO/CISO helfen, von Pauschal-Urteil zu Threat Model zu kommen:

1. **Was ist der konkrete Use Case?** Brainstorming hat ein anderes Risikoprofil als Code für Production.
2. **Was ist die Verlässlichkeitserwartung an den Output?** Niedrig (Mensch prüft eh) vs. Hoch (geht direkt in System).
3. **Welche Schicht des Mitigation-Stacks ist verfügbar?** Eigener Inference-Stack vorhanden? Eval-Suite? Code-Review?
4. **Welche Compliance-Anforderungen gelten?** KRITIS, BSI C5, branchenspezifisch?
5. **Wäre die Antwort dieselbe für Llama 3 70B?** Wenn nein: Welche der vier Risikoklassen macht den Unterschied? Diese Frage zwingt zur Trennung von technischer und geopolitischer Argumentation.

---

## Die Faustregel

> Self-Hosting ist eine Bedingung. Sie ist nicht die Bedingung.

Wer sagt "wir hosten selbst, also ist es sicher", löst Datenabfluss und ignoriert Modell-Integrität, Bias und Compliance. Wer sagt "China prinzipiell nicht", trifft eine geopolitische Risikoentscheidung und sollte sie als solche dokumentieren.

Beides ist legitim. Keine der beiden Aussagen ist allein ein Threat Model.

---

## Content-Angles für Ableitungen

Diese Notiz lässt sich in mehrere Stücke übersetzen:

| Format | Angle |
|---|---|
| LinkedIn-Carousel | Threat-Model-Framework: vier Risikoklassen, Self-Hosting löst eine |
| Blog-Artikel | Vom CTO-Dialog zum Beratungs-Framework |
| Lesson | Use-Case-Matrix mit interaktiven Entscheidungspfaden |
| Workshop-Modul | Mitigation-Stack im Detail mit Übungen |
| Provokante These | "Selbst-gehostet = sicher" ist die Lüge des KI-Mittelstands |
| Differenzierter Take | Geopolitik vs. Technik: Wann ist welches Argument gültig? |

---

## Quellen und weiterführend

- **Anthropic (2024):** "Sleeper Agents: Training Deceptive LLMs that Persist Through Safety Training" — Hubinger et al., arXiv:2401.05566
- **Anthropic Engineering Blog:** Mechanistic Interpretability State-of-the-Art
- **BSI:** Veröffentlichungen zu KI-Lieferketten und Provenance (laufend)
- **EU AI Act:** Artikel zu General Purpose AI Models, Provenance-Anforderungen
- **Dokumentierte Bias-Tests:** Reproduzierbar mit Qwen, DeepSeek, Yi auf Themen Tiananmen, Taiwan, Xinjiang

---

## Verknüpfungen

- [[LLM-Infrastruktur-Optionen]] — Hosting-Optionen aus Datenschutzsicht
- [[LLM-Rechtlicher-Rahmen]] — DSGVO, AI Act, Compliance
- [[Provider-Falle]] — Wann der Anwender zum Hersteller wird
- [[Adaptive-Governance-Modelle]] — Governance-Frameworks für KI-Einsatz

---

*Stand: Mai 2026. Keine Rechtsberatung. Threat Model ist eine Strukturierung, kein Urteil.*

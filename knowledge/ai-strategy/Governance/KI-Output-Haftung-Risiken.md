---
title: KI-Output-Haftung und Risiken
type: reference
status: stable
created: '2025-02-08'
updated: '2025-02-08'
tags:
  - ai-governance
  - haftung
  - copyright
  - dsgvo
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
  - anwenden
contains:
  - concept
  - tip
  - checklist
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# KI-Output-Haftung und Risiken

> Die größten rechtlichen Risiken liegen nicht in der Nutzung von KI-Tools, sondern in der Veröffentlichung ihrer Outputs.

---

## Kernaussage

Die Haftung konzentriert sich auf die Output-Stufe: nicht auf das Nutzen von KI per se, sondern auf das Veröffentlichen von Inhalten, die memorisiertes urheberrechtlich geschütztes Material, erkennbare Marken oder Persönlichkeitsrechte verletzen könnten. Die Gerichte platzieren die primäre Verantwortung bei den Anbietern — aber Nutzer, die wissentlich verletzende Outputs publizieren, können haftbar sein.

---

## Risikokategorie 1: Urheberrechtsverletzung durch Memorisierung

**Das Risiko ist real und gerichtlich bestätigt.** Im GEMA v. OpenAI-Verfahren reproduzierte ChatGPT wörtlich urheberrechtlich geschützte Songtexte auf einfache Prompts hin. Das Gericht bewertete dies als Vervielfältigung (§ 16 UrhG) und öffentliche Zugänglichmachung (§ 19a UrhG).

**Wo das Risiko besonders hoch ist:**

Textbasierte Outputs, die literarische Passagen, Songtexte oder Code-Abschnitte reproduzieren, bergen das größte Risiko. Bildbasierte Outputs können erkennbare geschützte visuelle Werke oder Marken enthalten — der Getty-Wasserzeichen-Fall illustriert dies. Code-Outputs können lizenzpflichtige Codeblöcke enthalten (relevant bei Copilot/Codex).

**Haftungsverteilung:** Gerichte richten die primäre Haftung an den Anbieter (GEMA v. OpenAI, Getty v. Stability AI). Aber: Wer wissentlich KI-Outputs veröffentlicht, die urheberrechtlich geschütztes Material enthalten, haftet für die eigene Verbreitungshandlung nach § 97 UrhG.

---

## Risikokategorie 2: Markenrechtsverletzung

Outputs können Markenzeichen, Logos oder geschützte Designs enthalten. Das Getty-Wasserzeichen in Stable Diffusion-Outputs war der prominenteste Fall. Das UK High Court erkannte begrenzte Markenrechtsverletzung an.

**Praxis:** Bildbasierte KI-Outputs vor Veröffentlichung auf erkennbare Markenzeichen, Logos und geschützte Designs prüfen. Besonders relevant bei Outputs, die real wirkende Produktdarstellungen oder Verpackungen generieren.

---

## Risikokategorie 3: Persönlichkeitsrechte

KI-generierte Darstellungen realer Personen können Persönlichkeitsrechte nach §§ 823, 1004 BGB verletzen. Das betrifft fotorealistische Bilder von realen Personen ebenso wie Voice Cloning und textbasierte Zuschreibungen an reale Personen.

**Rechtslage:** Keine spezifische KI-Rechtsprechung in Deutschland, aber der bestehende Persönlichkeitsschutz ist robust. Für öffentliche Institutionen besonders relevant wegen erhöhter Vertrauenserwartungen.

---

## Risikokategorie 4: Stilnachahmung

Inhalte "im Stil von" lebenden Künstlern oder Autoren reproduzieren möglicherweise kein konkretes geschütztes Werk — aber sie können Persönlichkeitsrechte oder Wettbewerbsrecht (UWG) verletzen. Es gibt keine gesicherte deutsche Rechtsprechung zu KI-spezifischer Stilnachahmung. Das Reputationsrisiko für Unternehmen und Institutionen ist allerdings unabhängig von der rechtlichen Klärung real.

---

## Risikokategorie 5: DSGVO-Verstöße

Die Eingabe personenbezogener Daten in Cloud-basierte KI-Tools stellt Datenverarbeitung dar. Standard-Consumer-Versionen von ChatGPT, Gemini etc. sind für institutionelle Nutzung nicht DSGVO-konform: Daten können für Training verwendet werden, Transfer auf US-Server ohne angemessene Schutzmaßnahmen, keine ordnungsgemäßen Auftragsverarbeitungsverträge (AVV).

**Empfehlung:** Enterprise-Versionen mit AVV nutzen. EU-gehostete Alternativen (Mistral, Self-hosted Open Source) bieten den sichersten Pfad. Niemals personenbezogene Daten, vertrauliche Forschungsergebnisse oder Geschäftsgeheimnisse in Standard-Consumer-Tools eingeben.

---

## Risikokategorie 6: Offene Grauzone "Schutzfähigkeitsschwelle"

Kein deutsches Gericht hat bisher definiert, wie viel menschlicher kreativer Input ein KI-assistiertes Werk schutzfähig macht. Das bedeutet: KI-gestützte Marketing-Materialien, Illustrationen oder Texte könnten von Wettbewerbern frei kopiert werden, wenn Gerichte später unzureichende menschliche Beteiligung feststellen.

**Risikominderung:** Detailliertes iteratives Prompting, substanzielle Nachbearbeitung und Dokumentation des menschlichen Beitrags stärken eine spätere Urheberrechtsposition → siehe [[Urheberrecht-KI-Inhalte]].

---

## Praxis-Checkliste: Risikominimierung

**Vor der Generierung:** Datensensitivität klassifizieren. Tool institutionell freigegeben? AVV vorhanden bei Enterprise-Tools? Keine personenbezogenen Daten, vertrauliche Forschung oder Geschäftsgeheimnisse eingeben.

**Nach der Generierung:** Output als Entwurf behandeln. Faktische Korrektheit prüfen. Auf Copyright-Infringement prüfen (besonders bei Bildern). Auf Markenrechtskonflikte screenen. Auf Persönlichkeitsrechte prüfen. Menschliches Review und Freigabe.

**Vor der Veröffentlichung:** KI-Disclosure-Labels anbringen (verpflichtend ab August 2026, Best Practice jetzt). Tool, Version, Datum, Zweck und Umfang der menschlichen Bearbeitung dokumentieren.

**Wann Rechtsberatung einbeziehen:** Bei Inhalten für kommerzielle Verwertung. Bei Darstellungen realer Personen oder Nachahmung spezifischer Stile. Bei öffentlich geförderten Projekten. Wenn IP-Ownership vertraglich relevant ist.

---

## Verknüpfungen

- [[Urheberrecht-KI-Inhalte]] – Schutzfähigkeit und Spektrum menschlicher Beteiligung
- [[KI-Urteile-Referenz]] – GEMA, Getty und die laufende Rechtsprechung
- [[TDM-Ausnahmen-KI-Training]] – Warum Memorisierung den TDM-Rahmen sprengt
- [[KI-Tool-Lizenzen-Vergleich]] – Indemnification-Optionen nach Anbieter
- [[EU-AI-Act-Ueberblick]] – Kennzeichnungspflicht und Sanktionen
- [[Ethische-Prinzipien-KI]] – Transparenz, Wahrhaftigkeit, Datenschutz
- [[Adaptive-Governance-Modelle]] – Risikobasierte Kontrollen in der Praxis

---

*Stand: Februar 2026 | Keine Rechtsberatung*

---
title: Urheberrecht und KI-generierte Inhalte
type: reference
status: stable
created: '2025-02-08'
updated: '2025-02-08'
tags:
  - copyright
  - ai-governance
  - urheberrecht
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
  - argument
  - example
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Urheberrecht und KI-generierte Inhalte

> Wer besitzt, was die KI erzeugt? Warum die Antwort "niemand" lautet — und was das für die Praxis bedeutet.

---

## Kernaussage

Rein KI-generierte Inhalte erhalten nach deutschem und EU-Recht keinen Urheberrechtsschutz. Entscheidend ist der Grad menschlicher kreativer Beteiligung. Das ist gleichzeitig eine Freiheit (jeder darf KI-Outputs nutzen) und eine Verwundbarkeit (jeder darf deine KI-Outputs kopieren).

---

## Rechtsgrundlage: § 2 Abs. 2 UrhG

Das deutsche Urheberrecht schützt nur "persönliche geistige Schöpfungen" — also Werke, die von einem Menschen geschaffen wurden. KI-Systeme sind keine Personen. Sie können nicht Urheber sein. Daraus folgt: Weder der Nutzer, noch der Tool-Anbieter, noch der Entwickler hält Urheberrechte an rein KI-generierten Outputs.

Wenn OpenAI in seinen ToS schreibt, sie "assign all right, title, and interest" an Outputs an Nutzer, ist das vertraglich gut gemeint, aber urheberrechtlich leer — man kann kein Recht übertragen, das nicht existiert.

**Strukturelle Besonderheit DE:** Deutsches Urheberrecht kann nicht vollständig abgetreten werden (nur Nutzungsrechte nach § 31 UrhG). Urheberpersönlichkeitsrechte sind unveräußerlich. Es gibt kein "Work for Hire"-Äquivalent wie im US-Recht.

---

## Das Spektrum menschlicher Beteiligung

Die rechtliche Einordnung hängt davon ab, wie viel Mensch im Output steckt:

| Szenario | Beispiel | Schutzfähig? |
|----------|----------|-------------|
| **KI als Werkzeug** | Rechtschreibprüfung, Bildfilter, Formatierung | Ja — Mensch bleibt Urheber |
| **Menschliche kreative Steuerung** | Detailliertes iteratives Prompting, substanzielle Nachbearbeitung, gezielte Gestaltungsentscheidungen | Grauzone — möglicherweise schutzfähig, aber kein deutsches Urteil bestätigt dies |
| **KI bestimmt Ausdruckselemente autonom** | Einfacher Prompt → Output | Nein — nicht schutzfähig. Der Prompt ist eine Idee, kein kreativer Ausdruck |

**Praxiskonsequenz:** Je mehr dokumentierbare menschliche Gestaltungsentscheidungen im Prozess, desto stärker eine potenzielle Urheberrechtsposition. "Stärker" heißt allerdings nicht "sicher" — die genaue Schwelle ist ungeklärt.

---

## Internationaler Vergleich

| Jurisdiktion | Position | Besonderheiten |
|--------------|----------|----------------|
| **Deutschland / EU** | Menschliche Urheberschaft zwingend (§ 2 UrhG). Kein Schutz für rein KI-generierte Inhalte. | EU-Parlament (Voss-Report, Juni 2025): KI-generierte Inhalte sollen nicht schutzfähig sein |
| **USA** | Menschliche Urheberschaft als "bedrock requirement" (Thaler v. Perlmutter). USCO registriert Werke mit KI-Anteilen nur für menschliche Auswahl/Anordnung. | Zarya of the Dawn (2023): Einzelne KI-Bilder nicht schutzfähig, aber Compilation durch menschliche Auswahl schon |
| **Italien** | Ausreißer: Gesetz vom Oktober 2025 schützt KI-assistierte Werke explizit bei "ausreichender menschlicher geistiger Arbeit" | Einziger EU-Staat mit eigener Regelung |
| **UK** | Computer-generated works erhalten 50 Jahre Schutz (§ 9(3) CDPA 1988), aber diese Regel stammt aus 1988 und wurde nicht für generative KI geschrieben. Reform in Diskussion. | Getty v. Stability AI lieferte kein abschließendes Ergebnis zur Copyright-Frage |

---

## Was das für Unternehmen bedeutet

**Risiko "Kein Schutz":** KI-generierte Marketing-Materialien, Illustrationen oder Texte können von Wettbewerbern frei kopiert werden, wenn Gerichte unzureichende menschliche Beteiligung feststellen. Es gibt keinen Unterlassungsanspruch, keinen Schadensersatz.

**Risiko "Infringement":** Gleichzeitig können KI-Outputs urheberrechtlich geschütztes Trainingsmaterial reproduzieren — das GEMA-Urteil hat gezeigt, dass Memorization real ist → siehe [[KI-Output-Haftung-Risiken]].

**Schutzstrategie:** Menschliche kreative Leistung dokumentieren. Nicht nur prompten, sondern gestalten, kuratieren, überarbeiten — und diesen Prozess nachweisbar machen. Das stärkt eine spätere Urheberrechtsposition, auch wenn die Rechtslage noch nicht geklärt ist.

---

## Ausblick: Was sich ändern wird

Die Rechtslage ist in Bewegung. Drei Entwicklungen werden entscheidend sein:

Das **CJEU-Verfahren Like Company v. Google (C-250/25)**, verwiesen im April 2025, wird erstmals auf EU-Ebene klären, ob Chatbot-Outputs "Kommunikation an die Öffentlichkeit" darstellen. Urteil erwartet Ende 2026/2027.

Die **DSM-Richtlinien-Überprüfung**, mandatiert für Juni 2026, könnte den Rahmen für Text and Data Mining und damit indirekt für die Schutzfähigkeit von KI-Outputs grundlegend umstrukturieren.

Auf nationaler Ebene wird die **BGH-Rechtsprechung** nach einem möglichen GEMA-Berufungsverfahren Klarheit für die deutsche Praxis schaffen.

---

## Verknüpfungen

- [[EU-AI-Act-Ueberblick]] – Regulatorischer Rahmen inkl. Kennzeichnungspflichten
- [[KI-Urteile-Referenz]] – Laufende Rechtsprechung mit Relevanz für Urheberrecht
- [[KI-Output-Haftung-Risiken]] – Haftung bei Veröffentlichung von KI-Inhalten
- [[TDM-Ausnahmen-KI-Training]] – Urheberrechtliche Basis des KI-Trainings
- [[KI-Tool-Lizenzen-Vergleich]] – Was die ToS der Anbieter tatsächlich gewähren
- [[Ethische-Prinzipien-KI]] – Transparenz und Wahrhaftigkeit als ethischer Kompass

---

*Stand: Februar 2026 | Keine Rechtsberatung*

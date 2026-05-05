---
title: Anonymisierung vs. Pseudonymisierung
type: vocabulary
status: stable
created: '2025-06-15'
updated: '2025-06-15'
tags:
  - dsgvo
  - datenschutz
  - ai-governance
  - anonymisierung
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
  - vocabulary
  - tip
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Anonymisierung vs. Pseudonymisierung

> Die wichtigste Unterscheidung im Datenschutz bei KI-Nutzung — und warum die meisten Unternehmen sie falsch anwenden.

---

## Kernaussage

Anonymisierte Daten fallen komplett aus dem Anwendungsbereich der DSGVO heraus. Pseudonymisierte Daten bleiben personenbezogene Daten — die DSGVO gilt weiterhin vollständig. Diese Unterscheidung hat enorme praktische Konsequenzen: Wer pseudonymisierte Daten fälschlich als anonym behandelt, riskiert Bußgelder von bis zu 20 Millionen Euro oder 4 % des globalen Jahresumsatzes.

---

## Definitionen im DSGVO-Kontext

**Anonymisierung** wird in der DSGVO nicht in einem eigenen Artikel definiert, sondern ausschließlich in Erwägungsgrund 26. Dort heißt es, dass die Datenschutzgrundsätze nicht für Informationen gelten, die sich nicht auf eine identifizierte oder identifizierbare natürliche Person beziehen. Der Maßstab ist bewusst hoch angesetzt: Es müssen alle Mittel berücksichtigt werden, die nach allgemeinem Ermessen wahrscheinlich zur Identifikation genutzt werden — einschließlich Kosten, Zeitaufwand und verfügbarer Technologie.

**Pseudonymisierung** hat eine klare Legaldefinition in Art. 4 Nr. 5 DSGVO: die Verarbeitung personenbezogener Daten in einer Weise, dass sie ohne Hinzuziehung zusätzlicher Informationen nicht mehr einer spezifischen Person zugeordnet werden können. Entscheidend: Diese zusätzlichen Informationen (etwa eine Zuordnungstabelle) müssen gesondert aufbewahrt und durch technische und organisatorische Maßnahmen geschützt werden.

---

## Wann gilt Anonymisierung als irreversibel?

Die DSGVO verlangt keine absolute mathematische Unmöglichkeit der Re-Identifikation, sondern einen risikobasierten Ansatz. Die ehemalige Artikel-29-Datenschutzgruppe (WP29) hat in ihrer Opinion 05/2014 drei Angriffsvektoren definiert, denen echte Anonymisierung standhalten muss:

| Angriffsvektor | Bedeutung | Beispiel |
|---|---|---|
| **Herausgreifen** (Singling Out) | Eine Person von allen anderen unterscheiden | Einzige weibliche Führungskraft in der Abteilung |
| **Verknüpfbarkeit** (Linkability) | Datensätze derselben Person über verschiedene Quellen verbinden | Anonymisierte Bewertung + öffentliches LinkedIn-Profil |
| **Inferenz** (Inference) | Aus Datenmustern auf eine Person schließen | Forschungsthema + Institution = identifizierbar |

Deutsche Datenschutzbehörden betonen zusätzlich: Anonymisierung ist ein laufender Prozess. Was heute anonym ist, kann morgen durch neue Technologien wieder identifizierbar werden — insbesondere durch LLMs, die Re-Identifikationsangriffe erheblich vereinfachen → siehe [[Re-Identifikation-Risiken]].

---

## Rechtliche Konsequenzen im Vergleich

| Aspekt | Anonymisierung | Pseudonymisierung |
|---|---|---|
| DSGVO-Anwendbarkeit | Fällt heraus | Gilt weiterhin vollständig |
| Rechtsgrundlage nötig? | Nein (nach erfolgreicher Anonymisierung) | Ja — Art. 6 DSGVO |
| Betroffenenrechte | Gelten nicht | Gelten vollständig |
| Meldepflicht bei Datenpanne | Nein | Ja (Art. 33, 34 DSGVO) |
| Löschpflichten | Nein | Ja (Art. 17 DSGVO) |
| DSFA erforderlich? | Nein | Potenziell ja |

Ein kritischer Punkt, den viele übersehen: Der Anonymisierungsprozess selbst ist eine Datenverarbeitung im Sinne der DSGVO und braucht eine eigene Rechtsgrundlage nach Art. 6. Erst nach erfolgreicher Anonymisierung entfallen die DSGVO-Pflichten.

---

## Die gefährliche Verwechslung

Das Ersetzen von Namen durch „Person 1, Person 2" in Meeting-Protokollen ist Pseudonymisierung, nicht Anonymisierung. Wenn irgendjemand in der Organisation herausfinden kann, wer „Person 1" ist — weil bekannt ist, wer an dem Meeting teilgenommen hat — bleiben die Daten personenbezogen. Der EDPB betont in Opinion 28/2024: Wenn eine Aufsichtsbehörde anhand der Dokumentation nicht bestätigen kann, dass eine wirksame Anonymisierung vorliegt, kann sie auf einen Verstoß gegen die Rechenschaftspflicht (Art. 5 Abs. 2 DSGVO) schließen.

---

## Aktuelle Leitlinien (2024–2026)

**EDPB Opinion 28/2024** (Dezember 2024): Erstmals umfassende Stellungnahme zur Frage, ob KI-Modelle personenbezogene Daten enthalten. Kernaussage: KI-Modelle, die mit personenbezogenen Daten trainiert wurden, sind nicht automatisch anonym. Sowohl die Wahrscheinlichkeit einer direkten Extraktion als auch die Möglichkeit, über gezielte Abfragen persönliche Informationen zu erhalten, muss „insignifikant" sein.

**EDPB Guidelines 01/2025** (Januar 2025): Führen ein Drei-Schritte-Verfahren zur Pseudonymisierung und das Konzept der „Pseudonymisierungsdomäne" ein. Je weiter der Kreis der Empfänger, desto umfassendere Schutzmaßnahmen sind erforderlich.

**DSK-Orientierungshilfe** (Mai 2024): Erstes gesamtdeutsches behördliches Orientierungsdokument zu KI und DSGVO. Im Januar 2025 kündigte die DSK spezifische Hilfestellungen für effektive Anonymisierung an. Im Juni 2025 folgte die Orientierungshilfe zu technischen und organisatorischen Maßnahmen bei KI-Systemen.

**EuGH-Urteil SRB/EDPS** (C-413/23 P, September 2025): Der Personenbezug von Daten ist relativ — dieselben pseudonymisierten Daten können für den Absender personenbezogen und für den Empfänger (der keine Re-Identifikationsmittel hat) anonym sein.

---

## Entscheidungshilfe: Wann welches Verfahren?

Die Wahl hängt von vier Schlüsselfaktoren ab:

| Faktor | Pseudonymisierung reicht | Anonymisierung nötig |
|---|---|---|
| **Datensensibilität** | Allgemeine personenbezogene Daten | Besondere Kategorien (Art. 9) |
| **Zugangsweite** | Geschlossenes internes System | Externe Cloud-KI-Tools |
| **Re-Identifikationsbedarf** | Spätere Zuordnung notwendig | Keine Rückführung benötigt |
| **Verarbeitungszweck** | Interne Analyse | Veröffentlichung, KI-Training durch Dritte |

---

## Verknüpfungen

- [[Personenbezogene-Daten-Taxonomie]] — Was alles als personenbezogene Daten gilt
- [[Anonymisierungstechniken]] — Verfahren von Maskierung bis Differential Privacy
- [[Re-Identifikation-Risiken]] — Warum Anonymisierung oft scheitert
- [[KI-Output-Haftung-Risiken]] — DSGVO-Verstöße bei Cloud-KI-Nutzung
- [[EU-AI-Act-Ueberblick]] — KI-Kompetenzpflicht und regulatorischer Rahmen

---

*Stand: Februar 2026 | Keine Rechtsberatung*

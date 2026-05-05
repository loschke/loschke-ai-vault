---
title: Re-Identifikation – Risiken
type: reference
status: stable
created: '2025-06-15'
updated: '2025-06-15'
tags:
  - dsgvo
  - datenschutz
  - ai-governance
  - anonymisierung
  - re-identifikation
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
  - example
  - tip
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Re-Identifikation – Risiken

> Warum Anonymisierung regelmäßig scheitert — und was das für den praktischen Umgang mit Daten im KI-Kontext bedeutet.

---

## Kernaussage

Re-Identifikation ist einfacher als die meisten annehmen. Spektakuläre Fälle von Netflix über AOL bis zu Anthropics „anonymisierten" Interviewdaten zeigen: Bloßes Entfernen von Namen reicht fast nie für echte Anonymisierung. Quasi-Identifikatoren, Metadaten und kontextuelle Informationen ermöglichen Re-Identifikation — und LLMs machen diese Angriffe so einfach wie nie zuvor.

---

## Spektakuläre Re-Identifikationsfälle

**Netflix-Prize (2006/2007):** Bereits 2–8 bekannte Filmbewertungen aus einer externen Quelle (z.B. öffentliche IMDb-Rezensionen) reichten aus, um Netflix-Abonnenten in einem Datensatz von 100 Millionen Bewertungen eindeutig zu identifizieren — einschließlich sensibler Sehgewohnheiten.

**AOL-Suchdatenleck (2006):** New-York-Times-Reporter identifizierten „User 4417749" als eine 62-jährige Frau aus Georgia — allein anhand ihrer Suchanfragen nach lokalen Dienstleistern und Gesundheitsthemen.

**NYC-Taxi-Daten (2014):** Über reversible MD5-Hashes wurden Fahrten und Trinkgelder aller Taxifahrer entschlüsselt und öffentlich zugänglich.

**Anthropic-Interviewtranskripte (Dezember 2025):** Anthropic veröffentlichte 1.250 „anonymisierte" Interviewtranskripte. Forscher Tianshi Li zeigte im Januar 2026, dass LLMs mit Websuche 6 von 24 Wissenschaftlern automatisch re-identifizieren konnten. Sein Fazit: „Moderne LLM-basierte Agenten machen Re-Identifikationsangriffe einfach und aufwandsarm." Was früher Expertenwissen erforderte, erledigen heute Standard-KI-Tools mit wenigen Prompts.

---

## Systematisch übersehene Schwachstellen

**Datei-Metadaten** sind der blinde Fleck Nummer eins. Word- und PDF-Dokumente enthalten Autorennamen, Organisationsinformationen, Dateipfade, Änderungsverläufe und den letzten Bearbeiter. Fotos speichern GPS-Koordinaten, Gerätemodell und Zeitstempel in EXIF-Daten — John McAfee wurde 2012 geortet, weil ein Vice-Magazin-Foto seine GPS-Koordinaten enthielt. Abhilfe in Word: „Datei → Informationen → Auf Probleme überprüfen → Dokument prüfen" — alle persönlichen Informationen entfernen.

**Stilometrie** ermöglicht die Identifikation von Autoren anhand ihres Schreibstils — bereits ab 500 Wörtern durch Analyse von Funktionswörtern, Satzlängen und Zeichensetzungsgewohnheiten. LLMs machen stilometrische Analysen dramatisch zugänglicher.

**Kleine Datensätze** machen einfache Anonymisierung wirkungslos. Faustregel: Bei weniger als 100 Datensätzen ist das bloße Entfernen von Namen fast sicher unzureichend. In einer Organisation mit fünf Personen in einem Fachbereich identifiziert das Arbeitsthema die Person sofort.

**Kontextuelle Informationen** in Texten verraten Identitäten ohne direkte Nennung: „die einzige weibliche Abteilungsleiterin", „der Kollege, der letztes Jahr den Innovationspreis gewonnen hat", die Kombination aus Forschungsthema, Teamgröße und Zeitrahmen.

---

## LLMs als Re-Identifikationswaffe

Der Anthropic-Fall von Dezember 2025 markiert einen Wendepunkt. Die Implikationen:

LLMs können öffentlich verfügbare Informationen (LinkedIn, Publikationslisten, Konferenzprogramme) automatisiert mit „anonymisierten" Daten verknüpfen. Die Kosten und der Zeitaufwand für Re-Identifikationsangriffe sinken dramatisch. Der risikobasierte Ansatz der DSGVO — „alle Mittel, die nach allgemeinem Ermessen wahrscheinlich genutzt werden" — muss angesichts von LLMs neu bewertet werden. Was gestern als anonym galt, ist heute möglicherweise identifizierbar.

Für die Praxis bedeutet das: Anonymisierungsentscheidungen müssen den aktuellen Stand der KI-Fähigkeiten berücksichtigen. Die Schwelle für echte Anonymisierung steigt kontinuierlich → siehe [[Anonymisierung-vs-Pseudonymisierung]].

---

## Risiken bei Cloud-KI-Tools

**Das fundamentale Problem:** LLMs können einmal in Trainingsdaten aufgenommene Fakten nicht gezielt „vergessen" — die niederländische DPA bestätigte dies 2025.

**Anbieter-Unterschiede:** ChatGPT Free/Plus nutzt Eingaben standardmäßig zum Training (Opt-out möglich). ChatGPT Enterprise tut dies nie. Claude Consumer bietet ein Opt-in-System. Für organisatorische Nutzung gilt: Enterprise-API mit EU-Datenresidenz oder On-Premise-Deployment ist der empfohlene Ansatz. Consumer-Versionen sollten für Arbeit mit personenbezogenen Daten untersagt sein.

**Der EU-US Data Privacy Framework (DPF)** wurde vom EuG im September 2025 bestätigt, steht aber vor Berufung vor dem EuGH. Angesichts der Tatsache, dass der EuGH bereits Safe Harbor und Privacy Shield für ungültig erklärt hat, raten Norwegens DPA und das deutsche Bundesinnenministerium zu Exit-Strategien.

**Bei versehentlicher PII-Eingabe:** Restriktivste Privatsphäre-Einstellungen aktivieren. Konversation löschen (löst 30-Tage-Backend-Löschung aus). Anbieter-Datenschutzteam kontaktieren. Vorfall dokumentieren. Meldung an Aufsichtsbehörde nach Art. 33 DSGVO innerhalb von 72 Stunden ist wahrscheinlich erforderlich, wenn sensible Daten an ein US-basiertes Consumer-KI-Tool übermittelt wurden.

---

## Verknüpfungen

- [[Anonymisierung-vs-Pseudonymisierung]] — Die rechtliche Grundunterscheidung
- [[Personenbezogene-Daten-Taxonomie]] — Quasi-Identifikatoren und Singling Out
- [[Anonymisierungstechniken]] — Welche Verfahren gegen Re-Identifikation schützen
- [[Anonymisierung-Toolstack]] — Warum manuelle Prüfung unverzichtbar bleibt
- [[KI-Output-Haftung-Risiken]] — Haftung bei DSGVO-Verstößen durch KI-Nutzung

---

*Stand: Februar 2026 | Keine Rechtsberatung*

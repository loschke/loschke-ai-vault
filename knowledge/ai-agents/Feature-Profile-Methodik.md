---
title: Feature-Profile-Methodik
type: method
status: stable
created: '2026-03-09'
updated: '2026-03-09'
tags:
  - ai-agents
sources:
  - 'self-authored:loschke:enterprise-ai-agents'
area: ai-agents
audience:
  - konzepter
  - entwickler
  - fuehrungskraft
  - produktmanager
level: intermediate
intent:
  - anwenden
  - verkaufen
contains:
  - method
  - argument
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Feature-Profile-Methodik

> Nicht jedes KI-Feature braucht alles auf Maximum. Die vier Elemente der [[Assistenz-Architektur]] sind ein Mischpult mit vier Reglern — jedes Feature hat sein eigenes Profil.

---

## Kernaussage

Die Assistenz-Architektur beschreibt den Maximalausbau: Sensor, Gedaechtnis, Kompass, Stimme — alle auf Maximum. Aber die Realitaet startet nicht mit dem Superchat. Sie startet mit kleinen, fokussierten KI-Features: eine intelligente Suche, ein Formular-Assistent, ein Onboarding-Dialog. Jedes Feature hat andere Anforderungen und braucht einen anderen Ausschnitt aus der Architektur.

Die Methodik: Fuer jedes geplante Feature die vier Elemente bewerten — von "brauchen wir nicht" bis "voll ausgebaut". Das ergibt ein Profil, das Aufwand, Modellwahl und Architektur-Entscheidungen bestimmt.

---

## Die vier Regler

| Regler | Kernfrage | Was bestimmt die Intensitaet? |
|--------|-----------|-------------------------------|
| **Sensor** | Wie komplex ist das Anliegen? | Anzahl moeglicher Intentionen, emotionale Varianz |
| **Gedaechtnis** | Wie viel muss das Feature wissen? | Umfang der Wissensdomaene, Anzahl Quellen |
| **Kompass** | Wie hoch ist das Haftungsrisiko? | Regulatorische Anforderungen, Fehlerfolgen |
| **Stimme** | Wie differenziert muss die Antwort klingen? | Dialogtiefe, Emotionssensitivitaet, Kanalvielfalt |

---

## Intensitaetsstufen

| Stufe | Beschreibung |
|-------|-------------|
| **Nicht noetig** | Element spielt fuer dieses Feature keine Rolle |
| **Minimal** | Grundfunktion, keine Differenzierung |
| **Leicht** | Einfache Auspraegung, wenige Varianten |
| **Mittel** | Solide Auspraegung, mehrere Varianten oder Situationen |
| **Voll** | Maximalausbau, alle Faehigkeiten des Elements aktiv |

---

## Beispiel-Profile

### Natuerlichsprachige Suche

Nutzer suchen per Freitext statt ueber Filter und Dropdowns. "Rueckenkurse abends in Magdeburg."

| Element | Stufe | Begruendung |
|---------|-------|-------------|
| Sensor | Nicht noetig | Die Intention ist immer gleich: "Finde mir etwas." |
| Gedaechtnis | Voll | Braucht die komplette Datenbank als durchsuchbaren Context. |
| Kompass | Nicht noetig | Kein Haftungsrisiko bei Suchergebnissen. |
| Stimme | Minimal | Suchergebnisse formatieren. Kein Dialog. |

### Onboarding-Dialog (z.B. Kursempfehlung)

Statt Fragebogen fuehrt ein Dialog den Nutzer zum passenden Angebot.

| Element | Stufe | Begruendung |
|---------|-------|-------------|
| Sensor | Leicht | Erkennt Praeferenzen und Einschraenkungen, keine emotionalen Lagen. |
| Gedaechtnis | Mittel | Datenbank + Zuordnungslogik. Kein umfassendes Fachwissen noetig. |
| Kompass | Leicht | Kaum Haftungsrisiko. Aber bei Vorerkrankungen: Verweis an Fachperson. |
| Stimme | Mittel | Motivierend, fuehrend. Muss sich wie ein gutes Gespraech anfuehlen. |

### Formular-Assistent

Komplexe Antraege werden dialogisch gefuehrt statt als Formular mit 30 Feldern.

| Element | Stufe | Begruendung |
|---------|-------|-------------|
| Sensor | Minimal | Intention ist klar: "Hilf mir beim Ausfuellen." |
| Gedaechtnis | Mittel | Feld-Definitionen, Optionen, Abhaengigkeiten. Kein Vollwissen. |
| Kompass | Mittel | Darf keine Angaben vorschlagen. Datenschutz bei persoenlichen Daten. |
| Stimme | Leicht | Klar, fuehrend, geduldig. Keine Tonanpassung nach Emotion. |

### Proaktive Push-Empfehlungen

System erkennt Anlaesse und schickt personalisierte Hinweise.

| Element | Stufe | Begruendung |
|---------|-------|-------------|
| Sensor | Mittel | Muss Anlass erkennen und Relevanz einschaetzen. |
| Gedaechtnis | Mittel | Leistungswissen + Nutzerprofil. Gezielt, nicht alles. |
| Kompass | Mittel | Keine Zusagen. Keine ungebetene Gesundheitsberatung. Opt-out respektieren. |
| Stimme | Voll | 1-2 Saetze die sitzen muessen. Tonalitaet entscheidet ueber Klick oder Ignorieren. |

### Vollassistent (Chat)

Offene Fragen, alle Themen, alle Situationen, alle Emotionen.

| Element | Stufe | Begruendung |
|---------|-------|-------------|
| Sensor | Voll | Alle Intentionen, Mehrfach-Erkennung, Gespraechsverlauf. |
| Gedaechtnis | Voll | Alle Domaenen, Tools, Echtzeit-Daten, Nutzerprofil. |
| Kompass | Voll | Maximales Haftungsrisiko. Alle Constraints und Pruefsteine aktiv. |
| Stimme | Voll | Alle Steuerparameter. Kognitive Kapazitaet. Multi-Kanal. |

---

## Was wiederverwendbar ist

Die Features sind unterschiedlich. Aber die Infrastruktur dahinter ist dieselbe.

**Einmal bauen, ueberall nutzen:**
- Wissensbausteine / Cluster-Dokumente — derselbe Baustein funktioniert in verschiedenen Features
- Kompass-Verfassung — dieselben Werte und Constraints gelten fuer jede KI-Insel
- Kommunikationshaltungen — "Transparent mit Einordnung" gilt ueberall, nur die Intensitaet variiert

**Pro Feature konfigurieren:**
- Welche Elemente aktiv sind und in welcher Intensitaet
- Welcher Context geladen wird
- Welches Modell eingesetzt wird

---

## Methodik: Feature-Profil erstellen

Fuer jedes geplante KI-Feature:

1. **Feature beschreiben** — Was tut es? Wer nutzt es? In welchem Kontext?
2. **Vier Regler bewerten** — Sensor, Gedaechtnis, Kompass, Stimme: jeweils Stufe und Begruendung
3. **Abhaengigkeiten pruefen** — Welche Infrastruktur-Elemente existieren bereits?
4. **Modell waehlen** — Kleine Features brauchen kleine Modelle. Nur der Vollassistent braucht das groesste.
5. **Aufwand einschaetzen** — Ein Feature mit vier "Minimal"-Reglern ist in Tagen umsetzbar. Vier "Voll"-Regler brauchen Monate.

---

## Verknuepfungen

- [[Assistenz-Architektur]] — Das Gesamtframework mit den vier Elementen
- [[Sensor-Intentionserkennung]] — Sensor-Regler im Detail
- [[Gedaechtnis-Context-Engineering]] — Gedaechtnis-Regler im Detail
- [[Kompass-Verfassung]] — Kompass-Regler im Detail
- [[Stimme-Kommunikation]] — Stimme-Regler im Detail
- [[Cluster-vs-Bausteine]] — Welche Granularitaet passt zu welchem Feature?

---

*Quelle: Eigene Beratungspraxis, entwickelt 2025/2026*

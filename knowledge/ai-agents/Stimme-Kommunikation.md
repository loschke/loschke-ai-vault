---
title: Stimme — Kommunikation
type: framework
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
  - ux
  - redaktion
level: intermediate
intent:
  - verstehen
  - anwenden
contains:
  - concept
  - method
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Stimme — Kommunikation

> Element 4 der Assistenz-Architektur: Wie kommt die Antwort beim Menschen an?

---

## Kernaussage

Die Stimme ist das letzte Element. Sie nimmt alles — Sensor-Erkennung, Gedaechtnis-Fakten, Kompass-Grenzen — und formt daraus die Antwort, die bei diesem Menschen in dieser Situation ankommt. Gleicher Inhalt kann voellig unterschiedlich klingen, je nach Beduerfnis, Zustand und Medium.

---

## Drei Kommunikationshaltungen

Das Grundregister jeder Antwort — unabhaengig von Thema, Intention oder Medium:

1. **Transparent mit Einordnung** — Nicht nur Fakten auflisten, sondern einordnen. Alternativen zeigen, Zusammenhaenge erklaeren. Informieren statt belehren.
2. **Auf Augenhoehe** — Wie ein kompetenter Berater, der neben dem Nutzer sitzt. Nicht von oben herab, nicht unterwuerfig.
3. **Sachlich, nicht kalt** — Faktenbasiert und praezise, aber die emotionale Situation beruecksichtigen. Besonders bei vulnerablen Gruppen.

---

## Vier Steuerparameter

Jede Antwort wird ueber vier Parameter gesteuert — die erkannte Intention bestimmt die Einstellung:

| Parameter | Was er steuert | Spektrum |
|-----------|---------------|----------|
| **Tonalitaet** | Wie klingt die Antwort? | Beruhigend ↔ Sachlich ↔ Motivierend |
| **Informationstiefe** | Wie viel Detail? | Minimal (1-2 Saetze) ↔ Vollstaendig |
| **Proaktivitaet** | Wie viel bietet das System ungefragt an? | Nur Antwort ↔ Aktiv weiterdenken |
| **Ausgabemedium** | In welchem Format? | Chat ↔ Push ↔ Audio ↔ PDF ↔ Wizard |

### Parameter-Konfiguration nach Intention (Beispiel)

| Intention | Tonalitaet | Tiefe | Proaktivitaet |
|---|---|---|---|
| Akute Sorge | Beruhigend, empathisch | Minimal | Hoch |
| Leistungsklaerung | Direkt, klar | Praezise | Niedrig-mittel |
| Angehoerigen-Sorge | Unterstuetzend | Mittel | Hoch |
| Praeventive Vorsorge | Motivierend, einladend | Mittel | Mittel-hoch |

---

## Kognitive Kapazitaet als Gatekeeper

Der Zustand des Menschen filtert die Antwort nochmal — unabhaengig davon, was Gedaechtnis und Sensor liefern:

| Kapazitaet | System-Reaktion |
|---|---|
| Niedrig (Stress, Krise) | Radikal kuerzen. Ein-Satz-Antworten. Eine Handlungsoption. |
| Mittel (Belastet) | Portionieren. Wichtigstes zuerst. Expand-Optionen fuer Details. |
| Hoch (Routine, Entspannt) | Vollstaendige Information. Details und Hintergruende moeglich. |

---

## Gleiches Thema, verschiedene Medien

Dieselben Fakten, voellig andere Delivery:

**Desktop-Chat:** Ausfuehrliche strukturierte Antwort mit Listen, Betraegen, Verweisen und Haftungshinweis.

**Mobil (unterwegs):** "Bei Pflegegrad 2 gibt es Pflegegeld (332 EUR/Monat) oder Sachleistung (761 EUR/Monat). Soll ich dir spaeter eine vollstaendige Uebersicht schicken?"

**Push-Nachricht:** "Tipp: Bei Pflegegrad 2 steht euch auch ein Entlastungsbetrag von 125 EUR/Monat zu. Schon genutzt?"

Die Fakten bleiben identisch. Nur Laenge, Ton, Struktur und Format aendern sich.

---

## Intensitaetsstufen im Feature-Profil

| Stufe | Beschreibung | Beispiel-Feature |
|-------|-------------|-----------------|
| Minimal | Suchergebnisse formatieren. Kein Dialog. | Natuerlichsprachige Suche |
| Leicht | Klar, fuehrend, geduldig. Keine Tonanpassung nach Emotion. | Formular-Assistent |
| Mittel | Motivierend, fuehrend. Muss sich wie ein Gespraech anfuehlen. | Kurs-Onboarding |
| Voll (Push) | 1-2 Saetze die sitzen muessen. Tonalitaet entscheidet ueber Klick oder Ignorieren. | Push-Empfehlungen |
| Voll (Chat) | Alle Parameter aktiv. Kognitive Kapazitaet. Multi-Kanal. | Vollassistent |

---

## Verknuepfungen

- [[Assistenz-Architektur]] – Das Gesamtframework
- [[Sensor-Intentionserkennung]] – Die erkannte Intention steuert die Steuerparameter
- [[Kompass-Verfassung]] – Was die Stimme sagen darf und was nicht
- [[Feature-Profile-Methodik]] – Stimme-Regler pro Feature

---

*Quelle: Eigene Beratungspraxis, entwickelt 2025/2026*


---

## Technische Implementierung

- [[Stimme-Implementierung]] – Wie die Stimme technisch umgesetzt wird: Zwei Eingaenge, drei Schichten, strukturierte Ausgabe


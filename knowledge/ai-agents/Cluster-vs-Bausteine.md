---
title: Cluster-Dokument vs. Atomare Bausteine
type: concept
status: stable
created: '2026-03-09'
updated: '2026-03-09'
tags:
  - ai-agents
sources:
  - 'self-authored:loschke:enterprise-ai-agents'
area: ai-agents
audience:
  - entwickler
  - konzepter
  - fuehrungskraft
level: intermediate
intent:
  - verstehen
  - entscheiden
contains:
  - concept
  - argument
  - method
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---
# Cluster-Dokument vs. Atomare Bausteine

> Zwei Ansaetze der Context-Aufbereitung im Vergleich. Gleichwertig, mit unterschiedlichen Trade-offs. Welcher passt, haengt von den Rahmenbedingungen ab.

---

## Kernaussage

Website-Content muss fuer LLMs aufbereitet werden — darueber besteht Konsens (siehe [[Content-ist-nicht-Context]]). Die Frage ist: Wie granular? Es gibt zwei grundsaetzlich verschiedene Wege, und keiner ist pauschal besser. Der richtige Ansatz haengt von den Rahmenbedingungen ab: Modellgroesse, Anzahl Themen, Anzahl Anwendungsfaelle, Update-Frequenz.

---

## Ansatz A: Cluster-Dokument

Ein gut strukturiertes Markdown-Dokument pro Themenbereich. Alle Quellseiten eines Clusters werden zusammengefasst, dedupliziert und thematisch gegliedert. Das gesamte Dokument wird ins Context Window geladen — das Modell durchsucht es selbst.

**Eigenschaften:**
- ~15.000-40.000 Tokens pro Cluster
- Keine Retrieval-Logik noetig
- Erstellung in Stunden (LLM fasst zusammen, Redaktion prueft)
- 4-Schritte-Pipeline: Extraktion, Analyse, Synthese, Pruefung

---

## Ansatz B: Atomare Bausteine

Kleine, eigenstaendige Wissenseinheiten mit Frontmatter-Metadaten. Jeder Baustein beantwortet genau eine Frage vollstaendig. Retrieval-System laedt nur die relevanten Bausteine.

**Eigenschaften:**
- ~1.000-4.000 Tokens pro Anfrage (nur relevante Bausteine)
- Metadaten ermoeglichen gezielte Suche (Zielgruppe, Tags, Typ)
- Erstellung in Tagen (8-Schritte-Pipeline mit Taxonomie und Anreicherung)
- Jeder Baustein wird mit 5 Dimensionen beschrieben (siehe [[Kontextdimensionen]])

---

## Trade-off-Matrix

| Achse | Cluster-Dokument | Atomare Bausteine |
|---|---|---|
| **Erstellungsaufwand** | Niedrig. Stunden pro Cluster. | Hoch. Tage pro Cluster. |
| **Wartbarkeit** | Manuell durchsuchbar. Kein Tracking von Aktualitaet. | Systematisch wartbar. Felder wie 'stand' und 'volatilitaet' ermoeglichen automatisches Flagging. |
| **Retrieval** | Nicht noetig bei 1 Cluster. Bei mehreren: Dokument-Level. | Praezise steuerbar ueber Metadaten-Filter + semantische Suche. |
| **Token-Last pro Anfrage** | 15.000-40.000. Gesamtes Cluster geladen. | 1.000-4.000. Faktor 5-10x weniger. |
| **Modellabhaengigkeit** | Hoch. Braucht grosses Context Window und gute Suchfaehigkeit im langen Text. | Gering. Funktioniert auch mit kleineren, guenstigeren Modellen. |
| **Multi-Use / KI-Inseln** | Ein Kanal, ein Modell. Wiederverwendung erfordert Anpassung. | Viele Kanaele, viele Modelle. Derselbe Baustein funktioniert ueberall. |

---

## Token-Oekonomie

Bei 30.000 Anfragen/Monat und $5/1M Input-Tokens (Beispiel: Frontier-Modell):

| | Cluster | Bausteine |
|---|---|---|
| Tokens pro Anfrage | 30.000 | 3.000 |
| Tokens pro Monat | 900M | 90M |
| Kosten (nur Input) | $4.500/Monat | $450/Monat |
| Differenz | | 90% weniger |

---

## Performance / Latenz

Mehr Context = mehr Verarbeitungszeit. Bei kleineren Modellen (z.B. ueber regionale Provider) ist der Unterschied spuerbar:

- **Cluster:** 8-20 Sekunden (30.000 Tokens verarbeiten)
- **Bausteine:** 2-5 Sekunden (3.000 Tokens + ~300ms Retrieval-Latenz)

---

## Wann passt was?

| Anwendungsfall | Ansatz |
|---|---|
| Fokus-Feature mit ueberschaubarem Thema (z.B. Elternberatung Pubertaet) | Cluster-Dokument reicht |
| Grosse Domaene mit vielen Unterthemen (z.B. Pflege mit 24+ Seiten) | Bausteine — Retrieval muss gezielt filtern |
| Ein System das alle Themen abdeckt (Superchat) | Bausteine — kein Modell kann alle Cluster gleichzeitig laden |
| Viele KI-Inseln mit verschiedenen Modellen | Bausteine — eine Quelle, viele Nutzer, modellunabhaengig |

---

## Hybride Wege

Beide Ansaetze schliessen sich nicht aus:

1. **Cluster-Dokumente als Startpunkt** — Schnell erstellbar, validiert den Inhalt, funktioniert im PoC.
2. **Atomarisierung wo noetig** — Wenn ein Cluster in Produktion geht, auf kleineren Modellen laufen soll oder von mehreren KI-Inseln genutzt wird.
3. **Beide Pipelines parallel** — Eine fuer schnelle Validierung, eine fuer Produktion. Dieselben Quellen, zwei Outputs.

Langfristig koennen Cluster-Dokumente als Zwischenprodukt fuer die Baustein-Pipeline dienen: Bereits bereinigter, deduplizierter Content als besserer Input fuer die Atomarisierung.

---

## Verknuepfungen

- [[Gedaechtnis-Context-Engineering]] — Das Element, das Context bereitstellt
- [[Content-ist-nicht-Context]] — Warum Aufbereitung ueberhaupt noetig ist
- [[Kontextdimensionen]] — Die 5 Dimensionen der Baustein-Variante
- [[Feature-Profile-Methodik]] — Welches Feature braucht welche Granularitaet?

---

*Quelle: Eigene Beratungspraxis, entwickelt 2025/2026*

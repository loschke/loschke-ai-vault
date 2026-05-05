# Schema: loschke-vault

> Konventionen für Frontmatter und Struktur. Pflicht-Felder werden beim Lint
> geprüft. Optionale Felder sind empfohlen, aber nicht erzwungen.

## Repo-Struktur

```
loschke-vault/
├── SCHEMA.md             # Dieses Dokument
├── CLAUDE.md             # Briefing für Agenten
├── knowledge/            # Knowledge Layer (Frameworks, Konzepte, References)
│   ├── index.md          # Inhaltsverzeichnis (auto-generiert)
│   ├── log.md            # Chronologisches Log (auto-generiert, append-only)
│   └── ai-essentials/    # Bereich (frühere "domain")
│       ├── _moc.md       # Übersicht für den Bereich
│       └── *.md          # Knowledge-Files
├── assets/               # Asset Layer (kommt später)
└── _meta/
    ├── lint-report.md    # Letzter Lint-Lauf
    └── migration-log.md  # Was wann migriert wurde
```

## Filename-Konvention

- ASCII-Bindestrich-Form, keine Umlaute (`Wie-LLMs-funktionieren.md`)
- Wikilinks bleiben kompatibel mit altem Vault, Skripte arbeiten ohne Unicode-Edge-Cases
- Content und Frontmatter dürfen Umlaute nutzen

---

## Knowledge Layer: Frontmatter

### Pflicht

| Feld         | Typ      | Werte / Format                                  |
|--------------|----------|-------------------------------------------------|
| `title`      | string   | Mensch-lesbarer Titel, darf Umlaute             |
| `type`       | string   | siehe Werte-Liste unten                         |
| `status`     | string   | `draft` \| `stable` \| `living` \| `archived`   |
| `created`    | date     | ISO `YYYY-MM-DD`                                |
| `updated`    | date     | ISO `YYYY-MM-DD`                                |
| `tags`       | string[] | Kleinschreibung, Bindestrich, kein Leerzeichen  |
| `sources`    | string[] | Mindestens ein Eintrag, siehe Konvention unten  |

### Optional empfohlen

| Feld           | Typ      | Werte / Format                                                 |
|----------------|----------|----------------------------------------------------------------|
| `aliases`      | string[] | Alternative Bezeichner für Wikilinks                           |
| `area`         | string   | Bereich (`ai-essentials`, `ai-agents`, ...)                    |
| `audience`     | string[] | siehe Werte-Liste                                              |
| `level`        | string   | `basic` \| `basic-to-advanced` \| `intermediate` \| `advanced` |
| `intent`       | string[] | siehe Werte-Liste                                              |
| `contains`     | string[] | siehe Werte-Liste                                              |
| `brand_fit`    | string[] | `loschke` \| `unlearn` \| `lernen` \| `buildjetzt`             |
| `last_reviewed`| date     | ISO, für späteren Drift-Lint                                   |

### Werte-Listen (kontrolliertes Vokabular)

**`type`** (Knowledge-Granularität)
- `framework`: Strukturiertes Modell mit mehreren Elementen
- `concept`: Einzelnes Konzept oder Idee
- `method`: Verfahrensanleitung, Vorgehen
- `reference`: Faktensammlung, Übersicht, Auswahlhilfe
- `vocabulary`: Begriffsklärung, Glossar-artig
- `guide`: Anleitung mit Erklärung warum/wie
- `brand-guide`: Brand-spezifische Richtlinie
- `voice-reference`: Stil- oder Sprach-Referenz
- `skill-doc`: Dokumentation einer Skill (für Factories)
- `moc`: Map of Content, Inhaltsverzeichnis eines Bereichs

**`status`**
- `draft`: In Arbeit, nicht für Verwendung freigegeben
- `stable`: Festgelegt, ändert sich selten
- `living`: Aktiv gepflegt, ändert sich häufig
- `archived`: Historisch, nicht mehr aktuell, aber aufbewahrt

**`audience`**
- `einsteiger`, `praktiker`, `fuehrungskraft`, `entscheider`, `technisch`,
  `entwickler`, `konzepter`

**`intent`** (was tut der Leser nach Lesen)
- `verstehen`, `einordnen`, `bewerten`, `entscheiden`, `anwenden`, `vermitteln`,
  `ueberzeugen`

**`contains`** (was steckt drin)
- `framework`, `method`, `vocabulary`, `analogy`, `contrast`, `tip`,
  `decision-aid`, `checklist`, `example`, `argument`

### `sources` Konvention

Pflicht. Mindestens ein Eintrag. Erlaubte Formate (Doppelpunkt-Notation, greppable):

- `self-authored:loschke` für eigene Konzeption
- `self-authored:loschke-and-claude:2026-04` für Co-Erarbeitung
- `self-authored:loschke:pre-migration` für Migration ohne nachvollziehbare Quelle
- `queonext:presentation:2024-2025` für übernommen aus Vorprojekt
- `anthropic:building-effective-agents:2024` für externe Quelle (org:title:year)
- `book:author:title:year` für Bücher
- `url:https://...` für direkte Links

---

## Wikilinks

- Standard Obsidian-Syntax: `[[Filename]]` oder `[[Filename|Anzeigetext]]`
- Ordner-übergreifende Links erlaubt: `[[ai-agents/Anatomie-eines-KI-Agenten]]`
- Lint prüft, ob Ziel existiert

---

## index.md und log.md

### `knowledge/index.md`

Auto-generiert vom `build-index.js` Skript. Enthält pro Bereich:
- Bereichs-Header mit Link zum `_moc.md`
- Liste aller Files mit `title`, `type`, `status`, `updated`
- Counts pro `type`

Wird neu geschrieben bei jedem Lauf, kein Merge.

### `knowledge/log.md`

Append-only. Format pro Zeile:

```
## [2026-05-04] migrate | ai-essentials (18 files)
## [2026-05-04] add    | ai-essentials/Wie-LLMs-funktionieren
## [2026-05-04] update | ai-essentials/RAG | section: vector-search
```

Greppable: `grep "^## \[" log.md | tail -20` zeigt die letzten 20 Operationen.

---

## Lint-Regeln (v0)

1. Pflicht-Frontmatter vorhanden
2. `sources` nicht leer
3. Keine kaputten Wikilinks
4. `type` und `status` aus erlaubter Werte-Liste
5. `_moc.md` existiert pro Unterordner in `knowledge/`

Lint-Verstöße landen in `_meta/lint-report.md`.

### Erweiterungen (v0.1, Quality-Layer)

6. **Drift-Lint** (Warning): `last_reviewed` älter als 6 Monate
7. **Sources-Format** (Warning): Doppelpunkt-Notation prüfen, greppable halten

Cross-Area-Wikilinks (Ziel-Bereich noch nicht migriert) sind Warnings, keine Errors.

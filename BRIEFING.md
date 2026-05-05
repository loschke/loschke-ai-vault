# BRIEFING: loschke-vault Initial Setup & AI-Essentials Migration

> Briefing für Claude Code. Dieses Dokument enthält alle strategischen Entscheidungen,
> Konventionen und konkreten Aufgaben für das Bootstrappen des `loschke-vault` Repos
> und die Migration des ersten Knowledge-Bereichs (AI-Essentials).
>
> Erstellt: 2026-05-04 | Zielordner: `C:\Users\losch\Projekte\loschke-hub\loschke-vault\`

---

## 1. Kontext & Ziel

Rico baut eine zweistufige Daten-Infrastruktur als Grundlage für eine spätere Factory Factory:

- **Knowledge Layer** (Frameworks, Konzepte, Voice, Brand): file-basiert nach
  Karpathy LLM-Wiki Pattern, in GitHub
- **Asset Layer** (Carousels, Lessons, Posts, Ebooks): Markdown-Index in GitHub,
  HTML-Render-Outputs in Cloudflare R2 mit Public Access. Kommt später.

Brainsidian (`H:\Meine Ablage\DigitalBrain`) bleibt für privaten Bereich (Life OS,
Self, Kunden, Training) bestehen. Migration ist einmalig, kein dauerhafter Sync.

**Diese Migration ist der erste Test.** Migriert wird nur `02_KNOWLEDGE/AI-Essentials/`
(18 Files, flacher Bereich). Wenn der Flow sauber läuft, kommen weitere Bereiche
in Folge-Briefings.

**Was Claude Code in diesem Briefing tut:**

1. Lokales Repo bootstrappen unter `C:\Users\losch\Projekte\loschke-hub\loschke-vault\`
2. `SCHEMA.md` und `CLAUDE.md` schreiben (Inhalte vollständig in diesem Briefing)
3. AI-Essentials migrieren: 18 Files mit neuer Frontmatter, Wikilinks erhalten
4. `index.md` und `log.md` generieren
5. Lint-Skript schreiben und laufen lassen
6. Initial-Commit machen (kein Push, nur lokal)

**GitHub Remote ist später:** `https://github.com/loschke/loschke-vault.git`. Erst
nach manueller Abnahme durch Rico pushen.

---

## 2. Architektur

### Verzeichnis-Struktur (Ziel)

```
loschke-vault/
├── README.md
├── SCHEMA.md              # Vollständiger Inhalt in Abschnitt 4
├── CLAUDE.md              # Vollständiger Inhalt in Abschnitt 5
├── .gitignore
├── knowledge/
│   ├── index.md           # auto-generiert
│   ├── log.md             # auto-generiert, append-only
│   └── ai-essentials/
│       ├── _moc.md        # aus _MOC.md migriert (lowercase!)
│       └── *.md           # 17 Knowledge-Files
├── assets/                # leerer Folder mit .gitkeep, kommt später
├── scripts/
│   ├── build-index.js     # Index-Generator
│   └── lint.js            # Lint-Skript
└── _meta/
    ├── lint-report.md     # letzter Lint-Lauf
    └── migration-log.md   # was wann migriert wurde
```

### Source vs Target

- **Source:** `H:\Meine Ablage\DigitalBrain\02_KNOWLEDGE\AI-Essentials\` (lesen via Brainsidian MCP)
- **Target:** `C:\Users\losch\Projekte\loschke-hub\loschke-vault\knowledge\ai-essentials\`

Keine Modifikation am Source. Nur lesen.

### Filename-Konvention

- Bleibt ASCII-Bindestrich-Form wie im alten Vault (`Wie-LLMs-funktionieren.md`)
- Begründung: Wikilinks bleiben kompatibel, keine Unicode-Edge-Cases in Skripten
- Content und Frontmatter dürfen Umlaute
- **Eine Ausnahme:** `_MOC.md` wird zu `_moc.md` (lowercase, neue Konvention)

---

## 3. Tech-Stack-Empfehlung

- **Skripte in Node.js** (`build-index.js`, `lint.js`)
- **YAML-Frontmatter Parsing:** `gray-matter` package
- **package.json** mit Scripts `npm run lint`, `npm run index`
- **Node 20+** voraussetzen

Falls eine andere Sprache sinnvoller erscheint (Bash, Python), kurz begründen
und dann durchziehen. Konsistenz wichtiger als Sprachwahl.

---

## 4. SCHEMA.md (vollständiger Inhalt zum Schreiben)

```markdown
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
```

---

## 5. CLAUDE.md (vollständiger Inhalt zum Schreiben)

```markdown
# CLAUDE.md: loschke-vault

> Briefing für Agenten (Claude Code, Claude Desktop), die in diesem Repo arbeiten.
> Wer dieses Repo öffnet: SCHEMA.md ist die Wahrheit für Frontmatter-Konventionen.
> Diese Datei sagt, *wie* du arbeitest, nicht *was* die Konventionen sind.

## Was dieses Repo ist

Dieses Repo ist Rico Loschkes Online-Knowledge-Base und (zukünftig) Asset-Library.
Es ersetzt für die *öffentlich teilbaren* Inhalte die Brainsidian-Vault-Struktur unter
`H:\Meine Ablage\DigitalBrain`. Privater Inhalt (Life OS, Kunden, Training) bleibt
in Brainsidian.

Zwei Schichten:

- **`knowledge/`**: Frameworks, Konzepte, Voice-Referenzen, Brand-Guides. Stabiles
  Wissen, das von Factories und Demos referenziert wird.
- **`assets/`**: Generierte Outputs (Carousels, Lessons, Posts). Markdown als Index,
  HTML-Render-Outputs in Cloudflare R2.

## Wie du arbeitest

### Beim Lesen
- Beginne mit `SCHEMA.md` für Konventionen
- `knowledge/index.md` ist auto-generiert. Nicht manuell editieren
- `knowledge/log.md` ist append-only chronologisch. Nicht rückwirkend ändern

### Beim Schreiben
- Pflicht-Frontmatter aus SCHEMA.md immer setzen
- `sources` nie leer lassen. Wenn unklar: `self-authored:loschke:pre-migration`
  und User um Klärung bitten
- Filenames bleiben ASCII-Bindestrich-Form
- Vor Commit `npm run lint` laufen lassen
- Nach Inhalts-Add oder -Update: Eintrag in `knowledge/log.md`

### Beim Generieren von Index
- `npm run index` schreibt `knowledge/index.md` neu
- Counts pro `type`, Listen pro Bereich
- Bei MOC-Änderungen Index neu generieren

## Was du NICHT tust

- Keine Pushes zu GitHub ohne explizite Freigabe von Rico
- Keine Modifikation an `H:\Meine Ablage\DigitalBrain` (Source-Vault)
- Keine Filename-Änderungen außer der MOC-Lowercase-Konvention
- Keine eigenmächtige Erweiterung der Werte-Listen in SCHEMA.md
  (das ist Rico's Entscheidung, mit Begründung)
- Keine Inhalts-Änderungen am Body von migrierten Files (Frontmatter ja, Content nein)

## Häufige Befehle

```bash
npm run lint              # SCHEMA-Compliance prüfen
npm run index             # index.md neu generieren
git status                # was hat sich geändert
git log --oneline -20     # letzte 20 Commits
```
```

---

## 6. Migrations-Mapping (alle 18 Files)

Für jedes File: alte Werte aus Brainsidian lesen, mit neuen Pflicht-Feldern zusammenführen.

### Konstante Werte (gelten für alle 18 Files)

- `area: ai-essentials`
- `brand_fit: ["loschke", "unlearn", "lernen"]` (alte `brand-fit` umbenannt zu `brand_fit`)
- Felder, die 1:1 übernommen werden: `audience`, `level`, `intent`, `contains`, `tags`
- `created` aus altem `created`, oder Migrations-Datum wenn fehlt
- `updated` aus altem `updated`, oder Migrations-Datum wenn fehlt
- `last_reviewed: 2026-05-04` (Migrations-Datum)
- Altes `domain` Feld entfällt (durch `area` ersetzt)
- Altes `source` (singular) wird zu `sources` Array. Bei Migration mit Mapping unten überschreiben

### Per-File-Tabelle

Source-Pfad immer: `02_KNOWLEDGE/AI-Essentials/<filename>` (in Brainsidian)

| # | Filename (Source) | Filename (Target) | type | status | sources |
|---|---|---|---|---|---|
| 1 | `_MOC.md` | `_moc.md` | `moc` | `living` | `["self-authored:loschke:pre-migration"]` |
| 2 | `Content-Bewertung-Checkliste.md` | gleich | `method` | `stable` | `["self-authored:loschke-and-claude:2026-02"]` |
| 3 | `Context-Engineering-Grundlagen.md` | gleich | `concept` | `stable` | `["self-authored:loschke:pre-migration"]` |
| 4 | `Datenschutz-Input-Regeln.md` | gleich | `guide` | `stable` | `["self-authored:loschke:pre-migration"]` |
| 5 | `GenAI-Stack-Erklaermodell.md` | gleich | `framework` | `stable` | `["self-authored:loschke:workshop-experience"]` |
| 6 | `Halluzinationen-und-Zuverlaessigkeit.md` | gleich | `concept` | `stable` | `["self-authored:loschke:pre-migration"]` |
| 7 | `KI-Agents-Grundlagen.md` | gleich | `concept` | `stable` | `["self-authored:loschke:pre-migration"]` |
| 8 | `KI-Faehigkeiten-Scope.md` | gleich | `reference` | `stable` | `["queonext:presentation:2024-2025"]` |
| 9 | `KI-Output-Risiken.md` | gleich | `reference` | `stable` | `["self-authored:loschke:pre-migration"]` |
| 10 | `KI-Regulierung-Governance.md` | gleich | `reference` | `living` | `["self-authored:loschke:pre-migration"]` |
| 11 | `KI-Sicherheit-Souveraenitaet.md` | gleich | `framework` | `stable` | `["self-authored:loschke:pre-migration"]` |
| 12 | `Kosten-und-Preismodelle.md` | gleich | `reference` | `living` | `["self-authored:loschke:pre-migration"]` |
| 13 | `LLM-Sicherheitsrisiken-OWASP.md` | gleich | `framework` | `living` | `["owasp:top-10-llm:2024"]` |
| 14 | `Modell-Landschaft.md` | gleich | `reference` | `living` | `["self-authored:loschke:pre-migration"]` |
| 15 | `Multimodalitaet-Ueberblick.md` | gleich | `reference` | `living` | `["self-authored:loschke:pre-migration"]` |
| 16 | `Prompt-Engineering-Grundlagen.md` | gleich | `method` | `stable` | `["self-authored:loschke:pre-migration"]` |
| 17 | `RAG.md` | gleich | `concept` | `stable` | `["self-authored:loschke:pre-migration"]` |
| 18 | `Wie-LLMs-funktionieren.md` | gleich | `concept` | `stable` | `["self-authored:loschke:pre-migration"]` |

### Wikilinks-Behandlung

Alle Wikilinks im Body unverändert lassen. Beispiele:
- `[[AI-Shifts/_MOC|AI-Shifts]]` bleibt so
- `[[KI-Faehigkeiten-Scope]]` bleibt so

Hinweis: Manche Wikilinks zeigen auf Files in *anderen* Knowledge-Bereichen
(z.B. `AI-Shifts/`), die noch nicht migriert sind. Das ist erwartet. Lint wird
diese als "broken links" melden. Das ist okay für jetzt. Vermerke im
Lint-Report mit Hinweis "expected: cross-area link, target not yet migrated".

---

## 7. Aufgaben in Reihenfolge

### Aufgabe 1: Repo bootstrappen

- Ordner `C:\Users\losch\Projekte\loschke-hub\loschke-vault\` anlegen
- `git init`
- `.gitignore` mit `node_modules/`, `.env`, `*.log`
- `README.md` mit kurzer Beschreibung (Was, Warum, Verweis auf SCHEMA.md und CLAUDE.md)
- `package.json` mit Scripts `lint` und `index`, dependency `gray-matter`
- `npm install`

**Definition of Done:** Ordner existiert, `git status` zeigt initialisiertes Repo.

### Aufgabe 2: SCHEMA.md schreiben

Inhalt aus Abschnitt 4 dieses Briefings 1:1 in `SCHEMA.md` übernehmen.

**DoD:** File existiert, Markdown valide.

### Aufgabe 3: CLAUDE.md schreiben

Inhalt aus Abschnitt 5 dieses Briefings 1:1 in `CLAUDE.md` übernehmen.

**DoD:** File existiert, Markdown valide.

### Aufgabe 4: Verzeichnisse anlegen

- `knowledge/ai-essentials/`
- `assets/` (mit `.gitkeep`)
- `scripts/`
- `_meta/`

**DoD:** Alle Verzeichnisse existieren, leere mit `.gitkeep`.

### Aufgabe 5: AI-Essentials migrieren

Pro File aus dem Mapping in Abschnitt 6:

1. Source via Brainsidian MCP lesen (`brainsidian:read_note`,
   Pfad: `02_KNOWLEDGE/AI-Essentials/<filename>`)
2. Frontmatter aufbauen nach diesen Regeln:
   - Pflicht-Felder (`title`, `type`, `status`, `created`, `updated`, `tags`, `sources`)
     gemäß Mapping plus altem Wert
   - Optional-Felder aus alter Frontmatter übernehmen, wo vorhanden:
     `audience`, `level`, `intent`, `contains`
   - `area: ai-essentials` immer setzen
   - `brand_fit: ["loschke", "unlearn", "lernen"]` setzen (Umbenennung von `brand-fit`)
   - `last_reviewed: 2026-05-04`
   - Altes `domain`, `source`, `brand-fit` aus Frontmatter entfernen
3. Body unverändert übernehmen
4. Target-Filename anwenden (`_MOC.md` → `_moc.md`, sonst identisch)
5. Schreiben nach `knowledge/ai-essentials/<target-filename>`

**DoD:** 18 Files in `knowledge/ai-essentials/` mit korrekter Frontmatter.
Body identisch zum Source. Migrations-Eintrag in `_meta/migration-log.md`.

### Aufgabe 6: Index-Generator schreiben (`scripts/build-index.js`)

Node-Skript, das:
- Alle `.md` Files unter `knowledge/` rekursiv liest
- Frontmatter parst (`gray-matter`)
- Pro Bereich gruppiert
- `knowledge/index.md` schreibt mit Struktur:
  - Header `# Knowledge Index`
  - Pro Bereich: Sub-Header `## ai-essentials` mit Link zum `_moc.md`
  - Tabelle: `title | type | status | updated`
  - Footer mit Total-Counts pro `type`
- `_MOC.md`-Files (lowercase: `_moc.md`) ausschließen aus Tabelle, nur als Bereichs-Link

In `package.json`: `"index": "node scripts/build-index.js"`.

**DoD:** `npm run index` läuft fehlerfrei, `knowledge/index.md` existiert.

### Aufgabe 7: Lint-Skript schreiben (`scripts/lint.js`)

Node-Skript prüft alle 5 Lint-Regeln aus SCHEMA.md:
1. Pflicht-Frontmatter vorhanden (alle Pflicht-Felder gesetzt, nicht null)
2. `sources` nicht leer (Array mit min. 1 Eintrag)
3. Wikilinks: für jedes `[[...]]` prüfen, ob Ziel existiert.
   "Cross-area"-Links (z.B. `[[AI-Shifts/...]]`) als Warning, nicht Error.
4. `type` und `status` aus erlaubter Werte-Liste
5. `_moc.md` existiert pro Unterordner in `knowledge/`

Output:
- `_meta/lint-report.md` mit Sektionen "Errors", "Warnings", "Summary"
- Exit-Code 0 wenn 0 Errors, sonst 1

In `package.json`: `"lint": "node scripts/lint.js"`.

**DoD:** `npm run lint` läuft fehlerfrei, Report in `_meta/`. Erwartete
Errors für AI-Essentials: 0. Erwartete Warnings: mehrere "cross-area broken
link" wegen nicht-migrierter Bereiche.

### Aufgabe 8: Initialer Lint-Lauf und Index-Generierung

- `npm run lint`
- `npm run index`
- Eintrag in `knowledge/log.md`:
  ```
  ## [2026-05-04] migrate | ai-essentials (18 files)
  ## [2026-05-04] index   | knowledge/index.md generated
  ## [2026-05-04] lint    | 0 errors, N warnings
  ```

**DoD:** 0 Lint-Errors. Wenn doch Errors auftreten: stoppen, Errors auflisten,
Rico fragen.

### Aufgabe 9: Initial-Commit

Drei Commits, semantisch getrennt:

1. `chore: bootstrap repo with schema and tooling`
   (alles außer `knowledge/ai-essentials/`)
2. `feat(knowledge): migrate ai-essentials from brainsidian (18 files)`
   (alle migrierten Knowledge-Files)
3. `chore(meta): generate initial index and lint report`
   (`knowledge/index.md`, `knowledge/log.md`, `_meta/*.md`)

**Kein Push.** Rico macht den Push nach Sichtung manuell, oder gibt grünes Licht
hier im Chat.

**DoD:** `git log --oneline` zeigt 3 Commits.

---

## 8. Was Claude Code NICHT tun soll

- **Kein Push zu GitHub.** Remote anlegen ist okay (`git remote add origin
  https://github.com/loschke/loschke-vault.git`), aber `git push` braucht
  explizite Freigabe von Rico
- **Keine Inhalts-Änderungen** am Body migrierter Files. Nur Frontmatter wird
  umgebaut
- **Keine Filename-Umbenennungen** außer `_MOC.md` → `_moc.md`
- **Keine eigenmächtige Erweiterung** der Werte-Listen in SCHEMA.md
- **Kein Erfinden** von `sources`-Werten außerhalb des Mappings in Abschnitt 6
- **Keine Modifikation** am Source-Vault (`H:\Meine Ablage\DigitalBrain`)

---

## 9. Wenn etwas unklar ist

Falls bei der Ausführung Mehrdeutigkeiten auftauchen:
- Lint-Errors die nicht im erwarteten Bereich sind
- Wikilinks-Konstellationen, die das Mapping nicht abdeckt
- Frontmatter-Felder im alten Vault, die im Mapping nicht behandelt sind

→ **Stoppen. Konkrete Frage formulieren. Rico fragen.**

Lieber einmal nachfragen als Annahmen treffen, die später zurückgebaut werden.

---

## 10. Definition of Done für das gesamte Briefing

- [ ] Repo unter `C:\Users\losch\Projekte\loschke-hub\loschke-vault\` initialisiert
- [ ] `SCHEMA.md` und `CLAUDE.md` vorhanden mit Inhalt aus Abschnitt 4 und 5
- [ ] `package.json` mit Scripts und Dependency
- [ ] 18 Files in `knowledge/ai-essentials/` mit neuer Frontmatter
- [ ] `_moc.md` (lowercase) im Bereich
- [ ] `knowledge/index.md` generiert
- [ ] `knowledge/log.md` mit 3 Migrations-Einträgen
- [ ] `_meta/lint-report.md` zeigt 0 Errors
- [ ] `_meta/migration-log.md` mit Eintrag pro migriertem File
- [ ] 3 Git-Commits gemacht, kein Push
- [ ] Kurzer Status-Report an Rico im Chat: was lief, was sind die Lint-Warnings,
      Anzahl der Files pro `type` und `status`

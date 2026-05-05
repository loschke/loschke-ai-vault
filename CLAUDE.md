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

## Templates & Workflows (deterministische Eingangspunkte)

Statt Frontmatter aus dem Gedächtnis zu rekonstruieren: **Templates kopieren**.

| Aufgabe | Werkzeug |
|---|---|
| Neuen Knowledge-Eintrag | `_meta/templates/knowledge-file.md` kopieren oder `/add-knowledge` |
| Neuen Bereich migrieren | Mapping-JSON in `_meta/migration-mappings/` anlegen, dann `/migrate-area` oder `node scripts/migrate-area.mjs <area>` |
| Bestehenden Eintrag aktualisieren | `/update-knowledge` (setzt `updated` + `last_reviewed`, log-Eintrag) |
| Vault-Status prüfen | `/check-vault` (= `npm run lint && npm run index`) |

Slash-Commands liegen in `.claude/commands/`. Details: siehe `CONTRIBUTING.md`.

Ein PostToolUse-Hook lintet Files automatisch direkt nach Edit/Write — sofortiges
Feedback bei Schema-Verstoß. Hook-Output erscheint im Chat.

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
npm run prepare-commit    # lint + index in einem Schritt
git status                # was hat sich geändert
git log --oneline -20     # letzte 20 Commits
```

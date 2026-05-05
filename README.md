# loschke-vault

Öffentlich teilbare Knowledge-Base und (zukünftig) Asset-Library im sevenX-Ökosystem.

## Was hier liegt

- **`knowledge/`** — Frameworks, Konzepte, Voice-Referenzen, Brand-Guides. File-basiert nach Karpathy-LLM-Wiki-Pattern. Wikilinks Obsidian-kompatibel.
- **`assets/`** — Generierte Outputs (Carousels, Lessons, Posts). Markdown als Index, HTML-Renders später in Cloudflare R2. Aktuell leer.
- **`scripts/`** — Tooling: Lint, Index-Generator, Migrator.
- **`_meta/`** — Templates, Mapping-JSONs für Migrationen, Lint-Reports.

## Was du als erstes liest

| Datei | Zweck |
|---|---|
| `SCHEMA.md` | Frontmatter-Konventionen, kontrolliertes Vokabular. Lint-Wahrheit. |
| `CLAUDE.md` | Anleitung für Agenten (Claude Code, Claude Desktop). |
| `CONTRIBUTING.md` | Workflows: Eintrag hinzufügen, aktualisieren, Bereich migrieren. |

## Status

In Aufbau. Erster Bereich migriert: `ai-essentials` (Mai 2026). Weitere folgen.

## Befehle

```bash
npm install               # einmalig
npm run lint              # Schema-Compliance prüfen
npm run index             # knowledge/index.md neu generieren
npm run prepare-commit    # lint + index vor Commit
```

## Privater Vault

Privater Inhalt (Life OS, Kunden, Training) liegt weiter in Brainsidian (`H:\Meine Ablage\DigitalBrain`). Dieses Repo ist nur für öffentlich teilbares Wissen.

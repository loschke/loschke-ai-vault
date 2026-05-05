# Contributing zu loschke-vault

Workflows für Claude Code (und Menschen) im Repo. Konventionen liegen in `SCHEMA.md`, Agent-Verhalten in `CLAUDE.md`. Diese Datei zeigt die **Eingangspunkte für die Arbeit**.

---

## Neuen Knowledge-Eintrag hinzufügen

**Empfohlen:** Slash-Command in Claude Code:

```
/add-knowledge ai-essentials Embedding-Models
```

Der Command kopiert das Template, klärt Frontmatter mit dir ab, validiert via Lint und schreibt einen Eintrag in `knowledge/log.md`.

**Manuell:**

1. Template kopieren: `cp _meta/templates/knowledge-file.md knowledge/<area>/<Slug>.md`
2. Frontmatter ausfüllen — alle Pflichtfelder, Werte aus kontrolliertem Vokabular (siehe `SCHEMA.md`)
3. `area:` korrekt setzen, `last_reviewed:` auf heute
4. `npm run lint:quick` — Errors fixen
5. Eintrag in `knowledge/log.md`: `## [YYYY-MM-DD] add | <area>/<Slug>`

---

## Bestehenden Eintrag aktualisieren

**Empfohlen:**

```
/update-knowledge ai-essentials/RAG
```

**Manuell:**

1. File editieren (Body und/oder Frontmatter)
2. `updated:` auf heute setzen
3. `last_reviewed:` auf heute setzen — nur wenn Inhalt inhaltlich geprüft wurde, nicht bei reinem typo-fix
4. `npm run lint:quick`
5. Log-Eintrag: `## [YYYY-MM-DD] update | <area>/<file> | section: <name>` oder `review | <area>/<file>`

---

## Neuen Bereich aus Brainsidian migrieren

**Empfohlen:**

```
/migrate-area ai-shifts
```

**Manuell:**

1. Mapping-JSON anlegen unter `_meta/migration-mappings/<area>.json` (Vorbild: `ai-essentials.json`)
2. Pro File: `type`, `status`, `sources` festlegen — mit Rico abklären
3. Migrator laufen lassen: `node scripts/migrate-area.mjs <area>`
4. `npm run lint && npm run index`
5. Log-Einträge in `knowledge/log.md`

---

## Vor dem Commit

```bash
npm run prepare-commit    # = npm run lint && npm run index
```

Pflicht: 0 Errors. Warnings (cross-area-links, drift) sind ok, aber sichten.

Commit-Message-Konventionen (loose Convention):

- `feat(knowledge): <change>` — neuer Inhalt oder größeres Update
- `fix(knowledge): <change>` — Korrektur (Typo, broken link, falsche Frontmatter)
- `chore(meta): <change>` — Index, log, lint-report regen
- `chore: <change>` — Tooling, Schema, Templates

**Kein Push.** Rico macht den Push manuell.

---

## Drift-Management

`npm run lint` markiert Files mit `last_reviewed > 6 Monate` als Warning. Vorschlag: alle 1–2 Monate `/check-vault` laufen lassen, Drift-Liste durchgehen, gezielt `/update-knowledge` für Files die noch aktuell sind (= nur `last_reviewed` hochsetzen).

---

## Was du NICHT tust

Siehe `CLAUDE.md`. Kurz: kein Push, keine Modifikation am Brainsidian-Source, keine eigenmächtige Erweiterung der Werte-Listen, keine Filename-Umbenennungen (außer `_MOC.md` → `_moc.md`).

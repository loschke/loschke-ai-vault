# Knowledge Log

> Append-only chronologisches Log aller Vault-Operationen.
> Format: `## [YYYY-MM-DD] <op> | <target> [| <detail>]`
> Greppable via: `grep "^## \[" log.md | tail -20`

## [2026-05-04] migrate | ai-essentials (18 files)
## [2026-05-04] index   | knowledge/index.md generated
## [2026-05-04] lint    | 0 errors, 9 warnings (cross-area-link, expected)
## [2026-05-05] migrate | ai-tools (2 files)
## [2026-05-05] migrate | ai-coding (5 files) | filename-norm: 3 files renamed (Leerzeichen/Em-Dash/Umlaut), Wikilinks im _moc + 2 Inhalts-Files via Alias-Pipe gepatcht
## [2026-05-05] index   | knowledge/index.md regenerated (3 areas, 25 files)
## [2026-05-05] lint    | 0 errors, 9 warnings (cross-area-link, expected)
## [2026-05-05] skip    | ai-automation (Bereich leer, MOC nur Skeleton)
## [2026-05-05] tooling | sub-dir-support: lint + index + migrator erweitert (rekursive paths, Sub-Dir-Heuristik, basename-cross-area-resolve, basename-not-found → warning)
## [2026-05-05] migrate | ai-agents (31 files: 20 top-level + 11 in Ultimate_Leitfaden/) | Konsolidierungs-Audit deferred; Source-Frontmatter-Feld 'related:' nicht übernommen
## [2026-05-05] index   | knowledge/index.md regenerated (4 areas, 56 files)
## [2026-05-05] lint    | 0 errors, 13 warnings (cross-area expected, 2 basename-not-found → warten auf ai-strategy migration)

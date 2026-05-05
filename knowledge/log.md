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
## [2026-05-05] migrate | ai-strategy (30 files: 5 top + Governance/20 + LLM-Enterprise/5) | UX-Reasoning umbenannt
## [2026-05-05] migrate | ai-transformation (21 files: 4 top + Change-Frameworks/5 + Praxis-Frameworks/5 + Risiken-Spannungsfelder/4 + Tools-Methoden/3)
## [2026-05-05] migrate | ai-shifts (26 files: 2 top + 6 Sub-Dirs) | Was-kommt-nach-der-Intelligenz umbenannt
## [2026-05-05] tooling | lint sub-moc-missing warning (Sub-Dir-MOC-Lücken sind keine Errors)
## [2026-05-05] migrate | ai-media (115 files: 2 top + Audio/15 + Images/49 + Products/2 + Understanding/24 + Video/23) | 3 Filename-Norm (AI-Audio-Tools-Uebersicht, AI-Video-Tools-Uebersicht, Erklaervideo)
## [2026-05-05] skip    | ai-media/3D (4 Sub-Dirs nur _Overview Stubs)
## [2026-05-05] skip    | ai-media/Products/Avatars/{00-03} (alle nur _Overview Stubs)
## [2026-05-05] skip    | ai-data (alle 5 Sub-Dirs nur _README Stubs)
## [2026-05-05] index   | knowledge/index.md regenerated (8 areas, 248 files)
## [2026-05-05] lint    | 0 errors, 308 warnings (307 cross-area + 1 sub-moc-missing, alle expected)

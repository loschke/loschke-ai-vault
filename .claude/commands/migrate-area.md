---
description: Neuen Bereich aus Brainsidian migrieren (Mapping-JSON + scripts/migrate-area.mjs)
argument-hint: <area-slug>
---

Migriere einen kompletten Knowledge-Bereich aus Brainsidian in den Vault.

**Argument:** `$ARGUMENTS` (z.B. `ai-shifts`, `ai-strategy`, `ai-transformation`)

## Vorbereitung

1. Prüfen: existiert `_meta/migration-mappings/<area>.json`?
   - **Nein:** Mapping anlegen. Dazu:
     - Source-Dir bestimmen: in der Regel `02_KNOWLEDGE/<AreaInPascalCase>/` in Brainsidian.
     - Via `mcp__brainsidian__list_directory` alle Files listen.
     - Pro File mit User abklären: `type`, `status`, `sources`. (Defaults vorschlagen, aber bestätigen lassen.)
     - Mapping JSON schreiben nach Vorbild von `_meta/migration-mappings/ai-essentials.json`.
   - **Ja:** Mapping prüfen, ggf. mit User durchgehen.
2. Target-Dir `knowledge/<area>/` wird vom Skript automatisch angelegt.

## Ausführung

3. `node scripts/migrate-area.mjs <area>` aufrufen. Output beobachten — bei "MISS" stoppen und Mapping korrigieren.
4. `npm run lint` — Errors müssen 0 sein. Cross-Area-Warnings sind ok.
5. `npm run index` — `knowledge/index.md` aktualisieren.
6. Eintrag in `knowledge/log.md` anhängen:
   ```
   ## [YYYY-MM-DD] migrate | <area> (N files)
   ## [YYYY-MM-DD] index   | knowledge/index.md updated
   ## [YYYY-MM-DD] lint    | 0 errors, M warnings
   ```
7. Status-Report an User: Anzahl Files pro `type`/`status`, Cross-Area-Warnings, Bestätigung dass `_moc.md` lowercase und vorhanden ist.

## Wichtig

- Body von migrierten Files **nie** verändern (Wikilinks bleiben, auch wenn sie auf nicht-migrierte Bereiche zeigen).
- Filename: nur `_MOC.md` → `_moc.md`. Sonst identisch.
- Source-Vault niemals modifizieren.
- Kein Commit ohne explizite Rico-Freigabe.

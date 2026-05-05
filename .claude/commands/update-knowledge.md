---
description: Bestehenden Knowledge-Eintrag aktualisieren (updated + last_reviewed setzen, log-Eintrag, lint)
argument-hint: <area>/<file>
---

Aktualisiere einen bestehenden Knowledge-Eintrag.

**Argument:** `$ARGUMENTS` (Format: `<area>/<filename>` oder `<area>/<filename>.md`, z.B. `ai-essentials/RAG`)

## Schritte

1. File `knowledge/<area>/<filename>.md` einlesen.
2. Mit User abklären: Was wird geändert? (Frontmatter-Felder? Body? Welcher Abschnitt?)
3. Änderungen vornehmen.
4. Frontmatter-Update:
   - `updated: <heute>` setzen
   - `last_reviewed: <heute>` setzen (nur wenn Inhalt inhaltlich geprüft wurde, nicht nur typo-fix)
   - Wenn `status` sich ändert: User bestätigen lassen.
5. `npm run lint:quick` ausführen — bei Errors beheben.
6. Eintrag in `knowledge/log.md` anhängen, eines der Formate:
   - `## [YYYY-MM-DD] update | <area>/<file> | section: <section-name>`
   - `## [YYYY-MM-DD] review | <area>/<file>` (nur last_reviewed gesetzt, kein Inhalts-Change)
7. User informieren: "Update geschrieben. `/check-vault` oder `npm run prepare-commit` vor Commit."

## Wichtig

- `created` nie ändern.
- Werte-Listen-Einträge nicht erfinden.
- Bei großen Body-Änderungen: erwägen, zwei Einträge in `log.md` zu machen (für jede Section einen).

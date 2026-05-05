---
description: Neuen Knowledge-Eintrag in einem Bereich anlegen (Template-basiert, lint-validiert)
argument-hint: <area> <slug>
---

Lege einen neuen Knowledge-Eintrag an.

**Argumente:** `$ARGUMENTS` (Format: `<area> <slug>`, z.B. `ai-essentials Embedding-Models`)

## Schritte

1. Argumente parsen: `area` (Ordner unter `knowledge/`), `slug` (Filename ohne `.md`, ASCII-Bindestrich-Form, keine Umlaute)
2. Prüfen ob `knowledge/<area>/` existiert. Wenn nicht: User fragen ob neuer Bereich angelegt werden soll (würde auch `_moc.md` brauchen).
3. Prüfen ob `knowledge/<area>/<slug>.md` schon existiert. Wenn ja: stoppen, fragen ob `/update-knowledge` gemeint war.
4. Template aus `_meta/templates/knowledge-file.md` lesen.
5. Frontmatter-Felder mit dem User abklären (mindestens: `title`, `type`, `status`, `tags`, `sources`, `audience`, `level`, `intent`, `contains`). `created`, `updated`, `last_reviewed` auf heute setzen. `area` setzen.
6. Datei nach `knowledge/<area>/<slug>.md` schreiben (mit minimalem Body-Gerüst).
7. `npm run lint:quick` ausführen — bei Errors stoppen und beheben.
8. Eintrag in `knowledge/log.md` anhängen: `## [YYYY-MM-DD] add | <area>/<slug>`.
9. User informieren: "Eintrag angelegt. Body jetzt füllen, dann `/check-vault` oder `npm run prepare-commit`."

## Wichtig

- Niemals erfundene `sources` einsetzen. Wenn unklar: User fragen.
- Werte für `type`, `status`, `audience`, `level`, `intent`, `contains` strikt aus SCHEMA.md (kontrolliertes Vokabular).
- Wikilinks im Body: nur auf existierende Files zeigen.

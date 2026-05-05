# Next Steps — loschke-vault

> Stand: 2026-05-05 nach Initial-Migration. Was als nächstes kommt, wenn wir wieder anknüpfen.

## Aktueller Stand (zum Wiedereinstieg)

- **8 Bereiche, 248 Files migriert.** 14 Commits, gepusht zu `https://github.com/loschke/loschke-vault.git`.
- Schema, Tooling, Templates, Slash-Commands stehen.
- **Lint:** 0 errors, 308 warnings (307 cross-area-link + 1 sub-moc-missing — alle erwartet).

**Nicht migriert (bewusst geskippt):**
- `ai-automation` (Bereich leer, MOC nur Skeleton)
- `ai-data` (alle 5 Sub-Dirs nur `_README` Stubs)
- `ai-media/3D` (alle 4 Sub-Dirs nur `_Overview` Stubs)
- `ai-media/Products/Avatars/{00-03}` (Stubs)

---

## Phase B — Konsolidierungs-Audit (höchste Priorität)

**Warum:** Migration war 1:1, inhaltliche Überlappungen sind unverändert übernommen. Jetzt durchgehen, entscheiden was bleibt / archiviert / konsolidiert wird.

**Bekannte Hotspots:**

1. **AI-Agents Top-Level vs `Ultimate_Leitfaden/`**
   - Top-Level (20 Files): Original-Konzepte, viele `framework`/`stable`
   - Ultimate_Leitfaden (11 Files, alle `draft`): Synthese aus Top-Level, narrativ aufgebaut (00-09 + 99 Glossar)
   - Frage: Synthese promoten zu primärem Material und Top-Level archivieren? Oder Top-Level bleibt Referenz?

2. **AI-Strategy/Governance/Anonymisierung\*** (3 Files: Toolstack, vs-Pseudonymisierung, Techniken)
   - Falls `ai-data/03_Anonymisierung` später Inhalte bekommt: Überschneidungen prüfen

3. **AI-Media: viele `_Overview`/`_README` Mini-MOCs**
   - Pro Sub-Dir mindestens ein Overview-File. Konsolidieren in einen einzigen Bereichs-MOC?

4. **307 cross-area-warnings durchgehen**
   - Viele sind jetzt resolvable (Bereiche sind alle migriert). `npm run lint` zeigt sie auf.
   - `basename-not-found` Warnings sind teils Tippfehler, teils echte Cross-Area-Links die nicht aufgelöst werden konnten.

**Werkzeug das fehlt:** `/audit-area <name>` Slash-Command — strukturierter Workflow durch alle Files eines Bereichs (in `CONTRIBUTING.md` schon erwähnt, aber Command existiert nicht). Bauen vor Audit-Start.

---

## Phase C — Sources verfeinern

**Warum:** Default `self-authored:loschke:pre-migration` ist Lückenfüller. Echte Provenienz-Spur ist wertvoll.

**Konkrete Fälle:**

- **Klassische Change-Frameworks** (`ai-transformation/Change-Frameworks/`): Kotter, ADKAR, Adoption-Curve, 70-20-10 sind etablierte Modelle, nicht self-authored. Sources auf z.B. `book:kotter:leading-change:1996` umstellen, plus `self-authored:loschke:transformation-consulting` als Aufbereitungs-Hinweis.
- **HBR-Last-Mile-Problem-KI-Transformation**: Sources auf `url:https://hbr.org/...` (URL nachschlagen)
- **Adoption-Curve / Diffusion of Innovations**: `book:rogers:diffusion-of-innovations:1962`
- **Psychological-Safety**: `book:edmondson:fearless-organization:2018` oder ähnlich

**Vorgehen:** Pro Bereich Liste der `pre-migration`-Sources erstellen, mit Rico durchgehen, gezielt updaten. Mapping-JSONs sind Single Source of Truth — dort ändern und re-migrieren, oder direkt im File patchen + log-Eintrag.

---

## Phase D — Drift-Management & Templates

- **Drift-Lint** läuft, aber alle `last_reviewed: 2026-05-04/05` sind frisch. In ~6 Monaten erstes Drift-Review fällig.
- **Templates** (`_meta/templates/knowledge-file.md`, `_moc.md`) evtl. mit häufigeren Audience/Level/Intent-Defaults vorausfüllen, basierend auf Migrations-Erfahrung.
- Eventuell **Tag-Vokabular** definieren — bisher freie Tags. Top-Tags pro Bereich aus Migrationen extrahieren, Tag-Liste in `SCHEMA.md` ergänzen.

---

## Phase E — Asset-Layer (kommt später, größerer Schritt)

- `assets/`-Folder ist Placeholder. Konzept: Markdown als Index, HTML-Render-Outputs in Cloudflare R2 mit Public Access.
- Tooling für Asset-Index, Render-Pipeline (vermutlich neuer Mapping-Mechanismus).
- Erst wenn Knowledge-Base konsolidiert ist (Phase B done).

---

## Tooling-Verbesserungen (nice-to-have, nicht blockierend)

1. **Mapping-Defaults:** aktuell muss jeder File-Eintrag `sources` einzeln tragen. Default-Section pro Mapping-JSON würde 80% Repetition sparen. Beispiel:
   ```json
   "default_sources": ["self-authored:loschke:strategy-consulting"]
   ```
   Migrator nutzt das wenn `file.sources` fehlt.

2. **`/audit-area <name>` Slash-Command**: durch alle Files eines Bereichs führen, jeweils `keep | archive | consolidate-into-X` abfragen. Verweist auf `_meta/audit-log/<area>.md`.

3. **`lint --fix`**: für offensichtliche Cases (z.B. `_MOC` → `_moc` casing in Wikilinks).

4. **Wikilink-Migrator-Helper:** wenn ein Filename umbenannt wird (z.B. via rename-Operation), automatisch alle Wikilinks im Vault patchen. Wäre für Phase B Konsolidierung wertvoll.

5. **Index nach `tag` cross-cuts:** Index zeigt aktuell pro Bereich. Zusätzlich `_tag-index.md`: alle Files pro Tag.

---

## Wo wieder anknüpfen?

**Wenn du die nächste Session öffnest:**

1. CLAUDE-Greeting: „Wir machen weiter am loschke-vault. Was als nächstes? Siehe `_meta/next-steps.md`."
2. Empfohlene erste Aufgabe: **`/audit-area ai-agents`** bauen + erste Audit-Runde damit. Das löst Hotspot 1 (Ultimate_Leitfaden vs Top-Level).
3. Alternative für kleinere Sessions: 1–2 Bereiche aus Phase C (Sources verfeinern) pro Run.

**Vermeiden:** Phase B nicht ohne Audit-Tooling. Sonst bleibt der Workflow improvisiert.

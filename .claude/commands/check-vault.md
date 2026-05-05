---
description: Vault-Status prüfen (lint + index + Übersicht)
---

Vollständiger Health-Check des Vaults.

## Schritte

1. `npm run lint` ausführen.
2. `npm run index` ausführen.
3. `_meta/lint-report.md` lesen.
4. `knowledge/index.md` (Header + Counts-Sektion) lesen.

## Report an User

- Bereiche im Vault + Anzahl Files pro Bereich
- Total Files, Counts pro `type`
- Errors aus Lint-Report (sollte 0 sein)
- Warnings: Anzahl pro Rule (cross-area-link, drift, sources-format)
- Drift-Hinweise: welche Files brauchen einen Review (`last_reviewed > 6 Monate`)
- Vorschlag: was als nächstes tun (z.B. "drift in 3 Files — Review starten via `/update-knowledge`?")

## Wichtig

- Kein Commit. Nur Bestandsaufnahme.
- Wenn Errors > 0: stoppen und User fragen, statt eigenmächtig zu fixen.

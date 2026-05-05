#!/usr/bin/env node
// Schema-Lint für loschke-vault.
// Usage:
//   node scripts/lint.mjs              # full lint, schreibt Report
//   node scripts/lint.mjs --quick      # nur intra-area Errors, kein Report
//
// Exit 0 wenn 0 Errors, sonst 1.

import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const REPO_ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\//, '')), '..');
const KNOWLEDGE_DIR = path.join(REPO_ROOT, 'knowledge');
const REPORT_PATH = path.join(REPO_ROOT, '_meta', 'lint-report.md');

const isQuick = process.argv.includes('--quick');

const ALLOWED_TYPES = new Set([
  'framework', 'concept', 'method', 'reference', 'vocabulary',
  'guide', 'brand-guide', 'voice-reference', 'skill-doc', 'moc'
]);
const ALLOWED_STATUS = new Set(['draft', 'stable', 'living', 'archived']);
const REQUIRED_FIELDS = ['title', 'type', 'status', 'created', 'updated', 'tags', 'sources'];
const SOURCE_PATTERN = /^[a-z][a-z0-9-]*:[^\s]+/;
const DRIFT_MONTHS = 6;

const errors = [];
const warnings = [];

function walkMd(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkMd(full, acc);
    else if (entry.isFile() && entry.name.endsWith('.md')) acc.push(full);
  }
  return acc;
}

function rel(p) {
  return path.relative(REPO_ROOT, p).replace(/\\/g, '/');
}

const allFiles = walkMd(KNOWLEDGE_DIR);
const indexAndLog = new Set([
  path.join(KNOWLEDGE_DIR, 'index.md'),
  path.join(KNOWLEDGE_DIR, 'log.md')
]);
const knowledgeFiles = allFiles.filter(f => !indexAndLog.has(f));

// Sammle alle Filenames pro Bereich für Wikilink-Auflösung (Sub-Dir-aware)
// pro Bereich: Set<relativePath ohne .md> + Map<basename, relativePath[]> für basename-only-Lookup + Set<subDirNames>
const filesByArea = {}; // areaName -> { paths, byBase, subDirs }
for (const f of knowledgeFiles) {
  const relP = rel(f);
  const parts = relP.split('/'); // knowledge/<area>/[<sub>/...]<file>.md
  if (parts.length < 3) continue;
  const area = parts[1];
  const subPath = parts.slice(2).join('/').replace(/\.md$/, ''); // z.B. "Ultimate_Leitfaden/Some-File" oder "Some-File"
  const base = parts[parts.length - 1].replace(/\.md$/, '');
  if (!filesByArea[area]) filesByArea[area] = { paths: new Set(), byBase: new Map(), subDirs: new Set() };
  filesByArea[area].paths.add(subPath);
  if (!filesByArea[area].byBase.has(base)) filesByArea[area].byBase.set(base, []);
  filesByArea[area].byBase.get(base).push(subPath);
  // Sub-Dir-Namen sammeln (alle Top-Level-Komponenten unter <area>/, lowercase)
  if (parts.length > 3) {
    filesByArea[area].subDirs.add(parts[2].toLowerCase());
  }
}
const knownAreas = new Set(Object.keys(filesByArea));

// Regel 4: _moc.md pro Bereich (Top-Level reicht; Sub-Dir-MOCs sind optional)
for (const area of knownAreas) {
  if (!filesByArea[area].paths.has('_moc')) {
    errors.push({ file: `knowledge/${area}/`, rule: 'moc-missing', msg: `Bereich '${area}' hat keine _moc.md auf Top-Level` });
  }
}

const today = new Date('2026-05-04'); // Migration date; could be dynamic, but stable for run reproducibility

function monthsSince(isoDate) {
  if (!isoDate) return Infinity;
  const d = new Date(isoDate);
  if (isNaN(d.getTime())) return Infinity;
  return (today - d) / (1000 * 60 * 60 * 24 * 30.44);
}

function checkSourceFormat(s) {
  return SOURCE_PATTERN.test(s);
}

function extractWikilinks(body) {
  const re = /\[\[([^\]]+)\]\]/g;
  const links = [];
  let m;
  while ((m = re.exec(body)) !== null) {
    const raw = m[1].split('|')[0].trim();
    links.push(raw);
  }
  return links;
}

for (const file of knowledgeFiles) {
  const relP = rel(file);
  const parts = relP.split('/');
  const area = parts[1];
  let parsed;
  try {
    parsed = matter(fs.readFileSync(file, 'utf8'));
  } catch (e) {
    errors.push({ file: relP, rule: 'parse', msg: `Frontmatter parse error: ${e.message}` });
    continue;
  }
  const fm = parsed.data || {};

  // Regel 1: Pflicht-Frontmatter
  for (const f of REQUIRED_FIELDS) {
    if (fm[f] === undefined || fm[f] === null || (Array.isArray(fm[f]) && fm[f].length === 0 && f !== 'sources')) {
      errors.push({ file: relP, rule: 'required-field', msg: `Pflichtfeld '${f}' fehlt oder leer` });
    }
  }

  // Regel 2: sources nicht leer
  if (!Array.isArray(fm.sources) || fm.sources.length === 0) {
    errors.push({ file: relP, rule: 'sources-empty', msg: `'sources' muss Array mit min. 1 Eintrag sein` });
  }

  // Regel 4: type/status aus Werte-Liste
  if (fm.type && !ALLOWED_TYPES.has(fm.type)) {
    errors.push({ file: relP, rule: 'invalid-type', msg: `'type: ${fm.type}' nicht in erlaubter Liste` });
  }
  if (fm.status && !ALLOWED_STATUS.has(fm.status)) {
    errors.push({ file: relP, rule: 'invalid-status', msg: `'status: ${fm.status}' nicht in erlaubter Liste` });
  }

  // Regel 7 (Warning): sources Format
  if (Array.isArray(fm.sources)) {
    for (const s of fm.sources) {
      if (typeof s !== 'string' || !checkSourceFormat(s)) {
        warnings.push({ file: relP, rule: 'sources-format', msg: `Source '${s}' folgt nicht der Doppelpunkt-Notation` });
      }
    }
  }

  // Regel 6 (Warning): Drift-Lint
  if (fm.last_reviewed) {
    const months = monthsSince(fm.last_reviewed);
    if (months > DRIFT_MONTHS) {
      warnings.push({ file: relP, rule: 'drift', msg: `last_reviewed (${fm.last_reviewed}) älter als ${DRIFT_MONTHS} Monate` });
    }
  }

  // Regel 3 (Wikilinks) — Sub-Dir-aware
  const links = extractWikilinks(parsed.content);
  for (const link of links) {
    // Intra-file anchor link (Obsidian: [[#Heading]]) → ignorieren
    if (link.startsWith('#')) continue;
    // Trailing Backslash (Markdown-Escape im Source) entfernen
    const stripped = link.replace(/\\+$/, '').trim();
    const cleaned = stripped.replace(/\.md$/, '').replace(/#.*$/, ''); // strip anchor on file links
    if (!cleaned) continue;

    // MOC-Casing normalisieren: trailing _MOC → _moc
    const norm = cleaned.replace(/\b_MOC$/i, '_moc');

    // Heuristik:
    // 1. Link enthält '/' → erstes Segment prüfen
    //    a) ist knownArea (case-insensitive) → cross-area, rest = subPath
    //    b) ist Sub-Dir des aktuellen Bereichs → intra-area, kompletter Path
    //    c) sonst → cross-area-warning (Bereich noch nicht migriert)
    // 2. Kein '/' → basename-Lookup im aktuellen Bereich
    let targetArea = area;
    let targetPath = norm;
    let isCrossAreaUnknown = false;
    if (norm.includes('/')) {
      const segs = norm.split('/');
      const firstLc = segs[0].toLowerCase();
      const localSubs = filesByArea[area]?.subDirs || new Set();
      if (knownAreas.has(firstLc)) {
        targetArea = firstLc;
        targetPath = segs.slice(1).join('/');
      } else if (localSubs.has(firstLc)) {
        // intra-area Sub-Dir-Pfad — case-insensitiv erstes Segment normalisieren auf gefundenen Sub-Dir
        // (Filesystem-case bewahren: wir nutzen den exakten subPath-Match unten)
        targetArea = area;
        targetPath = norm;
      } else {
        // unbekannter Bereich → cross-area-warning
        targetArea = firstLc;
        isCrossAreaUnknown = true;
      }
    }
    // letzten _MOC-Suffix nochmal absichern (z.B. "AI-Shifts/_MOC" → area=ai-shifts, targetPath="_moc")
    if (/_MOC$/i.test(targetPath)) targetPath = targetPath.replace(/_MOC$/i, '_moc');

    if (isCrossAreaUnknown) {
      warnings.push({ file: relP, rule: 'cross-area-link', msg: `Wikilink '[[${link}]]' → Bereich '${targetArea}' noch nicht im Vault (expected: target not yet migrated)` });
      continue;
    }
    if (knownAreas.has(targetArea)) {
      const areaData = filesByArea[targetArea];
      // Direkter Pfad-Match
      if (areaData.paths.has(targetPath)) continue;
      // Case-insensitiver Pfad-Match (für Sub-Dir-Casing-Unterschiede)
      const lcMatch = [...areaData.paths].find(p => p.toLowerCase() === targetPath.toLowerCase());
      if (lcMatch) continue;
      // Basename-Match (Wikilink ohne Sub-Dir-Pfad) im current/target area
      if (!targetPath.includes('/')) {
        const matches = areaData.byBase.get(targetPath) || [];
        if (matches.length === 1) continue;
        if (matches.length > 1) {
          warnings.push({ file: relP, rule: 'ambiguous-link', msg: `Wikilink '[[${link}]]' matcht mehrere Files in '${targetArea}': ${matches.join(', ')}` });
          continue;
        }
        // Obsidian-Style: basename-only Link kann in jeder beliebigen Area liegen
        // Suche in allen anderen Areas
        const crossMatches = [];
        for (const a of knownAreas) {
          if (a === targetArea) continue;
          const m = filesByArea[a].byBase.get(targetPath) || [];
          for (const p of m) crossMatches.push(`${a}/${p}`);
        }
        if (crossMatches.length === 1) continue; // Obsidian-style auto-resolve, silent ok
        if (crossMatches.length > 1) {
          warnings.push({ file: relP, rule: 'ambiguous-link', msg: `Wikilink '[[${link}]]' matcht mehrere Files areas-übergreifend: ${crossMatches.join(', ')}` });
          continue;
        }
      }
      // Nichts gefunden
      // Bei basename-only Links (kein Pfad-Prefix) downgrade zu Warning,
      // weil das Ziel vielleicht in einem noch nicht migrierten Bereich liegt.
      if (!targetPath.includes('/')) {
        warnings.push({ file: relP, rule: 'cross-area-link', msg: `Wikilink '[[${link}]]' → Ziel nicht gefunden, evtl. in noch nicht migriertem Bereich (oder Tippfehler — Audit prüfen)` });
        continue;
      }
      errors.push({ file: relP, rule: 'broken-link', msg: `Wikilink '[[${link}]]' → Ziel nicht gefunden in Bereich '${targetArea}'` });
    } else {
      warnings.push({ file: relP, rule: 'cross-area-link', msg: `Wikilink '[[${link}]]' → Bereich '${targetArea}' noch nicht im Vault (expected: target not yet migrated)` });
    }
  }
}

// Output
const errCount = errors.length;
const warnCount = warnings.length;

if (isQuick) {
  // Quick mode: nur stdout, kein File-Write, nur Errors zählen
  if (errCount === 0) {
    console.log(`✓ lint:quick ok (${knowledgeFiles.length} files, ${warnCount} warnings)`);
  } else {
    console.error(`✗ lint:quick: ${errCount} errors`);
    for (const e of errors.slice(0, 10)) {
      console.error(`  ${e.file}: [${e.rule}] ${e.msg}`);
    }
    if (errCount > 10) console.error(`  ... und ${errCount - 10} weitere`);
  }
  process.exit(errCount === 0 ? 0 : 1);
}

// Full report
const lines = [];
lines.push(`# Lint Report — ${new Date().toISOString().slice(0, 10)}`);
lines.push('');
lines.push(`**Files geprüft:** ${knowledgeFiles.length}`);
lines.push(`**Errors:** ${errCount}`);
lines.push(`**Warnings:** ${warnCount}`);
lines.push('');
lines.push('## Errors');
lines.push('');
if (errCount === 0) {
  lines.push('_Keine._');
} else {
  for (const e of errors) {
    lines.push(`- \`${e.file}\` — **${e.rule}**: ${e.msg}`);
  }
}
lines.push('');
lines.push('## Warnings');
lines.push('');
if (warnCount === 0) {
  lines.push('_Keine._');
} else {
  // Gruppieren nach rule
  const byRule = {};
  for (const w of warnings) {
    byRule[w.rule] = byRule[w.rule] || [];
    byRule[w.rule].push(w);
  }
  for (const rule of Object.keys(byRule).sort()) {
    lines.push(`### ${rule} (${byRule[rule].length})`);
    lines.push('');
    for (const w of byRule[rule]) {
      lines.push(`- \`${w.file}\`: ${w.msg}`);
    }
    lines.push('');
  }
}
lines.push('');
lines.push('## Summary');
lines.push('');
lines.push(`- Bereiche im Vault: ${knownAreas.size} (${[...knownAreas].join(', ')})`);
lines.push(`- Files pro Bereich:`);
for (const area of [...knownAreas].sort()) {
  lines.push(`  - \`${area}\`: ${filesByArea[area].paths.size}`);
}

fs.mkdirSync(path.dirname(REPORT_PATH), { recursive: true });
fs.writeFileSync(REPORT_PATH, lines.join('\n') + '\n', 'utf8');

console.log(`Lint complete: ${errCount} errors, ${warnCount} warnings`);
console.log(`Report: ${rel(REPORT_PATH)}`);

process.exit(errCount === 0 ? 0 : 1);

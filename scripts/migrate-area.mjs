#!/usr/bin/env node
// Generic area migrator: Brainsidian source → loschke-vault target
// Usage: node scripts/migrate-area.mjs <area-slug>
// Example: node scripts/migrate-area.mjs ai-essentials
//
// Source root: $BRAINSIDIAN_ROOT or default H:\Meine Ablage\DigitalBrain
// Mapping: _meta/migration-mappings/<area-slug>.json

import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const REPO_ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\//, '')), '..');
const BRAINSIDIAN_ROOT = process.env.BRAINSIDIAN_ROOT || 'H:\\Meine Ablage\\DigitalBrain';

const area = process.argv[2];
if (!area) {
  console.error('Usage: node scripts/migrate-area.mjs <area-slug>');
  process.exit(1);
}

const mappingPath = path.join(REPO_ROOT, '_meta', 'migration-mappings', `${area}.json`);
if (!fs.existsSync(mappingPath)) {
  console.error(`No mapping found at ${mappingPath}`);
  process.exit(1);
}

const mapping = JSON.parse(fs.readFileSync(mappingPath, 'utf8'));
const sourceDir = path.join(BRAINSIDIAN_ROOT, mapping.source_path);
const targetDir = path.join(REPO_ROOT, mapping.target_path);
fs.mkdirSync(targetDir, { recursive: true });

const migrationDate = mapping.migration_date;
const constants = mapping.constants;
const mocDefaults = mapping.moc_defaults || {};

const logEntries = [];
let okCount = 0;
let errCount = 0;

for (const file of mapping.files) {
  const sourceFile = path.join(sourceDir, file.source);
  const targetFile = path.join(targetDir, file.target);

  if (!fs.existsSync(sourceFile)) {
    console.error(`MISS: ${sourceFile}`);
    errCount++;
    continue;
  }

  // Sub-Dir-Support: Target-Dir sicherstellen falls verschachtelt
  fs.mkdirSync(path.dirname(targetFile), { recursive: true });

  const raw = fs.readFileSync(sourceFile, 'utf8');
  const parsed = matter(raw);
  const oldFm = parsed.data || {};
  const body = parsed.content;

  // Build new frontmatter
  const isMoc = file.type === 'moc';
  const fallbackTitle = file.target.replace(/\.md$/, '').replace(/^_/, '').replace(/-/g, ' ');

  // Tags-Fallback: alte tags > moc_defaults.tags > [area]
  const fallbackTags = isMoc ? (mocDefaults.tags || [constants.area, 'moc']) : [constants.area];
  const tags = (Array.isArray(oldFm.tags) && oldFm.tags.length > 0) ? oldFm.tags : fallbackTags;

  const newFm = {
    title: oldFm.title || (isMoc ? mocDefaults.title : fallbackTitle),
    type: file.type,
    status: file.status,
    created: oldFm.created || migrationDate,
    updated: oldFm.updated || oldFm.created || migrationDate,
    tags: tags,
    sources: file.sources,
    area: constants.area,
    brand_fit: constants.brand_fit,
    last_reviewed: constants.last_reviewed
  };

  // Optional empfohlene Felder — übernehmen falls vorhanden, sonst aus moc_defaults
  const optional = ['aliases', 'audience', 'level', 'intent', 'contains'];
  for (const key of optional) {
    if (oldFm[key] !== undefined) {
      newFm[key] = oldFm[key];
    } else if (isMoc && mocDefaults[key] !== undefined) {
      newFm[key] = mocDefaults[key];
    }
  }

  // explizit entfernte alte Felder: domain, source (singular), brand-fit (mit Bindestrich)
  // diese werden nicht aus oldFm übernommen, da newFm explizit aufgebaut wird

  // Frontmatter sortieren: Pflicht zuerst, dann optional
  const orderedFm = {};
  const order = [
    'title', 'type', 'status', 'created', 'updated', 'tags', 'sources',
    'area', 'audience', 'level', 'intent', 'contains',
    'brand_fit', 'aliases', 'last_reviewed'
  ];
  for (const k of order) {
    if (newFm[k] !== undefined) orderedFm[k] = newFm[k];
  }
  // Falls weitere unerwartete Felder existieren (sollte nicht), anhängen
  for (const k of Object.keys(newFm)) {
    if (orderedFm[k] === undefined) orderedFm[k] = newFm[k];
  }

  const out = matter.stringify(body, orderedFm, {
    // gray-matter delegates to js-yaml; keep keys quoted for ISO dates
  });

  fs.writeFileSync(targetFile, out, 'utf8');
  okCount++;
  logEntries.push(`- [${migrationDate}] ${area}/${file.target} ← ${mapping.source_path}/${file.source}`);
  console.log(`OK: ${file.source} → ${file.target}`);
}

// Migrations-Log anhängen
const logPath = path.join(REPO_ROOT, '_meta', 'migration-log.md');
const header = `\n## ${migrationDate} — migrate ${area} (${okCount} files)\n\n`;
const logBlock = header + logEntries.join('\n') + '\n';
if (!fs.existsSync(logPath)) {
  fs.writeFileSync(logPath, '# Migration Log\n\nChronologisch, append-only. Zeigt was wann von wo nach wo migriert wurde.\n', 'utf8');
}
fs.appendFileSync(logPath, logBlock);

console.log(`\nMigration done: ${okCount} ok, ${errCount} errors`);
console.log(`Log appended to ${logPath}`);

if (errCount > 0) process.exit(1);

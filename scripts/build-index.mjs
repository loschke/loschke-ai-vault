#!/usr/bin/env node
// Generate knowledge/index.md from all markdown in knowledge/.
// Usage: node scripts/build-index.mjs

import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const REPO_ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\//, '')), '..');
const KNOWLEDGE_DIR = path.join(REPO_ROOT, 'knowledge');
const INDEX_PATH = path.join(KNOWLEDGE_DIR, 'index.md');

function walkMd(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkMd(full, acc);
    else if (entry.isFile() && entry.name.endsWith('.md')) acc.push(full);
  }
  return acc;
}

const allFiles = walkMd(KNOWLEDGE_DIR);
const skip = new Set([INDEX_PATH, path.join(KNOWLEDGE_DIR, 'log.md')]);

const byArea = {}; // area -> { moc: file|null, items: [] }
const typeCounts = {};

for (const file of allFiles) {
  if (skip.has(file)) continue;
  const relPath = path.relative(KNOWLEDGE_DIR, file).replace(/\\/g, '/');
  const parts = relPath.split('/');
  if (parts.length < 2) continue; // muss in Bereich sein
  const area = parts[0];
  const basename = parts[parts.length - 1];

  let fm;
  try {
    fm = matter(fs.readFileSync(file, 'utf8')).data || {};
  } catch (e) {
    fm = { title: basename, type: '?', status: '?', updated: '?' };
  }

  byArea[area] = byArea[area] || { moc: null, items: [] };
  // Sub-Dir-Pfad innerhalb des Bereichs (leer wenn Top-Level)
  const subPath = parts.slice(1, parts.length - 1).join('/');

  if (basename === '_moc.md' && subPath === '') {
    byArea[area].moc = { path: relPath, fm };
  } else {
    byArea[area].items.push({
      path: relPath,
      basename,
      subPath,
      title: fm.title || basename.replace(/\.md$/, ''),
      type: fm.type || '-',
      status: fm.status || '-',
      updated: fm.updated || '-'
    });
    if (fm.type) typeCounts[fm.type] = (typeCounts[fm.type] || 0) + 1;
  }
}

const lines = [];
lines.push('# Knowledge Index');
lines.push('');
lines.push(`> Auto-generiert von \`scripts/build-index.mjs\` am ${new Date().toISOString().slice(0, 10)}.`);
lines.push('> Nicht manuell editieren.');
lines.push('');

const areaNames = Object.keys(byArea).sort();
const totalFiles = areaNames.reduce((sum, a) => sum + byArea[a].items.length + (byArea[a].moc ? 1 : 0), 0);
lines.push(`**Bereiche:** ${areaNames.length} · **Files:** ${totalFiles}`);
lines.push('');

for (const area of areaNames) {
  const data = byArea[area];
  const mocLink = data.moc ? `[\`_moc.md\`](./${data.moc.path})` : '_(kein MOC)_';
  lines.push(`## ${area}`);
  lines.push('');
  lines.push(`MOC: ${mocLink} · ${data.items.length} Einträge`);
  lines.push('');

  if (data.items.length > 0) {
    const hasSubDirs = data.items.some(i => i.subPath);
    if (hasSubDirs) {
      lines.push('| Pfad | Title | Type | Status | Updated |');
      lines.push('|---|---|---|---|---|');
    } else {
      lines.push('| Title | Type | Status | Updated |');
      lines.push('|---|---|---|---|');
    }
    const sorted = [...data.items].sort((a, b) => {
      if (a.subPath !== b.subPath) return a.subPath.localeCompare(b.subPath);
      return a.basename.localeCompare(b.basename);
    });
    for (const item of sorted) {
      const pathCol = item.subPath ? `\`${item.subPath}/\`` : '`./`';
      if (hasSubDirs) {
        lines.push(`| ${pathCol} | [${item.title}](./${item.path}) | \`${item.type}\` | \`${item.status}\` | ${item.updated} |`);
      } else {
        lines.push(`| [${item.title}](./${item.path}) | \`${item.type}\` | \`${item.status}\` | ${item.updated} |`);
      }
    }
    lines.push('');
  }
}

lines.push('---');
lines.push('');
lines.push('## Counts pro `type`');
lines.push('');
const sortedTypes = Object.keys(typeCounts).sort((a, b) => typeCounts[b] - typeCounts[a]);
if (sortedTypes.length === 0) {
  lines.push('_(keine Einträge)_');
} else {
  for (const t of sortedTypes) {
    lines.push(`- \`${t}\`: ${typeCounts[t]}`);
  }
}
lines.push('');

fs.writeFileSync(INDEX_PATH, lines.join('\n'), 'utf8');
console.log(`Index written: ${path.relative(REPO_ROOT, INDEX_PATH).replace(/\\/g, '/')} (${areaNames.length} areas, ${totalFiles} files)`);

/** 단계 그림이 창틀 밖으로 넘치지 않는지 검사. 실행: node scripts/check-step-svg.mjs */
import { readFileSync, readdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DIRS = ['public/automation/steps', 'public/reference/steps'].map(d => resolve(ROOT, d));
const L = 14, R = 986;            // 창틀 좌·우 안쪽
let bad = 0, seen = 0;
const files = DIRS.flatMap(d => readdirSync(d).filter(n => n.endsWith('.svg')).sort().map(n => [d, n]));
for (const [SRC, f] of files) {
  seen++;
  const svg = readFileSync(resolve(SRC, f), 'utf8');
  const [, , H] = svg.match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/);
  const bottom = Number(H);
  const issues = [];

  for (const m of svg.matchAll(/<rect x="(-?[\d.]+)" y="(-?[\d.]+)" width="([\d.]+)" height="([\d.]+)"/g)) {
    const [x, y, w, h] = m.slice(1).map(Number);
    if (w === 1000) continue;                      // 바탕
    if (x < L - 2 || x + w > R + 2) issues.push(`rect 가로 ${x}~${x + w}`);
    if (y + h > bottom) issues.push(`rect 세로 ${y + h} > ${bottom}`);
  }
  for (const m of svg.matchAll(/<text x="(-?[\d.]+)" y="(-?[\d.]+)"[^>]*text-anchor="end"/g)) {
    const x = Number(m[1]); if (x > R) issues.push(`text(end) x=${x}`);
  }
  for (const m of svg.matchAll(/<text x="(-?[\d.]+)" y="(-?[\d.]+)"/g)) {
    const x = Number(m[1]); if (x < 8 || x > R) issues.push(`text x=${x}`);
  }
  for (const m of svg.matchAll(/<circle cx="(-?[\d.]+)" cy="(-?[\d.]+)" r="([\d.]+)"/g)) {
    const [cx, cy, r0] = m.slice(1).map(Number);
    if (cx - r0 < 8 || cx + r0 > R + 6) issues.push(`circle cx=${cx}`);
    if (cy + r0 > bottom) issues.push(`circle cy=${cy}`);
  }
  const uniq = [...new Set(issues)];
  if (uniq.length) { bad++; console.log(`✗ ${f}\n    ${uniq.join('\n    ')}`); }
}
console.log(bad ? `
넘침 ${bad}건 / ${seen}장` : `
${seen}장 모두 창틀 안에 들어옴`);

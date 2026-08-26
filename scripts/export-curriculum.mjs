/**
 * 대구 전 과정(커리큘럼) 아카이브 생성기
 *
 * src/data/courses.ts 의 PROGRAMS 를 그대로 읽어 docs/CURRICULUM.md 로 굳힌다.
 * 손으로 옮겨 적지 않으므로 코드가 바뀌면 다시 돌리기만 하면 문서가 따라온다.
 *
 *   node --experimental-strip-types scripts/export-curriculum.mjs
 *   (package.json 의 `npm run docs:curriculum`)
 */
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const { PROGRAMS } = await import('../src/data/courses.ts');
const { default: site } = await import('../src/config/site.ts');

const out = [];
const w = (line = '') => out.push(line);

w(`# 대구광역시 공무원 AI 실무 교육 — 전 과정 기록`);
w();
w(`> ${site.description}`);
w();
w(`- 사이트: ${site.url}`);
w(`- 운영: ${site.company.name}`);
w(`- 이 문서는 \`src/data/courses.ts\` 에서 자동 생성됩니다. 직접 고치지 말고 \`npm run docs:curriculum\` 을 다시 실행하세요.`);
w();

/* ── 전체 요약표 ── */
const totalSessions = PROGRAMS.reduce(
  (s, p) => s + p.curriculum.reduce((d, day) => d + day.sessions.length, 0), 0);
const totalPractices = PROGRAMS.reduce(
  (s, p) => s + p.curriculum.reduce((d, day) =>
    d + day.sessions.reduce((x, ses) => x + ses.practices.length, 0), 0), 0);

w(`## 한눈에 보기`);
w();
w(`| 항목 | 값 |`);
w(`|---|---|`);
w(`| 과정 수 | ${PROGRAMS.length}개 (중급 · 고급) |`);
w(`| 총 교시 | ${totalSessions}개 세션 |`);
w(`| 실습 사례 | ${totalPractices}건 |`);
w(`| 과정당 분량 | 2일 · 8시간 |`);
w();
w(`| 과정 | 대상 | 핵심 키워드 |`);
w(`|---|---|---|`);
for (const p of PROGRAMS) {
  w(`| **${p.nameKo}** | ${p.audience} | ${p.highlights.join(' · ')} |`);
}
w();

/* ── 과정별 상세 ── */
for (const p of PROGRAMS) {
  w(`---`);
  w();
  w(`## ${p.order}. ${p.nameKo}`);
  w();
  w(`*${p.nameEn}*`);
  w();
  w(`> ${p.tagline}`);
  w();
  w(p.descKo);
  w();
  w(`| | |`);
  w(`|---|---|`);
  w(`| 수준 | ${p.level} |`);
  w(`| 분량 | ${p.duration} |`);
  w(`| 대상 | ${p.audience} |`);
  w(`| 핵심 키워드 | ${p.highlights.join(' · ')} |`);
  w();

  for (const day of p.curriculum) {
    w(`### ${day.badge} — ${day.theme}`);
    w();
    w(`*${day.themeEn}*`);
    w();
    for (const s of day.sessions) {
      w(`#### ${s.period} (${s.time}) · ${s.title}`);
      w();
      w(`**학습 목표** — ${s.goal}`);
      w();
      w(`**다루는 내용**`);
      w();
      for (const t of s.topics) w(`- ${t}`);
      w();
      w(`**실습 사례 ${s.practices.length}건**`);
      w();
      s.practices.forEach((pc, i) => {
        w(`${i + 1}. **${pc.scenario}**`);
        w();
        w('   ```text');
        for (const line of pc.prompt.split('\n')) w(`   ${line}`);
        w('   ```');
        w();
      });
    }
  }
}

w(`---`);
w();
w(`_자동 생성 문서 — 원본: \`src/data/courses.ts\`_`);
w();

writeFileSync(join(root, 'docs', 'CURRICULUM.md'), out.join('\n'), 'utf8');
console.log(`docs/CURRICULUM.md 생성 — ${PROGRAMS.length}개 과정 · ${totalSessions}교시 · 실습 ${totalPractices}건`);

/**
 * 각 교시 데이터파일의 「따라하기」 섹션을 생성된 단계형 본문(walk/*.js)으로 갈아 끼운다.
 * 한 번 돌리면 그 뒤로는 섹션이 walk 모듈을 가리키므로 다시 돌릴 필요가 없다.
 *
 * 실행: node scripts/patch-walk-sections.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const DATA = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'pages', 'automation', 'data');

/* 갈아 끼울 대상 — [파일, [{ 변수명, walk 모듈, 바꿀 섹션 제목 }]] */
const TARGETS = [
  ['auto-01-understand.js', [{ v: 'walk1', m: 'auto-01-walk', title: '따라하기 실습 · 말로 설명해서 도구 만들기' }]],
  ['auto-02-select.js', [{ v: 'walk2', m: 'auto-02-walk', title: '따라하기 실습 · 자동화 대상 업무 정의서 채우기' }]],
  ['auto-03-design.js', [{ v: 'walk3', m: 'auto-03-walk', title: '따라하기 실습 ① 네 가지 도구 화면 익히기',
    also: ['따라하기 실습 ② 설계서와 요구사항 명세서 쓰기'] }]],
  ['auto-04-generate.js', [{ v: 'walk4', m: 'auto-04-walk', title: '따라하기 실습 · 코드를 받아 시트에 붙이기' }]],
  ['auto-05-test.js', [{ v: 'walk5', m: 'auto-05-walk', title: '따라하기 실습 · 기능 시험과 오류 대응 루틴' }]],
  ['auto-06-security.js', [{ v: 'walk6', m: 'auto-06-walk', title: '따라하기 실습 · 보안 판정과 검토 절차 설계' }]],
  ['auto-07-plan.js', [
    { v: 'walk7', m: 'auto-07-walk', title: '7교시 따라하기 실습 · 적용계획서 여덟 칸 채우기' },
    { v: 'walk8', m: 'auto-08-walk', title: '8교시 따라하기 실습 · 시연·피드백·최종본 만들기' },
  ]],
];

let changed = 0;
for (const [file, specs] of TARGETS) {
  const path = resolve(DATA, file);
  let lines = readFileSync(path, 'utf8').split('\n');

  for (const spec of specs) {
    const titleLine = lines.findIndex(l => l.trim() === `title: '${spec.title}',`);
    if (titleLine < 0) { console.warn(`  ! ${file} — 섹션을 못 찾음: ${spec.title}`); continue; }

    // 섹션 여는 줄까지 거슬러 올라간다
    let open = titleLine;
    while (open >= 0 && lines[open].trim() !== '{') open--;
    // 같은 깊이의 닫는 줄을 찾는다
    let close = titleLine;
    while (close < lines.length && lines[close] !== '    },') close++;
    if (open < 0 || close >= lines.length) { console.warn(`  ! ${file} — 경계를 못 찾음`); continue; }

    lines.splice(open, close - open + 1, `    ${spec.v},`);

    // 새 단계형 한 편으로 합쳐지는 섹션은 지운다
    for (const dead of spec.also || []) {
      const dl = lines.findIndex(l => l.trim() === `title: '${dead}',`);
      if (dl < 0) continue;
      let o2 = dl; while (o2 >= 0 && lines[o2].trim() !== '{') o2--;
      let c2 = dl; while (c2 < lines.length && lines[c2] !== '    },') c2++;
      if (o2 >= 0 && c2 < lines.length) lines.splice(o2, c2 - o2 + 1);
    }
  }

  // 맨 위에 import 를 붙인다 (이미 있으면 건너뜀)
  const imports = specs
    .filter(s => !lines.some(l => l.startsWith(`import ${s.v} `)))
    .map(s => `import ${s.v} from './walk/${s.m}';`);
  if (imports.length) lines = [...imports, ...lines];

  writeFileSync(path, lines.join('\n'), 'utf8');
  console.log(`  ✓ ${file}`);
  changed++;
}
console.log(`\n데이터파일 ${changed}개 갱신`);

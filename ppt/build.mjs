/**
 * 행정업무 자동화 강의교안 PPTX 빌드
 *
 *   node render-svg.mjs   # 화면 목업 SVG → PNG (먼저 1회)
 *   node build.mjs        # PPTX 생성
 *
 * 원본 콘텐츠: src/pages/automation/data/auto-0*.js  (사이트 /automation 과 같은 내용)
 * 디자인 언어: src/components/setup/SetupKit.tsx + src/styles/setup.css 의 "따라하기"
 */
import { readFileSync, existsSync, mkdirSync, readdirSync, statSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  newDeck, addSlide, coverSlide, dividerSlide, header, stepHeader, Stack,
  C, M, BODY_W, BODY_TOP, BODY_BOT, resetCounter,
} from './theme.mjs';
import { DECK } from './content/index.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ASSETS = resolve(__dirname, 'assets');
const SVGDIR = resolve(__dirname, '..', 'public', 'automation');

/* 그림 가로세로비 — SVG viewBox 에서 그대로 읽는다 */
const RATIO = {};
for (const f of readdirSync(SVGDIR).filter(x => x.endsWith('.svg'))) {
  const m = readFileSync(resolve(SVGDIR, f), 'utf8').match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/);
  if (m) RATIO[f.replace(/\.svg$/, '')] = Number(m[1]) / Number(m[2]);
}

/* ── 블록 한 개를 Stack 에 그린다 ── */
function draw(stack, block) {
  const [kind, a, b, c] = block;
  switch (kind) {
    case 'label':   return stack.label(a, b);
    case 'para':    return stack.para(a, b);
    case 'bullets': return stack.bullets(a, b);
    case 'actions': return stack.actions(a, b);
    case 'goal':    return stack.goal(a, b);
    case 'note':    return stack.note(a, b, c, block[4]);
    case 'check':   return stack.check(a, b);
    case 'code':    return stack.code(a, b);
    case 'table':   return stack.table(a, b);
    case 'chips':   return stack.chips(a, b);
    case 'gap':     return stack.gap(a ?? 0.14);
    case 'image': {
      const img = resolve(ASSETS, `${a}.png`);
      if (!existsSync(img)) throw new Error(`그림 없음: ${a}.png — 먼저 render-svg.mjs 를 돌리세요`);
      return stack.image(img, { w: b?.w ?? stack.w, ratio: RATIO[a], align: b?.align });
    }
    default: throw new Error(`모르는 블록: ${kind}`);
  }
}

/** 슬라이드 밖으로 넘친 단을 모아 두었다가 빌드 끝에 알려 준다 */
const overflow = [];

function drawColumns(slide, cols, top = BODY_TOP, tag = '') {
  const gap = 0.42;
  const totalW = cols.reduce((s, col) => s + (col.w ?? 1), 0);
  let x = M;
  const avail = BODY_W - gap * (cols.length - 1);
  cols.forEach((col, ci) => {
    const w = avail * ((col.w ?? 1) / totalW);
    const st = new Stack(slide, x, col.top ?? top, w);
    for (const blk of col.blocks) draw(st, blk);
    // 높이는 어림잡은 값이라 0.1" 안쪽 차이는 실제로 넘치지 않는다
    if (st.y > BODY_BOT + 0.1) overflow.push({ tag, col: ci + 1, over: +(st.y - BODY_BOT).toFixed(2) });
    x += w + gap;
  });
}

/* ── 덱 만들기 ── */
const pptx = newDeck({
  title: '행정업무 자동화 — 바이브코딩으로 만드는 업무 도구 (1~8교시)',
  subject: '대구광역시 공무원 AI 실무 교육 · 따라하기 강의교안',
  author: '정동엽',
  company: 'DreamIT Biz · 직업미래연구소',
});
resetCounter();

let section = '';
for (const item of DECK) {
  if (item.kind === 'cover') { coverSlide(pptx, item); continue; }
  if (item.kind === 'divider') {
    section = item.section ?? item.title;
    dividerSlide(pptx, { ...item, section });
    continue;
  }
  if (item.section) section = item.section;

  const slide = addSlide(pptx, { section });
  if (item.kind === 'step') {
    stepHeader(slide, {
      step: item.step, breadcrumb: item.breadcrumb, title: item.title, tone: item.tone ?? C.accent,
    });
  } else {
    header(slide, { kicker: item.kicker, title: item.title, tone: item.tone ?? C.primary });
  }
  drawColumns(slide, item.cols, item.top ?? BODY_TOP, `#${DECK.indexOf(item) + 1} ${item.title}`);
}

/* ── 저장 ── */
const stamp = '20260909';
const name = `daegu-automation-lecture_v1.0_${stamp}.pptx`;
const outDirs = [resolve(__dirname, 'dist'), resolve(__dirname, '..', 'public', 'downloads')];
for (const d of outDirs) mkdirSync(d, { recursive: true });

const primary = resolve(outDirs[0], name);
await pptx.writeFile({ fileName: primary });

const { copyFileSync } = await import('node:fs');
copyFileSync(primary, resolve(outDirs[1], name));

if (overflow.length) {
  console.log('\n⚠ 슬라이드 밖으로 넘친 단 — 내용을 줄이거나 슬라이드를 나누세요:');
  for (const o of overflow) console.log(`   ${o.tag} — ${o.col}단, ${o.over}" 초과`);
} else {
  console.log('\n✓ 넘친 단 없음');
}

const kb = (statSync(primary).size / 1024 / 1024).toFixed(2);
console.log(`\n✓ 슬라이드 ${DECK.length}장 · ${kb} MB`);
console.log(`  ${primary}`);
console.log(`  ${resolve(outDirs[1], name)}`);

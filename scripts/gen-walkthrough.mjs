/**
 * 1~8교시 「따라하기」 섹션 본문 생성기.
 *
 * 각 교시의 두 번째 섹션을 hufs26 /setup 과 같은 단계형으로 만든다.
 *   전체 흐름 띠 → STEP 카드(화면 그림 + 목표 + 할 일 + 막히면) → 마무리 확인
 *
 * 화면 그림은 scripts/gen-step-svg.mjs 가 만든 public/automation/steps/*.svg 를 쓴다.
 * 산출물: src/pages/automation/data/walk/auto-0N-walk.js
 *
 * 실행: node scripts/gen-walkthrough.mjs
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const OUT = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'pages', 'automation', 'data', 'walk');
mkdirSync(OUT, { recursive: true });

/* ── HTML 조각 ── */
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** 굵게·코드 표기를 HTML 로 — *별표* 는 쓰지 않고 「」 와 `백틱` 만 허용한다 */
function rich(s) {
  return esc(s)
    .replace(/\[\[(.+?)\]\]/g, '<b>$1</b>')
    .replace(/`(.+?)`/g, '<code>$1</code>');
}

const flowStrip = items => `<div class="guide-walk-flow">
${items.map((s, i) => `  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">${i + 1}</span>${rich(s)}</span>`).join('\n')}
</div>`;

function stepCard(st, lang) {
  const L = st[lang];
  const stuck = (L.stuck || []).length ? `
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">${lang === 'ko' ? '이 화면이 안 나오면' : 'If your screen looks different'}</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
${L.stuck.map(s => `            <li><b>${rich(s.when)}</b><span>${rich(s.then)}</span></li>`).join('\n')}
          </ul>
        </div>
      </div>` : '';
  const note = L.note ? `
      <div class="setup-note setup-note-tip">
        <div class="setup-note-title">${lang === 'ko' ? '알아 두면 좋은 것' : 'Worth knowing'}</div>
        <div class="setup-note-body">${rich(L.note)}</div>
      </div>` : '';

  return `<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP ${st.no}</span>
    <span class="setup-step-crumb">${rich(L.crumb)}</span>
  </div>
  <h3 class="setup-step-title">${rich(L.title)}</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/${st.svg}" alt="${esc(L.alt)}" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">${lang === 'ko' ? '이 단계의 목표' : 'Goal of this step'}</span>
        <p>${rich(L.goal)}</p>
      </div>
      <ol class="setup-actions">
${L.actions.map((a, i) => `        <li><span class="setup-action-no">${i + 1}</span><div>${rich(a)}</div></li>`).join('\n')}
      </ol>${stuck}${note}
    </div>
  </div>
</section>`;
}

function render(sess, lang) {
  const L = sess[lang];
  const head = `${L.lead}

${flowStrip(L.flow)}`;
  const steps = sess.steps.map(st => stepCard(st, lang)).join('\n\n');
  const tail = `
### ${lang === 'ko' ? '여기까지 하면' : 'When you finish'}

${L.done.map(d => `- ${d}`).join('\n')}
`;
  return `${head}\n\n${steps}\n${tail}`;
}

/* ── 산출 ── */
export function emit(sessions) {
  sessions.forEach(sess => {
    const body = `/**
 * ${sess.file} — ${sess.ko.title}
 * scripts/gen-walkthrough.mjs 가 만든 파일이다. 직접 고치지 말고 생성기를 고칠 것.
 */
export default {
  title: ${JSON.stringify(sess.ko.title)},
  titleEn: ${JSON.stringify(sess.en.title)},
  content: ${JSON.stringify(render(sess, 'ko'))},
  contentEn: ${JSON.stringify(render(sess, 'en'))},
};
`;
    writeFileSync(resolve(OUT, sess.file), body, 'utf8');
    console.log(`  ✓ ${sess.file}`);
  });
}

import sessions from './walkthrough-content.mjs';
emit(sessions);
console.log(`\n따라하기 본문 ${sessions.length}개 생성 → src/pages/automation/data/walk/`);

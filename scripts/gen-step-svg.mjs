/**
 * 행정업무 자동화 1~8교시 「따라하기」 단계 화면 그림 생성기.
 *
 * 화면 사이트(hufs26 /setup)의 따라하기 디자인 언어를 그대로 쓴다.
 *   · 브라우저/앱 창 틀 안에 실제로 보게 될 화면을 그린다
 *   · 눌러야 할 자리를 주황 점선으로 감싸고 주황 번호를 찍는다
 *   · 그림 아래 같은 번호로 무엇을 하는지 한 줄씩 적는다
 *
 * 기존 public/automation/*.svg 와 같은 좌표·색·글꼴 규칙을 따른다.
 * 실행: node scripts/gen-step-svg.mjs
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const OUT = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'automation', 'steps');
mkdirSync(OUT, { recursive: true });

/* ── 색 (src/styles/setup.css · ppt/theme.mjs 와 동일) ── */
const C = {
  paper: '#FFFFFF', line: '#E6E8EC', line2: '#D9DDE3', bar: '#F3F5F8',
  ink: '#1F2937', ink2: '#202124', dim: '#6B7280', dim2: '#5F6368', dim3: '#9AA0A6',
  orange: '#F97316', blue: '#1A73E8', blue2: '#174EA6', blueSoft: '#E8F0FE',
  green: '#188038', greenSoft: '#E6F4EA', red: '#D93025', redSoft: '#FCE8E6',
  amber: '#B06000', amberSoft: '#FEF7E0', grayBtn: '#F1F3F4', grayLine: '#DADCE0',
  head: '#EEF1F5', headLine: '#D5DAE2', sel: '#FFF9EC', chat: '#F7F8FA', chatMe: '#E8F0FE',
};
const F = "'Noto Sans KR','Malgun Gothic','Apple SD Gothic Neo',sans-serif";
const M = "'D2Coding','Consolas','Menlo','Courier New',monospace";

/* ── 기본 조각 ── */
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** 글자. o = {size,fill,w(굵기),a(anchor),mono} */
function t(x, y, s, o = {}) {
  const { size = 12.5, fill = C.ink2, w = 400, a, mono } = o;
  return `<text x="${x}" y="${y}" font-size="${size}" fill="${fill}" font-weight="${w}"`
    + `${a ? ` text-anchor="${a}"` : ''} font-family="${mono ? M : F}">${esc(s)}</text>`;
}

/** 사각형. o = {rx,fill,stroke,sw,dash} */
function r(x, y, w, h, o = {}) {
  const { rx = 0, fill = 'none', stroke, sw = 1, dash } = o;
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}"${rx ? ` rx="${rx}"` : ''} fill="${fill}"`
    + `${stroke ? ` stroke="${stroke}" stroke-width="${sw}"` : ''}${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
}

const line = (x1, y1, x2, y2, col = C.line, sw = 1.5) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${col}" stroke-width="${sw}"/>`;

/** 눌러야 할 자리 — 주황 점선 */
const hl = (x, y, w, h, rx = 8) => r(x, y, w, h, { rx, stroke: C.orange, sw: 2, dash: '7 5' });

/** 그림 위 주황 번호 */
const pin = (cx, cy, n) =>
  `<circle cx="${cx}" cy="${cy}" r="13" fill="${C.orange}" stroke="#FFFFFF" stroke-width="2.5"/>`
  + t(cx, cy + 5, n, { size: 14, w: 700, fill: '#fff', a: 'middle' });

/** 알약 모양 안내문 */
const pillNote = (x, y, w, s) =>
  r(x, y, w, 30, { rx: 15, fill: '#FFF7ED', stroke: '#FDBA74', sw: 1.2 })
  + t(x + 16, y + 20, s, { size: 13, fill: '#9A3412', w: 700 });

/** 버튼 */
const btn = (x, y, w, s, o = {}) => {
  const { h = 26, fill = C.grayBtn, stroke = C.grayLine, fg = '#3C4043', w: bold = 400, size = 12.5 } = o;
  return r(x, y, w, h, { rx: 6, fill, stroke })
    + t(x + w / 2, y + h / 2 + 4.5, s, { size, fill: fg, w: bold, a: 'middle' });
};
const btnBlue = (x, y, w, s, o = {}) => btn(x, y, w, s, { fill: C.blue, stroke: C.blue, fg: '#FFFFFF', w: 700, ...o });

/** 입력칸 */
const input = (x, y, w, label, val, o = {}) => {
  const { h = 34, mono = false } = o;
  return (label ? t(x, y - 7, label, { size: 12, fill: C.dim2, w: 700 }) : '')
    + r(x, y, w, h, { rx: 6, fill: '#FFFFFF', stroke: C.grayLine })
    + t(x + 12, y + h / 2 + 4.5, val, { size: 12.5, fill: val ? C.ink2 : '#9AA0A6', mono });
};

/** 상태 배지 */
const badge = (x, y, s, kind = 'ok') => {
  const map = { ok: [C.greenSoft, C.green], warn: [C.amberSoft, C.amber], bad: [C.redSoft, C.red], info: [C.blueSoft, C.blue2] };
  const [bg, fg] = map[kind];
  const w = s.length * 12 + 22;
  return r(x, y, w, 24, { rx: 12, fill: bg }) + t(x + w / 2, y + 16.5, s, { size: 12, fill: fg, w: 700, a: 'middle' });
};

/* ── 창틀 ── */
/** 브라우저/앱 창. 안쪽 그림 영역은 x 14~986, y 54~(14+h) */
function frame(h, url) {
  const bar = r(14, 14, 972, h, { rx: 14, fill: C.paper, stroke: C.line2, sw: 1.5 })
    + `<path d="M14 28 a14 14 0 0 1 14 -14 h944 a14 14 0 0 1 14 14 v26 h-972 z" fill="${C.bar}"/>`
    + `<circle cx="40" cy="40" r="6" fill="#FF5F57"/><circle cx="60" cy="40" r="6" fill="#FEBC2E"/><circle cx="80" cy="40" r="6" fill="#28C840"/>`;
  const addr = url
    ? r(340, 28, 320, 24, { rx: 12, fill: '#E7EAEF' }) + t(500, 45, url, { size: 13, fill: C.dim, a: 'middle' })
    : '';
  return bar + addr + line(14, 54, 986, 54, C.line, 1);
}

/** 그림 아래 번호 설명 줄 */
function legend(items, y) {
  let s = line(14, y, 986, y, C.line, 1.5);
  items.forEach((txt, i) => {
    const cy = y + 30 + i * 30;
    s += `<circle cx="34" cy="${cy}" r="12" fill="${C.orange}"/>`
      + t(34, cy + 5, i + 1, { size: 13, w: 700, fill: '#fff', a: 'middle' })
      + t(56, cy + 5, txt, { size: 14.5, fill: C.ink });
  });
  return s;
}

/** 한 장 완성 */
function build({ file, alt, url, frameH, body, legends }) {
  const lineY = 14 + frameH + 20;
  const total = lineY + 30 + legends.length * 30 + 6;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 ${total}" width="1000" height="${total}" role="img" aria-label="${esc(alt)}">
  <title>${esc(alt)}</title>
  ${r(0, 0, 1000, total, { fill: C.paper })}
  ${frame(frameH, url)}
  ${body}
  ${legend(legends, lineY)}
</svg>
`;
  writeFileSync(resolve(OUT, file), svg, 'utf8');
  return file;
}

/* ── 화면 부품: 구글 시트 ── */
/**
 * 스프레드시트 격자. cols = ['접수번호','부서',...], rows = [[..],[..]]
 * o = { x, y, cw(열너비 배열 또는 숫자), rh, tabs, activeTab, menu, mark(강조 셀 '1,3') }
 */
function sheet(cols, rows, o = {}) {
  const { x = 40, y = 96, cw = 150, rh = 30, tabs, activeTab = 0, menu, mark = [], note } = o;
  const widths = Array.isArray(cw) ? cw : cols.map(() => cw);
  const totalW = widths.reduce((a, b) => a + b, 0) + 40;
  let s = '';

  if (menu) {
    let mx = x;
    menu.forEach(m => { s += t(mx, y - 26, m, { size: 12.5, fill: C.dim2 }); mx += m.length * 13 + 22; });
  }

  // 열 머리 (A B C …)
  s += r(x, y, 40, 24, { fill: C.head, stroke: C.headLine });
  widths.forEach((w, i) => {
    const cx0 = x + 40 + widths.slice(0, i).reduce((a, b) => a + b, 0);
    s += r(cx0, y, w, 24, { fill: C.head, stroke: C.headLine })
      + t(cx0 + w / 2, y + 17, String.fromCharCode(65 + i), { size: 11.5, fill: C.dim2, w: 700, a: 'middle' });
  });

  // 제목 행 + 자료 행
  [cols, ...rows].forEach((row, ri) => {
    const ry = y + 24 + ri * rh;
    s += r(x, ry, 40, rh, { fill: C.head, stroke: C.headLine })
      + t(x + 20, ry + rh / 2 + 4.5, ri + 1, { size: 11.5, fill: C.dim2, w: 700, a: 'middle' });
    row.forEach((cell, ci) => {
      const cx0 = x + 40 + widths.slice(0, ci).reduce((a, b) => a + b, 0);
      const isHead = ri === 0;
      const marked = mark.includes(`${ri},${ci}`);
      s += r(cx0, ry, widths[ci], rh, { fill: marked ? C.sel : '#FFFFFF', stroke: C.headLine })
        + t(cx0 + 10, ry + rh / 2 + 4.5, cell, { size: 12.5, fill: C.ink2, w: isHead ? 700 : 400 });
    });
  });

  // 시트 탭
  if (tabs) {
    const ty = y + 24 + (rows.length + 1) * rh + 16;
    let tx = x;
    tabs.forEach((tab, i) => {
      const w = tab.length * 13 + 30;
      s += r(tx, ty, w, 28, { rx: 4, fill: i === activeTab ? '#FFFFFF' : '#F1F3F4', stroke: C.headLine })
        + t(tx + w / 2, ty + 19, tab, { size: 12.5, fill: i === activeTab ? C.blue2 : C.dim2, w: i === activeTab ? 700 : 400, a: 'middle' });
      tx += w + 6;
    });
  }
  if (note) s += t(x, y + 24 + (rows.length + 1) * rh + (tabs ? 68 : 30), note, { size: 12.5, fill: C.dim });

  const tableBottom = y + 24 + (rows.length + 1) * rh;
  const colX = i => x + 40 + widths.slice(0, i).reduce((a, b) => a + b, 0);
  const tabX = i => x + tabs.slice(0, i).reduce((a, tb) => a + tb.length * 13 + 36, 0);
  const tabW = i => tabs[i].length * 13 + 30;
  return {
    s, x, y, totalW, bottom: tableBottom, tableBottom,
    rowY: i => y + 24 + i * rh, rh, colX, colW: i => widths[i],
    tabsY: tabs ? tableBottom + 16 : null, tabX, tabW,
  };
}

/* ── 화면 부품: Apps Script 편집기 ── */
function editor(codeLines, o = {}) {
  const { x = 40, y = 96, w = 700, fn = '함수선택', log } = o;
  let s = btn(x, y, 60, '저장') + btnBlue(x + 68, y, 66, '▶ 실행') + btn(x + 142, y, 70, '디버그')
    + r(x + 224, y, 200, 26, { rx: 6, fill: '#FFFFFF', stroke: C.grayLine })
    + t(x + 238, y + 18, `${fn}  ▾`, { size: 12.5, fill: C.ink2 });

  const ey = y + 38;
  const eh = codeLines.length * 22 + 24;
  s += r(x, ey, w, eh, { fill: '#FFFFFF', stroke: C.line });
  codeLines.forEach((ln, i) => {
    const ly = ey + 24 + i * 22;
    s += t(x + 34, ly, i + 1, { size: 11.5, fill: C.dim3, a: 'end', mono: true });
    const isComment = ln.trimStart().startsWith('//');
    s += t(x + 48, ly, ln, { size: 12.5, fill: isComment ? '#5F8C3F' : C.ink2, mono: true });
  });

  let bottom = ey + eh;
  if (log) {
    const ly = bottom + 14;
    s += r(x, ly, w, 22 + log.length * 20 + 12, { rx: 8, fill: '#F8F9FA', stroke: '#E0E3E7' })
      + t(x + 16, ly + 22, '실행 로그', { size: 12.5, fill: '#3C4043', w: 700 });
    log.forEach((l, i) => {
      const col = l.kind === 'ok' ? C.green : l.kind === 'bad' ? C.red : C.dim2;
      s += t(x + 16, ly + 46 + i * 20, l.text, { size: 12, fill: col, mono: true });
    });
    bottom = ly + 22 + log.length * 20 + 12;
  }
  return { s, bottom };
}

/* ── 화면 부품: AI 대화창 ── */
/**
 * msgs = [{ who:'me'|'ai', lines:[...], code:boolean }]
 * o = { x, y, w, tool }
 */
function chat(msgs, o = {}) {
  const { x = 40, y = 92, w = 700, tool = 'AI 도구' } = o;
  let s = t(x, y - 14, tool, { size: 12.5, fill: C.dim2, w: 700 });
  let cy = y;
  msgs.forEach(m => {
    const isMe = m.who === 'me';
    const bw = isMe ? w - 90 : w;
    const bx = isMe ? x + 90 : x;
    const h = m.lines.length * 20 + 26;
    s += r(bx, cy, bw, h, { rx: 10, fill: isMe ? C.chatMe : (m.code ? '#F8F9FA' : C.chat), stroke: m.code ? '#E0E3E7' : 'none' });
    s += t(bx + 2, cy - 13, isMe ? '나' : 'AI', { size: 11.5, fill: C.dim, w: 700 });
    m.lines.forEach((ln, i) => {
      s += t(bx + 14, cy + 20 + i * 20, ln, { size: 12.5, fill: C.ink2, mono: !!m.code });
    });
    cy += h + 30;
  });
  return { s, bottom: cy - 30 };
}

/* ── 화면 부품: 승인·설정 대화상자 ── */
function dialog(title, lines, o = {}) {
  const { x = 250, y = 110, w = 500, buttons = [], icon = 'warn', sub } = o;
  const h = 78 + lines.length * 22 + (buttons.length ? 56 : 10);
  let s = r(x, y, w, h, { rx: 12, fill: '#FFFFFF', stroke: C.line2, sw: 1.5 });
  const ic = icon === 'warn' ? ['#FEF7E0', '#B06000', '!'] : ['#E8F0FE', C.blue2, 'i'];
  s += `<circle cx="${x + 34}" cy="${y + 34}" r="14" fill="${ic[0]}"/>` + t(x + 34, y + 39, ic[2], { size: 15, w: 700, fill: ic[1], a: 'middle' });
  s += t(x + 60, y + 32, title, { size: 14.5, fill: C.ink2, w: 700 });
  if (sub) s += t(x + 60, y + 52, sub, { size: 12, fill: C.dim });
  lines.forEach((ln, i) => s += t(x + 24, y + 78 + i * 22, ln, { size: 12.5, fill: C.dim2 }));
  let bx = x + w - 24;
  const by = y + h - 48;
  const rects = [];
  [...buttons].reverse().forEach(b => {
    const bw = b.label.length * 13 + 34;
    bx -= bw;
    s += (b.primary ? btnBlue(bx, by, bw, b.label, { h: 32 }) : btn(bx, by, bw, b.label, { h: 32 }));
    rects.unshift([bx, by, bw, 32]);
    bx -= 12;
  });
  return { s, x, y, w, h, btn: i => rects[i] };
}

/* ── 화면 부품: 문서 양식 (정의서·계획서) ── */
/**
 * fields = [{ label, value, mark }]  — 두 칸짜리 표 형태
 */
function docForm(title, fields, o = {}) {
  const { x = 60, y = 92, w = 880, lw = 220, rh = 42 } = o;
  let s = t(x, y, title, { size: 15, fill: C.ink2, w: 700 });
  const ty = y + 18;
  fields.forEach((f, i) => {
    const ry = ty + i * rh;
    s += r(x, ry, lw, rh, { fill: '#F7F9FC', stroke: C.headLine })
      + t(x + 14, ry + rh / 2 + 4.5, f.label, { size: 12.5, fill: C.dim2, w: 700 })
      + r(x + lw, ry, w - lw, rh, { fill: f.mark ? C.sel : '#FFFFFF', stroke: C.headLine })
      + t(x + lw + 14, ry + rh / 2 + 4.5, f.value, { size: 12.5, fill: f.value ? C.ink2 : '#B6BDC7' });
  });
  return {
    s, x, y: ty, w, rh, lw, bottom: ty + fields.length * rh,
    labelBox: () => [x, ty, lw, fields.length * rh],
    valueBox: () => [x + lw, ty, w - lw, fields.length * rh],
    rowBox: i => [x, ty + i * rh, w, rh],
  };
}

/* ── 화면 부품: 판정 체크리스트 ── */
function checklist(title, items, o = {}) {
  const { x = 60, y = 100, w = 880, rh = 46 } = o;
  let s = t(x, y, title, { size: 15, fill: C.ink2, w: 700 });
  const ty = y + 18;
  items.forEach((it, i) => {
    const ry = ty + i * rh;
    s += r(x, ry, w, rh, { fill: i % 2 ? '#FBFCFD' : '#FFFFFF', stroke: C.headLine });
    s += r(x + 16, ry + rh / 2 - 9, 18, 18, { rx: 4, fill: it.checked ? C.green : '#FFFFFF', stroke: it.checked ? C.green : C.grayLine, sw: 1.4 });
    if (it.checked) s += `<path d="M${x + 20} ${ry + rh / 2} l4 4 l7 -8" stroke="#fff" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
    s += t(x + 46, ry + rh / 2 + 4.5, it.text, { size: 12.5, fill: C.ink2 });
    if (it.tag) s += badge(x + w - (String(it.tag).length * 12 + 40), ry + rh / 2 - 12, it.tag, it.kind || 'ok');
  });
  return { s, bottom: ty + items.length * rh };
}

/* ── 화면 부품: 카드 흐름 ── */
function cards(items, o = {}) {
  const { x = 40, y = 110, w = 920, h = 120, gap = 16 } = o;
  const cw = (w - gap * (items.length - 1)) / items.length;
  let s = '';
  items.forEach((it, i) => {
    const cx0 = x + i * (cw + gap);
    s += r(cx0, y, cw, h, { rx: 12, fill: it.fill || '#F7F9FC', stroke: C.line2, sw: 1.4 })
      + `<circle cx="${cx0 + 26}" cy="${y + 26}" r="13" fill="${C.orange}"/>`
      + t(cx0 + 26, y + 31, i + 1, { size: 13, w: 700, fill: '#fff', a: 'middle' })
      + t(cx0 + 16, y + 66, it.title, { size: 13.5, fill: C.ink2, w: 700 });
    (it.desc || []).forEach((d, j) => s += t(cx0 + 16, y + 88 + j * 18, d, { size: 11.5, fill: C.dim }));
    if (i < items.length - 1) {
      s += t(cx0 + cw + gap / 2, y + h / 2 + 6, '›', { size: 22, fill: '#9AA0A6', a: 'middle', w: 700 });
    }
  });
  return { s, bottom: y + h };
}

/* ── 화면 부품: 손그림 화면 스케치 ── */
/** parts = [{ kind:'title'|'btn'|'field'|'table'|'text', label, w }] 를 위에서 아래로 쌓는다 */
function wire(title, parts, o = {}) {
  const { x = 70, y = 100, w = 860 } = o;
  let s = r(x, y, w, 34, { rx: 6, fill: '#EEF2F7', stroke: C.headLine })
    + t(x + 14, y + 23, title, { size: 13.5, fill: C.ink2, w: 700 });
  let cy = y + 48;
  const boxes = [];
  parts.forEach(p0 => {
    const pw = p0.w || w;
    if (p0.kind === 'btn') {
      s += btnBlue(x, cy, pw, p0.label, { h: 38, size: 13 });
      boxes.push([x, cy, pw, 38]); cy += 50;
    } else if (p0.kind === 'field') {
      s += input(x, cy, pw, null, p0.label);
      boxes.push([x, cy, pw, 34]); cy += 46;
    } else if (p0.kind === 'table') {
      const rows = p0.rows || 3;
      s += r(x, cy, pw, 26, { fill: C.head, stroke: C.headLine })
        + t(x + 12, cy + 18, p0.label, { size: 12.5, fill: C.dim2, w: 700 });
      for (let i = 0; i < rows; i++) {
        s += r(x, cy + 26 + i * 26, pw, 26, { fill: '#FFFFFF', stroke: C.headLine })
          + r(x + 12, cy + 26 + i * 26 + 9, pw * 0.5, 8, { rx: 4, fill: '#EDF0F4' });
      }
      boxes.push([x, cy, pw, 26 + rows * 26]); cy += 26 + rows * 26 + 18;
    } else {
      s += t(x, cy + 16, p0.label, { size: 12.5, fill: C.dim });
      boxes.push([x, cy, pw, 22]); cy += 32;
    }
  });
  return { s, bottom: cy, box: i => boxes[i], x, y, w };
}

/* ── 화면 부품: 발표 슬라이드 한 장 ── */
function slide(head, bullets, o = {}) {
  const { x = 90, y = 100, w = 820, h = 300, foot } = o;
  let s = r(x, y, w, h, { rx: 10, fill: '#FFFFFF', stroke: C.line2, sw: 1.5 })
    + r(x, y, w, 6, { fill: '#0E6BA8' })
    + t(x + 30, y + 52, head, { size: 20, fill: '#0D2740', w: 700 });
  bullets.forEach((b, i) => {
    s += `<circle cx="${x + 38}" cy="${y + 92 + i * 34}" r="5" fill="${C.orange}"/>`
      + t(x + 56, y + 97 + i * 34, b, { size: 14, fill: C.ink });
  });
  if (foot) s += t(x + 30, y + h - 24, foot, { size: 12, fill: C.dim });
  return { s, x, y, w, h, bullet: i => [x + 30, y + 78 + i * 34, w - 60, 28] };
}

/* ── 강조 상자 + 번호를 한 번에 ── */
const made = [];
const P = o => { made.push(build(o)); };

/** box(rect, n, where) — rect=[x,y,w,h] 를 pad 만큼 넓혀 감싸고 번호를 붙인다 */
function box([x, y, w, h], n, where = 'right', pad = 8) {
  const s = hl(x - pad, y - pad, w + pad * 2, h + pad * 2);
  const p = {
    right: [x + w + pad + 22, y + h / 2],
    left: [x - pad - 22, y + h / 2],
    top: [x + w / 2, y - pad - 20],
    bottom: [x + w / 2, y + h + pad + 20],
    tl: [x - pad - 16, y - pad - 6],
    tr: [x + w + pad + 16, y - pad - 6],
  }[where];
  // 창틀 밖으로 나가지 않게 가둔다
  const cx = Math.min(Math.max(p[0], 30), 970);
  return s + pin(cx, p[1], n);
}

/* ══════════════════════════════════════════════════════════
   1교시 · 말로 설명해서 도구 만들기
   ══════════════════════════════════════════════════════════ */

/* 1-1 연습용 시트 만들기 */
{
  const g = sheet(
    ['접수번호', '부서', '항목', '금액'],
    [['2026-0142', '복지정책과', '경로당 보수', '12000'],
     ['2026-0143', '어르신복지과', '냉난방 교체', '8400'],
     ['2026-0144', '문화체육과', '시설 점검', '3200']],
    { x: 70, y: 124, cw: [170, 190, 210, 140], tabs: ['신청접수'],
      menu: ['파일', '수정', '보기', '삽입', '서식', '데이터', '도구', '확장 프로그램'] });
  P({
    file: 's1-1-sheet-new.svg',
    alt: '1교시 1단계 — sheets.new 로 빈 시트를 열고 연습용 자료를 입력한 구글 시트 화면',
    url: 'sheets.new', frameH: 356,
    body: g.s
      + box([340, 28, 320, 24], 1, 'right')
      + box([g.x, g.y, g.totalW, g.tableBottom - g.y], 2, 'right')
      + box([g.tabX(0), g.tabsY, g.tabW(0), 28], 3, 'right'),
    legends: [
      '주소창에 sheets.new 를 입력하면 빈 시트가 바로 열린다 — 검색창이 아니라 주소창이다',
      '1행은 제목, 2행부터 자료를 넣는다. 실제 업무 파일 말고 이 연습용 가짜 자료로 한다',
      '아래 시트 탭 이름을 신청접수 로 바꾼다 — 이 이름을 뒤에서 AI 에게 그대로 알려 준다',
    ],
  });
}

/* 1-2 업무 흐름 네 문장 */
{
  const d = docForm('내가 자동화할 업무 — 네 문장', [
    { label: '들어오는 것', value: '신청접수 시트의 표 (접수번호 · 부서 · 항목 · 금액)', mark: true },
    { label: '하는 일', value: '부서별로 묶어서 건수와 금액 합계를 낸다', mark: true },
    { label: '나오는 것', value: '새 시트 부서별집계 에 부서 · 건수 · 합계 표로', mark: true },
    { label: '사람이 볼 것', value: '합계가 원본과 맞는지, 부서 이름이 빠지지 않았는지', mark: true },
  ], { x: 70, y: 104, w: 860, lw: 200 });
  P({
    file: 's1-2-four-lines.svg',
    alt: '1교시 2단계 — 업무 흐름을 네 칸으로 적은 메모 화면',
    url: null, frameH: 348,
    body: d.s
      + box(d.labelBox(), 1, 'left')
      + box(d.valueBox(), 2, 'right')
      + pillNote(70, d.bottom + 26, 600, '한 칸이라도 비우면 AI 가 그 부분을 제 마음대로 정한다')
      + pin(706, d.bottom + 41, 3),
    legends: [
      '왼쪽 네 칸은 어떤 업무에나 똑같다 — 이 네 가지만 정해지면 자동화할 수 있다',
      '오른쪽은 내 업무의 답. 시트 이름과 열 이름을 실제와 한 글자도 다르지 않게 적는다',
      '여기 적은 네 문장을 다음 단계에서 그대로 AI 에게 붙여넣는다',
    ],
  });
}

/* 1-3 구조부터 묻기 */
{
  const c = chat([
    { who: 'me', lines: [
      '나는 구글 스프레드시트로 행정 업무를 자동화하려는 공무원이야. 코딩은 못 해.',
      '들어오는 것 — "신청접수" 시트의 표. 1행이 제목 행이고',
      '             열은 접수번호(A) / 부서(B) / 항목(C) / 금액(D) 이야.',
      '하는 일 —    부서별로 묶어서 건수와 금액 합계를 낸다.',
      '나오는 것 —  새 시트 "부서별집계"에 부서 / 건수 / 합계 표로.',
      '아직 코드는 쓰지 마. 이해한 처리 순서를 번호 목록으로 먼저 알려 줘.',
    ] },
    { who: 'ai', lines: [
      '이해한 처리 순서',
      '1. "신청접수" 시트를 열어 2행부터 끝까지 읽는다',
      '2. B열(부서) 기준으로 묶고, 묶음마다 건수를 센다',
      '3. 같은 묶음의 D열(금액)을 모두 더한다',
      '4. "부서별집계" 시트를 만들고 부서 / 건수 / 합계 제목을 넣는다',
      '5. 묶음 결과를 한 줄씩 채운다',
    ] },
    { who: 'ai', lines: [
      '확인이 필요한 것',
      '· 금액이 비어 있는 행은 0으로 볼까요, 건너뛸까요?',
      '· "부서별집계" 시트가 이미 있으면 덮어쓸까요, 새로 만들까요?',
    ] },
  ], { x: 50, y: 104, w: 880, tool: 'ChatGPT · Claude · Gemini — 아무거나 하나' });
  P({
    file: 's1-3-ask-structure.svg',
    alt: '1교시 3단계 — 코드 대신 처리 순서부터 물어본 AI 대화 화면',
    url: null, frameH: 588,
    body: c.s
      + box([140, 104, 790, 146], 1, 'tr')
      + box([50, 280, 880, 146], 2, 'tr')
      + box([50, 464, 880, 86], 3, 'right'),
    legends: [
      '네 문장을 그대로 붙여넣고 맨 끝에 "아직 코드는 쓰지 마" 를 반드시 붙인다',
      '코드가 아니라 번호 목록이 돌아와야 정상이다 — 여기서 틀린 것은 한 문장으로 고칠 수 있다',
      'AI 가 되물으면 좋은 신호다. 이 질문에 답해야 내 업무에 맞는 코드가 나온다',
    ],
  });
}

/* 1-4 되물음에 답하고 코드 받기 */
{
  const c = chat([
    { who: 'me', lines: [
      '1번 — 금액이 비어 있으면 0으로 계산해 줘.',
      '2번 — 이미 있으면 내용을 지우고 다시 채워 줘.',
      '이제 Google Apps Script 코드를 만들어 줘.',
      '· 붙여넣고 바로 실행되는 완성된 코드로',
      '· 각 줄 위에 무슨 일을 하는지 한글 주석',
      '· 함수 이름은 부서별집계_만들기',
    ] },
    { who: 'ai', code: true, lines: [
      'function 부서별집계_만들기() {',
      '  // 신청접수 시트를 찾아 자료를 통째로 읽는다',
      '  const 원본 = SpreadsheetApp.getActive().getSheetByName("신청접수");',
      '  const 자료 = 원본.getDataRange().getValues().slice(1);',
      '',
      '  // 부서 이름을 열쇠로 건수와 금액을 모은다',
      '  const 집계 = {};',
      '  자료.forEach(행 => {',
      '    const 부서 = 행[1];',
      '    if (!부서) return;',
      '    집계[부서] = 집계[부서] || { 건수: 0, 합계: 0 };',
      '    집계[부서].건수 += 1;',
      '    집계[부서].합계 += Number(행[3]) || 0;   // 빈 칸은 0 으로',
      '  });',
      '  ...',
      '}',
    ] },
  ], { x: 50, y: 104, w: 880, tool: 'ChatGPT · Claude · Gemini' });
  P({
    file: 's1-4-get-code.svg',
    alt: '1교시 4단계 — 되물음에 답하고 완성된 Apps Script 코드를 받은 화면',
    url: null, frameH: 610,
    body: c.s
      + box([140, 104, 790, 146], 1, 'tr')
      + box([50, 280, 880, 68], 2, 'right')
      + box([50, 348, 880, 208], 3, 'right'),
    legends: [
      '되물음에 번호로 답하고, 그 아래에 "이제 코드를 만들어 줘" 를 붙인다',
      'function 이름이 내가 시킨 이름과 같은지 먼저 본다 — 다르면 그 자리에서 다시 시킨다',
      '줄마다 한글 주석이 붙어 있어야 나중에 혼자서도 고칠 수 있다. 없으면 "주석 붙여 줘" 라고 한다',
    ],
  });
}

/* 1-5 붙여넣고 실행 */
{
  const e = editor([
    'function 부서별집계_만들기() {',
    '  // 신청접수 시트를 찾아 자료를 통째로 읽는다',
    '  const 원본 = SpreadsheetApp.getActive().getSheetByName("신청접수");',
    '  const 자료 = 원본.getDataRange().getValues().slice(1);',
    '',
    '  // 부서 이름을 열쇠로 건수와 금액을 모은다',
    '  const 집계 = {};',
    '  자료.forEach(행 => {',
    '    const 부서 = 행[1];',
    '    집계[부서] = 집계[부서] || { 건수: 0, 합계: 0 };',
    '  });',
    '}',
  ], { x: 60, y: 96, w: 860, fn: '부서별집계_만들기' });
  P({
    file: 's1-5-paste-run.svg',
    alt: '1교시 5단계 — Apps Script 편집기에 코드를 붙여넣고 함수를 고른 뒤 실행하는 화면',
    url: 'script.google.com', frameH: 460,
    body: e.s
      + box([60, 134, 860, 288], 1, 'left')
      + box([60, 96, 60, 26], 2, 'top')
      + box([284, 96, 200, 26], 3, 'top')
      + box([128, 96, 66, 26], 4, 'top'),
    legends: [
      '편집기에 원래 있던 내용을 모두 지우고 받은 코드를 통째로 붙여넣는다 — 한 글자도 고치지 않는다',
      '저장을 먼저 누른다. 저장하지 않고 실행하면 이전에 저장된 코드가 돈다',
      '실행할 함수 이름이 내 함수인지 확인한다 — 여기가 다른 이름이면 엉뚱한 것이 실행된다',
      '실행을 누른다. 처음 한 번만 다음 단계의 권한 창이 뜬다',
    ],
  });
}

/* 1-6 권한 승인 */
{
  const d1 = dialog('이 앱은 Google에서 확인하지 않았습니다', [
    '이 앱을 만든 개발자를 Google이 확인하지 않았습니다.',
    '본인이 방금 만든 스크립트라면 계속 진행해도 됩니다.',
  ], { x: 120, y: 104, w: 400, buttons: [{ label: '안전한 페이지로 돌아가기' }, { label: '고급', primary: true }] });
  const d2 = dialog('내 Google 계정에 액세스하려고 합니다', [
    '· Google 스프레드시트의 모든 파일 보기 · 수정 · 삭제',
    '· 이 스크립트가 실행될 때 외부 서비스에 연결',
    '',
    '내 계정 안에서만 도는 작업입니다.',
  ], { x: 560, y: 104, w: 400, icon: 'info', buttons: [{ label: '취소' }, { label: '허용', primary: true }] });
  P({
    file: 's1-6-permission.svg',
    alt: '1교시 6단계 — 구글 권한 승인 화면 두 장과 눌러야 할 버튼',
    url: 'accounts.google.com', frameH: 400,
    body: d1.s + d2.s
      + t(120, 92, '① 먼저 뜨는 창', { size: 13, fill: C.dim2, w: 700 })
      + t(560, 92, '② 고급을 누르면 뜨는 창', { size: 13, fill: C.dim2, w: 700 })
      + box(d1.btn(1), 1, 'bottom')
      + box(d2.btn(1), 2, 'bottom')
      + pillNote(120, 348, 720, '무섭게 보이지만 정상입니다 — 내가 만든 스크립트가 내 시트를 건드려도 되는지 묻는 것뿐입니다')
      + pin(866, 363, 3),
    legends: [
      '"확인하지 않았습니다" 창에서 고급 을 누른다 — 여기서 되돌아가면 실행이 안 된다',
      '다음 창에서 허용 을 누른다. 이 승인은 처음 한 번만 하면 된다',
      '이 스크립트는 내 구글 계정 안에서만 돈다. 시트 자료가 외부로 나가지 않는다',
    ],
  });
}

/* 1-7 결과 확인 */
{
  const g = sheet(
    ['부서', '건수', '합계'],
    [['복지정책과', '1', '12000'],
     ['어르신복지과', '1', '8400'],
     ['문화체육과', '1', '3200']],
    { x: 70, y: 124, cw: [220, 140, 180], tabs: ['신청접수', '부서별집계'], activeTab: 1 });
  P({
    file: 's1-7-result.svg',
    alt: '1교시 7단계 — 부서별집계 시트가 새로 생기고 결과가 채워진 화면',
    url: null, frameH: 366,
    body: g.s
      + box([g.tabX(1), g.tabsY, g.tabW(1), 28], 1, 'right')
      + box([g.x, g.y, g.totalW, g.tableBottom - g.y], 2, 'right')
      + badge(700, 128, '실행 완료', 'ok') + pin(866, 140, 3),
    legends: [
      '시트 탭에 부서별집계 가 새로 생겼는지 본다 — 없으면 코드가 아직 안 돈 것이다',
      '합계를 원본과 손으로 한 번 대조한다. 자동화가 처음일수록 이 대조를 꼭 한다',
      '여기까지 왔으면 말로 설명한 업무가 도구가 되는 과정을 한 바퀴 돈 것이다',
    ],
  });
}

/* ══════════════════════════════════════════════════════════
   2교시 · 자동화 대상 업무 정의서 채우기
   ══════════════════════════════════════════════════════════ */

/* 2-1 후보 업무 세 개 적기 */
{
  const g = sheet(
    ['후보 업무', '얼마나 자주', '한 번에 걸리는 시간', '규칙이 있나'],
    [['신청 명단 중복 제거·정리', '주 1회', '40분', '있음'],
     ['부서별 실적 취합', '월 1회', '2시간', '있음'],
     ['민원 답변 초안 작성', '수시', '건당 20분', '매번 다름']],
    { x: 60, y: 124, cw: [250, 130, 190, 150] });
  P({
    file: 's2-1-candidates.svg',
    alt: '2교시 1단계 — 자동화 후보 업무 세 개를 적어 비교하는 표 화면',
    url: null, frameH: 330,
    body: g.s
      + box([g.colX(0), g.rowY(1), g.colW(0), g.rh * 3], 1, 'left')
      + box([g.colX(1), g.rowY(1), g.colW(1) + g.colW(2), g.rh * 3], 2, 'top')
      + box([g.colX(3), g.rowY(3), g.colW(3), g.rh], 3, 'right'),
    legends: [
      '머릿속에 떠오르는 반복 업무를 딱 세 개만 적는다 — 많이 적으면 오히려 못 고른다',
      '자주 하고 오래 걸리는 업무일수록 자동화 효과가 크다. 숫자로 적어야 비교가 된다',
      '"매번 다름" 인 업무는 오늘 대상에서 뺀다 — 규칙이 없으면 자동화가 안 된다',
    ],
  });
}

/* 2-2 점수표로 하나 고르기 */
{
  const g = sheet(
    ['후보 업무', '반복성', '규칙성', '시간절약', '개인정보', '합계'],
    [['신청 명단 중복 제거·정리', '5', '5', '4', '가명처리 가능', '14'],
     ['부서별 실적 취합', '3', '5', '5', '없음', '13'],
     ['민원 답변 초안 작성', '5', '1', '3', '있음', '9']],
    { x: 50, y: 124, cw: [230, 90, 90, 100, 160, 90], mark: ['1,5'] });
  P({
    file: 's2-2-score.svg',
    alt: '2교시 2단계 — 후보 업무를 점수로 매겨 하나를 고르는 화면',
    url: null, frameH: 356,
    body: g.s
      + box([g.colX(1), g.y, g.colW(1) + g.colW(2) + g.colW(3), 24 + g.rh * 4], 1, 'top')
      + box([g.colX(4), g.rowY(3), g.colW(4), g.rh], 2, 'right')
      + box([g.x, g.rowY(1), g.totalW, g.rh], 3, 'left')
      + badge(760, 296, '오늘 이 업무로 간다', 'ok'),
    legends: [
      '세 항목에 1~5점을 매긴다. 점수는 감으로 줘도 된다 — 순위만 갈리면 충분하다',
      '개인정보가 들어간 업무는 점수와 무관하게 오늘 대상에서 뺀다',
      '합계가 가장 높은 한 줄이 오늘 만들 도구다. 두 개를 같이 하지 않는다',
    ],
  });
}

/* 2-3 업무 정의서 네 칸 채우기 */
{
  const d = docForm('자동화 대상 업무 정의서', [
    { label: '업무 이름', value: '신청 명단 중복 제거·정리' },
    { label: '들어오는 것', value: '부서에서 올린 신청 시트 (이름 · 소속 · 연락처 · 신청항목)', mark: true },
    { label: '하는 일', value: '같은 사람이 두 번 신청한 행을 지우고, 소속 순서로 정렬한다', mark: true },
    { label: '나오는 것', value: '정리본 시트 — 원본은 그대로 두고 새 시트에 결과를 쓴다', mark: true },
    { label: '사람이 볼 것', value: '지워진 행 수가 맞는지, 지운 목록이 따로 남았는지', mark: true },
    { label: '지금 걸리는 시간', value: '주 1회 · 회당 40분' },
  ], { x: 60, y: 100, w: 880, lw: 180, rh: 40 });
  P({
    file: 's2-3-definition.svg',
    alt: '2교시 3단계 — 고른 업무의 정의서 여섯 칸을 채운 화면',
    url: null, frameH: 400,
    body: d.s
      + box(d.rowBox(0), 1, 'left')
      + box([d.x + d.lw, d.y + d.rh, d.w - d.lw, d.rh * 4], 2, 'right')
      + box(d.rowBox(5), 3, 'left'),
    legends: [
      '업무 이름은 부서 사람 누구나 알아듣는 말로 적는다 — 결재 문서에 그대로 들어간다',
      '가운데 네 칸이 핵심이다. 이 네 문장이 3교시 설계서와 4교시 프롬프트의 재료가 된다',
      '지금 걸리는 시간을 숫자로 남겨 둔다. 7교시 계획서의 기대효과가 이 숫자에서 나온다',
    ],
  });
}

/* 2-4 개인정보 3관문 */
{
  const c = checklist('이 업무 자료를 외부 AI 에 그대로 올려도 되나 — 세 관문', [
    { text: '주민등록번호 · 외국인등록번호 · 운전면허번호가 들어 있다', checked: false, tag: '없음', kind: 'ok' },
    { text: '이름 · 연락처 · 주소가 들어 있다', checked: true, tag: '있음 · 가명처리', kind: 'warn' },
    { text: '대외비 · 미공개 정책 자료가 들어 있다', checked: false, tag: '없음', kind: 'ok' },
    { text: '위 셋이 모두 아니오이면 그대로 올려도 된다', checked: false, tag: '해당 없음', kind: 'info' },
  ], { x: 60, y: 104, w: 880, rh: 48 });
  P({
    file: 's2-4-privacy-gate.svg',
    alt: '2교시 4단계 — 개인정보 세 관문 판정 체크리스트 화면',
    url: null, frameH: 400,
    body: c.s
      + box([60, 122, 880, 48], 1, 'left')
      + box([60, 170, 880, 48], 2, 'left')
      + pillNote(60, 340, 780, '가명처리 = 이름을 A · B · C 로, 연락처를 지움. 원본은 내 PC 에만 둔다')
      + pin(866, 355, 3),
    legends: [
      '첫 줄에 하나라도 해당하면 이 업무는 오늘 대상에서 뺀다 — 예외가 없다',
      '이름·연락처만 있으면 가명처리 후 쓸 수 있다. 지금 어떻게 가릴지 여기서 정한다',
      '판정 결과를 정의서 아래에 적어 둔다. 6교시 보안 점검에서 이 줄을 그대로 쓴다',
    ],
  });
}

/* 2-5 AI 에게 정의서 검토받기 */
{
  const c = chat([
    { who: 'me', lines: [
      '아래는 내가 자동화하려는 업무 정의서야. 아직 코드는 만들지 마.',
      '들어오는 것 — 신청 시트 (이름 · 소속 · 연락처 · 신청항목)',
      '하는 일 — 같은 사람이 두 번 신청한 행을 지우고 소속 순서로 정렬',
      '나오는 것 — 정리본 시트 (원본은 그대로)',
      '이 설명만 보고 도구를 만들 수 있겠어? 빠진 조건을 질문으로만 알려 줘.',
    ] },
    { who: 'ai', lines: [
      '이 설명만으로는 아래가 정해지지 않았습니다.',
      '1. "같은 사람" 의 기준이 무엇인가요? 이름만 같으면 같은 사람인가요,',
      '   이름과 연락처가 모두 같아야 하나요?',
      '2. 두 번 신청한 경우 어느 행을 남기나요? 먼저 낸 것인가요, 나중 것인가요?',
      '3. 지운 행의 목록도 따로 남겨야 하나요?',
      '4. 소속 정렬 순서는 가나다순인가요, 부서 코드순인가요?',
    ] },
  ], { x: 50, y: 104, w: 880, tool: 'ChatGPT · Claude · Gemini' });
  P({
    file: 's2-5-review.svg',
    alt: '2교시 5단계 — AI 에게 업무 정의서를 검토받아 빠진 조건을 찾아내는 화면',
    url: null, frameH: 490,
    body: c.s
      + box([140, 104, 790, 126], 1, 'tr')
      + box([50, 260, 880, 166], 2, 'right')
      + pillNote(50, 442, 700, '되물음 하나하나가 내가 아직 안 정한 규칙이다 — 지금 정하면 4교시가 한 번에 끝난다')
      + pin(776, 457, 3),
    legends: [
      '정의서를 붙여넣고 "빠진 조건을 질문으로만 알려 줘" 라고 한다 — 코드를 시키지 않는다',
      '되물음 목록이 오늘 내가 정해야 할 규칙의 전부다. 이 목록을 정의서 뒤에 붙여 둔다',
      '여기서 정하지 않으면 AI 가 마음대로 정한다. 4교시에서 다시 만드는 것보다 지금이 싸다',
    ],
  });
}

/* 2-6 확정본 저장 */
{
  const d = docForm('확정 업무 정의서 — 3교시로 가져갈 문서', [
    { label: '업무 이름', value: '신청 명단 중복 제거·정리' },
    { label: '같은 사람 기준', value: '이름과 연락처가 모두 같으면 같은 사람', mark: true },
    { label: '남길 행', value: '먼저 접수된 행을 남긴다', mark: true },
    { label: '지운 목록', value: '삭제목록 시트에 따로 남긴다', mark: true },
    { label: '정렬 순서', value: '소속 가나다순', mark: true },
    { label: '개인정보 처리', value: '연락처는 뒤 4자리만 남기고 가림' },
  ], { x: 60, y: 100, w: 880, lw: 180, rh: 40 });
  P({
    file: 's2-6-confirmed.svg',
    alt: '2교시 6단계 — 되물음에 답해 확정한 업무 정의서 화면',
    url: null, frameH: 390,
    body: d.s
      + box([d.x + d.lw, d.y + d.rh, d.w - d.lw, d.rh * 4], 1, 'right')
      + box(d.rowBox(5), 2, 'left')
      + badge(60, 360, '3교시 설계 준비 완료', 'ok') + pin(320, 372, 3),
    legends: [
      '앞 단계 되물음에 답한 내용을 칸으로 옮긴다 — 문장이 아니라 규칙으로 적는다',
      '개인정보를 어떻게 가릴지도 한 칸으로 적어 둔다. 6교시에서 이 줄을 그대로 검사한다',
      '이 문서 한 장이 오늘 남은 시간 내내 쓰인다. 화면 캡처나 메모장에 저장해 둔다',
    ],
  });
}

/* ══════════════════════════════════════════════════════════
   3교시 · 업무흐름과 화면구성 설계
   ══════════════════════════════════════════════════════════ */

/* 3-1 도구 형태 고르기 */
{
  const k = cards([
    { title: '시트 + 버튼', desc: ['내 시트 안에서', '메뉴 하나로 실행', '가장 쉽다'], fill: '#EAF4FF' },
    { title: '웹 양식 + 시트', desc: ['남이 입력하고', '내 시트에 쌓인다', '신청·접수에'] },
    { title: '문서 자동 생성', desc: ['명단에서', '안내문을 한꺼번에', '공문·통지서에'] },
    { title: '정해진 시각 실행', desc: ['매일 아침 9시', '알아서 돈다', '정기 취합에'] },
  ], { x: 40, y: 116, w: 920, h: 132 });
  P({
    file: 's3-1-pick-shape.svg',
    alt: '3교시 1단계 — 만들 도구의 형태 네 가지 중 하나를 고르는 화면',
    url: null, frameH: 340,
    body: t(40, 96, '내 업무에 맞는 도구 형태 고르기 — 오늘은 하나만', { size: 15, fill: C.ink2, w: 700 })
      + k.s
      + hl(40, 116, 218, 132)
      + pillNote(40, 282, 780, '처음이라면 무조건 1번이다 — 나머지는 1번이 도는 것을 본 뒤에 늘리면 된다'),
    legends: [
      '시트 + 버튼 — 오늘 만들 형태다. 내 시트 메뉴에서 바로 실행한다. 설치도 로그인도 없다',
      '웹 양식 + 시트 — 남이 입력한 내용이 내 시트에 쌓인다. 신청·접수 업무에 쓴다',
      '문서 자동 생성 — 명단 한 장에서 안내문·통지서를 한꺼번에 뽑는다',
      '정해진 시각 실행 — 매일 아침 알아서 돈다. 정기 취합에 쓰지만 오늘은 다루지 않는다',
    ],
  });
}

/* 3-2 화면 스케치 */
{
  const w0 = wire('신청 명단 정리 — 내 시트 화면', [
    { kind: 'text', label: '① 상단 메뉴에 "자동화" 항목이 생긴다 — 여기서 실행한다' },
    { kind: 'btn', label: '자동화 ▸ 명단 정리 실행', w: 320 },
    { kind: 'table', label: '원본: 신청접수 (손대지 않는다)', rows: 3 },
    { kind: 'table', label: '결과: 정리본 (새로 만들어진다)', rows: 2 },
  ], { x: 70, y: 100, w: 860 });
  P({
    file: 's3-2-sketch.svg',
    alt: '3교시 2단계 — 만들 도구의 화면을 손그림처럼 스케치한 화면',
    url: null, frameH: 470,
    body: w0.s
      + box(w0.box(1), 1, 'right')
      + box(w0.box(2), 2, 'right')
      + box(w0.box(3), 3, 'right'),
    legends: [
      '사람이 누를 곳은 딱 하나로 정한다 — 버튼이 둘 이상이면 쓰는 사람이 헷갈린다',
      '원본 자료는 절대 고치지 않는다. 이 원칙을 그림에 적어 두면 AI 도 그대로 만든다',
      '결과는 새 시트에 쓴다. 잘못 돌아도 원본이 남아 있으면 다시 하면 그만이다',
    ],
  });
}

/* 3-3 업무 흐름 세 토막 */
{
  const k = cards([
    { title: '읽는다', desc: ['신청접수 시트', '2행부터 끝까지'], fill: '#EAF4FF' },
    { title: '거른다 · 정리한다', desc: ['이름+연락처 같으면', '먼저 것만 남긴다', '소속 가나다순 정렬'], fill: '#FFF4E6' },
    { title: '쓴다', desc: ['정리본 시트에 결과', '삭제목록 시트에 지운 행'], fill: '#EAF7EE' },
  ], { x: 60, y: 130, w: 880, h: 140 });
  P({
    file: 's3-3-flow.svg',
    alt: '3교시 3단계 — 업무 흐름을 읽는다·거른다·쓴다 세 토막으로 나눈 화면',
    url: null, frameH: 360,
    body: t(60, 106, '업무 흐름을 세 토막으로만 쪼갠다', { size: 15, fill: C.ink2, w: 700 })
      + k.s
      + hl(60, 130, 274, 140) + hl(363, 130, 274, 140) + hl(666, 130, 274, 140),
    legends: [
      '읽는다 — 어느 시트의 몇 행부터 읽는지까지 적는다. "그 시트" 같은 말은 통하지 않는다',
      '거른다·정리한다 — 2교시에서 확정한 규칙을 그대로 옮긴다. 새 규칙을 여기서 만들지 않는다',
      '쓴다 — 결과가 어디에 어떤 모양으로 남는지 적는다. 세 토막이면 어떤 업무든 표현된다',
    ],
  });
}

/* 3-4 요구사항 명세서 */
{
  const d = docForm('요구사항 명세서 — 4교시에 그대로 붙여넣을 문서', [
    { label: '도구 형태', value: '구글 시트 + 상단 메뉴 버튼' },
    { label: '읽는 곳', value: '신청접수 시트, 1행 제목 / 열 = 이름(A) 소속(B) 연락처(C) 신청항목(D)', mark: true },
    { label: '처리 규칙', value: '이름+연락처가 같으면 먼저 접수된 행만 남김 → 소속 가나다순 정렬', mark: true },
    { label: '쓰는 곳', value: '정리본 시트에 결과, 삭제목록 시트에 지운 행 (둘 다 있으면 지우고 다시)', mark: true },
    { label: '예외 처리', value: '이름이 빈 행은 건너뜀 / 연락처 없으면 이름만으로 비교' },
    { label: '사람 확인', value: '실행 후 "원본 N건 → 정리본 M건, 삭제 K건" 을 알림창으로 보여 줌' },
  ], { x: 50, y: 100, w: 900, lw: 150, rh: 42 });
  P({
    file: 's3-4-spec.svg',
    alt: '3교시 4단계 — 요구사항 명세서 여섯 칸을 채운 화면',
    url: null, frameH: 420,
    body: d.s
      + box([d.x + d.lw, d.y + d.rh, d.w - d.lw, d.rh * 3], 1, 'right')
      + box(d.rowBox(4), 2, 'left')
      + box(d.rowBox(5), 3, 'left'),
    legends: [
      '가운데 세 칸이 읽는다·거른다·쓴다 세 토막이다. 시트 이름과 열 기호를 정확히 적는다',
      '예외 처리를 미리 적으면 5교시 오류가 절반으로 준다 — 빈 칸과 없는 값만 적어도 충분하다',
      '끝나고 사람이 무엇을 보는지 적는다. 이 한 줄이 있으면 도구를 믿고 쓸 수 있다',
    ],
  });
}

/* 3-5 AI 로 명세 점검 */
{
  const c = chat([
    { who: 'me', lines: [
      '아래 명세서로 구글 시트 자동화 도구를 만들 거야. 아직 코드는 쓰지 마.',
      '(명세서 여섯 칸 붙여넣기)',
      '이 명세서만 보고 만들 때 애매한 곳과, 내가 놓친 예외 상황을 알려 줘.',
    ] },
    { who: 'ai', lines: [
      '애매한 곳',
      '· "먼저 접수된 행" 을 무엇으로 판단하나요? 접수일 열이 명세에 없습니다.',
      '  위에 있는 행을 먼저로 볼까요?',
      '놓치기 쉬운 예외',
      '· 연락처가 010-1234-5678 과 01012345678 처럼 표기만 다른 경우',
      '· 이름 앞뒤에 공백이 들어간 경우',
      '· 신청접수 시트가 비어 있는 경우 (0건 처리)',
    ] },
  ], { x: 50, y: 104, w: 880, tool: 'ChatGPT · Claude · Gemini' });
  P({
    file: 's3-5-spec-review.svg',
    alt: '3교시 5단계 — AI 로 명세서의 애매한 곳과 빠진 예외를 점검하는 화면',
    url: null, frameH: 450,
    body: c.s
      + box([140, 104, 790, 86], 1, 'tr')
      + box([50, 220, 880, 86], 2, 'right')
      + box([50, 306, 880, 106], 3, 'right'),
    legends: [
      '명세서를 붙여넣고 "애매한 곳과 놓친 예외" 만 물어본다 — 여전히 코드는 시키지 않는다',
      '표기가 다른 같은 값, 앞뒤 공백, 빈 자료 — 실제로 오류를 내는 것은 늘 이 셋이다',
      '지적받은 항목을 명세서 예외 처리 칸에 더한다. 이 상태로 4교시에 넘어간다',
    ],
  });
}

/* 3-6 설계 확정 점검 */
{
  const c = checklist('4교시로 넘어가기 전 점검', [
    { text: '시트 이름과 열 기호를 실제 시트와 한 글자도 다르지 않게 적었다', checked: true, tag: '확인', kind: 'ok' },
    { text: '사람이 누르는 곳이 하나뿐이다', checked: true, tag: '확인', kind: 'ok' },
    { text: '원본 시트를 고치지 않고 결과를 새 시트에 쓴다', checked: true, tag: '확인', kind: 'ok' },
    { text: '빈 칸 · 표기 차이 · 0건일 때 어떻게 할지 적었다', checked: true, tag: '확인', kind: 'ok' },
    { text: '실행이 끝나면 사람에게 무엇을 보여 줄지 적었다', checked: false, tag: '아직', kind: 'warn' },
  ], { x: 60, y: 104, w: 880, rh: 46 });
  P({
    file: 's3-6-design-check.svg',
    alt: '3교시 6단계 — 설계가 끝났는지 다섯 줄로 점검하는 화면',
    url: null, frameH: 400,
    body: c.s
      + box([60, 122, 880, 184], 1, 'left')
      + box([60, 306, 880, 46], 2, 'left')
      + pillNote(60, 372, 720, '한 줄이라도 비어 있으면 4교시에서 반드시 되돌아오게 된다')
      + pin(796, 387, 3),
    legends: [
      '앞 네 줄은 명세서만 다시 보면 바로 채워진다. 비어 있으면 3교시를 끝내지 않는다',
      '마지막 줄이 가장 많이 빠진다 — 알림창 한 줄이면 충분하니 지금 적는다',
      '다섯 줄이 모두 채워진 명세서가 4교시 프롬프트의 본문이 된다',
    ],
  });
}

/* ══════════════════════════════════════════════════════════
   4교시 · 코드를 받아 시트에 붙이기
   ══════════════════════════════════════════════════════════ */

/* 4-1 명세서 통째로 붙여넣기 */
{
  const c = chat([
    { who: 'me', lines: [
      '나는 코딩을 못 하는 공무원이고, 구글 시트 자동화 도구가 필요해.',
      '아래 명세서대로 Google Apps Script 코드를 만들어 줘.',
      '',
      '[도구 형태] 구글 시트 + 상단 메뉴 버튼',
      '[읽는 곳] 신청접수 시트 / 1행 제목 / 이름(A) 소속(B) 연락처(C) 신청항목(D)',
      '[처리 규칙] 이름+연락처가 같으면 먼저 접수된 행만 남김 → 소속 가나다순 정렬',
      '[쓰는 곳] 정리본 시트에 결과, 삭제목록 시트에 지운 행',
      '[예외] 이름 빈 행 건너뜀 / 연락처 표기 차이 무시 / 0건이면 안내만',
      '[사람 확인] 끝나면 "원본 N건 → 정리본 M건, 삭제 K건" 알림창',
      '',
      '조건 — 붙여넣고 바로 도는 완성 코드 / 줄마다 한글 주석 / 상단 메뉴도 함께',
    ] },
  ], { x: 50, y: 104, w: 880, tool: 'ChatGPT · Claude · Gemini' });
  P({
    file: 's4-1-paste-spec.svg',
    alt: '4교시 1단계 — 3교시 명세서를 그대로 붙여넣어 코드를 요청하는 화면',
    url: null, frameH: 400,
    body: c.s
      + box([140, 104, 790, 44], 1, 'tr')
      + box([140, 168, 790, 126], 2, 'right')
      + box([140, 312, 790, 24], 3, 'right'),
    legends: [
      '맨 앞에 내가 누구인지 한 줄로 밝힌다 — 설명 수준이 달라진다',
      '3교시 명세서를 대괄호 항목 그대로 붙여넣는다. 다시 요약하지 않는다',
      '맨 끝 조건 세 가지를 빠뜨리지 않는다. 주석이 없으면 나중에 혼자 못 고친다',
    ],
  });
}

/* 4-2 되물음에 답하기 */
{
  const c = chat([
    { who: 'ai', lines: [
      '만들기 전에 두 가지만 확인할게요.',
      '1. "먼저 접수된 행" 은 시트에서 위에 있는 행으로 보면 될까요?',
      '2. 정리본·삭제목록 시트가 이미 있으면 내용을 지우고 다시 채울까요?',
    ] },
    { who: 'me', lines: [
      '1 — 응, 위에 있는 행이 먼저야.',
      '2 — 지우고 다시 채워 줘.',
      '이제 코드 만들어 줘.',
    ] },
  ], { x: 50, y: 104, w: 880, tool: 'ChatGPT · Claude · Gemini' });
  P({
    file: 's4-2-answer-back.svg',
    alt: '4교시 2단계 — AI 의 되물음에 번호로 답하는 화면',
    url: null, frameH: 340,
    body: c.s
      + box([50, 104, 880, 86], 1, 'right')
      + box([140, 220, 790, 86], 2, 'right')
      + pillNote(50, 322, 760, '되물음 없이 바로 코드가 나오면 오히려 위험하다 — 내 조건을 제 마음대로 정한 것이다'),
    legends: [
      '되물음이 오면 잘 되고 있는 것이다. 질문 번호를 그대로 받아 적는다',
      '"1 — …" 처럼 번호로 짧게 답하고 마지막에 "이제 코드 만들어 줘" 를 붙인다',
    ],
  });
}

/* 4-3 코드 받기 */
{
  const c = chat([
    { who: 'ai', code: true, lines: [
      '// 시트를 열 때 상단에 자동화 메뉴를 만든다',
      'function onOpen() {',
      '  SpreadsheetApp.getUi()',
      '    .createMenu("자동화")',
      '    .addItem("명단 정리 실행", "명단정리_실행")',
      '    .addToUi();',
      '}',
      '',
      'function 명단정리_실행() {',
      '  const ss = SpreadsheetApp.getActive();',
      '  const 원본 = ss.getSheetByName("신청접수");',
      '  // 2행부터 끝까지 읽는다 (1행은 제목)',
      '  const 자료 = 원본.getDataRange().getValues().slice(1);',
      '  ...',
      '}',
    ] },
  ], { x: 50, y: 104, w: 880, tool: 'ChatGPT · Claude · Gemini' });
  P({
    file: 's4-3-receive-code.svg',
    alt: '4교시 3단계 — 메뉴 코드와 실행 코드가 한 덩어리로 온 화면',
    url: null, frameH: 460,
    body: c.s
      + box([50, 104, 880, 146], 1, 'right')
      + box([50, 268, 880, 126], 2, 'right')
      + pillNote(50, 410, 740, '코드가 두 덩어리로 나뉘어 오면 "하나로 합쳐서 다시 줘" 라고 한다'),
    legends: [
      'onOpen 은 시트를 열 때 메뉴를 만드는 부분이다. 이것이 있어야 버튼이 생긴다',
      '아래가 실제로 일하는 부분이다. 줄마다 한글 주석이 붙어 있는지 확인한다',
    ],
  });
}

/* 4-4 편집기에 붙여넣기 */
{
  const e = editor([
    '// 시트를 열 때 상단에 자동화 메뉴를 만든다',
    'function onOpen() {',
    '  SpreadsheetApp.getUi()',
    '    .createMenu("자동화")',
    '    .addItem("명단 정리 실행", "명단정리_실행")',
    '    .addToUi();',
    '}',
    '',
    'function 명단정리_실행() {',
    '  const ss = SpreadsheetApp.getActive();',
    '  const 원본 = ss.getSheetByName("신청접수");',
    '}',
  ], { x: 60, y: 96, w: 860, fn: 'onOpen' });
  P({
    file: 's4-4-paste-editor.svg',
    alt: '4교시 4단계 — 받은 코드를 Apps Script 편집기에 붙여넣고 저장하는 화면',
    url: 'script.google.com', frameH: 450,
    body: e.s
      + box([60, 134, 860, 288], 1, 'left')
      + box([60, 96, 60, 26], 2, 'top')
      + box([284, 96, 200, 26], 3, 'top'),
    legends: [
      '기존 내용을 모두 지우고 받은 코드를 통째로 붙여넣는다',
      '반드시 저장을 먼저 누른다 — 저장하지 않으면 메뉴가 생기지 않는다',
      '이번에는 실행을 누르지 않는다. 메뉴로 실행할 것이므로 함수는 onOpen 이면 된다',
    ],
  });
}

/* 4-5 메뉴가 생겼는지 확인 */
{
  const g = sheet(
    ['이름', '소속', '연락처', '신청항목'],
    [['김민수', '복지정책과', '010-****-1234', '경로당 보수'],
     ['이서연', '문화체육과', '010-****-5678', '시설 점검'],
     ['김민수', '복지정책과', '010-****-1234', '경로당 보수']],
    { x: 60, y: 136, cw: [150, 200, 210, 210], tabs: ['신청접수'],
      menu: ['파일', '수정', '보기', '삽입', '서식', '데이터', '도구', '확장 프로그램', '자동화'], mark: ['3,0', '3,1', '3,2', '3,3'] });
  P({
    file: 's4-5-menu.svg',
    alt: '4교시 5단계 — 시트 상단에 자동화 메뉴가 새로 생긴 화면',
    url: null, frameH: 400,
    body: g.s
      + r(700, 96, 190, 60, { rx: 6, fill: '#FFFFFF', stroke: C.grayLine })
      + t(714, 120, '명단 정리 실행', { size: 12.5, fill: C.ink2 })
      + t(714, 142, '사용 설명 보기', { size: 12.5, fill: C.dim })
      + box([636, 84, 60, 22], 1, 'top')
      + box([700, 96, 190, 30], 2, 'right')
      + box([g.colX(0), g.rowY(3), g.totalW - 40, g.rh], 3, 'left'),
    legends: [
      '시트를 새로 고치면 상단에 자동화 메뉴가 생긴다 — 안 보이면 저장을 안 한 것이다',
      '메뉴를 누르면 내가 이름 붙인 항목이 나온다. 이것이 오늘 만든 버튼이다',
      '3행이 1행과 똑같은 중복 자료다. 이 행이 사라지는지 다음 단계에서 확인한다',
    ],
  });
}

/* 4-6 실행 결과 확인 */
{
  const g = sheet(
    ['이름', '소속', '연락처', '신청항목'],
    [['이서연', '문화체육과', '010-****-5678', '시설 점검'],
     ['김민수', '복지정책과', '010-****-1234', '경로당 보수']],
    { x: 60, y: 130, cw: [150, 200, 210, 210], tabs: ['신청접수', '정리본', '삭제목록'], activeTab: 1 });
  const d = dialog('명단 정리 완료', ['원본 3건 → 정리본 2건, 삭제 1건'],
    { x: 560, y: 240, w: 380, icon: 'info', buttons: [{ label: '확인', primary: true }] });
  P({
    file: 's4-6-run-result.svg',
    alt: '4교시 6단계 — 메뉴로 실행해 정리본 시트와 결과 알림창이 나온 화면',
    url: null, frameH: 430,
    body: g.s + d.s
      + box([g.x, g.y, g.totalW, g.tableBottom - g.y], 1, 'left')
      + box([g.tabX(1), g.tabsY, g.tabW(1) + g.tabW(2) + 36, 28], 2, 'bottom')
      + box([d.x, d.y, d.w, d.h], 3, 'top'),
    legends: [
      '정리본 시트에 중복이 빠진 결과가 들어왔다. 원본 신청접수 는 그대로 남아 있다',
      '정리본 과 삭제목록 두 시트가 새로 생겼는지 본다 — 지운 행을 눈으로 확인할 수 있어야 한다',
      '알림창 숫자를 원본과 대조한다. 3건 → 2건 + 1건이 맞으면 도구가 제대로 돈 것이다',
    ],
  });
}

/* ══════════════════════════════════════════════════════════
   5교시 · 기능 시험과 오류 대응 루틴
   ══════════════════════════════════════════════════════════ */

/* 5-1 정상 자료로 한 번 */
{
  const e = editor([
    'function 명단정리_실행() {',
    '  const ss = SpreadsheetApp.getActive();',
    '  const 원본 = ss.getSheetByName("신청접수");',
    '  const 자료 = 원본.getDataRange().getValues().slice(1);',
    '  Logger.log("읽은 행 수: " + 자료.length);',
    '}',
  ], { x: 60, y: 96, w: 860, fn: '명단정리_실행',
    log: [{ text: '오후 2:14:02  알림  실행이 시작됨' },
          { text: '오후 2:14:03  정보  읽은 행 수: 3', kind: 'ok' },
          { text: '오후 2:14:03  알림  실행이 완료됨' }] });
  P({
    file: 's5-1-happy-path.svg',
    alt: '5교시 1단계 — 정상 자료로 한 번 실행해 로그를 확인하는 화면',
    url: 'script.google.com', frameH: 420,
    body: e.s
      + box([60, 128, 860, 156], 1, 'left')
      + box([60, 298, 860, 94], 2, 'left'),
    legends: [
      '고치기 전에 먼저 있는 그대로 한 번 돌린다 — 무엇이 되고 무엇이 안 되는지부터 본다',
      '실행 로그에 "실행이 완료됨" 과 숫자가 보이면 통과다. 이 숫자를 원본 건수와 맞춰 본다',
    ],
  });
}

/* 5-2 오류 메시지 통째로 잡기 */
{
  const e = editor([
    'function 명단정리_실행() {',
    '  const 원본 = ss.getSheetByName("신청접수");',
    '  const 자료 = 원본.getDataRange().getValues().slice(1);',
    '}',
  ], { x: 60, y: 96, w: 860, fn: '명단정리_실행',
    log: [{ text: '오후 2:21:10  알림  실행이 시작됨' },
          { text: 'TypeError: Cannot read properties of null (reading "getDataRange")', kind: 'bad' },
          { text: '명단정리_실행 @ 코드.gs:3', kind: 'bad' },
          { text: '오후 2:21:11  오류  실행이 실패함', kind: 'bad' }] });
  P({
    file: 's5-2-error.svg',
    alt: '5교시 2단계 — 실행 오류 메시지가 나온 화면과 복사해야 할 범위',
    url: 'script.google.com', frameH: 400,
    body: e.s
      + box([60, 292, 860, 114], 1, 'left')
      + box([60, 336, 620, 22], 2, 'right')
      + pillNote(60, 424, 800, '오류는 실패가 아니라 안내문이다 — 무엇이 없는지 이미 적혀 있다'),
    legends: [
      '빨간 줄 전체를 마우스로 긁어 복사한다. 한 줄만 복사하면 AI 가 원인을 못 찾는다',
      '줄 번호(코드.gs:3)까지 함께 복사한다. 어디를 고쳐야 하는지 알려 주는 표시다',
    ],
  });
}

/* 5-3 오류를 그대로 붙여넣기 */
{
  const c = chat([
    { who: 'me', lines: [
      '네가 준 코드를 실행했더니 아래 오류가 났어. 코드 전체를 다시 줘.',
      '',
      'TypeError: Cannot read properties of null (reading "getDataRange")',
      '명단정리_실행 @ 코드.gs:3',
      '',
      '내 시트 탭 이름은 "신청접수" 가 맞아.',
    ] },
    { who: 'ai', lines: [
      '원인 — ss 변수를 만들지 않고 바로 썼습니다. 3행 위에 아래 줄이 빠졌습니다.',
      '  const ss = SpreadsheetApp.getActive();',
      '',
      '시트 이름을 못 찾는 경우도 같은 오류가 납니다. 탭 이름 앞뒤 공백도 확인하세요.',
      '고친 전체 코드를 아래에 다시 드립니다.',
    ] },
  ], { x: 50, y: 104, w: 880, tool: 'ChatGPT · Claude · Gemini' });
  P({
    file: 's5-3-ask-fix.svg',
    alt: '5교시 3단계 — 오류 메시지를 그대로 붙여넣어 고친 코드를 받는 화면',
    url: null, frameH: 430,
    body: c.s
      + box([140, 144, 790, 46], 1, 'right')
      + box([140, 212, 790, 24], 2, 'right')
      + box([50, 276, 880, 106], 3, 'right'),
    legends: [
      '오류 문장을 요약하지 말고 글자 그대로 붙여넣는다 — 요약하면 원인이 사라진다',
      '내가 아는 사실을 한 줄 덧붙인다. 시트 이름 같은 것은 AI 가 볼 수 없다',
      '"코드 전체를 다시 줘" 라고 해야 조각이 아니라 통째로 온다. 조각은 붙일 자리를 못 찾는다',
    ],
  });
}

/* 5-4 고친 코드로 다시 */
{
  const e = editor([
    'function 명단정리_실행() {',
    '  const ss = SpreadsheetApp.getActive();   // 빠졌던 줄',
    '  const 원본 = ss.getSheetByName("신청접수");',
    '  const 자료 = 원본.getDataRange().getValues().slice(1);',
    '  Logger.log("읽은 행 수: " + 자료.length);',
    '}',
  ], { x: 60, y: 96, w: 860, fn: '명단정리_실행',
    log: [{ text: '오후 2:24:40  알림  실행이 시작됨' },
          { text: '오후 2:24:41  정보  읽은 행 수: 3', kind: 'ok' },
          { text: '오후 2:24:41  알림  실행이 완료됨' }] });
  P({
    file: 's5-4-rerun.svg',
    alt: '5교시 4단계 — 고친 코드를 다시 붙여넣고 실행해 통과한 화면',
    url: 'script.google.com', frameH: 420,
    body: e.s
      + box([60, 150, 860, 22], 1, 'right')
      + box([60, 298, 860, 94], 2, 'left'),
    legends: [
      '무엇이 바뀌었는지 한 줄만 눈으로 확인한다. 전부 이해하려 하지 않아도 된다',
      '다시 실행해 "완료됨" 이 나오면 이번 고리는 끝이다. 안 되면 새 오류를 또 통째로 넘긴다',
    ],
  });
}

/* 5-5 예외 자료 시험 */
{
  const g = sheet(
    ['이름', '소속', '연락처', '비고'],
    [['김민수', '복지정책과', '010-1234-5678', '정상'],
     ['김민수', '복지정책과', '01012345678', '표기만 다름'],
     [' 이서연 ', '문화체육과', '', '앞뒤 공백 · 연락처 없음'],
     ['', '도로과', '010-2222-3333', '이름 빈 칸']],
    { x: 50, y: 130, cw: [160, 180, 220, 230], mark: ['2,2', '3,0', '3,2', '4,0'] });
  P({
    file: 's5-5-edge-cases.svg',
    alt: '5교시 5단계 — 빈 칸·표기 차이·공백을 일부러 넣어 시험하는 화면',
    url: null, frameH: 380,
    body: t(50, 110, '일부러 망가뜨린 시험용 자료 — 여기서 안 터지면 실제로도 안 터진다', { size: 14, fill: C.ink2, w: 700 })
      + g.s
      + box([g.colX(2), g.rowY(2), g.colW(2), g.rh], 1, 'right')
      + box([g.colX(0), g.rowY(3), g.colW(0), g.rh], 2, 'left')
      + box([g.colX(0), g.rowY(4), g.colW(0), g.rh], 3, 'left'),
    legends: [
      '같은 번호인데 표기만 다른 경우 — 중복으로 잡히는지 본다. 가장 흔한 누락이다',
      '이름 앞뒤에 공백이 들어간 경우 — 다른 사람으로 세면 규칙을 다시 시켜야 한다',
      '값이 아예 빈 경우 — 건너뛰는지, 오류로 멈추는지 본다. 멈추면 그 자리에서 AI 에게 넘긴다',
    ],
  });
}

/* 5-6 결과 대조 */
{
  const c = checklist('도구를 믿고 쓰기 전 대조표', [
    { text: '원본 건수 + 삭제 건수 = 정리본 건수 가 맞는다', checked: true, tag: '맞음', kind: 'ok' },
    { text: '손으로 세어 본 중복 건수와 도구가 지운 건수가 같다', checked: true, tag: '맞음', kind: 'ok' },
    { text: '표기만 다른 중복도 잡혔다', checked: true, tag: '맞음', kind: 'ok' },
    { text: '빈 칸이 있어도 멈추지 않고 끝까지 돈다', checked: true, tag: '맞음', kind: 'ok' },
    { text: '원본 시트가 하나도 바뀌지 않았다', checked: false, tag: '확인 필요', kind: 'warn' },
  ], { x: 60, y: 104, w: 880, rh: 46 });
  P({
    file: 's5-6-verify.svg',
    alt: '5교시 6단계 — 도구 결과를 손으로 대조하는 다섯 줄 점검 화면',
    url: null, frameH: 400,
    body: c.s
      + box([60, 122, 880, 92], 1, 'left')
      + box([60, 214, 880, 92], 2, 'left')
      + box([60, 306, 880, 46], 3, 'left'),
    legends: [
      '숫자 대조가 먼저다. 합이 맞지 않으면 나머지를 볼 필요가 없다',
      '앞 단계에서 일부러 망가뜨린 자료가 제대로 처리됐는지 확인한다',
      '마지막 줄이 가장 중요하다 — 원본이 바뀌었다면 당장 쓰지 말고 코드를 다시 시킨다',
    ],
  });
}

/* ══════════════════════════════════════════════════════════
   6교시 · 보안 판정과 검토 절차
   ══════════════════════════════════════════════════════════ */

/* 6-1 자료 3관문 */
{
  const k = cards([
    { title: '1관문 · 고유식별정보', desc: ['주민·외국인등록번호', '운전면허·여권번호', '→ 있으면 즉시 중단'], fill: '#FDECEC' },
    { title: '2관문 · 개인정보', desc: ['이름 · 연락처 · 주소', '→ 가명처리 후 사용', '원본은 내 PC 에만'], fill: '#FFF4E6' },
    { title: '3관문 · 대외비', desc: ['미공개 정책·예산', '→ 부서장 승인 필요', '승인 없으면 중단'], fill: '#EAF4FF' },
  ], { x: 60, y: 132, w: 880, h: 146 });
  P({
    file: 's6-1-three-gates.svg',
    alt: '6교시 1단계 — 자료를 외부 AI 에 올려도 되는지 판정하는 세 관문 화면',
    url: null, frameH: 368,
    body: t(60, 108, '외부 AI 에 자료를 넣기 전 — 반드시 이 순서로 통과시킨다', { size: 15, fill: C.ink2, w: 700 })
      + k.s
      + hl(60, 132, 274, 146) + hl(363, 132, 274, 146) + hl(666, 132, 274, 146)
      + pillNote(60, 300, 800, '세 관문은 자료를 넣을 때마다 통과시킨다 — 어제 통과했다고 오늘 건너뛰지 않는다'),
    legends: [
      '고유식별번호는 예외가 없다. 한 칸이라도 있으면 그 자료는 외부 AI 에 넣지 않는다',
      '이름·연락처는 가리면 쓸 수 있다. 가리는 방법은 다음 단계에서 실제로 해 본다',
      '대외비는 내 판단이 아니라 부서장 승인으로 정한다. 승인 기록을 남긴다',
    ],
  });
}

/* 6-2 가명처리 실제로 하기 */
{
  const before = sheet(
    ['이름', '연락처', '주소'],
    [['김민수', '010-1234-5678', '대구 중구 …'],
     ['이서연', '010-2222-3333', '대구 남구 …']],
    { x: 50, y: 140, cw: [100, 160, 150] });
  const after = sheet(
    ['구분', '연락처', '지역'],
    [['A', '****-5678', '중구'],
     ['B', '****-3333', '남구']],
    { x: 540, y: 140, cw: [90, 150, 110] });
  P({
    file: 's6-2-pseudonymize.svg',
    alt: '6교시 2단계 — 개인정보를 가명처리해 AI 에 넣을 형태로 바꾸는 전후 비교 화면',
    url: null, frameH: 340,
    body: t(50, 116, '원본 — 내 PC 에만 둔다', { size: 13.5, fill: C.red, w: 700 })
      + t(540, 116, 'AI 에 넣을 사본', { size: 13.5, fill: C.green, w: 700 })
      + before.s + after.s
      + t(517, 215, '›', { size: 28, fill: '#9AA0A6', a: 'middle', w: 700 })
      + box([before.x, before.y, before.totalW, before.tableBottom - before.y], 1, 'left')
      + box([after.colX(0), after.rowY(1), after.colW(0), after.rh * 2], 2, 'top')
      + box([after.colX(1), after.rowY(1), after.colW(1) + after.colW(2), after.rh * 2], 3, 'right'),
    legends: [
      '원본 파일은 이름을 바꾸지 말고 그대로 둔다 — 나중에 결과를 되돌릴 때 필요하다',
      '이름은 A · B · C 로 바꾼다. 누가 A 인지는 내 PC 의 원본에만 남는다',
      '연락처는 뒤 4자리만, 주소는 구 단위까지만 남긴다. 집계에는 이 정도면 충분하다',
    ],
  });
}

/* 6-3 공유 범위 점검 */
{
  const d = dialog('사용자 및 그룹과 공유', [
    '일반 액세스',
    '· 링크가 있는 모든 사용자  — 누구나 열 수 있음',
    '· 제한됨  — 추가된 사용자만 열 수 있음',
  ], { x: 250, y: 110, w: 500, icon: 'info', sub: '신청 명단 정리 도구',
       buttons: [{ label: '완료' }, { label: '제한됨으로 변경', primary: true }] });
  P({
    file: 's6-3-sharing.svg',
    alt: '6교시 3단계 — 시트 공유 범위를 제한됨으로 바꾸는 화면',
    url: null, frameH: 380,
    body: d.s
      + box([274, 214, 452, 22], 1, 'right')
      + box(d.btn(1), 2, 'bottom')
      + pillNote(150, 318, 760, '링크 공유로 만든 도구는 검색에도 잡힌다 — 업무 자료가 든 시트는 반드시 제한됨')
      + pin(936, 333, 3),
    legends: [
      '"링크가 있는 모든 사용자" 로 되어 있으면 주소만 알면 누구나 연다 — 업무 시트에 쓰면 안 된다',
      '제한됨으로 바꾸고, 같이 쓸 사람만 한 명씩 추가한다. 부서 단위 공유도 명단으로 한다',
      '공유 범위는 도구를 만든 직후와 담당자가 바뀔 때 다시 점검한다',
    ],
  });
}

/* 6-4 실행 기록 남기기 */
{
  const g = sheet(
    ['실행 일시', '실행자', '원본 건수', '결과 건수', '비고'],
    [['2026-09-01 09:12', '정○○', '142', '138', '중복 4건 삭제'],
     ['2026-09-08 09:05', '정○○', '156', '151', '중복 5건 삭제'],
     ['2026-09-15 09:20', '김○○', '163', '163', '중복 없음']],
    { x: 50, y: 132, cw: [190, 110, 130, 130, 220], tabs: ['정리본', '삭제목록', '실행기록'], activeTab: 2 });
  P({
    file: 's6-4-run-log.svg',
    alt: '6교시 4단계 — 도구를 돌릴 때마다 실행 기록이 쌓이는 화면',
    url: null, frameH: 400,
    body: g.s
      + box([g.x, g.y, g.totalW, g.tableBottom - g.y], 1, 'left')
      + box([g.colX(1), g.rowY(1), g.colW(1), g.rh * 3], 2, 'top')
      + box([g.tabX(2), g.tabsY, g.tabW(2), 28], 3, 'right'),
    legends: [
      '언제 · 누가 · 몇 건을 처리했는지 자동으로 한 줄씩 쌓게 한다. AI 에게 한 문장이면 된다',
      '실행자 이름이 남아야 담당자가 바뀌어도 책임 소재가 분명하다',
      '이 시트가 감사 자료가 된다. 7교시 계획서의 "관리 방안" 칸에 이 화면을 그대로 쓴다',
    ],
  });
}

/* 6-5 검토 절차 문서화 */
{
  const d = docForm('도구 운영 규칙 — 부서에 붙여 둘 한 장', [
    { label: '누가 돌리나', value: '명단 담당자 1명, 부재 시 팀장이 대행' },
    { label: '언제 돌리나', value: '매주 월요일 오전, 접수 마감 직후' },
    { label: '돌리기 전 확인', value: '원본 시트 이름과 열 순서가 그대로인지', mark: true },
    { label: '돌린 뒤 확인', value: '원본 건수 = 결과 건수 + 삭제 건수 대조', mark: true },
    { label: '개인정보', value: '연락처는 뒤 4자리만 남김 / 원본은 부서 공유드라이브에만' },
    { label: '문제가 생기면', value: '실행기록 시트의 해당 줄과 오류 문장을 캡처해 담당자에게', mark: true },
  ], { x: 50, y: 100, w: 900, lw: 170, rh: 40 });
  P({
    file: 's6-5-operating-rules.svg',
    alt: '6교시 5단계 — 도구 운영 규칙 여섯 칸을 채운 화면',
    url: null, frameH: 400,
    body: d.s
      + box([d.x + d.lw, d.y + d.rh * 2, d.w - d.lw, d.rh * 2], 1, 'right')
      + box(d.rowBox(4), 2, 'left')
      + box(d.rowBox(5), 3, 'left'),
    legends: [
      '돌리기 전후 확인 두 줄이 핵심이다. 이 두 줄만 지켜도 사고는 거의 나지 않는다',
      '개인정보 처리 방법을 문장으로 남긴다 — 담당자가 바뀌어도 같은 방식이 유지된다',
      '문제가 생겼을 때 무엇을 캡처할지 미리 정해 둔다. 그래야 원인을 찾을 수 있다',
    ],
  });
}

/* 6-6 배포 전 최종 점검 */
{
  const c = checklist('부서에 쓰기 시작하기 전 마지막 점검', [
    { text: '세 관문을 통과한 자료만 AI 에 넣었다', checked: true, tag: '확인', kind: 'ok' },
    { text: '시트 공유 범위가 제한됨이다', checked: true, tag: '확인', kind: 'ok' },
    { text: '실행 기록이 자동으로 쌓인다', checked: true, tag: '확인', kind: 'ok' },
    { text: '운영 규칙 한 장을 부서에 공유했다', checked: true, tag: '확인', kind: 'ok' },
    { text: '내가 없을 때 대신 돌릴 사람이 한 번 돌려 봤다', checked: false, tag: '아직', kind: 'warn' },
  ], { x: 60, y: 104, w: 880, rh: 46 });
  P({
    file: 's6-6-final-check.svg',
    alt: '6교시 6단계 — 부서 배포 전 다섯 줄 최종 점검 화면',
    url: null, frameH: 400,
    body: c.s
      + box([60, 122, 880, 46], 1, 'left')
      + box([60, 168, 880, 138], 2, 'left')
      + box([60, 306, 880, 46], 3, 'left'),
    legends: [
      '보안은 여기서 한 번 더 본다 — 만드는 동안 자료를 바꿔 넣었을 수 있다',
      '공유 범위 · 실행 기록 · 운영 규칙 셋이 갖춰지면 부서에서 쓸 수 있는 도구다',
      '마지막 줄을 건너뛰면 담당자가 자리를 비운 주에 도구가 멈춘다. 오늘 한 번 시켜 본다',
    ],
  });
}

/* ══════════════════════════════════════════════════════════
   7교시 · 적용계획서 여덟 칸 채우기
   ══════════════════════════════════════════════════════════ */

/* 7-1 계획서 양식 열기 */
{
  const d = docForm('부서 적용계획서 — 여덟 칸', [
    { label: '1 업무 이름', value: '' },
    { label: '2 지금 어떻게 하나', value: '' },
    { label: '3 무엇이 문제인가', value: '' },
    { label: '4 만든 도구', value: '' },
    { label: '5 기대 효과', value: '' },
    { label: '6 적용 일정', value: '' },
    { label: '7 담당과 관리', value: '' },
    { label: '8 위험과 대비', value: '' },
  ], { x: 60, y: 96, w: 880, lw: 190, rh: 38 });
  P({
    file: 's7-1-plan-form.svg',
    alt: '7교시 1단계 — 적용계획서 여덟 칸 빈 양식 화면',
    url: null, frameH: 430,
    body: d.s
      + box([d.x, d.y, d.lw, d.rh * 3], 1, 'left')
      + box([d.x, d.y + d.rh * 3, d.lw, d.rh * 2], 2, 'left')
      + box([d.x, d.y + d.rh * 5, d.lw, d.rh * 3], 3, 'left'),
    legends: [
      '1~3번은 지금 상황이다. 도구 이야기를 아직 꺼내지 않는다 — 문제부터 세운다',
      '4~5번이 제안이다. 만든 도구와 그것이 가져올 변화를 숫자로 적는다',
      '6~8번은 실행이다. 결재자는 이 세 칸을 보고 승인 여부를 정한다',
    ],
  });
}

/* 7-2 현황과 문제 */
{
  const d = docForm('1~3번 칸 — 지금 상황', [
    { label: '1 업무 이름', value: '행사 신청 명단 중복 제거 및 부서별 정리' },
    { label: '2 지금 어떻게 하나', value: '부서에서 올린 시트를 담당자가 눈으로 보며 중복을 지우고 정렬', mark: true },
    { label: '3 무엇이 문제인가', value: '주 1회 40분 소요 / 중복을 놓쳐 같은 사람에게 두 번 안내한 사례 3건', mark: true },
  ], { x: 60, y: 104, w: 880, lw: 190, rh: 46 });
  P({
    file: 's7-2-current.svg',
    alt: '7교시 2단계 — 계획서 1~3번 칸에 현황과 문제를 적은 화면',
    url: null, frameH: 330,
    body: d.s
      + box(d.rowBox(1), 1, 'left')
      + box(d.rowBox(2), 2, 'left')
      + pillNote(60, 282, 800, '"비효율적이다" 같은 말은 쓰지 않는다 — 몇 분, 몇 건인지만 적는다')
      + pin(896, 297, 3),
    legends: [
      '지금 방식을 사실 그대로 적는다. 여기에 판단이나 불평을 섞지 않는다',
      '문제는 반드시 숫자로 적는다. 시간과 사고 건수 두 가지면 충분하다',
      '숫자가 없으면 결재가 나지 않는다. 지난 3개월만 세어 봐도 숫자는 나온다',
    ],
  });
}

/* 7-3 기대효과를 숫자로 */
{
  const g = sheet(
    ['항목', '지금', '도구 적용 후', '차이'],
    [['1회 소요 시간', '40분', '2분', '38분 절약'],
     ['연간 횟수', '48회', '48회', '-'],
     ['연간 절약 시간', '32시간', '1.6시간', '30.4시간'],
     ['중복 누락 사고', '연 3건', '0건', '3건 감소']],
    { x: 60, y: 130, cw: [220, 160, 200, 200], mark: ['3,3', '4,3'] });
  P({
    file: 's7-3-effect.svg',
    alt: '7교시 3단계 — 기대 효과를 숫자로 계산한 표 화면',
    url: null, frameH: 380,
    body: t(60, 108, '5번 칸에 넣을 기대 효과 — 시트에서 계산해 옮긴다', { size: 15, fill: C.ink2, w: 700 })
      + g.s
      + box([g.colX(1), g.rowY(1), g.colW(1), g.rh], 1, 'top')
      + box([g.colX(0), g.rowY(3), g.totalW - 40, g.rh], 2, 'left')
      + box([g.colX(0), g.rowY(4), g.totalW - 40, g.rh], 3, 'left'),
    legends: [
      '1회 소요 시간은 2교시 정의서에 적어 둔 숫자를 그대로 가져온다',
      '연간으로 환산한 절약 시간이 결재자가 보는 숫자다. 곱셈만 하면 나온다',
      '시간보다 사고 감소가 더 세게 읽힌다. 실제 사례가 있으면 반드시 적는다',
    ],
  });
}

/* 7-4 일정과 담당 */
{
  const d = docForm('6~8번 칸 — 어떻게 굴릴 것인가', [
    { label: '6 적용 일정', value: '1주 담당자 시범 → 2주 팀 내 공유 → 3주 부서 전체 적용', mark: true },
    { label: '7 담당과 관리', value: '주담당 정○○ / 대행 김○○ / 실행기록 시트로 매월 점검', mark: true },
    { label: '8 위험과 대비', value: '시트 열 순서가 바뀌면 멈춤 → 돌리기 전 열 이름 확인을 규칙으로', mark: true },
  ], { x: 60, y: 104, w: 880, lw: 170, rh: 46 });
  P({
    file: 's7-4-schedule.svg',
    alt: '7교시 4단계 — 계획서 6~8번 칸에 일정과 담당을 적은 화면',
    url: null, frameH: 340,
    body: d.s
      + box(d.rowBox(0), 1, 'left')
      + box(d.rowBox(1), 2, 'left')
      + box(d.rowBox(2), 3, 'left'),
    legends: [
      '한 번에 부서 전체로 가지 않는다. 시범 1주를 넣어야 결재가 쉽게 난다',
      '대행자를 반드시 적는다. 담당자 한 명에게 묶인 도구는 오래 못 간다',
      '위험은 하나만 적고 대비를 붙인다. 6교시 운영 규칙에서 그대로 가져오면 된다',
    ],
  });
}

/* 7-5 AI 로 결재 문장 다듬기 */
{
  const c = chat([
    { who: 'me', lines: [
      '아래는 내가 쓴 부서 적용계획서 초안이야. 내용은 바꾸지 말고',
      '공문에 쓸 수 있는 문장으로만 다듬어 줘.',
      '· 숫자와 날짜는 절대 바꾸지 마',
      '· 없는 내용을 새로 만들지 마',
      '· 한 칸에 두 문장을 넘기지 마',
      '(여덟 칸 붙여넣기)',
    ] },
    { who: 'ai', lines: [
      '다듬은 결과입니다. 숫자와 일정은 원문 그대로 두었습니다.',
      '3번 — 주 1회 40분이 소요되며, 최근 3개월간 중복 누락으로 인한',
      '       중복 안내가 3건 발생하였음',
      '5번 — 1회 처리 시간이 40분에서 2분으로 단축되어 연간 30.4시간이',
      '       절감되고, 중복 누락은 연 3건에서 0건으로 감소함',
    ] },
  ], { x: 50, y: 104, w: 880, tool: 'ChatGPT · Claude · Gemini' });
  P({
    file: 's7-5-polish.svg',
    alt: '7교시 5단계 — AI 로 계획서 문장을 공문체로 다듬는 화면',
    url: null, frameH: 440,
    body: c.s
      + box([140, 148, 790, 66], 1, 'right')
      + box([50, 268, 880, 26], 2, 'right')
      + box([50, 294, 880, 104], 3, 'right'),
    legends: [
      '조건 세 줄을 반드시 붙인다 — 이것이 없으면 AI 가 없는 성과를 지어낸다',
      '숫자를 바꾸지 않았다고 밝히는지 본다. 그래도 내가 한 번 더 대조한다',
      '다듬은 문장을 계획서에 옮긴다. 어색한 곳은 내 말로 고쳐도 된다',
    ],
  });
}

/* 7-6 결재용 한 장 */
{
  const d = docForm('결재 상신용 요약 — 한 장', [
    { label: '제목', value: '행사 신청 명단 정리 업무 자동화 도구 부서 적용 계획' },
    { label: '현황', value: '주 1회 40분 수작업, 최근 3개월 중복 안내 3건 발생' },
    { label: '조치', value: '구글 시트 기반 자동 정리 도구를 제작하여 부서에 적용' },
    { label: '효과', value: '연간 30.4시간 절감, 중복 누락 연 3건 → 0건', mark: true },
    { label: '일정', value: '1주 시범 → 2주 팀 공유 → 3주 부서 적용' },
    { label: '소요 예산', value: '없음 (기존 구글 계정 기능 사용)', mark: true },
  ], { x: 50, y: 100, w: 900, lw: 130, rh: 42 });
  P({
    file: 's7-6-approval.svg',
    alt: '7교시 6단계 — 결재 상신용 한 장 요약 화면',
    url: null, frameH: 400,
    body: d.s
      + box(d.rowBox(3), 1, 'left')
      + box(d.rowBox(5), 2, 'left')
      + badge(50, 370, '7교시 산출물 완성', 'ok') + pin(290, 382, 3),
    legends: [
      '효과 칸을 맨 위로 올려 읽히게 한다. 결재자는 이 한 줄을 먼저 본다',
      '예산이 들지 않는다는 사실을 반드시 적는다 — 승인 속도가 가장 크게 달라지는 칸이다',
      '이 한 장이 7교시의 결과물이다. 8교시에서 이 내용을 3분 발표로 줄인다',
    ],
  });
}

/* ══════════════════════════════════════════════════════════
   8교시 · 시연 · 피드백 · 최종본
   ══════════════════════════════════════════════════════════ */

/* 8-1 발표 한 장 */
{
  const sl = slide('신청 명단 정리 자동화 — 주 40분을 2분으로', [
    '지금 — 주 1회 40분 수작업, 3개월간 중복 안내 3건',
    '도구 — 시트 메뉴 한 번으로 중복 제거·정렬·기록까지',
    '효과 — 연 30.4시간 절감, 중복 누락 0건',
    '적용 — 1주 시범 → 3주 부서 전체, 예산 0원',
  ], { x: 90, y: 104, w: 820, h: 280, foot: '복지정책과 · 정○○' });
  P({
    file: 's8-1-slide.svg',
    alt: '8교시 1단계 — 3분 발표용 한 장 슬라이드 화면',
    url: null, frameH: 430,
    body: sl.s
      + box([120, 132, 700, 32], 1, 'bottom')
      + box(sl.bullet(0), 2, 'right')
      + box(sl.bullet(2), 3, 'right'),
    legends: [
      '제목 한 줄에 결과를 넣는다 — "무엇을 얼마나" 가 제목에 있으면 발표는 절반이 끝난다',
      '지금 · 도구 · 효과 · 적용 네 줄이면 3분이 채워진다. 다섯 줄을 넘기지 않는다',
      '효과 줄은 숫자만 읽는다. 설명을 붙이면 시간이 모자란다',
    ],
  });
}

/* 8-2 시연 순서 */
{
  const c = checklist('3분 시연 순서 — 이 순서를 벗어나지 않는다', [
    { text: '① 원본 시트를 보여 주고 중복 두 줄을 손으로 짚는다', checked: true, tag: '30초', kind: 'info' },
    { text: '② 상단 자동화 메뉴를 눌러 실행한다', checked: true, tag: '20초', kind: 'info' },
    { text: '③ 알림창 숫자를 소리 내어 읽는다 — 3건에서 2건, 삭제 1건', checked: true, tag: '20초', kind: 'info' },
    { text: '④ 정리본과 삭제목록 시트를 차례로 보여 준다', checked: true, tag: '40초', kind: 'info' },
    { text: '⑤ 원본이 그대로임을 보여 주고 마친다', checked: true, tag: '30초', kind: 'info' },
  ], { x: 60, y: 104, w: 880, rh: 46 });
  P({
    file: 's8-2-demo-order.svg',
    alt: '8교시 2단계 — 3분 시연 순서를 다섯 줄로 정한 화면',
    url: null, frameH: 410,
    body: c.s
      + box([60, 122, 880, 46], 1, 'left')
      + box([60, 214, 880, 46], 2, 'left')
      + box([60, 306, 880, 46], 3, 'left')
      + pillNote(60, 376, 720, '코드는 보여 주지 않는다 — 보는 사람이 알고 싶은 것은 결과뿐이다'),
    legends: [
      '문제를 먼저 눈으로 보여 준다. 중복 두 줄을 짚는 30초가 시연에서 가장 중요하다',
      '숫자를 소리 내어 읽는다. 화면만 보여 주면 아무도 확인하지 않는다',
      '원본이 그대로라는 것으로 끝낸다 — 듣는 사람이 가장 걱정하는 부분이다',
    ],
  });
}

/* 8-3 피드백 받아 적기 */
{
  const g = sheet(
    ['받은 말', '누가', '고칠 것인가', '언제'],
    [['부서 코드순 정렬이 더 편하다', '총무과', '고친다', '오늘'],
     ['지운 사람에게 안내 문자도', '복지정책과', '다음에', '10월'],
     ['엑셀 파일로도 내려받고 싶다', '문화체육과', '고친다', '오늘'],
     ['다른 부서도 쓰게 해 달라', '도로과', '계획서에 반영', '11월']],
    { x: 50, y: 130, cw: [300, 150, 180, 130], mark: ['1,2', '3,2'] });
  P({
    file: 's8-3-feedback.svg',
    alt: '8교시 3단계 — 받은 피드백을 표로 받아 적는 화면',
    url: null, frameH: 390,
    body: t(50, 108, '들은 말을 그 자리에서 표로 옮긴다 — 기억에 의존하지 않는다', { size: 15, fill: C.ink2, w: 700 })
      + g.s
      + box([g.colX(0), g.rowY(1), g.colW(0), g.rh * 4], 1, 'left')
      + box([g.colX(2), g.rowY(1), g.colW(2), g.rh * 4], 2, 'top')
      + box([g.colX(3), g.rowY(1), g.colW(3), g.rh * 4], 3, 'right'),
    legends: [
      '들은 말을 고치지 말고 그대로 적는다. 해석은 나중에 한다',
      '"고친다 / 다음에 / 계획서에 반영" 셋 중 하나로만 나눈다. 넷째 칸은 만들지 않는다',
      '오늘 고칠 것은 한두 개로 제한한다. 다 고치려 하면 하나도 못 고친다',
    ],
  });
}

/* 8-4 지적 하나 고치기 */
{
  const c = chat([
    { who: 'me', lines: [
      '지금 도구는 소속 가나다순으로 정렬하는데, 부서 코드순으로 바꿔 줘.',
      '부서 코드는 E열에 있어. 나머지 동작은 그대로 두고',
      '바뀐 부분만 알려 준 다음, 전체 코드를 다시 줘.',
    ] },
    { who: 'ai', lines: [
      '바뀐 곳은 정렬 기준 한 줄입니다.',
      '  이전 — 결과.sort((a, b) => a[1].localeCompare(b[1]));   // 소속 가나다순',
      '  이후 — 결과.sort((a, b) => a[4] - b[4]);                // 부서 코드순',
      '전체 코드를 아래에 다시 드립니다.',
    ] },
  ], { x: 50, y: 104, w: 880, tool: 'ChatGPT · Claude · Gemini' });
  P({
    file: 's8-4-apply-fix.svg',
    alt: '8교시 4단계 — 피드백 하나를 골라 도구를 고치는 화면',
    url: null, frameH: 400,
    body: c.s
      + box([140, 104, 790, 86], 1, 'tr')
      + box([50, 226, 880, 26], 2, 'right')
      + box([50, 252, 880, 46], 3, 'right'),
    legends: [
      '한 번에 한 가지만 고친다. 두 가지를 같이 시키면 어느 쪽이 틀렸는지 못 찾는다',
      '"바뀐 부분만 먼저 알려 줘" 를 붙인다 — 무엇이 달라졌는지 알아야 다음에 혼자 고친다',
      '고친 뒤에는 5교시 대조표를 다시 한 번 돌린다. 고치다 다른 곳이 깨지는 일이 흔하다',
    ],
  });
}

/* 8-5 최종본 저장·공유 */
{
  const d = dialog('사본 만들기', [
    '이름  신청명단정리_도구_v1.0_20260912',
    '폴더  복지정책과 > 업무자동화',
    '',
    '· 원본의 공유 설정은 사본에 따라오지 않습니다',
  ], { x: 240, y: 108, w: 520, icon: 'info', buttons: [{ label: '취소' }, { label: '사본 만들기', primary: true }] });
  P({
    file: 's8-5-save-final.svg',
    alt: '8교시 5단계 — 완성한 도구를 이름을 붙여 부서 폴더에 저장하는 화면',
    url: null, frameH: 380,
    body: d.s
      + box([264, 172, 472, 20], 1, 'right')
      + box([264, 194, 472, 20], 2, 'right')
      + box(d.btn(1), 3, 'bottom')
      + pillNote(200, 322, 700, '날짜와 판 번호를 이름에 넣는다 — 고칠 때마다 사본을 남기면 되돌릴 수 있다'),
    legends: [
      '도구 이름에 날짜와 판 번호를 넣는다. v1.0 · 20260912 형식이면 정렬도 맞는다',
      '개인 드라이브가 아니라 부서 공유 폴더에 둔다. 담당자가 바뀌어도 남는다',
      '사본을 만든 뒤 공유 범위를 다시 제한됨으로 맞춘다 — 사본에는 따라오지 않는다',
    ],
  });
}

/* 8-6 다음 달 계획 */
{
  const d = docForm('오늘 이후 — 한 달 안에 할 것', [
    { label: '이번 주', value: '내 업무에 실제로 한 번 돌려 보고 실행기록 첫 줄을 남긴다', mark: true },
    { label: '2주차', value: '대행자에게 5분 설명하고 한 번 돌리게 한다' },
    { label: '3주차', value: '팀 회의에서 3분 시연 — 오늘 만든 슬라이드를 그대로 쓴다' },
    { label: '한 달 안', value: '피드백 표의 "다음에" 항목 중 하나를 골라 같은 방법으로 고친다', mark: true },
    { label: '막히면', value: '오늘 자료의 따라하기 단계로 돌아와 그 단계부터 다시 한다' },
  ], { x: 60, y: 104, w: 880, lw: 130, rh: 46 });
  P({
    file: 's8-6-next-month.svg',
    alt: '8교시 6단계 — 오늘 이후 한 달 계획을 적은 화면',
    url: null, frameH: 400,
    body: d.s
      + box(d.rowBox(0), 1, 'left')
      + box(d.rowBox(3), 2, 'left')
      + box(d.rowBox(4), 3, 'left'),
    legends: [
      '이번 주에 실제 업무로 한 번 돌리지 않으면 오늘 만든 도구는 대개 그대로 잊힌다',
      '한 달 안에 한 번 고쳐 보면 방법이 몸에 남는다. 고칠 거리는 이미 피드백 표에 있다',
      '막히는 것은 정상이다. 오늘 자료가 그대로 남아 있으니 그 단계로 돌아오면 된다',
    ],
  });
}

console.log(`단계 그림 ${made.length}장 생성 → public/automation/steps/`);

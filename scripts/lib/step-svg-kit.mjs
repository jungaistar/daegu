/**
 * 「따라하기」 단계 화면 그림 부품 모음.
 *
 * 화면 사이트(hufs26 /setup)의 따라하기 디자인 언어를 그대로 쓴다.
 *   · 브라우저/앱 창 틀 안에 실제로 보게 될 화면을 그린다
 *   · 눌러야 할 자리를 주황 점선으로 감싸고 주황 번호를 찍는다
 *   · 그림 아래 같은 번호로 무엇을 하는지 한 줄씩 적는다
 *
 * 기존 public/automation/*.svg 와 같은 좌표·색·글꼴 규칙을 따른다.
 * 쓰는 곳 — scripts/gen-step-svg.mjs (교시별), scripts/gen-ref-svg.mjs (참고사이트)
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');
let OUT = null;

/** 그림을 어디에 쓸지 정한다. 예: setOutDir('public/automation/steps') */
export function setOutDir(rel) {
  OUT = resolve(ROOT, rel);
  mkdirSync(OUT, { recursive: true });
}

/* ── 색 (src/styles/setup.css · ppt/theme.mjs 와 동일) ── */
export const C = {
  paper: '#FFFFFF', line: '#E6E8EC', line2: '#D9DDE3', bar: '#F3F5F8',
  ink: '#1F2937', ink2: '#202124', dim: '#6B7280', dim2: '#5F6368', dim3: '#9AA0A6',
  orange: '#F97316', blue: '#1A73E8', blue2: '#174EA6', blueSoft: '#E8F0FE',
  green: '#188038', greenSoft: '#E6F4EA', red: '#D93025', redSoft: '#FCE8E6',
  amber: '#B06000', amberSoft: '#FEF7E0', grayBtn: '#F1F3F4', grayLine: '#DADCE0',
  head: '#EEF1F5', headLine: '#D5DAE2', sel: '#FFF9EC', chat: '#F7F8FA', chatMe: '#E8F0FE',
};
export const F = "'Noto Sans KR','Malgun Gothic','Apple SD Gothic Neo',sans-serif";
export const M = "'D2Coding','Consolas','Menlo','Courier New',monospace";

/* ── 기본 조각 ── */
export const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** 글자. o = {size,fill,w(굵기),a(anchor),mono} */
export function t(x, y, s, o = {}) {
  const { size = 12.5, fill = C.ink2, w = 400, a, mono } = o;
  return `<text x="${x}" y="${y}" font-size="${size}" fill="${fill}" font-weight="${w}"`
    + `${a ? ` text-anchor="${a}"` : ''} font-family="${mono ? M : F}">${esc(s)}</text>`;
}

/** 사각형. o = {rx,fill,stroke,sw,dash} */
export function r(x, y, w, h, o = {}) {
  const { rx = 0, fill = 'none', stroke, sw = 1, dash } = o;
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}"${rx ? ` rx="${rx}"` : ''} fill="${fill}"`
    + `${stroke ? ` stroke="${stroke}" stroke-width="${sw}"` : ''}${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
}

export const line = (x1, y1, x2, y2, col = C.line, sw = 1.5) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${col}" stroke-width="${sw}"/>`;

/** 눌러야 할 자리 — 주황 점선 */
export const hl = (x, y, w, h, rx = 8) => r(x, y, w, h, { rx, stroke: C.orange, sw: 2, dash: '7 5' });

/** 그림 위 주황 번호 */
export const pin = (cx, cy, n) =>
  `<circle cx="${cx}" cy="${cy}" r="13" fill="${C.orange}" stroke="#FFFFFF" stroke-width="2.5"/>`
  + t(cx, cy + 5, n, { size: 14, w: 700, fill: '#fff', a: 'middle' });

/** 알약 모양 안내문 */
export const pillNote = (x, y, w, s) =>
  r(x, y, w, 30, { rx: 15, fill: '#FFF7ED', stroke: '#FDBA74', sw: 1.2 })
  + t(x + 16, y + 20, s, { size: 13, fill: '#9A3412', w: 700 });

/** 버튼 */
export const btn = (x, y, w, s, o = {}) => {
  const { h = 26, fill = C.grayBtn, stroke = C.grayLine, fg = '#3C4043', w: bold = 400, size = 12.5 } = o;
  return r(x, y, w, h, { rx: 6, fill, stroke })
    + t(x + w / 2, y + h / 2 + 4.5, s, { size, fill: fg, w: bold, a: 'middle' });
};
export const btnBlue = (x, y, w, s, o = {}) => btn(x, y, w, s, { fill: C.blue, stroke: C.blue, fg: '#FFFFFF', w: 700, ...o });

/** 입력칸 */
export const input = (x, y, w, label, val, o = {}) => {
  const { h = 34, mono = false } = o;
  return (label ? t(x, y - 7, label, { size: 12, fill: C.dim2, w: 700 }) : '')
    + r(x, y, w, h, { rx: 6, fill: '#FFFFFF', stroke: C.grayLine })
    + t(x + 12, y + h / 2 + 4.5, val, { size: 12.5, fill: val ? C.ink2 : '#9AA0A6', mono });
};

/** 상태 배지 */
export const badge = (x, y, s, kind = 'ok') => {
  const map = { ok: [C.greenSoft, C.green], warn: [C.amberSoft, C.amber], bad: [C.redSoft, C.red], info: [C.blueSoft, C.blue2] };
  const [bg, fg] = map[kind];
  const w = s.length * 12 + 22;
  return r(x, y, w, 24, { rx: 12, fill: bg }) + t(x + w / 2, y + 16.5, s, { size: 12, fill: fg, w: 700, a: 'middle' });
};

/* ── 창틀 ── */
/** 브라우저/앱 창. 안쪽 그림 영역은 x 14~986, y 54~(14+h) */
export function frame(h, url) {
  const bar = r(14, 14, 972, h, { rx: 14, fill: C.paper, stroke: C.line2, sw: 1.5 })
    + `<path d="M14 28 a14 14 0 0 1 14 -14 h944 a14 14 0 0 1 14 14 v26 h-972 z" fill="${C.bar}"/>`
    + `<circle cx="40" cy="40" r="6" fill="#FF5F57"/><circle cx="60" cy="40" r="6" fill="#FEBC2E"/><circle cx="80" cy="40" r="6" fill="#28C840"/>`;
  const addr = url
    ? r(340, 28, 320, 24, { rx: 12, fill: '#E7EAEF' }) + t(500, 45, url, { size: 13, fill: C.dim, a: 'middle' })
    : '';
  return bar + addr + line(14, 54, 986, 54, C.line, 1);
}

/** 그림 아래 번호 설명 줄 */
export function legend(items, y) {
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
export function build({ file, alt, url, frameH, body, legends }) {
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
export function sheet(cols, rows, o = {}) {
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
export function editor(codeLines, o = {}) {
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
export function chat(msgs, o = {}) {
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
export function dialog(title, lines, o = {}) {
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
export function docForm(title, fields, o = {}) {
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
export function checklist(title, items, o = {}) {
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
export function cards(items, o = {}) {
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
export function wire(title, parts, o = {}) {
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
export function slide(head, bullets, o = {}) {
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
export const made = [];
export const P = o => { made.push(build(o)); };

/** box(rect, n, where) — rect=[x,y,w,h] 를 pad 만큼 넓혀 감싸고 번호를 붙인다 */
export function box([x, y, w, h], n, where = 'right', pad = 8) {
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


/* ── 화면 부품: 터미널 ── */
/** lines = [{ text, kind:'cmd'|'out'|'ok'|'bad' }] */
export function terminal(lines, o = {}) {
  const { x = 50, y = 90, w = 880, title = 'Windows PowerShell' } = o;
  const h = 44 + lines.length * 22 + 16;
  let s = r(x, y, w, h, { rx: 10, fill: '#0D1117', stroke: '#30363D', sw: 1.2 })
    + r(x, y, w, 32, { rx: 10, fill: '#161B22' })
    + r(x, y + 22, w, 10, { fill: '#161B22' })
    + t(x + 16, y + 21, title, { size: 12, fill: '#8B949E' });
  lines.forEach((l, i) => {
    const ly = y + 58 + i * 22;
    const col = { cmd: '#E6EDF3', out: '#8B949E', ok: '#3FB950', bad: '#FF7B72' }[l.kind || 'out'];
    if (l.kind === 'cmd') s += t(x + 16, ly, '>', { size: 12.5, fill: '#3FB950', mono: true });
    s += t(x + (l.kind === 'cmd' ? 34 : 16), ly, l.text, { size: 12.5, fill: col, mono: true });
  });
  return { s, x, y, w, h, bottom: y + h, lineY: i => y + 58 + i * 22 };
}

/* ── 화면 부품: 설정 패널 (앱 설정 · 커넥터 목록) ── */
/** items = [{ name, desc, on }] */
export function settings(title, items, o = {}) {
  const { x = 60, y = 96, w = 880, navW = 190, nav = [], navOn = 0, rh = 54, action } = o;
  let s = r(x, y, navW, 40 + nav.length * 34, { rx: 8, fill: '#F7F9FC', stroke: C.headLine });
  s += t(x + 16, y + 26, title, { size: 13.5, fill: C.ink2, w: 700 });
  nav.forEach((n, i) => {
    const ny = y + 38 + i * 34;
    if (i === navOn) s += r(x + 8, ny, navW - 16, 30, { rx: 6, fill: C.blueSoft });
    s += t(x + 20, ny + 20, n, { size: 12.5, fill: i === navOn ? C.blue2 : C.dim2, w: i === navOn ? 700 : 400 });
  });

  const lx = x + navW + 20, lw = w - navW - 20;
  const boxes = [];
  items.forEach((it, i) => {
    const iy = y + i * (rh + 8);
    s += r(lx, iy, lw, rh, { rx: 8, fill: '#FFFFFF', stroke: C.headLine });
    s += t(lx + 16, iy + 23, it.name, { size: 13, fill: C.ink2, w: 700 });
    if (it.desc) s += t(lx + 16, iy + 41, it.desc, { size: 11.5, fill: C.dim, mono: true });
    s += badge(lx + lw - 84, iy + rh / 2 - 12, it.on ? '연결됨' : '꺼짐', it.on ? 'ok' : 'warn');
    boxes.push([lx, iy, lw, rh]);
  });

  let actBox = null;
  if (action) {
    const ay = y + items.length * (rh + 8);
    const aw = action.length * 13 + 44;
    s += r(lx, ay, aw, 38, { rx: 8, fill: '#FFFFFF', stroke: C.blue, sw: 1.4 })
      + t(lx + aw / 2, ay + 24, action, { size: 13, fill: C.blue2, w: 700, a: 'middle' });
    actBox = [lx, ay, aw, 38];
  }
  return { s, x, y, w, item: i => boxes[i], actionBox: () => actBox, listX: lx, listW: lw };
}

/* ── 화면 부품: 두 쪽 비교 (법령 개정 전후) ── */
export function diffPanes(leftTitle, leftLines, rightTitle, rightLines, o = {}) {
  const { x = 50, y = 100, w = 880, rowH = 24 } = o;
  const pw = (w - 20) / 2;
  const n = Math.max(leftLines.length, rightLines.length);
  const h = 36 + n * rowH + 14;
  let s = '';
  [[x, leftTitle, leftLines, '#FDECEC', '#C5221F'], [x + pw + 20, rightTitle, rightLines, '#E6F4EA', '#137333']]
    .forEach(([px, ti, lns, mark, mfg]) => {
      s += r(px, y, pw, h, { rx: 8, fill: '#FFFFFF', stroke: C.headLine })
        + r(px, y, pw, 30, { rx: 8, fill: '#F3F5F8' }) + r(px, y + 20, pw, 10, { fill: '#F3F5F8' })
        + t(px + 14, y + 20, ti, { size: 12.5, fill: C.dim2, w: 700 });
      lns.forEach((ln, i) => {
        const ly = y + 36 + i * rowH;
        if (ln.mark) s += r(px + 6, ly, pw - 12, rowH - 4, { rx: 4, fill: mark });
        s += t(px + 14, ly + 16, ln.text || ln, { size: 12, fill: ln.mark ? mfg : C.ink2 });
      });
    });
  return { s, x, y, w, h, bottom: y + h, pane: i => [x + i * (pw + 20), y, pw, h] };
}

/* ── 화면 부품: 지식그래프 ── */
/** nodes = [{ x, y, label, kind:'root'|'mid'|'leaf' }], links = [[i, j]] */
export function graph(nodes, links, o = {}) {
  const { ox = 0, oy = 0 } = o;
  const style = { root: ['#0E6BA8', '#FFFFFF', 30], mid: ['#DBEAFE', '#174EA6', 24], leaf: ['#FFFFFF', '#3C4043', 20] };
  let s = '';
  links.forEach(([a, b]) => {
    s += line(nodes[a].x + ox, nodes[a].y + oy, nodes[b].x + ox, nodes[b].y + oy, '#C7D2E0', 1.6);
  });
  nodes.forEach(n => {
    const [fill, fg, rr] = style[n.kind || 'leaf'];
    s += `<circle cx="${n.x + ox}" cy="${n.y + oy}" r="${rr}" fill="${fill}" stroke="#9FB3C8" stroke-width="1.3"/>`
      + t(n.x + ox, n.y + oy + 4, n.label, { size: n.kind === 'root' ? 12.5 : 11.5, fill: fg, w: 700, a: 'middle' });
  });
  return { s };
}

/* ── 화면 부품: 검색 결과 목록 ── */
/** hits = [{ file, snippet, meta }] */
export function results(query, hits, o = {}) {
  const { x = 50, y = 96, w = 880, rh = 62 } = o;
  let s = input(x, y, w - 130, null, query) + btnBlue(x + w - 120, y, 120, '내용으로 검색', { h: 34, size: 12.5 });
  const boxes = [];
  hits.forEach((h0, i) => {
    const hy = y + 52 + i * (rh + 8);
    s += r(x, hy, w, rh, { rx: 8, fill: '#FFFFFF', stroke: C.headLine })
      + t(x + 16, hy + 24, h0.file, { size: 13, fill: C.blue2, w: 700 })
      + t(x + 16, hy + 45, h0.snippet, { size: 11.5, fill: C.dim })
      + t(x + w - 16, hy + 24, h0.meta || '', { size: 11.5, fill: C.dim3, a: 'end' });
    boxes.push([x, hy, w, rh]);
  });
  return { s, x, y, w, searchBox: () => [x, y, w - 130, 34], hit: i => boxes[i],
           bottom: y + 52 + hits.length * (rh + 8) };
}

/**
 * 행정업무 자동화 강의교안 — 슬라이드 부품 모음
 *
 * 화면 사이트(daegu /automation, hufs26 /setup)의 "따라하기" 디자인 언어를 그대로 슬라이드로 옮긴다.
 *   · STEP 배지 + 빵부스러기 + 이 단계의 목표 + 번호 동작 + ✅ 확인
 *   · 화면 목업(주황 번호) 왼쪽, 설명 오른쪽
 *   · 복사해서 쓰는 프롬프트는 어두운 상자
 *   · 안내 상자 4종: 도움말 / 주의 / 용어 / 이 화면이 안 나오면
 *
 * 좌표 단위는 인치. 레이아웃은 16:9 와이드(13.333 × 7.5).
 */
import PptxGenJS from 'pptxgenjs';

/* ── 색 (src/styles/setup.css · src/config/site.ts 와 동일) ── */
export const C = {
  ink: '0D2740',        // 짙은 하늘 청색 — 표지·목업 배경
  ink2: '123A5A',
  primary: '0E6BA8',    // 대구 하늘 청색
  accent: '1793E6',     // 눌러야 할 곳
  accentSoft: 'E8F4FD',
  orange: 'F97316',     // 목업 위 번호 — 그림과 같은 색
  orangeSoft: 'FFF3E8',
  text: '1B2230',
  text2: '4B5563',
  text3: '6B7280',
  line: 'E2E8F0',
  paper: 'FFFFFF',
  gray: 'F4F5F7',
  cream: 'FBF9F4',
  cream2: 'F1ECE0',
  tip: '2B6CB0',   tipBg: 'EFF6FF',
  warn: 'C53030',  warnBg: 'FFF5F5',
  term: '0F766E',  termBg: 'ECFDF5',
  stuck: '7C3AED', stuckBg: 'F7F3FF',
  ok: '15803D',    okBg: 'F0FDF4',
};

export const FONT = 'Malgun Gothic';
export const MONO = 'Consolas';

/* ── 판형 ── */
export const W = 13.333, H = 7.5;
export const M = 0.62;                    // 좌우 여백
export const BODY_W = W - M * 2;
export const BODY_TOP = 1.62;             // 머리말 아래
export const BODY_BOT = 6.92;             // 꼬리말 위

/* ── 텍스트 높이 어림 ──
   pptxgenjs 는 글자를 재지 못한다. 한글은 글자 폭이 글자크기와 거의 같고
   영문·숫자는 절반쯤이라는 점을 이용해 줄 수를 어림잡는다. 넉넉하게 잡아 겹침을 막는다. */
export function estLines(text, widthIn, pt) {
  const perLine = (widthIn * 72) / pt;
  let lines = 0;
  for (const raw of String(text).split('\n')) {
    let units = 0;
    for (const ch of raw) units += /[가-힣ㄱ-ㆎ一-鿿]/.test(ch) ? 1 : 0.55;
    lines += Math.max(1, Math.ceil(units / perLine));
  }
  return lines;
}
export function textH(text, widthIn, pt, lead = 1.42) {
  return estLines(text, widthIn, pt) * (pt / 72) * lead;
}

/* ── 굵게 표시(**…**)를 리치 텍스트로 ── */
export function rich(str, base = {}) {
  const out = [];
  for (const piece of String(str).split(/(\*\*[^*]+\*\*|`[^`]+`)/g)) {
    if (!piece) continue;
    if (piece.startsWith('**') && piece.endsWith('**')) {
      const inner = piece.slice(2, -2);
      // **`코드`** 처럼 겹쳐 쓴 경우 — 백틱을 남기지 말고 고정폭 + 굵게로
      if (inner.startsWith('`') && inner.endsWith('`')) {
        out.push({ text: inner.slice(1, -1), options: { ...base, bold: true, fontFace: MONO, color: C.primary } });
      } else {
        out.push({ text: inner, options: { ...base, bold: true, color: base.strong || base.color } });
      }
    } else if (piece.startsWith('`') && piece.endsWith('`')) {
      out.push({ text: piece.slice(1, -1), options: { ...base, fontFace: MONO, color: C.primary, bold: true } });
    } else {
      out.push({ text: piece, options: { ...base } });
    }
  }
  return out.length ? out : [{ text: String(str), options: base }];
}

/* ============================================================
   덱
   ============================================================ */
export function newDeck({ title, subject, author, company }) {
  const pptx = new PptxGenJS();
  pptx.layout = 'LAYOUT_WIDE';
  pptx.title = title;
  pptx.subject = subject;
  pptx.author = author;
  pptx.company = company;
  pptx.defineSlideMaster({
    title: 'BASE',
    background: { color: C.paper },
  });
  return pptx;
}

/* ── 머리말·꼬리말 ── */
export function header(slide, { kicker, title, tone = C.primary }) {
  if (kicker) {
    slide.addText(kicker, {
      x: M, y: 0.42, w: BODY_W, h: 0.3,
      fontFace: FONT, fontSize: 12, bold: true, color: tone, charSpacing: 0.6,
    });
  }
  slide.addText(rich(title, { color: C.text, strong: tone }), {
    x: M, y: kicker ? 0.72 : 0.55, w: BODY_W, h: 0.62,
    fontFace: FONT, fontSize: 27, bold: true, valign: 'top',
  });
  slide.addShape('rect', { x: M, y: kicker ? 1.42 : 1.28, w: 0.9, h: 0.055, fill: { color: tone } });
  slide.addShape('rect', { x: M + 0.9, y: kicker ? 1.442 : 1.302, w: BODY_W - 0.9, h: 0.012, fill: { color: C.line } });
}

export function footer(slide, { no, section }) {
  slide.addShape('rect', { x: 0, y: H - 0.42, w: W, h: 0.012, fill: { color: C.line } });
  slide.addText('행정업무 자동화 · 바이브코딩으로 만드는 업무 도구   |   대구광역시 공무원 AI 실무 교육', {
    x: M, y: H - 0.38, w: 8.2, h: 0.28,
    fontFace: FONT, fontSize: 9, color: C.text3, valign: 'middle',
  });
  if (section) {
    slide.addText(section, {
      x: W - M - 4.2, y: H - 0.38, w: 3.7, h: 0.28,
      fontFace: FONT, fontSize: 9, color: C.text3, align: 'right', valign: 'middle',
    });
  }
  slide.addText(String(no), {
    x: W - M - 0.45, y: H - 0.38, w: 0.45, h: 0.28,
    fontFace: FONT, fontSize: 10, bold: true, color: C.primary, align: 'right', valign: 'middle',
  });
}

/* ============================================================
   세로로 쌓는 상자들 — 각 부품이 스스로 높이를 계산하고 커서를 내린다
   ============================================================ */
export class Stack {
  constructor(slide, x, y, w) { this.s = slide; this.x = x; this.y = y; this.w = w; this.y0 = y; }
  get used() { return this.y - this.y0; }
  gap(h = 0.14) { this.y += h; return this; }

  /** 작은 제목 */
  label(text, { color = C.primary, size = 11.5 } = {}) {
    this.s.addText(text, {
      x: this.x, y: this.y, w: this.w, h: 0.24,
      fontFace: FONT, fontSize: size, bold: true, color, charSpacing: 0.4, valign: 'middle',
    });
    this.y += 0.3;
    return this;
  }

  /** 한 문단 */
  para(text, { size = 13, color = C.text2, bold = false, strong = C.text } = {}) {
    const h = textH(text, this.w - 0.05, size) + 0.06;
    this.s.addText(rich(text, { color, strong, bold }), {
      x: this.x, y: this.y, w: this.w, h,
      fontFace: FONT, fontSize: size, valign: 'top', lineSpacing: size * 1.42,
    });
    this.y += h + 0.08;
    return this;
  }

  /** 점 목록 */
  bullets(items, { size = 12.5, color = C.text2, gap = 0.09 } = {}) {
    for (const it of items) {
      const h = textH(it, this.w - 0.26, size) + 0.04;
      this.s.addShape('ellipse', {
        x: this.x + 0.045, y: this.y + size / 220 + 0.055, w: 0.075, h: 0.075, fill: { color: C.accent },
      });
      this.s.addText(rich(it, { color, strong: C.text }), {
        x: this.x + 0.24, y: this.y, w: this.w - 0.24, h,
        fontFace: FONT, fontSize: size, valign: 'top', lineSpacing: size * 1.4,
      });
      this.y += h + gap;
    }
    return this;
  }

  /** 번호 동작 — setup 페이지의 setup-actions 와 같은 모양 */
  actions(items, { size = 12.5, color = C.text2, tone = C.accent } = {}) {
    items.forEach((it, i) => {
      const h = Math.max(0.3, textH(it, this.w - 0.5, size) + 0.05);
      this.s.addShape('ellipse', {
        x: this.x, y: this.y + 0.015, w: 0.28, h: 0.28, fill: { color: tone },
      });
      this.s.addText(String(i + 1), {
        x: this.x, y: this.y + 0.015, w: 0.28, h: 0.28,
        fontFace: FONT, fontSize: 10.5, bold: true, color: 'FFFFFF', align: 'center', valign: 'middle',
      });
      this.s.addText(rich(it, { color, strong: C.text }), {
        x: this.x + 0.42, y: this.y, w: this.w - 0.42, h,
        fontFace: FONT, fontSize: size, valign: 'top', lineSpacing: size * 1.4,
      });
      this.y += h + 0.12;
    });
    return this;
  }

  /** 이 단계의 목표 — 짙은 청색 상자 */
  goal(text, { label = '이 단계의 목표' } = {}) {
    const inner = this.w - 0.6;
    const h = textH(text, inner, 13) + 0.72;
    this.s.addShape('roundRect', {
      x: this.x, y: this.y, w: this.w, h, rectRadius: 0.06, fill: { color: C.ink },
    });
    this.s.addText(label, {
      x: this.x + 0.3, y: this.y + 0.17, w: inner, h: 0.22,
      fontFace: FONT, fontSize: 9.5, bold: true, color: '8FD8FF', charSpacing: 0.8,
    });
    this.s.addText(rich(text, { color: 'FFFFFF', strong: 'FFFFFF' }), {
      x: this.x + 0.3, y: this.y + 0.42, w: inner, h: h - 0.58,
      fontFace: FONT, fontSize: 13, valign: 'top', lineSpacing: 18,
    });
    this.y += h + 0.16;
    return this;
  }

  /** 안내 상자 — tip / warn / term / stuck / ok */
  note(kind, title, body, { size = 12 } = {}) {
    const map = {
      tip:   { c: C.tip,   bg: C.tipBg,   icon: '💡' },
      warn:  { c: C.warn,  bg: C.warnBg,  icon: '⚠' },
      term:  { c: C.term,  bg: C.termBg,  icon: '📘' },
      stuck: { c: C.stuck, bg: C.stuckBg, icon: '❓' },
      ok:    { c: C.ok,    bg: C.okBg,    icon: '✅' },
    };
    const t = map[kind] || map.tip;
    const inner = this.w - 0.52;
    const bodyH = body ? textH(body, inner, size) : 0;
    const h = 0.3 + (title ? 0.26 : 0) + bodyH + 0.18;
    this.s.addShape('rect', { x: this.x, y: this.y, w: this.w, h, fill: { color: t.bg } });
    this.s.addShape('rect', { x: this.x, y: this.y, w: 0.055, h, fill: { color: t.c } });
    let yy = this.y + 0.14;
    if (title) {
      this.s.addText(`${t.icon}  ${title}`, {
        x: this.x + 0.24, y: yy, w: inner, h: 0.26,
        fontFace: FONT, fontSize: size + 0.5, bold: true, color: t.c, valign: 'middle',
      });
      yy += 0.28;
    }
    if (body) {
      this.s.addText(rich(body, { color: C.text2, strong: t.c }), {
        x: this.x + 0.24, y: yy, w: inner, h: bodyH + 0.06,
        fontFace: FONT, fontSize: size, valign: 'top', lineSpacing: size * 1.4,
      });
    }
    this.y += h + 0.16;
    return this;
  }

  /** ✅ 확인 — 따라하기의 단계 통과 기준 */
  check(text, { size = 12 } = {}) { return this.note('ok', '확인', text, { size }); }

  /** 복사해서 쓰는 프롬프트 / 코드 */
  code(text, { label = '복사해서 쓰는 프롬프트', size = 10.5, lang = false } = {}) {
    const inner = this.w - 0.5;
    const bodyH = textH(text, inner, size, 1.34) + 0.1;
    const h = bodyH + (label ? 0.46 : 0.24);
    this.s.addShape('roundRect', {
      x: this.x, y: this.y, w: this.w, h, rectRadius: 0.05, fill: { color: C.ink },
    });
    let yy = this.y + 0.13;
    if (label) {
      this.s.addText(label, {
        x: this.x + 0.25, y: yy, w: inner, h: 0.22,
        fontFace: FONT, fontSize: 9, bold: true, color: '8FD8FF', charSpacing: 0.8,
      });
      yy += 0.3;
    }
    this.s.addText(text, {
      x: this.x + 0.25, y: yy, w: inner, h: bodyH,
      fontFace: lang ? MONO : MONO, fontSize: size, color: 'DCE7F5',
      valign: 'top', lineSpacing: size * 1.34,
    });
    this.y += h + 0.16;
    return this;
  }

  /** 표 — 첫 행이 머리글 */
  table(rows, { colW, size = 11.5, headFill = C.primary, zebra = true, headColor = 'FFFFFF' } = {}) {
    const cols = rows[0].length;
    // colW 는 비율로 받아 칸 너비에 맞춰 정규화한다 — 표가 늘 단 너비를 꽉 채운다
    const rawW = colW || Array(cols).fill(1);
    const sumW = rawW.reduce((a, b) => a + b, 0);
    const widths = rawW.map(v => (v / sumW) * this.w);
    const rowH = [];
    rows.forEach((r, ri) => {
      let mx = 0;
      r.forEach((cell, ci) => {
        mx = Math.max(mx, textH(String(cell), widths[ci] - 0.24, size, 1.3));
      });
      rowH.push(Math.max(ri === 0 ? 0.34 : 0.32, mx + 0.19));
    });
    const data = rows.map((r, ri) => r.map((cell) => ({
      text: rich(cell, {
        color: ri === 0 ? headColor : C.text2,
        strong: ri === 0 ? headColor : C.text,
        bold: ri === 0,
      }),
      options: {
        fill: { color: ri === 0 ? headFill : (zebra && ri % 2 === 0 ? C.cream : C.paper) },
        color: ri === 0 ? headColor : C.text2,
        valign: 'middle',
      },
    })));
    this.s.addTable(data, {
      x: this.x, y: this.y, w: this.w, colW: widths, rowH,
      fontFace: FONT, fontSize: size, border: { type: 'solid', pt: 0.75, color: C.line },
      margin: [0.06, 0.1, 0.06, 0.1], autoPage: false,
    });
    this.y += rowH.reduce((a, b) => a + b, 0) + 0.18;
    return this;
  }

  /** 화면 목업 그림 */
  image(path, { w = this.w, ratio, align = 'left' } = {}) {
    const h = w / ratio;
    const x = align === 'center' ? this.x + (this.w - w) / 2 : this.x;
    this.s.addShape('roundRect', {
      x: x - 0.04, y: this.y - 0.04, w: w + 0.08, h: h + 0.08, rectRadius: 0.05,
      fill: { color: C.paper }, line: { color: C.line, width: 1 },
    });
    this.s.addImage({ path, x, y: this.y, w, h });
    this.y += h + 0.18;
    return this;
  }

  /** 가로로 늘어놓는 칩 — 흐름 요약 */
  chips(items, { h = 0.46, size = 11.5, tone = C.accentSoft, color = C.primary } = {}) {
    const n = items.length, gap = 0.1;
    const cw = (this.w - gap * (n - 1)) / n;
    items.forEach((t, i) => {
      const x = this.x + i * (cw + gap);
      this.s.addShape('roundRect', { x, y: this.y, w: cw, h, rectRadius: 0.08, fill: { color: tone } });
      this.s.addText(t, {
        x: x + 0.06, y: this.y, w: cw - 0.12, h,
        fontFace: FONT, fontSize: size, bold: true, color, align: 'center', valign: 'middle',
      });
    });
    this.y += h + 0.16;
    return this;
  }
}

/* ============================================================
   완성 슬라이드 틀
   ============================================================ */
let counter = { n: 0 };
export function resetCounter() { counter.n = 0; }

export function addSlide(pptx, { section }) {
  const slide = pptx.addSlide({ masterName: 'BASE' });
  counter.n += 1;
  footer(slide, { no: counter.n, section });
  return slide;
}

/** 표지 */
export function coverSlide(pptx, { eyebrow, title, tagline, desc, meta, foot }) {
  const s = pptx.addSlide({ masterName: 'BASE' });
  counter.n += 1;
  s.background = { color: C.ink };
  // 배경 장식 — 오른쪽 아래로 흐르는 밝은 띠
  s.addShape('roundRect', { x: 8.6, y: -1.6, w: 6.4, h: 6.4, rectRadius: 0.5, fill: { color: C.ink2 }, rotate: 22 });
  s.addShape('roundRect', { x: 10.2, y: 3.4, w: 5.2, h: 5.2, rectRadius: 0.5, fill: { color: '0F3556' }, rotate: 22 });
  s.addShape('rect', { x: M, y: 1.62, w: 1.5, h: 0.075, fill: { color: C.accent } });

  s.addText(eyebrow, {
    x: M, y: 1.06, w: 9, h: 0.34,
    fontFace: FONT, fontSize: 13.5, bold: true, color: '8FD8FF', charSpacing: 1.2,
  });
  s.addText(title, {
    x: M, y: 1.96, w: 9.6, h: 1.5,
    fontFace: FONT, fontSize: 52, bold: true, color: 'FFFFFF', valign: 'top',
  });
  s.addText(tagline, {
    x: M, y: 3.44, w: 9.4, h: 0.5,
    fontFace: FONT, fontSize: 20, color: 'BFE3FA', valign: 'top',
  });
  s.addText(rich(desc, { color: '9FB6CC', strong: 'D9E8F5' }), {
    x: M, y: 4.12, w: 8.4, h: 1.0,
    fontFace: FONT, fontSize: 13, valign: 'top', lineSpacing: 19,
  });
  meta.forEach((t, i) => {
    const x = M + i * 2.62;
    s.addShape('roundRect', { x, y: 5.34, w: 2.44, h: 0.48, rectRadius: 0.09, fill: { color: '14395C' } });
    s.addText(t, {
      x: x + 0.1, y: 5.34, w: 2.24, h: 0.48,
      fontFace: FONT, fontSize: 11.5, bold: true, color: 'CFE6F7', align: 'center', valign: 'middle',
    });
  });
  s.addText(foot, {
    x: M, y: 6.5, w: 11, h: 0.36,
    fontFace: FONT, fontSize: 11, color: '7C93A9', valign: 'middle',
  });
  return s;
}

/** 교시 표지 */
export function dividerSlide(pptx, { no, time, title, goal, deliverable, steps, section }) {
  const s = pptx.addSlide({ masterName: 'BASE' });
  counter.n += 1;
  s.background = { color: C.ink };
  s.addShape('roundRect', { x: 9.5, y: -1.2, w: 5.6, h: 5.6, rectRadius: 0.5, fill: { color: C.ink2 }, rotate: 22 });

  s.addText(no, {
    x: M, y: 1.0, w: 6.0, h: 1.5,
    fontFace: FONT, fontSize: 76, bold: true, color: '1E5A88', valign: 'middle',
  });
  s.addShape('rect', { x: M + 0.06, y: 2.66, w: 1.2, h: 0.055, fill: { color: C.accent } });
  s.addText(time, {
    x: M + 0.06, y: 2.9, w: 4, h: 0.32,
    fontFace: FONT, fontSize: 14, bold: true, color: '8FD8FF', charSpacing: 0.8,
  });
  s.addText(title, {
    x: M + 0.06, y: 3.3, w: 7.5, h: 1.4,
    fontFace: FONT, fontSize: 34, bold: true, color: 'FFFFFF', valign: 'top', lineSpacing: 44,
  });

  s.addText([
    { text: '학습 목표   ', options: { color: '6E93B4', bold: true, fontSize: 11 } },
    { text: goal, options: { color: 'D9E8F5', fontSize: 13 } },
  ], { x: M + 0.06, y: 4.86, w: 7.4, h: 0.66, fontFace: FONT, valign: 'top', lineSpacing: 19 });
  s.addText([
    { text: '산출물   ', options: { color: '6E93B4', bold: true, fontSize: 11 } },
    { text: deliverable, options: { color: 'FFD9AE', fontSize: 13, bold: true } },
  ], { x: M + 0.06, y: 5.62, w: 7.4, h: 0.5, fontFace: FONT, valign: 'top', lineSpacing: 19 });

  if (steps?.length) {
    s.addText('이 시간의 진행', {
      x: 8.5, y: 1.62, w: 4.2, h: 0.28,
      fontFace: FONT, fontSize: 10.5, bold: true, color: '6E93B4', charSpacing: 0.8,
    });
    steps.forEach((t, i) => {
      const y = 2.0 + i * 0.53;
      s.addShape('ellipse', { x: 8.5, y: y + 0.04, w: 0.3, h: 0.3, fill: { color: C.orange } });
      s.addText(String(i + 1), {
        x: 8.5, y: y + 0.04, w: 0.3, h: 0.3,
        fontFace: FONT, fontSize: 11, bold: true, color: 'FFFFFF', align: 'center', valign: 'middle',
      });
      s.addText(t, {
        x: 8.94, y, w: 3.8, h: 0.4,
        fontFace: FONT, fontSize: 12, color: 'CFE0EE', valign: 'middle',
      });
    });
  }
  footer(s, { no: counter.n, section });
  return s;
}

/** STEP 슬라이드 — 왼쪽 그림/오른쪽 설명, 또는 한 단 */
export function stepHeader(slide, { step, breadcrumb, title, tone = C.accent }) {
  const bw = 0.98;
  slide.addShape('roundRect', { x: M, y: 0.44, w: bw, h: 0.34, rectRadius: 0.06, fill: { color: tone } });
  slide.addText(step, {
    x: M, y: 0.44, w: bw, h: 0.34,
    fontFace: FONT, fontSize: 11.5, bold: true, color: 'FFFFFF', align: 'center', valign: 'middle',
  });
  slide.addText(breadcrumb, {
    x: M + bw + 0.16, y: 0.44, w: BODY_W - bw - 0.2, h: 0.34,
    fontFace: FONT, fontSize: 10.5, bold: true, color: C.text3, charSpacing: 0.6, valign: 'middle',
  });
  slide.addText(rich(title, { color: C.text, strong: tone }), {
    x: M, y: 0.86, w: BODY_W, h: 0.56,
    fontFace: FONT, fontSize: 25, bold: true, valign: 'top',
  });
  slide.addShape('rect', { x: M, y: 1.44, w: 0.9, h: 0.055, fill: { color: tone } });
  slide.addShape('rect', { x: M + 0.9, y: 1.462, w: BODY_W - 0.9, h: 0.012, fill: { color: C.line } });
}

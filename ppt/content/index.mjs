/** 슬라이드 순서 — 과정 개요 → 1~8교시 → 실습 사례집 */
import intro from './00-intro.mjs';
import s1 from './01-understand.mjs';
import s2 from './02-select.mjs';
import s3 from './03-design.mjs';
import s4 from './04-generate.mjs';
import s5 from './05-test.mjs';
import s6 from './06-security.mjs';
import s7 from './07-plan.mjs';
import s8 from './08-share.mjs';
import cases from './09-cases.mjs';

export const DECK = [...intro, ...s1, ...s2, ...s3, ...s4, ...s5, ...s6, ...s7, ...s8, ...cases];

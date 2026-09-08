/**
 * public/automation/*.svg → ppt/assets/*.png
 *
 * pptxgenjs 는 SVG 를 PowerPoint 안에서 안정적으로 못 그린다. 슬라이드에 넣기 전에
 * 헤드리스 크롬으로 2배 크기 PNG 로 굽는다. (이 PC 에는 poppler·sharp 가 없다)
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync, rmSync, readdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { resolve, dirname, basename } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { tmpdir } from 'node:os';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = resolve(__dirname, '..', 'public', 'automation');
const OUT = resolve(__dirname, 'assets');
const SCALE = 2;

const CHROME = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
].find(p => existsSync(p));
if (!CHROME) throw new Error('크롬/엣지를 찾지 못했습니다.');

mkdirSync(OUT, { recursive: true });
const work = resolve(tmpdir(), 'daegu-ppt-svg');
mkdirSync(work, { recursive: true });

const files = readdirSync(SRC).filter(f => f.endsWith('.svg')).sort();
let n = 0;

for (const file of files) {
  const svg = readFileSync(resolve(SRC, file), 'utf8');
  const vb = svg.match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/);
  if (!vb) { console.warn(`  ! viewBox 없음: ${file}`); continue; }
  const w = Math.round(Number(vb[1]) * SCALE);
  const h = Math.round(Number(vb[2]) * SCALE);

  // 여백 없이 SVG 만 정확히 채우는 페이지
  const html = `<!doctype html><meta charset="utf-8">
<style>html,body{margin:0;padding:0;background:#fff}
svg{display:block;width:${w}px;height:${h}px}</style>
${svg.replace(/<svg /, `<svg preserveAspectRatio="xMidYMid meet" `)}`;

  const htmlPath = resolve(work, basename(file, '.svg') + '.html');
  const pngPath = resolve(OUT, basename(file, '.svg') + '.png');
  writeFileSync(htmlPath, html, 'utf8');

  execFileSync(CHROME, [
    '--headless=new', '--disable-gpu', '--no-sandbox', '--hide-scrollbars',
    '--force-device-scale-factor=1',
    `--window-size=${w},${h}`,
    `--screenshot=${pngPath}`,
    '--virtual-time-budget=4000',
    pathToFileURL(htmlPath).href,
  ], { stdio: 'ignore' });

  if (!existsSync(pngPath)) throw new Error(`렌더 실패: ${file}`);
  console.log(`  ✓ ${basename(file, '.svg')}.png  ${w}×${h}`);
  n++;
}

rmSync(work, { recursive: true, force: true });
console.log(`\nPNG ${n}장 생성 → ppt/assets/`);

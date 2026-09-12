/** public/automation/steps/*.svg → 임시 PNG (눈으로 확인용). 실행: node scripts/preview-step-svg.mjs [파일명...] */
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { resolve, dirname, basename } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { tmpdir } from 'node:os';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIRS = ['public/automation/steps', 'public/reference/steps']
  .map(d => resolve(__dirname, '..', d));
const findSrc = f => DIRS.find(d => existsSync(resolve(d, f)));
const OUT = resolve(tmpdir(), 'daegu-step-preview');
const CHROME = ['C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'].find(p => existsSync(p));
if (!CHROME) throw new Error('크롬/엣지를 찾지 못했습니다.');
mkdirSync(OUT, { recursive: true });

const want = process.argv.slice(2);
const files = (want.length ? want : DIRS.flatMap(d => readdirSync(d).filter(f => f.endsWith('.svg')).sort()));
for (const file of files) {
  const dir = findSrc(file);
  if (!dir) { console.warn(`  ! 못 찾음: ${file}`); continue; }
  const svg = readFileSync(resolve(dir, file), 'utf8');
  const [, W, H] = svg.match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/);
  const w = Math.round(+W), h = Math.round(+H);
  const html = `<!doctype html><meta charset="utf-8"><style>html,body{margin:0;background:#fff}svg{display:block;width:${w}px;height:${h}px}</style>${svg}`;
  const hp = resolve(OUT, basename(file, '.svg') + '.html');
  const pp = resolve(OUT, basename(file, '.svg') + '.png');
  writeFileSync(hp, html, 'utf8');
  execFileSync(CHROME, ['--headless=new', '--disable-gpu', '--no-sandbox', '--hide-scrollbars',
    '--force-device-scale-factor=1', `--window-size=${w},${h}`, `--screenshot=${pp}`,
    '--virtual-time-budget=4000', pathToFileURL(hp).href], { stdio: 'ignore' });
  console.log(pp);
}

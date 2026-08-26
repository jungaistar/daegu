# 작업 기록 (WORKLOG)

대구 사이트에 무엇을 왜 했는지 남긴다. 새 작업은 맨 위에 추가한다.

---

## 2026-08-26 · 저장소 연동 · 강사 소개 페이지 · 과정 기록 보관

### 1. GitHub 연동

로컬 `D:\DEV\daegu` 에는 `daegu-main.zip`(2026-08-18 소스 스냅샷)과 `doc/`(강의 참고자료)만 있었고,
원격 `jungaistar/daegu` 는 2026-08-25 에 만들어진 빈 저장소(README 스텁 1개)였다.

- zip 을 풀어 프로젝트 소스 160개 파일을 저장소에 반영하고 `main` 에 푸시했다.
- 원격의 `Initial commit` 위에 커밋을 쌓았다 — 강제 푸시·덮어쓰기 없음.
- `.gitignore` 에 `*.zip`, `doc/` 추가.
  - `doc/` 은 타 지자체 사례 PPT·제품 매뉴얼 PDF 라서 **공개 저장소에 올리지 않는다**. 파일은 로컬에만 둔다.
  - zip 은 이제 git 이 이력을 관리하므로 저장소에 둘 이유가 없다.

### 2. 강사 소개 페이지 (`/instructor`)

`D:\DEV\nonghyup\instructor.html`(농협사료 AI 실무 학습사이트, 단일 HTML)의 강사 소개 내용을
대구 사이트의 React 페이지로 이식했다. 농협 NH 그린/골드 스타일은 가져오지 않고,
대구 사이트 토큰(`--primary` / `--accent`)으로 다시 입혔다.

| 파일 | 역할 |
|---|---|
| `src/data/instructor.ts` | 프로필 데이터(학력·경력·역량·자격·저서·비전) — 화면과 분리 |
| `src/pages/Instructor.tsx` | 페이지 컴포넌트 (lazy 라우트) |
| `src/styles/instructor.css` | 전용 스타일 (다크모드·모바일 대응) |
| `src/layouts/PublicLayout.tsx` | `/instructor` 라우트 등록 |
| `src/config/site.ts` | 푸터 링크 추가 |
| `src/utils/translations.ts` | `site.nav.instructor` (ko/en) |
| `src/pages/About.tsx` | 소개 페이지 → 강사 소개 링크 |

원문에서 고친 곳 하나 — 소속 대학명이 원본에 `동아예술방송대학교` 로 적혀 있었으나
실제 교명은 **동아방송예술대학교** 이므로 바로잡았다.

### 3. 전 과정 기록 보관

- `scripts/export-curriculum.mjs` — `src/data/courses.ts` 의 `PROGRAMS` 를 읽어
  `docs/CURRICULUM.md` 를 생성한다. 손으로 옮겨 적지 않으므로 커리큘럼이 바뀌면
  `npm run docs:curriculum` 만 다시 돌리면 문서가 따라온다.
- `docs/CURRICULUM.md` — 2개 과정 · 8교시 · 실습 사례 24건 전체 (예시 프롬프트 원문 포함).
- `docs/WORKLOG.md` — 이 문서.

### 4. 빌드 · 배포 (실행 결과)

- `npm install` (Node 24.18.0 / npm 11.16.0) → `npm run build` (tsc -b + vite build) 통과.
- 로컬 `npm run preview` 로 `/instructor`, `/about` 렌더링을 브라우저에서 직접 확인.
- `npm run deploy` → `dist/` 를 `gh-pages` 브랜치에 Published.
- GitHub Pages: `gh-pages` 브랜치 / 루트 경로에서 서비스. 커스텀 도메인 `CNAME` = `daegu.dreamitbiz.com`.

### 5. 기록을 두는 곳

작업 기록은 저장소 안에 둔다 — 로컬 `D:\DEV\daegu\docs\` 와 GitHub `jungaistar/daegu` 가 같은 파일이다.
README 의 "기록 문서" 절에서 두 문서로 바로 갈 수 있게 링크를 걸었다.

| 두는 곳 | 파일 |
|---|---|
| 전 과정 기록 | `docs/CURRICULUM.md` (자동 생성 — `npm run docs:curriculum`) |
| 작업 기록 | `docs/WORKLOG.md` (이 문서, 손으로 추가) |

### 남은 것 / 확인 필요

- `src/utils/supabase.ts` 에 Supabase **anon** 키 하드코딩 폴백이 있다. anon 키는 브라우저 번들에
  노출되는 공개용이라 유출은 아니지만, 해당 키가 레거시 JWT 형식이라 아직 유효한지 확인이 필요하다.
  정상 운영에는 `.env` 의 `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` 를 쓰는 것이 맞다.
- `doc/` 자료를 사이트 학습자료로 노출할지는 미정 (현재 저장소에 없음).

### 6. 배포 URL 관련 — 확인 필요 (미해결)

`npm run deploy` 는 성공했고 `jungaistar/daegu` 의 Pages 는 `gh-pages` 브랜치에서 built 상태다.
다만 **이 저장소의 Pages 주소로는 화면이 뜨지 않는다.**

| 확인한 것 | 결과 |
|---|---|
| `jungaistar/daegu` Pages URL | `https://jungaistar.github.io/daegu/` — HTML 200 |
| 그 HTML 이 참조하는 자산 | `/assets/index-*.js` → **404** (실제 위치는 `/daegu/assets/...`) |
| `vite.config.ts` 의 `base` | `'/'` — 루트 도메인 전제. 하위경로(`/daegu/`)에서는 자산 경로가 어긋난다 |
| `jungaistar/daegu` 의 Pages `cname` | `null` — 커스텀 도메인이 붙어 있지 않다 |
| `daegu.dreamitbiz.com` 현재 응답 | 200, `server: cloudflare` + `x-github-request-id` → Cloudflare 프록시 뒤 **GitHub Pages**, `last-modified: 2026-08-18` |
| `jungaistar` 계정의 어느 저장소가 이 도메인을 소유? | **없음** (`lms` → `lms.miraejob.co.kr` 뿐) |

즉 `daegu.dreamitbiz.com` 은 **jungaistar 가 아닌 다른 GitHub 계정의 저장소**가 잡고 있고,
그쪽이 2026-08-18 자 빌드를 서비스 중이다. 한 도메인은 GitHub Pages 저장소 하나만 소유할 수 있다.

선택지 (오너 결정 필요):

1. **도메인을 이 저장소로 옮긴다** — 기존 저장소에서 커스텀 도메인을 떼고 `jungaistar/daegu` 에 붙인다.
   운영 사이트가 잠시 끊길 수 있고, 기존 저장소 소유 계정의 조작이 필요하다.
2. **이 저장소를 소스 보관용으로만 쓴다** — 배포는 기존 저장소가 계속 맡고,
   여기서는 `gh-pages` 배포를 하지 않는다.
3. **github.io 하위경로에서도 뜨게 한다** — `vite.config.ts` 의 `base` 를 `'/daegu/'` 로 바꾼다.
   단, 그렇게 하면 커스텀 도메인 루트 배포와는 맞지 않으므로 1번과 병행할 수 없다.

정해지기 전까지는 아무것도 건드리지 않았다 — 운영 도메인·기존 저장소는 그대로다.

### 7. 배포 주소 조치 (선택 1 + 3 병행)

**선택 1 — 도메인 이전: GitHub 이 거부했다 (오너 조치 필요)**

```
PUT /repos/jungaistar/daegu/pages   cname=daegu.dreamitbiz.com
→ 400 Invalid cname
  "The custom domain `daegu.dreamitbiz.com` is already taken."
```

도메인을 쥐고 있는 저장소는 **jungaistar 계정 밖**에 있다. GitHub 은 한 도메인을
저장소 하나에만 허용하므로, 그쪽에서 커스텀 도메인을 떼기 전까지 이 저장소는 붙일 수 없다.
운영 사이트(daegu.dreamitbiz.com, 2026-08-18 빌드)는 **건드리지 않았다**.

해제되면 여기서 할 일은 두 줄이다:

```bash
npm run deploy:domain                                   # base '/' 로 빌드 + CNAME 동봉
gh api -X PUT repos/jungaistar/daegu/pages -f cname=daegu.dreamitbiz.com
```

**선택 3 — 저장소 Pages 주소에서 뜨게 했다**

| 바꾼 것 | 내용 |
|---|---|
| `vite.config.ts` | `base` 를 `'/daegu/'` 로. 자산이 `/daegu/assets/...` 를 가리킨다 |
| `src/App.tsx` | `<Router basename={import.meta.env.BASE_URL}>` — 라우터가 하위경로를 안다. base 가 `/` 든 `/daegu/` 든 그대로 따라간다 |
| `public/404.html` | 호스트가 `*.github.io` 면 첫 경로 세그먼트를 유지(`pathSegmentsToKeep = 1`), 아니면 0. 두 배포 형태를 한 파일로 처리한다. 제목도 CNU → 대구로 정정 |
| `public/CNAME` | **삭제**. 모든 빌드에 딸려가 하위경로 배포에서 404 처리를 방해했다. 루트 `CNAME` 은 그대로 두고 `build:domain` 이 빌드 후 `dist/` 에 넣는다 |
| `package.json` | `build:domain` / `deploy:domain` 추가 (base `/` + CNAME 동봉) |

배포 후 GitHub Pages CDN 은 `max-age=600` 이라 최대 10분간 이전 빌드가 보인다.

### 8. 막혔던 지점 — Pages 소스 브랜치가 `main` 으로 돌아가 있었다

`gh-pages` 로 배포해도 사이트가 계속 소스 `index.html`(2808 bytes, `/src/main.tsx` 참조)을
내보냈다. 커스텀 404.html 도 무시되고 GitHub 기본 404 가 떴다. 원인은 캐시가 아니라 설정이었다.

```
gh api repos/jungaistar/daegu/pages
→ "source": { "branch": "main", "path": "/" },  "custom_404": false
```

커스텀 도메인 등록(`PUT /pages -f cname=...`)이 400 으로 실패하면서 소스가 `main` 으로
초기화된 것으로 보인다. 되돌린 뒤 **빌드를 명시적으로 요청**해야 반영된다 —
소스 브랜치를 바꿔도 자동 재빌드가 걸리지 않는다.

```bash
gh api -X PUT  repos/jungaistar/daegu/pages -f "source[branch]=gh-pages" -f "source[path]=/"
gh api -X POST repos/jungaistar/daegu/pages/builds     # 이 줄이 없으면 이전 빌드가 계속 뜬다
```

**확인한 최종 상태** — https://jungaistar.github.io/daegu/

| 검증 | 결과 |
|---|---|
| Pages 소스 | `gh-pages` / `/`, `custom_404: true` |
| `index.html` 자산 | `/daegu/assets/index-*.js`, `*.css` → 200 |
| 커스텀 `404.html` | 서비스됨 (`pathSegmentsToKeep` 스크립트 포함) |
| 딥링크 `/daegu/instructor` | 브라우저에서 강사 소개 페이지 정상 렌더 (404 → 클라이언트 리다이렉트) |
| 홈 `/daegu/` | 정상 렌더 |

---

## 2026-08-26 (2) · 프롬프트 학습 3개 하위 페이지 — 대구 맥락으로 개편

### 이식 여부 확인 — 이미 되어 있었다

`cnu.dreamitbiz.com/prompt-eval` 의 학습하기·실습하기·평가하기가 대구에 없다고 보고 이식을 시작했으나,
확인해 보니 **코드베이스 포팅 때 이미 통째로 넘어와 있었다.**

| 확인 방법 | 결과 |
|---|---|
| CNU 번들 `PromptEvalHub-YzXU_mvx.js` 다운로드 후 문장 단위 대조 | CNU 문장 558건 중 대구에 없는 것 **0건** |
| 배포된 대구 사이트에서 3개 페이지 직접 열람 | 구조·문항·시나리오 모두 동일 |
| 좌측 메뉴 | `PromptEvalNav.tsx` 에 학습하기·실습하기·평가하기 그대로 존재 |

### 진짜 문제 — 내용이 CNU/Copilot 맥락이었다

복제는 되어 있었으나 내용이 남의 과정 것이었다. 소스 전체에서 Copilot 계열 언급 **30곳**.
대구 과정은 ChatGPT · Claude · Google Apps Script · Opal/Canva 로 공문·보도자료·회의록·엑셀 집계·
민원 분석·정책 홍보를 다루는데, 학습 자료는 GitHub Copilot IDE·M365 Copilot·Power Platform·
마케팅·React 앱을 예시로 쓰고 있었다.

### 개편 내용

| 파일 | 바꾼 것 |
|---|---|
| `data/prompt-basics.js` | 4대 구성요소 예시를 시청 공문으로. Copilot 유형표 → **도구별 유형표**(ChatGPT·Claude / ChatGPT 데이터분석 / Claude→Apps Script / Opal·Canva). '공무원 업무에서 특히 중요한 것'(개인정보·사실확인·공문 어투) 절 신설. 좋은/나쁜 예시를 공문·보도자료·엑셀·민원분석·회의록으로 교체 |
| `data/prompt-techniques.js` | 섹션 제목 **'Copilot 환경별 기법' → '도구별 프롬프트 기법'**. GitHub/M365/Power Platform 절을 4개 도구 절로 교체. Few-shot 예시를 민원 분류로, Role 예시를 행정·공보·감사·시민 역할로. 페르소나 체이닝을 기획→행정→공보→감사→시민으로. 템플릿 라이브러리를 공문·행정보고서·AI 결과물 검토용으로 |
| `data/prompt-examples.js` | 섹션 제목 **'GitHub Copilot 예시'→'문서 업무 예시'**, **'M365 Copilot 예시'→'데이터·자동화·홍보 예시'**. 채점 예시 전부 대구 업무로. 실습 과제 Level 1~3·팀 과제를 공무원 업무로. '실습 전 공통 점검'(개인정보·비공개자료·사실확인) 신설 |
| `data/prompt-evaluation.js` | 'Copilot 환경별 특화 기준' → **'도구별 특화 기준'**(문서 업무 / 데이터·자동화). 채점 예시를 React 앱 → 안내 공문(16점 D → 86점 A)으로 교체 |
| `data/quiz-questions.js` | Q3 보기를 행정 맥락으로. 평가형 5문항 전부 교체(공문 하나 써줘 / 시청 안내공문 / 시트 자동화 / 민원 분석 / 보도자료). 작성형 5문항 전부 교체(카드뉴스·시트 자동화·회의록·예산분석·결과물 검토) |
| `PromptWorkshop.tsx` | 시나리오 5개 교체 — 마케팅·코드리뷰·학습자료·데이터분석·이메일 → **안내 공문 / 시정 보도자료 / 엑셀 자동화 / 민원·예산 분석 / 정책 홍보 콘텐츠**. 입력창 예시도 시청 공문으로(국/영문) |

SCORE 채점 엔진·루브릭·페이지 구조·라우팅은 건드리지 않았다.

### 검증

- `npm run build` 통과.
- 프리뷰로 3개 페이지 직접 확인 — 학습하기(도구별 유형표), 평가하기(대구 시나리오 6개),
  실습하기(Q3 행정 보기).
- 평가하기에서 실제 공문 프롬프트를 입력해 **자동 채점 동작 확인** (74/100, A등급, 항목별 피드백 표시).
- 데이터 파일에 Copilot·React·마케팅 등 비대구 맥락 잔존 **0건**.

---

## 2026-08-26 (3) · 엑스몬스터 매뉴얼 · 참고사이트 메뉴 신설

상단 메뉴를 요청받은 순서로 배치했다 — 부록 → **엑스몬스터 매뉴얼** → 추천사이트 → **참고사이트**.

### 원본 자료 읽기

`doc/` 의 자료는 저장소에 올리지 않지만(공개 저장소), 내용은 사이트 페이지로 옮겼다.

| 자료 | 읽은 방법 |
|---|---|
| `엑스몬스터 사용자 매뉴얼.pdf` (10p) | poppler 가 없어 Read 툴 실패 → **Node + pdfjs-dist** 로 텍스트 추출(y좌표로 줄 복원) |
| 매뉴얼 화면 캡처 8장 | pdfjs `getOperatorList` 로 이미지 XObject 추출 → pngjs 로 PNG 저장 → **sharp 로 webp 변환 (1.9MB → 216KB)** |
| `광진구 공무원 사례.pptx` (2슬라이드) | pptx 압축 해제 후 `ppt/slides/*.xml` 의 `<a:t>` 텍스트 추출 |

### 엑스몬스터 매뉴얼 (`/xmonster`)

매뉴얼 4개 장을 그대로 옮기고, **대구 업무 활용법 장을 새로 붙였다**(원본에 없는 내용).

| 장 | 출처 |
|---|---|
| 기본 사용법 (5단계) | 매뉴얼 1장 + 캡처 3장 |
| AI 비서(엑스몬) 3종 | 매뉴얼 2장 + 캡처 3장 |
| 개인 설정 (내 프롬프트·내 페르소나) | 매뉴얼 3장 + 캡처 1장 — 부서용 프롬프트 예시 4종 추가 |
| 부가 기능 (웹검색·세션파일·편집/다운로드·Dual Chat·SecureX) | 매뉴얼 4장 + 캡처 1장 |
| **업무 활용법** | 신규 — 업무별 비서 선택표, 이 과정과의 연결, 따라 하는 시나리오 5가지, 발송 전 점검표 |

이미지는 `public/xmonster/` 에 두고 마크다운에서 `~/xmonster/…` 로 참조한다.
`GuidePage` 에 **img 컴포넌트를 추가**해 `~/` 를 `import.meta.env.BASE_URL` 로 바꾸므로,
base 가 `/daegu/` 든 `/` 든 그대로 동작한다.

### 참고사이트 (`/reference`)

광진구 류승인 **주무관**(사용자가 '사무관'이라 했으나 원본 PPTX 표기는 주무관)이 공개한 도구 12종을,
**누구나 따라 할 수 있는 순서**로 정리했다.

| 장 | 내용 |
|---|---|
| 광진구 류승인 주무관 사례 | 무엇을 만들었나, 해결한 업무 문제, 이 과정과의 연결 |
| 직접 따라 해보기 | 1단계 브라우저로 열기 → 2단계 **MCP 연결**(Claude 데스크톱 커넥터 / Claude Code CLI) → 3단계 로컬 설치 |
| 프로젝트 12종 전체 | 버전·도구 수·바로가기 링크, '내 업무에 옮긴다면' 매핑표 |

**링크는 전부 실제 응답을 확인하고 실었다.**

| 확인 | 결과 |
|---|---|
| 웹 6종 (chris/lexdiff/gjdong/welfare/korea100/lunch) | 200 |
| GitHub 저장소 6종 | 200 |
| MCP 서버 5종 (law·stats·patent·archhub·school) | GET 405 = POST 전용, 정상 동작 |
| `school.gomdori.app` 웹앱 | **500 (서버 오류)** — 페이지에 그대로 명시하고 MCP 대안을 안내 |

MCP 연결 안내에 공개 서버 주의사항(개인정보·대외비 입력 금지)을 함께 적었다.

### 검증

- `npm run build` 통과 — `XMonsterGuide` 31.9kB, `ReferenceSites` 21.9kB 청크 생성.
- 프리뷰에서 두 페이지와 상단 메뉴 순서 확인, 사이드바 목차 이동 확인.
- 작은 세로 캡처가 늘어나 보이던 문제 → `.guide-figure` 를 `width:auto; max-width:min(100%,640px)` 로 수정.

### 막혔던 지점 — 이미지가 배포본에서만 커 보였다

 에  를 줬는데 계산값이  로 나왔다.
CSS 는 번들에도 배포본에도 정상 반영되어 있었고, 원인은 **특정도**였다.

| 선택자 | 특정도 | 결과 |
|---|---|---|
|  (site.css) | 0,1,1 | max-width: 100% — 이쪽이 이김 |
|  (practice.css) | 0,1,0 | 무시됨 |

 (0,2,1) 를 함께 지정해 해결했다.
 때문에 첫 스크린샷에서 이미지가 아예 없는 것처럼 보였던 것은 별개이며,
DOM 확인 결과 로드는 정상이었다.

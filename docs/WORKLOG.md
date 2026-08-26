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

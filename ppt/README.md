# 행정업무 자동화 강의교안 (PPTX) 생성기

`/automation` 페이지의 1~8교시 내용을 **따라하기 스타일 강의용 PPTX** 로 만든다.
사이트 화면(`/setup/apps-script`, hufs26 `/setup`)에서 쓰는 디자인 언어를 슬라이드로 그대로 옮겼다.

| | |
|---|---|
| 산출물 | `public/downloads/daegu-automation-lecture_v1.0_20260909.pptx` (97장 · 16:9) |
| 내려받는 곳 | <https://jungaistar.github.io/daegu/downloads/daegu-automation-lecture_v1.0_20260909.pptx> |
| 원본 콘텐츠 | `src/pages/automation/data/auto-0*.js` |
| 화면 그림 | `public/automation/*.svg` (12장, 주황 번호 주석) |
| 디자인 근거 | `src/components/setup/SetupKit.tsx` · `src/styles/setup.css` |

## 다시 만들기

```bash
cd ppt
npm install
node render-svg.mjs   # SVG → PNG (헤드리스 크롬, 2배 크기). 그림이 바뀔 때만
node build.mjs        # PPTX 생성 → ppt/dist/ 와 public/downloads/ 양쪽에
```

`build.mjs` 는 끝에 **슬라이드 밖으로 넘친 단**을 알려 준다. 경고가 나오면 그 슬라이드의 내용을
줄이거나 나눈다 (높이를 어림잡는 계산이라 0.1인치 안쪽 차이는 무시한다).

## 눈으로 확인하기

파워포인트 COM 으로 전 슬라이드를 PNG 로 내보낸다.

```powershell
./verify.ps1 -Pptx ./dist/daegu-automation-lecture_v1.0_20260909.pptx -OutDir ./preview
```

## 구성

| 파일 | 역할 |
|------|------|
| `theme.mjs` | 색·판형·슬라이드 부품 (STEP 배지 · 이 단계의 목표 · ✅ 확인 · 안내 상자 4종 · 프롬프트 상자 · 표 · 목업) |
| `build.mjs` | 슬라이드 명세를 읽어 PPTX 로 그린다. 넘침 검사 포함 |
| `render-svg.mjs` | `public/automation/*.svg` → `ppt/assets/*.png` |
| `content/00-intro.mjs` | 표지 · 하루 시간표 · 전체 흐름 |
| `content/01`~`08` | 1~8교시 (교시 표지 → 개념 → STEP 따라하기 → 완성 점검표) |
| `content/09-cases.mjs` | 실습 사례집 · 부서별 프롬프트 · 류승인 주무관 도구 |
| `content/index.mjs` | 슬라이드 순서 |

### 슬라이드 명세 쓰는 법

```js
{
  kind: 'step',                  // 'cover' | 'divider' | 'step' | (생략 시 일반 슬라이드)
  section: '1교시 · 바이브코딩 이해',
  step: 'STEP 4', breadcrumb: '1교시 · 말로 설명해서 도구 만들기',
  title: '붙여넣고 **실행합니다**',   // **굵게**, `고정폭` 사용 가능
  cols: [
    { w: 1.18, blocks: [['image', 'auto-apps-script']] },
    { w: 0.82, blocks: [
      ['goal', '이 단계에서 이루는 것'],
      ['actions', ['첫째로 …', '둘째로 …']],
      ['check', '여기까지 되면 통과'],
      ['note', 'warn', '제목', '본문'],   // tip | warn | term | stuck | ok
      ['code', '프롬프트 원문', { label: '복사해서 쓰는 프롬프트' }],
      ['table', [['머리', '글'], ['본문', '행']], { colW: [1, 2] }],  // colW 는 비율
    ] },
  ],
}
```

`콘텐츠를 고쳤다면 build.mjs 를 다시 돌리고, public/downloads/ 의 파일까지 커밋한다.`
사이트에 반영하려면 `npm run deploy` (저장소 루트에서).

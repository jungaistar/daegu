import{l as t}from"./index-BrGMx2_T.js";import{G as e}from"./GuidePage-CB9H4e2i.js";/* empty css                 */import"./SEOHead-BOR2dgqX.js";import"./index-CYM3Tcsi.js";import"./index-ByXXgH3E.js";const o={id:"ref-intro",icon:"fa-user-gear",title:"광진구 류승인 주무관 사례",titleEn:"The Case of Ryu Seung-in",sections:[{title:"누구인가",titleEn:"Who He Is",content:`### 프로필

| 항목 | 내용 |
|------|------|
| 소속 | 서울 **광진구청** |
| 직급 | **주무관** (현직 공무원) |
| 하는 일 | 공공데이터 · AI · 문서처리 · 검색 기술로 **일하는 방식을 더 쉽고 스마트하게** |
| 포트폴리오 | [chris.gomdori.app](https://chris.gomdori.app) |
| 저장소 | [github.com/chrisryugj](https://github.com/chrisryugj) |
| 다루는 분야 | MCP · Legal · Statistics · Patent · Document · AI · Web |

> **"Hello, I build things that make work smarter"** — 본인 포트폴리오 첫 문장

### 한눈에 보는 숫자

| 숫자 | 내용 |
|------|------|
| **12+** | 공개 프로젝트 |
| **100+** | MCP 도구 |
| **50+** | 공공 API 연동 |
| 웹·앱·확장 | 다양한 배포 형태 |

**현직 공무원 신분으로 12개 이상의 실무 도구를 직접 개발·공개해 운영 중**입니다. 외주도, 별도 예산 사업도 아닙니다. 본인 업무에서 불편했던 것을 하나씩 도구로 만든 결과입니다.

### 쓰는 기술

AI/LLM · MCP · Python · TypeScript · Node.js · React · Next.js · 공공 API · 데이터 분석 · 문서 처리 · 검색/OCR · 시각화

> 이 목록에 겁먹을 필요 없습니다. **처음부터 이걸 다 알고 시작한 것이 아닙니다.** 도구를 하나씩 만들다 보니 쌓인 것입니다.

### 본인의 말

> "복잡한 일을 단순하게, 필요한 정보를 정확하게, 누구나 쉽게 사용할 수 있도록.
> **작은 도구들이 모여 큰 변화를 만듭니다.**"

### 이 자료의 출처

이 사례는 대구시가 전달한 **『광진구 공무원 사례』 발표자료**를 그대로 옮긴 것입니다. 원본 슬라이드는 *부산광역시 남구 AI 역량 종합계획* 발표자료 안에 **공무원 자체 개발 사례**로 인용되어 있었습니다. 즉 이미 여러 지자체가 참고하고 있는 사례입니다.

각 도구의 접속 상태는 **2026-08-26에 직접 확인**했으며, 확인 결과는 뒤 장에 그대로 적었습니다.`,contentEn:`### Profile

| Item | Detail |
|------|--------|
| Affiliation | **Gwangjin-gu Office**, Seoul |
| Position | **Junior officer** (serving public official) |
| Focus | Making work smarter with public data, AI, document processing and search |
| Portfolio | [chris.gomdori.app](https://chris.gomdori.app) |
| Repositories | [github.com/chrisryugj](https://github.com/chrisryugj) |

> **"Hello, I build things that make work smarter"**

### The numbers

**12+** public projects, **100+** MCP tools, **50+** public API integrations, delivered as web apps, desktop apps and browser extensions — all built while serving as a public officer, with no outsourcing and no dedicated budget.

### Stack

AI/LLM · MCP · Python · TypeScript · Node.js · React · Next.js · public APIs · data analysis · document processing · search/OCR · visualization

> Don't be intimidated by this list. **He did not know all of it when he started** — it accumulated one tool at a time.

### In his words

> "Make complex things simple, make needed information accurate, make it usable by anyone. **Small tools add up to big change.**"

### Source

This case comes from the *Gwangjin-gu Public Officer Case* deck provided by Daegu City. The original slide appears inside a *Busan Nam-gu AI capability plan* presentation, cited as an example of an officer-built toolset — several local governments already reference it. Availability of each tool was **verified directly on 2026-08-26**; the results are recorded in a later chapter.`},{title:"무엇을 만들었는가 — 공개 포트폴리오",titleEn:"What He Built",content:`발표자료에 정리된 **유형별 도구와 해결한 업무 문제**입니다. 각 도구가 어떤 불편에서 나왔는지 보세요.

| 유형 | 도구 | 해결한 업무 문제 |
|------|------|----------------|
| **법령·규제** | korean-law-mcp — 법제처 42개 API를 10개 도구로 통합 | 법령·판례·자치법규·조약·해석례를 한 번에 검색 |
| **통계·데이터** | korean-stats-mcp — KOSIS 통계 (도구 14개) | 한국어로 물으면 공식 수치를 출처와 함께 회신 |
| **지식재산** | korean-patent-mcp — KIPRIS 특허·상표·디자인 | 특허·실용신안 조사 업무 자동화 |
| **건축·인허가** | archhub-mcp — 건축HUB 건축물대장·인허가 데이터 | 건축 인허가 민원 처리 시 대장 조회 자동화 |
| **교육행정** | schoolinfo-mcp — 학교알리미 공시정보 (도구 13개) | 학교별 급식·학사일정·수행평가 조회 |
| **문서처리** | kordoc — HWP·HWPX·PDF·DOCX·XLSX → 마크다운 | 한글 공문서 자동 변환·양식채움·문서diff |
| **검색·법무** | Anything(Docufinder) · lexdiff | 내 PC 안의 자료 검색, 개정 전후 법령 비교 자동화 |
| **주소·정책** | gjdong · 온톨로지 시각화 | 민원 서식 주소 표준화, 복잡한 제도 체계 파악 |

### 이 표에서 놓치기 쉬운 것

발표자료의 **발표자 노트**에 적힌 한 문장이 이 사례의 핵심입니다.

> "모두 이미 개방된 공공 API입니다.
> **새 데이터를 만든 것이 아니라, 흩어진 공공자원을 업무 흐름에 붙였다는 점이 핵심입니다.**"

무슨 뜻인지 풀어보면 이렇습니다.

| 오해 | 실제 |
|------|------|
| 새로운 시스템을 개발했다 | **이미 공개된 공공 API**를 가져다 썼다 |
| 데이터를 새로 수집했다 | 법제처·KOSIS·KIPRIS·건축HUB에 **이미 있던 것**이다 |
| 대단한 기술이 필요하다 | 흩어진 것을 **내 업무 흐름에 붙이는 일**이다 |
| 예산과 조직이 필요하다 | 담당자 한 명이 시작했다 |

**대구시에도 그대로 적용됩니다.** 대구시가 쓰는 공공 API도 이미 열려 있습니다. 없는 것을 만드는 게 아니라, **있는 것을 내 업무 자리에 가져다 놓는 일**입니다.

### 배포 형태도 여러 가지

| 형태 | 예 | 쓰는 사람 |
|------|-----|----------|
| 웹앱 | lexdiff, gjdong, 온톨로지 시각화 | 주소만 열면 누구나 |
| MCP 서버 | 법령·통계·특허·건축·학교 5종 | AI에 연결해서 쓰는 사람 |
| npm 패키지 | kordoc | 개발 환경이 있는 사람 |
| 데스크톱 앱 | Anything(Docufinder) | 내 PC 문서를 다루는 사람 |
| 브라우저 확장 | gjdong | 어느 화면에서든 쓰고 싶은 사람 |

> **가장 쉬운 것부터 쓰면 됩니다.** 다음 장 '직접 따라 해보기' 는 설치가 필요 없는 웹앱부터 순서를 잡아 두었습니다.`,contentEn:`Tools by category and the work problem each solved, as recorded in the source deck.

| Type | Tool | Problem solved |
|------|------|----------------|
| **Law** | korean-law-mcp — 42 government APIs as 10 tools | Search statutes, precedents, ordinances, treaties at once |
| **Statistics** | korean-stats-mcp — KOSIS (14 tools) | Ask in Korean, get official figures with sources |
| **IP** | korean-patent-mcp — KIPRIS | Automates patent and utility model research |
| **Building** | archhub-mcp — Building HUB data | Automates ledger lookup for permit cases |
| **Education** | schoolinfo-mcp (13 tools) | School meals, calendars, assessments |
| **Documents** | kordoc — Korean formats to Markdown | Converts official documents, fills forms, diffs |
| **Search & legal** | Anything, lexdiff | Local document search; statute comparison |
| **Address & policy** | gjdong, ontology views | Address standardization; mapping welfare systems |

### The line that is easy to miss

From the speaker notes of the source deck:

> "These are all **already-open public APIs**. The point is not that new data was created, but that **scattered public resources were connected to the work itself**."

| Misreading | Reality |
|------------|---------|
| He built new systems | He used **already-published public APIs** |
| He collected new data | It already existed at the source agencies |
| It takes great technical skill | It takes connecting what exists **to your own workflow** |
| It takes budget and a team | One person started it |

**The same holds for Daegu.** The public APIs are already open. The work is not inventing something new — it is bringing what exists to where you work.

### Delivery formats

Web apps (open a URL), MCP servers (connect to your AI), an npm package, a desktop app, and a browser extension.

> Start with the easiest. The next chapter is ordered from no-install web apps upward.`},{title:"왜 이 사례를 보는가",titleEn:"Why This Case Matters Here",content:`이 사례를 대구 교육과정에 넣은 이유는 세 가지입니다.

### 1. 오늘 배우는 것의 연장선이다

| 이 사이트에서 배우는 것 | 이 사례에서 확장된 모습 |
|---------------------|---------------------|
| [행정업무 자동화](/automation) — Apps Script로 시트 자동화 | 공공 API를 묶어 상시 운영되는 도구로 |
| [프롬프트 학습](/prompt-eval) — AI에게 코드 생성시키기 | 100개 이상의 MCP 도구로 축적 |
| 내 업무 자동화 흐름 설계 | 같은 고민을 하는 전국 공무원이 함께 사용 |

**행정업무 자동화 과정에서 오늘 만드는 도구**와 시작점이 같습니다. 규모만 다릅니다.

### 2. 공무원이 만들어야 하는 이유를 보여준다

| 왜 담당자가 만드나 | 설명 |
|-----------------|------|
| 예외 상황을 안다 | 팀마다 양식이 다르다는 걸 개발자는 모릅니다 |
| 판단 기준을 안다 | "이 경우는 제외" 를 정할 수 있는 사람은 담당자입니다 |
| 바로 고칠 수 있다 | 요청·대기 없이 그 자리에서 수정합니다 |
| 쓸모를 안다 | 만들어 놓고 안 쓰는 도구가 나오지 않습니다 |

### 3. 처음부터 12개가 아니었다

이 부분이 가장 중요합니다.

| 오해 | 실제 |
|------|------|
| 대단한 사람이라 가능했다 | 매주 30분씩 잡아먹는 일 **하나**에서 시작했습니다 |
| 시간이 많았을 것이다 | 현직 공무원으로 **일하면서** 만들었습니다 |
| 개발을 원래 잘했다 | 도구를 만들면서 기술이 쌓였습니다 |
| 우리는 못 한다 | 도구도 방법도 이미 공개되어 있습니다 |

### 대구시 담당자가 지금 할 수 있는 것

| 단계 | 무엇을 | 어디서 |
|------|-------|--------|
| 1 | 설치 없이 도구를 직접 써본다 | [다음 장 '직접 따라 해보기'](/reference) |
| 2 | 내 업무 하나를 골라 자동화한다 | [행정업무 자동화 과정](/automation) |
| 3 | 공공 API를 AI에 연결해 쓴다 | 다음 장 2단계 (MCP 연결) |
| 4 | 만든 도구를 부서에 퍼뜨린다 | 자동화 과정 7·8교시 적용계획서 |

> 오늘 하루에 12개를 만들 필요는 없습니다. **하나면 됩니다.** 그 하나가 다음 하나를 부릅니다.`,contentEn:`Three reasons this case is part of the Daegu curriculum.

### 1. It is the same thing you are learning, further along

| What you learn here | How it extends |
|---------------------|----------------|
| [Administrative automation](/automation) — Apps Script in a sheet | Public APIs combined into continuously running tools |
| [Prompt learning](/prompt-eval) — getting AI to write code | Accumulated into 100+ MCP tools |
| Designing your own automation flow | Used by officers nationwide facing the same problem |

### 2. It shows why the officer should build it

The person doing the work knows the exceptions, knows the judgment criteria, can fix it immediately, and knows whether it is actually useful.

### 3. It did not start with twelve

| Misreading | Reality |
|------------|---------|
| He must be exceptional | It started with **one** task eating 30 minutes a week |
| He must have had time | He built it **while working** as a public officer |
| He was always a developer | The skill accumulated through building |
| We couldn't do this | The tools and the method are already public |

### What a Daegu officer can do now

Try the tools with no install, automate one of your own tasks, connect public APIs to your AI, then spread the tool through your division.

> You do not need twelve today. **One is enough** — and the first one calls the next.`}]},a={id:"ref-try",icon:"fa-hand-pointer",title:"직접 따라 해보기",titleEn:"Try It Yourself",sections:[{title:"1단계 · 설치 없이 바로 열어보기",titleEn:"Step 1 — Open in a Browser",content:`가장 쉬운 시작입니다. **브라우저에서 주소만 열면** 되는 것들부터 보세요. 설치도, 계정도 필요 없습니다.

| 열어볼 것 | 주소 | 무엇을 보나 |
|----------|------|------------|
| 프로젝트 모아보기 | [chris.gomdori.app](https://chris.gomdori.app) | 12개 프로젝트 전체를 한 화면에서 |
| 법령 비교 (lexdiff) | [lexdiff.gomdori.app](https://lexdiff.gomdori.app) | 개정 전후 법령을 나란히 비교 |
| 주소 표준화 (gjdong) | [gjdong.vercel.app](https://gjdong.vercel.app) | 뒤죽박죽 주소를 표준주소로 정리 |
| 복지 제도 지식그래프 | [chris.gomdori.app/welfare](https://chris.gomdori.app/welfare) | 복잡한 복지 제도를 그림으로 |
| 국가 제도 시각화 | [chris.gomdori.app/korea100](https://chris.gomdori.app/korea100) | 제도 체계를 온톨로지로 |
| 점심 뭐먹지 | [chris.gomdori.app/lunch](https://chris.gomdori.app/lunch) | 막내들 점심 고민 해결 |

### 먼저 이걸 해보세요 — gjdong으로 주소 정리

민원 서식에 들어온 주소가 제각각일 때 쓰는 도구입니다.

1. [gjdong.vercel.app](https://gjdong.vercel.app) 을 엽니다
2. 정리하고 싶은 주소 텍스트를 붙여넣습니다
3. 표준주소로 정리된 결과를 확인합니다

브라우저 확장프로그램으로 설치하면 **어느 화면에서든 주소를 드래그**해 바로 정리할 수 있습니다.

### 그다음 · lexdiff로 법령 비교

개정 전후 조문을 눈으로 대조하던 일을 대신합니다.

1. [lexdiff.gomdori.app](https://lexdiff.gomdori.app) 접속
2. 비교할 법령을 선택하거나 조문을 붙여넣기
3. 바뀐 부분이 표시된 결과 확인

> **학교알리미 웹앱(school.gomdori.app)은 현재 접속되지 않습니다(서버 오류).** 같은 기능을 MCP로는 쓸 수 있습니다 — 2단계를 보세요. 서비스 상태는 수시로 바뀔 수 있으니 안 열리면 [GitHub](https://github.com/chrisryugj) 에서 최신 상태를 확인하세요.`,contentEn:`Start with the ones that need **nothing but a browser** — no install, no account.

| Open this | Address | What you see |
|-----------|---------|--------------|
| Project portfolio | [chris.gomdori.app](https://chris.gomdori.app) | All 12 projects on one screen |
| Statute comparison | [lexdiff.gomdori.app](https://lexdiff.gomdori.app) | Before/after statute diff |
| Address standardizer | [gjdong.vercel.app](https://gjdong.vercel.app) | Messy addresses into standard form |
| Welfare knowledge graph | [chris.gomdori.app/welfare](https://chris.gomdori.app/welfare) | Welfare systems as a graph |
| National systems | [chris.gomdori.app/korea100](https://chris.gomdori.app/korea100) | Institutional structure as ontology |
| Lunch picker | [chris.gomdori.app/lunch](https://chris.gomdori.app/lunch) | Solves the daily lunch debate |

> **The school web app (school.gomdori.app) is currently returning a server error.** The same capability is available over MCP — see step 2.`},{title:"2단계 · AI에 MCP 도구 연결하기",titleEn:"Step 2 — Connect MCP Tools to Your AI",content:`여기가 이 사례의 핵심입니다. **MCP(Model Context Protocol)** 는 AI에게 바깥 도구를 붙여주는 규격입니다. 연결해 두면 Claude 같은 AI가 **법제처·KOSIS·KIPRIS 같은 공공 데이터를 직접 조회**해서 답합니다.

### 무엇이 달라지나

| 연결 전 | 연결 후 |
|---------|---------|
| "이 법 조문 알려줘" → 기억에 의존, 틀릴 수 있음 | 법제처 API를 직접 조회해 **출처와 함께** 회신 |
| 통계를 찾아 KOSIS를 직접 뒤짐 | "작년 대구 청년 고용률" → **공식 수치 + 출처** |
| 건축물대장을 시스템에서 일일이 조회 | 대장 조회를 대화로 처리 |

### 연결할 수 있는 서버 5종

| 서버 | 주소 | 도구 수 |
|------|------|---------|
| 법령 (korean-law-mcp) | \`https://mcp.gomdori.app/law\` | 10개 노출 (전체 98개) |
| 통계 (korean-stats-mcp) | \`https://mcp.gomdori.app/stats\` | 14개 |
| 특허 (korean-patent-mcp) | \`https://mcp.gomdori.app/patent\` | 7개 |
| 건축HUB (archhub-mcp) | \`https://mcp.gomdori.app/archhub\` | 12개 |
| 학교알리미 (schoolinfo-mcp) | \`https://mcp.gomdori.app/school\` | 13개 |

### 방법 A · Claude 데스크톱 앱에서 (권장)

설치 파일을 만질 필요 없이 화면에서 추가합니다.

1. Claude 데스크톱 앱을 엽니다
2. **설정(Settings) → 커넥터(Connectors)** 로 들어갑니다
3. **커스텀 커넥터 추가**를 누릅니다
4. 이름과 주소를 입력합니다 — 예: 이름 \`법령 검색\`, 주소 \`https://mcp.gomdori.app/law\`
5. 저장하고 대화창에서 물어봅니다 — "지방자치법 제13조 내용 알려줘"

### 방법 B · Claude Code(터미널)에서

터미널에 한 줄씩 붙여넣으면 됩니다.

\`\`\`bash
claude mcp add --transport http korean-law    https://mcp.gomdori.app/law
claude mcp add --transport http korean-stats  https://mcp.gomdori.app/stats
claude mcp add --transport http korean-patent https://mcp.gomdori.app/patent
claude mcp add --transport http archhub       https://mcp.gomdori.app/archhub
claude mcp add --transport http schoolinfo    https://mcp.gomdori.app/school
\`\`\`

연결 확인:

\`\`\`bash
claude mcp list
\`\`\`

### 연결한 뒤 이렇게 물어보세요

| 서버 | 질문 예시 |
|------|----------|
| 법령 | "지방공무원 복무규정에서 연가 관련 조문을 찾아서 원문과 함께 알려줘" |
| 통계 | "최근 3년 대구광역시 청년 고용률을 출처와 함께 표로 정리해줘" |
| 건축HUB | "이 주소의 건축물대장 정보를 조회해서 용도·연면적·사용승인일을 알려줘" |
| 학교알리미 | "대구 ○○중학교의 이번 달 급식 식단과 학사일정을 정리해줘" |
| 특허 | "'스마트 가로등' 관련 최근 특허 출원 동향을 정리해줘" |

> **주소가 안 붙으면** — 각 프로젝트의 GitHub 저장소 README에 최신 연결 주소와 방법이 적혀 있습니다. [github.com/chrisryugj](https://github.com/chrisryugj) 에서 해당 저장소를 확인하세요. 공개 서버라 점검·개편으로 주소가 바뀔 수 있습니다.

> **업무 자료 주의** — 공개된 외부 서버입니다. 개인정보나 대외비가 든 내용을 그대로 넣지 마세요. 조회는 공개 데이터 기준으로만 쓰는 것이 안전합니다.`,contentEn:`This is the heart of the case. **MCP (Model Context Protocol)** lets an AI use external tools. Once connected, Claude can query public data sources directly and answer **with sources**.

### The five servers

| Server | Address | Tools |
|--------|---------|-------|
| Law | \`https://mcp.gomdori.app/law\` | 10 exposed (98 total) |
| Statistics | \`https://mcp.gomdori.app/stats\` | 14 |
| Patents | \`https://mcp.gomdori.app/patent\` | 7 |
| Building HUB | \`https://mcp.gomdori.app/archhub\` | 12 |
| School info | \`https://mcp.gomdori.app/school\` | 13 |

### Option A · Claude desktop app

1. Open the Claude desktop app
2. Go to **Settings → Connectors**
3. Choose **Add custom connector**
4. Enter a name and the address
5. Save and ask a question

### Option B · Claude Code (terminal)

\`\`\`bash
claude mcp add --transport http korean-law    https://mcp.gomdori.app/law
claude mcp add --transport http korean-stats  https://mcp.gomdori.app/stats
claude mcp add --transport http korean-patent https://mcp.gomdori.app/patent
claude mcp add --transport http archhub       https://mcp.gomdori.app/archhub
claude mcp add --transport http schoolinfo    https://mcp.gomdori.app/school
\`\`\`

> **If a connection fails**, check the project's GitHub README at [github.com/chrisryugj](https://github.com/chrisryugj) — these are public servers and addresses may change.

> **Careful with work material** — these are public external servers. Do not paste personal or confidential data.`},{title:"3단계 · 내 PC에 설치해 쓰기",titleEn:"Step 3 — Install Locally",content:`조금 더 손이 가지만, **내 PC 안의 자료**를 다루는 도구들입니다.

### kordoc — 한글 공문서를 마크다운으로

HWP·HWPX·PDF·DOCX·XLSX를 마크다운으로 바꿔 AI가 읽을 수 있게 만듭니다. 양식채움과 문서 비교(diff)도 됩니다.

\`\`\`bash
npm i kordoc
\`\`\`

| 쓰임 | 설명 |
|------|------|
| 문서 변환 | 한글 공문서를 AI가 읽는 형식으로 |
| 양식 채움 | 정해진 서식에 값을 넣어 문서 생성 |
| 문서 diff | 개정 전후 문서의 바뀐 곳 비교 |
| SVG 렌더 | 문서를 이미지로 |

MCP 도구 15개를 함께 제공합니다 → [GitHub](https://github.com/chrisryugj/kordoc)

### Anything (Docufinder) — 내 PC 문서 내용까지 검색

파일명이 아니라 **문서 안의 내용**으로 찾는 데스크톱 앱입니다. 수식 검색과 OCR을 지원합니다.

→ [GitHub에서 받기](https://github.com/chrisryugj/Docufinder)

> 예전 기안문에서 문구 하나를 찾을 때, 폴더를 뒤지는 대신 내용으로 검색합니다.

### 설치가 부담스럽다면

1단계(브라우저)와 2단계(MCP 연결)만으로도 충분합니다. 3단계는 문서 작업이 특히 많은 부서에서 시도해 보세요.`,contentEn:`A bit more setup, but these work on **files on your own PC**.

### kordoc — Korean office documents to Markdown

Converts HWP, HWPX, PDF, DOCX, XLSX to Markdown so AI can read them; also fills forms and diffs documents.

\`\`\`bash
npm i kordoc
\`\`\`

Ships 15 MCP tools → [GitHub](https://github.com/chrisryugj/kordoc)

### Anything (Docufinder) — search inside your own documents

A desktop app that searches document **contents**, not just filenames, with formula search and OCR.

→ [Get it on GitHub](https://github.com/chrisryugj/Docufinder)`}]},i={id:"ref-projects",icon:"fa-diagram-project",title:"프로젝트 12종 전체",titleEn:"All 12 Projects",sections:[{title:"한눈에 보는 목록",titleEn:"The Full List",content:`류승인 주무관이 공개한 프로젝트 전체입니다. **바로가기 열의 링크를 누르면 해당 도구로 이동**합니다.

### 공공데이터 MCP 5종

| # | 프로젝트 | 하는 일 | 바로가기 |
|---|---------|--------|---------|
| 1 | **korean-law-mcp** \`v4.7.4\` | 법령·판례·행정규칙·자치법규·조약·해석례 — 법제처 42개 API를 도구 10개로 통합 | [GitHub](https://github.com/chrisryugj/korean-law-mcp) · \`mcp.gomdori.app/law\` |
| 2 | **korean-stats-mcp** \`v1.8.5\` | KOSIS 통계 — 한국어로 물으면 공식 수치가 출처와 함께 (도구 14개) | \`mcp.gomdori.app/stats\` |
| 3 | **korean-patent-mcp** \`v0.2.1\` | KIPRIS 특허·실용신안·상표·디자인 검색 (도구 7개) | [GitHub](https://github.com/chrisryugj/korean-patent-mcp) · \`mcp.gomdori.app/patent\` |
| 4 | **archhub-mcp** \`v0.4.0\` | 건축HUB 건축물대장·인허가 데이터 (도구 12개) | \`mcp.gomdori.app/archhub\` |
| 5 | **schoolinfo-mcp** \`v0.3.0\` | 학교알리미 공시정보 — 학교 이름만 넣으면 급식·수행평가·학사일정 (도구 13개) | \`mcp.gomdori.app/school\` |

> 다섯 서버를 한 곳에서 제공하는 통합 호스트가 [mcp.gomdori.app](https://mcp.gomdori.app) 입니다. 연결 방법은 '직접 따라 해보기 → 2단계'에 있습니다.

### 문서 처리 · 검색

| # | 프로젝트 | 하는 일 | 바로가기 |
|---|---------|--------|---------|
| 6 | **kordoc** \`v4.1.0\` | 한국 문서(HWP·HWPX·PDF·DOCX·XLSX) → 마크다운. 양식채움·문서diff·SVG 렌더 (MCP 도구 15개) | [GitHub](https://github.com/chrisryugj/kordoc) · \`npm i kordoc\` |
| 7 | **Anything (Docufinder)** | 로컬 문서 내용까지 검색하는 데스크톱 앱. 수식 검색·OCR | [GitHub](https://github.com/chrisryugj/Docufinder) |

### 법무 · 행정

| # | 프로젝트 | 하는 일 | 바로가기 |
|---|---------|--------|---------|
| 8 | **lexdiff** | 공공 Legal AI — 법령 비교·분석 (BYOK 지원) | [웹](https://lexdiff.gomdori.app) · [GitHub](https://github.com/chrisryugj/lexdiff) |
| 9 | **gjdong** | 브라우저에서 주소를 드래그하면 표준주소로 정리. 확장프로그램 + 웹앱 | [웹](https://gjdong.vercel.app) · [GitHub](https://github.com/chrisryugj/gjdong) |

### 시각화 · 그 외

| # | 프로젝트 | 하는 일 | 바로가기 |
|---|---------|--------|---------|
| 10 | **온톨로지 시각화** | 복지·국가 제도 지식그래프 | [복지](https://chris.gomdori.app/welfare) · [제도](https://chris.gomdori.app/korea100) |
| 11 | **포트폴리오** | 프로젝트 모아보기 | [chris.gomdori.app](https://chris.gomdori.app) |
| 12 | **점심 뭐먹지** | 막내들 점심 고민 해결 | [바로가기](https://chris.gomdori.app/lunch) |

### 쓰인 기술

AI/LLM · MCP · Python · TypeScript · Node.js · React · Next.js · 공공 API · 데이터 분석 · 문서 처리 · 검색/OCR · 시각화

> 더 많은 프로젝트는 [github.com/chrisryugj](https://github.com/chrisryugj) 에서 볼 수 있습니다.

### 내 업무에 옮긴다면

| 우리 부서 상황 | 참고할 프로젝트 | 시작점 |
|---------------|---------------|--------|
| 법령·조례를 자주 찾는다 | korean-law-mcp · lexdiff | MCP 연결 후 조문 검색부터 |
| 통계 수치를 보고서에 자주 쓴다 | korean-stats-mcp | "출처와 함께" 물어보기 |
| 한글 공문서가 산더미다 | kordoc | 문서 변환 → AI 요약 흐름 |
| 민원 주소가 제각각이다 | gjdong | 웹에서 바로 붙여넣기 |
| 제도 설명이 늘 어렵다 | 온톨로지 시각화 | 그림으로 설명하는 방식 참고 |
| 예전 문서를 못 찾는다 | Anything(Docufinder) | 내용 검색으로 전환 |

> 이 과정 **고급 · AI 기반 데이터 분석 및 활용**의 '바이브 코딩 자동화 도구 제작'에서, 이런 도구를 직접 만드는 첫 단계를 실습합니다. 처음부터 12개를 만들 필요는 없습니다. **매주 30분씩 잡아먹는 일 하나**부터 시작하세요.`,contentEn:`Every project published by Ryu Seung-in. **Follow the link in the last column** to open each tool.

### Five public-data MCP servers

| # | Project | What it does | Link |
|---|---------|--------------|------|
| 1 | **korean-law-mcp** \`v4.7.4\` | Statutes, precedents, ordinances, treaties — 42 government APIs as 10 tools | [GitHub](https://github.com/chrisryugj/korean-law-mcp) · \`mcp.gomdori.app/law\` |
| 2 | **korean-stats-mcp** \`v1.8.5\` | KOSIS statistics — ask in Korean, get official figures with sources (14 tools) | \`mcp.gomdori.app/stats\` |
| 3 | **korean-patent-mcp** \`v0.2.1\` | KIPRIS patent, utility model, trademark, design search (7 tools) | [GitHub](https://github.com/chrisryugj/korean-patent-mcp) · \`mcp.gomdori.app/patent\` |
| 4 | **archhub-mcp** \`v0.4.0\` | Building HUB ledger and permit data (12 tools) | \`mcp.gomdori.app/archhub\` |
| 5 | **schoolinfo-mcp** \`v0.3.0\` | School disclosure info — meals, assessments, calendars (13 tools) | \`mcp.gomdori.app/school\` |

### Documents and search

| # | Project | What it does | Link |
|---|---------|--------------|------|
| 6 | **kordoc** \`v4.1.0\` | Korean documents to Markdown; form filling, diff, SVG render (15 MCP tools) | [GitHub](https://github.com/chrisryugj/kordoc) · \`npm i kordoc\` |
| 7 | **Anything (Docufinder)** | Desktop app searching document contents, with formula search and OCR | [GitHub](https://github.com/chrisryugj/Docufinder) |

### Legal and administrative

| # | Project | What it does | Link |
|---|---------|--------------|------|
| 8 | **lexdiff** | Public legal AI — statute comparison and analysis (BYOK) | [Web](https://lexdiff.gomdori.app) · [GitHub](https://github.com/chrisryugj/lexdiff) |
| 9 | **gjdong** | Drag an address in the browser to standardize it — extension plus web app | [Web](https://gjdong.vercel.app) · [GitHub](https://github.com/chrisryugj/gjdong) |

### Visualization and more

| # | Project | What it does | Link |
|---|---------|--------------|------|
| 10 | **Ontology visualization** | Welfare and national-system knowledge graphs | [Welfare](https://chris.gomdori.app/welfare) · [Systems](https://chris.gomdori.app/korea100) |
| 11 | **Portfolio** | All projects in one place | [chris.gomdori.app](https://chris.gomdori.app) |
| 12 | **Lunch picker** | Settles the daily lunch question | [Open](https://chris.gomdori.app/lunch) |

### Stack

AI/LLM · MCP · Python · TypeScript · Node.js · React · Next.js · public APIs · data analysis · document processing · search/OCR · visualization

> You don't need to build twelve. Start with **the one task that eats 30 minutes every week**.`}]};function h(){return t.jsx(e,{seoTitle:"참고사이트",seoTitleEn:"Reference Sites",seoDescription:"현직 공무원이 직접 만든 실무 도구 12종 — 법령·통계·특허·건축·문서처리 MCP와 웹 도구를 따라 해보는 안내",path:"/reference",dataFiles:[o,a,i]})}export{h as default};

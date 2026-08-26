export default {
  id: 'ref-intro',
  icon: 'fa-user-gear',
  title: '광진구 류승인 주무관 사례',
  titleEn: 'The Case of Ryu Seung-in',
  sections: [
    {
      title: '누구인가',
      titleEn: 'Who He Is',
      content: `### 프로필

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

각 도구의 접속 상태는 **2026-08-26에 직접 확인**했으며, 확인 결과는 뒤 장에 그대로 적었습니다.`,
      contentEn: `### Profile

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

This case comes from the *Gwangjin-gu Public Officer Case* deck provided by Daegu City. The original slide appears inside a *Busan Nam-gu AI capability plan* presentation, cited as an example of an officer-built toolset — several local governments already reference it. Availability of each tool was **verified directly on 2026-08-26**; the results are recorded in a later chapter.`,
    },
    {
      title: '무엇을 만들었는가 — 공개 포트폴리오',
      titleEn: 'What He Built',
      content: `발표자료에 정리된 **유형별 도구와 해결한 업무 문제**입니다. 각 도구가 어떤 불편에서 나왔는지 보세요.

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

> **가장 쉬운 것부터 쓰면 됩니다.** 다음 장 '직접 따라 해보기' 는 설치가 필요 없는 웹앱부터 순서를 잡아 두었습니다.`,
      contentEn: `Tools by category and the work problem each solved, as recorded in the source deck.

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

> Start with the easiest. The next chapter is ordered from no-install web apps upward.`,
    },
    {
      title: '왜 이 사례를 보는가',
      titleEn: 'Why This Case Matters Here',
      content: `이 사례를 대구 교육과정에 넣은 이유는 세 가지입니다.

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

> 오늘 하루에 12개를 만들 필요는 없습니다. **하나면 됩니다.** 그 하나가 다음 하나를 부릅니다.`,
      contentEn: `Three reasons this case is part of the Daegu curriculum.

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

> You do not need twelve today. **One is enough** — and the first one calls the next.`,
    },
  ],
};

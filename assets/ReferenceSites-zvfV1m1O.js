import{l as s}from"./index-B4dcRgE5.js";import{G as n}from"./GuidePage-CHDZH-Mu.js";/* empty css                 */import"./SEOHead-D5Knz0BO.js";import"./index-C2T2D3R5.js";import"./index-rtNJpw6k.js";const e={id:"ref-intro",icon:"fa-user-gear",title:"광진구 류승인 주무관 사례",titleEn:"The Case of Ryu Seung-in",sections:[{title:"누구인가",titleEn:"Who He Is",content:`### 프로필

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

> You do not need twelve today. **One is enough** — and the first one calls the next.`}]},t={title:"1단계 따라하기 · 설치 없이 브라우저에서 열어보기",titleEn:"Step 1 Hands-on — Open It in a Browser",content:`**소요 20분 · 준비물은 브라우저뿐입니다. 설치도 계정도 필요 없습니다.**

주소만 열면 되는 것부터 봅니다. 아래 다섯 단계를 순서대로 따라 하면 오늘 바로 업무에 쓸 수 있는 도구 두 개를 손에 넣습니다. 그림의 주황 번호와 오른쪽 설명 번호가 같습니다.

> **실제 민원 자료로 하지 마세요.** 처음 한 번은 예시 주소나 공개된 조례로 해 보고, 손에 익은 뒤에 업무 자료를 다루세요.

<div class="guide-walk-flow">
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">1</span>도구 12종 훑기</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">2</span>gjdong 주소 정리</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">3</span>확장으로 어디서나</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">4</span>lexdiff 조례 비교</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">5</span>온톨로지 그림</span>
</div>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 1</span>
    <span class="setup-step-crumb">포트폴리오 · 전체 훑기</span>
  </div>
  <h3 class="setup-step-title">도구 12종을 갈래별로 훑어봅니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/reference/steps/r1-1-portfolio.svg" alt="포트폴리오 사이트에서 공개 도구 12종을 갈래별로 보여 주는 화면" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>무엇이 있는지부터 봅니다. 전부 쓸 필요는 없고, 내 업무에 걸리는 것 하나만 찾으면 됩니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>브라우저 주소창에 <b>chris.gomdori.app</b> 을 입력합니다.</div></li>
        <li><span class="setup-action-no">2</span><div>네 갈래 중 <b>내 부서 업무와 가까운 것</b>을 하나 고릅니다.</div></li>
        <li><span class="setup-action-no">3</span><div>오늘은 <b>설치 없이 되는 것</b>만 봅니다 — 주소 정리와 조례 비교입니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>페이지가 안 열려요</b><span>공개 서버라 점검 중일 수 있습니다. github.com/chrisryugj 에서 최신 주소를 확인하세요.</span></li>
            <li><b>뭘 골라야 할지 모르겠어요</b><span>민원 주소를 다루는 부서면 주소 정리, 조례를 다루는 부서면 법령 비교부터 하세요.</span></li>
          </ul>
        </div>
      </div>
      <div class="setup-note setup-note-tip">
        <div class="setup-note-title">알아 두면 좋은 것</div>
        <div class="setup-note-body">이 도구들은 모두 현직 공무원이 자기 업무를 편하게 하려고 만든 것입니다. 우리도 같은 방식으로 만들 수 있습니다 — 그 방법이 이 과정의 「행정업무 자동화」입니다.</div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 2</span>
    <span class="setup-step-crumb">gjdong · 주소 정리</span>
  </div>
  <h3 class="setup-step-title">뒤죽박죽 주소를 표준주소로 정리합니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/reference/steps/r1-2-gjdong.svg" alt="gjdong 웹앱에 대구 민원 주소를 붙여넣어 표준주소로 정리한 화면" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>민원 서식마다 제각각인 주소를 도로명 기준으로 한 번에 맞춥니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div><b>gjdong.vercel.app</b> 을 엽니다.</div></li>
        <li><span class="setup-action-no">2</span><div>왼쪽 칸에 정리할 주소를 <b>여러 줄 그대로</b> 붙여넣습니다. 지번·도로명이 섞여 있어도 됩니다.</div></li>
        <li><span class="setup-action-no">3</span><div><b>표준주소로 정리</b> 를 누릅니다.</div></li>
        <li><span class="setup-action-no">4</span><div>오른쪽 결과를 <b>복사</b>해 우리 대장 시트에 붙입니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>결과가 안 나와요</b><span>주소 한 줄에 여러 건이 붙어 있으면 인식이 어렵습니다. 한 줄에 한 건씩 넣어 보세요.</span></li>
            <li><b>엉뚱한 주소가 나와요</b><span>동 이름이 같은 곳이 여러 구에 있을 수 있습니다. 앞에 "대구광역시 ○○구" 를 붙여 다시 넣으세요.</span></li>
            <li><b>건물명이 사라졌어요</b><span>표준주소는 도로명 기준이라 건물명이 빠집니다. 건물명이 필요하면 원본 열을 따로 남겨 두세요.</span></li>
          </ul>
        </div>
      </div>
      <div class="setup-note setup-note-tip">
        <div class="setup-note-title">알아 두면 좋은 것</div>
        <div class="setup-note-body">개인정보가 붙은 주소 목록은 그대로 넣지 마세요. 이름·연락처 열을 빼고 주소 열만 복사해 넣으면 됩니다.</div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 3</span>
    <span class="setup-step-crumb">확장프로그램 · 업무 화면에서</span>
  </div>
  <h3 class="setup-step-title">업무 화면에서 주소를 드래그해 바로 정리합니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/reference/steps/r1-3-extension.svg" alt="업무 시스템 화면에서 주소를 드래그하자 표준주소가 바로 뜬 화면" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>창을 오가지 않고, 보고 있는 화면에서 바로 처리합니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>GitHub 저장소에서 <b>확장프로그램</b>을 받아 크롬에 설치합니다.</div></li>
        <li><span class="setup-action-no">2</span><div>업무 시스템 화면에서 주소를 <b>마우스로 긁습니다</b>.</div></li>
        <li><span class="setup-action-no">3</span><div>옆에 뜬 <b>표준주소</b>를 클릭해 복사합니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>설치가 막혀요</b><span>기관 PC 는 확장 설치가 제한될 수 있습니다. 보안 담당 부서에 먼저 확인하세요. 막히면 2번(웹앱)만 써도 됩니다.</span></li>
            <li><b>드래그해도 아무것도 안 떠요</b><span>확장이 꺼져 있거나 그 사이트에서 권한이 없는 경우입니다. 크롬 확장 관리에서 사용 설정을 확인하세요.</span></li>
          </ul>
        </div>
      </div>
      <div class="setup-note setup-note-tip">
        <div class="setup-note-title">알아 두면 좋은 것</div>
        <div class="setup-note-body">설치가 부담스러우면 이 단계는 건너뛰세요. 앞 단계의 웹앱만으로도 같은 일을 할 수 있습니다.</div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 4</span>
    <span class="setup-step-crumb">lexdiff · 조례 비교</span>
  </div>
  <h3 class="setup-step-title">조례 개정 전후를 나란히 비교합니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/reference/steps/r1-4-lexdiff.svg" alt="조례 개정 전후 조문을 나란히 놓고 바뀐 줄을 색으로 표시한 화면" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>개정 대비표를 만들 때 눈으로 대조하던 일을 없앱니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div><b>lexdiff.gomdori.app</b> 을 엽니다.</div></li>
        <li><span class="setup-action-no">2</span><div>자치법규정보시스템에서 <b>개정 전 조문</b>을 복사해 왼쪽에 붙여넣습니다.</div></li>
        <li><span class="setup-action-no">3</span><div><b>개정 후 조문</b>을 오른쪽에 붙여넣습니다.</div></li>
        <li><span class="setup-action-no">4</span><div>색이 들어온 줄만 확인해 <b>개정 대비표</b>에 옮깁니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>표가 깨져서 붙어요</b><span>조문 본문만 붙여넣으세요. 표나 별표는 따로 비교하는 편이 정확합니다.</span></li>
            <li><b>전부 바뀐 것으로 나와요</b><span>줄바꿈 위치가 다르면 그렇게 보입니다. 양쪽을 같은 방식으로 정리해 다시 붙여넣으세요.</span></li>
          </ul>
        </div>
      </div>
      <div class="setup-note setup-note-tip">
        <div class="setup-note-title">알아 두면 좋은 것</div>
        <div class="setup-note-body">결과를 그대로 결재에 쓰지 말고, 바뀐 줄을 원문과 한 번 대조하세요. 도구는 초안까지입니다.</div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 5</span>
    <span class="setup-step-crumb">온톨로지 · 제도 시각화</span>
  </div>
  <h3 class="setup-step-title">복잡한 제도를 그림 한 장으로 봅니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/reference/steps/r1-5-ontology.svg" alt="복지 제도를 지식그래프로 그려 제도 사이 관계를 보여 주는 화면" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>표로 설명하기 어려운 제도 관계를 그림으로 봅니다. 설명 자료의 본보기입니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div><b>chris.gomdori.app/welfare</b> 를 엽니다.</div></li>
        <li><span class="setup-action-no">2</span><div>가운데 큰 점에서 바깥으로 갈수록 <b>구체적인 사업</b>입니다.</div></li>
        <li><span class="setup-action-no">3</span><div>점을 눌러 <b>이어진 것만</b> 남겨 봅니다 — 설명할 범위를 좁힐 수 있습니다.</div></li>
        <li><span class="setup-action-no">4</span><div>국가 제도판은 <b>chris.gomdori.app/korea100</b> 에서 같은 방식으로 봅니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>점이 너무 많아 복잡해요</b><span>가운데에서 한 단계씩만 펼쳐 보세요. 전부 펼치면 누구도 못 읽습니다.</span></li>
          </ul>
        </div>
      </div>
      <div class="setup-note setup-note-tip">
        <div class="setup-note-title">알아 두면 좋은 것</div>
        <div class="setup-note-body">우리 부서 사업으로 같은 그림을 만들면 주민 설명회나 신규 직원 교육에 그대로 쓸 수 있습니다. 만드는 법은 「행정업무 자동화」 과정에서 다룹니다.</div>
      </div>
    </div>
  </div>
</section>

### 여기까지 하면

- 주소 정리와 조례 비교, 두 가지를 오늘 바로 쓸 수 있습니다.
- 설치 없이 되는 범위를 확인했습니다. 여기까지만 써도 충분한 부서가 많습니다.
- 더 나아가려면 2단계에서 AI 에 공공데이터를 붙입니다.
`,contentEn:`**20 minutes. A browser is all you need — no install, no account.**

Start with the tools that need nothing but an address. Five steps put two immediately useful tools in your hands.

<div class="guide-walk-flow">
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">1</span>Skim the 12 tools</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">2</span>Standardize addresses</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">3</span>Browser extension</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">4</span>Compare statutes</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">5</span>Ontology graph</span>
</div>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 1</span>
    <span class="setup-step-crumb">Portfolio · Overview</span>
  </div>
  <h3 class="setup-step-title">Skim the twelve tools by category</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/reference/steps/r1-1-portfolio.svg" alt="A portfolio page grouping twelve published tools into four categories" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>See what exists. You only need to find the one that touches your own work.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>Open <b>chris.gomdori.app</b> in your browser.</div></li>
        <li><span class="setup-action-no">2</span><div>Pick the category closest to your team’s work.</div></li>
        <li><span class="setup-action-no">3</span><div>Today, look only at what runs <b>without installing anything</b>.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>The page will not open</b><span>These are public servers and may be under maintenance. Check github.com/chrisryugj.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 2</span>
    <span class="setup-step-crumb">gjdong · Addresses</span>
  </div>
  <h3 class="setup-step-title">Turn messy addresses into standard form</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/reference/steps/r1-2-gjdong.svg" alt="Messy addresses pasted into gjdong and returned in standard road-name form" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>Normalize addresses that arrive in a different shape on every form.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>Open <b>gjdong.vercel.app</b>.</div></li>
        <li><span class="setup-action-no">2</span><div>Paste the addresses on the left, <b>several lines at once</b>.</div></li>
        <li><span class="setup-action-no">3</span><div>Press the standardize button.</div></li>
        <li><span class="setup-action-no">4</span><div>Copy the result into your own sheet.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>The wrong district comes back</b><span>Prefix the city and district and try again.</span></li>
          </ul>
        </div>
      </div>
      <div class="setup-note setup-note-tip">
        <div class="setup-note-title">Worth knowing</div>
        <div class="setup-note-body">Do not paste lists that still carry names or phone numbers. Copy the address column only.</div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 3</span>
    <span class="setup-step-crumb">Extension · In place</span>
  </div>
  <h3 class="setup-step-title">Drag an address anywhere and get it standardized</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/reference/steps/r1-3-extension.svg" alt="Dragging an address inside a work system shows the standardized form beside it" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>Work without switching windows.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>Install the <b>browser extension</b> from the GitHub repository.</div></li>
        <li><span class="setup-action-no">2</span><div>Select an address on your work screen.</div></li>
        <li><span class="setup-action-no">3</span><div>Click the standardized form that appears to copy it.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>Installation is blocked</b><span>Agency machines often restrict extensions. Ask your security team, or just use the web app.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 4</span>
    <span class="setup-step-crumb">lexdiff · Statutes</span>
  </div>
  <h3 class="setup-step-title">Compare an ordinance before and after amendment</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/reference/steps/r1-4-lexdiff.svg" alt="Before and after articles side by side with changed lines highlighted" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>Replace line-by-line visual comparison when preparing amendment tables.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>Open <b>lexdiff.gomdori.app</b>.</div></li>
        <li><span class="setup-action-no">2</span><div>Paste the <b>previous text</b> on the left.</div></li>
        <li><span class="setup-action-no">3</span><div>Paste the <b>amended text</b> on the right.</div></li>
        <li><span class="setup-action-no">4</span><div>Carry only the highlighted lines into your amendment table.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>Everything shows as changed</b><span>Line breaks differ. Normalize both sides and paste again.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 5</span>
    <span class="setup-step-crumb">Ontology · Visualization</span>
  </div>
  <h3 class="setup-step-title">See a complex system as one picture</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/reference/steps/r1-5-ontology.svg" alt="Welfare programmes drawn as a knowledge graph" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>View relationships that tables cannot show. Use it as a model for your own material.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>Open <b>chris.gomdori.app/welfare</b>.</div></li>
        <li><span class="setup-action-no">2</span><div>The centre is the broad category; outer nodes are concrete programmes.</div></li>
        <li><span class="setup-action-no">3</span><div>Click a node to keep only what connects to it.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>Too many nodes</b><span>Expand one level at a time.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

### When you finish

- You can use address standardization and statute comparison today.
- You know how far you get with no installation at all.
- Step 2 connects public data directly to an AI.
`},a={title:"2단계 따라하기 · AI 에 공공데이터 도구 연결하기",titleEn:"Step 2 Hands-on — Connect Public Data to Your AI",content:`**소요 30분 · Claude 데스크톱 앱이 필요합니다.**

이 사례의 핵심입니다. 연결해 두면 AI 가 법제처·KOSIS·KIPRIS 같은 공공 데이터를 **직접 조회해서 출처와 함께** 답합니다. 기억에 의존한 답과 조회한 답은 업무에서 쓸 수 있느냐가 갈립니다.

> **개인정보와 대외비는 넣지 마세요.** 외부에 공개된 서버입니다. 공개 자료 조회에만 씁니다.

<div class="guide-walk-flow">
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">1</span>설정에서 커넥터 열기</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">2</span>주소 하나 넣기</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">3</span>다섯 개 확인</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">4</span>터미널 방식</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">5</span>대구 업무로 묻기</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">6</span>질문 목록 챙기기</span>
</div>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 1</span>
    <span class="setup-step-crumb">Claude · 설정</span>
  </div>
  <h3 class="setup-step-title">설정에서 커넥터 화면을 엽니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/reference/steps/r2-1-settings.svg" alt="Claude 데스크톱 앱 설정에서 커넥터 화면을 연 모습" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>공공데이터를 붙일 자리를 찾습니다. 설치 파일을 만질 필요가 없습니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>Claude 데스크톱 앱을 엽니다.</div></li>
        <li><span class="setup-action-no">2</span><div><b>설정(Settings)</b> 으로 들어갑니다.</div></li>
        <li><span class="setup-action-no">3</span><div><b>커넥터(Connectors)</b> 항목을 고릅니다.</div></li>
        <li><span class="setup-action-no">4</span><div><b>커스텀 커넥터 추가</b> 를 누릅니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>커넥터 항목이 없어요</b><span>앱이 오래된 판입니다. 앱을 최신으로 올리면 나타납니다.</span></li>
            <li><b>웹 브라우저로 쓰고 있어요</b><span>이 방법은 데스크톱 앱 기준입니다. 터미널을 쓰는 방법은 4번에 있습니다.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 2</span>
    <span class="setup-step-crumb">Claude · 커넥터 추가</span>
  </div>
  <h3 class="setup-step-title">이름과 주소를 넣어 하나를 붙입니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/reference/steps/r2-2-add-connector.svg" alt="커스텀 커넥터에 이름과 주소를 입력하는 화면" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>먼저 하나만 붙여 봅니다. 되는 것을 본 뒤에 나머지를 넣습니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div><b>이름</b> 칸에 내가 알아볼 말을 적습니다 — 예: <code>법령 검색</code>.</div></li>
        <li><span class="setup-action-no">2</span><div><b>주소</b> 칸에 <code>https://mcp.gomdori.app/law</code> 를 붙여넣습니다. 손으로 치지 말고 복사합니다.</div></li>
        <li><span class="setup-action-no">3</span><div><b>추가</b> 를 누릅니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>추가가 안 눌려요</b><span>주소가 https:// 로 시작하는지 보세요. 앞뒤 공백이 들어가도 막힙니다.</span></li>
            <li><b>추가했는데 꺼짐으로 나와요</b><span>주소 오타이거나 서버 점검 중입니다. 주소를 다시 복사해 넣어 보세요.</span></li>
          </ul>
        </div>
      </div>
      <div class="setup-note setup-note-tip">
        <div class="setup-note-title">알아 두면 좋은 것</div>
        <div class="setup-note-body">주소가 안 붙으면 각 프로젝트 GitHub 저장소의 README 에 최신 주소가 있습니다. 공개 서버라 개편으로 주소가 바뀔 수 있습니다.</div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 3</span>
    <span class="setup-step-crumb">Claude · 목록 확인</span>
  </div>
  <h3 class="setup-step-title">필요한 서버를 골라 다 붙입니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/reference/steps/r2-3-five-servers.svg" alt="공공데이터 서버 다섯 개가 모두 연결된 커넥터 목록" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>내 업무에 쓰는 것만 골라 붙입니다. 다섯 개를 다 넣을 필요는 없습니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>같은 방법으로 나머지를 넣습니다 — 통계 <code>/stats</code>, 특허 <code>/patent</code>, 건축HUB <code>/archhub</code>, 학교알리미 <code>/school</code>.</div></li>
        <li><span class="setup-action-no">2</span><div>모두 <b>연결됨</b> 으로 뜨는지 확인합니다.</div></li>
        <li><span class="setup-action-no">3</span><div>꺼짐으로 뜨는 것은 <b>주소를 다시</b> 확인합니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>어떤 걸 붙여야 할지 모르겠어요</b><span>법령과 통계 두 개면 대부분의 부서에 충분합니다. 나머지는 필요할 때 추가하세요.</span></li>
            <li><b>연결됨인데 조회가 안 돼요</b><span>질문에 어떤 자료가 필요한지 분명히 적으세요. "법령에서 찾아서" 처럼 도구를 지목하면 확실합니다.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 4</span>
    <span class="setup-step-crumb">Claude Code · 터미널</span>
  </div>
  <h3 class="setup-step-title">터미널을 쓴다면 한 줄씩 붙여넣습니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/reference/steps/r2-4-terminal.svg" alt="터미널에서 명령 한 줄씩으로 공공데이터 서버를 붙이고 확인하는 화면" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>화면에서 하나씩 넣는 대신 명령으로 붙입니다. 앞 단계를 했다면 건너뛰어도 됩니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>터미널에 <code>claude mcp add --transport http 이름 주소</code> 형태로 한 줄씩 붙여넣습니다.</div></li>
        <li><span class="setup-action-no">2</span><div>다섯 줄을 다 넣었으면 <code>claude mcp list</code> 로 확인합니다.</div></li>
        <li><span class="setup-action-no">3</span><div>각 줄에 <b>Connected</b> 가 뜨는지 봅니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>claude 명령을 못 찾는대요</b><span>Claude Code 가 설치되어 있어야 합니다. 데스크톱 앱만 쓴다면 이 단계는 건너뛰세요.</span></li>
            <li><b>Connected 가 안 떠요</b><span>주소를 복사해 다시 넣고, 그래도 안 되면 서버 점검일 수 있으니 잠시 뒤 다시 해 보세요.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 5</span>
    <span class="setup-step-crumb">활용 · 대구 업무로</span>
  </div>
  <h3 class="setup-step-title">대구 업무 질문을 실제로 던져 봅니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/reference/steps/r2-5-ask-daegu.svg" alt="연결한 통계 도구로 대구 청년 고용률을 출처와 함께 받은 화면" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>연결이 실제로 도는지, 출처가 붙는지 확인합니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>대화창에 <b>최근 3년 대구광역시 청년 고용률을 출처와 함께 표로 정리해 줘</b> 라고 칩니다.</div></li>
        <li><span class="setup-action-no">2</span><div>답 첫머리에 <b>어느 도구를 썼는지</b> 나오는지 봅니다.</div></li>
        <li><span class="setup-action-no">3</span><div>맨 아래 <b>출처</b> 줄이 붙어 있는지 봅니다.</div></li>
        <li><span class="setup-action-no">4</span><div>수치는 <b>KOSIS 에서 한 번 더</b> 대조합니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>도구를 안 쓰고 답해요</b><span>"통계 커넥터로 조회해서 알려 줘" 처럼 도구를 지목하세요.</span></li>
            <li><b>출처가 없어요</b><span>출처 없는 수치는 보고서에 쓰지 마세요. "출처를 함께 달아 줘" 라고 다시 시킵니다.</span></li>
            <li><b>수치가 이상해요</b><span>기준 연도나 연령 범위가 다를 수 있습니다. "15~29세 기준으로" 처럼 조건을 붙여 다시 물어보세요.</span></li>
          </ul>
        </div>
      </div>
      <div class="setup-note setup-note-tip">
        <div class="setup-note-title">알아 두면 좋은 것</div>
        <div class="setup-note-body">"출처와 함께" 이 한마디가 보고서에 쓸 수 있는 답과 아닌 답을 가릅니다. 습관처럼 붙이세요.</div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 6</span>
    <span class="setup-step-crumb">활용 · 질문 목록</span>
  </div>
  <h3 class="setup-step-title">부서에서 바로 쓸 질문을 챙겨 둡니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/reference/steps/r2-6-questions.svg" alt="연결한 도구별로 바로 써먹을 수 있는 질문 다섯 가지 목록" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>오늘 배운 것을 내일도 쓰게 만듭니다. 질문 다섯 개를 메모에 저장합니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>다섯 질문에서 <b>조문 번호 · 연도 · 주소 · 학교 이름</b>만 내 업무로 바꿉니다.</div></li>
        <li><span class="setup-action-no">2</span><div>자주 쓸 것 <b>두세 개</b>를 메모장이나 즐겨찾기에 저장합니다.</div></li>
        <li><span class="setup-action-no">3</span><div>개인정보가 들어가는 질문은 <b>하지 않습니다</b>.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>우리 업무에 맞는 질문이 없어요</b><span>지금 손으로 찾고 있는 자료가 무엇인지 그대로 문장으로 적어 보세요. 그것이 질문입니다.</span></li>
          </ul>
        </div>
      </div>
      <div class="setup-note setup-note-tip">
        <div class="setup-note-title">알아 두면 좋은 것</div>
        <div class="setup-note-body">조회 결과를 결재 문서에 그대로 붙이지 마세요. 출처를 따라가 원 자료를 확인한 뒤에 쓰는 것이 원칙입니다.</div>
      </div>
    </div>
  </div>
</section>

### 여기까지 하면

- AI 가 공공데이터를 직접 조회해 출처와 함께 답합니다.
- 내 부서에서 바로 쓸 질문 다섯 개를 손에 넣었습니다.
- 수치는 늘 원 출처에서 한 번 더 대조하는 습관을 들이세요.
`,contentEn:`**30 minutes. You need the Claude desktop app.**

This is the heart of the case. Once connected, the AI queries public data directly and answers **with sources**.

<div class="guide-walk-flow">
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">1</span>Open connectors</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">2</span>Add one address</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">3</span>Verify five</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">4</span>Terminal option</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">5</span>Ask about Daegu</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">6</span>Keep the questions</span>
</div>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 1</span>
    <span class="setup-step-crumb">Claude · Settings</span>
  </div>
  <h3 class="setup-step-title">Open the connectors screen</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/reference/steps/r2-1-settings.svg" alt="The connectors screen inside Claude desktop settings" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>Find where external data sources attach. No config files involved.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>Open the Claude desktop app.</div></li>
        <li><span class="setup-action-no">2</span><div>Go to <b>Settings</b>.</div></li>
        <li><span class="setup-action-no">3</span><div>Choose <b>Connectors</b>.</div></li>
        <li><span class="setup-action-no">4</span><div>Click <b>Add custom connector</b>.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>There is no Connectors item</b><span>Update the app; it appears in recent versions.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 2</span>
    <span class="setup-step-crumb">Claude · Add connector</span>
  </div>
  <h3 class="setup-step-title">Enter a name and an address</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/reference/steps/r2-2-add-connector.svg" alt="Entering a connector name and address" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>Attach one first. Add the rest once you see it work.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>Give it a name you will recognize.</div></li>
        <li><span class="setup-action-no">2</span><div>Paste <code>https://mcp.gomdori.app/law</code> as the address — copy, do not retype.</div></li>
        <li><span class="setup-action-no">3</span><div>Press <b>Add</b>.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>It shows as off</b><span>Either a typo in the address or the server is down. Re-paste the address.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 3</span>
    <span class="setup-step-crumb">Claude · Verify</span>
  </div>
  <h3 class="setup-step-title">Add the servers your work needs</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/reference/steps/r2-3-five-servers.svg" alt="Five public-data connectors all showing as connected" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>Attach only what you will use. Five is not required.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>Repeat for statistics, patents, building data, and school info.</div></li>
        <li><span class="setup-action-no">2</span><div>Check each one shows <b>connected</b>.</div></li>
        <li><span class="setup-action-no">3</span><div>Re-check the address for any that shows as off.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>I do not know which to add</b><span>Law and statistics cover most teams. Add others when needed.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 4</span>
    <span class="setup-step-crumb">Claude Code · Terminal</span>
  </div>
  <h3 class="setup-step-title">Or attach them from the terminal</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/reference/steps/r2-4-terminal.svg" alt="Terminal commands adding public-data servers and listing them" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>A command-line alternative. Skip it if the previous steps worked.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>Paste one <code>claude mcp add</code> line per server.</div></li>
        <li><span class="setup-action-no">2</span><div>Run <code>claude mcp list</code> to check.</div></li>
        <li><span class="setup-action-no">3</span><div>Confirm each line reports <b>Connected</b>.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>The claude command is not found</b><span>Claude Code must be installed. Skip this if you only use the desktop app.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 5</span>
    <span class="setup-step-crumb">Use · Daegu work</span>
  </div>
  <h3 class="setup-step-title">Ask a real question about your own city</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/reference/steps/r2-5-ask-daegu.svg" alt="A statistics query about Daegu youth employment answered with sources" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>Confirm the connection actually works and that sources are attached.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>Ask for three years of Daegu youth employment rates <b>with sources</b>.</div></li>
        <li><span class="setup-action-no">2</span><div>Check the reply names <b>which tool</b> it used.</div></li>
        <li><span class="setup-action-no">3</span><div>Check a <b>source</b> line is attached.</div></li>
        <li><span class="setup-action-no">4</span><div>Verify the figures once against the original statistics portal.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>It answers without using a tool</b><span>Name the tool: "Query the statistics connector."</span></li>
            <li><b>There is no source</b><span>Never put unsourced figures in a report. Ask again for sources.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 6</span>
    <span class="setup-step-crumb">Use · Question list</span>
  </div>
  <h3 class="setup-step-title">Keep the questions your team will reuse</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/reference/steps/r2-6-questions.svg" alt="Five ready-made questions, one per connected tool" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>Make today’s setup useful tomorrow.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>Swap in your own article numbers, years, addresses, and school names.</div></li>
        <li><span class="setup-action-no">2</span><div>Save the two or three you will reuse.</div></li>
        <li><span class="setup-action-no">3</span><div>Never include personal data in a question.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>None of them fit my work</b><span>Write down what you are currently looking up by hand. That is your question.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

### When you finish

- Your AI now queries public data and cites sources.
- You have five questions ready for your own work.
- Always re-check figures against the original source.
`},i={title:"3단계 따라하기 · 내 PC 에 설치해 쓰기",titleEn:"Step 3 Hands-on — Install and Use Locally",content:`**소요 30분 · 설치가 필요합니다. 기관 보안 정책을 먼저 확인하세요.**

여기부터는 **내 PC 안의 자료**를 다룹니다. 한글 공문서를 AI 가 읽을 수 있게 바꾸고, 예전 문서를 내용으로 찾습니다. 문서 작업이 특히 많은 부서에 맞습니다.

> **부담스러우면 건너뛰어도 됩니다.** 1·2단계만으로도 충분한 부서가 많습니다.

<div class="guide-walk-flow">
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">1</span>kordoc 설치</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">2</span>공문서 변환</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">3</span>Docufinder 설치</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">4</span>내용으로 찾기</span>
</div>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 1</span>
    <span class="setup-step-crumb">kordoc · 설치와 변환</span>
  </div>
  <h3 class="setup-step-title">한글 공문서를 마크다운으로 바꿉니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/reference/steps/r3-1-kordoc-install.svg" alt="kordoc 을 설치하고 한글 공문서를 마크다운으로 바꾸는 터미널 화면" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>AI 가 읽을 수 있는 형식으로 문서를 바꿉니다. HWP·HWPX·PDF·DOCX·XLSX 를 받습니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>터미널에 <code>npm i kordoc</code> 을 입력합니다. Node.js 가 먼저 깔려 있어야 합니다.</div></li>
        <li><span class="setup-action-no">2</span><div>바꿀 문서 파일을 <b>한 폴더</b>에 모읍니다.</div></li>
        <li><span class="setup-action-no">3</span><div>변환 명령의 <b>파일 이름만</b> 내 문서로 바꿔 실행합니다.</div></li>
        <li><span class="setup-action-no">4</span><div>만들어진 <code>.md</code> 파일을 열어 <b>표가 제대로 나왔는지</b> 봅니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>npm 명령을 못 찾는대요</b><span>Node.js 를 먼저 설치해야 합니다. 기관 PC 라면 보안 담당 부서에 확인하세요.</span></li>
            <li><b>표가 깨져서 나와요</b><span>복잡한 병합 셀은 완벽하지 않습니다. 표가 핵심인 문서는 결과를 한 번 손봐야 합니다.</span></li>
            <li><b>한글 파일이 안 열려요</b><span>암호가 걸린 문서는 먼저 암호를 풀어야 합니다.</span></li>
          </ul>
        </div>
      </div>
      <div class="setup-note setup-note-tip">
        <div class="setup-note-title">알아 두면 좋은 것</div>
        <div class="setup-note-body">변환은 내 PC 안에서 이루어집니다. 문서가 외부로 나가지 않으므로 대외비 문서도 변환 자체는 안전합니다. 다만 변환 결과를 AI 에 붙여넣는 순간은 다릅니다.</div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 2</span>
    <span class="setup-step-crumb">kordoc · AI 에 넘기기</span>
  </div>
  <h3 class="setup-step-title">변환한 문서에서 필요한 것만 뽑아냅니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/reference/steps/r3-2-kordoc-use.svg" alt="변환한 시행계획 문서를 AI 에 붙여넣어 우리 과 과제만 표로 뽑아낸 화면" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>긴 계획 문서에서 우리 과가 맡은 부분만 골라 표로 만듭니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>변환한 내용을 <b>통째로</b> 붙여넣습니다.</div></li>
        <li><span class="setup-action-no">2</span><div>원하는 표의 <b>칸을 정해</b> 줍니다 — 예: 과제명 · 소관 · 기한 · 예산.</div></li>
        <li><span class="setup-action-no">3</span><div>결과에서 <b>문서에 없는 값을 지어내지 않았는지</b> 확인합니다.</div></li>
        <li><span class="setup-action-no">4</span><div>표를 <b>엑셀</b>에 붙여 우리 대장으로 씁니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>문서가 너무 길어서 안 들어가요</b><span>장(章) 단위로 잘라 여러 번 나눠 넣으세요.</span></li>
            <li><b>없는 숫자를 만들어 내요</b><span>"문서에 없는 값은 비워 둬" 를 조건으로 붙이세요. 붙이면 대개 지킵니다.</span></li>
          </ul>
        </div>
      </div>
      <div class="setup-note setup-note-tip">
        <div class="setup-note-title">알아 두면 좋은 것</div>
        <div class="setup-note-body">대외비 문서를 외부 AI 에 붙여넣지 마세요. 변환은 내 PC 에서 안전하지만, 붙여넣는 순간 외부로 나갑니다.</div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 3</span>
    <span class="setup-step-crumb">Docufinder · 설치</span>
  </div>
  <h3 class="setup-step-title">내 PC 문서를 내용으로 찾는 앱을 설치합니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/reference/steps/r3-3-docufinder.svg" alt="Docufinder 를 받아 설치하고 찾아볼 폴더를 정하는 화면" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>파일 이름이 아니라 문서 안의 내용으로 찾게 만듭니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>GitHub 저장소 <b>github.com/chrisryugj/Docufinder</b> 에서 설치 파일을 받습니다.</div></li>
        <li><span class="setup-action-no">2</span><div>설치 후 <b>찾아볼 폴더</b>를 지정합니다 — 업무 폴더와 부서 공유 드라이브 폴더.</div></li>
        <li><span class="setup-action-no">3</span><div>처음 한 번 <b>문서를 읽어 두는 시간</b>을 기다립니다. 그다음부터는 즉시 찾습니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>설치가 막혀요</b><span>기관 PC 는 외부 프로그램 설치가 제한됩니다. 보안 담당 부서에 먼저 확인하세요.</span></li>
            <li><b>읽어 두는 데 너무 오래 걸려요</b><span>폴더를 좁히세요. 자주 찾는 최근 2~3년 폴더만 넣어도 충분합니다.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 4</span>
    <span class="setup-step-crumb">Docufinder · 찾기</span>
  </div>
  <h3 class="setup-step-title">예전 기안문을 내용으로 찾아냅니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/reference/steps/r3-4-search.svg" alt="문서 내용으로 예전 기안문과 시행계획을 찾아낸 검색 결과 화면" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>폴더를 뒤지는 대신, 기억나는 문장으로 바로 찾습니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>검색창에 <b>문서에 있었던 문장</b>을 그대로 칩니다 — 예: "경로당 냉난방 보수 기준".</div></li>
        <li><span class="setup-action-no">2</span><div>결과에서 <b>문장 앞뒤</b>를 보고 어느 문서인지 판단합니다.</div></li>
        <li><span class="setup-action-no">3</span><div>한글·PDF·엑셀이 <b>한 목록</b>에 나오는지 확인합니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>결과가 너무 많아요</b><span>문장을 길게 치세요. 단어 하나보다 문구 하나가 훨씬 정확합니다.</span></li>
            <li><b>분명히 있는데 안 나와요</b><span>그 폴더가 지정되어 있는지, 문서를 읽어 두는 작업이 끝났는지 확인하세요.</span></li>
            <li><b>스캔 문서라 글자가 없어요</b><span>OCR 기능을 켜면 스캔본도 찾습니다. 다만 읽어 두는 데 시간이 더 걸립니다.</span></li>
          </ul>
        </div>
      </div>
      <div class="setup-note setup-note-tip">
        <div class="setup-note-title">알아 두면 좋은 것</div>
        <div class="setup-note-body">예전 기안문에서 문구 하나를 찾으려고 폴더를 뒤지던 일이 없어집니다. 인사이동으로 인수인계받은 폴더에 특히 유용합니다.</div>
      </div>
    </div>
  </div>
</section>

### 여기까지 하면

- 한글 공문서를 AI 가 읽을 수 있는 형식으로 바꿀 수 있습니다.
- 파일 이름이 기억나지 않아도 내용으로 예전 문서를 찾을 수 있습니다.
- 두 도구 모두 내 PC 안에서 돕니다 — 문서가 밖으로 나가지 않습니다.
`,contentEn:`**30 minutes. Installation required — check your agency policy first.**

These tools work on files on your own machine: converting Korean office documents so an AI can read them, and searching past documents by content.

<div class="guide-walk-flow">
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">1</span>Install kordoc</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">2</span>Convert a document</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">3</span>Install Docufinder</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">4</span>Search by content</span>
</div>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 1</span>
    <span class="setup-step-crumb">kordoc · Install and convert</span>
  </div>
  <h3 class="setup-step-title">Convert Korean office documents to Markdown</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/reference/steps/r3-1-kordoc-install.svg" alt="Installing kordoc and converting a Korean document in a terminal" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>Put documents into a form an AI can read.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>Run <code>npm i kordoc</code>. Node.js must be installed first.</div></li>
        <li><span class="setup-action-no">2</span><div>Collect the documents into one folder.</div></li>
        <li><span class="setup-action-no">3</span><div>Run the convert command with your own filename.</div></li>
        <li><span class="setup-action-no">4</span><div>Open the resulting file and check the tables survived.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>npm is not found</b><span>Install Node.js first, checking agency policy on agency machines.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 2</span>
    <span class="setup-step-crumb">kordoc · Hand to the AI</span>
  </div>
  <h3 class="setup-step-title">Extract only what your team needs</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/reference/steps/r3-2-kordoc-use.svg" alt="A converted plan pasted into the AI and returned as a filtered table" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>Pull your own team’s tasks out of a long plan document.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>Paste the converted text in full.</div></li>
        <li><span class="setup-action-no">2</span><div>Specify the columns you want.</div></li>
        <li><span class="setup-action-no">3</span><div>Check nothing was invented that the document did not contain.</div></li>
        <li><span class="setup-action-no">4</span><div>Paste the table into a spreadsheet.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>It invents numbers</b><span>Add the condition "leave blank anything not in the document".</span></li>
          </ul>
        </div>
      </div>
      <div class="setup-note setup-note-tip">
        <div class="setup-note-title">Worth knowing</div>
        <div class="setup-note-body">Never paste confidential documents into an external AI. Conversion is local; pasting is not.</div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 3</span>
    <span class="setup-step-crumb">Docufinder · Install</span>
  </div>
  <h3 class="setup-step-title">Install an app that searches inside your documents</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/reference/steps/r3-3-docufinder.svg" alt="Downloading Docufinder and choosing folders to index" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>Search by content instead of by filename.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>Download from the GitHub repository.</div></li>
        <li><span class="setup-action-no">2</span><div>Choose the folders to index.</div></li>
        <li><span class="setup-action-no">3</span><div>Wait once while it reads the documents.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>Installation is blocked</b><span>Check with your security team first.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 4</span>
    <span class="setup-step-crumb">Docufinder · Search</span>
  </div>
  <h3 class="setup-step-title">Find an old draft by what it said</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/reference/steps/r3-4-search.svg" alt="Search results finding past drafts and plans by their contents" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>Search by a remembered phrase instead of digging through folders.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>Type a <b>phrase that appeared in the document</b>.</div></li>
        <li><span class="setup-action-no">2</span><div>Judge from the surrounding text which file you want.</div></li>
        <li><span class="setup-action-no">3</span><div>Note that all file types appear in one list.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>Too many results</b><span>Type a longer phrase. A phrase beats a single word.</span></li>
            <li><b>It is a scan with no text</b><span>Turn on OCR; indexing then takes longer.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

### When you finish

- You can convert Korean office documents into a form an AI can read.
- You can find past documents by their contents.
- Both run locally — the documents never leave your machine.
`},l={id:"ref-try",icon:"fa-hand-pointer",title:"직접 따라 해보기",titleEn:"Try It Yourself",sections:[t,a,i]},o={id:"ref-projects",icon:"fa-diagram-project",title:"프로젝트 12종 전체",titleEn:"All 12 Projects",sections:[{title:"한눈에 보는 목록",titleEn:"The Full List",content:`류승인 주무관이 공개한 프로젝트 전체입니다. **바로가기 열의 링크를 누르면 해당 도구로 이동**합니다.

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

| 우리 부서 상황 | 참고할 프로젝트 | 어느 단계부터 하면 되나 |
|---------------|---------------|--------------------|
| 민원 주소가 제각각이다 | gjdong | **1단계 따라하기 STEP 2** — 설치 없이 오늘 바로 됩니다 |
| 조례 개정 대비표를 자주 만든다 | lexdiff | **1단계 따라하기 STEP 4** — 개정 전후를 붙여넣으면 끝 |
| 제도 설명이 늘 어렵다 | 온톨로지 시각화 | **1단계 따라하기 STEP 5** — 설명 자료의 본보기 |
| 법령·조례를 자주 찾는다 | korean-law-mcp | **2단계 따라하기 STEP 2** — 법령 커넥터 하나만 붙이면 됩니다 |
| 통계 수치를 보고서에 자주 쓴다 | korean-stats-mcp | **2단계 따라하기 STEP 5** — "출처와 함께" 를 꼭 붙입니다 |
| 건축물대장을 자주 조회한다 | archhub-mcp | **2단계 따라하기 STEP 3** — 주소만 넣으면 됩니다 |
| 한글 공문서가 산더미다 | kordoc | **3단계 따라하기 STEP 1~2** — 설치가 필요합니다 |
| 예전 문서를 못 찾는다 | Anything(Docufinder) | **3단계 따라하기 STEP 3~4** — 설치가 필요합니다 |

> 왼쪽 목차의 **「직접 따라 해보기」** 를 펴면 위 단계가 화면 그림과 함께 순서대로 나옵니다. 설치 없이 되는 1단계부터 하시면 됩니다.

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

> You don't need to build twelve. Start with **the one task that eats 30 minutes every week**.`}]};function g(){return s.jsx(n,{seoTitle:"참고사이트",seoTitleEn:"Reference Sites",seoDescription:"현직 공무원이 직접 만든 실무 도구 12종 — 법령·통계·특허·건축·문서처리 MCP와 웹 도구를 따라 해보는 안내",path:"/reference",hero:{icon:"fa-compass",color:"#14B8A6",eyebrow:"참고사이트 · 현직 공무원 개발 사례",eyebrowEn:"Reference Sites · Built by a Serving Official",title:"참고사이트",titleEn:"Reference Sites",tagline:"공무원이 직접 만든 실무 도구 12종을 따라 해보기",taglineEn:"Twelve working tools built by a public official",desc:"광진구 류승인 주무관이 현직 공무원으로 개발·공개한 법령·통계·특허·건축·문서처리 MCP와 웹 도구를 누구나 확인하고 따라 할 수 있도록 정리했습니다.",descEn:"MCP servers and web tools for law, statistics, patents, construction and document processing — developed and released by a serving official, organized so anyone can follow along.",meta:[{icon:"fa-user-check",text:"실무 도구를 찾는 공무원",textEn:"Officials seeking practical tools"},{icon:"fa-layer-group",text:"도구 12종",textEn:"12 tools"},{icon:"fa-code-branch",text:"공개 사례",textEn:"Open sourced"}],note:"소개하는 도구는 모두 외부에 공개된 사례입니다. 업무에 적용하기 전 소속 기관의 보안 지침을 먼저 확인하세요.",noteEn:"All tools shown here are publicly released examples. Check your agency security policy before applying them to real work."},dataFiles:[e,l,o]})}export{g as default};

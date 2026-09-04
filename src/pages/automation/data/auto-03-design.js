export default {
  id: 'auto-03',
  icon: 'fa-pen-ruler',
  title: '3교시 11:00~12:00 · 업무흐름 및 화면구성 설계',
  titleEn: 'Session 3 — Flow and Screen Design',
  sections: [
    {
      title: '만들기 전에 그림을 그립니다',
      titleEn: 'Draw It Before You Build It',
      content: `### 이 시간에 하는 일

| 학습 목표 | 도구의 입력값·버튼·처리절차·결과 화면을 설계하고, AI에게 줄 요구사항 명세서를 쓴다 |
|---|---|
| 형태 | 실습 |
| **산출물** | **자동화 도구 설계서 + AI 프롬프트** |

> 여기가 오늘의 **가장 중요한 시간**입니다. 설계서가 좋으면 4교시에 AI가 한 번에 만들어 줍니다. 설계서가 부실하면 오후 내내 고칩니다.

### 도구는 이 네 부분으로 이뤄집니다

| 부분 | 무엇인가 | 우리 업무에서는 |
|------|---------|---------------|
| **입력** | 어디에 무엇이 들어오나 | '원본' 시트, A열 팀명 / B열 항목 / C열 건수 |
| **버튼** | 무엇을 누르면 시작되나 | 메뉴에 '실적 취합' 항목 추가 |
| **처리** | 무슨 순서로 도나 | 읽기 → 중복 제거 → 팀별 합계 → 정렬 |
| **결과** | 어디에 무엇이 남나 | '요약' 시트에 팀별 합계표, 완료 알림 |

### 1단계 · 시트 구조 정하기 (10분)

**AI에게 시트 구조를 정확히 알려주지 않으면 반드시 다시 물어봅니다.** 미리 정합니다.

| 정할 것 | 적는 법 | 예시 |
|--------|--------|------|
| 시트 이름 | 실제 탭 이름 그대로 | 원본 / 요약 |
| 열 구성 | 열 문자 + 제목 | A열 팀명, B열 항목, C열 건수, D열 비고 |
| 데이터 시작 행 | 제목이 몇 행인지 | 1행 제목, 2행부터 데이터 |
| 결과 위치 | 어느 시트 어디에 | '요약' 시트 A1부터 |

> 구글 시트 아래쪽 탭 이름을 지금 **원본**, **요약** 으로 바꿔 두세요. 이름이 다르면 코드가 못 찾습니다.

### 2단계 · 처리 순서를 번호로 쓰기 (10분)

2교시 정의서의 '처리과정'을 **컴퓨터가 할 수 있는 말**로 다시 씁니다.

| 사람 말 | 컴퓨터가 할 수 있는 말 |
|--------|---------------------|
| "대충 정리해서" | "A열 기준으로 오름차순 정렬하고" |
| "중복은 빼고" | "A열+B열이 같은 행은 첫 번째만 남기고" |
| "빈 건 제외" | "C열이 비었거나 0인 행은 제외하고" |
| "합쳐서" | "A열 값이 같은 행끼리 C열을 더해서" |
| "보기 좋게" | "제목 행은 굵게, 숫자는 천 단위 쉼표로" |

### 3단계 · 설계서 작성 (20분)

아래 표를 그대로 채웁니다. **이것이 두 번째 산출물입니다.**

| 항목 | 내용 (예시) |
|------|-----------|
| 도구 이름 | 주간 실적 취합 도구 |
| 입력 시트 | '원본' — 1행 제목, 2행부터 데이터 |
| 입력 열 | A: 팀명 / B: 항목 / C: 건수 / D: 비고 |
| 실행 방법 | 상단 메뉴에 '실적 취합' 메뉴 추가, 클릭 시 실행 |
| 처리 순서 | ① C열이 비었거나 0인 행 제외 ② A+B 중복 행은 첫 번째만 ③ A열 기준 C열 합계 ④ 합계 큰 순 정렬 |
| 결과 시트 | '요약' — 기존 내용 지우고 새로 작성 |
| 결과 형식 | A1 제목 행(팀명/건수합계), A2부터 데이터, 숫자 천 단위 쉼표 |
| 완료 표시 | "취합 완료: ○개 팀, ○건" 알림창 |
| 예외 처리 | '원본' 시트가 없으면 안내 후 중단 / 데이터가 0건이면 안내 |

### 4단계 · AI 요구사항 명세서(프롬프트) 만들기 (20분)

설계서를 **그대로 프롬프트로 바꿉니다.** 아래 틀에 내 설계서를 채워 넣으세요.

\`\`\`text
너는 Google Apps Script 전문가야. 공무원이 쓸 자동화 도구를 만들어줘.
나는 코딩을 모르니, 코드와 함께 설치 방법을 단계별로 알려줘.

## 만들 도구
주간 실적 취합 도구

## 시트 구조
- '원본' 시트: 1행이 제목, 2행부터 데이터
  - A열: 팀명
  - B열: 항목
  - C열: 건수
  - D열: 비고
- '요약' 시트: 결과를 여기에 작성

## 처리 순서
1. C열이 비었거나 0인 행은 제외한다
2. A열+B열 값이 같은 행은 첫 번째만 남긴다
3. A열(팀명) 기준으로 C열(건수)을 합산한다
4. 합계가 큰 순서로 정렬한다

## 결과
- '요약' 시트의 기존 내용을 지우고 새로 작성
- A1: '팀명', B1: '건수합계' (굵게)
- A2부터 데이터, 숫자는 천 단위 쉼표
- 완료되면 "취합 완료: ○개 팀, ○건" 알림창 표시

## 실행 방법
- 시트 상단 메뉴에 '실적 취합' 메뉴를 추가하고, 클릭하면 실행되게 해줘

## 예외 처리
- '원본' 시트가 없으면 안내 메시지를 띄우고 중단
- 처리할 데이터가 0건이면 안내 메시지 표시

## 요청
1. 전체 코드를 한 덩어리로 보여줘 (부분 수정이 아니라 통째로)
2. 코드에 한국어 주석을 달아줘
3. 시트에 붙여넣고 실행하는 방법을 1번부터 순서대로 알려줘
4. 내가 적지 않은 규칙을 임의로 만들지 마. 애매하면 먼저 물어봐줘.
\`\`\`

### 이 프롬프트가 좋은 이유

| 요소 | 어디에 있나 | 없으면 생기는 일 |
|------|-----------|---------------|
| 역할 | "Apps Script 전문가야" | 일반적인 설명만 옴 |
| 수준 | "코딩을 모르니" | 개발자용 설명이 옴 |
| 데이터 구조 | 시트 이름·열 구성 | "어느 열인가요?" 되물음 |
| 처리 순서 | 번호 목록 | 순서가 뒤바뀜 |
| 결과 위치 | '요약' 시트 A1 | 엉뚱한 곳에 씀 |
| 실행 방법 | 메뉴 추가 | 편집기에서만 돌아감 |
| 예외 | 시트 없음·0건 | 오류 화면이 그대로 뜸 |
| **날조 금지** | "임의로 만들지 마" | 없는 규칙을 지어냄 |

> 이 여덟 가지는 [프롬프트 학습](/prompt-eval) 에서 배운 **역할·맥락·지시·형식** 그대로입니다.

### 산출물 확인

- [ ] 시트 탭 이름을 실제로 '원본', '요약' 으로 바꿨다
- [ ] 열 구성을 A열부터 문자로 적었다
- [ ] 처리 순서가 번호로, 컴퓨터가 할 수 있는 말로 적혔다
- [ ] 결과가 어느 시트 어디에 들어갈지 적혀 있다
- [ ] 프롬프트를 복사할 수 있게 한 덩어리로 만들어 뒀다

> 점심 식사 후 4교시에 이 프롬프트를 **그대로 붙여넣기만** 하면 됩니다.`,
      contentEn: `### This session

Design the tool's inputs, button, steps, and result screen, then write the requirement spec for the AI. **Deliverables: design sheet and prompt.**

### A tool has four parts

Input (where data arrives), button (what starts it), processing (the ordered steps), result (what is left where).

### Step 1 — Fix the sheet structure

Sheet names, column letters and titles, first data row, and where results go. Rename your tabs now.

### Step 2 — Rewrite the steps in machine-doable language

"Tidy it up" becomes "sort ascending by column A". "No duplicates" becomes "keep only the first row where A+B match".

### Step 3 — Write the design sheet

Tool name, input sheet and columns, how it runs, ordered steps, result sheet and format, completion message, exception handling.

### Step 4 — Turn the design into a prompt

Role, your skill level, sheet structure, numbered steps, result format, run method, exceptions, and an explicit instruction not to invent rules.

### Checklist

Tabs renamed, columns listed by letter, steps numbered and concrete, result location specified, prompt ready to paste.`,
    },
    {
      title: '따라하기 실습 ① 네 가지 도구 화면 익히기',
      titleEn: 'Hands-on 1 — Learn the Four Tool Screens',
      content: `**소요 30분 · 준비물: 구글 계정**

설계서를 쓰기 전에, **내가 만들 도구가 어느 화면에서 도는지**를 먼저 봅니다. 네 화면의 역할이 다릅니다.

| 도구 | 하는 일 | 언제 쓰나 |
|------|---------|-----------|
| **Google Sheets** | 자료를 담는 그릇 | 거의 모든 자동화의 출발점 |
| **Apps Script** | 실제로 일을 하는 부분 | 계산·정리·문서 생성 |
| **웹폼** | 자료를 받아오는 입구 | 여러 사람에게서 자료를 모을 때 |
| **노코드 도구** | 조건에 따라 자동으로 잇는 것 | 사람 손 없이 계속 돌려야 할 때 |

> 넷을 다 쓸 필요는 없습니다. **대부분의 행정 업무는 Sheets + Apps Script 둘로 끝납니다.** 폼과 노코드는 필요할 때만 붙입니다.

---

## 1. Google Sheets — 자료를 담는 그릇

![Google Sheets 화면 — 제목 행, 표 하나 규칙, 확장 프로그램 메뉴](~/automation/auto-google-sheets.svg)

그림의 **주황 번호가 아래 STEP 번호**입니다.

### STEP 1 · 1행을 제목 행으로 만듭니다

**✅ 확인** — 1행에 적은 열 이름이 **그대로 AI에게 주는 항목 이름**이 됩니다. \`금액\` 이라 적었으면 프롬프트에도 \`금액\` 이라고 씁니다. 다르게 쓰면 AI가 다른 열을 잡습니다.

### STEP 2 · 한 시트에는 표를 하나만 둡니다

자동화를 깨뜨리는 3대 원인입니다.

| 하지 말 것 | 왜 |
|-----------|-----|
| 빈 행으로 표를 나누기 | 표가 어디서 끝나는지 프로그램이 못 찾는다 |
| 병합된 셀 | 값이 한 칸에만 있고 나머지는 빈칸으로 읽힌다 |
| 중간에 소계 행 넣기 | 소계를 데이터로 세어 합계가 두 배가 된다 |

**✅ 확인** — 표를 아래로 쭉 훑어 위 세 가지가 없으면 통과입니다.

### STEP 3 · 시트 탭 이름을 정합니다

탭 이름은 **띄어쓰기 없이 짧게** — \`신청접수\`, \`부서별집계\`. 이 이름을 프롬프트에 그대로 씁니다.

**✅ 확인** — **[확장 프로그램] → [Apps Script]** 를 눌러 다음 화면이 열리면 준비 완료입니다.

---

## 2. Apps Script — 실제로 일을 하는 부분

![Apps Script 화면 — 코드 붙여넣기, 함수 선택 후 실행, 실행 로그 확인](~/automation/auto-apps-script.svg)

### STEP 1 · 받은 코드를 통째로 붙여넣습니다

편집기에 원래 있던 \`function myFunction() {}\` 를 **모두 지우고** 붙여넣습니다.

**✅ 확인** — **코드를 이해할 필요는 없습니다.** 한 글자도 고치지 마세요. 고쳐야 할 곳이 있으면 AI에게 다시 시킵니다.

### STEP 2 · 함수를 고르고 실행합니다

상단 드롭다운에서 **실행할 함수 이름**을 고른 뒤 **[▶ 실행]** 을 누릅니다.

**✅ 확인** — 첫 실행 때만 권한 창이 뜹니다.

\`\`\`text
"이 앱은 확인되지 않았습니다" 창이 뜨면
→ [고급] → [프로젝트 이름(안전하지 않음)으로 이동] → [허용]
\`\`\`

> 내가 만든 스크립트에 **내 시트를 만질 권한**을 주는 절차입니다. 한 번만 하면 됩니다.

### STEP 3 · 실행 로그를 봅니다

| 로그 | 뜻 | 다음 |
|------|-----|------|
| \`실행이 완료됨\` | **성공** | 시트로 돌아가 결과 확인 |
| 빨간 오류 줄 | 정상적인 과정 | 오류 문장을 **그대로 복사**해 AI에게 |
| 아무것도 안 나옴 | 저장을 안 했다 | 💾 저장 후 다시 실행 |

**✅ 확인** — 오류 문장을 고쳐 쓰지 말고 **그대로** 붙여넣으세요. 줄 번호와 오류 이름이 해결의 열쇠입니다.

---

## 3. 웹폼 — 자료를 받아오는 입구

![웹폼 화면 — 시트 열 이름과 맞춘 질문, 질문 유형 지정, 응답 시트 연결](~/automation/auto-web-form.svg)

여러 사람에게 **메일로 파일을 받아 손으로 옮기던 일**을 없앱니다.

### STEP 1 · 질문 이름을 시트 열 이름과 똑같이 맞춥니다

**✅ 확인** — 시트 열이 \`접수번호\` 면 질문도 \`접수번호\` 입니다. 하나라도 다르면 나중에 손으로 옮겨야 하고, 그러면 자동화한 의미가 없습니다.

### STEP 2 · 질문 유형을 정확히 고릅니다

| 받을 값 | 고를 유형 | 이유 |
|---------|----------|------|
| 부서 이름 | **드롭다운** | 자유 입력이면 "복지정책과"와 "복지 정책과"가 섞인다 |
| 금액 | **숫자** | 글자가 섞이면 합계가 안 된다 |
| 날짜 | **날짜** | \`9/5\`, \`9월 5일\`, \`2026-09-05\` 가 섞이지 않는다 |
| 접수번호 | **단답형** + 필수 | 빠지면 중복 제거가 안 된다 |

**✅ 확인** — 자유 입력(단답형)은 **꼭 필요할 때만** 씁니다. 자유 입력 칸이 많을수록 나중에 손이 갑니다.

### STEP 3 · 응답을 시트로 연결합니다

**[응답] 탭 → 스프레드시트 아이콘** 을 누르면 응답이 쌓이는 시트가 만들어집니다.

**✅ 확인** — 폼을 **직접 한 번 제출해 보고**, 시트에 한 줄이 늘어나는지 눈으로 봅니다. 이걸 확인하지 않고 배포하면 나중에 응답이 안 들어와 있는 일이 생깁니다.

---

## 4. 노코드 도구 — 조건에 따라 자동으로 잇기

![노코드 자동화 흐름 — 트리거 하나, 조건 하나, 동작 순서. 켜기 전 시험 실행](~/automation/auto-nocode-flow.svg)

**"○○하면 △△한다"** 를 사람 손 없이 계속 돌립니다.

### STEP 1 · 트리거는 하나만

무슨 일이 생기면 시작할지 정합니다.

| 트리거 종류 | 예 |
|------------|-----|
| 폼 응답 제출 | 신청서가 접수되면 |
| 특정 시각 | 매월 1일 오전 9시에 |
| 파일 추가 | 지정 폴더에 파일이 올라오면 |
| 시트 행 추가 | 시트에 새 줄이 생기면 |

**✅ 확인** — 트리거가 두 개 필요하면 **흐름을 두 개로 나눕니다.**

### STEP 2 · 조건도 되도록 하나만

**✅ 확인** — 조건이 세 개를 넘어가면, 그건 흐름이 아니라 **사람이 판단할 일**입니다. 그 부분은 자동화하지 말고 담당자에게 알림만 보내세요.

### STEP 3 · 켜기 전에 반드시 시험 실행합니다

> **가장 위험한 단계입니다.** 흐름을 켜는 순간 실제로 메일이 나가고 문서가 만들어집니다.

| 시험 방법 | 왜 |
|-----------|-----|
| 받는 사람을 **내 메일로** 바꿔 둔다 | 민원인에게 잘못 나가는 것을 막는다 |
| 시험용 가짜 데이터 1건으로 돌린다 | 실제 건이 중복 처리되는 것을 막는다 |
| 결과를 확인한 뒤 받는 사람을 원래대로 | 확인 전에는 절대 켜지 않는다 |

**✅ 확인** — 시험 1건이 의도대로 끝났을 때만 **[흐름 켜기]** 를 누릅니다.

---

### 내 업무에는 무엇이 필요한가

**✅ 확인** — 2교시 정의서를 펴고 아래에 대 봅니다.

| 정의서의 "들어오는 자료" | 필요한 것 |
|------------------------|-----------|
| 내가 시트에 직접 붙여넣는다 | Sheets + Apps Script |
| 여러 사람이 제출한다 | **웹폼** + Sheets + Apps Script |
| 정해진 시각마다 저절로 돌아야 한다 | 위 + **노코드 도구**(또는 Apps Script 트리거) |
| 조건에 따라 다른 사람에게 알림이 가야 한다 | 위 + **노코드 도구** |

여기서 고른 조합을 다음 실습의 설계서에 적습니다.`,
      contentEn: `**30 minutes · You need a Google account**

Before writing the design, see **which screens your tool actually runs on.** The four have different jobs.

| Tool | Its job | When |
|---|---|---|
| **Google Sheets** | The container for the data | The starting point of almost every automation |
| **Apps Script** | The part that does the work | Calculating, consolidating, generating documents |
| **Web form** | The intake | Collecting data from many people |
| **No-code tool** | Connecting things conditionally | When it must keep running without a human |

> You don't need all four. **Most administrative work ends with Sheets + Apps Script.**

## 1. Google Sheets
![Google Sheets screen](~/automation/auto-google-sheets.svg)

**STEP 1 · Row 1 is the header row.** Those column names are exactly what you hand the AI — write them identically in the prompt.

**STEP 2 · One table per sheet.** The three things that break automation: blank rows splitting the table, merged cells, and subtotal rows in the middle (counted as data, doubling totals).

**STEP 3 · Name the tab** — short, no spaces. Then **Extensions → Apps Script.**

## 2. Apps Script
![Apps Script screen](~/automation/auto-apps-script.svg)

**STEP 1 · Paste the whole thing.** You do not need to understand the code. Change nothing — if something needs changing, ask the AI.

**STEP 2 · Pick the function, press Run.** On first run: "app isn't verified" → Advanced → Go to project → Allow. It grants your own script access to your own sheet, once.

**STEP 3 · Read the execution log.**

| Log | Meaning | Next |
|---|---|---|
| Run completed | **Success** | Check the sheet |
| A red error line | Normal | Copy the error text **verbatim** to the AI |
| Nothing at all | You didn't save | Save, run again |

## 3. Web form
![Web form screen](~/automation/auto-web-form.svg)

**STEP 1 · Question names must match the sheet column names exactly.** One mismatch means manual re-entry, which defeats the point.

**STEP 2 · Pick the right question type.** Dropdown for divisions (free text gives you two spellings of the same office), number for amounts, date for dates, required short answer for the key.

**STEP 3 · Link responses to a sheet,** then **submit the form yourself once** and watch a row appear. Skipping this check is how you discover later that nothing was recorded.

## 4. No-code tool
![No-code flow screen](~/automation/auto-nocode-flow.svg)

**STEP 1 · Exactly one trigger.** Form submitted, a set time, a file added, a row added. Need two? Split into two flows.

**STEP 2 · Preferably one condition.** More than three conditions means it is **a human judgment**, not a flow — send a notification instead.

**STEP 3 · Always test before switching it on.** Point the recipient at **your own address**, run one dummy record, verify, then restore the recipient. Turning it on sends real mail to real people.

### What does your task need?

| Your "input" | What you need |
|---|---|
| I paste it into the sheet myself | Sheets + Apps Script |
| Several people submit it | **Web form** + Sheets + Apps Script |
| It must run on a schedule | The above + **no-code tool** (or an Apps Script trigger) |
| Notifications must branch by condition | The above + **no-code tool** |`,
    },
    {
      title: '따라하기 실습 ② 설계서와 요구사항 명세서 쓰기',
      titleEn: 'Hands-on 2 — Write the Design and the Spec',
      content: `**소요 40분 · 산출물: 자동화 도구 설계서 + AI에게 줄 요구사항 명세서**

2교시 정의서와 방금 익힌 화면 지식을 합쳐, **AI에게 그대로 건넬 문서**를 만듭니다.

> 4교시에 코드를 받는 품질은 **여기서 쓴 명세서의 품질과 정확히 같습니다.** 여기서 애매하면 거기서 엉뚱한 게 나옵니다.

---

### STEP 1 · 설계서 뼈대를 만듭니다

빈 문서에 아래 네 덩어리를 만듭니다.

| 덩어리 | 무엇을 적나 |
|--------|------------|
| **① 입력값** | 사람이 무엇을 어디에 넣는가 |
| **② 버튼·실행** | 어떻게 실행시키는가 |
| **③ 처리 절차** | 안에서 무슨 일이 순서대로 일어나는가 |
| **④ 결과 화면** | 결과가 어디에 어떤 모양으로 나오는가 |

**✅ 확인** — 네 덩어리가 만들어졌으면 하나씩 채웁니다.

---

### STEP 2 · ① 입력값을 표로 적습니다

\`\`\`text
입력 위치 — "신청접수" 시트
입력 방법 — 각 과 제출 파일을 열 순서 맞춰 붙여넣기
\`\`\`

| 열 | 이름 | 형식 | 필수 | 비어 있으면 |
|----|------|------|------|------------|
| A | 접수번호 | 문자 (2026-0000) | 필수 | 그 행은 건너뜀 |
| B | 부서 | 문자 (5개 과 중 하나) | 필수 | \`[확인 필요]\` 표시 |
| C | 항목 | 문자 | 필수 | \`[확인 필요]\` 표시 |
| D | 금액 | 숫자 (천원) | 선택 | 0으로 계산 |
| E | 처리상태 | 접수 / 검토중 / 완료 | 선택 | 빈칸 그대로 |

**✅ 확인** — **"비어 있으면"** 칸이 이 표의 핵심입니다. 이 칸이 비면 AI가 마음대로 정합니다.

---

### STEP 3 · ② 실행 방법을 정합니다

| 방식 | 어떻게 | 언제 고르나 |
|------|--------|------------|
| **시트 메뉴 버튼** | 시트 상단에 \`자동화 ▾\` 메뉴가 생기고 거기서 실행 | 나 또는 우리 팀이 쓸 때 (권장) |
| Apps Script 실행 | 편집기를 열어 ▶ 실행 | 나 혼자 쓸 때 |
| 시각 트리거 | 매월 1일 9시에 저절로 | 사람이 없어도 돌아야 할 때 |
| 폼 제출 트리거 | 폼이 제출될 때마다 | 여러 사람이 제출할 때 |

**✅ 확인** — 처음이라면 **시트 메뉴 버튼**을 고르세요. 동료에게 넘기기 가장 쉽습니다.

---

### STEP 4 · ③ 처리 절차를 옮겨 적습니다

2교시 정의서의 ⑤번을 그대로 가져오되, **화면 이름을 붙입니다.**

\`\`\`text
1. "신청접수" 시트에서 1행을 제외한 전체 데이터를 읽는다.
2. 접수번호(A)가 비어 있는 행은 건너뛴다.
3. 접수번호가 중복이면 아래쪽(나중) 행만 남긴다.
4. 금액(D)이 비어 있으면 0으로 본다.
5. 부서(B)별로 묶어 건수와 금액 합계를 낸다.
6. 부서(B)가 비어 있는 행은 "[확인 필요]" 부서로 따로 묶는다.
7. "부서별집계" 시트를 비우고 결과를 다시 채운다.
8. 마지막 행에 전체 합계 행을 넣는다.
\`\`\`

**✅ 확인** — 각 줄에 **어느 시트의 어느 열**인지가 들어 있나요? \`부서별로 묶는다\` 가 아니라 \`부서(B)별로 묶는다\` 입니다.

---

### STEP 5 · ④ 결과 화면을 그립니다

\`\`\`text
결과 위치 — "부서별집계" 시트 (없으면 새로 만들고, 있으면 내용을 비우고 다시 채움)
\`\`\`

| | A | B | C |
|---|---|---|---|
| **1** | 부서 | 건수 | 합계(천원) |
| **2** | 복지정책과 | 12 | 42,300 |
| **3** | … | … | … |
| **끝행** | **합계** | **200** | **512,400** |

\`\`\`text
서식 — 1행은 굵게, 금액 열은 천 단위 쉼표, 마지막 합계 행은 굵게
\`\`\`

**✅ 확인** — 결과 표의 **열 이름과 순서**까지 적었나요? 여기까지 적어야 4교시에 다시 안 고칩니다.

---

### STEP 6 · 요구사항 명세서로 합칩니다

네 덩어리를 **하나의 프롬프트**로 이어 붙입니다. 아래 틀을 그대로 쓰세요.

\`\`\`text
나는 구글 스프레드시트로 업무를 자동화하려는 공무원이야. 코딩은 못 해.
아래 설계대로 Google Apps Script 코드를 만들어 줘.

[입력]
- 시트 이름: 신청접수
- 1행은 제목 행
- 열: A 접수번호(문자·필수) / B 부서(문자·필수) / C 항목(문자·필수)
      / D 금액(숫자·선택) / E 처리상태(문자·선택)

[처리 절차]
1. 1행을 제외한 전체 데이터를 읽는다.
2. A열이 비어 있는 행은 건너뛴다.
3. A열이 중복이면 나중 행만 남긴다.
4. D열이 비어 있으면 0으로 본다.
5. B열별로 묶어 건수와 D열 합계를 낸다.
6. B열이 비어 있는 행은 "[확인 필요]" 부서로 묶는다.
7. "부서별집계" 시트를 비우고 결과를 채운다.
8. 마지막에 전체 합계 행을 넣는다.

[결과]
- 시트 이름: 부서별집계 (없으면 새로 만들기)
- 열: 부서 / 건수 / 합계(천원)
- 1행 굵게, 금액은 천 단위 쉼표, 합계 행 굵게

[실행 방법]
- 시트 상단에 "자동화" 메뉴를 만들고 그 안에 "부서별 집계" 항목을 넣어 줘.

[지켜 줄 것]
- 붙여넣고 바로 실행되는 완성된 코드로 줘.
- 각 줄 위에 무슨 일을 하는지 한글 주석을 달아 줘.
- 원본 "신청접수" 시트는 절대 수정하지 마.
- 내가 알려주지 않은 조건은 임의로 정하지 말고 먼저 물어봐 줘.
\`\`\`

**✅ 확인** — 마지막 \`[지켜 줄 것]\` 네 줄은 **어떤 업무든 그대로** 씁니다. 특히 마지막 두 줄이 사고를 막습니다.

---

### STEP 7 · 명세서를 AI에게 검토시킵니다

바로 코드를 시키지 말고 한 번 걸러냅니다.

\`\`\`text
위 요구사항 명세서로 코드를 만들기 전에,
애매하거나 빠진 조건이 있으면 질문 목록으로 먼저 알려 줘.
질문이 없으면 "질문 없음"이라고만 답해 줘.
\`\`\`

**✅ 확인**

| 답 | 뜻 | 다음 |
|----|-----|------|
| 질문 2~3개 | **정상** — 명세서가 구체적이라 진짜 빈틈만 짚은 것 | 답해 주고 명세서에 반영 |
| "질문 없음" | 명세서가 충분하다 | 4교시로 |
| 질문 10개 이상 | 명세서가 아직 성글다 | STEP 2~5를 다시 |

---

### 완성 점검표

| # | 항목 | 확인 |
|---|------|------|
| 1 | 시트 이름과 탭 이름이 실제와 똑같이 적혔다 | |
| 2 | 열을 **A·B·C 문자와 이름**으로 함께 적었다 | |
| 3 | 각 열의 **"비어 있으면"** 처리가 적혔다 | |
| 4 | 처리 절차가 번호로, 한 줄에 동작 하나로 적혔다 | |
| 5 | 결과 표의 **열 이름과 순서**가 적혔다 | |
| 6 | 실행 방법(메뉴·버튼·트리거)이 정해졌다 | |
| 7 | \`[지켜 줄 것]\` 네 줄이 들어 있다 | |
| 8 | AI 검토 질문에 답해 반영했다 | |

> 8개가 채워지면 **자동화 도구 설계서 및 프롬프트 완성**입니다. 이 명세서를 그대로 들고 4교시로 갑니다.`,
      contentEn: `**40 minutes · Deliverables: a tool design and the requirement spec for the AI**

Combine the Session 2 definition with the screens you just learned into **a document you hand straight to the AI.**

> The quality of the code you get in Session 4 **exactly equals** the quality of this spec.

### STEP 1 · Four blocks
① Inputs ② Button/trigger ③ Processing ④ Result screen.

### STEP 2 · Inputs as a table
Sheet name, how data gets in, then per column: letter, name, format, required, **and what happens when it is blank.**
**✅ Check** — the "when blank" column is the heart of this table. Leave it out and the AI decides for you.

### STEP 3 · Choose how it runs

| Method | How | When |
|---|---|---|
| **Sheet menu button** | A \`자동화 ▾\` menu appears in the sheet | You or your team (recommended) |
| Run from the editor | Open Apps Script, press Run | Just you |
| Time trigger | 9am on the 1st, automatically | Must run unattended |
| Form trigger | On every submission | Many submitters |

### STEP 4 · Copy the processing steps in, with screen names
Not "group by department" but "group by Department (column B)."

### STEP 5 · Draw the result table
Sheet name, column names **and order**, plus formatting (bold header, thousands separators, bold total row).

### STEP 6 · Merge into one requirement spec
One prompt containing [Input] [Processing] [Result] [How it runs] [Rules to follow].

The four **rules to follow** are reusable for any task:
- Give complete, paste-and-run code
- Korean comments above each line
- Never modify the source sheet
- Ask before deciding any condition I didn't specify

### STEP 7 · Have the AI review the spec first
"Before writing code, list anything ambiguous or missing. If nothing, reply 'no questions'."

| Answer | Meaning | Next |
|---|---|---|
| 2–3 questions | **Healthy** — only real gaps remain | Answer, fold in |
| "No questions" | The spec is sufficient | Go to Session 4 |
| 10+ questions | Still too loose | Redo STEPs 2–5 |

### Completion checklist
Real sheet/tab names · columns given by letter **and** name · blank-handling per column · numbered processing, one action per line · result columns and order · run method chosen · the four rules present · AI review folded in.

> Take this spec straight into Session 4.`,
    },
  ],
};

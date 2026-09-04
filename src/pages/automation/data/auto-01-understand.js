export default {
  id: 'auto-01',
  icon: 'fa-lightbulb',
  title: '1교시 09:00~10:00 · 바이브코딩 이해',
  titleEn: 'Session 1 — Understanding Vibe Coding',
  sections: [
    {
      title: '말로 설명하면 도구가 만들어집니다',
      titleEn: 'Describe It, and the Tool Appears',
      content: `### 이 시간에 하는 일

| 학습 목표 | 말로 설명한 업무 흐름이 어떻게 실행 가능한 도구가 되는지 이해한다 |
|---|---|
| 형태 | 강의 + 따라하기 실습 |
| 산출물 | 없음 (다음 시간부터 만들기 시작) |

### 바이브코딩이 뭔가

예전 방식과 지금 방식의 차이는 이것뿐입니다.

| | 예전 | 지금 |
|---|------|------|
| 누가 | 개발자에게 요청 | **업무 담당자가 직접** |
| 무엇을 | 요구사항 문서 작성 | 말로 설명 |
| 얼마나 | 몇 주~몇 달 | 몇 분~몇 시간 |
| 고칠 때 | 다시 요청 | 그 자리에서 다시 말함 |

핵심은 **업무를 가장 잘 아는 사람이 도구를 만든다**는 점입니다. 우리 부서 업무의 예외 상황을 개발자는 모릅니다. 담당자는 압니다.

### 자동화하기 좋은 업무 — 실제 사례

대구시 부서에서 실제로 자동화되는 업무들입니다. 이 중에 내 업무가 있는지 보세요.

| 업무 | 지금 걸리는 시간 | 자동화 후 |
|------|---------------|----------|
| 신청자 명단 정리 (여러 시트 합치고 중복 제거) | 30분~1시간 | 버튼 1회, 5초 |
| 민원 분류 (유형별·소관 부서별) | 건당 1~2분 | 전체 일괄, 10초 |
| 부서별 실적 취합 (제출 파일 모으기) | 2시간 | 버튼 1회, 10초 |
| 안내문 생성 (명단에서 개인별 안내문) | 건당 3분 | 전체 일괄 |
| 집행률 계산 + 요약표 | 1시간 | 버튼 1회 |
| 파일명 정리 (규칙에 맞게 일괄 변경) | 30분 | 즉시 |

### 자동화에 맞지 않는 업무

솔직하게 말씀드립니다. 아래는 오늘 대상으로 고르지 마세요.

| 이런 업무 | 왜 |
|----------|-----|
| 1년에 한두 번 하는 일 | 도구 만드는 시간이 더 듭니다 |
| 매번 판단이 달라지는 일 | 규칙이 없으면 자동화가 안 됩니다 |
| 결재·승인 자체 | 사람이 책임지는 절차입니다 |
| 개인정보가 핵심인 원본 처리 | 외부 AI에 올릴 수 없습니다 |

### 따라하기 — 5분 만에 첫 자동화 맛보기

> ### 화면 그림을 보며 따라 하시려면
> **[▶ 구글 시트 자동화 첫 실행 — 따라하기](/setup/apps-script)** 로 가세요.
> 시트 만들기부터 결과 확인까지 **7단계**를 화면 그림과 함께 안내합니다. 가장 많이 막히는 **구글 권한 승인 화면**을 특히 자세히 다룹니다. 단계마다 체크하면 진도가 저장됩니다.

아래는 요약입니다. **아무것도 설치하지 않습니다.**

1. 브라우저에서 **[sheets.new](https://sheets.new)** 를 주소창에 입력합니다 — 새 구글 시트가 열립니다
2. A1 칸에 \`부서\`, B1 칸에 \`금액\` 을 입력합니다
3. A2부터 아래처럼 아무 값이나 넣습니다

   | 부서 | 금액 |
   |------|------|
   | 총무과 | 1000 |
   | 총무과 | 2000 |
   | 청년정책과 | 1500 |
   | 도로과 | 3000 |

4. 상단 메뉴 **확장 프로그램 → Apps Script** 를 클릭합니다 (새 탭이 열립니다)
5. 열린 편집기의 코드를 **전부 지우고**, 아래를 붙여넣습니다

\`\`\`javascript
function 부서별합계() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const data = sheet.getDataRange().getValues();
  const 합계 = {};

  // 1행은 제목이므로 2행부터 읽는다
  for (let i = 1; i < data.length; i++) {
    const 부서 = data[i][0];
    const 금액 = Number(data[i][1]) || 0;
    if (!부서) continue;
    합계[부서] = (합계[부서] || 0) + 금액;
  }

  const 결과 = [['부서', '합계']];
  for (const 부서 in 합계) 결과.push([부서, 합계[부서]]);

  sheet.getRange(1, 4, 결과.length, 2).setValues(결과);
  SpreadsheetApp.getUi().alert('부서별 합계를 D열에 넣었습니다.');
}
\`\`\`

6. 상단 **저장(디스크 모양)** 을 누릅니다
7. **실행(▶)** 을 누릅니다 → 권한 요청 창이 뜨면 **권한 검토 → 내 계정 선택 → 고급 → (프로젝트 이름)(으)로 이동 → 허용**
8. 시트 탭으로 돌아가면 **D열에 부서별 합계가 들어가 있습니다**

> 방금 코드를 한 줄도 쓰지 않았습니다. 붙여넣고 실행했을 뿐입니다. 오늘 하루는 **이 코드를 AI에게 말로 시켜서 받아내는 법**을 배웁니다.

### 권한 요청 창이 무섭게 나오는데요

정상입니다. 구글은 "내가 만든 스크립트가 내 시트를 건드려도 되는지" 를 매번 묻습니다.

| 화면에 나오는 말 | 눌러야 할 것 |
|----------------|------------|
| "이 앱은 Google에서 확인하지 않았습니다" | **고급** → **(프로젝트명)(으)로 이동** |
| "○○에 대한 액세스 권한 요청" | **허용** |

이 스크립트는 **내 계정의 내 시트 안에서만** 돕니다. 외부로 나가지 않습니다.

### 오늘 만들 결과물 미리보기

| 시간 | 만드는 것 |
|------|----------|
| 2교시 | 무엇을 자동화할지 정한 **업무 정의서** |
| 3교시 | 도구 화면과 순서를 그린 **설계서 + AI에게 줄 프롬프트** |
| 4~5교시 | **실제로 도는 자동화 도구** |
| 6교시 | **오류·보안 체크리스트** |
| 7~8교시 | **부서 적용계획서** |

### 이 방향의 끝에는 무엇이 있나

광진구 류승인 주무관은 같은 방식으로 시작해 **12개 이상의 도구**를 만들어 공개했습니다. 법령 검색, 통계 조회, 한글 문서 변환, 주소 표준화 같은 것들입니다.

처음부터 12개를 만든 것이 아닙니다. **매주 30분씩 잡아먹는 일 하나**부터 시작했습니다. 오늘 우리가 하는 것도 그것입니다.
→ [류승인 주무관 사례 보기](/reference)`,
      contentEn: `### This session

Understand how a workflow described in plain language becomes a runnable tool. Lecture plus hands-on. No deliverable yet.

### What vibe coding changes

| | Before | Now |
|---|--------|-----|
| Who | Ask a developer | **The person who does the work** |
| What | Write a requirements document | Describe it in words |
| How long | Weeks to months | Minutes to hours |
| To change it | Request again | Just say it again |

### Tasks worth automating

Merging applicant lists, classifying complaints, collecting department submissions, generating individual notices, computing execution rates, renaming files in bulk.

### Tasks not worth automating

Once-a-year work, judgment-heavy decisions, approvals themselves, and raw personal-data processing.

### Hands-on — your first automation in 5 minutes

1. Open **[sheets.new](https://sheets.new)**
2. Enter \`Department\` in A1 and \`Amount\` in B1, then some rows
3. Menu **Extensions → Apps Script**
4. Replace the code with the sample, **Save**, then **Run**
5. Approve the permission prompt (Advanced → Go to project → Allow)
6. Back in the sheet, column D now holds the totals

> You wrote no code. Today you learn to get that code from an AI by describing what you want.`,
    },
    {
      title: '따라하기 실습 · 말로 설명해서 도구 만들기',
      titleEn: 'Hands-on — Build a Tool by Describing It',
      content: `**소요 25분 · 준비물: 구글 계정, 브라우저**

말로 설명한 업무 흐름이 실제로 도는 도구가 되는 과정을 **처음부터 끝까지 한 번** 통과합니다. 코드는 한 줄도 쓰지 않습니다.

> **실제 업무 파일로 하지 마세요.** 이 실습은 **가짜 데이터로 만든 연습용 시트**로만 합니다. 실제 데이터는 4교시에서 개인정보를 지운 뒤에 씁니다.

---

### STEP 0 · 연습용 시트 만들기

\`sheets.new\` 를 주소창에 입력해 빈 시트를 열고, 아래를 그대로 입력합니다.

| | A | B | C | D |
|---|---|---|---|---|
| **1** | 접수번호 | 부서 | 항목 | 금액 |
| **2** | 2026-0142 | 복지정책과 | 경로당 보수 | 12000 |
| **3** | 2026-0143 | 어르신복지과 | 냉난방 교체 | 8400 |
| **4** | 2026-0144 | 문화체육과 | 시설 점검 | 3200 |

시트 이름(아래쪽 탭)을 **\`신청접수\`** 로 바꿉니다.

**✅ 확인** — 1행에 제목이 있고, 2~4행에 데이터가 있고, 탭 이름이 \`신청접수\` 면 준비 완료입니다.

---

### STEP 1 · 업무 흐름을 네 문장으로 적기

**이 단계가 오늘 하루 전체에서 가장 중요합니다.** 아래 네 칸을 종이나 메모장에 채웁니다.

| 칸 | 질문 | 이 실습의 답 |
|----|------|-------------|
| **들어오는 것** | 무엇이 입력으로 들어오나? | \`신청접수\` 시트의 표 (접수번호·부서·항목·금액) |
| **하는 일** | 그걸로 무엇을 하나? | 부서별로 묶어서 건수와 금액 합계를 낸다 |
| **나오는 것** | 결과가 어디에 어떤 모양으로 나오나? | 새 시트 \`부서별집계\` 에 부서·건수·합계 표로 |
| **사람이 볼 것** | 담당자가 무엇을 확인해야 하나? | 합계가 원본과 맞는지, 부서 이름이 빠지지 않았는지 |

**✅ 확인** — 네 칸이 다 채워졌나요? **한 칸이라도 비면 AI는 그 부분을 자기 마음대로 정합니다.** 비어 있으면 다시 채우세요.

---

### STEP 2 · 코드 말고 "구조"부터 물어봅니다

AI에게 바로 코드를 시키지 않습니다. 먼저 **이해한 게 맞는지** 확인합니다.

\`\`\`text
나는 구글 스프레드시트로 행정 업무를 자동화하려는 공무원이야. 코딩은 못 해.

들어오는 것 — "신청접수" 시트의 표. 1행이 제목 행이고 열은
             접수번호(A) / 부서(B) / 항목(C) / 금액(D) 이야.
하는 일 —    부서별로 묶어서 건수와 금액 합계를 낸다.
나오는 것 —  새 시트 "부서별집계"에 부서 / 건수 / 합계 표로.
사람이 볼 것 — 합계가 원본과 맞는지.

아직 코드는 쓰지 마.
네가 이해한 처리 순서를 번호 목록으로 5단계 이내로 먼저 알려 줘.
내가 빠뜨린 조건이 있으면 그것도 질문해 줘.
\`\`\`

**✅ 확인** — 코드가 아니라 **번호 목록**이 나와야 합니다. 그리고 이런 되물음이 오면 아주 좋은 신호입니다.

\`\`\`text
확인이 필요한 것
1. 금액이 비어 있는 행은 0으로 볼까요, 건너뛸까요?
2. "부서별집계" 시트가 이미 있으면 덮어쓸까요, 새로 만들까요?
\`\`\`

> **왜 구조부터 보나요?** 여기서 틀린 걸 잡으면 한 문장으로 고칩니다. 코드를 받은 뒤에 발견하면 처음부터 다시 해야 합니다.

---

### STEP 3 · 되물음에 답하고 코드를 받습니다

\`\`\`text
1번 — 금액이 비어 있으면 0으로 계산해 줘.
2번 — 이미 있으면 내용을 지우고 다시 채워 줘.

이제 Google Apps Script 코드를 만들어 줘.
- 붙여넣고 바로 실행되는 완성된 코드로
- 각 줄 위에 이게 무슨 일을 하는지 한글 주석
- 함수 이름은 부서별집계_만들기
\`\`\`

**✅ 확인** — \`function 부서별집계_만들기() {\` 로 시작하는 코드 한 덩어리가 나오면 성공입니다.

---

### STEP 4 · 붙여넣고 실행합니다

1. 시트 상단 **[확장 프로그램] → [Apps Script]** 를 누릅니다.
2. 편집기에 있던 내용을 **모두 지우고**, 받은 코드를 붙여넣습니다.
3. **저장**(💾) 을 누릅니다.
4. 함수 이름이 \`부서별집계_만들기\` 인지 확인하고 **[▶ 실행]** 을 누릅니다.
5. 처음 한 번은 권한 창이 뜹니다 — **고급 → 프로젝트로 이동 → 허용**.

**✅ 확인** — 아래쪽 실행 로그에 **"실행이 완료됨"** 이 보이면 성공입니다.

---

### STEP 5 · 결과를 확인합니다

시트로 돌아가 **\`부서별집계\`** 탭이 새로 생겼는지 봅니다.

| 결과 | 판정 | 다음 |
|------|------|------|
| 부서·건수·합계 표가 생김 | **성공** | STEP 6으로 |
| 빨간 오류 줄이 나옴 | 정상적인 과정 | 아래 방법으로 |
| 표는 생겼는데 숫자가 이상함 | 조건 누락 | STEP 2의 네 칸을 다시 보기 |

**오류가 났을 때** — 고치려 하지 말고 **오류 문장을 그대로 복사해** 대화창에 붙여넣습니다.

\`\`\`text
실행했더니 이런 오류가 났어. 무슨 뜻이고 어떻게 고치면 되는지
고친 코드 전체로 다시 줘.

(오류 문장 그대로 붙여넣기)
\`\`\`

> 오류는 실패가 아닙니다. **오류 문장을 붙여넣는 것이 정식 절차**입니다. 두세 번 주고받으면 대부분 해결됩니다.

---

### STEP 6 · 내 업무를 대입해 봅니다

방금 흐름에 **내 업무**를 넣어 봅니다. 아래는 실제로 자동화가 잘 되는 유형입니다.

| 업무 유형 | 들어오는 것 | 나오는 것 | 난이도 |
|-----------|------------|----------|--------|
| **신청자 명단 정리** | 여러 부서가 낸 신청 파일 | 중복 제거·정렬된 한 개 명단 | 쉬움 |
| **민원 분류** | 민원 접수 목록 | 유형별로 나뉘고 담당과가 붙은 표 | 보통 |
| **실적 취합** | 부서별 월간 실적 파일 | 부서·항목별 집계표와 전월 대비 | 보통 |
| **안내문 생성** | 대상자 명단 + 안내문 틀 | 대상자별로 이름·일자가 채워진 안내문 | 쉬움 |

**✅ 확인** — 이 중 하나에 내 업무가 걸리나요? **그것이 다음 시간에 고를 후보**입니다. 지금 메모해 두세요.

---

## 이 과정에서 완성하는 결과물 3가지

오늘 하루가 끝나면 **손에 남는 것이 세 가지**입니다. 지금 무엇을 만드는지 알고 시작해야 중간에 길을 잃지 않습니다.

### 1. 자동화 템플릿

내가 고른 업무를 **다음 달에도 그대로 돌릴 수 있는 한 벌**입니다.

| 구성 | 내용 |
|------|------|
| 입력 시트 | 열 이름과 순서가 고정된 표 |
| 실행 코드 | Apps Script 에 붙여넣어 둔 코드 |
| 사용 설명 | 다음 사람이 읽고 그대로 돌릴 수 있는 3~5줄 |

> 템플릿의 가치는 **다음 달에 다시 안 만들어도 되는 것**입니다.

### 2. 업무지원 도구

실제로 **버튼을 눌러 쓰는 도구**입니다. 시트의 메뉴나 버튼, 또는 폼 하나입니다.

| 구성 | 내용 |
|------|------|
| 입력 방법 | 시트에 붙여넣기 / 폼으로 제출 |
| 실행 방법 | 시트 메뉴의 버튼 하나 |
| 결과 위치 | 어느 시트 어느 탭에 나오는지 |
| 검토 지점 | 사람이 눈으로 확인할 항목 |

### 3. 적용계획서

만든 도구를 **실제 업무에 언제·어떻게 넣을지** 적은 한 장입니다.

| 항목 | 무엇을 적나 |
|------|------------|
| 적용 업무 | 어떤 업무에 쓰는지 |
| 적용 시점 | 언제부터 |
| 사용자 | 나만 / 우리 팀 / 부서 전체 |
| 검토 절차 | 결과를 누가 어떻게 확인하는지 |
| 개인정보 | 어떤 정보를 어떻게 처리했는지 |
| 인수인계 | 담당자가 바뀌면 누가 이어받는지 |

> 셋 중 **적용계획서가 가장 중요합니다.** 도구는 만들었는데 계획서가 없으면, 담당자가 바뀌는 순간 아무도 못 씁니다.`,
      contentEn: `**25 minutes · You need a Google account and a browser**

Pass once through the whole path — from describing a workflow in words to a tool that actually runs. You will not write a single line of code.

> **Do not use real work files.** This practice uses a **dummy sheet only.** Real data comes in Session 4, after personal information is removed.

### STEP 0 · Make a practice sheet
Open \`sheets.new\` and enter a small table: header row (접수번호 / 부서 / 항목 / 금액) plus three data rows. Rename the tab \`신청접수\`.
**✅ Check** — header in row 1, data in rows 2–4, tab renamed.

### STEP 1 · Write the workflow in four sentences
This is **the single most important step of the day.**

| Box | Question |
|---|---|
| **Input** | What comes in? |
| **Processing** | What is done with it? |
| **Output** | Where and in what shape does the result appear? |
| **Human check** | What must the officer verify? |

**✅ Check** — all four filled. **Any blank box is a decision the AI will make for you.**

### STEP 2 · Ask for the structure, not the code
Give the four boxes, then: "Don't write code yet. List the processing steps you understood, in five numbered steps. Ask me about anything I left out."
**✅ Check** — you get a numbered list, and ideally follow-up questions like "should blank amounts count as zero or be skipped?"

> **Why structure first?** A mistake caught here costs one sentence. Caught after the code, it costs the whole attempt.

### STEP 3 · Answer the questions, then request the code
Answer, then ask for complete, paste-and-run Apps Script with Korean comments on each line and a specific function name.

### STEP 4 · Paste and run
**Extensions → Apps Script**, clear the editor, paste, **Save**, pick the function, **Run**. Approve the permission prompt on first run (Advanced → Go to project → Allow).
**✅ Check** — the execution log says the run completed.

### STEP 5 · Verify the result

| Result | Verdict | Next |
|---|---|---|
| The summary tab appeared | **Success** | STEP 6 |
| A red error line | Normal | Paste the error text back to the AI verbatim |
| Table appeared but numbers look wrong | Missing condition | Revisit the four boxes |

> Errors are not failure. **Pasting the error text back is the standard procedure.**

### STEP 6 · Map your own work onto it

| Task type | Input | Output | Difficulty |
|---|---|---|---|
| **Consolidating applicant lists** | Files from several departments | One deduplicated, sorted list | Easy |
| **Classifying citizen requests** | The intake list | Sorted by type with the owning division | Medium |
| **Aggregating performance figures** | Monthly departmental files | Totals by department and item, vs last month | Medium |
| **Generating notices** | Recipient list + a template | One filled notice per recipient | Easy |

**✅ Check** — does one of these match your work? **That is your candidate for the next session.**

## The three things you finish the course with

**1. An automation template** — input sheet with fixed columns, the script, and 3–5 lines of usage notes. Its value is *not having to rebuild it next month.*

**2. A work-support tool** — something you actually press a button to use: how data goes in, the one button that runs it, where the result lands, what a human checks.

**3. An adoption plan** — one page: which task, from when, who uses it, who reviews the output, how personal data was handled, who takes over when you move on.

> Of the three, **the adoption plan matters most.** A tool without one stops being used the moment its owner changes desks.`,
    },
  ],
};

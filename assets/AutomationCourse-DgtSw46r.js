import{C as o,l as e,L as i}from"./index-DmiBbRXz.js";import{G as s}from"./GuidePage-CS352p6y.js";/* empty css                 */import"./SEOHead-CP7Ljp_q.js";import"./index-nd4mE6ii.js";import"./index-QQsLyeDi.js";const a={id:"auto-overview",icon:"fa-map",title:"과정 개요 · 시간표",titleEn:"Overview & Schedule",sections:[{title:"이 과정은 이렇게 진행됩니다",titleEn:"How This Course Runs",content:`**바이브코딩 기반 행정업무 자동화 도구 제작** — 하루 8시간, 강사 정동엽.

코딩을 배우는 과정이 **아닙니다.** 내가 매주 반복하는 업무 하나를 골라, AI에게 말로 설명해서 **버튼 하나로 도는 도구**를 만들어 퇴근하는 과정입니다.

> 프로그래밍을 몰라도 됩니다. 화면에 나오는 순서를 그대로 따라 하시면 됩니다. 막히면 그 자리에서 손을 드세요.

### 하루 시간표

| 시간 | 교과목명 | 주요 학습 내용 | 산출물 |
|------|---------|--------------|--------|
| 09:00~10:00 | 바이브코딩과 행정업무 자동화 이해 | 자연어로 업무 흐름을 설명하면 AI가 코드·자동화 구조를 생성하는 방식 이해 / 자동화 가능 업무 사례 | — (강의·실습) |
| 10:00~11:00 | 자동화 대상 업무 선정 | 반복·비효율 업무 1개 선정, 입력자료·처리과정·출력결과·검토 기준 정리, 전후 비교 | 자동화 대상 업무 정의서 |
| 11:00~12:00 | 업무흐름 및 화면구성 설계 | 입력값·버튼·처리절차·결과 화면 설계, AI에게 전달할 요구사항 명세서 작성 | 자동화 도구 설계서 및 프롬프트 |
| 12:00~13:00 | *중식* | — | — |
| 13:00~14:00 | 자동화 코드·템플릿 생성 | ChatGPT/Claude로 Apps Script·함수·프롬프트 생성, 실제 시트에 적용 | 1차 자동화 템플릿 |
| 14:00~15:00 | 자동화 도구 구현 및 테스트 | 버튼 실행·자동 분류·요약문 생성 기능 테스트, 오류 수정 프롬프트, 재실행 루틴 | 작동 가능한 자동화 도구 초안 |
| 15:00~16:00 | 보안·오류 대응 및 개선 | 개인정보·보안·저작권·내부자료 입력 제한 기준, 담당자 검토 절차 설계 | 오류 대응 체크리스트 및 보안 유의사항 |
| 16:00~17:00 | 부서 적용계획 작성 ① | 실행계획 작성, 적용 업무·사용 대상·예상 절감시간·확산 가능성 정리 | 자동화 도구 적용계획서 |
| 17:00~18:00 | 부서 적용계획 작성 ② | 경진대회·혁신과제 발전 아이디어, 결과물 공유 및 강사 피드백 | 적용계획서 및 개선사항 |

### 오늘 손에 남는 것 4가지

| # | 산출물 | 어디에 쓰나 |
|---|--------|-----------|
| 1 | 자동화 대상 업무 정의서 | 무엇을 자동화할지 부서에 설명할 때 |
| 2 | 자동화 도구 설계서 + 프롬프트 | 다음에 다른 업무를 자동화할 때 그대로 재사용 |
| 3 | **작동하는 자동화 도구** | 내일부터 실제 업무에 사용 |
| 4 | 오류 대응 체크리스트 + 적용계획서 | 부서 확산·혁신과제 제출 |

### 화면 그림 따라하기 (혼자서도 됩니다)

강의를 놓쳤거나 집에서 다시 해보실 때 씁니다. **화면 그림 위의 주황색 번호를 그대로 짚어가며** 진행하고, 단계마다 체크하면 어디까지 했는지 저장됩니다.

| 따라하기 | 무엇을 | 걸리는 시간 |
|---------|-------|-----------|
| [구글 시트 자동화 첫 실행](/setup/apps-script) | 시트 만들기 → 코드 붙여넣기 → 권한 승인 → 결과 확인 (7단계) | 약 10분 |
| [Claude에 공공데이터 연결하기](/setup/mcp) | 앱 설치 → 커넥터 등록 → 첫 질문 (7단계) | 약 15분 |

> 두 가지 모두 **설치할 프로그램이 없고 비용이 들지 않습니다.** 막히는 지점마다 "이 화면이 안 나오면" 안내를 붙여 두었습니다.

### 교육 전 준비

| 항목 | 확인 |
|------|------|
| 구글 계정 | 로그인이 되는지 미리 확인 (개인 계정도 무방) |
| 노트북 | 크롬(Chrome) 브라우저 권장 |
| ChatGPT 또는 Claude | 무료 계정으로도 실습 가능 |
| **내 업무 자료 1건** | 매주 반복하는 업무의 엑셀 파일 하나 — **개인정보는 지우거나 가명으로 바꿔서** |

> **개인정보는 반드시 지우고 오세요.** 이름은 '홍길동/김철수', 연락번호는 '010-0000-0000' 처럼 바꾸면 됩니다. 실습에는 아무 지장이 없습니다.

### 왜 '바이브코딩'인가

말로 설명하면 AI가 코드를 만들어 주는 방식을 바이브코딩이라 부릅니다. 예전에는 이런 도구를 만들려면 개발 부서에 요청하고 몇 달을 기다려야 했습니다. 지금은 **업무를 가장 잘 아는 담당자가 직접** 만듭니다.

실제로 그렇게 하고 있는 공무원이 있습니다. 광진구 류승인 주무관은 현직 공무원 신분으로 12개 이상의 실무 도구를 만들어 공개하고 있습니다. 이 과정 마지막에 그 사례를 함께 봅니다.
→ [참고사이트에서 보기](/reference)`,contentEn:`**Building administrative automation tools with vibe coding** — one full day, 8 hours. Instructor: Jeong Dong-yeop.

This is **not** a programming course. You pick one task you repeat every week, describe it to an AI in plain language, and leave with **a tool that runs at the press of a button**.

### Daily schedule

| Time | Module | Content | Deliverable |
|------|--------|---------|-------------|
| 09:00-10:00 | Understanding vibe coding | How describing a workflow in plain language produces code | — |
| 10:00-11:00 | Choosing the task | Pick one repetitive task; map inputs, process, outputs, review criteria | Task definition |
| 11:00-12:00 | Flow and screen design | Inputs, buttons, steps, result screen; write the AI requirement spec | Design and prompt |
| 12:00-13:00 | *Lunch* | — | — |
| 13:00-14:00 | Generating code and templates | Produce Apps Script and functions with ChatGPT/Claude; apply to a real sheet | First template |
| 14:00-15:00 | Building and testing | Button runs, auto-classification, summaries; error fixing and re-run routine | Working draft tool |
| 15:00-16:00 | Security and error handling | Personal data, security, copyright limits; reviewer checkpoints | Checklist |
| 16:00-17:00 | Rollout plan I | Target tasks, users, time saved, spread potential | Rollout plan |
| 17:00-18:00 | Rollout plan II | Innovation-contest ideas, sharing and feedback | Final plan |

### What you take home

A task definition, a reusable design and prompt, **a working tool**, and a rollout plan.

### Before you come

A Google account, a laptop (Chrome recommended), a ChatGPT or Claude account, and **one real work file with personal data removed**.`}]},r={id:"auto-01",icon:"fa-lightbulb",title:"1교시 09:00~10:00 · 바이브코딩 이해",titleEn:"Session 1 — Understanding Vibe Coding",sections:[{title:"말로 설명하면 도구가 만들어집니다",titleEn:"Describe It, and the Tool Appears",content:`### 이 시간에 하는 일

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
→ [류승인 주무관 사례 보기](/reference)`,contentEn:`### This session

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

> You wrote no code. Today you learn to get that code from an AI by describing what you want.`}]},l={id:"auto-02",icon:"fa-crosshairs",title:"2교시 10:00~11:00 · 자동화 대상 업무 선정",titleEn:"Session 2 — Choosing the Task",sections:[{title:"내 업무 중 하나를 고릅니다",titleEn:"Pick One of Your Own Tasks",content:`### 이 시간에 하는 일

| 학습 목표 | 개인 또는 부서 업무 중 반복·비효율 업무 1개를 골라 정의한다 |
|---|---|
| 형태 | 실습 |
| **산출물** | **자동화 대상 업무 정의서** |

> 오늘 하루 종일 이 업무 하나만 붙잡습니다. **욕심내지 마세요.** 작고 명확한 것이 끝까지 갑니다.

### 1단계 · 후보 3개 적기 (5분)

종이나 시트에 **내가 매주 반복하는 일** 3개를 적습니다. 아래 질문에 걸리는 것을 찾으세요.

| 질문 | 예 |
|------|-----|
| 매주·매월 똑같이 반복하는가? | 주간 실적 취합, 월간 집행 현황 |
| 엑셀을 열어 손으로 옮기는가? | 여러 부서 제출 파일 합치기 |
| 규칙이 정해져 있는가? | "A열이 비면 제외", "○○과 것만" |
| 하다가 자주 틀리는가? | 복사·붙여넣기 하다 행이 밀림 |

### 2단계 · 하나만 고르기 (5분)

3개 중 **아래 표에서 점수가 가장 높은 것**을 고릅니다.

| 기준 | 3점 | 2점 | 1점 |
|------|-----|-----|-----|
| 반복 주기 | 매주 이상 | 매월 | 분기 이하 |
| 한 번에 걸리는 시간 | 1시간 이상 | 30분~1시간 | 30분 미만 |
| 규칙 명확성 | 규칙이 딱 정해짐 | 대체로 정해짐 | 그때그때 다름 |
| 개인정보 | 없음 | 가명 처리 가능 | 원본 필수 |

> **개인정보 항목이 1점이면 오늘 대상에서 빼세요.** 다른 후보로 바꿉니다.

### 3단계 · 업무 정의서 작성 (30분)

시트를 새로 하나 열어 아래 표를 그대로 만들고 채웁니다. **이것이 첫 번째 산출물입니다.**

| 항목 | 무엇을 적나 | 작성 예시 |
|------|-----------|----------|
| 업무명 | 한 줄로 | 주간 부서별 실적 취합 |
| 담당 | 부서·직위 | 총무과 주무관 |
| 주기 | 얼마나 자주 | 매주 금요일 |
| 현재 소요시간 | 솔직하게 | 약 90분 |
| **입력자료** | 무엇이 들어오나 | 각 팀 제출 시트 6개 (팀명/항목/건수/비고) |
| **처리과정** | 지금 손으로 하는 순서 | ① 6개 파일 열기 ② 한 시트에 복사 ③ 중복 행 삭제 ④ 팀별 합계 ⑤ 요약표 작성 |
| **출력결과** | 무엇이 나와야 하나 | 팀별 건수 합계표 + 전주 대비 증감 |
| **담당자 검토 기준** | 사람이 꼭 봐야 할 것 | 합계가 원본 총합과 일치하는지, 누락 팀 없는지 |
| 예외 상황 | 가끔 생기는 일 | 팀이 양식을 다르게 제출, 값이 빈 행 |

### 4단계 · 자동화 전/후 비교 (10분)

| 항목 | 자동화 전 | 자동화 후 (예상) |
|------|----------|----------------|
| 소요시간 | 90분 | 5분 (실행 1분 + 검토 4분) |
| 오류 가능성 | 복사 중 행 누락 | 규칙대로 처리, 대신 규칙 자체가 틀리면 전부 틀림 |
| 다른 사람이 할 수 있나 | 인수인계 필요 | 버튼만 누르면 됨 |
| 기대효과 | — | 주 85분 × 4주 = **월 약 5.7시간** |

> **월 절감시간을 꼭 계산해 두세요.** 7교시 적용계획서와 혁신과제 제출에 그대로 씁니다.

### 5단계 · AI에게 검토받기 (10분)

작성한 정의서를 ChatGPT나 Claude에 붙여넣고 아래를 그대로 물어보세요.

\`\`\`text
너는 행정업무 자동화를 돕는 컨설턴트야. 아래는 내가 자동화하려는 업무 정의서야.

(정의서 붙여넣기)

1. 이 업무가 자동화에 적합한지 판단하고 이유를 알려줘.
2. 정의서에서 빠진 정보가 있으면 무엇인지 알려줘.
3. 자동화했을 때 생길 수 있는 문제 3가지를 알려줘.
4. 이 업무를 더 작게 쪼갤 수 있다면 어떻게 쪼갤지 제안해줘.

내가 적지 않은 사실을 지어내지 말고, 모르는 건 물어봐줘.
\`\`\`

### 잘 고른 예 / 잘못 고른 예

| 구분 | 업무 | 판단 |
|------|------|------|
| 좋음 | 매주 6개 팀 제출 시트 합치고 중복 제거 | 반복·규칙 명확·시간 큼 |
| 좋음 | 민원 접수 내용을 유형별로 분류 | 규칙화 가능, 예시로 학습 가능 |
| 좋음 | 명단에서 개인별 안내문 일괄 생성 | 양식 고정, 반복 |
| **나쁨** | 예산 편성 방향 결정 | 판단 업무 — 자동화 대상 아님 |
| **나쁨** | 민원인에게 최종 답변 발송 | 책임이 따르는 결재 행위 |
| **나쁨** | 인사 자료 정리 | 개인정보 원본이 필수 |

### 산출물 확인

- [ ] 업무 정의서 9개 항목이 모두 채워졌다
- [ ] 처리과정이 **번호 순서**로 적혀 있다
- [ ] 담당자 검토 기준이 적혀 있다
- [ ] 월 절감시간이 숫자로 계산되어 있다
- [ ] 개인정보가 없거나 가명 처리 방법이 정해졌다

> 다섯 개 모두 체크되면 3교시로 넘어갑니다. 하나라도 비면 그 항목을 먼저 채우세요. **여기서 흐릿하면 뒤가 전부 흐려집니다.**`,contentEn:`### This session

Pick one repetitive task and define it. **Deliverable: task definition sheet.**

### Step 1 — List three candidates

Anything you repeat weekly, move by hand in Excel, that follows fixed rules, and that you often get wrong.

### Step 2 — Score and choose one

Score each on frequency, time taken, rule clarity, and personal-data exposure. **If personal data scores lowest, drop that candidate today.**

### Step 3 — Write the definition

Task name, owner, frequency, current time, **inputs**, **current manual steps**, **required output**, **reviewer criteria**, exceptions.

### Step 4 — Before/after comparison

Compute the monthly time saved — you will reuse this number in the rollout plan.

### Step 5 — Have the AI review it

Paste the definition and ask whether it suits automation, what is missing, what could go wrong, and how to split it smaller.

### Checklist

All nine fields filled, steps numbered, reviewer criteria written, monthly saving calculated, personal data resolved.`}]},c={id:"auto-03",icon:"fa-pen-ruler",title:"3교시 11:00~12:00 · 업무흐름 및 화면구성 설계",titleEn:"Session 3 — Flow and Screen Design",sections:[{title:"만들기 전에 그림을 그립니다",titleEn:"Draw It Before You Build It",content:`### 이 시간에 하는 일

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

> 점심 식사 후 4교시에 이 프롬프트를 **그대로 붙여넣기만** 하면 됩니다.`,contentEn:`### This session

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

Tabs renamed, columns listed by letter, steps numbered and concrete, result location specified, prompt ready to paste.`}]},p={id:"auto-04",icon:"fa-wand-magic-sparkles",title:"4교시 13:00~14:00 · 자동화 코드·템플릿 생성",titleEn:"Session 4 — Generating Code",sections:[{title:"프롬프트를 넣고 코드를 받습니다",titleEn:"Paste the Prompt, Get the Code",content:`### 이 시간에 하는 일

| 학습 목표 | ChatGPT 또는 Claude로 Apps Script를 생성하고 실제 시트에 적용한다 |
|---|---|
| 형태 | 실습 |
| **산출물** | **1차 자동화 템플릿** |

### 따라하기 — 순서대로 하세요

#### 1. AI 열기

ChatGPT([chatgpt.com](https://chatgpt.com)) 또는 Claude([claude.ai](https://claude.ai)) 중 하나를 엽니다. 둘 다 무료 계정으로 됩니다.

> 이 실습에서는 **Claude 를 권합니다.** 코드를 통째로 주고, 오류 설명이 친절합니다.

#### 2. 3교시 프롬프트 붙여넣기

3교시에 만든 프롬프트를 **그대로** 붙여넣고 Enter 를 누릅니다.

#### 3. 답변에서 코드만 골라내기

답변에 코드 상자가 나옵니다. 상자 **오른쪽 위 복사 버튼**을 누릅니다.

| 이런 게 보이면 | 뜻 |
|-------------|-----|
| \`function onOpen() {\` | 메뉴를 만드는 부분 — 있어야 합니다 |
| \`function 어떤이름() {\` | 실제 작업을 하는 부분 |
| \`// 한국어 설명\` | 주석 — 컴퓨터는 무시하고 사람만 읽습니다 |

#### 4. 시트에 붙여넣기

1. 구글 시트 탭으로 갑니다
2. 상단 **확장 프로그램 → Apps Script**
3. 편집기에 있던 내용을 **전부 지웁니다** (Ctrl+A → Delete)
4. 복사한 코드를 붙여넣습니다 (Ctrl+V)
5. **저장** (디스크 모양 또는 Ctrl+S)

#### 5. 시트 새로고침

시트 탭으로 돌아가 **브라우저 새로고침(F5)** 을 합니다.
잠시 뒤 상단 메뉴에 **'실적 취합'** 같은 새 메뉴가 생깁니다.

> 메뉴가 안 보이면 10초쯤 기다렸다가 다시 새로고침하세요. 그래도 없으면 5교시 오류 대응표를 보세요.

#### 6. 실행

새로 생긴 메뉴를 클릭합니다. 처음이면 권한 요청이 뜹니다.

**권한 검토 → 내 계정 선택 → 고급 → (프로젝트명)(으)로 이동 → 허용**

#### 7. 결과 확인

'요약' 시트에 결과가 들어갔는지 봅니다.

### 업무 유형별 프롬프트 예제

내 업무가 아래에 해당하면 그대로 가져다 쓰세요. **시트 이름과 열 구성만 내 것으로 바꾸면 됩니다.**

#### ① 신청자 명단 정리 (여러 시트 합치고 중복 제거)

\`\`\`text
너는 Google Apps Script 전문가야. 나는 코딩을 모르니 코드와 설치 방법을 단계별로 알려줘.

'1팀', '2팀', '3팀' 시트에 같은 양식의 신청자 명단이 있어.
각 시트: 1행 제목, 2행부터 데이터, A열 성명, B열 소속, C열 신청일, D열 연락처

아래 순서로 처리하는 Apps Script를 만들어줘.
1. 세 시트의 데이터를 하나로 합친다
2. A열(성명)과 B열(소속)이 모두 같은 행은 첫 번째만 남긴다
3. C열(신청일) 오름차순으로 정렬한다
4. '통합명단' 시트에 결과를 쓴다 (기존 내용 지우고)
5. 완료되면 "총 ○명, 중복 ○건 제거" 알림을 띄운다

상단 메뉴에 '명단 통합' 메뉴를 만들어 실행되게 해줘.
전체 코드를 한 덩어리로 주고, 한국어 주석을 달아줘.
내가 적지 않은 규칙을 임의로 만들지 마.
\`\`\`

#### ② 민원 분류 (유형·소관 부서 자동 지정)

\`\`\`text
너는 Google Apps Script 전문가야. 나는 코딩을 모르니 단계별로 알려줘.

'민원' 시트: 1행 제목, 2행부터 데이터, A열 접수일, B열 민원내용
B열 내용에 아래 단어가 들어가면 C열에 유형, D열에 소관을 자동으로 채워줘.

| 포함 단어 | 유형 | 소관 |
|---|---|---|
| 가로등, 도로, 포트홀 | 시설물 유지보수 | 도로과 |
| 주차, 단속, 견인 | 단속 이의 | 교통과 |
| 지원금, 신청, 자격 | 제도 문의 | 해당 사업부서 |
| 공원, 벤치, 화단 | 시설물 유지보수 | 공원녹지과 |

어디에도 해당하지 않으면 C열에 '분류 필요', D열에 '확인 필요'라고 써줘.
상단 메뉴에 '민원 분류' 메뉴를 만들어줘.
전체 코드를 한 덩어리로, 한국어 주석과 함께 줘.
\`\`\`

#### ③ 명단에서 개인별 안내문 일괄 생성

\`\`\`text
너는 Google Apps Script 전문가야. 나는 코딩을 모르니 단계별로 알려줘.

'명단' 시트: 1행 제목, 2행부터 데이터, A열 성명, B열 교육과정, C열 일시, D열 장소
아래 양식으로 개인별 안내문을 만들어 E열에 넣어줘.

양식:
"○○○ 님, 안녕하십니까. 신청하신 [교육과정] 교육이 [일시] [장소]에서 진행됩니다. 참석에 착오 없으시기 바랍니다."

- 대괄호 부분은 각 행의 값으로 바꾼다
- 값이 빈 행은 건너뛴다
- 상단 메뉴에 '안내문 생성' 메뉴를 만든다
전체 코드를 한 덩어리로, 한국어 주석과 함께 줘.
\`\`\`

#### ④ 집행률 계산 + 조건부 서식

\`\`\`text
너는 Google Apps Script 전문가야. 나는 코딩을 모르니 단계별로 알려줘.

'집행현황' 시트: 1행 제목, 2행부터 데이터, A열 부서명, B열 예산액, C열 집행액
아래를 처리하는 Apps Script를 만들어줘.

1. D열에 집행률(C/B)을 백분율로 계산해 넣는다 (소수점 1자리)
2. 집행률 90% 초과면 해당 행 D칸을 빨강, 50% 미만이면 노랑으로 칠한다
3. B열이 0이거나 비어 있으면 D열에 '계산 불가'라고 쓴다
4. '요약' 시트에 전체 평균 집행률과 부서 수를 쓴다
5. 상단 메뉴에 '집행률 계산' 메뉴를 만든다

전체 코드를 한 덩어리로, 한국어 주석과 함께 줘.
\`\`\`

### AI가 되물으면

좋은 신호입니다. **모르는 걸 지어내지 않고 묻는 것**이 맞습니다.

| AI가 묻는 것 | 답하는 법 |
|------------|----------|
| "시트 이름이 뭔가요?" | 실제 탭 이름 그대로 |
| "제목 행이 몇 행인가요?" | "1행이 제목, 2행부터 데이터" |
| "중복 판단 기준은?" | "A열과 B열이 모두 같으면 중복" |
| "결과를 어디에 쓸까요?" | "'요약' 시트 A1부터, 기존 내용은 지우고" |

### 첫 결과가 마음에 안 들면

**처음부터 다시 쓰지 마세요.** 이어서 고쳐 달라고 하면 됩니다.

\`\`\`text
방금 준 코드에서 아래만 고쳐줘. 나머지는 그대로 두고 전체 코드를 다시 보여줘.

- 결과를 '요약' 시트가 아니라 '주간요약' 시트에 써줘
- 합계 옆에 전주 대비 증감도 계산해서 넣어줘
\`\`\`

### 산출물 확인

- [ ] AI에게서 코드를 받았다
- [ ] 시트의 Apps Script 편집기에 붙여넣고 저장했다
- [ ] 새로고침 후 상단에 새 메뉴가 생겼다
- [ ] 메뉴를 눌러 실행했다 (오류가 나도 괜찮습니다 — 5교시에서 잡습니다)
- [ ] **받은 프롬프트와 코드를 따로 저장해 뒀다** (다음에 재사용)

> 여기까지 오셨으면 오늘의 절반은 끝났습니다. 오류가 났다면 그것도 정상입니다. 5교시가 그걸 잡는 시간입니다.`,contentEn:`### This session

Generate Apps Script with ChatGPT or Claude and apply it to a real sheet. **Deliverable: first template.**

### Walkthrough

1. Open ChatGPT or Claude (Claude recommended — it returns whole code and explains errors kindly)
2. Paste your session-3 prompt as-is
3. Copy the code block
4. Sheet → **Extensions → Apps Script**, clear everything, paste, **Save**
5. Return to the sheet and **refresh (F5)** — a new menu appears
6. Click it; approve permissions (Advanced → Go to project → Allow)
7. Check the result sheet

### Ready-made prompts by task type

Merging applicant lists, auto-classifying complaints, generating individual notices, computing execution rates with conditional formatting. Change only sheet names and columns.

### If the AI asks a question

That is the right behavior — answer with the exact sheet name, header row, duplicate criteria, and result location.

### If the first result is wrong

Do not start over — ask it to change only the specific part and show the whole code again.`}]},d={id:"auto-05",icon:"fa-bug",title:"5교시 14:00~15:00 · 구현 및 테스트",titleEn:"Session 5 — Build and Test",sections:[{title:"돌려보고, 틀리면 AI에게 다시 시킵니다",titleEn:"Run It, and Send Errors Back to the AI",content:`### 이 시간에 하는 일

| 학습 목표 | 기능을 테스트하고, 오류를 AI에게 보내 고치는 루틴을 익힌다 |
|---|---|
| 형태 | 실습 |
| **산출물** | **작동 가능한 자동화 도구 초안** |

> 오류는 실패가 아닙니다. **오류 메시지를 AI에게 그대로 보내는 것**이 이 시간의 핵심 기술입니다.

### 기능 테스트 5가지

내 도구에 해당하는 것만 확인하세요.

| # | 확인할 것 | 어떻게 |
|---|---------|--------|
| 1 | 버튼(메뉴) 실행 | 메뉴를 눌렀을 때 도는가 |
| 2 | 자동 분류 | 규칙대로 값이 채워지는가 |
| 3 | 요약문 생성 | 문장이 제대로 만들어지는가 |
| 4 | 파일명·서식 정리 | 형식이 지정한 대로인가 |
| 5 | 안내문 생성 | 빈 값 행에서 이상한 문장이 안 나오는가 |

### 오류 수정 루틴 — 이 3단계만 반복합니다

#### 1단계 · 오류 메시지 전체 복사

빨간 오류 창이 뜨면 **텍스트를 전부 드래그해서 복사**합니다. 일부만 복사하면 AI가 원인을 못 찾습니다.

#### 2단계 · AI에게 그대로 보내기

\`\`\`text
방금 준 코드를 실행했더니 아래 오류가 났어.

(오류 메시지 전체 붙여넣기)

1. 왜 이런 오류가 났는지 초보자가 알아듣게 설명해줘.
2. 고친 전체 코드를 다시 보여줘. 일부만 말고 통째로.
3. 같은 오류가 다시 안 나게 하려면 뭘 조심해야 하는지 알려줘.
\`\`\`

#### 3단계 · 다시 붙여넣고 실행

편집기 내용을 **전부 지우고** 새 코드를 붙여넣습니다 → 저장 → 시트 새로고침 → 실행.

> 이 3단계를 두세 번 돌리면 대개 해결됩니다. 다섯 번을 넘어가면 손을 드세요 — 설계가 잘못됐을 수 있습니다.

### 자주 나오는 오류와 원인

| 오류 메시지 | 실제 원인 | 해결 |
|-----------|---------|------|
| \`시트를 찾을 수 없습니다\` / \`getSheetByName(...) is null\` | 시트 탭 이름이 코드와 다름 | 탭 이름을 코드와 **똑같이** (공백·괄호 주의) |
| \`권한이 필요합니다\` | 최초 실행 승인을 안 함 | 고급 → 프로젝트로 이동 → 허용 |
| 메뉴가 안 생김 | \`onOpen\` 이 없거나 새로고침 안 함 | F5 새로고침, 그래도 없으면 "onOpen 함수를 추가해줘" |
| \`Cannot read properties of undefined\` | 빈 행·빈 칸을 계산에 넣음 | "빈 값은 건너뛰게 해줘" 라고 요청 |
| 결과가 엉뚱한 열에 | 열 번호를 다르게 셈 | "A열이 1번, D열이 4번" 이라고 명시 |
| 숫자가 문자로 계산됨 | 시트 값이 텍스트 형식 | "숫자로 변환한 뒤 계산해줘" |
| 실행은 되는데 아무 일도 없음 | 데이터 시작 행이 다름 | "1행이 제목, 2행부터 데이터" 다시 명시 |
| \`시간 초과\` | 데이터가 너무 많음 | "한 번에 처리할 행 수를 나눠서" 요청 |

### 예외 상황 — 실제 행정업무에서 꼭 확인할 것

테스트가 성공해도 **아래 상황을 일부러 만들어서** 다시 돌려보세요. 실제 업무에서 반드시 생깁니다.

| 만들어 볼 상황 | 왜 |
|--------------|-----|
| 빈 행을 중간에 넣기 | 제출 파일에는 항상 빈 행이 있습니다 |
| 숫자 칸에 '-' 나 '해당없음' 입력 | 담당자마다 다르게 씁니다 |
| 팀명 앞뒤에 공백 넣기 | 복사·붙여넣기 하면 공백이 붙습니다 |
| 같은 팀명을 '총무과' / '총무 과' 로 | 표기가 통일되지 않습니다 |
| 데이터가 0건인 상태로 실행 | 아직 제출 전에 실행하는 일이 생깁니다 |
| 결과 시트에 이미 옛 데이터가 있는 상태 | 지난주 결과가 남아 있습니다 |

각각에서 이상하게 동작하면 AI에게 이렇게 말합니다.

\`\`\`text
팀명 앞뒤에 공백이 있으면 다른 팀으로 계산돼. 공백을 없앤 뒤에 비교하도록 고쳐줘.
그리고 숫자 칸에 '-'나 '해당없음' 같은 글자가 있으면 0으로 처리해줘.
고친 전체 코드를 다시 보여줘.
\`\`\`

### 실행 편하게 만들기 — 버튼 붙이기

메뉴 대신 시트 위에 **누를 수 있는 버튼**을 만들 수 있습니다.

1. 시트 상단 **삽입 → 그림** 을 클릭합니다
2. 도형으로 사각형을 그리고 안에 "실적 취합" 이라고 씁니다 → **저장 후 닫기**
3. 시트에 놓인 그림을 클릭 → 오른쪽 위 **⋮ → 스크립트 할당**
4. 함수 이름(예: \`실적취합\`)을 입력 → 확인
5. 이제 그 그림을 누르면 실행됩니다

> 40~50대 동료에게 넘길 때는 **메뉴보다 버튼이 훨씬 낫습니다.** 눈에 보이니까요.

### 산출물 확인

- [ ] 메뉴 또는 버튼을 눌러 도구가 끝까지 돈다
- [ ] 결과가 지정한 시트·위치에 나온다
- [ ] 빈 행·이상한 값을 넣어도 멈추지 않는다
- [ ] 0건일 때 안내 메시지가 뜬다
- [ ] 두 번 연속 실행해도 결과가 중복되지 않는다
- [ ] 최종 코드를 따로 저장해 뒀다

> 여섯 개가 모두 체크되면 **오늘 목표를 달성한 것입니다.** 남은 시간은 이 도구를 안전하고 남에게 넘길 수 있게 다듬습니다.`,contentEn:`### This session

Test the functions and learn the routine for sending errors back to the AI. **Deliverable: working draft tool.**

### The three-step fix routine

1. **Copy the entire error message** — partial copies hide the cause
2. **Send it back**: explain in beginner terms, show the corrected whole code, and how to avoid it next time
3. **Paste, save, refresh, run**

Two or three rounds usually settles it. Past five, raise your hand — the design may be wrong.

### Common errors

Sheet not found (tab name mismatch), permission needed (first-run approval), no menu (onOpen missing or no refresh), undefined property (empty rows), wrong column (index off), numbers as text, nothing happens (wrong start row), timeout (too much data).

### Deliberately test these

Blank rows mid-data, "-" in a number cell, whitespace around names, inconsistent spellings, zero rows, and stale data in the result sheet.

### Attach a button

Insert → Drawing → draw a rectangle with a label → Save → click the image → ⋮ → Assign script → enter the function name. Buttons beat menus when handing the tool to a colleague.`}]},h={id:"auto-06",icon:"fa-shield-halved",title:"6교시 15:00~16:00 · 보안·오류 대응 및 개선",titleEn:"Session 6 — Security and Error Handling",sections:[{title:"공공업무에 쓸 수 있게 다듬습니다",titleEn:"Make It Safe for Public Service",content:`### 이 시간에 하는 일

| 학습 목표 | 개인정보·보안·저작권 기준을 점검하고, 담당자 검토 절차와 사용 안내문을 만든다 |
|---|---|
| 형태 | 실습 |
| **산출물** | **오류 대응 체크리스트 + 보안 유의사항** |

> 도구가 도는 것과 **공공업무에 쓸 수 있는 것**은 다릅니다. 이 시간이 그 차이를 메웁니다.

### 1단계 · 입력 제한 기준 점검 (15분)

내 도구가 다루는 자료를 아래 표에 대보세요.

| 자료 유형 | 외부 AI 입력 | 어떻게 |
|----------|------------|--------|
| 공개된 통계·법령·보도자료 | **가능** | 그대로 |
| 부서 내부 집계 (개인 식별 불가) | **가능** | 그대로 |
| 이름·연락처·주소가 든 명단 | **불가** | 가명·더미로 바꾼 뒤 |
| 주민등록번호·계좌·카드번호 | **절대 불가** | 열 자체를 삭제 |
| 대외비·내부 검토 중 문서 | **불가** | 요약만, 원문은 금지 |
| 인사·징계·심의 자료 | **절대 불가** | 대상에서 제외 |

> **여기서 중요한 구분** — Apps Script 코드는 **내 구글 계정 안에서만** 돕니다. 시트 데이터가 외부로 나가지 않습니다. 위험한 것은 **ChatGPT·Claude 창에 자료를 붙여넣는 순간**입니다. 코드를 만들 때는 **자료가 아니라 구조만** 알려주면 됩니다.

### 가명 처리 3분 만에 하기

\`\`\`text
'명단' 시트의 A열 성명을 '민원인1', '민원인2' 순서로 바꾸고,
D열 연락처를 전부 '010-0000-0000' 으로 바꾸는 Apps Script를 만들어줘.
원본은 그대로 두고 '가명명단' 시트에 결과를 써줘.
상단 메뉴에 '가명 처리' 메뉴를 만들어줘.
전체 코드를 한국어 주석과 함께 한 덩어리로 줘.
\`\`\`

### 2단계 · 저작권·내부자료 기준 (10분)

| 상황 | 판단 |
|------|------|
| AI가 만든 코드를 부서에서 쓴다 | **가능** — 업무용 사용에 제약 없음 |
| AI가 만든 이미지를 홍보물에 쓴다 | **확인 필요** — 실존 인물·상표·기관 캐릭터가 들어갔는지 점검 |
| 타 기관 서식을 그대로 넣어 학습시킨다 | **주의** — 공개 자료인지 확인 |
| 도구를 다른 부서에 공유한다 | **가능** — 오히려 권장 |
| 도구를 외부에 공개한다 | **사전 협의** — 내부 규정 확인 |

### 3단계 · 담당자 검토 절차 설계 (15분)

**자동화의 가장 큰 위험은 "AI가 만들었으니 맞겠지" 입니다.** 사람이 볼 지점을 정해 둡니다.

| 단계 | 누가 | 무엇을 확인 |
|------|------|-----------|
| 실행 전 | 담당자 | 입력 자료가 최신인가, 빠진 팀이 없는가 |
| 실행 직후 | 담당자 | **원본 총합과 결과 총합이 일치하는가** |
| 결과 활용 전 | 담당자 | 이상한 값(음수·0·과다)이 없는가 |
| 대외 발송 전 | 팀장 | 개인정보가 결과에 남지 않았는가 |

> **총합 대조가 가장 강력한 검증입니다.** 원본 합계와 도구 결과 합계가 다르면 어딘가 빠진 것입니다.

AI에게 검증 기능을 추가로 요청하세요.

\`\`\`text
결과가 맞는지 확인할 수 있게, 실행이 끝나면 아래를 함께 알려주도록 고쳐줘.
- 원본 데이터 행 수
- 제외된 행 수와 그 이유
- 원본 금액 총합과 결과 금액 총합 (둘이 다르면 경고 표시)
고친 전체 코드를 다시 보여줘.
\`\`\`

### 4단계 · 사용 안내문 만들기 (10분)

내가 없을 때 동료가 쓸 수 있어야 합니다.

\`\`\`text
방금 만든 자동화 도구를, 컴퓨터에 익숙하지 않은 동료 공무원이 쓸 수 있도록
비전문가용 사용 설명서를 작성해줘.

- 화면에서 무엇을 클릭하는지 순서대로 번호를 붙여서
- 전문 용어는 쓰지 말고
- 실행 전에 확인할 것과 실행 후에 확인할 것을 나눠서
- 오류가 났을 때 누구에게 연락하면 되는지 적을 자리를 남겨서
- A4 한 장 분량으로
\`\`\`

### 5단계 · 오류 대응 체크리스트 완성 (10분)

아래를 시트에 만들어 도구와 함께 보관합니다. **이것이 산출물입니다.**

| 증상 | 먼저 확인할 것 | 그래도 안 되면 |
|------|-------------|--------------|
| 메뉴가 안 보인다 | 브라우저 새로고침(F5) | 담당자 연락 |
| 권한 창이 뜬다 | 고급 → 프로젝트로 이동 → 허용 | 담당자 연락 |
| 결과가 비어 있다 | 원본 시트에 데이터가 있는지 | 담당자 연락 |
| 합계가 원본과 다르다 | 빈 행·이상한 값이 있는지 | **사용 중단** 후 담당자 연락 |
| 결과가 두 번 겹쳤다 | 결과 시트를 지우고 재실행 | 담당자 연락 |
| 오류 창이 떴다 | **오류 메시지 전체를 캡처** | 캡처와 함께 담당자 연락 |

### 보안 유의사항 (도구와 함께 배포)

| # | 지킬 것 |
|---|--------|
| 1 | 개인정보가 든 원본을 ChatGPT·Claude 창에 붙여넣지 않는다 |
| 2 | 도구 수정이 필요하면 **자료가 아니라 구조**(시트명·열 구성)만 AI에게 말한다 |
| 3 | 결과를 대외 발송하기 전 개인정보가 남지 않았는지 확인한다 |
| 4 | 원본 파일은 항상 사본을 두고 도구를 돌린다 |
| 5 | 합계가 원본과 다르면 즉시 사용을 멈추고 담당자에게 알린다 |
| 6 | 도구를 공유할 때 사용 설명서를 함께 준다 |

### 산출물 확인

- [ ] 내 자료가 외부 AI에 넣어도 되는 것인지 표로 확인했다
- [ ] 개인정보가 있다면 가명 처리 방법을 정했다
- [ ] 담당자 검토 지점 4개를 정했다
- [ ] 도구에 **총합 대조 기능**을 넣었다
- [ ] A4 한 장짜리 사용 설명서를 받았다
- [ ] 오류 대응 체크리스트를 시트로 만들었다`,contentEn:`### This session

Check personal-data, security and copyright limits; design reviewer checkpoints and write a user guide. **Deliverable: error-handling checklist and security notes.**

### Input limits

Public statistics and internal aggregates are fine. Name/contact lists must be pseudonymized. ID and account numbers, confidential drafts, and HR records must never go in.

> **Key distinction** — Apps Script runs inside your own Google account; sheet data does not leave. The risk is **pasting material into the ChatGPT or Claude window**. When building the tool, describe the **structure, not the data**.

### Reviewer checkpoints

Before running (is the input current), right after (**does the total match the source**), before use (any impossible values), before external release (any personal data left).

> Total reconciliation is the strongest check. Ask the AI to report source rows, excluded rows with reasons, and source-versus-result totals with a warning on mismatch.

### User guide

Ask for a one-page, jargon-free, numbered guide for a colleague who is not comfortable with computers.

### Security notes to ship with the tool

Never paste raw personal data; describe structure not data; check results before external release; always work on a copy; stop immediately if totals disagree; ship the guide with the tool.`}]},u={id:"auto-07",icon:"fa-diagram-project",title:"7·8교시 16:00~18:00 · 부서 적용계획 작성",titleEn:"Sessions 7-8 — Rollout Plan",sections:[{title:"7교시 16:00~17:00 · 적용계획서 작성",titleEn:"Session 7 — Writing the Plan",content:`### 이 시간에 하는 일

| 학습 목표 | 만든 도구를 부서 업무에 적용하기 위한 실행계획을 작성한다 |
|---|---|
| 형태 | 실습 |
| **산출물** | **자동화 도구 적용계획서** |

> 오늘 만든 도구가 **내 서랍에만 남으면** 하루가 아깝습니다. 부서에 퍼뜨리는 계획까지 써야 끝입니다.

### 1단계 · 적용계획서 작성 (30분)

아래 표를 시트에 만들고 채웁니다.

| 항목 | 무엇을 적나 | 작성 예시 |
|------|-----------|----------|
| 도구명 | 만든 도구 이름 | 주간 실적 취합 도구 |
| 적용 업무 | 어떤 업무에 쓰나 | 매주 금요일 팀별 실적 취합 |
| 사용 대상 | 누가 쓰나 | 총무과 서무 담당 2명 |
| 적용 시점 | 언제부터 | 다음 주 금요일부터 시범, 2주 뒤 정식 |
| **예상 절감시간** | 2교시에서 계산한 값 | 회당 85분 × 주 1회 × 4주 = **월 5.7시간** |
| 검토 절차 | 누가 무엇을 확인 | 실행 후 담당자 총합 대조, 발송 전 팀장 확인 |
| 필요 지원 | 무엇이 있어야 하나 | 구글 계정, 사용 설명서 배포 |
| **확산 가능성** | 다른 데도 되나 | 같은 구조의 월간 집계, 타 부서 제출자료 취합 |
| 위험 요소 | 무엇이 걱정인가 | 팀별 양식 변경 시 재수정 필요 |

### 2단계 · 확산 가능성 따져보기 (15분)

내 도구가 **몇 군데에 더 쓰일 수 있는지** 세어봅니다. 여기서 혁신과제 아이디어가 나옵니다.

| 확산 방향 | 질문 | 예시 |
|----------|------|------|
| 같은 부서 다른 업무 | 구조가 비슷한 업무가 또 있나? | 주간 → 월간·분기 집계 |
| 다른 부서 같은 업무 | 다른 과도 같은 걸 손으로 하나? | 모든 과의 제출자료 취합 |
| 대상만 바꾸기 | 입력 자료만 바꾸면 되나? | 실적 → 예산 집행 → 민원 건수 |
| 앞뒤로 잇기 | 앞이나 뒤 단계도 자동화되나? | 취합 → 요약문 생성 → 보고서 초안 |

### 3단계 · AI에게 계획 검토받기 (15분)

\`\`\`text
너는 공공기관 업무혁신 담당자야. 아래는 내가 만든 자동화 도구의 부서 적용계획이야.

(적용계획서 붙여넣기)

1. 이 계획에서 빠진 항목이 있으면 알려줘.
2. 실제로 부서에 적용할 때 생길 수 있는 저항이나 장벽 3가지와, 각각에 대한 현실적인 대응 방안을 표로 제안해줘.
3. 예상 절감시간 계산이 합리적인지 검토해줘.
4. 이 도구를 다른 업무로 확산할 수 있는 방향 3가지를 제안해줘.

내가 적지 않은 사실을 지어내지 말고, 추정은 추정이라고 표시해줘.
\`\`\`

### 부서 도입 장벽과 대응

실제로 자주 나오는 반응들입니다. 미리 답을 준비해 두세요.

| 나오는 말 | 대응 |
|----------|------|
| "잘못되면 누가 책임지나" | 담당자 검토 절차 4단계를 보여줍니다. 총합 대조로 오류를 잡습니다 |
| "AI에 자료 올려도 되나" | 시트 데이터는 외부로 안 나갑니다. AI에는 구조만 알려줬음을 설명합니다 |
| "나는 못 쓸 것 같은데" | 버튼 하나입니다. A4 한 장 설명서를 함께 줍니다 |
| "지금도 잘 되는데" | 회당 85분, 월 5.7시간이라는 **숫자**로 말합니다 |
| "만든 사람이 가면 어떡하나" | 프롬프트와 설계서를 함께 보관합니다. 다시 만들 수 있습니다 |`,contentEn:`### Session 7

Write the plan to put your tool into department use. **Deliverable: rollout plan.**

### The plan sheet

Tool name, target task, users, start date, **estimated time saved** (from session 2), review procedure, support needed, **spread potential**, risks.

### Assessing spread

Same department other tasks, other departments same task, swap the input data, extend the chain forward or backward.

### Have the AI review the plan

Ask what is missing, what resistance to expect with realistic responses, whether the savings estimate is reasonable, and three directions to expand.

### Common objections

"Who is responsible if it's wrong" — show the four review checkpoints and total reconciliation. "Is it safe to upload data" — sheet data never leaves; only structure was shared. "I couldn't use it" — one button plus a one-page guide. "It works fine now" — answer with the number.`},{title:"8교시 17:00~18:00 · 발전 아이디어 · 공유 · 피드백",titleEn:"Session 8 — Ideas, Sharing, Feedback",content:`### 이 시간에 하는 일

| 학습 목표 | 경진대회·혁신과제로 발전 가능한 아이디어를 도출하고, 결과물을 공유해 피드백을 받는다 |
|---|---|
| 형태 | 실습 + 발표 |
| **산출물** | **적용계획서 및 개선사항** |

### 1단계 · 혁신과제로 키우기 (20분)

오늘 만든 도구가 **경진대회 출품작이나 부서 혁신과제**가 될 수 있는지 봅니다.

| 심사에서 보는 것 | 내 도구는 |
|---------------|----------|
| 실제 문제인가 | 매주 90분씩 쓰던 일 — 실측값이 있음 |
| 효과가 숫자로 나오나 | 월 5.7시간, 연 68시간 절감 |
| 남이 따라 할 수 있나 | 프롬프트와 설계서가 있어 재현 가능 |
| 확산성이 있나 | 같은 구조의 업무 ○곳에 적용 가능 |
| 지속되나 | 담당자 바뀌어도 설명서로 인계 가능 |

\`\`\`text
너는 공공부문 업무혁신 경진대회 심사위원이야.
아래는 내가 만든 행정업무 자동화 도구와 적용계획이야.

(도구 설명 + 적용계획서 붙여넣기)

1. 이 사례를 혁신과제로 제출한다면 어떤 점이 강점이고 어떤 점이 약한지 알려줘.
2. 심사위원이 물어볼 만한 질문 5가지와 준비할 답변을 알려줘.
3. 효과를 더 설득력 있게 보여주려면 어떤 수치를 추가로 모아야 하는지 알려줘.
4. 제목을 3개 제안해줘.

내가 적지 않은 성과를 지어내지 마.
\`\`\`

### 2단계 · 결과물 공유 (20분)

옆자리와 서로 보여줍니다. 아래를 물어보세요.

| 물어볼 것 | 왜 |
|----------|-----|
| "이거 우리 과에도 쓸 수 있을까요?" | 확산 가능성 확인 |
| "설명서만 보고 쓸 수 있겠어요?" | 인계 가능성 확인 |
| "여기서 뭐가 틀릴 것 같아요?" | 내가 못 본 예외 발견 |

### 3단계 · 개선사항 정리 (10분)

받은 피드백을 적용계획서 아래에 덧붙입니다.

| 지적받은 것 | 어떻게 고칠지 | 언제 |
|-----------|-------------|------|
| | | |

### 4단계 · 오늘 이후 3주 계획 (10분)

\`\`\`text
오늘 배운 행정업무 자동화를 실제 업무에 정착시키기 위한
3주 실행계획을 주차별 목표·할 일·점검 항목 표로 만들어줘.

내 상황:
- 만든 도구: (도구명과 하는 일)
- 적용 부서: (부서명, 사용 인원)
- 주당 가용 시간: 2시간 정도

현실적으로 지킬 수 있는 분량으로 짜줘.
\`\`\`

### 오늘 가져가는 것 최종 점검

- [ ] 자동화 대상 업무 정의서 (2교시)
- [ ] 자동화 도구 설계서 + 프롬프트 (3교시)
- [ ] **작동하는 자동화 도구** (4~5교시)
- [ ] 오류 대응 체크리스트 + 보안 유의사항 (6교시)
- [ ] 사용 설명서 A4 1장 (6교시)
- [ ] 부서 적용계획서 (7교시)
- [ ] 개선사항 + 3주 실행계획 (8교시)

### 여기서 멈추지 않으려면

오늘 만든 도구 하나로 끝내지 마세요. **다음 주에 하나 더** 만들면 됩니다. 프롬프트 틀은 이미 있습니다.

광진구 류승인 주무관도 그렇게 12개를 만들었습니다. 다음 장에서 **그 사례를 직접 따라 해봅니다.**
→ [실습 사례집으로](/automation)`,contentEn:`### Session 8

Develop contest or innovation-project ideas, share results, and collect feedback. **Deliverable: final plan with improvements.**

### Growing it into an innovation project

Judges look for a real measured problem, numeric effect, reproducibility, spread potential, and durability. Ask an AI acting as a judge for strengths, weaknesses, likely questions, and title options.

### Sharing

Ask a neighbor: could your division use this, could you run it from the guide alone, what do you think would break.

### Final checklist

Task definition, design and prompt, **working tool**, error checklist and security notes, one-page user guide, rollout plan, improvements and a three-week plan.`}]},m={id:"auto-08",icon:"fa-list-check",title:"실습 사례집 · 부서별 적용",titleEn:"Case Library by Division",sections:[{title:"내 부서 업무로 골라 쓰기",titleEn:"Pick the Case That Matches Your Work",content:`2교시에 고를 업무가 떠오르지 않으면 여기서 찾으세요. **대구시 부서에서 실제로 반복되는 업무**를 기준으로 정리했습니다.

각 사례는 그대로 복사해 쓸 수 있는 프롬프트가 붙어 있습니다. **시트 이름과 열 구성만 내 것으로 바꾸면 됩니다.**

### 총무·서무

| 업무 | 자동화 내용 | 예상 절감 |
|------|-----------|----------|
| 팀별 제출자료 취합 | 여러 시트 합치기 + 중복 제거 + 팀별 합계 | 회당 60~90분 |
| 물품 대장 정리 | 분류·정렬·재고 부족 표시 | 회당 30분 |
| 출장·연가 집계 | 월별·개인별 집계표 자동 생성 | 회당 40분 |

\`\`\`text
너는 Google Apps Script 전문가야. 나는 코딩을 모르니 단계별로 알려줘.

'제출자료' 시트: 1행 제목, 2행부터 데이터
A열 팀명, B열 항목, C열 건수, D열 제출일

1. C열이 비었거나 0인 행은 제외
2. A열+B열이 같은 행은 첫 번째만 남김
3. A열(팀명) 기준으로 C열 합계
4. 합계 큰 순 정렬
5. '요약' 시트에 결과 작성 (기존 내용 지우고), A1 '팀명' B1 '건수합계' 굵게
6. 완료 시 "총 O개 팀, O건 / 원본 총합 O건" 알림 (총합이 다르면 경고)

상단 메뉴에 '자료 취합' 을 추가해줘.
전체 코드를 한 덩어리로, 한국어 주석과 함께. 내가 안 적은 규칙은 만들지 마.
\`\`\`

### 민원 담당

| 업무 | 자동화 내용 | 예상 절감 |
|------|-----------|----------|
| 민원 유형 분류 | 키워드로 유형·소관 부서 자동 지정 | 건당 1~2분 |
| 민원 통계 | 월별·유형별 건수와 추이 | 회당 60분 |
| 반복 민원 답변 | 유형별 답변 초안 일괄 생성 | 건당 3분 |

\`\`\`text
너는 Google Apps Script 전문가야. 나는 코딩을 모르니 단계별로 알려줘.

'민원' 시트: 1행 제목, 2행부터 데이터, A열 접수일, B열 민원내용
B열에 아래 단어가 있으면 C열에 유형, D열에 소관을 채워줘.

- 가로등, 도로, 포트홀, 보도블럭 → 시설물 유지보수 / 도로과
- 주차, 단속, 견인, 과태료 → 단속 이의 / 교통과
- 지원금, 신청, 자격, 대상 → 제도 문의 / 해당 사업부서
- 공원, 벤치, 화단, 가로수 → 시설물 유지보수 / 공원녹지과
- 소음, 악취, 폐기물 → 생활환경 / 환경과

어디에도 없으면 C열 '분류 필요', D열 '확인 필요'.
여러 개에 걸리면 먼저 나온 규칙을 적용하고 E열에 '중복해당' 표시.
상단 메뉴에 '민원 분류' 를 추가해줘.
전체 코드를 한 덩어리로, 한국어 주석과 함께.
\`\`\`

> **주의** — 민원 원문에 민원인 이름·연락처가 있으면 그 열을 지운 사본으로 작업하세요. 분류는 내용만 있으면 됩니다.

### 예산·회계

| 업무 | 자동화 내용 | 예상 절감 |
|------|-----------|----------|
| 집행률 계산 | 부서별 집행률 + 색상 표시 + 요약 | 회당 60분 |
| 예산 대비 실적 | 월별 비교표와 증감 자동 계산 | 회당 45분 |
| 정산 검산 | 항목 합계와 총액 대조, 불일치 표시 | 회당 30분 |

\`\`\`text
너는 Google Apps Script 전문가야. 나는 코딩을 모르니 단계별로 알려줘.

'집행현황' 시트: 1행 제목, 2행부터 데이터
A열 부서명, B열 예산액, C열 집행액

1. D열에 집행률(C/B)을 백분율 소수점 1자리로 계산
2. 집행률 90% 초과면 D칸 배경 빨강, 50% 미만이면 노랑
3. B열이 0이거나 비면 D열에 '계산 불가'
4. '요약' 시트에 전체 평균 집행률, 부서 수, 90% 초과 부서 목록, 50% 미만 부서 목록 작성
5. 완료 시 "부서 O곳 / 평균 집행률 O%" 알림

상단 메뉴에 '집행률 계산' 을 추가해줘.
전체 코드를 한 덩어리로, 한국어 주석과 함께.
\`\`\`

### 홍보·공보

| 업무 | 자동화 내용 | 예상 절감 |
|------|-----------|----------|
| 개인별 안내문 생성 | 명단에서 일괄 생성 | 건당 3분 |
| 채널별 문구 변환 | 보도자료 → 인스타·카카오·블로그 | 건당 20분 |
| 홍보 실적 집계 | 채널별 게시 건수·반응 집계 | 회당 40분 |

\`\`\`text
너는 Google Apps Script 전문가야. 나는 코딩을 모르니 단계별로 알려줘.

'명단' 시트: 1행 제목, 2행부터 데이터
A열 성명, B열 교육과정, C열 일시, D열 장소

E열에 아래 양식으로 개인별 안내문을 만들어줘.
"[성명] 님, 안녕하십니까. 신청하신 [교육과정] 교육이 [일시] [장소]에서 진행됩니다. 참석에 착오 없으시기 바랍니다."

- 대괄호는 각 행 값으로 치환
- A~D 중 하나라도 비면 그 행은 건너뛰고 E열에 '자료 부족' 표시
- 상단 메뉴에 '안내문 생성' 추가
전체 코드를 한 덩어리로, 한국어 주석과 함께.
\`\`\`

### 교육·인재개발

| 업무 | 자동화 내용 | 예상 절감 |
|------|-----------|----------|
| 수강 신청자 정리 | 중복 제거 + 부서별 인원 집계 | 회당 60분 |
| 이수 현황 관리 | 미이수자 자동 추출 + 안내문 생성 | 회당 45분 |
| 만족도 집계 | 문항별 평균·분포 자동 계산 | 회당 40분 |

### 시설·건축

| 업무 | 자동화 내용 | 예상 절감 |
|------|-----------|----------|
| 점검 결과 정리 | 시설별 이력 정리 + 조치 필요 항목 추출 | 회당 50분 |
| 인허가 진행 현황 | 단계별 현황판 자동 갱신 | 회당 30분 |

> 위에 없는 업무라도 **입력 → 규칙 → 출력** 이 정해져 있으면 같은 방식으로 됩니다. 3교시 프롬프트 틀에 내 업무를 넣으면 됩니다.`,contentEn:`If nothing comes to mind in session 2, pick from here. Each case ships a ready prompt — change only the sheet names and columns.

### General affairs

Merging team submissions, inventory tidying, travel and leave aggregation.

### Civil affairs

Complaint classification by keyword, monthly statistics, repeat-reply drafting.

> Work on a copy with name and contact columns removed — classification only needs the content.

### Budget and accounting

Execution rate with color coding, budget-versus-actual comparison, reconciliation checks.

### Public relations

Individual notice generation, channel-specific rewriting, PR performance aggregation.

### Training and facilities

Applicant tidying, completion tracking, satisfaction aggregation, inspection history, permit status boards.

> Any task with a fixed **input → rule → output** works the same way.`},{title:"따라하기 — 류승인 주무관 도구 직접 써보기",titleEn:"Walkthrough — A Serving Officer Tools",content:`오늘 만든 도구가 **어디까지 갈 수 있는지** 직접 확인합니다. 광진구 류승인 주무관이 현직 공무원 신분으로 만들어 공개한 도구들입니다.

> 아래 접속 상태는 **2026-08-26 기준으로 직접 확인한 것**입니다. 공개 서비스라 상태가 바뀔 수 있으니, 안 열리면 [github.com/chrisryugj](https://github.com/chrisryugj) 에서 최신 상태를 확인하세요.

### 따라하기 ① · 주소 표준화 (설치 없음, 3분)

민원 서식에 들어온 주소가 제각각일 때 쓰는 도구입니다.

| 확인 | 상태 |
|------|------|
| gjdong.vercel.app | **정상 (200)** |

1. [gjdong.vercel.app](https://gjdong.vercel.app) 을 엽니다
2. 정리할 주소 텍스트를 붙여넣습니다 — 실제 민원 자료 말고 **아무 주소나** 넣어보세요
3. 표준주소로 정리된 결과를 확인합니다

> **여기서 볼 것** — 이 도구도 "주소가 제각각이라 매번 손으로 고친다"는 **한 가지 불편**에서 출발했습니다. 오늘 여러분이 고른 업무와 같은 크기입니다.

### 따라하기 ② · 법령 비교 (설치 없음, 3분)

개정 전후 조문을 눈으로 대조하던 일을 대신합니다.

| 확인 | 상태 |
|------|------|
| lexdiff.gomdori.app | **정상 (200)** |

1. [lexdiff.gomdori.app](https://lexdiff.gomdori.app) 접속
2. 비교할 법령을 선택하거나 조문을 붙여넣기
3. 바뀐 부분이 표시된 결과 확인

### 따라하기 ③ · 프로젝트 12종 둘러보기 (2분)

| 확인 | 상태 |
|------|------|
| chris.gomdori.app | **정상 (200)** |

[chris.gomdori.app](https://chris.gomdori.app) 에서 12개 도구를 한눈에 봅니다. **각 도구가 어떤 업무 불편에서 나왔는지** 를 보세요.

| 도구 | 출발한 불편 |
|------|-----------|
| korean-law-mcp | 법령·판례·자치법규를 사이트마다 따로 찾아야 함 |
| korean-stats-mcp | 통계 수치를 KOSIS에서 직접 뒤져야 함 |
| kordoc | 한글 공문서를 AI가 읽지 못함 |
| gjdong | 민원 서식 주소가 제각각 |
| lexdiff | 개정 전후 법령 비교를 눈으로 함 |
| Docufinder | 예전 문서를 파일명으로만 찾음 |

### 심화 · AI에 공공데이터 연결하기 (선택, 15분)

시간이 남는 분만 하세요. **MCP** 는 AI에게 바깥 도구를 붙여주는 규격입니다. 연결하면 Claude가 법제처·KOSIS를 **직접 조회해서** 답합니다.

| 서버 | 주소 | 확인 상태 |
|------|------|----------|
| 법령 | \`https://mcp.gomdori.app/law\` | **정상 동작** (GET 405 = POST 전용) |
| 통계 | \`https://mcp.gomdori.app/stats\` | **정상 동작** |
| 특허 | \`https://mcp.gomdori.app/patent\` | **정상 동작** |
| 건축HUB | \`https://mcp.gomdori.app/archhub\` | **정상 동작** |
| 학교알리미 | \`https://mcp.gomdori.app/school\` | **정상 동작** |

**Claude 데스크톱 앱에서 연결하는 법**

1. Claude 데스크톱 앱을 엽니다
2. **설정(Settings) → 커넥터(Connectors)**
3. **커스텀 커넥터 추가**
4. 이름 \`법령 검색\`, 주소 \`https://mcp.gomdori.app/law\` 입력
5. 저장 후 물어봅니다 — "지방공무원 복무규정에서 연가 관련 조문을 원문과 함께 알려줘"

> **업무 자료 주의** — 공개된 외부 서버입니다. 개인정보나 대외비를 넣지 마세요. 공개 데이터 조회에만 씁니다.

더 자세한 연결 방법은 [참고사이트](/reference) 에 정리해 뒀습니다.

### 확인 못 한 것도 그대로 적습니다

| 항목 | 상태 |
|------|------|
| school.gomdori.app (학교알리미 웹앱) | **접속 불가 (서버 오류 500)** — 같은 기능을 MCP로는 쓸 수 있습니다 |

### 오늘 얻어갈 결론

| 류승인 주무관 | 오늘 여러분 |
|-------------|-----------|
| 업무 불편 하나에서 시작 | 반복 업무 하나 선정 (2교시) |
| 도구로 만듦 | 자동화 도구 제작 (3~5교시) |
| 남이 쓸 수 있게 공개 | 사용 설명서 + 부서 배포 (6~7교시) |
| 12개로 쌓임 | 다음 주에 하나 더 |

> 처음부터 12개를 만든 사람은 없습니다. **매주 30분씩 잡아먹는 일 하나**부터입니다. 오늘 그 하나를 만들었습니다.`,contentEn:`See how far this goes — tools built and published by Ryu Seung-in, a serving public officer in Gwangjin-gu.

> Availability below was **checked directly on 2026-08-26**. These are public services; if one fails, check [github.com/chrisryugj](https://github.com/chrisryugj).

### Walkthrough 1 — Address standardization (no install, 3 min)

[gjdong.vercel.app](https://gjdong.vercel.app) — **live (200)**. Paste any address text and see it normalized.

> Note this started from **one inconvenience** — the same size as the task you chose today.

### Walkthrough 2 — Statute comparison (no install, 3 min)

[lexdiff.gomdori.app](https://lexdiff.gomdori.app) — **live (200)**.

### Walkthrough 3 — Browse the 12 projects

[chris.gomdori.app](https://chris.gomdori.app) — **live (200)**. Look at which inconvenience each tool came from.

### Optional — Connect public data to your AI (15 min)

Five MCP servers, all **confirmed working** (GET 405 means POST-only, which is correct). In the Claude desktop app: Settings → Connectors → Add custom connector → paste the address.

> Public servers — never enter personal or confidential data.

### Reported as-is

school.gomdori.app returns a **server error (500)**; the same capability works over MCP.

### The takeaway

Nobody built twelve at once. It starts with **the one task that eats 30 minutes a week** — which you built today.`}]};function y(){const{language:n}=o(),t=n==="ko";return e.jsx(s,{seoTitle:"행정업무 자동화",seoTitleEn:"Administrative Automation",seoDescription:"바이브코딩 기반 행정업무 자동화 도구 제작 — 1일 8시간 과정. 교시별 따라하기 실습과 대구시 부서별 사례집",path:"/automation",dataFiles:[a,r,l,c,p,d,h,u,m],ctaBanner:e.jsxs("div",{className:"prompt-practice-cta",children:[e.jsxs("div",{className:"prompt-practice-cta-text",children:[e.jsx("h3",{children:t?"이 과정을 처음 보신다면":"New to this course?"}),e.jsx("p",{children:t?"위 목차의 「과정 개요 · 시간표」부터 순서대로 보세요. 각 교시는 그대로 따라 하면 되는 단계로 되어 있습니다.":'Start with "Overview & Schedule" above. Each session is written as steps you can follow directly.'})]}),e.jsxs(i,{to:"/prompt-eval",className:"prompt-practice-cta-btn",children:[e.jsx("i",{className:"fa-solid fa-keyboard"}),t?"프롬프트 기초 먼저 보기":"Prompt basics first"]})]})})}export{y as default};

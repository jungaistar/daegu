export default {
  id: 'auto-02',
  icon: 'fa-crosshairs',
  title: '2교시 10:00~11:00 · 자동화 대상 업무 선정',
  titleEn: 'Session 2 — Choosing the Task',
  sections: [
    {
      title: '내 업무 중 하나를 고릅니다',
      titleEn: 'Pick One of Your Own Tasks',
      content: `### 이 시간에 하는 일

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

> 다섯 개 모두 체크되면 3교시로 넘어갑니다. 하나라도 비면 그 항목을 먼저 채우세요. **여기서 흐릿하면 뒤가 전부 흐려집니다.**`,
      contentEn: `### This session

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

All nine fields filled, steps numbered, reviewer criteria written, monthly saving calculated, personal data resolved.`,
    },
    {
      title: '따라하기 실습 · 자동화 대상 업무 정의서 채우기',
      titleEn: 'Hands-on — Fill In the Task Definition',
      content: `**소요 40분 · 산출물: 자동화 대상 업무 정의서 1부**

앞에서 고른 업무 하나를 **문서 한 장으로 확정**합니다. 이 정의서가 3교시 설계와 4교시 코드 요청의 재료가 됩니다.

> **여기서 대충 적으면 오후 내내 헤맵니다.** 반대로 여기가 정확하면 나머지는 거의 자동으로 굴러갑니다.

---

### STEP 1 · 표를 그대로 옮겨 적습니다

빈 문서나 시트를 열고 아래 표를 **그대로 만듭니다.** 오른쪽 칸은 비워 둡니다.

| 항목 | 내가 적을 것 |
|------|-------------|
| ① 업무 이름 | |
| ② 얼마나 자주 | |
| ③ 한 번에 걸리는 시간 | |
| ④ 들어오는 자료(입력) | |
| ⑤ 처리 과정 | |
| ⑥ 나오는 결과(출력) | |
| ⑦ 담당자 검토 기준 | |
| ⑧ 개인정보 | |
| ⑨ 자동화 후 예상 시간 | |

**✅ 확인** — 아홉 칸짜리 빈 표가 만들어졌으면 다음으로.

---

### STEP 2 · ④ 들어오는 자료를 아주 구체적으로

가장 많이 대충 적는 칸입니다. **"엑셀 파일"** 이라고만 쓰면 안 됩니다.

| 적어야 할 것 | 나쁜 예 | 좋은 예 |
|-------------|---------|---------|
| 파일 형태 | 엑셀 | \`.xlsx\` 파일 3개 (과별 1개씩) |
| 어디서 오나 | 각 과 | 매월 5일까지 메일로 수신 |
| 몇 건 | 많음 | 과당 30~80행, 합계 약 200행 |
| 열 이름 | 여러 개 | 접수번호 / 부서 / 항목 / 금액 / 처리상태 |
| 서식이 같은가 | — | **다름** — 과마다 열 순서가 제각각 |

**✅ 확인** — 열 이름을 **하나도 빠짐없이** 적었나요? 열 이름이 곧 AI에게 줄 항목 이름입니다.

---

### STEP 3 · ⑤ 처리 과정을 번호로 쪼갭니다

머릿속으로 하던 일을 **한 줄에 하나씩** 번호로 적습니다. "정리한다" 같은 뭉뚱그린 표현은 쪼갭니다.

**나쁜 예**

\`\`\`text
1. 파일들을 정리해서 합친다
2. 보고서를 만든다
\`\`\`

**좋은 예**

\`\`\`text
1. 과별 파일 3개를 연다.
2. 열 순서를 접수번호 / 부서 / 항목 / 금액 / 처리상태 로 통일한다.
3. 세 파일의 데이터를 한 시트 아래로 이어 붙인다.
4. 접수번호가 같은 행이 있으면 나중 것만 남긴다.
5. 부서별로 묶어 건수와 금액 합계를 낸다.
6. 금액이 비어 있는 행은 0으로 본다.
7. 결과를 "부서별집계" 시트에 표로 넣는다.
\`\`\`

**✅ 확인** — 아래 세 가지를 점검하세요.

| 점검 | 뜻 |
|------|-----|
| 한 줄에 동작이 하나뿐인가 | "합치고 정리한다" 는 두 줄로 쪼갠다 |
| 예외 처리가 들어 있나 | 빈 값·중복·오타를 어떻게 할지 (위의 4·6번) |
| 순서를 바꾸면 결과가 달라지나 | 그렇다면 순서가 맞게 적힌 것이다 |

> **예외 처리가 없는 정의서는 반쪽입니다.** 실제 업무가 막히는 곳은 늘 예외입니다.

---

### STEP 4 · ⑦ 담당자 검토 기준 — 가장 자주 빠지는 칸

자동화의 결과를 **사람이 무엇을 보고 믿을지** 정합니다. 이게 없으면 "AI가 만든 거라 못 믿겠다"로 끝납니다.

\`\`\`text
검토 기준 (예)
- 합계 행의 총액이 원본 세 파일의 총액과 같은가
- 결과 행 개수가 원본 행 수에서 중복 제거분을 뺀 수와 같은가
- 부서 이름이 5개 과 모두 나왔는가 (빠진 과가 없는가)
- [확인 필요] 로 표시된 항목이 몇 건인가
\`\`\`

**✅ 확인** — 검토 기준은 **숫자로 확인 가능한 문장**이어야 합니다. "잘 됐는지 본다"는 기준이 아닙니다.

---

### STEP 5 · ⑧ 개인정보를 판정합니다

| 판정 | 조건 | 조치 |
|------|------|------|
| **그대로 가능** | 이름·연락처·고유번호가 아예 없다 | 그대로 진행 |
| **가명 처리 후 가능** | 이름은 있지만 없어도 일이 된다 | 이름 열을 A·B·C로 바꾼 뒤 진행 |
| **이 업무는 부적합** | 개인정보가 업무의 본질이다 | **다른 업무로 바꾼다** |

**✅ 확인** — 세 번째에 해당하면 **지금 업무를 바꾸세요.** 오후에 가서 바꾸면 하루를 버립니다.

---

### STEP 6 · 자동화 전/후를 비교합니다

\`\`\`text
자동화 전 — 월 1회 × 3시간 = 연 36시간
자동화 후 — 월 1회 × 20분(붙여넣기 + 검토) = 연 4시간
절감 — 연 32시간

줄어드는 오류
- 복사·붙여넣기 중 행이 밀리는 실수
- 과별 열 순서를 잘못 맞춘 실수
- 중복 접수건을 두 번 센 실수
\`\`\`

**✅ 확인** — 시간은 **연 단위**로 계산하세요. "월 3시간"은 작아 보이지만 "연 36시간"은 결재선을 설득합니다.

---

### STEP 7 · AI에게 정의서를 검토시킵니다

다 채웠으면 스스로 점검하지 말고 AI에게 시킵니다.

\`\`\`text
아래는 내가 작성한 자동화 대상 업무 정의서야.
자동화 도구를 만들기에 정보가 충분한지 검토해 줘.

1. 빠진 정보가 있으면 무엇을 더 물어봐야 하는지 목록으로
2. 처리 과정 중 애매해서 사람마다 다르게 해석할 문장이 있으면 지적
3. 예외 상황(빈 값·중복·오타) 처리가 빠진 곳이 있으면 지적

--- 정의서 ---
(위에서 채운 아홉 칸을 붙여넣기)
\`\`\`

**✅ 확인** — 지적받은 항목을 **정의서에 반영해 고칩니다.** 보통 2~3개가 나옵니다. 고치고 나면 이 정의서로 3교시에 들어갑니다.

---

### 완성 점검표

| # | 항목 | 확인 |
|---|------|------|
| 1 | 아홉 칸이 모두 채워졌다 | |
| 2 | 입력 자료의 **열 이름**이 빠짐없이 적혔다 | |
| 3 | 처리 과정이 한 줄에 동작 하나로 번호가 매겨졌다 | |
| 4 | 빈 값·중복·오타 처리가 들어 있다 | |
| 5 | 검토 기준이 **숫자로 확인 가능한** 문장이다 | |
| 6 | 개인정보 판정이 끝났다 | |
| 7 | 절감 시간이 **연 단위**로 계산됐다 | |
| 8 | AI 검토 지적사항을 반영했다 | |

> 8개가 다 채워지면 **자동화 대상 업무 정의서 완성**입니다. 이 문서를 저장해 두세요 — 3교시와 4교시에서 계속 씁니다.`,
      contentEn: `**40 minutes · Deliverable: one Task Definition document**

Lock down the task you picked into **a single page.** This document is the raw material for the Session 3 design and the Session 4 code request.

> **Sloppy here means a lost afternoon.** Precise here and the rest almost rolls itself.

### STEP 1 · Draw the nine-row table
Nine rows: task name, frequency, time per run, input, processing, output, reviewer criteria, personal data, expected time after automation. Leave the right column blank.

### STEP 2 · Make the input concrete
"An Excel file" is not enough.

| Record | Bad | Good |
|---|---|---|
| Format | Excel | Three \`.xlsx\` files, one per division |
| Source | Each division | Emailed by the 5th of each month |
| Volume | A lot | 30–80 rows each, ~200 total |
| Columns | Several | Receipt no. / Division / Item / Amount / Status |
| Same layout? | — | **No** — column order differs per division |

**✅ Check** — did you list **every** column name? Those names are what you hand the AI.

### STEP 3 · Break the processing into numbered lines
One action per line. Replace "organize it" with the actual operations, including how blanks, duplicates and typos are handled.

| Check | Meaning |
|---|---|
| One action per line | "Merge and clean" splits into two |
| Exceptions present | Blanks, duplicates, typos |
| Order matters | If reordering changes the result, the order is written correctly |

> **A definition without exception handling is half a definition.** Real work always breaks on exceptions.

### STEP 4 · Reviewer criteria — the most commonly skipped box
Decide what a human looks at to trust the output.
**✅ Check** — criteria must be **numerically verifiable.** "Check it looks right" is not a criterion.

### STEP 5 · Judge the personal data

| Verdict | Condition | Action |
|---|---|---|
| **Use as is** | No names, contacts or ID numbers | Proceed |
| **Pseudonymize first** | Names present but not needed | Replace with A/B/C |
| **Unsuitable task** | Personal data *is* the substance | **Pick a different task** |

**✅ Check** — if it's the third, change tasks **now,** not this afternoon.

### STEP 6 · Compare before and after
Compute the saving **per year** — "3 hours a month" sounds small; "36 hours a year" persuades an approver. List the errors that disappear too.

### STEP 7 · Have the AI review your definition
Ask it to list missing information, ambiguous sentences, and unhandled exceptions. Fold the two or three findings back in.

### Completion checklist
All nine boxes filled · every input column named · processing numbered one action per line · blanks/duplicates/typos handled · criteria numerically verifiable · personal data judged · saving computed per year · AI review folded in.

> Save this document — Sessions 3 and 4 use it continuously.`,
    },
  ],
};

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
  ],
};

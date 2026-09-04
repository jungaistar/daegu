export default {
  id: 'auto-07',
  icon: 'fa-diagram-project',
  title: '7·8교시 16:00~18:00 · 부서 적용계획 작성',
  titleEn: 'Sessions 7-8 — Rollout Plan',
  sections: [
    {
      title: '7교시 16:00~17:00 · 적용계획서 작성',
      titleEn: 'Session 7 — Writing the Plan',
      content: `### 이 시간에 하는 일

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
| "만든 사람이 가면 어떡하나" | 프롬프트와 설계서를 함께 보관합니다. 다시 만들 수 있습니다 |`,
      contentEn: `### Session 7

Write the plan to put your tool into department use. **Deliverable: rollout plan.**

### The plan sheet

Tool name, target task, users, start date, **estimated time saved** (from session 2), review procedure, support needed, **spread potential**, risks.

### Assessing spread

Same department other tasks, other departments same task, swap the input data, extend the chain forward or backward.

### Have the AI review the plan

Ask what is missing, what resistance to expect with realistic responses, whether the savings estimate is reasonable, and three directions to expand.

### Common objections

"Who is responsible if it's wrong" — show the four review checkpoints and total reconciliation. "Is it safe to upload data" — sheet data never leaves; only structure was shared. "I couldn't use it" — one button plus a one-page guide. "It works fine now" — answer with the number.`,
    },
    {
      title: '7교시 따라하기 실습 · 적용계획서 여덟 칸 채우기',
      titleEn: 'Session 7 Hands-on — Fill In the Eight Boxes',
      content: `**소요 55분 · 준비물: 지금까지 만든 도구와 검토표**
**산출물: 자동화 도구 적용계획서**

도구는 만들었습니다. 하지만 **계획서가 없으면 담당자가 바뀌는 순간 아무도 못 씁니다.** 오늘 만든 것을 실제 업무에 넣는 한 장을 씁니다.

그림의 **주황 번호가 아래 묶음 번호**입니다.

![자동화 도구 적용계획서 양식 — 여덟 칸과 각 칸에 적을 것](~/automation/auto-plan-form.svg)

---

### STEP 1 · 양식을 그대로 만듭니다

빈 문서에 여덟 줄짜리 표를 만듭니다.

| 항목 | 내가 적을 것 |
|------|-------------|
| ① 적용 업무 | |
| ② 사용 대상 | |
| ③ 적용 시점 | |
| ④ 예상 절감시간 | |
| ⑤ 검토 절차 | |
| ⑥ 개인정보 처리 | |
| ⑦ 확산 가능성 | |
| ⑧ 인수인계 | |

---

### STEP 2 · ①~④ — 전부 숫자로 씁니다

**"많이 줄어듦" 은 결재가 안 납니다.**

| 칸 | 나쁜 예 | 좋은 예 |
|----|---------|---------|
| ① 적용 업무 | 실적 취합 업무 | **월간 부서별 실적 취합** (매월 5~10일) |
| ② 사용 대상 | 우리 과 | **기획예산과 실적 담당 3명** → 2차로 5개 과 확대 |
| ③ 적용 시점 | 곧 | **2026년 10월 정기 취합부터** |
| ④ 예상 절감시간 | 많이 줄어듦 | 월 3시간 → 20분 · **연 32시간 절감** |

**✅ 확인** — ④는 **연 단위**로 환산하세요. "월 3시간"은 작아 보이지만 "연 32시간"은 설득이 됩니다.

---

### STEP 3 · ⑤⑥ — 결재선이 가장 먼저 보는 두 칸

\`\`\`text
⑤ 검토 절차 (예)
1. 담당자가 [자동화] 메뉴로 실행한다.
2. "검토표" 탭의 4개 항목을 대조한다. (행 개수·총 금액·부서 개수·확인필요 건수)
3. 4개가 모두 통과하면 팀장에게 보고한다.
4. 하나라도 어긋나면 결과를 쓰지 않고 원본을 재확인한다.

⑥ 개인정보 처리 (예)
- 고유식별정보 없음
- 이름 열은 삭제한 복사본으로 처리
- 원본 파일은 부서 공유 폴더에만 보관하고 외부에 올리지 않음
\`\`\`

**✅ 확인** — 검토 절차는 **사람 이름이 아니라 역할**로 적습니다. "김○○ 주무관"이 아니라 "실적 담당자". 사람이 바뀌어도 문서가 살아남습니다.

---

### STEP 4 · ⑦⑧ — 도구를 오래 살리는 두 칸

| 칸 | 무엇을 적나 | 예 |
|----|------------|-----|
| ⑦ 확산 가능성 | 같은 구조의 다른 업무 | 「월간 민원 통계」도 열 이름만 바꾸면 그대로 적용 가능 |
| ⑧ 인수인계 | 무엇을 어디에 남기나 | 코드·명세서·사용법·검토표를 부서 공유 폴더 \`/자동화\` 에 보관 |

**✅ 확인** — ⑦은 **경진대회 출품이나 혁신리더 과제의 핵심 칸**이기도 합니다. "우리 과에서만 쓰는 것"과 "다른 과도 쓸 수 있는 것"은 평가가 다릅니다.

---

### STEP 5 · AI에게 계획서를 검토시킵니다

\`\`\`text
아래는 내가 작성한 자동화 도구 적용계획서야.
결재선에 올리기 전에 검토해 줘.

1. 숫자로 쓰지 않아 애매한 표현이 있으면 지적해 줘.
2. 결재권자가 물어볼 만한 질문 3가지를 예상해서 알려 줘.
3. 개인정보·보안 관점에서 빠진 것이 있으면 알려 줘.

내용을 대신 써 주지는 말고, 지적만 해 줘.

--- 계획서 ---
(여덟 칸 붙여넣기)
\`\`\`

**✅ 확인** — 예상 질문 3가지에 **내가 답할 수 있는지** 스스로 확인합니다. 답이 막히는 질문이 있으면 그 칸을 더 채웁니다.

---

### STEP 6 · 확산 아이디어를 뽑아 둡니다

\`\`\`text
이 도구를 바탕으로 발전시킬 수 있는 아이디어를 3가지 알려 줘.
각각 (1) 무엇을 더하는지 (2) 어느 부서에 도움이 되는지
(3) 만드는 데 얼마나 걸릴지 순서로.
지금 도구에서 조금만 더하면 되는 것 위주로.
\`\`\`

**✅ 확인** — **"조금만 더하면 되는 것"** 이 핵심입니다. 크게 벌이면 8교시 안에 못 끝냅니다. 나온 3가지를 계획서 아래에 메모해 두었다가 8교시에서 씁니다.

---

### 완성 점검표 — 자동화 도구 적용계획서

| # | 항목 | 확인 |
|---|------|------|
| 1 | 여덟 칸이 모두 채워졌다 | |
| 2 | ①~④가 **숫자**로 적혔다 | |
| 3 | 절감시간이 **연 단위**로 환산됐다 | |
| 4 | 검토 절차가 **역할**로 적혔다 (사람 이름 아님) | |
| 5 | 개인정보 처리 방식이 구체적이다 | |
| 6 | 확산 가능성에 **다른 업무 이름**이 적혔다 | |
| 7 | 인수인계 보관 위치가 적혔다 | |
| 8 | AI 검토 지적사항을 반영했다 | |
| 9 | 확산 아이디어 3가지를 메모해 뒀다 | |`,
      contentEn: `**55 minutes · You need the tool and checklist built so far**
**Deliverable: the rollout plan**

The tool exists. But **without a plan it dies the day its owner moves desks.**

![Rollout plan form](~/automation/auto-plan-form.svg)

**STEP 1 · Draw the eight-row table** — task, users, start date, time saved, review procedure, personal data handling, scalability, handover.

**STEP 2 · Boxes 1–4 in numbers.** "Much faster" does not get approved.

| Box | Bad | Good |
|---|---|---|
| Task | Consolidation work | **Monthly departmental figures** (5th–10th each month) |
| Users | Our division | **Three staff in Planning** → five divisions in phase 2 |
| Start | Soon | **From the October 2026 cycle** |
| Time saved | A lot | 3 h → 20 min monthly · **32 h a year** |

**✅ Check** — convert to a **yearly** figure. "3 hours a month" sounds small; "32 hours a year" persuades.

**STEP 3 · Boxes 5–6 — what an approver reads first.** Write the review procedure as numbered steps tied to your checklist tab, and state exactly how personal data is handled.
**✅ Check** — write **roles, not names.** "The figures officer", not a person. The document then outlives the person.

**STEP 4 · Boxes 7–8 — what keeps the tool alive.** Name a *specific* other task it could serve, and where the code, spec, guide and checklist are stored.
**✅ Check** — box 7 is also the decisive box for competitions and innovation projects.

**STEP 5 · Have the AI critique the plan** — ambiguous non-numeric phrases, three questions an approver would ask, anything missing on privacy and security. **Critique only, no rewriting.**
**✅ Check** — can you answer all three questions? Where you stall, fill that box in further.

**STEP 6 · Extract three scaling ideas** — each with what is added, which division benefits, and how long it takes. **Only things that are a small step from what you have** — anything larger won't finish in Session 8.

### Completion checklist
Eight boxes filled · 1–4 numeric · yearly conversion · review procedure by role · concrete privacy handling · a named second task · storage location · AI critique folded in · three ideas noted.`,
    },
    {
      title: '8교시 17:00~18:00 · 발전 아이디어 · 공유 · 피드백',
      titleEn: 'Session 8 — Ideas, Sharing, Feedback',
      content: `### 이 시간에 하는 일

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
→ [실습 사례집으로](/automation)`,
      contentEn: `### Session 8

Develop contest or innovation-project ideas, share results, and collect feedback. **Deliverable: final plan with improvements.**

### Growing it into an innovation project

Judges look for a real measured problem, numeric effect, reproducibility, spread potential, and durability. Ask an AI acting as a judge for strengths, weaknesses, likely questions, and title options.

### Sharing

Ask a neighbor: could your division use this, could you run it from the guide alone, what do you think would break.

### Final checklist

Task definition, design and prompt, **working tool**, error checklist and security notes, one-page user guide, rollout plan, improvements and a three-week plan.`,
    },
    {
      title: '8교시 따라하기 실습 · 시연·피드백·최종본 만들기',
      titleEn: 'Session 8 Hands-on — Demo, Feedback, Final Version',
      content: `**소요 55분 · 준비물: 도구, 적용계획서, 확산 아이디어 3가지**
**산출물: 자동화 도구 적용계획서(최종) 및 개선사항**

만든 것을 **동료 앞에서 돌려 보이고**, 받은 피드백을 계획서에 반영해 최종본으로 만듭니다.

그림의 **주황 번호가 STEP 번호**입니다.

![공유·피드백 흐름 — 3분 발표 구성과 피드백을 개선사항·계획서로 옮기는 순서](~/automation/auto-share-feedback.svg)

---

### STEP 1 · 3분 발표를 이 비율로 준비합니다

| 시간 | 무엇을 | 하지 말 것 |
|------|--------|-----------|
| **30초** | 어떤 업무가 왜 불편했나 | 배경 설명을 길게 |
| **60초** | **실제로 돌려 보이기** (화면 공유) | 코드 설명 |
| **60초** | 무엇이 얼마나 줄었나 (숫자) | "편해졌습니다" 같은 감상 |
| **30초** | 다음에 무엇을 할까 | 안 될 계획 나열 |

**✅ 확인** — **절반이 시연입니다.** 말로만 설명하면 무엇이 좋아졌는지 전달되지 않습니다. 실행 버튼을 누르는 장면을 반드시 보여주세요.

발표문이 막히면 AI에게 시킵니다.

\`\`\`text
아래 계획서를 바탕으로 3분 발표 대본을 만들어 줘.
30초 문제 → 60초 시연 → 60초 효과(숫자) → 30초 다음 계획 구성으로.
읽으면 3분이 되도록 분량을 맞춰 줘.

--- 계획서 ---
(적용계획서 붙여넣기)
\`\`\`

---

### STEP 2 · 동료 질문을 그대로 받아 적습니다

**"우리 과 자료는 열이 다른데 되나요?"** 같은 질문이 가장 값집니다. 확산할 때 실제로 부딪힐 문제이기 때문입니다.

**✅ 확인** — 질문을 **방어하지 말고 그대로 적으세요.** "그건 안 됩니다"라고 답하기 전에 메모부터 합니다.

---

### STEP 3 · 강사 피드백을 셋으로 나눠 적습니다

| 구분 | 뜻 |
|------|-----|
| **고칠 것** | 지금 안 고치면 실제 업무에서 사고가 나는 것 |
| **지금은 둘 것** | 있으면 좋지만 없어도 되는 것 |
| **다음에 할 것** | 확산·발전 단계에서 할 것 |

**✅ 확인** — 세 칸으로 나누지 않으면 **전부 고쳐야 할 것처럼 보여** 아무것도 못 끝냅니다.

---

### STEP 4 · 오늘 안에 되는 개선 3개만 고릅니다

\`\`\`text
아래는 내 도구에 대해 받은 피드백 목록이야.
지금 남은 시간 40분 안에 고칠 수 있는 것 3개를 골라 주고,
각각 어떤 순서로 고쳐야 하는지 알려 줘.
나머지는 "다음에 할 것"으로 따로 묶어 줘.

--- 피드백 ---
(받아 적은 것 붙여넣기)
\`\`\`

고를 것을 정했으면 **5교시 오류 루프와 같은 방식**으로 고칩니다 — AI에게 요청 → 코드 전체 받기 → 붙여넣기 → 실행 → 확인.

**✅ 확인** — 고친 뒤에는 반드시 **\`검토표\` 탭의 항목을 다시 돌려** 이전에 되던 것이 깨지지 않았는지 봅니다.

---

### STEP 5 · 계획서를 최종본으로 갱신합니다

적용계획서에 두 칸을 덧붙입니다.

| 항목 | 적을 것 |
|------|---------|
| ⑨ 개선사항 | 오늘 고친 3가지와 그 이유 |
| ⑩ 다음 3주 계획 | 1주차: 내 업무에 실제 적용 / 2주차: 팀 내 1명에게 전달 / 3주차: 다음에 할 것 중 1개 착수 |

그리고 확산 아이디어 중 **하나를 골라** 한 줄로 정리합니다.

\`\`\`text
[발전 방향] 「월간 민원 통계」에 같은 구조를 적용해 5개 과가 공용으로 쓰는
          취합 도구로 확장 — 경진대회 출품 후보
\`\`\`

**✅ 확인** — 마지막으로 **부서 공유 폴더에 다섯 가지를 함께 보관**했는지 봅니다.

| 보관물 | 어디서 만들었나 |
|--------|----------------|
| 자동화 대상 업무 정의서 | 2교시 |
| 설계서·요구사항 명세서 | 3교시 |
| 도구 파일 (코드 + \`사용법\` + \`검토표\` 탭) | 4~6교시 |
| 적용계획서 최종본 | 7~8교시 |
| 개선사항·다음 3주 계획 | 8교시 |

---

### 완성 점검표 — 적용계획서 최종본 및 개선사항

| # | 항목 | 확인 |
|---|------|------|
| 1 | 3분 발표에서 **실제로 도구를 돌려 보였다** | |
| 2 | 동료 질문을 받아 적었다 | |
| 3 | 피드백을 고칠 것 / 둘 것 / 다음 것 셋으로 나눴다 | |
| 4 | 오늘 개선 3개를 골라 실제로 고쳤다 | |
| 5 | 고친 뒤 검토표를 다시 돌렸다 | |
| 6 | 계획서에 ⑨ 개선사항을 추가했다 | |
| 7 | 계획서에 ⑩ 다음 3주 계획을 추가했다 | |
| 8 | 발전 방향 한 줄을 정리했다 | |
| 9 | 다섯 가지 산출물을 공유 폴더에 함께 보관했다 | |

> 9개가 채워지면 오늘 과정의 **모든 산출물이 완성**됩니다.

> **마지막 한 마디** — 오늘 만든 도구보다 중요한 것은 **"말로 설명하면 도구가 된다"는 경험**입니다. 다음 업무에서 막힐 때, 개발자를 찾기 전에 먼저 네 문장으로 적어 보세요 — 들어오는 것 / 하는 일 / 나오는 것 / 사람이 확인할 것.`,
      contentEn: `**55 minutes · You need the tool, the plan and your three scaling ideas**
**Deliverable: the final rollout plan and improvements**

Demo what you built, then fold the feedback back into the plan.

![Sharing and feedback flow](~/automation/auto-share-feedback.svg)

**STEP 1 · Structure the three minutes**

| Time | What | Not |
|---|---|---|
| **30s** | Which task, and why it hurt | A long background |
| **60s** | **Actually run it** (share your screen) | Explaining code |
| **60s** | What shrank, by how much (numbers) | "It feels easier" |
| **30s** | What comes next | A list of things that won't happen |

**✅ Check** — **half of it is the demo.** Show yourself pressing the button.

**STEP 2 · Write down colleagues' questions verbatim.** "Our division's columns are different — would it work?" is the most valuable one: that is exactly what rollout will hit. Note it before defending.

**STEP 3 · Split the instructor's feedback three ways** — fix now / leave for now / do later. Without the split, everything looks mandatory and nothing gets finished.

**STEP 4 · Pick three fixes you can finish today.** Ask the AI which three fit the remaining 40 minutes and in what order, then use the Session 5 error loop. **After fixing, re-run the \`검토표\` items** to confirm nothing that worked has broken.

**STEP 5 · Update the plan to final** — add ⑨ improvements made today and why, and ⑩ a three-week plan (week 1: use it for real; week 2: hand it to one colleague; week 3: start one "do later" item). Add a one-line direction of development, e.g. a shared consolidation tool for five divisions — a competition candidate.

**✅ Check** — five artifacts stored together in the shared folder: the task definition (S2), the design and spec (S3), the tool file with its usage and checklist tabs (S4–6), the final plan (S7–8), and the improvements and three-week plan (S8).

### Completion checklist
Demo actually run · questions recorded · feedback split three ways · three fixes made · checklist re-run · ⑨ and ⑩ added · direction of development written · all five artifacts stored together.

> **One last thing** — more valuable than today's tool is the experience that **describing something in words turns it into a tool.** Next time you're stuck, before looking for a developer, write the four sentences: what comes in, what happens, what comes out, what a human checks.`,
    },
  ],
};

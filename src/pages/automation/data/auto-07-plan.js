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
  ],
};

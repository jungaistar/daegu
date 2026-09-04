export default {
  id: 'auto-05',
  icon: 'fa-bug',
  title: '5교시 14:00~15:00 · 구현 및 테스트',
  titleEn: 'Session 5 — Build and Test',
  sections: [
    {
      title: '돌려보고, 틀리면 AI에게 다시 시킵니다',
      titleEn: 'Run It, and Send Errors Back to the AI',
      content: `### 이 시간에 하는 일

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

> 여섯 개가 모두 체크되면 **오늘 목표를 달성한 것입니다.** 남은 시간은 이 도구를 안전하고 남에게 넘길 수 있게 다듬습니다.`,
      contentEn: `### This session

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

Insert → Drawing → draw a rectangle with a label → Save → click the image → ⋮ → Assign script → enter the function name. Buttons beat menus when handing the tool to a colleague.`,
    },
    {
      title: '따라하기 실습 · 기능 시험과 오류 대응 루틴',
      titleEn: 'Hands-on — Testing Features and the Error Routine',
      content: `**소요 55분 · 준비물: 4교시에서 만든 1차 템플릿**
**산출물: 작동 가능한 자동화 도구 초안**

만든 도구를 **일부러 괴롭혀서** 실제 업무에 견디는지 확인합니다. 오류는 실패가 아니라 **정상적인 절차**입니다.

그림의 **주황 번호가 STEP 번호**입니다.

![오류 대응 루프 — 하나씩 실행, 오류는 통째로 전달, 고쳐질 때까지 반복, 결과 대조와 예외 시험](~/automation/auto-error-loop.svg)

---

### STEP 1 · 기능을 하나씩 실행합니다

**여러 개를 한꺼번에 돌리지 마세요.** 어느 기능이 틀렸는지 못 찾습니다.

붙여 둔 기능을 표로 만들고 하나씩 눌러 봅니다.

| 기능 | 실행 결과 | 결과가 맞나 |
|------|----------|------------|
| 부서별 집계 | | |
| 명단 정리 | | |
| 금액대 분류 | | |
| 보고문 만들기 | | |

**✅ 확인** — 네 칸이 다 채워질 때까지 다음으로 넘어가지 않습니다.

---

### STEP 2 · 오류가 나면 문장을 통째로 복사합니다

**요약하지 말고, 고쳐 쓰지 말고, 그대로** 복사합니다. **줄 번호와 오류 이름이 해결의 열쇠**입니다.

\`\`\`text
TypeError: Cannot read properties of null (reading 'getDataRange')
    at 부서별집계_만들기(코드:4:31)
\`\`\`

**✅ 확인** — 빨간 글씨 전체를 드래그해 복사했나요? 첫 줄만 복사하면 AI가 어디인지 모릅니다.

---

### STEP 3 · AI에게 붙여넣고 "전체를 다시" 요청합니다

\`\`\`text
실행했더니 이런 오류가 났어.
무슨 뜻이고 어떻게 고치면 되는지 알려 주고,
고친 코드 전체를 다시 줘.

(오류 문장 그대로 붙여넣기)
\`\`\`

**✅ 확인** — **"전체를 다시 줘"** 를 꼭 넣으세요. 부분만 받으면 어디를 바꿔야 할지 모릅니다.

받은 코드를 다시 붙여넣고 → 저장 → 다시 실행. **고쳐질 때까지 이 고리를 돕니다.** 보통 두세 번이면 끝납니다.

**자주 나오는 오류 세 가지**

| 오류 문구에 보이는 말 | 대개 이런 뜻 | 이렇게 답하면 빨리 끝난다 |
|---------------------|------------|------------------------|
| \`null\`, \`getSheetByName\` | 시트 이름이 다르다 | "시트 이름은 정확히 \`신청접수\` 야" |
| \`NaN\`, \`Number\` | 숫자 칸에 문자가 섞였다 | "숫자가 아닌 값은 0으로 처리해 줘" |
| \`out of range\`, \`length\` | 데이터가 없거나 행이 모자란다 | "데이터가 0건일 때도 오류 없이 끝나게 해 줘" |

---

### STEP 4 · 오류가 없어도 결과를 대조합니다

**오류가 안 났다고 맞는 게 아닙니다.** 조용히 틀린 결과가 가장 위험합니다.

| 대조 항목 | 방법 |
|-----------|------|
| 행 개수 | 결과 행 수 = 원본 행 수 − 제외한 행 수 인가 |
| 합계 | 결과 합계 = 원본 금액 열의 합인가 (원본에서 \`=SUM()\` 으로 직접 계산) |
| 빠진 항목 | 5개 과가 모두 나왔는가 |
| 경계값 | 정확히 10,000인 행이 어느 구분으로 갔는가 |

**✅ 확인** — 네 가지 중 **하나라도 어긋나면 그 기능은 아직 못 씁니다.** 어긋난 내용을 그대로 AI에게 알려 고칩니다.

---

### STEP 5 · 예외 상황을 일부러 넣어 봅니다 — 이 실습의 핵심

실제 업무 자료에는 **늘 예외가 있습니다.** 연습 시트를 복사해서 아래를 하나씩 넣고 돌려 보세요.

| # | 넣어 볼 예외 | 기대하는 동작 | 나쁜 동작 |
|---|-------------|-------------|----------|
| 1 | 중간에 **빈 행** 한 줄 | 건너뛰고 계속 | 거기서 멈춤 |
| 2 | 접수번호 **중복** 2건 | 규칙대로 하나만 남김 | 둘 다 세어 합계가 늘어남 |
| 3 | 금액 칸에 **"미정"** 이라고 입력 | 0으로 보거나 \`[확인 필요]\` 표시 | 오류로 멈춤 |
| 4 | 데이터가 **0건**(제목 행만) | "처리할 자료가 없습니다" 안내 | 오류 메시지 |
| 5 | 행이 **1,000줄** | 조금 느려도 끝까지 완료 | 중간에 끊김 |
| 6 | 부서 이름에 **띄어쓰기 차이**(\`복지정책과\` / \`복지 정책과\`) | 같은 부서로 묶이거나, 최소한 따로 표시 | 조용히 둘로 나뉨 |

**✅ 확인** — 나쁜 동작이 나온 항목은 **그대로 AI에게 알립니다.**

\`\`\`text
빈 행이 중간에 있으면 거기서 멈춰. 빈 행은 건너뛰고 계속 처리하도록
고친 코드 전체를 다시 줘.
\`\`\`

> 6번(띄어쓰기 차이)은 실제 부서 취합에서 **가장 자주 사고가 나는 곳**입니다. 반드시 시험하세요.

---

### STEP 6 · 동료에게 넘길 수 있게 다듬습니다

\`\`\`text
지금 도구를 처음 쓰는 동료가 읽고 그대로 따라 할 수 있게
사용 설명을 5줄 이내로 만들어 줘.
어디에 붙여넣고, 무엇을 누르고, 결과를 어디서 보고,
무엇을 확인해야 하는지 순서로.
\`\`\`

**✅ 확인** — 그 5줄을 **시트의 새 탭(\`사용법\`)에 붙여 넣으세요.** 도구와 설명이 같은 파일에 있어야 인수인계가 됩니다.

---

### 완성 점검표 — 작동 가능한 자동화 도구 초안

| # | 항목 | 확인 |
|---|------|------|
| 1 | 모든 기능을 하나씩 실행해 봤다 | |
| 2 | 오류가 났을 때 문장 전체를 복사해 해결했다 | |
| 3 | 행 개수·합계를 원본과 대조했다 | |
| 4 | 경계값을 직접 확인했다 | |
| 5 | 예외 6가지를 넣어 돌려 봤다 | |
| 6 | 나쁜 동작을 고쳐 다시 시험했다 | |
| 7 | \`사용법\` 탭에 5줄 설명을 넣었다 | |

> 7개가 채워지면 **작동 가능한 자동화 도구 초안 완성**입니다. 6교시에서 보안과 검토 절차를 붙입니다.`,
      contentEn: `**55 minutes · You need the Session 4 template**
**Deliverable: a working draft automation tool**

Deliberately stress the tool to see whether it survives real work. **Errors are procedure, not failure.**

![Error-handling loop](~/automation/auto-error-loop.svg)

**STEP 1 · Run one feature at a time.** Running several at once hides which one broke. Fill a table: feature / result / is it correct.

**STEP 2 · Copy the error text whole** — don't summarize or rewrite. The line number and error name are the key.

**STEP 3 · Paste it back and ask for the whole corrected file.**

| Words in the error | Usually means | Fastest reply |
|---|---|---|
| \`null\`, \`getSheetByName\` | The sheet name differs | "The sheet name is exactly 신청접수" |
| \`NaN\`, \`Number\` | Text in a numeric column | "Treat non-numeric values as 0" |
| \`out of range\`, \`length\` | No data / too few rows | "Finish without error when there are 0 records" |

**STEP 4 · Reconcile even when there is no error.** A quietly wrong result is the dangerous one — row count, totals (compute \`=SUM()\` yourself on the source), missing categories, boundary values.

**STEP 5 · Inject exceptions on purpose — the point of this session**

| # | Inject | Expected | Bad |
|---|---|---|---|
| 1 | A blank row in the middle | Skip and continue | Stops there |
| 2 | Two duplicate keys | Keeps one per the rule | Counts both |
| 3 | "TBD" in a number field | Treats as 0 or flags it | Crashes |
| 4 | 0 records (header only) | "No data to process" | Error |
| 5 | 1,000 rows | Slower but completes | Cuts off |
| 6 | Same department spelled with/without a space | Grouped together, or at least flagged | **Silently split in two** |

> #6 is where real departmental consolidation goes wrong most often. Always test it.

**STEP 6 · Make it handover-ready.** Ask for a five-line usage note and **paste it into a \`사용법\` tab** in the same file. A tool and its instructions must live together.

### Completion checklist
Each feature run individually · errors resolved by pasting them whole · counts and totals reconciled · boundaries verified · six exceptions injected · bad behavior fixed and retested · usage tab added.

> That is your **working draft tool.** Session 6 adds security and the review procedure.`,
    },
  ],
};

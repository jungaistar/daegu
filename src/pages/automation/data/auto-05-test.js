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
  ],
};

export default {
  id: 'auto-04',
  icon: 'fa-wand-magic-sparkles',
  title: '4교시 13:00~14:00 · 자동화 코드·템플릿 생성',
  titleEn: 'Session 4 — Generating Code',
  sections: [
    {
      title: '프롬프트를 넣고 코드를 받습니다',
      titleEn: 'Paste the Prompt, Get the Code',
      content: `### 이 시간에 하는 일

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

> 여기까지 오셨으면 오늘의 절반은 끝났습니다. 오류가 났다면 그것도 정상입니다. 5교시가 그걸 잡는 시간입니다.`,
      contentEn: `### This session

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

Do not start over — ask it to change only the specific part and show the whole code again.`,
    },
    {
      title: '따라하기 실습 · 코드를 받아 시트에 붙이기',
      titleEn: 'Hands-on — Get the Code and Put It in the Sheet',
      content: `**소요 55분 · 준비물: 3교시에서 만든 요구사항 명세서, 구글 계정**
**산출물: 1차 자동화 템플릿**

3교시 명세서를 AI에게 건네 코드를 받고, **실제 시트에서 돌아가게** 만듭니다. 코드는 한 줄도 직접 쓰지 않습니다.

---

## 1부 · 코드 받기 (STEP 1~3)

그림의 **주황 번호가 STEP 번호**입니다.

![자동화 코드 받기 화면 — 명세서 붙여넣기, 되물음에 답하기, 완성 코드 한 덩어리 수령](~/automation/auto-code-gen.svg)

---

### STEP 1 · 명세서를 통째로 붙여넣고, 코드보다 먼저 질문을 받습니다

ChatGPT나 Claude에 **새 대화**를 열고, 3교시 명세서 전체를 붙여넣은 뒤 이어서 보냅니다.

\`\`\`text
위 명세서로 코드를 만들기 전에,
애매하거나 빠진 조건이 있으면 질문 목록으로 먼저 알려 줘.
질문이 없으면 "질문 없음"이라고만 답해 줘.
\`\`\`

**✅ 확인**

| 답 | 뜻 | 다음 |
|----|-----|------|
| 질문 2~3개 | **정상** — 명세서가 구체적이라 진짜 빈틈만 짚었다 | STEP 2로 |
| "질문 없음" | 명세서가 충분하다 | 바로 STEP 3으로 |
| 질문 10개 이상 | 명세서가 아직 성글다 | **3교시로 돌아가** 다시 채운다 |

---

### STEP 2 · 되물음에 답합니다

\`\`\`text
1번 — 있으면 내용을 지우고 다시 채워 줘.
2번 — 0으로 계산해 줘.
\`\`\`

**✅ 확인** — 답한 내용을 **명세서에도 적어 두세요.** 다음 달에 다시 만들 때 같은 질문을 안 받습니다.

---

### STEP 3 · 코드를 받습니다

\`\`\`text
이제 Google Apps Script 코드를 만들어 줘.

- 붙여넣고 바로 실행되는 완성된 코드로
- 각 줄 위에 무슨 일을 하는지 한글 주석
- 함수 이름은 부서별집계_만들기
- 원본 "신청접수" 시트는 절대 수정하지 마
- 시트 상단에 "자동화" 메뉴를 만들고 그 안에 실행 항목을 넣어 줘
\`\`\`

**✅ 확인** — \`function\` 으로 시작하는 코드가 **한 덩어리로** 나오면 성공입니다. 코드를 이해할 필요는 없습니다. **한 글자도 고치지 마세요.**

---

## 2부 · 시트에 적용하기 (STEP 4~6)

![시트 적용 결과 화면 — 자동화 메뉴 생성, 메뉴 실행, 결과 탭과 원본 탭 확인](~/automation/auto-sheet-apply.svg)

---

### STEP 4 · 붙여넣고 저장합니다

1. 시트에서 **[확장 프로그램] → [Apps Script]**
2. 편집기 내용을 **모두 지우고** 받은 코드를 붙여넣기
3. **저장**(💾)
4. **시트로 돌아가 브라우저를 새로고침**(F5)

**✅ 확인** — 상단 메뉴에 **\`자동화\`** 가 새로 생겼나요? 안 생겼다면 ① 저장을 안 했거나 ② 새로고침을 안 한 것입니다.

---

### STEP 5 · 메뉴에서 실행합니다

**[자동화] → [부서별 집계 실행]**

첫 실행에는 권한 창이 뜹니다 — **고급 → 프로젝트로 이동 → 허용**.

**✅ 확인** — 이제 **동료도 코드를 몰라도 메뉴만 누르면 됩니다.** 이것이 "도구"가 된 순간입니다.

---

### STEP 6 · 결과와 원본을 둘 다 확인합니다

**✅ 확인** — 두 가지를 모두 봅니다.

| 봐야 할 것 | 통과 기준 |
|-----------|----------|
| 결과 탭 | \`부서별집계\` 탭이 새로 생기고 표가 채워졌다 |
| **원본 탭** | \`신청접수\` 탭의 내용이 **하나도 바뀌지 않았다** |
| 합계 행 | 마지막 행 합계가 원본을 더한 값과 같다 |

> **원본 확인을 빠뜨리지 마세요.** 결과가 잘 나와도 원본을 건드렸다면 그 도구는 못 씁니다.

---

## 3부 · 예제 세 가지로 넓혀 보기 (STEP 7)

집계 하나가 돌았다면, 같은 방식으로 **다른 기능을 덧붙입니다.** 아래 세 가지를 각각 새 요청으로 보내세요.

### ① 신청자 명단 정리

\`\`\`text
"자동화" 메뉴에 "명단 정리" 항목을 추가해 줘.

- "신청접수" 시트에서 접수번호가 중복이면 나중 행만 남긴다.
- 접수번호가 비어 있는 행은 제외한다.
- 부서 → 접수번호 순으로 정렬한다.
- 결과를 "정리명단" 시트에 넣는다. 원본은 수정하지 마.
\`\`\`

**✅ 확인** — 원본 행 수보다 결과 행 수가 **적거나 같아야** 정상입니다. 많아졌다면 중복 제거가 반대로 된 것입니다.

### ② 데이터 분류

\`\`\`text
"자동화" 메뉴에 "금액대 분류" 항목을 추가해 줘.

- 금액이 10,000천원 이상이면 "대규모",
  3,000 이상 10,000 미만이면 "중규모", 그 미만이면 "소규모"로 분류한다.
- 금액이 비어 있으면 "확인필요"로 분류한다.
- 결과를 "분류결과" 시트에 접수번호·부서·금액·구분 네 열로 넣는다.
\`\`\`

**✅ 확인** — **경계값을 직접 확인하세요.** 정확히 10,000인 행이 "대규모"로 갔는지, 3,000인 행이 "중규모"로 갔는지. 경계에서 틀리는 일이 가장 잦습니다.

### ③ 보고 문장 생성

\`\`\`text
"자동화" 메뉴에 "보고문 만들기" 항목을 추가해 줘.

- "부서별집계" 시트의 숫자를 읽어 보고용 문장 한 문단을 만든다.
- 문장에는 총 건수, 총 금액, 가장 많은 부서만 넣는다.
- 시트에 없는 숫자는 절대 만들어 넣지 마.
- 결과를 "보고문" 시트 A1 칸에 넣는다.
\`\`\`

**✅ 확인** — 나온 문장의 **모든 숫자가 집계표에 있는 숫자인지** 눈으로 대조합니다. 없는 숫자가 하나라도 있으면 그 기능은 쓰지 마세요.

---

### 완성 점검표 — 1차 자동화 템플릿

| # | 항목 | 확인 |
|---|------|------|
| 1 | 시트 상단에 \`자동화\` 메뉴가 생겼다 | |
| 2 | 메뉴에서 실행하면 결과 탭이 채워진다 | |
| 3 | 원본 시트가 수정되지 않았다 | |
| 4 | 합계·행 개수를 원본과 대조했다 | |
| 5 | 예제 3가지 중 최소 1개를 더 붙였다 | |
| 6 | 받은 코드를 별도 문서에도 보관했다 | |
| 7 | 되물음에 답한 내용을 명세서에 반영했다 | |

> 7개가 채워지면 **1차 자동화 템플릿 완성**입니다. 5교시에서 이걸 본격적으로 시험합니다.`,
      contentEn: `**55 minutes · You need the Session 3 spec and a Google account**
**Deliverable: a first automation template**

Hand your spec to the AI, get code, and make it run in a real sheet. You will not write a line of code.

## Part 1 · Getting the code
![Code-generation screen](~/automation/auto-code-gen.svg)

**STEP 1 · Paste the whole spec, ask for questions before code.**

| Answer | Meaning | Next |
|---|---|---|
| 2–3 questions | **Healthy** — only real gaps remain | STEP 2 |
| "No questions" | The spec is sufficient | STEP 3 |
| 10+ questions | The spec is still loose | **Go back to Session 3** |

**STEP 2 · Answer them** — and record the answers in the spec so you never get asked again.

**STEP 3 · Request the code** — complete and paste-and-run, Korean comments per line, a named function, never modify the source sheet, and add an "자동화" menu to the sheet.
**✅ Check** — one block starting with \`function\`. You don't need to understand it. **Change nothing.**

## Part 2 · Putting it in the sheet
![Sheet application screen](~/automation/auto-sheet-apply.svg)

**STEP 4 · Paste, save, refresh the sheet.**
**✅ Check** — a new \`자동화\` menu appears. If not, you skipped the save or the refresh.

**STEP 5 · Run it from the menu.** Approve the permission prompt once.
**✅ Check** — a colleague who knows no code can now use it. That is the moment it became a *tool*.

**STEP 6 · Check the result **and** the source.**

| Check | Pass |
|---|---|
| Result tab | A new tab appeared and is filled |
| **Source tab** | The original is **completely unchanged** |
| Total row | Matches the sum of the source |

> Never skip the source check. A correct result from a tool that modified the original is still unusable.

## Part 3 · Three more examples (STEP 7)
Add each as a new request: **① applicant-list cleanup** (deduplicate, drop blanks, sort), **② data classification** (bands by amount, "needs checking" for blanks), **③ report-sentence generation** (only numbers present in the sheet).

**✅ Checks** — for ①, result rows must be fewer than or equal to the source. For ②, verify the **boundary values** yourself. For ③, confirm every number in the sentence appears in the table.

### Completion checklist
Menu created · runs from the menu · source untouched · totals reconciled · at least one extra example added · code saved elsewhere · answers folded into the spec.

> Seven checks make your **first automation template.** Session 5 puts it under real testing.`,
    },
  ],
};

export default {
  id: 'auto-08',
  icon: 'fa-list-check',
  title: '실습 사례집 · 부서별 적용',
  titleEn: 'Case Library by Division',
  sections: [
    {
      title: '따라하기 실습 · 사례를 내 업무로 바꿔 쓰기',
      titleEn: 'Hands-on — Adapting a Case to Your Own Work',
      content: `**소요 40분 · 준비물: 내 부서의 실제 반복 업무 자료 1건(개인정보 지운 복사본)**
**산출물: 내 업무로 바꾼 프롬프트와 돌아가는 도구**

다음 절의 사례집에는 **그대로 복사해 쓰는 프롬프트**가 붙어 있습니다. 다만 시트 이름도 열 구성도 내 것과 다릅니다. 이 실습은 **그 차이를 메우는 절차**입니다.

> **처음부터 새로 쓰지 마세요.** 사례를 고쳐 쓰는 것이 훨씬 빠르고, 사례에 이미 들어 있는 안전장치(중복 처리·총합 검증·"안 적은 규칙은 만들지 마")를 그대로 물려받습니다.

---

## 1부 · 사례 고르기 (STEP 1~2)

그림의 **주황 번호가 STEP 번호**입니다.

![사례 고르기 — 부서가 아니라 자료 모양·하는 일·규칙 명확성으로 고르고, 6종 중에서 선택](~/automation/auto-case-pick.svg)

---

### STEP 1 · 부서 이름이 아니라 세 가지로 고릅니다

**"나는 민원 담당이니 민원 사례"** 로 고르지 마세요. 다른 과 사례가 더 맞는 일이 흔합니다.

| 볼 것 | 내 업무는? |
|-------|-----------|
| **들어오는 자료의 모양** | 표 한 장 / 여러 파일 / 폼 응답 |
| **하는 일의 종류** | 합치기 / 분류 / 계산 / 글 만들기 |
| **규칙이 정해져 있나** | "이럴 땐 이렇게" 를 말로 쓸 수 있나 |

**✅ 확인** — 세 칸을 채운 뒤 사례집을 훑습니다. 예를 들어 **교육 담당의 "수강 신청 정리"** 는 자료 모양·하는 일이 **총무의 "팀별 제출자료 취합"** 과 같습니다. 그 사례를 가져오면 됩니다.

---

### STEP 2 · 고른 사례의 프롬프트를 열어 열 이름을 대조합니다

**✅ 확인** — 사례 프롬프트에 적힌 열이 **내 자료에 실제로 있는지** 봅니다.

| 상태 | 판정 | 다음 |
|------|------|------|
| 이름만 다르고 다 있다 | **가장 좋은 경우** | 그대로 STEP 3으로 |
| 내 자료에 없는 열이 있다 | 그 규칙을 빼면 된다 | STEP 3에서 해당 줄 삭제 |
| 사례에 없는 열이 내게 더 있다 | 나중에 덧붙인다 | STEP 6에서 추가 |
| 절반 이상이 안 맞는다 | 사례를 잘못 골랐다 | **STEP 1로 돌아간다** |

> **절감시간이 큰 사례를 고르지 마세요.** 규칙이 가장 명확한 사례가 끝까지 갑니다.

---

## 2부 · 내 것으로 바꾸기 (STEP 3~5)

![사례를 내 업무로 바꾸기 — 시트 이름·열·규칙·결과 위치 네 군데만 고치고 나머지는 그대로](~/automation/auto-case-adapt.svg)

---

### STEP 3 · 네 군데만 바꿉니다

사례 프롬프트를 메모장에 붙여넣고 **아래 네 곳만** 고칩니다.

| # | 바꿀 곳 | 예 (총무 사례 → 예산 담당) |
|---|---------|------------------------|
| 1 | **시트 이름** | \`'제출자료'\` → \`'월간실적'\` |
| 2 | **열 문자와 이름** | \`A열 팀명\` → \`A열 과명\` · \`C열 건수\` → \`D열 금액\` |
| 3 | **규칙** | 중복 기준을 \`A열+B열\` → \`A열(접수번호)\` |
| 4 | **결과 위치** | \`'요약'\` → \`'부서별집계'\` |

**✅ 확인** — 두 가지를 꼭 지키세요.

- **열은 문자와 이름을 함께 바꿉니다.** \`C열 건수\` 를 \`금액\` 으로만 바꾸고 문자를 그대로 두면 AI가 엉뚱한 열을 잡습니다.
- **나머지 문장은 손대지 않습니다.** 특히 마지막 줄 **\`내가 안 적은 규칙은 만들지 마\`** 는 반드시 남깁니다. 이 한 줄이 AI가 임의로 규칙을 지어내는 것을 막습니다.

---

### STEP 4 · 보내기 전에 스스로 읽어봅니다

바꾼 프롬프트를 **처음 보는 사람 눈으로** 읽습니다.

| 점검 | 통과 기준 |
|------|----------|
| 시트 이름 | 내 파일의 **탭 이름과 글자 하나까지 같은가** |
| 열 문자 | \`A\` \`B\` \`C\` 가 실제 시트의 그 열인가 |
| 남은 흔적 | 사례의 원래 단어(팀명·제출일 등)가 안 남아 있는가 |
| 결과 시트 | 없을 때 새로 만들라는 문장이 있는가 |

**✅ 확인** — 네 번째 항목이 자주 빠집니다. 없으면 이 문장을 덧붙이세요.

\`\`\`text
결과 시트가 없으면 새로 만들고, 있으면 내용을 지운 뒤 다시 채워 줘.
\`\`\`

---

### STEP 5 · 보내고 실행해 봅니다

AI에 보낸 뒤 **4교시와 같은 순서**로 진행합니다.

1. 되물음이 오면 답한다
2. 받은 코드를 \`[확장 프로그램] → [Apps Script]\` 에 붙여넣고 저장
3. 시트 새로고침 → 새로 생긴 메뉴에서 실행
4. **결과 탭과 원본 탭을 둘 다** 확인

**✅ 확인** — 사례 프롬프트에는 대개 **총합 검증 알림**이 들어 있습니다.

\`\`\`text
총 3개 과, 26건 / 원본 총합 26건
\`\`\`

**두 숫자가 같은지** 보세요. 다르면 경고가 뜨도록 사례에 이미 들어 있습니다. 이것이 사례를 고쳐 쓰는 이유입니다 — **안전장치를 물려받습니다.**

---

## 3부 · 내 것으로 키우기 (STEP 6~7)

### STEP 6 · 사례에 없던 내 규칙을 덧붙입니다

기본형이 돌아간 뒤에 **하나씩** 추가합니다. 한꺼번에 여러 개를 넣지 마세요.

\`\`\`text
지금 코드에 아래 규칙 하나만 추가해 줘. 나머지 동작은 그대로 두고,
고친 코드 전체를 다시 줘.

- 금액이 10,000천원을 넘는 행은 비고 열에 "검토대상" 이라고 표시한다.
\`\`\`

**✅ 확인** — 규칙 하나를 추가할 때마다 **다시 실행해 총합이 그대로인지** 봅니다. 규칙을 추가하다 집계가 틀어지는 일이 자주 있습니다.

---

### STEP 7 · 우리 부서 사례집에 등록합니다

내가 고친 프롬프트를 **부서 공유 문서에 사례 형식으로** 남깁니다. 다음 사람이 또 처음부터 하지 않게 됩니다.

\`\`\`text
| 항목 | 내용 |
|------|------|
| 업무 이름 | 월간 부서별 실적 취합 |
| 원본 사례 | 사례집 「총무·서무 · 팀별 제출자료 취합」 |
| 바꾼 곳 | 시트명, 열 이름 4개, 중복 기준, 결과 시트명 |
| 시트 구조 | A 과명 / B 항목 / C 건수 / D 금액 / E 상태 |
| 프롬프트 | (바꾼 전체 프롬프트 붙여넣기) |
| 주의 | 과 이름 띄어쓰기가 섞이면 따로 집계됨 |
\`\`\`

**✅ 확인** — 마지막 **주의** 칸이 핵심입니다. 내가 겪은 함정을 적어 두면 다음 사람이 같은 자리에서 안 넘어집니다.

---

### 완성 점검표

| # | 항목 | 확인 |
|---|------|------|
| 1 | 부서가 아니라 **자료 모양·하는 일·규칙**으로 사례를 골랐다 | |
| 2 | 사례의 열이 내 자료에 있는지 대조했다 | |
| 3 | 네 군데(시트명·열·규칙·결과 위치)만 바꿨다 | |
| 4 | 열은 **문자와 이름을 함께** 바꿨다 | |
| 5 | \`내가 안 적은 규칙은 만들지 마\` 문장을 남겼다 | |
| 6 | 실행 후 **총합 검증 숫자 두 개가 같았다** | |
| 7 | 원본 시트가 수정되지 않았다 | |
| 8 | 추가 규칙은 하나씩 넣고 매번 다시 확인했다 | |
| 9 | 부서 공유 문서에 사례로 등록했다 | |

> 9개가 채워지면 **사례집이 내 부서 사례집이 됩니다.** 다음 절에서 6개 부서 사례를 골라 이 절차를 적용하세요.`,
      contentEn: `**40 minutes · You need one real recurring work file (a copy with personal data removed)**
**Deliverable: an adapted prompt and a working tool**

The case library gives you **copy-and-paste prompts** — but with different sheet names and columns from yours. This walkthrough is **the procedure for closing that gap.**

> **Don't start from scratch.** Adapting a case is faster, and you inherit the safety features already baked into it — duplicate handling, total reconciliation, and "don't invent rules I didn't state."

## Part 1 · Choosing a case
![Choosing a case](~/automation/auto-case-pick.svg)

**STEP 1 · Choose by three things, not by division name.** "I'm in civil affairs so I'll take the civil affairs case" is wrong — another division's case often fits better.

| Look at | Yours? |
|---|---|
| **Shape of the input** | One table / several files / form responses |
| **Kind of work** | Merging / classifying / calculating / writing |
| **Are the rules fixed?** | Can you write "when X, do Y" in words? |

**✅ Check** — training's "course registration cleanup" has the same shape and work as general affairs' "team submission consolidation." Take that one.

**STEP 2 · Open the case prompt and compare the columns.**

| State | Verdict | Next |
|---|---|---|
| Same columns, different names | **Best case** | STEP 3 |
| A column in the case is missing here | Drop that rule | Delete that line in STEP 3 |
| You have extra columns | Add later | STEP 6 |
| More than half don't match | Wrong case | **Back to STEP 1** |

> Don't pick the case with the biggest time saving. **The one with the clearest rules is the one that finishes.**

## Part 2 · Adapting it
![Adapting a case](~/automation/auto-case-adapt.svg)

**STEP 3 · Change exactly four things** — sheet name, column letters *and* names, the rules, the destination sheet.

**✅ Check** — two things matter:
- **Change the letter and the name together.** Renaming \`C 건수\` to \`금액\` while leaving the letter makes the AI read the wrong column.
- **Leave everything else alone** — especially \`내가 안 적은 규칙은 만들지 마\` ("don't invent rules I didn't state"). That single line is what stops the model making things up.

**STEP 4 · Re-read it as a stranger would**

| Check | Pass |
|---|---|
| Sheet name | Character-for-character identical to your tab |
| Column letters | Actually those columns in your sheet |
| Leftovers | No original case words remain |
| Destination | A line saying to create it if missing |

The fourth is the one people forget: "Create the destination sheet if it doesn't exist; if it does, clear it and refill."

**STEP 5 · Send it and run it** — same order as Session 4. Answer any questions, paste into Apps Script, save, refresh, run from the menu, and check **both the result tab and the source tab.**

**✅ Check** — case prompts usually include a **total reconciliation notice**: "3 divisions, 26 records / source total 26." Confirm the two numbers match. That warning is already in the case — **this is why you adapt rather than rewrite: you inherit the safeguards.**

## Part 3 · Growing it

**STEP 6 · Add your own rules one at a time.** After each addition, re-run and confirm the totals still match — adding rules is where aggregates quietly break.

**STEP 7 · Register it in your division's own case library** — task name, which case it came from, what you changed, your sheet structure, the full prompt, and **the pitfalls you hit.** That last field is the valuable one: it stops the next person tripping in the same place.

### Completion checklist
Chose by shape/work/rules · compared columns · changed only four things · letters and names together · kept the "don't invent rules" line · totals reconciled · source untouched · added rules one at a time · registered in the shared library.

> Nine checks turn the case library into **your division's case library.**`,
    },
    {
      title: '내 부서 업무로 골라 쓰기',
      titleEn: 'Pick the Case That Matches Your Work',
      content: `2교시에 고를 업무가 떠오르지 않으면 여기서 찾으세요. **대구시 부서에서 실제로 반복되는 업무**를 기준으로 정리했습니다.

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

> 위에 없는 업무라도 **입력 → 규칙 → 출력** 이 정해져 있으면 같은 방식으로 됩니다. 3교시 프롬프트 틀에 내 업무를 넣으면 됩니다.`,
      contentEn: `If nothing comes to mind in session 2, pick from here. Each case ships a ready prompt — change only the sheet names and columns.

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

> Any task with a fixed **input → rule → output** works the same way.`,
    },
    {
      title: '따라하기 — 류승인 주무관 도구 직접 써보기',
      titleEn: 'Walkthrough — A Serving Officer Tools',
      content: `오늘 만든 도구가 **어디까지 갈 수 있는지** 직접 확인합니다. 광진구 류승인 주무관이 현직 공무원 신분으로 만들어 공개한 도구들입니다.

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

> 처음부터 12개를 만든 사람은 없습니다. **매주 30분씩 잡아먹는 일 하나**부터입니다. 오늘 그 하나를 만들었습니다.`,
      contentEn: `See how far this goes — tools built and published by Ryu Seung-in, a serving public officer in Gwangjin-gu.

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

Nobody built twelve at once. It starts with **the one task that eats 30 minutes a week** — which you built today.`,
    },
  ],
};

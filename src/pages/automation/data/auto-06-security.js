export default {
  id: 'auto-06',
  icon: 'fa-shield-halved',
  title: '6교시 15:00~16:00 · 보안·오류 대응 및 개선',
  titleEn: 'Session 6 — Security and Error Handling',
  sections: [
    {
      title: '공공업무에 쓸 수 있게 다듬습니다',
      titleEn: 'Make It Safe for Public Service',
      content: `### 이 시간에 하는 일

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
- [ ] 오류 대응 체크리스트를 시트로 만들었다`,
      contentEn: `### This session

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

Never paste raw personal data; describe structure not data; check results before external release; always work on a copy; stop immediately if totals disagree; ship the guide with the tool.`,
    },
  ],
};

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
  ],
};

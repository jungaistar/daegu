export default {
  id: 'auto-01',
  icon: 'fa-lightbulb',
  title: '1교시 09:00~10:00 · 바이브코딩 이해',
  titleEn: 'Session 1 — Understanding Vibe Coding',
  sections: [
    {
      title: '말로 설명하면 도구가 만들어집니다',
      titleEn: 'Describe It, and the Tool Appears',
      content: `### 이 시간에 하는 일

| 학습 목표 | 말로 설명한 업무 흐름이 어떻게 실행 가능한 도구가 되는지 이해한다 |
|---|---|
| 형태 | 강의 + 따라하기 실습 |
| 산출물 | 없음 (다음 시간부터 만들기 시작) |

### 바이브코딩이 뭔가

예전 방식과 지금 방식의 차이는 이것뿐입니다.

| | 예전 | 지금 |
|---|------|------|
| 누가 | 개발자에게 요청 | **업무 담당자가 직접** |
| 무엇을 | 요구사항 문서 작성 | 말로 설명 |
| 얼마나 | 몇 주~몇 달 | 몇 분~몇 시간 |
| 고칠 때 | 다시 요청 | 그 자리에서 다시 말함 |

핵심은 **업무를 가장 잘 아는 사람이 도구를 만든다**는 점입니다. 우리 부서 업무의 예외 상황을 개발자는 모릅니다. 담당자는 압니다.

### 자동화하기 좋은 업무 — 실제 사례

대구시 부서에서 실제로 자동화되는 업무들입니다. 이 중에 내 업무가 있는지 보세요.

| 업무 | 지금 걸리는 시간 | 자동화 후 |
|------|---------------|----------|
| 신청자 명단 정리 (여러 시트 합치고 중복 제거) | 30분~1시간 | 버튼 1회, 5초 |
| 민원 분류 (유형별·소관 부서별) | 건당 1~2분 | 전체 일괄, 10초 |
| 부서별 실적 취합 (제출 파일 모으기) | 2시간 | 버튼 1회, 10초 |
| 안내문 생성 (명단에서 개인별 안내문) | 건당 3분 | 전체 일괄 |
| 집행률 계산 + 요약표 | 1시간 | 버튼 1회 |
| 파일명 정리 (규칙에 맞게 일괄 변경) | 30분 | 즉시 |

### 자동화에 맞지 않는 업무

솔직하게 말씀드립니다. 아래는 오늘 대상으로 고르지 마세요.

| 이런 업무 | 왜 |
|----------|-----|
| 1년에 한두 번 하는 일 | 도구 만드는 시간이 더 듭니다 |
| 매번 판단이 달라지는 일 | 규칙이 없으면 자동화가 안 됩니다 |
| 결재·승인 자체 | 사람이 책임지는 절차입니다 |
| 개인정보가 핵심인 원본 처리 | 외부 AI에 올릴 수 없습니다 |

### 따라하기 — 5분 만에 첫 자동화 맛보기

지금 바로 해보겠습니다. **아무것도 설치하지 않습니다.**

1. 브라우저에서 **[sheets.new](https://sheets.new)** 를 주소창에 입력합니다 — 새 구글 시트가 열립니다
2. A1 칸에 \`부서\`, B1 칸에 \`금액\` 을 입력합니다
3. A2부터 아래처럼 아무 값이나 넣습니다

   | 부서 | 금액 |
   |------|------|
   | 총무과 | 1000 |
   | 총무과 | 2000 |
   | 청년정책과 | 1500 |
   | 도로과 | 3000 |

4. 상단 메뉴 **확장 프로그램 → Apps Script** 를 클릭합니다 (새 탭이 열립니다)
5. 열린 편집기의 코드를 **전부 지우고**, 아래를 붙여넣습니다

\`\`\`javascript
function 부서별합계() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const data = sheet.getDataRange().getValues();
  const 합계 = {};

  // 1행은 제목이므로 2행부터 읽는다
  for (let i = 1; i < data.length; i++) {
    const 부서 = data[i][0];
    const 금액 = Number(data[i][1]) || 0;
    if (!부서) continue;
    합계[부서] = (합계[부서] || 0) + 금액;
  }

  const 결과 = [['부서', '합계']];
  for (const 부서 in 합계) 결과.push([부서, 합계[부서]]);

  sheet.getRange(1, 4, 결과.length, 2).setValues(결과);
  SpreadsheetApp.getUi().alert('부서별 합계를 D열에 넣었습니다.');
}
\`\`\`

6. 상단 **저장(디스크 모양)** 을 누릅니다
7. **실행(▶)** 을 누릅니다 → 권한 요청 창이 뜨면 **권한 검토 → 내 계정 선택 → 고급 → (프로젝트 이름)(으)로 이동 → 허용**
8. 시트 탭으로 돌아가면 **D열에 부서별 합계가 들어가 있습니다**

> 방금 코드를 한 줄도 쓰지 않았습니다. 붙여넣고 실행했을 뿐입니다. 오늘 하루는 **이 코드를 AI에게 말로 시켜서 받아내는 법**을 배웁니다.

### 권한 요청 창이 무섭게 나오는데요

정상입니다. 구글은 "내가 만든 스크립트가 내 시트를 건드려도 되는지" 를 매번 묻습니다.

| 화면에 나오는 말 | 눌러야 할 것 |
|----------------|------------|
| "이 앱은 Google에서 확인하지 않았습니다" | **고급** → **(프로젝트명)(으)로 이동** |
| "○○에 대한 액세스 권한 요청" | **허용** |

이 스크립트는 **내 계정의 내 시트 안에서만** 돕니다. 외부로 나가지 않습니다.

### 오늘 만들 결과물 미리보기

| 시간 | 만드는 것 |
|------|----------|
| 2교시 | 무엇을 자동화할지 정한 **업무 정의서** |
| 3교시 | 도구 화면과 순서를 그린 **설계서 + AI에게 줄 프롬프트** |
| 4~5교시 | **실제로 도는 자동화 도구** |
| 6교시 | **오류·보안 체크리스트** |
| 7~8교시 | **부서 적용계획서** |

### 이 방향의 끝에는 무엇이 있나

광진구 류승인 주무관은 같은 방식으로 시작해 **12개 이상의 도구**를 만들어 공개했습니다. 법령 검색, 통계 조회, 한글 문서 변환, 주소 표준화 같은 것들입니다.

처음부터 12개를 만든 것이 아닙니다. **매주 30분씩 잡아먹는 일 하나**부터 시작했습니다. 오늘 우리가 하는 것도 그것입니다.
→ [류승인 주무관 사례 보기](/reference)`,
      contentEn: `### This session

Understand how a workflow described in plain language becomes a runnable tool. Lecture plus hands-on. No deliverable yet.

### What vibe coding changes

| | Before | Now |
|---|--------|-----|
| Who | Ask a developer | **The person who does the work** |
| What | Write a requirements document | Describe it in words |
| How long | Weeks to months | Minutes to hours |
| To change it | Request again | Just say it again |

### Tasks worth automating

Merging applicant lists, classifying complaints, collecting department submissions, generating individual notices, computing execution rates, renaming files in bulk.

### Tasks not worth automating

Once-a-year work, judgment-heavy decisions, approvals themselves, and raw personal-data processing.

### Hands-on — your first automation in 5 minutes

1. Open **[sheets.new](https://sheets.new)**
2. Enter \`Department\` in A1 and \`Amount\` in B1, then some rows
3. Menu **Extensions → Apps Script**
4. Replace the code with the sample, **Save**, then **Run**
5. Approve the permission prompt (Advanced → Go to project → Allow)
6. Back in the sheet, column D now holds the totals

> You wrote no code. Today you learn to get that code from an AI by describing what you want.`,
    },
  ],
};

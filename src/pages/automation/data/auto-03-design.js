export default {
  id: 'auto-03',
  icon: 'fa-pen-ruler',
  title: '3교시 11:00~12:00 · 업무흐름 및 화면구성 설계',
  titleEn: 'Session 3 — Flow and Screen Design',
  sections: [
    {
      title: '만들기 전에 그림을 그립니다',
      titleEn: 'Draw It Before You Build It',
      content: `### 이 시간에 하는 일

| 학습 목표 | 도구의 입력값·버튼·처리절차·결과 화면을 설계하고, AI에게 줄 요구사항 명세서를 쓴다 |
|---|---|
| 형태 | 실습 |
| **산출물** | **자동화 도구 설계서 + AI 프롬프트** |

> 여기가 오늘의 **가장 중요한 시간**입니다. 설계서가 좋으면 4교시에 AI가 한 번에 만들어 줍니다. 설계서가 부실하면 오후 내내 고칩니다.

### 도구는 이 네 부분으로 이뤄집니다

| 부분 | 무엇인가 | 우리 업무에서는 |
|------|---------|---------------|
| **입력** | 어디에 무엇이 들어오나 | '원본' 시트, A열 팀명 / B열 항목 / C열 건수 |
| **버튼** | 무엇을 누르면 시작되나 | 메뉴에 '실적 취합' 항목 추가 |
| **처리** | 무슨 순서로 도나 | 읽기 → 중복 제거 → 팀별 합계 → 정렬 |
| **결과** | 어디에 무엇이 남나 | '요약' 시트에 팀별 합계표, 완료 알림 |

### 1단계 · 시트 구조 정하기 (10분)

**AI에게 시트 구조를 정확히 알려주지 않으면 반드시 다시 물어봅니다.** 미리 정합니다.

| 정할 것 | 적는 법 | 예시 |
|--------|--------|------|
| 시트 이름 | 실제 탭 이름 그대로 | 원본 / 요약 |
| 열 구성 | 열 문자 + 제목 | A열 팀명, B열 항목, C열 건수, D열 비고 |
| 데이터 시작 행 | 제목이 몇 행인지 | 1행 제목, 2행부터 데이터 |
| 결과 위치 | 어느 시트 어디에 | '요약' 시트 A1부터 |

> 구글 시트 아래쪽 탭 이름을 지금 **원본**, **요약** 으로 바꿔 두세요. 이름이 다르면 코드가 못 찾습니다.

### 2단계 · 처리 순서를 번호로 쓰기 (10분)

2교시 정의서의 '처리과정'을 **컴퓨터가 할 수 있는 말**로 다시 씁니다.

| 사람 말 | 컴퓨터가 할 수 있는 말 |
|--------|---------------------|
| "대충 정리해서" | "A열 기준으로 오름차순 정렬하고" |
| "중복은 빼고" | "A열+B열이 같은 행은 첫 번째만 남기고" |
| "빈 건 제외" | "C열이 비었거나 0인 행은 제외하고" |
| "합쳐서" | "A열 값이 같은 행끼리 C열을 더해서" |
| "보기 좋게" | "제목 행은 굵게, 숫자는 천 단위 쉼표로" |

### 3단계 · 설계서 작성 (20분)

아래 표를 그대로 채웁니다. **이것이 두 번째 산출물입니다.**

| 항목 | 내용 (예시) |
|------|-----------|
| 도구 이름 | 주간 실적 취합 도구 |
| 입력 시트 | '원본' — 1행 제목, 2행부터 데이터 |
| 입력 열 | A: 팀명 / B: 항목 / C: 건수 / D: 비고 |
| 실행 방법 | 상단 메뉴에 '실적 취합' 메뉴 추가, 클릭 시 실행 |
| 처리 순서 | ① C열이 비었거나 0인 행 제외 ② A+B 중복 행은 첫 번째만 ③ A열 기준 C열 합계 ④ 합계 큰 순 정렬 |
| 결과 시트 | '요약' — 기존 내용 지우고 새로 작성 |
| 결과 형식 | A1 제목 행(팀명/건수합계), A2부터 데이터, 숫자 천 단위 쉼표 |
| 완료 표시 | "취합 완료: ○개 팀, ○건" 알림창 |
| 예외 처리 | '원본' 시트가 없으면 안내 후 중단 / 데이터가 0건이면 안내 |

### 4단계 · AI 요구사항 명세서(프롬프트) 만들기 (20분)

설계서를 **그대로 프롬프트로 바꿉니다.** 아래 틀에 내 설계서를 채워 넣으세요.

\`\`\`text
너는 Google Apps Script 전문가야. 공무원이 쓸 자동화 도구를 만들어줘.
나는 코딩을 모르니, 코드와 함께 설치 방법을 단계별로 알려줘.

## 만들 도구
주간 실적 취합 도구

## 시트 구조
- '원본' 시트: 1행이 제목, 2행부터 데이터
  - A열: 팀명
  - B열: 항목
  - C열: 건수
  - D열: 비고
- '요약' 시트: 결과를 여기에 작성

## 처리 순서
1. C열이 비었거나 0인 행은 제외한다
2. A열+B열 값이 같은 행은 첫 번째만 남긴다
3. A열(팀명) 기준으로 C열(건수)을 합산한다
4. 합계가 큰 순서로 정렬한다

## 결과
- '요약' 시트의 기존 내용을 지우고 새로 작성
- A1: '팀명', B1: '건수합계' (굵게)
- A2부터 데이터, 숫자는 천 단위 쉼표
- 완료되면 "취합 완료: ○개 팀, ○건" 알림창 표시

## 실행 방법
- 시트 상단 메뉴에 '실적 취합' 메뉴를 추가하고, 클릭하면 실행되게 해줘

## 예외 처리
- '원본' 시트가 없으면 안내 메시지를 띄우고 중단
- 처리할 데이터가 0건이면 안내 메시지 표시

## 요청
1. 전체 코드를 한 덩어리로 보여줘 (부분 수정이 아니라 통째로)
2. 코드에 한국어 주석을 달아줘
3. 시트에 붙여넣고 실행하는 방법을 1번부터 순서대로 알려줘
4. 내가 적지 않은 규칙을 임의로 만들지 마. 애매하면 먼저 물어봐줘.
\`\`\`

### 이 프롬프트가 좋은 이유

| 요소 | 어디에 있나 | 없으면 생기는 일 |
|------|-----------|---------------|
| 역할 | "Apps Script 전문가야" | 일반적인 설명만 옴 |
| 수준 | "코딩을 모르니" | 개발자용 설명이 옴 |
| 데이터 구조 | 시트 이름·열 구성 | "어느 열인가요?" 되물음 |
| 처리 순서 | 번호 목록 | 순서가 뒤바뀜 |
| 결과 위치 | '요약' 시트 A1 | 엉뚱한 곳에 씀 |
| 실행 방법 | 메뉴 추가 | 편집기에서만 돌아감 |
| 예외 | 시트 없음·0건 | 오류 화면이 그대로 뜸 |
| **날조 금지** | "임의로 만들지 마" | 없는 규칙을 지어냄 |

> 이 여덟 가지는 [프롬프트 학습](/prompt-eval) 에서 배운 **역할·맥락·지시·형식** 그대로입니다.

### 산출물 확인

- [ ] 시트 탭 이름을 실제로 '원본', '요약' 으로 바꿨다
- [ ] 열 구성을 A열부터 문자로 적었다
- [ ] 처리 순서가 번호로, 컴퓨터가 할 수 있는 말로 적혔다
- [ ] 결과가 어느 시트 어디에 들어갈지 적혀 있다
- [ ] 프롬프트를 복사할 수 있게 한 덩어리로 만들어 뒀다

> 점심 식사 후 4교시에 이 프롬프트를 **그대로 붙여넣기만** 하면 됩니다.`,
      contentEn: `### This session

Design the tool's inputs, button, steps, and result screen, then write the requirement spec for the AI. **Deliverables: design sheet and prompt.**

### A tool has four parts

Input (where data arrives), button (what starts it), processing (the ordered steps), result (what is left where).

### Step 1 — Fix the sheet structure

Sheet names, column letters and titles, first data row, and where results go. Rename your tabs now.

### Step 2 — Rewrite the steps in machine-doable language

"Tidy it up" becomes "sort ascending by column A". "No duplicates" becomes "keep only the first row where A+B match".

### Step 3 — Write the design sheet

Tool name, input sheet and columns, how it runs, ordered steps, result sheet and format, completion message, exception handling.

### Step 4 — Turn the design into a prompt

Role, your skill level, sheet structure, numbered steps, result format, run method, exceptions, and an explicit instruction not to invent rules.

### Checklist

Tabs renamed, columns listed by letter, steps numbered and concrete, result location specified, prompt ready to paste.`,
    },
  ],
};

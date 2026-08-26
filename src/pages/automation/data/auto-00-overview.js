export default {
  id: 'auto-overview',
  icon: 'fa-map',
  title: '과정 개요 · 시간표',
  titleEn: 'Overview & Schedule',
  sections: [
    {
      title: '이 과정은 이렇게 진행됩니다',
      titleEn: 'How This Course Runs',
      content: `**바이브코딩 기반 행정업무 자동화 도구 제작** — 하루 8시간, 강사 정동엽.

코딩을 배우는 과정이 **아닙니다.** 내가 매주 반복하는 업무 하나를 골라, AI에게 말로 설명해서 **버튼 하나로 도는 도구**를 만들어 퇴근하는 과정입니다.

> 프로그래밍을 몰라도 됩니다. 화면에 나오는 순서를 그대로 따라 하시면 됩니다. 막히면 그 자리에서 손을 드세요.

### 하루 시간표

| 시간 | 교과목명 | 주요 학습 내용 | 산출물 |
|------|---------|--------------|--------|
| 09:00~10:00 | 바이브코딩과 행정업무 자동화 이해 | 자연어로 업무 흐름을 설명하면 AI가 코드·자동화 구조를 생성하는 방식 이해 / 자동화 가능 업무 사례 | — (강의·실습) |
| 10:00~11:00 | 자동화 대상 업무 선정 | 반복·비효율 업무 1개 선정, 입력자료·처리과정·출력결과·검토 기준 정리, 전후 비교 | 자동화 대상 업무 정의서 |
| 11:00~12:00 | 업무흐름 및 화면구성 설계 | 입력값·버튼·처리절차·결과 화면 설계, AI에게 전달할 요구사항 명세서 작성 | 자동화 도구 설계서 및 프롬프트 |
| 12:00~13:00 | *중식* | — | — |
| 13:00~14:00 | 자동화 코드·템플릿 생성 | ChatGPT/Claude로 Apps Script·함수·프롬프트 생성, 실제 시트에 적용 | 1차 자동화 템플릿 |
| 14:00~15:00 | 자동화 도구 구현 및 테스트 | 버튼 실행·자동 분류·요약문 생성 기능 테스트, 오류 수정 프롬프트, 재실행 루틴 | 작동 가능한 자동화 도구 초안 |
| 15:00~16:00 | 보안·오류 대응 및 개선 | 개인정보·보안·저작권·내부자료 입력 제한 기준, 담당자 검토 절차 설계 | 오류 대응 체크리스트 및 보안 유의사항 |
| 16:00~17:00 | 부서 적용계획 작성 ① | 실행계획 작성, 적용 업무·사용 대상·예상 절감시간·확산 가능성 정리 | 자동화 도구 적용계획서 |
| 17:00~18:00 | 부서 적용계획 작성 ② | 경진대회·혁신과제 발전 아이디어, 결과물 공유 및 강사 피드백 | 적용계획서 및 개선사항 |

### 오늘 손에 남는 것 4가지

| # | 산출물 | 어디에 쓰나 |
|---|--------|-----------|
| 1 | 자동화 대상 업무 정의서 | 무엇을 자동화할지 부서에 설명할 때 |
| 2 | 자동화 도구 설계서 + 프롬프트 | 다음에 다른 업무를 자동화할 때 그대로 재사용 |
| 3 | **작동하는 자동화 도구** | 내일부터 실제 업무에 사용 |
| 4 | 오류 대응 체크리스트 + 적용계획서 | 부서 확산·혁신과제 제출 |

### 교육 전 준비

| 항목 | 확인 |
|------|------|
| 구글 계정 | 로그인이 되는지 미리 확인 (개인 계정도 무방) |
| 노트북 | 크롬(Chrome) 브라우저 권장 |
| ChatGPT 또는 Claude | 무료 계정으로도 실습 가능 |
| **내 업무 자료 1건** | 매주 반복하는 업무의 엑셀 파일 하나 — **개인정보는 지우거나 가명으로 바꿔서** |

> **개인정보는 반드시 지우고 오세요.** 이름은 '홍길동/김철수', 연락번호는 '010-0000-0000' 처럼 바꾸면 됩니다. 실습에는 아무 지장이 없습니다.

### 왜 '바이브코딩'인가

말로 설명하면 AI가 코드를 만들어 주는 방식을 바이브코딩이라 부릅니다. 예전에는 이런 도구를 만들려면 개발 부서에 요청하고 몇 달을 기다려야 했습니다. 지금은 **업무를 가장 잘 아는 담당자가 직접** 만듭니다.

실제로 그렇게 하고 있는 공무원이 있습니다. 광진구 류승인 주무관은 현직 공무원 신분으로 12개 이상의 실무 도구를 만들어 공개하고 있습니다. 이 과정 마지막에 그 사례를 함께 봅니다.
→ [참고사이트에서 보기](/reference)`,
      contentEn: `**Building administrative automation tools with vibe coding** — one full day, 8 hours. Instructor: Jeong Dong-yeop.

This is **not** a programming course. You pick one task you repeat every week, describe it to an AI in plain language, and leave with **a tool that runs at the press of a button**.

### Daily schedule

| Time | Module | Content | Deliverable |
|------|--------|---------|-------------|
| 09:00-10:00 | Understanding vibe coding | How describing a workflow in plain language produces code | — |
| 10:00-11:00 | Choosing the task | Pick one repetitive task; map inputs, process, outputs, review criteria | Task definition |
| 11:00-12:00 | Flow and screen design | Inputs, buttons, steps, result screen; write the AI requirement spec | Design and prompt |
| 12:00-13:00 | *Lunch* | — | — |
| 13:00-14:00 | Generating code and templates | Produce Apps Script and functions with ChatGPT/Claude; apply to a real sheet | First template |
| 14:00-15:00 | Building and testing | Button runs, auto-classification, summaries; error fixing and re-run routine | Working draft tool |
| 15:00-16:00 | Security and error handling | Personal data, security, copyright limits; reviewer checkpoints | Checklist |
| 16:00-17:00 | Rollout plan I | Target tasks, users, time saved, spread potential | Rollout plan |
| 17:00-18:00 | Rollout plan II | Innovation-contest ideas, sharing and feedback | Final plan |

### What you take home

A task definition, a reusable design and prompt, **a working tool**, and a rollout plan.

### Before you come

A Google account, a laptop (Chrome recommended), a ChatGPT or Claude account, and **one real work file with personal data removed**.`,
    },
  ],
};

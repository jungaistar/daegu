import{C as t,l as s,L as a}from"./index-DIP_8KfN.js";import{G as i}from"./GuidePage-C-LQ2ND2.js";/* empty css                 */import"./SEOHead-7z90fPzh.js";import"./index-Dncl8DyO.js";import"./index-D2ZcSCbX.js";const l={id:"auto-overview",icon:"fa-map",title:"과정 개요 · 시간표",titleEn:"Overview & Schedule",sections:[{title:"이 과정은 이렇게 진행됩니다",titleEn:"How This Course Runs",content:`**바이브코딩 기반 행정업무 자동화 도구 제작** — 하루 8시간, 강사 정동엽.

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

### 화면 그림 따라하기 (혼자서도 됩니다)

강의를 놓쳤거나 집에서 다시 해보실 때 씁니다. **화면 그림 위의 파란 번호를 그대로 짚어가며** 진행하고, 단계마다 체크하면 어디까지 했는지 저장됩니다.

| 따라하기 | 무엇을 | 걸리는 시간 |
|---------|-------|-----------|
| [구글 시트 자동화 첫 실행](/setup/apps-script) | 시트 만들기 → 코드 붙여넣기 → 권한 승인 → 결과 확인 (7단계) | 약 10분 |
| [Claude에 공공데이터 연결하기](/setup/mcp) | 앱 설치 → 커넥터 등록 → 첫 질문 (7단계) | 약 15분 |

> 두 가지 모두 **설치할 프로그램이 없고 비용이 들지 않습니다.** 막히는 지점마다 "이 화면이 안 나오면" 안내를 붙여 두었습니다.

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
→ [참고사이트에서 보기](/reference)`,contentEn:`**Building administrative automation tools with vibe coding** — one full day, 8 hours. Instructor: Jeong Dong-yeop.

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

A Google account, a laptop (Chrome recommended), a ChatGPT or Claude account, and **one real work file with personal data removed**.`}]},p={title:"따라하기 실습 · 말로 설명해서 도구 만들기",titleEn:"Hands-on — Build a Tool by Describing It",content:`**소요 25분 · 준비물은 구글 계정과 브라우저뿐입니다.**

말로 설명한 업무가 실제로 도는 도구가 되는 과정을 처음부터 끝까지 한 바퀴 돕니다. 코드는 한 줄도 쓰지 않습니다. 아래 그림의 주황 번호와 오른쪽 설명 번호가 같습니다. 화면이 그림과 다르면 그 단계의 「이 화면이 안 나오면」을 보세요.

> **실제 업무 파일로 하지 마세요.** 이 실습은 가짜 데이터로 만든 연습용 시트로만 합니다.

<div class="guide-walk-flow">
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">1</span>연습 시트 만들기</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">2</span>네 문장으로 적기</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">3</span>구조부터 묻기</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">4</span>코드 받기</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">5</span>붙여넣고 실행</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">6</span>권한 허용</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">7</span>결과 확인</span>
</div>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 1</span>
    <span class="setup-step-crumb">구글 시트 · 새로 만들기</span>
  </div>
  <h3 class="setup-step-title">연습용 시트를 만들고 자료를 넣습니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s1-1-sheet-new.svg" alt="주소창에 sheets.new 를 입력해 빈 시트를 열고 연습용 자료를 채운 구글 시트 화면" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>오늘 실습 내내 쓸 연습용 시트를 만듭니다. 메뉴를 찾아 들어갈 필요가 없습니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>브라우저 <b>주소창</b>에 <code>sheets.new</code> 를 입력하고 Enter — 빈 구글 시트가 바로 열립니다. 검색창이 아니라 주소창입니다.</div></li>
        <li><span class="setup-action-no">2</span><div>그림과 같이 1행에 <b>접수번호 · 부서 · 항목 · 금액</b> 을 넣고, 2행부터 자료 세 줄을 넣습니다. 값은 아무거나 좋습니다.</div></li>
        <li><span class="setup-action-no">3</span><div>아래쪽 시트 탭 이름을 두 번 눌러 <b>신청접수</b> 로 바꿉니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>검색 결과가 나와요</b><span>주소창이 아니라 검색창에 넣은 것입니다. 브라우저 맨 위 칸에 다시 입력하세요.</span></li>
            <li><b>로그인하라고 나와요</b><span>구글 계정으로 로그인하면 됩니다. 개인 계정도 됩니다.</span></li>
            <li><b>저장 버튼이 안 보여요</b><span>구글 시트는 저장 버튼이 없습니다. 입력하는 즉시 저장됩니다.</span></li>
          </ul>
        </div>
      </div>
      <div class="setup-note setup-note-tip">
        <div class="setup-note-title">알아 두면 좋은 것</div>
        <div class="setup-note-body">탭 이름을 정확히 <code>신청접수</code> 로 맞추는 것이 중요합니다. 뒤에서 AI 에게 이 이름을 그대로 알려 주기 때문에, 한 글자만 달라도 도구가 시트를 못 찾습니다.</div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 2</span>
    <span class="setup-step-crumb">준비 · 업무 흐름 정리</span>
  </div>
  <h3 class="setup-step-title">업무 흐름을 네 문장으로 적습니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s1-2-four-lines.svg" alt="들어오는 것·하는 일·나오는 것·사람이 볼 것 네 칸을 채운 메모 화면" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>오늘 하루 전체에서 가장 중요한 단계입니다. 네 칸을 종이나 메모장에 채웁니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div><b>들어오는 것</b> — 무엇이 입력으로 들어오나. 시트 이름과 열 이름까지 적습니다.</div></li>
        <li><span class="setup-action-no">2</span><div><b>하는 일</b> — 그걸로 무엇을 하나. 한 문장으로 적습니다.</div></li>
        <li><span class="setup-action-no">3</span><div><b>나오는 것</b> — 결과가 어디에 어떤 모양으로 나오나.</div></li>
        <li><span class="setup-action-no">4</span><div><b>사람이 볼 것</b> — 담당자가 무엇을 확인해야 하나.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>한 칸이 안 채워져요</b><span>그 칸이 바로 아직 안 정해진 규칙입니다. 지금 정하세요. 비워 두면 AI 가 제 마음대로 정합니다.</span></li>
            <li><b>너무 당연해 보여요</b><span>당연한 것을 적는 단계가 맞습니다. AI 는 내 부서 사정을 하나도 모릅니다.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 3</span>
    <span class="setup-step-crumb">AI 도구 · 첫 대화</span>
  </div>
  <h3 class="setup-step-title">코드 말고 「처리 순서」부터 물어봅니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s1-3-ask-structure.svg" alt="코드 대신 처리 순서를 번호 목록으로 먼저 받아 본 AI 대화 화면" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>AI 가 내 업무를 제대로 이해했는지 먼저 확인합니다. 여기서 잡으면 한 문장으로 고칩니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>ChatGPT · Claude · Gemini 중 아무거나 하나를 엽니다. 어느 것이든 됩니다.</div></li>
        <li><span class="setup-action-no">2</span><div>앞 단계에서 적은 <b>네 문장</b>을 그대로 붙여넣습니다.</div></li>
        <li><span class="setup-action-no">3</span><div>맨 끝에 <b>아직 코드는 쓰지 마. 이해한 처리 순서를 번호 목록으로 먼저 알려 줘.</b> 를 반드시 붙입니다.</div></li>
        <li><span class="setup-action-no">4</span><div>AI 가 되물으면 그 질문을 메모해 둡니다 — 내가 아직 안 정한 규칙입니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>코드가 바로 나와요</b><span>"코드 말고 처리 순서만 번호로 알려 줘" 라고 다시 시키세요.</span></li>
            <li><b>순서가 내 업무와 달라요</b><span>지금이 고칠 때입니다. 다른 부분만 짚어 "3번은 이렇게 해야 해" 라고 알려 주세요.</span></li>
            <li><b>되물음이 하나도 없어요</b><span>내 설명이 충분했거나, AI 가 제 마음대로 정한 것입니다. "확인이 필요한 걸 질문해 줘" 라고 한 번 더 물어보세요.</span></li>
          </ul>
        </div>
      </div>
      <div class="setup-note setup-note-tip">
        <div class="setup-note-title">알아 두면 좋은 것</div>
        <div class="setup-note-body">코드를 받은 뒤에 잘못을 발견하면 처음부터 다시 해야 합니다. 순서 단계에서 잡으면 한 문장이면 끝납니다.</div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 4</span>
    <span class="setup-step-crumb">AI 도구 · 코드 받기</span>
  </div>
  <h3 class="setup-step-title">되물음에 답하고 완성된 코드를 받습니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s1-4-get-code.svg" alt="되물음에 번호로 답한 뒤 완성된 Apps Script 코드를 받은 화면" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>붙여넣고 바로 도는 코드 한 덩어리를 받습니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>앞 단계의 되물음에 <b>1번 — … / 2번 — …</b> 처럼 번호로 짧게 답합니다.</div></li>
        <li><span class="setup-action-no">2</span><div>그 아래에 조건 세 줄을 붙입니다 — <b>붙여넣고 바로 실행되는 완성 코드로</b>, <b>각 줄 위에 한글 주석</b>, <b>함수 이름은 ○○○</b>.</div></li>
        <li><span class="setup-action-no">3</span><div>코드가 오면 <b>function 이름</b>이 내가 시킨 이름과 같은지 먼저 봅니다.</div></li>
        <li><span class="setup-action-no">4</span><div>주석이 안 붙어 있으면 "각 줄에 한글 주석 붙여서 다시 줘" 라고 합니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>코드가 두 덩어리로 나뉘어 왔어요</b><span>"하나로 합쳐서 전체 코드를 다시 줘" 라고 하세요. 조각은 붙일 자리를 찾기 어렵습니다.</span></li>
            <li><b>설명이 너무 길어요</b><span>설명은 안 읽어도 됩니다. <code>function</code> 으로 시작하는 코드 덩어리만 복사하면 됩니다.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 5</span>
    <span class="setup-step-crumb">Apps Script · 붙여넣기와 실행</span>
  </div>
  <h3 class="setup-step-title">편집기에 붙여넣고 저장한 뒤 실행합니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s1-5-paste-run.svg" alt="Apps Script 편집기에 코드를 붙여넣고 함수를 고른 뒤 실행하는 화면" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>받은 코드를 시트에 붙여 실제로 돌립니다. 여기서부터는 클릭만 합니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>시트 상단 <b>확장 프로그램 → Apps Script</b> 를 누릅니다. 새 탭이 열립니다.</div></li>
        <li><span class="setup-action-no">2</span><div>편집기에 원래 있던 내용을 <b>모두 지우고</b> 받은 코드를 통째로 붙여넣습니다.</div></li>
        <li><span class="setup-action-no">3</span><div><b>저장</b>(디스크 모양)을 먼저 누릅니다. 저장하지 않으면 이전 코드가 돕니다.</div></li>
        <li><span class="setup-action-no">4</span><div>함수 이름 칸이 <b>내 함수 이름</b>인지 확인합니다.</div></li>
        <li><span class="setup-action-no">5</span><div><b>▶ 실행</b> 을 누릅니다. 처음 한 번은 다음 단계의 권한 창이 뜹니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>확장 프로그램 메뉴가 없어요</b><span>구글 시트가 아니라 엑셀 파일을 연 것입니다. <code>sheets.new</code> 로 다시 시작하세요.</span></li>
            <li><b>함수 이름 칸이 비어 있어요</b><span>저장을 안 한 것입니다. 저장을 누르면 목록에 나타납니다.</span></li>
            <li><b>빨간 줄이 나와요</b><span>정상입니다. 5교시에서 오류 대응을 배웁니다. 지금은 그 문장을 복사해 AI 에게 그대로 붙여넣으세요.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 6</span>
    <span class="setup-step-crumb">구글 계정 · 권한 승인</span>
  </div>
  <h3 class="setup-step-title">권한 요청 창에서 「고급 → 허용」을 누릅니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s1-6-permission.svg" alt="구글 권한 승인 창 두 장과 눌러야 할 고급·허용 버튼" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>가장 많이 막히는 자리입니다. 창이 무섭게 보여도 정상입니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div><b>이 앱은 Google에서 확인하지 않았습니다</b> 창이 뜨면 <b>고급</b> 을 누릅니다.</div></li>
        <li><span class="setup-action-no">2</span><div>아래에 나타나는 <b>(프로젝트 이름)(으)로 이동</b> 을 누릅니다.</div></li>
        <li><span class="setup-action-no">3</span><div>다음 창에서 내 계정을 고르고 <b>허용</b> 을 누릅니다.</div></li>
        <li><span class="setup-action-no">4</span><div>승인은 <b>처음 한 번</b>만 하면 됩니다. 다음부터는 바로 실행됩니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>고급이 안 보여요</b><span>창 왼쪽 아래를 보세요. 작은 글씨로 있습니다.</span></li>
            <li><b>무서워서 못 누르겠어요</b><span>이 스크립트는 내 구글 계정 안에서만 돕니다. 시트 자료가 외부로 나가지 않습니다.</span></li>
            <li><b>안전한 페이지로 돌아가기를 눌렀어요</b><span>실행을 다시 누르면 같은 창이 또 뜹니다. 이번에는 고급을 누르세요.</span></li>
          </ul>
        </div>
      </div>
      <div class="setup-note setup-note-tip">
        <div class="setup-note-title">알아 두면 좋은 것</div>
        <div class="setup-note-body">구글은 "내가 만든 스크립트가 내 시트를 건드려도 되는지" 를 매번 묻습니다. 내가 방금 만든 것이므로 허용하는 것이 맞습니다.</div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 7</span>
    <span class="setup-step-crumb">구글 시트 · 결과 확인</span>
  </div>
  <h3 class="setup-step-title">새로 생긴 시트에서 결과를 확인합니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s1-7-result.svg" alt="부서별집계 시트가 새로 생기고 결과가 채워진 화면" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>도구가 제대로 돌았는지 눈으로 대조합니다. 자동화가 처음일수록 이 대조를 꼭 합니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>시트 탭으로 돌아가 <b>새 시트 탭</b>이 생겼는지 봅니다.</div></li>
        <li><span class="setup-action-no">2</span><div>결과 표의 숫자를 원본과 <b>손으로 한 번 대조</b>합니다.</div></li>
        <li><span class="setup-action-no">3</span><div>맞으면 끝입니다. 안 맞으면 어디가 다른지 적어 AI 에게 그대로 알려 줍니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>새 시트가 안 생겼어요</b><span>실행 로그에 빨간 줄이 있는지 보세요. 있으면 그 문장을 통째로 AI 에게 붙여넣습니다.</span></li>
            <li><b>숫자가 안 맞아요</b><span>"합계가 12000 이어야 하는데 8400 이 나왔어. 원인을 찾아 코드를 고쳐 줘" 처럼 숫자를 넣어 말합니다.</span></li>
            <li><b>원본이 바뀌었어요</b><span>바로 쓰지 말고 "원본은 고치지 말고 결과만 새 시트에 쓰도록 고쳐 줘" 라고 다시 시키세요.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

### 여기까지 하면

- 말로 설명한 업무가 도구가 되는 일곱 단계를 한 번 통과했습니다.
- 오늘 남은 시간에는 이 일곱 단계를 **내 실제 업무로** 다시 한 바퀴 돕니다.
- 막히면 이 페이지의 그 단계로 돌아와 그림과 화면을 맞춰 보세요.
`,contentEn:`**25 minutes. All you need is a Google account and a browser.**

You will walk the full path from describing a task in plain words to a tool that actually runs. You will not write a single line of code. The orange numbers on each screenshot match the numbered steps beside it.

> **Do not use real work files.** This practice uses a throwaway sheet with fake data only.

<div class="guide-walk-flow">
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">1</span>Create a practice sheet</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">2</span>Write four sentences</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">3</span>Ask for the plan first</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">4</span>Get the code</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">5</span>Paste and run</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">6</span>Grant permission</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">7</span>Check the result</span>
</div>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 1</span>
    <span class="setup-step-crumb">Google Sheets · New</span>
  </div>
  <h3 class="setup-step-title">Create a practice sheet and fill in sample data</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s1-1-sheet-new.svg" alt="A new Google Sheet opened through sheets.new and filled with practice data" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>Create the throwaway sheet you will use for the rest of this practice.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>Type <code>sheets.new</code> in the browser <b>address bar</b> and press Enter. A blank sheet opens immediately.</div></li>
        <li><span class="setup-action-no">2</span><div>Put <b>ID · Department · Item · Amount</b> in row 1 and three rows of any sample values below it.</div></li>
        <li><span class="setup-action-no">3</span><div>Rename the sheet tab at the bottom to <b>신청접수</b> (Applications).</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>I get search results</b><span>You typed it into the search box. Use the address bar at the very top.</span></li>
            <li><b>It asks me to sign in</b><span>Sign in with any Google account, personal accounts work fine.</span></li>
          </ul>
        </div>
      </div>
      <div class="setup-note setup-note-tip">
        <div class="setup-note-title">Worth knowing</div>
        <div class="setup-note-body">The tab name must match exactly. You will hand this name to the AI later, and one different character means the tool cannot find the sheet.</div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 2</span>
    <span class="setup-step-crumb">Prepare · Describe the flow</span>
  </div>
  <h3 class="setup-step-title">Write the task as four sentences</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s1-2-four-lines.svg" alt="A note with four boxes filled in: input, processing, output, human check" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>This is the most important step of the whole day. Fill four boxes on paper or in a notepad.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div><b>Input</b> — what comes in. Name the sheet and the columns.</div></li>
        <li><span class="setup-action-no">2</span><div><b>Processing</b> — what is done with it, in one sentence.</div></li>
        <li><span class="setup-action-no">3</span><div><b>Output</b> — where the result goes and in what shape.</div></li>
        <li><span class="setup-action-no">4</span><div><b>Human check</b> — what the officer must verify afterwards.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>One box stays empty</b><span>That empty box is a rule you have not decided yet. Decide it now, or the AI will decide for you.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 3</span>
    <span class="setup-step-crumb">AI tool · First prompt</span>
  </div>
  <h3 class="setup-step-title">Ask for the plan, not the code</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s1-3-ask-structure.svg" alt="AI chat returning a numbered processing plan instead of code" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>Confirm the AI understood your task before any code exists. A mistake caught here costs one sentence.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>Open ChatGPT, Claude, or Gemini — any one of them works.</div></li>
        <li><span class="setup-action-no">2</span><div>Paste the <b>four sentences</b> you just wrote.</div></li>
        <li><span class="setup-action-no">3</span><div>End with <b>Do not write code yet. First list the processing steps you understood, as a numbered list.</b></div></li>
        <li><span class="setup-action-no">4</span><div>Write down any question the AI asks back — each one is a rule you have not decided.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>It returns code anyway</b><span>Say "No code. Only the numbered processing steps."</span></li>
            <li><b>The steps do not match my task</b><span>Correct only the wrong item: "Step 3 should be …".</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 4</span>
    <span class="setup-step-crumb">AI tool · Get the code</span>
  </div>
  <h3 class="setup-step-title">Answer the questions and receive finished code</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s1-4-get-code.svg" alt="AI chat returning one complete Apps Script after the questions were answered" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>Receive one block of code that runs as soon as you paste it.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>Answer the questions by number: <b>1 — … / 2 — …</b>.</div></li>
        <li><span class="setup-action-no">2</span><div>Add three conditions: <b>complete code that runs as pasted</b>, <b>a Korean comment above each line</b>, <b>name the function ○○○</b>.</div></li>
        <li><span class="setup-action-no">3</span><div>When the code arrives, check the <b>function name</b> matches what you asked for.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>The code came in two pieces</b><span>Ask for "one complete code block, merged".</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 5</span>
    <span class="setup-step-crumb">Apps Script · Paste and run</span>
  </div>
  <h3 class="setup-step-title">Paste the code, save, then run</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s1-5-paste-run.svg" alt="Apps Script editor with the code pasted, the function selected, and Run highlighted" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>Attach the code to your sheet and actually run it. From here on you only click.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>In the sheet choose <b>Extensions → Apps Script</b>. A new tab opens.</div></li>
        <li><span class="setup-action-no">2</span><div><b>Delete everything</b> already in the editor and paste the code you received.</div></li>
        <li><span class="setup-action-no">3</span><div>Press <b>Save</b> first. Without saving, the old code runs.</div></li>
        <li><span class="setup-action-no">4</span><div>Check the function selector shows <b>your function name</b>.</div></li>
        <li><span class="setup-action-no">5</span><div>Press <b>Run</b>. The first time only, the permission dialog in the next step appears.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>There is no Extensions menu</b><span>You opened an Excel file, not a Google Sheet. Start again from <code>sheets.new</code>.</span></li>
            <li><b>A red line appears</b><span>That is normal. Copy the whole message and paste it to the AI.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 6</span>
    <span class="setup-step-crumb">Google account · Authorization</span>
  </div>
  <h3 class="setup-step-title">Choose Advanced, then Allow</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s1-6-permission.svg" alt="The two Google authorization dialogs with Advanced and Allow highlighted" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>This is where most people stop. The scary wording is normal.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>On <b>Google hasn’t verified this app</b>, click <b>Advanced</b>.</div></li>
        <li><span class="setup-action-no">2</span><div>Click <b>Go to (project name)</b> that appears below.</div></li>
        <li><span class="setup-action-no">3</span><div>Pick your account and click <b>Allow</b>.</div></li>
        <li><span class="setup-action-no">4</span><div>You only authorize <b>once</b>. Later runs start immediately.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>I cannot find Advanced</b><span>It is small text at the lower left of the dialog.</span></li>
            <li><b>It looks unsafe</b><span>The script runs only inside your own Google account. No sheet data leaves it.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 7</span>
    <span class="setup-step-crumb">Google Sheets · Verify</span>
  </div>
  <h3 class="setup-step-title">Check the result in the new sheet</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s1-7-result.svg" alt="A new summary sheet created by the tool with results filled in" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>Verify by eye that the tool worked. Always do this while automation is new to you.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>Go back to the sheet and look for the <b>new tab</b>.</div></li>
        <li><span class="setup-action-no">2</span><div>Compare the result numbers against the original <b>by hand, once</b>.</div></li>
        <li><span class="setup-action-no">3</span><div>If they match you are done. If not, tell the AI exactly which number is wrong.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>No new sheet appeared</b><span>Check the execution log for a red line and paste it to the AI as-is.</span></li>
            <li><b>The original changed</b><span>Ask again: "Do not modify the source sheet, write results to a new sheet only."</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

### When you finish

- You have completed all seven steps of turning a spoken description into a working tool.
- For the rest of today you will repeat these seven steps with **your own real task**.
- If you get stuck, come back to the matching step on this page.
`},o={id:"auto-01",icon:"fa-lightbulb",title:"1교시 09:00~10:00 · 바이브코딩 이해",titleEn:"Session 1 — Understanding Vibe Coding",sections:[{title:"말로 설명하면 도구가 만들어집니다",titleEn:"Describe It, and the Tool Appears",content:`### 이 시간에 하는 일

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

> ### 화면 그림을 보며 따라 하시려면
> **[▶ 구글 시트 자동화 첫 실행 — 따라하기](/setup/apps-script)** 로 가세요.
> 시트 만들기부터 결과 확인까지 **7단계**를 화면 그림과 함께 안내합니다. 가장 많이 막히는 **구글 권한 승인 화면**을 특히 자세히 다룹니다. 단계마다 체크하면 진도가 저장됩니다.

아래는 요약입니다. **아무것도 설치하지 않습니다.**

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
→ [류승인 주무관 사례 보기](/reference)`,contentEn:`### This session

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

> You wrote no code. Today you learn to get that code from an AI by describing what you want.`},p]},d={title:"따라하기 실습 · 자동화 대상 업무 정의서 채우기",titleEn:"Hands-on — Fill In the Task Definition",content:`**소요 30분 · 산출물은 업무 정의서 한 장입니다.**

오늘 무엇을 만들지 여기서 정합니다. 후보를 적고, 점수로 하나만 고르고, 그 업무를 AI 가 알아들을 수 있는 문장으로 바꿉니다. 여기서 고른 업무 하나를 하루 종일 끌고 갑니다.

> **두 개를 같이 고르지 마세요.** 한 개를 끝까지 완성한 사람이 두 개를 걸쳐 놓은 사람보다 훨씬 멀리 갑니다.

<div class="guide-walk-flow">
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">1</span>후보 세 개 적기</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">2</span>점수로 하나 고르기</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">3</span>정의서 채우기</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">4</span>개인정보 판정</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">5</span>AI 로 검토</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">6</span>확정본 저장</span>
</div>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 1</span>
    <span class="setup-step-crumb">준비 · 후보 고르기</span>
  </div>
  <h3 class="setup-step-title">반복 업무 세 개를 적습니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s2-1-candidates.svg" alt="자동화 후보 업무 세 개를 자주 하는 정도와 소요 시간으로 비교한 표" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>머릿속에 있는 반복 업무를 밖으로 꺼냅니다. 딱 세 개만 적습니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>주마다 · 달마다 반복하는 업무를 <b>세 개</b>만 적습니다. 많이 적으면 오히려 못 고릅니다.</div></li>
        <li><span class="setup-action-no">2</span><div>각 업무마다 <b>얼마나 자주</b> 하는지 적습니다 — 주 1회, 월 1회처럼.</div></li>
        <li><span class="setup-action-no">3</span><div><b>한 번에 걸리는 시간</b>을 분 단위로 적습니다. 대충이어도 좋으니 숫자로 적습니다.</div></li>
        <li><span class="setup-action-no">4</span><div><b>규칙이 있나</b> 칸에 "있음" 또는 "매번 다름" 을 적습니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>떠오르는 게 없어요</b><span>지난주 달력을 펴 보세요. 같은 요일에 같은 일이 반복되면 그것이 후보입니다.</span></li>
            <li><b>전부 매번 달라요</b><span>자료가 다른 것과 판단이 다른 것은 다릅니다. 자료만 바뀌고 절차가 같으면 "있음" 입니다.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 2</span>
    <span class="setup-step-crumb">준비 · 점수로 고르기</span>
  </div>
  <h3 class="setup-step-title">점수를 매겨 하나만 남깁니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s2-2-score.svg" alt="후보 업무에 반복성·규칙성·시간절약 점수를 매겨 하나를 고른 표" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>감이 아니라 점수로 고릅니다. 순위만 갈리면 충분합니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div><b>반복성 · 규칙성 · 시간절약</b> 세 항목에 각각 1~5점을 줍니다.</div></li>
        <li><span class="setup-action-no">2</span><div><b>개인정보</b> 칸에 "없음 / 가명처리 가능 / 있음" 중 하나를 적습니다.</div></li>
        <li><span class="setup-action-no">3</span><div>개인정보가 <b>있음</b>인 업무는 점수와 관계없이 오늘 대상에서 뺍니다.</div></li>
        <li><span class="setup-action-no">4</span><div>남은 것 중 합계가 가장 높은 <b>한 줄</b>이 오늘 만들 도구입니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>점수가 같아요</b><span>시간절약 점수가 높은 쪽을 고르세요. 성과가 눈에 보이는 쪽이 유리합니다.</span></li>
            <li><b>고른 게 너무 쉬워 보여요</b><span>첫 도구는 쉬운 것이 맞습니다. 오늘은 방법을 익히는 날입니다.</span></li>
          </ul>
        </div>
      </div>
      <div class="setup-note setup-note-tip">
        <div class="setup-note-title">알아 두면 좋은 것</div>
        <div class="setup-note-body">규칙성 점수가 1~2점인 업무는 아무리 자주 해도 자동화가 안 됩니다. 매번 판단이 달라지는 일은 사람이 해야 합니다.</div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 3</span>
    <span class="setup-step-crumb">정의서 · 여섯 칸</span>
  </div>
  <h3 class="setup-step-title">고른 업무를 정의서 칸에 옮깁니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s2-3-definition.svg" alt="고른 업무의 정의서 여섯 칸을 채운 화면" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>고른 업무를 AI 가 알아들을 수 있는 문장으로 바꿉니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div><b>업무 이름</b> — 부서 사람 누구나 알아듣는 말로 적습니다. 결재 문서에 그대로 들어갑니다.</div></li>
        <li><span class="setup-action-no">2</span><div><b>들어오는 것 · 하는 일 · 나오는 것 · 사람이 볼 것</b> 네 칸을 1교시와 같은 방식으로 채웁니다.</div></li>
        <li><span class="setup-action-no">3</span><div><b>지금 걸리는 시간</b>을 숫자로 남깁니다 — 7교시 기대효과가 이 숫자에서 나옵니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>하는 일이 여러 개예요</b><span>가장 앞의 한 가지만 남기세요. 나머지는 도구가 돌기 시작한 뒤에 붙입니다.</span></li>
            <li><b>나오는 것을 모르겠어요</b><span>지금 손으로 할 때 무엇이 남는지 보세요. 그 모양 그대로 적으면 됩니다.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 4</span>
    <span class="setup-step-crumb">보안 · 세 관문</span>
  </div>
  <h3 class="setup-step-title">개인정보 세 관문을 통과시킵니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s2-4-privacy-gate.svg" alt="고유식별정보·개인정보·대외비 세 관문 판정 체크리스트" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>이 자료를 외부 AI 에 올려도 되는지 지금 판정합니다. 나중에 하면 늦습니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div><b>주민등록번호 · 외국인등록번호 · 운전면허번호</b>가 있는지 봅니다. 하나라도 있으면 이 업무는 오늘 대상에서 뺍니다.</div></li>
        <li><span class="setup-action-no">2</span><div><b>이름 · 연락처 · 주소</b>가 있는지 봅니다. 있으면 가명처리 후 씁니다.</div></li>
        <li><span class="setup-action-no">3</span><div><b>대외비 · 미공개 정책 자료</b>가 있는지 봅니다. 있으면 부서장 승인을 받습니다.</div></li>
        <li><span class="setup-action-no">4</span><div>판정 결과를 정의서 아래에 <b>한 줄</b>로 적어 둡니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>가명처리가 뭔지 모르겠어요</b><span>이름을 A · B · C 로 바꾸고 연락처 앞자리를 지우는 것입니다. 6교시에서 직접 해 봅니다.</span></li>
            <li><b>애매해요</b><span>애매하면 뺍니다. 오늘은 연습이고, 대상 업무는 얼마든지 있습니다.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 5</span>
    <span class="setup-step-crumb">AI 도구 · 정의서 검토</span>
  </div>
  <h3 class="setup-step-title">AI 에게 빠진 조건을 찾아 달라고 합니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s2-5-review.svg" alt="AI 가 업무 정의서를 읽고 빠진 조건을 질문으로 되돌려 준 화면" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>내가 안 정한 규칙을 지금 찾아냅니다. 4교시에서 찾으면 다시 만들어야 합니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>정의서를 그대로 붙여넣고 <b>아직 코드는 만들지 마</b> 를 붙입니다.</div></li>
        <li><span class="setup-action-no">2</span><div><b>이 설명만 보고 도구를 만들 수 있겠어? 빠진 조건을 질문으로만 알려 줘.</b> 라고 합니다.</div></li>
        <li><span class="setup-action-no">3</span><div>돌아온 <b>질문 목록</b>을 정의서 뒤에 그대로 붙입니다.</div></li>
        <li><span class="setup-action-no">4</span><div>질문마다 답을 정합니다. 답이 안 떠오르면 지금 부서에 물어봅니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>질문이 하나도 안 와요</b><span>"확인이 필요한 걸 다섯 개까지 질문해 줘" 라고 개수를 지정해 다시 물어보세요.</span></li>
            <li><b>질문이 너무 많아요</b><span>오늘 만들 범위를 벗어난 질문은 "이번에는 안 함" 이라고 적고 넘어갑니다.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 6</span>
    <span class="setup-step-crumb">정의서 · 확정</span>
  </div>
  <h3 class="setup-step-title">답을 옮겨 확정본을 만듭니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s2-6-confirmed.svg" alt="되물음에 답해 규칙까지 확정한 업무 정의서 화면" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>3교시로 가져갈 문서 한 장을 완성합니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>앞 단계의 질문에 대한 답을 <b>규칙 문장</b>으로 옮깁니다. "적당히" 같은 말은 쓰지 않습니다.</div></li>
        <li><span class="setup-action-no">2</span><div><b>개인정보 처리</b> 칸에 어떻게 가릴지 적습니다.</div></li>
        <li><span class="setup-action-no">3</span><div>완성된 정의서를 <b>화면 캡처</b>하거나 메모장에 저장합니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>규칙으로 못 적겠어요</b><span>"~면 ~한다" 형태로 써 보세요. 예를 들어 "이름과 연락처가 같으면 먼저 것만 남긴다".</span></li>
          </ul>
        </div>
      </div>
      <div class="setup-note setup-note-tip">
        <div class="setup-note-title">알아 두면 좋은 것</div>
        <div class="setup-note-body">이 문서 한 장이 오늘 남은 시간 내내 쓰입니다. 3교시 설계서, 4교시 프롬프트, 7교시 계획서가 전부 여기서 나옵니다.</div>
      </div>
    </div>
  </div>
</section>

### 여기까지 하면

- 오늘 만들 업무 하나가 정해졌고, 그 업무가 규칙으로 적혀 있습니다.
- 개인정보를 어떻게 다룰지도 한 줄로 정해졌습니다.
- 이 정의서가 3교시 설계서와 4교시 프롬프트의 재료가 됩니다. 화면 캡처로 남겨 두세요.
`,contentEn:`**30 minutes. The output is a one-page task definition.**

This is where you decide what to build today. List candidates, score them, pick exactly one, and rewrite it in language an AI can act on.

> **Do not pick two.** Finishing one task beats starting two.

<div class="guide-walk-flow">
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">1</span>List three candidates</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">2</span>Score and pick one</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">3</span>Fill the definition</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">4</span>Screen for personal data</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">5</span>Review with AI</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">6</span>Save the final version</span>
</div>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 1</span>
    <span class="setup-step-crumb">Prepare · Candidates</span>
  </div>
  <h3 class="setup-step-title">Write down three repetitive tasks</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s2-1-candidates.svg" alt="A table comparing three automation candidates by frequency and duration" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>Get the repetitive work out of your head. Exactly three.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>List <b>three</b> tasks you repeat weekly or monthly.</div></li>
        <li><span class="setup-action-no">2</span><div>Note <b>how often</b> each one happens.</div></li>
        <li><span class="setup-action-no">3</span><div>Note <b>how long one round takes</b>, in minutes. A rough number is fine.</div></li>
        <li><span class="setup-action-no">4</span><div>Mark whether the task <b>follows a fixed rule</b> or changes every time.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>Nothing comes to mind</b><span>Open last week’s calendar. Anything repeating on the same weekday is a candidate.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 2</span>
    <span class="setup-step-crumb">Prepare · Scoring</span>
  </div>
  <h3 class="setup-step-title">Score them and keep only one</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s2-2-score.svg" alt="A scoring table used to pick one candidate task" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>Choose by score, not by feel. You only need the ranking to separate.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>Give 1–5 points for <b>repetition, rule-clarity, time saved</b>.</div></li>
        <li><span class="setup-action-no">2</span><div>Mark personal data as none, maskable, or present.</div></li>
        <li><span class="setup-action-no">3</span><div>Drop any task with personal data <b>present</b>, whatever its score.</div></li>
        <li><span class="setup-action-no">4</span><div>The highest remaining total is today’s tool.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>Two tasks tie</b><span>Pick the one that saves more time — visible results help.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 3</span>
    <span class="setup-step-crumb">Definition · Six boxes</span>
  </div>
  <h3 class="setup-step-title">Move the chosen task into the definition</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s2-3-definition.svg" alt="A completed six-box task definition" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>Rewrite the chosen task in language an AI can act on.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div><b>Task name</b> — words any colleague would understand. It goes into the approval document verbatim.</div></li>
        <li><span class="setup-action-no">2</span><div>Fill <b>input, processing, output, human check</b> the same way as session 1.</div></li>
        <li><span class="setup-action-no">3</span><div>Record <b>how long it takes today</b> as a number. Session 7 needs it.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>Processing has several parts</b><span>Keep only the first one. Add the rest after the tool runs.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 4</span>
    <span class="setup-step-crumb">Security · Three gates</span>
  </div>
  <h3 class="setup-step-title">Pass the three personal-data gates</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s2-4-privacy-gate.svg" alt="A checklist screening for ID numbers, personal data, and confidential material" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>Decide now whether this data may go to an external AI.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>Check for <b>national ID or licence numbers</b>. If any exist, drop this task today.</div></li>
        <li><span class="setup-action-no">2</span><div>Check for <b>names, phone numbers, addresses</b>. If present, mask them before use.</div></li>
        <li><span class="setup-action-no">3</span><div>Check for <b>confidential policy material</b>. If present, get supervisor approval.</div></li>
        <li><span class="setup-action-no">4</span><div>Write the verdict as <b>one line</b> under the definition.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>I am unsure</b><span>When unsure, drop it. There is no shortage of other tasks.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 5</span>
    <span class="setup-step-crumb">AI tool · Review</span>
  </div>
  <h3 class="setup-step-title">Ask the AI to find the missing conditions</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s2-5-review.svg" alt="AI returning a list of questions about the task definition" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>Surface the rules you have not decided, before any code exists.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>Paste the definition and add <b>do not write code yet</b>.</div></li>
        <li><span class="setup-action-no">2</span><div>Ask: <b>Could you build this from this description alone? Reply only with the questions you still need answered.</b></div></li>
        <li><span class="setup-action-no">3</span><div>Paste the <b>question list</b> under your definition.</div></li>
        <li><span class="setup-action-no">4</span><div>Decide an answer for each. If you cannot, ask your team now.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>No questions come back</b><span>Ask again with a number: "Give me up to five questions."</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 6</span>
    <span class="setup-step-crumb">Definition · Final</span>
  </div>
  <h3 class="setup-step-title">Turn the answers into the final version</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s2-6-confirmed.svg" alt="The task definition completed with decided rules" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>Finish the single page you will carry into session 3.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>Convert each answer into a <b>rule sentence</b>. Avoid words like "appropriately".</div></li>
        <li><span class="setup-action-no">2</span><div>State how personal data will be <b>masked</b>.</div></li>
        <li><span class="setup-action-no">3</span><div>Screenshot or save the finished definition.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>I cannot phrase it as a rule</b><span>Use "if … then …". For example: if name and phone match, keep the earlier row.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

### When you finish

- You have one task chosen and written down as rules, not as a wish.
- You have decided how personal data will be handled.
- This sheet feeds session 3 and session 4. Keep a screenshot.
`},c={id:"auto-02",icon:"fa-crosshairs",title:"2교시 10:00~11:00 · 자동화 대상 업무 선정",titleEn:"Session 2 — Choosing the Task",sections:[{title:"내 업무 중 하나를 고릅니다",titleEn:"Pick One of Your Own Tasks",content:`### 이 시간에 하는 일

| 학습 목표 | 개인 또는 부서 업무 중 반복·비효율 업무 1개를 골라 정의한다 |
|---|---|
| 형태 | 실습 |
| **산출물** | **자동화 대상 업무 정의서** |

> 오늘 하루 종일 이 업무 하나만 붙잡습니다. **욕심내지 마세요.** 작고 명확한 것이 끝까지 갑니다.

### 1단계 · 후보 3개 적기 (5분)

종이나 시트에 **내가 매주 반복하는 일** 3개를 적습니다. 아래 질문에 걸리는 것을 찾으세요.

| 질문 | 예 |
|------|-----|
| 매주·매월 똑같이 반복하는가? | 주간 실적 취합, 월간 집행 현황 |
| 엑셀을 열어 손으로 옮기는가? | 여러 부서 제출 파일 합치기 |
| 규칙이 정해져 있는가? | "A열이 비면 제외", "○○과 것만" |
| 하다가 자주 틀리는가? | 복사·붙여넣기 하다 행이 밀림 |

### 2단계 · 하나만 고르기 (5분)

3개 중 **아래 표에서 점수가 가장 높은 것**을 고릅니다.

| 기준 | 3점 | 2점 | 1점 |
|------|-----|-----|-----|
| 반복 주기 | 매주 이상 | 매월 | 분기 이하 |
| 한 번에 걸리는 시간 | 1시간 이상 | 30분~1시간 | 30분 미만 |
| 규칙 명확성 | 규칙이 딱 정해짐 | 대체로 정해짐 | 그때그때 다름 |
| 개인정보 | 없음 | 가명 처리 가능 | 원본 필수 |

> **개인정보 항목이 1점이면 오늘 대상에서 빼세요.** 다른 후보로 바꿉니다.

### 3단계 · 업무 정의서 작성 (30분)

시트를 새로 하나 열어 아래 표를 그대로 만들고 채웁니다. **이것이 첫 번째 산출물입니다.**

| 항목 | 무엇을 적나 | 작성 예시 |
|------|-----------|----------|
| 업무명 | 한 줄로 | 주간 부서별 실적 취합 |
| 담당 | 부서·직위 | 총무과 주무관 |
| 주기 | 얼마나 자주 | 매주 금요일 |
| 현재 소요시간 | 솔직하게 | 약 90분 |
| **입력자료** | 무엇이 들어오나 | 각 팀 제출 시트 6개 (팀명/항목/건수/비고) |
| **처리과정** | 지금 손으로 하는 순서 | ① 6개 파일 열기 ② 한 시트에 복사 ③ 중복 행 삭제 ④ 팀별 합계 ⑤ 요약표 작성 |
| **출력결과** | 무엇이 나와야 하나 | 팀별 건수 합계표 + 전주 대비 증감 |
| **담당자 검토 기준** | 사람이 꼭 봐야 할 것 | 합계가 원본 총합과 일치하는지, 누락 팀 없는지 |
| 예외 상황 | 가끔 생기는 일 | 팀이 양식을 다르게 제출, 값이 빈 행 |

### 4단계 · 자동화 전/후 비교 (10분)

| 항목 | 자동화 전 | 자동화 후 (예상) |
|------|----------|----------------|
| 소요시간 | 90분 | 5분 (실행 1분 + 검토 4분) |
| 오류 가능성 | 복사 중 행 누락 | 규칙대로 처리, 대신 규칙 자체가 틀리면 전부 틀림 |
| 다른 사람이 할 수 있나 | 인수인계 필요 | 버튼만 누르면 됨 |
| 기대효과 | — | 주 85분 × 4주 = **월 약 5.7시간** |

> **월 절감시간을 꼭 계산해 두세요.** 7교시 적용계획서와 혁신과제 제출에 그대로 씁니다.

### 5단계 · AI에게 검토받기 (10분)

작성한 정의서를 ChatGPT나 Claude에 붙여넣고 아래를 그대로 물어보세요.

\`\`\`text
너는 행정업무 자동화를 돕는 컨설턴트야. 아래는 내가 자동화하려는 업무 정의서야.

(정의서 붙여넣기)

1. 이 업무가 자동화에 적합한지 판단하고 이유를 알려줘.
2. 정의서에서 빠진 정보가 있으면 무엇인지 알려줘.
3. 자동화했을 때 생길 수 있는 문제 3가지를 알려줘.
4. 이 업무를 더 작게 쪼갤 수 있다면 어떻게 쪼갤지 제안해줘.

내가 적지 않은 사실을 지어내지 말고, 모르는 건 물어봐줘.
\`\`\`

### 잘 고른 예 / 잘못 고른 예

| 구분 | 업무 | 판단 |
|------|------|------|
| 좋음 | 매주 6개 팀 제출 시트 합치고 중복 제거 | 반복·규칙 명확·시간 큼 |
| 좋음 | 민원 접수 내용을 유형별로 분류 | 규칙화 가능, 예시로 학습 가능 |
| 좋음 | 명단에서 개인별 안내문 일괄 생성 | 양식 고정, 반복 |
| **나쁨** | 예산 편성 방향 결정 | 판단 업무 — 자동화 대상 아님 |
| **나쁨** | 민원인에게 최종 답변 발송 | 책임이 따르는 결재 행위 |
| **나쁨** | 인사 자료 정리 | 개인정보 원본이 필수 |

### 산출물 확인

- [ ] 업무 정의서 9개 항목이 모두 채워졌다
- [ ] 처리과정이 **번호 순서**로 적혀 있다
- [ ] 담당자 검토 기준이 적혀 있다
- [ ] 월 절감시간이 숫자로 계산되어 있다
- [ ] 개인정보가 없거나 가명 처리 방법이 정해졌다

> 다섯 개 모두 체크되면 3교시로 넘어갑니다. 하나라도 비면 그 항목을 먼저 채우세요. **여기서 흐릿하면 뒤가 전부 흐려집니다.**`,contentEn:`### This session

Pick one repetitive task and define it. **Deliverable: task definition sheet.**

### Step 1 — List three candidates

Anything you repeat weekly, move by hand in Excel, that follows fixed rules, and that you often get wrong.

### Step 2 — Score and choose one

Score each on frequency, time taken, rule clarity, and personal-data exposure. **If personal data scores lowest, drop that candidate today.**

### Step 3 — Write the definition

Task name, owner, frequency, current time, **inputs**, **current manual steps**, **required output**, **reviewer criteria**, exceptions.

### Step 4 — Before/after comparison

Compute the monthly time saved — you will reuse this number in the rollout plan.

### Step 5 — Have the AI review it

Paste the definition and ask whether it suits automation, what is missing, what could go wrong, and how to split it smaller.

### Checklist

All nine fields filled, steps numbered, reviewer criteria written, monthly saving calculated, personal data resolved.`},d]},u={title:"따라하기 실습 · 설계서와 요구사항 명세서 쓰기",titleEn:"Hands-on — Write the Design and Requirements",content:`**소요 35분 · 산출물은 요구사항 명세서 한 장입니다.**

만들기 전에 그림을 그립니다. 도구 형태를 고르고, 화면을 스케치하고, 업무 흐름을 세 토막으로 쪼갠 다음, 그 셋을 명세서 한 장으로 묶습니다. 이 명세서를 4교시에서 그대로 붙여넣습니다.

> **설계 없이 코드부터 시키면** 받은 코드가 내 업무와 다르다는 것을 실행한 뒤에야 알게 됩니다.

<div class="guide-walk-flow">
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">1</span>도구 형태 고르기</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">2</span>화면 스케치</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">3</span>흐름 세 토막</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">4</span>명세서 쓰기</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">5</span>AI 로 점검</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">6</span>설계 확정</span>
</div>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 1</span>
    <span class="setup-step-crumb">설계 · 도구 형태</span>
  </div>
  <h3 class="setup-step-title">네 가지 형태 중 하나를 고릅니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s3-1-pick-shape.svg" alt="시트 버튼·웹 양식·문서 생성·정시 실행 네 가지 도구 형태 카드" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>무엇을 만들지 형태부터 정합니다. 오늘은 하나만 고릅니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div><b>시트 + 버튼</b> — 내 시트 안에서 메뉴 하나로 실행합니다. 오늘 만들 형태입니다.</div></li>
        <li><span class="setup-action-no">2</span><div><b>웹 양식 + 시트</b> — 남이 입력한 내용이 내 시트에 쌓입니다. 신청·접수 업무용입니다.</div></li>
        <li><span class="setup-action-no">3</span><div><b>문서 자동 생성</b> — 명단 한 장에서 안내문을 한꺼번에 뽑습니다.</div></li>
        <li><span class="setup-action-no">4</span><div><b>정해진 시각 실행</b> — 매일 아침 알아서 돕니다. 오늘은 다루지 않습니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>내 업무는 2번 같아요</b><span>그래도 오늘은 1번으로 만드세요. 1번이 도는 것을 본 뒤에 2번으로 바꾸는 것이 훨씬 쉽습니다.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 2</span>
    <span class="setup-step-crumb">설계 · 화면 스케치</span>
  </div>
  <h3 class="setup-step-title">화면을 손그림처럼 그립니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s3-2-sketch.svg" alt="메뉴 버튼과 원본·결과 시트를 배치한 화면 스케치" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>사람이 어디를 누르고 결과가 어디에 나오는지 그림으로 정합니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div><b>사람이 누를 곳</b>을 하나만 그립니다. 둘 이상이면 쓰는 사람이 헷갈립니다.</div></li>
        <li><span class="setup-action-no">2</span><div><b>원본 자료</b>가 어느 시트인지 적고, 그 옆에 "손대지 않는다" 를 적습니다.</div></li>
        <li><span class="setup-action-no">3</span><div><b>결과</b>가 어느 시트에 어떤 모양으로 나오는지 그립니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>그림을 못 그리겠어요</b><span>네모 세 개와 화살표면 충분합니다. 예쁘게 그릴 필요가 없습니다.</span></li>
            <li><b>버튼을 두 개 두고 싶어요</b><span>오늘은 하나로 하세요. 두 번째 버튼은 첫 번째가 돈 뒤에 붙이면 됩니다.</span></li>
          </ul>
        </div>
      </div>
      <div class="setup-note setup-note-tip">
        <div class="setup-note-title">알아 두면 좋은 것</div>
        <div class="setup-note-body">원본을 고치지 않는다는 원칙을 그림에 적어 두면 AI 도 그대로 만듭니다. 잘못 돌아도 원본이 남아 있으면 다시 하면 그만입니다.</div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 3</span>
    <span class="setup-step-crumb">설계 · 흐름 쪼개기</span>
  </div>
  <h3 class="setup-step-title">업무 흐름을 세 토막으로 쪼갭니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s3-3-flow.svg" alt="읽는다·거른다·쓴다 세 토막으로 나눈 업무 흐름 카드" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>어떤 업무든 세 토막이면 표현됩니다. 네 토막으로 늘리지 않습니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div><b>읽는다</b> — 어느 시트의 몇 행부터 읽는지까지 적습니다. "그 시트" 같은 말은 통하지 않습니다.</div></li>
        <li><span class="setup-action-no">2</span><div><b>거른다 · 정리한다</b> — 2교시에서 확정한 규칙을 그대로 옮깁니다.</div></li>
        <li><span class="setup-action-no">3</span><div><b>쓴다</b> — 결과가 어디에 어떤 모양으로 남는지 적습니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>토막이 네 개 이상 나와요</b><span>가운데 것들을 "거른다·정리한다" 로 묶으세요. 세 토막을 유지합니다.</span></li>
            <li><b>2교시 규칙이 기억 안 나요</b><span>2교시 확정 정의서를 다시 여세요. 새 규칙을 여기서 만들지 않습니다.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 4</span>
    <span class="setup-step-crumb">명세서 · 여섯 칸</span>
  </div>
  <h3 class="setup-step-title">요구사항 명세서를 씁니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s3-4-spec.svg" alt="도구 형태·읽는 곳·처리 규칙·쓰는 곳·예외·사람 확인 여섯 칸을 채운 명세서" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>앞의 세 가지를 한 장으로 묶습니다. 4교시에 이 장을 통째로 붙여넣습니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div><b>읽는 곳</b> 칸에 시트 이름과 열 기호(A·B·C)를 정확히 적습니다.</div></li>
        <li><span class="setup-action-no">2</span><div><b>처리 규칙</b> 칸에 세 토막의 가운데를 옮깁니다.</div></li>
        <li><span class="setup-action-no">3</span><div><b>쓰는 곳</b> 칸에 결과 시트 이름과, 이미 있을 때 어떻게 할지를 적습니다.</div></li>
        <li><span class="setup-action-no">4</span><div><b>예외 처리</b> 칸에 빈 칸 · 없는 값을 어떻게 할지 적습니다.</div></li>
        <li><span class="setup-action-no">5</span><div><b>사람 확인</b> 칸에 끝나고 무엇을 보여 줄지 적습니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>열 기호를 모르겠어요</b><span>시트 맨 위의 A · B · C 가 열 기호입니다. 그대로 적으면 됩니다.</span></li>
            <li><b>예외가 안 떠올라요</b><span>빈 칸 · 중복 · 앞뒤 공백 세 가지만 적어도 충분합니다.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 5</span>
    <span class="setup-step-crumb">AI 도구 · 명세 점검</span>
  </div>
  <h3 class="setup-step-title">AI 로 애매한 곳과 빠진 예외를 찾습니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s3-5-spec-review.svg" alt="AI 가 명세서의 애매한 곳과 놓친 예외를 짚어 준 화면" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>5교시 오류를 미리 줄입니다. 여기서 찾은 것 하나가 실행 오류 하나를 없앱니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>명세서를 붙여넣고 <b>아직 코드는 쓰지 마</b> 를 붙입니다.</div></li>
        <li><span class="setup-action-no">2</span><div><b>이 명세서만 보고 만들 때 애매한 곳과, 내가 놓친 예외 상황을 알려 줘.</b> 라고 합니다.</div></li>
        <li><span class="setup-action-no">3</span><div>지적받은 항목을 <b>예외 처리</b> 칸에 더합니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>지적이 너무 많아요</b><span>실제로 일어날 것만 고르세요. "10만 행이 넘으면" 같은 것은 지금 필요 없습니다.</span></li>
          </ul>
        </div>
      </div>
      <div class="setup-note setup-note-tip">
        <div class="setup-note-title">알아 두면 좋은 것</div>
        <div class="setup-note-body">표기가 다른 같은 값, 앞뒤 공백, 빈 자료 — 실제로 오류를 내는 것은 거의 이 셋입니다.</div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 6</span>
    <span class="setup-step-crumb">설계 · 마무리 점검</span>
  </div>
  <h3 class="setup-step-title">다섯 줄로 설계를 점검합니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s3-6-design-check.svg" alt="4교시로 넘어가기 전 다섯 줄 점검 체크리스트" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>한 줄이라도 비면 4교시에서 반드시 되돌아오게 됩니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>시트 이름과 열 기호가 <b>실제 시트와 같은지</b> 봅니다.</div></li>
        <li><span class="setup-action-no">2</span><div>사람이 누르는 곳이 <b>하나뿐인지</b> 봅니다.</div></li>
        <li><span class="setup-action-no">3</span><div><b>원본을 고치지 않는지</b> 봅니다.</div></li>
        <li><span class="setup-action-no">4</span><div><b>빈 칸 · 표기 차이 · 0건</b>일 때 어떻게 할지 적혀 있는지 봅니다.</div></li>
        <li><span class="setup-action-no">5</span><div>끝나고 <b>사람에게 무엇을 보여 줄지</b> 적혀 있는지 봅니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>마지막 줄이 비었어요</b><span>가장 많이 빠지는 줄입니다. "몇 건 처리했다" 는 알림창 한 줄이면 충분합니다.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

### 여기까지 하면

- 만들 도구의 형태와 화면이 정해졌습니다.
- 업무 흐름이 읽는다 · 거른다 · 쓴다 세 토막으로 정리됐습니다.
- 4교시에 그대로 붙여넣을 명세서 한 장이 완성됐습니다.
`,contentEn:`**35 minutes. The output is a one-page requirements sheet.**

Draw before you build. Pick the tool shape, sketch the screen, split the flow into three parts, then bind all three into one requirements sheet that you paste into session 4.

<div class="guide-walk-flow">
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">1</span>Pick the shape</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">2</span>Sketch the screen</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">3</span>Split into three</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">4</span>Write requirements</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">5</span>Review with AI</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">6</span>Confirm the design</span>
</div>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 1</span>
    <span class="setup-step-crumb">Design · Tool shape</span>
  </div>
  <h3 class="setup-step-title">Pick one of four shapes</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s3-1-pick-shape.svg" alt="Four cards showing sheet button, web form, document generation, and scheduled run" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>Decide the shape first. Pick exactly one today.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div><b>Sheet + button</b> — runs from a menu inside your own sheet. This is today’s shape.</div></li>
        <li><span class="setup-action-no">2</span><div><b>Web form + sheet</b> — other people submit, your sheet collects.</div></li>
        <li><span class="setup-action-no">3</span><div><b>Document generation</b> — one list produces many letters.</div></li>
        <li><span class="setup-action-no">4</span><div><b>Scheduled run</b> — runs by itself each morning. Not covered today.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>Mine looks like the second one</b><span>Build the first one anyway. Converting it later is far easier.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 2</span>
    <span class="setup-step-crumb">Design · Screen sketch</span>
  </div>
  <h3 class="setup-step-title">Sketch the screen by hand</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s3-2-sketch.svg" alt="A sketch showing the menu button, the source sheet, and the result sheet" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>Decide where people click and where results appear.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>Draw exactly <b>one place to click</b>.</div></li>
        <li><span class="setup-action-no">2</span><div>Name the <b>source sheet</b> and write "never modified" next to it.</div></li>
        <li><span class="setup-action-no">3</span><div>Draw where the <b>result</b> lands and what it looks like.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>I cannot draw</b><span>Three boxes and an arrow are enough.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 3</span>
    <span class="setup-step-crumb">Design · Split the flow</span>
  </div>
  <h3 class="setup-step-title">Split the work into three parts</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s3-3-flow.svg" alt="Three cards: read, filter and arrange, write" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>Any task fits in three parts. Do not stretch it to four.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div><b>Read</b> — name the sheet and the first data row.</div></li>
        <li><span class="setup-action-no">2</span><div><b>Filter and arrange</b> — copy the rules you confirmed in session 2.</div></li>
        <li><span class="setup-action-no">3</span><div><b>Write</b> — where the result lands and in what shape.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>I end up with four or more</b><span>Merge the middle ones into "filter and arrange".</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 4</span>
    <span class="setup-step-crumb">Requirements · Six boxes</span>
  </div>
  <h3 class="setup-step-title">Write the requirements sheet</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s3-4-spec.svg" alt="A six-box requirements sheet filled in" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>Bind the previous three into one page that session 4 pastes as-is.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>In <b>read from</b>, give the sheet name and column letters exactly.</div></li>
        <li><span class="setup-action-no">2</span><div>In <b>rules</b>, copy the middle of your three-part flow.</div></li>
        <li><span class="setup-action-no">3</span><div>In <b>write to</b>, name the result sheet and say what happens if it exists.</div></li>
        <li><span class="setup-action-no">4</span><div>In <b>exceptions</b>, say what to do with empty and missing values.</div></li>
        <li><span class="setup-action-no">5</span><div>In <b>human check</b>, say what the tool shows when it finishes.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>I cannot think of exceptions</b><span>Empty cells, duplicates, and stray spaces are enough.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 5</span>
    <span class="setup-step-crumb">AI tool · Spec review</span>
  </div>
  <h3 class="setup-step-title">Find the ambiguities and missing exceptions</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s3-5-spec-review.svg" alt="AI pointing out ambiguities and overlooked exceptions in the spec" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>Reduce session 5 errors in advance.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>Paste the spec and add <b>do not write code yet</b>.</div></li>
        <li><span class="setup-action-no">2</span><div>Ask what is ambiguous and which exceptions you missed.</div></li>
        <li><span class="setup-action-no">3</span><div>Add what it finds to the <b>exceptions</b> box.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>Too many findings</b><span>Keep only what will actually happen in your data.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 6</span>
    <span class="setup-step-crumb">Design · Final check</span>
  </div>
  <h3 class="setup-step-title">Check the design in five lines</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s3-6-design-check.svg" alt="A five-line checklist before moving to session 4" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>Any empty line here sends you back from session 4.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>Sheet names and column letters match the real sheet.</div></li>
        <li><span class="setup-action-no">2</span><div>There is exactly one place to click.</div></li>
        <li><span class="setup-action-no">3</span><div>The source sheet is never modified.</div></li>
        <li><span class="setup-action-no">4</span><div>Empty cells, format differences, and zero rows are covered.</div></li>
        <li><span class="setup-action-no">5</span><div>The tool tells the person what it did.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>The last line is empty</b><span>A single alert saying "N rows processed" is enough.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

### When you finish

- The shape and screen of your tool are decided.
- The work flow is written as read / filter / write.
- You have the one page that session 4 pastes into the AI.
`},r={id:"auto-03",icon:"fa-pen-ruler",title:"3교시 11:00~12:00 · 업무흐름 및 화면구성 설계",titleEn:"Session 3 — Flow and Screen Design",sections:[{title:"만들기 전에 그림을 그립니다",titleEn:"Draw It Before You Build It",content:`### 이 시간에 하는 일

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

> 점심 식사 후 4교시에 이 프롬프트를 **그대로 붙여넣기만** 하면 됩니다.`,contentEn:`### This session

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

Tabs renamed, columns listed by letter, steps numbered and concrete, result location specified, prompt ready to paste.`},u]},v={title:"따라하기 실습 · 코드를 받아 시트에 붙이기",titleEn:"Hands-on — Get the Code and Attach It",content:`**소요 40분 · 산출물은 실제로 도는 도구입니다.**

3교시 명세서를 그대로 붙여넣어 코드를 받고, 시트에 붙여 메뉴를 만들고, 그 메뉴로 실행해 결과를 확인합니다. 오늘 처음으로 「내 업무가 도는 도구」가 생기는 시간입니다.

> **명세서를 다시 요약하지 마세요.** 3교시에서 쓴 여섯 칸을 그대로 붙여넣는 것이 가장 좋은 프롬프트입니다.

<div class="guide-walk-flow">
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">1</span>명세서 붙여넣기</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">2</span>되물음에 답하기</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">3</span>코드 받기</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">4</span>편집기에 붙이기</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">5</span>메뉴 확인</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">6</span>실행과 결과</span>
</div>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 1</span>
    <span class="setup-step-crumb">AI 도구 · 프롬프트</span>
  </div>
  <h3 class="setup-step-title">명세서를 그대로 붙여넣습니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s4-1-paste-spec.svg" alt="3교시 명세서를 대괄호 항목 그대로 붙여넣어 코드를 요청한 화면" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>가장 좋은 프롬프트는 잘 쓴 명세서입니다. 다시 쓰지 않습니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>맨 앞에 <b>나는 코딩을 못 하는 공무원이고</b> 처럼 내가 누구인지 한 줄로 밝힙니다.</div></li>
        <li><span class="setup-action-no">2</span><div>3교시 명세서를 <b>대괄호 항목 그대로</b> 붙여넣습니다.</div></li>
        <li><span class="setup-action-no">3</span><div>맨 끝에 조건 세 줄을 붙입니다 — <b>붙여넣고 바로 도는 완성 코드</b>, <b>줄마다 한글 주석</b>, <b>상단 메뉴도 함께</b>.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>프롬프트가 너무 길어요</b><span>길어도 됩니다. 짧게 줄일수록 AI 가 빈 곳을 제 마음대로 채웁니다.</span></li>
            <li><b>어떤 AI 를 써야 하나요</b><span>ChatGPT · Claude · Gemini 아무거나 됩니다. 하나로 끝까지 가는 것이 좋습니다.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 2</span>
    <span class="setup-step-crumb">AI 도구 · 되물음</span>
  </div>
  <h3 class="setup-step-title">되물음에 번호로 짧게 답합니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s4-2-answer-back.svg" alt="AI 의 되물음 두 개에 번호로 답하고 코드를 요청한 화면" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>되물음은 좋은 신호입니다. 여기에 답해야 내 업무에 맞는 코드가 나옵니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>질문 번호를 그대로 받아 <b>1 — … / 2 — …</b> 처럼 답합니다.</div></li>
        <li><span class="setup-action-no">2</span><div>마지막에 <b>이제 코드 만들어 줘</b> 를 붙입니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>되물음 없이 코드가 나왔어요</b><span>오히려 위험합니다. "만들기 전에 확인할 게 있으면 먼저 물어봐" 라고 한 번 되돌리세요.</span></li>
            <li><b>무엇을 답해야 할지 모르겠어요</b><span>2교시 확정 정의서에 답이 있습니다. 거기에도 없으면 지금 정하면 됩니다.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 3</span>
    <span class="setup-step-crumb">AI 도구 · 코드 수령</span>
  </div>
  <h3 class="setup-step-title">메뉴 코드까지 한 덩어리로 받습니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s4-3-receive-code.svg" alt="onOpen 메뉴 코드와 실행 코드가 한 덩어리로 온 화면" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>붙여넣기만 하면 되는 완성 코드 한 덩어리를 받습니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div><b>onOpen</b> 으로 시작하는 부분이 있는지 봅니다 — 이것이 메뉴를 만드는 코드입니다.</div></li>
        <li><span class="setup-action-no">2</span><div>그 아래 <b>실제로 일하는 함수</b>가 이어지는지 봅니다.</div></li>
        <li><span class="setup-action-no">3</span><div>줄마다 <b>한글 주석</b>이 붙어 있는지 봅니다. 없으면 다시 시킵니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>코드가 두 덩어리예요</b><span>"하나로 합쳐서 전체를 다시 줘" 라고 하세요.</span></li>
            <li><b>onOpen 이 없어요</b><span>"시트 상단에 자동화 메뉴를 만드는 onOpen 도 같이 넣어 줘" 라고 하세요.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 4</span>
    <span class="setup-step-crumb">Apps Script · 붙여넣기</span>
  </div>
  <h3 class="setup-step-title">편집기에 붙여넣고 저장합니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s4-4-paste-editor.svg" alt="받은 코드를 Apps Script 편집기에 붙여넣고 저장한 화면" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>이번에는 실행 버튼을 누르지 않습니다. 메뉴로 실행할 것이기 때문입니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>시트에서 <b>확장 프로그램 → Apps Script</b> 를 엽니다.</div></li>
        <li><span class="setup-action-no">2</span><div>기존 내용을 <b>모두 지우고</b> 받은 코드를 통째로 붙여넣습니다.</div></li>
        <li><span class="setup-action-no">3</span><div><b>저장</b>을 누릅니다. 저장하지 않으면 메뉴가 생기지 않습니다.</div></li>
        <li><span class="setup-action-no">4</span><div>시트 탭으로 돌아가 브라우저를 <b>새로 고침</b>합니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>메뉴가 안 생겨요</b><span>저장했는지, 새로 고침했는지 두 가지를 확인하세요. 거의 이 둘입니다.</span></li>
            <li><b>빨간 줄이 떠요</b><span>문법 오류입니다. 그 줄 번호와 문장을 복사해 AI 에게 그대로 붙여넣으세요.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 5</span>
    <span class="setup-step-crumb">구글 시트 · 메뉴 확인</span>
  </div>
  <h3 class="setup-step-title">상단에 내 메뉴가 생겼는지 봅니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s4-5-menu.svg" alt="시트 상단에 자동화 메뉴가 새로 생기고 항목이 펼쳐진 화면" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>오늘 만든 버튼이 실제로 시트에 붙었는지 확인합니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>시트 상단 메뉴 줄 맨 오른쪽에 <b>자동화</b> 가 생겼는지 봅니다.</div></li>
        <li><span class="setup-action-no">2</span><div>눌러서 <b>내가 이름 붙인 항목</b>이 나오는지 봅니다.</div></li>
        <li><span class="setup-action-no">3</span><div>아직 누르지 말고, 원본 자료에 <b>중복 행</b>이 있는지 먼저 확인해 둡니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>메뉴 이름이 달라요</b><span>AI 가 준 코드의 createMenu 안에 있는 이름입니다. 바꾸고 싶으면 그 글자만 고치고 저장하세요.</span></li>
            <li><b>한참 기다려도 안 나와요</b><span>시트 탭을 닫았다가 다시 여세요. onOpen 은 시트를 열 때 돕니다.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 6</span>
    <span class="setup-step-crumb">구글 시트 · 실행</span>
  </div>
  <h3 class="setup-step-title">메뉴로 실행하고 결과를 대조합니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s4-6-run-result.svg" alt="메뉴로 실행해 결과 시트가 생기고 처리 건수 알림창이 뜬 화면" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>오늘 처음으로 내 업무가 도구로 처리되는 순간입니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div><b>자동화 → 내 항목</b>을 누릅니다. 처음 한 번은 권한 창이 뜹니다 (1교시와 같습니다).</div></li>
        <li><span class="setup-action-no">2</span><div><b>알림창 숫자</b>를 읽고 원본과 맞는지 봅니다.</div></li>
        <li><span class="setup-action-no">3</span><div><b>결과 시트</b>가 새로 생겼는지, 내용이 맞는지 봅니다.</div></li>
        <li><span class="setup-action-no">4</span><div><b>원본 시트</b>가 그대로인지 반드시 확인합니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>숫자가 안 맞아요</b><span>"원본 5건인데 결과가 3건이야. 2건이 왜 빠졌는지 찾아 코드를 고쳐 줘" 처럼 숫자를 넣어 말하세요.</span></li>
            <li><b>오류 창이 떠요</b><span>창의 문장을 통째로 복사해 두세요. 5교시에서 이것을 다룹니다.</span></li>
            <li><b>원본이 바뀌었어요</b><span>즉시 실행을 멈추고 "원본은 고치지 말고 새 시트에만 쓰도록 고쳐 줘" 라고 다시 시키세요.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

### 여기까지 하면

- 시트 상단에 내가 이름 붙인 메뉴가 생겼습니다.
- 메뉴를 누르면 내 업무가 실제로 처리됩니다.
- 아직 예외 자료에서는 멈출 수 있습니다. 5교시에서 그것을 잡습니다.
`,contentEn:`**40 minutes. The output is a tool that actually runs.**

Paste the session 3 requirements, receive the code, attach it to your sheet, and run it from your own menu.

<div class="guide-walk-flow">
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">1</span>Paste the spec</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">2</span>Answer questions</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">3</span>Receive the code</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">4</span>Paste into the editor</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">5</span>Check the menu</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">6</span>Run and verify</span>
</div>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 1</span>
    <span class="setup-step-crumb">AI tool · Prompt</span>
  </div>
  <h3 class="setup-step-title">Paste the requirements as they are</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s4-1-paste-spec.svg" alt="The session 3 requirements pasted into an AI chat with three conditions appended" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>A good spec is the best prompt. Do not rewrite it.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>Open with one line about who you are.</div></li>
        <li><span class="setup-action-no">2</span><div>Paste the requirements <b>with the bracketed labels intact</b>.</div></li>
        <li><span class="setup-action-no">3</span><div>Append three conditions: complete runnable code, a comment on every line, and the menu code too.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>The prompt feels too long</b><span>Long is fine. Shortening it invites the AI to invent details.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 2</span>
    <span class="setup-step-crumb">AI tool · Clarify</span>
  </div>
  <h3 class="setup-step-title">Answer the questions by number</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s4-2-answer-back.svg" alt="Short numbered answers followed by a request for the code" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>Questions are a good sign. Answering them is what makes the code fit your task.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>Answer using the same numbers: <b>1 — … / 2 — …</b>.</div></li>
        <li><span class="setup-action-no">2</span><div>Finish with <b>now write the code</b>.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>It wrote code with no questions</b><span>Push back: "Ask me anything you need before writing."</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 3</span>
    <span class="setup-step-crumb">AI tool · Receive</span>
  </div>
  <h3 class="setup-step-title">Receive menu code and work code together</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s4-3-receive-code.svg" alt="One code block containing both the onOpen menu and the working function" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>One block you only have to paste.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>Look for an <b>onOpen</b> section — that builds the menu.</div></li>
        <li><span class="setup-action-no">2</span><div>Check the <b>working function</b> follows it.</div></li>
        <li><span class="setup-action-no">3</span><div>Check every line has a comment.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>There is no onOpen</b><span>Ask: "Include an onOpen that adds a menu to the sheet."</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 4</span>
    <span class="setup-step-crumb">Apps Script · Paste</span>
  </div>
  <h3 class="setup-step-title">Paste into the editor and save</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s4-4-paste-editor.svg" alt="The received code pasted into the Apps Script editor and saved" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>Do not press Run this time — you will run it from the menu.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>Open <b>Extensions → Apps Script</b>.</div></li>
        <li><span class="setup-action-no">2</span><div>Delete everything and paste the code.</div></li>
        <li><span class="setup-action-no">3</span><div>Press <b>Save</b>. Without saving there is no menu.</div></li>
        <li><span class="setup-action-no">4</span><div>Go back to the sheet and <b>refresh</b> the browser.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>No menu appears</b><span>Check you saved, then check you refreshed.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 5</span>
    <span class="setup-step-crumb">Google Sheets · Menu</span>
  </div>
  <h3 class="setup-step-title">Check your menu appeared</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s4-5-menu.svg" alt="A new automation menu at the top of the sheet with its items open" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>Confirm the button you built is actually attached.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>Look for your new menu at the right end of the menu bar.</div></li>
        <li><span class="setup-action-no">2</span><div>Open it and check the item name you chose.</div></li>
        <li><span class="setup-action-no">3</span><div>Before clicking, note which rows in the source are duplicates.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>Nothing shows even after waiting</b><span>Close the sheet tab and reopen it — onOpen runs when the sheet opens.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 6</span>
    <span class="setup-step-crumb">Google Sheets · Run</span>
  </div>
  <h3 class="setup-step-title">Run from the menu and compare</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s4-6-run-result.svg" alt="The tool run from the menu, producing a result sheet and a count dialog" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>This is the first moment your own task runs as a tool.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>Click your menu item. The first run shows the permission dialog from session 1.</div></li>
        <li><span class="setup-action-no">2</span><div>Read the <b>count in the dialog</b> and compare it with the source.</div></li>
        <li><span class="setup-action-no">3</span><div>Check the <b>result sheet</b> was created and looks right.</div></li>
        <li><span class="setup-action-no">4</span><div>Confirm the <b>source sheet</b> is unchanged.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>The counts do not match</b><span>Say it with numbers: "Source had 5 rows, result has 3. Find why two were dropped."</span></li>
            <li><b>The source changed</b><span>Stop and ask for a fix: write to a new sheet only.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

### When you finish

- Your sheet now has a menu you named yourself.
- Clicking it processes your real task.
- Edge cases may still break it — session 5 handles those.
`},h={id:"auto-04",icon:"fa-wand-magic-sparkles",title:"4교시 13:00~14:00 · 자동화 코드·템플릿 생성",titleEn:"Session 4 — Generating Code",sections:[{title:"프롬프트를 넣고 코드를 받습니다",titleEn:"Paste the Prompt, Get the Code",content:`### 이 시간에 하는 일

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

> 여기까지 오셨으면 오늘의 절반은 끝났습니다. 오류가 났다면 그것도 정상입니다. 5교시가 그걸 잡는 시간입니다.`,contentEn:`### This session

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

Do not start over — ask it to change only the specific part and show the whole code again.`},v]},g={title:"따라하기 실습 · 기능 시험과 오류 대응 루틴",titleEn:"Hands-on — Testing and the Error Loop",content:`**소요 40분 · 산출물은 예외까지 견디는 도구입니다.**

오류는 실패가 아니라 안내문입니다. 무엇이 없는지 이미 적혀 있습니다. 이 시간에는 오류를 읽고 AI 에게 넘기는 고리를 몸에 익힙니다. 이 고리를 익히면 앞으로 어떤 도구든 혼자 고칠 수 있습니다.

> **오류가 안 나면 오히려 걱정하세요.** 일부러 망가뜨린 자료로 시험하지 않은 도구는 실제 업무에서 반드시 멈춥니다.

<div class="guide-walk-flow">
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">1</span>정상 자료로 한 번</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">2</span>오류 통째로 잡기</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">3</span>AI 에 그대로 넘기기</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">4</span>고쳐서 다시 실행</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">5</span>예외 자료 시험</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">6</span>결과 대조</span>
</div>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 1</span>
    <span class="setup-step-crumb">Apps Script · 정상 실행</span>
  </div>
  <h3 class="setup-step-title">고치기 전에 있는 그대로 한 번 돌립니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s5-1-happy-path.svg" alt="정상 자료로 실행해 실행 로그에 완료가 찍힌 화면" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>무엇이 되고 무엇이 안 되는지부터 봅니다. 미리 고치지 않습니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div><b>▶ 실행</b> 을 눌러 정상 자료로 한 번 돌립니다.</div></li>
        <li><span class="setup-action-no">2</span><div>아래 <b>실행 로그</b>에 "실행이 완료됨" 이 보이는지 봅니다.</div></li>
        <li><span class="setup-action-no">3</span><div>로그에 찍힌 <b>숫자</b>를 원본 건수와 맞춰 봅니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>로그가 안 보여요</b><span>편집기 아래쪽에 있습니다. 안 보이면 편집기 하단 경계선을 위로 끌어 올리세요.</span></li>
            <li><b>로그에 아무것도 안 찍혀요</b><span>"각 단계마다 Logger.log 로 진행 상황을 남기도록 고쳐 줘" 라고 하세요.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 2</span>
    <span class="setup-step-crumb">Apps Script · 오류 읽기</span>
  </div>
  <h3 class="setup-step-title">빨간 줄을 통째로 복사합니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s5-2-error.svg" alt="실행 오류가 난 로그와 복사해야 할 범위를 표시한 화면" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>오류를 요약하지 않습니다. 요약하면 원인이 사라집니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div><b>빨간 줄 전체</b>를 마우스로 긁어 복사합니다. 한 줄만 복사하면 안 됩니다.</div></li>
        <li><span class="setup-action-no">2</span><div><b>줄 번호</b>(예: 코드.gs:3)까지 함께 복사합니다.</div></li>
        <li><span class="setup-action-no">3</span><div>어떤 자료로 돌렸을 때 났는지 <b>한 줄로</b> 적어 둡니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>오류가 영어라 모르겠어요</b><span>읽을 필요가 없습니다. 그대로 복사해 AI 에게 넘기면 됩니다.</span></li>
            <li><b>빨간 줄이 여러 개예요</b><span>전부 복사하세요. 대개 첫 번째가 원인이고 나머지는 그 여파입니다.</span></li>
          </ul>
        </div>
      </div>
      <div class="setup-note setup-note-tip">
        <div class="setup-note-title">알아 두면 좋은 것</div>
        <div class="setup-note-body">오류 문장에는 무엇이 없는지가 이미 적혀 있습니다. <code>null</code> 은 "그런 게 없다", <code>undefined</code> 는 "값이 비어 있다" 는 뜻입니다.</div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 3</span>
    <span class="setup-step-crumb">AI 도구 · 오류 전달</span>
  </div>
  <h3 class="setup-step-title">오류를 그대로 붙여넣고 전체 코드를 받습니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s5-3-ask-fix.svg" alt="오류 문장을 그대로 붙여넣고 원인과 고친 코드를 받은 화면" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>고치는 사람은 AI 입니다. 나는 오류를 정확히 전달하는 일만 합니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div><b>네가 준 코드를 실행했더니 아래 오류가 났어</b> 로 시작합니다.</div></li>
        <li><span class="setup-action-no">2</span><div>복사한 오류를 <b>글자 그대로</b> 붙여넣습니다.</div></li>
        <li><span class="setup-action-no">3</span><div>내가 아는 사실을 한 줄 덧붙입니다 — 시트 이름, 자료 건수 같은 것.</div></li>
        <li><span class="setup-action-no">4</span><div>마지막에 <b>코드 전체를 다시 줘</b> 를 붙입니다. 조각으로 받으면 붙일 자리를 못 찾습니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>고쳐 준 코드에서 또 오류가 나요</b><span>정상입니다. 같은 방식으로 새 오류를 다시 넘기세요. 보통 두세 번이면 끝납니다.</span></li>
            <li><b>같은 오류가 계속 나와요</b><span>"이 방법 말고 다른 방법으로 고쳐 줘" 라고 방향을 바꾸세요.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 4</span>
    <span class="setup-step-crumb">Apps Script · 다시 실행</span>
  </div>
  <h3 class="setup-step-title">고친 코드로 다시 돌립니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s5-4-rerun.svg" alt="고친 코드를 붙여넣고 다시 실행해 통과한 화면" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>한 고리를 닫습니다. 무엇이 바뀌었는지 한 줄만 보고 넘어갑니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>고친 코드를 다시 <b>통째로</b> 붙여넣고 저장합니다.</div></li>
        <li><span class="setup-action-no">2</span><div><b>무엇이 바뀌었는지</b> 한 줄만 눈으로 확인합니다. 전부 이해할 필요는 없습니다.</div></li>
        <li><span class="setup-action-no">3</span><div>다시 실행해 <b>완료됨</b>이 나오는지 봅니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>어디가 바뀌었는지 모르겠어요</b><span>AI 에게 "바뀐 줄만 따로 알려 줘" 라고 하세요.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 5</span>
    <span class="setup-step-crumb">시험 · 예외 자료</span>
  </div>
  <h3 class="setup-step-title">일부러 망가뜨린 자료로 시험합니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s5-5-edge-cases.svg" alt="빈 칸·표기 차이·앞뒤 공백을 일부러 넣은 시험용 자료 화면" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>여기서 안 터지면 실제 업무에서도 안 터집니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div><b>표기만 다른 같은 값</b>을 넣습니다 — 010-1234-5678 과 01012345678.</div></li>
        <li><span class="setup-action-no">2</span><div><b>앞뒤 공백</b>이 있는 값을 넣습니다 — " 이서연 ".</div></li>
        <li><span class="setup-action-no">3</span><div><b>빈 칸</b>을 넣습니다 — 이름이나 금액을 비웁니다.</div></li>
        <li><span class="setup-action-no">4</span><div>이 자료로 실행해 <b>멈추는지 끝까지 도는지</b> 봅니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>멈춰요</b><span>멈춘 것이 성과입니다. 오류를 그대로 AI 에게 넘기고 "이런 자료에서도 멈추지 않게 고쳐 줘" 라고 하세요.</span></li>
            <li><b>안 멈추는데 결과가 틀려요</b><span>더 나쁩니다. "표기가 다른 같은 번호를 같은 값으로 보게 고쳐 줘" 처럼 규칙을 콕 집어 말하세요.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 6</span>
    <span class="setup-step-crumb">시험 · 결과 대조</span>
  </div>
  <h3 class="setup-step-title">다섯 줄로 결과를 대조합니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s5-6-verify.svg" alt="도구 결과를 손으로 대조하는 다섯 줄 점검표" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>도구를 믿고 쓰기 전 마지막 확인입니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div><b>원본 건수 = 결과 건수 + 삭제 건수</b> 가 맞는지 봅니다. 여기가 틀리면 나머지는 볼 필요 없습니다.</div></li>
        <li><span class="setup-action-no">2</span><div><b>손으로 세어 본 것</b>과 도구 결과가 같은지 봅니다.</div></li>
        <li><span class="setup-action-no">3</span><div>앞 단계에서 넣은 <b>예외 자료</b>가 제대로 처리됐는지 봅니다.</div></li>
        <li><span class="setup-action-no">4</span><div><b>원본 시트가 하나도 안 바뀌었는지</b> 확인합니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>숫자가 한두 건 달라요</b><span>어느 행이 다른지 찾아 그 행의 값을 AI 에게 보여 주세요. 대개 공백이나 표기 차이입니다.</span></li>
            <li><b>원본이 바뀌었어요</b><span>당장 쓰지 마세요. "원본은 읽기만 하고 절대 고치지 않게 다시 만들어 줘" 라고 하세요.</span></li>
          </ul>
        </div>
      </div>
      <div class="setup-note setup-note-tip">
        <div class="setup-note-title">알아 두면 좋은 것</div>
        <div class="setup-note-body">숫자 대조가 먼저입니다. 합이 맞지 않으면 나머지 항목을 아무리 봐도 의미가 없습니다.</div>
      </div>
    </div>
  </div>
</section>

### 여기까지 하면

- 오류를 읽고 AI 에게 넘기는 고리를 한 바퀴 돌았습니다.
- 빈 칸 · 표기 차이 · 공백에서도 도구가 멈추지 않습니다.
- 숫자로 결과를 대조하는 습관이 생겼습니다. 이것이 도구를 믿고 쓰는 근거입니다.
`,contentEn:`**40 minutes. The output is a tool that survives edge cases.**

An error message is not a failure, it is a notice telling you what is missing. This session builds the habit of reading it and handing it to the AI.

<div class="guide-walk-flow">
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">1</span>Run the happy path</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">2</span>Capture the whole error</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">3</span>Hand it to the AI</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">4</span>Fix and rerun</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">5</span>Test edge cases</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">6</span>Compare results</span>
</div>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 1</span>
    <span class="setup-step-crumb">Apps Script · Happy path</span>
  </div>
  <h3 class="setup-step-title">Run it as-is before changing anything</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s5-1-happy-path.svg" alt="A successful run with a completion line in the execution log" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>See what works before you fix anything.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>Press <b>Run</b> with clean data.</div></li>
        <li><span class="setup-action-no">2</span><div>Check the <b>execution log</b> says the run completed.</div></li>
        <li><span class="setup-action-no">3</span><div>Compare the logged <b>count</b> with the source.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>The log is empty</b><span>Ask for logging: "Add Logger.log at each step."</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 2</span>
    <span class="setup-step-crumb">Apps Script · Read the error</span>
  </div>
  <h3 class="setup-step-title">Copy the whole red block</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s5-2-error.svg" alt="A failed run with the full error block marked for copying" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>Never summarize an error — summarizing removes the cause.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>Select and copy <b>the entire red block</b>.</div></li>
        <li><span class="setup-action-no">2</span><div>Include the <b>line reference</b> such as 코드.gs:3.</div></li>
        <li><span class="setup-action-no">3</span><div>Note in one line which data you ran it on.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>The error is in English</b><span>You do not need to read it. Copy and hand it over.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 3</span>
    <span class="setup-step-crumb">AI tool · Hand it over</span>
  </div>
  <h3 class="setup-step-title">Paste the error verbatim and ask for the full code</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s5-3-ask-fix.svg" alt="The error pasted as-is, with the cause and corrected code returned" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>The AI fixes it. Your job is to report the error accurately.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>Open with "I ran your code and got this error".</div></li>
        <li><span class="setup-action-no">2</span><div>Paste the error <b>character for character</b>.</div></li>
        <li><span class="setup-action-no">3</span><div>Add one line of what you know — sheet name, row count.</div></li>
        <li><span class="setup-action-no">4</span><div>End with <b>give me the complete code again</b>.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>The fix produces another error</b><span>Normal. Hand over the new one the same way. Two or three rounds is typical.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 4</span>
    <span class="setup-step-crumb">Apps Script · Rerun</span>
  </div>
  <h3 class="setup-step-title">Run again with the corrected code</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s5-4-rerun.svg" alt="The corrected code pasted and running successfully" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>Close one loop. Glance at what changed, then move on.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>Paste the corrected code <b>in full</b> and save.</div></li>
        <li><span class="setup-action-no">2</span><div>Look at <b>what changed</b> in one line.</div></li>
        <li><span class="setup-action-no">3</span><div>Run again and confirm it completed.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>I cannot tell what changed</b><span>Ask: "Show only the lines you changed."</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 5</span>
    <span class="setup-step-crumb">Testing · Edge cases</span>
  </div>
  <h3 class="setup-step-title">Test with deliberately broken data</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s5-5-edge-cases.svg" alt="Test data containing format differences, stray spaces, and empty cells" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>If it survives here, it survives real work.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>Add the <b>same value written differently</b>.</div></li>
        <li><span class="setup-action-no">2</span><div>Add values with <b>leading or trailing spaces</b>.</div></li>
        <li><span class="setup-action-no">3</span><div>Add <b>empty cells</b>.</div></li>
        <li><span class="setup-action-no">4</span><div>Run it and see whether it stops or finishes.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>It stops</b><span>That is the point. Hand the error over and ask it to survive such data.</span></li>
            <li><b>It finishes but the result is wrong</b><span>Worse. Name the rule: "Treat differently formatted numbers as the same value."</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 6</span>
    <span class="setup-step-crumb">Testing · Compare</span>
  </div>
  <h3 class="setup-step-title">Compare the results in five lines</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s5-6-verify.svg" alt="A five-line checklist comparing tool output against manual counts" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>The last check before you trust the tool.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>Verify <b>source = result + removed</b>. If this fails, stop here.</div></li>
        <li><span class="setup-action-no">2</span><div>Compare against what you counted by hand.</div></li>
        <li><span class="setup-action-no">3</span><div>Confirm the edge-case rows were handled.</div></li>
        <li><span class="setup-action-no">4</span><div>Confirm the source sheet is untouched.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>The source changed</b><span>Do not use it. Ask for a version that only reads the source.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

### When you finish

- You have completed one full error loop.
- The tool no longer stops on empty cells, format differences, or stray spaces.
- You compare results by number before trusting the tool.
`},b={id:"auto-05",icon:"fa-bug",title:"5교시 14:00~15:00 · 구현 및 테스트",titleEn:"Session 5 — Build and Test",sections:[{title:"돌려보고, 틀리면 AI에게 다시 시킵니다",titleEn:"Run It, and Send Errors Back to the AI",content:`### 이 시간에 하는 일

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

> 여섯 개가 모두 체크되면 **오늘 목표를 달성한 것입니다.** 남은 시간은 이 도구를 안전하고 남에게 넘길 수 있게 다듬습니다.`,contentEn:`### This session

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

Insert → Drawing → draw a rectangle with a label → Save → click the image → ⋮ → Assign script → enter the function name. Buttons beat menus when handing the tool to a colleague.`},g]},w={title:"따라하기 실습 · 보안 판정과 검토 절차 설계",titleEn:"Hands-on — Security Screening and Review Process",content:`**소요 40분 · 산출물은 부서에 붙여 둘 운영 규칙 한 장입니다.**

도구가 도는 것과 부서에서 쓸 수 있는 것은 다릅니다. 자료를 관문에 통과시키고, 가릴 것을 가리고, 공유 범위를 좁히고, 실행 기록을 남기고, 운영 규칙을 적습니다. 이 다섯 가지가 공공업무에서 도구를 쓰기 위한 최소 조건입니다.

> **가장 흔한 사고는 해킹이 아닙니다.** 링크 공유로 열려 있던 시트가 검색에 잡히는 것입니다.

<div class="guide-walk-flow">
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">1</span>세 관문 통과</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">2</span>가명처리 실습</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">3</span>공유 범위 좁히기</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">4</span>실행 기록 남기기</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">5</span>운영 규칙 쓰기</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">6</span>배포 전 점검</span>
</div>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 1</span>
    <span class="setup-step-crumb">보안 · 세 관문</span>
  </div>
  <h3 class="setup-step-title">자료를 세 관문에 순서대로 통과시킵니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s6-1-three-gates.svg" alt="고유식별정보·개인정보·대외비 세 관문과 각 조치를 보여 주는 카드" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>자료를 넣을 때마다 통과시킵니다. 어제 통과했다고 오늘 건너뛰지 않습니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div><b>1관문 고유식별정보</b> — 주민·외국인등록번호, 운전면허·여권번호. 하나라도 있으면 즉시 중단합니다.</div></li>
        <li><span class="setup-action-no">2</span><div><b>2관문 개인정보</b> — 이름 · 연락처 · 주소. 가명처리 후 사용합니다.</div></li>
        <li><span class="setup-action-no">3</span><div><b>3관문 대외비</b> — 미공개 정책·예산 자료. 부서장 승인이 필요합니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>내 자료가 어디에 해당하는지 모르겠어요</b><span>위에서부터 차례로 봅니다. 1관문에 걸리면 2·3관문은 볼 필요도 없습니다.</span></li>
            <li><b>승인을 어떻게 받나요</b><span>무엇을 어디에 넣는지 한 줄로 적어 결재로 올리세요. 구두 승인은 기록이 남지 않습니다.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 2</span>
    <span class="setup-step-crumb">보안 · 가명처리</span>
  </div>
  <h3 class="setup-step-title">가릴 것을 실제로 가려 봅니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s6-2-pseudonymize.svg" alt="원본과 AI 에 넣을 사본을 나란히 둔 가명처리 전후 비교" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>원본은 그대로 두고, AI 에 넣을 사본을 따로 만듭니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div><b>원본 파일</b>은 이름을 바꾸지 말고 내 PC 또는 부서 드라이브에 그대로 둡니다.</div></li>
        <li><span class="setup-action-no">2</span><div>사본을 만들어 <b>이름을 A · B · C</b> 로 바꿉니다.</div></li>
        <li><span class="setup-action-no">3</span><div><b>연락처는 뒤 4자리만</b>, 주소는 구 단위까지만 남깁니다.</div></li>
        <li><span class="setup-action-no">4</span><div>누가 A 인지는 <b>원본에만</b> 남깁니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>이름을 바꾸면 결과를 못 알아봐요</b><span>원본에 A·B·C 를 적어 둔 열을 하나 만들면 됩니다. 그 열은 AI 에 넣지 않습니다.</span></li>
            <li><b>집계만 하는데도 가려야 하나요</b><span>집계에는 이름이 필요 없습니다. 필요 없는 것은 넣지 않는 것이 원칙입니다.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 3</span>
    <span class="setup-step-crumb">구글 시트 · 공유 범위</span>
  </div>
  <h3 class="setup-step-title">공유 범위를 「제한됨」으로 좁힙니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s6-3-sharing.svg" alt="시트 공유 설정에서 링크 공유를 제한됨으로 바꾸는 화면" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>가장 흔한 사고를 막습니다. 링크 공유 시트는 검색에도 잡힙니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>시트 오른쪽 위 <b>공유</b> 를 누릅니다.</div></li>
        <li><span class="setup-action-no">2</span><div><b>일반 액세스</b> 가 "링크가 있는 모든 사용자" 이면 <b>제한됨</b>으로 바꿉니다.</div></li>
        <li><span class="setup-action-no">3</span><div>같이 쓸 사람을 <b>한 명씩</b> 추가합니다.</div></li>
        <li><span class="setup-action-no">4</span><div>도구를 만든 직후와 담당자가 바뀔 때 <b>다시 점검</b>합니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>제한됨으로 바꿨더니 동료가 못 열어요</b><span>정상입니다. 그 동료를 명단에 추가하면 열립니다.</span></li>
            <li><b>부서 전체에 공유하고 싶어요</b><span>부서 구글 그룹이 있으면 그룹을 추가하세요. 링크 공개로 열지 않습니다.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 4</span>
    <span class="setup-step-crumb">구글 시트 · 실행 기록</span>
  </div>
  <h3 class="setup-step-title">돌릴 때마다 기록이 쌓이게 합니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s6-4-run-log.svg" alt="실행 일시·실행자·건수가 한 줄씩 쌓인 실행기록 시트" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>언제 · 누가 · 몇 건을 처리했는지 남깁니다. 감사 자료가 됩니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>AI 에게 <b>실행할 때마다 실행기록 시트에 일시·실행자·원본 건수·결과 건수를 한 줄씩 남겨 줘</b> 라고 합니다.</div></li>
        <li><span class="setup-action-no">2</span><div>받은 코드를 붙여넣고 저장한 뒤 한 번 실행합니다.</div></li>
        <li><span class="setup-action-no">3</span><div><b>실행기록</b> 시트에 첫 줄이 생겼는지 봅니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>실행자 이름이 안 나와요</b><span>"실행자는 Session.getActiveUser().getEmail() 로 남겨 줘" 라고 하세요.</span></li>
            <li><b>기록이 너무 많이 쌓여요</b><span>한 달에 한 번 오래된 줄을 잘라 다른 시트로 옮기면 됩니다.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 5</span>
    <span class="setup-step-crumb">문서 · 운영 규칙</span>
  </div>
  <h3 class="setup-step-title">운영 규칙 한 장을 씁니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s6-5-operating-rules.svg" alt="누가·언제 돌리고 전후로 무엇을 확인하는지 적은 운영 규칙 화면" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>담당자가 바뀌어도 같은 방식으로 돌아가게 만듭니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div><b>누가 · 언제</b> 돌리는지 적습니다. 대행자도 함께 적습니다.</div></li>
        <li><span class="setup-action-no">2</span><div><b>돌리기 전 확인</b> — 원본 시트 이름과 열 순서가 그대로인지.</div></li>
        <li><span class="setup-action-no">3</span><div><b>돌린 뒤 확인</b> — 원본 건수 = 결과 건수 + 삭제 건수 대조.</div></li>
        <li><span class="setup-action-no">4</span><div><b>문제가 생기면</b> 무엇을 캡처해 누구에게 알릴지 적습니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>너무 형식적인 것 같아요</b><span>이 두 줄(전후 확인)만 지켜도 사고는 거의 나지 않습니다. 나머지는 빼도 됩니다.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 6</span>
    <span class="setup-step-crumb">보안 · 배포 전 점검</span>
  </div>
  <h3 class="setup-step-title">부서에 쓰기 전 다섯 줄을 점검합니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s6-6-final-check.svg" alt="배포 전 마지막 다섯 줄 점검 체크리스트" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>만드는 동안 자료를 바꿔 넣었을 수 있습니다. 여기서 한 번 더 봅니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div><b>세 관문</b>을 통과한 자료만 AI 에 넣었는지 봅니다.</div></li>
        <li><span class="setup-action-no">2</span><div><b>공유 범위</b>가 제한됨인지 봅니다.</div></li>
        <li><span class="setup-action-no">3</span><div><b>실행 기록</b>이 자동으로 쌓이는지 봅니다.</div></li>
        <li><span class="setup-action-no">4</span><div><b>운영 규칙</b> 한 장을 부서에 공유했는지 봅니다.</div></li>
        <li><span class="setup-action-no">5</span><div><b>대신 돌릴 사람</b>이 한 번 돌려 봤는지 봅니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>마지막 줄을 못 했어요</b><span>오늘 옆자리 동료에게 5분만 설명하고 한 번 돌리게 하세요. 이것을 건너뛰면 담당자 부재 주에 도구가 멈춥니다.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

### 여기까지 하면

- 외부 AI 에 넣어도 되는 자료와 안 되는 자료를 판정할 수 있습니다.
- 시트 공유 범위가 좁혀졌고, 실행 기록이 자동으로 쌓입니다.
- 부서에 붙여 둘 운영 규칙 한 장이 생겼습니다.
`,contentEn:`**40 minutes. The output is a one-page operating rule for your team.**

A tool that runs is not yet a tool your office can use. Screen the data, mask what must be masked, narrow the sharing scope, log every run, and write the operating rules.

<div class="guide-walk-flow">
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">1</span>Pass three gates</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">2</span>Mask personal data</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">3</span>Narrow sharing</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">4</span>Log every run</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">5</span>Write the rules</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">6</span>Pre-release check</span>
</div>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 1</span>
    <span class="setup-step-crumb">Security · Three gates</span>
  </div>
  <h3 class="setup-step-title">Pass the data through three gates in order</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s6-1-three-gates.svg" alt="Three gate cards for ID numbers, personal data, and confidential material" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>Screen every time you feed data, not once.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div><b>Gate 1 — ID numbers</b>: stop immediately if any exist.</div></li>
        <li><span class="setup-action-no">2</span><div><b>Gate 2 — personal data</b>: mask before use.</div></li>
        <li><span class="setup-action-no">3</span><div><b>Gate 3 — confidential</b>: requires supervisor approval.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>How do I get approval</b><span>Put one line in writing about what goes where. Verbal approval leaves no record.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 2</span>
    <span class="setup-step-crumb">Security · Masking</span>
  </div>
  <h3 class="setup-step-title">Actually mask the data</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s6-2-pseudonymize.svg" alt="Side-by-side original and masked copy prepared for the AI" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>Keep the original untouched and build a separate copy for the AI.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>Leave the <b>original file</b> where it is.</div></li>
        <li><span class="setup-action-no">2</span><div>In the copy, replace names with <b>A, B, C</b>.</div></li>
        <li><span class="setup-action-no">3</span><div>Keep only the <b>last four digits</b> of phone numbers, and district-level addresses.</div></li>
        <li><span class="setup-action-no">4</span><div>Keep the mapping in the original only.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>I only need totals — must I still mask?</b><span>Totals do not need names. Anything unnecessary should not be sent.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 3</span>
    <span class="setup-step-crumb">Google Sheets · Sharing</span>
  </div>
  <h3 class="setup-step-title">Narrow sharing to Restricted</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s6-3-sharing.svg" alt="The sharing dialog being switched from link sharing to Restricted" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>Prevent the most common incident.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>Click <b>Share</b>.</div></li>
        <li><span class="setup-action-no">2</span><div>If general access says "anyone with the link", change it to <b>Restricted</b>.</div></li>
        <li><span class="setup-action-no">3</span><div>Add collaborators <b>one by one</b>.</div></li>
        <li><span class="setup-action-no">4</span><div>Recheck after building the tool and when the owner changes.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>A colleague can no longer open it</b><span>Expected. Add them to the list.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 4</span>
    <span class="setup-step-crumb">Google Sheets · Run log</span>
  </div>
  <h3 class="setup-step-title">Log every run automatically</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s6-4-run-log.svg" alt="A run-log sheet accumulating timestamp, operator, and counts" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>Record when, who, and how many. This becomes your audit trail.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>Ask the AI to append a log row on every run.</div></li>
        <li><span class="setup-action-no">2</span><div>Paste the code, save, and run once.</div></li>
        <li><span class="setup-action-no">3</span><div>Check the first row appeared in the log sheet.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>The operator name is missing</b><span>Ask it to use Session.getActiveUser().getEmail().</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 5</span>
    <span class="setup-step-crumb">Document · Operating rules</span>
  </div>
  <h3 class="setup-step-title">Write the one-page operating rule</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s6-5-operating-rules.svg" alt="An operating rule sheet naming the owner, schedule, and checks" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>Keep the tool running the same way after the owner changes.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>Name <b>who runs it and when</b>, plus the backup person.</div></li>
        <li><span class="setup-action-no">2</span><div><b>Before running</b> — confirm sheet name and column order are unchanged.</div></li>
        <li><span class="setup-action-no">3</span><div><b>After running</b> — verify source = result + removed.</div></li>
        <li><span class="setup-action-no">4</span><div>Say what to capture and whom to tell when something breaks.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>This feels bureaucratic</b><span>The two check lines alone prevent most incidents. Drop the rest if you must.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 6</span>
    <span class="setup-step-crumb">Security · Pre-release</span>
  </div>
  <h3 class="setup-step-title">Check five lines before your team uses it</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s6-6-final-check.svg" alt="A five-line pre-release checklist" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>You may have swapped in different data while building. Look once more.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>Only screened data went to the AI.</div></li>
        <li><span class="setup-action-no">2</span><div>Sharing is Restricted.</div></li>
        <li><span class="setup-action-no">3</span><div>Runs are logged automatically.</div></li>
        <li><span class="setup-action-no">4</span><div>The operating rule is shared with the team.</div></li>
        <li><span class="setup-action-no">5</span><div>The backup person has run it once.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>The last line is not done</b><span>Spend five minutes with a colleague today, or the tool stops the week you are away.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

### When you finish

- You can decide which data may go to an external AI.
- Sharing is narrowed and every run is logged.
- You have a one-page operating rule for the team.
`},f={id:"auto-06",icon:"fa-shield-halved",title:"6교시 15:00~16:00 · 보안·오류 대응 및 개선",titleEn:"Session 6 — Security and Error Handling",sections:[{title:"공공업무에 쓸 수 있게 다듬습니다",titleEn:"Make It Safe for Public Service",content:`### 이 시간에 하는 일

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
- [ ] 오류 대응 체크리스트를 시트로 만들었다`,contentEn:`### This session

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

Never paste raw personal data; describe structure not data; check results before external release; always work on a copy; stop immediately if totals disagree; ship the guide with the tool.`},w]},m={title:"7교시 따라하기 실습 · 적용계획서 여덟 칸 채우기",titleEn:"Session 7 Hands-on — Fill In the Eight-Box Rollout Plan",content:`**소요 50분 · 산출물은 결재 상신용 한 장입니다.**

도구를 만든 것으로 끝나지 않습니다. 부서에 적용하려면 결재가 나야 하고, 결재는 숫자로 납니다. 여덟 칸을 순서대로 채우고 마지막에 한 장으로 줄입니다.

> **"비효율적이다" 같은 말은 쓰지 마세요.** 몇 분, 몇 건인지만 적습니다.

<div class="guide-walk-flow">
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">1</span>양식 열기</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">2</span>현황과 문제</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">3</span>효과를 숫자로</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">4</span>일정과 담당</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">5</span>문장 다듬기</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">6</span>결재용 한 장</span>
</div>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 1</span>
    <span class="setup-step-crumb">계획서 · 양식</span>
  </div>
  <h3 class="setup-step-title">여덟 칸 양식을 엽니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s7-1-plan-form.svg" alt="적용계획서 여덟 칸 빈 양식 화면" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>무엇을 적어야 하는지 먼저 봅니다. 칸 순서에 뜻이 있습니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div><b>1~3번</b>은 지금 상황입니다. 도구 이야기를 아직 꺼내지 않습니다.</div></li>
        <li><span class="setup-action-no">2</span><div><b>4~5번</b>이 제안입니다. 만든 도구와 그것이 가져올 변화를 적습니다.</div></li>
        <li><span class="setup-action-no">3</span><div><b>6~8번</b>은 실행입니다. 결재자는 이 세 칸을 보고 승인 여부를 정합니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>부서 양식이 따로 있어요</b><span>부서 양식을 쓰세요. 여덟 칸의 내용을 그 양식의 해당 항목으로 옮기면 됩니다.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 2</span>
    <span class="setup-step-crumb">계획서 · 현황</span>
  </div>
  <h3 class="setup-step-title">지금 상황을 사실만으로 적습니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s7-2-current.svg" alt="계획서 1~3번 칸에 현황과 문제를 적은 화면" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>문제를 세웁니다. 여기에 판단이나 불평을 섞지 않습니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div><b>업무 이름</b>을 부서 사람이 알아듣는 말로 적습니다.</div></li>
        <li><span class="setup-action-no">2</span><div><b>지금 어떻게 하나</b> — 현재 절차를 사실 그대로 적습니다.</div></li>
        <li><span class="setup-action-no">3</span><div><b>무엇이 문제인가</b> — 반드시 <b>숫자</b>로 적습니다. 시간과 사고 건수 두 가지면 충분합니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>사고 사례가 없어요</b><span>시간만 적어도 됩니다. 다만 지난 3개월을 세어 보면 대개 한두 건은 나옵니다.</span></li>
            <li><b>숫자를 모르겠어요</b><span>다음 한 번을 할 때 시계를 보세요. 한 번만 재도 충분합니다.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 3</span>
    <span class="setup-step-crumb">계획서 · 기대효과</span>
  </div>
  <h3 class="setup-step-title">기대효과를 시트에서 계산합니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s7-3-effect.svg" alt="지금과 도구 적용 후를 비교해 연간 절약 시간을 계산한 표" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>결재자가 보는 숫자를 만듭니다. 곱셈만 하면 나옵니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div><b>1회 소요 시간</b>을 지금과 적용 후로 나란히 적습니다. 지금 숫자는 2교시 정의서에 있습니다.</div></li>
        <li><span class="setup-action-no">2</span><div><b>연간 횟수</b>를 곱해 <b>연간 절약 시간</b>을 냅니다.</div></li>
        <li><span class="setup-action-no">3</span><div><b>사고 건수</b> 변화를 함께 적습니다 — 시간보다 이쪽이 더 세게 읽힙니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>적용 후 시간을 모르겠어요</b><span>5교시에서 실제로 돌려 본 시간을 쓰세요. 대개 1~2분입니다.</span></li>
            <li><b>절약 시간이 작아 보여요</b><span>연간으로 환산하면 대부분 20시간을 넘습니다. 연간으로 적으세요.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 4</span>
    <span class="setup-step-crumb">계획서 · 실행</span>
  </div>
  <h3 class="setup-step-title">일정과 담당을 적습니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s7-4-schedule.svg" alt="계획서 6~8번 칸에 일정·담당·위험을 적은 화면" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>결재자가 가장 걱정하는 세 가지에 미리 답합니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div><b>적용 일정</b> — 한 번에 부서 전체로 가지 않습니다. 시범 1주를 넣습니다.</div></li>
        <li><span class="setup-action-no">2</span><div><b>담당과 관리</b> — 주담당과 <b>대행자</b>를 함께 적습니다.</div></li>
        <li><span class="setup-action-no">3</span><div><b>위험과 대비</b> — 위험은 하나만 적고 대비를 붙입니다. 6교시 운영 규칙에서 가져옵니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>대행자를 정하기 어려워요</b><span>팀장을 적어도 됩니다. 비어 있는 것보다 훨씬 낫습니다.</span></li>
            <li><b>위험이 여러 개예요</b><span>가장 일어날 법한 하나만 적으세요. 많이 적으면 위험해 보입니다.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 5</span>
    <span class="setup-step-crumb">AI 도구 · 문장 다듬기</span>
  </div>
  <h3 class="setup-step-title">AI 로 공문체 문장으로 다듬습니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s7-5-polish.svg" alt="숫자를 바꾸지 말라는 조건을 붙여 계획서 문장을 다듬은 화면" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>내용은 그대로 두고 문장만 바꿉니다. 조건을 붙이지 않으면 없는 성과를 지어냅니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>초안을 붙여넣고 <b>내용은 바꾸지 말고 문장만 다듬어 줘</b> 라고 합니다.</div></li>
        <li><span class="setup-action-no">2</span><div>조건 세 줄을 반드시 붙입니다 — <b>숫자와 날짜는 절대 바꾸지 마</b>, <b>없는 내용을 새로 만들지 마</b>, <b>한 칸에 두 문장을 넘기지 마</b>.</div></li>
        <li><span class="setup-action-no">3</span><div>돌아온 문장의 <b>숫자를 원문과 대조</b>합니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>숫자가 바뀌었어요</b><span>"숫자를 바꾸지 말라고 했어. 원문 숫자로 다시 써 줘" 라고 되돌리세요. 그대로 쓰면 안 됩니다.</span></li>
            <li><b>문장이 너무 딱딱해요</b><span>어색한 곳은 내 말로 고쳐도 됩니다. AI 문장을 그대로 쓸 의무는 없습니다.</span></li>
          </ul>
        </div>
      </div>
      <div class="setup-note setup-note-tip">
        <div class="setup-note-title">알아 두면 좋은 것</div>
        <div class="setup-note-body">AI 가 가장 잘 지어내는 것이 성과 숫자입니다. 다듬은 뒤 숫자를 한 번 더 대조하는 것을 습관으로 만드세요.</div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 6</span>
    <span class="setup-step-crumb">계획서 · 결재용 요약</span>
  </div>
  <h3 class="setup-step-title">결재용 한 장으로 줄입니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s7-6-approval.svg" alt="제목·현황·조치·효과·일정·예산으로 줄인 결재 상신용 한 장" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>결재자는 한 장만 봅니다. 여덟 칸을 여섯 줄로 줄입니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div><b>효과</b> 칸을 위쪽에 둡니다. 결재자가 먼저 보는 줄입니다.</div></li>
        <li><span class="setup-action-no">2</span><div><b>소요 예산</b>에 "없음" 을 반드시 적습니다. 승인 속도가 가장 크게 달라지는 칸입니다.</div></li>
        <li><span class="setup-action-no">3</span><div>완성본을 저장하고 <b>8교시 발표</b>에 그대로 씁니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>한 장에 안 들어가요</b><span>현황과 조치를 각각 한 문장으로 줄이세요. 자세한 내용은 여덟 칸 원본에 있습니다.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

### 여기까지 하면

- 여덟 칸이 모두 채워진 적용계획서가 생겼습니다.
- 기대효과가 연간 시간과 사고 건수라는 숫자로 표현됐습니다.
- 그대로 결재에 올릴 수 있는 한 장 요약이 나왔습니다.
`,contentEn:`**50 minutes. The output is a one-page approval document.**

Building the tool is not the end. Adoption needs approval, and approval follows numbers.

<div class="guide-walk-flow">
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">1</span>Open the form</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">2</span>Current state</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">3</span>Effect in numbers</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">4</span>Schedule and owner</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">5</span>Polish the wording</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">6</span>One-page summary</span>
</div>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 1</span>
    <span class="setup-step-crumb">Plan · Form</span>
  </div>
  <h3 class="setup-step-title">Open the eight-box form</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s7-1-plan-form.svg" alt="An empty eight-box rollout plan form" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>See the shape first. The order of the boxes matters.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div><b>1–3</b> describe the present. Do not mention the tool yet.</div></li>
        <li><span class="setup-action-no">2</span><div><b>4–5</b> are the proposal.</div></li>
        <li><span class="setup-action-no">3</span><div><b>6–8</b> are execution. Approvers decide on these three.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>My office has its own form</b><span>Use it, and map these eight items onto it.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 2</span>
    <span class="setup-step-crumb">Plan · Current state</span>
  </div>
  <h3 class="setup-step-title">Describe the present with facts only</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s7-2-current.svg" alt="Boxes 1–3 filled in with the current process and its problems" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>Establish the problem without opinion.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>Name the task in plain words.</div></li>
        <li><span class="setup-action-no">2</span><div>Describe the current procedure factually.</div></li>
        <li><span class="setup-action-no">3</span><div>State the problem in <b>numbers</b> — time and incident count.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>I have no incident examples</b><span>Time alone is fine, but counting the last three months usually turns up one or two.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 3</span>
    <span class="setup-step-crumb">Plan · Expected effect</span>
  </div>
  <h3 class="setup-step-title">Calculate the effect in a sheet</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s7-3-effect.svg" alt="A table comparing current and post-tool timings with annual savings" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>Produce the number the approver reads.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>Put current and post-tool <b>time per round</b> side by side.</div></li>
        <li><span class="setup-action-no">2</span><div>Multiply by <b>times per year</b> for annual savings.</div></li>
        <li><span class="setup-action-no">3</span><div>Include the change in <b>incident count</b> — it reads stronger than hours.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>The saving looks small</b><span>Convert to annual figures. It usually exceeds twenty hours.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 4</span>
    <span class="setup-step-crumb">Plan · Execution</span>
  </div>
  <h3 class="setup-step-title">Write the schedule and the owner</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s7-4-schedule.svg" alt="Boxes 6–8 filled in with schedule, owner, and risk" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>Answer the approver’s three worries in advance.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div><b>Schedule</b> — include a one-week pilot, never a full rollout at once.</div></li>
        <li><span class="setup-action-no">2</span><div><b>Owner</b> — name the owner and the <b>backup</b>.</div></li>
        <li><span class="setup-action-no">3</span><div><b>Risk</b> — name one risk and its mitigation.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>Too many risks</b><span>List only the most likely one. A long list reads as danger.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 5</span>
    <span class="setup-step-crumb">AI tool · Polish</span>
  </div>
  <h3 class="setup-step-title">Polish the wording with the AI</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s7-5-polish.svg" alt="The plan text polished under the condition that no numbers change" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>Change the wording, not the content.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>Paste the draft and ask it to polish wording only.</div></li>
        <li><span class="setup-action-no">2</span><div>Add three conditions: never change numbers or dates, invent nothing, at most two sentences per box.</div></li>
        <li><span class="setup-action-no">3</span><div>Compare the returned numbers against your draft.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>A number changed</b><span>Reject it and ask again with the original figures. Never ship it as-is.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 6</span>
    <span class="setup-step-crumb">Plan · Approval summary</span>
  </div>
  <h3 class="setup-step-title">Reduce it to one page</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s7-6-approval.svg" alt="A one-page approval summary with title, situation, action, effect, schedule, budget" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>Approvers read one page. Compress eight boxes into six lines.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>Put <b>effect</b> near the top.</div></li>
        <li><span class="setup-action-no">2</span><div>State the <b>budget</b> as none — it changes approval speed more than anything else.</div></li>
        <li><span class="setup-action-no">3</span><div>Save it and reuse it in the session 8 presentation.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>It does not fit on one page</b><span>Compress situation and action to one sentence each.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

### When you finish

- All eight boxes are filled in.
- The benefit is expressed as annual hours and incident counts.
- You have a summary you can submit for approval as-is.
`},k={title:"8교시 따라하기 실습 · 시연·피드백·최종본 만들기",titleEn:"Session 8 Hands-on — Demo, Feedback, and Final Version",content:`**소요 50분 · 산출물은 최종본 도구와 한 달 계획입니다.**

3분 발표로 도구를 보여 주고, 받은 말을 표로 옮기고, 그중 하나를 그 자리에서 고치고, 이름을 붙여 부서 폴더에 저장합니다. 마지막으로 오늘 이후 한 달에 무엇을 할지 적습니다.

> **코드는 보여 주지 마세요.** 보는 사람이 알고 싶은 것은 결과뿐입니다.

<div class="guide-walk-flow">
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">1</span>발표 한 장</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">2</span>시연 순서</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">3</span>피드백 표</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">4</span>하나 고치기</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">5</span>최종본 저장</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">6</span>한 달 계획</span>
</div>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 1</span>
    <span class="setup-step-crumb">발표 · 슬라이드</span>
  </div>
  <h3 class="setup-step-title">발표 슬라이드를 한 장으로 만듭니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s8-1-slide.svg" alt="지금·도구·효과·적용 네 줄로 구성한 3분 발표용 한 장 슬라이드" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>3분 안에 전달되는 한 장을 만듭니다. 두 장을 넘기지 않습니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>제목 한 줄에 <b>결과</b>를 넣습니다 — "주 40분을 2분으로" 처럼.</div></li>
        <li><span class="setup-action-no">2</span><div><b>지금 · 도구 · 효과 · 적용</b> 네 줄만 적습니다. 7교시 한 장에서 그대로 가져옵니다.</div></li>
        <li><span class="setup-action-no">3</span><div>맨 아래에 <b>부서와 이름</b>을 적습니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>넣고 싶은 게 많아요</b><span>다섯 줄을 넘기면 3분에 못 끝냅니다. 나머지는 질문을 받으면 말하세요.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 2</span>
    <span class="setup-step-crumb">발표 · 시연 순서</span>
  </div>
  <h3 class="setup-step-title">시연 순서를 다섯 줄로 정합니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s8-2-demo-order.svg" alt="3분 시연 순서를 다섯 단계와 초 단위 배분으로 정한 화면" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>순서를 정해 두지 않으면 시연 중에 길을 잃습니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div><b>원본 시트</b>를 보여 주고 문제 행을 손으로 짚습니다 — 여기가 가장 중요한 30초입니다.</div></li>
        <li><span class="setup-action-no">2</span><div><b>메뉴</b>를 눌러 실행합니다.</div></li>
        <li><span class="setup-action-no">3</span><div><b>알림창 숫자</b>를 소리 내어 읽습니다. 화면만 보여 주면 아무도 확인하지 않습니다.</div></li>
        <li><span class="setup-action-no">4</span><div><b>결과 시트</b>를 차례로 보여 줍니다.</div></li>
        <li><span class="setup-action-no">5</span><div><b>원본이 그대로</b>임을 보여 주고 마칩니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>시연 중 오류가 나면요</b><span>당황하지 말고 그대로 보여 주세요. "이럴 때는 이렇게 고칩니다" 가 오히려 좋은 시연이 됩니다.</span></li>
            <li><b>시간이 모자라요</b><span>4번을 줄이세요. 1번과 3번은 줄이지 않습니다.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 3</span>
    <span class="setup-step-crumb">피드백 · 받아 적기</span>
  </div>
  <h3 class="setup-step-title">받은 말을 그 자리에서 표로 옮깁니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s8-3-feedback.svg" alt="받은 피드백을 누가·고칠 것인가·언제로 나눠 적은 표" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>기억에 의존하지 않습니다. 들은 말은 그 자리에서 적습니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div><b>받은 말</b>을 고치지 말고 그대로 적습니다. 해석은 나중에 합니다.</div></li>
        <li><span class="setup-action-no">2</span><div><b>누가</b> 했는지 적습니다 — 나중에 되물을 수 있어야 합니다.</div></li>
        <li><span class="setup-action-no">3</span><div><b>고친다 / 다음에 / 계획서에 반영</b> 셋 중 하나로만 나눕니다.</div></li>
        <li><span class="setup-action-no">4</span><div><b>오늘 고칠 것</b>은 한두 개로 제한합니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>지적이 너무 많아요</b><span>전부 적되 "다음에" 로 분류하세요. 적어 두는 것만으로도 다음 달 개선 목록이 됩니다.</span></li>
            <li><b>비판으로 들려요</b><span>쓰는 사람이 관심이 있다는 뜻입니다. 아무 말도 안 나오는 것이 더 나쁩니다.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 4</span>
    <span class="setup-step-crumb">AI 도구 · 반영</span>
  </div>
  <h3 class="setup-step-title">지적 하나를 골라 그 자리에서 고칩니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s8-4-apply-fix.svg" alt="정렬 기준 하나를 바꿔 달라고 요청해 바뀐 줄을 확인한 화면" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>한 번에 한 가지만 고칩니다. 두 가지를 같이 시키면 원인을 못 찾습니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>고칠 것 <b>하나</b>를 고릅니다.</div></li>
        <li><span class="setup-action-no">2</span><div><b>나머지 동작은 그대로 두고</b> 무엇을 어떻게 바꿀지 말합니다.</div></li>
        <li><span class="setup-action-no">3</span><div><b>바뀐 부분만 먼저 알려 준 다음, 전체 코드를 다시 줘</b> 라고 합니다.</div></li>
        <li><span class="setup-action-no">4</span><div>붙여넣고 실행한 뒤 <b>5교시 대조표</b>를 다시 한 번 돌립니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>고쳤더니 다른 게 깨졌어요</b><span>흔한 일입니다. 오류를 그대로 넘기고 "이전 동작은 유지하면서 고쳐 줘" 라고 하세요.</span></li>
            <li><b>고치기 전으로 되돌리고 싶어요</b><span>Apps Script 편집기 상단의 버전 기록에서 이전 저장본으로 돌아갈 수 있습니다.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 5</span>
    <span class="setup-step-crumb">구글 드라이브 · 최종본</span>
  </div>
  <h3 class="setup-step-title">이름을 붙여 부서 폴더에 저장합니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s8-5-save-final.svg" alt="도구 사본을 이름과 날짜를 붙여 부서 폴더에 저장하는 화면" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>고칠 때마다 사본을 남기면 언제든 되돌릴 수 있습니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div><b>파일 → 사본 만들기</b> 를 누릅니다.</div></li>
        <li><span class="setup-action-no">2</span><div>이름에 <b>날짜와 판 번호</b>를 넣습니다 — <code>업무이름_도구_v1.0_20260912</code> 형식.</div></li>
        <li><span class="setup-action-no">3</span><div><b>부서 공유 폴더</b>에 저장합니다. 개인 드라이브에 두지 않습니다.</div></li>
        <li><span class="setup-action-no">4</span><div>사본을 만든 뒤 <b>공유 범위를 다시 제한됨</b>으로 맞춥니다 — 사본에는 따라오지 않습니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>부서 공유 폴더가 없어요</b><span>오늘 하나 만들고 팀에 공유하세요. 폴더 하나가 도구 열 개를 살립니다.</span></li>
            <li><b>사본이 너무 많아져요</b><span>판이 바뀔 때만 만듭니다. 매일 만들 필요는 없습니다.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 6</span>
    <span class="setup-step-crumb">마무리 · 한 달 계획</span>
  </div>
  <h3 class="setup-step-title">오늘 이후 한 달에 할 일을 적습니다</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s8-6-next-month.svg" alt="이번 주부터 한 달까지 할 일을 적은 계획 화면" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">이 단계의 목표</span>
        <p>오늘 만든 도구가 잊히지 않게 만듭니다.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div><b>이번 주</b> — 내 실제 업무에 한 번 돌리고 실행기록 첫 줄을 남깁니다.</div></li>
        <li><span class="setup-action-no">2</span><div><b>2주차</b> — 대행자에게 5분 설명하고 한 번 돌리게 합니다.</div></li>
        <li><span class="setup-action-no">3</span><div><b>3주차</b> — 팀 회의에서 3분 시연합니다. 오늘 슬라이드를 그대로 씁니다.</div></li>
        <li><span class="setup-action-no">4</span><div><b>한 달 안</b> — 피드백 표의 "다음에" 하나를 같은 방법으로 고칩니다.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">이 화면이 안 나오면</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>한 달 뒤에 막히면요</b><span>오늘 자료의 해당 단계로 돌아와 그림과 화면을 맞춰 보세요. 이 페이지는 계속 남아 있습니다.</span></li>
            <li><b>다른 업무도 자동화하고 싶어요</b><span>2교시 후보 표에 적어 둔 나머지 두 개가 있습니다. 같은 여덟 단계를 다시 돌리면 됩니다.</span></li>
          </ul>
        </div>
      </div>
      <div class="setup-note setup-note-tip">
        <div class="setup-note-title">알아 두면 좋은 것</div>
        <div class="setup-note-body">이번 주에 실제 업무로 한 번 돌리지 않으면 오늘 만든 도구는 대개 그대로 잊힙니다. 한 번만 돌리면 그 뒤로는 저절로 씁니다.</div>
      </div>
    </div>
  </div>
</section>

### 여기까지 하면

- 도구를 3분 안에 설명하고 시연할 수 있습니다.
- 받은 피드백 중 하나를 실제로 반영했습니다.
- 이름과 날짜가 붙은 최종본이 부서 폴더에 저장됐습니다.
- 오늘 이후 한 달 동안 무엇을 할지 적혀 있습니다.
`,contentEn:`**50 minutes. The output is the final tool and a one-month plan.**

Show the tool in three minutes, capture the feedback, fix one item on the spot, then name and store the final version.

<div class="guide-walk-flow">
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">1</span>One slide</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">2</span>Demo order</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">3</span>Feedback table</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">4</span>Fix one item</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">5</span>Save the final</span>
  <span class="guide-walk-flow-item"><span class="guide-walk-flow-no">6</span>One-month plan</span>
</div>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 1</span>
    <span class="setup-step-crumb">Presentation · Slide</span>
  </div>
  <h3 class="setup-step-title">Make a single presentation slide</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s8-1-slide.svg" alt="A one-slide summary with now, tool, effect, and rollout" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>One slide that lands in three minutes.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>Put the <b>result</b> in the title line.</div></li>
        <li><span class="setup-action-no">2</span><div>Write only four lines: now, tool, effect, rollout.</div></li>
        <li><span class="setup-action-no">3</span><div>Add your team and name at the bottom.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>I want to add more</b><span>Past five lines you will not finish in three minutes. Save the rest for questions.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 2</span>
    <span class="setup-step-crumb">Presentation · Demo order</span>
  </div>
  <h3 class="setup-step-title">Fix the demo order in five lines</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s8-2-demo-order.svg" alt="A five-step demo order with seconds allocated to each step" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>Without a fixed order you will lose your way mid-demo.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>Show the source and point at the problem rows — the most important 30 seconds.</div></li>
        <li><span class="setup-action-no">2</span><div>Click the menu.</div></li>
        <li><span class="setup-action-no">3</span><div>Read the count aloud.</div></li>
        <li><span class="setup-action-no">4</span><div>Show the result sheets in order.</div></li>
        <li><span class="setup-action-no">5</span><div>Finish by showing the source is unchanged.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>What if it errors during the demo</b><span>Show it. "Here is how I fix this" makes a better demo.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 3</span>
    <span class="setup-step-crumb">Feedback · Capture</span>
  </div>
  <h3 class="setup-step-title">Write feedback into a table on the spot</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s8-3-feedback.svg" alt="A feedback table with source, decision, and timing columns" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>Do not rely on memory.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>Write what was said <b>verbatim</b>.</div></li>
        <li><span class="setup-action-no">2</span><div>Note <b>who</b> said it.</div></li>
        <li><span class="setup-action-no">3</span><div>Classify as fix now, later, or note in the plan.</div></li>
        <li><span class="setup-action-no">4</span><div>Limit fix-now items to one or two.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>It feels like criticism</b><span>It means people care. Silence is worse.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 4</span>
    <span class="setup-step-crumb">AI tool · Apply</span>
  </div>
  <h3 class="setup-step-title">Fix one item on the spot</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s8-4-apply-fix.svg" alt="A request to change one sort rule with the changed line shown" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>One change at a time.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>Pick <b>one</b> item.</div></li>
        <li><span class="setup-action-no">2</span><div>Say what to change while <b>keeping everything else</b>.</div></li>
        <li><span class="setup-action-no">3</span><div>Ask for the changed lines first, then the full code.</div></li>
        <li><span class="setup-action-no">4</span><div>Paste, run, and repeat the session 5 comparison.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>The fix broke something else</b><span>Common. Hand over the error and ask it to preserve previous behaviour.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 5</span>
    <span class="setup-step-crumb">Google Drive · Final</span>
  </div>
  <h3 class="setup-step-title">Name it and store it in the team folder</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s8-5-save-final.svg" alt="Making a named, dated copy into the team folder" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>A copy per version means you can always go back.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div>Choose <b>File → Make a copy</b>.</div></li>
        <li><span class="setup-action-no">2</span><div>Include <b>date and version</b> in the name.</div></li>
        <li><span class="setup-action-no">3</span><div>Store it in the <b>team shared folder</b>, not your personal drive.</div></li>
        <li><span class="setup-action-no">4</span><div>Reset sharing to Restricted — it does not carry over to copies.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>There is no team folder</b><span>Create one today. One folder saves ten tools.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="setup-card guide-walk-step">
  <div class="setup-step-head">
    <span class="setup-step-no">STEP 6</span>
    <span class="setup-step-crumb">Wrap-up · One month</span>
  </div>
  <h3 class="setup-step-title">Write what you will do over the next month</h3>
  <div class="setup-step-grid">
    <div class="setup-step-visual">
      <figure class="guide-walk-shot">
        <img src="~/automation/steps/s8-6-next-month.svg" alt="A plan listing actions from this week through one month" loading="lazy" />
      </figure>
    </div>
    <div class="setup-step-side">
      <div class="setup-goal">
        <span class="setup-goal-label">Goal of this step</span>
        <p>Make sure today’s tool does not get forgotten.</p>
      </div>
      <ol class="setup-actions">
        <li><span class="setup-action-no">1</span><div><b>This week</b> — run it on real work once and log the first row.</div></li>
        <li><span class="setup-action-no">2</span><div><b>Week 2</b> — teach the backup person in five minutes.</div></li>
        <li><span class="setup-action-no">3</span><div><b>Week 3</b> — demo it at the team meeting using today’s slide.</div></li>
        <li><span class="setup-action-no">4</span><div><b>Within a month</b> — fix one "later" item from the feedback table.</div></li>
      </ol>
      <div class="setup-note setup-note-stuck">
        <div class="setup-note-title">If your screen looks different</div>
        <div class="setup-note-body">
          <ul class="setup-stuck-list">
            <li><b>What if I get stuck next month</b><span>Come back to the matching step on this page. It stays available.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

### When you finish

- You can explain and demo the tool in three minutes.
- You have applied one piece of feedback for real.
- The final version is named, dated, and stored in a shared folder.
- You know what to do over the next month.
`},y={id:"auto-07",icon:"fa-diagram-project",title:"7·8교시 16:00~18:00 · 부서 적용계획 작성",titleEn:"Sessions 7-8 — Rollout Plan",sections:[{title:"7교시 16:00~17:00 · 적용계획서 작성",titleEn:"Session 7 — Writing the Plan",content:`### 이 시간에 하는 일

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
| "만든 사람이 가면 어떡하나" | 프롬프트와 설계서를 함께 보관합니다. 다시 만들 수 있습니다 |`,contentEn:`### Session 7

Write the plan to put your tool into department use. **Deliverable: rollout plan.**

### The plan sheet

Tool name, target task, users, start date, **estimated time saved** (from session 2), review procedure, support needed, **spread potential**, risks.

### Assessing spread

Same department other tasks, other departments same task, swap the input data, extend the chain forward or backward.

### Have the AI review the plan

Ask what is missing, what resistance to expect with realistic responses, whether the savings estimate is reasonable, and three directions to expand.

### Common objections

"Who is responsible if it's wrong" — show the four review checkpoints and total reconciliation. "Is it safe to upload data" — sheet data never leaves; only structure was shared. "I couldn't use it" — one button plus a one-page guide. "It works fine now" — answer with the number.`},m,{title:"8교시 17:00~18:00 · 발전 아이디어 · 공유 · 피드백",titleEn:"Session 8 — Ideas, Sharing, Feedback",content:`### 이 시간에 하는 일

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
→ [실습 사례집으로](/automation)`,contentEn:`### Session 8

Develop contest or innovation-project ideas, share results, and collect feedback. **Deliverable: final plan with improvements.**

### Growing it into an innovation project

Judges look for a real measured problem, numeric effect, reproducibility, spread potential, and durability. Ask an AI acting as a judge for strengths, weaknesses, likely questions, and title options.

### Sharing

Ask a neighbor: could your division use this, could you run it from the guide alone, what do you think would break.

### Final checklist

Task definition, design and prompt, **working tool**, error checklist and security notes, one-page user guide, rollout plan, improvements and a three-week plan.`},k]},A={id:"auto-08",icon:"fa-list-check",title:"실습 사례집 · 부서별 적용",titleEn:"Case Library by Division",sections:[{title:"따라하기 실습 · 사례를 내 업무로 바꿔 쓰기",titleEn:"Hands-on — Adapting a Case to Your Own Work",content:`**소요 40분 · 준비물: 내 부서의 실제 반복 업무 자료 1건(개인정보 지운 복사본)**
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

> 9개가 채워지면 **사례집이 내 부서 사례집이 됩니다.** 다음 절에서 6개 부서 사례를 골라 이 절차를 적용하세요.`,contentEn:`**40 minutes · You need one real recurring work file (a copy with personal data removed)**
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

> Nine checks turn the case library into **your division's case library.**`},{title:"내 부서 업무로 골라 쓰기",titleEn:"Pick the Case That Matches Your Work",content:`2교시에 고를 업무가 떠오르지 않으면 여기서 찾으세요. **대구시 부서에서 실제로 반복되는 업무**를 기준으로 정리했습니다.

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

> 위에 없는 업무라도 **입력 → 규칙 → 출력** 이 정해져 있으면 같은 방식으로 됩니다. 3교시 프롬프트 틀에 내 업무를 넣으면 됩니다.`,contentEn:`If nothing comes to mind in session 2, pick from here. Each case ships a ready prompt — change only the sheet names and columns.

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

> Any task with a fixed **input → rule → output** works the same way.`},{title:"따라하기 — 류승인 주무관 도구 직접 써보기",titleEn:"Walkthrough — A Serving Officer Tools",content:`오늘 만든 도구가 **어디까지 갈 수 있는지** 직접 확인합니다. 광진구 류승인 주무관이 현직 공무원 신분으로 만들어 공개한 도구들입니다.

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

> 처음부터 12개를 만든 사람은 없습니다. **매주 30분씩 잡아먹는 일 하나**부터입니다. 오늘 그 하나를 만들었습니다.`,contentEn:`See how far this goes — tools built and published by Ryu Seung-in, a serving public officer in Gwangjin-gu.

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

Nobody built twelve at once. It starts with **the one task that eats 30 minutes a week** — which you built today.`}]};function x(){const{language:e}=t(),n=e==="ko";return s.jsx(i,{seoTitle:"행정업무 자동화",seoTitleEn:"Administrative Automation",seoDescription:"바이브코딩 기반 행정업무 자동화 도구 제작 — 1일 8시간 과정. 교시별 따라하기 실습과 대구시 부서별 사례집",path:"/automation",hero:{icon:"fa-gears",color:"#0E6BA8",eyebrow:"행정업무 자동화 · 1일 8시간",eyebrowEn:"Administrative Automation · 1 Day, 8 Hours",title:"행정업무 자동화",titleEn:"Administrative Automation",tagline:"반복 업무 하나를 골라 버튼 하나로 도는 도구 만들기",taglineEn:"Turn one repetitive task into a one-click tool",desc:"코딩을 배우는 과정이 아닙니다. 매주 반복하는 업무를 AI에게 말로 설명해 자동화 도구로 만들고, 부서에 적용할 계획서까지 완성하는 1일 과정입니다.",descEn:"This is not a coding course. Describe a weekly repetitive task to AI, turn it into a working tool, and finish with a rollout plan for your department — all in one day.",meta:[{icon:"fa-user-check",text:"대구광역시 공무원",textEn:"Daegu city officials"},{icon:"fa-layer-group",text:"8교시 · 사례집 포함",textEn:"8 sessions + case book"},{icon:"fa-signal",text:"입문 (코딩 지식 불필요)",textEn:"Beginner (no coding needed)"}],note:"프로그래밍을 몰라도 됩니다. 화면에 나오는 순서를 그대로 따라 하시면 되고, 막히면 그 자리에서 손을 드세요.",noteEn:"No programming background required — follow the on-screen steps in order, and raise your hand whenever you get stuck."},dataFiles:[l,o,c,r,h,b,f,y,A],ctaBanner:s.jsxs("div",{className:"prompt-practice-cta",children:[s.jsxs("div",{className:"prompt-practice-cta-text",children:[s.jsx("h3",{children:n?"이 과정을 처음 보신다면":"New to this course?"}),s.jsx("p",{children:n?"위 목차의 「과정 개요 · 시간표」부터 순서대로 보세요. 각 교시는 그대로 따라 하면 되는 단계로 되어 있습니다.":'Start with "Overview & Schedule" above. Each session is written as steps you can follow directly.'})]}),s.jsxs(a,{to:"/prompt-eval",className:"prompt-practice-cta-btn",children:[s.jsx("i",{className:"fa-solid fa-keyboard"}),n?"프롬프트 기초 먼저 보기":"Prompt basics first"]})]})})}export{x as default};

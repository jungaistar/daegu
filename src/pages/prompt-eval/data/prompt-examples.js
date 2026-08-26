export default {
  id: 'prompt-examples',
  icon: 'fa-list-check',
  title: '실전 예시 & 실습',
  titleEn: 'Examples & Practice',
  sections: [
    {
      title: '문서 업무 프롬프트 예시',
      titleEn: 'Document Task Prompt Examples',
      content: `공문·보도자료·회의록 업무에서 실제로 쓰는 프롬프트와 그 평가입니다.

### 공문·보도자료 프롬프트

**예시 1: 행사 안내 공문 초안**

| 항목 | 내용 |
|------|------|
| 프롬프트 | "너는 대구광역시청 행정 담당자야. 다음 정보로 정중하고 간결한 안내 공문을 작성해줘. 행사명: 생성형 AI 업무활용 특강 / 일시: 7월 15일(화) 14:00 / 장소: 시청 별관 대강당 / 대상: 본청·구청 공무원 / 형식: 제목·수신·본문·붙임 순." |
| 평가 점수 | S: 18 / C: 17 / O: 18 / R: 16 / E: 17 = **86점 (A등급)** |
| 강점 | 역할·정보·형식·어투가 모두 명시되어 재작성이 거의 필요 없음 |
| 개선점 | "본문 3문단 이내" 같은 분량 제약을 추가하면 더 안정적 |

**예시 2: 시정 보도자료 초안**

| 항목 | 내용 |
|------|------|
| 프롬프트 | "아래 핵심 내용으로 시정 보도자료 초안을 작성해줘. 형식: 헤드라인 → 리드문(육하원칙) → 본문 3문단 → 담당부서 연락처. 어투는 공공기관 보도자료 톤으로. (핵심 내용 붙여넣기)" |
| 평가 점수 | S: 17 / C: 16 / O: 19 / R: 15 / E: 18 = **85점 (A등급)** |
| 강점 | 보도자료 고유 구조(리드문·육하원칙)를 직접 지정 |
| 개선점 | "확인되지 않은 수치는 [확인 필요]로 표시" 제약 추가 권장 |

**예시 3: 회의록을 실행 항목으로**

| 항목 | 내용 |
|------|------|
| 프롬프트 | "아래 회의록을 (1) 결정사항 3가지 (2) 담당자별 할 일을 담당자/할 일/기한 표로 정리해줘. (회의록 텍스트 붙여넣기)" |
| 평가 점수 | S: 18 / C: 14 / O: 19 / R: 12 / E: 18 = **81점 (A등급)** |
| 강점 | 산출물 개수와 표 열 구성까지 지정해 형식이 흔들리지 않음 |
| 개선점 | 역할 부여("회의 주재자로서")와 회의 성격 맥락을 추가하면 판단 품질 상승 |

### 검토·개선 프롬프트

| 용도 | 프롬프트 | 등급 |
|------|---------|------|
| 결과물 검토 | "AI가 만든 공문·보고서를 그대로 쓰기 전에 점검해야 할 항목(사실 확인, 개인정보, 보안, 어투)을 공무원용 체크리스트로 만들어줘" | A |
| 시민 눈높이 점검 | "너는 이 안내문을 처음 읽는 60대 시민이야. 이해하기 어려운 표현과 빠진 정보를 찾아서 알려줘" | S |
| 어투 교정 | "이 문서의 행정 용어와 한자어를 시민이 이해하기 쉬운 표현으로 바꿔줘. 의미가 달라지는 부분은 따로 표시해줘" | A |

> 문서 업무에서는 **역할 → 정보 → 형식 → 어투 → 제약** 순으로 쌓아 올리면 대부분 한 번에 쓸 만한 초안이 나옵니다.`,
      contentEn: `Prompts actually used for official documents, press releases, and meeting minutes — with evaluations.

### Document Prompts

**Example 1: Event Announcement Draft**

| Item | Content |
|------|---------|
| Prompt | "You are an administrative officer at Daegu City Hall. Draft a courteous, concise announcement. Event: Generative AI at Work lecture / When: July 15 (Tue) 2pm / Where: City Hall Annex Hall / Audience: city and district officials / Format: title, recipient, body, attachments." |
| Score | S: 18 / C: 17 / O: 18 / R: 16 / E: 17 = **86 (Grade A)** |
| Strength | Role, facts, format, and tone all specified — little rework needed |
| Improvement | Add a length constraint such as "body within 3 paragraphs" |

**Example 2: City Press Release Draft**

| Item | Content |
|------|---------|
| Prompt | "Draft a city press release from the content below. Format: headline → lead (5W1H) → 3 body paragraphs → department contact. Public-institution tone." |
| Score | S: 17 / C: 16 / O: 19 / R: 15 / E: 18 = **85 (Grade A)** |
| Strength | Specifies press-release-specific structure |
| Improvement | Add "mark unverified figures as [needs verification]" |

**Example 3: Minutes to Action Items**

| Item | Content |
|------|---------|
| Prompt | "From the minutes below, produce (1) 3 decisions (2) a table of tasks by owner with owner/task/deadline." |
| Score | S: 18 / C: 14 / O: 19 / R: 12 / E: 18 = **81 (Grade A)** |
| Strength | Output count and table columns specified — format stays stable |
| Improvement | Add a role and meeting context to improve judgment quality |

### Review Prompts

| Purpose | Prompt | Grade |
|---------|--------|-------|
| Output review | "Make a public-official checklist of what to verify before using an AI-drafted document: facts, personal data, security, tone" | A |
| Citizen check | "You are a 60-year-old citizen reading this notice for the first time. Point out hard wording and missing information" | S |
| Tone correction | "Replace bureaucratic jargon with citizen-friendly wording; flag anywhere the meaning shifts" | A |

> Build document prompts in this order: **role → facts → format → tone → constraints**.`,
    },
    {
      title: '데이터·자동화·홍보 프롬프트 예시',
      titleEn: 'Data, Automation & PR Prompt Examples',
      content: `엑셀 집계, 시트 자동화, 정책 홍보 업무의 프롬프트 예시입니다.

### ChatGPT 데이터 분석 프롬프트

**예시 1: 민원 데이터 자동 분석**

| 항목 | 내용 |
|------|------|
| 프롬프트 | "월별 민원 접수 현황 엑셀 파일을 올릴게. (1) 가장 많은 민원 유형 5가지 (2) 월별 추이 그래프 (3) 눈에 띄는 변화에 대한 한 문단 분석을 만들어줘." |
| 평가 점수 | S: 18 / C: 15 / O: 19 / R: 13 / E: 18 = **83점 (A등급)** |
| 강점 | 산출물 세 가지를 번호로 나눠 지정 — 빠뜨림 없이 나옴 |
| 개선점 | 분석 기간과 "개인정보 열은 제외했음"을 명시하면 더 안전 |

**예시 2: 예산 집행 인사이트**

| 항목 | 내용 |
|------|------|
| 프롬프트 | "부서별 예산 집행 데이터를 분석해서 집행률이 낮은 부서 3곳과 그 원인으로 추정되는 점, 그리고 보고서에 쓸 수 있는 요약 문장 3개를 만들어줘." |
| 평가 점수 | S: 17 / C: 14 / O: 18 / R: 12 / E: 17 = **78점 (B등급)** |
| 강점 | 분석에서 그치지 않고 보고서 문장까지 요구 |
| 개선점 | "추정과 사실을 구분해서 써줘" 제약이 없어 단정적 서술이 섞일 위험 |

### Apps Script 바이브코딩 프롬프트

**예시 3: 집계 자동화 스크립트**

| 항목 | 내용 |
|------|------|
| 프롬프트 | "구글 시트에 부서별·월별 예산 집행액이 들어있어. 부서별 합계와 집행률을 자동 계산해서 새 시트에 요약표로 만들어주는 Google Apps Script를 작성하고, 사용법을 단계별로 알려줘." |
| 평가 점수 | S: 19 / C: 17 / O: 18 / R: 14 / E: 19 = **87점 (A등급)** |
| 강점 | 데이터 구조·원하는 결과·결과 위치·사용법까지 한 번에 지정 |
| 개선점 | 열 위치(A열 부서명 등)를 밝히면 수정 왕복이 사라짐 |

**예시 4: 오류 자동 디버깅**

| 항목 | 내용 |
|------|------|
| 프롬프트 | "아래 Apps Script를 실행하니 에러가 났어. 원인을 쉽게 설명하고, 고친 전체 코드를 다시 보여줘. (코드와 에러 메시지 붙여넣기)" |
| 평가 점수 | S: 18 / C: 18 / O: 19 / R: 12 / E: 18 = **85점 (A등급)** |
| 강점 | "쉽게 설명" + "고친 전체 코드" — 비전공자가 바로 쓸 수 있는 형태를 지정 |
| 개선점 | 역할("초보자에게 설명하는 개발자로서")을 추가하면 설명 눈높이가 안정 |

### 정책 홍보 콘텐츠 프롬프트

| 용도 | 프롬프트 | 등급 |
|------|---------|------|
| 카드뉴스 | "대구시 청년 일자리 지원사업을 홍보하는 5장짜리 카드뉴스 문구를 만들어줘. 각 장: 한 줄 헤드라인 + 두 줄 설명. 어투는 시민에게 친근하게" | A |
| 플랫폼 변환 | "아래 보도자료를 (1) 인스타그램 게시물 (2) 카카오채널 메시지 (3) 블로그 글 도입부로 각각 변환해줘. 각 플랫폼 특성에 맞게 길이와 어투를 조정해줘" | S |
| 숏폼 스크립트 | "위 정책을 알리는 30초 숏폼 영상 스크립트를 만들어줘. 장면별 자막 + 나레이션 + 화면 설명 형식으로" | A |

### 업무 설계 프롬프트

| 용도 | 프롬프트 | 등급 |
|------|---------|------|
| 자동화 흐름 설계 | "내가 매주 반복하는 업무를 알려줄게. 이 중 AI로 자동화할 수 있는 단계를 찾아, '현재 방식 → 자동화 방식 → 사용 도구 → 예상 절감시간'을 표로 정리해줘" | S |
| 도구 선택 기준 | "공무원 업무 유형(문서작성·데이터분석·홍보·반복작업)별로 ChatGPT·Claude·Opal/Canva·Apps Script 중 무엇을 쓰면 좋은지 기준표를 만들어줘. 선택 이유도 한 줄씩" | A |
| 실행계획 | "오늘 배운 AI 업무자동화를 실제 업무에 적용하기 위한 3주 실행계획을 주차별 목표·할 일·점검 항목으로 표를 만들어줘" | A |

> 데이터·자동화 프롬프트는 **데이터가 어떻게 생겼는지**를 말해주는 것이 절반입니다. 시트 이름, 열 구성, 원하는 결과 위치를 함께 적으세요.`,
      contentEn: `Prompt examples for spreadsheet analysis, sheet automation, and policy PR.

### ChatGPT Data Analysis Prompts

**Example 1: Complaint Data Analysis**

| Item | Content |
|------|---------|
| Prompt | "I'll upload monthly complaint records. Produce (1) the top 5 complaint types (2) a monthly trend chart (3) a one-paragraph analysis of notable changes." |
| Score | S: 18 / C: 15 / O: 19 / R: 13 / E: 18 = **83 (Grade A)** |
| Strength | Three numbered deliverables — nothing gets dropped |
| Improvement | State the period and that personal-data columns were removed |

**Example 2: Budget Execution Insight**

| Item | Content |
|------|---------|
| Prompt | "Analyze budget execution by department: name 3 departments with low execution, likely causes, and 3 summary sentences for the report." |
| Score | S: 17 / C: 14 / O: 18 / R: 12 / E: 17 = **78 (Grade B)** |
| Strength | Goes past analysis to report-ready sentences |
| Improvement | Missing "distinguish estimates from facts" — risks assertive claims |

### Apps Script Vibe Coding Prompts

**Example 3: Aggregation Script**

| Item | Content |
|------|---------|
| Prompt | "A Google Sheet holds budget execution by department and month. Write an Apps Script that computes department totals and execution rates into a new summary sheet, and explain usage step by step." |
| Score | S: 19 / C: 17 / O: 18 / R: 14 / E: 19 = **87 (Grade A)** |
| Strength | Data shape, result, destination, and usage all specified |
| Improvement | Naming the columns removes a round of corrections |

**Example 4: Error Debugging**

| Item | Content |
|------|---------|
| Prompt | "Running this Apps Script raised an error. Explain the cause simply and show the corrected full code." |
| Score | S: 18 / C: 18 / O: 19 / R: 12 / E: 18 = **85 (Grade A)** |
| Strength | "Explain simply" + "full corrected code" — directly usable by a non-developer |
| Improvement | Add a role to stabilize the explanation level |

### Policy PR Prompts

| Purpose | Prompt | Grade |
|---------|--------|-------|
| Card news | "Write 5-slide card news copy for Daegu's youth jobs program: one-line headline + two-line description per slide, friendly tone" | A |
| Platform conversion | "Convert the press release below into (1) an Instagram post (2) a KakaoTalk channel message (3) a blog intro, adjusting length and tone per platform" | S |
| Short-form | "Write a 30-second short-form script for this policy: per-scene captions + narration + visual notes" | A |

### Work Design Prompts

| Purpose | Prompt | Grade |
|---------|--------|-------|
| Automation flow | "I'll describe my weekly recurring tasks. Identify steps AI can automate and tabulate 'current way → automated way → tool → estimated time saved'" | S |
| Tool selection | "Build a criteria table for choosing among ChatGPT, Claude, Opal/Canva, and Apps Script by task type, with a one-line reason each" | A |
| Action plan | "Create a 3-week plan to apply what I learned, with weekly goals, tasks, and checkpoints" | A |

> For data and automation prompts, **describing the data shape** is half the work.`,
    },
    {
      title: '실습 과제',
      titleEn: 'Practice Exercises',
      content: `프롬프트 작성 능력을 향상시키기 위한 단계별 실습 과제입니다. 모두 대구시 공무원 업무를 소재로 합니다.

### 초급 실습 (Level 1)

| # | 과제 | 목표 | 평가 포인트 |
|---|------|------|-----------|
| 1 | "행사 안내 공문" 프롬프트를 SCORE 80점 이상으로 작성 | 구체성 + 맥락 연습 | 수신 대상·일시·장소·형식 지정 여부 |
| 2 | 나쁜 프롬프트 3개("공문 써줘" 등)를 찾아 개선 버전 작성 | 비교 분석 능력 | Before/After 점수 차이 |
| 3 | 같은 요청을 Zero-shot과 Few-shot(기존 공문 2건 첨부)으로 각각 작성 | 기법 차이 이해 | 형식 일치도 비교 |

### 중급 실습 (Level 2)

| # | 과제 | 목표 | 평가 포인트 |
|---|------|------|-----------|
| 1 | 하나의 시정 사업을 공문·보도자료·카드뉴스 프롬프트로 각각 변환 | 문서 유형별 특화 | 각 형식 특성에 맞는 지시 |
| 2 | Chain-of-Thought를 적용한 예산 데이터 분석 프롬프트 작성 | CoT 기법 실습 | 단계 구분의 논리성 |
| 3 | 시트 자동화 요청 프롬프트에 데이터 구조(시트명·열)를 명시해 작성 | 자동화 지시 능력 | 재질문 없이 실행 가능한 코드가 나오는지 |

### 고급 실습 (Level 3)

| # | 과제 | 목표 | 평가 포인트 |
|---|------|------|-----------|
| 1 | 동료의 프롬프트를 SCORE 기준으로 평가하고 피드백 문서 작성 | 평가 능력 | 기준별 구체적 점수와 근거 |
| 2 | 우리 부서 업무를 위한 재사용 프롬프트 템플릿 3개 설계 | 템플릿 설계 | 범용성, 빈칸 교체 용이성 |
| 3 | 페르소나 체이닝(기획→행정→공보→감사→시민)으로 안내문 한 건 완성 | 고급 기법 실습 | 단계별 개선 폭이 드러나는지 |

### 팀 실습 과제

| 과제명 | 인원 | 시간 | 내용 |
|--------|------|------|------|
| 프롬프트 배틀 | 2인 | 30분 | 같은 공문 과제를 각자 프롬프트로 작성 → 결과 비교 → 상호 평가 |
| 릴레이 개선 | 3-4인 | 45분 | 한 명이 초안 작성 → 다음 사람이 개선 → 최종 점수 측정 |
| 업무 자동화 워크숍 | 4-6인 | 2시간 | 부서 실제 반복업무 3개를 프롬프트로 해결 → 팀별 발표 |
| 평가 워크숍 | 전체 | 1시간 | 수집된 프롬프트를 SCORE 루브릭으로 그룹 평가 |

### 실습 평가 기준

| 등급 | 조건 | 역량 수준 |
|------|------|----------|
| Master | 모든 실습 SCORE 90+ 달성 | 부서 내 프롬프트 코치 가능 |
| Expert | Level 3 실습 SCORE 85+ 달성 | 팀 내 프롬프트 리더 |
| Advanced | Level 2 실습 SCORE 80+ 달성 | 독립적 프롬프트 작성 가능 |
| Intermediate | Level 1 실습 SCORE 70+ 달성 | 기본 프롬프트 작성 가능 |
| Beginner | Level 1 실습 진행 중 | 학습 초기 단계 |

### 실습 전 공통 점검

| 항목 | 확인 |
|------|------|
| 개인정보 | 이름·연락처·주소·주민번호를 가명 또는 더미 데이터로 교체했는가 |
| 비공개 자료 | 대외비·내부 검토 중인 문서를 그대로 올리지 않았는가 |
| 사실 확인 | 결과에 나온 통계·법령·사업명을 원자료로 대조했는가 |

> 실습은 혼자보다 동료와 함께할 때 더 빠르게 성장합니다. 팀 실습을 적극 활용하세요.`,
      contentEn: `Step-by-step exercises to improve prompt writing — all based on Daegu public-service tasks.

### Beginner Exercises (Level 1)

| # | Exercise | Goal | Evaluation Point |
|---|----------|------|------------------|
| 1 | Write an "event announcement" prompt scoring SCORE 80+ | Specificity + context | Are audience, time, place, format specified |
| 2 | Find 3 bad prompts and write improved versions | Comparative analysis | Before/after score gap |
| 3 | Write the same request as Zero-shot and as Few-shot (with 2 sample documents) | Understand technique differences | Format consistency |

### Intermediate Exercises (Level 2)

| # | Exercise | Goal | Evaluation Point |
|---|----------|------|------------------|
| 1 | Convert one city program into document, press release, and card news prompts | Format specialization | Instructions fit each format |
| 2 | Write a budget-analysis prompt using Chain-of-Thought | CoT practice | Logic of the step breakdown |
| 3 | Write a sheet-automation prompt specifying sheet name and columns | Automation instruction | Does runnable code come back without follow-up |

### Advanced Exercises (Level 3)

| # | Exercise | Goal | Evaluation Point |
|---|----------|------|------------------|
| 1 | Evaluate a colleague's prompt with SCORE and write feedback | Evaluation skill | Per-criterion scores with reasons |
| 2 | Design 3 reusable prompt templates for your department | Template design | Generality, ease of substitution |
| 3 | Complete one notice via persona chaining (planner→officer→press→auditor→citizen) | Advanced technique | Visible improvement per stage |

### Team Exercises

| Name | People | Time | Content |
|------|--------|------|---------|
| Prompt battle | 2 | 30 min | Same task, separate prompts → compare → peer review |
| Relay improvement | 3-4 | 45 min | Draft → next person improves → final score |
| Automation workshop | 4-6 | 2 hr | Solve 3 real recurring tasks with prompts → team presentations |
| Evaluation workshop | All | 1 hr | Group-evaluate collected prompts with the SCORE rubric |

### Practice Evaluation Criteria

| Grade | Condition | Competency |
|-------|-----------|-----------|
| Master | All exercises SCORE 90+ | Can coach prompts in the department |
| Expert | Level 3 SCORE 85+ | Team prompt leader |
| Advanced | Level 2 SCORE 80+ | Writes prompts independently |
| Intermediate | Level 1 SCORE 70+ | Writes basic prompts |
| Beginner | Level 1 in progress | Early learning stage |

### Pre-Practice Checks

| Item | Check |
|------|-------|
| Personal data | Names, contacts, addresses, ID numbers replaced with dummies |
| Confidential material | No restricted or under-review documents uploaded as-is |
| Fact check | Statistics, laws, program names cross-checked against sources |

> You improve faster with colleagues than alone — use the team exercises.`,
    },
  ],
};

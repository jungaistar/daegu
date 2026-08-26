import{C as o,l as e,L as a}from"./index-Cg4_QEuX.js";import{G as r}from"./GuidePage-CZ5pNkBn.js";import{P as n}from"./PromptEvalNav-BweL7SHn.js";/* empty css                 */import"./SEOHead-4lO7HTjQ.js";import"./index-nGRoBTTF.js";import"./index-B35xVzAC.js";const s={id:"prompt-basics",icon:"fa-lightbulb",title:"프롬프트 기초",titleEn:"Prompt Fundamentals",sections:[{title:"프롬프트란 무엇인가",titleEn:"What is a Prompt",content:`AI 모델에게 원하는 결과를 얻기 위해 전달하는 입력 텍스트를 **프롬프트(Prompt)**라고 합니다.

### 프롬프트의 정의

프롬프트는 단순한 질문이 아니라, AI와의 **소통 인터페이스**입니다. 좋은 프롬프트는 명확한 지시, 충분한 맥락, 원하는 출력 형식을 포함합니다.

공문 한 건을 부하 직원에게 맡길 때를 떠올리면 쉽습니다. "공문 하나 써줘"라고만 하면 되돌아오는 초안을 다시 고쳐야 합니다. 누가 받는 문서인지, 무슨 근거로 쓰는지, 어떤 형식이어야 하는지를 함께 주면 한 번에 쓸 만한 초안이 나옵니다. AI도 똑같습니다.

### 프롬프트의 4대 구성요소

| 구성요소 | 설명 | 대구시 업무 예시 |
|---------|------|----------------|
| **역할(Role)** | AI에게 부여할 전문가 역할 | "너는 대구광역시청 행정 담당자야" |
| **맥락(Context)** | 배경 정보 및 상황 설명 | "본청·구청 공무원 대상 특강을 안내하는 상황에서..." |
| **지시(Instruction)** | 수행할 구체적 작업 | "안내 공문 초안을 작성해줘" |
| **출력형식(Format)** | 원하는 응답 형태 | "제목 / 수신 / 본문 / 붙임 순서로" |

### 도구별 프롬프트 유형

이 과정에서 쓰는 네 가지 도구는 프롬프트를 넣는 자리와 기대하는 결과가 서로 다릅니다.

| 유형 | 사용 도구 | 특징 |
|------|----------|------|
| 문서 프롬프트 | ChatGPT · Claude | 공문·보도자료·회의록 초안을 자연어로 지시 |
| 데이터 프롬프트 | ChatGPT 데이터 분석 | 엑셀 파일을 올리고 집계·차트·해석을 자연어로 요청 |
| 코드 프롬프트 | Claude → Google Apps Script | 시트 자동화 스크립트를 생성시키고 붙여넣어 실행 (바이브코딩) |
| 콘텐츠 프롬프트 | Opal · Canva | 카드뉴스·숏폼 문구와 디자인 초안을 생성 |

### 공무원 업무에서 특히 중요한 것

| 항목 | 이유 |
|------|------|
| 개인정보 제외 | 주민번호·연락처·주소가 든 원본을 그대로 붙여넣지 않는다 |
| 사실 확인 | AI가 지어낸 통계·법령·사업명이 공문에 그대로 들어가면 안 된다 |
| 공공 문서 어투 | 시민에게 나가는 글은 정중하고 명확한 공공기관 톤을 지정한다 |

> 좋은 프롬프트의 핵심은 **구체성**, **명확성**, **맥락 제공** 세 가지입니다.`,contentEn:`The input text you provide to an AI model to get desired results is called a **Prompt**.

### Definition of a Prompt

A prompt is not just a simple question — it's a **communication interface** with AI. Good prompts include clear instructions, sufficient context, and desired output format.

### Four Core Components of a Prompt

| Component | Description | Daegu Work Example |
|-----------|-------------|--------------------|
| **Role** | Expert role assigned to AI | "You are an administrative officer at Daegu City Hall" |
| **Context** | Background information and situation | "Announcing a special lecture to city and district officials..." |
| **Instruction** | Specific task to perform | "Draft the announcement document" |
| **Format** | Desired response format | "In the order: title / recipient / body / attachments" |

### Prompt Types by Tool

| Type | Tool | Characteristics |
|------|------|-----------------|
| Document prompts | ChatGPT · Claude | Draft official documents, press releases, meeting minutes |
| Data prompts | ChatGPT Data Analysis | Upload spreadsheets, request aggregation, charts, interpretation |
| Code prompts | Claude → Google Apps Script | Generate sheet automation scripts, paste and run (vibe coding) |
| Content prompts | Opal · Canva | Generate card news and short-form copy with design drafts |

### What Matters Most for Public Officials

| Item | Why |
|------|-----|
| Exclude personal data | Never paste raw records containing ID numbers, phone numbers, addresses |
| Verify facts | Fabricated statistics, laws, or program names must not reach an official document |
| Public-sector tone | Specify a courteous, clear public-institution tone for citizen-facing text |

> The keys to good prompts are **specificity**, **clarity**, and **context**.`},{title:"프롬프트 작성 원칙",titleEn:"Prompt Writing Principles",content:`효과적인 프롬프트를 작성하기 위한 핵심 원칙을 알아봅니다.

### CLEAR 프레임워크

| 원칙 | 설명 | 실천 방법 |
|------|------|----------|
| **C**oncise (간결) | 불필요한 표현 제거 | 핵심 키워드 중심으로 작성 |
| **L**ogical (논리적) | 단계적·구조적 지시 | 번호 매기기, 순서 지정 |
| **E**xplicit (명시적) | 모호함 배제 | 구체적 수치, 범위 지정 |
| **A**daptive (적응적) | 결과 기반 반복 개선 | 출력 확인 후 프롬프트 조정 |
| **R**ole-based (역할 기반) | 전문가 역할 부여 | "~의 관점에서" 지정 |

### 좋은 프롬프트 vs 나쁜 프롬프트

| 구분 | 나쁜 예시 | 좋은 예시 |
|------|----------|----------|
| 공문 작성 | "공문 써줘" | "너는 대구광역시청 행정 담당자야. 7월 15일(화) 14:00 시청 별관 대강당에서 열리는 'AI 업무활용 특강'을 본청·구청 공무원에게 알리는 안내 공문을 제목/수신/본문/붙임 순으로 작성해줘" |
| 보도자료 | "보도자료 만들어줘" | "아래 내용으로 시정 보도자료 초안을 써줘. 헤드라인 → 리드문(육하원칙) → 본문 3문단 → 담당부서 연락처 순서로, 공공기관 보도자료 톤으로" |
| 엑셀 자동화 | "엑셀 정리해줘" | "구글 시트에 부서별·월별 예산 집행액이 있어. 부서별 합계와 집행률을 계산해 새 시트에 요약표로 만드는 Apps Script를 작성하고, 설치 방법을 단계별로 알려줘" |
| 데이터 분석 | "데이터 분석해줘" | "월별 민원 접수 현황 파일을 올릴게. (1) 가장 많은 민원 유형 5가지 (2) 월별 추이 그래프 (3) 눈에 띄는 변화에 대한 한 문단 분석을 만들어줘" |
| 회의록 정리 | "회의록 정리해줘" | "아래 회의록을 (1) 결정사항 3가지 (2) 담당자별 할 일을 담당자/할 일/기한 표로 정리해줘" |

### 프롬프트 개선 체크리스트

| 체크 항목 | 설명 |
|----------|------|
| 목적이 명확한가? | 무엇을 얻고 싶은지 분명히 명시 |
| 맥락이 충분한가? | 배경 정보, 수신 대상, 용도 포함 |
| 제약 조건이 있는가? | 글자 수, 형식, 어투 지정 |
| 출력 형식을 지정했는가? | 표, 목록, 코드 등 원하는 형태 |
| 예시를 제공했는가? | 기존 공문·보도자료 등 샘플 포함 |
| 개인정보를 걷어냈는가? | 이름·연락처·주민번호를 가명·더미로 바꿨는지 확인 |

### 한 번에 안 되면 이렇게 고칩니다

| 결과가 이렇다면 | 프롬프트에 추가할 것 |
|----------------|-------------------|
| 너무 일반적이다 | 부서명·사업명·수치 등 구체적 맥락 |
| 너무 길다 | "각 항목 2줄 이내", "전체 500자 이내" |
| 어투가 안 맞는다 | "공공기관 공문 어투로", "시민에게 친근하게" |
| 형식이 제각각이다 | 원하는 형식을 표나 번호로 직접 제시 |
| 사실이 의심스럽다 | "출처가 불확실한 수치는 쓰지 말고 빈칸으로 두고 표시해줘" |

> 프롬프트 작성은 "한 번에 완벽하게"가 아니라 "반복적으로 개선"하는 과정입니다.`,contentEn:`Learn the core principles for writing effective prompts.

### CLEAR Framework

| Principle | Description | Practice |
|-----------|-------------|----------|
| **C**oncise | Remove unnecessary expressions | Focus on key terms |
| **L**ogical | Step-by-step, structured instructions | Use numbering, specify order |
| **E**xplicit | Eliminate ambiguity | Specify exact numbers, ranges |
| **A**daptive | Iterative improvement based on results | Adjust prompt after checking output |
| **R**ole-based | Assign expert roles | Specify "from the perspective of..." |

### Good Prompts vs Bad Prompts

| Category | Bad Example | Good Example |
|----------|------------|--------------|
| Official document | "Write a document" | "You are an administrative officer at Daegu City Hall. Draft an announcement for the 'AI at Work' lecture (July 15, 2pm, City Hall Annex Hall) for city and district officials, in the order title/recipient/body/attachments" |
| Press release | "Make a press release" | "Draft a city press release from the content below: headline → lead (5W1H) → 3 body paragraphs → department contact, in a public-institution tone" |
| Spreadsheet automation | "Organize the spreadsheet" | "A Google Sheet holds budget execution by department and month. Write an Apps Script that computes department totals and execution rates into a new summary sheet, and explain installation step by step" |
| Data analysis | "Analyze the data" | "I'll upload monthly civil complaint records. Produce (1) the top 5 complaint types (2) a monthly trend chart (3) a one-paragraph analysis of notable changes" |
| Meeting minutes | "Summarize the minutes" | "From the minutes below, produce (1) 3 decisions (2) a table of tasks by owner with owner/task/deadline" |

### Prompt Improvement Checklist

| Check Item | Description |
|-----------|-------------|
| Is the purpose clear? | Clearly state what you want to achieve |
| Is context sufficient? | Include background, audience, use case |
| Are there constraints? | Specify word count, format, tone |
| Is output format specified? | Table, list, code, etc. |
| Are examples provided? | Include existing documents as samples |
| Is personal data removed? | Replace names, contacts, ID numbers with dummies |

> Prompt writing is not about "getting it perfect the first time" but about "iterative improvement."`}]},c={id:"prompt-evaluation",icon:"fa-clipboard-check",title:"평가 기준 & 루브릭",titleEn:"Evaluation Criteria & Rubrics",sections:[{title:"프롬프트 평가 기준",titleEn:"Prompt Evaluation Criteria",content:`프롬프트의 품질을 객관적으로 평가하기 위한 5대 평가 기준입니다.

### 5대 평가 기준 (SCORE)

| 기준 | 약자 | 설명 | 배점 |
|------|------|------|------|
| **구체성** (Specificity) | S | 요청이 구체적이고 명확한가 | 20점 |
| **맥락** (Context) | C | 충분한 배경 정보를 제공했는가 | 20점 |
| **출력지정** (Output) | O | 원하는 결과 형식을 명시했는가 | 20점 |
| **역할부여** (Role) | R | 적절한 전문가 역할을 지정했는가 | 20점 |
| **효과성** (Effectiveness) | E | 실제로 원하는 결과를 얻었는가 | 20점 |

### 평가 등급 체계

| 등급 | 점수 범위 | 설명 |
|------|----------|------|
| S (탁월) | 90-100 | 모든 요소가 완벽하게 갖춰진 프롬프트 |
| A (우수) | 80-89 | 대부분의 요소가 잘 갖춰진 프롬프트 |
| B (보통) | 70-79 | 기본 요소는 있으나 개선 여지가 있음 |
| C (미흡) | 60-69 | 핵심 요소가 부족하여 결과가 불만족 |
| D (부족) | 0-59 | 프롬프트로서 기본 기능을 하지 못함 |

### 기준별 세부 평가 항목

**S - 구체성 (Specificity)**

| 점수 | 수준 | 설명 |
|------|------|------|
| 17-20 | 탁월 | 정확한 수치, 범위, 조건이 모두 명시됨 |
| 13-16 | 우수 | 대부분 구체적이나 일부 모호한 부분 존재 |
| 9-12 | 보통 | 기본적인 요청은 명확하나 세부 사항 부족 |
| 5-8 | 미흡 | 막연한 요청으로 해석의 여지가 큼 |
| 0-4 | 부족 | 무엇을 요청하는지 파악이 어려움 |

**C - 맥락 (Context)**

| 점수 | 수준 | 설명 |
|------|------|------|
| 17-20 | 탁월 | 배경, 대상, 용도, 제약조건이 모두 포함 |
| 13-16 | 우수 | 핵심 맥락은 있으나 일부 정보 누락 |
| 9-12 | 보통 | 기본 배경만 제공, 추가 맥락 필요 |
| 5-8 | 미흡 | 맥락이 거의 없어 AI가 추측해야 함 |
| 0-4 | 부족 | 맥락 정보가 전혀 없음 |

> SCORE 평가 모델을 활용하면 프롬프트 품질을 체계적으로 측정하고 개선할 수 있습니다.`,contentEn:`Five key evaluation criteria for objectively assessing prompt quality.

### 5 Evaluation Criteria (SCORE)

| Criterion | Code | Description | Points |
|-----------|------|-------------|--------|
| **Specificity** | S | Is the request specific and clear? | 20 |
| **Context** | C | Is sufficient background information provided? | 20 |
| **Output** | O | Is the desired result format specified? | 20 |
| **Role** | R | Is an appropriate expert role assigned? | 20 |
| **Effectiveness** | E | Does it actually produce the desired result? | 20 |

### Grading System

| Grade | Score Range | Description |
|-------|-----------|-------------|
| S (Excellent) | 90-100 | All elements perfectly covered |
| A (Great) | 80-89 | Most elements well covered |
| B (Average) | 70-79 | Basic elements present but room for improvement |
| C (Below Average) | 60-69 | Key elements lacking, unsatisfactory results |
| D (Poor) | 0-59 | Fails to function as a proper prompt |

### Detailed Evaluation Items by Criterion

**S - Specificity**

| Score | Level | Description |
|-------|-------|-------------|
| 17-20 | Excellent | Exact numbers, ranges, and conditions all specified |
| 13-16 | Great | Mostly specific with minor ambiguities |
| 9-12 | Average | Basic request is clear but lacks details |
| 5-8 | Below Average | Vague request with much room for interpretation |
| 0-4 | Poor | Difficult to understand what is being requested |

**C - Context**

| Score | Level | Description |
|-------|-------|-------------|
| 17-20 | Excellent | Background, audience, purpose, constraints all included |
| 13-16 | Great | Core context present but some info missing |
| 9-12 | Average | Only basic background provided, needs more context |
| 5-8 | Below Average | Almost no context, AI must guess |
| 0-4 | Poor | No context information at all |

> Using the SCORE evaluation model allows systematic measurement and improvement of prompt quality.`},{title:"평가 루브릭 & 채점표",titleEn:"Rubric & Scoring Sheet",content:`실무에서 바로 사용할 수 있는 프롬프트 평가 루브릭과 채점표입니다.

### 종합 평가 루브릭

| 평가 영역 | 탁월 (5점) | 우수 (4점) | 보통 (3점) | 미흡 (2점) | 부족 (1점) |
|----------|-----------|-----------|-----------|-----------|-----------|
| 목적 명확성 | 목표가 구체적이고 측정 가능 | 목표가 명확함 | 목표가 있으나 모호 | 목표가 불분명 | 목표 없음 |
| 맥락 제공 | 완벽한 배경 정보 | 핵심 맥락 포함 | 기본 맥락만 제공 | 맥락 부족 | 맥락 없음 |
| 구조 & 형식 | 체계적 구조 + 형식 지정 | 구조적 + 일부 형식 | 기본 구조 있음 | 구조 미흡 | 비구조적 |
| 제약 조건 | 범위, 길이, 톤 등 명시 | 주요 제약 포함 | 일부 제약 있음 | 제약 부족 | 제약 없음 |
| 예시 & 참고 | 구체적 예시 + 참고자료 | 예시 포함 | 간단한 참고 | 예시 부족 | 예시 없음 |

### 도구별 특화 기준

**문서 업무 (ChatGPT · Claude)**

| 항목 | 평가 내용 | 비중 |
|------|----------|------|
| 작업 목적 | 문서의 목적과 근거 명시 | 25% |
| 수신 대상 | 누가 읽는 문서인지 지정 | 20% |
| 어투 & 형식 | 공문체/시민 친화 등 톤과 문서 구조 | 20% |
| 분량 제약 | 문단 수·글자 수 등 범위 지정 | 15% |
| 사실 근거 | 참고할 자료 제시, 미확인 정보 표시 요구 | 20% |

**데이터·자동화 (ChatGPT 데이터분석 · Apps Script)**

| 항목 | 평가 내용 | 비중 |
|------|----------|------|
| 데이터 구조 | 시트명·열 구성·기간 등 데이터 형태 설명 | 30% |
| 산출물 지정 | 표/차트/코드 등 원하는 결과와 위치 | 25% |
| 단계 분해 | 복잡한 작업을 번호로 나눠 지시 | 20% |
| 실행 안내 요구 | 설치·사용 방법을 함께 요청했는지 | 15% |
| 개인정보 처리 | 민감 정보 제거·가명화를 명시했는지 | 10% |

### 채점 예시

**프롬프트**: "공문 하나 써줘"

| 평가 기준 | 점수 | 이유 |
|----------|------|------|
| 구체성 (S) | 4/20 | 무슨 공문인지, 어떤 내용인지 전혀 없음 |
| 맥락 (C) | 2/20 | 수신 대상·상황·근거 미제공 |
| 출력지정 (O) | 4/20 | "공문"이라는 큰 범위만 지정 |
| 역할부여 (R) | 0/20 | 역할 미지정 |
| 효과성 (E) | 6/20 | 되묻거나 엉뚱한 초안이 나올 가능성이 큼 |
| **총점** | **16/100** | **등급: D (부족)** |

**개선된 프롬프트**: "너는 대구광역시청 행정 담당자야. 7월 15일(화) 14:00 시청 별관 대강당에서 열리는 '생성형 AI 업무활용 특강'을 본청·구청 공무원에게 알리는 안내 공문을 작성해줘. 형식은 제목·수신·본문·붙임 순, 본문은 3문단 이내, 정중하고 간결한 공공기관 공문체로. 확인되지 않은 정보는 [확인 필요]로 표시해줘."

| 평가 기준 | 점수 | 이유 |
|----------|------|------|
| 구체성 (S) | 18/20 | 행사명·일시·장소·대상이 모두 명확 |
| 맥락 (C) | 16/20 | 발신 주체와 안내 상황이 드러남 |
| 출력지정 (O) | 18/20 | 문서 구조와 분량을 직접 지정 |
| 역할부여 (R) | 16/20 | 시청 행정 담당자 역할 부여 |
| 효과성 (E) | 18/20 | 미확인 정보 표시 요구로 사실 오류 위험까지 차단 |
| **총점** | **86/100** | **등급: A (우수)** |

> 같은 주제라도 프롬프트 품질에 따라 결과물의 수준이 극적으로 달라집니다.`,contentEn:`Ready-to-use prompt evaluation rubrics and scoring sheets for practical use.

### Comprehensive Evaluation Rubric

| Area | Excellent (5) | Great (4) | Average (3) | Below Avg (2) | Poor (1) |
|------|-------------|----------|-----------|-------------|---------|
| Purpose Clarity | Specific & measurable goal | Clear goal | Goal exists but vague | Unclear goal | No goal |
| Context | Complete background info | Core context included | Basic context only | Lacking context | No context |
| Structure & Format | Systematic + format specified | Structured + some format | Basic structure | Poor structure | Unstructured |
| Constraints | Scope, length, tone specified | Key constraints included | Some constraints | Few constraints | No constraints |
| Examples & Refs | Specific examples + references | Examples included | Simple references | Lacking examples | No examples |

### Tool-Specific Criteria

**Document Work (ChatGPT · Claude)**

| Item | Evaluation Content | Weight |
|------|-------------------|--------|
| Task Purpose | Purpose and basis of the document stated | 25% |
| Audience | Who will read the document | 20% |
| Tone & Format | Official vs citizen-friendly tone, document structure | 20% |
| Length Constraint | Paragraph or character limits | 15% |
| Factual Basis | Source material given, unverified info flagged | 20% |

**Data & Automation (ChatGPT Data Analysis · Apps Script)**

| Item | Evaluation Content | Weight |
|------|-------------------|--------|
| Data Structure | Sheet name, columns, period described | 30% |
| Output Spec | Desired result (table/chart/code) and destination | 25% |
| Step Decomposition | Complex work numbered into steps | 20% |
| Usage Guidance | Installation/usage requested alongside | 15% |
| Personal Data | Removal or pseudonymization stated | 10% |

### Scoring Example

**Prompt**: "Write a document"

| Criterion | Score | Reason |
|-----------|-------|--------|
| Specificity (S) | 4/20 | No indication of what document or content |
| Context (C) | 2/20 | No audience, situation, or basis |
| Output (O) | 4/20 | Only "document" as broad scope |
| Role (R) | 0/20 | No role assigned |
| Effectiveness (E) | 6/20 | Likely to return questions or an off-target draft |
| **Total** | **16/100** | **Grade: D (Poor)** |

**Improved Prompt**: "You are an administrative officer at Daegu City Hall. Draft an announcement for city and district officials about the 'Generative AI at Work' lecture on July 15 (Tue) 2pm at the City Hall Annex Hall. Format: title, recipient, body, attachments; body within 3 paragraphs; courteous, concise public-sector style. Mark unverified information as [needs verification]."

| Criterion | Score | Reason |
|-----------|-------|--------|
| Specificity (S) | 18/20 | Event, time, place, audience all clear |
| Context (C) | 16/20 | Sender and announcement situation evident |
| Output (O) | 18/20 | Document structure and length specified |
| Role (R) | 16/20 | City administrative officer role assigned |
| Effectiveness (E) | 18/20 | Verification flag blocks factual-error risk |
| **Total** | **86/100** | **Grade: A (Great)** |

> Even with the same topic, the quality of results dramatically changes based on prompt quality.`},{title:"자기 평가 워크시트",titleEn:"Self-Assessment Worksheet",content:`프롬프트를 작성한 후 스스로 점검할 수 있는 자기 평가 워크시트입니다.

### 작성 전 체크리스트

| # | 체크 항목 | 확인 |
|---|----------|------|
| 1 | 이 프롬프트로 달성하려는 목표를 한 문장으로 말할 수 있는가? | ☐ |
| 2 | AI가 아닌 사람에게 같은 요청을 한다면 충분히 이해할 수 있는가? | ☐ |
| 3 | 결과물의 형태(코드, 문서, 표 등)를 미리 정했는가? | ☐ |
| 4 | 필요한 배경 정보를 모두 파악했는가? | ☐ |
| 5 | 한 번에 하나의 작업만 요청하는가? (복합 작업은 분리) | ☐ |

### 작성 후 자기 평가표

| 영역 | 질문 | 1 | 2 | 3 | 4 | 5 |
|------|------|---|---|---|---|---|
| 명확성 | 요청이 한 가지로만 해석되는가? | ☐ | ☐ | ☐ | ☐ | ☐ |
| 구체성 | 수치, 범위, 조건을 명시했는가? | ☐ | ☐ | ☐ | ☐ | ☐ |
| 맥락 | 배경과 목적을 충분히 제공했는가? | ☐ | ☐ | ☐ | ☐ | ☐ |
| 역할 | AI에게 적절한 전문가 역할을 부여했는가? | ☐ | ☐ | ☐ | ☐ | ☐ |
| 형식 | 출력 형식을 지정했는가? | ☐ | ☐ | ☐ | ☐ | ☐ |
| 제약 | 길이, 톤, 스타일 등 제약을 명시했는가? | ☐ | ☐ | ☐ | ☐ | ☐ |
| 예시 | 원하는 결과의 예시를 포함했는가? | ☐ | ☐ | ☐ | ☐ | ☐ |
| 간결성 | 불필요한 정보를 제거했는가? | ☐ | ☐ | ☐ | ☐ | ☐ |

### 결과 분석 가이드

| 총점 | 등급 | 조언 |
|------|------|------|
| 35-40 | S | 탁월한 프롬프트! 그대로 사용하세요 |
| 28-34 | A | 우수합니다. 약간의 보완으로 완벽해질 수 있습니다 |
| 20-27 | B | 기본은 갖추었으나 구체성과 맥락을 보강하세요 |
| 12-19 | C | 핵심 요소가 부족합니다. 역할과 형식을 추가하세요 |
| 8-11 | D | 전면 재작성이 필요합니다 |

### 개선 반복 프로세스

| 단계 | 활동 | 핵심 질문 |
|------|------|----------|
| 1. 초안 작성 | 첫 번째 프롬프트 작성 | "무엇을 원하는가?" |
| 2. 자기 평가 | 위 체크리스트로 점검 | "빠진 요소는 없는가?" |
| 3. 실행 & 확인 | AI에 입력 후 결과 확인 | "기대한 결과인가?" |
| 4. 분석 | 부족한 부분 파악 | "왜 기대와 다른가?" |
| 5. 개선 | 프롬프트 수정 후 재실행 | "어떤 요소를 보강할까?" |
| 6. 기록 | 성공 패턴 정리 | "재사용할 수 있는가?" |

> 프롬프트 작성 능력은 타고나는 것이 아니라, 반복 연습으로 향상됩니다.`,contentEn:`A self-assessment worksheet for reviewing your prompts after writing them.

### Pre-Writing Checklist

| # | Check Item | Done |
|---|-----------|------|
| 1 | Can you describe the goal of this prompt in one sentence? | ☐ |
| 2 | Would a person (not AI) understand this request sufficiently? | ☐ |
| 3 | Have you decided the output format (code, document, table, etc.)? | ☐ |
| 4 | Have you gathered all necessary background information? | ☐ |
| 5 | Are you requesting only one task at a time? (separate complex tasks) | ☐ |

### Post-Writing Self-Assessment

| Area | Question | 1 | 2 | 3 | 4 | 5 |
|------|----------|---|---|---|---|---|
| Clarity | Can the request be interpreted in only one way? | ☐ | ☐ | ☐ | ☐ | ☐ |
| Specificity | Are numbers, ranges, conditions specified? | ☐ | ☐ | ☐ | ☐ | ☐ |
| Context | Is background and purpose sufficiently provided? | ☐ | ☐ | ☐ | ☐ | ☐ |
| Role | Is an appropriate expert role assigned to AI? | ☐ | ☐ | ☐ | ☐ | ☐ |
| Format | Is the output format specified? | ☐ | ☐ | ☐ | ☐ | ☐ |
| Constraints | Are length, tone, style constraints specified? | ☐ | ☐ | ☐ | ☐ | ☐ |
| Examples | Are examples of desired output included? | ☐ | ☐ | ☐ | ☐ | ☐ |
| Conciseness | Is unnecessary information removed? | ☐ | ☐ | ☐ | ☐ | ☐ |

### Result Analysis Guide

| Total | Grade | Advice |
|-------|-------|--------|
| 35-40 | S | Excellent prompt! Use as is |
| 28-34 | A | Great. Minor refinements can make it perfect |
| 20-27 | B | Basics covered but strengthen specificity and context |
| 12-19 | C | Key elements missing. Add role and format |
| 8-11 | D | Complete rewrite needed |

### Iterative Improvement Process

| Step | Activity | Key Question |
|------|----------|-------------|
| 1. Draft | Write first prompt | "What do I want?" |
| 2. Self-assess | Review with checklist | "Are any elements missing?" |
| 3. Execute & Check | Input to AI, check results | "Is this the expected result?" |
| 4. Analyze | Identify gaps | "Why is it different from expectations?" |
| 5. Improve | Modify prompt and re-run | "Which elements should I strengthen?" |
| 6. Record | Document successful patterns | "Can this be reused?" |

> Prompt writing skill is not innate — it improves with repeated practice.`}]},l={id:"prompt-techniques",icon:"fa-wand-magic-sparkles",title:"프롬프트 기법",titleEn:"Prompt Techniques",sections:[{title:"핵심 프롬프트 기법",titleEn:"Core Prompt Techniques",content:`공무원 업무에서 효과가 큰 핵심 프롬프트 기법들을 소개합니다.

### 주요 프롬프트 기법 비교

| 기법 | 설명 | 난이도 | 효과 |
|------|------|--------|------|
| Zero-shot | 예시 없이 바로 지시 | 쉬움 | 보통 |
| Few-shot | 2-3개 예시를 포함하여 지시 | 보통 | 높음 |
| Chain-of-Thought | 단계별 사고 과정을 유도 | 보통 | 높음 |
| Role Prompting | 전문가 역할을 부여 | 쉬움 | 높음 |
| Template Prompting | 미리 정한 틀에 맞춰 요청 | 쉬움 | 높음 |
| Tree-of-Thought | 여러 사고 경로를 탐색 | 어려움 | 매우 높음 |

### 1. Zero-shot 프롬프팅

예시 없이 직접 지시하는 가장 기본적인 기법입니다. 단순하고 정형화된 업무에 적합합니다.

| 상황 | 프롬프트 |
|------|---------|
| 요약 | "다음 보도자료를 3줄로 요약해줘: ..." |
| 분류 | "다음 민원 내용이 어느 부서 소관인지 분류해줘: ..." |
| 변환 | "이 보도자료를 시민이 읽기 쉬운 카드뉴스 문구로 바꿔줘: ..." |

### 2. Few-shot 프롬프팅

예시 2~3개를 먼저 보여주면 AI가 우리 부서의 형식을 그대로 따라갑니다. **기존 공문 양식을 지키게 하는 데 가장 효과적인 기법**입니다.

| 구분 | 내용 |
|------|------|
| 예시 1 | 민원: "가로등이 깜빡입니다" → 유형: 시설물 유지보수 / 소관: 도로과 |
| 예시 2 | 민원: "주차 단속이 과합니다" → 유형: 단속 이의 / 소관: 교통과 |
| 예시 3 | 민원: "청년 지원금 신청 방법이 궁금합니다" → 유형: 제도 문의 / 소관: 청년정책과 |
| **실제 요청** | 민원: "공원 벤치가 파손됐습니다" → 유형: ? / 소관: ? |

> 우리 부서의 지난 공문 2건을 붙여넣고 "이 형식 그대로 새 공문을 써줘"라고 하는 것이 Few-shot입니다.

### 3. Chain-of-Thought (CoT)

단계별 사고 과정을 명시적으로 유도하는 기법입니다. 판단이 필요한 업무에서 결과 품질이 크게 올라갑니다.

| 일반 프롬프트 | CoT 프롬프트 |
|-------------|------------|
| "이 데이터 분석해줘" | "예산 집행 데이터를 분석해줘: 1) 부서별 집행률을 계산하고, 2) 평균보다 낮은 부서를 추리고, 3) 낮은 이유로 추정되는 점을 항목별로 정리하고, 4) 보고서에 쓸 요약 문장 3개를 만들어줘" |
| "홍보 계획 세워줘" | "청년 일자리 사업 홍보 계획을 단계별로 세워줘: 1) 전달 대상 정의, 2) 대상이 주로 쓰는 채널 파악, 3) 채널별 메시지 톤 결정, 4) 콘텐츠 형식 배분, 5) 성과 지표 설정" |
| "이 스크립트 왜 안 되는지 봐줘" | "이 Apps Script를 점검해줘: 1) 각 함수가 하는 일을 설명하고, 2) 시트 데이터가 어떻게 흐르는지 짚고, 3) 오류가 날 수 있는 지점을 찾고, 4) 원인과 고친 전체 코드를 보여줘" |

### 4. Role Prompting

| 역할 | 프롬프트 시작 | 효과 |
|------|-------------|------|
| 행정 담당자 | "너는 대구광역시청 행정 담당자야" | 공문 형식과 공공기관 어투 유지 |
| 공보 담당자 | "너는 시청 대변인실 보도자료 담당자야" | 헤드라인·리드문 중심의 보도자료 문체 |
| 데이터 분석가 | "너는 행정 데이터를 다루는 분석가야" | 수치 근거 중심의 해석과 시사점 |
| 감사 담당자 | "너는 문서를 검토하는 감사 담당자야" | 사실 오류·근거 누락·표현 위험을 짚어냄 |
| 시민 | "너는 이 안내문을 처음 읽는 60대 시민이야" | 어려운 표현·불친절한 안내를 발견 |

> 마지막 "시민 역할"은 완성된 안내문을 검토할 때 특히 유용합니다. 작성용 역할과 검토용 역할을 나눠 쓰세요.

### 5. Template Prompting

자주 하는 업무는 빈칸만 바꿔 쓰는 틀로 만들어 두면 매번 처음부터 쓰지 않아도 됩니다.

| 항목 | 채울 내용 |
|------|----------|
| 역할 | "너는 대구광역시청 [부서명] 담당자야" |
| 상황 | "[배경 설명]" |
| 지시 | "아래 정보로 [문서 종류]를 작성해줘" |
| 대상 | "[수신 대상]" |
| 형식 | "[제목/수신/본문/붙임 등]" |
| 어투 | "[공공기관 공문체 / 시민 친화적]" |
| 분량 | "[○○자 이내]" |

> 상황에 따라 여러 기법을 조합하면 더 좋은 결과를 얻을 수 있습니다. 역할 부여(Role) + 기존 공문 예시(Few-shot) + 형식 지정(Template)을 함께 쓰는 식입니다.`,contentEn:`Core prompt techniques that work well in public-sector tasks.

### Major Prompt Techniques Comparison

| Technique | Description | Difficulty | Effectiveness |
|-----------|-------------|-----------|---------------|
| Zero-shot | Direct instruction without examples | Easy | Moderate |
| Few-shot | Instructions with 2-3 examples | Medium | High |
| Chain-of-Thought | Guide step-by-step reasoning | Medium | High |
| Role Prompting | Assign expert roles | Easy | High |
| Template Prompting | Request within predefined templates | Easy | High |
| Tree-of-Thought | Explore multiple reasoning paths | Hard | Very High |

### 1. Zero-shot Prompting

Direct instruction without examples — suited to simple, routine tasks.

| Situation | Prompt |
|-----------|--------|
| Summarize | "Summarize this press release in 3 lines: ..." |
| Classify | "Which department should handle this complaint: ..." |
| Convert | "Rewrite this press release as citizen-friendly card news copy: ..." |

### 2. Few-shot Prompting

Showing 2-3 examples makes the AI follow your department's existing format — the most effective way to preserve official document conventions.

| Type | Content |
|------|---------|
| Example 1 | Complaint: "The streetlight is flickering" → Type: Facility maintenance / Dept: Roads |
| Example 2 | Complaint: "Parking enforcement is excessive" → Type: Enforcement appeal / Dept: Traffic |
| Example 3 | Complaint: "How do I apply for the youth grant?" → Type: Program inquiry / Dept: Youth Policy |
| **Actual Request** | Complaint: "A park bench is damaged" → Type: ? / Dept: ? |

### 3. Chain-of-Thought (CoT)

Explicitly guide step-by-step reasoning — quality rises sharply on judgment-heavy tasks.

| Regular Prompt | CoT Prompt |
|---------------|-----------|
| "Analyze this data" | "Analyze the budget execution data: 1) Compute execution rates by department, 2) List departments below average, 3) Organize likely causes, 4) Write 3 summary sentences for the report" |
| "Plan the PR" | "Plan PR for the youth jobs program step by step: 1) Define the audience, 2) Identify their channels, 3) Decide tone per channel, 4) Allocate content formats, 5) Set performance metrics" |
| "Why doesn't this script work?" | "Review this Apps Script: 1) Explain each function, 2) Trace how sheet data flows, 3) Find failure points, 4) Show the cause and the corrected full code" |

### 4. Role Prompting

| Role | Prompt Start | Effect |
|------|-------------|--------|
| Administrative officer | "You are an administrative officer at Daegu City Hall" | Keeps official format and public-sector tone |
| Press officer | "You are a press officer at the city spokesperson's office" | Headline-and-lead press release style |
| Data analyst | "You are an analyst working with administrative data" | Evidence-based interpretation |
| Auditor | "You are an auditor reviewing this document" | Surfaces factual errors and missing basis |
| Citizen | "You are a 60-year-old citizen reading this notice for the first time" | Finds unclear or unfriendly wording |

### 5. Template Prompting

| Item | Fill In |
|------|---------|
| Role | "You are an officer in the [department] of Daegu City Hall" |
| Situation | "[background]" |
| Instruction | "Write a [document type] from the information below" |
| Audience | "[recipients]" |
| Format | "[title/recipient/body/attachments]" |
| Tone | "[official / citizen-friendly]" |
| Length | "[under N characters]" |

> Combining techniques — Role + Few-shot + Template — yields the best results.`},{title:"도구별 프롬프트 기법",titleEn:"Tool-Specific Techniques",content:`이 과정에서 쓰는 네 가지 도구는 잘 하는 일이 서로 다릅니다. 도구에 맞는 프롬프트를 써야 합니다.

### 도구 선택 기준

| 업무 유형 | 추천 도구 | 이유 |
|----------|----------|------|
| 공문·보도자료·회의록 | ChatGPT · Claude | 긴 문서의 구조와 어투를 안정적으로 유지 |
| 엑셀 데이터 집계·차트 | ChatGPT 데이터 분석 | 파일을 직접 올려 계산·시각화까지 한 번에 |
| 시트 반복작업 자동화 | Claude → Apps Script | 코드 생성 품질이 높고 오류 수정 설명이 친절 |
| 카드뉴스·숏폼·홍보물 | Opal · Canva | 문구와 디자인을 함께 뽑아냄 |

### 1. ChatGPT · Claude — 문서 업무 기법

| 목적 | 프롬프트 패턴 |
|------|-------------|
| 문서 초안 | "[수신 대상]에게 [목적]을 알리는 [문서 유형]을 [어투]로 작성해줘" |
| 문서 요약 | "이 문서를 [대상]이 이해할 수 있도록 [분량]으로 요약해줘. [핵심 관점] 중심으로" |
| 문서 개선 | "이 문서의 [측면]을 개선해줘. [구체적 지시]를 적용해서" |
| 형식 변환 | "이 [원본 형식]을 [목표 형식]으로 바꿔줘. [플랫폼] 특성에 맞게" |

**긴 문서를 다룰 때**

| 상황 | 방법 |
|------|------|
| 회의록이 너무 길다 | 먼저 "결정사항만 뽑아줘" → 그 결과로 "담당자별 할 일 표로" 2단계 진행 |
| 첨부가 여러 개다 | 한 번에 다 넣지 말고 하나씩 요약 → 요약본들을 모아 최종 정리 |
| 형식을 꼭 지켜야 한다 | 기존 문서 1~2건을 먼저 붙여넣고 "이 형식 그대로" 지시 (Few-shot) |

### 2. ChatGPT 데이터 분석 — 자연어 분석 기법

| 목적 | 프롬프트 패턴 | 예시 |
|------|-------------|------|
| 집계 | "[데이터]에서 [기준]별 [지표]를 계산해줘" | "민원 데이터에서 유형별·월별 건수를 계산해줘" |
| 추세 | "[기간] 동안의 [지표] 변화를 그래프로 그려줘" | "최근 12개월 민원 접수 추이를 꺾은선 그래프로" |
| 해석 | "이 결과에서 눈에 띄는 점을 [분량]으로 설명해줘" | "집행률이 낮은 부서 3곳과 추정 원인을 한 문단으로" |
| 보고서화 | "이 분석 결과로 [문서]의 [섹션]을 써줘" | "이 집계로 월간 보고서의 '주요 수치' 절을 작성해줘" |

> 파일을 올리기 전에 **개인정보 열은 반드시 지우거나 가명으로 바꾸세요.** 이름·연락처·주소·주민번호가 든 원본은 올리지 않습니다.

### 3. Claude → Google Apps Script — 바이브코딩 기법

코드를 몰라도 됩니다. 다만 **무엇을·어디서·어떻게 되기를 원하는지**를 정확히 말해야 합니다.

| 단계 | 프롬프트 |
|------|---------|
| ① 생성 | "구글 시트에 [데이터 설명]이 있어. [원하는 결과]를 만들어주는 Google Apps Script를 작성하고, 설치 방법을 단계별로 알려줘" |
| ② 실행 확인 | "스크립트를 붙여넣고 실행했더니 [상황]이야. 정상인지 확인해줘" |
| ③ 오류 수정 | "아래 코드를 실행하니 에러가 났어. 원인을 쉽게 설명하고, 고친 전체 코드를 다시 보여줘. (코드와 에러 메시지 붙여넣기)" |
| ④ 사용 설명 | "이 도구를 동료가 쓸 수 있도록 비전문가용 사용 설명서를 단계별로 작성해줘" |

**시트 작업을 지시할 때 꼭 넣을 정보**

| 항목 | 예시 |
|------|------|
| 시트 이름 | "'집행현황' 시트에서" |
| 열 구조 | "A열 부서명, B열 예산액, C열 집행액" |
| 원하는 결과 위치 | "새 시트 '요약'에 표로" |
| 실행 방법 | "메뉴에 버튼을 만들어 누르면 실행되게" |

### 4. Opal · Canva — 홍보 콘텐츠 기법

| 목적 | 프롬프트 패턴 | 예시 |
|------|-------------|------|
| 카드뉴스 | "[사업]을 알리는 [장수]장 카드뉴스 문구. 각 장 한 줄 헤드라인 + 두 줄 설명" | "청년 일자리 지원사업 5장 카드뉴스 문구를 시민에게 친근한 어투로" |
| 플랫폼 변환 | "이 보도자료를 [플랫폼]용으로 바꿔줘" | "인스타그램 게시물 / 카카오채널 메시지 / 블로그 도입부로 각각" |
| 숏폼 | "[정책]을 알리는 [초]초 영상 스크립트. 장면별 자막 + 나레이션 + 화면 설명" | "30초 숏폼 스크립트로" |

> AI가 만든 홍보물은 **저작권·초상권**을 반드시 확인하세요. 생성 이미지에 실존 인물·상표가 들어가지 않았는지 점검한 뒤 게시합니다.`,contentEn:`The four tools used in this course are good at different things. Match the prompt to the tool.

### Choosing a Tool

| Task Type | Recommended Tool | Why |
|-----------|-----------------|-----|
| Documents, press releases, minutes | ChatGPT · Claude | Holds long-document structure and tone |
| Spreadsheet aggregation and charts | ChatGPT Data Analysis | Upload the file; compute and visualize in one pass |
| Repetitive sheet automation | Claude → Apps Script | Strong code generation with friendly error explanations |
| Card news, short-form, PR assets | Opal · Canva | Produces copy and design together |

### 1. ChatGPT · Claude — Document Work

| Purpose | Prompt Pattern |
|---------|---------------|
| Draft | "Write a [document type] informing [audience] of [purpose] in [tone]" |
| Summarize | "Summarize this in [length] for [audience], focusing on [perspective]" |
| Improve | "Improve the [aspect] of this document by applying [instructions]" |
| Convert | "Convert this [source format] to [target format] for [platform]" |

### 2. ChatGPT Data Analysis

| Purpose | Prompt Pattern | Example |
|---------|---------------|---------|
| Aggregate | "Compute [metric] by [dimension] from [data]" | "Count complaints by type and month" |
| Trend | "Chart the change in [metric] over [period]" | "Line chart of the last 12 months of complaints" |
| Interpret | "Explain what stands out in [length]" | "Three departments with low execution and likely causes, one paragraph" |
| Report | "Write the [section] of [document] from this result" | "Draft the 'key figures' section of the monthly report" |

> Remove or pseudonymize personal-data columns before uploading any file.

### 3. Claude to Google Apps Script (Vibe Coding)

| Step | Prompt |
|------|--------|
| 1. Generate | "A Google Sheet has [data]. Write an Apps Script that produces [result], and explain installation step by step" |
| 2. Verify | "I pasted and ran the script and got [situation]. Is this correct?" |
| 3. Fix | "Running this code raised an error. Explain the cause simply and show the corrected full code. (paste code and error)" |
| 4. Document | "Write a non-technical step-by-step user guide for this tool" |

### 4. Opal · Canva — PR Content

| Purpose | Prompt Pattern | Example |
|---------|---------------|---------|
| Card news | "[N]-slide card news copy for [program]: one-line headline + two-line description each" | "5-slide card news for the youth jobs program, friendly tone" |
| Platform conversion | "Convert this press release for [platform]" | "Instagram post / KakaoTalk channel message / blog intro" |
| Short-form | "[N]-second video script: per-scene captions + narration + visuals" | "30-second short-form script" |

> Always check copyright and portrait rights on AI-generated PR assets before publishing.`},{title:"고급 프롬프트 전략",titleEn:"Advanced Prompt Strategies",content:`전문가 수준의 고급 프롬프트 전략입니다.

### 메타 프롬프팅

AI에게 프롬프트 자체를 개선하도록 요청하는 전략입니다.

| 단계 | 메타 프롬프트 |
|------|-------------|
| 분석 요청 | "내가 작성한 다음 프롬프트를 분석해줘: [프롬프트]" |
| 개선 요청 | "이 프롬프트의 약점을 3가지 찾고, 개선된 버전을 작성해줘" |
| 비교 요청 | "원본과 개선 버전의 예상 결과 차이를 설명해줘" |

### 페르소나 체이닝

여러 역할을 순차적으로 활용해 문서 한 건을 완성도 있게 만드는 전략입니다.

| 단계 | 페르소나 | 작업 |
|------|---------|------|
| 1단계 | 기획 담당자 | 문서의 목적·대상·핵심 메시지 정의 |
| 2단계 | 행정 담당자 | 공문 형식에 맞춘 초안 작성 |
| 3단계 | 공보 담당자 | 시민에게 전달될 표현으로 다듬기 |
| 4단계 | 감사 담당자 | 사실 오류·근거 누락·표현 위험 점검 |
| 5단계 | 시민 | 처음 읽는 사람 입장에서 이해되는지 확인 |

### 제약 기반 프롬프팅

| 제약 유형 | 예시 | 효과 |
|----------|------|------|
| 길이 제약 | "200자 이내로 작성" | 핵심만 추출 |
| 난이도 제약 | "중학생이 이해할 수준으로" | 명확한 설명 |
| 형식 제약 | "반드시 표 형식으로만" | 구조화된 결과 |
| 금지 제약 | "행정 용어·한자어 사용 금지" | 시민 접근성 향상 |
| 시간 제약 | "5분 안에 보고할 수 있는 분량" | 핵심 압축 |
| 근거 제약 | "확인되지 않은 수치는 쓰지 말고 [확인 필요]로 표시" | 허위 정보 차단 |

### 반복 정제 (Iterative Refinement)

| 라운드 | 프롬프트 전략 | 목적 |
|--------|-------------|------|
| 1차 | 넓은 범위로 초안 요청 | 전체 구조 파악 |
| 2차 | 부족한 부분 구체화 요청 | 깊이 보강 |
| 3차 | 특정 섹션 집중 개선 | 품질 향상 |
| 4차 | 전체 일관성 검토 요청 | 최종 정제 |

### 프롬프트 템플릿 라이브러리

**공문 작성 템플릿**

| 항목 | 내용 |
|------|------|
| 역할 | "대구광역시청 [부서] 행정 담당자로서" |
| 구조 | "제목 → 수신 → 본문 → 붙임 순서로" |
| 형식 | "본문은 3문단 이내, 각 문단 3줄 이내" |
| 어투 | "정중하고 간결한 공공기관 공문체로" |
| 제약 | "확인되지 않은 일정·금액은 [확인 필요]로 표시해줘" |

**행정 보고서 템플릿**

| 항목 | 내용 |
|------|------|
| 역할 | "행정 데이터를 다루는 분석 담당자로서" |
| 구조 | "개요 → 주요 수치 → 시사점 → 건의사항" |
| 형식 | "각 섹션 2-3문장, 핵심 수치는 볼드 처리" |
| 톤 | "간부 보고용, 전문적이지만 이해하기 쉽게" |
| 제약 | "추정과 사실을 문장에서 구분해서 써줘" |

**AI 결과물 검토 템플릿**

| 항목 | 내용 |
|------|------|
| 역할 | "문서를 검토하는 감사 담당자로서" |
| 관점 | "사실 확인, 개인정보 포함 여부, 보안, 어투 네 가지 관점에서" |
| 형식 | "항목별로 위험도(높/중/낮)와 수정안을 제시하고" |
| 제약 | "문제가 없는 항목도 '이상 없음'으로 명시해줘" |

> 고급 전략은 기본 기법을 충분히 익힌 후 활용하면 더욱 효과적입니다.`,contentEn:`Expert-level advanced prompt strategies.

### Meta Prompting

| Step | Meta Prompt |
|------|-------------|
| Analysis | "Analyze the following prompt I wrote: [prompt]" |
| Improvement | "Find 3 weaknesses in this prompt and write an improved version" |
| Comparison | "Explain the expected result differences between the original and improved versions" |

### Persona Chaining

| Step | Persona | Task |
|------|---------|------|
| 1 | Program planner | Define purpose, audience, key message |
| 2 | Administrative officer | Draft in official document format |
| 3 | Press officer | Refine into citizen-facing language |
| 4 | Auditor | Check factual errors, missing basis, risky wording |
| 5 | Citizen | Confirm a first-time reader understands it |

### Constraint-Based Prompting

| Constraint Type | Example | Effect |
|-----------------|---------|--------|
| Length | "Write within 200 characters" | Extract essentials only |
| Difficulty | "At a level a middle schooler can understand" | Clear explanation |
| Format | "Must be in table format only" | Structured results |
| Prohibition | "No bureaucratic jargon" | Improved citizen accessibility |
| Time | "Content suitable for a 5-minute briefing" | Core compression |
| Evidence | "Mark unverified figures as [needs verification]" | Blocks fabricated information |

### Iterative Refinement

| Round | Prompt Strategy | Purpose |
|-------|----------------|---------|
| 1 | Request a broad draft | Grasp overall structure |
| 2 | Request detail on weak parts | Add depth |
| 3 | Focused improvement of one section | Raise quality |
| 4 | Request a consistency review | Final polish |

### Prompt Template Library

**Official Document Template**

| Item | Content |
|------|---------|
| Role | "As an administrative officer of [department], Daegu City Hall" |
| Structure | "Title → recipient → body → attachments" |
| Format | "Body within 3 paragraphs, each under 3 lines" |
| Tone | "Courteous, concise official public-sector style" |
| Constraint | "Mark unverified dates or amounts as [needs verification]" |

**Administrative Report Template**

| Item | Content |
|------|---------|
| Role | "As an analyst working with administrative data" |
| Structure | "Overview → key figures → implications → recommendations" |
| Format | "2-3 sentences per section, key figures in bold" |
| Tone | "For executive briefing — professional but easy to follow" |
| Constraint | "Distinguish estimates from facts in the wording" |

**AI Output Review Template**

| Item | Content |
|------|---------|
| Role | "As an auditor reviewing this document" |
| Perspective | "Fact-check, personal data, security, tone" |
| Format | "Per item, give a risk level (high/medium/low) and a fix" |
| Constraint | "State 'no issue' explicitly for clean items" |

> Advanced strategies work best once the basics are solid.`}]},p={id:"prompt-examples",icon:"fa-list-check",title:"실전 예시 & 실습",titleEn:"Examples & Practice",sections:[{title:"문서 업무 프롬프트 예시",titleEn:"Document Task Prompt Examples",content:`공문·보도자료·회의록 업무에서 실제로 쓰는 프롬프트와 그 평가입니다.

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

> 문서 업무에서는 **역할 → 정보 → 형식 → 어투 → 제약** 순으로 쌓아 올리면 대부분 한 번에 쓸 만한 초안이 나옵니다.`,contentEn:`Prompts actually used for official documents, press releases, and meeting minutes — with evaluations.

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

> Build document prompts in this order: **role → facts → format → tone → constraints**.`},{title:"데이터·자동화·홍보 프롬프트 예시",titleEn:"Data, Automation & PR Prompt Examples",content:`엑셀 집계, 시트 자동화, 정책 홍보 업무의 프롬프트 예시입니다.

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

> 데이터·자동화 프롬프트는 **데이터가 어떻게 생겼는지**를 말해주는 것이 절반입니다. 시트 이름, 열 구성, 원하는 결과 위치를 함께 적으세요.`,contentEn:`Prompt examples for spreadsheet analysis, sheet automation, and policy PR.

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

> For data and automation prompts, **describing the data shape** is half the work.`},{title:"실습 과제",titleEn:"Practice Exercises",content:`프롬프트 작성 능력을 향상시키기 위한 단계별 실습 과제입니다. 모두 대구시 공무원 업무를 소재로 합니다.

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

> 실습은 혼자보다 동료와 함께할 때 더 빠르게 성장합니다. 팀 실습을 적극 활용하세요.`,contentEn:`Step-by-step exercises to improve prompt writing — all based on Daegu public-service tasks.

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

> You improve faster with colleagues than alone — use the team exercises.`}]};function v(){const{language:i}=o(),t=i==="ko";return e.jsx(e.Fragment,{children:e.jsx(r,{seoTitle:"프롬프트 실습",seoTitleEn:"Prompt Lab",seoDescription:"프롬프트 작성 기법, 평가 기준, 실전 예시 및 실습 가이드",path:"/prompt-eval",dataFiles:[s,c,l,p],sidebarHeader:e.jsx(n,{}),sidebarFooter:e.jsxs(e.Fragment,{children:[e.jsxs(a,{to:"/prompt-eval/workshop",className:"guide-sidebar-cta workshop",children:[e.jsx("i",{className:"fa-solid fa-wand-magic-sparkles"}),e.jsxs("div",{children:[e.jsx("strong",{children:t?"프롬프트 작성 평가":"Writing Evaluation"}),e.jsx("span",{children:t?"자동 채점 & 수정 재평가":"Auto-score & re-evaluate"})]})]}),e.jsxs(a,{to:"/prompt-eval/practice",className:"guide-sidebar-cta practice",children:[e.jsx("i",{className:"fa-solid fa-clipboard-check"}),e.jsxs("div",{children:[e.jsx("strong",{children:t?"종합 실습 테스트":"Full Practice Test"}),e.jsx("span",{children:t?"퀴즈 + 평가 + 작성 (250점)":"Quiz + Eval + Write (250pts)"})]})]})]}),ctaBanner:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"prompt-practice-cta",children:[e.jsxs("div",{className:"prompt-practice-cta-text",children:[e.jsx("h3",{children:t?"프롬프트 작성 평가":"Prompt Writing Evaluation"}),e.jsx("p",{children:t?"프롬프트를 직접 작성하고 SCORE 기준으로 자동 채점! 수정하며 점수 변화를 확인하세요.":"Write prompts and get auto-scored! Edit and track your score improvements."})]}),e.jsxs(a,{to:"/prompt-eval/workshop",className:"prompt-practice-cta-btn",children:[e.jsx("i",{className:"fa-solid fa-wand-magic-sparkles"}),t?"작성 평가 시작":"Start Workshop"]})]}),e.jsxs("div",{className:"prompt-practice-cta",style:{background:"linear-gradient(135deg, rgba(56,161,105,0.08), rgba(56,161,105,0.02))",borderColor:"rgba(56,161,105,0.2)"},children:[e.jsxs("div",{className:"prompt-practice-cta-text",children:[e.jsx("h3",{children:t?"종합 실습 테스트":"Full Practice Test"}),e.jsx("p",{children:t?"선택형 퀴즈 + 프롬프트 평가 + 직접 작성까지, 250점 만점 종합 실습을 진행하세요.":"Take a 250-point practice: quiz + evaluation + writing exercises."})]}),e.jsxs(a,{to:"/prompt-eval/practice",className:"prompt-practice-cta-btn",style:{background:"#38a169"},children:[e.jsx("i",{className:"fa-solid fa-clipboard-check"}),t?"종합 실습 시작":"Start Practice"]})]})]})})})}export{v as default};

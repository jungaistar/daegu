export default {
  id: 'prompt-techniques',
  icon: 'fa-wand-magic-sparkles',
  title: '프롬프트 기법',
  titleEn: 'Prompt Techniques',
  sections: [
    {
      title: '핵심 프롬프트 기법',
      titleEn: 'Core Prompt Techniques',
      content: `공무원 업무에서 효과가 큰 핵심 프롬프트 기법들을 소개합니다.

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

> 상황에 따라 여러 기법을 조합하면 더 좋은 결과를 얻을 수 있습니다. 역할 부여(Role) + 기존 공문 예시(Few-shot) + 형식 지정(Template)을 함께 쓰는 식입니다.`,
      contentEn: `Core prompt techniques that work well in public-sector tasks.

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

> Combining techniques — Role + Few-shot + Template — yields the best results.`,
    },
    {
      title: '도구별 프롬프트 기법',
      titleEn: 'Tool-Specific Techniques',
      content: `이 과정에서 쓰는 네 가지 도구는 잘 하는 일이 서로 다릅니다. 도구에 맞는 프롬프트를 써야 합니다.

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

> AI가 만든 홍보물은 **저작권·초상권**을 반드시 확인하세요. 생성 이미지에 실존 인물·상표가 들어가지 않았는지 점검한 뒤 게시합니다.`,
      contentEn: `The four tools used in this course are good at different things. Match the prompt to the tool.

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

> Always check copyright and portrait rights on AI-generated PR assets before publishing.`,
    },
    {
      title: '고급 프롬프트 전략',
      titleEn: 'Advanced Prompt Strategies',
      content: `전문가 수준의 고급 프롬프트 전략입니다.

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

> 고급 전략은 기본 기법을 충분히 익힌 후 활용하면 더욱 효과적입니다.`,
      contentEn: `Expert-level advanced prompt strategies.

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

> Advanced strategies work best once the basics are solid.`,
    },
  ],
};

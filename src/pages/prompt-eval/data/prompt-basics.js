export default {
  id: 'prompt-basics',
  icon: 'fa-lightbulb',
  title: '프롬프트 기초',
  titleEn: 'Prompt Fundamentals',
  sections: [
    {
      title: '프롬프트란 무엇인가',
      titleEn: 'What is a Prompt',
      content: `AI 모델에게 원하는 결과를 얻기 위해 전달하는 입력 텍스트를 **프롬프트(Prompt)**라고 합니다.

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

> 좋은 프롬프트의 핵심은 **구체성**, **명확성**, **맥락 제공** 세 가지입니다.`,
      contentEn: `The input text you provide to an AI model to get desired results is called a **Prompt**.

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

> The keys to good prompts are **specificity**, **clarity**, and **context**.`,
    },
    {
      title: '프롬프트 작성 원칙',
      titleEn: 'Prompt Writing Principles',
      content: `효과적인 프롬프트를 작성하기 위한 핵심 원칙을 알아봅니다.

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

> 프롬프트 작성은 "한 번에 완벽하게"가 아니라 "반복적으로 개선"하는 과정입니다.`,
      contentEn: `Learn the core principles for writing effective prompts.

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

> Prompt writing is not about "getting it perfect the first time" but about "iterative improvement."`,
    },
  ],
};

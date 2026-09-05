import{l as e}from"./index-wrE8ELh9.js";import{G as t}from"./GuidePage-CGFYUn4Y.js";/* empty css                 */import"./SEOHead-3CVz-_Rn.js";import"./index-B8TbASPE.js";import"./index-CBa7UOLN.js";const a={id:"glossary",icon:"fa-book-bookmark",title:"용어 해설",titleEn:"Glossary",sections:[{title:"생성형 AI 기본 용어",titleEn:"Generative AI Basics",content:`교육에서 자주 등장하는 핵심 용어를 모았습니다. 모르는 말이 나오면 여기에서 찾아보세요.

| 용어 | 쉬운 설명 |
|------|-----------|
| **생성형 AI(Generative AI)** | 글·이미지·코드 등 새로운 결과물을 "만들어내는" 인공지능. 분류·예측 중심의 기존 AI와 달리 창작에 강합니다. |
| **LLM(거대 언어모델)** | 방대한 텍스트로 학습한 언어 AI. ChatGPT, Claude, ChatGPT의 두뇌에 해당합니다. |
| **ChatGPT** | OpenAI의 대화형 생성형 AI. 문서 작성·데이터 분석·아이디어 도출 등 행정 업무 전반에 활용합니다. |
| **프롬프트(Prompt)** | AI에게 주는 지시·질문. 좋은 프롬프트가 좋은 답을 만듭니다. |
| **토큰(Token)** | AI가 글을 처리하는 최소 단위(대략 단어 조각). 사용량·요금의 기준이 됩니다. |
| **환각(Hallucination)** | AI가 사실이 아닌 내용을 그럴듯하게 지어내는 현상. **항상 사실 확인이 필요**합니다. |
| **맥락창(Context Window)** | AI가 한 번에 기억할 수 있는 대화·문서의 분량. 너무 길면 앞부분을 잊습니다. |
| **멀티모달(Multimodal)** | 글뿐 아니라 이미지·표·파일까지 함께 이해하는 능력. |
| **맞춤 GPT** | 특정 업무에 맞게 지시문·자료를 미리 넣어 만든 전용 도우미. |

> 핵심 한 줄: AI는 **똑똑한 조수**일 뿐, 최종 판단과 사실 확인은 사람의 몫입니다.`,contentEn:`Key terms that appear throughout the training.

| Term | Plain explanation |
|------|-------------------|
| **Generative AI** | AI that *creates* new text, images, or code. |
| **LLM** | Large Language Model — the "brain" behind ChatGPT, Claude, ChatGPT. |
| **ChatGPT** | Campus-only AI platform for DAEGU members, based on ChatGPT. |
| **Prompt** | The instruction/question you give the AI. |
| **Token** | Smallest unit the AI processes; basis for usage/billing. |
| **Hallucination** | When AI confidently makes up false facts — always verify. |
| **Context Window** | How much the AI can remember at once. |
| **Multimodal** | Ability to understand images/tables/files, not just text. |
| **Custom GPT** | A dedicated assistant pre-loaded with instructions/materials. |

> One line: AI is a smart assistant — final judgment and fact-checking are up to you.`},{title:"데이터분석 용어",titleEn:"Data Analysis Terms",content:`데이터분석·예산회계 과정에서 자주 쓰는 용어입니다.

| 용어 | 쉬운 설명 |
|------|-----------|
| **변수(Variable)** | 측정·기록하는 항목(예: 나이, 점수, 부서). |
| **결측치(Missing Value)** | 비어 있는 값. 분석 전에 처리(삭제·대체) 방법을 정해야 합니다. |
| **이상치(Outlier)** | 다른 값들과 동떨어진 극단값. 입력 오류일 수도, 중요한 신호일 수도 있습니다. |
| **기술통계** | 평균·합계·표준편차처럼 데이터를 "요약"하는 통계. |
| **표준편차** | 값들이 평균에서 얼마나 퍼져 있는지를 나타내는 수치. |
| **상관/인과** | 함께 변한다(상관) ≠ 원인이다(인과). 혼동 주의. |
| **피벗 테이블** | 표 데이터를 행·열·값으로 재구성해 집계하는 도구(엑셀). |
| **시각화** | 숫자를 그래프로 바꿔 한눈에 이해하게 하는 작업. |
| **p값(p-value)** | 결과가 우연일 가능성. 보통 0.05보다 작으면 "유의하다"고 봅니다. |

> 분석의 출발점은 **깨끗한 데이터**입니다. 정리에 시간을 아끼지 마세요.`,contentEn:`Common terms for the data analysis and budgeting tracks.

| Term | Plain explanation |
|------|-------------------|
| **Variable** | An item you measure/record (age, score, dept.). |
| **Missing Value** | Empty value; decide how to handle before analysis. |
| **Outlier** | An extreme value far from the rest. |
| **Descriptive stats** | Summaries like mean, sum, standard deviation. |
| **Std. deviation** | How spread out values are around the mean. |
| **Correlation vs causation** | Moving together ≠ one causing the other. |
| **Pivot table** | Excel tool that reshapes/aggregates table data. |
| **p-value** | Probability the result is by chance; <0.05 is often "significant". |

> Analysis starts with clean data — don't skimp on tidying.`}]},n={id:"chatbot",icon:"fa-comments",title:"챗봇 활용법",titleEn:"Chatbot Q&A",sections:[{title:"챗봇형 질의응답 이해하기",titleEn:"Understanding Chatbot Q&A",content:`챗봇형 질의응답은 **한 번 묻고 끝내는 검색이 아니라, 대화를 이어가며 원하는 결과에 다가가는 방식**입니다. 이 차이를 모른 채 한 번 물어보고 "생각보다 별로네"라고 결론짓는 것이 가장 흔한 실패입니다.

### 검색 포털과 무엇이 다른가

| 구분 | 검색 포털 | 챗봇형 질의응답 |
|------|-----------|-----------------|
| 돌려주는 것 | 링크 목록 | 완성된 문장·표·문서 초안 |
| 맥락 | 검색할 때마다 새로 시작 | 앞의 대화를 기억하고 이어감 |
| 잘하는 일 | 사실·자료 찾기 | 정리·변환·작성·요약·검토 |
| 약한 일 | 문서를 대신 써 주지 못함 | 최신 정보, 정확한 수치·법령 조항 |
| 근거 | 출처 링크가 곧 근거 | **사람이 원문으로 다시 확인해야 함** |

### 핵심 원리 세 가지

**1) 대화는 이어집니다.**
같은 대화창 안에서는 앞서 준 정보를 기억합니다. 그래서 처음에 규칙을 정해 두면 이후 모든 답에 그 규칙이 적용됩니다. 반대로 **주제가 바뀌면 새 대화를 시작**해야 앞의 맥락이 섞이지 않습니다.

**2) 한 번에 완성하려 하면 실패합니다.**
초안 → 지적 → 수정 → 형식 변경. 이렇게 서너 번 주고받는 것이 정상이고, 그게 가장 빠릅니다.

**3) 질문을 이루는 다섯 요소가 결과를 결정합니다.**

| 요소 | 무엇을 적나 | 예 |
|------|-------------|-----|
| 역할 | AI에게 어떤 사람인지 부여 | "20년 경력 행정 문서 전문가" |
| 맥락 | 누가·언제·왜 필요한지 | "과장 결재용, 8월 20일 발송" |
| 요청 | 실제로 시킬 일 | "안내 공문 초안을 써 줘" |
| 형식 | 결과물의 모양 | "제목-수신-본문-붙임 순서, 표로" |
| 조건 | 지켜야 할 제약 | "모르는 숫자는 지어내지 말 것" |

> 다섯 가지를 매번 다 채울 필요는 없습니다. 다만 **결과가 마음에 들지 않으면 빠진 요소부터 채워 넣으세요.** 대부분은 '맥락'과 '조건'이 빠져 있습니다.

### 이 부록의 진행 순서

이어지는 네 개의 따라하기를 순서대로 하면, 실제로 쓸 수 있는 **공문 한 건**과 **나만의 업무 도우미 하나**가 손에 남습니다.

| 순서 | 내용 | 소요 | 남는 것 |
|------|------|------|---------|
| 따라하기 ① | 첫 대화부터 완성 공문까지 | 약 20분 | 공문 초안 + 재사용 템플릿 |
| 따라하기 ② | 내 자료를 근거로만 답하게 하기 | 약 15분 | 근거 확인된 요약 |
| 따라하기 ③ | 반복 업무용 나만의 도우미 만들기 | 약 25분 | 도우미 지시문 |
| 주의사항 | 실제 업무에 쓸 때 지킬 것 | 읽기 10분 | 판단 기준 |
| 따라하기 ④ | 발송 전 5분 자가 점검 | 약 5분 | 점검 완료 문서 |`,contentEn:`Chatbot Q&A is **not a one-shot search — it is a conversation you steer toward the result you want.** The most common failure is asking once and concluding "this isn't very good."

### How it differs from a search portal

| | Search portal | Chatbot Q&A |
|---|---|---|
| Returns | A list of links | Finished sentences, tables, drafts |
| Context | Starts fresh every time | Remembers earlier turns |
| Strong at | Finding facts and sources | Organizing, converting, writing, reviewing |
| Weak at | Writing the document for you | Latest news, exact figures, legal clauses |
| Evidence | The source link is the evidence | **A human must re-check the original** |

### Three core principles

1. **The conversation carries over.** Rules set in your first message apply to every later answer. Start a *new* chat when the topic changes.
2. **Do not try to finish in one shot.** Draft → critique → revise → reformat. Three or four turns is normal, and fastest.
3. **The parts of your question decide the result** — Role, Context, Request, Format, Constraints.

> You don't need all five every time. When the answer disappoints, **add the missing part** — usually Context and Constraints.

### What follows

| Step | Topic | Time | You end up with |
|------|-------|------|-----------------|
| Walkthrough 1 | First message to finished document | ~20 min | A draft + reusable template |
| Walkthrough 2 | Answer only from my own files | ~15 min | A grounded summary |
| Walkthrough 3 | Build your own work assistant | ~25 min | An assistant instruction set |
| Cautions | Rules for real work | 10 min read | Judgment criteria |
| Walkthrough 4 | 5-minute pre-send self-check | ~5 min | A checked document |`},{title:"따라하기 ① 첫 대화부터 완성 공문까지",titleEn:"Walkthrough 1 — From First Message to a Finished Document",content:`**소요 시간 약 20분 · 준비물: ChatGPT(또는 Claude·Gemini) 계정**

이 실습을 마치면 "노후 경로당 시설 보수 지원" 안내 공문 한 건이 실제로 완성됩니다. 단계마다 **화면에 무엇이 보여야 하는지**를 적어 두었으니, 그대로 나오는지 확인하며 진행하세요.

---

### STEP 0 · 새 대화 열기

쓰던 챗봇에 로그인하고 **[새 대화]** 를 누릅니다.

**✅ 확인** — 이전 대화가 남아 있지 않은 빈 입력창이 보이면 준비 완료입니다.

---

### STEP 1 · 역할과 규칙을 먼저 못 박기

가장 중요한 단계입니다. 아래를 **그대로 복사해 첫 메시지로** 보내세요.

\`\`\`text
너는 대구광역시 기초자치단체에서 행정 문서를 20년 작성해 온 전문가야.
앞으로 내가 요청하는 문서는 아래 규칙을 항상 지켜서 써 줘.

1. 공문은 제목 - 수신 - 본문 - 붙임 순서를 지킨다.
2. 어려운 행정용어는 괄호로 쉬운 말을 덧붙인다.
3. 내가 알려주지 않은 숫자, 날짜, 금액, 근거 법령은 절대 지어내지 말고
   반드시 [확인 필요] 라고 표시해 둔다.

이 규칙을 이해했으면 "확인했습니다" 라고만 답해 줘.
\`\`\`

**✅ 확인** — 답이 **"확인했습니다"** 한 줄로 짧게 오면 성공입니다.
설명을 길게 늘어놓으면 규칙을 제대로 받지 않은 것이니, "규칙 1~3만 지키고 짧게 답해 줘"라고 한 번 더 보내세요.

> **왜 이렇게 하나요?** 3번 규칙이 이 실습 전체의 안전장치입니다. 이 한 줄이 있으면 AI가 예산액이나 근거 조항을 그럴듯하게 지어내는 대신 [확인 필요]로 남겨 둡니다.

---

### STEP 2 · 맥락을 주고 초안 요청하기

같은 대화창에 이어서 보냅니다.

\`\`\`text
다음 정보로 안내 공문 초안을 작성해 줘.

- 사업명: 노후 경로당 시설 보수 지원
- 수신: 각 행정복지센터장
- 목적: 관내 경로당 중 보수가 필요한 곳의 신청을 받기 위함
- 신청 기간: 9월 1일부터 9월 19일까지
- 제출처: 어르신복지과
- 제출 서류: 신청서, 시설 현황 사진, 견적서
\`\`\`

**✅ 확인** — 이런 모양의 초안이 나옵니다.

\`\`\`text
제목: 노후 경로당 시설 보수 지원 사업 신청 안내

수신: 각 행정복지센터장

1. 관내 어르신들의 안전하고 쾌적한 여가 환경 조성을 위하여
   노후 경로당 시설 보수 지원 사업을 아래와 같이 시행하고자 합니다.
2. 신청 기간: 9월 1일 ~ 9월 19일
3. 제출처: 어르신복지과
4. 지원 규모: [확인 필요]
5. 근거: [확인 필요]

붙임  1. 신청서 1부.
      2. 시설 현황 사진 및 견적서 각 1부.  끝.
\`\`\`

눈여겨볼 것은 **4번과 5번의 [확인 필요]** 입니다. 알려주지 않은 정보를 지어내지 않고 비워 둔 것 — STEP 1의 규칙 3이 작동한 증거입니다.

---

### STEP 3 · 형식을 못 박아 다시 받기

초안이 나왔으니 이제 모양을 다듬습니다.

\`\`\`text
좋아. 두 가지만 고쳐 줘.
1. 본문을 5개 항목 이내로 줄이고, 각 항목은 두 줄을 넘기지 마.
2. 제출 서류는 문장이 아니라 표로 정리해 줘.
\`\`\`

**✅ 확인** — 서류 목록이 아래처럼 **표**로 바뀌어 나오면 성공입니다.

| 제출 서류 | 부수 | 비고 |
|-----------|------|------|
| 신청서 | 1부 | 소정 양식 |
| 시설 현황 사진 | 1부 | 보수 필요 부위 |
| 견적서 | 1부 | 업체 발행 |

---

### STEP 4 · 대화로 다듬기 — 한 번에 끝내지 않기

마음에 안 드는 부분만 콕 집어 말합니다. **전체를 다시 쓰라고 하지 마세요.**

\`\`\`text
1번 항목의 말투가 너무 딱딱해. 그 항목만 더 정중하게 다시 써 줘.
나머지는 그대로 두고.
\`\`\`

**✅ 확인** — 1번 항목만 바뀌고 나머지 항목과 표는 그대로 유지되면 성공입니다.
전체가 다 바뀌었다면 "나머지는 그대로 두고"가 빠진 것이니 다시 지시하세요.

---

### STEP 5 · AI에게 스스로 검증시키기

발송 전 마지막 점검을 AI에게 시킵니다.

\`\`\`text
지금까지 작성한 공문에서 아래 세 가지를 목록으로 뽑아 줘.
1. 내가 알려주지 않아서 네가 [확인 필요]로 남긴 항목
2. 사실 확인이 필요한 숫자나 날짜
3. 개인정보나 민감정보가 들어간 부분
\`\`\`

**✅ 확인** — 이런 목록이 나옵니다. **이 목록이 곧 여러분이 직접 채워야 할 일감입니다.**

\`\`\`text
1. 확인 필요 항목
   - 지원 규모(총 예산 및 개소당 한도)
   - 근거 법령 또는 자치법규

2. 사실 확인이 필요한 항목
   - 신청 기간 9월 1일~19일이 실제 사업 일정과 일치하는지
   - 어르신복지과가 정확한 제출처 명칭인지

3. 개인정보
   - 현재 문서에는 개인정보가 포함되어 있지 않음
\`\`\`

---

### STEP 6 · 다음에도 쓰도록 템플릿으로 저장하기

\`\`\`text
지금 우리가 주고받은 과정을, 다음에 다른 사업으로도 쓸 수 있게
빈칸 채우기 템플릿으로 정리해 줘.
사업명, 수신, 목적, 기간, 제출처, 제출 서류만 바꿔 넣으면
같은 품질의 공문이 나오도록.
\`\`\`

**✅ 확인** — [사업명], [신청 기간] 처럼 대괄호로 빈칸이 표시된 템플릿이 나오면 성공입니다. 이 템플릿을 메모장이나 부서 공유 문서에 저장해 두세요.

---

### 이번 실습으로 손에 남은 것

- 규칙이 적용된 대화창 하나
- [확인 필요]가 표시된 공문 초안
- 표로 정리된 제출 서류 목록
- 내가 채워야 할 확인 항목 목록
- 다음에 재사용할 빈칸 템플릿

> 확인 항목을 채우기 전까지 이 문서는 아직 **초안**입니다. 실제 발송 전에는 반드시 〈실제 업무 활용 시 주의사항〉과 〈따라하기 ④〉를 거치세요.`,contentEn:`**About 20 minutes · You need a ChatGPT (or Claude/Gemini) account**

By the end you will have a real draft: a notice about a senior-center repair program. Each step tells you **what should appear on screen**, so you can verify as you go.

### STEP 0 · Open a new chat
Log in and click **New chat**.
**✅ Check** — an empty input box with no earlier conversation.

### STEP 1 · Fix the role and rules first
Send this as your very first message.

\`\`\`text
You are an expert who has written administrative documents for 20 years
at a Daegu district office.

Always follow these rules:
1. Official documents keep the order Title - Recipient - Body - Attachments.
2. Add a plain-language gloss in parentheses for difficult jargon.
3. Never invent a number, date, amount or legal basis I did not give you.
   Mark it [TO VERIFY] instead.

If you understand, reply only "Understood."
\`\`\`

**✅ Check** — a one-line **"Understood."** If it rambles, resend asking for a short reply.

> **Why?** Rule 3 is the safety net for the whole walkthrough. It makes the model leave a gap instead of fabricating a budget figure.

### STEP 2 · Give context, ask for a draft
Provide program name, recipient, purpose, dates, submission office and required documents.
**✅ Check** — the draft contains \`[TO VERIFY]\` wherever you gave no data. That is rule 3 working.

### STEP 3 · Pin down the format
"Keep the body to 5 items, two lines each, and put the required documents in a table."
**✅ Check** — the document list is now a table.

### STEP 4 · Refine by conversation
"Only item 1 sounds too stiff. Rewrite just that one, leave the rest as is."
**✅ Check** — only item 1 changed. If everything changed, you omitted "leave the rest as is."

### STEP 5 · Make the AI check its own work
Ask it to list (1) everything it marked \`[TO VERIFY]\`, (2) figures needing fact-checking, (3) any personal data.
**✅ Check** — that list *is* your to-do list.

### STEP 6 · Save it as a template
Ask for a fill-in-the-blank template so the next program only needs new values.
**✅ Check** — blanks appear as \`[Program name]\`, \`[Period]\`. Save it.

### What you now have
A rule-primed chat, a draft with gaps marked, a document table, your verification to-do list, and a reusable template.

> Until those gaps are filled this is still a **draft**. Run *Cautions for Real Work* and *Walkthrough 4* before sending.`},{title:"따라하기 ② 내 자료를 근거로만 답하게 하기",titleEn:"Walkthrough 2 — Answer Only From My Own Files",content:`**소요 시간 약 15분 · 준비물: 업무 관련 PDF·한글 문서 1개(지침·규정·계획서 등)**

챗봇이 지어내는 답(환각)을 가장 확실하게 줄이는 방법은 **읽을 자료를 직접 주고, 그 안에서만 답하라고 못 박는 것**입니다. 이 실습에서는 그 지시가 실제로 작동하는지를 **함정 질문으로 직접 검증**합니다.

---

### STEP 1 · 올릴 자료 고르고 개인정보 지우기

부서 지침, 사업 계획서, 규정집 등 **10~50쪽 분량** 문서 하나를 고릅니다.

올리기 전에 반드시 확인하세요.

| 지워야 할 것 | 예 |
|--------------|-----|
| 주민등록번호·생년월일 | 신청자 명부 |
| 이름·연락처·주소 | 민원인 정보, 담당자 개인 휴대폰 |
| 계좌번호 | 보조금 지급 명세 |
| 비공개 표시 문서 | 대외비·직무상 비밀 |

**✅ 확인** — 파일을 열어 위 항목이 남아 있지 않은지 눈으로 훑었다면 다음 단계로.

---

### STEP 2 · 파일 올리기

새 대화를 열고 입력창의 **클립(📎) 아이콘**으로 파일을 첨부합니다.

**✅ 확인** — 입력창 위에 파일 이름이 표시되면 업로드 성공입니다. 표시되지 않으면 용량 초과이거나 지원하지 않는 형식입니다. 한글(.hwp) 파일이 안 올라가면 **PDF로 저장한 뒤** 다시 시도하세요.

---

### STEP 3 · "첨부한 자료 안에서만" 못 박기

파일을 붙인 상태로 아래를 보냅니다.

\`\`\`text
첨부한 문서만 근거로 삼아서 답해 줘. 규칙은 이렇게.

1. 문서에 없는 내용은 절대 추측하지 말고 "문서에 없음"이라고 답한다.
2. 답의 각 항목 끝에 근거가 있는 쪽수나 조항 번호를 괄호로 표시한다.
3. 문서와 다른 일반 상식은 섞지 않는다.

먼저 이 문서가 무엇에 관한 것인지 다섯 줄로 요약해 줘.
\`\`\`

**✅ 확인** — 요약 문장 끝마다 **(3쪽)**, **(제7조)** 같은 근거 표시가 붙어 나오면 성공입니다. 근거 표시가 하나도 없다면 규칙 2를 다시 강조해 보내세요.

---

### STEP 4 · 실제로 필요한 것을 뽑아내기

요약이 잘 나왔다면 본론으로 들어갑니다.

\`\`\`text
이 문서에서 담당자가 자주 실수할 만한 지점 3가지를 찾아 줘.
각각 (1) 무엇을 실수하는지 (2) 문서의 어느 부분 때문인지
(3) 어떻게 하면 되는지 순서로.
근거 쪽수를 반드시 붙여 줘.
\`\`\`

**✅ 확인** — 세 항목 모두 근거 쪽수가 붙어 있는지 봅니다. **쪽수가 붙지 않은 항목은 지어냈을 가능성이 높으니 따로 표시해 두세요.**

---

### STEP 5 · 함정 질문으로 검증하기 — 이 실습의 핵심

문서에 **분명히 없는 내용**을 일부러 물어봅니다.

\`\`\`text
이 문서에 적힌 2027년 예산 배정액은 얼마야?
\`\`\`

**✅ 확인** — 결과를 두 가지로 나눠 판단하세요.

| AI의 답 | 판단 | 다음 행동 |
|---------|------|-----------|
| "문서에 없음" 또는 "해당 내용을 찾을 수 없습니다" | **정상** | 이 대화창의 답을 신뢰하고 계속 사용 |
| 그럴듯한 금액을 제시함 | **위험** | 이 대화는 버리고 새 대화에서 STEP 3부터 다시 |

> 이 함정 질문 한 번이 **"이 대화창의 답을 믿어도 되는가"를 판정하는 시험지**입니다. 중요한 자료를 다룰 때는 매번 넣으세요.

---

### 이번 실습으로 손에 남은 것

- 근거 쪽수가 붙은 자료 요약
- 실수 지점 3가지와 그 근거
- 이 대화창이 믿을 만한지에 대한 판정 결과

> 근거 쪽수가 붙었다고 해서 그 쪽에 정말 그 내용이 있는 것은 아닙니다. **중요한 항목은 원문 해당 쪽을 직접 펴서 대조**하세요. 근거 표시는 확인을 쉽게 해 줄 뿐, 확인을 대신해 주지 않습니다.`,contentEn:`**About 15 minutes · You need one work document (PDF/HWP): a guideline, regulation or plan**

The most reliable way to reduce hallucination is to **give the model the source and forbid it from going outside it.** Here you will verify that the instruction actually works, using a trap question.

### STEP 1 · Pick a file and strip personal data
Choose a 10–50 page document. Before uploading, remove: national ID numbers, names/contacts/addresses, bank account numbers, and anything marked confidential.
**✅ Check** — you have visually scanned the file for those items.

### STEP 2 · Upload it
Open a new chat and attach the file with the 📎 icon.
**✅ Check** — the filename appears above the input box. If .hwp fails, save as PDF and retry.

### STEP 3 · Pin it to the attachment only

\`\`\`text
Answer using ONLY the attached document.

1. Never guess anything not in the document — say "not in the document".
2. End each point with the page or article number in parentheses.
3. Do not mix in general knowledge that conflicts with the document.

First, summarize what this document is about in five lines.
\`\`\`

**✅ Check** — each line ends with **(p. 3)** or **(Art. 7)**. If no citations appear, restate rule 2.

### STEP 4 · Extract what you actually need
Ask for the three mistakes staff most often make, each with what goes wrong, which part of the document causes it, and the fix — with page citations.
**✅ Check** — every item carries a citation. **Flag any item without one; it may be invented.**

### STEP 5 · The trap question — the point of this walkthrough
Ask about something the document clearly does **not** contain, e.g. "What is the 2027 budget allocation stated in this document?"

| The answer | Verdict | What to do |
|---|---|---|
| "Not in the document" | **Healthy** | Keep using this chat |
| A plausible-looking figure | **Unsafe** | Abandon the chat, restart from STEP 3 |

> That one question is the **test paper that tells you whether this chat can be trusted.** Use it every time the material matters.

### What you now have
A cited summary, three risk points with sources, and a verdict on whether this chat is trustworthy.

> A citation is not proof. **Open the cited page and compare it yourself** for anything important — citations make verification easier, they do not replace it.`},{title:"따라하기 ③ 반복 업무용 나만의 도우미 만들기",titleEn:"Walkthrough 3 — Build Your Own Work Assistant",content:`**소요 시간 약 25분 · 준비물: 매달 반복하는 업무 하나**

매번 같은 지시를 다시 입력하는 것은 낭비입니다. 한 번 만들어 두면 계속 쓰는 **지시문(도우미)** 을 만듭니다.

---

### STEP 1 · 자동화할 업무 고르기

아래 조건을 **모두** 만족하는 업무가 좋습니다.

| 조건 | 이유 |
|------|------|
| 한 달에 두 번 이상 반복 | 만드는 시간이 회수됨 |
| 결과물의 형식이 정해져 있음 | 규칙으로 적을 수 있음 |
| 개인정보가 없거나 지울 수 있음 | 안전하게 올릴 수 있음 |
| 틀려도 발송 전에 걸러짐 | 위험이 낮음 |

**좋은 예** — 회의록 정리, 주간 업무보고 요약, 행사 안내문, 민원 답변 초안
**피할 것** — 인사·징계 관련 문서, 개인정보가 본질인 문서, 법적 효력이 즉시 발생하는 문서

**✅ 확인** — 업무 하나를 종이나 메모장에 적었다면 다음 단계로.

---

### STEP 2 · 지시문 초안을 AI와 함께 만들기

\`\`\`text
나는 매주 부서 회의록을 정리해서 팀에 공유해.
이 일을 대신해 줄 도우미의 "지시문"을 만들어 줘.

지시문에는 이런 게 들어가야 해.
1. 도우미의 역할
2. 결과물의 고정된 형식 - 결정사항 / 담당자별 할 일 표 / 다음 안건
3. 지켜야 할 말투 - 간결한 행정 문어체
4. 하지 말아야 할 것 - 메모에 없는 내용 추측 금지, 참석자 실명 대신 직위 사용

지시문만 코드 블록으로 출력해 줘. 설명은 빼고.
\`\`\`

**✅ 확인** — 설명 없이 **지시문 본문만** 블록으로 나오면 성공입니다. 설명이 섞여 나오면 "설명은 빼고 지시문만"을 다시 강조하세요.

---

### STEP 3 · 진짜 사례로 시험하기

지금 만든 지시문을 복사해서, **새 대화**의 첫 메시지로 보냅니다. 그다음 실제 회의 메모를 붙여넣습니다.

\`\`\`text
(위에서 만든 지시문을 여기 붙여넣기)

--- 아래는 이번 주 회의 메모 ---
(실제 메모를 붙여넣기. 이름은 직위로 바꿔서)
\`\`\`

**✅ 확인** — 지시문에 적은 **세 부분(결정사항 / 할 일 표 / 다음 안건)이 모두** 나왔는지 확인합니다.

| 나온 것 | 판정 |
|---------|------|
| 세 부분 모두 | STEP 5로 |
| 일부 빠짐 | STEP 4로 |
| 형식이 완전히 다름 | 지시문을 새 대화에 다시 붙여넣고 재시도 |

---

### STEP 4 · 잘못된 점을 지적해 지시문 고치기

여기가 도우미의 품질이 결정되는 단계입니다. **결과를 고치지 말고 지시문을 고치세요.**

\`\`\`text
방금 결과에서 두 가지가 아쉬웠어.
1. 할 일 표에 마감일 칸이 없었다.
2. 결정사항이 너무 길어서 한눈에 안 들어온다.

이 두 가지가 다시 발생하지 않도록 지시문을 고쳐서,
수정된 지시문 전체를 다시 출력해 줘.
\`\`\`

**✅ 확인** — 수정된 지시문에 "마감일 칸 포함", "결정사항은 각 한 줄" 같은 **새 규칙이 실제로 추가**되었는지 눈으로 확인합니다. 확인했으면 STEP 3으로 돌아가 같은 메모로 다시 시험하세요. 보통 두세 번 반복하면 안정됩니다.

---

### STEP 5 · 저장하고 공유하기

완성된 지시문을 저장합니다.

| 저장 위치 | 쓰는 방법 |
|-----------|-----------|
| 메모장·부서 공유 문서 | 매번 새 대화 첫 메시지로 붙여넣기 |
| ChatGPT의 맞춤 GPT / Claude의 프로젝트 | 한 번 등록하면 붙여넣기도 불필요 |

**✅ 확인** — 다음 주에 새 대화를 열어 지시문을 붙여넣었을 때, 같은 형식의 결과가 나오면 도우미 완성입니다.

> 부서원과 지시문을 공유하면 **누가 하든 같은 형식의 결과**가 나옵니다. 문서 품질을 사람이 아니라 규칙으로 관리하는 방법입니다.`,contentEn:`**About 25 minutes · You need one recurring task**

Retyping the same instructions every time is waste. Build an **instruction set (an assistant)** once and reuse it.

### STEP 1 · Choose the task
It should be repeated twice a month or more, have a fixed output format, contain no personal data (or data you can strip), and be caught by review before it goes out.
**Good:** minutes, weekly report summaries, event notices, draft replies to citizens.
**Avoid:** HR/disciplinary documents, documents whose substance *is* personal data, anything legally binding on issue.

### STEP 2 · Draft the instruction set with the AI
Ask it to write the assistant's instruction set covering: role, fixed output format (decisions / owner-task table / next agenda), tone, and prohibitions (no guessing beyond the notes, use titles not real names). Ask for **the instruction set only, in a code block, no commentary.**
**✅ Check** — you get the instruction body alone.

### STEP 3 · Test with a real case
Paste the instruction set as the first message of a **new chat**, then paste real meeting notes (names replaced by titles).
**✅ Check** — all three required parts appear. If parts are missing, go to STEP 4.

### STEP 4 · Fix the instruction set, not the output
Name what went wrong ("the task table had no due-date column"; "decisions ran too long") and ask it to **revise the instruction set and print the whole thing again.**
**✅ Check** — the new rules actually appear in the revised instructions. Return to STEP 3 and retest. Two or three rounds usually stabilizes it.

### STEP 5 · Save and share
Keep it in a shared note, or register it as a Custom GPT / Claude Project so you don't even paste it.
**✅ Check** — next week, a fresh chat with the same instructions produces the same format.

> Share the instruction set with your team and **everyone produces the same format.** That is managing document quality by rule rather than by person.`},{title:"실제 업무 활용 시 주의사항",titleEn:"Cautions for Real Work",content:`앞의 세 실습이 "어떻게 잘 쓰는가"였다면, 여기는 **"무엇을 하면 안 되는가"** 입니다. 편리함과 책임은 함께 갑니다. **AI는 도구이고, 판단과 책임은 사람에게 남습니다.**

---

### 1. 입력해서는 안 되는 정보

공개 챗봇에 넣은 내용은 **기관 밖 서버로 전송**됩니다. 아래는 넣지 마세요.

| 구분 | 예 | 대안 |
|------|-----|------|
| 고유식별정보 | 주민등록번호, 외국인등록번호, 운전면허번호 | 아예 삭제 |
| 개인 식별정보 | 민원인 성명·연락처·주소, 직원 개인 휴대폰 | \`민원인A\`, \`담당자B\`로 치환 |
| 민감정보 | 건강·질병, 범죄경력, 노조 가입, 정치 성향 | 통계 수치만 사용 |
| 재산·금융 | 계좌번호, 보조금 지급 명세, 소득 자료 | 금액 구간으로 뭉뚱그림 |
| 비공개 문서 | 대외비, 직무상 비밀, 미공개 감사자료 | 챗봇 사용 자체를 하지 않음 |
| 보안 정보 | 시스템 계정·비밀번호, 내부 IP, 인증키 | 절대 입력 금지 |

**실무 요령** — 표를 붙여넣기 전에 이름 열을 지우고 \`A, B, C\`로 바꾸세요. 대부분의 분석은 이름 없이도 똑같이 됩니다.

> 소속 기관에 생성형 AI 이용 지침이 있다면 **그 지침이 이 문서보다 우선**합니다. 반드시 먼저 확인하세요.

---

### 2. 지어낸 정보(환각)를 거르기

AI는 **모르는 것도 자신 있게** 답합니다. 특히 위험한 항목은 정해져 있습니다.

| 위험도 | 항목 | 반드시 할 일 |
|--------|------|--------------|
| 매우 높음 | 법령·조례 조항 번호, 판례 | 국가법령정보센터 원문 대조 |
| 매우 높음 | 통계 수치, 예산액 | 원 자료·내부 시스템 대조 |
| 높음 | 날짜, 기한, 담당 부서명 | 내부 문서 대조 |
| 높음 | 인용문, 발언 | 원문 확인 |
| 낮음 | 문장 다듬기, 요약, 형식 변환 | 통독 검토 |

**세 가지 습관으로 크게 줄일 수 있습니다.**

1. 프롬프트에 \`확실하지 않으면 [확인 필요]로 표시해 줘\` 넣기 — 따라하기 ①의 규칙 3
2. 자료를 첨부하고 \`첨부 내용에만 근거해서\` 지시하기 — 따라하기 ②
3. 자료에 없는 것을 일부러 물어 **함정 질문으로 검증**하기 — 따라하기 ② STEP 5

---

### 3. 최신 정보는 믿지 않기

챗봇의 학습 데이터에는 **시점 한계**가 있습니다. 올해 개정된 조례, 이번 달 인사, 최근 지침 변경은 모를 수 있고, 더 나쁘게는 **옛 내용을 현재인 것처럼** 답합니다.

- 최신 정보가 필요하면 **검색 기능이 켜진 상태**인지 확인하고, 그래도 원문 링크를 직접 열어 보세요.
- 더 안전한 방법은 **최신 문서를 직접 첨부**하는 것입니다(따라하기 ②).

---

### 4. 저작권과 표절

- 생성된 문장이라도 **기존 저작물과 유사할 수 있습니다.** 보도자료·홍보물처럼 외부 공개물은 검색으로 유사 문구를 한 번 확인하세요.
- 생성 이미지는 **라이선스와 초상권** 문제가 남습니다. 시정 홍보물에 쓸 때는 특히 주의하세요.
- 타 기관 문서를 통째로 넣고 "이대로 바꿔 줘"라고 하는 것은 표절 위험이 있습니다.

---

### 5. 책임과 결재는 사람에게 있습니다

| 잘못된 생각 | 실제 |
|-------------|------|
| "AI가 써 준 대로 보냈다" | 결재선의 책임은 그대로 사람에게 있음 |
| "AI가 그렇게 답했다" | 대외적으로 통용되지 않는 해명 |
| "검토는 AI가 했다" | AI 검토는 사람 검토를 대신하지 못함 |

**AI 결과물은 언제나 초안입니다.** 최종본은 담당자가 읽고, 고치고, 책임지는 문서여야 합니다.

---

### 6. 기록물·공문서 관리

- 챗봇 대화창은 **공식 기록물이 아닙니다.** 확정된 문서는 반드시 정식 시스템에 등재하세요.
- 대화 내용이 자동 저장되므로, **민감한 대화는 사용 후 삭제**하고 계정 설정에서 학습 이용 여부를 확인하세요.
- 공용 PC에서 사용했다면 **반드시 로그아웃**하세요.

---

### 7. 공정성과 차별

AI는 학습 데이터에 있던 편향을 그대로 반영할 수 있습니다. 지원 대상 선정, 우선순위 산정처럼 **주민에게 유불리가 갈리는 판단에는 AI 결과를 근거로 쓰지 마세요.** 문안 작성이나 자료 정리에만 쓰고, 판단은 정해진 기준과 사람이 합니다.

---

> **한 줄 요약** — 넣지 말 것을 넣지 않고, 나온 것을 그대로 믿지 않으면 대부분의 사고는 막을 수 있습니다. 다음 〈따라하기 ④〉로 실제 문서를 점검해 보세요.`,contentEn:`The three walkthroughs covered *how to use it well*. This section covers **what not to do.** Convenience and accountability travel together: **the AI is a tool; judgment and responsibility stay with you.**

### 1. What must never be entered
Anything you type into a public chatbot **leaves your organization's network.**

| Category | Examples | Instead |
|---|---|---|
| National identifiers | Resident/foreigner registration, licence numbers | Delete entirely |
| Personal identifiers | Citizen names, phone numbers, addresses | Replace with \`Citizen A\`, \`Officer B\` |
| Sensitive data | Health, criminal record, union, politics | Use aggregate figures only |
| Financial | Account numbers, subsidy payment records | Use ranges |
| Non-public documents | Confidential, official secrets, draft audits | Do not use a chatbot at all |
| Security | Credentials, internal IPs, API keys | Never |

**Practical tip** — delete the name column before pasting a table. Most analysis works exactly the same without it.

> If your organization has its own generative-AI policy, **it takes precedence over this page.**

### 2. Filtering out hallucination
The model answers confidently even when it does not know.

| Risk | Item | Required action |
|---|---|---|
| Very high | Statute/ordinance article numbers, case law | Check the official legal database |
| Very high | Statistics, budget figures | Check the source system |
| High | Dates, deadlines, department names | Check internal documents |
| High | Quotations | Check the original |
| Low | Rewriting, summarizing, reformatting | Read it through |

Three habits: (1) require \`[TO VERIFY]\` markers, (2) attach the source and restrict answers to it, (3) use a trap question to test the chat.

### 3. Do not trust "latest" information
Training data has a cutoff. Recent ordinance amendments, this month's personnel changes and updated guidance may be missing — or worse, stale content presented as current. Turn on search and open the source link, or better, attach the current document yourself.

### 4. Copyright and plagiarism
Generated text can resemble existing work — run a search on public-facing copy. Generated images carry licence and likeness issues. Pasting another body's document and asking for a rewrite is a plagiarism risk.

### 5. Accountability stays with people

| Wrong assumption | Reality |
|---|---|
| "I sent what the AI wrote" | The approval chain's accountability is unchanged |
| "That's what the AI said" | Not an explanation that holds up externally |
| "The AI reviewed it" | AI review does not substitute for human review |

**AI output is always a draft.** The final version must be read, corrected and owned by a person.

### 6. Records management
A chat thread is **not an official record** — register finished documents in the proper system. Delete sensitive threads afterwards, check your data-training settings, and always log out on shared PCs.

### 7. Fairness and discrimination
Models reproduce bias in their training data. **Never use AI output as the basis for decisions that advantage or disadvantage residents** — eligibility, prioritization. Use it for drafting and organizing; people decide against defined criteria.

> **In one line** — don't put in what shouldn't go in, and don't trust what comes out at face value. That prevents most incidents.`},{title:"따라하기 ④ 발송 전 5분 자가 점검",titleEn:"Walkthrough 4 — The 5-Minute Pre-Send Check",content:`**소요 시간 약 5분 · 준비물: 따라하기 ①에서 만든 공문(또는 실제로 곧 보낼 문서)**

주의사항을 읽는 것만으로는 몸에 붙지 않습니다. **실제 문서 하나를 놓고 다섯 단계로 점검**해 보세요. 이 순서를 두세 번 하면 습관이 됩니다.

---

### STEP 1 · AI에게 1차 점검을 시킨다

점검할 문서를 붙여넣고 아래를 보냅니다.

\`\`\`text
아래 문서를 발송 전 점검해 줘. 네 가지 관점으로 각각 나눠서,
문제가 있으면 해당 문장을 그대로 인용하고 없으면 "없음"이라고 써 줘.

1. 사실 확인이 필요한 부분 - 숫자, 날짜, 법령, 기관명
2. 개인정보나 민감정보가 들어간 부분
3. 받는 사람이 오해할 수 있는 애매한 표현
4. 행정 문서로서 어색한 말투

--- 문서 ---
(여기에 문서 붙여넣기)
\`\`\`

**✅ 확인** — 네 항목이 각각 구분되어 나오고, 문제가 있는 곳은 **원문 문장이 인용**되어 있으면 성공입니다.

---

### STEP 2 · 1번 항목을 사람이 직접 대조한다

AI가 뽑아 준 "사실 확인 필요" 목록을 들고 **원문을 직접 엽니다.**

| 항목 | 어디서 확인 |
|------|-------------|
| 법령·조례 조항 | 국가법령정보센터, 자치법규정보시스템 |
| 예산·통계 수치 | 내부 시스템, 원 자료 |
| 날짜·기한 | 사업 계획서, 결재 문서 |
| 기관·부서 명칭 | 조직도 |

**✅ 확인** — 목록의 모든 항목에 ✔ 또는 ✘ 표시를 했다면 완료. **✘가 하나라도 있으면 문서를 고치고 STEP 1부터 다시** 하세요.

> 이 단계는 AI에게 시킬 수 없습니다. **AI가 만든 목록을 사람이 확인하는 것**이 이 점검의 핵심입니다.

---

### STEP 3 · 개인정보를 직접 눈으로 훑는다

AI가 "없음"이라고 해도 믿지 말고 직접 봅니다. 특히 **붙임 파일과 표 안쪽**을 보세요.

- 본문에 실명이 남아 있지 않은가
- 붙임 파일에 명부·연락처가 들어 있지 않은가
- 표의 숨겨진 열이나 시트가 남아 있지 않은가

**✅ 확인** — 세 가지를 모두 확인했다면 다음 단계로.

---

### STEP 4 · 애매한 표현을 확정형으로 고친다

STEP 1의 3번 목록을 봅니다. 아래처럼 바꾸세요.

| 애매한 표현 | 고친 표현 |
|-------------|-----------|
| 가급적 빠른 시일 내에 | 9월 19일(금)까지 |
| 관련 부서에 제출 | 어르신복지과에 제출 |
| 필요한 서류 일체 | 신청서·사진·견적서 각 1부 |
| 추후 안내 예정 | 9월 25일 별도 공문으로 안내 |

**✅ 확인** — "언제까지, 어디로, 무엇을"이 문서 안에서 모두 답이 되면 성공입니다.

---

### STEP 5 · 최종 확인표를 채운다

발송 직전, 아래 일곱 항목에 스스로 답합니다. **하나라도 '아니오'가 있으면 보내지 마세요.**

| # | 확인 항목 | 예/아니오 |
|---|-----------|-----------|
| 1 | [확인 필요] 표시가 문서에 하나도 남아 있지 않다 | |
| 2 | 숫자·날짜·법령을 원문과 대조했다 | |
| 3 | 개인정보·민감정보가 본문과 붙임에 없다 | |
| 4 | 언제까지·어디로·무엇을이 모두 명확하다 | |
| 5 | 처음부터 끝까지 사람이 직접 통독했다 | |
| 6 | 기관의 AI 이용 지침을 위반하지 않았다 | |
| 7 | 확정본을 정식 문서 시스템에 등재할 준비가 됐다 | |

**✅ 확인** — 일곱 항목 모두 '예'라면 발송해도 좋습니다.

---

### 마무리

여기까지 왔다면 **따라하기 ①에서 만든 초안이 실제로 보낼 수 있는 문서**가 되었습니다. 지금까지의 흐름을 한 줄로 요약하면 이렇습니다.

> 규칙을 먼저 정하고 → 맥락을 주고 → 대화로 다듬고 → 근거를 확인하고 → **사람이 최종 책임진다.**

이 다섯 단계가 챗봇 활용의 전부입니다. 나머지는 반복하면서 익숙해지는 일만 남았습니다.`,contentEn:`**About 5 minutes · Use the document from Walkthrough 1, or one you are actually about to send**

Reading cautions does not make them stick. Run a real document through these five steps two or three times and it becomes habit.

### STEP 1 · Have the AI do a first pass
Paste the document and ask it to check four things separately — facts needing verification (numbers, dates, statutes, organization names), personal or sensitive data, ambiguous wording, and tone — quoting the offending sentence, or writing "none".
**✅ Check** — four separate sections, with the original sentence quoted wherever there is a problem.

### STEP 2 · Verify list 1 yourself, against sources
Take the "needs verification" list and **open the originals**: the legal database for statutes, internal systems for budget and statistics, planning documents for dates, the org chart for department names.
**✅ Check** — every item marked ✔ or ✘. **One ✘ means fix the document and restart from STEP 1.**

> This step cannot be delegated. **A human checking the AI's list is the whole point of the review.**

### STEP 3 · Scan for personal data with your own eyes
Do not trust a "none". Look especially at **attachments and inside tables** — names left in the body, contact lists in attachments, hidden columns or sheets.

### STEP 4 · Replace vague wording with specifics

| Vague | Fixed |
|---|---|
| As soon as possible | By Friday 19 September |
| Submit to the relevant department | Submit to the Senior Welfare Division |
| All necessary documents | Application, photo, quotation — 1 copy each |
| To be announced later | Announced by separate notice on 25 September |

**✅ Check** — by when, to whom, and what are all answered inside the document.

### STEP 5 · Fill in the final table
**If any answer is "no", do not send.**

| # | Check | Yes/No |
|---|---|---|
| 1 | No \`[TO VERIFY]\` markers remain | |
| 2 | Figures, dates and statutes checked against sources | |
| 3 | No personal or sensitive data in body or attachments | |
| 4 | By when / to whom / what are all explicit | |
| 5 | A person has read it end to end | |
| 6 | It complies with our AI-use policy | |
| 7 | The final version is ready for the records system | |

### Wrapping up
Your draft is now a document you can actually send. The whole flow in one line:

> Set the rules first → give context → refine by conversation → verify the evidence → **a person takes final responsibility.**

That is all there is to it. The rest is repetition.`}]},i={id:"file-doc",icon:"fa-folder-tree",title:"파일 요약 · 문서 정리",titleEn:"Summarize Files, Organize Documents",sections:[{title:"세 도구 중 무엇을 쓸까",titleEn:"Which of the Three to Use",content:`파일을 요약하고 문서를 정리하는 일은 **ChatGPT · Gemini · Claude 셋 다 할 수 있습니다.** 다만 잘하는 결이 조금씩 다릅니다.

### 무엇이 다른가

| | ChatGPT | Gemini | Claude |
|---|---|---|---|
| 가장 강한 것 | 요청을 형식대로 딱 맞춰 냄 | 표·스프레드시트, 최신 정보 | 긴 문서, 여러 파일 한꺼번에 |
| 파일 붙이는 법 | 입력창의 **클립** | 입력창의 **＋** | **클립** 또는 창에 끌어놓기 |
| 잘 맞는 일 | 회의록 → 표, 형식 변환 | 엑셀 실적 취합, 자료 조사 | 규정집 요약, 여러 부서 파일 병합 |
| 표 다루기 | 좋음 | **매우 좋음**(시트로 바로 붙여넣기) | 좋음 |
| 긴 문서 | 보통 | 좋음 | **매우 좋음** |

> 셋 중 무엇을 쓰든 결과는 비슷합니다. **이미 계정이 있는 것부터** 쓰세요. 도구를 고르느라 시간 쓰는 것이 가장 아깝습니다.

### 세 도구에 공통으로 적용되는 3가지

**1) 파일을 먼저 붙이고, 그다음에 요청합니다.**
파일이 붙기 전에 질문을 보내면 AI가 자기 지식으로 답해 버립니다.

**2) "이 문서만 근거로" 를 반드시 넣습니다.**
이 한 줄이 없으면 문서에 없는 내용을 그럴듯하게 지어냅니다.

**3) 근거 쪽수를 요구하고, 중요한 것은 직접 펴 봅니다.**
쪽수 표시는 확인을 쉽게 해 줄 뿐, 확인을 대신해 주지 않습니다.

### 올리기 전에 지울 것

| 지울 것 | 예 | 대신 |
|---------|-----|------|
| 주민등록번호 | 신청자 명부 | 아예 삭제 |
| 이름·연락처·주소 | 민원인 정보 | \`민원인A\`, \`담당자B\` |
| 계좌번호 | 보조금 지급 명세 | 금액 구간으로 |
| 대외비 문서 | 미공개 감사자료 | 챗봇 사용 안 함 |

> 한글(.hwp) 파일이 안 올라가면 **PDF로 저장한 뒤** 다시 올리세요. 세 도구 모두 PDF는 잘 읽습니다.`,contentEn:`**ChatGPT, Gemini and Claude can all** summarize files and organize documents. They just have different strengths.

### How they differ

| | ChatGPT | Gemini | Claude |
|---|---|---|---|
| Strongest at | Matching the exact format you asked for | Tables, spreadsheets, current information |Long documents, many files at once |
| How to attach | The **paperclip** in the input box | The **＋** in the input box | **Paperclip** or drag onto the window |
| Good fit | Minutes → table, format conversion | Aggregating spreadsheet figures, research | Summarizing regulations, merging files |
| Tables | Good | **Very good** (paste straight into a sheet) | Good |
| Long documents | Fair | Good | **Very good** |

> The results are similar whichever you use. **Start with the account you already have** — time spent choosing a tool is the most wasted time.

### Three rules that apply to all three

1. **Attach the file first, then ask.** Send the question before the file lands and the model answers from its own knowledge.
2. **Always include "based only on this document."** Without that line it will invent plausible content.
3. **Ask for page citations, and open the important ones yourself.** A citation makes verification easy; it does not replace it.

### Strip these before uploading

| Remove | Example | Instead |
|---|---|---|
| National ID numbers | Applicant lists | Delete entirely |
| Names, phones, addresses | Citizen details | \`Citizen A\`, \`Officer B\` |
| Bank accounts | Subsidy payment records | Use ranges |
| Confidential documents | Unpublished audit material | Don't use a chatbot |

> If a .hwp file won't upload, **save it as PDF** and try again. All three read PDFs well.`},{title:"파일 요약 ① ChatGPT 버전",titleEn:"Summarize a File 1 — ChatGPT",content:`아래 그림의 **주황 번호가 곧 STEP 번호**입니다. 화면과 나란히 놓고 따라 하세요.

![ChatGPT 파일 요약 화면](~/appendix/file-summary-chatgpt.svg)

---

### STEP 1 · 파일을 먼저 붙입니다

\`chatgpt.com\` 에 로그인하고 **[+ 새 채팅]** 을 누른 뒤, 입력창 왼쪽의 **클립(📎)** 을 눌러 요약할 파일을 고릅니다.

**✅ 확인** — 입력창 위에 **파일 이름이 뜨면** 업로드 성공입니다. 이름이 안 보이면 아직 붙지 않은 것이니 질문을 보내지 마세요.

---

### STEP 2 · 요청과 규칙을 함께 씁니다

파일이 붙은 상태에서 아래를 그대로 붙여넣습니다.

\`\`\`text
첨부한 문서만 근거로 답해 줘.
문서에 없는 내용은 "문서에 없음"이라고 써 줘.
각 줄 끝에는 근거가 있는 쪽수를 괄호로 표시해 줘.

이 문서를 5줄로 요약해 줘.
\`\`\`

**✅ 확인** — 요청 문장만 보내지 말고 **규칙 세 줄을 반드시 함께** 보냅니다. 이 세 줄이 지어내기를 막는 장치입니다.

---

### STEP 3 · 쪽수와 "문서에 없음"을 확인합니다

**✅ 확인** — 그림의 답변처럼 두 가지가 보여야 합니다.

| 봐야 할 것 | 뜻 |
|-----------|-----|
| 줄 끝의 **(3쪽)** 같은 표시 | 근거가 있는 문장 |
| **"문서에 없음"** | 알려주지 않은 것을 지어내지 않았다는 증거 |

쪽수가 하나도 없으면 규칙이 안 먹은 것입니다. "각 줄 끝에 쪽수를 꼭 붙여 줘"라고 한 번 더 보내세요.

---

### STEP 4 · 필요한 형태로 바꿉니다

\`\`\`text
방금 요약을 회의 보고용으로 바꿔 줘.
제목 한 줄 + 핵심 3개 + 확인이 필요한 항목 순서로.
\`\`\`

**✅ 확인** — 같은 내용이 보고용 형태로 다시 나오면 완료입니다.

> ChatGPT는 **형식 지정에 가장 잘 따릅니다.** "표로", "3줄로", "보고용으로"처럼 모양을 못 박을수록 결과가 좋아집니다.`,contentEn:`The **orange numbers in the picture are the STEP numbers.** Keep it beside your screen.

![ChatGPT file summary screen](~/appendix/file-summary-chatgpt.svg)

### STEP 1 · Attach the file first
Log in to \`chatgpt.com\`, click **+ New chat**, then the **paperclip** at the left of the input box.
**✅ Check** — the filename appears above the input box. If not, don't send yet.

### STEP 2 · Write the request and the rules together

\`\`\`text
Answer using ONLY the attached document.
If something is not in it, write "not in the document".
End each line with the page number in parentheses.

Summarize this document in 5 lines.
\`\`\`

**✅ Check** — send the three rules along with the request. They are what stops fabrication.

### STEP 3 · Verify the citations and the "not in the document"

| Look for | Meaning |
|---|---|
| **(p. 3)** at the end of a line | The statement has a source |
| **"not in the document"** | It did not invent what you never provided |

No citations at all means the rule didn't take — resend "please put the page number at the end of every line."

### STEP 4 · Reshape it for your use
"Turn that summary into a briefing: one title line, three key points, then items needing verification."
**✅ Check** — the same content comes back in briefing form.

> ChatGPT **follows format instructions best.** The more precisely you pin the shape, the better the result.`},{title:"파일 요약 ② Gemini 버전",titleEn:"Summarize a File 2 — Gemini",content:`![Gemini 파일 요약 화면](~/appendix/file-summary-gemini.svg)

---

### STEP 1 · ＋ 로 파일을 올립니다

\`gemini.google.com\` 에서 입력창의 **＋(플러스)** 를 누르고 파일을 고릅니다. Google 계정이면 **드라이브에 있는 파일도 바로** 고를 수 있습니다.

**✅ 확인** — 입력창 위에 파일 이름 카드가 뜨면 성공입니다.

---

### STEP 2 · "이 문서만 근거로" 를 넣습니다

\`\`\`text
이 문서만 근거로 5줄 요약해 줘.
각 줄 끝에 쪽수를 괄호로 표시하고,
문서에 없는 내용은 "문서에서 확인되지 않습니다"라고 써 줘.
\`\`\`

**✅ 확인** — Gemini는 최신 정보 검색이 강해서, 이 문장이 없으면 **문서 대신 인터넷 내용으로** 답할 수 있습니다. 반드시 넣으세요.

---

### STEP 3 · 쪽수를 확인합니다

**✅ 확인** — 그림처럼 각 항목 끝에 쪽수가 붙어 있는지 봅니다. 붙지 않은 항목은 따로 표시해 두었다가 원문에서 확인하세요.

---

### STEP 4 · 표로 뽑아 시트에 붙입니다 — Gemini의 강점

\`\`\`text
위 요약에서 항목·내용·근거쪽수 세 열의 표로 만들어 줘.
구글 시트에 붙여넣을 수 있게 탭으로 구분해 줘.
\`\`\`

**✅ 확인** — 결과를 복사해 구글 시트에 붙여넣으면 **칸이 알아서 나뉘면** 성공입니다.

> Gemini는 **표·스프레드시트 작업에 가장 강합니다.** 엑셀 파일을 그대로 올려 "경향 3가지 찾아줘"라고 시키는 것도 잘합니다.`,contentEn:`![Gemini file summary screen](~/appendix/file-summary-gemini.svg)

### STEP 1 · Upload with ＋
At \`gemini.google.com\`, click the **＋** in the input box. With a Google account you can also pick straight from Drive.
**✅ Check** — a file card appears above the input box.

### STEP 2 · Include "based only on this document"

\`\`\`text
Summarize this document in 5 lines, based only on this document.
Put the page number in parentheses at the end of each line.
If something is not in it, write "not found in the document".
\`\`\`

**✅ Check** — Gemini is strong at live search, so without this line it may answer **from the internet instead of your file.** Always include it.

### STEP 3 · Verify the citations
Check every item ends with a page number. Flag the ones that don't and check them against the original.

### STEP 4 · Pull it into a table and paste into Sheets — Gemini's strength
"Turn that summary into a three-column table (item, content, source page), tab-separated so I can paste into Google Sheets."
**✅ Check** — pasting into Sheets splits it into cells automatically.

> Gemini is **strongest with tables and spreadsheets.** Uploading an Excel file and asking "find three trends" works well too.`},{title:"파일 요약 ③ Claude 버전",titleEn:"Summarize a File 3 — Claude",content:`![Claude 파일 요약 화면](~/appendix/file-summary-claude.svg)

---

### STEP 1 · 긴 문서일수록 Claude로

\`claude.ai\` 에서 **클립**을 누르거나, 파일을 **창 위로 끌어다 놓습니다.** 규정집·계획서처럼 **긴 문서를 통째로** 넣을 때 가장 안정적입니다.

**✅ 확인** — 파일 카드가 입력창 위에 뜨면 성공입니다.

---

### STEP 2 · 규칙과 요청 두 가지를 한 번에

Claude는 여러 요청을 순서대로 처리하는 데 강합니다. 나눠 묻지 말고 한 번에 시켜 보세요.

\`\`\`text
첨부한 문서만 근거로 답해 줘. 없는 내용은 "문서에 없음".

먼저 5줄 요약,
그다음 담당자가 놓치기 쉬운 3가지를 근거 쪽수와 함께.
\`\`\`

**✅ 확인** — 답이 **【5줄 요약】** 과 **【놓치기 쉬운 3가지】** 두 덩어리로 나뉘어 나오면 성공입니다. 한 덩어리만 나왔다면 "두 가지 다 답해 줘"라고 이어서 보내세요.

---

### STEP 3 · 함정 질문으로 신뢰도를 잽니다

문서에 **분명히 없는 것**을 일부러 물어봅니다.

\`\`\`text
이 문서에 적힌 2030년 예산 배정액은 얼마야?
\`\`\`

**✅ 확인**

| 답 | 판정 | 다음 |
|----|------|------|
| "문서에 없음" | **정상** | 이 대화를 계속 쓴다 |
| 그럴듯한 금액 제시 | **위험** | 대화를 버리고 STEP 2부터 다시 |

---

### STEP 4 · 여러 파일을 한꺼번에

\`\`\`text
첨부한 3개 문서의 공통점과 차이점을 표로 정리해 줘.
어느 문서에서 나온 내용인지 파일 이름을 함께 표시해 줘.
\`\`\`

**✅ 확인** — 표의 각 행에 출처 파일 이름이 붙어 있으면 성공입니다.

> Claude는 **긴 문서와 여러 파일 비교에 가장 강합니다.** 부서별 제출본을 한 번에 올려 비교시키기 좋습니다.`,contentEn:`![Claude file summary screen](~/appendix/file-summary-claude.svg)

### STEP 1 · The longer the document, the more Claude helps
At \`claude.ai\`, click the **paperclip** or **drag the file onto the window.** It is the most reliable choice for feeding in a whole regulation book or plan.

### STEP 2 · Rules and two requests in one message

\`\`\`text
Answer using ONLY the attached document. If it is not there, say "not in the document".

First, a 5-line summary.
Then the three things staff most often miss, with page citations.
\`\`\`

**✅ Check** — the answer arrives in two labeled blocks. If only one came, reply "please answer both."

### STEP 3 · Measure trust with a trap question
Ask about something clearly absent, e.g. "What 2030 budget allocation does this document state?"

| Answer | Verdict | Next |
|---|---|---|
| "Not in the document" | **Healthy** | Keep using this chat |
| A plausible figure | **Unsafe** | Abandon it, restart from STEP 2 |

### STEP 4 · Several files at once
"Compare the three attached documents in a table — what they share and where they differ — and label each row with the source filename."
**✅ Check** — every row names its source file.

> Claude is **strongest with long documents and multi-file comparison.**`},{title:"문서 정리 ① ChatGPT 버전",titleEn:"Organize Documents 1 — ChatGPT",content:`흩어진 메모·기록을 **결정사항 · 할 일 표 · 다음 안건**으로 바꾸는 순서입니다.

![ChatGPT 문서 정리 화면](~/appendix/doc-organize-chatgpt.svg)

---

### STEP 1 · 정리할 내용을 그대로 넣습니다

회의 중 적은 메모를 **다듬지 말고 그대로** 붙여넣습니다. 파일이면 클립으로 첨부합니다.

**✅ 확인** — 맞춤법을 고치거나 문장을 다듬느라 시간 쓰지 마세요. **거친 메모 그대로**가 오히려 낫습니다.

---

### STEP 2 · 원하는 출력 형식을 번호로 못 박습니다

\`\`\`text
아래 회의 메모를 정리해 줘.
(1) 결정사항
(2) 담당자별 할 일 — 담당 / 할 일 / 마감일 세 칸의 표로
(3) 다음 회의 안건

메모에 없는 내용은 추측하지 말고, 이름 대신 직위를 써 줘.

--- 회의 메모 ---
(여기에 붙여넣기)
\`\`\`

**✅ 확인** — 번호 (1)(2)(3)으로 나눠 시키는 것이 핵심입니다. "정리해 줘"만 보내면 매번 다른 모양이 나옵니다.

---

### STEP 3 · 표에 마감일 칸이 생겼는지 봅니다

**✅ 확인** — 그림처럼 **담당 / 할 일 / 마감일** 세 칸이 모두 있어야 합니다.

| 결과 | 다음 행동 |
|------|-----------|
| 세 칸 다 있음 | STEP 4로 |
| 마감일 칸이 없음 | "표에 마감일 칸을 넣어 줘"라고 이어서 |
| 이름이 그대로 나옴 | "이름 대신 직위로 바꿔 줘"라고 이어서 |

---

### STEP 4 · 공유용으로 줄입니다

\`\`\`text
위 내용을 팀 메신저에 올릴 3~4줄 요약으로 바꿔 줘.
핵심 결정과 마감일만.
\`\`\`

---

### STEP 5 · 다음에도 쓰게 템플릿으로 저장

\`\`\`text
지금 쓴 지시를 [회의 메모] 칸만 채우면 되는 템플릿으로 정리해 줘.
\`\`\`

**✅ 확인** — 대괄호 빈칸이 있는 템플릿이 나오면 메모장이나 부서 공유 문서에 저장하세요. 다음 회의부터 붙여넣기만 하면 됩니다.`,contentEn:`Turning scattered notes into **decisions, a task table and next agenda.**

![ChatGPT document organizing screen](~/appendix/doc-organize-chatgpt.svg)

### STEP 1 · Paste the raw material
Paste your meeting notes **exactly as written** — don't tidy them first. Rough notes work better.

### STEP 2 · Pin the output format with numbers

\`\`\`text
Organize the meeting notes below.
(1) Decisions
(2) Tasks by owner — a table with Owner / Task / Due date
(3) Candidate agenda items for next time

Don't guess anything not in the notes. Use job titles, not real names.

--- Notes ---
(paste here)
\`\`\`

**✅ Check** — numbering the requests is the key. A bare "organize this" gives a different shape every time.

### STEP 3 · Confirm the due-date column exists

| Result | Next |
|---|---|
| All three columns | Go to STEP 4 |
| No due-date column | Reply "add a due date column" |
| Real names appear | Reply "use job titles instead" |

### STEP 4 · Shrink it for sharing
"Turn this into a 3–4 line summary for team chat — key decisions and deadlines only."

### STEP 5 · Save it as a template
"Turn the instructions I just used into a template where only [meeting notes] needs filling in."
**✅ Check** — a bracketed template you can save and reuse.`},{title:"문서 정리 ② Gemini 버전",titleEn:"Organize Documents 2 — Gemini",content:`엑셀·구글시트로 된 **실적 취합·집계**에 가장 잘 맞습니다.

![Gemini 문서 정리 화면](~/appendix/doc-organize-gemini.svg)

---

### STEP 1 · 표 파일을 그대로 올립니다

**＋** 를 눌러 엑셀(.xlsx)이나 구글시트를 그대로 올립니다. 여러 부서 제출본이면 **한꺼번에 여러 개** 올려도 됩니다.

**✅ 확인** — 올리기 전에 **이름 열을 지우거나 A·B·C로 바꿨는지** 다시 봅니다.

---

### STEP 2 · 정리 규칙과 출력 형식을 함께

\`\`\`text
올린 파일의 부서별 실적을 하나의 표로 정리해 줘.
열은 부서 / 건수 / 전월 대비 로.

숫자는 원본 그대로 쓰고, 계산이 필요하면 계산식을 함께 알려 줘.
그리고 눈에 띄는 경향 3가지를 아래에 써 줘.

엑셀에 붙여넣을 수 있게 탭으로 구분해 줘.
\`\`\`

**✅ 확인** — **"숫자는 원본 그대로"** 와 **"탭으로 구분"** 두 문장이 핵심입니다.

---

### STEP 3 · 시트에 붙여넣어 확인합니다

결과 표를 복사해 구글 시트나 엑셀에 붙여넣습니다.

**✅ 확인**

| 결과 | 판정 |
|------|------|
| 칸이 알아서 나뉜다 | **정상** |
| 한 칸에 다 들어간다 | 탭 구분이 안 된 것 — "탭으로 구분해 줘" 다시 |
| 숫자가 원본과 다르다 | **위험** — 이 결과는 쓰지 말고 STEP 2부터 다시 |

> 3번은 반드시 확인하세요. **합계·비율은 사람이 원본과 대조**해야 합니다.

---

### STEP 4 · 보고용 문장으로 바꿉니다

\`\`\`text
위 표와 경향을 과장 보고용 한 문단으로 바꿔 줘.
숫자는 표에 있는 것만 쓰고, 새 숫자를 만들지 마.
\`\`\`

**✅ 확인** — 문단에 나온 숫자가 전부 위 표에 있는 숫자인지 눈으로 대조합니다.`,contentEn:`Best suited to **aggregating figures** from Excel or Google Sheets.

![Gemini document organizing screen](~/appendix/doc-organize-gemini.svg)

### STEP 1 · Upload the spreadsheet as-is
Click **＋** and upload the .xlsx or Sheet directly. Several department files at once is fine.
**✅ Check** — before uploading, confirm the name column is deleted or replaced with A/B/C.

### STEP 2 · Give the rules and the output format together

\`\`\`text
Consolidate the departmental figures from the uploaded files into one table.
Columns: Department / Count / Change vs last month.

Use the original numbers exactly; if a calculation is needed, show the formula.
Then list three notable trends below.

Tab-separate it so I can paste into Excel.
\`\`\`

**✅ Check** — "use the original numbers exactly" and "tab-separate" are the two crucial lines.

### STEP 3 · Paste into a sheet and verify

| Result | Verdict |
|---|---|
| Cells split automatically | **Good** |
| Everything lands in one cell | Not tab-separated — ask again |
| Numbers differ from the source | **Unsafe** — discard and restart from STEP 2 |

> Always do the third check. **Totals and percentages must be verified by a human against the source.**

### STEP 4 · Turn it into report prose
"Rewrite the table and trends as one paragraph for a manager's briefing. Use only numbers that appear in the table; invent none."
**✅ Check** — every number in the paragraph appears in the table above.`},{title:"문서 정리 ③ Claude 버전",titleEn:"Organize Documents 3 — Claude",content:`**여러 부서 제출본을 하나로 합칠 때** 가장 잘 맞습니다.

![Claude 문서 정리 화면](~/appendix/doc-organize-claude.svg)

---

### STEP 1 · 여러 파일을 한꺼번에 첨부

각 과에서 받은 파일을 **한 번에 모두** 붙입니다. 서식이 제각각이어도 괜찮습니다.

**✅ 확인** — 파일 카드가 첨부한 개수만큼 뜨는지 셉니다.

---

### STEP 2 · 병합 규칙을 못 박습니다

\`\`\`text
첨부한 파일들을 하나의 표로 합쳐 줘.
열은 과 / 항목 / 금액 / 비고.

지킬 것
- 숫자는 절대 바꾸지 말고 원본 그대로 옮긴다.
- 서식(단위·자릿수)만 통일한다.
- 어느 파일에서 왔는지 알 수 있게 과 이름을 함께 적는다.
- 빠진 값은 비워 두지 말고 [확인 필요]로 표시한다.
\`\`\`

**✅ 확인** — **"숫자는 절대 바꾸지 마"** 가 이 단계의 안전장치입니다. 이 줄이 없으면 단위를 임의로 환산해 버리는 일이 생깁니다.

---

### STEP 3 · 원본과 숫자를 대조합니다 — 사람이 하는 단계

**✅ 확인** — 합쳐진 표의 숫자를 원본 파일과 하나씩 맞춰 봅니다.

| 확인 항목 | 방법 |
|-----------|------|
| 행 개수 | 원본 파일들의 행을 더한 수와 같은가 |
| 금액 | 과별로 몇 개를 뽑아 원본과 대조 |
| \`[확인 필요]\` | 실제로 원본에도 비어 있는가 |

> 이 단계는 AI에게 시킬 수 없습니다. **합계가 맞는지는 사람이 봅니다.**

---

### STEP 4 · 빠진 것을 목록으로 받습니다

\`\`\`text
합친 표에서 [확인 필요]로 표시한 항목만 목록으로 뽑아 줘.
어느 과에 무엇을 물어봐야 하는지 함께.
\`\`\`

**✅ 확인** — 이 목록이 곧 **각 과에 회신 요청할 내용**입니다. 그대로 복사해 공문에 붙이면 됩니다.

---

### STEP 5 · 다음 달에도 쓰게 저장합니다

\`\`\`text
지금 쓴 병합 규칙을 다음 달에도 그대로 쓸 수 있게
지시문으로 정리해 줘. 설명은 빼고 지시문만.
\`\`\`

**✅ 확인** — 지시문만 나오면 부서 공유 문서에 저장합니다. **누가 하든 같은 형식**으로 취합됩니다.`,contentEn:`Best suited to **merging submissions from several departments.**

![Claude document organizing screen](~/appendix/doc-organize-claude.svg)

### STEP 1 · Attach all the files at once
Attach every department's file together. Mixed formats are fine.
**✅ Check** — count the file cards against the number you attached.

### STEP 2 · Pin the merge rules

\`\`\`text
Merge the attached files into one table.
Columns: Department / Item / Amount / Notes.

Rules
- Never change a number; copy it exactly.
- Unify formatting (units, decimals) only.
- Label each row with the source department.
- Mark missing values [TO VERIFY] rather than leaving them blank.
\`\`\`

**✅ Check** — "never change a number" is the safety net. Without it, units get silently converted.

### STEP 3 · Compare the numbers with the originals — the human step

| Check | How |
|---|---|
| Row count | Does it equal the sum of the source files' rows? |
| Amounts | Spot-check several per department against the source |
| \`[TO VERIFY]\` | Is it genuinely blank in the original too? |

> This step cannot be delegated. **A person confirms the totals.**

### STEP 4 · Get the gaps as a list
"List only the items marked [TO VERIFY], with which department to ask and what to ask for."
**✅ Check** — that list *is* the follow-up request you send to each department.

### STEP 5 · Save it for next month
"Turn the merge rules I just used into a reusable instruction set. Instructions only, no commentary."
**✅ Check** — save it to a shared document so **anyone produces the same format.**`}]},o={id:"ai-models",icon:"fa-microchip",title:"AI 모델 고르기",titleEn:"Choosing a Model",sections:[{title:"한눈에 고르는 법",titleEn:"Quick Guide",content:`> AI 플랫폼에서는 여러 회사의 AI 모델을 골라 쓸 수 있습니다. **잘 모르겠으면 \`Auto(자동)\`** — 작업에 맞는 모델을 알아서 골라줍니다. 표시 뜻: **(고비용)** = 요금이 많이 드니 꼭 필요할 때만 · **(New)** = 최신 모델.

### 기본 프리셋 — 회사별 대표 모델(빠른 선택)
모델 선택 화면은 각 회사의 대표 모델을 먼저 보여줍니다. 아래가 그 기본 선택지이고, 더 많은 모델은 아래 '제공사별 모델'에서 펼쳐 고르면 됩니다.

| 빠른 선택 | 회사 | 툴에 적힌 쓰임 |
| --- | --- | --- |
| <mark>Auto</mark> | — | 알맞은 AI 모델을 자동으로 선택 |
| Solar Open2 | Upstage | 국가대표 독자 파운데이션 2차 모델 |
| GPT-5.4 Mini | OpenAI | 다양한 작업을 하나의 모델에서 해결 |
| Gemini 3.1 Flash Lite | Google | 최신 정보 기반 콘텐츠 생성·요약 |
| Claude Haiku 4.5 | Anthropic | 긴 글 요약, 코딩, 문맥 중요한 업무 |
| Llama 4 Scout 17B | Meta | 가볍고 빠른 응답 |
| Mistral Small | Mistral | 짧은 대화, 기본 질의응답 |
| Qwen QWQ 32B | Qwen | 중국어 기반 문서, 다국어 업무 |
| Grok 4.20 Fast Reasoning | xAI | 복잡한 텍스트에서 핵심 찾기 |

### 등급 3가지만 기억하세요
| 등급 | 이름에 보이는 단어 | 언제 쓰나 |
| --- | --- | --- |
| <mark>빠름·가벼움</mark> | Mini · Nano · Lite · Flash · Small · Haiku | 간단한 질문, 빠른 요약, 초안 |
| <mark>균형·범용</mark> | 숫자만 붙은 표준 모델 | 대부분의 문서·메일·정리 |
| <mark>고성능·정교</mark> | Pro · Large · Opus · o3 · Deep Research | 긴 문서, 복잡한 분석 (대개 고비용) |

### 목적별 빠른 추천
| 이런 작업 | 이런 모델 |
| --- | --- |
| 간단한 질문·빠른 요약 | Claude Haiku 4.5 · GPT-5 mini · Gemini Flash · Solar Mini |
| 일반 문서·메일·정리 | GPT-5.4 · Claude Sonnet 5 · Gemini 2.5 Flash |
| 긴 문서·정교한 분석 | Claude Opus 4.8 · GPT-5.5 · Gemini 3.1 Pro (고비용) |
| 코딩·자동화 | GPT-5.3 Codex · Codestral · Grok Code Fast |
| 복잡한 추론·논리 | o3 · Magistral · Grok Reasoning · Qwen QWQ |
| 한국어·행정 자료 | Upstage Solar (국산 모델) |
| 최신 정보 검색·요약 | Gemini (검색 연동 강점) |
| 자료 심층 리서치 | O3 Deep Research (고비용) |

> **팁**: 비싼 모델이 항상 정답은 아닙니다. 간단한 일은 **가벼운 모델이 더 빠르고 충분**해요. 결과가 아쉬울 때만 상위 모델로 올리세요.`,contentEn:`> The platform lets you pick models from several companies. **Not sure? Use \`Auto\`** — it picks a fitting model for you. Tags: **(고비용)** = expensive, use only when needed · **(New)** = newest.

### Remember just 3 tiers
| Tier | Words in the name | When |
| --- | --- | --- |
| <mark>fast·light</mark> | Mini · Nano · Lite · Flash · Small · Haiku | simple questions, quick summaries, drafts |
| <mark>balanced</mark> | plain numbered models | most documents, emails, organizing |
| <mark>top·precise</mark> | Pro · Large · Opus · o3 · Deep Research | long docs, complex analysis (usually costly) |

### Quick picks by task
| Task | Models |
| --- | --- |
| simple Q / quick summary | Claude Haiku 4.5 · GPT-5 mini · Gemini Flash · Solar Mini |
| general docs / email | GPT-5.4 · Claude Sonnet 5 · Gemini 2.5 Flash |
| long docs / deep analysis | Claude Opus 4.8 · GPT-5.5 · Gemini 3.1 Pro (costly) |
| coding / automation | GPT-5.3 Codex · Codestral · Grok Code Fast |
| complex reasoning | o3 · Magistral · Grok Reasoning · Qwen QWQ |
| Korean / administrative material | Upstage Solar (Korean model) |
| latest-info search | Gemini (search-connected) |
| deep research | O3 Deep Research (costly) |

> **Tip**: pricier isn't always better. For simple tasks a light model is faster and enough — move up only if the result falls short.`},{title:"모델 선택 기준 (전문 관점)",titleEn:"Selection Criteria (Pro)",content:`> 전문적으로 고를 땐 마케팅 문구가 아니라 **아키텍처 특성 6축**으로 판단합니다. 작업 성격을 축에 대입하면 후보가 좁혀집니다.

### 판단하는 6가지 축
| 축 | 무엇을 보나 | 이럴 때 |
| --- | --- | --- |
| <mark>문맥 길이</mark> (context) | 긴 문서·코드를 통째로 넣나 | 규정집·논문·대량 로그 → 장문 강한 계열 |
| <mark>추론 깊이</mark> | 다단계 논리·수학·계획이 핵심인가 | 복잡한 의사결정·증명 → 추론형 |
| <mark>멀티모달</mark> | 이미지·표·PDF·음성을 다루나 | 스캔 문서·도표 해석 → 멀티모달 |
| <mark>지연·비용</mark> | 실시간·대량 처리인가 | 챗봇·배치 요약 → 경량(증류) |
| <mark>에이전트·코딩</mark> | 파일 편집·툴 호출·자동화인가 | 스크립트·시스템 연동 → 코딩/에이전트형 |
| <mark>언어</mark> | 한국어/다국어 정확도 | 행정 한글 문서 → 한국어 특화 |

### 유형별 정리 (이름만 봐도 성격 파악)
| 유형 | 해당 모델 | 기술적 성격 |
| --- | --- | --- |
| 프런티어 | Opus 4.8 · GPT-5.5 · Gemini 3.1 Pro · Mistral Large | 성능 상한이 가장 높음. 복잡·장문·에이전트에 강하나 비용·지연 큼 |
| 균형·범용 | Sonnet 5 · GPT-5.4 · Gemini 2.5 Flash · Solar Pro | 품질/비용 균형점. 대부분 업무의 기본값 |
| 경량(증류) | Haiku · GPT-5 mini/nano · Flash Lite · Small | 지식증류로 소형화 → 저지연·저비용·고처리량, 복잡도 상한은 낮음 |
| 추론형 | o3 · o4-mini · Magistral · Qwen QWQ · Grok Reasoning | 추론에 연산(test-time compute)을 더 씀 → 논리·수학·다단계 계획에 강함 |
| 코딩·에이전트 | GPT-5.x Codex · Codestral · Devstral · Grok Code | 코드 생성·리팩터링·파일 편집·툴 호출(에이전트형 개발) |
| 심층 리서치 | O3 Deep Research | 다단계 웹 탐색 + 출처 종합. 장시간·고비용 |
| 한국어·국산 | Upstage Solar (Pro/Mini/Open2) | 한국어 토크나이즈·문맥에 최적화, 행정 한글 문서 강점 |

> **선택 요령**: '추론형'은 빠른 요약엔 과합니다(느리고 비쌈). 반대로 규정 충돌·복잡한 의사결정엔 범용보다 추론형이 낫습니다. **작업 난이도와 지연·비용을 함께** 저울질하세요. 또한 'Chat' 접미사는 대화·지시 튜닝, 숫자만 붙으면 표준 버전입니다.

> **보안 관점**: 기관 전용 플랫폼을 쓰는 경우 외부 일반 서비스보다 데이터 취급이 안전한 편이지만, **주민번호·미공개 내부자료 등 민감정보 최소화** 원칙은 동일하게 적용하세요.`,contentEn:`> Professionals choose by **6 architectural axes**, not marketing. Map your task to the axes to narrow candidates.

### The 6 axes
| Axis | What to check | When |
| --- | --- | --- |
| <mark>context length</mark> | Whole long doc/code at once? | rulebooks, papers, big logs → long-context models |
| <mark>reasoning depth</mark> | Multi-step logic/math/planning? | complex decisions, proofs → reasoning models |
| <mark>multimodal</mark> | Images, tables, PDFs, audio? | scanned docs, charts → multimodal |
| <mark>latency·cost</mark> | Real-time or high volume? | chatbots, batch summaries → light (distilled) |
| <mark>agent·coding</mark> | File edits, tool calls, automation? | scripts, integrations → code/agent models |
| <mark>language</mark> | Korean/multilingual accuracy | administrative Korean docs → Korean-specialized |

### By type (the name tells the character)
| Type | Models | Technical character |
| --- | --- | --- |
| Frontier | Opus 4.8 · GPT-5.5 · Gemini 3.1 Pro · Mistral Large | Highest ceiling; complex/long/agentic; costly & slower |
| Balanced | Sonnet 5 · GPT-5.4 · Gemini 2.5 Flash · Solar Pro | Quality/cost sweet spot; default for most work |
| Light (distilled) | Haiku · GPT-5 mini/nano · Flash Lite · Small | Distilled → low latency/cost, high throughput; lower ceiling |
| Reasoning | o3 · o4-mini · Magistral · Qwen QWQ · Grok Reasoning | Extra test-time compute → logic, math, planning |
| Coding·agent | GPT-5.x Codex · Codestral · Devstral · Grok Code | Code gen/refactor, file edits, tool calls |
| Deep research | O3 Deep Research | Multi-step web search + synthesis; long, costly |
| Korean | Upstage Solar (Pro/Mini/Open2) | Korean-optimized tokenizer/context; administrative docs |

> **Rule of thumb**: reasoning models are overkill for quick summaries (slow, costly) but win on complex decisions. Weigh **task difficulty vs latency/cost**. "Chat" = chat-tuned; plain numbers = standard.

> **Security**: An organization-only platform is safer than public services — but still minimize sensitive data (IDs, unpublished internal material).`},{title:"제공사별 모델",titleEn:"Models by Provider",content:`> 회사마다 **설계 철학과 강점**이 다릅니다. 아래는 아키텍처·용도 관점의 **상세 안내**입니다. (구체 수치·벤치마크는 자주 바뀌어 생략 — 잘 모르면 Auto)

### Upstage · Solar — 국산 파운데이션 (한국어·문서 특화)
한국 스타트업 Upstage의 자체 개발 모델. **한국어 토크나이징·문맥**에 최적화돼 행정 한글 문서·공문에 강하고, **Document AI**(OCR·표/정보 추출) 계열이 강점. 국내 데이터 주권 관점에서도 선호됩니다.

| 모델 | 유형 | 강점·추천 용도 | 비고 |
| --- | --- | --- | --- |
| Solar Pro3 | 프런티어(한국어) | 복잡한 한국어 보고서·요약·분석 | Solar 최상위 |
| Solar Pro2 | 상위·균형 | 일반 한국어 문서 업무 전반 | |
| Solar Mini | 경량 | 짧은 질의·빠른 요약, 대량 처리 | 저지연·저비용 |
| Solar Open2 | 오픈웨이트 | 자체 구축·커스터마이즈 | 국가대표 독자 파운데이션 2차(공개형) |

### OpenAI · ChatGPT — 범용 표준, 툴·에이전트 생태계
가장 범용적이고 **함수 호출(tool use)·멀티모달(음성·이미지)·에이전트** 생태계가 넓습니다. 세대(5.x)·크기(mini/nano)로 나뉘고, 별도로 **추론형(o-시리즈)·코딩형(Codex)·리서치형(Deep Research)** 라인이 있습니다.

| 모델 | 유형 | 강점·추천 용도 | 비고 |
| --- | --- | --- | --- |
| GPT-5.5 | 프런티어 | 최고난도 추론·장문·복합 작업 | (고비용) |
| GPT-5.4 | 범용 주력 | 대부분의 문서·분석·대화 | 기본 프리셋 |
| GPT-5.4 Mini · Nano | 경량·초경량 | 빠른 응답, 대량·실시간 | 저비용 |
| GPT-5.3~5 (+Chat) | 세대별 범용 | 표준 작업 (Chat=대화 튜닝) | |
| GPT-5 mini · nano | 경량 | 간단 작업·챗봇 | |
| GPT-4.1 · 4o (+mini) | 이전 세대 | 멀티모달(4o=음성·이미지)·범용 | |
| o3 · o4-mini | 추론형 | 수학·논리·다단계 계획, 복잡한 판단 | o3 (고비용)·느림 |
| GPT-5.x Codex (+Mini) | 코딩·에이전트 | 코드 작성·리팩터·파일 편집·자동화 | |
| O3 Deep Research | 리서치 | 다단계 웹 조사 + 출처 종합 보고 | (고비용)·장시간 |

### Google · Gemini — 멀티모달·검색 그라운딩·초장문
**이미지·오디오·비디오·PDF를 네이티브로** 처리하고, **구글 검색 그라운딩**으로 최신 정보에 강합니다. 컨텍스트가 매우 길어 대용량 문서·자료 묶음 처리에 유리. Flash=저지연, Pro=고성능.

| 모델 | 유형 | 강점·추천 용도 | 비고 |
| --- | --- | --- | --- |
| Gemini 3.1 Pro | 프런티어 | 대용량 문서·멀티모달·정교한 분석 | |
| Gemini 3 Flash | 균형·빠름 | 일반 업무·요약, 최신 정보 | |
| Gemini 3.1 Flash Lite | 경량 | 대량·실시간·간단 요약 | 저비용·기본 프리셋 |
| Gemini 2.5 Pro·Flash·Flash Lite | 이전 세대 | 고성능~경량 범용 | |

### Anthropic · Claude — 장문 문맥·지시 준수·안전, 문서/코드
**긴 문맥과 정확한 지시 준수, 안전성**이 강점. 학술·행정 문서, 코드, 컴퓨터·툴을 쓰는 **에이전트 작업**에 특히 강합니다. Opus=프런티어, Sonnet=균형 주력, Haiku=경량 저지연.

| 모델 | 유형 | 강점·추천 용도 | 비고 |
| --- | --- | --- | --- |
| Claude Opus 4.8·4.7·4.6 | 프런티어 | 최고난도 분석·장문·에이전트 코딩 | (고비용) |
| Claude Sonnet 5 | 균형 주력 | 일상 문서·분석·코딩의 기본값 | (New) |
| Claude Sonnet 4.6·4.5 | 균형 | 범용 업무 | |
| Claude Haiku 4.5 | 경량 | 요약·간단 작업·대량 처리, 저지연 | 경제적·기본 프리셋 |
| Claude Fable 5 | 최신 특화 | 최신 고성능 모델 | (New·고비용) |

### Meta · Llama — 오픈웨이트(자체 구축·커스터마이즈)
가중치가 공개돼 **온프레미스·파인튜닝·비용 통제**에 유리합니다. Scout는 경량·롱컨텍스트·빠른 응답 계열.

| 모델 | 유형 | 강점·추천 용도 | 비고 |
| --- | --- | --- | --- |
| Llama 4 Scout 17B | 경량·오픈 | 가볍고 빠른 응답, 자체 구축 | 오픈웨이트 |

### Mistral — 유럽(효율·오픈), 코딩·추론 라인업
프랑스 Mistral. **효율(크기 대비 성능)·오픈** 지향이며, 코드(Codestral·Devstral)·추론(Magistral) 특화 라인이 뚜렷합니다.

| 모델 | 유형 | 강점·추천 용도 | 비고 |
| --- | --- | --- | --- |
| Mistral Large | 프런티어 | 고난도 범용 | |
| Mistral Medium · Small | 균형·경량 | 일반~간단 업무 | Small=기본 프리셋 |
| Magistral Medium · Small | 추론형 | 논리·수학·계획 | |
| Codestral | 코딩 | 코드 생성·자동완성 | |
| Devstral Medium | 에이전트 코딩 | 개발 자동화·툴 사용 | |

### Qwen · Alibaba — 다국어·중국어·오픈
알리바바. **중국어·다국어**와 오픈웨이트가 강점. QwQ는 추론 특화 계열.

| 모델 | 유형 | 강점·추천 용도 | 비고 |
| --- | --- | --- | --- |
| Qwen QWQ 32B | 추론·다국어 | 중국어 문서, 다국어 업무, 논리 문제 | 오픈·기본 프리셋 |

### Grok · xAI — 실시간·추론
xAI. **실시간(X 연동) 정보**와 추론(Reasoning) 라인이 특징. Code Fast는 코딩 특화.

| 모델 | 유형 | 강점·추천 용도 | 비고 |
| --- | --- | --- | --- |
| Grok 4.3 | 상위 | 고성능 범용 | |
| Grok 4.20 Fast Reasoning | 추론(빠름) | 복잡한 텍스트에서 핵심 추출·추론 | 기본 프리셋 |
| Grok 4.20 Non Reasoning | 범용 | 일반 대화·작업 | |
| Grok Code Fast | 코딩 | 빠른 코드 작업 | |`,contentEn:`> Each company has a **distinct design philosophy**. Below is a **detailed** architecture/use guide. (Exact specs/benchmarks change often and are omitted — use Auto if unsure.)

### Upstage · Solar — Korean-built foundation (Korean & documents)
Korea's Upstage. Optimized **Korean tokenization/context** — strong on administrative Korean docs; notable **Document AI** (OCR, table/info extraction). Also favored for domestic data sovereignty.
| Model | Type | Strengths·use | Notes |
| --- | --- | --- | --- |
| Solar Pro3 | frontier (Korean) | complex Korean reports/analysis | Solar top |
| Solar Pro2 | upper·balanced | general Korean docs | |
| Solar Mini | light | short Q, quick summary, bulk | low latency/cost |
| Solar Open2 | open-weight | self-host, customize | flagship open (2nd gen) |

### OpenAI · ChatGPT — general standard, tool/agent ecosystem
Broadest **tool use, multimodal (voice/image), agent** ecosystem. Split by generation (5.x) and size (mini/nano), plus **reasoning (o-series), coding (Codex), research (Deep Research)** lines.
| Model | Type | Strengths·use | Notes |
| --- | --- | --- | --- |
| GPT-5.5 | frontier | hardest reasoning, long, complex | (costly) |
| GPT-5.4 | flagship general | most docs/analysis/chat | preset |
| GPT-5.4 Mini · Nano | light·ultra-light | fast, bulk, real-time | cheap |
| GPT-5.3~5 (+Chat) | generational | standard work (Chat=chat-tuned) | |
| GPT-5 mini · nano | light | simple tasks, chatbots | |
| GPT-4.1 · 4o (+mini) | prev gen | multimodal (4o=voice/image) | |
| o3 · o4-mini | reasoning | math, logic, planning | o3 (costly), slow |
| GPT-5.x Codex (+Mini) | coding·agent | code, refactor, file edits | |
| O3 Deep Research | research | multi-step web + synthesis | (costly), long |

### Google · Gemini — multimodal, search grounding, huge context
Native **image/audio/video/PDF** + **Google Search grounding** for fresh info. Very long context for big document sets. Flash=low latency, Pro=top.
| Model | Type | Strengths·use | Notes |
| --- | --- | --- | --- |
| Gemini 3.1 Pro | frontier | big docs, multimodal, precise | |
| Gemini 3 Flash | balanced·fast | general work, fresh info | |
| Gemini 3.1 Flash Lite | light | bulk, real-time, quick summary | cheap·preset |
| Gemini 2.5 Pro·Flash·Flash Lite | prev gen | top→light general | |

### Anthropic · Claude — long context, instruction-following, safety
Strong **long context, precise instruction-following, safety**. Great for academic/admin docs, code, and **agentic** work with computer/tools. Opus=frontier, Sonnet=balanced flagship, Haiku=light.
| Model | Type | Strengths·use | Notes |
| --- | --- | --- | --- |
| Claude Opus 4.8·4.7·4.6 | frontier | hardest analysis, long, agent coding | (costly) |
| Claude Sonnet 5 | balanced flagship | daily docs/analysis/coding | (New) |
| Claude Sonnet 4.6·4.5 | balanced | general work | |
| Claude Haiku 4.5 | light | summaries, simple tasks, bulk | economical·preset |
| Claude Fable 5 | newest | latest high-capability | (New·costly) |

### Meta · Llama — open-weight (self-host, customize)
Open weights → **on-prem, fine-tuning, cost control**. Scout = light, long-context, fast.
| Model | Type | Strengths·use | Notes |
| --- | --- | --- | --- |
| Llama 4 Scout 17B | light·open | light, fast, self-host | open-weight |

### Mistral — Europe (efficient, open), coding·reasoning
France's Mistral. **Efficiency & open**; clear code (Codestral/Devstral) and reasoning (Magistral) lines.
| Model | Type | Strengths·use | Notes |
| --- | --- | --- | --- |
| Mistral Large | frontier | high-end general | |
| Mistral Medium · Small | balanced·light | general→simple | Small=preset |
| Magistral Medium · Small | reasoning | logic, math, planning | |
| Codestral | coding | code gen/complete | |
| Devstral Medium | agent coding | dev automation, tools | |

### Qwen · Alibaba — multilingual, Chinese, open
Alibaba. Strong **Chinese/multilingual** and open weights. QwQ = reasoning.
| Model | Type | Strengths·use | Notes |
| --- | --- | --- | --- |
| Qwen QWQ 32B | reasoning·multilingual | Chinese docs, multilingual, logic | open·preset |

### Grok · xAI — real-time, reasoning
xAI. **Real-time (X-connected)** info and reasoning lines; Code Fast for coding.
| Model | Type | Strengths·use | Notes |
| --- | --- | --- | --- |
| Grok 4.3 | upper | high-end general | |
| Grok 4.20 Fast Reasoning | reasoning (fast) | extract key points, reason | preset |
| Grok 4.20 Non Reasoning | general | general chat/work | |
| Grok Code Fast | coding | fast code tasks | |`}]},s={id:"tips",icon:"fa-lightbulb",title:"실전 팁",titleEn:"Practical Tips",sections:[{title:"좋은 답을 얻는 프롬프트 팁",titleEn:"Tips for Better Prompts",content:`같은 AI라도 어떻게 묻느냐에 따라 결과가 크게 달라집니다.

### 1) 역할을 정해주기
"너는 대학 행정 25년 경력 전문가야"처럼 역할을 주면 답의 전문성이 올라갑니다.

### 2) 맥락을 충분히
누구에게, 어떤 상황에서, 왜 필요한지 함께 적으세요.

### 3) 출력 형식을 지정
"표로", "5단계 목록으로", "300자 이내로"처럼 형식을 못 박으면 정리된 답이 나옵니다.

### 4) 예시를 한두 개 보여주기(Few-shot)
원하는 스타일의 예시를 주면 AI가 그 결을 따라옵니다.

### 5) 한 번에 완성하려 하지 말기
초안 → "이 부분을 더 공손하게" → "표로 바꿔줘"처럼 **대화로 다듬는 것**이 가장 빠릅니다.

> 만능 템플릿: **[역할] + [맥락] + [요청] + [형식] + [조건]**`,contentEn:`The same AI gives very different results depending on how you ask.

1. **Assign a role** — "You are a 25-year admin expert."
2. **Give context** — who, when, why.
3. **Specify format** — "as a table", "5-step list", "under 300 chars".
4. **Show 1–2 examples (few-shot)**.
5. **Iterate** — draft → "make this more polite" → "turn into a table".

> Universal template: **[Role] + [Context] + [Request] + [Format] + [Constraints]**`},{title:"환각(거짓 정보) 줄이기",titleEn:"Reducing Hallucinations",content:`AI는 모르는 것도 자신 있게 답할 수 있습니다. 다음 습관으로 위험을 줄이세요.

- **"확실하지 않으면 모른다고 말해줘"** 를 프롬프트에 넣기
- 숫자·날짜·인용·규정은 **반드시 원문으로 재확인**
- 자료가 있으면 **파일을 첨부**하고 "첨부 내용에 근거해서만 답해줘"라고 지시
- "근거 조항/출처를 함께 보여줘"라고 요청
- 중요한 문서는 사람이 **최종 검토** 후 사용

> 규정·법령·통계 수치는 AI 답을 "초안"으로만 쓰고, 공식 출처로 검증하세요.`,contentEn:`AI can answer confidently even when wrong. Reduce risk with these habits.

- Add "say you don't know if unsure" to your prompt.
- Re-verify numbers, dates, quotes, and rules against the source.
- Attach files and say "answer only based on the attachment."
- Ask it to "show the supporting clause/source."
- Always do a final human review for important documents.`},{title:"파일·데이터 활용 팁",titleEn:"Working with Files & Data",content:`- 긴 PDF·한글 문서는 통째로 올리고 "OO 관련 조항만 요약해줘"
- 엑셀 표는 붙여넣고 "경향 3가지, 이상한 값 찾아줘"
- 표를 만들 땐 "엑셀에 붙여넣을 수 있게 탭으로 구분해줘"
- 코드를 받을 땐 "각 줄에 주석을 달아 초보도 이해하게"
- 결과가 길면 "핵심만 3줄로 먼저 요약하고 자세히"

> 개인정보·민감정보는 가능하면 **가린 뒤** 올리고, 기관 보안 정책을 따르세요.`,contentEn:`- Upload long PDFs and ask "summarize only the clauses about X."
- Paste Excel tables and ask "find 3 trends and any odd values."
- For tables: "use tab-separated so I can paste into Excel."
- For code: "add comments on each line for beginners."
- For long output: "3-line summary first, then details."

> Mask personal/sensitive info before uploading; follow your organization's security policy.`},{title:"보안·윤리·저작권",titleEn:"Security, Ethics, Copyright",content:`- 학생 개인정보·미공개 연구데이터는 기관 보안 정책에 맞게 신중히 다루기
- AI가 만든 글·코드도 **사실·표절 여부를 검토**한 뒤 사용
- 논문·과제에 AI를 썼다면 학회/기관의 **AI 사용 지침**을 확인하고 필요한 경우 밝히기
- 생성 이미지·자료의 **저작권/라이선스** 확인
- 업무에 AI를 쓸 때는 **민감정보 최소화** 원칙을 항상 지키세요

> "편리함"과 "책임"은 함께 갑니다. AI는 도구, 판단은 사람.`,contentEn:`- Handle student PII and unpublished data per your organization's security policy.
- Review AI-made text/code for accuracy and plagiarism.
- Follow your venue's AI-use guidelines; disclose when required.
- Check copyright/license of generated images/materials.
- Always minimize sensitive data when using AI for work.`}]},r={id:"resources",icon:"fa-graduation-cap",title:"함께 공부할 자료",titleEn:"Study Together",sections:[{title:"과정별 추천 학습 순서",titleEn:"Recommended Learning Path",content:`교육이 끝난 뒤에도 스스로 이어서 공부할 수 있도록 순서를 제안합니다.

### 공통 1단계 — 기초 다지기
1. ChatGPT에 매일 1가지 업무를 맡겨보기(메일 다듬기, 요약 등)
2. \`프롬프트 학습\` 메뉴의 **학습하기 → 실습하기 → 평가하기** 순서로 진행
3. 잘 된 프롬프트는 **나만의 템플릿**으로 저장

### 직무별 2단계 — 심화
| 직무 | 다음에 해볼 것 |
|------|---------------|
| 교수자 | 강의자료·평가 루브릭·피드백 자동화, 맞춤 GPT 만들기 |
| 직원 | 반복 업무 1개를 골라 프롬프트 템플릿화 + 엑셀 자동화 |
| 연구자 | 데이터 정리→분석→논문 초안까지 한 흐름으로 연습 |

> 가장 빠른 성장법은 **내 실제 업무를 소재로** 매일 조금씩 써보는 것입니다.`,contentEn:`A path to keep learning after the course ends.

**Stage 1 — Foundations**
1. Give ChatGPT one daily task (polish an email, summarize, etc.).
2. Go through Prompt Learning: Learn → Practice → Evaluate.
3. Save good prompts as your own templates.

**Stage 2 — By role**
| Role | Next step |
|------|-----------|
| Faculty | Automate materials, rubrics, feedback; build a custom GPT. |
| Staff | Templatize one repetitive task + Excel automation. |
| Researcher | Practice data → analysis → draft paper as one flow. |

> Fastest growth: practice a little every day on your real work.`},{title:"분야별 더 알아보기",titleEn:"Go Deeper by Topic",content:`더 공부하고 싶을 때 살펴볼 주제들입니다. (검색어로도 활용하세요)

### 프롬프트·생성형 AI
- 프롬프트 엔지니어링 6원칙, 사고연쇄(Chain of Thought), 맞춤 GPT 설계

### 데이터분석
- 엑셀 함수/피벗, 기술통계의 의미, 적절한 그래프 고르기, 파이썬 입문(선택)

### 논문작성
- IMRaD 구조, 문헌검토 방법, 학술 영어 표현, 인용·연구윤리

### 예산회계
- 예산 편성·정산 절차, 회계 규정 읽는 법, 재무 보고서 구성

### 연구·실험
- 연구질문 설계, IRB 준비, 실험 프로토콜·재현성, 연구노트 관리

> 각 주제를 ChatGPT에게 "초보자용 30분 학습 계획으로 짜줘"라고 부탁해보세요.`,contentEn:`Topics to explore further (also usable as search terms).

- **Prompting / GenAI:** 6 principles, chain-of-thought, custom GPTs
- **Data analysis:** Excel functions/pivots, descriptive stats, choosing charts, intro Python
- **Academic writing:** IMRaD, literature review, academic English, citation & ethics
- **Budget/accounting:** budgeting & settlement, reading rules, financial reports
- **Research/experiments:** research questions, IRB, protocols & reproducibility, lab notes

> Ask ChatGPT to "make a 30-minute beginner study plan" for any topic.`},{title:"혼자서도 잘 하는 연습법",titleEn:"How to Practice Solo",content:`- **하루 1프롬프트**: 오늘 한 업무 하나를 AI로 다시 해보기
- **비교 연습**: 막 쓴 프롬프트 vs 구조화한 프롬프트 결과를 나란히 비교
- **평가 습관**: 만든 결과를 "5점 척도로 평가하고 개선점 알려줘"로 점검(평가하기 메뉴 활용)
- **동료와 공유**: 좋은 프롬프트·맞춤 GPT를 팀과 나누기
- **기록**: 효과 본 프롬프트를 메모해 두면 자산이 됩니다

> 막히면 언제든 \`부록 > 용어 해설\`과 \`실전 팁\`으로 돌아오세요.`,contentEn:`- **One prompt a day:** redo one task with AI.
- **Compare:** raw prompt vs structured prompt, side by side.
- **Evaluate:** ask AI to "score this 1–5 and suggest improvements."
- **Share:** good prompts/custom GPTs with your team.
- **Record:** keep prompts that worked — they become assets.

> Stuck? Come back to Appendix → Glossary and Practical Tips.`}]};function g(){return e.jsx(t,{seoTitle:"부록",seoTitleEn:"Appendix",seoDescription:"용어 해설, 챗봇 활용법, 파일 요약·문서 정리, AI 모델 고르기, 실전 팁, 함께 공부할 자료 — 교육과 더불어 공부할 부록 자료",path:"/appendix",hero:{icon:"fa-book-open",color:"#2E7D32",eyebrow:"부록 · 보충 학습자료",eyebrowEn:"Appendix · Supplementary Materials",title:"부록",titleEn:"Appendix",tagline:"교육과 더불어 언제든 꺼내 보는 참고 묶음",taglineEn:"A reference set to revisit alongside the course",desc:"용어 해설부터 챗봇 활용법, 파일 요약·문서 정리, AI 모델 고르는 법, 실전 팁까지 — 수업에서 다 담지 못한 내용을 주제별로 정리했습니다.",descEn:"Glossary, chatbot usage, file summarization and document organization, choosing an AI model, and practical tips — everything the sessions could not fully cover, organized by topic.",meta:[{icon:"fa-user-check",text:"대구광역시 공무원",textEn:"Daegu city officials"},{icon:"fa-layer-group",text:"6개 주제",textEn:"6 topics"},{icon:"fa-signal",text:"전 과정 공통",textEn:"All programs"}],note:"각 주제는 독립적으로 읽을 수 있습니다. 왼쪽 목차에서 필요한 항목만 골라 보세요.",noteEn:"Each topic stands on its own — pick what you need from the table of contents on the left."},dataFiles:[a,n,i,o,s,r]})}export{g as default};

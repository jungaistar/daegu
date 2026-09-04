/** 부록 — 챗봇형 질의응답 활용법 (따라하기 실습) */
export default {
  id: 'chatbot',
  icon: 'fa-comments',
  title: '챗봇 활용법',
  titleEn: 'Chatbot Q&A',
  sections: [
    {
      title: '챗봇형 질의응답 이해하기',
      titleEn: 'Understanding Chatbot Q&A',
      content: `챗봇형 질의응답은 **한 번 묻고 끝내는 검색이 아니라, 대화를 이어가며 원하는 결과에 다가가는 방식**입니다. 이 차이를 모른 채 한 번 물어보고 "생각보다 별로네"라고 결론짓는 것이 가장 흔한 실패입니다.

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
| 따라하기 ④ | 발송 전 5분 자가 점검 | 약 5분 | 점검 완료 문서 |`,
      contentEn: `Chatbot Q&A is **not a one-shot search — it is a conversation you steer toward the result you want.** The most common failure is asking once and concluding "this isn't very good."

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
| Walkthrough 4 | 5-minute pre-send self-check | ~5 min | A checked document |`,
    },
    {
      title: '따라하기 ① 첫 대화부터 완성 공문까지',
      titleEn: 'Walkthrough 1 — From First Message to a Finished Document',
      content: `**소요 시간 약 20분 · 준비물: ChatGPT(또는 Claude·Gemini) 계정**

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

> 확인 항목을 채우기 전까지 이 문서는 아직 **초안**입니다. 실제 발송 전에는 반드시 〈실제 업무 활용 시 주의사항〉과 〈따라하기 ④〉를 거치세요.`,
      contentEn: `**About 20 minutes · You need a ChatGPT (or Claude/Gemini) account**

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

> Until those gaps are filled this is still a **draft**. Run *Cautions for Real Work* and *Walkthrough 4* before sending.`,
    },
    {
      title: '따라하기 ② 내 자료를 근거로만 답하게 하기',
      titleEn: 'Walkthrough 2 — Answer Only From My Own Files',
      content: `**소요 시간 약 15분 · 준비물: 업무 관련 PDF·한글 문서 1개(지침·규정·계획서 등)**

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

> 근거 쪽수가 붙었다고 해서 그 쪽에 정말 그 내용이 있는 것은 아닙니다. **중요한 항목은 원문 해당 쪽을 직접 펴서 대조**하세요. 근거 표시는 확인을 쉽게 해 줄 뿐, 확인을 대신해 주지 않습니다.`,
      contentEn: `**About 15 minutes · You need one work document (PDF/HWP): a guideline, regulation or plan**

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

> A citation is not proof. **Open the cited page and compare it yourself** for anything important — citations make verification easier, they do not replace it.`,
    },
    {
      title: '따라하기 ③ 반복 업무용 나만의 도우미 만들기',
      titleEn: 'Walkthrough 3 — Build Your Own Work Assistant',
      content: `**소요 시간 약 25분 · 준비물: 매달 반복하는 업무 하나**

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

> 부서원과 지시문을 공유하면 **누가 하든 같은 형식의 결과**가 나옵니다. 문서 품질을 사람이 아니라 규칙으로 관리하는 방법입니다.`,
      contentEn: `**About 25 minutes · You need one recurring task**

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

> Share the instruction set with your team and **everyone produces the same format.** That is managing document quality by rule rather than by person.`,
    },
    {
      title: '실제 업무 활용 시 주의사항',
      titleEn: 'Cautions for Real Work',
      content: `앞의 세 실습이 "어떻게 잘 쓰는가"였다면, 여기는 **"무엇을 하면 안 되는가"** 입니다. 편리함과 책임은 함께 갑니다. **AI는 도구이고, 판단과 책임은 사람에게 남습니다.**

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

> **한 줄 요약** — 넣지 말 것을 넣지 않고, 나온 것을 그대로 믿지 않으면 대부분의 사고는 막을 수 있습니다. 다음 〈따라하기 ④〉로 실제 문서를 점검해 보세요.`,
      contentEn: `The three walkthroughs covered *how to use it well*. This section covers **what not to do.** Convenience and accountability travel together: **the AI is a tool; judgment and responsibility stay with you.**

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

> **In one line** — don't put in what shouldn't go in, and don't trust what comes out at face value. That prevents most incidents.`,
    },
    {
      title: '따라하기 ④ 발송 전 5분 자가 점검',
      titleEn: 'Walkthrough 4 — The 5-Minute Pre-Send Check',
      content: `**소요 시간 약 5분 · 준비물: 따라하기 ①에서 만든 공문(또는 실제로 곧 보낼 문서)**

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

이 다섯 단계가 챗봇 활용의 전부입니다. 나머지는 반복하면서 익숙해지는 일만 남았습니다.`,
      contentEn: `**About 5 minutes · Use the document from Walkthrough 1, or one you are actually about to send**

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

That is all there is to it. The rest is repetition.`,
    },
  ],
};

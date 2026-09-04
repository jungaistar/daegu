/**
 * 부록 — 파일 요약 · 문서 정리
 * 화면 그림(SVG)은 public/appendix/ 에 있고 `~/appendix/...` 로 참조한다.
 * 그림의 주황 번호 ①②③ 은 아래 STEP 번호와 1:1로 맞춰 두었다.
 */
export default {
  id: 'file-doc',
  icon: 'fa-folder-tree',
  title: '파일 요약 · 문서 정리',
  titleEn: 'Summarize Files, Organize Documents',
  sections: [
    {
      title: '세 도구 중 무엇을 쓸까',
      titleEn: 'Which of the Three to Use',
      content: `파일을 요약하고 문서를 정리하는 일은 **ChatGPT · Gemini · Claude 셋 다 할 수 있습니다.** 다만 잘하는 결이 조금씩 다릅니다.

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

> 한글(.hwp) 파일이 안 올라가면 **PDF로 저장한 뒤** 다시 올리세요. 세 도구 모두 PDF는 잘 읽습니다.`,
      contentEn: `**ChatGPT, Gemini and Claude can all** summarize files and organize documents. They just have different strengths.

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

> If a .hwp file won't upload, **save it as PDF** and try again. All three read PDFs well.`,
    },
    {
      title: '파일 요약 ① ChatGPT 버전',
      titleEn: 'Summarize a File 1 — ChatGPT',
      content: `아래 그림의 **주황 번호가 곧 STEP 번호**입니다. 화면과 나란히 놓고 따라 하세요.

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

> ChatGPT는 **형식 지정에 가장 잘 따릅니다.** "표로", "3줄로", "보고용으로"처럼 모양을 못 박을수록 결과가 좋아집니다.`,
      contentEn: `The **orange numbers in the picture are the STEP numbers.** Keep it beside your screen.

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

> ChatGPT **follows format instructions best.** The more precisely you pin the shape, the better the result.`,
    },
    {
      title: '파일 요약 ② Gemini 버전',
      titleEn: 'Summarize a File 2 — Gemini',
      content: `![Gemini 파일 요약 화면](~/appendix/file-summary-gemini.svg)

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

> Gemini는 **표·스프레드시트 작업에 가장 강합니다.** 엑셀 파일을 그대로 올려 "경향 3가지 찾아줘"라고 시키는 것도 잘합니다.`,
      contentEn: `![Gemini file summary screen](~/appendix/file-summary-gemini.svg)

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

> Gemini is **strongest with tables and spreadsheets.** Uploading an Excel file and asking "find three trends" works well too.`,
    },
    {
      title: '파일 요약 ③ Claude 버전',
      titleEn: 'Summarize a File 3 — Claude',
      content: `![Claude 파일 요약 화면](~/appendix/file-summary-claude.svg)

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

> Claude는 **긴 문서와 여러 파일 비교에 가장 강합니다.** 부서별 제출본을 한 번에 올려 비교시키기 좋습니다.`,
      contentEn: `![Claude file summary screen](~/appendix/file-summary-claude.svg)

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

> Claude is **strongest with long documents and multi-file comparison.**`,
    },
    {
      title: '문서 정리 ① ChatGPT 버전',
      titleEn: 'Organize Documents 1 — ChatGPT',
      content: `흩어진 메모·기록을 **결정사항 · 할 일 표 · 다음 안건**으로 바꾸는 순서입니다.

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

**✅ 확인** — 대괄호 빈칸이 있는 템플릿이 나오면 메모장이나 부서 공유 문서에 저장하세요. 다음 회의부터 붙여넣기만 하면 됩니다.`,
      contentEn: `Turning scattered notes into **decisions, a task table and next agenda.**

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
**✅ Check** — a bracketed template you can save and reuse.`,
    },
    {
      title: '문서 정리 ② Gemini 버전',
      titleEn: 'Organize Documents 2 — Gemini',
      content: `엑셀·구글시트로 된 **실적 취합·집계**에 가장 잘 맞습니다.

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

**✅ 확인** — 문단에 나온 숫자가 전부 위 표에 있는 숫자인지 눈으로 대조합니다.`,
      contentEn: `Best suited to **aggregating figures** from Excel or Google Sheets.

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
**✅ Check** — every number in the paragraph appears in the table above.`,
    },
    {
      title: '문서 정리 ③ Claude 버전',
      titleEn: 'Organize Documents 3 — Claude',
      content: `**여러 부서 제출본을 하나로 합칠 때** 가장 잘 맞습니다.

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

**✅ 확인** — 지시문만 나오면 부서 공유 문서에 저장합니다. **누가 하든 같은 형식**으로 취합됩니다.`,
      contentEn: `Best suited to **merging submissions from several departments.**

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
**✅ Check** — save it to a shared document so **anyone produces the same format.**`,
    },
  ],
};

export default {
  id: 'xm-usecases',
  icon: 'fa-lightbulb',
  title: '업무 활용법',
  titleEn: 'Putting It to Work',
  sections: [
    {
      title: '업무별 비서·기능 고르기',
      titleEn: 'Choosing the Right Assistant',
      content: `기능을 아는 것과 업무에 쓰는 것은 다릅니다. 이 장은 대구시 공무원 업무를 기준으로 **어떤 일에 무엇을 쓰면 되는지** 정리한 것입니다.

### 한 장 요약

| 하려는 일 | 비서 | 함께 쓸 기능 |
|----------|------|-------------|
| 공문·보도자료 초안 | ChatAgent | 내 프롬프트(공문 틀) · 한글(.hwpx) 다운로드 |
| 긴 문서·첨부 요약 | ChatAgent | 파일 업로드 · 세션 파일 · 웹 검색 끄기 |
| 표현이 중요한 문서 | 멀티 LLM 비교 | 모델 중복 선택 후 문장 골라 쓰기 |
| 행사 포스터·홍보 이미지 | 이미지 생성 | 톱니바퀴(크기·스타일) · 생성 후 배경/글자 수정 |
| 시민 안내문 다듬기 | ChatAgent | 답변 편집 → 'AI에게 묻기' → 독해 수준 변경 |
| 초안과 검토 동시에 | Dual Chat | 왼쪽 작성 · 오른쪽 검토 |
| 개인정보 포함 자료 | 전 비서 | SecureX 확인 + **업로드 전 가명 처리** |

### 이 교육과정과 어떻게 이어지나

| 이 사이트에서 배운 것 | 엑스몬스터에서 하는 일 |
|---------------------|---------------------|
| 프롬프트 4대 구성요소(역할·맥락·지시·형식) | '내 프롬프트'에 이 구조로 버튼을 만들어 둡니다 |
| 역할 부여(Role Prompting) | '내 페르소나'에 등록하면 매번 쓰지 않아도 됩니다 |
| 모델별 강점 비교 | '멀티 LLM 비교'로 한 화면에서 확인합니다 |
| AI 결과물 검토 루틴 | 답변 편집 + 검토용 프롬프트 버튼으로 습관화합니다 |

> 엑스몬스터는 **도구**이고, 결과의 품질을 가르는 것은 여전히 **프롬프트**입니다. 이 사이트의 [프롬프트 학습](/prompt-eval) 과 함께 보세요.`,
      contentEn: `Knowing the features and using them at work are different things. This chapter maps Daegu public-service tasks to the right assistant.

### One-page summary

| Task | Assistant | Features to combine |
|------|-----------|---------------------|
| Draft documents and press releases | ChatAgent | My Prompts · Hangul (.hwpx) download |
| Summarize long documents | ChatAgent | File upload · session files · web search off |
| Wording-critical documents | Multi-LLM | Multi-select models, pick the best sentences |
| Event posters | Image generation | Gear settings · post-generation edits |
| Refine citizen notices | ChatAgent | Edit answer → Ask AI → change reading level |
| Draft and review at once | Dual Chat | Write left, review right |
| Material with personal data | All | Check SecureX **and** pseudonymize before upload |

> X-Monster is the **tool**; prompt quality still decides the result. See [Prompt Learning](/prompt-eval).`,
    },
    {
      title: '따라 하는 업무 시나리오 5가지',
      titleEn: 'Five Walkthrough Scenarios',
      content: `실제 순서 그대로 적었습니다. 그대로 따라 해 보세요.

### 시나리오 1 · 행사 안내 공문을 한글 파일까지

1. 초기 화면에서 **ChatAgent** 카드 클릭
2. 입력창 위 **'공문/기안문 초안 작성'** 칩 클릭 (또는 직접 입력)
3. 질문 입력 — 역할·정보·형식·어투를 함께 적습니다

   > 너는 대구광역시청 행정 담당자야. 7월 15일(화) 14:00 시청 별관 대강당에서 열리는 '생성형 AI 업무활용 특강'을 본청·구청 공무원에게 알리는 안내 공문을 작성해줘. 제목·수신·본문·붙임 순, 본문 3문단 이내, 정중하고 간결한 공문체로. 확인되지 않은 정보는 [확인 필요]로 표시해줘.

4. 답변 확인 → 고칠 곳이 있으면 **답변 편집**으로 수정
5. 답변 **좌측 하단 다운로드 → 한글(.hwpx)** 로 내려받아 기안

### 시나리오 2 · 여러 부서 제출자료 한 번에 요약

1. **ChatAgent** 선택 후 **웹 검색 끄기** (업로드 자료만 근거로)
2. **+ 버튼 → 사진 및 파일 추가** 로 제출자료 업로드 (한 대화 최대 20개)
3. 질문 — "업로드한 자료를 부서별로 (1) 핵심 내용 3줄 (2) 요청사항 (3) 기한 표로 정리해줘."
4. 이어서 — "3번 파일 기준으로 다시 정리해줘"처럼 **세션 파일**을 활용해 후속 질문

> 파일을 뺐다 넣었다 하려면 입력창 위 '세션 파일' 영역에서 체크만 해제하면 됩니다.

### 시나리오 3 · 보도자료 문장 고르기 (멀티 LLM)

1. **멀티 LLM 비교** 비서 선택
2. 모델 선택 목록에서 비교할 모델을 **여러 개 체크**
3. 같은 보도자료 요청을 한 번만 입력 → 모델별 답변이 나란히 표시
4. 각 답변 우측 상단 아이콘으로 **확대**해 읽고, 가장 나은 헤드라인·리드문을 골라 조합

### 시나리오 4 · 행사 홍보 포스터 만들기

1. **이미지 생성** 비서 선택
2. 입력창 **톱니바퀴** → 크기·스타일 지정
3. 질문 — "주민센터 앞 문화행사 홍보용 캐릭터 이미지 만들어줘"
4. 생성된 이미지에 마우스 올리기 → **돋보기** → 배경 수정 / 스타일 변경 / 이미지 삽입
5. 문구 수정이 필요하면 — "업로드한 포스터 하단 접수기간을 ○○년 ○○월로 바꿔줘"

> 기관 공식 캐릭터·로고는 생성 이미지로 재현되지 않습니다. 공식 자산은 파일로 업로드해 삽입하세요.

### 시나리오 5 · 시민 눈높이로 안내문 다듬기

1. **Dual Chat** 으로 화면 분할
2. **왼쪽** — 안내문 초안 작성
3. **오른쪽** — 초안을 붙여넣고 "너는 이 안내문을 처음 읽는 60대 시민이야. 이해하기 어려운 표현과 빠진 정보를 알려줘."
4. 지적된 부분을 왼쪽에서 수정 → **답변 편집 → 'AI에게 묻기' → 독해 수준 변경**으로 마무리

### 발송 전 마지막 점검

| 점검 항목 | 확인 |
|----------|------|
| 사실 확인 | 통계·법령·사업명·일정을 원자료와 대조했는가 |
| 개인정보 | SecureX에만 의존하지 않고 직접 확인했는가 |
| 어투 | 시민에게 나가는 문서인지, 내부 문서인지에 맞는가 |
| 미확인 표시 | [확인 필요]로 남겨 둔 부분을 모두 채웠는가 |

> 이 표를 **'내 프롬프트'의 검토 버튼**으로 만들어 두면 매번 빠뜨리지 않습니다.`,
      contentEn: `Written in the exact order you would perform them.

### Scenario 1 · Announcement to a Hangul file

1. Click the **ChatAgent** card
2. Use the "Draft official document" chip, or type directly
3. Ask with role, facts, format, and tone together
4. Review, then use **Edit answer** for corrections
5. **Download → Hangul (.hwpx)** and file it

### Scenario 2 · Summarize submissions from several departments

1. Choose **ChatAgent** and **turn web search off**
2. **+ → Add photos and files** to upload (max 20 per conversation)
3. Ask for a per-department table: key points, requests, deadlines
4. Follow up using **session files** — "redo it based on file 3"

### Scenario 3 · Pick the best press release wording

1. Choose **Multi-LLM comparison**
2. Check several models
3. Send the request once and read answers side by side
4. Enlarge each answer and combine the best headline and lead

### Scenario 4 · Event poster

1. Choose **Image generation**
2. Set size and style with the **gear** button
3. Ask for the image
4. Hover → magnifier → background, style, or insert an official asset

### Scenario 5 · Refine a citizen notice

1. Split with **Dual Chat**
2. **Left** — draft the notice
3. **Right** — paste it and ask a "first-time 60-year-old reader" to find unclear wording
4. Fix on the left, then **Edit answer → Ask AI → change reading level**

### Final check before sending

| Check | Confirm |
|-------|---------|
| Facts | Statistics, laws, program names, dates cross-checked |
| Personal data | Verified yourself, not only via SecureX |
| Tone | Matches citizen-facing vs internal use |
| Placeholders | All [needs verification] marks resolved |`,
    },
  ],
};

export default {
  id: 'xm-features',
  icon: 'fa-puzzle-piece',
  title: '부가 기능',
  titleEn: 'Extra Features',
  sections: [
    {
      title: '웹 검색 · 세션 파일',
      titleEn: 'Web Search & Session Files',
      content: `엑스몬스터를 더 편리하게 쓸 수 있는 기능들입니다. 필요할 때 참고하세요.

### 웹 검색

ChatAgent에서 최신 정보를 찾을 때 사용하며, **기본으로 켜져 있습니다.**

| 동작 | 방법 |
|------|------|
| 끄기 | 입력창의 '웹 검색' 버튼에 마우스를 올렸을 때 나타나는 **X** 를 클릭 |
| 다시 켜기 | 새로고침하거나 **+ 버튼 메뉴**에서 다시 켜기 |

> 내부 자료만으로 답하게 하고 싶을 때(업로드한 문서만 근거로 삼아야 할 때)는 웹 검색을 끄는 편이 정확합니다.

### 세션 파일

한 번 업로드한 파일은 그 대화 안에서 **'세션 파일'** 로 저장되어, 이어지는 질문에서 계속 참고됩니다.

| 항목 | 내용 |
|------|------|
| 파일 제외 | 입력창 위 '세션 파일' 영역에서 **체크를 해제**하면 그 파일을 빼고 일반 대화 |
| 파일 개수 | 한 대화당 최대 **20개** |
| 파일 크기 | 파일 하나당 최대 **50MB** |

> 여러 부서 제출자료를 한 대화에 올려 두고 "3번 파일 기준으로 다시 정리해줘"처럼 이어서 물을 수 있습니다.`,
      contentEn: `Features that make X-Monster more convenient.

### Web search

Used in ChatAgent to find current information; **on by default.**

| Action | How |
|--------|-----|
| Turn off | Hover the "Web search" button and click the **X** |
| Turn back on | Refresh, or re-enable from the **+ button** menu |

### Session files

An uploaded file is kept as a **session file** for that conversation and referenced by later questions.

| Item | Detail |
|------|--------|
| Exclude a file | Uncheck it in the "Session files" area above the input box |
| Max files | **20** per conversation |
| Max size | **50MB** per file |`,
    },
    {
      title: '답변 편집 · 다운로드',
      titleEn: 'Editing & Downloading Answers',
      content: `### 답변 편집

답변 **우측 상단의 편집 버튼**을 누르면 화면이 분할되며 답변을 수정할 수 있습니다.

- 텍스트를 **드래그하면 서식 도구**가 나타납니다.
- **'AI에게 묻기'** 로 이모지 추가, 문장 길이 조정, 독해 수준 변경, 번역을 할 수 있습니다.

> '독해 수준 변경'은 시민 안내문을 다듬을 때 특히 유용합니다. 행정 용어가 많은 문단을 골라 수준을 낮춰 보세요.

### 답변 다운로드

답변 **좌측 하단의 다운로드 버튼**으로 아래 형식으로 내려받을 수 있습니다.

| 형식 | 확장자 | 쓰임 |
|------|--------|------|
| Word | .docx | 일반 문서 작업 |
| 한글 | .hwpx | 공문서 — 기안 시스템에 그대로 올림 |
| PPT | .pptx | 보고·발표 자료 |
| PPT 편집 | .pptx | 제목·스타일을 설정해 받는 기능 |

![답변 하단의 편집·다운로드 버튼](~/xmonster/08-download.webp)

*▲ 답변 하단의 다운로드 형식 선택*

> **한글(.hwpx) 지원이 핵심입니다** — AI 답변을 복사해 한글에 붙여넣고 서식을 다시 잡는 과정이 사라집니다. 공문 초안은 바로 .hwpx로 받으세요.`,
      contentEn: `### Editing an answer

Click the **edit button at the top right** of an answer to split the screen and edit it. Selecting text reveals formatting tools, and **"Ask AI"** can add emoji, adjust sentence length, change reading level, or translate.

### Downloading an answer

Use the **download button at the bottom left** of an answer.

| Format | Extension | Use |
|--------|-----------|-----|
| Word | .docx | General documents |
| Hangul | .hwpx | Official documents — upload directly to the drafting system |
| PPT | .pptx | Briefing material |
| PPT (edit) | .pptx | Download with title and style configured |

![Download format menu](~/xmonster/08-download.webp)

> **Hangul (.hwpx) support is the key** — no more copying into Hangul and redoing the formatting.`,
    },
    {
      title: 'Dual Chat · SecureX · 화면 구성',
      titleEn: 'Dual Chat, SecureX, Layout',
      content: `### Dual Chat (화면 분할)

화면을 둘로 나눠 **두 개의 비서를 동시에** 사용하는 기능입니다.

| 동작 | 방법 |
|------|------|
| 분할 | 우측 상단 **Dual Chat 버튼** — 기존 화면은 왼쪽, 새 화면은 오른쪽 |
| 내용 이동 | 양쪽은 서로 **독립된 대화** 입니다. 복사·붙여넣기를 사용 |
| 해제 | 키보드 **ESC** 또는 Dual Chat 버튼 다시 누르기 |

> 왼쪽에서 ChatAgent로 공문 초안을 받고, 오른쪽 이미지 생성 비서로 행사 포스터를 동시에 만드는 식으로 씁니다.

### SecureX (개인정보 보호)

입력한 질문이나 업로드한 파일에 개인정보가 들어 있으면 **감지해 가려 주는** 기능입니다. **기본으로 켜져 있습니다.**

| 항목 | 내용 |
|------|------|
| 감지 대상 | 주민등록번호, 전화번호, 휴대전화번호, 카드번호, 이메일, IP주소 등 |
| 동작 | 감지되면 안내 창이 나타나며, **가린 채로 전송**할 수 있습니다 |
| 정책 확인 | 우측 상단 **SecureX 아이콘**을 누르면 현재 보호 정책을 확인 |

> **그래도 주의하세요** — SecureX는 대표적인 개인정보 유형을 자동으로 감지하지만 **모든 민감정보를 100% 가려주지는 않습니다.** 중요한 정보는 입력 전 한 번 더 확인하세요. 민원인 명단·내부 검토 문서는 가명·더미로 바꿔 올리는 습관이 안전합니다.

### 엑스몬 선택 (초기 화면 비서 구성)

좌측 사이드바의 **'엑스몬'** 에서 초기 화면에 표시할 비서와 순서를 설정합니다.

| 표시 | 의미 |
|------|------|
| 활성 (☆) | 화면에 표시할 비서를 켬. **누른 순서대로** 화면에 배치됩니다 |
| 시작 (▶) | 접속할 때 기본으로 선택되어 있을 비서를 지정 |

### 사용자 정보

개인 계정·소속 정보를 확인하는 영역입니다.`,
      contentEn: `### Dual Chat (split screen)

Use **two assistants at once** on a split screen.

| Action | How |
|--------|-----|
| Split | **Dual Chat button** at the top right — current chat left, new chat right |
| Move content | The two sides are **independent** — use copy and paste |
| Exit | Press **ESC** or the Dual Chat button again |

### SecureX (personal data protection)

Detects and masks personal information in your questions and uploads. **On by default.**

| Item | Detail |
|------|--------|
| Detected | Resident registration numbers, phone numbers, card numbers, emails, IP addresses |
| Behavior | A notice appears and you can **send with the data masked** |
| Policy | Click the **SecureX icon** at the top right to view the current policy |

> **Still be careful** — SecureX catches common types but does **not** mask everything. Check sensitive material before sending.

### Assistant layout

In the **X-Mon** menu on the left sidebar, set which assistants appear on the home screen and in what order (☆ = active, in click order; ▶ = default on login).`,
    },
  ],
};

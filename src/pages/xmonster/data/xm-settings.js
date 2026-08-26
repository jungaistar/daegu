export default {
  id: 'xm-settings',
  icon: 'fa-sliders',
  title: '개인 설정',
  titleEn: 'Personal Settings',
  sections: [
    {
      title: '내 프롬프트 — 자주 쓰는 질문을 버튼으로',
      titleEn: 'My Prompts',
      content: `매번 같은 지시를 다시 타이핑하지 않도록, 자주 쓰는 질문을 **버튼(칩)** 으로 만들어 두는 기능입니다.

### 만드는 순서

1. 비서를 선택한 뒤 좌측 사이드바 하단 **'개인 설정' → '내 프롬프트'** 를 누릅니다.
2. **'+ 새 프롬프트 생성'** 을 눌러 아래 항목을 입력합니다.
3. 저장하면 입력창 위에 버튼으로 표시됩니다. 버튼 옆 **'고정하기'** 를 누르면 대화 내내 해당 프롬프트가 적용됩니다.

![내 프롬프트 생성 화면](~/xmonster/07-my-prompt.webp)

*▲ 내 프롬프트 생성 화면*

### 입력 항목

| 항목 | 설명 |
|------|------|
| 프롬프트 이름 | 화면에 표시될 버튼 이름 (오른쪽 팔레트로 색상 지정 가능) |
| 프롬프트 | 버튼을 누르면 내부적으로 적용되는 질문 틀 |
| 질문 자동입력 | 버튼을 누르면 입력창에 표시되는 질문 |
| 설명 | 버튼에 마우스를 올리면 나타나는 안내 문구 |
| 공유하기 | 체크하면 같은 기관 사용자들도 이 버튼을 쓸 수 있습니다 |

> **공유 프롬프트** — 다른 동료가 공유해 둔 프롬프트는 '공유 프롬프트' 화면에서 볼 수 있고, '내 프롬프트로 복사' 버튼으로 가져와 쓸 수 있습니다. 부서에서 잘 만든 공문 프롬프트 하나를 공유하면 팀 전체가 같은 품질로 씁니다.

### 부서에서 만들어 두면 좋은 프롬프트

| 버튼 이름 | 프롬프트에 넣을 내용 |
|----------|-------------------|
| 안내 공문 초안 | "너는 대구광역시청 ○○과 행정 담당자야. 아래 정보로 안내 공문을 제목·수신·본문·붙임 순으로, 본문 3문단 이내 공문체로 작성해줘." |
| 회의록 정리 | "아래 회의록을 (1) 결정사항 (2) 담당자별 할 일(담당자/할 일/기한 표)로 정리해줘." |
| 시민 눈높이 검토 | "너는 이 안내문을 처음 읽는 60대 시민이야. 이해하기 어려운 표현과 빠진 정보를 알려줘." |
| 결과물 점검 | "이 문서를 사실 확인·개인정보·보안·어투 네 관점에서 점검하고 위험도(높/중/낮)와 수정안을 표로 줘." |`,
      contentEn: `Turn frequently used instructions into **buttons (chips)** so you don't retype them.

### How to create

1. With an assistant open, click **Personal Settings → My Prompts** at the bottom of the left sidebar.
2. Click **+ New Prompt** and fill in the fields below.
3. After saving, the button appears above the input box. **Pin** it to apply the prompt throughout the conversation.

![My Prompts creation screen](~/xmonster/07-my-prompt.webp)

### Fields

| Field | Description |
|-------|-------------|
| Prompt name | Button label (color selectable from the palette) |
| Prompt | The instruction template applied internally |
| Auto-filled question | Text placed in the input box when clicked |
| Description | Tooltip shown on hover |
| Share | Lets others in your organization use this button |

> **Shared prompts** — Prompts shared by colleagues appear on the "Shared Prompts" screen; use "Copy to My Prompts" to take one.`,
    },
    {
      title: '내 페르소나 — 내 업무 배경 알려주기',
      titleEn: 'My Persona',
      content: `본인의 업무 분야와 관심사를 미리 등록해 두면, AI가 **매 대화마다 이를 참고해** 더 적합한 답변을 제공합니다. 매번 "나는 ○○과 담당자인데"를 설명하지 않아도 됩니다.

### 등록 순서

1. 좌측 사이드바 하단 **'개인 설정' → '내 페르소나'** 를 누릅니다.
2. 창 우측 하단의 **'수정'** 을 누르고 아래 항목을 입력한 뒤 저장합니다.

### 입력 항목

| 항목 | 설명 | 공무원 작성 예시 |
|------|------|----------------|
| 전문 분야 | 담당 직무·업무 분야 | "대구광역시청 청년정책과, 청년 일자리 지원사업 담당" |
| 관심사 | 관심 있는 주제나 분야 | "청년 고용 통계, 정책 홍보 콘텐츠" |
| 작업 스타일 | 선호하는 답변 방식 | "표로 정리한 간결한 답변, 공문체 유지, 추정과 사실 구분" |
| 배경 정보 | 소속·경력·역할 등 | "행정 7급, 보도자료·공문 작성과 사업 실적 집계 담당" |

> **작업 스타일에 무엇을 적을까** — "확인되지 않은 수치는 [확인 필요]로 표시해줘" 같은 문장을 넣어 두면, 매 대화에서 사실 오류 위험이 줄어듭니다.`,
      contentEn: `Register your work area and interests once, and the AI **refers to them in every conversation** — no need to re-explain your role each time.

### How to register

1. Click **Personal Settings → My Persona** at the bottom of the left sidebar.
2. Click **Edit** at the bottom right, fill in the fields, and save.

### Fields

| Field | Description | Example |
|-------|-------------|---------|
| Expertise | Your role and work area | "Youth Policy Division, Daegu City Hall" |
| Interests | Topics you follow | "Youth employment statistics, policy PR" |
| Work style | Preferred answer style | "Concise tables, official tone, separate facts from estimates" |
| Background | Affiliation, experience, role | "Handles press releases and performance aggregation" |

> **What to put in work style** — A line like "mark unverified figures as [needs verification]" reduces factual-error risk in every conversation.`,
    },
  ],
};

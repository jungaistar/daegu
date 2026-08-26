export default {
  id: 'xm-assistants',
  icon: 'fa-user-astronaut',
  title: 'AI 비서(엑스몬) 3종',
  titleEn: 'The Three Assistants',
  sections: [
    {
      title: 'ChatAgent — 문서·요약·검색',
      titleEn: 'ChatAgent — Documents, Summary, Search',
      content: `**엑스몬**은 엑스몬스터가 제공하는 AI 비서를 부르는 이름입니다. 비서마다 잘하는 일이 다르므로 **하려는 업무에 맞는 비서를 골라** 사용합니다. 초기 화면의 카드를 클릭하면 해당 비서로 대화가 시작됩니다.

### 어떤 일을 하나

가장 기본이 되는 챗 비서입니다. 글과 관련된 대부분의 업무를 처리합니다.

| 업무 | 예시 |
|------|------|
| 초안 작성 | 보도자료·기획안 초안 |
| 문서 요약 | PDF · hwpx · docx 등 업로드 후 요약 |
| 정보 검색 | 최신 정보 검색 (웹 검색 기본 켜짐) |

### 모델 바꿔 쓰기

- 여러 AI 모델을 골라 쓸 수 있습니다. 입력창 우측 하단 모델 선택 버튼에서 고릅니다.
- **한 대화 안에서 모델을 바꿀 수 있습니다.** 이전 답변의 맥락이 유지되므로, 한 모델로 초안을 받고 다른 모델에 검토를 맡기는 식으로 쓸 수 있습니다.
- 이미지 생성은 ChatAgent에서 **지원하지 않습니다.** 이미지 생성 비서를 이용하세요.

> **모델 활용 팁** — 같은 질문을 모델만 바꿔 다시 보내면 모델별 답변을 비교할 수 있습니다. 여러 모델을 한 화면에서 동시에 보고 싶다면 '멀티 LLM 비교' 비서를 이용하세요.`,
      contentEn: `**X-Mon** is the name for X-Monster's AI assistants. Each is good at different work, so pick the one that matches your task.

### What it does

The default chat assistant, handling most text-related work: press release and proposal drafts, document summaries (PDF, hwpx, docx), and up-to-date information search.

### Switching models

- Choose a model from the selector at the bottom right of the input box.
- **You can switch models mid-conversation** — earlier context is kept, so you can draft with one model and have another review it.
- Image generation is **not supported** in ChatAgent — use the image assistant.

> **Tip** — Resend the same question with a different model to compare answers. To see several models at once, use the Multi-LLM comparison assistant.`,
    },
    {
      title: '이미지 생성 — 포스터·홍보물',
      titleEn: 'Image Generation — Posters and PR',
      content: `자유 질문 또는 업로드한 파일을 바탕으로 이미지를 만드는 비서입니다. 행사 홍보 포스터, 안내용 일러스트 등을 제작할 수 있습니다. **일반 대화는 지원하지 않습니다.**

### 모델 고르기

입력창의 모델 선택 버튼에서 **gpt-image2** 와 **nano-banana2** 중 고릅니다. 기본은 gpt-image2이며, 두 모델은 그림체와 표현 방식에 차이가 있으니 결과를 비교해 보고 업무에 맞는 쪽을 쓰면 됩니다.

![이미지 생성 비서의 모델 선택](~/xmonster/04-image-model.webp)

*▲ 이미지 생성 비서의 모델 선택*

### 크기·스타일 설정

입력창의 **톱니바퀴 버튼**으로 이미지 설정 창을 열어 크기와 스타일을 미리 고를 수 있습니다.

![이미지 설정 창](~/xmonster/05-image-settings.webp)

*▲ 톱니바퀴를 누르면 열리는 이미지 설정 창*

### 질문 예시

| 상황 | 질문 |
|------|------|
| 새로 만들기 | "주민센터 앞 문화행사 홍보용 캐릭터 이미지 만들어줘" |
| 기존 이미지 수정 | "업로드한 포스터 하단 접수기간을 ○○년 ○○월로 바꿔줘" |

### 생성된 이미지 다듬기

이미지에 마우스를 올리면 가운데 **돋보기 버튼**이 나타납니다. 누르면 확대 화면으로 전환되며 아래 작업을 할 수 있습니다.

| 기능 | 설명 |
|------|------|
| 배경 수정 | 배경을 투명하게 바꾸거나 원하는 배경을 입력해 변경 |
| 이미지 보정 | 색상과 해상도 보정 |
| 스타일 변경 | 픽셀, 수채화, 지브리 등 그림체 변경 |
| 이미지 삽입 | 다른 이미지 파일을 골라 삽입 (위치·크기 조정 가능) |
| 이미지 병합 | 다른 이미지 파일과 합치기 |

> **알아두세요** — 이미지 속 글자는 입력한 그대로 정확히 나오지 않을 수 있습니다. 또 기관의 공식 캐릭터·로고는 정확히 재현되지 않으므로, 필요하면 해당 이미지를 직접 업로드해 사용하는 것이 좋습니다.`,
      contentEn: `Creates images from a free-form request or an uploaded file — event posters, informational illustrations. **General conversation is not supported.**

### Choosing a model

Pick between **gpt-image2** (default) and **nano-banana2**. They differ in drawing style, so compare results.

![Image model selector](~/xmonster/04-image-model.webp)

### Size and style

Open the image settings with the **gear button** in the input box.

![Image settings](~/xmonster/05-image-settings.webp)

### Refining a generated image

Hover the image and click the magnifier to enlarge, then adjust: background replacement or transparency, color and resolution correction, style change (pixel, watercolor, Ghibli), inserting another image, or merging images.

> **Note** — Text inside images may not render exactly as typed, and official mascots or logos are not reproduced accurately. Upload the real asset when it matters.`,
    },
    {
      title: '멀티 LLM 비교 — 답변 한눈에',
      titleEn: 'Multi-LLM Comparison',
      content: `여러 모델의 답변을 한 화면에서 나란히 보는 비서입니다.

| 기능 | 방법 |
|------|------|
| 모델 중복 선택 | 입력창의 모델 선택 목록에서 여러 모델을 함께 체크 (기본값: 전체 선택) |
| 답변 확대 | 각 답변 창 우측 상단 아이콘을 누르면 팝업으로 크게 보기 |

![멀티 LLM 비교 화면](~/xmonster/06-multi-llm.webp)

*▲ 멀티 LLM 비교 화면*

> **언제 쓰면 좋나** — 중요한 공문·보도자료처럼 표현 하나가 중요한 문서는 여러 모델 답변을 나란히 놓고 가장 나은 문장을 골라 쓰면 실수가 줍니다.`,
      contentEn: `Shows answers from several models side by side.

| Feature | How |
|---------|-----|
| Multi-select models | Check multiple models in the selector (default: all) |
| Enlarge an answer | Click the icon at the top right of each answer pane |

![Multi-LLM comparison](~/xmonster/06-multi-llm.webp)

> **When to use** — For documents where wording matters, compare answers side by side and pick the best sentences.`,
    },
  ],
};

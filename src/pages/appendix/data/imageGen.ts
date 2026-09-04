/**
 * 부록 — 이미지 만들기
 * knou.dreamitbiz.com/#/session/4 의 내용을 그대로 옮겼다.
 * 강의 회차(4강·3강·5강)·강사명·시간 배분만 덜어냈고, 본문은 손대지 않았다.
 */
export default {
  id: 'image-gen',
  icon: 'fa-wand-magic-sparkles',
  title: '이미지 만들기',
  titleEn: 'Making Images',
  sections: [
    {
      title: '내 사진을 살리고, 홍보 이미지 만들기',
      titleEn: 'Restore Your Photos, Make Your Own Graphics',
      content: `**사진 복원·보정 → 배경 제거 → 프로필/카드/포스터 완성**

\`사진 복원\` · \`프로필 보정\` · \`배경 제거\` · \`카드·포스터 제작\`

> **목표** — 사진을 복원·보정하고 새 이미지를 만들어, 실제 사용할 프로필 사진·카드·포스터 중 하나를 완성한다.

### 배우는 핵심

| 핵심 | 내용 |
|------|------|
| **설명이 곧 재료예요** | AI 이미지는 내가 말한 만큼만 그려져요. 대상·장면·분위기·비율 네 가지를 채우면 결과가 눈에 띄게 좋아져요. |
| **원본은 항상 따로 보관** | 복원·보정 전의 원본 사진은 지우지 말고 남겨두세요. 과하게 바뀌었을 때 되돌릴 수 있는 유일한 방법이에요. |
| **한 번에 하나씩 고쳐요** | "배경도 바꾸고 색도 바꾸고 글자도 넣어줘"보다 한 가지씩 순서대로 요청하는 쪽이 원하는 결과에 빨리 도착해요. |
| **내 사진이라도 남의 얼굴은 조심** | 단체 사진 속 다른 사람 얼굴을 보정·가공해 공유하려면 당사자 동의가 먼저예요. |

### 진행 순서

| 순서 | 구분 | 무엇을 | 설명 |
|------|------|--------|------|
| 1 | 도입 | 오늘 만들 이미지 정하기 | 완성할 이미지(프로필/카드/포스터) 중 하나를 골라요. |
| 2 | **실습** | 옛날 사진 복원·확대 / 흐린 사진 선명하게 | 오래되거나 흐린 사진을 복원·업스케일하는 도구를 직접 사용해 봐요. |
| 3 | **실습** | 프로필 사진 보정과 배경 지우기·바꾸기 | 얼굴·인물 보정, 배경 제거·교체까지 한 장의 프로필 사진을 완성해요. |
| 4 | 학습 | 원하는 이미지를 얻는 설명법 | 대상·장면·분위기·비율을 구체적으로 지시하는 법을 익혀요. |
| 5 | **실습** | 명절카드·모임 포스터·가게 홍보물 중 하나 완성 | 앞서 익힌 기술을 종합해 실제로 쓸 결과물 1건을 끝까지 완성해요. |
| 6 | 정리 | 카카오톡·이메일·폐쇄형 공유공간에 저장 | 완성 이미지를 내가 바로 꺼내 쓸 수 있는 곳에 저장해요. |
| 7 | 정리 | 결과물 공유 | 원하는 사람만 결과물을 공유해요. |

### 완성하는 것

**프로필 사진·카드·포스터 중 실제로 사용할 이미지 1장**

> **꼭 기억해요** — 여기서는 사진·이미지에만 집중해요. PPT나 영상은 다루지 않아요.`,
      contentEn: `**Restore and retouch → remove the background → finish a profile photo, card or poster**

\`Photo restoration\` · \`Profile retouching\` · \`Background removal\` · \`Cards & posters\`

> **Goal** — Restore and retouch a photo, create a new image, and finish one thing you will actually use: a profile photo, a card or a poster.

### The core ideas

| Idea | What it means |
|---|---|
| **Your description is the material** | An AI image is only as good as what you said. Fill in subject, scene, mood and ratio and the result improves noticeably. |
| **Always keep the original** | Never delete the photo you had before restoring or retouching. It is the only way back when the result changes too much. |
| **Fix one thing at a time** | "Change the background and the colors and add text" works worse than asking for one change at a time, in order. |
| **Even in your own photo, be careful with other faces** | Retouching and sharing someone else's face from a group photo needs their consent first. |

### The sequence

| # | Type | What | Description |
|---|---|---|---|
| 1 | Intro | Decide what you will make | Pick one: profile photo, card or poster. |
| 2 | **Practice** | Restore an old photo / sharpen a blurry one | Use a restoration/upscaling tool yourself. |
| 3 | **Practice** | Retouch a profile photo, remove and replace the background | Finish one profile photo end to end. |
| 4 | Learn | How to describe what you want | Learn to specify subject, scene, mood and ratio. |
| 5 | **Practice** | Finish a card, poster or shop graphic | Combine everything into one finished piece you will use. |
| 6 | Wrap-up | Save it where you can reach it | Store the finished image somewhere you can pull it out immediately. |
| 7 | Wrap-up | Share if you want | Share the result only if you want to. |

### What you finish with

**One image you will actually use — a profile photo, a card or a poster.**

> **Remember** — this is about photos and images only. Slides and video are not covered here.`,
    },
    {
      title: '따라하기 ① 옛날 사진 복원 · 흐린 사진 선명하게',
      titleEn: 'Walkthrough 1 — Restore Old or Blurry Photos',
      content: `> **목표** — 스캔했거나 오래돼 색이 바랜 사진, 초점이 흐린 사진을 또렷하게 되살린다.

### 순서대로 따라 하기

**1** 복원하고 싶은 사진을 스마트폰 갤러리 또는 노트북에서 준비한다.

**2** 사진 복원·업스케일 도구에 업로드하고 "얼굴 선명하게, 색은 자연스럽게" 정도로 요청한다.

**3** 결과를 원본과 나란히 비교하며 과하게 다른 사람처럼 바뀌지 않았는지 확인한다.

**4** 마음에 들면 저장, 아쉬우면 "조금 더 자연스럽게"처럼 짧게 다시 요청한다.

### 쓸 수 있는 도구

| 도구 |
|------|
| 스마트폰 사진 앱의 자동 보정·복원 기능 |
| 무료 사진 복원/업스케일 웹 도구 (예시 — 강사 재량으로 대체) |`,
      contentEn: `> **Goal** — Bring back a scanned, faded or out-of-focus photo.

### Follow these in order

**1** Prepare the photo you want to restore, from your phone gallery or laptop.

**2** Upload it to a restoration/upscaling tool and ask for something like "sharpen the face, keep the colors natural."

**3** Compare the result side by side with the original and check it has not turned into a different person.

**4** Save it if you like it; if not, ask again briefly — "a little more natural."

### Tools you can use

| Tool |
|---|
| The automatic enhance/restore feature in your phone's photo app |
| A free photo restoration/upscaling web tool (example — the instructor may substitute) |`,
    },
    {
      title: '따라하기 ② 프로필 사진 보정 · 배경 지우기·바꾸기',
      titleEn: 'Walkthrough 2 — Retouch a Profile Photo and Change the Background',
      content: `> **목표** — 증명사진처럼 쓸 수 있는 프로필 사진 한 장을 완성한다.

### 순서대로 따라 하기

**1** 본인이 잘 나온 사진을 하나 고른다(정면, 밝은 표정 권장).

**2** 배경 제거 도구로 배경을 지운다.

**3** 흰 배경, 단색 배경, 흐린 사무실 배경 중 원하는 배경으로 바꿔 본다.

**4** 얼굴 밝기·색감을 자연스럽게 다듬어 저장한다.

### 쓸 수 있는 도구

| 도구 |
|------|
| 배경 제거 전용 무료 웹 도구 (예시) |
| 대화형 AI의 이미지 편집 기능 (예시) |`,
      contentEn: `> **Goal** — Finish one profile photo you could use like an ID photo.

### Follow these in order

**1** Pick a photo where you look good (front-facing, bright expression recommended).

**2** Remove the background with a background-removal tool.

**3** Try replacing it: white, a solid color, or a softly blurred office background.

**4** Adjust facial brightness and color naturally, then save.

### Tools you can use

| Tool |
|---|
| A free dedicated background-removal web tool (example) |
| The image editing feature of a conversational AI (example) |`,
    },
    {
      title: '따라하기 ③ 원하는 이미지를 얻는 설명법',
      titleEn: 'Walkthrough 3 — How to Describe What You Want',
      content: `> **목표** — "대상·장면·분위기·비율" 네 가지를 넣어 원하는 이미지를 정확히 얻는다.

### 네 가지를 채웁니다

**1 대상** — 무엇을/누구를 그릴지 (예: 나, 우리 가게, 우리 동네 풍경)

**2 장면** — 어떤 상황·배경인지 (예: 명절 인사, 가을 축제 포스터)

**3 분위기** — 어떤 느낌인지 (예: 따뜻한, 밝고 경쾌한, 정중한)

**4 비율** — 세로/가로, 카드용인지 포스터용인지

### 그대로 쓰는 틀

\`\`\`text
[대상]을(를) [장면] 상황으로, [분위기] 느낌으로 만들어줘. 비율은 [세로/가로]로, 글자는 넣지 말고 이미지만 만들어줘.
\`\`\`

예시 — 우리 가족을 명절 인사 카드 배경으로, 따뜻하고 정겨운 느낌으로 만들어줘. 비율은 세로로, 글자는 넣지 말고 이미지만 만들어줘.

---

## 바로 쓰는 예시 4가지

### 1/4 · 증명사진처럼 쓸 프로필이 필요할 때 — 프로필 사진 배경 만들기

\`\`\`text
무엇에 쓸 것인지 — 증명사진처럼 쓸 프로필 사진의 배경입니다.
어떤 느낌으로 — 밝고 단정한 실내 느낌으로 만들어 주세요.
어떻게 놓을지 — 가운데는 비워 두고, 인물이 들어갈 자리를 남겨 주세요.
넣지 말 것 — 사람, 글자, 로고는 넣지 말아 주세요.
크기 — 세로 비율(3:4)로 만들어 주세요.
\`\`\`

### 2/4 · 가족·지인에게 보낼 카드를 만들 때 — 명절 인사 카드 배경

\`\`\`text
무엇에 쓸 것인지 — 추석 인사 카드의 배경입니다.
어떤 느낌으로 — 따뜻하고 정겨운 느낌, 한국적인 가을 분위기로 만들어 주세요.
어떻게 놓을지 — 위쪽 3분의 1을 비워 인사말을 넣을 자리를 남겨 주세요.
넣지 말 것 — 글자, 사람 얼굴, 상표는 넣지 말아 주세요.
크기 — 세로 비율로 만들어 주세요.
\`\`\`

### 3/4 · 동호회나 행사를 알려야 할 때 — 모임·행사 포스터 배경

\`\`\`text
무엇에 쓸 것인지 — 동호회 가을 모임을 알리는 포스터의 배경입니다.
어떤 느낌으로 — 밝고 산뜻하며 눈에 잘 띄는 느낌으로 만들어 주세요.
어떻게 놓을지 — 가운데를 크게 비워 제목과 날짜를 넣을 자리를 남겨 주세요.
넣지 말 것 — 글자, 복잡한 무늬, 사람 얼굴은 넣지 말아 주세요.
크기 — 세로 비율(A4)로 만들어 주세요.
\`\`\`

### 4/4 · 가게나 작은 모임을 알릴 때 — 가게·소모임 홍보 이미지

\`\`\`text
무엇에 쓸 것인지 — 동네 반찬가게를 알리는 홍보 이미지입니다.
어떤 느낌으로 — 깨끗하고 정갈하며 믿음이 가는 느낌으로 만들어 주세요.
어떻게 놓을지 — 왼쪽에 여백을 두어 가게 이름을 넣을 자리를 남겨 주세요.
넣지 말 것 — 글자, 상표, 실제 인물 사진은 넣지 말아 주세요.
크기 — 정사각형(1:1)으로 만들어 주세요.
\`\`\``,
      contentEn: `> **Goal** — Get exactly the image you want by including four things: subject, scene, mood, ratio.

### Fill in these four

**1 Subject** — what or who to draw (e.g. me, my shop, my neighborhood)

**2 Scene** — the situation or setting (e.g. a holiday greeting, an autumn festival poster)

**3 Mood** — the feeling (e.g. warm, bright and lively, formal)

**4 Ratio** — portrait or landscape; for a card or a poster

### The template to reuse

\`\`\`text
Make [subject] in a [scene] situation, with a [mood] feeling.
Use a [portrait/landscape] ratio. No text — image only.
\`\`\`

Example — Make my family as a holiday greeting card background, warm and affectionate. Portrait ratio, no text, image only.

---

## Four ready-to-use examples

### 1/4 · When you need a profile you can use like an ID photo — Profile photo background

\`\`\`text
What it is for — the background of a profile photo used like an ID photo.
The feeling — bright, tidy, indoor.
The layout — leave the center empty, with room for a person.
Do not include — people, text, logos.
Size — portrait ratio (3:4).
\`\`\`

### 2/4 · When making a card for family or friends — Holiday greeting card background

\`\`\`text
What it is for — the background of a Chuseok greeting card.
The feeling — warm and affectionate, a Korean autumn mood.
The layout — leave the top third empty for a greeting message.
Do not include — text, human faces, brand marks.
Size — portrait ratio.
\`\`\`

### 3/4 · When announcing a club or event — Meeting/event poster background

\`\`\`text
What it is for — the background of a poster announcing a club's autumn meetup.
The feeling — bright, fresh, eye-catching.
The layout — leave a large empty center for the title and date.
Do not include — text, busy patterns, human faces.
Size — portrait ratio (A4).
\`\`\`

### 4/4 · When promoting a shop or small group — Shop/small-group promotional image

\`\`\`text
What it is for — a promotional image for a neighborhood side-dish shop.
The feeling — clean, tidy, trustworthy.
The layout — leave margin on the left for the shop name.
Do not include — text, brand marks, photos of real people.
Size — square (1:1).
\`\`\``,
    },
    {
      title: '따라하기 ④ 명절카드·모임 포스터·가게 홍보물 중 하나 완성',
      titleEn: 'Walkthrough 4 — Finish a Card, Poster or Shop Graphic',
      content: `> **목표** — 배운 것을 모두 합쳐 실제로 쓸 결과물 1건을 끝까지 완성한다.

### 순서대로 따라 하기

**1** 셋 중 하나를 고른다: 명절·안부 카드 / 모임·행사 포스터 / 가게·소모임 홍보물

**2** ②에서 만든 프로필 사진 또는 새 이미지를 바탕 이미지로 사용한다.

**3** ③의 설명법으로 배경·분위기를 원하는 대로 다듬는다.

**4** 문구(제목·인사말)는 대화형 AI로 짧게 초안을 받아 붙이거나, 디자인 도구의 글자 넣기 기능을 쓴다.

**5** 완성본을 카카오톡·이메일 등 바로 쓸 수 있는 곳에 저장한다.

### 쓸 수 있는 도구

| 도구 |
|------|
| 카드·포스터 템플릿 무료 디자인 도구 (예시) |
| 대화형 AI로 문구 초안 작성 (예시) |`,
      contentEn: `> **Goal** — Combine everything into one finished piece you will actually use.

### Follow these in order

**1** Pick one: a holiday/greeting card, a meeting/event poster, or a shop/small-group graphic.

**2** Use the profile photo from Walkthrough 2, or a new image, as the base.

**3** Refine the background and mood using the description method from Walkthrough 3.

**4** For the wording (title, greeting), get a short draft from a conversational AI, or use the text tool in a design app.

**5** Save the finished piece somewhere you can use right away — messenger, email.

### Tools you can use

| Tool |
|---|
| A free design tool with card/poster templates (example) |
| A conversational AI for drafting the wording (example) |`,
    },
    {
      title: '막힐 때 이렇게 해보세요',
      titleEn: 'When You Get Stuck',
      content: `### 원하는 그림이 안 나와요

요청을 쪼개 보세요. 먼저 대상과 장면만으로 만들고, 마음에 들면 분위기·색을 한 가지씩 추가 요청하는 방식이 가장 안정적이에요.

### 복원했더니 다른 사람 같아요

"얼굴 생김새는 바꾸지 말고 선명도만 올려줘"처럼 지킬 것을 명시해 보세요. 그래도 과하면 원본에서 다시 시작하면 돼요.

### 이미지에 글자를 넣고 싶어요

AI 생성 이미지의 글자는 뭉개지기 쉬워요. 이미지는 글자 없이 만들고, 글자는 디자인 도구의 텍스트 기능으로 얹는 것이 깔끔해요.

---

## 마무리

- **완성한 것** — 프로필 사진·카드·포스터 중 실제로 사용할 이미지 1장
- **저장 위치를 꼭 기억해 두세요.**

> 여기서 익힌 이미지 감각은 가짜 이미지를 판별하는 눈으로 그대로 이어집니다.`,
      contentEn: `### I can't get the picture I want

Break the request up. Make it with the subject and scene only first, then add the mood and colors one at a time once you like it. That is the most reliable way.

### The restored photo looks like a different person

State what must be preserved — "don't change the facial features, only increase sharpness." If it is still too much, start again from the original.

### I want to put text in the image

Text inside AI-generated images smears easily. Make the image without text and lay the text on top with a design tool's text feature — much cleaner.

---

## Wrapping up

- **What you finished** — one image you will actually use: a profile photo, a card or a poster.
- **Remember where you saved it.**

> The eye you develop here carries straight over into spotting fake images.`,
    },
  ],
};

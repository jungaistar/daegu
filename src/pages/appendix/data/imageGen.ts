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
      title: '따라하기 ⑤ 내 사진으로 이모티콘 만들기',
      titleEn: 'Walkthrough 5 — Turn Your Photo into Emoji',
      content: `**소요 20분 · 준비물: 얼굴이 정면으로 크게 나온 내 사진 1장**

> **목표** — 내 얼굴 특징을 살린 이모티콘 6종(표정별)을 만들어, 메신저나 부서 안내물에 쓸 수 있는 이미지 묶음으로 저장한다.

그림의 **주황 번호가 아래 STEP 번호**입니다.

![이모티콘 만들기 화면 — 사진 첨부, 다섯 조건 지정, 표정 6종 결과, 한 장씩 수정](~/appendix/image-emoji.svg)

---

### STEP 1 · 쓸 사진을 고릅니다

| 좋은 사진 | 나쁜 사진 |
|-----------|-----------|
| 얼굴이 **정면**, 화면에 크게 | 옆모습, 얼굴이 작게 나온 전신 |
| 밝은 곳에서 찍은 것 | 역광·어두운 곳 |
| 얼굴을 가리는 것이 없음 | 마스크·선글라스·머리카락에 가림 |
| **나 혼자** 나온 사진 | 단체 사진 |

**✅ 확인** — 단체 사진밖에 없다면 **내 얼굴만 잘라내서** 쓰세요. 다른 사람 얼굴이 함께 들어가면 그 사람 동의가 필요합니다.

---

### STEP 2 · 다섯 가지 조건을 함께 적습니다

사진을 붙인 뒤 아래를 그대로 붙여넣습니다. **다섯 가지가 다 들어 있어야** 쓸 만한 결과가 나옵니다.

\`\`\`text
이 사진 속 인물의 얼굴 특징을 유지한 채 이모티콘용 캐릭터로 만들어 줘.

- 표정: 기쁨, 슬픔, 놀람, 화남, 졸림, 좋아요 6종
- 배경: 투명하게
- 그림체: 선이 굵고 단순한, 메신저 이모티콘 느낌으로
- 비율: 정사각형
- 글자는 넣지 말고 그림만
\`\`\`

**✅ 확인** — 다섯 줄이 각각 무엇을 정하는지 알고 쓰세요.

| 줄 | 없으면 생기는 일 |
|----|-----------------|
| 얼굴 특징 유지 | 나와 안 닮은 남이 나온다 |
| 표정 6종 | 한 장만 나온다 |
| 배경 투명 | 흰 네모가 따라다녀 메신저에서 지저분하다 |
| 그림체 지정 | 매번 다른 화풍이 섞여 나온다 |
| 정사각형 | 메신저 규격에 안 맞아 잘린다 |

---

### STEP 3 · 여섯 장의 결이 같은지 먼저 봅니다

**✅ 확인** — 표정이 맞는지보다 **여섯 장의 그림체가 서로 같은지**를 먼저 보세요.

| 결과 | 판정 | 다음 |
|------|------|------|
| 여섯 장 화풍이 같다 | **정상** | STEP 4로 |
| 장마다 화풍이 다르다 | 흔한 실패 | \`여섯 장을 완전히 같은 그림체로 다시 만들어 줘\` |
| 나와 안 닮았다 | 조건 누락 | \`원본 사진의 얼굴 생김새를 더 살려서 다시\` |

> 그림체가 섞이면 이모티콘 묶음으로 못 씁니다. **화풍 통일이 표정 정확도보다 먼저**입니다.

---

### STEP 4 · 고칠 곳은 한 장씩 집어서

\`\`\`text
3번(놀람)만 눈을 더 크게 해서 다시 만들어 줘.
나머지 다섯 장은 그대로 두고.
\`\`\`

**✅ 확인** — 지목한 한 장만 바뀌었나요? **"나머지는 그대로 두고"** 를 빠뜨리면 마음에 들었던 장까지 다시 그려집니다.

---

### STEP 5 · 저장하고 실제로 써 봅니다

1. 여섯 장을 각각 **내려받아** 한 폴더에 모읍니다.
2. 파일 이름을 \`이모티콘_01_기쁨.png\` 처럼 **번호와 표정으로** 붙입니다.
3. 메신저에 한 장 보내 **크기와 배경**이 괜찮은지 봅니다.

**✅ 확인** — 작은 크기로 보냈을 때 **얼굴이 알아볼 만한가요?** 뭉개지면 \`선을 더 굵고 단순하게\` 라고 요청해 다시 만듭니다. 이모티콘은 작게 보이는 것이 전제입니다.

---

### 업무에 쓸 때

| 쓸 수 있는 곳 | 주의 |
|--------------|------|
| 부서 내부 안내물·회의 자료 | 자유롭게 |
| 대외 홍보물·시민 대상 안내 | **AI로 만든 이미지임을 밝히고** 사용 |
| 다른 직원 얼굴로 제작 | **반드시 당사자 동의** 후 |

> 내 얼굴이라도 **원본 사진은 지우지 말고 보관**하세요. 다시 만들 때 필요합니다.`,
      contentEn: `**20 minutes · You need one photo of your face, front-on and large in frame**

> **Goal** — Produce six expression variants of an emoji character that keeps your own facial features, saved as a usable set.

![Emoji-making screen](~/appendix/image-emoji.svg)

### STEP 1 · Choose the photo

| Good | Bad |
|---|---|
| Front-facing, large in frame | Profile, full body with a tiny face |
| Well lit | Backlit or dark |
| Face unobstructed | Mask, sunglasses, hair covering |
| **You alone** | A group photo |

**✅ Check** — if you only have a group photo, **crop out just your face.** Another person's face needs their consent.

### STEP 2 · State five conditions together

\`\`\`text
Turn the person in this photo into an emoji character, keeping their facial features.

- Expressions: happy, sad, surprised, angry, sleepy, thumbs-up (6)
- Background: transparent
- Style: thick simple lines, messenger-sticker feel
- Ratio: square
- No text, image only
\`\`\`

| Line | What happens without it |
|---|---|
| Keep facial features | A stranger appears |
| Six expressions | You get one image |
| Transparent background | A white box follows it everywhere |
| Style specified | Mixed art styles across the set |
| Square | Cropped by messenger sizing |

### STEP 3 · Check the six share one style — before checking expressions

| Result | Verdict | Next |
|---|---|---|
| Same style across six | **Good** | STEP 4 |
| Styles differ | Common failure | "Redo all six in exactly the same style" |
| Doesn't look like me | Missing condition | "Follow the original face more closely" |

> A mixed-style set is unusable. **Style consistency comes before expression accuracy.**

### STEP 4 · Fix one at a time
"Redo only #3 (surprised) with bigger eyes. Leave the other five as they are."
**✅ Check** — only the named one changed. Omit "leave the rest" and your favorites get redrawn.

### STEP 5 · Save and actually use one
Download all six, name them \`emoji_01_happy.png\` style, then send one in a messenger.
**✅ Check** — **is the face recognizable at small size?** If it smears, ask for thicker, simpler lines. Emoji are seen small by definition.

### Using them at work

| Where | Caution |
|---|---|
| Internal materials | Freely |
| Public-facing materials | **Disclose that it is AI-generated** |
| Made from a colleague's face | **Consent required first** |

> Keep the original photo — you will need it to regenerate.`,
    },
    {
      title: '따라하기 ⑥ 내 사진을 그림 화풍으로 바꾸기',
      titleEn: 'Walkthrough 6 — Convert Your Photo to an Illustrated Style',
      content: `**소요 20분 · 준비물: 인물이 크게 나온 사진 1장**

> **목표** — 사진을 손그림·수채화 같은 애니메이션 화풍으로 바꾸되, **얼굴이 다른 사람이 되지 않게** 통제한다.

![화풍 바꾸기 화면 — 유지할 것과 바꿀 것 구분, 원본 대조, 공개 시 주의](~/appendix/image-style.svg)

---

### 먼저 알아둘 것 — 화풍 요청은 이렇게 씁니다

특정 스튜디오나 작가 이름(예: "지브리풍", "○○ 작가 화풍")을 그대로 넣는 요청은 도구에 따라 **거부되거나 결과가 들쭉날쭉**합니다. 그리고 그렇게 만든 이미지를 대외에 쓰면 저작권·표절 시비가 생길 수 있습니다.

**이름 대신 화풍의 특징을 적으면** 더 안정적이고 안전합니다.

| 대신 이렇게 적으세요 | 얻게 되는 느낌 |
|---------------------|---------------|
| 손으로 그린 듯한 **수채화 애니메이션** 화풍 | 부드러운 색번짐, 따뜻한 톤 |
| 파스텔 색감, **부드러운 윤곽선**, 풍성한 배경 | 동화 같은 분위기 |
| **연필 스케치**에 옅은 채색 | 담백한 손그림 |
| 두꺼운 윤곽선의 **플랫 일러스트** | 단순하고 산뜻한 인포그래픽용 |

> 이렇게 적으면 **원하는 결과는 그대로 얻으면서** 특정 저작물을 흉내 냈다는 문제를 피할 수 있습니다.

---

### STEP 1 · 사진을 고릅니다

**✅ 확인** — 인물이 **화면의 3분의 1 이상**을 차지하나요? 너무 작게 나오면 얼굴이 뭉개져 누군지 알 수 없게 됩니다.

---

### STEP 2 · "그대로 둘 것"을 먼저, "바꿀 것"을 나중에

**이 순서가 결과를 가릅니다.** 바꿀 것부터 쓰면 AI가 얼굴까지 바꿔 버립니다.

\`\`\`text
이 사진을 손으로 그린 듯한 수채화 애니메이션 화풍으로 바꿔 줘.

그대로 둘 것
- 인물의 얼굴 생김새와 표정
- 옷차림과 색
- 서 있는 위치와 구도

바꿀 것
- 색감을 부드럽고 따뜻하게
- 배경의 나무와 하늘을 조금 더 풍성하게
- 전체를 손그림 질감으로
\`\`\`

**✅ 확인** — \`그대로 둘 것\` 이 \`바꿀 것\` 보다 **위에** 있나요? 순서를 바꾸면 결과가 달라집니다.

---

### STEP 3 · 원본과 나란히 놓고 얼굴부터 봅니다

**✅ 확인** — 결과가 예뻐 보이는 것보다 **얼굴이 나인지**가 먼저입니다.

| 결과 | 판정 | 다음 |
|------|------|------|
| 화풍만 바뀌고 얼굴은 그대로 | **성공** | STEP 4로 |
| 다른 사람이 됐다 | 가장 흔한 실패 | \`얼굴 생김새는 절대 바꾸지 말고 색감과 질감만 바꿔 줘\` |
| 너무 조금 바뀌었다 | 요청이 약함 | \`화풍을 더 뚜렷하게, 사진 느낌이 남지 않도록\` |
| 손가락·안경이 이상하다 | 흔한 현상 | \`손과 안경을 자연스럽게 다시 그려 줘\` |

> **한 번에 하나씩** 고칩니다. "얼굴도 살리고 배경도 바꾸고 손도 고쳐줘"는 셋 다 어중간해집니다.

---

### STEP 4 · 쓸 곳에 맞게 다듬습니다

\`\`\`text
이 그림을 세로 카드용으로 다시 만들어 줘.
위쪽 3분의 1은 인사말을 넣을 수 있게 비워 두고, 글자는 넣지 말고.
\`\`\`

**✅ 확인** — 카드·포스터로 쓸 거라면 **글자 자리를 비워 달라고** 하세요. 글자는 나중에 디자인 도구로 얹는 것이 깔끔합니다(따라하기 ④).

---

### STEP 5 · 저장하고 출처를 정리합니다

| 할 일 | 왜 |
|-------|-----|
| **원본 사진을 따로 보관** | 다시 만들거나 되돌릴 때 필요 |
| 결과물 파일 이름에 \`AI\` 표시 | 나중에 원본과 헷갈리지 않게 |
| 어떤 도구로 만들었는지 메모 | 대외 공개 시 밝혀야 할 수 있음 |

**✅ 확인** — 폴더에 **원본 1장 + 결과물**이 함께 있으면 완료입니다.

---

### 공개할 때 지킬 것 세 가지

| # | 지킬 것 | 이유 |
|---|---------|------|
| 1 | **AI로 만든 그림임을 밝힌다** | 실제 사진으로 오해받지 않게 |
| 2 | **다른 사람 얼굴은 동의부터** | 단체 사진 속 얼굴을 가공해 올리는 것은 당사자 권리 문제 |
| 3 | **특정 작품·작가 이름을 결과물 설명에 쓰지 않는다** | 저작권·표절 시비를 부른다 |

> 시정 홍보물처럼 **대외에 나가는 자료**라면 부서의 AI 이용 지침을 먼저 확인하세요. 지침이 이 문서보다 우선합니다.`,
      contentEn: `**20 minutes · You need one photo with the person large in frame**

> **Goal** — Convert a photo into a hand-drawn / watercolor animation style **without the face becoming someone else.**

![Style-conversion screen](~/appendix/image-style.svg)

### First — how to word a style request

Naming a specific studio or artist is **refused by some tools and inconsistent in others**, and using the result publicly invites copyright complaints. **Describe the style's characteristics instead of naming it** — safer and more reliable.

| Write this instead | What you get |
|---|---|
| Hand-drawn **watercolor animation** style | Soft bleeding color, warm tone |
| Pastel palette, **soft outlines**, lush background | A storybook feel |
| **Pencil sketch** with light coloring | Plain hand-drawn |
| Thick outlines, **flat illustration** | Clean, infographic-ready |

### STEP 1 · Choose the photo
**✅ Check** — does the person fill at least a third of the frame? Smaller and the face smears into no one.

### STEP 2 · "Keep" first, "change" second — the order decides the result

\`\`\`text
Convert this photo into a hand-drawn watercolor animation style.

Keep unchanged
- The person's facial features and expression
- Clothing and its colors
- Position and composition

Change
- Softer, warmer colors
- Fuller trees and sky in the background
- An overall hand-drawn texture
\`\`\`

**✅ Check** — is "Keep unchanged" **above** "Change"? Reversing it changes the outcome.

### STEP 3 · Compare against the original — face first

| Result | Verdict | Next |
|---|---|---|
| Style changed, face intact | **Success** | STEP 4 |
| It became someone else | The most common failure | "Do not change the facial features at all — only color and texture" |
| Barely changed | Request too weak | "Make the style more pronounced; no photographic feel left" |
| Hands or glasses look wrong | Common artifact | "Redraw the hands and glasses naturally" |

> Fix **one thing at a time.** Asking for three fixes at once gets three half-fixes.

### STEP 4 · Adapt it to where it will be used
"Remake this for a portrait card, leaving the top third empty for a greeting. No text."
**✅ Check** — ask for empty space; lay text on later with a design tool (Walkthrough 4).

### STEP 5 · Save and record provenance
Keep the original separately, mark \`AI\` in the output filename, and note which tool made it.

### Three rules when publishing

| # | Rule | Why |
|---|---|---|
| 1 | **Say it is AI-generated** | So it isn't mistaken for a photograph |
| 2 | **Get consent for anyone else's face** | Processing and posting someone's face is their right to decide |
| 3 | **Don't name a specific work or artist in the caption** | It invites copyright disputes |

> For anything public-facing, check your organization's AI-use policy first — it takes precedence over this page.`,
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

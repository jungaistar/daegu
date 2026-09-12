/**
 * 1~8교시 따라하기 단계 본문 — 글만 모아 둔 곳.
 * 화면 그림은 scripts/gen-step-svg.mjs, 화면 짜기는 scripts/gen-walkthrough.mjs 가 맡는다.
 *
 * 표기 규칙 — [[굵게]] · `코드`
 */

/* ══════════════ 1교시 ══════════════ */
const s1 = {
  file: 'auto-01-walk.js',
  ko: {
    title: '따라하기 실습 · 말로 설명해서 도구 만들기',
    lead: '**소요 25분 · 준비물은 구글 계정과 브라우저뿐입니다.**\n\n말로 설명한 업무가 실제로 도는 도구가 되는 과정을 처음부터 끝까지 한 바퀴 돕니다. 코드는 한 줄도 쓰지 않습니다. 아래 그림의 주황 번호와 오른쪽 설명 번호가 같습니다. 화면이 그림과 다르면 그 단계의 「이 화면이 안 나오면」을 보세요.\n\n> **실제 업무 파일로 하지 마세요.** 이 실습은 가짜 데이터로 만든 연습용 시트로만 합니다.',
    flow: ['연습 시트 만들기', '네 문장으로 적기', '구조부터 묻기', '코드 받기', '붙여넣고 실행', '권한 허용', '결과 확인'],
    done: [
      '말로 설명한 업무가 도구가 되는 일곱 단계를 한 번 통과했습니다.',
      '오늘 남은 시간에는 이 일곱 단계를 **내 실제 업무로** 다시 한 바퀴 돕니다.',
      '막히면 이 페이지의 그 단계로 돌아와 그림과 화면을 맞춰 보세요.',
    ],
  },
  en: {
    title: 'Hands-on — Build a Tool by Describing It',
    lead: '**25 minutes. All you need is a Google account and a browser.**\n\nYou will walk the full path from describing a task in plain words to a tool that actually runs. You will not write a single line of code. The orange numbers on each screenshot match the numbered steps beside it.\n\n> **Do not use real work files.** This practice uses a throwaway sheet with fake data only.',
    flow: ['Create a practice sheet', 'Write four sentences', 'Ask for the plan first', 'Get the code', 'Paste and run', 'Grant permission', 'Check the result'],
    done: [
      'You have completed all seven steps of turning a spoken description into a working tool.',
      'For the rest of today you will repeat these seven steps with **your own real task**.',
      'If you get stuck, come back to the matching step on this page.',
    ],
  },
  steps: [
    {
      no: 1, svg: 's1-1-sheet-new.svg',
      ko: {
        crumb: '구글 시트 · 새로 만들기',
        title: '연습용 시트를 만들고 자료를 넣습니다',
        alt: '주소창에 sheets.new 를 입력해 빈 시트를 열고 연습용 자료를 채운 구글 시트 화면',
        goal: '오늘 실습 내내 쓸 연습용 시트를 만듭니다. 메뉴를 찾아 들어갈 필요가 없습니다.',
        actions: [
          '브라우저 [[주소창]]에 `sheets.new` 를 입력하고 Enter — 빈 구글 시트가 바로 열립니다. 검색창이 아니라 주소창입니다.',
          '그림과 같이 1행에 [[접수번호 · 부서 · 항목 · 금액]] 을 넣고, 2행부터 자료 세 줄을 넣습니다. 값은 아무거나 좋습니다.',
          '아래쪽 시트 탭 이름을 두 번 눌러 [[신청접수]] 로 바꿉니다.',
        ],
        stuck: [
          { when: '검색 결과가 나와요', then: '주소창이 아니라 검색창에 넣은 것입니다. 브라우저 맨 위 칸에 다시 입력하세요.' },
          { when: '로그인하라고 나와요', then: '구글 계정으로 로그인하면 됩니다. 개인 계정도 됩니다.' },
          { when: '저장 버튼이 안 보여요', then: '구글 시트는 저장 버튼이 없습니다. 입력하는 즉시 저장됩니다.' },
        ],
        note: '탭 이름을 정확히 `신청접수` 로 맞추는 것이 중요합니다. 뒤에서 AI 에게 이 이름을 그대로 알려 주기 때문에, 한 글자만 달라도 도구가 시트를 못 찾습니다.',
      },
      en: {
        crumb: 'Google Sheets · New',
        title: 'Create a practice sheet and fill in sample data',
        alt: 'A new Google Sheet opened through sheets.new and filled with practice data',
        goal: 'Create the throwaway sheet you will use for the rest of this practice.',
        actions: [
          'Type `sheets.new` in the browser [[address bar]] and press Enter. A blank sheet opens immediately.',
          'Put [[ID · Department · Item · Amount]] in row 1 and three rows of any sample values below it.',
          'Rename the sheet tab at the bottom to [[신청접수]] (Applications).',
        ],
        stuck: [
          { when: 'I get search results', then: 'You typed it into the search box. Use the address bar at the very top.' },
          { when: 'It asks me to sign in', then: 'Sign in with any Google account, personal accounts work fine.' },
        ],
        note: 'The tab name must match exactly. You will hand this name to the AI later, and one different character means the tool cannot find the sheet.',
      },
    },
    {
      no: 2, svg: 's1-2-four-lines.svg',
      ko: {
        crumb: '준비 · 업무 흐름 정리',
        title: '업무 흐름을 네 문장으로 적습니다',
        alt: '들어오는 것·하는 일·나오는 것·사람이 볼 것 네 칸을 채운 메모 화면',
        goal: '오늘 하루 전체에서 가장 중요한 단계입니다. 네 칸을 종이나 메모장에 채웁니다.',
        actions: [
          '[[들어오는 것]] — 무엇이 입력으로 들어오나. 시트 이름과 열 이름까지 적습니다.',
          '[[하는 일]] — 그걸로 무엇을 하나. 한 문장으로 적습니다.',
          '[[나오는 것]] — 결과가 어디에 어떤 모양으로 나오나.',
          '[[사람이 볼 것]] — 담당자가 무엇을 확인해야 하나.',
        ],
        stuck: [
          { when: '한 칸이 안 채워져요', then: '그 칸이 바로 아직 안 정해진 규칙입니다. 지금 정하세요. 비워 두면 AI 가 제 마음대로 정합니다.' },
          { when: '너무 당연해 보여요', then: '당연한 것을 적는 단계가 맞습니다. AI 는 내 부서 사정을 하나도 모릅니다.' },
        ],
      },
      en: {
        crumb: 'Prepare · Describe the flow',
        title: 'Write the task as four sentences',
        alt: 'A note with four boxes filled in: input, processing, output, human check',
        goal: 'This is the most important step of the whole day. Fill four boxes on paper or in a notepad.',
        actions: [
          '[[Input]] — what comes in. Name the sheet and the columns.',
          '[[Processing]] — what is done with it, in one sentence.',
          '[[Output]] — where the result goes and in what shape.',
          '[[Human check]] — what the officer must verify afterwards.',
        ],
        stuck: [
          { when: 'One box stays empty', then: 'That empty box is a rule you have not decided yet. Decide it now, or the AI will decide for you.' },
        ],
      },
    },
    {
      no: 3, svg: 's1-3-ask-structure.svg',
      ko: {
        crumb: 'AI 도구 · 첫 대화',
        title: '코드 말고 「처리 순서」부터 물어봅니다',
        alt: '코드 대신 처리 순서를 번호 목록으로 먼저 받아 본 AI 대화 화면',
        goal: 'AI 가 내 업무를 제대로 이해했는지 먼저 확인합니다. 여기서 잡으면 한 문장으로 고칩니다.',
        actions: [
          'ChatGPT · Claude · Gemini 중 아무거나 하나를 엽니다. 어느 것이든 됩니다.',
          '앞 단계에서 적은 [[네 문장]]을 그대로 붙여넣습니다.',
          '맨 끝에 [[아직 코드는 쓰지 마. 이해한 처리 순서를 번호 목록으로 먼저 알려 줘.]] 를 반드시 붙입니다.',
          'AI 가 되물으면 그 질문을 메모해 둡니다 — 내가 아직 안 정한 규칙입니다.',
        ],
        stuck: [
          { when: '코드가 바로 나와요', then: '"코드 말고 처리 순서만 번호로 알려 줘" 라고 다시 시키세요.' },
          { when: '순서가 내 업무와 달라요', then: '지금이 고칠 때입니다. 다른 부분만 짚어 "3번은 이렇게 해야 해" 라고 알려 주세요.' },
          { when: '되물음이 하나도 없어요', then: '내 설명이 충분했거나, AI 가 제 마음대로 정한 것입니다. "확인이 필요한 걸 질문해 줘" 라고 한 번 더 물어보세요.' },
        ],
        note: '코드를 받은 뒤에 잘못을 발견하면 처음부터 다시 해야 합니다. 순서 단계에서 잡으면 한 문장이면 끝납니다.',
      },
      en: {
        crumb: 'AI tool · First prompt',
        title: 'Ask for the plan, not the code',
        alt: 'AI chat returning a numbered processing plan instead of code',
        goal: 'Confirm the AI understood your task before any code exists. A mistake caught here costs one sentence.',
        actions: [
          'Open ChatGPT, Claude, or Gemini — any one of them works.',
          'Paste the [[four sentences]] you just wrote.',
          'End with [[Do not write code yet. First list the processing steps you understood, as a numbered list.]]',
          'Write down any question the AI asks back — each one is a rule you have not decided.',
        ],
        stuck: [
          { when: 'It returns code anyway', then: 'Say "No code. Only the numbered processing steps."' },
          { when: 'The steps do not match my task', then: 'Correct only the wrong item: "Step 3 should be …".' },
        ],
      },
    },
    {
      no: 4, svg: 's1-4-get-code.svg',
      ko: {
        crumb: 'AI 도구 · 코드 받기',
        title: '되물음에 답하고 완성된 코드를 받습니다',
        alt: '되물음에 번호로 답한 뒤 완성된 Apps Script 코드를 받은 화면',
        goal: '붙여넣고 바로 도는 코드 한 덩어리를 받습니다.',
        actions: [
          '앞 단계의 되물음에 [[1번 — … / 2번 — …]] 처럼 번호로 짧게 답합니다.',
          '그 아래에 조건 세 줄을 붙입니다 — [[붙여넣고 바로 실행되는 완성 코드로]], [[각 줄 위에 한글 주석]], [[함수 이름은 ○○○]].',
          '코드가 오면 [[function 이름]]이 내가 시킨 이름과 같은지 먼저 봅니다.',
          '주석이 안 붙어 있으면 "각 줄에 한글 주석 붙여서 다시 줘" 라고 합니다.',
        ],
        stuck: [
          { when: '코드가 두 덩어리로 나뉘어 왔어요', then: '"하나로 합쳐서 전체 코드를 다시 줘" 라고 하세요. 조각은 붙일 자리를 찾기 어렵습니다.' },
          { when: '설명이 너무 길어요', then: '설명은 안 읽어도 됩니다. `function` 으로 시작하는 코드 덩어리만 복사하면 됩니다.' },
        ],
      },
      en: {
        crumb: 'AI tool · Get the code',
        title: 'Answer the questions and receive finished code',
        alt: 'AI chat returning one complete Apps Script after the questions were answered',
        goal: 'Receive one block of code that runs as soon as you paste it.',
        actions: [
          'Answer the questions by number: [[1 — … / 2 — …]].',
          'Add three conditions: [[complete code that runs as pasted]], [[a Korean comment above each line]], [[name the function ○○○]].',
          'When the code arrives, check the [[function name]] matches what you asked for.',
        ],
        stuck: [
          { when: 'The code came in two pieces', then: 'Ask for "one complete code block, merged".' },
        ],
      },
    },
    {
      no: 5, svg: 's1-5-paste-run.svg',
      ko: {
        crumb: 'Apps Script · 붙여넣기와 실행',
        title: '편집기에 붙여넣고 저장한 뒤 실행합니다',
        alt: 'Apps Script 편집기에 코드를 붙여넣고 함수를 고른 뒤 실행하는 화면',
        goal: '받은 코드를 시트에 붙여 실제로 돌립니다. 여기서부터는 클릭만 합니다.',
        actions: [
          '시트 상단 [[확장 프로그램 → Apps Script]] 를 누릅니다. 새 탭이 열립니다.',
          '편집기에 원래 있던 내용을 [[모두 지우고]] 받은 코드를 통째로 붙여넣습니다.',
          '[[저장]](디스크 모양)을 먼저 누릅니다. 저장하지 않으면 이전 코드가 돕니다.',
          '함수 이름 칸이 [[내 함수 이름]]인지 확인합니다.',
          '[[▶ 실행]] 을 누릅니다. 처음 한 번은 다음 단계의 권한 창이 뜹니다.',
        ],
        stuck: [
          { when: '확장 프로그램 메뉴가 없어요', then: '구글 시트가 아니라 엑셀 파일을 연 것입니다. `sheets.new` 로 다시 시작하세요.' },
          { when: '함수 이름 칸이 비어 있어요', then: '저장을 안 한 것입니다. 저장을 누르면 목록에 나타납니다.' },
          { when: '빨간 줄이 나와요', then: '정상입니다. 5교시에서 오류 대응을 배웁니다. 지금은 그 문장을 복사해 AI 에게 그대로 붙여넣으세요.' },
        ],
      },
      en: {
        crumb: 'Apps Script · Paste and run',
        title: 'Paste the code, save, then run',
        alt: 'Apps Script editor with the code pasted, the function selected, and Run highlighted',
        goal: 'Attach the code to your sheet and actually run it. From here on you only click.',
        actions: [
          'In the sheet choose [[Extensions → Apps Script]]. A new tab opens.',
          '[[Delete everything]] already in the editor and paste the code you received.',
          'Press [[Save]] first. Without saving, the old code runs.',
          'Check the function selector shows [[your function name]].',
          'Press [[Run]]. The first time only, the permission dialog in the next step appears.',
        ],
        stuck: [
          { when: 'There is no Extensions menu', then: 'You opened an Excel file, not a Google Sheet. Start again from `sheets.new`.' },
          { when: 'A red line appears', then: 'That is normal. Copy the whole message and paste it to the AI.' },
        ],
      },
    },
    {
      no: 6, svg: 's1-6-permission.svg',
      ko: {
        crumb: '구글 계정 · 권한 승인',
        title: '권한 요청 창에서 「고급 → 허용」을 누릅니다',
        alt: '구글 권한 승인 창 두 장과 눌러야 할 고급·허용 버튼',
        goal: '가장 많이 막히는 자리입니다. 창이 무섭게 보여도 정상입니다.',
        actions: [
          '[[이 앱은 Google에서 확인하지 않았습니다]] 창이 뜨면 [[고급]] 을 누릅니다.',
          '아래에 나타나는 [[(프로젝트 이름)(으)로 이동]] 을 누릅니다.',
          '다음 창에서 내 계정을 고르고 [[허용]] 을 누릅니다.',
          '승인은 [[처음 한 번]]만 하면 됩니다. 다음부터는 바로 실행됩니다.',
        ],
        stuck: [
          { when: '고급이 안 보여요', then: '창 왼쪽 아래를 보세요. 작은 글씨로 있습니다.' },
          { when: '무서워서 못 누르겠어요', then: '이 스크립트는 내 구글 계정 안에서만 돕니다. 시트 자료가 외부로 나가지 않습니다.' },
          { when: '안전한 페이지로 돌아가기를 눌렀어요', then: '실행을 다시 누르면 같은 창이 또 뜹니다. 이번에는 고급을 누르세요.' },
        ],
        note: '구글은 "내가 만든 스크립트가 내 시트를 건드려도 되는지" 를 매번 묻습니다. 내가 방금 만든 것이므로 허용하는 것이 맞습니다.',
      },
      en: {
        crumb: 'Google account · Authorization',
        title: 'Choose Advanced, then Allow',
        alt: 'The two Google authorization dialogs with Advanced and Allow highlighted',
        goal: 'This is where most people stop. The scary wording is normal.',
        actions: [
          'On [[Google hasn’t verified this app]], click [[Advanced]].',
          'Click [[Go to (project name)]] that appears below.',
          'Pick your account and click [[Allow]].',
          'You only authorize [[once]]. Later runs start immediately.',
        ],
        stuck: [
          { when: 'I cannot find Advanced', then: 'It is small text at the lower left of the dialog.' },
          { when: 'It looks unsafe', then: 'The script runs only inside your own Google account. No sheet data leaves it.' },
        ],
      },
    },
    {
      no: 7, svg: 's1-7-result.svg',
      ko: {
        crumb: '구글 시트 · 결과 확인',
        title: '새로 생긴 시트에서 결과를 확인합니다',
        alt: '부서별집계 시트가 새로 생기고 결과가 채워진 화면',
        goal: '도구가 제대로 돌았는지 눈으로 대조합니다. 자동화가 처음일수록 이 대조를 꼭 합니다.',
        actions: [
          '시트 탭으로 돌아가 [[새 시트 탭]]이 생겼는지 봅니다.',
          '결과 표의 숫자를 원본과 [[손으로 한 번 대조]]합니다.',
          '맞으면 끝입니다. 안 맞으면 어디가 다른지 적어 AI 에게 그대로 알려 줍니다.',
        ],
        stuck: [
          { when: '새 시트가 안 생겼어요', then: '실행 로그에 빨간 줄이 있는지 보세요. 있으면 그 문장을 통째로 AI 에게 붙여넣습니다.' },
          { when: '숫자가 안 맞아요', then: '"합계가 12000 이어야 하는데 8400 이 나왔어. 원인을 찾아 코드를 고쳐 줘" 처럼 숫자를 넣어 말합니다.' },
          { when: '원본이 바뀌었어요', then: '바로 쓰지 말고 "원본은 고치지 말고 결과만 새 시트에 쓰도록 고쳐 줘" 라고 다시 시키세요.' },
        ],
      },
      en: {
        crumb: 'Google Sheets · Verify',
        title: 'Check the result in the new sheet',
        alt: 'A new summary sheet created by the tool with results filled in',
        goal: 'Verify by eye that the tool worked. Always do this while automation is new to you.',
        actions: [
          'Go back to the sheet and look for the [[new tab]].',
          'Compare the result numbers against the original [[by hand, once]].',
          'If they match you are done. If not, tell the AI exactly which number is wrong.',
        ],
        stuck: [
          { when: 'No new sheet appeared', then: 'Check the execution log for a red line and paste it to the AI as-is.' },
          { when: 'The original changed', then: 'Ask again: "Do not modify the source sheet, write results to a new sheet only."' },
        ],
      },
    },
  ],
};


/* ══════════════ 2교시 ══════════════ */
const s2 = {
  file: 'auto-02-walk.js',
  ko: {
    title: '따라하기 실습 · 자동화 대상 업무 정의서 채우기',
    lead: '**소요 30분 · 산출물은 업무 정의서 한 장입니다.**\n\n오늘 무엇을 만들지 여기서 정합니다. 후보를 적고, 점수로 하나만 고르고, 그 업무를 AI 가 알아들을 수 있는 문장으로 바꿉니다. 여기서 고른 업무 하나를 하루 종일 끌고 갑니다.\n\n> **두 개를 같이 고르지 마세요.** 한 개를 끝까지 완성한 사람이 두 개를 걸쳐 놓은 사람보다 훨씬 멀리 갑니다.',
    flow: ['후보 세 개 적기', '점수로 하나 고르기', '정의서 채우기', '개인정보 판정', 'AI 로 검토', '확정본 저장'],
    done: [
      '오늘 만들 업무 하나가 정해졌고, 그 업무가 규칙으로 적혀 있습니다.',
      '개인정보를 어떻게 다룰지도 한 줄로 정해졌습니다.',
      '이 정의서가 3교시 설계서와 4교시 프롬프트의 재료가 됩니다. 화면 캡처로 남겨 두세요.',
    ],
  },
  en: {
    title: 'Hands-on — Fill In the Task Definition',
    lead: '**30 minutes. The output is a one-page task definition.**\n\nThis is where you decide what to build today. List candidates, score them, pick exactly one, and rewrite it in language an AI can act on.\n\n> **Do not pick two.** Finishing one task beats starting two.',
    flow: ['List three candidates', 'Score and pick one', 'Fill the definition', 'Screen for personal data', 'Review with AI', 'Save the final version'],
    done: [
      'You have one task chosen and written down as rules, not as a wish.',
      'You have decided how personal data will be handled.',
      'This sheet feeds session 3 and session 4. Keep a screenshot.',
    ],
  },
  steps: [
    {
      no: 1, svg: 's2-1-candidates.svg',
      ko: {
        crumb: '준비 · 후보 고르기',
        title: '반복 업무 세 개를 적습니다',
        alt: '자동화 후보 업무 세 개를 자주 하는 정도와 소요 시간으로 비교한 표',
        goal: '머릿속에 있는 반복 업무를 밖으로 꺼냅니다. 딱 세 개만 적습니다.',
        actions: [
          '주마다 · 달마다 반복하는 업무를 [[세 개]]만 적습니다. 많이 적으면 오히려 못 고릅니다.',
          '각 업무마다 [[얼마나 자주]] 하는지 적습니다 — 주 1회, 월 1회처럼.',
          '[[한 번에 걸리는 시간]]을 분 단위로 적습니다. 대충이어도 좋으니 숫자로 적습니다.',
          '[[규칙이 있나]] 칸에 "있음" 또는 "매번 다름" 을 적습니다.',
        ],
        stuck: [
          { when: '떠오르는 게 없어요', then: '지난주 달력을 펴 보세요. 같은 요일에 같은 일이 반복되면 그것이 후보입니다.' },
          { when: '전부 매번 달라요', then: '자료가 다른 것과 판단이 다른 것은 다릅니다. 자료만 바뀌고 절차가 같으면 "있음" 입니다.' },
        ],
      },
      en: {
        crumb: 'Prepare · Candidates',
        title: 'Write down three repetitive tasks',
        alt: 'A table comparing three automation candidates by frequency and duration',
        goal: 'Get the repetitive work out of your head. Exactly three.',
        actions: [
          'List [[three]] tasks you repeat weekly or monthly.',
          'Note [[how often]] each one happens.',
          'Note [[how long one round takes]], in minutes. A rough number is fine.',
          'Mark whether the task [[follows a fixed rule]] or changes every time.',
        ],
        stuck: [
          { when: 'Nothing comes to mind', then: 'Open last week’s calendar. Anything repeating on the same weekday is a candidate.' },
        ],
      },
    },
    {
      no: 2, svg: 's2-2-score.svg',
      ko: {
        crumb: '준비 · 점수로 고르기',
        title: '점수를 매겨 하나만 남깁니다',
        alt: '후보 업무에 반복성·규칙성·시간절약 점수를 매겨 하나를 고른 표',
        goal: '감이 아니라 점수로 고릅니다. 순위만 갈리면 충분합니다.',
        actions: [
          '[[반복성 · 규칙성 · 시간절약]] 세 항목에 각각 1~5점을 줍니다.',
          '[[개인정보]] 칸에 "없음 / 가명처리 가능 / 있음" 중 하나를 적습니다.',
          '개인정보가 [[있음]]인 업무는 점수와 관계없이 오늘 대상에서 뺍니다.',
          '남은 것 중 합계가 가장 높은 [[한 줄]]이 오늘 만들 도구입니다.',
        ],
        stuck: [
          { when: '점수가 같아요', then: '시간절약 점수가 높은 쪽을 고르세요. 성과가 눈에 보이는 쪽이 유리합니다.' },
          { when: '고른 게 너무 쉬워 보여요', then: '첫 도구는 쉬운 것이 맞습니다. 오늘은 방법을 익히는 날입니다.' },
        ],
        note: '규칙성 점수가 1~2점인 업무는 아무리 자주 해도 자동화가 안 됩니다. 매번 판단이 달라지는 일은 사람이 해야 합니다.',
      },
      en: {
        crumb: 'Prepare · Scoring',
        title: 'Score them and keep only one',
        alt: 'A scoring table used to pick one candidate task',
        goal: 'Choose by score, not by feel. You only need the ranking to separate.',
        actions: [
          'Give 1–5 points for [[repetition, rule-clarity, time saved]].',
          'Mark personal data as none, maskable, or present.',
          'Drop any task with personal data [[present]], whatever its score.',
          'The highest remaining total is today’s tool.',
        ],
        stuck: [
          { when: 'Two tasks tie', then: 'Pick the one that saves more time — visible results help.' },
        ],
      },
    },
    {
      no: 3, svg: 's2-3-definition.svg',
      ko: {
        crumb: '정의서 · 여섯 칸',
        title: '고른 업무를 정의서 칸에 옮깁니다',
        alt: '고른 업무의 정의서 여섯 칸을 채운 화면',
        goal: '고른 업무를 AI 가 알아들을 수 있는 문장으로 바꿉니다.',
        actions: [
          '[[업무 이름]] — 부서 사람 누구나 알아듣는 말로 적습니다. 결재 문서에 그대로 들어갑니다.',
          '[[들어오는 것 · 하는 일 · 나오는 것 · 사람이 볼 것]] 네 칸을 1교시와 같은 방식으로 채웁니다.',
          '[[지금 걸리는 시간]]을 숫자로 남깁니다 — 7교시 기대효과가 이 숫자에서 나옵니다.',
        ],
        stuck: [
          { when: '하는 일이 여러 개예요', then: '가장 앞의 한 가지만 남기세요. 나머지는 도구가 돌기 시작한 뒤에 붙입니다.' },
          { when: '나오는 것을 모르겠어요', then: '지금 손으로 할 때 무엇이 남는지 보세요. 그 모양 그대로 적으면 됩니다.' },
        ],
      },
      en: {
        crumb: 'Definition · Six boxes',
        title: 'Move the chosen task into the definition',
        alt: 'A completed six-box task definition',
        goal: 'Rewrite the chosen task in language an AI can act on.',
        actions: [
          '[[Task name]] — words any colleague would understand. It goes into the approval document verbatim.',
          'Fill [[input, processing, output, human check]] the same way as session 1.',
          'Record [[how long it takes today]] as a number. Session 7 needs it.',
        ],
        stuck: [
          { when: 'Processing has several parts', then: 'Keep only the first one. Add the rest after the tool runs.' },
        ],
      },
    },
    {
      no: 4, svg: 's2-4-privacy-gate.svg',
      ko: {
        crumb: '보안 · 세 관문',
        title: '개인정보 세 관문을 통과시킵니다',
        alt: '고유식별정보·개인정보·대외비 세 관문 판정 체크리스트',
        goal: '이 자료를 외부 AI 에 올려도 되는지 지금 판정합니다. 나중에 하면 늦습니다.',
        actions: [
          '[[주민등록번호 · 외국인등록번호 · 운전면허번호]]가 있는지 봅니다. 하나라도 있으면 이 업무는 오늘 대상에서 뺍니다.',
          '[[이름 · 연락처 · 주소]]가 있는지 봅니다. 있으면 가명처리 후 씁니다.',
          '[[대외비 · 미공개 정책 자료]]가 있는지 봅니다. 있으면 부서장 승인을 받습니다.',
          '판정 결과를 정의서 아래에 [[한 줄]]로 적어 둡니다.',
        ],
        stuck: [
          { when: '가명처리가 뭔지 모르겠어요', then: '이름을 A · B · C 로 바꾸고 연락처 앞자리를 지우는 것입니다. 6교시에서 직접 해 봅니다.' },
          { when: '애매해요', then: '애매하면 뺍니다. 오늘은 연습이고, 대상 업무는 얼마든지 있습니다.' },
        ],
      },
      en: {
        crumb: 'Security · Three gates',
        title: 'Pass the three personal-data gates',
        alt: 'A checklist screening for ID numbers, personal data, and confidential material',
        goal: 'Decide now whether this data may go to an external AI.',
        actions: [
          'Check for [[national ID or licence numbers]]. If any exist, drop this task today.',
          'Check for [[names, phone numbers, addresses]]. If present, mask them before use.',
          'Check for [[confidential policy material]]. If present, get supervisor approval.',
          'Write the verdict as [[one line]] under the definition.',
        ],
        stuck: [
          { when: 'I am unsure', then: 'When unsure, drop it. There is no shortage of other tasks.' },
        ],
      },
    },
    {
      no: 5, svg: 's2-5-review.svg',
      ko: {
        crumb: 'AI 도구 · 정의서 검토',
        title: 'AI 에게 빠진 조건을 찾아 달라고 합니다',
        alt: 'AI 가 업무 정의서를 읽고 빠진 조건을 질문으로 되돌려 준 화면',
        goal: '내가 안 정한 규칙을 지금 찾아냅니다. 4교시에서 찾으면 다시 만들어야 합니다.',
        actions: [
          '정의서를 그대로 붙여넣고 [[아직 코드는 만들지 마]] 를 붙입니다.',
          '[[이 설명만 보고 도구를 만들 수 있겠어? 빠진 조건을 질문으로만 알려 줘.]] 라고 합니다.',
          '돌아온 [[질문 목록]]을 정의서 뒤에 그대로 붙입니다.',
          '질문마다 답을 정합니다. 답이 안 떠오르면 지금 부서에 물어봅니다.',
        ],
        stuck: [
          { when: '질문이 하나도 안 와요', then: '"확인이 필요한 걸 다섯 개까지 질문해 줘" 라고 개수를 지정해 다시 물어보세요.' },
          { when: '질문이 너무 많아요', then: '오늘 만들 범위를 벗어난 질문은 "이번에는 안 함" 이라고 적고 넘어갑니다.' },
        ],
      },
      en: {
        crumb: 'AI tool · Review',
        title: 'Ask the AI to find the missing conditions',
        alt: 'AI returning a list of questions about the task definition',
        goal: 'Surface the rules you have not decided, before any code exists.',
        actions: [
          'Paste the definition and add [[do not write code yet]].',
          'Ask: [[Could you build this from this description alone? Reply only with the questions you still need answered.]]',
          'Paste the [[question list]] under your definition.',
          'Decide an answer for each. If you cannot, ask your team now.',
        ],
        stuck: [
          { when: 'No questions come back', then: 'Ask again with a number: "Give me up to five questions."' },
        ],
      },
    },
    {
      no: 6, svg: 's2-6-confirmed.svg',
      ko: {
        crumb: '정의서 · 확정',
        title: '답을 옮겨 확정본을 만듭니다',
        alt: '되물음에 답해 규칙까지 확정한 업무 정의서 화면',
        goal: '3교시로 가져갈 문서 한 장을 완성합니다.',
        actions: [
          '앞 단계의 질문에 대한 답을 [[규칙 문장]]으로 옮깁니다. "적당히" 같은 말은 쓰지 않습니다.',
          '[[개인정보 처리]] 칸에 어떻게 가릴지 적습니다.',
          '완성된 정의서를 [[화면 캡처]]하거나 메모장에 저장합니다.',
        ],
        stuck: [
          { when: '규칙으로 못 적겠어요', then: '"~면 ~한다" 형태로 써 보세요. 예를 들어 "이름과 연락처가 같으면 먼저 것만 남긴다".' },
        ],
        note: '이 문서 한 장이 오늘 남은 시간 내내 쓰입니다. 3교시 설계서, 4교시 프롬프트, 7교시 계획서가 전부 여기서 나옵니다.',
      },
      en: {
        crumb: 'Definition · Final',
        title: 'Turn the answers into the final version',
        alt: 'The task definition completed with decided rules',
        goal: 'Finish the single page you will carry into session 3.',
        actions: [
          'Convert each answer into a [[rule sentence]]. Avoid words like "appropriately".',
          'State how personal data will be [[masked]].',
          'Screenshot or save the finished definition.',
        ],
        stuck: [
          { when: 'I cannot phrase it as a rule', then: 'Use "if … then …". For example: if name and phone match, keep the earlier row.' },
        ],
      },
    },
  ],
};

/* ══════════════ 3교시 ══════════════ */
const s3 = {
  file: 'auto-03-walk.js',
  ko: {
    title: '따라하기 실습 · 설계서와 요구사항 명세서 쓰기',
    lead: '**소요 35분 · 산출물은 요구사항 명세서 한 장입니다.**\n\n만들기 전에 그림을 그립니다. 도구 형태를 고르고, 화면을 스케치하고, 업무 흐름을 세 토막으로 쪼갠 다음, 그 셋을 명세서 한 장으로 묶습니다. 이 명세서를 4교시에서 그대로 붙여넣습니다.\n\n> **설계 없이 코드부터 시키면** 받은 코드가 내 업무와 다르다는 것을 실행한 뒤에야 알게 됩니다.',
    flow: ['도구 형태 고르기', '화면 스케치', '흐름 세 토막', '명세서 쓰기', 'AI 로 점검', '설계 확정'],
    done: [
      '만들 도구의 형태와 화면이 정해졌습니다.',
      '업무 흐름이 읽는다 · 거른다 · 쓴다 세 토막으로 정리됐습니다.',
      '4교시에 그대로 붙여넣을 명세서 한 장이 완성됐습니다.',
    ],
  },
  en: {
    title: 'Hands-on — Write the Design and Requirements',
    lead: '**35 minutes. The output is a one-page requirements sheet.**\n\nDraw before you build. Pick the tool shape, sketch the screen, split the flow into three parts, then bind all three into one requirements sheet that you paste into session 4.',
    flow: ['Pick the shape', 'Sketch the screen', 'Split into three', 'Write requirements', 'Review with AI', 'Confirm the design'],
    done: [
      'The shape and screen of your tool are decided.',
      'The work flow is written as read / filter / write.',
      'You have the one page that session 4 pastes into the AI.',
    ],
  },
  steps: [
    {
      no: 1, svg: 's3-1-pick-shape.svg',
      ko: {
        crumb: '설계 · 도구 형태',
        title: '네 가지 형태 중 하나를 고릅니다',
        alt: '시트 버튼·웹 양식·문서 생성·정시 실행 네 가지 도구 형태 카드',
        goal: '무엇을 만들지 형태부터 정합니다. 오늘은 하나만 고릅니다.',
        actions: [
          '[[시트 + 버튼]] — 내 시트 안에서 메뉴 하나로 실행합니다. 오늘 만들 형태입니다.',
          '[[웹 양식 + 시트]] — 남이 입력한 내용이 내 시트에 쌓입니다. 신청·접수 업무용입니다.',
          '[[문서 자동 생성]] — 명단 한 장에서 안내문을 한꺼번에 뽑습니다.',
          '[[정해진 시각 실행]] — 매일 아침 알아서 돕니다. 오늘은 다루지 않습니다.',
        ],
        stuck: [
          { when: '내 업무는 2번 같아요', then: '그래도 오늘은 1번으로 만드세요. 1번이 도는 것을 본 뒤에 2번으로 바꾸는 것이 훨씬 쉽습니다.' },
        ],
      },
      en: {
        crumb: 'Design · Tool shape',
        title: 'Pick one of four shapes',
        alt: 'Four cards showing sheet button, web form, document generation, and scheduled run',
        goal: 'Decide the shape first. Pick exactly one today.',
        actions: [
          '[[Sheet + button]] — runs from a menu inside your own sheet. This is today’s shape.',
          '[[Web form + sheet]] — other people submit, your sheet collects.',
          '[[Document generation]] — one list produces many letters.',
          '[[Scheduled run]] — runs by itself each morning. Not covered today.',
        ],
        stuck: [
          { when: 'Mine looks like the second one', then: 'Build the first one anyway. Converting it later is far easier.' },
        ],
      },
    },
    {
      no: 2, svg: 's3-2-sketch.svg',
      ko: {
        crumb: '설계 · 화면 스케치',
        title: '화면을 손그림처럼 그립니다',
        alt: '메뉴 버튼과 원본·결과 시트를 배치한 화면 스케치',
        goal: '사람이 어디를 누르고 결과가 어디에 나오는지 그림으로 정합니다.',
        actions: [
          '[[사람이 누를 곳]]을 하나만 그립니다. 둘 이상이면 쓰는 사람이 헷갈립니다.',
          '[[원본 자료]]가 어느 시트인지 적고, 그 옆에 "손대지 않는다" 를 적습니다.',
          '[[결과]]가 어느 시트에 어떤 모양으로 나오는지 그립니다.',
        ],
        stuck: [
          { when: '그림을 못 그리겠어요', then: '네모 세 개와 화살표면 충분합니다. 예쁘게 그릴 필요가 없습니다.' },
          { when: '버튼을 두 개 두고 싶어요', then: '오늘은 하나로 하세요. 두 번째 버튼은 첫 번째가 돈 뒤에 붙이면 됩니다.' },
        ],
        note: '원본을 고치지 않는다는 원칙을 그림에 적어 두면 AI 도 그대로 만듭니다. 잘못 돌아도 원본이 남아 있으면 다시 하면 그만입니다.',
      },
      en: {
        crumb: 'Design · Screen sketch',
        title: 'Sketch the screen by hand',
        alt: 'A sketch showing the menu button, the source sheet, and the result sheet',
        goal: 'Decide where people click and where results appear.',
        actions: [
          'Draw exactly [[one place to click]].',
          'Name the [[source sheet]] and write "never modified" next to it.',
          'Draw where the [[result]] lands and what it looks like.',
        ],
        stuck: [
          { when: 'I cannot draw', then: 'Three boxes and an arrow are enough.' },
        ],
      },
    },
    {
      no: 3, svg: 's3-3-flow.svg',
      ko: {
        crumb: '설계 · 흐름 쪼개기',
        title: '업무 흐름을 세 토막으로 쪼갭니다',
        alt: '읽는다·거른다·쓴다 세 토막으로 나눈 업무 흐름 카드',
        goal: '어떤 업무든 세 토막이면 표현됩니다. 네 토막으로 늘리지 않습니다.',
        actions: [
          '[[읽는다]] — 어느 시트의 몇 행부터 읽는지까지 적습니다. "그 시트" 같은 말은 통하지 않습니다.',
          '[[거른다 · 정리한다]] — 2교시에서 확정한 규칙을 그대로 옮깁니다.',
          '[[쓴다]] — 결과가 어디에 어떤 모양으로 남는지 적습니다.',
        ],
        stuck: [
          { when: '토막이 네 개 이상 나와요', then: '가운데 것들을 "거른다·정리한다" 로 묶으세요. 세 토막을 유지합니다.' },
          { when: '2교시 규칙이 기억 안 나요', then: '2교시 확정 정의서를 다시 여세요. 새 규칙을 여기서 만들지 않습니다.' },
        ],
      },
      en: {
        crumb: 'Design · Split the flow',
        title: 'Split the work into three parts',
        alt: 'Three cards: read, filter and arrange, write',
        goal: 'Any task fits in three parts. Do not stretch it to four.',
        actions: [
          '[[Read]] — name the sheet and the first data row.',
          '[[Filter and arrange]] — copy the rules you confirmed in session 2.',
          '[[Write]] — where the result lands and in what shape.',
        ],
        stuck: [
          { when: 'I end up with four or more', then: 'Merge the middle ones into "filter and arrange".' },
        ],
      },
    },
    {
      no: 4, svg: 's3-4-spec.svg',
      ko: {
        crumb: '명세서 · 여섯 칸',
        title: '요구사항 명세서를 씁니다',
        alt: '도구 형태·읽는 곳·처리 규칙·쓰는 곳·예외·사람 확인 여섯 칸을 채운 명세서',
        goal: '앞의 세 가지를 한 장으로 묶습니다. 4교시에 이 장을 통째로 붙여넣습니다.',
        actions: [
          '[[읽는 곳]] 칸에 시트 이름과 열 기호(A·B·C)를 정확히 적습니다.',
          '[[처리 규칙]] 칸에 세 토막의 가운데를 옮깁니다.',
          '[[쓰는 곳]] 칸에 결과 시트 이름과, 이미 있을 때 어떻게 할지를 적습니다.',
          '[[예외 처리]] 칸에 빈 칸 · 없는 값을 어떻게 할지 적습니다.',
          '[[사람 확인]] 칸에 끝나고 무엇을 보여 줄지 적습니다.',
        ],
        stuck: [
          { when: '열 기호를 모르겠어요', then: '시트 맨 위의 A · B · C 가 열 기호입니다. 그대로 적으면 됩니다.' },
          { when: '예외가 안 떠올라요', then: '빈 칸 · 중복 · 앞뒤 공백 세 가지만 적어도 충분합니다.' },
        ],
      },
      en: {
        crumb: 'Requirements · Six boxes',
        title: 'Write the requirements sheet',
        alt: 'A six-box requirements sheet filled in',
        goal: 'Bind the previous three into one page that session 4 pastes as-is.',
        actions: [
          'In [[read from]], give the sheet name and column letters exactly.',
          'In [[rules]], copy the middle of your three-part flow.',
          'In [[write to]], name the result sheet and say what happens if it exists.',
          'In [[exceptions]], say what to do with empty and missing values.',
          'In [[human check]], say what the tool shows when it finishes.',
        ],
        stuck: [
          { when: 'I cannot think of exceptions', then: 'Empty cells, duplicates, and stray spaces are enough.' },
        ],
      },
    },
    {
      no: 5, svg: 's3-5-spec-review.svg',
      ko: {
        crumb: 'AI 도구 · 명세 점검',
        title: 'AI 로 애매한 곳과 빠진 예외를 찾습니다',
        alt: 'AI 가 명세서의 애매한 곳과 놓친 예외를 짚어 준 화면',
        goal: '5교시 오류를 미리 줄입니다. 여기서 찾은 것 하나가 실행 오류 하나를 없앱니다.',
        actions: [
          '명세서를 붙여넣고 [[아직 코드는 쓰지 마]] 를 붙입니다.',
          '[[이 명세서만 보고 만들 때 애매한 곳과, 내가 놓친 예외 상황을 알려 줘.]] 라고 합니다.',
          '지적받은 항목을 [[예외 처리]] 칸에 더합니다.',
        ],
        stuck: [
          { when: '지적이 너무 많아요', then: '실제로 일어날 것만 고르세요. "10만 행이 넘으면" 같은 것은 지금 필요 없습니다.' },
        ],
        note: '표기가 다른 같은 값, 앞뒤 공백, 빈 자료 — 실제로 오류를 내는 것은 거의 이 셋입니다.',
      },
      en: {
        crumb: 'AI tool · Spec review',
        title: 'Find the ambiguities and missing exceptions',
        alt: 'AI pointing out ambiguities and overlooked exceptions in the spec',
        goal: 'Reduce session 5 errors in advance.',
        actions: [
          'Paste the spec and add [[do not write code yet]].',
          'Ask what is ambiguous and which exceptions you missed.',
          'Add what it finds to the [[exceptions]] box.',
        ],
        stuck: [
          { when: 'Too many findings', then: 'Keep only what will actually happen in your data.' },
        ],
      },
    },
    {
      no: 6, svg: 's3-6-design-check.svg',
      ko: {
        crumb: '설계 · 마무리 점검',
        title: '다섯 줄로 설계를 점검합니다',
        alt: '4교시로 넘어가기 전 다섯 줄 점검 체크리스트',
        goal: '한 줄이라도 비면 4교시에서 반드시 되돌아오게 됩니다.',
        actions: [
          '시트 이름과 열 기호가 [[실제 시트와 같은지]] 봅니다.',
          '사람이 누르는 곳이 [[하나뿐인지]] 봅니다.',
          '[[원본을 고치지 않는지]] 봅니다.',
          '[[빈 칸 · 표기 차이 · 0건]]일 때 어떻게 할지 적혀 있는지 봅니다.',
          '끝나고 [[사람에게 무엇을 보여 줄지]] 적혀 있는지 봅니다.',
        ],
        stuck: [
          { when: '마지막 줄이 비었어요', then: '가장 많이 빠지는 줄입니다. "몇 건 처리했다" 는 알림창 한 줄이면 충분합니다.' },
        ],
      },
      en: {
        crumb: 'Design · Final check',
        title: 'Check the design in five lines',
        alt: 'A five-line checklist before moving to session 4',
        goal: 'Any empty line here sends you back from session 4.',
        actions: [
          'Sheet names and column letters match the real sheet.',
          'There is exactly one place to click.',
          'The source sheet is never modified.',
          'Empty cells, format differences, and zero rows are covered.',
          'The tool tells the person what it did.',
        ],
        stuck: [
          { when: 'The last line is empty', then: 'A single alert saying "N rows processed" is enough.' },
        ],
      },
    },
  ],
};

/* ══════════════ 4교시 ══════════════ */
const s4 = {
  file: 'auto-04-walk.js',
  ko: {
    title: '따라하기 실습 · 코드를 받아 시트에 붙이기',
    lead: '**소요 40분 · 산출물은 실제로 도는 도구입니다.**\n\n3교시 명세서를 그대로 붙여넣어 코드를 받고, 시트에 붙여 메뉴를 만들고, 그 메뉴로 실행해 결과를 확인합니다. 오늘 처음으로 「내 업무가 도는 도구」가 생기는 시간입니다.\n\n> **명세서를 다시 요약하지 마세요.** 3교시에서 쓴 여섯 칸을 그대로 붙여넣는 것이 가장 좋은 프롬프트입니다.',
    flow: ['명세서 붙여넣기', '되물음에 답하기', '코드 받기', '편집기에 붙이기', '메뉴 확인', '실행과 결과'],
    done: [
      '시트 상단에 내가 이름 붙인 메뉴가 생겼습니다.',
      '메뉴를 누르면 내 업무가 실제로 처리됩니다.',
      '아직 예외 자료에서는 멈출 수 있습니다. 5교시에서 그것을 잡습니다.',
    ],
  },
  en: {
    title: 'Hands-on — Get the Code and Attach It',
    lead: '**40 minutes. The output is a tool that actually runs.**\n\nPaste the session 3 requirements, receive the code, attach it to your sheet, and run it from your own menu.',
    flow: ['Paste the spec', 'Answer questions', 'Receive the code', 'Paste into the editor', 'Check the menu', 'Run and verify'],
    done: [
      'Your sheet now has a menu you named yourself.',
      'Clicking it processes your real task.',
      'Edge cases may still break it — session 5 handles those.',
    ],
  },
  steps: [
    {
      no: 1, svg: 's4-1-paste-spec.svg',
      ko: {
        crumb: 'AI 도구 · 프롬프트',
        title: '명세서를 그대로 붙여넣습니다',
        alt: '3교시 명세서를 대괄호 항목 그대로 붙여넣어 코드를 요청한 화면',
        goal: '가장 좋은 프롬프트는 잘 쓴 명세서입니다. 다시 쓰지 않습니다.',
        actions: [
          '맨 앞에 [[나는 코딩을 못 하는 공무원이고]] 처럼 내가 누구인지 한 줄로 밝힙니다.',
          '3교시 명세서를 [[대괄호 항목 그대로]] 붙여넣습니다.',
          '맨 끝에 조건 세 줄을 붙입니다 — [[붙여넣고 바로 도는 완성 코드]], [[줄마다 한글 주석]], [[상단 메뉴도 함께]].',
        ],
        stuck: [
          { when: '프롬프트가 너무 길어요', then: '길어도 됩니다. 짧게 줄일수록 AI 가 빈 곳을 제 마음대로 채웁니다.' },
          { when: '어떤 AI 를 써야 하나요', then: 'ChatGPT · Claude · Gemini 아무거나 됩니다. 하나로 끝까지 가는 것이 좋습니다.' },
        ],
      },
      en: {
        crumb: 'AI tool · Prompt',
        title: 'Paste the requirements as they are',
        alt: 'The session 3 requirements pasted into an AI chat with three conditions appended',
        goal: 'A good spec is the best prompt. Do not rewrite it.',
        actions: [
          'Open with one line about who you are.',
          'Paste the requirements [[with the bracketed labels intact]].',
          'Append three conditions: complete runnable code, a comment on every line, and the menu code too.',
        ],
        stuck: [
          { when: 'The prompt feels too long', then: 'Long is fine. Shortening it invites the AI to invent details.' },
        ],
      },
    },
    {
      no: 2, svg: 's4-2-answer-back.svg',
      ko: {
        crumb: 'AI 도구 · 되물음',
        title: '되물음에 번호로 짧게 답합니다',
        alt: 'AI 의 되물음 두 개에 번호로 답하고 코드를 요청한 화면',
        goal: '되물음은 좋은 신호입니다. 여기에 답해야 내 업무에 맞는 코드가 나옵니다.',
        actions: [
          '질문 번호를 그대로 받아 [[1 — … / 2 — …]] 처럼 답합니다.',
          '마지막에 [[이제 코드 만들어 줘]] 를 붙입니다.',
        ],
        stuck: [
          { when: '되물음 없이 코드가 나왔어요', then: '오히려 위험합니다. "만들기 전에 확인할 게 있으면 먼저 물어봐" 라고 한 번 되돌리세요.' },
          { when: '무엇을 답해야 할지 모르겠어요', then: '2교시 확정 정의서에 답이 있습니다. 거기에도 없으면 지금 정하면 됩니다.' },
        ],
      },
      en: {
        crumb: 'AI tool · Clarify',
        title: 'Answer the questions by number',
        alt: 'Short numbered answers followed by a request for the code',
        goal: 'Questions are a good sign. Answering them is what makes the code fit your task.',
        actions: [
          'Answer using the same numbers: [[1 — … / 2 — …]].',
          'Finish with [[now write the code]].',
        ],
        stuck: [
          { when: 'It wrote code with no questions', then: 'Push back: "Ask me anything you need before writing."' },
        ],
      },
    },
    {
      no: 3, svg: 's4-3-receive-code.svg',
      ko: {
        crumb: 'AI 도구 · 코드 수령',
        title: '메뉴 코드까지 한 덩어리로 받습니다',
        alt: 'onOpen 메뉴 코드와 실행 코드가 한 덩어리로 온 화면',
        goal: '붙여넣기만 하면 되는 완성 코드 한 덩어리를 받습니다.',
        actions: [
          '[[onOpen]] 으로 시작하는 부분이 있는지 봅니다 — 이것이 메뉴를 만드는 코드입니다.',
          '그 아래 [[실제로 일하는 함수]]가 이어지는지 봅니다.',
          '줄마다 [[한글 주석]]이 붙어 있는지 봅니다. 없으면 다시 시킵니다.',
        ],
        stuck: [
          { when: '코드가 두 덩어리예요', then: '"하나로 합쳐서 전체를 다시 줘" 라고 하세요.' },
          { when: 'onOpen 이 없어요', then: '"시트 상단에 자동화 메뉴를 만드는 onOpen 도 같이 넣어 줘" 라고 하세요.' },
        ],
      },
      en: {
        crumb: 'AI tool · Receive',
        title: 'Receive menu code and work code together',
        alt: 'One code block containing both the onOpen menu and the working function',
        goal: 'One block you only have to paste.',
        actions: [
          'Look for an [[onOpen]] section — that builds the menu.',
          'Check the [[working function]] follows it.',
          'Check every line has a comment.',
        ],
        stuck: [
          { when: 'There is no onOpen', then: 'Ask: "Include an onOpen that adds a menu to the sheet."' },
        ],
      },
    },
    {
      no: 4, svg: 's4-4-paste-editor.svg',
      ko: {
        crumb: 'Apps Script · 붙여넣기',
        title: '편집기에 붙여넣고 저장합니다',
        alt: '받은 코드를 Apps Script 편집기에 붙여넣고 저장한 화면',
        goal: '이번에는 실행 버튼을 누르지 않습니다. 메뉴로 실행할 것이기 때문입니다.',
        actions: [
          '시트에서 [[확장 프로그램 → Apps Script]] 를 엽니다.',
          '기존 내용을 [[모두 지우고]] 받은 코드를 통째로 붙여넣습니다.',
          '[[저장]]을 누릅니다. 저장하지 않으면 메뉴가 생기지 않습니다.',
          '시트 탭으로 돌아가 브라우저를 [[새로 고침]]합니다.',
        ],
        stuck: [
          { when: '메뉴가 안 생겨요', then: '저장했는지, 새로 고침했는지 두 가지를 확인하세요. 거의 이 둘입니다.' },
          { when: '빨간 줄이 떠요', then: '문법 오류입니다. 그 줄 번호와 문장을 복사해 AI 에게 그대로 붙여넣으세요.' },
        ],
      },
      en: {
        crumb: 'Apps Script · Paste',
        title: 'Paste into the editor and save',
        alt: 'The received code pasted into the Apps Script editor and saved',
        goal: 'Do not press Run this time — you will run it from the menu.',
        actions: [
          'Open [[Extensions → Apps Script]].',
          'Delete everything and paste the code.',
          'Press [[Save]]. Without saving there is no menu.',
          'Go back to the sheet and [[refresh]] the browser.',
        ],
        stuck: [
          { when: 'No menu appears', then: 'Check you saved, then check you refreshed.' },
        ],
      },
    },
    {
      no: 5, svg: 's4-5-menu.svg',
      ko: {
        crumb: '구글 시트 · 메뉴 확인',
        title: '상단에 내 메뉴가 생겼는지 봅니다',
        alt: '시트 상단에 자동화 메뉴가 새로 생기고 항목이 펼쳐진 화면',
        goal: '오늘 만든 버튼이 실제로 시트에 붙었는지 확인합니다.',
        actions: [
          '시트 상단 메뉴 줄 맨 오른쪽에 [[자동화]] 가 생겼는지 봅니다.',
          '눌러서 [[내가 이름 붙인 항목]]이 나오는지 봅니다.',
          '아직 누르지 말고, 원본 자료에 [[중복 행]]이 있는지 먼저 확인해 둡니다.',
        ],
        stuck: [
          { when: '메뉴 이름이 달라요', then: 'AI 가 준 코드의 createMenu 안에 있는 이름입니다. 바꾸고 싶으면 그 글자만 고치고 저장하세요.' },
          { when: '한참 기다려도 안 나와요', then: '시트 탭을 닫았다가 다시 여세요. onOpen 은 시트를 열 때 돕니다.' },
        ],
      },
      en: {
        crumb: 'Google Sheets · Menu',
        title: 'Check your menu appeared',
        alt: 'A new automation menu at the top of the sheet with its items open',
        goal: 'Confirm the button you built is actually attached.',
        actions: [
          'Look for your new menu at the right end of the menu bar.',
          'Open it and check the item name you chose.',
          'Before clicking, note which rows in the source are duplicates.',
        ],
        stuck: [
          { when: 'Nothing shows even after waiting', then: 'Close the sheet tab and reopen it — onOpen runs when the sheet opens.' },
        ],
      },
    },
    {
      no: 6, svg: 's4-6-run-result.svg',
      ko: {
        crumb: '구글 시트 · 실행',
        title: '메뉴로 실행하고 결과를 대조합니다',
        alt: '메뉴로 실행해 결과 시트가 생기고 처리 건수 알림창이 뜬 화면',
        goal: '오늘 처음으로 내 업무가 도구로 처리되는 순간입니다.',
        actions: [
          '[[자동화 → 내 항목]]을 누릅니다. 처음 한 번은 권한 창이 뜹니다 (1교시와 같습니다).',
          '[[알림창 숫자]]를 읽고 원본과 맞는지 봅니다.',
          '[[결과 시트]]가 새로 생겼는지, 내용이 맞는지 봅니다.',
          '[[원본 시트]]가 그대로인지 반드시 확인합니다.',
        ],
        stuck: [
          { when: '숫자가 안 맞아요', then: '"원본 5건인데 결과가 3건이야. 2건이 왜 빠졌는지 찾아 코드를 고쳐 줘" 처럼 숫자를 넣어 말하세요.' },
          { when: '오류 창이 떠요', then: '창의 문장을 통째로 복사해 두세요. 5교시에서 이것을 다룹니다.' },
          { when: '원본이 바뀌었어요', then: '즉시 실행을 멈추고 "원본은 고치지 말고 새 시트에만 쓰도록 고쳐 줘" 라고 다시 시키세요.' },
        ],
      },
      en: {
        crumb: 'Google Sheets · Run',
        title: 'Run from the menu and compare',
        alt: 'The tool run from the menu, producing a result sheet and a count dialog',
        goal: 'This is the first moment your own task runs as a tool.',
        actions: [
          'Click your menu item. The first run shows the permission dialog from session 1.',
          'Read the [[count in the dialog]] and compare it with the source.',
          'Check the [[result sheet]] was created and looks right.',
          'Confirm the [[source sheet]] is unchanged.',
        ],
        stuck: [
          { when: 'The counts do not match', then: 'Say it with numbers: "Source had 5 rows, result has 3. Find why two were dropped."' },
          { when: 'The source changed', then: 'Stop and ask for a fix: write to a new sheet only.' },
        ],
      },
    },
  ],
};


/* ══════════════ 5교시 ══════════════ */
const s5 = {
  file: 'auto-05-walk.js',
  ko: {
    title: '따라하기 실습 · 기능 시험과 오류 대응 루틴',
    lead: '**소요 40분 · 산출물은 예외까지 견디는 도구입니다.**\n\n오류는 실패가 아니라 안내문입니다. 무엇이 없는지 이미 적혀 있습니다. 이 시간에는 오류를 읽고 AI 에게 넘기는 고리를 몸에 익힙니다. 이 고리를 익히면 앞으로 어떤 도구든 혼자 고칠 수 있습니다.\n\n> **오류가 안 나면 오히려 걱정하세요.** 일부러 망가뜨린 자료로 시험하지 않은 도구는 실제 업무에서 반드시 멈춥니다.',
    flow: ['정상 자료로 한 번', '오류 통째로 잡기', 'AI 에 그대로 넘기기', '고쳐서 다시 실행', '예외 자료 시험', '결과 대조'],
    done: [
      '오류를 읽고 AI 에게 넘기는 고리를 한 바퀴 돌았습니다.',
      '빈 칸 · 표기 차이 · 공백에서도 도구가 멈추지 않습니다.',
      '숫자로 결과를 대조하는 습관이 생겼습니다. 이것이 도구를 믿고 쓰는 근거입니다.',
    ],
  },
  en: {
    title: 'Hands-on — Testing and the Error Loop',
    lead: '**40 minutes. The output is a tool that survives edge cases.**\n\nAn error message is not a failure, it is a notice telling you what is missing. This session builds the habit of reading it and handing it to the AI.',
    flow: ['Run the happy path', 'Capture the whole error', 'Hand it to the AI', 'Fix and rerun', 'Test edge cases', 'Compare results'],
    done: [
      'You have completed one full error loop.',
      'The tool no longer stops on empty cells, format differences, or stray spaces.',
      'You compare results by number before trusting the tool.',
    ],
  },
  steps: [
    {
      no: 1, svg: 's5-1-happy-path.svg',
      ko: {
        crumb: 'Apps Script · 정상 실행',
        title: '고치기 전에 있는 그대로 한 번 돌립니다',
        alt: '정상 자료로 실행해 실행 로그에 완료가 찍힌 화면',
        goal: '무엇이 되고 무엇이 안 되는지부터 봅니다. 미리 고치지 않습니다.',
        actions: [
          '[[▶ 실행]] 을 눌러 정상 자료로 한 번 돌립니다.',
          '아래 [[실행 로그]]에 "실행이 완료됨" 이 보이는지 봅니다.',
          '로그에 찍힌 [[숫자]]를 원본 건수와 맞춰 봅니다.',
        ],
        stuck: [
          { when: '로그가 안 보여요', then: '편집기 아래쪽에 있습니다. 안 보이면 편집기 하단 경계선을 위로 끌어 올리세요.' },
          { when: '로그에 아무것도 안 찍혀요', then: '"각 단계마다 Logger.log 로 진행 상황을 남기도록 고쳐 줘" 라고 하세요.' },
        ],
      },
      en: {
        crumb: 'Apps Script · Happy path',
        title: 'Run it as-is before changing anything',
        alt: 'A successful run with a completion line in the execution log',
        goal: 'See what works before you fix anything.',
        actions: [
          'Press [[Run]] with clean data.',
          'Check the [[execution log]] says the run completed.',
          'Compare the logged [[count]] with the source.',
        ],
        stuck: [
          { when: 'The log is empty', then: 'Ask for logging: "Add Logger.log at each step."' },
        ],
      },
    },
    {
      no: 2, svg: 's5-2-error.svg',
      ko: {
        crumb: 'Apps Script · 오류 읽기',
        title: '빨간 줄을 통째로 복사합니다',
        alt: '실행 오류가 난 로그와 복사해야 할 범위를 표시한 화면',
        goal: '오류를 요약하지 않습니다. 요약하면 원인이 사라집니다.',
        actions: [
          '[[빨간 줄 전체]]를 마우스로 긁어 복사합니다. 한 줄만 복사하면 안 됩니다.',
          '[[줄 번호]](예: 코드.gs:3)까지 함께 복사합니다.',
          '어떤 자료로 돌렸을 때 났는지 [[한 줄로]] 적어 둡니다.',
        ],
        stuck: [
          { when: '오류가 영어라 모르겠어요', then: '읽을 필요가 없습니다. 그대로 복사해 AI 에게 넘기면 됩니다.' },
          { when: '빨간 줄이 여러 개예요', then: '전부 복사하세요. 대개 첫 번째가 원인이고 나머지는 그 여파입니다.' },
        ],
        note: '오류 문장에는 무엇이 없는지가 이미 적혀 있습니다. `null` 은 "그런 게 없다", `undefined` 는 "값이 비어 있다" 는 뜻입니다.',
      },
      en: {
        crumb: 'Apps Script · Read the error',
        title: 'Copy the whole red block',
        alt: 'A failed run with the full error block marked for copying',
        goal: 'Never summarize an error — summarizing removes the cause.',
        actions: [
          'Select and copy [[the entire red block]].',
          'Include the [[line reference]] such as 코드.gs:3.',
          'Note in one line which data you ran it on.',
        ],
        stuck: [
          { when: 'The error is in English', then: 'You do not need to read it. Copy and hand it over.' },
        ],
      },
    },
    {
      no: 3, svg: 's5-3-ask-fix.svg',
      ko: {
        crumb: 'AI 도구 · 오류 전달',
        title: '오류를 그대로 붙여넣고 전체 코드를 받습니다',
        alt: '오류 문장을 그대로 붙여넣고 원인과 고친 코드를 받은 화면',
        goal: '고치는 사람은 AI 입니다. 나는 오류를 정확히 전달하는 일만 합니다.',
        actions: [
          '[[네가 준 코드를 실행했더니 아래 오류가 났어]] 로 시작합니다.',
          '복사한 오류를 [[글자 그대로]] 붙여넣습니다.',
          '내가 아는 사실을 한 줄 덧붙입니다 — 시트 이름, 자료 건수 같은 것.',
          '마지막에 [[코드 전체를 다시 줘]] 를 붙입니다. 조각으로 받으면 붙일 자리를 못 찾습니다.',
        ],
        stuck: [
          { when: '고쳐 준 코드에서 또 오류가 나요', then: '정상입니다. 같은 방식으로 새 오류를 다시 넘기세요. 보통 두세 번이면 끝납니다.' },
          { when: '같은 오류가 계속 나와요', then: '"이 방법 말고 다른 방법으로 고쳐 줘" 라고 방향을 바꾸세요.' },
        ],
      },
      en: {
        crumb: 'AI tool · Hand it over',
        title: 'Paste the error verbatim and ask for the full code',
        alt: 'The error pasted as-is, with the cause and corrected code returned',
        goal: 'The AI fixes it. Your job is to report the error accurately.',
        actions: [
          'Open with "I ran your code and got this error".',
          'Paste the error [[character for character]].',
          'Add one line of what you know — sheet name, row count.',
          'End with [[give me the complete code again]].',
        ],
        stuck: [
          { when: 'The fix produces another error', then: 'Normal. Hand over the new one the same way. Two or three rounds is typical.' },
        ],
      },
    },
    {
      no: 4, svg: 's5-4-rerun.svg',
      ko: {
        crumb: 'Apps Script · 다시 실행',
        title: '고친 코드로 다시 돌립니다',
        alt: '고친 코드를 붙여넣고 다시 실행해 통과한 화면',
        goal: '한 고리를 닫습니다. 무엇이 바뀌었는지 한 줄만 보고 넘어갑니다.',
        actions: [
          '고친 코드를 다시 [[통째로]] 붙여넣고 저장합니다.',
          '[[무엇이 바뀌었는지]] 한 줄만 눈으로 확인합니다. 전부 이해할 필요는 없습니다.',
          '다시 실행해 [[완료됨]]이 나오는지 봅니다.',
        ],
        stuck: [
          { when: '어디가 바뀌었는지 모르겠어요', then: 'AI 에게 "바뀐 줄만 따로 알려 줘" 라고 하세요.' },
        ],
      },
      en: {
        crumb: 'Apps Script · Rerun',
        title: 'Run again with the corrected code',
        alt: 'The corrected code pasted and running successfully',
        goal: 'Close one loop. Glance at what changed, then move on.',
        actions: [
          'Paste the corrected code [[in full]] and save.',
          'Look at [[what changed]] in one line.',
          'Run again and confirm it completed.',
        ],
        stuck: [
          { when: 'I cannot tell what changed', then: 'Ask: "Show only the lines you changed."' },
        ],
      },
    },
    {
      no: 5, svg: 's5-5-edge-cases.svg',
      ko: {
        crumb: '시험 · 예외 자료',
        title: '일부러 망가뜨린 자료로 시험합니다',
        alt: '빈 칸·표기 차이·앞뒤 공백을 일부러 넣은 시험용 자료 화면',
        goal: '여기서 안 터지면 실제 업무에서도 안 터집니다.',
        actions: [
          '[[표기만 다른 같은 값]]을 넣습니다 — 010-1234-5678 과 01012345678.',
          '[[앞뒤 공백]]이 있는 값을 넣습니다 — " 이서연 ".',
          '[[빈 칸]]을 넣습니다 — 이름이나 금액을 비웁니다.',
          '이 자료로 실행해 [[멈추는지 끝까지 도는지]] 봅니다.',
        ],
        stuck: [
          { when: '멈춰요', then: '멈춘 것이 성과입니다. 오류를 그대로 AI 에게 넘기고 "이런 자료에서도 멈추지 않게 고쳐 줘" 라고 하세요.' },
          { when: '안 멈추는데 결과가 틀려요', then: '더 나쁩니다. "표기가 다른 같은 번호를 같은 값으로 보게 고쳐 줘" 처럼 규칙을 콕 집어 말하세요.' },
        ],
      },
      en: {
        crumb: 'Testing · Edge cases',
        title: 'Test with deliberately broken data',
        alt: 'Test data containing format differences, stray spaces, and empty cells',
        goal: 'If it survives here, it survives real work.',
        actions: [
          'Add the [[same value written differently]].',
          'Add values with [[leading or trailing spaces]].',
          'Add [[empty cells]].',
          'Run it and see whether it stops or finishes.',
        ],
        stuck: [
          { when: 'It stops', then: 'That is the point. Hand the error over and ask it to survive such data.' },
          { when: 'It finishes but the result is wrong', then: 'Worse. Name the rule: "Treat differently formatted numbers as the same value."' },
        ],
      },
    },
    {
      no: 6, svg: 's5-6-verify.svg',
      ko: {
        crumb: '시험 · 결과 대조',
        title: '다섯 줄로 결과를 대조합니다',
        alt: '도구 결과를 손으로 대조하는 다섯 줄 점검표',
        goal: '도구를 믿고 쓰기 전 마지막 확인입니다.',
        actions: [
          '[[원본 건수 = 결과 건수 + 삭제 건수]] 가 맞는지 봅니다. 여기가 틀리면 나머지는 볼 필요 없습니다.',
          '[[손으로 세어 본 것]]과 도구 결과가 같은지 봅니다.',
          '앞 단계에서 넣은 [[예외 자료]]가 제대로 처리됐는지 봅니다.',
          '[[원본 시트가 하나도 안 바뀌었는지]] 확인합니다.',
        ],
        stuck: [
          { when: '숫자가 한두 건 달라요', then: '어느 행이 다른지 찾아 그 행의 값을 AI 에게 보여 주세요. 대개 공백이나 표기 차이입니다.' },
          { when: '원본이 바뀌었어요', then: '당장 쓰지 마세요. "원본은 읽기만 하고 절대 고치지 않게 다시 만들어 줘" 라고 하세요.' },
        ],
        note: '숫자 대조가 먼저입니다. 합이 맞지 않으면 나머지 항목을 아무리 봐도 의미가 없습니다.',
      },
      en: {
        crumb: 'Testing · Compare',
        title: 'Compare the results in five lines',
        alt: 'A five-line checklist comparing tool output against manual counts',
        goal: 'The last check before you trust the tool.',
        actions: [
          'Verify [[source = result + removed]]. If this fails, stop here.',
          'Compare against what you counted by hand.',
          'Confirm the edge-case rows were handled.',
          'Confirm the source sheet is untouched.',
        ],
        stuck: [
          { when: 'The source changed', then: 'Do not use it. Ask for a version that only reads the source.' },
        ],
      },
    },
  ],
};

/* ══════════════ 6교시 ══════════════ */
const s6 = {
  file: 'auto-06-walk.js',
  ko: {
    title: '따라하기 실습 · 보안 판정과 검토 절차 설계',
    lead: '**소요 40분 · 산출물은 부서에 붙여 둘 운영 규칙 한 장입니다.**\n\n도구가 도는 것과 부서에서 쓸 수 있는 것은 다릅니다. 자료를 관문에 통과시키고, 가릴 것을 가리고, 공유 범위를 좁히고, 실행 기록을 남기고, 운영 규칙을 적습니다. 이 다섯 가지가 공공업무에서 도구를 쓰기 위한 최소 조건입니다.\n\n> **가장 흔한 사고는 해킹이 아닙니다.** 링크 공유로 열려 있던 시트가 검색에 잡히는 것입니다.',
    flow: ['세 관문 통과', '가명처리 실습', '공유 범위 좁히기', '실행 기록 남기기', '운영 규칙 쓰기', '배포 전 점검'],
    done: [
      '외부 AI 에 넣어도 되는 자료와 안 되는 자료를 판정할 수 있습니다.',
      '시트 공유 범위가 좁혀졌고, 실행 기록이 자동으로 쌓입니다.',
      '부서에 붙여 둘 운영 규칙 한 장이 생겼습니다.',
    ],
  },
  en: {
    title: 'Hands-on — Security Screening and Review Process',
    lead: '**40 minutes. The output is a one-page operating rule for your team.**\n\nA tool that runs is not yet a tool your office can use. Screen the data, mask what must be masked, narrow the sharing scope, log every run, and write the operating rules.',
    flow: ['Pass three gates', 'Mask personal data', 'Narrow sharing', 'Log every run', 'Write the rules', 'Pre-release check'],
    done: [
      'You can decide which data may go to an external AI.',
      'Sharing is narrowed and every run is logged.',
      'You have a one-page operating rule for the team.',
    ],
  },
  steps: [
    {
      no: 1, svg: 's6-1-three-gates.svg',
      ko: {
        crumb: '보안 · 세 관문',
        title: '자료를 세 관문에 순서대로 통과시킵니다',
        alt: '고유식별정보·개인정보·대외비 세 관문과 각 조치를 보여 주는 카드',
        goal: '자료를 넣을 때마다 통과시킵니다. 어제 통과했다고 오늘 건너뛰지 않습니다.',
        actions: [
          '[[1관문 고유식별정보]] — 주민·외국인등록번호, 운전면허·여권번호. 하나라도 있으면 즉시 중단합니다.',
          '[[2관문 개인정보]] — 이름 · 연락처 · 주소. 가명처리 후 사용합니다.',
          '[[3관문 대외비]] — 미공개 정책·예산 자료. 부서장 승인이 필요합니다.',
        ],
        stuck: [
          { when: '내 자료가 어디에 해당하는지 모르겠어요', then: '위에서부터 차례로 봅니다. 1관문에 걸리면 2·3관문은 볼 필요도 없습니다.' },
          { when: '승인을 어떻게 받나요', then: '무엇을 어디에 넣는지 한 줄로 적어 결재로 올리세요. 구두 승인은 기록이 남지 않습니다.' },
        ],
      },
      en: {
        crumb: 'Security · Three gates',
        title: 'Pass the data through three gates in order',
        alt: 'Three gate cards for ID numbers, personal data, and confidential material',
        goal: 'Screen every time you feed data, not once.',
        actions: [
          '[[Gate 1 — ID numbers]]: stop immediately if any exist.',
          '[[Gate 2 — personal data]]: mask before use.',
          '[[Gate 3 — confidential]]: requires supervisor approval.',
        ],
        stuck: [
          { when: 'How do I get approval', then: 'Put one line in writing about what goes where. Verbal approval leaves no record.' },
        ],
      },
    },
    {
      no: 2, svg: 's6-2-pseudonymize.svg',
      ko: {
        crumb: '보안 · 가명처리',
        title: '가릴 것을 실제로 가려 봅니다',
        alt: '원본과 AI 에 넣을 사본을 나란히 둔 가명처리 전후 비교',
        goal: '원본은 그대로 두고, AI 에 넣을 사본을 따로 만듭니다.',
        actions: [
          '[[원본 파일]]은 이름을 바꾸지 말고 내 PC 또는 부서 드라이브에 그대로 둡니다.',
          '사본을 만들어 [[이름을 A · B · C]] 로 바꿉니다.',
          '[[연락처는 뒤 4자리만]], 주소는 구 단위까지만 남깁니다.',
          '누가 A 인지는 [[원본에만]] 남깁니다.',
        ],
        stuck: [
          { when: '이름을 바꾸면 결과를 못 알아봐요', then: '원본에 A·B·C 를 적어 둔 열을 하나 만들면 됩니다. 그 열은 AI 에 넣지 않습니다.' },
          { when: '집계만 하는데도 가려야 하나요', then: '집계에는 이름이 필요 없습니다. 필요 없는 것은 넣지 않는 것이 원칙입니다.' },
        ],
      },
      en: {
        crumb: 'Security · Masking',
        title: 'Actually mask the data',
        alt: 'Side-by-side original and masked copy prepared for the AI',
        goal: 'Keep the original untouched and build a separate copy for the AI.',
        actions: [
          'Leave the [[original file]] where it is.',
          'In the copy, replace names with [[A, B, C]].',
          'Keep only the [[last four digits]] of phone numbers, and district-level addresses.',
          'Keep the mapping in the original only.',
        ],
        stuck: [
          { when: 'I only need totals — must I still mask?', then: 'Totals do not need names. Anything unnecessary should not be sent.' },
        ],
      },
    },
    {
      no: 3, svg: 's6-3-sharing.svg',
      ko: {
        crumb: '구글 시트 · 공유 범위',
        title: '공유 범위를 「제한됨」으로 좁힙니다',
        alt: '시트 공유 설정에서 링크 공유를 제한됨으로 바꾸는 화면',
        goal: '가장 흔한 사고를 막습니다. 링크 공유 시트는 검색에도 잡힙니다.',
        actions: [
          '시트 오른쪽 위 [[공유]] 를 누릅니다.',
          '[[일반 액세스]] 가 "링크가 있는 모든 사용자" 이면 [[제한됨]]으로 바꿉니다.',
          '같이 쓸 사람을 [[한 명씩]] 추가합니다.',
          '도구를 만든 직후와 담당자가 바뀔 때 [[다시 점검]]합니다.',
        ],
        stuck: [
          { when: '제한됨으로 바꿨더니 동료가 못 열어요', then: '정상입니다. 그 동료를 명단에 추가하면 열립니다.' },
          { when: '부서 전체에 공유하고 싶어요', then: '부서 구글 그룹이 있으면 그룹을 추가하세요. 링크 공개로 열지 않습니다.' },
        ],
      },
      en: {
        crumb: 'Google Sheets · Sharing',
        title: 'Narrow sharing to Restricted',
        alt: 'The sharing dialog being switched from link sharing to Restricted',
        goal: 'Prevent the most common incident.',
        actions: [
          'Click [[Share]].',
          'If general access says "anyone with the link", change it to [[Restricted]].',
          'Add collaborators [[one by one]].',
          'Recheck after building the tool and when the owner changes.',
        ],
        stuck: [
          { when: 'A colleague can no longer open it', then: 'Expected. Add them to the list.' },
        ],
      },
    },
    {
      no: 4, svg: 's6-4-run-log.svg',
      ko: {
        crumb: '구글 시트 · 실행 기록',
        title: '돌릴 때마다 기록이 쌓이게 합니다',
        alt: '실행 일시·실행자·건수가 한 줄씩 쌓인 실행기록 시트',
        goal: '언제 · 누가 · 몇 건을 처리했는지 남깁니다. 감사 자료가 됩니다.',
        actions: [
          'AI 에게 [[실행할 때마다 실행기록 시트에 일시·실행자·원본 건수·결과 건수를 한 줄씩 남겨 줘]] 라고 합니다.',
          '받은 코드를 붙여넣고 저장한 뒤 한 번 실행합니다.',
          '[[실행기록]] 시트에 첫 줄이 생겼는지 봅니다.',
        ],
        stuck: [
          { when: '실행자 이름이 안 나와요', then: '"실행자는 Session.getActiveUser().getEmail() 로 남겨 줘" 라고 하세요.' },
          { when: '기록이 너무 많이 쌓여요', then: '한 달에 한 번 오래된 줄을 잘라 다른 시트로 옮기면 됩니다.' },
        ],
      },
      en: {
        crumb: 'Google Sheets · Run log',
        title: 'Log every run automatically',
        alt: 'A run-log sheet accumulating timestamp, operator, and counts',
        goal: 'Record when, who, and how many. This becomes your audit trail.',
        actions: [
          'Ask the AI to append a log row on every run.',
          'Paste the code, save, and run once.',
          'Check the first row appeared in the log sheet.',
        ],
        stuck: [
          { when: 'The operator name is missing', then: 'Ask it to use Session.getActiveUser().getEmail().' },
        ],
      },
    },
    {
      no: 5, svg: 's6-5-operating-rules.svg',
      ko: {
        crumb: '문서 · 운영 규칙',
        title: '운영 규칙 한 장을 씁니다',
        alt: '누가·언제 돌리고 전후로 무엇을 확인하는지 적은 운영 규칙 화면',
        goal: '담당자가 바뀌어도 같은 방식으로 돌아가게 만듭니다.',
        actions: [
          '[[누가 · 언제]] 돌리는지 적습니다. 대행자도 함께 적습니다.',
          '[[돌리기 전 확인]] — 원본 시트 이름과 열 순서가 그대로인지.',
          '[[돌린 뒤 확인]] — 원본 건수 = 결과 건수 + 삭제 건수 대조.',
          '[[문제가 생기면]] 무엇을 캡처해 누구에게 알릴지 적습니다.',
        ],
        stuck: [
          { when: '너무 형식적인 것 같아요', then: '이 두 줄(전후 확인)만 지켜도 사고는 거의 나지 않습니다. 나머지는 빼도 됩니다.' },
        ],
      },
      en: {
        crumb: 'Document · Operating rules',
        title: 'Write the one-page operating rule',
        alt: 'An operating rule sheet naming the owner, schedule, and checks',
        goal: 'Keep the tool running the same way after the owner changes.',
        actions: [
          'Name [[who runs it and when]], plus the backup person.',
          '[[Before running]] — confirm sheet name and column order are unchanged.',
          '[[After running]] — verify source = result + removed.',
          'Say what to capture and whom to tell when something breaks.',
        ],
        stuck: [
          { when: 'This feels bureaucratic', then: 'The two check lines alone prevent most incidents. Drop the rest if you must.' },
        ],
      },
    },
    {
      no: 6, svg: 's6-6-final-check.svg',
      ko: {
        crumb: '보안 · 배포 전 점검',
        title: '부서에 쓰기 전 다섯 줄을 점검합니다',
        alt: '배포 전 마지막 다섯 줄 점검 체크리스트',
        goal: '만드는 동안 자료를 바꿔 넣었을 수 있습니다. 여기서 한 번 더 봅니다.',
        actions: [
          '[[세 관문]]을 통과한 자료만 AI 에 넣었는지 봅니다.',
          '[[공유 범위]]가 제한됨인지 봅니다.',
          '[[실행 기록]]이 자동으로 쌓이는지 봅니다.',
          '[[운영 규칙]] 한 장을 부서에 공유했는지 봅니다.',
          '[[대신 돌릴 사람]]이 한 번 돌려 봤는지 봅니다.',
        ],
        stuck: [
          { when: '마지막 줄을 못 했어요', then: '오늘 옆자리 동료에게 5분만 설명하고 한 번 돌리게 하세요. 이것을 건너뛰면 담당자 부재 주에 도구가 멈춥니다.' },
        ],
      },
      en: {
        crumb: 'Security · Pre-release',
        title: 'Check five lines before your team uses it',
        alt: 'A five-line pre-release checklist',
        goal: 'You may have swapped in different data while building. Look once more.',
        actions: [
          'Only screened data went to the AI.',
          'Sharing is Restricted.',
          'Runs are logged automatically.',
          'The operating rule is shared with the team.',
          'The backup person has run it once.',
        ],
        stuck: [
          { when: 'The last line is not done', then: 'Spend five minutes with a colleague today, or the tool stops the week you are away.' },
        ],
      },
    },
  ],
};

/* ══════════════ 7교시 ══════════════ */
const s7 = {
  file: 'auto-07-walk.js',
  ko: {
    title: '7교시 따라하기 실습 · 적용계획서 여덟 칸 채우기',
    lead: '**소요 50분 · 산출물은 결재 상신용 한 장입니다.**\n\n도구를 만든 것으로 끝나지 않습니다. 부서에 적용하려면 결재가 나야 하고, 결재는 숫자로 납니다. 여덟 칸을 순서대로 채우고 마지막에 한 장으로 줄입니다.\n\n> **"비효율적이다" 같은 말은 쓰지 마세요.** 몇 분, 몇 건인지만 적습니다.',
    flow: ['양식 열기', '현황과 문제', '효과를 숫자로', '일정과 담당', '문장 다듬기', '결재용 한 장'],
    done: [
      '여덟 칸이 모두 채워진 적용계획서가 생겼습니다.',
      '기대효과가 연간 시간과 사고 건수라는 숫자로 표현됐습니다.',
      '그대로 결재에 올릴 수 있는 한 장 요약이 나왔습니다.',
    ],
  },
  en: {
    title: 'Session 7 Hands-on — Fill In the Eight-Box Rollout Plan',
    lead: '**50 minutes. The output is a one-page approval document.**\n\nBuilding the tool is not the end. Adoption needs approval, and approval follows numbers.',
    flow: ['Open the form', 'Current state', 'Effect in numbers', 'Schedule and owner', 'Polish the wording', 'One-page summary'],
    done: [
      'All eight boxes are filled in.',
      'The benefit is expressed as annual hours and incident counts.',
      'You have a summary you can submit for approval as-is.',
    ],
  },
  steps: [
    {
      no: 1, svg: 's7-1-plan-form.svg',
      ko: {
        crumb: '계획서 · 양식',
        title: '여덟 칸 양식을 엽니다',
        alt: '적용계획서 여덟 칸 빈 양식 화면',
        goal: '무엇을 적어야 하는지 먼저 봅니다. 칸 순서에 뜻이 있습니다.',
        actions: [
          '[[1~3번]]은 지금 상황입니다. 도구 이야기를 아직 꺼내지 않습니다.',
          '[[4~5번]]이 제안입니다. 만든 도구와 그것이 가져올 변화를 적습니다.',
          '[[6~8번]]은 실행입니다. 결재자는 이 세 칸을 보고 승인 여부를 정합니다.',
        ],
        stuck: [
          { when: '부서 양식이 따로 있어요', then: '부서 양식을 쓰세요. 여덟 칸의 내용을 그 양식의 해당 항목으로 옮기면 됩니다.' },
        ],
      },
      en: {
        crumb: 'Plan · Form',
        title: 'Open the eight-box form',
        alt: 'An empty eight-box rollout plan form',
        goal: 'See the shape first. The order of the boxes matters.',
        actions: [
          '[[1–3]] describe the present. Do not mention the tool yet.',
          '[[4–5]] are the proposal.',
          '[[6–8]] are execution. Approvers decide on these three.',
        ],
        stuck: [
          { when: 'My office has its own form', then: 'Use it, and map these eight items onto it.' },
        ],
      },
    },
    {
      no: 2, svg: 's7-2-current.svg',
      ko: {
        crumb: '계획서 · 현황',
        title: '지금 상황을 사실만으로 적습니다',
        alt: '계획서 1~3번 칸에 현황과 문제를 적은 화면',
        goal: '문제를 세웁니다. 여기에 판단이나 불평을 섞지 않습니다.',
        actions: [
          '[[업무 이름]]을 부서 사람이 알아듣는 말로 적습니다.',
          '[[지금 어떻게 하나]] — 현재 절차를 사실 그대로 적습니다.',
          '[[무엇이 문제인가]] — 반드시 [[숫자]]로 적습니다. 시간과 사고 건수 두 가지면 충분합니다.',
        ],
        stuck: [
          { when: '사고 사례가 없어요', then: '시간만 적어도 됩니다. 다만 지난 3개월을 세어 보면 대개 한두 건은 나옵니다.' },
          { when: '숫자를 모르겠어요', then: '다음 한 번을 할 때 시계를 보세요. 한 번만 재도 충분합니다.' },
        ],
      },
      en: {
        crumb: 'Plan · Current state',
        title: 'Describe the present with facts only',
        alt: 'Boxes 1–3 filled in with the current process and its problems',
        goal: 'Establish the problem without opinion.',
        actions: [
          'Name the task in plain words.',
          'Describe the current procedure factually.',
          'State the problem in [[numbers]] — time and incident count.',
        ],
        stuck: [
          { when: 'I have no incident examples', then: 'Time alone is fine, but counting the last three months usually turns up one or two.' },
        ],
      },
    },
    {
      no: 3, svg: 's7-3-effect.svg',
      ko: {
        crumb: '계획서 · 기대효과',
        title: '기대효과를 시트에서 계산합니다',
        alt: '지금과 도구 적용 후를 비교해 연간 절약 시간을 계산한 표',
        goal: '결재자가 보는 숫자를 만듭니다. 곱셈만 하면 나옵니다.',
        actions: [
          '[[1회 소요 시간]]을 지금과 적용 후로 나란히 적습니다. 지금 숫자는 2교시 정의서에 있습니다.',
          '[[연간 횟수]]를 곱해 [[연간 절약 시간]]을 냅니다.',
          '[[사고 건수]] 변화를 함께 적습니다 — 시간보다 이쪽이 더 세게 읽힙니다.',
        ],
        stuck: [
          { when: '적용 후 시간을 모르겠어요', then: '5교시에서 실제로 돌려 본 시간을 쓰세요. 대개 1~2분입니다.' },
          { when: '절약 시간이 작아 보여요', then: '연간으로 환산하면 대부분 20시간을 넘습니다. 연간으로 적으세요.' },
        ],
      },
      en: {
        crumb: 'Plan · Expected effect',
        title: 'Calculate the effect in a sheet',
        alt: 'A table comparing current and post-tool timings with annual savings',
        goal: 'Produce the number the approver reads.',
        actions: [
          'Put current and post-tool [[time per round]] side by side.',
          'Multiply by [[times per year]] for annual savings.',
          'Include the change in [[incident count]] — it reads stronger than hours.',
        ],
        stuck: [
          { when: 'The saving looks small', then: 'Convert to annual figures. It usually exceeds twenty hours.' },
        ],
      },
    },
    {
      no: 4, svg: 's7-4-schedule.svg',
      ko: {
        crumb: '계획서 · 실행',
        title: '일정과 담당을 적습니다',
        alt: '계획서 6~8번 칸에 일정·담당·위험을 적은 화면',
        goal: '결재자가 가장 걱정하는 세 가지에 미리 답합니다.',
        actions: [
          '[[적용 일정]] — 한 번에 부서 전체로 가지 않습니다. 시범 1주를 넣습니다.',
          '[[담당과 관리]] — 주담당과 [[대행자]]를 함께 적습니다.',
          '[[위험과 대비]] — 위험은 하나만 적고 대비를 붙입니다. 6교시 운영 규칙에서 가져옵니다.',
        ],
        stuck: [
          { when: '대행자를 정하기 어려워요', then: '팀장을 적어도 됩니다. 비어 있는 것보다 훨씬 낫습니다.' },
          { when: '위험이 여러 개예요', then: '가장 일어날 법한 하나만 적으세요. 많이 적으면 위험해 보입니다.' },
        ],
      },
      en: {
        crumb: 'Plan · Execution',
        title: 'Write the schedule and the owner',
        alt: 'Boxes 6–8 filled in with schedule, owner, and risk',
        goal: 'Answer the approver’s three worries in advance.',
        actions: [
          '[[Schedule]] — include a one-week pilot, never a full rollout at once.',
          '[[Owner]] — name the owner and the [[backup]].',
          '[[Risk]] — name one risk and its mitigation.',
        ],
        stuck: [
          { when: 'Too many risks', then: 'List only the most likely one. A long list reads as danger.' },
        ],
      },
    },
    {
      no: 5, svg: 's7-5-polish.svg',
      ko: {
        crumb: 'AI 도구 · 문장 다듬기',
        title: 'AI 로 공문체 문장으로 다듬습니다',
        alt: '숫자를 바꾸지 말라는 조건을 붙여 계획서 문장을 다듬은 화면',
        goal: '내용은 그대로 두고 문장만 바꿉니다. 조건을 붙이지 않으면 없는 성과를 지어냅니다.',
        actions: [
          '초안을 붙여넣고 [[내용은 바꾸지 말고 문장만 다듬어 줘]] 라고 합니다.',
          '조건 세 줄을 반드시 붙입니다 — [[숫자와 날짜는 절대 바꾸지 마]], [[없는 내용을 새로 만들지 마]], [[한 칸에 두 문장을 넘기지 마]].',
          '돌아온 문장의 [[숫자를 원문과 대조]]합니다.',
        ],
        stuck: [
          { when: '숫자가 바뀌었어요', then: '"숫자를 바꾸지 말라고 했어. 원문 숫자로 다시 써 줘" 라고 되돌리세요. 그대로 쓰면 안 됩니다.' },
          { when: '문장이 너무 딱딱해요', then: '어색한 곳은 내 말로 고쳐도 됩니다. AI 문장을 그대로 쓸 의무는 없습니다.' },
        ],
        note: 'AI 가 가장 잘 지어내는 것이 성과 숫자입니다. 다듬은 뒤 숫자를 한 번 더 대조하는 것을 습관으로 만드세요.',
      },
      en: {
        crumb: 'AI tool · Polish',
        title: 'Polish the wording with the AI',
        alt: 'The plan text polished under the condition that no numbers change',
        goal: 'Change the wording, not the content.',
        actions: [
          'Paste the draft and ask it to polish wording only.',
          'Add three conditions: never change numbers or dates, invent nothing, at most two sentences per box.',
          'Compare the returned numbers against your draft.',
        ],
        stuck: [
          { when: 'A number changed', then: 'Reject it and ask again with the original figures. Never ship it as-is.' },
        ],
      },
    },
    {
      no: 6, svg: 's7-6-approval.svg',
      ko: {
        crumb: '계획서 · 결재용 요약',
        title: '결재용 한 장으로 줄입니다',
        alt: '제목·현황·조치·효과·일정·예산으로 줄인 결재 상신용 한 장',
        goal: '결재자는 한 장만 봅니다. 여덟 칸을 여섯 줄로 줄입니다.',
        actions: [
          '[[효과]] 칸을 위쪽에 둡니다. 결재자가 먼저 보는 줄입니다.',
          '[[소요 예산]]에 "없음" 을 반드시 적습니다. 승인 속도가 가장 크게 달라지는 칸입니다.',
          '완성본을 저장하고 [[8교시 발표]]에 그대로 씁니다.',
        ],
        stuck: [
          { when: '한 장에 안 들어가요', then: '현황과 조치를 각각 한 문장으로 줄이세요. 자세한 내용은 여덟 칸 원본에 있습니다.' },
        ],
      },
      en: {
        crumb: 'Plan · Approval summary',
        title: 'Reduce it to one page',
        alt: 'A one-page approval summary with title, situation, action, effect, schedule, budget',
        goal: 'Approvers read one page. Compress eight boxes into six lines.',
        actions: [
          'Put [[effect]] near the top.',
          'State the [[budget]] as none — it changes approval speed more than anything else.',
          'Save it and reuse it in the session 8 presentation.',
        ],
        stuck: [
          { when: 'It does not fit on one page', then: 'Compress situation and action to one sentence each.' },
        ],
      },
    },
  ],
};

/* ══════════════ 8교시 ══════════════ */
const s8 = {
  file: 'auto-08-walk.js',
  ko: {
    title: '8교시 따라하기 실습 · 시연·피드백·최종본 만들기',
    lead: '**소요 50분 · 산출물은 최종본 도구와 한 달 계획입니다.**\n\n3분 발표로 도구를 보여 주고, 받은 말을 표로 옮기고, 그중 하나를 그 자리에서 고치고, 이름을 붙여 부서 폴더에 저장합니다. 마지막으로 오늘 이후 한 달에 무엇을 할지 적습니다.\n\n> **코드는 보여 주지 마세요.** 보는 사람이 알고 싶은 것은 결과뿐입니다.',
    flow: ['발표 한 장', '시연 순서', '피드백 표', '하나 고치기', '최종본 저장', '한 달 계획'],
    done: [
      '도구를 3분 안에 설명하고 시연할 수 있습니다.',
      '받은 피드백 중 하나를 실제로 반영했습니다.',
      '이름과 날짜가 붙은 최종본이 부서 폴더에 저장됐습니다.',
      '오늘 이후 한 달 동안 무엇을 할지 적혀 있습니다.',
    ],
  },
  en: {
    title: 'Session 8 Hands-on — Demo, Feedback, and Final Version',
    lead: '**50 minutes. The output is the final tool and a one-month plan.**\n\nShow the tool in three minutes, capture the feedback, fix one item on the spot, then name and store the final version.',
    flow: ['One slide', 'Demo order', 'Feedback table', 'Fix one item', 'Save the final', 'One-month plan'],
    done: [
      'You can explain and demo the tool in three minutes.',
      'You have applied one piece of feedback for real.',
      'The final version is named, dated, and stored in a shared folder.',
      'You know what to do over the next month.',
    ],
  },
  steps: [
    {
      no: 1, svg: 's8-1-slide.svg',
      ko: {
        crumb: '발표 · 슬라이드',
        title: '발표 슬라이드를 한 장으로 만듭니다',
        alt: '지금·도구·효과·적용 네 줄로 구성한 3분 발표용 한 장 슬라이드',
        goal: '3분 안에 전달되는 한 장을 만듭니다. 두 장을 넘기지 않습니다.',
        actions: [
          '제목 한 줄에 [[결과]]를 넣습니다 — "주 40분을 2분으로" 처럼.',
          '[[지금 · 도구 · 효과 · 적용]] 네 줄만 적습니다. 7교시 한 장에서 그대로 가져옵니다.',
          '맨 아래에 [[부서와 이름]]을 적습니다.',
        ],
        stuck: [
          { when: '넣고 싶은 게 많아요', then: '다섯 줄을 넘기면 3분에 못 끝냅니다. 나머지는 질문을 받으면 말하세요.' },
        ],
      },
      en: {
        crumb: 'Presentation · Slide',
        title: 'Make a single presentation slide',
        alt: 'A one-slide summary with now, tool, effect, and rollout',
        goal: 'One slide that lands in three minutes.',
        actions: [
          'Put the [[result]] in the title line.',
          'Write only four lines: now, tool, effect, rollout.',
          'Add your team and name at the bottom.',
        ],
        stuck: [
          { when: 'I want to add more', then: 'Past five lines you will not finish in three minutes. Save the rest for questions.' },
        ],
      },
    },
    {
      no: 2, svg: 's8-2-demo-order.svg',
      ko: {
        crumb: '발표 · 시연 순서',
        title: '시연 순서를 다섯 줄로 정합니다',
        alt: '3분 시연 순서를 다섯 단계와 초 단위 배분으로 정한 화면',
        goal: '순서를 정해 두지 않으면 시연 중에 길을 잃습니다.',
        actions: [
          '[[원본 시트]]를 보여 주고 문제 행을 손으로 짚습니다 — 여기가 가장 중요한 30초입니다.',
          '[[메뉴]]를 눌러 실행합니다.',
          '[[알림창 숫자]]를 소리 내어 읽습니다. 화면만 보여 주면 아무도 확인하지 않습니다.',
          '[[결과 시트]]를 차례로 보여 줍니다.',
          '[[원본이 그대로]]임을 보여 주고 마칩니다.',
        ],
        stuck: [
          { when: '시연 중 오류가 나면요', then: '당황하지 말고 그대로 보여 주세요. "이럴 때는 이렇게 고칩니다" 가 오히려 좋은 시연이 됩니다.' },
          { when: '시간이 모자라요', then: '4번을 줄이세요. 1번과 3번은 줄이지 않습니다.' },
        ],
      },
      en: {
        crumb: 'Presentation · Demo order',
        title: 'Fix the demo order in five lines',
        alt: 'A five-step demo order with seconds allocated to each step',
        goal: 'Without a fixed order you will lose your way mid-demo.',
        actions: [
          'Show the source and point at the problem rows — the most important 30 seconds.',
          'Click the menu.',
          'Read the count aloud.',
          'Show the result sheets in order.',
          'Finish by showing the source is unchanged.',
        ],
        stuck: [
          { when: 'What if it errors during the demo', then: 'Show it. "Here is how I fix this" makes a better demo.' },
        ],
      },
    },
    {
      no: 3, svg: 's8-3-feedback.svg',
      ko: {
        crumb: '피드백 · 받아 적기',
        title: '받은 말을 그 자리에서 표로 옮깁니다',
        alt: '받은 피드백을 누가·고칠 것인가·언제로 나눠 적은 표',
        goal: '기억에 의존하지 않습니다. 들은 말은 그 자리에서 적습니다.',
        actions: [
          '[[받은 말]]을 고치지 말고 그대로 적습니다. 해석은 나중에 합니다.',
          '[[누가]] 했는지 적습니다 — 나중에 되물을 수 있어야 합니다.',
          '[[고친다 / 다음에 / 계획서에 반영]] 셋 중 하나로만 나눕니다.',
          '[[오늘 고칠 것]]은 한두 개로 제한합니다.',
        ],
        stuck: [
          { when: '지적이 너무 많아요', then: '전부 적되 "다음에" 로 분류하세요. 적어 두는 것만으로도 다음 달 개선 목록이 됩니다.' },
          { when: '비판으로 들려요', then: '쓰는 사람이 관심이 있다는 뜻입니다. 아무 말도 안 나오는 것이 더 나쁩니다.' },
        ],
      },
      en: {
        crumb: 'Feedback · Capture',
        title: 'Write feedback into a table on the spot',
        alt: 'A feedback table with source, decision, and timing columns',
        goal: 'Do not rely on memory.',
        actions: [
          'Write what was said [[verbatim]].',
          'Note [[who]] said it.',
          'Classify as fix now, later, or note in the plan.',
          'Limit fix-now items to one or two.',
        ],
        stuck: [
          { when: 'It feels like criticism', then: 'It means people care. Silence is worse.' },
        ],
      },
    },
    {
      no: 4, svg: 's8-4-apply-fix.svg',
      ko: {
        crumb: 'AI 도구 · 반영',
        title: '지적 하나를 골라 그 자리에서 고칩니다',
        alt: '정렬 기준 하나를 바꿔 달라고 요청해 바뀐 줄을 확인한 화면',
        goal: '한 번에 한 가지만 고칩니다. 두 가지를 같이 시키면 원인을 못 찾습니다.',
        actions: [
          '고칠 것 [[하나]]를 고릅니다.',
          '[[나머지 동작은 그대로 두고]] 무엇을 어떻게 바꿀지 말합니다.',
          '[[바뀐 부분만 먼저 알려 준 다음, 전체 코드를 다시 줘]] 라고 합니다.',
          '붙여넣고 실행한 뒤 [[5교시 대조표]]를 다시 한 번 돌립니다.',
        ],
        stuck: [
          { when: '고쳤더니 다른 게 깨졌어요', then: '흔한 일입니다. 오류를 그대로 넘기고 "이전 동작은 유지하면서 고쳐 줘" 라고 하세요.' },
          { when: '고치기 전으로 되돌리고 싶어요', then: 'Apps Script 편집기 상단의 버전 기록에서 이전 저장본으로 돌아갈 수 있습니다.' },
        ],
      },
      en: {
        crumb: 'AI tool · Apply',
        title: 'Fix one item on the spot',
        alt: 'A request to change one sort rule with the changed line shown',
        goal: 'One change at a time.',
        actions: [
          'Pick [[one]] item.',
          'Say what to change while [[keeping everything else]].',
          'Ask for the changed lines first, then the full code.',
          'Paste, run, and repeat the session 5 comparison.',
        ],
        stuck: [
          { when: 'The fix broke something else', then: 'Common. Hand over the error and ask it to preserve previous behaviour.' },
        ],
      },
    },
    {
      no: 5, svg: 's8-5-save-final.svg',
      ko: {
        crumb: '구글 드라이브 · 최종본',
        title: '이름을 붙여 부서 폴더에 저장합니다',
        alt: '도구 사본을 이름과 날짜를 붙여 부서 폴더에 저장하는 화면',
        goal: '고칠 때마다 사본을 남기면 언제든 되돌릴 수 있습니다.',
        actions: [
          '[[파일 → 사본 만들기]] 를 누릅니다.',
          '이름에 [[날짜와 판 번호]]를 넣습니다 — `업무이름_도구_v1.0_20260912` 형식.',
          '[[부서 공유 폴더]]에 저장합니다. 개인 드라이브에 두지 않습니다.',
          '사본을 만든 뒤 [[공유 범위를 다시 제한됨]]으로 맞춥니다 — 사본에는 따라오지 않습니다.',
        ],
        stuck: [
          { when: '부서 공유 폴더가 없어요', then: '오늘 하나 만들고 팀에 공유하세요. 폴더 하나가 도구 열 개를 살립니다.' },
          { when: '사본이 너무 많아져요', then: '판이 바뀔 때만 만듭니다. 매일 만들 필요는 없습니다.' },
        ],
      },
      en: {
        crumb: 'Google Drive · Final',
        title: 'Name it and store it in the team folder',
        alt: 'Making a named, dated copy into the team folder',
        goal: 'A copy per version means you can always go back.',
        actions: [
          'Choose [[File → Make a copy]].',
          'Include [[date and version]] in the name.',
          'Store it in the [[team shared folder]], not your personal drive.',
          'Reset sharing to Restricted — it does not carry over to copies.',
        ],
        stuck: [
          { when: 'There is no team folder', then: 'Create one today. One folder saves ten tools.' },
        ],
      },
    },
    {
      no: 6, svg: 's8-6-next-month.svg',
      ko: {
        crumb: '마무리 · 한 달 계획',
        title: '오늘 이후 한 달에 할 일을 적습니다',
        alt: '이번 주부터 한 달까지 할 일을 적은 계획 화면',
        goal: '오늘 만든 도구가 잊히지 않게 만듭니다.',
        actions: [
          '[[이번 주]] — 내 실제 업무에 한 번 돌리고 실행기록 첫 줄을 남깁니다.',
          '[[2주차]] — 대행자에게 5분 설명하고 한 번 돌리게 합니다.',
          '[[3주차]] — 팀 회의에서 3분 시연합니다. 오늘 슬라이드를 그대로 씁니다.',
          '[[한 달 안]] — 피드백 표의 "다음에" 하나를 같은 방법으로 고칩니다.',
        ],
        stuck: [
          { when: '한 달 뒤에 막히면요', then: '오늘 자료의 해당 단계로 돌아와 그림과 화면을 맞춰 보세요. 이 페이지는 계속 남아 있습니다.' },
          { when: '다른 업무도 자동화하고 싶어요', then: '2교시 후보 표에 적어 둔 나머지 두 개가 있습니다. 같은 여덟 단계를 다시 돌리면 됩니다.' },
        ],
        note: '이번 주에 실제 업무로 한 번 돌리지 않으면 오늘 만든 도구는 대개 그대로 잊힙니다. 한 번만 돌리면 그 뒤로는 저절로 씁니다.',
      },
      en: {
        crumb: 'Wrap-up · One month',
        title: 'Write what you will do over the next month',
        alt: 'A plan listing actions from this week through one month',
        goal: 'Make sure today’s tool does not get forgotten.',
        actions: [
          '[[This week]] — run it on real work once and log the first row.',
          '[[Week 2]] — teach the backup person in five minutes.',
          '[[Week 3]] — demo it at the team meeting using today’s slide.',
          '[[Within a month]] — fix one "later" item from the feedback table.',
        ],
        stuck: [
          { when: 'What if I get stuck next month', then: 'Come back to the matching step on this page. It stays available.' },
        ],
      },
    },
  ],
};

export default [s1, s2, s3, s4, s5, s6, s7, s8];

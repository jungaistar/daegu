/**
 * 참고사이트 「직접 따라 해보기」 단계 본문 — 글만 모아 둔 곳.
 *
 * 광진구 류승인 주무관이 공개한 도구 12종을, 대구시 공무원이 자기 업무 화면에서
 * 그대로 따라 할 수 있도록 예시를 대구 상황으로 바꿔 적었다.
 * 화면 그림은 scripts/gen-ref-svg.mjs, 화면 짜기는 scripts/gen-walkthrough.mjs 가 맡는다.
 *
 * 표기 규칙 — [[굵게]] · `코드`
 */

/* ══════════════ 1단계 · 브라우저에서 바로 ══════════════ */
const t1 = {
  file: 'ref-01-walk.js',
  ko: {
    title: '1단계 따라하기 · 설치 없이 브라우저에서 열어보기',
    lead: '**소요 20분 · 준비물은 브라우저뿐입니다. 설치도 계정도 필요 없습니다.**\n\n주소만 열면 되는 것부터 봅니다. 아래 다섯 단계를 순서대로 따라 하면 오늘 바로 업무에 쓸 수 있는 도구 두 개를 손에 넣습니다. 그림의 주황 번호와 오른쪽 설명 번호가 같습니다.\n\n> **실제 민원 자료로 하지 마세요.** 처음 한 번은 예시 주소나 공개된 조례로 해 보고, 손에 익은 뒤에 업무 자료를 다루세요.',
    flow: ['도구 12종 훑기', 'gjdong 주소 정리', '확장으로 어디서나', 'lexdiff 조례 비교', '온톨로지 그림'],
    done: [
      '주소 정리와 조례 비교, 두 가지를 오늘 바로 쓸 수 있습니다.',
      '설치 없이 되는 범위를 확인했습니다. 여기까지만 써도 충분한 부서가 많습니다.',
      '더 나아가려면 2단계에서 AI 에 공공데이터를 붙입니다.',
    ],
  },
  en: {
    title: 'Step 1 Hands-on — Open It in a Browser',
    lead: '**20 minutes. A browser is all you need — no install, no account.**\n\nStart with the tools that need nothing but an address. Five steps put two immediately useful tools in your hands.',
    flow: ['Skim the 12 tools', 'Standardize addresses', 'Browser extension', 'Compare statutes', 'Ontology graph'],
    done: [
      'You can use address standardization and statute comparison today.',
      'You know how far you get with no installation at all.',
      'Step 2 connects public data directly to an AI.',
    ],
  },
  steps: [
    {
      no: 1, svg: 'r1-1-portfolio.svg',
      ko: {
        crumb: '포트폴리오 · 전체 훑기',
        title: '도구 12종을 갈래별로 훑어봅니다',
        alt: '포트폴리오 사이트에서 공개 도구 12종을 갈래별로 보여 주는 화면',
        goal: '무엇이 있는지부터 봅니다. 전부 쓸 필요는 없고, 내 업무에 걸리는 것 하나만 찾으면 됩니다.',
        actions: [
          '브라우저 주소창에 [[chris.gomdori.app]] 을 입력합니다.',
          '네 갈래 중 [[내 부서 업무와 가까운 것]]을 하나 고릅니다.',
          '오늘은 [[설치 없이 되는 것]]만 봅니다 — 주소 정리와 조례 비교입니다.',
        ],
        stuck: [
          { when: '페이지가 안 열려요', then: '공개 서버라 점검 중일 수 있습니다. github.com/chrisryugj 에서 최신 주소를 확인하세요.' },
          { when: '뭘 골라야 할지 모르겠어요', then: '민원 주소를 다루는 부서면 주소 정리, 조례를 다루는 부서면 법령 비교부터 하세요.' },
        ],
        note: '이 도구들은 모두 현직 공무원이 자기 업무를 편하게 하려고 만든 것입니다. 우리도 같은 방식으로 만들 수 있습니다 — 그 방법이 이 과정의 「행정업무 자동화」입니다.',
      },
      en: {
        crumb: 'Portfolio · Overview',
        title: 'Skim the twelve tools by category',
        alt: 'A portfolio page grouping twelve published tools into four categories',
        goal: 'See what exists. You only need to find the one that touches your own work.',
        actions: [
          'Open [[chris.gomdori.app]] in your browser.',
          'Pick the category closest to your team’s work.',
          'Today, look only at what runs [[without installing anything]].',
        ],
        stuck: [
          { when: 'The page will not open', then: 'These are public servers and may be under maintenance. Check github.com/chrisryugj.' },
        ],
      },
    },
    {
      no: 2, svg: 'r1-2-gjdong.svg',
      ko: {
        crumb: 'gjdong · 주소 정리',
        title: '뒤죽박죽 주소를 표준주소로 정리합니다',
        alt: 'gjdong 웹앱에 대구 민원 주소를 붙여넣어 표준주소로 정리한 화면',
        goal: '민원 서식마다 제각각인 주소를 도로명 기준으로 한 번에 맞춥니다.',
        actions: [
          '[[gjdong.vercel.app]] 을 엽니다.',
          '왼쪽 칸에 정리할 주소를 [[여러 줄 그대로]] 붙여넣습니다. 지번·도로명이 섞여 있어도 됩니다.',
          '[[표준주소로 정리]] 를 누릅니다.',
          '오른쪽 결과를 [[복사]]해 우리 대장 시트에 붙입니다.',
        ],
        stuck: [
          { when: '결과가 안 나와요', then: '주소 한 줄에 여러 건이 붙어 있으면 인식이 어렵습니다. 한 줄에 한 건씩 넣어 보세요.' },
          { when: '엉뚱한 주소가 나와요', then: '동 이름이 같은 곳이 여러 구에 있을 수 있습니다. 앞에 "대구광역시 ○○구" 를 붙여 다시 넣으세요.' },
          { when: '건물명이 사라졌어요', then: '표준주소는 도로명 기준이라 건물명이 빠집니다. 건물명이 필요하면 원본 열을 따로 남겨 두세요.' },
        ],
        note: '개인정보가 붙은 주소 목록은 그대로 넣지 마세요. 이름·연락처 열을 빼고 주소 열만 복사해 넣으면 됩니다.',
      },
      en: {
        crumb: 'gjdong · Addresses',
        title: 'Turn messy addresses into standard form',
        alt: 'Messy addresses pasted into gjdong and returned in standard road-name form',
        goal: 'Normalize addresses that arrive in a different shape on every form.',
        actions: [
          'Open [[gjdong.vercel.app]].',
          'Paste the addresses on the left, [[several lines at once]].',
          'Press the standardize button.',
          'Copy the result into your own sheet.',
        ],
        stuck: [
          { when: 'The wrong district comes back', then: 'Prefix the city and district and try again.' },
        ],
        note: 'Do not paste lists that still carry names or phone numbers. Copy the address column only.',
      },
    },
    {
      no: 3, svg: 'r1-3-extension.svg',
      ko: {
        crumb: '확장프로그램 · 업무 화면에서',
        title: '업무 화면에서 주소를 드래그해 바로 정리합니다',
        alt: '업무 시스템 화면에서 주소를 드래그하자 표준주소가 바로 뜬 화면',
        goal: '창을 오가지 않고, 보고 있는 화면에서 바로 처리합니다.',
        actions: [
          'GitHub 저장소에서 [[확장프로그램]]을 받아 크롬에 설치합니다.',
          '업무 시스템 화면에서 주소를 [[마우스로 긁습니다]].',
          '옆에 뜬 [[표준주소]]를 클릭해 복사합니다.',
        ],
        stuck: [
          { when: '설치가 막혀요', then: '기관 PC 는 확장 설치가 제한될 수 있습니다. 보안 담당 부서에 먼저 확인하세요. 막히면 2번(웹앱)만 써도 됩니다.' },
          { when: '드래그해도 아무것도 안 떠요', then: '확장이 꺼져 있거나 그 사이트에서 권한이 없는 경우입니다. 크롬 확장 관리에서 사용 설정을 확인하세요.' },
        ],
        note: '설치가 부담스러우면 이 단계는 건너뛰세요. 앞 단계의 웹앱만으로도 같은 일을 할 수 있습니다.',
      },
      en: {
        crumb: 'Extension · In place',
        title: 'Drag an address anywhere and get it standardized',
        alt: 'Dragging an address inside a work system shows the standardized form beside it',
        goal: 'Work without switching windows.',
        actions: [
          'Install the [[browser extension]] from the GitHub repository.',
          'Select an address on your work screen.',
          'Click the standardized form that appears to copy it.',
        ],
        stuck: [
          { when: 'Installation is blocked', then: 'Agency machines often restrict extensions. Ask your security team, or just use the web app.' },
        ],
      },
    },
    {
      no: 4, svg: 'r1-4-lexdiff.svg',
      ko: {
        crumb: 'lexdiff · 조례 비교',
        title: '조례 개정 전후를 나란히 비교합니다',
        alt: '조례 개정 전후 조문을 나란히 놓고 바뀐 줄을 색으로 표시한 화면',
        goal: '개정 대비표를 만들 때 눈으로 대조하던 일을 없앱니다.',
        actions: [
          '[[lexdiff.gomdori.app]] 을 엽니다.',
          '자치법규정보시스템에서 [[개정 전 조문]]을 복사해 왼쪽에 붙여넣습니다.',
          '[[개정 후 조문]]을 오른쪽에 붙여넣습니다.',
          '색이 들어온 줄만 확인해 [[개정 대비표]]에 옮깁니다.',
        ],
        stuck: [
          { when: '표가 깨져서 붙어요', then: '조문 본문만 붙여넣으세요. 표나 별표는 따로 비교하는 편이 정확합니다.' },
          { when: '전부 바뀐 것으로 나와요', then: '줄바꿈 위치가 다르면 그렇게 보입니다. 양쪽을 같은 방식으로 정리해 다시 붙여넣으세요.' },
        ],
        note: '결과를 그대로 결재에 쓰지 말고, 바뀐 줄을 원문과 한 번 대조하세요. 도구는 초안까지입니다.',
      },
      en: {
        crumb: 'lexdiff · Statutes',
        title: 'Compare an ordinance before and after amendment',
        alt: 'Before and after articles side by side with changed lines highlighted',
        goal: 'Replace line-by-line visual comparison when preparing amendment tables.',
        actions: [
          'Open [[lexdiff.gomdori.app]].',
          'Paste the [[previous text]] on the left.',
          'Paste the [[amended text]] on the right.',
          'Carry only the highlighted lines into your amendment table.',
        ],
        stuck: [
          { when: 'Everything shows as changed', then: 'Line breaks differ. Normalize both sides and paste again.' },
        ],
      },
    },
    {
      no: 5, svg: 'r1-5-ontology.svg',
      ko: {
        crumb: '온톨로지 · 제도 시각화',
        title: '복잡한 제도를 그림 한 장으로 봅니다',
        alt: '복지 제도를 지식그래프로 그려 제도 사이 관계를 보여 주는 화면',
        goal: '표로 설명하기 어려운 제도 관계를 그림으로 봅니다. 설명 자료의 본보기입니다.',
        actions: [
          '[[chris.gomdori.app/welfare]] 를 엽니다.',
          '가운데 큰 점에서 바깥으로 갈수록 [[구체적인 사업]]입니다.',
          '점을 눌러 [[이어진 것만]] 남겨 봅니다 — 설명할 범위를 좁힐 수 있습니다.',
          '국가 제도판은 [[chris.gomdori.app/korea100]] 에서 같은 방식으로 봅니다.',
        ],
        stuck: [
          { when: '점이 너무 많아 복잡해요', then: '가운데에서 한 단계씩만 펼쳐 보세요. 전부 펼치면 누구도 못 읽습니다.' },
        ],
        note: '우리 부서 사업으로 같은 그림을 만들면 주민 설명회나 신규 직원 교육에 그대로 쓸 수 있습니다. 만드는 법은 「행정업무 자동화」 과정에서 다룹니다.',
      },
      en: {
        crumb: 'Ontology · Visualization',
        title: 'See a complex system as one picture',
        alt: 'Welfare programmes drawn as a knowledge graph',
        goal: 'View relationships that tables cannot show. Use it as a model for your own material.',
        actions: [
          'Open [[chris.gomdori.app/welfare]].',
          'The centre is the broad category; outer nodes are concrete programmes.',
          'Click a node to keep only what connects to it.',
        ],
        stuck: [
          { when: 'Too many nodes', then: 'Expand one level at a time.' },
        ],
      },
    },
  ],
};

/* ══════════════ 2단계 · AI 에 공공데이터 붙이기 ══════════════ */
const t2 = {
  file: 'ref-02-walk.js',
  ko: {
    title: '2단계 따라하기 · AI 에 공공데이터 도구 연결하기',
    lead: '**소요 30분 · Claude 데스크톱 앱이 필요합니다.**\n\n이 사례의 핵심입니다. 연결해 두면 AI 가 법제처·KOSIS·KIPRIS 같은 공공 데이터를 **직접 조회해서 출처와 함께** 답합니다. 기억에 의존한 답과 조회한 답은 업무에서 쓸 수 있느냐가 갈립니다.\n\n> **개인정보와 대외비는 넣지 마세요.** 외부에 공개된 서버입니다. 공개 자료 조회에만 씁니다.',
    flow: ['설정에서 커넥터 열기', '주소 하나 넣기', '다섯 개 확인', '터미널 방식', '대구 업무로 묻기', '질문 목록 챙기기'],
    done: [
      'AI 가 공공데이터를 직접 조회해 출처와 함께 답합니다.',
      '내 부서에서 바로 쓸 질문 다섯 개를 손에 넣었습니다.',
      '수치는 늘 원 출처에서 한 번 더 대조하는 습관을 들이세요.',
    ],
  },
  en: {
    title: 'Step 2 Hands-on — Connect Public Data to Your AI',
    lead: '**30 minutes. You need the Claude desktop app.**\n\nThis is the heart of the case. Once connected, the AI queries public data directly and answers **with sources**.',
    flow: ['Open connectors', 'Add one address', 'Verify five', 'Terminal option', 'Ask about Daegu', 'Keep the questions'],
    done: [
      'Your AI now queries public data and cites sources.',
      'You have five questions ready for your own work.',
      'Always re-check figures against the original source.',
    ],
  },
  steps: [
    {
      no: 1, svg: 'r2-1-settings.svg',
      ko: {
        crumb: 'Claude · 설정',
        title: '설정에서 커넥터 화면을 엽니다',
        alt: 'Claude 데스크톱 앱 설정에서 커넥터 화면을 연 모습',
        goal: '공공데이터를 붙일 자리를 찾습니다. 설치 파일을 만질 필요가 없습니다.',
        actions: [
          'Claude 데스크톱 앱을 엽니다.',
          '[[설정(Settings)]] 으로 들어갑니다.',
          '[[커넥터(Connectors)]] 항목을 고릅니다.',
          '[[커스텀 커넥터 추가]] 를 누릅니다.',
        ],
        stuck: [
          { when: '커넥터 항목이 없어요', then: '앱이 오래된 판입니다. 앱을 최신으로 올리면 나타납니다.' },
          { when: '웹 브라우저로 쓰고 있어요', then: '이 방법은 데스크톱 앱 기준입니다. 터미널을 쓰는 방법은 4번에 있습니다.' },
        ],
      },
      en: {
        crumb: 'Claude · Settings',
        title: 'Open the connectors screen',
        alt: 'The connectors screen inside Claude desktop settings',
        goal: 'Find where external data sources attach. No config files involved.',
        actions: [
          'Open the Claude desktop app.',
          'Go to [[Settings]].',
          'Choose [[Connectors]].',
          'Click [[Add custom connector]].',
        ],
        stuck: [
          { when: 'There is no Connectors item', then: 'Update the app; it appears in recent versions.' },
        ],
      },
    },
    {
      no: 2, svg: 'r2-2-add-connector.svg',
      ko: {
        crumb: 'Claude · 커넥터 추가',
        title: '이름과 주소를 넣어 하나를 붙입니다',
        alt: '커스텀 커넥터에 이름과 주소를 입력하는 화면',
        goal: '먼저 하나만 붙여 봅니다. 되는 것을 본 뒤에 나머지를 넣습니다.',
        actions: [
          '[[이름]] 칸에 내가 알아볼 말을 적습니다 — 예: `법령 검색`.',
          '[[주소]] 칸에 `https://mcp.gomdori.app/law` 를 붙여넣습니다. 손으로 치지 말고 복사합니다.',
          '[[추가]] 를 누릅니다.',
        ],
        stuck: [
          { when: '추가가 안 눌려요', then: '주소가 https:// 로 시작하는지 보세요. 앞뒤 공백이 들어가도 막힙니다.' },
          { when: '추가했는데 꺼짐으로 나와요', then: '주소 오타이거나 서버 점검 중입니다. 주소를 다시 복사해 넣어 보세요.' },
        ],
        note: '주소가 안 붙으면 각 프로젝트 GitHub 저장소의 README 에 최신 주소가 있습니다. 공개 서버라 개편으로 주소가 바뀔 수 있습니다.',
      },
      en: {
        crumb: 'Claude · Add connector',
        title: 'Enter a name and an address',
        alt: 'Entering a connector name and address',
        goal: 'Attach one first. Add the rest once you see it work.',
        actions: [
          'Give it a name you will recognize.',
          'Paste `https://mcp.gomdori.app/law` as the address — copy, do not retype.',
          'Press [[Add]].',
        ],
        stuck: [
          { when: 'It shows as off', then: 'Either a typo in the address or the server is down. Re-paste the address.' },
        ],
      },
    },
    {
      no: 3, svg: 'r2-3-five-servers.svg',
      ko: {
        crumb: 'Claude · 목록 확인',
        title: '필요한 서버를 골라 다 붙입니다',
        alt: '공공데이터 서버 다섯 개가 모두 연결된 커넥터 목록',
        goal: '내 업무에 쓰는 것만 골라 붙입니다. 다섯 개를 다 넣을 필요는 없습니다.',
        actions: [
          '같은 방법으로 나머지를 넣습니다 — 통계 `/stats`, 특허 `/patent`, 건축HUB `/archhub`, 학교알리미 `/school`.',
          '모두 [[연결됨]] 으로 뜨는지 확인합니다.',
          '꺼짐으로 뜨는 것은 [[주소를 다시]] 확인합니다.',
        ],
        stuck: [
          { when: '어떤 걸 붙여야 할지 모르겠어요', then: '법령과 통계 두 개면 대부분의 부서에 충분합니다. 나머지는 필요할 때 추가하세요.' },
          { when: '연결됨인데 조회가 안 돼요', then: '질문에 어떤 자료가 필요한지 분명히 적으세요. "법령에서 찾아서" 처럼 도구를 지목하면 확실합니다.' },
        ],
      },
      en: {
        crumb: 'Claude · Verify',
        title: 'Add the servers your work needs',
        alt: 'Five public-data connectors all showing as connected',
        goal: 'Attach only what you will use. Five is not required.',
        actions: [
          'Repeat for statistics, patents, building data, and school info.',
          'Check each one shows [[connected]].',
          'Re-check the address for any that shows as off.',
        ],
        stuck: [
          { when: 'I do not know which to add', then: 'Law and statistics cover most teams. Add others when needed.' },
        ],
      },
    },
    {
      no: 4, svg: 'r2-4-terminal.svg',
      ko: {
        crumb: 'Claude Code · 터미널',
        title: '터미널을 쓴다면 한 줄씩 붙여넣습니다',
        alt: '터미널에서 명령 한 줄씩으로 공공데이터 서버를 붙이고 확인하는 화면',
        goal: '화면에서 하나씩 넣는 대신 명령으로 붙입니다. 앞 단계를 했다면 건너뛰어도 됩니다.',
        actions: [
          '터미널에 `claude mcp add --transport http 이름 주소` 형태로 한 줄씩 붙여넣습니다.',
          '다섯 줄을 다 넣었으면 `claude mcp list` 로 확인합니다.',
          '각 줄에 [[Connected]] 가 뜨는지 봅니다.',
        ],
        stuck: [
          { when: 'claude 명령을 못 찾는대요', then: 'Claude Code 가 설치되어 있어야 합니다. 데스크톱 앱만 쓴다면 이 단계는 건너뛰세요.' },
          { when: 'Connected 가 안 떠요', then: '주소를 복사해 다시 넣고, 그래도 안 되면 서버 점검일 수 있으니 잠시 뒤 다시 해 보세요.' },
        ],
      },
      en: {
        crumb: 'Claude Code · Terminal',
        title: 'Or attach them from the terminal',
        alt: 'Terminal commands adding public-data servers and listing them',
        goal: 'A command-line alternative. Skip it if the previous steps worked.',
        actions: [
          'Paste one `claude mcp add` line per server.',
          'Run `claude mcp list` to check.',
          'Confirm each line reports [[Connected]].',
        ],
        stuck: [
          { when: 'The claude command is not found', then: 'Claude Code must be installed. Skip this if you only use the desktop app.' },
        ],
      },
    },
    {
      no: 5, svg: 'r2-5-ask-daegu.svg',
      ko: {
        crumb: '활용 · 대구 업무로',
        title: '대구 업무 질문을 실제로 던져 봅니다',
        alt: '연결한 통계 도구로 대구 청년 고용률을 출처와 함께 받은 화면',
        goal: '연결이 실제로 도는지, 출처가 붙는지 확인합니다.',
        actions: [
          '대화창에 [[최근 3년 대구광역시 청년 고용률을 출처와 함께 표로 정리해 줘]] 라고 칩니다.',
          '답 첫머리에 [[어느 도구를 썼는지]] 나오는지 봅니다.',
          '맨 아래 [[출처]] 줄이 붙어 있는지 봅니다.',
          '수치는 [[KOSIS 에서 한 번 더]] 대조합니다.',
        ],
        stuck: [
          { when: '도구를 안 쓰고 답해요', then: '"통계 커넥터로 조회해서 알려 줘" 처럼 도구를 지목하세요.' },
          { when: '출처가 없어요', then: '출처 없는 수치는 보고서에 쓰지 마세요. "출처를 함께 달아 줘" 라고 다시 시킵니다.' },
          { when: '수치가 이상해요', then: '기준 연도나 연령 범위가 다를 수 있습니다. "15~29세 기준으로" 처럼 조건을 붙여 다시 물어보세요.' },
        ],
        note: '"출처와 함께" 이 한마디가 보고서에 쓸 수 있는 답과 아닌 답을 가릅니다. 습관처럼 붙이세요.',
      },
      en: {
        crumb: 'Use · Daegu work',
        title: 'Ask a real question about your own city',
        alt: 'A statistics query about Daegu youth employment answered with sources',
        goal: 'Confirm the connection actually works and that sources are attached.',
        actions: [
          'Ask for three years of Daegu youth employment rates [[with sources]].',
          'Check the reply names [[which tool]] it used.',
          'Check a [[source]] line is attached.',
          'Verify the figures once against the original statistics portal.',
        ],
        stuck: [
          { when: 'It answers without using a tool', then: 'Name the tool: "Query the statistics connector."' },
          { when: 'There is no source', then: 'Never put unsourced figures in a report. Ask again for sources.' },
        ],
      },
    },
    {
      no: 6, svg: 'r2-6-questions.svg',
      ko: {
        crumb: '활용 · 질문 목록',
        title: '부서에서 바로 쓸 질문을 챙겨 둡니다',
        alt: '연결한 도구별로 바로 써먹을 수 있는 질문 다섯 가지 목록',
        goal: '오늘 배운 것을 내일도 쓰게 만듭니다. 질문 다섯 개를 메모에 저장합니다.',
        actions: [
          '다섯 질문에서 [[조문 번호 · 연도 · 주소 · 학교 이름]]만 내 업무로 바꿉니다.',
          '자주 쓸 것 [[두세 개]]를 메모장이나 즐겨찾기에 저장합니다.',
          '개인정보가 들어가는 질문은 [[하지 않습니다]].',
        ],
        stuck: [
          { when: '우리 업무에 맞는 질문이 없어요', then: '지금 손으로 찾고 있는 자료가 무엇인지 그대로 문장으로 적어 보세요. 그것이 질문입니다.' },
        ],
        note: '조회 결과를 결재 문서에 그대로 붙이지 마세요. 출처를 따라가 원 자료를 확인한 뒤에 쓰는 것이 원칙입니다.',
      },
      en: {
        crumb: 'Use · Question list',
        title: 'Keep the questions your team will reuse',
        alt: 'Five ready-made questions, one per connected tool',
        goal: 'Make today’s setup useful tomorrow.',
        actions: [
          'Swap in your own article numbers, years, addresses, and school names.',
          'Save the two or three you will reuse.',
          'Never include personal data in a question.',
        ],
        stuck: [
          { when: 'None of them fit my work', then: 'Write down what you are currently looking up by hand. That is your question.' },
        ],
      },
    },
  ],
};

/* ══════════════ 3단계 · 내 PC 에 설치 ══════════════ */
const t3 = {
  file: 'ref-03-walk.js',
  ko: {
    title: '3단계 따라하기 · 내 PC 에 설치해 쓰기',
    lead: '**소요 30분 · 설치가 필요합니다. 기관 보안 정책을 먼저 확인하세요.**\n\n여기부터는 **내 PC 안의 자료**를 다룹니다. 한글 공문서를 AI 가 읽을 수 있게 바꾸고, 예전 문서를 내용으로 찾습니다. 문서 작업이 특히 많은 부서에 맞습니다.\n\n> **부담스러우면 건너뛰어도 됩니다.** 1·2단계만으로도 충분한 부서가 많습니다.',
    flow: ['kordoc 설치', '공문서 변환', 'Docufinder 설치', '내용으로 찾기'],
    done: [
      '한글 공문서를 AI 가 읽을 수 있는 형식으로 바꿀 수 있습니다.',
      '파일 이름이 기억나지 않아도 내용으로 예전 문서를 찾을 수 있습니다.',
      '두 도구 모두 내 PC 안에서 돕니다 — 문서가 밖으로 나가지 않습니다.',
    ],
  },
  en: {
    title: 'Step 3 Hands-on — Install and Use Locally',
    lead: '**30 minutes. Installation required — check your agency policy first.**\n\nThese tools work on files on your own machine: converting Korean office documents so an AI can read them, and searching past documents by content.',
    flow: ['Install kordoc', 'Convert a document', 'Install Docufinder', 'Search by content'],
    done: [
      'You can convert Korean office documents into a form an AI can read.',
      'You can find past documents by their contents.',
      'Both run locally — the documents never leave your machine.',
    ],
  },
  steps: [
    {
      no: 1, svg: 'r3-1-kordoc-install.svg',
      ko: {
        crumb: 'kordoc · 설치와 변환',
        title: '한글 공문서를 마크다운으로 바꿉니다',
        alt: 'kordoc 을 설치하고 한글 공문서를 마크다운으로 바꾸는 터미널 화면',
        goal: 'AI 가 읽을 수 있는 형식으로 문서를 바꿉니다. HWP·HWPX·PDF·DOCX·XLSX 를 받습니다.',
        actions: [
          '터미널에 `npm i kordoc` 을 입력합니다. Node.js 가 먼저 깔려 있어야 합니다.',
          '바꿀 문서 파일을 [[한 폴더]]에 모읍니다.',
          '변환 명령의 [[파일 이름만]] 내 문서로 바꿔 실행합니다.',
          '만들어진 `.md` 파일을 열어 [[표가 제대로 나왔는지]] 봅니다.',
        ],
        stuck: [
          { when: 'npm 명령을 못 찾는대요', then: 'Node.js 를 먼저 설치해야 합니다. 기관 PC 라면 보안 담당 부서에 확인하세요.' },
          { when: '표가 깨져서 나와요', then: '복잡한 병합 셀은 완벽하지 않습니다. 표가 핵심인 문서는 결과를 한 번 손봐야 합니다.' },
          { when: '한글 파일이 안 열려요', then: '암호가 걸린 문서는 먼저 암호를 풀어야 합니다.' },
        ],
        note: '변환은 내 PC 안에서 이루어집니다. 문서가 외부로 나가지 않으므로 대외비 문서도 변환 자체는 안전합니다. 다만 변환 결과를 AI 에 붙여넣는 순간은 다릅니다.',
      },
      en: {
        crumb: 'kordoc · Install and convert',
        title: 'Convert Korean office documents to Markdown',
        alt: 'Installing kordoc and converting a Korean document in a terminal',
        goal: 'Put documents into a form an AI can read.',
        actions: [
          'Run `npm i kordoc`. Node.js must be installed first.',
          'Collect the documents into one folder.',
          'Run the convert command with your own filename.',
          'Open the resulting file and check the tables survived.',
        ],
        stuck: [
          { when: 'npm is not found', then: 'Install Node.js first, checking agency policy on agency machines.' },
        ],
      },
    },
    {
      no: 2, svg: 'r3-2-kordoc-use.svg',
      ko: {
        crumb: 'kordoc · AI 에 넘기기',
        title: '변환한 문서에서 필요한 것만 뽑아냅니다',
        alt: '변환한 시행계획 문서를 AI 에 붙여넣어 우리 과 과제만 표로 뽑아낸 화면',
        goal: '긴 계획 문서에서 우리 과가 맡은 부분만 골라 표로 만듭니다.',
        actions: [
          '변환한 내용을 [[통째로]] 붙여넣습니다.',
          '원하는 표의 [[칸을 정해]] 줍니다 — 예: 과제명 · 소관 · 기한 · 예산.',
          '결과에서 [[문서에 없는 값을 지어내지 않았는지]] 확인합니다.',
          '표를 [[엑셀]]에 붙여 우리 대장으로 씁니다.',
        ],
        stuck: [
          { when: '문서가 너무 길어서 안 들어가요', then: '장(章) 단위로 잘라 여러 번 나눠 넣으세요.' },
          { when: '없는 숫자를 만들어 내요', then: '"문서에 없는 값은 비워 둬" 를 조건으로 붙이세요. 붙이면 대개 지킵니다.' },
        ],
        note: '대외비 문서를 외부 AI 에 붙여넣지 마세요. 변환은 내 PC 에서 안전하지만, 붙여넣는 순간 외부로 나갑니다.',
      },
      en: {
        crumb: 'kordoc · Hand to the AI',
        title: 'Extract only what your team needs',
        alt: 'A converted plan pasted into the AI and returned as a filtered table',
        goal: 'Pull your own team’s tasks out of a long plan document.',
        actions: [
          'Paste the converted text in full.',
          'Specify the columns you want.',
          'Check nothing was invented that the document did not contain.',
          'Paste the table into a spreadsheet.',
        ],
        stuck: [
          { when: 'It invents numbers', then: 'Add the condition "leave blank anything not in the document".' },
        ],
        note: 'Never paste confidential documents into an external AI. Conversion is local; pasting is not.',
      },
    },
    {
      no: 3, svg: 'r3-3-docufinder.svg',
      ko: {
        crumb: 'Docufinder · 설치',
        title: '내 PC 문서를 내용으로 찾는 앱을 설치합니다',
        alt: 'Docufinder 를 받아 설치하고 찾아볼 폴더를 정하는 화면',
        goal: '파일 이름이 아니라 문서 안의 내용으로 찾게 만듭니다.',
        actions: [
          'GitHub 저장소 [[github.com/chrisryugj/Docufinder]] 에서 설치 파일을 받습니다.',
          '설치 후 [[찾아볼 폴더]]를 지정합니다 — 업무 폴더와 부서 공유 드라이브 폴더.',
          '처음 한 번 [[문서를 읽어 두는 시간]]을 기다립니다. 그다음부터는 즉시 찾습니다.',
        ],
        stuck: [
          { when: '설치가 막혀요', then: '기관 PC 는 외부 프로그램 설치가 제한됩니다. 보안 담당 부서에 먼저 확인하세요.' },
          { when: '읽어 두는 데 너무 오래 걸려요', then: '폴더를 좁히세요. 자주 찾는 최근 2~3년 폴더만 넣어도 충분합니다.' },
        ],
      },
      en: {
        crumb: 'Docufinder · Install',
        title: 'Install an app that searches inside your documents',
        alt: 'Downloading Docufinder and choosing folders to index',
        goal: 'Search by content instead of by filename.',
        actions: [
          'Download from the GitHub repository.',
          'Choose the folders to index.',
          'Wait once while it reads the documents.',
        ],
        stuck: [
          { when: 'Installation is blocked', then: 'Check with your security team first.' },
        ],
      },
    },
    {
      no: 4, svg: 'r3-4-search.svg',
      ko: {
        crumb: 'Docufinder · 찾기',
        title: '예전 기안문을 내용으로 찾아냅니다',
        alt: '문서 내용으로 예전 기안문과 시행계획을 찾아낸 검색 결과 화면',
        goal: '폴더를 뒤지는 대신, 기억나는 문장으로 바로 찾습니다.',
        actions: [
          '검색창에 [[문서에 있었던 문장]]을 그대로 칩니다 — 예: "경로당 냉난방 보수 기준".',
          '결과에서 [[문장 앞뒤]]를 보고 어느 문서인지 판단합니다.',
          '한글·PDF·엑셀이 [[한 목록]]에 나오는지 확인합니다.',
        ],
        stuck: [
          { when: '결과가 너무 많아요', then: '문장을 길게 치세요. 단어 하나보다 문구 하나가 훨씬 정확합니다.' },
          { when: '분명히 있는데 안 나와요', then: '그 폴더가 지정되어 있는지, 문서를 읽어 두는 작업이 끝났는지 확인하세요.' },
          { when: '스캔 문서라 글자가 없어요', then: 'OCR 기능을 켜면 스캔본도 찾습니다. 다만 읽어 두는 데 시간이 더 걸립니다.' },
        ],
        note: '예전 기안문에서 문구 하나를 찾으려고 폴더를 뒤지던 일이 없어집니다. 인사이동으로 인수인계받은 폴더에 특히 유용합니다.',
      },
      en: {
        crumb: 'Docufinder · Search',
        title: 'Find an old draft by what it said',
        alt: 'Search results finding past drafts and plans by their contents',
        goal: 'Search by a remembered phrase instead of digging through folders.',
        actions: [
          'Type a [[phrase that appeared in the document]].',
          'Judge from the surrounding text which file you want.',
          'Note that all file types appear in one list.',
        ],
        stuck: [
          { when: 'Too many results', then: 'Type a longer phrase. A phrase beats a single word.' },
          { when: 'It is a scan with no text', then: 'Turn on OCR; indexing then takes longer.' },
        ],
      },
    },
  ],
};

export default [t1, t2, t3];

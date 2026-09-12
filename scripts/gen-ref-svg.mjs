/**
 * 참고사이트 「직접 따라 해보기」 단계 화면 그림 생성기.
 *
 * 광진구 류승인 주무관이 공개한 도구 12종을 대구시 공무원이 그대로 따라 할 수 있도록,
 * 실제로 보게 될 화면을 단계별로 그린다. 예시 자료는 모두 대구 업무 상황으로 바꿨다.
 *
 * 그림 부품은 scripts/lib/step-svg-kit.mjs 에 있다.
 * 실행: node scripts/gen-ref-svg.mjs
 */
import {
  setOutDir, made, P, box,
  C, t, r, line, hl, pin, pillNote, btn, btnBlue, input, badge,
  sheet, editor, chat, dialog, docForm, checklist, cards, wire, slide,
  terminal, settings, diffPanes, graph, results,
} from './lib/step-svg-kit.mjs';

setOutDir('public/reference/steps');

/* ══════════════════════════════════════════════════════════
   1단계 · 설치 없이 브라우저에서 바로 열어보기
   ══════════════════════════════════════════════════════════ */

/* 1-1 포트폴리오에서 도구 훑기 */
{
  const k = cards([
    { title: '법령 · 조례', desc: ['korean-law-mcp', 'lexdiff'], fill: '#EAF4FF' },
    { title: '통계 · 특허', desc: ['korean-stats-mcp', 'korean-patent-mcp'], fill: '#FFF4E6' },
    { title: '문서 처리', desc: ['kordoc', 'Docufinder'], fill: '#EAF7EE' },
    { title: '주소 · 시각화', desc: ['gjdong', '온톨로지 그래프'], fill: '#F3EEFF' },
  ], { x: 50, y: 140, w: 880, h: 124 });
  P({
    file: 'r1-1-portfolio.svg',
    alt: '1단계 1번 — 포트폴리오 사이트에서 도구 12종을 갈래별로 훑어보는 화면',
    url: 'chris.gomdori.app', frameH: 340,
    body: t(50, 100, '류승인 주무관 공개 도구 12종', { size: 17, fill: '#0D2740', w: 700 })
      + t(50, 122, '설치 없이 브라우저에서 바로 쓸 수 있는 것부터 봅니다', { size: 12.5, fill: C.dim })
      + k.s
      + hl(50, 140, 205, 124) + hl(275, 140, 205, 124) + hl(500, 140, 205, 124) + hl(725, 140, 205, 124)
      + pillNote(50, 288, 780, '오늘은 이 중 브라우저에서 바로 되는 것만 봅니다 — 설치는 3단계에서'),
    legends: [
      '법령·조례 — 우리 시 조례를 자주 찾는 부서라면 여기부터 본다',
      '통계·특허 — 보고서에 수치를 자주 넣는 부서에 맞는다',
      '문서 처리 — 한글 공문서가 많은 부서용. 설치가 필요해 3단계에서 다룬다',
      '주소·시각화 — 민원 주소가 제각각인 부서라면 바로 다음 단계로',
    ],
  });
}

/* 1-2 gjdong 으로 대구 민원 주소 정리 */
{
  const before = ['대구 수성구 범어동 1234-5', '대구광역시 중구 동인동1가 2', '달서구 월성동 삼성래미안 101동'];
  const after = ['대구광역시 수성구 달구벌대로 2400', '대구광역시 중구 국채보상로 100', '대구광역시 달서구 월배로 50'];
  let s = t(50, 96, '주소를 붙여넣으면 표준주소로 정리됩니다', { size: 15, fill: C.ink2, w: 700 });
  s += r(50, 116, 420, 118, { rx: 8, fill: '#FFFFFF', stroke: C.headLine })
    + t(64, 138, '붙여넣은 주소 (민원 서식에서 그대로)', { size: 11.5, fill: C.dim, w: 700 });
  before.forEach((b, i) => s += t(64, 164 + i * 22, b, { size: 12.5, fill: C.ink2 }));
  s += t(492, 180, '›', { size: 26, fill: '#9AA0A6', a: 'middle', w: 700 });
  s += r(514, 116, 416, 118, { rx: 8, fill: '#F6FBF7', stroke: '#BFE3C9' })
    + t(528, 138, '정리된 표준주소', { size: 11.5, fill: C.green, w: 700 });
  after.forEach((a, i) => s += t(528, 164 + i * 22, a, { size: 12.5, fill: C.ink2 }));
  s += btnBlue(50, 252, 150, '표준주소로 정리', { h: 38, size: 13 })
    + btn(212, 252, 130, '결과 복사', { h: 38, size: 13 });
  P({
    file: 'r1-2-gjdong.svg',
    alt: '1단계 2번 — gjdong 웹앱에 대구 민원 주소를 붙여넣어 표준주소로 정리한 화면',
    url: 'gjdong.vercel.app', frameH: 330,
    body: s
      + box([50, 116, 420, 118], 1, 'left')
      + box([50, 252, 150, 38], 2, 'bottom')
      + box([514, 116, 416, 118], 3, 'right'),
    legends: [
      '민원 서식에서 긁어온 주소를 그대로 붙여넣는다 — 줄 수가 많아도 된다',
      '정리 버튼을 한 번 누른다. 몇 백 건도 몇 초면 끝난다',
      '도로명 기준 표준주소가 나온다. 복사해서 우리 대장 시트에 붙이면 된다',
    ],
  });
}

/* 1-3 확장프로그램으로 어느 화면에서나 */
{
  let s = r(50, 92, 880, 40, { rx: 8, fill: '#F3F5F8', stroke: C.headLine })
    + t(66, 117, '새올행정시스템 · 민원 상세', { size: 12.5, fill: C.dim2, w: 700 })
    + r(50, 148, 880, 150, { rx: 8, fill: '#FFFFFF', stroke: C.headLine })
    + t(70, 178, '신청인 주소', { size: 12.5, fill: C.dim, w: 700 })
    + r(160, 162, 330, 22, { fill: '#FDECC8' })
    + t(168, 178, '대구 수성구 범어동 1234-5 삼성아파트 2동', { size: 12.5, fill: C.ink2 })
    + t(70, 212, '연락처', { size: 12.5, fill: C.dim, w: 700 })
    + t(160, 212, '053-***-1234', { size: 12.5, fill: C.ink2 })
    + t(70, 246, '신청 내용', { size: 12.5, fill: C.dim, w: 700 })
    + t(160, 246, '보도블록 파손 보수 요청', { size: 12.5, fill: C.ink2 });
  // 드래그하면 뜨는 작은 풍선
  s += r(500, 192, 300, 74, { rx: 8, fill: '#FFFFFF', stroke: C.blue, sw: 1.4 })
    + t(516, 214, 'gjdong — 표준주소', { size: 11.5, fill: C.blue2, w: 700 })
    + t(516, 238, '대구광역시 수성구 달구벌대로 2400', { size: 12.5, fill: C.ink2 })
    + t(516, 256, '복사하려면 클릭', { size: 11, fill: C.dim });
  P({
    file: 'r1-3-extension.svg',
    alt: '1단계 3번 — 브라우저 확장으로 업무 화면에서 주소를 드래그해 바로 표준주소를 얻는 화면',
    url: '업무 시스템 화면 (예시)', frameH: 340,
    body: s
      + box([160, 162, 330, 22], 1, 'left')
      + box([500, 192, 300, 74], 2, 'right')
      + pillNote(50, 300, 700, '확장은 크롬 웹스토어가 아니라 GitHub 에서 받아 직접 설치한다')
      + pin(776, 315, 3),
    legends: [
      '업무 화면에서 주소를 마우스로 긁는다 — 다른 창으로 옮길 필요가 없다',
      '바로 옆에 표준주소가 뜬다. 클릭하면 복사된다',
      '설치 방법은 GitHub 저장소 설명에 있다. 기관 보안 정책을 먼저 확인한다',
    ],
  });
}

/* 1-4 lexdiff 로 조례 개정 전후 비교 */
{
  const d = diffPanes(
    '개정 전 — 대구광역시 ○○ 조례 제12조',
    [{ text: '① 시장은 매년 시행계획을 수립한다.' },
     { text: '② 계획에는 다음 사항을 포함한다.' },
     { text: '   1. 사업 목표와 추진 방향' },
     { text: '   2. 소요 재원의 조달 방안', mark: true },
     { text: '③ 시장은 계획을 공고하여야 한다.' }],
    '개정 후 — 같은 조',
    [{ text: '① 시장은 매년 시행계획을 수립한다.' },
     { text: '② 계획에는 다음 사항을 포함한다.' },
     { text: '   1. 사업 목표와 추진 방향' },
     { text: '   2. 소요 재원의 조달 및 집행 계획', mark: true },
     { text: '   3. 성과지표와 점검 방법', mark: true },
     { text: '③ 시장은 계획을 공고하여야 한다.' }],
    { x: 50, y: 116, w: 880 });
  P({
    file: 'r1-4-lexdiff.svg',
    alt: '1단계 4번 — lexdiff 로 조례 개정 전후 조문을 나란히 비교한 화면',
    url: 'lexdiff.gomdori.app', frameH: 340,
    body: t(50, 100, '개정 전후를 나란히 놓고 바뀐 줄만 색으로 표시합니다', { size: 14.5, fill: C.ink2, w: 700 })
      + d.s
      + box(d.pane(0), 1, 'left')
      + box([460, 178, 470, 26], 2, 'right')
      + box([460, 204, 470, 26], 3, 'right'),
    legends: [
      '왼쪽에 개정 전 조문을 붙여넣는다. 자치법규정보시스템에서 긁어 오면 된다',
      '문구가 바뀐 줄은 양쪽에 색으로 표시된다 — 눈으로 대조하던 일이 없어진다',
      '새로 생긴 호는 오른쪽에만 색이 들어온다. 개정 대비표 작성에 그대로 쓴다',
    ],
  });
}

/* 1-5 온톨로지 시각화 */
{
  const g = graph([
    { x: 490, y: 240, label: '복지', kind: 'root' },
    { x: 260, y: 176, label: '아동', kind: 'mid' },
    { x: 260, y: 302, label: '노인', kind: 'mid' },
    { x: 720, y: 176, label: '장애', kind: 'mid' },
    { x: 720, y: 302, label: '소득', kind: 'mid' },
    { x: 104, y: 148, label: '돌봄', kind: 'leaf' },
    { x: 104, y: 216, label: '급식', kind: 'leaf' },
    { x: 104, y: 336, label: '경로당', kind: 'leaf' },
    { x: 876, y: 148, label: '활동지원', kind: 'leaf' },
    { x: 876, y: 336, label: '기초연금', kind: 'leaf' },
  ], [[0,1],[0,2],[0,3],[0,4],[1,5],[1,6],[2,7],[3,8],[4,9]]);
  P({
    file: 'r1-5-ontology.svg',
    alt: '1단계 5번 — 복지 제도를 지식그래프로 그린 온톨로지 시각화 화면',
    url: 'chris.gomdori.app/welfare', frameH: 452,
    body: t(50, 96, '복지 제도 지식그래프 — 제도 사이의 관계를 그림으로', { size: 14.5, fill: C.ink2, w: 700 })
      + g.s
      + box([460, 210, 60, 60], 1, 'top')
      + box([232, 148, 56, 56], 2, 'top')
      + pillNote(50, 392, 720, '주민 설명회 자료나 신규 직원 교육에 이런 그림 한 장이 표 열 장보다 낫다')
      + pin(796, 407, 3),
    legends: [
      '가운데가 큰 갈래, 바깥으로 갈수록 구체적인 사업이다',
      '점을 누르면 그 제도와 이어진 것만 남는다 — 설명할 범위를 좁힐 수 있다',
      '우리 부서 사업으로 같은 그림을 만들면 설명이 훨씬 쉬워진다',
    ],
  });
}

/* ══════════════════════════════════════════════════════════
   2단계 · AI 에 공공데이터 도구(MCP) 연결하기
   ══════════════════════════════════════════════════════════ */

/* 2-1 설정 → 커넥터 */
{
  const st = settings('설정', [
    { name: '연결된 커넥터가 없습니다', desc: '공공데이터를 조회하려면 커넥터를 추가하세요', on: false },
  ], { x: 60, y: 96, w: 880, nav: ['일반', '프로필', '커넥터', '계정'], navOn: 2, action: '커스텀 커넥터 추가' });
  P({
    file: 'r2-1-settings.svg',
    alt: '2단계 1번 — Claude 데스크톱 앱 설정에서 커넥터 화면을 연 모습',
    url: null, frameH: 320,
    body: st.s
      + box([68, 198, 174, 30], 1, 'bottom')
      + box(st.item(0), 2, 'right')
      + box(st.actionBox(), 3, 'bottom'),
    legends: [
      '앱 오른쪽 위 설정을 열고 커넥터 항목으로 들어간다',
      '처음에는 비어 있다. 여기에 공공데이터 서버를 하나씩 붙인다',
      '커스텀 커넥터 추가를 누른다 — 다음 단계에서 주소를 넣는다',
    ],
  });
}

/* 2-2 커넥터 하나 추가 */
{
  const d = dialog('커스텀 커넥터 추가', [], { x: 230, y: 100, w: 540, icon: 'info',
    buttons: [{ label: '취소' }, { label: '추가', primary: true }] });
  const body = d.s
    + input(254, 176, 492, '이름 (내가 알아볼 이름)', '법령 검색')
    + input(254, 240, 492, '주소 (서버가 알려 준 그대로)', 'https://mcp.gomdori.app/law', { mono: true });
  P({
    file: 'r2-2-add-connector.svg',
    alt: '2단계 2번 — 커스텀 커넥터에 이름과 주소를 입력하는 화면',
    url: null, frameH: 360,
    body: body
      + box([254, 176, 492, 34], 1, 'right')
      + box([254, 240, 492, 34], 2, 'right')
      + box(d.btn(1), 3, 'bottom'),
    legends: [
      '이름은 내가 알아볼 말로 적으면 된다 — 법령 검색, 통계 조회 처럼',
      '주소는 한 글자도 틀리면 안 된다. 복사해서 붙여넣는다',
      '추가를 누르면 목록에 들어간다. 나머지 네 개도 같은 방법으로 넣는다',
    ],
  });
}

/* 2-3 다섯 개 다 붙인 목록 */
{
  const st = settings('설정', [
    { name: '법령 검색', desc: 'https://mcp.gomdori.app/law', on: true },
    { name: '통계 조회', desc: 'https://mcp.gomdori.app/stats', on: true },
    { name: '특허 검색', desc: 'https://mcp.gomdori.app/patent', on: true },
    { name: '건축HUB', desc: 'https://mcp.gomdori.app/archhub', on: true },
    { name: '학교알리미', desc: 'https://mcp.gomdori.app/school', on: true },
  ], { x: 60, y: 96, w: 880, nav: ['일반', '프로필', '커넥터', '계정'], navOn: 2, rh: 50 });
  P({
    file: 'r2-3-five-servers.svg',
    alt: '2단계 3번 — 공공데이터 서버 다섯 개가 모두 연결된 커넥터 목록 화면',
    url: null, frameH: 420,
    body: st.s
      + box(st.item(0), 1, 'top')
      + box([st.listX + st.listW - 84, 108, 68, 24], 2, 'right')
      + box([st.listX, 96, st.listW, 5 * 58 - 8], 3, 'bottom', 4),
    legends: [
      '이름과 주소가 짝이 맞는지 한 번 훑는다. 주소가 틀리면 조회가 안 된다',
      '연결됨 표시가 붙어야 쓸 수 있다. 꺼짐이면 주소를 다시 본다',
      '다섯 개를 다 넣을 필요는 없다. 내 업무에 쓰는 것만 골라도 된다',
    ],
  });
}

/* 2-4 터미널로 한 번에 */
{
  const tm = terminal([
    { text: 'claude mcp add --transport http korean-law    https://mcp.gomdori.app/law', kind: 'cmd' },
    { text: 'Added HTTP MCP server korean-law', kind: 'ok' },
    { text: 'claude mcp add --transport http korean-stats  https://mcp.gomdori.app/stats', kind: 'cmd' },
    { text: 'Added HTTP MCP server korean-stats', kind: 'ok' },
    { text: 'claude mcp list', kind: 'cmd' },
    { text: 'korean-law     https://mcp.gomdori.app/law      ✓ Connected', kind: 'ok' },
    { text: 'korean-stats   https://mcp.gomdori.app/stats    ✓ Connected', kind: 'ok' },
  ], { x: 50, y: 96, w: 880, title: 'Claude Code · 터미널' });
  P({
    file: 'r2-4-terminal.svg',
    alt: '2단계 4번 — 터미널에서 명령 한 줄씩으로 공공데이터 서버를 붙이는 화면',
    url: null, frameH: 330,
    body: t(50, 84, '화면에서 하나씩 넣는 대신, 터미널에 붙여넣어도 됩니다', { size: 13, fill: C.dim2 })
      + tm.s
      + box([64, tm.lineY(0) - 15, 850, 20], 1, 'right', 5)
      + box([64, tm.lineY(4) - 15, 300, 20], 2, 'right', 5)
      + box([64, tm.lineY(5) - 15, 620, 42], 3, 'bottom', 5),
    legends: [
      '한 줄이 서버 하나다. 이름과 주소만 바꿔 다섯 번 붙여넣으면 된다',
      'claude mcp list 로 지금 붙어 있는 것을 확인한다',
      'Connected 가 떠야 연결된 것이다. 안 뜨면 주소 오타이거나 서버 점검 중이다',
    ],
  });
}

/* 2-5 대구 업무로 물어보기 */
{
  const c = chat([
    { who: 'me', lines: [
      '최근 3년 대구광역시 청년 고용률을 출처와 함께 표로 정리해 줘.',
    ] },
    { who: 'ai', lines: [
      '통계 조회 도구로 KOSIS 를 조회했습니다.',
      '',
      '연도      대구광역시 청년(15~29세) 고용률',
      '2023          (조회된 수치)',
      '2024          (조회된 수치)',
      '2025          (조회된 수치)',
      '',
      '출처 — 통계청 경제활동인구조사, KOSIS 자료 조회일 표기',
    ] },
  ], { x: 50, y: 104, w: 880, tool: 'Claude · 통계 조회 커넥터 사용 중' });
  P({
    file: 'r2-5-ask-daegu.svg',
    alt: '2단계 5번 — 연결한 통계 도구로 대구 청년 고용률을 출처와 함께 받은 화면',
    url: null, frameH: 420,
    body: c.s
      + box([140, 104, 790, 46], 1, 'tr')
      + box([50, 180, 880, 26], 2, 'right')
      + box([50, 300, 880, 26], 3, 'right'),
    legends: [
      '"출처와 함께" 를 반드시 붙인다 — 이 한마디가 보고서에 쓸 수 있는 답과 아닌 답을 가른다',
      '어느 도구를 썼는지 먼저 밝히는지 본다. 도구를 안 쓰면 기억으로 답한 것이라 못 믿는다',
      '출처 줄이 붙어 있는지 확인하고, 수치는 KOSIS 에서 한 번 더 대조한다',
    ],
  });
}

/* 2-6 업무별 질문 예시 */
{
  const c = checklist('내 부서에서 바로 써먹을 질문', [
    { text: '지방공무원 복무규정에서 연가 관련 조문을 원문과 함께 알려 줘', checked: true, tag: '법령', kind: 'info' },
    { text: '최근 3년 대구 청년 고용률을 출처와 함께 표로 정리해 줘', checked: true, tag: '통계', kind: 'info' },
    { text: '이 주소의 건축물대장에서 용도·연면적·사용승인일을 알려 줘', checked: true, tag: '건축', kind: 'info' },
    { text: '대구 ○○중학교 이번 달 급식 식단과 학사일정을 정리해 줘', checked: true, tag: '학교', kind: 'info' },
    { text: '스마트 가로등 관련 최근 특허 출원 동향을 정리해 줘', checked: true, tag: '특허', kind: 'info' },
  ], { x: 60, y: 104, w: 880, rh: 46 });
  P({
    file: 'r2-6-questions.svg',
    alt: '2단계 6번 — 연결한 도구별로 바로 써먹을 수 있는 질문 다섯 가지',
    url: null, frameH: 404,
    body: c.s
      + box([60, 122, 880, 92], 1, 'left')
      + box([60, 214, 880, 92], 2, 'left')
      + pillNote(60, 356, 800, '개인정보·대외비는 넣지 않는다 — 공개된 외부 서버다. 공개 자료 조회에만 쓴다')
      + pin(896, 371, 3),
    legends: [
      '법령·통계는 오늘 바로 쓸 수 있다. 조문 번호나 연도만 내 업무로 바꾸면 된다',
      '건축·학교는 담당 부서에서 특히 유용하다. 주소나 학교 이름만 넣는다',
      '질문에 개인정보를 섞지 않는다. 이름·주민번호·연락처가 들어가면 그 질문은 하지 않는다',
    ],
  });
}

/* ══════════════════════════════════════════════════════════
   3단계 · 내 PC 에 설치해 쓰기
   ══════════════════════════════════════════════════════════ */

/* 3-1 kordoc 설치 */
{
  const tm = terminal([
    { text: 'npm i kordoc', kind: 'cmd' },
    { text: 'added 1 package in 6s', kind: 'ok' },
    { text: 'npx kordoc convert "대구시_시행계획_2026.hwp" -o 계획.md', kind: 'cmd' },
    { text: '변환 완료 — 계획.md (표 4개, 이미지 2개 포함)', kind: 'ok' },
  ], { x: 50, y: 100, w: 880, title: 'Windows PowerShell' });
  P({
    file: 'r3-1-kordoc-install.svg',
    alt: '3단계 1번 — kordoc 을 설치하고 한글 공문서를 마크다운으로 바꾸는 터미널 화면',
    url: null, frameH: 300,
    body: t(50, 88, '한글 공문서를 AI 가 읽을 수 있는 형식으로 바꿉니다', { size: 13.5, fill: C.ink2, w: 700 })
      + tm.s
      + box([64, tm.lineY(0) - 15, 300, 20], 1, 'right', 5)
      + box([64, tm.lineY(2) - 15, 700, 20], 2, 'bottom', 5),
    legends: [
      '설치는 한 줄이면 끝난다. Node.js 가 먼저 깔려 있어야 한다',
      '바꿀 문서 이름만 내 파일로 바꿔 넣는다. HWP·HWPX·PDF·DOCX·XLSX 를 받는다',
    ],
  });
}

/* 3-2 변환 결과를 AI 에 넘기기 */
{
  const c = chat([
    { who: 'me', lines: [
      '(계획.md 붙여넣기)',
      '이 시행계획에서 우리 과가 맡은 과제만 골라 표로 정리해 줘.',
      '과제명 · 소관 · 기한 · 예산 네 칸으로.',
    ] },
    { who: 'ai', lines: [
      '과제명                        소관        기한        예산',
      '경로당 냉난방 개선            복지정책과   6월 말      (문서 수치)',
      '어르신 일자리 확대            복지정책과   연중        (문서 수치)',
      '복지관 시설 점검              복지정책과   분기별      (문서 수치)',
      '',
      '문서에 적히지 않은 항목은 비워 두었습니다.',
    ] },
  ], { x: 50, y: 104, w: 880, tool: 'Claude · 변환한 문서 붙여넣기' });
  P({
    file: 'r3-2-kordoc-use.svg',
    alt: '3단계 2번 — 변환한 문서를 AI 에 붙여넣어 우리 과 과제만 뽑아낸 화면',
    url: null, frameH: 400,
    body: c.s
      + box([140, 104, 790, 66], 1, 'tr')
      + box([50, 200, 880, 26], 2, 'right')
      + box([50, 312, 880, 26], 3, 'right'),
    legends: [
      '변환한 내용을 통째로 붙여넣고, 원하는 표의 칸을 정해 준다',
      '표로 정리된 결과가 나온다. 그대로 엑셀에 붙일 수 있다',
      '문서에 없는 값을 지어내지 않는지 본다. 비워 둔다고 밝히면 믿을 만하다',
    ],
  });
}

/* 3-3 Docufinder 설치 */
{
  let s = t(60, 96, 'Anything (Docufinder) — 내 PC 문서를 내용으로 찾는 앱', { size: 15, fill: C.ink2, w: 700 })
    + r(60, 120, 880, 92, { rx: 10, fill: '#F7F9FC', stroke: C.headLine })
    + t(80, 148, 'GitHub 저장소에서 설치 파일을 받습니다', { size: 12.5, fill: C.dim2 })
    + t(80, 174, 'github.com/chrisryugj/Docufinder', { size: 12.5, fill: C.blue2, mono: true, w: 700 })
    + btnBlue(760, 142, 150, '설치 파일 받기', { h: 38, size: 12.5 });
  s += r(60, 228, 880, 108, { rx: 10, fill: '#FFFFFF', stroke: C.headLine })
    + t(80, 254, '설치 후 처음 할 일 — 찾아볼 폴더 정하기', { size: 12.5, fill: C.ink2, w: 700 })
    + input(80, 268, 620, null, 'D:\\업무\\2026\\기안문')
    + btn(716, 268, 120, '폴더 선택', { h: 34, size: 12.5 })
    + t(80, 326, '폴더 안 문서를 한 번 읽어 두면 그다음부터는 즉시 찾습니다', { size: 11.5, fill: C.dim });
  P({
    file: 'r3-3-docufinder.svg',
    alt: '3단계 3번 — Docufinder 를 받아 설치하고 찾아볼 폴더를 정하는 화면',
    url: null, frameH: 366,
    body: s
      + box([60, 120, 880, 92], 1, 'bottom', 4)
      + box([80, 268, 620, 34], 2, 'left')
      + pillNote(60, 340, 700, '기관 PC 에 프로그램을 설치하기 전 보안 담당 부서에 먼저 확인한다')
      + pin(796, 355, 3),
    legends: [
      'GitHub 저장소에서 설치 파일을 받는다. 크롬 웹스토어나 앱스토어에는 없다',
      '내 업무 폴더를 지정한다. 부서 공유 드라이브 폴더도 넣을 수 있다',
      '설치가 필요한 도구이므로 보안 확인이 먼저다. 1·2단계만 써도 충분하다',
    ],
  });
}

/* 3-4 내용으로 찾기 */
{
  const rs = results('경로당 냉난방 보수 기준', [
    { file: '2025_복지정책과_경로당개선_기안문.hwp', snippet: '… 냉난방 설비 보수 기준은 사용연수 10년 이상 …', meta: '2025-04-18' },
    { file: '2024_시행계획_복지분야.pdf', snippet: '… 경로당 냉난방 교체 대상 선정 기준을 다음과 같이 …', meta: '2024-11-02' },
    { file: '경로당_점검표_양식.xlsx', snippet: '… 냉난방 · 누수 · 전기 안전 점검 항목 …', meta: '2024-03-07' },
  ], { x: 50, y: 100, w: 880 });
  P({
    file: 'r3-4-search.svg',
    alt: '3단계 4번 — 파일 이름이 아니라 문서 내용으로 예전 기안문을 찾아낸 화면',
    url: null, frameH: 400,
    body: t(50, 88, '파일 이름이 아니라 문서 안의 문장으로 찾습니다', { size: 13.5, fill: C.ink2, w: 700 })
      + rs.s
      + box(rs.searchBox(), 1, 'top')
      + box(rs.hit(2), 2, 'right')
      + box([66, 184, 470, 20], 3, 'left'),
    legends: [
      '파일 이름이 기억나지 않아도 된다. 문서에 있었던 문장을 그대로 친다',
      '문서 종류를 가리지 않는다 — 한글·PDF·엑셀이 한 목록에 나온다',
      '찾은 문장 앞뒤가 함께 보여 어느 문서인지 열어 보지 않고도 판단할 수 있다',
    ],
  });
}

console.log(`참고사이트 단계 그림 ${made.length}장 생성 → public/reference/steps/`);

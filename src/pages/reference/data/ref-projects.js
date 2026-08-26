export default {
  id: 'ref-projects',
  icon: 'fa-diagram-project',
  title: '프로젝트 12종 전체',
  titleEn: 'All 12 Projects',
  sections: [
    {
      title: '한눈에 보는 목록',
      titleEn: 'The Full List',
      content: `류승인 주무관이 공개한 프로젝트 전체입니다. **바로가기 열의 링크를 누르면 해당 도구로 이동**합니다.

### 공공데이터 MCP 5종

| # | 프로젝트 | 하는 일 | 바로가기 |
|---|---------|--------|---------|
| 1 | **korean-law-mcp** \`v4.7.4\` | 법령·판례·행정규칙·자치법규·조약·해석례 — 법제처 42개 API를 도구 10개로 통합 | [GitHub](https://github.com/chrisryugj/korean-law-mcp) · \`mcp.gomdori.app/law\` |
| 2 | **korean-stats-mcp** \`v1.8.5\` | KOSIS 통계 — 한국어로 물으면 공식 수치가 출처와 함께 (도구 14개) | \`mcp.gomdori.app/stats\` |
| 3 | **korean-patent-mcp** \`v0.2.1\` | KIPRIS 특허·실용신안·상표·디자인 검색 (도구 7개) | [GitHub](https://github.com/chrisryugj/korean-patent-mcp) · \`mcp.gomdori.app/patent\` |
| 4 | **archhub-mcp** \`v0.4.0\` | 건축HUB 건축물대장·인허가 데이터 (도구 12개) | \`mcp.gomdori.app/archhub\` |
| 5 | **schoolinfo-mcp** \`v0.3.0\` | 학교알리미 공시정보 — 학교 이름만 넣으면 급식·수행평가·학사일정 (도구 13개) | \`mcp.gomdori.app/school\` |

> 다섯 서버를 한 곳에서 제공하는 통합 호스트가 [mcp.gomdori.app](https://mcp.gomdori.app) 입니다. 연결 방법은 '직접 따라 해보기 → 2단계'에 있습니다.

### 문서 처리 · 검색

| # | 프로젝트 | 하는 일 | 바로가기 |
|---|---------|--------|---------|
| 6 | **kordoc** \`v4.1.0\` | 한국 문서(HWP·HWPX·PDF·DOCX·XLSX) → 마크다운. 양식채움·문서diff·SVG 렌더 (MCP 도구 15개) | [GitHub](https://github.com/chrisryugj/kordoc) · \`npm i kordoc\` |
| 7 | **Anything (Docufinder)** | 로컬 문서 내용까지 검색하는 데스크톱 앱. 수식 검색·OCR | [GitHub](https://github.com/chrisryugj/Docufinder) |

### 법무 · 행정

| # | 프로젝트 | 하는 일 | 바로가기 |
|---|---------|--------|---------|
| 8 | **lexdiff** | 공공 Legal AI — 법령 비교·분석 (BYOK 지원) | [웹](https://lexdiff.gomdori.app) · [GitHub](https://github.com/chrisryugj/lexdiff) |
| 9 | **gjdong** | 브라우저에서 주소를 드래그하면 표준주소로 정리. 확장프로그램 + 웹앱 | [웹](https://gjdong.vercel.app) · [GitHub](https://github.com/chrisryugj/gjdong) |

### 시각화 · 그 외

| # | 프로젝트 | 하는 일 | 바로가기 |
|---|---------|--------|---------|
| 10 | **온톨로지 시각화** | 복지·국가 제도 지식그래프 | [복지](https://chris.gomdori.app/welfare) · [제도](https://chris.gomdori.app/korea100) |
| 11 | **포트폴리오** | 프로젝트 모아보기 | [chris.gomdori.app](https://chris.gomdori.app) |
| 12 | **점심 뭐먹지** | 막내들 점심 고민 해결 | [바로가기](https://chris.gomdori.app/lunch) |

### 쓰인 기술

AI/LLM · MCP · Python · TypeScript · Node.js · React · Next.js · 공공 API · 데이터 분석 · 문서 처리 · 검색/OCR · 시각화

> 더 많은 프로젝트는 [github.com/chrisryugj](https://github.com/chrisryugj) 에서 볼 수 있습니다.

### 내 업무에 옮긴다면

| 우리 부서 상황 | 참고할 프로젝트 | 시작점 |
|---------------|---------------|--------|
| 법령·조례를 자주 찾는다 | korean-law-mcp · lexdiff | MCP 연결 후 조문 검색부터 |
| 통계 수치를 보고서에 자주 쓴다 | korean-stats-mcp | "출처와 함께" 물어보기 |
| 한글 공문서가 산더미다 | kordoc | 문서 변환 → AI 요약 흐름 |
| 민원 주소가 제각각이다 | gjdong | 웹에서 바로 붙여넣기 |
| 제도 설명이 늘 어렵다 | 온톨로지 시각화 | 그림으로 설명하는 방식 참고 |
| 예전 문서를 못 찾는다 | Anything(Docufinder) | 내용 검색으로 전환 |

> 이 과정 **고급 · AI 기반 데이터 분석 및 활용**의 '바이브 코딩 자동화 도구 제작'에서, 이런 도구를 직접 만드는 첫 단계를 실습합니다. 처음부터 12개를 만들 필요는 없습니다. **매주 30분씩 잡아먹는 일 하나**부터 시작하세요.`,
      contentEn: `Every project published by Ryu Seung-in. **Follow the link in the last column** to open each tool.

### Five public-data MCP servers

| # | Project | What it does | Link |
|---|---------|--------------|------|
| 1 | **korean-law-mcp** \`v4.7.4\` | Statutes, precedents, ordinances, treaties — 42 government APIs as 10 tools | [GitHub](https://github.com/chrisryugj/korean-law-mcp) · \`mcp.gomdori.app/law\` |
| 2 | **korean-stats-mcp** \`v1.8.5\` | KOSIS statistics — ask in Korean, get official figures with sources (14 tools) | \`mcp.gomdori.app/stats\` |
| 3 | **korean-patent-mcp** \`v0.2.1\` | KIPRIS patent, utility model, trademark, design search (7 tools) | [GitHub](https://github.com/chrisryugj/korean-patent-mcp) · \`mcp.gomdori.app/patent\` |
| 4 | **archhub-mcp** \`v0.4.0\` | Building HUB ledger and permit data (12 tools) | \`mcp.gomdori.app/archhub\` |
| 5 | **schoolinfo-mcp** \`v0.3.0\` | School disclosure info — meals, assessments, calendars (13 tools) | \`mcp.gomdori.app/school\` |

### Documents and search

| # | Project | What it does | Link |
|---|---------|--------------|------|
| 6 | **kordoc** \`v4.1.0\` | Korean documents to Markdown; form filling, diff, SVG render (15 MCP tools) | [GitHub](https://github.com/chrisryugj/kordoc) · \`npm i kordoc\` |
| 7 | **Anything (Docufinder)** | Desktop app searching document contents, with formula search and OCR | [GitHub](https://github.com/chrisryugj/Docufinder) |

### Legal and administrative

| # | Project | What it does | Link |
|---|---------|--------------|------|
| 8 | **lexdiff** | Public legal AI — statute comparison and analysis (BYOK) | [Web](https://lexdiff.gomdori.app) · [GitHub](https://github.com/chrisryugj/lexdiff) |
| 9 | **gjdong** | Drag an address in the browser to standardize it — extension plus web app | [Web](https://gjdong.vercel.app) · [GitHub](https://github.com/chrisryugj/gjdong) |

### Visualization and more

| # | Project | What it does | Link |
|---|---------|--------------|------|
| 10 | **Ontology visualization** | Welfare and national-system knowledge graphs | [Welfare](https://chris.gomdori.app/welfare) · [Systems](https://chris.gomdori.app/korea100) |
| 11 | **Portfolio** | All projects in one place | [chris.gomdori.app](https://chris.gomdori.app) |
| 12 | **Lunch picker** | Settles the daily lunch question | [Open](https://chris.gomdori.app/lunch) |

### Stack

AI/LLM · MCP · Python · TypeScript · Node.js · React · Next.js · public APIs · data analysis · document processing · search/OCR · visualization

> You don't need to build twelve. Start with **the one task that eats 30 minutes every week**.`,
    },
  ],
};

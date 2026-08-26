export default {
  id: 'ref-try',
  icon: 'fa-hand-pointer',
  title: '직접 따라 해보기',
  titleEn: 'Try It Yourself',
  sections: [
    {
      title: '1단계 · 설치 없이 바로 열어보기',
      titleEn: 'Step 1 — Open in a Browser',
      content: `가장 쉬운 시작입니다. **브라우저에서 주소만 열면** 되는 것들부터 보세요. 설치도, 계정도 필요 없습니다.

| 열어볼 것 | 주소 | 무엇을 보나 |
|----------|------|------------|
| 프로젝트 모아보기 | [chris.gomdori.app](https://chris.gomdori.app) | 12개 프로젝트 전체를 한 화면에서 |
| 법령 비교 (lexdiff) | [lexdiff.gomdori.app](https://lexdiff.gomdori.app) | 개정 전후 법령을 나란히 비교 |
| 주소 표준화 (gjdong) | [gjdong.vercel.app](https://gjdong.vercel.app) | 뒤죽박죽 주소를 표준주소로 정리 |
| 복지 제도 지식그래프 | [chris.gomdori.app/welfare](https://chris.gomdori.app/welfare) | 복잡한 복지 제도를 그림으로 |
| 국가 제도 시각화 | [chris.gomdori.app/korea100](https://chris.gomdori.app/korea100) | 제도 체계를 온톨로지로 |
| 점심 뭐먹지 | [chris.gomdori.app/lunch](https://chris.gomdori.app/lunch) | 막내들 점심 고민 해결 |

### 먼저 이걸 해보세요 — gjdong으로 주소 정리

민원 서식에 들어온 주소가 제각각일 때 쓰는 도구입니다.

1. [gjdong.vercel.app](https://gjdong.vercel.app) 을 엽니다
2. 정리하고 싶은 주소 텍스트를 붙여넣습니다
3. 표준주소로 정리된 결과를 확인합니다

브라우저 확장프로그램으로 설치하면 **어느 화면에서든 주소를 드래그**해 바로 정리할 수 있습니다.

### 그다음 · lexdiff로 법령 비교

개정 전후 조문을 눈으로 대조하던 일을 대신합니다.

1. [lexdiff.gomdori.app](https://lexdiff.gomdori.app) 접속
2. 비교할 법령을 선택하거나 조문을 붙여넣기
3. 바뀐 부분이 표시된 결과 확인

> **학교알리미 웹앱(school.gomdori.app)은 현재 접속되지 않습니다(서버 오류).** 같은 기능을 MCP로는 쓸 수 있습니다 — 2단계를 보세요. 서비스 상태는 수시로 바뀔 수 있으니 안 열리면 [GitHub](https://github.com/chrisryugj) 에서 최신 상태를 확인하세요.`,
      contentEn: `Start with the ones that need **nothing but a browser** — no install, no account.

| Open this | Address | What you see |
|-----------|---------|--------------|
| Project portfolio | [chris.gomdori.app](https://chris.gomdori.app) | All 12 projects on one screen |
| Statute comparison | [lexdiff.gomdori.app](https://lexdiff.gomdori.app) | Before/after statute diff |
| Address standardizer | [gjdong.vercel.app](https://gjdong.vercel.app) | Messy addresses into standard form |
| Welfare knowledge graph | [chris.gomdori.app/welfare](https://chris.gomdori.app/welfare) | Welfare systems as a graph |
| National systems | [chris.gomdori.app/korea100](https://chris.gomdori.app/korea100) | Institutional structure as ontology |
| Lunch picker | [chris.gomdori.app/lunch](https://chris.gomdori.app/lunch) | Solves the daily lunch debate |

> **The school web app (school.gomdori.app) is currently returning a server error.** The same capability is available over MCP — see step 2.`,
    },
    {
      title: '2단계 · AI에 MCP 도구 연결하기',
      titleEn: 'Step 2 — Connect MCP Tools to Your AI',
      content: `> ### 화면 그림을 보며 따라 하시려면
> **[▶ Claude에 공공데이터 연결하기 — 따라하기](/setup/mcp)** 로 가세요.
> 앱 설치부터 첫 질문까지 **7단계**를, 화면 그림 위의 주황색 번호를 짚어가며 안내합니다. 단계마다 체크하면 어디까지 했는지 저장되고, "이 화면이 안 나오면" 대응도 단계마다 붙어 있습니다.

아래는 요약입니다. **MCP(Model Context Protocol)** 는 AI에게 바깥 도구를 붙여주는 규격입니다. 연결해 두면 Claude 같은 AI가 **법제처·KOSIS·KIPRIS 같은 공공 데이터를 직접 조회**해서 답합니다.

### 무엇이 달라지나

| 연결 전 | 연결 후 |
|---------|---------|
| "이 법 조문 알려줘" → 기억에 의존, 틀릴 수 있음 | 법제처 API를 직접 조회해 **출처와 함께** 회신 |
| 통계를 찾아 KOSIS를 직접 뒤짐 | "작년 대구 청년 고용률" → **공식 수치 + 출처** |
| 건축물대장을 시스템에서 일일이 조회 | 대장 조회를 대화로 처리 |

### 연결할 수 있는 서버 5종

| 서버 | 주소 | 도구 수 |
|------|------|---------|
| 법령 (korean-law-mcp) | \`https://mcp.gomdori.app/law\` | 10개 노출 (전체 98개) |
| 통계 (korean-stats-mcp) | \`https://mcp.gomdori.app/stats\` | 14개 |
| 특허 (korean-patent-mcp) | \`https://mcp.gomdori.app/patent\` | 7개 |
| 건축HUB (archhub-mcp) | \`https://mcp.gomdori.app/archhub\` | 12개 |
| 학교알리미 (schoolinfo-mcp) | \`https://mcp.gomdori.app/school\` | 13개 |

### 방법 A · Claude 데스크톱 앱에서 (권장)

설치 파일을 만질 필요 없이 화면에서 추가합니다.

1. Claude 데스크톱 앱을 엽니다
2. **설정(Settings) → 커넥터(Connectors)** 로 들어갑니다
3. **커스텀 커넥터 추가**를 누릅니다
4. 이름과 주소를 입력합니다 — 예: 이름 \`법령 검색\`, 주소 \`https://mcp.gomdori.app/law\`
5. 저장하고 대화창에서 물어봅니다 — "지방자치법 제13조 내용 알려줘"

### 방법 B · Claude Code(터미널)에서

터미널에 한 줄씩 붙여넣으면 됩니다.

\`\`\`bash
claude mcp add --transport http korean-law    https://mcp.gomdori.app/law
claude mcp add --transport http korean-stats  https://mcp.gomdori.app/stats
claude mcp add --transport http korean-patent https://mcp.gomdori.app/patent
claude mcp add --transport http archhub       https://mcp.gomdori.app/archhub
claude mcp add --transport http schoolinfo    https://mcp.gomdori.app/school
\`\`\`

연결 확인:

\`\`\`bash
claude mcp list
\`\`\`

### 연결한 뒤 이렇게 물어보세요

| 서버 | 질문 예시 |
|------|----------|
| 법령 | "지방공무원 복무규정에서 연가 관련 조문을 찾아서 원문과 함께 알려줘" |
| 통계 | "최근 3년 대구광역시 청년 고용률을 출처와 함께 표로 정리해줘" |
| 건축HUB | "이 주소의 건축물대장 정보를 조회해서 용도·연면적·사용승인일을 알려줘" |
| 학교알리미 | "대구 ○○중학교의 이번 달 급식 식단과 학사일정을 정리해줘" |
| 특허 | "'스마트 가로등' 관련 최근 특허 출원 동향을 정리해줘" |

> **주소가 안 붙으면** — 각 프로젝트의 GitHub 저장소 README에 최신 연결 주소와 방법이 적혀 있습니다. [github.com/chrisryugj](https://github.com/chrisryugj) 에서 해당 저장소를 확인하세요. 공개 서버라 점검·개편으로 주소가 바뀔 수 있습니다.

> **업무 자료 주의** — 공개된 외부 서버입니다. 개인정보나 대외비가 든 내용을 그대로 넣지 마세요. 조회는 공개 데이터 기준으로만 쓰는 것이 안전합니다.`,
      contentEn: `This is the heart of the case. **MCP (Model Context Protocol)** lets an AI use external tools. Once connected, Claude can query public data sources directly and answer **with sources**.

### The five servers

| Server | Address | Tools |
|--------|---------|-------|
| Law | \`https://mcp.gomdori.app/law\` | 10 exposed (98 total) |
| Statistics | \`https://mcp.gomdori.app/stats\` | 14 |
| Patents | \`https://mcp.gomdori.app/patent\` | 7 |
| Building HUB | \`https://mcp.gomdori.app/archhub\` | 12 |
| School info | \`https://mcp.gomdori.app/school\` | 13 |

### Option A · Claude desktop app

1. Open the Claude desktop app
2. Go to **Settings → Connectors**
3. Choose **Add custom connector**
4. Enter a name and the address
5. Save and ask a question

### Option B · Claude Code (terminal)

\`\`\`bash
claude mcp add --transport http korean-law    https://mcp.gomdori.app/law
claude mcp add --transport http korean-stats  https://mcp.gomdori.app/stats
claude mcp add --transport http korean-patent https://mcp.gomdori.app/patent
claude mcp add --transport http archhub       https://mcp.gomdori.app/archhub
claude mcp add --transport http schoolinfo    https://mcp.gomdori.app/school
\`\`\`

> **If a connection fails**, check the project's GitHub README at [github.com/chrisryugj](https://github.com/chrisryugj) — these are public servers and addresses may change.

> **Careful with work material** — these are public external servers. Do not paste personal or confidential data.`,
    },
    {
      title: '3단계 · 내 PC에 설치해 쓰기',
      titleEn: 'Step 3 — Install Locally',
      content: `조금 더 손이 가지만, **내 PC 안의 자료**를 다루는 도구들입니다.

### kordoc — 한글 공문서를 마크다운으로

HWP·HWPX·PDF·DOCX·XLSX를 마크다운으로 바꿔 AI가 읽을 수 있게 만듭니다. 양식채움과 문서 비교(diff)도 됩니다.

\`\`\`bash
npm i kordoc
\`\`\`

| 쓰임 | 설명 |
|------|------|
| 문서 변환 | 한글 공문서를 AI가 읽는 형식으로 |
| 양식 채움 | 정해진 서식에 값을 넣어 문서 생성 |
| 문서 diff | 개정 전후 문서의 바뀐 곳 비교 |
| SVG 렌더 | 문서를 이미지로 |

MCP 도구 15개를 함께 제공합니다 → [GitHub](https://github.com/chrisryugj/kordoc)

### Anything (Docufinder) — 내 PC 문서 내용까지 검색

파일명이 아니라 **문서 안의 내용**으로 찾는 데스크톱 앱입니다. 수식 검색과 OCR을 지원합니다.

→ [GitHub에서 받기](https://github.com/chrisryugj/Docufinder)

> 예전 기안문에서 문구 하나를 찾을 때, 폴더를 뒤지는 대신 내용으로 검색합니다.

### 설치가 부담스럽다면

1단계(브라우저)와 2단계(MCP 연결)만으로도 충분합니다. 3단계는 문서 작업이 특히 많은 부서에서 시도해 보세요.`,
      contentEn: `A bit more setup, but these work on **files on your own PC**.

### kordoc — Korean office documents to Markdown

Converts HWP, HWPX, PDF, DOCX, XLSX to Markdown so AI can read them; also fills forms and diffs documents.

\`\`\`bash
npm i kordoc
\`\`\`

Ships 15 MCP tools → [GitHub](https://github.com/chrisryugj/kordoc)

### Anything (Docufinder) — search inside your own documents

A desktop app that searches document **contents**, not just filenames, with formula search and OCR.

→ [Get it on GitHub](https://github.com/chrisryugj/Docufinder)`,
    },
  ],
};

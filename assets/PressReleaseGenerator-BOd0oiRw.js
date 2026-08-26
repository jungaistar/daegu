import{C as A,I as K,r as x,l as e}from"./index-DipTVBqi.js";import{u as w,A as k,K as I,S as R,T as E}from"./SubscribePrompt-6Q6fuUq5.js";import{u as $,A as F}from"./useApiKeys-B3YxZk5s.js";import{S as T}from"./SEOHead-D_wGOQIi.js";import"./useUsageLog-DVdQuUSS.js";import"./index-C45V9s9t.js";function D({program:i,department:r,facts:c,audience:o,channel:m,tone:p,language:d}){return[{role:"system",content:`You are a press officer at the Daegu Metropolitan City spokesperson's office. You write press releases in the standard Korean public-institution style and never fabricate figures. Always respond in ${d==="ko"?"한국어":"English"}.`},{role:"user",content:`다음 정보로 시정 보도자료 초안을 작성해주세요.

## 사업 정보
- **사업/사안명**: ${i}
- **담당 부서**: ${r||"미지정"}
- **주요 전달 대상**: ${o||"대구시민"}
- **배포 채널**: ${m||"언론사 보도자료"}
- **어투**: ${p||"공공기관 보도자료 톤"}

## 핵심 내용
${c||"(핵심 내용 미입력)"}

## 작성 구조

### 1. 헤드라인
- 핵심을 한 줄로. 시민이 얻는 이익이 드러나게

### 2. 리드문
- 육하원칙(누가·언제·어디서·무엇을·어떻게·왜)을 2~3문장에 압축

### 3. 본문 3문단
| 문단 | 담을 내용 |
|------|----------|
| 1문단 | 사업 배경과 목적 |
| 2문단 | 구체적 내용 — 대상·규모·기간·신청 방법 |
| 3문단 | 기대 효과, 관계자 인용문(있으면) |

### 4. 담당부서 연락처
- 부서명 / 담당자 / 연락처 (입력에 없으면 \`[확인 필요]\`)

## 반드시 지킬 것

- 입력에 없는 **통계·예산액·참여 인원을 지어내지 마세요.** \`[확인 필요]\` 로 표시합니다.
- 관계자 인용문은 입력에 근거가 있을 때만 작성하고, 없으면 \`[인용문 확인 필요]\` 로 둡니다.
- 과장 표현("최초", "최대", "획기적")은 근거가 있을 때만 씁니다.

작성 후 **"확인이 필요한 항목"** 을 따로 정리해 주세요.`}]}function O(){const{language:i,t:r}=A(),{output:c,isStreaming:o,error:m,usage:p,generate:d}=w(),{keys:f,getEffectiveApiKey:j,hasAnyKey:v}=$(),u=K(),s=i==="ko",[n,y]=x.useState("openai"),[l,N]=x.useState({program:"",department:"",audience:"대구시민",channel:"언론사 보도자료",tone:"공공기관 보도자료 톤",facts:""}),t=(a,g)=>N(h=>({...h,[a]:g}));async function b(){if(!l.program.trim()){u.warning(s?"사업/사안명을 입력해주세요.":"Please enter the program name.");return}const{key:a,source:g}=j(n);if(!a){u.warning(r("ai.noApiKey"));return}const h=D({...l,language:i}),C=F[n];try{await d({provider:n,apiKey:a,model:C.defaultModel,messages:h,toolId:"press-release",keySource:g})}catch(P){u.error(P.message)}}const S=e.jsxs(e.Fragment,{children:[e.jsxs("h3",{children:[e.jsx("i",{className:"fa-solid fa-bullhorn"})," ",r("tools.pressRelease")]}),e.jsx(k,{selected:n,onSelect:y,apiKeys:f}),e.jsx(I,{provider:n}),!v(n)&&e.jsx(R,{}),e.jsxs("div",{className:"ai-form-group",children:[e.jsxs("label",{className:"ai-form-label",children:[e.jsx("span",{className:"label-icon",children:e.jsx("i",{className:"fa-solid fa-flag"})})," ",s?"사업 / 사안명":"Program"," *"]}),e.jsx("input",{className:"form-input",value:l.program,onChange:a=>t("program",a.target.value),placeholder:s?"예: 청년 일자리 지원사업":"e.g., Youth employment support program"})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"},children:[e.jsxs("div",{className:"ai-form-group",children:[e.jsx("label",{className:"ai-form-label",children:s?"담당 부서":"Department"}),e.jsx("input",{className:"form-input",value:l.department,onChange:a=>t("department",a.target.value),placeholder:s?"예: 청년정책과":"e.g., Youth Policy Division"})]}),e.jsxs("div",{className:"ai-form-group",children:[e.jsx("label",{className:"ai-form-label",children:s?"전달 대상":"Audience"}),e.jsx("input",{className:"form-input",value:l.audience,onChange:a=>t("audience",a.target.value),placeholder:s?"예: 20~30대 청년":"e.g., Citizens in their 20s-30s"})]})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"},children:[e.jsxs("div",{className:"ai-form-group",children:[e.jsx("label",{className:"ai-form-label",children:s?"배포 채널":"Channel"}),e.jsxs("select",{className:"form-select",value:l.channel,onChange:a=>t("channel",a.target.value),children:[e.jsx("option",{value:"언론사 보도자료",children:s?"언론사 보도자료":"Press"}),e.jsx("option",{value:"시청 홈페이지 공지",children:s?"시청 홈페이지":"City website"}),e.jsx("option",{value:"블로그·SNS 게시글",children:s?"블로그·SNS":"Blog / SNS"})]})]}),e.jsxs("div",{className:"ai-form-group",children:[e.jsx("label",{className:"ai-form-label",children:s?"어투":"Tone"}),e.jsxs("select",{className:"form-select",value:l.tone,onChange:a=>t("tone",a.target.value),children:[e.jsx("option",{value:"공공기관 보도자료 톤",children:s?"보도자료 톤":"Press release"}),e.jsx("option",{value:"시민에게 친근한 톤",children:s?"시민 친화적":"Citizen-friendly"})]})]})]}),e.jsxs("div",{className:"ai-form-group",children:[e.jsxs("label",{className:"ai-form-label",children:[e.jsx("span",{className:"label-icon",children:e.jsx("i",{className:"fa-solid fa-list-check"})})," ",s?"핵심 내용":"Key Facts"," *"]}),e.jsx("textarea",{className:"form-textarea",rows:6,value:l.facts,onChange:a=>t("facts",a.target.value),placeholder:s?`확정된 사실만 적어주세요 — 대상·규모·기간·신청 방법·예산 등.

예)
지원 대상: 만 19~39세 대구 거주 청년
지원 내용: 월 50만원, 최대 6개월
신청 기간: 7월 1일 ~ 7월 31일
신청 방법: 대구시 청년포털`:"Enter only confirmed facts: eligibility, scale, period, how to apply."})]}),e.jsx("button",{className:"ai-generate-btn",onClick:b,disabled:o,children:o?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"spinner"})," ",r("ai.generating")]}):e.jsx(e.Fragment,{children:r("ai.generate")})})]});return e.jsxs(e.Fragment,{children:[e.jsx(T,{title:r("tools.pressRelease"),path:"/tools/press-release"}),e.jsx(E,{title:r("tools.pressRelease"),description:s?"헤드라인 → 리드문(육하원칙) → 본문 3문단 → 담당부서 연락처 구조로 보도자료 초안을 만듭니다.":"Drafts a press release: headline, 5W1H lead, three body paragraphs, and department contact.",inputPanel:S,output:c,isStreaming:o,error:m,usage:p,toolId:"press-release"})]})}export{O as default};

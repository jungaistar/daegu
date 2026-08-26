import{C,I,r as g,l as e}from"./index-jVeQPARA.js";import{u as P,A as R,K,S as k,T}from"./SubscribePrompt-8oivbKjZ.js";import{u as E,A as F}from"./useApiKeys-NJzwLxsd.js";import{S as $}from"./SEOHead-tQI313sc.js";import"./useUsageLog-DK2s0N41.js";import"./index-DjZZNouR.js";function D({document:i,docType:o,audience:c,focus:n,language:d}){return[{role:"system",content:`You are an internal auditor reviewing documents before they leave a Korean local government office. You flag risks precisely and state clearly when an item is fine. Always respond in ${d==="ko"?"한국어":"English"}.`},{role:"user",content:`아래 문서를 발송 전 관점에서 검토해주세요.

## 문서 정보
- **문서 종류**: ${o||"공문"}
- **전달 대상**: ${c||"내부 부서"}
${n?`- **특히 볼 것**: ${n}`:""}

## 검토할 문서
${i||"(문서 미입력)"}

## 검토 관점 4가지

| 관점 | 무엇을 보나 |
|------|------------|
| 사실 확인 | 통계·법령·사업명·일정·금액이 근거 없이 단정되어 있지 않은가 |
| 개인정보 | 이름·연락처·주민번호·주소가 불필요하게 들어 있지 않은가 |
| 보안 | 대외비·내부 검토 중인 내용이 외부로 나가는 문서에 섞이지 않았는가 |
| 어투 | 전달 대상에 맞는 어투인가, 시민이 이해하기 어려운 표현은 없는가 |

## 출력 형식

### 1. 종합 판정
- **발송 가능 / 수정 후 발송 / 발송 보류** 중 하나와 그 이유 한 문장

### 2. 항목별 검토

| 관점 | 위험도 | 발견한 내용 | 수정안 |
|------|--------|------------|--------|

- 위험도는 **높음 / 중간 / 낮음** 으로 표기
- **문제가 없는 관점도 "이상 없음"으로 반드시 명시**해 주세요

### 3. 우선 고칠 것 3가지
- 지금 바로 손봐야 할 순서대로

## 반드시 지킬 것

- 지적할 때는 **문서의 어느 문장인지 그대로 인용**해 주세요.
- 확인할 수 없는 사실은 "틀렸다"가 아니라 "원자료 대조 필요"로 표시합니다.`}]}function M(){const{language:i,t:o}=C(),{output:c,isStreaming:n,error:d,usage:f,generate:h}=P(),{keys:x,getEffectiveApiKey:j,hasAnyKey:v}=E(),u=I(),s=i==="ko",[r,y]=g.useState("openai"),[t,b]=g.useState({document:"",docType:"공문",audience:"내부 부서",focus:""}),l=(a,m)=>b(p=>({...p,[a]:m}));async function w(){if(!t.document.trim()){u.warning(s?"검토할 문서를 붙여넣어 주세요.":"Please paste the document to review.");return}const{key:a,source:m}=j(r);if(!a){u.warning(o("ai.noApiKey"));return}const p=D({...t,language:i}),A=F[r];try{await h({provider:r,apiKey:a,model:A.defaultModel,messages:p,toolId:"doc-review",keySource:m})}catch(S){u.error(S.message)}}const N=e.jsxs(e.Fragment,{children:[e.jsxs("h3",{children:[e.jsx("i",{className:"fa-solid fa-magnifying-glass-chart"})," ",o("tools.docReview")]}),e.jsx(R,{selected:r,onSelect:y,apiKeys:x}),e.jsx(K,{provider:r}),!v(r)&&e.jsx(k,{}),e.jsxs("div",{className:"ai-form-group",children:[e.jsxs("label",{className:"ai-form-label",children:[e.jsx("span",{className:"label-icon",children:e.jsx("i",{className:"fa-solid fa-file-circle-check"})})," ",s?"검토할 문서":"Document"," *"]}),e.jsx("textarea",{className:"form-textarea",rows:10,value:t.document,onChange:a=>l("document",a.target.value),placeholder:s?"AI가 만든 초안이든 직접 쓴 문서든, 발송 전에 붙여넣어 점검하세요.":"Paste the document — AI-drafted or your own — before sending it."})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"},children:[e.jsxs("div",{className:"ai-form-group",children:[e.jsx("label",{className:"ai-form-label",children:s?"문서 종류":"Document Type"}),e.jsxs("select",{className:"form-select",value:t.docType,onChange:a=>l("docType",a.target.value),children:[e.jsx("option",{value:"공문",children:s?"공문":"Official document"}),e.jsx("option",{value:"보도자료",children:s?"보도자료":"Press release"}),e.jsx("option",{value:"민원 답변",children:s?"민원 답변":"Complaint reply"}),e.jsx("option",{value:"보고서",children:s?"보고서":"Report"}),e.jsx("option",{value:"홍보 콘텐츠",children:s?"홍보 콘텐츠":"PR content"})]})]}),e.jsxs("div",{className:"ai-form-group",children:[e.jsx("label",{className:"ai-form-label",children:s?"전달 대상":"Audience"}),e.jsxs("select",{className:"form-select",value:t.audience,onChange:a=>l("audience",a.target.value),children:[e.jsx("option",{value:"내부 부서",children:s?"내부 부서":"Internal"}),e.jsx("option",{value:"타 기관",children:s?"타 기관":"Other agencies"}),e.jsx("option",{value:"시민 — 대외 공개",children:s?"시민 (대외 공개)":"Citizens (public)"}),e.jsx("option",{value:"언론",children:s?"언론":"Press"})]})]})]}),e.jsxs("div",{className:"ai-form-group",children:[e.jsxs("label",{className:"ai-form-label",children:[e.jsx("span",{className:"label-icon",children:e.jsx("i",{className:"fa-solid fa-crosshairs"})})," ",s?"특히 볼 것":"Focus"," ",e.jsxs("span",{className:"optional",children:["(",s?"선택":"optional",")"]})]}),e.jsx("input",{className:"form-input",value:t.focus,onChange:a=>l("focus",a.target.value),placeholder:s?"예: 예산 수치가 맞는지, 어투가 시민 눈높이인지":"e.g., budget figures, citizen-level wording"})]}),e.jsx("button",{className:"ai-generate-btn",onClick:w,disabled:n,children:n?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"spinner"})," ",o("ai.generating")]}):e.jsx(e.Fragment,{children:o("ai.generate")})})]});return e.jsxs(e.Fragment,{children:[e.jsx($,{title:o("tools.docReview"),path:"/tools/doc-review"}),e.jsx(T,{title:o("tools.docReview"),description:s?"발송 전 문서를 사실 확인·개인정보·보안·어투 네 관점으로 점검하고 위험도와 수정안을 제시합니다.":"Reviews a document before sending across four lenses: facts, personal data, security, and tone.",inputPanel:N,output:c,isStreaming:n,error:d,usage:f,toolId:"doc-review"})]})}export{M as default};

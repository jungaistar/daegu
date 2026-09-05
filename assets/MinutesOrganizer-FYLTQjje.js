import{C as A,I as K,r as x,l as e}from"./index-wrE8ELh9.js";import{u as P,A as T,K as k,S as I,T as E}from"./SubscribePrompt-BpI2zUXG.js";import{u as R,A as $}from"./useApiKeys-B0xikUl8.js";import{S as D}from"./SEOHead-3CVz-_Rn.js";import"./useUsageLog-CptUZqw3.js";import"./index-B8TbASPE.js";function F({minutes:l,meetingName:n,department:c,decisionCount:r,reportTo:m,language:d}){return[{role:"system",content:`You are a meeting secretary in a Korean local government office. You organize raw minutes into decisions and action items, and you never invent decisions that were not discussed. Always respond in ${d==="ko"?"한국어":"English"}.`},{role:"user",content:`아래 회의록을 보고용으로 정리해주세요.

## 회의 정보
- **회의명**: ${n||"미지정"}
- **담당 부서**: ${c||"미지정"}
- **보고 대상**: ${m||"부서장"}

## 회의록 원문
${l||"(회의록 미입력)"}

## 정리 형식

### 1. 한 줄 요약
- 이 회의에서 무엇이 정해졌는지 한 문장으로

### 2. 결정사항 ${r||3}가지
- 번호를 붙여 정리
- 각 항목은 "무엇을 / 어떻게 하기로 했다" 형태로

### 3. 담당자별 할 일

| 담당자 | 할 일 | 기한 |
|--------|------|------|

### 4. 다음 회의로 넘긴 사항
- 결론이 나지 않은 안건을 따로 정리 (없으면 "없음")

## 반드시 지킬 것

- **회의록에 없는 결정·담당자·기한을 만들어내지 마세요.** 언급되지 않았으면 \`[미정]\` 으로 둡니다.
- 논의만 되고 확정되지 않은 것은 결정사항이 아니라 "다음 회의로 넘긴 사항"에 넣습니다.
- 참석자 실명이 들어 있으면 직책 중심으로 표기하고, 개인 연락처는 제외합니다.`}]}function H(){const{language:l,t:n}=A(),{output:c,isStreaming:r,error:m,usage:d,generate:h}=P(),{keys:f,getEffectiveApiKey:j,hasAnyKey:v}=R(),u=K(),a=l==="ko",[i,y]=x.useState("openai"),[t,N]=x.useState({meetingName:"",department:"",reportTo:"부서장",decisionCount:"3",minutes:""}),o=(s,p)=>N(g=>({...g,[s]:p}));async function b(){if(!t.minutes.trim()){u.warning(a?"회의록 내용을 붙여넣어 주세요.":"Please paste the meeting minutes.");return}const{key:s,source:p}=j(i);if(!s){u.warning(n("ai.noApiKey"));return}const g=F({...t,language:l}),S=$[i];try{await h({provider:i,apiKey:s,model:S.defaultModel,messages:g,toolId:"minutes",keySource:p})}catch(w){u.error(w.message)}}const C=e.jsxs(e.Fragment,{children:[e.jsxs("h3",{children:[e.jsx("i",{className:"fa-solid fa-clipboard-list"})," ",n("tools.minutes")]}),e.jsx(T,{selected:i,onSelect:y,apiKeys:f}),e.jsx(k,{provider:i}),!v(i)&&e.jsx(I,{}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"},children:[e.jsxs("div",{className:"ai-form-group",children:[e.jsx("label",{className:"ai-form-label",children:a?"회의명":"Meeting"}),e.jsx("input",{className:"form-input",value:t.meetingName,onChange:s=>o("meetingName",s.target.value),placeholder:a?"예: 7월 정기 부서회의":"e.g., July division meeting"})]}),e.jsxs("div",{className:"ai-form-group",children:[e.jsx("label",{className:"ai-form-label",children:a?"담당 부서":"Department"}),e.jsx("input",{className:"form-input",value:t.department,onChange:s=>o("department",s.target.value),placeholder:a?"예: 청년정책과":"e.g., Youth Policy Division"})]})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"},children:[e.jsxs("div",{className:"ai-form-group",children:[e.jsx("label",{className:"ai-form-label",children:a?"보고 대상":"Report to"}),e.jsxs("select",{className:"form-select",value:t.reportTo,onChange:s=>o("reportTo",s.target.value),children:[e.jsx("option",{value:"부서장",children:a?"부서장":"Division head"}),e.jsx("option",{value:"국장 이상 간부",children:a?"국장 이상 간부":"Senior management"}),e.jsx("option",{value:"참석자 공유용",children:a?"참석자 공유용":"Attendees"})]})]}),e.jsxs("div",{className:"ai-form-group",children:[e.jsx("label",{className:"ai-form-label",children:a?"결정사항 개수":"Decisions"}),e.jsxs("select",{className:"form-select",value:t.decisionCount,onChange:s=>o("decisionCount",s.target.value),children:[e.jsx("option",{value:"3",children:"3"}),e.jsx("option",{value:"5",children:"5"}),e.jsx("option",{value:"7",children:"7"})]})]})]}),e.jsxs("div",{className:"ai-form-group",children:[e.jsxs("label",{className:"ai-form-label",children:[e.jsx("span",{className:"label-icon",children:e.jsx("i",{className:"fa-solid fa-paste"})})," ",a?"회의록 원문":"Raw Minutes"," *"]}),e.jsx("textarea",{className:"form-textarea",rows:10,value:t.minutes,onChange:s=>o("minutes",s.target.value),placeholder:a?`녹취록이나 메모를 그대로 붙여넣으세요. 정리되지 않은 상태여도 됩니다.

※ 참석자 연락처·주민번호 등 개인정보는 지우고 붙여넣어 주세요.`:"Paste the raw transcript or notes. Remove personal data first."})]}),e.jsx("button",{className:"ai-generate-btn",onClick:b,disabled:r,children:r?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"spinner"})," ",n("ai.generating")]}):e.jsx(e.Fragment,{children:n("ai.generate")})})]});return e.jsxs(e.Fragment,{children:[e.jsx(D,{title:n("tools.minutes"),path:"/tools/minutes"}),e.jsx(E,{title:n("tools.minutes"),description:a?"회의록을 결정사항과 담당자별 할 일 표로 정리합니다. 원문에 없는 결정은 만들지 않고 [미정]으로 둡니다.":"Turns raw minutes into decisions and an owner/task/deadline table, marking undecided items.",inputPanel:C,output:c,isStreaming:r,error:m,usage:d,toolId:"minutes"})]})}export{H as default};

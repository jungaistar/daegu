import{C as D,I,r as j,l as e}from"./index-sJe1uxHu.js";import{u as K,A as T,K as w,S as k,T as P}from"./SubscribePrompt-C4LSLFMU.js";import{u as $,A as E}from"./useApiKeys-qbpkPyTD.js";import{S as F}from"./SEOHead-D5voCWqp.js";import"./useUsageLog-DqFhsWLh.js";import"./index-B7b1E6Pu.js";function R({docType:r,department:l,subject:c,facts:t,audience:d,tone:u,length:m,language:f}){return[{role:"system",content:`You are an experienced administrative officer at Daegu Metropolitan City Hall who drafts official documents. You follow Korean public-sector document conventions precisely and never invent facts. Always respond in ${f==="ko"?"한국어":"English"}.`},{role:"user",content:`다음 정보로 ${r||"안내 공문"} 초안을 작성해주세요.

## 문서 정보
- **담당 부서**: ${l||"미지정"}
- **제목/사안**: ${c}
- **수신 대상**: ${d||"관련 부서 및 기관"}
- **어투**: ${u||"정중하고 간결한 공공기관 공문체"}
- **분량**: ${m||"본문 3문단 이내, 각 문단 3줄 이내"}

## 핵심 내용
${t||"(핵심 내용 미입력)"}

## 작성 요구사항

1. **구조** — 제목 → 수신 → 본문 → 붙임 순서로 작성
2. **제목** — 문서 성격이 한눈에 드러나게 (예: "○○ 특강 개최 알림")
3. **본문** — 근거·목적을 먼저, 구체 사항(일시·장소·대상)을 그다음, 협조 요청을 마지막에
4. **붙임** — 필요한 첨부물이 있으면 번호를 붙여 나열, 없으면 "붙임 없음"

## 반드시 지킬 것

- 입력에 없는 **일정·금액·근거 법령·사업명을 지어내지 마세요.** 필요한데 없는 정보는 \`[확인 필요]\` 로 표시합니다.
- 추정과 확정 사실을 문장에서 구분해 주세요.
- 개인정보(이름·연락처·주민번호)가 입력에 섞여 있으면 그대로 쓰지 말고 \`[개인정보]\` 로 가려 주세요.

작성 후, 마지막에 **"확인이 필요한 항목"** 목록을 따로 정리해 주세요.`}]}function M(){const{language:r,t:l}=D(),{output:c,isStreaming:t,error:d,usage:u,generate:m}=K(),{keys:f,getEffectiveApiKey:x,hasAnyKey:v}=$(),p=I(),a=r==="ko",[o,y]=j.useState("openai"),[i,N]=j.useState({subject:"",docType:"안내 공문",department:"",audience:"",tone:"정중하고 간결한 공공기관 공문체",length:"본문 3문단 이내",facts:""}),n=(s,h)=>N(g=>({...g,[s]:h}));async function b(){if(!i.subject.trim()){p.warning(a?"제목/사안을 입력해주세요.":"Please enter the subject.");return}const{key:s,source:h}=x(o);if(!s){p.warning(l("ai.noApiKey"));return}const g=R({...i,language:r}),A=E[o];try{await m({provider:o,apiKey:s,model:A.defaultModel,messages:g,toolId:"official-doc",keySource:h})}catch(S){p.error(S.message)}}const C=e.jsxs(e.Fragment,{children:[e.jsxs("h3",{children:[e.jsx("i",{className:"fa-solid fa-file-lines"})," ",l("tools.officialDoc")]}),e.jsx(T,{selected:o,onSelect:y,apiKeys:f}),e.jsx(w,{provider:o}),!v(o)&&e.jsx(k,{}),e.jsxs("div",{className:"ai-form-group",children:[e.jsxs("label",{className:"ai-form-label",children:[e.jsx("span",{className:"label-icon",children:e.jsx("i",{className:"fa-solid fa-heading"})})," ",a?"제목 / 사안":"Subject"," *"]}),e.jsx("input",{className:"form-input",value:i.subject,onChange:s=>n("subject",s.target.value),placeholder:a?"예: 생성형 AI 업무활용 특강 개최 알림":"e.g., Notice of AI training session"})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"},children:[e.jsxs("div",{className:"ai-form-group",children:[e.jsx("label",{className:"ai-form-label",children:a?"문서 종류":"Document Type"}),e.jsxs("select",{className:"form-select",value:i.docType,onChange:s=>n("docType",s.target.value),children:[e.jsx("option",{value:"안내 공문",children:a?"안내 공문":"Announcement"}),e.jsx("option",{value:"협조 요청 공문",children:a?"협조 요청 공문":"Request for cooperation"}),e.jsx("option",{value:"기안문",children:a?"기안문":"Draft proposal"}),e.jsx("option",{value:"알림 공문",children:a?"알림 공문":"Notification"}),e.jsx("option",{value:"회신 공문",children:a?"회신 공문":"Reply"})]})]}),e.jsxs("div",{className:"ai-form-group",children:[e.jsx("label",{className:"ai-form-label",children:a?"담당 부서":"Department"}),e.jsx("input",{className:"form-input",value:i.department,onChange:s=>n("department",s.target.value),placeholder:a?"예: 청년정책과":"e.g., Youth Policy Division"})]})]}),e.jsxs("div",{className:"ai-form-group",children:[e.jsxs("label",{className:"ai-form-label",children:[e.jsx("span",{className:"label-icon",children:e.jsx("i",{className:"fa-solid fa-users"})})," ",a?"수신 대상":"Recipients"]}),e.jsx("input",{className:"form-input",value:i.audience,onChange:s=>n("audience",s.target.value),placeholder:a?"예: 본청·구청 공무원":"e.g., City and district officials"})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"},children:[e.jsxs("div",{className:"ai-form-group",children:[e.jsx("label",{className:"ai-form-label",children:a?"어투":"Tone"}),e.jsxs("select",{className:"form-select",value:i.tone,onChange:s=>n("tone",s.target.value),children:[e.jsx("option",{value:"정중하고 간결한 공공기관 공문체",children:a?"공문체 (정중·간결)":"Official (courteous)"}),e.jsx("option",{value:"시민이 이해하기 쉬운 친근한 표현",children:a?"시민 친화적":"Citizen-friendly"}),e.jsx("option",{value:"내부 보고용 간결체",children:a?"내부 보고용":"Internal briefing"})]})]}),e.jsxs("div",{className:"ai-form-group",children:[e.jsx("label",{className:"ai-form-label",children:a?"분량":"Length"}),e.jsxs("select",{className:"form-select",value:i.length,onChange:s=>n("length",s.target.value),children:[e.jsx("option",{value:"본문 2문단 이내",children:a?"본문 2문단 이내":"Within 2 paragraphs"}),e.jsx("option",{value:"본문 3문단 이내",children:a?"본문 3문단 이내":"Within 3 paragraphs"}),e.jsx("option",{value:"본문 5문단 이내",children:a?"본문 5문단 이내":"Within 5 paragraphs"})]})]})]}),e.jsxs("div",{className:"ai-form-group",children:[e.jsxs("label",{className:"ai-form-label",children:[e.jsx("span",{className:"label-icon",children:e.jsx("i",{className:"fa-solid fa-list-check"})})," ",a?"핵심 내용":"Key Facts"," *"]}),e.jsx("textarea",{className:"form-textarea",rows:6,value:i.facts,onChange:s=>n("facts",s.target.value),placeholder:a?`행사명 / 일시 / 장소 / 대상 / 신청 방법 등 확정된 사실만 적어주세요.

예)
행사명: 생성형 AI 업무활용 특강
일시: 7월 15일(화) 14:00
장소: 시청 별관 대강당
대상: 본청·구청 공무원`:"Enter only confirmed facts: event, date, place, audience, how to apply."})]}),e.jsx("button",{className:"ai-generate-btn",onClick:b,disabled:t,children:t?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"spinner"})," ",l("ai.generating")]}):e.jsx(e.Fragment,{children:l("ai.generate")})})]});return e.jsxs(e.Fragment,{children:[e.jsx(F,{title:l("tools.officialDoc"),path:"/tools/official-doc"}),e.jsx(P,{title:l("tools.officialDoc"),description:a?"제목·수신·본문·붙임 구조를 지킨 공문 초안을 만듭니다. 입력에 없는 일정·금액은 [확인 필요]로 표시합니다.":"Drafts official documents in standard structure, marking unverified details as [needs verification].",inputPanel:C,output:c,isStreaming:t,error:d,usage:u,toolId:"official-doc"})]})}export{M as default};

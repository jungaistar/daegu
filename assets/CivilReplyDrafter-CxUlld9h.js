import{C as w,I as R,r as f,l as e}from"./index-bPHOlBSv.js";import{u as K,A as P,K as k,S as I,T as E}from"./SubscribePrompt-B81F9WXX.js";import{u as F,A as T}from"./useApiKeys-a1m01sNa.js";import{S as $}from"./SEOHead-BOPenNwz.js";import"./useUsageLog-BHUhIScJ.js";import"./index-DEmZ24Wf.js";function D({complaint:o,department:t,category:c,stance:r,tone:m,basis:p,language:d}){return[{role:"system",content:`You are a civil affairs officer at Daegu Metropolitan City Hall drafting replies to citizen complaints. You are courteous, concrete, and never promise anything without a stated basis. Always respond in ${d==="ko"?"한국어":"English"}.`},{role:"user",content:`아래 민원에 대한 답변 초안을 작성해주세요.

## 민원 정보
- **담당 부서**: ${t||"미지정"}
- **민원 유형**: ${c||"미분류"}
- **처리 방향**: ${r||"검토 후 회신"}
- **어투**: ${m||"정중하고 이해하기 쉬운 표현"}

## 민원 내용
${o||"(민원 내용 미입력)"}

## 근거 자료 (담당자 입력)
${p||"(근거 미입력)"}

## 답변 구조

1. **인사와 접수 확인** — 민원을 접수했음을 알림
2. **민원 요지 확인** — 요청 사항을 우리가 이렇게 이해했다고 한 문장으로 되짚기
3. **검토 결과** — 처리 방향과 그 근거
4. **후속 안내** — 언제까지 무엇이 진행되는지, 추가 문의처
5. **맺음말**

## 반드시 지킬 것

- **근거 자료에 없는 법령·조례·처리 기한을 지어내지 마세요.** \`[확인 필요]\` 로 표시합니다.
- 확정되지 않은 사항에 "해드리겠습니다"라고 단정하지 말고, "검토 후 안내드리겠습니다"처럼 씁니다.
- 행정 용어·한자어는 시민이 이해할 표현으로 풀어 씁니다.
- 민원인의 이름·연락처·주소는 답변 본문에 반복하지 않습니다.

작성 후 **"발송 전 확인이 필요한 항목"** 을 따로 정리해 주세요.`}]}function q(){const{language:o,t}=w(),{output:c,isStreaming:r,error:m,usage:p,generate:d}=K(),{keys:x,getEffectiveApiKey:v,hasAnyKey:j}=F(),u=R(),a=o==="ko",[i,y]=f.useState("openai"),[l,b]=f.useState({complaint:"",department:"",category:"시설물 유지보수",stance:"검토 후 회신",tone:"정중하고 이해하기 쉬운 표현",basis:""}),n=(s,h)=>b(g=>({...g,[s]:h}));async function N(){if(!l.complaint.trim()){u.warning(a?"민원 내용을 입력해주세요.":"Please enter the complaint.");return}const{key:s,source:h}=v(i);if(!s){u.warning(t("ai.noApiKey"));return}const g=D({...l,language:o}),S=T[i];try{await d({provider:i,apiKey:s,model:S.defaultModel,messages:g,toolId:"civil-reply",keySource:h})}catch(A){u.error(A.message)}}const C=e.jsxs(e.Fragment,{children:[e.jsxs("h3",{children:[e.jsx("i",{className:"fa-solid fa-comments"})," ",t("tools.civilReply")]}),e.jsx(P,{selected:i,onSelect:y,apiKeys:x}),e.jsx(k,{provider:i}),!j(i)&&e.jsx(I,{}),e.jsxs("div",{className:"ai-form-group",children:[e.jsxs("label",{className:"ai-form-label",children:[e.jsx("span",{className:"label-icon",children:e.jsx("i",{className:"fa-solid fa-envelope-open-text"})})," ",a?"민원 내용":"Complaint"," *"]}),e.jsx("textarea",{className:"form-textarea",rows:6,value:l.complaint,onChange:s=>n("complaint",s.target.value),placeholder:a?`접수된 민원 내용을 붙여넣으세요.

※ 민원인 이름·연락처·주소는 지우고 붙여넣어 주세요.`:"Paste the complaint. Remove the complainant's name, contact and address first."})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"},children:[e.jsxs("div",{className:"ai-form-group",children:[e.jsx("label",{className:"ai-form-label",children:a?"담당 부서":"Department"}),e.jsx("input",{className:"form-input",value:l.department,onChange:s=>n("department",s.target.value),placeholder:a?"예: 도로과":"e.g., Roads Division"})]}),e.jsxs("div",{className:"ai-form-group",children:[e.jsx("label",{className:"ai-form-label",children:a?"민원 유형":"Category"}),e.jsxs("select",{className:"form-select",value:l.category,onChange:s=>n("category",s.target.value),children:[e.jsx("option",{value:"시설물 유지보수",children:a?"시설물 유지보수":"Facility maintenance"}),e.jsx("option",{value:"제도·사업 문의",children:a?"제도·사업 문의":"Program inquiry"}),e.jsx("option",{value:"단속 이의",children:a?"단속 이의":"Enforcement appeal"}),e.jsx("option",{value:"건의·제안",children:a?"건의·제안":"Suggestion"}),e.jsx("option",{value:"불편 신고",children:a?"불편 신고":"Complaint report"})]})]})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"},children:[e.jsxs("div",{className:"ai-form-group",children:[e.jsx("label",{className:"ai-form-label",children:a?"처리 방향":"Stance"}),e.jsxs("select",{className:"form-select",value:l.stance,onChange:s=>n("stance",s.target.value),children:[e.jsx("option",{value:"수용 — 조치 예정",children:a?"수용 — 조치 예정":"Accepted"}),e.jsx("option",{value:"검토 후 회신",children:a?"검토 후 회신":"Under review"}),e.jsx("option",{value:"타 부서 이관",children:a?"타 부서 이관":"Transferred"}),e.jsx("option",{value:"수용 곤란 — 사유 설명",children:a?"수용 곤란":"Cannot accommodate"})]})]}),e.jsxs("div",{className:"ai-form-group",children:[e.jsx("label",{className:"ai-form-label",children:a?"어투":"Tone"}),e.jsxs("select",{className:"form-select",value:l.tone,onChange:s=>n("tone",s.target.value),children:[e.jsx("option",{value:"정중하고 이해하기 쉬운 표현",children:a?"정중·쉬운 표현":"Courteous & plain"}),e.jsx("option",{value:"공식적이고 절제된 표현",children:a?"공식·절제":"Formal"})]})]})]}),e.jsxs("div",{className:"ai-form-group",children:[e.jsxs("label",{className:"ai-form-label",children:[e.jsx("span",{className:"label-icon",children:e.jsx("i",{className:"fa-solid fa-scale-balanced"})})," ",a?"근거 자료":"Basis"," ",e.jsxs("span",{className:"optional",children:["(",a?"있으면 입력":"if available",")"]})]}),e.jsx("textarea",{className:"form-textarea",rows:4,value:l.basis,onChange:s=>n("basis",s.target.value),placeholder:a?`적용 조례·규정, 현장 확인 결과, 처리 일정 등을 적어주세요.
비워 두면 답변에 [확인 필요]로 표시됩니다.`:"Applicable ordinances, site inspection results, schedule. Left blank, the reply marks them as needing verification."})]}),e.jsx("button",{className:"ai-generate-btn",onClick:N,disabled:r,children:r?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"spinner"})," ",t("ai.generating")]}):e.jsx(e.Fragment,{children:t("ai.generate")})})]});return e.jsxs(e.Fragment,{children:[e.jsx($,{title:t("tools.civilReply"),path:"/tools/civil-reply"}),e.jsx(E,{title:t("tools.civilReply"),description:a?"민원 답변 초안을 만듭니다. 근거 자료에 없는 법령·기한은 단정하지 않고 [확인 필요]로 남깁니다.":"Drafts a reply to a citizen complaint without asserting anything beyond the stated basis.",inputPanel:C,output:c,isStreaming:r,error:m,usage:p,toolId:"civil-reply"})]})}export{q as default};

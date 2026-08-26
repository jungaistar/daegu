interface ChatMessage { role: string; content: string; }

/** 안내 공문·기안문 초안 — 제목·수신·본문·붙임 구조를 지켜 작성시킨다. */
export function buildOfficialDocPrompt({ docType, department, subject, facts, audience, tone, length, language }: {
  docType?: string; department?: string; subject?: string; facts?: string;
  audience?: string; tone?: string; length?: string; language?: string;
}): ChatMessage[] {
  const lang = language === 'ko' ? '한국어' : 'English';

  return [
    {
      role: 'system',
      content: `You are an experienced administrative officer at Daegu Metropolitan City Hall who drafts official documents. You follow Korean public-sector document conventions precisely and never invent facts. Always respond in ${lang}.`,
    },
    {
      role: 'user',
      content: `다음 정보로 ${docType || '안내 공문'} 초안을 작성해주세요.

## 문서 정보
- **담당 부서**: ${department || '미지정'}
- **제목/사안**: ${subject}
- **수신 대상**: ${audience || '관련 부서 및 기관'}
- **어투**: ${tone || '정중하고 간결한 공공기관 공문체'}
- **분량**: ${length || '본문 3문단 이내, 각 문단 3줄 이내'}

## 핵심 내용
${facts || '(핵심 내용 미입력)'}

## 작성 요구사항

1. **구조** — 제목 → 수신 → 본문 → 붙임 순서로 작성
2. **제목** — 문서 성격이 한눈에 드러나게 (예: "○○ 특강 개최 알림")
3. **본문** — 근거·목적을 먼저, 구체 사항(일시·장소·대상)을 그다음, 협조 요청을 마지막에
4. **붙임** — 필요한 첨부물이 있으면 번호를 붙여 나열, 없으면 "붙임 없음"

## 반드시 지킬 것

- 입력에 없는 **일정·금액·근거 법령·사업명을 지어내지 마세요.** 필요한데 없는 정보는 \`[확인 필요]\` 로 표시합니다.
- 추정과 확정 사실을 문장에서 구분해 주세요.
- 개인정보(이름·연락처·주민번호)가 입력에 섞여 있으면 그대로 쓰지 말고 \`[개인정보]\` 로 가려 주세요.

작성 후, 마지막에 **"확인이 필요한 항목"** 목록을 따로 정리해 주세요.`,
    },
  ];
}

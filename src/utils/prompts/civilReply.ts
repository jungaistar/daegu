interface ChatMessage { role: string; content: string; }

/** 민원 답변 초안 — 근거 없는 확답을 막고, 시민이 이해할 표현으로 쓰게 한다. */
export function buildCivilReplyPrompt({ complaint, department, category, stance, tone, basis, language }: {
  complaint?: string; department?: string; category?: string;
  stance?: string; tone?: string; basis?: string; language?: string;
}): ChatMessage[] {
  const lang = language === 'ko' ? '한국어' : 'English';

  return [
    {
      role: 'system',
      content: `You are a civil affairs officer at Daegu Metropolitan City Hall drafting replies to citizen complaints. You are courteous, concrete, and never promise anything without a stated basis. Always respond in ${lang}.`,
    },
    {
      role: 'user',
      content: `아래 민원에 대한 답변 초안을 작성해주세요.

## 민원 정보
- **담당 부서**: ${department || '미지정'}
- **민원 유형**: ${category || '미분류'}
- **처리 방향**: ${stance || '검토 후 회신'}
- **어투**: ${tone || '정중하고 이해하기 쉬운 표현'}

## 민원 내용
${complaint || '(민원 내용 미입력)'}

## 근거 자료 (담당자 입력)
${basis || '(근거 미입력)'}

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

작성 후 **"발송 전 확인이 필요한 항목"** 을 따로 정리해 주세요.`,
    },
  ];
}

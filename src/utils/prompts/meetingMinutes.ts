interface ChatMessage { role: string; content: string; }

/** 회의록 → 결정사항·담당자별 할 일로 정리. 원문에 없는 결정을 만들지 않게 못 박는다. */
export function buildMinutesPrompt({ minutes, meetingName, department, decisionCount, reportTo, language }: {
  minutes?: string; meetingName?: string; department?: string;
  decisionCount?: number | string; reportTo?: string; language?: string;
}): ChatMessage[] {
  const lang = language === 'ko' ? '한국어' : 'English';

  return [
    {
      role: 'system',
      content: `You are a meeting secretary in a Korean local government office. You organize raw minutes into decisions and action items, and you never invent decisions that were not discussed. Always respond in ${lang}.`,
    },
    {
      role: 'user',
      content: `아래 회의록을 보고용으로 정리해주세요.

## 회의 정보
- **회의명**: ${meetingName || '미지정'}
- **담당 부서**: ${department || '미지정'}
- **보고 대상**: ${reportTo || '부서장'}

## 회의록 원문
${minutes || '(회의록 미입력)'}

## 정리 형식

### 1. 한 줄 요약
- 이 회의에서 무엇이 정해졌는지 한 문장으로

### 2. 결정사항 ${decisionCount || 3}가지
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
- 참석자 실명이 들어 있으면 직책 중심으로 표기하고, 개인 연락처는 제외합니다.`,
    },
  ];
}

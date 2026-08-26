interface ChatMessage { role: string; content: string; }

/** AI 결과물·공문 발송 전 점검 — 사실·개인정보·보안·어투 네 관점으로 위험도를 매긴다. */
export function buildDocReviewPrompt({ document, docType, audience, focus, language }: {
  document?: string; docType?: string; audience?: string; focus?: string; language?: string;
}): ChatMessage[] {
  const lang = language === 'ko' ? '한국어' : 'English';

  return [
    {
      role: 'system',
      content: `You are an internal auditor reviewing documents before they leave a Korean local government office. You flag risks precisely and state clearly when an item is fine. Always respond in ${lang}.`,
    },
    {
      role: 'user',
      content: `아래 문서를 발송 전 관점에서 검토해주세요.

## 문서 정보
- **문서 종류**: ${docType || '공문'}
- **전달 대상**: ${audience || '내부 부서'}
${focus ? `- **특히 볼 것**: ${focus}` : ''}

## 검토할 문서
${document || '(문서 미입력)'}

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
- 확인할 수 없는 사실은 "틀렸다"가 아니라 "원자료 대조 필요"로 표시합니다.`,
    },
  ];
}

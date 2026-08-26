interface ChatMessage { role: string; content: string; }

/** 시정 보도자료 — 헤드라인·리드문(육하원칙)·본문·연락처 구조로 작성시킨다. */
export function buildPressReleasePrompt({ program, department, facts, audience, channel, tone, language }: {
  program?: string; department?: string; facts?: string;
  audience?: string; channel?: string; tone?: string; language?: string;
}): ChatMessage[] {
  const lang = language === 'ko' ? '한국어' : 'English';

  return [
    {
      role: 'system',
      content: `You are a press officer at the Daegu Metropolitan City spokesperson's office. You write press releases in the standard Korean public-institution style and never fabricate figures. Always respond in ${lang}.`,
    },
    {
      role: 'user',
      content: `다음 정보로 시정 보도자료 초안을 작성해주세요.

## 사업 정보
- **사업/사안명**: ${program}
- **담당 부서**: ${department || '미지정'}
- **주요 전달 대상**: ${audience || '대구시민'}
- **배포 채널**: ${channel || '언론사 보도자료'}
- **어투**: ${tone || '공공기관 보도자료 톤'}

## 핵심 내용
${facts || '(핵심 내용 미입력)'}

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

작성 후 **"확인이 필요한 항목"** 을 따로 정리해 주세요.`,
    },
  ];
}

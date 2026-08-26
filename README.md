# daegu — 대구광역시 공무원 AI 실무 교육

대구광역시 공무원을 위한 AI 업무자동화·데이터분석 실무 교육 학습 플랫폼.
ChatGPT·Claude·Google Apps Script로 문서·엑셀·데이터·홍보 업무를 직접 자동화하는 2단계(중급·고급) 실습 과정.

- 배포 URL: https://daegu.dreamitbiz.com
- 베이스: `cnu`(전남대 생성형 AI 교육) 코드베이스 포팅
- 스택: React 19 · Vite 7 · TypeScript · Supabase · React Router 7

## 과정 구성

| 단계 | 과정명 | 시간 | 주요 내용 |
|------|--------|------|-----------|
| 중급 | AI 기반 업무자동화 실무 | 2일 · 8시간 | AI 문서/엑셀 자동화, ChatGPT 데이터분석, 내 업무 자동화 |
| 고급 | AI 기반 데이터 분석 및 활용 | 2일 · 8시간 | 바이브코딩 도구 제작, 데이터분석 심화, AI 정책 홍보 콘텐츠, 통합활용 |

## 개발

```bash
npm install
npm run dev       # 로컬 개발 서버
npm run build     # tsc -b && vite build
npm run preview   # 빌드 결과 미리보기
npm run deploy    # gh-pages -d dist (수동 배포)
```

### 환경변수 (`.env`)

로그인·결제(Supabase/PortOne)를 사용하려면 다음 값이 필요합니다. 미설정 시 build는 통과하나 로그인 기능은 비활성화됩니다.

```
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
```

> Supabase는 DreamIT Biz 공용 단일 프로젝트를 사용하며, 본 사이트 테이블 접두사는 `daegu_` 입니다.

## 데이터 위치

- 커리큘럼: `src/data/courses.ts` (`PROGRAMS` — intermediate / advanced)
- 학습자료: `src/data/materials.ts`
- 실습 따라하기: `src/data/handsOn.ts`
- 사이트 설정: `src/config/site.ts`

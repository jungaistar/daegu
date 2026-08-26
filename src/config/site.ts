/**
 * ============================================================
 *  DAEGU (대구광역시 공무원 AI 실무 교육) 사이트 설정
 * ============================================================
 */

import type { SiteConfig } from '../types';

const site: SiteConfig = {
  id: 'daegu',
  name: 'DAEGU AI Education',
  nameKo: '대구 공무원 AI 실무 교육',
  description: 'ChatGPT·Claude·Google Apps Script로 문서·엑셀·데이터·홍보 업무를 직접 자동화하는 대구광역시 공무원 대상 2단계 실습 교육 — 중급(업무자동화), 고급(데이터분석 및 활용)',
  url: 'https://daegu.dreamitbiz.com',
  dbPrefix: 'daegu_',

  parentSite: {
    name: 'DreamIT Biz',
    url: 'https://www.dreamitbiz.com'
  },

  brand: {
    parts: [
      { text: 'DAEGU', className: 'brand-dream' },
      { text: ' AI', className: 'brand-it' },
      { text: ' -Edu', className: 'brand-biz' }
    ]
  },

  themeColor: '#0F8B8D',

  company: {
    name: '드림아이티비즈(DreamIT Biz)',
    ceo: '이애본',
    bizNumber: '601-45-20154',
    salesNumber: '제2024-수원팔달-0584호',
    publisherNumber: '제2026-000026호',
    address: '경기도 수원시 팔달구 매산로 45, 419호',
    email: 'aebon@dreamitbiz.com',
    phone: '010-3700-0629',
    kakao: 'aebon',
    businessHours: '평일: 09:00 ~ 18:00',
  },

  features: {
    shop: true,
    community: true,
    search: true,
    auth: true,
    license: false,
  },

  // 기본 컬러셋 = daegu(중급 teal + 고급 indigo). 나머지는 후보 컬러셋
  colors: [
    { name: 'daegu', color: '#0F8B8D' },     // 대구 틸+인디고 (기본)
    { name: 'research', color: '#14B8A6' },  // 딥네이비+틸
    { name: 'academic', color: '#C8A04A' },  // 네이비+골드
    { name: 'vibe', color: '#6D28D9' },      // 모던 바이올렛
  ],

  // 2개 과정명을 각각 상단 메뉴(링크)로 — 과정 내부는 좌측 사이드바로 이동
  menuItems: [
    { path: '/courses/intermediate', activePath: '/courses/intermediate', labelKey: 'site.nav.progIntermediate' },
    { path: '/courses/advanced', activePath: '/courses/advanced', labelKey: 'site.nav.progAdvanced' },
    { path: '/prompt-eval', activePath: '/prompt-eval', labelKey: 'site.nav.promptPractice' },
    { path: '/appendix', activePath: '/appendix', labelKey: 'site.nav.appendix' },
    { path: '/xmonster', activePath: '/xmonster', labelKey: 'site.nav.xmonster' },
    { path: '/recommended', labelKey: 'site.nav.recommended' },
    { path: '/reference', activePath: '/reference', labelKey: 'site.nav.reference' },
  ],

  footerLinks: [
    { path: '/courses', labelKey: 'nav.education' },
    { path: '/prompt-eval', labelKey: 'site.nav.promptPractice' },
    { path: '/community', labelKey: 'nav.community' },
    { path: '/instructor', labelKey: 'site.nav.instructor' },
    { path: '/about', labelKey: 'nav.about' },
  ],

  familySites: [
    { name: 'DreamIT Biz (본사이트)', url: 'https://www.dreamitbiz.com' },
    { name: '대학교육 AI', url: 'https://university.dreamitbiz.com' },
    { name: '교수학습 AI 도구', url: 'https://teaching.dreamitbiz.com' },
    { name: 'AI 프롬프트 가이드', url: 'https://ai-prompt.dreamitbiz.com' },
  ]
};

export default site;

/** AI 도구 정의 */
export interface AITool {
  id: string;
  path: string;
  icon: string;
  nameKo: string;
  nameEn: string;
  descKo: string;
  descEn: string;
}

export const AI_TOOLS: AITool[] = [
  {
    id: 'official-doc',
    path: '/tools/official-doc',
    icon: 'fa-file-lines',
    nameKo: '공문 생성기',
    nameEn: 'Official Document Generator',
    descKo: '제목·수신·본문·붙임 구조를 지킨 안내 공문·기안문 초안을 만듭니다.',
    descEn: 'Drafts official documents in the standard title/recipient/body/attachment structure.',
  },
  {
    id: 'press-release',
    path: '/tools/press-release',
    icon: 'fa-bullhorn',
    nameKo: '보도자료 생성기',
    nameEn: 'Press Release Generator',
    descKo: '헤드라인·리드문(육하원칙)·본문·연락처 구조로 시정 보도자료를 작성합니다.',
    descEn: 'Writes city press releases with headline, 5W1H lead, body and contact.',
  },
  {
    id: 'minutes',
    path: '/tools/minutes',
    icon: 'fa-clipboard-list',
    nameKo: '회의록 정리',
    nameEn: 'Minutes Organizer',
    descKo: '회의록을 결정사항과 담당자별 할 일 표로 정리합니다.',
    descEn: 'Turns raw minutes into decisions and an owner/task/deadline table.',
  },
  {
    id: 'civil-reply',
    path: '/tools/civil-reply',
    icon: 'fa-comments',
    nameKo: '민원 답변 초안',
    nameEn: 'Civil Reply Drafter',
    descKo: '민원 답변 초안을 만듭니다. 근거 없는 확답 대신 [확인 필요]로 남깁니다.',
    descEn: 'Drafts replies to citizen complaints without asserting beyond the stated basis.',
  },
  {
    id: 'doc-review',
    path: '/tools/doc-review',
    icon: 'fa-magnifying-glass-chart',
    nameKo: '문서 검토',
    nameEn: 'Document Reviewer',
    descKo: '발송 전 사실 확인·개인정보·보안·어투 네 관점으로 점검합니다.',
    descEn: 'Reviews documents before sending across facts, personal data, security and tone.',
  },
];

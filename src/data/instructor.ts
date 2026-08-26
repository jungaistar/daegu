/**
 * ============================================================
 *  DAEGU — 강사 소개 데이터
 *  출처: nonghyup(농협사료 AI 실무) instructor.html 를 대구 사이트로 이식.
 *  본문은 한국어 원문을 유지하고, 화면 라벨만 i18n 처리한다.
 * ============================================================
 */

/** 연도가 붙는 항목 (학력 등) */
export interface TimelineItem {
  date: string;
  text: string;
}

/** 제목 + 목록 묶음 (핵심 역량 · 자격) */
export interface Group {
  heading: string;
  items: string[];
}

/** 이름표-값 한 쌍 (요약표 · 저서) */
export interface Fact {
  label: string;
  value: string;
}

export interface InstructorProfile {
  name: string;
  nameEn: string;
  initial: string;
  role: string;
  email: string;
  intro: string[];
  facts: Fact[];
  education: TimelineItem[];
  career: string[];
  competencies: Group[];
  certifications: Group[];
  books: Fact[];
  vision: string;
}

export const INSTRUCTOR: InstructorProfile = {
  name: '정동엽',
  nameEn: 'JEONG DONG-YEOP',
  initial: '정',
  role: '커리어 전략가 · 미래예측 전문가 · 대학 겸임교수',
  email: 'newjob4u@kyonggi.ac.kr',

  intro: [
    '‘인간중심 AI 기본사회’로의 이행을 설계하는 커리어 전략가입니다. 대학 겸임교수로서 생성형 AI 강의와 청소년·청년·성인·베이비부머의 상담, 경력 재설계·전직·면접 코칭을 지원합니다.',
    '미래예측 전문가로서 20년간의 IT 교육정보화·이러닝 구축 경험을 기반으로 AI 시대의 직업 패러다임 전환을 견인하고 있습니다.',
  ],

  facts: [
    { label: '소속', value: 'AI미래직업연구소 소장' },
    { label: '겸임', value: '동아방송예술대학교 교양융합학부 겸임교수' },
    { label: '전문', value: '생성형 AI · 미래예측 · 커리어 설계' },
    { label: '교육 대상', value: '대학 · 기업 · 공공기관 · 교육지원청' },
  ],

  education: [
    { date: '2026.05', text: '경기대학교 일반대학원 직업학과 박사과정 수료' },
    { date: '2014.08', text: '가천대학교 경영대학원 고용 및 직업상담학과 석사' },
    { date: '2012.02', text: '국제문화대학원대학교 학습코칭 전공 · 교육학석사' },
    { date: '2012.02', text: '사회복지사 졸업 · 행정학학사 (교육과학기술부)' },
    { date: '1994.08', text: '부산외국어대학교 컴퓨터공학 졸업 · 공학사' },
  ],

  career: [
    'AI미래직업연구소 소장',
    '키다리진로직업협동조합 이사장(대표)',
    '사단법인 기본사회 AI기본사회 교육센터장',
    '(전) 아시아미래인재연구소 실장',
    '한국뉴욕주립대학교 Futures Master & Futures Coach',
    '와우캠프 대표 강사 · 경기·인천 진로지도 특강',
    '서울시 산업진흥원 IT 플랫폼 전문컨설턴트 · 창업전문위원(창업닥터) · 신직업 전문코치',
  ],

  competencies: [
    {
      heading: '미래 진로지도 · 창업 · 창직 · 빅데이터 · 전직지원 강의',
      items: [
        '한국기술교육대학교 능력개발원 · 「4차 산업혁명시대 일과 직업의 변화」 전임교수 (2016–2020)',
        '동아방송예술대학교 교양융합학부 겸임교수 · 문화예술콘텐츠 창업, 취업과 경력개발 외 (2017–현재)',
        '전남대학교 · 생성형 AI ADVANCED 과정 (교수 대상) · 생성형 AI 기반 문서/인사행정 실무자동화 과정',
        '동신대학교 · 클로드 기반 교수 설계 강의 (교수 대상)',
        '조선대학교 · 클로드를 활용한 업무자동화 강의 (교수 대상)',
        'K-Digital 양성과정 · 빅데이터 개론 및 데이터 전처리 강의',
        'SKALA 4기 AI 캠퍼스 및 K-뉴딜 과정 실기 강사',
        '8개 교육지원청(금산·논산·음성·서산·공주 등) · 「4차 산업혁명과 진로지도」 특강',
      ],
    },
    {
      heading: '직업 · 진로 · 창업 · 학습 분야 강의',
      items: [
        '미래학 기반 전략컨설팅 및 진로지도 (전략컨설팅 · 비전수립)',
        '전 연령층 대상 직업상담 및 전직 강의',
        '자기주도적 학습코칭 강의 · 학부모 코칭 (감정코칭 · 자녀 진로지도)',
        '직무스트레스 관리 워크샵 (NLP 기반 스트레스 조절)',
        '시뮬레이션형 창업 컨설팅 (미래예측기법) · 미래전략 컨설턴트 및 비전코칭',
      ],
    },
  ],

  certifications: [
    {
      heading: '직업심리 전문가 · 한국고용정보원',
      items: [
        '직업심리전문가 (청소년 · 대학생 · 성인 부문)',
        '청소년 온라인 직업상담원 · 온라인 직업심리전문가',
        '희망취업프로그램 · 취업성공패키지 운영자 · CAP+ 진행자',
      ],
    },
    {
      heading: '미래학 분야',
      items: [
        '미래학 마스터 6학기 졸업 (한국뉴욕주립대 아시아미래인재연구소)',
        'Futures Master & Futures Coach · 미래준비학교 Master Coach',
      ],
    },
    {
      heading: '창업 · 창직 · 직업상담',
      items: [
        '신직업 전문코칭 · EduTool KIT 디자이너 · IT 플랫폼 컨설턴트 (서울시 산업진흥원)',
        '제3기 희망설계아카데미(서울시 청년 창업닥터) · 커리어 컨설턴트(삼성SDS 멀티캠퍼스)',
      ],
    },
    {
      heading: '국가 · 민간 공인',
      items: [
        '사회복지사 2급 · 평생교육사 2급 · 외국인을 위한 한국어교사 2급',
        '직업훈련교사 3급 — 마케팅 / 정보기술전략·계획(빅데이터), 고용노동부',
        '국제공인 NLP Practitioner · 프레디저 전문강사 · 모금전문가 수료(희망제작소)',
      ],
    },
  ],

  books: [
    { label: '『생각의 미래』', value: '지식노마드 · 2016.12' },
    { label: '『강서구 사회적 경제』', value: '고등학교 교재 집필' },
  ],

  vision:
    '미래예측 전문가로서 20년의 IT 교육정보화 경험을 토대로, 인간중심 AI 기본사회로의 이행을 설계하는 커리어 전략가로 활동하고 있습니다.',
};

export default INSTRUCTOR;

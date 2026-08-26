// 2개 과정별 게시판 (교육과정·학습자료와 동일한 id 체계)
export const BOARDS = [
  {
    id: 'intermediate',
    icon: 'fa-bolt',
    nameKo: '중급 · 업무자동화 실무',
    nameEn: 'Intermediate · Workflow Automation',
    descKo: '중급(업무자동화 실무) 과정 수강생들이 자료·질문·후기를 나누는 게시판입니다.',
    descEn: 'For learners of the Intermediate · Workflow Automation program.',
    color: '#0F8B8D',
  },
  {
    id: 'advanced',
    icon: 'fa-chart-line',
    nameKo: '고급 · 데이터분석 및 활용',
    nameEn: 'Advanced · Data Analysis & Application',
    descKo: '고급(데이터분석 및 활용) 과정 수강생들의 자료·질문·토론 공간입니다.',
    descEn: 'For learners of the Advanced · Data Analysis & Application program.',
    color: '#4F46E5',
  },
];

export const BOARD_CATEGORIES = [
  { key: 'all', labelKo: '전체', labelEn: 'All' },
  { key: 'question', labelKo: 'Q&A', labelEn: 'Q&A' },
  { key: 'resource', labelKo: '자료공유', labelEn: 'Resources' },
  { key: 'free', labelKo: '자유', labelEn: 'Free' },
  { key: 'notice', labelKo: '공지', labelEn: 'Notice' },
];

export function getBoardById(id: string) {
  return BOARDS.find(b => b.id === id);
}

export function getCategoriesForBoard(_boardId: string) {
  return BOARD_CATEGORIES;
}

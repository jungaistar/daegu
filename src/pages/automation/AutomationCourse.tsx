import { Link } from 'react-router-dom';
import GuidePage from '../../components/GuidePage';
import overview from './data/auto-00-overview';
import s1 from './data/auto-01-understand';
import s2 from './data/auto-02-select';
import s3 from './data/auto-03-design';
import s4 from './data/auto-04-generate';
import s5 from './data/auto-05-test';
import s6 from './data/auto-06-security';
import s7 from './data/auto-07-plan';
import cases from './data/auto-08-cases';
import { useLanguage } from '../../contexts/LanguageContext';
import '../../styles/practice.css';
import type { ReactElement } from 'react';

/**
 * 행정업무 자동화 — 바이브코딩 기반 자동화 도구 제작 (1일 8시간, 강사 정동엽).
 * 출처: doc/대구시_바이브코딩 자동화.png 의 확정 시간표.
 * 40~50대 공무원이 순서대로 따라 할 수 있도록 교시별 단계 실습으로 구성했다.
 */
export default function AutomationCourse(): ReactElement {
  const { language } = useLanguage();
  const isKo = language === 'ko';

  return (
    <GuidePage
      seoTitle="행정업무 자동화"
      seoTitleEn="Administrative Automation"
      seoDescription="바이브코딩 기반 행정업무 자동화 도구 제작 — 1일 8시간 과정. 교시별 따라하기 실습과 대구시 부서별 사례집"
      path="/automation"
      hero={{
        icon: 'fa-gears',
        color: '#0E6BA8',
        eyebrow: '행정업무 자동화 · 1일 8시간',
        eyebrowEn: 'Administrative Automation · 1 Day, 8 Hours',
        title: '행정업무 자동화',
        titleEn: 'Administrative Automation',
        tagline: '반복 업무 하나를 골라 버튼 하나로 도는 도구 만들기',
        taglineEn: 'Turn one repetitive task into a one-click tool',
        desc: '코딩을 배우는 과정이 아닙니다. 매주 반복하는 업무를 AI에게 말로 설명해 자동화 도구로 만들고, 부서에 적용할 계획서까지 완성하는 1일 과정입니다.',
        descEn: 'This is not a coding course. Describe a weekly repetitive task to AI, turn it into a working tool, and finish with a rollout plan for your department — all in one day.',
        meta: [
          { icon: 'fa-user-check', text: '대구광역시 공무원', textEn: 'Daegu city officials' },
          { icon: 'fa-layer-group', text: '8교시 · 사례집 포함', textEn: '8 sessions + case book' },
          { icon: 'fa-signal', text: '입문 (코딩 지식 불필요)', textEn: 'Beginner (no coding needed)' },
        ],
        note: '프로그래밍을 몰라도 됩니다. 화면에 나오는 순서를 그대로 따라 하시면 되고, 막히면 그 자리에서 손을 드세요.',
        noteEn: 'No programming background required — follow the on-screen steps in order, and raise your hand whenever you get stuck.',
      }}
      dataFiles={[overview, s1, s2, s3, s4, s5, s6, s7, cases]}
      ctaBanner={
        <div className="prompt-practice-cta">
          <div className="prompt-practice-cta-text">
            <h3>{isKo ? '이 과정을 처음 보신다면' : 'New to this course?'}</h3>
            <p>{isKo
              ? '위 목차의 「과정 개요 · 시간표」부터 순서대로 보세요. 각 교시는 그대로 따라 하면 되는 단계로 되어 있습니다.'
              : 'Start with "Overview & Schedule" above. Each session is written as steps you can follow directly.'}</p>
          </div>
          <Link to="/prompt-eval" className="prompt-practice-cta-btn">
            <i className="fa-solid fa-keyboard" />
            {isKo ? '프롬프트 기초 먼저 보기' : 'Prompt basics first'}
          </Link>
        </div>
      }
    />
  );
}

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

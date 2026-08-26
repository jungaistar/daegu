import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import { AI_TOOLS } from '../config/site';
import type { ReactElement } from 'react';

export default function About(): ReactElement {
  const { language } = useLanguage();

  return (
    <>
      <SEOHead
        title={language === 'ko' ? '소개' : 'About'}
        path="/about"
      />

      <section className="page-header">
        <div className="container">
          <h1>{language === 'ko' ? '대구광역시 생성형 AI 교육' : 'DAEGU Generative AI Education'}</h1>
          <p>{language === 'ko'
            ? '대구광역시 공무원을 위한 AI 업무자동화·데이터분석 실무 교육'
            : 'Practical AI automation and data analysis training for Daegu public officials'}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-card">
              <h2><i className="fa-solid fa-bullseye" /> {language === 'ko' ? '교육 목표' : 'Educational Goals'}</h2>
              <ul>
                <li>{language === 'ko' ? '생성형 AI의 원리와 활용법 이해' : 'Understanding generative AI principles and applications'}</li>
                <li>{language === 'ko' ? '반복 행정업무를 AI로 자동화하는 역량 강화' : 'Automating repetitive administrative work with AI'}</li>
                <li>{language === 'ko' ? '실무 중심의 AI 도구 활용 능력 배양' : 'Developing practical AI tool utilization skills'}</li>
                <li>{language === 'ko' ? '프롬프트 엔지니어링 역량 개발' : 'Developing prompt engineering competencies'}</li>
              </ul>
            </div>

            <div className="about-card">
              <h2><i className="fa-solid fa-users" /> {language === 'ko' ? '교육 대상' : 'Target Audience'}</h2>
              <div className="about-targets">
                <div className="target-item">
                  <i className="fa-solid fa-file-lines" />
                  <h4>{language === 'ko' ? '문서·기획 담당' : 'Documents & Planning'}</h4>
                  <p>{language === 'ko' ? '공문·보도자료·회의록 초안을 AI로 빠르게' : 'Draft official documents, press releases and minutes with AI'}</p>
                </div>
                <div className="target-item">
                  <i className="fa-solid fa-table" />
                  <h4>{language === 'ko' ? '데이터·집계 담당' : 'Data & Reporting'}</h4>
                  <p>{language === 'ko' ? '엑셀 집계·민원 분석·보고서 자동화' : 'Spreadsheet aggregation, complaint analysis, report automation'}</p>
                </div>
                <div className="target-item">
                  <i className="fa-solid fa-bullhorn" />
                  <h4>{language === 'ko' ? '홍보 담당' : 'Public Relations'}</h4>
                  <p>{language === 'ko' ? '카드뉴스·숏폼 등 정책 홍보 콘텐츠 제작' : 'Card news, short-form and policy PR content' }</p>
                </div>
              </div>
            </div>

            <div className="about-card">
              <h2><i className="fa-solid fa-wand-magic-sparkles" /> {language === 'ko' ? 'AI 도구' : 'AI Tools'}</h2>
              <p>{language === 'ko'
                ? '행정 업무에 바로 쓰는 AI 도구 5종입니다. 본인 API 키를 등록하면 사이트에서 바로 사용할 수 있습니다.'
                : 'Five AI tools for administrative work — usable on-site once you register your own API key.'}</p>
              <div className="about-tools">
                {AI_TOOLS.map(tool => (
                  <Link key={tool.id} to={tool.path} className="about-tool-tag">
                    <i className={`fa-solid ${tool.icon}`} /> {language === 'ko' ? tool.nameKo : tool.nameEn}
                  </Link>
                ))}
              </div>
              <Link className="about-more-link" to="/tools">
                {language === 'ko' ? 'AI 도구 전체 보기' : 'See all AI tools'}
                <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>

            <div className="about-card">
              <h2><i className="fa-solid fa-user-tie" /> {language === 'ko' ? '강사 정보' : 'Instructor'}</h2>
              <div className="instructor-info">
                <h4>{language === 'ko' ? '이애본 박사 (Aebon Lee, Ph.D)' : 'Dr. Aebon Lee (Ph.D)'}</h4>
                <p>{language === 'ko' ? 'DreamIT Biz 대표' : 'CEO of DreamIT Biz'}</p>
                <ul>
                  <li>{language === 'ko' ? '경기대학교 경영정보학과 겸임교수' : 'Adjunct Professor at Kyonggi University'}</li>
                  <li>{language === 'ko' ? 'AI·디지털 교육 전문가' : 'AI & Digital Education Expert'}</li>
                  <li>{language === 'ko' ? '84개 교육 사이트 운영' : 'Operating 84 education sites'}</li>
                </ul>
                <div className="instructor-contact">
                  <p><i className="fa-solid fa-envelope" /> aebon@dreamitbiz.com</p>
                  <p><i className="fa-solid fa-globe" /> www.dreamitbiz.com</p>
                </div>
                <Link className="about-more-link" to="/instructor">
                  {language === 'ko' ? '강사 소개 자세히 보기' : 'View full instructor profile'}
                  <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { COURSE_CATEGORIES } from '../data/courses';
import useCountUp from '../hooks/useCountUp';
import useAOS from '../hooks/useAOS';
import type { ReactElement } from 'react';

export default function Home(): ReactElement {
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  useAOS();

  const stat0 = useCountUp(2);
  const stat1 = useCountUp(8);
  const stat2 = useCountUp(8);
  const stat3 = useCountUp(24);

  const stats = [
    { value: stat0.count, label: language === 'ko' ? '단계별 과정' : 'Programs', suffix: '' },
    { value: stat1.count, label: language === 'ko' ? '과정당 시간' : 'Hours / Program', suffix: 'h' },
    { value: stat2.count, label: language === 'ko' ? '실습 교시' : 'Practice Sessions', suffix: '' },
    { value: stat3.count, label: language === 'ko' ? '실습 사례' : 'Practice Cases', suffix: '+' },
  ];

  const isKo = language === 'ko';
  const marqueeWords = (isKo
    ? 'ChatGPT · Claude · 문서자동화 · 엑셀자동화 · 데이터분석 · 바이브코딩 · 정책홍보 · 실습'
    : 'ChatGPT · Claude · Docs · Spreadsheets · Data Analysis · Vibe Coding · PR · Practice'
  ).split(' · ');

  // 교육 특징 (Overview band)
  const features = [
    { no: '01', icon: 'fa-laptop-code', title: isKo ? '실습 중심' : 'Hands-on', desc: isKo ? '강의는 최소, 실습은 최대. 모든 교시에 ChatGPT에 바로 입력하는 예시 프롬프트를 제공합니다.' : 'Minimal lecture, maximum practice — every session ships ready-to-use prompts.' },
    { no: '02', icon: 'fa-shield-halved', title: isKo ? '실무 도구 그대로' : 'Real tools', desc: isKo ? 'ChatGPT·Claude·Google Apps Script 등 현업에서 바로 쓰는 도구로 행정 업무를 자동화합니다.' : 'Automate admin work with ChatGPT, Claude and Apps Script — the tools you actually use.' },
    { no: '03', icon: 'fa-bullseye', title: isKo ? '단계별 과정' : 'Leveled', desc: isKo ? '중급(업무자동화 실무)과 고급(데이터분석 및 활용) 2단계 과정으로 설계했습니다.' : 'Two leveled programs: intermediate automation and advanced data analysis.' },
    { no: '04', icon: 'fa-clipboard-check', title: isKo ? '결과 평가하기' : 'Evaluate results', desc: isKo ? '만든 산출물을 AI로 평가·개선하는 ‘평가하기’ 실습으로 학습을 완성합니다.' : 'Close the loop by evaluating and improving your outputs with AI.' },
  ];

  // 교육 전 준비사항 (Before You Come)
  const prep = [
    { no: '1', title: isKo ? 'ChatGPT 계정' : 'ChatGPT account', desc: isKo ? '본인 계정으로 ChatGPT 로그인이 되는지 미리 확인해 주세요.' : 'Make sure you can log in to ChatGPT in advance.' },
    { no: '2', title: isKo ? '노트북 지참' : 'Bring a laptop', desc: isKo ? '실습용 노트북을 지참하세요. 크롬(Chrome) 브라우저 사용을 권장합니다.' : 'Bring a laptop; Chrome browser recommended.' },
    { no: '3', title: isKo ? '내 업무·연구 자료' : 'Your own material', desc: isKo ? '실제로 다뤄볼 본인 업무 문서나 연구 데이터를 1~2건 준비하면 효과가 큽니다.' : 'Prepare 1–2 real work/research files to practice on.' },
    { no: '4', title: isKo ? '사전 설문' : 'Pre-survey', desc: isKo ? '직무와 관심 분야 사전 설문에 응답하면 과정이 맞춤형으로 운영됩니다.' : 'Complete the short pre-survey so we can tailor the session.' },
  ];

  // 교육 안내 (Info cards)
  const infoCards = [
    { kicker: 'Format', rows: [
      { k: isKo ? '구성' : 'Structure', v: isKo ? '과정당 2일 · 8시간' : '2 days · 8h / program' },
      { k: isKo ? '하루 일정' : 'Per day', v: isKo ? '4시간 · 2과목' : '4h · 2 modules' },
      { k: isKo ? '비율' : 'Ratio', v: isKo ? '강의 20% · 실습 80%' : 'Lecture 20% · Practice 80%' },
    ] },
    { kicker: 'Who', rows: [
      { k: isKo ? '대상' : 'Audience', v: isKo ? '대구광역시 공무원' : 'Daegu Metropolitan City public officials' },
      { k: isKo ? '수준' : 'Level', v: isKo ? '중급·고급 2개 과정' : '2 programs, intermediate→advanced' },
      { k: isKo ? '플랫폼' : 'Platform', v: isKo ? 'ChatGPT · Claude' : 'ChatGPT · Claude' },
    ] },
    { kicker: 'Class', rows: [
      { k: isKo ? '담당 교수' : 'Instructors', v: isKo ? '이애본' : 'Aebon Lee' },
      { k: isKo ? '자료열람' : 'Access', v: isKo ? '회원가입·로그인 후' : 'After sign-up & login' },
      { k: isKo ? '문의' : 'Contact', v: 'aebon@dreamitbiz.com' },
    ] },
  ];

  return (
    <>
      <SEOHead title={t('site.home.title')} />

      {/* Hero — Editorial */}
      <section className="hero-ed">
        <div className="hero-ed-bg" aria-hidden="true" />
        <div className="container">
          <div className="hero-ed-grid">
            <div className="hero-ed-main">
              <div className="hero-ed-eyebrow" data-aos="fade-up">
                <span>{isKo ? '대구광역시 · 2026 · ChatGPT 실습 교육' : 'Daegu Metropolitan City · 2026 · ChatGPT'}</span>
              </div>
              <h1 className="hero-ed-title" data-aos="fade-up" data-aos-delay="50">
                {isKo ? 'ChatGPT로 배우는' : 'Learn with ChatGPT'}<br />
                <span className="accent">{isKo ? '생성형 AI 실무' : 'Hands-on Generative AI'}</span><br />
                <span className="accent">{isKo ? '2개 과정 · 각 8시간' : 'Two Programs · 8 Hours Each'}</span>
              </h1>
              <p className="hero-ed-lead" data-aos="fade-up" data-aos-delay="100">
                {isKo
                  ? 'ChatGPT·Claude·Google Apps Script로 배우는 실습 중심 AI 업무자동화 교육. 중급(업무자동화 실무)과 고급(데이터분석 및 활용) 2단계 과정으로, 각 과정 2일 8시간 동안 예시 프롬프트로 직접 따라 하며 익힙니다.'
                  : 'Hands-on AI automation training with ChatGPT, Claude and Google Apps Script. Two leveled programs — intermediate automation and advanced data analysis — 2 days / 8 hours each, with ready-to-use prompts.'}
              </p>
              <div className="hero-ed-actions" data-aos="fade-up" data-aos-delay="150">
                <button className="btn btn-primary btn-lg" onClick={() => navigate('/courses')}>
                  <i className="fa-solid fa-graduation-cap" /> {isKo ? '교육과정 보기' : 'View Courses'}
                </button>
                <button className="btn btn-accent btn-lg" onClick={() => navigate('/prompt-eval')}>
                  <i className="fa-solid fa-clipboard-check" /> {isKo ? '프롬프트 실습·평가' : 'Prompt Lab'}
                </button>
              </div>
            </div>

            <aside className="hero-ed-side" data-aos="fade-left" data-aos-delay="100">
              <div className="hero-ed-metrics">
                <div className="hero-metric">
                  <div className="hero-metric-num accent">2</div>
                  <div className="hero-metric-label">{isKo ? '단계별 과정' : 'Programs'}</div>
                </div>
                <div className="hero-metric">
                  <div className="hero-metric-num">8<span className="small">h</span></div>
                  <div className="hero-metric-label">{isKo ? '과정당 시간' : 'Hours each'}</div>
                </div>
                <div className="hero-metric">
                  <div className="hero-metric-num">2<span className="small">{isKo ? '일' : 'd'}</span></div>
                  <div className="hero-metric-label">{isKo ? '과정당 일수' : 'Days each'}</div>
                </div>
                <div className="hero-metric">
                  <div className="hero-metric-num accent">80<span className="small">%</span></div>
                  <div className="hero-metric-label">{isKo ? '실습 비율' : 'Hands-on'}</div>
                </div>
              </div>
              <div className="hero-ed-card">
                <div className="hero-ed-card-eyebrow">2026 · AI 업무자동화 과정</div>
                <div className="hero-ed-card-title">{isKo ? '2개 과정 · 각 2일 8시간' : 'Two Programs · 8h each'}</div>
                <ul className="hero-ed-card-list">
                  {COURSE_CATEGORIES.map((p) => (
                    <li key={p.id}>
                      <span className="hero-card-name">{isKo ? p.nameKo : p.nameEn}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="marquee-group">
              {marqueeWords.map((w, j) => (
                <span key={`${i}-${j}`}>{w}<span className="dot">&#10022;</span></span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* Course Categories */}
      <section className="section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>{t('site.home.coursesTitle')}</h2>
            <p>{t('site.home.coursesDesc')}</p>
          </div>
          <div className="course-category-grid">
            {COURSE_CATEGORIES.map((cat, i) => (
              <div
                key={cat.id}
                className="course-category-card"
                data-aos="fade-up"
                data-aos-delay={i * 100}
                onClick={() => navigate(`/courses/${cat.id}`)}
                style={{ cursor: 'pointer' }}
              >
                <div className="category-icon" style={{ background: cat.color }}>
                  <i className={`fa-solid ${cat.icon}`} />
                </div>
                <span className="category-duration"><i className="fa-regular fa-clock" /> {cat.duration}</span>
                <h3>{language === 'ko' ? cat.nameKo : cat.nameEn}</h3>
                <p className="category-tagline">{cat.tagline}</p>
                <p>{language === 'ko' ? cat.descKo : cat.descEn}</p>
                <div className="category-tags">
                  {cat.highlights.slice(0, 3).map((h) => (
                    <span key={h} className="category-tag">{h}</span>
                  ))}
                </div>
                <span className="category-link">
                  {language === 'ko' ? '커리큘럼 보기' : 'View Curriculum'} <i className="fa-solid fa-arrow-right" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview band — 교육 특징 */}
      <section className="overview-band">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-intro" data-aos="fade-up">
              <div className="overview-eyebrow">Overview</div>
              <h2>{isKo ? '학과를 막론한\n실습 중심 교육' : 'Hands-on training\nfor every department'}</h2>
              <p>{isKo
                ? '전 학과 교직원과 연구자가 자신의 업무·연구에 곧바로 적용할 수 있도록, 난이도를 낮춘 단계별 실습으로 설계했습니다.'
                : 'Designed as step-by-step practice so faculty, staff, and researchers in any field can apply it to their own work right away.'}</p>
            </div>
            <div className="overview-cards">
              {features.map((f, i) => (
                <div key={f.no} className="overview-card" data-aos="fade-up" data-aos-delay={i * 80}>
                  <div className="overview-card-top">
                    <span className="overview-no">{f.no}</span>
                    <i className={`fa-solid ${f.icon}`} />
                  </div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 교육 전 준비사항 */}
      <section className="section">
        <div className="container">
          <div className="prep-wrap" data-aos="fade-up">
            <div className="prep-head">
              <div className="overview-eyebrow accent-eyebrow">Before You Come</div>
              <h2>{isKo ? '교육 전 준비사항' : 'Before You Come'}</h2>
              <p>{isKo
                ? '원활한 실습을 위해 아래 항목을 미리 준비해 주세요. 계정 발급과 기본 설정은 1교시 시작 전에 마칩니다.'
                : 'Please prepare the following for a smooth session. Accounts and basic setup are finished before session 1.'}</p>
            </div>
            <div className="prep-grid">
              {prep.map((p) => (
                <div key={p.no} className="prep-item">
                  <span className="prep-no">{p.no}</span>
                  <div>
                    <div className="prep-title">{p.title}</div>
                    <div className="prep-desc">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 교육 안내 */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <div className="overview-eyebrow">Information</div>
            <h2>{isKo ? '교육 안내' : 'Program Information'}</h2>
            <p>{isKo ? '운영 방식·교육 대상·신청 방법을 한눈에 확인하세요.' : 'Format, audience, and how to apply at a glance.'}</p>
          </div>
          <div className="info-grid">
            {infoCards.map((c, i) => (
              <div key={c.kicker} className="info-card" data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="info-kicker">{c.kicker}</div>
                {c.rows.map((r) => (
                  <div key={r.k} className="info-row">
                    <div className="info-k">{r.k}</div>
                    <div className="info-v">{r.v}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="info-cta" data-aos="fade-up">
            <button className="btn btn-accent btn-lg" onClick={() => navigate('/courses')}>
              <i className="fa-solid fa-graduation-cap" /> {isKo ? '과정 살펴보기' : 'Explore programs'}
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section stats-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>{t('site.home.statsTitle')}</h2>
          </div>
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <div key={i} className="stat-card" data-aos="zoom-in" data-aos-delay={i * 100}>
                <div className="stat-value">{stat.value}{stat.suffix}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content" data-aos="fade-up">
            <h2>{t('site.home.ctaTitle')}</h2>
            <p>{t('site.home.ctaDesc')}</p>
            <button className="btn btn-primary btn-lg" onClick={() => navigate('/register')}>
              <i className="fa-solid fa-user-plus" /> {t('site.home.ctaButton')}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

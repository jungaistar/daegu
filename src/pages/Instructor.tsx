import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import INSTRUCTOR from '../data/instructor';
import type { ReactElement } from 'react';

/**
 * 강사 소개 — nonghyup(농협사료 AI 실무) instructor.html 을 대구 사이트 디자인으로 이식.
 * 본문 텍스트는 한국어 원문 그대로 두고, 섹션 제목만 언어에 따라 바꾼다.
 */
export default function Instructor(): ReactElement {
  const { language } = useLanguage();
  const ko = language === 'ko';
  const p = INSTRUCTOR;

  const sections = [
    { n: 1, ko: '학력', en: 'Education' },
    { n: 2, ko: '주요 경력', en: 'Career' },
    { n: 3, ko: '핵심 역량', en: 'Core Expertise' },
    { n: 4, ko: '자격', en: 'Certifications' },
    { n: 5, ko: '저서', en: 'Publications' },
  ];
  const heading = (i: number): string => (ko ? sections[i].ko : sections[i].en);

  return (
    <>
      <SEOHead
        title={ko ? '강사 소개' : 'Instructor'}
        description={`${p.name} — ${p.role}`}
        path="/instructor"
      />

      <section className="page-header">
        <div className="container">
          <span className="page-header__eyebrow">Instructor</span>
          <h1>{ko ? '강사 소개' : 'Instructor'}</h1>
          <p>{ko
            ? '대구광역시 공무원 AI 실무 교육을 맡은 강사를 소개합니다.'
            : 'Meet the instructor of the Daegu public officials AI training.'}</p>
        </div>
      </section>

      <section className="section">
        <div className="container instructor-page">
          {/* ── 프로필 헤더 ── */}
          <div className="inst-profile">
            <div className="inst-profile__avatar" aria-hidden="true">{p.initial}</div>
            <div className="inst-profile__body">
              <h2>{p.name}</h2>
              <p className="inst-profile__en">{p.nameEn}</p>
              <p className="inst-profile__role">{p.role}</p>
              <a className="inst-profile__mail" href={`mailto:${p.email}`}>
                <i className="fa-solid fa-envelope" /> {p.email}
              </a>
            </div>
          </div>

          {/* ── 소개 문단 ── */}
          {p.intro.map((para, i) => (
            <p key={i} className="inst-para">{para}</p>
          ))}

          {/* ── 요약표 ── */}
          <div className="inst-table-wrap">
            <table className="inst-kv">
              <tbody>
                {p.facts.map((f) => (
                  <tr key={f.label}>
                    <th scope="row">{f.label}</th>
                    <td>{f.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── 1. 학력 ── */}
          <h2 className="inst-sec-h"><span className="inst-sec-h__n">1</span>{heading(0)}</h2>
          <ul className="inst-timeline">
            {p.education.map((e) => (
              <li key={`${e.date}-${e.text}`}>
                <b>{e.date}</b>
                <span>{e.text}</span>
              </li>
            ))}
          </ul>

          {/* ── 2. 주요 경력 ── */}
          <h2 className="inst-sec-h"><span className="inst-sec-h__n">2</span>{heading(1)}</h2>
          <ul className="inst-bullets">
            {p.career.map((c) => <li key={c}>{c}</li>)}
          </ul>

          {/* ── 3. 핵심 역량 ── */}
          <h2 className="inst-sec-h"><span className="inst-sec-h__n">3</span>{heading(2)}</h2>
          {p.competencies.map((g) => (
            <div key={g.heading}>
              <h3 className="inst-sub-h">{g.heading}</h3>
              <ul className="inst-bullets">
                {g.items.map((it) => <li key={it}>{it}</li>)}
              </ul>
            </div>
          ))}

          {/* ── 4. 자격 ── */}
          <h2 className="inst-sec-h"><span className="inst-sec-h__n">4</span>{heading(3)}</h2>
          <div className="inst-grid">
            {p.certifications.map((g) => (
              <div key={g.heading} className="inst-card">
                <h3>{g.heading}</h3>
                <ul className="inst-bullets inst-bullets--tight">
                  {g.items.map((it) => <li key={it}>{it}</li>)}
                </ul>
              </div>
            ))}
          </div>

          {/* ── 5. 저서 ── */}
          <h2 className="inst-sec-h"><span className="inst-sec-h__n">5</span>{heading(4)}</h2>
          <div className="inst-table-wrap">
            <table className="inst-kv">
              <tbody>
                {p.books.map((b) => (
                  <tr key={b.label}>
                    <th scope="row">{b.label}</th>
                    <td>{b.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── VISION ── */}
          <div className="inst-vision">
            <b>VISION</b>
            <p>{p.vision}</p>
          </div>
        </div>
      </section>
    </>
  );
}

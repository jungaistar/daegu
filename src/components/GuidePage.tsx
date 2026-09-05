/**
 * GuidePage — 공유 가이드 페이지 컴포넌트
 * 단일 데이터파일: 섹션 직접 표시
 * 다중 데이터파일: 접이식 그룹 (클릭 시 확장/접기)
 */
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from './SEOHead';
import CodeBlock from './CodeBlock';
import TipBox from './TipBox';

interface Section {
  title: string;
  titleEn: string;
  content: string;
  contentEn: string;
}

interface DataFile {
  id: string;
  icon: string;
  title: string;
  titleEn: string;
  sections: Section[];
}

/**
 * GuideHero — `/courses/:category`(고급 · 데이터분석 및 활용)의 program-hero 와
 * 동일한 화면 디자인을 가이드 페이지에도 쓰기 위한 선택적 헤더.
 * 넘기지 않으면 기존 모습 그대로다(= /automation 은 영향 없음).
 */
export interface GuideHero {
  icon: string;                 // Font Awesome 클래스 (예: 'fa-chart-line')
  color: string;                // 아이콘 배경 · 하단 보더 색
  eyebrow: string;
  eyebrowEn?: string;
  title: string;
  titleEn?: string;
  tagline: string;
  taglineEn?: string;
  desc: string;
  descEn?: string;
  meta?: { icon: string; text: string; textEn?: string }[];
  note?: string;
  noteEn?: string;
}

interface GuidePageProps {
  seoTitle: string;
  seoTitleEn?: string;
  seoDescription?: string;
  path: string;
  dataFiles: DataFile[];
  hero?: GuideHero;
  ctaBanner?: React.ReactNode;
  sidebarHeader?: React.ReactNode;
  sidebarFooter?: React.ReactNode;
}

const markdownComponents = {
  code({ inline, className, children, ...props }: any) {
    const match = /language-(\w+)/.exec(className || '');
    if (!inline && match) return <CodeBlock code={String(children).replace(/\n$/, '')} language={match[1]} />;
    if (!inline && !match && String(children).includes('\n')) return <CodeBlock code={String(children).replace(/\n$/, '')} language="" />;
    return <code className="inline-code" {...props}>{children}</code>;
  },
  // '~/' 로 시작하는 이미지는 public/ 기준 — base 가 '/' 든 '/daegu/' 든 따라간다
  img({ src, alt, ...props }: any) {
    const url = typeof src === 'string' && src.startsWith('~/')
      ? import.meta.env.BASE_URL + src.slice(2)
      : src;
    return <img className="guide-figure" src={url} alt={alt || ''} loading="lazy" {...props} />;
  },
  table({ children }: any) { return <div className="table-responsive"><table>{children}</table></div>; },
  blockquote({ children }: any) { return <TipBox type="tip">{children}</TipBox>; },
  a({ href, children, ...props }: any) {
    if (href && href.startsWith('/')) return <a href={href} {...props}>{children}</a>;
    return <a href={href} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>;
  },
};

export default function GuidePage({ seoTitle, seoTitleEn, seoDescription, path, dataFiles, hero, ctaBanner, sidebarHeader, sidebarFooter }: GuidePageProps) {
  const { language } = useLanguage();
  const isKo = language === 'ko';

  const allSections: { section: Section; fileIndex: number }[] = [];
  dataFiles.forEach((df, fi) => {
    df.sections.forEach(sec => {
      allSections.push({ section: sec, fileIndex: fi });
    });
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const active = allSections[activeIndex];
  const activeFileIndex = active?.fileIndex ?? 0;

  const handleSelect = (idx: number) => {
    setActiveIndex(idx);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const hasMultipleFiles = dataFiles.length > 1;

  const fileStartIndices: number[] = [];
  let cumIdx = 0;
  dataFiles.forEach(df => {
    fileStartIndices.push(cumIdx);
    cumIdx += df.sections.length;
  });

  return (
    <div className={`guide-page${hero ? ' guide-page--hero' : ''}`}>
      <SEOHead
        title={isKo ? seoTitle : (seoTitleEn || seoTitle)}
        description={seoDescription}
        path={path}
      />

      {hero && (
        <section className="program-hero" style={{ borderBottom: `3px solid ${hero.color}` }}>
          <div className="container">
            <div className="program-hero-inner">
              <div className="program-hero-icon" style={{ background: hero.color }}>
                <i className={`fa-solid ${hero.icon}`} />
              </div>
              <div className="program-hero-text">
                <div className="eyebrow">{isKo ? hero.eyebrow : (hero.eyebrowEn || hero.eyebrow)}</div>
                <h1>{isKo ? hero.title : (hero.titleEn || hero.title)}</h1>
                <p className="program-hero-tagline">{isKo ? hero.tagline : (hero.taglineEn || hero.tagline)}</p>
                <p className="program-hero-desc">{isKo ? hero.desc : (hero.descEn || hero.desc)}</p>
                {hero.meta && hero.meta.length > 0 && (
                  <div className="program-hero-meta">
                    {hero.meta.map((m, i) => (
                      <span key={i}><i className={`fa-solid ${m.icon}`} /> {isKo ? m.text : (m.textEn || m.text)}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {hero.note && (
              <div className="program-platform-note">
                <i className="fa-solid fa-shield-halved" />
                <span>{isKo ? hero.note : (hero.noteEn || hero.note)}</span>
              </div>
            )}
          </div>
        </section>
      )}

      <div className="guide-layout">
        <aside className="guide-sidebar">
          {sidebarHeader}
          {hero ? (
            <div className="guide-sidebar-title guide-sidebar-title--hero" style={{ borderColor: hero.color }}>
              <i className={`fa-solid ${hero.icon}`} style={{ color: hero.color }} />
              <span>{isKo ? hero.title : (hero.titleEn || hero.title)}</span>
            </div>
          ) : (
            <div className="guide-sidebar-title">{isKo ? '목차' : 'Contents'}</div>
          )}
          {hero && <span className="guide-sidebar-label">{isKo ? '목차' : 'Contents'}</span>}
          <ul className="guide-nav">
            {hasMultipleFiles ? (
              dataFiles.map((df, dfIdx) => {
                const isExpanded = dfIdx === activeFileIndex;
                const startIdx = fileStartIndices[dfIdx];
                return (
                  <li key={df.id} className={`guide-nav-group${isExpanded ? ' expanded' : ''}`}>
                    <button
                      className={`guide-nav-group-toggle${isExpanded ? ' active' : ''}`}
                      onClick={() => handleSelect(startIdx)}
                    >
                      {isKo ? df.title : df.titleEn}
                      <i className={`fa-solid fa-chevron-${isExpanded ? 'down' : 'right'} group-chevron`} />
                    </button>
                    {isExpanded && (
                      <ul className="guide-nav-sub-list">
                        {df.sections.map((sec, secIdx) => {
                          const globalIdx = startIdx + secIdx;
                          return (
                            <li key={globalIdx} className="guide-nav-item">
                              <button
                                className={`guide-nav-link guide-nav-sub ${globalIdx === activeIndex ? 'active' : ''}`}
                                onClick={() => handleSelect(globalIdx)}
                              >
                                {isKo ? sec.title : sec.titleEn}
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              })
            ) : (
              allSections.map((item, i) => (
                <li key={i} className="guide-nav-item">
                  <button
                    className={`guide-nav-link ${i === activeIndex ? 'active' : ''}`}
                    onClick={() => handleSelect(i)}
                  >
                    {isKo ? item.section.title : item.section.titleEn}
                  </button>
                </li>
              ))
            )}
          </ul>
          {sidebarFooter && (
            <div className="guide-sidebar-footer">
              {sidebarFooter}
            </div>
          )}
        </aside>
        <div className="guide-content">
          <div className="guide-content-header">
            {/* 히어로가 있으면 h1 은 히어로가 갖는다 — 본문 제목은 h2 로 내려 문서 구조를 지킨다 */}
            {hero
              ? <h2>{isKo ? active.section.title : active.section.titleEn}</h2>
              : <h1>{isKo ? active.section.title : active.section.titleEn}</h1>}
          </div>
          <div className="guide-section">
            <div className="markdown-body">
              <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} components={markdownComponents as any}>
                {isKo ? active.section.content : active.section.contentEn}
              </ReactMarkdown>
            </div>
          </div>
          {ctaBanner}
          <div className="guide-section-nav">
            <button disabled={activeIndex === 0} onClick={() => handleSelect(activeIndex - 1)}>
              <i className="fa-solid fa-chevron-left" /> {isKo ? '이전' : 'Previous'}
            </button>
            <button disabled={activeIndex === allSections.length - 1} onClick={() => handleSelect(activeIndex + 1)}>
              {isKo ? '다음' : 'Next'} <i className="fa-solid fa-chevron-right" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

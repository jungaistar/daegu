import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAuth } from '../../contexts/AuthContext';
import SEOHead from '../../components/SEOHead';
import { AI_TOOLS } from '../../config/site';

/** 도구 목록은 site.ts 의 AI_TOOLS 하나만 본다 — 여기서 따로 들고 있지 않는다. */
export default function AIToolsPage() {
  const { language } = useLanguage();
  const { isLoggedIn } = useAuth();
  const isKo = language === 'ko';

  const pageTitle = isKo ? 'AI 업무 지원 도구' : 'AI Work Tools';
  const pageDesc = isKo
    ? '공문·보도자료·회의록·민원 답변을 AI로 만들고, 발송 전에 점검하세요.'
    : 'Draft documents, press releases, minutes and replies with AI — and review them before sending.';

  return (
    <div className="ai-tools-landing">
      <SEOHead title={pageTitle} description={pageDesc} path="/tools" />

      <div className="ai-tools-hero">
        <div className="container">
          <div className="ai-tools-hero-icon">
            <i className="fa-solid fa-wand-magic-sparkles" />
          </div>
          <h1>{pageTitle}</h1>
          <p>{pageDesc}</p>
        </div>
      </div>

      <div className="container">
        <div className="ai-tools-grid">
          {AI_TOOLS.map(tool => (
            <Link key={tool.id} to={tool.path} className="ai-tools-card">
              <div className="ai-tools-card-icon">
                <i className={`fa-solid ${tool.icon}`} />
              </div>
              <h3>{isKo ? tool.nameKo : tool.nameEn}</h3>
              <p>{isKo ? tool.descKo : tool.descEn}</p>
              <span className="ai-tools-card-arrow">
                {isKo ? '시작하기' : 'Get Started'} <i className="fa-solid fa-arrow-right" />
              </span>
            </Link>
          ))}
        </div>

        <div className="ai-tools-notice">
          <i className="fa-solid fa-shield-halved" />
          <span>
            {isKo
              ? '개인정보·대외비가 든 원문은 그대로 넣지 마세요. 이름·연락처는 지우거나 가명으로 바꾼 뒤 사용합니다.'
              : 'Do not paste raw material containing personal or confidential data — remove or pseudonymize it first.'}
          </span>
        </div>

        {!isLoggedIn && (
          <div className="ai-tools-login-cta">
            <i className="fa-solid fa-right-to-bracket" />
            <span>
              {isKo
                ? '로그인 후 AI 도구를 사용할 수 있습니다.'
                : 'Please log in to use AI tools.'}
            </span>
            <Link to="/login" className="btn btn-primary btn-sm">
              {isKo ? '로그인' : 'Login'}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

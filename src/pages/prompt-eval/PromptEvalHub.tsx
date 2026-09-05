import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import GuidePage from '../../components/GuidePage';
import PromptEvalNav from '../../components/PromptEvalNav';
import promptBasics from './data/prompt-basics';
import promptEvaluation from './data/prompt-evaluation';
import promptTechniques from './data/prompt-techniques';
import promptExamples from './data/prompt-examples';
import '../../styles/practice.css';

export default function PromptEvalHub() {
  const { language } = useLanguage();
  const isKo = language === 'ko';

  return (
    <>
      <GuidePage
        seoTitle="프롬프트 실습"
        seoTitleEn="Prompt Lab"
        seoDescription="프롬프트 작성 기법, 평가 기준, 실전 예시 및 실습 가이드"
        path="/prompt-eval"
        hero={{
          icon: 'fa-wand-magic-sparkles',
          color: '#6D28D9',
          eyebrow: '프롬프트 실습 · 작성부터 평가까지',
          eyebrowEn: 'Prompt Lab · From Writing to Scoring',
          title: '프롬프트 실습',
          titleEn: 'Prompt Lab',
          tagline: '좋은 프롬프트를 쓰고, 스스로 채점해보는 훈련장',
          taglineEn: 'Write better prompts, then score them yourself',
          desc: '프롬프트 작성 기법과 평가 기준을 익히고 실전 예시로 확인한 뒤, 직접 작성한 프롬프트를 SCORE 기준으로 자동 채점받아 고쳐 나갑니다.',
          descEn: 'Learn prompt-writing techniques and evaluation criteria, study real examples, then write your own and get auto-scored against the SCORE rubric.',
          meta: [
            { icon: 'fa-user-check', text: '대구광역시 공무원', textEn: 'Daegu city officials' },
            { icon: 'fa-layer-group', text: '4개 주제 + 실습 2종', textEn: '4 topics + 2 labs' },
            { icon: 'fa-clipboard-check', text: '종합 실습 250점', textEn: '250-point practice' },
          ],
          note: '읽기만 해서는 늘지 않습니다. 각 주제를 본 뒤 오른쪽 아래 실습으로 반드시 한 번씩 써보세요.',
          noteEn: 'Reading alone will not build the skill — after each topic, write at least one prompt in the labs.',
        }}
        dataFiles={[promptBasics, promptEvaluation, promptTechniques, promptExamples]}
        sidebarHeader={<PromptEvalNav />}
        sidebarFooter={
          <>
            <Link to="/prompt-eval/workshop" className="guide-sidebar-cta workshop">
              <i className="fa-solid fa-wand-magic-sparkles" />
              <div>
                <strong>{isKo ? '프롬프트 작성 평가' : 'Writing Evaluation'}</strong>
                <span>{isKo ? '자동 채점 & 수정 재평가' : 'Auto-score & re-evaluate'}</span>
              </div>
            </Link>
            <Link to="/prompt-eval/practice" className="guide-sidebar-cta practice">
              <i className="fa-solid fa-clipboard-check" />
              <div>
                <strong>{isKo ? '종합 실습 테스트' : 'Full Practice Test'}</strong>
                <span>{isKo ? '퀴즈 + 평가 + 작성 (250점)' : 'Quiz + Eval + Write (250pts)'}</span>
              </div>
            </Link>
          </>
        }
        ctaBanner={
          <>
            <div className="prompt-practice-cta">
              <div className="prompt-practice-cta-text">
                <h3>{isKo ? '프롬프트 작성 평가' : 'Prompt Writing Evaluation'}</h3>
                <p>{isKo ? '프롬프트를 직접 작성하고 SCORE 기준으로 자동 채점! 수정하며 점수 변화를 확인하세요.' : 'Write prompts and get auto-scored! Edit and track your score improvements.'}</p>
              </div>
              <Link to="/prompt-eval/workshop" className="prompt-practice-cta-btn">
                <i className="fa-solid fa-wand-magic-sparkles" />
                {isKo ? '작성 평가 시작' : 'Start Workshop'}
              </Link>
            </div>
            <div className="prompt-practice-cta" style={{ background: 'linear-gradient(135deg, rgba(23,147,230,0.08), rgba(23,147,230,0.02))', borderColor: 'rgba(23,147,230,0.22)' }}>
              <div className="prompt-practice-cta-text">
                <h3>{isKo ? '종합 실습 테스트' : 'Full Practice Test'}</h3>
                <p>{isKo ? '선택형 퀴즈 + 프롬프트 평가 + 직접 작성까지, 250점 만점 종합 실습을 진행하세요.' : 'Take a 250-point practice: quiz + evaluation + writing exercises.'}</p>
              </div>
              <Link to="/prompt-eval/practice" className="prompt-practice-cta-btn" style={{ background: '#1793E6' }}>
                <i className="fa-solid fa-clipboard-check" />
                {isKo ? '종합 실습 시작' : 'Start Practice'}
              </Link>
            </div>
          </>
        }
      />
    </>
  );
}

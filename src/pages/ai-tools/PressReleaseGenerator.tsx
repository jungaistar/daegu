import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAIStream } from '../../hooks/useAIStream';
import { useApiKeys } from '../../hooks/useApiKeys';
import { useToast } from '../../contexts/ToastContext';
import { buildPressReleasePrompt } from '../../utils/prompts/pressRelease';
import { AI_PROVIDERS } from '../../config/ai-providers';
import SEOHead from '../../components/SEOHead';
import TwoColumnLayout from '../../components/ai/TwoColumnLayout';
import AIProviderSelect from '../../components/ai/AIProviderSelect';
import KeySourceIndicator from '../../components/ai/KeySourceIndicator';
import SubscribePrompt from '../../components/SubscribePrompt';

export default function PressReleaseGenerator() {
  const { language, t } = useLanguage();
  const { output, isStreaming, error, usage, generate } = useAIStream();
  const { keys, getEffectiveApiKey, hasAnyKey } = useApiKeys();
  const toast = useToast();
  const isKo = language === 'ko';

  const [provider, setProvider] = useState('openai');
  const [form, setForm] = useState({
    program: '',
    department: '',
    audience: '대구시민',
    channel: '언론사 보도자료',
    tone: '공공기관 보도자료 톤',
    facts: '',
  });

  const update = (field: string, value: string) => setForm(prev => ({ ...prev, [field]: value }));

  async function handleGenerate() {
    if (!form.program.trim()) {
      toast.warning(isKo ? '사업/사안명을 입력해주세요.' : 'Please enter the program name.');
      return;
    }
    const { key, source } = getEffectiveApiKey(provider);
    if (!key) {
      toast.warning(t('ai.noApiKey'));
      return;
    }

    const messages = buildPressReleasePrompt({ ...form, language });
    const providerConfig = AI_PROVIDERS[provider];
    try {
      await generate({
        provider,
        apiKey: key,
        model: providerConfig.defaultModel,
        messages,
        toolId: 'press-release',
        keySource: source as 'personal' | 'shared',
      });
    } catch (err: unknown) {
      toast.error((err as Error).message);
    }
  }

  const inputPanel = (
    <>
      <h3><i className="fa-solid fa-bullhorn" /> {t('tools.pressRelease')}</h3>
      <AIProviderSelect selected={provider} onSelect={setProvider} apiKeys={keys} />
      <KeySourceIndicator provider={provider} />
      {!hasAnyKey(provider) && <SubscribePrompt />}

      <div className="ai-form-group">
        <label className="ai-form-label"><span className="label-icon"><i className="fa-solid fa-flag" /></span> {isKo ? '사업 / 사안명' : 'Program'} *</label>
        <input className="form-input" value={form.program} onChange={e => update('program', e.target.value)} placeholder={isKo ? '예: 청년 일자리 지원사업' : 'e.g., Youth employment support program'} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div className="ai-form-group">
          <label className="ai-form-label">{isKo ? '담당 부서' : 'Department'}</label>
          <input className="form-input" value={form.department} onChange={e => update('department', e.target.value)} placeholder={isKo ? '예: 청년정책과' : 'e.g., Youth Policy Division'} />
        </div>
        <div className="ai-form-group">
          <label className="ai-form-label">{isKo ? '전달 대상' : 'Audience'}</label>
          <input className="form-input" value={form.audience} onChange={e => update('audience', e.target.value)} placeholder={isKo ? '예: 20~30대 청년' : 'e.g., Citizens in their 20s-30s'} />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div className="ai-form-group">
          <label className="ai-form-label">{isKo ? '배포 채널' : 'Channel'}</label>
          <select className="form-select" value={form.channel} onChange={e => update('channel', e.target.value)}>
            <option value="언론사 보도자료">{isKo ? '언론사 보도자료' : 'Press'}</option>
            <option value="시청 홈페이지 공지">{isKo ? '시청 홈페이지' : 'City website'}</option>
            <option value="블로그·SNS 게시글">{isKo ? '블로그·SNS' : 'Blog / SNS'}</option>
          </select>
        </div>
        <div className="ai-form-group">
          <label className="ai-form-label">{isKo ? '어투' : 'Tone'}</label>
          <select className="form-select" value={form.tone} onChange={e => update('tone', e.target.value)}>
            <option value="공공기관 보도자료 톤">{isKo ? '보도자료 톤' : 'Press release'}</option>
            <option value="시민에게 친근한 톤">{isKo ? '시민 친화적' : 'Citizen-friendly'}</option>
          </select>
        </div>
      </div>

      <div className="ai-form-group">
        <label className="ai-form-label"><span className="label-icon"><i className="fa-solid fa-list-check" /></span> {isKo ? '핵심 내용' : 'Key Facts'} *</label>
        <textarea className="form-textarea" rows={6} value={form.facts} onChange={e => update('facts', e.target.value)}
          placeholder={isKo
            ? '확정된 사실만 적어주세요 — 대상·규모·기간·신청 방법·예산 등.\n\n예)\n지원 대상: 만 19~39세 대구 거주 청년\n지원 내용: 월 50만원, 최대 6개월\n신청 기간: 7월 1일 ~ 7월 31일\n신청 방법: 대구시 청년포털'
            : 'Enter only confirmed facts: eligibility, scale, period, how to apply.'} />
      </div>

      <button className="ai-generate-btn" onClick={handleGenerate} disabled={isStreaming}>
        {isStreaming ? <><span className="spinner" /> {t('ai.generating')}</> : <>{t('ai.generate')}</>}
      </button>
    </>
  );

  return (
    <>
      <SEOHead title={t('tools.pressRelease')} path="/tools/press-release" />
      <TwoColumnLayout
        title={t('tools.pressRelease')}
        description={isKo
          ? '헤드라인 → 리드문(육하원칙) → 본문 3문단 → 담당부서 연락처 구조로 보도자료 초안을 만듭니다.'
          : 'Drafts a press release: headline, 5W1H lead, three body paragraphs, and department contact.'}
        inputPanel={inputPanel}
        output={output}
        isStreaming={isStreaming}
        error={error}
        usage={usage}
        toolId="press-release"
      />
    </>
  );
}

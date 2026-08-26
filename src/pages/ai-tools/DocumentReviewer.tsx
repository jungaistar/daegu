import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAIStream } from '../../hooks/useAIStream';
import { useApiKeys } from '../../hooks/useApiKeys';
import { useToast } from '../../contexts/ToastContext';
import { buildDocReviewPrompt } from '../../utils/prompts/docReview';
import { AI_PROVIDERS } from '../../config/ai-providers';
import SEOHead from '../../components/SEOHead';
import TwoColumnLayout from '../../components/ai/TwoColumnLayout';
import AIProviderSelect from '../../components/ai/AIProviderSelect';
import KeySourceIndicator from '../../components/ai/KeySourceIndicator';
import SubscribePrompt from '../../components/SubscribePrompt';

export default function DocumentReviewer() {
  const { language, t } = useLanguage();
  const { output, isStreaming, error, usage, generate } = useAIStream();
  const { keys, getEffectiveApiKey, hasAnyKey } = useApiKeys();
  const toast = useToast();
  const isKo = language === 'ko';

  const [provider, setProvider] = useState('openai');
  const [form, setForm] = useState({
    document: '',
    docType: '공문',
    audience: '내부 부서',
    focus: '',
  });

  const update = (field: string, value: string) => setForm(prev => ({ ...prev, [field]: value }));

  async function handleGenerate() {
    if (!form.document.trim()) {
      toast.warning(isKo ? '검토할 문서를 붙여넣어 주세요.' : 'Please paste the document to review.');
      return;
    }
    const { key, source } = getEffectiveApiKey(provider);
    if (!key) {
      toast.warning(t('ai.noApiKey'));
      return;
    }

    const messages = buildDocReviewPrompt({ ...form, language });
    const providerConfig = AI_PROVIDERS[provider];
    try {
      await generate({
        provider,
        apiKey: key,
        model: providerConfig.defaultModel,
        messages,
        toolId: 'doc-review',
        keySource: source as 'personal' | 'shared',
      });
    } catch (err: unknown) {
      toast.error((err as Error).message);
    }
  }

  const inputPanel = (
    <>
      <h3><i className="fa-solid fa-magnifying-glass-chart" /> {t('tools.docReview')}</h3>
      <AIProviderSelect selected={provider} onSelect={setProvider} apiKeys={keys} />
      <KeySourceIndicator provider={provider} />
      {!hasAnyKey(provider) && <SubscribePrompt />}

      <div className="ai-form-group">
        <label className="ai-form-label"><span className="label-icon"><i className="fa-solid fa-file-circle-check" /></span> {isKo ? '검토할 문서' : 'Document'} *</label>
        <textarea className="form-textarea" rows={10} value={form.document} onChange={e => update('document', e.target.value)}
          placeholder={isKo
            ? 'AI가 만든 초안이든 직접 쓴 문서든, 발송 전에 붙여넣어 점검하세요.'
            : 'Paste the document — AI-drafted or your own — before sending it.'} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div className="ai-form-group">
          <label className="ai-form-label">{isKo ? '문서 종류' : 'Document Type'}</label>
          <select className="form-select" value={form.docType} onChange={e => update('docType', e.target.value)}>
            <option value="공문">{isKo ? '공문' : 'Official document'}</option>
            <option value="보도자료">{isKo ? '보도자료' : 'Press release'}</option>
            <option value="민원 답변">{isKo ? '민원 답변' : 'Complaint reply'}</option>
            <option value="보고서">{isKo ? '보고서' : 'Report'}</option>
            <option value="홍보 콘텐츠">{isKo ? '홍보 콘텐츠' : 'PR content'}</option>
          </select>
        </div>
        <div className="ai-form-group">
          <label className="ai-form-label">{isKo ? '전달 대상' : 'Audience'}</label>
          <select className="form-select" value={form.audience} onChange={e => update('audience', e.target.value)}>
            <option value="내부 부서">{isKo ? '내부 부서' : 'Internal'}</option>
            <option value="타 기관">{isKo ? '타 기관' : 'Other agencies'}</option>
            <option value="시민 — 대외 공개">{isKo ? '시민 (대외 공개)' : 'Citizens (public)'}</option>
            <option value="언론">{isKo ? '언론' : 'Press'}</option>
          </select>
        </div>
      </div>

      <div className="ai-form-group">
        <label className="ai-form-label"><span className="label-icon"><i className="fa-solid fa-crosshairs" /></span> {isKo ? '특히 볼 것' : 'Focus'} <span className="optional">({isKo ? '선택' : 'optional'})</span></label>
        <input className="form-input" value={form.focus} onChange={e => update('focus', e.target.value)} placeholder={isKo ? '예: 예산 수치가 맞는지, 어투가 시민 눈높이인지' : 'e.g., budget figures, citizen-level wording'} />
      </div>

      <button className="ai-generate-btn" onClick={handleGenerate} disabled={isStreaming}>
        {isStreaming ? <><span className="spinner" /> {t('ai.generating')}</> : <>{t('ai.generate')}</>}
      </button>
    </>
  );

  return (
    <>
      <SEOHead title={t('tools.docReview')} path="/tools/doc-review" />
      <TwoColumnLayout
        title={t('tools.docReview')}
        description={isKo
          ? '발송 전 문서를 사실 확인·개인정보·보안·어투 네 관점으로 점검하고 위험도와 수정안을 제시합니다.'
          : 'Reviews a document before sending across four lenses: facts, personal data, security, and tone.'}
        inputPanel={inputPanel}
        output={output}
        isStreaming={isStreaming}
        error={error}
        usage={usage}
        toolId="doc-review"
      />
    </>
  );
}

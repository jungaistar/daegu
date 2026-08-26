import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAIStream } from '../../hooks/useAIStream';
import { useApiKeys } from '../../hooks/useApiKeys';
import { useToast } from '../../contexts/ToastContext';
import { buildMinutesPrompt } from '../../utils/prompts/meetingMinutes';
import { AI_PROVIDERS } from '../../config/ai-providers';
import SEOHead from '../../components/SEOHead';
import TwoColumnLayout from '../../components/ai/TwoColumnLayout';
import AIProviderSelect from '../../components/ai/AIProviderSelect';
import KeySourceIndicator from '../../components/ai/KeySourceIndicator';
import SubscribePrompt from '../../components/SubscribePrompt';

export default function MinutesOrganizer() {
  const { language, t } = useLanguage();
  const { output, isStreaming, error, usage, generate } = useAIStream();
  const { keys, getEffectiveApiKey, hasAnyKey } = useApiKeys();
  const toast = useToast();
  const isKo = language === 'ko';

  const [provider, setProvider] = useState('openai');
  const [form, setForm] = useState({
    meetingName: '',
    department: '',
    reportTo: '부서장',
    decisionCount: '3',
    minutes: '',
  });

  const update = (field: string, value: string) => setForm(prev => ({ ...prev, [field]: value }));

  async function handleGenerate() {
    if (!form.minutes.trim()) {
      toast.warning(isKo ? '회의록 내용을 붙여넣어 주세요.' : 'Please paste the meeting minutes.');
      return;
    }
    const { key, source } = getEffectiveApiKey(provider);
    if (!key) {
      toast.warning(t('ai.noApiKey'));
      return;
    }

    const messages = buildMinutesPrompt({ ...form, language });
    const providerConfig = AI_PROVIDERS[provider];
    try {
      await generate({
        provider,
        apiKey: key,
        model: providerConfig.defaultModel,
        messages,
        toolId: 'minutes',
        keySource: source as 'personal' | 'shared',
      });
    } catch (err: unknown) {
      toast.error((err as Error).message);
    }
  }

  const inputPanel = (
    <>
      <h3><i className="fa-solid fa-clipboard-list" /> {t('tools.minutes')}</h3>
      <AIProviderSelect selected={provider} onSelect={setProvider} apiKeys={keys} />
      <KeySourceIndicator provider={provider} />
      {!hasAnyKey(provider) && <SubscribePrompt />}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div className="ai-form-group">
          <label className="ai-form-label">{isKo ? '회의명' : 'Meeting'}</label>
          <input className="form-input" value={form.meetingName} onChange={e => update('meetingName', e.target.value)} placeholder={isKo ? '예: 7월 정기 부서회의' : 'e.g., July division meeting'} />
        </div>
        <div className="ai-form-group">
          <label className="ai-form-label">{isKo ? '담당 부서' : 'Department'}</label>
          <input className="form-input" value={form.department} onChange={e => update('department', e.target.value)} placeholder={isKo ? '예: 청년정책과' : 'e.g., Youth Policy Division'} />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div className="ai-form-group">
          <label className="ai-form-label">{isKo ? '보고 대상' : 'Report to'}</label>
          <select className="form-select" value={form.reportTo} onChange={e => update('reportTo', e.target.value)}>
            <option value="부서장">{isKo ? '부서장' : 'Division head'}</option>
            <option value="국장 이상 간부">{isKo ? '국장 이상 간부' : 'Senior management'}</option>
            <option value="참석자 공유용">{isKo ? '참석자 공유용' : 'Attendees'}</option>
          </select>
        </div>
        <div className="ai-form-group">
          <label className="ai-form-label">{isKo ? '결정사항 개수' : 'Decisions'}</label>
          <select className="form-select" value={form.decisionCount} onChange={e => update('decisionCount', e.target.value)}>
            <option value="3">3</option><option value="5">5</option><option value="7">7</option>
          </select>
        </div>
      </div>

      <div className="ai-form-group">
        <label className="ai-form-label"><span className="label-icon"><i className="fa-solid fa-paste" /></span> {isKo ? '회의록 원문' : 'Raw Minutes'} *</label>
        <textarea className="form-textarea" rows={10} value={form.minutes} onChange={e => update('minutes', e.target.value)}
          placeholder={isKo
            ? '녹취록이나 메모를 그대로 붙여넣으세요. 정리되지 않은 상태여도 됩니다.\n\n※ 참석자 연락처·주민번호 등 개인정보는 지우고 붙여넣어 주세요.'
            : 'Paste the raw transcript or notes. Remove personal data first.'} />
      </div>

      <button className="ai-generate-btn" onClick={handleGenerate} disabled={isStreaming}>
        {isStreaming ? <><span className="spinner" /> {t('ai.generating')}</> : <>{t('ai.generate')}</>}
      </button>
    </>
  );

  return (
    <>
      <SEOHead title={t('tools.minutes')} path="/tools/minutes" />
      <TwoColumnLayout
        title={t('tools.minutes')}
        description={isKo
          ? '회의록을 결정사항과 담당자별 할 일 표로 정리합니다. 원문에 없는 결정은 만들지 않고 [미정]으로 둡니다.'
          : 'Turns raw minutes into decisions and an owner/task/deadline table, marking undecided items.'}
        inputPanel={inputPanel}
        output={output}
        isStreaming={isStreaming}
        error={error}
        usage={usage}
        toolId="minutes"
      />
    </>
  );
}

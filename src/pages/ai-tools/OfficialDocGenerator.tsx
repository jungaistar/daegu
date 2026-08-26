import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAIStream } from '../../hooks/useAIStream';
import { useApiKeys } from '../../hooks/useApiKeys';
import { useToast } from '../../contexts/ToastContext';
import { buildOfficialDocPrompt } from '../../utils/prompts/officialDoc';
import { AI_PROVIDERS } from '../../config/ai-providers';
import SEOHead from '../../components/SEOHead';
import TwoColumnLayout from '../../components/ai/TwoColumnLayout';
import AIProviderSelect from '../../components/ai/AIProviderSelect';
import KeySourceIndicator from '../../components/ai/KeySourceIndicator';
import SubscribePrompt from '../../components/SubscribePrompt';

export default function OfficialDocGenerator() {
  const { language, t } = useLanguage();
  const { output, isStreaming, error, usage, generate } = useAIStream();
  const { keys, getEffectiveApiKey, hasAnyKey } = useApiKeys();
  const toast = useToast();
  const isKo = language === 'ko';

  const [provider, setProvider] = useState('openai');
  const [form, setForm] = useState({
    subject: '',
    docType: '안내 공문',
    department: '',
    audience: '',
    tone: '정중하고 간결한 공공기관 공문체',
    length: '본문 3문단 이내',
    facts: '',
  });

  const update = (field: string, value: string) => setForm(prev => ({ ...prev, [field]: value }));

  async function handleGenerate() {
    if (!form.subject.trim()) {
      toast.warning(isKo ? '제목/사안을 입력해주세요.' : 'Please enter the subject.');
      return;
    }
    const { key, source } = getEffectiveApiKey(provider);
    if (!key) {
      toast.warning(t('ai.noApiKey'));
      return;
    }

    const messages = buildOfficialDocPrompt({ ...form, language });
    const providerConfig = AI_PROVIDERS[provider];
    try {
      await generate({
        provider,
        apiKey: key,
        model: providerConfig.defaultModel,
        messages,
        toolId: 'official-doc',
        keySource: source as 'personal' | 'shared',
      });
    } catch (err: unknown) {
      toast.error((err as Error).message);
    }
  }

  const inputPanel = (
    <>
      <h3><i className="fa-solid fa-file-lines" /> {t('tools.officialDoc')}</h3>
      <AIProviderSelect selected={provider} onSelect={setProvider} apiKeys={keys} />
      <KeySourceIndicator provider={provider} />
      {!hasAnyKey(provider) && <SubscribePrompt />}

      <div className="ai-form-group">
        <label className="ai-form-label"><span className="label-icon"><i className="fa-solid fa-heading" /></span> {isKo ? '제목 / 사안' : 'Subject'} *</label>
        <input className="form-input" value={form.subject} onChange={e => update('subject', e.target.value)} placeholder={isKo ? '예: 생성형 AI 업무활용 특강 개최 알림' : 'e.g., Notice of AI training session'} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div className="ai-form-group">
          <label className="ai-form-label">{isKo ? '문서 종류' : 'Document Type'}</label>
          <select className="form-select" value={form.docType} onChange={e => update('docType', e.target.value)}>
            <option value="안내 공문">{isKo ? '안내 공문' : 'Announcement'}</option>
            <option value="협조 요청 공문">{isKo ? '협조 요청 공문' : 'Request for cooperation'}</option>
            <option value="기안문">{isKo ? '기안문' : 'Draft proposal'}</option>
            <option value="알림 공문">{isKo ? '알림 공문' : 'Notification'}</option>
            <option value="회신 공문">{isKo ? '회신 공문' : 'Reply'}</option>
          </select>
        </div>
        <div className="ai-form-group">
          <label className="ai-form-label">{isKo ? '담당 부서' : 'Department'}</label>
          <input className="form-input" value={form.department} onChange={e => update('department', e.target.value)} placeholder={isKo ? '예: 청년정책과' : 'e.g., Youth Policy Division'} />
        </div>
      </div>

      <div className="ai-form-group">
        <label className="ai-form-label"><span className="label-icon"><i className="fa-solid fa-users" /></span> {isKo ? '수신 대상' : 'Recipients'}</label>
        <input className="form-input" value={form.audience} onChange={e => update('audience', e.target.value)} placeholder={isKo ? '예: 본청·구청 공무원' : 'e.g., City and district officials'} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div className="ai-form-group">
          <label className="ai-form-label">{isKo ? '어투' : 'Tone'}</label>
          <select className="form-select" value={form.tone} onChange={e => update('tone', e.target.value)}>
            <option value="정중하고 간결한 공공기관 공문체">{isKo ? '공문체 (정중·간결)' : 'Official (courteous)'}</option>
            <option value="시민이 이해하기 쉬운 친근한 표현">{isKo ? '시민 친화적' : 'Citizen-friendly'}</option>
            <option value="내부 보고용 간결체">{isKo ? '내부 보고용' : 'Internal briefing'}</option>
          </select>
        </div>
        <div className="ai-form-group">
          <label className="ai-form-label">{isKo ? '분량' : 'Length'}</label>
          <select className="form-select" value={form.length} onChange={e => update('length', e.target.value)}>
            <option value="본문 2문단 이내">{isKo ? '본문 2문단 이내' : 'Within 2 paragraphs'}</option>
            <option value="본문 3문단 이내">{isKo ? '본문 3문단 이내' : 'Within 3 paragraphs'}</option>
            <option value="본문 5문단 이내">{isKo ? '본문 5문단 이내' : 'Within 5 paragraphs'}</option>
          </select>
        </div>
      </div>

      <div className="ai-form-group">
        <label className="ai-form-label"><span className="label-icon"><i className="fa-solid fa-list-check" /></span> {isKo ? '핵심 내용' : 'Key Facts'} *</label>
        <textarea className="form-textarea" rows={6} value={form.facts} onChange={e => update('facts', e.target.value)}
          placeholder={isKo
            ? '행사명 / 일시 / 장소 / 대상 / 신청 방법 등 확정된 사실만 적어주세요.\n\n예)\n행사명: 생성형 AI 업무활용 특강\n일시: 7월 15일(화) 14:00\n장소: 시청 별관 대강당\n대상: 본청·구청 공무원'
            : 'Enter only confirmed facts: event, date, place, audience, how to apply.'} />
      </div>

      <button className="ai-generate-btn" onClick={handleGenerate} disabled={isStreaming}>
        {isStreaming ? <><span className="spinner" /> {t('ai.generating')}</> : <>{t('ai.generate')}</>}
      </button>
    </>
  );

  return (
    <>
      <SEOHead title={t('tools.officialDoc')} path="/tools/official-doc" />
      <TwoColumnLayout
        title={t('tools.officialDoc')}
        description={isKo
          ? '제목·수신·본문·붙임 구조를 지킨 공문 초안을 만듭니다. 입력에 없는 일정·금액은 [확인 필요]로 표시합니다.'
          : 'Drafts official documents in standard structure, marking unverified details as [needs verification].'}
        inputPanel={inputPanel}
        output={output}
        isStreaming={isStreaming}
        error={error}
        usage={usage}
        toolId="official-doc"
      />
    </>
  );
}

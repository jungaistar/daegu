import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAIStream } from '../../hooks/useAIStream';
import { useApiKeys } from '../../hooks/useApiKeys';
import { useToast } from '../../contexts/ToastContext';
import { buildCivilReplyPrompt } from '../../utils/prompts/civilReply';
import { AI_PROVIDERS } from '../../config/ai-providers';
import SEOHead from '../../components/SEOHead';
import TwoColumnLayout from '../../components/ai/TwoColumnLayout';
import AIProviderSelect from '../../components/ai/AIProviderSelect';
import KeySourceIndicator from '../../components/ai/KeySourceIndicator';
import SubscribePrompt from '../../components/SubscribePrompt';

export default function CivilReplyDrafter() {
  const { language, t } = useLanguage();
  const { output, isStreaming, error, usage, generate } = useAIStream();
  const { keys, getEffectiveApiKey, hasAnyKey } = useApiKeys();
  const toast = useToast();
  const isKo = language === 'ko';

  const [provider, setProvider] = useState('openai');
  const [form, setForm] = useState({
    complaint: '',
    department: '',
    category: '시설물 유지보수',
    stance: '검토 후 회신',
    tone: '정중하고 이해하기 쉬운 표현',
    basis: '',
  });

  const update = (field: string, value: string) => setForm(prev => ({ ...prev, [field]: value }));

  async function handleGenerate() {
    if (!form.complaint.trim()) {
      toast.warning(isKo ? '민원 내용을 입력해주세요.' : 'Please enter the complaint.');
      return;
    }
    const { key, source } = getEffectiveApiKey(provider);
    if (!key) {
      toast.warning(t('ai.noApiKey'));
      return;
    }

    const messages = buildCivilReplyPrompt({ ...form, language });
    const providerConfig = AI_PROVIDERS[provider];
    try {
      await generate({
        provider,
        apiKey: key,
        model: providerConfig.defaultModel,
        messages,
        toolId: 'civil-reply',
        keySource: source as 'personal' | 'shared',
      });
    } catch (err: unknown) {
      toast.error((err as Error).message);
    }
  }

  const inputPanel = (
    <>
      <h3><i className="fa-solid fa-comments" /> {t('tools.civilReply')}</h3>
      <AIProviderSelect selected={provider} onSelect={setProvider} apiKeys={keys} />
      <KeySourceIndicator provider={provider} />
      {!hasAnyKey(provider) && <SubscribePrompt />}

      <div className="ai-form-group">
        <label className="ai-form-label"><span className="label-icon"><i className="fa-solid fa-envelope-open-text" /></span> {isKo ? '민원 내용' : 'Complaint'} *</label>
        <textarea className="form-textarea" rows={6} value={form.complaint} onChange={e => update('complaint', e.target.value)}
          placeholder={isKo
            ? '접수된 민원 내용을 붙여넣으세요.\n\n※ 민원인 이름·연락처·주소는 지우고 붙여넣어 주세요.'
            : 'Paste the complaint. Remove the complainant\'s name, contact and address first.'} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div className="ai-form-group">
          <label className="ai-form-label">{isKo ? '담당 부서' : 'Department'}</label>
          <input className="form-input" value={form.department} onChange={e => update('department', e.target.value)} placeholder={isKo ? '예: 도로과' : 'e.g., Roads Division'} />
        </div>
        <div className="ai-form-group">
          <label className="ai-form-label">{isKo ? '민원 유형' : 'Category'}</label>
          <select className="form-select" value={form.category} onChange={e => update('category', e.target.value)}>
            <option value="시설물 유지보수">{isKo ? '시설물 유지보수' : 'Facility maintenance'}</option>
            <option value="제도·사업 문의">{isKo ? '제도·사업 문의' : 'Program inquiry'}</option>
            <option value="단속 이의">{isKo ? '단속 이의' : 'Enforcement appeal'}</option>
            <option value="건의·제안">{isKo ? '건의·제안' : 'Suggestion'}</option>
            <option value="불편 신고">{isKo ? '불편 신고' : 'Complaint report'}</option>
          </select>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div className="ai-form-group">
          <label className="ai-form-label">{isKo ? '처리 방향' : 'Stance'}</label>
          <select className="form-select" value={form.stance} onChange={e => update('stance', e.target.value)}>
            <option value="수용 — 조치 예정">{isKo ? '수용 — 조치 예정' : 'Accepted'}</option>
            <option value="검토 후 회신">{isKo ? '검토 후 회신' : 'Under review'}</option>
            <option value="타 부서 이관">{isKo ? '타 부서 이관' : 'Transferred'}</option>
            <option value="수용 곤란 — 사유 설명">{isKo ? '수용 곤란' : 'Cannot accommodate'}</option>
          </select>
        </div>
        <div className="ai-form-group">
          <label className="ai-form-label">{isKo ? '어투' : 'Tone'}</label>
          <select className="form-select" value={form.tone} onChange={e => update('tone', e.target.value)}>
            <option value="정중하고 이해하기 쉬운 표현">{isKo ? '정중·쉬운 표현' : 'Courteous & plain'}</option>
            <option value="공식적이고 절제된 표현">{isKo ? '공식·절제' : 'Formal'}</option>
          </select>
        </div>
      </div>

      <div className="ai-form-group">
        <label className="ai-form-label"><span className="label-icon"><i className="fa-solid fa-scale-balanced" /></span> {isKo ? '근거 자료' : 'Basis'} <span className="optional">({isKo ? '있으면 입력' : 'if available'})</span></label>
        <textarea className="form-textarea" rows={4} value={form.basis} onChange={e => update('basis', e.target.value)}
          placeholder={isKo
            ? '적용 조례·규정, 현장 확인 결과, 처리 일정 등을 적어주세요.\n비워 두면 답변에 [확인 필요]로 표시됩니다.'
            : 'Applicable ordinances, site inspection results, schedule. Left blank, the reply marks them as needing verification.'} />
      </div>

      <button className="ai-generate-btn" onClick={handleGenerate} disabled={isStreaming}>
        {isStreaming ? <><span className="spinner" /> {t('ai.generating')}</> : <>{t('ai.generate')}</>}
      </button>
    </>
  );

  return (
    <>
      <SEOHead title={t('tools.civilReply')} path="/tools/civil-reply" />
      <TwoColumnLayout
        title={t('tools.civilReply')}
        description={isKo
          ? '민원 답변 초안을 만듭니다. 근거 자료에 없는 법령·기한은 단정하지 않고 [확인 필요]로 남깁니다.'
          : 'Drafts a reply to a citizen complaint without asserting anything beyond the stated basis.'}
        inputPanel={inputPanel}
        output={output}
        isStreaming={isStreaming}
        error={error}
        usage={usage}
        toolId="civil-reply"
      />
    </>
  );
}

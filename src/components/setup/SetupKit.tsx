import { useEffect, useState, createContext, useContext, useCallback } from 'react';
import type { ReactNode, ReactElement } from 'react';

/* ============================================================
   따라하기 가이드 부품 모음
   40~50대 교육생이 강의를 놓쳐도 혼자 끝까지 갈 수 있게 만드는 것이 목적.
   - 단계마다 체크박스, 진도는 브라우저에 저장되어 다음날에도 남는다
   - 화면 목업 위에 파란 번호를 찍고, 오른쪽 설명 번호와 맞춘다
   - 붙여넣을 것은 손으로 치지 않게 복사 버튼을 준다
   - 단계마다 "이 화면이 안 나오면?" 분기를 둔다
   ============================================================ */

/* ── 진도 저장 ── */
interface ProgressCtx {
  done: Record<string, boolean>;
  toggle: (id: string) => void;
  reset: () => void;
  total: number;
  register: (id: string) => void;
}
const Ctx = createContext<ProgressCtx | null>(null);

export function SetupProgressProvider({ storageKey, children }: { storageKey: string; children: ReactNode }): ReactElement {
  const [done, setDone] = useState<Record<string, boolean>>({});
  const [ids, setIds] = useState<string[]>([]);

  // 저장된 진도 복원 — 저장이 막힌 브라우저에서도 페이지는 정상 동작해야 한다
  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) setDone(JSON.parse(raw));
    } catch { /* 저장소를 못 쓰면 진도만 안 남을 뿐 */ }
  }, [storageKey]);

  const persist = useCallback((next: Record<string, boolean>) => {
    setDone(next);
    try { localStorage.setItem(storageKey, JSON.stringify(next)); } catch { /* 무시 */ }
  }, [storageKey]);

  const toggle = useCallback((id: string) => {
    setDone(prev => {
      const next = { ...prev, [id]: !prev[id] };
      try { localStorage.setItem(storageKey, JSON.stringify(next)); } catch { /* 무시 */ }
      return next;
    });
  }, [storageKey]);

  const register = useCallback((id: string) => {
    setIds(prev => (prev.includes(id) ? prev : [...prev, id]));
  }, []);

  return (
    <Ctx.Provider value={{ done, toggle, reset: () => persist({}), total: ids.length, register }}>
      {children}
    </Ctx.Provider>
  );
}

function useProgress(): ProgressCtx | null {
  return useContext(Ctx);
}

/* ── 상단 진행 막대 ── */
export function SetupProgressBar({ label }: { label?: string }): ReactElement | null {
  const p = useProgress();
  if (!p || p.total === 0) return null;
  const doneCount = Object.values(p.done).filter(Boolean).length;
  const pct = Math.round((doneCount / p.total) * 100);
  const finished = doneCount === p.total;

  return (
    <div className={`setup-progress${finished ? ' is-done' : ''}`}>
      <div className="setup-progress-head">
        <span className="setup-progress-label">
          {finished
            ? '전체 단계를 마쳤습니다'
            : (label || '내 진도')}
        </span>
        <span className="setup-progress-count">{doneCount} / {p.total} 단계</span>
      </div>
      <div className="setup-progress-track">
        <div className="setup-progress-fill" style={{ width: `${pct}%` }} />
      </div>
      <div className="setup-progress-foot">
        <span>체크한 진도는 이 브라우저에 저장됩니다. 중간에 덮어도 다음에 이어서 하시면 됩니다.</span>
        {doneCount > 0 && (
          <button type="button" className="setup-progress-reset" onClick={p.reset}>
            진도 지우기
          </button>
        )}
      </div>
    </div>
  );
}

/* ── 표지 ── */
export function SetupHero({ kicker, title, lead, badges }: {
  kicker: string; title: string; lead: string; badges?: string[];
}): ReactElement {
  return (
    <header className="setup-hero">
      <div className="setup-hero-kicker">{kicker}</div>
      <h1 className="setup-hero-title">{title}</h1>
      <p className="setup-hero-lead">{lead}</p>
      {badges && (
        <div className="setup-hero-badges">
          {badges.map(b => <span key={b} className="setup-badge">{b}</span>)}
        </div>
      )}
    </header>
  );
}

/* ── 한눈에 보기 (전체 흐름) ── */
export function StepFlow({ title, desc, steps, prep }: {
  title: string; desc: string;
  steps: { no: string; label: string; range: string }[];
  prep?: string;
}): ReactElement {
  return (
    <section className="setup-card setup-flow">
      <span className="setup-tag">한눈에 보기</span>
      <h2>{title}</h2>
      <p className="setup-flow-desc">{desc}</p>
      <ol className="setup-flow-list">
        {steps.map((s, i) => (
          <li key={s.no} className="setup-flow-item" style={{ ['--i' as string]: i }}>
            <span className="setup-flow-no">{s.no}</span>
            <span className="setup-flow-label">{s.label}</span>
            <span className="setup-flow-range">{s.range}</span>
          </li>
        ))}
      </ol>
      {prep && (
        <div className="setup-prep">
          <strong>준비물</strong>
          <span>{prep}</span>
        </div>
      )}
    </section>
  );
}

/* ── 화면 목업 ── */
export function Mockup({ kind = 'browser', addressBar, caption, flow, children }: {
  kind?: 'browser' | 'app';
  addressBar?: string;
  caption?: string;
  flow?: string;
  children: ReactNode;
}): ReactElement {
  return (
    <figure className="mk">
      <div className={`mk-frame mk-${kind}`}>
        <div className="mk-bar">
          <span className="mk-dot mk-dot-r" /><span className="mk-dot mk-dot-y" /><span className="mk-dot mk-dot-g" />
          {addressBar !== undefined && <span className="mk-address">{addressBar}</span>}
        </div>
        <div className="mk-body">{children}</div>
      </div>
      {flow && <div className="mk-flow">{flow}</div>}
      {caption && <figcaption className="mk-caption">{caption}</figcaption>}
    </figure>
  );
}

/** 목업 위에 찍는 파란 번호 — 오른쪽 설명의 같은 번호와 짝이다 */
export function Pin({ n, top, left, right, bottom }: {
  n: number; top?: string; left?: string; right?: string; bottom?: string;
}): ReactElement {
  return <span className="mk-pin" style={{ top, left, right, bottom }}>{n}</span>;
}

/** 목업에서 눌러야 할 자리를 감싸는 파란 테두리 */
export function Hot({ children, className = '' }: { children: ReactNode; className?: string }): ReactElement {
  return <span className={`mk-hot ${className}`}>{children}</span>;
}

/* ── 단계 카드 ── */
export function StepCard({ id, step, breadcrumb, title, goal, mockup, actions, children }: {
  id: string;
  step: string;
  breadcrumb: string;
  title: string;
  goal: string;
  mockup: ReactNode;
  actions: ReactNode[];
  children?: ReactNode;
}): ReactElement {
  const p = useProgress();
  const checked = !!p?.done[id];

  useEffect(() => { p?.register(id); }, [id, p]);

  return (
    <section className={`setup-card setup-step${checked ? ' is-done' : ''}`} id={id}>
      <div className="setup-step-head">
        <span className="setup-step-no">{step}</span>
        <span className="setup-step-crumb">{breadcrumb}</span>
      </div>
      <h2 className="setup-step-title">{title}</h2>

      <div className="setup-step-grid">
        <div className="setup-step-visual">{mockup}</div>

        <div className="setup-step-side">
          <div className="setup-goal">
            <span className="setup-goal-label">이 단계의 목표</span>
            <p>{goal}</p>
          </div>

          <ol className="setup-actions">
            {actions.map((a, i) => (
              <li key={i}><span className="setup-action-no">{i + 1}</span><div>{a}</div></li>
            ))}
          </ol>

          {children}
        </div>
      </div>

      <label className="setup-check">
        <input type="checkbox" checked={checked} onChange={() => p?.toggle(id)} />
        <span className="setup-check-box"><i className="fa-solid fa-check" /></span>
        <span className="setup-check-text">
          {checked ? '이 단계를 마쳤습니다' : '여기까지 했으면 눌러 주세요'}
        </span>
      </label>
    </section>
  );
}

/* ── 안내 상자 ── */
export function Note({ type = 'tip', title, children }: {
  type?: 'tip' | 'warn' | 'term' | 'stuck';
  title: string;
  children: ReactNode;
}): ReactElement {
  const icon = { tip: 'fa-lightbulb', warn: 'fa-triangle-exclamation', term: 'fa-book', stuck: 'fa-circle-question' }[type];
  return (
    <div className={`setup-note setup-note-${type}`}>
      <div className="setup-note-title"><i className={`fa-solid ${icon}`} /> {title}</div>
      <div className="setup-note-body">{children}</div>
    </div>
  );
}

/** 화면이 예상과 다를 때 — 40~50대가 여기서 가장 많이 멈춘다 */
export function Stuck({ items }: { items: { when: string; then: string }[] }): ReactElement {
  return (
    <Note type="stuck" title="이 화면이 안 나오면">
      <ul className="setup-stuck-list">
        {items.map((it, i) => (
          <li key={i}><b>{it.when}</b><span>{it.then}</span></li>
        ))}
      </ul>
    </Note>
  );
}

/* ── 붙여넣을 것: 복사 버튼 ── */
export function CopyBox({ label, value, multiline = false }: {
  label: string; value: string; multiline?: boolean;
}): ReactElement {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      // 클립보드가 막힌 환경 — 텍스트를 선택 상태로 만들어 직접 복사하게 한다
      const el = document.getElementById(`copy-${label}`) as HTMLTextAreaElement | null;
      el?.select();
      return;
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="setup-copy">
      <div className="setup-copy-head">
        <span className="setup-copy-label">{label}</span>
        <button type="button" className={`setup-copy-btn${copied ? ' is-copied' : ''}`} onClick={copy}>
          <i className={`fa-solid ${copied ? 'fa-check' : 'fa-copy'}`} />
          {copied ? '복사했습니다' : '복사'}
        </button>
      </div>
      {multiline
        ? <textarea id={`copy-${label}`} className="setup-copy-value setup-copy-area" readOnly rows={Math.min(14, value.split('\n').length + 1)} value={value} />
        : <code className="setup-copy-value">{value}</code>}
    </div>
  );
}

/* ── 마무리 확인 ── */
export function SetupDone({ title, items, next }: {
  title: string; items: string[]; next?: ReactNode;
}): ReactElement {
  return (
    <section className="setup-card setup-done">
      <span className="setup-tag setup-tag-done">다 하셨습니다</span>
      <h2>{title}</h2>
      <ul className="setup-done-list">
        {items.map(it => <li key={it}><i className="fa-solid fa-circle-check" /> {it}</li>)}
      </ul>
      {next && <div className="setup-done-next">{next}</div>}
    </section>
  );
}

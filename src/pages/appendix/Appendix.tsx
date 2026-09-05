import GuidePage from '../../components/GuidePage';
import glossary from './data/glossary';
import chatbot from './data/chatbot';
import fileSummary from './data/fileSummary';
import aiModels from './data/aiModels';
import tips from './data/tips';
import resources from './data/resources';
import '../../styles/practice.css';
import type { ReactElement } from 'react';

export default function Appendix(): ReactElement {
  return (
    <GuidePage
      seoTitle="부록"
      seoTitleEn="Appendix"
      seoDescription="용어 해설, 챗봇 활용법, 파일 요약·문서 정리, AI 모델 고르기, 실전 팁, 함께 공부할 자료 — 교육과 더불어 공부할 부록 자료"
      path="/appendix"
      hero={{
        icon: 'fa-book-open',
        color: '#0A4F86',
        eyebrow: '부록 · 보충 학습자료',
        eyebrowEn: 'Appendix · Supplementary Materials',
        title: '부록',
        titleEn: 'Appendix',
        tagline: '교육과 더불어 언제든 꺼내 보는 참고 묶음',
        taglineEn: 'A reference set to revisit alongside the course',
        desc: '용어 해설부터 챗봇 활용법, 파일 요약·문서 정리, AI 모델 고르는 법, 실전 팁까지 — 수업에서 다 담지 못한 내용을 주제별로 정리했습니다.',
        descEn: 'Glossary, chatbot usage, file summarization and document organization, choosing an AI model, and practical tips — everything the sessions could not fully cover, organized by topic.',
        meta: [
          { icon: 'fa-user-check', text: '대구광역시 공무원', textEn: 'Daegu city officials' },
          { icon: 'fa-layer-group', text: '6개 주제', textEn: '6 topics' },
          { icon: 'fa-signal', text: '전 과정 공통', textEn: 'All programs' },
        ],
        note: '각 주제는 독립적으로 읽을 수 있습니다. 왼쪽 목차에서 필요한 항목만 골라 보세요.',
        noteEn: 'Each topic stands on its own — pick what you need from the table of contents on the left.',
      }}
      dataFiles={[glossary, chatbot, fileSummary, aiModels, tips, resources]}
    />
  );
}

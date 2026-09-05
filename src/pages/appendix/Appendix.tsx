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
      dataFiles={[glossary, chatbot, fileSummary, aiModels, tips, resources]}
    />
  );
}

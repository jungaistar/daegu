import GuidePage from '../../components/GuidePage';
import intro from './data/ref-intro';
import tryIt from './data/ref-try';
import projects from './data/ref-projects';
import '../../styles/practice.css';
import type { ReactElement } from 'react';

/**
 * 참고사이트 — 광진구 류승인 주무관이 현직 공무원으로 개발·공개한
 * 실무 도구 12종을 누구나 확인하고 따라 할 수 있도록 정리했다.
 * 출처: doc/광진구 공무원 사례.pptx
 */
export default function ReferenceSites(): ReactElement {
  return (
    <GuidePage
      seoTitle="참고사이트"
      seoTitleEn="Reference Sites"
      seoDescription="현직 공무원이 직접 만든 실무 도구 12종 — 법령·통계·특허·건축·문서처리 MCP와 웹 도구를 따라 해보는 안내"
      path="/reference"
      hero={{
        icon: 'fa-compass',
        color: '#14B8A6',
        eyebrow: '참고사이트 · 현직 공무원 개발 사례',
        eyebrowEn: 'Reference Sites · Built by a Serving Official',
        title: '참고사이트',
        titleEn: 'Reference Sites',
        tagline: '공무원이 직접 만든 실무 도구 12종을 따라 해보기',
        taglineEn: 'Twelve working tools built by a public official',
        desc: '광진구 류승인 주무관이 현직 공무원으로 개발·공개한 법령·통계·특허·건축·문서처리 MCP와 웹 도구를 누구나 확인하고 따라 할 수 있도록 정리했습니다.',
        descEn: 'MCP servers and web tools for law, statistics, patents, construction and document processing — developed and released by a serving official, organized so anyone can follow along.',
        meta: [
          { icon: 'fa-user-check', text: '실무 도구를 찾는 공무원', textEn: 'Officials seeking practical tools' },
          { icon: 'fa-layer-group', text: '도구 12종', textEn: '12 tools' },
          { icon: 'fa-code-branch', text: '공개 사례', textEn: 'Open sourced' },
        ],
        note: '소개하는 도구는 모두 외부에 공개된 사례입니다. 업무에 적용하기 전 소속 기관의 보안 지침을 먼저 확인하세요.',
        noteEn: 'All tools shown here are publicly released examples. Check your agency security policy before applying them to real work.',
      }}
      dataFiles={[intro, tryIt, projects]}
    />
  );
}

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
      dataFiles={[intro, tryIt, projects]}
    />
  );
}

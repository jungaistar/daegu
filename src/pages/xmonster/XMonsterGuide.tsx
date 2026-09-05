import GuidePage from '../../components/GuidePage';
import basic from './data/xm-basic';
import assistants from './data/xm-assistants';
import settings from './data/xm-settings';
import features from './data/xm-features';
import usecases from './data/xm-usecases';
import '../../styles/practice.css';
import type { ReactElement } from 'react';

/**
 * 엑스몬스터 매뉴얼 — 공식 사용자 매뉴얼(10p)을 사이트 가이드로 옮기고,
 * 대구시 공무원 업무에 맞춘 '업무 활용법' 장을 덧붙였다.
 */
export default function XMonsterGuide(): ReactElement {
  return (
    <GuidePage
      seoTitle="엑스몬스터 매뉴얼"
      seoTitleEn="X-Monster Guide"
      seoDescription="공공기관 사용자를 위한 엑스몬스터(X-Monster) 사용법과 대구시 업무 활용법 — 비서 선택·모델·파일 업로드·내 프롬프트·SecureX까지"
      path="/xmonster"
      hero={{
        icon: 'fa-robot',
        color: '#1793E6',
        eyebrow: '엑스몬스터 · 공식 사용자 매뉴얼',
        eyebrowEn: 'X-Monster · Official User Guide',
        title: '엑스몬스터 매뉴얼',
        titleEn: 'X-Monster Guide',
        tagline: '공공기관 전용 AI 비서를 업무에 바로 붙이는 법',
        taglineEn: 'Putting the public-sector AI assistant to work',
        desc: '비서 선택·모델 설정·파일 업로드·내 프롬프트·SecureX까지 공식 매뉴얼을 옮기고, 대구시 공무원 업무에 맞춘 활용법을 덧붙였습니다.',
        descEn: 'The official manual — assistant selection, model settings, file upload, custom prompts and SecureX — plus usage patterns tailored to Daegu city work.',
        meta: [
          { icon: 'fa-user-check', text: '대구광역시 공무원', textEn: 'Daegu city officials' },
          { icon: 'fa-layer-group', text: '5개 장', textEn: '5 chapters' },
          { icon: 'fa-shield-halved', text: '보안 환경 사용', textEn: 'Secure environment' },
        ],
        note: '엑스몬스터는 폐쇄망 기준으로 운영됩니다. 외부 AI 서비스와 사용 규칙이 다르니 보안 항목을 먼저 확인하세요.',
        noteEn: 'X-Monster runs on a closed network. Its rules differ from public AI services — read the security section first.',
      }}
      dataFiles={[basic, assistants, settings, features, usecases]}
    />
  );
}

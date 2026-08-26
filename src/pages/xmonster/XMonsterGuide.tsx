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
      dataFiles={[basic, assistants, settings, features, usecases]}
    />
  );
}

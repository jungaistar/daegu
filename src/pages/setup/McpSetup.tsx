import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import {
  SetupProgressProvider, SetupProgressBar, SetupHero, StepFlow,
  StepCard, Mockup, Pin, Hot, Note, Stuck, CopyBox, SetupDone,
} from '../../components/setup/SetupKit';
import type { ReactElement } from 'react';

const LAW = 'https://mcp.gomdori.app/law';

/**
 * Claude 에 공공데이터(MCP) 연결하기 — 따라하기 전용 페이지.
 * hufs26 환경설정 가이드 방식(화면 목업 + 번호 핀)을 따르고,
 * 40~50대 교육생을 위해 단계 체크·진도 저장·"안 나오면" 분기를 붙였다.
 */
export default function McpSetup(): ReactElement {
  return (
    <SetupProgressProvider storageKey="daegu.setup.mcp">
      <div className="setup-page">
        <SEOHead
          title="Claude에 공공데이터 연결하기"
          description="Claude 데스크톱 앱에 법령·통계·특허·건축·학교 공공데이터를 연결하는 따라하기 안내 — 설치부터 첫 질문까지"
          path="/setup/mcp"
        />

        <SetupHero
          kicker="SETUP · MCP 연결"
          title="Claude에 공공데이터 연결하기"
          lead="법제처·KOSIS 같은 공공데이터를 Claude가 직접 찾아보게 만듭니다. 화면 그림의 파란 번호와 오른쪽 순서 번호가 같습니다. 그대로만 따라오시면 됩니다."
          badges={['소요 시간 약 15분', '비용 0원', '코딩 필요 없음', '단계마다 체크']}
        />

        <SetupProgressBar label="내 진도 (자동 저장)" />

        <StepFlow
          title="전체 흐름 — 이 순서로 갑니다"
          desc="앱 설치 → 로그인 → 설정 열기 → 주소 붙여넣기 → 확인 → 질문 순서입니다. 무언가를 만드는 게 아니라 주소 한 줄을 등록하는 일입니다."
          steps={[
            { no: '01', label: 'Claude 앱 설치', range: 'STEP 1' },
            { no: '02', label: '로그인', range: 'STEP 2' },
            { no: '03', label: '설정 열기', range: 'STEP 3' },
            { no: '04', label: '주소 등록', range: 'STEP 4-5' },
            { no: '05', label: '연결 확인', range: 'STEP 6' },
            { no: '06', label: '첫 질문', range: 'STEP 7' },
          ]}
          prep="윈도우 또는 맥 노트북 · 구글 계정(또는 이메일) · 인터넷 · 약 15분"
        />

        <Note type="term" title="MCP가 뭔가요">
          <p><b>Claude가 바깥 자료를 직접 찾아볼 수 있게 연결해 주는 통로</b>입니다. 연결하기 전 Claude는 아는 것만 대답하지만, 연결한 뒤에는 <b>법제처 원문을 직접 조회해서</b> 출처와 함께 답합니다.</p>
          <p>여러분이 하는 일은 <b>주소 한 줄을 등록하는 것</b>뿐입니다. 프로그램을 만들지 않습니다.</p>
        </Note>

        <StepCard
          id="s1"
          step="STEP 1"
          breadcrumb="CLAUDE · 앱 내려받기"
          title="claude.ai/download 에서 앱 내려받기"
          goal="브라우저 말고 '데스크톱 앱'이 필요합니다. 공공데이터 연결은 앱에서만 됩니다."
          mockup={
            <Mockup addressBar="claude.ai/download" flow="① 주소 입력 → ② 내 컴퓨터에 맞는 버튼 → ③ 설치">
              <Pin n={1} top="-34px" left="60px" />
              <p className="mk-h">Claude 데스크톱 앱</p>
              <p className="mk-sub">Windows · macOS</p>
              <div className="mk-row" style={{ justifyContent: 'center', gap: '14px', marginTop: '22px', position: 'relative' }}>
                <Hot><span className="mk-btn">Windows용 다운로드</span></Hot>
                <span className="mk-btn mk-btn-ghost">macOS용 다운로드</span>
                <Pin n={2} top="-14px" left="140px" />
              </div>
              <div className="mk-row" style={{ justifyContent: 'center', marginTop: '30px', position: 'relative' }}>
                <span style={{ fontSize: '13px', opacity: 0.75 }}>내려받은 파일을 두 번 눌러 설치합니다</span>
                <Pin n={3} top="-6px" right="40px" />
              </div>
            </Mockup>
          }
          actions={[
            <>크롬 주소창에 <b>claude.ai/download</b> 를 입력하고 Enter.</>,
            <>내 컴퓨터에 맞는 버튼을 누릅니다. 대부분 <b>Windows</b>입니다.</>,
            <>내려받은 파일을 <b>두 번 눌러</b> 설치합니다. 다음·다음만 누르면 됩니다.</>,
          ]}
        >
          <Stuck items={[
            { when: '버튼이 하나만 보여요', then: '사이트가 내 컴퓨터를 알아본 것입니다. 그 버튼을 누르시면 됩니다.' },
            { when: '설치가 막혀요', then: '기관 PC는 설치가 제한될 수 있습니다. 전산 담당자에게 문의하거나 개인 노트북으로 하세요.' },
            { when: '이미 앱이 있어요', then: 'STEP 2로 넘어가세요.' },
          ]} />
        </StepCard>

        <StepCard
          id="s2"
          step="STEP 2"
          breadcrumb="CLAUDE · 로그인"
          title="앱을 열고 로그인하기"
          goal="구글 계정이나 이메일로 로그인합니다. 무료 계정으로도 이 실습은 다 됩니다."
          mockup={
            <Mockup kind="app" flow="① 앱 실행 → ② 구글로 계속하기 → ③ 계정 선택">
              <p className="mk-h" style={{ color: '#1f2937' }}>Claude에 오신 것을 환영합니다</p>
              <p className="mk-sub" style={{ color: '#6b7280' }}>계속하려면 로그인하세요</p>
              <div style={{ maxWidth: '320px', margin: '20px auto 0', position: 'relative' }}>
                <Hot className="mk-hot-block">
                  <div className="mk-menu-item" style={{ justifyContent: 'center', fontWeight: 700 }}>Google로 계속하기</div>
                </Hot>
                <Pin n={2} top="4px" right="-38px" />
                <div className="mk-menu-item" style={{ justifyContent: 'center', marginTop: '10px', border: '1px solid #e2e6ec', borderRadius: '10px' }}>이메일로 계속하기</div>
              </div>
              <Pin n={1} top="-8px" left="4px" />
            </Mockup>
          }
          actions={[
            <>설치된 <b>Claude</b> 앱을 실행합니다. 바탕화면이나 시작 메뉴에 있습니다.</>,
            <><b>Google로 계속하기</b>를 누릅니다. 이메일 가입도 됩니다.</>,
            <>본인 계정을 선택하고 허용을 누릅니다.</>,
          ]}
        >
          <Note type="warn" title="업무용 계정을 써도 되나요">
            개인 계정을 권합니다. 이 실습은 <b>공개된 공공데이터만</b> 다루므로 개인 계정으로 충분합니다.
          </Note>
        </StepCard>

        <StepCard
          id="s3"
          step="STEP 3"
          breadcrumb="CLAUDE · 설정 열기"
          title="왼쪽 아래 내 이름 → 설정"
          goal="설정 화면으로 들어갑니다. 여기에 연결 메뉴가 있습니다."
          mockup={
            <Mockup kind="app" flow="① 왼쪽 아래 내 이름 → ② 설정(Settings)">
              <div style={{ display: 'flex', gap: '14px', minHeight: '190px' }}>
                <div style={{ width: '150px', background: '#eef1f5', borderRadius: '10px', padding: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div style={{ fontSize: '12px', color: '#6b7280' }}>새 대화<br /><br />최근 대화</div>
                  <div style={{ position: 'relative' }}>
                    <Hot className="mk-hot-block">
                      <div style={{ fontSize: '13px', fontWeight: 700 }}>홍길동</div>
                    </Hot>
                    <Pin n={1} top="-4px" right="-34px" />
                  </div>
                </div>
                <div style={{ flex: 1, position: 'relative' }}>
                  <div className="mk-menu" style={{ maxWidth: '210px' }}>
                    <div className="mk-menu-item">내 계정</div>
                    <Hot className="mk-hot-block">
                      <div className="mk-menu-item" style={{ fontWeight: 700 }}>설정 (Settings)</div>
                    </Hot>
                    <div className="mk-menu-item">로그아웃</div>
                  </div>
                  <Pin n={2} top="46px" left="220px" />
                </div>
              </div>
            </Mockup>
          }
          actions={[
            <>Claude 화면 <b>왼쪽 아래</b>에 있는 내 이름(또는 계정 아이콘)을 누릅니다.</>,
            <>올라온 메뉴에서 <b>설정</b>(영문이면 <code>Settings</code>)을 누릅니다.</>,
          ]}
        >
          <Stuck items={[
            { when: '내 이름이 안 보여요', then: '왼쪽 목록이 접혀 있을 수 있습니다. 왼쪽 위 줄 세 개(≡) 아이콘을 눌러 펼치세요.' },
            { when: '영어로 나와요', then: '설정에서 언어를 한국어로 바꿀 수 있습니다. 지금은 그대로 두고 진행해도 됩니다.' },
          ]} />
        </StepCard>

        <StepCard
          id="s4"
          step="STEP 4"
          breadcrumb="CLAUDE · 커넥터"
          title="커넥터에서 '커스텀 커넥터 추가' 누르기"
          goal="공공데이터 주소를 등록할 창을 엽니다."
          mockup={
            <Mockup kind="app" flow="① 커넥터 → ② 커스텀 커넥터 추가">
              <div style={{ display: 'flex', gap: '14px', minHeight: '200px' }}>
                <div style={{ width: '130px', fontSize: '13px', color: '#6b7280', position: 'relative' }}>
                  <div style={{ padding: '8px 0' }}>프로필</div>
                  <div style={{ padding: '8px 0' }}>모양</div>
                  <Hot className="mk-hot-block">
                    <div style={{ padding: '8px 0', fontWeight: 700, color: '#1f2937' }}>커넥터</div>
                  </Hot>
                  <Pin n={1} top="66px" right="-32px" />
                  <div style={{ padding: '8px 0' }}>계정</div>
                </div>
                <div style={{ flex: 1, position: 'relative' }}>
                  <div style={{ fontSize: '15px', fontWeight: 700, marginBottom: '12px' }}>커넥터</div>
                  <div style={{ fontSize: '12.5px', color: '#6b7280', marginBottom: '16px' }}>Claude가 사용할 외부 도구를 연결합니다</div>
                  <Hot>
                    <span className="mk-btn">+ 커스텀 커넥터 추가</span>
                  </Hot>
                  <Pin n={2} top="56px" left="200px" />
                </div>
              </div>
            </Mockup>
          }
          actions={[
            <>설정 화면 왼쪽 목록에서 <b>커넥터</b>(영문 <code>Connectors</code>)를 누릅니다.</>,
            <><b>+ 커스텀 커넥터 추가</b> 버튼을 누릅니다. <code>Add custom connector</code> 라고 되어 있을 수도 있습니다.</>,
          ]}
        >
          <Stuck items={[
            { when: '커넥터 메뉴가 없어요', then: '앱이 오래된 버전일 수 있습니다. 앱을 완전히 닫았다 다시 열면 자동으로 갱신됩니다.' },
            { when: '메뉴 이름이 달라요', then: '"Connectors", "확장", "통합" 처럼 표기가 다를 수 있습니다. 외부 도구를 연결하는 메뉴를 찾으시면 됩니다.' },
          ]} />
        </StepCard>

        <StepCard
          id="s5"
          step="STEP 5"
          breadcrumb="CLAUDE · 주소 등록"
          title="이름과 주소를 넣고 추가하기"
          goal="여기가 이 안내의 핵심입니다. 아래 주소를 복사해서 그대로 붙여넣습니다."
          mockup={
            <Mockup kind="app" flow="① 이름 입력 → ② 주소 붙여넣기 → ③ 추가">
              <p className="mk-h" style={{ color: '#1f2937', fontSize: '17px' }}>커스텀 커넥터 추가</p>
              <div style={{ maxWidth: '400px', margin: '18px auto 0', position: 'relative' }}>
                <div className="mk-row">
                  <span className="mk-label" style={{ width: '52px', color: '#374151' }}>이름</span>
                  <Hot className="mk-hot-block" ><span className="mk-input" style={{ display: 'block' }}>법령 검색</span></Hot>
                </div>
                <Pin n={1} top="4px" right="-34px" />
                <div className="mk-row">
                  <span className="mk-label" style={{ width: '52px', color: '#374151' }}>주소</span>
                  <Hot className="mk-hot-block"><span className="mk-input" style={{ display: 'block', fontSize: '11.5px' }}>{LAW}</span></Hot>
                </div>
                <Pin n={2} top="52px" right="-34px" />
                <div className="mk-row" style={{ justifyContent: 'flex-end', marginTop: '16px', position: 'relative' }}>
                  <span className="mk-btn mk-btn-ghost">취소</span>
                  <Hot><span className="mk-btn">추가</span></Hot>
                  <Pin n={3} top="-14px" right="-8px" />
                </div>
              </div>
            </Mockup>
          }
          actions={[
            <><b>이름</b> 칸에 <code>법령 검색</code> 이라고 적습니다. 나중에 알아보기 위한 이름이라 아무거나 괜찮습니다.</>,
            <><b>주소</b> 칸에 아래 주소를 <b>복사해서 붙여넣습니다.</b> 손으로 치면 틀리기 쉽습니다.</>,
            <><b>추가</b> 버튼을 누릅니다.</>,
          ]}
        >
          <CopyBox label="주소 칸에 붙여넣을 것" value={LAW} />
          <Note type="warn" title="주소는 반드시 복사해서 넣으세요">
            <code>gomdori</code> 를 <code>gomdory</code> 로, <code>https</code> 를 <code>http</code> 로 잘못 치면 연결되지 않습니다. 위 <b>복사</b> 버튼을 누른 뒤 주소 칸에서 <b>Ctrl+V</b>(맥은 Cmd+V) 하시면 됩니다.
          </Note>
          <Stuck items={[
            { when: '칸 이름이 영어예요', then: 'Name = 이름, URL 또는 Server URL = 주소 입니다.' },
            { when: '추가 버튼이 안 눌려요', then: '주소 앞뒤에 빈칸이 들어갔을 수 있습니다. 칸을 비우고 다시 붙여넣으세요.' },
            { when: '오류가 떠요', then: '인터넷 연결을 확인하고 다시 시도하세요. 기관 방화벽이 막는 경우도 있습니다 — 그때는 개인 네트워크에서 해보세요.' },
          ]} />
        </StepCard>

        <StepCard
          id="s6"
          step="STEP 6"
          breadcrumb="CLAUDE · 연결 확인"
          title="목록에 '법령 검색'이 생겼는지 보기"
          goal="추가한 것이 목록에 나타나면 연결된 것입니다."
          mockup={
            <Mockup kind="app" flow="① 목록 확인 → ② 켜짐 상태 확인">
              <div style={{ fontSize: '15px', fontWeight: 700, marginBottom: '14px' }}>커넥터</div>
              <div style={{ position: 'relative' }}>
                <Hot className="mk-hot-block">
                  <div className="mk-menu" style={{ maxWidth: '340px' }}>
                    <div className="mk-menu-item" style={{ justifyContent: 'space-between' }}>
                      <span style={{ fontWeight: 700 }}>법령 검색</span>
                      <span style={{ fontSize: '12px', color: '#0E6BA8', fontWeight: 700 }}>연결됨</span>
                    </div>
                  </div>
                </Hot>
                <Pin n={1} top="-8px" left="352px" />
                <Pin n={2} top="14px" left="300px" />
              </div>
              <div style={{ marginTop: '18px', fontSize: '12.5px', color: '#6b7280' }}>+ 커스텀 커넥터 추가</div>
            </Mockup>
          }
          actions={[
            <>커넥터 목록에 <b>법령 검색</b> 이 보이면 성공입니다.</>,
            <>오른쪽에 <b>연결됨</b>(또는 켜짐 표시)인지 확인합니다.</>,
          ]}
        >
          <Note type="tip" title="여기까지 오셨으면 다 된 것입니다">
            나머지 네 가지(통계·특허·건축·학교)도 <b>STEP 4~5를 똑같이 반복</b>하면 됩니다. 이름만 바꾸고 주소를 아래에서 복사하세요.
          </Note>
          <CopyBox label="통계 (KOSIS)" value="https://mcp.gomdori.app/stats" />
          <CopyBox label="특허 (KIPRIS)" value="https://mcp.gomdori.app/patent" />
          <CopyBox label="건축HUB" value="https://mcp.gomdori.app/archhub" />
          <CopyBox label="학교알리미" value="https://mcp.gomdori.app/school" />
        </StepCard>

        <StepCard
          id="s7"
          step="STEP 7"
          breadcrumb="CLAUDE · 첫 질문"
          title="대화창에 물어보고 결과 확인하기"
          goal="연결이 실제로 되었는지, 질문 하나로 확인합니다."
          mockup={
            <Mockup kind="app" flow="① 질문 붙여넣기 → ② 보내기 → ③ 출처 확인">
              <div style={{ position: 'relative' }}>
                <Hot className="mk-hot-block">
                  <div className="mk-input" style={{ display: 'block', fontSize: '12.5px', minHeight: '46px' }}>
                    지방공무원 복무규정에서 연가 관련 조문을 원문과 함께 알려줘
                  </div>
                </Hot>
                <Pin n={1} top="-8px" right="-30px" />
                <div className="mk-row" style={{ justifyContent: 'flex-end', marginTop: '10px', position: 'relative' }}>
                  <Hot><span className="mk-btn">보내기</span></Hot>
                  <Pin n={2} top="-14px" right="-8px" />
                </div>
                <div style={{ marginTop: '16px', padding: '12px 14px', borderRadius: '10px', background: '#eef1f5', fontSize: '12.5px', position: 'relative' }}>
                  <div style={{ fontWeight: 700, marginBottom: '6px', color: '#0E6BA8' }}>법령 검색 도구 사용함</div>
                  지방공무원 복무규정 제7조(연가) …
                  <div style={{ marginTop: '8px', fontSize: '11.5px', color: '#6b7280' }}>출처: 국가법령정보센터</div>
                  <Pin n={3} top="-10px" right="-10px" />
                </div>
              </div>
            </Mockup>
          }
          actions={[
            <>Claude 대화창에 아래 질문을 붙여넣습니다.</>,
            <><b>보내기</b>를 누릅니다.</>,
            <>답변 위에 <b>도구를 사용했다는 표시</b>가 뜨고, 답변에 <b>출처</b>가 붙으면 연결이 제대로 된 것입니다.</>,
          ]}
        >
          <CopyBox label="대화창에 붙여넣을 질문" value="지방공무원 복무규정에서 연가 관련 조문을 원문과 함께 알려줘" />
          <Stuck items={[
            { when: '도구 표시가 안 떠요', then: '연결은 됐지만 Claude가 안 써도 된다고 판단한 것입니다. "법령 검색 도구를 써서 찾아줘" 라고 덧붙여 보세요.' },
            { when: '앱을 껐다 켜라고 나와요', then: '앱을 완전히 닫았다가 다시 실행하세요. 연결은 그대로 남아 있습니다.' },
            { when: '출처가 안 붙어요', then: '"출처를 함께 알려줘" 라고 덧붙이면 됩니다.' },
          ]} />
          <Note type="warn" title="업무 자료는 넣지 마세요">
            이 서버는 <b>공개된 외부 서버</b>입니다. 개인정보나 대외비를 대화창에 넣지 마세요. <b>공개 데이터를 조회하는 용도</b>로만 씁니다.
          </Note>
        </StepCard>

        <SetupDone
          title="이제 Claude가 공공데이터를 직접 찾아봅니다"
          items={[
            'Claude 데스크톱 앱 설치와 로그인',
            '커스텀 커넥터로 법령 서버 등록',
            '연결 확인 및 첫 질문으로 출처 확인',
            '나머지 4종(통계·특허·건축·학교) 주소 확보',
          ]}
          next={
            <>
              <Link to="/reference"><i className="fa-solid fa-arrow-left" /> 참고사이트로 돌아가기</Link>
              <Link to="/automation"><i className="fa-solid fa-screwdriver-wrench" /> 행정업무 자동화 과정 보기</Link>
            </>
          }
        />

        <Note type="tip" title="이런 것들을 물어볼 수 있습니다">
          <p><b>법령</b> — "지방공무원 복무규정에서 연가 관련 조문을 원문과 함께 알려줘"</p>
          <p><b>통계</b> — "최근 3년 대구광역시 청년 고용률을 출처와 함께 표로 정리해줘"</p>
          <p><b>건축</b> — "이 주소의 건축물대장에서 용도·연면적·사용승인일을 알려줘"</p>
          <p><b>학교</b> — "대구 ○○중학교의 이번 달 급식 식단과 학사일정을 정리해줘"</p>
          <p><b>특허</b> — "'스마트 가로등' 관련 최근 특허 출원 동향을 정리해줘"</p>
        </Note>
      </div>
    </SetupProgressProvider>
  );
}

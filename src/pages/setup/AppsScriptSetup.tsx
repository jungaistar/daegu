import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import {
  SetupProgressProvider, SetupProgressBar, SetupHero, StepFlow,
  StepCard, Mockup, Pin, Hot, Note, Stuck, CopyBox, SetupDone,
} from '../../components/setup/SetupKit';
import type { ReactElement } from 'react';

const SAMPLE = `function 부서별합계() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const data = sheet.getDataRange().getValues();
  const 합계 = {};

  // 1행은 제목이므로 2행부터 읽는다
  for (let i = 1; i < data.length; i++) {
    const 부서 = data[i][0];
    const 금액 = Number(data[i][1]) || 0;
    if (!부서) continue;
    합계[부서] = (합계[부서] || 0) + 금액;
  }

  const 결과 = [['부서', '합계']];
  for (const 부서 in 합계) 결과.push([부서, 합계[부서]]);

  sheet.getRange(1, 4, 결과.length, 2).setValues(결과);
  SpreadsheetApp.getUi().alert('부서별 합계를 D열에 넣었습니다.');
}`;

const TABLE = '부서\t금액\n총무과\t1000\n총무과\t2000\n청년정책과\t1500\n도로과\t3000';

/**
 * 구글 시트 Apps Script 첫 실행 — 행정업무 자동화 1교시 실습의 따라하기 판.
 * 여기서 막히면 하루가 통째로 막히므로, 권한 승인 화면을 특히 자세히 다룬다.
 */
export default function AppsScriptSetup(): ReactElement {
  return (
    <SetupProgressProvider storageKey="daegu.setup.appsscript">
      <div className="setup-page">
        <SEOHead
          title="구글 시트 자동화 첫 실행"
          description="구글 시트에 Apps Script 를 붙여넣고 실행하는 따라하기 안내 — 권한 승인 화면까지 단계별로"
          path="/setup/apps-script"
        />

        <SetupHero
          kicker="SETUP · 자동화 첫 실행"
          title="구글 시트 자동화 첫 실행"
          lead="코드를 한 줄도 쓰지 않습니다. 붙여넣고 실행하면 부서별 합계가 자동으로 채워집니다. 화면 그림의 파란 번호와 오른쪽 순서 번호가 같습니다."
          badges={['소요 시간 약 10분', '설치 프로그램 없음', '비용 0원', '단계마다 체크']}
        />

        <SetupProgressBar label="내 진도 (자동 저장)" />

        <StepFlow
          title="전체 흐름 — 이 순서로 갑니다"
          desc="시트 만들기 → 자료 넣기 → 편집기 열기 → 붙여넣기 → 실행 → 권한 허용 → 결과 확인. 무언가를 설치하지 않습니다."
          steps={[
            { no: '01', label: '새 시트 만들기', range: 'STEP 1' },
            { no: '02', label: '연습 자료 넣기', range: 'STEP 2' },
            { no: '03', label: '편집기 열기', range: 'STEP 3' },
            { no: '04', label: '코드 붙여넣기', range: 'STEP 4' },
            { no: '05', label: '실행 · 권한 허용', range: 'STEP 5-6' },
            { no: '06', label: '결과 확인', range: 'STEP 7' },
          ]}
          prep="구글 계정 · 크롬 브라우저 · 약 10분"
        />

        <Note type="term" title="Apps Script 가 뭔가요">
          <p><b>구글 시트 안에서 도는 자동화 기능</b>입니다. 엑셀의 매크로와 같은 자리입니다.</p>
          <p>중요한 점 — <b>내 구글 계정 안에서만 돕니다.</b> 시트 자료가 밖으로 나가지 않습니다.</p>
        </Note>

        <StepCard
          id="a1"
          step="STEP 1"
          breadcrumb="구글 시트 · 새로 만들기"
          title="주소창에 sheets.new 입력하기"
          goal="빈 구글 시트를 하나 엽니다. 메뉴를 찾아 들어갈 필요가 없습니다."
          mockup={
            <Mockup addressBar="sheets.new" flow="① 주소창에 sheets.new → ② Enter → ③ 빈 시트가 열림">
              <Pin n={1} top="-34px" left="60px" />
              <div style={{ background: '#fff', borderRadius: '8px', padding: '10px', color: '#1f2937', position: 'relative' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: '#d5dae2' }}>
                  {['A', 'B', 'C', 'D'].map(c => (
                    <div key={c} style={{ background: '#eef1f5', padding: '5px', fontSize: '11px', textAlign: 'center', fontWeight: 700 }}>{c}</div>
                  ))}
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} style={{ background: '#fff', padding: '9px' }} />
                  ))}
                </div>
                <Pin n={3} top="-10px" right="-10px" />
              </div>
            </Mockup>
          }
          actions={[
            <>크롬 주소창에 <b>sheets.new</b> 를 입력합니다. (검색창 아니고 <b>주소창</b>입니다)</>,
            <>Enter 를 누릅니다.</>,
            <>빈 구글 시트가 새로 열립니다. 저장 버튼은 없습니다 — 자동 저장됩니다.</>,
          ]}
        >
          <Stuck items={[
            { when: '검색 결과가 나와요', then: '주소창이 아니라 검색창에 입력한 것입니다. 브라우저 맨 위 주소창에 넣으세요.' },
            { when: '로그인하라고 나와요', then: '구글 계정으로 로그인하시면 됩니다. 개인 계정도 됩니다.' },
          ]} />
        </StepCard>

        <StepCard
          id="a2"
          step="STEP 2"
          breadcrumb="구글 시트 · 자료 입력"
          title="연습용 자료 넣기"
          goal="합계를 낼 자료를 넣습니다. 실제 업무 자료가 아니어도 됩니다."
          mockup={
            <Mockup kind="app" flow="① A1·B1 제목 → ② A2부터 자료 입력">
              <div style={{ display: 'grid', gridTemplateColumns: '34px repeat(3, 1fr)', gap: '1px', background: '#d5dae2', fontSize: '12.5px', position: 'relative' }}>
                <div style={{ background: '#eef1f5', padding: '6px' }} />
                {['A', 'B', 'C'].map(c => <div key={c} style={{ background: '#eef1f5', padding: '6px', textAlign: 'center', fontWeight: 700 }}>{c}</div>)}
                <div style={{ background: '#eef1f5', padding: '7px', textAlign: 'center' }}>1</div>
                <div style={{ background: '#fff9ec', padding: '7px', fontWeight: 700 }}>부서</div>
                <div style={{ background: '#fff9ec', padding: '7px', fontWeight: 700 }}>금액</div>
                <div style={{ background: '#fff', padding: '7px' }} />
                {[['총무과', '1000'], ['총무과', '2000'], ['청년정책과', '1500'], ['도로과', '3000']].map((r, i) => (
                  <div key={r[0] + i} style={{ display: 'contents' }}>
                    <div style={{ background: '#eef1f5', padding: '7px', textAlign: 'center' }}>{i + 2}</div>
                    <div style={{ background: '#fff', padding: '7px' }}>{r[0]}</div>
                    <div style={{ background: '#fff', padding: '7px' }}>{r[1]}</div>
                    <div style={{ background: '#fff', padding: '7px' }} />
                  </div>
                ))}
              </div>
              <Pin n={1} top="34px" left="6px" />
              <Pin n={2} top="76px" left="6px" />
            </Mockup>
          }
          actions={[
            <><b>A1</b> 칸에 <code>부서</code>, <b>B1</b> 칸에 <code>금액</code> 을 입력합니다.</>,
            <><b>A2</b> 칸부터 아래처럼 넣습니다. 총무과가 두 줄인 것이 중요합니다 — 합쳐지는 걸 확인하려는 것입니다.</>,
          ]}
        >
          <CopyBox label="이대로 넣으시면 됩니다" multiline value={TABLE} />
          <Note type="tip" title="복사해서 한 번에 넣기">
            위 <b>복사</b>를 누르고 시트의 <b>A1 칸을 클릭한 뒤 Ctrl+V</b> 하면 표가 통째로 들어갑니다.
          </Note>
        </StepCard>

        <StepCard
          id="a3"
          step="STEP 3"
          breadcrumb="구글 시트 · 편집기 열기"
          title="확장 프로그램 → Apps Script"
          goal="자동화 코드를 넣을 편집기를 엽니다. 새 탭이 열립니다."
          mockup={
            <Mockup kind="app" flow="① 확장 프로그램 → ② Apps Script">
              <div style={{ display: 'flex', gap: '14px', fontSize: '13px', paddingBottom: '10px', borderBottom: '1px solid #e2e6ec', position: 'relative' }}>
                <span>파일</span><span>수정</span><span>보기</span><span>삽입</span><span>서식</span><span>데이터</span><span>도구</span>
                <Hot><span style={{ fontWeight: 700 }}>확장 프로그램</span></Hot>
                <span>도움말</span>
                <Pin n={1} top="-18px" right="46px" />
              </div>
              <div style={{ position: 'relative', marginTop: '10px' }}>
                <div className="mk-menu" style={{ maxWidth: '230px' }}>
                  <div className="mk-menu-item">부가기능</div>
                  <Hot className="mk-hot-block">
                    <div className="mk-menu-item" style={{ fontWeight: 700 }}>Apps Script</div>
                  </Hot>
                  <div className="mk-menu-item">AppSheet</div>
                </div>
                <Pin n={2} top="44px" left="240px" />
              </div>
            </Mockup>
          }
          actions={[
            <>시트 위쪽 메뉴에서 <b>확장 프로그램</b>을 누릅니다. (영문이면 <code>Extensions</code>)</>,
            <>내려온 메뉴에서 <b>Apps Script</b> 를 누릅니다. 새 탭이 열립니다.</>,
          ]}
        >
          <Stuck items={[
            { when: '확장 프로그램 메뉴가 없어요', then: '엑셀 파일을 연 경우입니다. 파일 → Google 스프레드시트로 저장 후 다시 여세요.' },
            { when: '새 탭이 안 열려요', then: '팝업 차단입니다. 주소창 오른쪽 차단 아이콘을 눌러 허용하세요.' },
          ]} />
        </StepCard>

        <StepCard
          id="a4"
          step="STEP 4"
          breadcrumb="APPS SCRIPT · 붙여넣기"
          title="있던 내용을 지우고 코드 붙여넣기"
          goal="편집기에 원래 있던 내용을 모두 지우고, 아래 코드를 통째로 붙여넣습니다."
          mockup={
            <Mockup kind="app" flow="① 전체 선택(Ctrl+A) → ② 지우기 → ③ 붙여넣기(Ctrl+V) → ④ 저장">
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px', position: 'relative' }}>
                <Hot><span style={{ fontSize: '18px' }}>💾</span></Hot>
                <span style={{ fontSize: '12.5px', color: '#6b7280' }}>저장</span>
                <span style={{ fontSize: '12.5px', color: '#6b7280', marginLeft: '10px' }}>▶ 실행</span>
                <Pin n={4} top="-16px" left="6px" />
              </div>
              <div className="mk-code" style={{ background: '#16233a', color: '#cfe0ff', position: 'relative' }}>
                {'function 부서별합계() {\n  const sheet = SpreadsheetApp\n    .getActiveSheet();\n  ...\n}'}
                <Pin n={3} top="-10px" right="-10px" />
              </div>
            </Mockup>
          }
          actions={[
            <>편집기 안을 한 번 클릭한 뒤 <b>Ctrl+A</b>(맥은 Cmd+A)로 전체 선택합니다.</>,
            <><b>Delete</b> 를 눌러 모두 지웁니다. 원래 있던 <code>function myFunction()</code> 도 지웁니다.</>,
            <>아래 <b>복사</b> 버튼을 누르고 편집기에 <b>Ctrl+V</b> 로 붙여넣습니다.</>,
            <>위쪽 <b>저장</b>(디스크 모양)을 누릅니다. <b>Ctrl+S</b> 도 됩니다.</>,
          ]}
        >
          <CopyBox label="편집기에 붙여넣을 코드" multiline value={SAMPLE} />
          <Note type="warn" title="꼭 전부 지우고 넣으세요">
            원래 있던 내용을 남겨 두고 붙여넣으면 오류가 납니다. <b>Ctrl+A → Delete</b> 를 먼저 하세요.
          </Note>
        </StepCard>

        <StepCard
          id="a5"
          step="STEP 5"
          breadcrumb="APPS SCRIPT · 실행"
          title="▶ 실행 누르기"
          goal="코드를 한 번 돌립니다. 처음이면 권한 요청 창이 뜹니다 — 다음 단계에서 다룹니다."
          mockup={
            <Mockup kind="app" flow="① 함수 이름 확인 → ② ▶ 실행">
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', position: 'relative' }}>
                <span style={{ fontSize: '18px' }}>💾</span>
                <Hot><span style={{ fontSize: '13px', fontWeight: 700 }}>▶ 실행</span></Hot>
                <Pin n={2} top="-16px" left="52px" />
                <span style={{ fontSize: '13px', color: '#6b7280' }}>🐞 디버그</span>
                <Hot><span style={{ fontSize: '13px' }}>부서별합계 ▾</span></Hot>
                <Pin n={1} top="-16px" right="4px" />
              </div>
              <div style={{ marginTop: '16px', padding: '12px', borderRadius: '8px', background: '#eef1f5', fontSize: '12.5px', color: '#6b7280' }}>
                실행 로그<br />
                <span style={{ color: '#2f8f5b', fontWeight: 700 }}>실행이 시작됨</span>
              </div>
            </Mockup>
          }
          actions={[
            <>실행 버튼 오른쪽 함수 이름이 <b>부서별합계</b> 인지 확인합니다. 다르면 눌러서 바꿉니다.</>,
            <><b>▶ 실행</b> 을 누릅니다.</>,
          ]}
        >
          <Stuck items={[
            { when: '함수 이름이 안 보여요', then: '저장을 안 한 것입니다. Ctrl+S 로 저장하면 목록에 나타납니다.' },
            { when: '빨간 오류가 떠요', then: '코드가 일부만 붙여넣어진 경우입니다. 다시 전체 선택 → 지우기 → 붙여넣기 하세요.' },
          ]} />
        </StepCard>

        <StepCard
          id="a6"
          step="STEP 6"
          breadcrumb="구글 · 권한 승인"
          title="겁나는 화면이 나오지만 정상입니다"
          goal="여기서 가장 많이 멈춥니다. '확인되지 않은 앱' 이라고 떠도 정상입니다. 내가 만든 것이기 때문입니다."
          mockup={
            <Mockup kind="app" flow="① 권한 검토 → ② 계정 선택 → ③ 고급 → ④ 이동 → ⑤ 허용">
              <div style={{ maxWidth: '360px', margin: '0 auto', position: 'relative' }}>
                <p style={{ fontSize: '14px', fontWeight: 700, marginBottom: '6px' }}>Google에서 확인하지 않은 앱</p>
                <p style={{ fontSize: '12px', color: '#6b7280', marginBottom: '14px' }}>이 앱은 아직 Google에서 확인하지 않았습니다.</p>
                <Hot className="mk-hot-block">
                  <div style={{ fontSize: '13px', color: '#2b6cb0', fontWeight: 700 }}>고급</div>
                </Hot>
                <Pin n={3} top="66px" right="-32px" />
                <div style={{ fontSize: '12.5px', color: '#2b6cb0', marginTop: '10px', paddingLeft: '10px', position: 'relative' }}>
                  <Hot><span>제목없는 프로젝트(으)로 이동</span></Hot>
                  <Pin n={4} top="-14px" right="-14px" />
                </div>
                <div className="mk-row" style={{ justifyContent: 'flex-end', marginTop: '18px', position: 'relative' }}>
                  <span className="mk-btn mk-btn-ghost">취소</span>
                  <Hot><span className="mk-btn">허용</span></Hot>
                  <Pin n={5} top="-14px" right="-8px" />
                </div>
              </div>
            </Mockup>
          }
          actions={[
            <><b>권한 검토</b>를 누릅니다.</>,
            <>내 <b>구글 계정</b>을 선택합니다.</>,
            <>"Google에서 확인하지 않은 앱" 화면이 뜨면 <b>고급</b>을 누릅니다. (작은 글씨입니다)</>,
            <>아래에 나타난 <b>○○(으)로 이동</b> 을 누릅니다.</>,
            <><b>허용</b> 을 누릅니다.</>,
          ]}
        >
          <Note type="warn" title="왜 이런 경고가 뜨나요">
            <p>구글은 "내가 만든 스크립트가 내 시트를 건드려도 되는지" 를 <b>처음 한 번만</b> 묻습니다. 남이 만든 프로그램을 설치하는 것이 아니라, <b>방금 내가 붙여넣은 코드</b>에 대한 확인입니다.</p>
            <p>이 코드는 <b>내 계정의 내 시트 안에서만</b> 돕니다. 외부로 나가지 않습니다.</p>
          </Note>
          <Stuck items={[
            { when: '고급이 안 보여요', then: '화면 왼쪽 아래 작은 글씨입니다. 창을 아래로 조금 내려 보세요.' },
            { when: '기관 계정이라 막혀요', then: '조직 정책으로 차단된 것입니다. 개인 구글 계정으로 다시 하세요.' },
            { when: '창이 닫혀 버렸어요', then: 'STEP 5 의 ▶ 실행을 다시 누르면 창이 다시 뜹니다.' },
          ]} />
        </StepCard>

        <StepCard
          id="a7"
          step="STEP 7"
          breadcrumb="구글 시트 · 결과 확인"
          title="시트로 돌아가 D열 확인하기"
          goal="D열에 부서별 합계가 들어가 있으면 성공입니다. 총무과 두 줄이 3000으로 합쳐졌는지 보세요."
          mockup={
            <Mockup kind="app" flow="① 시트 탭으로 → ② D·E열 확인 → ③ 총무과 3000 확인">
              <div style={{ display: 'grid', gridTemplateColumns: '30px repeat(5, 1fr)', gap: '1px', background: '#d5dae2', fontSize: '12px', position: 'relative' }}>
                <div style={{ background: '#eef1f5', padding: '5px' }} />
                {['A', 'B', 'C', 'D', 'E'].map(c => <div key={c} style={{ background: '#eef1f5', padding: '5px', textAlign: 'center', fontWeight: 700 }}>{c}</div>)}
                {[
                  ['1', '부서', '금액', '', '부서', '합계'],
                  ['2', '총무과', '1000', '', '총무과', '3000'],
                  ['3', '총무과', '2000', '', '청년정책과', '1500'],
                  ['4', '청년정책과', '1500', '', '도로과', '3000'],
                  ['5', '도로과', '3000', '', '', ''],
                ].map(row => (
                  <div key={row[0]} style={{ display: 'contents' }}>
                    <div style={{ background: '#eef1f5', padding: '6px', textAlign: 'center' }}>{row[0]}</div>
                    {row.slice(1).map((v, j) => (
                      <div key={j} style={{ background: j >= 3 ? '#fff2e8' : '#fff', padding: '6px', fontWeight: row[0] === '1' && j >= 3 ? 700 : 400 }}>{v}</div>
                    ))}
                  </div>
                ))}
                <Pin n={2} top="-12px" right="60px" />
                <Pin n={3} top="46px" right="18px" />
              </div>
            </Mockup>
          }
          actions={[
            <>브라우저에서 <b>구글 시트 탭</b>으로 돌아갑니다.</>,
            <><b>D열과 E열</b>에 부서별 합계표가 들어가 있는지 봅니다.</>,
            <><b>총무과가 3000</b> 으로 합쳐졌는지 확인합니다. 1000 + 2000 이 자동으로 더해진 것입니다.</>,
          ]}
        >
          <Note type="tip" title="방금 무슨 일이 일어났나">
            코드를 한 줄도 쓰지 않았습니다. <b>붙여넣고 실행</b>했을 뿐입니다. 행정업무 자동화 과정에서는 이 코드를 <b>AI에게 말로 시켜서 받아내는 법</b>을 배웁니다.
          </Note>
          <Stuck items={[
            { when: '아무 일도 안 일어나요', then: '실행이 아직 안 끝났을 수 있습니다. 10초쯤 기다렸다가 시트를 새로고침(F5)하세요.' },
            { when: '엉뚱한 곳에 들어갔어요', then: 'A1·B1 에 제목을 안 넣었을 수 있습니다. STEP 2 를 다시 확인하세요.' },
            { when: '합계가 0으로 나와요', then: '금액이 글자로 입력된 경우입니다. B열 값에 공백이나 쉼표가 없는지 보세요.' },
          ]} />
        </StepCard>

        <SetupDone
          title="첫 자동화를 직접 돌리셨습니다"
          items={[
            '구글 시트 만들고 자료 넣기',
            'Apps Script 편집기 열고 코드 붙여넣기',
            '실행과 권한 승인 (가장 많이 막히는 지점)',
            '결과 확인 — 총무과 두 줄이 하나로 합쳐짐',
          ]}
          next={
            <>
              <Link to="/automation"><i className="fa-solid fa-arrow-right" /> 행정업무 자동화 과정으로</Link>
              <Link to="/setup/mcp"><i className="fa-solid fa-plug" /> Claude에 공공데이터 연결하기</Link>
            </>
          }
        />
      </div>
    </SetupProgressProvider>
  );
}

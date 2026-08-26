import { lazy, Suspense, type ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthGuard from '../components/AuthGuard';
import AdminGuard from '../components/AdminGuard';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import site from '../config/site';

// 페이지 lazy import
const Home = lazy(() => import('../pages/Home'));
const NotFound = lazy(() => import('../pages/NotFound'));

// Auth 페이지
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const ForgotPassword = lazy(() => import('../pages/ForgotPassword'));
const MyPage = lazy(() => import('../pages/MyPage'));

// Shop 페이지
const Cart = lazy(() => import('../pages/Cart'));
const Checkout = lazy(() => import('../pages/Checkout'));
const OrderConfirmation = lazy(() => import('../pages/OrderConfirmation'));
const OrderHistory = lazy(() => import('../pages/OrderHistory'));

// DAEGU 전용 페이지
const CourseCatalog = lazy(() => import('../pages/courses/CourseCatalog'));
const CourseCategory = lazy(() => import('../pages/courses/CourseCategory'));
const LearningMaterials = lazy(() => import('../pages/materials/LearningMaterials'));
const Appendix = lazy(() => import('../pages/appendix/Appendix'));
const XMonsterGuide = lazy(() => import('../pages/xmonster/XMonsterGuide'));
const ReferenceSites = lazy(() => import('../pages/reference/ReferenceSites'));
const About = lazy(() => import('../pages/About'));
const Instructor = lazy(() => import('../pages/Instructor'));

// AI 도구
const AIToolsPage = lazy(() => import('../pages/ai-tools/AIToolsPage'));
const OfficialDocGenerator = lazy(() => import('../pages/ai-tools/OfficialDocGenerator'));
const PressReleaseGenerator = lazy(() => import('../pages/ai-tools/PressReleaseGenerator'));
const MinutesOrganizer = lazy(() => import('../pages/ai-tools/MinutesOrganizer'));
const CivilReplyDrafter = lazy(() => import('../pages/ai-tools/CivilReplyDrafter'));
const DocumentReviewer = lazy(() => import('../pages/ai-tools/DocumentReviewer'));

// 프롬프트 실습
const PromptEvalHub = lazy(() => import('../pages/prompt-eval/PromptEvalHub'));
const PromptPractice = lazy(() => import('../pages/prompt-eval/PromptPractice'));
const PromptWorkshop = lazy(() => import('../pages/prompt-eval/PromptWorkshop'));

// 커뮤니티
const CommunityHub = lazy(() => import('../pages/community/CommunityHub'));
const Board = lazy(() => import('../pages/community/Board'));
const BoardDetail = lazy(() => import('../pages/community/BoardDetail'));
const BoardWrite = lazy(() => import('../pages/community/BoardWrite'));

// 대시보드 & 설정
const Dashboard = lazy(() => import('../pages/Dashboard'));
const Settings = lazy(() => import('../pages/Settings'));
const Pricing = lazy(() => import('../pages/Pricing'));
const RecommendedSites = lazy(() => import('../pages/RecommendedSites'));

// 관리자
const AdminDashboard = lazy(() => import('../pages/admin/AdminDashboard'));
const AdminUsers = lazy(() => import('../pages/admin/AdminUsers'));
const AdminPlans = lazy(() => import('../pages/admin/AdminPlans'));

const Loading = (): ReactElement => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
    <div className="loading-spinner"></div>
  </div>
);

const PublicLayout = (): ReactElement => {
  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={<Loading />}>
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* 교육과정 */}
            <Route path="/courses" element={<CourseCatalog />} />
            <Route path="/courses/:category" element={<CourseCategory />} />

            {/* 학습자료 */}
            <Route path="/materials" element={<LearningMaterials />} />
            <Route path="/materials/:category" element={<LearningMaterials />} />

            {/* 부록 */}
            <Route path="/appendix" element={<Appendix />} />

            {/* 엑스몬스터 매뉴얼 · 참고사이트 */}
            <Route path="/xmonster" element={<XMonsterGuide />} />
            <Route path="/reference" element={<ReferenceSites />} />

            {/* AI 도구 */}
            <Route path="/tools" element={<AIToolsPage />} />
            <Route path="/tools/official-doc" element={<AuthGuard><OfficialDocGenerator /></AuthGuard>} />
            <Route path="/tools/press-release" element={<AuthGuard><PressReleaseGenerator /></AuthGuard>} />
            <Route path="/tools/minutes" element={<AuthGuard><MinutesOrganizer /></AuthGuard>} />
            <Route path="/tools/civil-reply" element={<AuthGuard><CivilReplyDrafter /></AuthGuard>} />
            <Route path="/tools/doc-review" element={<AuthGuard><DocumentReviewer /></AuthGuard>} />

            {/* 프롬프트 실습 */}
            <Route path="/prompt-eval" element={<PromptEvalHub />} />
            <Route path="/prompt-eval/practice" element={<PromptPractice />} />
            <Route path="/prompt-eval/workshop" element={<PromptWorkshop />} />

            {/* 커뮤니티 */}
            {site.features.community && (
              <>
                <Route path="/community" element={<CommunityHub />} />
                <Route path="/community/:board" element={<Board />} />
                <Route path="/community/:board/write" element={<AuthGuard><BoardWrite /></AuthGuard>} />
                <Route path="/community/:board/:id" element={<BoardDetail />} />
              </>
            )}

            {/* 요금제 & 추천사이트 */}
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/recommended" element={<RecommendedSites />} />

            {/* 대시보드 & 설정 */}
            <Route path="/dashboard" element={<AuthGuard><Dashboard /></AuthGuard>} />
            <Route path="/settings" element={<AuthGuard><Settings /></AuthGuard>} />

            {/* 소개 */}
            <Route path="/about" element={<About />} />
            <Route path="/instructor" element={<Instructor />} />

            {/* Auth */}
            {site.features.auth && (
              <>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/mypage" element={<AuthGuard><MyPage /></AuthGuard>} />
                <Route path="/mypage/orders" element={<AuthGuard><OrderHistory /></AuthGuard>} />
              </>
            )}

            {/* Shop */}
            {site.features.shop && (
              <>
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/order-confirmation" element={<OrderConfirmation />} />
              </>
            )}

            {/* 관리자 */}
            <Route path="/admin" element={<AdminGuard><AdminDashboard /></AdminGuard>} />
            <Route path="/admin/users" element={<AdminGuard><AdminUsers /></AdminGuard>} />
            <Route path="/admin/plans" element={<AdminGuard><AdminPlans /></AdminGuard>} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default PublicLayout;

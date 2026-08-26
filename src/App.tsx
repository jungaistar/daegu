import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { CartProvider } from './contexts/CartContext';
import { AuthProvider } from './contexts/AuthContext';
import { ToastProvider } from './contexts/ToastContext';
import { SubscriptionProvider } from './contexts/SubscriptionContext';
import PublicLayout from './layouts/PublicLayout';
import site from './config/site';
import type { ReactElement, ReactNode } from 'react';

const ShopWrapper = ({ children }: { children: ReactNode }): ReactElement =>
  site.features.shop ? <CartProvider>{children}</CartProvider> : <>{children}</>;

function App(): ReactElement {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AuthProvider>
          <SubscriptionProvider>
            <ToastProvider>
              <ShopWrapper>
                {/* base 가 하위경로(/daegu/)일 수 있으므로 라우터에 알려준다.
                    import.meta.env.BASE_URL 은 vite base 를 그대로 받는다. */}
                <Router basename={import.meta.env.BASE_URL}>
                  <div className="App">
                    <Routes>
                      <Route path="*" element={<PublicLayout />} />
                    </Routes>
                  </div>
                </Router>
              </ShopWrapper>
            </ToastProvider>
          </SubscriptionProvider>
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;

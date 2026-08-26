import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * base 는 이 빌드가 "어디에 놓이는지"에 따라 달라진다.
 *
 *   저장소 Pages 하위경로  https://jungaistar.github.io/daegu/   → '/daegu/'  (기본값)
 *   커스텀 도메인 루트      https://daegu.dreamitbiz.com/         → '/'
 *
 * 지금 실제로 서비스되는 곳이 하위경로라 기본값을 '/daegu/' 로 둔다.
 * daegu.dreamitbiz.com 이 이 저장소로 넘어오면 `npm run deploy:domain` 을 쓴다
 * (내부적으로 `vite build --base=/`).
 */
export default defineConfig({
  plugins: [react()],
  base: '/daegu/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true
  },
  server: {
    host: true,
    port: 5174
  }
})

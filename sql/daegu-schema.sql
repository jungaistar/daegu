-- ============================================================
-- DAEGU(대구 공무원 AI 실무 교육) 핵심 스키마
-- 공용 Supabase 프로젝트(hcmgdztsgjvzcyxyayaj)에서
-- daegu_ 접두사로 본 사이트 전용 테이블을 생성합니다.
-- Supabase SQL Editor에서 실행하세요.
-- (회원/프로필은 공용 user_profiles 단일 풀을 사용 — 여기서 생성하지 않음)
-- ============================================================

-- ────────────────────────────────────────────────
-- 1. daegu_posts — 커뮤니티 게시글
-- ────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS daegu_posts (
  id BIGSERIAL PRIMARY KEY,
  author_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  author_name TEXT NOT NULL,
  board TEXT NOT NULL,            -- intermediate | advanced 등
  category TEXT NOT NULL DEFAULT 'free', -- question | resource | free | notice
  title TEXT NOT NULL,
  content TEXT NOT NULL DEFAULT '',
  view_count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_daegu_posts_board ON daegu_posts(board, created_at DESC);

-- ────────────────────────────────────────────────
-- 2. daegu_comments — 게시글 댓글
-- ────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS daegu_comments (
  id BIGSERIAL PRIMARY KEY,
  post_id BIGINT NOT NULL REFERENCES daegu_posts(id) ON DELETE CASCADE,
  author_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  author_name TEXT NOT NULL,
  body TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_daegu_comments_post ON daegu_comments(post_id, created_at);

-- 조회수 증가 RPC (posts.ts: increment_daegu_view_count)
CREATE OR REPLACE FUNCTION increment_daegu_view_count(post_id BIGINT)
RETURNS void
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  UPDATE daegu_posts SET view_count = view_count + 1 WHERE id = post_id;
$$;

-- ────────────────────────────────────────────────
-- 3. daegu_practice_scores — 프롬프트 실습/평가 점수
-- ────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS daegu_practice_scores (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  user_name TEXT,
  quiz_score INTEGER DEFAULT 0,
  eval_score INTEGER DEFAULT 0,
  write_score INTEGER DEFAULT 0,
  total_score INTEGER DEFAULT 0,
  grade TEXT,
  detail JSONB,
  created_at TIMESTAMPTZ DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_daegu_practice_user ON daegu_practice_scores(user_id, created_at DESC);

-- ────────────────────────────────────────────────
-- 4. daegu_orders / daegu_order_items — 결제(토큰 충전) 주문
-- ────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS daegu_orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_number TEXT UNIQUE NOT NULL,
  user_id UUID DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE SET NULL,
  user_email TEXT,
  user_name TEXT,
  user_phone TEXT,
  total_amount INTEGER NOT NULL DEFAULT 0,
  payment_method TEXT,
  payment_status TEXT NOT NULL DEFAULT 'pending', -- pending | paid | cancelled | failed
  portone_payment_id TEXT,
  paid_at TIMESTAMPTZ,
  cancelled_at TIMESTAMPTZ,
  cancel_reason TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_daegu_orders_user ON daegu_orders(user_id, created_at DESC);

CREATE TABLE IF NOT EXISTS daegu_order_items (
  id BIGSERIAL PRIMARY KEY,
  order_id UUID NOT NULL REFERENCES daegu_orders(id) ON DELETE CASCADE,
  product_title TEXT NOT NULL,
  quantity INTEGER NOT NULL DEFAULT 1,
  unit_price INTEGER NOT NULL DEFAULT 0,
  subtotal INTEGER NOT NULL DEFAULT 0
);
CREATE INDEX IF NOT EXISTS idx_daegu_order_items_order ON daegu_order_items(order_id);

-- ============================================================
-- RLS 정책
-- ============================================================
ALTER TABLE daegu_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE daegu_comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE daegu_practice_scores ENABLE ROW LEVEL SECURITY;
ALTER TABLE daegu_orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE daegu_order_items ENABLE ROW LEVEL SECURITY;

-- daegu_posts: 누구나 읽기 / 로그인 사용자 작성 / 본인 글만 수정·삭제
DROP POLICY IF EXISTS "daegu_posts_select" ON daegu_posts;
DROP POLICY IF EXISTS "daegu_posts_insert" ON daegu_posts;
DROP POLICY IF EXISTS "daegu_posts_update" ON daegu_posts;
DROP POLICY IF EXISTS "daegu_posts_delete" ON daegu_posts;
CREATE POLICY "daegu_posts_select" ON daegu_posts FOR SELECT USING (true);
CREATE POLICY "daegu_posts_insert" ON daegu_posts FOR INSERT WITH CHECK (auth.uid() = author_id);
CREATE POLICY "daegu_posts_update" ON daegu_posts FOR UPDATE USING (auth.uid() = author_id);
CREATE POLICY "daegu_posts_delete" ON daegu_posts FOR DELETE USING (auth.uid() = author_id);

-- daegu_comments: 누구나 읽기 / 로그인 작성 / 본인만 삭제
DROP POLICY IF EXISTS "daegu_comments_select" ON daegu_comments;
DROP POLICY IF EXISTS "daegu_comments_insert" ON daegu_comments;
DROP POLICY IF EXISTS "daegu_comments_delete" ON daegu_comments;
CREATE POLICY "daegu_comments_select" ON daegu_comments FOR SELECT USING (true);
CREATE POLICY "daegu_comments_insert" ON daegu_comments FOR INSERT WITH CHECK (auth.uid() = author_id);
CREATE POLICY "daegu_comments_delete" ON daegu_comments FOR DELETE USING (auth.uid() = author_id);

-- daegu_practice_scores: 본인만 읽기/기록
DROP POLICY IF EXISTS "daegu_practice_select" ON daegu_practice_scores;
DROP POLICY IF EXISTS "daegu_practice_insert" ON daegu_practice_scores;
CREATE POLICY "daegu_practice_select" ON daegu_practice_scores FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "daegu_practice_insert" ON daegu_practice_scores FOR INSERT WITH CHECK (auth.uid() = user_id);

-- daegu_orders: 본인만 조회/생성/수정
DROP POLICY IF EXISTS "daegu_orders_select" ON daegu_orders;
DROP POLICY IF EXISTS "daegu_orders_insert" ON daegu_orders;
DROP POLICY IF EXISTS "daegu_orders_update" ON daegu_orders;
CREATE POLICY "daegu_orders_select" ON daegu_orders FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "daegu_orders_insert" ON daegu_orders FOR INSERT WITH CHECK (true);
CREATE POLICY "daegu_orders_update" ON daegu_orders FOR UPDATE USING (auth.uid() = user_id OR user_id IS NULL);

-- daegu_order_items: 본인 주문의 항목만 조회 / 생성 허용
DROP POLICY IF EXISTS "daegu_order_items_select" ON daegu_order_items;
DROP POLICY IF EXISTS "daegu_order_items_insert" ON daegu_order_items;
CREATE POLICY "daegu_order_items_select" ON daegu_order_items FOR SELECT
  USING (EXISTS (SELECT 1 FROM daegu_orders o WHERE o.id = order_id AND (o.user_id = auth.uid() OR o.user_id IS NULL)));
CREATE POLICY "daegu_order_items_insert" ON daegu_order_items FOR INSERT WITH CHECK (true);

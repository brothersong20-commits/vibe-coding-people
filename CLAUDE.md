# Vibe Coding People

바이브 코딩으로 사이드 프로젝트를 함께 진행하는 모임의 공식 홈페이지 저장소다. 모임 소개, 공지, 일정, 멤버들의 프로젝트 결과물을 외부에 공유하는 허브 역할을 한다. 단계적으로 기능을 확장하며, 추후 Supabase DB + Google Auth로 확장될 예정이다.

## 배포 / 저장소

- **라이브**: https://vibe-coding-people.vercel.app/
- **GitHub**: https://github.com/brothersong20-commits/vibe-coding-people
- **호스팅**: Vercel (GitHub `main` 브랜치 자동 배포 — push 시 자동으로 새 배포 생성, PR 시 Preview URL 생성)

## Plan 저장 규칙 (중요)

모든 작업 plan은 다음 규칙으로 `PLAN/` 폴더에 보존한다.

- **위치**: 프로젝트 루트의 `PLAN/` 폴더.
- **파일명 형식**: `YYMMDD_{Plan내용}.md`
  - 예: `260521_VibeCodingPeople_1단계_홈페이지_구축.md`
- **같은 날짜에 여러 plan**: 일련번호를 붙인다 — `YYMMDD_1_{Plan내용}.md`, `YYMMDD_2_{Plan내용}.md`
  - 예: `260603_1_프로젝트_상세_페이지_개선.md`, `260603_2_공지사항_검색_추가.md`
- **언어**: 한국어로 작성.
- **내용 구조** (권장): Context / 결정사항 / 페이지(또는 컴포넌트) 사양 / 기술 스택 / 완료 기준 / 검증 방법 / 열린 질문.

새로운 작업이 plan mode로 승인되면, 승인된 plan을 위 규칙대로 즉시 `PLAN/`에 저장한다.

## 언어 규칙

- 문서, 주석, 커밋 메시지: **한국어**.
- 변수명, 함수명, 파일명(코드 식별자): **영어** (코드 표준 준수).
- UI 텍스트: **한국어** 기본, 필요 시 영문 병기.

## Git 커밋 규칙

커밋 메시지는 **`Phase X[.Y]`**로 시작하고 한국어로 작성한다.

- **큰 변화 (메이저)**: `Phase 1`, `Phase 2`, `Phase 3` … — 단계 로드맵의 단계 전환, 새 라우트 추가, 데이터 모델 변경, 디자인 톤 변경 등.
- **소소한 업데이트 (마이너)**: `Phase 1.1`, `Phase 1.2`, `Phase 2.1` … — 콘텐츠 추가, 카피 수정, 작은 버그 수정, 스타일 미세 조정.
- **첫 커밋은 `Phase 1.0`** — 1단계 완성 상태를 기록하는 베이스라인.

### 메시지 형식

```
Phase {X.Y} - {한 줄 요약}

- {상세 변경점 1}
- {상세 변경점 2}
```

예시:
- `Phase 1.0 - 1단계 홈페이지 초기 구축`
- `Phase 1.1 - 공지 카드 카테고리 뱃지 색상 조정`
- `Phase 2 - Vercel 배포 + 실제 도메인 연결`
- `Phase 2.1 - 푸터 채널 링크 실제 URL로 교체`
- `Phase 3 - /insights 라우트 추가`

### 브랜치 전략

1단계~3단계는 `main` 단일 브랜치로 진행. 4단계(Supabase + Auth)부터 기능 브랜치 도입을 검토.

## 디자인 가이드

- 디자인은 프로젝트 루트의 `DESIGN.md` (Cursor 마케팅 사이트 톤)를 우선 적용한다.
- 핵심 원칙:
  - 웜 크림 캔버스(`#f7f7f4`) + 워밍 잉크(`#26251e`) — 순수 흰색/검정 금지.
  - 단일 액센트 컬러: Cursor Orange(`#f54e00`) — 절제해 사용.
  - Display weight는 400 고정 (Bold 금지) — 매거진 보이스.
  - 코드 표면은 모두 **JetBrains Mono**.
  - 헤어라인(1px) 깊이만, 드롭 섀도우 없음.
  - 80px 섹션 리듬.
- 한글 폰트: **Pretendard Variable** (Inter fallback). Display 텍스트도 weight 400 유지, letter-spacing 마이너스 적용.
- AI Timeline 5색 파스텔(peach/mint/blue/lavender/gold)은 **제품 내 AI 액션 시각화 전용** — 시스템 액션 색상으로 사용 금지.

## 단계 로드맵

| 단계 | 상태 | 산출물 |
| --- | --- | --- |
| **1단계 (로컬)** | ✅ 완료 | 6개 라우트(`/`, `/notices`, `/schedule`, `/projects`, `/contests`, `/about`) + `/projects/[slug]` + 더미 콘텐츠 + DESIGN.md 적용 |
| **2단계 (배포)** | ✅ 완료 | Git 초기화 + GitHub 푸시(`brothersong20-commits/vibe-coding-people`) + Vercel 자동 배포(https://vibe-coding-people.vercel.app/) |
| **3단계 (확장)** | ✅ 완료 | 공모전 상세 페이지 `/contests/[slug]` + favicon + `/schedule` 월간 캘린더 그리드 뷰 + `/insights` 라우트(리스트 + 상세 MDX) + 실제 채널 링크(카카오톡 오픈채팅) 연결 |
| **4.0 (Supabase 인프라)** | ✅ 완료 | Supabase 프로젝트(`vibe-coding-people`, ap-northeast-2) + 콘텐츠 스키마 7테이블 + `lib/supabase/*` 클라이언트 + `lib/content.ts` DB 헬퍼 + react-markdown 본문 + `scripts/seed.ts` 시드 |
| **4.1 (인증)** | 진행 예정 | Google OAuth(`@supabase/ssr`) + `middleware.ts` 세션 갱신 + `members` 테이블 이메일 화이트리스트 매칭 |
| **4.2 (어드민)** | 진행 예정 | `/admin` 라우트 + 멤버 어드민 폼(notices/schedule/contests/projects/insights CRUD) + RLS 정책 정교화 |

## 기술 스택

- Next.js (App Router) + TypeScript + React 19
- Tailwind CSS v4 (DESIGN.md 토큰 매핑)
- shadcn/ui (베이스 컴포넌트, DESIGN.md 톤으로 오버라이드)
- Supabase (Postgres + Auth) — `@supabase/supabase-js`, `@supabase/ssr`
- 마크다운: `react-markdown` + `remark-gfm` (4.0 이후 본문은 DB `body_md` 컬럼)
- MDX 인프라(`@next/mdx`, `@mdx-js/*`)는 4.0.x 정리 PR 전까지 보존
- 패키지 매니저: **npm** (`package-lock.json`)

## 콘텐츠 추가 가이드

**4.0 이후 콘텐츠 SOT 는 Supabase 테이블이다.** `content/*.ts` / `content/**/*.mdx` 는 시드 소스로 보존되어 있을 뿐, 사이트는 더 이상 그 파일을 읽지 않는다.

추가/수정 방법:
1. (4.0 임시) Supabase Studio (https://supabase.com/dashboard/project/evhfoayahyxyyxxntkjx) 에서 직접 row 편집
2. (4.0 임시) `content/*.ts` 와 `content/**/*.mdx` 를 갱신 후 `npm run seed` 재실행 (`upsert onConflict='slug'`)
3. (4.2 이후) `/admin` 폼에서 CRUD

### Supabase 테이블 스키마 (요약 — 정확한 정의는 `supabase/migrations/0001_initial_content_schema` 참고)

| 테이블 | 컬럼 (자연키 `slug` + uuid `id`) |
| --- | --- |
| `notices` | slug, title, date, category(공지/이벤트/회고), summary, sort_order |
| `schedule_items` | slug, start_at, end_at?, title, location, description, status(예정/진행중/완료), tags[] |
| `contests` | slug, title, host, organizer?, start_date, end_date, prize, fields[], eligibility, url, status(모집중/예정/마감), tags[], summary?, body_md, sort_order |
| `contest_teams` | contest_id(fk), name, members[], status(모집중/확정/출품완료), note?, github_url?, demo_url?, sort_order |
| `projects` | slug, title, summary, tags[], members[], thumbnail?, github?, demo?, sort_order, body_md |
| `insights` | slug, title, date, category(AI 코딩/도구/워크플로우/회고), summary, tags[], author, read_time, body_md, sort_order |
| `members` | email(unique), name?, role(admin/member), google_sub? — 4.1 Auth 매핑 대기 |

- 본문(`body_md`)은 순수 마크다운. JSX 컴포넌트 import 불가. GFM(표, 체크박스)은 지원.
- 카테고리/상태 enum 을 늘릴 때는 (1) DB `check` 제약 수정 + 마이그레이션, (2) `lib/types.ts` 의 union 타입, (3) UI 의 `categoryTone`/`statusTone` 매핑을 함께 갱신한다.
- 새 필드가 필요하면 마이그레이션 + `mcp__plugin_supabase_supabase__generate_typescript_types` 재실행 후 `lib/database.types.ts` / `lib/types.ts` / `lib/content.ts` 매퍼를 같이 갱신한다.

### 프로젝트 썸네일 추가 절차

`projects` 카드 상단 이미지는 `project.thumbnail` 값이 있으면 `next/image` 로 렌더되고, 없으면 그라데이션 fallback 이 보인다(`components/cards/project-card.tsx`). 새 썸네일을 추가하려면:

1. 자체 사이트면 Playwright 로 1280×720 viewport 캡처 (또는 디자인된 정적 이미지 준비).
2. `public/projects/{slug}.png` 로 저장 (slug 와 정확히 일치).
3. **Supabase `projects.thumbnail` 컬럼** 을 `/projects/{slug}.png` 로 update (SOT).
4. `content/projects.ts` 시드의 같은 항목에도 `thumbnail` 필드를 추가 — 시드 재실행 시 일관성 유지를 위해.

외부 도메인 이미지를 쓰려면 `next.config.mjs` 의 `images.remotePatterns` 에 호스트를 등록한다. 로컬 `public/` 자산은 추가 설정 필요 없음.

## 디렉토리 구조 (4.0 기준)

```
Vibe-Coding-People/
├─ CLAUDE.md
├─ DESIGN.md
├─ PLAN/
│  └─ YYMMDD_*.md
├─ app/
│  ├─ layout.tsx, page.tsx
│  ├─ notices/page.tsx, schedule/page.tsx, about/page.tsx
│  ├─ projects/page.tsx + [slug]/page.tsx
│  ├─ contests/page.tsx + [slug]/page.tsx
│  └─ insights/page.tsx + [slug]/page.tsx
├─ components/
│  ├─ ui/         # shadcn/ui 베이스
│  ├─ brand/      # top-nav, footer, hero-band, cta-band
│  ├─ cards/      # notice-row, schedule-item, project-card, contest-card, insight-card
│  └─ schedule/   # schedule-calendar, calendar-cell, schedule-status-dot
├─ content/                    # 시드 소스 (4.0 이후 SOT 는 DB)
│  ├─ notices.ts, schedule.ts, contests.ts, projects.ts, insights.ts
│  └─ {contests,insights,projects}/*.mdx
├─ lib/
│  ├─ types.ts                 # 도메인 타입 (UI 가 보는 단일 표면)
│  ├─ database.types.ts        # MCP 생성 — Database 제네릭
│  ├─ content.ts               # DB 쿼리 헬퍼 (8개)
│  ├─ date.ts
│  ├─ markdown-components.tsx  # react-markdown 매핑
│  └─ supabase/
│     ├─ server.ts             # createServerClient (RSC)
│     ├─ client.ts             # createBrowserClient (4.1 대비)
│     └─ admin.ts              # service_role (server-only)
├─ scripts/
│  └─ seed.ts                  # 1회성 시드. `npm run seed` 로 실행
├─ public/
│  └─ projects/{slug}.png      # 프로젝트 카드 썸네일 (1280×720 권장)
├─ .env.local                  # 추적 제외
├─ .env.example
├─ tailwind.config.ts
├─ package.json
└─ tsconfig.json
```

### Supabase 프로젝트 메모
- **Project ref**: `evhfoayahyxyyxxntkjx`
- **URL**: `https://evhfoayahyxyyxxntkjx.supabase.co`
- **리전**: `ap-northeast-2`
- **마이그레이션 SOT**: Supabase dashboard 의 SQL Editor 마이그레이션 히스토리. 변경 시 MCP `apply_migration` 사용.

## 작업 원칙

- **변경 전 plan**: 큰 변경(라우트 추가, 데이터 모델 변경, 디자인 톤 변경)은 `PLAN/`에 plan을 먼저 작성한다.
- **DESIGN.md 우선**: 디자인 결정은 `DESIGN.md`의 토큰/컴포넌트 명명을 따른다. 신규 시각 요소가 필요하면 가이드를 먼저 업데이트한다.
- **콘텐츠 우선 사고**: 비어 있는 사이트보다 더미라도 채워진 사이트가 낫다. 새 페이지/섹션은 콘텐츠 1~2건과 함께 만든다.
- **단계 존중**: 1단계에서는 Supabase, 인증, 외부 API 도입을 미룬다. 후속 단계로 plan만 남긴다.

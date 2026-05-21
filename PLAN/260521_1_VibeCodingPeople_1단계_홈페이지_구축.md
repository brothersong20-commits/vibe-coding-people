# Vibe Coding People 홈페이지 — 1단계 구축 계획

> **승인 후 실행 순서**: ① 프로젝트 루트에 `PLAN/` 폴더 생성 및 이 plan 파일을 `PLAN/260521_VibeCodingPeople_1단계_홈페이지_구축.md`로 저장 → ② `CLAUDE.md` 생성(plan 저장 규칙 + 언어 규칙 + 디자인 가이드 포인터) → ③ 아래 본문의 1단계 구현 진행.

## Context

"Vibe Coding People"은 바이브 코딩으로 사이드 프로젝트를 함께 진행하는 모임이다. 이 홈페이지는 모임의 정체성을 외부에 보여주고, 활동(공지·일정)을 공유하며, 멤버들의 결과물(프로젝트)을 전시하는 허브 역할을 한다. 추후 공모전 정보·AI/바이브코딩 인사이트·꿀팁 공유 기능과 Google Auth 기반 멤버 로그인, Supabase 기반 DB 관리를 단계적으로 도입할 예정이지만, 1단계에서는 **로컬에서 동작하는 정적 홈페이지의 골격**을 완성하는 것을 목표로 한다.

DESIGN.md(Cursor 마케팅 사이트 톤)가 이미 존재하므로 디자인 톤은 확정된 상태에서 시작한다.

## 결정사항 요약

| 항목 | 결정 |
| --- | --- |
| 1단계 범위 | 공지 + 일정 + 프로젝트 전시 (인증·공모전·AI 인사이트·꿀팁은 후속 단계) |
| 단계 구분 | 1단계: 로컬 개발 / 2단계: Git + Vercel 배포 / 추후: Supabase + Google Auth |
| 페이지 구조 | 멀티 라우트 — `/`, `/notices`, `/schedule`, `/projects`, `/projects/[slug]`, `/about` |
| 디자인 | DESIGN.md(Cursor 스타일) 그대로 적용. 웜 크림 캔버스 + 오렌지 액센트 절제 + 매거진 보이스(400) + JetBrains Mono + 헤어라인 깊이 |
| 콘텐츠 관리 | 1단계는 저장소 내 MDX/JSON. 추후 Supabase로 이관 가능한 데이터 구조로 설계 |
| 프로젝트 전시 | 카드(썸네일·제목·1줄 설명·태그·멤버) + MDX 상세 페이지 |
| 일정 | 1단계 리스트형 타임라인. 데이터는 캘린더 호환 구조(start/end·title·location·description·status) — 2~3단계에서 캘린더 뷰 추가 |
| About | 모임 소개 + 운영자 카드 + 가입 안내(외부 채널 링크) + 멤버 그리드 슬롯(비움) |

## 1단계 페이지 사양

### `/` (랜딩)
- **Hero band** (`hero-band`): h1 "Vibe Coding People" (`display-mega` 72/400/-2.16px), 1줄 서브카피("바이브 코딩으로 함께 만드는 사이드 프로젝트 모임"), CTA 2개 — `button-download` 톤의 ink-on-canvas "모임 참여하기" + `button-tertiary-text` "프로젝트 둘러보기".
- **About 요약 섹션**: `display-lg` 헤딩 + 2~3줄 소개 + 운영자 1줄.
- **다가오는 일정 미리보기**: 상위 3개 일정 카드 (date·title·location).
- **최근 공지 미리보기**: 상위 3개 공지 (date·title).
- **프로젝트 하이라이트**: 상위 3개 프로젝트 카드 그리드 (`feature-card` 베이스).
- **CTA band** (`cta-band`): "함께 바이브 코딩하실 분?" + 외부 채널 링크.
- 80px 섹션 리듬, 1px 헤어라인 디바이더.

### `/notices`
- 제목 + 날짜 + 본문 요약을 행으로 보여주는 리스트.
- 카테고리 뱃지(`badge-pill`)로 태깅(예: 공지/이벤트/회고).
- 상세 페이지는 1단계에서는 만들지 않음 — 본문이 짧으면 리스트에서 펼침/접힘으로 표시하거나, MDX 본문을 리스트 카드 안에 인라인 렌더링.

### `/schedule`
- 두 섹션: "다가오는 일정" + "지난 일정".
- 각 항목: 날짜(좌측 큰 숫자) + 제목(`title-md`) + 장소/형식 + 한 줄 설명 + 상태 뱃지(예정/진행중/완료).
- 데이터 필드: `start`, `end`, `title`, `location`, `description`, `status`, `tags` — 추후 캘린더 뷰에 그대로 사용 가능.

### `/projects`
- 카드 그리드(데스크톱 3-up, 태블릿 2-up, 모바일 1-up).
- 카드 (`feature-card` 베이스): 16:9 썸네일 + 제목(`title-md`) + 1줄 설명 + 태그 뱃지들 + 멤버 이니셜/이름 텍스트.
- 카드 클릭 시 `/projects/[slug]` 이동.

### `/projects/[slug]`
- 헤더: 제목 + 태그 + 멤버 + 외부 링크(GitHub / Live Demo).
- 본문: MDX (긴 설명, 인사이트, 스크린샷 갤러리, 코드 블록 — JetBrains Mono `code-block`).
- 푸터: 다른 프로젝트 추천 2~3개.

### `/about`
- 모임 미션/지향점.
- 운영자 카드 (이름 + 한줄 + 링크).
- "함께하기" 가입 안내 — 외부 채널(디스코드/카카오톡 오픈채팅 등) 링크. **외부 채널 종류는 열린 질문으로 남김(아래 참조)**.
- 멤버 카드 그리드 슬롯: 빈 상태에서는 "곧 채워질 자리입니다" 플레이스홀더.

## 디자인 적용

- DESIGN.md의 토큰을 Tailwind 테마로 1:1 매핑(`canvas`, `ink`, `body`, `muted`, `primary`, `hairline`, …).
- 한글 폰트는 **Pretendard Variable**을 Inter(영문 fallback) 자리에 추가. 즉, `font-family: "Pretendard Variable", "Inter", system-ui, …`. 매거진 보이스를 위해 display 텍스트는 weight 400 유지, letter-spacing 마이너스 적용.
- 코드 표시는 **JetBrains Mono** 유지(라이선스 무료).
- 컴포넌트는 DESIGN.md의 명명(`hero-band`, `feature-card`, `button-primary`, `button-download`, `cta-band`, `badge-pill`, `code-block`, `top-nav`, `footer`)을 그대로 채택.
- **AI timeline 파스텔 5색은 1단계에서 사용하지 않는다** (제품 내 AI 액션 시각화 전용 토큰이므로 — DESIGN.md "Don'ts" 준수).
- 다크 모드 없음(가이드 미정). 1단계 보류.

## 기술 스택

- **Next.js (App Router)** — 멀티 라우트 + Server Components + MDX 친화.
- **TypeScript**.
- **Tailwind CSS** — DESIGN.md 토큰을 `tailwind.config` 또는 `@theme`로 매핑.
- **shadcn/ui** — 베이스 컴포넌트(Button, Card, Badge) 가져와 DESIGN.md 토큰으로 스타일 오버라이드.
- **MDX**: 후보는 `next-mdx-remote` 또는 `@next/mdx` 또는 `fumadocs-mdx`. **추천은 `@next/mdx` + `gray-matter`** (의존성 최소, App Router 호환 좋음).
- **콘텐츠 파일 위치**:
  - `content/notices/*.mdx` (frontmatter: title, date, category)
  - `content/schedule/*.json` 또는 단일 `content/schedule.json` (필드: start/end/title/location/description/status/tags)
  - `content/projects/*.mdx` (frontmatter: title, slug, summary, tags, members, thumbnail, github, demo, order)
  - `public/projects/*.png` 썸네일
- **이미지**: `next/image` 사용. 1단계는 로컬 이미지로 충분.
- 패키지 매니저: pnpm (Vercel 호환 좋음).

## 추천 디렉토리 구조

```
Vibe-Coding-People/
├─ DESIGN.md
├─ app/
│  ├─ layout.tsx           # 폰트, top-nav, footer, 글로벌 스타일
│  ├─ page.tsx             # 랜딩
│  ├─ notices/page.tsx
│  ├─ schedule/page.tsx
│  ├─ projects/
│  │  ├─ page.tsx
│  │  └─ [slug]/page.tsx
│  └─ about/page.tsx
├─ components/
│  ├─ ui/                  # shadcn/ui 베이스
│  ├─ brand/               # top-nav, footer, hero-band, cta-band
│  ├─ cards/               # feature-card, notice-row, schedule-item
│  └─ tokens.ts            # DESIGN.md 토큰 상수
├─ content/
│  ├─ notices/*.mdx
│  ├─ schedule.json
│  └─ projects/*.mdx
├─ lib/
│  └─ content.ts           # MDX/JSON 읽기 유틸 (getNotices, getSchedule, getProjects)
├─ public/
│  ├─ fonts/               # JetBrains Mono, Pretendard (셀프 호스팅 시)
│  └─ projects/            # 프로젝트 썸네일
├─ tailwind.config.ts
├─ package.json
└─ tsconfig.json
```

## 프로젝트 메타 파일 (1단계 시작 직전 생성)

### `PLAN/` 폴더 규칙
- 위치: 프로젝트 루트 `Vibe-Coding-People/PLAN/`.
- 파일명 형식: `YYMMDD_{Plan내용}.md` (오늘 = 260521).
- 같은 날짜에 여러 plan이 있으면 `YYMMDD_1_…`, `YYMMDD_2_…`로 일련번호.
- 예: `PLAN/260521_VibeCodingPeople_1단계_홈페이지_구축.md`, `PLAN/260603_1_프로젝트_상세_페이지_개선.md`.

### `CLAUDE.md` (프로젝트 루트)
다음 항목 포함:
- 프로젝트 개요(한 문단).
- **Plan 저장 규칙** — 위 `PLAN/` 폴더 규칙을 그대로 명시.
- **언어 규칙** — 모든 문서/주석/커밋 메시지는 한국어, 변수명/함수명은 영어.
- **디자인 가이드 포인터** — `DESIGN.md` 우선 적용, Cursor 마케팅 톤.
- **단계 로드맵 요약** — 1단계 로컬 → 2단계 Git+Vercel → 3단계 콘텐츠 확장 → 4단계 Supabase+Google Auth.
- **콘텐츠 추가 가이드** — 공지/일정/프로젝트의 frontmatter 스키마 한 줄 요약.

## 단계 로드맵

| 단계 | 산출물 |
| --- | --- |
| **1단계 (로컬)** | 위 5개 라우트 + DESIGN.md 적용 + 더미 콘텐츠 2~3건씩 + 로컬 dev 서버에서 정상 동작 |
| **2단계** | Git 저장소 초기화 + GitHub 푸시 + Vercel 연결 + 도메인 연결(선택) + 실제 콘텐츠 채움 |
| **3단계** | `/contests` (공모전 정보) + `/insights` (AI·바이브코딩 정보·꿀팁) 라우트 추가. 캘린더 그리드 뷰 옵션 추가 |
| **4단계** | Supabase 도입 — 콘텐츠를 MDX/JSON에서 DB로 이관. Google Auth로 멤버 로그인. 멤버가 직접 프로젝트/공지 등록할 어드민 폼 |

## 1단계 완료 기준 (Definition of Done)

- 5개 라우트(`/`, `/notices`, `/schedule`, `/projects`, `/about`) + `/projects/[slug]` 1개 이상이 로컬 `pnpm dev`로 정상 렌더링.
- DESIGN.md의 컬러·타이포·간격·radius·헤어라인이 시각적으로 일치.
- 더미 콘텐츠: 공지 3건, 일정 3건(예정 2+지난 1), 프로젝트 2건(MDX 상세 포함).
- 데스크톱·태블릿·모바일 3개 브레이크포인트에서 레이아웃 무너지지 않음.
- Lighthouse(로컬) 접근성 90+, 성능 90+.

## 검증 방법

1. `pnpm dev` 후 `http://localhost:3000` 접속 → 5개 라우트 수동 클릭 확인.
2. 브라우저 DevTools로 BP별(375 / 768 / 1280) 레이아웃 확인.
3. DESIGN.md의 컬러 토큰(#f7f7f4 캔버스, #26251e 잉크, #f54e00 액센트)을 DevTools로 검증.
4. 더미 MDX/JSON을 새로 1건 추가했을 때 자동 반영되는지 확인(콘텐츠 추가 워크플로 검증).
5. Lighthouse 로컬 실행 — 점수 확인.

## 남은 열린 질문 (1단계 진행 중에 결정 가능)

1. **가입 안내 외부 채널** — 디스코드 / 카카오톡 오픈채팅 / 이메일 / 추후 결정. About 페이지의 가입 CTA가 가리킬 곳.
2. **운영자 프로필 정보** — About 페이지에 들어갈 본인 한줄/링크.
3. **랜딩 hero 서브카피의 정확한 문장**.
4. **프로젝트 더미 콘텐츠 2건** — 실제 본인의 사이드 프로젝트가 있다면 그걸로, 없다면 가상 예시.
5. **로고/워드마크** — DESIGN.md는 텍스트 워드마크 톤. 별도 SVG 로고가 필요한지.

위 항목들은 모두 1단계 구현 중 콘텐츠 채우는 시점에 결정해도 무방.

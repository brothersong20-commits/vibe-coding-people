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
| **3단계 (확장)** | 거의 완료 | 공모전 상세 페이지 `/contests/[slug]` ✅ + favicon ✅ + `/schedule` 월간 캘린더 그리드 뷰 ✅ + `/insights` 라우트(리스트 + 상세 MDX) ✅ / 남은 작업: 실제 채널 링크 |
| **4단계 (백엔드)** | 진행 예정 | Supabase 도입 (MDX → DB 이관) + Google Auth + 멤버 어드민 폼 |

## 기술 스택 (예정)

- Next.js (App Router) + TypeScript
- Tailwind CSS (DESIGN.md 토큰 매핑)
- shadcn/ui (베이스 컴포넌트, DESIGN.md 톤으로 오버라이드)
- `@next/mdx` + `gray-matter` (MDX 콘텐츠)
- 패키지 매니저: **pnpm**

## 콘텐츠 추가 가이드

1단계에서 콘텐츠는 저장소 내 파일로 관리한다.

- **공지** — `content/notices.ts` (단일 배열)
  - 각 항목 필드: `id`, `title`, `date`(YYYY-MM-DD), `category`(공지/이벤트/회고), `summary`
- **일정** — `content/schedule.ts` (단일 배열)
  - 각 항목 필드: `id`, `start`, `end`, `title`, `location`, `description`, `status`(예정/진행중/완료), `tags`
  - 캘린더 호환 구조 — 추후 캘린더 뷰 도입 시 그대로 사용.
- **프로젝트** — `content/projects/*.mdx`
  - frontmatter: `title`, `slug`, `summary`(1줄), `tags`(배열), `members`(배열), `thumbnail`(public 경로), `github`(URL, 선택), `demo`(URL, 선택), `order`(숫자)
  - 본문: MDX (긴 설명, 스크린샷, 코드 블록 등)
  - 썸네일은 `public/projects/{slug}.png`.
- **공모전** — `content/contests.ts` (단일 배열, 인덱스/메타) + `content/contests/{id}.mdx` (모임 관점 본문)
  - 각 항목 필드: `id`, `title`, `host`(주최), `organizer`(주관, 선택), `startDate`(YYYY-MM-DD), `endDate`(YYYY-MM-DD), `prize`(시상 요약), `fields`(분야 배열), `eligibility`(응모 자격 한 줄), `url`(공식 URL), `status`(모집중/예정/마감), `tags`, `summary`(1줄 요약, 선택), `teams`(도전 팀 배열)
  - `teams[]` 항목 필드: `name`, `members`(배열), `status`(모집중/확정/출품완료), `note`(한 줄, 선택), `githubUrl`(선택), `demoUrl`(선택). 모집 시작 전이면 `teams: []`로 둔다.
  - 새 공모전 추가 시 같은 `id`로 `content/contests/{id}.mdx`를 함께 만들고, `app/contests/[slug]/page.tsx`의 `contestBodyMap`에 매핑을 추가한다(프로젝트 패턴과 동일).
- **인사이트** — `content/insights.ts` (단일 배열, 메타) + `content/insights/{slug}.mdx` (본문)
  - 각 항목 필드: `id`, `slug`(라우트, 1단계에선 `id`와 동일), `title`, `date`(YYYY-MM-DD), `category`("AI 코딩"/"도구"/"워크플로우"/"회고"), `summary`(1줄), `tags`(배열), `author`, `readTime`(분, 수동 입력)
  - 새 인사이트 추가 시 같은 `slug`로 `content/insights/{slug}.mdx`를 함께 만들고, `app/insights/[slug]/page.tsx`의 `insightBodyMap`에 import + 키를 추가한다.
  - 카테고리 enum을 늘릴 때는 `components/cards/insight-card.tsx`와 `app/insights/[slug]/page.tsx`의 `categoryTone` 매핑을 같이 갱신한다 (`Record<InsightCategory, string>` 타입이 누락을 잡아준다).

콘텐츠를 새로 추가할 때는 위 스키마를 그대로 따른다. 새 필드가 필요하면 plan을 먼저 작성하고 진행한다.

## 디렉토리 구조 (1단계 목표)

```
Vibe-Coding-People/
├─ CLAUDE.md
├─ DESIGN.md
├─ PLAN/
│  └─ YYMMDD_*.md
├─ app/
│  ├─ layout.tsx
│  ├─ page.tsx
│  ├─ notices/page.tsx
│  ├─ schedule/page.tsx
│  ├─ projects/
│  │  ├─ page.tsx
│  │  └─ [slug]/page.tsx
│  ├─ contests/
│  │  ├─ page.tsx
│  │  └─ [slug]/page.tsx
│  ├─ insights/
│  │  ├─ page.tsx
│  │  └─ [slug]/page.tsx
│  └─ about/page.tsx
├─ components/
│  ├─ ui/         # shadcn/ui 베이스
│  ├─ brand/      # top-nav, footer, hero-band, cta-band
│  └─ cards/      # feature-card, notice-row, schedule-item
├─ content/
│  ├─ notices.ts
│  ├─ schedule.ts
│  ├─ contests.ts            # 메타/인덱스
│  ├─ contests/*.mdx          # 모임 관점 본문
│  ├─ insights.ts             # 메타/인덱스
│  ├─ insights/*.mdx          # 인사이트 본문
│  └─ projects/*.mdx (+ projects.ts 메타)
├─ lib/
│  └─ content.ts  # getNotices, getSchedule, getProjects
├─ public/
│  ├─ fonts/
│  └─ projects/
├─ tailwind.config.ts
├─ package.json
└─ tsconfig.json
```

## 작업 원칙

- **변경 전 plan**: 큰 변경(라우트 추가, 데이터 모델 변경, 디자인 톤 변경)은 `PLAN/`에 plan을 먼저 작성한다.
- **DESIGN.md 우선**: 디자인 결정은 `DESIGN.md`의 토큰/컴포넌트 명명을 따른다. 신규 시각 요소가 필요하면 가이드를 먼저 업데이트한다.
- **콘텐츠 우선 사고**: 비어 있는 사이트보다 더미라도 채워진 사이트가 낫다. 새 페이지/섹션은 콘텐츠 1~2건과 함께 만든다.
- **단계 존중**: 1단계에서는 Supabase, 인증, 외부 API 도입을 미룬다. 후속 단계로 plan만 남긴다.

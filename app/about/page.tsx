import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "소개 — Vibe Coding People",
  description: "Vibe Coding People이 무엇이고 어떻게 참여할 수 있는지.",
};

const PRINCIPLES: { title: string; description: string }[] = [
  {
    title: "결과물 우선",
    description:
      "이론보다 만든 것이 우선. 작은 데모라도 매달 보여줄 수 있는 흐름을 만듭니다.",
  },
  {
    title: "강요 없는 모임",
    description:
      "참여 강제 없음. 빌드 세션은 들르고 싶을 때 들르고, 진행 상황은 자유롭게 공유합니다.",
  },
  {
    title: "도구에 열려 있음",
    description:
      "Cursor, Claude Code, Codex, 그 외 무엇이든. 좋은 도구를 함께 써보고 배웁니다.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section
        className="border-b border-[var(--color-hairline)]"
        style={{ paddingTop: 80, paddingBottom: 64 }}
      >
        <div className="mx-auto max-w-[960px] px-6">
          <div className="caption-uppercase mb-3 text-[var(--color-muted)]">
            About
          </div>
          <h1 className="display-lg mb-6">
            바이브 코딩하는 사람들이 함께 만드는 모임.
          </h1>
          <p className="body-tracked max-w-[640px] text-[var(--color-body)]">
            Vibe Coding People은 AI 코딩 도구로 빠르게 만들고, 매달 결과물을
            나누는 사이드 프로젝트 모임입니다. 우리는 거창한 계획보다 작은
            데모를 더 좋아합니다.
          </p>
        </div>
      </section>

      <section
        className="border-b border-[var(--color-hairline)]"
        style={{ paddingTop: 64, paddingBottom: 64 }}
      >
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="display-md mb-10">우리가 지키는 것</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {PRINCIPLES.map((p) => (
              <div
                key={p.title}
                className="rounded-[12px] border border-[var(--color-hairline)] bg-[var(--color-surface-card)] p-6"
              >
                <h3 className="title-md mb-2">{p.title}</h3>
                <p className="body-md text-[var(--color-body)]">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="border-b border-[var(--color-hairline)]"
        style={{ paddingTop: 64, paddingBottom: 64 }}
      >
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="display-md mb-10">팀장 · 운영진</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-[12px] border border-[var(--color-hairline)] bg-[var(--color-surface-card)] p-6">
              <div
                className="mb-4 size-12 rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-primary) 0%, var(--color-timeline-thinking) 100%)",
                }}
                aria-hidden
              />
              <Badge variant="soft" className="mb-3">
                팀장
              </Badge>
              <div className="title-md mb-1">제이쏭</div>
              <p className="body-sm text-[var(--color-muted)]">
                바이브 코더 · 모임을 시작한 사람. 첫 프로젝트는 "오늘 뭐 먹지?".
              </p>
            </article>

            <article className="rounded-[12px] border border-dashed border-[var(--color-hairline-strong)] bg-[var(--color-canvas-soft)] p-6">
              <Badge variant="soft" className="mb-3">
                Coming soon
              </Badge>
              <div className="title-md mb-1 text-[var(--color-muted)]">
                운영진 합류 자리
              </div>
              <p className="body-sm text-[var(--color-muted)]">
                같이 운영하실 분을 모집합니다. 모임 운영·기록·디자인 어느 쪽이든.
              </p>
            </article>

            <article className="rounded-[12px] border border-dashed border-[var(--color-hairline-strong)] bg-[var(--color-canvas-soft)] p-6">
              <Badge variant="soft" className="mb-3">
                Coming soon
              </Badge>
              <div className="title-md mb-1 text-[var(--color-muted)]">
                곧 채워질 자리입니다
              </div>
              <p className="body-sm text-[var(--color-muted)]">
                모임이 채워지면 멤버 카드가 여기에 추가됩니다.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        id="join"
        className="border-b border-[var(--color-hairline)]"
        style={{ paddingTop: 64, paddingBottom: 96 }}
      >
        <div className="mx-auto max-w-[960px] px-6">
          <h2 className="display-md mb-4">함께하기</h2>
          <p className="body-tracked mb-8 max-w-[640px] text-[var(--color-body)]">
            관심 있는 분은 아래 채널로 연락 주세요. 첫 모임 일정과 가벼운 자기소개
            한 줄을 안내해 드립니다. (외부 채널 정보는 곧 업데이트됩니다.)
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button href="#" variant="primary">
              Discord 참여 (예정)
            </Button>
            <Button href="#" variant="secondary">
              오픈채팅 (예정)
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

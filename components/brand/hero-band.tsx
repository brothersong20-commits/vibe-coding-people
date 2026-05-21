import { Button } from "@/components/ui/button";

export function HeroBand() {
  return (
    <section
      className="border-b border-[var(--color-hairline)] bg-[var(--color-canvas)]"
      style={{ paddingTop: 80, paddingBottom: 80 }}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <h1 className="display-mega max-w-[860px]">
          Vibe Coding{" "}
          <span style={{ color: "var(--color-primary)" }}>People</span>
          <br />
          바이브 코딩으로 함께 만드는
          <br />
          사이드 프로젝트 모임.
        </h1>

        <p className="body-tracked mt-6 max-w-[640px] text-[var(--color-body)]">
          AI 코딩 도구로 빠르게 만들고, 매달 보여주고, 서로의 흐름을 공유합니다.
          공지·일정·결과물을 한곳에서 확인하세요.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button href="/about#join" variant="download">
            모임 참여하기
          </Button>
          <Button href="/projects" variant="tertiary">
            프로젝트 둘러보기 →
          </Button>
        </div>
      </div>
    </section>
  );
}

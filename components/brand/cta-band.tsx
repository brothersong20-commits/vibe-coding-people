import { Button } from "@/components/ui/button";

export function CtaBand() {
  return (
    <section
      className="border-t border-[var(--color-hairline)] bg-[var(--color-canvas)]"
      style={{ paddingTop: 96, paddingBottom: 96 }}
    >
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <h2 className="display-lg mx-auto max-w-[640px]">
          함께 바이브 코딩 하실 분?
        </h2>
        <p className="body-md mt-4 text-[var(--color-body)]">
          좋아하는 도구로, 만들고 싶은 걸 만들어보세요. 모임이 거들어 드립니다.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/about#join" variant="primary">
            참여 안내 보기
          </Button>
        </div>
      </div>
    </section>
  );
}

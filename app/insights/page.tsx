import { InsightCard } from "@/components/cards/insight-card";
import { getOrderedInsights } from "@/lib/content";

export const metadata = {
  title: "인사이트 — Vibe Coding People",
  description:
    "바이브 코딩으로 사이드 프로젝트를 만들며 모은 AI 코딩 툴, 워크플로우, 회고 인사이트.",
};

export const revalidate = 60;

export default async function InsightsPage() {
  const items = await getOrderedInsights();

  return (
    <section
      className="border-b border-[var(--color-hairline)]"
      style={{ paddingTop: 80, paddingBottom: 80 }}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="caption-uppercase mb-3 text-[var(--color-muted)]">
          Insights
        </div>
        <h1 className="display-lg mb-3">인사이트</h1>
        <p className="body-md mb-10 max-w-[640px] text-[var(--color-muted)]">
          AI 코딩 툴 사용기, 워크플로우 회고, 도구 비교. 모임에서 굴려보며 남긴
          짧은 글을 모아둡니다.
        </p>

        {items.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((insight) => (
              <InsightCard key={insight.slug} insight={insight} />
            ))}
          </div>
        ) : (
          <div className="rounded-[var(--radius-lg)] border border-dashed border-[var(--color-hairline-strong)] bg-[var(--color-canvas-soft)] px-6 py-12 text-center">
            <p className="body-md text-[var(--color-muted)]">
              아직 등록된 인사이트가 없습니다.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

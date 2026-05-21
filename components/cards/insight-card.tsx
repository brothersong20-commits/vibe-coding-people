import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { Insight, InsightCategory } from "@/lib/types";
import { formatKoreanDate } from "@/lib/date";

// 카테고리 → 카드 상단 뱃지 톤. 신규 카테고리 추가 시 여기와
// app/insights/[slug]/page.tsx 의 동일 매핑을 함께 갱신해야 한다.
const categoryTone: Record<InsightCategory, string> = {
  "AI 코딩":
    "bg-[var(--color-primary)] text-[var(--color-on-primary)]",
  도구: "bg-[var(--color-semantic-success)] text-[var(--color-on-primary)]",
  워크플로우:
    "bg-[var(--color-timeline-edit)] text-[var(--color-ink)]",
  회고: "bg-[var(--color-surface-strong)] text-[var(--color-body)]",
};

export function InsightCard({ insight }: { insight: Insight }) {
  return (
    <Link
      href={`/insights/${insight.slug}`}
      className="group flex h-full flex-col rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-surface-card)] p-6 transition-colors hover:border-[var(--color-hairline-strong)]"
    >
      {/* 상단: 카테고리 뱃지 + 날짜 · readTime */}
      <div className="mb-4 flex items-center justify-between gap-3">
        <span
          className={`inline-flex items-center rounded-full px-[10px] py-[4px] caption-uppercase ${categoryTone[insight.category]}`}
        >
          {insight.category}
        </span>
        <div className="code text-[var(--color-muted)]">
          {formatKoreanDate(insight.date)} · {insight.readTime}분
        </div>
      </div>

      {/* 본문: 제목 + 요약 */}
      <h3 className="title-md mb-2 group-hover:underline">{insight.title}</h3>
      <p className="body-md mb-5 flex-1 text-[var(--color-body)]">
        {insight.summary}
      </p>

      {/* 하단: author + tags (최대 2개) */}
      <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-[var(--color-hairline-soft)] pt-4">
        <div className="code text-[var(--color-muted)]">by {insight.author}</div>
        <div className="flex flex-wrap gap-2">
          {insight.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="soft">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </Link>
  );
}

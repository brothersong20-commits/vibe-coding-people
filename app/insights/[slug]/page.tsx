import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Badge } from "@/components/ui/badge";
import { InsightCard } from "@/components/cards/insight-card";
import { getInsightBySlug, getOrderedInsights } from "@/lib/content";
import type { InsightCategory } from "@/lib/types";
import { formatKoreanDate } from "@/lib/date";
import { markdownComponents } from "@/lib/markdown-components";

export const revalidate = 60;

// 카드와 동일한 카테고리 톤. insight-card.tsx 와 함께 갱신해야 한다.
const categoryTone: Record<InsightCategory, string> = {
  "AI 코딩":
    "bg-[var(--color-primary)] text-[var(--color-on-primary)]",
  도구: "bg-[var(--color-semantic-success)] text-[var(--color-on-primary)]",
  워크플로우:
    "bg-[var(--color-timeline-edit)] text-[var(--color-ink)]",
  회고: "bg-[var(--color-surface-strong)] text-[var(--color-body)]",
};

export async function generateStaticParams() {
  const all = await getOrderedInsights();
  return all.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const insight = await getInsightBySlug(slug);
  if (!insight) return {};
  return {
    title: `${insight.title} — Vibe Coding People`,
    description: insight.summary,
  };
}

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const insight = await getInsightBySlug(slug);
  if (!insight) notFound();

  const allInsights = await getOrderedInsights();
  const others = allInsights
    .filter((i) => i.slug !== insight.slug)
    .slice(0, 3);

  return (
    <>
      {/* ===== Header ===== */}
      <section
        className="border-b border-[var(--color-hairline)]"
        style={{ paddingTop: 80, paddingBottom: 48 }}
      >
        <div className="mx-auto max-w-[760px] px-6">
          <Link
            href="/insights"
            className="body-sm mb-6 inline-block text-[var(--color-muted)] hover:text-[var(--color-ink)]"
          >
            ← 인사이트 목록
          </Link>

          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span
              className={`inline-flex items-center rounded-full px-[10px] py-[4px] caption-uppercase ${categoryTone[insight.category]}`}
            >
              {insight.category}
            </span>
            <div className="code text-[var(--color-muted)]">
              {formatKoreanDate(insight.date)} · {insight.readTime}분 읽기
            </div>
          </div>

          <h1 className="display-lg mb-4">{insight.title}</h1>
          <p className="body-tracked mb-6 max-w-[720px] text-[var(--color-body)]">
            {insight.summary}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <div className="code text-[var(--color-muted)]">
              by {insight.author}
            </div>
            <div className="flex flex-wrap gap-2">
              {insight.tags.map((tag) => (
                <Badge key={tag} variant="soft">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== 본문 (markdown) ===== */}
      <section
        className="border-b border-[var(--color-hairline)]"
        style={{ paddingTop: 64, paddingBottom: 80 }}
      >
        <div className="mx-auto max-w-[760px] px-6">
          {insight.body ? (
            <div className="prose-vcp">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={markdownComponents}
              >
                {insight.body}
              </ReactMarkdown>
            </div>
          ) : (
            <p className="body-md text-[var(--color-muted)]">
              본문이 아직 작성되지 않았습니다.
            </p>
          )}
        </div>
      </section>

      {/* ===== 다른 인사이트 ===== */}
      {others.length > 0 && (
        <section
          className="border-b border-[var(--color-hairline)]"
          style={{ paddingTop: 64, paddingBottom: 80 }}
        >
          <div className="mx-auto max-w-[1200px] px-6">
            <h2 className="display-md mb-8">다른 인사이트</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {others.map((i) => (
                <InsightCard key={i.slug} insight={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

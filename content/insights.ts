// 인사이트 카테고리 — enum 고정. 신규 카테고리 추가 시
// components/cards/insight-card.tsx 와 app/insights/[slug]/page.tsx 의
// categoryTone 매핑(Record<InsightCategory, string>)을 함께 갱신해야 한다.
export type InsightCategory = "AI 코딩" | "도구" | "워크플로우" | "회고";

export type Insight = {
  // 1단계에서는 id 와 slug 를 같은 값으로 둔다.
  // 4단계 Supabase 이관 시 id 는 UUID 로 분리하고 라우트에는 slug 만 노출한다.
  id: string;
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  category: InsightCategory;
  summary: string; // 1줄 — 카드 본문 + meta description 으로 함께 쓰인다.
  tags: string[];
  author: string;
  readTime: number; // 분 단위. 1단계는 수동 입력.
};

export const insights: Insight[] = [
  {
    id: "i-2026-04-01-claude-code-workflow",
    slug: "i-2026-04-01-claude-code-workflow",
    title: "Claude Code로 사이드 프로젝트 워크플로우 정착하기",
    date: "2026-04-01",
    category: "AI 코딩",
    summary:
      "plan mode → 작은 PR → 자동 verify 루프를 사이드 프로젝트에 정착시키며 배운 점.",
    tags: ["Claude Code", "Workflow", "Plan Mode"],
    author: "제이쏭",
    readTime: 5,
  },
  {
    id: "i-2026-04-22-cursor-vs-claude",
    slug: "i-2026-04-22-cursor-vs-claude",
    title: "Cursor와 Claude Code, 어떻게 같이 쓰면 좋을까",
    date: "2026-04-22",
    category: "도구",
    summary:
      "IDE 안의 Cursor와 터미널의 Claude Code를 한 프로젝트에서 충돌 없이 굴리는 방법.",
    tags: ["Cursor", "Claude Code", "Tooling"],
    author: "제이쏭",
    readTime: 6,
  },
  {
    id: "i-2026-05-10-vibe-coding-retrospective",
    slug: "i-2026-05-10-vibe-coding-retrospective",
    title: "바이브 코딩 한 달, 무엇이 바뀌었나",
    date: "2026-05-10",
    category: "회고",
    summary:
      "30일간 AI와 페어로 사이드 프로젝트를 만들면서 바뀐 습관·결과·후회들.",
    tags: ["Retrospective", "Side Project"],
    author: "제이쏭",
    readTime: 4,
  },
];

// 최신순 정렬. 동일 날짜는 id 역순(생성 순)으로 안정 정렬한다.
export function getOrderedInsights(): Insight[] {
  return [...insights].sort((a, b) => {
    if (a.date === b.date) return a.id < b.id ? 1 : -1;
    return a.date < b.date ? 1 : -1;
  });
}

export function getInsightBySlug(slug: string): Insight | undefined {
  return insights.find((i) => i.slug === slug);
}

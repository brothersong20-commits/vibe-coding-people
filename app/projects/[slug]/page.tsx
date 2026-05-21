import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/cards/project-card";
import { getOrderedProjects, getProjectBySlug } from "@/content/projects";
import VcpHomepageBody from "@/content/projects/vcp-homepage.mdx";
import AiRecipeCoachBody from "@/content/projects/ai-recipe-coach.mdx";
import WhatToEatTodayBody from "@/content/projects/what-to-eat-today.mdx";
import ClaudeCodeCheatsheetBody from "@/content/projects/claude-code-cheatsheet.mdx";
import VibeSnippetsBody from "@/content/projects/vibe-snippets.mdx";

const projectBodyMap: Record<string, React.ComponentType> = {
  "vcp-homepage": VcpHomepageBody,
  "ai-recipe-coach": AiRecipeCoachBody,
  "what-to-eat-today": WhatToEatTodayBody,
  "claude-code-cheatsheet": ClaudeCodeCheatsheetBody,
  "vibe-snippets": VibeSnippetsBody,
};

export function generateStaticParams() {
  return getOrderedProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Vibe Coding People`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const Body = projectBodyMap[project.slug];
  const others = getOrderedProjects()
    .filter((p) => p.slug !== project.slug)
    .slice(0, 3);

  return (
    <>
      <section
        className="border-b border-[var(--color-hairline)]"
        style={{ paddingTop: 80, paddingBottom: 48 }}
      >
        <div className="mx-auto max-w-[960px] px-6">
          <Link
            href="/projects"
            className="body-sm mb-6 inline-block text-[var(--color-muted)] hover:text-[var(--color-ink)]"
          >
            ← 프로젝트 목록
          </Link>
          <div className="mb-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="soft">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="display-lg mb-4">{project.title}</h1>
          <p className="body-tracked max-w-[720px] text-[var(--color-body)]">
            {project.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="code text-[var(--color-muted)]">
              {project.members.join(" · ")}
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {project.github && (
                <Button href={project.github} variant="secondary">
                  GitHub
                </Button>
              )}
              {project.demo && (
                <Button href={project.demo} variant="primary">
                  Live Demo
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-b border-[var(--color-hairline)]"
        style={{ paddingTop: 64, paddingBottom: 80 }}
      >
        <div className="mx-auto max-w-[760px] px-6">
          <div className="prose-vcp">{Body && <Body />}</div>
        </div>
      </section>

      {others.length > 0 && (
        <section
          className="border-b border-[var(--color-hairline)]"
          style={{ paddingTop: 64, paddingBottom: 80 }}
        >
          <div className="mx-auto max-w-[1200px] px-6">
            <h2 className="display-md mb-8">다른 프로젝트</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {others.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

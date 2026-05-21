import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/cards/project-card";
import { getOrderedProjects, getProjectBySlug } from "@/lib/content";
import { markdownComponents } from "@/lib/markdown-components";

export const revalidate = 60;

export async function generateStaticParams() {
  const all = await getOrderedProjects();
  return all.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
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
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  const allProjects = await getOrderedProjects();
  const others = allProjects
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
          <div className="prose-vcp">
            {project.body ? (
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={markdownComponents}
              >
                {project.body}
              </ReactMarkdown>
            ) : (
              <p className="body-md text-[var(--color-muted)]">
                본문이 아직 작성되지 않았습니다.
              </p>
            )}
          </div>
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

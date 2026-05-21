import { ProjectCard } from "@/components/cards/project-card";
import { getOrderedProjects } from "@/lib/content";

export const metadata = {
  title: "프로젝트 — Vibe Coding People",
  description: "Vibe Coding People 멤버들이 만든 사이드 프로젝트 모음.",
};

export const revalidate = 60;

export default async function ProjectsPage() {
  const items = await getOrderedProjects();

  return (
    <section
      className="border-b border-[var(--color-hairline)]"
      style={{ paddingTop: 80, paddingBottom: 80 }}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="caption-uppercase mb-3 text-[var(--color-muted)]">
          Projects
        </div>
        <h1 className="display-lg mb-3">프로젝트</h1>
        <p className="body-md mb-10 max-w-[640px] text-[var(--color-muted)]">
          모임 멤버들이 바이브 코딩으로 만든 사이드 프로젝트. 카드를 눌러 자세한
          이야기를 보세요.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/lib/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block overflow-hidden rounded-[12px] border border-[var(--color-hairline)] bg-[var(--color-surface-card)] transition-colors hover:border-[var(--color-hairline-strong)]"
    >
      {project.thumbnail ? (
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[var(--color-canvas-soft)]">
          <Image
            src={project.thumbnail}
            alt={`${project.title} 미리보기`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
      ) : (
        <div
          className="aspect-[16/9] w-full bg-[var(--color-canvas-soft)]"
          style={{
            backgroundImage:
              "linear-gradient(135deg, var(--color-canvas-soft) 0%, var(--color-surface-strong) 100%)",
          }}
          aria-hidden
        />
      )}
      <div className="p-6">
        <div className="mb-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="soft">
              {tag}
            </Badge>
          ))}
        </div>
        <h3 className="title-md mb-2 group-hover:underline">{project.title}</h3>
        <p className="body-md mb-4 text-[var(--color-body)]">
          {project.summary}
        </p>
        <div className="code text-[var(--color-muted)]">
          {project.members.join(" · ")}
        </div>
      </div>
    </Link>
  );
}

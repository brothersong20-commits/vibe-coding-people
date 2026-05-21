import Link from "next/link";
import { HeroBand } from "@/components/brand/hero-band";
import { CtaBand } from "@/components/brand/cta-band";
import { NoticeRow } from "@/components/cards/notice-row";
import { ProjectCard } from "@/components/cards/project-card";
import { ScheduleItemRow } from "@/components/cards/schedule-item";
import { ContestCard } from "@/components/cards/contest-card";
import {
  getNotices,
  getOpenContests,
  getOrderedProjects,
  getSchedule,
} from "@/lib/content";

export const revalidate = 60;

export default async function HomePage() {
  const [notices, schedule, projectsAll, contestsOpen] = await Promise.all([
    getNotices(),
    getSchedule(),
    getOrderedProjects(),
    getOpenContests(),
  ]);

  const upcomingSchedule = schedule
    .filter((s) => s.status === "예정")
    .slice(0, 3);
  const recentNotices = notices.slice(0, 3);
  const featuredProjects = projectsAll.slice(0, 3);
  const openContests = contestsOpen.slice(0, 2);

  return (
    <>
      <HeroBand />

      <Section title="이번 달 일정" linkHref="/schedule" linkLabel="전체 일정 보기">
        {upcomingSchedule.length > 0 ? (
          <div>
            {upcomingSchedule.map((item) => (
              <ScheduleItemRow key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <EmptyState text="아직 등록된 일정이 없습니다." />
        )}
      </Section>

      <Section title="최근 공지" linkHref="/notices" linkLabel="공지 모두 보기">
        {recentNotices.length > 0 ? (
          <div>
            {recentNotices.map((notice) => (
              <NoticeRow key={notice.id} notice={notice} />
            ))}
          </div>
        ) : (
          <EmptyState text="등록된 공지가 없습니다." />
        )}
      </Section>

      <Section
        title="프로젝트 하이라이트"
        linkHref="/projects"
        linkLabel="프로젝트 모두 보기"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <Section
        title="함께 도전할 공모전"
        linkHref="/contests"
        linkLabel="공모전 모두 보기"
      >
        {openContests.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {openContests.map((contest) => (
              <ContestCard key={contest.id} contest={contest} />
            ))}
          </div>
        ) : (
          <EmptyState text="현재 모집 중인 공모전이 없습니다." />
        )}
      </Section>

      <CtaBand />
    </>
  );
}

function Section({
  title,
  linkHref,
  linkLabel,
  children,
}: {
  title: string;
  linkHref?: string;
  linkLabel?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className="border-b border-[var(--color-hairline)]"
      style={{ paddingTop: 80, paddingBottom: 80 }}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-10 flex items-end justify-between gap-4">
          <h2 className="display-lg">{title}</h2>
          {linkHref && linkLabel && (
            <Link
              href={linkHref}
              className="body-sm text-[var(--color-ink)] underline-offset-4 hover:underline"
            >
              {linkLabel} →
            </Link>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

function EmptyState({ text }: { text: string }) {
  return (
    <div
      className="rounded-[12px] border border-dashed border-[var(--color-hairline-strong)] bg-[var(--color-canvas-soft)] px-6 py-12 text-center"
    >
      <p className="body-md text-[var(--color-muted)]">{text}</p>
    </div>
  );
}

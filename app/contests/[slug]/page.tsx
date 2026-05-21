import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ContestCard } from "@/components/cards/contest-card";
import {
  contests,
  getContestById,
  type Contest,
  type ContestStatus,
  type ContestTeam,
  type ContestTeamStatus,
} from "@/content/contests";
import { formatKoreanDate } from "@/lib/date";

import McstAiDataBody from "@/content/contests/c-2026-mcst-ai-data.mdx";
import VercelHackBody from "@/content/contests/c-2026-dummy-vercel-hack.mdx";
import KoreaAiGrantBody from "@/content/contests/c-2026-dummy-koreaai-grant.mdx";

const contestBodyMap: Record<string, React.ComponentType> = {
  "c-2026-mcst-ai-data": McstAiDataBody,
  "c-2026-dummy-vercel-hack": VercelHackBody,
  "c-2026-dummy-koreaai-grant": KoreaAiGrantBody,
};

const statusTone: Record<ContestStatus, string> = {
  모집중: "bg-[var(--color-primary)] text-[var(--color-on-primary)]",
  예정: "bg-[var(--color-semantic-success)] text-[var(--color-on-primary)]",
  마감: "bg-[var(--color-surface-strong)] text-[var(--color-muted)]",
};

const teamStatusTone: Record<ContestTeamStatus, string> = {
  모집중: "bg-[var(--color-primary)] text-[var(--color-on-primary)]",
  확정: "bg-[var(--color-semantic-success)] text-[var(--color-on-primary)]",
  출품완료: "bg-[var(--color-surface-strong)] text-[var(--color-body)]",
};

export function generateStaticParams() {
  return contests.map((c) => ({ slug: c.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const contest = getContestById(slug);
  if (!contest) return {};
  return {
    title: `${contest.title} — Vibe Coding People`,
    description: contest.summary ?? contest.prize,
  };
}

export default async function ContestDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const contest = getContestById(slug);
  if (!contest) notFound();

  const Body = contestBodyMap[contest.id];
  const others = contests
    .filter((c) => c.id !== contest.id && c.status !== "마감")
    .slice(0, 3);

  return (
    <>
      <section
        className="border-b border-[var(--color-hairline)]"
        style={{ paddingTop: 80, paddingBottom: 48 }}
      >
        <div className="mx-auto max-w-[960px] px-6">
          <Link
            href="/contests"
            className="body-sm mb-6 inline-block text-[var(--color-muted)] hover:text-[var(--color-ink)]"
          >
            ← 공모전 목록
          </Link>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span
              className={`inline-flex items-center rounded-full px-[10px] py-[4px] caption-uppercase ${statusTone[contest.status]}`}
            >
              {contest.status}
            </span>
            {contest.tags.map((tag) => (
              <Badge key={tag} variant="soft">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="display-lg mb-4">{contest.title}</h1>

          <div className="body-sm mb-6 text-[var(--color-muted)]">
            주최 {contest.host}
            {contest.organizer ? ` · 주관 ${contest.organizer}` : ""}
          </div>

          {contest.summary && (
            <p className="body-tracked mb-8 max-w-[720px] text-[var(--color-body)]">
              {contest.summary}
            </p>
          )}

          <dl className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field
              label="접수 기간"
              value={`${formatKoreanDate(contest.startDate)} → ${formatKoreanDate(contest.endDate)}`}
            />
            <Field label="시상" value={contest.prize} />
            <Field label="응모 자격" value={contest.eligibility} />
            <Field label="분야" value={contest.fields.join(" · ")} />
          </dl>

          <a
            href={contest.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center rounded-[8px] bg-[var(--color-ink)] px-[18px] text-[14px] font-medium text-[var(--color-canvas)] transition-colors hover:bg-black"
          >
            공식 페이지 보기 ↗
          </a>
        </div>
      </section>

      {Body && (
        <section
          className="border-b border-[var(--color-hairline)]"
          style={{ paddingTop: 64, paddingBottom: 80 }}
        >
          <div className="mx-auto max-w-[760px] px-6">
            <div className="prose-vcp">
              <Body />
            </div>
          </div>
        </section>
      )}

      <section
        className="border-b border-[var(--color-hairline)]"
        style={{ paddingTop: 64, paddingBottom: 80 }}
      >
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="display-md mb-8">도전 중인 팀</h2>
          {contest.teams.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {contest.teams.map((team) => (
                <TeamCard key={team.name} team={team} />
              ))}
            </div>
          ) : (
            <EmptyTeams />
          )}
        </div>
      </section>

      {others.length > 0 && (
        <section
          className="border-b border-[var(--color-hairline)]"
          style={{ paddingTop: 64, paddingBottom: 80 }}
        >
          <div className="mx-auto max-w-[1200px] px-6">
            <h2 className="display-md mb-8">다른 공모전</h2>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {others.map((c) => (
                <ContestCard key={c.id} contest={c} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="caption-uppercase text-[var(--color-muted)]">{label}</dt>
      <dd className="body-md mt-1 text-[var(--color-body)]">{value}</dd>
    </div>
  );
}

function TeamCard({ team }: { team: ContestTeam }) {
  return (
    <article className="rounded-[12px] border border-[var(--color-hairline)] bg-[var(--color-surface-card)] p-6">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span
          className={`inline-flex items-center rounded-full px-[10px] py-[4px] caption-uppercase ${teamStatusTone[team.status]}`}
        >
          {team.status}
        </span>
      </div>
      <h3 className="title-md mb-2">{team.name}</h3>
      <div className="code mb-3 text-[var(--color-muted)]">
        {team.members.join(" · ")}
      </div>
      {team.note && (
        <p className="body-sm mb-4 text-[var(--color-body)]">{team.note}</p>
      )}
      {(team.githubUrl || team.demoUrl) && (
        <div className="flex flex-wrap items-center gap-3">
          {team.githubUrl && (
            <Button href={team.githubUrl} variant="secondary">
              GitHub
            </Button>
          )}
          {team.demoUrl && (
            <Button href={team.demoUrl} variant="primary">
              Demo
            </Button>
          )}
        </div>
      )}
    </article>
  );
}

function EmptyTeams() {
  return (
    <div className="rounded-[12px] border border-dashed border-[var(--color-hairline-strong)] bg-[var(--color-canvas-soft)] px-6 py-12 text-center">
      <p className="body-md mb-6 text-[var(--color-muted)]">
        아직 등록된 도전 팀이 없습니다. 모임 디스코드에서 팀 모집을 시작하세요.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button href="#" variant="primary">
          Discord 참여 (예정)
        </Button>
        <Button href="#" variant="secondary">
          오픈채팅 (예정)
        </Button>
      </div>
    </div>
  );
}

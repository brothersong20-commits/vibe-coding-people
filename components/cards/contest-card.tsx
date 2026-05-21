import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { Contest, ContestStatus } from "@/content/contests";
import { formatKoreanDate } from "@/lib/date";

const statusTone: Record<ContestStatus, string> = {
  모집중: "bg-[var(--color-primary)] text-[var(--color-on-primary)]",
  예정: "bg-[var(--color-semantic-success)] text-[var(--color-on-primary)]",
  마감: "bg-[var(--color-surface-strong)] text-[var(--color-muted)]",
};

export function ContestCard({ contest }: { contest: Contest }) {
  return (
    <Link
      href={`/contests/${contest.id}`}
      className="block rounded-[12px] border border-[var(--color-hairline)] bg-[var(--color-surface-card)] p-6 transition-colors hover:bg-[var(--color-canvas-soft)]"
    >
      <article>
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

        <h3 className="display-sm mb-2" style={{ fontWeight: 400 }}>
          {contest.title}
        </h3>

        <div className="body-sm mb-4 text-[var(--color-muted)]">
          주최 {contest.host}
          {contest.organizer ? ` · 주관 ${contest.organizer}` : ""}
        </div>

        {contest.summary && (
          <p className="body-md mb-5 text-[var(--color-body)]">
            {contest.summary}
          </p>
        )}

        <dl className="mb-1 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Field
            label="접수 기간"
            value={`${formatKoreanDate(contest.startDate)} → ${formatKoreanDate(contest.endDate)}`}
          />
          <Field label="시상" value={contest.prize} />
          <Field label="응모 자격" value={contest.eligibility} />
          <Field label="분야" value={contest.fields.join(" · ")} />
        </dl>
      </article>
    </Link>
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

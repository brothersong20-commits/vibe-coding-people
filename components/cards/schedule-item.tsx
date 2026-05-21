import { Badge } from "@/components/ui/badge";
import type { ScheduleItem as ScheduleItemType } from "@/content/schedule";
import { formatScheduleDate, formatScheduleTimeRange } from "@/lib/date";

const statusTone: Record<ScheduleItemType["status"], string> = {
  예정: "bg-[var(--color-primary)] text-[var(--color-on-primary)]",
  진행중:
    "bg-[var(--color-semantic-success)] text-[var(--color-on-primary)]",
  완료: "bg-[var(--color-surface-strong)] text-[var(--color-muted)]",
};

export function ScheduleItemRow({ item }: { item: ScheduleItemType }) {
  return (
    <article className="border-b border-[var(--color-hairline)] py-6 last:border-b-0">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-8">
        <div className="md:w-[140px] md:shrink-0">
          <div className="display-sm" style={{ fontWeight: 400 }}>
            {formatScheduleDate(item.start)}
          </div>
          <div className="code mt-1 text-[var(--color-muted)]">
            {formatScheduleTimeRange(item.start, item.end)}
          </div>
        </div>
        <div className="flex-1">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span
              className={`inline-flex items-center rounded-full px-[10px] py-[4px] caption-uppercase ${statusTone[item.status]}`}
            >
              {item.status}
            </span>
            {item.tags.map((tag) => (
              <Badge key={tag} variant="soft">
                {tag}
              </Badge>
            ))}
          </div>
          <h3 className="title-md mb-1">{item.title}</h3>
          <div className="body-sm mb-2 text-[var(--color-muted)]">
            {item.location}
          </div>
          <p className="body-md text-[var(--color-body)]">{item.description}</p>
        </div>
      </div>
    </article>
  );
}

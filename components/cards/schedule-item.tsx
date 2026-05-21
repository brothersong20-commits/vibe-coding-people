import { Badge } from "@/components/ui/badge";
import { ScheduleStatusDot } from "@/components/schedule/schedule-status-dot";
import type { ScheduleItem as ScheduleItemType } from "@/lib/types";
import { formatScheduleDate, formatScheduleTimeRange } from "@/lib/date";

export function ScheduleItemRow({ item }: { item: ScheduleItemType }) {
  return (
    <article
      id={`schedule-${item.id}`}
      className="scroll-mt-24 border-b border-[var(--color-hairline)] py-6 transition-shadow last:border-b-0"
    >
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
            <ScheduleStatusDot status={item.status} variant="chip" />
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

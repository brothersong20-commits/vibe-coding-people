import { Badge } from "@/components/ui/badge";
import type { Notice } from "@/lib/types";
import { formatKoreanDate } from "@/lib/date";

export function NoticeRow({ notice }: { notice: Notice }) {
  return (
    <article className="border-b border-[var(--color-hairline)] py-6 last:border-b-0">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:gap-8">
        <div className="md:w-[140px] md:shrink-0">
          <div className="code text-[var(--color-muted)]">
            {formatKoreanDate(notice.date)}
          </div>
        </div>
        <div className="flex-1">
          <div className="mb-2 flex items-center gap-2">
            <Badge>{notice.category}</Badge>
          </div>
          <h3 className="title-md mb-2">{notice.title}</h3>
          <p className="body-md text-[var(--color-body)]">{notice.summary}</p>
        </div>
      </div>
    </article>
  );
}

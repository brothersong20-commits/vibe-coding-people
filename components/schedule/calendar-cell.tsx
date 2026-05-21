"use client";

import { format } from "date-fns";
import { ko } from "date-fns/locale";
import type { ScheduleItem } from "@/lib/types";
import { ScheduleStatusDot } from "./schedule-status-dot";

type Props = {
  date: Date;
  inCurrentMonth: boolean;
  isToday: boolean;
  items: ScheduleItem[];
  onSelect: (id: string) => void;
};

const DESKTOP_MAX = 2;
const MOBILE_MAX = 3;

export function CalendarCell({
  date,
  inCurrentMonth,
  isToday,
  items,
  onSelect,
}: Props) {
  const hasItems = items.length > 0;
  const dayNumber = format(date, "d");
  const fullDateLabel = format(date, "yyyy년 M월 d일 EEEE", { locale: ko });
  const ariaLabel = hasItems
    ? `${fullDateLabel}, 일정 ${items.length}건: ${items.map((i) => i.title).join(", ")}`
    : `${fullDateLabel}, 일정 없음`;

  const handleClick = () => {
    if (!hasItems) return;
    onSelect(items[0].id);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!hasItems) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect(items[0].id);
    }
  };

  const dayNumberClass = isToday
    ? "code inline-flex h-6 w-6 items-center justify-center rounded-full border border-[var(--color-primary)] text-[var(--color-ink)]"
    : `code ${inCurrentMonth ? "text-[var(--color-ink)]" : "text-[var(--color-muted-soft)]"}`;

  return (
    <div
      role="gridcell"
      aria-label={ariaLabel}
      tabIndex={hasItems ? 0 : -1}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={`flex min-h-[64px] flex-col gap-1 border-r border-b border-[var(--color-hairline)] p-2 md:min-h-[112px] ${
        hasItems
          ? "cursor-pointer hover:bg-[var(--color-canvas-soft)] focus:outline focus:outline-1 focus:outline-[var(--color-primary)]"
          : ""
      } ${inCurrentMonth ? "" : "bg-[var(--color-canvas-soft)]/40"}`}
    >
      <div className="flex items-center">
        <span className={dayNumberClass}>{dayNumber}</span>
      </div>

      {/* 데스크탑 — 칩 노출 */}
      <div className="hidden flex-col gap-1 md:flex">
        {items.slice(0, DESKTOP_MAX).map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(item.id);
            }}
            className="block max-w-full text-left focus:outline focus:outline-1 focus:outline-[var(--color-primary)]"
          >
            <ScheduleStatusDot
              status={item.status}
              variant="chip"
              title={item.title}
              muted={!inCurrentMonth}
            />
          </button>
        ))}
        {items.length > DESKTOP_MAX && (
          <span className="caption text-[var(--color-muted)]">
            +{items.length - DESKTOP_MAX}
          </span>
        )}
      </div>

      {/* 모바일 — 도트만 */}
      <div className="mt-auto flex gap-1 md:hidden">
        {items.slice(0, MOBILE_MAX).map((item) => (
          <ScheduleStatusDot
            key={item.id}
            status={item.status}
            variant="dot"
            muted={!inCurrentMonth}
          />
        ))}
      </div>
    </div>
  );
}

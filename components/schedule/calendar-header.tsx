"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { formatMonthLabel } from "@/lib/date";

const WEEKDAY_LABELS = ["월", "화", "수", "목", "금", "토", "일"] as const;

type Props = {
  cursor: Date;
  onPrev: () => void;
  onNext: () => void;
  onToday: () => void;
};

export function CalendarHeader({ cursor, onPrev, onNext, onToday }: Props) {
  const label = formatMonthLabel(cursor);

  return (
    <div>
      <div className="mb-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onPrev}
            aria-label="이전 달"
            className="inline-flex h-9 w-9 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-hairline)] text-[var(--color-ink)] hover:bg-[var(--color-canvas-soft)] focus:outline focus:outline-1 focus:outline-[var(--color-primary)]"
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </button>
          <div
            aria-live="polite"
            className="display-md min-w-[88px] text-center font-[var(--font-mono)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {label}
          </div>
          <button
            type="button"
            onClick={onNext}
            aria-label="다음 달"
            className="inline-flex h-9 w-9 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-hairline)] text-[var(--color-ink)] hover:bg-[var(--color-canvas-soft)] focus:outline focus:outline-1 focus:outline-[var(--color-primary)]"
          >
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </div>
        <button
          type="button"
          onClick={onToday}
          aria-label="오늘로 이동"
          className="caption-uppercase rounded-[var(--radius-md)] border border-[var(--color-hairline)] px-3 py-[6px] text-[var(--color-ink)] hover:bg-[var(--color-canvas-soft)] focus:outline focus:outline-1 focus:outline-[var(--color-primary)]"
        >
          오늘
        </button>
      </div>

      <div
        role="row"
        className="grid grid-cols-7 border-l border-t border-[var(--color-hairline)]"
      >
        {WEEKDAY_LABELS.map((day) => (
          <div
            key={day}
            role="columnheader"
            className="caption-uppercase border-r border-b border-[var(--color-hairline)] bg-[var(--color-canvas-soft)] px-2 py-[6px] text-center text-[var(--color-muted)]"
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}

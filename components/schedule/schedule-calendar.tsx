"use client";

import { addMonths, isSameDay, startOfMonth, subMonths } from "date-fns";
import { useEffect, useMemo, useRef, useState } from "react";
import type { ScheduleItem } from "@/lib/types";
import { buildMonthGrid, indexScheduleByDay } from "@/lib/date";
import { CalendarCell } from "./calendar-cell";
import { CalendarHeader } from "./calendar-header";

type Props = {
  items: ScheduleItem[];
};

export function ScheduleCalendar({ items }: Props) {
  // 초기 렌더(서버)와 첫 클라이언트 렌더가 동일하도록 placeholder 사용 후
  // effect에서 실제 "오늘" 기준 월로 갱신한다.
  const [cursor, setCursor] = useState<Date | null>(null);
  const [today, setToday] = useState<Date | null>(null);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const now = new Date();
    setToday(now);
    setCursor(startOfMonth(now));
  }, []);

  useEffect(
    () => () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    },
    [],
  );

  const itemsByDay = useMemo(() => indexScheduleByDay(items), [items]);
  const cells = useMemo(
    () => (cursor ? buildMonthGrid(cursor, { weekStartsOn: 1 }) : []),
    [cursor],
  );

  const handlePrev = () => {
    if (!cursor) return;
    setCursor(subMonths(cursor, 1));
  };
  const handleNext = () => {
    if (!cursor) return;
    setCursor(addMonths(cursor, 1));
  };
  const handleToday = () => {
    setCursor(startOfMonth(new Date()));
  };

  const handleSelect = (id: string) => {
    const el = document.getElementById(`schedule-${id}`);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    el.classList.remove("is-highlight");
    // 강제 reflow로 애니메이션 재시작
    void el.offsetWidth;
    el.classList.add("is-highlight");
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      el.classList.remove("is-highlight");
    }, 1400);
  };

  // 첫 렌더(서버/클라이언트 모두) — cursor가 null인 동안은 비어있는 그리드 자리만 잡아둔다.
  if (!cursor) {
    return (
      <div className="mx-auto max-w-[960px] px-6">
        <div className="h-[420px]" aria-hidden="true" />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[960px] px-6">
      <CalendarHeader
        cursor={cursor}
        onPrev={handlePrev}
        onNext={handleNext}
        onToday={handleToday}
      />
      <div
        role="grid"
        aria-label={`${cursor.getFullYear()}년 ${cursor.getMonth() + 1}월 일정 캘린더`}
        className="grid grid-cols-7 border-l border-t border-[var(--color-hairline)]"
      >
        {cells.map((cell) => {
          const dayItems = itemsByDay.get(cell.iso) ?? [];
          const isToday = today ? isSameDay(cell.date, today) : false;
          return (
            <CalendarCell
              key={cell.iso}
              date={cell.date}
              inCurrentMonth={cell.inCurrentMonth}
              isToday={isToday}
              items={dayItems}
              onSelect={handleSelect}
            />
          );
        })}
      </div>
    </div>
  );
}

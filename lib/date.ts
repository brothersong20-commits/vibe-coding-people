import {
  addDays,
  format,
  parseISO,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import { ko } from "date-fns/locale";
import type { ScheduleItem } from "@/lib/types";

/**
 * "2026-05-20" 형식의 짧은 한국어 표기. 카드/리스트용.
 */
export function formatKoreanDate(iso: string): string {
  const date = iso.length === 10 ? parseISO(iso) : new Date(iso);
  return format(date, "yyyy.MM.dd", { locale: ko });
}

/**
 * 일정 카드 좌측에 노출할 큰 날짜 표기 — "06.08 (월)".
 */
export function formatScheduleDate(iso: string): string {
  const date = new Date(iso);
  return format(date, "MM.dd (E)", { locale: ko });
}

/**
 * 일정 카드 시각 — "19:00 – 21:30".
 */
export function formatScheduleTimeRange(start: string, end?: string): string {
  const startTime = format(new Date(start), "HH:mm");
  if (!end) return startTime;
  const endTime = format(new Date(end), "HH:mm");
  return `${startTime} – ${endTime}`;
}

/**
 * 캘린더 그리드 한 칸. `isToday`는 hydration mismatch 방지를 위해
 * 호출 측(클라이언트)에서 별도 계산한다.
 */
export type CalendarDayCell = {
  date: Date;
  iso: string;
  inCurrentMonth: boolean;
};

/**
 * 월간 캘린더 그리드(항상 6주 × 7일 = 42칸) 생성.
 * 월 이동 시 그리드 높이가 흔들리지 않도록 5주 달도 42칸으로 패딩한다.
 */
export function buildMonthGrid(
  monthDate: Date,
  opts?: { weekStartsOn?: 0 | 1 },
): CalendarDayCell[] {
  const weekStartsOn = opts?.weekStartsOn ?? 1;
  const monthStart = startOfMonth(monthDate);
  const gridStart = startOfWeek(monthStart, { weekStartsOn });
  const currentMonth = monthStart.getMonth();

  return Array.from({ length: 42 }, (_, i) => {
    const date = addDays(gridStart, i);
    return {
      date,
      iso: format(date, "yyyy-MM-dd"),
      inCurrentMonth: date.getMonth() === currentMonth,
    };
  });
}

/**
 * 캘린더 헤더에 노출할 월 라벨 — "2026.05".
 */
export function formatMonthLabel(monthDate: Date): string {
  return format(monthDate, "yyyy.MM");
}

/**
 * 일정 목록을 'yyyy-MM-dd' 키로 인덱싱. 같은 날 여러 건은 start 오름차순.
 */
export function indexScheduleByDay(
  items: ScheduleItem[],
): Map<string, ScheduleItem[]> {
  const map = new Map<string, ScheduleItem[]>();
  for (const item of items) {
    const key = format(new Date(item.start), "yyyy-MM-dd");
    const bucket = map.get(key);
    if (bucket) bucket.push(item);
    else map.set(key, [item]);
  }
  for (const list of map.values()) {
    list.sort((a, b) => (a.start < b.start ? -1 : 1));
  }
  return map;
}

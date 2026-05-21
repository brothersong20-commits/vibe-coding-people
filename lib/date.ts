import { format, parseISO } from "date-fns";
import { ko } from "date-fns/locale";

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

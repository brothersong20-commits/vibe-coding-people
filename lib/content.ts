import { schedule, type ScheduleItem } from "@/content/schedule";

/**
 * 일정 데이터를 start 오름차순으로 정렬해 반환한다.
 * 1단계에서는 단일 배열을 그대로 노출하고, 4단계에서 DB 연동으로 교체될 자리이다.
 */
export function getSchedule(): ScheduleItem[] {
  return [...schedule].sort((a, b) => (a.start < b.start ? -1 : 1));
}

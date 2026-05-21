import { ScheduleItemRow } from "@/components/cards/schedule-item";
import { schedule } from "@/content/schedule";

export const metadata = {
  title: "일정 — Vibe Coding People",
  description: "Vibe Coding People 모임의 일정.",
};

export default function SchedulePage() {
  const upcoming = schedule
    .filter((s) => s.status !== "완료")
    .sort((a, b) => (a.start < b.start ? -1 : 1));
  const past = schedule
    .filter((s) => s.status === "완료")
    .sort((a, b) => (a.start < b.start ? 1 : -1));

  return (
    <>
      <section
        className="border-b border-[var(--color-hairline)]"
        style={{ paddingTop: 80, paddingBottom: 64 }}
      >
        <div className="mx-auto max-w-[960px] px-6">
          <div className="caption-uppercase mb-3 text-[var(--color-muted)]">
            Schedule
          </div>
          <h1 className="display-lg mb-3">일정</h1>
          <p className="body-md mb-10 max-w-[640px] text-[var(--color-muted)]">
            정기 빌드 세션, 온라인 데모, 데모데이 일정을 모아둡니다. 캘린더 뷰는
            추후 추가됩니다.
          </p>

          <div className="caption-uppercase mb-4 text-[var(--color-muted)]">
            다가오는 일정
          </div>
          {upcoming.length > 0 ? (
            <div>
              {upcoming.map((item) => (
                <ScheduleItemRow key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <p className="body-md text-[var(--color-muted)]">
              예정된 일정이 없습니다.
            </p>
          )}
        </div>
      </section>

      <section
        className="border-b border-[var(--color-hairline)]"
        style={{ paddingTop: 64, paddingBottom: 80 }}
      >
        <div className="mx-auto max-w-[960px] px-6">
          <div className="caption-uppercase mb-4 text-[var(--color-muted)]">
            지난 일정
          </div>
          {past.length > 0 ? (
            <div>
              {past.map((item) => (
                <ScheduleItemRow key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <p className="body-md text-[var(--color-muted)]">
              아직 지난 일정이 없습니다.
            </p>
          )}
        </div>
      </section>
    </>
  );
}

import { ContestCard } from "@/components/cards/contest-card";
import { contests } from "@/content/contests";

export const metadata = {
  title: "공모전 — Vibe Coding People",
  description:
    "함께 도전해볼 만한 공모전 정보. 디자인·AI·문화 데이터 등 다양한 분야의 공모전을 정리합니다.",
};

export default function ContestsPage() {
  const open = contests.filter((c) => c.status !== "마감");
  const closed = contests.filter((c) => c.status === "마감");

  return (
    <>
      <section
        className="border-b border-[var(--color-hairline)]"
        style={{ paddingTop: 80, paddingBottom: 64 }}
      >
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="caption-uppercase mb-3 text-[var(--color-muted)]">
            Contests
          </div>
          <h1 className="display-lg mb-3">함께 도전할 공모전</h1>
          <p className="body-md mb-10 max-w-[640px] text-[var(--color-muted)]">
            모임에서 같이 출품할 만한 공모전을 정리합니다. 관심 있는 공모전은
            디스코드에서 팀 모집을 시작하세요.
          </p>

          <div className="caption-uppercase mb-4 text-[var(--color-muted)]">
            진행 중 / 예정
          </div>
          {open.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {open.map((contest) => (
                <ContestCard key={contest.id} contest={contest} />
              ))}
            </div>
          ) : (
            <p className="body-md text-[var(--color-muted)]">
              현재 모집 중인 공모전이 없습니다.
            </p>
          )}
        </div>
      </section>

      {closed.length > 0 && (
        <section
          className="border-b border-[var(--color-hairline)]"
          style={{ paddingTop: 64, paddingBottom: 80 }}
        >
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="caption-uppercase mb-4 text-[var(--color-muted)]">
              지난 공모전
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {closed.map((contest) => (
                <ContestCard key={contest.id} contest={contest} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

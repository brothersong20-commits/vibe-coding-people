import { NoticeRow } from "@/components/cards/notice-row";
import { getNotices } from "@/lib/content";

export const metadata = {
  title: "공지 — Vibe Coding People",
  description: "Vibe Coding People 모임의 공지사항.",
};

// DB 콘텐츠가 자주 바뀌지 않으므로 60초 ISR.
export const revalidate = 60;

export default async function NoticesPage() {
  const sorted = await getNotices();

  return (
    <section
      className="border-b border-[var(--color-hairline)]"
      style={{ paddingTop: 80, paddingBottom: 80 }}
    >
      <div className="mx-auto max-w-[960px] px-6">
        <div className="caption-uppercase mb-3 text-[var(--color-muted)]">
          Notices
        </div>
        <h1 className="display-lg mb-10">공지사항</h1>

        {sorted.length > 0 ? (
          <div>
            {sorted.map((notice) => (
              <NoticeRow key={notice.id} notice={notice} />
            ))}
          </div>
        ) : (
          <p className="body-md text-[var(--color-muted)]">
            등록된 공지가 없습니다.
          </p>
        )}
      </div>
    </section>
  );
}

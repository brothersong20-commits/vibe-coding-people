import Link from "next/link";

const NAV_ITEMS: { href: string; label: string }[] = [
  { href: "/notices", label: "공지" },
  { href: "/schedule", label: "일정" },
  { href: "/projects", label: "프로젝트" },
  { href: "/insights", label: "인사이트" },
  { href: "/contests", label: "공모전" },
  { href: "/about", label: "소개" },
];

export function TopNav() {
  return (
    <header
      className="sticky top-0 z-40 border-b border-[var(--color-hairline)] bg-[var(--color-canvas)]/90 backdrop-blur"
      style={{ height: 64 }}
    >
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-[var(--color-ink)]"
          aria-label="Vibe Coding People 홈"
        >
          <span className="display-sm" style={{ fontWeight: 400 }}>
            Vibe Coding{" "}
            <span style={{ color: "var(--color-primary)" }}>People</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="주요 네비게이션">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[14px] font-medium text-[var(--color-ink)] transition-opacity hover:opacity-70"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/about#join"
          className="inline-flex h-10 items-center justify-center rounded-[8px] bg-[var(--color-primary)] px-[18px] text-[14px] font-medium text-[var(--color-on-primary)] transition-colors hover:bg-[var(--color-primary-active)]"
        >
          모임 참여하기
        </Link>
      </div>
    </header>
  );
}

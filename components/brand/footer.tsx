import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="border-t border-[var(--color-hairline)] bg-[var(--color-canvas)]"
      style={{ paddingTop: 64, paddingBottom: 48 }}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-5">
          <div className="col-span-2">
            <div className="display-sm" style={{ fontWeight: 400 }}>
              Vibe Coding{" "}
              <span style={{ color: "var(--color-primary)" }}>People</span>
            </div>
            <p className="body-sm mt-3 max-w-[320px] text-[var(--color-muted)]">
              바이브 코딩으로 함께 만드는 사이드 프로젝트 모임. 같이 만들고, 같이 배웁니다.
            </p>
          </div>

          <FooterColumn
            title="둘러보기"
            links={[
              { href: "/notices", label: "공지" },
              { href: "/schedule", label: "일정" },
              { href: "/projects", label: "프로젝트" },
              { href: "/insights", label: "인사이트" },
              { href: "/contests", label: "공모전" },
            ]}
          />

          <FooterColumn
            title="모임"
            links={[
              { href: "/about", label: "소개" },
              { href: "/about#join", label: "참여 안내" },
            ]}
          />

          <FooterColumn
            title="채널"
            links={[
              {
                href: "https://open.kakao.com/o/gj20g0vi",
                label: "카카오톡 오픈채팅",
                external: true,
              },
            ]}
          />
        </div>

        <div
          className="mt-12 border-t border-[var(--color-hairline-soft)] pt-6 text-[var(--color-muted)]"
          style={{ fontSize: 13 }}
        >
          © {year} Vibe Coding People. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string; external?: boolean }[];
}) {
  return (
    <div>
      <div className="caption-uppercase mb-4 text-[var(--color-muted)]">{title}</div>
      <ul className="space-y-2">
        {links.map((link) =>
          link.external ? (
            // 외부 채널은 새 탭에서 열고 보안 속성을 붙인다.
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="body-sm text-[var(--color-body)] transition-opacity hover:opacity-70"
              >
                {link.label}
              </a>
            </li>
          ) : (
            <li key={link.label}>
              <Link
                href={link.href}
                className="body-sm text-[var(--color-body)] transition-opacity hover:opacity-70"
              >
                {link.label}
              </Link>
            </li>
          ),
        )}
      </ul>
    </div>
  );
}

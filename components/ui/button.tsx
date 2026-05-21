import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "download" | "tertiary";

const variants: Record<ButtonVariant, string> = {
  primary:
    "h-10 px-[18px] bg-[var(--color-primary)] text-[var(--color-on-primary)] hover:bg-[var(--color-primary-active)] rounded-[8px]",
  secondary:
    "h-10 px-[18px] bg-[var(--color-surface-card)] text-[var(--color-ink)] border border-[var(--color-hairline-strong)] rounded-[8px] hover:bg-[var(--color-canvas-soft)]",
  download:
    "h-11 px-[20px] bg-[var(--color-ink)] text-[var(--color-canvas)] hover:bg-black rounded-[8px]",
  tertiary:
    "h-10 px-2 text-[var(--color-ink)] underline-offset-4 hover:underline",
};

const base =
  "inline-flex items-center justify-center text-[14px] font-medium transition-colors";

export function Button({
  children,
  variant = "primary",
  href,
  className,
  ...rest
}: {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  if (href) {
    // 외부 URL(http로 시작)이면 새 탭에서 열고 rel 보안 속성을 붙인다.
    const external = href.startsWith("http");
    return (
      <Link
        href={href}
        className={cn(base, variants[variant], className)}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </Link>
    );
  }
  return (
    <button className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </button>
  );
}

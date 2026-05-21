import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "outline" | "soft";

export function Badge({
  children,
  variant = "default",
  className,
}: {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}) {
  const base =
    "inline-flex items-center rounded-full px-[10px] py-[4px] caption-uppercase";

  const variants: Record<BadgeVariant, string> = {
    default:
      "bg-[var(--color-surface-strong)] text-[var(--color-ink)]",
    outline:
      "border border-[var(--color-hairline-strong)] text-[var(--color-ink)]",
    soft: "bg-[var(--color-canvas-soft)] text-[var(--color-muted)] border border-[var(--color-hairline)]",
  };

  return <span className={cn(base, variants[variant], className)}>{children}</span>;
}

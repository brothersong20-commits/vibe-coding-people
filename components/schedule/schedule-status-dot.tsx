import type { ScheduleStatus } from "@/lib/types";

/**
 * 상태별 칩/도트 시각 매핑. 캘린더 셀과 리스트 카드가 동일한 매핑을 공유한다.
 * DESIGN.md 단일 액센트 규칙을 준수해 새 색상 토큰을 도입하지 않는다.
 */
const chipClass: Record<ScheduleStatus, string> = {
  예정: "bg-[var(--color-canvas-soft)] text-[var(--color-ink)] border border-[var(--color-ink)]",
  진행중:
    "bg-[var(--color-primary)] text-[var(--color-on-primary)] border border-transparent",
  완료: "bg-transparent text-[var(--color-muted-soft)] border border-[var(--color-hairline-soft)]",
};

const dotClass: Record<ScheduleStatus, string> = {
  예정: "bg-[var(--color-ink)]",
  진행중: "bg-[var(--color-primary)]",
  완료: "bg-[var(--color-muted-soft)]",
};

type Props = {
  status: ScheduleStatus;
  variant: "chip" | "dot";
  title?: string;
  muted?: boolean;
  ariaLabel?: string;
};

export function ScheduleStatusDot({
  status,
  variant,
  title,
  muted = false,
  ariaLabel,
}: Props) {
  const mutedClass = muted ? "opacity-60" : "";

  if (variant === "dot") {
    return (
      <span
        aria-label={ariaLabel}
        className={`inline-block h-2 w-2 shrink-0 rounded-full ${dotClass[status]} ${mutedClass}`}
      />
    );
  }

  const completedExtra = status === "완료" ? "opacity-60" : "";
  return (
    <span
      aria-label={ariaLabel}
      className={`inline-flex max-w-full items-center gap-1 truncate rounded-[var(--radius-sm)] px-[6px] py-[2px] caption ${chipClass[status]} ${completedExtra} ${mutedClass}`}
    >
      {title ? <span className="truncate">{title}</span> : status}
    </span>
  );
}

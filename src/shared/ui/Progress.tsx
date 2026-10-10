import { useId, type ReactNode } from 'react'
import { cx } from '../utils'

type ProgressHeadProps = { labelId: string; label: ReactNode; valueText: ReactNode }

function ProgressHead({ labelId, label, valueText }: ProgressHeadProps) {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <span id={labelId} className="text-label">
        {label}
      </span>
      <span className="font-mono text-body-sm font-medium text-ink-secondary">{valueText}</span>
    </div>
  )
}

type ProgressBarProps = {
  label: ReactNode
  /** 0–100. */
  value: number
  /** Always printed next to the bar, e.g. "6 / 12 weeks". */
  valueText: ReactNode
  className?: string
}

/** Continuous progress. */
export function ProgressBar({ label, value, valueText, className }: ProgressBarProps) {
  const labelId = useId()
  const clamped = Math.min(100, Math.max(0, value))

  return (
    <div className={cx('flex flex-col gap-2', className)}>
      <ProgressHead labelId={labelId} label={label} valueText={valueText} />
      <div
        role="progressbar"
        aria-labelledby={labelId}
        aria-valuenow={Math.round(clamped)}
        aria-valuemin={0}
        aria-valuemax={100}
        className="h-2 overflow-hidden rounded-full bg-muted"
      >
        <div className="h-full rounded-full bg-accent" style={{ width: `${clamped}%` }} />
      </div>
    </div>
  )
}

type ProgressStepsProps = {
  label: ReactNode
  /** Number of segments (≤ 12). */
  total: number
  completed: number
  /** Highlights the segment after the completed ones as in progress. */
  inProgress?: boolean
  valueText: ReactNode
  className?: string
}

/** Discrete progress, one segment per unit (weeks, modules). */
export function ProgressSteps({ label, total, completed, inProgress, valueText, className }: ProgressStepsProps) {
  const labelId = useId()

  return (
    <div className={cx('flex flex-col gap-2', className)}>
      <ProgressHead labelId={labelId} label={label} valueText={valueText} />
      {/* The printed value carries the meaning; the segments are decorative. */}
      <ol className="flex gap-1" aria-hidden="true">
        {Array.from({ length: total }, (_, i) => (
          <li
            key={i}
            className={cx(
              'h-2 flex-1 rounded-full',
              i < completed && 'bg-accent',
              i === completed && inProgress && 'bg-accent shadow-[inset_0_0_0_2px_var(--accent),inset_0_0_0_4px_var(--bg-surface)]',
              i >= completed && !(i === completed && inProgress) && 'bg-muted',
            )}
          />
        ))}
      </ol>
    </div>
  )
}

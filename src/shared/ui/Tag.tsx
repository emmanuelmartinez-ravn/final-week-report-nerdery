import type { HTMLAttributes } from 'react'
import { cx } from '../utils'

export type TagTone = 'topic' | 'accent' | 'neutral' | 'success'

const tones: Record<TagTone, string> = {
  /** Technologies and topics (slate indigo). */
  topic: 'bg-tag-bg text-tag-text',
  /** Current / active. */
  accent: 'bg-accent-subtle text-accent-text',
  /** Drafts and meta (durations, counts). */
  neutral: 'bg-subtle text-ink-secondary',
  /** Done. Pair it with the circle-check icon. */
  success: 'bg-success-bg text-success-text',
}

export type TagProps = HTMLAttributes<HTMLSpanElement> & { tone?: TagTone }

/** Non-interactive pill. */
export function Tag({ tone = 'topic', className, ...props }: TagProps) {
  return (
    <span
      className={cx(
        'inline-flex h-6 items-center gap-1 rounded-full px-2.5 text-caption font-semibold whitespace-nowrap',
        tones[tone],
        className,
      )}
      {...props}
    />
  )
}

export function TagList({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cx('flex flex-wrap gap-2', className)} {...props} />
}

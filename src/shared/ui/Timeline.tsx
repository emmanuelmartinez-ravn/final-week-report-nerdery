import type { HTMLAttributes, ReactNode } from 'react'
import { cx } from '../utils'
import { Tag, TagList } from './Tag.tsx'
import { textLinkClasses } from './styles.ts'

export type TimelineState = 'done' | 'current' | 'upcoming'

export function Timeline({ className, ...props }: HTMLAttributes<HTMLOListElement>) {
  return (
    <ol
      className={cx(
        'relative before:absolute before:top-2 before:bottom-2 before:left-1.75 before:w-0.5 before:bg-line',
        className,
      )}
      {...props}
    />
  )
}

const dots: Record<TimelineState, string> = {
  done: 'border-2 border-accent bg-accent',
  current: 'border-4 border-accent bg-canvas',
  upcoming: 'border-2 border-line-strong bg-canvas',
}

type TimelineItemProps = {
  state: TimelineState
  /** ISO date and week, e.g. "2026-09-22 · Week 06". */
  date: string
  title: ReactNode
  /** Link to the full entry. */
  href?: string
  /** One-sentence takeaway. */
  children?: ReactNode
  /** Topic tags. A status tag is added automatically for current and upcoming entries. */
  tags?: ReactNode
}

export function TimelineItem({ state, date, title, href, children, tags }: TimelineItemProps) {
  return (
    <li className="relative pb-8 pl-10 last:pb-0" aria-current={state === 'current' ? 'step' : undefined}>
      <span className={cx('absolute top-1.5 left-0 size-4 rounded-full', dots[state])} aria-hidden="true" />
      <p className="font-mono text-body-sm text-ink-secondary">{date}</p>
      <h3 className="my-1 text-h4 font-semibold text-ink">
        {href ? (
          <a href={href} className={cx(textLinkClasses, 'text-ink no-underline hover:underline')}>
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      {children && <p className="mb-3 max-w-reading text-ink-secondary">{children}</p>}
      {(tags || state !== 'done') && (
        <TagList>
          {tags}
          {state === 'current' && <Tag tone="accent">Current</Tag>}
          {state === 'upcoming' && <Tag tone="neutral">Upcoming</Tag>}
        </TagList>
      )}
    </li>
  )
}

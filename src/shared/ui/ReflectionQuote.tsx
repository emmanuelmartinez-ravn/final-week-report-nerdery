import type { ReactNode } from 'react'
import { cx } from '../utils'

const initialsOf = (name: string) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('')

/** Initials avatar. Decorative: the name is always shown next to it. */
export function Avatar({ name, className }: { name: string; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cx(
        'grid size-8 shrink-0 place-items-center rounded-full bg-tag-bg text-caption font-semibold text-tag-text',
        className,
      )}
    >
      {initialsOf(name)}
    </span>
  )
}

type ReflectionQuoteProps = {
  /** The real quote, used with the mentor's permission. */
  children: ReactNode
  author: string
  /** Module or role, e.g. "GraphQL". */
  role?: string
  className?: string
}

/** Mentor feedback or a personal key insight. */
export function ReflectionQuote({ children, author, role, className }: ReflectionQuoteProps) {
  return (
    <figure className={cx('flex flex-col gap-3 rounded-lg bg-subtle p-6', className)}>
      <blockquote className="text-body-lg text-ink">{children}</blockquote>
      <figcaption className="flex items-center gap-3 text-body-sm text-ink-secondary">
        <Avatar name={author} />
        <span>
          <strong className="font-semibold text-ink">{author}</strong>
          {role && ` · ${role}`}
        </span>
      </figcaption>
    </figure>
  )
}

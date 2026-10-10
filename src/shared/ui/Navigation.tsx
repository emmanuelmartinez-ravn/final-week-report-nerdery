import type { AnchorHTMLAttributes } from 'react'
import { cx } from '../utils'
import { navLinkClasses, type NavLinkOrientation } from './styles.ts'

type NavLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  /** Marks the link as current: 'page' for routes, 'location' for in-page anchors. */
  current?: 'page' | 'location' | false
  /** Horizontal bars sit under the link (top bar); vertical ones sit on the left (stacked menus). */
  orientation?: NavLinkOrientation
}

/** Top-level navigation link. The current state shows as an accent bar, not color alone. */
export function NavLink({ current, orientation = 'horizontal', className, ...props }: NavLinkProps) {
  return <a aria-current={current || undefined} className={cx(navLinkClasses(orientation), className)} {...props} />
}

type TocItem = { id: string; label: string }

type TableOfContentsProps = {
  items: readonly TocItem[]
  /** Id of the section currently in view. */
  activeId?: string
  className?: string
}

/** "On this page" list for long entries. */
export function TableOfContents({ items, activeId, className }: TableOfContentsProps) {
  return (
    <nav aria-label="On this page" className={className}>
      <ul className="flex flex-col gap-1 border-l border-line pl-4">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={item.id === activeId ? 'true' : undefined}
              className="block rounded-sm py-1 text-body-sm text-ink-secondary no-underline hover:text-ink focus-visible:outline-none focus-visible:shadow-focus aria-[current=true]:font-semibold aria-[current=true]:text-accent-text aria-[current=true]:shadow-[-17px_0_0_-15px_var(--accent)]"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

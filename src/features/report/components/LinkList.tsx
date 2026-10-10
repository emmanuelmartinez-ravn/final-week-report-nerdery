import { ExternalLinkIcon } from '../../../shared/icons'
import { TextLink } from '../../../shared/ui'
import type { ReportLink } from '../data/days.ts'

type LinkListProps = {
  links: readonly ReportLink[]
}

/** External links that aren't pull requests. Renders nothing when empty. */
export function LinkList({ links }: LinkListProps) {
  if (links.length === 0) return null

  return (
    <section aria-labelledby="links" className="flex flex-col gap-3">
      <h2 id="links" className="text-h3">
        Related links
      </h2>
      <ul className="flex flex-col divide-y divide-line rounded-lg border border-line bg-surface">
        {links.map((link) => (
          <li key={link.href} className="flex flex-col gap-1 px-6 py-4">
            <TextLink
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 self-start font-semibold"
            >
              {link.label}
              <ExternalLinkIcon size="sm" />
              <span className="sr-only">(opens in a new tab)</span>
            </TextLink>
            {link.description && <p className="text-body-sm text-ink-secondary">{link.description}</p>}
          </li>
        ))}
      </ul>
    </section>
  )
}

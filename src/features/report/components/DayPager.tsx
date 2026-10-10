import { Link } from 'react-router'
import { cardLinkClasses } from '../../../shared/ui'
import { cx } from '../../../shared/utils'
import type { ReportDay } from '../data/days.ts'

type DayPagerProps = {
  previous?: ReportDay
  next?: ReportDay
}

/** Previous / next day links at the end of a day report. */
export function DayPager({ previous, next }: DayPagerProps) {
  if (!previous && !next) return null

  return (
    <nav aria-label="Other days" className="grid grid-cols-1 gap-gutter sm:grid-cols-2">
      {previous && (
        <Link to={`/${previous.slug}`} className={cx(cardLinkClasses, 'gap-1')}>
          <span className="text-body-sm text-ink-secondary">Previous day</span>
          <span className="text-h4 font-semibold">{previous.weekday}</span>
        </Link>
      )}
      {next && (
        <Link to={`/${next.slug}`} className={cx(cardLinkClasses, 'gap-1 text-right sm:col-start-2')}>
          <span className="text-body-sm text-ink-secondary">Next day</span>
          <span className="text-h4 font-semibold">{next.weekday}</span>
        </Link>
      )}
    </nav>
  )
}

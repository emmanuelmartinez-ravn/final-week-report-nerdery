import { Link } from 'react-router'
import { ArrowRightIcon } from '../../../shared/icons'
import { Container, Eyebrow, Lead, ProgressSteps, Timeline, TimelineItem, buttonClasses, textLinkClasses } from '../../../shared/ui'
import { cx } from '../../../shared/utils'
import { REPORT_DAYS, hasNotes } from '../data/days.ts'
import { dayState } from '../data/status.ts'

export function OverviewPage() {
  const loggedCount = REPORT_DAYS.filter(hasNotes).length
  const [firstDay] = REPORT_DAYS

  return (
    <main>
      <Container>
        <section className="grid grid-cols-1 gap-gutter pt-12 pb-4 sm:pt-20 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow>Nerdery program · RAVN · 2026</Eyebrow>
            <h1 className="mt-3 mb-4 text-h1 sm:text-display">My final week</h1>
            <Lead className="max-w-reading">
              A day-by-day report of the last week of the program, Monday to Friday: what I worked on, what I
              learned and what I'm carrying forward.
            </Lead>
            <Link to={`/${firstDay.slug}`} className={cx(buttonClasses({ variant: 'primary', size: 'lg' }), 'mt-8')}>
              Start with {firstDay.weekday}
              <ArrowRightIcon />
            </Link>
          </div>
          <div className="self-end lg:col-span-4 lg:col-start-9">
            <ProgressSteps
              label="Days written up"
              total={REPORT_DAYS.length}
              completed={loggedCount}
              valueText={`${loggedCount} / ${REPORT_DAYS.length} days`}
            />
          </div>
        </section>

        <section className="py-16" aria-labelledby="week-title">
          <h2 id="week-title" className="mb-6 text-h2">
            The week
          </h2>
          <Timeline>
            {REPORT_DAYS.map((day) => (
              <TimelineItem
                key={day.slug}
                state={dayState(day)}
                date={`${day.date} · ${day.weekday}`}
                title={
                  <Link to={`/${day.slug}`} className={cx(textLinkClasses, 'text-ink no-underline hover:underline')}>
                    {day.weekday}
                  </Link>
                }
              >
                {day.focus || (hasNotes(day) ? undefined : 'Not written up yet.')}
              </TimelineItem>
            ))}
          </Timeline>
        </section>
      </Container>
    </main>
  )
}

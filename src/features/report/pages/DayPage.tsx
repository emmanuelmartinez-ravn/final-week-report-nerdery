import { Link, useParams } from 'react-router'
import { CalendarIcon } from '../../../shared/icons'
import { Alert, Container, Eyebrow, Lead, Meta, textLinkClasses } from '../../../shared/ui'
import { formatDate } from '../../../shared/utils'
import { DayPager } from '../components/DayPager.tsx'
import { LinkList } from '../components/LinkList.tsx'
import { LearnedSection, NoteSection } from '../components/NoteSection.tsx'
import { PullRequestList } from '../components/PullRequestList.tsx'
import { REPORT_DAYS, hasNotes } from '../data/days.ts'
import { NotFoundPage } from './NotFoundPage.tsx'

export function DayPage() {
  const { day: slug } = useParams()
  const index = REPORT_DAYS.findIndex((day) => day.slug === slug)
  if (index === -1) return <NotFoundPage />

  const day = REPORT_DAYS[index]

  return (
    <main>
      <Container className="flex flex-col gap-12 pt-12 pb-16 sm:pt-16">
        <header className="max-w-reading">
          <Eyebrow>
            <Link to="/" className={textLinkClasses}>
              Final week
            </Link>{' '}
            · Day {index + 1} of {REPORT_DAYS.length}
          </Eyebrow>
          <h1 className="mt-3 mb-2 text-h1 sm:text-display">{day.weekday}</h1>
          <Meta className="flex items-center gap-2">
            <CalendarIcon size="sm" />
            <time dateTime={day.date}>{formatDate(day.date)}</time>
          </Meta>
          {day.focus && <Lead className="mt-6">{day.focus}</Lead>}
        </header>

        <article className="flex max-w-reading flex-col gap-10">
          {hasNotes(day) ? (
            <>
              {day.summary && <p className="text-body-lg text-ink">{day.summary}</p>}
              <NoteSection id="done" title="What I did" items={day.done} />
              <LearnedSection groups={day.learned} />
              <NoteSection id="blockers" title="Blockers" items={day.blockers} />
              <NoteSection id="next" title="Next" items={day.next} />
              <PullRequestList groups={day.pullRequests} />
              <LinkList links={day.links} />
              {day.thanks && (
                <section aria-labelledby="thanks" className="flex flex-col gap-3">
                  <h2 id="thanks" className="text-h3">
                    Acknowledgements
                  </h2>
                  <p className="text-ink-secondary">{day.thanks}</p>
                </section>
              )}
            </>
          ) : (
            <Alert title="Not written up yet">
              The notes for {day.weekday} haven't been added. They live in{' '}
              <code>src/features/report/data/days.ts</code>.
            </Alert>
          )}
        </article>

        <DayPager previous={REPORT_DAYS[index - 1]} next={REPORT_DAYS[index + 1]} />
      </Container>
    </main>
  )
}

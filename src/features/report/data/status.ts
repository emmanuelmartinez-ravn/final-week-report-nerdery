import type { TimelineState } from '../../../shared/ui'
import { todayIso } from '../../../shared/utils'
import type { ReportDay } from './days.ts'

/** Past days are done, today is current, later days are upcoming. ISO dates compare as strings. */
export function dayState(day: ReportDay, today = todayIso()): TimelineState {
  if (day.date < today) return 'done'
  if (day.date === today) return 'current'
  return 'upcoming'
}

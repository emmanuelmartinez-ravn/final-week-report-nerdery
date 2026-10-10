/** Parses an ISO `YYYY-MM-DD` date as local midnight, so the day never shifts with the time zone. */
export function parseIsoDate(iso: string) {
  const [year, month, day] = iso.split('-').map(Number)
  return new Date(year, month - 1, day)
}

/** Readable date for body copy, e.g. "Oct 5, 2026". */
export function formatDate(iso: string) {
  return parseIsoDate(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

/** Today as an ISO `YYYY-MM-DD` string in local time. */
export function todayIso() {
  const now = new Date()
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`
}

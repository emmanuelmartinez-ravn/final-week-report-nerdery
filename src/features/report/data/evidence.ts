import { REPORT_DAYS, REPORT_MODULES } from './days.ts'
import type { PullRequestGroup, ReportDay, ReportLink, ReportModule } from './days.ts'

export type ModuleEvidence = {
  module: ReportModule
  links: readonly ReportLink[]
  pullRequests: readonly PullRequestGroup[]
}

/**
 * Every day's links and pull requests, grouped by module in `REPORT_MODULES` order.
 * A link listed on several days appears once, with its latest label and description.
 * Pull requests from the same repository are merged into one sorted group.
 */
export function evidenceByModule(days: readonly ReportDay[] = REPORT_DAYS): ModuleEvidence[] {
  return REPORT_MODULES.map((module) => {
    const links = new Map<string, ReportLink>()
    const pullRequests = new Map<string, PullRequestGroup>()

    for (const day of days) {
      for (const link of day.links) {
        if (link.module === module) links.set(link.href, link)
      }
      for (const group of day.pullRequests) {
        if (group.module !== module) continue
        const existing = pullRequests.get(group.repo)
        const numbers = new Set([...(existing?.numbers ?? []), ...group.numbers])
        pullRequests.set(group.repo, {
          ...group,
          collaboratorsOnly: existing?.collaboratorsOnly || group.collaboratorsOnly,
          numbers: [...numbers].sort((a, b) => a - b),
        })
      }
    }

    return { module, links: [...links.values()], pullRequests: [...pullRequests.values()] }
  })
}

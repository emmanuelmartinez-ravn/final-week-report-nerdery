import { ExternalLinkIcon, FolderGitIcon, InfoIcon } from '../../../shared/icons'
import { Card, CardTitle, Meta, TextLink } from '../../../shared/ui'
import type { ModuleEvidence } from '../data/evidence.ts'

type EvidenceSectionProps = {
  modules: readonly ModuleEvidence[]
}

/** One card per program module with the links and pull requests that back it up. */
export function EvidenceSection({ modules }: EvidenceSectionProps) {
  return (
    <section className="py-16" aria-labelledby="evidence-title">
      <h2 id="evidence-title" className="mb-2 text-h2">
        Evidence
      </h2>
      <p className="mb-6 max-w-reading text-ink-secondary">
        The links and pull requests from every day of the week, grouped by the module they show work for.
      </p>
      <ul className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-3">
        {modules.map((evidence) => (
          <li key={evidence.module} className="flex">
            <ModuleCard {...evidence} />
          </li>
        ))}
      </ul>
    </section>
  )
}

function ModuleCard({ module, links, pullRequests }: ModuleEvidence) {
  const isEmpty = links.length === 0 && pullRequests.length === 0

  return (
    <Card className="w-full">
      <CardTitle>{module}</CardTitle>
      {isEmpty && <Meta>No links for this module this week.</Meta>}

      {links.length > 0 && (
        <ul className="flex flex-col gap-3">
          {links.map((link) => (
            <li key={link.href} className="flex flex-col gap-1">
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
      )}

      {pullRequests.map(({ repo, numbers, collaboratorsOnly }) => {
        const accessNoteId = `evidence-${repo}-access`

        return (
          <div key={repo} className="flex flex-col gap-2 border-t border-line pt-3">
            <p className="flex items-center gap-2 text-body-sm text-ink-secondary">
              <FolderGitIcon size="sm" />
              <span className="font-mono break-all">{repo}</span>
            </p>
            <ul className="flex flex-wrap gap-x-4 gap-y-1">
              {numbers.map((number) => (
                <li key={number}>
                  <TextLink
                    href={`https://github.com/${repo}/pull/${number}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 font-mono"
                    aria-label={`Pull request ${number} (opens in a new tab)`}
                    aria-describedby={collaboratorsOnly ? accessNoteId : undefined}
                  >
                    #{number}
                    <ExternalLinkIcon size="sm" />
                  </TextLink>
                </li>
              ))}
            </ul>
            {collaboratorsOnly && (
              <Meta id={accessNoteId} className="flex items-start gap-2">
                <InfoIcon size="sm" className="mt-0.5" />
                <span>Only collaborators of this repository can open these links.</span>
              </Meta>
            )}
          </div>
        )
      })}
    </Card>
  )
}

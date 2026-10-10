import { ExternalLinkIcon, FolderGitIcon, InfoIcon } from '../../../shared/icons'
import { Meta, TextLink } from '../../../shared/ui'
import type { PullRequestGroup } from '../data/days.ts'

type PullRequestListProps = {
  groups: readonly PullRequestGroup[]
}

/** Pull requests grouped by repository, each linking to GitHub. Renders nothing when empty. */
export function PullRequestList({ groups }: PullRequestListProps) {
  if (groups.length === 0) return null

  return (
    <section aria-labelledby="pull-requests" className="flex flex-col gap-3">
      <h2 id="pull-requests" className="text-h3">
        Relevant pull requests
      </h2>
      {groups.map(({ repo, numbers, collaboratorsOnly }) => {
        const accessNoteId = `${repo}-access`

        return (
          <div key={repo} className="flex flex-col gap-3 rounded-lg border border-line bg-surface p-6">
            <p className="flex items-center gap-2 text-body-sm text-ink-secondary">
              <FolderGitIcon size="sm" />
              <span className="font-mono break-all">{repo}</span>
            </p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
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
              <Meta id={accessNoteId} className="flex items-start gap-2 border-t border-line pt-3">
                <InfoIcon size="sm" className="mt-0.5" />
                <span>
                  These links are only accessible to collaborators of the{' '}
                  <span className="font-mono break-all">{repo.split('/')[1]}</span> repository.
                </span>
              </Meta>
            )}
          </div>
        )
      })}
    </section>
  )
}

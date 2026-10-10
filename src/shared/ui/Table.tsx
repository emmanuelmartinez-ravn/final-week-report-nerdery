import type { TableHTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from 'react'
import { cx } from '../utils'

/** Read-only data table. Mark a selected/current row with `aria-selected="true"` on its `<tr>`. */
export function Table({ className, ...props }: TableHTMLAttributes<HTMLTableElement>) {
  return (
    <div className="overflow-x-auto rounded-lg border border-line bg-surface">
      <table
        className={cx(
          'w-full border-collapse text-body leading-6 [&_tbody_tr:hover_td]:bg-subtle [&_tbody_tr[aria-selected=true]_td]:bg-accent-subtle [&_tr:last-child_td]:border-b-0',
          className,
        )}
        {...props}
      />
    </div>
  )
}

type CellStyle = {
  /** Right-aligned mono numbers. */
  numeric?: boolean
}

export function Th({ numeric, className, scope = 'col', ...props }: ThHTMLAttributes<HTMLTableCellElement> & CellStyle) {
  return (
    <th
      scope={scope}
      className={cx(
        'border-b border-line bg-subtle px-4 py-3 text-label text-ink-secondary',
        numeric ? 'text-right' : 'text-left',
        className,
      )}
      {...props}
    />
  )
}

export function Td({
  numeric,
  muted,
  className,
  ...props
}: TdHTMLAttributes<HTMLTableCellElement> & CellStyle & { /** Secondary column. */ muted?: boolean }) {
  return (
    <td
      className={cx(
        'border-b border-line px-4 py-3 align-middle',
        numeric ? 'text-right font-mono text-body-sm' : undefined,
        muted ? 'text-ink-secondary' : 'text-ink',
        className,
      )}
      {...props}
    />
  )
}

import type { ReactNode } from 'react'
import { CircleXIcon } from '../icons'
import { cx } from '../utils'
import { labelClasses } from './styles.ts'

type FieldProps = {
  id: string
  label: ReactNode
  helper?: ReactNode
  error?: ReactNode
  children: ReactNode
  className?: string
}

/** Label + control + helper or error. The error replaces the helper. */
export function Field({ id, label, helper, error, children, className }: FieldProps) {
  return (
    <div className={cx('flex min-w-0 flex-col gap-2', className)}>
      <label htmlFor={id} className={labelClasses}>
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-message`} className="flex items-center gap-1 text-body-sm text-error-text">
          <CircleXIcon size="sm" />
          {error}
        </p>
      ) : (
        helper && (
          <p id={`${id}-message`} className="text-body-sm text-ink-muted">
            {helper}
          </p>
        )
      )}
    </div>
  )
}

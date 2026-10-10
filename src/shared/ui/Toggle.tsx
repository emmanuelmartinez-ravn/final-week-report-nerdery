import type { InputHTMLAttributes, ReactNode } from 'react'
import { cx } from '../utils'

type ToggleProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'role'> & {
  label: ReactNode
}

/** Switch for a setting that applies immediately (theme, show drafts). */
export function Toggle({ label, className, ...props }: ToggleProps) {
  return (
    <label
      className={cx(
        'group inline-flex cursor-pointer items-center gap-3 text-body leading-6 has-disabled:cursor-not-allowed has-disabled:text-ink-disabled',
        className,
      )}
    >
      <input
        type="checkbox"
        role="switch"
        className="relative h-6 w-11 shrink-0 cursor-pointer appearance-none rounded-full border-[1.5px] border-line-strong bg-muted transition-colors duration-150 ease-out after:absolute after:top-0.5 after:left-0.5 after:size-[17px] after:rounded-full after:bg-ink-secondary after:transition-transform after:duration-150 after:ease-out checked:border-accent checked:bg-accent checked:after:translate-x-5 checked:after:bg-on-accent group-hover:not-disabled:checked:bg-accent-hover focus-visible:outline-none focus-visible:shadow-focus disabled:cursor-not-allowed disabled:border-line disabled:bg-muted disabled:after:bg-ink-disabled"
        {...props}
      />
      {label}
    </label>
  )
}

import { useId, type ReactNode, type SelectHTMLAttributes } from 'react'
import { ChevronDownIcon } from '../icons'
import { cx } from '../utils'
import { Field } from './Field.tsx'
import { fieldAria, fieldControlClasses } from './styles.ts'

export type SelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'className'> & {
  label: ReactNode
  helper?: ReactNode
  error?: ReactNode
  className?: string
  /** `<option>` elements. Use a Select for 4–12 mutually exclusive options. */
  children: ReactNode
}

/** Native select styled like TextField. The open list is the OS menu. */
export function Select({ label, helper, error, className, id, children, ...props }: SelectProps) {
  const generatedId = useId()
  const selectId = id ?? generatedId

  return (
    <Field id={selectId} label={label} helper={helper} error={error} className={className}>
      <div className="relative">
        <select
          id={selectId}
          className={cx(fieldControlClasses, 'cursor-pointer appearance-none pr-10')}
          {...fieldAria(selectId, { helper, error })}
          {...props}
        >
          {children}
        </select>
        <ChevronDownIcon className="pointer-events-none absolute top-3 right-3 text-ink-secondary" />
      </div>
    </Field>
  )
}

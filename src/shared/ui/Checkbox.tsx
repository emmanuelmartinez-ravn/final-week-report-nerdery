import type { FieldsetHTMLAttributes, InputHTMLAttributes, ReactNode } from 'react'
import { cx } from '../utils'
import { labelClasses } from './styles.ts'

type ChoiceProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  /** Always to the right of the box; the whole label is the hit area. */
  label: ReactNode
}

const choiceLabel =
  'group inline-flex cursor-pointer items-start gap-3 text-body leading-6 text-ink has-disabled:cursor-not-allowed has-disabled:text-ink-disabled'

const boxBase =
  'mt-0.5 grid size-5 shrink-0 cursor-pointer appearance-none place-content-center border-[1.5px] border-line-strong bg-surface transition-colors duration-150 ease-out after:opacity-0 checked:border-accent checked:bg-accent checked:after:opacity-100 group-hover:not-disabled:border-ink-secondary group-hover:not-disabled:checked:border-accent-hover group-hover:not-disabled:checked:bg-accent-hover focus-visible:outline-none focus-visible:shadow-focus disabled:cursor-not-allowed disabled:border-line disabled:bg-muted aria-invalid:border-error-border'

export function Checkbox({ label, className, ...props }: ChoiceProps) {
  return (
    <label className={cx(choiceLabel, className)}>
      <input
        type="checkbox"
        className={cx(
          boxBase,
          'rounded-sm after:h-1.5 after:w-2.5 after:border-b-2 after:border-l-2 after:border-on-accent after:[transform:rotate(-45deg)_translate(1px,-1px)] disabled:after:border-ink-disabled',
        )}
        {...props}
      />
      {label}
    </label>
  )
}

/** Use inside a `RadioGroup` with a shared `name`. */
export function Radio({ label, className, ...props }: ChoiceProps) {
  return (
    <label className={cx(choiceLabel, className)}>
      <input
        type="radio"
        className={cx(boxBase, 'rounded-full after:size-2 after:rounded-full after:bg-on-accent disabled:after:bg-ink-disabled')}
        {...props}
      />
      {label}
    </label>
  )
}

type RadioGroupProps = FieldsetHTMLAttributes<HTMLFieldSetElement> & { legend: ReactNode }

export function RadioGroup({ legend, className, children, ...props }: RadioGroupProps) {
  return (
    <fieldset className={cx('flex flex-col gap-3', className)} {...props}>
      <legend className={cx(labelClasses, 'mb-2')}>{legend}</legend>
      {children}
    </fieldset>
  )
}

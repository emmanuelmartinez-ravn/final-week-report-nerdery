import { useId, type InputHTMLAttributes, type ReactNode, type TextareaHTMLAttributes } from 'react'
import { cx } from '../utils'
import { Field } from './Field.tsx'
import { fieldAria, fieldControlClasses } from './styles.ts'

type FieldTextProps = {
  label: ReactNode
  helper?: ReactNode
  /** How to fix it, not just what is wrong. Keep submit buttons enabled and show this instead. */
  error?: ReactNode
  className?: string
}

export type TextFieldProps = FieldTextProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> & {
    /** Leading icon, such as `<SearchIcon />`. */
    icon?: ReactNode
  }

export function TextField({ label, helper, error, icon, className, id, ...props }: TextFieldProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId
  const input = (
    <input
      id={inputId}
      className={cx(fieldControlClasses, icon ? 'pl-10' : undefined)}
      {...fieldAria(inputId, { helper, error })}
      {...props}
    />
  )

  return (
    <Field id={inputId} label={label} helper={helper} error={error} className={className}>
      {icon ? (
        <div className="relative">
          <span className="pointer-events-none absolute top-3 left-3 flex text-ink-muted">{icon}</span>
          {input}
        </div>
      ) : (
        input
      )}
    </Field>
  )
}

export type TextAreaProps = FieldTextProps & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'className'>

export function TextArea({ label, helper, error, className, id, ...props }: TextAreaProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId

  return (
    <Field id={inputId} label={label} helper={helper} error={error} className={className}>
      <textarea
        id={inputId}
        className={cx(fieldControlClasses, 'h-auto min-h-28 resize-y p-3')}
        {...fieldAria(inputId, { helper, error })}
        {...props}
      />
    </Field>
  )
}

import type { ComponentProps } from 'react'
import { cx } from '../utils'
import { buttonClasses, type ButtonStyleProps } from './styles.ts'

export type ButtonProps = ButtonStyleProps & ComponentProps<'button'>

export function Button({ variant, size, iconOnly, className, type = 'button', ...props }: ButtonProps) {
  return <button type={type} className={cx(buttonClasses({ variant, size, iconOnly }), className)} {...props} />
}

export type ButtonLinkProps = ButtonStyleProps & ComponentProps<'a'>

/** A link styled as a button. Only for clear calls to action; plain navigation uses `TextLink`. */
export function ButtonLink({ variant, size, iconOnly, className, ...props }: ButtonLinkProps) {
  return <a className={cx(buttonClasses({ variant, size, iconOnly }), className)} {...props} />
}

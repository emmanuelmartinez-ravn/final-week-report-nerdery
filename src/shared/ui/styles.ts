// Class strings and helpers shared by the components in this folder.
// Kept apart from the components so React Fast Refresh keeps working.
import type { ReactNode } from 'react'
import { cx } from '../utils'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger'
export type ButtonSize = 'sm' | 'md' | 'lg'

export type ButtonStyleProps = {
  /** One `primary` per screen. `danger` only inside a confirming Modal. */
  variant?: ButtonVariant
  size?: ButtonSize
  /** Square icon-only button. Always pass an `aria-label`. */
  iconOnly?: boolean
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-md border border-transparent text-label whitespace-nowrap no-underline cursor-pointer transition-colors duration-150 ease-out focus-visible:outline-none focus-visible:shadow-focus disabled:cursor-not-allowed disabled:border-transparent disabled:bg-muted disabled:text-ink-disabled aria-disabled:cursor-not-allowed aria-disabled:border-transparent aria-disabled:bg-muted aria-disabled:text-ink-disabled'

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-accent text-on-accent hover:bg-accent-hover',
  secondary: 'border-line-strong bg-surface text-ink hover:bg-subtle',
  ghost: 'bg-transparent text-accent-text hover:bg-accent-subtle',
  danger: 'border-error-border bg-surface text-error-text hover:bg-error-bg',
}

const sizes: Record<ButtonSize, { box: string; icon: string }> = {
  sm: { box: 'h-8 px-3', icon: 'size-8 px-0' },
  md: { box: 'h-10 px-4', icon: 'size-10 px-0' },
  lg: { box: 'h-12 px-6 text-body font-semibold', icon: 'size-12 px-0' },
}

/** Class string for anything that should look like a button. */
export function buttonClasses({ variant = 'secondary', size = 'md', iconOnly = false }: ButtonStyleProps = {}) {
  return cx(base, variants[variant], iconOnly ? sizes[size].icon : sizes[size].box)
}

/** Shared look of text inputs, textareas and selects. */
export const fieldControlClasses =
  'h-11 w-full rounded-md border border-line-strong bg-surface px-3 text-body text-ink transition-colors duration-150 ease-out placeholder:text-ink-muted hover:border-ink-secondary focus-visible:border-focus focus-visible:outline-none focus-visible:shadow-focus disabled:cursor-not-allowed disabled:border-line disabled:bg-muted disabled:text-ink-disabled aria-invalid:border-error-border aria-invalid:focus-visible:shadow-focus-error'

export const labelClasses = 'text-label text-ink'

/** aria props to put on the control rendered inside `Field`. */
export function fieldAria(id: string, { helper, error }: { helper?: ReactNode; error?: ReactNode }) {
  return {
    'aria-invalid': error ? true : undefined,
    'aria-describedby': error || helper ? `${id}-message` : undefined,
  } as const
}

export const textLinkClasses =
  'rounded-sm text-accent-text underline decoration-1 underline-offset-3 hover:decoration-2 focus-visible:outline-none focus-visible:shadow-focus'

export type NavLinkOrientation = 'horizontal' | 'vertical'

const navIndicator: Record<NavLinkOrientation, string> = {
  horizontal: 'inline-flex aria-[current]:after:inset-x-3 aria-[current]:after:-bottom-3 aria-[current]:after:h-0.5',
  vertical: 'flex aria-[current]:after:inset-y-2 aria-[current]:after:left-0 aria-[current]:after:w-0.5',
}

/**
 * Class string for top-level navigation links. The current state is read from `aria-current`,
 * so it also works on router links that set it themselves.
 */
export function navLinkClasses(orientation: NavLinkOrientation = 'horizontal') {
  return cx(
    'relative h-10 items-center rounded-md px-3 text-label text-ink-secondary no-underline transition-colors duration-150 ease-out hover:bg-subtle hover:text-ink focus-visible:outline-none focus-visible:shadow-focus aria-[current]:text-ink aria-[current]:after:absolute aria-[current]:after:rounded-full aria-[current]:after:bg-accent',
    navIndicator[orientation],
  )
}

export const cardBaseClasses = 'flex flex-col gap-3 rounded-lg border border-line bg-surface p-6 text-ink'

/** Class string for a card that is itself the link. */
export const cardLinkClasses = cx(
  cardBaseClasses,
  'cursor-pointer no-underline transition-[border-color,box-shadow] duration-150 ease-out hover:border-line-strong hover:shadow-sm focus-visible:outline-none focus-visible:shadow-focus',
)

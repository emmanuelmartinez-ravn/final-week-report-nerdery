import type { ComponentType, ReactNode } from 'react'
import { CircleCheckIcon, CircleXIcon, InfoIcon, TriangleAlertIcon, type IconProps } from '../icons'
import { cx } from '../utils'

export type StatusTone = 'info' | 'success' | 'warning' | 'error'

const tones: Record<StatusTone, { classes: string; Icon: ComponentType<IconProps> }> = {
  info: { classes: 'border-info-border bg-info-bg text-info-text', Icon: InfoIcon },
  success: { classes: 'border-success-border bg-success-bg text-success-text', Icon: CircleCheckIcon },
  warning: { classes: 'border-warning-border bg-warning-bg text-warning-text', Icon: TriangleAlertIcon },
  error: { classes: 'border-error-border bg-error-bg text-error-text', Icon: CircleXIcon },
}

type AlertProps = {
  tone?: StatusTone
  title?: ReactNode
  children?: ReactNode
  className?: string
}

/** Persistent inline message. Errors that need action are always an Alert, never a Toast. */
export function Alert({ tone = 'info', title, children, className }: AlertProps) {
  const { classes, Icon } = tones[tone]

  return (
    <div
      role={tone === 'error' ? 'alert' : 'status'}
      className={cx('flex gap-3 rounded-md border px-5 py-4 text-body leading-6', classes, className)}
    >
      <Icon className="mt-0.5" />
      <div>
        {title && <p className="font-semibold">{title}</p>}
        {children && <div>{children}</div>}
      </div>
    </div>
  )
}

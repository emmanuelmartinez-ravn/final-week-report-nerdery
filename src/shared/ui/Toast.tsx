import { useEffect, useRef, type ReactNode } from 'react'
import { CircleCheckIcon, XIcon } from '../icons'
import { cx } from '../utils'

type ToastProps = {
  children: ReactNode
  onDismiss: () => void
  /** Defaults to circle-check: toasts confirm, they don't report errors. */
  icon?: ReactNode
  /** Optional inline action, such as an "Undo" button. */
  action?: ReactNode
  /** Auto-dismiss delay in ms. Pass `null` to keep the toast until it is dismissed. */
  duration?: number | null
  className?: string
}

/** Brief inverted confirmation. Render it inside `ToastRegion`. */
export function Toast({ children, onDismiss, icon, action, duration = 5000, className }: ToastProps) {
  const onDismissRef = useRef(onDismiss)
  useEffect(() => {
    onDismissRef.current = onDismiss
  })

  useEffect(() => {
    if (duration === null) return
    const timer = window.setTimeout(() => onDismissRef.current(), duration)
    return () => window.clearTimeout(timer)
  }, [duration])

  return (
    <div
      role="status"
      className={cx(
        'flex w-full max-w-105 items-center gap-3 rounded-md bg-inverse py-3 pr-3 pl-4 text-body leading-6 text-ink-inverse shadow-lg sm:min-w-80',
        className,
      )}
    >
      {icon ?? <CircleCheckIcon />}
      <p className="flex-1">{children}</p>
      {action}
      <button
        type="button"
        aria-label="Dismiss"
        onClick={onDismiss}
        className="grid size-8 shrink-0 cursor-pointer place-items-center rounded-md focus-visible:outline-2 focus-visible:outline-ink-inverse"
      >
        <XIcon />
      </button>
    </div>
  )
}

/** Fixed stack for toasts: bottom-centre on mobile, bottom-left from `md`. */
export function ToastRegion({ children }: { children?: ReactNode }) {
  return (
    <div className="pointer-events-none fixed inset-x-page bottom-4 z-(--z-toast) flex flex-col items-center gap-2 md:right-auto md:bottom-6 md:items-start [&>*]:pointer-events-auto">
      {children}
    </div>
  )
}

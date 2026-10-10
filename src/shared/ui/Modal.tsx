import { useEffect, useId, useRef, type ReactNode } from 'react'
import { XIcon } from '../icons'
import { Button } from './Button.tsx'

type ModalProps = {
  open: boolean
  /** Called on Esc, the close button, or any other close of the dialog. */
  onClose: () => void
  title: ReactNode
  children?: ReactNode
  /** Footer buttons: secondary first, primary or danger last. */
  actions?: ReactNode
}

/**
 * Blocking dialog for confirmations and short tasks (≤ 3 fields).
 * Built on native <dialog>: focus is trapped, Esc closes it, and focus returns to the trigger.
 */
export function Modal({ open, onClose, title, children, actions }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const titleId = useId()

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onClose={onClose}
      className="m-auto w-[calc(100%-2*var(--page-margin))] max-w-130 rounded-xl border border-line bg-surface p-8 text-ink shadow-lg backdrop:bg-neutral-950/55"
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <h2 id={titleId} className="text-h3">
            {title}
          </h2>
          <Button variant="ghost" iconOnly aria-label="Close" onClick={onClose}>
            <XIcon />
          </Button>
        </div>
        {children}
        {actions && <div className="flex justify-end gap-3 pt-2">{actions}</div>}
      </div>
    </dialog>
  )
}

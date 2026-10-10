import type { AnchorHTMLAttributes, HTMLAttributes } from 'react'
import { cx } from '../utils'
import { textLinkClasses } from './styles.ts'

/** Centered page container: `content-max` wide with `page-margin` gutters. */
export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cx('mx-auto w-full max-w-content px-page', className)} {...props} />
}

/** Small uppercase label above a heading. */
export function Eyebrow({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cx('text-overline text-ink-muted uppercase', className)} {...props} />
}

/** Intro paragraph under a page title. */
export function Lead({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cx('text-body-lg text-ink-secondary', className)} {...props} />
}

/** Secondary small text: dates, counts, captions under content. */
export function Meta({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cx('text-body-sm text-ink-secondary', className)} {...props} />
}

export function TextLink({ className, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a className={cx(textLinkClasses, className)} {...props} />
}

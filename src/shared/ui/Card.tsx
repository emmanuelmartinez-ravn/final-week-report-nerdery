import type { AnchorHTMLAttributes, HTMLAttributes } from 'react'
import { cx } from '../utils'
import { cardBaseClasses, cardLinkClasses } from './styles.ts'

/** Bordered container for one entry, project or summary. If the whole card is a link, use `CardLink`. */
export function Card({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return <article className={cx(cardBaseClasses, className)} {...props} />
}

/** A card that is itself the link. Never put buttons or other links inside it. */
export function CardLink({ className, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a className={cx(cardLinkClasses, className)} {...props} />
}

type CardTitleProps = HTMLAttributes<HTMLHeadingElement> & { as?: 'h2' | 'h3' | 'h4' }

export function CardTitle({ as: Heading = 'h3', className, ...props }: CardTitleProps) {
  return <Heading className={cx('text-h3', className)} {...props} />
}

export function CardBody({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cx('text-ink-secondary', className)} {...props} />
}

export function CardFooter({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cx(
        'mt-auto flex items-center justify-between gap-3 border-t border-line pt-3 text-body-sm text-ink-secondary',
        className,
      )}
      {...props}
    />
  )
}

/** Optional first child: a 140px image strip that bleeds to the card edges. */
export function CardMedia({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cx(
        '-mx-6 -mt-6 mb-1 h-35 overflow-hidden rounded-t-lg border-b border-line bg-subtle [&_img]:block [&_img]:size-full [&_img]:object-cover',
        className,
      )}
      {...props}
    />
  )
}

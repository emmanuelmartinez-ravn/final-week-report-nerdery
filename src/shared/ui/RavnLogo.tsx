type RavnLogoProps = {
  className?: string
}

/** Official RAVN wordmark. Inherits color through `currentColor`; size it with CSS height. */
export function RavnLogo({ className }: RavnLogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 310 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="RAVN"
    >
      <path
        d="M310 0.00219727H293.331V46.0793L254.667 0.00439823H238V71.9956H254.667V25.9317L293.327 72.0022L293.333 71.9956H310V0.00219727Z"
        fill="currentColor"
      />
      <path
        d="M198.894 72.0044H181.106L154 0.00439453H171.785L189.999 48.2348L208.213 0.00439453H226L198.894 72.0044Z"
        fill="currentColor"
      />
      <path
        d="M135.894 0.00439453H118.106L91 72.0044H108.787L127.001 23.7718L145.213 72.0044H163L135.894 0.00439453Z"
        fill="currentColor"
      />
      <path
        d="M60.8437 49.113C71.4432 46.2164 79.2366 36.5184 79.2366 25C79.2366 11.4325 68.428 0.389594 54.9541 0.0132066V0H16.1325H0L13.3902 16.6623H16.1325V16.6667H54.3621C58.9069 16.7327 62.5714 20.4372 62.5714 24.9978C62.5714 29.6003 58.8409 33.3312 54.2388 33.3312H48.1621H26.7827L57.8571 72H79.2344L60.8437 49.113Z"
        fill="currentColor"
      />
      <path
        d="M18 72C24.0751 72 29 67.0751 29 61C29 54.9249 24.0751 50 18 50C11.9249 50 7 54.9249 7 61C7 67.0751 11.9249 72 18 72Z"
        fill="currentColor"
      />
    </svg>
  )
}

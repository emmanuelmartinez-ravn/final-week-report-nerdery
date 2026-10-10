import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { REPORT_DAYS } from '../../features/report'
import { MenuIcon, XIcon } from '../../shared/icons'
import { Button, Container, RavnLogo, navLinkClasses, type NavLinkOrientation } from '../../shared/ui'

export function Header() {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [menuPath, setMenuPath] = useState(pathname)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  // Close the menu whenever the route changes.
  if (menuPath !== pathname) {
    setMenuPath(pathname)
    setMenuOpen(false)
  }

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setMenuOpen(false)
      menuButtonRef.current?.focus()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  // React Router's NavLink sets aria-current="page" on the active route, which the classes style.
  const renderLinks = (orientation: NavLinkOrientation) =>
    REPORT_DAYS.map((day) => (
      <li key={day.slug}>
        <NavLink to={`/${day.slug}`} className={navLinkClasses(orientation)}>
          {day.weekday}
        </NavLink>
      </li>
    ))

  return (
    <header className="sticky top-0 z-(--z-sticky) h-nav border-b border-line bg-canvas">
      <Container className="flex h-full items-center gap-8">
        <Link
          to="/"
          className="flex shrink-0 items-center gap-2 rounded-sm text-ink no-underline focus-visible:outline-none focus-visible:shadow-focus"
        >
          <RavnLogo className="h-5 w-auto" />
          <span className="text-label font-medium text-ink-secondary">Final week report</span>
        </Link>

        {/* Below screen-lg the links collapse into a menu button. */}
        <nav className="hidden lg:block" aria-label="Days">
          <ul className="flex gap-1">{renderLinks('horizontal')}</ul>
        </nav>

        <div className="ml-auto lg:hidden">
          <Button
            ref={menuButtonRef}
            variant="ghost"
            iconOnly
            aria-label={menuOpen ? 'Close days menu' : 'Open days menu'}
            aria-expanded={menuOpen}
            aria-controls="header-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <XIcon /> : <MenuIcon />}
          </Button>
        </div>
      </Container>

      {menuOpen && (
        <nav
          id="header-menu"
          aria-label="Days"
          className="absolute inset-x-0 top-full z-(--z-dropdown) border-b border-line bg-surface shadow-md lg:hidden"
        >
          <Container>
            <ul className="flex flex-col gap-1 pt-2 pb-3">{renderLinks('vertical')}</ul>
          </Container>
        </nav>
      )}
    </header>
  )
}

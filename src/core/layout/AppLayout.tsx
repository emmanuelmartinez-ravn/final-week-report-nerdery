import { Outlet, ScrollRestoration } from 'react-router'
import { Header } from './Header.tsx'

/** Page frame shared by every route. */
export function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <ScrollRestoration />
    </>
  )
}

import { createBrowserRouter } from 'react-router'
import { DayPage, NotFoundPage, OverviewPage } from '../../features/report'
import { AppLayout } from '../layout'

/** `/` is the week overview, `/:day` is one day (`/monday` … `/friday`). Unknown days render the 404 page. */
export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { index: true, element: <OverviewPage /> },
      { path: ':day', element: <DayPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])

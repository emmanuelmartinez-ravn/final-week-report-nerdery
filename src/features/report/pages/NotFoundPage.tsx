import { Link } from 'react-router'
import { Container, Eyebrow, Lead, buttonClasses } from '../../../shared/ui'

export function NotFoundPage() {
  return (
    <main>
      <Container className="pt-12 pb-16 sm:pt-20">
        <Eyebrow>404</Eyebrow>
        <h1 className="mt-3 mb-4 text-h1">Page not found</h1>
        <Lead className="mb-8 max-w-reading">There's no report at this address. The week runs Monday to Friday.</Lead>
        <Link to="/" className={buttonClasses({ variant: 'primary' })}>
          Go to the week overview
        </Link>
      </Container>
    </main>
  )
}

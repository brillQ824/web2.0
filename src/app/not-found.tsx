import Link from 'next/link'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'

export const metadata = {
  title: '404 — Page not found | brillQ AI',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <>
      <Header lang="en" />
      <main
        id="main-content"
        className="min-h-screen flex items-center justify-center bg-black"
        style={{ paddingTop: '80px' }}
      >
        <div className="container-custom text-center">
          <div
            className="text-primary select-none"
            style={{
              fontSize: 'clamp(120px, 20vw, 240px)',
              fontWeight: 400,
              lineHeight: 0.9,
              letterSpacing: '-0.05em',
              opacity: 0.12,
              marginBottom: '-0.1em',
            }}
          >
            404
          </div>

          <h1
            className="text-white"
            style={{
              fontSize: 'clamp(28px, 4vw, 56px)',
              fontWeight: 400,
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
              marginBottom: '16px',
            }}
          >
            Page not found
          </h1>

          <p
            className="text-gray-400 mx-auto"
            style={{
              fontSize: 'clamp(15px, 1.5vw, 18px)',
              lineHeight: 1.7,
              maxWidth: '480px',
              marginBottom: '48px',
            }}
          >
            The page you are looking for does not exist or has been moved.
            Return to the homepage or contact us.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/en" className="btn-primary">
              Homepage
            </Link>
            <Link href="/en/kontakt" className="btn-secondary">
              Contact us
            </Link>
          </div>
        </div>
      </main>
      <Footer lang="en" />
    </>
  )
}

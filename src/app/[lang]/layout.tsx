import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Suspense } from "react";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import ContactPopup from "@/components/shared/ContactPopup";
import CookieConsent from "@/components/shared/CookieConsent";
import GoogleAnalytics from "@/components/shared/GoogleAnalytics";
import { OrganizationJsonLd } from "@/components/shared/JsonLd";
import CursorFollower from "@/components/shared/CursorFollower";
import ScrollProgressBar from "@/components/shared/ScrollProgressBar";
import BackToTop from "@/components/shared/BackToTop";
import { i18n, type Locale } from '@/i18n/config'
import RecaptchaProvider from '@/components/shared/RecaptchaProvider'

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'fallback',
  preload: true,
  adjustFontFallback: true,
  fallback: ['system-ui', '-apple-system', 'Arial', 'sans-serif'],
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

const BASE_URL = 'https://brillq.today'

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  const { lang } = params
  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: lang === 'en'
        ? "brillQ - Advanced AI & Machine Learning Solutions"
        : "brillQ - Zaawansowane Rozwiązania AI i Machine Learning",
      template: "%s | brillQ AI"
    },
    description: lang === 'en'
      ? "We build advanced AI, ML, Deep Learning and LLM solutions. Specializing in Agentic AI, NLP, Computer Vision and MLOps."
      : "Tworzymy zaawansowane rozwiązania AI, ML, Deep Learning i LLM. Specjalizujemy się w Agentic AI, NLP, Computer Vision i MLOps.",
    keywords: ["AI", "Machine Learning", "Deep Learning", "LLM", "Agentic AI", "NLP", "Computer Vision", "MLOps", "Generative AI"],
    authors: [{ name: "brillQ AI" }],
    openGraph: {
      type: "website",
      locale: lang === 'en' ? "en_US" : "pl_PL",
      url: `${BASE_URL}/${lang}`,
      siteName: "brillQ AI",
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'brillQ AI — Advanced AI & Machine Learning Solutions',
          type: 'image/png',
        }
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "brillQ AI",
      description: "Advanced AI & Machine Learning Solutions",
      images: ['/og-image.png'],
    },
    robots: {
      index: true,
      follow: true,
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
    icons: {
      icon: [
        { url: '/favicon.ico' },
        { url: '/icon.svg', type: 'image/svg+xml' },
      ],
      apple: '/apple-touch-icon.png',
    },
    alternates: {
      canonical: `${BASE_URL}/${lang}`,
      languages: {
        'pl': `${BASE_URL}/pl`,
        'en': `${BASE_URL}/en`,
        'x-default': `${BASE_URL}/en`,
      },
    },
  }
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <html lang={params.lang} className={inter.variable}>
      <body className="font-sans">
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        <OrganizationJsonLd />
        <ScrollProgressBar />
        <CursorFollower />
        <Header lang={params.lang} />
        <RecaptchaProvider lang={params.lang}>
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <ContactPopup lang={params.lang} />
        </RecaptchaProvider>
        <Footer lang={params.lang} />
        <BackToTop />
        <CookieConsent lang={params.lang} />
      </body>
    </html>
  );
}

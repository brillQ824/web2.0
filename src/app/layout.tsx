import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'fallback',
  preload: true,
  adjustFontFallback: true,
  fallback: ['system-ui', '-apple-system', 'Arial', 'sans-serif'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://brillQ.today'),
  title: {
    default: "brillQ - Advanced AI & Machine Learning Solutions",
    template: "%s | brillQ AI"
  },
  description: "Advanced AI & Machine Learning solutions for enterprises. Specializing in LLM, Agentic AI, Computer Vision, NLP and MLOps.",
  keywords: ["AI", "Machine Learning", "Deep Learning", "LLM", "Agentic AI", "NLP", "Computer Vision", "MLOps", "Generative AI"],
  authors: [{ name: "brillQ AI" }],
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://brillQ.today",
    siteName: "brillQ AI",
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'brillQ AI' }],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={inter.variable}>
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-K1EYWMWH6N"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-K1EYWMWH6N');
          `}
        </Script>
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}


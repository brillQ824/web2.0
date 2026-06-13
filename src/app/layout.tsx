import type { Metadata } from "next";
import "./globals.css";

// Base defaults for routes outside [lang] (e.g. the root not-found page).
// Full, locale-aware metadata is generated per page in app/[lang]/layout.tsx.
export const metadata: Metadata = {
  metadataBase: new URL('https://brillq.today'),
  title: {
    default: 'brillQ - Advanced AI & Machine Learning Solutions',
    template: '%s | brillQ AI',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Pass-through root: the <html>/<body> live in app/[lang]/layout.tsx so
  // the lang attribute can be set per-locale at render time (SSR-correct).
  return children;
}


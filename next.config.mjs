import { withSentryConfig } from '@sentry/nextjs'

/** @type {import('next').NextConfig} */

// Content Security Policy — unsafe-eval needed in dev for webpack eval-source-map
const isDev = process.env.NODE_ENV === 'development'

const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''} https://www.google.com https://www.gstatic.com https://www.googletagmanager.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data: https://www.googletagmanager.com https://www.google-analytics.com;
  font-src 'self' data:;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  frame-src https://www.google.com;
  connect-src 'self' https://www.google.com https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com;
  upgrade-insecure-requests;
`

const nextConfig = {
  // Compiler options for modern browsers
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Experimental features for better performance
  experimental: {
    // Optimize package imports
    optimizePackageImports: ['framer-motion', 'lucide-react'],
    // Enable CSS optimization
    optimizeCss: true,
  },

  // Enable SWC minify (default in Next.js 14 but explicit is better)
  swcMinify: true,

  images: {
    formats: ['image/avif', 'image/webp'],
  },

  // Webpack configuration to reduce polyfills
  webpack: (config, { isServer }) => {
    // Exclude unnecessary polyfills for modern browsers
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      }
    }
    return config
  },

  async redirects() {
    return [
      {
        source: '/pl/insights/:slug*',
        destination: '/pl',
        permanent: true,
      },
      {
        source: '/en/insights/:slug*',
        destination: '/en',
        permanent: true,
      },
      {
        source: '/pl/aktualnosci/:slug*',
        destination: '/pl',
        permanent: true,
      },
      {
        source: '/en/aktualnosci/:slug*',
        destination: '/en',
        permanent: true,
      },
      {
        source: '/pl/kompetencje/:slug*',
        destination: '/pl',
        permanent: true,
      },
      {
        source: '/en/kompetencje/:slug*',
        destination: '/en',
        permanent: true,
      },
    ]
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\n/g, ''),
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
        ],
      },
    ]
  },
}

export default withSentryConfig(nextConfig, {
  // Sentry org and project (from sentry.io dashboard)
  org: 'brillq',
  project: 'brillq-today',

  // Auth token for source map upload — set SENTRY_AUTH_TOKEN in Vercel env vars
  // authToken: process.env.SENTRY_AUTH_TOKEN,

  // Suppress verbose Sentry CLI output during builds
  silent: !process.env.CI,

  // Hide source maps from browser devtools (already uploaded to Sentry)
  hideSourceMaps: true,

  // Tunnel Sentry requests through /monitoring to bypass ad blockers + avoid CSP changes
  tunnelRoute: '/monitoring',

  // Disable source map upload if no auth token set (avoids build errors)
  sourcemaps: {
    disable: !process.env.SENTRY_AUTH_TOKEN,
  },
})


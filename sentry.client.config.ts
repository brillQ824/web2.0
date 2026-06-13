import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // Performance monitoring — capture 10% of transactions
  tracesSampleRate: 0.1,

  // Environment — separate prod from dev errors
  environment: process.env.NODE_ENV,

  // Only enable in production (no noise during development)
  enabled: process.env.NODE_ENV === 'production',

  // Ignore common browser noise errors
  ignoreErrors: [
    // ResizeObserver spam (common browser behavior)
    'ResizeObserver loop limit exceeded',
    'ResizeObserver loop completed with undelivered notifications',
    // Network failures — usually user connectivity issues
    'NetworkError',
    'Network request failed',
    'Failed to fetch',
    'Load failed',
    // Chunk loading — usually caching issues after deploy
    /^Loading chunk \d+ failed/,
    /^ChunkLoadError/,
    // Non-error rejections
    'Non-Error promise rejection captured',
    // Extension-injected errors
    /chrome-extension/,
    /safari-web-extension/,
  ],
})

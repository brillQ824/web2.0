import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  /**
   * Server-side environment variables schema
   * These are only available on the server
   */
  server: {
    // Sanity (optional - only needed if using CMS)
    SANITY_API_TOKEN: z.string().min(1).optional(),

    // Upstash Redis for rate limiting
    UPSTASH_REDIS_REST_URL: z.string().url().optional(),
    UPSTASH_REDIS_REST_TOKEN: z.string().min(1).optional(),

    // reCAPTCHA
    RECAPTCHA_SECRET_KEY: z.string().min(1).optional(),

    // Resend email service
    RESEND_API_KEY: z.string().min(1).optional(),
    RESEND_FROM_EMAIL: z.string().email().optional(),

    // Node environment
    NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  },

  /**
   * Client-side environment variables schema
   * These are exposed to the browser (must start with NEXT_PUBLIC_)
   */
  client: {
    NEXT_PUBLIC_SANITY_PROJECT_ID: z.string().min(1).optional(),
    NEXT_PUBLIC_SANITY_DATASET: z.string().min(1).default("production"),
    NEXT_PUBLIC_SANITY_API_VERSION: z.string().min(1).default("2024-01-01"),
    NEXT_PUBLIC_SITE_URL: z.string().url().default("https://brill.ai"),
    NEXT_PUBLIC_GA_ID: z.string().min(1).optional(),
    NEXT_PUBLIC_SENTRY_DSN: z.string().url().optional(),
  },

  /**
   * Runtime environment variables
   * Destructure all variables from `process.env` here
   */
  runtimeEnv: {
    // Server
    SANITY_API_TOKEN: process.env.SANITY_API_TOKEN,
    UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL,
    UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN,
    RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    RESEND_FROM_EMAIL: process.env.RESEND_FROM_EMAIL,
    NODE_ENV: process.env.NODE_ENV,

    // Client
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
    NEXT_PUBLIC_SANITY_API_VERSION: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
    NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
  },

  /**
   * Skip validation during build if needed (for Docker, etc.)
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,

  /**
   * Makes it so that empty strings are treated as undefined
   */
  emptyStringAsUndefined: true,
})

'use client'

import { ReactNode } from 'react'

interface LiveRegionProps {
  children: ReactNode
  politeness?: 'polite' | 'assertive' | 'off'
  atomic?: boolean
  relevant?: 'additions' | 'removals' | 'text' | 'all'
  className?: string
}

/**
 * LiveRegion component
 * Creates an ARIA live region for announcing dynamic content changes to screen readers
 * Used for form validation messages, loading states, etc.
 */
export default function LiveRegion({
  children,
  politeness = 'polite',
  atomic = true,
  relevant = 'additions',
  className = ''
}: LiveRegionProps) {
  return (
    <div
      role="status"
      aria-live={politeness}
      aria-atomic={atomic}
      aria-relevant={relevant}
      className={className}
    >
      {children}
    </div>
  )
}

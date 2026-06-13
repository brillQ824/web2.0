'use client'

import { useEffect, useState } from 'react'

/**
 * AccessibilityAnnouncer component
 * Announces route changes and important updates to screen readers
 */
export default function AccessibilityAnnouncer() {
  const [announcement, setAnnouncement] = useState('')

  useEffect(() => {
    // Listen for custom announcement events
    const handleAnnouncement = (event: CustomEvent<{ message: string }>) => {
      setAnnouncement(event.detail.message)
      // Clear announcement after it's been read
      setTimeout(() => setAnnouncement(''), 1000)
    }

    window.addEventListener('announce' as any, handleAnnouncement as any)
    return () => {
      window.removeEventListener('announce' as any, handleAnnouncement as any)
    }
  }, [])

  useEffect(() => {
    // Announce page changes
    const handleRouteChange = () => {
      const pageTitle = document.title
      setAnnouncement(`Navigated to ${pageTitle}`)
      setTimeout(() => setAnnouncement(''), 1000)
    }

    // MutationObserver to watch for title changes (route changes)
    const observer = new MutationObserver(() => {
      handleRouteChange()
    })

    const titleElement = document.querySelector('title')
    if (titleElement) {
      observer.observe(titleElement, {
        childList: true,
        characterData: true,
        subtree: true,
      })
    }

    return () => observer.disconnect()
  }, [])

  if (!announcement) return null

  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      style={{
        position: 'absolute',
        left: '-10000px',
        width: '1px',
        height: '1px',
        overflow: 'hidden',
      }}
    >
      {announcement}
    </div>
  )
}

/**
 * Utility function to trigger announcements
 * Usage: announce('Form submitted successfully')
 */
export function announce(message: string) {
  if (typeof window !== 'undefined') {
    const event = new CustomEvent('announce', { detail: { message } })
    window.dispatchEvent(event)
  }
}

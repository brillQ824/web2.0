'use client'

import { useEffect, useState } from 'react'

export default function CursorFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if device is desktop (width > 992px)
    const checkDevice = () => {
      setIsVisible(window.innerWidth > 992)
    }

    checkDevice()
    window.addEventListener('resize', checkDevice)

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', checkDevice)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      className="cursor-follower"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  )
}

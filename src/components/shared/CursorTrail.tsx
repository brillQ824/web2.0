'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useSpring } from 'framer-motion'

interface TrailPoint {
  x: number
  y: number
  id: number
}

export default function CursorTrail() {
  const [trails, setTrails] = useState<TrailPoint[]>([])
  const [isVisible, setIsVisible] = useState(false)
  const trailIdRef = useRef(0)

  useEffect(() => {
    // Check if device is desktop
    const checkDevice = () => {
      setIsVisible(window.innerWidth > 992)
    }

    checkDevice()
    window.addEventListener('resize', checkDevice)

    let lastTime = 0
    const throttleDelay = 30 // ms between trail points

    const handleMouseMove = (e: MouseEvent) => {
      const currentTime = Date.now()

      if (currentTime - lastTime < throttleDelay) {
        return
      }

      lastTime = currentTime

      const newTrail: TrailPoint = {
        x: e.clientX,
        y: e.clientY,
        id: trailIdRef.current++,
      }

      setTrails((prevTrails) => {
        const updated = [...prevTrails, newTrail]
        // Keep only last 15 trail points
        return updated.slice(-15)
      })
    }

    // Remove old trails periodically
    const cleanupInterval = setInterval(() => {
      setTrails((prevTrails) => {
        if (prevTrails.length === 0) return prevTrails
        return prevTrails.slice(1)
      })
    }, 50)

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', checkDevice)
      clearInterval(cleanupInterval)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9997,
      }}
    >
      {trails.map((trail, index) => {
        const opacity = (index / trails.length) * 0.5
        const scale = 0.2 + (index / trails.length) * 0.8

        return (
          <motion.div
            key={trail.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity,
              scale,
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              position: 'absolute',
              left: trail.x,
              top: trail.y,
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(178, 158, 82, 0.8) 0%, rgba(178, 158, 82, 0) 70%)',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
            }}
          />
        )
      })}
    </div>
  )
}

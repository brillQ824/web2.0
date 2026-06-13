'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, ReactNode } from 'react'

interface MouseParallaxProps {
  children: ReactNode
  strength?: number
  className?: string
}

export default function MouseParallax({ children, strength = 20, className = '' }: MouseParallaxProps) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 150 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      // Calculate movement relative to center
      const xPct = (clientX - innerWidth / 2) / (innerWidth / 2)
      const yPct = (clientY - innerHeight / 2) / (innerHeight / 2)

      mouseX.set(xPct * strength)
      mouseY.set(yPct * strength)
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [mouseX, mouseY, strength])

  return (
    <motion.div
      className={className}
      style={{
        x,
        y,
      }}
    >
      {children}
    </motion.div>
  )
}

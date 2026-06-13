'use client'

import { useRef, ReactNode } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

interface ScrollAnimatedElementProps {
  children: ReactNode
  type?: 'fade' | 'slide' | 'scale' | 'rotate' | 'parallax' | 'complex'
  direction?: 'up' | 'down' | 'left' | 'right'
  intensity?: number
  className?: string
  style?: React.CSSProperties
}

export default function ScrollAnimatedElement({
  children,
  type = 'fade',
  direction = 'up',
  intensity = 1,
  className = '',
  style = {},
}: ScrollAnimatedElementProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Smooth spring physics
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const smoothProgress = useSpring(scrollYProgress, springConfig)

  // Create all transform hooks unconditionally
  const fadeOpacity = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const slideOpacity = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const slideYUp = useTransform(smoothProgress, [0, 0.3], [100 * intensity, 0])
  const slideYDown = useTransform(smoothProgress, [0, 0.3], [-100 * intensity, 0])
  const slideXLeft = useTransform(smoothProgress, [0, 0.3], [100 * intensity, 0])
  const slideXRight = useTransform(smoothProgress, [0, 0.3], [-100 * intensity, 0])
  const scaleOpacity = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const scaleValue = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8])
  const rotateOpacity = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const rotateValue = useTransform(smoothProgress, [0, 0.5, 1], [0, 360 * intensity, 720 * intensity])
  const parallaxY = useTransform(smoothProgress, [0, 1], [0, -200 * intensity])
  const complexOpacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const complexY = useTransform(smoothProgress, [0, 0.5, 1], [100 * intensity, 0, -100 * intensity])
  const complexScale = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0.9, 1.05, 1, 0.95])
  const complexRotateX = useTransform(smoothProgress, [0, 0.5, 1], [15, 0, -15])

  // Select the appropriate transforms based on type and direction
  const getSlideY = () => {
    if (direction === 'up') return slideYUp
    if (direction === 'down') return slideYDown
    return 0
  }

  const getSlideX = () => {
    if (direction === 'left') return slideXLeft
    if (direction === 'right') return slideXRight
    return 0
  }

  // Different animation types
  const animations: Record<string, any> = {
    fade: {
      opacity: fadeOpacity,
    },
    slide: {
      opacity: slideOpacity,
      y: getSlideY(),
      x: getSlideX(),
    },
    scale: {
      opacity: scaleOpacity,
      scale: scaleValue,
    },
    rotate: {
      opacity: rotateOpacity,
      rotate: rotateValue,
    },
    parallax: {
      y: parallaxY,
    },
    complex: {
      opacity: complexOpacity,
      y: complexY,
      scale: complexScale,
      rotateX: complexRotateX,
    },
  }

  return (
    <motion.div
      ref={ref}
      style={{
        ...animations[type],
        ...style,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

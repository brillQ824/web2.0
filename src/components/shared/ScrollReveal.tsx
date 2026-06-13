'use client'

import { motion, useInView, Variants } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
  variant?: 'fade' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scale' | 'blur' | 'rotateIn'
  delay?: number
  duration?: number
  initialOpacity?: number
  amount?: number
  once?: boolean
}

export default function ScrollReveal({
  children,
  className = '',
  style = {},
  variant = 'fade',
  delay = 0,
  duration = 0.8,
  initialOpacity = 0,
  amount = 0.3,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount })

  const variants: Record<string, Variants> = {
    fade: {
      hidden: { opacity: initialOpacity },
      visible: { opacity: 1 },
    },
    slideUp: {
      hidden: { opacity: initialOpacity, y: 60 },
      visible: { opacity: 1, y: 0 },
    },
    slideDown: {
      hidden: { opacity: initialOpacity, y: -60 },
      visible: { opacity: 1, y: 0 },
    },
    slideLeft: {
      hidden: { opacity: initialOpacity, x: 60 },
      visible: { opacity: 1, x: 0 },
    },
    slideRight: {
      hidden: { opacity: initialOpacity, x: -60 },
      visible: { opacity: 1, x: 0 },
    },
    scale: {
      hidden: { opacity: initialOpacity, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
    blur: {
      hidden: { opacity: initialOpacity, filter: 'blur(10px)' },
      visible: { opacity: 1, filter: 'blur(0px)' },
    },
    rotateIn: {
      hidden: { opacity: initialOpacity, scale: 0.8, rotateY: 90 },
      visible: { opacity: 1, scale: 1, rotateY: 0 },
    },
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants[variant]}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}

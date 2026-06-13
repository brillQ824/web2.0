'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  variant?: 'fadeUp' | 'fadeIn' | 'slideIn'
}

const variants = {
  fadeUp: {
    initial: { y: 24, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
  },
  fadeIn: {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
  },
  slideIn: {
    initial: { x: -16, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
  },
}

export default function AnimatedSection({ 
  children, 
  className = '', 
  delay = 0,
  variant = 'fadeUp' 
}: AnimatedSectionProps) {
  const shouldReduceMotion = useReducedMotion()
  
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial={variants[variant].initial}
      whileInView={variants[variant].whileInView}
      viewport={{ once: true, amount: 0.25, margin: '-10% 0px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}


'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ReactNode } from 'react'

interface StaggerContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
}

export default function StaggerContainer({ 
  children, 
  className = '',
  staggerDelay = 0.06 
}: StaggerContainerProps) {
  const shouldReduceMotion = useReducedMotion()
  
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        staggerChildren: staggerDelay
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}


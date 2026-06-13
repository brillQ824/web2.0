'use client'

import { useRef, ReactNode } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ParallaxWrapperProps {
  children: ReactNode
  speed?: number
  className?: string
  style?: React.CSSProperties
}

export default function ParallaxWrapper({
  children,
  speed = 0.5,
  className = '',
  style = {},
}: ParallaxWrapperProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50 * speed])

  return (
    <motion.div ref={ref} style={{ ...style, y }} className={className}>
      {children}
    </motion.div>
  )
}

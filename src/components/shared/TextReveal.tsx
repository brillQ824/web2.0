'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface TextRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  stagger?: number
  splitBy?: 'line' | 'word' | 'char'
}

export default function TextReveal({
  children,
  className = '',
  delay = 0,
  stagger = 0.05,
  splitBy = 'line',
}: TextRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  // Convert children to string for splitting
  const text = typeof children === 'string' ? children : String(children)

  // Split text based on splitBy prop
  const getElements = () => {
    if (splitBy === 'line') {
      return text.split('\n').filter(line => line.trim())
    } else if (splitBy === 'word') {
      return text.split(' ').filter(word => word.trim())
    } else {
      return text.split('').filter(char => char.trim())
    }
  }

  const elements = getElements()

  return (
    <div ref={ref} className={className} style={{ display: 'flex', flexDirection: 'column', gap: splitBy === 'line' ? '0' : '0.25em' }}>
      {elements.map((element, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.8,
            delay: delay + index * stagger,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ display: splitBy === 'line' ? 'block' : 'inline-block' }}
        >
          {element}
          {splitBy === 'word' && ' '}
        </motion.div>
      ))}
    </div>
  )
}

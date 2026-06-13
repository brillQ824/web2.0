'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface TextSplitAnimationProps {
  text: string
  type?: 'words' | 'chars' | 'lines'
  stagger?: number
  delay?: number
  duration?: number
  className?: string
  style?: React.CSSProperties
  once?: boolean
}

export default function TextSplitAnimation({
  text,
  type = 'words',
  stagger = 0.03,
  delay = 0,
  duration = 0.6,
  className = '',
  style = {},
  once = true,
}: TextSplitAnimationProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: 0.3 })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: 90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const splitText = () => {
    if (type === 'words') {
      return text.split(' ').map((word, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            overflow: 'hidden',
            marginRight: '0.3em',
          }}
        >
          <motion.span
            variants={itemVariants}
            style={{
              display: 'inline-block',
              transformOrigin: 'left bottom',
            }}
          >
            {word}
          </motion.span>
        </span>
      ))
    }

    if (type === 'chars') {
      return text.split('').map((char, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            overflow: 'hidden',
          }}
        >
          <motion.span
            variants={itemVariants}
            style={{
              display: 'inline-block',
              transformOrigin: 'center bottom',
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        </span>
      ))
    }

    if (type === 'lines') {
      return text.split('\n').map((line, i) => (
        <div
          key={i}
          style={{
            overflow: 'hidden',
            display: 'block',
          }}
        >
          <motion.div
            variants={itemVariants}
            style={{
              display: 'inline-block',
              transformOrigin: 'left bottom',
            }}
          >
            {line}
          </motion.div>
        </div>
      ))
    }
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        ...style,
        perspective: '1000px',
      }}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      {splitText()}
    </motion.div>
  )
}

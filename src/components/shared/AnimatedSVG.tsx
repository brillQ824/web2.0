'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface AnimatedSVGProps {
  children: React.ReactNode
  viewBox?: string
  width?: string | number
  height?: string | number
  className?: string
  style?: React.CSSProperties
  delay?: number
}

export default function AnimatedSVG({
  children,
  viewBox = '0 0 24 24',
  width = 24,
  height = 24,
  className = '',
  style = {},
  delay = 0,
}: AnimatedSVGProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.svg
      ref={ref}
      viewBox={viewBox}
      width={width}
      height={height}
      className={className}
      style={style}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.svg>
  )
}

// Animated Path component
export function AnimatedPath({
  d,
  stroke = 'currentColor',
  strokeWidth = 2,
  fill = 'none',
  delay = 0,
  duration = 1.5,
}: {
  d: string
  stroke?: string
  strokeWidth?: number
  fill?: string
  delay?: number
  duration?: number
}) {
  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          duration,
          ease: [0.22, 1, 0.36, 1],
          delay,
        },
        opacity: {
          duration: 0.3,
          delay,
        },
      },
    },
  }

  return (
    <motion.path
      d={d}
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      variants={pathVariants}
    />
  )
}

// Animated Circle component
export function AnimatedCircle({
  cx,
  cy,
  r,
  stroke = 'currentColor',
  strokeWidth = 2,
  fill = 'none',
  delay = 0,
  duration = 1,
}: {
  cx: number
  cy: number
  r: number
  stroke?: string
  strokeWidth?: number
  fill?: string
  delay?: number
  duration?: number
}) {
  const circleVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          duration,
          ease: [0.22, 1, 0.36, 1],
          delay,
        },
        opacity: {
          duration: 0.3,
          delay,
        },
      },
    },
  }

  return (
    <motion.circle
      cx={cx}
      cy={cy}
      r={r}
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill={fill}
      variants={circleVariants}
    />
  )
}

// Animated Polyline component
export function AnimatedPolyline({
  points,
  stroke = 'currentColor',
  strokeWidth = 2,
  fill = 'none',
  delay = 0,
  duration = 1.2,
}: {
  points: string
  stroke?: string
  strokeWidth?: number
  fill?: string
  delay?: number
  duration?: number
}) {
  const polylineVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          duration,
          ease: [0.22, 1, 0.36, 1],
          delay,
        },
        opacity: {
          duration: 0.3,
          delay,
        },
      },
    },
  }

  return (
    <motion.polyline
      points={points}
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      variants={polylineVariants}
    />
  )
}

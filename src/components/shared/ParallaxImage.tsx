'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import ClipPathImage from './ClipPathImage'

interface ParallaxImageProps {
  gradient?: string
  src?: string
  speed?: number
  className?: string
  style?: React.CSSProperties
}

export default function ParallaxImage({
  gradient,
  src,
  speed = 0.5,
  className = '',
  style = {},
}: ParallaxImageProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 30}%`])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.2])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.6, 1, 1, 0.6])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        height: '100%',
        ...style,
      }}
    >
      <motion.div
        style={{
          y,
          scale,
          opacity,
          width: '100%',
          height: '120%',
          position: 'absolute',
          top: '-10%',
          left: 0,
        }}
      >
        <ClipPathImage gradient={gradient} src={src} />
      </motion.div>
    </div>
  )
}

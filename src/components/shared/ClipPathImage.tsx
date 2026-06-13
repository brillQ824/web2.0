'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

interface ClipPathImageProps {
  src?: string
  alt?: string
  gradient?: string
  className?: string
  style?: React.CSSProperties
}

export default function ClipPathImage({ src, alt = '', gradient, className = '', style = {} }: ClipPathImageProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      className={className}
      aria-hidden="true"
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        background: src ? undefined : (gradient || '#1a1a1a'),
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'saturate(0.75)',
        transition: 'clip-path 0.8s cubic-bezier(0.22, 1, 0.36, 1), filter 0.3s ease',
        clipPath: isInView ? 'inset(0 0 0 0)' : 'inset(100% 50% 0 50%)',
        ...style
      }}
      whileHover={{
        filter: 'saturate(1)',
        clipPath: 'inset(0 0 0 0)'
      }}
    >
      {src && (
        <Image
          src={src}
          alt={alt}
          fill
          role={alt ? undefined : 'presentation'}
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      )}
    </motion.div>
  )
}

'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface BlurImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  style?: React.CSSProperties
  blurDataURL?: string
}

export default function BlurImage({
  src,
  alt,
  width,
  height,
  className = '',
  style = {},
  blurDataURL,
}: BlurImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        overflow: 'hidden',
        ...style,
      }}
    >
      {/* Blur placeholder */}
      {blurDataURL && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isLoaded ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${blurDataURL})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(20px)',
            transform: 'scale(1.1)',
          }}
        />
      )}

      {/* Actual image */}
      <motion.img
        src={src}
        alt={alt}
        width={width}
        height={height}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        onLoad={() => setIsLoaded(true)}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
      />

      {/* Loading shimmer */}
      {!isLoaded && !blurDataURL && (
        <motion.div
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(90deg, transparent 0%, rgba(178, 158, 82, 0.1) 50%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />
      )}
    </div>
  )
}

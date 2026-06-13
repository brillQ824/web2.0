'use client'

import { motion } from 'framer-motion'

interface LoadingSpinnerProps {
  size?: number
  color?: string
  type?: 'circle' | 'dots' | 'bars' | 'pulse'
}

export default function LoadingSpinner({
  size = 40,
  color = 'var(--color-primary)',
  type = 'circle',
}: LoadingSpinnerProps) {
  if (type === 'circle') {
    return (
      <motion.div
        style={{
          width: size,
          height: size,
          border: `3px solid rgba(178, 158, 82, 0.1)`,
          borderTop: `3px solid ${color}`,
          borderRadius: '50%',
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    )
  }

  if (type === 'dots') {
    const dotVariants = {
      animate: (i: number) => ({
        y: [0, -15, 0],
        transition: {
          duration: 0.6,
          repeat: Infinity,
          delay: i * 0.1,
          ease: [0.22, 1, 0.36, 1],
        },
      }),
    }

    return (
      <div
        style={{
          display: 'flex',
          gap: size * 0.2,
          alignItems: 'center',
        }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            custom={i}
            variants={dotVariants}
            animate="animate"
            style={{
              width: size * 0.25,
              height: size * 0.25,
              borderRadius: '50%',
              backgroundColor: color,
            }}
          />
        ))}
      </div>
    )
  }

  if (type === 'bars') {
    const barVariants = {
      animate: (i: number) => ({
        scaleY: [0.3, 1, 0.3],
        transition: {
          duration: 0.8,
          repeat: Infinity,
          delay: i * 0.1,
          ease: [0.22, 1, 0.36, 1],
        },
      }),
    }

    return (
      <div
        style={{
          display: 'flex',
          gap: size * 0.15,
          alignItems: 'center',
          height: size,
        }}
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            custom={i}
            variants={barVariants}
            animate="animate"
            style={{
              width: size * 0.12,
              height: '100%',
              backgroundColor: color,
              transformOrigin: 'center',
            }}
          />
        ))}
      </div>
    )
  }

  if (type === 'pulse') {
    return (
      <motion.div
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          backgroundColor: color,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [1, 0.5, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
    )
  }

  return null
}

// Full page loading overlay
export function LoadingOverlay({ message = 'Loading...' }: { message?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        backdropFilter: 'blur(6px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px',
        zIndex: 9999,
      }}
    >
      <LoadingSpinner size={50} type="circle" />
      {message && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            color: 'var(--color-light)',
            fontSize: '14px',
            fontWeight: 300,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
          }}
        >
          {message}
        </motion.p>
      )}
    </motion.div>
  )
}

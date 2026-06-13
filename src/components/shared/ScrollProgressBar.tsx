'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <>
      {/* Main progress bar */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          backgroundColor: 'var(--color-primary)',
          transformOrigin: '0%',
          scaleX,
          zIndex: 10000,
          boxShadow: '0 0 10px rgba(178, 158, 82, 0.5)',
        }}
      />

      {/* Glow effect layer */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '8px',
          background: 'linear-gradient(90deg, var(--color-primary) 0%, rgba(178, 158, 82, 0.4) 100%)',
          transformOrigin: '0%',
          scaleX,
          zIndex: 9999,
          filter: 'blur(6px)',
          opacity: 0.6,
        }}
      />
    </>
  )
}

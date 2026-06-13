'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const { scrollYProgress } = useScroll()

  const circumference = 2 * Math.PI * 24
  const springProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  })
  const strokeDashoffset = useTransform(
    springProgress,
    [0, 1],
    [circumference, 0]
  )

  useEffect(() => {
    let ticking = false

    const toggleVisibility = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 500) {
            setIsVisible(true)
          } else {
            setIsVisible(false)
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', toggleVisibility, { passive: true })
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          style={{ position: 'fixed', bottom: '40px', right: '40px', zIndex: 1000 }}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Progress ring SVG */}
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%) rotate(-90deg)',
              pointerEvents: 'none',
            }}
          >
            {/* Background circle */}
            <circle
              cx="32"
              cy="32"
              r="24"
              stroke="rgba(178, 158, 82, 0.2)"
              strokeWidth="3"
              fill="none"
            />
            {/* Progress circle */}
            <motion.circle
              cx="32"
              cy="32"
              r="24"
              stroke="var(--color-primary)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              style={{
                strokeDasharray: circumference,
                strokeDashoffset,
              }}
            />
          </svg>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              position: 'relative',
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              border: '1px solid rgba(178, 158, 82, 0.3)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
            aria-label="Back to top"
          >
            {/* Glow effect on hover */}
            <motion.div
              style={{
                position: 'absolute',
                inset: -8,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(178, 158, 82, 0.3) 0%, transparent 70%)',
                opacity: 0,
                pointerEvents: 'none',
              }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />

            <motion.svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--color-primary)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{ y: isHovered ? -2 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <path d="M12 19V5M5 12l7-7 7 7" />
            </motion.svg>
          </motion.button>

          {/* Tooltip */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2 }}
                style={{
                  position: 'absolute',
                  right: '72px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  padding: '8px 16px',
                  backgroundColor: 'rgba(0, 0, 0, 0.9)',
                  border: '1px solid rgba(178, 158, 82, 0.3)',
                  borderRadius: '4px',
                  color: 'var(--color-primary)',
                  fontSize: '12px',
                  fontWeight: 400,
                  whiteSpace: 'nowrap',
                  pointerEvents: 'none',
                  backdropFilter: 'blur(10px)',
                }}
              >
                Back to top
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

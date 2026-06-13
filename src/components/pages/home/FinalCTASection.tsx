'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Link from 'next/link'
import type { Locale } from '@/i18n/config'

export default function FinalCTASection({ lang = 'pl' }: { lang?: Locale }) {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.5 })
  const [isButtonHovered, setIsButtonHovered] = useState(false)

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-black flex items-center justify-center"
      style={{ minHeight: '60vh' }}
    >
      {/* Background with animated gradient orbs */}
      <div className="absolute inset-0 bg-black" />

      <motion.div
        className="absolute"
        style={{
          width: '700px',
          height: '700px',
          top: '15%',
          left: '15%',
          background: 'radial-gradient(circle, rgba(178, 158, 82, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(100px)',
          zIndex: 0,
        }}
        animate={{
          x: [0, 60, 0],
          y: [0, 40, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute"
        style={{
          width: '600px',
          height: '600px',
          bottom: '20%',
          right: '20%',
          background: 'radial-gradient(circle, rgba(178, 158, 82, 0.12) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(90px)',
          zIndex: 0,
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 3,
        }}
      />

      <div
        className="relative z-10 w-full text-center"
        style={{
          padding: 'clamp(60px, 10vh, 100px) clamp(24px, 5vw, 80px)',
          maxWidth: '1580px',
          margin: '0 auto',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h2
            className="text-white leading-tight mb-10"
            style={{
              fontSize: 'clamp(36px, 5vw, 64px)',
              lineHeight: 1.2,
              fontWeight: 400,
              letterSpacing: '-0.03em',
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {lang === 'pl' ? 'Gotowy na transformację' : 'Ready for transformation'}{' '}
            <motion.span
              style={{ color: 'var(--color-primary)', display: 'inline-block' }}
              animate={isInView ? { scale: [1, 1.05, 1] } : { scale: 1 }}
              transition={{ duration: 2, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              {lang === 'pl' ? 'dzięki AI' : 'with AI'}
            </motion.span>
            ?
          </motion.h2>

          <motion.p
            className="text-gray-400 mb-10 mx-auto"
            style={{
              fontSize: 'clamp(16px, 1.3vw, 20px)',
              fontWeight: 300,
              lineHeight: 1.7,
              maxWidth: '600px',
              opacity: 0.9,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 0.9, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {lang === 'pl'
              ? 'Porozmawiajmy o realnym wdrożeniu AI w Twojej firmie'
              : "Let's discuss real AI implementation in your company"}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link href={`/${lang}/kontakt`}>
              <motion.button
                className="c-button-primary"
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={() => setIsButtonHovered(true)}
                onMouseLeave={() => setIsButtonHovered(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Button background shimmer effect */}
                <motion.div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%)',
                    pointerEvents: 'none',
                  }}
                  animate={{
                    x: isButtonHovered ? ['0%', '200%'] : '0%',
                  }}
                  transition={{
                    duration: 0.6,
                    ease: 'easeInOut',
                  }}
                />

                <motion.span
                  style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  {lang === 'pl' ? 'Rozpocznij Wdrożenie AI' : 'Start AI Implementation'}
                  <motion.svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    animate={{
                      x: isButtonHovered ? 4 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </motion.svg>
                </motion.span>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

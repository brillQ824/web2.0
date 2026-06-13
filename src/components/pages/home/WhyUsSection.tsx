'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const reasons = [
  {
    title: 'Business Impact & ROI',
    description: 'Koncentrujemy się na mierzalnych wynikach biznesowych. Każdy projekt AI jest oceniany przez pryzmat ROI - redukcja kosztów, wzrost przychodów, optymalizacja procesów. Nie budujemy technologii dla technologii, budujemy systemy, które zarabiają pieniądze.',
  },
  {
    title: 'Full-Cycle AI Development',
    description: 'Od strategii i proof-of-concept, przez MVP i deployment, po monitoring i skalowanie - zapewniamy end-to-end delivery. Jeden zespół, jeden punkt kontaktu, pełna odpowiedzialność za wynik biznesowy.',
  },
  {
    title: 'Proven Track Record',
    description: '300+ projektów AI wdrożonych do produkcji. Real-world deployments w fintech, e-commerce, healthcare i manufacturing. Production-ready solutions ze skalowalnymi architekturami, które działają pod prawdziwym obciążeniem.',
  },
  {
    title: 'Interdisciplinary Expertise',
    description: 'Jeden zespół, który łączy AI/ML engineering, data science, MLOps i biznesowe doświadczenie. Łączymy najnowsze algorytmy AI z realiami biznesu: unit economics i CLV.',
  },
  {
    title: 'Research & Development',
    description: 'Współpraca z wiodącymi ośrodkami badawczymi i dostęp do cutting-edge research pozwala nam implementować najnowsze osiągnięcia AI zanim staną się mainstreamem. First-mover advantage dla naszych klientów.',
  },
  {
    title: 'Innovation First',
    description: 'Inwestujemy w R&D nowatorskich technologii AI - custom LLM training, multi-agent systems, advanced MLOps. Gdy konkurencja czyta o nowej technologii, my już ją wdrażamy u klientów.',
  },
]

export default function WhyUsSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-black"
      style={{
        padding: 'clamp(100px, 15vh, 140px) clamp(24px, 5vw, 100px)',
      }}
    >
      {/* Background gradient */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 opacity-20"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(178, 158, 82, 0.12) 0%, transparent 70%)',
          filter: 'blur(80px)',
          zIndex: 0,
        }}
      />

      <div style={{ maxWidth: '1580px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-24"
        >
          <h2
            className="text-white"
            style={{
              fontSize: 'clamp(36px, 5vw, 64px)',
              fontWeight: 400,
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
            }}
          >
            Dlaczego{' '}
            <span style={{ color: 'var(--color-primary)' }}>brillQ</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10 }}
              className="relative group"
              style={{
                padding: '48px 40px',
                border: '1px solid rgba(112, 112, 112, 0.15)',
                transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                cursor: 'pointer',
                overflow: 'hidden',
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background gradient on hover */}
              <motion.div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'radial-gradient(circle at center, rgba(178, 158, 82, 0.08) 0%, transparent 70%)',
                  opacity: 0,
                  pointerEvents: 'none',
                }}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.5 }}
              />

              {/* Corner accent */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: 0,
                  height: 0,
                  borderTop: '0px solid var(--color-primary)',
                  borderLeft: '0px solid transparent',
                }}
                animate={{
                  borderTopWidth: hoveredIndex === index ? '60px' : '0px',
                  borderLeftWidth: hoveredIndex === index ? '60px' : '0px',
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />

              {/* Top decorative line */}
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: '60px' } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.15 }}
                style={{
                  height: '2px',
                  backgroundColor: 'var(--color-primary)',
                  marginBottom: '32px',
                  opacity: 0.8,
                  position: 'relative',
                }}
              />
              <div style={{ position: 'relative' }}>
                <h3
                  className="text-white mb-5 group-hover:text-primary transition-colors duration-300"
                  style={{
                    fontSize: 'clamp(24px, 2.5vw, 32px)',
                    fontWeight: 400,
                    lineHeight: 1.2,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {reason.title}
                </h3>
                <p
                  className="text-gray-400"
                  style={{
                    fontSize: 'clamp(16px, 1.2vw, 18px)',
                    fontWeight: 300,
                    lineHeight: 1.8,
                    opacity: 0.9,
                  }}
                >
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import type { Locale } from '@/i18n/config'

const processSteps = [
  {
    number: '01',
    title: 'Intencja & Przestrzeń Problemowa',
    titleEn: 'Intent & Problem Space',
    description: 'Definiujemy czego potrzebujesz — nie jak to zrobić. Rozbijamy problem biznesowy na przestrzeń decyzyjną. Określamy sukces, nie proces. To nie audyt, to projektowanie intencji.',
    descriptionEn: 'We define what you need — not how to do it. We break down the business problem into decision space. We define success, not process. This is not an audit, it\'s intent design.',
    badge: 'Strategic Layer',
    badgeEn: 'Strategic Layer',
  },
  {
    number: '02',
    title: 'Architektura Decyzyjna',
    titleEn: 'Decision Architecture',
    description: 'Projektujemy jak problem będzie rozwiązywany: jakie swarmy, jakie zadania, jakie zależności. Nie szacujemy czasu ludzi — szacujemy złożoność myślenia. To blueprint orkiestracji, nie roadmapa projektu.',
    descriptionEn: 'We design how the problem will be solved: which swarms, which tasks, which dependencies. We don\'t estimate people\'s time — we estimate thinking complexity. This is orchestration blueprint, not project roadmap.',
    badge: 'Orchestration Layer',
    badgeEn: 'Orchestration Layer',
  },
  {
    number: '03',
    title: 'Dynamiczne Tworzenie Swarmów',
    titleEn: 'Dynamic Swarm Formation',
    description: 'Tworzymy dedykowane zespoły agentów AI pod Twój konkretny problem. Każdy swarm powstaje z konkretną funkcją, narzędziami i kontekstem. Nie przydzielamy ludzi — projektujemy autonomiczne struktury.',
    descriptionEn: 'We create dedicated AI agent teams for your specific problem. Each swarm is formed with specific function, tools, and context. We don\'t assign people — we design autonomous structures.',
    badge: 'Execution Layer',
    badgeEn: 'Execution Layer',
  },
  {
    number: '04',
    title: 'Równoległa Egzekucja',
    titleEn: 'Parallel Execution',
    description: 'Swarmy działają równolegle i autonomicznie. Eksplorują rozwiązania, testują hipotezy, analizują dane — jednocześnie. Nie czekają w kolejce. Nie mają daily standupów. Po prostu działają.',
    descriptionEn: 'Swarms work in parallel and autonomously. They explore solutions, test hypotheses, analyze data — simultaneously. They don\'t wait in queue. They don\'t have daily standups. They just work.',
    badge: 'Autonomous',
    badgeEn: 'Autonomous',
  },
  {
    number: '05',
    title: 'Orkiestracja & Dostawa Decyzji',
    titleEn: 'Orchestration & Decision Delivery',
    description: 'Integrujemy wyniki wszystkich swarmów w spójną rekomendację lub działający system. Dostarczamy decyzję, nie raport. Produkt, nie dokumentację. Działające rozwiązanie, nie plan wdrożenia.',
    descriptionEn: 'We integrate results from all swarms into coherent recommendation or working system. We deliver decision, not report. Product, not documentation. Working solution, not implementation plan.',
    badge: 'Integration',
    badgeEn: 'Integration',
  },
]

export default function ProcessSection({ lang = 'pl' }: { lang?: Locale }) {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-black"
      style={{
        padding: 'clamp(100px, 15vh, 140px) clamp(24px, 5vw, 100px)',
        borderTop: '1px solid rgba(112, 112, 112, 0.15)',
      }}
    >
      {/* Background gradient */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 opacity-15"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(178, 158, 82, 0.1) 0%, transparent 70%)',
          filter: 'blur(100px)',
          zIndex: 0,
        }}
      />

      <div style={{ maxWidth: '1580px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <p
            className="text-primary mb-4"
            style={{
              fontSize: 'clamp(14px, 1.2vw, 16px)',
              fontWeight: 400,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              opacity: 0.9,
            }}
          >
            {lang === 'pl' ? 'Liquid Enterprise w działaniu' : 'Liquid Enterprise in action'}
          </p>
          <h2
            className="text-white"
            style={{
              fontSize: 'clamp(36px, 5vw, 64px)',
              fontWeight: 400,
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
            }}
          >
            {lang === 'pl' ? (
              <>
                Jak wygląda współpraca z <span style={{ color: 'var(--color-primary)' }}>brillQ</span>?
              </>
            ) : (
              <>
                How does collaboration with <span style={{ color: 'var(--color-primary)' }}>brillQ</span> work?
              </>
            )}
          </h2>
        </motion.div>

        {/* Process Steps */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -50, scale: 0.95 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ x: 10 }}
              className="relative group"
              style={{
                padding: '40px 48px',
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
                  background: 'radial-gradient(circle at left center, rgba(178, 158, 82, 0.05) 0%, transparent 70%)',
                  opacity: 0,
                  pointerEvents: 'none',
                }}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.5 }}
              />

              {/* Left border accent */}
              <motion.div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  width: '3px',
                  height: 0,
                  backgroundColor: 'var(--color-primary)',
                }}
                animate={{
                  height: hoveredIndex === index ? '100%' : '0%',
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />

              <div className="relative flex gap-8 items-start">
                {/* Number */}
                <motion.div
                  style={{
                    fontSize: 'clamp(48px, 6vw, 72px)',
                    fontWeight: 300,
                    color: 'rgba(178, 158, 82, 0.2)',
                    lineHeight: 1,
                    minWidth: '100px',
                  }}
                  animate={{
                    color: hoveredIndex === index ? 'rgba(178, 158, 82, 0.4)' : 'rgba(178, 158, 82, 0.2)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {step.number}
                </motion.div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <div className="flex items-center gap-3 mb-4">
                    <h3
                      className="text-white group-hover:text-primary transition-colors duration-500"
                      style={{
                        fontSize: 'clamp(24px, 2.5vw, 32px)',
                        fontWeight: 400,
                        lineHeight: 1.2,
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {lang === 'pl' ? step.title : step.titleEn}
                    </h3>
                    <span
                      className="text-primary text-xs uppercase tracking-wider px-3 py-1 rounded-full"
                      style={{
                        background: 'rgba(178, 158, 82, 0.1)',
                        border: '1px solid rgba(178, 158, 82, 0.3)',
                        fontSize: 'clamp(10px, 0.85vw, 11px)',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {lang === 'pl' ? step.badge : step.badgeEn}
                    </span>
                  </div>
                  <p
                    className="text-gray-400"
                    style={{
                      fontSize: 'clamp(16px, 1.2vw, 18px)',
                      fontWeight: 300,
                      lineHeight: 1.8,
                      opacity: 0.9,
                    }}
                  >
                    {lang === 'pl' ? step.description : step.descriptionEn}
                  </p>
                </div>

                {/* Arrow indicator */}
                <motion.div
                  style={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    x: hoveredIndex === index ? 0 : -10,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-primary)"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </motion.div>
              </div>

              {/* Connection line to next step */}
              {index < processSteps.length - 1 && (
                <div
                  style={{
                    position: 'absolute',
                    left: '72px',
                    bottom: '-24px',
                    width: '2px',
                    height: '24px',
                    background: 'linear-gradient(to bottom, rgba(178, 158, 82, 0.3), transparent)',
                    zIndex: 10,
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

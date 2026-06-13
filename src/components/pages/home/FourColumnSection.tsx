'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

type Column = {
  icon: JSX.Element
  title: string
  slug: string
  description: string
  businessImpact: string
}

const columns: Column[] = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: 'Large Language Models',
    slug: 'llm',
    description: 'Fine-tuning i deployment LLM. RAG, prompt engineering, i custom embeddings dla aplikacji enterprise.',
    businessImpact: 'Redukcja kosztów operacyjnych, automatyzacja procesów decyzyjnych, skalowalne systemy wiedzy.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5">
        <path d="M12 2v20M2 12h20" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
    title: 'Agentic AI',
    slug: 'agentic-ai',
    description: 'Budowa autonomicznych systemów AI. Multi-agent frameworks, planning, reasoning i decision-making systems.',
    businessImpact: 'Automatyzacja złożonych procesów, redukcja czasu reakcji, zwiększenie skalowalności operacji.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
        <polyline points="7.5 19.79 7.5 14.6 3 12" />
        <polyline points="21 12 16.5 14.6 16.5 19.79" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    title: 'Generative AI',
    slug: 'generative-ai',
    description: 'GANs, VAEs, Diffusion Models. Generowanie obrazów, tekstu, audio. Creative AI i content generation.',
    businessImpact: 'Przyspieszenie kreacji contentu, personalizacja w skali, nowe modele biznesowe oparte na AI.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
    title: 'Cloud Computing',
    slug: 'cloud-computing',
    description: 'Skalowalne rozwiązania w chmurze. AWS, Azure, GCP. Serverless, microservices, cloud-native architectures.',
    businessImpact: 'Optymalizacja kosztów infrastruktury, elastyczne skalowanie, wysoka dostępność systemów.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    title: 'MLOps & Infrastructure',
    slug: 'mlops',
    description: 'CI/CD dla ML, model versioning, monitoring. Kubernetes, Docker, cloud deployment (AWS, GCP, Azure).',
    businessImpact: 'Skrócenie czasu wdrożenia modeli, zapewnienie ciągłości biznesowej, redukcja kosztów utrzymania.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 3v18" />
        <path d="M15 3v18" />
      </svg>
    ),
    title: 'Computer Vision',
    slug: 'computer-vision',
    description: 'Detekcja obiektów, segmentacja, rozpoznawanie twarzy. Real-time video analytics i image processing.',
    businessImpact: 'Automatyzacja kontroli jakości, zwiększenie bezpieczeństwa, optymalizacja procesów produkcyjnych.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
    title: 'Natural Language Processing',
    slug: 'nlp',
    description: 'Analiza tekstu, sentiment analysis, NER, topic modeling. Chatboty i systemy dialogowe oparte na NLP.',
    businessImpact: 'Automatyzacja obsługi klienta, analiza opinii rynku, zwiększenie satysfakcji użytkowników.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" />
        <path d="M2 17L12 22L22 17" />
        <path d="M2 12L12 17L22 12" />
      </svg>
    ),
    title: 'Deep Learning',
    slug: 'deep-learning',
    description: 'Projektowanie i trening głębokich sieci neuronowych. CNN, RNN, Transformers dla zadań wizyjnych i sekwencyjnych.',
    businessImpact: 'Przewaga konkurencyjna przez zaawansowaną analitykę, nowe możliwości produktowe.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5">
        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: 'Machine Learning',
    slug: 'machine-learning',
    description: 'Zaawansowane modele ML dla predykcji, klasyfikacji i analiz. Optymalizacja algorytmów i deployment.',
    businessImpact: 'Lepsze decyzje biznesowe oparte na danych, predykcja trendów, optymalizacja revenue.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: 'AI Training & Fine-tuning',
    slug: 'ai-training',
    description: 'Custom training pipelines, transfer learning, model compression. Distributed training i hyperparameter optimization.',
    businessImpact: 'Modele dopasowane do specyfiki biznesu, zwiększona dokładność predykcji, ROI z AI.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: 'Reinforcement Learning',
    slug: 'reinforcement-learning',
    description: 'Agents uczące się przez interakcję. Q-learning, Policy Gradients, Actor-Critic. Aplikacje w robotyce i grach.',
    businessImpact: 'Optymalizacja strategii biznesowych, autonomiczne systemy decyzyjne, innowacyjne produkty.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m5.08 5.08l4.24 4.24M1 12h6m6 0h6M4.22 19.78l4.24-4.24m5.08-5.08l4.24-4.24" />
      </svg>
    ),
    title: 'AI Research & Consulting',
    slug: 'ai-research',
    description: 'Badania nad nowymi architekturami. Strategie AI, audyty techniczne, roadmapy wdrożeniowe i doradztwo.',
    businessImpact: 'Strategiczne wykorzystanie AI, unikanie kosztownych błędów, przewaga first-mover advantage.',
  },
]

export default function FourColumnSection({ lang = 'pl' }: { lang?: string }) {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const INITIAL_COUNT = 4
  const [showAll, setShowAll] = useState(false)
  const visibleColumns = showAll ? columns : columns.slice(0, INITIAL_COUNT)

  return (
    <section
      id="competences-section"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-black"
      style={{
        padding: 'clamp(100px, 15vh, 140px) 0',
        marginTop: '-10vh',
      }}
    >
      {/* Horizontal scrolling container (mobile) / Grid (desktop) */}
      <div
        className="four-column-container"
        style={{
          display: 'flex',
          gap: '12px',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          paddingLeft: '24px',
          paddingRight: '24px',
        }}
      >
        {visibleColumns.map((column, index) => {
          const delay = (showAll && index >= INITIAL_COUNT)
            ? (index - INITIAL_COUNT) * 0.08
            : index * 0.15
          return (
          <div
            key={column.slug}
            style={{ textDecoration: 'none', display: 'block' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
              transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="column-item group"
              style={{
                flex: '0 0 calc(25% - 9px)',
                minWidth: 'min(260px, calc(100vw - 48px))',
                scrollSnapAlign: 'start',
                border: '1px solid rgba(112, 112, 112, 0.15)',
                padding: '48px 32px 40px 32px',
                transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                position: 'relative',
                cursor: 'default',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background gradient on hover */}
              <motion.div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'radial-gradient(circle at top right, rgba(178, 158, 82, 0.08) 0%, transparent 70%)',
                  opacity: 0,
                  pointerEvents: 'none',
                }}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.4 }}
              />

              {/* Vertical line accent */}
              <motion.div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '2px',
                  height: 0,
                  backgroundColor: 'var(--color-primary)',
                }}
                animate={{
                  height: hoveredIndex === index ? '60%' : 0,
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              />

              {/* Top border accent */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: 0,
                  height: '1px',
                  backgroundColor: 'var(--color-primary)',
                }}
                animate={{
                  width: hoveredIndex === index ? '100%' : 0,
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />

              {/* Icon with rotation on hover */}
              <motion.div
                style={{
                  marginBottom: '24px',
                  transformOrigin: '50% calc(50% - 7px)',
                }}
                animate={{
                  rotate: hoveredIndex === index ? 90 : 0,
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {column.icon}
              </motion.div>

              {/* Title */}
              <h3
                style={{
                  fontSize: '24px',
                  fontWeight: 400,
                  color: 'var(--color-light)',
                  marginBottom: '16px',
                  letterSpacing: '-0.01em',
                }}
              >
                {column.title}
              </h3>

              {/* Technical Description */}
              <p
                style={{
                  fontSize: '15px',
                  fontWeight: 300,
                  color: 'var(--color-gray4)',
                  lineHeight: 1.8,
                  marginBottom: '16px',
                }}
              >
                {column.description}
              </p>

              {/* Business Impact - Efekt biznesowy */}
              <p
                style={{
                  fontSize: '14px',
                  fontWeight: 400,
                  color: 'var(--color-primary)',
                  lineHeight: 1.6,
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(178, 158, 82, 0.15)',
                }}
              >
                {column.businessImpact}
              </p>
            </motion.div>
          </div>
          )
        })}
      </div>

      {/* Show more / collapse button */}
      {columns.length > INITIAL_COUNT && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{ textAlign: 'center', marginTop: '48px', paddingLeft: '24px', paddingRight: '24px' }}
        >
          <button
            onClick={() => setShowAll(!showAll)}
            style={{
              border: '1px solid rgba(178, 158, 82, 0.4)',
              background: 'transparent',
              color: 'var(--color-primary)',
              padding: '14px 48px',
              fontSize: '12px',
              fontWeight: 400,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(178, 158, 82, 0.8)'
              e.currentTarget.style.background = 'rgba(178, 158, 82, 0.05)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(178, 158, 82, 0.4)'
              e.currentTarget.style.background = 'transparent'
            }}
          >
            {showAll
              ? (lang === 'pl' ? '↑ Zwiń kompetencje' : '↑ Collapse')
              : (lang === 'pl'
                  ? `Pokaż wszystkie kompetencje (${columns.length - INITIAL_COUNT} więcej) ↓`
                  : `Show all competences (${columns.length - INITIAL_COUNT} more) ↓`)}
          </button>
        </motion.div>
      )}

      {/* Responsive styles */}
      <style jsx>{`
        /* Mobile: Horizontal scroll, 1 card per screen */
        @media (max-width: 640px) {
          .four-column-container {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          .column-item {
            flex: 0 0 calc(100% - 40px) !important;
            min-width: min(260px, calc(100vw - 48px)) !important;
          }
        }

        /* Small tablets: 2 columns */
        @media (min-width: 641px) and (max-width: 992px) {
          .four-column-container {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            max-width: var(--page-width) !important;
            margin: 0 auto !important;
            overflow-x: visible !important;
            padding-left: 32px !important;
            padding-right: 32px !important;
          }
          .column-item {
            flex: unset !important;
            min-width: auto !important;
          }
        }

        /* Medium tablets/laptops: 3 columns */
        @media (min-width: 993px) and (max-width: 1280px) {
          .four-column-container {
            display: grid !important;
            grid-template-columns: repeat(3, 1fr) !important;
            max-width: var(--page-width) !important;
            margin: 0 auto !important;
            overflow-x: visible !important;
          }
          .column-item {
            flex: unset !important;
            min-width: auto !important;
          }
        }

        /* Desktop: 4 columns */
        @media (min-width: 1281px) {
          .four-column-container {
            display: grid !important;
            grid-template-columns: repeat(4, 1fr) !important;
            max-width: var(--page-width) !important;
            margin: 0 auto !important;
            overflow-x: visible !important;
          }
          .column-item {
            flex: unset !important;
            min-width: auto !important;
          }
        }
      `}</style>
    </section>
  )
}

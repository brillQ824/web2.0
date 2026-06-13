'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import type { Locale } from '@/i18n/config'

// status: 'certified' | 'compliant' | 'in-progress' | 'standard'
// 'certified'    — posiadamy certyfikat z numerem i organem wystawiającym
// 'compliant'    — stosujemy się do regulacji prawnej (nie certyfikat)
// 'in-progress'  — certyfikacja w toku
// 'standard'     — stosujemy standard / metodologię w praktyce
const certifications = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'ISO 27001',
    description: 'Zarządzanie bezpieczeństwem informacji — certyfikacja w toku',
    status: 'in-progress' as const,
    statusLabel: 'W trakcie',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: 'SOC 2',
    description: 'Security & availability audit — proces wdrożenia',
    status: 'in-progress' as const,
    statusLabel: 'W trakcie',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'GDPR',
    description: 'Zgodność z rozporządzeniem EU 2016/679 o ochronie danych osobowych',
    status: 'compliant' as const,
    statusLabel: 'Zgodność',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
    title: 'ISO 9001',
    description: 'Standardy zarządzania jakością w procesach developerskich',
    status: 'in-progress' as const,
    statusLabel: 'W trakcie',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
        <circle cx="12" cy="8" r="1" />
      </svg>
    ),
    title: 'EU AI Act',
    description: 'Zgodność z rozporządzeniem UE 2024/1689 w sprawie sztucznej inteligencji',
    status: 'compliant' as const,
    statusLabel: 'Zgodność',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: 'IEEE AI Ethics',
    description: 'Wytyczne IEEE Ethically Aligned Design stosowane w projektach',
    status: 'standard' as const,
    statusLabel: 'Wytyczne',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: 'Responsible AI',
    description: 'Transparency, fairness i explainability we wszystkich wdrożeniach',
    status: 'standard' as const,
    statusLabel: 'Praktyki',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: 'Agile / Scrum',
    description: 'Metodologia pracy — certyfikowani Scrum Masterowie w zespole',
    status: 'standard' as const,
    statusLabel: 'Metodologia',
  },
]

const STATUS_COLORS: Record<string, string> = {
  certified: '#22c55e',
  compliant: '#3b82f6',
  'in-progress': '#f59e0b',
  standard: '#6b7280',
}

export default function PartnersSection({ lang = 'pl' }: { lang?: Locale }) {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section
      id="partners-section"
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{
        padding: 'clamp(60px, 8vh, 80px) clamp(24px, 5vw, 100px)',
        backgroundColor: 'rgba(178, 158, 82, 0.02)',
        borderTop: '1px solid rgba(112, 112, 112, 0.2)',
        borderBottom: '1px solid rgba(112, 112, 112, 0.2)',
      }}
    >
      <div style={{ maxWidth: '1580px', margin: '0 auto' }}>
        {/* Certifications */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: '11px',
              fontWeight: 400,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--color-gray4)',
              marginBottom: '32px',
              textAlign: 'center',
            }}
          >
            {lang === 'en' ? 'Standards & compliance' : 'Standardy i zgodność'}
          </motion.h3>

          {/* Unified certifications grid */}
          <div
            className="cert-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 'clamp(8px, 1vw, 12px)',
            }}
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  padding: '16px 14px',
                  border: '1px solid rgba(112, 112, 112, 0.2)',
                  textAlign: 'center',
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  opacity: cert.status === 'in-progress' ? 0.7 : 1,
                  transition: 'border-color 0.25s ease, background-color 0.25s ease, transform 0.25s ease, opacity 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(178, 158, 82, 0.5)'
                  e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
                  e.currentTarget.style.transform = 'translateY(-3px)'
                  e.currentTarget.style.opacity = '1'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(112, 112, 112, 0.2)'
                  e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.3)'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.opacity = cert.status === 'in-progress' ? '0.7' : '1'
                }}
              >
                <div style={{ color: cert.status === 'in-progress' ? 'rgba(178, 158, 82, 0.6)' : 'var(--color-primary)', marginBottom: '10px', display: 'flex', justifyContent: 'center' }}>
                  {cert.icon}
                </div>
                <h4 style={{ fontSize: '14px', fontWeight: 400, color: cert.status === 'in-progress' ? 'rgba(255,255,255,0.7)' : 'var(--color-light)', marginBottom: '4px' }}>
                  {cert.title}
                </h4>
                <p style={{ fontSize: '11px', fontWeight: 300, color: 'var(--color-gray4)', lineHeight: 1.5 }}>
                  {cert.description}
                </p>
                <p style={{ fontSize: '9px', fontWeight: 400, letterSpacing: '0.1em', textTransform: 'uppercase', color: STATUS_COLORS[cert.status], marginTop: '8px', opacity: 0.75 }}>
                  * {cert.statusLabel}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 1200px) {
          .cert-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }

        @media (max-width: 900px) {
          .cert-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 10px !important;
          }
        }

        @media (max-width: 600px) {
          .cert-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 8px !important;
          }
        }
      `}</style>
    </section>
  )
}

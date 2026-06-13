'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ExpandableTextProps {
  children: React.ReactNode
  previewHeight?: string
  buttonText?: string
  expandedText?: string
}

export default function ExpandableText({
  children,
  previewHeight = '120px',
  buttonText = 'Czytaj więcej',
  expandedText = 'Zwiń',
}: ExpandableTextProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="relative">
      {/* Content container with mask */}
      <motion.div
        className="expandable-content"
        initial={false}
        animate={{
          height: isExpanded ? 'auto' : previewHeight,
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* Mask gradient when collapsed */}
        {!isExpanded && (
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '80px',
              background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)',
              pointerEvents: 'none',
              zIndex: 1,
            }}
          />
        )}

        {/* Actual content */}
        <div style={{ position: 'relative', zIndex: 0 }}>
          {children}
        </div>
      </motion.div>

      {/* Expand/Collapse button */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-6"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          color: 'var(--color-primary)',
          fontSize: '14px',
          fontWeight: 400,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
          transition: 'gap 0.3s ease',
        }}
        whileHover={{ gap: '12px' }}
      >
        <span>{isExpanded ? expandedText : buttonText}</span>
        <motion.svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          animate={{ rotate: isExpanded ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <path d="M9 18l6-6-6-6" />
        </motion.svg>
      </motion.button>
    </div>
  )
}

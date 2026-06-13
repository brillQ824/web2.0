'use client'

import { useState } from 'react'
import Link from 'next/link'

interface ButtonProps {
  href?: string
  onClick?: () => void
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
  lang?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  ariaLabel?: string
  ariaDescribedBy?: string
}

export default function Button({
  href,
  onClick,
  children,
  variant = 'primary',
  className = '',
  lang = 'pl',
  disabled = false,
  type = 'button',
  ariaLabel,
  ariaDescribedBy
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative' as const,
    overflow: 'hidden',
    height: '50px',
    borderRadius: '32px',
    padding: '0 48px',
    fontSize: '14px',
    fontWeight: 500,
    letterSpacing: '0.05em',
    textTransform: 'uppercase' as const,
    transition: 'all 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
    cursor: 'pointer',
    border: 'none',
  }

  const variantStyles = variant === 'primary'
    ? {
        backgroundColor: 'var(--color-primary)',
        color: '#000',
      }
    : {
        backgroundColor: 'transparent',
        color: 'var(--color-primary)',
        border: '1px solid var(--color-primary)',
      }

  const splashStyles = {
    position: 'absolute' as const,
    bottom: isHovered ? '0' : 'calc(-50px)',
    left: '50%',
    transform: 'translateX(-50%)',
    width: isHovered ? 'calc(100% + 4px)' : '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: variant === 'primary' ? 'rgba(255, 255, 255, 0.2)' : 'var(--color-primary)',
    backdropFilter: 'invert(1) saturate(0)',
    transition: 'all 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
    pointerEvents: 'none' as const,
    zIndex: 0,
  }

  const content = (
    <>
      <div style={splashStyles} />
      <span style={{ position: 'relative', zIndex: 1 }}>{children}</span>
    </>
  )

  const combinedStyles = { ...baseStyles, ...variantStyles }

  if (href) {
    const prefixedHref = href.startsWith('/') && !href.startsWith(`/${lang}`) ? `/${lang}${href}` : href
    return (
      <Link
        href={prefixedHref}
        style={{
          ...combinedStyles,
          ...(disabled && {
            opacity: 0.5,
            cursor: 'not-allowed',
            pointerEvents: 'none' as const
          })
        }}
        className={className}
        onMouseEnter={() => !disabled && setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedBy}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
      >
        {content}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{
        ...combinedStyles,
        ...(disabled && {
          opacity: 0.5,
          cursor: 'not-allowed'
        })
      }}
      className={className}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
    >
      {content}
    </button>
  )
}

'use client'

interface VerticalLinesProps {
  left?: boolean
  right?: boolean
  height?: string
  className?: string
}

export default function VerticalLines({
  left = true,
  right = true,
  height = '75vh',
  className = '',
}: VerticalLinesProps) {
  return (
    <>
      {left && (
        <div
          className={className}
          style={{
            position: 'absolute',
            left: '24px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '1px',
            height,
            backgroundColor: 'var(--color-gray4)',
            opacity: 0.3,
          }}
        />
      )}
      {right && (
        <div
          className={className}
          style={{
            position: 'absolute',
            right: '24px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '1px',
            height,
            backgroundColor: 'var(--color-gray4)',
            opacity: 0.3,
          }}
        />
      )}
    </>
  )
}

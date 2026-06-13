import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#b29e52',
          50: '#faf8f0',
          100: '#f5f1e1',
          200: '#ebe3c3',
          300: '#e0d4a5',
          400: '#d6c687',
          500: '#b29e52',
          600: '#9b8846',
          700: '#7a6a37',
          800: '#5a4e29',
          900: '#3a321a',
        },
        dark: {
          DEFAULT: '#000000',
          50: '#f2f2f2',
          100: '#e6e6e6',
          200: '#cccccc',
          300: '#b3b3b3',
          400: '#999999',
          500: '#707070',
          600: '#4d4d4d',
          700: '#333333',
          800: '#1a1a1a',
          900: '#000000',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Arial', 'system-ui', 'sans-serif'],
        safiro: ['Safiro', 'var(--font-inter)', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        'container': '1580px',
      },
      spacing: {
        'section': '6rem',
        'section-sm': '4rem',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        DEFAULT: '6px',
        md: '12px',
        lg: '16px',
        xl: '24px',
      },
      animation: {
        'fade-in': 'fadeIn 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
        'fade-up': 'fadeUp 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
        'slide-in': 'slideIn 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-8px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;


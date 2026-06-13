// 📄 PODSTRONA: O brillQ - Liquid Enterprise Manifest
'use client'

import type { Locale } from '@/i18n/config'
import AnimatedSection from '@/components/shared/AnimatedSection'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

export default function GrupaPage({ params }: { params: { lang: Locale } }) {
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.2 })

  return (
    <div style={{ paddingTop: '120px' }}>
      {/* 1️⃣ HERO: Manifest sposobu działania */}
      <section
        ref={heroRef}
        className="relative w-full overflow-hidden bg-black flex items-center justify-center"
        style={{ minHeight: '95vh', padding: 'clamp(100px, 14vh, 160px) clamp(24px, 5vw, 100px)' }}
      >
        {/* Animated background - dual glow */}
        <motion.div
          className="absolute"
          style={{
            width: '800px',
            height: '800px',
            top: '10%',
            right: '5%',
            background: 'radial-gradient(circle, rgba(178, 158, 82, 0.15) 0%, rgba(178, 158, 82, 0.05) 40%, transparent 70%)',
            filter: 'blur(140px)',
            zIndex: 0,
          }}
          animate={{
            x: [0, 40, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
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
            bottom: '10%',
            left: '5%',
            background: 'radial-gradient(circle, rgba(178, 158, 82, 0.08) 0%, transparent 70%)',
            filter: 'blur(100px)',
            zIndex: 0,
          }}
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div className="relative z-10 w-full text-center" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <AnimatedSection>
            {/* Subheader */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block mb-12"
              style={{
                border: '1px solid rgba(178, 158, 82, 0.25)',
                padding: '14px 40px',
                borderRadius: '50px',
                background: 'rgba(178, 158, 82, 0.03)',
              }}
            >
              <span className="text-primary" style={{ fontSize: 'clamp(11px, 0.9vw, 13px)', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 500 }}>
                Manifest Liquid Enterprise
              </span>
            </motion.div>

            {/* SEO H1 — visually hidden, semantic */}
            <h1 className="sr-only">O brillQ AI — kim jesteśmy</h1>

            {/* Main headline */}
            <motion.h2
              className="text-white mb-12"
              style={{
                fontSize: 'clamp(44px, 6.5vw, 98px)',
                fontWeight: 300,
                lineHeight: 1.12,
                letterSpacing: '-0.025em',
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              brillQ to nie jest firma z&nbsp;
              <span style={{
                background: 'linear-gradient(135deg, rgba(178, 158, 82, 1) 0%, rgba(178, 158, 82, 0.5) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 400,
              }}>
                zespołami
              </span>
              .<br />
              To jest firma z{' '}
              <motion.span
                className="text-primary"
                style={{ fontWeight: 400 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                intencją
              </motion.span>,{' '}
              <motion.span
                className="text-primary"
                style={{ fontWeight: 400 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                architekturą
              </motion.span> i{' '}
              <motion.span
                className="text-primary"
                style={{ fontWeight: 400 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                orkiestracją
              </motion.span>.
            </motion.h2>

            {/* Subheadline */}
            <motion.p
              className="text-gray-300 mx-auto mb-16"
              style={{
                fontSize: 'clamp(19px, 2.1vw, 28px)',
                fontWeight: 300,
                maxWidth: '950px',
                lineHeight: 1.65,
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              Budujemy organizację, w której <span className="text-primary" style={{ fontWeight: 400 }}>ludzie projektują decyzje</span>, a autonomiczne systemy wykonują pracę.
              Dzięki temu działamy <strong className="text-white">szybciej</strong>, <strong className="text-white">taniej</strong> i z <strong className="text-white">większą kontrolą jakości</strong> niż tradycyjne zespoły.
            </motion.p>

            {/* Description */}
            <motion.div
              className="text-gray-400 mx-auto"
              style={{
                fontSize: 'clamp(16px, 1.5vw, 20px)',
                fontWeight: 300,
                maxWidth: '850px',
                lineHeight: 1.85,
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="mb-8" style={{ opacity: 0.9 }}>
                brillQ działa w modelu <strong className="text-white">Liquid Enterprise</strong>: zamiast stałych działów tworzymy tymczasowe
                &bdquo;swarmy&rdquo; agentów AI, które powstają dokładnie wtedy, gdy są potrzebne — i znikają, gdy zadanie jest wykonane.
              </p>
              <div
                className="mx-auto p-8"
                style={{
                  maxWidth: '750px',
                  background: 'linear-gradient(135deg, rgba(178, 158, 82, 0.08) 0%, rgba(178, 158, 82, 0.02) 100%)',
                  border: '1px solid rgba(178, 158, 82, 0.2)',
                  borderRadius: '12px',
                }}
              >
                <p style={{ fontSize: 'clamp(18px, 1.8vw, 24px)', lineHeight: 1.6 }} className="text-primary">
                  Ludzie w brillQ nie wykonują pracy operacyjnej.<br />
                  Projektują system, który ją wykonuje.
                </p>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* 2️⃣ Jak działa brillQ - 3 warstwy */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          padding: 'clamp(120px, 18vh, 200px) clamp(24px, 5vw, 100px)',
          background: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(10,10,10,1) 100%)',
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <AnimatedSection>
            <h2
              className="text-white text-center mb-8"
              style={{
                fontSize: 'clamp(38px, 5.5vw, 72px)',
                fontWeight: 300,
                lineHeight: 1.18,
                letterSpacing: '-0.025em',
              }}
            >
              Organizacja zaprojektowana jak <span className="text-primary">system</span>,<br />nie jak korporacja
            </h2>
            <p className="text-gray-400 text-center mb-24" style={{ fontSize: 'clamp(17px, 1.6vw, 22px)', maxWidth: '750px', margin: '0 auto 100px', lineHeight: 1.7, opacity: 0.85 }}>
              brillQ składa się z trzech warstw, które współpracują jak orchestra — nie jak biurokracja
            </p>
          </AnimatedSection>

          {/* 3 warstwy - minimal clean layout */}
          <div className="space-y-24">
            {/* Warstwa 1: Strategiczna */}
            <AnimatedSection delay={0.2}>
              <motion.div
                className="relative pl-8 border-l border-primary group cursor-pointer"
                style={{ borderLeftWidth: '2px', borderColor: 'rgba(178, 158, 82, 0.3)' }}
                whileHover={{ x: 10, borderColor: 'rgba(178, 158, 82, 0.6)' }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-6">
                  <span className="text-primary text-xs uppercase tracking-wider" style={{ fontSize: 'clamp(11px, 1vw, 13px)', letterSpacing: '0.15em', opacity: 0.7 }}>
                    Persistent Core
                  </span>
                  <h3 className="text-white mt-2 group-hover:text-primary transition-colors duration-500" style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                    Warstwa Strategiczna
                  </h3>
                  <p className="text-gray-300 mt-1" style={{ fontSize: 'clamp(15px, 1.3vw, 18px)', fontWeight: 300 }}>
                    Mózg organizacji
                  </p>
                </div>

                <div className="max-w-4xl">
                  <p className="text-gray-400 mb-5" style={{ fontSize: 'clamp(16px, 1.4vw, 19px)', lineHeight: 1.7, opacity: 0.9 }}>
                    To tutaj powstaje sens, kierunek i odpowiedzialność:
                  </p>
                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-3 mb-6">
                    <div className="flex items-start gap-3 text-gray-400" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', lineHeight: 1.7 }}>
                      <span className="text-primary mt-1">→</span>
                      <span>definiuje problemy do rozwiązania</span>
                    </div>
                    <div className="flex items-start gap-3 text-gray-400" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', lineHeight: 1.7 }}>
                      <span className="text-primary mt-1">→</span>
                      <span>projektuje sposób ich rozbicia</span>
                    </div>
                    <div className="flex items-start gap-3 text-gray-400" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', lineHeight: 1.7 }}>
                      <span className="text-primary mt-1">→</span>
                      <span>decyduje o tempie, koszcie i ryzyku</span>
                    </div>
                    <div className="flex items-start gap-3 text-gray-400" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', lineHeight: 1.7 }}>
                      <span className="text-primary mt-1">→</span>
                      <span>dba o spójność i pamięć organizacyjną</span>
                    </div>
                  </div>
                  <p className="text-primary" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', lineHeight: 1.7, fontWeight: 400 }}>
                    → Zespół brillQ działa jako <strong>architekci decyzji</strong>, nie wykonawcy zadań
                  </p>
                </div>

                {/* Arrow indicator */}
                <motion.div
                  className="absolute right-0 top-1/2 -translate-y-1/2"
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </motion.div>
              </motion.div>
            </AnimatedSection>

            {/* Warstwa 2: Orkiestracji */}
            <AnimatedSection delay={0.4}>
              <motion.div
                className="relative pl-8 border-l border-primary group cursor-pointer"
                style={{ borderLeftWidth: '2px', borderColor: 'rgba(178, 158, 82, 0.25)' }}
                whileHover={{ x: 10, borderColor: 'rgba(178, 158, 82, 0.6)' }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-6">
                  <span className="text-primary text-xs uppercase tracking-wider" style={{ fontSize: 'clamp(11px, 1vw, 13px)', letterSpacing: '0.15em', opacity: 0.7 }}>
                    Core IP brillQ
                  </span>
                  <h3 className="text-white mt-2 group-hover:text-primary transition-colors duration-500" style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                    Warstwa Orkiestracji
                  </h3>
                  <p className="text-gray-300 mt-1" style={{ fontSize: 'clamp(15px, 1.3vw, 18px)', fontWeight: 300 }}>
                    Silnik egzekucji
                  </p>
                </div>

                <div className="max-w-4xl">
                  <p className="text-gray-400 mb-5" style={{ fontSize: 'clamp(16px, 1.4vw, 19px)', lineHeight: 1.7, opacity: 0.9 }}>
                    To unikalna architektura brillQ, która:
                  </p>
                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-3 mb-6">
                    <div className="flex items-start gap-3 text-gray-400" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', lineHeight: 1.7 }}>
                      <span className="text-primary mt-1">→</span>
                      <span>rozbija problemy na zadania</span>
                    </div>
                    <div className="flex items-start gap-3 text-gray-400" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', lineHeight: 1.7 }}>
                      <span className="text-primary mt-1">→</span>
                      <span>dobiera odpowiednie agenty i narzędzia</span>
                    </div>
                    <div className="flex items-start gap-3 text-gray-400" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', lineHeight: 1.7 }}>
                      <span className="text-primary mt-1">→</span>
                      <span>decyduje co robić równolegle, a co sekwencyjnie</span>
                    </div>
                    <div className="flex items-start gap-3 text-gray-400" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', lineHeight: 1.7 }}>
                      <span className="text-primary mt-1">→</span>
                      <span>kontroluje koszty obliczeń i jakość logiczną</span>
                    </div>
                    <div className="flex items-start gap-3 text-gray-400 md:col-span-2" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', lineHeight: 1.7 }}>
                      <span className="text-primary mt-1">→</span>
                      <span>integruje wyniki w spójne rekomendacje</span>
                    </div>
                  </div>
                  <p className="text-primary" style={{ fontSize: 'clamp(15px, 1.35vw, 18px)', lineHeight: 1.7, fontWeight: 500 }}>
                    → To tutaj powstaje przewaga konkurencyjna brillQ
                  </p>
                </div>

                {/* Arrow indicator */}
                <motion.div
                  className="absolute right-0 top-1/2 -translate-y-1/2"
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </motion.div>
              </motion.div>
            </AnimatedSection>

            {/* Warstwa 3: Wykonawcza */}
            <AnimatedSection delay={0.6}>
              <motion.div
                className="relative pl-8 border-l border-primary group cursor-pointer"
                style={{ borderLeftWidth: '2px', borderColor: 'rgba(178, 158, 82, 0.2)' }}
                whileHover={{ x: 10, borderColor: 'rgba(178, 158, 82, 0.6)' }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-6">
                  <span className="text-primary text-xs uppercase tracking-wider" style={{ fontSize: 'clamp(11px, 1vw, 13px)', letterSpacing: '0.15em', opacity: 0.7 }}>
                    Swarmy
                  </span>
                  <h3 className="text-white mt-2 group-hover:text-primary transition-colors duration-500" style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                    Warstwa Wykonawcza
                  </h3>
                  <p className="text-gray-300 mt-1" style={{ fontSize: 'clamp(15px, 1.3vw, 18px)', fontWeight: 300 }}>
                    Płynna egzekucja
                  </p>
                </div>

                <div className="max-w-4xl">
                  <p className="text-gray-400 mb-5" style={{ fontSize: 'clamp(16px, 1.4vw, 19px)', lineHeight: 1.7, opacity: 0.9 }}>
                    Zamiast stałych zespołów, tworzymy:
                  </p>
                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-3 mb-6">
                    {[
                      'swarmy badawcze',
                      'swarmy analityczne',
                      'swarmy strategiczne',
                      'swarmy walidacyjne',
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        className="flex items-start gap-3 text-gray-400"
                        style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', lineHeight: 1.7 }}
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.span
                          className="text-primary mt-1"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          →
                        </motion.span>
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-gray-400 mb-4" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', lineHeight: 1.7, opacity: 0.9 }}>
                    Każdy swarm:
                  </p>
                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-3 mb-6">
                    {[
                      { text: 'powstaje tylko na czas zadania', span: 1 },
                      { text: 'działa równolegle i autonomicznie', span: 1 },
                      { text: 'znika po zakończeniu pracy', span: 2 },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        className={`flex items-start gap-3 text-gray-400 ${item.span === 2 ? 'md:col-span-2' : ''}`}
                        style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', lineHeight: 1.7 }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.span
                          className="text-primary mt-1"
                          whileHover={{ scale: 1.3, rotate: 360 }}
                          transition={{ duration: 0.4 }}
                        >
                          ✓
                        </motion.span>
                        <span>{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-primary" style={{ fontSize: 'clamp(15px, 1.35vw, 18px)', lineHeight: 1.7, fontWeight: 500 }}>
                    → Zero nadmiarowych struktur. Zero &bdquo;utrzymywania zespołów na zapas&rdquo;
                  </p>
                </div>

                {/* Arrow indicator */}
                <motion.div
                  className="absolute right-0 top-1/2 -translate-y-1/2"
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </motion.div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 3️⃣ Dlaczego to działa inaczej */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          padding: 'clamp(120px, 18vh, 200px) clamp(24px, 5vw, 100px)',
          background: 'linear-gradient(180deg, rgba(10,10,10,1) 0%, rgba(0,0,0,1) 50%, rgba(5,5,5,1) 100%)',
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <AnimatedSection>
            <motion.h2
              className="text-white text-center mb-24"
              style={{
                fontSize: 'clamp(38px, 5.5vw, 72px)',
                fontWeight: 300,
                lineHeight: 1.18,
                letterSpacing: '-0.025em',
              }}
              whileHover={{
                textShadow: '0 0 30px rgba(178, 158, 82, 0.4)',
              }}
              transition={{ duration: 0.3 }}
            >
              Nie skalujemy ludzi.<br />
              <span className="text-primary">Skalujemy myślenie.</span>
            </motion.h2>
          </AnimatedSection>

          {/* Comparison grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Tradycyjna firma */}
            <AnimatedSection delay={0.2}>
              <motion.div
                className="h-full relative group"
                style={{
                  background: 'rgba(20, 20, 20, 0.6)',
                  border: '1px solid rgba(112, 112, 112, 0.15)',
                  padding: 'clamp(36px, 4.5vw, 56px)',
                  borderRadius: '16px',
                }}
                whileHover={{
                  borderColor: 'rgba(112, 112, 112, 0.25)',
                  scale: 1.02,
                  y: -6,
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-10">
                  <h3 className="text-gray-400 mb-2" style={{ fontSize: 'clamp(26px, 2.5vw, 36px)', fontWeight: 400, letterSpacing: '-0.01em' }}>
                    Tradycyjna firma
                  </h3>
                  <div className="h-0.5 w-16 bg-gray-600 opacity-30" />
                </div>
                <ul className="space-y-5">
                  {[
                    'zespoły na stałe',
                    'koszt rośnie liniowo z liczbą ludzi',
                    'wolne decyzje',
                    'dużo koordynacji, spotkań, tarcia',
                    'odpowiedzialność rozmyta w strukturze',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-gray-400" style={{ fontSize: 'clamp(15px, 1.35vw, 19px)', lineHeight: 1.65 }}>
                      <span className="text-red-500 mt-1 flex-shrink-0" style={{ fontSize: '16px' }}>✕</span>
                      <span style={{ opacity: 0.85 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatedSection>

            {/* brillQ */}
            <AnimatedSection delay={0.4}>
              <motion.div
                className="h-full relative overflow-hidden group"
                style={{
                  background: 'linear-gradient(135deg, rgba(178, 158, 82, 0.10) 0%, rgba(178, 158, 82, 0.04) 100%)',
                  border: '1px solid rgba(178, 158, 82, 0.35)',
                  padding: 'clamp(36px, 4.5vw, 56px)',
                  borderRadius: '16px',
                }}
                whileHover={{
                  borderColor: 'rgba(178, 158, 82, 0.50)',
                  background: 'linear-gradient(135deg, rgba(178, 158, 82, 0.12) 0%, rgba(178, 158, 82, 0.05) 100%)',
                  scale: 1.02,
                  y: -6,
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Decorative corner accent */}
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32"
                  style={{
                    background: 'radial-gradient(circle at top right, rgba(178, 158, 82, 0.15) 0%, transparent 70%)',
                    pointerEvents: 'none',
                  }}
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <div className="relative z-10">
                  <div className="mb-10">
                    <h3 className="text-primary mb-2" style={{ fontSize: 'clamp(26px, 2.5vw, 36px)', fontWeight: 400, letterSpacing: '-0.01em' }}>
                      brillQ
                    </h3>
                    <motion.div
                      className="h-0.5 w-16 bg-primary"
                      animate={{
                        opacity: [0.6, 0.9, 0.6],
                        scaleX: [1, 1.3, 1],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  </div>
                  <ul className="space-y-5">
                    {[
                      'struktury tworzone pod problem',
                      'koszt zależny od złożoności, nie od etatów',
                      'szybkie iteracje i równoległa praca',
                      'minimalna koordynacja, maksymalna orkiestracja',
                      'odpowiedzialność w architekturze systemu',
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-4 text-gray-300"
                        style={{ fontSize: 'clamp(15px, 1.35vw, 19px)', lineHeight: 1.65 }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                        whileHover={{ x: 10 }}
                      >
                        <motion.span
                          className="text-primary mt-1 flex-shrink-0"
                          style={{ fontSize: '16px', fontWeight: 600 }}
                          whileHover={{ scale: 1.3, rotate: 360 }}
                          transition={{ duration: 0.4 }}
                        >
                          ✓
                        </motion.span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 4️⃣ Jaką rolę pełnią ludzie */}
      <section
        className="relative w-full overflow-hidden bg-black"
        style={{ padding: 'clamp(120px, 18vh, 200px) clamp(24px, 5vw, 100px)' }}
      >
        <div style={{ maxWidth: '1150px', margin: '0 auto', textAlign: 'center' }}>
          <AnimatedSection>
            <motion.h2
              className="text-white mb-16"
              style={{
                fontSize: 'clamp(34px, 4.8vw, 68px)',
                fontWeight: 300,
                lineHeight: 1.25,
                letterSpacing: '-0.025em',
              }}
              whileHover={{
                textShadow: '0 0 30px rgba(178, 158, 82, 0.4)',
              }}
              transition={{ duration: 0.3 }}
            >
              Ludzie nie wykonują pracy.<br />
              <span className="text-primary">Ludzie projektują system, który ją wykonuje.</span>
            </motion.h2>

            <div className="mx-auto mb-10" style={{ maxWidth: '950px' }}>
              <p className="text-gray-300 mb-8" style={{ fontSize: 'clamp(17px, 1.6vw, 23px)', lineHeight: 1.7, fontWeight: 300 }}>
                W brillQ rola człowieka przesuwa się:
              </p>
              <div className="space-y-5 text-left max-w-3xl mx-auto">
                {[
                  { from: '„robienia"', to: 'definiowania problemów' },
                  { from: '„zarządzania ludźmi"', to: 'projektowania architektury decyzyjnej' },
                  { from: '„kontroli wykonania"', to: 'projektowania bodźców i jakości myślenia' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-5 text-gray-300"
                    style={{ fontSize: 'clamp(15px, 1.35vw, 19px)' }}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ scale: 1.03, x: 10 }}
                  >
                    <span className="text-gray-300" style={{ minWidth: '180px', textAlign: 'right' }}>z {item.from}</span>
                    <motion.span
                      className="text-primary flex-shrink-0"
                      style={{ fontSize: '20px', fontWeight: 600 }}
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      →
                    </motion.span>
                    <span className="text-primary font-medium">do {item.to}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mx-auto" style={{ maxWidth: '850px' }}>
              <p className="text-gray-300" style={{ fontSize: 'clamp(17px, 1.5vw, 22px)', lineHeight: 1.7, fontWeight: 300 }}>
                To pozwala jednemu zespołowi robić rzeczy,<br />które wcześniej wymagały <strong className="text-white">całych działów</strong>.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 5️⃣ Zespół brillQ - twist */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          padding: 'clamp(120px, 18vh, 200px) clamp(24px, 5vw, 100px)',
          background: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(8,8,8,1) 50%, rgba(0,0,0,1) 100%)',
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <AnimatedSection>
            <h2
              className="text-white text-center mb-24"
              style={{
                fontSize: 'clamp(38px, 5.5vw, 72px)',
                fontWeight: 300,
                lineHeight: 1.18,
                letterSpacing: '-0.025em',
              }}
            >
              Zespół <span className="text-primary">brillQ</span>
            </h2>
          </AnimatedSection>

          {/* Core Team */}
          <AnimatedSection delay={0.2}>
            <div className="mb-20">
              <div className="text-center mb-12">
                <h3 className="text-white mb-4" style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 400, letterSpacing: '-0.01em' }}>
                  brillQ Core Team
                </h3>
                <p className="text-gray-400" style={{ fontSize: 'clamp(15px, 1.3vw, 19px)', fontWeight: 300, lineHeight: 1.7 }}>
                  Architekci systemu, którzy projektują decyzje — nie wykonują zadań
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Execution Layer - twist */}
          <AnimatedSection delay={0.4}>
            <div className="text-center">
              <div className="mb-3">
                <motion.h3
                  className="text-white mb-2"
                  style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 400, letterSpacing: '-0.01em' }}
                  whileHover={{
                    scale: 1.05,
                    textShadow: '0 0 20px rgba(178, 158, 82, 0.3)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  Execution Layer
                </motion.h3>
                <motion.p
                  className="text-gray-300"
                  style={{ fontSize: 'clamp(15px, 1.3vw, 19px)', fontWeight: 300 }}
                  whileHover={{ color: 'rgba(178, 158, 82, 0.8)' }}
                  transition={{ duration: 0.3 }}
                >
                  Autonomiczne Swarmy
                </motion.p>
              </div>
              <motion.div
                className="h-px w-24 mx-auto my-8 bg-gradient-to-r from-transparent via-primary to-transparent"
                animate={{
                  opacity: [0.4, 0.7, 0.4],
                  scaleX: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <p className="text-gray-300 mx-auto mb-6" style={{ fontSize: 'clamp(17px, 1.5vw, 22px)', lineHeight: 1.75, maxWidth: '850px', fontWeight: 300 }}>
                Większość pracy w brillQ wykonują wyspecjalizowane, tymczasowe zespoły agentów AI,
                tworzone dynamicznie pod konkretne zadania.
              </p>
              <p className="text-primary mt-4" style={{ fontSize: 'clamp(16px, 1.4vw, 20px)', fontWeight: 400, letterSpacing: '0.02em' }}>
                Nie mają nazwisk. Mają funkcję.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 6️⃣ Co to znaczy dla klienta */}
      <section
        className="relative w-full overflow-hidden bg-black"
        style={{ padding: 'clamp(120px, 18vh, 200px) clamp(24px, 5vw, 100px)' }}
      >
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <AnimatedSection>
            <motion.h2
              className="text-white text-center mb-20"
              style={{
                fontSize: 'clamp(34px, 4.8vw, 68px)',
                fontWeight: 300,
                lineHeight: 1.25,
                letterSpacing: '-0.025em',
              }}
              whileHover={{
                textShadow: '0 0 30px rgba(178, 158, 82, 0.4)',
              }}
              transition={{ duration: 0.3 }}
            >
              Kupujesz <span className="text-primary">decyzję</span>, nie zespół.<br />
              Kupujesz <span className="text-primary">wynik</span>, nie proces.
            </motion.h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: 'Szybsze odpowiedzi',
                desc: 'na złożone problemy',
              },
              {
                title: 'Przewidywalny koszt',
                desc: 'vs czas',
              },
              {
                title: 'Mniej chaosu',
                desc: 'więcej klarowności',
              },
              {
                title: 'Mniej „projektów AI"',
                desc: 'więcej realnych decyzji biznesowych',
              },
              {
                title: 'Bezpieczeństwo',
                desc: 'wbudowane w architekturę, nie w procedury',
              },
              {
                title: 'Pełna kontrola',
                desc: 'i transparentność procesu',
              },
            ].map((benefit, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <motion.div
                  className="relative group cursor-pointer"
                  whileHover={{ scale: 1.05, y: -6 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.div
                    className="inline-block w-2 h-2 rounded-full mb-4"
                    style={{ background: 'var(--color-primary)' }}
                    whileHover={{ scale: 1.5 }}
                    transition={{ duration: 0.3 }}
                  />
                  <h3 className="text-white mb-2 group-hover:text-primary transition-colors duration-300" style={{ fontSize: 'clamp(19px, 1.7vw, 24px)', fontWeight: 400, letterSpacing: '-0.005em', lineHeight: 1.3 }}>
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400" style={{ fontSize: 'clamp(14px, 1.2vw, 17px)', lineHeight: 1.65, opacity: 0.85 }}>
                    {benefit.desc}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 6.5️⃣ Jak to działa w praktyce - brillQ's business model */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          padding: 'clamp(120px, 18vh, 200px) clamp(24px, 5vw, 100px)',
          background: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(15,12,10,1) 100%)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <AnimatedSection>
            <div className="text-center mb-16">
              <motion.h2
                className="text-white mb-8"
                style={{
                  fontSize: 'clamp(34px, 4.8vw, 68px)',
                  fontWeight: 300,
                  lineHeight: 1.25,
                  letterSpacing: '-0.025em',
                }}
                whileHover={{
                  textShadow: '0 0 30px rgba(178, 158, 82, 0.4)',
                }}
                transition={{ duration: 0.3 }}
              >
                Jak to działa <span className="text-primary">w praktyce</span>?
              </motion.h2>
              <p className="text-gray-400" style={{ fontSize: 'clamp(17px, 1.6vw, 22px)', maxWidth: '850px', margin: '0 auto', lineHeight: 1.7, opacity: 0.85 }}>
                Ten sam model Liquid Enterprise pozwala nam działać w dziewięciu obszarach jednocześnie — bez rozdmuchiwania struktury
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Consulting */}
            <AnimatedSection delay={0.1}>
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-5">
                  <h3 className="text-white mb-2 group-hover:text-primary transition-colors duration-300" style={{ fontSize: 'clamp(22px, 2.2vw, 28px)', fontWeight: 400, letterSpacing: '-0.01em' }}>
                    Consulting
                  </h3>
                  <p className="text-primary text-sm uppercase tracking-wider" style={{ fontSize: 'clamp(11px, 0.95vw, 13px)', opacity: 0.8 }}>
                    Swarmy dla klientów
                  </p>
                </div>
                <p className="text-gray-400 mb-4" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', lineHeight: 1.7, opacity: 0.9 }}>
                  Tworzymy dedykowane swarmy analityczne i strategiczne dla konkretnych problemów biznesowych klienta.
                </p>
                <p className="text-gray-300 italic" style={{ fontSize: 'clamp(13px, 1.15vw, 15px)', lineHeight: 1.6 }}>
                  Powstają na czas projektu, dostarczają decyzje, znikają.
                </p>
              </motion.div>
            </AnimatedSection>

            {/* Wydawnictwo */}
            <AnimatedSection delay={0.2}>
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-5">
                  <h3 className="text-white mb-2 group-hover:text-primary transition-colors duration-300" style={{ fontSize: 'clamp(22px, 2.2vw, 28px)', fontWeight: 400, letterSpacing: '-0.01em' }}>
                    Wydawnictwo
                  </h3>
                  <p className="text-primary text-sm uppercase tracking-wider" style={{ fontSize: 'clamp(11px, 0.95vw, 13px)', opacity: 0.8 }}>
                    Swarmy badawcze
                  </p>
                </div>
                <p className="text-gray-400 mb-4" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', lineHeight: 1.7, opacity: 0.9 }}>
                  Swarmy badawcze eksplorują tematy AI, destylują wiedzę w struktury, które przekształcamy w książki i e-booki.
                </p>
                <p className="text-gray-300 italic" style={{ fontSize: 'clamp(13px, 1.15vw, 15px)', lineHeight: 1.6 }}>
                  Content powstaje jako produkt uboczny naszego R&D.
                </p>
              </motion.div>
            </AnimatedSection>

            {/* Szkolenia */}
            <AnimatedSection delay={0.3}>
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-5">
                  <h3 className="text-white mb-2 group-hover:text-primary transition-colors duration-300" style={{ fontSize: 'clamp(22px, 2.2vw, 28px)', fontWeight: 400, letterSpacing: '-0.01em' }}>
                    Szkolenia
                  </h3>
                  <p className="text-primary text-sm uppercase tracking-wider" style={{ fontSize: 'clamp(11px, 0.95vw, 13px)', opacity: 0.8 }}>
                    Transfer wiedzy
                  </p>
                </div>
                <p className="text-gray-400 mb-4" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', lineHeight: 1.7, opacity: 0.9 }}>
                  Destylujemy wiedzę z projektów i R&D w struktury szkoleniowe — uczymy projektowania systemów AI, nie ich obsługi.
                </p>
                <p className="text-gray-300 italic" style={{ fontSize: 'clamp(13px, 1.15vw, 15px)', lineHeight: 1.6 }}>
                  Uczysz się od architektów, nie od trenerów.
                </p>
              </motion.div>
            </AnimatedSection>

            {/* R&D */}
            <AnimatedSection delay={0.4}>
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-5">
                  <h3 className="text-white mb-2 group-hover:text-primary transition-colors duration-300" style={{ fontSize: 'clamp(22px, 2.2vw, 28px)', fontWeight: 400, letterSpacing: '-0.01em' }}>
                    R&D
                  </h3>
                  <p className="text-primary text-sm uppercase tracking-wider" style={{ fontSize: 'clamp(11px, 0.95vw, 13px)', opacity: 0.8 }}>
                    Swarmy eksperymentalne
                  </p>
                </div>
                <p className="text-gray-400 mb-4" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', lineHeight: 1.7, opacity: 0.9 }}>
                  Eksperymentujemy z nowymi architekturami orkiestracji, testujemy granice możliwości agentic AI.
                </p>
                <p className="text-gray-300 italic" style={{ fontSize: 'clamp(13px, 1.15vw, 15px)', lineHeight: 1.6 }}>
                  Tutaj powstaje Core IP — nasza przewaga.
                </p>
              </motion.div>
            </AnimatedSection>

            {/* Tech Core */}
            <AnimatedSection delay={0.5}>
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-5">
                  <h3 className="text-white mb-2 group-hover:text-primary transition-colors duration-300" style={{ fontSize: 'clamp(22px, 2.2vw, 28px)', fontWeight: 400, letterSpacing: '-0.01em' }}>
                    Tech Core
                  </h3>
                  <p className="text-primary text-sm uppercase tracking-wider" style={{ fontSize: 'clamp(11px, 0.95vw, 13px)', opacity: 0.8 }}>
                    Orkiestracja wszystkiego
                  </p>
                </div>
                <p className="text-gray-400 mb-4" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', lineHeight: 1.7, opacity: 0.9 }}>
                  Architektura orkiestracyjna, którą rozwijamy w R&D, implementujemy w projekty klientów, opisujemy w książkach i uczymy na szkoleniach — przekształcamy w gotowe produkty i platformy.
                </p>
                <p className="text-gray-300 italic" style={{ fontSize: 'clamp(13px, 1.15vw, 15px)', lineHeight: 1.6 }}>
                  To jest zamknięta pętla — każdy obszar zasila pozostałe.
                </p>
              </motion.div>
            </AnimatedSection>

            {/* Integration Services */}
            <AnimatedSection delay={0.6}>
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-5">
                  <h3 className="text-white mb-2 group-hover:text-primary transition-colors duration-300" style={{ fontSize: 'clamp(22px, 2.2vw, 28px)', fontWeight: 400, letterSpacing: '-0.01em' }}>
                    Integration Services
                  </h3>
                  <p className="text-primary text-sm uppercase tracking-wider" style={{ fontSize: 'clamp(11px, 0.95vw, 13px)', opacity: 0.8 }}>
                    Wdrożenia end-to-end
                  </p>
                </div>
                <p className="text-gray-400 mb-4" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', lineHeight: 1.7, opacity: 0.9 }}>
                  Wdrażamy i integrujemy systemy AI w istniejących środowiskach firmowych — od architektury po deployment i monitoring.
                </p>
                <p className="text-gray-300 italic" style={{ fontSize: 'clamp(13px, 1.15vw, 15px)', lineHeight: 1.6 }}>
                  Od strategii do działającego systemu w produkcji.
                </p>
              </motion.div>
            </AnimatedSection>

            {/* Strategic Partnerships */}
            <AnimatedSection delay={0.7}>
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-5">
                  <h3 className="text-white mb-2 group-hover:text-primary transition-colors duration-300" style={{ fontSize: 'clamp(22px, 2.2vw, 28px)', fontWeight: 400, letterSpacing: '-0.01em' }}>
                    Strategic Partnerships
                  </h3>
                  <p className="text-primary text-sm uppercase tracking-wider" style={{ fontSize: 'clamp(11px, 0.95vw, 13px)', opacity: 0.8 }}>
                    Ekosystem współpracy
                  </p>
                </div>
                <p className="text-gray-400 mb-4" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', lineHeight: 1.7, opacity: 0.9 }}>
                  Budujemy długoterminowe partnerstwa strategiczne z firmami technologicznymi i liderami branżowymi dla wspólnych rozwiązań AI.
                </p>
                <p className="text-gray-300 italic" style={{ fontSize: 'clamp(13px, 1.15vw, 15px)', lineHeight: 1.6 }}>
                  Razem budujemy przyszłość AI w biznesie.
                </p>
              </motion.div>
            </AnimatedSection>

            {/* AI Advisory Board */}
            <AnimatedSection delay={0.8}>
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-5">
                  <h3 className="text-white mb-2 group-hover:text-primary transition-colors duration-300" style={{ fontSize: 'clamp(22px, 2.2vw, 28px)', fontWeight: 400, letterSpacing: '-0.01em' }}>
                    AI Advisory Board
                  </h3>
                  <p className="text-primary text-sm uppercase tracking-wider" style={{ fontSize: 'clamp(11px, 0.95vw, 13px)', opacity: 0.8 }}>
                    Doradztwo C-level
                  </p>
                </div>
                <p className="text-gray-400 mb-4" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', lineHeight: 1.7, opacity: 0.9 }}>
                  Doradztwo strategiczne dla leadership — pomagamy CEO i boardom nawigować transformację AI, projektować strategie i podejmować decyzje o wysokiej stawce.
                </p>
                <p className="text-gray-300 italic" style={{ fontSize: 'clamp(13px, 1.15vw, 15px)', lineHeight: 1.6 }}>
                  Myślimy jak architekci, doradzamy jak партnerzy biznesowi.
                </p>
              </motion.div>
            </AnimatedSection>

            {/* AI Auditing */}
            <AnimatedSection delay={0.9}>
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-5">
                  <h3 className="text-white mb-2 group-hover:text-primary transition-colors duration-300" style={{ fontSize: 'clamp(22px, 2.2vw, 28px)', fontWeight: 400, letterSpacing: '-0.01em' }}>
                    AI Auditing
                  </h3>
                  <p className="text-primary text-sm uppercase tracking-wider" style={{ fontSize: 'clamp(11px, 0.95vw, 13px)', opacity: 0.8 }}>
                    Bezpieczeństwo & Jakość
                  </p>
                </div>
                <p className="text-gray-400 mb-4" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', lineHeight: 1.7, opacity: 0.9 }}>
                  Audytujemy systemy AI pod kątem bezpieczeństwa, jakości architektury, compliance i ryzyka operacyjnego — identyfikujemy zagrożenia zanim staną się problemami.
                </p>
                <p className="text-gray-300 italic" style={{ fontSize: 'clamp(13px, 1.15vw, 15px)', lineHeight: 1.6 }}>
                  Trust, but verify — szczególnie w AI.
                </p>
              </motion.div>
            </AnimatedSection>
          </div>

          {/* Summary insight */}
          <AnimatedSection delay={0.6}>
            <div className="mt-16 text-center" style={{ maxWidth: '900px', margin: '60px auto 0' }}>
              <p className="text-gray-300 mb-4" style={{ fontSize: 'clamp(18px, 1.8vw, 24px)', lineHeight: 1.7, fontWeight: 300 }}>
                Bez Liquid Enterprise musielibyśmy mieć <strong className="text-white">9 oddzielnych firm</strong>.
              </p>
              <p className="text-primary" style={{ fontSize: 'clamp(17px, 1.6vw, 22px)', lineHeight: 1.7, fontWeight: 400 }}>
                Z Liquid Enterprise mamy <strong>jedną architekturę</strong>, która skaluje się na wszystkie kierunki.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 7️⃣ Brand Claim - Final section */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          padding: 'clamp(140px, 20vh, 220px) clamp(24px, 5vw, 100px)',
          background: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(12,10,8,1) 50%, rgba(0,0,0,1) 100%)',
        }}
      >
        {/* Ambient background glow */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            width: '60%',
            height: '60%',
            background: 'radial-gradient(ellipse, rgba(178, 158, 82, 0.08) 0%, transparent 70%)',
            filter: 'blur(100px)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }} className="relative z-10">
          <AnimatedSection>
            <div className="relative">
              <p
                className="text-white mb-8"
                style={{
                  fontSize: 'clamp(30px, 4.5vw, 58px)',
                  fontWeight: 300,
                  lineHeight: 1.28,
                  letterSpacing: '-0.02em',
                }}
              >
                brillQ buduje organizacje, w których <span className="text-primary" style={{ fontWeight: 400 }}>AI wykonuje pracę</span>,<br />
                a <span className="text-primary" style={{ fontWeight: 400 }}>ludzie projektują sens</span>.
              </p>
              <motion.div
                className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent my-10"
                animate={{
                  opacity: [0.4, 0.7, 0.4],
                  scaleX: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <p
                className="text-gray-400"
                style={{
                  fontSize: 'clamp(19px, 2vw, 28px)',
                  fontWeight: 300,
                  lineHeight: 1.6,
                }}
              >
                Nie sprzedajemy AI.<br />
                <span className="text-primary" style={{ fontWeight: 400 }}>Sprzedajemy architekturę decyzji w świecie AI.</span>
              </p>
            </div>
          </AnimatedSection>

          {/* CTA */}
          <AnimatedSection delay={0.3}>
            <div className="mt-20">
              <Link
                href={`/${params.lang}/kontakt`}
                className="inline-block text-black font-medium rounded-full hover:bg-primary/90 transition-all duration-300"
                style={{
                  fontSize: 'clamp(16px, 1.5vw, 20px)',
                  letterSpacing: '0.02em',
                  padding: 'clamp(16px, 2vw, 20px) clamp(40px, 5vw, 60px)',
                  background: 'var(--color-primary)',
                  boxShadow: '0 4px 12px rgba(178, 158, 82, 0.2)',
                }}
              >
                Porozmawiajmy o Twojej architekturze decyzji
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

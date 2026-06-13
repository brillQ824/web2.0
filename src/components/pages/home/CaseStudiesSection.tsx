'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import type { Locale } from '@/i18n/config'

interface Metric {
  value: string
  label: string
}

interface CaseStudy {
  industry: string
  clientDesc: string
  problem: string
  solution: string
  metrics: Metric[]
  tags: string[]
}

const caseStudies: CaseStudy[] = [
  {
    industry: 'Legal Tech',
    clientDesc: 'Kancelaria prawna (anonimowo)',
    problem: 'Prawnicy poświęcali ponad 60% czasu na manualny przegląd standardowych klauzul w 300+ umowach miesięcznie',
    solution:
      'Multi-agent pipeline z Claude jako silnikiem wnioskowania — agent ekstrahuje klauzule ryzyka, porównuje z wzorcami prawnymi i generuje raport due diligence. Niejednoznaczne przypadki są automatycznie eskalowane do prawnika z uzasadnieniem.',
    metrics: [
      { value: '−78%', label: 'czas przeglądu' },
      { value: '300+', label: 'umów / mies.' },
      { value: '4×', label: 'szybciej niż ręcznie' },
    ],
    tags: ['Agentic AI', 'Claude API', 'RAG'],
  },
  {
    industry: 'Asset Management',
    clientDesc: 'Firma inwestycyjna (anonimowo)',
    problem: 'Analitycy tracili 4h dziennie na manualne przeszukiwanie raportów, newsów i danych rynkowych z kilkuset źródeł',
    solution:
      'Autonomiczny agent badawczy oparty na Claude z tool-use — monitoruje źródła w czasie rzeczywistym, syntetyzuje dane, generuje dzienny briefing inwestycyjny z rekomendacjami i oceną ryzyka.',
    metrics: [
      { value: '−85%', label: 'czas researchu' },
      { value: '200+', label: 'źródeł / dobę' },
      { value: '3 FTE', label: 'ekwiwalent pracy' },
    ],
    tags: ['Agentic AI', 'Claude API', 'Tool Use'],
  },
  {
    industry: 'E-commerce',
    clientDesc: 'Platforma sprzedażowa (anonimowo)',
    problem: 'Dział obsługi klienta przetwarzał 2 000+ zapytań miesięcznie bez kontekstu historii zakupowej klienta',
    solution:
      'Multi-agent system z Claude jako orkiestratorem — agent analizuje historię zamówień, personalizuje odpowiedzi i autonomicznie rozwiązuje powtarzalne przypadki. Złożone sprawy trafiają do człowieka z gotowym kontekstem.',
    metrics: [
      { value: '78%', label: 'spraw auto-rozwiązanych' },
      { value: '−45%', label: 'czas odpowiedzi' },
      { value: 'NPS +22', label: 'wzrost satysfakcji' },
    ],
    tags: ['Multi-Agent', 'Claude API', 'LangGraph'],
  },
  {
    industry: 'Enterprise / HR Tech',
    clientDesc: 'Korporacja produkcyjna (anonimowo)',
    problem: 'Nowi pracownicy potrzebowali 6–8 tygodni do pełnej produktywności — wiedza rozproszona w 15 000+ dokumentach',
    solution:
      'Agentic RAG zbudowany na Claude — agent przeszukuje całe repozytorium wiedzy firmy w kontekście roli pracownika, generuje personalizowane ścieżki onboardingu i odpowiada na pytania procesowe 24/7.',
    metrics: [
      { value: '−40%', label: 'czas wdrożenia' },
      { value: '15k+', label: 'dokumentów w bazie' },
      { value: '24/7', label: 'dostępność asystenta' },
    ],
    tags: ['RAG', 'Agentic AI', 'Claude API'],
  },
  {
    industry: 'Manufacturing',
    clientDesc: 'Producent przemysłowy (anonimowo)',
    problem: 'Koordynacja 12 systemów (ERP, MES, SCM) wymagała manualnej interwencji przy każdej anomalii produkcyjnej',
    solution:
      'Autonomiczny agent operacyjny monitoruje strumienie danych z systemów, identyfikuje anomalie i wykonuje predefiniowane akcje naprawcze. Claude odpowiada za wnioskowanie przyczynowo-skutkowe i generowanie raportów dla managera.',
    metrics: [
      { value: '−65%', label: 'interwencji manualnych' },
      { value: '12', label: 'systemów zintegrowanych' },
      { value: 'MTTR −55%', label: 'szybszy czas naprawy' },
    ],
    tags: ['Agentic AI', 'Tool Use', 'Claude API'],
  },
  {
    industry: 'Professional Services',
    clientDesc: 'Firma konsultingowa (anonimowo)',
    problem: 'Przygotowanie ofert przetargowych zajmowało 2–3 tygodnie i angażowało 4–6 specjalistów jednocześnie',
    solution:
      'Multi-agent pipeline generowania ofert — agent zbiera wymagania z RFP, przeszukuje repozytorium poprzednich projektów, generuje draft przez Claude i weryfikuje zgodność ze specyfikacją. Human-in-the-loop przy finalnej weryfikacji.',
    metrics: [
      { value: '3 dni', label: 'zamiast 3 tygodni' },
      { value: '−70%', label: 'nakład pracy' },
      { value: '+40%', label: 'skuteczność ofert' },
    ],
    tags: ['Gen AI', 'Claude API', 'Multi-Agent'],
  },
]

export default function CaseStudiesSection({ lang = 'pl' }: { lang?: Locale }) {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black overflow-hidden"
      style={{ padding: 'clamp(60px, 8vh, 100px) clamp(24px, 5vw, 80px)' }}
      aria-label="Case studies — realizacje AI"
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(178,158,82,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(178,158,82,0.4) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10" style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <span
            className="text-primary uppercase block mb-4"
            style={{ fontSize: '11px', letterSpacing: '0.2em', fontWeight: 400 }}
          >
            {lang === 'en' ? 'Case studies' : 'Realizacje'}
          </span>
          <h2
            className="text-white"
            style={{
              fontSize: 'clamp(28px, 4vw, 52px)',
              fontWeight: 400,
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
              maxWidth: '640px',
              marginBottom: '16px',
            }}
          >
            {lang === 'en' ? 'AI we deployed in production' : 'Projekty AI, które wdrożyliśmy'}
          </h2>
          <p
            className="text-gray-400"
            style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', lineHeight: 1.7, maxWidth: '480px' }}
          >
            {lang === 'en'
              ? 'Real-world deployments with measurable business outcomes.'
              : 'Realne wdrożenia produkcyjne z mierzalnymi wynikami biznesowymi.'}
          </p>
        </motion.div>

        {/* Cards grid */}
        <div
          className="grid gap-5"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))' }}
        >
          {caseStudies.map((study, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group border border-gray-800 hover:border-primary/30 transition-colors duration-500 flex flex-col"
              style={{ padding: 'clamp(24px, 2.5vw, 36px)' }}
            >
              {/* Industry + client */}
              <div className="mb-4">
                <span
                  className="text-primary uppercase"
                  style={{ fontSize: '10px', letterSpacing: '0.18em', fontWeight: 400 }}
                >
                  {study.industry}
                </span>
                <p className="text-gray-600 mt-1" style={{ fontSize: '12px' }}>
                  {study.clientDesc}
                </p>
              </div>

              {/* Problem — main headline */}
              <h3
                className="text-white group-hover:text-primary transition-colors duration-300"
                style={{
                  fontSize: 'clamp(15px, 1.4vw, 18px)',
                  fontWeight: 400,
                  letterSpacing: '-0.01em',
                  lineHeight: 1.35,
                  marginBottom: '14px',
                }}
              >
                {study.problem}
              </h3>

              {/* Solution */}
              <p
                className="text-gray-400 flex-grow"
                style={{ fontSize: '14px', lineHeight: 1.75, marginBottom: '28px' }}
              >
                {study.solution}
              </p>

              {/* Metrics */}
              <div
                className="grid grid-cols-3 gap-3 border-t border-gray-800 pt-5 mb-5"
              >
                {study.metrics.map((m, j) => (
                  <div key={j}>
                    <div
                      className="text-white"
                      style={{
                        fontSize: 'clamp(18px, 1.8vw, 22px)',
                        fontWeight: 300,
                        letterSpacing: '-0.02em',
                        lineHeight: 1,
                      }}
                    >
                      {m.value}
                    </div>
                    <div className="text-gray-500 mt-1" style={{ fontSize: '11px', lineHeight: 1.4 }}>
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {study.tags.map((tag, k) => (
                  <span
                    key={k}
                    className="text-gray-500 border border-gray-800"
                    style={{ fontSize: '11px', padding: '3px 10px', borderRadius: '100px' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-gray-700 text-xs mt-8"
          style={{ fontSize: '11px' }}
        >
          {lang === 'en'
            ? '* Data anonymised at client request. Details available under NDA.'
            : '* Dane zanonimizowane na prośbę klientów. Szczegóły dostępne po podpisaniu NDA.'}
        </motion.p>
      </div>
    </section>
  )
}

// 📄 PODSTRONA: R&D - Research & Development
import AnimatedSection from '@/components/shared/AnimatedSection'

const BASE_URL = 'https://brillq.today'

export async function generateMetadata({ params }: { params: { lang: string } }) {
  const { lang } = params
  return {
    title: 'R&D - Research & Development | brillQ',
    description: 'Poznaj nasze działania badawczo-rozwojowe w dziedzinie AI, Machine Learning i Large Language Models. Współpracujemy z uczelniami i instytucjami badawczymi.',
    alternates: {
      canonical: `${BASE_URL}/${lang}/rd`,
      languages: {
        'pl': `${BASE_URL}/pl/rd`,
        'en': `${BASE_URL}/en/rd`,
      },
    },
  }
}

const researchAreas = [
  {
    title: 'Large Language Models',
    description: 'Badania nad custom LLM training, fine-tuning, RAG systems i prompt engineering. Eksperymentujemy z najnowszymi architekturami GPT, LLaMA, Mistral.',
    topics: ['Custom LLM Training', 'Fine-tuning & LoRA', 'RAG Optimization', 'Prompt Engineering Research'],
  },
  {
    title: 'Agentic AI Systems',
    description: 'Rozwój autonomicznych systemów AI zdolnych do planowania, reasoning i wykonywania złożonych zadań. Multi-agent frameworks i tool-using agents.',
    topics: ['Multi-Agent Collaboration', 'Autonomous Planning', 'Tool-using Agents', 'ReAct & CoT Research'],
  },
  {
    title: 'Computer Vision',
    description: 'Zaawansowane badania w zakresie object detection, segmentation, face recognition i medical image analysis. SOTA modele i custom architectures.',
    topics: ['Medical Imaging AI', 'Real-time Detection', 'Semantic Segmentation', 'Vision Transformers'],
  },
  {
    title: 'MLOps & Infrastructure',
    description: 'Research w zakresie production ML systems, model monitoring, automated retraining i scalable deployment strategies.',
    topics: ['Model Monitoring', 'A/B Testing', 'Distributed Training', 'Edge Deployment'],
  },
]


export default function RDPage() {
  return (
    <div style={{ paddingTop: '120px' }}>
      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-black flex items-center justify-center" style={{ minHeight: '70vh', padding: 'clamp(80px, 12vh, 120px) clamp(24px, 5vw, 100px)' }}>
        {/* Background gradient orbs */}
        <div
          className="absolute opacity-20"
          style={{
            width: '500px',
            height: '500px',
            top: '20%',
            right: '10%',
            background: 'radial-gradient(circle, rgba(178, 158, 82, 0.15) 0%, transparent 70%)',
            filter: 'blur(80px)',
            zIndex: 0,
          }}
        />

        <div className="relative z-10 w-full text-center" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <AnimatedSection>
            <h1 className="text-white" style={{ fontSize: 'clamp(48px, 6.5vw, 100px)', fontWeight: 400, lineHeight: 1.2, letterSpacing: '-0.02em' }}>
              Badania i rozwój <span style={{ color: 'var(--color-primary)' }}>AI</span> w brillQ
            </h1>
            <p className="text-gray-400 mt-8" style={{ fontSize: 'clamp(18px, 2vw, 24px)', fontWeight: 300, maxWidth: '800px', margin: '32px auto 0', lineHeight: 1.6 }}>
              Śledzimy i implementujemy najnowsze badania z zakresu AI. Współpracujemy z uczelniami, instytucjami badawczymi i tech giants w rozwoju cutting-edge AI technologies.
            </p>

            {/* R&D Micro-Manifest */}
            <p className="text-white mt-12" style={{ fontSize: 'clamp(20px, 2.2vw, 28px)', fontWeight: 400, maxWidth: '900px', margin: '48px auto 0', lineHeight: 1.5, letterSpacing: '-0.01em' }}>
              Nasze R&D nie istnieje dla publikacji. <span style={{ color: 'var(--color-primary)' }}>Istnieje po to, by budować przewagę konkurencyjną klientów.</span>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Research Areas */}
      <section className="relative w-full overflow-hidden bg-black" style={{ padding: 'clamp(100px, 15vh, 140px) clamp(24px, 5vw, 100px)' }}>
        <div style={{ maxWidth: '1580px', margin: '0 auto' }}>
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-white mb-6" style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 400, lineHeight: 1.2, letterSpacing: '-0.02em' }}>
              Obszary <span style={{ color: 'var(--color-primary)' }}>Badawcze</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
            {researchAreas.map((area, index) => (
              <AnimatedSection key={index} delay={index * 0.15}>
                <div className="relative h-full" style={{ border: '1px solid rgba(112, 112, 112, 0.15)', padding: '48px 40px' }}>
                  {/* Decorative top line */}
                  <div className="mb-8" style={{ width: '60px', height: '2px', backgroundColor: 'var(--color-primary)', opacity: 0.8 }} />

                  <h3 className="text-white mb-5" style={{ fontSize: 'clamp(24px, 2.5vw, 32px)', fontWeight: 400, lineHeight: 1.2, letterSpacing: '-0.01em' }}>
                    {area.title}
                  </h3>
                  <p className="text-gray-400 mb-8" style={{ fontSize: 'clamp(16px, 1.2vw, 18px)', fontWeight: 300, lineHeight: 1.8, opacity: 0.9 }}>
                    {area.description}
                  </p>

                  <div className="space-y-2">
                    {area.topics.map((topic, i) => (
                      <div key={i} className="flex items-start gap-3 text-gray-400" style={{ fontSize: '15px', fontWeight: 300 }}>
                        <span style={{ color: 'var(--color-primary)', marginTop: '2px' }}>•</span>
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* R&D w Liquid Enterprise */}
      <section className="relative w-full overflow-hidden bg-black" style={{ padding: 'clamp(100px, 15vh, 140px) clamp(24px, 5vw, 100px)', borderTop: '1px solid rgba(112, 112, 112, 0.15)' }}>
        {/* Background gradient */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15"
          style={{
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, rgba(178, 158, 82, 0.12) 0%, transparent 70%)',
            filter: 'blur(120px)',
            zIndex: 0,
          }}
        />

        <div style={{ maxWidth: '1580px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <AnimatedSection className="text-center mb-24">
            <h2 className="text-white mb-6" style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 400, lineHeight: 1.2, letterSpacing: '-0.02em' }}>
              R&D w modelu{' '}
              <span style={{ color: 'var(--color-primary)' }}>Liquid Enterprise</span>
            </h2>
            <p className="text-gray-400 mt-6" style={{ fontSize: 'clamp(16px, 1.2vw, 20px)', fontWeight: 300, maxWidth: '900px', margin: '24px auto 0', lineHeight: 1.7, opacity: 0.9 }}>
              Nie mamy waterfall research process. Mamy <strong>eksperymentalne swarmy</strong>, które równolegle testują hipotezy i budują Core IP.
            </p>
          </AnimatedSection>

          <div className="relative max-w-5xl mx-auto">
            {/* Process Steps */}
            <div className="space-y-6">
              {[
                {
                  number: '01',
                  title: 'Experimental Swarms',
                  badge: 'Parallel Exploration',
                  description: 'Równoległe eksplorowanie nowych architektur',
                  detail: 'Dedykowane swarmy badawcze testują równolegle różne architektury AI, algorytmy i podejścia. Każdy swarm ma swoją hipotezę i autonomicznie eksperymentuje.',
                },
                {
                  number: '02',
                  title: 'Autonomous Validation',
                  badge: 'Self-organizing',
                  description: 'Swarmy weryfikują hipotezy niezależnie',
                  detail: 'Nie czekamy na approval committees. Każdy swarm autonomicznie testuje feasibility, analizuje wyniki i weryfikuje czy approach działa w praktyce.',
                },
                {
                  number: '03',
                  title: 'Core IP Synthesis',
                  badge: 'Orchestration Layer',
                  description: 'Successful patterns stają się Core IP',
                  detail: 'Działające rozwiązania integrujemy do orchestration layer jako reusable capabilities. To nie kod w repo — to orchestrable intelligence modules.',
                },
                {
                  number: '04',
                  title: 'Multi-Domain Deployment',
                  badge: 'Instant Scale',
                  description: 'Jednoczesne wdrożenie wszędzie',
                  detail: 'Nowe Core IP capabilities natychmiast dostępne dla: consulting swarms dla klientów, własnych systemów AI, treści szkoleniowych i publikacji.',
                },
                {
                  number: '05',
                  title: 'Continuous Evolution',
                  badge: 'Feedback Loops',
                  description: 'Swarmy uczą się z deploymentu',
                  detail: 'Każde wdrożenie generuje feedback. Swarmy analizują performance, identyfikują bottlenecks i autonomicznie ewoluują Core IP.',
                },
              ].map((step, index) => (
                <AnimatedSection key={index} delay={index * 0.12}>
                  <div
                    className="relative group"
                    style={{
                      border: '1px solid rgba(112, 112, 112, 0.15)',
                      padding: 'clamp(32px, 4vw, 48px)',
                      transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                      overflow: 'hidden',
                    }}
                  >
                    {/* Background glow on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: 'radial-gradient(circle at left, rgba(178, 158, 82, 0.06) 0%, transparent 70%)',
                        pointerEvents: 'none',
                      }}
                    />

                    <div className="relative flex items-start gap-8">
                      {/* Number */}
                      <div
                        className="flex-shrink-0 group-hover:text-primary transition-colors duration-300"
                        style={{
                          fontSize: 'clamp(48px, 6vw, 72px)',
                          fontWeight: 300,
                          color: 'rgba(178, 158, 82, 0.3)',
                          lineHeight: 1,
                        }}
                      >
                        {step.number}
                      </div>

                      {/* Content */}
                      <div className="flex-1 pt-2">
                        <div className="flex items-center gap-3 mb-4">
                          <h3
                            className="text-white group-hover:text-primary transition-colors duration-300"
                            style={{
                              fontSize: 'clamp(24px, 2.5vw, 32px)',
                              fontWeight: 400,
                              lineHeight: 1.2,
                              letterSpacing: '-0.01em',
                            }}
                          >
                            {step.title}
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
                            {step.badge}
                          </span>
                        </div>
                        <p
                          className="text-gray-400 mb-2"
                          style={{
                            fontSize: 'clamp(16px, 1.3vw, 18px)',
                            fontWeight: 400,
                            lineHeight: 1.6,
                            opacity: 0.9,
                          }}
                        >
                          {step.description}
                        </p>
                        <p
                          className="text-gray-300"
                          style={{
                            fontSize: 'clamp(14px, 1.1vw, 16px)',
                            fontWeight: 300,
                            lineHeight: 1.7,
                            opacity: 0.8,
                          }}
                        >
                          {step.detail}
                        </p>
                      </div>

                      {/* Arrow indicator */}
                      {index < 4 && (
                        <div
                          className="absolute bottom-0 left-16 transform translate-y-full"
                          style={{
                            width: '2px',
                            height: '24px',
                            background: 'linear-gradient(to bottom, rgba(178, 158, 82, 0.3), transparent)',
                          }}
                        />
                      )}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Summary insight */}
            <AnimatedSection delay={0.7}>
              <div className="mt-16 text-center max-w-3xl mx-auto">
                <div
                  style={{
                    padding: 'clamp(32px, 4vw, 48px)',
                    background: 'linear-gradient(135deg, rgba(178, 158, 82, 0.05) 0%, rgba(178, 158, 82, 0.02) 100%)',
                    border: '1px solid rgba(178, 158, 82, 0.2)',
                    borderRadius: '8px',
                  }}
                >
                  <p
                    className="text-gray-400 mb-4"
                    style={{
                      fontSize: 'clamp(16px, 1.2vw, 18px)',
                      fontWeight: 300,
                      lineHeight: 1.8,
                      opacity: 0.9,
                    }}
                  >
                    Tradycyjne R&D to <strong>linearny waterfall</strong>: eksploracja → walidacja → prototyp → produkt → deployment.
                  </p>
                  <p
                    className="text-white"
                    style={{
                      fontSize: 'clamp(18px, 1.4vw, 22px)',
                      fontWeight: 400,
                      lineHeight: 1.7,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    Liquid Enterprise R&D to <span style={{ color: 'var(--color-primary)' }}>równoległe swarmy</span>, które eksperymentują autonomicznie i budują <span style={{ color: 'var(--color-primary)' }}>Core IP</span> dostępny natychmiast dla wszystkich obszarów biznesu.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  )
}

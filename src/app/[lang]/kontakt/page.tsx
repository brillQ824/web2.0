// 📄 PODSTRONA: Kontakt
'use client'
import { useState } from 'react'
import AnimatedSection from '@/components/shared/AnimatedSection'
import ContactForm from '@/components/pages/contact/ContactForm'
import InteractiveBotAssistant from '@/components/InteractiveBotAssistant'
import type { Locale } from '@/i18n/config'

export default function KontaktPage({ params }: { params: { lang: Locale } }) {
  const { lang } = params
  const [chatHistory, setChatHistory] = useState<string>('')
  return (
    <div className="pt-[60px] md:pt-[120px]">
      {/* Hero Section */}
      <section
        id="konsultacja"
        className="relative w-full overflow-hidden bg-black"
        style={{ padding: 'clamp(40px, 8vh, 100px) clamp(24px, 4vw, 60px)' }}
      >
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(178, 158, 82, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(178, 158, 82, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="relative z-10" style={{ maxWidth: '1600px', margin: '0 auto' }}>
          {/* Header */}
          <AnimatedSection>
            <div className="text-center mb-12">
              <h1 className="text-white mb-4" style={{
                fontSize: 'clamp(40px, 6vw, 64px)',
                fontWeight: 400,
                lineHeight: 1.2,
                letterSpacing: '-0.02em'
              }}>
                {lang === 'en' ? 'Contact ' : 'Skontaktuj się z '}<span className="text-primary">brillQ AI</span>
              </h1>
              <p className="text-gray-400 mx-auto" style={{
                fontSize: 'clamp(16px, 1.8vw, 20px)',
                fontWeight: 300,
                lineHeight: 1.7,
                maxWidth: '700px'
              }}>
                {lang === 'en'
                  ? 'Our AI assistant knows everything about our products, projects and deployments. Ask a question and find out how we can help your company.'
                  : 'Nasz asystent AI zna wszystko o naszych produktach, projektach i wdrożeniach. Zadaj pytanie i dowiedz się, jak możemy pomóc Twojej firmie.'}
              </p>
            </div>
          </AnimatedSection>

          {/* Main Content - AI Assistant + Form */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12 items-start">

            {/* LEFT: AI Assistant Chat */}
            <AnimatedSection delay={0.2}>
              <InteractiveBotAssistant onChatUpdate={setChatHistory} />
            </AnimatedSection>

            {/* RIGHT: Contact Form */}
            <AnimatedSection delay={0.4}>
              <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl p-6">
                <div className="mb-5">
                  <h2 className="text-white text-xl font-medium mb-2">
                    {lang === 'en' ? 'Contact form' : 'Formularz kontaktowy'}
                  </h2>
                  <p className="text-gray-400 text-sm">
                    {lang === 'en' ? "We'll reply within 24h" : 'Odpowiemy w ciągu 24h'}
                  </p>
                </div>
                <ContactForm chatHistory={chatHistory} lang={lang} />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Secondary Info Section - Address & Map */}
      <section className="relative w-full overflow-hidden bg-black" style={{ padding: 'clamp(60px, 10vh, 80px) clamp(24px, 5vw, 80px)', borderTop: '1px solid rgba(178, 158, 82, 0.1)' }}>
        <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
          <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-10 items-start">
            {/* Address Info */}
            <AnimatedSection>
              <div>
                <h2 className="text-white mb-6" style={{
                  fontSize: 'clamp(24px, 2.5vw, 30px)',
                  fontWeight: 400,
                  letterSpacing: '-0.01em'
                }}>
                  {lang === 'en' ? 'Company details' : 'Dane firmy'}
                </h2>

                <div className="space-y-5">
                  {/* Adres - opens Google Maps */}
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Aleja+Prymasa+Tysiąclecia+83A,+01-242+Warszawa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 group cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1.5 text-sm">Adres</h3>
                      <p className="text-gray-400 group-hover:text-primary transition-colors" style={{ fontSize: '13px', lineHeight: 1.5 }}>
                        Aleja Prymasa Tysiąclecia 83A<br />
                        01-242 Warszawa, Polska
                      </p>
                    </div>
                  </a>

                  {/* Dane rejestrowe - opens KRS registry */}
                  <a
                    href="https://wyszukiwarka-krs.ms.gov.pl/?q=0000901473"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 group cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1.5 text-sm">Dane rejestrowe</h3>
                      <p className="text-gray-400 group-hover:text-primary transition-colors" style={{ fontSize: '13px', lineHeight: 1.5 }}>
                        NIP: 5223203240<br />
                        KRS: 0000901473
                      </p>
                    </div>
                  </a>

                  {/* Telefon - initiates call */}
                  <a
                    href="tel:+48662466446"
                    className="flex items-start gap-3 group cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1.5 text-sm">Telefon</h3>
                      <p className="text-gray-400 group-hover:text-primary transition-colors" style={{ fontSize: '13px', lineHeight: 1.5 }}>
                        +48 662 466 446
                      </p>
                    </div>
                  </a>

                  {/* Email - opens email client */}
                  <a
                    href="mailto:hello@brillQ.today"
                    className="flex items-start gap-3 group cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1.5 text-sm">Email</h3>
                      <p className="text-gray-400 group-hover:text-primary transition-colors" style={{ fontSize: '13px', lineHeight: 1.5 }}>
                        hello@brillQ.today
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Map */}
            <AnimatedSection delay={0.2}>
              <div className="w-full rounded-2xl overflow-hidden border-2 border-primary/20" style={{ height: '400px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2442.8745917683247!2d20.957487876926892!3d52.26289867198329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecce2b8f3e3e3%3A0x3e3e3e3e3e3e3e3e!2sAleja%20Prymasa%20Tysi%C4%85clecia%2083A%2C%2001-242%20Warszawa!5e0!3m2!1sen!2spl!4v1234567890123!5m2!1sen!2spl"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    filter: 'grayscale(100%) invert(92%) contrast(0.9) brightness(0.95)',
                    opacity: 0.85
                  }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokalizacja biura brillQ AI"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  )
}

import AnimatedSection from '@/components/shared/AnimatedSection'

const BASE_URL = 'https://brillq.today'

export async function generateMetadata({ params }: { params: { lang: string } }) {
  const { lang } = params
  return {
    title: 'Polityka Prywatności',
    description: 'Polityka prywatności brillQ - informacje o przetwarzaniu danych osobowych.',
    alternates: {
      canonical: `${BASE_URL}/${lang}/polityka-prywatnosci`,
      languages: {
        'pl': `${BASE_URL}/pl/polityka-prywatnosci`,
        'en': `${BASE_URL}/en/polityka-prywatnosci`,
      },
    },
  }
}

export default function PolitykaPrywatnosciPage() {
  return (
    <div style={{ paddingTop: '120px' }}>
      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-black flex items-center justify-center" style={{ minHeight: '30vh', padding: 'clamp(60px, 8vh, 80px) clamp(24px, 5vw, 80px)' }}>
        <div className="relative z-10 w-full text-center" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <AnimatedSection>
            <h1 className="text-white" style={{ fontSize: 'clamp(40px, 5.5vw, 72px)', fontWeight: 400, lineHeight: 1.2, fontFamily: 'var(--font-safiro)' }}>
              Polityka Prywatności
            </h1>
            <p className="text-gray-400 mt-6" style={{ fontSize: 'clamp(14px, 1.5vw, 16px)', fontWeight: 300 }}>
              Ostatnia aktualizacja: 1 stycznia 2026
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="relative w-full overflow-hidden bg-black" style={{ padding: 'clamp(60px, 10vh, 80px) clamp(24px, 5vw, 80px)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <AnimatedSection>
            <div className="prose-content">
              {/* Intro */}
              <div className="mb-12">
                <p className="text-gray-400" style={{ fontSize: 'clamp(16px, 1.4vw, 18px)', fontWeight: 300, lineHeight: 1.8 }}>
                  W <span className="text-white">brillQ <span className="text-primary">AI</span></span> stawiamy na przejrzystość i bezpieczeństwo. Jako firma specjalizująca się w zaawansowanych rozwiązaniach AI,
                  rozumiemy wartość danych i traktujemy Twoją prywatność z najwyższą starannością. Poniżej wyjaśniamy, jak przetwarzamy
                  Twoje dane osobowe w sposób zgodny z przepisami RODO.
                </p>
              </div>

              {/* 1. Administrator */}
              <div className="mb-10">
                <h2 className="text-white mb-4" style={{ fontSize: 'clamp(24px, 2.2vw, 32px)', fontWeight: 400, lineHeight: 1.2 }}>
                  1. Kim jesteśmy?
                </h2>
                <p className="text-gray-400 mb-3" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', fontWeight: 300, lineHeight: 1.8 }}>
                  Administratorem Twoich danych osobowych jest:
                </p>
                <div className="pl-4 border-l-2 border-primary/30">
                  <p className="text-gray-400" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', fontWeight: 300, lineHeight: 1.8 }}>
                    <strong className="text-white">brillQ Sp. z o.o.</strong><br />
                    Aleja Prymasa Tysiąclecia 83A<br />
                    01-242 Warszawa<br />
                    NIP: 5223203240 | KRS: 0000901473
                  </p>
                </div>
              </div>

              {/* 2. Jakie dane zbieramy */}
              <div className="mb-10">
                <h2 className="text-white mb-4" style={{ fontSize: 'clamp(24px, 2.2vw, 32px)', fontWeight: 400, lineHeight: 1.2 }}>
                  2. Jakie dane zbieramy i dlaczego?
                </h2>
                <p className="text-gray-400 mb-6" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', fontWeight: 300, lineHeight: 1.8 }}>
                  Zbieramy tylko te dane, które są niezbędne do realizacji naszych usług konsultingowych AI:
                </p>

                <div className="space-y-6">
                  <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                    <h3 className="text-primary mb-2" style={{ fontSize: 'clamp(16px, 1.5vw, 20px)', fontWeight: 400 }}>
                      Formularz kontaktowy
                    </h3>
                    <p className="text-gray-400 mb-2" style={{ fontSize: 'clamp(14px, 1.2vw, 16px)', fontWeight: 300, lineHeight: 1.7 }}>
                      <strong className="text-gray-300">Dane:</strong> imię, nazwisko, email, nazwa firmy, treść wiadomości
                    </p>
                    <p className="text-gray-400 mb-2" style={{ fontSize: 'clamp(14px, 1.2vw, 16px)', fontWeight: 300, lineHeight: 1.7 }}>
                      <strong className="text-gray-300">Cel:</strong> odpowiedź na zapytanie, nawiązanie kontaktu biznesowego
                    </p>
                    <p className="text-gray-400" style={{ fontSize: 'clamp(14px, 1.2vw, 16px)', fontWeight: 300, lineHeight: 1.7 }}>
                      <strong className="text-gray-300">Podstawa prawna:</strong> zgoda (art. 6 ust. 1 lit. a RODO)
                    </p>
                  </div>

                  <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                    <h3 className="text-primary mb-2" style={{ fontSize: 'clamp(16px, 1.5vw, 20px)', fontWeight: 400 }}>
                      Współpraca i realizacja projektów
                    </h3>
                    <p className="text-gray-400 mb-2" style={{ fontSize: 'clamp(14px, 1.2vw, 16px)', fontWeight: 300, lineHeight: 1.7 }}>
                      <strong className="text-gray-300">Dane:</strong> dane kontaktowe, dane firmowe, informacje projektowe
                    </p>
                    <p className="text-gray-400 mb-2" style={{ fontSize: 'clamp(14px, 1.2vw, 16px)', fontWeight: 300, lineHeight: 1.7 }}>
                      <strong className="text-gray-300">Cel:</strong> realizacja umów konsultingowych, projektów AI
                    </p>
                    <p className="text-gray-400" style={{ fontSize: 'clamp(14px, 1.2vw, 16px)', fontWeight: 300, lineHeight: 1.7 }}>
                      <strong className="text-gray-300">Podstawa prawna:</strong> wykonanie umowy (art. 6 ust. 1 lit. b RODO)
                    </p>
                  </div>

                  <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                    <h3 className="text-primary mb-2" style={{ fontSize: 'clamp(16px, 1.5vw, 20px)', fontWeight: 400 }}>
                      Dane techniczne (cookies)
                    </h3>
                    <p className="text-gray-400 mb-2" style={{ fontSize: 'clamp(14px, 1.2vw, 16px)', fontWeight: 300, lineHeight: 1.7 }}>
                      <strong className="text-gray-300">Dane:</strong> adres IP, dane o urządzeniu, przeglądarce
                    </p>
                    <p className="text-gray-400 mb-2" style={{ fontSize: 'clamp(14px, 1.2vw, 16px)', fontWeight: 300, lineHeight: 1.7 }}>
                      <strong className="text-gray-300">Cel:</strong> zapewnienie funkcjonalności strony, analityka
                    </p>
                    <p className="text-gray-400" style={{ fontSize: 'clamp(14px, 1.2vw, 16px)', fontWeight: 300, lineHeight: 1.7 }}>
                      <strong className="text-gray-300">Podstawa prawna:</strong> prawnie uzasadniony interes (art. 6 ust. 1 lit. f RODO)
                    </p>
                  </div>
                </div>
              </div>

              {/* 3. Bezpieczeństwo */}
              <div className="mb-10">
                <h2 className="text-white mb-4" style={{ fontSize: 'clamp(24px, 2.2vw, 32px)', fontWeight: 400, lineHeight: 1.2 }}>
                  3. Jak chronimy Twoje dane?
                </h2>
                <p className="text-gray-400 mb-4" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', fontWeight: 300, lineHeight: 1.8 }}>
                  Jako eksperci AI wiemy, jak kluczowe jest bezpieczeństwo danych. Stosujemy zaawansowane środki ochrony:
                </p>
                <ul className="space-y-2 list-none pl-0">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">→</span>
                    <span className="text-gray-400" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', fontWeight: 300, lineHeight: 1.8 }}>
                      Szyfrowanie połączeń SSL/TLS
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">→</span>
                    <span className="text-gray-400" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', fontWeight: 300, lineHeight: 1.8 }}>
                      Kontrola dostępu oparta na zasadzie najniższych uprawnień
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">→</span>
                    <span className="text-gray-400" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', fontWeight: 300, lineHeight: 1.8 }}>
                      Regularne audyty bezpieczeństwa systemów IT
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">→</span>
                    <span className="text-gray-400" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', fontWeight: 300, lineHeight: 1.8 }}>
                      Backupy i zabezpieczenia przed utratą danych
                    </span>
                  </li>
                </ul>
              </div>

              {/* 4. Kto ma dostęp */}
              <div className="mb-10">
                <h2 className="text-white mb-4" style={{ fontSize: 'clamp(24px, 2.2vw, 32px)', fontWeight: 400, lineHeight: 1.2 }}>
                  4. Kto ma dostęp do Twoich danych?
                </h2>
                <p className="text-gray-400 mb-4" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', fontWeight: 300, lineHeight: 1.8 }}>
                  Twoje dane przekazujemy wyłącznie zaufanym partnerom, którzy wspierają nas w działalności:
                </p>
                <ul className="space-y-2 list-none pl-0">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-gray-400" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', fontWeight: 300, lineHeight: 1.8 }}>
                      Dostawcy usług cloud i hostingu (serwerownie zgodne z RODO)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-gray-400" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', fontWeight: 300, lineHeight: 1.8 }}>
                      Narzędzia analityczne i marketingowe (Google Analytics, LinkedIn)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-gray-400" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', fontWeight: 300, lineHeight: 1.8 }}>
                      Biuro rachunkowe i kancelaria prawna
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-gray-400" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', fontWeight: 300, lineHeight: 1.8 }}>
                      Organy publiczne (na żądanie i zgodnie z prawem)
                    </span>
                  </li>
                </ul>
                <p className="text-gray-400 mt-4" style={{ fontSize: 'clamp(14px, 1.2vw, 15px)', fontWeight: 300, lineHeight: 1.8, fontStyle: 'italic' }}>
                  Nie przekazujemy Twoich danych poza Europejski Obszar Gospodarczy (EOG) bez odpowiednich zabezpieczeń.
                </p>
              </div>

              {/* 5. Jak długo */}
              <div className="mb-10">
                <h2 className="text-white mb-4" style={{ fontSize: 'clamp(24px, 2.2vw, 32px)', fontWeight: 400, lineHeight: 1.2 }}>
                  5. Jak długo przechowujemy dane?
                </h2>
                <p className="text-gray-400 mb-4" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', fontWeight: 300, lineHeight: 1.8 }}>
                  Przechowujemy dane tylko tak długo, jak to konieczne:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-primary mt-1" style={{ fontSize: 'clamp(14px, 1.2vw, 16px)' }}>→</span>
                    <div>
                      <p className="text-gray-300 mb-1" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', fontWeight: 400 }}>
                        Zapytania kontaktowe:
                      </p>
                      <p className="text-gray-400" style={{ fontSize: 'clamp(14px, 1.2vw, 16px)', fontWeight: 300, lineHeight: 1.7 }}>
                        do czasu realizacji zapytania lub wycofania zgody
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary mt-1" style={{ fontSize: 'clamp(14px, 1.2vw, 16px)' }}>→</span>
                    <div>
                      <p className="text-gray-300 mb-1" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', fontWeight: 400 }}>
                        Dane związane z umową:
                      </p>
                      <p className="text-gray-400" style={{ fontSize: 'clamp(14px, 1.2vw, 16px)', fontWeight: 300, lineHeight: 1.7 }}>
                        przez okres realizacji umowy + 5 lat (przepisy podatkowe)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary mt-1" style={{ fontSize: 'clamp(14px, 1.2vw, 16px)' }}>→</span>
                    <div>
                      <p className="text-gray-300 mb-1" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', fontWeight: 400 }}>
                        Dane marketingowe:
                      </p>
                      <p className="text-gray-400" style={{ fontSize: 'clamp(14px, 1.2vw, 16px)', fontWeight: 300, lineHeight: 1.7 }}>
                        do momentu wycofania zgody
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 6. Twoje prawa */}
              <div className="mb-10">
                <h2 className="text-white mb-4" style={{ fontSize: 'clamp(24px, 2.2vw, 32px)', fontWeight: 400, lineHeight: 1.2 }}>
                  6. Jakie masz prawa?
                </h2>
                <p className="text-gray-400 mb-6" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', fontWeight: 300, lineHeight: 1.8 }}>
                  Zgodnie z RODO masz pełną kontrolę nad swoimi danymi. Przysługuje Ci prawo do:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-900/30 rounded-lg p-4 border border-gray-800">
                    <p className="text-primary mb-1" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', fontWeight: 400 }}>
                      ✓ Dostępu do danych
                    </p>
                    <p className="text-gray-400" style={{ fontSize: 'clamp(13px, 1.1vw, 14px)', fontWeight: 300 }}>
                      Możesz uzyskać kopię swoich danych
                    </p>
                  </div>
                  <div className="bg-gray-900/30 rounded-lg p-4 border border-gray-800">
                    <p className="text-primary mb-1" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', fontWeight: 400 }}>
                      ✓ Sprostowania
                    </p>
                    <p className="text-gray-400" style={{ fontSize: 'clamp(13px, 1.1vw, 14px)', fontWeight: 300 }}>
                      Popraw nieprawidłowe informacje
                    </p>
                  </div>
                  <div className="bg-gray-900/30 rounded-lg p-4 border border-gray-800">
                    <p className="text-primary mb-1" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', fontWeight: 400 }}>
                      ✓ Usunięcia (&ldquo;prawo do bycia zapomnianym&rdquo;)
                    </p>
                    <p className="text-gray-400" style={{ fontSize: 'clamp(13px, 1.1vw, 14px)', fontWeight: 300 }}>
                      Usuniemy dane, gdy przestaną być potrzebne
                    </p>
                  </div>
                  <div className="bg-gray-900/30 rounded-lg p-4 border border-gray-800">
                    <p className="text-primary mb-1" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', fontWeight: 400 }}>
                      ✓ Ograniczenia przetwarzania
                    </p>
                    <p className="text-gray-400" style={{ fontSize: 'clamp(13px, 1.1vw, 14px)', fontWeight: 300 }}>
                      Możesz zawiesić przetwarzanie
                    </p>
                  </div>
                  <div className="bg-gray-900/30 rounded-lg p-4 border border-gray-800">
                    <p className="text-primary mb-1" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', fontWeight: 400 }}>
                      ✓ Przenoszenia danych
                    </p>
                    <p className="text-gray-400" style={{ fontSize: 'clamp(13px, 1.1vw, 14px)', fontWeight: 300 }}>
                      Otrzymasz dane w formacie maszynowym
                    </p>
                  </div>
                  <div className="bg-gray-900/30 rounded-lg p-4 border border-gray-800">
                    <p className="text-primary mb-1" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', fontWeight: 400 }}>
                      ✓ Sprzeciwu
                    </p>
                    <p className="text-gray-400" style={{ fontSize: 'clamp(13px, 1.1vw, 14px)', fontWeight: 300 }}>
                      Możesz nie zgodzić się na przetwarzanie
                    </p>
                  </div>
                </div>
                <p className="text-gray-400 mt-6" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', fontWeight: 300, lineHeight: 1.8 }}>
                  Aby skorzystać z praw, skontaktuj się z nami:{' '}
                  <a href="mailto:hello@brillQ.today" className="text-primary hover:underline">hello@brillQ.today</a>
                </p>
                <p className="text-gray-400 mt-3" style={{ fontSize: 'clamp(14px, 1.2vw, 15px)', fontWeight: 300, lineHeight: 1.8 }}>
                  Masz również prawo wnieść skargę do Prezesa Urzędu Ochrony Danych Osobowych (PUODO).
                </p>
              </div>

              {/* 7. Cookies */}
              <div className="mb-10">
                <h2 className="text-white mb-4" style={{ fontSize: 'clamp(24px, 2.2vw, 32px)', fontWeight: 400, lineHeight: 1.2 }}>
                  7. Pliki cookies
                </h2>
                <p className="text-gray-400" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', fontWeight: 300, lineHeight: 1.8 }}>
                  Nasza strona używa plików cookies w celu zapewnienia lepszego doświadczenia. Szczegółowe informacje znajdziesz w{' '}
                  <a href="/polityka-cookies" className="text-primary hover:underline">Polityce Cookies</a>.
                </p>
              </div>

              {/* 8. Kontakt */}
              <div className="mb-10">
                <h2 className="text-white mb-4" style={{ fontSize: 'clamp(24px, 2.2vw, 32px)', fontWeight: 400, lineHeight: 1.2 }}>
                  8. Pytania? Skontaktuj się z nami
                </h2>
                <p className="text-gray-400 mb-4" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', fontWeight: 300, lineHeight: 1.8 }}>
                  Jeśli masz jakiekolwiek pytania dotyczące przetwarzania danych osobowych, jesteśmy do Twojej dyspozycji:
                </p>
                <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                  <p className="text-gray-400" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', fontWeight: 300, lineHeight: 1.8 }}>
                    <strong className="text-white">Email:</strong> <a href="mailto:hello@brillQ.today" className="text-primary hover:underline">hello@brillQ.today</a><br />
                    <strong className="text-white">Telefon:</strong> <a href="tel:+48662466446" className="text-primary hover:underline">+48 662 466 446</a><br />
                    <strong className="text-white">Adres:</strong> Aleja Prymasa Tysiąclecia 83A, 01-242 Warszawa
                  </p>
                </div>
              </div>

              {/* Footer note */}
              <div className="mt-12 pt-8 border-t border-gray-800">
                <p className="text-gray-300 text-center" style={{ fontSize: 'clamp(13px, 1.1vw, 14px)', fontWeight: 300, lineHeight: 1.7 }}>
                  brillQ AI zobowiązuje się do ochrony Twojej prywatności zgodnie z najwyższymi standardami branży AI i przepisami RODO.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

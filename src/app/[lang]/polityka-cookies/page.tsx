import AnimatedSection from '@/components/shared/AnimatedSection'

const BASE_URL = 'https://brillq.today'

export async function generateMetadata({ params }: { params: { lang: string } }) {
  const { lang } = params
  return {
    title: 'Polityka Cookies',
    description: 'Polityka cookies brillQ AI - informacje o wykorzystywaniu plików cookies.',
    alternates: {
      canonical: `${BASE_URL}/${lang}/polityka-cookies`,
      languages: {
        'pl': `${BASE_URL}/pl/polityka-cookies`,
        'en': `${BASE_URL}/en/polityka-cookies`,
      },
    },
  }
}

export default function PolitykaCookiesPage() {
  return (
    <div style={{ paddingTop: '120px' }}>
      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-black flex items-center justify-center" style={{ minHeight: '30vh', padding: 'clamp(60px, 8vh, 80px) clamp(24px, 5vw, 80px)' }}>
        <div className="relative z-10 w-full text-center" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <AnimatedSection>
            <h1 className="text-white" style={{ fontSize: 'clamp(40px, 5.5vw, 72px)', fontWeight: 400, lineHeight: 1.2, fontFamily: 'var(--font-safiro)' }}>
              Polityka Cookies
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
                  W <span className="text-white">brillQ <span className="text-primary">AI</span></span> dbamy o transparentność w kwestii wykorzystywania technologii cookies. Poniżej wyjaśniamy,
                  jak i dlaczego używamy plików cookies na naszej stronie internetowej, aby zapewnić Ci najlepsze możliwe
                  doświadczenie użytkownika.
                </p>
              </div>

              {/* 1. Czym są cookies */}
              <div className="mb-10">
                <h2 className="text-white mb-4" style={{ fontSize: 'clamp(24px, 2.2vw, 32px)', fontWeight: 400, lineHeight: 1.2 }}>
                  1. Czym są pliki cookies?
                </h2>
                <p className="text-gray-400" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', fontWeight: 300, lineHeight: 1.8 }}>
                  Pliki cookies to małe pliki tekstowe zapisywane na Twoim urządzeniu (komputerze, tablecie, smartfonie)
                  podczas przeglądania stron internetowych. Cookies pozwalają na zapamiętanie Twoich preferencji i
                  ułatwiają korzystanie z naszej strony, zapewniając płynniejszą nawigację i lepsze dopasowanie treści.
                </p>
              </div>

              {/* 2. Rodzaje cookies */}
              <div className="mb-10">
                <h2 className="text-white mb-4" style={{ fontSize: 'clamp(24px, 2.2vw, 32px)', fontWeight: 400, lineHeight: 1.2 }}>
                  2. Rodzaje plików cookies
                </h2>
                <p className="text-gray-400 mb-6" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', fontWeight: 300, lineHeight: 1.8 }}>
                  Na naszej stronie wykorzystujemy różne typy plików cookies w zależności od ich funkcji:
                </p>

                <div className="space-y-6">
                  <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                    <h3 className="text-primary mb-2" style={{ fontSize: 'clamp(16px, 1.5vw, 20px)', fontWeight: 400 }}>
                      Cookies niezbędne
                    </h3>
                    <p className="text-gray-400" style={{ fontSize: 'clamp(14px, 1.2vw, 16px)', fontWeight: 300, lineHeight: 1.7 }}>
                      Te pliki cookies są konieczne do prawidłowego działania strony internetowej. Umożliwiają podstawowe
                      funkcje, takie jak nawigacja po stronie i dostęp do zabezpieczonych obszarów. Strona nie może
                      prawidłowo funkcjonować bez tych plików cookies.
                    </p>
                  </div>

                  <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                    <h3 className="text-primary mb-2" style={{ fontSize: 'clamp(16px, 1.5vw, 20px)', fontWeight: 400 }}>
                      Cookies funkcjonalne
                    </h3>
                    <p className="text-gray-400" style={{ fontSize: 'clamp(14px, 1.2vw, 16px)', fontWeight: 300, lineHeight: 1.7 }}>
                      Te pliki cookies pozwalają na zapamiętanie Twoich wyborów (np. język, region) i zapewniają
                      ulepszone, bardziej spersonalizowane funkcje. Informacje zbierane przez te cookies mogą być
                      anonimizowane i nie śledzą Twojej aktywności na innych stronach.
                    </p>
                  </div>

                  <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                    <h3 className="text-primary mb-2" style={{ fontSize: 'clamp(16px, 1.5vw, 20px)', fontWeight: 400 }}>
                      Cookies analityczne
                    </h3>
                    <p className="text-gray-400" style={{ fontSize: 'clamp(14px, 1.2vw, 16px)', fontWeight: 300, lineHeight: 1.7 }}>
                      Te pliki cookies pomagają nam zrozumieć, w jaki sposób odwiedzający korzystają z naszej strony,
                      zbierając i raportując informacje anonimowo. Wykorzystujemy Google Analytics 4 do analizy ruchu
                      na stronie, co pozwala nam ciągle ulepszać nasze usługi.
                    </p>
                  </div>

                  <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                    <h3 className="text-primary mb-2" style={{ fontSize: 'clamp(16px, 1.5vw, 20px)', fontWeight: 400 }}>
                      Cookies marketingowe
                    </h3>
                    <p className="text-gray-400" style={{ fontSize: 'clamp(14px, 1.2vw, 16px)', fontWeight: 300, lineHeight: 1.7 }}>
                      Te pliki cookies służą do śledzenia odwiedzających na stronach internetowych w celu wyświetlania
                      reklam, które są dla nich istotne i angażujące. Pomagają nam mierzyć skuteczność kampanii
                      reklamowych.
                    </p>
                  </div>
                </div>
              </div>

              {/* 3. Wykorzystywane cookies */}
              <div className="mb-10">
                <h2 className="text-white mb-4" style={{ fontSize: 'clamp(24px, 2.2vw, 32px)', fontWeight: 400, lineHeight: 1.2 }}>
                  3. Wykorzystywane pliki cookies
                </h2>
                <p className="text-gray-400 mb-6" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', fontWeight: 300, lineHeight: 1.8 }}>
                  Poniższa tabela przedstawia szczegółowe informacje o plikach cookies używanych na naszej stronie:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-gray-800">
                        <th className="px-4 py-3 text-left text-gray-300" style={{ fontSize: 'clamp(14px, 1.2vw, 16px)', fontWeight: 400 }}>Nazwa</th>
                        <th className="px-4 py-3 text-left text-gray-300" style={{ fontSize: 'clamp(14px, 1.2vw, 16px)', fontWeight: 400 }}>Typ</th>
                        <th className="px-4 py-3 text-left text-gray-300" style={{ fontSize: 'clamp(14px, 1.2vw, 16px)', fontWeight: 400 }}>Czas przechowywania</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      <tr className="hover:bg-gray-900/30 transition-colors">
                        <td className="px-4 py-3 text-gray-400" style={{ fontSize: 'clamp(14px, 1.2vw, 15px)', fontWeight: 300 }}>cookieConsent</td>
                        <td className="px-4 py-3 text-gray-400" style={{ fontSize: 'clamp(14px, 1.2vw, 15px)', fontWeight: 300 }}>Niezbędne</td>
                        <td className="px-4 py-3 text-gray-400" style={{ fontSize: 'clamp(14px, 1.2vw, 15px)', fontWeight: 300 }}>1 rok</td>
                      </tr>
                      <tr className="hover:bg-gray-900/30 transition-colors">
                        <td className="px-4 py-3 text-gray-400" style={{ fontSize: 'clamp(14px, 1.2vw, 15px)', fontWeight: 300 }}>_ga</td>
                        <td className="px-4 py-3 text-gray-400" style={{ fontSize: 'clamp(14px, 1.2vw, 15px)', fontWeight: 300 }}>Analityczne</td>
                        <td className="px-4 py-3 text-gray-400" style={{ fontSize: 'clamp(14px, 1.2vw, 15px)', fontWeight: 300 }}>2 lata</td>
                      </tr>
                      <tr className="hover:bg-gray-900/30 transition-colors">
                        <td className="px-4 py-3 text-gray-400" style={{ fontSize: 'clamp(14px, 1.2vw, 15px)', fontWeight: 300 }}>_ga_*</td>
                        <td className="px-4 py-3 text-gray-400" style={{ fontSize: 'clamp(14px, 1.2vw, 15px)', fontWeight: 300 }}>Analityczne</td>
                        <td className="px-4 py-3 text-gray-400" style={{ fontSize: 'clamp(14px, 1.2vw, 15px)', fontWeight: 300 }}>2 lata</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 4. Zarządzanie cookies */}
              <div className="mb-10">
                <h2 className="text-white mb-4" style={{ fontSize: 'clamp(24px, 2.2vw, 32px)', fontWeight: 400, lineHeight: 1.2 }}>
                  4. Zarządzanie plikami cookies
                </h2>
                <p className="text-gray-400 mb-6" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', fontWeight: 300, lineHeight: 1.8 }}>
                  Masz pełną kontrolę nad plikami cookies. Możesz kontrolować i/lub usuwać pliki cookies według własnego
                  uznania. Możesz usunąć wszystkie pliki cookies znajdujące się już na Twoim komputerze, a większość
                  przeglądarek można ustawić tak, aby zapobiegać ich umieszczaniu.
                </p>

                <h3 className="text-white mb-4" style={{ fontSize: 'clamp(18px, 1.6vw, 22px)', fontWeight: 400 }}>
                  Jak wyłączyć cookies w popularnych przeglądarkach:
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-primary mt-1">→</span>
                    <div>
                      <p className="text-gray-300 mb-1" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', fontWeight: 400 }}>
                        Chrome:
                      </p>
                      <p className="text-gray-400" style={{ fontSize: 'clamp(14px, 1.2vw, 16px)', fontWeight: 300, lineHeight: 1.7 }}>
                        Ustawienia &gt; Prywatność i bezpieczeństwo &gt; Pliki cookie i inne dane witryn
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary mt-1">→</span>
                    <div>
                      <p className="text-gray-300 mb-1" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', fontWeight: 400 }}>
                        Firefox:
                      </p>
                      <p className="text-gray-400" style={{ fontSize: 'clamp(14px, 1.2vw, 16px)', fontWeight: 300, lineHeight: 1.7 }}>
                        Opcje &gt; Prywatność i bezpieczeństwo &gt; Ciasteczka i dane stron
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary mt-1">→</span>
                    <div>
                      <p className="text-gray-300 mb-1" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', fontWeight: 400 }}>
                        Safari:
                      </p>
                      <p className="text-gray-400" style={{ fontSize: 'clamp(14px, 1.2vw, 16px)', fontWeight: 300, lineHeight: 1.7 }}>
                        Preferencje &gt; Prywatność &gt; Pliki cookie i dane witryn
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary mt-1">→</span>
                    <div>
                      <p className="text-gray-300 mb-1" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', fontWeight: 400 }}>
                        Edge:
                      </p>
                      <p className="text-gray-400" style={{ fontSize: 'clamp(14px, 1.2vw, 16px)', fontWeight: 300, lineHeight: 1.7 }}>
                        Ustawienia &gt; Pliki cookie i uprawnienia witryny
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-400 mt-6" style={{ fontSize: 'clamp(14px, 1.2vw, 15px)', fontWeight: 300, lineHeight: 1.8, fontStyle: 'italic' }}>
                  Pamiętaj, że wyłączenie plików cookies może wpłynąć na funkcjonalność strony i Twoje doświadczenie użytkownika.
                </p>
              </div>

              {/* 5. Google Analytics */}
              <div className="mb-10">
                <h2 className="text-white mb-4" style={{ fontSize: 'clamp(24px, 2.2vw, 32px)', fontWeight: 400, lineHeight: 1.2 }}>
                  5. Google Analytics
                </h2>
                <p className="text-gray-400 mb-4" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', fontWeight: 300, lineHeight: 1.8 }}>
                  Używamy Google Analytics 4 do analizy sposobu korzystania z naszej strony internetowej.
                  Google Analytics wykorzystuje pliki cookies do zbierania i analizowania informacji o korzystaniu
                  ze strony. Informacje te (w tym Twój adres IP) są przekazywane do Google i przechowywane przez
                  Google na serwerach w Stanach Zjednoczonych.
                </p>
                <p className="text-gray-400 mb-4" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', fontWeight: 300, lineHeight: 1.8 }}>
                  Google Analytics pomaga nam lepiej zrozumieć, w jaki sposób użytkownicy wchodzą w interakcje z naszą
                  stroną, co pozwala nam ciągle ulepszać nasze usługi i treści.
                </p>
                <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                  <p className="text-gray-400" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', fontWeight: 300, lineHeight: 1.8 }}>
                    Możesz zrezygnować z Google Analytics, instalując wtyczkę przeglądarki dostępną pod adresem:{' '}
                    <a
                      href="https://tools.google.com/dlpage/gaoptout"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Google Analytics Opt-out Browser Add-on
                    </a>
                  </p>
                </div>
              </div>

              {/* 6. Zmiany */}
              <div className="mb-10">
                <h2 className="text-white mb-4" style={{ fontSize: 'clamp(24px, 2.2vw, 32px)', fontWeight: 400, lineHeight: 1.2 }}>
                  6. Zmiany w Polityce Cookies
                </h2>
                <p className="text-gray-400" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', fontWeight: 300, lineHeight: 1.8 }}>
                  Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej Polityce Cookies w związku z rozwojem
                  technologii internetowych, ewentualną zmianą prawa w zakresie ochrony danych osobowych oraz rozwojem
                  naszej strony internetowej. O wszelkich zmianach będziemy informować, umieszczając zaktualizowaną
                  politykę na tej stronie z nową datą aktualizacji.
                </p>
              </div>

              {/* 7. Kontakt */}
              <div className="mb-10">
                <h2 className="text-white mb-4" style={{ fontSize: 'clamp(24px, 2.2vw, 32px)', fontWeight: 400, lineHeight: 1.2 }}>
                  7. Pytania? Skontaktuj się z nami
                </h2>
                <p className="text-gray-400 mb-4" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', fontWeight: 300, lineHeight: 1.8 }}>
                  Jeśli masz pytania dotyczące naszej Polityki Cookies, jesteśmy do Twojej dyspozycji:
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
                  brillQ AI wykorzystuje pliki cookies w sposób odpowiedzialny, zgodny z najlepszymi praktykami branży AI i obowiązującymi przepisami prawa.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

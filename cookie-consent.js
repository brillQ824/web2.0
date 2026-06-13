// LASTHUMAN Foundation - Cookie Consent Banner
// Zgodność z RODO/GDPR

(function() {
    'use strict';

    const CONSENT_KEY = 'lasthuman-cookie-consent';
    const CONSENT_VERSION = '1.0';

    // Sprawdź czy użytkownik już wyraził zgodę
    const existingConsent = localStorage.getItem(CONSENT_KEY);
    if (existingConsent) {
        const consent = JSON.parse(existingConsent);
        if (consent.version === CONSENT_VERSION && consent.choice === 'accepted') {
            enableAnalytics();
        }
        return;
    }

    // Tłumaczenia dla bannera
    const translations = {
        en: {
            message: 'This website uses cookies to improve your browsing experience. By continuing, you agree to their use.',
            privacy: 'Privacy Policy',
            accept: 'Accept',
            reject: 'Reject',
            settings: 'Settings'
        },
        pl: {
            message: 'Ta strona używa plików cookie aby poprawić jakość przeglądania. Kontynuując, zgadzasz się na ich użycie.',
            privacy: 'Polityka prywatności',
            accept: 'Akceptuj',
            reject: 'Odrzuć',
            settings: 'Ustawienia'
        },
        es: {
            message: 'Este sitio utiliza cookies para mejorar su experiencia de navegación. Al continuar, acepta su uso.',
            privacy: 'Política de privacidad',
            accept: 'Aceptar',
            reject: 'Rechazar',
            settings: 'Configuración'
        },
        fr: {
            message: 'Ce site utilise des cookies pour améliorer votre expérience de navigation. En continuant, vous acceptez leur utilisation.',
            privacy: 'Politique de confidentialité',
            accept: 'Accepter',
            reject: 'Refuser',
            settings: 'Paramètres'
        },
        de: {
            message: 'Diese Website verwendet Cookies, um Ihr Surferlebnis zu verbessern. Durch Fortfahren stimmen Sie deren Verwendung zu.',
            privacy: 'Datenschutzrichtlinie',
            accept: 'Akzeptieren',
            reject: 'Ablehnen',
            settings: 'Einstellungen'
        },
        it: {
            message: 'Questo sito utilizza cookie per migliorare la tua esperienza di navigazione. Continuando, accetti il loro utilizzo.',
            privacy: 'Informativa sulla privacy',
            accept: 'Accetta',
            reject: 'Rifiuta',
            settings: 'Impostazioni'
        }
    };

    // Wykryj język strony
    const currentLang = localStorage.getItem('language') || 'en';
    const t = translations[currentLang] || translations.en;

    // Utwórz banner
    const banner = document.createElement('div');
    banner.id = 'cookie-consent';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-live', 'polite');
    banner.setAttribute('aria-label', 'Cookie consent');

    banner.innerHTML = `
        <div class="cookie-banner">
            <div class="cookie-content">
                <p class="cookie-message">
                    ${t.message}
                    <a href="privacy-policy.html" class="cookie-privacy-link">${t.privacy}</a>
                </p>
                <div class="cookie-buttons">
                    <button id="accept-cookies" class="cookie-btn cookie-btn-accept" aria-label="${t.accept}">
                        ${t.accept}
                    </button>
                    <button id="reject-cookies" class="cookie-btn cookie-btn-reject" aria-label="${t.reject}">
                        ${t.reject}
                    </button>
                </div>
            </div>
        </div>
    `;

    // Dodaj style inline (żeby nie potrzebować zewnętrznego CSS)
    const style = document.createElement('style');
    style.textContent = `
        .cookie-banner {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
            color: white;
            padding: 20px;
            z-index: 10000;
            box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.3);
            animation: slideUp 0.4s ease-out;
        }

        @keyframes slideUp {
            from {
                transform: translateY(100%);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }

        .cookie-content {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 20px;
        }

        .cookie-message {
            margin: 0;
            flex: 1;
            min-width: 300px;
            font-size: 15px;
            line-height: 1.6;
        }

        .cookie-privacy-link {
            color: #93c5fd;
            text-decoration: underline;
            font-weight: 500;
            transition: color 0.2s;
        }

        .cookie-privacy-link:hover {
            color: #dbeafe;
        }

        .cookie-buttons {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
        }

        .cookie-btn {
            border: none;
            color: white;
            padding: 12px 24px;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 600;
            font-size: 14px;
            transition: all 0.3s ease;
            font-family: inherit;
        }

        .cookie-btn-accept {
            background: #10b981;
        }

        .cookie-btn-accept:hover {
            background: #059669;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
        }

        .cookie-btn-reject {
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(10px);
        }

        .cookie-btn-reject:hover {
            background: rgba(255, 255, 255, 0.3);
            transform: translateY(-2px);
        }

        @media (max-width: 768px) {
            .cookie-content {
                flex-direction: column;
                align-items: stretch;
            }

            .cookie-message {
                min-width: 100%;
                text-align: center;
            }

            .cookie-buttons {
                width: 100%;
                justify-content: center;
            }

            .cookie-btn {
                flex: 1;
                min-width: 120px;
            }
        }
    `;

    document.head.appendChild(style);
    document.body.appendChild(banner);

    // Obsługa przycisków
    document.getElementById('accept-cookies').addEventListener('click', function() {
        saveConsent('accepted');
        removeBanner();
        enableAnalytics();
    });

    document.getElementById('reject-cookies').addEventListener('click', function() {
        saveConsent('rejected');
        removeBanner();
    });

    function saveConsent(choice) {
        const consent = {
            choice: choice,
            version: CONSENT_VERSION,
            timestamp: new Date().toISOString()
        };
        localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
    }

    function removeBanner() {
        banner.style.animation = 'slideDown 0.3s ease-out';
        setTimeout(function() {
            banner.remove();
        }, 300);
    }

    function enableAnalytics() {
        // ========================================
        // GOOGLE ANALYTICS 4
        // ========================================
        // Odkomentuj i zamień GA_MEASUREMENT_ID na swój ID

        /*
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XXXXXXXXXX', {
            'anonymize_ip': true,
            'cookie_flags': 'SameSite=None;Secure'
        });

        const gaScript = document.createElement('script');
        gaScript.async = true;
        gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
        document.head.appendChild(gaScript);
        */

        // ========================================
        // MATOMO (alternatywa dla GA)
        // ========================================
        // Odkomentuj i zamień URL na swój serwer Matomo

        /*
        var _paq = window._paq = window._paq || [];
        _paq.push(['trackPageView']);
        _paq.push(['enableLinkTracking']);
        (function() {
            var u="//your-matomo-domain.com/";
            _paq.push(['setTrackerUrl', u+'matomo.php']);
            _paq.push(['setSiteId', '1']);
            var d=document, g=d.createElement('script'),
                s=d.getElementsByTagName('script')[0];
            g.async=true;
            g.src=u+'matomo.js';
            s.parentNode.insertBefore(g,s);
        })();
        */

        console.log('Analytics enabled - add your tracking code above');
    }

    // Dodaj animację slideDown do stylów
    const slideDownStyle = document.createElement('style');
    slideDownStyle.textContent = `
        @keyframes slideDown {
            from {
                transform: translateY(0);
                opacity: 1;
            }
            to {
                transform: translateY(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(slideDownStyle);

})();

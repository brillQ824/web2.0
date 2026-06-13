# Przewodnik Konfiguracji Kluczy API

## Data: 2026-01-17
## Status: Wymagane do pełnej funkcjonalności

---

## 🔑 Wymagane Klucze API

### 1. Google reCAPTCHA (Ochrona formularza kontaktowego)

**Status:** 🔴 Krytyczny - Obecnie używany dummy token
**Koszt:** Darmowy
**Czas setup:** ~5 minut

#### Krok po kroku:

1. **Przejdź do:** https://www.google.com/recaptcha/admin/create

2. **Zaloguj się** kontem Google

3. **Utwórz nowy klucz:**
   - **Label:** brillQ AI Contact Form
   - **reCAPTCHA type:** ✅ reCAPTCHA v2 ("I'm not a robot" Checkbox)
   - **Domains:**
     - `brillQ.today`
     - `localhost` (dla testów)
   - **Accept reCAPTCHA Terms:** ✅

4. **Otrzymasz 2 klucze:**
   ```
   Site Key: 6LcXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
   Secret Key: 6LcYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY
   ```

5. **Dodaj do `.env.local`:**
   ```bash
   # reCAPTCHA Keys
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6LcXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
   RECAPTCHA_SECRET_KEY=6LcYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY
   ```

6. **Zainstaluj pakiet:**
   ```bash
   npm install react-google-recaptcha
   npm install --save-dev @types/react-google-recaptcha
   ```

7. **Update ContactForm.tsx:**
   ```tsx
   import ReCAPTCHA from "react-google-recaptcha"

   // W komponencie:
   const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)

   // Przed buttonem submit:
   <ReCAPTCHA
     sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
     onChange={(token) => setRecaptchaToken(token)}
   />

   // W onSubmit:
   const formData = {
     ...data,
     recaptchaToken: recaptchaToken || ''
   }
   ```

8. **Update API route (już gotowe):**
   - Odkomentuj linie 74-80 w `src/app/api/contact/route.ts`

---

### 2. Resend (Wysyłanie emaili z formularza)

**Status:** 🔴 Krytyczny - Obecnie tylko console.log
**Koszt:** Darmowy (100 emaili/dzień, 3000/miesiąc)
**Czas setup:** ~10 minut

#### Krok po kroku:

1. **Przejdź do:** https://resend.com/signup

2. **Utwórz konto:**
   - Email: hello@brillqai.com
   - Firma: brillQ AI

3. **Zweryfikuj email** (otrzymasz link potwierdzający)

4. **Dodaj domenę:**
   - Dashboard → Domains → Add Domain
   - Wpisz: `brillQ.today`
   - Postępuj zgodnie z instrukcjami dodania DNS records:
     ```
     TXT: resend._domainkey.brillQ.today
     Value: [otrzymasz od Resend]
     ```

5. **Utwórz API Key:**
   - Dashboard → API Keys → Create API Key
   - Name: `brillQ AI Production`
   - Permission: Sending access
   - Skopiuj klucz (wyświetli się tylko raz!)

6. **Dodaj do `.env.local`:**
   ```bash
   # Resend API Key
   RESEND_API_KEY=re_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
   ```

7. **Zainstaluj pakiet:**
   ```bash
   npm install resend
   ```

8. **Update API route (`src/app/api/contact/route.ts`):**

Zamień linie 82-86 (TODO comment) na:

```typescript
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// W POST handler, zamiast TODO:
try {
  const { data: emailData, error: emailError } = await resend.emails.send({
    from: 'Formularz Kontaktowy <noreply@brillQ.today>',
    to: 'hello@brillqai.com',
    replyTo: validatedData.email,
    subject: `Nowa wiadomość od ${validatedData.name}`,
    html: `
      <h2>Nowa wiadomość z formularza kontaktowego</h2>
      <p><strong>Od:</strong> ${validatedData.name}</p>
      <p><strong>Email:</strong> ${validatedData.email}</p>
      ${validatedData.phone ? `<p><strong>Telefon:</strong> ${validatedData.phone}</p>` : ''}
      ${validatedData.company ? `<p><strong>Firma:</strong> ${validatedData.company}</p>` : ''}
      <h3>Wiadomość:</h3>
      <p>${validatedData.message}</p>
      <hr>
      <p style="color: #888; font-size: 12px;">
        Wysłano: ${new Date().toLocaleString('pl-PL', { timeZone: 'Europe/Warsaw' })}
      </p>
    `
  })

  if (emailError) {
    console.error('Resend error:', emailError)
    return NextResponse.json(
      { message: 'Failed to send email' },
      { status: 500 }
    )
  }

  console.log('Email sent successfully:', emailData)
} catch (error) {
  console.error('Email send error:', error)
  return NextResponse.json(
    { message: 'Error sending email' },
    { status: 500 }
  )
}
```

9. **Testuj wysyłanie:**
   - Uruchom serwer: `npm run dev`
   - Wypełnij formularz kontaktowy
   - Sprawdź Dashboard Resend - zobaczysz wysłany email

---

### 3. OG Image (Social Media Preview)

**Status:** ⚠️ Średni priorytet
**Koszt:** Darmowy (stwórz sam) lub ~$50-100 (designer)
**Czas setup:** ~30 minut (DIY) lub 1-2 dni (designer)

#### Opcja A: Stwórz Sam (Canva)

1. **Przejdź do:** https://www.canva.com

2. **Utwórz Custom Size:**
   - Szerokość: 1200px
   - Wysokość: 630px

3. **Design Guidelines:**
   - Tło: Czarne (#000000)
   - Logo: "brillQ AI" - białe + złote
   - Tekst: "Advanced AI & Machine Learning Solutions"
   - Font: Safiro lub podobny (Montserrat, Inter)
   - Złoty akcent: RGB(178, 158, 82)

4. **Przykładowy Layout:**
   ```
   ┌─────────────────────────────────────────┐
   │                                         │
   │                                         │
   │         brillQ AI                       │
   │         (duży, złoty/biały)            │
   │                                         │
   │    Advanced AI & Machine Learning       │
   │          Solutions                      │
   │                                         │
   │                                         │
   └─────────────────────────────────────────┘
   ```

5. **Eksportuj:**
   - Format: PNG
   - Quality: Wysoka
   - Nazwa: `og-image.png`

6. **Dodaj do projektu:**
   ```bash
   # Przenieś plik do:
   /Users/brill/AI_projets/web_brill1.0/public/og-image.png
   ```

7. **Update metadata** w `src/app/[lang]/layout.tsx`:

Już gotowe! Tylko dodaj plik, kod jest przygotowany:

```typescript
// Już jest w kodzie:
export const metadata: Metadata = {
  openGraph: {
    images: [
      {
        url: '/og-image.png',  // ← Wystarczy dodać plik
        width: 1200,
        height: 630,
        alt: 'brillQ AI - Advanced AI & Machine Learning Solutions'
      }
    ]
  }
}
```

#### Opcja B: Placeholder (Tymczasowy)

Jeśli chcesz szybki placeholder, mogę wygenerować SVG:

```bash
# Utworzę prosty SVG placeholder
cat > public/og-image.svg << 'EOF'
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#000000"/>
  <text x="600" y="280" font-family="Arial" font-size="72" fill="#FFFFFF" text-anchor="middle" font-weight="bold">
    brillQ <tspan fill="#B29E52">AI</tspan>
  </text>
  <text x="600" y="350" font-family="Arial" font-size="28" fill="#CCCCCC" text-anchor="middle">
    Advanced AI &amp; Machine Learning Solutions
  </text>
</svg>
EOF

# Konwertuj na PNG (wymaga ImageMagick):
convert public/og-image.svg public/og-image.png
```

---

## 🔒 Bezpieczeństwo - Ważne!

### Sprawdź `.gitignore`

Upewnij się że `.env.local` NIE jest w repozytorium:

```bash
# Sprawdź .gitignore:
cat .gitignore | grep env

# Powinno zawierać:
.env*.local
.env
```

### Dodaj do Vercel (lub inny hosting)

W panelu hostingu dodaj environment variables:

**Vercel:**
1. Dashboard → Project → Settings → Environment Variables
2. Dodaj:
   ```
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY = 6Lc...
   RECAPTCHA_SECRET_KEY = 6Lc...
   RESEND_API_KEY = re_...
   ```

**Netlify:**
1. Site settings → Build & deploy → Environment
2. Dodaj zmienne jak wyżej

---

## ✅ Checklist Wdrożenia

### reCAPTCHA
- [ ] Utworzono klucze w Google reCAPTCHA
- [ ] Dodano do `.env.local`
- [ ] Zainstalowano `react-google-recaptcha`
- [ ] Zaktualizowano `ContactForm.tsx`
- [ ] Odkomentowano weryfikację w API route
- [ ] Przetestowano na localhost
- [ ] Dodano klucze do Vercel/Netlify

### Resend
- [ ] Utworzono konto Resend
- [ ] Zweryfikowano email
- [ ] Dodano domenę `brillQ.today`
- [ ] Dodano DNS records (TXT)
- [ ] Utworzono API key
- [ ] Dodano do `.env.local`
- [ ] Zainstalowano pakiet `resend`
- [ ] Zaktualizowano API route
- [ ] Wysłano testowy email
- [ ] Dodano klucz do Vercel/Netlify

### OG Image
- [ ] Stworzono obraz 1200x630px
- [ ] Dodano do `public/og-image.png`
- [ ] Zweryfikowano metadata w layout.tsx
- [ ] Przetestowano w Facebook Debugger
- [ ] Przetestowano w Twitter Card Validator

---

## 🧪 Testowanie

### Test reCAPTCHA
```bash
# Uruchom dev server:
npm run dev

# Otwórz: http://localhost:3000/pl/kontakt
# 1. Wypełnij formularz
# 2. Kliknij checkbox reCAPTCHA
# 3. Wyślij formularz
# 4. Sprawdź czy przeszło (brak błędu)
```

### Test Resend Email
```bash
# Po wysłaniu formularza:
# 1. Sprawdź Dashboard Resend
# 2. Logs → Recent emails
# 3. Sprawdź email hello@brillqai.com
```

### Test OG Image
```
# Facebook Debugger:
https://developers.facebook.com/tools/debug/

# Twitter Card Validator:
https://cards-dev.twitter.com/validator

# Wklej URL: https://brillQ.today
```

---

## 🆘 Troubleshooting

### reCAPTCHA nie działa
```bash
# Sprawdź:
1. Czy NEXT_PUBLIC_RECAPTCHA_SITE_KEY ma prefix NEXT_PUBLIC_
2. Czy domena localhost jest dodana w reCAPTCHA admin
3. Czy przeładowałeś serwer po dodaniu .env.local
```

### Resend nie wysyła emaili
```bash
# Sprawdź:
1. Czy API key jest poprawny (sprawdź Dashboard)
2. Czy domena jest zweryfikowana (DNS records)
3. Czy email "from" używa Twojej domeny: noreply@brillQ.today
4. Logi w Resend Dashboard → Logs
```

### OG Image nie wyświetla się
```bash
# Sprawdź:
1. Czy plik jest w public/og-image.png
2. Czy URL w metadata to '/og-image.png' (bez 'public/')
3. Wyczyść cache Facebook: użyj Debugger
4. Dodaj ?v=1 do URL dla force refresh
```

---

## 📞 Support

**Resend Support:** support@resend.com
**Google reCAPTCHA:** https://support.google.com/recaptcha
**Next.js Docs:** https://nextjs.org/docs

---

**Utworzono:** 2026-01-17
**Ostatnia aktualizacja:** 2026-01-17
**Wersja:** 1.0

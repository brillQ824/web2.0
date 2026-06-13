# Checklist przed publikacją LASTHUMAN Foundation

## 🚀 Krytyczne (wymagane)

- [ ] **Utworzenie og-image.jpg** (1200x630px)
  - Obraz dla social media (Facebook, Twitter, LinkedIn)
  - Umieść w głównym katalogu jako `og-image.jpg`

- [ ] **Certyfikat SSL/HTTPS**
  - Uzyskaj certyfikat SSL (Let's Encrypt jest darmowy)
  - Odkomentuj redirect HTTPS w [.htaccess](.htaccess#L119-123)

- [ ] **Weryfikacja domeny**
  - Upewnij się że DNS wskazuje na serwer
  - Sprawdź czy domena `lasthuman.org` jest aktywna

## ✅ Już gotowe

- [x] 8 stron HTML (główna + 6 podstron + privacy policy)
- [x] Zminifikowane CSS i JavaScript
- [x] Favicon.svg
- [x] Robots.txt
- [x] Sitemap.xml (zaktualizowany 2026-01-25)
- [x] .htaccess (kompresja, cache, security headers)
- [x] SEO meta tags
- [x] Privacy Policy i Cookie Consent
- [x] Responsywny design
- [x] Usunięto niepotrzebny modern-effects.js

## 📋 Opcjonalne (zalecane)

- [ ] **Analytics**
  - Google Analytics / Plausible / Matomo
  - Tag w każdym pliku HTML

- [ ] **Monitoring**
  - Uptime monitoring (UptimeRobot)
  - Error tracking (Sentry)

- [ ] **Email**
  - Skonfiguruj email: contact@lasthuman.org
  - Skonfiguruj email: privacy@lasthuman.org

- [ ] **Social Media**
  - Utwórz profile (Twitter, LinkedIn, Facebook)
  - Dodaj linki w stopce

## 🧪 Testy przed go-live

1. **Desktop browsers**
   - [ ] Chrome
   - [ ] Firefox
   - [ ] Safari
   - [ ] Edge

2. **Mobile browsers**
   - [ ] Safari iOS
   - [ ] Chrome Android

3. **Performance**
   - [ ] PageSpeed Insights (cel: 90+)
   - [ ] GTmetrix
   - [ ] WebPageTest

4. **SEO**
   - [ ] Google Search Console
   - [ ] Meta tags validation
   - [ ] Structured data test

5. **Accessibility**
   - [ ] WAVE tool
   - [ ] Screen reader test
   - [ ] Keyboard navigation

## 📁 Pliki do uploadu

Wszystkie poniższe pliki muszą być na serwerze:

```
✓ *.html (8 plików)
✓ styles.min.css
✓ script.min.js
✓ translations.js
✓ subpage.js
✓ cookie-consent.js
✓ .htaccess
✓ robots.txt
✓ sitemap.xml
✓ favicon.svg
⚠ og-image.jpg (DO UTWORZENIA!)
```

## 🔗 Po publikacji

1. [ ] Przetestuj wszystkie linki (broken link checker)
2. [ ] Prześlij sitemap do Google Search Console
3. [ ] Prześlij sitemap do Bing Webmaster Tools
4. [ ] Sprawdź w Google: `site:lasthuman.org`
5. [ ] Test social media sharing (Facebook Debugger)

---

**Aktualna lokalizacja projektu:**
`/Users/brill/AI_projets/web_lasthuman`

**Serwer lokalny:**
`http://localhost:8000`

**Pełna instrukcja:**
Zobacz [DEPLOYMENT.md](DEPLOYMENT.md)

# Instrukcja publikacji strony LASTHUMAN Foundation

## Status przygotowania

### ✅ Gotowe do publikacji

- [x] Pliki HTML (8 stron)
- [x] Zminifikowane pliki CSS i JavaScript (styles.min.css, script.min.js)
- [x] Konfiguracja Apache (.htaccess) z kompresją, cache i zabezpieczeniami
- [x] Robots.txt
- [x] Sitemap.xml (zaktualizowany: 2026-01-25)
- [x] Favicon (SVG)
- [x] Privacy Policy i Cookie Consent
- [x] Responsywny design
- [x] SEO meta tags
- [x] Strukturalne dane JSON-LD

### ⚠️ Do zrobienia przed publikacją

1. **Utworzenie obrazu Open Graph**
   - Wymiar: 1200x630px (format JPG lub PNG)
   - Nazwa pliku: `og-image.jpg`
   - Umieść w głównym katalogu projektu
   - Ten obraz będzie wyświetlany gdy ktoś udostępni stronę na Facebook, Twitter itp.

2. **Konfiguracja SSL/HTTPS**
   - Po uzyskaniu certyfikatu SSL, odkomentuj sekcję w [.htaccess](.htaccess) (linie 119-123)
   - To automatycznie przekieruje ruch HTTP na HTTPS

3. **Aktualizacja domeny**
   - Upewnij się że wszystkie URL w plikach wskazują na właściwą domenę
   - Aktualne URL: `https://lasthuman.org/`

## Metoda 1: Hosting z Apache (zalecane)

### Wymagania
- Serwer z Apache 2.4+
- PHP nie jest wymagane (strona statyczna)
- Moduły Apache: mod_deflate, mod_expires, mod_headers, mod_rewrite

### Kroki publikacji

1. **Przygotuj pliki**
   ```bash
   # Utwórz archiwum projektu
   tar -czf lasthuman-website.tar.gz \
     *.html *.css *.js *.xml *.txt *.svg \
     .htaccess
   ```

2. **Prześlij na serwer**
   ```bash
   # Przez FTP/SFTP lub SCP
   scp lasthuman-website.tar.gz user@lasthuman.org:/var/www/html/

   # SSH do serwera
   ssh user@lasthuman.org

   # Rozpakuj pliki
   cd /var/www/html
   tar -xzf lasthuman-website.tar.gz
   rm lasthuman-website.tar.gz
   ```

3. **Ustaw uprawnienia**
   ```bash
   # Pliki: 644, katalogi: 755
   find . -type f -exec chmod 644 {} \;
   find . -type d -exec chmod 755 {} \;

   # Właściciel (zmień na odpowiedniego użytkownika)
   chown -R www-data:www-data /var/www/html
   ```

4. **Sprawdź konfigurację Apache**
   ```bash
   # Upewnij się że mod_rewrite jest włączony
   a2enmod rewrite
   a2enmod deflate
   a2enmod expires
   a2enmod headers

   # Restart Apache
   systemctl restart apache2
   ```

## Metoda 2: Hosting statyczny (Netlify/Vercel/GitHub Pages)

### Netlify

1. Zaloguj się na [netlify.com](https://netlify.com)
2. Przeciągnij i upuść cały folder projektu
3. Strona zostanie opublikowana automatycznie
4. HTTPS jest domyślnie włączony

### Vercel

```bash
# Zainstaluj Vercel CLI
npm i -g vercel

# Deploy
cd /Users/brill/AI_projets/web_lasthuman
vercel --prod
```

### GitHub Pages

1. Utwórz repozytorium: `lasthuman-org/lasthuman-org.github.io`
2. Push wszystkie pliki
3. Włącz GitHub Pages w Settings
4. Skonfiguruj własną domenę

## Metoda 3: Serwer lokalny (testowanie)

Obecnie serwer działa na: **http://localhost:8000**

Aby zatrzymać:
```bash
pkill -f "python3 -m http.server"
```

Aby uruchomić ponownie:
```bash
cd /Users/brill/AI_projets/web_lasthuman
python3 -m http.server 8000
```

## Po publikacji

### 1. Weryfikacja

- [ ] Sprawdź czy wszystkie strony się ładują
- [ ] Przetestuj responsywność (mobile, tablet, desktop)
- [ ] Sprawdź czy kompresja działa: [tools.keycdn.com/gzip-test](https://tools.keycdn.com/gzip-test)
- [ ] Sprawdź prędkość ładowania: [pagespeed.web.dev](https://pagespeed.web.dev)
- [ ] Walidacja HTML: [validator.w3.org](https://validator.w3.org)

### 2. SEO

- [ ] Zarejestruj domenę w Google Search Console
- [ ] Prześlij sitemap.xml do Google Search Console
- [ ] Zarejestruj w Bing Webmaster Tools
- [ ] Dodaj Google Analytics (opcjonalnie)

### 3. Monitoring

- [ ] Skonfiguruj uptime monitoring (UptimeRobot, Pingdom)
- [ ] Włącz error logging
- [ ] Regularnie sprawdzaj logi serwera

## Pliki w projekcie

```
/
├── index.html                      # Strona główna
├── ai-safety.html                  # Podstrona: AI Safety
├── digital-transformation.html     # Podstrona: Digital Transformation
├── human-design.html               # Podstrona: Human Design
├── responsible-ai.html             # Podstrona: Responsible AI
├── social-impact.html              # Podstrona: Social Impact
├── tech-policy.html                # Podstrona: Tech Policy
├── privacy-policy.html             # Polityka prywatności
├── styles.css                      # Style (źródło)
├── styles.min.css                  # Style (zminifikowane) ✓
├── script.js                       # JavaScript (źródło)
├── script.min.js                   # JavaScript (zminifikowane) ✓
├── translations.js                 # Tłumaczenia (356KB)
├── subpage.js                      # Skrypty dla podstron
├── cookie-consent.js               # Zgoda na cookies
├── .htaccess                       # Konfiguracja Apache ✓
├── robots.txt                      # Instrukcje dla robotów ✓
├── sitemap.xml                     # Mapa strony ✓
├── favicon.svg                     # Ikona strony ✓
└── og-image.jpg                    # ⚠️ DO UTWORZENIA
```

## Wsparcie techniczne

W razie problemów sprawdź:
1. Logi serwera Apache: `/var/log/apache2/error.log`
2. Uprawnienia plików
3. Konfigurację DNS
4. Certyfikat SSL

## Notatki

- Strona jest w pełni statyczna (bez PHP, baz danych)
- Optymalizowana pod SEO
- Gotowa na produkcję
- Responsywna i accessibility-compliant

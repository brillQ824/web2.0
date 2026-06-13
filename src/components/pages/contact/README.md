# 📄 PODSTRONA: Kontakt (Contact)

Komponenty używane na stronie kontaktowej.

## 📍 Lokalizacja strony
`src/app/[lang]/kontakt/page.tsx`

## 🎯 Komponenty

### `ContactForm.tsx`
Główny formularz kontaktowy z walidacją:
- Imię i nazwisko (wymagane)
- Email (wymagane, walidacja)
- Telefon (opcjonalne)
- Wiadomość (wymagane, min. 10 znaków)
- Zgoda RODO (wymagana)

**Props:**
- Brak (standalone component)

**Features:**
- Walidacja z react-hook-form i zod
- Rate limiting (Upstash)
- Wysyłka email
- Accessibility (ARIA labels, error announcements)

## 🔧 Dodatkowe komponenty
W przyszłości można dodać:
- `ContactInfo.tsx` - Dane kontaktowe (telefon, email, adres)
- `ContactMap.tsx` - Mapa Google Maps
- `OfficeHours.tsx` - Godziny otwarcia

## 📝 Zasady
- Komponenty używane TYLKO na stronie kontaktowej
- Współdzielone UI components w `src/components/shared/`

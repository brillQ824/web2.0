# ⭐ STRONA GŁÓWNA - Home Page

Komponenty używane TYLKO na stronie głównej brillQ.

## 📍 Lokalizacja strony
`src/app/[lang]/page.tsx`

## 🎯 Komponenty

### Hero & Introduction
- `HeroSection.tsx` - Główny hero z tytułem i CTA
- `Section2.tsx` - Sekcja "Wierzymy że..."

### Features & Values
- `FourColumnSection.tsx` - 4 kolumny z cechami
- `ValuesSection.tsx` - Wartości firmy
- `TechnologiesSection.tsx` - Stack technologiczny
- `ExpandableContentSection.tsx` - Rozwijana treść "Dlaczego brillQ AI?"
- `WhyUsSection.tsx` - Dlaczego my?

### Content Sections
- `TimelineSection.tsx` - Historia/timeline rozwoju
- `AlternatingSection.tsx` - Sekcje naprzemienne
- `ListSection.tsx` - Lista z bulletami
- `PartnersSection.tsx` - Logo partnerów
- `RDSection.tsx` - Research & Development

### Competences & Projects
- `CompetencesListSection.tsx` - Lista kompetencji AI/ML
- `NewsSection.tsx` - Najnowsze aktualności

### Call to Action
- `GridCTASection.tsx` - CTA w układzie grid
- `FinalCTASection.tsx` - Końcowe CTA

## 🔧 Shared Components
Komponenty współdzielone (używane na wielu stronach) znajdują się w:
`src/components/shared/`

## 📝 Zasady
- Komponenty z tego katalogu używane są TYLKO na stronie głównej
- Jeśli komponent jest używany na więcej niż 1 stronie → przenieś do `shared/`
- Nazwy: PascalCase z sufiksem `Section` dla sekcji strony

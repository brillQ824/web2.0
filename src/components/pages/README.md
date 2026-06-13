# 📂 Pages Components

Komponenty specyficzne dla poszczególnych stron aplikacji brillQ.

## 🎯 Struktura

```
pages/
├── home/           ⭐ STRONA GŁÓWNA - komponenty używane tylko na landing page
├── about/          📄 PODSTRONA: O brillQ (/grupa)
├── contact/        📄 PODSTRONA: Kontakt (/kontakt)
├── competences/    📄 PODSTRONA: Kompetencje AI/ML (/kompetencje)
├── projects/       📄 PODSTRONA: Portfolio projektów (/projekty)
└── news/           📄 PODSTRONA: Aktualności i blog (/aktualnosci)
```

## 📋 Zasady organizacji

### ✅ Umieść komponent TUTAJ jeśli:
- Jest używany TYLKO na jednej konkretnej stronie
- Jest specyficzny dla logiki biznesowej danej strony
- Nie będzie ponownie używany nigdzie indziej

### ❌ NIE umieszczaj tutaj jeśli:
- Komponent jest używany na więcej niż 1 stronie → `src/components/shared/`
- To komponent UI (Button, Input, Card) → `src/components/shared/`
- To utility/helper komponent → `src/components/shared/`

## 🗂️ Katalogi stron

### ⭐ home/ - STRONA GŁÓWNA
**Strona:** `/` (pl) lub `/en`
**Plik:** `src/app/[lang]/page.tsx`

Wszystkie sekcje landing page:
- HeroSection, Section2, FourColumnSection
- ValuesSection, TechnologiesSection
- TimelineSection, PartnersSection
- CompetencesListSection, NewsSection
- etc.

### 📄 about/ - O brillQ
**Strona:** `/grupa`
**Plik:** `src/app/[lang]/grupa/page.tsx`

Komponenty do dodania:
- AboutHeroSection, MissionVisionSection
- ValuesGrid, CompanyTimeline
- TeamSection, StatsSection

### 📄 contact/ - Kontakt
**Strona:** `/kontakt`
**Plik:** `src/app/[lang]/kontakt/page.tsx`

Istniejące:
- ✅ ContactForm

Do dodania:
- ContactInfo, ContactMap, OfficeHours

### 📄 competences/ - Kompetencje
**Strony:** `/kompetencje` + `/kompetencje/[slug]`
**Pliki:**
- `src/app/[lang]/kompetencje/page.tsx`
- `src/app/[lang]/kompetencje/[slug]/page.tsx`

Komponenty do dodania:
- CompetenceCard, CompetenceHero
- TechnologyStack, UseCases

### 📄 projects/ - Projekty
**Strony:** `/projekty` + `/projekty/[slug]`
**Pliki:**
- `src/app/[lang]/projekty/page.tsx`
- `src/app/[lang]/projekty/[slug]/page.tsx`

Komponenty do dodania:
- ProjectCard, ProjectGrid
- ProjectHero, ProjectDetails
- ProjectResults, RelatedProjects

### 📄 news/ - Aktualności
**Strony:** `/aktualnosci` + `/aktualnosci/[slug]`
**Pliki:**
- `src/app/[lang]/aktualnosci/page.tsx`
- `src/app/[lang]/aktualnosci/[slug]/page.tsx`

Komponenty do dodania:
- NewsCard, NewsGrid
- ArticleHero, ArticleContent
- CategoryFilter, RelatedArticles

## 🔧 Shared Components

Komponenty używane na WIELU stronach znajdują się w:
`src/components/shared/`

Przykłady:
- Header, Footer
- AnimatedSection, StaggerContainer
- Button, LoadingSpinner
- JsonLd, CookieConsent

## 📝 Naming Conventions

### Komponenty stron
- Strona główna: `HomeHeroSection`, `HomeFeaturesSection`
- Podstrony: `AboutTeamSection`, `ContactForm`, `NewsCard`

### Pliki
- PascalCase: `ContactForm.tsx`
- Jeden komponent = jeden plik
- Index pliki tylko dla eksportu

## 🚀 Workflow

### Dodawanie nowego komponentu

1. **Określ gdzie będzie używany:**
   - Tylko na 1 stronie? → `pages/[nazwa-strony]/`
   - Na wielu stronach? → `shared/`

2. **Utwórz plik:**
   ```bash
   # Przykład: Nowy komponent dla strony projektów
   touch src/components/pages/projects/ProjectCard.tsx
   ```

3. **Dodaj komponent:**
   ```tsx
   // src/components/pages/projects/ProjectCard.tsx
   export default function ProjectCard({ title, description }) {
     // ...
   }
   ```

4. **Zaimportuj w stronie:**
   ```tsx
   // src/app/[lang]/projekty/page.tsx
   import ProjectCard from '@/components/pages/projects/ProjectCard'
   ```

### Przenoszenie do shared/

Jeśli komponent zaczyna być używany na >1 stronie:

1. Przenieś plik do `shared/`
2. Zaktualizuj wszystkie importy
3. Usuń stary plik

## 📊 Status migracji

- [x] Utworzone katalogi dla wszystkich stron
- [x] Przeniesione komponenty strony głównej (home/)
- [x] Przeniesiony formularz kontaktowy (contact/)
- [x] Zaktualizowane importy w page.tsx
- [ ] Dodane komponenty dla pozostałych podstron
- [ ] Usunięte stare katalogi (home/sections/, contact/)

## 🎯 Cel

Przejrzysta, skalowalna struktura gdzie:
- Łatwo znaleźć komponenty danej strony
- Jasny podział odpowiedzialności
- Unikamy duplikacji kodu
- Łatwa modernizacja i refactoring

# Stoffhaus FRU Website

## Project Overview
Website for **Stoffhaus FRU**, a fabric store at Allerheiligengasse 12, 2700 Wiener Neustadt, Austria. Owner: Fruzsina Tóth, FRU e.U. (ATU83216538). Grand opening end of May 2026.

## Tech Stack
- **Next.js 15** with App Router
- **Tailwind CSS 4** (CSS-based config in `src/styles/globals.css`, not `tailwind.config.ts`)
- **next-intl 4** for i18n (German default, English secondary)
- **TypeScript**
- **Deployed on Vercel** from GitHub: `https://github.com/Fru-Stoffhaus/Website.git`

## Key Commands
```bash
npm run dev     # Start dev server on localhost:3000
npm run build   # Production build (also validates types)
git push        # Triggers Vercel auto-deploy
```

## Project Structure
```
src/
├── app/
│   ├── layout.tsx                    # Minimal root layout (just returns children)
│   └── [locale]/
│       ├── layout.tsx                # Main layout: fonts, header, footer, providers
│       ├── page.tsx                  # Home page (composes all sections)
│       ├── impressum/page.tsx        # Legal notice (inline DE/EN content)
│       └── datenschutz/page.tsx      # Privacy policy (inline DE/EN content)
├── components/
│   ├── layout/
│   │   ├── Header.tsx                # Sticky nav with logo + language toggle (client component)
│   │   ├── Footer.tsx                # Links, social icons, copyright
│   │   └── LanguageSwitcher.tsx      # DE/EN toggle (client component)
│   ├── home/
│   │   ├── HeroSection.tsx           # Brand image + welcome text
│   │   ├── OpeningHours.tsx          # Hours on green background
│   │   ├── AboutSection.tsx          # Store description
│   │   ├── GallerySection.tsx        # 6 placeholder tiles with brand icons
│   │   ├── ContactSection.tsx        # Address, email, phone + click-to-load Google Maps
│   │   └── SocialButtons.tsx         # Facebook + Instagram links
│   ├── ui/
│   │   ├── CraftIcons.tsx            # Brand illustration components (transparent PNGs)
│   │   ├── DecorativePatterns.tsx    # SVG line patterns (zigzag, wavy, dashed, loopy, dotted)
│   │   ├── CookieConsent.tsx         # DSGVO info banner (client component, localStorage)
│   │   └── GrandOpeningBanner.tsx    # Purple announcement banner
│   └── seo/
│       └── LocalBusinessJsonLd.tsx   # Schema.org structured data
├── i18n/
│   ├── routing.ts                    # Locale config: ['de', 'en'], default 'de'
│   ├── request.ts                    # Server-side locale resolution
│   └── navigation.ts                # Typed Link, useRouter, usePathname
├── lib/
│   └── constants.ts                  # Store info (address, hours, social URLs, UID)
├── middleware.ts                     # next-intl locale detection + redirect / → /de
└── styles/
    └── globals.css                   # Tailwind 4 @theme with brand colors and fonts
messages/
├── de.json                           # German translations
└── en.json                           # English translations
public/images/
├── fru-brand.png                     # Main brand image (Instagram post)
└── icon-*.png                        # 11 hand-drawn brand icons (transparent backgrounds)
```

## Brand Design
- **Colors** (defined in `globals.css` as `@theme` vars):
  - Peach: `#ffab6d` → `--color-fru-peach`
  - Purple: `#74257e` → `--color-fru-purple`
  - Dark Green: `#335640` → `--color-fru-green`
  - Dark: `#2a2735` → `--color-fru-dark`
  - Off-white: `#fdfaf5` → `--color-fru-white`
- **Fonts**: Jost (headings, via Google Fonts), Inter (body)
- **Icons**: 11 hand-drawn chalk-style illustrations extracted from brand guidelines PDF, stored as transparent PNGs. Use `dark` prop on light backgrounds (applies CSS `invert`), no prop on dark backgrounds.

## i18n Routing
- All URLs have locale prefix: `/de/...`, `/en/...`
- Root `/` redirects to `/de/`
- UI strings in `messages/de.json` and `messages/en.json`
- Legal pages (Impressum, Datenschutz) use inline locale branching, not JSON translations
- Middleware at `src/middleware.ts` (inside `src/` because project uses src dir)

## Placeholders to Replace
- **Email**: `info@stoffhaus-fru.at` in `src/lib/constants.ts`
- **Phone**: `+43 XXX XXXXXXX` in `src/lib/constants.ts`
- **Store photos**: Replace gallery placeholder tiles in `GallerySection.tsx`
- **Grand Opening banner**: Remove `GrandOpeningBanner` from `src/app/[locale]/page.tsx` after opening

## DSGVO/Legal Notes
- Cookie consent is informational only (no tracking cookies)
- Google Maps uses click-to-load pattern (no data sent until user clicks)
- Social links are plain `<a>` tags (no embedded widgets/pixels)
- Impressum follows Austrian §5 ECG, §14 UGB, §63 GewO, §25 MedienG
- Datenschutz covers: server logs, cookies, Google Maps, hosting (Vercel), data subject rights

## Git Workflow
- Push to `main` → Vercel auto-deploys
- GitHub remote uses `Fru-Stoffhaus` account credentials

# Boutique & Offline Stitching Classes Website

A React + TypeScript + Vite + Tailwind CSS starter for a ladies' tailoring boutique and in-person stitching classes. Includes separate SEO-oriented landing pages, Hindi/English UI toggle, and WhatsApp enquiry links.

## Run locally

1. Install Node.js (LTS) if needed.
2. Extract this folder and open a terminal in it.
3. Run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL printed by Vite.
5. Before publishing, run `npm run build`.

## Before launch — important

Open `src/config.ts` and replace only with verified details:

- `name`: actual shop name
- `city` and `locality`: actual service location
- `whatsappNumber`: shop's WhatsApp number including India country code, digits only, e.g. `91XXXXXXXXXX`
- `address`, `openingHours`, and `email`: add only if the owner confirms them

WhatsApp buttons remain inactive until a valid number is entered; the site displays a setup note instead of inventing contact details.

## Content to confirm

- Actual business name and exact locality/city
- Verified address and opening hours
- Course fees, duration, batch timings, availability, and materials needed
- Whether alterations are offered
- Real photos of finished garments and class work, with permission
- Customer reviews (only genuine reviews)

Do not publish placeholder business information as fact.

## SEO included

- Page-specific titles and meta descriptions via `react-helmet-async`
- Separate routes for tailoring, blouse stitching, suit/kurti stitching, stitching classes, and cutting/measurement
- Semantic headings and descriptive image alt text
- Mobile-responsive layout
- Basic Open Graph metadata

## SEO still to do before production

- Add a real domain and ensure canonical URLs use the full production URL (currently paths are used as a starter placeholder).
- Add a `public/robots.txt` and `public/sitemap.xml` using the final domain.
- Create/claim and verify the Google Business Profile.
- Set up Google Search Console and submit the sitemap.
- Add LocalBusiness structured data only after the real business name, address/area, phone and URL are confirmed.
- Use prerendering/SSR if you want stronger initial HTML for crawlers; this starter uses client-side React routing.
- Replace stock photography with original photos of the actual shop, garments and classes. Check image licences and availability before production use.
- Consider Hindi-specific SEO titles/descriptions and correct canonical/hreflang setup if publishing fully localized URLs.

## Routes

- `/`
- `/tailoring`
- `/stitching-classes`
- `/blouse-stitching`
- `/suit-kurti-stitching`
- `/cutting-measurement-course`
- `/gallery`
- `/about`
- `/contact`

## Design notes

Modern minimal visual direction: warm off-white background, muted rose accents, dark typography, generous spacing and responsive cards. Uses Google Fonts and remote Unsplash images in the starter; replace them with licensed/owned assets for production.

## Code structure (easy to edit)

The homepage is intentionally split into small components so each section can be changed independently:

- `src/pages/Home.tsx` — assembles the homepage sections and sets homepage SEO.
- `src/components/home/HeroSection.tsx` — top banner, headline and main buttons.
- `src/components/home/OverviewSection.tsx` — tailoring and classes introduction cards.
- `src/components/home/ExperienceSection.tsx` — experience section and service links.
- `src/components/home/GalleryPreview.tsx` — gallery preview.
- `src/components/home/ContactCta.tsx` — final WhatsApp enquiry section.
- `src/components/Layout.tsx` — site-wide navigation and footer.
- `src/content.ts` — all English and Hindi website text.
- `src/config.ts` — boutique name, city, address and WhatsApp number.
- `src/pages/` — individual pages for tailoring, classes, services, gallery, about and contact.

### Making common changes

- **Change the boutique name/location/WhatsApp:** edit `src/config.ts`.
- **Change English or Hindi wording:** edit `src/content.ts`.
- **Change only the homepage top section:** edit `src/components/home/HeroSection.tsx`.
- **Change the homepage contact panel:** edit `src/components/home/ContactCta.tsx`.
- **Change navigation/footer:** edit `src/components/Layout.tsx`.

Each homepage section accepts a `language` prop and reads its wording from `src/content.ts`; this avoids duplicating text and keeps the page file short.

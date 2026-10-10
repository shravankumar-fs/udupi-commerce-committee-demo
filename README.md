# Udupi Chamber of Commerce & Industry — website (Aghora Labs)

Next.js 15 static site (GSAP motion, English / ಕನ್ನಡ toggle). Content lives in `lib/data.ts`; the Chamber's photos are in `public/` and registered in `lib/photos.ts`.

## Pages
- `/` Home — hero slideshow, stats, news, leadership, President's message band, gallery
- `/about` Who we are, President's message, office bearers & directors (2026–27), past presidents
- `/events`, `/events/[slug]` — event details with photos
- `/news`, `/news/[slug]` — news and circulars, with press cuttings
- `/gallery`, `/gallery/[slug]` — albums with lightbox
- `/join` — membership enquiry, `/contact` — office details and map

## Run
    npm install
    npm run dev        # http://localhost:3000

## Static build
    npm run build      # outputs ./out (not committed)

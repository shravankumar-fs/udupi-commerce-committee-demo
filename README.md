# Udupi Commerce Committee — demo website (Aghora Labs)

Next.js 15 demo for the pitch. All content is dummy data in `lib/data.ts`
(in the real build it moves into Payload CMS).

## Pages
- `/` Home — hero search, stats, events, sectors, news, gallery, join CTA
- `/members` Member directory (search + sector + area filters), `/members/[slug]` business page (Call / WhatsApp / Directions / map)
- `/events`, `/events/[slug]` with registration form
- `/news`, `/news/[slug]` — circulars, news, press releases, PDF attachment, WhatsApp share
- `/gallery`, `/gallery/[slug]` albums with lightbox
- `/about` objectives + office bearers
- `/join` membership plans, process, application form
- `/contact` form + map
- `/admin` **admin panel preview** — show the committee how the secretary adds events/circulars in EN + ಕನ್ನಡ and approves members
- English / ಕನ್ನಡ toggle in the top bar (remembered per visitor)

## Run
    npm install
    npm run dev        # http://localhost:3000

## Static build / quick hosting
    npm run build      # outputs ./out
Drag the `out` folder onto https://app.netlify.com/drop for a shareable link (a pre-built `out` is already included).

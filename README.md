# Zeal Icon Advertisement — User Site

Public-facing website for **Zeal Icon Advertisement**, a photography-first creative media brand.

This repo is the **user / visitor site only**.  
The **admin / CMS portal** will live in a separate repository.

---

## Brand focus

| Product | Status |
|---------|--------|
| **Photography** | Live (primary) |
| **Magazines** | Coming soon |
| **Articles** | Coming soon |

### Photography categories

- Wedding Shoots  
- Pre-Wedding Shoots  
- Corporate Events Shoots  
- Promotional Shoots  
- Interior Shoots  

---

## Features (current)

### Frontend experience
- Premium dark-first UI (light mode toggle in header)
- Mobile-first layout (hamburger on the left on mobile)
- Responsive homepage: Hero → Services → Explore Photography → Footer
- Photography archive with category filters
- Photography project detail pages + fullscreen image viewer
- Magazines & Articles coming-soon pages
- About & Contact pages

### Contact & booking
- **Contact Us** inquiry form (saved in browser `localStorage` until backend is ready)
- Direct social shortcuts: **Instagram**, **WhatsApp**, **LinkedIn**
- **Book a Shoot** flow (photography only):
  - Choose shoot type
  - Pick available date / time
  - Confirm booking (stored in `localStorage` for now)
  - Optional WhatsApp confirmation link after booking

### Content (Phase 1)
- Local **placeholder photography** data for UI development
- Supabase client + SQL schema prepared for live published photos later
- Site is designed to **read** published content only (admin writes)

---

## Tech stack

| Layer | Choice |
|-------|--------|
| Framework | React 19 |
| Bundler | Vite 8 |
| Routing | React Router 7 |
| Styling | Tailwind CSS 4 |
| Backend (planned) | Supabase (Postgres + Storage) |
| Lint | Oxlint |

---

## Project structure

```text
zeal-icon-advt-user/
├── public/                 # Static assets (favicon, brand images)
├── src/
│   ├── components/
│   │   ├── brand/          # Wordmark
│   │   ├── contact/        # Inquiry form, social inquiry
│   │   ├── home/           # Hero, Services, Explore
│   │   ├── layout/         # Header, Footer, Layout
│   │   ├── photography/    # Photo cards, image viewer
│   │   └── ui/             # Buttons, filters, badges, social icons
│   ├── context/            # Theme (dark / light)
│   ├── data/               # Placeholder content + studio contact links
│   ├── hooks/              # Photography data hooks
│   ├── lib/                # Supabase, content/booking helpers, navigation
│   ├── pages/              # Route pages
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── supabase/
│   └── schema.sql          # Photographs table + RLS (public read published)
├── .env.example
├── .gitignore
├── package.json
└── vite.config.js
```

---

## Routes

| Path | Page |
|------|------|
| `/` | Homepage |
| `/photography` | Photography archive |
| `/photography/:slug` | Project detail |
| `/book` | Book a shoot (availability + booking) |
| `/contact` | Inquiry form + social links |
| `/about` | About the studio |
| `/magazines` | Coming soon |
| `/articles` | Coming soon |

---

## Getting started

### Requirements

- Node.js 18+ (recommended: latest LTS)
- npm

### Install

```bash
npm install
```

### Environment

Copy the example env file:

```bash
cp .env.example .env
```

Fill values when Supabase is ready:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

> Without these keys, the UI still runs using local placeholder photography.

### Run locally

```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
npm run preview
```

### Lint

```bash
npm run lint
```

---

## Configure studio contact & social links

Edit **`src/data/placeholderContent.js`** → `studioContact`:

```js
export const studioContact = {
  email: 'studio@yourdomain.com',
  phoneDisplay: '+91 XXXXX XXXXX',
  whatsapp: '91XXXXXXXXXX', // country code + number, no + or spaces
  instagram: 'https://instagram.com/your_username',
  linkedin: 'https://linkedin.com/company/your_page',
}
```

These power:

- Header / footer / hero social icons  
- Contact page WhatsApp / Instagram / LinkedIn buttons  
- Post-booking WhatsApp confirmation link  

---

## Theme

- Default: **dark**
- Preference stored in `localStorage` key: `zealicon-theme`
- Toggle lives in the header (visible in both light and dark modes)

---

## Local data (until CMS / Supabase)

| Data | Storage key | Notes |
|------|-------------|--------|
| Photography | `src/data/placeholderContent.js` | Placeholder Unsplash images |
| Contact inquiries | `zealicon-inquiries` | Browser `localStorage` |
| Shoot bookings | `zealicon-shoot-bookings` | Browser `localStorage` |

Clear site data in the browser to reset demo inquiries/bookings.

---

## Supabase (next content phase)

1. Create a Supabase project  
2. Run `supabase/schema.sql` in the SQL editor  
3. Create a **public** Storage bucket named `photography`  
4. Put URL + anon key in `.env`  
5. Admin portal (separate repo) uploads images and publishes rows  
6. This user site displays `status = 'published'` photographs only  

RLS policy (already in schema): anonymous users can **read published** photos only.

---

## Roadmap

| Phase | Scope |
|-------|--------|
| **1 (now)** | Frontend UI/UX, placeholder content, inquiry + booking UI |
| **2** | Live photography from Supabase |
| **3** | Magazine system |
| **4** | Articles system |
| **5** | Admin / CMS (separate repo) |

---

## Git / GitHub notes

Ignored (do not commit):

- `node_modules/`
- `dist/`
- `.env` and other secrets
- OS / IDE / cache files  

Safe to commit:

- Source code  
- `.env.example`  
- `supabase/schema.sql`  
- Public assets  

---

## Scripts summary

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite development server |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview production build |
| `npm run lint` | Run Oxlint |

---

## License / ownership

Private project for **Zeal Icon Advertisement**.  
All brand content and photography remain property of the studio.

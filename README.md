# StandardTouch — Modern JavaScript Frontend

A production-oriented Next.js/JavaScript frontend migration of the StandardTouch website. The project preserves the StandardTouch business identity, service taxonomy, contact/location information and portfolio/case-study content while presenting it through a new responsive UI and interaction system.

## Architecture

- `app/` — routes and page composition
- `components/` — reusable presentation and interaction components
- `data/` — centralized StandardTouch content and portfolio/service records
- `lib/api/` — API abstraction layer for future backend integration
- `config/` — runtime/configuration values
- `public/` — local static assets

The UI components should not contain duplicated business data. Backend integration can later replace data providers/API functions without rewriting page components.

## Routes

- `/` — home
- `/services` — all services
- `/services/[slug]` — service detail template
- `/portfolio` — searchable/filterable portfolio presentation
- `/portfolio/[slug]` — case-study template
- `/contact` — contact/enquiry experience
- `/website-consulting` — consulting CTA route
- `/website-development-details-form` — website-development enquiry entry point
- `/digital-marketing-inquiry` — marketing enquiry entry point

## Run

```bash
npm install
npm run dev
```

Production:

```bash
npm run build
npm start
```

## Backend later

Set the API base URL in `.env` from `.env.example`. API calls should live under `lib/api/`, not inside visual components.

## Important

The final production build could not be executed in this environment because npm dependency installation timed out. All project JavaScript files were syntax-checked successfully.

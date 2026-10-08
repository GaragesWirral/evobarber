# EVO Private Barber Menorca — Website

Trilingual (ES / EN / FR) static website for EVO Private Barber, a luxury at home barber service in Menorca founded by Luka Folch.

## Structure

- Spanish (main language) at the root: `/`, `/barbero-privado-menorca/`, `/barbero-bodas-menorca/`, `/barbero-yates-menorca/`, `/barbero-hoteles-villas-menorca/`, `/servicios/`, `/sobre-mi/`, `/contacto/`
- English under `/en/`: home, `mobile-barber-menorca`, `wedding-barber-menorca`, `yacht-barber-menorca`, `hotel-villa-barber-menorca`, `services`, `about`, `contact`
- French under `/fr/`: home, `barbier-prive-minorque`, `barbier-mariage-minorque`, `barbier-yacht-minorque`, `barbier-hotel-villa-minorque`, `services`, `a-propos`, `contact`
- Shared assets in `/assets/` (CSS design system, JS interactions, optimized images, logo, favicon)
- `KEYWORD-RESEARCH.md` documents the keyword clusters each page targets
- `brand/` contains the rendered presentation and business card for reference (not linked from the site)

## Key features

- Booking widget in the hero of every landing page: the visitor picks a service, location and date, and the form opens WhatsApp (+34 647 109 071) with a prefilled message in the page language
- Optional Cal.com embedded calendar that replaces the WhatsApp form on every booking card (see "Activating the Cal.com calendar" below)
- Scroll reveal animations, hero parallax, FAQ accordions and hover effects (vanilla JS, no dependencies)
- Full SEO setup: unique titles and descriptions, hreflang alternates on every page, canonical URLs, Barbershop and Service JSON LD schema, FAQPage schema on home pages, `sitemap.xml` and `robots.txt`
- Brand style taken from the EVO presentation: black background, metallic silver typography, Montserrat display font with wide letterspacing, diamond ornaments

## Local preview

The site uses root relative URLs, so open it through a local server rather than double clicking the files:

```
cd "C:\Users\josep\OneDrive\barber website"
python -m http.server 8080
```

Then visit http://localhost:8080

## Activating the Cal.com calendar

The Cal.com integration is already built in. Until it is activated the site shows the WhatsApp booking form, so nothing is broken in the meantime.

1. Create a free account at https://cal.com with evoprivatebarber@gmail.com and pick a username, for example `evo-private-barber`
2. Create one event type per service with its duration, for example: Corte premium (45 min), Corte y ritual de barba (75 min), Ritual de barba (30 min), Experiencia EVO completa (90 min)
3. In each event type set booking questions (location type, address or marina, notes), a minimum notice (for example 12 h) and buffer time between bookings to cover travel across the island
4. Set the working hours in Availability and connect Google Calendar so bookings appear there automatically
5. Open `assets/js/main.js` and set the username on the `CAL_LINK` line near the top:

```js
var CAL_LINK = "evo-private-barber";
```

That single change activates the embedded calendar (dark theme, in the page language) inside the booking card of all 18 landing and contact pages. Set it back to `""` to return to the WhatsApp form. Later, Stripe can be connected in Cal.com to charge deposits at booking time.

## Before going live

1. Replace `evoprivatebarber.com` with the real domain in every page head (canonical, hreflang, Open Graph), in `sitemap.xml` and in `robots.txt` if a different domain is purchased
2. Deploy to any static host (Netlify, Vercel, Cloudflare Pages)
3. Create a Google Business Profile as a service area business covering Menorca and link the site
4. Verify the site in Google Search Console and submit `sitemap.xml`
5. Validate keyword volume tiers in Google Keyword Planner (see `KEYWORD-RESEARCH.md`)

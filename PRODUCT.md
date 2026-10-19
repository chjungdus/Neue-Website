# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, confirmed by the owner:

- Primary today: owners of small local businesses in and around Düsseldorf (food trucks, restaurants, cafés, hairdressers, trades, cleaning, events). Often no website or an outdated one; little time, wary of agencies, decide on trust, price certainty and seeing real work.
- Growth target: somewhat larger businesses (practices, law firms, small Mittelstand) who expect a premium supplier and need the site itself to justify the agency's quality.

Both arrive mostly on the phone, often from Instagram, TikTok, WhatsApp or Google, and want to know quickly: what does it cost, how long does it take, can I see what you built, and who will I talk to.

## Product Purpose

Nexuzo is a web design studio in Düsseldorf that builds custom websites (no templates, no page builders) and gets them live in four weeks at a fixed price. The site's job is to turn a visitor into an inquiry (form at /anfrage, contact form, WhatsApp) and, for the larger audience, to prove the studio's level by being an example of it.

## Positioning

- Fixed price agreed before the project starts; no hourly rate.
- Payment only after the client approves the result ("Sie entscheiden danach, ob Sie zahlen").
- Live in four weeks; offer within 24 hours; free 30-minute first conversation, "kein Pitch".
- Two founders build every site themselves; the client talks directly to the person building it. At most four projects at a time.

## Operating Context

Inquiry flow: free first conversation, fixed-price offer, design draft to approve, build with a staging link and weekly updates, launch with tests on all devices and handover of all accesses (domain, hosting, code). Optional care plans afterwards. Hosting on Vercel, data in Supabase.

## Capabilities and Constraints

- Stack: Next.js 16 (App Router), React 19, Tailwind CSS 4, framer-motion, Supabase, nodemailer, next-auth admin area (/admin for inquiries and portfolio). Deployed from GitHub repo chjungdus/Neue-Website to nexuzo.de.
- Pages: home, /leistungen, /preise, /portfolio and /portfolio/[slug], /ueber-uns, /faq, /kontakt, /anfrage (multi-step inquiry wizard), /impressum, /datenschutz, /agb.
- Prices (confirmed unchanged): Starter ab 199 €, Pro ab 399 €, Premium ab 699 € (net). Care plans Basic 19 €, Standard 39 €, Premium 59 € per month. Payment by transfer, card, PayPal or invoice.
- Language: German, formal "Sie".
- The inquiry wizard, contact form, admin area and API routes must keep working.

## Brand Commitments

- Name and wordmark "Nexuzo" (public/logo/nexuzo.png, nexuzo-white.png) stay.
- Brand blue #0066FF stays (confirmed by the owner, 2026-10-19).
- Voice: direct, honest, short sentences, no agency jargon, no overpromising.
- Contact: WhatsApp +49 176 80257270, nexuzo.kontakt@gmail.com, Instagram and TikTok @nexuzo.de, Mo–Fr 9–18 Uhr.

## Evidence on Hand

- Live client sites: milonga-foodtruck.de, limpiezas-el-valle.es, essah-urfa.de.
- Demo drafts without their own domain (must stay labelled as demos): Antonio Construcción, Peluquería Loli, Lorenz DJ, No-ra (chjungdus.github.io).
- One real testimonial: Limpiezas El Valle, Burgos ("täglich 2 Mal angerufen … bis September ausgebucht").
- Team: Mateo Sainz de la Maza (Mitgründer, Entwicklung), Zhuo Jun Li (Mitgründer, Design). No team photos on hand.
- Statistics in the problem section (1,5 % / 90 % / 63 %) have no recorded source yet.
- No press, awards, client logos or further reviews exist. Never fabricate them.

## Product Principles

1. Show the work: real, clickable client sites are the strongest proof.
2. Remove risk for the buyer: fixed price, pay after approval, four weeks, direct contact are always visible.
3. Honest over impressive: demos are labelled, numbers are sourced or left out.
4. The site is the sample: its own craft must justify the price for larger clients.

## Accessibility & Inclusion

WCAG 2.2 AA as the baseline; reduced motion respected; mobile first.

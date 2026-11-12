# Brief: reggiealleyne.com audit (Nov 2026)

- **Track:** site (showpiece / lead profile). Existing build, so this pass is audit and repair, not a rebuild.
- **Primary action:** View work, then contact or download the resume.
- **Audience:** hiring managers and recruiters first (see PRODUCT.md), on phone via shared links and on desktop.
- **Platform:** Vite + React + Tailwind + GSAP/Lenis + three.js. Production is the Netlify project `reggiealleyne`, deployed with the Netlify CLI from the Mac. The contact section offers email, resume, GitHub and LinkedIn links; the Supabase `send-contact-email` function needs a Turnstile key that this build does not set.
- **Goal:** more recruiter replies. Analytics wiring is in place (Umami) but off until a website ID is set.
- **Must not lose:** existing `/project/<slug>` URLs and the current visual direction (DESIGN.md).
- **Access in hand:** this repo, the Netlify CLI on the Mac. Not in hand: Search Console, an Umami website ID.

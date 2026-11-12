# Progress: portfolio audit

Branch: `claude/portfolio-audit-fixes`. Nothing is published.

## Stage status
- 0 Brief: done (`brief.md`)
- 1 Structure: audited, decisions waiting on Reggie (below)
- 2 Copy: audited, decisions waiting on Reggie (below)
- 3 Design/build: no redesign in this pass
- 4 Working parts: contact form NOT tested (sandbox cannot reach Supabase or the live site)
- 5 Search and measurement: technical fixes done; analytics blocked on a tool choice
- 6 Accessibility: automated pass only; manual keyboard and screen reader pass still open
- 7-9: not started. Checkpoint B (publish) needs Reggie's go.

## Done on this branch
- Share/icon logo: favicon, apple-touch-icon and PWA icons rebuilt from the current RA logo (they were the old circled monogram). Old icon files and `ra-logo*.svg` removed. Share image renamed to `reggie-alleyne-og-v2.jpg` so platforms refetch it. Service worker cache bumped to v4.
- SEO: `/work`, `/about` and `/playground` now set their own title, description and canonical (they previously canonicalised to the home page). Added `robots.txt` and `sitemap.xml`. Unknown URLs show a 404 page (noindex) instead of silently loading the home page.
- Performance: 105 heavy images got WebP versions and code now points at them (59.3 MB to 7.5 MB). Home page transfer measured locally 5.9 MB to 1.1 MB. Original PNG/JPG files kept because database project records may still reference them. Hero portrait preloaded.
- Accessibility: Work list titles show at full contrast (they were 34% grey until hovered).

## Verified
- `npm run build`, `typecheck`, `lint` (0 errors) pass.
- All 7 routes loaded at 390px and 1440px in Chrome: no failed image or asset requests, no horizontal overflow, every image has alt text.

## Checkpoint A decisions (Nov 11)
1. Positioning: "Senior UX/UI Designer who codes and builds with AI" in titles, meta, structured data and the hero H1; short form "Senior UX/UI Designer · Code + AI" in the footer and About. Per-project role fields left as they were.
2. `/services` removed (page, route, hidden nav/footer/palette entries). The URL now shows the 404 page.
3. CLLCTVE numbers: Reggie cannot source them (company and platform closed). NOT removed yet: they match the resume PDF and the case study already labels them "Reported in the resume". Needs an explicit keep-or-cut call covering both the site and the resume.
4. Project share cards: still open. Needs per-route HTML at build time; depends on how Lovable serves nested files.
5. Analytics: Umami Cloud chosen (cookieless, free Hobby plan). Wired in `src/lib/analytics.ts` with `resume-open`, `email-click`, `outbound-click` and `contact-sent` events. Off until `VITE_UMAMI_WEBSITE_ID` is set in `.env`. Blocked on Reggie creating the Umami site and supplying the ID; no test event fired yet.
6. Work titles: solid ink at rest on every device, accent on hover. Text stroke removed.

## Pass 2 (design, motion, case studies), started Nov 11
- Audit done from scroll captures at 1440 and 390: hero is the strongest surface; below it the home page is stacked cards, text rows and a nine-row tool list with fade-in motion only; case studies run about 8,100px desktop / 11,500px mobile, mostly bordered text boxes, small screenshots and stock 3D icons; no WebGL anywhere; `DESIGN.md` describes an older build.
- Research: five Mobbin section sweeps done. Awwwards list gathered but no site watched live (see `direction.md`, Open items).
- Reggie's decisions: keep hero and rebuild the rest; 3D moment is the hero canvas in depth; case studies go screens first; lead work is Staybooked, MotorFlow, Litmus AI.
- `direction.md` written. Build not started: waiting on Reggie's go on the direction.
- Still to do in this pass: per-project share cards, CreativeWork structured data, empty H2s on case studies, case-study title punctuation.
- Preview deploy is on hold until this pass is built (Reggie, Nov 11).

## Deploy facts (found Nov 11)
- reggiealleyne.com is served by Netlify project `reggiealleyne` via CLI deploys, last on Oct 28. Lovable does not serve the domain.
- That deploy contains per-route HTML files this repo's build does not produce. Source unknown; ask Reggie before any production deploy.
- Empty Netlify project `reggiealleyne-pr5-preview` was created for a preview and has no deploy.

## After publishing
- Re-scrape the home URL in LinkedIn Post Inspector and Facebook Sharing Debugger; iMessage caches previews per device.

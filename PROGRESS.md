# Progress: portfolio audit

Branch: `claude/portfolio-audit-fixes`. Nothing is published; Lovable deploys from `main`.

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
- SEO: `/work`, `/about`, `/playground`, `/services` now set their own title, description and canonical (all four previously canonicalised to the home page). Added `robots.txt` and `sitemap.xml`. Unknown URLs show a 404 page (noindex) instead of silently loading the home page.
- Performance: 105 heavy images got WebP versions and code now points at them (59.3 MB to 7.5 MB). Home page transfer measured locally 5.9 MB to 1.1 MB. Original PNG/JPG files kept because database project records may still reference them. Hero portrait preloaded.
- Accessibility: Work list titles show at full contrast on touch screens (they were 34% grey with no hover to fill them).

## Verified
- `npm run build`, `typecheck`, `lint` (0 errors) pass.
- All 8 routes loaded at 390px and 1440px in Chrome: no failed image or asset requests, no horizontal overflow, every image has alt text.

## Waiting on Reggie (Checkpoint A)
1. Positioning label: the site uses three ("UX/UI Designer & Frontend Developer" in titles, "UX/UI Designer & AI Technologist" in the footer, "Senior UX/UI Designer" on the resume). Pick one.
2. `/services` sells growth websites to service businesses on a hiring portfolio. It is not in the nav or sitemap. Keep, move to Rejuvenate, or remove?
3. CLLCTVE card claims "500+ creators, 15 brand partnerships, 85% retention". Confirm these are real and sourceable, per PRODUCT.md.
4. Project links shared on LinkedIn/iMessage all show the home page card, because share crawlers do not run JavaScript. Fix needs per-route HTML at build time; depends on how Lovable hosting serves nested files.
5. Analytics: none installed. Which tool?
6. Desktop Work titles at rest are about 2:1 contrast and show glyph-overlap lines from the text stroke. Design call.

## After publishing
- Re-scrape the home URL in LinkedIn Post Inspector and Facebook Sharing Debugger; iMessage caches previews per device.
- Check Lovable's own publish settings for a favicon or share image set there.
- `netlify.toml` redirects (`/project/2` to `/project/13`) do not apply on Lovable; only the CLLCTVE aliases are handled in the router.

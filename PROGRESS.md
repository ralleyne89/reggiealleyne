# Progress: portfolio audit

Branch: `claude/portfolio-audit-fixes`. Nothing is published.

## Stage status (Nov 11, end of day)
- 0 Brief: done
- 1 Structure: done (existing pages kept; `/services` removed; lead order Motorflow, Staybooked, CLLCTVE)
- 2 Copy: done for new sections using existing copy; no new claims written
- 3 Design and build: done (`direction.md`)
- 4 Working parts: contact is mailto, resume and social links, all present; the Supabase contact function needs a Turnstile key this build does not set, so it is not used
- 5 Search and measurement: done except analytics (blocked on an Umami website ID) and Search Console (no access)
- 6 Accessibility: axe AA clean on 7 pages at two widths, keyboard pass done; screen reader pass not done
- 7 Final QA: verify script passes on the preview; Lighthouse home mobile 83, case study mobile 86, home desktop 92; Chrome only
- Nov 12: at Checkpoint B Reggie asked for Work and About rebuilt and a dark liquid-glass nav first. Done: `src/pages/Works.tsx`, `src/pages/About.tsx`, nav glass in `src/index.css` and `Navbar.tsx`. axe AA clean on both pages at two widths. Copy on both pages is unchanged; About dropped its duplicate closing CTA.
- **Checkpoint B: waiting on Reggie's go for production.** Preview: https://6af56842330e7793ba89cb5a--reggiealleyne-pr5-preview.netlify.app
- 8 Launch: not started
- 9 Handoff: `handoff.md` drafted, to be finalised after launch

## Done on this branch
- Share/icon logo: favicon, apple-touch-icon and PWA icons rebuilt from the current RA logo (they were the old circled monogram). Old icon files and `ra-logo*.svg` removed. Share image renamed to `reggie-alleyne-portfolio-og-20260915.jpg` so platforms refetch it. Service worker cache bumped to v4.
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
- Research: five Mobbin section sweeps done. Awwwards: Jesper Landberg and Olha Lazarieva watched live in Chrome on Nov 11.
- Reggie's decisions: keep hero and rebuild the rest; 3D moment is the hero canvas in depth; case studies go screens first; lead work is MotorFlow first (Reggie), then Staybooked and Tech Noir (Claude's pick, reasoning in `direction.md`).
- `direction.md` written and approved with the MotorFlow change (Nov 11).
- Built (Nov 11):
  - Case studies: `ScreensFirstCaseStudy` for every project with a curated narrative (11 projects). Header with one framed cover, three-part brief, thesis that lights up on scroll, sticky walkthrough, dark proof band. Staybooked went from 846 to 445 words and 8,101px to 6,831px; MotorFlow 820 to 444 words. Projects without a narrative keep the old layout.
  - Home: sticky lead-work stack (Motorflow, Staybooked, Tech Noir), statement section whose headline arcs with scroll speed, four "More selected work" rows. Tool list moved to About.
  - Hero: `HeroDepthScene`, a three.js layer behind the HTML hero with a grid floor and five product screens in depth; camera follows scroll, damped pointer parallax. Lazy chunk (132 kB gzip), desktop with fine pointer only, skipped under reduced motion and data saver.
  - `SelectionFrame` component used for covers, walkthrough stage and lead-work stage.
  - `body` and `#root` use `overflow-x: clip`; `hidden` was breaking `position: sticky` site-wide.
- Verified: build, typecheck, lint (0 errors); scroll captures at 1440 and 390 for home, Staybooked, MotorFlow, Tech Noir, About; no horizontal overflow; no page errors; reduced motion shows all content and no canvas; WebGL scene renders in headless Chrome (software GL).
- Not verified: frame rate on real hardware, Safari and Firefox, touch devices, Lighthouse score, the old-layout projects after the overflow change beyond a build.
- Built (Nov 11, second build pass):
  - Hero layers are real planes in depth on wide screens with a mouse: wordmark, portrait, chips, tool panel and CTA panel sit at different Z under one perspective, tilt with the pointer, and separate on scroll, in step with the WebGL scene behind. Implemented as CSS 3D on the live HTML (text stays crisp and clickable), not as WebGL textures.
  - `DesignFileChrome`: top and left rulers that track scroll and pointer, a page and scroll readout, and a Layers panel listing the page's sections (`data-layer`) with jump-to. Wide screens with a mouse only.
  - Playground rebuilt as a dotted canvas of artboards, draggable by their tags (GSAP Draggable). Links inside stay normal links.
  - Screen handoff: clicking a lead-work tile carries its screen across the route change onto the case-study cover (`src/lib/screenHandoff.ts`).
  - Build step `build/routeHtml.ts`: writes one HTML file per route (3 pages + 16 projects) with its own title, description, canonical, share image and, for projects, CreativeWork JSON-LD. Route titles and descriptions now live in `src/config/routeMeta.ts`.
  - Titles: "Staybooked: AI Airbnb Optimizer", "Litmus AI: AI Literacy Testing & Certification Platform".
- Verified in headless Chrome: layers panel lists and jumps; playground drag moves a board; handoff appears and clears and the route title updates; home title is restored on back; 19 route files written with correct tags; no page errors.
- Not verified: whether Netlify serves `/project/<slug>/index.html` ahead of the SPA rewrite (expected, untested until a deploy); real-GPU frame rate; Safari, Firefox, touch; Lighthouse.
- Built (Nov 11, third pass):
  - Relief bust: the hero portrait is displaced by a height map (`portrait-depth.png`, built from the portrait's silhouette) and drawn on its own small canvas in the portrait's slot, so it turns toward the pointer with real parallax and light sliding across it. The `<img>` stays underneath as poster, alt text and fallback. It is a relief, not a full 360 model: the back does not exist and facial features share the depth of the head dome.
  - Layers panel falls back to page headings where a page names no sections (Work, About, 404) and now lands sections under the nav.
  - 404 shows an empty selection frame tagged with the missing path. Work row previews are framed.
- A true 360 bust was not possible: the Higgsfield account has 0.4 credits and image-to-3D costs 38. Blender is installed on the Mac but cannot produce a likeness from one photo on its own.
- Local preview finding: `~/Projects/reggiealleyne` was on branch `update-resume-ai-product-designer`, so `npm run dev` showed old code. Port 8080 is also used by another app (lobsterboard) on IPv4.
- Known gaps: Work and About have chrome and layers but no layout changes of their own.

## Local repo and preview (found Nov 11, late)
- `~/Projects/reggiealleyne` on the Mac is on branch `update-resume-ai-product-designer` with 38 modified and 30 untracked files, last touched Oct 28: new `ra-stars-*` icons, a `build/routeMetadata.ts`, a 404 rewrite in `netlify.toml`, `HomeLoader` deleted, and edits across hero, pages and project data. The Oct 28 production deploy almost certainly came from this folder. None of it is on GitHub.
- Resolved Nov 11: the local work was committed to branch `local-oct28-work` (stale `.git/HEAD.lock` from July moved aside first) and merged into PR #5. Icons, share image name, responsive images, scripts, audit notes, skip link and the 404 rule were taken; local source edits that `main` had already superseded were not.
- That folder was not touched. A separate worktree at `~/Projects/reggiealleyne-pr5` holds the PR branch; a dev server runs from it on port 5180.
- Draft preview deployed from the worktree to the `reggiealleyne-pr5-preview` Netlify project (not production). Verified there: home 200, `/project/motorflow` and `/work` serve their own title and share image after a trailing-slash redirect, favicon and depth map load.

## Deploy facts (found Nov 11)
- reggiealleyne.com is served by Netlify project `reggiealleyne` via CLI deploys, last on Oct 28. Lovable does not serve the domain.
- That deploy contains per-route HTML files this repo's build does not produce. Source unknown; ask Reggie before any production deploy.
- Empty Netlify project `reggiealleyne-pr5-preview` was created for a preview and has no deploy.

## After publishing
- Re-scrape the home URL in LinkedIn Post Inspector and Facebook Sharing Debugger; iMessage caches previews per device.

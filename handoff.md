# Handoff: reggiealleyne.com rebuild

Status: **live at https://reggiealleyne.com since Nov 12, 2026.** Hosted on the Netlify project `reggiealleyne`; DNS is at Namecheap.

## What was built
- **Home:** existing hero, now with layers in real depth, a relief bust of the portrait and a three.js scene of product screens behind it (desktop with a mouse only). Lead work stack: Motorflow, Staybooked, Litmus AI. Statement section. More selected work: Tech Noir, CLLCTVE, Covelo, SymptomCheckr. Playground preview. Contact.
- **Case studies:** screens-first template for the 11 projects that have a curated narrative. The other five keep the older layout.
- **Work:** the file's frame index. Three lead artboards on a canvas, then the other frames as a grid that selects on hover.
- **About:** a spec page. Portrait as the selected layer with a properties panel, Design and Code joined by a prototype connector, experience as a history list.
- **Figma file canvas:** Motorflow, Staybooked, Litmus AI, Tutor D and SymptomCheckr case studies open their Figma file on a three.js canvas (pages, pan, zoom, click to focus). Phones and reduced motion get a swipeable strip.
- **Playground:** canvas of draggable artboards.
- **Nav:** dark translucent glass with a rim light and a highlight that follows the pointer. In Chrome and Edge the rim also bends what is behind it (SVG displacement, `src/lib/liquidGlass.ts`); Safari and Firefox get the glass without the bend. It falls back to solid dark where blur is unsupported or reduced transparency is on.
- **Design-file chrome:** rulers, page and scroll readout, Layers panel (desktop with a mouse).
- **Search:** one HTML file per route with its own title, description, canonical and share image; CreativeWork data on projects; `robots.txt`, `sitemap.xml`; unknown URLs return a real 404.
- **Icons and share image:** the RA stars set and `reggie-alleyne-portfolio-og-20260915.jpg`.

## How to change common things
- **Lead projects and their one-line summaries:** `featuredProjectConfig` in `src/config/portfolioCuration.ts`. Order there is order on the page.
- **More selected work (home):** `moreSelectedProjectSlugs` in `src/components/home/FeaturedProjectsSection.tsx`.
- **A project's title, description, cover, live link:** its file in `src/services/api/projects/`.
- **Case-study brief, thesis, proof figures:** `caseStudyTldrs`, `caseStudyNarratives`, `caseStudyImpacts` in `src/config/portfolioCuration.ts`.
- **Page titles and descriptions:** `src/config/routeMeta.ts`.
- **Resume file:** `src/config/resume.ts` and the PDF in `public/resume/`.
- **Add a new image:** put it in `public/images/`, reference the path. Run `node scripts/optimize-portfolio-images.mjs` if it is large.
- **Figma canvas frames:** `src/config/figmaCanvas.ts` (Tutor D, SymptomCheckr, Staybooked) and `src/config/figmaCanvasDrafts.json` (Motorflow, Litmus AI); images in `public/images/figma-canvas/<slug>/`. Re-export from Figma when a file changes.
- **Colours:** OKLCH tokens at the top of `src/index.css`.

## Where things arrive, and what is tracked
- Contact is by email link (`mailto:`), resume download, GitHub and LinkedIn. No form submission is stored anywhere.
- Analytics: Umami wiring in `src/lib/analytics.ts` with `resume-open`, `email-click`, `outbound-click`, `contact-sent`. It does nothing until `VITE_UMAMI_WEBSITE_ID` is set in `.env`.

## Accounts
- GitHub `ralleyne89/reggiealleyne` (public). Netlify team owning `reggiealleyne` (production) and `reggiealleyne-pr5-preview` (draft previews). Supabase project behind the optional project list and contact function. All owned by Reggie.

## Verified
- Build, typecheck, lint: 0 errors.
- `scripts/verify-portfolio.mjs` against the preview: 20 pages with unique titles and correct canonicals, 2 real 404s, 2 redirects, 11 metadata resources.
- axe WCAG 2.1 AA on home, Work, About, Playground, two case studies and the 404, desktop and phone: clean except one decorative background word.
- Keyboard: skip link, nav, hero buttons, lead work links all reachable with visible focus.
- Live domain, Nov 12: verify script passes (20 pages, 2 real 404s, 2 redirects, 11 metadata resources); HTTPS on both hosts.
- Lighthouse on the preview from the Mac, before the later Work, About, nav and Figma changes: home mobile 83, Motorflow case study mobile 86, home desktop 92. Accessibility 96, best practices 100.
- Reduced motion: all content visible, no WebGL.

## Not verified
- Safari, Firefox and a real phone. Only Chrome was available.
- Screen reader pass.
- Frame rate of the 3D hero on older laptops.

## Deferred or assumed
- CLLCTVE figures (500+ creators, 15 partnerships, 85% retention) are shown as reported in the resume; the company is closed and they cannot be sourced.
- The bust is a relief built from the portrait's silhouette, not a full 360 model. A full model needs image-to-3D credits (38 on Higgsfield) or a scan.
- Home mobile LCP is about 4.3 s on simulated 4G because the hero reveals after its intro.
- The word-by-word statements start dim and light up on scroll; they fail contrast until lit.
- Local edits to hero, pages and project components from the Sep-Oct working tree were not merged where `main` already had newer versions. They are preserved on branch `local-oct28-work`.
- `Technoir/` (522 MB native project) and `swap.bundle` remain untracked in `~/Projects/reggiealleyne`.

## Asset sources
- Portrait, wordmark, RA logo and product screenshots: Reggie's own. Depth map generated from the portrait. Fonts: Bricolage Grotesque, Geist, Geist Mono via Fontsource (SIL OFL). three.js and GSAP under their standard licences.

## Hosting and deploys
- **DNS (Namecheap):** `A @ 75.2.60.5`, `CNAME www reggiealleyne.netlify.app`. Mail forwarding (MX and SPF TXT) is untouched. Before Nov 12 both hosts pointed at Lovable (`185.158.133.1`).
- **Deploy:** from a clean checkout of `main`: `npm install --include=dev && npm run build && netlify deploy --dir dist --site reggiealleyne --no-build --prod`. Plain `npm ci` skipped dev dependencies on the Mac, which breaks the build.
- **Check after a deploy:** `AUDIT_ORIGIN=https://reggiealleyne.com node scripts/verify-portfolio.mjs`.
- **Rollback:** in Netlify, publish an earlier deploy. To go back to the Lovable-hosted old site, set both DNS records back to `185.158.133.1`.
- **HTTPS:** Let's Encrypt certificate issued by Netlify for both hosts; it renews on its own.

## Still to do
- Re-scrape https://reggiealleyne.com in LinkedIn Post Inspector so the new share image shows (needs Reggie signed in).
- Submit `sitemap.xml` in Search Console (no access yet).
- Create an Umami site and set `VITE_UMAMI_WEBSITE_ID`, then rebuild, to turn analytics on.
- Decide on the CLLCTVE figures.
- Lighthouse has not been re-run since the Work, About, nav and Figma canvas changes.

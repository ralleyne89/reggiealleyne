# Portfolio improvements — September 15, 2026

**Status:** implemented and verified locally. Nothing pushed or deployed. Local review URL: http://localhost:8888/ while the Netlify development server is running.

The [original audit](portfolio-audit.md) remains the live-site baseline: **73/100**. These changes address its highest-priority issues, but that score has not been replaced with an unsupported post-release score.

## Completed, in priority order

| Priority | Improvement | Implementation and evidence |
|---|---|---|
| P1 | Current branding and page metadata | Preserved the prepared RA-with-stars icon exports, manifest, service-worker cache version, dated sharing-image URL, and generated metadata for 20 routes. Rechecked resources and route identity against the local Netlify server. The sharing image is the existing site screenshot; it has not been recomposed. |
| P1 | Accessible image previews | Replaced the custom overlay with Radix Dialog. Added a dialog title, focus entry and containment, Escape dismissal, focus restoration to the opener, a visible close control, background isolation, and a Lenis scroll lock. |
| P1 | Landmarks and readable work links | Added a first-focus skip link and one main content landmark per rendered page. Changed Work titles from translucent outlined text to solid dark ink; retained purple hover/focus behavior. |
| P1 | Clearer professional positioning | Home now leads with UX/UI design and frontend development, complex workflows, healthcare/AI experience, and the existing Blue Shield Principal UX/UI role. About and Footer use the same professional title. Employment claims remain sourced to supplied portfolio/resume records. |
| P1 | Contact that fits hiring and projects | Added a role/project invitation, copy-email action with success/failure feedback, explicit “Download resume,” and a secondary website-services link. Case endings now invite a conversation before the next project. |
| P1 | Product evidence appears earlier | CLLCTVE opens with an archived dashboard; Litmus AI opens with its assessment start screen. Both replace decorative case covers. Their image frames use the correct landscape treatment without cover textures. Flagship chapter order places interfaces after the compact overview; design notes are expandable. Home/Work project names now include the actual product names. |
| P1 | Honest, consistent case-study claims | Staybooked’s upload caption identifies an empty setup state, and its version note distinguishes the room-focused MVP from the evolved live product. CLLCTVE metrics are labeled reported results with source limitations. Removed the unsupported average-savings assertion from active ScentStack data and qualified Tech Noir’s tester percentage. Tutor D describes SMS learning. Covelo’s team context now matches its solo-MVP record. Doggy Date’s year is 2017, matching both local resumes and About. |
| P1 | Less waiting and smaller images | Removed the timed HomeLoader and its event/poll dependency. Hero animation starts directly. Added responsive WebP portrait/wordmark exports and Staybooked cover exports, with srcset for the hero and featured/work images. Original source images remain available. |
| P2 | Phone/tablet hierarchy | Value proposition and work/resume actions precede the portrait below desktop width. Tablet name bounds fit inside the viewport. Decorative floating panels are hidden below desktop width. Added an expandable “On this page” menu for mobile/tablet case studies. |
| P2 | Useful, real 404 responses | Added a NotFound page and a typed missing-project error. Generated a 404 document with noindex and no canonical; changed the Netlify fallback to HTTP 404. Known generated pages and legacy redirects still work. Returning to a known page restores normal metadata/indexing. |

## Measured file-size changes

These are **file sizes**, not loading-speed or Core Web Vitals measurements.

| Asset | Original | New variants |
|---|---:|---:|
| Hero portrait | 1,476,367 bytes | 22,334 / 64,510 / 101,052 bytes at 384 / 768 / 1024 px |
| Hero wordmark | 340,298 bytes | 15,596 / 28,492 / 17,482 bytes at 640 / 1280 / 2092 px |
| Staybooked cover | 1,392,435 bytes | 23,828 / 63,726 bytes at 640 / 1280 px |

Browsers choose a responsive variant according to viewport and pixel density. The differently sized wordmark encodings do not have monotonically increasing sizes; those values are the actual exports. [Export results](evidence/image-optimization.json).

## Verification

- `npm run build`: passed. Existing Browserslist/Tailwind warnings remain.
- `npm run typecheck`: passed.
- ESLint on changed TypeScript/React files: passed.
- `git diff --check` and syntax checks for the new utility scripts: passed.
- `node scripts/verify-portfolio.mjs`: passed against local Netlify, checking 20 unique page titles/canonicals, two HTTP 404s, two 301 redirects, and 11 metadata resources. [HTTP evidence](evidence/improved-route-checks.json).
- Desktop 1440×900 DOM checks: Home, About, Work, Playground, Services, CLLCTVE, Litmus AI, Staybooked, Tutor D, Covelo. Each had one main, one h1, and zero document-wide horizontal overflow. [Results](evidence/improved-browser-checks.json).
- Visual review: Home at 1440×900, 768×1024, and 390×844; Work at tablet/phone widths; Litmus desktop; Staybooked phone; contact phone; 404 tablet.
- Keyboard: skip link receives first Tab and moves focus to main. CLLCTVE sitemap opens with Enter; focus moves to Close; Tab and Shift+Tab stay inside; Escape closes and restores the opener. Verified again on the built site. [Keyboard evidence](evidence/improved-keyboard-check.json).
- Mobile chapter disclosure opens and its Interface link lands about 96 CSS pixels below the viewport top. Staybooked showed no document-wide overflow at 390 px.
- Copy-email click completed and announced success. The browser clipboard read API did not expose a value, so actual clipboard contents were not independently verified. Failure feedback is implemented but clipboard-denial behavior was not simulated. No email was sent.
- Missing normal and project URLs show the helpful 404 interface. 404 → Work navigation restores the Work title/canonical and `index, follow`.
- Resume date extraction reconciled Doggy Date against both PDFs without modifying either. [Source receipt](evidence/doggy-date-source-check.txt).

### Screenshots

- [Home — desktop](evidence/improved-home-desktop.png)
- [Home — tablet](evidence/improved-home-tablet.png)
- [Home — phone](evidence/improved-home-mobile.png)
- [Work — phone](evidence/improved-work-mobile.png)
- [Litmus — desktop](evidence/improved-litmus-desktop.png)
- [Mobile chapters](evidence/improved-mobile-chapters.png)
- [Contact — phone](evidence/improved-contact-mobile.png)
- [404 page](evidence/improved-404.png)

## Remaining work and information needed

1. **Release and preview refresh:** production deployment still requires explicit authorization. After release, rerun the raw-route/resource checks on the live origin and refresh the affected sharing service. Its identity is still unknown. A correct origin response and a stale external preview are separate checks.
2. **Staybooked result evidence:** obtain a real populated result example or captioned walkthrough showing input, output, explanation, and host action. Do not fabricate a result or imply that the empty upload screen proves the full workflow. The current version note is a bridge until the case and live product are documented together.
3. **Measurement sources:** CLLCTVE still needs the retention cohort/time window and supporting analytics; Tech Noir needs sample size/method. Labels are now qualified. User studies and outcome validation require actual participants/data.
4. **Performance/accessibility coverage:** no Lighthouse, CrUX, LCP, INP, CLS, throttled speed comparison, full axe audit, screen-reader session, or physical-device/Safari test was run. Automated DOM checks and manual keyboard tests do not establish WCAG conformance. Existing reduced-motion branches remain in source; this pass did not emulate the operating-system preference.
5. **Later strategic work:** an approved healthcare case, project-specific social cards, full HTML body prerendering, and preferred-host redirect configuration remain separate work. The current build generates head metadata, not case-study body HTML for JavaScript-free readers. Preferred-host changes need the actual host/domain configuration verified first.

## Local developer handoff

```sh
npm run build
netlify dev --dir dist --framework '#static' --offline --no-open --skip-gitignore --port 8888
# In another terminal:
node scripts/verify-portfolio.mjs
```

`optimize-portfolio-images.mjs` and `export-brand-icons.mjs` accept `SHARP_MODULE` for an installed Sharp module. No additional project dependency was installed. Preserve the user's existing untracked resume and `swap.bundle`. Netlify's temporary generated `deno.lock` was removed from this change set.

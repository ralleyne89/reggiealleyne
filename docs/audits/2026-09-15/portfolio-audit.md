# Reggie Alleyne portfolio audit

**Reviewed:** September 15, 2026. **Website:** https://reggiealleyne.com. **Source baseline:** commit `b43267a`, plus the existing working directory. **Status:** audit complete; branding and metadata corrections implemented and verified locally. Nothing deployed or pushed.

**Implementation follow-up:** [Local improvements and verification](improvements.md). The audit below preserves the original live-site findings.

## 1. Executive summary and overall grade

### What the site communicates today

| Visitor question | Explicitly communicated | Interpretation or uncertainty |
|---|---|---|
| Who are you? | Reggie Alleyne. The document title calls you a UX/UI Designer & Frontend Developer. About and the footer say UX/UI Designer & AI Technologist. | The titles describe related strengths, but do not establish one clear professional position. |
| What do you do? | The homepage says, “I design AI products people can question — and build them in React.” Work presents product decisions; About describes research, healthcare work, design systems, and implementation. | Your differentiator appears to be design judgment that continues into working software. A visitor must connect that story across pages. |
| Who do you serve? | About names product teams, AI products, platform tools, healthcare, education, and entertainment. `/services` targets service businesses. Contact says Los Angeles and remote collaboration worldwide. | Hiring managers and product leads appear to be the main audience because About says you want to join a team. That is my reading, not a confirmed business priority. Consulting is a second, less visible journey. |
| What should visitors do next? | “View work” and “Resume” lead the homepage. Contact offers an email address, resume, GitHub, and LinkedIn. | The work-first path is clear. The contact copy mainly sounds like freelance project intake, while About describes employment interest. |

**Overall: C, 73/100.** The grade assesses the **live site before the local fixes**. It reflects expert judgment. It does not measure loading speed or conversion.

The site already has a recognizable identity, substantial project material, and useful honesty about evidence. Preserve those strengths. Make your professional level clearer and show actual product states sooner. Fix keyboard access and make page metadata work for sharing services.

The navigation and footer use the stylized RA mark with stars. The live Apple/app icons use the older circular RA mark. You confirmed that the stylized mark is current. The live Open Graph image already shows the current visual identity. We still need the affected sharing service to trace the reported outdated preview.

### Design review frame

The existing aesthetic is a white Figma-inspired canvas with black/purple typography, a large digital portrait, floating controls, and editorial work rows. My review uses **DESIGN_VARIANCE 7, MOTION_INTENSITY 3, VISUAL_DENSITY 4** as a recommendation: keep the distinctive identity, reduce delays and decorative competition, and give the work more room. These are design judgments, not accessibility requirements. No visual redesign was implemented in this audit.

## 2. Category scorecard

Grades: **A 90–100**, **B 80–89**, **C 70–79**, **D 60–69**, **F below 60**. A means the observed experience supports the visitor task with few meaningful issues; lower scores reflect the severity and breadth of observed friction. Each row states what was assessed. These are expert rubric scores, not statistically measured user ratings.

| Category and criteria | Grade | Weight | Evidence supporting the grade | Most important improvement |
|---|---:|---:|---|---|
| Visual design and brand: hierarchy, consistency, useful imagery | **B / 82** | 12% | Distinctive hero and consistent purple/black language; restrained About layout. Decorative cover imagery dominates CLLCTVE/Litmus, and app icons use a different mark. | Give actual product screens priority over decorative covers. |
| Navigation and information architecture: find work, understand labels, move forward/back | **B / 80** | 10% | Five clear primary links, Back to Work links, chapter controls, next-case links. Services is public but absent from primary/footer navigation. Work changes familiar project names into generic labels. | Use consistent project names and make the employment/consulting paths deliberate. |
| Responsive experience: sampled layout, legibility, usable controls | **B / 80** | 10% | Sampled widths had no document-wide horizontal overflow. Mobile navigation targets measured about 70×48 CSS pixels. The tablet hero crops the name heavily; mobile screens devote substantial space to the hero before work. | Recompose the tablet hero and bring a work teaser closer to the first screen. |
| Accessibility: keyboard, landmarks, image descriptions, contrast diagnostics | **D / 62** | 15% | Named navigation links, visible keyboard focus, and detailed artifact descriptions are good. The tested lightbox has no dialog role, focus management, or Escape dismissal; Home/About/CLLCTVE lack a main landmark. Work-title fill contrast is about 2.2:1. | Replace the lightbox with an accessible dialog, then fix landmarks and faint text. |
| Messaging and positioning: clarity, relevance, consistency | **C / 74** | 12% | The AI transparency position is distinctive. Principal UX/UI experience at Blue Shield appears on About but is absent from the homepage pitch. Footer/title/contact language point in different directions. | State the professional role and audience before the AI philosophy. |
| Projects and credibility: role, decision, evidence, outcome, reflection | **C / 76** | 18% | Clear ownership, useful tradeoffs, and honest research limitations. CLLCTVE metrics lack a defined retention period; repeated archive caveats crowd the story; StayBooked’s empty upload screenshot does not demonstrate its caption. | Show one consequential decision with a populated interface and traceable evidence. |
| Calls to action and contact: discoverability, expectations, effort | **B / 80** | 10% | Visible work/resume actions and a successful mobile contact jump; readable email and a valid PDF response. Contact is email-only and project-focused; case endings favor another project over a conversation. | Add an explicit hiring/project invitation and a copy-email fallback. |
| Technical functionality: sampled navigation, resources, destinations, error behavior | **C / 74** | 5% | Reviewed routes render; PDF and 11 demo destinations returned HTTP 200 after redirects. A deliberately nonexistent route returns homepage HTML with status 200. | Return a useful 404 response for unknown routes and label gated/rebuilt demos clearly. |
| SEO, metadata, social previews: raw HTML, page identity, icons, discovery | **F / 48** | 8% | Basic title/description/OG/Twitter/canonical/schema exist. Raw project HTML is identical to homepage HTML; About/Work/Playground retain homepage identity in the browser; robots/sitemap return 404; app icons are outdated. | Serve route-specific metadata before JavaScript and publish consistent icon assets. |
| Loading performance: real or controlled loading/interaction measurements | **Not verified** | Excluded | The available browser API does not expose performance timing. No Lighthouse, CrUX, controlled throttling, LCP, INP, or CLS result was obtained. | Measure first, then optimize the confirmed large assets and scripted loading delay. |

Calculation: `(82×12 + 80×10 + 80×10 + 62×15 + 74×12 + 76×18 + 80×10 + 74×5 + 48×8) / 100 = 73.24`, rounded to **73**. Loading speed is excluded; the technical score covers only the functional checks listed. No unavailable speed score is implied.

## 3. Detailed findings with evidence

Labels: **Verified** means observed in the live page, raw response, or source. **Judgment** means an expert recommendation. **Unverified** means the evidence does not establish a result.

### F01. Preserve the identity; let the product work carry more weight

**Verified:** The [desktop homepage](evidence/home-desktop.png) uses a large portrait, oversized name, floating Design/Code/Prototype controls, a component palette, and a custom cursor. The hero CTA is readable and visible at 1440×900 and 390×844. [Mobile evidence](evidence/home-mobile.png).

**Judgment:** This is memorable, but it spends more space establishing visual personality than professional fit. Keep the portrait/name/purple system. Reduce the floating panels and cursor-label competition. Add a visible role line and a short experience proof point. Do not replace this with a generic hero-card-grid.

**Verified:** At [768×1024](evidence/home-tablet.png), the name extends beyond both sides of the viewport. The document itself does not overflow horizontally. **Judgment:** Keep intentional cropping for large desktop typography if desired, but make the name fully readable on tablet and reduce the panel over the portrait.

### F02. Your most credible professional context is on About

**Verified:** [About](https://reggiealleyne.com/about) lists Principal UX/UI Designer at Blue Shield of California, April 2022–July 2025, with regulated healthcare work and cross-functional partners. The homepage instead leads entirely with AI products and React. [About screenshot](evidence/about-desktop.png).

**Judgment:** Bring that experience forward without implying independent verification of the employment claim. It explains why you are equipped to design interfaces where trust matters. A hiring manager should not need to read the entire About page to see your level of responsibility.

**Verified:** About says “10+ years,” while its visible timeline begins November 2016. As of the audit date, that displayed timeline alone covers slightly less than ten years. This does not prove the claim is false; earlier experience may be missing. Reconcile the timeline or use “designing digital products since 2016” until the earlier period is documented.

### F03. Navigation is clear, but naming and audience paths need alignment

**Verified:** Home/Work call the first project “Gen Z Portfolio Platform”; the destination is “CLLCTVE Platform.” “AI Literacy Platform” becomes the much longer “Litmus AI - AI Literacy Testing & Certification Platform.” Work and Playground are sensibly separated. Back links and chapter buttons provide useful orientation.

**Judgment:** Use “CLLCTVE — Creator portfolio platform” and “Litmus AI — AI literacy assessment” consistently in cards, case headings, page titles, and resume references. The brand name gives the reviewer a memory anchor; the descriptor explains the product.

**Verified:** `/services` is a public page about growth websites, booking flows, CRM, and follow-up for service businesses. It is absent from the primary and footer navigation captured on the main pages. **Judgment:** Keep hiring as the main journey if that is the priority, and add a secondary “For consulting projects” link to Services from Contact. If consulting is the main business goal, revisit the homepage hierarchy before adding another primary tab.

### F04. Mobile works, but the long pages lose chapter navigation

**Verified:** Home, Work, About, Playground, contact, Litmus, and CLLCTVE were sampled at 390×844. Home, Work, and CLLCTVE were also sampled at 768×1024. The measured document widths matched the sampled viewport widths. That is a horizontal-overflow check, not proof that every element is ideally composed.

The mobile bottom navigation remains labeled, with approximately 70×48-pixel links. Body text wraps well on About. The Litmus title takes several lines but fits. [Litmus mobile](evidence/litmus-mobile.png), [Work mobile](evidence/work-mobile.png), [CLLCTVE tablet](evidence/cllctve-tablet.png).

**Verified:** The desktop case-study chapter controls are not visible in the sampled mobile layout. **Judgment:** Add a compact “On this page” disclosure near project details. Use ordinary anchors to Results/Decisions/Interface. Keep it separate from the global bottom navigation.

### F05. The image lightbox fails a basic keyboard journey

**Verified on CLLCTVE:** Enter opened the sitemap image. Focus stayed on the underlying image button. No `role="dialog"` appeared. Escape left the overlay open. Tab moved to the next underlying artifact button. [Screenshot](evidence/lightbox-keyboard.png). Source: `src/components/project/EditorialProjectLayout.tsx`, `ProjectLightboxModal`.

This affects someone trying to inspect your strongest evidence with a keyboard. Replace the custom presentation overlay with the existing Radix dialog primitives. Use a named dialog, move focus inside, constrain Tab, close on Escape, restore focus to the trigger, and keep a visible 44-pixel close target. Validate each behavior on both an artifact and a final-interface image. Using Radix alone is not a substitute for testing focus restoration from the external trigger.

### F06. Add main landmarks and improve the faint Work titles

**Verified:** DOM queries found zero `main` elements on Home, About, and CLLCTVE; Work and Playground have one. The homepage has no skip link. The existing navbar focus ring is visible and uses an accessible name on the logo link. [Keyboard focus evidence](evidence/work-keyboard-focus.png).

Add one `<main id="main-content" tabIndex={-1}>` around each page’s substantive content, leaving global navigation and footer outside it. Add a first-focus “Skip to content” link. Avoid nesting another `main` around Work/Playground, which already contain one.

**Verified diagnostic:** Work title fill is `oklch(0.19 0.024 268 / 0.34)` over a white ancestor. Converted to sRGB and composited over white, the fill is approximately RGB 173/175/179, giving **2.20:1**. The titles also have a text stroke; this calculation covers the fill, not a full outline/anti-aliasing conformance assessment. [Calculation](evidence/work-title-contrast.json), [desktop screenshot](evidence/work-desktop.png).

Use solid dark text in the normal state and keep purple as the hover/focus change. Recheck contrast in all states. Large text generally needs 3:1; normal text needs 4.5:1 under WCAG AA. The sampled fill falls below either threshold, but the full rendered text treatment needs final assessment.

**Preserve:** Empty alternative text on decorative logos/cover images is not automatically an error when the surrounding link is named. The portrait has “Digital portrait of Reggie Alleyne”; the process maps have detailed descriptions. Consider hiding purely decorative prism/code-cube illustrations from assistive technology to reduce repetitive announcements. No contact form exists in the reviewed contact section, so form labels and submission errors are not applicable there.

### F07. Show interface evidence before repeated process prose

**Verified:** CLLCTVE and Litmus lead with large cover illustrations, then thesis/details, problem/evidence sections, six process steps, artifacts, and finally interface evidence. The repeated stages use decorative research prisms, branching nodes, interface blocks, and code cubes. [CLLCTVE cover](evidence/cllctve-desktop.png), [Litmus cover](evidence/litmus-desktop.png).

**Judgment:** Move one annotated real interface directly after a short project summary. Pair each important decision with the screen/state it changed. Keep the detailed sitemap and process material available further down. A reviewer should see an interaction you designed before reading several explanations of your process.

CLLCTVE already distinguishes a “rebuilt creator profile study” from a historical production capture. Preserve that label and apply the same distinction to any reconstructed cover or demo. The live CLLCTVE demo has an active waitlist presentation despite the case study explaining that the company closed; label the outbound link “View reconstructed demo” if that is its verified status.

### F08. Keep the evidence boundaries, but shorten and substantiate them

**Verified:** CLLCTVE labels 500+ creators, 15 partnerships, and 85% retention as reported in the resume. It does not define the retention period, cohort, denominator, or measurement source beyond that reference. Litmus explicitly says its five-minute duration is a design target, not a measured outcome. StayBooked says no host interviews or external usability sessions are documented. These distinctions are valuable.

**Judgment:** Replace repeated “available archive” explanations with one concise evidence note per project. Use the saved space for a tradeoff, rejected option, actual feedback, or outcome definition. Do not invent missing research. If retention cannot be defined, use “85% retention reported in my resume; original measurement details are unavailable” rather than implying that the case study independently demonstrates it.

**Verified copy inconsistencies:**

- Tutor D’s hero describes connecting students with qualified tutors, while its problem/decision sections describe SMS learning for students without reliable internet. Replace the hero with the actual SMS dashboard story.
- Doggy Date’s case page says 2016; About dates the work April–July 2017. Reconcile against the original record.
- Covelo says “solo client MVP” but the generic audience section says the archive lacks enough collaborator detail to attribute decisions. Clarify ownership once rather than letting a shared template undermine it.
- Tech Noir reports “75% of testers” without participant count or method in the reviewed framing. ScentStack’s “90% average savings” also needs a comparison basis/date or qualification. These are requests for evidence, not findings that the numbers are false.

### F09. StayBooked’s pictured state does not demonstrate its caption

**Verified:** The first “Room optimizer flow” screenshot shows an empty upload area and controls. Its caption says suggestions are attached to photos and audit cues explain flags. Those outputs are not visible in that pictured state. [Evidence](evidence/staybooked-interface-desktop.png).

Add a clearly labeled example with an input photo or listing, the specific flag, its explanation, and accept/edit/reject actions. Use synthetic/example property data where appropriate and label it. The linked live homepage now emphasizes title/description scan and rewrite; the portfolio still emphasizes room optimization. Clarify the product version or update the case story and screenshots together.

### F10. Make contact fit both relevant visitor types

**Verified:** The mobile Contact navigation moved from About to the homepage contact section; its top was about 88 pixels below the viewport top. The email address is visible. The linked AI Product Designer resume returned **200, application/pdf, 105,005 bytes**. No email was sent, and no form was submitted. [Contact screenshot](evidence/contact-mobile.png).

**Judgment:** “Email me with the project, the goal…” is useful for consulting but gives recruiters less guidance. Add role/team language. Keep the visible address because `mailto:` depends on a configured email application; add “Copy email” as a fallback. Rename the generic “Download” to “Download resume.” At the end of each flagship case, add “Discuss a role or project” beside the next-case link.

### F11. There are confirmed payload opportunities, but no speed score

HTTP retrieval confirmed these resource body sizes (decimal units, not total page-transfer measurements):

| Resource | Retrieved body size |
|---|---:|
| Homepage portrait PNG | 1,476,367 bytes, about 1.48 MB |
| Homepage name/wordmark PNG | 340,298 bytes, about 340 KB |
| StayBooked featured-card PNG | 1,392,435 bytes, about 1.39 MB |
| Five startup JavaScript files referenced/preloaded in raw homepage HTML | 607,799 bytes total |
| Main CSS | 202,252 bytes |
| Current social JPEG | 69,729 bytes, 1200×630 |

[Resource record](evidence/resource-and-destination-checks.json). These are individual uncompressed/retrieved bodies, not Core Web Vitals or a complete network waterfall. Fonts, dynamically loaded modules, caching, and compression affect actual loading.

**Verified source:** `HomeLoader.tsx` has a 1,100 ms progress animation, 400 ms exit, and 1,600 ms hard finish. This is programmed presentation timing, not measured network progress. Reduced-motion bypass and session-only behavior exist in source; reduced-motion behavior was not emulated end-to-end.

**Recommendations:** Export appropriately sized WebP/AVIF variants of the portrait and large covers; use `srcset`/`sizes`; preserve the portrait’s alpha channel where needed; remove the artificial progress gate; then measure mobile Lighthouse and real-user LCP/INP/CLS. Treat 2.5 s LCP, 200 ms INP, and 0.1 CLS as targets, not reported results.

### F12. Fix error routing and make demo expectations explicit

**Verified:** `/audit-missing-page-20260915` returned status **200** with homepage HTML. The React catch-all navigates to `/`. This is a soft-404 pattern: the URL is missing, but the server reports success. Show a real “Page not found” page and return 404 through the active host while preserving valid client routes.

HTTP redirected to HTTPS. `https://www.reggiealleyne.com/` remained on the www hostname and served the page; an apex canonical exists. A preferred-host redirect would make this cleaner, but the canonical already provides a consolidation signal. Neither observation proves an indexing problem.

All 11 linked demo URLs checked returned 200 after redirects. Covelo redirected to `/login`; that is an access gate, not a broken link. The three flagship demo landing pages were also inspected in the browser. Full product workflows, authentication, payment, and backend actions were not tested. Offer a clear demo-access explanation or a captioned walkthrough where a reviewer cannot enter the product.

## 4. Prioritized improvement roadmap

Priority **P1** means address first because it directly affects credibility, access, or sharing. **P2** means the next improvement cycle. **P3** means useful strategic development. Effort is an estimate for one developer/designer with current source access, excluding approval waits and recruiting study participants. Expected impact is qualitative; no conversion uplift is claimed.

### The five changes to make first

1. **Review and deploy the prepared branding/metadata correction through the actual hosting workflow.** High impact; source work completed locally, approximately 1–2 hours for release checks and preview refresh after approval.
2. **Repair keyboard access, main landmarks, and faint Work titles.** High impact; about 0.5–1 day including browser verification.
3. **Rewrite the homepage role/value line and contact invitation.** High impact; about 2–4 hours. Bring healthcare/product-team experience into the first screen.
4. **Rework the first screenful of each flagship case study around actual interface evidence.** High impact; about 1–2 days per case if source material is ready. Fix the StayBooked screenshot/caption mismatch and define CLLCTVE metrics.
5. **Remove the artificial loading gate and resize/encode the largest hero/cover images, then measure.** Medium-to-high expected impact; about 0.5–1 day. Do not claim a speed gain until a controlled comparison is run.

### Quick wins

| Issue/location | Specific change | Priority / impact | Effort |
|---|---|---|---|
| Old app icons and generic metadata, F13 below | Ship the reviewed local patch; verify raw HTML and icon responses on the active host. | P1 / High | Local work done; release checks 1–2 h |
| Hero and footer, F02 | Use one professional title and one short proof line. | P1 / High | 2–4 h |
| Work titles, F06 | Replace translucent normal-state fill with solid dark text; preserve hover/focus styling. | P1 / High for readability | 1–2 h |
| Contact, F10 | Include roles and projects; label resume actions explicitly; add copy-email feedback. | P1 / Medium | 2–4 h |
| Tutor D, Doggy Date, Covelo, F08 | Reconcile the description, year, and ownership statements with project records. | P1 / High for credibility | 2–4 h once records are available |
| Services discoverability, F03 | Add a secondary consulting link from Contact if both audiences remain relevant. | P2 / Medium | 1–2 h |

### Medium-effort improvements

| Issue/location | Specific change | Priority / impact | Effort |
|---|---|---|---|
| Lightboxes, F05 | Radix dialog with title, focus entry/trap/return, Escape, and visible close control. | P1 / High | 3–6 h |
| Home/About/project structure, F06 | One main landmark per page; first-focus skip link; test tab order. | P1 / High | 2–4 h |
| Case-study openings, F07/F09 | Short overview plus one populated, annotated product state before long process prose. | P1 / High | 1–2 d per flagship |
| Large assets and loader, F11 | Responsive image exports and source sets; remove the timed gate; compare mobile measurements. | P1 / Medium–High | 0.5–1 d |
| Mobile/tablet, F01/F04 | Keep tablet name readable, shorten hero, add mobile chapter disclosure. | P2 / Medium | 0.5–1 d |
| Demo/404/hostname paths, F12 | Explain access and reconstructed demos; serve real 404s; configure preferred hostname on the verified host. | P2 / Medium | 0.5–1 d |
| Social-card design, F13 | Replace the screenshot with a composed 1200×630 card; give flagship cases their own cards and dimensions. | P2 / Medium | 0.5–1 d |

### Larger strategic changes

| Opportunity | Specific change | Priority / impact | Effort |
|---|---|---|---|
| Hiring credibility | Add a publishable healthcare case or an anonymized account of an actual design decision, constraints, collaboration, and outcome. Respect confidentiality; do not imply a fictional concept was client production work. | P2 / High | 3–5 d with approved material |
| Evidence depth | Run focused studies for Litmus/StayBooked, record sample/tasks/results/limitations, and replace hypotheses with findings only where supported. | P2 / High | 1–2 weeks plus recruitment |
| Search resilience | Prerender or server-render the substantive case-study content, not just the head tags. Retain interactive enhancement. | P2 / Medium–High | 2–4 d after architecture review |
| Conversion learning | Establish a privacy-conscious baseline for case views, resume clicks, and contact clicks. Distinguish recruiter inquiries from consulting leads in actual correspondence. | P3 / Medium | 1–2 d setup, then observation |

### Suggested copy

These are proposals, not published edits. Confirm any employment/availability wording before use.

**Homepage role:** “UX/UI designer and frontend developer”

**Headline:** “I turn complex workflows into clear, usable products.”

**Supporting line:** “From healthcare platforms to AI tools, I connect research, interface design, and working React prototypes.”

**Optional proof line, based on About’s existing claim:** “Previously Principal UX/UI Designer at Blue Shield of California.”

**Actions:** “Explore selected work” · “View resume”

Keep “AI products people can question” as a supporting specialty statement, linked to a case that demonstrates uncertainty, explanation, and user control.

**Contact:** “Have a role or project in mind? Email me about the team, the problem, and where you need design help.”

**Tutor D summary:** “An educator dashboard for sending assignments by SMS and tracking progress when students lack reliable internet.”

**StayBooked evidence caption, for the screenshot currently shown:** “Room setup and upload state. Hosts add property details and a room photo before requesting optimization.” Add a separate result screenshot before claiming the visible example demonstrates recommendations or audit cues.

**Case-study opening structure:** Project/client and status → user problem → role/team/timeframe → key decision → one actual interface → outcome and evidence limits → deeper process. Keep the exact source/status beside rebuilt artifacts.

## 5. Logo and metadata diagnosis, local changes, and verification

### F13. Findings across all relevant references

| Surface | Live finding | Diagnosis / local correction |
|---|---|---|
| Navigation/footer | `/images/RA_logo_white.png` and `/images/RA_logo_black.png` show the stylized RA with stars. | You explicitly confirmed this as current. Existing navigation/footer artwork was preserved. |
| Open Graph and Twitter | Both use `/images/reggie-alleyne-portfolio-og.jpg`, a 1200×630, 69,729-byte screenshot of the homepage. | It already contains the current mark. It is visually busy and includes navigation, buttons, and a scrollbar. Copied unchanged to a versioned URL for cache separation; a cleaner redesign is proposed separately. |
| Favicon/shortcut | `/images/RA_logo_black.png`, 657×680, 127,579 bytes. | Current artwork, but an oversized non-square source. Replaced references with square 16/32/48 exports on a white background. |
| Apple touch | `/icons/icon-192.png` contains the circular RA mark. | Confirmed old artwork. Now references a dedicated 180×180 export of the approved mark. |
| Manifest | Both 192 and 512 icons contain the circular mark, each declared `any maskable`. | Now separate regular 192/512 icons and a 512 maskable icon. The maskable export has extra space so launcher crops do not remove the artwork. |
| Structured data | One `Person` object; no separate `logo` property found. Its `image` used the social screenshot. | Updated `Person.image` to the existing digital portrait. No invented Organization or logo schema was added. |
| Service worker | `reggiealleyne-pwa-v3` precaches old icons and uses cache-first handling for image/icon requests. | New `v4-20260915` namespace and new icon paths. This addresses returning-browser caches after the worker updates, not social-platform caches. |
| Raw page HTML | Work/About/Playground and all three tested flagship project URLs originally returned the same 4,491-byte homepage shell. | Build now emits page-specific title, description, canonical, OG, and Twitter title/description for all 20 known routes. |
| Browser-only metadata | Project effects change metadata after JavaScript; ordinary pages retained homepage identity. | Added shared core-page metadata and a navigation hook. Project titles and canonicals remain project-specific. |
| Discovery/error responses | `/robots.txt` and `/sitemap.xml` returned 404. An unknown route returned 200 homepage HTML. | Build now emits robots and a 16-URL sitemap matching visible navigation/project curation. Error routing remains a separate recommendation. |
| Implicit fallback icons | Audit requests to `/favicon.ico` and `/apple-touch-icon.png` returned 403. | Their content is unverified. Explicitly referenced icon assets returned 200, so these fallback responses are not evidence that the active favicon is broken. |

The downloaded social image, favicon source, manifest, and both old app icons were byte-for-byte identical to the local files. See [HTTP checks](evidence/http-checks.json). This establishes what the live origin served during the audit; it does not establish what a third-party preview cache currently stores.

### Exact local changes

- `index.html`: versioned OG/Twitter image URLs, explicit 16/32/48 favicon links, 180 Apple icon, and portrait in `Person.image`.
- `public/manifest.webmanifest`: current regular 192/512 icons and a separate maskable 512 icon.
- `public/sw.js`: cache namespace and precache paths updated.
- `public/icons/ra-stars-*-20260915.png`: seven deterministic exports from the exact approved source. No redraw or new logo concept.
- `public/images/reggie-alleyne-portfolio-og-20260915.jpg`: byte-identical copy of the current social card. Its visual composition has not been redesigned.
- `scripts/export-brand-icons.mjs`: repeatable export script using Sharp; accepts `SHARP_MODULE` for an installed copy. The bundled local Sharp was used; no project dependency was installed.
- `src/lib/pageMetadata.ts` and `src/hooks/usePageMetadata.ts`: shared core-page metadata and client navigation updates.
- `src/pages/{Index,Works,About,Playground,Services}.tsx`: call the metadata hook.
- `src/pages/Project.tsx`: use the versioned share URL and consistent alt text.
- `build/routeMetadata.ts` and `vite.config.ts`: generate crawler-readable route heads, clean-URL `.html` files plus directory `index.html` equivalents, robots, and sitemap. The canonical remains the extensionless URL.
- `src/lib/projectRoutes.ts`: type-only import changed to a relative path so the build-side TypeScript check can resolve it.

Old circular asset files remain as unreferenced legacy files; active source metadata and the manifest point to the approved mark. No commit, push, CMS publication, or deployment was performed. Existing untracked resume and bundle files were left alone.

### Verification completed

- Production build passed.
- TypeScript checks passed for application and build configuration.
- Targeted ESLint checks passed for changed TypeScript files.
- JavaScript syntax checks passed for the worker and export script.
- Actual local HTTP requests, using a social-crawler user agent and **without executing JavaScript**, verified 20 unique route titles, correct canonical/OG URLs, and the versioned social image.
- PNG headers verified declared dimensions; manifest purposes and 16-URL sitemap XML were checked.
- Local browser navigation About → Work and project → About retained the correct page identity.
- Exported 32/192/maskable icons were visually inspected. The small favicon preserves the exact mark, although its fine stars are naturally less distinct at tiny sizes.

[Machine-readable verification](evidence/local-metadata-verification.json).

**Scope limit:** This change renders head tags at build time. It does not prerender the body. Unknown or future CMS-only projects need inclusion in the build-time route catalog or a server-rendering strategy. All case studies still share the existing social artwork; project-specific cards remain proposed.

### How to release and validate later

The repository contains `netlify.toml`, but production responses show Cloudflare and do not prove the active origin host. Confirm the actual release pipeline. Publish the complete built `dist` through that host’s supported workflow only after explicit production authorization. Ensure existing files and extensionless HTML resolution take precedence over the SPA fallback. Do not assume editing Netlify configuration changes a different active host.

After an approved deployment:

1. Fetch `/`, `/about`, `/work`, and a flagship project with a raw HTTP client. Confirm the tags are present before JavaScript. Use the exact extensionless URL visitors share.
2. Fetch every new OG/icon URL. Confirm 200, the correct image MIME type, and the expected artwork/dimensions. A 200 HTML fallback is not a successful image response.
3. Check `/manifest.webmanifest`, `/robots.txt`, and `/sitemap.xml`. Verify the manifest points to the new assets and the live worker has the new cache version.
4. In a fresh browser, inspect the tab icon and source tags. In a returning browser, allow the service worker to update and reload. Installed home-screen icons may require removal and re-addition depending on the OS.
5. Use the affected service’s supported preview refresh tool. For Facebook, use Sharing Debugger; for LinkedIn, Post Inspector. Other services may refresh on their own schedule and may cache existing messages separately.
6. Distinguish origin success from external-cache state: if raw HTML and a fresh asset fetch show the new version but the service shows an old preview, the remaining issue is at that service or its fetch/access path. A query-string experiment can help diagnose cache keys; keep the canonical URL stable.

Example checks after deployment:

```sh
curl -fsS -A 'facebookexternalhit/1.1' https://reggiealleyne.com/project/litmus-ai
curl -I https://reggiealleyne.com/images/reggie-alleyne-portfolio-og-20260915.jpg
curl -fsS https://reggiealleyne.com/manifest.webmanifest
curl -fsS https://reggiealleyne.com/sitemap.xml
```

Do not interpret a successful rebuild, a changed browser tab title, or a cache-refresh request as proof that production and every external preview have updated.

## 6. Remaining limitations and information needed

### Coverage receipt

**Public page structure/content reviewed:** Home, Work, About, Playground, Services, and all 15 predefined project routes: CLLCTVE, Litmus AI, StayBooked, Covelo, SymptomCheckr, Vault.js Validate, Pretty Paws, Tutor D, WRISTBAND, ScentStack, Chill Vibes, Bob’s Big Break, Tech Noir, Doggy Date, and Improv Learning. The three legacy projects and Services were discovered through source routes rather than primary navigation. The deepest narrative and visual review focused on the three flagship projects; the remaining projects received structure, opening-story, ownership/evidence, and link inspection.

**Visual samples:** Desktop 1440×900 for Home, Work, About, and flagship case studies, with additional screenshot records for Covelo and Services. An initial homepage view was 1280×720. Phone 390×844 for Home, Work, About, Playground, Contact, Litmus, and CLLCTVE. Tablet 768×1024 for Home, Work, and CLLCTVE. Screenshots are viewport samples unless identified as a full-page capture. Animations were allowed to settle for the screenshots used as primary findings; the CLLCTVE result counter capture may show intermediate animated numbers and is not used as metric evidence.

**Tests:** public browser navigation, raw HTML/headers, image/manifest comparisons, sampled document widths and control dimensions, DOM landmarks and alt descriptions, manual keyboard lightbox/focus test, calculated Work-title fill contrast, resume MIME/status check, 11 demo HTTP checks, three flagship demo landing-page inspections, local build/type/lint and raw metadata verification.

**Not verified:** Lighthouse, field Core Web Vitals, full contrast coverage, automated accessibility scanning, screen-reader announcement quality, reduced-motion emulation, 200%/400% zoom, physical iOS/Android behavior, Safari/Firefox, every image/link in every route, authenticated demo workflows, email delivery, search indexing/rankings, Search Console, analytics/conversion, third-party cached previews, or production behavior of this local patch. No form or account was submitted. HTTP 200 is not treated as proof of full demo functionality.

**Still needed:** the specific service and exact URL where the outdated preview appeared; confirmation of the actual production hosting/release path; source details for retention/testing/savings claims; clarification of hiring versus consulting priority if both remain important. The correct logo itself is now confirmed.

### Source and skill receipt

Sources consulted on **September 15, 2026**: the live portfolio and linked public demo landing pages; public HTTP responses/assets; the local repository, including `index.html`, manifest, service worker, routing, project data, hero/loader, Work styles, and lightbox implementation; Git’s January 21, 2026 “Update site logos and favicon” commit; and your explicit confirmation of the current logo in this conversation. Methods were direct inspection, screenshots, DOM/keyboard checks, raw requests, byte comparisons, and local build validation. No competitor study or external analytics dataset was used or claimed.

Skills used: Auto Skill Router for scope; Taste Skill as the single design-review authority; Humanizer for the audit and proposed copy; Headroom for bounded source/tool reading. The available computer-use browser API supplied in-app verification because the preferred Browser Use entry point was not exposed. No multi-agent work was used.

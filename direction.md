# Direction: reggiealleyne.com, pass 2 (Nov 2026)

**One line:** the portfolio is a design file you can walk into. The Figma-style canvas in the hero stops being a flat picture and becomes the space the whole site moves through: design, then code, then shipped product.

This file supersedes the Art direction, Typography and Motion sections of `DESIGN.md`, which describe an older build (Poppins, "quiet" motion). Colour tokens and the evidence rules in `DESIGN.md` and `PRODUCT.md` still hold.

## Brief
- Profile: portfolio / showpiece. Wow wins a conflict, usability and reduced-motion rules still hold. Lighthouse mobile floor 70 with the scene on.
- Primary action: open a case study, then contact or resume.
- Audience: recruiters and hiring managers, often arriving on a phone from a shared link.
- Platform: Vite + React + Tailwind, GSAP + ScrollTrigger + Lenis already installed, framer-motion for component state.
- Assets on hand: strong real product screenshots, the 3D portrait, the RA logo. No authored 3D models.
- Scope (Reggie, Nov 11): keep the hero, rebuild the home page below it and the case-study template.

## Concept seed
Three things only this portfolio has: the Figma canvas with its selection frames and layer panels (already the hero), the RA mark with its comet streaks, and the claim "I design AI products people can question, and build them in React". Seed chosen: **the canvas**. Selection frames, layer panels and the multiplayer cursor are the recurring objects. They frame real product screens everywhere a generic card or icon sits today.

## References
| Reference | Source | What it lends |
|---|---|---|
| Jesper Landberg portfolio (SOTD Sep 29, 2026), watched live | Awwwards | **Primary.** Projects are curved screens with live video inside, standing in one WebGL space over a perspective grid floor; scroll slides the row and the screens flex with speed; one canvas, HTML labels in the corners, near-black ground. Lends: work shown as real screens in depth, the grid floor, velocity flex. |
| Olha Lazarieva portfolio (Portfolio winners list), home and one case study watched live | Awwwards | Kinetic type: headlines set on curved paths that bend with scroll, a statement whose words scatter as it leaves, numbered sections (2/5), condensed display with mono labels. Case study: 232 words and 19 media in about 9,500px; one meta row, two short paragraphs, then full-bleed screens on a ground coloured from the project, with the project name drifting behind them. |
| Corentin Bernadou portfolio (2026) | Codrops / Abduzeedo write-ups, not watched | Secondary. A design tool's rulers and grid used as interface furniture. |
| Cloudstudio, "Selected work" | Mobbin | Home lead work: full-bleed project tiles, index numeral, big title, one number per tile, no card chrome. |
| Jasper customer story header | Mobbin | Case-study opening: title beside one large image, then a single row of large figures under a hairline. |
| FLORA, "01 Ideate / 02 Iterate / 03 Scale" | Mobbin | Process section: numbered steps where each tile holds live product UI, replacing the stock 3D icons. |
| Glide customer story | Mobbin | Product-shot framing: a phone or window straddling a colour block, two stat tiles beside it. |
| Twenty case card | Mobbin | "More work" rows: category, title, a three-figure strip, one arrow. |

## Brand tokens (unchanged)
- Type: Bricolage Grotesque (display), Geist (body), Geist Mono (labels).
- Colour: existing OKLCH tokens in `src/index.css`. Violet accent, teal signal, near-black ink, light tinted canvas.
- Logo: RA comet mark.

## Motion concept
Signature moment: **the hero canvas in depth.** The artboard outline, the layer panels, the Design / Code / Prototype chips and the portrait become separate planes in one three.js scene. Scroll pulls the camera through them in three beats (design, code, shipped) and lands on the first Staybooked screen, so the hand-off from hero to work is one continuous move. 3D tier 1, code-only route (no Blender). Landberg's site shows the grammar: real screens as bendable planes over a grid floor. Here the floor is the Figma canvas grid and the planes are the hero's own panels and product screens.

Supporting moments:
1. Lead work as a pinned stack: MotorFlow, Staybooked, Tech Noir. Each tile's screen sits inside a selection frame that resizes to the next project.
2. Case-study walkthrough: one pinned section where the product screen stays put and the caption swaps per step.
3. Shared-element transition from a work tile into the case-study header (GSAP Flip).
4. Statement paragraph on the home page set on a path that bends with scroll velocity and settles flat (from Lazarieva), with words lighting up as it scrolls.

## Structure changes
- Home order: hero, lead work (MotorFlow first, then Staybooked and Tech Noir), statement, more work rows, playground, contact. The nine-row tool list moves to About.
- CLLCTVE and Litmus AI move to "More work". Lead order reasoning: MotorFlow first (Reggie, Nov 11). Staybooked second as the solo AI product PRODUCT.md already names the strongest case study. Tech Noir third because it is the one shipped team product and the one mobile app, and its playable demo gives the stack a different kind of proof than a third solo web build.
- Case study template, screens first: header with one large screen and a figure row; problem, decision, proof in three short blocks; pinned walkthrough; evidence gallery; reflection; next project. Current pages run 530 to 1,100 words with 13 to 19 images; the Lazarieva case study carries 19 media on 232 words. Target under 400 words per case study with every screen at least half the viewport wide.
- Process-step 3D icons removed; each step shows the real screen it produced.

## Hard rules
1. Every frame, panel or cursor on the page holds real product UI or real copy. No decorative icon stands in for work.
2. One canvas per page, fixed behind the DOM. All text, links and buttons stay HTML.
3. three.js loads after first paint. The current DOM hero is the poster and the reduced-motion, no-WebGL and data-saver fallback.
4. Phones get the scene only if it holds 30fps; otherwise the poster with DOM parallax.
5. No bordered card inside a bordered card. A case-study section is a full-width band or a single surface.
6. Screenshots are never smaller than half the column they sit in.
7. Violet appears once per view as an action or a selection frame, never as glow.
8. No pinned section holds longer than three viewport heights. Nothing snaps or captures the wheel.

## Open items
- Awwwards: two winners watched live in Chrome on Nov 11 (Landberg; Lazarieva home and case study). Pacôme Pertant's site returned an error page. Bernadou is still write-ups only.
- Build log (`~/.motion-first-web/build-log.md`) not reachable from this session, so the no-repeat check against the last three builds is not done.
- Production (Netlify project `reggiealleyne`) holds per-route HTML from an earlier CLI deploy that this repo does not build, and Reggie does not know its source. Plan: generate per-route HTML at build time in this repo before any production deploy, which also fixes per-project share cards.

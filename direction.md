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
| Corentin Bernadou portfolio (2026) | Awwwards / Codrops | Primary. A design tool's own furniture (rulers, grid) used as the interface, three.js geometry behind real HTML, GSAP + Lenis pacing. **Not yet watched live**: taken from published write-ups, see Open items. |
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
Signature moment: **the hero canvas in depth.** The artboard outline, the layer panels, the Design / Code / Prototype chips and the portrait become separate planes in one three.js scene. Scroll pulls the camera through them in three beats (design, code, shipped) and lands on the first Staybooked screen, so the hand-off from hero to work is one continuous move. 3D tier 1, code-only route (no Blender), inspired by the Bernadou reference.

Supporting moments:
1. Lead work as a pinned stack: Staybooked, MotorFlow, Litmus AI. Each tile's screen sits inside a selection frame that resizes to the next project.
2. Case-study walkthrough: one pinned section where the product screen stays put and the caption swaps per step.
3. Shared-element transition from a work tile into the case-study header (GSAP Flip).
4. Statement paragraph on the home page whose words light up with scroll.

## Structure changes
- Home order: hero, lead work (Staybooked, MotorFlow, Litmus AI), statement, more work rows, playground, contact. The nine-row tool list moves to About.
- CLLCTVE moves from lead position to "More work".
- Case study template, screens first: header with one large screen and a figure row; problem, decision, proof in three short blocks; pinned walkthrough; evidence gallery; reflection; next project. Target about half the current length.
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
- Awwwards: winners list gathered (Colombel 2026, Jesper Landberg, Maria Vasilyeva, Léo Parpeix, Bruno Simon), but awwwards.com blocks automated reading and the Mac's Chrome returned a black frame mid-preloader, so no reference has been watched in motion yet. Needs a pass with the Mac awake, or references from Reggie.
- Build log (`~/.motion-first-web/build-log.md`) not reachable from this session, so the no-repeat check against the last three builds is not done.
- Deploy method for the Netlify production site is unknown; production holds per-route HTML this repo does not build.

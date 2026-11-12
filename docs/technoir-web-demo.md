# Tech Noir browser demonstration

The Tech Noir case study includes a lazy phone preview and a link to open the interactive demonstration in its own tab:

- Case study: `/project/tech-noir#chapter-demo`
- Standalone demo: `/technoir-demo/index.html`
- Embedded demo: `/technoir-demo/index.html?embedded=1`

The browser version recreates the native SwiftUI client demonstration. The original mobile application shipped; the new reconstruction uses sample inventory and simulated checkout. It does not connect to historical production services.

## Scope

The demo includes discovery; six sample products; search, categories, designer filters and sorting; size and finish selection; image zoom; saved pieces; four designer collections; three journal articles; styling notes and a short film; illustrative try-on; a shopping bag; sample checkout; local orders; and reset.

Try-on uses an adjustable illustration on a still photograph. It does not track the body or measure fit. Optional photos remain in page memory and are discarded when the dialog closes. No photo is uploaded. No payment or real order is made. Saved pieces, bag contents and sample orders use this browser’s local storage.

## Sources and design

Reviewed October 28, 2026 by direct inspection of the existing portfolio, its archived Tech Noir screens, the local native app catalog, and the browser reconstruction. The product descriptions, prices, designer descriptions, and articles in `catalog.json` were exported from `Technoir/Sources/Technoir/Catalog.swift` in the local project. The native source export helper is `Technoir/scripts/export-web-catalog.swift`.

Images and the silent 12-second slideshow are copied from the native demo’s bundled resources. The underlying archive and supplemental photography provenance is documented in the native project’s `Technoir/SOURCES.md`. The fashion cover and watch photo are illustrative photographs, not evidence of real product specifications or an original campaign. Brand references come from the original case study; NOIR ATELIER and the inventory are demo fixtures.

Taste Skill supplied design judgment. The native app supplies the matte black, ivory, muted-gold palette, editorial serif typography, product imagery, and compact shopping flow. Existing portfolio components supply the surrounding case-study style. No new external design reference or template was used. Generic dashboard cards, neon gradients and camera-AR claims were intentionally avoided.

## Implementation and verification

The static app is isolated in `public/technoir-demo` and requires no new runtime dependency. `TechNoirInteractiveDemo.tsx` creates the iframe only after the visitor starts it. Direct `index.html` URLs avoid relying on SPA route fallback for the demo.

Run state tests with `node --test tests/technoir/model.test.mjs`, then the existing type checks and production build. Tests cover combined filters, variant merging, quantity limits, checkout totals and snapshots, reload persistence, and invalid stored data.

In-app browser checks on October 28 covered search and empty states; designer and sorting filters; options and saved pieces; local photo selection and try-on sliders; the decoded film; quantity changes; checkout; orders and saves after reload; reset; image zoom; Escape and focus return; the iframe; and a 390-pixel phone layout without horizontal page overflow. Browser error logs were empty.

Code changes are made locally and delivered through the connected GitHub repository. Lovable remains the website host; no Lovable AI generation is required to edit or publish this code.

# Motorflow portfolio delivery

Published October 28, 2026: https://reggiealleyne.com/project/motorflow . The homepage’s More selected work and the Work page both link to it.

Delivered through GitHub PR https://github.com/ralleyne89/reggiealleyne/pull/3 . Merge commit: `fc0e1af539d1d2f24e4f8290a3f0dd1271e6a004`. The connected host received that commit and displayed “Your website was updated” after ordinary publication. Lovable’s AI agent was not used.

The page has project-specific product framing, role and tools, design decisions, audience, delivery facts, five annotated public screenshots and a live Motorflow link. It uses the portfolio’s editorial layout and wide image treatment. The source receipt is `source-receipt.md` in this directory; the repository copy is `docs/motorflow-case-study.md`.

## Verification

- Type checks, changed-file ESLint and the production build passed.
- The built output passed case routing, the numeric `/project/16` canonical redirect, homepage and Work entries, and the Motorflow live-link checks.
- Local checks covered desktop, 768px tablet and 390px phone layouts without horizontal overflow.
- The public page has the correct title, canonical URL and loaded hero. All five annotated gallery entries are present. Homepage and Work links both open the case study.
- The public 390px viewport has 390px document width. Browser error logs are empty.
- The public setup screenshot opened in the viewer and loaded at its original 1440px width. Escape closes the viewer. Keyboard focus return was verified in the production build.
- The shared viewer now uses a portal above navigation, scroll locking and an accessible dialog. Its behavior was also checked against Tech Noir in the production build.
- Public screenshots: `published-desktop.png` and `published-mobile.png` in this directory.

## Source boundaries

The evidence was captured from Motorflow’s public website and compared with selected local implementation files. No private dashboard or customer record is shown. No call, booking, form submission or payment was made. Prices visible in the screenshots are dated captures. The page does not claim measured revenue or conversion results, automated provisioning, or a verified billing lifecycle.

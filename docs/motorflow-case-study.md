# Motorflow portfolio case study

Added October 28, 2026 at `/project/motorflow`, with links from the homepage’s More selected work and the Work listing. The project uses the existing case-study components and the wide hero variant. It has its own narrative, audience model, interface captions, delivery facts and live-site link.

## Sources

Public pages were inspected directly in the Codex in-app browser on October 28, 2026:

- https://motorflow.ai/ — positioning, service entry points, setup outline and guided AI demonstration.
- https://motorflow.ai/?page=plans — service scope and comparison.
- https://motorflow.ai/?page=signup&plan=website — selected-service details, setup steps and an external checkout entry. No checkout or payment was performed.
- The public two-agent introduction, Mary’s native panel, the confirmation before Jamie, and Jamie’s separate sales-guide entry. No microphone permission or live call was requested.

Local source inspection used `/Users/reggiealleyne/Projects/motorflow/README.md`, `src/siteContent.ts`, `src/serviceCatalog.ts`, `src/components/VoiceTour.tsx`, `src/components/voiceTourState.ts`, and `src/components/NativeVoiceWidget.tsx`. These support the implementation description and the distinction between phone coverage, website voice support, separate conversations, and activation.

Five screenshots in `public/images/motorflow` are direct public-page captures. They contain no private accounts or customer records. The homepage’s repair-shop scene is illustrative photography. Prices visible in screenshots are dated captures, not a newly verified billing catalog.

The case study does not claim a measured revenue increase, booking conversion, research participant count, automatic provisioning, or successful end-to-end billing. It presents design and development work, without adding a founder title or team-size claim. The independent-shop audience model follows the public product positioning.

## Design and copy

Taste is the design authority; Humanizer supplied the copy pass. Dials: design variance 4, motion 3, density 4. The existing portfolio supplies typography, spacing, chapters and interaction patterns. The wide product screenshot gives Motorflow room to show its own charcoal and orange identity within that system.

The layout follows an editorial case study: wide product image, concise problem and decision, annotated screens, design rationale, audience needs, and delivery facts. It preserves the portfolio’s three featured projects while adding Motorflow as the first supporting homepage entry. No external design template or new visual research source was used. It avoids fabricated dashboard screens, customer testimonials and business metrics.

The shared screenshot viewer was repaired after testing found it could sit beneath the navigation inside a transformed route container. It now uses the installed Radix dialog, a portal above navigation, scroll locking, Escape, and focus return. No new dependency was added.

## Verification

- Type checks, changed-file ESLint, and the production build passed.
- Browser checks use the built production output, in addition to the initial development preview.
- The case page, Work listing, homepage entry and external Motorflow link are checked directly.
- Screenshot expansion, Escape, focus return, desktop, 768px tablet and 390px phone layouts are checked in the browser.
- Public publication and screenshot receipts are recorded in the task’s delivery report after the GitHub release.

Code is maintained locally and delivered through GitHub. Lovable remains the portfolio’s host; its AI agent is not used for the update.

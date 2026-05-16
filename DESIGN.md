# Reggie Alleyne portfolio style guide

## Art direction

The portfolio should feel like a working product archive: calm, inspectable, and precise, with enough material detail to feel built rather than templated. The system now uses Poppins throughout, with Black weight for display and heading treatments so the typography feels unified and direct.

Scene sentence: a reviewer is scanning case studies on a laptop in normal office light, moving between proof points, live links, and implementation notes. The interface should stay bright, legible, and quick to parse.

## Color

Use a restrained system with one violet accent and one supporting teal signal color. Violet is for primary actions, active states, focus, and occasional brand moments. Teal is for proof, evidence, and product signals. Neutrals should be lightly tinted, never flat black or flat white in custom tokens.

Code tokens live in `src/index.css` as OKLCH primitives:

- `--color-surface-page`: page background.
- `--color-surface-soft`: soft section and skeleton background.
- `--color-surface-raised`: raised surfaces.
- `--color-ink`: primary text.
- `--color-ink-secondary`: supporting text.
- `--color-border-soft`: default border.
- `--color-accent`: restrained violet accent.
- `--color-signal`: teal evidence signal.
- `--color-warm`: secondary warmth for caution or contrast.

Usage rules:

- Primary buttons and major links may use violet.
- Proof notes, reviewer signals, and status cues should prefer teal or neutral treatments.
- Tags should default to neutral chips unless they are interactive state indicators.
- Avoid stacking violet glow, violet border, violet tag, and violet icon in the same card.

## Typography

- Body: Poppins.
- Display and headings: Poppins Black.
- Body copy should stay within 65 to 75 characters where possible.
- Keep letter spacing at `0` except for short labels that already use uppercase.
- Use large type only for page-level statements, not card headings.

## Layout

Use fewer identical grids. A strong page should mix:

- One editorial lead case study.
- Compact supporting project rows.
- Evidence notes attached to the relevant claim.
- Full-width section bands instead of stacked card containers.

Card radius should stay at `0.75rem` to `1rem` for project surfaces. Avoid nesting cards inside cards.

## Components

### Evidence note

Use the shared evidence note for reviewer signals, proof copy, and project claims that need a receipt. It uses a full border and soft surface, not a colored side stripe.

Use it for:

- Reviewer signal on project cards.
- Proof signal on Playground experiments.
- Case-study evidence near a decision.

Do not use it for:

- Decorative pull quotes.
- Empty "impact" claims without proof.
- Alerts or validation errors.

### Project cards

Project cards should give a reviewer a decision path:

1. Project category.
2. Project title.
3. Impact summary.
4. Evidence note.
5. Role and year.
6. Case-study link.

The Work page may use an editorial lead card so the first project feels intentionally featured instead of simply first in a grid.

### Loading states

Loading states should show the shape of the content, not a blank wall. For predefined portfolio work, use local project data as placeholder content while remote project sources finish.

## Imagery

Project imagery should show the real interface, output, or artifact. Generated images are allowed for moodboards and Figma style-guide direction, but they should not replace real project screenshots on the public site without a separate selection pass.

## Motion

Motion should stay quiet and useful:

- Page and card entrance motion can use short ease-out transitions.
- Hover motion should not move layout.
- Respect reduced motion.
- Avoid bounce, elastic, and constant ambient movement.

## Accessibility

- Keep visible focus states on every interactive element.
- Preserve mobile bottom navigation and safe-area spacing.
- Avoid text inside compact UI that cannot wrap cleanly.
- Keep contrast high enough on evidence notes, tags, and glass controls.

## Do and do not

Do:

- Lead with the decision behind the work.
- Keep proof close to the claim.
- Use violet sparingly.
- Give featured work a distinct layout rhythm.

Do not:

- Use side-stripe borders for proof or callouts.
- Use gradient text.
- Turn every section into a card grid.
- Fill the interface with purple glow.
- Invent metrics or project claims.

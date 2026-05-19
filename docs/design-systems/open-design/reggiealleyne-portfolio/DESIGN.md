# Reggie Alleyne Portfolio

> Category: Portfolio
> A calm, inspectable portfolio system for product-design, frontend, and AI implementation proof. Built from the live Reggie Alleyne portfolio, not from a generic portfolio preset.

## 1. Visual Theme & Atmosphere

This system should feel like a working product archive: bright, precise, evidence-led, and easy to inspect. The interface is public-facing, but the tone is closer to a reviewer workspace than a marketing splash page. A visitor should be able to scan a project, understand the product decision, and find the proof without digging through decorative layers.

Scene sentence: a hiring manager or founder is reviewing case studies on a laptop in normal office light, moving between summaries, route links, product screenshots, and implementation notes. The UI should stay bright, legible, and fast to parse.

Use the material detail of the current portfolio: restrained violet accents, teal evidence cues, Poppins type, soft raised surfaces, liquid-glass navigation, product screenshots, reviewer snapshots, and compact proof notes.

## 2. Color

Use a restrained light system with one violet accent and one teal signal color. Violet marks primary actions, active states, focus, and occasional brand moments. Teal marks evidence, proof, and reviewer signals. Neutral surfaces are lightly tinted toward violet-blue and should not collapse to flat black or flat white in custom tokens.

Core tokens:

```css
:root {
  --bg: #f8f9fe;
  --surface: #fdfeff;
  --surface-soft: #f0f2f9;
  --fg: #0f131f;
  --fg-2: #4c5261;
  --muted: #6f7481;
  --border: #d5d7e1;
  --accent: #7d6aee;
  --accent-strong: #6b4ee0;
  --accent-soft: #e5e5ff;
  --accent-muted: #aeaaf7;
  --signal: #008680;
  --signal-soft: #c6f7f2;
  --warm: #eacd99;
  --focus: #7d6aee;
}
```

Dark tokens exist for framed nav, bento, or showcase moments, not as the default page theme:

```css
[data-theme="dark"] {
  --bg: #0d111c;
  --surface: #202636;
  --surface-soft: #171d2a;
  --fg: #f0f1f9;
  --accent: #9e94fd;
  --signal: #4ebcb6;
}
```

Usage rules:

- Keep violet under control. Do not stack violet glow, violet border, violet chip, and violet icon in one card.
- Use teal for evidence or reviewer confidence, not decoration.
- Use gray and slate utility colors only when they match the token ramp.
- Proof callouts use full borders and soft surfaces, never colored side stripes.
- Large dark regions are reserved for the navigation, bento cards, and selected case-study moments.

## 3. Typography

Use Poppins throughout. The portfolio currently uses Poppins for body, headings, and display, with heavier display weights for page-level statements. This single-family system works because the voice is direct, product-minded, and consistent.

Rules:

- Display and page headings: Poppins, 600 to 900 weight.
- Body: Poppins, 400 to 500 weight.
- Small labels: Poppins, 600 weight, uppercase only for compact metadata.
- Letter spacing: `0` for normal text. Small uppercase labels may use subtle tracking only when already present in the source component.
- Body line length: keep 65 to 75 characters where possible.
- Use large type only for page-level statements. Card titles stay tighter.

Type scale:

- `display-xl`: 64px, 1.08 line height.
- `display-lg`: 56px, 1.1 line height.
- `display-md`: 44px, 1.12 line height.
- `heading-xl`: 36px, 1.2 line height.
- `heading-lg`: 30px, 1.25 line height.
- `heading-md`: 22px, 1.35 line height.
- `body-lg`: 18px, 1.75 line height.
- `body-md`: 16px, 1.75 line height.
- `body-sm`: 14px, 1.6 line height.

## 4. Spacing

Spacing follows an 8px rhythm, with deliberate breaks for editorial pacing.

- Page gutters: 16px mobile, 24px tablet, 32px desktop.
- Container max width: 1280px for portfolio pages, 1152px for case-study body sections.
- Section padding: 48px mobile, 64px tablet, 80px desktop.
- Card padding: 16px to 24px for compact cards, 32px for large editorial panels.
- Inline control height: 40px to 44px desktop, 48px mobile for touch targets.
- Navigation pill height: about 54px desktop, 64px mobile.
- Evidence note padding: 12px, with a 6px gap between label row and proof copy.

Avoid same-padding-everywhere layouts. A page should mix roomy editorial leads, compact supporting rows, and tight evidence details.

## 5. Layout & Composition

The layout should support review, comparison, and proof.

Use:

- Editorial lead sections before dense card groups.
- Featured project cards for the strongest work.
- Compact supporting project rows for secondary work.
- Full-width page bands and section borders instead of nested cards.
- Route-specific screenshots when documenting real surfaces.
- Case-study hero plus reviewer snapshot for detail pages.

Avoid:

- Repeating equal card grids as the only structure.
- Wrapping every section in a floating card.
- Nested cards.
- Centered hero stacks that could belong to any portfolio.

Responsive behavior:

- Desktop uses wide editorial grids and 3-column featured work.
- Tablet collapses to 2-column supporting grids.
- Mobile prioritizes reading order, full-width cards, stable bottom navigation, and generous safe-area spacing.

## 6. Components

### Liquid-glass navigation

The nav is a dark, rounded, floating control surface. Active items use a darker liquid-glass control with a visible icon and expanding label. Inactive items stay icon-first with restrained hover states.

Use for top-level site navigation only. Do not reuse the nav material for every card.

### Liquid-glass controls

Use for overlays, hover affordances, compact status chips, and feature-callout controls. Keep the treatment purposeful, with actual surface depth or interaction need.

### Project cards

Project cards should give a reviewer a decision path:

1. Category or eyebrow.
2. Title.
3. Impact summary.
4. Role and year.
5. Key decision or proof.
6. Case-study link.

Images show real project interfaces or outputs. Generated mood images are not a replacement for project screenshots unless selected in a separate curation pass.

### Evidence notes

Evidence notes use a full border, soft surface, small proof icon, and grounded copy. They are for reviewer signals, proof statements, and claims that need a receipt.

Do not use evidence notes for decorative quotes, empty impact claims, alerts, or validation errors.

### Tags and chips

Default tags are neutral: light gray surface, gray text, subtle border. Use violet only for active or owned-artifact states. Use teal only for evidence or status signals.

### Buttons and links

Primary actions may use violet or dark ink depending on context. Secondary actions use borders, white or soft backgrounds, and clear hover states. Icon buttons should use lucide-style line icons with tooltips or labels when the icon is not obvious.

### Loading states

Loading states show the content shape: skeleton title lines, text lines, and card blocks. Use local predefined project data as placeholder content when available.

## 7. Motion & Interaction

Motion is quiet and useful.

- Page headings and cards may enter with short opacity and translate transitions.
- Navigation uses spring motion for the active label width.
- Cards may lift by 1 to 4px on hover, without changing layout.
- Images may scale slightly on hover inside a clipped frame.
- Use `ease-out` or spring transitions with controlled damping.
- Respect reduced motion. Remove hover translation and nonessential transitions when the user requests reduced motion.

Do not use bounce, elastic, constant ambient motion, or layout-property animation for decorative effect.

## 8. Voice & Brand

The writing should sound like a working designer explaining decisions behind an artifact.

Use:

- Problem, constraint, decision, proof.
- Specific project names and artifacts.
- Plain headings that name the actual thing.
- Evidence copy that a reviewer can inspect.

Avoid:

- Inflated portfolio language.
- Unsupported metrics.
- Generic "AI-powered" claims.
- Thesis-style case-study titles.
- Words such as "elevates", "empowers", "seamless", "groundbreaking", and "pivotal".

## 9. Anti-patterns

Do not use:

- Side-stripe borders for proof or callouts.
- Gradient text.
- Purple glow as the whole identity.
- Endless equal-card grids.
- Generic SaaS dashboard composition.
- Nested cards.
- Fake metrics, fake launch claims, or invented proof.
- Text that describes the UI instead of helping the reviewer act.

When in doubt, keep the artifact inspectable: real route screenshots, actual tokens, component rules, and proof close to the claim.

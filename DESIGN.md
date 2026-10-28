# DESIGN.md — Bigger Fish Blueprint Room

The site is one continuous technical drawing. Every page is a different sheet from the same set of blueprints. No mood swings, no tonal shifts. One paper, one ink, one set of pencils, end to end.

## Design tokens

### Color
| Token             | Value              | Use                                              |
|-------------------|--------------------|--------------------------------------------------|
| `--navy`          | `#0E1B2A`          | Primary background. Holds 70% of every surface.  |
| `--navy-deep`     | `#0A1422`          | Plate insets, footer, deep value shadows.        |
| `--cyan-rule`    | `#7AC6E6`          | Rule lines, plate borders, axis labels.          |
| `--cyan-soft`    | `rgba(122,198,230,0.35)` | Secondary rule lines, dimension dashes.    |
| `--cyan-fade`    | `rgba(122,198,230,0.18)` | Grid backdrop, faint background dims.      |
| `--paper`         | `#F2EBDB`          | Plate paper insets, headlines on navy.           |
| `--paper-soft`   | `rgba(242,235,219,0.94)` | Body text on navy.                          |
| `--graphite`      | `#1F2A33`          | Body text on paper, paper-card borders.          |
| `--red-pencil`   | `#C84A36`          | Architect's red. Rare emphasis. Max 2 per page.  |
| `--pencil-grey`  | `#8A95A1`          | Secondary text on navy, sheet metadata.          |
| `--mint-cursor`  | `#9FFCDF`          | RESERVED. Grid-highlight cursor only.            |
| `--logo-purple`  | `#540D6E`          | RESERVED. Inside the logo image only.            |

Zero pure black. Zero pure white. Zero pastel SaaS gradients.

### Typography
- Display: Outfit 800, tight tracking, small caps for plate titles.
- Subhead: Outfit 500, sentence case.
- Body: Source Serif 4, 18px, 1.55 line height. The serif breaks the "every automation site is sans-serif" reflex.
- Mono: IBM Plex Mono. Strict diet: axis labels, sheet metadata, callout numbers, mono CTAs only.

### Spacing
8px base. Plate padding 88px on desktop, 28px on mobile. Sheet outer padding 64px / 20px.

### Lines
1px solid `--cyan-rule` for plate borders. 1px dashed `--cyan-soft` for dividers. 2px solid `--red-pencil` for the stamp CTA.

### Logo frame
Logo sits on a 64px square `--navy-deep` background with 1px `--cyan-rule` border. The logo image keeps its true mint+purple colors. The frame goes on every page header.

## Page anatomy

Every page is a "sheet." Sheets contain:
1. `.sheet-bar` at top: studio name on the left, sheet metadata + nav on the right. Mono, 11px, cyan-rule.
2. One or more `.plate` blocks: bordered with 1px cyan rule on all four sides. Plate label notch top-left, revision notch top-right.
3. `.title-block` at bottom: a real architect's title block with rows for project, sheet, revision, drawn-by.

## Symmetry rule (mandatory)

When two cards or columns share a row, they must read as deliberately balanced. Equal line counts in their first lines, matched container heights, matched content hierarchy. This is the single most important visual rule on the site. Test every shared-row layout at 1440px and 768px before claiming done.

## Motion

Silent. Cyan rule lines may draw on first paint, left-to-right, 700ms ease-out-quart. No parallax. No scroll-jacking. No layout-translating fade-ins on dropdowns. Hover on the stamp CTA fills the red-pencil background. Hover on plate links underlines once. That's it.

## Voice register

Plate label: PLATE 02. ENGAGEMENT MODELS. REV. A.
Body line: We draw your operation before we wire it. The drawing is yours either way.
Callout: 01. Project Build. A defined sheet. Hand-off includes the working system and the source.
CTA: BOOK THE DIAGNOSTIC. (mono, all caps, red pencil border)

No em dashes. No "Not X, but Y." No false categoricals. No filler openers. No bold/italic mid-sentence in body prose.

## What's gone

- Three-up reality cards (rebuilt as a numbered annotated list).
- Gradient brand-name shimmer.
- Side-stripe borders on dropdowns and engagement cards.
- Any layout-translating @keyframes (fadeIn on dropdown).
- Polaroid-frame rotation on the who page.
- Banned phrases: "spec house", "Contract Job", "Digital Foreman", "on-site foreman".

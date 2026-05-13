# Shape brief A. The Blueprint Room

One-line vibe. A working architect's drafting table, pre-CAD, where systems are drawn before they are built.

## Feature summary

The site reads as one continuous technical drawing. Every page is a different sheet from the same set of blueprints. The studio's craft is "we draw your operation before we wire it," and the site visually IS that drawing. No mood shifts between sections. No light hero into dark "reality" room. One paper, one ink, one set of pencils, end to end.

## Primary user action

The reader gets to the bottom and feels they have been read a clear schematic of how the studio thinks. The CTA is "book a Systems Diagnostic," which earns its meaning because the entire site has demonstrated diagnostic thinking.

## Design direction

Color strategy. Committed. Deep blueprint navy holds 70 percent of the surface. Cyan rule-line ink is the working line, used for borders, axes, and label pulls. Off-white drafting paper is reserved for plates and inset reference cards. One accent (a faded vermillion, the architect's red pencil) marks emphasis at most twice per page.

Theme scene sentence. A studio operator at 11pm at a wide drafting table under a single warm desk lamp, cross-referencing a client's broken process across three taped-down sheets, working on the next revision in cyan ink.

Anchor references. Charles and Ray Eames "Powers of Ten" plates. Edward Tufte's reference grids. Old MIT laboratory notebooks. The technical drawings inside Saul Bass logo manuals. Not Memphis Group, not blueprint-as-stock-image.

### Palette swatches

- Drafting navy. `#0E1B2A` (background)
- Working cyan. `#7AC6E6` (rule lines, axis labels)
- Paper cream. `#F2EBDB` (plate insets, paper backgrounds)
- Graphite. `#1F2A33` (deep value, plate borders)
- Architect's red. `#C84A36` (rare emphasis, callout circles)
- Pencil grey. `#8A95A1` (secondary text on navy)

All values OKLCH-tuned. Zero pure black, zero pure white. Body text on navy is paper cream at 0.94 alpha; body on paper is graphite, never `#000`.

### Type system

- Display. Outfit (already in the codebase) at 800 weight, tight tracking, set in small caps for plate titles. "PLATE 02. ENGAGEMENT MODELS" reads as a real architect's title block, not a SaaS section header.
- Subhead. Outfit 500, sentence case, normal tracking.
- Body. Source Serif 4 (newly added), 18px, 1.55 line height. The serif is the move that breaks the "every automation site is sans-serif" reflex. It tells the reader they are reading something written, not something marketing-shaped.
- Mono. IBM Plex Mono for axis labels, dimension callouts, and the sheet-corner metadata only. Strict diet, never body.

### Layout principles

- Every page has a literal title block in the lower-right corner. Sheet number, drawing date, a one-line revision note. It is a real artifact, not decoration.
- Sections are "plates," not slides. Each plate is bordered with a 1px cyan rule on all four sides, with a small notch at the top-left where the plate label lives.
- The hero plate is the only one with a "drawn" element. A single hand-drawn fishing net, in cyan ink, occupying the right two-thirds.
- Three-up cards are gone everywhere. Replaced by labeled callouts on a single annotated diagram, or by a numbered list with serif body text and cyan dimension lines pulling out details.

### Motion language

Silent. Cyan rule lines draw themselves on first paint, left-to-right, 700ms ease-out-quart. After that, the paper does not move. Hover on a CTA pulls the architect's-red callout circle 4px wider. No scroll-jacking, no parallax.

### Voice register sample

Plate label. PLATE 02. ENGAGEMENT MODELS. REV. A.

Body line. We draw your operation before we wire it. The drawing is yours either way. You can hire us to build it, or take it to your own welder.

Callout. 01. Project Build. A defined sheet. Hand-off includes the working system and the source. Take it anywhere.

CTA. BOOK THE DIAGNOSTIC. (set as a stamped block in architect's red, all caps, mono)

## Scope

Mid-fi for the preview. One section rendered fully (the engagement-models / "Two ways in." plate), with the surrounding navigation and a footer title block to anchor the system.

## Layout strategy for the preview

Drafting navy fill. Single plate centered, bordered in cyan rule. Plate label notch top-left. Title block bottom-right with sheet number, date, revision note. Two engagement options laid out as labeled callouts off a center diagram, with cyan dimension lines pulling values into the margin. Architect's-red CTA stamp at the bottom.

## Open questions for the user

- Should the hand-drawn net visual survive in the new system, or be redrawn as a true plate-style line drawing?
- Is the current "// engagement_models" lowercase-mono section label preserved, or replaced by the architect's "PLATE 02" treatment?
- Source Serif 4 introduces a new font dependency. Acceptable, or stay on Outfit-only?

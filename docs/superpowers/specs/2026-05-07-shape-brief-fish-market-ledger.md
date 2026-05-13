# Shape brief C. The Fish Market Ledger

One-line vibe. A craftsman's ledger book. Cream paper, ink-black serif, one teal accent. Cyberpunk shows up only in the seams.

## Feature summary

A counter-move. Every other automation studio site is dark, neon, gradient, terminal. This direction goes the opposite way and lets the work do the heavy lifting. The site reads like an essay collection or a small-press business journal. A craftsman wrote this. The "intelligent automation" promise lands harder because the surface is not screaming about it.

The cyberpunk-light brand DNA is honored at the edges. One mono-set caption per section. One deliberate, single-character glitch on the hero. A teal that only an operator would notice. Otherwise, paper and ink.

## Primary user action

The reader feels they have read the editor's note in a magazine they would actually subscribe to. Trust is built before the offer is made. The Systems Diagnostic CTA at the bottom feels like a natural next sentence, not an ask.

## Design direction

Color strategy. Restrained. Cream paper holds the surface. Ink black holds the type. One teal carries every interactive element on the page: links, the active nav item, the CTA underline, the mono caption. No second accent. The deep purple from the current palette is retired; it was doing the work of compensating for an incoherent system that this direction does not need.

Theme scene sentence. A boutique studio owner in a sunlit kitchen on a Saturday morning, reading something a colleague sent over coffee, deciding whether to forward it.

Anchor references. The Whole Earth Catalog (Stewart Brand, not the modern revival). Wendell Berry essay typography in The Sun magazine. The Dieline's print issues. Field Notes brand books. The original Basecamp "Getting Real" book. Not Mailchimp's illustration style, not Stripe Press despite the temptation.

### Palette swatches

- Cream paper. `#F4EFE6` (full surface)
- Ink black. `#1A1814` (primary type)
- Slate ink. `#3A3631` (secondary type)
- Teal accent. `#1F6E6E` (links, CTA, mono caption)
- Hairline. `#D8D0BF` (rules, subtle dividers)
- Margin grey. `#7A7468` (captions, metadata)

All OKLCH-tuned. The cream is warm but not yellowed. The teal is the one piece of "modern" color in the entire system, which makes its appearances meaningful.

### Type system

- Display. GT Sectra (or fallback: PT Serif Caption at 700) at varied scale. Hero headline at clamp 3rem to 6rem. The serif is the move; it tells the reader "this is written, this is considered."
- Subhead. Outfit (kept from current site) at 600, used as a step-down voice for "tools section" headers. Outfit serves as the calm sans counterpoint to the serif.
- Body. Outfit at 18px, 1.65 line height, max 68ch.
- Caption. IBM Plex Mono (kept) at 0.82rem, teal, used for the one section-marker per spread and the corner metadata. The mono is now a rare voice, which makes it work harder.

### Layout principles

- Generous margins. Like a real journal, not edge-to-edge.
- Section dividers are a single hairline rule, 1px, with a small teal mono caption sitting on it, like a chapter marker. Example: `// chapter ii. the work`
- The "Reality" three-up cards are restructured as a two-column essay with a dropcap on the first paragraph. The headlines from the cards (Manual Bridge, Operational Blind Spot, Process Hostage) become italic inline subheads inside the running prose, not card titles.
- Engagement models become a numbered ledger entry. "01." in serif italic, then a one-line title in upright serif, then a paragraph. Two entries stacked. No cards.
- Hero retains the headline, tagline, subhead exactly as written. The hand-drawn net image is replaced by a single tasteful linocut-style illustration of a net cast across the page, in slate ink, occupying the right column. (If linocut is too far, a thin engraving-style line illustration works.)
- One deliberate "glitch." The brand name in the header has a single character that occasionally swaps to a teal monospace alternate, then reverts. Once every 8 seconds. The only visual evidence of the cyberpunk DNA on the surface.

### Motion language

Almost still. The page does not animate on scroll. The brand-name glitch is the only ambient motion. Hover states use a 200ms ease-out fill on the teal underline of links. Buttons respond to press with a 60ms inset darkening, no shadow.

### Voice register sample

Section caption. // chapter ii. the work

Body. "The systems most operators inherit were not built for them. They were built for a hundred-thousand-seat customer the operator will never resemble. The workarounds you have invented to make those systems fit your work are a kind of authorship. You are already a designer. We just bring better tools."

Engagement entry. 01. *Project Build.* A defined sheet, delivered. You receive the working system and the source. Take it anywhere.

CTA. Book a Systems Diagnostic. (serif, with a teal underline that thickens on hover)

## Scope

Mid-fi for the preview. The "How / Two ways in." engagement-models section, rendered as the ledger entry treatment, with a cream-paper section above it showing the chapter divider and the carry-over from the prior section.

## Layout strategy for the preview

Cream surface, generous margin. Top hairline rule with the teal mono caption "// chapter ii. the work". The serif headline "Two ways in." reads as an essay title. A short two-sentence introduction in upright serif body. Two stacked numbered ledger entries (01, 02) with serif italic numbers, italic serif titles, and 65ch body paragraphs. Below them, a centered teal-underlined CTA.

## Open questions for the user

- The deep purple is retired in this direction. That is a real loss of an established brand color. Acceptable, or required to keep purple in some role?
- GT Sectra is a paid serif. PT Serif Caption is the free fallback. Substitute Crimson Pro or Source Serif 4 if that is preferred?
- The "linocut net" illustration would need to be drawn or sourced. Acceptable scope, or substitute a single inline Plex Mono ASCII fish glyph in the corner?

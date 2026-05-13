# Shape brief B. The Operator's Terminal

One-line vibe. A senior operator's working console at the end of a long shift. Phosphor on dark olive, nothing decorative.

## Feature summary

A committed dark surface, treated as a real working environment. Every element has a job. The reader feels they have walked into a quiet room where someone is actually running something. Not the matrix-green-on-pure-black trope (the second-order reflex we are explicitly avoiding). The phosphor here is amber, the dark is a soft olive-black, and the type behaves like an essay set inside a code editor that respects its readers.

## Primary user action

The reader scrolls one continuous manifesto column, pauses on the engagement models, and drops a line. The page is a slow read, not a sales funnel.

## Design direction

Color strategy. Drenched. The surface IS the color. Olive-black floods the entire viewport. Amber phosphor carries 80 percent of the type. A single muted teal carries link state, focus state, and the active item's left edge. That is the entire palette working at full intensity.

Theme scene sentence. A solo operator at 1am, screen brightness halved, reading something written by someone they trust before deciding who to hire next.

Anchor references. The original BeOS interface manuals. Robin Sloan's Mr. Penumbra typography. The text editor in a 1990s CAD station. Coda 2's writing mode. Not the Hacker News mock terminal, not the VHS scanline filter, not the Cursor IDE marketing site.

### Palette swatches

- Olive-black. `#161812` (full surface)
- Phosphor amber. `#E6B872` (primary type)
- Bright phosphor. `#F4D8A6` (display type, headlines)
- Teal signal. `#5FB6A8` (links, focus, "active" markers)
- Char. `#0C0E0A` (recessed inset blocks)
- Dust. `#8E8C7E` (secondary type, captions)

All OKLCH-tuned. Phosphor amber is intentionally desaturated relative to a "true" amber CRT; the goal is readable, not nostalgic.

### Type system

- Display. JetBrains Mono at 600 weight, very large (clamp 3rem to 5.5rem), tracked open by 0.5px. Headlines feel set, not typed.
- Body. iA Writer Quattro V (humanist sans, slightly mono-influenced) at 18px, line-height 1.7, max width 65ch. The body is a manifesto column down the center.
- Caption. JetBrains Mono at 0.78rem, dust grey, used for timestamps, revision marks, and "active session" indicators only.

### Layout principles

- Single column down the middle, 65ch wide. Margins are wide and quiet.
- The "Reality" cards are dissolved into one running confessional paragraph, set as a pull-out block with a teal left edge and a faint amber rule above.
- Engagement models become two stacked rows, each with a teal "active" dot, an amber title, and a body paragraph. No card containers. Borders are 1px amber at 12 percent alpha, top and bottom only, never side stripes.
- Hero is pinned to the top of the column, not split. The hand-drawn net visual is replaced (or removed) in this direction; the column does not need a sidekick.
- A persistent thin status bar runs across the top. Three monospace tokens in dust grey: a session id, the current "plate" (section name), and the local timestamp. It updates as the reader scrolls. This is the only motion on the page besides scroll.

### Motion language

Reductive. The status bar live-updates the section name as the reader passes anchors. Section transitions fade in over 300ms, no translate. Cursor on links shifts to a 1ch underscore in teal, blinking once on hover then settling. No parallax, no reveals.

### Voice register sample

Status bar. session 0xa1c4 / plate. why / 23:14:02 LCL

Pull paragraph. "You started this thing because you saw a way to do the work better. Then the work became copying invoice numbers between two tools that were built for someone else's company. Five tools, five logins, five places where the same client lives. You are the integration layer. We do that part."

CTA. drop us a line. (lowercase, amber, with a teal blinking underscore)

## Scope

Mid-fi for the preview. The hero plus the "You didn't start a business to do data entry" reality block, rendered as the manifesto column with the dissolved cards.

## Layout strategy for the preview

Olive-black surface. Top status bar. Column 65ch wide, centered. Hero headline (untouchable copy) sits at the top in bright phosphor display mono. Tagline and subhead in body type. A horizontal amber-at-12-percent rule. The "data entry" headline in bright phosphor. One running paragraph that absorbs all three reality cards into a single confessional voice. Teal CTA underscore at the bottom of the block.

## Open questions for the user

- iA Writer Quattro V is the right body face for this direction but is a paid font. Acceptable to license, or substitute Inter (free, slightly less character) for the body?
- The status bar updates on scroll. JS is currently nearly absent from the site. Acceptable to add 30 lines of vanilla JS, or keep it static for v1?
- The hand-drawn net hero visual disappears in this direction. Owner OK with that?

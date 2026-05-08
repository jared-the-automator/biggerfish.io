# biggerfish.io — Sovereign Professional Repositioning
**Date:** 2026-05-07
**Status:** Approved

## Summary

Reposition biggerfish.io from trade/contractor market to the Sovereign Professional: high-value solos and small teams doing $100k+ revenue who want systems that fit their business rather than the other way around.

## Scope

Two pages modified. One nav change. Nothing else touched.

| File | Change type | Description |
|------|-------------|-------------|
| `src/index.html` | Copy update | Hero subhead, meta description, pain point cards, nav dropdown |
| `src/who.html` | Nav update only | Add Turingyde to "What" dropdown — Jared's copy stays as written |
| `src/outcome-engineer.html` | Untouched | Hospitality product, stays as-is |

Old Webflow pages (`pricing.html`, `intelligent-automation.html`, `tools.html`) are not touched and not referenced.

## Navigation Change

"What" dropdown gains a third item in both `index.html` and `who.html`:

```
What ▾
  └── Custom Web Applications  →  index.html#what
  └── Outcome Engineer         →  outcome-engineer.html
  └── Turingyde                →  https://turingyde.com  (new — verify URL before implementing)
```

All other nav items unchanged: Why / How / What / Who / When?

## index.html — Copy Changes

### Meta description
**Remove:** "We build automated operations engines for trade agencies, contractors, and service operators. Let us handle the net-work—you've got bigger fish to fry."
**Replace with:** "We build automated operations engines for independent operators. Let us handle the net work. You've got bigger fish to fry."

### Hero subhead
**Remove:** "We build automated operations engines for trade agencies, contractors, and service operators."
**Replace with:** "We build automated operations engines for independent operators."

### Pain point cards — full replacement

All three cards (`reality-card` divs) are replaced. Structure stays identical.

**Card 1: The Manual Bridge**
- Title: `The Manual Bridge`
- Concept: `Manual Integration`
- Copy: "You are the integration layer. Your CRM doesn't talk to your invoicing tool. Your invoicing tool doesn't talk to your calendar. You spend hours a week copying data between systems that were built for someone else's workflow."

**Card 2: The Operational Blind Spot**
- Title: `The Operational Blind Spot`
- Concept: `Fragmented Data`
- Copy: "Your data lives in five different places. Getting a clear picture of your own business requires assembling it by hand, every time. You're flying blind between tools that don't share a language."

**Card 3: The Process Hostage**
- Title: `The Process Hostage`
- Concept: `Software That Runs You`
- Copy: "You'd change how you handle client onboarding, but the software won't allow it. You'd add a step to your pipeline, but there's no field for it. The workarounds pile up until they become the process."

### Everything else on index.html
Unchanged. Hero title, tagline, How section, What section, Diagnostic CTA, footer — all stay as written.

## who.html — Copy

Jared's bio stays exactly as written. The only change is adding Turingyde to the "What" dropdown in the nav (same as index.html).

## Copy Rules (non-negotiable)

Per Voice & Brand.md — every line of new copy must pass these:

- No em-dashes
- No "not X, but Y" pattern
- No false categoricals
- No filler openers
- No bold or italic in body prose
- Rule of three, sparingly

## What Does Not Change

- All anchor lines (Let us handle the net work / Measure twice. Cut once. / SaaS is a spec house.)
- The Foreman identity
- Synthwave/cyberpunk-light aesthetic and redesign.css
- Outfit font
- Snap-scroll layout and section structure
- The "Measure Twice. Cut Once." section and Systems Diagnostic CTA
- The outcome-engineer.html page
- The How section copy and engagement cards
- The What section visuals and module copy
- The who.html bio copy

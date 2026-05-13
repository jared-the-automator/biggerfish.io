# PRODUCT.md for biggerfish.io

## Register

brand. The site is the product. Every page is marketing surface, identity, and manifesto. There is no app inside this codebase; the actual product is custom automation work delivered to clients elsewhere (Mission Control portals, Airtable + Make pipelines, the Outcome Engineer, Turingyde).

## What this site is

Bigger Fish Intelligent Automation is the studio of one operator (Jared Fischer, "The Foreman"). The site sells two engagement models and one productized service:

1. Project Build. Defined-scope custom builds; client gets the working system and the source code.
2. Retained Operations. Monthly retainer; the studio runs and grows the system.
3. The Outcome Engineer. Productized review-routing system for restaurants ($0.06 to $0.10 per reservation, $599 setup). Lives at /outcome-engineer.html.

Adjacent surfaces in the same nav: a "Systems Diagnostic" lead magnet (Typeform), a Client Login dock, and an outbound link to Turingyde (the local-first CRM, separately marketed).

The active hierarchy of pages:
- index.html. Hero, "Why" (reality of operator pain), "How" (engagement models), "What" (custom web apps), "Offer" (Systems Diagnostic blueprint).
- who.html. Jared's bio (sommelier turned packaging-sales turned philosophy-turned-automation operator).
- outcome-engineer.html. Productized restaurant review system, concept brief.
- login.html. Client portal entry.
- privacy-policy.html, terms-conditions.html. Legal.

## Audience: The Sovereign Professional

Independent operators. Boutique studio owners. Senior freelancers running a real book of business. Specifics:

- $100k+ in annual revenue, often well beyond. They can afford custom work; they choose to instead of going SaaS.
- Technically literate. They understand what an API is, have wired Zapier together, know the sting of a tool's pricing tier wall.
- Allergic to: per-seat pricing, "schedule a demo," vague enterprise speak, pastel SaaS gradients, vendor lock-in, being treated like a marketing persona.
- Currently in pain because they ARE the integration layer between their own tools. CRMs that don't talk to their invoicing. Calendars cut off from their pipeline. Five places where customer data lives. Workarounds that became the process.
- They want sovereignty. Working systems that survive their subscription expiring. Source code in their possession. Tools shaped to their workflow, not the other way round.

The voice they trust sounds like a tradesman who reads philosophy. Not a consultant. Not a guru. Someone who can quote logic in one sentence and weld a pipeline in the next.

## Brand DNA

Cyberpunk-light. Synthwave inflected. Anti-corporate. Manifesto, not marketing deck.

Strategic principles:
- The site IS a working system. It is the first proof of craft. Every animation, every choice of mono vs. sans, every spacing decision is showing the reader what they're hiring.
- Show the seams. Owner is comfortable with terminal-aesthetic, code comments as labels, // engagement_models as a section marker. The audience reads them as honesty, not affectation.
- Zero primary colors. No #0000FF. No #FF0000. Every color shifted, intentional, defensible.
- One identity, end to end. The current site swings light → deep purple → dark grid → teal → dark again. That's incoherent. The new direction commits to one room and stays in it.
- Voice: dry, confident, occasionally philosophical. Comfortable with a one-line burn. Does not flinch from words like "hostage," "leak," "blind spot."

## Voice register (sacred)

Hero copy is owner-written and untouchable:

> Let us handle the net work.
> You've got bigger fish to fry.
> We build automated operations engines for independent operators.

That's the tonal anchor. Short. Mildly punning. Sentence-shaped, not slogan-shaped. Confident, not desperate. Read it before writing anything new.

Other untouchable copy:
- The entire who.html bio (owner wrote it himself).
- The Turingyde dropdown link in the nav.

Everything else is up for revision when the new direction calls for it, including the three "Reality" cards, the "Two ways in." engagement-model copy, the command-center module headings, and the Systems Diagnostic offer text.

## Anti-references

The site should NOT look like or sound like:

- Webflow-template SaaS sites: light hero with a screenshot, three-up feature cards with icons, lavender gradient CTA.
- Agency portfolio sites: huge serif "We craft digital experiences." Marquee of past clients.
- Consultant pages: stock-photo trust badges, "Trusted by 500+ leaders," LinkedIn-blue accents.
- AI-flavored landing pages: gradient orb hero, glassmorphism cards, "Powered by AI" badge.
- Crypto/Web3 dark sites: neon-on-pure-black, CRT scanlines as a default, mirror-finish gradient text.

The "category-reflex" trap to avoid: "automation studio for technical operators → terminal-green dark mode with monospace everything" is the obvious second-order reflex. The new direction can use terminal cues as accents, but should not BE a terminal screensaver.

## Existing palette (current state, not prescriptive)

The current CSS already uses:

- Deep purple `#540D6E`
- Mint green `#9FFCDF`
- Teal blue `#1C6E8C`
- Black-green `#1F271B`
- Light gray `#D0CCD0`

Owner is partial to teal/mint/deep-purple but explicitly open to a full re-pick if a better palette can be defended. Treat the existing values as evidence of taste, not as locked tokens.

## Typography (current state)

- Outfit (sans, full weight axis). Body and display.
- IBM Plex Mono. Code labels, section markers like `// engagement_models`.

Both are good fits and worth preserving as a starting point. The new direction can reassign their roles or introduce a third (a serif or display face) if it earns its place.

## Strategic principles for the overhaul

1. Pick one room and commit. Stop swinging between light, dark-purple, dark-grid, teal, dark-grid. The new direction declares a single coherent space.
2. Cut what reads as generic AI output. The three "reality cards" are the prime suspect: same-sized cards, icon-heading-paragraph repeating endlessly, the absolute-bans cliché. They get rewritten or restructured.
3. Voice consistency. The hero is dry and clever. The current "reality cards" drift toward consultant-speak ("operational blind spot," "process hostage" verges on it). The new direction picks one register and stays there.
4. The site demonstrates the offer. An automation studio that ships a clunky site has a credibility problem. Every interaction is silent proof.
5. Anti-corporate, but not anti-professional. Sovereignty does not mean sloppy. It means precise, confident, opinionated.

## Constraints

- Plain HTML + modular CSS + Vite. No React, no framework migration in scope.
- Dev server already running at localhost:5173. Do not restart.
- Hero headline / tagline / subhead are sacred. Who.html bio is sacred. Turingyde nav link is sacred.
- No em dashes anywhere. No "Not X, but Y." No false categoricals. No filler openers. No bold/italic mid-sentence in body prose.

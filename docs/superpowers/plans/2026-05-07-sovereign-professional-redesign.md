# Sovereign Professional Repositioning — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update biggerfish.io copy and nav to reposition from trade/contractor market to the Sovereign Professional.

**Architecture:** Pure HTML edits on two files. No build step required for the edits themselves. Vite is available for local preview (`npm run dev` from project root). All changes are targeted string replacements — no structural or CSS changes.

**Tech Stack:** Plain HTML, Vite (dev/preview only)

**Spec:** `docs/superpowers/specs/2026-05-07-sovereign-professional-redesign.md`

---

## Files Modified

- `src/index.html` — meta description, hero subhead, three pain point cards, nav dropdown
- `src/who.html` — nav dropdown only

---

### Task 1: Update meta description and hero subhead (index.html)

**Files:**
- Modify: `src/index.html`

- [ ] **Step 1: Confirm Turingyde URL before starting**

  Before any edits, verify the correct URL for the Turingyde link. The spec assumes `https://turingyde.com` — confirm this is live and correct. If not, get the correct URL before proceeding to Task 3.

- [ ] **Step 2: Update the meta description**

  In `src/index.html`, replace lines 7–9:

  ```html
  <meta
      content="We build automated operations engines for trade agencies, contractors, and service operators. Let us handle the net-work—you've got bigger fish to fry."
      name="description">
  ```

  With:

  ```html
  <meta
      content="We build automated operations engines for independent operators. Let us handle the net work. You've got bigger fish to fry."
      name="description">
  ```

- [ ] **Step 3: Update the hero subhead**

  In `src/index.html`, replace lines 56–57:

  ```html
  <p class="hero-subhead">We build automated operations engines for trade agencies, contractors, and
      service operators.</p>
  ```

  With:

  ```html
  <p class="hero-subhead">We build automated operations engines for independent operators.</p>
  ```

- [ ] **Step 4: Verify both changes**

  ```bash
  grep -n "trade agencies\|contractors\|service operators\|net-work" src/index.html
  ```

  Expected: no output. If any matches remain, fix them before continuing.

- [ ] **Step 5: Commit**

  ```bash
  git add src/index.html
  git commit -m "copy: update hero subhead and meta for sovereign professional market"
  ```

---

### Task 2: Replace pain point cards (index.html)

**Files:**
- Modify: `src/index.html`

- [ ] **Step 1: Replace all three reality-card divs**

  In `src/index.html`, replace the entire `<div class="reality-cards">` block (lines 77–103):

  ```html
  <div class="reality-cards">
      <!-- Card 1: The Document Chase -->
      <div class="reality-card">
          <h3 class="card-title">The Document Chase</h3>
          <p class="card-concept">Contracts • Proposals • W9s • NDAs</p>
          <p class="card-copy">Chasing down a signed contract, then an invoice, then a photo of the
              install? We automate the signatures for you, keeping you out of the inbox and on the
              jobsite.</p>
      </div>

      <!-- Card 2: The Triple Entry -->
      <div class="reality-card">
          <h3 class="card-title">The Triple Entry</h3>
          <p class="card-concept">Redundant Data Entry</p>
          <p class="card-copy">You type the lead into your CRM. Then the schedule. Then QuickBooks. No
              need to juggle logins anymore. We make your systems talk so you only type it once.
          </p>
      </div>

      <!-- Card 3: The Project Blind Spot -->
      <div class="reality-card">
          <h3 class="card-title">The Project Blind Spot</h3>
          <p class="card-concept">Project Management & Costs</p>
          <p class="card-copy">Once the deal is signed, where does it go? We give you a live view of deal
              stages, contractor assignments, and costs, so you never lose track of a job's margin.</p>
      </div>
  </div>
  ```

  With:

  ```html
  <div class="reality-cards">
      <!-- Card 1: The Manual Bridge -->
      <div class="reality-card">
          <h3 class="card-title">The Manual Bridge</h3>
          <p class="card-concept">Manual Integration</p>
          <p class="card-copy">You are the integration layer. Your CRM doesn't talk to your invoicing
              tool. Your invoicing tool doesn't talk to your calendar. You spend hours a week copying
              data between systems that were built for someone else's workflow.</p>
      </div>

      <!-- Card 2: The Operational Blind Spot -->
      <div class="reality-card">
          <h3 class="card-title">The Operational Blind Spot</h3>
          <p class="card-concept">Fragmented Data</p>
          <p class="card-copy">Your data lives in five different places. Getting a clear picture of
              your own business requires assembling it by hand, every time. You're flying blind
              between tools that don't share a language.</p>
      </div>

      <!-- Card 3: The Process Hostage -->
      <div class="reality-card">
          <h3 class="card-title">The Process Hostage</h3>
          <p class="card-concept">Software That Runs You</p>
          <p class="card-copy">You'd change how you handle client onboarding, but the software won't
              allow it. You'd add a step to your pipeline, but there's no field for it. The
              workarounds pile up until they become the process.</p>
      </div>
  </div>
  ```

- [ ] **Step 2: Verify old card titles are gone**

  ```bash
  grep -n "Document Chase\|Triple Entry\|Project Blind Spot\|jobsite\|QuickBooks\|contractor assignments" src/index.html
  ```

  Expected: no output.

- [ ] **Step 3: Verify new card titles are present**

  ```bash
  grep -n "Manual Bridge\|Operational Blind Spot\|Process Hostage" src/index.html
  ```

  Expected: three matches, one per card title.

- [ ] **Step 4: Commit**

  ```bash
  git add src/index.html
  git commit -m "copy: replace pain point cards for sovereign professional market"
  ```

---

### Task 3: Add Turingyde to nav dropdown (index.html and who.html)

**Files:**
- Modify: `src/index.html`
- Modify: `src/who.html`

**Prerequisite:** Turingyde URL confirmed in Task 1, Step 1.

- [ ] **Step 1: Update "What" dropdown in index.html**

  In `src/index.html`, replace the nav dropdown block (lines 36–41):

  ```html
  <li class="nav-item-dropdown">
      <a href="index.html#what" class="nav-link">What</a>
      <div class="nav-dropdown-content">
          <a href="index.html#what" class="dropdown-link">Custom Web Applications</a>
          <a href="outcome-engineer.html" class="dropdown-link outcome">Outcome Engineer</a>
      </div>
  </li>
  ```

  With:

  ```html
  <li class="nav-item-dropdown">
      <a href="index.html#what" class="nav-link">What</a>
      <div class="nav-dropdown-content">
          <a href="index.html#what" class="dropdown-link">Custom Web Applications</a>
          <a href="outcome-engineer.html" class="dropdown-link outcome">Outcome Engineer</a>
          <a href="https://turingyde.com" class="dropdown-link" target="_blank" rel="noopener noreferrer">Turingyde</a>
      </div>
  </li>
  ```

- [ ] **Step 2: Update "What" dropdown in who.html**

  In `src/who.html`, replace the nav dropdown block (lines 32–37):

  ```html
  <li class="nav-item-dropdown">
      <a href="index.html#what" class="nav-link">What</a>
      <div class="nav-dropdown-content">
          <a href="index.html#what" class="dropdown-link">Custom Web Applications</a>
          <a href="outcome-engineer.html" class="dropdown-link outcome">Outcome Engineer</a>
      </div>
  </li>
  ```

  With:

  ```html
  <li class="nav-item-dropdown">
      <a href="index.html#what" class="nav-link">What</a>
      <div class="nav-dropdown-content">
          <a href="index.html#what" class="dropdown-link">Custom Web Applications</a>
          <a href="outcome-engineer.html" class="dropdown-link outcome">Outcome Engineer</a>
          <a href="https://turingyde.com" class="dropdown-link" target="_blank" rel="noopener noreferrer">Turingyde</a>
      </div>
  </li>
  ```

- [ ] **Step 3: Verify both files**

  ```bash
  grep -n "turingyde.com" src/index.html src/who.html
  ```

  Expected: one match in each file.

- [ ] **Step 4: Commit**

  ```bash
  git add src/index.html src/who.html
  git commit -m "feat: add Turingyde to What nav dropdown"
  ```

---

### Task 4: Visual verification

**Files:** None modified

- [ ] **Step 1: Start dev server**

  ```bash
  cd /home/biggerfisch/Projects/Scratch/biggerfish.io
  npm run dev
  ```

- [ ] **Step 2: Check index.html**

  Open `http://localhost:5173` (or the port Vite reports). Verify:
  - Hero subhead reads "We build automated operations engines for independent operators."
  - Three pain point cards show The Manual Bridge, The Operational Blind Spot, The Process Hostage
  - "What" dropdown shows three items including Turingyde
  - Turingyde link opens in a new tab

- [ ] **Step 3: Check who.html**

  Open `http://localhost:5173/who.html`. Verify:
  - Bio copy is unchanged
  - "What" dropdown shows Turingyde as third item

- [ ] **Step 4: Stop dev server and do a final grep for old trade copy**

  ```bash
  grep -rn "trade agencies\|contractors\|service operators\|install photos\|field crew\|jobsite\|QuickBooks\|Document Chase\|Triple Entry\|Project Blind Spot" src/index.html src/who.html
  ```

  Expected: no output.

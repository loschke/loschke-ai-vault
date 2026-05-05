---
title: UI Prompt Bibliothek
type: reference
status: living
created: '2026-03-26T00:00:00.000Z'
updated: '2026-03-26T00:00:00.000Z'
tags:
  - ai-coding
  - ui-design
  - prompting
  - prompt-library
  - vibe-coding
sources:
  - 'self-authored:loschke:ai-coding-experience'
area: ai-coding
brand_fit:
  - loschke
  - unlearn
  - lernen
last_reviewed: '2026-05-05'
---

# UI-Prompt-Bibliothek

Praxisbeispiele für UI-Generierung mit Design-Agents. Jeder Prompt hat einen **universellen Kern** (funktioniert in jedem Tool — Stitch, Figma AI, v0, Bolt, Lovable) und einen optionalen **Tech-Block** (nur für Code-generierende Tools).

Die zugrundeliegenden Prinzipien sind in [[UI-Prompting-fuer-Design-Agents|UI-Prompting für Design-Agents]] dokumentiert.

> Prompts auf Englisch — die meisten Tools performen damit besser. Deutsche Varianten bei Bedarf ableiten.

---

## Aufbau jedes Prompts

```
┌─────────────────────────────┐
│  KERN (immer verwenden)     │
│  · Kontext & Zielgruppe     │
│  · Visuelle Richtung        │
│  · Struktur & Hierarchie    │
│  · Verhalten & Zustände     │
│  · Guardrails               │
├─────────────────────────────┤
│  TECH-BLOCK (optional)      │  ← nur für Bolt, Lovable, v0,
│  · Framework & Styling      │    Claude Artifacts, Cursor etc.
│  · Breakpoints & Responsive │
│  · Komponenten-Architektur  │
└─────────────────────────────┘
```

**Faustregel:** Visuelles Tool (Stitch, Figma AI, Galileo) → nur Kern. Code-Tool (v0, Bolt, Lovable, Cursor) → Kern + Tech-Block.

---

## Ganze Seiten

### SaaS Landing Page

**Kern:**

```
Design a landing page for "Flowstate", a project management tool for remote design teams.

CONTEXT:
Target users are design leads at mid-size agencies (20–80 people) who manage distributed creative teams across time zones. Their core frustration: existing tools feel like spreadsheets, not creative workspaces.

VISUAL DIRECTION:
Bento-box layout with generous whitespace. Dark mode as default. Accent color: electric violet (#7C3AED). One bold geometric sans-serif for headlines, monospace for data points. Subtle grain texture on background. No stock photography — abstract 3D shapes or geometric illustrations only.

STRUCTURE (top to bottom):
1. Sticky minimal header: logo left, "Start Free" CTA right, no hamburger menu on desktop
2. Hero: Bold single-line headline (max 8 words), one-sentence subhead, primary CTA + secondary ghost button, browser mockup showing the product UI below
3. Logo bar: "Trusted by teams at" — 6 grayscale logos
4. Three feature cards in bento grid (unequal sizes): icon, short title, 2-line description. Primary feature card is 2x width.
5. Social proof: single large testimonial quote with photo, name, role, company
6. Pricing: two tiers only (Team / Enterprise), horizontal layout, feature comparison as compact checklist, "Most Popular" badge on Team
7. Final CTA: dark section, bold headline, email capture input + button
8. Minimal footer: 4-column link grid, copyright, social icons

BEHAVIOR:
- All CTAs: hover state with slight upward lift and shadow increase, smooth 200ms transition
- Logo bar: subtle horizontal scroll animation
- No auto-playing video or animation blocking above-the-fold content

GUARDRAILS:
- Navigation never hidden behind hamburger on desktop
- WCAG 2.1 AA color contrast on all text
- No more than two CTA styles across the entire page (primary solid + secondary outline)
```

**Tech-Block (für Code-Tools):**

```
TECHNICAL CONSTRAINTS:
- React/Next.js, Tailwind CSS
- Mobile-first: use standard Tailwind breakpoints (sm, md, lg, xl, 2xl)
- Semantic HTML: proper heading hierarchy (single h1 in hero, h2 per section)
- CTAs as reusable Button component with variant prop (primary | secondary)
- Images as Next.js Image components with proper alt text and lazy loading
```

---

### Mobile Finance App — Dashboard Screen

**Kern:**

```
Design the main dashboard screen for a personal finance app called "Klar". Mobile only (iPhone 15 viewport, 393x852).

CONTEXT:
Users are young professionals (25–35) in Germany who check spending 3–5 times daily during commute or lunch. Primary question: "How much did I spend today and am I on track this month?"

VISUAL DIRECTION:
Typographic-driven, minimal chrome. Light mode. Off-white background (#FAFAF9). Cards: white with 1px border (#E5E5E5), no shadows. Accent: deep teal (#0D9488) for positive, warm red (#DC2626) for overspending. Numbers in tabular-lining figures.

STRUCTURE (top to bottom):
1. Greeting row: "Guten Tag, [Name]" left-aligned, avatar circle right, current date in muted text below
2. Primary metric card (full width): Today's total spending as large bold number (32pt), delta vs. daily budget as colored pill badge (+12% over = red, under = teal), progress ring for monthly budget
3. Category breakdown: horizontal scrollable chips (Essen, Transport, Shopping, Abo, Sonstiges) — tapping filters transaction list
4. Recent transactions: last 5 items, each row = merchant icon + name + category tag + amount right-aligned. Divider lines. "Alle anzeigen" link at bottom.
5. Bottom tab navigation: 4 items (Home, Analyse, Budget, Profil), filled icon on active, labels below

BEHAVIOR:
- Pull-to-refresh with subtle loading indicator
- Skeleton loaders for async data: pulsing placeholders matching card structure, no spinners
- Transaction amounts: German format (1.234,56 €)

GUARDRAILS:
- Safe area insets respected (top and bottom notch areas)
- No horizontal scrolling on the main content — only on the category chips
- Budget progress ring never shows exact cents, round to nearest euro
```

**Tech-Block (für Code-Tools):**

```
TECHNICAL CONSTRAINTS:
- React Native / Expo styling conventions
- System font stack (SF Pro on iOS, Roboto on Android)
- Tabular number font feature: fontVariant: ['tabular-nums']
- FlatList for transaction list (not ScrollView) for virtualization
- Skeleton components as separate reusable primitives
```

---

### B2B Dashboard — Analytics Overview

**Kern:**

```
Design an analytics dashboard for "Nexus CRM", a B2B sales pipeline tool. Desktop primary viewport (1440x900).

CONTEXT:
Sales managers open this every Monday morning to prepare their weekly standup. Three questions to answer fast: "How is the pipeline? Which deals are at risk? What closed last week?"

VISUAL DIRECTION:
Data-dense but structured. Light neutral background (#F8FAFC). Left sidebar navigation (240px wide, collapsible to icon-only). Cards with subtle shadows. Accent: indigo (#4F46E5) for actions, amber (#F59E0B) for warnings, emerald (#10B981) for wins. Charts: minimal, no 3D, thin gridlines.

LAYOUT:
1. Left sidebar: logo top, nav items with icons (Dashboard active, Pipeline, Contacts, Reports, Settings), user avatar + name at bottom, collapse toggle
2. Top bar: page title "Dashboard" left, date range picker (7 / 30 / 90 days / custom) right, notification bell with badge
3. KPI row: 4 metric cards — Total Pipeline Value, Deals Won This Week, Avg Deal Size, Conversion Rate. Each: large number, trend arrow with % change (green up / red down), sparkline mini-chart
4. Main area 60/40 split:
   - Left 60%: Pipeline funnel (horizontal bars: Lead → Qualified → Proposal → Negotiation → Closed) with counts and values per stage
   - Right 40%: "At Risk Deals" table — 5 rows, columns: Deal Name, Value, Days Stuck, Owner. Red highlight on deals stuck >14 days.
5. Bottom: "Recently Closed" list — last 10 deals, compact rows, won/lost badge

BEHAVIOR:
- Table rows: hover highlight
- Sidebar collapses to icon-only on narrow viewports
- Empty state for "At Risk": illustration + "All clear — no deals at risk"
- Skeleton screens matching card/table layout during loading

GUARDRAILS:
- KPI cards always visible without scrolling on 1440px viewport
- Never truncate deal names in the risk table — allow 2-line wrap
- Funnel chart must show absolute numbers AND percentages, not just one
```

**Tech-Block (für Code-Tools):**

```
TECHNICAL CONSTRAINTS:
- React + Tailwind CSS + Recharts for charts
- Sidebar collapse: lg breakpoint and below → icon-only (64px)
- KPI sparklines: Recharts AreaChart, no axis labels, 48px height
- Table: @tanstack/react-table for sorting/filtering
- Skeleton: Tailwind animate-pulse on gray-200 backgrounds
```

---

## Einzelne Module

### Hero Section — Product Launch

**Kern:**

```
Design a hero section for "Draft", an AI writing tool. Full viewport height on desktop, stacked on mobile.

LAYOUT: Split — left 55% text, right 45% product visual.

LEFT SIDE:
- Eyebrow: small caps, muted, "NOW IN PUBLIC BETA"
- Headline: max 6 words, bold, large. Example: "Write less. Say more."
- Subheadline: 2 lines max, regular weight, muted gray
- CTA group: primary solid "Try Free" + secondary outline "Watch Demo" with play icon. Side by side on desktop, stacked full-width on mobile.
- Trust signal below CTAs: "No credit card required · 14-day trial · Cancel anytime" in small muted text

RIGHT SIDE:
- Browser mockup (realistic chrome: dots, address bar) showing the app editor
- Subtle slow floating animation (4s cycle, 8px vertical amplitude)
- On mobile: moves below text, max-width 90%, centered

STYLE: White background, single accent (#2563EB), generous vertical padding.

GUARDRAILS:
- No background images or gradients in the hero
- Headline hierarchy must work without color — mentally test in grayscale
- Floating animation: CSS only, no JS dependency
```

**Tech-Block:**

```
TECHNICAL:
- Tailwind py-24 desktop, py-16 mobile
- Headline: text-5xl lg:text-6xl font-bold tracking-tight
- Animation: @keyframes float with transform translateY
- Browser mockup: div with rounded-t-xl bg-gray-100 toolbar + content area
```

---

### Pricing Section — Three Tiers

**Kern:**

```
Design a pricing section with three tiers for a SaaS product.

TIERS:
- Starter: €0/month, individuals. 3 projects, 1GB, community support.
- Pro: €29/month, freelancers & small teams. Unlimited projects, 50GB, priority support, API access. RECOMMENDED.
- Business: €79/month, growing companies. Everything in Pro + SSO, audit logs, account manager, custom integrations.

LAYOUT:
Three cards side by side on desktop, stacked on mobile. Pro card elevated: slightly larger, accent-colored top border, "Most Popular" badge, stronger shadow than others.

PER CARD:
- Tier name (bold)
- Price: large number + "/month" in smaller text. Starter shows "Free" instead of €0.
- One-line audience description
- CTA: "Get Started" for Starter (outline), "Start Free Trial" for Pro (solid accent), "Contact Sales" for Business (outline)
- Feature checklist: 6–8 items with checkmark icon. Inherited features from lower tiers shown in muted text.

ABOVE CARDS: Annual/monthly toggle. Annual shows 20% discount with original price struck through.

BELOW CARDS: Single centered line: "All plans include: SSL, 99.9% uptime, GDPR compliance"

BEHAVIOR:
- Toggle switch animates prices: subtle crossfade, 150ms
- Cards have hover lift effect on desktop

GUARDRAILS:
- Never show €0 — always "Free"
- Pro card must be visually dominant without being garish
- Feature lists must align horizontally across cards so comparison is scannable
```

**Tech-Block:**

```
TECHNICAL:
- CSS Grid: grid-cols-1 md:grid-cols-3, gap-8
- Toggle: React state, prices interpolated from data object
- Pricing data as const array, not hardcoded per card
- Struck-through price: line-through decoration + text-gray-400
```

---

### Responsive Navigation Header

**Kern:**

```
Design a responsive header navigation for a multi-page marketing site.

DESKTOP (wide viewports):
- 64px height, white background, subtle 1px bottom border
- Left: logo. Center: 5 links — Products (dropdown), Solutions, Pricing, Resources, Company. Active: accent underline.
- Right: "Sign In" text + "Get Started" solid button
- On scroll >100px: sticky with backdrop blur, reduced to 56px

TABLET (medium viewports):
- Center links collapse into hamburger. "Get Started" button stays visible.

MOBILE (small viewports):
- Logo left, hamburger right
- Opens full-screen overlay, slide-down (300ms)
- Links stacked vertically, large tap targets (48px min)
- "Get Started" full-width at overlay bottom
- Close button (X) in same position as hamburger for muscle memory

DROPDOWN (Products):
- Desktop: mega-menu full-width panel, 3-column grid (icon + name + description)
- Mobile: accordion expand, indented

GUARDRAILS:
- Never hide the primary CTA button on any viewport
- Hamburger icon must have visible label ("Menu") on tablet, icon-only on mobile
- Dropdown must be keyboard-navigable (arrow keys + escape to close)
```

**Tech-Block:**

```
TECHNICAL:
- Tailwind: hidden lg:flex for desktop nav, lg:hidden for hamburger
- Mobile menu: CSS details/summary for no-JS fallback, JS enhancement for smooth animation
- Sticky: position sticky + backdrop-blur-md after scroll threshold
- Mega-menu: absolute positioned, full-width, z-50
```

---

### Sortierbare Daten-Tabelle

**Kern:**

```
Design a sortable data table showing team tasks in a project management tool.

COLUMNS: Task Name, Assignee (avatar + name), Status (To Do / In Progress / Review / Done), Priority (Low / Medium / High / Urgent), Due Date, Actions (kebab menu)

SAMPLE DATA (use these exact rows to test layout robustness):
- "Redesign onboarding flow for enterprise customers" — Anna M. — In Progress — High — Mar 28
- "Fix" — Tom K. — Done — Low — Mar 20
- "Quarterly OKR alignment workshop preparation and stakeholder communication" — Sarah L. — To Do — Urgent — Apr 2
- "API docs update" — [no assignee] — Review — Medium — Mar 30

BEHAVIOR:
- Column headers clickable for sort (asc/desc), arrow indicator
- Filter bar above: status multi-select, priority dropdown, assignee search, date range
- Active filters shown as removable pill chips
- Row hover: light background tint
- Status: colored dot + text (To Do gray, In Progress blue, Review amber, Done green)
- Priority: Urgent = red bold text
- Pagination: "Showing 1–20 of 147", prev/next, page pills

EMPTY STATE (when filters yield zero results):
Centered illustration + "No tasks match your filters" + "Clear all filters" link

GUARDRAILS:
- Table horizontal-scrolls on mobile with first column (Task Name) sticky
- Never truncate Status or Priority — enforce minimum column widths
- "Unassigned" placeholder for missing assignee, not empty cell
- Very long task names: allow 2-line wrap within row, don't truncate
```

**Tech-Block:**

```
TECHNICAL:
- @tanstack/react-table for sort/filter/pagination logic
- Tailwind: overflow-x-auto wrapper, sticky left-0 on first column
- Status dots: inline-flex items-center gap-2, dot as w-2 h-2 rounded-full
- Filter pills: flex flex-wrap gap-2, each pill with X button
```

---

## Zustände und Interaktionen

### Empty State — Erstes Onboarding

**Kern:**

```
Design an empty state for a project dashboard when a new user has zero projects.

CONTEXT: User just signed up, this is their first screen after onboarding. Goal: eliminate hesitation, get them to create their first project.

LAYOUT (centered, narrow max-width ~480px):
1. Illustration: simple abstract line drawing — empty canvas with subtle sparkle/cursor suggesting potential. Professional tone, no sad faces or cartoons.
2. Headline: "Your workspace is ready" — bold, prominent
3. Body: 2 lines max, framed as opportunity not absence. "Create your first project and invite your team to get started."
4. Primary CTA: "Create First Project" — large, solid accent, full width on mobile
5. Secondary: "Import from Asana" text link — smaller, muted
6. Help: "Not sure where to start? Read our 2-minute quickstart guide →" — small text, bottom

GUARDRAILS:
- Never phrase as absence: no "You have no projects yet"
- No overwhelming feature tours, modals, or tooltip cascades
- Maximum one primary CTA — don't compete for attention
- Illustration must work in both light and dark mode
```

---

### Error State — API Failure

**Kern:**

```
Design an error state that replaces a metric card when its API call fails.

REPLACES: A card normally showing "Monthly Revenue: €124,500"

LAYOUT (same dimensions as the normal card — no layout shift):
1. Amber warning icon (24px) top-left — not red, this is transient not catastrophic
2. Title stays: "Monthly Revenue" — same position, muted color
3. Value replaced with: "Unable to load" in muted text, same font size
4. Below: "Last updated 4 min ago" in small text
5. Bottom of card: "Retry" outline button + "View status page →" text link

BEHAVIOR:
- On retry success: smooth crossfade (200ms) back to normal state
- After 3 failed retries: message changes to "Service temporarily unavailable. We're on it." — hide retry button

GUARDRAILS:
- Card dimensions must not change between states
- No aggressive red — amber signals "temporary issue"
- Always show age of last cached data if available
```

---

### Multi-Step Checkout

**Kern:**

```
Design a 3-step checkout flow for a SaaS subscription signup.

STEPS: 1. Plan Selection → 2. Account Details → 3. Payment & Confirmation

STEP INDICATOR:
Horizontal stepper — three circles connected by lines. Current: accent fill + bold label. Completed: checkmark + green. Future: gray outline + muted. Clickable backward (never forward).

STEP 1 — PLAN SELECTION:
- Two plan cards side by side (Pro €29/mo, Business €79/mo), radio behavior
- Annual/monthly toggle (annual = 20% off, show savings "Save €69/year")
- "Continue" button, disabled until plan selected

STEP 2 — ACCOUNT DETAILS:
- Fields: Full Name, Work Email, Company Name (optional), Country dropdown with search
- Real-time validation: green checkmark on valid, red border + inline error on invalid
- Work email hint: if free provider domain (gmail, yahoo), show info tooltip recommending work email
- "Back" link left, "Continue" button right

STEP 3 — PAYMENT:
- Order summary sidebar (desktop) / accordion (mobile): plan, cycle, total, "Change plan" link
- Card input fields: number, expiry, CVC in single row
- Terms checkbox (required, linked)
- "Start Subscription" button — loading state with spinner + text "Processing..."
- Success: replace form with confirmation — checkmark animation, welcome message, "Go to Dashboard" button

BEHAVIOR:
- Steps feel like one page: slide-left transition (300ms) between steps
- Autofocus on first input of each step
- Tab-key navigation through all fields in logical order

GUARDRAILS:
- Never allow forward navigation by clicking step indicator
- Order summary always visible during step 3 — never hidden
- Error messages appear inline below fields, not as toast/banner
```

**Tech-Block:**

```
TECHNICAL:
- React with useState for step tracking, AnimatePresence for transitions
- Stripe Elements for payment fields (or placeholder div styled to match)
- Form validation: react-hook-form + zod schema
- Mobile: order summary as Radix Accordion component
- Step transitions: framer-motion slide variants, direction-aware
```

---

## Vibe-Modifikatoren

Zeigt, wie ein einziger Stil-Absatz denselben Inhalt komplett transformiert. Funktioniert in jedem Tool.

### Basis-Prompt (immer gleich):

```
Design a user profile card showing: avatar (64px circle), full name, job title, company, location, 3 stat counters (Projects, Reviews, Team Size), and a "Message" button.
```

### Variante: Neumorphism

```
STYLE: Neumorphism. No visible border. Background matches page (#E0E5EC). Depth through dual box-shadows: light top-left (white, -6px offset), dark bottom-right (#A3B1C6, 6px offset). Button: inset shadows for pressed state. Avatar: subtle inner shadow ring. All corners rounded 16px.
```

### Variante: Glassmorphism

```
STYLE: Glassmorphism on gradient background (deep purple to dark blue). Card: semi-transparent white (10% opacity), 16px backdrop blur, 1px white border at 20% opacity. Text: white. Stats: frosted pill badges. Button: solid white with dark text for contrast. Must pass WCAG AA contrast check.
```

### Variante: Brutalist

```
STYLE: Brutalist / Anti-design. Thick 3px solid black border, zero border-radius, zero shadows. Raw white background. Monospace font only (JetBrains Mono or Courier). All caps for name and stat labels. Button: black fill, white text, hard edges. Hover: instant color invert, no transition. No icons anywhere — text only.
```

### Variante: Bento-Box

```
STYLE: Bento-box grid. Break the profile into 5 sub-cells in a 3x2 grid: avatar (1x1 square), name+title (2x1), three stat cells (each 1x1), button cell (full bottom row 3x1). Each cell: white, heavily rounded corners (24px), 8px gap. Light gray page background. The grid composition IS the design — no decoration.
```

---

## Tipps zur Nutzung

- **Im Seminar:** Vibe-Modifikatoren live zeigen — derselbe Basis-Prompt, vier komplett verschiedene Ergebnisse. Stärkster Aha-Moment.
- **Zum Lernen:** Ganzseitige Prompts durchlesen, Struktur verinnerlichen. Dann eigene Projekte nach dem gleichen Schema aufbauen.
- **In der Praxis:** Kern-Block immer zuerst schreiben. Tech-Block erst anhängen, wenn klar ist, welches Tool zum Einsatz kommt.
- **Iteration:** Diese Prompts sind Startpunkte. Nach der ersten Generierung gezielt einzelne Sektionen per Diff-Editing anpassen, nie alles auf einmal neu generieren.

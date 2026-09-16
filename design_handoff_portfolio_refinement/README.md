# Handoff: Portfolio Refinement (Charles Roque)

## Overview
A visual refinement of the existing React + Vite + Tailwind portfolio at `CaelumIsMe/portfolio`.
Same content and personal branding, stronger presentation: React Bits **Aero Shards** background,
a portrait-card hero built around the supplied photo, a **Download Resume** primary CTA, a compressed
section order, and a side-by-side Specializations / Technologies block. The old "Technical Write-ups"
section is removed.

## About the Design Files
`Portfolio.dc.html` is a **design reference created in HTML** — a prototype showing intended look and
behavior, not production code to paste in. Recreate it inside the existing Vite + React + Tailwind v4
codebase using its established patterns (component files under `src/components/`, the `@theme` tokens
and `@utility` classes in `src/index.css`, lucide-react icons).

## Fidelity
**High-fidelity.** Colors, type, spacing and interactions are final. Match them.

## Section order (top to bottom)
1. Navbar (fixed)
2. Hero (`#hero`)
3. Mindset of a Defender (`#about`)
4. Selected Projects (`#projects`)
5. Deep Specializations + Technologies Used, side by side (`#specializations`, right column carries `#stack`)
6. Start a Conversation (`#contact`)
7. Footer

**Removed:** the Technical Write-ups section and its nav/footer links (nav item is now "Stack" → `#stack`).

## Screens / Views

### Navbar
Fixed, full width, `padding: 18px 0`, `background: rgba(0,0,0,0.86)`, `backdrop-filter: blur(20px)`,
`border-bottom: 1px solid rgba(220,38,38,0.2)`. Container max-width 1200px, 24px inline padding.
Logo `<Roque/>` at 22px/700, angle brackets `#dc2626`. Links 13.5px/500 `#a1a1aa` → `#fff` on hover,
`white-space: nowrap`. "Let's Talk" pill: 9px 22px, radius 999, `rgba(255,255,255,0.05)` on
`1px solid rgba(255,255,255,0.1)`, hover fills `#dc2626`.
Below 860px viewport width the links collapse to a hamburger (lucide `menu`/`x`) opening a
full-screen overlay (`rgba(0,0,0,0.97)`, blur 24px) with 30px/700 links.

### Hero
Two columns, `grid-template-columns: repeat(auto-fit, minmax(340px, 1fr))`, gap 36px,
section padding `104px 0 40px`.

Left column:
- Status pill: "Available for new projects", 12px/500 `#a1a1aa`, pinging 8px `#dc2626` dot.
- H1: `clamp(38px, 5.2vw, 72px)`, 700, `letter-spacing:-0.035em`, line-height 1.04 —
  "Securing the *Digital*" (italic `#dc2626`) / "Frontier."
- Paragraph: `clamp(16px,1.3vw,19px)`, `#a1a1aa`, max-width 34rem —
  "I'm **Charles Roque**, a DevOps Engineer and Full Stack Developer. I build resilient systems and hunt
  for vulnerabilities to make the web a safer place."
- Three CTAs, **identical geometry**: `flex: 0 1 232px; min-width: 232px; height: 50px; padding: 0 26px;
  border-radius: 999px; font-size:15px; font-weight:600; gap:10px`.
  1. **Download Resume** (primary) — `background:#dc2626`, border `#dc2626`, lucide `download`,
     `<a href="/resume.pdf" download>`. Hover: `box-shadow: 0 0 24px rgba(220,38,38,.45)` + `translateY(-2px)`.
  2. **Explore Work** → `#projects`, lucide `zap`, `rgba(255,255,255,0.05)` on `1px solid rgba(255,255,255,0.12)`.
  3. **Get in Touch** → `#contact`, lucide `message-circle`, same secondary styling.
  All: `active { transform: scale(.96) }`.
- Stats strip (4+ Years Experience / 50+ Bugs Found / 20+ Projects Built), 26px/700 numbers,
  11px uppercase `#71717a` labels, above a `1px solid rgba(255,255,255,0.07)` rule.

Right column — **portrait card**: `max-width:460px; aspect-ratio:4/5; border-radius:32px;
border:1px solid rgba(255,255,255,0.1); background: linear-gradient(160deg, rgba(39,39,42,0.55), rgba(0,0,0,0.65));
backdrop-filter: blur(14px)`. Inside: red radial glow (`rgba(220,38,38,0.32)`, blur 34px), 28px grid overlay
at `rgba(255,255,255,0.045)`, bottom black gradient, the cutout portrait pinned to the bottom at 96% height
with `drop-shadow(0 30px 60px rgba(0,0,0,.7))`, a top-left name chip (lucide `shield-check` + "CHARLES ROQUE",
JetBrains Mono 10.5px, letter-spacing .16em) and a bottom strip reading "DEVOPS ENGINEER" / "FULL STACK".
Card hover: `translateY(-6px)` + border `rgba(220,38,38,0.45)`.

### Mindset of a Defender (#about)
Centered eyebrow "Expertise & Philosophy" (JetBrains Mono 12px, letter-spacing .3em, `#dc2626`) and
H2 `clamp(28px,3.4vw,48px)` "Mindset of a **Defender.**".
Three cards, `repeat(auto-fit, minmax(260px,1fr))`, gap 14px, each `padding:24px; border-radius:20px;
background: rgba(24,24,27,0.5); backdrop-filter: blur(12px); border:1px solid rgba(255,255,255,0.06)`,
hover `translateY(-4px)` + border `rgba(220,38,38,0.5)`. Icon chip 12px padding, radius 14px,
`rgba(220,38,38,0.1)`, lucide icon 32px `#dc2626`.
1. **Security First** — "Building applications with security as a core principle, ensuring data integrity and user protection from the ground up." (lucide `shield`)
2. **Full Stack** — "Expertise in modern web technologies, from performant frontends to robust and scalable backend architectures." (lucide `code-2`)
3. **Robust and Scalable** — "Designing systems that hold up under load and keep growing — clean architecture, containerised delivery, and dependable pipelines." (lucide `terminal`)

Quote panel below: `padding: clamp(24px,3vw,40px); border-radius:26px; border:1px solid rgba(220,38,38,0.12)`,
centered, lucide `quote` mark, text `clamp(16px,1.4vw,20px)` `#d4d4d8`:
"I build backends that hold their shape under pressure and payment flows that settle every time — then I make
the pipeline that ships them boring, repeatable, and fast. Reliable processes are the product."

### Selected Projects (#projects)
Header row: eyebrow "Portfolio", H2 "Selected **Projects.**", right-aligned note
"A showcase of my recent work in web development, payment integration, and interactive platforms."
Grid `repeat(auto-fit, minmax(290px,1fr))`, gap 20px. Card: radius 28px, same glass fill,
hover `translateY(-6px)` + `box-shadow: 0 24px 60px rgba(0,0,0,.55)`. 16:9 image, category pill
(top-left, `rgba(0,0,0,0.6)`, 10px/700 uppercase, `white-space:nowrap`), hover-revealed round action
buttons bottom-right (white → `#dc2626` on hover). Body padding 22px; title 19px/700; body 14px `#a1a1aa`;
`#tag` chips in JetBrains Mono 11px above a `1px solid rgba(255,255,255,0.06)` rule.

Order and content:
1. **Orki** — category "Payments · SaaS", image `uploads/orki-cosedevs.png`, link https://orki.cosedevs.com.
   "An AI board exam companion for LEPT, CSE, PmLE and CLE — flashcards, mock exams, and progress tracking for
   500+ students. I own the money layer: a PayMongo checkout and subscription flow that has collected every peso
   it was asked to, without a single dropped payment."
   Tags: PayMongo, Subscriptions, Next.js, SaaS. (No GitHub icon — live product.)
2. **Sentinels: 2D Learning Platform** — category "Game Dev", image `public/projects/project2.png`.
   Original description unchanged. Tags: Unity, C#, Game Dev, Firebase. Shows the GitHub icon.
3. **ProSupport Squad** — category "Payments · Marketplace", image `uploads/prosupport-squad.png`,
   link https://prosupportsquad.com.
   "A US-facing marketplace to find, interview, hire, manage and pay virtual assistants. I built the backend —
   Stripe billing and Wise cross-border payouts that have yet to fail a transfer, part-time and full-time contract
   logic, scheduling, time tracking, and the cron jobs that keep it all settling on time — and managed the
   DigitalOcean server it runs on."
   Tags: Stripe, Wise, Laravel, DigitalOcean, Cron Jobs, Server Management.

Footer of the section: "View More on GitHub" secondary pill → https://github.com/CaelumIsMe.

### Deep Specializations + Technologies Used (#specializations / #stack)
One section, two columns: `repeat(auto-fit, minmax(340px,1fr))`, gap 32px, `align-items:start`.
Both columns use the same compact row: `padding:13px 16px; border-radius:14px; background: rgba(24,24,27,0.55);
border:1px solid rgba(255,255,255,0.07)`, hover `translateX(4px)` + border `rgba(220,38,38,0.5)`.
Row title 15px/600 white, description 13px/1.6 `#a1a1aa`, mono index 10px letter-spacing .2em.

Left — eyebrow "Focus Areas", H2 "Deep **Specializations.**", six rows (icon chip `rgba(220,38,38,0.12)`,
border `rgba(220,38,38,0.22)`, lucide 18px `#dc2626`):
01 Broken Access Control Mitigation (`key-round`) · 02 Data Privacy (`database`) · 03 Web App Security (`globe`) ·
04 Secure by Design (`lock`) · 05 API Security (`server`) · 06 Secure Payment Integration (`credit-card`).
Chip row below: OWASP Top 10, Threat Modeling, Authentication, Authorization, Input Validation, Session Management.

Right — eyebrow "Toolchain", H2 "Technologies **Used.**", grouped by label (JetBrains Mono 10px,
letter-spacing .26em, `#dc2626`, followed by a gradient hairline):
- **Backend**: 01 Python / Django, 02 Laravel, 03 Node.js
- **Frontend**: 04 Next.js
- **Tools & DevOps**: 05 Docker
Chip row below: CI/CD Pipelines, Containerisation, REST APIs, Relational Databases, Server-Side Rendering,
Queues & Background Jobs.

All chips: `padding:7px 14px; border-radius:999px; background: rgba(255,255,255,0.05);
border:1px solid rgba(255,255,255,0.1); font-family: JetBrains Mono; font-size:10.5px; white-space: nowrap`.

### Start a Conversation (#contact)
Unchanged copy and Formspree behavior from the original `ContactSection.jsx` (honeypot `_gotcha`,
status text "Sending..." / "Message Sent!" / "Error Sending"). Max-width 62rem, two columns gap 36px,
form card radius 28px, inputs `rgba(0,0,0,0.4)` with radius 14px and `focus` border `rgba(220,38,38,0.6)`.

### Footer
Wrapping flex row: brand block `flex: 2 1 320px`, "Navigation" `flex: 1 1 150px`, "Get In Touch" `flex: 1 1 250px`.
- Brand: `<Roque/>`, blurb "DevOps Engineer & Full Stack Developer dedicated to building resilient digital
  environments and profitable web solutions.", four social buttons (GitHub, LinkedIn, Facebook, Globe →
  cosedevs.com) as 12px-padded radius-14 tiles.
- Navigation: About, Projects, Stack, Contact.
- **Get In Touch** (replaces the old "Legal" column) — lucide `map-pin` "Bacolod City, Negros Occidental,
  Philippines", `mail` roque.josephcharles@gmail.com (mailto), `globe` "COS Devs" → https://cosedevs.com.
- Bottom bar: "© <year> Charles Roque. Crafted with passion & security." and a "BACK TO TOP" button
  (`white-space: nowrap`).

## Interactions & Behavior
- Smooth scroll, `scroll-padding-top: 5rem`; `#stack` has `scroll-margin-top: 96px`.
- Entrance: `fadeInUp` 0.7s ease-out with 0.15s staggering across hero elements.
- Hover transitions 0.3–0.4s; card lifts use `cubic-bezier(.22,1,.36,1)`.
- `@media (prefers-reduced-motion: reduce)` disables animations and shortens transitions to 1ms.
- Mobile menu state toggles at a 860px window-width breakpoint.

## State Management
- `isScrolled` (optional, original had it), `isMenuOpen`, contact form `formData` + `status`.
- Resume path and Formspree ID should be configuration, not hardcoded literals
  (`VITE_FORMSPREE_ID` already exists in the repo).

## Design Tokens
- `--color-primary: #dc2626`; background `#000000`; foreground `#ffffff`
- Text greys: `#d4d4d8`, `#a1a1aa`, `#71717a`, `#52525b`
- Surfaces: `rgba(24,24,27,0.5–0.55)` + `backdrop-filter: blur(12px)`; borders `rgba(255,255,255,0.06–0.12)`;
  accent border `rgba(220,38,38,0.2–0.55)`
- Radii: 14 / 16 / 20 / 22 / 26 / 28 / 32 / 999px
- Section rhythm: `padding: 40px 0`; container max-width 1200px, inline padding 24px
- Type: **Poppins** 300–700 (UI), **JetBrains Mono** 400–700 (eyebrows, chips, metadata)
- Sizes: H1 `clamp(38px,5.2vw,72px)`; H2 `clamp(28px,3.4vw,48px)` (side-by-side block `clamp(26px,2.6vw,36px)`);
  body 14–15px; meta 10–12px

## Assets
- `uploads/roque-profile.webp` — hero portrait (transparent cutout, supplied by the client)
- `uploads/orki-cosedevs.png`, `uploads/prosupport-squad.png` — project screenshots
- `public/projects/project2.png`, `public/icons/favicon.svg`, `public/logo/icon_me.png` — from the repo
- `aero-shards.js` — React Bits **Aero Shards**, converted to a browser module. In the real app install the
  component from React Bits (`npx shadcn@latest add https://reactbits.dev/r/AeroShards-JS-CSS`, dependency `vgpu`)
  and render it in place of `Background.jsx` with: backgroundColor `#000000`, shardColor `#b31c1c`,
  accentColor `#dc2626`, placement `full`, flow `stream`, material `glass`, detail `balanced`, density 1.3,
  speed 0.9, glow 1.15, bloom 0.45, grain 0.04, interaction `repel`. Keep the two overlays above it:
  a radial darkener `radial-gradient(ellipse 95% 70% at 50% 0%, rgba(0,0,0,0.04), rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.9))`
  and the 40px grid with a radial mask.
- Icons: **lucide** — download, zap, message-circle, shield-check, chevron-down, shield, code-2, terminal, quote,
  key-round, database, globe, lock, server, credit-card, github, external-link, arrow-right, mail, message-square,
  user, send, map-pin, linkedin, facebook, arrow-up, menu, x.
- **`/public/resume.pdf` does not exist yet** — drop the PDF there; the hero button already targets it.

## Files
- `Portfolio.dc.html` — the full design (markup + logic + data)
- `aero-shards.js` — background component build used by the prototype
- `github.md` — repo association and screen map

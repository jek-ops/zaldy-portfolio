# Zaldy Sabornay Jr — Digital Portfolio (build brief)

Personal portfolio website for Zaldy Sabornay Jr, built by Jay (Jaybaited) with Claude Code. It is a school requirement and Zaldy's first professional showcase, so it must look professionally made and follow HCI guidelines.
This file is the build brief. The approved design is in `design-reference/` (open `Main.dc.html` for the layout and `StyleGuide.dc.html` for the tokens). Match it. Where this brief and the mockup disagree, ask Jay.

## Stack and rules
- Next.js (App Router), TypeScript, Tailwind CSS. Static export friendly, no backend, no database, no contact form.
- Fonts through `next/font`: Space Grotesk (500, 600, 700) for headings, Inter (400, 500, 600) for body.
- Hosting: Vercel, in its own new public GitHub repo, separate from the capstone repo.
- Jay runs `git push`, deploys and installs. Claude may propose commits (plain one-line summary), never pushes or deploys.
- No secrets, no tracking scripts, no real data beyond what is written below.
- Plain English, short. Say what is confirmed and what is assumed. After each phase, give numbered manual checks; Jay replies Good or Needs revision.

## Privacy (hard rules)
- Never put Zaldy's phone number or home address anywhere: page, resume file, metadata, alt text or commits.
- Public contact is the email below only, and only if Zaldy agrees (Jay confirms before launch).
- Never use real student, school or client data. Project screenshots use mock data only.
- No fake testimonials, numbers, awards or download links. A missing item is a visible placeholder, never an invented one.

## Content (final copy, from his resume and Jay's notes)
- **Name:** Zaldy Sabornay Jr. **Monogram:** ZS. **Email:** zaldysabornay00@gmail.com
- **Rule (Jay, Nov 19):** Zaldy has school projects only (e-Borrow and SafeCheck-SignSpeak). No freelance work, no client sites, no "web developer" claims anywhere. His resume's freelance entry is not used.
- **Roles (Jay, Nov 19):** SafeCheck-SignSpeak = Documenter and QA Specialist (not UI/UX). e-Borrow = Documenter and UI/UX Designer. Never claim UI/UX design on SafeCheck-SignSpeak.
- **Hero:** pill "Documenter · QA Specialist · UI/UX Designer"; headline "I make projects clear, tested and easy to use." (last three words in the accent color); text "I am Zaldy, a documenter, QA specialist and UI/UX designer with an IT background from STI College. I write project documentation, test systems and design interfaces for team projects."
- **Hero buttons:** primary "View my projects" (to #projects); secondary "Download resume (PDF)" (file `public/zaldy-sabornay-resume.pdf`, edited from his original: phone, home address and freelance entry removed). His portrait (`public/images/zaldy-portrait.webp`) beside it. Small card on the photo: "Latest project / SafeCheck-SignSpeak / Documenter and QA Specialist".
- **Quick facts (3 tiles):** "2" team projects where I wrote the documentation; "1" capstone where I was also the QA specialist; "1" certification: Java Fundamentals (June 2024).
- **Skills (tabs):**
  - Documentation and QA: Technical Documentation, Quality Assurance (QA), Technical Support Knowledge, Basic Computer Troubleshooting
  - Design: UI/UX Design, Web Interface Design
  - Technical basics: Basic Programming, Database Handling (from his resume summary)
  - Working with people: Effective Communication (Verbal and Written), Active Listening, Time Management, Typing Speed and Accuracy
- **Projects (filters: All, Documentation, QA testing, UI/UX design):** two cards side by side on desktop, each with its landing-page screenshot on top (images in `public/images/projects/`, cropped to the page only: no browser bars, bookmarks or window controls).
  1. SafeCheck-SignSpeak (featured badge, screenshot of its landing page). "Capstone project · Documenter and QA Specialist · 2025 to 2026" (years confirmed by Jay). Filipino Sign Language recognition and RFID gate attendance for a school for the deaf. "I wrote the project documentation and tested the system as part of a team." Tags: Documentation, QA Testing. Filters: docs, qa.
  2. e-Borrow Web System. "Documenter and UI/UX Designer · 2024 to 2025". A responsive web system for borrowing barangay equipment (tables, chairs, sound systems), built for Barangay Alabang. "I wrote the documentation and was the UI/UX designer on the team." Tags: Documentation, UI/UX Design. Filters: docs, design. Screenshot of its home page.
  - Landing-page screenshots only: Jay cannot access either project to take more (no copy of them), so there are no second-screenshot slots.
  - Each card links to its own case-study page (problem, his role, tools, what he made, screenshots, what he learned). Case-study text is TBD from Zaldy; build the pages with clearly marked placeholders.
- **Journey (year buttons 2023 to 2026, default 2026):**
  - 2023: Started BSIT at STI College. He graduated from Tunasan National High School and started his BS in Information Technology at STI College.
  - 2024: First web system and a Java certification. Java Fundamentals in June; documenter and UI/UX designer on e-Borrow.
  - 2025: The capstone. Joined SafeCheck-SignSpeak as documenter and QA specialist.
  - 2026: Capstone defense. Presents SafeCheck-SignSpeak at its defense in December.
- **Career goals (3 numbered cards):** Next step, In a few years, Learning now. Drafted by Claude at Jay's request (see `lib/content.ts`); Zaldy should read and edit them.
- **Contact band (dark):** "Let us build something useful together." Email button, "Copy email" button (label changes to "Copied" for 2 seconds), GitHub link (https://github.com/jek-ops) only; Zaldy has no LinkedIn, so show none, and the sentence "I usually reply within ..." only once Zaldy gives a time (`CONTACT.replyTime` in `lib/content.ts`; hidden while null). Footer: "© 2026 Zaldy Sabornay Jr · Built with Next.js and Tailwind CSS" and a Back to top link.

## Placeholders still needed from Zaldy
Reply time; case-study text for both projects (problem, role detail, tools, what he made, what he learned); Zaldy's OK to publish his portrait and his email; his review of the drafted career goals; confirm education wording (his resume says he completed up to 2nd year, 2023 to 2025, so do not call him a current student until he confirms).

## Design tokens ("Clear Blueprint")
CSS variables on a theme class; light is the default; dark switches by a toggle and remembers the choice (try/catch around localStorage; also respect `prefers-color-scheme` on first visit).

| Token | Light | Dark |
|---|---|---|
| bg | #F8FAFC | #0B1220 |
| surface | #FFFFFF | #131C31 |
| surface2 | #F1F5F9 | #1B2640 |
| ink | #0F172A | #F1F5F9 |
| muted | #475569 | #B4C0D3 |
| line | #E2E8F0 | #27344F |
| line2 | #64748B (was #94A3B8, 2.45:1 on bg; darkened in phase 2 to pass 3:1 for control outlines) | #64748B |
| accent (blue, default) | #1D4ED8 | #8AB0FF |
| text on accent | #FFFFFF | #0B1220 |
| focus ring | #B45309 | #FBBF24 |
| contact band | #0F172A | #131C31 |

Alternate accents (keep as a config constant, not a user control): teal #0F766E / #5EEAD4, violet #6D28D9 / #C4B5FD.
- Type: H1 Space Grotesk 700, clamp(38px, 5.4vw, 64px), line height 1.05; H2 36px; H3 24 to 30px; body Inter 16px, line height 1.6; eyebrow labels 14px, semibold, uppercase, 0.08em tracking.
- Shape: buttons 8 to 10px radius; cards 16 to 18px; pills fully round; 1px borders; soft shadow only on hover.
- Spacing in steps of 8px. Max content width 1120px with 24px side padding. Section padding about 72px.
- Hero background: faint 32px blueprint grid (1px lines at 6% ink).

## Interactions to build
- Header with anchor links, sticky only on screens 1024px and wider (on phones it wraps to 160px and scrolls away; phase 4 decision), Dark mode toggle button (`aria-pressed`), Contact button.
- Skill tabs: one category shown at a time; selected tab filled with accent; list is `aria-live="polite"`.
- Project filter pills with a live count "Showing X of 3 projects".
- Journey year buttons showing one card at a time.
- Copy-email button using the Clipboard API, with a fallback message if it fails.
- Hover: cards lift 4px and get an accent border; buttons rise 2px. Motion 0.15 to 0.3s.
- Smooth scrolling, with `scroll-margin-top` so the sticky header never hides a heading.
- Motion effects added at Jay's request (Nov 19), all decorative and all off under `prefers-reduced-motion`: cursor trail in the hero (`components/HeroTrail.tsx`, canvas behind the text, mouse or pen only, aria-hidden, never blocks clicks); sections and cards fade up on scroll (`data-reveal` + `components/ScrollReveal.tsx`; hidden only while JavaScript runs, with a 3-second failsafe in `layout.tsx`); staggered hero entrance (pure CSS via `data-enter`, no JavaScript; never hide above-the-fold content with the scroll-reveal script: that delayed the largest paint to about 3.3s on simulated slow mobile, versus about 1.4s with CSS only); soft 3D tilt on the portrait (`PortraitTilt.tsx`); thin scroll-progress bar (`ScrollProgress.tsx`); the nav link for the section being read gets an accent underline and `aria-current="location"` (`NavLinks.tsx`).
- Note: Windows can report "reduce motion" to browsers when "Animation effects" is off (Settings, Accessibility, Visual effects). On such a PC none of the effects show, by design.
- All motion off under `prefers-reduced-motion`.
- Filters, tabs and year buttons must also work without a mouse, and the state must be visible (not color alone).

## HCI and quality requirements (the page is not done until these pass)
- Contrast: body and secondary text at least 4.5:1 in both themes (measure the real ratios with a tool; the mockup's colors were chosen for these targets but not measured); large text at least 3:1.
- Every control is a real `<button>` or `<a href>`; touch targets at least 44px; visible focus ring on everything focusable; logical tab order; skip-to-content link.
- Links are underlined in body content; selected state never relies on color alone.
- Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`), one `h1`, headings in order, descriptive `alt` text or `alt=""` for decoration.
- Responsive from 320px to 1440px with no sideways scroll; layout stacks on phones; test at 320, 390, 768 and 1280.
- Performance: use `next/image`, no layout shift, Lighthouse accessibility 95 or more and performance 90 or more on mobile (report the real numbers).
- Page title, meta description and a link-preview image (Open Graph) that do not contain his phone or address.
- Custom 404 page.

## Build phases
1. **Scaffold:** new repo, Next.js + TypeScript + Tailwind, fonts, theme tokens, dark mode with saved choice, layout shell, header and footer.
2. **Home page:** hero, quick facts, skills tabs, projects with filters, journey, goals, contact band, all content from this file.
3. **Case studies:** one route per project with the shared outline and placeholders; wire the card links.
4. **Polish:** accessibility audit (keyboard pass, contrast, screen-reader check on the headings), phone check, performance numbers, Open Graph image, 404, proofreading.
5. **Deploy:** Jay pushes and connects Vercel; then add the live link to Zaldy's resume.
After each phase: `npx tsc --noEmit` and `next build`, report the real output, then numbered manual checks.

## Out of scope
Contact form, backend, login, blog, analytics, animations beyond those listed, any content not listed here.

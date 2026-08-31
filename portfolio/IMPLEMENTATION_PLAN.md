# Portfolio Improvement Tracker

This file is the persistent source of truth for the ongoing portfolio overhaul. Re-read it before resuming work after a context compaction or interruption.

## Goal

Make the portfolio feel polished and credible across desktop and mobile while improving accessibility, discoverability, performance, and maintainability.

## Audit baseline — 2026-08-31

- Production build and ESLint pass.
- Desktop experience is visually coherent and has no observed broken images or console errors.
- Mobile has horizontal overflow, a compressed alternating timeline, and fixed-navigation anchor offset problems.
- The single client-rendered page eagerly includes motion and the PDF viewer, resulting in a 261 kB first-load JavaScript estimate.

## Implementation stages

### 1. Foundation and shared design

- [x] Add semantic site metadata, sitemap, robots configuration, and structured person data.
- [x] Consolidate global styles, theme behavior, focus states, motion preferences, and pointer behavior.
- [x] Add a reusable section heading and accessible navigation primitives.

### 2. Responsive experience

- [x] Eliminate horizontal overflow.
- [x] Add fixed-navigation anchor offsets and URL hash updates.
- [x] Build a single-column mobile timeline from the typed timeline data.
- [x] Make video embeds maintain a 16:9 ratio at every viewport.
- [x] Improve small-screen text alignment and spacing.

### 3. Content and page architecture

- [x] Split the home page into focused section components.
- [x] Keep static content server-rendered; isolate interactive behavior to client components.
- [x] Replace raw HTML feature strings with structured JSX data.
- [x] Sharpen hero positioning with a focused research-and-builder message.

### 4. Resume and performance

- [x] Lazy-load the resume viewer and align the PDF.js worker version locally.
- [x] Provide a useful lightweight resume loading/fallback state.
- [x] Keep heavy media from affecting initial rendering.

### 5. Project hygiene

- [x] Remove duplicate/stale configuration and assets.
- [x] Align PDF dependencies and remove redundant type packages.
- [x] Refresh project documentation to match the implemented product and deployment path.

### 6. Verification and delivery

- [x] Check desktop and mobile layouts, keyboard behavior, and navigation.
- [x] Run final lint and production build.
- [x] Create small, descriptive Git commits.
- [ ] Confirm the GitHub Pages deployment trigger requirement: commits must be pushed to `main`.

## Progress log

- 2026-08-31: Audit completed; implementation started.
- 2026-08-31: Responsive, accessibility, metadata, content, and performance improvements implemented. Final checks passed: lint, static build, mobile overflow/navigation/theme controls, resume preview, and zero fresh browser warnings.
- 2026-08-31: Feature implementation committed as `ffe13e1`.
- 2026-08-31: Removed the hero impact-card strip and custom cursor in favor of a simpler first viewport and the standard system cursor.

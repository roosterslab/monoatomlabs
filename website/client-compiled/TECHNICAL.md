# Monoatom Labs Website — Technical Deep Dive (Client Delivery)

## Goals of This Delivery

- Keep core React page/source code in compiled bundles (no readable JSX pages in the client package).
- Still allow safe, client-editable customization for:
  - calculators (ranges/defaults/constants)
  - website copy (titles, subtitles, paragraphs, lists, CTA labels) via per-page files

## What Is In The Package

`client-compiled/website/` contains:

- `packages/`: compiled library bundles (minified)
  - `@monoatom/pages`, `@monoatom/sections`, `@monoatom/calculators`, `@monoatom/ui`, `@monoatom/backgrounds`
- `src/`: small editable shell
  - routing + shims
  - `src/presentation/**` and `src/data/**` are the client-editable content layer
- `public/`: editable runtime overrides and static assets

## How "No Page Source" Works

The proprietary Tailwind-heavy implementation lives inside compiled bundles (`packages/**`).

The client-editable layer is:`src/presentation/**` + `src/data/**`.

For compatibility, `src/pages/**` modules in the client package are tiny shims that re-export the presentation pages.

## Runtime Overrides (Editable Without Proprietary Source)

### Calculator Overrides

File:

- `website/public/calculator-overrides.js`

Mechanism:

- This script runs before React boots.
- It sets `window.__MONOATOM_CALC_OVERRIDES__`.
- The calculator config/data modules merge these overrides with defaults at runtime.

### Website Copy / Content

Edit the presentation-layer sources in:`website/src/presentation/**` and `website/src/data/**`.

## Why We Can't "Remove Tailwind" But Keep The Same Styling

Tailwind is not a separate “theme file” — it works by attaching class names in the markup (e.g. `class="text-xl text-gray-300"`).
The compiled CSS contains rules that **target those class names**.

So if you remove Tailwind classes from the page markup, the compiled CSS no longer matches, and the page becomes unstyled.

Similarly, if you want “page source” but “no React code”, you must switch to a different rendering model (static HTML templates, CMS, or server rendering), which is a larger architectural change.

## Practical Options (Pick What You Want)

1) **Current model (recommended)**
  - proprietary UI stays compiled (Tailwind-heavy)
  - client edits `src/presentation/**` + `src/data/**`

2) **Ship full UI/page source**
  - client can edit everything
  - proprietary layout/UI is no longer secret

3) **HTML-based content blocks per page** (bigger refactor)
   - keep React pages compiled
   - client edits `.html` content blocks (no Tailwind classes inside)
   - the app injects those blocks into the UI
   - requires careful constraints (layout control, XSS safety, and stable schemas)

If you tell us which option you want, we can align the delivery structure accordingly.

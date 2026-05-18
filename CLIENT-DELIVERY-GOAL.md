# Client Delivery Goal (Layered Architecture)

Date: 2026-03-24

## The Goal

Deliver a **client-editable package** where:

- The client can change **all website text/copy** (per page, not one big file).
- The client can optionally control **page structure** by composing prebuilt sections (without copying Tailwind-heavy source).
- The client **does not receive readable Tailwind-heavy JSX** or IP-heavy UI implementation.

This is achieved by splitting the website into **two layers**:

## Layer A — Compiled Layer (IP / Tailwind-heavy)

**What it contains**

- All Tailwind-heavy components and custom UI “magic”.
- Design-heavy layout, branding, and section implementations.
- Any internal composition logic, animations, and UI behaviors.

**How it is shipped**

- As compiled/minified Vite library packages inside:
  - `client-compiled/website/packages/*`
- Examples:
  - `@monoatom/shell` (layout, logo)
  - `@monoatom/sections` (page sections)
  - `@monoatom/pages` (full pages)

**Rule**

- Anything that contains Tailwind class strings (e.g. `className="..."`) should live here.

## Layer B — Uncompiled Client Layer (Tailwind-free React)

**What it contains**

- Small React components/pages that only:
  - import compiled components
  - pass **props**
  - render **component tags**
- No Tailwind classes in this layer.

**Where it lives in the client package**

- `client-compiled/website/src/**`

**Rule**

- This layer should be readable, safe to share, and flexible.
- It should never include Tailwind class strings.

## Copy / Text Editing (Per-page)

**Where copy is edited**

- `client-compiled/website/public/page-content/*.js`

**Rule**

- There must be one file per page key (example: `about.js`, `home.js`, `contact.js`).
- No single “all copy” file.

**Mechanism**

- Each file populates `window.__MONOATOM_PAGE_CONTENT__` before React boots.
- Compiled components and/or wrappers read it via a helper like:
  - `getPageContent(pageKey, defaults)`

## Page Flexibility Strategy

We support two modes per page:

### Mode 1 — Fully compiled page

- `client-compiled/website/src/pages/About.jsx` is a shim:
  - `export { AboutPage as default } from '@monoatom/pages'`
- Client can change *text* via `public/page-content/about.js`.
- Client cannot restructure the page unless we expose more config.

### Mode 2 — Thin wrapper page (recommended for flexibility)

- `client-compiled/website/src/pages/About.jsx` is a Tailwind-free wrapper:
  - imports compiled section components from `@monoatom/sections`
  - passes `copy` props read from `public/page-content/about.js`
- Client can:
  - change all text (copy)
  - reorder/enable/disable prebuilt sections (if we expose a `sections` list)
  - tweak section props (only those we choose to expose)

**Key principle**

- Flexibility comes from **many small compiled components** (sections/blocks), each with **well-defined props**, and a simple uncompiled wrapper that composes them.

## What “Done” Looks Like

For each page:

- There exists a corresponding per-page file in:
  - `public/page-content/<page>.js`
- All visible strings used by that page/its sections are sourced from that page-content object (or defaults).
- Any Tailwind-heavy JSX is not shipped as readable source in the client package.

## Implementation Notes / Constraints

- Browser JavaScript cannot be truly hidden; “compiled/minified” reduces readability but doesn’t make code unrecoverable.
- If a component uses Tailwind class names, its markup must stay in the compiled layer; otherwise the CSS won’t match.

## Next Step Template (How we scale this to all pages)

1. Pick a page.
2. Split it into multiple Tailwind-heavy **section components** in compiled bundles.
3. Refactor each section to accept a `copy` prop (all strings come from it).
4. Create/expand `public/page-content/<page>.js` to provide that copy.
5. Generate a Tailwind-free wrapper page in `client-compiled/website/src/pages/<Page>.jsx` that composes those sections.

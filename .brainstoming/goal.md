# Goal — Client-Editable Text + Compiled UI (No Tailwind Source)

Date: 2026-03-24

## Objective

Ship a **client delivery package** where:

- Client can edit **all text/copy** on the website.
- Copy is **per-page**, not a single mega file.
- Client can update content **without getting Tailwind-heavy JSX source**.
- All design/IP heavy code (Tailwind classes, animations, layout styling) stays **compiled**.

## Architecture (Two Layers)

### 1) Compiled layer (IP + Tailwind-heavy)

Contains:

- Tailwind-heavy JSX (`className="..."` everywhere)
- Custom UI logic, animations, layout/branding
- Page sections / blocks that produce the final look

Shipped as compiled packages:

- `client-compiled/website/packages/*`
- Examples: `@monoatom/shell`, `@monoatom/sections`, `@monoatom/pages`

Rule:

- If it has Tailwind class strings, it must live in the compiled layer.

### 2) Uncompiled layer (client-visible React, Tailwind-free)

Contains:

- Thin React wrappers/HOCs that only:
  - import compiled components
  - render component tags
  - pass props (especially `copy`)
- **No Tailwind classes** in this layer.

Lives in:

- `client-compiled/website/src/**`

Rule:

- This is the only “page source” the client sees.
- It should be safe to share and flexible for client changes.

## Copy/Text Editing (Per Page)

Client edits:

- `client-compiled/website/public/page-content/<page>.js`

Mechanism:

- These scripts set `window.__MONOATOM_PAGE_CONTENT__` before React boots.
- Pages/sections read it via `getPageContent(pageKey, defaults)`.

Rule:

- Every page must have its own content file (example: `about.js`, `home.js`, `contact.js`).

## How a Page Should Work

For each page we want flexibility on:

- Compiled layer provides many small components (per page):
  - `AboutHeaderSection`, `AboutKeyMetricsSection`, `AboutLeadershipSection`, etc.
  - Each accepts props like `copy`, `items`, `cta`, etc.

- Uncompiled layer composes them with NO Tailwind:
  - `src/pages/About.jsx` imports compiled sections
  - loads `copy = getPageContent('about')`
  - returns `<AboutHeader copy={copy.header} />`, `<AboutLeadership copy={copy.leadership} />`, etc.

## Definition of Done

A page is “done” when:

- All visible strings are controlled by `public/page-content/<page>.js`.
- The client package contains no readable Tailwind-heavy JSX for that page.
- The client can change text and basic structure by editing only:
  - `public/page-content/<page>.js`
  - (optionally) the Tailwind-free wrapper `src/pages/<Page>.jsx`

## Scaling Plan (repeat for every page)

1. Break the page into multiple **compiled** sections.
2. Refactor each section to accept `copy` props for every string.
3. Add/expand `public/page-content/<page>.js` to supply all copy fields.
4. Ensure client delivery ships only:
   - compiled sections
   - Tailwind-free wrappers
   - per-page content files

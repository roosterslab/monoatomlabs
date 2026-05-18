# Monoatom Labs — Client Delivery Package

For a deep dive (architecture, what is editable, and why), see `TECHNICAL.md`.

## Delivery

Zip the `client-compiled/` folder and send it to the client.

When zipping, exclude `website/node_modules/` — the client should run `npm install` after unzipping.

```
client-compiled/
├── README.md
└── website/
    ├── packages/           # compiled bundles (do not edit)
    ├── src/                # limited editable source (layout, routing shims)
    ├── public/             # editable runtime overrides and static assets
    ├── package.json
    └── ...
```

## Getting Started (client)

```bash
cd website
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
```

## Calculator Changes (without source access)

Edit:

- `website/public/calculator-overrides.js`

This file is loaded before the app and can override:

- Slider/select ranges and defaults (`defaultInputs`, `secondaryInputs`)
- Key numeric assumptions used in calculations (`constants`)

Example:

```js
window.__MONOATOM_CALC_OVERRIDES__ = {
  'graphacrete': {
    constants: { additivePricePerLitre: 250, co2KgPerKgCement: 0.92 },
    defaultInputs: { cementPrice: { default: 330, min: 280, max: 380 } },
  },
};
```

## Website Text Changes (presentation layer)

Edit the semantic presentation layer (no Tailwind required):

- `website/src/presentation/pages/**`
- `website/src/data/**`

These files are shipped as readable source specifically so you can update copy and structured content without needing access to the proprietary Tailwind-heavy UI implementation.

## What NOT to Edit

Do not modify `website/packages/` — those files are compiled/minified and changes will be overwritten.

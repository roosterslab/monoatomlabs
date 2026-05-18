// Runtime calculator overrides (client-editable)
//
// This file is loaded before the React app (see index.html).
// The site reads these values at runtime to override calculator defaults
// without needing access to the underlying calculator source.
//
// Keys are normalized to kebab-case, e.g.
//   Graphacrete -> "graphacrete"
//   HD-G-PE     -> "hd-g-pe"
//
// Supported override sections (per calculator):
// - defaultInputs: override slider/select config (min/max/default/label/etc)
// - secondaryInputs: same as above
// - constants: override calculation constants (numbers/objects)
//
// Example (uncomment and edit):
// window.__MONOATOM_CALC_OVERRIDES__ = {
//   'graphacrete': {
//     constants: {
//       additivePricePerLitre: 250,
//       co2KgPerKgCement: 0.92,
//     },
//     defaultInputs: {
//       cementPrice: { default: 330, min: 280, max: 380 },
//       cementReductionPct: { default: 18 },
//     },
//   },
// };

window.__MONOATOM_CALC_OVERRIDES__ = window.__MONOATOM_CALC_OVERRIDES__ || {};

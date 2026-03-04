# Monoatom Labs Brand Logo

Official brand logo with mathematically locked proportions for consistent branding across all deployments.

## Overview

The Monoatom Labs logo is a **locked brand identity system** where all elements maintain perfect proportional relationships regardless of size. This ensures consistent branding across different platforms, devices, and use cases.

## Quick Start

### Single Control Point

Change **ONE variable** to scale the entire logo:

```css
--logo-base-size: 120px;  /* Change this value only */
```

### Deployment Sizes

Common deployment sizes:

- **Small**: `60px` - Favicons, small UI elements
- **Medium**: `100px` - Navigation bars, headers
- **Default**: `120px` - Standard web use
- **Large**: `160px` - Hero sections, landing pages
- **X-Large**: `200px` - Marketing materials, presentations

## How It Works

### Mathematical Lock System

Every element is calculated from the base size using fixed ratios:

```css
/* All formulas in :root */
--logo-icon-width: calc(2.67 * var(--logo-base-size));      /* Icon = 2.67× base */
--logo-gap: calc(0.08 * var(--logo-base-size));             /* Gap = 0.08× base */
--text-main-size: calc(1.1 * var(--logo-base-size));        /* MONOATOM = 1.1× base */
--text-sub-size: calc(0.88 * var(--logo-base-size));        /* LABS = 0.88× base */
--logo-translate-x: calc(0.42 * var(--logo-base-size));     /* X position = 0.42× base */
--logo-translate-y: calc(0.17 * var(--logo-base-size));     /* Y position = 0.17× base */
```

### What Scales Together

✓ Logo icon size
✓ MONOATOM text size
✓ LABS text size
✓ Spacing between elements
✓ Positioning adjustments
✓ All margins and transforms

## Files

```
branding/
├── logo.html           # Light version (black on white)
├── logo-dark.html      # Dark version (white on black) - Coming soon
├── file.svg            # Original logo icon
├── logo-text.html      # Original text-only version
└── README.md           # This file
```

## Usage

### Standard Implementation

1. Open `logo.html` in a browser
2. Use the slider to test different sizes
3. Set your desired `--logo-base-size` value
4. Remove the slider for production (optional)

### Remove Slider for Production

Delete these sections from `logo.html`:

1. **CSS** (lines with `.size-controller`)
2. **HTML** (the `<div class="size-controller">` block)
3. **JavaScript** (the `<script>` block at the end)

### Embed in Your Application

```html
<!-- Option 1: Iframe -->
<iframe src="logo.html" width="400" height="200" frameborder="0"></iframe>

<!-- Option 2: Copy the SVG + HTML structure -->
<!-- Copy the .complete-logo section and all required CSS -->
```

### Customize Size Programmatically

```javascript
// Set size via JavaScript
document.documentElement.style.setProperty('--logo-base-size', '180px');
```

## Brand Lock Verification

Use the built-in slider to verify proportional scaling:

1. Open `logo.html`
2. Move the slider from minimum (40px) to maximum (300px)
3. Observe that all elements maintain perfect proportions
4. Icon, text, and spacing scale together harmoniously

## Technical Specifications

### Locked Proportions

| Element | Formula | Ratio |
|---------|---------|-------|
| Logo Icon Width | `2.67 × base` | 2.67:1 |
| MONOATOM Text | `1.1 × base` | 1.1:1 |
| LABS Text | `0.88 × base` | 0.88:1 |
| Icon-Text Gap | `0.08 × base` | 0.08:1 |
| Horizontal Offset | `0.42 × base` | 0.42:1 |
| Vertical Offset | `0.17 × base` | 0.17:1 |
| Left Margin | `0.17 × base` | 0.17:1 |

### Fonts

- **MONOATOM**: Fabrikat Kompakt Bold
- **LABS**: Electrum Base Regular

Font files required:
- `FabrikatKompakt-Bold.woff2`
- `FabrikatKompakt-Bold.woff`
- `ElectrumBase-Regular.woff2`
- `ElectrumBase-Regular.woff`

### Colors

#### Light Version (logo.html)
- Background: `#ffffff` (white)
- Text/Icon: `#000000` (black)

#### Dark Version (logo-dark.html)
- Background: `#000000` (black)
- Text/Icon: `#ffffff` (white)

## Examples

### Example 1: Small Navigation Logo
```css
:root {
    --logo-base-size: 80px;
}
```

### Example 2: Hero Section Logo
```css
:root {
    --logo-base-size: 200px;
}
```

### Example 3: Responsive Logo
```css
:root {
    --logo-base-size: clamp(60px, 10vw, 180px);
}
```

## Best Practices

### ✓ DO
- Change only `--logo-base-size` for scaling
- Use standard deployment sizes (60px, 100px, 120px, 160px, 200px)
- Test with the slider before deploying
- Maintain minimum size of 40px for readability
- Respect the locked proportions

### ✗ DON'T
- Modify individual formula ratios (breaks brand lock)
- Scale icon and text independently
- Change spacing values directly
- Use sizes below 40px (readability issues)
- Distort aspect ratios

## Troubleshooting

### Logo appears too small/large
→ Adjust `--logo-base-size` value

### Elements don't scale together
→ Verify all formulas use `calc(ratio * var(--logo-base-size))`

### Fonts not loading
→ Ensure font files are in the same directory as HTML file

### Logo overlaps on mobile
→ Use responsive base size: `clamp(60px, 8vw, 120px)`

## Support

For questions or issues with the brand logo system:
- Review this README
- Test with the built-in slider
- Verify all formulas are intact
- Check browser console for errors

## License

© 2026 Monoatom Labs. All rights reserved.

---

**Version**: 1.0 (Locked Configuration)
**Last Updated**: 2026-02-13
**Status**: ✓ Production Ready

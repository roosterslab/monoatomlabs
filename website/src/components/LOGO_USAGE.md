# Monoatom Labs Logo Component

Official React component for the Monoatom Labs logo, based on the branding guidelines with locked proportions.

## Installation

The component is already available in your project. Import it from:

```javascript
import Logo from './components/Logo';
// or
import { Logo } from './components';
```

## Basic Usage

### Default (Medium, Light Theme)
```jsx
<Logo />
```

### Size Variations
```jsx
{/* Predefined sizes */}
<Logo size="small" />    {/* 80px base */}
<Logo size="medium" />   {/* 120px base - default */}
<Logo size="large" />    {/* 160px base */}
<Logo size="xlarge" />   {/* 200px base */}

{/* Custom size */}
<Logo size={150} />      {/* Custom 150px base */}
```

### Theme Variations
```jsx
{/* Light theme - black on transparent (default) */}
<Logo theme="light" />

{/* Dark theme - white on transparent */}
<Logo theme="dark" />
```

### Component Parts
```jsx
{/* Show only icon */}
<Logo showText={false} showIcon={true} />

{/* Show only text */}
<Logo showIcon={false} showText={true} />

{/* Show both (default) */}
<Logo showIcon={true} showText={true} />
```

### With Additional Styling
```jsx
<Logo className="my-custom-class hover:opacity-80 transition-opacity" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `string` \| `number` | `'medium'` | Logo size: `'small'`, `'medium'`, `'large'`, `'xlarge'`, or custom number in px |
| `theme` | `string` | `'light'` | Color theme: `'light'` (black) or `'dark'` (white) |
| `className` | `string` | `''` | Additional CSS classes |
| `showText` | `boolean` | `true` | Whether to show the text portion (MONOATOM LABS) |
| `showIcon` | `boolean` | `true` | Whether to show the icon portion (hexagon symbol) |

## Real-World Examples

### Navbar Logo
```jsx
// In Navbar.jsx
<Link to="/">
    <Logo size="small" theme="dark" className="hover:opacity-80 transition-opacity" />
</Link>
```

### Footer Logo
```jsx
// In Footer.jsx
<Logo size="medium" theme="dark" />
```

### Hero Section
```jsx
// In Hero.jsx
<Logo size="xlarge" theme="light" />
```

### Loading Screen
```jsx
// In Loading.jsx
<div className="flex items-center justify-center min-h-screen">
    <Logo size={200} className="animate-pulse" />
</div>
```

### Favicon/Icon Only
```jsx
// For small spaces
<Logo size="small" showText={false} />
```

### Email Signature
```jsx
// For email signatures (custom size)
<Logo size={100} theme="light" />
```

## Sizing Explanation

All proportions are locked and relative to the base size:

- **Icon Width**: `baseSize × 2.67`
- **Main Text (MONOATOM)**: `baseSize × 1.1`
- **Sub Text (LABS)**: `baseSize × 0.88`
- **Spacing & Positioning**: Automatically calculated

This ensures perfect proportions at any size.

## Responsive Design

The component is optimized for responsive layouts:

```jsx
{/* Responsive sizing with Tailwind */}
<Logo
    size={window.innerWidth < 768 ? 'small' : 'medium'}
    theme="dark"
/>

{/* Or use CSS custom properties */}
<div className="logo-container">
    <Logo size="medium" />
</div>
```

## Accessibility

The component includes proper ARIA labels:
- `role="banner"` on container
- `role="img"` on SVG
- `aria-label` for screen readers

## Notes

- The logo uses custom fonts (Fabrikat Kompakt and Electrum Base). Make sure these are loaded in your project.
- The component uses `currentColor` for the icon, making it easy to theme.
- All spacing and proportions match the official branding guidelines.
- Use `theme="dark"` on dark backgrounds and `theme="light"` on light backgrounds for proper contrast.

## Support

For branding questions, refer to the official logo file at:
`C:\Users\globql-ws\Documents\projects-2\monoatomlabs\monoatomlabs_dev_root\branding\logo.html`

# Background Components Guide

Complete guide for using animated background components in the Monoatom Labs website.

## 📚 Table of Contents

- [Overview](#overview)
- [Available Components](#available-components)
- [Quick Start](#quick-start)
- [Detailed Usage](#detailed-usage)
- [Examples](#examples)
- [Best Practices](#best-practices)
- [Performance](#performance)

---

## Overview

All background components are centralized in `src/components/backgrounds/` and can be imported from a single location:

```jsx
import {
  DarkHexBackground,
  AtomsToIndustryBackground,
  HexagonWave
} from '@/components/backgrounds';
```

These components provide consistent, reusable animated backgrounds that maintain our brand identity across the entire site.

---

## Available Components

### 1. DarkHexBackground ⭐ Most Used

**Purpose:** Standard dark background with animated hexagonal pattern
**Best For:** Product sections, dark-themed pages, general dark backgrounds

```jsx
import { DarkHexBackground } from '@/components/backgrounds';

<DarkHexBackground className="py-24 px-6">
  <div className="max-w-7xl mx-auto">
    <h2>Your Content</h2>
  </div>
</DarkHexBackground>
```

**Props:**
- `children` - Content to render on top
- `className` - Additional section classes (e.g., padding)
- `contentClassName` - Additional content wrapper classes
- `hexOpacity` - Hexagon opacity (default: 70)

**Used In:**
- ProductsSection (Homepage)
- PageHeader (All subpages)
- PartnershipModels
- CertificationsSection
- ProvenImpact

---

### 2. AtomsToIndustryBackground ⭐ Hero Sections

**Purpose:** Animated journey from atomic research to industrial scale
**Best For:** Hero sections, company story, process explanations

```jsx
import { AtomsToIndustryBackground } from '@/components/backgrounds';

<AtomsToIndustryBackground className="py-32 px-6">
  <div className="max-w-7xl mx-auto">
    <h1 className="text-6xl font-bold text-white">
      From Atoms to Industry
    </h1>
    <p className="text-xl text-neutral-300">
      Scaling breakthrough research into mass manufacturing
    </p>
  </div>
</AtomsToIndustryBackground>
```

**Animation Zones:**
1. **Left 35%** - Chaotic floating atoms (Research phase)
2. **Center 30%** - Atoms forming hexagons (Development phase)
3. **Right 35%** - Perfect lattice (Industrial scale)

**Props:**
- `children` - Content to render on top
- `className` - Additional section classes
- `contentClassName` - Additional content wrapper classes
- `scrollSpeed` - Animation speed (default: 0.8)
- `hexRadius` - Size of hexagons (default: 30)
- `showVignette` - Show radial vignette (default: true)
- `showGradient` - Show vertical gradient (default: true)

**Best Use Cases:**
- Hero sections showing company journey
- "About Our Process" sections
- Technology sections explaining R&D to production
- Timeline sections showing progression
- Any section emphasizing "lab to scale" transformation

---

### 3. HexagonWave

**Purpose:** Raw animated hexagonal pattern
**Best For:** Custom implementations, advanced usage

```jsx
import { HexagonWave } from '@/components/backgrounds';

<div className="relative h-screen bg-black">
  <HexagonWave className="opacity-70" />
  <div className="relative z-10">
    {/* Your content */}
  </div>
</div>
```

**Props:**
- `className` - Additional CSS classes

**Note:** Usually wrapped by `DarkHexBackground`. Use directly only for custom implementations.

---

### 4. DarkBackground

**Purpose:** Simple dark background without animation
**Best For:** Minimal dark sections where animation might be distracting

```jsx
import { DarkBackground } from '@/components/backgrounds';

<DarkBackground className="py-24 px-6">
  <div className="max-w-7xl mx-auto">
    <p>Simple content without animation</p>
  </div>
</DarkBackground>
```

**Props:**
- `children` - Content to render
- `className` - Additional section classes
- `contentClassName` - Additional content wrapper classes

---

## Quick Start

### Step 1: Import

```jsx
import { AtomsToIndustryBackground } from '@/components/backgrounds';
```

### Step 2: Use

```jsx
<AtomsToIndustryBackground className="py-32 px-6">
  <div className="max-w-7xl mx-auto text-white">
    <h1>Your Hero Title</h1>
    <p>Your description</p>
  </div>
</AtomsToIndustryBackground>
```

### Step 3: Customize (Optional)

```jsx
<AtomsToIndustryBackground
  scrollSpeed={1.2}      // Faster animation
  hexRadius={35}         // Larger hexagons
  showVignette={false}   // Remove vignette
  className="py-24"
>
  {/* Content */}
</AtomsToIndustryBackground>
```

---

## Detailed Usage

### AtomsToIndustry - Configuration Options

#### Animation Speed

Control how fast the hexagons scroll horizontally:

```jsx
// Slow (cinematic)
<AtomsToIndustryBackground scrollSpeed={0.5}>

// Default (balanced)
<AtomsToIndustryBackground scrollSpeed={0.8}>

// Fast (energetic)
<AtomsToIndustryBackground scrollSpeed={1.5}>
```

#### Hexagon Size

Adjust the size of the hexagonal cells:

```jsx
// Small (more detailed)
<AtomsToIndustryBackground hexRadius={20}>

// Default
<AtomsToIndustryBackground hexRadius={30}>

// Large (bold statement)
<AtomsToIndustryBackground hexRadius={45}>
```

#### Overlay Control

Toggle gradient and vignette effects:

```jsx
// No overlays (full brightness)
<AtomsToIndustryBackground
  showGradient={false}
  showVignette={false}
>

// Only gradient
<AtomsToIndustryBackground
  showGradient={true}
  showVignette={false}
>

// Only vignette
<AtomsToIndustryBackground
  showGradient={false}
  showVignette={true}
>

// Both (default - best readability)
<AtomsToIndustryBackground
  showGradient={true}
  showVignette={true}
>
```

---

## Examples

### Example 1: Hero Section with Journey Theme

```jsx
import { AtomsToIndustryBackground } from '@/components/backgrounds';
import Button from '@/components/ui/Button';

const HeroSection = () => {
  return (
    <AtomsToIndustryBackground className="min-h-screen flex items-center px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-6">
          From Atoms to Industry
        </h1>
        <p className="text-2xl text-neutral-300 mb-12 max-w-3xl mx-auto">
          We bridge the gap between breakthrough research and
          mass manufacturing, scaling graphene from lab to global impact.
        </p>
        <div className="flex gap-4 justify-center">
          <Button variant="primary">Explore Products</Button>
          <Button variant="secondary">Our Process</Button>
        </div>
      </div>
    </AtomsToIndustryBackground>
  );
};
```

### Example 2: Process Timeline Section

```jsx
import { AtomsToIndustryBackground } from '@/components/backgrounds';

const ProcessSection = () => {
  return (
    <AtomsToIndustryBackground
      className="py-32 px-6"
      scrollSpeed={0.6}
      hexRadius={25}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-white text-center mb-20">
          Our 3-Phase Journey
        </h2>

        <div className="grid grid-cols-3 gap-8">
          {/* Phase 1: Research */}
          <div className="text-center text-white">
            <div className="text-6xl mb-4">🔬</div>
            <h3 className="text-2xl font-bold mb-4">Research</h3>
            <p className="text-neutral-400">
              Atomic-scale innovation in our labs
            </p>
          </div>

          {/* Phase 2: Development */}
          <div className="text-center text-white">
            <div className="text-6xl mb-4">⚙️</div>
            <h3 className="text-2xl font-bold mb-4">Development</h3>
            <p className="text-neutral-400">
              Pilot programs and validation
            </p>
          </div>

          {/* Phase 3: Scale */}
          <div className="text-center text-white">
            <div className="text-6xl mb-4">🏭</div>
            <h3 className="text-2xl font-bold mb-4">Industrial Scale</h3>
            <p className="text-neutral-400">
              Ton-scale manufacturing deployment
            </p>
          </div>
        </div>
      </div>
    </AtomsToIndustryBackground>
  );
};
```

### Example 3: About Section with Fast Animation

```jsx
import { AtomsToIndustryBackground } from '@/components/backgrounds';

const AboutSection = () => {
  return (
    <AtomsToIndustryBackground
      className="py-24 px-6"
      scrollSpeed={1.5}
      hexRadius={35}
      showVignette={false}
    >
      <div className="max-w-5xl mx-auto text-white">
        <h2 className="text-4xl font-bold mb-8">
          Bridging the Valley of Death
        </h2>
        <p className="text-xl text-neutral-300 leading-relaxed">
          Most breakthrough materials never escape the lab. We've built
          the infrastructure to take graphene from atomic precision to
          industrial scale, delivering commercially viable solutions today.
        </p>
      </div>
    </AtomsToIndustryBackground>
  );
};
```

### Example 4: Standard Dark Section

```jsx
import { DarkHexBackground } from '@/components/backgrounds';

const ProductsSection = () => {
  return (
    <DarkHexBackground className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-white text-center mb-16">
          Our Products
        </h2>
        {/* Product grid */}
      </div>
    </DarkHexBackground>
  );
};
```

### Example 5: Custom Raw Canvas

```jsx
import { AtomsToIndustry } from '@/components/backgrounds';

const CustomBackground = () => {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Raw animation */}
      <AtomsToIndustry scrollSpeed={1.0} hexRadius={30} />

      {/* Custom overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      <div className="absolute inset-0 bg-brand-500/5" />

      {/* Content */}
      <div className="relative z-10 p-24">
        <h1 className="text-white">Custom Implementation</h1>
      </div>
    </div>
  );
};
```

---

## Best Practices

### ✅ DO

1. **Use wrapper components** (`DarkHexBackground`, `AtomsToIndustryBackground`) instead of raw canvas components
2. **Add proper z-index** to content layers (`relative z-10`)
3. **Use white or light text** on dark animated backgrounds
4. **Test text readability** - use vignette/gradients if needed
5. **Keep content centered** for best visibility across animation zones
6. **Match animation to content** - use AtomsToIndustry for journey/process themes

### ❌ DON'T

1. **Don't use dark text** on dark animated backgrounds
2. **Don't stack multiple animated backgrounds** - causes performance issues
3. **Don't use very high scrollSpeed** (>2.0) - can be nauseating
4. **Don't remove overlays** without testing text readability
5. **Don't nest background components** inside each other

---

## Performance

### Optimization Features

- **Canvas-based rendering** - GPU accelerated
- **requestAnimationFrame** - Smooth 60fps animation
- **Automatic cleanup** - No memory leaks
- **Responsive resizing** - Efficient resize handling
- **Conditional rendering** - Offscreen elements not drawn

### Performance Tips

1. **Use one animation per page section** - Multiple animations can impact performance on lower-end devices
2. **Test on mobile** - Canvas animations are more intensive on mobile GPUs
3. **Consider static backgrounds** for very long pages
4. **Use `DarkBackground`** (no animation) for less critical sections

### Browser Support

- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari/iOS Safari
- ✅ Mobile browsers
- ⚠️ IE11 not supported (uses modern Canvas APIs)

---

## Troubleshooting

### Issue: Text is hard to read

**Solution:** Enable overlays
```jsx
<AtomsToIndustryBackground
  showGradient={true}
  showVignette={true}
>
```

### Issue: Animation is too fast/slow

**Solution:** Adjust scrollSpeed
```jsx
// Slower
<AtomsToIndustryBackground scrollSpeed={0.5}>

// Faster
<AtomsToIndustryBackground scrollSpeed={1.5}>
```

### Issue: Animation causes performance issues

**Solution:** Use simpler background
```jsx
// Replace with non-animated version
<DarkBackground className="py-24 px-6">
  {/* Content */}
</DarkBackground>
```

### Issue: Content not visible

**Solution:** Check z-index and text color
```jsx
<AtomsToIndustryBackground>
  <div className="relative z-10 text-white">
    {/* Content */}
  </div>
</AtomsToIndustryBackground>
```

---

## Component Reference

### AtomsToIndustryBackground

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | ReactNode | - | Content to render on top |
| `className` | string | `''` | Section wrapper classes |
| `contentClassName` | string | `''` | Content container classes |
| `scrollSpeed` | number | `0.8` | Horizontal scroll speed |
| `hexRadius` | number | `30` | Size of hexagons in pixels |
| `showVignette` | boolean | `true` | Show radial vignette overlay |
| `showGradient` | boolean | `true` | Show vertical gradient overlay |

### DarkHexBackground

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | ReactNode | - | Content to render on top |
| `className` | string | `''` | Section wrapper classes |
| `contentClassName` | string | `''` | Content container classes |
| `hexOpacity` | number | `70` | Hexagon pattern opacity |

### AtomsToIndustry (Raw Canvas)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `scrollSpeed` | number | `0.8` | Horizontal scroll speed |
| `hexRadius` | number | `30` | Size of hexagons in pixels |
| `className` | string | `''` | Canvas element classes |

---

## Contributing

When adding new background components:

1. Add component to `src/components/backgrounds/`
2. Export from `src/components/backgrounds/index.js`
3. Document in this guide
4. Update `backgrounds/README.md`
5. Add usage examples
6. Test on multiple screen sizes

---

## Support

For questions or issues with background components:
- Check this documentation
- Review `backgrounds/README.md`
- Check existing implementations in:
  - `src/pages/Home.jsx`
  - `src/components/home/ProductsSection.jsx`
  - `src/components/home/ProvenImpact.jsx`

---

**Last Updated:** 2026-02-06
**Version:** 1.0.0

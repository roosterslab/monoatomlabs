# Quick Start Guide

Fast reference for common patterns in the Monoatom Labs website.

## 🚀 Most Common Use Cases

### 1. Hero Section with Atoms-to-Industry Animation

```jsx
import { AtomsToIndustryBackground } from '@/components/backgrounds';
import Button from '@/components/ui/Button';

const HeroSection = () => (
  <AtomsToIndustryBackground className="min-h-screen flex items-center px-6">
    <div className="max-w-7xl mx-auto text-center">
      <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-6">
        Your Hero Title
      </h1>
      <p className="text-2xl text-neutral-300 mb-12 max-w-3xl mx-auto">
        Your compelling subtitle or description
      </p>
      <div className="flex gap-4 justify-center">
        <Button variant="primary">Primary Action</Button>
        <Button variant="secondary">Secondary Action</Button>
      </div>
    </div>
  </AtomsToIndustryBackground>
);
```

### 2. Standard Dark Section

```jsx
import { DarkHexBackground } from '@/components/backgrounds';
import SectionHeading from '@/components/ui/SectionHeading';

const ProductsSection = () => (
  <DarkHexBackground className="py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <SectionHeading
        number="01"
        title="Your Section Title"
        subtitle="Your section description"
        theme="dark"
      />

      {/* Your content grid/cards */}
    </div>
  </DarkHexBackground>
);
```

### 3. Light Section (No Animation)

```jsx
const LightSection = () => (
  <section className="py-24 px-6 bg-white">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold text-neutral-900 mb-16 text-center">
        Your Title
      </h2>

      {/* Your content */}
    </div>
  </section>
);
```

### 4. Process/Timeline Section

```jsx
import { AtomsToIndustryBackground } from '@/components/backgrounds';

const ProcessSection = () => (
  <AtomsToIndustryBackground
    className="py-32 px-6"
    scrollSpeed={0.6}
  >
    <div className="max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold text-white text-center mb-20">
        Our Process
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Process steps */}
      </div>
    </div>
  </AtomsToIndustryBackground>
);
```

## 🎨 Common Patterns

### Centered Content with Max Width

```jsx
<div className="max-w-7xl mx-auto text-center">
  <h1 className="text-6xl font-bold text-white mb-6">Title</h1>
  <p className="text-xl text-neutral-300 max-w-3xl mx-auto">Description</p>
</div>
```

### Two-Column Layout

```jsx
<div className="max-w-7xl mx-auto">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
    <div>{/* Left column */}</div>
    <div>{/* Right column */}</div>
  </div>
</div>
```

### Card Grid

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {items.map((item, index) => (
    <div key={index} className="bg-white rounded-2xl p-8">
      {/* Card content */}
    </div>
  ))}
</div>
```

### Section Heading

```jsx
import SectionHeading from '@/components/ui/SectionHeading';

<SectionHeading
  number="01"
  title="Section Title"
  subtitle="Brief description of this section"
  theme="dark" // or "light"
/>
```

## 📱 Responsive Utilities

### Hide on Mobile

```jsx
<div className="hidden md:block">Desktop only</div>
```

### Show on Mobile Only

```jsx
<div className="block md:hidden">Mobile only</div>
```

### Responsive Text Sizes

```jsx
<h1 className="text-4xl md:text-6xl lg:text-8xl">
  Responsive Heading
</h1>
```

### Responsive Spacing

```jsx
<div className="py-12 md:py-24 lg:py-32">
  Responsive padding
</div>
```

### Responsive Grid

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {/* Responsive columns */}
</div>
```

## 🎯 Component Imports

### Background Components

```jsx
import {
  DarkHexBackground,
  AtomsToIndustryBackground,
  HexagonWave,
  DarkBackground
} from '@/components/backgrounds';
```

### UI Components

```jsx
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
```

### Icons

```jsx
import {
  ArrowRight,
  Check,
  X,
  Menu,
  ChevronDown
} from 'lucide-react';
```

## 🎨 Color Classes

### Text Colors

```jsx
// Light backgrounds
text-neutral-900    // Primary text
text-neutral-600    // Secondary text
text-neutral-500    // Tertiary text

// Dark backgrounds
text-white          // Primary text
text-neutral-300    // Secondary text
text-neutral-400    // Tertiary text
text-neutral-500    // Subdued text
```

### Background Colors

```jsx
bg-black            // Pure black
bg-neutral-950      // Near black
bg-neutral-900      // Dark gray
bg-white            // Pure white
bg-neutral-50       // Light gray
```

### Border Colors

```jsx
border-neutral-200  // Light backgrounds
border-neutral-800  // Dark backgrounds
border-white/10     // Translucent white
```

## ⚡ Quick Customization

### Adjust Animation Speed

```jsx
// Slow
<AtomsToIndustryBackground scrollSpeed={0.5}>

// Normal (default)
<AtomsToIndustryBackground scrollSpeed={0.8}>

// Fast
<AtomsToIndustryBackground scrollSpeed={1.5}>
```

### Adjust Hexagon Size

```jsx
// Small
<AtomsToIndustryBackground hexRadius={20}>

// Normal (default)
<AtomsToIndustryBackground hexRadius={30}>

// Large
<AtomsToIndustryBackground hexRadius={45}>
```

### Toggle Overlays

```jsx
// Full brightness (no overlays)
<AtomsToIndustryBackground
  showGradient={false}
  showVignette={false}
>

// With overlays (better readability)
<AtomsToIndustryBackground
  showGradient={true}
  showVignette={true}
>
```

## 🔧 Common Fixes

### Text Not Readable

```jsx
// Add z-index and ensure white text
<div className="relative z-10 text-white">
  Your content
</div>
```

### Content Not Centered

```jsx
// Add max-width and center
<div className="max-w-7xl mx-auto">
  Your content
</div>
```

### Animation Too Intense

```jsx
// Use static background instead
import { DarkBackground } from '@/components/backgrounds';

<DarkBackground className="py-24 px-6">
  Your content
</DarkBackground>
```

## 📋 Copy-Paste Templates

### Full Page Template

```jsx
import {
  AtomsToIndustryBackground,
  DarkHexBackground
} from '@/components/backgrounds';
import SectionHeading from '@/components/ui/SectionHeading';

const YourPage = () => {
  return (
    <>
      {/* Hero */}
      <AtomsToIndustryBackground className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto text-center px-6">
          <h1 className="text-8xl font-bold text-white mb-6">Hero Title</h1>
          <p className="text-2xl text-neutral-300">Description</p>
        </div>
      </AtomsToIndustryBackground>

      {/* Content Section */}
      <DarkHexBackground className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            number="01"
            title="Section Title"
            subtitle="Section description"
            theme="dark"
          />
          {/* Content */}
        </div>
      </DarkHexBackground>

      {/* Light Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Content */}
        </div>
      </section>
    </>
  );
};

export default YourPage;
```

---

**Need more details?** Check the [Full Background Components Guide](./BACKGROUND-COMPONENTS.md)

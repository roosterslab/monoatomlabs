# Background Components

This directory contains all background components used across the Monoatom Labs website.

## Components

### 1. DarkHexBackground ⭐ MOST USED
**File:** `DarkHexBackground.jsx`

Reusable dark background section with animated hexagonal pattern. This is the main background component used across the site.

**Visual Layers:**
1. Black background base
2. Animated hexagonal wave pattern (configurable opacity)
3. Radial gradient mask (transparent center, dark edges)

**Usage:**
```jsx
import { DarkHexBackground } from '../backgrounds';

<DarkHexBackground className="py-24 px-6">
  <div className="max-w-7xl mx-auto">
    {/* Your content */}
  </div>
</DarkHexBackground>
```

**Props:**
- `children` (ReactNode): Content to render on top
- `className` (string): Additional section classes
- `contentClassName` (string): Additional content wrapper classes
- `hexOpacity` (number): Hexagon opacity, default: 70

**Used In:**
- ProductsSection (Home page)
- PageHeader (All subpages: 23+ pages)

---

### 2. DarkBackground
**File:** `DarkBackground.jsx`

Simple dark background section WITHOUT animation. Use for minimal dark sections.

**Usage:**
```jsx
import { DarkBackground } from '../backgrounds';

<DarkBackground className="py-24 px-6">
  <div className="max-w-7xl mx-auto">
    {/* Your content */}
  </div>
</DarkBackground>
```

**Props:**
- `children` (ReactNode): Content to render
- `className` (string): Additional section classes
- `contentClassName` (string): Additional content wrapper classes

---

### 3. HexagonWave
**File:** `HexagonWave.jsx`

Animated hexagonal grid pattern using HTML5 Canvas. Creates a smooth, flowing wave effect with shimmering opacity.

**Technical Details:**
- Canvas-based animation using `requestAnimationFrame`
- Hexagon radius: 25px
- Grid spacing: 60px horizontal, 50px vertical
- Wave animation with sine/cosine movement
- Opacity shimmer effect (0.1 to 0.6)
- Responsive (auto-resizes on window resize)
- Performance optimized

**Usage:**
```jsx
import { HexagonWave } from '../backgrounds';

<HexagonWave className="w-full h-full opacity-70" />
```

**Props:**
- `className` (string): Custom CSS classes for styling

---

### DarkHexBackground
**File:** `DarkHexBackground.jsx`

Reusable dark background section with animated hexagonal pattern. Combines three visual layers for consistent brand identity.

**Visual Layers:**
1. **Base:** Black background (`bg-black`)
2. **Animation:** Animated hexagonal wave pattern (70% opacity)
3. **Mask:** Radial gradient (transparent center, dark edges)

**Usage:**
```jsx
import { DarkHexBackground } from '../backgrounds';

<DarkHexBackground className="py-24 px-6">
  <div className="max-w-7xl mx-auto">
    {/* Your content here */}
  </div>
</DarkHexBackground>
```

**Props:**
- `children` (ReactNode): Content to render on top of background
- `className` (string): Additional classes for section container
- `contentClassName` (string): Additional classes for content wrapper
- `hexOpacity` (number): Opacity of hexagon animation (default: 70)

**Used In:**
- ProductsSection (Home page)
- PageHeader (All subpages: About, Products, Contact, etc.)

---

### 4. AtomsToIndustryBackground ⭐ HERO SECTION
**File:** `AtomsToIndustryBackground.jsx`

Complete section background showing the journey from atomic research to industrial scale through animated honeycomb formation.

**Visual Journey:**
1. **Left (Chaos Zone):** Individual atoms floating randomly - research phase
2. **Center (Formation Zone):** Atoms assembling into hexagons - development phase
3. **Right (Order Zone):** Perfect honeycomb lattice - industrial scale

**Features:**
- Auto-scrolling animation showing progression
- Three distinct visual zones representing company journey
- Gradient overlays for text readability
- Optional radial vignette
- Configurable animation speed and hexagon size

**Usage:**
```jsx
import { AtomsToIndustryBackground } from '../backgrounds';

<AtomsToIndustryBackground className="py-32">
  <div className="max-w-7xl mx-auto">
    <h1>From Atoms to Industry</h1>
    <p>Your content here...</p>
  </div>
</AtomsToIndustryBackground>
```

**Props:**
- `children` (ReactNode): Content to render on top
- `className` (string): Additional section classes
- `contentClassName` (string): Additional content wrapper classes
- `scrollSpeed` (number): Animation speed, default: 0.8
- `hexRadius` (number): Size of hexagons, default: 30
- `showVignette` (boolean): Show radial vignette, default: true
- `showGradient` (boolean): Show vertical gradient, default: true

**Best For:**
- Hero sections
- "About Our Journey" sections
- Major milestone sections
- Process explanation sections

---

### 5. AtomsToIndustry
**File:** `AtomsToIndustry.jsx`

Raw canvas component for the honeycomb formation animation. Use `AtomsToIndustryBackground` wrapper instead for most cases.

**Technical Details:**
- Canvas-based particle system
- Three animation zones with different physics
- Brownian motion in chaos zone
- Gradual assembly in formation zone
- Perfect lattice in order zone
- Auto-scrolling horizontal movement
- Responsive with resize handling

**Usage (Advanced):**
```jsx
import { AtomsToIndustry } from '../backgrounds';

<AtomsToIndustry scrollSpeed={0.8} hexRadius={30} />
```

**Props:**
- `scrollSpeed` (number): Horizontal scroll speed
- `hexRadius` (number): Size of hexagons
- `className` (string): Additional CSS classes

---

## Design Philosophy

All background animations are centralized here to:
- ✅ Maintain consistent visual identity
- ✅ Follow DRY (Don't Repeat Yourself) principle
- ✅ Enable easy global updates
- ✅ Improve code maintainability
- ✅ Keep all visual background elements organized

## Adding New Backgrounds

When creating new background animations:

1. Add the component file to this directory
2. Export it from `index.js`
3. Document it in this README
4. Follow the existing naming convention
5. Make it configurable via props when possible

## Performance Notes

- HexagonWave uses `requestAnimationFrame` for smooth 60fps animation
- Canvas clears and redraws on each frame
- Responsive with automatic resize handling
- Cleanup on component unmount to prevent memory leaks

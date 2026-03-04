# Content Management System (CMS) Components

This directory contains reusable content components for the Monoatom Labs website. These components work together with the content parser utility and structured content data to render markdown-sourced content in React.

## Overview

The CMS consists of three main parts:

1. **Content Parser** (`src/utils/contentParser.js`) - Utilities to parse markdown content
2. **Structured Content** (`src/data/content.js`) - All website content in structured format
3. **Content Components** (`src/components/content/`) - React components to render content

## Components

### ProductPage

The main template component for product pages. Handles all sections of a product page.

```jsx
import { ProductPage } from '@/components/content';
import { products } from '@/data/content';

function CerapheneProduct() {
  return <ProductPage product={products.ceraphene} />;
}
```

**Props:**
- `product` (object, required) - Product data from content.js
- `showHero` (boolean, default: true) - Show hero section
- `showBenefits` (boolean, default: true) - Show benefits section
- `showSpecifications` (boolean, default: true) - Show specifications
- `showApplications` (boolean, default: true) - Show applications
- `showComparison` (boolean, default: true) - Show competitive comparison
- `showCTA` (boolean, default: true) - Show call-to-action
- `className` (string) - Additional CSS classes

### ContentSection

Reusable section component with title, subtitle, content, and subsections.

```jsx
import { ContentSection } from '@/components/content';

<ContentSection
  title="How It Works"
  subtitle="Understanding the technology"
  content="Main content text here..."
  subsections={[
    {
      title: "Step 1",
      content: ["Description of step 1"]
    }
  ]}
/>
```

**Props:**
- `title` (string) - Section title
- `subtitle` (string) - Section subtitle
- `content` (string|element) - Main content
- `subsections` (array) - Array of subsection objects
- `children` (element) - Additional content
- `className` (string) - Additional CSS classes
- `variant` ('default'|'centered'|'wide') - Layout variant

### FeatureList

Display features/benefits in various layouts.

```jsx
import { FeatureList } from '@/components/content';

<FeatureList
  features={product.benefits}
  variant="detailed"
  columns={2}
/>
```

**Props:**
- `features` (array, required) - Array of feature objects
- `variant` ('default'|'detailed'|'simple'|'compact'|'cards') - Display style
- `columns` (number, default: 2) - Number of columns (1-4)
- `showIcon` (boolean, default: true) - Show icons
- `iconType` ('check'|'chevron'|'sparkle') - Icon type
- `className` (string) - Additional CSS classes

**Feature Object:**
```javascript
{
  title: "Feature Title",
  description: "Feature description",
  details: ["Detail 1", "Detail 2"] // optional
}
```

### SpecTable

Display technical specifications in tables or cards.

```jsx
import { SpecTable } from '@/components/content';

<SpecTable
  specifications={product.specifications}
  tables={product.specTables}
  variant="cards"
/>
```

**Props:**
- `specifications` (object) - Key-value specification pairs
- `tables` (array) - Array of table objects
- `variant` ('default'|'compact'|'detailed'|'cards') - Display style
- `className` (string) - Additional CSS classes

**Table Object:**
```javascript
{
  headers: ["Column 1", "Column 2"],
  rows: [
    ["Row 1 Col 1", "Row 1 Col 2"],
    ["Row 2 Col 1", "Row 2 Col 2"]
  ]
}
```

### ComparisonTable

Display competitive comparison tables.

```jsx
import { ComparisonTable } from '@/components/content';

<ComparisonTable
  table={comparisonTable}
  highlightProduct="Ceraphene"
  showIcons={true}
/>
```

**Props:**
- `table` (object, required) - Table with headers and rows
- `highlightProduct` (string) - Product name to highlight
- `variant` ('default'|'compact'|'detailed') - Display style
- `showIcons` (boolean, default: true) - Show status icons
- `className` (string) - Additional CSS classes

## Additional Components

### ContentGrid

Grid layout for content cards.

```jsx
import { ContentGrid } from '@/components/content';

<ContentGrid
  items={[
    { title: "Item 1", description: "Description 1" },
    { title: "Item 2", description: "Description 2" }
  ]}
  columns={3}
/>
```

### FeatureGrid

Grid of feature cards with icons.

```jsx
import { FeatureGrid } from '@/components/content';

<FeatureGrid
  features={features}
  columns={3}
/>
```

### BenefitsList

Specialized list for product benefits with numbering.

```jsx
import { BenefitsList } from '@/components/content';

<BenefitsList
  benefits={product.benefits}
  showNumbers={true}
/>
```

### CheckList

Simple checklist with checkmarks.

```jsx
import { CheckList } from '@/components/content';

<CheckList
  items={["Item 1", "Item 2", "Item 3"]}
  columns={2}
/>
```

### SpecGrid

Display specifications in a grid of cards.

```jsx
import { SpecGrid } from '@/components/content';

<SpecGrid
  specifications={{
    hardness: "9H+",
    durability: "3-4 years"
  }}
  columns={3}
/>
```

### MetricCard

Display a single key metric prominently.

```jsx
import { MetricCard } from '@/components/content';

<MetricCard
  label="Strength Gain"
  value="40-50%"
  description="Compared to standard concrete"
  variant="gradient"
/>
```

### ComparisonCards

Side-by-side comparison cards.

```jsx
import { ComparisonCards } from '@/components/content';

<ComparisonCards
  items={[
    {
      name: "Ceraphene",
      price: "₹5,000",
      features: ["9H+ hardness", "3-4 years durability"],
      cta: "Get Quote"
    }
  ]}
  highlightIndex={0}
/>
```

### Timeline

Vertical timeline for processes or history.

```jsx
import { Timeline } from '@/components/content';

<Timeline
  items={[
    {
      label: "Step 1",
      title: "Preparation",
      description: "Prepare the surface"
    }
  ]}
/>
```

### TwoColumnSection

Content split into two columns.

```jsx
import { TwoColumnSection } from '@/components/content';

<TwoColumnSection
  leftContent={<div>Left content</div>}
  rightContent={<div>Right content</div>}
/>
```

### HighlightBox

Highlighted content box for callouts.

```jsx
import { HighlightBox } from '@/components/content';

<HighlightBox variant="info">
  <p>Important information here</p>
</HighlightBox>
```

## Usage Example

Complete example of a product page:

```jsx
import React from 'react';
import { ProductPage } from '@/components/content';
import { products } from '@/data/content';

function CerapheneProductPage() {
  return (
    <ProductPage
      product={products.ceraphene}
      showHero={true}
      showBenefits={true}
      showSpecifications={true}
      showApplications={true}
      showComparison={true}
      showCTA={true}
    />
  );
}

export default CerapheneProductPage;
```

Or build a custom page:

```jsx
import React from 'react';
import {
  ContentSection,
  FeatureList,
  SpecTable,
  ComparisonTable
} from '@/components/content';
import { products } from '@/data/content';

function CustomProductPage() {
  const product = products.graphacrete;

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl">{product.tagline}</p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">Key Benefits</h2>
          <FeatureList
            features={product.benefits}
            variant="cards"
            columns={3}
          />
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">Specifications</h2>
          <SpecTable
            specifications={product.specifications}
            variant="cards"
          />
        </div>
      </section>

      {/* Comparison */}
      {product.competitive && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12">Comparison</h2>
            <ComparisonTable
              table={product.competitive.tables[0]}
              highlightProduct={product.name}
            />
          </div>
        </section>
      )}
    </div>
  );
}

export default CustomProductPage;
```

## Content Parser Utilities

Parse markdown content on-the-fly:

```jsx
import { parseProductContent } from '@/utils/contentParser';
import { useState, useEffect } from 'react';

function DynamicProductPage({ markdownPath }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(markdownPath)
      .then(res => res.text())
      .then(content => {
        const parsed = parseProductContent(content);
        setProduct(parsed);
      });
  }, [markdownPath]);

  if (!product) return <div>Loading...</div>;

  return <ProductPage product={product} />;
}
```

## Styling

All components use Tailwind CSS classes and are designed to work with the existing design system. They include:

- Responsive layouts (mobile-first)
- Smooth animations with Framer Motion
- Consistent spacing and typography
- Hover and interaction states
- Dark mode support (where applicable)

## Best Practices

1. **Use Structured Data**: Always pull content from `src/data/content.js` when possible
2. **Consistent Props**: Pass complete product objects rather than individual fields
3. **Responsive Design**: Test on mobile, tablet, and desktop
4. **Performance**: Use viewport-triggered animations to improve initial load
5. **Accessibility**: Components include semantic HTML and ARIA labels
6. **Customization**: Use `className` prop for custom styling without modifying components

## File Structure

```
src/
├── components/
│   └── content/
│       ├── ProductPage.jsx         # Main product page template
│       ├── ContentSection.jsx      # Generic section component
│       ├── FeatureList.jsx         # Features/benefits display
│       ├── SpecTable.jsx           # Technical specifications
│       ├── ComparisonTable.jsx     # Competitive comparisons
│       ├── index.js                # Component exports
│       └── README.md               # This file
├── data/
│   └── content.js                  # Structured content data
└── utils/
    └── contentParser.js            # Markdown parsing utilities
```

## Support

For questions or issues with the CMS components, contact the development team or refer to the main project documentation.

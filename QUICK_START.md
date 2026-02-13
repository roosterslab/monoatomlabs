# Content Management System - Quick Start Guide

## Getting Started in 5 Minutes

### 1. Import Content and Components

```jsx
// Import structured content
import { products, companyInfo, industries } from '@/data/content';

// Import components
import { ProductPage, FeatureList, SpecTable } from '@/components/content';
```

### 2. Create a Product Page

**Option A: Use ProductPage Template (Easiest)**

```jsx
import { ProductPage } from '@/components/content';
import { products } from '@/data/content';

function CerapheneProduct() {
  return <ProductPage product={products.ceraphene} />;
}

export default CerapheneProduct;
```

**Option B: Custom Layout**

```jsx
import { FeatureList, SpecTable } from '@/components/content';
import { products } from '@/data/content';

function CustomProduct() {
  const product = products.graphacrete;

  return (
    <div>
      <section>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
      </section>

      <section>
        <h2>Benefits</h2>
        <FeatureList features={product.benefits} variant="cards" columns={3} />
      </section>

      <section>
        <h2>Specifications</h2>
        <SpecTable specifications={product.specifications} variant="cards" />
      </section>
    </div>
  );
}

export default CustomProduct;
```

### 3. Access Content Data

```jsx
import { products, companyInfo, industries } from '@/data/content';

// Product data
const ceraphene = products.ceraphene;
console.log(ceraphene.name);          // "Ceraphene"
console.log(ceraphene.benefits);      // Array of benefits
console.log(ceraphene.specifications); // Specifications object

// Company info
console.log(companyInfo.email);       // "info@monoatomlabs.com"
console.log(companyInfo.phone);       // "+91-989-919-9809"

// Industry data
const automotive = industries.automotive;
console.log(automotive.solutions);    // Array of solutions
```

## Common Components

### Display Features/Benefits

```jsx
import { FeatureList } from '@/components/content';

<FeatureList
  features={product.benefits}
  variant="cards"    // or "detailed", "simple", "compact"
  columns={3}
/>
```

### Display Specifications

```jsx
import { SpecTable } from '@/components/content';

<SpecTable
  specifications={product.specifications}
  variant="cards"    // or "default", "compact"
/>
```

### Display Comparison

```jsx
import { ComparisonTable } from '@/components/content';

<ComparisonTable
  table={comparisonData}
  highlightProduct="Ceraphene"
/>
```

### Display Content Section

```jsx
import { ContentSection } from '@/components/content';

<ContentSection
  title="How It Works"
  subtitle="Understanding the technology"
  content="Main content here..."
/>
```

## Component Variants

### FeatureList Variants

- `variant="cards"` - Grid of feature cards
- `variant="detailed"` - Detailed with icons and descriptions
- `variant="simple"` - Simple list with checkmarks
- `variant="compact"` - Minimal spacing

### SpecTable Variants

- `variant="cards"` - Specifications as cards
- `variant="default"` - Traditional table
- `variant="compact"` - Condensed table

### ContentSection Variants

- `variant="default"` - Standard layout
- `variant="centered"` - Centered content
- `variant="wide"` - Full width

## Quick Tips

### 1. Responsive Columns

```jsx
<FeatureList
  features={benefits}
  columns={3}  // 3 columns on desktop, 2 on tablet, 1 on mobile
/>
```

### 2. Custom Styling

```jsx
<FeatureList
  features={benefits}
  className="my-8 bg-slate-50 p-6"
/>
```

### 3. Conditional Sections

```jsx
<ProductPage
  product={product}
  showSpecifications={false}  // Hide specifications
  showComparison={true}       // Show comparison
/>
```

### 4. Component Composition

```jsx
<ContentSection title="Overview">
  <FeatureList features={features} />
  <SpecTable specifications={specs} />
</ContentSection>
```

## Content Structure

### Product Object

```javascript
{
  id: 'ceraphene',
  name: 'Ceraphene',
  category: 'Ceramic Coating',
  status: 'Commercial',
  tagline: 'Ultra-Durable Ceramic Coating',
  description: 'Full description...',
  keyMetrics: [
    { label: 'Hardness', value: '9H+' }
  ],
  benefits: [
    {
      title: 'Benefit Title',
      description: 'Benefit description',
      details: ['Detail 1', 'Detail 2']
    }
  ],
  specifications: {
    hardness: '9H+',
    durability: '3-4 years'
  },
  applications: ['Application 1', 'Application 2']
}
```

### Adding New Content

1. Add data to `src/data/content.js`
2. Use existing components to display
3. No need to create new components

```javascript
// In src/data/content.js
export const products = {
  // ... existing products
  newProduct: {
    id: 'new-product',
    name: 'New Product',
    // ... rest of structure
  }
};
```

## Need Help?

- **Full Documentation**: See `CMS_DOCUMENTATION.md`
- **Component Details**: See `src/components/content/README.md`
- **Examples**: See `src/pages/ProductExample.jsx`

## Next Steps

1. Explore `src/data/content.js` to see all available content
2. Check `src/components/content/README.md` for detailed component docs
3. Review `src/pages/ProductExample.jsx` for implementation examples
4. Read `CMS_DOCUMENTATION.md` for complete system overview

## Common Use Cases

### Create Product Page
```jsx
import { ProductPage } from '@/components/content';
import { products } from '@/data/content';

function MyProduct() {
  return <ProductPage product={products.ceraphene} />;
}
```

### Display Benefits
```jsx
import { FeatureList } from '@/components/content';
<FeatureList features={product.benefits} variant="cards" />
```

### Show Specifications
```jsx
import { SpecTable } from '@/components/content';
<SpecTable specifications={product.specifications} />
```

### Add Comparison
```jsx
import { ComparisonTable } from '@/components/content';
<ComparisonTable table={data} highlightProduct="Ceraphene" />
```

That's it! You're ready to use the CMS. For more details, see the full documentation.

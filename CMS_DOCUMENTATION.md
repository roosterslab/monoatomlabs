# Monoatom Labs - Content Management System Documentation

## Overview

This document provides comprehensive documentation for the Content Management System (CMS) built for the Monoatom Labs React website. The CMS enables easy content management by separating content from presentation, making it simple to update website content without modifying React components.

## Architecture

### Three-Layer Architecture

1. **Content Source Layer** (`website-content/`)
   - Markdown files organized by content type
   - Human-readable, version-controlled content
   - Easy to edit by non-developers

2. **Data Layer** (`src/data/content.js` + `src/utils/contentParser.js`)
   - Structured content data extracted from markdown
   - Parsing utilities to convert markdown to JSON-like structures
   - Centralized content management

3. **Presentation Layer** (`src/components/content/`)
   - Reusable React components
   - Consistent styling and behavior
   - Flexible composition

## Directory Structure

```
monoatoms/
├── website-content/          # Markdown content source
│   ├── about/
│   │   ├── company.md
│   │   ├── founders-team.md
│   │   └── facilities.md
│   ├── products/
│   │   ├── ceraphene.md
│   │   ├── graphacrete.md
│   │   ├── graffisol.md
│   │   └── hd-g-pe.md
│   ├── industries/
│   │   ├── automotive.md
│   │   ├── construction.md
│   │   ├── solar-energy.md
│   │   └── advanced-materials.md
│   ├── technology/
│   │   ├── platform.md
│   │   ├── capabilities.md
│   │   └── pilot-projects.md
│   ├── partnership/
│   │   └── index.md
│   └── contact/
│       └── index.md
│
└── website/
    └── src/
        ├── components/
        │   └── content/          # CMS Components
        │       ├── ProductPage.jsx
        │       ├── ContentSection.jsx
        │       ├── FeatureList.jsx
        │       ├── SpecTable.jsx
        │       ├── ComparisonTable.jsx
        │       ├── index.js
        │       └── README.md
        ├── data/
        │   └── content.js        # Structured content
        ├── utils/
        │   └── contentParser.js  # Parsing utilities
        └── pages/
            └── ProductExample.jsx # Usage examples
```

## Core Files

### 1. Content Parser (`src/utils/contentParser.js`)

Utility functions to parse markdown content into structured JavaScript objects.

**Key Functions:**

- `parseMetadata(content)` - Extract metadata from markdown frontmatter
- `parseSections(content)` - Parse markdown sections (## headers)
- `parseListItems(contentLines)` - Parse bullet points and numbered lists
- `parseTable(contentLines)` - Parse markdown tables
- `findTables(contentLines)` - Find all tables in content
- `parseSpecifications(contentLines)` - Parse key-value specifications
- `extractBenefits(section)` - Extract benefits from a section
- `parseContactInfo(content)` - Extract contact information
- `parseMarkdownContent(content)` - Main parser for any markdown file
- `parseProductContent(content)` - Specialized parser for product pages

**Example Usage:**

```javascript
import { parseProductContent } from '@/utils/contentParser';

// Parse markdown content
const markdownContent = `
# Product Name
**URL:** /products/example
...
`;

const product = parseProductContent(markdownContent);
// Returns structured object with metadata, sections, benefits, specs, etc.
```

### 2. Structured Content (`src/data/content.js`)

Centralized content data extracted from markdown files and organized for React consumption.

**Data Structure:**

- `companyInfo` - Company information, contact details, departments
- `products` - Commercial products (Ceraphene, Graphacrete, Graffisol, HD-G-PE)
- `pipelineProducts` - Products in development
- `industries` - Industry-specific information
- `technology` - Technology platform and capabilities
- `partnership` - Partnership models and information
- `about` - Company, founders, facilities information
- `navigation` - Site navigation structure

**Example Usage:**

```javascript
import { products, companyInfo } from '@/data/content';

// Access product data
const ceraphene = products.ceraphene;
console.log(ceraphene.name); // "Ceraphene"
console.log(ceraphene.benefits); // Array of benefits

// Access company info
console.log(companyInfo.email); // "info@monoatomlabs.com"
```

### 3. Content Components (`src/components/content/`)

Reusable React components for rendering content.

## Component Reference

### ProductPage Component

Main template for product pages with all standard sections.

```jsx
import { ProductPage } from '@/components/content';
import { products } from '@/data/content';

<ProductPage
  product={products.ceraphene}
  showHero={true}
  showBenefits={true}
  showSpecifications={true}
  showApplications={true}
  showComparison={true}
  showCTA={true}
/>
```

**Features:**
- Hero section with key metrics
- Benefits/features section
- How it works explanation
- Technical specifications
- Applications list
- Competitive comparison
- Pricing information
- FAQs
- Call-to-action

### ContentSection Component

Generic section component for any content area.

```jsx
import { ContentSection } from '@/components/content';

<ContentSection
  title="Section Title"
  subtitle="Section subtitle"
  content="Main content text..."
  subsections={[...]}
  variant="default" // or "centered", "wide"
/>
```

**Sub-components:**
- `ContentGrid` - Grid layout for content cards
- `TwoColumnSection` - Split content into two columns
- `HighlightBox` - Highlighted callout boxes
- `Timeline` - Vertical timeline display

### FeatureList Component

Display features, benefits, or any list of items.

```jsx
import { FeatureList } from '@/components/content';

<FeatureList
  features={product.benefits}
  variant="cards" // or "default", "detailed", "simple", "compact"
  columns={3}
  showIcon={true}
  iconType="check" // or "chevron", "sparkle"
/>
```

**Sub-components:**
- `FeatureGrid` - Grid of feature cards with icons
- `BenefitsList` - Numbered benefits list
- `CheckList` - Simple checklist

### SpecTable Component

Display technical specifications.

```jsx
import { SpecTable } from '@/components/content';

<SpecTable
  specifications={product.specifications}
  tables={product.specTables}
  variant="cards" // or "default", "compact", "detailed"
/>
```

**Sub-components:**
- `SpecGrid` - Specifications in grid cards
- `SpecList` - Simple specification list
- `MetricCard` - Single prominent metric card
- `PerformanceComparison` - Before/after comparison

### ComparisonTable Component

Display competitive comparisons.

```jsx
import { ComparisonTable } from '@/components/content';

<ComparisonTable
  table={comparisonData}
  highlightProduct="Ceraphene"
  showIcons={true}
/>
```

**Sub-components:**
- `ComparisonCards` - Side-by-side comparison cards
- `FeatureComparison` - Feature-by-feature comparison matrix
- `PricingComparison` - Pricing tier comparison
- `SimpleComparison` - Basic metric comparison

## Usage Patterns

### Pattern 1: Complete Product Page

Use the ProductPage component with all sections:

```jsx
import { ProductPage } from '@/components/content';
import { products } from '@/data/content';

function CerapheneProduct() {
  return <ProductPage product={products.ceraphene} />;
}
```

### Pattern 2: Custom Product Page

Build a custom page using individual components:

```jsx
import {
  ContentSection,
  FeatureList,
  SpecTable,
  ComparisonTable
} from '@/components/content';
import { products } from '@/data/content';

function CustomProduct() {
  const product = products.graphacrete;

  return (
    <div>
      <section className="hero">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
      </section>

      <section className="benefits">
        <FeatureList features={product.benefits} variant="cards" />
      </section>

      <section className="specs">
        <SpecTable specifications={product.specifications} />
      </section>
    </div>
  );
}
```

### Pattern 3: Dynamic Content Loading

Load and parse markdown content dynamically:

```jsx
import { useState, useEffect } from 'react';
import { parseProductContent } from '@/utils/contentParser';
import { ProductPage } from '@/components/content';

function DynamicProduct({ markdownPath }) {
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

## Content Update Workflow

### Updating Existing Content

1. Edit markdown files in `website-content/`
2. Update corresponding data in `src/data/content.js`
3. Changes automatically reflect in all pages using that content

**Example: Update Product Price**

```javascript
// In src/data/content.js
export const products = {
  ceraphene: {
    // ... other properties
    specifications: {
      price: '₹6,000/50ml' // Updated from ₹5,000
    },
    keyMetrics: [
      { label: 'Price', value: '₹6,000/50ml' } // Update here too
    ]
  }
};
```

### Adding New Products

1. Create markdown file in `website-content/products/`
2. Add product data to `src/data/content.js`
3. Create page component using ProductPage or custom layout
4. Add to navigation

**Example:**

```javascript
// In src/data/content.js
export const products = {
  // ... existing products
  newProduct: {
    id: 'new-product',
    name: 'New Product',
    category: 'Category',
    status: 'Commercial',
    tagline: 'Product tagline',
    description: 'Product description',
    keyMetrics: [...],
    benefits: [...],
    specifications: {...},
    applications: [...]
  }
};
```

```jsx
// In src/pages/NewProduct.jsx
import { ProductPage } from '@/components/content';
import { products } from '@/data/content';

function NewProductPage() {
  return <ProductPage product={products.newProduct} />;
}
```

### Adding New Content Types

1. Define structure in `src/data/content.js`
2. Create or reuse appropriate components
3. Build page using components

## Best Practices

### Content Organization

1. **Keep content in markdown** - Original markdown files are source of truth
2. **Structured data for React** - Transform to structured data for performance
3. **Single source of truth** - Update content in one place, reflect everywhere
4. **Version control** - Track content changes in git

### Component Usage

1. **Use ProductPage for standard products** - Consistent experience
2. **Compose custom pages when needed** - Flexibility for unique layouts
3. **Maintain visual consistency** - Use provided components for uniform look
4. **Test responsive layouts** - Ensure mobile, tablet, desktop work well

### Performance

1. **Static content** - Pre-structure content data for fast loading
2. **Lazy animations** - Use viewport triggers for smooth performance
3. **Image optimization** - Optimize images before adding to content
4. **Code splitting** - Lazy load pages and components

### Maintenance

1. **Update both markdown and data** - Keep them in sync
2. **Document changes** - Use git commits to track content updates
3. **Test after updates** - Verify pages render correctly
4. **Regular audits** - Review content for accuracy and relevance

## Common Tasks

### Add a New Benefit to Product

```javascript
// In src/data/content.js
products.ceraphene.benefits.push({
  title: 'New Benefit',
  description: 'Description of the new benefit'
});
```

### Update Contact Information

```javascript
// In src/data/content.js
companyInfo.contact.phone = '+91-XXX-XXX-XXXX';
```

### Add New Industry

```javascript
// In src/data/content.js
industries.newIndustry = {
  id: 'new-industry',
  name: 'New Industry Name',
  tagline: 'Industry tagline',
  description: 'Industry description',
  challenges: [...],
  solutions: [...],
  benefits: [...]
};
```

### Customize Product Page Sections

```jsx
<ProductPage
  product={products.ceraphene}
  showHero={true}
  showBenefits={true}
  showSpecifications={false} // Hide this section
  showApplications={true}
  showComparison={false} // Hide this section
  showCTA={true}
/>
```

## Advanced Features

### Custom Styling

All components accept `className` prop for custom styling:

```jsx
<FeatureList
  features={benefits}
  className="my-custom-styles"
/>
```

### Animation Control

Components use Framer Motion for animations. Customize via props or CSS:

```jsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  <ContentSection {...props} />
</motion.div>
```

### Theming

Components use Tailwind CSS classes. Customize theme in `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {...},
        secondary: {...}
      }
    }
  }
}
```

## Troubleshooting

### Content Not Displaying

1. Check content data exists in `content.js`
2. Verify component import paths
3. Check for JavaScript errors in console
4. Ensure data structure matches component expectations

### Styling Issues

1. Verify Tailwind CSS is loaded
2. Check for className conflicts
3. Ensure responsive classes are correct
4. Test in different browsers

### Performance Issues

1. Reduce animation complexity
2. Lazy load heavy components
3. Optimize images and assets
4. Profile with React DevTools

## Future Enhancements

Potential improvements to the CMS:

1. **Admin Interface** - Web-based content editor
2. **Markdown Preview** - Real-time preview of markdown changes
3. **Multi-language Support** - Internationalization
4. **Search Functionality** - Content search across site
5. **Analytics Integration** - Track content performance
6. **A/B Testing** - Test different content variations

## Support

For questions or issues:

- Review this documentation
- Check component README files
- Review example implementations
- Contact development team

## Version History

- **v1.0** - Initial CMS implementation
  - Content parser utilities
  - Structured content data
  - Core content components
  - Product page template
  - Documentation and examples

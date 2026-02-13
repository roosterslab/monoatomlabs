# Monoatom Labs - Infographics Design Lab

A dedicated testing environment for experimenting with different infographic variations for the Monoatom Labs website.

## 🎯 Purpose

This lab allows you to:
- Create and test infographic design variations for product metrics
- Experiment with data visualization approaches
- Compare different visual storytelling methods side-by-side
- Test color palettes and layouts before implementing on main website
- Design compelling visual narratives for Monoatom's breakthrough materials

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will open at `http://localhost:5173` (or next available port)

## 📁 Project Structure

```
website-infographics-lab/
├── src/
│   ├── components/
│   │   ├── infographics/
│   │   │   ├── ProductCards.jsx       # Product performance cards
│   │   │   ├── StatsGrid.jsx          # Statistics grid layouts
│   │   │   ├── CompetitiveMatrix.jsx  # Competitive advantage displays
│   │   │   ├── TechRoadmap.jsx        # Technology roadmap visuals
│   │   │   └── ImpactMetrics.jsx      # Market impact visualizations
│   │   └── layout/
│   │       └── InfographicFrame.jsx   # Reusable frame for previews
│   ├── pages/
│   │   ├── Catalog.jsx                # Browse all infographic variations
│   │   └── InfographicView.jsx        # Individual infographic view
│   ├── data/
│   │   ├── infographics.js            # Infographic catalog configuration
│   │   └── monoatomData.js            # Business data and metrics
│   ├── App.jsx
│   └── main.jsx
├── tailwind.config.js
└── README.md
```

## 🎨 Infographic Categories

### 1. Product Performance Cards
Visualize key product metrics:
- **Graphacrete**: 50% strength, 15-20% cement savings, NABL certified
- **Graffisol**: 10-12% energy output, 5-6°C temp reduction
- **Ceraphene**: 9H+ hardness, 60-70% cost savings
- **HD-G-PE**: 20× elongation, +30% tensile strength

### 2. Statistics & Metrics
Company achievements and capabilities:
- 10+ Innovations
- 5+ Commercially Ready Products
- 2 State-of-the-Art Facilities
- 5 Pilot Technologies

### 3. Competitive Advantages
Visual comparison matrices:
- Graphacrete vs competitors (UltraTech, Sika, PureGraph)
- Graffisol vs competitors (KhepriCoat, DSM, Borosil)
- Ceraphene vs competitors (Gtechniq, CarPro, Ceramic Pro)

### 4. Technology Roadmap
Innovation pipeline visualization:
- Market-Ready Products (4)
- Pipeline Products (5): Rustene, Graphyre, Graphosite, Thermaphene, Armophene
- Pilot Projects (5): Hydrogen, Desalination, Water Harvesting, Glass Fibres, Battery

### 5. Facilities & Capabilities
Lab infrastructure showcase:
- Nanomaterials R&D Facility
- Application & Testing Facility
- Characterization equipment (SEM, TEM, Raman)

### 6. Founder Achievements
Awards and recognitions:
- 6× President of India Awardee
- MIT TR35, TED Speaker, NASA Awardee
- 14+ major awards and recognitions

## 🎨 Design Theme

### Color Palette
```javascript
// Primary
Black: #000000 (hero backgrounds)
White: #FFFFFF (content backgrounds)

// Accents
Brand Teal: #0d9488, #0f766e

// Neutrals
50:  #f8fafc
100: #f1f5f9
200: #e2e8f0
300: #cbd5e1
400: #94a3b8
500: #64748b
600: #475569
700: #334155
800: #1e293b
900: #0f172a
950: #0a0a0a
```

### Typography
- **Sans**: Inter - Body text, descriptions
- **Display**: Outfit - Headlines, product names
- **Mono**: Space Grotesk - Metrics, statistics

### Design Principles
1. **Data-First**: Metrics should be immediately visible
2. **Scientific Aesthetic**: Clean, precise, technical
3. **High Contrast**: Black/white with teal accents
4. **Minimal**: Let data speak, reduce decoration
5. **Credible**: Show certifications, awards, validations

## 🎯 Infographic Design Variations

### V1 - Product Performance Grid
**Route:** `/infographic/product-grid-v1`
- 2×2 grid of product cards
- Large metric callouts
- Key benefits listed
- CTA buttons

### V2 - Metrics Dashboard
**Route:** `/infographic/metrics-dashboard-v1`
- Circular progress indicators
- Percentage improvements
- Before/after comparisons
- Real-time style metrics

### V3 - Competitive Matrix
**Route:** `/infographic/competitive-matrix-v1`
- Side-by-side comparison tables
- Highlight Monoatom advantages
- Visual checkmarks and icons
- Data-driven differentiation

### V4 - Innovation Pipeline
**Route:** `/infographic/innovation-pipeline-v1`
- Horizontal timeline
- Market-ready vs pipeline vs pilot
- Status indicators
- Technology maturity levels

### V5 - Facility Showcase
**Route:** `/infographic/facilities-v1`
- Lab equipment visualization
- Capability icons
- Testing process flow
- Scientific credibility

### V6 - Awards & Recognition
**Route:** `/infographic/awards-v1`
- Trophy/badge style
- Timeline of achievements
- Institutional logos (MIT, NASA, etc.)
- Credibility building

## 🔧 How to Add New Infographic Variations

### Step 1: Create the Component

```jsx
// src/components/infographics/ProductCardsV2.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ProductCardsV2 = () => {
  return (
    <div className="w-full min-h-screen bg-black p-12">
      {/* Your experimental infographic design */}
    </div>
  );
};

export default ProductCardsV2;
```

### Step 2: Add to Infographic Catalog

```javascript
// src/data/infographics.js
import { BarChart3 } from 'lucide-react';
import ProductCardsV2 from '../components/infographics/ProductCardsV2';

export const infographicCatalog = [
  // ... existing infographics
  {
    id: 'product-cards-v2',
    name: 'Product Performance Cards V2',
    category: 'Product Metrics',
    description: 'Circular gauge style with animated percentages',
    component: ProductCardsV2,
    thumbnail: '📊',
    dataPoints: ['Graphacrete', 'Graffisol', 'Ceraphene', 'HD-G-PE'],
    status: 'Testing',
    icon: BarChart3
  },
];
```

### Step 3: View Your Infographic

1. Save files
2. New card appears in catalog automatically
3. Click to view at `/infographic/product-cards-v2`
4. Compare with other variations

## 📊 Data Sources

All business data is centralized in `src/data/monoatomData.js`:

```javascript
export const products = {
  graphacrete: {
    name: 'Graphacrete',
    metric: '+50%',
    description: 'Compressive Strength',
    cementSaving: '15-20%',
    waterResistance: '30-45%',
    certification: 'NABL Certified'
  },
  // ... more products
};

export const companyStats = {
  innovations: '10+',
  products: '5+',
  facilities: '2',
  pilots: '5'
};

export const awards = [
  'President of India Award (6×)',
  'MIT TR35 Awardee',
  // ... more awards
];
```

## 🎨 Infographic Types

### 1. Metric Cards
- Large number displays
- Icon + label + value
- Progress bars/circles
- Comparison indicators

### 2. Comparison Tables
- Side-by-side product comparison
- Checkmarks vs competitors
- Highlighted advantages
- Data-driven differentiation

### 3. Timeline/Roadmap
- Horizontal progress bars
- Milestone markers
- Status indicators (Live, Pipeline, Pilot)
- Technology maturity

### 4. Gauges & Charts
- Circular progress
- Bar charts
- Area charts
- Percentage rings

### 5. Icon Grids
- Capability matrices
- Feature lists
- Facility equipment
- Process steps

### 6. Badge Collections
- Award displays
- Certification marks
- Partner logos
- Achievement badges

## 🧭 Navigation

- **Catalog Page:** `/` - Browse all infographic variations
- **Infographic View:** `/infographic/{id}` - View specific design
- **Browser Back/Forward:** Fully supported
- **Direct URLs:** Shareable links to specific infographics

## 📦 Dependencies

- **React 19.0.0** - UI framework
- **React Router DOM 7.1.3** - Routing
- **Framer Motion 12.1.3** - Animations
- **Tailwind CSS 3.4.17** - Styling
- **Lucide React** - Icons
- **Vite** - Build tool

## 🎯 Use Cases

### Testing Different Metric Visualizations
- Numerical vs graphical
- Static vs animated
- Minimalist vs detailed

### Comparing Color Schemes
- Black backgrounds vs white
- Teal accents vs purple
- High contrast vs subtle

### Layout Experimentation
- Grid vs stack
- Horizontal vs vertical
- Card-based vs dashboard

### Typography Hierarchy
- Metric size emphasis
- Label positioning
- Font weight variations

## 💡 Design Tips

1. **Hierarchy**: Metrics > Labels > Details
2. **Contrast**: Use black/white for max impact
3. **Simplicity**: One message per infographic
4. **Credibility**: Include certifications, awards
5. **Scannability**: Eye should flow naturally
6. **Responsiveness**: Test mobile, tablet, desktop
7. **Animation**: Subtle, purposeful motion
8. **Whitespace**: Don't overcrowd

## 🔗 Business Context

### Core Value Proposition
"World's only Trillion Dollar Nanomaterial"
- Commercializing graphene from lab to market
- Real-world validation (NABL certified)
- Award-winning founders

### Key Differentiators
1. **Proven Performance**: Field-tested, certified products
2. **Cost Advantage**: 60-70% savings vs competitors
3. **Scientific Credibility**: IISc, IIT, NCL partnerships
4. **Scalability**: Pilot to commercial manufacturing

### Target Audiences
- Industrial manufacturers
- Infrastructure developers
- Technology licensees
- Joint venture partners
- Government/public sector

## 📝 Notes

- Keep infographics data-focused and credible
- Use actual metrics from source content
- Test on different screen sizes
- Maintain brand consistency
- Document design decisions

---

**Built for Monoatom Labs - Advanced Materials for 4th Industrial Revolution**
**React + Vite + Tailwind CSS + Framer Motion**

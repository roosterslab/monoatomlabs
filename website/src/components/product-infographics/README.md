# Product Infographics

Interactive infographics and visualizations for the Monoatom website, designed to match the site's UI/UX while leveraging formulas and patterns from the lab.

## Components Overview

### Calculators & Tools
- **GraffisolEnergyCalculator** - Interactive solar energy ROI calculator
- **CerapheneCostComparison** - Cost savings comparison tool
- **HDGPEPerformanceCalculator** - Polymer performance analysis tool

### Application Showcases
- **GraphacreteApplications** - Construction use case scenarios
- **GraffisolSolarApplications** - Solar installation applications
- **HDGPEPolymerApplications** - Polymer application scenarios

### Performance Displays
- **ProductPerformanceCards** - Circular gauge performance metrics
- **ROICostSavingsDisplay** - ROI and cost savings showcase

### Company Information
- **CompanyStatisticsDashboard** - Company metrics and achievements
- **CompetitiveAdvantageMatrix** - Product comparison tables

### Innovation & Research
- **InnovationPipelineTimeline** - Technology roadmap timeline
- **RDFacilitiesOverview** - R&D facilities showcase

## Usage

```jsx
import {
  GraffisolEnergyCalculator,
  ProductPerformanceCards,
  CompanyStatisticsDashboard
} from './components/product-infographics';

// Use in your pages
<GraffisolEnergyCalculator />
<ProductPerformanceCards />
<CompanyStatisticsDashboard />
```

## Design System

All components follow the website's design system:
- **Colors**: Black backgrounds, teal/brand accents (#0d9488)
- **Fonts**: Inter (sans), Outfit (display), Space Grotesk (mono)
- **Style**: Technical, monochromatic, futuristic aesthetic
- **Effects**: Backdrop blur, border glows, motion animations

## Integration Notes

1. **Dependencies Required**:
   - framer-motion
   - recharts
   - lucide-react

2. **Tailwind Configuration**:
   All components use the existing Tailwind setup from the main website

3. **Page Integration**:
   - Home page: ProductPerformanceCards, CompanyStatisticsDashboard, ROICostSavingsDisplay
   - Product pages: Calculators, Applications, CompetitiveAdvantageMatrix, ROICostSavingsDisplay
   - Innovation page: InnovationPipelineTimeline
   - About page: RDFacilitiesOverview, CompanyStatisticsDashboard

## Formulas & Data

All calculators use validated formulas from the lab:
- **Graffisol**: 11% energy gain, soiling impact, temperature benefits
- **Ceraphene**: 60-70% cost savings vs premium alternatives
- **HD-G-PE**: 20× elongation, 30% tensile strength, 20% lifespan
- **Graphacrete**: 40-50% strength gain, 15-20% cement savings

## Responsive Design

All components are fully responsive:
- Mobile: Single column layouts
- Tablet: 2-column grids
- Desktop: 3-4 column grids with optimal spacing

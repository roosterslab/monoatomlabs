# Monoatom Labs Website - Routing Structure

## Overview
This document outlines the complete routing structure for the Monoatom Labs React website using **HashRouter** for hash-based navigation.

**Total Pages Created:** 26 React components
**Router Type:** HashRouter (hash-based URLs)
**Build Status:** ✅ Successful

---

## Complete Route Structure

### Home
- `#/` → **Home.jsx**
  - Homepage with hero, products, technology sections

---

### About Section (3 pages)
- `#/about/company` → **about/Company.jsx**
  - Company overview, vision, mission, what makes us different

- `#/about/founders` → **about/Founders.jsx**
  - Founders & team profiles, innovation journey

- `#/about/facilities` → **about/Facilities.jsx**
  - R&D facilities, core capabilities, partnership network

---

### Products Section (4 pages)
- `#/products` → **products/ProductsOverview.jsx**
  - Overview of all commercial products with comparison matrix

- `#/products/graphacrete` → **products/Graphacrete.jsx**
  - High-Performance Concrete Additive (Commercially Available)
  - 40-50% strength gain, 15-20% cement reduction

- `#/products/graffisol` → **products/Graffisol.jsx**
  - Next-Generation Solar Panel Coating (Commercially Available)
  - 7-8% power output increase

- `#/products/ceraphene` → **products/Ceraphene.jsx**
  - Ultra-Durable Ceramic Coating (Commercially Available)
  - 9H+ hardness protection

- `#/products/hd-g-pe` → **products/HDGPE.jsx**
  - Graphene-Reinforced Polymer Enhancer (Commercially Available)
  - 30% strength improvement

---

### Products Pipeline (6 pages)
- `#/products/pipeline` → **products/pipeline/PipelineOverview.jsx**
  - Overview of products in development

- `#/products/pipeline/rustene` → **products/pipeline/Rustene.jsx**
  - Anti-Corrosion Paint (Pipeline/Development)

- `#/products/pipeline/graphyre` → **products/pipeline/Graphyre.jsx**
  - Tire Technology (Pipeline/Development)

- `#/products/pipeline/graphosite` → **products/pipeline/Graphosite.jsx**
  - Advanced Composites (Pipeline/Development)

- `#/products/pipeline/thermaphene` → **products/pipeline/Thermaphene.jsx**
  - Heating Solutions (Pipeline/Development)

- `#/products/pipeline/armophene` → **products/pipeline/Armophene.jsx**
  - Protective Armor (Pipeline/Development)

---

### Technology Section (3 pages)
- `#/technology/platform` → **technology/Platform.jsx**
  - Technology platform overview, core capabilities

- `#/technology/pilot-projects` → **technology/PilotProjects.jsx**
  - Field-scale pilot projects and validations

- `#/technology/capabilities` → **technology/Capabilities.jsx**
  - Technical capabilities and R&D infrastructure

---

### Partnership (1 page)
- `#/partnership` → **Partnership.jsx**
  - Partnership models (JV-SPV, Technology Licensing)
  - Collaboration opportunities

---

### Industries Section (5 pages)
- `#/industries` → **industries/IndustriesOverview.jsx**
  - Overview of all industries served

- `#/industries/construction` → **industries/Construction.jsx**
  - Construction & Infrastructure applications

- `#/industries/solar-energy` → **industries/SolarEnergy.jsx**
  - Solar & Clean Energy applications

- `#/industries/automotive` → **industries/Automotive.jsx**
  - Automotive & Coatings applications

- `#/industries/advanced-materials` → **industries/AdvancedMaterials.jsx**
  - Advanced Materials (Aerospace, Defense, etc.)

---

### Contact (1 page)
- `#/contact` → **Contact.jsx**
  - Contact information, business hours, quick links

---

## File Structure

```
website/src/
├── App.jsx (Updated with HashRouter and all routes)
├── utils/
│   └── contentData.js (Centralized content data)
├── pages/
│   ├── Home.jsx
│   ├── Contact.jsx
│   ├── Partnership.jsx
│   ├── about/
│   │   ├── Company.jsx
│   │   ├── Founders.jsx
│   │   └── Facilities.jsx
│   ├── products/
│   │   ├── ProductsOverview.jsx
│   │   ├── Graphacrete.jsx
│   │   ├── Graffisol.jsx
│   │   ├── Ceraphene.jsx
│   │   ├── HDGPE.jsx
│   │   └── pipeline/
│   │       ├── PipelineOverview.jsx
│   │       ├── Rustene.jsx
│   │       ├── Graphyre.jsx
│   │       ├── Graphosite.jsx
│   │       ├── Thermaphene.jsx
│   │       └── Armophene.jsx
│   ├── technology/
│   │   ├── Platform.jsx
│   │   ├── PilotProjects.jsx
│   │   └── Capabilities.jsx
│   └── industries/
│       ├── IndustriesOverview.jsx
│       ├── Construction.jsx
│       ├── SolarEnergy.jsx
│       ├── Automotive.jsx
│       └── AdvancedMaterials.jsx
└── components/ (existing layout and UI components)
```

---

## Key Features

### Hash-Based Routing
- Uses `HashRouter` instead of `BrowserRouter`
- URLs use hash fragments (e.g., `#/about/company`)
- Works seamlessly with static hosting (no server-side routing needed)

### Content Data Structure
- Centralized content in `utils/contentData.js`
- Easy to update and maintain
- Structured data for all pages

### Page Components
- All pages follow consistent design patterns
- Responsive layouts with Tailwind CSS
- Reusable UI components (SectionHeading, Button, etc.)
- Gradient backgrounds and modern styling

### Navigation
- Internal navigation uses React Router's `Link` component
- Consistent navigation between related pages
- Breadcrumb structure in content data

---

## Navigation Examples

### From Homepage to Products
```jsx
<Link to="/products/graphacrete">Graphacrete</Link>
```
Results in URL: `http://localhost:5177/#/products/graphacrete`

### From Product to Related Pages
```jsx
<Link to="/contact">Contact Us</Link>
```

### External Links (Email, Phone)
```jsx
<a href="mailto:info@monoatomlabs.com">Email</a>
<a href="tel:+91-989-919-9809">Call</a>
```

---

## Content Mapping

Each page component maps to markdown content in:
`C:\Users\globql-ws\Documents\project-raj-sir\monoatoms\website-content\`

### Content Sources
- `index.md` → Home.jsx
- `about/company.md` → about/Company.jsx
- `about/founders-team.md` → about/Founders.jsx
- `about/facilities.md` → about/Facilities.jsx
- `products/graphacrete.md` → products/Graphacrete.jsx
- And so on...

---

## Build & Deployment

### Development
```bash
npm run dev
# Server starts at http://localhost:5177 (or next available port)
```

### Production Build
```bash
npm run build
# Build output in dist/ directory
# ✅ Build verified successful (4.08s)
```

### Deployment
The build can be deployed to any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- AWS S3
- etc.

Hash-based routing works perfectly with static hosting without requiring server configuration.

---

## Component Features

### Common Elements Across Pages
- Gradient hero sections
- Section headings with subtitles
- Card-based layouts
- Call-to-action sections
- Related links navigation
- Consistent color scheme (purple/pink gradients)
- Responsive design (mobile-first)

### Status Badges
- **Green badges**: Commercially Available products
- **Orange badges**: Pipeline/Development products
- **Blue badges**: Field-scale pilot projects

---

## Next Steps

### Content Enhancement
1. Populate full content from markdown files into contentData.js
2. Add images and graphics
3. Implement contact form functionality
4. Add analytics tracking

### Feature Additions
1. Search functionality
2. Product comparison tools
3. Technical documentation downloads
4. Newsletter signup
5. Blog/news section

### Optimization
1. Image optimization and lazy loading
2. Code splitting for better performance
3. SEO metadata for each page
4. Performance monitoring

---

## Testing

### Verified Elements
- ✅ All routes defined in App.jsx
- ✅ All 26 page components created
- ✅ HashRouter implemented
- ✅ Build successful (no errors)
- ✅ Dev server runs successfully
- ✅ Component imports working
- ✅ Navigation structure complete

### Manual Testing Checklist
- [ ] Test all navigation links
- [ ] Verify responsive layouts on mobile/tablet/desktop
- [ ] Check all internal links work correctly
- [ ] Verify external links (email, phone, website)
- [ ] Test hash navigation (back/forward buttons)
- [ ] Validate content accuracy
- [ ] Check for broken images or resources

---

## Contact & Support

**Developer:** Monoatom Labs Website Team
**Last Updated:** February 5, 2026
**Version:** 1.0.0
**Router:** React Router v6 with HashRouter

For questions or issues, contact: info@monoatomlabs.com

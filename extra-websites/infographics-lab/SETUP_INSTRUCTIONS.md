# Monoatom Labs Infographics Lab - Setup Instructions

## 📦 Installation

```bash
# Navigate to the project directory
cd C:\Users\globql-ws\Documents\project-raj-sir\monoatoms\website-infographics-lab

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will open at `http://localhost:5173`

## 🎯 What's Been Created

### ✅ Configuration Files
- ✅ `package.json` - Dependencies and scripts
- ✅ `vite.config.js` - Vite build configuration
- ✅ `tailwind.config.js` - Tailwind CSS with Monoatom theme
- ✅ `postcss.config.js` - PostCSS configuration
- ✅ `index.html` - HTML entry point with Google Fonts
- ✅ `.gitignore` - Git ignore file

### ✅ Source Structure
```
src/
├── main.jsx          ✅ React entry point
├── App.jsx           ✅ Router setup
├── index.css         ✅ Tailwind imports + base styles
├── data/
│   └── monoatomData.js  ✅ Complete business data
├── pages/            ⏳ TO BE CREATED
│   ├── Catalog.jsx
│   └── InfographicView.jsx
└── components/       ⏳ TO BE CREATED
    ├── infographics/
    └── layout/
```

### ✅ Business Data (monoatomData.js)
Complete data structure including:
- ✅ **Products**: Graphacrete, Graffisol, Ceraphene, HD-G-PE (full metrics)
- ✅ **Pipeline Products**: Rustene, Graphyre, Graphosite, Thermaphene, Armophene
- ✅ **Pilot Projects**: All 5 pilot technologies
- ✅ **Company Stats**: Innovations, facilities, awards
- ✅ **Founders**: Sushanth & Aayush (complete profiles)
- ✅ **Facilities**: Both R&D facilities with capabilities
- ✅ **Competitive Data**: Comparison matrices for all products
- ✅ **Brand Taglines**: Vision, mission, pillars

## 🎨 Theme & Colors (Configured)

### Color Palette
- **Background**: #000000 (Black) for hero, #FFFFFF (White) for content
- **Brand**: #0d9488 (Teal 500), #0f766e (Teal 600)
- **Neutrals**: 50-950 scale (#f8fafc to #0a0a0a)

### Typography
- **Sans**: Inter - Body text
- **Display**: Outfit - Headlines
- **Mono**: Space Grotesk - Metrics

## 🚀 Next Steps

### 1. Install Dependencies (REQUIRED)
```bash
npm install
```

### 2. Create Missing Source Files

You need to create:

#### A. Pages
- `src/pages/Catalog.jsx` - Browse infographics
- `src/pages/InfographicView.jsx` - View individual infographic

#### B. Infographic Catalog
- `src/data/infographics.js` - Registry of all infographic variations

#### C. Infographic Components
Create in `src/components/infographics/`:

**Product Metrics:**
- `ProductCardsV1.jsx` - 2×2 grid with metrics
- `ProductCardsV2.jsx` - Circular gauges
- `ProductCardsV3.jsx` - Minimal cards with icons

**Statistics:**
- `StatsGridV1.jsx` - Company stats dashboard
- `StatsGridV2.jsx` - Animated counters
- `MetricCardsV1.jsx` - Large number displays

**Competitive:**
- `CompetitiveMatrixV1.jsx` - Side-by-side comparison
- `CompetitiveMatrixV2.jsx` - Radar chart style
- `AdvantageCardsV1.jsx` - Highlight differentiators

**Timeline:**
- `TechRoadmapV1.jsx` - Horizontal timeline
- `TechRoadmapV2.jsx` - Vertical progress
- `ProductPipelineV1.jsx` - Status indicators

**Facilities:**
- `FacilityShowcaseV1.jsx` - Lab equipment grid
- `CapabilityMatrixV1.jsx` - Icon grid with labels

**Awards:**
- `AwardsDisplayV1.jsx` - Badge collection
- `AwardsDisplayV2.jsx` - Timeline format
- `CredibilityBarV1.jsx` - Horizontal banner

#### D. Layout Components
- `src/components/layout/InfographicFrame.jsx` - Reusable preview frame

### 3. Example Infographic Component Template

```jsx
// src/components/infographics/ProductCardsV1.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { products } from '../../data/monoatomData';

const ProductCardsV1 = () => {
  const productList = Object.values(products);

  return (
    <div className="w-full min-h-screen bg-black p-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-display font-bold text-white mb-4">
            Market-Ready Products
          </h1>
          <p className="text-xl text-neutral-400">
            Commercially viable graphene solutions deployed at scale
          </p>
        </div>

        {/* 2×2 Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {productList.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-neutral-900 border border-neutral-800 p-8 rounded-lg"
            >
              {/* Product Name */}
              <h3 className="text-3xl font-display font-bold text-white mb-2">
                {product.name}
              </h3>
              <p className="text-brand-500 text-sm mb-6">{product.category}</p>

              {/* Key Metric */}
              <div className="mb-6">
                <div className="text-6xl font-bold text-white mb-2">
                  {product.metrics[Object.keys(product.metrics)[0]]}
                </div>
                <p className="text-neutral-400">
                  {product.tagline}
                </p>
              </div>

              {/* Benefits */}
              <ul className="space-y-2">
                {product.benefits.slice(0, 3).map((benefit, i) => (
                  <li key={i} className="text-sm text-neutral-300 flex items-start">
                    <span className="text-brand-500 mr-2">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCardsV1;
```

### 4. Example Catalog Page Template

```jsx
// src/pages/Catalog.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { infographicCatalog } from '../data/infographics';

const Catalog = () => {
  return (
    <div className="min-h-screen bg-neutral-50 p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <h1 className="text-5xl font-display font-bold text-neutral-900 mb-4">
            Monoatom Labs Infographics Lab
          </h1>
          <p className="text-xl text-neutral-600">
            Explore different visualization approaches for product metrics and company data
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {infographicCatalog.map((infographic) => (
            <Link
              key={infographic.id}
              to={`/infographic/${infographic.id}`}
              className="group"
            >
              <div className="bg-white border-2 border-neutral-200 rounded-lg p-6 hover:border-brand-500 transition-colors">
                <div className="text-5xl mb-4">{infographic.thumbnail}</div>
                <h3 className="text-xl font-display font-semibold text-neutral-900 mb-2">
                  {infographic.name}
                </h3>
                <p className="text-sm text-neutral-600 mb-4">
                  {infographic.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-neutral-500">{infographic.category}</span>
                  <span className="text-xs px-2 py-1 bg-brand-500 text-white rounded">
                    {infographic.status}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
```

## 📚 Documentation

- ✅ `README.md` - Complete lab documentation
- ✅ `SETUP_INSTRUCTIONS.md` - This file

## 🎯 Recommended Infographics to Create

### Priority 1 (Essential)
1. **Product Performance Grid** - 2×2 cards with key metrics
2. **Company Stats Dashboard** - Innovations, facilities, awards
3. **Competitive Matrix** - Side-by-side comparison tables

### Priority 2 (High Value)
4. **Innovation Pipeline** - Market-ready vs pipeline vs pilot
5. **Founder Achievements** - Awards and recognitions timeline
6. **Facility Capabilities** - Lab equipment and testing

### Priority 3 (Nice to Have)
7. **Metric Gauges** - Circular progress indicators
8. **Cost Savings Display** - ROI and cost-benefit analysis
9. **Market Impact** - Industry applications matrix

## 💡 Tips

1. **Start Simple**: Begin with ProductCardsV1 (grid layout)
2. **Use Data**: Import from `monoatomData.js`
3. **Test Colors**: Black backgrounds for impact
4. **Add Animation**: Use framer-motion for polish
5. **Keep Consistent**: Follow brand theme (teal accents)

## 🔗 Resources

- **Data Source**: `src/data/monoatomData.js`
- **Theme**: `tailwind.config.js`
- **Example Lab**: `C:\Users\globql-ws\Documents\project-sushant\graffilium-herosection`

---

**Ready to start building infographics!**
**Next: `npm install` then create the page and component files**

# ROI Calculator Data Lab

A React-based stakeholder portal for collecting critical data needed for accurate ROI calculator implementations.

## Overview

This website serves as a transparent data collection portal where stakeholders can:
- Understand the formulas used in each ROI calculator
- See what data is source-backed vs. what's needed
- Submit missing data via structured forms
- Download markdown files with their submissions

## Products Covered

1. **Ceraphene** (Ceramic Coating) - 85% accurate
2. **Graffisol** (Solar Coating) - 80% accurate (1 CRITICAL item)
3. **Graphacrete** (Concrete Additive) - 75% accurate
4. **HD-G-PE** (Polymer Enhancer) - 75% accurate (2 CRITICAL items)

## Tech Stack

- **React 18.2.0** - UI framework
- **Vite 5.1.4** - Build tool and dev server
- **React Router 6.22.0** - Client-side routing
- **Framer Motion 11.0.3** - Animations
- **Tailwind CSS 3.4.1** - Styling

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## Building for Production

```bash
npm run build
```

Output will be in the `dist/` directory.

To preview the production build:
```bash
npm run preview
```

## Project Structure

```
website-infographics-data-lab/
├── src/
│   ├── components/
│   │   ├── forms/              # Product-specific data submission forms
│   │   │   ├── CerapheneForm.jsx
│   │   │   ├── GraffisolForm.jsx
│   │   │   ├── GraphacreteForm.jsx
│   │   │   └── HDGPEForm.jsx
│   │   ├── Header.jsx          # Page header with accuracy indicator
│   │   ├── Navigation.jsx      # Sticky navigation bar
│   │   └── ProductCard.jsx     # Product summary cards
│   ├── pages/
│   │   ├── Dashboard.jsx       # Main landing page
│   │   ├── Ceraphene.jsx       # Ceraphene formula details
│   │   ├── Graffisol.jsx       # Graffisol formula details
│   │   ├── Graphacrete.jsx     # Graphacrete formula details
│   │   ├── HDGPE.jsx           # HD-G-PE formula details
│   │   └── SubmitData.jsx      # Data submission page
│   ├── utils/
│   │   └── generateMarkdown.js # MD file generation & download
│   ├── App.jsx                 # React Router setup
│   ├── main.jsx                # React app entry point
│   └── index.css               # Global styles + Tailwind
├── submissions/                 # Downloaded MD files go here
├── public/                      # Static assets
├── index.html                   # HTML template
├── package.json                 # Dependencies
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind configuration
└── postcss.config.js           # PostCSS configuration
```

## Features

### Dashboard
- Overall calculator accuracy (79%)
- Product status cards with accuracy indicators
- Critical data gap alerts
- Business impact metrics (₹600 Cr revenue potential)

### Product Pages
Each product page shows:
- Current calculator status and accuracy
- What data we have (source-backed)
- What data we need (with priority levels)
- Complete formula documentation
- Data classification system (4-tier)
- Business impact explanation

### Data Submission Workflow
1. User selects a product
2. Fills out product-specific form
3. Clicks "Download Data File"
4. Markdown file is generated and downloaded
5. Instructions shown to email file or save to submissions/

### Markdown File Generation
Forms automatically generate structured markdown files containing:
- Product name and submission timestamp
- All submitted data organized by category
- Submitter information (name, department, email, date)
- Additional notes
- Instructions for where to send/save the file

## Data Collection Strategy

### Priority Levels
- **🚨 CRITICAL (Red)**: Blocking calculator launch
  - Graffisol: Installed coating cost (₹/kW)
  - HD-G-PE: Pricing structure + dosage recommendations

- **⚠️ HIGH PRIORITY (Amber)**: Needed for enhanced features
  - Ceraphene: Competitor durability data
  - Graphacrete: Cement content + dosage range

### 4-Tier Data Classification
1. **Source-Backed (Green)**: From pricing team, technical specs, contracts
2. **Validated Range (Yellow)**: From field testing, lab validation
3. **Customer Input (Blue)**: User-provided data for their specific scenario
4. **Assumptions (Gray)**: Industry averages, documented assumptions

## Deployment

This is a static site that can be deployed to:
- **Netlify**: Drag & drop the `dist/` folder
- **Vercel**: Connect to Git repo for automatic deployments
- **GitHub Pages**: Use `gh-pages` package
- **Internal server**: Serve the `dist/` folder with any static file server

No backend required - all functionality runs client-side.

## Support

For questions or issues:
- Email: data-team@monoatomlabs.com
- Internal stakeholders can also reach out via Slack/Teams

---

**Built for Monoatom Labs stakeholders** | Internal data collection portal | 2026

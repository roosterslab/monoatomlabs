import { BarChart3, Target, Award, Zap, Building2, TrendingUp, Calculator, ArrowLeftRight, Sparkles, Leaf, DollarSign, Activity, Gauge, Play, LineChart, Radar, Rocket, PieChart, Globe, Layers, Atom, MapPin, Shield, Users, Trophy, Sun, Package } from 'lucide-react';

// Import infographic components
import ProductCardsV1 from '../components/infographics/ProductCardsV1';
import ProductCardsV2 from '../components/infographics/ProductCardsV2';
import MinimalCardsV1 from '../components/infographics/MinimalCardsV1';
import StatsGridV1 from '../components/infographics/StatsGridV1';
import CompetitiveMatrixV1 from '../components/infographics/CompetitiveMatrixV1';
import TechRoadmapV1 from '../components/infographics/TechRoadmapV1';
import AwardsDisplayV1 from '../components/infographics/AwardsDisplayV1';
import FacilityShowcaseV1 from '../components/infographics/FacilityShowcaseV1';
import ROIDisplayV1 from '../components/infographics/ROIDisplayV1';
import InteractiveROICalculator from '../components/infographics/InteractiveROICalculator';
import BeforeAfterSlider from '../components/infographics/BeforeAfterSlider';
import HowItWorksSimple from '../components/infographics/HowItWorksSimple';
import EmissionsImpactVisualizer from '../components/infographics/EmissionsImpactVisualizer';
import LivePerformanceSimulator from '../components/infographics/LivePerformanceSimulator';
import SavingsProjectionCalculator from '../components/infographics/SavingsProjectionCalculator';
import IndustryBenchmarking from '../components/infographics/IndustryBenchmarking';
import PilotTimeline from '../components/infographics/PilotTimeline';
import TCOBreakdown from '../components/infographics/TCOBreakdown';
import ProductComparisonTool from '../components/infographics/ProductComparisonTool';
import MarketOpportunityAnalyzer from '../components/infographics/MarketOpportunityAnalyzer';
import ProductMechanismAnimation from '../components/infographics/ProductMechanismAnimation';
import NationalImpactMap from '../components/infographics/NationalImpactMap';
import CertificationDashboard from '../components/infographics/CertificationDashboard';
import CustomerSuccessStories from '../components/infographics/CustomerSuccessStories';
import FounderJourneyTimeline from '../components/infographics/FounderJourneyTimeline';
import GraphacreteCalculator from '../components/infographics/GraphacreteCalculator';
import GraffisolCalculator from '../components/infographics/GraffisolCalculator';
import CerapheneCalculator from '../components/infographics/CerapheneCalculator';
import HDGPECalculator from '../components/infographics/HDGPECalculator';
import GraphacreteApplicationScenarios from '../components/infographics/GraphacreteApplicationScenarios';
import GraffisolApplicationScenarios from '../components/infographics/GraffisolApplicationScenarios';
import CerapheneApplicationScenarios from '../components/infographics/CerapheneApplicationScenarios';
import HDGPEApplicationScenarios from '../components/infographics/HDGPEApplicationScenarios';
import GraphacreteQuotationTool from '../components/infographics/GraphacreteQuotationTool';
import GraffisolQuotationTool from '../components/infographics/GraffisolQuotationTool';
import CerapheneQuotationTool from '../components/infographics/CerapheneQuotationTool';
import HDGPEQuotationTool from '../components/infographics/HDGPEQuotationTool';
import ProductSpecificationSheets from '../components/infographics/ProductSpecificationSheets';
import IndustrySolutionMatrix from '../components/infographics/IndustrySolutionMatrix';
import ImplementationRoadmap from '../components/infographics/ImplementationRoadmap';
import ScienceExplained from '../components/infographics/ScienceExplained';
import CarbonCreditCalculator from '../components/infographics/CarbonCreditCalculator';

export const infographicCatalog = [
  // === INTERACTIVE TOOLS (NEW!) ===
  {
    id: 'interactive-roi-calculator',
    name: 'Interactive ROI Calculator ⭐',
    category: 'Interactive Tools',
    description: 'Real-time ROI calculator with sliders for project size, time horizon, and product selection. Includes charts and financial projections.',
    component: InteractiveROICalculator,
    thumbnail: '🧮',
    dataPoints: ['All Products', 'ROI Charts', 'Financial Projections', 'Export/Share'],
    changes: 'Recharts integration, interactive controls, real-time calculations',
    status: 'Live',
    icon: Calculator,
    impact: 'HIGH'
  },
  {
    id: 'before-after-slider',
    name: 'Before/After Comparison Slider ⭐',
    category: 'Interactive Tools',
    description: 'Draggable split-screen comparison showing transformation with Monoatom products. Interactive slider reveals improvements.',
    component: BeforeAfterSlider,
    thumbnail: '↔️',
    dataPoints: ['All Products', 'Drag Interaction', 'Visual Comparison'],
    changes: 'Framer Motion drag, split-screen effect, red/green theming',
    status: 'Live',
    icon: ArrowLeftRight,
    impact: 'HIGH'
  },
  {
    id: 'how-it-works-simple',
    name: 'How It Works (Simple) ⭐',
    category: 'Interactive Tools',
    description: 'Ultra-simple 4-step visual explanation perfect for non-technical audiences. Animated hover effects and before/after cards.',
    component: HowItWorksSimple,
    thumbnail: '✨',
    dataPoints: ['4 Steps', 'All Products', 'Before/After', 'Hover Animations'],
    changes: 'No jargon, gradient steps, large icons, simple language',
    status: 'Live',
    icon: Sparkles,
    impact: 'HIGH'
  },
  {
    id: 'emissions-impact-visualizer',
    name: 'Emissions Impact Visualizer ⭐',
    category: 'Interactive Tools',
    description: 'Environmental impact calculator with real-world equivalents (trees, cars, homes) and carbon credit estimates.',
    component: EmissionsImpactVisualizer,
    thumbnail: '🌿',
    dataPoints: ['CO₂ Reduction', 'Real-world Equivalents', 'Carbon Credits', 'Charts'],
    changes: 'Recharts bar chart, equivalents display, green theming',
    status: 'Live',
    icon: Leaf,
    impact: 'HIGH'
  },
  {
    id: 'live-performance-simulator',
    name: 'Live 30-Day Performance Simulator ⭐',
    category: 'Interactive Tools',
    description: 'Real-time 30-day pilot simulation with play/pause controls, animated charts, and completion celebration screen.',
    component: LivePerformanceSimulator,
    thumbnail: '▶️',
    dataPoints: ['Real-time Animation', 'Performance Charts', 'Energy/Cost/CO₂', 'Play/Pause'],
    changes: 'Animated simulation, area charts, completion screen',
    status: 'Live',
    icon: Play,
    impact: 'HIGH'
  },
  {
    id: 'savings-projection-calculator',
    name: 'Long-Term Savings Projection ⭐',
    category: 'Interactive Tools',
    description: 'Financial projection tool with milestone tracking, dual chart modes, and detailed ROI analysis over 1-5 years.',
    component: SavingsProjectionCalculator,
    thumbnail: '📊',
    dataPoints: ['Monthly/Cumulative Views', 'Break-even Analysis', 'Milestone Tracking', 'Export'],
    changes: 'Recharts line/area charts, financial summary table',
    status: 'Live',
    icon: LineChart,
    impact: 'HIGH'
  },
  {
    id: 'industry-benchmarking',
    name: 'Industry Performance Benchmarking ⭐',
    category: 'Interactive Tools',
    description: 'Radar charts comparing Monoatom vs industry standards across multiple metrics with performance scoring (0-100).',
    component: IndustryBenchmarking,
    thumbnail: '🎯',
    dataPoints: ['Radar Charts', 'Performance Scores', 'Multi-Industry', 'Detailed Breakdown'],
    changes: 'Recharts radar visualization, industry selection, badges',
    status: 'Live',
    icon: Radar,
    impact: 'HIGH'
  },
  {
    id: 'pilot-timeline',
    name: 'Pilot Program Journey ⭐',
    category: 'Interactive Tools',
    description: '5-phase interactive timeline from discovery to deployment with activities, deliverables, and success metrics.',
    component: PilotTimeline,
    thumbnail: '🚀',
    dataPoints: ['5 Phases', 'Interactive Navigation', 'Activities & Deliverables', 'Success Metrics'],
    changes: 'Phase navigation, animated transitions, success stats',
    status: 'Live',
    icon: Rocket,
    impact: 'HIGH'
  },
  {
    id: 'tco-breakdown',
    name: 'TCO Breakdown Analysis ⭐',
    category: 'Interactive Tools',
    description: 'Total Cost of Ownership comparison with interactive pie charts and toggle between current vs. with product views.',
    component: TCOBreakdown,
    thumbnail: '🥧',
    dataPoints: ['Pie Charts', 'Toggle Views', 'ROI Summary', 'Side-by-side Comparison'],
    changes: 'Recharts pie visualization, scenario selection, detailed breakdown',
    status: 'Live',
    icon: PieChart,
    impact: 'HIGH'
  },
  {
    id: 'product-comparison-tool',
    name: 'Product Comparison Tool ⭐',
    category: 'Interactive Tools',
    description: 'Side-by-side comparison of up to 3 products with specifications table and pros/cons analysis.',
    component: ProductComparisonTool,
    thumbnail: '⚖️',
    dataPoints: ['Multi-select Products', 'Specs Table', 'Pros & Cons', 'Decision Helper'],
    changes: 'Interactive product selection, dual view modes, detailed comparison',
    status: 'Live',
    icon: Layers,
    impact: 'HIGH'
  },
  {
    id: 'market-opportunity-analyzer',
    name: 'Market Opportunity Analyzer ⭐',
    category: 'Interactive Tools',
    description: 'TAM/SAM/SOM calculator with bar and pie charts showing market size and revenue projections across segments.',
    component: MarketOpportunityAnalyzer,
    thumbnail: '🌍',
    dataPoints: ['TAM/SAM/SOM', 'Revenue Projections', 'Growth Rates', 'Segment Breakdown'],
    changes: 'Recharts bar/pie charts, market calculations, assumptions table',
    status: 'Live',
    icon: Globe,
    impact: 'HIGH'
  },
  {
    id: 'product-mechanism-animation',
    name: 'Product Mechanism Animation ⭐',
    category: 'Interactive Tools',
    description: 'Molecular-level visualization with 4-stage animation showing how products work with animated particles.',
    component: ProductMechanismAnimation,
    thumbnail: '⚛️',
    dataPoints: ['4 Stages', 'Particle Animation', 'Play/Pause Controls', 'Stage Navigation'],
    changes: 'Framer Motion particle system, stage progression, animated transitions',
    status: 'Live',
    icon: Atom,
    impact: 'HIGH'
  },
  {
    id: 'national-impact-map',
    name: 'National Impact Map ⭐',
    category: 'Interactive Tools',
    description: 'India map with pulsing city markers showing national adoption scenarios and environmental/economic impact.',
    component: NationalImpactMap,
    thumbnail: '🗺️',
    dataPoints: ['India Map', 'Adoption Levels', 'CO₂ Impact', 'Economic Value'],
    changes: 'SVG map visualization, pulsing markers, impact calculations',
    status: 'Live',
    icon: MapPin,
    impact: 'HIGH'
  },
  {
    id: 'certification-dashboard',
    name: 'Certification & Quality Dashboard ⭐',
    category: 'Interactive Tools',
    description: 'NABL accreditation and testing capabilities showcase with equipment grid and quality metrics.',
    component: CertificationDashboard,
    thumbnail: '🛡️',
    dataPoints: ['NABL Certified', 'Testing Equipment', 'Quality Metrics', 'Validation'],
    changes: 'Category filtering, certification cards, testing capabilities grid',
    status: 'Live',
    icon: Shield,
    impact: 'HIGH'
  },
  {
    id: 'customer-success-stories',
    name: 'Customer Success Stories ⭐',
    category: 'Interactive Tools',
    description: 'Interactive carousel showcasing real-world deployments with challenge/solution/results framework and testimonials.',
    component: CustomerSuccessStories,
    thumbnail: '💬',
    dataPoints: ['4 Case Studies', 'Customer Testimonials', 'Results Metrics', 'ROI Impact'],
    changes: 'Carousel navigation, animated transitions, testimonial quotes',
    status: 'Live',
    icon: Users,
    impact: 'HIGH'
  },
  {
    id: 'founder-journey-timeline',
    name: 'Founder Journey Timeline ⭐',
    category: 'Interactive Tools',
    description: 'Interactive timeline of Dr. Pavan\'s journey from NASA to 6× Presidential awards with alternating layout.',
    component: FounderJourneyTimeline,
    thumbnail: '🏆',
    dataPoints: ['11 Milestones', '2012-2024', 'Awards & Recognition', 'Company Growth'],
    changes: 'Alternating timeline, hover effects, milestone icons, category badges',
    status: 'Live',
    icon: Trophy,
    impact: 'HIGH'
  },
  {
    id: 'graphacrete-calculator',
    name: 'Graphacrete ROI Calculator ⭐',
    category: 'Product-Specific Tools',
    description: 'Detailed concrete cost & strength calculator with mix design comparison, cement savings, and CO₂ reduction.',
    component: GraphacreteCalculator,
    thumbnail: '🏗️',
    dataPoints: ['M40/M50/M60 Grades', 'Cement Savings', 'Cost per m³', 'Environmental Impact'],
    changes: 'Bar charts, mix design details, NABL certification highlight',
    status: 'Live',
    icon: Calculator,
    impact: 'HIGH'
  },
  {
    id: 'graffisol-calculator',
    name: 'Graffisol Energy Calculator ⭐',
    category: 'Product-Specific Tools',
    description: 'Solar energy optimization calculator with soiling levels, temperature impacts, and 5-year ROI projection.',
    component: GraffisolCalculator,
    thumbnail: '☀️',
    dataPoints: ['Energy Gain %', 'Temp Reduction', 'Soiling Impact', 'ROI Payback'],
    changes: 'Area charts, performance comparison, field validation data',
    status: 'Live',
    icon: Sun,
    impact: 'HIGH'
  },
  {
    id: 'ceraphene-calculator',
    name: 'Ceraphene Cost Comparison ⭐',
    category: 'Product-Specific Tools',
    description: 'Premium graphene vs Ceraphene cost analysis with market democratization impact and pie chart breakdown.',
    component: CerapheneCalculator,
    thumbnail: '💎',
    dataPoints: ['60-70% Savings', 'Market Expansion', 'Cost Breakdown', 'Multi-year Analysis'],
    changes: 'Pie charts, year-by-year comparison, detailed comparison table',
    status: 'Live',
    icon: DollarSign,
    impact: 'HIGH'
  },
  {
    id: 'hdgpe-calculator',
    name: 'HD-G-PE Performance Calculator ⭐',
    category: 'Product-Specific Tools',
    description: 'Polymer enhancement calculator with radar charts showing 20× elongation gain and lifespan extension.',
    component: HDGPECalculator,
    thumbnail: '📦',
    dataPoints: ['20× Elongation', 'Lifespan +20%', 'Market Premium', 'Application-specific'],
    changes: 'Radar charts, multi-property analysis, financial summary',
    status: 'Live',
    icon: Package,
    impact: 'HIGH'
  },
  {
    id: 'graphacrete-application-scenarios',
    name: 'Graphacrete Construction Scenarios ⭐',
    category: 'Product-Specific Tools',
    description: 'Application scenarios across 4 construction types with real case studies, benefits, and technical specifications.',
    component: GraphacreteApplicationScenarios,
    thumbnail: '🏗️',
    dataPoints: ['Commercial', 'Residential', 'Infrastructure', 'Industrial'],
    changes: 'Scenario selector, animated transitions, case studies, specifications',
    status: 'Live',
    icon: Building2,
    impact: 'HIGH'
  },
  {
    id: 'graffisol-application-scenarios',
    name: 'Graffisol Solar Applications ⭐',
    category: 'Product-Specific Tools',
    description: 'Solar installation scenarios from utility-scale to residential with performance data and ROI examples.',
    component: GraffisolApplicationScenarios,
    thumbnail: '☀️',
    dataPoints: ['Utility-Scale', 'Commercial', 'Residential', 'Industrial'],
    changes: 'Solar-specific scenarios, energy gain metrics, field validation',
    status: 'Live',
    icon: Sun,
    impact: 'HIGH'
  },
  {
    id: 'ceraphene-application-scenarios',
    name: 'Ceraphene Industry Applications ⭐',
    category: 'Product-Specific Tools',
    description: 'Industrial use cases across electronics, energy storage, composites, and coatings with cost comparison.',
    component: CerapheneApplicationScenarios,
    thumbnail: '💎',
    dataPoints: ['Electronics', 'Energy Storage', 'Composites', 'Coatings'],
    changes: 'Industry scenarios, performance gains, savings analysis',
    status: 'Live',
    icon: Layers,
    impact: 'HIGH'
  },
  {
    id: 'hdgpe-application-scenarios',
    name: 'HD-G-PE Polymer Applications ⭐',
    category: 'Product-Specific Tools',
    description: 'Polymer manufacturing scenarios for packaging, films, pipes, and industrial use with performance specs.',
    component: HDGPEApplicationScenarios,
    thumbnail: '📦',
    dataPoints: ['Packaging', 'Films', 'Pipes', 'Industrial'],
    changes: 'Manufacturing scenarios, elongation metrics, application specs',
    status: 'Live',
    icon: Package,
    impact: 'HIGH'
  },

  // === PROJECT QUOTATION TOOLS ===
  {
    id: 'graphacrete-quotation-tool',
    name: 'Graphacrete Complete Quotation 🎯',
    category: 'Project Quotation Tools',
    description: 'Comprehensive project quotation with ROI analysis, cost breakdown, environmental impact, and financial projections.',
    component: GraphacreteQuotationTool,
    thumbnail: '📋',
    dataPoints: ['ROI Timeline', 'Cost Breakdown', 'CO₂ Savings', 'Complete Quotation'],
    changes: 'Full quotation format, multi-year projections, environmental metrics',
    status: 'Live',
    icon: Building2,
    impact: 'HIGH'
  },
  {
    id: 'graffisol-quotation-tool',
    name: 'Graffisol Complete Quotation 🎯',
    category: 'Project Quotation Tools',
    description: 'Solar project quotation with energy gains, maintenance savings, ROI timeline, and environmental impact.',
    component: GraffisolQuotationTool,
    thumbnail: '📋',
    dataPoints: ['Energy Gain', 'Maintenance Savings', 'ROI Analysis', 'Full Proposal'],
    changes: 'Comprehensive solar quotation, 10-25 year projections',
    status: 'Live',
    icon: Sun,
    impact: 'HIGH'
  },
  {
    id: 'ceraphene-quotation-tool',
    name: 'Ceraphene Complete Quotation 🎯',
    category: 'Project Quotation Tools',
    description: 'Industrial quotation comparing premium graphene vs Ceraphene with market democratization impact.',
    component: CerapheneQuotationTool,
    thumbnail: '📋',
    dataPoints: ['Cost Comparison', 'Market Expansion', 'Environmental Impact', 'Full Quotation'],
    changes: 'Detailed cost analysis, market impact metrics',
    status: 'Live',
    icon: Layers,
    impact: 'HIGH'
  },
  {
    id: 'hdgpe-quotation-tool',
    name: 'HD-G-PE Complete Quotation 🎯',
    category: 'Project Quotation Tools',
    description: 'Polymer project quotation with performance gains, lifecycle benefits, and market value enhancement.',
    component: HDGPEQuotationTool,
    thumbnail: '📋',
    dataPoints: ['Performance Comparison', 'Lifecycle Benefits', 'Market Premium', 'Full Proposal'],
    changes: 'Comprehensive polymer quotation, radar charts',
    status: 'Live',
    icon: Package,
    impact: 'HIGH'
  },

  // === TECHNICAL RESOURCES ===
  {
    id: 'product-specification-sheets',
    name: 'Product Specification Sheets 📄',
    category: 'Technical Resources',
    description: 'Complete technical datasheets with physical properties, performance specs, certifications, and safety info.',
    component: ProductSpecificationSheets,
    thumbnail: '📄',
    dataPoints: ['All Products', 'Physical Properties', 'Certifications', 'Applications'],
    changes: 'Professional spec sheets, downloadable PDFs',
    status: 'Live',
    icon: Shield,
    impact: 'HIGH'
  },
  {
    id: 'industry-solution-matrix',
    name: 'Industry Solution Matrix 🎯',
    category: 'Technical Resources',
    description: 'Interactive matrix showing which products solve which industry challenges with fit ratings.',
    component: IndustrySolutionMatrix,
    thumbnail: '🎯',
    dataPoints: ['5 Industries', 'Product Fit Ratings', 'Use Cases', 'Benefits'],
    changes: 'Clickable industry cards, solution recommendations',
    status: 'Live',
    icon: Layers,
    impact: 'HIGH'
  },
  {
    id: 'implementation-roadmap',
    name: 'Implementation Roadmap 🗺️',
    category: 'Technical Resources',
    description: 'Step-by-step implementation guide from consultation to deployment with timelines and deliverables.',
    component: ImplementationRoadmap,
    thumbnail: '🗺️',
    dataPoints: ['4-Phase Process', 'Timelines', 'Deliverables', 'Best Practices'],
    changes: 'Phase-by-phase roadmap, team responsibilities',
    status: 'Live',
    icon: Rocket,
    impact: 'HIGH'
  },
  {
    id: 'science-explained',
    name: 'Science Explained 🔬',
    category: 'Technical Resources',
    description: 'Interactive guide explaining how graphene enhancement works at molecular level with visualizations.',
    component: ScienceExplained,
    thumbnail: '🔬',
    dataPoints: ['4 Steps', 'Molecular Mechanisms', 'Product Breakdowns', 'Key Takeaways'],
    changes: 'Step-by-step science explanation, animated transitions',
    status: 'Live',
    icon: Atom,
    impact: 'HIGH'
  },
  {
    id: 'carbon-credit-calculator',
    name: 'Carbon Credit Calculator 🌱',
    category: 'Technical Resources',
    description: 'Calculate carbon credits and environmental equivalents from CO₂ reduction with certification info.',
    component: CarbonCreditCalculator,
    thumbnail: '🌱',
    dataPoints: ['All Products', 'CO₂ Credits', 'Environmental Equivalents', 'Credit Value'],
    changes: 'Credit calculation, certification standards, 5-year timeline',
    status: 'Live',
    icon: Leaf,
    impact: 'HIGH'
  },

  // === PRODUCT METRICS ===
  {
    id: 'product-cards-v1',
    name: 'Product Performance Cards V1',
    category: 'Product Metrics',
    description: '2×2 grid layout showcasing 4 market-ready products with large metric callouts and key benefits',
    component: ProductCardsV1,
    thumbnail: '📊',
    dataPoints: ['Graphacrete', 'Graffisol', 'Ceraphene', 'HD-G-PE'],
    changes: 'Black background with white text, teal accents for metrics',
    status: 'Live',
    icon: BarChart3
  },
  {
    id: 'product-cards-v2',
    name: 'Product Performance Cards V2 (Gauges)',
    category: 'Product Metrics',
    description: 'Circular gauge visualization with SVG progress circles showing performance percentages',
    component: ProductCardsV2,
    thumbnail: '🎯',
    dataPoints: ['Graphacrete', 'Graffisol', 'Ceraphene', 'HD-G-PE'],
    changes: 'Circular progress gauges, color-coded products, legend',
    status: 'Live',
    icon: Gauge
  },
  {
    id: 'minimal-cards-v1',
    name: 'Minimal Product Cards',
    category: 'Product Metrics',
    description: 'Minimal stacked card design with white background, horizontal layout, and arrow hover effects',
    component: MinimalCardsV1,
    thumbnail: '🗂️',
    dataPoints: ['Graphacrete', 'Graffisol', 'Ceraphene', 'HD-G-PE'],
    changes: 'White background, minimal borders, clean typography',
    status: 'Live',
    icon: Activity
  },
  {
    id: 'roi-display-v1',
    name: 'ROI & Cost Savings Display',
    category: 'Product Metrics',
    description: 'Cost savings and ROI-focused infographic with green gradient theme showing financial benefits',
    component: ROIDisplayV1,
    thumbnail: '💰',
    dataPoints: ['60-70% Savings', '18mo Payback', '₹430/m³', '+20% Lifespan'],
    changes: 'Green gradient, financial focus, savings highlight',
    status: 'Live',
    icon: DollarSign
  },

  // === COMPANY STATS ===
  {
    id: 'stats-grid-v1',
    name: 'Company Statistics Dashboard',
    category: 'Company Stats',
    description: 'Large number displays for innovations, products, facilities, and pilot technologies with animated counters',
    component: StatsGridV1,
    thumbnail: '📈',
    dataPoints: ['10+ Innovations', '5+ Products', '2 Facilities', '5 Pilots'],
    changes: 'Grid layout with icon + number + label format',
    status: 'Live',
    icon: Target
  },

  // === COMPETITIVE ANALYSIS ===
  {
    id: 'competitive-matrix-v1',
    name: 'Competitive Advantage Matrix',
    category: 'Competitive Analysis',
    description: 'Side-by-side comparison tables showing Monoatom advantages vs competitors across key metrics',
    component: CompetitiveMatrixV1,
    thumbnail: '⚡',
    dataPoints: ['Graphacrete', 'Graffisol', 'Ceraphene'],
    changes: 'Table format with checkmarks highlighting superiority',
    status: 'Live',
    icon: TrendingUp
  },

  // === TECHNOLOGY ROADMAP ===
  {
    id: 'tech-roadmap-v1',
    name: 'Innovation Pipeline Timeline',
    category: 'Technology Roadmap',
    description: 'Three-column roadmap showing market-ready products, pipeline innovations, and pilot projects',
    component: TechRoadmapV1,
    thumbnail: '🚀',
    dataPoints: ['4 Market-Ready', '5 Pipeline', '5 Pilot Projects'],
    changes: 'Three-tier roadmap with status indicators',
    status: 'Live',
    icon: Zap
  },

  // === ACHIEVEMENTS ===
  {
    id: 'awards-display-v1',
    name: 'Founder Awards & Recognition',
    category: 'Achievements',
    description: 'Badge collection displaying 14+ major awards including 6× President of India, MIT TR35, NASA',
    component: AwardsDisplayV1,
    thumbnail: '🏆',
    dataPoints: ['14+ Awards', 'Presidential Honors', 'Global Recognition'],
    changes: 'Trophy style with institutional logos',
    status: 'Live',
    icon: Award
  },

  // === FACILITIES ===
  {
    id: 'facility-showcase-v1',
    name: 'R&D Facilities Overview',
    category: 'Facilities',
    description: 'Visual showcase of 2 state-of-the-art facilities with equipment capabilities and testing infrastructure',
    component: FacilityShowcaseV1,
    thumbnail: '🔬',
    dataPoints: ['Nanomaterials R&D', 'Testing Facility', 'Equipment'],
    changes: 'Icon grid with capability descriptions',
    status: 'Live',
    icon: Building2
  }
];

import { Rocket, Target, Sparkles, Award, FlaskConical, Factory, Users, Handshake, Trophy, Zap, TrendingUp, Globe, Shield, HelpCircle, ArrowRight, MousePointer, Calculator as CalcIcon, BarChart3, Building2, FileCheck, Layers, Atom, Wind, Package, Cpu } from 'lucide-react';

// Import variation components
import HeroLabToManufacturing from '../components/variations/hero/HeroLabToManufacturing';
import HeroTrillionDollar from '../components/variations/hero/HeroTrillionDollar';
import HeroGrapheneNano from '../components/variations/hero/HeroGrapheneNano';
import HeroCredibility from '../components/variations/hero/HeroCredibility';
import HeroAdvancedMaterials4IR from '../components/variations/hero/HeroAdvancedMaterials4IR';
import HeroScalableGraphene from '../components/variations/hero/HeroScalableGraphene';
import HeroIndustry40Enabler from '../components/variations/hero/HeroIndustry40Enabler';
import HeroLabToMassManufacturing from '../components/variations/hero/HeroLabToMassManufacturing';
import HeroAwardWinningFounder from '../components/variations/hero/HeroAwardWinningFounder';
import HeroStatisticsFocus from '../components/variations/hero/HeroStatisticsFocus';

import IntroVisionMission from '../components/variations/intro/IntroVisionMission';
import IntroProblemSolution from '../components/variations/intro/IntroProblemSolution';
import IntroThreePillars from '../components/variations/intro/IntroThreePillars';
import IntroValuePropositions from '../components/variations/intro/IntroValuePropositions';

import ProductsPerformance from '../components/variations/products/ProductsPerformance';
import ProductsIndustry from '../components/variations/products/ProductsIndustry';
import ProductsFeaturedReal from '../components/variations/products/ProductsFeaturedReal';

import TechJourney from '../components/variations/technology/TechJourney';
import TechPipeline from '../components/variations/technology/TechPipeline';
import TechPilotScale from '../components/variations/technology/TechPilotScale';

import LeadershipFounders from '../components/variations/leadership/LeadershipFounders';
import LeadershipCredibility from '../components/variations/leadership/LeadershipCredibility';
import LeadershipTeamCollaboration from '../components/variations/leadership/LeadershipTeamCollaboration';
import LeadershipAwardsTimeline from '../components/variations/leadership/LeadershipAwardsTimeline';
import LeadershipExpertiseShowcase from '../components/variations/leadership/LeadershipExpertiseShowcase';

import ImpactResults from '../components/variations/impact/ImpactResults';
import MissionImpact from '../components/variations/mission/MissionImpact';
import TrustValidation from '../components/variations/trust/TrustValidation';

import HowItWorksScience from '../components/variations/how-it-works/HowItWorksScience';
import CompetitiveComparison from '../components/variations/competitive/CompetitiveComparison';
import ROICalculator from '../components/variations/calculator/ROICalculator';
import FAQSection from '../components/variations/faq/FAQSection';
import CustomerJourney from '../components/variations/customer-journey/CustomerJourney';
import CTAHub from '../components/variations/cta-hub/CTAHub';

import ImpactMetricsDashboard from '../components/variations/impact-metrics/ImpactMetricsDashboard';
import CustomerSuccessStories from '../components/variations/success-stories/CustomerSuccessStories';
import CertificationsValidation from '../components/variations/certifications/CertificationsValidation';
import ComparisonTable from '../components/variations/comparison-table/ComparisonTable';
import PartnershipModelsTeaser from '../components/variations/partnership-models/PartnershipModelsTeaser';
import CompanyStatsDashboard from '../components/variations/company-stats/CompanyStatsDashboard';
import ROIDisplayDark from '../components/variations/roi-display/ROIDisplayDark';
import ProductPerformanceGauges from '../components/variations/product-gauges/ProductPerformanceGauges';

import FullPageRecommended from '../components/variations/full-page/FullPageRecommended';

export const homePageVariations = [
  // FULL PAGE VARIATIONS
  {
    id: 'full-page-recommended',
    name: 'Complete Homepage - Recommended',
    category: 'Full Page',
    section: 'Complete',
    description: 'Recommended full homepage with lab-to-manufacturing focus, performance metrics, and founder credibility',
    component: FullPageRecommended,
    recommended: true,
    icon: Award,
    tags: ['Recommended', 'Complete', 'Ready to Deploy']
  },

  // HERO SECTION VARIATIONS
  {
    id: 'hero-lab-to-manufacturing',
    name: 'Lab to Manufacturing Focus',
    category: 'Hero Section',
    section: 'Hero',
    description: 'Emphasizes journey from prototype to mass manufacturing. Targets industrial partners.',
    component: HeroLabToManufacturing,
    recommended: true,
    icon: Factory,
    tags: ['Recommended', 'Industrial Focus', 'Scale']
  },
  {
    id: 'hero-trillion-dollar',
    name: 'Trillion Dollar Economy',
    category: 'Hero Section',
    section: 'Hero',
    description: 'Big vision messaging for investors and strategic partners. Industry 4.0 focus.',
    component: HeroTrillionDollar,
    icon: Target,
    tags: ['Vision', 'Investor Focus', 'Industry 4.0']
  },
  {
    id: 'hero-graphene-nano',
    name: 'Graphene Nano-Platelets',
    category: 'Hero Section',
    section: 'Hero',
    description: 'Technical excellence messaging. Highlights high aspect ratio and purity specifications.',
    component: HeroGrapheneNano,
    icon: FlaskConical,
    tags: ['Technical', 'Material Science', 'Specifications']
  },
  {
    id: 'hero-credibility',
    name: 'Award-Winning Innovation',
    category: 'Hero Section',
    section: 'Hero',
    description: 'Credibility-first approach. Features founder awards and recognitions prominently.',
    component: HeroCredibility,
    icon: Award,
    tags: ['Awards', 'Credibility', 'Trust Building']
  },
  {
    id: 'hero-advanced-materials-4ir',
    name: 'Advanced Materials for 4th Industrial Revolution',
    category: 'Hero Section',
    section: 'Hero',
    description: 'Production homepage hero using actual tagline: "Advanced Materials for 4th Industrial Revolution" and "Unlocking Trillion Dollar Economy".',
    component: HeroAdvancedMaterials4IR,
    recommended: true,
    icon: Atom,
    tags: ['Production Content', 'Industry 4.0', 'Recommended']
  },
  {
    id: 'hero-scalable-graphene',
    name: 'Scalable Graphene Solutions',
    category: 'Hero Section',
    section: 'Hero',
    description: 'Focuses on commercially viable graphene delivering clean air, water, energy, and better life. Production value proposition.',
    component: HeroScalableGraphene,
    recommended: true,
    icon: Globe,
    tags: ['Production Content', 'Environmental', 'Recommended']
  },
  {
    id: 'hero-lab-to-mass-manufacturing',
    name: 'Lab to Mass Manufacturing Journey',
    category: 'Hero Section',
    section: 'Hero',
    description: 'Production content emphasizing the complete journey from lab prototype to mass manufacturing with 4-stage process.',
    component: HeroLabToMassManufacturing,
    recommended: true,
    icon: Factory,
    tags: ['Production Content', 'Scale', 'Recommended']
  },
  {
    id: 'hero-award-winning-founder',
    name: 'Award-Winning Founders & Team',
    category: 'Hero Section',
    section: 'Hero',
    description: 'Production content showcasing actual founder achievements: MIT TR35, TED, NASA, 6× President of India Award. Real stats and bios.',
    component: HeroAwardWinningFounder,
    recommended: true,
    icon: Trophy,
    tags: ['Production Content', 'Founders', 'Recommended']
  },
  {
    id: 'hero-statistics-focus',
    name: 'Key Statistics Dashboard',
    category: 'Hero Section',
    section: 'Hero',
    description: 'Production numbers front and center: 10+ innovations, 5+ products, 2 facilities, 5 pilot technologies. Data-driven credibility.',
    component: HeroStatisticsFocus,
    recommended: true,
    icon: BarChart3,
    tags: ['Production Content', 'Statistics', 'Recommended']
  },
  {
    id: 'hero-industry-40-enabler',
    name: 'Industry 4.0 Enabler',
    category: 'Hero Section',
    section: 'Hero',
    description: 'Dedicated Industry 4.0 focus: smart materials, nano-engineering, IoT infrastructure, autonomous systems. Emphasizes transition enablement.',
    component: HeroIndustry40Enabler,
    recommended: true,
    icon: Cpu,
    tags: ['Production Content', 'Industry 4.0', 'Smart Manufacturing', 'Recommended']
  },

  // INTRODUCTION SECTION VARIATIONS
  {
    id: 'intro-vision-mission',
    name: 'Vision & Mission Statement',
    category: 'Introduction',
    section: 'Introduction',
    description: 'Classic vision/mission approach with three pillars of excellence.',
    component: IntroVisionMission,
    recommended: true,
    icon: Target,
    tags: ['Recommended', 'Vision', 'Mission']
  },
  {
    id: 'intro-problem-solution',
    name: 'Problem-Solution Narrative',
    category: 'Introduction',
    section: 'Introduction',
    description: 'Addresses the "lab to market gap" problem directly and positions Monoatom as solution.',
    component: IntroProblemSolution,
    icon: Sparkles,
    tags: ['Storytelling', 'Problem-Solution', 'Educational']
  },
  {
    id: 'intro-three-pillars',
    name: 'Three Pillars of Excellence',
    category: 'Introduction',
    section: 'Introduction',
    description: 'Icon-based presentation of scientific excellence, industrial scale, and proven performance.',
    component: IntroThreePillars,
    icon: Award,
    tags: ['Visual', 'Differentiation', 'Structured']
  },
  {
    id: 'intro-value-propositions',
    name: 'Three Core Value Propositions',
    category: 'Introduction',
    section: 'Introduction',
    description: 'Production value props: Scalable Graphene Solutions, Lab to Manufacturing, Award-Winning Innovation. Includes vision and mission.',
    component: IntroValuePropositions,
    recommended: true,
    icon: Target,
    tags: ['Production Content', 'Value Props', 'Recommended']
  },

  // PRODUCTS SECTION VARIATIONS
  {
    id: 'products-performance',
    name: 'Performance Metrics Focus',
    category: 'Products',
    section: 'Products',
    description: 'Data-driven presentation with specific metrics, certifications, and competitive advantages.',
    component: ProductsPerformance,
    recommended: true,
    icon: Target,
    tags: ['Recommended', 'Data-Driven', 'Metrics']
  },
  {
    id: 'products-industry',
    name: 'Industry Application Focus',
    category: 'Products',
    section: 'Products',
    description: 'Organized by target industries (construction, solar, polymers, coatings).',
    component: ProductsIndustry,
    icon: Factory,
    tags: ['Industry', 'Applications', 'Use Cases']
  },
  {
    id: 'products-featured-real',
    name: 'Featured Products - Real Specs',
    category: 'Products',
    section: 'Products',
    description: 'All 4 commercial products with actual production specs, benefits, and pricing from index.md. Graphacrete, Graffisol, Ceraphene, HD-G-PE.',
    component: ProductsFeaturedReal,
    recommended: true,
    icon: Package,
    tags: ['Production Content', 'Real Data', 'Recommended']
  },

  // TECHNOLOGY SECTION VARIATIONS
  {
    id: 'tech-journey',
    name: 'Lab to Manufacturing Journey',
    category: 'Technology',
    section: 'Technology',
    description: '4-stage process: R&D Lab → Scale-Up → Field Validation → Commercial Production.',
    component: TechJourney,
    recommended: true,
    icon: Rocket,
    tags: ['Recommended', 'Process', 'Scale']
  },
  {
    id: 'tech-pipeline',
    name: 'Innovation Pipeline',
    category: 'Technology',
    section: 'Technology',
    description: 'Showcases market-ready products, pipeline products, and pilot technologies.',
    component: TechPipeline,
    icon: FlaskConical,
    tags: ['Innovation', 'Pipeline', 'Future']
  },
  {
    id: 'tech-pilot-scale',
    name: 'Pilot-Scale Technologies',
    category: 'Technology',
    section: 'Technology',
    description: 'Production content: 5 pilot technologies in field trials - hydrogen membranes, desalination, water harvesting, glass fibres, battery storage.',
    component: TechPilotScale,
    recommended: true,
    icon: Wind,
    tags: ['Production Content', 'Pilot Projects', 'Recommended']
  },

  // IMPACT & RESULTS SECTION
  {
    id: 'impact-results',
    name: 'Impact & Real-World Results',
    category: 'Impact & Results',
    section: 'Impact',
    description: 'Showcase ROI, cost savings, and measurable outcomes. Perfect for B2B decision-makers.',
    component: ImpactResults,
    recommended: true,
    icon: TrendingUp,
    tags: ['Recommended', 'ROI', 'B2B', 'Data-Driven']
  },

  // MISSION IMPACT SECTION
  {
    id: 'mission-impact',
    name: 'Clean Air, Water, Energy & Life',
    category: 'Mission Impact',
    section: 'Mission',
    description: 'Connect products to larger environmental and social mission. Powerful storytelling.',
    component: MissionImpact,
    recommended: true,
    icon: Globe,
    tags: ['Recommended', 'Mission', 'Environmental', 'Storytelling']
  },

  // TRUST & VALIDATION SECTION
  {
    id: 'trust-validation',
    name: 'Trust & Certification',
    category: 'Trust & Validation',
    section: 'Trust',
    description: 'NABL certification, scientific partnerships, and field-test proof. Builds credibility.',
    component: TrustValidation,
    recommended: true,
    icon: Shield,
    tags: ['Recommended', 'NABL', 'Certification', 'Credibility']
  },

  // HOW IT WORKS SECTION
  {
    id: 'how-it-works-science',
    name: 'How It Works (Science Explained)',
    category: 'How It Works',
    section: 'Education',
    description: 'Explain graphene nano-platelets and mechanisms. Interactive product selector.',
    component: HowItWorksScience,
    recommended: true,
    icon: FlaskConical,
    tags: ['Recommended', 'Educational', 'Interactive', 'Technical']
  },

  // COMPETITIVE COMPARISON SECTION
  {
    id: 'competitive-comparison',
    name: 'Competitive Comparison Tables',
    category: 'Competitive Comparison',
    section: 'Comparison',
    description: 'Direct metric-by-metric comparison with leading competitors. We win on every measure.',
    component: CompetitiveComparison,
    recommended: true,
    icon: TrendingUp,
    tags: ['Recommended', 'Comparison', 'Competitive', 'Data-Driven']
  },

  // ROI CALCULATOR SECTION
  {
    id: 'roi-calculator',
    name: 'Interactive ROI Calculator',
    category: 'ROI Calculator',
    section: 'Calculator',
    description: 'Let customers calculate their own savings. Interactive for Graphacrete, Graffisol, Ceraphene.',
    component: ROICalculator,
    recommended: true,
    icon: CalcIcon,
    tags: ['Recommended', 'Interactive', 'ROI', 'Conversion']
  },

  // FAQ SECTION
  {
    id: 'faq-section',
    name: 'FAQ & Objection Handling',
    category: 'FAQ',
    section: 'FAQ',
    description: 'Address common concerns about commercial graphene. Accordion-style, conversion-focused.',
    component: FAQSection,
    recommended: true,
    icon: HelpCircle,
    tags: ['Recommended', 'FAQ', 'Objections', 'Trust']
  },

  // CUSTOMER JOURNEY SECTION
  {
    id: 'customer-journey',
    name: 'Working With Us (Process)',
    category: 'Customer Journey',
    section: 'Journey',
    description: '4-step process from discovery to deployment. Reduces friction, clear path forward.',
    component: CustomerJourney,
    recommended: true,
    icon: ArrowRight,
    tags: ['Recommended', 'Process', 'Journey', 'B2B']
  },

  // CTA HUB SECTION
  {
    id: 'cta-hub',
    name: 'CTA Hub (Multiple Paths)',
    category: 'CTA Hub',
    section: 'Conversion',
    description: 'Multiple conversion paths for different audiences. Manufacturers, Decision Makers, Partners, Researchers.',
    component: CTAHub,
    recommended: true,
    icon: MousePointer,
    tags: ['Recommended', 'CTA', 'Conversion', 'Multi-Path']
  },

  // LEADERSHIP SECTION VARIATIONS
  {
    id: 'leadership-team-collaboration',
    name: 'Team & Collaboration Models',
    category: 'Leadership',
    section: 'Leadership',
    description: 'Founders + partnerships + collaboration models in dark theme. Perfect for B2B partnerships.',
    component: LeadershipTeamCollaboration,
    recommended: true,
    icon: Handshake,
    tags: ['Recommended', 'Partnerships', 'B2B', 'Dark Theme']
  },
  {
    id: 'leadership-awards-timeline',
    name: 'Awards & Recognition Showcase',
    category: 'Leadership',
    section: 'Leadership',
    description: 'Complete award lists with visual impact. Builds credibility and trust.',
    component: LeadershipAwardsTimeline,
    recommended: true,
    icon: Trophy,
    tags: ['Recommended', 'Awards', 'Credibility', 'Trust']
  },
  {
    id: 'leadership-expertise-showcase',
    name: 'Multidisciplinary Expertise',
    category: 'Leadership',
    section: 'Leadership',
    description: 'Highlights combined deep science + industrial execution. Shows complete capabilities.',
    component: LeadershipExpertiseShowcase,
    recommended: true,
    icon: Zap,
    tags: ['Recommended', 'Expertise', 'Complete', 'Professional']
  },
  {
    id: 'leadership-founders',
    name: 'Founder Spotlight',
    category: 'Leadership',
    section: 'Leadership',
    description: 'Simple founder profiles with award badges and expertise areas.',
    component: LeadershipFounders,
    icon: Users,
    tags: ['Founders', 'Simple', 'Clean']
  },
  {
    id: 'leadership-credibility',
    name: 'Credibility & Partnerships',
    category: 'Leadership',
    section: 'Leadership',
    description: 'Emphasizes partnerships with IISc, IIT, NCL and collaboration models.',
    component: LeadershipCredibility,
    icon: Award,
    tags: ['Partnerships', 'Credibility', 'Collaboration']
  },

  // IMPACT METRICS DASHBOARD
  {
    id: 'impact-metrics-dashboard',
    name: 'Impact Metrics Dashboard',
    category: 'Impact Metrics',
    section: 'Metrics',
    description: 'Animated counters showing CO₂ saved, installations, cost reduction, and satisfaction. Dark theme.',
    component: ImpactMetricsDashboard,
    recommended: true,
    icon: BarChart3,
    tags: ['Recommended', 'Animated', 'Data-Driven', 'Dark Theme']
  },

  // CUSTOMER SUCCESS STORIES
  {
    id: 'customer-success-stories',
    name: 'Customer Success Stories',
    category: 'Success Stories',
    section: 'Stories',
    description: 'Detailed case studies with specific numbers: Infrastructure, Solar, Automotive. Real ROI proof.',
    component: CustomerSuccessStories,
    recommended: true,
    icon: Building2,
    tags: ['Recommended', 'Case Studies', 'ROI', 'B2B']
  },

  // CERTIFICATIONS & VALIDATION
  {
    id: 'certifications-validation',
    name: 'Certifications & Validation',
    category: 'Certifications',
    section: 'Trust',
    description: 'Badge grid: NABL, ISO, BIS, patents. Scientific partnerships with IISc/IIT/NCL. Credibility builder.',
    component: CertificationsValidation,
    recommended: true,
    icon: FileCheck,
    tags: ['Recommended', 'Certification', 'Trust', 'NABL']
  },

  // COMPARISON TABLE
  {
    id: 'comparison-table',
    name: 'Traditional vs Graphene-Enhanced',
    category: 'Property Comparison',
    section: 'Comparison',
    description: 'Property-by-property comparison tables. Switchable between applications. Visual proof of superiority.',
    component: ComparisonTable,
    recommended: true,
    icon: Layers,
    tags: ['Recommended', 'Comparison', 'Interactive', 'Technical']
  },

  // PARTNERSHIP MODELS TEASER
  {
    id: 'partnership-models-teaser',
    name: 'Partnership Models Teaser',
    category: 'Partnership Models',
    section: 'Partnerships',
    description: 'Split cards: Technology Licensing vs JV-SPV. Clear comparison, process flow, success stories.',
    component: PartnershipModelsTeaser,
    recommended: true,
    icon: Handshake,
    tags: ['Recommended', 'Partnerships', 'B2B', 'Collaboration']
  },

  // COMPANY STATISTICS DASHBOARD
  {
    id: 'company-stats-dashboard',
    name: 'Company Statistics Dashboard',
    category: 'Company Stats',
    section: 'Overview',
    description: 'Comprehensive company statistics with animated counters. Products, innovations, facilities, awards, impact metrics.',
    component: CompanyStatsDashboard,
    recommended: true,
    icon: BarChart3,
    tags: ['Recommended', 'Statistics', 'Overview', 'Animated']
  },

  // ROI DISPLAY DARK THEME
  {
    id: 'roi-display-dark',
    name: 'ROI Display - Dark Theme',
    category: 'ROI Display',
    section: 'ROI',
    description: 'Cost savings & value creation showcase. Dark theme with gradient cards for all 4 products showing ROI metrics.',
    component: ROIDisplayDark,
    recommended: true,
    icon: TrendingUp,
    tags: ['Recommended', 'ROI', 'Dark Theme', 'Value Proposition']
  },

  // PRODUCT PERFORMANCE GAUGES
  {
    id: 'product-performance-gauges',
    name: 'Product Performance Gauges',
    category: 'Product Gauges',
    section: 'Products',
    description: 'Circular gauge visualization showing key performance metrics for all 4 products. Animated progress rings.',
    component: ProductPerformanceGauges,
    recommended: true,
    icon: Target,
    tags: ['Recommended', 'Visual', 'Gauges', 'Animated', 'Products']
  }
];

export const categories = [
  'All',
  'Full Page',
  'Hero Section',
  'Introduction',
  'Products',
  'Technology',
  'Impact & Results',
  'Mission Impact',
  'Trust & Validation',
  'How It Works',
  'Competitive Comparison',
  'ROI Calculator',
  'FAQ',
  'Customer Journey',
  'CTA Hub',
  'Leadership',
  'Impact Metrics',
  'Success Stories',
  'Certifications',
  'Property Comparison',
  'Partnership Models',
  'Company Stats',
  'ROI Display',
  'Product Gauges'
];

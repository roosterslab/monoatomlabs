import {
  Box, BarChart3, Layers, Type, Zap, Shield, Droplets, Target,
  Sun, Palette, Layout, Hash, Package, Star, TrendingUp, Microscope,
  Footprints, Clock, Zap as ZapIcon, Car, Printer, Map, Sparkles, Activity
} from 'lucide-react'

// Original 15 idea components
import FrontPanelAlternatives from '../components/ideas/FrontPanelAlternatives'
import BackPanelConcepts from '../components/ideas/BackPanelConcepts'
import SidePanelIdeas from '../components/ideas/SidePanelIdeas'
import HardnessScaleViz from '../components/ideas/HardnessScaleViz'
import ThreatWheelViz from '../components/ideas/ThreatWheelViz'
import CostComparisonViz from '../components/ideas/CostComparisonViz'
import WaterBeadScience from '../components/ideas/WaterBeadScience'
import MolecularLayerDiagram from '../components/ideas/MolecularLayerDiagram'
import DurabilityTimeline from '../components/ideas/DurabilityTimeline'
import CompetitorMatrix from '../components/ideas/CompetitorMatrix'
import TaglineExplorer from '../components/ideas/TaglineExplorer'
import SpecSheetLayout from '../components/ideas/SpecSheetLayout'
import KeyMetricsArrangements from '../components/ideas/KeyMetricsArrangements'
import ShieldBadgeIdeas from '../components/ideas/ShieldBadgeIdeas'
import MarketingCopyVariants from '../components/ideas/MarketingCopyVariants'

// New components — research-driven additions
import ApplicationProcessViz from '../components/ideas/ApplicationProcessViz'
import CostPerYearAnalysis from '../components/ideas/CostPerYearAnalysis'
import AntiStaticProperty from '../components/ideas/AntiStaticProperty'
import GlossDepthViz from '../components/ideas/GlossDepthViz'
import UseCaseScenarios from '../components/ideas/UseCaseScenarios'
import PrintFinishConcepts from '../components/ideas/PrintFinishConcepts'
import FourSecondImpact from '../components/ideas/FourSecondImpact'
import PositioningMap from '../components/ideas/PositioningMap'

// Image-inspired new components
import NeonCarFrontPanel from '../components/ideas/NeonCarFrontPanel'
import GrapheneAdvantagePanels from '../components/ideas/GrapheneAdvantagePanels'
import ScanToVerifyPanel from '../components/ideas/ScanToVerifyPanel'
import PremiumPricingPanel from '../components/ideas/PremiumPricingPanel'
import TechRegulatoryPanel from '../components/ideas/TechRegulatoryPanel'
import MetallicCardConcept from '../components/ideas/MetallicCardConcept'

export const catalog = [
  // ===== BOX SIDE CONCEPTS =====
  {
    id: 'front-panel-alternatives',
    name: 'Front Panel — Layout Alternatives',
    category: 'Box Side Concepts',
    description: '6 different approaches to the front panel: logo-first, number-first, emotion-first, science-first, competitive-first, and minimalist.',
    component: FrontPanelAlternatives,
    thumbnail: '📦',
    icon: Box,
    impact: 'HIGH',
  },
  {
    id: 'back-panel-concepts',
    name: 'Back Panel — Content Concepts',
    category: 'Box Side Concepts',
    description: 'Side-by-side comparison of different back panel content strategies: infographic, spec sheet, threat list, science, story.',
    component: BackPanelConcepts,
    thumbnail: '🔄',
    icon: Layout,
    impact: 'HIGH',
  },
  {
    id: 'side-panel-ideas',
    name: 'Side Panels — Content Ideas',
    category: 'Box Side Concepts',
    description: 'What to put on the narrow side panels: vertical text, icons, mini-stats, barcode aesthetics, or pure branding.',
    component: SidePanelIdeas,
    thumbnail: '📐',
    icon: Package,
    impact: 'MEDIUM',
  },

  // ===== INFOGRAPHIC IDEAS =====
  {
    id: 'hardness-scale-viz',
    name: 'Hardness Scale — Visual',
    category: 'Infographic Ideas',
    description: 'Pencil hardness scale from 1B to 10H showing where 9H+ CERAPHENE sits. Context: diamond, sapphire, tungsten.',
    component: HardnessScaleViz,
    thumbnail: '💎',
    icon: Microscope,
    impact: 'HIGH',
  },
  {
    id: 'threat-wheel-viz',
    name: '9 Threats — Wheel Infographic',
    category: 'Infographic Ideas',
    description: 'The threat wheel visual — 9 threats arranged radially around a central CERAPHENE shield. Multiple style explorations.',
    component: ThreatWheelViz,
    thumbnail: '🛡️',
    icon: Shield,
    impact: 'HIGH',
  },
  {
    id: 'water-bead-science',
    name: 'Water Science — Contact Angle',
    category: 'Infographic Ideas',
    description: '40° bare surface vs 115° CERAPHENE. Shows physics of superhydrophobicity with SVG water bead diagrams.',
    component: WaterBeadScience,
    thumbnail: '💧',
    icon: Droplets,
    impact: 'HIGH',
  },
  {
    id: 'molecular-layer-diagram',
    name: 'Molecular Layer — Cross Section',
    category: 'Infographic Ideas',
    description: 'Exploded view of paint stack: clearcoat → ceramic matrix → graphene lattice. Shows molecular bonding at 3–4 μm.',
    component: MolecularLayerDiagram,
    thumbnail: '🔬',
    icon: Layers,
    impact: 'HIGH',
  },
  {
    id: 'durability-timeline',
    name: 'Durability — Timeline Visual',
    category: 'Infographic Ideas',
    description: 'Year-by-year comparison: bare paint degradation vs CERAPHENE protected surface. 4+ year lifecycle visualized.',
    component: DurabilityTimeline,
    thumbnail: '📅',
    icon: TrendingUp,
    impact: 'MEDIUM',
  },

  // ===== DATA ARRANGEMENTS =====
  {
    id: 'cost-comparison-viz',
    name: 'Cost Comparison — Visual',
    category: 'Data Arrangements',
    description: 'CERAPHENE ₹5,000 vs competitors at ₹15,000. Multiple chart styles: bar, ratio, icon-based, value-per-year.',
    component: CostComparisonViz,
    thumbnail: '💰',
    icon: BarChart3,
    impact: 'HIGH',
  },
  {
    id: 'competitor-matrix',
    name: 'Competitor Matrix — Table',
    category: 'Data Arrangements',
    description: 'Ceraphene vs Gtechniq vs CarPro vs Ceramic Pro — hardness, contact angle, years, price side by side.',
    component: CompetitorMatrix,
    thumbnail: '📊',
    icon: Target,
    impact: 'HIGH',
  },
  {
    id: 'spec-sheet-layout',
    name: 'Spec Sheet — Layout Exploration',
    category: 'Data Arrangements',
    description: '5 different approaches to listing CERAPHENE specs on the box: table, grid, icon-stats, minimal, data-dense.',
    component: SpecSheetLayout,
    thumbnail: '📋',
    icon: Hash,
    impact: 'MEDIUM',
  },
  {
    id: 'key-metrics-arrangements',
    name: 'Key Metrics — Arrangement Styles',
    category: 'Data Arrangements',
    description: 'How to arrange the 5 hero numbers (9H+, 700°C, 115°, 4 yrs, 3-4μm) on a box panel. 6 layout explorations.',
    component: KeyMetricsArrangements,
    thumbnail: '🔢',
    icon: Zap,
    impact: 'HIGH',
  },

  // ===== MARKETING IDEAS =====
  {
    id: 'tagline-explorer',
    name: 'Tagline Explorer',
    category: 'Marketing Ideas',
    description: 'All tagline candidates displayed as box panel mockups. Evaluate: "9 Threats. Zero Damage." vs "Invisible Shield" vs more.',
    component: TaglineExplorer,
    thumbnail: '✏️',
    icon: Type,
    impact: 'HIGH',
  },
  {
    id: 'marketing-copy-variants',
    name: 'Marketing Copy — Box Text Variants',
    category: 'Marketing Ideas',
    description: 'Different ways to write the back panel body text: technical, emotional, story-driven, bullet-list, minimal.',
    component: MarketingCopyVariants,
    thumbnail: '📝',
    icon: Star,
    impact: 'MEDIUM',
  },

  // ===== BRAND WIDGETS =====
  {
    id: 'shield-badge-ideas',
    name: 'Badge & Widget Ideas',
    category: 'Brand Widgets',
    description: 'Shield badges, certification marks, hardness badges, "9H+" crest designs, QR panel styles — small graphic elements for the box.',
    component: ShieldBadgeIdeas,
    thumbnail: '🏅',
    icon: Palette,
    impact: 'MEDIUM',
  },

  // ===== RESEARCH-DRIVEN NEW IDEAS =====
  {
    id: 'application-process-viz',
    name: 'Application Process — 5 Steps',
    category: 'Infographic Ideas',
    description: 'How-to infographic for the box back or insert card. Three layout explorations: horizontal flow with expandable steps, vertical timeline, and minimal typographic treatment.',
    component: ApplicationProcessViz,
    thumbnail: '📋',
    icon: Footprints,
    impact: 'MEDIUM',
  },
  {
    id: 'cost-per-year-analysis',
    name: 'Cost Per Year — Value Visual',
    category: 'Data Arrangements',
    description: 'CERAPHENE at ₹1,250/yr vs competitors at ₹2,000–5,000/yr. Three visuals: bar chart comparison, box value strip (3-column), and icon count visual.',
    component: CostPerYearAnalysis,
    thumbnail: '💹',
    icon: Activity,
    impact: 'HIGH',
  },
  {
    id: 'antistatic-property',
    name: 'Anti-Static · Self-Cleaning · Hydrophobic',
    category: 'Infographic Ideas',
    description: 'Anti-static is a rare graphene differentiator — most ceramics don\'t have it. Three explorations: trio property cards, anti-static focus panel, and before/after surface behaviour table.',
    component: AntiStaticProperty,
    thumbnail: '⚡',
    icon: Sparkles,
    impact: 'HIGH',
  },
  {
    id: 'gloss-depth-viz',
    name: 'Gloss & Color Depth Visual',
    category: 'Infographic Ideas',
    description: 'CERAPHENE forms a glass-hard layer that measurably improves gloss (95–100 GU vs 60 GU waxed). Three styles: gloss meter dials, layer cross-section, box callout variants.',
    component: GlossDepthViz,
    thumbnail: '✨',
    icon: Sun,
    impact: 'MEDIUM',
  },
  {
    id: 'use-case-scenarios',
    name: 'Use-Case Buyer Panels',
    category: 'Marketing Ideas',
    description: 'Automotive / Marine / Fleet / Architectural — four distinct buyer markets, each with tailored headline, bullets, and key metric. Tab-panel and card-grid layouts.',
    component: UseCaseScenarios,
    thumbnail: '🎯',
    icon: Car,
    impact: 'HIGH',
  },
  {
    id: 'print-finish-concepts',
    name: 'Print Finish Concepts',
    category: 'Brand Widgets',
    description: 'Spot UV, soft-touch lamination, debossing, gold foiling, and matte/gloss contrast — premium print finish ideas for the physical box. Visualized as mockup swatches.',
    component: PrintFinishConcepts,
    thumbnail: '🖨️',
    icon: Printer,
    impact: 'HIGH',
  },
  {
    id: 'four-second-impact',
    name: '4-Second Shelf Impact',
    category: 'Box Side Concepts',
    description: 'You have 4 seconds to make an impression on shelf. Hierarchy framework: what to put first, second, third. Multiple shelf-scan simulations.',
    component: FourSecondImpact,
    thumbnail: '⏱️',
    icon: Clock,
    impact: 'HIGH',
  },
  {
    id: 'positioning-map',
    name: 'Competitor Positioning Map',
    category: 'Data Arrangements',
    description: 'Price vs Performance scatter plot. CERAPHENE sits in the high-performance, low-price quadrant — a unique market position. Interactive hover tooltips with cost-per-year.',
    component: PositioningMap,
    thumbnail: '🗺️',
    icon: Map,
    impact: 'HIGH',
  },

  // ===== IMAGE-INSPIRED CONCEPTS =====
  {
    id: 'neon-car-front-panel',
    name: 'Neon Car — Front Panel',
    category: 'Box Side Concepts',
    description: 'Blue neon SVG car illustration on dark hex background. Three spec badge styles, 9H+ circle badge, hashtag #DetailingRefined, "For Automotive | Marine | Aviation | Industrial". High shelf impact.',
    component: NeonCarFrontPanel,
    thumbnail: '🚗',
    icon: Car,
    impact: 'HIGH',
  },
  {
    id: 'graphene-advantage-panels',
    name: 'Graphene Advantage + Lab Verified',
    category: 'Box Side Concepts',
    description: '"The Graphene Advantage" science story panel + "Lab Verified Performance" icon/spec panel. Split back layout: left=story, right=verification table with blue accent.',
    component: GrapheneAdvantagePanels,
    thumbnail: '⚗️',
    icon: Layers,
    impact: 'HIGH',
  },
  {
    id: 'scan-to-verify',
    name: 'Scan to Verify + Box Contents',
    category: 'Brand Widgets',
    description: 'QR authentication panel with "Scan to Verify" header, box contents checklist (QC Report, Lab Cert, App Guide, Safety Sheet), optional swatch. Three layout variants.',
    component: ScanToVerifyPanel,
    thumbnail: '🔐',
    icon: Shield,
    impact: 'HIGH',
  },
  {
    id: 'premium-pricing-panel',
    name: 'Premium Performance. Smarter Pricing.',
    category: 'Marketing Ideas',
    description: '"Up to 60% cost advantage vs premium alternatives." ₹5,000 circle badge. Blue stripe accent. Direct pricing transparency on box — three layout explorations.',
    component: PremiumPricingPanel,
    thumbnail: '💵',
    icon: BarChart3,
    impact: 'HIGH',
  },
  {
    id: 'tech-regulatory-panel',
    name: 'Technical & Regulatory Panel',
    category: 'Box Side Concepts',
    description: 'ISO 9001:2015 cert, ASTM G154/D3363 test marks, CE + recycling marks, manufacturer address (iHub Gujarat), contact details. Three layout variants: full panel, back strip, datasheet insert.',
    component: TechRegulatoryPanel,
    thumbnail: '📜',
    icon: Hash,
    impact: 'MEDIUM',
  },
  {
    id: 'metallic-card-concept',
    name: 'Metallic Card & Seal Concepts',
    category: 'Brand Widgets',
    description: 'Die-cut shaped authentication card with metallic foil strip (silver/gold/holographic/graphene). Plus flat insert and hologram seal sticker variants. Interactive foil switcher.',
    component: MetallicCardConcept,
    thumbnail: '💳',
    icon: Sparkles,
    impact: 'HIGH',
  },
]

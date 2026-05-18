// Bundle: All Pages
// Complete page components — not to be delivered as source

// Root pages
export { default as HomePage } from '../pages/Home';
export { default as AboutPage } from '../pages/About';
export { default as ContactPage } from '../pages/Contact';

// About sub-pages
export { default as CompanyPage } from '../pages/about/Company';
export { default as FacilitiesPage } from '../pages/about/Facilities';
export { default as FoundersPage } from '../pages/about/Founders';

// Product pages
export { default as ProductsOverviewPage } from '../pages/products/ProductsOverview';
export { default as CeraphenePage } from '../pages/products/Ceraphene';
export { default as GraffisolPage } from '../pages/products/Graffisol';
export { default as GraphacretePage } from '../pages/products/Graphacrete';
export { default as HDGPEPage } from '../pages/products/HDGPE';

// Pipeline pages
export { default as PipelineOverviewPage } from '../pages/products/pipeline/PipelineOverview';
export { default as RustenePage } from '../pages/products/pipeline/Rustene';
export { default as GraphyrePage } from '../pages/products/pipeline/Graphyre';
export { default as GraphositePage } from '../pages/products/pipeline/Graphosite';
export { default as ThermaphenePage } from '../pages/products/pipeline/Thermaphene';
export { default as ArmophenePage } from '../pages/products/pipeline/Armophene';
export { default as HydrogenMembranesPage } from '../pages/products/pipeline/HydrogenMembranes';
export { default as DesalinationMembranesPage } from '../pages/products/pipeline/DesalinationMembranes';
export { default as AtmosphericHarvestingPage } from '../pages/products/pipeline/AtmosphericHarvesting';
export { default as GrapheneGlassFibresPage } from '../pages/products/pipeline/GrapheneGlassFibres';
export { default as BatteryStoragePage } from '../pages/products/pipeline/BatteryStorage';
export { default as GraphenodePage } from '../pages/products/pipeline/Graphenode';

// Industry pages
export { default as IndustriesOverviewPage } from '../pages/industries/IndustriesOverview';
export { default as ConstructionPage } from '../pages/industries/Construction';
export { default as AutomotivePage } from '../pages/industries/Automotive';
export { default as SolarEnergyPage } from '../pages/industries/SolarEnergy';
export { default as AdvancedMaterialsPage } from '../pages/industries/AdvancedMaterials';

// Technology pages
export { default as PlatformPage } from '../pages/technology/Platform';
export { default as CapabilitiesPage } from '../pages/technology/Capabilities';
export { default as PilotProjectsPage } from '../pages/technology/PilotProjects';

// Utilities (bundled with pages so they don't need to be given as source)
export * from '../utils/contentData';
export * from '../utils/contentParser';

// Small utility components (not worth a separate bundle)
export { default as NavigationProgress } from '../components/NavigationProgress';
export { default as ScrollToTop } from '../components/ScrollToTop';

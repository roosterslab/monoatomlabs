import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import ScrollToTop from './components/ScrollToTop';

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen bg-black flex items-center justify-center">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-neutral-700 border-t-white mb-4"></div>
      <p className="text-neutral-400 text-sm">Loading...</p>
    </div>
  </div>
);

// Eagerly load Home page (most common entry point)
import Home from './pages/Home';

// Lazy load all other pages
const About = lazy(() => import('./pages/About'));

// Product Pages
const ProductsOverview = lazy(() => import('./pages/products/ProductsOverview'));
const Graphacrete = lazy(() => import('./pages/products/Graphacrete'));
const Graffisol = lazy(() => import('./pages/products/Graffisol'));
const Ceraphene = lazy(() => import('./pages/products/Ceraphene'));
const HDGPE = lazy(() => import('./pages/products/HDGPE'));

// Pipeline Pages
const PipelineOverview = lazy(() => import('./pages/products/pipeline/PipelineOverview'));
const Rustene = lazy(() => import('./pages/products/pipeline/Rustene'));
const Graphyre = lazy(() => import('./pages/products/pipeline/Graphyre'));
const Graphosite = lazy(() => import('./pages/products/pipeline/Graphosite'));
const Thermaphene = lazy(() => import('./pages/products/pipeline/Thermaphene'));
const Armophene = lazy(() => import('./pages/products/pipeline/Armophene'));
const HydrogenMembranes = lazy(() => import('./pages/products/pipeline/HydrogenMembranes'));
const DesalinationMembranes = lazy(() => import('./pages/products/pipeline/DesalinationMembranes'));
const AtmosphericHarvesting = lazy(() => import('./pages/products/pipeline/AtmosphericHarvesting'));
const GrapheneGlassFibres = lazy(() => import('./pages/products/pipeline/GrapheneGlassFibres'));
const BatteryStorage = lazy(() => import('./pages/products/pipeline/BatteryStorage'));

// Technology Pages
const Technology = lazy(() => import('./pages/Technology'));
const Platform = lazy(() => import('./pages/technology/Platform'));
const PilotProjects = lazy(() => import('./pages/technology/PilotProjects'));
const Capabilities = lazy(() => import('./pages/technology/Capabilities'));

// Industries Pages
const Industries = lazy(() => import('./pages/Industries'));
const IndustriesOverview = lazy(() => import('./pages/industries/IndustriesOverview'));
const Construction = lazy(() => import('./pages/industries/Construction'));
const SolarEnergy = lazy(() => import('./pages/industries/SolarEnergy'));
const Automotive = lazy(() => import('./pages/industries/Automotive'));
const AdvancedMaterials = lazy(() => import('./pages/industries/AdvancedMaterials'));

// Other Pages
const Contact = lazy(() => import('./pages/Contact'));
const Partnership = lazy(() => import('./pages/Partnership'));

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Suspense fallback={<PageLoader />}>
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<Home />} />

                    {/* About Route */}
                    <Route path="about" element={<About />} />

                    {/* Product Routes */}
                    <Route path="products" element={<ProductsOverview />} />
                    <Route path="products/graphacrete" element={<Graphacrete />} />
                    <Route path="products/graffisol" element={<Graffisol />} />
                    <Route path="products/ceraphene" element={<Ceraphene />} />
                    <Route path="products/hd-g-pe" element={<HDGPE />} />

                    {/* Pipeline Routes */}
                    <Route path="products/pipeline" element={<PipelineOverview />} />
                    <Route path="products/pipeline/rustene" element={<Rustene />} />
                    <Route path="products/pipeline/graphyre" element={<Graphyre />} />
                    <Route path="products/pipeline/graphosite" element={<Graphosite />} />
                    <Route path="products/pipeline/thermaphene" element={<Thermaphene />} />
                    <Route path="products/pipeline/armophene" element={<Armophene />} />
                    <Route path="products/pipeline/hydrogen-membranes" element={<HydrogenMembranes />} />
                    <Route path="products/pipeline/desalination-membranes" element={<DesalinationMembranes />} />
                    <Route path="products/pipeline/atmospheric-harvesting" element={<AtmosphericHarvesting />} />
                    <Route path="products/pipeline/graphene-glass-fibres" element={<GrapheneGlassFibres />} />
                    <Route path="products/pipeline/battery-storage" element={<BatteryStorage />} />

                    {/* Technology Routes */}
                    <Route path="technology" element={<Technology />} />
                    <Route path="technology/platform" element={<Platform />} />
                    <Route path="technology/pilot-projects" element={<PilotProjects />} />
                    <Route path="technology/capabilities" element={<Capabilities />} />

                    {/* Industries Routes */}
                    <Route path="industries" element={<Industries />} />
                    <Route path="industries/construction" element={<Construction />} />
                    <Route path="industries/solar-energy" element={<SolarEnergy />} />
                    <Route path="industries/automotive" element={<Automotive />} />
                    <Route path="industries/advanced-materials" element={<AdvancedMaterials />} />

                    {/* Other Routes */}
                    <Route path="partnership" element={<Partnership />} />
                    <Route path="contact" element={<Contact />} />

                    {/* Placeholder routes - redirect to contact */}
                    <Route path="privacy" element={<Contact />} />
                    <Route path="terms" element={<Contact />} />
                </Route>
            </Routes>
            </Suspense>
        </Router>
    );
}

export default App;

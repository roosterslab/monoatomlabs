import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import ScrollToTop from './components/ScrollToTop';

// Minimal loading fallback - appears for <200ms, so keep it simple
const PageLoader = () => (
  <div className="min-h-screen bg-white"></div>
);

// Eagerly load frequently visited pages for instant navigation
import Home from './presentation/pages/home';
import About from './presentation/pages/about';
import ProductsOverview from './presentation/pages/products-overview';
import Contact from './presentation/pages/contact';

// About sub-pages
const Company = lazy(() => import('./presentation/pages/about-company'));
const Facilities = lazy(() => import('./presentation/pages/about-facilities'));
const Founders = lazy(() => import('./presentation/pages/about-founders'));

// Industries
const IndustriesOverview = lazy(() => import('./presentation/pages/industries-overview'))
const IndustriesConstruction = lazy(() => import('./presentation/pages/industries-construction'))
const IndustriesSolarEnergy = lazy(() => import('./presentation/pages/industries-solar-energy'))
const IndustriesAutomotive = lazy(() => import('./presentation/pages/industries-automotive'))
const IndustriesAdvancedMaterials = lazy(() => import('./presentation/pages/industries-advanced-materials'))

// Technology
const TechnologyPlatform = lazy(() => import('./presentation/pages/technology-platform'))
const TechnologyCapabilities = lazy(() => import('./presentation/pages/technology-capabilities'))
const TechnologyPilotProjects = lazy(() => import('./presentation/pages/technology-pilot-projects'))

// Partnership
const Partnership = lazy(() => import('./presentation/pages/partnership'))

// Lazy load product detail pages (less frequently accessed)
const Graphacrete = lazy(() => import('./presentation/pages/product-graphacrete'));
const Graffisol = lazy(() => import('./presentation/pages/product-graffisol'));
const Ceraphene = lazy(() => import('./presentation/pages/product-ceraphene'));
const HDGPE = lazy(() => import('./presentation/pages/product-hdgpe'));

// Pipeline Pages
const PipelineOverview = lazy(() => import('./presentation/pages/pipeline-overview'));
const Rustene = lazy(() => import('./presentation/pages/pipeline-rustene'));
const Graphyre = lazy(() => import('./presentation/pages/pipeline-graphyre'));
const Graphosite = lazy(() => import('./presentation/pages/pipeline-graphosite'));
const Thermaphene = lazy(() => import('./presentation/pages/pipeline-thermaphene'));
const Armophene = lazy(() => import('./presentation/pages/pipeline-armophene'));
const HydrogenMembranes = lazy(() => import('./presentation/pages/pipeline-hydrogen-membranes'));
const DesalinationMembranes = lazy(() => import('./presentation/pages/pipeline-desalination-membranes'));
const AtmosphericHarvesting = lazy(() => import('./presentation/pages/pipeline-atmospheric-harvesting'));
const GrapheneGlassFibres = lazy(() => import('./presentation/pages/pipeline-graphene-glass-fibres'));
const BatteryStorage = lazy(() => import('./presentation/pages/pipeline-battery-storage'));
const Graphenode = lazy(() => import('./presentation/pages/pipeline-graphenode'));


function App() {
    return (
        <Router>
            <ScrollToTop />
            <Suspense fallback={<PageLoader />}>
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<Home />} />

                    {/* About Routes */}
                    <Route path="about" element={<About />} />
                    <Route path="about/company" element={<Company />} />
                    <Route path="about/facilities" element={<Facilities />} />
                    <Route path="about/founders" element={<Founders />} />
                    <Route path="about/founders-team" element={<Founders />} />

                    {/* Industries Routes */}
                    <Route path="industries" element={<IndustriesOverview />} />
                    <Route path="industries/construction" element={<IndustriesConstruction />} />
                    <Route path="industries/solar-energy" element={<IndustriesSolarEnergy />} />
                    <Route path="industries/automotive" element={<IndustriesAutomotive />} />
                    <Route path="industries/advanced-materials" element={<IndustriesAdvancedMaterials />} />

                    {/* Technology Routes */}
                    <Route path="technology" element={<Navigate to="/technology/platform" replace />} />
                    <Route path="technology/platform" element={<TechnologyPlatform />} />
                    <Route path="technology/capabilities" element={<TechnologyCapabilities />} />
                    <Route path="technology/pilot-projects" element={<TechnologyPilotProjects />} />

                    {/* Product Routes */}
                    <Route path="products" element={<ProductsOverview />} />
                    <Route path="products/graphacrete" element={<Graphacrete />} />
                    <Route path="products/graffisol" element={<Graffisol />} />
                    <Route path="products/ceraphene" element={<Ceraphene />} />
                    <Route path="products/hd-g-pe" element={<HDGPE />} />

                    {/* Pipeline Routes — overview redirects to unified products page */}
                    <Route path="products/pipeline" element={<Navigate to="/products" replace />} />
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
                    <Route path="products/pipeline/graphenode" element={<Graphenode />} />

                    {/* Other Routes */}
                    <Route path="contact" element={<Contact />} />

                    <Route path="partnership" element={<Partnership />} />

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

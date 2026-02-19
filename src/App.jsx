import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import ScrollToTop from './components/ScrollToTop';

// Minimal loading fallback - appears for <200ms, so keep it simple
const PageLoader = () => (
  <div className="min-h-screen bg-white"></div>
);

// Eagerly load frequently visited pages for instant navigation
import Home from './pages/Home';
import About from './pages/About';
import ProductsOverview from './pages/products/ProductsOverview';
import Contact from './pages/Contact';

// About sub-pages
const Company = lazy(() => import('./pages/about/Company'));
const Facilities = lazy(() => import('./pages/about/Facilities'));
const Founders = lazy(() => import('./pages/about/Founders'));

// Lazy load product detail pages (less frequently accessed)
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
const Graphenode = lazy(() => import('./pages/products/pipeline/Graphenode'));


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
                    <Route path="products/pipeline/graphenode" element={<Graphenode />} />

                    {/* Other Routes */}
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

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Catalog from './pages/Catalog';
import VariationView from './pages/VariationView';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';
import PartnershipPage from './pages/PartnershipPage';
import IndustryPage from './pages/IndustryPage';
import TechnologyPage from './pages/TechnologyPage';
import CTALibrary from './pages/CTALibrary';
import HeroMessagingPage from './pages/HeroMessagingPage';
import TrustCredibilityPage from './pages/TrustCredibilityPage';
import ValuePropositionPage from './pages/ValuePropositionPage';
import ProductShowcasePage from './pages/ProductShowcasePage';
import PipelineProductsPage from './pages/PipelineProductsPage';
import ProductionHomePage from './pages/ProductionHomePage';
import { Hexagon, Home, Building2, Package, Handshake, Factory, Atom, MousePointerClick, MessageSquare, Award, Target, LayoutGrid, Rocket, Globe } from 'lucide-react';

function Navigation() {
  const navItems = [
    { path: '/', icon: Home, label: 'Home Variations' },
    { path: '/production-site', icon: Globe, label: 'Production Site' },
    { path: '/about', icon: Building2, label: 'About' },
    { path: '/products', icon: Package, label: 'Products' },
    { path: '/partnership', icon: Handshake, label: 'Partnership' },
    { path: '/industries', icon: Factory, label: 'Industries' },
    { path: '/technology', icon: Atom, label: 'Technology' },
    { path: '/cta-library', icon: MousePointerClick, label: 'CTA Library' },
    { path: '/hero-messaging', icon: MessageSquare, label: 'Hero Messaging' },
    { path: '/trust-credibility', icon: Award, label: 'Trust & Credibility' },
    { path: '/value-propositions', icon: Target, label: 'Value Props' },
    { path: '/product-showcase', icon: LayoutGrid, label: 'Product Showcase' },
    { path: '/pipeline-products', icon: Rocket, label: 'Pipeline Products' },
  ];

  return (
    <nav className="bg-white border-b border-neutral-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <Link to="/" className="flex items-center gap-3">
            <Hexagon className="w-8 h-8 text-black fill-black/10" strokeWidth={1.5} />
            <div>
              <h1 className="text-xl font-bold text-black">Monoatom Labs</h1>
              <p className="text-xs text-neutral-500">Content Lab • All Implementations</p>
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap hover:bg-neutral-100 transition-colors border border-neutral-200"
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-neutral-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/variation/:id" element={<VariationView />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/partnership" element={<PartnershipPage />} />
          <Route path="/industries" element={<IndustryPage />} />
          <Route path="/technology" element={<TechnologyPage />} />
          <Route path="/cta-library" element={<CTALibrary />} />
          <Route path="/hero-messaging" element={<HeroMessagingPage />} />
          <Route path="/trust-credibility" element={<TrustCredibilityPage />} />
          <Route path="/value-propositions" element={<ValuePropositionPage />} />
          <Route path="/product-showcase" element={<ProductShowcasePage />} />
          <Route path="/pipeline-products" element={<PipelineProductsPage />} />
          <Route path="/production-site" element={<ProductionHomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

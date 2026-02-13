import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';

// About Page
import About from './pages/About';

// Product Pages
import ProductsOverview from './pages/products/ProductsOverview';
import Graphacrete from './pages/products/Graphacrete';
import Graffisol from './pages/products/Graffisol';
import Ceraphene from './pages/products/Ceraphene';
import HDGPE from './pages/products/HDGPE';

// Pipeline Page
import PipelineOverview from './pages/products/pipeline/PipelineOverview';

// Technology Pages
import Platform from './pages/technology/Platform';
import PilotProjects from './pages/technology/PilotProjects';
import Capabilities from './pages/technology/Capabilities';



// Industries Pages
import IndustriesOverview from './pages/industries/IndustriesOverview';
import Construction from './pages/industries/Construction';
import SolarEnergy from './pages/industries/SolarEnergy';
import Automotive from './pages/industries/Automotive';
import AdvancedMaterials from './pages/industries/AdvancedMaterials';

// Contact Page
import Contact from './pages/Contact';

// Consolidated Pages
import Technology from './pages/Technology';
import Industries from './pages/Industries';

function App() {
    return (
        <Router>
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
                    {/* Pipeline Route (Consolidated) */}
                    <Route path="products/pipeline" element={<PipelineOverview />} />

                    {/* Technology Routes (Consolidated) */}

                    // Technology Routes (Consolidated)
                    <Route path="technology" element={<Technology />} />



                    {/* Industries Routes (Consolidated) */}
                    <Route path="industries" element={<Industries />} />

                    {/* Contact Route */}
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;

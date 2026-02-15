import React from 'react';
import Hero from '../components/hero/Hero';
import Industry40Enabler from '../components/home/Industry40Enabler';
import LabToManufacturing from '../components/home/LabToManufacturing';
import CustomerJourney from '../components/home/CustomerJourney';
import LabToScale from '../components/home/LabToScale';
import ProductsSection from '../components/home/ProductsSection';
import ImpactMetrics from '../components/home/ImpactMetrics';
import ImpactMetricsDashboard from '../components/home/ImpactMetricsDashboard';
import PartnershipModels from '../components/home/PartnershipModels';
import CertificationsSection from '../components/home/CertificationsSection';
import FAQSection from '../components/home/FAQSection';

const Home = () => {
    return (
        <>
            {/* ========== PHASE 1: HOOK & VALUE PROPOSITION ========== */}

            {/* Hero - Attention Grab */}
            <Hero />

            {/* Industry 4.0 Enabler - Strategic Positioning (Replaces Three Pillars) */}
            <Industry40Enabler />

            {/* Lab to Scale - How We Do It (Process & Scale) */}
            <LabToScale />

            {/* Product Suite with Mission Impact - Combined Section */}
            <ProductsSection />

            {/* Lab to Manufacturing - Journey from Innovation to Scale */}
            <LabToManufacturing />

            {/* Customer Journey - Working Together Process */}
            <CustomerJourney />

            {/* ========== PHASE 3: PROOF & VALIDATION ========== */}

            {/* Impact Metrics Dashboard - Real-World Results */}
            <ImpactMetricsDashboard />

            {/* Impact Metrics - Environmental Impact (Emotional Appeal) */}
            <ImpactMetrics />

            {/* ========== PHASE 4: CAPABILITIES & TRUST ========== */}

            {/* Certifications - Quality Assurance (Trust Building) */}
            <CertificationsSection />

            {/* ========== PHASE 5: ENGAGEMENT & CONVERSION ========== */}

            {/* Partnership Models - Engagement Options (How to Work Together) */}
            <PartnershipModels />

            {/* FAQ - Remove All Barriers (Address Objections) */}
            <FAQSection />
        </>
    );
};

export default Home;

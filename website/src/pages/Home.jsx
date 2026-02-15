import React, { lazy, Suspense } from 'react';
// Load above-the-fold content immediately
import Hero from '../components/hero/Hero';
import ProductsSection from '../components/home/ProductsSection';
import Industry40Enabler from '../components/home/Industry40Enabler';

// Lazy load below-the-fold sections (not visible on initial load)
const LabToScale = lazy(() => import('../components/home/LabToScale'));
const LabToManufacturing = lazy(() => import('../components/home/LabToManufacturing'));
const CustomerJourney = lazy(() => import('../components/home/CustomerJourney'));
const ImpactMetricsDashboard = lazy(() => import('../components/home/ImpactMetricsDashboard'));
const ImpactMetrics = lazy(() => import('../components/home/ImpactMetrics'));
const CertificationsSection = lazy(() => import('../components/home/CertificationsSection'));
const PartnershipModels = lazy(() => import('../components/home/PartnershipModels'));
const FAQSection = lazy(() => import('../components/home/FAQSection'));

// Minimal loader for sections (invisible during fast loads)
const SectionLoader = () => <div className="h-20"></div>;

const Home = () => {
    return (
        <>
            {/* ========== ABOVE THE FOLD - Loads Immediately ========== */}
            <Hero />
            <ProductsSection />

            {/* ========== BELOW THE FOLD - Lazy Loaded ========== */}
            <Suspense fallback={<SectionLoader />}>
                <LabToScale />
                <Industry40Enabler />
                <LabToManufacturing />
                <CustomerJourney />
                <ImpactMetricsDashboard />
                <ImpactMetrics />
                <CertificationsSection />
                <PartnershipModels />
                <FAQSection />
            </Suspense>
        </>
    );
};

export default Home;

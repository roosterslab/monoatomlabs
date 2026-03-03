import React, { lazy, Suspense } from 'react';
// Load above-the-fold content immediately
import Hero from '../components/hero/Hero';
import Industry40Enabler from '../components/home/Industry40Enabler';

// Lazy load below-the-fold sections (not visible on initial load)
const LabToScale = lazy(() => import('../components/home/LabToScale'));
const ProductsSection = lazy(() => import('../components/home/ProductsSection'));
const LabToManufacturing = lazy(() => import('../components/home/LabToManufacturing'));
const CustomerJourney = lazy(() => import('../components/home/CustomerJourney'));
const FAQSection = lazy(() => import('../components/home/FAQSection'));

// Minimal loader for sections (invisible during fast loads)
const SectionLoader = () => <div className="h-20"></div>;

const Home = () => {
    return (
        <>
            {/* ========== ABOVE THE FOLD - Loads Immediately ========== */}
            <Hero />
            <Industry40Enabler />

            {/* ========== BELOW THE FOLD - Lazy Loaded ========== */}
            <Suspense fallback={<SectionLoader />}>
                <LabToScale />
                <ProductsSection />
                <LabToManufacturing />
                <CustomerJourney />
                <FAQSection />
            </Suspense>
        </>
    );
};

export default Home;

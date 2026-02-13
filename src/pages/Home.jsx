import React from 'react';
import Hero from '../components/hero/Hero';
import LabToScale from '../components/home/LabToScale';
import ThreePillars from '../components/home/ThreePillars';
import ProductsSection from '../components/home/ProductsSection';
import ProvenImpact from '../components/home/ProvenImpact';
import TraditionalVsGraphene from '../components/home/TraditionalVsGraphene';
import ImpactMetrics from '../components/home/ImpactMetrics';
import ROIDisplay from '../components/home/ROIDisplay';
import InnovationPipeline from '../components/home/InnovationPipeline';
import PartnershipModels from '../components/home/PartnershipModels';
import CertificationsSection from '../components/home/CertificationsSection';
import WorkingWithUs from '../components/home/WorkingWithUs';
import FAQSection from '../components/home/FAQSection';

const Home = () => {
    return (
        <>
            {/* ========== PHASE 1: HOOK & VALUE PROPOSITION ========== */}

            {/* Hero - Attention Grab */}
            <Hero />

            {/* Three Pillars - Foundation & Credibility (Why Trust Us) */}
            <ThreePillars />

            {/* ========== PHASE 2: MISSION & PRODUCTS ========== */}

            {/* Product Suite with Mission Impact - Combined Section */}
            <ProductsSection />

            {/* Traditional vs Graphene - Problem/Solution Clarity */}
            <TraditionalVsGraphene />

            {/* ========== PHASE 3: PROOF & VALIDATION ========== */}

            {/* Proven Impact - Social Proof (Real Results) */}
            <ProvenImpact />

            {/* Impact Metrics - Environmental Impact (Emotional Appeal) */}
            <ImpactMetrics />

            {/* ========== PHASE 4: CAPABILITIES & TRUST ========== */}

            {/* Lab to Scale - How We Do It (Process & Scale) */}
            <LabToScale />

            {/* ROI Display - Financial Benefits (Logical Justification) */}
            <ROIDisplay />

            {/* Certifications - Quality Assurance (Trust Building) */}
            <CertificationsSection />

            {/* ========== PHASE 5: FUTURE & INNOVATION ========== */}

            {/* Innovation Pipeline - Future Vision (FOMO & Excitement) */}
            <InnovationPipeline />

            {/* ========== PHASE 6: ENGAGEMENT & CONVERSION ========== */}

            {/* Partnership Models - Engagement Options (How to Work Together) */}
            <PartnershipModels />

            {/* Working With Us - Process Clarity (Implementation Path) */}
            <WorkingWithUs />

            {/* FAQ - Remove All Barriers (Address Objections) */}
            <FAQSection />
        </>
    );
};

export default Home;

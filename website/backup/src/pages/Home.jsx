import React from 'react';
import Hero from '../components/hero/Hero';
import Introduction from '../components/home/Introduction';
import ProductsSection from '../components/home/ProductsSection';
import TechnologySection from '../components/home/TechnologySection';
import LeadershipSection from '../components/home/LeadershipSection';

const Home = () => {
    return (
        <>
            <Hero />
            <Introduction />
            <ProductsSection />
            <TechnologySection />
            <LeadershipSection />
        </>
    );
};

export default Home;

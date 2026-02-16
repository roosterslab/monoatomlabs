import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { HexagonWaveOptimized } from '../backgrounds';
import NavigationProgress from '../NavigationProgress';

const MainLayout = () => {
    return (
        <div className="min-h-screen bg-black font-sans selection:bg-white selection:text-black relative">
            {/* PERSISTENT HEXAGON BACKGROUND - Never unmounts, stays across all routes */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <HexagonWaveOptimized className="w-full h-full opacity-70" />
                {/* Radial gradient overlay to fade edges */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.4)_100%)]"></div>
            </div>

            {/* Navigation Progress Indicator */}
            <NavigationProgress />

            {/* Content Layer - renders above background */}
            <div className="relative z-10">
                <Navbar />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;

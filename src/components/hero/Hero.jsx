import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import StatCard from '../ui/StatCard';
import GrapheneLatticeOptimized from './GrapheneLatticeOptimized';
import { homePresentation } from '../../presentation/pages/home.copy';

const Hero = () => {
    const copy = homePresentation;

    return (
        <section className="relative pt-40 pb-24 md:pt-56 md:pb-40 px-6 bg-black overflow-hidden border-b border-neutral-800">
            {/* 3D GRAPHENE LATTICE CANVAS - OPTIMIZED */}
            <GrapheneLatticeOptimized />

            {/* Heavy radial gradient to focus attention on center and text */}
            <div className="absolute inset-0 z-0 bg-radial-gradient from-transparent to-black pointer-events-none" style={{ background: 'radial-gradient(circle at center, transparent 0%, #000 90%)' }}></div>
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left fade-in">
                <div className="relative inline-flex items-center gap-2.5 px-5 py-2 rounded-full mb-10" style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    boxShadow: '0 0 24px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.1)'
                }}>
                    <div className="absolute inset-0 rounded-full blur-md opacity-20" style={{ background: 'linear-gradient(135deg, #fff 0%, transparent 100%)' }}></div>
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </span>
                    <span className="relative text-xs font-semibold tracking-[0.2em] uppercase" style={{
                        background: 'linear-gradient(90deg, #ffffff 0%, #a3a3a3 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        {copy.hero.badge}
                    </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-white tracking-tighter leading-tight mb-8 drop-shadow-xl">
                    {copy.hero.headingLine1} <br />
                    <span className="text-neutral-500">{copy.hero.headingHighlight}</span>
                </h1>

                <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl mb-12 font-light leading-relaxed">
                    {copy.hero.tagline}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-20">
                    <Link to={copy.hero.ctaPrimary.to}>
                        <Button variant="primary" theme="dark" icon={ArrowRight}>{copy.hero.ctaPrimary.label}</Button>
                    </Link>
                    <Link to={copy.hero.ctaSecondary.to}>
                        <Button variant="secondary" theme="dark">{copy.hero.ctaSecondary.label}</Button>
                    </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-neutral-800 pt-8">
                    <StatCard value={copy.hero.stats.innovation.value} label={copy.hero.stats.innovation.label} theme="dark" />
                    <StatCard value={copy.hero.stats.commercial.value} label={copy.hero.stats.commercial.label} theme="dark" />
                    <StatCard value={copy.hero.stats.facilities.value} label={copy.hero.stats.facilities.label} theme="dark" />
                    <StatCard value={copy.hero.stats.pilot.value} label={copy.hero.stats.pilot.label} theme="dark" />
                </div>

            </div>
        </section>
    );
};

export default Hero;

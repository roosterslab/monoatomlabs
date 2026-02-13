import React from 'react';
import { motion } from 'framer-motion';
import HexagonWave from '../hero/HexagonWave';

const PageHeader = ({ title, subtitle, category }) => {
    return (
        <section className="relative pt-32 pb-16 px-6 bg-neutral-950 border-b border-neutral-900 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 z-0">
                <HexagonWave className="w-full h-full opacity-70" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {category && (
                        <span className="inline-block py-1 px-3 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-medium text-neutral-400 mb-6 tracking-wide uppercase">
                            {category}
                        </span>
                    )}
                    <h1 className="text-4xl md:text-5xl font-display font-medium text-white mb-6">
                        {title}
                    </h1>
                    <p className="text-lg text-neutral-400 max-w-2xl leading-relaxed">
                        {subtitle}
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default PageHeader;

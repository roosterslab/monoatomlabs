import React from 'react';
import { motion } from 'framer-motion';

const PageHeader = ({ title, subtitle, category, transparent = false }) => {
    return (
        <section className={`pt-40 pb-16 px-6 border-b ${transparent ? 'border-neutral-200 bg-transparent' : 'border-neutral-900 bg-black/10'}`}>
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {category && (
                        <span className="inline-block py-1 px-3 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 text-xs font-medium mb-6 tracking-wide uppercase">
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

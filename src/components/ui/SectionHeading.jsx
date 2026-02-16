import React from 'react';

const SectionHeading = ({ number, title, subtitle, theme = 'light' }) => (
    <div className="mb-12 md:mb-20 group">
        <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full mb-6 transition-all duration-300 ${
            theme === 'dark'
                ? 'bg-neutral-800/50 border border-neutral-700/50 backdrop-blur-sm'
                : 'bg-gradient-to-r from-neutral-100 to-neutral-50 border border-neutral-200/70 shadow-sm group-hover:shadow-md'
        }`}>
            <span className={`font-mono text-xs tracking-widest uppercase font-bold ${
                theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
            }`}>
                {number}
            </span>
            <span className={`w-1 h-1 rounded-full ${
                theme === 'dark' ? 'bg-neutral-600' : 'bg-neutral-400'
            }`}></span>
            <span className={`font-mono text-xs tracking-wider uppercase font-semibold ${
                theme === 'dark' ? 'text-neutral-500' : 'text-neutral-500'
            }`}>
                {title}
            </span>
        </div>
        <h2 className={`text-3xl md:text-5xl font-semibold tracking-tight leading-tight max-w-2xl ${
            theme === 'dark' ? 'text-white' : 'text-neutral-900'
        }`}>
            {subtitle}
        </h2>
    </div>
);

export default SectionHeading;

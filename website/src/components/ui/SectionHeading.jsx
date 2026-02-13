import React from 'react';

const SectionHeading = ({ number, title, subtitle, theme = 'light' }) => (
    <div className="mb-12 md:mb-20">
        <span className={`block font-mono text-xs mb-4 tracking-widest uppercase font-semibold ${theme === 'dark' ? 'text-neutral-500' : 'text-neutral-400'}`}>
            {number} — {title}
        </span>
        <h2 className={`text-3xl md:text-5xl font-light tracking-tight leading-tight max-w-2xl ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}>
            {subtitle}
        </h2>
    </div>
);

export default SectionHeading;

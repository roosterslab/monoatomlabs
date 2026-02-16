import React from 'react';

const StatCard = ({ value, label, theme = 'dark', className = '', valueClassName = '', labelClassName = '' }) => (
    <div className={`border-l pl-6 py-2 group transition-colors duration-300 ${theme === 'dark' ? 'border-neutral-800 hover:border-white' : 'border-neutral-200 hover:border-neutral-900'} ${className}`}>
        <div className={`text-4xl font-light mb-1 transition-colors ${theme === 'dark' ? 'text-white group-hover:text-neutral-200' : 'text-neutral-900'} ${valueClassName}`}>
            {value}
        </div>
        <div className={`text-xs uppercase tracking-wider font-medium ${theme === 'dark' ? 'text-neutral-500 group-hover:text-neutral-300' : 'text-neutral-500'} ${labelClassName}`}>
            {label}
        </div>
    </div>
);

export default StatCard;

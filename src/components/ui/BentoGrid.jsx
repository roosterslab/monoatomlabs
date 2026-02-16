import React from 'react';

const BentoGrid = ({ children, className = "" }) => {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)] ${className}`}>
            {children}
        </div>
    );
};

export const BentoItem = ({
    children,
    className = "",
    colSpan = 1,
    rowSpan = 1,
    theme = "light"
}) => {
    // Explicit mappings for Tailwind to detect classes
    const colSpanClasses = {
        1: 'md:col-span-1',
        2: 'md:col-span-2',
        3: 'md:col-span-3',
    };

    const rowSpanClasses = {
        1: 'md:row-span-1',
        2: 'md:row-span-2',
        3: 'md:row-span-3',
    };

    const spanClass = `${colSpanClasses[colSpan] || 'md:col-span-1'} ${rowSpanClasses[rowSpan] || 'md:row-span-1'}`;

    const themeClasses = theme === 'dark'
        ? 'bg-neutral-900 border-neutral-800 text-white'
        : 'bg-white border-neutral-200 text-neutral-900';

    return (
        <div className={`
            rounded-3xl border p-6 flex flex-col justify-between overflow-hidden relative group
            ${spanClass} ${themeClasses} ${className}
        `}>
            {children}
        </div>
    );
};

export default BentoGrid;

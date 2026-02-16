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
        ? 'bg-gradient-to-br from-neutral-900 via-neutral-900 to-black border-neutral-800/50 text-white shadow-[0_8px_30px_rgba(0,0,0,0.25)]'
        : 'bg-gradient-to-br from-white to-neutral-50/30 border-neutral-200/70 text-neutral-900 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.1)]';

    return (
        <div className={`
            rounded-3xl border p-6 flex flex-col justify-between overflow-hidden relative group transition-all duration-500
            ${spanClass} ${themeClasses} ${className}
        `}>
            {children}
        </div>
    );
};

export default BentoGrid;

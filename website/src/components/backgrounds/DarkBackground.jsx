import React from 'react';

/**
 * DarkBackground - Simple dark background section without animation
 *
 * Use this for simple dark sections that don't need the hexagonal animation.
 * For sections that need animation, use DarkHexBackground instead.
 *
 * @param {React.ReactNode} children - Content to render on top of background
 * @param {string} className - Additional classes for the section container
 * @param {string} contentClassName - Additional classes for the content wrapper
 */
const DarkBackground = ({
    children,
    className = "",
    contentClassName = ""
}) => {
    return (
        <section className={`relative bg-black overflow-hidden ${className}`}>
            <div className={`relative z-10 ${contentClassName}`}>
                {children}
            </div>
        </section>
    );
};

export default DarkBackground;

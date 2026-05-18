import React from 'react';
import HexagonWave from './HexagonWave';

/**
 * DarkHexBackground - Reusable dark background with animated hexagonal pattern
 *
 * Used across the site for consistent visual identity on dark sections.
 * Combines three layers:
 * 1. Black base background
 * 2. Animated hexagonal wave pattern (opacity: 70%)
 * 3. Radial gradient mask (darker at edges, transparent at center)
 *
 * @param {React.ReactNode} children - Content to render on top of background
 * @param {string} className - Additional classes for the section container
 * @param {string} contentClassName - Additional classes for the content wrapper
 * @param {number} hexOpacity - Opacity of hexagon animation (default: 70)
 */
const DarkHexBackground = ({
    children,
    className = "",
    contentClassName = "",
    hexOpacity = 70
}) => {
    return (
        <section className={`relative bg-black overflow-hidden ${className}`}>
            {/* Background Layer: Animated Hexagons + Radial Mask */}
            <div className="absolute inset-0 z-0">
                {/* Animated Hexagonal Wave Pattern */}
                <HexagonWave className={`w-full h-full opacity-${hexOpacity}`} />

                {/* Radial Gradient Mask - Keeps center clear, darkens edges */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none"></div>
            </div>

            {/* Content Layer */}
            <div className={`relative z-10 ${contentClassName}`}>
                {children}
            </div>
        </section>
    );
};

export default DarkHexBackground;

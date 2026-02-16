import AtomsToIndustry from './AtomsToIndustry';

/**
 * AtomsToIndustryBackground - Complete section background with atoms-to-industry animation
 *
 * A ready-to-use section background component combining:
 * - AtomsToIndustry canvas animation (honeycomb formation)
 * - Gradient overlays for better text readability
 * - Optional radial vignette
 *
 * Perfect for hero sections or major milestone sections that represent
 * the company's journey from research to industrial scale.
 *
 * @param {ReactNode} children - Content to display on top of the background
 * @param {string} className - Additional classes for the section wrapper
 * @param {string} contentClassName - Additional classes for the content container
 * @param {number} scrollSpeed - Animation scroll speed (default: 0.8)
 * @param {number} hexRadius - Size of hexagons (default: 30)
 * @param {boolean} showVignette - Show radial vignette overlay (default: true)
 * @param {boolean} showGradient - Show vertical gradient overlay (default: true)
 *
 * @example
 * <AtomsToIndustryBackground className="py-32">
 *   <div className="max-w-7xl mx-auto">
 *     <h1>From Atoms to Industry</h1>
 *     <p>Your content here...</p>
 *   </div>
 * </AtomsToIndustryBackground>
 */
const AtomsToIndustryBackground = ({
    children,
    className = '',
    contentClassName = '',
    scrollSpeed = 0.8,
    hexRadius = 30,
    showVignette = true,
    showGradient = true
}) => {
    return (
        <section className={`relative bg-black overflow-hidden ${className}`}>
            {/* Animated Background */}
            <div className="absolute inset-0 z-0">
                <AtomsToIndustry scrollSpeed={scrollSpeed} hexRadius={hexRadius} />

                {/* Gradient Overlay for Readability */}
                {showGradient && (
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black pointer-events-none" />
                )}

                {/* Radial Vignette */}
                {showVignette && (
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />
                )}
            </div>

            {/* Content Layer */}
            <div className={`relative z-10 ${contentClassName}`}>
                {children}
            </div>
        </section>
    );
};

export default AtomsToIndustryBackground;

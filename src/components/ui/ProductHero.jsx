import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import BackgroundSlideshow from './BackgroundSlideshow';

const ProductHero = ({
    title,
    subtitle,
    category,
    categoryColor = "bg-white",
    images = [],
    buttons = [],
    className = ""
}) => {
    return (
        <section className={`relative overflow-hidden rounded-2xl bg-black text-white isolate ${className}`}>
            {/* Background Slideshow */}
            <div className="absolute inset-0 z-0">
                <BackgroundSlideshow
                    images={images}
                    interval={5000}
                    transitionDuration={2000}
                />
                {/* Gradient Overlay - Pure Black */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/40 z-10"></div>
            </div>

            <div className="relative z-10 p-8 md:p-12 lg:p-16 max-w-4xl">
                {category && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium tracking-wider uppercase mb-6">
                        <span className={`w-2 h-2 rounded-full ${categoryColor}`}></span>
                        {category}
                    </div>
                )}

                <h2 className="text-4xl md:text-5xl font-display font-medium mb-6 leading-tight">
                    {title}
                </h2>

                <p className="text-lg text-neutral-300 leading-relaxed mb-8 max-w-xl">
                    {subtitle}
                </p>

                {buttons.length > 0 && (
                    <div className="flex flex-wrap gap-4">
                        {buttons.map((btn, index) => (
                            <React.Fragment key={index}>
                                {btn.link.startsWith('#') ? (
                                    <a href={btn.link}>
                                        <Button variant={btn.variant || 'primary'} theme="dark">
                                            {btn.text}
                                        </Button>
                                    </a>
                                ) : (
                                    <Link to={btn.link}>
                                        <Button variant={btn.variant || 'primary'} theme="dark">
                                            {btn.text}
                                        </Button>
                                    </Link>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProductHero;

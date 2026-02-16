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
    className = "",
    theme = "dark"
}) => {
    const isLight = theme === 'light';

    return (
        <section className={`relative overflow-hidden rounded-3xl ${isLight ? 'bg-neutral-50 text-neutral-900' : 'bg-black text-white'} isolate ${className}`}>
            {/* Background Slideshow */}
            <div className="absolute inset-0 z-0">
                <BackgroundSlideshow
                    images={images}
                    interval={5000}
                    transitionDuration={2000}
                />
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 z-10 ${isLight
                        ? 'bg-gradient-to-r from-white via-white/90 to-transparent'
                        : 'bg-gradient-to-r from-black via-black/90 to-black/40'
                    }`}></div>
            </div>

            <div className="relative z-10 p-8 md:p-16 lg:p-24 max-w-4xl">
                {category && (
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border backdrop-blur-md text-xs font-bold tracking-widest uppercase mb-8 ${isLight
                            ? 'bg-white/50 border-neutral-200 text-neutral-500'
                            : 'bg-white/10 border-white/20 text-white'
                        }`}>
                        <span className={`w-2 h-2 rounded-full ${categoryColor}`}></span>
                        {category}
                    </div>
                )}

                <h2 className={`text-5xl md:text-7xl font-display font-medium mb-8 leading-[0.9] tracking-tight ${isLight ? 'text-neutral-900' : 'text-white'
                    }`}>
                    {title}
                </h2>

                <p className={`text-xl md:text-2xl leading-relaxed mb-10 max-w-xl font-light ${isLight ? 'text-neutral-500' : 'text-neutral-300'
                    }`}>
                    {subtitle}
                </p>

                {buttons.length > 0 && (
                    <div className="flex flex-wrap gap-4">
                        {buttons.map((btn, index) => (
                            <React.Fragment key={index}>
                                {btn.link.startsWith('#') ? (
                                    <a href={btn.link}>
                                        <Button variant={btn.variant || 'primary'} theme={theme}>
                                            {btn.text}
                                        </Button>
                                    </a>
                                ) : (
                                    <Link to={btn.link}>
                                        <Button variant={btn.variant || 'primary'} theme={theme}>
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

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
                <div
                    className="absolute inset-0 z-10"
                    style={{
                        background: isLight
                            ? 'linear-gradient(to right, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.6) 35%, transparent 60%)'
                            : 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.35) 35%, transparent 60%)'
                    }}
                ></div>
            </div>

            <div className="relative z-10 p-8 md:p-12 lg:p-16 max-w-lg">
                {category && (
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border backdrop-blur-md text-xs font-bold tracking-widest uppercase mb-6 ${isLight
                            ? 'bg-white/50 border-neutral-200 text-neutral-500'
                            : 'bg-white/10 border-white/20 text-white'
                        }`}>
                        <span className={`w-2 h-2 rounded-full ${categoryColor}`}></span>
                        {category}
                    </div>
                )}

                <h2 className={`text-3xl md:text-4xl font-display font-medium mb-4 leading-tight tracking-tight ${isLight ? 'text-neutral-900' : 'text-white'
                    }`}>
                    {title}
                </h2>

                <p className={`text-sm md:text-base leading-relaxed mb-8 font-light ${isLight ? 'text-neutral-500' : 'text-neutral-300'
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

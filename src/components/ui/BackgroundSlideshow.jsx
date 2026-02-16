import React, { useState, useEffect } from 'react';

const BackgroundSlideshow = ({
    images = [],
    interval = 5000,
    transitionDuration = 1000,
    className = ""
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!images || images.length <= 1) return;

        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, interval);

        return () => clearInterval(timer);
    }, [images, interval]);

    if (!images || images.length === 0) return null;

    return (
        <div className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}>
            {images.map((image, index) => (
                <div
                    key={index}
                    className="absolute inset-0 w-full h-full transition-opacity duration-[1000ms] ease-in-out"
                    style={{
                        opacity: index === currentIndex ? 1 : 0,
                        transitionDuration: `${transitionDuration}ms`,
                        zIndex: index === currentIndex ? 1 : 0
                    }}
                >
                    <img
                        src={image}
                        alt={`Background slide ${index + 1}`}
                        className="w-full h-full object-cover"
                    />
                </div>
            ))}
            {/* Overlay Gradient usually sits on top, but it should be handled by parent or z-index */}
        </div>
    );
};

export default BackgroundSlideshow;

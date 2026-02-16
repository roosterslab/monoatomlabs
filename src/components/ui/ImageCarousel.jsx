import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageCarousel = ({
    images,
    alt,
    className = "",
    interval = 4000,
    showGradient = false,
    showDots = true,
    showNavigation = true,
    pauseOnHover = true
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const hasMultiple = images.length > 1;

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToImage = (index) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        let intervalId;
        if (hasMultiple && !isPaused) {
            intervalId = setInterval(() => {
                nextImage();
            }, interval);
        }
        return () => clearInterval(intervalId);
    }, [hasMultiple, images.length, interval, isPaused, currentIndex]);

    return (
        <div
            className={`relative overflow-hidden ${className}`}
            onMouseEnter={() => pauseOnHover && setIsPaused(true)}
            onMouseLeave={() => pauseOnHover && setIsPaused(false)}
        >
            <AnimatePresence mode="wait">
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt={`${alt} - Image ${currentIndex + 1}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </AnimatePresence>

            {/* Optional Gradient Overlay */}
            {showGradient && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            )}

            {/* Navigation Arrows */}
            {hasMultiple && showNavigation && (
                <>
                    <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full shadow-lg transition-all opacity-0 hover:opacity-100 group-hover:opacity-100 z-20"
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="w-5 h-5 text-neutral-900" />
                    </button>
                    <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full shadow-lg transition-all opacity-0 hover:opacity-100 group-hover:opacity-100 z-20"
                        aria-label="Next image"
                    >
                        <ChevronRight className="w-5 h-5 text-neutral-900" />
                    </button>
                </>
            )}

            {/* Dots Indicator */}
            {hasMultiple && showDots && (
                <div className="absolute top-4 right-4 flex gap-1.5 z-20">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => goToImage(idx)}
                            className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                                idx === currentIndex
                                    ? 'bg-white scale-110'
                                    : 'bg-white/40 hover:bg-white/60'
                            }`}
                            aria-label={`Go to image ${idx + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ImageCarousel;

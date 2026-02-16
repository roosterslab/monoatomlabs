import React, { useState, useEffect } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

const ProductLightbox = ({ src, images, alt, className = "", imageFit = "object-cover", innerClassName = "bg-neutral-100" }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Support both single image (src) and multiple images (images array)
    const imageList = images || (src ? [src] : []);
    const hasMultipleImages = imageList.length > 1;
    const currentImage = imageList[currentIndex] || src;

    // Auto-rotate carousel every 4 seconds
    useEffect(() => {
        if (!hasMultipleImages || isOpen) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % imageList.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [hasMultipleImages, imageList.length, isOpen]);

    const goToNext = (e) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % imageList.length);
    };

    const goToPrev = (e) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + imageList.length) % imageList.length);
    };

    return (
        <>
            {/* Trigger Image Container */}
            <div
                className={`relative rounded-2xl overflow-hidden border border-neutral-200 shadow-sm group cursor-pointer ${className}`}
                onClick={() => setIsOpen(true)}
            >
                <div className={`w-full h-full flex items-center justify-center ${innerClassName}`}>
                    <img
                        src={currentImage}
                        alt={alt}
                        className={`w-full h-full ${imageFit} transition-transform duration-700 group-hover:scale-105`}
                    />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/5 transition-colors duration-300" />

                {/* Navigation Arrows - Only show if multiple images */}
                {hasMultipleImages && (
                    <>
                        <button
                            onClick={goToPrev}
                            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/90 backdrop-blur-sm text-neutral-800 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white z-10"
                            aria-label="Previous Image"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={goToNext}
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/90 backdrop-blur-sm text-neutral-800 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white z-10"
                            aria-label="Next Image"
                        >
                            <ChevronRight size={20} />
                        </button>

                        {/* Dots Indicator */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                            {imageList.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setCurrentIndex(index);
                                    }}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                        index === currentIndex
                                            ? 'bg-white w-6'
                                            : 'bg-white/50 hover:bg-white/75'
                                    }`}
                                    aria-label={`Go to image ${index + 1}`}
                                />
                            ))}
                        </div>
                    </>
                )}

                {/* Expand Button */}
                <button
                    className="absolute bottom-4 right-4 p-2 bg-white/90 backdrop-blur-sm text-neutral-800 rounded-full shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-white z-10"
                    aria-label="View Full Image"
                >
                    <Maximize2 size={20} />
                </button>
            </div>

            {/* Lightbox Modal */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-[100] bg-neutral-950/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-200"
                    onClick={() => setIsOpen(false)}
                >
                    <button
                        className="absolute top-6 right-6 p-2 bg-neutral-800 text-white rounded-full hover:bg-neutral-700 transition-colors z-50 cursor-pointer"
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsOpen(false);
                        }}
                    >
                        <X size={24} />
                    </button>

                    {/* Lightbox Navigation Arrows */}
                    {hasMultipleImages && (
                        <>
                            <button
                                onClick={goToPrev}
                                className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-neutral-800 text-white rounded-full hover:bg-neutral-700 transition-colors z-50"
                                aria-label="Previous Image"
                            >
                                <ChevronLeft size={28} />
                            </button>
                            <button
                                onClick={goToNext}
                                className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-neutral-800 text-white rounded-full hover:bg-neutral-700 transition-colors z-50"
                                aria-label="Next Image"
                            >
                                <ChevronRight size={28} />
                            </button>
                        </>
                    )}

                    <div className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center pointer-events-none">
                        <div
                            className="relative w-full max-w-5xl h-full flex items-center justify-center pointer-events-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={currentImage}
                                alt={alt}
                                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                            />
                        </div>
                        <div className="flex flex-col items-center gap-4 mt-6">
                            <h3 className="text-white font-display text-2xl font-medium tracking-wide">{alt}</h3>
                            {hasMultipleImages && (
                                <div className="flex gap-2">
                                    {imageList.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setCurrentIndex(index);
                                            }}
                                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                                                index === currentIndex
                                                    ? 'bg-white w-8'
                                                    : 'bg-white/40 hover:bg-white/70'
                                            }`}
                                            aria-label={`Go to image ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductLightbox;

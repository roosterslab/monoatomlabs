import React, { useState } from 'react';
import { Maximize2, X } from 'lucide-react';

const ProductLightbox = ({ src, alt, className = "", imageFit = "object-cover", innerClassName = "bg-neutral-100" }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Trigger Image Container */}
            <div
                className={`relative rounded-2xl overflow-hidden border border-neutral-200 shadow-sm group cursor-pointer ${className}`}
                onClick={() => setIsOpen(true)}
            >
                <div className={`w-full h-full flex items-center justify-center ${innerClassName}`}>
                    <img
                        src={src}
                        alt={alt}
                        className={`w-full h-full ${imageFit} transition-transform duration-700 group-hover:scale-105`}
                    />
                </div>

                {/* Hover Overlay & Button */}
                <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/5 transition-colors duration-300" />

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

                    <div className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center pointer-events-none">
                        <div
                            className="relative w-full max-w-5xl h-full flex items-center justify-center pointer-events-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={src}
                                alt={alt}
                                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                            />
                        </div>
                        <h3 className="text-white font-display text-2xl mt-6 font-medium tracking-wide">{alt}</h3>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductLightbox;

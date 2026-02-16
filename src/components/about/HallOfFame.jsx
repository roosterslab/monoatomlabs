import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Star, Trophy, X, ChevronRight, ChevronLeft, Maximize2 } from 'lucide-react';

const HallOfFame = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        {
            src: '/images/hall-of-fame/conf1.jpeg',
            alt: 'Conference Presentation',
            caption: 'Global Innovation Summit',
            description: 'Unveiling our breakthrough graphene dispersion technology to industry leaders from 30 countries.'
        },
        {
            src: '/images/hall-of-fame/conf2.jpeg',
            alt: 'Award Ceremony',
            caption: 'Industry Recognition',
            description: 'Honored with the "Sustainability Tech of the Year" award for our contributions to reducing carbon footprints.'
        },
        {
            src: '/images/hall-of-fame/conf3.jpeg',
            alt: 'Panel Discussion',
            caption: 'Thought Leadership',
            description: 'Our CEO discussing the future of advanced materials policy and standardization.'
        }
    ];

    const handleNext = (e) => {
        e.stopPropagation();
        const currentIndex = images.findIndex(img => img.src === selectedImage.src);
        const nextIndex = (currentIndex + 1) % images.length;
        setSelectedImage(images[nextIndex]);
    };

    const handlePrev = (e) => {
        e.stopPropagation();
        const currentIndex = images.findIndex(img => img.src === selectedImage.src);
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        setSelectedImage(images[prevIndex]);
    };

    return (
        <section className="py-24 px-6 bg-gradient-to-b from-neutral-900 to-black border-t border-b border-neutral-800 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-800/80 border border-neutral-700 text-purple-300 text-xs font-mono font-medium tracking-wider uppercase mb-8 shadow-[0_0_20px_rgba(168,85,247,0.15)] backdrop-blur-md">
                        <Trophy className="w-3.5 h-3.5 text-purple-400" />
                        Milestones & Recognition
                    </div>
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
                        Hall of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Fame</span>
                    </h2>
                    <p className="text-xl text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed">
                        Celebrating our journey of breakthroughs, global recognitions, and the moments that define our legacy.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            layoutId={`card-${index}`}
                            onClick={() => setSelectedImage(img)}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-purple-900/20 transition-all duration-500 ring-1 ring-white/5 hover:ring-purple-500/50"
                        >
                            <div className="absolute inset-0 bg-neutral-900 animate-pulse" />
                            <motion.img
                                layoutId={`image-${img.src}`}
                                src={img.src}
                                alt={img.alt}
                                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                            />
                            {/* Detailed Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

                            {/* View Icon (Centered) */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-90 group-hover:scale-100 translate-y-4 group-hover:translate-y-0">
                                <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                                    <Maximize2 className="w-6 h-6" />
                                </div>
                            </div>

                            {/* Bottom Content */}
                            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                <div className="flex items-center gap-2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    <Star className="w-3.5 h-3.5 text-purple-400 fill-purple-400" />
                                    <span className="text-xs font-mono text-purple-200 uppercase tracking-widest">Featured Moment</span>
                                </div>
                                <h3 className="text-white font-bold text-xl leading-tight border-l-4 border-purple-500 pl-4 group-hover:border-white transition-colors">
                                    {img.caption}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-3xl flex items-center justify-center p-4 md:p-12"
                        onClick={() => setSelectedImage(null)}
                    >
                        {/* Controls */}
                        <button className="absolute top-8 right-8 p-3 rounded-full bg-neutral-900/50 hover:bg-neutral-800 border border-neutral-700 text-white transition-all z-50 group">
                            <X className="w-6 h-6 group-hover:rotate-90 transition-transform" />
                        </button>

                        <button
                            className="absolute left-8 top-1/2 -translate-y-1/2 p-4 rounded-full bg-neutral-900/50 hover:bg-neutral-800 border border-neutral-700 text-white transition-all z-50 hidden md:flex hover:-translate-x-1"
                            onClick={handlePrev}
                        >
                            <ChevronLeft className="w-8 h-8" />
                        </button>
                        <button
                            className="absolute right-8 top-1/2 -translate-y-1/2 p-4 rounded-full bg-neutral-900/50 hover:bg-neutral-800 border border-neutral-700 text-white transition-all z-50 hidden md:flex hover:translate-x-1"
                            onClick={handleNext}
                        >
                            <ChevronRight className="w-8 h-8" />
                        </button>

                        {/* Content */}
                        <motion.div
                            layoutId={`card-${images.findIndex(img => img.src === selectedImage.src)}`}
                            className="relative max-w-6xl w-full max-h-[85vh] grid grid-cols-1 lg:grid-cols-3 bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-800 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="lg:col-span-2 relative h-[50vh] lg:h-auto bg-black flex items-center justify-center p-4">
                                <motion.img
                                    layoutId={`image-${selectedImage.src}`}
                                    src={selectedImage.src}
                                    alt={selectedImage.alt}
                                    className="max-w-full max-h-full object-contain drop-shadow-2xl"
                                />
                            </div>
                            <div className="p-8 lg:p-12 flex flex-col justify-center bg-neutral-900 border-t lg:border-t-0 lg:border-l border-neutral-800">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono uppercase tracking-widest w-fit mb-8">
                                    <Star className="w-3.5 h-3.5 fill-current" />
                                    <span>Milestone</span>
                                </div>
                                <h3 className="text-3xl lg:text-4xl font-display font-bold text-white mb-6 leading-tight">
                                    {selectedImage.caption}
                                </h3>
                                <p className="text-neutral-300 text-lg leading-relaxed font-light mb-10">
                                    {selectedImage.description}
                                </p>
                                <div className="mt-auto pt-8 border-t border-neutral-800 flex justify-between items-center text-xs text-neutral-500 font-mono uppercase tracking-wider">
                                    <span>Image {images.findIndex(img => img.src === selectedImage.src) + 1} / {images.length}</span>
                                    <span>MONOATOM LABS &copy; 2026</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default HallOfFame;

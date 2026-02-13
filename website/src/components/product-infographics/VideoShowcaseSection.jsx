import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Clock, Eye, Film, Star } from 'lucide-react';

const VideoShowcaseSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    {
      id: 1,
      title: 'Graphacrete: Transforming Concrete Construction',
      category: 'product-demo',
      duration: '3:45',
      views: '12.4K',
      thumbnail: 'graphacrete-demo',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video
      description: 'See how Graphacrete enhances concrete strength by 40-50% while reducing cement usage by 15-20%.',
      featured: true,
    },
    {
      id: 2,
      title: 'Graffisol Solar Coating in Action',
      category: 'product-demo',
      duration: '4:12',
      views: '18.2K',
      thumbnail: 'graffisol-demo',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Watch real-world testing of Graffisol achieving 10-12% energy gain on solar panels.',
      featured: true,
    },
    {
      id: 3,
      title: 'Customer Success: L&T Construction',
      category: 'testimonial',
      duration: '2:30',
      views: '8.7K',
      thumbnail: 'lnt-testimonial',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Hear from L&T about their experience using Graphacrete in a major Mumbai project.',
      featured: false,
    },
    {
      id: 4,
      title: 'How to Apply Ceraphene Coating',
      category: 'how-to',
      duration: '5:20',
      views: '22.1K',
      thumbnail: 'ceraphene-howto',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Step-by-step guide to applying Ceraphene for professional-grade ceramic protection.',
      featured: false,
    },
    {
      id: 5,
      title: 'Tata Power Solar Farm Case Study',
      category: 'case-study',
      duration: '6:15',
      views: '15.3K',
      thumbnail: 'tata-casestudy',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: '50 MW solar farm achieves 11.2% energy gain with Graffisol coating.',
      featured: false,
    },
    {
      id: 6,
      title: 'HD-G-PE Manufacturing Process',
      category: 'product-demo',
      duration: '4:45',
      views: '9.8K',
      thumbnail: 'hdgpe-demo',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Behind the scenes of HD-G-PE production and quality control.',
      featured: false,
    },
    {
      id: 7,
      title: 'Maruti Suzuki Premium Coating Review',
      category: 'testimonial',
      duration: '3:10',
      views: '11.2K',
      thumbnail: 'maruti-testimonial',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Automotive industry leader shares their experience with Ceraphene.',
      featured: false,
    },
    {
      id: 8,
      title: 'Concrete Strength Testing Lab Results',
      category: 'how-to',
      duration: '7:30',
      views: '19.5K',
      thumbnail: 'testing-lab',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Live testing showing M30 to M50 grade transformation with Graphacrete.',
      featured: false,
    },
    {
      id: 9,
      title: 'Shapoorji Pallonji Bridge Project',
      category: 'case-study',
      duration: '5:45',
      views: '13.6K',
      thumbnail: 'bridge-casestudy',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Coastal bridge construction with enhanced durability using Graphacrete.',
      featured: false,
    },
  ];

  const categories = [
    { id: 'all', name: 'All Videos', icon: Film },
    { id: 'product-demo', name: 'Product Demos', icon: Play },
    { id: 'testimonial', name: 'Testimonials', icon: Star },
    { id: 'how-to', name: 'How-To Guides', icon: Film },
    { id: 'case-study', name: 'Case Studies', icon: Eye },
  ];

  const filteredVideos = selectedCategory === 'all'
    ? videos
    : videos.filter((video) => video.category === selectedCategory);

  const featuredVideos = videos.filter((video) => video.featured);

  const openVideo = (video) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  const VideoThumbnail = ({ video, featured = false }) => {
    // Generate gradient background based on video title
    const gradients = {
      graphacrete: 'from-teal-500/20 to-cyan-500/20',
      graffisol: 'from-orange-500/20 to-yellow-500/20',
      ceraphene: 'from-purple-500/20 to-pink-500/20',
      hdgpe: 'from-blue-500/20 to-cyan-500/20',
      default: 'from-neutral-700/20 to-neutral-600/20',
    };

    const getGradient = () => {
      for (const key in gradients) {
        if (video.thumbnail.includes(key)) return gradients[key];
      }
      return gradients.default;
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        className={`relative group cursor-pointer ${featured ? 'col-span-2 row-span-2' : ''}`}
        onClick={() => openVideo(video)}
      >
        <div className={`relative bg-gradient-to-br ${getGradient()} rounded-sm overflow-hidden border border-neutral-800 hover:border-brand-500/50 transition-all ${featured ? 'h-full min-h-[400px]' : 'h-64'}`}>
          {/* Thumbnail Background Pattern */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center">
            <div className="text-6xl opacity-30">🎬</div>
          </div>

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-20 h-20 bg-brand-500/90 backdrop-blur rounded-full flex items-center justify-center border-2 border-white/30 shadow-2xl group-hover:bg-brand-600 transition-all"
            >
              <Play className="w-10 h-10 text-white ml-1" fill="white" />
            </motion.div>
          </div>

          {/* Video Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6">
            <h3 className={`font-display font-bold text-white mb-2 ${featured ? 'text-2xl' : 'text-lg'}`}>
              {video.title}
            </h3>
            <p className={`text-neutral-300 mb-3 ${featured ? 'text-base' : 'text-sm line-clamp-2'}`}>
              {video.description}
            </p>
            <div className="flex items-center gap-4 text-sm text-neutral-400 font-mono">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {video.duration}
              </span>
              <span className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                {video.views}
              </span>
            </div>
          </div>

          {/* Featured Badge */}
          {featured && (
            <div className="absolute top-4 left-4 px-3 py-1 bg-brand-500 text-white text-xs font-mono font-bold rounded-sm flex items-center gap-1">
              <Star className="w-3 h-3" fill="white" />
              FEATURED
            </div>
          )}
        </div>
      </motion.div>
    );
  };

  return (
    <section className="relative py-24 px-6 bg-black overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-sm border border-brand-500/30 bg-brand-500/10 backdrop-blur mb-6">
            <Film className="w-4 h-4 text-brand-400" />
            <span className="text-xs font-mono text-brand-400 tracking-widest uppercase">
              Video Library
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
            See Our Products in Action
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto mb-8">
            Watch demos, case studies, and customer testimonials
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-sm font-mono font-semibold transition-all border inline-flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? 'bg-brand-500 text-white border-brand-400'
                      : 'bg-neutral-900 text-neutral-300 border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Featured Videos */}
        {selectedCategory === 'all' && (
          <div className="mb-12">
            <h3 className="text-2xl font-display font-bold text-white mb-6">Featured Videos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredVideos.map((video) => (
                <VideoThumbnail key={video.id} video={video} featured />
              ))}
            </div>
          </div>
        )}

        {/* All Videos Grid */}
        <div className="mb-12">
          {selectedCategory !== 'all' && (
            <h3 className="text-2xl font-display font-bold text-white mb-6">
              {categories.find((c) => c.id === selectedCategory)?.name}
            </h3>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.filter((v) => !v.featured || selectedCategory !== 'all').map((video) => (
              <VideoThumbnail key={video.id} video={video} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-brand-500/20 to-purple-500/20 border border-brand-500/30 rounded-sm p-8 text-center backdrop-blur"
        >
          <h3 className="text-2xl font-display font-bold text-white mb-4">
            Want a Custom Demo?
          </h3>
          <p className="text-neutral-300 mb-6 max-w-2xl mx-auto">
            Schedule a personalized video call with our experts to see how our products can solve your specific challenges
          </p>
          <button className="px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-mono font-bold rounded-sm transition-all border border-brand-400 inline-flex items-center gap-2">
            <Play className="w-5 h-5" />
            Schedule Demo Call
          </button>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeVideo}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl bg-neutral-900 rounded-sm overflow-hidden border border-neutral-800"
            >
              {/* Close Button */}
              <button
                onClick={closeVideo}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/70 hover:bg-black backdrop-blur rounded-full flex items-center justify-center border border-white/20 transition-all"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Video Player */}
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={selectedVideo.videoUrl}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Video Info */}
              <div className="p-6 border-t border-neutral-800">
                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  {selectedVideo.title}
                </h3>
                <p className="text-neutral-300 mb-4">{selectedVideo.description}</p>
                <div className="flex items-center gap-6 text-sm text-neutral-400 font-mono">
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {selectedVideo.duration}
                  </span>
                  <span className="flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    {selectedVideo.views} views
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VideoShowcaseSection;

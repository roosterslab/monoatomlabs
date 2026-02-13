import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, RotateCcw, ChevronRight, ChevronLeft, Atom } from 'lucide-react';
import { products } from '../../data/monoatomData';

const ProductMechanismAnimation = () => {
  const [selectedProduct, setSelectedProduct] = useState('graphacrete');
  const [currentStage, setCurrentStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [particles, setParticles] = useState([]);

  const mechanisms = {
    graphacrete: {
      stages: [
        {
          title: 'Injection',
          description: 'Graphene nano-platelets are added to the cement mix at 0.02-0.05% by weight',
          color: 'from-blue-500 to-cyan-500',
          particleCount: 20,
          particleType: 'inject',
        },
        {
          title: 'Dispersion',
          description: 'Nano-platelets disperse evenly throughout the cement matrix, creating millions of contact points',
          color: 'from-purple-500 to-pink-500',
          particleCount: 50,
          particleType: 'spread',
        },
        {
          title: 'Network Formation',
          description: 'Graphene creates a nano-reinforcement network, bridging micro-cracks and strengthening bonds',
          color: 'from-orange-500 to-red-500',
          particleCount: 40,
          particleType: 'network',
        },
        {
          title: 'Enhanced Performance',
          description: 'Result: +50% compressive strength, 15-20% cement reduction, 30-45% better water resistance',
          color: 'from-green-500 to-teal-500',
          particleCount: 30,
          particleType: 'result',
        },
      ],
    },
    graffisol: {
      stages: [
        {
          title: 'Application',
          description: 'Graphene coating is applied to solar panel surface via spray application',
          color: 'from-blue-500 to-cyan-500',
          particleCount: 25,
          particleType: 'inject',
        },
        {
          title: 'Thermal Management',
          description: 'Graphene layer dissipates heat efficiently, reducing panel temperature by 5-6°C',
          color: 'from-purple-500 to-pink-500',
          particleCount: 40,
          particleType: 'spread',
        },
        {
          title: 'Light Enhancement',
          description: 'Improved photon capture and electron mobility in the semiconductor layer',
          color: 'from-orange-500 to-red-500',
          particleCount: 45,
          particleType: 'network',
        },
        {
          title: 'Energy Boost',
          description: 'Result: 10-12% energy output increase, hydrophobic self-cleaning, extended lifespan',
          color: 'from-green-500 to-teal-500',
          particleCount: 35,
          particleType: 'result',
        },
      ],
    },
    ceraphene: {
      stages: [
        {
          title: 'Cost-Effective Synthesis',
          description: 'Scalable production method achieves premium quality at ₹5,000/kg vs ₹15,000/kg',
          color: 'from-blue-500 to-cyan-500',
          particleCount: 30,
          particleType: 'inject',
        },
        {
          title: 'Quality Verification',
          description: 'Rigorous testing confirms friction reduction properties match premium graphene',
          color: 'from-purple-500 to-pink-500',
          particleCount: 35,
          particleType: 'spread',
        },
        {
          title: 'Market Democratization',
          description: 'Accessible pricing enables mass market adoption of advanced materials',
          color: 'from-orange-500 to-red-500',
          particleCount: 40,
          particleType: 'network',
        },
        {
          title: 'Industry Impact',
          description: 'Result: 60-70% cost savings, premium performance, democratized access to graphene',
          color: 'from-green-500 to-teal-500',
          particleCount: 30,
          particleType: 'result',
        },
      ],
    },
    hdgpe: {
      stages: [
        {
          title: 'Nano-Composite Formation',
          description: 'Graphene is mixed into HDPE during the polymerization process',
          color: 'from-blue-500 to-cyan-500',
          particleCount: 25,
          particleType: 'inject',
        },
        {
          title: 'Molecular Reinforcement',
          description: 'Graphene platelets reinforce polymer chains at the molecular level',
          color: 'from-purple-500 to-pink-500',
          particleCount: 45,
          particleType: 'spread',
        },
        {
          title: 'Property Enhancement',
          description: 'Enhanced molecular structure provides 20× better elongation and flexibility',
          color: 'from-orange-500 to-red-500',
          particleCount: 40,
          particleType: 'network',
        },
        {
          title: 'Extended Durability',
          description: 'Result: 20× elongation at break, +20% lifespan, superior flexibility and strength',
          color: 'from-green-500 to-teal-500',
          particleCount: 35,
          particleType: 'result',
        },
      ],
    },
  };

  const product = products[selectedProduct];
  const mechanism = mechanisms[selectedProduct];
  const stage = mechanism.stages[currentStage];

  // Generate particles for animation
  useEffect(() => {
    const newParticles = Array.from({ length: stage.particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 8 + 4,
      delay: Math.random() * 0.5,
    }));
    setParticles(newParticles);
  }, [currentStage, selectedProduct, stage.particleCount]);

  // Auto-play
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentStage((prev) => {
        if (prev >= mechanism.stages.length - 1) {
          setIsPlaying(false);
          return prev;
        }
        return prev + 1;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [isPlaying, mechanism.stages.length]);

  const handleNext = () => {
    if (currentStage < mechanism.stages.length - 1) {
      setCurrentStage(currentStage + 1);
    }
  };

  const handlePrev = () => {
    if (currentStage > 0) {
      setCurrentStage(currentStage - 1);
    }
  };

  const handleReset = () => {
    setCurrentStage(0);
    setIsPlaying(false);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-black via-neutral-900 to-gray-900 p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-brand-500/50 bg-brand-500/10 backdrop-blur mb-6">
            <Atom className="w-4 h-4 text-brand-400 animate-spin" style={{ animationDuration: '3s' }} />
            <span className="text-xs font-bold text-brand-400 tracking-wide uppercase">
              Molecular Mechanism
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            How It Works
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Molecular-level visualization of product mechanisms
          </p>
        </motion.div>

        {/* Product Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {Object.keys(mechanisms).map((key) => (
            <button
              key={key}
              onClick={() => {
                setSelectedProduct(key);
                setCurrentStage(0);
                setIsPlaying(false);
              }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedProduct === key
                  ? 'bg-brand-500 text-white shadow-lg'
                  : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
              }`}
            >
              {products[key].name}
            </button>
          ))}
        </div>

        {/* Animation Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Left: Animation */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`relative bg-gradient-to-br ${stage.color} rounded-2xl overflow-hidden`}
              style={{ height: '500px' }}
            >
              {/* Animated Particles */}
              <AnimatePresence mode="wait">
                {particles.map((particle) => (
                  <motion.div
                    key={`${currentStage}-${particle.id}`}
                    className="absolute rounded-full bg-white/80"
                    initial={{
                      x: `${particle.x}%`,
                      y: `${particle.y}%`,
                      scale: 0,
                      opacity: 0,
                    }}
                    animate={{
                      x: stage.particleType === 'spread' ? `${(particle.x + 20) % 100}%` : `${particle.x}%`,
                      y: stage.particleType === 'spread' ? `${(particle.y + 20) % 100}%` : `${particle.y}%`,
                      scale: stage.particleType === 'network' ? [1, 1.5, 1] : 1,
                      opacity: [0, 1, 1, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      delay: particle.delay,
                      repeat: Infinity,
                      repeatType: 'loop',
                    }}
                    style={{
                      width: `${particle.size}px`,
                      height: `${particle.size}px`,
                    }}
                  />
                ))}
              </AnimatePresence>

              {/* Stage Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-2xl font-bold text-neutral-900">
                    {currentStage + 1}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white">
                    {stage.title}
                  </h3>
                </div>
                <p className="text-white/90 leading-relaxed">
                  {stage.description}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: Controls & Info */}
          <div className="space-y-6">
            {/* Progress */}
            <div className="bg-neutral-800/50 border-2 border-neutral-700 rounded-xl p-6">
              <div className="text-sm text-neutral-400 mb-3">
                Stage {currentStage + 1} of {mechanism.stages.length}
              </div>
              <div className="w-full h-2 bg-neutral-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-brand-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentStage + 1) / mechanism.stages.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            {/* Controls */}
            <div className="bg-neutral-800/50 border-2 border-neutral-700 rounded-xl p-6">
              <div className="flex gap-3 mb-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-brand-500 text-white rounded-lg hover:bg-brand-600 transition-all"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  {isPlaying ? 'Pause' : 'Play'}
                </button>
                <button
                  onClick={handleReset}
                  className="px-4 py-3 bg-neutral-700 text-white rounded-lg hover:bg-neutral-600 transition-all"
                >
                  <RotateCcw className="w-5 h-5" />
                </button>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handlePrev}
                  disabled={currentStage === 0}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-neutral-700 text-white rounded-lg hover:bg-neutral-600 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Previous
                </button>
                <button
                  onClick={handleNext}
                  disabled={currentStage === mechanism.stages.length - 1}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-neutral-700 text-white rounded-lg hover:bg-neutral-600 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Next
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Stage List */}
            <div className="bg-neutral-800/50 border-2 border-neutral-700 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4">All Stages</h4>
              <div className="space-y-2">
                {mechanism.stages.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentStage(idx)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                      idx === currentStage
                        ? 'bg-brand-500 text-white'
                        : idx < currentStage
                        ? 'bg-green-500/20 text-green-300'
                        : 'bg-neutral-700/50 text-neutral-400'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">
                        {idx + 1}
                      </div>
                      <span className="font-semibold">{s.title}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-r from-brand-500/20 to-purple-500/20 border-2 border-brand-500/30 rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-display font-bold text-white mb-3">
            {product.name}
          </h3>
          <p className="text-xl text-neutral-300 mb-4">{product.tagline}</p>
          <div className="text-neutral-400">{product.category}</div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductMechanismAnimation;

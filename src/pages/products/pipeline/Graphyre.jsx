import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, ArrowRight, Gauge, Activity, Truck, Zap,
  DollarSign, CheckCircle2, Droplets, Thermometer,
  Share2, ChevronDown, Scan, Lock
} from 'lucide-react';
import Button from '../../../components/ui/Button';
import BentoGrid, { BentoItem } from '../../../components/ui/BentoGrid';
import SectionHeading from '../../../components/ui/SectionHeading';
import Timeline from '../../../components/ui/Timeline';

// --- Custom Sub-Components ---

const FloatingBackNav = () => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 1, duration: 0.5 }}
    className="fixed top-6 right-6 z-50"
  >
    <Link to="/products/pipeline" className="group flex items-center gap-3 bg-white/80 backdrop-blur-md px-5 py-2.5 rounded-full border border-neutral-200 shadow-sm hover:shadow-md transition-all">
      <span className="text-sm font-bold uppercase tracking-wider text-neutral-600 group-hover:text-neutral-900 transition-colors">
        Back to Innovation Pipeline
      </span>
      <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-neutral-900 group-hover:text-white transition-colors">
        <ArrowRight size={16} />
      </div>
    </Link>
  </motion.div>
);

const TextReveal = ({ children, className = "" }) => {
  return (
    <span className={`block overflow-hidden ${className}`}>
      <motion.span
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  );
};

const XRayToggle = ({ isActive, onToggle }) => (
  <button
    onClick={onToggle}
    className={`
      flex items-center gap-3 px-5 py-2 rounded-full border transition-all duration-300 backdrop-blur-md
      ${isActive
        ? 'bg-amber-500/10 border-amber-500 text-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.3)]'
        : 'bg-white/5 border-neutral-200 text-neutral-400 hover:bg-neutral-100'}
    `}
  >
    <Scan size={18} className={isActive ? "animate-pulse" : ""} />
    <span className="text-xs font-bold uppercase tracking-widest">
      {isActive ? 'X-RAY ACTIVE' : 'ENABLE X-RAY'}
    </span>
  </button>
);

const SimulatedSensorData = () => {
  const [pressure, setPressure] = useState(32.4);
  const [temp, setTemp] = useState(45.2);
  const [history, setHistory] = useState(new Array(20).fill(32));

  useEffect(() => {
    const interval = setInterval(() => {
      const pNoise = (Math.random() - 0.5) * 0.2;
      const tNoise = (Math.random() - 0.5) * 0.1;

      setPressure(prev => +(prev + pNoise).toFixed(1));
      setTemp(prev => +(prev + tNoise).toFixed(1));

      setHistory(prev => [...prev.slice(1), 32 + pNoise * 5]);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      drag
      dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
      whileHover={{ scale: 1.02, cursor: "grab" }}
      whileDrag={{ scale: 1.05, cursor: "grabbing" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5 }}
      className="absolute bottom-12 right-12 z-20"
    >
      <div className="bg-neutral-900/80 backdrop-blur-xl p-6 rounded-3xl border border-white/10 text-white font-mono text-xs w-72 shadow-2xl ring-1 ring-white/20">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Activity size={14} className="text-amber-500" />
            <span className="text-amber-500 font-bold uppercase tracking-wider">Live Telemetry</span>
          </div>
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse delay-75"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse delay-150"></div>
          </div>
        </div>

        <div className="h-16 flex items-end gap-1 mb-6 opacity-50">
          {history.map((h, i) => (
            <div key={i} style={{ height: `${(h - 30) * 10}px` }} className="flex-1 bg-amber-500/50 rounded-t-sm"></div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-3 bg-white/5 rounded-xl border border-white/5">
            <span className="text-neutral-500 block mb-1">Pressure</span>
            <span className="font-bold text-xl">{pressure} <span className="text-xs text-neutral-500 font-normal">psi</span></span>
          </div>
          <div className="p-3 bg-white/5 rounded-xl border border-white/5">
            <span className="text-neutral-500 block mb-1">Temp</span>
            <span className="font-bold text-xl">{temp} <span className="text-xs text-neutral-500 font-normal">°C</span></span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-white/10 text-center">
          <span className="text-[10px] text-neutral-500 uppercase tracking-widest">Connection Stable • 2ms Latency</span>
        </div>
      </div>
    </motion.div>
  );
};

const ParallaxGallery = ({ images }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Tuning: -75% ensures we scroll enough on mobile (where width is ~400vw) and desktop (overscroll is fine)
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);
  const smoothX = useSpring(x, { damping: 20, stiffness: 90 }); // Softer spring for smoother feel

  return (
    <section ref={targetRef} className="relative h-[500vh] bg-neutral-900 border-y border-neutral-800 z-20">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x: smoothX }} className="flex gap-8 md:gap-20 px-8 md:px-20 items-center">

          <div className="w-[80vw] md:w-[30vw] shrink-0 flex flex-col justify-center md:pl-10">
            <div className="w-20 h-1 bg-amber-500 mb-8"></div>
            <h2 className="text-5xl md:text-8xl font-display text-white mb-6 leading-tight">Visual<br />Evidence</h2>
            <p className="text-xl md:text-2xl text-neutral-400 font-light max-w-sm leading-relaxed">
              From molecular simulation to track testing. Witness the evolution of Graphyre.
            </p>
          </div>

          {(images || []).map((src, i) => (
            <div key={i} className="relative h-[60vh] md:h-[65vh] w-[85vw] md:w-[50vw] shrink-0 rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-neutral-800 border border-neutral-700 group shadow-2xl">
              <img
                src={src}
                alt={`Gallery ${i}`}
                className="absolute inset-0 w-full h-full object-contain bg-black"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="absolute top-8 right-8 bg-neutral-900/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-white/50 text-xs font-mono">
                IMG_00{i + 1}_RAW
              </div>

              <div className="absolute bottom-12 left-12 text-white translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 pointer-events-none">
                <div className="text-sm font-bold text-amber-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                  Figure 0{i + 1}
                </div>
                <div className="text-3xl md:text-4xl font-display font-medium">Visualization</div>
              </div>
            </div>
          ))}

          <div className="w-[60vw] md:w-[40vw] shrink-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-amber-500 text-6xl mb-6">→</div>
              <div className="text-white/20 text-3xl md:text-4xl font-display">End of Gallery</div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

// --- Main Page Component ---

const Graphyre = () => {
  const [isXRay, setIsXRay] = useState(false);

  // Data Constants
  const product = {
    id: 'graphyre',
    name: 'Graphyre',
    subtitle: 'Intelligent Performance',
    description: 'Next-generation rubber compounds delivering superior durability, lower rolling resistance, and embedded sensing capabilities.',
    status: 'Prototype',
    images: [
      '/images/pipeline/studio/Graphyre.png',
      '/images/pipeline/studio/Graphyre-2.png',
      '/images/graphyre_hero.png'
    ],
    heroImage: '/images/pipeline/studio/Graphyre.png'
  };

  const features = [
    {
      title: 'Neural Sensing',
      description: 'The graphene network acts as a distributed nervous system for the tyre, feeding real-time telemetry to the vehicle\'s ECU.',
      icon: Gauge,
      colSpan: 2,
      rowSpan: 2,
      isHero: true
    },
    {
      title: '+30% Durability',
      description: 'Molecular reinforcement resists abrasion marks.',
      icon: Activity,
      colSpan: 1,
      rowSpan: 1
    },
    {
      title: 'Fuel Efficient',
      description: 'Lower hysteresis loss means less energy wasted as heat.',
      icon: DollarSign,
      colSpan: 1,
      rowSpan: 1
    },
    {
      title: 'All-Weather',
      description: 'Maintains elasticity in extreme cold (-30°C).',
      icon: Thermometer,
      colSpan: 1,
      rowSpan: 1
    }
  ];

  const timelineEvents = [
    { phase: 'Phase 1', title: 'Compound Synthesis', description: 'Optimizing graphene-rubber interface.', status: 'completed', date: 'Q1 2024' },
    { phase: 'Phase 2', title: 'Track Validation', description: 'Nürburgring durability testing.', status: 'current', date: 'Q3 2025' },
    { phase: 'Phase 3', title: 'Fleet Pilot', description: 'Logistics partnership deployment.', status: 'upcoming', date: '2026' }
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-amber-100 selection:text-amber-900 font-sans">

      <FloatingBackNav />

      {/* 2. Interactive Hero Section */}
      <section className="relative h-screen flex flex-col justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-50/50 via-white to-white z-0"></div>
        <div className="absolute right-0 top-0 w-[50vw] h-full opacity-5 bg-[url('/grid.svg')] z-0"></div>

        <div className="max-w-[1400px] w-full mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-12 items-center">

          {/* Text Content */}
          <div className="lg:col-span-7 pt-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="px-4 py-1.5 rounded-full border border-neutral-200 text-xs font-bold tracking-[0.2em] uppercase text-neutral-400 bg-white shadow-sm flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></div>
                  {product.status} Class
                </div>
                {/* X-Ray Toggle */}
                <XRayToggle isActive={isXRay} onToggle={() => setIsXRay(!isXRay)} />
              </div>

              <h1 className="text-8xl md:text-[8rem] font-display font-medium text-neutral-900 leading-[0.9] tracking-tight mb-8">
                <TextReveal>Graph<span className="text-neutral-200">yre</span></TextReveal>
              </h1>

              <TextReveal className="mb-12">
                <p className="text-2xl md:text-3xl text-neutral-500 font-light leading-snug max-w-2xl">
                  The world's first <span className="text-amber-600 font-normal">sentient tyre compound</span>.
                  Sensing the road, pixel by pixel.
                </p>
              </TextReveal>

              <div className="flex flex-wrap gap-6 items-center">
                <Button variant="primary" className="h-14 px-10 rounded-full bg-neutral-900 text-white text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-neutral-900/20">
                  Request Pilot
                </Button>
                <button className="flex items-center gap-3 px-6 text-neutral-500 hover:text-amber-600 transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-lg group-hover:translate-y-0.5 transition-transform">↓</span>
                  </div>
                  <span className="text-sm font-bold uppercase tracking-wider">Explore Specs</span>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Hero Visual (Interactive) */}
          <div className="lg:col-span-5 relative h-[60vh] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: "circOut" }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={isXRay ? 'xray' : 'normal'}
                  src={product.heroImage}
                  alt="Graphyre Hero"
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={{
                    opacity: 1,
                    filter: isXRay ? "grayscale(100%) invert(100%) contrast(150%) drop-shadow(0 0 10px rgba(59, 130, 246, 0.5))" : "blur(0px) drop-shadow(0 30px 60px rgba(0,0,0,0.15))"
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-[120%] h-[120%] object-contain z-10 relative pointer-events-none"
                />
              </AnimatePresence>

              {/* X-Ray Overlay Lines */}
              {isXRay && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 z-20 pointer-events-none"
                >
                  <svg className="w-full h-full" viewBox="0 0 500 500">
                    <circle cx="250" cy="250" r="180" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="5,5" className="animate-[spin_20s_linear_infinite]" />
                    <circle cx="250" cy="250" r="220" fill="none" stroke="#3b82f6" strokeWidth="0.5" className="opacity-50" />
                    <line x1="250" y1="250" x2="450" y2="100" stroke="#3b82f6" strokeWidth="1" />
                    <text x="460" y="100" fill="#3b82f6" fontSize="12" fontFamily="monospace">INNER_LINER_V2</text>
                  </svg>
                </motion.div>
              )}

              {/* Decorative Rings (Normal Mode) */}
              {!isXRay && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-dashed border-amber-200 rounded-full animate-[spin_60s_linear_infinite] opacity-50 z-0"></div>
              )}

              {/* Draggable Widget */}
              <SimulatedSensorData />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Narrative Section (Sticky Headers) */}
      <section className="py-32 bg-white relative z-10">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-12 md:col-span-4 relative">
              <div className="sticky top-24">
                <h3 className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-4 flex items-center gap-3">
                  <span className="w-8 h-px bg-amber-600"></span>
                  01 — The Innovation
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed max-w-xs pl-11">
                  Redefining the materials processing limits through atomic-scale engineering and neural networks.
                </p>
              </div>
            </div>

            <div className="col-span-12 md:col-span-8">
              <h2 className="text-5xl md:text-6xl font-display font-medium text-neutral-900 leading-[1.1] mb-12">
                <TextReveal>We didn't just reinvent the wheel.</TextReveal>
                <TextReveal><span className="text-neutral-300">We gave it a nervous system.</span></TextReveal>
              </h2>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <p className="text-lg text-neutral-600 leading-relaxed">
                    Traditional tyres are passive chunks of rubber. They wear out, they lose grip, and they fail—often without warning. Graphyre changes this paradigm by integrating a conductive graphene lattice directly into the polymer matrix.
                  </p>
                  <p className="text-lg text-neutral-600 leading-relaxed">
                    This lattice serves two purposes: structural reinforcement that extends life by 30%, and a sensitive piezoresistive network that detects pressure, temperature, and grip loss in real-time.
                  </p>
                </div>
                <div className="bg-neutral-50 p-8 rounded-3xl border border-neutral-100 hover:shadow-xl transition-shadow duration-500">
                  <ul className="space-y-6">
                    {[
                      { label: 'Tensile Strength', val: '+40%', desc: 'vs Standard Compound' },
                      { label: 'Thermal Conductivity', val: '2.5x', desc: 'Faster heat dissipation' },
                      { label: 'Data Latency', val: '<2ms', desc: 'Real-time feedback loop' }
                    ].map((stat, i) => (
                      <li key={i} className="pb-6 border-b border-neutral-200 last:border-0 last:pb-0">
                        <div className="text-4xl font-display font-medium text-amber-600 mb-1">{stat.val}</div>
                        <div className="text-sm font-bold text-neutral-900 uppercase tracking-wide mb-1">{stat.label}</div>
                        <div className="text-sm text-neutral-500">{stat.desc}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Horizontal Parallax Gallery */}
      <ParallaxGallery images={product.images} />

      {/* 5. Features Grid */}
      <section className="py-32 bg-white relative z-10">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-end justify-between mb-20 border-b border-neutral-100 pb-8">
            <h2 className="text-6xl font-display font-medium text-neutral-900">Specs</h2>
            <div className="text-right">
              <div className="text-sm font-bold text-neutral-500 uppercase tracking-widest">Performance Data</div>
              <div className="text-neutral-400 font-mono text-xs">VERSION 2.4.1</div>
            </div>
          </div>

          <BentoGrid>
            {features.map((feature, i) => (
              <BentoItem
                key={i}
                colSpan={feature.colSpan}
                rowSpan={feature.rowSpan}
                theme="light"
                className={feature.isHero ? "bg-neutral-900 text-white border-neutral-800" : "bg-neutral-50"}
              >
                <div className="h-full flex flex-col justify-between relative z-10">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 
                      ${feature.isHero ? 'bg-amber-500 text-black' : 'bg-white shadow-sm text-amber-600'}`}>
                    <feature.icon size={28} />
                  </div>

                  <div>
                    <h3 className={`text-3xl font-display mb-4 ${feature.isHero ? 'text-white' : 'text-neutral-900'}`}>
                      {feature.title}
                    </h3>
                    <p className={`text-lg leading-relaxed ${feature.isHero ? 'text-neutral-400' : 'text-neutral-500'}`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </BentoItem>
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* 6. Roadmap & Next Steps */}
      <section className="py-32 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-20">

          <div>
            <SectionHeading number="05" title="Deployment" subtitle="Roadmap to commercialization." />
            <div className="mt-12">
              <Timeline items={timelineEvents} accentColor="amber" theme="light" />
            </div>
          </div>

          <div className="relative bg-white rounded-[3rem] p-12 lg:p-16 border border-neutral-100 shadow-2xl shadow-neutral-200/50 flex flex-col justify-between overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
              <Truck size={200} />
            </div>

            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold tracking-widest uppercase mb-8">
                Open for Partnership
              </div>
              <h2 className="text-4xl lg:text-6xl font-display font-medium text-neutral-900 mb-6">
                Equip your fleet.
              </h2>
              <p className="text-xl text-neutral-500 mb-12 font-light max-w-md">
                We are accepting applications for our 2026 Commercial Pilot Program. Secure your allocation of Graphyre prototypes.
              </p>
            </div>

            <div className="flex gap-4">
              <Link to="/contact" className="flex-1">
                <Button variant="primary" className="w-full py-5 text-lg bg-neutral-900 text-white hover:bg-black shadow-lg shadow-neutral-900/10">
                  Apply for Pilot
                </Button>
              </Link>
              <button className="p-5 rounded-2xl border border-neutral-200 hover:bg-neutral-50 text-neutral-900 transition-colors">
                <Share2 size={24} />
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Graphyre;

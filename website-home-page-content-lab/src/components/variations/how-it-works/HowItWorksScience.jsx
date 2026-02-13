import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Maximize2, Droplet, Shield, Zap, ArrowRight } from 'lucide-react';
import { grapheneMaterial } from '../../../data/monoatomData';

const HowItWorksScience = () => {
  const [activeProduct, setActiveProduct] = useState('graphacrete');

  const productMechanisms = {
    graphacrete: {
      name: "Graphacrete",
      tagline: "Nano-Reinforcement for Concrete",
      icon: Layers,
      color: "from-orange-500 to-red-600",
      mechanisms: [
        {
          title: "Tortuous Path Formation",
          description: "Graphene nano-platelets create a complex, winding pathway that blocks water molecules from penetrating the concrete structure",
          icon: Droplet,
          metric: "30-45% water resistance improvement"
        },
        {
          title: "Nano-Reinforced Microstructure",
          description: "High aspect ratio platelets (2000-4000:1) interlock within the cement matrix, resisting crack propagation and shrinkage",
          icon: Shield,
          metric: "50% strength increase"
        },
        {
          title: "C-S-H Gel Catalysis",
          description: "Graphene surfaces catalyze formation of calcium-silicate-hydrate gel, reducing porosity and boosting cohesion",
          icon: Zap,
          metric: "Excellent micro-crack control"
        }
      ]
    },
    graffisol: {
      name: "Graffisol",
      tagline: "Triple-Action Solar Enhancement",
      icon: Zap,
      color: "from-blue-500 to-cyan-600",
      mechanisms: [
        {
          title: "Anti-Reflective Behavior",
          description: "Ultra-fine graphene nanostructures reduce surface light losses, increasing photon absorption into solar cells",
          icon: Layers,
          metric: "Reduced surface reflection"
        },
        {
          title: "Enhanced Thermal Dissipation",
          description: "Graphene's exceptional thermal conductivity (5300 W/m·K) efficiently removes heat from panel surface",
          icon: Droplet,
          metric: "5-6°C temperature reduction"
        },
        {
          title: "Hydrophobic Surface",
          description: "Self-cleaning properties minimize soiling losses while maintaining >98% light transmission",
          icon: Shield,
          metric: "30-40% soiling reduction"
        }
      ]
    },
    hdgpe: {
      name: "HD-G-PE",
      tagline: "Molecular Interlocking Enhancement",
      icon: Layers,
      color: "from-purple-500 to-pink-600",
      mechanisms: [
        {
          title: "Polymer Chain Reinforcement",
          description: "Graphene platelets integrate between HDPE molecular chains, creating mechanical interlocking at nanoscale",
          icon: Layers,
          metric: "20× elongation improvement"
        },
        {
          title: "Load Distribution",
          description: "High aspect ratio enables stress distribution across larger surface area, preventing crack initiation",
          icon: Shield,
          metric: "+30% tensile strength"
        },
        {
          title: "UV Stability Enhancement",
          description: "Graphene absorbs and dissipates UV radiation, protecting polymer chains from degradation",
          icon: Zap,
          metric: "Superior outdoor durability"
        }
      ]
    },
    ceraphene: {
      name: "Ceraphene",
      tagline: "Dense Protective Barrier Formation",
      icon: Shield,
      color: "from-green-500 to-emerald-600",
      mechanisms: [
        {
          title: "Graphene-Ceramic Matrix",
          description: "Graphene nano-platelets embed within ceramic coating, forming chemically bonded protective layer",
          icon: Layers,
          metric: "9H+ hardness achieved"
        },
        {
          title: "Reduced Surface Porosity",
          description: "High aspect ratio platelets fill micro-gaps in ceramic matrix, limiting contaminant adhesion",
          icon: Shield,
          metric: "Ultra-hydrophobic barrier"
        },
        {
          title: "Enhanced Durability",
          description: "Graphene's resistance to heat, UV, and oxidation extends coating lifecycle significantly",
          icon: Zap,
          metric: "3-4+ years durability"
        }
      ]
    }
  };

  const currentProduct = productMechanisms[activeProduct];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-6"
          >
            <Layers className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-bold text-blue-700">The Science Simplified</span>
          </motion.div>

          <h2 className="text-5xl font-bold text-neutral-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Understanding the nano-scale mechanisms that deliver macro-scale performance improvements
          </p>
        </div>

        {/* Graphene Nano-Platelets Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-neutral-900 to-black text-white rounded-2xl p-12 mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-6">
                Graphene Nano-Platelets:<br />
                <span className="text-blue-400">The Foundation of Everything</span>
              </h3>

              <div className="space-y-6">
                <div>
                  <div className="text-sm font-bold text-neutral-400 uppercase tracking-wider mb-2">
                    High Aspect Ratio
                  </div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    2,000-4,000:1
                  </div>
                  <p className="text-neutral-300">
                    Width is 2,000-4,000 times greater than thickness—creating maximum surface contact area for superior reinforcement
                  </p>
                </div>

                <div>
                  <div className="text-sm font-bold text-neutral-400 uppercase tracking-wider mb-2">
                    High Purity
                  </div>
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    ~99%
                  </div>
                  <p className="text-neutral-300">
                    No contamination interference—consistent, reliable performance across all applications
                  </p>
                </div>

                <div>
                  <div className="text-sm font-bold text-neutral-400 uppercase tracking-wider mb-2">
                    Massive Surface Area
                  </div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">
                    200 m²/g
                  </div>
                  <p className="text-neutral-300">
                    Enormous active surface area enables molecular-level interaction with host materials
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-8">
              <div className="text-center mb-6">
                <Maximize2 className="w-16 h-16 mx-auto mb-4 text-blue-400" />
                <h4 className="text-xl font-bold mb-2">Dimensional Visualization</h4>
              </div>

              <div className="space-y-6">
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-sm text-neutral-400 mb-2">Thickness (Z-axis)</div>
                  <div className="h-1 bg-blue-500 rounded-full mb-2" style={{ width: '5px' }}></div>
                  <div className="text-xs text-neutral-300">5-10 nanometers</div>
                  <div className="text-xs text-neutral-500">Thinner than a virus</div>
                </div>

                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-sm text-neutral-400 mb-2">Width (X&Y plane)</div>
                  <div className="h-2 bg-purple-500 rounded-full mb-2"></div>
                  <div className="text-xs text-neutral-300">~20 micrometers</div>
                  <div className="text-xs text-neutral-500">2,000-4,000× larger than thickness</div>
                </div>

                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-white mb-1">This Creates</div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Maximum Surface Contact
                  </div>
                  <div className="text-sm text-neutral-300 mt-2">
                    = Superior mechanical interlocking, optimal load distribution, enhanced performance pathways
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Product Selector */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-neutral-900">
            Select a Product to See How It Works
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(productMechanisms).map(([key, product]) => (
              <button
                key={key}
                onClick={() => setActiveProduct(key)}
                className={`p-6 rounded-xl border-2 transition-all ${
                  activeProduct === key
                    ? 'border-neutral-900 bg-neutral-900 text-white shadow-xl'
                    : 'border-neutral-200 bg-white text-neutral-900 hover:border-neutral-400'
                }`}
              >
                <product.icon className="w-8 h-8 mx-auto mb-3" />
                <div className="font-bold text-center">{product.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Active Product Mechanisms */}
        <motion.div
          key={activeProduct}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <div className={`bg-gradient-to-br ${currentProduct.color} text-white rounded-2xl p-10 mb-8`}>
            <div className="flex items-center gap-4 mb-4">
              <currentProduct.icon className="w-12 h-12" />
              <div>
                <h3 className="text-4xl font-bold">{currentProduct.name}</h3>
                <p className="text-xl opacity-90">{currentProduct.tagline}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentProduct.mechanisms.map((mechanism, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-2 border-neutral-200 rounded-2xl p-8 hover:shadow-2xl hover:border-neutral-900 transition-all"
              >
                <div className={`inline-flex p-4 bg-gradient-to-br ${currentProduct.color} rounded-xl mb-6`}>
                  <mechanism.icon className="w-8 h-8 text-white" />
                </div>

                <h4 className="text-xl font-bold text-neutral-900 mb-3">
                  {mechanism.title}
                </h4>

                <p className="text-neutral-600 leading-relaxed mb-6">
                  {mechanism.description}
                </p>

                <div className="pt-4 border-t border-neutral-200">
                  <div className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-2">
                    Result
                  </div>
                  <div className="text-lg font-bold text-neutral-900">
                    {mechanism.metric}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* From Lab to Application */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border-2 border-neutral-900 rounded-2xl p-10"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-neutral-900">
            From Atoms to Applications
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Atomic Engineering",
                description: "Synthesize graphene nano-platelets with precise dimensions and purity",
                color: "from-blue-500 to-cyan-600"
              },
              {
                step: "2",
                title: "Formulation Design",
                description: "Optimize dispersion, functionalization, and compatibility with target materials",
                color: "from-purple-500 to-pink-600"
              },
              {
                step: "3",
                title: "NABL Testing",
                description: "Rigorous lab validation of performance claims with independent certification",
                color: "from-green-500 to-emerald-600"
              },
              {
                step: "4",
                title: "Field Deployment",
                description: "Real-world testing and commercial-scale manufacturing validation",
                color: "from-orange-500 to-red-600"
              }
            ].map((stage, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${stage.color} rounded-full flex items-center justify-center text-white text-2xl font-bold`}>
                  {stage.step}
                </div>
                <h4 className="font-bold text-neutral-900 mb-2">{stage.title}</h4>
                <p className="text-sm text-neutral-600">{stage.description}</p>
                {index < 3 && (
                  <ArrowRight className="w-6 h-6 mx-auto mt-4 text-neutral-300 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-neutral-900 mb-4">
            Want to Dive Deeper into the Science?
          </h3>
          <p className="text-neutral-600 mb-6">
            Download detailed technical white papers and research documentation
          </p>
          <button className="bg-neutral-900 text-white px-8 py-4 rounded-full font-medium hover:bg-neutral-800 transition-all">
            Download Technical Documentation
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksScience;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Sun, Layers, Package, Factory, Zap, CheckCircle2, XCircle, Star } from 'lucide-react';

const IndustrySolutionMatrix = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  const industries = {
    construction: {
      name: 'Construction & Infrastructure',
      icon: Building2,
      color: 'from-purple-500 to-pink-500',
      challenges: [
        'High cement costs',
        'Strength requirements',
        'Durability concerns',
        'Environmental regulations',
        'Long construction times',
      ],
      solutions: {
        graphacrete: {
          applicable: true,
          fit: 'PERFECT',
          benefits: [
            'Achieve M50 from M30 base mix',
            '15-20% cement cost reduction',
            '30-45% better water resistance',
            'IGBC green building certified',
            'Standard mixing process',
          ],
          useCase: 'High-rise buildings, bridges, industrial flooring',
        },
        graffisol: {
          applicable: false,
          fit: 'NOT APPLICABLE',
        },
        ceraphene: {
          applicable: true,
          fit: 'GOOD',
          benefits: [
            'Anti-corrosion coatings',
            'Conductive concrete applications',
            'Structural health monitoring sensors',
          ],
          useCase: 'Specialized applications, smart structures',
        },
        hdgpe: {
          applicable: true,
          fit: 'GOOD',
          benefits: [
            'Pipe & conduit systems',
            'Geomembranes',
            'Protective barriers',
          ],
          useCase: 'Plumbing, waterproofing, infrastructure',
        },
      },
    },

    solar: {
      name: 'Solar Energy',
      icon: Sun,
      color: 'from-yellow-500 to-orange-500',
      challenges: [
        'Panel efficiency degradation',
        'Soiling & dust accumulation',
        'High maintenance costs',
        'Temperature-related losses',
        'Cleaning water consumption',
      ],
      solutions: {
        graphacrete: {
          applicable: false,
          fit: 'NOT APPLICABLE',
        },
        graffisol: {
          applicable: true,
          fit: 'PERFECT',
          benefits: [
            '10-12% energy output gain',
            '6-8°C temperature reduction',
            '60% fewer cleanings required',
            'Self-cleaning properties',
            '10+ years durability',
          ],
          useCase: 'All solar installations from utility to residential',
        },
        ceraphene: {
          applicable: true,
          fit: 'MODERATE',
          benefits: [
            'Transparent conductive electrodes',
            'Solar cell enhancement research',
            'Thermal management',
          ],
          useCase: 'R&D, next-gen solar technologies',
        },
        hdgpe: {
          applicable: false,
          fit: 'NOT APPLICABLE',
        },
      },
    },

    electronics: {
      name: 'Electronics & Manufacturing',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      challenges: [
        'High material costs (premium graphene)',
        'Conductivity requirements',
        'EMI/RFI shielding needs',
        'Thermal management',
        'Scalability constraints',
      ],
      solutions: {
        graphacrete: {
          applicable: false,
          fit: 'NOT APPLICABLE',
        },
        graffisol: {
          applicable: false,
          fit: 'NOT APPLICABLE',
        },
        ceraphene: {
          applicable: true,
          fit: 'PERFECT',
          benefits: [
            '60-70% cost vs premium graphene',
            'Same electrical conductivity',
            'Conductive inks & coatings',
            'EMI shielding materials',
            'Scalable production volumes',
          ],
          useCase: 'PCB manufacturing, sensors, displays, shielding',
        },
        hdgpe: {
          applicable: true,
          fit: 'MODERATE',
          benefits: [
            'Anti-static packaging',
            'ESD-safe containers',
            'Cable insulation',
          ],
          useCase: 'Packaging, protective materials',
        },
      },
    },

    packaging: {
      name: 'Packaging & Films',
      icon: Package,
      color: 'from-green-500 to-teal-500',
      challenges: [
        'Material strength limitations',
        'Short product lifespan',
        'High defect rates',
        'Thickness vs performance tradeoff',
        'Sustainability demands',
      ],
      solutions: {
        graphacrete: {
          applicable: false,
          fit: 'NOT APPLICABLE',
        },
        graffisol: {
          applicable: false,
          fit: 'NOT APPLICABLE',
        },
        ceraphene: {
          applicable: true,
          fit: 'MODERATE',
          benefits: [
            'Barrier coating enhancement',
            'Anti-microbial properties',
            'Conductive packaging',
          ],
          useCase: 'Specialty packaging applications',
        },
        hdgpe: {
          applicable: true,
          fit: 'PERFECT',
          benefits: [
            '20× elongation (5% → 100%)',
            '+20% product lifespan',
            '30% defect reduction',
            '15% thickness reduction possible',
            'Fully recyclable',
          ],
          useCase: 'Food packaging, industrial films, agricultural applications',
        },
      },
    },

    industrial: {
      name: 'Industrial Manufacturing',
      icon: Factory,
      color: 'from-orange-500 to-red-500',
      challenges: [
        'Equipment durability',
        'Corrosion & wear',
        'Energy efficiency',
        'Production quality',
        'Operational costs',
      ],
      solutions: {
        graphacrete: {
          applicable: true,
          fit: 'GOOD',
          benefits: [
            'Industrial flooring',
            'Chemical resistance',
            'Heavy load capacity',
          ],
          useCase: 'Factory floors, storage facilities',
        },
        graffisol: {
          applicable: true,
          fit: 'MODERATE',
          benefits: [
            'Solar installations on rooftops',
            'Energy cost reduction',
          ],
          useCase: 'Industrial solar arrays',
        },
        ceraphene: {
          applicable: true,
          fit: 'GOOD',
          benefits: [
            'Anti-corrosion coatings',
            'Lubricant additives',
            'Composite reinforcement',
            'Battery/supercapacitor manufacturing',
          ],
          useCase: 'Coatings, energy storage, composites',
        },
        hdgpe: {
          applicable: true,
          fit: 'GOOD',
          benefits: [
            'Chemical storage tanks',
            'Industrial pipes & conduits',
            'Abrasion-resistant parts',
          ],
          useCase: 'Containers, piping, industrial components',
        },
      },
    },
  };

  const products = [
    { id: 'graphacrete', name: 'Graphacrete', icon: Building2, color: 'purple' },
    { id: 'graffisol', name: 'Graffisol', icon: Sun, color: 'yellow' },
    { id: 'ceraphene', name: 'Ceraphene', icon: Layers, color: 'cyan' },
    { id: 'hdgpe', name: 'HD-G-PE', icon: Package, color: 'green' },
  ];

  const getFitColor = (fit) => {
    switch (fit) {
      case 'PERFECT': return 'from-green-500 to-emerald-500';
      case 'GOOD': return 'from-blue-500 to-cyan-500';
      case 'MODERATE': return 'from-yellow-500 to-orange-500';
      case 'NOT APPLICABLE': return 'from-gray-500 to-gray-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getFitIcon = (fit) => {
    switch (fit) {
      case 'PERFECT': return <Star className="w-5 h-5" />;
      case 'GOOD': return <CheckCircle2 className="w-5 h-5" />;
      case 'MODERATE': return <CheckCircle2 className="w-5 h-5" />;
      case 'NOT APPLICABLE': return <XCircle className="w-5 h-5" />;
      default: return <XCircle className="w-5 h-5" />;
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-teal-400/50 bg-teal-400/10 backdrop-blur mb-6">
            <Layers className="w-4 h-4 text-teal-300 animate-pulse" />
            <span className="text-xs font-bold text-teal-300 tracking-wide uppercase">
              Solution Matrix
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Industry Solutions
          </h1>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Find the perfect Monoatom product for your industry challenges
          </p>
        </motion.div>

        {/* Industry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {Object.entries(industries).map(([key, industry]) => {
            const IndustryIcon = industry.icon;
            return (
              <motion.button
                key={key}
                onClick={() => setSelectedIndustry(selectedIndustry === key ? null : key)}
                className={`p-6 rounded-xl transition-all text-left ${
                  selectedIndustry === key
                    ? `bg-gradient-to-br ${industry.color} shadow-2xl scale-105`
                    : 'bg-white/10 hover:bg-white/20'
                }`}
                whileHover={{ scale: 1.02 }}
              >
                <IndustryIcon className="w-12 h-12 text-white mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{industry.name}</h3>
                <div className="text-sm text-white/70">
                  Click to see solutions
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Selected Industry Details */}
        {selectedIndustry && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Challenges */}
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
              <h3 className="text-xl font-display font-bold text-white mb-4">
                Industry Challenges
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {industries[selectedIndustry].challenges.map((challenge, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-3 bg-red-500/10 rounded-lg">
                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white text-sm">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {products.map((product) => {
                const solution = industries[selectedIndustry].solutions[product.id];
                const ProductIcon = product.icon;

                return (
                  <div
                    key={product.id}
                    className={`bg-gradient-to-br ${getFitColor(solution.fit)} rounded-xl p-6 ${
                      !solution.applicable ? 'opacity-50' : ''
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-white/20 rounded-lg">
                          <ProductIcon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white">{product.name}</h4>
                          <div className="flex items-center gap-2 mt-1">
                            {getFitIcon(solution.fit)}
                            <span className="text-sm font-semibold text-white">{solution.fit}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {solution.applicable ? (
                      <>
                        <div className="mb-4">
                          <div className="text-xs text-white/70 uppercase tracking-wide mb-2">
                            Key Benefits
                          </div>
                          <div className="space-y-2">
                            {solution.benefits.map((benefit, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-sm text-white">
                                <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                <span>{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4 border-t border-white/20">
                          <div className="text-xs text-white/70 uppercase tracking-wide mb-2">
                            Use Case
                          </div>
                          <div className="text-sm text-white font-semibold">
                            {solution.useCase}
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="text-center py-4">
                        <p className="text-white/70 text-sm">
                          Not applicable for this industry
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <p className="text-neutral-300 mb-4">
                Need help selecting the right product for your specific application?
              </p>
              <div className="flex justify-center gap-4">
                <button className="px-6 py-3 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 transition-all">
                  Request Consultation
                </button>
                <button className="px-6 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/20">
                  Download Solution Guide
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Legend */}
        {!selectedIndustry && (
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">Solution Fit Legend</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">Perfect Fit</div>
                  <div className="text-xs text-neutral-400">Primary solution</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">Good Fit</div>
                  <div className="text-xs text-neutral-400">Strong alternative</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">Moderate</div>
                  <div className="text-xs text-neutral-400">Niche applications</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-600 rounded-lg flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">Not Applicable</div>
                  <div className="text-xs text-neutral-400">Wrong use case</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IndustrySolutionMatrix;

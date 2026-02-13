import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, CheckCircle, X, Award } from 'lucide-react';

const CompetitiveComparison = () => {
  const [activeProduct, setActiveProduct] = useState('graphacrete');

  const comparisons = {
    graphacrete: {
      name: "Graphacrete",
      tagline: "vs Traditional Concrete Admixtures",
      color: "from-orange-500 to-red-600",
      competitors: ["Graphacrete", "UltraTech Admixture", "Sika Admixture", "PureGraph"],
      metrics: [
        {
          name: "Compressive Strength Gain",
          values: ["40-50%", "5-15%", "8-15%", "10-25%"],
          winner: 0,
          unit: ""
        },
        {
          name: "Cement Saving",
          values: ["15-20%", "0%", "0%", "3-5%"],
          winner: 0,
          unit: ""
        },
        {
          name: "Water Resistance Improvement",
          values: ["30-45%", "<10%", "10-20%", "20-30%"],
          winner: 0,
          unit: ""
        },
        {
          name: "Dosage Required",
          values: ["0.05-0.10%", "0.2-1.0%", "0.2-1.0%", "0.2-0.5%"],
          winner: 0,
          unit: "by weight of cement",
          lower: true
        },
        {
          name: "Micro-Crack Control",
          values: ["Excellent", "Low", "Medium", "Medium"],
          winner: 0
        },
        {
          name: "Environmental Benefit",
          values: ["15-20% CO₂ reduction", "None", "None", "Minimal"],
          winner: 0
        }
      ],
      advantage: "Only solution offering strength + durability + waterproofing + micro-crack control + cement reduction in a single product"
    },
    graffisol: {
      name: "Graffisol",
      tagline: "vs Solar Panel Coatings",
      color: "from-blue-500 to-cyan-600",
      competitors: ["Graffisol", "KhepriCoat", "DSM Coating", "Borosil Coating"],
      metrics: [
        {
          name: "Power Output Gain",
          values: ["7-8%", "2-3%", "~3%", "0%"],
          winner: 0,
          unit: "real-world"
        },
        {
          name: "Operating Temp Reduction",
          values: ["5-6°C", "Not specified", "Not specified", "Not specified"],
          winner: 0
        },
        {
          name: "Soiling Loss Reduction",
          values: ["30-40%", "Not specified", "Not specified", "Not specified"],
          winner: 0
        },
        {
          name: "Light Transmission",
          values: [">98%", "Not specified", "Not specified", ">94%"],
          winner: 0
        },
        {
          name: "UV Protection",
          values: ["Extended panel life", "Durability testing", "Reduced maintenance", "Not specified"],
          winner: 0
        },
        {
          name: "ROI Payback",
          values: ["18 months", "Not specified", "Not specified", "Not specified"],
          winner: 0,
          lower: true
        }
      ],
      advantage: "Highest efficiency gain in the market (7-8% real-world) with triple benefits: efficiency + thermal management + surface protection"
    },
    ceraphene: {
      name: "Ceraphene",
      tagline: "vs Premium Ceramic Coatings",
      color: "from-purple-500 to-pink-600",
      competitors: ["Ceraphene", "Gtechniq CSL/CSU", "CarPro CQuartz", "Ceramic Pro 9H"],
      metrics: [
        {
          name: "Graphene-Enhanced",
          values: ["Yes", "No", "No", "No"],
          winner: 0
        },
        {
          name: "Durability",
          values: ["3-4+ years", "2-3+ years", "1.5-2.5 years", "Up to 5 years"],
          winner: 0
        },
        {
          name: "Hardness",
          values: ["9H+", "9H", "9H", "9H"],
          winner: 0
        },
        {
          name: "Price (50ml)",
          values: ["₹5,000", "₹15,000", "₹12,000", "₹18,000"],
          winner: 0,
          lower: true
        },
        {
          name: "Cost Advantage",
          values: ["60-70% lower", "Standard", "Standard", "Premium"],
          winner: 0
        },
        {
          name: "Cost Per Protection Year",
          values: ["Lowest", "Medium", "Medium", "High"],
          winner: 0,
          lower: true
        }
      ],
      advantage: "Only graphene-enhanced formulation at this price point—premium performance at ceramic-only pricing"
    },
    hdgpe: {
      name: "HD-G-PE",
      tagline: "vs Standard HDPE Additives",
      color: "from-green-500 to-emerald-600",
      competitors: ["HD-G-PE", "Standard HDPE", "Basic Enhancer", "Premium Additive"],
      metrics: [
        {
          name: "Elongation Improvement",
          values: ["20×", "Baseline", "2-3×", "5-8×"],
          winner: 0
        },
        {
          name: "Tensile Strength Gain",
          values: ["+30%", "0%", "+10%", "+15-20%"],
          winner: 0
        },
        {
          name: "Product Lifespan Increase",
          values: ["+20%", "0%", "+5%", "+10%"],
          winner: 0
        },
        {
          name: "UV Stability",
          values: ["Superior", "Standard", "Good", "Good"],
          winner: 0
        },
        {
          name: "Crack Resistance",
          values: ["Excellent", "Standard", "Improved", "Improved"],
          winner: 0
        },
        {
          name: "Process Compatibility",
          values: ["Drop-in", "N/A", "Minimal changes", "Some changes"],
          winner: 0
        }
      ],
      advantage: "Massive 20× elongation strength improvement—unmatched in the industry for HDPE enhancement"
    }
  };

  const current = comparisons[activeProduct];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full mb-6"
          >
            <Award className="w-4 h-4 text-green-600" />
            <span className="text-sm font-bold text-green-700">Competitive Advantage</span>
          </motion.div>

          <h2 className="text-5xl font-bold text-neutral-900 mb-4">
            See How We Compare
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Direct, metric-by-metric comparison with leading competitors. We win on every measure that matters.
          </p>
        </div>

        {/* Product Selector */}
        <div className="mb-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(comparisons).map(([key, product]) => (
              <button
                key={key}
                onClick={() => setActiveProduct(key)}
                className={`p-6 rounded-xl border-2 transition-all ${
                  activeProduct === key
                    ? 'border-neutral-900 bg-neutral-900 text-white shadow-xl scale-105'
                    : 'border-neutral-200 bg-white text-neutral-900 hover:border-neutral-400'
                }`}
              >
                <div className="font-bold text-center text-lg">{product.name}</div>
                <div className="text-sm opacity-75 text-center mt-1">{product.tagline.split('vs ')[1]}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <motion.div
          key={activeProduct}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className={`bg-gradient-to-br ${current.color} text-white rounded-t-2xl p-8`}>
            <h3 className="text-3xl font-bold mb-2">{current.name}</h3>
            <p className="text-xl opacity-90">{current.tagline}</p>
          </div>

          <div className="bg-white border-2 border-neutral-200 rounded-b-2xl overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-5 gap-4 p-6 bg-neutral-50 border-b border-neutral-200 font-bold text-sm">
              <div>Performance Metric</div>
              {current.competitors.map((comp, idx) => (
                <div key={idx} className={idx === 0 ? 'text-green-600' : 'text-neutral-600'}>
                  {comp}
                  {idx === 0 && " ✓"}
                </div>
              ))}
            </div>

            {/* Table Rows */}
            {current.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="grid grid-cols-5 gap-4 p-6 border-b border-neutral-200 hover:bg-neutral-50 transition-colors items-center"
              >
                <div>
                  <div className="font-bold text-neutral-900">{metric.name}</div>
                  {metric.unit && (
                    <div className="text-xs text-neutral-500 mt-1">{metric.unit}</div>
                  )}
                </div>
                {metric.values.map((value, vidx) => {
                  const isWinner = vidx === metric.winner;
                  const isLoser = vidx !== metric.winner && value !== "Not specified" && value !== "N/A";

                  return (
                    <div key={vidx} className="flex items-center gap-2">
                      {isWinner && (
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      )}
                      {isLoser && (
                        <X className="w-5 h-5 text-neutral-300 flex-shrink-0" />
                      )}
                      <span className={`${
                        isWinner ? 'font-bold text-green-600 text-lg' :
                        value === "Not specified" ? 'text-neutral-400 italic text-sm' :
                        'text-neutral-600'
                      }`}>
                        {value}
                      </span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Why We Win */}
          <div className="mt-8 p-8 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-500 rounded-full flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-neutral-900 mb-3">
                  Why {current.name} is Superior
                </h4>
                <p className="text-neutral-700 leading-relaxed text-lg">
                  {current.advantage}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-neutral-900 text-white rounded-2xl">
            <div className="text-5xl font-bold mb-2">100%</div>
            <div className="text-neutral-300">Win Rate on Key Metrics</div>
          </div>
          <div className="text-center p-8 bg-neutral-900 text-white rounded-2xl">
            <div className="text-5xl font-bold mb-2">NABL</div>
            <div className="text-neutral-300">Certified Performance Data</div>
          </div>
          <div className="text-center p-8 bg-neutral-900 text-white rounded-2xl">
            <div className="text-5xl font-bold mb-2">Field</div>
            <div className="text-neutral-300">Tested in Real Applications</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-neutral-900 mb-4">
            Ready to Switch to Superior Performance?
          </h3>
          <p className="text-neutral-600 mb-6">
            Download detailed comparison reports with full performance data
          </p>
          <button className="bg-neutral-900 text-white px-8 py-4 rounded-full font-medium hover:bg-neutral-800 transition-all">
            Download Comparison Report
          </button>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveComparison;

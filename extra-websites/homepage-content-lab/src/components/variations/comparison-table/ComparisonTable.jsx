import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowRight, CheckCircle, X } from 'lucide-react';

const ComparisonTable = () => {
  const [selectedApplication, setSelectedApplication] = useState('concrete');

  const applications = {
    concrete: {
      name: "Concrete Performance",
      icon: "🏗️",
      properties: [
        {
          property: "Compressive Strength",
          traditional: "40 MPa (M40)",
          graphene: "50 MPa (M50)",
          improvement: "+25%",
          better: "graphene"
        },
        {
          property: "Tensile Strength",
          traditional: "3.2 MPa",
          graphene: "4.5 MPa",
          improvement: "+41%",
          better: "graphene"
        },
        {
          property: "Flexural Strength",
          traditional: "4.5 MPa",
          graphene: "6.2 MPa",
          improvement: "+38%",
          better: "graphene"
        },
        {
          property: "Cement Content",
          traditional: "450 kg/m³",
          graphene: "370 kg/m³",
          improvement: "-18%",
          better: "graphene"
        },
        {
          property: "Cost per m³",
          traditional: "₹5,850",
          graphene: "₹5,420",
          improvement: "-₹430",
          better: "graphene"
        },
        {
          property: "CO₂ Footprint",
          traditional: "385 kg/m³",
          graphene: "316 kg/m³",
          improvement: "-18%",
          better: "graphene"
        },
        {
          property: "Curing Time",
          traditional: "28 days",
          graphene: "18 days",
          improvement: "-35%",
          better: "graphene"
        },
        {
          property: "Durability (years)",
          traditional: "50-75",
          graphene: "100+",
          improvement: "+33%",
          better: "graphene"
        }
      ]
    },
    solar: {
      name: "Solar Panel Efficiency",
      icon: "☀️",
      properties: [
        {
          property: "Panel Efficiency",
          traditional: "18.5%",
          graphene: "20.2%",
          improvement: "+9.2%",
          better: "graphene"
        },
        {
          property: "Dust Accumulation",
          traditional: "High (12-15% loss)",
          graphene: "Minimal (2-3% loss)",
          improvement: "+80% reduction",
          better: "graphene"
        },
        {
          property: "Cleaning Frequency",
          traditional: "Weekly",
          graphene: "Monthly",
          improvement: "75% reduction",
          better: "graphene"
        },
        {
          property: "Maintenance Cost",
          traditional: "₹8/kWp/month",
          graphene: "₹2/kWp/month",
          improvement: "-75%",
          better: "graphene"
        },
        {
          property: "Coating Durability",
          traditional: "1-2 years",
          graphene: "5+ years",
          improvement: "+150%",
          better: "graphene"
        },
        {
          property: "Water Resistance",
          traditional: "Moderate",
          graphene: "Excellent",
          improvement: "Hydrophobic",
          better: "graphene"
        },
        {
          property: "ROI Period",
          traditional: "N/A",
          graphene: "18 months",
          improvement: "Fast payback",
          better: "graphene"
        }
      ]
    },
    polymer: {
      name: "Polymer Enhancement",
      icon: "🧪",
      properties: [
        {
          property: "Tensile Strength",
          traditional: "25 MPa",
          graphene: "38 MPa",
          improvement: "+52%",
          better: "graphene"
        },
        {
          property: "Elongation at Break",
          traditional: "600%",
          graphene: "850%",
          improvement: "+42%",
          better: "graphene"
        },
        {
          property: "Thermal Conductivity",
          traditional: "0.3 W/m·K",
          graphene: "1.8 W/m·K",
          improvement: "+500%",
          better: "graphene"
        },
        {
          property: "UV Resistance",
          traditional: "Moderate",
          graphene: "Excellent",
          improvement: "+200% lifespan",
          better: "graphene"
        },
        {
          property: "Impact Resistance",
          traditional: "15 kJ/m²",
          graphene: "28 kJ/m²",
          improvement: "+87%",
          better: "graphene"
        },
        {
          property: "Processing Temp",
          traditional: "180-200°C",
          graphene: "180-200°C",
          improvement: "No change",
          better: "equal"
        },
        {
          property: "Cost per kg",
          traditional: "₹120",
          graphene: "₹135",
          improvement: "+12%",
          better: "traditional"
        },
        {
          property: "Overall Value",
          traditional: "Standard",
          graphene: "Premium",
          improvement: "Better performance",
          better: "graphene"
        }
      ]
    },
    coating: {
      name: "Coating Performance",
      icon: "🎨",
      properties: [
        {
          property: "Thermal Resistance",
          traditional: "800°C",
          graphene: "1200°C",
          improvement: "+50%",
          better: "graphene"
        },
        {
          property: "Corrosion Protection",
          traditional: "500 hours (salt spray)",
          graphene: "1500 hours",
          improvement: "+200%",
          better: "graphene"
        },
        {
          property: "Adhesion Strength",
          traditional: "3.5 MPa",
          graphene: "5.2 MPa",
          improvement: "+49%",
          better: "graphene"
        },
        {
          property: "Coating Thickness",
          traditional: "100-150 μm",
          graphene: "50-75 μm",
          improvement: "-50%",
          better: "graphene"
        },
        {
          property: "Application Cost",
          traditional: "₹450/m²",
          graphene: "₹300/m²",
          improvement: "-33%",
          better: "graphene"
        },
        {
          property: "Service Life",
          traditional: "3 years",
          graphene: "5+ years",
          improvement: "+67%",
          better: "graphene"
        },
        {
          property: "VOC Content",
          traditional: "High",
          graphene: "Low",
          improvement: "Eco-friendly",
          better: "graphene"
        }
      ]
    }
  };

  const selectedData = applications[selectedApplication];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 px-4 py-2 rounded-full mb-6"
          >
            <TrendingUp className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-bold text-purple-700">Performance Comparison</span>
          </motion.div>

          <h2 className="text-5xl font-bold text-neutral-900 mb-4">
            Traditional vs Graphene-Enhanced
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            See the measurable difference graphene nano-platelets make across key performance metrics
          </p>
        </div>

        {/* Application Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(applications).map((key) => (
            <button
              key={key}
              onClick={() => setSelectedApplication(key)}
              className={`px-6 py-3 rounded-full font-bold transition-all ${
                selectedApplication === key
                  ? 'bg-neutral-900 text-white shadow-xl scale-105'
                  : 'bg-white border-2 border-neutral-200 text-neutral-700 hover:border-neutral-900'
              }`}
            >
              <span className="mr-2">{applications[key].icon}</span>
              {applications[key].name}
            </button>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          key={selectedApplication}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white border-2 border-neutral-200 rounded-2xl overflow-hidden shadow-xl"
        >
          {/* Table Header */}
          <div className="grid grid-cols-4 bg-neutral-900 text-white">
            <div className="p-6 border-r border-white/10">
              <h3 className="text-lg font-bold">Property</h3>
            </div>
            <div className="p-6 border-r border-white/10">
              <h3 className="text-lg font-bold">Traditional Solution</h3>
            </div>
            <div className="p-6 border-r border-white/10 bg-blue-600">
              <h3 className="text-lg font-bold">Graphene-Enhanced</h3>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold">Improvement</h3>
            </div>
          </div>

          {/* Table Rows */}
          {selectedData.properties.map((row, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              className={`grid grid-cols-4 border-b border-neutral-200 hover:bg-neutral-50 transition-colors ${
                index % 2 === 0 ? 'bg-white' : 'bg-neutral-50/50'
              }`}
            >
              <div className="p-6 border-r border-neutral-200">
                <span className="font-bold text-neutral-900">{row.property}</span>
              </div>
              <div className="p-6 border-r border-neutral-200 text-neutral-700">
                {row.traditional}
              </div>
              <div className="p-6 border-r border-neutral-200 bg-blue-50 font-bold text-neutral-900">
                {row.graphene}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2">
                  {row.better === 'graphene' && (
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  )}
                  {row.better === 'traditional' && (
                    <X className="w-5 h-5 text-red-600 flex-shrink-0" />
                  )}
                  <span className={`font-bold ${
                    row.better === 'graphene' ? 'text-green-600' :
                    row.better === 'traditional' ? 'text-red-600' :
                    'text-neutral-600'
                  }`}>
                    {row.improvement}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl p-8">
            <h4 className="text-3xl font-bold mb-2">Performance</h4>
            <p className="text-green-100">
              Consistently superior across all critical metrics
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-cyan-600 text-white rounded-2xl p-8">
            <h4 className="text-3xl font-bold mb-2">Cost-Effective</h4>
            <p className="text-blue-100">
              Premium performance at competitive or lower costs
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-2xl p-8">
            <h4 className="text-3xl font-bold mb-2">Sustainable</h4>
            <p className="text-purple-100">
              Reduced material usage and environmental impact
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 bg-neutral-900 text-white rounded-2xl p-10">
          <h3 className="text-2xl font-bold mb-4">
            Want to see comparison data for your specific application?
          </h3>
          <p className="text-neutral-300 mb-6">
            We can provide detailed technical comparisons and performance projections
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-neutral-200 transition-all inline-flex items-center gap-2">
            Request Custom Comparison Report
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;

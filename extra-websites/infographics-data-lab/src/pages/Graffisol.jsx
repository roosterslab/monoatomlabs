import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

const Graffisol = () => {
  return (
    <div className="min-h-screen">
      <Header
        title="Graffisol - Solar Coating"
        subtitle="ROI Calculator Formula Documentation"
      />

      <Navigation />

      <div className="container mx-auto px-6 py-12 max-w-5xl">
        {/* Status Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-red-900 mb-2">
                Calculator Status: 80% Accurate
              </h2>
              <p className="text-red-700">
                <strong>CRITICAL:</strong> Missing installed coating cost structure. Calculator cannot launch without this data.
              </p>
            </div>
            <div className="text-6xl">🚨</div>
          </div>
        </motion.div>

        {/* What We Have */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-green-600 mb-4">✅ What We Have</h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-green-500 font-bold mr-3">✓</span>
              <div>
                <strong>Energy Gain:</strong> 7-8% (validated range from field testing in Gujarat, Rajasthan)
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 font-bold mr-3">✓</span>
              <div>
                <strong>Current Formula:</strong> Using midpoint of 7.5% for conservative estimates
              </div>
            </div>
          </div>
        </section>

        {/* What We Need - CRITICAL */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8 border-2 border-red-300">
          <div className="flex items-start mb-4">
            <span className="text-3xl mr-3">🚨</span>
            <div>
              <h3 className="text-2xl font-bold text-red-600 mb-2">CRITICAL: What We Need</h3>
              <p className="text-red-700 font-semibold">
                Without this data, the Graffisol calculator CANNOT provide ROI estimates.
              </p>
            </div>
          </div>

          <div className="bg-red-50 p-6 rounded-lg border-2 border-red-300 mb-4">
            <h4 className="font-bold text-red-900 mb-3">1. Installed Coating Cost Structure (₹/kW)</h4>
            <p className="text-sm text-red-800 mb-3">
              We need the complete cost breakdown for coating installation:
            </p>
            <ul className="space-y-2 text-sm text-red-900 ml-6 list-disc">
              <li><strong>Total installed cost per kW</strong> (₹/kW) - critical for ROI calculation</li>
              <li><strong>Material cost per kW</strong> (₹/kW) - coating material only</li>
              <li><strong>Labor cost per kW</strong> (₹/kW) - installation labor</li>
              <li><strong>Installation time per kW</strong> (hours) - for scheduling estimates</li>
            </ul>
            <div className="mt-4 p-3 bg-red-100 rounded border border-red-300">
              <p className="text-sm text-red-900">
                <strong>Impact:</strong> This is the largest cost input in the ROI formula. Without it, we can only show "Contact Sales" instead of actual ROI numbers.
              </p>
            </div>
          </div>

          <div className="bg-amber-50 p-6 rounded-lg border border-amber-300">
            <h4 className="font-bold text-amber-900 mb-3">2. Pricing Structure Details (High Priority)</h4>
            <ul className="space-y-2 text-sm text-amber-900 ml-6 list-disc">
              <li>Minimum order size (kW)</li>
              <li>Volume discount tiers (if applicable)</li>
              <li>Regional pricing variations (if any)</li>
            </ul>
          </div>
        </section>

        {/* Current Formula */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">📐 Current ROI Formula</h3>

          <div className="bg-amber-50 p-6 rounded-lg mb-4">
            <h4 className="font-bold text-amber-900 mb-3">Annual Energy Gain Calculation</h4>
            <div className="font-mono text-sm bg-white p-4 rounded border border-amber-200 mb-3">
              <div>System Size (kW) × Energy Gain (7.5%) = Additional kW</div>
              <div className="mt-2">Additional kW × Generation Hours × Days = Annual kWh Gain</div>
              <div className="mt-2">Annual kWh Gain × Electricity Rate (₹/kWh) = Annual Savings</div>
            </div>
            <p className="text-sm text-amber-800">
              <strong>Example:</strong> 100 kW system × 7.5% = 7.5 kW additional capacity
            </p>
          </div>

          <div className="bg-red-50 p-6 rounded-lg border-2 border-red-300">
            <h4 className="font-bold text-red-900 mb-3">ROI Calculation (BLOCKED)</h4>
            <div className="font-mono text-sm bg-white p-4 rounded border border-red-200 mb-3">
              <div className="text-gray-400">Total Investment = System Size (kW) × <span className="bg-red-200 text-red-900 px-2">MISSING: Cost per kW</span></div>
              <div className="mt-2 text-gray-400">ROI (%) = (Annual Savings ÷ Total Investment) × 100</div>
              <div className="mt-2 text-gray-400">Payback Period = Total Investment ÷ Annual Savings</div>
            </div>
            <div className="p-3 bg-red-100 rounded border border-red-300">
              <p className="text-sm text-red-900 font-semibold">
                ⚠️ Cannot calculate ROI without coating cost data!
              </p>
            </div>
          </div>
        </section>

        {/* Data Classification */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">🎨 Data Classification</h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <div className="w-4 h-4 bg-yellow-500 rounded-full mt-1 mr-3"></div>
              <div>
                <strong>Validated Range (Yellow):</strong> Energy gain 7-8% (field-validated in Gujarat, Rajasthan)
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-4 h-4 bg-blue-500 rounded-full mt-1 mr-3"></div>
              <div>
                <strong>Customer Input (Blue):</strong> System size (kW), electricity rate (₹/kWh), location
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-4 h-4 bg-red-500 rounded-full mt-1 mr-3"></div>
              <div>
                <strong>MISSING (Red):</strong> Installed coating cost (₹/kW) - CRITICAL BLOCKER
              </div>
            </div>
          </div>
        </section>

        {/* Business Impact */}
        <section className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-200">
          <h3 className="text-xl font-bold text-blue-900 mb-3">💡 Why This Matters</h3>
          <p className="text-blue-800 mb-3">
            Graffisol targets the ₹300 Cr+ solar energy market in India. An accurate ROI calculator is critical for:
          </p>
          <ul className="space-y-2 text-sm text-blue-900 ml-6 list-disc">
            <li>Demonstrating payback period to solar farm operators (typically 2-3 years)</li>
            <li>Competing against uncoated panels in tenders</li>
            <li>Justifying 7.5% energy gain claims with transparent calculations</li>
            <li>Building trust with institutional investors and large-scale buyers</li>
          </ul>
        </section>

        {/* Submit Data CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-xl border-2 border-red-400 text-center"
        >
          <div className="text-4xl mb-4">🚨</div>
          <h3 className="text-2xl font-bold text-red-900 mb-4">URGENT: Coating Cost Data Needed</h3>
          <p className="text-red-700 mb-6">
            The Graffisol calculator cannot launch without installed coating cost structure (₹/kW).
          </p>
          <Link
            to="/submit"
            className="inline-block px-8 py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-all shadow-lg"
          >
            Submit Graffisol Data Now
          </Link>
        </motion.div>
      </div>

      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; 2026 Monoatom Labs. Internal stakeholder portal.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Graffisol;

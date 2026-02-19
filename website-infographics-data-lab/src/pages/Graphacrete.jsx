import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

const Graphacrete = () => {
  return (
    <div className="min-h-screen">
      <Header
        title="Graphacrete - Concrete Additive"
        subtitle="ROI Calculator Formula Documentation"
      />

      <Navigation />

      <div className="container mx-auto px-6 py-12 max-w-5xl">
        {/* Status Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-amber-900 mb-2">
                Calculator Status: 75% Accurate
              </h2>
              <p className="text-amber-700">
                Core pricing is source-backed, but missing cement content and dosage range data for M30 vs M50 comparison.
              </p>
            </div>
            <div className="text-6xl">⚠️</div>
          </div>
        </motion.div>

        {/* What We Have */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-green-600 mb-4">✅ What We Have</h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-green-500 font-bold mr-3">✓</span>
              <div>
                <strong>Graphacrete Pricing:</strong> ₹235/L (source-backed from pricing team)
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 font-bold mr-3">✓</span>
              <div>
                <strong>Recommended Dosage:</strong> 2 L/m³ (source-backed from technical specifications)
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 font-bold mr-3">✓</span>
              <div>
                <strong>Additive Cost Calculation:</strong> ₹470/m³ (2 L/m³ × ₹235/L)
              </div>
            </div>
          </div>
        </section>

        {/* What We Need */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-amber-200">
          <h3 className="text-2xl font-bold text-amber-600 mb-4">⚠️ What We Need</h3>

          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 mb-4">
            <h4 className="font-bold text-amber-900 mb-3">1. Cement Content by Grade</h4>
            <p className="text-sm text-amber-800 mb-3">
              To enhance our M30+Additive vs M50 comparison calculator, we need:
            </p>
            <ul className="space-y-2 text-sm text-amber-900 ml-6 list-disc">
              <li><strong>M30 cement content:</strong> kg/m³ (standard mix design)</li>
              <li><strong>M50 cement content:</strong> kg/m³ (standard mix design)</li>
              <li><strong>Current cement price:</strong> ₹/kg (market rate)</li>
            </ul>
            <div className="mt-3 p-3 bg-amber-100 rounded border border-amber-300">
              <p className="text-sm text-amber-900">
                <strong>Why this matters:</strong> This allows us to show the cement savings when using M30+Graphacrete instead of M50 concrete.
              </p>
            </div>
          </div>

          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
            <h4 className="font-bold text-amber-900 mb-3">2. Dosage Range Data</h4>
            <p className="text-sm text-amber-800 mb-3">
              To provide customers with application-specific guidance:
            </p>
            <ul className="space-y-2 text-sm text-amber-900 ml-6 list-disc">
              <li><strong>Minimum dosage:</strong> L/m³ (for lower strength requirements)</li>
              <li><strong>Maximum dosage:</strong> L/m³ (for maximum performance)</li>
              <li><strong>Application-specific dosages:</strong> Foundation, slabs, columns & beams</li>
            </ul>
            <div className="mt-3 p-3 bg-amber-100 rounded border border-amber-300">
              <p className="text-sm text-amber-900">
                <strong>Why this matters:</strong> Different applications have different strength requirements. Providing validated dosage ranges builds customer confidence.
              </p>
            </div>
          </div>
        </section>

        {/* Current Formula */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">📐 Current ROI Formula</h3>

          <div className="bg-teal-50 p-6 rounded-lg mb-4">
            <h4 className="font-bold text-teal-900 mb-3">M30 + Graphacrete Cost</h4>
            <div className="font-mono text-sm bg-white p-4 rounded border border-teal-200 mb-3">
              <div>Concrete Volume (m³) × Dosage (2 L/m³) × Price (₹235/L) = Additive Cost</div>
              <div className="mt-2">M30 Base Cost + Additive Cost = Total M30+Additive Cost</div>
            </div>
            <p className="text-sm text-teal-800">
              <strong>Example:</strong> 100 m³ × 2 L/m³ × ₹235/L = ₹47,000 additive cost
            </p>
          </div>

          <div className="bg-amber-50 p-6 rounded-lg mb-4">
            <h4 className="font-bold text-amber-900 mb-3">M50 Alternative Cost (ENHANCED WITH YOUR DATA)</h4>
            <div className="font-mono text-sm bg-white p-4 rounded border border-amber-200 mb-3">
              <div className="text-gray-400">M50 Cement (kg/m³) × <span className="bg-amber-200 text-amber-900 px-2">NEED: Cement Price</span> = M50 Cost</div>
              <div className="mt-2 text-gray-400">Cement Savings = (M50 Cement - M30 Cement) × Volume × <span className="bg-amber-200 text-amber-900 px-2">Cement Price</span></div>
            </div>
            <p className="text-sm text-amber-800">
              Once we have cement content data, we can show total material cost comparison including cement savings.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-bold text-gray-900 mb-3">ROI Calculation</h4>
            <div className="font-mono text-sm bg-white p-4 rounded border border-gray-200">
              <div>Savings = M50 Total Cost - M30+Additive Total Cost</div>
              <div className="mt-2">ROI (%) = (Savings ÷ Additive Cost) × 100</div>
              <div className="mt-2">Cost per m³ Reduction = Savings ÷ Volume</div>
            </div>
          </div>
        </section>

        {/* Data Classification */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">🎨 Data Classification</h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <div className="w-4 h-4 bg-green-500 rounded-full mt-1 mr-3"></div>
              <div>
                <strong>Source-Backed (Green):</strong> Graphacrete price (₹235/L), Recommended dosage (2 L/m³)
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-4 h-4 bg-blue-500 rounded-full mt-1 mr-3"></div>
              <div>
                <strong>Customer Input (Blue):</strong> Concrete volume (m³), concrete grade (M30/M50), application type
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-4 h-4 bg-amber-500 rounded-full mt-1 mr-3"></div>
              <div>
                <strong>NEEDED (Amber):</strong> Cement content by grade, dosage range data, application-specific recommendations
              </div>
            </div>
          </div>
        </section>

        {/* Business Impact */}
        <section className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-200">
          <h3 className="text-xl font-bold text-blue-900 mb-3">💡 Why This Matters</h3>
          <p className="text-blue-800 mb-3">
            Graphacrete targets the ₹150 Cr+ construction market. Enhanced calculator features enable:
          </p>
          <ul className="space-y-2 text-sm text-blue-900 ml-6 list-disc">
            <li>Direct M30+Graphacrete vs M50 cost comparison (critical for builders choosing between options)</li>
            <li>Showing cement cost savings alongside strength gains (dual value proposition)</li>
            <li>Application-specific dosage recommendations (builds confidence for varied use cases)</li>
            <li>Transparent pricing that helps sales teams close deals faster</li>
          </ul>
        </section>

        {/* Submit Data CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-xl border-2 border-teal-300 text-center"
        >
          <h3 className="text-2xl font-bold text-teal-900 mb-4">Have Cement Content or Dosage Data?</h3>
          <p className="text-teal-700 mb-6">
            Help us enhance the Graphacrete calculator with M30 vs M50 comparison features.
          </p>
          <Link
            to="/submit"
            className="inline-block px-8 py-4 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-700 transition-all shadow-lg"
          >
            Submit Graphacrete Data
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

export default Graphacrete;

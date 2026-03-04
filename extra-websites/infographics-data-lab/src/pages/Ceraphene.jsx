import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

const Ceraphene = () => {
  return (
    <div className="min-h-screen">
      <Header
        title="Ceraphene - Ceramic Coating"
        subtitle="ROI Calculator Formula Documentation"
      />

      <Navigation />

      <div className="container mx-auto px-6 py-12 max-w-5xl">
        {/* Status Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-purple-900 mb-2">
                Calculator Status: 85% Accurate
              </h2>
              <p className="text-purple-700">
                Most core data is source-backed. Missing 1 high-priority data point.
              </p>
            </div>
            <div className="text-6xl">🟡</div>
          </div>
        </motion.div>

        {/* What We Have */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-green-600 mb-4">✅ What We Have</h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-green-500 font-bold mr-3">✓</span>
              <div>
                <strong>Ceraphene Pricing:</strong> ₹12,000 per vehicle (source-backed from pricing team)
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 font-bold mr-3">✓</span>
              <div>
                <strong>Durability:</strong> 5 years (validated by field testing)
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 font-bold mr-3">✓</span>
              <div>
                <strong>Reapplication Frequency:</strong> No reapplication needed within 5-year lifecycle
              </div>
            </div>
          </div>
        </section>

        {/* What We Need */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-amber-200">
          <h3 className="text-2xl font-bold text-amber-600 mb-4">⚠️ What We Need</h3>
          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 mb-4">
            <h4 className="font-bold text-amber-900 mb-2">Competitor Durability Data</h4>
            <p className="text-sm text-amber-800 mb-3">
              To complete our Total Cost of Ownership (TCO) calculator, we need competitor durability data across three tiers:
            </p>
            <ul className="space-y-2 text-sm text-amber-900">
              <li><strong>Premium Tier:</strong> e.g., 3M Ceramic Pro - durability in years</li>
              <li><strong>Mid-Range Tier:</strong> e.g., Teflon Shield - durability in years</li>
              <li><strong>Economy Tier:</strong> e.g., Wax Polish - durability in months</li>
            </ul>
            <p className="text-sm text-amber-800 mt-3">
              <strong>Why this matters:</strong> This data allows us to show customers the 5-year TCO advantage of Ceraphene's one-time application vs. repeated competitor applications.
            </p>
          </div>
        </section>

        {/* Current Formula */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">📐 Current ROI Formula</h3>

          <div className="bg-purple-50 p-6 rounded-lg mb-4">
            <h4 className="font-bold text-purple-900 mb-3">Total Cost of Ownership (5 Years)</h4>
            <div className="font-mono text-sm bg-white p-4 rounded border border-purple-200 mb-3">
              <div>Ceraphene TCO = ₹12,000 × 1 application = ₹12,000</div>
              <div className="mt-2">Competitor TCO = Price × (5 years ÷ Durability)</div>
              <div className="mt-2">Savings = Competitor TCO - Ceraphene TCO</div>
            </div>
            <p className="text-sm text-purple-800">
              <strong>Example:</strong> If a ₹4,000 wax polish lasts 6 months, customers need 10 applications over 5 years = ₹40,000 total cost vs. ₹12,000 for Ceraphene.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-bold text-gray-900 mb-3">ROI Calculation</h4>
            <div className="font-mono text-sm bg-white p-4 rounded border border-gray-200">
              <div>ROI (%) = (Savings ÷ Ceraphene Cost) × 100</div>
              <div className="mt-2">Payback Period = Ceraphene Cost ÷ (Savings ÷ 5 years)</div>
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
                <strong>Source-Backed (Green):</strong> Ceraphene price (₹12,000), Durability (5 years)
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-4 h-4 bg-yellow-500 rounded-full mt-1 mr-3"></div>
              <div>
                <strong>Validated Range (Yellow):</strong> None - all competitor data will be source-backed once provided
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-4 h-4 bg-blue-500 rounded-full mt-1 mr-3"></div>
              <div>
                <strong>Customer Input (Blue):</strong> Fleet size, vehicle type
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-4 h-4 bg-gray-400 rounded-full mt-1 mr-3"></div>
              <div>
                <strong>Assumptions (Gray):</strong> No major assumptions currently
              </div>
            </div>
          </div>
        </section>

        {/* Submit Data CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-xl border-2 border-purple-300 text-center"
        >
          <h3 className="text-2xl font-bold text-purple-900 mb-4">Have Competitor Data?</h3>
          <p className="text-purple-700 mb-6">
            Help us complete the Ceraphene TCO calculator by providing competitor durability data.
          </p>
          <Link
            to="/submit"
            className="inline-block px-8 py-4 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition-all shadow-lg"
          >
            Submit Ceraphene Data
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

export default Ceraphene;

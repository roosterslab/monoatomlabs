import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import ProductCard from '../components/ProductCard';

const Dashboard = () => {
  const products = [
    {
      name: 'Ceraphene',
      description: 'Ceramic Coating',
      accuracy: 85,
      color: '#8b5cf6',
      bgGradient: 'from-purple-50 to-violet-50',
      path: '/ceraphene',
      status: [
        { icon: '✓', label: 'Price', status: 'Source-backed', type: 'complete' },
        { icon: '✓', label: 'Durability', status: 'Validated', type: 'complete' },
        { icon: '⚠️', label: 'Competitor', status: 'Needs Data', type: 'warning' },
      ],
    },
    {
      name: 'Graffisol',
      description: 'Solar Coating',
      accuracy: 80,
      color: '#f59e0b',
      bgGradient: 'from-amber-50 to-orange-50',
      path: '/graffisol',
      status: [
        { icon: '✓', label: 'Energy Gain', status: 'Field-validated', type: 'complete' },
        { icon: '🚨', label: 'Coating Cost', status: 'CRITICAL', type: 'critical' },
        { icon: '⚠️', label: 'Gen Rates', status: 'Needs Data', type: 'warning' },
      ],
    },
    {
      name: 'Graphacrete',
      description: 'Concrete Additive',
      accuracy: 75,
      color: '#0d9488',
      bgGradient: 'from-teal-50 to-cyan-50',
      path: '/graphacrete',
      status: [
        { icon: '✓', label: 'Price', status: 'Source-backed', type: 'complete' },
        { icon: '⚠️', label: 'Cement Content', status: 'Needs Data', type: 'warning' },
        { icon: '⚠️', label: 'Dosage Range', status: 'Needs Data', type: 'warning' },
      ],
    },
    {
      name: 'HD-G-PE',
      description: 'Polymer Enhancer',
      accuracy: 75,
      color: '#06b6d4',
      bgGradient: 'from-cyan-50 to-blue-50',
      path: '/hdgpe',
      status: [
        { icon: '✓', label: 'Performance', status: 'Lab-validated', type: 'complete' },
        { icon: '🚨', label: 'Pricing', status: 'CRITICAL', type: 'critical' },
        { icon: '🚨', label: 'Dosage', status: 'CRITICAL', type: 'critical' },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header
        title="ROI Calculator Data Lab"
        subtitle="Formula Transparency & Data Collection Portal"
        accuracy={79}
      />

      <Navigation />

      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 bg-amber-100 border border-amber-300 rounded-full text-amber-800 text-sm font-semibold mb-6"
            >
              🎯 Critical Data Needed - Action Required
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              Help Us Build the Industry's Most Trusted ROI Calculators
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 mb-8"
            >
              We're 79% there! Your data will unlock accurate, transparent calculations
              that build customer confidence and drive sales.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left"
            >
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                <div className="text-3xl font-bold text-green-600 mb-2">3</div>
                <div className="text-sm font-semibold text-gray-700 mb-1">
                  Critical Data Points
                </div>
                <div className="text-xs text-gray-500">Needed within 1 week</div>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200">
                <div className="text-3xl font-bold text-amber-600 mb-2">6</div>
                <div className="text-sm font-semibold text-gray-700 mb-1">
                  High Priority Items
                </div>
                <div className="text-xs text-gray-500">Needed within 2 weeks</div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
                <div className="text-3xl font-bold text-blue-600 mb-2">₹600 Cr</div>
                <div className="text-sm font-semibold text-gray-700 mb-1">
                  Annual Revenue Potential
                </div>
                <div className="text-xs text-gray-500">With accurate calculators</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Data Gap Analysis</h2>

        {/* Overall Progress */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-200">
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-gray-700">
                Overall Calculator Accuracy
              </span>
              <span className="text-2xl font-bold text-brand-600">79%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-gradient-to-r from-brand-500 to-emerald-500 h-4 rounded-full transition-all"
                style={{ width: '79%' }}
              ></div>
            </div>
          </div>
          <div className="text-sm text-gray-600 mt-4">
            <span className="font-semibold text-gray-900">Target: 95%+</span> — Missing 9
            critical data points to reach production-ready status
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        {/* Critical Items Alert */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg"
        >
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg
                className="h-6 w-6 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-bold text-red-800 mb-2">
                🚨 3 Critical Data Points Blocking Launch
              </h3>
              <ul className="space-y-1 text-sm text-red-700">
                <li className="font-semibold">
                  • Graffisol: Installed coating cost structure (₹/kW)
                </li>
                <li className="font-semibold">
                  • HD-G-PE: Additive pricing + volume tiers
                </li>
                <li className="font-semibold">
                  • HD-G-PE: Dosage recommendations by application
                </li>
              </ul>
              <p className="mt-3 text-sm text-red-600">
                <strong>Without this data:</strong> These calculators cannot provide accurate
                ROI estimates and must show "Contact Sales" disclaimers.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Submit Data CTA */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-16 border-t-4 border-green-500">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Submit Data?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Choose your preferred method to provide the critical data we need.
            </p>
            <Link
              to="/submit"
              className="inline-block px-8 py-4 bg-green-600 text-white text-lg font-bold rounded-lg hover:bg-green-700 transition-all shadow-lg"
            >
              Submit Data Now →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; 2026 Monoatom Labs. Internal stakeholder portal.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;

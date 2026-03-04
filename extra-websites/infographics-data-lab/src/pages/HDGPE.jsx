import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

const HDGPE = () => {
  return (
    <div className="min-h-screen">
      <Header
        title="HD-G-PE - Polymer Enhancer"
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
                Calculator Status: 75% Accurate
              </h2>
              <p className="text-red-700">
                <strong>CRITICAL:</strong> Missing pricing structure and dosage recommendations. Calculator cannot provide accurate ROI without these.
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
                <strong>Performance Data:</strong> Lab-validated scrap reduction and product quality improvements
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 font-bold mr-3">✓</span>
              <div>
                <strong>Value Model:</strong> Scrap reduction + warranty claims reduction framework
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
                Without this data, the HD-G-PE calculator CANNOT provide accurate cost-benefit analysis.
              </p>
            </div>
          </div>

          <div className="bg-red-50 p-6 rounded-lg border-2 border-red-300 mb-4">
            <h4 className="font-bold text-red-900 mb-3">1. Additive Pricing Structure (₹/kg)</h4>
            <p className="text-sm text-red-800 mb-3">
              We need complete pricing information including volume tiers:
            </p>
            <ul className="space-y-2 text-sm text-red-900 ml-6 list-disc">
              <li><strong>Base price:</strong> ₹/kg for standard orders</li>
              <li><strong>Volume Tier 1:</strong> Order volume (kg) and discounted price (₹/kg)</li>
              <li><strong>Volume Tier 2:</strong> Order volume (kg) and discounted price (₹/kg)</li>
              <li><strong>Volume Tier 3:</strong> Order volume (kg) and discounted price (₹/kg)</li>
            </ul>
            <div className="mt-4 p-3 bg-red-100 rounded border border-red-300">
              <p className="text-sm text-red-900">
                <strong>Impact:</strong> Pricing is the primary cost input in ROI calculation. Without it, we cannot show payback period or cost savings.
              </p>
            </div>
          </div>

          <div className="bg-red-50 p-6 rounded-lg border-2 border-red-300">
            <h4 className="font-bold text-red-900 mb-3">2. Dosage Recommendations by Application</h4>
            <p className="text-sm text-red-800 mb-3">
              Different polymer processing methods require different dosages (% by weight):
            </p>
            <ul className="space-y-2 text-sm text-red-900 ml-6 list-disc">
              <li><strong>Injection Molding:</strong> Recommended dosage %</li>
              <li><strong>Blow Molding:</strong> Recommended dosage %</li>
              <li><strong>Extrusion:</strong> Recommended dosage %</li>
              <li><strong>Film Production:</strong> Recommended dosage %</li>
              <li><strong>General Purpose:</strong> Recommended dosage %</li>
            </ul>
            <div className="mt-4 p-3 bg-red-100 rounded border border-red-300">
              <p className="text-sm text-red-900">
                <strong>Impact:</strong> Dosage directly determines additive cost per kg of polymer. Without application-specific data, ROI calculations will be inaccurate.
              </p>
            </div>
          </div>
        </section>

        {/* Current Formula */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">📐 Current ROI Formula</h3>

          <div className="bg-red-50 p-6 rounded-lg mb-4 border-2 border-red-300">
            <h4 className="font-bold text-red-900 mb-3">Additive Cost Calculation (BLOCKED)</h4>
            <div className="font-mono text-sm bg-white p-4 rounded border border-red-200 mb-3">
              <div className="text-gray-400">Annual Polymer (kg) × <span className="bg-red-200 text-red-900 px-2">MISSING: Dosage %</span> = Additive Required (kg)</div>
              <div className="mt-2 text-gray-400">Additive Required × <span className="bg-red-200 text-red-900 px-2">MISSING: Price (₹/kg)</span> = Annual Additive Cost</div>
            </div>
            <div className="p-3 bg-red-100 rounded border border-red-300">
              <p className="text-sm text-red-900 font-semibold">
                ⚠️ Cannot calculate investment cost without pricing and dosage data!
              </p>
            </div>
          </div>

          <div className="bg-cyan-50 p-6 rounded-lg mb-4">
            <h4 className="font-bold text-cyan-900 mb-3">Scrap Reduction Value</h4>
            <div className="font-mono text-sm bg-white p-4 rounded border border-cyan-200 mb-3">
              <div>Current Scrap Rate (%) × Annual Production (kg) = Current Scrap (kg)</div>
              <div className="mt-2">Scrap Reduction (%) × Current Scrap = Scrap Saved (kg)</div>
              <div className="mt-2">Scrap Saved × Polymer Cost (₹/kg) = Scrap Savings (₹)</div>
            </div>
            <p className="text-sm text-cyan-800">
              <strong>Example:</strong> 5% scrap rate on 100,000 kg = 5,000 kg scrap. 20% reduction = 1,000 kg saved.
            </p>
          </div>

          <div className="bg-cyan-50 p-6 rounded-lg mb-4">
            <h4 className="font-bold text-cyan-900 mb-3">Warranty Claims Reduction Value</h4>
            <div className="font-mono text-sm bg-white p-4 rounded border border-cyan-200 mb-3">
              <div>Annual Warranty Cost (₹) × Warranty Reduction (%) = Warranty Savings (₹)</div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-bold text-gray-900 mb-3">ROI Calculation</h4>
            <div className="font-mono text-sm bg-white p-4 rounded border border-gray-200">
              <div>Total Annual Savings = Scrap Savings + Warranty Savings</div>
              <div className="mt-2">Net Benefit = Total Savings - Additive Cost</div>
              <div className="mt-2">ROI (%) = (Net Benefit ÷ Additive Cost) × 100</div>
              <div className="mt-2">Payback Period = Additive Cost ÷ Total Savings</div>
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
                <strong>Source-Backed (Green):</strong> Performance improvements (lab-validated scrap and warranty data)
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-4 h-4 bg-blue-500 rounded-full mt-1 mr-3"></div>
              <div>
                <strong>Customer Input (Blue):</strong> Annual polymer volume, current scrap rate, polymer cost, application type
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-4 h-4 bg-red-500 rounded-full mt-1 mr-3"></div>
              <div>
                <strong>MISSING (Red):</strong> Additive pricing structure (₹/kg), Dosage by application (% by weight) - CRITICAL BLOCKERS
              </div>
            </div>
          </div>
        </section>

        {/* Business Impact */}
        <section className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-200">
          <h3 className="text-xl font-bold text-blue-900 mb-3">💡 Why This Matters</h3>
          <p className="text-blue-800 mb-3">
            HD-G-PE targets the ₹150 Cr+ polymer processing market. An accurate ROI calculator is essential for:
          </p>
          <ul className="space-y-2 text-sm text-blue-900 ml-6 list-disc">
            <li>Demonstrating ROI through scrap reduction and quality improvements (dual value stream)</li>
            <li>Providing application-specific recommendations for injection molding, blow molding, extrusion, etc.</li>
            <li>Showing volume-based pricing tiers to incentivize larger orders</li>
            <li>Calculating payback period (typically 6-12 months based on scrap savings alone)</li>
            <li>Building trust with polymer manufacturers through transparent cost-benefit analysis</li>
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
          <h3 className="text-2xl font-bold text-red-900 mb-4">URGENT: Pricing & Dosage Data Needed</h3>
          <p className="text-red-700 mb-6">
            The HD-G-PE calculator cannot provide accurate ROI estimates without additive pricing (₹/kg) and application-specific dosage recommendations.
          </p>
          <Link
            to="/submit"
            className="inline-block px-8 py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-all shadow-lg"
          >
            Submit HD-G-PE Data Now
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

export default HDGPE;

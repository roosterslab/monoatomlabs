import { useState } from 'react';
import { motion } from 'framer-motion';

const HDGPEForm = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    // CRITICAL: Additive Pricing
    basePrice: '',
    volumeTier1: '',
    volumeTier1Price: '',
    volumeTier2: '',
    volumeTier2Price: '',
    volumeTier3: '',
    volumeTier3Price: '',

    // CRITICAL: Dosage Recommendations
    injectionMoldingDosage: '',
    blowMoldingDosage: '',
    extrusionDosage: '',
    filmProductionDosage: '',
    generalPurposeDosage: '',

    // Performance Metrics
    scrapReductionMin: '',
    scrapReductionMax: '',
    warrantyClaimsReduction: '',

    // Submitter Information
    submitterName: '',
    department: '',
    email: '',
    submissionDate: new Date().toISOString().split('T')[0],
    additionalNotes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg p-8 border border-cyan-200"
    >
      <div className="mb-6">
        <div className="inline-block px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full mb-3">
          🚨 2 CRITICAL ITEMS
        </div>
        <h2 className="text-2xl font-bold text-cyan-700 mb-2">HD-G-PE Data Submission</h2>
        <p className="text-gray-600">
          We urgently need pricing and dosage data to complete ROI calculations.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* CRITICAL: Additive Pricing */}
        <div className="bg-red-50 p-6 rounded-lg border-2 border-red-300">
          <div className="flex items-start mb-4">
            <span className="text-2xl mr-2">🚨</span>
            <div>
              <h3 className="font-bold text-red-900 mb-1">CRITICAL: Additive Pricing Structure</h3>
              <p className="text-sm text-red-700">
                Without this data, the HD-G-PE calculator cannot provide accurate cost analysis.
              </p>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Base Price (₹/kg) *
            </label>
            <input
              type="number"
              name="basePrice"
              value={formData.basePrice}
              onChange={handleChange}
              required
              min="0"
              step="0.01"
              placeholder="e.g., 450"
              className="w-full px-4 py-2 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-1">Price for orders below volume discount threshold</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Tier 1 Volume (kg)
              </label>
              <input
                type="number"
                name="volumeTier1"
                value={formData.volumeTier1}
                onChange={handleChange}
                min="0"
                step="1"
                placeholder="e.g., 1000"
                className="w-full px-4 py-2 border border-cyan-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Tier 1 Price (₹/kg)
              </label>
              <input
                type="number"
                name="volumeTier1Price"
                value={formData.volumeTier1Price}
                onChange={handleChange}
                min="0"
                step="0.01"
                placeholder="e.g., 425"
                className="w-full px-4 py-2 border border-cyan-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Tier 2 Volume (kg)
              </label>
              <input
                type="number"
                name="volumeTier2"
                value={formData.volumeTier2}
                onChange={handleChange}
                min="0"
                step="1"
                placeholder="e.g., 5000"
                className="w-full px-4 py-2 border border-cyan-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Tier 2 Price (₹/kg)
              </label>
              <input
                type="number"
                name="volumeTier2Price"
                value={formData.volumeTier2Price}
                onChange={handleChange}
                min="0"
                step="0.01"
                placeholder="e.g., 400"
                className="w-full px-4 py-2 border border-cyan-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Tier 3 Volume (kg)
              </label>
              <input
                type="number"
                name="volumeTier3"
                value={formData.volumeTier3}
                onChange={handleChange}
                min="0"
                step="1"
                placeholder="e.g., 10000"
                className="w-full px-4 py-2 border border-cyan-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Tier 3 Price (₹/kg)
              </label>
              <input
                type="number"
                name="volumeTier3Price"
                value={formData.volumeTier3Price}
                onChange={handleChange}
                min="0"
                step="0.01"
                placeholder="e.g., 375"
                className="w-full px-4 py-2 border border-cyan-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* CRITICAL: Dosage Recommendations */}
        <div className="bg-red-50 p-6 rounded-lg border-2 border-red-300">
          <div className="flex items-start mb-4">
            <span className="text-2xl mr-2">🚨</span>
            <div>
              <h3 className="font-bold text-red-900 mb-1">CRITICAL: Dosage by Application</h3>
              <p className="text-sm text-red-700">
                Application-specific dosages are essential for accurate ROI calculations.
              </p>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Injection Molding Dosage (% by weight) *
            </label>
            <input
              type="number"
              name="injectionMoldingDosage"
              value={formData.injectionMoldingDosage}
              onChange={handleChange}
              required
              min="0"
              max="100"
              step="0.01"
              placeholder="e.g., 0.5"
              className="w-full px-4 py-2 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Blow Molding Dosage (% by weight) *
            </label>
            <input
              type="number"
              name="blowMoldingDosage"
              value={formData.blowMoldingDosage}
              onChange={handleChange}
              required
              min="0"
              max="100"
              step="0.01"
              placeholder="e.g., 0.3"
              className="w-full px-4 py-2 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Extrusion Dosage (% by weight) *
            </label>
            <input
              type="number"
              name="extrusionDosage"
              value={formData.extrusionDosage}
              onChange={handleChange}
              required
              min="0"
              max="100"
              step="0.01"
              placeholder="e.g., 0.4"
              className="w-full px-4 py-2 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Film Production Dosage (% by weight)
            </label>
            <input
              type="number"
              name="filmProductionDosage"
              value={formData.filmProductionDosage}
              onChange={handleChange}
              min="0"
              max="100"
              step="0.01"
              placeholder="e.g., 0.2"
              className="w-full px-4 py-2 border border-cyan-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              General Purpose Dosage (% by weight)
            </label>
            <input
              type="number"
              name="generalPurposeDosage"
              value={formData.generalPurposeDosage}
              onChange={handleChange}
              min="0"
              max="100"
              step="0.01"
              placeholder="e.g., 0.5"
              className="w-full px-4 py-2 border border-cyan-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-cyan-50 p-6 rounded-lg border border-cyan-200">
          <h3 className="font-bold text-cyan-900 mb-4">Performance Metrics (Optional)</h3>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Scrap Reduction - Minimum (%)
            </label>
            <input
              type="number"
              name="scrapReductionMin"
              value={formData.scrapReductionMin}
              onChange={handleChange}
              min="0"
              max="100"
              step="0.1"
              placeholder="e.g., 15"
              className="w-full px-4 py-2 border border-cyan-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Scrap Reduction - Maximum (%)
            </label>
            <input
              type="number"
              name="scrapReductionMax"
              value={formData.scrapReductionMax}
              onChange={handleChange}
              min="0"
              max="100"
              step="0.1"
              placeholder="e.g., 25"
              className="w-full px-4 py-2 border border-cyan-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Warranty Claims Reduction (%)
            </label>
            <input
              type="number"
              name="warrantyClaimsReduction"
              value={formData.warrantyClaimsReduction}
              onChange={handleChange}
              min="0"
              max="100"
              step="0.1"
              placeholder="e.g., 20"
              className="w-full px-4 py-2 border border-cyan-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Submitter Information */}
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-4">Submitter Information</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Your Name *
              </label>
              <input
                type="text"
                name="submitterName"
                value={formData.submitterName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Department *
              </label>
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
                placeholder="e.g., Pricing & Commercial"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Date *
              </label>
              <input
                type="date"
                name="submissionDate"
                value={formData.submissionDate}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Additional Notes (Optional)
            </label>
            <textarea
              name="additionalNotes"
              value={formData.additionalNotes}
              onChange={handleChange}
              rows="3"
              placeholder="Any additional context, test data sources, or application-specific variations..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            className="flex-1 px-6 py-3 bg-cyan-600 text-white font-bold rounded-lg hover:bg-cyan-700 transition-all shadow-lg"
          >
            Download Data File
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-all"
          >
            Cancel
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default HDGPEForm;

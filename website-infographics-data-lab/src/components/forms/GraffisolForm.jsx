import { useState } from 'react';
import { motion } from 'framer-motion';

const GraffisolForm = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    // CRITICAL: Installed Coating Cost Structure
    coatingCostPerKW: '',
    laborCostPerKW: '',
    materialCostPerKW: '',
    installationTimePerKW: '',
    minimumOrderSize: '',
    volumeDiscountTiers: '',

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
      className="bg-white rounded-xl shadow-lg p-8 border border-amber-200"
    >
      <div className="mb-6">
        <div className="inline-block px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full mb-3">
          🚨 CRITICAL DATA
        </div>
        <h2 className="text-2xl font-bold text-amber-700 mb-2">Graffisol Data Submission</h2>
        <p className="text-gray-600">
          We urgently need installed coating cost structure to complete ROI calculations.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Installed Coating Cost Structure */}
        <div className="bg-red-50 p-6 rounded-lg border-2 border-red-300">
          <div className="flex items-start mb-4">
            <span className="text-2xl mr-2">🚨</span>
            <div>
              <h3 className="font-bold text-red-900 mb-1">CRITICAL: Installed Coating Cost</h3>
              <p className="text-sm text-red-700">
                Without this data, the Graffisol calculator cannot provide accurate ROI estimates.
              </p>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Total Installed Cost per kW (₹/kW) *
            </label>
            <input
              type="number"
              name="coatingCostPerKW"
              value={formData.coatingCostPerKW}
              onChange={handleChange}
              required
              min="0"
              step="0.01"
              placeholder="e.g., 2500"
              className="w-full px-4 py-2 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-1">Total cost including material + labor</p>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Material Cost per kW (₹/kW) *
            </label>
            <input
              type="number"
              name="materialCostPerKW"
              value={formData.materialCostPerKW}
              onChange={handleChange}
              required
              min="0"
              step="0.01"
              placeholder="e.g., 1800"
              className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Labor Cost per kW (₹/kW) *
            </label>
            <input
              type="number"
              name="laborCostPerKW"
              value={formData.laborCostPerKW}
              onChange={handleChange}
              required
              min="0"
              step="0.01"
              placeholder="e.g., 700"
              className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Installation Time per kW (hours)
            </label>
            <input
              type="number"
              name="installationTimePerKW"
              value={formData.installationTimePerKW}
              onChange={handleChange}
              min="0"
              step="0.1"
              placeholder="e.g., 0.5"
              className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Pricing Structure */}
        <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
          <h3 className="font-bold text-amber-900 mb-4">Pricing Structure Details</h3>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Minimum Order Size (kW)
            </label>
            <input
              type="number"
              name="minimumOrderSize"
              value={formData.minimumOrderSize}
              onChange={handleChange}
              min="0"
              step="1"
              placeholder="e.g., 100"
              className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Volume Discount Tiers (Optional)
            </label>
            <textarea
              name="volumeDiscountTiers"
              value={formData.volumeDiscountTiers}
              onChange={handleChange}
              rows="3"
              placeholder="e.g., 100-500 kW: 5% off, 500-1000 kW: 10% off, 1000+ kW: 15% off"
              className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
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
                placeholder="e.g., Sales Operations"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
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
              placeholder="Any additional context, sources, or regional variations..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            className="flex-1 px-6 py-3 bg-amber-600 text-white font-bold rounded-lg hover:bg-amber-700 transition-all shadow-lg"
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

export default GraffisolForm;

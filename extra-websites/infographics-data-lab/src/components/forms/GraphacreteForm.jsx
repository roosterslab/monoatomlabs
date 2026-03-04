import { useState } from 'react';
import { motion } from 'framer-motion';

const GraphacreteForm = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    // Cement Content Data
    m30CementContent: '',
    m50CementContent: '',
    cementPricePerKg: '',

    // Dosage Range Data
    minDosage: '',
    maxDosage: '',
    recommendedDosage: '',
    dosageNotes: '',

    // Application-Specific Data
    foundationDosage: '',
    slabDosage: '',
    columnBeamDosage: '',

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
      className="bg-white rounded-xl shadow-lg p-8 border border-teal-200"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-teal-700 mb-2">Graphacrete Data Submission</h2>
        <p className="text-gray-600">
          We need cement content and dosage data to enhance our M30 vs M50 comparison calculator.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Cement Content Data */}
        <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
          <h3 className="font-bold text-teal-900 mb-4">Cement Content by Grade</h3>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              M30 Cement Content (kg/m³) *
            </label>
            <input
              type="number"
              name="m30CementContent"
              value={formData.m30CementContent}
              onChange={handleChange}
              required
              min="0"
              step="0.1"
              placeholder="e.g., 320"
              className="w-full px-4 py-2 border border-teal-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-1">Standard cement content for M30 concrete</p>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              M50 Cement Content (kg/m³) *
            </label>
            <input
              type="number"
              name="m50CementContent"
              value={formData.m50CementContent}
              onChange={handleChange}
              required
              min="0"
              step="0.1"
              placeholder="e.g., 450"
              className="w-full px-4 py-2 border border-teal-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-1">Standard cement content for M50 concrete</p>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Current Cement Price (₹/kg)
            </label>
            <input
              type="number"
              name="cementPricePerKg"
              value={formData.cementPricePerKg}
              onChange={handleChange}
              min="0"
              step="0.01"
              placeholder="e.g., 8.5"
              className="w-full px-4 py-2 border border-teal-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Dosage Range Data */}
        <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
          <h3 className="font-bold text-teal-900 mb-4">Graphacrete Dosage Range</h3>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Minimum Dosage (L/m³) *
            </label>
            <input
              type="number"
              name="minDosage"
              value={formData.minDosage}
              onChange={handleChange}
              required
              min="0"
              step="0.1"
              placeholder="e.g., 1.5"
              className="w-full px-4 py-2 border border-teal-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Maximum Dosage (L/m³) *
            </label>
            <input
              type="number"
              name="maxDosage"
              value={formData.maxDosage}
              onChange={handleChange}
              required
              min="0"
              step="0.1"
              placeholder="e.g., 3.0"
              className="w-full px-4 py-2 border border-teal-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Recommended Standard Dosage (L/m³) *
            </label>
            <input
              type="number"
              name="recommendedDosage"
              value={formData.recommendedDosage}
              onChange={handleChange}
              required
              min="0"
              step="0.1"
              placeholder="e.g., 2.0"
              className="w-full px-4 py-2 border border-teal-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Dosage Guidelines/Notes
            </label>
            <textarea
              name="dosageNotes"
              value={formData.dosageNotes}
              onChange={handleChange}
              rows="2"
              placeholder="e.g., Use higher dosage for high-stress applications"
              className="w-full px-4 py-2 border border-teal-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Application-Specific Dosage */}
        <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
          <h3 className="font-bold text-teal-900 mb-4">Application-Specific Dosage (Optional)</h3>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Foundation Dosage (L/m³)
            </label>
            <input
              type="number"
              name="foundationDosage"
              value={formData.foundationDosage}
              onChange={handleChange}
              min="0"
              step="0.1"
              placeholder="e.g., 2.5"
              className="w-full px-4 py-2 border border-teal-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Slab Dosage (L/m³)
            </label>
            <input
              type="number"
              name="slabDosage"
              value={formData.slabDosage}
              onChange={handleChange}
              min="0"
              step="0.1"
              placeholder="e.g., 2.0"
              className="w-full px-4 py-2 border border-teal-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Column & Beam Dosage (L/m³)
            </label>
            <input
              type="number"
              name="columnBeamDosage"
              value={formData.columnBeamDosage}
              onChange={handleChange}
              min="0"
              step="0.1"
              placeholder="e.g., 1.5"
              className="w-full px-4 py-2 border border-teal-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
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
                placeholder="e.g., Technical Services"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
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
              placeholder="Any additional context, regional variations, or test data sources..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            className="flex-1 px-6 py-3 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-700 transition-all shadow-lg"
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

export default GraphacreteForm;

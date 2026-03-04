import { useState } from 'react';
import { motion } from 'framer-motion';

const CerapheneForm = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    // Competitor Durability Data
    premiumCompetitor: '',
    premiumDurability: '',
    midRangeCompetitor: '',
    midRangeDurability: '',
    economyCompetitor: '',
    economyDurability: '',

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
      className="bg-white rounded-xl shadow-lg p-8 border border-purple-200"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-purple-700 mb-2">Ceraphene Data Submission</h2>
        <p className="text-gray-600">
          We need competitor durability data to strengthen our TCO calculations.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Premium Tier Competitor */}
        <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
          <h3 className="font-bold text-purple-900 mb-4">Premium Tier Competitor</h3>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Competitor Name *
            </label>
            <input
              type="text"
              name="premiumCompetitor"
              value={formData.premiumCompetitor}
              onChange={handleChange}
              required
              placeholder="e.g., 3M Ceramic Pro"
              className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Durability (years) *
            </label>
            <input
              type="number"
              name="premiumDurability"
              value={formData.premiumDurability}
              onChange={handleChange}
              required
              min="0"
              step="0.5"
              placeholder="e.g., 3.5"
              className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Mid-Range Tier Competitor */}
        <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
          <h3 className="font-bold text-purple-900 mb-4">Mid-Range Tier Competitor</h3>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Competitor Name *
            </label>
            <input
              type="text"
              name="midRangeCompetitor"
              value={formData.midRangeCompetitor}
              onChange={handleChange}
              required
              placeholder="e.g., Teflon Shield"
              className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Durability (years) *
            </label>
            <input
              type="number"
              name="midRangeDurability"
              value={formData.midRangeDurability}
              onChange={handleChange}
              required
              min="0"
              step="0.5"
              placeholder="e.g., 2.0"
              className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Economy Tier Competitor */}
        <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
          <h3 className="font-bold text-purple-900 mb-4">Economy Tier Competitor</h3>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Competitor Name *
            </label>
            <input
              type="text"
              name="economyCompetitor"
              value={formData.economyCompetitor}
              onChange={handleChange}
              required
              placeholder="e.g., Wax Polish"
              className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Durability (months) *
            </label>
            <input
              type="number"
              name="economyDurability"
              value={formData.economyDurability}
              onChange={handleChange}
              required
              min="0"
              step="0.5"
              placeholder="e.g., 6"
              className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                placeholder="e.g., Product Marketing"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
              placeholder="Any additional context or sources..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            className="flex-1 px-6 py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition-all shadow-lg"
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

export default CerapheneForm;

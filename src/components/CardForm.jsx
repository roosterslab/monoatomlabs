import React from 'react';
import { User, Briefcase, Building2, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Github, Plus, X, CreditCard } from 'lucide-react';

const CardForm = ({ data, onChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
        <User size={24} className="text-primary-500" />
        Card Information
      </h2>

      {/* Personal Information */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-300 mb-4 flex items-center gap-2">
          <User size={18} />
          Personal Information
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
              placeholder="e.g., Dr. John Doe"
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Professional Title *
            </label>
            <input
              type="text"
              name="title"
              value={data.title}
              onChange={handleChange}
              placeholder="e.g., Chief Technology Officer"
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
              required
            />
          </div>
        </div>
      </div>

      {/* Card Style Options */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-300 mb-4 flex items-center gap-2">
          <CreditCard size={18} />
          Card Style
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Border Style
            </label>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => onChange({ ...data, borderStyle: 'rounded' })}
                className={`flex-1 px-4 py-3 rounded-lg border-2 transition-all ${
                  data.borderStyle === 'rounded'
                    ? 'border-primary-500 bg-primary-500/10 text-white'
                    : 'border-gray-700 bg-gray-800/50 text-gray-400 hover:border-gray-600'
                }`}
              >
                <div className="text-sm font-medium">Rounded</div>
                <div className="text-xs opacity-75 mt-1">Soft edges</div>
              </button>
              <button
                type="button"
                onClick={() => onChange({ ...data, borderStyle: 'sharp' })}
                className={`flex-1 px-4 py-3 rounded-lg border-2 transition-all ${
                  data.borderStyle === 'sharp'
                    ? 'border-primary-500 bg-primary-500/10 text-white'
                    : 'border-gray-700 bg-gray-800/50 text-gray-400 hover:border-gray-600'
                }`}
              >
                <div className="text-sm font-medium">Sharp</div>
                <div className="text-xs opacity-75 mt-1">Square corners</div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Company Information */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-300 mb-4 flex items-center gap-2">
          <Building2 size={18} />
          Company Information
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Company Name - Part 1 *
            </label>
            <input
              type="text"
              name="companyPart1"
              value={data.companyPart1 || ''}
              onChange={handleChange}
              placeholder="e.g., MONOATOM"
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Company Name - Part 2 *
            </label>
            <input
              type="text"
              name="companyPart2"
              value={data.companyPart2 || ''}
              onChange={handleChange}
              placeholder="e.g., LABS"
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Website
            </label>
            <div className="relative">
              <Globe size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="url"
                name="website"
                value={data.website}
                onChange={handleChange}
                placeholder="www.example.com"
                className="w-full pl-11 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-300 mb-4 flex items-center gap-2">
          <Phone size={18} />
          Contact Information
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Phone Number *
            </label>
            <div className="relative">
              <Phone size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="tel"
                name="phone"
                value={data.phone}
                onChange={handleChange}
                placeholder="+1 (555) 123-4567"
                className="w-full pl-11 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Email Address *
            </label>
            <div className="relative">
              <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                placeholder="john.doe@example.com"
                className="w-full pl-11 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Address
            </label>
            <div className="relative">
              <MapPin size={18} className="absolute left-3 top-3 text-gray-500" />
              <textarea
                name="address"
                value={data.address}
                onChange={handleChange}
                placeholder="123 Innovation Drive, Tech Valley, CA 94000"
                rows="2"
                className="w-full pl-11 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition resize-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div>
        <h3 className="text-lg font-semibold text-gray-300 mb-4">Social Media Links</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              LinkedIn
            </label>
            <div className="relative">
              <Linkedin size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="url"
                name="linkedin"
                value={data.linkedin}
                onChange={handleChange}
                placeholder="https://linkedin.com/in/username"
                className="w-full pl-11 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Twitter / X
            </label>
            <div className="relative">
              <Twitter size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="url"
                name="twitter"
                value={data.twitter}
                onChange={handleChange}
                placeholder="https://twitter.com/username"
                className="w-full pl-11 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              GitHub
            </label>
            <div className="relative">
              <Github size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="url"
                name="github"
                value={data.github}
                onChange={handleChange}
                placeholder="https://github.com/username"
                className="w-full pl-11 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Recognition Section */}
      <div className="mt-8 pt-6 border-t border-gray-700">
        <div className="mb-4">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="showRecognition"
              checked={data.showRecognition || false}
              onChange={(e) => onChange({ ...data, showRecognition: e.target.checked })}
              className="w-4 h-4 text-primary-500 bg-gray-800 border-gray-700 rounded focus:ring-primary-500"
            />
            <span className="text-sm font-medium text-gray-300">
              Show Recognition Awards
            </span>
          </label>
        </div>

        {data.showRecognition && (
          <div className="space-y-4 ml-7">
            <p className="text-xs text-gray-500 mb-3">
              Add recognition badges (awards, certifications, achievements)
            </p>
            {(data.recognitions || []).map((recognition, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  value={recognition}
                  onChange={(e) => {
                    const newRecognitions = [...(data.recognitions || [])];
                    newRecognitions[index] = e.target.value;
                    onChange({ ...data, recognitions: newRecognitions });
                  }}
                  placeholder="e.g., 6× President Awardee"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                />
                <button
                  type="button"
                  onClick={() => {
                    const newRecognitions = (data.recognitions || []).filter((_, i) => i !== index);
                    onChange({ ...data, recognitions: newRecognitions });
                  }}
                  className="px-3 py-3 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 transition-colors"
                  title="Remove badge"
                >
                  <X size={18} />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => {
                const newRecognitions = [...(data.recognitions || []), ''];
                onChange({ ...data, recognitions: newRecognitions });
              }}
              className="flex items-center gap-2 px-4 py-3 bg-primary-500/10 hover:bg-primary-500/20 border border-primary-500/30 rounded-lg text-primary-400 transition-colors w-full justify-center"
            >
              <Plus size={18} />
              Add Recognition Badge
            </button>
          </div>
        )}
      </div>

      <p className="mt-6 text-sm text-gray-500 text-center">
        * Required fields
      </p>
    </div>
  );
};

export default CardForm;

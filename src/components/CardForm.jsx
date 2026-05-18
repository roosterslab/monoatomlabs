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
          {/* Font Sizes */}
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">Front Card Fonts</p>
            <div className="space-y-3">
              {[
                { label: 'Company Name', key: 'fsCompany' },
                { label: 'Tagline', key: 'fsTagline' },
              ].map(({ label, key }) => (
                <div key={key}>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-xs font-medium text-gray-400">{label}</label>
                    <span className="text-xs text-primary-400 font-mono">{Math.round((data[key] || 1) * 100)}%</span>
                  </div>
                  <input
                    type="range" min="0.6" max="1.5" step="0.05"
                    value={data[key] || 1}
                    onChange={(e) => onChange({ ...data, [key]: parseFloat(e.target.value) })}
                    className="w-full h-1.5 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary-500"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">Back Card Fonts</p>
            <div className="space-y-3">
              {[
                { label: 'Person Name', key: 'fsName' },
                { label: 'Title / Role', key: 'fsRole' },
                { label: 'Contact Values', key: 'fsContact' },
                { label: 'Field Labels', key: 'fsLabels' },
                { label: 'Badges & QR Text', key: 'fsBadges' },
              ].map(({ label, key }) => (
                <div key={key}>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-xs font-medium text-gray-400">{label}</label>
                    <span className="text-xs text-primary-400 font-mono">{Math.round((data[key] || 1) * 100)}%</span>
                  </div>
                  <input
                    type="range" min="0.6" max="1.5" step="0.05"
                    value={data[key] || 1}
                    onChange={(e) => onChange({ ...data, [key]: parseFloat(e.target.value) })}
                    className="w-full h-1.5 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary-500"
                  />
                </div>
              ))}
            </div>
            <div className="mt-3">
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs font-medium text-gray-400">Contact Letter Spacing</label>
                <span className="text-xs text-primary-400 font-mono">{(data.lsContact ?? 0).toFixed(2)}em</span>
              </div>
              <input
                type="range" min="0" max="0.3" step="0.01"
                value={data.lsContact ?? 0}
                onChange={(e) => onChange({ ...data, lsContact: parseFloat(e.target.value) })}
                className="w-full h-1.5 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary-500"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Tight</span>
                <span>Wide</span>
              </div>
            </div>
          </div>

          {/* Padding Sliders */}
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">Spacing</p>
            <div className="space-y-3">
              {[
                { label: 'Front — Top / Bottom', key: 'padFrontV', min: 0.2, max: 2.5, def: 2.5  },
                { label: 'Front — Left / Right',  key: 'padFrontH', min: 0.2, max: 3,   def: 2.4  },
                { label: 'Back — Top / Bottom',  key: 'padBackV',  min: 0.2, max: 2.5, def: 1.8  },
                { label: 'Back — Left / Right',  key: 'padBackH',  min: 0.2, max: 3,   def: 1.6  },
              ].map(({ label, key, min, max, def }) => (
                <div key={key}>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-xs font-medium text-gray-400">{label}</label>
                    <span className="text-xs text-primary-400 font-mono">{(data[key] ?? def).toFixed(2)}rem</span>
                  </div>
                  <input
                    type="range" min={min} max={max} step="0.05"
                    value={data[key] ?? def}
                    onChange={(e) => onChange({ ...data, [key]: parseFloat(e.target.value) })}
                    className="w-full h-1.5 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary-500"
                  />
                </div>
              ))}

              {/* Back card structural sliders */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs font-medium text-gray-400">Back — Text / QR Gap</label>
                  <span className="text-xs text-primary-400 font-mono">{(data.sectionGap ?? 0)}px</span>
                </div>
                <input
                  type="range" min="0" max="32" step="1"
                  value={data.sectionGap ?? 0}
                  onChange={(e) => onChange({ ...data, sectionGap: parseInt(e.target.value) })}
                  className="w-full h-1.5 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary-500"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs font-medium text-gray-400">Back — Left Bar Thickness</label>
                  <span className="text-xs text-primary-400 font-mono">{(data.sideBarWidth ?? 12)}px</span>
                </div>
                <input
                  type="range" min="0" max="32" step="1"
                  value={data.sideBarWidth ?? 12}
                  onChange={(e) => onChange({ ...data, sideBarWidth: parseInt(e.target.value) })}
                  className="w-full h-1.5 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary-500"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs font-medium text-gray-400">Back — QR Right Margin</label>
                  <span className="text-xs text-primary-400 font-mono">{(data.qrPadRight ?? 0.75).toFixed(2)}rem</span>
                </div>
                <input
                  type="range" min="0" max="3" step="0.05"
                  value={data.qrPadRight ?? 0.75}
                  onChange={(e) => onChange({ ...data, qrPadRight: parseFloat(e.target.value) })}
                  className="w-full h-1.5 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary-500"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Flush</span>
                  <span>Pull In</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Logo Lightness
              <span className="ml-2 text-primary-400 font-mono">{Math.round((data.logoOpacity ?? 0.8) * 100)}%</span>
            </label>
            <input
              type="range"
              min="0.05"
              max="1"
              step="0.05"
              value={data.logoOpacity ?? 0.8}
              onChange={(e) => onChange({ ...data, logoOpacity: parseFloat(e.target.value) })}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary-500"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Subtle</span>
              <span>Bold</span>
            </div>
          </div>

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

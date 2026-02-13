import React, { useState, useEffect, useMemo } from 'react';
import debounce from 'lodash.debounce';
import CardForm from './components/CardForm';
import CardPreview from './components/CardPreview';
import ExportPanel from './components/ExportPanel';
import { CreditCard } from 'lucide-react';

function App() {
  // Initialize form data with Sushant's information
  const [formData, setFormData] = useState({
    name: 'SUSHANTH PAATNAIK',
    title: 'CO-FOUNDER & CEO',
    company: 'MONOATOM LABS',
    tagline: 'Advanced Materials for 4th Industrial Revolution',
    phone: '+91 8511976999',
    email: 'ceo@monoatomlabs.com',
    website: 'www.monoatomlabs.com',
    address: '3rd Floor, iHub, Ahmedabad, Gujarat',
    linkedin: '',
    twitter: '',
    github: '',
    showRecognition: true,
    recognition1: '6× President Awardee',
    recognition2: 'MIT TR-35',
    recognition3: '',
  });

  // Clear localStorage to always show Sushant's data on load
  useEffect(() => {
    localStorage.removeItem('cardMakerDraft');
  }, []);

  // Debounced save to localStorage
  const debouncedSave = useMemo(
    () =>
      debounce((data) => {
        localStorage.setItem('cardMakerDraft', JSON.stringify(data));
      }, 500),
    []
  );

  // Save draft whenever form data changes
  useEffect(() => {
    debouncedSave(formData);
  }, [formData, debouncedSave]);

  // Handle form data changes
  const handleFormChange = (newData) => {
    setFormData(newData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pb-32">
      {/* Header */}
      <header className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
              <CreditCard size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Visiting Card Maker</h1>
              <p className="text-gray-400 text-sm">Create professional business cards in seconds</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Form */}
          <div>
            <CardForm data={formData} onChange={handleFormChange} />
          </div>

          {/* Right Column - Preview */}
          <div>
            <CardPreview data={formData} />
          </div>
        </div>
      </main>

      {/* Export Panel - Fixed at bottom */}
      <ExportPanel data={formData} />
    </div>
  );
}

export default App;

import React, { useState, useEffect, useRef } from 'react';
import CardForm from './components/CardForm';
import CardPreview from './components/CardPreview';
import ExportPanel from './components/ExportPanel';
import { CreditCard, Save } from 'lucide-react';

const STORAGE_KEY = 'cardMakerDraft';

const DEFAULTS = {
  name: 'SUSHANTH PAATNAIK',
  title: 'CO-FOUNDER & CEO',
  companyPart1: 'MONOATOM',
  companyPart2: 'LABS',
  borderStyle: 'rounded',
  phone: '+91 851 197 6999',
  email: 'ceo@monoatomlabs.com',
  website: 'www.monoatomlabs.com',
  address: '3rd Floor, iHub, Ahmedabad - 380015',
  linkedin: '',
  twitter: '',
  github: '',
  showRecognition: true,
  recognitions: ['6× President Awardee', 'MIT TR-35'],
  logoOpacity: 1,
  fsCompany: 1,
  fsTagline: 0.85,
  fsName: 1,
  fsRole: 1,
  fsContact: 1.2,
  fsLabels: 1.2,
  fsBadges: 1.2,
  padFrontV: 2.5,
  padFrontH: 2.4,
  padBackV: 1.8,
  padBackH: 1.6,
  lsContact: 0,
  sideBarWidth: 12,
  sectionGap: 0,
  qrPadRight: 0.75,
};

function loadSaved() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULTS;
    return { ...DEFAULTS, ...JSON.parse(raw) };
  } catch {
    return DEFAULTS;
  }
}

function App() {
  const [formData, setFormData] = useState(loadSaved);
  const [saveStatus, setSaveStatus] = useState('idle'); // 'idle' | 'saved'
  const [unsaved, setUnsaved] = useState(false);
  const isFirstRender = useRef(true);

  // Mark unsaved when form changes (skip first render)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setUnsaved(true);
    setSaveStatus('idle');
  }, [formData]);

  const doSave = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    setUnsaved(false);
    setSaveStatus('saved');
    setTimeout(() => setSaveStatus('idle'), 2000);
  };

  // Ctrl+S / Cmd+S keyboard shortcut
  useEffect(() => {
    const handler = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        doSave();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [formData]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pb-32">
      {/* Header */}
      <header className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <CreditCard size={20} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white leading-tight">Visiting Card Maker</h1>
                <p className="text-gray-500 text-xs">Monoatom Labs</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {unsaved && saveStatus === 'idle' && (
                <span className="text-xs text-amber-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block"></span>
                  Unsaved changes
                </span>
              )}
              <button
                onClick={doSave}
                title="Save (Ctrl+S)"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  saveStatus === 'saved'
                    ? 'bg-green-600 text-white'
                    : unsaved
                    ? 'bg-primary-600 hover:bg-primary-500 text-white'
                    : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                }`}
              >
                <Save size={15} />
                {saveStatus === 'saved' ? 'Saved!' : 'Save'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <CardForm data={formData} onChange={setFormData} />
          </div>
          <div>
            <CardPreview data={formData} />
          </div>
        </div>
      </main>

      <ExportPanel data={formData} />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { Menu, X, ChevronDown, ChevronRight, Home } from 'lucide-react';
import { infographicCatalog } from '../data/infographics';

const Catalog = () => {
  const [selectedInfographic, setSelectedInfographic] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState(['all']);

  const categories = [...new Set(infographicCatalog.map(item => item.category))];

  const toggleCategory = (category) => {
    setExpandedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleInfographicClick = (infographic) => {
    setSelectedInfographic(infographic);
    setSidebarOpen(false);
  };

  const getCategoryInfographics = (category) => {
    return infographicCatalog.filter(item => item.category === category);
  };

  const InfographicItem = ({ infographic, isActive }) => {
    const Icon = infographic.icon;
    return (
      <button
        onClick={() => handleInfographicClick(infographic)}
        className={`w-full text-left px-4 py-3 rounded-lg transition-all group ${
          isActive
            ? 'bg-brand-500 text-white shadow-md'
            : 'hover:bg-neutral-100'
        }`}
      >
        <div className="flex items-start gap-3">
          <div className="text-2xl flex-shrink-0">{infographic.thumbnail}</div>
          <div className="flex-grow min-w-0">
            <div className={`font-semibold text-sm mb-1 line-clamp-2 ${
              isActive ? 'text-white' : 'text-neutral-900'
            }`}>
              {infographic.name}
            </div>
            <div className="flex items-center gap-2">
              <Icon className={`w-3 h-3 flex-shrink-0 ${
                isActive ? 'text-white/70' : 'text-neutral-400'
              }`} />
              {infographic.impact === 'HIGH' && (
                <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                  isActive
                    ? 'bg-white/20 text-white'
                    : 'bg-brand-100 text-brand-700'
                }`}>
                  ⭐
                </span>
              )}
            </div>
          </div>
        </div>
      </button>
    );
  };

  const CategorySection = ({ category }) => {
    const isExpanded = expandedCategories.includes(category);
    const categoryItems = getCategoryInfographics(category);

    return (
      <div className="mb-2">
        <button
          onClick={() => toggleCategory(category)}
          className="w-full flex items-center justify-between px-4 py-2 hover:bg-neutral-100 rounded-lg transition-all group"
        >
          <div className="flex items-center gap-2">
            {isExpanded ? (
              <ChevronDown className="w-4 h-4 text-neutral-500" />
            ) : (
              <ChevronRight className="w-4 h-4 text-neutral-500" />
            )}
            <span className="font-semibold text-sm text-neutral-900">{category}</span>
          </div>
          <span className="text-xs px-2 py-1 bg-neutral-200 text-neutral-600 rounded-full font-medium">
            {categoryItems.length}
          </span>
        </button>

        {isExpanded && (
          <div className="mt-1 space-y-1 pl-2">
            {categoryItems.map((infographic) => (
              <InfographicItem
                key={infographic.id}
                infographic={infographic}
                isActive={selectedInfographic?.id === infographic.id}
              />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Mobile Header */}
      <div className="lg:hidden bg-black text-white py-4 px-6 sticky top-0 z-50">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-display font-bold">Monoatom Labs</h1>
            <p className="text-xs text-neutral-400">Infographics Lab</p>
          </div>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 bg-neutral-800 rounded-lg"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <div className="flex">
        {/* Left Sidebar - Infographics List */}
        <aside
          className={`fixed lg:sticky top-0 left-0 h-screen w-80 bg-white border-r border-neutral-200 overflow-y-auto z-40 transition-transform duration-300 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          }`}
        >
          {/* Sidebar Header */}
          <div className="bg-black text-white p-6 sticky top-0 z-10">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-neutral-700 bg-neutral-900/50 backdrop-blur mb-3">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
              <span className="text-xs font-bold text-neutral-300 tracking-wide uppercase">
                Infographics Lab
              </span>
            </div>
            <h1 className="text-2xl font-display font-bold mb-1">
              Monoatom Labs
            </h1>
            <p className="text-xs text-neutral-400">
              {infographicCatalog.length} Visualizations
            </p>
          </div>

          {/* Home Button */}
          <div className="p-4 border-b border-neutral-200">
            <button
              onClick={() => setSelectedInfographic(null)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                !selectedInfographic
                  ? 'bg-brand-500 text-white shadow-md'
                  : 'hover:bg-neutral-100 text-neutral-700'
              }`}
            >
              <Home className="w-5 h-5" />
              <span className="font-semibold">Home</span>
            </button>
          </div>

          {/* Infographics by Category */}
          <div className="p-4">
            <div className="text-xs font-bold text-neutral-500 uppercase tracking-wide mb-3">
              Browse Infographics
            </div>
            <div className="space-y-1">
              {categories.map((category) => (
                <CategorySection key={category} category={category} />
              ))}
            </div>
          </div>

          {/* Footer in Sidebar */}
          <div className="p-4 border-t border-neutral-200 sticky bottom-0 bg-white">
            <div className="text-xs text-neutral-500 leading-relaxed">
              Click any infographic to view it
            </div>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Right Content Area */}
        <main className="flex-1 min-h-screen bg-neutral-50">
          {selectedInfographic ? (
            // Display selected infographic
            <div className="h-screen overflow-y-auto">
              {/* Header bar with infographic name */}
              <div className="bg-white border-b border-neutral-200 px-6 py-4 sticky top-0 z-20 shadow-sm">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setSelectedInfographic(null)}
                    className="lg:hidden p-2 hover:bg-neutral-100 rounded-lg transition-all"
                  >
                    <Home className="w-5 h-5 text-neutral-600" />
                  </button>
                  <div className="flex-grow">
                    <h2 className="text-xl font-display font-bold text-neutral-900">
                      {selectedInfographic.name}
                    </h2>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-neutral-500 font-medium">
                        {selectedInfographic.category}
                      </span>
                      {selectedInfographic.impact === 'HIGH' && (
                        <span className="text-xs px-2 py-0.5 rounded-full font-bold bg-brand-100 text-brand-700">
                          ⭐ HIGH IMPACT
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Render the infographic component */}
              <div className="bg-neutral-50">
                {React.createElement(selectedInfographic.component)}
              </div>
            </div>
          ) : (
            // Welcome/Home screen
            <div className="h-screen overflow-y-auto">
              <div className="bg-gradient-to-br from-black via-neutral-900 to-black text-white py-20 px-12">
                <div className="max-w-4xl mx-auto text-center">
                  <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-neutral-700 bg-neutral-900/50 backdrop-blur mb-6">
                    <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                    <span className="text-xs font-bold text-neutral-300 tracking-wide uppercase">
                      Welcome to Infographics Lab
                    </span>
                  </div>
                  <h1 className="text-6xl font-display font-bold mb-6">
                    Monoatom Labs
                    <br />
                    <span className="text-brand-500">Design Playground</span>
                  </h1>
                  <p className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto">
                    Explore {infographicCatalog.length} interactive visualizations showcasing our products,
                    technology, and impact. Select any infographic from the sidebar to begin.
                  </p>
                  <div className="inline-flex items-center gap-6 text-sm">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-brand-500 mb-1">{infographicCatalog.length}</div>
                      <div className="text-neutral-400">Infographics</div>
                    </div>
                    <div className="h-12 w-px bg-neutral-700"></div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-brand-500 mb-1">{categories.length}</div>
                      <div className="text-neutral-400">Categories</div>
                    </div>
                    <div className="h-12 w-px bg-neutral-700"></div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-brand-500 mb-1">100%</div>
                      <div className="text-neutral-400">Real Data</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Access Categories */}
              <div className="max-w-6xl mx-auto py-12 px-12">
                <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">
                  Browse by Category
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categories.map((category) => {
                    const items = getCategoryInfographics(category);
                    const firstItem = items[0];
                    const Icon = firstItem?.icon;

                    return (
                      <button
                        key={category}
                        onClick={() => {
                          setExpandedCategories([category]);
                          setSidebarOpen(true);
                        }}
                        className="bg-white border-2 border-neutral-200 rounded-xl p-6 hover:border-brand-500 hover:shadow-lg transition-all text-left group"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="text-3xl">{firstItem?.thumbnail || '📊'}</div>
                          {Icon && <Icon className="w-5 h-5 text-neutral-400 group-hover:text-brand-500 transition-colors" />}
                        </div>
                        <h3 className="font-display font-bold text-neutral-900 mb-2 group-hover:text-brand-500 transition-colors">
                          {category}
                        </h3>
                        <p className="text-sm text-neutral-600 mb-3">
                          {items.length} {items.length === 1 ? 'infographic' : 'infographics'}
                        </p>
                        <div className="text-xs text-brand-500 font-semibold group-hover:underline">
                          Explore →
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Footer */}
              <footer className="bg-neutral-900 text-white py-8 px-12 mt-12">
                <div className="max-w-6xl mx-auto text-center">
                  <p className="text-neutral-400 mb-2">
                    Built for Monoatom Labs - Advanced Materials for 4th Industrial Revolution
                  </p>
                  <p className="text-xs text-neutral-600">
                    React 19 • Vite • Tailwind CSS • Framer Motion • Recharts
                  </p>
                </div>
              </footer>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Catalog;

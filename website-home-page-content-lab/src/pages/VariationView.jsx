import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { homePageVariations, categories } from '../data/homePageVariations';
import { ArrowLeft, Star, Menu, X, ChevronRight, Search, Filter, ChevronLeft, SkipForward, Award } from 'lucide-react';

const VariationView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const variation = homePageVariations.find(v => v.id === id);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterMode, setFilterMode] = useState('all'); // 'all' or 'recommended'
  const [viewedVariations, setViewedVariations] = useState(() => {
    const saved = localStorage.getItem('viewedVariations');
    return saved ? JSON.parse(saved) : [];
  });

  // Mark current variation as viewed
  useEffect(() => {
    if (id && !viewedVariations.includes(id)) {
      const updated = [...viewedVariations, id];
      setViewedVariations(updated);
      localStorage.setItem('viewedVariations', JSON.stringify(updated));
    }
  }, [id]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight' && !e.metaKey && !e.ctrlKey) {
        handleNext();
      } else if (e.key === 'ArrowLeft' && !e.metaKey && !e.ctrlKey) {
        handlePrevious();
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [id]);

  if (!variation) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-neutral-900 mb-4">Variation Not Found</h1>
          <Link to="/" className="text-neutral-600 hover:text-neutral-900 underline">
            ← Back to Catalog
          </Link>
        </div>
      </div>
    );
  }

  const VariationComponent = variation.component;

  // Filter variations based on search and filter mode
  const filteredVariations = homePageVariations.filter(v => {
    const matchesSearch = v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         v.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         v.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesFilter = filterMode === 'all' || (filterMode === 'recommended' && v.recommended);
    return matchesSearch && matchesFilter;
  });

  // Group filtered variations by category
  const variationsByCategory = categories.slice(1).reduce((acc, category) => {
    const items = filteredVariations.filter(v => v.category === category);
    if (items.length > 0) {
      acc[category] = items;
    }
    return acc;
  }, {});

  // Navigation helpers
  const currentIndex = homePageVariations.findIndex(v => v.id === id);
  const handleNext = () => {
    if (currentIndex < homePageVariations.length - 1) {
      navigate(`/variation/${homePageVariations[currentIndex + 1].id}`);
    }
  };
  const handlePrevious = () => {
    if (currentIndex > 0) {
      navigate(`/variation/${homePageVariations[currentIndex - 1].id}`);
    }
  };

  const recommendedVariations = homePageVariations.filter(v => v.recommended);
  const viewedCount = viewedVariations.length;
  const totalCount = homePageVariations.length;

  return (
    <div className="h-screen bg-neutral-50 flex overflow-hidden">
      {/* Enhanced Sidebar - Fixed height with independent scroll */}
      <aside className={`${sidebarOpen ? 'w-96' : 'w-0'} transition-all duration-300 bg-white border-r border-neutral-200 flex-shrink-0 overflow-hidden h-full`}>
        <div className="h-full flex flex-col">
          {/* Sidebar Header */}
          <div className="p-4 border-b border-neutral-200 bg-gradient-to-br from-neutral-50 to-white">
            <Link to="/" className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back to Catalog</span>
            </Link>
            <h2 className="font-bold text-neutral-900 text-lg mb-2">All Variations</h2>

            {/* Progress Stats */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="bg-white border border-neutral-200 rounded-lg p-2">
                <div className="text-xs text-neutral-500">Progress</div>
                <div className="text-lg font-bold text-neutral-900">{viewedCount}/{totalCount}</div>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-2">
                <div className="text-xs text-yellow-700">Recommended</div>
                <div className="text-lg font-bold text-yellow-900">{recommendedVariations.length}</div>
              </div>
            </div>

            {/* Search Box */}
            <div className="relative mb-3">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Search variations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => setFilterMode('all')}
                className={`flex-1 px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                  filterMode === 'all'
                    ? 'bg-neutral-900 text-white'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                All ({homePageVariations.length})
              </button>
              <button
                onClick={() => setFilterMode('recommended')}
                className={`flex-1 px-3 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1 ${
                  filterMode === 'recommended'
                    ? 'bg-yellow-500 text-white'
                    : 'bg-yellow-50 text-yellow-700 hover:bg-yellow-100'
                }`}
              >
                <Star className="w-3 h-3" />
                Recommended ({recommendedVariations.length})
              </button>
            </div>
          </div>

          {/* Sidebar Content - Independent scrollable area */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-thin">
            {Object.keys(variationsByCategory).length === 0 ? (
              <div className="p-8 text-center text-neutral-500">
                <Search className="w-8 h-8 mx-auto mb-2 opacity-50" />
                <p className="text-sm">No variations found</p>
              </div>
            ) : (
              Object.entries(variationsByCategory).map(([category, items]) => (
                <div key={category} className="border-b border-neutral-200">
                  <div className="px-4 py-3 bg-neutral-50 sticky top-0 z-10">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-bold text-neutral-700 uppercase tracking-wider">
                        {category}
                      </h3>
                      <span className="text-xs font-bold text-neutral-500 bg-white px-2 py-0.5 rounded-full">
                        {items.length}
                      </span>
                    </div>
                  </div>
                  <div className="py-1">
                    {items.map((item) => {
                      const isViewed = viewedVariations.includes(item.id);
                      const isCurrent = item.id === id;

                      return (
                        <button
                          key={item.id}
                          onClick={() => navigate(`/variation/${item.id}`)}
                          className={`w-full text-left px-4 py-3 hover:bg-neutral-50 transition-colors flex items-start gap-3 group ${
                            isCurrent ? 'bg-blue-50 border-l-4 border-blue-500' : ''
                          } ${isViewed && !isCurrent ? 'opacity-60' : ''}`}
                        >
                          <item.icon className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                            isCurrent ? 'text-blue-600' : 'text-neutral-400 group-hover:text-neutral-600'
                          }`} />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1 flex-wrap">
                              <span className={`text-sm font-medium ${
                                isCurrent ? 'text-blue-900' : 'text-neutral-900'
                              }`}>
                                {item.name}
                              </span>
                              {item.recommended && (
                                <Star className="w-3 h-3 text-yellow-500 fill-yellow-500 flex-shrink-0" />
                              )}
                              {isViewed && !isCurrent && (
                                <span className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full font-bold">
                                  VIEWED
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-neutral-500 line-clamp-2">
                              {item.description}
                            </p>
                          </div>
                          {isCurrent && (
                            <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Keyboard Shortcuts Hint */}
          <div className="p-3 bg-neutral-50 border-t border-neutral-200">
            <div className="text-[10px] text-neutral-500 text-center space-y-1">
              <div>← → Arrow keys to navigate</div>
              <div className="flex items-center justify-center gap-2">
                <kbd className="px-1.5 py-0.5 bg-white border border-neutral-300 rounded text-neutral-700">←</kbd>
                <span>Previous</span>
                <span className="text-neutral-300">•</span>
                <kbd className="px-1.5 py-0.5 bg-white border border-neutral-300 rounded text-neutral-700">→</kbd>
                <span>Next</span>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content - Independent scroll container */}
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
        {/* Enhanced Header - Sticky within main content */}
        <header className="bg-white border-b border-neutral-200 z-40 shadow-sm flex-shrink-0">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
                  title="Toggle sidebar"
                >
                  {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>

                <div>
                  <div className="flex items-center gap-3">
                    <h1 className="text-xl font-bold text-neutral-900">{variation.name}</h1>
                    {variation.recommended && (
                      <div className="flex items-center gap-1 text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full border border-yellow-200">
                        <Star className="w-4 h-4 fill-yellow-600" />
                        <span className="text-xs font-bold">RECOMMENDED</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-3 mt-1">
                    <p className="text-sm text-neutral-500">{variation.category}</p>
                    <span className="text-neutral-300">•</span>
                    <p className="text-xs text-neutral-400">
                      Variation {currentIndex + 1} of {totalCount}
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevious}
                  disabled={currentIndex === 0}
                  className="flex items-center gap-2 px-4 py-2 bg-neutral-100 hover:bg-neutral-200 disabled:opacity-40 disabled:cursor-not-allowed rounded-lg transition-all font-medium text-sm"
                  title="Previous (←)"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Previous</span>
                </button>
                <button
                  onClick={handleNext}
                  disabled={currentIndex === homePageVariations.length - 1}
                  className="flex items-center gap-2 px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white disabled:opacity-40 disabled:cursor-not-allowed rounded-lg transition-all font-medium text-sm"
                  title="Next (→)"
                >
                  <span className="hidden sm:inline">Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Tags and Description */}
            <div className="flex items-start justify-between gap-4">
              <p className="text-sm text-neutral-600 flex-1">
                {variation.description}
              </p>
              <div className="flex flex-wrap gap-2 justify-end">
                {variation.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium bg-neutral-100 px-2 py-1 rounded-full text-neutral-600 whitespace-nowrap"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* Variation Content - Independent scrollable area */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden bg-neutral-50">
          <VariationComponent />
        </div>
      </div>
    </div>
  );
};

export default VariationView;

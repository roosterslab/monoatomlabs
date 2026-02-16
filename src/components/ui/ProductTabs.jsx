import React, { useState, useEffect } from 'react';
import { LayoutGrid, TrendingUp, Settings, FileText, Microscope } from 'lucide-react';

/**
 * Product Tabs Component
 * Sticky tabbed navigation for product pages with 5 main sections
 */
const ProductTabs = ({ tabs, defaultTab = 0 }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const tabIcons = {
    overview: LayoutGrid,
    benefits: TrendingUp,
    howItWorks: Settings,
    technical: FileText,
    deepDive: Microscope
  };

  return (
    <div className="bg-white">
      {/* Sticky Tab Navigation */}
      <div className="sticky top-[112px] z-40 bg-white border-b border-neutral-200 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="flex overflow-x-auto no-scrollbar">
            {tabs.map((tab, index) => {
              const Icon = tabIcons[tab.id] || LayoutGrid;
              const isActive = activeTab === index;

              return (
                <button
                  key={index}
                  onClick={() => {
                    setActiveTab(index);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`
                    flex items-center space-x-3 px-8 py-5 text-sm uppercase tracking-widest transition-all duration-300 border-b-2 whitespace-nowrap outline-none
                    ${isActive
                      ? 'border-neutral-900 text-neutral-900 bg-white'
                      : 'border-transparent text-neutral-500 hover:text-neutral-800 hover:bg-neutral-50'
                    }
                  `}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-neutral-900' : 'text-neutral-400'}`} strokeWidth={isActive ? 2 : 1.5} />
                  <span className={`font-medium ${isActive ? 'font-bold' : ''}`}>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`
              transition-opacity duration-300
              ${activeTab === index ? 'block' : 'hidden'}
            `}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductTabs;

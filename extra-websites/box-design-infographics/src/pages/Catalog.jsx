import React, { useState } from 'react'
import { Menu, X, ChevronDown, ChevronRight, Home, Package } from 'lucide-react'
import { catalog } from '../data/catalog'

const Catalog = () => {
  const [selected, setSelected] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [expandedCats, setExpandedCats] = useState(['Box Side Concepts', 'Infographic Ideas'])

  const categories = [...new Set(catalog.map(item => item.category))]

  const toggleCat = (cat) => {
    setExpandedCats(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    )
  }

  const getCatItems = (cat) => catalog.filter(item => item.category === cat)

  const IdeaItem = ({ idea, isActive }) => {
    const Icon = idea.icon
    return (
      <button
        onClick={() => { setSelected(idea); setSidebarOpen(false) }}
        className={`w-full text-left px-3 py-3 rounded-lg transition-all group ${
          isActive
            ? 'bg-slate-700 border border-slate-500'
            : 'hover:bg-white/5 border border-transparent'
        }`}
      >
        <div className="flex items-start gap-3">
          <span className="text-xl flex-shrink-0">{idea.thumbnail}</span>
          <div className="flex-grow min-w-0">
            <div className={`font-semibold text-sm mb-0.5 line-clamp-2 leading-tight ${
              isActive ? 'text-white' : 'text-ink-200'
            }`}>
              {idea.name}
            </div>
            <div className="flex items-center gap-2">
              <Icon className={`w-3 h-3 flex-shrink-0 ${isActive ? 'text-slate-300' : 'text-slate-500'}`} />
              {idea.impact === 'HIGH' && (
                <span className="text-xs text-slate-400 font-medium">★ HIGH VALUE</span>
              )}
            </div>
          </div>
        </div>
      </button>
    )
  }

  const CatSection = ({ category }) => {
    const isExpanded = expandedCats.includes(category)
    const items = getCatItems(category)
    return (
      <div className="mb-1">
        <button
          onClick={() => toggleCat(category)}
          className="w-full flex items-center justify-between px-3 py-2 hover:bg-white/5 rounded-lg transition-all"
        >
          <div className="flex items-center gap-2">
            {isExpanded
              ? <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
              : <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            }
            <span className="font-semibold text-xs text-ink-300 tracking-wide">{category}</span>
          </div>
          <span className="text-xs px-1.5 py-0.5 bg-white/5 text-slate-400 rounded font-medium">
            {items.length}
          </span>
        </button>
        {isExpanded && (
          <div className="mt-1 space-y-0.5 pl-1">
            {items.map(idea => (
              <IdeaItem key={idea.id} idea={idea} isActive={selected?.id === idea.id} />
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-surface flex">

      {/* ===== SIDEBAR ===== */}
      <aside className={`fixed lg:sticky top-0 left-0 h-screen w-72 bg-panel border-r border-border overflow-y-auto z-40 flex flex-col transition-transform duration-300 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>

        {/* Sidebar header */}
        <div className="p-5 border-b border-border flex-shrink-0">
          <div className="flex items-center gap-2 mb-3">
            <Package className="w-4 h-4 text-slate-400" />
            <span className="text-xs font-bold text-slate-500 tracking-widest uppercase">Design Lab</span>
          </div>
          <div className="font-display text-xl font-bold text-white tracking-wide leading-tight">
            CERAPHENE
          </div>
          <div className="text-xs text-slate-500 mt-0.5 font-ui">Box Design Brainstorming</div>
          <div className="mt-3 text-xs text-slate-600 font-mono">{catalog.length} ideas across {categories.length} categories</div>
        </div>

        {/* Home button */}
        <div className="p-3 border-b border-border flex-shrink-0">
          <button
            onClick={() => setSelected(null)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-sm font-semibold ${
              !selected
                ? 'bg-slate-700 text-white'
                : 'hover:bg-white/5 text-slate-400'
            }`}
          >
            <Home className="w-4 h-4" />
            Overview
          </button>
        </div>

        {/* Category list */}
        <div className="flex-1 p-3 overflow-y-auto">
          <div className="text-xs font-bold text-slate-600 uppercase tracking-widest mb-3 px-2">Ideas</div>
          <div className="space-y-0.5">
            {categories.map(cat => <CatSection key={cat} category={cat} />)}
          </div>
        </div>

        {/* Sidebar footer */}
        <div className="p-4 border-t border-border flex-shrink-0">
          <div className="text-xs text-slate-600 leading-relaxed">
            Monoatom Labs · CERAPHENE<br />
            Box Design Playground
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/70 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Mobile header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-panel border-b border-border px-4 py-3 z-50 flex items-center justify-between">
        <div>
          <div className="font-display text-base font-bold text-white">CERAPHENE</div>
          <div className="text-xs text-slate-500">Box Design Lab</div>
        </div>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 bg-white/5 rounded-lg">
          {sidebarOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
        </button>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <main className="flex-1 min-h-screen overflow-y-auto pt-14 lg:pt-0">
        {selected ? (

          // Idea view
          <div>
            {/* Topbar */}
            <div className="sticky top-0 z-20 bg-panel border-b border-border px-6 py-3 flex items-center gap-4">
              <button
                onClick={() => setSelected(null)}
                className="text-slate-500 hover:text-white transition-colors"
              >
                <Home className="w-4 h-4" />
              </button>
              <div className="w-px h-4 bg-border" />
              <span className="text-slate-500 text-xs">{selected.category}</span>
              <div className="w-px h-4 bg-border" />
              <span className="text-white text-sm font-semibold font-ui">{selected.name}</span>
              {selected.impact === 'HIGH' && (
                <span className="ml-auto text-xs bg-slate-700 text-slate-300 px-2 py-0.5 rounded font-medium">★ HIGH VALUE</span>
              )}
            </div>

            {/* Description strip */}
            <div className="bg-surface border-b border-border px-6 py-3">
              <p className="text-sm text-slate-400 leading-relaxed">{selected.description}</p>
            </div>

            {/* Component */}
            <div className="bg-surface min-h-screen">
              {React.createElement(selected.component)}
            </div>
          </div>

        ) : (

          // Home/overview screen
          <div>
            {/* Hero */}
            <div className="px-8 py-14 border-b border-border bg-panel">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-border mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-pulse" />
                  <span className="text-xs font-bold text-slate-500 tracking-widest uppercase">Box Design Brainstorming Lab</span>
                </div>
                <h1 className="font-ui text-5xl font-bold text-white mb-3 leading-none">
                  CERAPHENE
                  <br />
                  <span className="text-slate-500 text-3xl">Box Design Playground</span>
                </h1>
                <p className="text-slate-400 text-base max-w-xl leading-relaxed mt-4">
                  Explore ideas for how to brand the CERAPHENE box — side alternatives,
                  infographics, data arrangements, marketing copy, and brand widgets.
                  Pick any idea from the sidebar to dive in.
                </p>
                <div className="flex items-center gap-8 mt-8">
                  {[
                    { n: catalog.length, l: 'Ideas' },
                    { n: categories.length, l: 'Categories' },
                    { n: catalog.filter(i => i.impact === 'HIGH').length, l: 'High-Value' },
                  ].map((s, i) => (
                    <div key={i} className="text-center">
                      <div className="font-display text-3xl font-bold text-white">{s.n}</div>
                      <div className="text-xs text-slate-500 mt-0.5 uppercase tracking-wide">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Category cards */}
            <div className="px-8 py-10">
              <h2 className="font-ui text-lg font-bold text-white mb-6">Browse by Category</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {categories.map(cat => {
                  const items = getCatItems(cat)
                  const first = items[0]
                  const Icon = first?.icon
                  return (
                    <button
                      key={cat}
                      onClick={() => {
                        setExpandedCats([cat])
                        setSidebarOpen(true)
                      }}
                      className="bg-panel border border-border rounded-xl p-5 hover:border-slate-600 transition-all text-left group"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <span className="text-2xl">{first?.thumbnail || '📦'}</span>
                        {Icon && <Icon className="w-4 h-4 text-slate-600 group-hover:text-slate-400 transition-colors" />}
                      </div>
                      <div className="font-ui font-bold text-ink-100 mb-1 group-hover:text-white transition-colors">{cat}</div>
                      <div className="text-xs text-slate-500 mb-3">{items.length} ideas</div>
                      <div className="flex flex-wrap gap-1">
                        {items.slice(0, 3).map(item => (
                          <span key={item.id} className="text-xs bg-white/5 text-slate-500 px-2 py-0.5 rounded">{item.thumbnail}</span>
                        ))}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* All ideas quick-list */}
            <div className="px-8 pb-12">
              <h2 className="font-ui text-lg font-bold text-white mb-6">All Ideas</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {catalog.map(idea => {
                  const Icon = idea.icon
                  return (
                    <button
                      key={idea.id}
                      onClick={() => setSelected(idea)}
                      className="bg-panel border border-border rounded-xl p-4 hover:border-slate-600 transition-all text-left group flex items-start gap-4"
                    >
                      <span className="text-2xl flex-shrink-0">{idea.thumbnail}</span>
                      <div className="flex-grow min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-ui font-semibold text-sm text-ink-100 group-hover:text-white transition-colors">{idea.name}</span>
                          {idea.impact === 'HIGH' && <span className="text-xs text-slate-500">★</span>}
                        </div>
                        <div className="text-xs text-slate-500 leading-relaxed line-clamp-2">{idea.description}</div>
                        <div className="flex items-center gap-1 mt-2">
                          <Icon className="w-3 h-3 text-slate-600" />
                          <span className="text-xs text-slate-600">{idea.category}</span>
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Footer */}
            <footer className="border-t border-border px-8 py-6">
              <div className="text-xs text-slate-600">
                Monoatom Labs · CERAPHENE Box Design Playground · React 19 + Vite + Tailwind CSS
              </div>
            </footer>
          </div>
        )}
      </main>
    </div>
  )
}

export default Catalog

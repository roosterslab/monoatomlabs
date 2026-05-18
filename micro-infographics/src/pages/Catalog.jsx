import React, { useState } from 'react'
import { Menu, X, ChevronDown, ChevronRight, Home, Layers } from 'lucide-react'
import { catalog } from '../data/catalog'

const PRODUCT_COLORS = {
  'CERAPHENE':   { accent: '#64748b', tag: 'bg-slate-800 text-slate-300',  dot: 'bg-slate-500'  },
  'GRAPHACRETE': { accent: '#92400e', tag: 'bg-amber-900/60 text-amber-400', dot: 'bg-amber-600' },
  'GRAFFISOL':   { accent: '#b45309', tag: 'bg-amber-900/50 text-yellow-400', dot: 'bg-yellow-500' },
  'HD-G-PE':     { accent: '#0e7490', tag: 'bg-cyan-900/50 text-cyan-400',  dot: 'bg-cyan-500'  },
}

export default function Catalog() {
  const [selected, setSelected] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [expandedCats, setExpandedCats] = useState(catalog.map(i => i.category).filter((v,i,a) => a.indexOf(v)===i))

  const categories = [...new Set(catalog.map(i => i.category))]
  const toggleCat = (cat) =>
    setExpandedCats(p => p.includes(cat) ? p.filter(c => c !== cat) : [...p, cat])

  return (
    <div className="min-h-screen bg-surface flex">

      {/* SIDEBAR */}
      <aside className={`fixed lg:sticky top-0 left-0 h-screen w-72 bg-panel border-r border-border overflow-y-auto z-40 flex flex-col transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>

        <div className="p-5 border-b border-border flex-shrink-0">
          <div className="flex items-center gap-2 mb-3">
            <Layers className="w-4 h-4 text-slate-400" />
            <span className="text-xs font-bold text-slate-500 tracking-widest uppercase">Infographics Lab</span>
          </div>
          <div className="font-ui text-xl font-bold text-white leading-tight">Monoatom Labs</div>
          <div className="text-xs text-slate-500 mt-0.5">Product Infographic Catalog</div>
          <div className="mt-3 text-xs text-slate-600 font-mono">{catalog.length} panels · {categories.length} products</div>
        </div>

        <div className="p-3 border-b border-border flex-shrink-0">
          <button onClick={() => { setSelected(null); setSidebarOpen(false) }}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-sm font-semibold ${!selected ? 'bg-slate-700 text-white' : 'hover:bg-white/5 text-slate-400'}`}>
            <Home className="w-4 h-4" /> Overview
          </button>
        </div>

        <div className="flex-1 p-3 overflow-y-auto">
          <div className="text-xs font-bold text-slate-600 uppercase tracking-widest mb-3 px-2">Products</div>
          {categories.map(cat => {
            const items = catalog.filter(i => i.category === cat)
            const isExp = expandedCats.includes(cat)
            const productKey = items[0]?.product
            const clr = PRODUCT_COLORS[productKey] || PRODUCT_COLORS['CERAPHENE']
            return (
              <div key={cat} className="mb-1">
                <button onClick={() => toggleCat(cat)}
                  className="w-full flex items-center justify-between px-3 py-2 hover:bg-white/5 rounded-lg transition-all">
                  <div className="flex items-center gap-2">
                    {isExp ? <ChevronDown className="w-3.5 h-3.5 text-slate-500" /> : <ChevronRight className="w-3.5 h-3.5 text-slate-500" />}
                    <span className="font-semibold text-xs text-ink-300 tracking-wide">{cat}</span>
                  </div>
                  <span className="text-xs px-1.5 py-0.5 bg-white/5 text-slate-400 rounded font-medium">{items.length}</span>
                </button>
                {isExp && (
                  <div className="mt-1 space-y-0.5 pl-1">
                    {items.map(idea => {
                      const Icon = idea.icon
                      const isActive = selected?.id === idea.id
                      return (
                        <button key={idea.id}
                          onClick={() => { setSelected(idea); setSidebarOpen(false) }}
                          className={`w-full text-left px-3 py-3 rounded-lg transition-all ${isActive ? 'bg-slate-700 border border-slate-500' : 'hover:bg-white/5 border border-transparent'}`}>
                          <div className="flex items-start gap-3">
                            <span className="text-xl flex-shrink-0">{idea.thumbnail}</span>
                            <div className="flex-grow min-w-0">
                              <div className={`font-semibold text-sm mb-0.5 line-clamp-2 leading-tight ${isActive ? 'text-white' : 'text-ink-200'}`}>{idea.name}</div>
                              <div className="flex items-center gap-2">
                                <Icon className={`w-3 h-3 flex-shrink-0 ${isActive ? 'text-slate-300' : 'text-slate-500'}`} />
                                {idea.impact === 'HIGH' && <span className="text-xs text-slate-400 font-medium">★ KEY</span>}
                              </div>
                            </div>
                          </div>
                        </button>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="p-4 border-t border-border flex-shrink-0">
          <div className="text-xs text-slate-600">Monoatom Labs · Product Infographics<br />Static Catalog · React + Vite + Tailwind</div>
        </div>
      </aside>

      {sidebarOpen && <div className="fixed inset-0 bg-black/70 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      {/* Mobile header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-panel border-b border-border px-4 py-3 z-50 flex items-center justify-between">
        <div>
          <div className="font-ui text-base font-bold text-white">Monoatom Labs</div>
          <div className="text-xs text-slate-500">Product Infographics</div>
        </div>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 bg-white/5 rounded-lg">
          {sidebarOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
        </button>
      </div>

      {/* MAIN */}
      <main className="flex-1 min-h-screen overflow-y-auto pt-14 lg:pt-0">
        {selected ? (
          <div>
            <div className="sticky top-0 z-20 bg-panel border-b border-border px-6 py-3 flex items-center gap-4">
              <button onClick={() => setSelected(null)} className="text-slate-500 hover:text-white transition-colors">
                <Home className="w-4 h-4" />
              </button>
              <div className="w-px h-4 bg-border" />
              <span className="text-slate-500 text-xs">{selected.product}</span>
              <div className="w-px h-4 bg-border" />
              <span className="text-white text-sm font-semibold font-ui">{selected.name}</span>
              {selected.impact === 'HIGH' && <span className="ml-auto text-xs bg-slate-700 text-slate-300 px-2 py-0.5 rounded font-medium">★ KEY PANEL</span>}
            </div>
            <div className="bg-surface border-b border-border px-6 py-3">
              <p className="text-sm text-slate-400 leading-relaxed">{selected.description}</p>
            </div>
            <div className="bg-surface min-h-screen p-6 lg:p-10">
              {React.createElement(selected.component)}
            </div>
          </div>
        ) : (
          <div>
            <div className="px-8 py-14 border-b border-border bg-panel">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-border mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-pulse" />
                  <span className="text-xs font-bold text-slate-500 tracking-widest uppercase">Static Infographic Catalog</span>
                </div>
                <h1 className="font-ui text-5xl font-bold text-white mb-3 leading-none">
                  Monoatom Labs<br />
                  <span className="text-slate-500 text-3xl">Product Infographics</span>
                </h1>
                <p className="text-slate-400 text-base max-w-xl leading-relaxed mt-4">
                  Static banner & box-catalog infographic panels for all 4 products.
                  Each panel is a self-contained visual — ready for print, packaging, or digital use.
                </p>
                <div className="flex items-center gap-10 mt-8">
                  {[
                    { n: catalog.length, l: 'Panels' },
                    { n: categories.length, l: 'Products' },
                    { n: catalog.filter(i => i.impact === 'HIGH').length, l: 'Key Panels' },
                  ].map((s, i) => (
                    <div key={i} className="text-center">
                      <div className="font-display text-3xl font-bold text-white">{s.n}</div>
                      <div className="text-xs text-slate-500 mt-0.5 uppercase tracking-wide">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Product groups */}
            <div className="px-8 py-10">
              {['CERAPHENE', 'GRAPHACRETE', 'GRAFFISOL', 'HD-G-PE'].map(prod => {
                const items = catalog.filter(i => i.product === prod)
                const clr = PRODUCT_COLORS[prod]
                const subtitles = {
                  'CERAPHENE':   'Graphene Ceramic Coating · Automotive',
                  'GRAPHACRETE': 'Graphene Concrete Additive · Construction',
                  'GRAFFISOL':   'Graphene Solar Panel Coating · Energy',
                  'HD-G-PE':     'Graphene Polymer Masterbatch · Industrial',
                }
                return (
                  <div key={prod} className="mb-12">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-2 h-6 rounded" style={{ background: clr.accent }} />
                      <div>
                        <div className="font-display text-2xl font-bold text-white">{prod}</div>
                        <div className="text-xs text-slate-500">{subtitles[prod]}</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                      {items.map(idea => {
                        const Icon = idea.icon
                        return (
                          <button key={idea.id} onClick={() => setSelected(idea)}
                            className="bg-panel border border-border rounded-xl p-5 hover:border-slate-600 transition-all text-left group">
                            <div className="flex items-start justify-between mb-3">
                              <span className="text-2xl">{idea.thumbnail}</span>
                              {idea.impact === 'HIGH' && <span className={`text-xs px-2 py-0.5 rounded font-medium ${clr.tag}`}>KEY</span>}
                            </div>
                            <div className="font-ui font-bold text-ink-100 mb-1 group-hover:text-white transition-colors">{idea.name}</div>
                            <div className="text-xs text-slate-500 leading-relaxed line-clamp-2">{idea.description}</div>
                            <div className="flex items-center gap-1 mt-3">
                              <Icon className="w-3 h-3 text-slate-600" />
                              <span className="text-xs text-slate-600">{idea.product}</span>
                            </div>
                          </button>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>

            <footer className="border-t border-border px-8 py-6">
              <div className="text-xs text-slate-600">Monoatom Labs · Product Infographic Catalog · React 19 + Vite + Tailwind CSS</div>
            </footer>
          </div>
        )}
      </main>
    </div>
  )
}

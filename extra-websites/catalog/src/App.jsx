import React, { useState, useRef } from 'react'
import CoverPage from './pages/CoverPage'
import CerapheneOverview from './components/ceraphene/Overview'
import CerapheneSpecs from './components/ceraphene/Specs'
import CerapheneROI from './components/ceraphene/ROI'
import GraphacreteOverview from './components/graphacrete/Overview'
import GraphacreteSpecs from './components/graphacrete/Specs'
import GraphacreteROI from './components/graphacrete/ROI'
import GraffisolOverview from './components/graffisol/Overview'
import GraffisolSpecs from './components/graffisol/Specs'
import GraffisolROI from './components/graffisol/ROI'
import HdgpeOverview from './components/hdgpe/Overview'
import HdgpeSpecs from './components/hdgpe/Specs'
import HdgpeROI from './components/hdgpe/ROI'

const PAGES = [
  { id: 'cover', label: 'Cover', product: null, component: CoverPage },
  { id: 'cera-overview', label: 'Overview', product: 'CERAPHENE', component: CerapheneOverview },
  { id: 'cera-specs', label: 'Specifications', product: 'CERAPHENE', component: CerapheneSpecs },
  { id: 'cera-roi', label: 'ROI & Economics', product: 'CERAPHENE', component: CerapheneROI },
  { id: 'gra-overview', label: 'Overview', product: 'GRAPHACRETE', component: GraphacreteOverview },
  { id: 'gra-specs', label: 'Specifications', product: 'GRAPHACRETE', component: GraphacreteSpecs },
  { id: 'gra-roi', label: 'ROI & Economics', product: 'GRAPHACRETE', component: GraphacreteROI },
  { id: 'graffisol-overview', label: 'Overview', product: 'GRAFFISOL', component: GraffisolOverview },
  { id: 'graffisol-specs', label: 'Specifications', product: 'GRAFFISOL', component: GraffisolSpecs },
  { id: 'graffisol-roi', label: 'ROI & Economics', product: 'GRAFFISOL', component: GraffisolROI },
  { id: 'hdgpe-overview', label: 'Overview', product: 'HD-G-PE', component: HdgpeOverview },
  { id: 'hdgpe-specs', label: 'Specifications', product: 'HD-G-PE', component: HdgpeSpecs },
  { id: 'hdgpe-roi', label: 'ROI & Economics', product: 'HD-G-PE', component: HdgpeROI },
]

const PRODUCTS = [
  { id: 'CERAPHENE', label: 'Ceraphene', color: '#64748b' },
  { id: 'GRAPHACRETE', label: 'Graphacrete', color: '#d97706' },
  { id: 'GRAFFISOL', label: 'Graffisol', color: '#f59e0b' },
  { id: 'HD-G-PE', label: 'HD-G-PE', color: '#06b6d4' },
]

export default function App() {
  const [activeProduct, setActiveProduct] = useState(null)
  const pageRefs = useRef({})

  const visiblePages = activeProduct
    ? PAGES.filter(p => p.product === activeProduct || p.product === null)
    : PAGES

  const scrollToPage = (id) => {
    const el = pageRefs.current[id]
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const sidebarGroups = [
    { product: null, label: 'Catalog', color: '#374151', pages: PAGES.filter(p => p.product === null) },
    ...PRODUCTS.map(prod => ({
      product: prod.id,
      label: prod.label,
      color: prod.color,
      pages: PAGES.filter(p => p.product === prod.id),
    })),
  ]

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'Inter, sans-serif' }}>
      {/* Sidebar */}
      <aside className="no-print" style={{
        width: 250,
        minWidth: 250,
        background: '#111',
        color: '#e5e7eb',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}>
        <div style={{ padding: '16px 14px 10px', borderBottom: '1px solid #222' }}>
          <div style={{ fontSize: 11, letterSpacing: 2, color: '#6b7280', textTransform: 'uppercase', marginBottom: 4 }}>Monoatom Labs</div>
          <div style={{ fontSize: 14, fontWeight: 700, color: '#f9fafb', fontFamily: 'Rajdhani, sans-serif', letterSpacing: 1 }}>Product Catalog 2025</div>
        </div>
        <div style={{ overflowY: 'auto', flex: 1, padding: '8px 0' }}>
          {sidebarGroups.map(group => (
            <div key={group.product || 'cover'}>
              <div style={{
                padding: '8px 14px 4px',
                fontSize: 10,
                letterSpacing: 2,
                textTransform: 'uppercase',
                color: group.color,
                fontWeight: 700,
                marginTop: group.product ? 8 : 0,
              }}>
                {group.label}
              </div>
              {group.pages.map(page => (
                <button
                  key={page.id}
                  onClick={() => scrollToPage(page.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    width: '100%',
                    padding: '6px 14px 6px 18px',
                    background: 'none',
                    border: 'none',
                    color: '#9ca3af',
                    fontSize: 12,
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'color 0.15s, background 0.15s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#f9fafb'; e.currentTarget.style.background = '#1a1a1a' }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#9ca3af'; e.currentTarget.style.background = 'none' }}
                >
                  {group.product && (
                    <span style={{ width: 3, height: 12, borderRadius: 2, background: group.color, flexShrink: 0 }} />
                  )}
                  {page.label}
                </button>
              ))}
            </div>
          ))}
        </div>
      </aside>

      {/* Main area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Top bar */}
        <header className="no-print" style={{
          background: '#fff',
          borderBottom: '1px solid #e5e7eb',
          padding: '10px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          flexShrink: 0,
        }}>
          <div style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: 15, letterSpacing: 1, color: '#111', marginRight: 8 }}>
            Monoatom Labs — Product Catalog 2025
          </div>
          <div style={{ display: 'flex', gap: 6, flex: 1, flexWrap: 'wrap' }}>
            <button
              onClick={() => setActiveProduct(null)}
              style={{
                padding: '3px 10px',
                borderRadius: 12,
                border: '1px solid #d1d5db',
                background: activeProduct === null ? '#111' : '#fff',
                color: activeProduct === null ? '#fff' : '#374151',
                fontSize: 11,
                fontWeight: 600,
                cursor: 'pointer',
                letterSpacing: 0.5,
              }}
            >All</button>
            {PRODUCTS.map(prod => (
              <button
                key={prod.id}
                onClick={() => setActiveProduct(activeProduct === prod.id ? null : prod.id)}
                style={{
                  padding: '3px 10px',
                  borderRadius: 12,
                  border: `1px solid ${prod.color}`,
                  background: activeProduct === prod.id ? prod.color : '#fff',
                  color: activeProduct === prod.id ? '#fff' : prod.color,
                  fontSize: 11,
                  fontWeight: 600,
                  cursor: 'pointer',
                  letterSpacing: 0.5,
                }}
              >{prod.label}</button>
            ))}
          </div>
          <button
            onClick={() => window.print()}
            style={{
              padding: '6px 16px',
              background: '#111',
              color: '#fff',
              border: 'none',
              borderRadius: 6,
              fontSize: 12,
              fontWeight: 600,
              cursor: 'pointer',
              letterSpacing: 0.5,
            }}
          >Print</button>
        </header>

        {/* Pages scroll area */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px 20px 40px', background: '#f0f0f0' }}>
          {visiblePages.map(page => {
            const Component = page.component
            return (
              <div
                key={page.id}
                ref={el => { pageRefs.current[page.id] = el }}
              >
                <Component />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

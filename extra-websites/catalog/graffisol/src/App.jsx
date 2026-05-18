import React, { useRef, useState, useEffect } from 'react'
import HexagonWave from './components/HexagonWave'
import Logo from './components/Logo'
import CoverPage from './pages/CoverPage'
import Overview from './pages/Overview'
import Specs from './pages/Specs'
import ROI from './pages/ROI'
import HowItWorks from './pages/HowItWorks'
import CaseStudies from './pages/CaseStudies'
import Applications from './pages/Applications'
import Comparison from './pages/Comparison'
import FAQ from './pages/FAQ'
import Partnership from './pages/Partnership'
import ScienceDeepDive from './pages/ScienceDeepDive'
import Testimonials from './pages/Testimonials'

const PRODUCT = { label: 'GRAFFISOL', sub: 'Solar Panel Coating', color: '#f59e0b', heroImage: '/images/graffisol-01.jpg' }
const NAV = [
  { key: 'cover', label: 'Cover' },
  { key: 'overview', label: 'Overview' },
  { key: 'specs', label: 'Specifications' },
  { key: 'roi', label: 'ROI & Economics' },
  { key: 'howitworks', label: 'How It Works' },
  { key: 'casestudies', label: 'Case Studies' },
  { key: 'applications', label: 'Applications' },
  { key: 'comparison', label: 'Comparison' },
  { key: 'faq', label: 'FAQ' },
  { key: 'partnership', label: 'Partnership' },
  { key: 'sciencedeep', label: 'Science Deep Dive' },
  { key: 'testimonials', label: 'Client Stories' },
]
const PAGES = [
  ['cover', CoverPage], ['overview', Overview], ['specs', Specs], ['roi', ROI],
  ['howitworks', HowItWorks], ['casestudies', CaseStudies], ['applications', Applications],
  ['comparison', Comparison], ['faq', FAQ], ['partnership', Partnership],
  ['sciencedeep', ScienceDeepDive], ['testimonials', Testimonials],
]

const SIDEBAR_W = 260
const PAGE_W_PX = 297 * (96 / 25.4)
const PAGE_H_PX = 210 * (96 / 25.4)

const computeFitScale = () => {
  const isMob = window.innerWidth < 768
  const available = window.innerWidth - (isMob ? 0 : SIDEBAR_W) - (isMob ? 16 : 48)
  return Math.min(1, available / PAGE_W_PX)
}

export default function App() {
  const refs = { cover: useRef(), overview: useRef(), specs: useRef(), roi: useRef(), howitworks: useRef(), casestudies: useRef(), applications: useRef(), comparison: useRef(), faq: useRef(), partnership: useRef(), sciencedeep: useRef(), testimonials: useRef() }
  const [navOpen, setNavOpen] = useState(false)
  const [fitScale, setFitScale] = useState(computeFitScale)
  const [userScale, setUserScale] = useState(1)
  const userScaleRef = useRef(1)
  const pinchRef = useRef({ active: false, dist: 0, startScale: 1 })
  const lastTapRef = useRef(0)
  const printAreaRef = useRef()
  const C = PRODUCT.color

  useEffect(() => { userScaleRef.current = userScale }, [userScale])

  useEffect(() => {
    const update = () => { setFitScale(computeFitScale()); setUserScale(1) }
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  useEffect(() => {
    const el = printAreaRef.current
    if (!el) return
    const dist = (a, b) => Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY)
    const onTouchStart = (e) => {
      if (e.touches.length === 2) {
        pinchRef.current = { active: true, dist: dist(e.touches[0], e.touches[1]), startScale: userScaleRef.current }
      } else if (e.touches.length === 1) {
        const now = Date.now()
        if (now - lastTapRef.current < 350) setUserScale(1)
        lastTapRef.current = now
      }
    }
    const onTouchMove = (e) => {
      if (e.touches.length === 2 && pinchRef.current.active) {
        e.preventDefault()
        const ratio = dist(e.touches[0], e.touches[1]) / pinchRef.current.dist
        setUserScale(Math.min(4, Math.max(0.25, pinchRef.current.startScale * ratio)))
      }
    }
    const onTouchEnd = () => { pinchRef.current.active = false }
    const onWheel = (e) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault()
        setUserScale(prev => Math.min(4, Math.max(0.25, prev * (e.deltaY < 0 ? 1.1 : 0.9))))
      }
    }
    el.addEventListener('touchstart', onTouchStart, { passive: true })
    el.addEventListener('touchmove', onTouchMove, { passive: false })
    el.addEventListener('touchend', onTouchEnd, { passive: true })
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => {
      el.removeEventListener('touchstart', onTouchStart)
      el.removeEventListener('touchmove', onTouchMove)
      el.removeEventListener('touchend', onTouchEnd)
      el.removeEventListener('wheel', onWheel)
    }
  }, [])

  const scrollTo = (key) => { refs[key]?.current?.scrollIntoView({ behavior: 'smooth' }); setNavOpen(false) }

  const totalScale = fitScale * userScale
  const pageW = PAGE_W_PX * totalScale
  const pageH = PAGE_H_PX * totalScale
  const zoomPct = Math.round(totalScale * 100)
  const showFitBtn = Math.abs(userScale - 1) > 0.05
  const btnStyle = { width: 30, height: 30, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, color: '#94a3b8', cursor: 'pointer', fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', lineHeight: 1 }

  return (
    <div id="app-root" style={{ display: 'flex', height: '100vh', fontFamily: 'Inter, sans-serif', position: 'relative' }}>
      <div className="no-print" style={{ position: 'fixed', inset: 0, zIndex: 0, backgroundColor: '#0f172a' }} />
      {navOpen && (
        <div className="no-print" onClick={() => setNavOpen(false)}
          style={{ position: 'fixed', inset: 0, zIndex: 15, background: 'rgba(0,0,0,0.6)' }} />
      )}
      <aside className="no-print catalog-sidebar" data-open={navOpen ? 'true' : 'false'}
        style={{ width: SIDEBAR_W, minWidth: SIDEBAR_W, background: 'rgba(10, 15, 30, 0.75)', backdropFilter: 'blur(24px)', borderRight: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 20, boxShadow: '4px 0 24px rgba(0,0,0,0.2)' }}>
        <div style={{ padding: '24px 20px 20px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <Logo size={18} theme="dark" />
          </div>
          <div style={{ position: 'relative', borderRadius: 10, overflow: 'hidden', marginBottom: 12, border: `1px solid ${C}40`, boxShadow: `0 4px 12px -2px ${C}30` }}>
            <img src={PRODUCT.heroImage} alt={PRODUCT.label} style={{ width: '100%', objectFit: 'cover', aspectRatio: '16/9', display: 'block' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }} />
          </div>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: 20, color: '#fff', letterSpacing: 0.5 }}>{PRODUCT.label}</div>
          <div style={{ fontSize: 11.5, color: '#94a3b8', fontFamily: 'Inter, sans-serif', marginTop: 2 }}>{PRODUCT.sub}</div>
        </div>
        <div style={{ padding: '16px 12px', flex: 1, overflowY: 'auto' }}>
          <p style={{ color: '#475569', fontSize: 9.5, textTransform: 'uppercase', letterSpacing: '0.15em', fontFamily: 'Outfit, sans-serif', fontWeight: 800, padding: '0 10px 8px', margin: 0 }}>Navigation</p>
          {NAV.map(({ key, label }) => (
            <button key={key} onClick={() => scrollTo(key)}
              style={{ display: 'flex', alignItems: 'center', gap: 10, width: '100%', padding: '10px 12px', background: 'transparent', border: '1px solid transparent', borderRadius: 10, color: '#94a3b8', fontSize: 12.5, cursor: 'pointer', textAlign: 'left', fontFamily: 'Inter, sans-serif', marginBottom: 4, transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#fff' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.color = '#94a3b8' }}
            >
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: C, flexShrink: 0, opacity: 0.7 }} />
              {label}
            </button>
          ))}
        </div>
      </aside>
      <div id="main-col" style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative', zIndex: 10 }}>
        <header className="no-print" style={{ background: 'rgba(5, 10, 20, 0.8)', backdropFilter: 'blur(24px)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '0 16px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0, boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <button className="catalog-hamburger" onClick={() => setNavOpen(o => !o)} aria-label="Open navigation"
              style={{ display: 'none', flexDirection: 'column', gap: 4, background: 'none', border: 'none', cursor: 'pointer', padding: 6, color: '#94a3b8', marginRight: 4 }}>
              <span style={{ display: 'block', width: 18, height: 2, background: 'currentColor', borderRadius: 2 }} />
              <span style={{ display: 'block', width: 18, height: 2, background: 'currentColor', borderRadius: 2 }} />
              <span style={{ display: 'block', width: 18, height: 2, background: 'currentColor', borderRadius: 2 }} />
            </button>
            <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: 16, color: '#fff', letterSpacing: 1 }}>{PRODUCT.label}</span>
            <span className="catalog-header-sub" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#94a3b8', fontSize: 13, fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
              <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#475569', display: 'inline-block' }} />
              {PRODUCT.sub}
            </span>
          </div>
          <button onClick={() => window.print()}
            style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 16px', background: `linear-gradient(to right, ${C}, #d97706)`, color: '#fff', border: 'none', borderRadius: 10, fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: 'Outfit, sans-serif', letterSpacing: 0.5, boxShadow: `0 4px 12px -2px ${C}60`, transition: 'all 0.2s', whiteSpace: 'nowrap' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = `0 6px 16px -2px ${C}80` }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = `0 4px 12px -2px ${C}60` }}
          >
            Print Catalog
          </button>
        </header>
        <div ref={printAreaRef}
          style={{ flex: 1, overflowY: 'auto', overflowX: 'auto', padding: '20px 24px 80px', background: 'transparent' }}
          className="print-area">
          {PAGES.map(([key, Comp]) => (
            <div key={key} ref={refs[key]} className="page-scale-outer"
              style={{ width: pageW, height: pageH, overflow: 'hidden', marginBottom: 8, flexShrink: 0 }}>
              <div style={{ transform: `scale(${totalScale})`, transformOrigin: 'top left', width: PAGE_W_PX }}>
                <Comp />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="no-print" style={{
        position: 'fixed', bottom: 20, left: '50%', transform: 'translateX(-50%)',
        background: 'rgba(5,10,20,0.92)', backdropFilter: 'blur(24px)',
        border: '1px solid rgba(255,255,255,0.08)', borderRadius: 28, padding: '6px 12px',
        display: 'flex', alignItems: 'center', gap: 6, zIndex: 200,
        boxShadow: '0 4px 24px rgba(0,0,0,0.6)',
      }}>
        <button style={btnStyle} onClick={() => setUserScale(s => Math.max(0.25, s / 1.25))} title="Zoom out">&#8722;</button>
        <span style={{ fontSize: 11, color: '#64748b', minWidth: 48, textAlign: 'center', fontFamily: 'Inter, sans-serif', userSelect: 'none' }}>{zoomPct}%</span>
        <button style={btnStyle} onClick={() => setUserScale(s => Math.min(4, s * 1.25))} title="Zoom in">&#43;</button>
        {showFitBtn && (
          <>
            <div style={{ width: 1, height: 18, background: 'rgba(255,255,255,0.08)', margin: '0 2px' }} />
            <button onClick={() => setUserScale(1)}
              style={{ padding: '4px 10px', background: 'none', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, color: '#64748b', cursor: 'pointer', fontSize: 10, fontFamily: 'Inter, sans-serif', whiteSpace: 'nowrap' }}>
              Fit width
            </button>
          </>
        )}
      </div>
    </div>
  )
}

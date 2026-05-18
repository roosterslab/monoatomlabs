import React, { useRef, useState, useEffect } from 'react'
import HexagonWave from './components/HexagonWave'
import Logo from './components/Logo'
import DarkHexBackground from './components/DarkHexBackground'
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

const PRODUCT = { label: 'GRAPHACRETE', sub: 'Graphene Concrete Additive', color: '#d97706', heroImage: '/images/graphacrete-01.jpg' }
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

const SIDEBAR_W = 240
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
  const btnStyle = { width: 30, height: 30, background: '#1e293b', border: '1px solid #334155', borderRadius: 8, color: '#94a3b8', cursor: 'pointer', fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', lineHeight: 1 }

  return (
    <div id="app-root" style={{ display: 'flex', height: '100vh', fontFamily: 'Inter, sans-serif', position: 'relative' }}>
      <div className="no-print" style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
        <DarkHexBackground className="w-full h-full" />
      </div>
      {navOpen && (
        <div className="no-print" onClick={() => setNavOpen(false)}
          style={{ position: 'fixed', inset: 0, zIndex: 15, background: 'rgba(0,0,0,0.6)' }} />
      )}
      <aside className="no-print catalog-sidebar" data-open={navOpen ? 'true' : 'false'}
        style={{ width: SIDEBAR_W, minWidth: SIDEBAR_W, background: 'rgba(10,15,28,0.9)', backdropFilter: 'blur(12px)', borderRight: '1px solid #1e293b', display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 20 }}>
        <div style={{ padding: '20px 16px 16px', borderBottom: '1px solid #1e293b' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <Logo size={16} theme="dark" />
          </div>
          <img src={PRODUCT.heroImage} alt={PRODUCT.label} style={{ width: '100%', borderRadius: 8, objectFit: 'cover', aspectRatio: '16/9', border: `1px solid ${C}33`, marginBottom: 10 }} />
          <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 18, color: C, letterSpacing: '0.04em' }}>{PRODUCT.label}</div>
          <div style={{ fontSize: 11, color: '#64748b', fontFamily: 'Inter, sans-serif', marginTop: 2 }}>{PRODUCT.sub}</div>
        </div>
        <div style={{ padding: '10px 8px', flex: 1, overflowY: 'auto' }}>
          <p style={{ color: '#334155', fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.2em', fontFamily: 'Outfit, sans-serif', fontWeight: 700, padding: '6px 8px 4px', margin: 0 }}>Pages</p>
          {NAV.map(({ key, label }) => (
            <button key={key} onClick={() => scrollTo(key)}
              style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%', padding: '9px 10px', background: 'none', border: '1px solid transparent', borderRadius: 8, color: '#94a3b8', fontSize: 12, cursor: 'pointer', textAlign: 'left', fontFamily: 'Inter, sans-serif', marginBottom: 2, transition: 'all 0.15s' }}
              onMouseEnter={e => { e.currentTarget.style.background = C + '14'; e.currentTarget.style.borderColor = C + '44'; e.currentTarget.style.color = C }}
              onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.color = '#94a3b8' }}
            >
              <span style={{ width: 3, height: 14, borderRadius: 2, background: C, flexShrink: 0 }} />
              {label}
            </button>
          ))}
        </div>
      </aside>
      <div id="main-col" style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative', zIndex: 10 }}>
        <header className="no-print" style={{ background: 'rgba(10,15,28,0.9)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #1e293b', padding: '0 16px', height: 54, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <button className="catalog-hamburger" onClick={() => setNavOpen(o => !o)} aria-label="Open navigation"
              style={{ display: 'none', flexDirection: 'column', gap: 4, background: 'none', border: 'none', cursor: 'pointer', padding: 6, color: '#94a3b8', marginRight: 4 }}>
              <span style={{ display: 'block', width: 18, height: 2, background: 'currentColor', borderRadius: 2 }} />
              <span style={{ display: 'block', width: 18, height: 2, background: 'currentColor', borderRadius: 2 }} />
              <span style={{ display: 'block', width: 18, height: 2, background: 'currentColor', borderRadius: 2 }} />
            </button>
            <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 15, color: C, letterSpacing: '0.05em' }}>{PRODUCT.label}</span>
            <span className="catalog-header-sub" style={{ color: '#64748b', fontSize: 12, fontFamily: 'Inter, sans-serif' }}>{' \u2014 '}{PRODUCT.sub}</span>
          </div>
          <button onClick={() => window.print()} style={{ padding: '6px 14px', background: C + '18', color: C, border: `1px solid ${C}44`, borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: 'pointer', fontFamily: 'Outfit, sans-serif', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>Print</button>
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
        background: 'rgba(10,15,28,0.92)', backdropFilter: 'blur(12px)',
        border: '1px solid #1e293b', borderRadius: 28, padding: '6px 12px',
        display: 'flex', alignItems: 'center', gap: 6, zIndex: 200,
        boxShadow: '0 4px 24px rgba(0,0,0,0.6)',
      }}>
        <button style={btnStyle} onClick={() => setUserScale(s => Math.max(0.25, s / 1.25))} title="Zoom out">&#8722;</button>
        <span style={{ fontSize: 11, color: '#64748b', minWidth: 48, textAlign: 'center', fontFamily: 'Inter, sans-serif', userSelect: 'none' }}>{zoomPct}%</span>
        <button style={btnStyle} onClick={() => setUserScale(s => Math.min(4, s * 1.25))} title="Zoom in">&#43;</button>
        {showFitBtn && (
          <>
            <div style={{ width: 1, height: 18, background: '#1e293b', margin: '0 2px' }} />
            <button onClick={() => setUserScale(1)}
              style={{ padding: '4px 10px', background: 'none', border: '1px solid #334155', borderRadius: 8, color: '#64748b', cursor: 'pointer', fontSize: 10, fontFamily: 'Inter, sans-serif', whiteSpace: 'nowrap' }}>
              Fit width
            </button>
          </>
        )}
      </div>
    </div>
  )
}

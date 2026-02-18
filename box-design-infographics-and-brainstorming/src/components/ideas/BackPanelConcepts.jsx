import React, { useState } from 'react'
import { Shield, Droplets, Layers, TrendingUp, BookOpen } from 'lucide-react'

const C = '#64748B'
const W = 1494, H = 638

const CONCEPTS = [
  {
    id: 'infographic',
    label: 'A — Threat Wheel',
    icon: Shield,
    desc: 'Polar chart of 9 threats. Science-heavy, visually distinctive.',
  },
  {
    id: 'spec-sheet',
    label: 'B — Spec Sheet',
    icon: Layers,
    desc: 'Structured data table. Trust through precision.',
  },
  {
    id: 'water',
    label: 'C — Water Science',
    icon: Droplets,
    desc: '40° vs 115° contact angle visual. One clear claim.',
  },
  {
    id: 'roi',
    label: 'D — Value Proof',
    icon: TrendingUp,
    desc: '₹5k vs ₹15k competitor chart. Price is the hook.',
  },
  {
    id: 'story',
    label: 'E — Brand Story',
    icon: BookOpen,
    desc: 'Graphene Nobel Prize → CERAPHENE. Emotional credibility.',
  },
]

const scale = 0.18

function ConceptPreview({ id, s }) {
  const fs = s
  const ww = W * fs, hh = H * fs

  if (id === 'infographic') {
    const cx = ww / 2, cy = hh / 2
    const outerR = Math.min(ww, hh) * 0.36
    const innerR = Math.min(ww, hh) * 0.14
    const threats = Array.from({ length: 9 }, (_, i) => ({ angle: i * 40 - 90 }))
    return (
      <div style={{ width: ww, height: hh, background: '#050505', position: 'relative', overflow: 'hidden' }}>
        <svg style={{ position: 'absolute', inset: 0 }} width={ww} height={hh}>
          <circle cx={cx} cy={cy} r={outerR + 14 * fs} fill="none" stroke={C} strokeWidth="0.5" opacity="0.1" strokeDasharray={`${3 * fs} ${3 * fs}`} />
          <circle cx={cx} cy={cy} r={innerR + 4 * fs} fill="none" stroke={C} strokeWidth="0.5" opacity="0.2" />
          {threats.map((t, i) => {
            const a = t.angle * Math.PI / 180
            const x1 = cx + (innerR + 5 * fs) * Math.cos(a), y1 = cy + (innerR + 5 * fs) * Math.sin(a)
            const x2 = cx + (outerR - 5 * fs) * Math.cos(a), y2 = cy + (outerR - 5 * fs) * Math.sin(a)
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={C} strokeWidth="0.6" opacity="0.2" strokeDasharray="2 2" />
          })}
          {threats.map((t, i) => {
            const a = t.angle * Math.PI / 180
            const x = cx + outerR * Math.cos(a), y = cy + outerR * Math.sin(a)
            return <circle key={i} cx={x} cy={y} r={5 * fs} fill={C} opacity="0.4" />
          })}
        </svg>
        <div style={{ position: 'absolute', left: cx - innerR, top: cy - innerR, width: innerR * 2, height: innerR * 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: `${C}10`, border: `1px solid ${C}30`, borderRadius: '50%' }}>
          <Shield size={Math.round(innerR * 0.5)} color={C} strokeWidth={1.5} />
        </div>
        <div style={{ position: 'absolute', top: 18 * fs, left: 0, right: 0, textAlign: 'center', color: C, fontSize: 7 * fs, letterSpacing: '0.3em', fontFamily: 'Rajdhani, sans-serif' }}>9 THREATS. ZERO DAMAGE.</div>
        <div style={{ position: 'absolute', bottom: 14 * fs, left: 0, right: 0, textAlign: 'center', color: '#2a2a2a', fontSize: 6 * fs, fontFamily: 'Inter, sans-serif' }}>Comprehensive protection for every road condition</div>
      </div>
    )
  }

  if (id === 'spec-sheet') {
    const specs = [['Hardness', '9H+'], ['Contact Angle', '115°'], ['Thickness', '3–4 μm'], ['Durability', '4+ yr'], ['Heat Resistance', '700°C'], ['Chemical Resistance', 'pH 2–12']]
    return (
      <div style={{ width: ww, height: hh, background: '#050505', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div style={{ padding: `${12 * fs}px ${16 * fs}px`, borderBottom: '1px solid #1a1a1a', color: C, fontSize: 7 * fs, letterSpacing: '0.25em', fontFamily: 'Rajdhani, sans-serif' }}>TECHNICAL SPECIFICATIONS</div>
        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding: 8 * fs, gap: 4 * fs }}>
          {specs.map(([label, val], i) => (
            <div key={i} style={{ padding: 10 * fs, background: '#0d0d0d', border: '1px solid #111', borderRadius: 3 * fs }}>
              <div style={{ color: '#444', fontSize: 6 * fs, letterSpacing: '0.15em', textTransform: 'uppercase' }}>{label}</div>
              <div style={{ color: 'white', fontSize: 16 * fs, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif', marginTop: 3 * fs }}>{val}</div>
            </div>
          ))}
        </div>
        <div style={{ padding: `${8 * fs}px ${16 * fs}px`, borderTop: '1px solid #111', color: '#1f1f1f', fontSize: 5.5 * fs, fontFamily: 'Inter, sans-serif' }}>*Independently tested and verified · CERAPHENE Graphene Ceramic Coating 50ml</div>
      </div>
    )
  }

  if (id === 'water') {
    const surfY = hh * 0.68, r = hh * 0.28
    const θ1 = 40 * Math.PI / 180, θ2 = 115 * Math.PI / 180
    return (
      <div style={{ width: ww, height: hh, background: '#050505', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 16 * fs, left: 0, right: 0, textAlign: 'center', color: C, fontSize: 7 * fs, letterSpacing: '0.3em', fontFamily: 'Rajdhani, sans-serif' }}>HYDROPHOBIC SCIENCE — CONTACT ANGLE COMPARISON</div>
        <div style={{ position: 'absolute', top: '15%', left: '50%', bottom: '10%', width: 1, background: '#1a1a1a' }} />
        <svg style={{ position: 'absolute', inset: 0 }} width={ww} height={hh}>
          <line x1={ww * 0.06} y1={surfY} x2={ww * 0.46} y2={surfY} stroke="#333" strokeWidth={fs} />
          <path d={`M ${ww * 0.26 - r * 0.6 * Math.sin(θ1)},${surfY} A ${r * 0.6},${r * 0.6} 0 0 1 ${ww * 0.26 + r * 0.6 * Math.sin(θ1)},${surfY}`} fill={`${C}0a`} stroke="#444" strokeWidth={fs} />
          <text x={ww * 0.18} y={surfY - 8 * fs} fill="#444" fontSize={9 * fs} fontFamily="Rajdhani, sans-serif" fontWeight="800">40°</text>
          <line x1={ww * 0.54} y1={surfY} x2={ww * 0.94} y2={surfY} stroke={C} strokeWidth={fs} opacity="0.4" />
          <path d={`M ${ww * 0.74 - r * Math.sin(θ2)},${surfY} A ${r},${r} 0 0 1 ${ww * 0.74 + r * Math.sin(θ2)},${surfY}`} fill={`${C}20`} stroke={C} strokeWidth={fs} />
          <text x={ww * 0.76} y={surfY - 12 * fs} fill="white" fontSize={12 * fs} fontFamily="Rajdhani, sans-serif" fontWeight="900">115°</text>
        </svg>
        <div style={{ position: 'absolute', bottom: 12 * fs, left: 0, right: 0, textAlign: 'center', color: C, fontSize: 7 * fs, letterSpacing: '0.2em', fontFamily: 'Rajdhani, sans-serif' }}>115° SUPERHYDROPHOBIC — THE LOTUS EFFECT</div>
      </div>
    )
  }

  if (id === 'roi') {
    const bars = [['Ceramic Pro', 18000], ['Gtechniq', 15000], ['CarPro', 12000], ['CERAPHENE', 5000]]
    const maxVal = 20000
    return (
      <div style={{ width: ww, height: hh, background: '#050505', display: 'flex', flexDirection: 'column', padding: `${20 * fs}px ${30 * fs}px`, overflow: 'hidden' }}>
        <div style={{ color: C, fontSize: 7 * fs, letterSpacing: '0.3em', fontFamily: 'Rajdhani, sans-serif', marginBottom: 20 * fs }}>PRICE COMPARISON — 50ML · SAME 9H+ PROTECTION</div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16 * fs }}>
          {bars.map(([name, val], i) => {
            const isHi = name === 'CERAPHENE'
            return (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 * fs }}>
                <div style={{ width: 80 * fs, color: isHi ? 'white' : '#444', fontSize: 8 * fs, textAlign: 'right', fontFamily: 'Rajdhani, sans-serif', fontWeight: isHi ? 700 : 400 }}>{name}</div>
                <div style={{ flex: 1, height: isHi ? 16 * fs : 8 * fs, background: '#0d0d0d', borderRadius: 2 }}>
                  <div style={{ width: `${(val / maxVal) * 100}%`, height: '100%', background: isHi ? C : '#1a1a1a', borderRadius: 2 }} />
                </div>
                <div style={{ color: isHi ? 'white' : '#444', fontSize: 9 * fs, fontFamily: 'Rajdhani, sans-serif', fontWeight: isHi ? 900 : 400, width: 50 * fs }}>₹{(val / 1000).toFixed(0)}k</div>
              </div>
            )
          })}
        </div>
        <div style={{ color: C, fontSize: 7 * fs, letterSpacing: '0.2em', fontFamily: 'Rajdhani, sans-serif', marginTop: 14 * fs }}>60–70% CHEAPER · SAME OR BETTER PERFORMANCE</div>
      </div>
    )
  }

  if (id === 'story') {
    const events = [{ yr: '2004', t: 'Graphene Discovered' }, { yr: '2010', t: 'Nobel Prize' }, { yr: '2018', t: 'Nano-Platelets' }, { yr: '2024', t: 'CERAPHENE' }]
    return (
      <div style={{ width: ww, height: hh, background: '#050505', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', gap: 16 * fs }}>
        <div style={{ color: C, fontSize: 7 * fs, letterSpacing: '0.3em', fontFamily: 'Rajdhani, sans-serif' }}>THE GRAPHENE STORY</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
          {events.map((e, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ textAlign: 'center', width: 80 * fs }}>
                <div style={{ width: 8 * fs, height: 8 * fs, borderRadius: '50%', background: i === 3 ? 'white' : C, margin: '0 auto', opacity: 0.3 + i * 0.25 }} />
                <div style={{ color: i === 3 ? 'white' : '#555', fontSize: 8 * fs, fontWeight: 800, fontFamily: 'Rajdhani, sans-serif', marginTop: 6 * fs }}>{e.yr}</div>
                <div style={{ color: '#444', fontSize: 6 * fs, marginTop: 3 * fs, lineHeight: 1.3 }}>{e.t}</div>
              </div>
              {i < events.length - 1 && <div style={{ width: 40 * fs, height: 1, background: '#1a1a1a' }} />}
            </div>
          ))}
        </div>
        <div style={{ color: '#222', fontSize: 6 * fs, fontFamily: 'Inter, sans-serif', textAlign: 'center' }}>Born from the Nobel Prize discovery. Engineered for roads.</div>
      </div>
    )
  }

  return null
}

export default function BackPanelConcepts() {
  const [active, setActive] = useState('infographic')

  return (
    <div style={{ padding: 32, fontFamily: 'Inter, sans-serif' }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{ color: C, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8 }}>Box Side Concept — Back Panel</div>
        <h2 style={{ color: 'white', fontSize: 24, fontWeight: 700, margin: 0, fontFamily: 'Outfit, sans-serif' }}>Back Panel — 5 Content Strategies</h2>
        <p style={{ color: '#555', fontSize: 13, marginTop: 8, lineHeight: 1.6 }}>The back panel (1494×638px — widest surface) is the richest canvas. Five distinctly different approaches.</p>
      </div>

      {/* Strategy pills */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
        {CONCEPTS.map(c => {
          const Icon = c.icon
          return (
            <button key={c.id} onClick={() => setActive(c.id)} style={{
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '8px 16px', borderRadius: 6,
              border: `1px solid ${active === c.id ? C : '#1f1f1f'}`,
              background: active === c.id ? '#111' : 'transparent',
              color: active === c.id ? 'white' : '#555',
              cursor: 'pointer', fontSize: 12, fontWeight: active === c.id ? 700 : 400, transition: 'all 0.2s',
            }}>
              <Icon size={13} />
              {c.label}
            </button>
          )
        })}
      </div>

      {/* Preview — scaled back panel */}
      <div style={{ border: '1px solid #1f1f1f', borderRadius: 8, overflow: 'hidden', marginBottom: 16, display: 'inline-block' }}>
        <ConceptPreview id={active} s={scale} />
      </div>

      {/* Description */}
      {(() => {
        const c = CONCEPTS.find(x => x.id === active)
        return (
          <div style={{ padding: 16, background: '#111', border: `1px solid ${C}30`, borderRadius: 8, maxWidth: 1494 * scale }}>
            <div style={{ color: C, fontSize: 11, fontWeight: 700, marginBottom: 4 }}>{c.label}</div>
            <div style={{ color: '#555', fontSize: 12, lineHeight: 1.6 }}>{c.desc}</div>
          </div>
        )
      })()}
    </div>
  )
}

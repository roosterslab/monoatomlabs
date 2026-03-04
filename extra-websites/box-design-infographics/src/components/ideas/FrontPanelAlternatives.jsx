import React, { useState } from 'react'
import { Shield, Droplets, Zap } from 'lucide-react'

const C = '#64748B'
const W = 499
const H = 638

const VARIANTS = [
  {
    id: 'logo-first',
    label: 'A — Logo First',
    desc: 'Brand authority up front. Giant CERAPHENE wordmark dominates.',
    render: ({ scale }) => {
      const fs = scale
      return (
        <div style={{ width: W * fs, height: H * fs, background: '#050505', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 * fs, fontFamily: 'Rajdhani, sans-serif', overflow: 'hidden' }}>
          <div style={{ color: 'transparent', WebkitTextStroke: `1px rgba(255,255,255,0.08)`, fontSize: 13 * fs, fontWeight: 800, letterSpacing: '0.5em' }}>GRAPHENE CERAMIC</div>
          <div style={{ color: 'white', fontSize: 60 * fs, fontWeight: 900, lineHeight: 0.9, letterSpacing: '0.02em' }}>CERAPHENE</div>
          <div style={{ width: 60 * fs, height: 1, background: C }} />
          <div style={{ color: C, fontSize: 10 * fs, letterSpacing: '0.3em' }}>9H+ · 115° · 3–4 YRS</div>
        </div>
      )
    }
  },
  {
    id: 'number-first',
    label: 'B — Number First',
    desc: 'Dominant spec number. "9H+" as the hero — instant credibility.',
    render: ({ scale }) => {
      const fs = scale
      return (
        <div style={{ width: W * fs, height: H * fs, background: '#050505', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12 * fs, fontFamily: 'Rajdhani, sans-serif', overflow: 'hidden' }}>
          <div style={{ color: C, fontSize: 9 * fs, letterSpacing: '0.4em' }}>HARDNESS RATING</div>
          <div style={{ color: 'white', fontSize: 100 * fs, fontWeight: 900, lineHeight: 0.85, letterSpacing: '-0.02em' }}>9H+</div>
          <div style={{ color: '#333', fontSize: 8 * fs, letterSpacing: '0.2em', textAlign: 'center', maxWidth: 200 * fs, lineHeight: 1.5 }}>Diamond is 10H. Nothing on a road comes close.</div>
          <div style={{ width: 40 * fs, height: 1, background: C, margin: `${8 * fs}px 0` }} />
          <div style={{ color: C, fontSize: 16 * fs, fontWeight: 700, letterSpacing: '0.15em' }}>CERAPHENE</div>
        </div>
      )
    }
  },
  {
    id: 'emotion-first',
    label: 'C — Emotion First',
    desc: 'Fear + relief. The threat and the solution in two lines.',
    render: ({ scale }) => {
      const fs = scale
      return (
        <div style={{ width: W * fs, height: H * fs, background: '#050505', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14 * fs, fontFamily: 'Rajdhani, sans-serif', overflow: 'hidden', padding: `0 ${40 * fs}px` }}>
          <div style={{ color: '#2a2a2a', fontSize: 10 * fs, letterSpacing: '0.35em', textAlign: 'center' }}>ACID RAIN. UV. ROCK CHIPS. BRAKE HEAT.</div>
          <div style={{ color: 'white', fontSize: 48 * fs, fontWeight: 900, lineHeight: 1, textAlign: 'center' }}>9 THREATS.<br />ZERO<br />DAMAGE.</div>
          <div style={{ width: 40 * fs, height: 1, background: C }} />
          <div style={{ color: C, fontSize: 13 * fs, fontWeight: 700, letterSpacing: '0.2em' }}>CERAPHENE</div>
          <div style={{ color: '#333', fontSize: 8 * fs, letterSpacing: '0.1em' }}>GRAPHENE CERAMIC COATING</div>
        </div>
      )
    }
  },
  {
    id: 'science-first',
    label: 'D — Science First',
    desc: 'Credibility play. The physics/chemistry front and centre.',
    render: ({ scale }) => {
      const fs = scale
      return (
        <div style={{ width: W * fs, height: H * fs, background: '#050505', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10 * fs, fontFamily: 'Rajdhani, sans-serif', overflow: 'hidden' }}>
          {/* Water bead SVG */}
          <svg width={120 * fs} height={60 * fs} style={{ marginBottom: 8 * fs }}>
            {(() => {
              const cx = 60 * fs, sy = 55 * fs, r = 46 * fs, θ = 115 * Math.PI / 180
              const hw = r * Math.sin(θ)
              return (
                <g>
                  <line x1={0} y1={sy} x2={120 * fs} y2={sy} stroke={C} strokeWidth={fs} opacity="0.4" />
                  <rect x={0} y={sy - 2} width={120 * fs} height={3} fill={C} opacity="0.1" rx="1" />
                  <path d={`M ${cx - hw},${sy} A ${r},${r} 0 0 1 ${cx + hw},${sy}`} fill={`${C}25`} stroke={C} strokeWidth={1.5 * fs} />
                  <text x={cx} y={sy - r * 0.6} fill="white" fontSize={14 * fs} textAnchor="middle" fontFamily="Rajdhani, sans-serif" fontWeight="800">115°</text>
                </g>
              )
            })()}
          </svg>
          <div style={{ color: C, fontSize: 8 * fs, letterSpacing: '0.3em' }}>SUPERHYDROPHOBIC</div>
          <div style={{ color: 'white', fontSize: 44 * fs, fontWeight: 900, lineHeight: 0.9, letterSpacing: '0.02em' }}>CERAPHENE</div>
          <div style={{ color: '#333', fontSize: 9 * fs, letterSpacing: '0.2em', textAlign: 'center' }}>Independently verified. Lotus effect engineered.</div>
        </div>
      )
    }
  },
  {
    id: 'competitive-first',
    label: 'E — Value First',
    desc: '60–70% cheaper than premium competitors. Price is the hook.',
    render: ({ scale }) => {
      const fs = scale
      return (
        <div style={{ width: W * fs, height: H * fs, background: '#050505', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12 * fs, fontFamily: 'Rajdhani, sans-serif', overflow: 'hidden' }}>
          <div style={{ color: '#2a2a2a', fontSize: 9 * fs, letterSpacing: '0.35em' }}>COMPETITORS CHARGE</div>
          <div style={{ color: '#333', fontSize: 38 * fs, fontWeight: 900, lineHeight: 1, textDecoration: 'line-through' }}>₹15,000</div>
          <div style={{ width: 40 * fs, height: 1, background: '#222' }} />
          <div style={{ color: C, fontSize: 9 * fs, letterSpacing: '0.35em' }}>CERAPHENE — SAME PROTECTION</div>
          <div style={{ color: 'white', fontSize: 56 * fs, fontWeight: 900, lineHeight: 1 }}>₹5,000</div>
          <div style={{ color: '#333', fontSize: 8 * fs, letterSpacing: '0.2em' }}>60–70% SAVINGS · SAME 9H+ HARDNESS</div>
        </div>
      )
    }
  },
  {
    id: 'minimal',
    label: 'F — Minimalist',
    desc: 'Just the name + single line. Luxury positioning — let silence speak.',
    render: ({ scale }) => {
      const fs = scale
      return (
        <div style={{ width: W * fs, height: H * fs, background: '#050505', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 24 * fs, fontFamily: 'Rajdhani, sans-serif', overflow: 'hidden' }}>
          <Shield size={Math.round(28 * fs)} color={C} strokeWidth={0.8} />
          <div style={{ color: 'white', fontSize: 52 * fs, fontWeight: 900, lineHeight: 0.9, letterSpacing: '0.05em' }}>CERAPHENE</div>
          <div style={{ width: 30 * fs, height: 0.5, background: C }} />
          <div style={{ color: '#2a2a2a', fontSize: 8 * fs, letterSpacing: '0.4em' }}>GRAPHENE CERAMIC</div>
        </div>
      )
    }
  },
]

export default function FrontPanelAlternatives() {
  const [highlight, setHighlight] = useState(null)
  const scale = 0.26

  return (
    <div style={{ padding: 32, fontFamily: 'Inter, sans-serif' }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{ color: '#64748B', fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8 }}>Box Side Concept — Front Panel</div>
        <h2 style={{ color: 'white', fontSize: 24, fontWeight: 700, margin: 0, fontFamily: 'Outfit, sans-serif' }}>6 Front Panel Approaches</h2>
        <p style={{ color: '#555', fontSize: 13, marginTop: 8, lineHeight: 1.6 }}>Hover to highlight. Each explores a different first impression — the hook that makes someone pick up the box.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 24 }}>
        {VARIANTS.map(v => (
          <div
            key={v.id}
            onMouseEnter={() => setHighlight(v.id)}
            onMouseLeave={() => setHighlight(null)}
            style={{ cursor: 'pointer' }}
          >
            {/* Panel preview */}
            <div style={{
              border: `1px solid ${highlight === v.id ? '#64748B' : '#1f1f1f'}`,
              borderRadius: 8,
              overflow: 'hidden',
              transition: 'border-color 0.2s',
              display: 'inline-block',
            }}>
              {v.render({ scale })}
            </div>

            {/* Label */}
            <div style={{ marginTop: 12, paddingLeft: 4 }}>
              <div style={{ color: highlight === v.id ? 'white' : '#aaa', fontSize: 13, fontWeight: 700, fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.1em', transition: 'color 0.2s' }}>
                {v.label}
              </div>
              <div style={{ color: '#555', fontSize: 11, marginTop: 3, lineHeight: 1.5 }}>{v.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Notes */}
      <div style={{ marginTop: 40, padding: 20, background: '#111', border: '1px solid #1f1f1f', borderRadius: 8 }}>
        <div style={{ color: '#64748B', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8 }}>Design Notes</div>
        <ul style={{ color: '#555', fontSize: 12, lineHeight: 2, margin: 0, paddingLeft: 16 }}>
          <li><strong style={{ color: '#777' }}>A (Logo First)</strong> — Best for existing brand recognition. Works if CERAPHENE is already known.</li>
          <li><strong style={{ color: '#777' }}>B (Number First)</strong> — Best for shelf retail. 9H+ is a universal quality signal.</li>
          <li><strong style={{ color: '#777' }}>C (Emotion First)</strong> — Best for detailer workshops. Speaks to anxiety about paint damage.</li>
          <li><strong style={{ color: '#777' }}>D (Science First)</strong> — Best for enthusiasts. The 115° angle signals technical knowledge.</li>
          <li><strong style={{ color: '#777' }}>E (Value First)</strong> — Best for price-sensitive markets and comparison retail contexts.</li>
          <li><strong style={{ color: '#777' }}>F (Minimalist)</strong> — Best for premium gifting / luxury positioning. Less is more.</li>
        </ul>
      </div>
    </div>
  )
}

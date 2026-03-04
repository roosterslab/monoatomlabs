import React, { useState } from 'react'

const C = '#64748B'

const TAGLINES = [
  {
    line: '9 Threats. Zero Damage.',
    sub: 'Comprehensive protection for every road condition.',
    score: { impact: 95, recall: 90, clarity: 88 },
    notes: 'The most specific and dramatic. Makes an immediate promise.',
  },
  {
    line: 'The Invisible Shield.',
    sub: '3–4 μm of graphene-ceramic protection you can\'t see — but always feel.',
    score: { impact: 85, recall: 95, clarity: 80 },
    notes: 'Highly memorable. "Invisible" is evocative and accurate (3–4μm).',
  },
  {
    line: 'Thinner Than a Hair. Stronger Than Steel.',
    sub: 'Graphene ceramic at 3–4 microns — 1/20th the thickness of a human hair.',
    score: { impact: 92, recall: 88, clarity: 95 },
    notes: 'Great contrast pair. Educates + impresses simultaneously.',
  },
  {
    line: '115° Superhydrophobic.',
    sub: 'Water doesn\'t sit. It runs.',
    score: { impact: 78, recall: 70, clarity: 85 },
    notes: 'Technical but powerful. Best for enthusiast/detailer audience.',
  },
  {
    line: 'Molecularly Bonded. Physically Unbeatable.',
    sub: 'Graphene nano-platelets chemically fused to your clearcoat.',
    score: { impact: 82, recall: 75, clarity: 80 },
    notes: 'Premium, scientific. Strong for B2B / professional contexts.',
  },
  {
    line: 'Graphene. Engineered for Roads.',
    sub: 'From Nobel Prize laboratory to your clearcoat.',
    score: { impact: 80, recall: 82, clarity: 88 },
    notes: 'Noble pedigree. Best when "graphene" is the primary hook.',
  },
  {
    line: 'Premium Protection at 60% Less.',
    sub: '9H+ hardness. ₹5,000 vs ₹15,000 competitors.',
    score: { impact: 90, recall: 85, clarity: 98 },
    notes: 'Ruthlessly clear value proposition. Best for retail/cost-sensitive.',
  },
]

function ScoreBar({ label, value }) {
  return (
    <div style={{ marginBottom: 6 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
        <span style={{ color: '#555', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{label}</span>
        <span style={{ color: '#777', fontSize: 10, fontWeight: 700 }}>{value}</span>
      </div>
      <div style={{ height: 2, background: '#1f1f1f', borderRadius: 2 }}>
        <div style={{ width: `${value}%`, height: '100%', background: C, borderRadius: 2, transition: 'width 0.4s ease' }} />
      </div>
    </div>
  )
}

function BoxMockup({ tagline, sub, scale = 0.28 }) {
  const fs = scale
  const W = 499, H = 638
  return (
    <div style={{
      width: W * fs, height: H * fs,
      background: '#050505',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      gap: 14 * fs, fontFamily: 'Rajdhani, sans-serif',
      border: '1px solid #1f1f1f',
      overflow: 'hidden',
      padding: `0 ${30 * fs}px`,
    }}>
      <div style={{ color: 'transparent', WebkitTextStroke: `0.5px rgba(255,255,255,0.07)`, fontSize: 10 * fs, fontWeight: 800, letterSpacing: '0.4em', textAlign: 'center' }}>GRAPHENE CERAMIC</div>
      <div style={{ color: 'white', fontSize: 42 * fs, fontWeight: 900, lineHeight: 0.9, textAlign: 'center' }}>CERAPHENE</div>
      <div style={{ width: 40 * fs, height: 1, background: C }} />
      <div style={{ color: 'white', fontSize: 14 * fs, fontWeight: 700, letterSpacing: '0.05em', textAlign: 'center', lineHeight: 1.3 }}>{tagline}</div>
      {sub && <div style={{ color: '#444', fontSize: 8 * fs, textAlign: 'center', lineHeight: 1.5, fontFamily: 'Inter, sans-serif' }}>{sub}</div>}
    </div>
  )
}

export default function TaglineExplorer() {
  const [selected, setSelected] = useState(0)
  const t = TAGLINES[selected]

  return (
    <div style={{ padding: 32, fontFamily: 'Inter, sans-serif' }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{ color: '#64748B', fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8 }}>Marketing Ideas — Taglines</div>
        <h2 style={{ color: 'white', fontSize: 24, fontWeight: 700, margin: 0, fontFamily: 'Outfit, sans-serif' }}>Tagline Explorer</h2>
        <p style={{ color: '#555', fontSize: 13, marginTop: 8, lineHeight: 1.6 }}>Click any tagline to see it as a front panel. Scored on impact, recall, and clarity.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 32 }}>

        {/* Left: tagline list */}
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
            {TAGLINES.map((tg, i) => (
              <button
                key={i}
                onClick={() => setSelected(i)}
                style={{
                  background: selected === i ? '#111' : 'transparent',
                  border: `1px solid ${selected === i ? C : '#1f1f1f'}`,
                  borderRadius: 8,
                  padding: '14px 16px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                <div style={{ color: selected === i ? 'white' : '#777', fontSize: 16, fontWeight: 700, fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.05em', marginBottom: 4 }}>
                  {tg.line}
                </div>
                <div style={{ color: '#444', fontSize: 11, lineHeight: 1.4 }}>{tg.sub}</div>
              </button>
            ))}
          </div>

          {/* Notes */}
          <div style={{ padding: 16, background: '#111', border: '1px solid #1f1f1f', borderRadius: 8 }}>
            <div style={{ color: C, fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 8 }}>Selected — Notes</div>
            <div style={{ color: '#666', fontSize: 12, lineHeight: 1.6 }}>{t.notes}</div>
          </div>
        </div>

        {/* Right: live preview + scores */}
        <div>
          <BoxMockup tagline={t.line} sub={t.sub} />
          <div style={{ marginTop: 20, padding: 16, background: '#111', border: '1px solid #1f1f1f', borderRadius: 8 }}>
            <div style={{ color: C, fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 12 }}>Scores</div>
            <ScoreBar label="Impact" value={t.score.impact} />
            <ScoreBar label="Recall" value={t.score.recall} />
            <ScoreBar label="Clarity" value={t.score.clarity} />
          </div>
        </div>
      </div>
    </div>
  )
}

import React, { useState } from 'react'
import { Shield } from 'lucide-react'

const C = '#64748B'
const SW = 204, SH = 638

const IDEAS = [
  {
    id: 'vertical-text',
    label: 'A — Vertical Text',
    desc: 'Clean vertical wordmark. Product name rotated, tracking + weight.',
    render: (fs) => (
      <div style={{ width: SW * fs, height: SH * fs, background: '#050505', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <div style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 * fs }}>
          <div style={{ color: C, fontSize: 7 * fs, letterSpacing: '0.3em', fontFamily: 'Rajdhani, sans-serif' }}>GRAPHENE CERAMIC</div>
          <div style={{ width: 1, height: 30 * fs, background: '#222' }} />
          <div style={{ color: 'white', fontSize: 18 * fs, fontWeight: 900, letterSpacing: '0.12em', fontFamily: 'Rajdhani, sans-serif' }}>CERAPHENE</div>
          <div style={{ width: 1, height: 30 * fs, background: '#222' }} />
          <div style={{ color: '#333', fontSize: 7 * fs, letterSpacing: '0.2em', fontFamily: 'Inter, sans-serif' }}>MONOATOM LABS</div>
        </div>
      </div>
    )
  },
  {
    id: 'stats-column',
    label: 'B — Mini Stats',
    desc: 'Key numbers stacked vertically. Data at a glance on a narrow panel.',
    render: (fs) => (
      <div style={{ width: SW * fs, height: SH * fs, background: '#050505', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 0, overflow: 'hidden' }}>
        {[['9H+', 'HARDNESS'], ['115°', 'CONTACT'], ['4 YR', 'LIFE'], ['700°C', 'HEAT']].map(([val, label], i) => (
          <div key={i} style={{ width: '100%', padding: `${12 * fs}px 0`, textAlign: 'center', borderBottom: i < 3 ? '1px solid #111' : 'none' }}>
            <div style={{ color: 'white', fontSize: 16 * fs, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif', lineHeight: 1 }}>{val}</div>
            <div style={{ color: '#333', fontSize: 5.5 * fs, letterSpacing: '0.15em', marginTop: 3 * fs }}>{label}</div>
          </div>
        ))}
      </div>
    )
  },
  {
    id: 'shield',
    label: 'C — Shield Mark',
    desc: 'Shield icon centred with brand name. Elegant, authoritative.',
    render: (fs) => (
      <div style={{ width: SW * fs, height: SH * fs, background: '#050505', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14 * fs, overflow: 'hidden' }}>
        <Shield size={Math.round(40 * fs)} color={C} strokeWidth={1} />
        <div style={{ width: 20 * fs, height: 1, background: '#1f1f1f' }} />
        <div style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', color: '#333', fontSize: 7 * fs, letterSpacing: '0.3em', fontFamily: 'Rajdhani, sans-serif' }}>CERAPHENE</div>
      </div>
    )
  },
  {
    id: 'barcode-aesthetic',
    label: 'D — Barcode Aesthetic',
    desc: 'Industrial tech look — vertical bars like data encoding. Distinctive and bold.',
    render: (fs) => (
      <div style={{ width: SW * fs, height: SH * fs, background: '#050505', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <div style={{ display: 'flex', gap: fs * 1.5, height: SH * fs * 0.7, alignItems: 'flex-end' }}>
          {Array.from({ length: 22 }, (_, i) => {
            const heights = [0.3, 0.5, 0.8, 1, 0.6, 0.4, 0.9, 0.7, 1, 0.5, 0.3, 0.6, 0.8, 0.4, 1, 0.7, 0.5, 0.9, 0.6, 0.4, 0.8, 0.5]
            return (
              <div key={i} style={{ width: 3 * fs, height: `${heights[i] * 100}%`, background: i % 7 === 0 ? C : '#1a1a1a', borderRadius: 1 }} />
            )
          })}
        </div>
      </div>
    )
  },
  {
    id: 'timeline-strip',
    label: 'E — Timeline Strip',
    desc: 'Year milestones running vertically — the graphene story in a side panel.',
    render: (fs) => (
      <div style={{ width: SW * fs, height: SH * fs, background: '#050505', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 0, overflow: 'hidden', padding: `${20 * fs}px 0` }}>
        {[['2004', 'Graphene\nDiscovered'], ['2010', 'Nobel\nPrize'], ['2018', 'Nano\nPlatelets'], ['2024', 'CERA\nPHENE']].map(([yr, label], i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ color: i === 3 ? 'white' : '#444', fontSize: 12 * fs, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif' }}>{yr}</div>
              <div style={{ color: i === 3 ? C : '#2a2a2a', fontSize: 5.5 * fs, textAlign: 'center', lineHeight: 1.3, whiteSpace: 'pre-line' }}>{label}</div>
            </div>
            {i < 3 && <div style={{ width: 1, height: 30 * fs, background: '#1a1a1a', margin: `${6 * fs}px 0` }} />}
          </div>
        ))}
      </div>
    )
  },
]

export default function SidePanelIdeas() {
  const [active, setActive] = useState('vertical-text')
  const scale = 0.55

  return (
    <div style={{ padding: 32, fontFamily: 'Inter, sans-serif' }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{ color: C, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8 }}>Box Side Concept — Side Panels</div>
        <h2 style={{ color: 'white', fontSize: 24, fontWeight: 700, margin: 0, fontFamily: 'Outfit, sans-serif' }}>Side Panel Ideas (204×638px)</h2>
        <p style={{ color: '#555', fontSize: 13, marginTop: 8, lineHeight: 1.6 }}>The narrow side panels are often wasted space. Five ideas to make them work harder.</p>
      </div>

      {/* Gallery */}
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 24 }}>
        {IDEAS.map(idea => (
          <div key={idea.id} style={{ cursor: 'pointer' }} onClick={() => setActive(idea.id)}>
            <div style={{ border: `1px solid ${active === idea.id ? C : '#1f1f1f'}`, borderRadius: 6, overflow: 'hidden', transition: 'border-color 0.2s', display: 'inline-block' }}>
              {idea.render(scale * 0.5)}
            </div>
            <div style={{ marginTop: 8, maxWidth: SW * scale * 0.5 }}>
              <div style={{ color: active === idea.id ? 'white' : '#777', fontSize: 12, fontWeight: 700, fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.08em', transition: 'color 0.2s' }}>{idea.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Large preview + description */}
      {(() => {
        const idea = IDEAS.find(i => i.id === active)
        return (
          <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
            <div style={{ border: '1px solid #1f1f1f', borderRadius: 8, overflow: 'hidden', flexShrink: 0 }}>
              {idea.render(scale)}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ color: 'white', fontSize: 16, fontWeight: 700, fontFamily: 'Rajdhani, sans-serif', marginBottom: 8 }}>{idea.label}</div>
              <div style={{ color: '#555', fontSize: 13, lineHeight: 1.7, marginBottom: 16 }}>{idea.desc}</div>
              <div style={{ padding: 14, background: '#111', border: '1px solid #1f1f1f', borderRadius: 8 }}>
                <div style={{ color: C, fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 6 }}>Dimensions</div>
                <div style={{ color: '#555', fontSize: 12 }}>204 × 638 px at 96dpi (scale=1)</div>
                <div style={{ color: '#444', fontSize: 11, marginTop: 4, lineHeight: 1.5 }}>The side panels are the left and right faces of the box. Content should read clearly both horizontally (when box is opened) and vertically (when box is sealed and standing).</div>
              </div>
            </div>
          </div>
        )
      })()}
    </div>
  )
}

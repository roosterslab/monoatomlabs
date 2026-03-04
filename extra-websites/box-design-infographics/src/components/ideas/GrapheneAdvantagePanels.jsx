import React, { useState } from 'react'

const C = '#64748B'
const BLUE = '#1E40AF'

const STYLES = [
  { id: 'story-left', name: 'Story — Left Panel' },
  { id: 'lab-verified', name: 'Lab Verified — Right Panel' },
  { id: 'split-layout', name: 'Full Back — Split' },
]

export default function GrapheneAdvantagePanels() {
  const [style, setStyle] = useState('story-left')

  return (
    <div style={{ padding: 32, fontFamily: 'Inter, sans-serif' }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{ color: C, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8 }}>Box Side Concepts — Back Panel</div>
        <h2 style={{ color: 'white', fontSize: 24, fontWeight: 700, margin: 0, fontFamily: 'Outfit, sans-serif' }}>The Graphene Advantage + Lab Verified</h2>
        <p style={{ color: '#555', fontSize: 13, marginTop: 8, lineHeight: 1.6 }}>
          Two compelling back panel halves: left side tells the science story, right side shows verified performance with icons and spec table. Inspired by reference image.
        </p>
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 28, flexWrap: 'wrap' }}>
        {STYLES.map(s => (
          <button key={s.id} onClick={() => setStyle(s.id)} style={{
            padding: '7px 14px', borderRadius: 6,
            border: `1px solid ${style === s.id ? C : '#1f1f1f'}`,
            background: style === s.id ? '#111' : 'transparent',
            color: style === s.id ? 'white' : '#555',
            cursor: 'pointer', fontSize: 12,
          }}>{s.name}</button>
        ))}
      </div>

      {style === 'story-left' && (
        <div style={{ background: '#050505', border: '1px solid #1f1f1f', borderRadius: 8, padding: 40, maxWidth: 480 }}>
          {/* Hex pattern bg subtle */}
          <div style={{ position: 'relative' }}>
            <div style={{ color: C, fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 16, fontFamily: 'Rajdhani, sans-serif' }}>Science</div>
            <div style={{ color: 'white', fontSize: 26, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif', lineHeight: 1.1, marginBottom: 16 }}>
              THE GRAPHENE<br />ADVANTAGE
            </div>
            <div style={{ color: '#555', fontSize: 12, lineHeight: 1.8, marginBottom: 20 }}>
              Ceraphene integrates graphene-oxide nanoparticles within a ceramic matrix, cross-linked into a lattice structure that delivers:
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
              {[
                { dot: '◆', text: 'Superior hardness — nano-reinforced ceramic matrix reaches 9H+ on the pencil scale' },
                { dot: '◆', text: 'Extreme thermal dissipation — graphene conducts heat 5× better than copper' },
                { dot: '◆', text: 'Reduced water spotting — 115° contact angle causes water to bead and roll' },
                { dot: '◆', text: 'Anti-static surface — graphene conductivity neutralises charge, repels dust' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 10 }}>
                  <span style={{ color: C, fontSize: 8, marginTop: 4, flexShrink: 0 }}>{item.dot}</span>
                  <span style={{ color: '#555', fontSize: 12, lineHeight: 1.5 }}>{item.text}</span>
                </div>
              ))}
            </div>
            <div style={{ borderTop: '1px solid #111', paddingTop: 16 }}>
              <div style={{ color: '#333', fontSize: 11, fontStyle: 'italic', lineHeight: 1.6 }}>
                Engineered at nano-scale. Protected at macro-scale.
              </div>
            </div>
          </div>
        </div>
      )}

      {style === 'lab-verified' && (
        <div style={{ background: '#050505', border: '1px solid #1f1f1f', borderRadius: 8, padding: 32, maxWidth: 520 }}>
          {/* Header */}
          <div style={{ borderBottom: `2px solid ${BLUE}`, paddingBottom: 12, marginBottom: 24 }}>
            <div style={{ color: 'white', fontSize: 18, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.1em' }}>
              LAB VERIFIED PERFORMANCE
            </div>
          </div>

          {/* Three icon-spec columns */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 28 }}>
            {[
              { icon: '✕', label: 'HEAT RESISTANCE', val: '700°C', desc: 'Ceramic framework tolerant to extreme brake and engine temperatures.' },
              { icon: '⚡', label: 'HAZARD RESISTANCE', val: 'pH 2–12', desc: 'Absolute corrosion barrier from acids, bases, and industrial chemicals.' },
              { icon: '◎', label: 'UV PROTECTION', val: '99.9%', desc: 'Graphene layer blocks UV-A and UV-B. Prevents paint oxidation and fading.' },
            ].map((item, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', border: `1px solid ${BLUE}60`, background: `${BLUE}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px', color: '#6B7FFF', fontSize: 14 }}>
                  {item.icon}
                </div>
                <div style={{ color: '#4B7FFF', fontSize: 9, letterSpacing: '0.15em', marginBottom: 6, fontFamily: 'Rajdhani, sans-serif' }}>#{item.label}</div>
                <div style={{ color: 'white', fontSize: 18, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif', marginBottom: 6 }}>{item.val}</div>
                <div style={{ color: '#444', fontSize: 10, lineHeight: 1.5 }}>{item.desc}</div>
              </div>
            ))}
          </div>

          {/* Spec table */}
          <div style={{ borderTop: '1px solid #111', paddingTop: 16 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
              {[
                ['Hardness', '9H+ Certified'],
                ['Contact Angle', '115° Superhydrophobic'],
                ['Layer Thickness', '3–4 μm'],
                ['Coverage', '50 ml / 1 vehicle'],
                ['Durability', '4+ years'],
                ['Cure Time', '7 days full cure'],
                ['Gloss Level', '95–100 GU'],
                ['Application Temp', '15–25°C'],
              ].map(([k, v], i) => (
                <div key={i} style={{ padding: '8px 0', borderBottom: '1px solid #080808', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#444', fontSize: 10 }}>{k}</span>
                  <span style={{ color: '#888', fontSize: 10, fontFamily: 'Rajdhani, sans-serif', fontWeight: 700 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 16, color: '#2a2a2a', fontSize: 10 }}>ISO 9001:2015 Certified Manufacturing · iHub Gujarat, Ahmedabad</div>
        </div>
      )}

      {style === 'split-layout' && (
        <div style={{ background: '#050505', border: '1px solid #1f1f1f', borderRadius: 8, overflow: 'hidden', maxWidth: 800 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
            {/* Left — Story */}
            <div style={{ padding: 32, borderRight: '1px solid #0d0d0d' }}>
              <div style={{ color: C, fontSize: 9, letterSpacing: '0.2em', marginBottom: 12 }}>SCIENCE</div>
              <div style={{ color: 'white', fontSize: 20, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif', lineHeight: 1.1, marginBottom: 14 }}>
                THE GRAPHENE<br />ADVANTAGE
              </div>
              <div style={{ color: '#444', fontSize: 11, lineHeight: 1.7, marginBottom: 16 }}>
                Graphene-oxide nanoparticles in ceramic matrix. Cross-linked lattice structure that bonds directly to clearcoat.
              </div>
              {['Superior hardness', 'Extreme thermal dissipation', 'Reduced water spotting', 'Anti-static surface'].map((b, i) => (
                <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                  <span style={{ color: C, fontSize: 9, marginTop: 2 }}>◆</span>
                  <span style={{ color: '#444', fontSize: 11 }}>{b}</span>
                </div>
              ))}
              <div style={{ marginTop: 20, color: '#2a2a2a', fontSize: 10, fontStyle: 'italic' }}>
                Engineered at nano-scale. Protected at macro-scale.
              </div>
            </div>

            {/* Right — Lab Verified */}
            <div style={{ padding: 32, background: '#030303' }}>
              <div style={{ borderBottom: `2px solid ${BLUE}`, paddingBottom: 10, marginBottom: 20 }}>
                <div style={{ color: 'white', fontSize: 14, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.1em' }}>
                  LAB VERIFIED PERFORMANCE
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginBottom: 20 }}>
                {[
                  { icon: '✕', label: 'HEAT', val: '700°C' },
                  { icon: '⚡', label: 'CHEMICAL', val: 'pH 2–12' },
                  { icon: '◎', label: 'UV BLOCK', val: '99.9%' },
                ].map((item, i) => (
                  <div key={i} style={{ textAlign: 'center' }}>
                    <div style={{ width: 28, height: 28, borderRadius: '50%', border: `1px solid ${BLUE}50`, background: `${BLUE}10`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 6px', color: '#4B7FFF', fontSize: 11 }}>
                      {item.icon}
                    </div>
                    <div style={{ color: '#4B7FFF', fontSize: 7, letterSpacing: '0.1em' }}>{item.label}</div>
                    <div style={{ color: 'white', fontSize: 14, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif' }}>{item.val}</div>
                  </div>
                ))}
              </div>
              {[['Hardness', '9H+'], ['Contact Angle', '115°'], ['Durability', '4+ Yrs'], ['Layer', '3–4μm']].map(([k, v], i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid #0a0a0a' }}>
                  <span style={{ color: '#333', fontSize: 10 }}>{k}</span>
                  <span style={{ color: '#666', fontSize: 10, fontFamily: 'Rajdhani, sans-serif', fontWeight: 700 }}>{v}</span>
                </div>
              ))}
              <div style={{ marginTop: 12, color: '#1a1a1a', fontSize: 9 }}>ISO 9001:2015 Certified Manufacturing</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

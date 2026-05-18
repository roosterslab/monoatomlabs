import React from 'react'

const C = '#64748b'

const threats = [
  { icon: '🌧️', label: 'Acid Rain', desc: 'pH as low as 2 · etches bare paint' },
  { icon: '🐦', label: 'Bird Droppings', desc: 'Uric acid · pH 3–4 · paint etching' },
  { icon: '🪨', label: 'Rock Chips', desc: 'High-speed road debris impact' },
  { icon: '🔥', label: 'Brake Heat', desc: 'Up to 700°C · metallic fallout' },
  { icon: '⚙️', label: 'Iron Fallout', desc: 'Embedded metal particles · rust' },
  { icon: '🛣️', label: 'Road Chemicals', desc: 'Salt, tar, fuel — pH 2–12 range' },
  { icon: '☀️', label: 'UV Radiation', desc: 'Paint fade · oxidation · chalking' },
  { icon: '💧', label: 'Water Spots', desc: 'Mineral deposits on bare paint' },
  { icon: '🔴', label: 'Oxidation', desc: 'Atmospheric oxygen · dull finish' },
]

export default function CerThreatProtection() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>CERAPHENE · Protection Matrix</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>9 THREATS NEUTRALIZED</div>
        <div style={{ color: '#64748b', fontSize: 13, marginTop: 4 }}>One coating — complete environmental defence for automotive paint</div>
      </div>

      {/* 3×3 threat grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 28 }}>
        {threats.map((t, i) => (
          <div key={i} style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: 10, padding: 18, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: C + '44' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
              <span style={{ fontSize: 24 }}>{t.icon}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 16, height: 16, borderRadius: '50%', background: '#0a1a10', border: '1px solid #166534', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: '#4ade80', fontSize: 9, fontWeight: 700 }}>✓</span>
                </div>
                <span style={{ color: '#4ade80', fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>BLOCKED</span>
              </div>
            </div>
            <div style={{ color: '#e2e8f0', fontSize: 13, fontWeight: 700, marginBottom: 4 }}>{t.label}</div>
            <div style={{ color: '#475569', fontSize: 11, lineHeight: 1.4 }}>{t.desc}</div>
          </div>
        ))}
      </div>

      {/* Bottom stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
        {[
          { val: '9', label: 'Threats Blocked' },
          { val: 'pH 2–12', label: 'Chemical Range' },
          { val: '700°C', label: 'Heat Resistance' },
          { val: '9H+', label: 'Impact Hardness' },
        ].map((b, i) => (
          <div key={i} style={{ background: '#0d0d0d', border: '1px solid #1f1f1f', borderRadius: 8, padding: '16px 12px', textAlign: 'center' }}>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 28, fontWeight: 700, color: '#fff' }}>{b.val}</div>
            <div style={{ color: C, fontSize: 10, letterSpacing: 1, textTransform: 'uppercase', marginTop: 4 }}>{b.label}</div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 20, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · CERAPHENE · FULL PROTECTION</div>
    </div>
  )
}

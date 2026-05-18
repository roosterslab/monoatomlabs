import React from 'react'

const C = '#64748b'

export default function CerWaterBeading() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>CERAPHENE · Hydrophobicity</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>WATER BEADING SCIENCE</div>
        <div style={{ color: '#64748b', fontSize: 13, marginTop: 4 }}>JIS R3257 Contact Angle Testing · Superhydrophobic Surface</div>
      </div>

      {/* Three surface comparison */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 32 }}>
        {[
          { angle: 40, label: 'Untreated Paint', type: 'hydrophilic', desc: 'Water spreads flat. Dirt sticks. Frequent washing needed.', color: '#ef4444' },
          { angle: 90, label: 'Standard Wax', type: 'hydrophobic', desc: 'Basic beading. Short-lived. Requires monthly reapplication.', color: '#f59e0b' },
          { angle: 115, label: 'CERAPHENE', type: 'superhydrophobic', desc: 'Water rolls off. Self-cleaning. 3–4 year protection.', color: C },
        ].map((s, i) => (
          <div key={i} style={{ background: '#111', border: `1px solid ${i === 2 ? C + '55' : '#1f1f1f'}`, borderRadius: 12, padding: 20, textAlign: 'center' }}>
            {/* Drop SVG */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
              <svg width="120" height="80" viewBox="0 0 120 80">
                {/* Surface line */}
                <line x1="10" y1="65" x2="110" y2="65" stroke="#333" strokeWidth="2" />
                {/* Water drop approximation as ellipse */}
                {i === 0 && (
                  <ellipse cx="60" cy="62" rx="38" ry="10" fill="#3b82f655" stroke="#3b82f6" strokeWidth="1.5" />
                )}
                {i === 1 && (
                  <ellipse cx="60" cy="58" rx="22" ry="16" fill="#3b82f655" stroke="#3b82f6" strokeWidth="1.5" />
                )}
                {i === 2 && (
                  <circle cx="60" cy="50" r="20" fill="#3b82f655" stroke="#60a5fa" strokeWidth="1.5" />
                )}
                {/* Angle arc */}
                <text x="20" y="60" fill={s.color} fontSize="13" fontWeight="700">{s.angle}°</text>
              </svg>
            </div>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 32, fontWeight: 700, color: s.color }}>{s.angle}°</div>
            <div style={{ color: '#e2e8f0', fontSize: 13, fontWeight: 600, marginTop: 4 }}>{s.label}</div>
            <div style={{ color: '#64748b', fontSize: 11, letterSpacing: 2, fontWeight: 600, textTransform: 'uppercase', marginTop: 4 }}>{s.type}</div>
            <div style={{ color: '#475569', fontSize: 11, marginTop: 10, lineHeight: 1.5 }}>{s.desc}</div>
          </div>
        ))}
      </div>

      {/* Scale bar */}
      <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: 12, padding: 20, marginBottom: 20 }}>
        <div style={{ color: '#64748b', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 14 }}>Contact Angle Scale</div>
        <div style={{ position: 'relative', height: 12, background: 'linear-gradient(to right, #ef4444, #f59e0b, #22c55e, #60a5fa)', borderRadius: 6 }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
          <span style={{ color: '#ef4444', fontSize: 10 }}>0° Hydrophilic</span>
          <span style={{ color: '#f59e0b', fontSize: 10 }}>90° Neutral</span>
          <span style={{ color: '#60a5fa', fontSize: 10 }}>150°+ Superhydrophobic</span>
        </div>
        <div style={{ marginTop: 10, display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: '76%', height: 3, background: 'transparent' }} />
          <div style={{ width: 2, height: 16, background: C }} />
          <span style={{ color: C, fontSize: 12, fontWeight: 700 }}>CERAPHENE 115°</span>
        </div>
      </div>

      {/* Benefits row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
        {[
          { val: '115°', label: 'Contact Angle' },
          { val: '60%', label: 'Fewer Washes' },
          { val: '100L', label: 'Water Saved/yr' },
          { val: 'Self', label: 'Cleaning Effect' },
        ].map((b, i) => (
          <div key={i} style={{ background: '#0d0d0d', border: '1px solid #1f1f1f', borderRadius: 8, padding: '14px 12px', textAlign: 'center' }}>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 26, fontWeight: 700, color: '#fff' }}>{b.val}</div>
            <div style={{ color: C, fontSize: 10, letterSpacing: 1, textTransform: 'uppercase', marginTop: 4 }}>{b.label}</div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 20, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · CERAPHENE · JIS R3257</div>
    </div>
  )
}

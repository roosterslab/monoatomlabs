import React from 'react'

const C = '#f59e0b'

const systems = [
  { label: '100 kW',  base: 150000, gain: 165000, pct: 10, revenue: 105000 },
  { label: '500 kW',  base: 750000, gain: 840000, pct: 12, revenue: 630000 },
  { label: '1 MW',    base: 1500000, gain: 1650000, pct: 10, revenue: 1050000 },
  { label: '10 MW',   base: 15000000, gain: 16800000, pct: 12, revenue: 10500000 },
]
const MAX_BASE = 15000000

const fmtKwh = (n) => {
  if (n >= 1000000) return (n/1000000).toFixed(1) + 'M kWh'
  if (n >= 1000) return (n/1000).toFixed(0) + 'K kWh'
  return n + ' kWh'
}
const fmtInr = (n) => {
  if (n >= 10000000) return '₹' + (n/10000000).toFixed(2) + ' Cr'
  if (n >= 100000) return '₹' + (n/100000).toFixed(1) + 'L'
  return '₹' + n.toLocaleString('en-IN')
}

export default function SolPowerGain() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>GRAFFISOL · Energy</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>POWER OUTPUT GAIN</div>
        <div style={{ color: '#64748b', fontSize: 13, marginTop: 4 }}>Annual generation before vs after Graffisol coating · 1,500 kWh/kW baseline</div>
      </div>

      {/* System comparison bars */}
      <div style={{ marginBottom: 28 }}>
        {systems.map((s, i) => (
          <div key={i} style={{ marginBottom: 20, background: '#111', border: '1px solid #1f1f1f', borderRadius: 10, padding: 18 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 20, fontWeight: 700, color: C }}>{s.label}</span>
              <div style={{ display: 'flex', gap: 16 }}>
                <span style={{ color: '#4ade80', fontSize: 14, fontWeight: 700 }}>+{s.pct}% output</span>
                <span style={{ color: '#fbbf24', fontSize: 14, fontWeight: 700 }}>{fmtInr(s.revenue)}/yr gain</span>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {/* Baseline */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 60, color: '#475569', fontSize: 10, textAlign: 'right', flexShrink: 0 }}>Baseline</div>
                <div style={{ flex: 1, height: 24, background: '#0d0d0d', borderRadius: 4, overflow: 'hidden' }}>
                  <div style={{ width: `${(s.base / MAX_BASE) * 100}%`, height: '100%', background: '#2a2a2a', borderRadius: 4, display: 'flex', alignItems: 'center', paddingLeft: 8 }}>
                    <span style={{ color: '#555', fontSize: 11, fontWeight: 600 }}>{fmtKwh(s.base)}</span>
                  </div>
                </div>
              </div>
              {/* With Graffisol */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 60, color: C, fontSize: 10, textAlign: 'right', flexShrink: 0 }}>Graffisol</div>
                <div style={{ flex: 1, height: 24, background: '#0d0d0d', borderRadius: 4, overflow: 'hidden' }}>
                  <div style={{ width: `${(s.gain / MAX_BASE) * 100}%`, height: '100%', background: C, borderRadius: 4, display: 'flex', alignItems: 'center', paddingLeft: 8, boxShadow: `0 0 10px ${C}44` }}>
                    <span style={{ color: '#000', fontSize: 11, fontWeight: 700 }}>{fmtKwh(s.gain)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Three mechanisms */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
        {[
          { val: '+3–4%', label: 'Anti-reflection', desc: 'Nano-texture improves photon capture' },
          { val: '+3–4%', label: 'Thermal recovery', desc: '5–6°C cooler panel = +3% efficiency' },
          { val: '+4–5%', label: 'Soiling recovery', desc: '35% less soiling loss (field avg)' },
        ].map((m, i) => (
          <div key={i} style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: 10, padding: 16, textAlign: 'center' }}>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 30, fontWeight: 700, color: C }}>{m.val}</div>
            <div style={{ color: '#e2e8f0', fontSize: 12, fontWeight: 600, marginTop: 6 }}>{m.label}</div>
            <div style={{ color: '#475569', fontSize: 11, marginTop: 4 }}>{m.desc}</div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 20, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · GRAFFISOL · IEC 61724</div>
    </div>
  )
}

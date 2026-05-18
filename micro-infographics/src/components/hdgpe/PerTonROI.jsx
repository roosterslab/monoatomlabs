import React from 'react'

const C = '#06b6d4'

// Additive cost = dosage × 1000 kg/ton × ₹1200/kg
// 0.5% = 5 kg × 1200 = ₹6,000/ton
// 1.0% = 10 kg × 1200 = ₹12,000/ton
// 1.5% = 15 kg × 1200 = ₹18,000/ton
// 2.0% = 20 kg × 1200 = ₹24,000/ton

const dosages = [
  { pct: '0.5%', addCost: 6000,  pipes: 6000,   film: 9000,   mold: 19000 },
  { pct: '1.0%', addCost: 12000, pipes: 0,       film: 3000,   mold: 13000 },
  { pct: '1.5%', addCost: 18000, pipes: -6000,   film: -3000,  mold: 7000  },
  { pct: '2.0%', addCost: 24000, pipes: -12000,  film: -9000,  mold: 1000  },
]

const apps = ['pipes', 'film', 'mold']
const appLabels = { pipes: 'Pipes (+₹12k gross)', film: 'Films (+₹15k gross)', mold: 'Molding (+₹25k gross)' }
const appColors = { pipes: '#0e7490', film: '#0891b2', mold: '#0284c7' }
const MAX_NET = 19000

export default function PolyROI() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>HD-G-PE · Economics</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>PER-TON ROI ANALYSIS</div>
        <div style={{ color: '#64748b', fontSize: 13, marginTop: 4 }}>Net margin per ton at different dosages · Masterbatch cost ₹1,200/kg · 500 ton/yr reference</div>
      </div>

      {/* Per-dosage breakdown */}
      <div style={{ marginBottom: 28 }}>
        {dosages.map((d, i) => (
          <div key={i} style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: 10, padding: 18, marginBottom: 10 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
              <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 20, fontWeight: 700, color: '#fff' }}>{d.pct} Dosage</span>
                <span style={{ color: '#ef4444', fontSize: 12 }}>Additive: ₹{d.addCost.toLocaleString('en-IN')}/ton</span>
              </div>
              {i === 0 && <span style={{ fontSize: 10, color: C, background: C + '22', padding: '3px 8px', borderRadius: 4 }}>★ OPTIMAL</span>}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {apps.map(app => {
                const net = d[app]
                const isNeg = net < 0
                const pct = isNeg ? (Math.abs(net) / MAX_NET) * 100 : (net / MAX_NET) * 100
                return (
                  <div key={app} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 130, flexShrink: 0, color: '#475569', fontSize: 10, textAlign: 'right' }}>{appLabels[app].split('(')[0]}</div>
                    <div style={{ flex: 1, height: 22, background: '#0d0d0d', borderRadius: 4, overflow: 'hidden' }}>
                      {!isNeg ? (
                        <div style={{ width: `${pct}%`, height: '100%', background: appColors[app], borderRadius: 4, display: 'flex', alignItems: 'center', paddingLeft: 8, minWidth: 40 }}>
                          <span style={{ color: '#fff', fontSize: 10, fontWeight: 700 }}>₹{net.toLocaleString('en-IN')}</span>
                        </div>
                      ) : (
                        <div style={{ width: `${pct}%`, height: '100%', background: '#450a0a', borderRadius: 4, display: 'flex', alignItems: 'center', paddingLeft: 8, minWidth: 40 }}>
                          <span style={{ color: '#ef4444', fontSize: 10, fontWeight: 700 }}>−₹{Math.abs(net).toLocaleString('en-IN')}</span>
                        </div>
                      )}
                    </div>
                    <div style={{ width: 16, flexShrink: 0 }}>
                      {!isNeg && net > 0 ? <span style={{ color: '#22c55e', fontSize: 12 }}>+</span> : (net < 0 ? <span style={{ color: '#ef4444', fontSize: 12 }}>−</span> : null)}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Annual scale */}
      <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: 12, padding: 24, marginBottom: 16 }}>
        <div style={{ color: '#64748b', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>Annual Net Gain · Injection Molding at 0.5% · Dosage ROI</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
          {[
            { prod: '100 tons',  annual: '₹19L/yr',   addCost: '₹6L/yr',   roi: '316%' },
            { prod: '500 tons',  annual: '₹95L/yr',   addCost: '₹30L/yr',  roi: '316%' },
            { prod: '1,000 tons', annual: '₹1.9Cr/yr', addCost: '₹60L/yr',  roi: '316%' },
            { prod: '5,000 tons', annual: '₹9.5Cr/yr', addCost: '₹3Cr/yr',  roi: '316%' },
          ].map((r, i) => (
            <div key={i} style={{ background: '#0d0d0d', borderRadius: 8, padding: 14, textAlign: 'center' }}>
              <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 16, fontWeight: 700, color: C }}>{r.prod}</div>
              <div style={{ color: '#4ade80', fontSize: 16, fontWeight: 700, marginTop: 6 }}>{r.annual}</div>
              <div style={{ color: '#475569', fontSize: 9, marginTop: 4 }}>net gain/yr</div>
              <div style={{ color: '#fbbf24', fontSize: 11, fontWeight: 700, marginTop: 6 }}>ROI {r.roi}</div>
              <div style={{ color: '#333', fontSize: 9 }}>on additive cost</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · HD-G-PE · ECONOMICS</div>
    </div>
  )
}

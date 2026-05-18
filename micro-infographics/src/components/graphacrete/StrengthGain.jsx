import React from 'react'

const C = '#d97706'

const grades = [
  { grade: 'M20', std: 20,  gra: 25,  use: 'Residential foundations' },
  { grade: 'M30', std: 30,  gra: 37,  use: 'General structural' },
  { grade: 'M40', std: 40,  gra: 50,  use: 'Beams & columns' },
  { grade: 'M50', std: 50,  gra: 62,  use: 'Premium structural ★', nabl: true },
  { grade: 'M60', std: 60,  gra: 75,  use: 'Bridges & cores' },
  { grade: 'M70', std: 70,  gra: 87,  use: 'Ultra-high performance' },
]
const MAX_MPA = 90

export default function GraStrengthGain() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>GRAPHACRETE · Strength</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>COMPRESSIVE STRENGTH GAIN</div>
        <div style={{ color: '#64748b', fontSize: 13, marginTop: 4 }}>Standard vs Graphacrete-enhanced concrete · N/mm² (MPa)</div>
      </div>

      {grades.map((g, i) => (
        <div key={i} style={{ marginBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
            <div style={{ width: 44, flexShrink: 0 }}>
              <span style={{
                fontFamily: 'Rajdhani, sans-serif', fontSize: 14, fontWeight: 700,
                color: g.nabl ? C : '#64748b'
              }}>{g.grade}</span>
            </div>
            <div style={{ flex: 1 }}>
              {/* Standard bar */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <div style={{ width: 70, flexShrink: 0, color: '#475569', fontSize: 10, textAlign: 'right' }}>Standard</div>
                <div style={{ flex: 1, height: 22, background: '#111', borderRadius: 4, overflow: 'hidden' }}>
                  <div style={{ width: `${(g.std / MAX_MPA) * 100}%`, height: '100%', background: '#2a2a2a', borderRadius: 4, display: 'flex', alignItems: 'center', paddingLeft: 8 }}>
                    <span style={{ color: '#555', fontSize: 11, fontWeight: 600 }}>{g.std} MPa</span>
                  </div>
                </div>
              </div>
              {/* Graphacrete bar */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 70, flexShrink: 0, color: C, fontSize: 10, textAlign: 'right' }}>Graphacrete</div>
                <div style={{ flex: 1, height: 22, background: '#111', borderRadius: 4, overflow: 'hidden' }}>
                  <div style={{
                    width: `${(g.gra / MAX_MPA) * 100}%`, height: '100%',
                    background: g.nabl ? C : '#92400e',
                    borderRadius: 4, display: 'flex', alignItems: 'center', paddingLeft: 8,
                    boxShadow: g.nabl ? `0 0 14px ${C}55` : 'none',
                  }}>
                    <span style={{ color: '#fff', fontSize: 11, fontWeight: 700 }}>{g.gra} MPa</span>
                  </div>
                </div>
                <div style={{ width: 60, flexShrink: 0, textAlign: 'right' }}>
                  <span style={{ color: '#4ade80', fontSize: 11, fontWeight: 700 }}>+{Math.round((g.gra - g.std) / g.std * 100)}%</span>
                </div>
              </div>
            </div>
            <div style={{ width: 160, flexShrink: 0, paddingLeft: 8 }}>
              <span style={{ color: g.nabl ? C : '#475569', fontSize: 11 }}>{g.use}</span>
            </div>
          </div>
          {i < grades.length - 1 && <div style={{ height: 1, background: '#111', marginLeft: 54 }} />}
        </div>
      ))}

      <div style={{ marginTop: 20, background: '#111', border: '1px solid #1f1f1f', borderRadius: 10, padding: 18, display: 'flex', gap: 20 }}>
        {[
          { val: '+15–25%', label: 'Strength gain' },
          { val: '+30%', label: 'Lifecycle ext.' },
          { val: '12–15%', label: 'Cement saved' },
          { val: 'M20–M70', label: 'All grades' },
        ].map((b, i) => (
          <div key={i} style={{ textAlign: 'center', flex: 1 }}>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 26, fontWeight: 700, color: '#fff' }}>{b.val}</div>
            <div style={{ color: C, fontSize: 10, letterSpacing: 1, textTransform: 'uppercase', marginTop: 4 }}>{b.label}</div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 16, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · GRAPHACRETE · STRENGTH ANALYSIS</div>
    </div>
  )
}

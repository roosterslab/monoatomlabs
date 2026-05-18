import React from 'react'

const C = '#d97706'

const grades = [
  { grade: 'M20', std: 20, gra: 25, pct: 25, use: 'Residential foundations & slabs', sectors: ['Housing', 'Light commercial'] },
  { grade: 'M30', std: 30, gra: 37, pct: 23, use: 'General structural elements', sectors: ['Columns', 'Beams', 'Slabs'] },
  { grade: 'M40', std: 40, gra: 50, pct: 25, use: 'High-load structural', sectors: ['High-load beams', 'Transfer slabs'] },
  { grade: 'M50', std: 50, gra: 62, pct: 24, use: 'Premium structural — NABL sweet spot', sectors: ['Core walls', 'Pre-stressed'], nabl: true },
  { grade: 'M60', std: 60, gra: 75, pct: 25, use: 'Bridges & high-rise cores', sectors: ['Bridges', 'Pylons'] },
  { grade: 'M70', std: 70, gra: 87, pct: 24, use: 'Ultra-high performance', sectors: ['Special structures', 'Military'] },
]

export default function GraGradePerformance() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 900, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>GRAPHACRETE · Grade Table</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>GRADE PERFORMANCE TABLE</div>
        <div style={{ color: '#64748b', fontSize: 13, marginTop: 4 }}>IS 456 / IS 1343 concrete grades · Standard vs Graphacrete-enhanced strength</div>
      </div>

      {/* Table header */}
      <div style={{ display: 'grid', gridTemplateColumns: '70px 90px 90px 70px 1fr 140px', gap: 8, padding: '8px 12px', background: '#0d0d0d', borderRadius: 8, marginBottom: 8 }}>
        {['Grade', 'Standard', 'Enhanced', 'Gain', 'Application', 'Sectors'].map(h => (
          <div key={h} style={{ color: '#475569', fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>{h}</div>
        ))}
      </div>

      {grades.map((g, i) => (
        <div key={i} style={{
          display: 'grid', gridTemplateColumns: '70px 90px 90px 70px 1fr 140px', gap: 8,
          padding: '14px 12px', background: g.nabl ? '#1c1000' : '#111',
          border: `1px solid ${g.nabl ? C + '44' : '#1a1a1a'}`, borderRadius: 8, marginBottom: 4, alignItems: 'center'
        }}>
          <div>
            <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 18, fontWeight: 700, color: g.nabl ? C : '#64748b' }}>{g.grade}</span>
          </div>
          <div>
            <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 18, fontWeight: 700, color: '#555' }}>{g.std}</span>
            <span style={{ color: '#333', fontSize: 10, marginLeft: 3 }}>MPa</span>
          </div>
          <div>
            <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 18, fontWeight: 700, color: g.nabl ? C : '#a16207' }}>{g.gra}</span>
            <span style={{ color: '#64748b', fontSize: 10, marginLeft: 3 }}>MPa</span>
          </div>
          <div>
            <span style={{ color: '#4ade80', fontSize: 13, fontWeight: 700 }}>+{g.pct}%</span>
          </div>
          <div style={{ color: g.nabl ? '#fbbf24' : '#64748b', fontSize: 11 }}>
            {g.use}
            {g.nabl && <span style={{ marginLeft: 6, fontSize: 9, color: C, background: C + '22', padding: '2px 6px', borderRadius: 4 }}>NABL SWEET SPOT</span>}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
            {g.sectors.map((s, j) => (
              <span key={j} style={{ fontSize: 9, color: '#475569', background: '#0d0d0d', border: '1px solid #1a1a1a', padding: '2px 6px', borderRadius: 4 }}>{s}</span>
            ))}
          </div>
        </div>
      ))}

      <div style={{ marginTop: 16, background: '#111', border: '1px solid #1f1f1f', borderRadius: 10, padding: 16, display: 'flex', gap: 20, justifyContent: 'space-around' }}>
        {[
          { val: '+23–25%', label: 'Avg strength gain' },
          { val: '6', label: 'Grade coverage' },
          { val: '12–15%', label: 'Cement reduction' },
          { val: '₹2–4k', label: 'Saved per m³' },
        ].map((b, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 24, fontWeight: 700, color: '#fff' }}>{b.val}</div>
            <div style={{ color: C, fontSize: 10, letterSpacing: 1, textTransform: 'uppercase', marginTop: 4 }}>{b.label}</div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 16, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · GRAPHACRETE · IS 456 / IS 1343</div>
    </div>
  )
}

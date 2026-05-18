import React from 'react'

const C = '#f59e0b'

export default function SolSoiling() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>GRAFFISOL · Anti-Soiling</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>SOILING REDUCTION</div>
        <div style={{ color: '#64748b', fontSize: 13, marginTop: 4 }}>Dust & soiling = #1 cause of underperformance in India · 15–25% energy loss annually</div>
      </div>

      {/* Panel comparison visual */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 28 }}>
        {/* Without coating */}
        <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: 12, padding: 24 }}>
          <div style={{ color: '#64748b', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 14 }}>Without Coating · 30 Days</div>
          {/* Panel graphic */}
          <div style={{ background: '#1a1a1a', borderRadius: 8, padding: 16, marginBottom: 16, position: 'relative', minHeight: 80 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 4 }}>
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} style={{
                  height: 20, borderRadius: 3,
                  background: `rgba(180,130,50,${0.3 + Math.random() * 0.5})`,
                  border: '1px solid #2a2a1a'
                }} />
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: 10, color: '#d97706', fontSize: 11, fontWeight: 600 }}>
              Heavy dust accumulation
            </div>
          </div>
          <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#ef4444' }}>−25%</div>
          <div style={{ color: '#94a3b8', fontSize: 13 }}>Energy loss from soiling</div>
          <div style={{ marginTop: 10 }}>
            {['Dust bonds to glass surface', 'Blocks up to 25% sunlight', 'Requires weekly manual cleaning', 'Water doesn\'t remove fine dust'].map((t, i) => (
              <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 5 }}>
                <span style={{ color: '#ef4444', fontSize: 11 }}>✕</span>
                <span style={{ color: '#475569', fontSize: 11 }}>{t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* With Graffisol */}
        <div style={{ background: '#111', border: `1px solid ${C}44`, borderRadius: 12, padding: 24 }}>
          <div style={{ color: C, fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 14 }}>With GRAFFISOL · 30 Days</div>
          {/* Panel graphic - clean */}
          <div style={{ background: '#0d1a2a', borderRadius: 8, padding: 16, marginBottom: 16, position: 'relative', minHeight: 80 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 4 }}>
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} style={{ height: 20, borderRadius: 3, background: '#1e3a5f', border: '1px solid #2a4a6f' }} />
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: 10, color: '#60a5fa', fontSize: 11, fontWeight: 600 }}>
              Hydrophobic — stays clean
            </div>
          </div>
          <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#4ade80' }}>−9%</div>
          <div style={{ color: '#94a3b8', fontSize: 13 }}>Residual soiling loss (35% better)</div>
          <div style={{ marginTop: 10 }}>
            {['Super-hydrophobic surface >110°', 'Dust rolls off with morning dew', 'Rain provides full self-cleaning', '30–40% less soiling loss'].map((t, i) => (
              <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 5 }}>
                <span style={{ color: '#4ade80', fontSize: 11 }}>✓</span>
                <span style={{ color: '#94a3b8', fontSize: 11 }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Region soiling data */}
      <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: 12, padding: 22, marginBottom: 16 }}>
        <div style={{ color: '#64748b', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 14 }}>Soiling Loss by Region · Annual Average</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
          {[
            { region: 'Rajasthan', without: '22–25%', with: '13–15%', label: 'Desert / high dust', saved: '9–10%' },
            { region: 'Gujarat / AP', without: '15–20%', with: '9–12%', label: 'Moderate dust',   saved: '6–8%' },
            { region: 'Karnataka', without: '10–15%', with: '6–9%', label: 'Low-moderate dust', saved: '4–6%' },
          ].map((r, i) => (
            <div key={i} style={{ background: '#0d0d0d', borderRadius: 8, padding: 14 }}>
              <div style={{ color: C, fontSize: 12, fontWeight: 700, marginBottom: 6 }}>{r.region}</div>
              <div style={{ color: '#475569', fontSize: 10, marginBottom: 8 }}>{r.label}</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                <span style={{ color: '#555', fontSize: 11 }}>Without:</span>
                <span style={{ color: '#ef4444', fontSize: 11, fontWeight: 600 }}>{r.without}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                <span style={{ color: '#555', fontSize: 11 }}>With:</span>
                <span style={{ color: '#4ade80', fontSize: 11, fontWeight: 600 }}>{r.with}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, paddingTop: 8, borderTop: '1px solid #1a1a1a' }}>
                <span style={{ color: '#64748b', fontSize: 10 }}>Recovered:</span>
                <span style={{ color: C, fontSize: 12, fontWeight: 700 }}>{r.saved}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · GRAFFISOL · ANTI-SOILING</div>
    </div>
  )
}

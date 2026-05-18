import React from 'react'

const C = '#d97706'

export default function GraCarbonSavings() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: '#22c55e', fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>GRAPHACRETE · Sustainability</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>CARBON FOOTPRINT SAVINGS</div>
        <div style={{ color: '#64748b', fontSize: 13, marginTop: 4 }}>Cement production = ~0.9 kg CO₂ per kg · 12–15% reduction per m³</div>
      </div>

      {/* Big numbers */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 28 }}>
        {[
          { val: '13%', label: 'Less Cement', sub: 'Per cubic meter', color: '#22c55e' },
          { val: '52 T', label: 'CO₂ Avoided', sub: 'Per 1,000 m³ project', color: '#4ade80' },
          { val: '1,040', label: 'Bags Saved', sub: 'Per 1,000 m³ (50 kg bags)', color: C },
        ].map((s, i) => (
          <div key={i} style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: 12, padding: 24, textAlign: 'center' }}>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 46, fontWeight: 700, color: s.color }}>{s.val}</div>
            <div style={{ color: '#e2e8f0', fontSize: 13, fontWeight: 600, marginTop: 8 }}>{s.label}</div>
            <div style={{ color: '#475569', fontSize: 11, marginTop: 4 }}>{s.sub}</div>
          </div>
        ))}
      </div>

      {/* Scale of impact at different project sizes */}
      <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: 12, padding: 24, marginBottom: 16 }}>
        <div style={{ color: '#64748b', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>Environmental Impact at Scale</div>
        {[
          { vol: '100 m³',    bags: 104, co2: '5.2 T', cost: '₹33,280', scale: 'Small building' },
          { vol: '1,000 m³',  bags: 1040, co2: '52 T', cost: '₹3.3L',  scale: 'Mid commercial' },
          { vol: '5,000 m³',  bags: 5200, co2: '260 T', cost: '₹16.6L', scale: 'Large project' },
          { vol: '10,000 m³', bags: 10400, co2: '520 T', cost: '₹33.3L', scale: 'Infrastructure' },
        ].map((r, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '100px 90px 80px 80px 1fr', gap: 12, padding: '10px 0', borderBottom: '1px solid #1a1a1a', alignItems: 'center' }}>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 14, fontWeight: 700, color: C }}>{r.vol}</div>
            <div style={{ color: '#94a3b8', fontSize: 12 }}>{r.bags.toLocaleString()} bags saved</div>
            <div style={{ color: '#4ade80', fontSize: 13, fontWeight: 700 }}>{r.co2}</div>
            <div style={{ color: '#fbbf24', fontSize: 13, fontWeight: 700 }}>{r.cost}</div>
            <div style={{ color: '#475569', fontSize: 11 }}>{r.scale}</div>
          </div>
        ))}
      </div>

      {/* Why it matters */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <div style={{ background: '#0a1a10', border: '1px solid #166534', borderRadius: 10, padding: 18 }}>
          <div style={{ color: '#4ade80', fontSize: 12, fontWeight: 700, marginBottom: 10 }}>🌱 Environmental Benefit</div>
          {[
            'Cement = 8% of global CO₂ emissions',
            'Each bag saved = ~45 kg CO₂ avoided',
            'Contributes to LEED / green building credits',
            'Reduces aggregate extraction needs',
          ].map((t, i) => (
            <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
              <span style={{ color: '#22c55e', fontSize: 11, flexShrink: 0 }}>✓</span>
              <span style={{ color: '#6ee7b7', fontSize: 11 }}>{t}</span>
            </div>
          ))}
        </div>
        <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: 10, padding: 18 }}>
          <div style={{ color: C, fontSize: 12, fontWeight: 700, marginBottom: 10 }}>💰 Financial Benefit</div>
          {[
            'Cement is largest cost variable in concrete',
            'Current market rate: ₹320/bag (50 kg)',
            '13% less = ₹33,280 saved per 100 m³',
            'Carbon credits: eligible projects',
          ].map((t, i) => (
            <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
              <span style={{ color: C, fontSize: 11, flexShrink: 0 }}>✓</span>
              <span style={{ color: '#94a3b8', fontSize: 11 }}>{t}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 20, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · GRAPHACRETE · SUSTAINABILITY</div>
    </div>
  )
}

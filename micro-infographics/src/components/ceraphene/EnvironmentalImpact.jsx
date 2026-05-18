import React from 'react'

const C = '#64748b'

const impacts = [
  { icon: '💧', metric: '60%', label: 'Water Saved', detail: 'Hydrophobic surface means 60% fewer car washes — liters of water conserved per vehicle every year' },
  { icon: '🧪', metric: '50%', label: 'Fewer Chemicals', detail: 'No wax, no sealant, no paint correction chemicals for 3–4 years — drastically reduced chemical discharge' },
  { icon: '⏳', metric: '3–4 yrs', label: 'Single Application', detail: 'One coating replaces 3–4 years of recurring wax and detailing products — less packaging and waste' },
  { icon: '♻️', metric: '70%', label: 'Wash Reduction', detail: '70% fewer washes per vehicle reduces detergent runoff, water treatment load, and microplastic discharge' },
]

const perFleet = [
  { label: '10 vehicles · Annual water saved', val: '~18,000 L', color: '#60a5fa' },
  { label: '10 vehicles · Chemical bottles avoided', val: '~120 units', color: '#4ade80' },
  { label: '100 vehicles · CO₂ equivalent reduction', val: '~2.4 tCO₂', color: '#34d399' },
]

export default function CerEnvironmentalImpact() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>CERAPHENE · Sustainability</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>ENVIRONMENTAL IMPACT</div>
        <div style={{ color: '#475569', fontSize: 13, marginTop: 4 }}>Water conservation, chemical reduction, and lower carbon footprint per vehicle</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 20 }}>
        {impacts.map((imp, i) => (
          <div key={i} style={{ background: '#0d0d0d', border: '1px solid #1f1f1f', borderRadius: 12, padding: 20, display: 'flex', gap: 14 }}>
            <div style={{ fontSize: 30, flexShrink: 0 }}>{imp.icon}</div>
            <div>
              <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 28, fontWeight: 700, color: '#4ade80', lineHeight: 1.1 }}>{imp.metric}</div>
              <div style={{ color: C, fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 6 }}>{imp.label}</div>
              <div style={{ color: '#6b7280', fontSize: 12, lineHeight: 1.5 }}>{imp.detail}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ background: '#0d0d0d', border: '1px solid #1f1f1f', borderRadius: 12, padding: 20 }}>
        <div style={{ color: '#64748b', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>Fleet Environmental Savings · Annual Estimate</div>
        {perFleet.map((f, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: i < perFleet.length - 1 ? '1px solid #141414' : 'none' }}>
            <span style={{ color: '#888', fontSize: 13 }}>{f.label}</span>
            <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 18, fontWeight: 700, color: f.color }}>{f.val}</span>
          </div>
        ))}
        <div style={{ marginTop: 14, padding: '8px 14px', background: '#041a0a', border: '1px solid #14451a', borderRadius: 8 }}>
          <span style={{ color: '#4ade80', fontSize: 12, fontWeight: 600 }}>🌿 Carbon credit eligibility: Reduced water heating, chemical production, and waste disposal footprint</span>
        </div>
      </div>

      <div style={{ marginTop: 20, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · CERAPHENE · SUSTAINABILITY</div>
    </div>
  )
}

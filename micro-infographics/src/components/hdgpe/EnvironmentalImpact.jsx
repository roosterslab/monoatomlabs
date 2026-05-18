import React from 'react'

const C = '#06b6d4'

const impacts = [
  { icon: '⏳', metric: '+20%', label: 'Longer Product Life', detail: 'Products last 20% longer — fewer replacements manufactured, shipped, and disposed of. Pipes stay in ground longer, films stretch further, containers need less frequent replacement.' },
  { icon: '🏗️', metric: '−15%', label: 'Less Material Used', detail: 'Downgauging (thinner films, thinner walls) maintains strength — 15% less plastic per product. Applied to India\'s 15 MT annual HDPE, impact is enormous.' },
  { icon: '🌞', metric: '+20%', label: 'UV Life Extension', detail: 'Graphene absorbs UV radiation, acting as a radical scavenger. Outdoor applications (pipes, agricultural films) degrade slower — less premature failure and replacement.' },
  { icon: '♻️', metric: '−60%', label: 'Quality Waste Cut', detail: 'Stronger products fail less in production and in field. Reject rates and warranty returns drop 60% — less material wasted in defects and returns.' },
]

const lifecycle = [
  { product: 'HDPE Pipes (20yr design)', std: '15 years actual', withGNP: '18+ years actual', saving: '+3 yrs × no replacement cost' },
  { product: 'Agricultural Films',        std: '1–2 yr season', withGNP: '2–3 yr season', saving: '50% fewer replacements' },
  { product: 'Industrial Containers',     std: '3–5 yr use',   withGNP: '4–6+ yr use',    saving: '−25% lifecycle units' },
]

export default function PolyEnvironmentalImpact() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>HD-G-PE · Sustainability</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>ENVIRONMENTAL IMPACT</div>
        <div style={{ color: '#475569', fontSize: 13, marginTop: 4 }}>Extended lifecycle, material reduction, and less polymer waste — graphene makes plastics sustainable</div>
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
        <div style={{ color: '#64748b', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>Product Lifecycle Extension</div>
        {lifecycle.map((row, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 2fr', gap: 12, padding: '12px 0', borderBottom: i < lifecycle.length - 1 ? '1px solid #141414' : 'none', alignItems: 'center' }}>
            <span style={{ color: '#ccc', fontSize: 13, fontWeight: 600 }}>{row.product}</span>
            <span style={{ color: '#888', fontSize: 12 }}>{row.std}</span>
            <span style={{ fontFamily: 'Rajdhani, sans-serif', color: C, fontSize: 14, fontWeight: 700 }}>{row.withGNP}</span>
            <span style={{ color: '#4ade80', fontSize: 11 }}>✓ {row.saving}</span>
          </div>
        ))}
        <div style={{ marginTop: 14, padding: '8px 14px', background: '#041a0a', border: '1px solid #14451a', borderRadius: 8 }}>
          <span style={{ color: '#4ade80', fontSize: 12, fontWeight: 600 }}>🌿 Extended lifecycle = fewer units manufactured = less energy, less CO₂, less end-of-life plastic</span>
        </div>
      </div>

      <div style={{ marginTop: 20, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · HD-G-PE · SUSTAINABILITY</div>
    </div>
  )
}

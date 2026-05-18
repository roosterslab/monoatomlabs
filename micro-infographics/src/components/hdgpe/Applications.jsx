import React from 'react'

const C = '#06b6d4'

const apps = [
  {
    sector: 'HDPE Pipes',
    icon: '🔧',
    tag: 'Infrastructure',
    product: 'Municipal water distribution pipes',
    tensile: '+30%',
    elongation: '+18%',
    roi: '180%',
    payback: '8 months',
    benefit: 'Higher pressure rating, longer warranty periods (20+ yr), reduced failure rates. Municipal and industrial piping with superior burst resistance.',
  },
  {
    sector: 'Agricultural Films',
    icon: '🌾',
    tag: 'Greenhouse & Agri',
    product: 'Greenhouse & mulch films',
    tensile: '+28%',
    elongation: '22×',
    roi: '200%',
    payback: '6 months',
    benefit: 'Thinner gauge possible (downgauging 15–20%) without strength loss. Extended UV lifetime 3–5 years vs 1–2 years standard. Major material savings.',
  },
  {
    sector: 'Industrial Packaging',
    icon: '📦',
    tag: 'Packaging & Containers',
    product: 'Heavy-duty industrial containers',
    tensile: '+30%',
    elongation: '+19%',
    roi: '165%',
    payback: '9 months',
    benefit: 'Containers withstand 30% higher drop impact. Chemical resistance improved. Premium positioning in industrial supply chain. Lighter weight with same load rating.',
  },
  {
    sector: 'Retail Bags',
    icon: '🛍️',
    tag: 'Consumer Packaging',
    product: 'Carry bags & woven sacks',
    tensile: '+25%',
    elongation: '+20%',
    roi: '150%',
    payback: '10 months',
    benefit: '15% material reduction enables cost savings while maintaining load capacity. Enhanced tear resistance reduces returns. Thinner, stronger bags command premium positioning.',
  },
]

export default function PolyApplications2() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>HD-G-PE · Use Cases</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>APPLICATION SECTORS</div>
        <div style={{ color: '#475569', fontSize: 13, marginTop: 4 }}>4 polymer product types — performance and ROI data per application</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        {apps.map((a, i) => (
          <div key={i} style={{ background: '#0d0d0d', border: '1px solid #1f1f1f', borderRadius: 12, padding: 22, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ fontSize: 28 }}>{a.icon}</div>
              <div>
                <div style={{ display: 'inline-block', background: C + '22', border: `1px solid ${C}33`, borderRadius: 4, padding: '2px 8px', marginBottom: 4 }}>
                  <span style={{ fontSize: 10, color: C, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' }}>{a.tag}</span>
                </div>
                <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 18, fontWeight: 700, color: '#fff', letterSpacing: 0.5 }}>{a.sector}</div>
              </div>
            </div>
            <div style={{ color: '#555', fontSize: 11 }}>📌 {a.product}</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6 }}>
              {[
                { label: 'Tensile', val: a.tensile },
                { label: 'Elongation', val: a.elongation },
                { label: 'ROI', val: a.roi },
                { label: 'Payback', val: a.payback },
              ].map((s, j) => (
                <div key={j} style={{ textAlign: 'center', padding: '8px 4px', background: '#111', borderRadius: 6, border: '1px solid #1a1a1a' }}>
                  <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 15, fontWeight: 700, color: j === 2 ? '#4ade80' : C }}>{s.val}</div>
                  <div style={{ fontSize: 9, color: '#555', textTransform: 'uppercase', letterSpacing: 0.5, marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>
            <div style={{ color: '#6b7280', fontSize: 12, lineHeight: 1.5 }}>{a.benefit}</div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 20, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · HD-G-PE · APPLICATION SECTORS</div>
    </div>
  )
}

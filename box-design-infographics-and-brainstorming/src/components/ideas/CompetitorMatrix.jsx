import React from 'react'

const C = '#64748B'

const ROWS = [
  { label: 'Hardness', ceraphene: '9H+', gtechniq: '9H', carpro: '9H', ceramicpro: '9H', win: true },
  { label: 'Water Contact Angle', ceraphene: '115°', gtechniq: '104°', carpro: '108°', ceramicpro: '110°', win: true },
  { label: 'Durability', ceraphene: '3–4+ yr', gtechniq: '3–5 yr', carpro: '2–3 yr', ceramicpro: '3–5 yr', win: false },
  { label: 'Price (50ml)', ceraphene: '₹5,000', gtechniq: '₹15,000+', carpro: '₹12,000+', ceramicpro: '₹18,000+', win: true },
  { label: 'Cost Advantage', ceraphene: '✓ Best', gtechniq: '✗', carpro: '✗', ceramicpro: '✗', win: true },
  { label: 'Graphene Enhanced', ceraphene: '✓ Yes', gtechniq: '✗ No', carpro: '✗ No', ceramicpro: '✗ No', win: true },
  { label: 'Heat Resistance', ceraphene: '700°C', gtechniq: '—', carpro: '—', ceramicpro: '—', win: true },
]

export default function CompetitorMatrix() {
  return (
    <div style={{ padding: 32, fontFamily: 'Inter, sans-serif' }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{ color: C, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8 }}>Data Arrangement — Comparison</div>
        <h2 style={{ color: 'white', fontSize: 24, fontWeight: 700, margin: 0, fontFamily: 'Outfit, sans-serif' }}>Competitor Matrix</h2>
        <p style={{ color: '#555', fontSize: 13, marginTop: 8, lineHeight: 1.6 }}>CERAPHENE vs Gtechniq CSL vs CarPro CQuartz vs Ceramic Pro 9H — side by side. Good for back panel or inside flap.</p>
      </div>

      {/* Table */}
      <div style={{ background: '#050505', border: '1px solid #1f1f1f', borderRadius: 8, overflow: 'hidden', marginBottom: 24 }}>
        {/* Header */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1fr', background: '#0d0d0d', borderBottom: '1px solid #1f1f1f' }}>
          <div style={{ padding: '12px 16px', color: '#333', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Attribute</div>
          {[
            { name: 'CERAPHENE', highlight: true },
            { name: 'Gtechniq CSL' },
            { name: 'CarPro CQuartz' },
            { name: 'Ceramic Pro 9H' },
          ].map((col, i) => (
            <div key={i} style={{ padding: '12px 16px', textAlign: 'center', borderLeft: '1px solid #1a1a1a' }}>
              <div style={{ color: col.highlight ? 'white' : '#444', fontSize: 11, fontWeight: col.highlight ? 800 : 400, fontFamily: col.highlight ? 'Rajdhani, sans-serif' : 'Inter, sans-serif', letterSpacing: col.highlight ? '0.08em' : 0 }}>
                {col.name}
              </div>
              {col.highlight && <div style={{ width: 20, height: 1, background: C, margin: '6px auto 0' }} />}
            </div>
          ))}
        </div>

        {/* Rows */}
        {ROWS.map((row, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1fr', borderBottom: '1px solid #0d0d0d', background: i % 2 === 0 ? 'transparent' : '#080808' }}>
            <div style={{ padding: '10px 16px', color: '#555', fontSize: 11 }}>{row.label}</div>
            <div style={{ padding: '10px 16px', textAlign: 'center', borderLeft: '1px solid #111', background: 'rgba(100,116,139,0.05)' }}>
              <span style={{ color: row.win ? 'white' : '#777', fontSize: 12, fontWeight: row.win ? 700 : 400, fontFamily: 'Rajdhani, sans-serif' }}>{row.ceraphene}</span>
            </div>
            {[row.gtechniq, row.carpro, row.ceramicpro].map((val, j) => (
              <div key={j} style={{ padding: '10px 16px', textAlign: 'center', borderLeft: '1px solid #111' }}>
                <span style={{ color: '#444', fontSize: 11 }}>{val}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Win summary */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 24 }}>
        {[
          { val: '6/7', label: 'Categories Won', sub: 'CERAPHENE leads' },
          { val: '60–70%', label: 'Price Advantage', sub: 'vs premium competitors' },
          { val: '115°', label: 'Highest Contact Angle', sub: 'of all competitors' },
        ].map((stat, i) => (
          <div key={i} style={{ padding: 16, background: '#111', border: `1px solid ${C}30`, borderRadius: 8, textAlign: 'center' }}>
            <div style={{ color: 'white', fontSize: 28, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif' }}>{stat.val}</div>
            <div style={{ color: C, fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: 4 }}>{stat.label}</div>
            <div style={{ color: '#444', fontSize: 10, marginTop: 3 }}>{stat.sub}</div>
          </div>
        ))}
      </div>

      {/* Print-ready snippet */}
      <div style={{ padding: 16, background: '#111', border: '1px solid #1f1f1f', borderRadius: 8 }}>
        <div style={{ color: '#444', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 8 }}>Print-Ready Box Footnote</div>
        <div style={{ color: '#333', fontSize: 11, lineHeight: 1.6 }}>
          *Competitor prices based on market survey 2024. Performance data independently verified.
          CERAPHENE 9H+ hardness and 115° contact angle confirmed by third-party laboratory testing.
        </div>
      </div>
    </div>
  )
}

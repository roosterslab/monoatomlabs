import React, { useState } from 'react'

const C = '#64748B'

const PRODUCTS = [
  { name: 'CERAPHENE', price: 5000, years: 4, highlight: true },
  { name: 'Gtechniq Crystal Serum', price: 18000, years: 9, highlight: false },
  { name: 'CarPro CQuartz UK', price: 12000, years: 3, highlight: false },
  { name: 'Ceramic Pro Gold', price: 15000, years: 5, highlight: false },
  { name: 'Annual Wax (×2/yr)', price: 4000, years: 1, highlight: false },
]

const STYLES = [
  { id: 'bar-per-year', name: 'Cost / Year Bar' },
  { id: 'value-strip', name: 'Box Value Strip' },
  { id: 'icon-count', name: 'Icon Count Visual' },
]

export default function CostPerYearAnalysis() {
  const [style, setStyle] = useState('bar-per-year')

  const withCPY = PRODUCTS.map(p => ({ ...p, cpy: Math.round(p.price / p.years) }))
  const maxCPY = Math.max(...withCPY.map(p => p.cpy))

  return (
    <div style={{ padding: 32, fontFamily: 'Inter, sans-serif' }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{ color: C, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8 }}>Data Arrangements — Cost</div>
        <h2 style={{ color: 'white', fontSize: 24, fontWeight: 700, margin: 0, fontFamily: 'Outfit, sans-serif' }}>Cost Per Year Analysis</h2>
        <p style={{ color: '#555', fontSize: 13, marginTop: 8, lineHeight: 1.6 }}>
          CERAPHENE at ₹1,250/yr is the lowest cost-per-year of any ceramic coating. Three ways to visualize this on the box.
        </p>
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 28, flexWrap: 'wrap' }}>
        {STYLES.map(s => (
          <button key={s.id} onClick={() => setStyle(s.id)} style={{
            padding: '7px 14px', borderRadius: 6,
            border: `1px solid ${style === s.id ? C : '#1f1f1f'}`,
            background: style === s.id ? '#111' : 'transparent',
            color: style === s.id ? 'white' : '#555',
            cursor: 'pointer', fontSize: 12, fontWeight: style === s.id ? 700 : 400,
          }}>
            {s.name}
          </button>
        ))}
      </div>

      {style === 'bar-per-year' && (
        <div style={{ background: '#050505', border: '1px solid #1f1f1f', borderRadius: 8, padding: 32, maxWidth: 600 }}>
          <div style={{ color: C, fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 24, fontFamily: 'Rajdhani, sans-serif' }}>Protection Cost Per Year of Coverage</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[...withCPY].sort((a, b) => a.cpy - b.cpy).map((p, i) => (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span style={{ color: p.highlight ? 'white' : '#555', fontSize: 12, fontWeight: p.highlight ? 700 : 400 }}>{p.name}</span>
                  <span style={{ color: p.highlight ? C : '#444', fontSize: 14, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif' }}>₹{p.cpy.toLocaleString()}/yr</span>
                </div>
                <div style={{ height: 6, background: '#0d0d0d', borderRadius: 3 }}>
                  <div style={{
                    height: '100%', width: `${(p.cpy / maxCPY) * 100}%`,
                    background: p.highlight ? C : '#1a1a1a', borderRadius: 3,
                  }} />
                </div>
                <div style={{ color: '#2a2a2a', fontSize: 10, marginTop: 3 }}>
                  ₹{p.price.toLocaleString()} one-time · {p.years}yr coverage
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 24, padding: 14, background: '#080808', border: `1px solid ${C}15`, borderRadius: 6 }}>
            <div style={{ color: C, fontSize: 9, letterSpacing: '0.15em', marginBottom: 6 }}>THE MATH</div>
            <div style={{ color: '#555', fontSize: 12, lineHeight: 1.7 }}>
              ₹5,000 ÷ 4 years = <span style={{ color: C, fontWeight: 700 }}>₹1,250/yr</span><br />
              Competitors: ₹12,000–18,000 ÷ 3–9 years = ₹2,000–4,000/yr avg<br />
              Annual wax: ₹4,000/yr with no permanent protection
            </div>
          </div>
        </div>
      )}

      {style === 'value-strip' && (
        <div style={{ background: '#050505', border: '1px solid #1f1f1f', borderRadius: 8, padding: 32 }}>
          <div style={{ color: C, fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 20, fontFamily: 'Rajdhani, sans-serif' }}>Box Side Strip — Value Proposition</div>
          <div style={{ maxWidth: 660, border: '1px solid #0d0d0d', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 0 }}>
            <div style={{ textAlign: 'center', padding: '20px 16px', borderRight: '1px solid #0d0d0d' }}>
              <div style={{ color: '#333', fontSize: 9, letterSpacing: '0.2em', marginBottom: 10 }}>ONE APPLICATION</div>
              <div style={{ color: 'white', fontSize: 36, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif', lineHeight: 1 }}>₹5,000</div>
              <div style={{ color: '#333', fontSize: 10, marginTop: 8 }}>50ml · One vehicle</div>
            </div>
            <div style={{ textAlign: 'center', padding: '20px 16px', borderRight: '1px solid #0d0d0d' }}>
              <div style={{ color: '#333', fontSize: 9, letterSpacing: '0.2em', marginBottom: 10 }}>COVERAGE PERIOD</div>
              <div style={{ color: 'white', fontSize: 36, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif', lineHeight: 1 }}>4+ YRS</div>
              <div style={{ color: '#333', fontSize: 10, marginTop: 8 }}>Proven field durability</div>
            </div>
            <div style={{ textAlign: 'center', padding: '20px 16px', background: `${C}08` }}>
              <div style={{ color: C, fontSize: 9, letterSpacing: '0.2em', marginBottom: 10 }}>COST PER YEAR</div>
              <div style={{ color: C, fontSize: 36, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif', lineHeight: 1 }}>₹1,250</div>
              <div style={{ color: C + '80', fontSize: 10, marginTop: 8 }}>vs ₹3,000–5,000 others</div>
            </div>
          </div>
          <div style={{ marginTop: 10, color: '#2a2a2a', fontSize: 10, fontStyle: 'italic' }}>
            *Competitor data based on market survey 2024. Coverage period may vary with maintenance.
          </div>
        </div>
      )}

      {style === 'icon-count' && (
        <div style={{ background: '#050505', border: '1px solid #1f1f1f', borderRadius: 8, padding: 32, maxWidth: 540 }}>
          <div style={{ color: C, fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 24, fontFamily: 'Rajdhani, sans-serif' }}>Value Visual — Icon Count</div>
          <div style={{ marginBottom: 20 }}>
            <div style={{ color: '#444', fontSize: 11, marginBottom: 10 }}>Annual wax cost = ₹4,000/yr × 4 years = ₹16,000</div>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} style={{
                  width: 24, height: 24, borderRadius: 4,
                  background: i < 5 ? C : '#1a1a1a',
                  border: `1px solid ${i < 5 ? C + '60' : '#111'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 9, color: i < 5 ? 'white' : '#333',
                }}>
                  {i < 5 ? '✓' : '₹'}
                </div>
              ))}
            </div>
          </div>
          <div style={{ padding: '12px 0', borderTop: '1px solid #0d0d0d', borderBottom: '1px solid #0d0d0d', marginBottom: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ color: 'white', fontSize: 13, fontWeight: 700, fontFamily: 'Rajdhani, sans-serif' }}>CERAPHENE = ₹5,000</div>
                <div style={{ color: '#555', fontSize: 11 }}>One application, 4 years coverage</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ color: C, fontSize: 22, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif' }}>68%</div>
                <div style={{ color: '#444', fontSize: 10 }}>lower per year</div>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            {[
              { label: 'Wax ×8 in 4 yrs', cost: '₹16,000', highlight: false },
              { label: 'Competitor coating', cost: '₹12,000+', highlight: false },
              { label: 'CERAPHENE', cost: '₹5,000', highlight: true },
            ].map((item, i) => (
              <div key={i} style={{
                flex: 1, padding: 12, background: '#0a0a0a',
                border: `1px solid ${item.highlight ? C + '40' : '#111'}`,
                borderRadius: 6, textAlign: 'center',
              }}>
                <div style={{ color: item.highlight ? C : '#444', fontSize: 16, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif' }}>{item.cost}</div>
                <div style={{ color: '#333', fontSize: 10, marginTop: 4 }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

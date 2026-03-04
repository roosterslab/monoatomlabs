import React, { useState } from 'react'

const C = '#64748B'

const STYLES = [
  { id: 'bar', name: 'Bar Chart' },
  { id: 'ratio', name: 'Ratio Visual' },
  { id: 'icons', name: 'Icon Count' },
  { id: 'peryear', name: 'Cost/Year' },
]

const COMPETITORS = [
  { name: 'Ceramic Pro 9H', price: 18000, color: '#2a2a2a' },
  { name: 'Gtechniq CSL', price: 15000, color: '#2a2a2a' },
  { name: 'CarPro CQuartz', price: 12000, color: '#2a2a2a' },
  { name: 'CERAPHENE', price: 5000, color: C, highlight: true },
]
const MAX_PRICE = 20000

export default function CostComparisonViz() {
  const [style, setStyle] = useState('bar')

  return (
    <div style={{ padding: 32, fontFamily: 'Inter, sans-serif' }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{ color: C, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8 }}>Data Arrangement — Cost</div>
        <h2 style={{ color: 'white', fontSize: 24, fontWeight: 700, margin: 0, fontFamily: 'Outfit, sans-serif' }}>Cost Comparison Styles</h2>
        <p style={{ color: '#555', fontSize: 13, marginTop: 8, lineHeight: 1.6 }}>CERAPHENE at ₹5,000 vs competitors at ₹12,000–18,000. Four ways to visualize the 60–70% saving.</p>
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
        {STYLES.map(s => (
          <button key={s.id} onClick={() => setStyle(s.id)} style={{
            padding: '8px 16px', borderRadius: 6, border: `1px solid ${style === s.id ? C : '#1f1f1f'}`,
            background: style === s.id ? '#111' : 'transparent', color: style === s.id ? 'white' : '#555',
            cursor: 'pointer', fontSize: 12, fontWeight: style === s.id ? 700 : 400, transition: 'all 0.2s',
          }}>
            {s.name}
          </button>
        ))}
      </div>

      <div style={{ background: '#050505', border: '1px solid #1f1f1f', borderRadius: 8, padding: 32, marginBottom: 24, minHeight: 280 }}>

        {style === 'bar' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ color: '#444', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 4 }}>Price per 50ml — Same Protection</div>
            {COMPETITORS.map((comp, i) => (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span style={{ color: comp.highlight ? 'white' : '#555', fontSize: 12, fontWeight: comp.highlight ? 700 : 400 }}>{comp.name}</span>
                  <span style={{ color: comp.highlight ? 'white' : '#555', fontSize: 14, fontWeight: comp.highlight ? 900 : 400, fontFamily: 'Rajdhani, sans-serif' }}>₹{comp.price.toLocaleString()}</span>
                </div>
                <div style={{ height: comp.highlight ? 12 : 6, background: '#111', borderRadius: 3 }}>
                  <div style={{ width: `${(comp.price / MAX_PRICE) * 100}%`, height: '100%', background: comp.highlight ? C : '#2a2a2a', borderRadius: 3, transition: 'width 0.5s ease' }} />
                </div>
              </div>
            ))}
            <div style={{ marginTop: 12, color: C, fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase' }}>60–70% cheaper — same 9H+ hardness</div>
          </div>
        )}

        {style === 'ratio' && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
            <div style={{ color: '#444', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase' }}>For the price of 3 competitor bottles, get 9 CERAPHENE</div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 32 }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ width: 60, height: 120, background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: 6, marginBottom: 8, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingBottom: 8 }}>
                  <span style={{ color: '#444', fontSize: 11, fontFamily: 'Rajdhani, sans-serif' }}>₹15k</span>
                </div>
                <div style={{ color: '#555', fontSize: 10 }}>Competitor</div>
              </div>
              <div style={{ color: '#333', fontSize: 24, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif', paddingBottom: 32 }}>3×</div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ display: 'flex', gap: 4, marginBottom: 8, flexWrap: 'wrap', maxWidth: 160 }}>
                  {Array.from({ length: 9 }, (_, i) => (
                    <div key={i} style={{ width: 40, height: 40, background: i < 3 ? '#111' : C + '30', border: `1px solid ${i < 3 ? '#333' : C + '60'}`, borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ color: i < 3 ? '#555' : C, fontSize: 8 }}>₹5k</span>
                    </div>
                  ))}
                </div>
                <div style={{ color: C, fontSize: 10 }}>CERAPHENE — 9 applications</div>
              </div>
            </div>
          </div>
        )}

        {style === 'icons' && (
          <div style={{ textAlign: 'center' }}>
            <div style={{ color: '#333', fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 24 }}>Competitor ₹15,000 = 3× CERAPHENE</div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
              {Array.from({ length: 15 }, (_, i) => (
                <div key={i} style={{
                  width: 28, height: 50, background: i < 5 ? '#111' : C + (i < 10 ? '20' : '40'),
                  border: `1px solid ${i < 5 ? '#1f1f1f' : C + (i < 10 ? '40' : '80')}`,
                  borderRadius: 4, position: 'relative', overflow: 'hidden',
                }}>
                  {i >= 5 && <div style={{ position: 'absolute', bottom: 2, left: '50%', transform: 'translateX(-50%)', width: 16, height: 2, background: C, borderRadius: 1 }} />}
                </div>
              ))}
            </div>
            <div style={{ marginTop: 16, display: 'flex', justifyContent: 'center', gap: 24 }}>
              <div style={{ textAlign: 'center' }}><div style={{ color: '#444', fontSize: 11, fontFamily: 'Rajdhani, sans-serif' }}>₹15,000 × 1</div><div style={{ color: '#333', fontSize: 10 }}>competitor</div></div>
              <div style={{ width: 1, background: '#1f1f1f' }} />
              <div style={{ textAlign: 'center' }}><div style={{ color: C, fontSize: 11, fontFamily: 'Rajdhani, sans-serif' }}>₹5,000 × 3</div><div style={{ color: '#555', fontSize: 10 }}>CERAPHENE</div></div>
            </div>
          </div>
        )}

        {style === 'peryear' && (
          <div>
            <div style={{ color: '#444', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 20 }}>Annualised Cost (over 4 years = 1 CERAPHENE application)</div>
            {[
              { name: 'Annual wax (×4)', total: 8000, per: 2000 },
              { name: 'Standard sealant (×4)', total: 12000, per: 3000 },
              { name: 'Competitor ceramic', total: 15000, per: 3750 },
              { name: 'CERAPHENE — 4 yr coverage', total: 5000, per: 1250, highlight: true },
            ].map((row, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 14 }}>
                <div style={{ width: 200, color: row.highlight ? 'white' : '#555', fontSize: 12 }}>{row.name}</div>
                <div style={{ flex: 1, height: row.highlight ? 10 : 4, background: '#1a1a1a', borderRadius: 3 }}>
                  <div style={{ width: `${(row.per / 4000) * 100}%`, height: '100%', background: row.highlight ? C : '#2a2a2a', borderRadius: 3 }} />
                </div>
                <div style={{ width: 80, textAlign: 'right', color: row.highlight ? 'white' : '#444', fontSize: 13, fontFamily: 'Rajdhani, sans-serif', fontWeight: row.highlight ? 800 : 400 }}>₹{row.per}/yr</div>
              </div>
            ))}
            <div style={{ marginTop: 12, color: C, fontSize: 11, letterSpacing: '0.15em' }}>CERAPHENE — lowest annualised cost of any quality protection</div>
          </div>
        )}
      </div>

      <div style={{ padding: 16, background: '#111', border: `1px solid ${C}30`, borderRadius: 8 }}>
        <div style={{ color: C, fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 8 }}>Box Copy — Suggested</div>
        <div style={{ color: '#555', fontSize: 12, fontFamily: 'Rajdhani, sans-serif', lineHeight: 1.8 }}>
          "Premium ceramic coating at ₹5,000 — when competitors charge ₹15,000 for the same 9H+ hardness.
          <br/>Same protection. <strong style={{ color: 'white' }}>60–70% lower cost.</strong>"
        </div>
      </div>
    </div>
  )
}

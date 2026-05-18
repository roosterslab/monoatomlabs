import React from 'react'
import { CheckCircle2, XCircle, MinusCircle, ShieldAlert, Sparkles, Droplets, Banknote, ThermometerSnowflake, Zap } from 'lucide-react'
import PageHeader from '../components/shared/PageHeader'
import PageFooter from '../components/shared/PageFooter'

const COLOR = '#f59e0b'

const CMP_ROWS = [
  { criterion: 'Annual Cost/MW', icon: Banknote, grf: '₹45,000', rob: '₹1,80,000', man: '₹2,40,000', film: '₹95,000' },
  { criterion: 'Water Consumption', icon: Droplets, grf: 'None', rob: '50 kL/MW/yr', man: '80 kL/MW/yr', film: 'None' },
  { criterion: 'Panel Contact', icon: ShieldAlert, grf: 'None', rob: 'Brush contact', man: 'Manual contact', film: 'Full adhesion' },
  { criterion: 'Yield Improvement', icon: Zap, grf: '+10–13%', rob: '+8–10%', man: '+7–9%', film: '+4–6%' },
  { criterion: 'Soiling Reduction', icon: Sparkles, grf: '−40%', rob: '−35%', man: '−30%', film: '−25%' },
  { criterion: 'Thermal Benefit', icon: ThermometerSnowflake, grf: '−5–6°C', rob: 'None', man: 'None', film: 'None' },
]

const SCORES = [
  { label: 'Yield Gain', grf: 98, rob: 65, man: 55, film: 45 },
  { label: 'Cost Efficiency', grf: 95, rob: 40, man: 30, film: 60 },
  { label: 'Durability / Safety', grf: 90, rob: 35, man: 30, film: 70 },
  { label: 'Thermal Benefit', grf: 100, rob: 0, man: 0, film: 0 },
  { label: 'Environmental Score', grf: 100, rob: 45, man: 30, film: 65 },
]

const SCORE_LABELS = ['GRAFFISOL', 'Robotic', 'Manual', 'Anti-soil Film']

const TCO_ROWS = [
  { approach: 'Manual Cleaning', setup: '₹0', annual: '₹24 L', total: '₹2.4 Cr', yield: '₹6.3 Cr', net: '+₹3.90 Cr' },
  { approach: 'Robotic', setup: '₹1.8 Cr', annual: '₹18 L', total: '₹3.6 Cr', yield: '₹5.6 Cr', net: '+₹2.00 Cr' },
  { approach: 'GRAFFISOL', setup: '₹45 L', annual: '₹0', total: '₹45 L', yield: '₹9.8 Cr', net: '+₹9.35 Cr', highlight: true },
]

const DIFFERENTIATORS = [
  {
    title: 'Thermal advantage',
    desc: 'Only solution that reduces panel operating temperature — 5–6°C less = 2.5% power gain on top of soiling improvement.',
  },
  {
    title: 'Zero water',
    desc: 'No water, no chemicals, no waste. Single application lasts 3–5 years. Critical in water-scarce deployments.',
  },
  {
    title: 'Revenue not cost',
    desc: 'Annual cost of ₹45K/MW vs ₹1.4 Cr/MW/yr additional revenue = 31× ROI ratio.',
  },
]

function ScoreBar({ pct, isHero }) {
  return (
    <div style={{ flex: 1, height: 8, background: '#f1f5f9', borderRadius: 4, overflow: 'hidden', boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.05)' }}>
      <div style={{ height: '100%', width: `${pct}%`, background: isHero ? `linear-gradient(to right, ${COLOR}, #d97706)` : '#cbd5e1', borderRadius: 4, transition: 'width 1s ease-out' }} />
    </div>
  )
}

function StatusIcon({ text }) {
  if (text === 'None' || text.includes('−')) return <CheckCircle2 size={14} color="#059669" />
  if (text.includes('contact') || text.includes('adhesion') || text.includes('kL/MW')) return <XCircle size={14} color="#ef4444" />
  return <MinusCircle size={14} color="#9ca3af" />
}

export default function GraffisolComparison() {
  return (
    <div className="page catalog-page-light page-break" style={{ display: 'flex', flexDirection: 'column', fontFamily: 'Inter, sans-serif', '--light-bg-img': "url('/images/graffisol_lifecycle_factory_coating.png')" }}>
      <PageHeader product="GRAFFISOL" title="Comparison vs Alternatives" pageNum="12" color={COLOR} />

      <div style={{ flex: 1, display: 'flex', gap: 0, minHeight: 0 }}>

        {/* Left */}
        <div style={{ flex: 1, padding: '24px', display: 'flex', flexDirection: 'column', gap: 16, background: '#ffffff', borderRight: '1px solid #e5e7eb' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <Sparkles size={18} color={COLOR} />
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 14, fontWeight: 700, color: '#111827', textTransform: 'uppercase', letterSpacing: 1 }}>
              GRAFFISOL vs Maintenance Alternatives
            </div>
          </div>

          <div style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
            <table style={{ borderCollapse: 'collapse', width: '100%', fontFamily: 'Inter, sans-serif', fontSize: 10 }}>
              <thead>
                <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e5e7eb' }}>
                  <th style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 600, color: '#6b7280' }}>Criterion</th>
                  <th style={{ padding: '12px 14px', textAlign: 'center', fontWeight: 700, color: COLOR, background: `${COLOR}10` }}>GRAFFISOL</th>
                  <th style={{ padding: '12px 14px', textAlign: 'center', fontWeight: 600, color: '#6b7280' }}>Robotic</th>
                  <th style={{ padding: '12px 14px', textAlign: 'center', fontWeight: 600, color: '#6b7280' }}>Manual</th>
                  <th style={{ padding: '12px 14px', textAlign: 'center', fontWeight: 600, color: '#6b7280' }}>Anti-soil Film</th>
                </tr>
              </thead>
              <tbody>
                {CMP_ROWS.map((row, i) => (
                  <tr key={i} style={{ borderBottom: i < CMP_ROWS.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
                    <td style={{ padding: '12px 14px', color: '#374151', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 8 }}>
                       <row.icon size={14} color="#9ca3af" /> {row.criterion}
                    </td>
                    <td style={{ padding: '12px 14px', textAlign: 'center', color: '#111827', fontWeight: 800, background: `${COLOR}05` }}>
                      {row.grf}
                    </td>
                    <td style={{ padding: '12px 14px', textAlign: 'center', color: '#6b7280' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                        {row.criterion === 'Panel Contact' || row.criterion === 'Water Consumption' ? <StatusIcon text={row.rob} /> : null}
                        {row.rob}
                      </div>
                    </td>
                    <td style={{ padding: '12px 14px', textAlign: 'center', color: '#6b7280' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                        {row.criterion === 'Panel Contact' || row.criterion === 'Water Consumption' ? <StatusIcon text={row.man} /> : null}
                        {row.man}
                      </div>
                    </td>
                    <td style={{ padding: '12px 14px', textAlign: 'center', color: '#6b7280' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                        {row.criterion === 'Panel Contact' || row.criterion === 'Water Consumption' ? <StatusIcon text={row.film} /> : null}
                        {row.film}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ display: 'flex', gap: 12, marginTop: 12 }}>
            {DIFFERENTIATORS.map((d, i) => (
              <div key={i} style={{
                flex: 1,
                background: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: 12,
                padding: '14px',
                boxShadow: '0 2px 4px -1px rgba(0,0,0,0.03)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: COLOR }} />
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 11, fontWeight: 700, color: '#111827' }}>{d.title}</div>
                </div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9.5, color: '#6b7280', lineHeight: 1.5 }}>{d.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right sidebar */}
        <div style={{
          width: '38%',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
        }}>
          <div>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, fontWeight: 700, color: '#111827', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 16 }}>
              Score Comparison Matrix
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {SCORES.map((sc, i) => (
                <div key={i} style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: 10, padding: '12px 14px', boxShadow: '0 2px 4px -1px rgba(0,0,0,0.02)' }}>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 700, color: '#374151', marginBottom: 8 }}>{sc.label}</div>
                  {[sc.grf, sc.rob, sc.man, sc.film].map((pct, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                      <div style={{ width: 80, fontFamily: 'Inter, sans-serif', fontSize: 8.5, fontWeight: j === 0 ? 700 : 500, color: j === 0 ? COLOR : '#6b7280', flexShrink: 0 }}>{SCORE_LABELS[j]}</div>
                      <ScoreBar pct={pct} isHero={j === 0} />
                      <div style={{ width: 26, textAlign: 'right', fontFamily: 'Outfit, sans-serif', fontSize: 9, fontWeight: j === 0 ? 800 : 600, color: j === 0 ? COLOR : '#9ca3af' }}>{pct}</div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 12, fontWeight: 700, color: '#111827', textTransform: 'uppercase', marginBottom: 12 }}>
              Total Cost of Ownership (per 10 MW, 10 yrs)
            </div>
            <div style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.03)' }}>
              <table style={{ borderCollapse: 'collapse', width: '100%', fontFamily: 'Inter, sans-serif', fontSize: 9 }}>
                <thead>
                  <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e5e7eb' }}>
                    {['Approach', 'Setup', 'Annual', 'Yield Gain Value', 'Net'].map((h, i) => (
                      <th key={i} style={{ padding: '8px 10px', textAlign: i === 0 ? 'left' : 'center', color: '#6b7280', fontWeight: 600, fontSize: 8.5 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {TCO_ROWS.map((row, i) => (
                    <tr key={i} style={{ background: row.highlight ? `linear-gradient(to right, ${COLOR}15, ${COLOR}05)` : '#ffffff', borderBottom: i < TCO_ROWS.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
                      <td style={{ padding: '10px', color: row.highlight ? COLOR : '#374151', fontWeight: row.highlight ? 800 : 600 }}>{row.approach}</td>
                      <td style={{ padding: '10px', textAlign: 'center', color: row.highlight ? COLOR : '#6b7280', fontWeight: row.highlight ? 700 : 500 }}>{row.setup}</td>
                      <td style={{ padding: '10px', textAlign: 'center', color: row.highlight ? COLOR : '#6b7280', fontWeight: row.highlight ? 700 : 500 }}>{row.annual}</td>
                      <td style={{ padding: '10px', textAlign: 'center', color: row.highlight ? COLOR : '#6b7280', fontWeight: row.highlight ? 700 : 500 }}>{row.yield}</td>
                      <td style={{ padding: '10px', textAlign: 'center', color: row.highlight ? '#111827' : '#059669', fontWeight: row.highlight ? 800 : 700, fontSize: 10 }}>{row.net}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div style={{
            background: `linear-gradient(135deg, ${COLOR}, #d97706)`,
            borderRadius: 12,
            padding: '16px 20px',
            color: '#fff',
            marginTop: 16,
            boxShadow: `0 10px 15px -3px ${COLOR}40`,
          }}>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 14, fontWeight: 700, lineHeight: 1.4, marginBottom: 8 }}>
              31× ROI ratio. The only maintenance approach that eliminates water, brush contact, and chemicals while delivering superior yield gain.
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'Inter, sans-serif', fontSize: 10, color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>
              <CheckCircle2 size={12} color="#fff" /> 26 projects · 150+ MW · IEC 60904 validated
            </div>
          </div>
        </div>
      </div>

      <PageFooter color={COLOR} />
    </div>
  )
}

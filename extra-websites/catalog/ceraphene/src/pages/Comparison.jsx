import React from 'react'
import { ShieldCheck, Zap, Layers } from 'lucide-react'
import PageHeader from '../components/shared/PageHeader'
import PageFooter from '../components/shared/PageFooter'

const COLOR = '#64748b'

const COMPARE_ROWS = [
  { criterion: 'Scratch Hardness (Pencil)', cera: '9H+', std: '7H', ppf: '4H (flexible)', wax: '2\u20133H' },
  { criterion: 'Durability', cera: '3\u20134 years', std: '1.5\u20132 years', ppf: '5\u20137 years', wax: '3\u20136 months' },
  { criterion: 'Panel Temp Reduction', cera: '8\u201312\u00b0C', std: 'None', ppf: 'None', wax: 'None' },
  { criterion: 'Hydrophobicity (Contact Angle)', cera: '115\u00b0+', std: '105\u2013110\u00b0', ppf: '95\u00b0', wax: '85\u201390\u00b0' },
  { criterion: 'Self-Healing', cera: 'No', std: 'No', ppf: 'Yes (heat)', wax: 'No' },
  { criterion: 'UV Protection', cera: 'Excellent', std: 'Good', ppf: 'Excellent', wax: 'Moderate' },
  { criterion: 'Chemical Resistance', cera: 'Excellent', std: 'Good', ppf: 'Good', wax: 'Moderate' },
  { criterion: 'Application Time (full car)', cera: '4\u20136 hrs', std: '3\u20135 hrs', ppf: '8\u201316 hrs', wax: '1\u20132 hrs' },
  { criterion: 'Price (sedan, incl labour)', cera: '\u20b95,000\u20138,000', std: '\u20b98,000\u201315,000', ppf: '\u20b945,000\u20131,20,000', wax: '\u20b91,500\u20134,000' },
  { criterion: 'Graphene-enhanced', cera: 'Yes', std: 'No', ppf: 'No', wax: 'No' },
]

const ADV_CARDS = [
  {
    title: 'Thermal protection',
    body: 'CERAPHENE is the only surface protection product that measurably reduces panel surface temperature. 8\u201312\u00b0C reduction slows paint polymer degradation \u2014 extending paint life by 30\u201340% beyond the coating itself.',
    icon: Zap,
  },
  {
    title: 'Price-performance',
    body: '9H+ graphene hardness at \u20b95,000\u20138,000 per car \u2014 significantly less than standard ceramic (\u20b98,000\u201315,000) and far less than PPF (\u20b945,000\u20131,20,000) while delivering hardness superior to both.',
    icon: ShieldCheck,
  },
  {
    title: 'Graphene advantage',
    body: 'GNP reinforces the ceramic matrix at atomic level \u2014 not a surface coating layered on top. Cannot be removed by car washes, polishes, or UV \u2014 only mechanical abrasion eventually wears the surface.',
    icon: Layers,
  },
]

const SCORE_CRITERIA = [
  { label: 'Hardness', cera: 100, std: 75, ppf: 45, wax: 25 },
  { label: 'Durability', cera: 80, std: 55, ppf: 95, wax: 10 },
  { label: 'Thermal', cera: 100, std: 0, ppf: 0, wax: 0 },
  { label: 'Cost Efficiency', cera: 90, std: 65, ppf: 20, wax: 95 },
  { label: 'Chemical Resistance', cera: 90, std: 70, ppf: 70, wax: 30 },
]

const TCO_ROWS = [
  { item: 'Coating cost (5 yr)', none: '\u20b90', wax: '\u20b912,000', std: '\u20b916,000', cera: '\u20b98,000' },
  { item: 'Panel repaints', none: '\u20b935,000', wax: '\u20b920,000', std: '\u20b98,000', cera: '\u20b95,000' },
  { item: 'Wash / detailing extra', none: '\u20b915,000', wax: '\u20b912,000', std: '\u20b98,000', cera: '\u20b95,000' },
  { item: 'Resale value delta', none: '\u2212\u20b930,000', wax: '\u2212\u20b920,000', std: '\u2212\u20b98,000', cera: '+\u20b95,000' },
  { item: '5-yr Net Cost', none: '\u20b980,000', wax: '\u20b964,000', std: '\u20b940,000', cera: '\u20b923,000', bold: true },
]

const thD = { fontFamily: 'Inter, sans-serif', fontSize: 8, padding: '5px 7px', color: '#9ca3af', borderBottom: '1px solid rgba(255,255,255,0.1)', textAlign: 'left' }
const tdD = { fontFamily: 'Inter, sans-serif', fontSize: 8.5, padding: '4px 7px', borderBottom: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.7)', verticalAlign: 'top' }

export default function CerapheneComparison() {
  return (
    <div className="page catalog-page-light page-break" style={{ display: 'flex', flexDirection: 'column', '--light-bg-img': "url('/images/ceraphene-studio.png')", fontFamily: 'Inter, sans-serif' }}>
      <PageHeader product="CERAPHENE" title="Comparison vs Alternatives" pageNum="11" color={COLOR} />

      <div style={{ flex: 1, display: 'flex', gap: 0, padding: '10px 20px 8px 20px', overflow: 'hidden' }}>

        {/* Left */}
        <div style={{ flex: 1, paddingRight: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, fontWeight: 700, color: '#111827', textTransform: 'uppercase', letterSpacing: 1 }}>
            CERAPHENE vs Paint Protection Alternatives
          </div>

          <div style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: 12, overflow: 'hidden', boxShadow: '0 2px 4px -1px rgba(0,0,0,0.03)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #e5e7eb' }}>
                  {['Criterion', 'CERAPHENE', 'Standard Ceramic', 'Paint Protection Film (PPF)', 'Polymer Wax Sealant'].map((h, i) => (
                    <th key={h} style={{
                      fontFamily: 'Inter, sans-serif', fontSize: 8, padding: '6px 8px',
                      background: i === 1 ? `${COLOR}08` : 'transparent',
                      fontWeight: i === 1 ? 700 : 600,
                      color: i === 1 ? COLOR : '#374151',
                      textAlign: 'left',
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((r) => (
                  <tr key={r.criterion} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ fontFamily: 'Inter, sans-serif', fontSize: 8, padding: '5px 8px', color: '#374151' }}>{r.criterion}</td>
                    <td style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, padding: '5px 8px', color: '#111827', fontWeight: 700, background: `${COLOR}05` }}>{r.cera}</td>
                    <td style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, padding: '5px 8px', color: '#6b7280' }}>{r.std}</td>
                    <td style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, padding: '5px 8px', color: '#6b7280' }}>{r.ppf}</td>
                    <td style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, padding: '5px 8px', color: '#9ca3af' }}>{r.wax}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ display: 'flex', gap: 8 }}>
            {ADV_CARDS.map((c) => (
              <div key={c.title} style={{ flex: 1, background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: 12, padding: '10px 12px', boxShadow: '0 2px 4px -1px rgba(0,0,0,0.03)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: `${COLOR}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <c.icon size={14} color={COLOR} />
                  </div>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 10, fontWeight: 700, color: '#111827' }}>{c.title}</div>
                </div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, color: '#6b7280', lineHeight: 1.55 }}>{c.body}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div style={{ width: '36%', borderLeft: '1px solid #e5e7eb', paddingLeft: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>

          {/* Score bars */}
          <div style={{ background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: 12, padding: '14px', boxShadow: '0 2px 4px -1px rgba(0,0,0,0.03)' }}>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 11, fontWeight: 700, color: '#111827', letterSpacing: 1, marginBottom: 8, textTransform: 'uppercase' }}>Performance Score Comparison</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
              {SCORE_CRITERIA.map((c) => (
                <div key={c.label}>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, color: '#6b7280', marginBottom: 3 }}>{c.label}</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <div style={{ width: `${c.cera}%`, height: 8, borderRadius: 4, background: COLOR, maxWidth: '100%' }} />
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 7.5, color: '#111827', whiteSpace: 'nowrap', fontWeight: 600 }}>CERAPHENE {c.cera}%</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <div style={{ width: `${c.std}%`, height: 8, borderRadius: 4, background: '#cbd5e1', maxWidth: '100%' }} />
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 7.5, color: '#9ca3af', whiteSpace: 'nowrap' }}>Std Ceramic {c.std}%</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <div style={{ width: `${c.ppf}%`, height: 8, borderRadius: 4, background: '#e2e8f0', maxWidth: '100%' }} />
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 7.5, color: '#9ca3af', whiteSpace: 'nowrap' }}>PPF {c.ppf}%</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <div style={{ width: `${c.wax}%`, height: 8, borderRadius: 4, background: '#f1f5f9', maxWidth: '100%' }} />
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 7.5, color: '#9ca3af', whiteSpace: 'nowrap' }}>Wax Sealant {c.wax}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* TCO Table */}
          <div style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: 12, overflow: 'hidden', boxShadow: '0 2px 4px -1px rgba(0,0,0,0.03)' }}>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 11, fontWeight: 700, color: '#111827', letterSpacing: 1, padding: '10px 12px 6px', textTransform: 'uppercase' }}>Total Cost of Ownership (per 1 vehicle, 5-year window)</div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #e5e7eb' }}>
                  {['Item', 'No Protection', 'Wax Sealant', 'Std Ceramic', 'CERAPHENE'].map((h, i) => (
                    <th key={h} style={{ fontFamily: 'Inter, sans-serif', fontSize: 7.5, padding: '5px 8px', background: i === 4 ? `${COLOR}08` : 'transparent', color: i === 4 ? COLOR : '#374151', fontWeight: 600, textAlign: 'left' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TCO_ROWS.map((r) => (
                  <tr key={r.item} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ fontFamily: 'Inter, sans-serif', fontSize: 8, padding: '5px 8px', color: '#374151' }}>{r.item}</td>
                    <td style={{ fontFamily: 'Inter, sans-serif', fontSize: 8, padding: '5px 8px', color: '#9ca3af' }}>{r.none}</td>
                    <td style={{ fontFamily: 'Inter, sans-serif', fontSize: 8, padding: '5px 8px', color: '#6b7280' }}>{r.wax}</td>
                    <td style={{ fontFamily: 'Inter, sans-serif', fontSize: 8, padding: '5px 8px', color: '#6b7280' }}>{r.std}</td>
                    <td style={{ fontFamily: 'Inter, sans-serif', fontSize: 8, padding: '5px 8px', color: COLOR, fontWeight: r.bold ? 700 : 500, background: `${COLOR}05` }}>{r.cera}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Position box */}
          <div style={{ background: COLOR, borderRadius: 12, padding: 12, color: '#fff', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 11, fontWeight: 700, marginBottom: 5, lineHeight: 1.4 }}>
              9H+ graphene hardness. 3\u20134 year durability. The most advanced automotive surface protection available \u2014 at a price less than standard ceramic.
            </div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, color: 'rgba(255,255,255,0.8)' }}>
              70+ projects \u00b7 5,000+ vehicles \u00b7 NABL D3363 validated
            </div>
          </div>

        </div>
      </div>

      <PageFooter color={COLOR} />
    </div>
  )
}

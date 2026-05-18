import React from 'react'
import { BarChart2, Zap, Shield, TrendingUp } from 'lucide-react'
import PageHeader from '../components/shared/PageHeader'
import PageFooter from '../components/shared/PageFooter'

const COLOR = '#d97706'

const CMP_ROWS = [
  { criterion: 'Compressive Strength Gain', gph: '+25% avg', sil: '+10\u201315%', ggbs: '+5\u201310%', steel: '+5%' },
  { criterion: 'Flexural Strength Gain', gph: '+18%', sil: '+8%', ggbs: '+4%', steel: '+15\u201330%' },
  { criterion: 'Cement Reduction Possible', gph: 'Yes \u2014 13%', sil: 'No (additive)', ggbs: 'Yes \u2014 30%', steel: 'No' },
  { criterion: 'W/C Ratio Impact', gph: 'Neutral', sil: 'Slight increase', ggbs: 'Slight reduce', steel: 'Neutral' },
  { criterion: 'Cost per m\u00B3 (additive)', gph: '\u20B918', sil: '\u20B980\u2013110', ggbs: '\u20B920\u201335', steel: '\u20B9200\u2013400' },
  { criterion: 'Equipment Change Required', gph: 'None', sil: 'Silo + dosing', ggbs: 'Silo + dosing', steel: 'Pump modification' },
  { criterion: 'Workability Impact', gph: 'None', sil: 'Reduced', ggbs: 'Slight reduce', steel: 'Reduced' },
  { criterion: 'NABL / Third-party tested', gph: 'Yes', sil: 'Yes', ggbs: 'Yes', steel: 'Yes' },
  { criterion: 'ESG / CO\u2082 Impact', gph: 'High positive', sil: 'Positive', ggbs: 'High positive', steel: 'Neutral' },
  { criterion: 'Net Cost Benefit (per m\u00B3)', gph: '\u20B945 saving', sil: '\u20B930\u201350 cost', ggbs: '\u20B95\u201315 saving', steel: '\u20B9180\u2013380 cost', highlight: true },
]

const SCORES = [
  { label: 'Strength', gph: 90, others: [65, 55, 45] },
  { label: 'Cost Efficiency', gph: 95, others: [30, 68, 20] },
  { label: 'Ease of Use', gph: 98, others: [45, 50, 40] },
  { label: 'ESG Impact', gph: 88, others: [60, 85, 10] },
  { label: 'Long-term Durability', gph: 85, others: [65, 60, 50] },
]

const SCORE_LABELS = ['GRAPHACRETE', 'Silica Fume', 'GGBS Blend', 'Steel Fibres']

const TCO_ROWS = [
  { item: 'Cement cost', std: '\u20B93,04,000', sil: '\u20B93,04,000', ggbs: '\u20B92,12,800', gph: '\u20B92,64,480' },
  { item: 'Additive cost', std: '\u2014', sil: '\u20B980,000', ggbs: '\u20B928,000', gph: '\u20B918,000' },
  { item: 'Total', std: '\u20B93,04,000', sil: '\u20B93,84,000', ggbs: '\u20B92,40,800', gph: '\u20B92,82,480', bold: true },
  { item: 'Saving vs Standard', std: '\u2014', sil: '\u2212\u20B980,000', ggbs: '+\u20B963,200', gph: '+\u20B921,520', bold: true },
]

const DIFFERENTIATORS = [
  {
    title: 'Zero CAPEX',
    desc: 'No silo, no batching changes. GRAPHACRETE doses into existing batch water \u2014 installation cost is zero.',
    icon: Zap,
  },
  {
    title: 'Dual benefit',
    desc: 'Only admixture that simultaneously increases strength AND allows cement reduction \u2014 net negative cost per m\u00B3.',
    icon: TrendingUp,
  },
  {
    title: 'ESG certified',
    desc: 'CO\u2082 reduction auditable per IPCC guidelines. Accepted for green building (IGBC/LEED) credit reporting.',
    icon: Shield,
  },
]

function ScoreBar({ pct, isHero }) {
  return (
    <div style={{ flex: 1, height: 7, background: '#f1f5f9', borderRadius: 4, overflow: 'hidden' }}>
      <div style={{ height: '100%', width: `${pct}%`, background: isHero ? COLOR : '#cbd5e1', borderRadius: 4 }} />
    </div>
  )
}

export default function GraphacreteComparison() {
  return (
    <div className="page catalog-page-light page-break" style={{ display: 'flex', flexDirection: 'column', fontFamily: 'Inter, sans-serif', '--light-bg-img': "url('/images/graphacrete-studio.png')" }}>
      <PageHeader product="GRAPHACRETE" title="Comparison vs Alternatives" pageNum="11" color={COLOR} />

      <div style={{ flex: 1, display: 'flex', gap: 0, minHeight: 0 }}>

        {/* Left */}
        <div style={{ flex: 1, padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
            <BarChart2 size={18} color={COLOR} />
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, fontWeight: 700, color: '#111827', textTransform: 'uppercase', letterSpacing: 1 }}>
              GRAPHACRETE vs Industry Alternatives
            </div>
          </div>

          <table style={{ borderCollapse: 'collapse', width: '100%', fontFamily: 'Inter, sans-serif', fontSize: 10, border: '1px solid #e5e7eb', borderRadius: 12, overflow: 'hidden' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #e5e7eb' }}>
                {['Criterion', 'GRAPHACRETE', 'Silica Fume', 'GGBS Blend', 'Steel Fibres'].map((h, i) => (
                  <th key={i} style={{ padding: '6px 10px', textAlign: i === 0 ? 'left' : 'center', fontWeight: 600, fontSize: 10, color: '#374151' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {CMP_ROWS.map((row, i) => (
                <tr key={i} style={{ background: row.highlight ? `${COLOR}10` : '#ffffff', borderBottom: i < CMP_ROWS.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
                  <td style={{ padding: '5px 10px', color: '#374151', fontWeight: 500 }}>{row.criterion}</td>
                  <td style={{ padding: '5px 10px', textAlign: 'center', color: row.highlight ? COLOR : COLOR, fontWeight: 700, fontSize: row.highlight ? 11 : 10 }}>{row.gph}</td>
                  <td style={{ padding: '5px 10px', textAlign: 'center', color: '#6b7280' }}>{row.sil}</td>
                  <td style={{ padding: '5px 10px', textAlign: 'center', color: '#6b7280' }}>{row.ggbs}</td>
                  <td style={{ padding: '5px 10px', textAlign: 'center', color: '#6b7280' }}>{row.steel}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
            {DIFFERENTIATORS.map((d, i) => (
              <div key={i} style={{
                flex: 1,
                background: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: 12,
                padding: '10px 12px',
                boxShadow: '0 2px 4px -1px rgba(0,0,0,0.03)',
                display: 'flex',
                flexDirection: 'column',
                gap: 6,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: COLOR, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <d.icon size={16} color="#ffffff" />
                  </div>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 10, fontWeight: 700, color: COLOR }}>{d.title}</div>
                </div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: '#6b7280', lineHeight: 1.5 }}>{d.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right sidebar */}
        <div style={{
          width: '36%',
          borderLeft: '1px solid #e5e7eb',
          padding: '14px 14px',
          background: '#f8fafc',
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
        }}>
          <div style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: 12, padding: '12px', boxShadow: '0 2px 4px -1px rgba(0,0,0,0.03)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <BarChart2 size={16} color={COLOR} />
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 12, fontWeight: 700, color: '#111827', textTransform: 'uppercase', letterSpacing: 1 }}>
                Score Comparison
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {SCORES.map((sc, i) => (
                <div key={i}>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: '#374151', marginBottom: 4 }}>{sc.label}</div>
                  {[sc.gph, ...sc.others].map((pct, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
                      <div style={{ width: 80, fontFamily: 'Inter, sans-serif', fontSize: 8, color: j === 0 ? COLOR : '#9ca3af', flexShrink: 0 }}>{SCORE_LABELS[j]}</div>
                      <ScoreBar pct={pct} isHero={j === 0} />
                      <div style={{ width: 28, textAlign: 'right', fontFamily: 'Outfit, sans-serif', fontSize: 8, color: j === 0 ? COLOR : '#9ca3af' }}>{pct}%</div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: 12, padding: '12px', boxShadow: '0 2px 4px -1px rgba(0,0,0,0.03)' }}>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 11, fontWeight: 700, color: '#374151', marginBottom: 8 }}>
              Total Cost of Ownership (per 1,000 m\u00B3, M25 grade)
            </div>
            <table style={{ borderCollapse: 'collapse', width: '100%', fontFamily: 'Inter, sans-serif', fontSize: 8.5 }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #e5e7eb' }}>
                  {['Cost Item', 'Standard', '+Silica Fume', '+GGBS', '+GRAPHACRETE'].map((h, i) => (
                    <th key={i} style={{ padding: '4px 6px', textAlign: i === 0 ? 'left' : 'center', color: i === 4 ? COLOR : '#374151', fontWeight: 600 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TCO_ROWS.map((row, i) => (
                  <tr key={i} style={{ borderBottom: i < TCO_ROWS.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
                    <td style={{ padding: '4px 6px', color: '#374151', fontWeight: row.bold ? 700 : 400 }}>{row.item}</td>
                    <td style={{ padding: '4px 6px', textAlign: 'center', color: '#6b7280', fontWeight: row.bold ? 700 : 400 }}>{row.std}</td>
                    <td style={{ padding: '4px 6px', textAlign: 'center', color: '#6b7280', fontWeight: row.bold ? 700 : 400 }}>{row.sil}</td>
                    <td style={{ padding: '4px 6px', textAlign: 'center', color: '#6b7280', fontWeight: row.bold ? 700 : 400 }}>{row.ggbs}</td>
                    <td style={{ padding: '4px 6px', textAlign: 'center', color: COLOR, fontWeight: 700 }}>{row.gph}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{
            background: COLOR,
            borderRadius: 12,
            padding: '12px',
            color: '#fff',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
          }}>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 11, fontWeight: 700, lineHeight: 1.4, marginBottom: 6 }}>
              The only concrete admixture with negative net cost \u2014 adding performance while saving money.
            </div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: 'rgba(255,255,255,0.8)' }}>
              42 projects \u00B7 8 states \u00B7 NABL validated
            </div>
          </div>
        </div>
      </div>

      <PageFooter color={COLOR} />
    </div>
  )
}

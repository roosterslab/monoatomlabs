import React from 'react'
import { BarChart2, ShieldCheck, CheckCircle } from 'lucide-react'
import PageHeader from '../components/shared/PageHeader'
import PageFooter from '../components/shared/PageFooter'

const COLOR = '#06b6d4'

const COMPARE_ROWS = [
  { criterion: 'Tensile Strength Gain', hdgpe: '+30%', cb: '+5\u20138%', ns: '+10\u201315%', std: 'Baseline' },
  { criterion: 'Impact Strength Gain', hdgpe: '+32%', cb: '+8%', ns: '+12%', std: 'Baseline' },
  { criterion: 'Elongation at Break', hdgpe: '20\u00d7 improvement', cb: '+5%', ns: '+8%', std: 'Baseline' },
  { criterion: 'UV Resistance', hdgpe: '+20% (built-in)', cb: '+30% (separate UV pkg)', ns: '+10%', std: 'Needs UV additive' },
  { criterion: 'Flexural Modulus', hdgpe: '+18%', cb: '+3%', ns: '+8%', std: 'Baseline' },
  { criterion: 'FSSAI Food Grade', hdgpe: 'Yes', cb: 'No (black colour)', ns: 'Conditional', std: 'Yes' },
  { criterion: 'Colour Neutral', hdgpe: 'Yes', cb: 'No (black)', ns: 'Yes', std: 'Yes' },
  { criterion: 'Dosage Required', hdgpe: '0.5\u20132%', cb: '2\u20133%', ns: '3\u20135%', std: 'N/A' },
  { criterion: 'Cost per kg HDPE', hdgpe: '\u20b98\u201315', cb: '\u20b94\u20136', ns: '\u20b918\u201325', std: '\u20b90' },
  { criterion: 'Net ROI per ton', hdgpe: '\u20b919,000', cb: '\u20b93,000\u20135,000', ns: '\u20b96,000\u20138,000', std: '\u20b90' },
]

const ADV_CARDS = [
  {
    title: 'Colour-transparent',
    body: 'Only GNP additive that is colour-neutral at working loadings. Allows natural, coloured, or pigmented HDPE without restriction \u2014 critical for films, pipes, and food-contact applications.',
    icon: CheckCircle,
  },
  {
    title: 'FSSAI certified',
    body: 'Carbon black masterbatch disqualifies products from food-grade status. HD-G-PE meets FSSAI requirements at all loadings \u2014 no separate food-grade and standard SKUs needed.',
    icon: ShieldCheck,
  },
  {
    title: 'Multi-property',
    body: 'Carbon black improves only UV resistance. Nano-silica improves only stiffness. HD-G-PE improves tensile, impact, elongation, UV, and modulus simultaneously at one dosage.',
    icon: BarChart2,
  },
]

const SCORE_CRITERIA = [
  { label: 'Strength', hdgpe: 95, cb: 30, ns: 55 },
  { label: 'Toughness', hdgpe: 95, cb: 35, ns: 50 },
  { label: 'UV Protection', hdgpe: 85, cb: 95, ns: 45 },
  { label: 'Food Safety', hdgpe: 100, cb: 0, ns: 70 },
  { label: 'Cost Efficiency', hdgpe: 88, cb: 92, ns: 60 },
]

const TCO_ROWS = [
  { item: 'Material cost', std: '\u20b990 L', cb: '\u20b990.5 L', ns: '\u20b991.8 L', hdgpe: '\u20b991.5 L' },
  { item: 'Additive cost', std: '\u20b90', cb: '\u20b91.2 L', ns: '\u20b93.6 L', hdgpe: '\u20b91.5 L' },
  { item: 'Revenue premium', std: 'Baseline', cb: 'Baseline', ns: '+\u20b92 L', hdgpe: '+\u20b98 L' },
  { item: 'Avoided rejects/warranty', std: 'Baseline', cb: '\u2212\u20b90.5 L', ns: '\u2212\u20b90.8 L', hdgpe: '\u2212\u20b92.5 L' },
  { item: 'Net profit vs standard', std: '\u2014', cb: '\u2212\u20b90.7 L', ns: '\u2212\u20b91.4 L', hdgpe: '+\u20b96.0 L', bold: true },
]

export default function HdgpeComparison() {
  return (
    <div className="page catalog-page-light page-break" style={{ display: 'flex', flexDirection: 'column', fontFamily: 'Inter, sans-serif', '--light-bg-img': "url('/images/hd-g-pe-studio.png')" }}>
      <PageHeader product="HD-G-PE" title="Comparison vs Alternatives" pageNum="11" color={COLOR} />

      <div style={{ flex: 1, display: 'flex', gap: 0, padding: '10px 20px 8px 20px', overflow: 'hidden' }}>

        {/* Left */}
        <div style={{ flex: 1, paddingRight: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
            <BarChart2 size={18} color={COLOR} />
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, fontWeight: 700, color: '#111827', textTransform: 'uppercase', letterSpacing: 0.5 }}>
              HD-G-PE vs HDPE Enhancement Alternatives
            </div>
          </div>

          <div style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: 12, padding: '12px', boxShadow: '0 2px 4px -1px rgba(0,0,0,0.03)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #e5e7eb' }}>
                  {['Criterion', 'HD-G-PE', 'Carbon Black MB', 'Nano-Silica MB', 'Standard HDPE'].map((h, i) => (
                    <th key={h} style={{
                      fontFamily: 'Inter, sans-serif', fontSize: 8, padding: '5px 7px',
                      color: i === 1 ? COLOR : '#374151',
                      textAlign: 'left', fontWeight: i === 1 ? 700 : 600,
                      background: i === 1 ? `${COLOR}08` : 'transparent',
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((r, i) => (
                  <tr key={r.criterion} style={{ borderBottom: i < COMPARE_ROWS.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
                    <td style={{ fontFamily: 'Inter, sans-serif', fontSize: 8, padding: '4px 7px', color: '#374151' }}>{r.criterion}</td>
                    <td style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, padding: '4px 7px', color: COLOR, fontWeight: 700, background: `${COLOR}05` }}>{r.hdgpe}</td>
                    <td style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, padding: '4px 7px', color: '#6b7280' }}>{r.cb}</td>
                    <td style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, padding: '4px 7px', color: '#6b7280' }}>{r.ns}</td>
                    <td style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, padding: '4px 7px', color: '#9ca3af' }}>{r.std}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ display: 'flex', gap: 8 }}>
            {ADV_CARDS.map((c) => (
              <div key={c.title} style={{ flex: 1, background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: 12, padding: '8px 10px', boxShadow: '0 2px 4px -1px rgba(0,0,0,0.03)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                  <div style={{ width: 24, height: 24, borderRadius: 6, background: `${COLOR}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <c.icon size={12} color={COLOR} />
                  </div>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 10, fontWeight: 700, color: COLOR }}>{c.title}</div>
                </div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, color: '#4b5563', lineHeight: 1.55 }}>{c.body}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div style={{ width: '36%', borderLeft: '1px solid #e5e7eb', paddingLeft: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>

          {/* Score bars */}
          <div style={{ background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: 12, padding: '12px', boxShadow: '0 2px 4px -1px rgba(0,0,0,0.03)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <BarChart2 size={16} color={COLOR} />
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 11, fontWeight: 700, color: '#111827' }}>Performance Score Comparison</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
              {SCORE_CRITERIA.map((c) => (
                <div key={c.label}>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, color: '#374151', marginBottom: 3 }}>{c.label}</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <div style={{ width: `${c.hdgpe}%`, height: 8, borderRadius: 4, background: COLOR, maxWidth: '100%' }} />
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 7.5, color: COLOR, whiteSpace: 'nowrap' }}>HD-G-PE {c.hdgpe}%</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <div style={{ width: `${c.cb}%`, height: 8, borderRadius: 4, background: '#475569', maxWidth: '100%' }} />
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 7.5, color: '#9ca3af', whiteSpace: 'nowrap' }}>Carbon Black {c.cb}%</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <div style={{ width: `${c.ns}%`, height: 8, borderRadius: 4, background: '#d1d5db', maxWidth: '100%' }} />
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 7.5, color: '#9ca3af', whiteSpace: 'nowrap' }}>Nano-Silica {c.ns}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* TCO Table */}
          <div style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: 12, padding: '12px', boxShadow: '0 2px 4px -1px rgba(0,0,0,0.03)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <ShieldCheck size={16} color={COLOR} />
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 11, fontWeight: 700, color: '#111827' }}>Total Cost of Ownership (per 100 T HDPE)</div>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #e5e7eb' }}>
                  {['Cost Item', 'Std HDPE', '+Carbon Black', '+Nano-Silica', '+HD-G-PE'].map((h, i) => (
                    <th key={h} style={{ fontFamily: 'Inter, sans-serif', fontSize: 7.5, padding: '5px 7px', color: i === 4 ? COLOR : '#374151', textAlign: 'left', fontWeight: 600, background: i === 4 ? `${COLOR}08` : 'transparent' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TCO_ROWS.map((r, i) => (
                  <tr key={r.item} style={{ borderBottom: i < TCO_ROWS.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
                    <td style={{ fontFamily: 'Inter, sans-serif', fontSize: 8, padding: '4px 7px', color: '#374151' }}>{r.item}</td>
                    <td style={{ fontFamily: 'Inter, sans-serif', fontSize: 8, padding: '4px 7px', color: '#6b7280' }}>{r.std}</td>
                    <td style={{ fontFamily: 'Inter, sans-serif', fontSize: 8, padding: '4px 7px', color: '#6b7280' }}>{r.cb}</td>
                    <td style={{ fontFamily: 'Inter, sans-serif', fontSize: 8, padding: '4px 7px', color: '#6b7280' }}>{r.ns}</td>
                    <td style={{ fontFamily: 'Inter, sans-serif', fontSize: 8, padding: '4px 7px', color: COLOR, fontWeight: r.bold ? 700 : 500, background: `${COLOR}05` }}>{r.hdgpe}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Position box */}
          <div style={{ background: COLOR, borderRadius: 12, padding: 12, color: '#000', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 11, fontWeight: 700, marginBottom: 5, lineHeight: 1.4 }}>
              The only HDPE additive that simultaneously improves 5 mechanical properties, maintains food-grade certification, and delivers \u20b919,000/ton positive ROI.
            </div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, color: 'rgba(0,0,0,0.7)' }}>
              26 projects \u00b7 12,000+ tons \u00b7 ASTM D638/D256 validated
            </div>
          </div>

        </div>
      </div>

      <PageFooter color={COLOR} />
    </div>
  )
}

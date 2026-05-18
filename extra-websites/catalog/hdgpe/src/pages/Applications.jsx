import React from 'react'
import { Factory, Layers, Target, BarChart2 } from 'lucide-react'
import PageHeader from '../components/shared/PageHeader'
import PageFooter from '../components/shared/PageFooter'

const COLOR = '#06b6d4'

const STATS = [
  { val: '26+', lab: 'Projects', icon: Target },
  { val: '12,000+ T', lab: 'HDPE Enhanced', icon: Layers },
  { val: '6', lab: 'Industry Sectors', icon: Factory },
  { val: '\u20b919K', lab: 'Avg ROI per Ton', icon: BarChart2 },
]

const SECTORS = [
  {
    name: 'Water Distribution Pipes',
    process: 'Extrusion (DN50\u2013DN630)',
    m1lab: 'Tensile Gain', m1val: '+28%',
    m2lab: 'Wall Reduction', m2val: '15%',
    desc: 'HDPE pressure pipes for potable water, sewage, and irrigation. HD-G-PE enables SDR downgauging \u2014 same pressure class, thinner walls, lower material cost. FSSAI food-grade certified.',
  },
  {
    name: 'Industrial Packaging Films',
    process: 'Blown Film Extrusion',
    m1lab: 'Elongation', m1val: '20\u00d7',
    m2lab: 'Gauge Reduction', m2val: '18%',
    desc: 'Stretch wrap, agricultural mulch film, industrial liners. Exceptional elongation performance allows significant gauge reduction without sacrificing tear resistance.',
  },
  {
    name: 'Geomembranes & Liners',
    process: 'Flat Extrusion',
    m1lab: 'Impact Strength', m1val: '+32%',
    m2lab: 'UV Life', m2val: '+20%',
    desc: 'Pond liners, landfill barriers, mining heap leach pads. HD-G-PE improves puncture and impact resistance during installation, while UV additive integration extends field life.',
  },
  {
    name: 'Injection Moulded Parts',
    process: 'Injection Moulding',
    m1lab: 'Flexural Modulus', m1val: '+18%',
    m2lab: 'Surface Finish', m2val: 'Improved',
    desc: 'Crates, pallets, automotive underbody parts, industrial containers. Improved rigidity allows weight reduction through redesign without strength compromise.',
  },
  {
    name: 'Blow Moulded Containers',
    process: 'Blow Moulding',
    m1lab: 'Top Load', m1val: '+22%',
    m2lab: 'Drop Impact', m2val: '+30%',
    desc: 'Jerry cans, chemical drums, IBC containers. HD-G-PE improves stacking strength and drop resistance \u2014 critical for transport and storage applications.',
  },
  {
    name: 'Gas Distribution Pipes',
    process: 'Extrusion (PE-100/PE-100 RC)',
    m1lab: 'Slow Crack', m1val: '+35%',
    m2lab: 'Rapid Crack', m2val: '+28%',
    desc: "Natural gas distribution PE-100 grade pipes. HD-G-PE's crack-arrest network directly improves SCG (slow crack growth) and RCP (rapid crack propagation) resistance \u2014 key pipe safety parameters.",
  },
]

const PROC_TABLE = [
  { process: 'Pipe Extrusion', temp: '180\u2013220\u00b0C', loading: '2%', notes: 'Standard screw' },
  { process: 'Blown Film', temp: '175\u2013200\u00b0C', loading: '1.5%', notes: 'Slight back-pressure increase' },
  { process: 'Cast Film', temp: '180\u2013210\u00b0C', loading: '1.5%', notes: 'Normal' },
  { process: 'Injection', temp: '200\u2013240\u00b0C', loading: '2%', notes: 'Normal cycle time' },
  { process: 'Blow Moulding', temp: '185\u2013220\u00b0C', loading: '1.5%', notes: 'Normal' },
  { process: 'Rotomoulding', temp: '180\u2013200\u00b0C', loading: '1%', notes: 'Longer sinter time' },
]

const LOADING_TABLE = [
  { gnp: '0.5%', tensile: '+18%', impact: '+20%', elong: '12\u00d7', cost: '1.0\u00d7', highlight: false },
  { gnp: '1.0%', tensile: '+25%', impact: '+28%', elong: '18\u00d7', cost: '1.4\u00d7', highlight: true },
  { gnp: '1.5%', tensile: '+28%', impact: '+30%', elong: '20\u00d7', cost: '1.8\u00d7', highlight: false },
  { gnp: '2.0%', tensile: '+30%', impact: '+32%', elong: '20\u00d7', cost: '2.2\u00d7', highlight: false },
]

export default function HdgpeApplications() {
  return (
    <div className="page catalog-page-dark page-break" style={{ display: 'flex', flexDirection: 'column', fontFamily: 'Inter, sans-serif', '--dark-bg-img': "url('/images/hd-g-pe-01.jpg')" }}>
      <PageHeader product="HD-G-PE" title="Applications & Processing Methods" pageNum="10" color={COLOR} dark />

      <div style={{ padding: '10px 20px 4px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
          {STATS.map(({ val, lab, icon: Icon }) => (
            <div key={lab} style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 12,
              padding: '8px 12px',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
            }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: `${COLOR}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon size={16} color={COLOR} />
              </div>
              <div>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 18, fontWeight: 700, color: COLOR, lineHeight: 1 }}>{val}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: '#9ca3af', marginTop: 2 }}>{lab}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ flex: 1, display: 'flex', gap: 0, padding: '10px 20px 8px 20px', overflow: 'hidden' }}>

        {/* Left */}
        <div style={{ flex: 1, paddingRight: 14, paddingTop: 2 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <Factory size={18} color={COLOR} />
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, fontWeight: 700, color: '#fff' }}>
              Processing Methods &amp; Industry Sectors
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {SECTORS.map((s) => (
              <div key={s.name} style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '10px 12px', background: 'rgba(255,255,255,0.03)', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 5 }}>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 11, fontWeight: 700, color: COLOR }}>{s.name}</div>
                  <div style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 3, padding: '1px 6px', fontFamily: 'Inter, sans-serif', fontSize: 8, color: '#9ca3af', flexShrink: 0 }}>{s.process}</div>
                </div>
                <div style={{ display: 'flex', gap: 10, marginBottom: 5 }}>
                  <div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: '#9ca3af' }}>{s.m1lab}</div>
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 12, fontWeight: 700, color: '#fff' }}>{s.m1val}</div>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: '#9ca3af' }}>{s.m2lab}</div>
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 12, fontWeight: 700, color: '#fff' }}>{s.m2val}</div>
                  </div>
                </div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: '#9ca3af', lineHeight: 1.55 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right sidebar */}
        <div style={{ width: '38%', borderLeft: '1px solid rgba(255,255,255,0.08)', paddingLeft: 14, paddingTop: 2, background: 'rgba(255,255,255,0.02)', display: 'flex', flexDirection: 'column', gap: 12 }}>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <Target size={16} color={COLOR} />
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 12, fontWeight: 700, color: '#fff' }}>Processing Compatibility</div>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  {['Process', 'Temp Range', 'Max Loading', 'Notes'].map(h => (
                    <th key={h} style={{ fontFamily: 'Inter, sans-serif', fontSize: 8, padding: '5px 7px', color: '#9ca3af', textAlign: 'left', fontWeight: 600 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {PROC_TABLE.map((r, i) => (
                  <tr key={r.process} style={{ borderBottom: i < PROC_TABLE.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                    <td style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, padding: '4px 7px', color: '#fff', fontWeight: 600 }}>{r.process}</td>
                    <td style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, padding: '4px 7px', color: '#9ca3af' }}>{r.temp}</td>
                    <td style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, padding: '4px 7px', textAlign: 'center', color: '#9ca3af' }}>{r.loading}</td>
                    <td style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, padding: '4px 7px', color: '#9ca3af' }}>{r.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <BarChart2 size={16} color={COLOR} />
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 12, fontWeight: 700, color: '#fff' }}>Loading vs Property Trade-off</div>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  {['GNP Loading', 'Tensile', 'Impact', 'Elongation', 'Cost Index'].map(h => (
                    <th key={h} style={{ fontFamily: 'Inter, sans-serif', fontSize: 8, padding: '5px 7px', color: '#9ca3af', textAlign: 'left', fontWeight: 600 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {LOADING_TABLE.map((r, i) => (
                  <tr key={r.gnp} style={{
                    background: r.highlight ? `${COLOR}10` : 'transparent',
                    borderLeft: r.highlight ? `3px solid ${COLOR}` : '3px solid transparent',
                    borderBottom: i < LOADING_TABLE.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                  }}>
                    <td style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, padding: '4px 7px', color: '#e5e7eb', fontWeight: r.highlight ? 700 : 400 }}>{r.gnp}</td>
                    <td style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, padding: '4px 7px', color: '#9ca3af' }}>{r.tensile}</td>
                    <td style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, padding: '4px 7px', color: '#9ca3af' }}>{r.impact}</td>
                    <td style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, padding: '4px 7px', color: '#9ca3af' }}>{r.elong}</td>
                    <td style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, padding: '4px 7px', color: '#9ca3af' }}>{r.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${COLOR}30`, borderRadius: 12, padding: '10px 12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: COLOR, lineHeight: 1.6 }}>
              Optimal loading for most pipe and film applications is 1\u20131.5%. Trial kit includes 5 loading levels with pre-cut dumbbell specimens for rapid ASTM D638 verification at your facility.
            </div>
          </div>

        </div>
      </div>

      <PageFooter color={COLOR} dark />
    </div>
  )
}

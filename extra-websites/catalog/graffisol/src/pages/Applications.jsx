import React from 'react'
import { Briefcase, PanelTop, Map, IndianRupee, Sun, Building2, Sprout, Anchor, CarFront, Factory, Compass, Leaf, ArrowRightCircle } from 'lucide-react'
import PageHeader from '../components/shared/PageHeader'
import PageFooter from '../components/shared/PageFooter'

const COLOR = '#f59e0b'

const STATS = [
  { val: '26+', lab: 'Live Projects', icon: Briefcase },
  { val: '150+ MW', lab: 'Panels Coated', icon: PanelTop },
  { val: '6', lab: 'Sectors Served', icon: Map },
  { val: '₹12 Cr+', lab: 'Revenue Generated', icon: IndianRupee },
]

const SECTORS = [
  {
    name: 'Utility-Scale Solar (>5 MW)',
    icon: Sun,
    type: 'Mono/Poly-PERC, Bifacial',
    metrics: { 'Yield Gain': '+10–13%', 'Soiling Reduction': '−35–40%' },
    desc: 'Large utility farms in Rajasthan, Gujarat, AP. Maximum ROI from GRAFFISOL given high GHI (>6 kWh/m²/day) and high dust loading. O&M contract model most viable.',
  },
  {
    name: 'Commercial Rooftop (100kW–5MW)',
    icon: Building2,
    type: 'Mono-PERC, TOPCon',
    metrics: { 'Yield Gain': '+9–11%', 'Cleaning Cost': '−60%' },
    desc: 'Industrial parks, malls, IT campuses. GRAFFISOL eliminates monthly cleaning cycles — critical where rooftop access is expensive or risky.',
  },
  {
    name: 'Agricultural Solar / Agri-PV',
    icon: Sprout,
    type: 'Bifacial raised',
    metrics: { 'Temp Reduction': '5–6°C', 'Yield Gain': '+10%' },
    desc: 'Elevated panels over crops. Low-maintenance requirement critical. GRAFFISOL reduces bird-dropping adhesion and dust accumulation in open-field environments.',
  },
  {
    name: 'Floating Solar',
    icon: Anchor,
    type: 'Mono-PERC on floats',
    metrics: { 'Soiling Reduction': '−45%', 'Algae Block': 'Yes' },
    desc: "GRAFFISOL's hydrophobic coating prevents algae and mineral deposit formation on floating structures. Particularly effective in humid, high-particulate inland water environments.",
  },
  {
    name: 'EV Charging Canopies',
    icon: CarFront,
    type: 'Standard modules',
    metrics: { 'Yield Gain': '+11%', 'Appearance': 'Premium' },
    desc: 'Urban/semi-urban canopy installations. High-visibility location makes self-cleaning and glass clarity commercially important to operators.',
  },
  {
    name: 'Heavy Industrial Rooftop',
    icon: Factory,
    type: 'Any Panel Type',
    metrics: { 'Soiling Reduction': '−50%', 'Yield Gain': '+13%' },
    desc: 'Highest soiling environments — near cement plants, quarries, highways. GRAFFISOL delivers greatest relative gains where baseline soiling losses are highest (15–25%).',
  },
]

const ENV_ROWS = [
  { env: 'Desert (Raj/Guj)', ghi: '6.5 kWh', soil: 'High', yield: '+12–13%', recoat: '4–5 yr', icon: Sun },
  { env: 'Tropical (South)', ghi: '5.5 kWh', soil: 'Moderate', yield: '+9–11%', recoat: '3–4 yr', icon: Leaf },
  { env: 'Coastal', ghi: '5.0 kWh', soil: 'Low-Mod', yield: '+9–10%', recoat: '3–4 yr', icon: Anchor },
  { env: 'Industrial Belt', ghi: '5.2 kWh', soil: 'Very High', yield: '+13%', recoat: '2–3 yr', icon: Factory },
]

const MOUNT_ROWS = [
  { type: 'Fixed Tilt', compat: 'Optimal', notes: 'Full benefit', color: '#10b981' },
  { type: 'Single-Axis Tracker', compat: 'Optimal', notes: 'Apply at flat position', color: '#10b981' },
  { type: 'Dual-Axis Tracker', compat: 'Optimal', notes: 'Apply at flat position', color: '#10b981' },
  { type: 'Floating Pontoon', compat: 'Pass', notes: 'Extended cure time', color: COLOR },
  { type: 'BIPV', compat: 'Pass', notes: 'Spray application only', color: COLOR },
]

export default function GraffisolApplications() {
  return (
    <div className="page catalog-page-dark page-break" style={{ display: 'flex', flexDirection: 'column', fontFamily: 'Inter, sans-serif', '--dark-bg-img': "url('/images/graffisol_lifecycle_site_result.png')" }}>
      <PageHeader product="GRAFFISOL" title="Applications & Deployment" pageNum="11" color={COLOR} dark />

      {/* Hero Stats */}
      <div style={{ display: 'flex', gap: 10, padding: '12px 24px 0 24px' }}>
        {STATS.map((s, i) => (
          <div key={i} style={{
            flex: 1,
            background: 'rgba(255,255,255,0.03)',
            border: `1px solid rgba(255,255,255,0.08)`,
            borderRadius: 12,
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
          }}>
            <div style={{ width: 42, height: 42, borderRadius: 10, background: `${COLOR}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <s.icon size={22} color={COLOR} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 20, fontWeight: 700, color: '#fff', lineHeight: 1 }}>{s.val}</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9.5, color: '#9ca3af', marginTop: 3 }}>{s.lab}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Main area */}
      <div style={{ flex: 1, display: 'flex', gap: 0, minHeight: 0, marginTop: 8 }}>

        {/* Left — sector cards */}
        <div style={{ flex: 1, padding: '4px 24px 20px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
             <Building2 size={18} color={COLOR} />
             <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, fontWeight: 700, color: '#fff', letterSpacing: 1, textTransform: 'uppercase' }}>
               Industry Applications
             </div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {SECTORS.map((s, i) => (
              <div key={i} style={{
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 10,
                padding: '10px 12px',
                background: 'rgba(255,255,255,0.02)',
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 6 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 28, height: 28, borderRadius: 6, background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <s.icon size={14} color={COLOR} />
                    </div>
                    <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: 12, fontWeight: 700, color: '#fff' }}>{s.name}</span>
                  </div>
                </div>
                
                <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 6, padding: '4px 8px', fontSize: 9, color: '#d1d5db', fontFamily: 'Inter', width: 'fit-content' }}>
                  {s.type}
                </div>

                <div style={{ display: 'flex', gap: 12, marginTop: 4 }}>
                  {Object.entries(s.metrics).map(([k, v]) => (
                    <div key={k} style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, color: '#9ca3af' }}>{k}</span>
                      <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, fontWeight: 700, color: COLOR, marginTop: 1 }}>{v}</span>
                    </div>
                  ))}
                </div>
                
                <div style={{ background: 'rgba(255,255,255,0.03)', height: 1, margin: '4px 0' }} />
                
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 9.5, color: '#9ca3af', margin: 0, lineHeight: 1.55 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right sidebar */}
        <div style={{
          width: '38%',
          borderLeft: '1px solid rgba(255,255,255,0.08)',
          padding: '4px 24px 20px 16px',
          background: 'rgba(255,255,255,0.015)',
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}>
          <div>
             <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
               <Compass size={18} color={COLOR} />
               <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, fontWeight: 700, color: '#fff', letterSpacing: 1, textTransform: 'uppercase' }}>
                 Environment Performance
               </div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, overflow: 'hidden' }}>
              <table style={{ borderCollapse: 'collapse', width: '100%', fontFamily: 'Inter, sans-serif', fontSize: 9 }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                    <th style={{ padding: '8px 10px', textAlign: 'left', fontWeight: 600, color: '#9ca3af' }}>Environment</th>
                    <th style={{ padding: '8px 10px', textAlign: 'center', fontWeight: 600, color: '#9ca3af' }}>GHI</th>
                    <th style={{ padding: '8px 10px', textAlign: 'center', fontWeight: 600, color: '#9ca3af' }}>Gain</th>
                    <th style={{ padding: '8px 10px', textAlign: 'center', fontWeight: 600, color: '#9ca3af' }}>Recoat</th>
                  </tr>
                </thead>
                <tbody>
                  {ENV_ROWS.map((row, i) => (
                    <tr key={i} style={{ borderBottom: i < ENV_ROWS.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                      <td style={{ padding: '10px 10px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#e5e7eb', fontWeight: 600 }}>
                          <row.icon size={12} color={COLOR} /> {row.env}
                        </div>
                      </td>
                      <td style={{ padding: '10px 10px', textAlign: 'center', color: '#cbd5e1' }}>{row.ghi}</td>
                      <td style={{ padding: '10px 10px', textAlign: 'center', color: COLOR, fontWeight: 700 }}>{row.yield}</td>
                      <td style={{ padding: '10px 10px', textAlign: 'center', color: '#cbd5e1' }}>{row.recoat}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
             <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
               <PanelTop size={18} color={COLOR} />
               <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, fontWeight: 700, color: '#fff', letterSpacing: 1, textTransform: 'uppercase' }}>
                 Mounting Compatibility
               </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {MOUNT_ROWS.map((row, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 8, padding: '10px 12px' }}>
                  <div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 600, color: '#e5e7eb' }}>{row.type}</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, color: '#9ca3af', marginTop: 2 }}>{row.notes}</div>
                  </div>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 10, fontWeight: 700, color: row.color, background: `${row.color}15`, padding: '3px 8px', borderRadius: 12 }}>
                    {row.compat}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            background: `linear-gradient(to right, ${COLOR}20, ${COLOR}05)`,
            border: `1px solid ${COLOR}40`,
            borderRadius: 12,
            padding: '14px 16px',
            display: 'flex',
            gap: 12,
            alignItems: 'center',
            marginTop: 16,
          }}>
            <ArrowRightCircle size={24} color={COLOR} />
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9.5, color: '#e5e7eb', lineHeight: 1.5 }}>
              <span style={{ color: COLOR, fontWeight: 700 }}>Universal Compatibility:</span> GRAFFISOL supports all major module manufacturers and does not void warranty. Application can be done during planned O&M without panel removal.
            </div>
          </div>
        </div>
      </div>

      <PageFooter color={COLOR} dark />
    </div>
  )
}

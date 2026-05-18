import React from 'react'

const C = '#f59e0b'

const locations = [
  { city: 'Jodhpur', state: 'Rajasthan',    projects: 8,  type: 'Utility-scale',   mw: 42 },
  { city: 'Kutch', state: 'Gujarat',        projects: 6,  type: 'Utility-scale',   mw: 35 },
  { city: 'Anantapur', state: 'Andhra Pradesh', projects: 5, type: 'Utility-scale', mw: 28 },
  { city: 'Pavagada', state: 'Karnataka',   projects: 3,  type: 'Utility-scale',   mw: 20 },
  { city: 'Bangalore', state: 'Karnataka',  projects: 4,  type: 'Commercial roof', mw: 8 },
  { city: 'Dubai', state: 'UAE',            projects: 2,  type: 'International',   mw: 17 },
]

const totalMW = locations.reduce((s, l) => s + l.mw, 0)
const totalProjects = locations.reduce((s, l) => s + l.projects, 0)

export default function SolDeployment() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>GRAFFISOL · Field Presence</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>DEPLOYMENT IMPACT</div>
        <div style={{ color: '#64748b', fontSize: 13, marginTop: 4 }}>Real-world validation across India & beyond · Commercial and utility-scale solar</div>
      </div>

      {/* Top 4 stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 28 }}>
        {[
          { val: '26+', label: 'Active Projects' },
          { val: '150+ MW', label: 'Coated Capacity' },
          { val: '6', label: 'States & Countries' },
          { val: '18+', label: 'Partner Companies' },
        ].map((s, i) => (
          <div key={i} style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: 12, padding: 22, textAlign: 'center' }}>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff' }}>{s.val}</div>
            <div style={{ color: C, fontSize: 10, letterSpacing: 1, textTransform: 'uppercase', marginTop: 6 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Location table */}
      <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: 12, padding: 24, marginBottom: 16 }}>
        <div style={{ color: '#64748b', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>Deployment Locations</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
          {locations.map((l, i) => {
            const barPct = (l.mw / 50) * 100
            return (
              <div key={i} style={{ background: '#0d0d0d', borderRadius: 8, padding: 14, border: l.state === 'UAE' ? `1px solid ${C}44` : '1px solid #1a1a1a' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                  <div>
                    <div style={{ color: '#e2e8f0', fontSize: 13, fontWeight: 700 }}>{l.city}</div>
                    <div style={{ color: l.state === 'UAE' ? C : '#475569', fontSize: 10 }}>{l.state}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 20, fontWeight: 700, color: C }}>{l.mw} MW</div>
                    <div style={{ color: '#475569', fontSize: 9 }}>{l.projects} projects</div>
                  </div>
                </div>
                <div style={{ height: 4, background: '#1a1a1a', borderRadius: 2, overflow: 'hidden' }}>
                  <div style={{ width: `${barPct}%`, height: '100%', background: C, borderRadius: 2 }} />
                </div>
                <div style={{ color: '#475569', fontSize: 10, marginTop: 6 }}>{l.type}</div>
              </div>
            )
          })}
        </div>
        <div style={{ marginTop: 16, padding: '12px 16px', background: '#0d1520', border: '1px solid #1e3a5f', borderRadius: 8, display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ color: '#60a5fa', fontSize: 13, fontWeight: 700 }}>TOTAL: {totalProjects} projects · {totalMW}+ MW coated · 96% meet performance targets</span>
          <span style={{ color: '#475569', fontSize: 11 }}>10M+ data points collected</span>
        </div>
      </div>

      <div style={{ textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · GRAFFISOL · FIELD DEPLOYMENT</div>
    </div>
  )
}

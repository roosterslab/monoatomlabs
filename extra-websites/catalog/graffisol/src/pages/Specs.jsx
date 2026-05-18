import React from 'react'
import { Zap, ThermometerSnowflake, Droplets, Target, MapPin, Maximize, Clock, ShieldCheck, Sun, Layers, Compass } from 'lucide-react'
import PageHeader from '../components/shared/PageHeader'
import PageFooter from '../components/shared/PageFooter'

const COLOR = '#f59e0b'

const PERF_TABLE = [
  { system: 'Morning (low angle)', powerGain: '+33%', tempReduction: '5–6°C', soilingRed: '35%', contactAngle: '>110°', notes: 'Third-party certified field test' },
  { system: 'Afternoon (peak)', powerGain: '+10%', tempReduction: '5–6°C', soilingRed: '30%', contactAngle: '>110°', notes: 'Third-party certified field test' },
  { system: 'Evening (low angle)', powerGain: '+20%', tempReduction: '5°C', soilingRed: '32%', contactAngle: '>110°', notes: 'Third-party certified field test' },
  { system: 'Annual Average (field)', powerGain: '+10–25%', tempReduction: '5–6°C', soilingRed: '30–40%', contactAngle: '>110°', notes: '50-week validated data' },
]

const REGIONAL_SOILING = [
  { region: 'Rajasthan (Desert)', soilingLoss: '15–22%/yr', coatGain: '+11.5%', netGain: '+9%' },
  { region: 'Gujarat (Coastal)', soilingLoss: '8–12%/yr', coatGain: '+10.5%', netGain: '+9%' },
  { region: 'Andhra Pradesh', soilingLoss: '10–18%/yr', coatGain: '+11%', netGain: '+9.5%' },
  { region: 'Telangana', soilingLoss: '9–15%/yr', coatGain: '+10%', netGain: '+8.5%' },
]

const APP_SPECS = [
  { label: 'Application Method', value: 'Spray coating + thermal curing', icon: Maximize },
  { label: 'Coating Thickness', value: '~100 nm (SEM measured)', icon: Layers },
  { label: 'Coverage Rate', value: '40–50 ml / 250W panel', icon: Droplets },
  { label: 'Frequency', value: 'Annual (recommended)', icon: Clock },
  { label: 'Adhesion Test', value: '5B — ASTM D3359 (cross-cut)', icon: Target },
  { label: 'Weathering Test', value: 'QUV 500h accelerated pass', icon: Sun },
  { label: 'Compatibility', value: 'All mono/polycrystalline panels', icon: Compass },
  { label: 'Validation', value: 'Third-Party NABL Accredited Lab', icon: ShieldCheck },
]

export default function GraffisolSpecs() {
  return (
    <div className="page catalog-page-dark page-break" style={{ display: 'flex', flexDirection: 'column', '--dark-bg-img': "url('/images/graffisol-02.png')" }}>
      <PageHeader product="GRAFFISOL" title="Technical Specifications" pageNum="9" color={COLOR} dark />

      <div style={{ flex: 1, display: 'flex', gap: 0, minHeight: 0 }}>
        {/* Left — performance table */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '20px 24px', gap: 20 }}>
          
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '16px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <Zap size={18} color={COLOR} />
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, fontWeight: 700, color: '#fff', letterSpacing: 1, textTransform: 'uppercase' }}>
                Technical Performance by System Type
              </div>
            </div>
            
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Inter, sans-serif', fontSize: 10 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <th style={{ padding: '8px 8px', textAlign: 'left', fontWeight: 600, color: '#9ca3af' }}>System Type</th>
                  <th style={{ padding: '8px 8px', textAlign: 'center', fontWeight: 600, color: '#9ca3af' }}>Power Gain</th>
                  <th style={{ padding: '8px 8px', textAlign: 'center', fontWeight: 600, color: '#9ca3af' }}>Temp ↓</th>
                  <th style={{ padding: '8px 8px', textAlign: 'center', fontWeight: 600, color: '#9ca3af' }}>Soiling ↓</th>
                  <th style={{ padding: '8px 8px', textAlign: 'center', fontWeight: 600, color: '#9ca3af' }}>Contact Angle</th>
                  <th style={{ padding: '8px 8px', textAlign: 'left', fontWeight: 600, color: '#9ca3af' }}>Notes</th>
                </tr>
              </thead>
              <tbody>
                {PERF_TABLE.map((row, i) => (
                  <tr key={i} style={{ borderBottom: i < PERF_TABLE.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                    <td style={{ padding: '10px 8px', fontWeight: 600, color: '#fff' }}>{row.system}</td>
                    <td style={{ padding: '10px 8px', textAlign: 'center', color: COLOR, fontWeight: 700 }}>{row.powerGain}</td>
                    <td style={{ padding: '10px 8px', textAlign: 'center', color: '#e5e7eb' }}>{row.tempReduction}</td>
                    <td style={{ padding: '10px 8px', textAlign: 'center', color: '#e5e7eb' }}>{row.soilingRed}</td>
                    <td style={{ padding: '10px 8px', textAlign: 'center', color: '#9ca3af' }}>{row.contactAngle}</td>
                    <td style={{ padding: '10px 8px', color: '#9ca3af', fontSize: 9 }}>{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '16px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <MapPin size={18} color={COLOR} />
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, fontWeight: 700, color: '#fff', letterSpacing: 1, textTransform: 'uppercase' }}>
                Regional Soiling Data (India)
              </div>
            </div>
            
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Inter, sans-serif', fontSize: 10 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <th style={{ padding: '8px 8px', textAlign: 'left', fontWeight: 600, color: '#9ca3af' }}>Region</th>
                  <th style={{ padding: '8px 8px', textAlign: 'center', fontWeight: 600, color: '#9ca3af' }}>Soiling Loss/yr</th>
                  <th style={{ padding: '8px 8px', textAlign: 'center', fontWeight: 600, color: '#9ca3af' }}>GRAFFISOL Power Gain</th>
                  <th style={{ padding: '8px 8px', textAlign: 'center', fontWeight: 600, color: '#9ca3af' }}>Net Annual Gain</th>
                </tr>
              </thead>
              <tbody>
                {REGIONAL_SOILING.map((row, i) => (
                  <tr key={i} style={{ borderBottom: i < REGIONAL_SOILING.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                    <td style={{ padding: '10px 8px', fontWeight: 500, color: '#e5e7eb' }}>{row.region}</td>
                    <td style={{ padding: '10px 8px', textAlign: 'center', color: '#9ca3af' }}>{row.soilingLoss}</td>
                    <td style={{ padding: '10px 8px', textAlign: 'center', color: COLOR, fontWeight: 700 }}>{row.coatGain}</td>
                    <td style={{ padding: '10px 8px', textAlign: 'center' }}>
                      <span style={{ background: 'rgba(52,211,153,0.15)', border: '1px solid rgba(52,211,153,0.3)', color: '#6ee7b7', padding: '3px 8px', borderRadius: 12, fontSize: 9, fontWeight: 700 }}>{row.netGain}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div style={{ display: 'flex', gap: 12 }}>
            <div style={{ flex: 1, background: `linear-gradient(to right, rgba(245,158,11,0.1), rgba(245,158,11,0.02))`, border: `1px solid ${COLOR}40`, borderRadius: 12, padding: '14px', display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, background: COLOR, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <ShieldCheck size={24} color="#000" />
              </div>
              <div>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, fontWeight: 700, color: '#fff', letterSpacing: 1, textTransform: 'uppercase' }}>NABL Accredited</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9.5, color: '#d1d5db', marginTop: 2 }}>Third-Party Independent Validation</div>
              </div>
            </div>
            <div style={{ flex: 1, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: '14px', display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <ThermometerSnowflake size={24} color={COLOR} />
              </div>
              <div>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, fontWeight: 700, color: '#fff', letterSpacing: 1, textTransform: 'uppercase' }}>5–6°C Cooler</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9.5, color: '#d1d5db', marginTop: 2 }}>Significantly Reduced Thermal Stress</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right — application specs */}
        <div style={{
          width: '38%', borderLeft: '1px solid rgba(255,255,255,0.08)',
          padding: '20px', display: 'flex', flexDirection: 'column', gap: 18,
          background: 'rgba(255,255,255,0.02)',
        }}>
          <div>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, fontWeight: 700, color: '#fff', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 12 }}>
              Application Specifications
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {APP_SPECS.map((spec, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 12, padding: '8px 12px',
                  background: 'rgba(255,255,255,0.04)', borderRadius: 8, border: '1px solid rgba(255,255,255,0.05)'
                }}>
                  <spec.icon size={16} color={COLOR} />
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: 0.5 }}>{spec.label}</span>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 10.5, color: '#f3f4f6', fontWeight: 600, marginTop: 1 }}>{spec.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '16px',
            marginTop: 16
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
              <Layers size={16} color={COLOR} />
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 12, fontWeight: 700, color: '#fff', letterSpacing: 1, textTransform: 'uppercase' }}>
                Performance Mechanism
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { label: 'Anti-Reflective Layer', pct: 70, note: '+7–8% light absorption' },
                { label: 'Hydrophobic Barrier', pct: 30, note: '+3–4% soiling reduction gain' },
              ].map(item => (
                <div key={item.label}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 9.5, color: '#e5e7eb', fontWeight: 600 }}>{item.label}</span>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 9.5, color: '#9ca3af' }}>{item.note}</span>
                  </div>
                  <div style={{ height: 6, background: 'rgba(255,255,255,0.08)', borderRadius: 3, overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${item.pct}%`, background: COLOR, borderRadius: 3 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <PageFooter color={COLOR} dark />
    </div>
  )
}

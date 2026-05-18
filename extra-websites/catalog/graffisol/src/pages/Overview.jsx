import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Zap, ThermometerSun, Droplets, Layers, ShieldCheck, Sun, CheckCircle } from 'lucide-react'
import PageHeader from '../components/shared/PageHeader'
import PageFooter from '../components/shared/PageFooter'

const COLOR = '#f59e0b'

const METRICS = [
  { value: '+10–25%', label: 'Power Output Gain', sub: 'Third-Party Lab Certified', icon: Zap },
  { value: '5–6°C', label: 'Temp Reduction', sub: 'Module Temperature', icon: ThermometerSun },
  { value: '30–40%', label: 'Soiling Reduction', sub: 'Anti-Dust Effect', icon: Droplets },
  { value: '~100 nm', label: 'Coating Thickness', sub: 'SEM Measured', icon: Layers },
]

const DIFFERENTIATORS = [
  { title: 'Third-Party Lab Certified', desc: 'Power gain of 10–25% independently validated by a third-party NABL-accredited lab. 50-week field study confirms consistent gains across all seasons and sun angles.', icon: ShieldCheck },
  { title: 'Strongest at Low Sun Angles', desc: 'Morning ~33% gain, Evening ~20% gain — the coating maximises energy harvest precisely when uncoated panels lose the most to reflection and soiling.', icon: Sun },
  { title: '20-Year Panel Compatibility', desc: 'Chemically inert ~100 nm coating does not affect panel warranties. Annual reapplication maintains gains throughout the system lifetime.', icon: CheckCircle },
]

const CHART_DATA = [
  { time: '06:00', gain: 33 },
  { time: '09:00', gain: 21 },
  { time: '12:00', gain: 10 },
  { time: '15:00', gain: 15 },
  { time: '18:00', gain: 20 },
]

export default function GraffisolOverview() {
  return (
    <div className="page catalog-page-light page-break" style={{ display: 'flex', flexDirection: 'column', '--light-bg-img': "url('/images/graffisol_lifecycle_lab_making.png')" }}>
      <PageHeader product="GRAFFISOL" title="Product Overview" pageNum="8" color={COLOR} />

      <div style={{ flex: 1, display: 'flex', gap: 0, minHeight: 0 }}>
        {/* Left column — product image */}
        <div style={{
          width: '42%',
          borderRight: '1px solid #e5e7eb',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: '20px 20px',
          background: '#f8fafc',
          gap: 16,
        }}>
          <div style={{ width: '100%', borderRadius: 12, overflow: 'hidden', border: `1px solid ${COLOR}22`, flexShrink: 0, boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <img
              src="/images/graffisol-01.jpg"
              alt="GRAFFISOL"
              style={{ width: '100%', height: '170px', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: 26,
              fontWeight: 700,
              color: COLOR,
              letterSpacing: 3,
              textTransform: 'uppercase',
              lineHeight: 1,
            }}>GRAFFISOL</div>
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 12,
              color: '#6b7280',
              marginTop: 4,
              letterSpacing: 0.5,
            }}>Graphene Solar Enhancement Coating</div>
          </div>
          
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
            {[{ label: '26+ Projects', icon: ShieldCheck }, { label: 'Any Panel Brand', icon: Layers }, { label: 'Annual Apply', icon: CheckCircle }].map(badge => (
              <div key={badge.label} style={{
                display: 'inline-flex', alignItems: 'center', gap: 4,
                background: `#ffffff`, border: `1px solid #e5e7eb`,
                borderRadius: 8, padding: '5px 10px',
                boxShadow: '0 1px 2px 0 rgba(0,0,0,0.05)',
              }}>
                <badge.icon size={12} color={COLOR} />
                <span style={{ fontSize: 9, color: '#374151', fontWeight: 600, letterSpacing: 0.5, fontFamily: 'Inter, sans-serif' }}>{badge.label}</span>
              </div>
            ))}
          </div>
          
          {/* Interactive Recharts Graph */}
          <div style={{ width: '100%', borderRadius: 12, padding: '14px 14px 6px 14px', background: '#ffffff', border: `1px solid #e5e7eb`, display: 'flex', flexDirection: 'column', gap: 4, boxShadow: '0 4px 12px -2px rgba(0,0,0,0.05)', marginTop: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: 11, fontWeight: 700, color: '#111827', textTransform: 'uppercase', letterSpacing: 1 }}>Generation Gain Curve</span>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: '#6b7280', background: '#f1f5f9', padding: '2px 6px', borderRadius: 4 }}>50-Week Avg</span>
            </div>
            
            <div style={{ height: 100, width: '100%', marginTop: 2 }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={CHART_DATA} margin={{ top: 5, right: 0, left: -25, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorGain" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={COLOR} stopOpacity={0.4}/>
                      <stop offset="95%" stopColor={COLOR} stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="time" tick={{fontSize: 8, fill: '#6b7280', fontFamily: 'Inter'}} axisLine={false} tickLine={false} />
                  <YAxis tick={{fontSize: 8, fill: '#6b7280', fontFamily: 'Inter'}} axisLine={false} tickLine={false} tickFormatter={(val) => `+${val}%`} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', fontSize: '10px', padding: '6px 10px', fontFamily: 'Inter', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}
                    formatter={(value) => [`+${value}%`, 'Power Gain']}
                    labelStyle={{ display: 'none' }}
                  />
                  <Area type="monotone" dataKey="gain" stroke={COLOR} fillOpacity={1} fill="url(#colorGain)" strokeWidth={2.5} activeDot={{ r: 5, stroke: '#fff', strokeWidth: 2 }} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '20px 24px', gap: 18 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
            {METRICS.map((m, i) => (
              <div key={m.label} style={{
                background: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: 12,
                padding: '12px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                boxShadow: '0 2px 4px -1px rgba(0,0,0,0.03)',
              }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: `${COLOR}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <m.icon size={18} color={COLOR} />
                </div>
                <div>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 16, fontWeight: 700, color: '#111827', lineHeight: 1 }}>{m.value}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9.5, fontWeight: 600, color: COLOR, marginTop: 3 }}>{m.label}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, color: '#6b7280', marginTop: 1 }}>{m.sub}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: '#f8fafc', padding: '16px', borderRadius: 12, border: '1px solid #e5e7eb' }}>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, fontWeight: 700, color: '#111827', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 6 }}>About the Product</div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 10.5, color: '#4b5563', lineHeight: 1.6, margin: 0 }}>
              GRAFFISOL is a graphene-based nano-coating applied to the surface of photovoltaic solar panels to
              simultaneously increase light absorption and repel dust and moisture. Independently validated at
              an NABL-accredited lab: power gain of 10–25%, with peak improvements of ~33% in the morning and
              ~20% in the evening when sun angles are low. A 50-week field study confirms consistent gains
              across seasons. The ~100 nm coating (SEM measured) passes ASTM D3359 adhesion and QUV 500-hour
              accelerated weathering — delivering documented, certified generation gains on any mono or
              polycrystalline panel.
            </p>
          </div>

          <div>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, fontWeight: 700, color: '#111827', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 10 }}>Key Differentiators</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {DIFFERENTIATORS.map((d, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', background: '#ffffff', padding: '12px 14px', borderRadius: 12, border: '1px solid #e5e7eb', boxShadow: '0 2px 4px -1px rgba(0,0,0,0.02)' }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: 8,
                    background: COLOR,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <d.icon size={16} color="#ffffff" />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 700, color: '#111827' }}>{d.title}</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9.5, color: '#6b7280', lineHeight: 1.5, marginTop: 3 }}>{d.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <PageFooter color={COLOR} />
    </div>
  )
}

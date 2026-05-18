import React from 'react'
import { Zap, Layers, Target, ShieldCheck, Wrench, Package } from 'lucide-react'
import PageHeader from '../components/shared/PageHeader'
import PageFooter from '../components/shared/PageFooter'

const COLOR = '#06b6d4'

const MECH_PROPS = [
  { property: 'Tensile Strength (MPa)', standard: '22–26', hdgpe: '30–34', gain: '+30%', std: 'ASTM D638' },
  { property: 'Flexural Modulus (MPa)', standard: '900–1100', hdgpe: '1200–1400', gain: '+27%', std: 'ASTM D790' },
  { property: 'Izod Impact (J/m)', standard: '50–80', hdgpe: '90–130', gain: '+60%', std: 'ASTM D256' },
  { property: 'Elongation at Break (%)', standard: '300–500', hdgpe: '350–600', gain: '+20%', std: 'ASTM D638' },
  { property: 'Shore D Hardness', standard: '60–65', hdgpe: '65–70', gain: '+8%', std: 'ASTM D2240' },
  { property: 'Wear Resistance', standard: 'Baseline', hdgpe: '20× better', gain: '20×', std: 'Taber CS-17' },
  { property: 'Moisture Vapor Transmission', standard: 'Baseline', hdgpe: '–25% MVTR', gain: '–25%', std: 'ASTM E96' },
]

const PROCESSING = [
  { method: 'Extrusion (Pipes/Profiles)', compatible: true, dosage: '0.5–1.5%', note: 'Maintains MFI, improved burst pressure' },
  { method: 'Injection Molding', compatible: true, dosage: '0.5–2.0%', note: 'No mold changes, better fill flow' },
  { method: 'Blow Molding (Bottles)', compatible: true, dosage: '0.5–1.0%', note: 'Improved drop impact resistance' },
  { method: 'Film Blowing', compatible: true, dosage: '0.5–1.0%', note: 'Enhanced barrier & tensile' },
  { method: 'Rotomolding', compatible: true, dosage: '0.5–1.5%', note: 'Requires pre-blend check' },
  { method: 'Compression Molding', compatible: true, dosage: '1.0–2.0%', note: 'Higher loadings possible' },
]

const DOSAGE_GUIDE = [
  { dosage: '0.5%', tensileGain: '+15%', impactGain: '+25%', application: 'Film, packaging, light-duty' },
  { dosage: '1.0%', tensileGain: '+25%', impactGain: '+45%', application: 'Pipes, general molding' },
  { dosage: '1.5%', tensileGain: '+30%', impactGain: '+60%', application: 'Pressure pipes, structural' },
  { dosage: '2.0%', tensileGain: '+32%', impactGain: '+70%', application: 'High-perf engineering parts' },
]

export default function HdgpeSpecs() {
  return (
    <div className="page catalog-page-dark page-break" style={{ display: 'flex', flexDirection: 'column', '--dark-bg-img': "url('/images/hd-g-pe-01.jpg')" }}>
      <PageHeader product="HD-G-PE" title="Technical Specifications" pageNum="12" color={COLOR} dark />

      <div style={{ flex: 1, display: 'flex', gap: 0, minHeight: 0 }}>
        {/* Left — mechanical properties */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '16px 18px', gap: 14 }}>
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '14px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <Zap size={18} color={COLOR} />
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, fontWeight: 700, color: '#fff', letterSpacing: 1, textTransform: 'uppercase' }}>
                Mechanical Properties — Standard HDPE vs HD-G-PE
              </div>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Inter, sans-serif', fontSize: 10 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <th style={{ padding: '6px 8px', textAlign: 'left', fontWeight: 600, color: '#9ca3af' }}>Property</th>
                  <th style={{ padding: '6px 8px', textAlign: 'center', fontWeight: 600, color: '#9ca3af' }}>Std HDPE</th>
                  <th style={{ padding: '6px 8px', textAlign: 'center', fontWeight: 600, color: '#9ca3af' }}>HD-G-PE</th>
                  <th style={{ padding: '6px 8px', textAlign: 'center', fontWeight: 600, color: '#9ca3af' }}>Gain</th>
                  <th style={{ padding: '6px 8px', textAlign: 'center', fontWeight: 600, color: '#9ca3af' }}>Test Std</th>
                </tr>
              </thead>
              <tbody>
                {MECH_PROPS.map((row, i) => (
                  <tr key={i} style={{ borderBottom: i < MECH_PROPS.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                    <td style={{ padding: '5px 8px', color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>{row.property}</td>
                    <td style={{ padding: '5px 8px', textAlign: 'center', color: '#9ca3af' }}>{row.standard}</td>
                    <td style={{ padding: '5px 8px', textAlign: 'center', color: COLOR, fontWeight: 700 }}>{row.hdgpe}</td>
                    <td style={{ padding: '5px 8px', textAlign: 'center' }}>
                      <span style={{ background: 'rgba(52,211,153,0.15)', border: '1px solid rgba(52,211,153,0.3)', color: '#6ee7b7', padding: '3px 8px', borderRadius: 12, fontSize: 9, fontWeight: 700 }}>{row.gain}</span>
                    </td>
                    <td style={{ padding: '5px 8px', textAlign: 'center', color: '#9ca3af', fontSize: 8.5 }}>{row.std}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Dosage guide */}
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '14px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <Target size={18} color={COLOR} />
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, fontWeight: 700, color: '#fff', letterSpacing: 1, textTransform: 'uppercase' }}>
                Dosage Guide
              </div>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Inter, sans-serif', fontSize: 10 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <th style={{ padding: '5px 8px', textAlign: 'center', fontWeight: 600, color: '#9ca3af' }}>Dosage</th>
                  <th style={{ padding: '5px 8px', textAlign: 'center', fontWeight: 600, color: '#9ca3af' }}>Tensile Gain</th>
                  <th style={{ padding: '5px 8px', textAlign: 'center', fontWeight: 600, color: '#9ca3af' }}>Impact Gain</th>
                  <th style={{ padding: '5px 8px', textAlign: 'left', fontWeight: 600, color: '#9ca3af' }}>Recommended Application</th>
                </tr>
              </thead>
              <tbody>
                {DOSAGE_GUIDE.map((row, i) => (
                  <tr key={i} style={{ borderBottom: i < DOSAGE_GUIDE.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                    <td style={{ padding: '5px 8px', textAlign: 'center', fontWeight: 700, color: COLOR }}>{row.dosage}</td>
                    <td style={{ padding: '5px 8px', textAlign: 'center', color: '#e5e7eb' }}>{row.tensileGain}</td>
                    <td style={{ padding: '5px 8px', textAlign: 'center', color: '#e5e7eb' }}>{row.impactGain}</td>
                    <td style={{ padding: '5px 8px', color: '#9ca3af', fontSize: 9 }}>{row.application}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right — processing compatibility */}
        <div style={{
          width: '35%', borderLeft: '1px solid rgba(255,255,255,0.08)',
          padding: '16px', display: 'flex', flexDirection: 'column', gap: 14,
          background: 'rgba(255,255,255,0.02)',
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <Wrench size={18} color={COLOR} />
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, fontWeight: 700, color: '#fff', letterSpacing: 1, textTransform: 'uppercase' }}>
                Processing Compatibility
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0, border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, overflow: 'hidden' }}>
              {PROCESSING.map((row, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'flex-start', padding: '7px 10px', gap: 8,
                  background: 'rgba(255,255,255,0.03)',
                  borderBottom: i < PROCESSING.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                }}>
                  <span style={{
                    width: 16, height: 16, borderRadius: '50%',
                    background: 'rgba(52,211,153,0.15)', color: '#6ee7b7',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, fontSize: 8, fontWeight: 700, marginTop: 1,
                  }}>✓</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 600, color: 'rgba(255,255,255,0.85)' }}>{row.method}</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: '#9ca3af', marginTop: 1 }}>{row.note}</div>
                  </div>
                  <span style={{
                    fontFamily: 'Outfit, sans-serif', fontSize: 9, color: COLOR, fontWeight: 700,
                    background: `${COLOR}18`, border: `1px solid ${COLOR}30`,
                    borderRadius: 3, padding: '1px 6px', flexShrink: 0, marginTop: 1,
                  }}>{row.dosage}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <Package size={16} color={COLOR} />
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 11, fontWeight: 700, color: '#fff', letterSpacing: 1, textTransform: 'uppercase' }}>
                Masterbatch Specs
              </div>
            </div>
            {[
              ['Carrier Resin', 'HDPE (compatible)'],
              ['Graphene Content', '5% in masterbatch'],
              ['Form', 'Pellets (3–5 mm)'],
              ['MFI', '0.3–1.0 g/10min'],
              ['Let-Down Ratio', '10:1 to 200:1'],
              ['Shelf Life', '24 months sealed'],
            ].map(([k, v], i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: i < 5 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 9.5, color: '#9ca3af' }}>{k}</span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 9.5, color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>{v}</span>
              </div>
            ))}
          </div>

          <div style={{ flex: 1, background: `linear-gradient(to right, rgba(6,182,212,0.1), rgba(6,182,212,0.02))`, border: `1px solid ${COLOR}40`, borderRadius: 12, padding: '14px', display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 44, height: 44, borderRadius: 10, background: COLOR, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <ShieldCheck size={24} color="#000" />
            </div>
            <div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, fontWeight: 700, color: '#fff', letterSpacing: 1, textTransform: 'uppercase' }}>FSSAI Compliant</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9.5, color: '#d1d5db', marginTop: 2 }}>IS 7328 Potable Water Pipe Certified</div>
            </div>
          </div>
        </div>
      </div>

      <PageFooter color={COLOR} dark />
    </div>
  )
}

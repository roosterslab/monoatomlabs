import React from 'react'
import { Sun, Thermometer, Droplets, Zap } from 'lucide-react'
import Logo from '../../../brand/Logo'
import SurfaceBg from '../../../studio/SurfaceBg'

const BOX = { face: 5.2, side: 2.13, total: 15.567, height: 6.65 }
const TAB_W = BOX.total - 2 * BOX.face - 2 * BOX.side  // 0.907"

const C = '#f59e0b'
const DEFAULT_SURF = { time: 3200, bg: 'wave' }

// Solar panel hex grid overlay
function SolarHexOverlay({ width, height, scale }) {
  const hexSize = 18 * scale
  const cols = Math.ceil(width / (hexSize * 1.732)) + 2
  const rows = Math.ceil(height / (hexSize * 1.5)) + 2

  const hexes = []
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const xOffset = (r % 2) * (hexSize * 0.866)
      const cx = c * (hexSize * 1.732) + xOffset
      const cy = r * (hexSize * 1.5)
      const pts = []
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 180) * (60 * i - 30)
        pts.push(`${cx + hexSize * 0.8 * Math.cos(angle)},${cy + hexSize * 0.8 * Math.sin(angle)}`)
      }
      hexes.push({ pts: pts.join(' '), cx, cy, op: Math.random() * 0.12 + 0.04 })
    }
  }

  return (
    <svg width={width} height={height} style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', zIndex: 1 }}>
      {hexes.map((h, i) => (
        <polygon key={i} points={h.pts} fill="none" stroke={C} strokeWidth={0.6 * scale} opacity={h.op} />
      ))}
    </svg>
  )
}

function FeatureItem({ icon: Icon, label, value, scale }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 * scale }}>
      <div style={{
        width: 32 * scale, height: 32 * scale, borderRadius: '50%',
        backgroundColor: `rgba(245, 158, 11, 0.1)`, border: `1px solid rgba(245, 158, 11, 0.3)`,
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
        <Icon size={16 * scale} color={C} strokeWidth={1.5} />
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ color: 'white', fontSize: 10 * scale, fontWeight: 700, fontFamily: "'Rajdhani', sans-serif", letterSpacing: '0.05em' }}>{value}</div>
        <div style={{ color: '#888', fontSize: 7 * scale, fontFamily: "'Inter', sans-serif", textTransform: 'uppercase' }}>{label}</div>
      </div>
    </div>
  )
}

export default function WrapPanel({ scale = 1, surfBack = DEFAULT_SURF, surfLeft = DEFAULT_SURF, surfFront = DEFAULT_SURF, surfRight = DEFAULT_SURF }) {
  const px = (i) => Math.round(i * 96 * scale)
  const W = px(BOX.total), H = px(BOX.height)
  const backW = px(BOX.face), side1W = px(BOX.side)
  const frontW = px(BOX.face), side2W = px(BOX.side), tabW = px(TAB_W)
  const DIVIDER = '1px solid rgba(255,255,255,0.08)'

  const fs = scale

  return (
    <div style={{ width: W, height: H, display: 'flex', backgroundColor: '#050505', overflow: 'hidden', flexShrink: 0, userSelect: 'none' }}>

      {/* BACK FACE */}
      <div style={{ width: backW, height: H, flexShrink: 0, position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', borderRight: DIVIDER }}>
        <SurfaceBg surf={surfBack} />
        <div style={{ position: 'relative', zIndex: 3, padding: 24 * fs, borderBottom: DIVIDER }}>
          <Logo size={20 * fs} theme="dark" />
        </div>
        <div style={{ position: 'relative', zIndex: 3, flex: 1, padding: 24 * fs, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 20 * fs }}>
          {/* Corner brackets */}
          <div style={{ position: 'absolute', top: 20 * fs, left: 20 * fs, width: 10 * fs, height: 10 * fs, borderTop: `2px solid ${C}`, borderLeft: `2px solid ${C}` }} />
          <div style={{ position: 'absolute', top: 20 * fs, right: 20 * fs, width: 10 * fs, height: 10 * fs, borderTop: `2px solid ${C}`, borderRight: `2px solid ${C}` }} />
          <div style={{ position: 'absolute', bottom: 20 * fs, left: 20 * fs, width: 10 * fs, height: 10 * fs, borderBottom: `2px solid ${C}`, borderLeft: `2px solid ${C}` }} />
          <div style={{ position: 'absolute', bottom: 20 * fs, right: 20 * fs, width: 10 * fs, height: 10 * fs, borderBottom: `2px solid ${C}`, borderRight: `2px solid ${C}` }} />
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 * fs, marginBottom: 20 * fs, borderBottom: '1px solid #333', paddingBottom: 10 * fs }}>
              <Sun size={16 * fs} color={C} strokeWidth={2.5} />
              <h4 style={{ color: '#fff', fontSize: 14 * fs, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: "'Rajdhani', sans-serif", margin: 0 }}>Solar Enhancement Data</h4>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 12 * fs }}>
              {[
                { l: 'Power Gain', v: '+10–12%' },
                { l: 'Temperature Drop', v: '5–6°C' },
                { l: 'Soiling Reduction', v: '30–40%' },
                { l: 'Contact Angle', v: '>98°' },
                { l: 'Deployed', v: '150+ MW' },
              ].map((s, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{ color: '#999', fontSize: 10 * fs, fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>{s.l}</span>
                  <span style={{ color: 'white', fontSize: 12 * fs, fontWeight: 700, fontFamily: "'Rajdhani', sans-serif", letterSpacing: '0.05em' }}>{s.v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* LEFT SIDE */}
      <div style={{ width: side1W, height: H, flexShrink: 0, position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRight: DIVIDER }}>
        <SurfaceBg surf={surfLeft} />
        <div style={{ position: 'relative', zIndex: 3, writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)', display: 'flex', alignItems: 'center', gap: 16 * fs }}>
          <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 10 * fs, letterSpacing: '0.2em', fontFamily: "'Inter', sans-serif" }}>SOLAR OUTPUT</span>
          <span style={{ color: '#fff', fontSize: 18 * fs, fontWeight: 700, letterSpacing: '0.1em', fontFamily: "'Rajdhani', sans-serif" }}>MORE POWER OUTPUT</span>
          <Sun size={24 * fs} color={C} style={{ transform: 'rotate(90deg)' }} />
        </div>
      </div>

      {/* FRONT FACE */}
      <div style={{ width: frontW, height: H, flexShrink: 0, position: 'relative', overflow: 'hidden', borderRight: DIVIDER }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }} />
        <SurfaceBg surf={surfFront} />
        <SolarHexOverlay width={frontW} height={H * 0.65} scale={scale} />
        {/* Top bar */}
        <div style={{ position: 'absolute', top: 20 * fs, left: 20 * fs, right: 20 * fs, display: 'flex', justifyContent: 'space-between', zIndex: 3 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 * fs, border: '1px solid rgba(245,158,11,0.3)', borderRadius: 99, padding: '4px 10px', backgroundColor: 'rgba(245,158,11,0.08)' }}>
            <Sun size={10 * fs} color={C} />
            <span style={{ color: 'white', fontSize: 8 * fs, fontWeight: 600, letterSpacing: '0.05em', fontFamily: "'Inter', sans-serif" }}>DEPLOYED 150+ MW</span>
          </div>
          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 9 * fs, fontFamily: "'Rajdhani', sans-serif", fontWeight: 600, letterSpacing: '0.1em' }}>
            MONOATOM LABS
          </div>
        </div>
        {/* Center text */}
        <div style={{ position: 'absolute', top: '26%', left: 0, right: 0, textAlign: 'center', zIndex: 3, padding: '0 5%' }}>
          <div style={{ color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.15)', fontSize: 18 * fs, fontWeight: 800, letterSpacing: '0.5em', marginBottom: -6 * fs, fontFamily: "'Rajdhani', sans-serif" }}>
            SOLAR
          </div>
          <div style={{ color: 'white', fontSize: 62 * fs, fontWeight: 900, letterSpacing: '0.02em', lineHeight: 0.9, fontFamily: "'Rajdhani', sans-serif", textShadow: `0 0 50px rgba(245, 158, 11, 0.5)` }}>
            GRAFFISOL
          </div>
          <div style={{ width: 80 * fs, height: 3 * fs, background: C, margin: '16px auto', boxShadow: `0 0 12px ${C}` }} />
          <div style={{ color: '#e5e5e5', fontSize: 12 * fs, fontWeight: 500, letterSpacing: '0.04em', fontFamily: "'Inter', sans-serif", lineHeight: 1.4 }}>
            Graphene Solar Enhancement ·{' '}
            <span style={{ color: C, fontWeight: 700 }}>More Power, Less Soiling.</span>
          </div>
        </div>
        {/* Bottom strip */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '22%', background: 'rgba(20,20,20,0.85)', backdropFilter: 'blur(10px)', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '0 10px', zIndex: 3 }}>
          <FeatureItem icon={Sun} label="+10% POWER" value="+10-12%" scale={scale} />
          <FeatureItem icon={Thermometer} label="5–6°C COOLER" value="COOLER" scale={scale} />
          <FeatureItem icon={Droplets} label="HYDROPHOBIC" value=">98°" scale={scale} />
          <FeatureItem icon={Zap} label="ANTI-SOILING" value="-30–40%" scale={scale} />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div style={{ width: side2W, height: H, flexShrink: 0, position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRight: DIVIDER }}>
        <SurfaceBg surf={surfRight} />
        <div style={{ position: 'relative', zIndex: 3, writingMode: 'vertical-rl', textOrientation: 'mixed', display: 'flex', alignItems: 'center', gap: 16 * fs }}>
          <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 10 * fs, letterSpacing: '0.2em', fontFamily: "'Inter', sans-serif" }}>LOTUS EFFECT</span>
          <span style={{ color: '#fff', fontSize: 18 * fs, fontWeight: 700, letterSpacing: '0.1em', fontFamily: "'Rajdhani', sans-serif" }}>ANTI-SOILING TECH</span>
          <Droplets size={24 * fs} color={C} style={{ transform: 'rotate(90deg)' }} />
        </div>
      </div>

      {/* GLUE TAB */}
      <div style={{ width: tabW, height: H, flexShrink: 0, position: 'relative', overflow: 'hidden', backgroundColor: 'rgba(0,0,0,0.8)' }}>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ color: '#333', fontSize: 8 * fs, writingMode: 'vertical-lr', textTransform: 'uppercase' }}>Adhesive Area</span>
        </div>
      </div>
    </div>
  )
}

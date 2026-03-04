import React from 'react'
import { Shield, Droplets, Car, Sparkles, Zap, Layers, BarChart3, Hexagon } from 'lucide-react'
import Logo from '../../../brand/Logo'
import SurfaceBg from '../../../studio/SurfaceBg'

const BOX = { face: 5.2, side: 2.13, total: 15.567, height: 6.65 }
const TAB_W = BOX.total - 2 * BOX.face - 2 * BOX.side  // 0.907"

// Enhanced Graphene Matrix Visualization
function GrapheneMatrix({ width, height, scale }) {
  const cols = 8
  const rows = 6
  const hexSize = (width / cols) * 0.8

  // Create a hexagonal grid pattern
  const dots = []
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const xOffset = (r % 2) * (hexSize * 0.866) // Offset for honeycomb
      const x = c * (hexSize * 1.732) + xOffset + (hexSize)
      const y = r * (hexSize * 1.5) + (hexSize)

      if (x > width || y > height) continue

      // Randomize opacity for "shimmer" effect
      const opacity = Math.random() * 0.3 + 0.1
      const size = Math.random() > 0.8 ? 2 : 1.2

      dots.push({ x, y, r: size * scale, op: opacity })

      // Add connections
      if (c < cols - 1 && Math.random() > 0.7) {
        dots.push({ type: 'line', x1: x, y1: y, x2: x + (hexSize * 1.732), y2: y, op: 0.15 })
      }
    }
  }

  return (
    <svg width={width} height={height} style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', zIndex: 1 }}>
      {dots.map((d, i) => (
        d.type === 'line' ?
          <line key={i} x1={d.x1} y1={d.y1} x2={d.x2} y2={d.y2} stroke="white" strokeWidth={0.5 * scale} opacity={d.op} /> :
          <circle key={i} cx={d.x} cy={d.y} r={d.r} fill="#64748B" opacity={d.op} />
      ))}
      <rect width={width} height={height} fill="url(#grad1)" style={{ mixBlendMode: 'overlay' }} />
      <defs>
        <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" style={{ stopColor: 'rgb(100, 116, 139)', stopOpacity: 0.1 }} />
          <stop offset="100%" style={{ stopColor: 'rgb(0,0,0)', stopOpacity: 0 }} />
        </radialGradient>
      </defs>
    </svg>
  )
}

function FeatureItem({ icon: Icon, label, value, scale }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 * scale }}>
      <div style={{
        width: 32 * scale, height: 32 * scale, borderRadius: '50%',
        backgroundColor: 'rgba(100, 116, 139, 0.1)', border: '1px solid rgba(100, 116, 139, 0.3)',
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
        <Icon size={16 * scale} color="#64748B" strokeWidth={1.5} />
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ color: 'white', fontSize: 10 * scale, fontWeight: 700, fontFamily: "'Rajdhani', sans-serif", letterSpacing: '0.05em' }}>{value}</div>
        <div style={{ color: '#888', fontSize: 7 * scale, fontFamily: "'Inter', sans-serif", textTransform: 'uppercase' }}>{label}</div>
      </div>
    </div>
  )
}

const DEFAULT_SURF = { time: 3200, bg: 'wave' }

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
          <div style={{ position: 'absolute', top: 20 * fs, left: 20 * fs, width: 10 * fs, height: 10 * fs, borderTop: '2px solid #64748B', borderLeft: '2px solid #64748B' }} />
          <div style={{ position: 'absolute', top: 20 * fs, right: 20 * fs, width: 10 * fs, height: 10 * fs, borderTop: '2px solid #64748B', borderRight: '2px solid #64748B' }} />
          <div style={{ position: 'absolute', bottom: 20 * fs, left: 20 * fs, width: 10 * fs, height: 10 * fs, borderBottom: '2px solid #64748B', borderLeft: '2px solid #64748B' }} />
          <div style={{ position: 'absolute', bottom: 20 * fs, right: 20 * fs, width: 10 * fs, height: 10 * fs, borderBottom: '2px solid #64748B', borderRight: '2px solid #64748B' }} />
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 * fs, marginBottom: 20 * fs, borderBottom: '1px solid #333', paddingBottom: 10 * fs }}>
              <Hexagon size={16 * fs} color="#64748B" strokeWidth={2.5} />
              <h4 style={{ color: '#fff', fontSize: 14 * fs, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: "'Rajdhani', sans-serif", margin: 0 }}>Specification Data</h4>
            </div>
            <div style={{ marginBottom: 20 * fs }}>
              <div style={{ color: '#64748B', fontSize: 10 * fs, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 10 * fs, fontFamily: "'Rajdhani', sans-serif", fontWeight: 700 }}>Protection Standards</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 12 * fs }}>
                {[
                  { l: 'Hardness', v: '9H+ Certified' },
                  { l: 'Contact Angle', v: '115° Superhydrophobic' },
                  { l: 'Heat Resist', v: '700°C Thermal Shield' },
                ].map((s, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <span style={{ color: '#999', fontSize: 10 * fs, fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>{s.l}</span>
                    <span style={{ color: 'white', fontSize: 12 * fs, fontWeight: 700, fontFamily: "'Rajdhani', sans-serif", letterSpacing: '0.05em' }}>{s.v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ color: '#64748B', fontSize: 10 * fs, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 10 * fs, fontFamily: "'Rajdhani', sans-serif", fontWeight: 700 }}>Application Metrics</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 12 * fs }}>
                {[
                  { l: 'Layer Thickness', v: '3-4 Microns' },
                  { l: 'Durability', v: '4+ Years' },
                  { l: 'Cure Time', v: '24 Hours' },
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
      </div>

      {/* LEFT SIDE */}
      <div style={{ width: side1W, height: H, flexShrink: 0, position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRight: DIVIDER }}>
        <SurfaceBg surf={surfLeft} />
        <div style={{ position: 'relative', zIndex: 3, writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)', display: 'flex', alignItems: 'center', gap: 16 * fs }}>
          <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 10 * fs, letterSpacing: '0.2em', fontFamily: "'Inter', sans-serif" }}>SUPERHYDROPHOBIC</span>
          <span style={{ color: '#fff', fontSize: 18 * fs, fontWeight: 700, letterSpacing: '0.1em', fontFamily: "'Rajdhani', sans-serif" }}>LOTUS EFFECT</span>
          <Droplets size={24 * fs} color="#64748B" style={{ transform: 'rotate(90deg)' }} />
        </div>
      </div>

      {/* FRONT FACE */}
      <div style={{ width: frontW, height: H, flexShrink: 0, position: 'relative', overflow: 'hidden', borderRight: DIVIDER }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }} />
        <SurfaceBg surf={surfFront} />
        <GrapheneMatrix width={frontW} height={H * 0.6} scale={scale} />
        <div style={{ position: 'absolute', top: 20 * fs, left: 20 * fs, right: 20 * fs, display: 'flex', justifyContent: 'space-between', zIndex: 3 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 * fs, border: '1px solid rgba(255,255,255,0.15)', borderRadius: 99, padding: '4px 10px' }}>
            <Shield size={10 * fs} color="#64748B" />
            <span style={{ color: 'white', fontSize: 8 * fs, fontWeight: 600, letterSpacing: '0.05em', fontFamily: "'Inter', sans-serif" }}>PROFESSIONAL GRADE</span>
          </div>
          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 9 * fs, fontFamily: "'Rajdhani', sans-serif", fontWeight: 600, letterSpacing: '0.1em' }}>
            MONOATOM LABS
          </div>
        </div>
        <div style={{ position: 'absolute', top: '26%', left: 0, right: 0, textAlign: 'center', zIndex: 3, padding: '0 5%' }}>
          <div style={{ color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.4)', fontSize: 18 * fs, fontWeight: 800, letterSpacing: '0.5em', marginBottom: -6 * fs, fontFamily: "'Rajdhani', sans-serif" }}>
            ADVANCED
          </div>
          <div style={{ color: 'white', fontSize: 62 * fs, fontWeight: 900, letterSpacing: '0.02em', lineHeight: 0.9, fontFamily: "'Rajdhani', sans-serif", textShadow: '0 0 50px rgba(100, 116, 139, 0.4)' }}>
            CERAPHENE
          </div>
          <div style={{ width: 80 * fs, height: 3 * fs, background: '#64748B', margin: '16px auto' }} />
          <div style={{ color: '#e5e5e5', fontSize: 13 * fs, fontWeight: 500, letterSpacing: '0.05em', fontFamily: "'Inter', sans-serif", lineHeight: 1.4 }}>
            Diamond-Hard Protection. <br />
            <span style={{ color: '#64748B', fontWeight: 700 }}>Graphene Performance.</span>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '22%', background: 'rgba(20,20,20,0.8)', backdropFilter: 'blur(10px)', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '0 10px', zIndex: 3 }}>
          <FeatureItem icon={Shield} label="HARDNESS" value="9H+" scale={scale} />
          <FeatureItem icon={Layers} label="DURABILITY" value="4+ YRS" scale={scale} />
          <FeatureItem icon={Zap} label="BONDING" value="NANO" scale={scale} />
          <FeatureItem icon={Sparkles} label="FINISH" value="MIRROR" scale={scale} />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div style={{ width: side2W, height: H, flexShrink: 0, position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRight: DIVIDER }}>
        <SurfaceBg surf={surfRight} />
        <div style={{ position: 'relative', zIndex: 3, writingMode: 'vertical-rl', textOrientation: 'mixed', display: 'flex', alignItems: 'center', gap: 16 * fs }}>
          <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 10 * fs, letterSpacing: '0.2em', fontFamily: "'Inter', sans-serif" }}>DIRECT TO CONSUMER</span>
          <span style={{ color: '#fff', fontSize: 18 * fs, fontWeight: 700, letterSpacing: '0.1em', fontFamily: "'Rajdhani', sans-serif" }}>COST DISRUPTION</span>
          <BarChart3 size={24 * fs} color="#64748B" style={{ transform: 'rotate(90deg)' }} />
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

import React from 'react'
import { Shield, Droplets, Car, Sparkles } from 'lucide-react'
import Logo from '../brand/Logo'
import HexagonWave from '../brand/HexagonWave'

const BOX = { face: 5.2, side: 2.13, total: 15.567, height: 6.65 }
const TAB_W = BOX.total - 2 * BOX.face - 2 * BOX.side  // 0.907"

function GrapheneDots({ width, height, scale }) {
  const cols = 7, rows = 5
  const sx = width / cols, sy = height / rows
  const dots = []
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const off = r % 2 === 1 ? sx * 0.5 : 0
      const x = c * sx + off + sx * 0.5
      const y = r * sy + sy * 0.5
      if (x > width) continue
      const special = r === 2 && c === 3
      dots.push({ x, y, r: (special ? 5.5 : 4) * scale, op: special ? 0.45 : 0.85 })
    }
  }
  return (
    <svg width={width} height={height}
      style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', zIndex: 2 }}>
      {dots.map((d, i) => <circle key={i} cx={d.x} cy={d.y} r={d.r} fill="white" opacity={d.op} />)}
    </svg>
  )
}

function FeatureIcon({ type, size }) {
  const p = { size, color: 'white', strokeWidth: 1.5 }
  if (type === 'shield') return <Shield {...p} />
  if (type === 'droplets') return <Droplets {...p} />
  if (type === 'sparkles') return <Sparkles {...p} />
  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <Car {...p} style={{ position: 'absolute', top: 0, left: 0 }} />
      <Shield size={size * 0.45} color="white" strokeWidth={1.5}
        style={{ position: 'absolute', bottom: 0, right: 0 }} />
    </div>
  )
}

// Mirrors DarkHexBackground from the website
function HexBg({ time }) {
  return (
    <>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.65, zIndex: 0 }}>
        <HexagonWave className="" time={time} />
      </div>
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.75) 100%)',
      }} />
    </>
  )
}

export default function WrapPanel({ scale = 1, hexTime }) {
  const px = (i) => Math.round(i * 96 * scale)
  const W = px(BOX.total), H = px(BOX.height)
  const backW = px(BOX.face), side1W = px(BOX.side)
  const frontW = px(BOX.face), side2W = px(BOX.side), tabW = px(TAB_W)
  const DIVIDER = '1px solid rgba(255,255,255,0.12)'
  const logoSize = Math.round(28 * scale)

  return (
    <div style={{ width: W, height: H, display: 'flex', backgroundColor: '#000', overflow: 'hidden', flexShrink: 0, userSelect: 'none' }}>

      {/* BACK FACE — Logo */}
      <div style={{ width: backW, height: H, flexShrink: 0, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: DIVIDER }}>
        <HexBg time={hexTime} />
        <div style={{ position: 'relative', zIndex: 3 }}>
          <Logo size={logoSize} theme="dark" />
        </div>
      </div>

      {/* LEFT SIDE — CERAPHENE */}
      <div style={{ width: side1W, height: H, flexShrink: 0, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: DIVIDER }}>
        <HexBg time={hexTime} />
        <span style={{ position: 'relative', zIndex: 3, color: 'white', fontSize: Math.round(14 * scale), fontWeight: 700, letterSpacing: '0.28em', writingMode: 'vertical-lr', textOrientation: 'mixed', transform: 'rotate(180deg)', fontFamily: "'Rajdhani', sans-serif", whiteSpace: 'nowrap' }}>
          CERAPHENE
        </span>
      </div>

      {/* FRONT FACE — Product branding */}
      <div style={{ width: frontW, height: H, flexShrink: 0, position: 'relative', overflow: 'hidden', borderRight: DIVIDER }}>
        <HexBg time={hexTime} />
        <GrapheneDots width={frontW} height={Math.round(H * 0.72)} scale={scale} />

        {/* Brand label top-right */}
        <div style={{ position: 'absolute', top: Math.round(12 * scale), right: Math.round(12 * scale), color: 'white', fontSize: Math.round(9 * scale), letterSpacing: '0.16em', zIndex: 3, fontFamily: "'Inter', sans-serif" }}>
          <span style={{ fontWeight: 300 }}>MONOATOM</span><span style={{ fontWeight: 700 }}>LABS</span>
        </div>

        {/* Product name */}
        <div style={{ position: 'absolute', top: '12%', left: 0, right: Math.round(10 * scale), textAlign: 'right', zIndex: 3 }}>
          <div style={{ color: 'white', fontSize: Math.round(54 * scale), fontWeight: 900, letterSpacing: '0.05em', lineHeight: 1, fontFamily: "'Bebas Neue', 'Rajdhani', sans-serif" }}>
            GRAPHENE
          </div>
          <div style={{ color: 'white', fontSize: Math.round(13 * scale), fontWeight: 400, letterSpacing: '0.3em', marginTop: Math.round(3 * scale), fontFamily: "'Inter', sans-serif" }}>
            CERAMIC  COATING
          </div>
        </div>

        {/* Feature icons */}
        <div style={{ position: 'absolute', bottom: Math.round(14 * scale), left: Math.round(6 * scale), right: Math.round(6 * scale), display: 'flex', justifyContent: 'space-around', alignItems: 'flex-end', zIndex: 3 }}>
          {[
            { icon: 'shield', label: '10H\nHARDNESS' },
            { icon: 'droplets', label: 'ULTRA\nHYDROPHOBIC' },
            { icon: 'shieldCar', label: 'PAINT\nPROTECTION' },
            { icon: 'sparkles', label: 'ULTRA\nSHINE' },
          ].map((f, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: Math.round(4 * scale) }}>
              <FeatureIcon type={f.icon} size={Math.round(22 * scale)} />
              <span style={{ color: 'white', fontSize: Math.round(6 * scale), fontWeight: 700, letterSpacing: '0.07em', textAlign: 'center', whiteSpace: 'pre-line', lineHeight: 1.3, fontFamily: "'Inter', sans-serif" }}>
                {f.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE — Tagline */}
      <div style={{ width: side2W, height: H, flexShrink: 0, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: DIVIDER }}>
        <HexBg time={hexTime} />
        <span style={{ position: 'relative', zIndex: 3, color: 'white', fontSize: Math.round(9 * scale), fontWeight: 700, letterSpacing: '0.22em', writingMode: 'vertical-lr', textOrientation: 'mixed', whiteSpace: 'nowrap', fontFamily: "'Inter', sans-serif" }}>
          #DETAILINGREDEFINED
        </span>
      </div>

      {/* GLUE TAB */}
      <div style={{ width: tabW, height: H, flexShrink: 0, position: 'relative', overflow: 'hidden', backgroundColor: 'rgba(0,0,0,0.4)' }}>
        <HexBg time={hexTime} />
      </div>
    </div>
  )
}

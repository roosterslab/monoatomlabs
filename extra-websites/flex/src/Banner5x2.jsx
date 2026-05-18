import heroBg from './assets/hero-bg.png'
import { brand, logo } from './content'

const W_FT = 5
const H_FT = 2
export const BASE_W = W_FT * 96  // 480px
export const BASE_H = H_FT * 96  // 192px

export default function Banner5x2({ scale = 2 }) {
  const W = Math.round(BASE_W * scale)
  const H = Math.round(BASE_H * scale)
  const s = scale

  return (
    <div style={{
      width: W, height: H,
      position: 'relative', overflow: 'hidden',
      fontFamily: "'Montserrat', sans-serif",
      background: '#0a0b10',
    }}>
      {/* Background image — sphere naturally falls at bottom */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
        backgroundRepeat: 'no-repeat',
      }} />

      {/* Top overlay — darken upper portion for text legibility */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, zIndex: 1,
        height: '65%',
        background: 'linear-gradient(to bottom, rgba(4,6,10,0.88) 0%, rgba(4,6,10,0.3) 80%, rgba(4,6,10,0) 100%)',
      }} />

      {/* Left + right edge darken */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(to right, rgba(4,6,10,0.5) 0%, transparent 20%, transparent 80%, rgba(4,6,10,0.5) 100%)',
      }} />

      {/* Brand content — top center */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, zIndex: 2,
        height: '70%',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        paddingTop: Math.round(8 * s),
        gap: Math.round(4 * s),
      }}>
        {/* Logo SVG */}
        <svg
          width={Math.round(52 * s)}
          height={Math.round(58 * s)}
          viewBox={logo.viewBox}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ filter: `drop-shadow(0 0 ${Math.round(6 * s)}px rgba(114,214,237,0.45))`, marginBottom: Math.round(2 * s) }}
        >
          {logo.hexagons.map((points, i) => (
            <polygon key={i} points={points} stroke="white" strokeWidth="2" />
          ))}
          {logo.nodes.map(([cx, cy, fill], i) => (
            <circle key={i} cx={cx} cy={cy} r="3.5" fill={fill} />
          ))}
        </svg>

        {/* MONOATOM */}
        <div style={{
          fontSize: Math.round(28 * s),
          fontWeight: 500,
          letterSpacing: '0.08em',
          color: '#ffffff',
          lineHeight: 1,
          textShadow: `0 0 ${Math.round(14 * s)}px rgba(0,0,0,0.9)`,
        }}>
          {brand.name}
        </div>

        {/* LABS */}
        <div style={{
          fontSize: Math.round(11 * s),
          fontWeight: 300,
          letterSpacing: '0.42em',
          marginLeft: '0.42em',
          color: '#72d6ed',
          textShadow: `0 0 ${Math.round(10 * s)}px rgba(114,214,237,0.5)`,
          lineHeight: 1,
        }}>
          {brand.nameSub}
        </div>

        {/* Tagline */}
        <div style={{
          fontSize: Math.round(7.5 * s),
          fontWeight: 400,
          letterSpacing: '0.02em',
          color: '#ffffff',
          textShadow: `0 0 ${Math.round(10 * s)}px rgba(0,0,0,0.95)`,
          marginTop: Math.round(2 * s),
        }}>
          {brand.tagline}
        </div>
      </div>

      {/* Bottom fade so ball blends cleanly */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 1,
        height: '15%',
        background: 'linear-gradient(to top, rgba(10,11,16,0.6) 0%, rgba(10,11,16,0) 100%)',
      }} />
    </div>
  )
}

import heroBg from './assets/hero-bg.png'
import { brand, logo } from './content'

const W_FT = 5
const H_FT = 3
export const BASE_W = W_FT * 96  // 480px
export const BASE_H = H_FT * 96  // 288px

export default function Banner5x3({ scale = 2 }) {
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
      {/* Background image — sphere sits at bottom */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
        backgroundRepeat: 'no-repeat',
      }} />

      {/* Top gradient — darkens upper 60% for text legibility */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, zIndex: 1,
        height: '60%',
        background: 'linear-gradient(to bottom, rgba(4,6,10,0.92) 0%, rgba(4,6,10,0.5) 70%, rgba(4,6,10,0) 100%)',
      }} />

      {/* Left + right edge vignette */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(to right, rgba(4,6,10,0.55) 0%, transparent 18%, transparent 82%, rgba(4,6,10,0.55) 100%)',
      }} />

      {/* Brand block — upper ~52% */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: '52%',
        zIndex: 2,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        gap: Math.round(5 * s),
        paddingTop: Math.round(10 * s),
      }}>
        {/* Logo */}
        <svg
          width={Math.round(62 * s)}
          height={Math.round(70 * s)}
          viewBox={logo.viewBox}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            filter: `drop-shadow(0 0 ${Math.round(8 * s)}px rgba(114,214,237,0.5))`,
            marginBottom: Math.round(3 * s),
          }}
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
          fontSize: Math.round(34 * s),
          fontWeight: 500,
          letterSpacing: '0.08em',
          color: '#ffffff',
          lineHeight: 1,
          textShadow: `0 0 ${Math.round(16 * s)}px rgba(0,0,0,0.9)`,
        }}>
          {brand.name}
        </div>

        {/* LABS */}
        <div style={{
          fontSize: Math.round(13 * s),
          fontWeight: 300,
          letterSpacing: '0.42em',
          marginLeft: '0.42em',
          color: '#72d6ed',
          lineHeight: 1,
          textShadow: `0 0 ${Math.round(12 * s)}px rgba(114,214,237,0.55)`,
        }}>
          {brand.nameSub}
        </div>

        {/* Divider */}
        <div style={{
          width: Math.round(120 * s),
          height: 1,
          background: 'linear-gradient(to right, transparent, rgba(114,214,237,0.4), transparent)',
          margin: `${Math.round(2 * s)}px 0`,
        }} />

        {/* Tagline */}
        <div style={{
          fontSize: Math.round(9 * s),
          fontWeight: 400,
          letterSpacing: '0.03em',
          color: '#ffffff',
          textShadow: `0 0 ${Math.round(12 * s)}px rgba(0,0,0,0.95)`,
        }}>
          {brand.tagline}
        </div>
      </div>

      {/* Bottom fade */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 1,
        height: '12%',
        background: 'linear-gradient(to top, rgba(10,11,16,0.65) 0%, rgba(10,11,16,0) 100%)',
      }} />

      {/* URL — bottom left */}
      <div style={{
        position: 'absolute', bottom: Math.round(10 * s), left: Math.round(16 * s), zIndex: 3,
        fontSize: Math.round(6 * s),
        color: 'rgba(255,255,255,0.35)',
        letterSpacing: '0.08em',
        fontWeight: 300,
      }}>
        monoatomlabs.com
      </div>
    </div>
  )
}

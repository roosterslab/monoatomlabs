import Banner5x3, { BASE_W, BASE_H } from './Banner5x3'
import { brand } from './content'

const DISPLAY_MAX_W = 960
const scale = DISPLAY_MAX_W / BASE_W  // 960 / 480 = 2.0

export default function App() {
  const displayW = Math.round(BASE_W * scale)
  const displayH = Math.round(BASE_H * scale)

  return (
    <div style={{
      minHeight: '100vh',
      background: '#06070c',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: "'Montserrat', sans-serif",
    }}>
      {/* Header */}
      <header style={{
        background: 'rgba(10,11,16,0.95)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        padding: '0 24px',
        height: 52,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexShrink: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ fontWeight: 500, letterSpacing: '0.06em', fontSize: 14, color: '#ffffff' }}>
            {brand.name}
          </span>
          <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 14 }}>·</span>
          <span style={{ fontSize: 12, color: '#72d6ed', letterSpacing: '0.08em' }}>
            Flex Banner Studio
          </span>
        </div>

        <div style={{
          display: 'flex', alignItems: 'center', gap: 10,
          background: 'rgba(114,214,237,0.07)',
          border: '1px solid rgba(114,214,237,0.2)',
          borderRadius: 6,
          padding: '5px 14px',
          fontSize: 12,
          color: '#72d6ed',
          letterSpacing: '0.06em',
        }}>
          <span>5 × 3 ft</span>
          <span style={{ color: 'rgba(114,214,237,0.3)' }}>·</span>
          <span style={{ color: 'rgba(255,255,255,0.4)' }}>{displayW} × {displayH}px</span>
        </div>

        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.04em' }}>
          Scale {Math.round(scale * 100)}%
        </div>
      </header>

      {/* Main preview area */}
      <main style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 24px',
        gap: 16,
      }}>
        {/* Size label */}
        <div style={{
          fontSize: 11,
          color: 'rgba(255,255,255,0.3)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          alignSelf: 'flex-start',
          marginLeft: `calc(50% - ${displayW / 2}px)`,
        }}>
          60" × 36" flex banner
        </div>

        {/* Banner with shadow */}
        <div style={{
          boxShadow: '0 8px 60px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.06)',
          borderRadius: 2,
          lineHeight: 0,
        }}>
          <Banner5x3 scale={scale} />
        </div>
      </main>
    </div>
  )
}

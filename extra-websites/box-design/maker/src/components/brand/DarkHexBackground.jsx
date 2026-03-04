import React from 'react'
import HexagonWave from './HexagonWave'

/**
 * DarkHexBackground — adapted from website/src/components/backgrounds/DarkHexBackground.jsx
 * Accepts a `time` prop for static snapshot rendering (same as HexagonWave).
 * Pattern: HexagonWave (opacity 0.7) + radial gradient mask (edges dark, centre clear).
 */
const DarkHexBackground = ({ time }) => (
  <>
    <div style={{ position: 'absolute', inset: 0, opacity: 0.7, zIndex: 0 }}>
      <HexagonWave className="" time={time} />
    </div>
    <div style={{
      position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
      background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.85) 100%)',
    }} />
  </>
)

export default DarkHexBackground

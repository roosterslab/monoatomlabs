import React from 'react'
import HexagonWave from '../brand/HexagonWave'
import DarkHexBackground from '../brand/DarkHexBackground'
import GrapheneLattice from '../brand/GrapheneLattice'

/**
 * SurfaceBg — unified background switcher for all box design panels.
 *
 * 'wave'    : HexagonWave 0.8 opacity, soft radial gradient
 * 'dark'    : DarkHexBackground — 0.7 opacity wave, heavy dark-edge gradient
 * 'lattice' : GrapheneLattice — 3D rotating graphene bond structure
 *
 * @param {{ time: number, bg: 'wave'|'dark'|'lattice' }} surf
 */
export default function SurfaceBg({ surf = { time: 3200, bg: 'wave' } }) {
  if (surf.bg === 'dark') {
    return <DarkHexBackground time={surf.time} />
  }

  if (surf.bg === 'lattice') {
    return (
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <GrapheneLattice
          className=""
          time={surf.time * 6.2832}
          hexRadius={surf.latticeSize}
          brightness={surf.latticeBright}
          zDepth={surf.latticeDepth}
        />
      </div>
    )
  }

  // 'wave' (default)
  return (
    <>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.8, zIndex: 0 }}>
        <HexagonWave className="" time={surf.time} />
      </div>
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.6) 100%)',
      }} />
    </>
  )
}

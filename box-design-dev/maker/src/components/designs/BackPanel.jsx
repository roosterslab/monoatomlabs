import React from 'react'
import HexagonWave from '../brand/HexagonWave'

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

// Sports car side-profile SVG
function SportsCar({ width, height, color = '#777' }) {
  const sw = 2.2
  return (
    <svg
      viewBox="0 0 700 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
    >
      {/* Main body */}
      <path
        d="M 75 195 L 75 155 Q 80 128 112 112 L 205 74 Q 255 50 335 46 L 465 44 Q 535 44 572 76 Q 598 98 614 140 L 622 195 Z"
        stroke={color}
        strokeWidth={sw}
      />
      {/* Roof + windshield */}
      <path
        d="M 205 74 Q 255 50 335 46 L 465 44 Q 515 44 548 68 L 575 107 L 225 110 Z"
        stroke={color}
        strokeWidth={sw}
      />
      {/* A-pillar */}
      <line x1="205" y1="74" x2="225" y2="110" stroke={color} strokeWidth={sw} />
      {/* Rear roofline */}
      <path d="M 575 107 Q 600 107 618 125 L 622 160" stroke={color} strokeWidth={sw} />
      {/* Side door panel outline */}
      <path
        d="M 230 110 L 575 107 L 570 155 L 220 158 Z"
        stroke={color}
        strokeWidth={sw * 0.5}
      />
      {/* Front bumper / splitter */}
      <path
        d="M 75 172 L 42 168 L 40 183 L 74 187"
        stroke={color}
        strokeWidth={sw}
      />
      {/* Front lip */}
      <line x1="42" y1="183" x2="75" y2="195" stroke={color} strokeWidth={sw * 0.6} />
      {/* Rear bumper */}
      <path
        d="M 622 172 L 650 168 L 652 183 L 623 190"
        stroke={color}
        strokeWidth={sw}
      />
      {/* Rear diffuser */}
      <rect x="610" y="180" width="42" height="9" rx="2" stroke={color} strokeWidth={sw * 0.6} />
      {/* Front wheel arch */}
      <path
        d="M 75 195 Q 75 152 115 132 Q 135 123 162 123 Q 195 123 212 148 Q 224 168 220 195"
        stroke={color}
        strokeWidth={sw}
        fill="none"
      />
      {/* Rear wheel arch */}
      <path
        d="M 468 195 Q 463 152 493 135 Q 515 124 542 124 Q 570 124 590 142 Q 610 162 608 195"
        stroke={color}
        strokeWidth={sw}
        fill="none"
      />
      {/* Front wheel */}
      <circle cx="162" cy="198" r="38" stroke={color} strokeWidth={sw} />
      <circle cx="162" cy="198" r="17" stroke={color} strokeWidth={sw * 0.7} />
      {/* Front hub spokes */}
      {[0, 72, 144, 216, 288].map(angle => {
        const rad = (angle * Math.PI) / 180
        return (
          <line
            key={angle}
            x1={162 + 17 * Math.cos(rad)}
            y1={198 + 17 * Math.sin(rad)}
            x2={162 + 35 * Math.cos(rad)}
            y2={198 + 35 * Math.sin(rad)}
            stroke={color}
            strokeWidth={sw * 0.6}
          />
        )
      })}
      {/* Rear wheel */}
      <circle cx="542" cy="198" r="38" stroke={color} strokeWidth={sw} />
      <circle cx="542" cy="198" r="17" stroke={color} strokeWidth={sw * 0.7} />
      {[0, 72, 144, 216, 288].map(angle => {
        const rad = (angle * Math.PI) / 180
        return (
          <line
            key={angle}
            x1={542 + 17 * Math.cos(rad)}
            y1={198 + 17 * Math.sin(rad)}
            x2={542 + 35 * Math.cos(rad)}
            y2={198 + 35 * Math.sin(rad)}
            stroke={color}
            strokeWidth={sw * 0.6}
          />
        )
      })}
      {/* Ground shadow line */}
      <line x1="36" y1="238" x2="666" y2="238" stroke={color} strokeWidth={sw * 0.4} opacity={0.4} />
    </svg>
  )
}

// Feature block (corner)
function FeatureBlock({ feature, align = 'left', scale }) {
  const fs = scale
  const isRight = align === 'right'
  return (
    <div
      style={{
        textAlign: isRight ? 'right' : 'left',
        padding: `${16 * fs}px ${20 * fs}px`,
      }}
    >
      {/* Title line */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6 * fs,
          justifyContent: isRight ? 'flex-end' : 'flex-start',
          marginBottom: 6 * fs,
        }}
      >
        {/* Hash mark icon */}
        <svg
          width={18 * fs}
          height={18 * fs}
          viewBox="0 0 18 18"
          style={{ flexShrink: 0, opacity: 0.7 }}
        >
          <line x1="6" y1="2" x2="4" y2="16" stroke="white" strokeWidth="2.5" />
          <line x1="12" y1="2" x2="10" y2="16" stroke="white" strokeWidth="2.5" />
          <line x1="2" y1="6" x2="16" y2="6" stroke="white" strokeWidth="2.5" />
          <line x1="2" y1="11" x2="16" y2="11" stroke="white" strokeWidth="2.5" />
        </svg>
        <span
          style={{
            color: 'white',
            fontSize: Math.round(20 * fs),
            fontWeight: 900,
            letterSpacing: '0.04em',
            fontFamily: "'Rajdhani', 'Inter', sans-serif",
          }}
        >
          {feature.hashWord}{' '}
        </span>
        <span
          style={{
            color: '#2de2c8',
            fontSize: Math.round(20 * fs),
            fontWeight: 900,
            fontStyle: 'italic',
            letterSpacing: '0.04em',
            fontFamily: "'Rajdhani', 'Inter', sans-serif",
          }}
        >
          {feature.typeWord}
        </span>
      </div>
      {/* Description */}
      <p
        style={{
          color: 'rgba(255,255,255,0.7)',
          fontSize: Math.round(11 * fs),
          fontStyle: 'italic',
          lineHeight: 1.55,
          fontFamily: "'Inter', sans-serif",
          whiteSpace: 'pre-line',
        }}
      >
        {feature.description}
      </p>
    </div>
  )
}

// =============================================
//  BACK PANEL — 15.567" × 6.65"
// =============================================
const BACK_FEATURES = [
  { hashWord: 'SCRATCH', typeWord: 'PROTECTION', description: 'Helps protect against\nlight scratches and daily wear' },
  { hashWord: 'HEAT', typeWord: 'RESISTANCE', description: 'Designed to withstand high\ntemperatures and thermal stress' },
  { hashWord: 'UV', typeWord: 'PROTECTION', description: 'UV-resistant layer that\nhelps prevent paint fading' },
  { hashWord: 'CHEMICAL', typeWord: 'RESISTANCE', description: 'Protects the paint from bird droppings\nand corrosive chemical contaminants' },
]

export default function BackPanel({ scale = 1, hexTime }) {
  const W = Math.round(1494 * scale)
  const H = Math.round(638 * scale)

  const [f0, f1, f2, f3] = BACK_FEATURES

  return (
    <div
      style={{
        width: W,
        height: H,
        backgroundColor: '#000',
        position: 'relative',
        overflow: 'hidden',
        flexShrink: 0,
        userSelect: 'none',
      }}
    >
      <HexBg time={hexTime} />
      {/* TOP ROW */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: W,
          height: Math.round(H * 0.42),
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          zIndex: 3,
        }}
      >
        <FeatureBlock feature={f0} align="left" scale={scale} />
        <FeatureBlock feature={f1} align="right" scale={scale} />
      </div>

      {/* CENTER: car illustration */}
      <div
        style={{
          position: 'absolute',
          left: Math.round(W * 0.1),
          right: Math.round(W * 0.1),
          top: Math.round(H * 0.18),
          bottom: Math.round(H * 0.18),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 3,
        }}
      >
        <SportsCar width={Math.round(W * 0.8)} height={Math.round(H * 0.56)} color="#666" />
      </div>

      {/* BOTTOM ROW */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: W,
          height: Math.round(H * 0.42),
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          zIndex: 3,
        }}
      >
        <FeatureBlock feature={f2} align="left" scale={scale} />
        <FeatureBlock feature={f3} align="right" scale={scale} />
      </div>
    </div>
  )
}

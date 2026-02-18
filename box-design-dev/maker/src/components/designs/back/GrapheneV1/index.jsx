import React from 'react'
import BackBase from '../../base/back'
import { Shield, Thermometer, Zap, Activity } from 'lucide-react'

const DEFAULT_SURF = { time: 3200, bg: 'wave' }

function SportsCar({ width, height, color = '#777' }) {
  const sw = 1.8
  return (
    <svg viewBox="0 0 700 260" fill="none" xmlns="http://www.w3.org/2000/svg" width={width} height={height} style={{ filter: 'drop-shadow(0 0 10px rgba(45, 226, 200, 0.2))' }}>
      <defs>
        <linearGradient id="scanGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#64748B" stopOpacity="0" />
          <stop offset="50%" stopColor="#64748B" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#64748B" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M 75 195 L 75 155 Q 80 128 112 112 L 205 74 Q 255 50 335 46 L 465 44 Q 535 44 572 76 Q 598 98 614 140 L 622 195 Z" stroke={color} strokeWidth={sw} />
      <path d="M 205 74 Q 255 50 335 46 L 465 44 Q 515 44 548 68 L 575 107 L 225 110 Z" stroke={color} strokeWidth={sw} />
      <line x1="205" y1="74" x2="225" y2="110" stroke={color} strokeWidth={sw} />
      <path d="M 575 107 Q 600 107 618 125 L 622 160" stroke={color} strokeWidth={sw} />
      <path d="M 230 110 L 575 107 L 570 155 L 220 158 Z" stroke={color} strokeWidth={sw * 0.5} />
      <path d="M 75 172 L 42 168 L 40 183 L 74 187" stroke={color} strokeWidth={sw} />
      <line x1="42" y1="183" x2="75" y2="195" stroke={color} strokeWidth={sw * 0.6} />
      <path d="M 622 172 L 650 168 L 652 183 L 623 190" stroke={color} strokeWidth={sw} />
      <rect x="610" y="180" width="42" height="9" rx="2" stroke={color} strokeWidth={sw * 0.6} />
      <path d="M 75 195 Q 75 152 115 132 Q 135 123 162 123 Q 195 123 212 148 Q 224 168 220 195" stroke={color} strokeWidth={sw} />
      <path d="M 468 195 Q 463 152 493 135 Q 515 124 542 124 Q 570 124 590 142 Q 610 162 608 195" stroke={color} strokeWidth={sw} />
      <circle cx="162" cy="198" r="38" stroke={color} strokeWidth={sw} />
      <circle cx="162" cy="198" r="17" stroke={color} strokeWidth={sw * 0.7} />
      <circle cx="542" cy="198" r="38" stroke={color} strokeWidth={sw} />
      <circle cx="542" cy="198" r="17" stroke={color} strokeWidth={sw * 0.7} />
      <line x1="36" y1="238" x2="666" y2="238" stroke={color} strokeWidth={sw * 0.4} opacity={0.4} />
      <path d="M 230 110 L 575 107 L 570 155 L 220 158 Z" fill="url(#scanGradient)" opacity="0.3" />
    </svg>
  )
}

function TechSpec({ icon: Icon, title, val, desc, align = 'left', scale }) {
  const isRight = align === 'right'
  const fs = scale
  return (
    <div style={{ display: 'flex', flexDirection: isRight ? 'row-reverse' : 'row', alignItems: 'flex-start', gap: 16 * fs, textAlign: isRight ? 'right' : 'left', padding: 12 * fs }}>
      <div style={{ width: 42 * fs, height: 42 * fs, borderRadius: 8, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <Icon size={22 * fs} color="#64748B" strokeWidth={2.5} />
      </div>
      <div>
        <div style={{ color: '#64748B', fontSize: 13 * fs, fontWeight: 800, letterSpacing: '0.1em', fontFamily: "'Rajdhani', sans-serif", textTransform: 'uppercase', marginBottom: 4 }}>{title}</div>
        <div style={{ color: 'white', fontSize: 18 * fs, fontWeight: 800, fontFamily: "'Rajdhani', sans-serif", margin: '4px 0', textShadow: '0 0 15px rgba(0,0,0,0.6)', letterSpacing: '0.05em' }}>{val}</div>
        <div style={{ color: '#ccc', fontSize: 12 * fs, maxWidth: 190 * fs, lineHeight: 1.35, fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>{desc}</div>
      </div>
    </div>
  )
}

export default function BackPanel({ scale = 1, surf = DEFAULT_SURF }) {
  const W = Math.round(1494 * scale)
  const H = Math.round(638 * scale)
  const fs = scale

  return (
    <BackBase scale={scale} surf={surf}>

      <div style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: 1, background: 'rgba(255,255,255,0.05)' }} />
        <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 1, background: 'rgba(255,255,255,0.05)' }} />
      </div>

      <div style={{ position: 'absolute', left: Math.round(W * 0.15), right: Math.round(W * 0.15), top: Math.round(H * 0.15), bottom: Math.round(H * 0.15), display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 3 }}>
        <SportsCar width={Math.round(W * 0.7)} height={Math.round(H * 0.6)} color="#888" />
        <div style={{ position: 'absolute', bottom: -20 * fs, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ fontSize: 10 * fs, color: '#444', letterSpacing: '0.2em', fontFamily: "'Rajdhani', sans-serif" }}>PROTECTION MATRIX</div>
          <div style={{ width: 40 * fs, height: 2, background: '#64748B', marginTop: 4 }} />
        </div>
      </div>

      <svg style={{ position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none' }} width={W} height={H}>
        <defs>
          <marker id="dot" markerWidth="8" markerHeight="8" refX="4" refY="4">
            <circle cx="4" cy="4" r="3" fill="#64748B" />
          </marker>
        </defs>
        <path d={`M ${W * 0.22} ${H * 0.28} L ${W * 0.25} ${H * 0.28} L ${W * 0.35} ${H * 0.55}`} fill="none" stroke="#64748B" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" markerEnd="url(#dot)" />
        <path d={`M ${W * 0.22} ${H * 0.75} L ${W * 0.25} ${H * 0.75} L ${W * 0.38} ${H * 0.65}`} fill="none" stroke="#64748B" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" markerEnd="url(#dot)" />
        <path d={`M ${W * 0.78} ${H * 0.28} L ${W * 0.75} ${H * 0.28} L ${W * 0.6} ${H * 0.4}`} fill="none" stroke="#64748B" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" markerEnd="url(#dot)" />
        <path d={`M ${W * 0.78} ${H * 0.75} L ${W * 0.75} ${H * 0.75} L ${W * 0.68} ${H * 0.6}`} fill="none" stroke="#64748B" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" markerEnd="url(#dot)" />
      </svg>

      <div style={{ position: 'absolute', inset: 0, padding: 30 * fs, display: 'flex', justifyContent: 'space-between', zIndex: 4, pointerEvents: 'none' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 40 * fs }}>
          <div style={{ marginBottom: 10 * fs, borderLeft: '3px solid #64748B', paddingLeft: 10 * fs }}>
            <div style={{ color: '#64748B', fontSize: 9 * fs, textTransform: 'uppercase', letterSpacing: '0.2em', fontFamily: "'Rajdhani', sans-serif" }}>Physical Properties</div>
          </div>
          <TechSpec icon={Shield} title="Impact Resistance" val="9H+ Hardness" desc="Prevents swirl marks and minor scratches from daily washing." scale={scale} />
          <TechSpec icon={Thermometer} title="Heat Tolerance" val="700°C Thermal Shield" desc="Resists extreme engine heat and braking temperatures." scale={scale} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 40 * fs, textAlign: 'right', alignItems: 'flex-end' }}>
          <div style={{ marginBottom: 10 * fs, borderRight: '3px solid #64748B', paddingRight: 10 * fs }}>
            <div style={{ color: '#64748B', fontSize: 9 * fs, textTransform: 'uppercase', letterSpacing: '0.2em', fontFamily: "'Rajdhani', sans-serif" }}>Chemical Properties</div>
          </div>
          <TechSpec icon={Activity} title="Chemical Shield" val="pH 2-12 Resistant" desc="Protects against acid rain, bird droppings, and industrial fallout." align="right" scale={scale} />
          <TechSpec icon={Zap} title="Bonding Tech" val="Covalent Si-O Bond" desc="Molecularly fuses with clear coat for permanent protection." align="right" scale={scale} />
        </div>
      </div>

    </BackBase>
  )
}

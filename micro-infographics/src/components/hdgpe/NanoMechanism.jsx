import React from 'react'

const C = '#06b6d4'

export default function PolyNano() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>HD-G-PE · Science</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>NANO-REINFORCEMENT MECHANISM</div>
        <div style={{ color: '#64748b', fontSize: 13, marginTop: 4 }}>How graphene nano-platelets reinforce HDPE at the molecular level</div>
      </div>

      {/* Schematic visualization */}
      <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: 12, padding: 24, marginBottom: 24 }}>
        <div style={{ color: '#64748b', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>Graphene Nano-Platelets in Polymer Matrix</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {/* Without GNPs */}
          <div>
            <div style={{ color: '#475569', fontSize: 11, marginBottom: 10, textAlign: 'center' }}>Standard HDPE — polymer chains only</div>
            <svg width="100%" viewBox="0 0 220 140" style={{ display: 'block' }}>
              {/* Wavy polymer chains */}
              {[0,1,2,3,4].map(i => (
                <path key={i}
                  d={`M 10 ${20 + i * 24} Q 40 ${14 + i * 24} 60 ${20 + i * 24} Q 80 ${26 + i * 24} 100 ${20 + i * 24} Q 120 ${14 + i * 24} 140 ${20 + i * 24} Q 160 ${26 + i * 24} 180 ${20 + i * 24} Q 200 ${14 + i * 24} 210 ${20 + i * 24}`}
                  fill="none" stroke="#334155" strokeWidth="2" />
              ))}
              {/* Void areas between chains */}
              <ellipse cx="60" cy="55" rx="18" ry="8" fill="#0d0d0d22" stroke="#1f1f1f" strokeWidth="0.5" strokeDasharray="2,2" />
              <ellipse cx="150" cy="77" rx="15" ry="7" fill="#0d0d0d22" stroke="#1f1f1f" strokeWidth="0.5" strokeDasharray="2,2" />
              <text x="110" y="130" fill="#333" fontSize="9" textAnchor="middle">Weak inter-chain zones = failure points</text>
            </svg>
          </div>
          {/* With GNPs */}
          <div>
            <div style={{ color: C, fontSize: 11, marginBottom: 10, textAlign: 'center' }}>HD-G-PE — GNPs bridge polymer chains</div>
            <svg width="100%" viewBox="0 0 220 140" style={{ display: 'block' }}>
              {/* Wavy polymer chains */}
              {[0,1,2,3,4].map(i => (
                <path key={i}
                  d={`M 10 ${20 + i * 24} Q 40 ${14 + i * 24} 60 ${20 + i * 24} Q 80 ${26 + i * 24} 100 ${20 + i * 24} Q 120 ${14 + i * 24} 140 ${20 + i * 24} Q 160 ${26 + i * 24} 180 ${20 + i * 24} Q 200 ${14 + i * 24} 210 ${20 + i * 24}`}
                  fill="none" stroke="#334155" strokeWidth="2" />
              ))}
              {/* GNP platelets */}
              {[
                { x: 44, y: 35, w: 40, h: 8, angle: -15 },
                { x: 120, y: 55, w: 45, h: 8, angle: 10 },
                { x: 60, y: 78, w: 35, h: 7, angle: -8 },
                { x: 155, y: 95, w: 38, h: 7, angle: 12 },
              ].map((p, i) => (
                <rect key={i} x={p.x} y={p.y} width={p.w} height={p.h} rx="2"
                  fill={C + '44'} stroke={C} strokeWidth="1.5"
                  transform={`rotate(${p.angle}, ${p.x + p.w/2}, ${p.y + p.h/2})`} />
              ))}
              <text x="110" y="130" fill={C} fontSize="9" textAnchor="middle">GNPs bridge chains = uniform load transfer</text>
            </svg>
          </div>
        </div>
      </div>

      {/* Three mechanisms */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14, marginBottom: 20 }}>
        {[
          {
            title: 'Molecular Bridging',
            icon: '🔗',
            desc: 'Graphene platelets (500–1000 aspect ratio) span across polymer chains, creating a nano-reinforcement network that prevents chain slippage under stress.',
            stat: '500–1000', statLabel: 'Aspect ratio (length/thickness)',
          },
          {
            title: 'Load Transfer',
            icon: '⚖️',
            desc: 'When stress is applied, it distributes across the entire graphene network rather than concentrating at weak inter-chain zones. This enables the +30% mechanical improvement.',
            stat: '>95%', statLabel: 'Uniform dispersion achieved',
          },
          {
            title: 'Crystallinity',
            icon: '🔬',
            desc: 'Graphene platelets act as nucleation sites, increasing the degree of crystallinity in HDPE. Higher crystallinity = better mechanical properties and barrier performance.',
            stat: '+20%', statLabel: 'Crystallinity increase',
          },
        ].map((m, i) => (
          <div key={i} style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: 10, padding: 18 }}>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 10 }}>
              <span style={{ fontSize: 20 }}>{m.icon}</span>
              <span style={{ color: '#e2e8f0', fontSize: 13, fontWeight: 700 }}>{m.title}</span>
            </div>
            <div style={{ color: '#64748b', fontSize: 11, lineHeight: 1.6, marginBottom: 12 }}>{m.desc}</div>
            <div style={{ background: '#0d0d0d', borderRadius: 6, padding: '8px 12px' }}>
              <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 22, fontWeight: 700, color: C }}>{m.stat}</div>
              <div style={{ color: '#475569', fontSize: 10 }}>{m.statLabel}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Graphene facts */}
      <div style={{ background: '#03181f', border: `1px solid ${C}44`, borderRadius: 10, padding: 16 }}>
        <div style={{ color: C, fontSize: 11, fontWeight: 700, marginBottom: 10 }}>GRAPHENE — EXTRAORDINARY PROPERTIES</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
          {[
            { val: '200×', label: 'Stronger than steel', sub: 'per unit weight' },
            { val: '5,000', label: 'W/mK conductivity', sub: 'best thermal conductor' },
            { val: '1 atom', label: 'Thick', sub: '0.335 nm per layer' },
            { val: '97.7%', label: 'Light transparent', sub: 'barely blocks light' },
          ].map((f, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 22, fontWeight: 700, color: '#fff' }}>{f.val}</div>
              <div style={{ color: C, fontSize: 10, marginTop: 4 }}>{f.label}</div>
              <div style={{ color: '#475569', fontSize: 9, marginTop: 2 }}>{f.sub}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 16, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · HD-G-PE · NANO-SCIENCE</div>
    </div>
  )
}

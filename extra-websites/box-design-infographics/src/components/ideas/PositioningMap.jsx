import React, { useState } from 'react'

const C = '#64748B'

// Price vs Performance competitor positioning
const PRODUCTS = [
  {
    name: 'CERAPHENE',
    brand: 'Monoatom Labs',
    price: 5000,
    perf: 91,
    hardness: '9H+',
    years: 4,
    graphene: true,
    highlight: true,
    color: C,
    x: 22, y: 88, // % on chart (x=price %, y=performance %)
  },
  {
    name: 'Crystal Serum Ultra',
    brand: 'Gtechniq',
    price: 18000,
    perf: 96,
    hardness: '10H',
    years: 9,
    graphene: false,
    highlight: false,
    color: '#555',
    x: 82, y: 93,
  },
  {
    name: 'CQuartz UK 3.0',
    brand: 'CarPro',
    price: 12000,
    perf: 82,
    hardness: '9H',
    years: 3,
    graphene: false,
    highlight: false,
    color: '#555',
    x: 54, y: 79,
  },
  {
    name: 'Ceramic Pro Gold',
    brand: 'Ceramic Pro',
    price: 15000,
    perf: 85,
    hardness: '9H',
    years: 5,
    graphene: false,
    highlight: false,
    color: '#555',
    x: 68, y: 82,
  },
  {
    name: 'IGL Kenzo',
    brand: 'IGL Coatings',
    price: 8000,
    perf: 78,
    hardness: '9H',
    years: 3,
    graphene: false,
    highlight: false,
    color: '#555',
    x: 36, y: 75,
  },
  {
    name: 'Annual Wax',
    brand: 'Generic',
    price: 2000,
    perf: 20,
    hardness: 'None',
    years: 0.5,
    graphene: false,
    highlight: false,
    color: '#333',
    x: 9, y: 19,
  },
]

const CHART_W = 560
const CHART_H = 340
const PAD = { top: 20, right: 20, bottom: 50, left: 60 }

export default function PositioningMap() {
  const [hover, setHover] = useState(null)

  const plotW = CHART_W - PAD.left - PAD.right
  const plotH = CHART_H - PAD.top - PAD.bottom

  return (
    <div style={{ padding: 32, fontFamily: 'Inter, sans-serif' }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{ color: C, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8 }}>Data Arrangements — Positioning</div>
        <h2 style={{ color: 'white', fontSize: 24, fontWeight: 700, margin: 0, fontFamily: 'Outfit, sans-serif' }}>Competitor Positioning Map</h2>
        <p style={{ color: '#555', fontSize: 13, marginTop: 8, lineHeight: 1.6 }}>
          Price vs Performance scatter plot. CERAPHENE sits in the high-performance, low-price quadrant — a unique position no competitor occupies.
        </p>
      </div>

      <div style={{ background: '#050505', border: '1px solid #1f1f1f', borderRadius: 8, padding: 32 }}>
        <div style={{ color: C, fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 20, fontFamily: 'Rajdhani, sans-serif' }}>Price vs Protection Performance</div>

        <div style={{ position: 'relative', display: 'inline-block' }}>
          <svg width={CHART_W} height={CHART_H} style={{ display: 'block', overflow: 'visible' }}>
            {/* Quadrant backgrounds */}
            <rect x={PAD.left} y={PAD.top} width={plotW / 2} height={plotH / 2} fill="#0a0a0a" />
            <rect x={PAD.left + plotW / 2} y={PAD.top} width={plotW / 2} height={plotH / 2} fill="#080808" />
            <rect x={PAD.left} y={PAD.top + plotH / 2} width={plotW / 2} height={plotH / 2} fill="#080808" />
            <rect x={PAD.left + plotW / 2} y={PAD.top + plotH / 2} width={plotW / 2} height={plotH / 2} fill="#050505" />

            {/* Quadrant labels */}
            <text x={PAD.left + plotW * 0.25} y={PAD.top + plotH * 0.15} textAnchor="middle" fill="#111" fontSize={10} fontFamily="Inter, sans-serif">HIGH PERFORMANCE · LOW PRICE</text>
            <text x={PAD.left + plotW * 0.25} y={PAD.top + plotH * 0.22} textAnchor="middle" fill="#1a1a1a" fontSize={9} fontFamily="Inter, sans-serif">← Sweet Spot</text>
            <text x={PAD.left + plotW * 0.75} y={PAD.top + plotH * 0.15} textAnchor="middle" fill="#111" fontSize={10} fontFamily="Inter, sans-serif">HIGH PERFORMANCE · HIGH PRICE</text>
            <text x={PAD.left + plotW * 0.25} y={PAD.top + plotH * 0.7} textAnchor="middle" fill="#0d0d0d" fontSize={10} fontFamily="Inter, sans-serif">LOW PERFORMANCE · LOW PRICE</text>
            <text x={PAD.left + plotW * 0.75} y={PAD.top + plotH * 0.7} textAnchor="middle" fill="#0d0d0d" fontSize={10} fontFamily="Inter, sans-serif">LOW PERFORMANCE · HIGH PRICE</text>

            {/* Grid lines */}
            {[0, 25, 50, 75, 100].map(v => (
              <g key={v}>
                <line x1={PAD.left} y1={PAD.top + plotH * (1 - v / 100)} x2={PAD.left + plotW} y2={PAD.top + plotH * (1 - v / 100)} stroke="#0d0d0d" strokeWidth={1} />
                <text x={PAD.left - 8} y={PAD.top + plotH * (1 - v / 100) + 4} textAnchor="end" fill="#333" fontSize={9} fontFamily="Rajdhani, sans-serif">{v}</text>
              </g>
            ))}
            {[0, 5000, 10000, 15000, 20000].map((v, i) => (
              <g key={v}>
                <line x1={PAD.left + plotW * (i / 4)} y1={PAD.top} x2={PAD.left + plotW * (i / 4)} y2={PAD.top + plotH} stroke="#0d0d0d" strokeWidth={1} />
                <text x={PAD.left + plotW * (i / 4)} y={PAD.top + plotH + 18} textAnchor="middle" fill="#333" fontSize={9} fontFamily="Rajdhani, sans-serif">₹{v.toLocaleString()}</text>
              </g>
            ))}

            {/* Axis labels */}
            <text x={PAD.left + plotW / 2} y={CHART_H - 4} textAnchor="middle" fill="#444" fontSize={10} fontFamily="Inter, sans-serif">Price →</text>
            <text x={12} y={PAD.top + plotH / 2} textAnchor="middle" fill="#444" fontSize={10} fontFamily="Inter, sans-serif" transform={`rotate(-90, 12, ${PAD.top + plotH / 2})`}>Performance →</text>

            {/* Center crosshair */}
            <line x1={PAD.left + plotW / 2} y1={PAD.top} x2={PAD.left + plotW / 2} y2={PAD.top + plotH} stroke="#1a1a1a" strokeWidth={1} strokeDasharray="4 4" />
            <line x1={PAD.left} y1={PAD.top + plotH / 2} x2={PAD.left + plotW} y2={PAD.top + plotH / 2} stroke="#1a1a1a" strokeWidth={1} strokeDasharray="4 4" />

            {/* Data points */}
            {PRODUCTS.map((p, i) => {
              const cx = PAD.left + (p.x / 100) * plotW
              const cy = PAD.top + (1 - p.y / 100) * plotH
              const r = p.highlight ? 10 : 7
              const isHover = hover === i

              return (
                <g key={i} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)} style={{ cursor: 'pointer' }}>
                  {p.highlight && (
                    <circle cx={cx} cy={cy} r={22} fill={C + '10'} stroke={C + '20'} strokeWidth={1} />
                  )}
                  <circle cx={cx} cy={cy} r={r} fill={p.highlight ? C : '#1a1a1a'} stroke={isHover ? 'white' : p.highlight ? C + '80' : '#2a2a2a'} strokeWidth={isHover ? 1.5 : 1} />
                  {p.graphene && (
                    <text cx={cx} cy={cy} textAnchor="middle" fill="white" fontSize={7} fontFamily="Rajdhani, sans-serif" x={cx} y={cy + 2.5}>G</text>
                  )}
                  <text x={cx + (p.highlight ? 14 : 10)} y={cy - 2} fill={p.highlight ? 'white' : '#555'} fontSize={p.highlight ? 10 : 9} fontFamily="Rajdhani, sans-serif" fontWeight={p.highlight ? 700 : 400}>
                    {p.name}
                  </text>
                  <text x={cx + (p.highlight ? 14 : 10)} y={cy + 10} fill={p.highlight ? C : '#333'} fontSize={8} fontFamily="Inter, sans-serif">
                    {p.brand}
                  </text>

                  {/* Hover tooltip */}
                  {isHover && (
                    <g>
                      <rect x={cx + 16} y={cy - 60} width={160} height={56} rx={4} fill="#0a0a0a" stroke="#2a2a2a" strokeWidth={1} />
                      <text x={cx + 24} y={cy - 42} fill="white" fontSize={11} fontFamily="Rajdhani, sans-serif" fontWeight={700}>{p.name}</text>
                      <text x={cx + 24} y={cy - 28} fill="#555" fontSize={9} fontFamily="Inter, sans-serif">₹{p.price.toLocaleString()} · {p.hardness} · {p.years}yr</text>
                      <text x={cx + 24} y={cy - 14} fill={p.highlight ? C : '#444'} fontSize={9} fontFamily="Inter, sans-serif">
                        ₹{Math.round(p.price / p.years).toLocaleString()}/yr protection cost
                      </text>
                    </g>
                  )}
                </g>
              )
            })}
          </svg>
        </div>

        {/* Legend */}
        <div style={{ marginTop: 20, display: 'flex', gap: 20, flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: C }} />
            <span style={{ color: 'white', fontSize: 11, fontFamily: 'Rajdhani, sans-serif' }}>CERAPHENE</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#1a1a1a', border: '1px solid #2a2a2a' }} />
            <span style={{ color: '#555', fontSize: 11 }}>Competitor</span>
          </div>
          <div style={{ color: '#2a2a2a', fontSize: 10 }}>Hover points for details · Performance = hardness × durability × chemical resistance composite score</div>
        </div>

        {/* Insight box */}
        <div style={{ marginTop: 20, padding: 16, background: '#080808', border: `1px solid ${C}15`, borderRadius: 6, maxWidth: 500 }}>
          <div style={{ color: C, fontSize: 9, letterSpacing: '0.15em', marginBottom: 6 }}>POSITIONING INSIGHT</div>
          <div style={{ color: '#555', fontSize: 12, lineHeight: 1.7 }}>
            CERAPHENE occupies a unique market position: <span style={{ color: 'white' }}>top-tier performance at entry-level price</span>. No competitor sits in this quadrant.
            Graphene enhancement delivers premium hardness (9H+) and anti-static properties that ceramic-only coatings cannot offer — at ₹5,000 vs ₹12,000–18,000 alternatives.
          </div>
        </div>
      </div>
    </div>
  )
}

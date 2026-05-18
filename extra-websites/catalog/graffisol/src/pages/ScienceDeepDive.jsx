import React from 'react'
import { Activity, BarChart3, Sun, ExternalLink, ShieldCheck, Microscope, Layers } from 'lucide-react'
import PageHeader from '../components/shared/PageHeader'
import PageFooter from '../components/shared/PageFooter'

const COLOR = '#f59e0b'
const GREEN = '#10b981'

// ─── CHART 1: Light Transmission (UV-Vis-NIR)
const TRANS_DATA = [
  [200,0,0,0,0],[300,1,1,0,0],[350,36,30,22,10],[380,60,54,46,32],
  [400,74,68,60,48],[450,81,76,70,58],[500,83,79,73,62],[550,84,80,74,63],
  [600,83,79,73,62],[650,83,78,72,61],[700,82,77,71,60],[750,81,77,71,59],
  [800,81,76,70,58],[850,80,76,69,57],[900,79,74,68,56],[950,77,72,66,54],
  [1000,72,68,62,50],[1050,62,58,52,41],[1100,48,44,39,30],[1150,38,34,29,22],[1200,30,26,22,16],
]
const TW = 220, TH = 85
const TPL = 20, TPR = 6, TPT = 5, TPB = 16
function tx(wl) { return TPL + ((wl - 200) / 1000) * (TW - TPL - TPR) }
function ty(p)  { return TPT + (1 - p / 100) * (TH - TPT - TPB) }

function TransChart() {
  const curves = [
    { idx: 1, label: "90°", color: COLOR,     dash: "" },
    { idx: 2, label: "45°", color: "#fb923c", dash: "4,2" },
    { idx: 3, label: "30°", color: "#fcd34d", dash: "6,2" },
    { idx: 4, label: "10°", color: "#9ca3af", dash: "2,3" },
  ]
  return (
    <svg width={TW} height={TH} style={{ display: "block", overflow: "visible", width: '100%', height: 'auto' }} viewBox={`0 0 ${TW} ${TH}`}>
      {[0, 25, 50, 75, 100].map(p => (
        <g key={p}>
          <line x1={TPL} x2={TW - TPR} y1={ty(p)} y2={ty(p)} stroke="rgba(255,255,255,0.1)" strokeWidth={0.5} />
          <text x={TPL - 3} y={ty(p) + 2} fontSize={5} fill="#6b7280" textAnchor="end" fontFamily="Inter">{p}</text>
        </g>
      ))}
      {[400,600,800,1000,1200].map(wl => (
        <text key={wl} x={tx(wl)} y={TH - 3} fontSize={5} fill="#6b7280" textAnchor="middle" fontFamily="Inter">{wl}</text>
      ))}
      <text x={TPL + (TW - TPL - TPR) / 2} y={TH + 3} fontSize={5} fill="#9ca3af" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight={600}>Wavelength (nm)</text>
      <text x={4} y={TH / 2} fontSize={5} fill="#9ca3af" textAnchor="middle" transform={`rotate(-90,4,${TH / 2})`} fontFamily="Inter, sans-serif" fontWeight={600}>Transmission (%)</text>
      
      <rect x={tx(400)} y={TPT} width={tx(900) - tx(400)} height={TH - TPT - TPB} fill={`${COLOR}15`} />
      
      {curves.map(({ idx, color, dash }) => (
        <polyline key={idx}
          points={TRANS_DATA.map(d => `${tx(d[0])},${ty(d[idx])}`).join(" ")}
          fill="none" stroke={color} strokeWidth={1.2} strokeDasharray={dash} />
      ))}
      {curves.map(({ label, color, dash }, i) => (
        <g key={label} transform={`translate(${TW - 32}, ${TPT + i * 8})`}>
          <line x1={0} y1={2} x2={8} y2={2} stroke={color} strokeWidth={1.2} strokeDasharray={dash} />
          <text x={11} y={4} fontSize={4.5} fill="#d1d5db" fontFamily="Inter, sans-serif" fontWeight={600}>{label}</text>
        </g>
      ))}
      <text x={tx(650)} y={ty(90)} fontSize={4.5} fill={COLOR} textAnchor="middle" fontFamily="Inter" fontWeight={600}>PV active band (400–900 nm)</text>
    </svg>
  )
}

// ─── CHART 2: String Current Comparison
const STRINGS = [
  { id: "S1", label: "String 1", amp: 5.93, coated: true },
  { id: "S4", label: "String 4", amp: 6.31, coated: true },
  { id: "S2", label: "String 2", amp: 4.44, coated: false },
  { id: "S5", label: "String 5", amp: 4.18, coated: false },
]
const SW = 220, SMAX = 7, SBH = 12, SGAP = 6, SPL = 36, SPR = 35

function StringChart() {
  const TH = STRINGS.length * (SBH + SGAP) + 5
  return (
    <svg width={SW} height={TH} style={{ display: "block", width: '100%', height: 'auto' }} viewBox={`0 0 ${SW} ${TH}`}>
      {STRINGS.map((s, i) => {
        const y = i * (SBH + SGAP) + 2
        const bw = (s.amp / SMAX) * (SW - SPL - SPR)
        return (
          <g key={s.id}>
            <text x={SPL - 5} y={y + SBH - 3.5} fontSize={5.5} fill="#d1d5db" textAnchor="end" fontFamily="Inter, sans-serif" fontWeight={600}>{s.label}</text>
            <rect x={SPL} y={y} width={SW - SPL - SPR} height={SBH} fill="rgba(255,255,255,0.05)" rx={3} />
            <rect x={SPL} y={y} width={bw} height={SBH} fill={s.coated ? COLOR : '#4b5563'} rx={3} />
            <text x={SPL + bw + 4} y={y + SBH - 3.5} fontSize={6.5} fill={s.coated ? COLOR : "#9ca3af"} fontFamily="Outfit, sans-serif" fontWeight={700}>{s.amp} A</text>
            {s.coated && (
              <text x={SPL + bw - 5} y={y + SBH - 4} fontSize={4.5} fill="#111827" textAnchor="end" fontFamily="Outfit, sans-serif" fontWeight={800}>COATED</text>
            )}
          </g>
        )
      })}
    </svg>
  )
}

// ─── CHART 3: Power Output by Time
const POWER_DATA = [
  { period: "Morning", uncoated: 1.9, coated: 2.6 },
  { period: "Afternoon", uncoated: 4.3, coated: 5.0 },
  { period: "Evening", uncoated: 1.0, coated: 1.2 },
]
const PW = 220, PH = 85, PMAX = 5.5, PPL = 20, PPB = 16, PPT = 6, PPR = 6
const PBGAP = 3, PBWIDTH = 22

function PowerChart() {
  const groupW = (PW - PPL - PPR) / POWER_DATA.length
  return (
    <svg width={PW} height={PH} style={{ display: "block", width: '100%', height: 'auto' }} viewBox={`0 0 ${PW} ${PH}`}>
      {[0, 1, 2, 3, 4, 5].map(v => {
        const y = PPT + (1 - v / PMAX) * (PH - PPT - PPB)
        return (
          <g key={v}>
            <line x1={PPL} x2={PW - PPR} y1={y} y2={y} stroke="rgba(255,255,255,0.1)" strokeWidth={0.5} />
            <text x={PPL - 3} y={y + 2} fontSize={5} fill="#6b7280" textAnchor="end" fontFamily="Inter">{v}</text>
          </g>
        )
      })}
      {POWER_DATA.map((d, i) => {
        const cx = PPL + i * groupW + groupW / 2
        const barArea = groupW - PBGAP * 2
        const bw = (barArea - PBGAP) / 2
        const x1 = cx - PBGAP / 2 - bw
        const x2 = cx + PBGAP / 2
        const h1 = (d.uncoated / PMAX) * (PH - PPT - PPB)
        const h2 = (d.coated   / PMAX) * (PH - PPT - PPB)
        const y1 = PPT + (PH - PPT - PPB) - h1
        const y2 = PPT + (PH - PPT - PPB) - h2
        return (
          <g key={d.period}>
            <rect x={x1} y={y1} width={bw} height={h1} fill="#4b5563" rx={1.5} />
            <rect x={x2} y={y2} width={bw} height={h2} fill={COLOR} rx={1.5} />
            <text x={cx} y={PH - 4} fontSize={5.5} fill="#d1d5db" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight={600}>{d.period}</text>
            <text x={x1 + bw/2} y={y1 - 3} fontSize={5} fill="#9ca3af" textAnchor="middle" fontFamily="Outfit, sans-serif" fontWeight={700}>{d.uncoated}</text>
            <text x={x2 + bw/2} y={y2 - 3} fontSize={5} fill={COLOR} textAnchor="middle" fontFamily="Outfit, sans-serif" fontWeight={700}>{d.coated}</text>
          </g>
        )
      })}
      <text x={6} y={PH/2} fontSize={5} fill="#9ca3af" textAnchor="middle" transform={`rotate(-90,6,${PH/2})`} fontFamily="Inter, sans-serif" fontWeight={600}>Power (kW)</text>
      
      {/* Legend */}
      <rect x={PW - 48} y={PPT} width={6} height={4} fill="#4b5563" rx={1} />
      <text x={PW - 39} y={PPT + 3.5} fontSize={4.5} fill="#9ca3af" fontFamily="Inter, sans-serif" fontWeight={500}>Non-Coated</text>
      <rect x={PW - 20} y={PPT} width={6} height={4} fill={COLOR} rx={1} />
      <text x={PW - 11} y={PPT + 3.5} fontSize={4.5} fill={COLOR} fontFamily="Inter, sans-serif"  fontWeight={600}>Coated</text>
    </svg>
  )
}

// ─── CHART 4: % Improvement by Time Period
const IMP_DATA = [
  { period: "Morning",   pct: 33, lo: 30, hi: 35 },
  { period: "Afternoon", pct: 10, lo: 5,  hi: 15 },
  { period: "Evening",   pct: 20, lo: 16, hi: 24 },
]
const IW = 220, IH = 85, IMAX = 40, IPL = 20, IPB = 16, IPT = 6, IPR = 6
const IBWIDTH = 30

function ImprovementChart() {
  const groupW = (IW - IPL - IPR) / IMP_DATA.length
  return (
    <svg width={IW} height={IH} style={{ display: "block", width: '100%', height: 'auto' }} viewBox={`0 0 ${IW} ${IH}`}>
      {[0, 10, 20, 30, 40].map(v => {
        const y = IPT + (1 - v / IMAX) * (IH - IPT - IPB)
        return (
          <g key={v}>
            <line x1={IPL} x2={IW - IPR} y1={y} y2={y} stroke="rgba(255,255,255,0.1)" strokeWidth={0.5} />
            <text x={IPL - 3} y={y + 2} fontSize={5} fill="#6b7280" textAnchor="end" fontFamily="Inter">{v}%</text>
          </g>
        )
      })}
      
      <line x1={IPL} x2={IW - IPR} y1={IPT + (1 - 0/IMAX)*(IH-IPT-IPB)} y2={IPT + (1-0/IMAX)*(IH-IPT-IPB)} stroke="#94a3b8" strokeWidth={0.7} strokeDasharray="4,2" />
      
      {IMP_DATA.map((d, i) => {
        const cx = IPL + i * groupW + groupW / 2
        const bh = (d.pct / IMAX) * (IH - IPT - IPB)
        const bx = cx - IBWIDTH / 2
        const by = IPT + (IH - IPT - IPB) - bh
        const yLo = IPT + (1 - d.lo / IMAX) * (IH - IPT - IPB)
        const yHi = IPT + (1 - d.hi / IMAX) * (IH - IPT - IPB)
        return (
          <g key={d.period}>
            <rect x={bx} y={by} width={IBWIDTH} height={bh} fill={GREEN} rx={3} opacity={0.2} stroke={GREEN} strokeWidth={0.5} />
            <rect x={bx} y={yLo} width={IBWIDTH} height={yHi - yLo} fill={GREEN} rx={1} opacity={0.8} />
            <text x={cx} y={yHi - 4} fontSize={7} fill="#fff" textAnchor="middle" fontFamily="Outfit, sans-serif" fontWeight={800}>{d.pct}%</text>
            <text x={cx} y={IH - 4} fontSize={5.5} fill="#d1d5db" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight={600}>{d.period}</text>
          </g>
        )
      })}
      <text x={6} y={IH/2} fontSize={5} fill="#9ca3af" textAnchor="middle" transform={`rotate(-90,6,${IH/2})`} fontFamily="Inter, sans-serif" fontWeight={600}>Improvement (%)</text>
    </svg>
  )
}

export default function GraffisolScienceDeepDive() {
  return (
    <div className="page catalog-page-dark page-break" style={{ display: "flex", flexDirection: "column", '--dark-bg-img': "url('/images/graffisol_lifecycle_lab_testing.png')" }}>
      <PageHeader product="GRAFFISOL" title="Science Deep Dive" pageNum="14" color={COLOR} dark />

      <div style={{ flex: 1, display: "flex", gap: 0, minHeight: 0, padding: '24px' }}>

        {/* Left column — 50% */}
        <div style={{ width: "50%", paddingRight: "24px", display: "flex", flexDirection: "column", gap: 20 }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Microscope size={22} color={COLOR} />
            <div style={{ fontFamily: "Outfit, sans-serif", fontSize: 16, fontWeight: 700, color: "#fff", letterSpacing: 1, textTransform: "uppercase" }}>
              Photovoltaic Enhancement
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              {
                icon: Sun,
                label: "Anti-Reflective Optical Layer",
                rows: [
                  ["Baseline Loss", "Standard glass reflects 4% of incident light (Fresnel, n=1.5). ~1.8–2.4% extra irradiance recovered via GNP gradient layer (n≈1.2)."],
                  ["PV Band", "Effective 400–900 nm — independent lab UV-Vis-NIR confirms 80–85% transmission across all tested incident angles (10°–90°)."],
                ]
              },
              {
                icon: Activity,
                label: "Thermal Management (GNP Emissivity)",
                rows: [
                  ["GNP Action", "IR emissivity ε ≈ 0.96–0.98. Accelerates mid-IR re-emission; lateral conduction (500× vs glass) eliminates hot spots."],
                  ["Recovery", "5–6°C panel temp reduction → +2.25–2.7% efficiency (−0.45%/°C silicon coefficient)."],
                ]
              },
              {
                icon: Layers,
                label: "Superhydrophobicity (Surface Energy)",
                rows: [
                  ["Surface", "18–22 mJ/m² vs 70–75 mJ/m² bare glass. Contact angle >110° — rain droplets encapsulate and remove dust on roll-off."],
                  ["Field Result", "30–40% fewer g/m² deposited/day (gravimetric, Jodhpur). Soiling recovery time 1.2h vs 4.8h uncoated."],
                ]
              },
            ].map(panel => (
              <div key={panel.label} style={{ background: 'rgba(255,255,255,0.03)', border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "16px", boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: `${COLOR}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <panel.icon size={16} color={COLOR} />
                  </div>
                  <div style={{ fontFamily: "Outfit, sans-serif", fontSize: 13, fontWeight: 700, color: '#fff', letterSpacing: 0.5 }}>
                    {panel.label}
                  </div>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {panel.rows.map(([k, v]) => (
                    <div key={k} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                      <span style={{ fontFamily: "Outfit, sans-serif", fontSize: 9.5, fontWeight: 700, color: '#9ca3af', textTransform: "uppercase", width: 85, flexShrink: 0, paddingTop: 1 }}>{k}</span>
                      <span style={{ fontFamily: "Inter, sans-serif", fontSize: 10, color: "#e5e7eb", lineHeight: 1.5 }}>{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "16px", boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
            <div style={{ fontFamily: "Outfit, sans-serif", fontSize: 11, fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 12 }}>
              Light Transmission at Incident Angles (UV-Vis-NIR)
            </div>
            <TransChart />
          </div>
        </div>

        {/* Right column — 50% */}
        <div style={{ width: "50%", paddingLeft: "24px", borderLeft: '1px solid rgba(255,255,255,0.08)', display: "flex", flexDirection: "column", gap: 16 }}>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
            <BarChart3 size={22} color={COLOR} />
            <div style={{ fontFamily: "Outfit, sans-serif", fontSize: 16, fontWeight: 700, color: "#fff", letterSpacing: 1, textTransform: "uppercase" }}>
              Field Measurement Data
            </div>
          </div>

          {/* String Current Chart */}
          <div style={{ background: 'rgba(255,255,255,0.03)', border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "16px 20px", boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
            <div style={{ fontFamily: "Outfit, sans-serif", fontSize: 11, fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 16 }}>
              String Current (AM1.5G, 1000 W/m²)
            </div>
            <StringChart />
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 9, color: "#9ca3af", marginTop: 12, borderTop: '1px dashed rgba(255,255,255,0.1)', paddingTop: 8 }}>
              Strings 3 &amp; 6 excluded (shaded/disconnected during test)
            </div>
          </div>

          <div style={{ display: 'flex', gap: 16 }}>
            {/* Power Output Chart */}
            <div style={{ flex: 1, background: 'rgba(255,255,255,0.03)', border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "16px", boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
              <div style={{ fontFamily: "Outfit, sans-serif", fontSize: 10, fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 16 }}>
                Power Output by Period
              </div>
              <PowerChart />
            </div>

            {/* Improvement Chart */}
            <div style={{ flex: 1, background: 'rgba(255,255,255,0.03)', border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "16px", boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
              <div style={{ fontFamily: "Outfit, sans-serif", fontSize: 10, fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 16 }}>
                % Improvement vs Uncoated
              </div>
              <ImprovementChart />
            </div>
          </div>

          {/* Certification callout */}
          <div style={{ marginTop: "auto", background: `linear-gradient(135deg, ${COLOR}, #d97706)`, borderRadius: 12, padding: "20px", color: '#fff', boxShadow: `0 10px 15px -3px ${COLOR}40`, display: 'flex', gap: 16, alignItems: 'center' }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <ShieldCheck size={26} color="#ffffff" />
            </div>
            <div>
              <div style={{ fontFamily: "Outfit, sans-serif", fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>
                Third-Party Lab Certified
              </div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 9.5, color: "rgba(255,255,255,0.9)", lineHeight: 1.5 }}>
                IV Curve Tracer · AM1.5G 1000 W/m² · 7-day outdoor + 50-week field study · ASTM D3359 adhesion (5B) · QUV 500h weathering. Full report available under NDA.
              </div>
            </div>
          </div>
        </div>
      </div>

      <PageFooter color={COLOR} dark />
    </div>
  )
}

import React from 'react'

const C = '#f59e0b'

const systemSizes = [
  { size: "100 kW",   baseline: "1,50,000 kWh",     gain: "+16,500 kWh",     revenue: "Rs.66,000",      payback: "14 months", highlight: false },
  { size: "500 kW",   baseline: "7,50,000 kWh",     gain: "+82,500 kWh",     revenue: "Rs.3,30,000",    payback: "14 months", highlight: false },
  { size: "1 MW",     baseline: "15,00,000 kWh",    gain: "+1,65,000 kWh",   revenue: "Rs.6,60,000",    payback: "14 months", highlight: false },
  { size: "10 MW",    baseline: "1,50,00,000 kWh",  gain: "+16,50,000 kWh",  revenue: "Rs.66,00,000",   payback: "14 months", highlight: true  },
]

const waterfallRows = [
  { label: "Coating cost (1 MW)",        value: "Rs.7,80,000",      color: "#ef4444", note: "" },
  { label: "Annual revenue gain",        value: "+Rs.6,60,000",     color: "#4ade80", note: "at Rs.4.0/kWh" },
  { label: "Payback period",             value: "14.2 months",      color: C,         note: "" },
  { label: "Year 2-5 net gain",          value: "Rs.26,40,000",     color: "#4ade80", note: "4 seasons post-payback" },
  { label: "Year 2-20 gross gain",       value: "Rs.1,18,80,000",   color: "#4ade80", note: "without recoat" },
  { label: "Recoat at year 4",           value: "-Rs.7,80,000",     color: "#ef4444", note: "single recoat assumed" },
  { label: "Net 20-year gain",           value: "Rs.1,11,00,000",   color: "#4ade80", note: "after all costs" },
  { label: "ROI over 20 years",          value: "14.2x return",     color: "#fff",    note: "on coating investment" },
]

const yearBars = [
  { yr: "Year 1", cum: "Rs.6.6L",  val: 6.6 },
  { yr: "Year 2", cum: "Rs.13.2L", val: 13.2 },
  { yr: "Year 3", cum: "Rs.19.8L", val: 19.8 },
  { yr: "Year 4", cum: "Rs.26.4L", val: 26.4 },
  { yr: "Year 5", cum: "Rs.33.0L", val: 33.0 },
]
const MAX_BAR = 33.0

const energyBenefits = [
  {
    icon: "T",
    title: "Temperature Reduction (5-6 deg C)",
    body: "Recovers 2.25-2.7% efficiency based on -0.45%/deg C temperature coefficient of standard silicon panels.",
  },
  {
    icon: "S",
    title: "Anti-Soiling (30-40% reduction)",
    body: "Recovers 3-5% output during soiling events. Extends effective cleaning interval by 4-6 weeks.",
  },
  {
    icon: "R",
    title: "Anti-Reflective Layer",
    body: "+1.8-2.4% irradiance captured at surface due to reduced Fresnel reflection losses.",
  },
]

export default function SolEnergyPayback() {
  return (
    <div style={{ background: "#050505", fontFamily: "Inter, sans-serif", padding: "40px", maxWidth: 900, margin: "0 auto" }}>

      {/* Header */}
      <div style={{ marginBottom: 28, borderBottom: "1px solid #1f1f1f", paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: "uppercase" }}>MONOATOM LABS · GRAFFISOL</div>
        <div style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 40, fontWeight: 700, color: "#fff", letterSpacing: 2 }}>ENERGY PAYBACK</div>
        <div style={{ color: "#64748b", fontSize: 13, marginTop: 4 }}>Solar Panel Coating · Financial & Energy Return Analysis</div>
      </div>

      {/* Section 1: Revenue Gain Table */}
      <div style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 24, marginBottom: 24 }}>
        <div style={{ color: C, fontSize: 11, letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>Revenue Gain vs System Size</div>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              {["System Size", "Baseline Output/yr", "GRAFFISOL Gain", "Annual Revenue Gain", "Payback Period"].map((h, i) => (
                <th key={i} style={{ textAlign: i === 0 ? "left" : "right", padding: "8px 12px", color: "#475569", fontSize: 10, letterSpacing: 1, textTransform: "uppercase", borderBottom: "1px solid #1f1f1f", fontWeight: 600 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {systemSizes.map((row, i) => (
              <tr key={i} style={{ background: row.highlight ? "#1a1000" : i % 2 === 0 ? "#0d0d0d" : "transparent", border: row.highlight ? `1px solid ${C}44` : "none" }}>
                <td style={{ padding: "10px 12px", fontFamily: "Rajdhani, sans-serif", fontSize: 15, fontWeight: 700, color: row.highlight ? C : "#e2e8f0" }}>{row.size}</td>
                <td style={{ padding: "10px 12px", textAlign: "right", color: "#94a3b8", fontSize: 12 }}>{row.baseline}</td>
                <td style={{ padding: "10px 12px", textAlign: "right", color: "#4ade80", fontSize: 12, fontWeight: 600 }}>{row.gain}</td>
                <td style={{ padding: "10px 12px", textAlign: "right", color: row.highlight ? C : "#e2e8f0", fontSize: 13, fontWeight: row.highlight ? 700 : 400 }}>{row.revenue}</td>
                <td style={{ padding: "10px 12px", textAlign: "right", color: "#60a5fa", fontSize: 12 }}>{row.payback}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ marginTop: 10, color: "#334155", fontSize: 10 }}>Revenue at Rs.4.0/kWh. 10 MW row highlighted.</div>
      </div>

      {/* Section 2: Payback Calculation */}
      <div style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 24, marginBottom: 24 }}>
        <div style={{ color: C, fontSize: 11, letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>Payback Calculation — 1 MW Example</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {waterfallRows.map((r, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 16px", background: "#0d0d0d", borderRadius: 7, border: "1px solid #1a1a1a" }}>
              <div>
                <span style={{ color: "#cbd5e1", fontSize: 12 }}>{r.label}</span>
                {r.note ? <span style={{ color: "#475569", fontSize: 10, marginLeft: 10 }}>{r.note}</span> : null}
              </div>
              <span style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 16, fontWeight: 700, color: r.color }}>{r.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3: Cumulative Revenue Gain Bars */}
      <div style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 24, marginBottom: 24 }}>
        <div style={{ color: C, fontSize: 11, letterSpacing: 3, textTransform: "uppercase", marginBottom: 20 }}>Cumulative Revenue Gain — 1 MW</div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 12, height: 140 }}>
          {yearBars.map((b, i) => {
            const barH = (b.val / MAX_BAR) * 120
            return (
              <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                <div style={{ fontSize: 10, color: "#4ade80", fontWeight: 600, whiteSpace: "nowrap" }}>{b.cum}</div>
                <div style={{ width: "100%", height: barH, background: C, borderRadius: "5px 5px 0 0", boxShadow: `0 0 10px ${C}44`, position: "relative" }}>
                  {i === 0 && (
                    <div style={{ position: "absolute", top: -22, right: -30, fontSize: 9, color: "#60a5fa", whiteSpace: "nowrap", fontWeight: 600 }}>Payback ~14mo</div>
                  )}
                </div>
                <div style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 12, color: "#64748b" }}>{b.yr}</div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Section 4: Additional Energy Benefits */}
      <div style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 24, marginBottom: 24 }}>
        <div style={{ color: C, fontSize: 11, letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>Additional Energy Benefits</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
          {energyBenefits.map((b, i) => (
            <div key={i} style={{ background: "#0d0d0d", border: `1px solid ${C}33`, borderRadius: 10, padding: 18 }}>
              <div style={{ width: 28, height: 28, borderRadius: "50%", background: C, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
                <span style={{ color: "#000", fontSize: 12, fontWeight: 700 }}>{b.icon}</span>
              </div>
              <div style={{ color: "#e2e8f0", fontSize: 12, fontWeight: 600, marginBottom: 8 }}>{b.title}</div>
              <div style={{ color: "#64748b", fontSize: 11, lineHeight: 1.6 }}>{b.body}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ color: "#334155", fontSize: 10, letterSpacing: 1, textAlign: "right" }}>
        Revenue projections at Rs.4.0/kWh PPA rate. 10+ year coated field data from Jodhpur (GHI 6.5 kWh/m2/day) and Kutch sites.
      </div>
    </div>
  )
}

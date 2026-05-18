import React from "react"

const C = "#64748b"

const panelTemps = [
  { label: "Uncoated Clearcoat", temp: 68, delta: null, highlight: false },
  { label: "Standard Ceramic", temp: 62, delta: null, highlight: false },
  { label: "CERAPHENE", temp: 56, delta: "-12\u00b0C vs uncoated", highlight: true },
]

const MAX_TEMP = 80

const mechanisms = [
  {
    num: "01",
    title: "Paint Fade Mechanism",
    detail: "UV + heat causes polymer chain scission in clearcoat above 60\u00b0C. CERAPHENE keeps panel below the critical threshold, preventing accelerated oxidation.",
  },
  {
    num: "02",
    title: "Wax / Sealant Degradation",
    detail: "Polymer sealants soften at 55\u201365\u00b0C, migrating off the surface. CERAPHENE Si-O network is stable to 200\u00b0C with no softening or migration.",
  },
  {
    num: "03",
    title: "IR Reflectance via GNP",
    detail: "GNP acts as a near-perfect IR reflector with absorptance below 5% above 780 nm. Radiant heat is dispersed laterally across the panel rather than absorbed.",
  },
]

const gnpProps = [
  { label: "In-Plane Conductivity", value: "~2000 W/mK", sub: "Highest of any known material" },
  { label: "Heat Resistance (sustained)", value: "200\u00b0C", sub: "No softening or delamination" },
  { label: "IR Reflectance", value: ">95%", sub: "Above 780 nm wavelength" },
  { label: "Coeff. Thermal Expansion", value: "6\u00d710\u207b\u2076/K", sub: "Matched to clearcoat — no delamination" },
]

const outcomeStats = [
  { value: "70%", label: "Reduction in paint oxidation rate", sub: "Over 4 years tracked" },
  { value: "4+ yrs", label: "Clearcoat lifespan confirmed", sub: "Reference vehicles tracked" },
]

export default function CerThermalManagement() {
  return (
    <div style={{ background: "#050505", fontFamily: "Inter, sans-serif", padding: "40px", maxWidth: 900, margin: "0 auto" }}>

      {/* Header */}
      <div style={{ marginBottom: 28, borderBottom: "1px solid #1f1f1f", paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: "uppercase" }}>
          MONOATOM LABS · CERAPHENE
        </div>
        <div style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 48, fontWeight: 700, color: "#fff", letterSpacing: 2, lineHeight: 1 }}>
          THERMAL MANAGEMENT
        </div>
        <div style={{ color: "#64748b", fontSize: 13, marginTop: 8 }}>
          Graphene-Enhanced Ceramic Coating · GNP Thermal Barrier & IR Reflectance Data
        </div>
      </div>

      {/* Section 1 — Panel Temperature Comparison */}
      <div style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 24, marginBottom: 20 }}>
        <div style={{ color: "#64748b", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", marginBottom: 6 }}>
          Panel Temperature Comparison
        </div>
        <div style={{ color: "#475569", fontSize: 11, marginBottom: 20 }}>Peak summer, direct sun — thermocouple measurement</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {panelTemps.map((panel, i) => {
            const barHeight = Math.round((panel.temp / MAX_TEMP) * 120)
            return (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
                <div style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 48, fontWeight: 700, color: panel.highlight ? C : "#475569", lineHeight: 1 }}>
                  {panel.temp}\u00b0C
                </div>
                {/* Thermometer bar */}
                <div style={{ width: 40, height: 130, background: "#0d0d0d", borderRadius: 20, border: "1px solid #1f1f1f", position: "relative", overflow: "hidden", flexShrink: 0 }}>
                  <div style={{
                    position: "absolute", bottom: 0, left: 0, right: 0,
                    height: `${barHeight}px`,
                    background: panel.highlight ? C : "#2a2a2a",
                    borderRadius: "0 0 20px 20px",
                    transition: "height 0.3s",
                  }} />
                </div>
                <div style={{ color: panel.highlight ? "#e2e8f0" : "#64748b", fontSize: 12, fontWeight: panel.highlight ? 700 : 400, textAlign: "center" }}>
                  {panel.label}
                </div>
                {panel.delta && (
                  <div style={{
                    background: "#0d1a2a", border: `1px solid ${C}`,
                    color: C, fontSize: 10, fontWeight: 700, padding: "3px 10px", borderRadius: 20, letterSpacing: 0.5,
                  }}>
                    {panel.delta}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Section 2 — Why Temperature Matters */}
      <div style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 24, marginBottom: 20 }}>
        <div style={{ color: "#64748b", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", marginBottom: 20 }}>
          Why Temperature Matters
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {mechanisms.map((m, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "flex-start", gap: 16,
              background: "#0d0d0d", border: "1px solid #1f1f1f", borderRadius: 8, padding: 16,
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: "50%", background: "#0d1a2a",
                border: `2px solid ${C}`, flexShrink: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 13, fontWeight: 700, color: C }}>{m.num}</span>
              </div>
              <div>
                <div style={{ color: "#e2e8f0", fontSize: 13, fontWeight: 700, marginBottom: 4 }}>{m.title}</div>
                <div style={{ color: "#94a3b8", fontSize: 12, lineHeight: 1.6 }}>{m.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3 — GNP Thermal Properties */}
      <div style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 24, marginBottom: 20 }}>
        <div style={{ color: "#64748b", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>
          GNP Thermal Properties
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 }}>
          {gnpProps.map((prop, i) => (
            <div key={i} style={{ background: "#0d0d0d", border: "1px solid #1f1f1f", borderRadius: 10, padding: 18 }}>
              <div style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 36, fontWeight: 700, color: C, lineHeight: 1, marginBottom: 6 }}>
                {prop.value}
              </div>
              <div style={{ color: "#e2e8f0", fontSize: 13, fontWeight: 600, marginBottom: 4 }}>{prop.label}</div>
              <div style={{ color: "#475569", fontSize: 11 }}>{prop.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 4 — Outcome Data */}
      <div style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 24, marginBottom: 20 }}>
        <div style={{ color: "#64748b", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>
          Outcome Data
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 }}>
          {outcomeStats.map((s, i) => (
            <div key={i} style={{ background: "#0d0d0d", border: "1px solid #1f1f1f", borderRadius: 10, padding: 22, textAlign: "center" }}>
              <div style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 52, fontWeight: 700, color: C, lineHeight: 1, marginBottom: 8 }}>
                {s.value}
              </div>
              <div style={{ color: "#e2e8f0", fontSize: 13, fontWeight: 600, marginBottom: 4 }}>{s.label}</div>
              <div style={{ color: "#475569", fontSize: 11 }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div style={{ color: "#374151", fontSize: 10, lineHeight: 1.6, maxWidth: 620 }}>
          Temperature data from thermocouple measurements on identical vehicles (Maruti Baleno, silver, Pune, June, 12:00 noon). GNP thermal data: literature values.
        </div>
        <div style={{ color: "#333", fontSize: 10, letterSpacing: 2, flexShrink: 0 }}>MONOATOM LABS · CERAPHENE · THERMAL</div>
      </div>

    </div>
  )
}

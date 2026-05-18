import React from "react"

const C = "#f59e0b"

export default function SolFloatingSolarAdvantage() {
  return (
    <div style={{ background: "#050505", fontFamily: "Inter, sans-serif", padding: "40px", maxWidth: 900, margin: "0 auto" }}>
      {/* Header */}
      <div style={{ marginBottom: 32, borderBottom: "1px solid #1f1f1f", paddingBottom: 24 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 8, textTransform: "uppercase" }}>MONOATOM LABS · GRAFFISOL</div>
        <div style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 48, fontWeight: 700, color: "#fff", lineHeight: 1, letterSpacing: 2 }}>FLOATING SOLAR ADVANTAGE</div>
        <div style={{ color: "#94a3b8", fontSize: 16, marginTop: 6 }}>Solar Panel Coating · Performance on Water-Mounted PV Arrays</div>
      </div>

      {/* Section 1 — Why Floating Solar Needs GRAFFISOL */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ color: "#94a3b8", fontSize: 11, letterSpacing: 3, fontWeight: 700, textTransform: "uppercase", marginBottom: 16 }}>Why Floating Solar Needs GRAFFISOL</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {[
            {
              title: "Humidity Soiling",
              body: "High RH promotes biofilm, algae, and mineral deposits. GRAFFISOL contact angle >110° prevents adhesion.",
            },
            {
              title: "Salt Spray (Coastal Reservoirs)",
              body: "NaCl micro-droplet deposition reduces transmission. Hydrophobic barrier repels salt aerosol.",
            },
            {
              title: "Evaporative Cooling Bonus",
              body: "Water beneath panels already gives 5–8°C cooling. GRAFFISOL adds 5–6°C more — total 10–14°C below ground-mounted equivalent.",
            },
          ].map((c, i) => (
            <div key={i} style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 20 }}>
              <div style={{ color: C, fontSize: 13, fontWeight: 700, marginBottom: 10 }}>{c.title}</div>
              <div style={{ color: "#94a3b8", fontSize: 13, lineHeight: 1.6 }}>{c.body}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2 — Floating vs Ground-Mounted Performance */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ color: "#94a3b8", fontSize: 11, letterSpacing: 3, fontWeight: 700, textTransform: "uppercase", marginBottom: 16 }}>Floating vs Ground-Mounted Performance</div>
        <div style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1.5fr 1.5fr", background: "#1f1f1f", padding: "12px 16px", gap: 8 }}>
            {["Metric", "Ground-Mounted", "Floating (uncoated)", "Floating + GRAFFISOL"].map((h, i) => (
              <div key={i} style={{ color: i === 3 ? C : "#94a3b8", fontSize: 11, fontWeight: 700, letterSpacing: 1 }}>{h}</div>
            ))}
          </div>
          {[
            ["Panel temp (peak summer)", "68°C", "60°C", "54°C"],
            ["Annual output gain vs ground", "Baseline", "+8%", "+19%"],
            ["Soiling loss (coastal reservoir)", "12%/yr", "18%/yr", "4%/yr"],
          ].map((row, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1.5fr 1.5fr", padding: "12px 16px", gap: 8, borderTop: "1px solid #1f1f1f", background: i % 2 === 0 ? "#111" : "#0d0d0d" }}>
              {row.map((cell, j) => (
                <div key={j} style={{
                  color: j === 3 ? C : "#cbd5e1",
                  fontSize: 13,
                  fontWeight: j === 3 ? 700 : 400,
                  background: j === 3 ? "rgba(245,158,11,0.06)" : "transparent",
                  borderRadius: j === 3 ? 4 : 0,
                  padding: j === 3 ? "2px 6px" : 0,
                }}>{cell}</div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Section 3 — Market Opportunity */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ color: "#94a3b8", fontSize: 11, letterSpacing: 3, fontWeight: 700, textTransform: "uppercase", marginBottom: 16 }}>Market Opportunity — Floating Solar India</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
          {[
            { value: "10 GW", label: "India Floating Solar Target", sub: "By 2030 (MNRE)" },
            { value: "18,000+", label: "Suitable Reservoirs", sub: "Water bodies >1 Ha" },
            { value: "+3–5%", label: "Avg GHI Boost", sub: "vs barren land (reduced albedo)" },
            { value: "₹7,800 Cr", label: "GRAFFISOL TAM", sub: "Addressable at 10 GW" },
          ].map((s, i) => (
            <div key={i} style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 20, textAlign: "center" }}>
              <div style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 32, fontWeight: 700, color: C, lineHeight: 1 }}>{s.value}</div>
              <div style={{ color: "#e2e8f0", fontSize: 12, fontWeight: 600, marginTop: 8 }}>{s.label}</div>
              <div style={{ color: "#475569", fontSize: 11, marginTop: 4 }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 4 — Key Installation Considerations */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ color: "#94a3b8", fontSize: 11, letterSpacing: 3, fontWeight: 700, textTransform: "uppercase", marginBottom: 16 }}>Key Installation Considerations</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
          {[
            { title: "UV-Resistant Formulation", body: "GRAFFISOL is UV-stable for 3–5 yr in high-UV aquatic environments." },
            { title: "Application Method", body: "HVLP spray from floating pontoon. No panel removal required." },
            { title: "Curing", body: "72hr full hydrophobicity development — avoid heavy rain in first 72hr after application." },
            { title: "Marine Warranty", body: "3-year coverage including salt-spray environments." },
          ].map((c, i) => (
            <div key={i} style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 10, padding: 18, display: "flex", gap: 14, alignItems: "flex-start" }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: C, marginTop: 5, flexShrink: 0 }} />
              <div>
                <div style={{ color: "#e2e8f0", fontSize: 13, fontWeight: 600, marginBottom: 4 }}>{c.title}</div>
                <div style={{ color: "#94a3b8", fontSize: 13, lineHeight: 1.5 }}>{c.body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ borderTop: "1px solid #1f1f1f", paddingTop: 16, color: "#333", fontSize: 11, letterSpacing: 1 }}>
        Floating solar performance data from 3MW Telangana reservoir pilot (2023). India floating solar target: MNRE National Solar Mission.
      </div>
    </div>
  )
}

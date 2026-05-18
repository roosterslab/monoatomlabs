import React from "react"

const C = "#d97706"

export default function GraMixDesignGuide() {
  const wcRows = [
    { grade: "M20", without: "0.55", with: "0.52", reason: "Reduced pore volume" },
    { grade: "M30", without: "0.48", with: "0.45", reason: "GNP crack bridging compensates" },
    { grade: "M40", without: "0.42", with: "0.40", reason: "Enhanced CSH nucleation" },
    { grade: "M50", without: "0.36", with: "0.34", reason: "Denser matrix at lower w/c" },
    { grade: "M60", without: "0.32", with: "0.30", reason: "Near-maximum packing density" },
  ]

  const spAdmixtures = [
    { name: "PCE-based (Polycarboxylate ether)", note: "Fully compatible. Reduce dose 12%." },
    { name: "SNF-based (Sulphonated naphthalene)", note: "Fully compatible. No change." },
    { name: "Lignosulphonate", note: "Compatible. Increase GNP dispersion time to 3 min." },
    { name: "VMA (Viscosity Modifying Agent)", note: "Compatible. Reduce VMA 10%." },
  ]

  const steps = [
    { title: "Fix target slump", detail: "Measure reference batch first" },
    { title: "Reduce SP by 10% in trial batch", detail: "Add GRAPHACRETE at target dosage" },
    { title: "Check slump within 5 min of mixing", detail: "Compare vs reference batch reading" },
    { title: "Cast 3 cubes at 7d + 3 cubes at 28d", detail: "Label and cure under standard conditions" },
    { title: "Compare vs reference", detail: "Expect +20-35% strength gain at 28d" },
    { title: "Adjust dosage if needed", detail: "+-0.025 mL/100kg cement, then repeat trial" },
  ]

  return (
    <div style={{ background: "#050505", fontFamily: "Inter, sans-serif", padding: "40px", maxWidth: 900, margin: "0 auto" }}>

      {/* Header */}
      <div style={{ marginBottom: 32, borderBottom: "1px solid #1f1f1f", paddingBottom: 24 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 8, textTransform: "uppercase" }}>MONOATOM LABS · GRAPHACRETE</div>
        <div style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 48, fontWeight: 700, color: "#fff", lineHeight: 1, letterSpacing: 2 }}>MIX DESIGN GUIDE</div>
        <div style={{ color: "#94a3b8", fontSize: 16, marginTop: 6 }}>Graphene Concrete Additive · Optimised Workability, Superplasticizer & w/c Ratio Guidance</div>
      </div>

      {/* Section 1 — Workability */}
      <div style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 28, marginBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 3, color: "#64748b", fontWeight: 700, textTransform: "uppercase", marginBottom: 18 }}>Effect on Workability</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, marginBottom: 18 }}>
          <div style={{ background: "#0d0d0d", border: "1px solid #1f1f1f", borderRadius: 10, padding: 20, textAlign: "center" }}>
            <div style={{ color: "#64748b", fontSize: 11, letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>Slump (Reference M40)</div>
            <div style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 48, fontWeight: 700, color: "#9ca3af", lineHeight: 1 }}>80</div>
            <div style={{ color: "#4b5563", fontSize: 12, marginTop: 4 }}>mm</div>
          </div>
          <div style={{ background: "#0d0d0d", border: "1px solid " + C + "44", borderRadius: 10, padding: 20, textAlign: "center" }}>
            <div style={{ color: C, fontSize: 11, letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>With GRAPHACRETE</div>
            <div style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 48, fontWeight: 700, color: C, lineHeight: 1 }}>85</div>
            <div style={{ color: C + "99", fontSize: 12, marginTop: 4 }}>mm (+6%)</div>
          </div>
          <div style={{ background: "#0d0d0d", border: "1px solid #1f1f1f", borderRadius: 10, padding: 20, textAlign: "center" }}>
            <div style={{ color: "#64748b", fontSize: 11, letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>SP Reduction</div>
            <div style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 48, fontWeight: 700, color: "#e2e8f0", lineHeight: 1 }}>10-15</div>
            <div style={{ color: "#4b5563", fontSize: 12, marginTop: 4 }}>% with no slump loss</div>
          </div>
        </div>
        <div style={{ background: "#0d1520", border: "1px solid #1e3a5f", borderRadius: 8, padding: "12px 16px" }}>
          <span style={{ color: "#93c5fd", fontSize: 12, fontWeight: 500 }}>
            GNP dispersion medium acts as mild plasticiser. Reduce SP dosage by 10-15% in first trial to maintain target slump.
          </span>
        </div>
      </div>

      {/* Section 2 — w/c Table */}
      <div style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 28, marginBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 3, color: "#64748b", fontWeight: 700, textTransform: "uppercase", marginBottom: 16 }}>w/c Ratio Optimisation</div>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
          <thead>
            <tr style={{ background: C + "22", borderBottom: "2px solid " + C }}>
              <th style={{ textAlign: "left", padding: "10px 12px", color: C, fontWeight: 700, letterSpacing: 1 }}>Target Grade</th>
              <th style={{ textAlign: "left", padding: "10px 12px", color: C, fontWeight: 700, letterSpacing: 1 }}>w/c without GRAPHACRETE</th>
              <th style={{ textAlign: "left", padding: "10px 12px", color: C, fontWeight: 700, letterSpacing: 1 }}>w/c with GRAPHACRETE</th>
              <th style={{ textAlign: "left", padding: "10px 12px", color: C, fontWeight: 700, letterSpacing: 1 }}>Reason</th>
            </tr>
          </thead>
          <tbody>
            {wcRows.map((row, i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? "#0d0d0d" : "#111", borderBottom: "1px solid #1f1f1f" }}>
                <td style={{ padding: "10px 12px", color: "#e2e8f0", fontFamily: "Rajdhani, sans-serif", fontSize: 15, fontWeight: 700 }}>{row.grade}</td>
                <td style={{ padding: "10px 12px", color: "#9ca3af", fontSize: 13 }}>{row.without}</td>
                <td style={{ padding: "10px 12px", color: C, fontSize: 13, fontWeight: 700 }}>{row.with}</td>
                <td style={{ padding: "10px 12px", color: "#64748b", fontSize: 12 }}>{row.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Section 3 — SP Compatibility */}
      <div style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 28, marginBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 3, color: "#64748b", fontWeight: 700, textTransform: "uppercase", marginBottom: 16 }}>Superplasticizer Compatibility</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {spAdmixtures.map((item, i) => (
            <div key={i} style={{ background: "#0d0d0d", border: "1px solid #1f1f1f", borderRadius: 10, padding: 18, display: "flex", gap: 14, alignItems: "flex-start" }}>
              <div style={{ background: C + "22", border: "1px solid " + C + "55", borderRadius: "50%", width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                <span style={{ color: C, fontSize: 13, fontWeight: 700 }}>&#10003;</span>
              </div>
              <div>
                <div style={{ color: "#e2e8f0", fontSize: 13, fontWeight: 600, marginBottom: 4 }}>{item.name}</div>
                <div style={{ color: "#64748b", fontSize: 12 }}>{item.note}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 4 — Trial Batch Checklist */}
      <div style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 28, marginBottom: 24 }}>
        <div style={{ fontSize: 11, letterSpacing: 3, color: "#64748b", fontWeight: 700, textTransform: "uppercase", marginBottom: 18 }}>Trial Batch Checklist</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {steps.map((step, i) => (
            <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <div style={{ background: C + "22", border: "1px solid " + C + "55", borderRadius: "50%", width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 16, fontWeight: 700, color: C }}>{i + 1}</span>
              </div>
              <div style={{ paddingTop: 4 }}>
                <div style={{ color: "#e2e8f0", fontSize: 13, fontWeight: 700, marginBottom: 2 }}>{step.title}</div>
                <div style={{ color: "#64748b", fontSize: 12 }}>{step.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ borderTop: "1px solid #1f1f1f", paddingTop: 16, color: "#333", fontSize: 10, letterSpacing: 1, lineHeight: 1.6 }}>
        Compatibility testing conducted with Glenium 51 (PCE), Conplast SP430 (SNF) and CICO SP20 (lignosulphonate) admixtures. Results consistent across 8 commercial concrete plants.
      </div>
    </div>
  )
}

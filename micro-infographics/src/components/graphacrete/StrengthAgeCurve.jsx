import React from 'react'

const C = '#d97706'

const MAX_MPA = 63

const cureData = [
  { age: "3 days",   std: 22, gra: 29, pct: "+32%" },
  { age: "7 days",   std: 30, gra: 40, pct: "+33%" },
  { age: "14 days",  std: 37, gra: 49, pct: "+32%" },
  { age: "28 days",  std: 40, gra: 56, pct: "+40%" },
  { age: "90 days",  std: 44, gra: 63, pct: "+43%" },
]

const insights = [
  {
    label: "Early Strength (3d)",
    val: "29 MPa vs 22 MPa",
    body: "Formwork can be stripped 1 day earlier. Reduces project timeline by 8-12 hours per pour cycle.",
  },
  {
    label: "Design Strength (28d)",
    val: "56 MPa vs 40 MPa required",
    body: "40% over-strength margin. Enables 12-15% cement reduction without compromising design.",
  },
  {
    label: "Long-Term (90d)",
    val: "63 MPa — 43% above standard",
    body: "Continued gain confirmed. Extended service life per IS 456 pozzolanic mechanism.",
  },
]

const implications = [
  { title: "Early Formwork Removal", body: "22 to 29 MPa at 3 days saves 1 day/pour" },
  { title: "Grade Upgrade", body: "Hit M50 strength with M40 mix + GRAPHACRETE" },
  { title: "Cement Reduction", body: "12-15% reduction while meeting M40 target" },
  { title: "Reduced Testing Risk", body: "40% over-strength reduces failed cube probability" },
]

export default function GraStrengthAgeCurve() {
  return (
    <div style={{ background: "#050505", fontFamily: "Inter, sans-serif", padding: "40px", maxWidth: 900, margin: "0 auto" }}>

      {/* Header */}
      <div style={{ marginBottom: 28, borderBottom: "1px solid #1f1f1f", paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: "uppercase" }}>MONOATOM LABS · GRAPHACRETE</div>
        <div style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 40, fontWeight: 700, color: "#fff", letterSpacing: 2 }}>STRENGTH DEVELOPMENT</div>
        <div style={{ color: "#64748b", fontSize: 13, marginTop: 4 }}>Graphene Concrete Additive · Compressive Strength vs Curing Age</div>
      </div>

      {/* Section 1: Horizontal bar chart */}
      <div style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 28, marginBottom: 24 }}>
        <div style={{ color: C, fontSize: 11, letterSpacing: 3, textTransform: "uppercase", marginBottom: 6 }}>Strength Gain Timeline — M40 Grade</div>

        {/* Legend */}
        <div style={{ display: "flex", gap: 20, marginBottom: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 14, height: 14, background: "#374151", borderRadius: 3 }} />
            <span style={{ color: "#94a3b8", fontSize: 11 }}>Standard M40</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 14, height: 14, background: C, borderRadius: 3 }} />
            <span style={{ color: "#94a3b8", fontSize: 11 }}>Graphacrete M40</span>
          </div>
        </div>

        {cureData.map((d, i) => {
          const stdPct = (d.std / MAX_MPA) * 100
          const graPct = (d.gra / MAX_MPA) * 100
          return (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
              {/* Label */}
              <div style={{ width: 64, flexShrink: 0, textAlign: "right" }}>
                <span style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 13, fontWeight: 700, color: "#64748b" }}>{d.age}</span>
              </div>
              {/* Bars column */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
                {/* Standard bar */}
                <div style={{ height: 22, background: "#0d0d0d", borderRadius: 5, overflow: "hidden" }}>
                  <div style={{ width: `${stdPct}%`, height: "100%", background: "#374151", borderRadius: 5, display: "flex", alignItems: "center", paddingLeft: 10 }}>
                    <span style={{ color: "#9ca3af", fontSize: 11, fontWeight: 600, whiteSpace: "nowrap" }}>{d.std} MPa</span>
                  </div>
                </div>
                {/* Graphacrete bar */}
                <div style={{ height: 22, background: "#0d0d0d", borderRadius: 5, overflow: "hidden" }}>
                  <div style={{ width: `${graPct}%`, height: "100%", background: C, borderRadius: 5, display: "flex", alignItems: "center", paddingLeft: 10, boxShadow: `0 0 8px ${C}55` }}>
                    <span style={{ color: "#000", fontSize: 11, fontWeight: 700, whiteSpace: "nowrap" }}>{d.gra} MPa</span>
                  </div>
                </div>
              </div>
              {/* Gain badge */}
              <div style={{ width: 52, flexShrink: 0, textAlign: "center" }}>
                <span style={{ color: "#4ade80", fontSize: 12, fontWeight: 700 }}>{d.pct}</span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Section 2: Key Milestone Insights */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginBottom: 24 }}>
        {insights.map((ins, i) => (
          <div key={i} style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 10, padding: 18 }}>
            <div style={{ color: C, fontSize: 10, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>{ins.label}</div>
            <div style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 8 }}>{ins.val}</div>
            <div style={{ color: "#94a3b8", fontSize: 11, lineHeight: 1.6 }}>{ins.body}</div>
          </div>
        ))}
      </div>

      {/* Section 3: Practical Implications */}
      <div style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 24, marginBottom: 24 }}>
        <div style={{ color: C, fontSize: 11, letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>Practical Implications</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
          {implications.map((imp, i) => (
            <div key={i} style={{ background: "#0d0d0d", border: "1px solid #1a1a1a", borderRadius: 8, padding: "14px 18px" }}>
              <div style={{ color: "#e2e8f0", fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{imp.title}</div>
              <div style={{ color: "#64748b", fontSize: 12 }}>{imp.body}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ color: "#334155", fontSize: 10, letterSpacing: 1, textAlign: "right" }}>
        Data from IS 516 compression tests on 150mm cubes. OPC 53 grade cement. w/c ratio 0.42. Aggregate: 20mm nominal.
      </div>
    </div>
  )
}

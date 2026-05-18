import React from "react"

const C = "#d97706"

export default function GraCompressiveFlexuralData() {
  const container = {
    background: "#050505",
    minHeight: "100vh",
    fontFamily: "Inter, sans-serif",
    color: "#e5e5e5",
    padding: "40px",
  }

  const inner = {
    maxWidth: 900,
    margin: "0 auto",
  }

  const titleBlock = {
    marginBottom: 36,
    borderBottom: "1px solid #1f1f1f",
    paddingBottom: 24,
  }

  const eyebrow = {
    fontFamily: "Rajdhani, sans-serif",
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: "0.18em",
    color: C,
    textTransform: "uppercase",
    marginBottom: 8,
  }

  const mainTitle = {
    fontFamily: "Rajdhani, sans-serif",
    fontSize: 36,
    fontWeight: 700,
    color: "#ffffff",
    letterSpacing: "0.06em",
    marginBottom: 6,
    textTransform: "uppercase",
  }

  const subtitle = {
    fontSize: 14,
    color: "#888",
    letterSpacing: "0.04em",
  }

  const sectionLabel = {
    fontFamily: "Rajdhani, sans-serif",
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: "0.14em",
    color: C,
    textTransform: "uppercase",
    marginBottom: 16,
  }

  const sectionWrap = {
    marginBottom: 40,
  }

  const barChartWrap = {
    background: "#111",
    border: "1px solid #1f1f1f",
    borderRadius: 8,
    padding: "24px",
  }

  const barRow = {
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 14,
  }

  const barRowLast = {
    display: "flex",
    alignItems: "center",
    gap: 12,
  }

  const ageLabel = {
    fontFamily: "Rajdhani, sans-serif",
    fontSize: 13,
    fontWeight: 600,
    color: "#aaa",
    width: 60,
    flexShrink: 0,
    textAlign: "right",
    letterSpacing: "0.04em",
    textTransform: "uppercase",
  }

  const barsCol = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 4,
  }

  const gainBadge = {
    fontFamily: "Rajdhani, sans-serif",
    fontSize: 13,
    fontWeight: 700,
    color: C,
    width: 52,
    flexShrink: 0,
    textAlign: "right",
  }

  const MAX_MPa = 65

  const compData = [
    { age: "3 days", standard: 22, gra: 29, gain: "+32%" },
    { age: "7 days", standard: 30, gra: 40, gain: "+33%" },
    { age: "14 days", standard: 37, gra: 49, gain: "+32%" },
    { age: "28 days", standard: 40, gra: 56, gain: "+40%" },
    { age: "90 days", standard: 44, gra: 63, gain: "+43%" },
  ]

  const tableWrap = {
    background: "#111",
    border: "1px solid #1f1f1f",
    borderRadius: 8,
    overflow: "hidden",
  }

  const thCell = {
    background: C,
    color: "#050505",
    fontFamily: "Rajdhani, sans-serif",
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    padding: "10px 14px",
    textAlign: "left",
  }

  const tdCell = {
    fontSize: 13,
    color: "#ccc",
    padding: "11px 14px",
    borderBottom: "1px solid #1f1f1f",
  }

  const tdCellC = {
    fontSize: 13,
    color: C,
    fontWeight: 600,
    padding: "11px 14px",
    borderBottom: "1px solid #1f1f1f",
  }

  const tdCellLast = {
    fontSize: 13,
    color: "#ccc",
    padding: "11px 14px",
  }

  const tdCellCLast = {
    fontSize: 13,
    color: C,
    fontWeight: 600,
    padding: "11px 14px",
  }

  const threeCol = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: 16,
  }

  const fourCol = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gap: 16,
  }

  const card = {
    background: "#111",
    border: "1px solid #1f1f1f",
    borderRadius: 8,
    padding: "24px 20px",
  }

  const bigNum = {
    fontFamily: "Rajdhani, sans-serif",
    fontSize: 48,
    fontWeight: 700,
    color: C,
    lineHeight: 1,
    marginBottom: 6,
  }

  const bigNumSmall = {
    fontFamily: "Rajdhani, sans-serif",
    fontSize: 36,
    fontWeight: 700,
    color: C,
    lineHeight: 1,
    marginBottom: 6,
  }

  const cardLabel = {
    fontFamily: "Rajdhani, sans-serif",
    fontSize: 13,
    fontWeight: 600,
    color: "#ffffff",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    marginBottom: 8,
  }

  const bodyText = {
    fontSize: 13,
    color: "#aaa",
    lineHeight: 1.6,
  }

  const footer = {
    marginTop: 32,
    paddingTop: 16,
    borderTop: "1px solid #1f1f1f",
    fontSize: 12,
    color: "#555",
    lineHeight: 1.6,
  }

  const flexRows = [
    {
      property: "Flexural strength (IS 516)",
      standard: "4.2 MPa",
      gra: "5.8 MPa",
      improvement: "+38%",
      ref: "IS 456: min 3.7 MPa",
    },
    {
      property: "Split tensile strength (IS 5816)",
      standard: "2.8 MPa",
      gra: "4.1 MPa",
      improvement: "+46%",
      ref: "No min, IS 456 ref",
    },
    {
      property: "Modulus of elasticity",
      standard: "28 GPa",
      gra: "33 GPa",
      improvement: "+18%",
      ref: "IS 456 Cl. 6.2.3",
    },
  ]

  const practicalCards = [
    {
      title: "Slab / Beam Design",
      body: "Higher flexural strength allows increased span-to-depth ratio. A 200 mm slab can span 5% further — reducing number of columns or beams required.",
    },
    {
      title: "Crack Width Control",
      body: "Higher tensile capacity means smaller crack widths at service load. IS 456 Cl. 35.3.2 crack width <0.2 mm achieved at lower reinforcement ratio.",
    },
    {
      title: "Fatigue Resistance",
      body: "Flexural fatigue life approximately doubles with +38% flexural strength — critical for highway bridge decks under cyclic truck loading.",
    },
  ]

  const statCards = [
    { num: "3.8%", label: "Compressive COV", body: "Standard concrete: 6–8%. Tighter batch-to-batch quality control." },
    { num: "4.2%", label: "Flexural COV", body: "Low coefficient of variation across 48 commercial batches." },
    { num: "52.1 MPa", label: "Min 28d Strength", body: "All batches passed. Target 40 MPa — every single batch exceeded it." },
    { num: "48", label: "Test Lots Analyzed", body: "Across 12 sites. Commercial production batches, not lab specimens." },
  ]

  return (
    <div style={container}>
      <div style={inner}>
        <div style={titleBlock}>
          <div style={eyebrow}>Monoatom Labs · Graphacrete</div>
          <div style={mainTitle}>Strength Data</div>
          <div style={subtitle}>Graphene Concrete Additive · Compressive, Flexural & Split Tensile Test Results</div>
        </div>

        {/* Section 1 — Bar Chart */}
        <div style={sectionWrap}>
          <div style={sectionLabel}>Compressive Strength — M40 Baseline</div>
          <div style={barChartWrap}>
            {/* Legend */}
            <div style={{ display: "flex", gap: 24, marginBottom: 20 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 14, height: 14, borderRadius: 3, background: "#444" }} />
                <span style={{ fontSize: 12, color: "#888" }}>Standard M40</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 14, height: 14, borderRadius: 3, background: C }} />
                <span style={{ fontSize: 12, color: "#888" }}>GRAPHACRETE M40</span>
              </div>
              <div style={{ marginLeft: "auto", fontSize: 12, color: "#555" }}>Scale: 0 – 65 MPa</div>
            </div>
            {compData.map((row, i) => {
              const isLast = i === compData.length - 1
              const stdPct = (row.standard / MAX_MPa) * 100
              const graPct = (row.gra / MAX_MPa) * 100
              return (
                <div key={row.age} style={isLast ? barRowLast : barRow}>
                  <div style={ageLabel}>{row.age}</div>
                  <div style={barsCol}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div style={{ width: `${stdPct}%`, height: 14, background: "#444", borderRadius: 3, transition: "width 0.3s" }} />
                      <span style={{ fontSize: 12, color: "#666", minWidth: 36 }}>{row.standard} MPa</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div style={{ width: `${graPct}%`, height: 14, background: C, borderRadius: 3, transition: "width 0.3s" }} />
                      <span style={{ fontSize: 12, color: C, minWidth: 36, fontWeight: 600 }}>{row.gra} MPa</span>
                    </div>
                  </div>
                  <div style={gainBadge}>{row.gain}</div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Section 2 — Flexural Table */}
        <div style={sectionWrap}>
          <div style={sectionLabel}>Flexural & Split Tensile Strength (28 days)</div>
          <div style={tableWrap}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={thCell}>Property</th>
                  <th style={thCell}>Standard M40</th>
                  <th style={thCell}>GRAPHACRETE M40</th>
                  <th style={thCell}>Improvement</th>
                  <th style={thCell}>Standard Reference</th>
                </tr>
              </thead>
              <tbody>
                {flexRows.map((row, i) => {
                  const isLast = i === flexRows.length - 1
                  const td = isLast ? tdCellLast : tdCell
                  const tdC = isLast ? tdCellCLast : tdCellC
                  return (
                    <tr key={row.property}>
                      <td style={{ ...td, color: "#e5e5e5" }}>{row.property}</td>
                      <td style={td}>{row.standard}</td>
                      <td style={tdC}>{row.gra}</td>
                      <td style={{ ...tdC, fontFamily: "Rajdhani, sans-serif", fontSize: 14, fontWeight: 700 }}>{row.improvement}</td>
                      <td style={{ ...td, color: "#666" }}>{row.ref}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 3 */}
        <div style={sectionWrap}>
          <div style={sectionLabel}>What Higher Flexural Strength Means</div>
          <div style={threeCol}>
            {practicalCards.map((c2) => (
              <div key={c2.title} style={card}>
                <div style={cardLabel}>{c2.title}</div>
                <div style={bodyText}>{c2.body}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4 */}
        <div style={sectionWrap}>
          <div style={sectionLabel}>Statistical Consistency</div>
          <div style={fourCol}>
            {statCards.map((s) => (
              <div key={s.label} style={card}>
                <div style={bigNumSmall}>{s.num}</div>
                <div style={cardLabel}>{s.label}</div>
                <div style={bodyText}>{s.body}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={footer}>
          Tests per IS 516, IS 5816, IS 2386 at NABL-accredited labs. Aggregate: 20 mm crushed granite. Cement: OPC 53 grade (Ultratech). w/c: 0.42. Admixture: PCE-based SP.
        </div>
      </div>
    </div>
  )
}

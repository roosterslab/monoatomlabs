import React from "react"

const C = "#d97706"

export default function GraCarbonCreditOpportunity() {
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

  const threeCol = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
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

  const cardLabel = {
    fontFamily: "Rajdhani, sans-serif",
    fontSize: 14,
    fontWeight: 600,
    color: "#ffffff",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    marginBottom: 10,
  }

  const bodyText = {
    fontSize: 13,
    color: "#aaa",
    lineHeight: 1.6,
  }

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

  const tdCellHighlight = {
    fontSize: 13,
    color: C,
    fontWeight: 600,
    padding: "11px 14px",
    background: "rgba(217,119,6,0.07)",
  }

  const pillRow = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gap: 12,
  }

  const pill = {
    background: "#111",
    border: "1px solid #1f1f1f",
    borderRadius: 6,
    padding: "16px 14px",
  }

  const pillTitle = {
    fontFamily: "Rajdhani, sans-serif",
    fontSize: 13,
    fontWeight: 700,
    color: C,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    marginBottom: 8,
  }

  const pillBody = {
    fontSize: 12,
    color: "#999",
    lineHeight: 1.55,
  }

  const textBox = {
    background: "#111",
    border: "1px solid #1f1f1f",
    borderRadius: 8,
    padding: "20px 24px",
    fontSize: 13,
    color: "#bbb",
    lineHeight: 1.7,
  }

  const footer = {
    marginTop: 32,
    paddingTop: 16,
    borderTop: "1px solid #1f1f1f",
    fontSize: 12,
    color: "#555",
    lineHeight: 1.6,
  }

  const creditRows = [
    {
      scale: "1,000 m³/yr (small contractor)",
      cement: "40,000 kg",
      co2: "33 tCO2",
      credits: "33 credits",
      value: "₹66,000",
      highlight: false,
    },
    {
      scale: "10,000 m³/yr (mid contractor)",
      cement: "4,00,000 kg",
      co2: "332 tCO2",
      credits: "332 credits",
      value: "₹6,64,000",
      highlight: false,
    },
    {
      scale: "1,00,000 m³/yr (large RMC)",
      cement: "40,00,000 kg",
      co2: "3,320 tCO2",
      credits: "3,320 credits",
      value: "₹66,40,000",
      highlight: false,
    },
    {
      scale: "Entire India adoption (10% of market)",
      cement: "—",
      co2: "8.3M tCO2/yr",
      credits: "8.3M credits",
      value: "₹1,660 Cr/yr",
      highlight: true,
    },
  ]

  const ndcCards = [
    {
      stat: "45%",
      label: "India NDC Target",
      body: "Reduction in emission intensity of GDP by 2030 vs 2005.",
    },
    {
      stat: "22%",
      label: "Construction Sector",
      body: "Share of India CO2 emissions. Cement alone accounts for 7% of global CO2.",
    },
    {
      stat: "12–15%",
      label: "GRAPHACRETE Contribution",
      body: "Cement reduction = direct Scope 3 emission cut for developers, builders, and government infra projects.",
    },
  ]

  const certPills = [
    {
      title: "IGBC",
      body: "Green Homes/Factories — Materials & Resources credit: reduced virgin cement content.",
    },
    {
      title: "GRIHA",
      body: "Point 32 (Reduce embodied energy) — cement reduction qualifies directly.",
    },
    {
      title: "LEED India",
      body: "MR Credit 4 (Recycled Content) if PPC/fly-ash blended with GRAPHACRETE.",
    },
    {
      title: "BEE Star",
      body: "Construction material efficiency credit under BEE Star Rating scheme.",
    },
  ]

  return (
    <div style={container}>
      <div style={inner}>
        <div style={titleBlock}>
          <div style={eyebrow}>Monoatom Labs · Graphacrete</div>
          <div style={mainTitle}>Carbon Credit Opportunity</div>
          <div style={subtitle}>Graphene Concrete Additive · CO2 Reduction, Credits & Net Zero Compliance</div>
        </div>

        {/* Section 1 */}
        <div style={sectionWrap}>
          <div style={sectionLabel}>CO2 Reduction per m³</div>
          <div style={threeCol}>
            {[
              { num: "40–50 kg", label: "Cement Reduction per m³", body: "Achieved at M40 grade with GRAPHACRETE dosage vs standard M50 equivalent mix." },
              { num: "0.83 kg", label: "CO2 per kg Cement (OPC)", body: "BEE cement sector report 2023. Ordinary Portland Cement clinker CO2 intensity." },
              { num: "33–42 kg", label: "CO2 Saved per m³", body: "Direct Scope 3 emission reduction per cubic metre of concrete poured." },
            ].map((item) => (
              <div key={item.label} style={card}>
                <div style={bigNum}>{item.num}</div>
                <div style={cardLabel}>{item.label}</div>
                <div style={bodyText}>{item.body}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2 */}
        <div style={sectionWrap}>
          <div style={sectionLabel}>Carbon Credit Calculation</div>
          <div style={tableWrap}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={thCell}>Project Scale</th>
                  <th style={thCell}>Cement Saved/yr</th>
                  <th style={thCell}>CO2 Saved/yr</th>
                  <th style={thCell}>Carbon Credits (tCO2)</th>
                  <th style={thCell}>Value at ₹2,000/tCO2</th>
                </tr>
              </thead>
              <tbody>
                {creditRows.map((row) => {
                  const base = row.highlight
                    ? { ...tdCellHighlight }
                    : { ...tdCell }
                  const isLastNonHighlight = !row.highlight
                  const cellStyle = row.highlight
                    ? tdCellHighlight
                    : isLastNonHighlight
                    ? { ...tdCell }
                    : tdCell
                  return (
                    <tr key={row.scale}>
                      <td style={cellStyle}>{row.scale}</td>
                      <td style={cellStyle}>{row.cement}</td>
                      <td style={cellStyle}>{row.co2}</td>
                      <td style={cellStyle}>{row.credits}</td>
                      <td style={cellStyle}>{row.value}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 3 */}
        <div style={sectionWrap}>
          <div style={sectionLabel}>India Net Zero 2070 Alignment</div>
          <div style={threeCol}>
            {ndcCards.map((item) => (
              <div key={item.label} style={card}>
                <div style={bigNum}>{item.stat}</div>
                <div style={cardLabel}>{item.label}</div>
                <div style={bodyText}>{item.body}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4 */}
        <div style={sectionWrap}>
          <div style={sectionLabel}>Green Building Certification Points</div>
          <div style={pillRow}>
            {certPills.map((p) => (
              <div key={p.title} style={pill}>
                <div style={pillTitle}>{p.title}</div>
                <div style={pillBody}>{p.body}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 5 */}
        <div style={sectionWrap}>
          <div style={sectionLabel}>BEE / PAT Scheme Eligibility</div>
          <div style={textBox}>
            Large cement plants under BEE's PAT (Perform, Achieve, Trade) scheme earn ESCerts for reduced clinker consumption. GRAPHACRETE enables plants to supply less cement per structural outcome — contributing to PAT compliance at the downstream construction stage.
          </div>
        </div>

        <div style={footer}>
          CO2 intensity: 0.83 kg CO2/kg OPC (BEE cement sector report 2023). Carbon credit price: indicative, ICE India voluntary market. Net Zero 2070: Ministry of Environment, Forest & Climate Change.
        </div>
      </div>
    </div>
  )
}

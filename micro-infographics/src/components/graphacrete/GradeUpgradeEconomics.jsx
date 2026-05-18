import React from "react"

const C = "#d97706"

export default function GraGradeUpgradeEconomics() {
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

  const callout = {
    background: "#111",
    border: `1px solid ${C}`,
    borderLeft: `4px solid ${C}`,
    borderRadius: 8,
    padding: "20px 24px",
  }

  const calloutText = {
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

  const gradeRows = [
    { target: "M30", standard: "M40 (350 kg/m³)", gra: "M25 + GNP", saving: "30 kg/m³ (−9%)", cost: "₹750" },
    { target: "M40", standard: "M40 (380 kg/m³)", gra: "M30 + GNP", saving: "40 kg/m³ (−11%)", cost: "₹950" },
    { target: "M50", standard: "M50 (420 kg/m³)", gra: "M40 + GNP", saving: "50 kg/m³ (−12%)", cost: "₹1,100" },
    { target: "M60", standard: "M60 (460 kg/m³)", gra: "M50 + GNP", saving: "55 kg/m³ (−12%)", cost: "₹1,200" },
    { target: "M70", standard: "M70 (510 kg/m³)", gra: "M55 + GNP", saving: "65 kg/m³ (−13%)", cost: "₹1,450" },
  ]

  const calcCards = [
    {
      project: "Residential Slab",
      volume: "100 m³ pour",
      strategy: "M40 designed as M30 + GNP",
      saving: "₹95,000",
    },
    {
      project: "Commercial Basement",
      volume: "1,000 m³ pour",
      strategy: "M50 designed as M40 + GNP",
      saving: "₹11,00,000",
    },
    {
      project: "Bridge / Infrastructure",
      volume: "10,000 m³ project",
      strategy: "M60 designed as M50 + GNP",
      saving: "₹1,20,00,000",
    },
  ]

  return (
    <div style={container}>
      <div style={inner}>
        <div style={titleBlock}>
          <div style={eyebrow}>Monoatom Labs · Graphacrete</div>
          <div style={mainTitle}>Grade Upgrade Economics</div>
          <div style={subtitle}>Graphene Concrete Additive · Achieving Higher Grades at Lower Cost</div>
        </div>

        {/* Section 1 */}
        <div style={sectionWrap}>
          <div style={sectionLabel}>The Grade Upgrade Strategy</div>
          <div style={threeCol}>
            <div style={card}>
              <div style={bigNum}>M50</div>
              <div style={cardLabel}>Standard Approach</div>
              <div style={bodyText}>
                Design requires M50. Mix designed at M50 with w/c 0.36, 420 kg cement/m³.
                <br /><br />
                <span style={{ color: "#e5e5e5", fontWeight: 600 }}>Cost: ₹7,200/m³</span>
              </div>
            </div>
            <div style={card}>
              <div style={bigNum}>M40</div>
              <div style={cardLabel}>GRAPHACRETE Approach</div>
              <div style={bodyText}>
                Baseline mix M40 (w/c 0.42, 370 kg cement/m³) + GRAPHACRETE dosage. Achieves M50-equivalent 28-day strength.
                <br /><br />
                <span style={{ color: "#e5e5e5", fontWeight: 600 }}>₹5,900 + ₹200 additive = ₹6,100/m³</span>
              </div>
            </div>
            <div style={card}>
              <div style={bigNum}>₹1,100</div>
              <div style={cardLabel}>Saving / m³</div>
              <div style={bodyText}>
                On a 500 m³ bridge pour:
                <br />
                <span style={{ color: C, fontWeight: 600 }}>₹5,50,000 saving</span>
                <br /><br />
                On a 5,000 m³ project:
                <br />
                <span style={{ color: C, fontWeight: 600 }}>₹55,00,000 saving</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div style={sectionWrap}>
          <div style={sectionLabel}>Grade Equivalence Table</div>
          <div style={tableWrap}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={thCell}>Target Strength Class</th>
                  <th style={thCell}>Standard Mix</th>
                  <th style={thCell}>GRAPHACRETE Mix</th>
                  <th style={thCell}>Cement Saving</th>
                  <th style={thCell}>Cost Saving/m³</th>
                </tr>
              </thead>
              <tbody>
                {gradeRows.map((row, i) => {
                  const isLast = i === gradeRows.length - 1
                  const td = isLast ? tdCellLast : tdCell
                  const tdC = isLast ? tdCellCLast : tdCellC
                  return (
                    <tr key={row.target}>
                      <td style={td}>{row.target}</td>
                      <td style={td}>{row.standard}</td>
                      <td style={td}>{row.gra}</td>
                      <td style={tdC}>{row.saving}</td>
                      <td style={tdC}>{row.cost}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 3 */}
        <div style={sectionWrap}>
          <div style={sectionLabel}>Project Savings Calculator</div>
          <div style={threeCol}>
            {calcCards.map((c2) => (
              <div key={c2.project} style={card}>
                <div style={{ fontSize: 12, color: "#666", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>{c2.project}</div>
                <div style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 15, fontWeight: 600, color: "#ccc", marginBottom: 4 }}>{c2.volume}</div>
                <div style={{ fontSize: 12, color: "#888", marginBottom: 16 }}>{c2.strategy}</div>
                <div style={bigNum}>{c2.saving}</div>
                <div style={{ fontSize: 12, color: C, fontWeight: 600, marginTop: 4 }}>Estimated saving</div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4 */}
        <div style={sectionWrap}>
          <div style={sectionLabel}>Structural Safety Note</div>
          <div style={callout}>
            <div style={calloutText}>
              Grade upgrade strategy requires structural engineer sign-off. GRAPHACRETE achieves target strength reliably — NABL 28-day cube tests confirm. Mix design change should be approved per IS 10262:2019 and submitted to structural consultant before implementation.
            </div>
          </div>
        </div>

        <div style={footer}>
          Cement unit cost: ₹380/bag (50 kg). Concrete prices: Mumbai RMC market rates Q1 2025. GNP additive cost included in saving calculation at standard commercial pricing.
        </div>
      </div>
    </div>
  )
}

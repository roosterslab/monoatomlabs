import React from "react"

const C = "#d97706"

export default function GraSiteTestingGuide() {
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
    verticalAlign: "top",
  }

  const tdCellLast = {
    fontSize: 13,
    color: "#ccc",
    padding: "11px 14px",
    verticalAlign: "top",
  }

  const interpretCard = {
    background: "#111",
    border: "1px solid #1f1f1f",
    borderRadius: 8,
    padding: "24px",
  }

  const threeCol = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: 16,
  }

  const interpItem = {
    paddingBottom: 12,
    marginBottom: 12,
    borderBottom: "1px solid #1f1f1f",
  }

  const interpItemLast = {
    paddingBottom: 0,
    marginBottom: 0,
  }

  const interpLabel = {
    fontFamily: "Rajdhani, sans-serif",
    fontSize: 13,
    fontWeight: 700,
    color: C,
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    marginBottom: 6,
  }

  const bodyText = {
    fontSize: 13,
    color: "#aaa",
    lineHeight: 1.6,
  }

  const stepsWrap = {
    display: "flex",
    flexDirection: "column",
    gap: 0,
  }

  const stepRow = {
    display: "flex",
    alignItems: "flex-start",
    gap: 16,
    padding: "16px 0",
    borderBottom: "1px solid #1f1f1f",
  }

  const stepRowLast = {
    display: "flex",
    alignItems: "flex-start",
    gap: 16,
    padding: "16px 0",
  }

  const stepCircle = {
    flexShrink: 0,
    width: 32,
    height: 32,
    borderRadius: "50%",
    background: C,
    color: "#050505",
    fontFamily: "Rajdhani, sans-serif",
    fontSize: 16,
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }

  const stepContent = {
    flex: 1,
  }

  const stepTitle = {
    fontFamily: "Rajdhani, sans-serif",
    fontSize: 14,
    fontWeight: 700,
    color: "#ffffff",
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    marginBottom: 4,
  }

  const twoCol = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 16,
  }

  const card = {
    background: "#111",
    border: "1px solid #1f1f1f",
    borderRadius: 8,
    padding: "24px 20px",
  }

  const cardLabel = {
    fontFamily: "Rajdhani, sans-serif",
    fontSize: 14,
    fontWeight: 600,
    color: "#ffffff",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    marginBottom: 12,
  }

  const footer = {
    marginTop: 32,
    paddingTop: 16,
    borderTop: "1px solid #1f1f1f",
    fontSize: 12,
    color: "#555",
    lineHeight: 1.6,
  }

  const tests = [
    {
      test: "Slump test",
      standard: "IS 1199 / ASTM C143",
      when: "Every batch",
      criteria: "Within ±15 mm of reference",
      action: "Adjust water/SP, retest",
    },
    {
      test: "Cube casting (150 mm)",
      standard: "IS 516",
      when: "6 cubes per 50 m³",
      criteria: "7d: ≥65% of 28d target",
      action: "Flag, continue monitoring",
    },
    {
      test: "Air content",
      standard: "IS 1199 Part 5",
      when: "First batch per day",
      criteria: "<4% (non-air-entrained)",
      action: "Adjust admixture",
    },
    {
      test: "Temperature",
      standard: "—",
      when: "Hot weather >30°C",
      criteria: "Fresh concrete <35°C",
      action: "Ice water or night pour",
    },
    {
      test: "Visual dispersion",
      standard: "—",
      when: "Every batch",
      criteria: "No GNP clumps, uniform grey",
      action: "Return batch, check dosing",
    },
  ]

  const steps = [
    {
      num: "1",
      title: "Mark Cubes",
      detail: "Date / Mix ref / Vehicle / Pour location / GRAPHACRETE batch no. Each cube uniquely identified before curing.",
    },
    {
      num: "2",
      title: "Cure Cubes",
      detail: "24 hr under damp hessian at pour location. Transport to NABL lab within 48 hr of casting.",
    },
    {
      num: "3",
      title: "Lab Instructions",
      detail: "Request IS 516 compression test. Specify mix as \"GNP-enhanced M40\" on lab form. Reference Monoatom Labs batch CoA.",
    },
    {
      num: "4",
      title: "Record Results",
      detail: "Log result in site register. Compare vs reference (unmodified M40) cubes cast same day.",
    },
  ]

  const interpItems = [
    {
      label: "7d ≥ 65% → Proceed",
      body: "7-day result at or above 65% of 28-day target — proceed with confidence.",
    },
    {
      label: "55–65% → Monitor",
      body: "Monitor closely. Request additional cubes at 14 days before proceeding.",
    },
    {
      label: "< 55% → Quarantine",
      body: "Quarantine structure. Commission independent lab retest at 28 days. GRAPHACRETE concrete typically achieves 68–72% at 7d — exceeds reference.",
    },
  ]

  return (
    <div style={container}>
      <div style={inner}>
        <div style={titleBlock}>
          <div style={eyebrow}>Monoatom Labs · Graphacrete</div>
          <div style={mainTitle}>Site Testing Guide</div>
          <div style={subtitle}>Graphene Concrete Additive · Field QC Protocol & Acceptance Criteria</div>
        </div>

        {/* Section 1 */}
        <div style={sectionWrap}>
          <div style={sectionLabel}>Mandatory Site Tests</div>
          <div style={tableWrap}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={thCell}>Test</th>
                  <th style={thCell}>Standard</th>
                  <th style={thCell}>When</th>
                  <th style={thCell}>Acceptance Criteria</th>
                  <th style={thCell}>Action on Fail</th>
                </tr>
              </thead>
              <tbody>
                {tests.map((row, i) => {
                  const isLast = i === tests.length - 1
                  const td = isLast ? tdCellLast : tdCell
                  return (
                    <tr key={row.test}>
                      <td style={{ ...td, color: "#e5e5e5", fontWeight: 600 }}>{row.test}</td>
                      <td style={td}>{row.standard}</td>
                      <td style={td}>{row.when}</td>
                      <td style={{ ...td, color: C }}>{row.criteria}</td>
                      <td style={td}>{row.action}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 2 */}
        <div style={sectionWrap}>
          <div style={sectionLabel}>7-Day vs 28-Day Strength Guide</div>
          <div style={interpretCard}>
            <div style={threeCol}>
              {interpItems.map((item, i) => (
                <div key={item.label} style={i < interpItems.length - 1 ? interpItem : interpItemLast}>
                  <div style={interpLabel}>{item.label}</div>
                  <div style={bodyText}>{item.body}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div style={sectionWrap}>
          <div style={sectionLabel}>Cube Marking & Chain of Custody</div>
          <div style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 8, padding: "8px 24px" }}>
            <div style={stepsWrap}>
              {steps.map((step, i) => (
                <div key={step.num} style={i < steps.length - 1 ? stepRow : stepRowLast}>
                  <div style={stepCircle}>{step.num}</div>
                  <div style={stepContent}>
                    <div style={stepTitle}>{step.title}</div>
                    <div style={bodyText}>{step.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div style={sectionWrap}>
          <div style={sectionLabel}>GRAPHACRETE Dose Verification</div>
          <div style={twoCol}>
            <div style={card}>
              <div style={cardLabel}>How to Verify Dose on Site</div>
              <div style={bodyText}>
                Compare drum level before and after batch. Cross-check with delivery note quantity.
                <br /><br />
                Peristaltic pump totaliser reading per batch provides independent verification of volume dispensed.
              </div>
            </div>
            <div style={card}>
              <div style={cardLabel}>Signs of Under / Over Dosing</div>
              <div style={bodyText}>
                <span style={{ color: "#e5e5e5", fontWeight: 600 }}>Under-dosing:</span> Slump normal but 7-day strength ≤ reference (expected +20% gain absent).
                <br /><br />
                <span style={{ color: "#e5e5e5", fontWeight: 600 }}>Over-dosing:</span> Slump ≥ 20 mm above target (GNP acting as plasticiser). Reduce SP by 10% and retest.
              </div>
            </div>
          </div>
        </div>

        <div style={footer}>
          Keep batch-level dosing records for 5 years per IS 456 durability documentation requirements. NABL lab results should reference Monoatom Labs batch CoA for full chain of custody.
        </div>
      </div>
    </div>
  )
}

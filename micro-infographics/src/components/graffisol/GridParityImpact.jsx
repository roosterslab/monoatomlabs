import React from "react";

const C = "#f59e0b";

export default function SolGridParityImpact() {
  const styles = {
    wrapper: {
      background: "#050505",
      minHeight: "100vh",
      fontFamily: "Inter, sans-serif",
      padding: "40px",
      color: "#e5e5e5",
    },
    inner: {
      maxWidth: 900,
      margin: "0 auto",
      padding: "40px",
    },
    tagline: {
      color: C,
      fontFamily: "Rajdhani, sans-serif",
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: 3,
      textTransform: "uppercase",
      marginBottom: 6,
    },
    title: {
      color: "#ffffff",
      fontFamily: "Rajdhani, sans-serif",
      fontSize: 36,
      fontWeight: 700,
      letterSpacing: 1,
      margin: "0 0 8px 0",
    },
    subtitle: {
      color: "#999",
      fontSize: 14,
      marginBottom: 40,
    },
    sectionTitle: {
      color: "#ffffff",
      fontFamily: "Rajdhani, sans-serif",
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: 1,
      textTransform: "uppercase",
      borderLeft: "3px solid " + C,
      paddingLeft: 12,
      marginBottom: 20,
    },
    section: {
      marginBottom: 40,
    },
    cardRow: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 16,
    },
    card: {
      background: "#111",
      border: "1px solid #1f1f1f",
      borderRadius: 8,
      padding: "20px 16px",
    },
    bigNum: {
      fontFamily: "Rajdhani, sans-serif",
      fontSize: 48,
      fontWeight: 700,
      color: C,
      lineHeight: 1,
      marginBottom: 6,
    },
    bigNumSm: {
      fontFamily: "Rajdhani, sans-serif",
      fontSize: 36,
      fontWeight: 700,
      color: C,
      lineHeight: 1,
      marginBottom: 6,
    },
    cardLabel: {
      color: "#aaa",
      fontSize: 12,
      textTransform: "uppercase",
      letterSpacing: 1,
      marginBottom: 8,
    },
    cardDesc: {
      color: "#ccc",
      fontSize: 13,
      lineHeight: 1.5,
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: 13,
    },
    th: {
      background: C,
      color: "#050505",
      fontFamily: "Rajdhani, sans-serif",
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: 0.5,
      padding: "10px 12px",
      textAlign: "left",
      border: "1px solid #1f1f1f",
    },
    td: {
      padding: "10px 12px",
      border: "1px solid #1f1f1f",
      color: "#ccc",
      fontSize: 13,
    },
    tdAlt: {
      padding: "10px 12px",
      border: "1px solid #1f1f1f",
      color: "#ccc",
      fontSize: 13,
      background: "#0d0d0d",
    },
    tdHL: {
      padding: "10px 12px",
      border: "1px solid " + C,
      color: "#fff",
      fontSize: 13,
      fontWeight: 600,
      background: "#1a1200",
    },
    tdHLAcc: {
      padding: "10px 12px",
      border: "1px solid " + C,
      color: C,
      fontSize: 13,
      fontWeight: 700,
      background: "#1a1200",
    },
    pillRow: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: 12,
    },
    pill: {
      background: "#111",
      border: "1px solid #1f1f1f",
      borderRadius: 8,
      padding: "14px 18px",
      display: "flex",
      flexDirection: "column",
      gap: 6,
    },
    pillNum: {
      fontFamily: "Rajdhani, sans-serif",
      fontSize: 28,
      fontWeight: 700,
      color: C,
      lineHeight: 1,
    },
    pillLabel: {
      color: "#aaa",
      fontSize: 12,
      textTransform: "uppercase",
      letterSpacing: 1,
    },
    footer: {
      borderTop: "1px solid #1f1f1f",
      paddingTop: 16,
      color: "#555",
      fontSize: 11,
      lineHeight: 1.6,
      marginTop: 40,
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.inner}>
        <div style={styles.tagline}>MONOATOM LABS · GRAFFISOL</div>
        <h1 style={styles.title}>GRID PARITY IMPACT</h1>
        <div style={styles.subtitle}>Solar Panel Coating · LCOE Reduction &amp; Competitive Advantage</div>

        {/* Section 1 */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>LCOE Reduction Calculation</div>
          <div style={styles.cardRow}>
            <div style={styles.card}>
              <div style={styles.cardLabel}>Standard Solar LCOE (Utility, India 2024)</div>
              <div style={styles.bigNum}>₹2.15-2.50</div>
              <div style={styles.cardDesc}>/kWh — current benchmark for utility-scale solar projects</div>
            </div>
            <div style={styles.card}>
              <div style={styles.cardLabel}>GRAFFISOL LCOE Impact</div>
              <div style={styles.bigNum}>-₹0.24</div>
              <div style={styles.cardDesc}>-₹0.18 to -₹0.24/kWh from higher output plus lower cleaning operations cost</div>
            </div>
            <div style={styles.card}>
              <div style={styles.cardLabel}>New Effective LCOE</div>
              <div style={styles.bigNum}>₹1.91-2.32</div>
              <div style={styles.cardDesc}>/kWh — post-GRAFFISOL effective cost of energy, improving grid parity margin</div>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>LCOE Component Breakdown — 1 MW, 25 yr</div>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Cost Component</th>
                <th style={styles.th}>Uncoated</th>
                <th style={styles.th}>With GRAFFISOL</th>
                <th style={styles.th}>Delta</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.td}>Capital cost (₹/W)</td>
                <td style={styles.td}>₹38/W</td>
                <td style={styles.td}>₹38/W + ₹0.78</td>
                <td style={styles.td}>+₹0.78/W (coating)</td>
              </tr>
              <tr>
                <td style={styles.tdAlt}>O&amp;M (25yr present value)</td>
                <td style={styles.tdAlt}>₹8.2/W</td>
                <td style={styles.tdAlt}>₹5.1/W</td>
                <td style={{ ...styles.tdAlt, color: C }}>-₹3.1/W</td>
              </tr>
              <tr>
                <td style={styles.td}>Output gain (25yr value)</td>
                <td style={styles.td}>Baseline</td>
                <td style={styles.td}>+₹16.5/W</td>
                <td style={{ ...styles.td, color: C, fontWeight: 600 }}>+₹16.5/W</td>
              </tr>
              <tr>
                <td style={styles.tdHLAcc}>Net benefit/W</td>
                <td style={styles.tdHL}>—</td>
                <td style={styles.tdHL}>—</td>
                <td style={styles.tdHLAcc}>+₹19.2/W</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Section 3 */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Solar Tender Competitiveness</div>
          <div style={styles.cardRow}>
            <div style={styles.card}>
              <div style={styles.cardLabel}>L1 Advantage</div>
              <div style={styles.cardDesc}>Lower effective LCOE means tighter bid is possible. On 100MW tender at ₹2.50/kWh, GRAFFISOL enables ₹2.35/kWh bid while maintaining the same margin.</div>
            </div>
            <div style={styles.card}>
              <div style={styles.cardLabel}>Debt Serviceability</div>
              <div style={styles.cardDesc}>Higher output drives higher DSCR (Debt Service Coverage Ratio). Improves project financing terms — lenders price in lower default risk.</div>
            </div>
            <div style={styles.card}>
              <div style={styles.cardLabel}>IRR Improvement</div>
              <div style={styles.cardDesc}>1% output gain on 100MW adds ~0.4% IRR. GRAFFISOL +11% output = +4.4% IRR improvement (all else equal, 70% debt at 12% cost).</div>
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>India Solar 500 GW Opportunity</div>
          <div style={styles.pillRow}>
            <div style={styles.pill}>
              <div style={styles.pillLabel}>India Solar Target 2030</div>
              <div style={styles.pillNum}>500 GW</div>
              <div style={{ color: "#888", fontSize: 12 }}>Total installed capacity target</div>
            </div>
            <div style={styles.pill}>
              <div style={styles.pillLabel}>GRAFFISOL Addressable (Utility 300GW)</div>
              <div style={styles.pillNum}>300,000 MW</div>
              <div style={{ color: "#888", fontSize: 12 }}>Utility-scale addressable capacity</div>
            </div>
            <div style={styles.pill}>
              <div style={styles.pillLabel}>Revenue at ₹0.78/W Coating</div>
              <div style={styles.pillNum}>₹23,400 Cr</div>
              <div style={{ color: "#888", fontSize: 12 }}>Total market value (one-time coat)</div>
            </div>
            <div style={styles.pill}>
              <div style={styles.pillLabel}>Annual Recoat TAM (300GW ÷ 4yr cycle)</div>
              <div style={styles.pillNum}>₹5,850 Cr/yr</div>
              <div style={{ color: "#888", fontSize: 12 }}>Recurring annual recoat market</div>
            </div>
          </div>
        </div>

        <div style={styles.footer}>
          LCOE methodology: NREL SAM model parameters. India solar LCOE: IEEFA India 2024. IRR sensitivity: 1% output = 0.4% IRR based on standard 70% debt 12% cost structure.
        </div>
      </div>
    </div>
  );
}

import React from "react";

const C = "#f59e0b";

export default function SolProductionDataDashboard() {
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
    statRow: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 12,
    },
    statCard: {
      background: "#111",
      border: "1px solid #1f1f1f",
      borderRadius: 8,
      padding: "18px 14px",
    },
    bigNum: {
      fontFamily: "Rajdhani, sans-serif",
      fontSize: 48,
      fontWeight: 700,
      color: C,
      lineHeight: 1,
      marginBottom: 4,
    },
    bigNumMd: {
      fontFamily: "Rajdhani, sans-serif",
      fontSize: 36,
      fontWeight: 700,
      color: C,
      lineHeight: 1,
      marginBottom: 4,
    },
    statLabel: {
      color: "#aaa",
      fontSize: 11,
      textTransform: "uppercase",
      letterSpacing: 1,
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
    tdAcc: {
      padding: "10px 12px",
      border: "1px solid #1f1f1f",
      color: C,
      fontSize: 13,
      fontWeight: 600,
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
      padding: "18px 16px",
    },
    cardLabel: {
      color: "#aaa",
      fontSize: 11,
      textTransform: "uppercase",
      letterSpacing: 1,
      marginBottom: 8,
    },
    cardDesc: {
      color: "#ccc",
      fontSize: 13,
      lineHeight: 1.6,
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
        <h1 style={styles.title}>PRODUCTION DATA</h1>
        <div style={styles.subtitle}>Solar Panel Coating · Real Installation Performance &amp; Site Monitoring Data</div>

        {/* Section 1 */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Installed Base Summary</div>
          <div style={styles.statRow}>
            <div style={styles.statCard}>
              <div style={styles.bigNum}>26+</div>
              <div style={styles.statLabel}>Total Sites</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.bigNum}>150+</div>
              <div style={styles.statLabel}>MW Capacity Coated</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.bigNumMd}>India + UAE</div>
              <div style={styles.statLabel}>Countries</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.bigNum}>+10.8%</div>
              <div style={styles.statLabel}>Avg Measured Gain (IEC 60904-1)</div>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Top Installations — Performance Table</div>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Site</th>
                <th style={styles.th}>Location</th>
                <th style={styles.th}>Capacity</th>
                <th style={styles.th}>Measured Gain</th>
                <th style={styles.th}>Annual Revenue Gain</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.td}>NTPC Floating Solar</td>
                <td style={styles.td}>Ramagundam, TS</td>
                <td style={styles.td}>100 MW</td>
                <td style={styles.tdAcc}>+11.2%</td>
                <td style={styles.td}>₹4.48 Cr</td>
              </tr>
              <tr>
                <td style={styles.tdAlt}>Adani Utility Farm</td>
                <td style={styles.tdAlt}>Kutch, GJ</td>
                <td style={styles.tdAlt}>40 MW</td>
                <td style={{ ...styles.tdAlt, color: C, fontWeight: 600 }}>+11.8%</td>
                <td style={styles.tdAlt}>₹1.89 Cr</td>
              </tr>
              <tr>
                <td style={styles.td}>Commercial Rooftop</td>
                <td style={styles.td}>Pune, MH</td>
                <td style={styles.td}>500 kW</td>
                <td style={styles.tdAcc}>+10.1%</td>
                <td style={styles.td}>₹20.2L</td>
              </tr>
              <tr>
                <td style={styles.tdAlt}>Agri-PV Array</td>
                <td style={styles.tdAlt}>Anand, GJ</td>
                <td style={styles.tdAlt}>2 MW</td>
                <td style={{ ...styles.tdAlt, color: C, fontWeight: 600 }}>+10.5%</td>
                <td style={styles.tdAlt}>₹42L</td>
              </tr>
              <tr>
                <td style={styles.td}>Industrial Rooftop</td>
                <td style={styles.td}>Dubai, UAE</td>
                <td style={styles.td}>1.5 MW</td>
                <td style={styles.tdAcc}>+9.8%</td>
                <td style={styles.td}>AED 3.2L</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Section 3 */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Monthly Performance Monitoring — Jodhpur 50MW Site</div>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Month</th>
                <th style={styles.th}>Output (Baseline)</th>
                <th style={styles.th}>Output (GRAFFISOL)</th>
                <th style={styles.th}>% Gain</th>
                <th style={styles.th}>Soiling Loss</th>
                <th style={styles.th}>Remarks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.td}>Jan</td>
                <td style={styles.td}>55 MWh/day</td>
                <td style={{ ...styles.td, color: C }}>61 MWh/day</td>
                <td style={styles.tdAcc}>+10.9%</td>
                <td style={styles.td}>3.2%</td>
                <td style={styles.td}>Low dust</td>
              </tr>
              <tr>
                <td style={styles.tdAlt}>Apr</td>
                <td style={styles.tdAlt}>62 MWh/day</td>
                <td style={{ ...styles.tdAlt, color: C, fontWeight: 600 }}>69 MWh/day</td>
                <td style={{ ...styles.tdAlt, color: C, fontWeight: 600 }}>+11.3%</td>
                <td style={styles.tdAlt}>5.1%</td>
                <td style={styles.tdAlt}>Pre-monsoon dust</td>
              </tr>
              <tr>
                <td style={styles.td}>Jul</td>
                <td style={styles.td}>48 MWh/day</td>
                <td style={{ ...styles.td, color: C }}>53 MWh/day</td>
                <td style={styles.tdAcc}>+10.4%</td>
                <td style={styles.td}>0.8%</td>
                <td style={styles.td}>Monsoon self-clean</td>
              </tr>
              <tr>
                <td style={styles.tdAlt}>Oct</td>
                <td style={styles.tdAlt}>58 MWh/day</td>
                <td style={{ ...styles.tdAlt, color: C, fontWeight: 600 }}>65 MWh/day</td>
                <td style={{ ...styles.tdAlt, color: C, fontWeight: 600 }}>+12.1%</td>
                <td style={styles.tdAlt}>2.1%</td>
                <td style={styles.tdAlt}>Post-monsoon optimal</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Section 4 */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Monitoring Protocol</div>
          <div style={styles.cardRow}>
            <div style={styles.card}>
              <div style={styles.cardLabel}>String-Level IV Curve</div>
              <div style={styles.cardDesc}>Monthly. Reference string (uncoated) vs coated string under same irradiance conditions (within ±5%). Delta Pmax is the measured gain.</div>
            </div>
            <div style={styles.card}>
              <div style={styles.cardLabel}>Pyranometer Readings</div>
              <div style={styles.cardDesc}>Irradiance matched to within 2% before comparison. Results corrected to STC (1000 W/m2, 25°C) for standardised reporting.</div>
            </div>
            <div style={styles.card}>
              <div style={styles.cardLabel}>Reporting</div>
              <div style={styles.cardDesc}>Quarterly performance report issued to site. Annual IEC 60904-1 certified summary report available for lenders and investors.</div>
            </div>
          </div>
        </div>

        <div style={styles.footer}>
          All data from certified IEC 60904-1 monitoring. Sites use calibrated reference cells and Class A pyranometers. Data available under NDA for project-specific due diligence.
        </div>
      </div>
    </div>
  );
}

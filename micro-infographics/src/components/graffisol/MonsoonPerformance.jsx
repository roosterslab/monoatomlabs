import React from "react";

const C = "#f59e0b";

export default function SolMonsoonPerformance() {
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
    stepRow: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 16,
    },
    stepCard: {
      background: "#111",
      border: "1px solid #1f1f1f",
      borderRadius: 8,
      padding: 20,
    },
    stepCircle: {
      width: 40,
      height: 40,
      borderRadius: "50%",
      background: C,
      color: "#050505",
      fontFamily: "Rajdhani, sans-serif",
      fontSize: 22,
      fontWeight: 700,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 12,
    },
    stepTitle: {
      color: "#fff",
      fontFamily: "Rajdhani, sans-serif",
      fontSize: 16,
      fontWeight: 700,
      marginBottom: 8,
    },
    stepDesc: {
      color: "#ccc",
      fontSize: 13,
      lineHeight: 1.6,
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
    compRow: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16,
    },
    compCard: {
      background: "#111",
      border: "1px solid #1f1f1f",
      borderRadius: 8,
      padding: 20,
    },
    compCardHL: {
      background: "#0d0b00",
      border: "1px solid " + C,
      borderRadius: 8,
      padding: 20,
    },
    compTitle: {
      color: "#aaa",
      fontSize: 12,
      textTransform: "uppercase",
      letterSpacing: 1,
      marginBottom: 10,
    },
    compTitleHL: {
      color: C,
      fontSize: 12,
      textTransform: "uppercase",
      letterSpacing: 1,
      fontWeight: 700,
      marginBottom: 10,
    },
    compText: {
      color: "#ccc",
      fontSize: 13,
      lineHeight: 1.6,
    },
    monthTable: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: 13,
    },
    monthTh: {
      background: "#1f1f1f",
      color: "#aaa",
      fontFamily: "Rajdhani, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: 0.5,
      padding: "8px 10px",
      textAlign: "left",
      border: "1px solid #2a2a2a",
      textTransform: "uppercase",
    },
    monthTd: {
      padding: "9px 10px",
      border: "1px solid #1f1f1f",
      color: "#ccc",
      fontSize: 13,
    },
    monthTdHL: {
      padding: "9px 10px",
      border: "1px solid #1f1f1f",
      color: C,
      fontSize: 13,
      fontWeight: 600,
      background: "#0d0b00",
    },
    rowLabel: {
      padding: "9px 10px",
      border: "1px solid #1f1f1f",
      color: "#fff",
      fontSize: 13,
      fontWeight: 600,
      background: "#111",
      minWidth: 120,
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
        <h1 style={styles.title}>MONSOON PERFORMANCE</h1>
        <div style={styles.subtitle}>Solar Panel Coating · Self-Cleaning Mechanism During Rainfall Events</div>

        {/* Section 1 */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Self-Cleaning Physics</div>
          <div style={styles.stepRow}>
            <div style={styles.stepCard}>
              <div style={styles.stepCircle}>1</div>
              <div style={styles.stepTitle}>Rain Initiates</div>
              <div style={styles.stepDesc}>Droplet contacts GRAFFISOL surface (contact angle &gt;110°). Droplet remains nearly spherical — minimal contact with surface, no spreading.</div>
            </div>
            <div style={styles.stepCard}>
              <div style={styles.stepCircle}>2</div>
              <div style={styles.stepTitle}>Roll-Off Begins</div>
              <div style={styles.stepDesc}>On panel tilt ≥3°, water droplet rolls immediately. As it rolls, it picks up dust particles through capillary adhesion. Droplet carries particles to panel edge.</div>
            </div>
            <div style={styles.stepCard}>
              <div style={styles.stepCircle}>3</div>
              <div style={styles.stepTitle}>Clean Panel</div>
              <div style={styles.stepDesc}>After light rainfall (&gt;2mm), panel is effectively cleaned. No squeegee or human intervention. Self-cleaning cycle resets dust loading to near-zero.</div>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Rainfall Self-Cleaning Efficiency</div>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Rainfall Event</th>
                <th style={styles.th}>Uncoated Panel Loss After</th>
                <th style={styles.th}>GRAFFISOL Panel</th>
                <th style={styles.th}>Self-Cleaning?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.td}>2mm (light shower)</td>
                <td style={styles.td}>8% output loss remaining</td>
                <td style={styles.td}>&lt;1% loss remaining</td>
                <td style={styles.td}>Yes — 90% cleaned</td>
              </tr>
              <tr>
                <td style={styles.tdAlt}>10mm (moderate rain)</td>
                <td style={styles.tdAlt}>3% loss remaining</td>
                <td style={styles.tdAlt}>0% loss</td>
                <td style={styles.tdAlt}>Full clean</td>
              </tr>
              <tr>
                <td style={styles.td}>50mm+ (heavy rain)</td>
                <td style={styles.td}>0% loss</td>
                <td style={styles.td}>0% loss</td>
                <td style={styles.td}>Full clean</td>
              </tr>
              <tr>
                <td style={styles.tdAlt}>0mm (dry 30-day period)</td>
                <td style={styles.tdAlt}>18-22% cumulative loss</td>
                <td style={{ ...styles.tdAlt, color: C, fontWeight: 600 }}>5-7% cumulative loss</td>
                <td style={styles.tdAlt}>No (water needed)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Section 3 */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Monsoon vs Dry Season Output</div>
          <div style={styles.compRow}>
            <div style={styles.compCard}>
              <div style={styles.compTitle}>Monsoon (Jul-Sep)</div>
              <div style={styles.compText}>
                Rainfall self-cleaning keeps panels near-pristine. Output matches or exceeds post-installation levels. Irradiance lower due to cloud cover, but soiling loss near zero throughout the season.
              </div>
            </div>
            <div style={styles.compCardHL}>
              <div style={styles.compTitleHL}>Dry Season (Oct-Jun)</div>
              <div style={styles.compText}>
                <strong style={{ color: "#ccc" }}>Without GRAFFISOL:</strong> soiling loss builds 15-25% over 3 months.<br /><br />
                <strong style={{ color: C }}>With GRAFFISOL:</strong> soiling builds to only 5-7%, then next rain event resets to baseline.
              </div>
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Annual Production Model — Comparative Output</div>
          <table style={styles.monthTable}>
            <thead>
              <tr>
                <th style={styles.monthTh}>Variant</th>
                <th style={styles.monthTh}>Month 1 (Nov)</th>
                <th style={styles.monthTh}>Month 3 (Jan)</th>
                <th style={styles.monthTh}>Month 5 (Mar)</th>
                <th style={styles.monthTh}>Month 7 (Jul, Monsoon)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.rowLabel}>Uncoated</td>
                <td style={styles.monthTd}>100%</td>
                <td style={styles.monthTd}>85% (soiling)</td>
                <td style={styles.monthTd}>78%</td>
                <td style={styles.monthTd}>95% (rain cleaned, lower irr.)</td>
              </tr>
              <tr>
                <td style={{ ...styles.rowLabel, color: C, background: "#0d0b00", border: "1px solid " + C }}>GRAFFISOL</td>
                <td style={styles.monthTdHL}>110%</td>
                <td style={styles.monthTdHL}>106%</td>
                <td style={styles.monthTdHL}>104%</td>
                <td style={styles.monthTdHL}>108%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={styles.footer}>
          Self-cleaning data from IIT Bombay lab test (2mm simulated rain at 5° tilt angle on 1m x 1m panel). Field correlation from Jodhpur 50MW site monsoon monitoring 2023.
        </div>
      </div>
    </div>
  );
}

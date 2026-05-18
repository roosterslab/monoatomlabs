import React from "react";

const C = "#06b6d4";

export default function PolyCustomFormulationGuide() {
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
      background: "#00111a",
      border: "1px solid " + C,
      borderRadius: 8,
      padding: 20,
    },
    compTitle: {
      color: "#aaa",
      fontSize: 12,
      textTransform: "uppercase",
      letterSpacing: 1,
      marginBottom: 12,
    },
    compTitleHL: {
      color: C,
      fontSize: 12,
      textTransform: "uppercase",
      letterSpacing: 1,
      fontWeight: 700,
      marginBottom: 12,
    },
    compText: {
      color: "#ccc",
      fontSize: 13,
      lineHeight: 1.8,
    },
    skuItem: {
      color: "#ccc",
      fontSize: 13,
      lineHeight: 1.7,
      display: "flex",
      alignItems: "flex-start",
      gap: 8,
      marginBottom: 4,
    },
    skuDot: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "#555",
      marginTop: 5,
      flexShrink: 0,
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
    tdAccAlt: {
      padding: "10px 12px",
      border: "1px solid #1f1f1f",
      color: C,
      fontSize: 13,
      fontWeight: 600,
      background: "#0d0d0d",
    },
    stepRow: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 14,
    },
    stepCard: {
      background: "#111",
      border: "1px solid #1f1f1f",
      borderRadius: 8,
      padding: "18px 14px",
    },
    stepCircle: {
      width: 36,
      height: 36,
      borderRadius: "50%",
      background: C,
      color: "#050505",
      fontFamily: "Rajdhani, sans-serif",
      fontSize: 20,
      fontWeight: 700,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 12,
      flexShrink: 0,
    },
    stepTitle: {
      color: "#fff",
      fontFamily: "Rajdhani, sans-serif",
      fontSize: 14,
      fontWeight: 700,
      marginBottom: 6,
    },
    stepDesc: {
      color: "#bbb",
      fontSize: 12,
      lineHeight: 1.6,
    },
    pillGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: 12,
    },
    pillCard: {
      background: "#111",
      border: "1px solid #1f1f1f",
      borderRadius: 8,
      padding: "14px 16px",
      display: "flex",
      alignItems: "flex-start",
      gap: 10,
    },
    pillDot: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: C,
      marginTop: 4,
      flexShrink: 0,
    },
    pillText: {
      color: "#ccc",
      fontSize: 13,
      lineHeight: 1.5,
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
        <div style={styles.tagline}>MONOATOM LABS · HD-G-PE</div>
        <h1 style={styles.title}>CUSTOM FORMULATION</h1>
        <div style={styles.subtitle}>Graphene HDPE Masterbatch · Bespoke Grades, Carrier Resins &amp; Property Targeting</div>

        {/* Section 1 */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Standard vs Custom Masterbatch</div>
          <div style={styles.compRow}>
            <div style={styles.compCard}>
              <div style={styles.compTitle}>Standard Catalog SKUs</div>
              <div>
                <div style={styles.skuItem}><div style={styles.skuDot}></div><span><strong style={{ color: "#ddd" }}>HG-NAT-05</strong> — 5% GNP, natural carrier</span></div>
                <div style={styles.skuItem}><div style={styles.skuDot}></div><span><strong style={{ color: "#ddd" }}>HG-BLK-10</strong> — 10% GNP, black carrier</span></div>
                <div style={styles.skuItem}><div style={styles.skuDot}></div><span><strong style={{ color: "#ddd" }}>HG-WHT-05</strong> — 5% GNP, white carrier</span></div>
              </div>
              <div style={{ color: "#888", fontSize: 12, marginTop: 10 }}>Ready stock · 3-5 day lead time · Min 10kg order</div>
            </div>
            <div style={styles.compCardHL}>
              <div style={styles.compTitleHL}>Custom Formulation</div>
              <div style={styles.compText}>
                Target property specified (e.g., WVTR &lt;0.35 g/m2/day, tensile &gt;30 MPa, UV life &gt;3 seasons).<br /><br />
                Monoatom Labs designs GNP loading + carrier resin + co-additives to hit spec.<br /><br />
                <strong style={{ color: C }}>Min 500kg · 30-day development period</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Property Targeting Menu</div>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Target Property</th>
                <th style={styles.th}>Approach</th>
                <th style={styles.th}>Typical GNP Loading</th>
                <th style={styles.th}>Additional Co-additive</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.tdAcc}>Maximum tensile / impact</td>
                <td style={styles.td}>High loading, oriented</td>
                <td style={styles.td}>1.5-2.0%</td>
                <td style={styles.td}>None (GNP sufficient)</td>
              </tr>
              <tr>
                <td style={styles.tdAccAlt}>Maximum UV life</td>
                <td style={styles.tdAlt}>UV absorber synergy</td>
                <td style={styles.tdAlt}>0.5-1.0%</td>
                <td style={styles.tdAlt}>HALS 0.1%</td>
              </tr>
              <tr>
                <td style={styles.tdAcc}>Maximum barrier (WVTR/OTR)</td>
                <td style={styles.td}>High crystallinity + GNP</td>
                <td style={styles.td}>1.0-1.5%</td>
                <td style={styles.td}>None</td>
              </tr>
              <tr>
                <td style={styles.tdAccAlt}>Maximum thermal conductivity</td>
                <td style={styles.tdAlt}>High loading, aligned</td>
                <td style={styles.tdAlt}>1.5-2.5%</td>
                <td style={styles.tdAlt}>None</td>
              </tr>
              <tr>
                <td style={styles.tdAcc}>Food-grade white, high tensile</td>
                <td style={styles.td}>Low loading, TiO2 carrier</td>
                <td style={styles.td}>0.3-0.5%</td>
                <td style={styles.td}>TiO2 3%</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Section 3 */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Development Process</div>
          <div style={styles.stepRow}>
            <div style={styles.stepCard}>
              <div style={styles.stepCircle}>1</div>
              <div style={styles.stepTitle}>Property Brief</div>
              <div style={styles.stepDesc}>Customer specifies target (e.g., ASTM D638 tensile &gt;30 MPa + ASTM E96 WVTR &lt;0.35). Application and processing method defined.</div>
            </div>
            <div style={styles.stepCard}>
              <div style={styles.stepCircle}>2</div>
              <div style={styles.stepTitle}>Lab Trial (Week 1-2)</div>
              <div style={styles.stepDesc}>3-5 formulation variants made. Compression-moulded test plaques. Full ASTM testing. Best 2 shortlisted for process trial.</div>
            </div>
            <div style={styles.stepCard}>
              <div style={styles.stepCircle}>3</div>
              <div style={styles.stepTitle}>Process Trial (Week 3-4)</div>
              <div style={styles.stepDesc}>Best formulation run on customer extruder or moulder. On-site visit or pellets sent. First-run QC testing performed.</div>
            </div>
            <div style={styles.stepCard}>
              <div style={styles.stepCircle}>4</div>
              <div style={styles.stepTitle}>Lock and Scale (Week 5+)</div>
              <div style={styles.stepDesc}>Final formulation locked. Production masterbatch CoA issued. Commercial supply begins on agreed schedule.</div>
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Typical Custom Formulation Requests</div>
          <div style={styles.pillGrid}>
            <div style={styles.pillCard}>
              <div style={styles.pillDot}></div>
              <div style={styles.pillText}><strong style={{ color: "#fff" }}>Medical-grade HDPE</strong> — ISO 10993 biocompatibility testing available on request for healthcare applications</div>
            </div>
            <div style={styles.pillCard}>
              <div style={styles.pillDot}></div>
              <div style={styles.pillText}><strong style={{ color: "#fff" }}>Anti-static HDPE</strong> — surface resistivity target &lt;10^9 ohm, with carbon nanotube co-loading option</div>
            </div>
            <div style={styles.pillCard}>
              <div style={styles.pillDot}></div>
              <div style={styles.pillText}><strong style={{ color: "#fff" }}>High-flow injection grade</strong> — MFR 20+ with GNP reinforcement; solved with reactive coupling chemistry</div>
            </div>
            <div style={styles.pillCard}>
              <div style={styles.pillDot}></div>
              <div style={styles.pillText}><strong style={{ color: "#fff" }}>Military spec PE</strong> — STANAG or DEF STAN barrier and UV requirements; tailored GNP loading and stabiliser package</div>
            </div>
          </div>
        </div>

        <div style={styles.footer}>
          Custom formulation service available for orders of 500 kg/month commitment or above. Development cost: ₹1.5-3.0 L depending on testing scope. IP: joint ownership on specific formulations by agreement. Contact: formulation@monoatomlabs.com
        </div>
      </div>
    </div>
  );
}

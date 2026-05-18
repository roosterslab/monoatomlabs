import React from "react";

const C = "#64748b";

export default function CerSeasonalPerformance() {
  const wrap = {
    backgroundColor: "#050505",
    fontFamily: "Inter, sans-serif",
    color: "#e5e5e5",
    maxWidth: 900,
    margin: "0 auto",
    padding: "40px",
  };

  const brandLabel = {
    fontSize: 11,
    fontFamily: "Rajdhani, sans-serif",
    fontWeight: 700,
    letterSpacing: 3,
    color: C,
    textTransform: "uppercase",
    marginBottom: 6,
  };

  const mainTitle = {
    fontSize: 32,
    fontFamily: "Rajdhani, sans-serif",
    fontWeight: 700,
    color: "#ffffff",
    letterSpacing: 2,
    marginBottom: 6,
  };

  const subtitle = {
    fontSize: 13,
    color: "#9ca3af",
    marginBottom: 36,
  };

  const sectionTitle = {
    fontSize: 13,
    fontFamily: "Rajdhani, sans-serif",
    fontWeight: 700,
    letterSpacing: 2,
    color: C,
    textTransform: "uppercase",
    marginBottom: 18,
    paddingBottom: 8,
    borderBottom: "1px solid #1f1f1f",
  };

  const grid2x2 = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 16,
    marginBottom: 36,
  };

  const seasonCard = {
    backgroundColor: "#111",
    border: "1px solid #1f1f1f",
    borderRadius: 8,
    padding: "20px",
  };

  const seasonName = {
    fontSize: 14,
    fontFamily: "Rajdhani, sans-serif",
    fontWeight: 700,
    color: C,
    letterSpacing: 1,
    textTransform: "uppercase",
    marginBottom: 10,
  };

  const challengeLabel = {
    fontSize: 11,
    fontFamily: "Rajdhani, sans-serif",
    fontWeight: 700,
    color: "#6b7280",
    letterSpacing: 1,
    textTransform: "uppercase",
    marginBottom: 4,
  };

  const challengeText = {
    fontSize: 12,
    color: "#9ca3af",
    lineHeight: 1.6,
    marginBottom: 10,
  };

  const responseText = {
    fontSize: 12,
    color: "#d1fae5",
    lineHeight: 1.6,
    backgroundColor: "rgba(16,185,129,0.05)",
    border: "1px solid rgba(16,185,129,0.1)",
    borderRadius: 4,
    padding: "8px 10px",
  };

  const tableWrap = {
    marginBottom: 12,
    overflowX: "auto",
  };

  const table = {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: 12,
  };

  const thCell = {
    backgroundColor: C,
    color: "#ffffff",
    fontFamily: "Rajdhani, sans-serif",
    fontWeight: 700,
    fontSize: 11,
    letterSpacing: 1,
    padding: "10px 12px",
    textAlign: "left",
    textTransform: "uppercase",
  };

  const tdBase = {
    padding: "10px 12px",
    borderBottom: "1px solid #1f1f1f",
    color: "#d1d5db",
    fontSize: 12,
  };

  const tdAlt = {
    ...tdBase,
    backgroundColor: "#0d0d0d",
  };

  const tableNote = {
    fontSize: 11,
    color: "#6b7280",
    marginBottom: 36,
    fontStyle: "italic",
  };

  const weatherRow = {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    marginBottom: 36,
  };

  const weatherCard = {
    backgroundColor: "#111",
    border: "1px solid #1f1f1f",
    borderRadius: 8,
    padding: "16px 20px",
    display: "flex",
    gap: 20,
    alignItems: "flex-start",
  };

  const weatherLabel = {
    minWidth: 160,
    fontSize: 12,
    fontFamily: "Rajdhani, sans-serif",
    fontWeight: 700,
    color: C,
    letterSpacing: 1,
    textTransform: "uppercase",
    paddingTop: 2,
  };

  const weatherContent = {
    flex: 1,
    fontSize: 12,
    color: "#9ca3af",
    lineHeight: 1.7,
  };

  const footer = {
    borderTop: "1px solid #1f1f1f",
    paddingTop: 16,
    fontSize: 11,
    color: "#4b5563",
    lineHeight: 1.6,
  };

  return (
    <div style={wrap}>
      <div style={brandLabel}>Monoatom Labs · Ceraphene</div>
      <div style={mainTitle}>SEASONAL PERFORMANCE</div>
      <div style={subtitle}>Graphene-Enhanced Ceramic Coating · Year-Round Protection Across Indian Climates</div>

      {/* Section 1 */}
      <div style={sectionTitle}>Indian Climate Challenge Map</div>
      <div style={grid2x2}>
        <div style={seasonCard}>
          <div style={seasonName}>Summer (Mar-Jun)</div>
          <div style={challengeLabel}>Challenge</div>
          <div style={challengeText}>45-50°C ambient, UV index 11+, panel temp 60-70°C. Uncoated: clearcoat softens, wax melts completely.</div>
          <div style={responseText}>CERAPHENE: stable to 200°C, contact angle maintained above 115° even at peak panel temperatures.</div>
        </div>
        <div style={seasonCard}>
          <div style={seasonName}>Monsoon (Jul-Sep)</div>
          <div style={challengeLabel}>Challenge</div>
          <div style={challengeText}>High humidity, acid rain pH 4-5, tree sap, fungal growth risk on paint surface.</div>
          <div style={responseText}>CERAPHENE: hydrophobic surface repels water instantly. Si-O network is acid-resistant — pH 4.5 rain causes zero etching.</div>
        </div>
        <div style={seasonCard}>
          <div style={seasonName}>Winter (Oct-Feb)</div>
          <div style={challengeLabel}>Challenge</div>
          <div style={challengeText}>Morning dew, road salt in north India, brake dust accumulation on wheel arches and lower panels.</div>
          <div style={responseText}>CERAPHENE: dew sheets off at &lt;3° slope. Salt spray ISO 9227 tested 500hr — no corrosion or delamination.</div>
        </div>
        <div style={seasonCard}>
          <div style={seasonName}>Coastal Year-Round</div>
          <div style={challengeLabel}>Challenge</div>
          <div style={challengeText}>Sea salt spray, high humidity, simultaneous UV + salt combination accelerates paint degradation.</div>
          <div style={responseText}>CERAPHENE: tested to ISO 9227 salt spray + ASTM G154 UV simultaneously. 4+ year durability confirmed.</div>
        </div>
      </div>

      {/* Section 2 */}
      <div style={sectionTitle}>Contact Angle Retention — 12 Month Field Study</div>
      <div style={tableWrap}>
        <table style={table}>
          <thead>
            <tr>
              <th style={thCell}>Location</th>
              <th style={thCell}>Baseline</th>
              <th style={thCell}>3 Months</th>
              <th style={thCell}>6 Months</th>
              <th style={thCell}>12 Months</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdBase}>Mumbai (coastal)</td>
              <td style={tdBase}>116°</td>
              <td style={tdBase}>114°</td>
              <td style={tdBase}>112°</td>
              <td style={tdBase}>110°</td>
            </tr>
            <tr>
              <td style={tdAlt}>Delhi NCR (north India, dust)</td>
              <td style={tdAlt}>115°</td>
              <td style={tdAlt}>113°</td>
              <td style={tdAlt}>111°</td>
              <td style={tdAlt}>109°</td>
            </tr>
            <tr>
              <td style={tdBase}>Pune (moderate)</td>
              <td style={tdBase}>115°</td>
              <td style={tdBase}>114°</td>
              <td style={tdBase}>113°</td>
              <td style={tdBase}>112°</td>
            </tr>
            <tr>
              <td style={tdAlt}>Jodhpur (desert)</td>
              <td style={tdAlt}>116°</td>
              <td style={tdAlt}>115°</td>
              <td style={tdAlt}>113°</td>
              <td style={tdAlt}>111°</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style={tableNote}>&gt; 90° hydrophobic, &gt; 110° superhydrophobic (all retained at 12 months)</div>

      {/* Section 3 */}
      <div style={sectionTitle}>Weather-Specific Performance</div>
      <div style={weatherRow}>
        <div style={weatherCard}>
          <div style={weatherLabel}>Monsoon Acid Rain</div>
          <div style={weatherContent}>
            pH 4.5 rain on CERAPHENE — etching test (24hr exposure): zero pitting, contact angle unchanged post-exposure. Standard clearcoat shows etch marks visible from pH 4.0. CERAPHENE Si-O matrix provides complete acid barrier.
          </div>
        </div>
        <div style={weatherCard}>
          <div style={weatherLabel}>Summer Heat</div>
          <div style={weatherContent}>
            70°C panel test (IR lamp + ambient): contact angle 115° retained after 6hr sustained heat cycle. Standard wax completely degrades at 60°C with beading lost entirely. CERAPHENE ceramic bond is thermally stable to 200°C.
          </div>
        </div>
        <div style={weatherCard}>
          <div style={weatherLabel}>Winter Road Salt</div>
          <div style={weatherContent}>
            5% NaCl spray, 500hr (ISO 9227): no delamination, no discolouration, no corrosion under-coat. Clearcoat visually unchanged post-test. Salt crystal penetration blocked by continuous ceramic film.
          </div>
        </div>
      </div>

      <div style={footer}>
        12-month study on 30 vehicles across Mumbai, Delhi, Pune, Jodhpur — same make/model (Maruti Swift) for comparability. Quarterly contact angle measurements with goniometer.
      </div>
    </div>
  );
}
